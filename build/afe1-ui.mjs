import { defineComponent as s, openBlock as r, createElementBlock as f } from "vue";
const l = (t, o) => {
  if (t.install = (e) => {
    for (const n of [t, ...Object.values(o ?? {})])
      e.component(n.name, n);
  }, o)
    for (const [e, n] of Object.entries(o))
      t[e] = n;
  return t;
}, u = { class: "afe1" }, _ = /* @__PURE__ */ s({
  name: "AButton",
  __name: "button",
  setup(t) {
    return (o, e) => (r(), f("button", u, "afe1"));
  }
}), m = l(_), a = [m], c = Symbol("INSTALLED_KEY"), p = {
  install(t) {
    t[c] || (t[c] = !0, a.forEach((o) => t.use(o)));
  }
};
export {
  p as default
};
