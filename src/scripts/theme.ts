const STORAGE_KEY = "theme";

export const toggleTheme = (): void => {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  } catch {
    // Storage can be blocked; the toggle still works for this page view.
  }
};
