import { j as jsxRuntimeExports, m as motion } from "../assets/proxy.js";
import { L as Link } from "../assets/index.js";
import { T as Terminal } from "../assets/terminal.js";
import { c as createLucideIcon } from "../assets/createLucideIcon.js";
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[80vh] flex flex-col justify-center items-center relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-4xl mx-auto mb-12 h-48 sm:h-64 flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          className: "absolute inset-0 w-full h-full",
          viewBox: "0 0 800 200",
          preserveAspectRatio: "xMidYMid meet",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.path,
              {
                d: "M 100 150 L 200 50 L 300 150 L 250 100 L 150 100 M 400 150 L 400 50 L 500 50 L 500 100 L 400 100 M 600 150 L 600 50 L 700 150 L 700 50",
                fill: "transparent",
                stroke: "url(#aurora-gradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                initial: {
                  pathLength: 0,
                  opacity: 0
                },
                animate: {
                  pathLength: 1,
                  opacity: 0.3
                },
                transition: {
                  duration: 3,
                  ease: "easeInOut"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "linearGradient",
              {
                id: "aurora-gradient",
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#14b8a6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#5eead4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#8b5cf6" })
                ]
              }
            ) }),
            [
              [100, 150],
              [200, 50],
              [300, 150],
              [250, 100],
              [150, 100],
              [400, 150],
              [400, 50],
              [500, 50],
              [500, 100],
              [600, 150],
              [600, 50],
              [700, 150],
              [700, 50]
            ].map(
              ([cx, cy], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.circle,
                {
                  cx,
                  cy,
                  r: "4",
                  fill: "#5eead4",
                  className: "filter drop-shadow-[0_0_8px_rgba(94,234,212,0.8)]",
                  initial: {
                    scale: 0,
                    opacity: 0
                  },
                  animate: {
                    scale: 1,
                    opacity: 1
                  },
                  transition: {
                    delay: 2 + i * 0.1,
                    duration: 0.5
                  }
                },
                i
              )
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute inset-0 flex items-center justify-center pointer-events-none",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            delay: 3.5,
            duration: 1
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-aurora-turquoise to-cosmic-violet text-center", children: "SARAH DEV" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "text-center max-w-2xl z-10",
        initial: {
          opacity: 0,
          y: 20
        },
        animate: {
          opacity: 1,
          y: 0
        },
        transition: {
          delay: 4,
          duration: 0.8
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-8 border-aurora-teal/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { size: 16, className: "text-aurora-turquoise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-aurora-turquoise", children: "Currently Debugging the Multiverse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl text-slate-300 mb-10 font-light leading-relaxed", children: "Translating cosmic chaos into suspiciously organized files. I build web experiences that feel like drifting through a nebula, but run like a well-oiled machine." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                whileHover: {
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(94, 234, 212, 0.4)"
                },
                whileTap: {
                  scale: 0.95
                },
                className: "px-8 py-4 bg-gradient-to-r from-aurora-teal to-cosmic-violet rounded-xl font-display font-bold text-white flex items-center space-x-2 group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Press Start to Engage Warp" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ArrowRight,
                    {
                      size: 20,
                      className: "group-hover:translate-x-1 transition-transform"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: 0.95
                },
                className: "px-8 py-4 glass-panel rounded-xl font-display font-bold text-white hover:bg-white/10 transition-colors",
                children: "View Trajectory Logs"
              }
            ) })
          ] })
        ]
      }
    )
  ] });
}
export {
  Home as H
};
