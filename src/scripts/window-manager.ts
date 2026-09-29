// Gestor de ventanas de "Deiver OS": abrir/cerrar, foco, arrastre, minimizar,
// maximizar, vista de Actividades, menú contextual, reloj y arranque.

const MOBILE = window.matchMedia("(max-width: 767px)");
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");
const WALLPAPERS = ["fedora", "aurora", "midnight"];

const desktop = document.getElementById("desktop")!;
const overview = document.getElementById("overview")!;
const overviewSearch = document.getElementById("overview-search") as HTMLInputElement;
const overviewWindows = document.getElementById("overview-windows")!;
const activitiesBtn = document.getElementById("activities-btn")!;
const contextMenu = document.getElementById("context-menu")!;
const notification = document.getElementById("notification")!;

let zTop = 10;
let cascade = 0;
let focused: HTMLElement | null = null;

const storage = {
  get(area: Storage, key: string) {
    try {
      return area.getItem(key);
    } catch {
      return null;
    }
  },
  set(area: Storage, key: string, value: string) {
    try {
      area.setItem(key, value);
    } catch {
      /* almacenamiento no disponible */
    }
  },
};

const getWin = (id: string) => document.getElementById(`win-${id}`);
const allWindows = () => Array.from(document.querySelectorAll<HTMLElement>(".window"));
const isVisible = (win: HTMLElement) => !win.hidden && !win.classList.contains("is-minimized");

function animate(el: HTMLElement, className: string) {
  if (REDUCED_MOTION.matches) return Promise.resolve();
  return new Promise<void>((resolve) => {
    el.classList.add(className);
    const done = () => {
      el.classList.remove(className);
      resolve();
    };
    el.addEventListener("animationend", done, { once: true });
    setTimeout(done, 400); // por si la animación no se dispara
  });
}

function place(win: HTMLElement) {
  const area = desktop.getBoundingClientRect();
  const offset = (cascade++ % 6) * 32;
  const w = win.offsetWidth;
  const h = win.offsetHeight;
  const left = Math.min(Math.max(16, (area.width - w) / 2 + offset), area.width - w - 16);
  const top = Math.min(Math.max(12, (area.height - 96 - h) / 2 + offset), area.height - h - 96);
  win.style.left = `${Math.max(8, left)}px`;
  win.style.top = `${Math.max(8, top)}px`;
  win.dataset.placed = "1";
}

function syncDock() {
  document.querySelectorAll<HTMLElement>("[data-dock]").forEach((btn) => {
    const win = getWin(btn.dataset.open!);
    btn.classList.toggle("is-running", !!win && !win.hidden);
    btn.classList.toggle("is-active", !!win && win === focused && isVisible(win));
  });
}

function setHash(id: string | null) {
  history.replaceState(null, "", id ? `#${id}` : location.pathname + location.search);
}

function focusWin(win: HTMLElement) {
  focused = win;
  win.style.zIndex = String(++zTop);
  allWindows().forEach((w) => w.classList.toggle("is-focused", w === win));
  if (!win.contains(document.activeElement)) win.focus({ preventScroll: true });
  win.dispatchEvent(new CustomEvent("app:focus"));
  setHash(win.dataset.app!);
  syncDock();
}

function focusTopmost() {
  const next = allWindows()
    .filter(isVisible)
    .sort((a, b) => Number(b.style.zIndex) - Number(a.style.zIndex))[0];
  if (next) focusWin(next);
  else {
    focused = null;
    setHash(null);
    syncDock();
  }
}

export function openApp(id: string) {
  const win = getWin(id);
  if (!win) return;
  const wasHidden = !isVisible(win);
  win.hidden = false;
  win.classList.remove("is-minimized");
  if (!win.dataset.placed && !MOBILE.matches) place(win);
  if (wasHidden) animate(win, "is-opening");
  closeOverview();
  hideContextMenu();
  focusWin(win);
}

export async function closeApp(win: HTMLElement) {
  await animate(win, "is-closing");
  win.hidden = true;
  win.classList.remove("is-maximized", "is-focused");
  if (focused === win) focusTopmost();
  else syncDock();
}

function minimize(win: HTMLElement) {
  win.classList.add("is-minimized");
  win.classList.remove("is-focused");
  if (focused === win) focusTopmost();
}

function toggleMaximize(win: HTMLElement) {
  if (MOBILE.matches) return;
  win.classList.toggle("is-maximized");
}

