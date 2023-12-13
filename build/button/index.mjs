import { defineComponent as c, openBlock as s, createElementBlock as r } from "vue";
const f = (t, o) => {
  if (t.install = (e) => {
    for (const n of [t, ...Object.values(o ?? {})])
      e.component(n.name, n);
  }, o)
    for (const [e, n] of Object.entries(o))
      t[e] = n;
  return t;
}, l = { class: "afe1" }, p = /* @__PURE__ */ c({
  name: "AButton",
  __name: "button",
  setup(t) {
    return (o, e) => (s(), r("button", l, "afe1"));
  }
}), _ = f(p);
export {
  _ as default
};
