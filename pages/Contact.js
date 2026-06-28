import { r as reactExports, j as jsxRuntimeExports, m as motion } from "../assets/proxy.js";
import { T as Terminal } from "../assets/terminal.js";
import { c as createLucideIcon } from "../assets/createLucideIcon.js";
import { G as Github } from "../assets/github.js";
import { M as Mail } from "../assets/mail.js";
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
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$2);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
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
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
];
const Twitter = createLucideIcon("twitter", __iconNode);
function Contact() {
  const [formState, setFormState] = reactExports.useState(
    "idle"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-aurora-turquoise to-cosmic-violet", children: "Open Comms Channel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-400 font-mono", children: "Establish a direct link to the dev console." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: {
            opacity: 0,
            x: -20
          },
          animate: {
            opacity: 1,
            x: 0
          },
          className: "lg:col-span-2 glass-panel rounded-3xl p-8 border-aurora-teal/30 relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-4 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-aurora-turquoise font-mono text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { size: 16 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TERMINAL // COMMS_UPLINK" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-cosmic-magenta/50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-aurora-teal/50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-aurora-green animate-pulse" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-mono text-slate-400 uppercase tracking-wider", children: "Sender ID (Name)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      className: "w-full bg-space-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aurora-turquoise focus:ring-1 focus:ring-aurora-turquoise transition-all font-mono text-sm",
                      placeholder: "Commander Shepard"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-mono text-slate-400 uppercase tracking-wider", children: "Return Frequency (Email)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      required: true,
                      className: "w-full bg-space-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aurora-turquoise focus:ring-1 focus:ring-aurora-turquoise transition-all font-mono text-sm",
                      placeholder: "shepard@normandy.sr2"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-mono text-slate-400 uppercase tracking-wider", children: "Transmission Payload (Message)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    required: true,
                    rows: 5,
                    className: "w-full bg-space-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aurora-turquoise focus:ring-1 focus:ring-aurora-turquoise transition-all font-mono text-sm resize-none",
                    placeholder: "We need your expertise in the Terminus Systems..."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  whileHover: {
                    scale: 1.02
                  },
                  whileTap: {
                    scale: 0.98
                  },
                  disabled: formState !== "idle",
                  className: `w-full py-4 rounded-xl font-display font-bold flex items-center justify-center space-x-2 transition-all ${formState === "sent" ? "bg-aurora-green text-space-900" : "bg-gradient-to-r from-aurora-teal to-cosmic-violet text-white hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"}`,
                  children: [
                    formState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Transmit Signal" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 })
                    ] }),
                    formState === "sending" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "Encrypting & Sending..." }),
                    formState === "sent" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Transmission Successful" })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: {
            opacity: 0,
            x: 20
          },
          animate: {
            opacity: 1,
            x: 0
          },
          className: "space-y-6",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-3xl p-8 border-cosmic-violet/30 h-full flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "Known Frequencies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 flex-grow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#",
                  className: "flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-aurora-turquoise/50 transition-all group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Github,
                      {
                        className: "text-slate-400 group-hover:text-aurora-turquoise transition-colors",
                        size: 24
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-medium", children: "GitHub" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 font-mono", children: "github.com/sarahdev" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#",
                  className: "flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cosmic-violet/50 transition-all group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Linkedin,
                      {
                        className: "text-slate-400 group-hover:text-cosmic-violet transition-colors",
                        size: 24
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-medium", children: "LinkedIn" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 font-mono", children: "linkedin.com/in/sarahdev" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#",
                  className: "flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cosmic-magenta/50 transition-all group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Twitter,
                      {
                        className: "text-slate-400 group-hover:text-cosmic-magenta transition-colors",
                        size: 24
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-medium", children: "Twitter / X" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 font-mono", children: "@sarah_codes" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-8 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 20, className: "text-aurora-teal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm", children: "hello@sarahdev.space" })
            ] }) })
          ] })
        }
      )
    ] })
  ] });
}
export {
  Contact as C
};
