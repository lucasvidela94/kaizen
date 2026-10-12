interface Filters {
  search: string;
  category: string;
  tags: Set<string>;
}

const filters: Filters = { search: "", category: "all", tags: new Set() };

const cards = [...document.querySelectorAll<HTMLElement>("[data-blog-card]")];
const featured = document.querySelector<HTMLElement>("[data-featured-block]");
const empty = document.querySelector<HTMLElement>("[data-empty]");
const count = document.querySelector<HTMLElement>("[data-count]");

const matches = (card: HTMLElement): boolean => {
  const { search, category, tags } = filters;
  if (search && !card.dataset.search?.includes(search)) return false;
  if (category !== "all" && card.dataset.category !== category) return false;
  if (tags.size === 0) return true;
  const cardTags = (card.dataset.tags ?? "").split(",");
  return [...tags].some((tag) => cardTags.includes(tag));
};

const isFiltering = (): boolean =>
  Boolean(filters.search) || filters.category !== "all" || filters.tags.size > 0;

const render = (): void => {
  let visible = 0;
  for (const card of cards) {
    const show = matches(card);
    card.hidden = !show;
    if (show && !card.closest("[data-featured-block]")) visible++;
  }
  if (featured) featured.hidden = isFiltering();
  if (empty) empty.hidden = visible > 0;
  if (count) count.textContent = `${visible} post${visible === 1 ? "" : "s"} found`;
  for (const button of document.querySelectorAll<HTMLElement>("[data-tag]")) {
    button.setAttribute("aria-pressed", String(filters.tags.has(button.dataset.tag ?? "")));
  }
};

const searchInput = document.querySelector<HTMLInputElement>("[data-search]");
searchInput?.addEventListener("input", () => {
  filters.search = searchInput.value.trim().toLowerCase();
  render();
});

const categorySelect = document.querySelector<HTMLSelectElement>("[data-category]");
categorySelect?.addEventListener("change", () => {
  filters.category = categorySelect.value;
  render();
});

for (const button of document.querySelectorAll<HTMLElement>("[data-tag]")) {
  button.addEventListener("click", () => {
    const tag = button.dataset.tag ?? "";
    if (!filters.tags.delete(tag)) filters.tags.add(tag);
    render();
  });
}

render();