// ---------- Arrastre de ventanas ----------
function enableDrag() {
  desktop.addEventListener("pointerdown", (e) => {
    const win = (e.target as HTMLElement).closest<HTMLElement>(".window");
    if (!win) return;
    if (win !== focused) focusWin(win);

    const bar = (e.target as HTMLElement).closest(".window-titlebar");
    if (!bar || (e.target as HTMLElement).closest("button") || e.button !== 0) return;
    if (MOBILE.matches || win.classList.contains("is-maximized")) return;

    const area = desktop.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const origLeft = win.offsetLeft;
    const origTop = win.offsetTop;
    win.classList.add("is-dragging");
    bar.setPointerCapture(e.pointerId);

    const move = (ev: PointerEvent) => {
      const left = Math.min(Math.max(origLeft + ev.clientX - startX, 120 - win.offsetWidth), area.width - 120);
      const top = Math.min(Math.max(origTop + ev.clientY - startY, 0), area.height - 48);
      win.style.left = `${left}px`;
      win.style.top = `${top}px`;
    };
    const up = () => {
      win.classList.remove("is-dragging");
      bar.removeEventListener("pointermove", move as EventListener);
      bar.removeEventListener("pointerup", up);
      bar.removeEventListener("pointercancel", up);
    };
    bar.addEventListener("pointermove", move as EventListener);
    bar.addEventListener("pointerup", up);
    bar.addEventListener("pointercancel", up);
  });

  desktop.addEventListener("dblclick", (e) => {
    const bar = (e.target as HTMLElement).closest(".window-titlebar");
    if (bar && !(e.target as HTMLElement).closest("button")) {
      toggleMaximize(bar.closest<HTMLElement>(".window")!);
    }
  });
}

// Mantiene las ventanas dentro del área visible al redimensionar.
function clampWindows() {
  if (MOBILE.matches) return;
  const area = desktop.getBoundingClientRect();
  allWindows()
    .filter((w) => w.dataset.placed)
    .forEach((w) => {
      w.style.left = `${Math.min(Math.max(w.offsetLeft, 0), Math.max(0, area.width - 160))}px`;
      w.style.top = `${Math.min(Math.max(w.offsetTop, 0), Math.max(0, area.height - 120))}px`;
    });
}

// ---------- Actividades ----------
function renderOverviewWindows() {
  const open = allWindows().filter((w) => !w.hidden);
  document.getElementById("overview-windows-section")!.hidden = open.length === 0;
  overviewWindows.innerHTML = "";
  open.forEach((w) => {
    const card = document.createElement("button");
    card.className = "overview-window";
    card.dataset.open = w.dataset.app;
    const icon = w.querySelector(".window-title .app-icon")?.cloneNode(true);
    if (icon) card.appendChild(icon);
    const label = document.createElement("span");
    label.textContent = w.dataset.title ?? "";
    card.appendChild(label);
    overviewWindows.appendChild(card);
  });
}

function openOverview() {
  hideNotification();
  renderOverviewWindows();
  overview.hidden = false;
  activitiesBtn.setAttribute("aria-expanded", "true");
  overviewSearch.value = "";
  filterApps("");
  if (!MOBILE.matches) overviewSearch.focus();
}

function closeOverview() {
  if (overview.hidden) return;
  overview.hidden = true;
  activitiesBtn.setAttribute("aria-expanded", "false");
}

function filterApps(query: string) {
  const q = query.trim().toLowerCase();
  overview.querySelectorAll<HTMLElement>("[data-app-name]").forEach((el) => {
    el.hidden = !!q && !el.dataset.appName!.includes(q);
  });
}

// ---------- Menú contextual y fondo de pantalla ----------
function applyWallpaper(name: string) {
  document.body.dataset.wallpaper = name;
}

function nextWallpaper() {
  const current = document.body.dataset.wallpaper ?? WALLPAPERS[0];
  const next = WALLPAPERS[(WALLPAPERS.indexOf(current) + 1) % WALLPAPERS.length];
  applyWallpaper(next);
  storage.set(localStorage, "deiveros-wallpaper", next);
}

function hideContextMenu() {
  contextMenu.hidden = true;
}

function showContextMenu(x: number, y: number) {
  contextMenu.hidden = false;
  const { width, height } = contextMenu.getBoundingClientRect();
  contextMenu.style.left = `${Math.min(x, window.innerWidth - width - 8)}px`;
  contextMenu.style.top = `${Math.min(y, window.innerHeight - height - 8)}px`;
}

