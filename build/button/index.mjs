import { openBlock as r, createElementBlock as l } from "vue";
const a = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [s, c] of o)
    n[s] = c;
  return n;
}, _ = {}, i = { class: "hhh" };
function f(t, o) {
  return r(), l("button", i);
}
const u = /* @__PURE__ */ a(_, [["render", f]]), x = "a", e = "_Vue3UI", g = (t, o = { classPrefix: x }) => {
  t.config.globalProperties[e] = {
    ...t.config.globalProperties[e] ?? {},
    classPrefix: o.classPrefix
  };
}, m = (t, o, n) => {
  g(t, n), t.component(o.name, o);
}, d = {
  install(t, o) {
    m(t, u, o);
  }
};
export {
  u as Button,
  d as default
};
