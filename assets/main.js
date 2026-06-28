import { j as jsxRuntimeExports } from "./proxy.js";
import { B as BrowserRouter, R as Routes, a as Route, r as reactDomExports } from "./index.js";
import { L as Layout } from "../components/Layout.js";
import { H as Home } from "../pages/Home.js";
import { A as About } from "../pages/About.js";
import { P as Projects } from "../pages/Projects.js";
import { S as Skills } from "../pages/Skills.js";
import { W as Writing } from "../pages/Writing.js";
import { C as CaseStudies } from "../pages/CaseStudies.js";
import { C as Contact } from "../pages/Contact.js";
import "../components/AuroraBackground.js";
import "../components/Starfield.js";
import "../components/Navigation.js";
import "./createLucideIcon.js";
import "./mail.js";
import "./terminal.js";
import "./github.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {}), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "projects", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "skills", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "writing", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Writing, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "case-studies", element: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudies, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) })
  ] }) }) });
}
reactDomExports.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}), document.getElementById("root"));
