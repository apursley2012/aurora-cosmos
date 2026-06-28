import { j as jsxRuntimeExports, m as motion } from "../assets/proxy.js";
const skillCategories = [
  {
    name: "Core Languages",
    radius: 120,
    color: "text-aurora-turquoise",
    borderColor: "border-aurora-turquoise",
    skills: ["JavaScript", "TypeScript", "HTML/CSS", "Python"]
  },
  {
    name: "Frontend Universe",
    radius: 220,
    color: "text-aurora-teal",
    borderColor: "border-aurora-teal",
    skills: ["React", "Next.js", "Tailwind", "Framer Motion"]
  },
  {
    name: "Backend & Data",
    radius: 320,
    color: "text-cosmic-violet",
    borderColor: "border-cosmic-violet",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"]
  },
  {
    name: "Tools & Tactics",
    radius: 420,
    color: "text-cosmic-magenta",
    borderColor: "border-cosmic-magenta",
    skills: ["Git/GitHub", "Debugging", "Docs", "UI/UX Design"]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 min-h-[80vh] flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-aurora-teal to-cosmic-violet", children: "Skill Galaxy Map" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-400 font-mono", children: "Orbiting competencies and technical gravity." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[900px] aspect-square flex items-center justify-center overflow-hidden md:overflow-visible scale-75 md:scale-100 mt-[-100px] md:mt-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-20 w-16 h-16 rounded-full bg-gradient-to-tr from-white to-aurora-turquoise shadow-[0_0_50px_rgba(94,234,212,0.8)] flex items-center justify-center animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-space-900 text-sm", children: "DEV" }) }),
      skillCategories.map((category, index) => {
        const duration = 30 + index * 15;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute rounded-full border border-dashed ${category.borderColor}/20`,
                  style: {
                    width: category.radius * 2,
                    height: category.radius * 2
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  animate: {
                    rotate: 360
                  },
                  transition: {
                    duration,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  className: "absolute",
                  style: {
                    width: category.radius * 2,
                    height: category.radius * 2
                  },
                  children: [
                    category.skills.map((skill, skillIndex) => {
                      const angle = skillIndex / category.skills.length * 360;
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute top-1/2 left-1/2 pointer-events-auto",
                          style: {
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${category.radius}px)`
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              animate: {
                                rotate: -360
                              },
                              transition: {
                                duration,
                                repeat: Infinity,
                                ease: "linear"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: `glass-panel px-4 py-2 rounded-full whitespace-nowrap cursor-pointer hover:scale-110 transition-transform ${category.borderColor}/50 border hover:bg-${category.borderColor}/10`,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      className: `font-mono text-sm ${category.color}`,
                                      children: skill
                                    }
                                  )
                                }
                              )
                            }
                          )
                        },
                        skill
                      );
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute top-1/2 left-1/2 pointer-events-auto",
                        style: {
                          transform: `translate(-50%, -50%) rotate(${180}deg) translateY(-${category.radius}px)`
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            animate: {
                              rotate: -360
                            },
                            transition: {
                              duration,
                              repeat: Infinity,
                              ease: "linear"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-space-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-display text-slate-500 uppercase tracking-widest border border-white/5", children: category.name })
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ]
          },
          category.name
        );
      })
    ] })
  ] });
}
export {
  Skills as S
};
