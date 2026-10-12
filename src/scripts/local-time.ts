const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Argentina/Buenos_Aires",
  hour: "2-digit",
  minute: "2-digit",
});

let timer: number | undefined;

const start = (): void => {
  window.clearInterval(timer);
  const element = document.querySelector<HTMLElement>("[data-local-time]");
  if (!element) return;

  const tick = (): void => {
    element.textContent = `${formatter.format(new Date())} ART`;
    element.hidden = false;
  };

  tick();
  timer = window.setInterval(tick, 30_000);
};

document.addEventListener("astro:page-load", start);
