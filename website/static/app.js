const state = {
  projects: [],
  query: "",
  group: "All",
};

const accents = ["#d5414f", "#74d6cc", "#e2bc6a", "#b996d8", "#eb846b"];
const symbols = {
  "Official Resources and Getting Started": "⛩",
  "Game Tools": "⌘",
  "Gameplay, Replays, and Scoring": "◎",
  "Reverse Engineering and Preservation": "⌁",
  "Game Development": "✦",
  "Fighting Games": "⚔",
  "Music and Data": "♫",
  "Open-source Fangames": "☄",
  "Touhou in Other Games": "◇",
  "Knowledge and Community": "☯",
  "Historical and Reference Projects": "◌",
};

const grid = document.querySelector("#project-grid");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const resultCount = document.querySelector("#result-count");
const resourceCount = document.querySelector("#resource-count");
const categoryCount = document.querySelector("#category-count");
const emptyState = document.querySelector("#empty-state");
const clearFilters = document.querySelector("#clear-filters");

function normalized(value) {
  return value.toLocaleLowerCase();
}

function filteredProjects() {
  const query = normalized(state.query.trim());

  return state.projects.filter((project) => {
    const inGroup = state.group === "All" || project.group === state.group;
    const searchable = normalized(
      `${project.name} ${project.description} ${project.group} ${project.category}`,
    );
    return inGroup && (!query || searchable.includes(query));
  });
}

function createCard(project, groupIndex) {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = project.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.style.setProperty("--card-accent", accents[groupIndex % accents.length]);

  const topLine = document.createElement("div");
  topLine.className = "card-topline";

  const badge = document.createElement("span");
  badge.className = "category-badge";
  badge.textContent = project.category;

  const symbol = document.createElement("span");
  symbol.className = "card-symbol";
  symbol.setAttribute("aria-hidden", "true");
  symbol.textContent = symbols[project.group] || "✦";

  topLine.append(badge, symbol);

  const title = document.createElement("h3");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  const visit = document.createElement("span");
  visit.className = "visit-label";
  visit.append("Visit resource ");
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "→";
  visit.append(arrow);

  card.append(topLine, title, description, visit);
  return card;
}

function renderProjects() {
  const visible = filteredProjects();
  const groups = [...new Set(state.projects.map((project) => project.group))];
  const fragment = document.createDocumentFragment();

  for (const project of visible) {
    fragment.append(createCard(project, groups.indexOf(project.group)));
  }

  grid.replaceChildren(fragment);
  resultCount.textContent = `${visible.length} resource${visible.length === 1 ? "" : "s"} shown`;
  emptyState.hidden = visible.length !== 0;
}

function renderFilters() {
  const groups = ["All", ...new Set(state.projects.map((project) => project.group))];
  const fragment = document.createDocumentFragment();

  for (const group of groups) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.dataset.group = group;
    button.setAttribute("aria-pressed", String(group === state.group));
    button.textContent = group;
    button.addEventListener("click", () => {
      state.group = group;
      for (const filter of filters.querySelectorAll(".filter-button")) {
        filter.setAttribute("aria-pressed", String(filter.dataset.group === group));
      }
      renderProjects();
    });
    fragment.append(button);
  }

  filters.replaceChildren(fragment);
}

function resetCollection() {
  state.query = "";
  state.group = "All";
  search.value = "";
  renderFilters();
  renderProjects();
  search.focus();
}

search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProjects();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== search) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === "Escape" && document.activeElement === search) {
    search.value = "";
    state.query = "";
    search.blur();
    renderProjects();
  }
});

clearFilters.addEventListener("click", resetCollection);

fetch("projects.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to load the catalog (${response.status})`);
    }
    return response.json();
  })
  .then((payload) => {
    state.projects = payload.projects;
    const groups = new Set(state.projects.map((project) => project.group));
    resourceCount.textContent = payload.count;
    categoryCount.textContent = groups.size;
    renderFilters();
    renderProjects();
  })
  .catch((error) => {
    console.error(error);
    resultCount.textContent = "The collection could not be loaded.";
    emptyState.hidden = false;
    emptyState.querySelector("h3").textContent = "The boundary is unstable.";
    emptyState.querySelector("p").textContent = "Please refresh the page or try again later.";
    clearFilters.hidden = true;
  });
