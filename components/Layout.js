import { j as jsxRuntimeExports, m as motion } from "../assets/proxy.js";
import { A as AuroraBackground } from "./AuroraBackground.js";
import { S as Starfield } from "./Starfield.js";
import { N as Navigation, A as AnimatePresence } from "./Navigation.js";
import { u as useLocation, O as Outlet } from "../assets/index.js";
import "../assets/createLucideIcon.js";
import "../assets/mail.js";
function Layout() {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-space-900 text-slate-200 relative selection:bg-aurora-teal/30 selection:text-aurora-turquoise", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuroraBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Starfield, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative z-10 lg:pl-20 pt-16 lg:pt-0 min-h-screen flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: {
          opacity: 0,
          scale: 0.98,
          filter: "blur(10px)"
        },
        animate: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)"
        },
        exit: {
          opacity: 0,
          scale: 1.02,
          filter: "blur(10px)"
        },
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        },
        className: "flex-grow w-full max-w-7xl mx-auto p-6 md:p-12",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
      },
      location.pathname
    ) }) })
  ] });
}
export {
  Layout as L
};
