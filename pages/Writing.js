import { j as jsxRuntimeExports, m as motion } from "../assets/proxy.js";
import { c as createLucideIcon } from "../assets/createLucideIcon.js";
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$2);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Radio = createLucideIcon("radio", __iconNode$1);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",
      key: "dzhfyz"
    }
  ],
  ["path", { d: "M16.5 7.5 19 5", key: "1ltcjm" }],
  [
    "path",
    {
      d: "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",
      key: "nfoymv"
    }
  ],
  ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }],
  [
    "path",
    {
      d: "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",
      key: "nv9zqy"
    }
  ]
];
const Satellite = createLucideIcon("satellite", __iconNode);
const articles = [
  {
    id: 1,
    title: "Why Your Div Won't Center: A Cosmic Mystery",
    type: "Reflection",
    date: "Stardate 47634.44",
    icon: Radio,
    layout: "waveform",
    excerpt: "An exploration into the dark matter of CSS flexbox and grid. Spoiler: it usually involves a missing height declaration on the parent.",
    tags: ["CSS", "Humor", "Tutorial"]
  },
  {
    id: 2,
    title: "Incident Report #404: The Great State Management Collapse",
    type: "Bug Report",
    date: "Stardate 47635.12",
    icon: Satellite,
    layout: "log",
    excerpt: "Documenting the exact moment Redux boilerplate became self-aware and demanded a rewrite in Zustand. A post-mortem analysis.",
    tags: ["React", "State", "Architecture"]
  },
  {
    id: 3,
    title: "Translating Dev-Speak to Human-Speak",
    type: "General Audience",
    date: "Stardate 47640.88",
    icon: BookOpen,
    layout: "paper",
    excerpt: "How my background in healthcare and retail taught me to explain complex technical concepts without making stakeholders' eyes glaze over.",
    tags: ["Soft Skills", "Communication"]
  }
];
function Writing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-violet to-aurora-turquoise", children: "Signal Transmissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-400 font-mono", children: "Transmissions from the Dev Console." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: articles.map((article, index) => {
      const Icon = article.icon;
      if (article.layout === "waveform") {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: {
              opacity: 0,
              x: -20
            },
            whileInView: {
              opacity: 1,
              x: 0
            },
            viewport: {
              once: true
            },
            className: "glass-panel p-8 rounded-2xl border-l-4 border-l-aurora-turquoise relative overflow-hidden group hover:bg-white/5 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-24 flex items-center justify-end space-x-1 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none pr-8", children: [...Array(20)].map(
                (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: {
                      height: ["20%", "100%", "20%"]
                    },
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    },
                    className: "w-1 bg-aurora-turquoise rounded-full"
                  },
                  i
                )
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-2/3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-aurora-turquoise", size: 20 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-aurora-turquoise", children: article.type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-slate-500", children: [
                    "[",
                    article.date,
                    "]"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-white mb-3", children: article.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 mb-6", children: article.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-2", children: article.tags.map(
                  (tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-xs font-mono px-2 py-1 bg-aurora-turquoise/10 text-aurora-turquoise rounded",
                      children: [
                        "#",
                        tag
                      ]
                    },
                    tag
                  )
                ) })
              ] })
            ]
          },
          article.id
        );
      }
      if (article.layout === "log") {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: {
              opacity: 0,
              x: 20
            },
            whileInView: {
              opacity: 1,
              x: 0
            },
            viewport: {
              once: true
            },
            className: "bg-space-900 border border-cosmic-violet/30 p-8 rounded-sm font-mono relative group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cosmic-violet to-transparent opacity-50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6 border-b border-white/10 pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-cosmic-violet text-sm mb-1", children: [
                    "LOG ENTRY // ",
                    article.type.toUpperCase()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-slate-200", children: article.title })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      className: "text-cosmic-violet mb-1 ml-auto",
                      size: 24
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: article.date })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4 border-l-2 border-cosmic-violet/20 text-slate-400 text-sm leading-relaxed mb-6", children: article.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-4 text-xs text-slate-500", children: article.tags.map(
                (tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "> ",
                  tag
                ] }, tag)
              ) })
            ]
          },
          article.id
        );
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: true
          },
          className: "bg-[#f8fafc] text-slate-800 p-8 rounded-lg shadow-xl relative transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-3xl mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -left-32 top-8 w-28 text-right hidden lg:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-handwriting text-aurora-teal text-sm transform -rotate-6", children: "*Important note for future self" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "w-8 h-8 absolute right-0 top-6 text-aurora-teal",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M14 5l7 7m0 0l-7 7m7-7H3"
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b-2 border-slate-200 pb-4 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-widest text-xs text-slate-500 font-bold", children: article.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-400", children: article.date.replace("Stardate", "Date:") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-slate-900", children: article.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed text-lg mb-6 font-serif", children: article.excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-2", children: article.tags.map(
              (tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded",
                  children: tag
                },
                tag
              )
            ) })
          ]
        },
        article.id
      );
    }) })
  ] });
}
export {
  Writing as W
};