// ---------- Notificación ----------
let notificationTimer: number | undefined;

function showNotification() {
  notification.hidden = false;
  animate(notification, "is-entering");
  notificationTimer = window.setTimeout(hideNotification, 10000);
}

function hideNotification() {
  clearTimeout(notificationTimer);
  if (notification.hidden) return;
  animate(notification, "is-leaving").then(() => (notification.hidden = true));
}

// ---------- Reloj ----------
function startClock() {
  const clock = document.getElementById("clock")!;
  const fmt = new Intl.DateTimeFormat("es", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
  const tick = () => {
    const now = new Date();
    clock.textContent = fmt.format(now).replace(",", "");
    clock.setAttribute("datetime", now.toISOString());
  };
  tick();
  setInterval(tick, 15000);
}

// ---------- Eventos globales ----------
function bindEvents() {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    if (!target.closest("#context-menu")) hideContextMenu();
    if (target.closest("[data-dismiss-notification]")) hideNotification();
    if (target.closest("[data-wallpaper-next]")) {
      nextWallpaper();
      hideContextMenu();
      return;
    }

    const action = target.closest<HTMLElement>("[data-action]");
    if (action) {
      const win = action.closest<HTMLElement>(".window")!;
      if (action.dataset.action === "close") closeApp(win);
      if (action.dataset.action === "minimize") minimize(win);
      if (action.dataset.action === "maximize") toggleMaximize(win);
      return;
    }

    const opener = target.closest<HTMLElement>("[data-open]");
    if (opener) {
      const win = getWin(opener.dataset.open!);
      // En el dock, pulsar la app enfocada la minimiza (como en GNOME/macOS).
      if (opener.hasAttribute("data-dock") && win && win === focused && isVisible(win)) minimize(win);
      else openApp(opener.dataset.open!);
      return;
    }

    if (target === overview) closeOverview();
  });

  activitiesBtn.addEventListener("click", () => (overview.hidden ? openOverview() : closeOverview()));
  overviewSearch.addEventListener("input", () => filterApps(overviewSearch.value));
  overviewSearch.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const first = overview.querySelector<HTMLElement>(".overview-apps [data-open]:not([hidden])");
    if (first) openApp(first.dataset.open!);
  });

  desktop.addEventListener("contextmenu", (e) => {
    if ((e.target as HTMLElement).closest(".window")) return;
    e.preventDefault();
    showContextMenu(e.clientX, e.clientY);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!contextMenu.hidden) return hideContextMenu();
      if (!overview.hidden) return closeOverview();
      if (focused && isVisible(focused)) closeApp(focused);
    }
  });

  document.addEventListener("os:open", (e) => openApp((e as CustomEvent<string>).detail));
  document.addEventListener("os:close", (e) => {
    const win = getWin((e as CustomEvent<string>).detail);
    if (win) closeApp(win);
  });

  window.addEventListener("resize", clampWindows);
  MOBILE.addEventListener("change", () => allWindows().forEach((w) => delete w.dataset.placed));
}

// ---------- Arranque ----------
function startDesktop(firstVisit: boolean) {
  const fromHash = location.hash.slice(1);
  openApp(getWin(fromHash) ? fromHash : "about");
  if (firstVisit) setTimeout(showNotification, 900);
}

function boot() {
  const bootEl = document.getElementById("boot")!;
  const firstVisit = !storage.get(sessionStorage, "deiveros-booted");

  if (!firstVisit || REDUCED_MOTION.matches) {
    bootEl.remove();
    storage.set(sessionStorage, "deiveros-booted", "1");
    startDesktop(firstVisit);
    return;
  }

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    storage.set(sessionStorage, "deiveros-booted", "1");
    bootEl.classList.add("is-done");
    setTimeout(() => bootEl.remove(), 450);
    startDesktop(true);
    window.removeEventListener("keydown", finish);
  };
  bootEl.addEventListener("click", finish);
  window.addEventListener("keydown", finish);
  setTimeout(finish, 1700);
}

export function initDesktop() {
  const saved = storage.get(localStorage, "deiveros-wallpaper");
  applyWallpaper(saved && WALLPAPERS.includes(saved) ? saved : WALLPAPERS[0]);
  startClock();
  enableDrag();
  bindEvents();
  boot();
}
