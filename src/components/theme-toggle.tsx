import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:bg-portfolio-bg/50 text-portfolio-secondary hover:text-portfolio-primary"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
