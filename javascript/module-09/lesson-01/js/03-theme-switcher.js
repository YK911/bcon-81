const THEME_LS = "theme";
const TOGGLER_STATUS_LS = "toggler";
const THEME_SETTING = {
  THEME: "theme",
  TOGGLER: "toggler",
};

const refs = {
  sidebar: document.querySelector(".js-sidebar"),
  sidebarOpenBtn: document.querySelector(".js-sidebar-btn[data-open]"),
  sidebarCloseBtn: document.querySelector(".js-sidebar-btn[data-close]"),
  themeSwitcher: document.querySelector(".js-toggler-control"),
  themeLink: document.querySelector('link[media*="prefers-color-scheme"]'),
};

init();

refs.sidebarOpenBtn.addEventListener("click", toggleSidebar);
refs.sidebarCloseBtn.addEventListener("click", toggleSidebar);
themeSwitcher.addEventListener("change", handleSwitchTheme);

function toggleSidebar() {
  refs.sidebar.classList.toggle("open");
}

function handleSwitchTheme(event) {
  const currentThemeValue = event.target.checked ? "dark" : "light";

  event.target.value = currentThemeValue;
  saveLS(THEME_LS, currentThemeValue);
  saveLS(TOGGLER_STATUS_LS, event.target.checked);
  switchTheme(currentThemeValue);
}

function init() {
  const currentTheme = loadLS(THEME_LS);
  const userTheme = currentTheme.length === 0 ? "light" : currentTheme;

  refs.themeSwitcher.checked = loadLS(TOGGLER_STATUS_LS);
  refs.themeSwitcher.value = currentTheme;
  switchTheme(userTheme);
}

function loadLS(key) {
  try {
    const lsData = localStorage.getItem(key) || "";
    if (lsData.length === 0) return "";

    return JSON.parse(lsData);
  } catch {
    console.warn("Error");
  }
}

function saveLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function switchTheme(themeColor = "light") {
  refs.themeLink.href = `./css/${themeColor}-theme.css`;
  refs.themeLink.media = `(prefers-color-scheme: ${themeColor})`;
}
