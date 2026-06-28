import { j as jsxRuntimeExports, m as motion } from "../assets/proxy.js";
function AuroraBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-0 overflow-hidden pointer-events-none bg-space-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-space-800 via-space-900 to-space-900 opacity-80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          x: ["-10%", "5%", "-10%"],
          y: ["-5%", "5%", "-5%"],
          rotate: [0, 2, 0]
        },
        transition: {
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        },
        className: "absolute -top-[20%] -left-[10%] w-[120%] h-[60%] opacity-40 mix-blend-screen filter blur-[100px]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-aurora-turquoise via-aurora-teal to-cosmic-violet rounded-full transform -rotate-12 scale-y-50" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          x: ["5%", "-5%", "5%"],
          y: ["5%", "-5%", "5%"],
          rotate: [0, -2, 0]
        },
        transition: {
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        },
        className: "absolute top-[10%] -right-[20%] w-[100%] h-[50%] opacity-30 mix-blend-screen filter blur-[120px]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-l from-cosmic-magenta via-cosmic-violet to-aurora-teal rounded-full transform rotate-12 scale-y-50" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          x: ["-5%", "5%", "-5%"],
          y: ["10%", "0%", "10%"]
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        },
        className: "absolute bottom-0 left-[10%] w-[80%] h-[40%] opacity-20 mix-blend-screen filter blur-[90px]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-aurora-green via-aurora-teal to-transparent rounded-full scale-y-50" })
      }
    )
  ] });
}
export {
  AuroraBackground as A
};
