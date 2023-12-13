(function (t, o) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = o(require("vue")))
    : typeof define == "function" && define.amd
    ? define(["vue"], o)
    : ((t = typeof globalThis < "u" ? globalThis : t || self),
      (t["afe1-ui"] = o(t.vue)));
})(this, (t) => {
  "use strict";
  const o = (e, n) => {
      if (
        ((e.install = (s) => {
          for (const c of [e, ...Object.values(n ?? {})])
            s.component(c.name, c);
        }),
        n)
      )
        for (const [s, c] of Object.entries(n)) e[s] = c;
      return e;
    },
    u = { class: "afe1" },
    i = [
      o(
        t.defineComponent({
          name: "AButton",
          __name: "button",
          setup(e) {
            return (n, s) => (
              t.openBlock(), t.createElementBlock("button", u, "afe1")
            );
          },
        })
      ),
    ],
    f = Symbol("INSTALLED_KEY");
  return {
    install(e) {
      e[f] || ((e[f] = !0), i.forEach((n) => e.use(n)));
    },
  };
});
