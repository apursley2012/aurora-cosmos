import { j as jsxRuntimeExports, m as motion } from "../assets/proxy.js";
import { c as createLucideIcon } from "../assets/createLucideIcon.js";
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
];
const Code = createLucideIcon("code", __iconNode$3);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
];
const HeartPulse = createLucideIcon("heart-pulse", __iconNode$2);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
  ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
  [
    "path",
    {
      d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
      key: "o988cm"
    }
  ]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode);
const trajectoryNodes = [
  {
    id: "nursing",
    year: "2018",
    title: "Healthcare & Nursing",
    icon: HeartPulse,
    color: "text-cosmic-magenta",
    bgColor: "bg-cosmic-magenta/20",
    borderColor: "border-cosmic-magenta/50",
    desc: "Learned how to triage chaos, handle high-pressure environments, and document everything meticulously. Turns out, reading patient charts is a lot like reading legacy code."
  },
  {
    id: "retail",
    year: "2020",
    title: "Retail Merchandising",
    icon: ShoppingBag,
    color: "text-cosmic-violet",
    bgColor: "bg-cosmic-violet/20",
    borderColor: "border-cosmic-violet/50",
    desc: "Developed a critical eye for alignment, flow, and user experience. If an endcap display is crooked, I notice. If a div is off by 1px, I definitely notice."
  },
  {
    id: "curiosity",
    year: "2022",
    title: 'The Great "Inspect Element" Incident',
    icon: Search,
    color: "text-aurora-turquoise",
    bgColor: "bg-aurora-turquoise/20",
    borderColor: "border-aurora-turquoise/50",
    desc: "Started wondering how the web actually worked. Opened DevTools. Broke a production site locally. Realized I had the power of a god (locally). Never looked back."
  },
  {
    id: "dev",
    year: "Present",
    title: "Software Development",
    icon: Code,
    color: "text-aurora-teal",
    bgColor: "bg-aurora-teal/20",
    borderColor: "border-aurora-teal/50",
    desc: "Now I write code that connects the dots. I bring my healthcare empathy and merchandising precision to building robust, beautiful web applications."
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: {
          opacity: 0,
          y: 20
        },
        animate: {
          opacity: 1,
          y: 0
        },
        className: "mb-16 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-aurora-turquoise to-cosmic-violet", children: "Origin Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-400 font-mono", children: "No actual astrology, just suspiciously organized files." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-magenta via-cosmic-violet to-aurora-teal transform md:-translate-x-1/2 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12 md:space-y-24", children: trajectoryNodes.map((node, index) => {
        const isEven = index % 2 === 0;
        const Icon = node.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: {
              opacity: 0,
              y: 50
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            viewport: {
              once: true,
              margin: "-100px"
            },
            transition: {
              duration: 0.6
            },
            className: `relative flex flex-col md:flex-row items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-16 h-16 rounded-full glass-panel border-2 ${node.borderColor} ${node.bgColor} flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: node.color, size: 24 })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `ml-24 md:ml-0 w-full md:w-1/2 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel p-6 rounded-2xl hover:border-aurora-turquoise/50 transition-colors duration-300 group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm text-slate-400 mb-2", children: node.year }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: `text-2xl font-display font-bold mb-3 ${node.color} group-hover:text-glow transition-all`,
                        children: node.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 leading-relaxed", children: node.desc })
                  ] })
                }
              )
            ]
          },
          node.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: {
          opacity: 0
        },
        whileInView: {
          opacity: 1
        },
        viewport: {
          once: true
        },
        className: "mt-32 glass-panel p-8 rounded-3xl border-aurora-teal/30 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-aurora-teal/10 rounded-full filter blur-[80px] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold mb-6 text-white", children: "System Diagnostics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-aurora-turquoise font-mono mb-2", children: "Strengths" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-aurora-green" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Spotting 1px misalignments" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-aurora-green" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Translating jargon to humans" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-aurora-green" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Writing docs people actually read" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-cosmic-magenta font-mono mb-2", children: "Known Bugs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cosmic-magenta" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Allergic to fake corporate enthusiasm" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cosmic-magenta" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Will refactor CSS for fun" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cosmic-magenta" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Requires coffee to compile" })
                ] })
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  About as A
};
