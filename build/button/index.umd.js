(function (e, t) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = t(require("vue")))
    : typeof define == "function" && define.amd
    ? define(["vue"], t)
    : ((e = typeof globalThis < "u" ? globalThis : e || self),
      (e.index = t(e.vue)));
})(this, (e) => {
  "use strict";
  const t = (n, o) => {
      if (
        ((n.install = (s) => {
          for (const c of [n, ...Object.values(o ?? {})])
            s.component(c.name, c);
        }),
        o)
      )
        for (const [s, c] of Object.entries(o)) n[s] = c;
      return n;
    },
    f = { class: "afe1" };
  return t(
    e.defineComponent({
      name: "AButton",
      __name: "button",
      setup(n) {
        return (o, s) => (
          e.openBlock(), e.createElementBlock("button", f, "afe1")
        );
      },
    })
  );
});
