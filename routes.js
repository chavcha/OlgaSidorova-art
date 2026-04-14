(function (global) {
  const REPO_SEGMENTS = ["OlgaSidorova-art-main", "OlgaSidorova-art"];
  const INDEX_SECTIONS = new Set(["home", "shop", "about", "contacts"]);
  const isFileProtocol = global.location.protocol === "file:";

  function detectRepoSegment() {
    const segs = global.location.pathname.split("/").filter(Boolean);
    const found = REPO_SEGMENTS.find((segment) => segs.includes(segment));
    return found || "";
  }

  function getSiteBasePath() {
    const repoSegment = detectRepoSegment();
    if (!repoSegment) return "";
    const segs = global.location.pathname.split("/").filter(Boolean);
    const i = segs.indexOf(repoSegment);
    if (i !== -1) return "/" + segs.slice(0, i + 1).join("/");
    return "";
  }

  function pathTo(segment) {
    const s = String(segment || "").replace(/^\/+|\/+$/g, "");
    if (isFileProtocol) {
      if (INDEX_SECTIONS.has(s)) return `index.html#${s}`;
      return `product.html#${s}`;
    }
    const b = getSiteBasePath();
    if (b) return b + "/" + s;
    return "/" + s;
  }

  function pathnameAfterRepo() {
    const repoSegment = detectRepoSegment();
    const segs = global.location.pathname.split("/").filter(Boolean);
    const i = repoSegment ? segs.indexOf(repoSegment) : -1;
    if (i !== -1) return segs.slice(i + 1);
    return segs;
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
    if (isFileProtocol) return;
    const b = getSiteBasePath();
    if (!b) return;
    const base = document.createElement("base");
    base.href = b.endsWith("/") ? b : b + "/";
    document.head.prepend(base);
  }

  function rewriteSectionLinksForFileProtocol() {
    if (!isFileProtocol) return;
    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href || !INDEX_SECTIONS.has(href)) return;
      a.setAttribute("href", pathTo(href));
    });
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
    const cur = global.location.pathname.replace(/\/+$/, "");
    if (b) {
      if (cur === b || cur === b + "/") {
        history.replaceState(null, "", pathTo("home"));
      }
      return;
    }
    if (!cur) {
      history.replaceState(null, "", pathTo("home"));
    }
  }

  global.SiteRoutes = {
    REPO_SEGMENT: detectRepoSegment(),
    REPO_SEGMENTS,
    INDEX_SECTIONS,
    getSiteBasePath,
    pathTo,
    pathnameAfterRepo,
    isIndexSection,
    getIndexSectionFromPath,
    injectBaseTag,
    rewriteSectionLinksForFileProtocol,
    applySpaRestore,
    normalizeIndexDocumentUrl,
    normalizeRepoRootToHome,
  };

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", rewriteSectionLinksForFileProtocol);
  }
})(typeof window !== "undefined" ? window : this);
