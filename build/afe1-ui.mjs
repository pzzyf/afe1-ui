import { openBlock as r, createElementBlock as l } from "vue";
const a = (o, t) => {
  const n = o.__vccOpts || o;
  for (const [e, s] of t)
    n[e] = s;
  return n;
}, _ = {}, f = { class: "hhh" };
function i(o, t) {
  return r(), l("button", f);
}
const m = /* @__PURE__ */ a(_, [["render", i]]), u = [m], g = "a", c = "_Vue3UI", h = (o, t = { classPrefix: g }) => {
  o.config.globalProperties[c] = {
    ...o.config.globalProperties[c] ?? {},
    classPrefix: t.classPrefix
  };
}, x = (o, t, n) => {
  h(o, n), o.component(t.name, t);
}, p = {
  install(o, t) {
    u.forEach((n) => {
      x(o, n, t);
    });
  }
};
export {
  m as Button,
  p as default
};
