import { j as jsxRuntimeExports, m as motion } from "../assets/proxy.js";
import { c as createLucideIcon } from "../assets/createLucideIcon.js";
import { G as Github } from "../assets/github.js";
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$3);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$2);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
];
const LayoutTemplate = createLucideIcon("layout-template", __iconNode$1);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]
];
const SquareTerminal = createLucideIcon("square-terminal", __iconNode);
const projects = [
  {
    id: 1,
    title: "Nebula Dashboard",
    category: "Frontend",
    icon: LayoutTemplate,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "A complex data visualization dashboard with real-time metrics. Built to handle massive data streams without dropping frames.",
    tech: ["React", "Framer Motion", "Recharts", "Tailwind"],
    demoUrl: "#",
    repoUrl: "#",
    mockData: true
  },
  {
    id: 2,
    title: "Starlight API",
    category: "Backend",
    icon: Database,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    description: "RESTful API service for managing astronomical data. Includes rate limiting, caching, and comprehensive Swagger documentation.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    demoUrl: "#",
    repoUrl: "#",
    mockData: false
  },
  {
    id: 3,
    title: "Void CLI",
    category: "Tooling",
    icon: SquareTerminal,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
    description: "A command-line interface for scaffolding React projects with my preferred cosmic stack and linting rules.",
    tech: ["TypeScript", "Commander.js", "Inquirer"],
    demoUrl: "#",
    repoUrl: "#",
    mockData: false
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-aurora-turquoise to-aurora-teal", children: "Discovered Systems" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-400 font-mono", children: "Source Code, Decoded from the Void." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, index) => {
      const Icon = project.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: {
            opacity: 0,
            scale: 0.9
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          transition: {
            delay: index * 0.1,
            duration: 0.5
          },
          whileHover: {
            y: -10
          },
          className: "relative group h-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl border border-aurora-turquoise/0 group-hover:border-aurora-turquoise/30 transition-colors duration-500 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 w-3 h-3 bg-aurora-turquoise rounded-full shadow-[0_0_10px_#5eead4] animate-orbit origin-[0_150px]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-2xl overflow-hidden h-full flex flex-col border-white/5 group-hover:border-aurora-turquoise/50 transition-all duration-300 relative z-10 bg-space-800/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-48 overflow-hidden relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-space-900 to-transparent z-10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.title,
                    className: "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 z-20 flex items-center space-x-2 bg-space-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 14, className: "text-aurora-turquoise" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-slate-300", children: project.category })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-display font-bold text-white mb-2 group-hover:text-aurora-turquoise transition-colors", children: project.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm mb-6 flex-grow", children: project.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: project.tech.map(
                  (tech) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10",
                      children: tech
                    },
                    tech
                  )
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-4 border-t border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: project.demoUrl,
                        className: "flex items-center space-x-1 text-sm font-medium text-aurora-turquoise hover:text-white transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Run Demo" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: project.repoUrl,
                        className: "flex items-center space-x-1 text-sm font-medium text-cosmic-violet hover:text-white transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 16 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Logs" })
                        ]
                      }
                    )
                  ] }),
                  project.mockData && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[10px] uppercase tracking-wider text-slate-500 font-mono",
                      title: "Uses sample/mocked data",
                      children: "[Mock Data]"
                    }
                  )
                ] })
              ] })
            ] })
          ]
        },
        project.id
      );
    }) })
  ] });
}
export {
  Projects as P
};
