const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Argentina/Buenos_Aires",
  hour: "2-digit",
  minute: "2-digit",
});

const element = document.querySelector<HTMLElement>("[data-local-time]");

const tick = (): void => {
  if (!element) return;
  element.textContent = `${formatter.format(new Date())} ART`;
  element.hidden = false;
};

tick();
setInterval(tick, 30_000);
