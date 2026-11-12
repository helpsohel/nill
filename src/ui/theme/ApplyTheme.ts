type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "company-theme";

function getStoredTheme(): Theme {
    try {
        const storedTheme = localStorage.getItem(STORAGE_KEY);

        if (
            storedTheme === "light" ||
            storedTheme === "dark" ||
            storedTheme === "system"
        ) {
            return storedTheme;
        }
    } catch {
        // localStorage may be unavailable.
    }

    return "system";
}

function applyTheme(theme: Theme) {

    const currentTheme = getStoredTheme();
    if (currentTheme == theme) { return };

    const resolvedTheme =
        theme === "system"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
            : theme;

    document.documentElement.setAttribute(
        "data-theme",
        resolvedTheme
    );
    localStorage.setItem(STORAGE_KEY, theme);
}

export default applyTheme;