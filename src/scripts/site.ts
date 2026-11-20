const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function initTheme() {
  const btn = document.getElementById("theme-toggle");
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  const apply = (theme: string) => {
    document.documentElement.dataset.theme = theme;
    if (btn) btn.setAttribute("aria-label", (theme === "dark" ? btn.dataset.labelLight : btn.dataset.labelDark) ?? "");
    if (meta) meta.content = theme === "dark" ? "#0A0A12" : "#F4F7FF";
  };
  apply(document.documentElement.dataset.theme ?? "dark");
  btn?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  });
}

function initMenu() {
  const sheet = document.getElementById("mobile-menu");
  const open = document.getElementById("menu-open");
  if (!sheet || !open) return;
  const setOpen = (value: boolean) => {
    sheet.hidden = !value;
    open.setAttribute("aria-expanded", String(value));
    document.body.classList.toggle("no-scroll", value);
    if (value) sheet.querySelector<HTMLElement>(".sheet-panel [data-menu-close]")?.focus();
    else open.focus();
  };
  open.addEventListener("click", () => setOpen(true));
  sheet.querySelectorAll("[data-menu-close]").forEach((el) => el.addEventListener("click", () => setOpen(false)));
  sheet.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      sheet.hidden = true;
      open.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }),
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sheet.hidden) setOpen(false);
  });
}

function initLangLinks() {
  document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((a) =>
    a.addEventListener("click", () => {
      a.href = a.pathname + location.hash;
    }),
  );
}

function initTyping() {
  const el = document.getElementById("typed");
  if (!el) return;
  const cmds = ["./deiver --init", "npm run dev", "git push origin main", "astro build --neon", "whoami  # full stack dev"];
  if (reducedMotion) {
    el.textContent = cmds[0];
    return;
  }
  let c = 0, i = 0, del = false, wait = 0;
  setInterval(() => {
    if (wait > 0) return void wait--;
    const cmd = cmds[c];
    if (!del) {
      i++;
      if (i >= cmd.length) (del = true), (wait = 18);
    } else {
      i--;
      if (i <= 0) (del = false), (c = (c + 1) % cmds.length), (wait = 4);
    }
    el.textContent = cmd.slice(0, i);
  }, 70);
}

let toastTimer: number | undefined;
function toast(title: string, text: string, ok = true) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.querySelector(".toast-title")!.textContent = title;
  el.querySelector(".toast-text")!.textContent = text;
  el.classList.toggle("is-error", !ok);
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => (el.hidden = true), 2500);
}

function initCopy() {
  const btn = document.getElementById("copy-email");
  btn?.addEventListener("click", async () => {
    const d = btn.dataset;
    try {
      await navigator.clipboard.writeText(d.email ?? "");
      toast(d.ok ?? "", d.okText ?? "");
    } catch {
      toast(d.error ?? "", d.email ?? "", false);
    }
  });
}

function initForm() {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const d = form.dataset;
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    const label = submit.querySelector("span")!;
    const original = label.textContent;
    submit.disabled = true;
    label.textContent = d.sending ?? "";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      toast(d.ok ?? "", d.okText ?? "");
    } catch {
      toast(d.error ?? "", d.errorText ?? "", false);
    } finally {
      submit.disabled = false;
      label.textContent = original;
    }
  });
}

export function initSite() {
  initTheme();
  initMenu();
  initLangLinks();
  initTyping();
  initCopy();
  initForm();
}
