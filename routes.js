(function (global) {
  const REPO_SEGMENT = "OlgaSidorova-art";
  const INDEX_SECTIONS = new Set(["home", "shop", "about", "contacts"]);

  function getSiteBasePath() {
    const segs = global.location.pathname.split("/").filter(Boolean);
    const i = segs.indexOf(REPO_SEGMENT);
    if (i !== -1) return "/" + segs.slice(0, i + 1).join("/");
    return "";
  }

  function pathTo(segment) {
    const s = String(segment || "").replace(/^\/+|\/+$/g, "");
    const b = getSiteBasePath();
    if (b) return b + "/" + s;
    return s;
  }

  function pathnameAfterRepo() {
    const segs = global.location.pathname.split("/").filter(Boolean);
    const i = segs.indexOf(REPO_SEGMENT);
    if (i === -1) return [];
    return segs.slice(i + 1);
  }

  function isIndexSection(name) {
    return INDEX_SECTIONS.has(name);
  }

  function getIndexSectionFromPath() {
    const after = pathnameAfterRepo();
    if (!after.length) return "home";
    const last = after[after.length - 1];
    if (last === "index.html") {
      if (after.length >= 2) {
        const prev = after[after.length - 2];
        if (INDEX_SECTIONS.has(prev)) return prev;
      }
      return "home";
    }
    if (INDEX_SECTIONS.has(last)) return last;
    return "home";
  }

  function injectBaseTag() {
    const b = getSiteBasePath();
    if (!b) return;
    const base = document.createElement("base");
    base.href = b.endsWith("/") ? b : b + "/";
    document.head.prepend(base);
  }

  function applySpaRestore(expectedTarget) {
    const t = sessionStorage.getItem("spaTarget");
    const p = sessionStorage.getItem("spaPath");
    if (!p || t !== expectedTarget) return;
    sessionStorage.removeItem("spaPath");
    sessionStorage.removeItem("spaTarget");
    const normalized = p.replace(/\/+$/, "") || p;
    history.replaceState(null, "", normalized);
  }

  function normalizeIndexDocumentUrl() {
    const after = pathnameAfterRepo();
    if (!after.length) return;
    const last = after[after.length - 1];
    if (last !== "index.html") return;
    history.replaceState(null, "", pathTo("home"));
  }

  function normalizeRepoRootToHome() {
    const after = pathnameAfterRepo();
    if (after.length) return;
    const b = getSiteBasePath();
    if (!b) return;
    const cur = global.location.pathname.replace(/\/+$/, "");
    if (cur === b || cur === b + "/") {
      history.replaceState(null, "", pathTo("home"));
    }
  }

  global.SiteRoutes = {
    REPO_SEGMENT,
    INDEX_SECTIONS,
    getSiteBasePath,
    pathTo,
    pathnameAfterRepo,
    isIndexSection,
    getIndexSectionFromPath,
    injectBaseTag,
    applySpaRestore,
    normalizeIndexDocumentUrl,
    normalizeRepoRootToHome,
  };
})(typeof window !== "undefined" ? window : this);
