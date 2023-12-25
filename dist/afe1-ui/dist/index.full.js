(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Afe1Ui = factory(global.Vue));
})(this, (function (vue) { 'use strict';

  const isString = (val) => typeof val === "string";

  const withInstall = (main, extra) => {
    main.install = (app) => {
      for (const comp of [main, ...Object.values(extra ?? {})]) {
        app.component(comp.name, comp);
      }
    };
    if (extra) {
      for (const [key, comp] of Object.entries(extra)) {
        main[key] = comp;
      }
    }
    return main;
  };

  const isUndefined = (val) => val === void 0;
  const isNumber = (val) => typeof val === "number";

  function addUnit(value, defaultUnit = "px") {
    if (!value)
      return "";
    if (isString(value)) {
      return value;
    } else if (isNumber(value)) {
      return `${value}${defaultUnit}`;
    }
  }

  const _hoisted_1$1 = { class: "afe1" };
  var _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "AButton"
    },
    __name: "button",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", _hoisted_1$1, "afe1");
      };
    }
  });

  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  var Button = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/Users/afe1/Downloads/github/afe1-ui/packages/components/button/src/button.vue"]]);

  const AButton = withInstall(Button);

  const defaultNamespace = "a";
  const statePrefix = "is-";
  const _bem = (namespace, block, blockSuffix, element, modifier) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix) {
      cls += `-${blockSuffix}`;
    }
    if (element) {
      cls += `__${element}`;
    }
    if (modifier) {
      cls += `--${modifier}`;
    }
    return cls;
  };
  const namespaceContextKey = Symbol("namespaceContextKey");
  const useGetDerivedNamespace = (namespaceOverrides) => {
    const derivedNamespace = namespaceOverrides || (vue.getCurrentInstance() ? vue.inject(namespaceContextKey, vue.ref(defaultNamespace)) : vue.ref(defaultNamespace));
    const namespace = vue.computed(() => {
      return vue.unref(derivedNamespace) || defaultNamespace;
    });
    return namespace;
  };
  const useNamespace = (block, namespaceOverrides) => {
    const namespace = useGetDerivedNamespace(namespaceOverrides);
    const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
    const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
    const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
    const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
    const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
    const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
    const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
    const is = (name, ...args) => {
      const state = args.length >= 1 ? args[0] : true;
      return name && state ? `${statePrefix}${name}` : "";
    };
    const cssVar = (object) => {
      const styles = {};
      for (const key in object) {
        if (object[key]) {
          styles[`--${namespace.value}-${key}`] = object[key];
        }
      }
      return styles;
    };
    const cssVarBlock = (object) => {
      const styles = {};
      for (const key in object) {
        if (object[key]) {
          styles[`--${namespace.value}-${block}-${key}`] = object[key];
        }
      }
      return styles;
    };
    const cssVarName = (name) => `--${namespace.value}-${name}`;
    const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
    return {
      namespace,
      b,
      e,
      m,
      be,
      em,
      bm,
      bem,
      is,
      // css
      cssVar,
      cssVarName,
      cssVarBlock,
      cssVarBlockName
    };
  };

  const iconProps = {
    size: [Number, String],
    color: String
  };

  var _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "AIcon",
      inheritAttrs: false
    },
    __name: "icon",
    props: iconProps,
    setup(__props) {
      const props = __props;
      const ns = useNamespace("icon");
      const style = vue.computed(() => {
        const { size, color } = props;
        if (!size && !color)
          return {};
        return {
          fontSize: isUndefined(size) ? void 0 : addUnit(size),
          "--color": color
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "i",
          {
            class: vue.normalizeClass(vue.unref(ns).b()),
            style: vue.normalizeStyle(style.value)
          },
          [
            vue.renderSlot(_ctx.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });

  var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/Users/afe1/Downloads/github/afe1-ui/packages/components/icon/src/icon.vue"]]);

  const AIcon = withInstall(Icon);

  const UPDATE_MODEL_EVENT = "update:modelValue";

  const inputProps = {
    modelValue: {
      type: [String, Number, Object],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    disabled: Boolean,
    readonly: {
      type: Boolean,
      default: false
    }
  };
  const inputEmit = {
    [UPDATE_MODEL_EVENT]: (value) => isString(value),
    compositionstart: (evt) => evt instanceof CompositionEvent,
    compositionupdate: (evt) => evt instanceof CompositionEvent,
    compositionend: (evt) => evt instanceof CompositionEvent
  };

  const _hoisted_1 = { key: 0 };
  const _hoisted_2 = ["placeholder", "disabled", "readonly"];
  const _hoisted_3 = { key: 1 };
  const _hoisted_4 = ["placeholder", "disabled", "readonly"];
  var _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "AInput"
    },
    __name: "input",
    props: inputProps,
    emits: inputEmit,
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const nsInput = useNamespace("input");
      const nsTextarea = useNamespace("textarea");
      const containerKls = vue.computed(() => [
        props.type == "textarea" ? nsTextarea.b() : nsInput.b()
      ]);
      const wrapperKls = vue.computed(() => [nsInput.e("wrapper")]);
      const input = vue.shallowRef();
      const _ref = vue.computed(() => input.value);
      const nativeInputValue = vue.computed(
        () => !props.modelValue ? "" : String(props.modelValue)
      );
      const setNativeInputValue = () => {
        const input2 = _ref.value;
        if (!input2 || input2.value === nativeInputValue.value)
          return;
        input2.value = nativeInputValue.value;
      };
      const isComposing = vue.ref(false);
      const handleCompositionStart = (event) => {
        emit("compositionstart", event);
        isComposing.value = true;
      };
      const handleCompositionUpdate = (event) => {
        emit("compositionupdate", event);
      };
      const handleCompositionEnd = (event) => {
        emit("compositionend", event);
        if (isComposing.value) {
          isComposing.value = false;
          handleInput(event);
        }
      };
      const handleInput = async (event) => {
        const { value } = event.target;
        if (isComposing.value)
          return;
        emit(UPDATE_MODEL_EVENT, value);
        await vue.nextTick();
        setNativeInputValue();
      };
      vue.onMounted(() => {
        setNativeInputValue();
      });
      return (_ctx, _cache) => {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(containerKls.value)
          },
          [
            _ctx.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              [
                _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
                  vue.renderSlot(_ctx.$slots, "prepend")
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(wrapperKls.value)
                  },
                  [
                    _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock(
                      "span",
                      {
                        key: 0,
                        class: vue.normalizeClass(vue.unref(nsInput).e("prefix"))
                      },
                      [
                        vue.renderSlot(_ctx.$slots, "prefix")
                      ],
                      2
                      /* CLASS */
                    )) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("input", {
                      ref_key: "input",
                      ref: input,
                      class: vue.normalizeClass(vue.unref(nsInput).e("inner")),
                      type: "text",
                      placeholder: _ctx.placeholder,
                      disabled: _ctx.disabled,
                      readonly: _ctx.readonly,
                      onInput: handleInput,
                      onCompositionstart: handleCompositionStart,
                      onCompositionupdate: handleCompositionUpdate,
                      onCompositionend: handleCompositionEnd
                    }, null, 42, _hoisted_2),
                    _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock(
                      "span",
                      {
                        key: 1,
                        class: vue.normalizeClass(vue.unref(nsInput).e("suffix"))
                      },
                      [
                        vue.renderSlot(_ctx.$slots, "suffix")
                      ],
                      2
                      /* CLASS */
                    )) : vue.createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                ),
                _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
                  vue.renderSlot(_ctx.$slots, "append")
                ])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(vue.unref(nsTextarea).e("inner")),
              placeholder: _ctx.placeholder,
              disabled: _ctx.disabled,
              readonly: _ctx.readonly
            }, null, 10, _hoisted_4))
          ],
          2
          /* CLASS */
        )), [
          [vue.vShow, _ctx.type !== "hidden"]
        ]);
      };
    }
  });

  var Input = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/Users/afe1/Downloads/github/afe1-ui/packages/components/input/src/input.vue"]]);

  const AInput = withInstall(Input);

  const linkProps = {
    type: {
      type: String,
      values: ["primary", "success", "warning", "info", "danger", "default"],
      default: "default"
    },
    underLine: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  };

  var _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "ALink"
    },
    __name: "link",
    props: linkProps,
    setup(__props) {
      const props = __props;
      const ns = useNamespace("link");
      const linkCls = vue.computed(() => [
        ns.b(),
        ns.m(props.type),
        ns.is("disabled", props.disabled),
        ns.is("underline", props.underLine && !props.disabled)
      ]);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "a",
          {
            class: vue.normalizeClass(linkCls.value)
          },
          [
            vue.renderSlot(_ctx.$slots, "default")
          ],
          2
          /* CLASS */
        );
      };
    }
  });

  var Link = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/afe1/Downloads/github/afe1-ui/packages/components/link/src/link.vue"]]);

  const ALink = withInstall(Link);

  const components = [AButton, AIcon, AInput, ALink];
  const INSTALLED_KEY = Symbol("INSTALLED_KEY");
  const Afe1Ui = {
    install(app) {
      if (app[INSTALLED_KEY])
        return;
      app[INSTALLED_KEY] = true;
      components.forEach((c) => app.use(c));
    }
  };

  return Afe1Ui;

}));
