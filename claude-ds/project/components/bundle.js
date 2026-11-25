/* @ds-bundle: {"format":4,"namespace":"MiniUiBase","components":[{"name":"Avatar"},{"name":"Badge"},{"name":"Button"},{"name":"Checkbox"},{"name":"Input"}]} */
"use strict";
var MiniUiBase = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e6) {
      throw err = [e6], e6;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e6) {
      throw mod = 0, e6;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p2, k) {
        var o5 = {};
        for (var x in p2) if (x !== "children") o5[x] = p2[x];
        if (k !== void 0) o5.key = k;
        return o5;
      }
      function jsx(t7, p2, k) {
        var c6 = p2 && p2.children;
        return c6 === void 0 ? R.createElement(t7, np(p2, k)) : R.createElement(t7, np(p2, k), c6);
      }
      function jsxs(t7, p2, k) {
        return R.createElement.apply(R, [t7, np(p2, k)].concat(p2.children));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t7, p2, k, s5) {
        return (s5 ? jsxs : jsx)(t7, p2, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // shim:react-dom-shim
  var require_react_dom_shim = __commonJS({
    "shim:react-dom-shim"(exports, module) {
      init_define_import_meta_env();
      var D = window.ReactDOM;
      var n6 = function() {
      };
      module.exports = Object.assign({ preload: n6, preinit: n6, preconnect: n6, prefetchDNS: n6, preloadModule: n6, preinitModule: n6 }, D);
    }
  });

  // .design-sync/.cache/shadow/@mini-ui/base/dist/index.js
  var index_exports = {};
  __export(index_exports, {
    Avatar: () => d,
    Badge: () => a2,
    Button: () => f,
    Checkbox: () => h,
    Input: () => l5,
    TranslationsContext: () => c,
    useTranslate: () => u
  });
  init_define_import_meta_env();

  // .design-sync/.cache/shadow/@mini-ui/base/dist/avatar.js
  init_define_import_meta_env();

  // .design-sync/.cache/shadow/@mini-ui/base/dist/translations-context-DJOJaVQT.js
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim(), 1);
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var a = "___@mini-ui/base";
  var o = "___@mini-ui/components";
  var s = ((t7, n6, r8) => {
    let i4 = r8?.legacy ? o : a, s5 = window, c6 = s5[i4] ?? /* @__PURE__ */ new Map();
    return s5[i4] = c6, c6.has(t7) || c6.set(t7, (0, import_react.createContext)(n6)), c6.get(t7);
  })("translations", {});
  var c = ({ translations: e6, children: t7 }) => {
    let a4 = (0, import_react.useContext)(s), o5 = (0, import_react.useMemo)(() => ({
      ...a4,
      ...e6
    }), [a4, e6]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Provider, {
      value: o5,
      children: t7
    });
  };
  c.displayName = "TranslationsContext";
  var l = /\{\{\s*(\w+)\s*\}\}/g;
  var u = () => {
    let e6 = (0, import_react.useContext)(s);
    return (0, import_react.useCallback)((t7, n6) => {
      let r8 = e6[t7] ?? t7;
      return n6 === void 0 ? r8 : r8.replaceAll(l, (e7, t8) => String(n6[t8] ?? e7));
    }, [e6]);
  };

  // .design-sync/.cache/shadow/@mini-ui/base/dist/avatar.js
  var import_react3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);

  // node_modules/class-variance-authority/dist/index.mjs
  init_define_import_meta_env();

  // node_modules/clsx/dist/clsx.mjs
  init_define_import_meta_env();
  function r2(e6) {
    var t7, f3, n6 = "";
    if ("string" == typeof e6 || "number" == typeof e6) n6 += e6;
    else if ("object" == typeof e6) if (Array.isArray(e6)) {
      var o5 = e6.length;
      for (t7 = 0; t7 < o5; t7++) e6[t7] && (f3 = r2(e6[t7])) && (n6 && (n6 += " "), n6 += f3);
    } else for (f3 in e6) e6[f3] && (n6 && (n6 += " "), n6 += f3);
    return n6;
  }
  function clsx() {
    for (var e6, t7, f3 = 0, n6 = "", o5 = arguments.length; f3 < o5; f3++) (e6 = arguments[f3]) && (t7 = r2(e6)) && (n6 && (n6 += " "), n6 += t7);
    return n6;
  }

  // node_modules/class-variance-authority/dist/index.mjs
  var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
  var cx = clsx;
  var cva = (base, config) => (props) => {
    var _config_compoundVariants;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null) return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
      return Object.entries(compoundVariantOptions).every((param2) => {
        let [key, value] = param2;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };

  // node_modules/@base-ui/react/avatar/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/avatar/index.parts.mjs
  var index_parts_exports = {};
  __export(index_parts_exports, {
    Fallback: () => AvatarFallback,
    Image: () => AvatarImage,
    Root: () => AvatarRoot
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/avatar/root/AvatarRoot.mjs
  init_define_import_meta_env();
  var React6 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/useRenderElement.mjs
  init_define_import_meta_env();
  var React4 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useMergedRefs.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/useRefWithInit.mjs
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);
  var UNINITIALIZED = {};
  function useRefWithInit(init, initArg) {
    const ref = React.useRef(UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
      ref.current = init(initArg);
    }
    return ref;
  }

  // node_modules/@base-ui/utils/useMergedRefs.mjs
  function useMergedRefs(a4, b, c6, d4) {
    const forkRef = useRefWithInit(createForkRef).current;
    if (didChange(forkRef, a4, b, c6, d4)) {
      update(forkRef, [a4, b, c6, d4]);
    }
    return forkRef.callback;
  }
  function useMergedRefsN(refs) {
    const forkRef = useRefWithInit(createForkRef).current;
    if (didChangeN(forkRef, refs)) {
      update(forkRef, refs);
    }
    return forkRef.callback;
  }
  function createForkRef() {
    return {
      callback: null,
      cleanup: null,
      refs: []
    };
  }
  function didChange(forkRef, a4, b, c6, d4) {
    return forkRef.refs[0] !== a4 || forkRef.refs[1] !== b || forkRef.refs[2] !== c6 || forkRef.refs[3] !== d4;
  }
  function didChangeN(forkRef, newRefs) {
    return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index) => ref !== newRefs[index]);
  }
  function update(forkRef, refs) {
    forkRef.refs = refs;
    if (refs.every((ref) => ref == null)) {
      forkRef.callback = null;
      return;
    }
    forkRef.callback = (instance) => {
      if (forkRef.cleanup) {
        forkRef.cleanup();
        forkRef.cleanup = null;
      }
      if (instance != null) {
        const cleanupCallbacks = Array(refs.length).fill(null);
        for (let i4 = 0; i4 < refs.length; i4 += 1) {
          const ref = refs[i4];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const refCleanup = ref(instance);
              if (typeof refCleanup === "function") {
                cleanupCallbacks[i4] = refCleanup;
              }
              break;
            }
            case "object": {
              ref.current = instance;
              break;
            }
            default:
          }
        }
        forkRef.cleanup = () => {
          for (let i4 = 0; i4 < refs.length; i4 += 1) {
            const ref = refs[i4];
            if (ref == null) {
              continue;
            }
            switch (typeof ref) {
              case "function": {
                const cleanupCallback = cleanupCallbacks[i4];
                if (typeof cleanupCallback === "function") {
                  cleanupCallback();
                } else {
                  void ref(null);
                }
                break;
              }
              case "object": {
                ref.current = null;
                break;
              }
              default:
            }
          }
        };
      }
    };
  }

  // node_modules/@base-ui/utils/getReactElementRef.mjs
  init_define_import_meta_env();
  var React3 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/reactVersion.mjs
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim(), 1);
  var majorVersion = parseInt(React2.version, 10);
  function isReactVersionAtLeast(reactVersionToCheck) {
    return majorVersion >= reactVersionToCheck;
  }

  // node_modules/@base-ui/utils/getReactElementRef.mjs
  function getReactElementRef(element) {
    if (!/* @__PURE__ */ React3.isValidElement(element)) {
      return null;
    }
    const reactElement = element;
    const propsWithRef = reactElement.props;
    return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
  }

  // node_modules/@base-ui/utils/mergeObjects.mjs
  init_define_import_meta_env();
  function mergeObjects(a4, b) {
    if (a4 && !b) {
      return a4;
    }
    if (!a4 && b) {
      return b;
    }
    if (a4 || b) {
      return {
        ...a4,
        ...b
      };
    }
    return void 0;
  }

  // node_modules/@base-ui/utils/warn.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/createLogOnce.mjs
  init_define_import_meta_env();
  var loggedMessages;
  if (true) {
    loggedMessages = /* @__PURE__ */ new Set();
  }
  function createLogOnce(severity, prefix) {
    return function logOnce(...messages) {
      if (true) {
        const message = messages.join(" ");
        const output = prefix ? `${prefix}: ${message}` : message;
        const key = `${severity}:${output}`;
        if (!loggedMessages.has(key)) {
          loggedMessages.add(key);
          if (severity === "warn") {
            console.warn(output);
          } else {
            console.error(output);
          }
        }
      }
    };
  }

  // node_modules/@base-ui/utils/warn.mjs
  var warn = createLogOnce("warn", "Base UI");

  // node_modules/@base-ui/utils/empty.mjs
  init_define_import_meta_env();
  function NOOP() {
  }
  var EMPTY_ARRAY = Object.freeze([]);
  var EMPTY_OBJECT = Object.freeze({});

  // node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
  init_define_import_meta_env();
  function getStateAttributesProps(state, customMapping) {
    const props = {};
    for (const key in state) {
      const value = state[key];
      if (customMapping?.hasOwnProperty(key)) {
        const customProps = customMapping[key](value);
        if (customProps != null) {
          Object.assign(props, customProps);
        }
        continue;
      }
      if (value === true) {
        props[`data-${key.toLowerCase()}`] = "";
      } else if (value) {
        props[`data-${key.toLowerCase()}`] = value.toString();
      }
    }
    return props;
  }

  // node_modules/@base-ui/react/utils/resolveClassName.mjs
  init_define_import_meta_env();
  function resolveClassName(className, state) {
    return typeof className === "function" ? className(state) : className;
  }

  // node_modules/@base-ui/react/utils/resolveStyle.mjs
  init_define_import_meta_env();
  function resolveStyle(style, state) {
    return typeof style === "function" ? style(state) : style;
  }

  // node_modules/@base-ui/react/merge-props/mergeProps.mjs
  init_define_import_meta_env();
  var EMPTY_PROPS = {};
  function mergeProps(a4, b, c6, d4, e6) {
    if (!c6 && !d4 && !e6 && !a4) {
      return createInitialMergedProps(b);
    }
    let merged = createInitialMergedProps(a4);
    if (b) {
      merged = mergeInto(merged, b);
    }
    if (c6) {
      merged = mergeInto(merged, c6);
    }
    if (d4) {
      merged = mergeInto(merged, d4);
    }
    if (e6) {
      merged = mergeInto(merged, e6);
    }
    return merged;
  }
  function mergePropsN(props) {
    if (props.length === 0) {
      return EMPTY_PROPS;
    }
    if (props.length === 1) {
      return createInitialMergedProps(props[0]);
    }
    let merged = createInitialMergedProps(props[0]);
    for (let i4 = 1; i4 < props.length; i4 += 1) {
      merged = mergeInto(merged, props[i4]);
    }
    return merged;
  }
  function createInitialMergedProps(inputProps) {
    if (isPropsGetter(inputProps)) {
      return {
        ...resolvePropsGetter(inputProps, EMPTY_PROPS)
      };
    }
    return copyInitialProps(inputProps);
  }
  function mergeInto(merged, inputProps) {
    if (isPropsGetter(inputProps)) {
      return resolvePropsGetter(inputProps, merged);
    }
    return mutablyMergeInto(merged, inputProps);
  }
  function copyInitialProps(inputProps) {
    const copiedProps = {
      ...inputProps
    };
    for (const propName in copiedProps) {
      const propValue = copiedProps[propName];
      if (isEventHandler(propName, propValue)) {
        copiedProps[propName] = wrapEventHandler(propValue);
      }
    }
    return copiedProps;
  }
  function mutablyMergeInto(mergedProps, externalProps) {
    if (!externalProps) {
      return mergedProps;
    }
    for (const propName in externalProps) {
      const externalPropValue = externalProps[propName];
      switch (propName) {
        case "style": {
          mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
          break;
        }
        case "className": {
          mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
          break;
        }
        default: {
          if (isEventHandler(propName, externalPropValue)) {
            mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
          } else {
            mergedProps[propName] = externalPropValue;
          }
        }
      }
    }
    return mergedProps;
  }
  function isEventHandler(key, value) {
    const code0 = key.charCodeAt(0);
    const code1 = key.charCodeAt(1);
    const code2 = key.charCodeAt(2);
    return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
  }
  function isPropsGetter(inputProps) {
    return typeof inputProps === "function";
  }
  function resolvePropsGetter(inputProps, previousProps) {
    if (isPropsGetter(inputProps)) {
      return inputProps(previousProps);
    }
    return inputProps ?? EMPTY_PROPS;
  }
  function mergeEventHandlers(ourHandler, theirHandler) {
    if (!theirHandler) {
      return ourHandler;
    }
    if (!ourHandler) {
      return wrapEventHandler(theirHandler);
    }
    return (...args) => {
      const event = args[0];
      if (isSyntheticEvent(event)) {
        const baseUIEvent = event;
        makeEventPreventable(baseUIEvent);
        const result2 = theirHandler(...args);
        if (!baseUIEvent.baseUIHandlerPrevented) {
          ourHandler?.(...args);
        }
        return result2;
      }
      const result = theirHandler(...args);
      ourHandler?.(...args);
      return result;
    };
  }
  function wrapEventHandler(handler) {
    if (!handler) {
      return handler;
    }
    return (...args) => {
      const event = args[0];
      if (isSyntheticEvent(event)) {
        makeEventPreventable(event);
      }
      return handler(...args);
    };
  }
  function makeEventPreventable(event) {
    event.preventBaseUIHandler = () => {
      event.baseUIHandlerPrevented = true;
    };
    return event;
  }
  function mergeClassNames(ourClassName, theirClassName) {
    if (theirClassName) {
      if (ourClassName) {
        return theirClassName + " " + ourClassName;
      }
      return theirClassName;
    }
    return ourClassName;
  }
  function isSyntheticEvent(event) {
    return event != null && typeof event === "object" && "nativeEvent" in event;
  }

  // node_modules/@base-ui/react/internals/useRenderElement.mjs
  var import_react2 = __toESM(require_react_shim(), 1);
  function useRenderElement(element, componentProps, params = {}) {
    let renderProp = componentProps.render;
    if (params.enabled !== false) {
      renderProp = unwrapLazyRenderProp(renderProp);
    }
    const outProps = useRenderElementProps(componentProps, params, renderProp);
    if (params.enabled === false) {
      return null;
    }
    const state = params.state ?? EMPTY_OBJECT;
    return evaluateRenderProp(element, renderProp, outProps, state);
  }
  function useRenderElementProps(componentProps, params, renderProp) {
    const {
      className: classNameProp,
      style: styleProp
    } = componentProps;
    const {
      state = EMPTY_OBJECT,
      ref,
      props,
      stateAttributesMapping: stateAttributesMapping3,
      enabled = true
    } = params;
    const className = enabled ? resolveClassName(classNameProp, state) : void 0;
    const style = enabled ? resolveStyle(styleProp, state) : void 0;
    const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping3) : EMPTY_OBJECT;
    const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
    const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
    if (typeof document !== "undefined") {
      if (!enabled) {
        void useMergedRefs(null, null);
      } else if (Array.isArray(ref)) {
        outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
      } else {
        outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
      }
    }
    if (!enabled) {
      return EMPTY_OBJECT;
    }
    if (className !== void 0) {
      outProps.className = mergeClassNames(outProps.className, className);
    }
    if (style !== void 0) {
      outProps.style = mergeObjects(outProps.style, style);
    }
    return outProps;
  }
  function resolveRenderFunctionProps(props) {
    if (Array.isArray(props)) {
      return mergePropsN(props);
    }
    return mergeProps(void 0, props);
  }
  var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
  var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
  var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
  function unwrapLazyRenderProp(render) {
    if (render?.$$typeof !== REACT_LAZY_TYPE) {
      return render;
    }
    const unwrapped = React4.Children.toArray(render)[0];
    return /* @__PURE__ */ React4.isValidElement(unwrapped) ? unwrapped : render;
  }
  function evaluateRenderProp(element, render, props, state) {
    if (render) {
      if (typeof render === "function") {
        if (true) {
          warnIfRenderPropLooksLikeComponent(render);
        }
        return render(props, state);
      }
      const mergedProps = mergeProps(props, render.props);
      mergedProps.ref = props.ref;
      if (true) {
        if (!/* @__PURE__ */ React4.isValidElement(render)) {
          throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
        }
      }
      return /* @__PURE__ */ React4.cloneElement(render, mergedProps);
    }
    if (element) {
      if (typeof element === "string") {
        return renderTag(element, props);
      }
    }
    throw new Error(true ? "Base UI: Render element or function are not defined." : formatErrorMessage_default(8));
  }
  function warnIfRenderPropLooksLikeComponent(renderFn) {
    const functionName = renderFn.name;
    if (functionName.length === 0) {
      return;
    }
    if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
      return;
    }
    if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
      return;
    }
    warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
  }
  function renderTag(Tag, props) {
    if (Tag === "button") {
      return /* @__PURE__ */ (0, import_react2.createElement)("button", {
        type: "button",
        ...props,
        key: props.key
      });
    }
    if (Tag === "img") {
      return /* @__PURE__ */ (0, import_react2.createElement)("img", {
        alt: "",
        ...props,
        key: props.key
      });
    }
    return /* @__PURE__ */ React4.createElement(Tag, props);
  }

  // node_modules/@base-ui/react/avatar/root/AvatarRootContext.mjs
  init_define_import_meta_env();
  var React5 = __toESM(require_react_shim(), 1);
  var AvatarRootContext = /* @__PURE__ */ React5.createContext(void 0);
  if (true) AvatarRootContext.displayName = "AvatarRootContext";
  function useAvatarRootContext() {
    const context = React5.useContext(AvatarRootContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>." : formatErrorMessage_default(13));
    }
    return context;
  }

  // node_modules/@base-ui/react/avatar/root/stateAttributesMapping.mjs
  init_define_import_meta_env();
  var avatarStateAttributesMapping = {
    imageLoadingStatus: () => null
  };

  // node_modules/@base-ui/react/avatar/root/AvatarRoot.mjs
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var AvatarRoot = /* @__PURE__ */ React6.forwardRef(function AvatarRoot2(componentProps, forwardedRef) {
    const {
      className,
      render,
      style,
      ...elementProps
    } = componentProps;
    const [imageLoadingStatus, setImageLoadingStatus] = React6.useState("idle");
    const state = {
      imageLoadingStatus
    };
    const contextValue = React6.useMemo(() => ({
      imageLoadingStatus,
      setImageLoadingStatus
    }), [imageLoadingStatus, setImageLoadingStatus]);
    const element = useRenderElement("span", componentProps, {
      state,
      ref: forwardedRef,
      props: elementProps,
      stateAttributesMapping: avatarStateAttributesMapping
    });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarRootContext.Provider, {
      value: contextValue,
      children: element
    });
  });
  if (true) AvatarRoot.displayName = "AvatarRoot";

  // node_modules/@base-ui/react/avatar/image/AvatarImage.mjs
  init_define_import_meta_env();
  var React13 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useStableCallback.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/safeReact.mjs
  init_define_import_meta_env();
  var React7 = __toESM(require_react_shim(), 1);
  var SafeReact = {
    ...React7
  };

  // node_modules/@base-ui/utils/useStableCallback.mjs
  var useInsertionEffect = SafeReact.useInsertionEffect;
  var useSafeInsertionEffect = (
    // React 17 doesn't have useInsertionEffect.
    useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
    useInsertionEffect !== SafeReact.useLayoutEffect ? useInsertionEffect : (fn) => fn()
  );
  function useStableCallback(callback) {
    const stable = useRefWithInit(createStableCallback).current;
    stable.next = callback;
    useSafeInsertionEffect(stable.effect);
    return stable.trampoline;
  }
  function createStableCallback() {
    const stable = {
      next: void 0,
      callback: assertNotCalled,
      trampoline: (...args) => stable.callback?.(...args),
      effect: () => {
        stable.callback = stable.next;
      }
    };
    return stable;
  }
  function assertNotCalled() {
    if (true) {
      throw (
        /* minify-error-disabled */
        new Error("Base UI: Cannot call an event handler while rendering.")
      );
    }
  }

  // node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
  init_define_import_meta_env();
  var React8 = __toESM(require_react_shim(), 1);
  var noop = () => {
  };
  var useIsoLayoutEffect = typeof document !== "undefined" ? React8.useLayoutEffect : noop;

  // node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
  init_define_import_meta_env();
  var React10 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
  init_define_import_meta_env();
  var ReactDOM = __toESM(require_react_dom_shim(), 1);

  // node_modules/@base-ui/utils/useAnimationFrame.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/useOnMount.mjs
  init_define_import_meta_env();
  var React9 = __toESM(require_react_shim(), 1);
  function useOnMount(fn) {
    React9.useEffect(fn, EMPTY_ARRAY);
  }

  // node_modules/@base-ui/utils/useAnimationFrame.mjs
  var EMPTY = null;
  var LAST_RAF = globalThis.requestAnimationFrame;
  var Scheduler = class {
    constructor() {
      /* This implementation uses an array as a backing data-structure for frame callbacks.
       * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
       * never calls the native `cancelAnimationFrame` if there are no frames left. This can
       * be much more efficient if there is a call pattern that alterns as
       * "request-cancel-request-cancel-…".
       * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
       * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
      __publicField(this, "callbacks", []);
      __publicField(this, "callbacksCount", 0);
      __publicField(this, "nextId", 1);
      __publicField(this, "startId", 1);
      __publicField(this, "isScheduled", false);
      __publicField(this, "tick", (timestamp) => {
        this.isScheduled = false;
        const currentCallbacks = this.callbacks;
        const currentCallbacksCount = this.callbacksCount;
        this.callbacks = [];
        this.callbacksCount = 0;
        this.startId = this.nextId;
        if (currentCallbacksCount > 0) {
          for (let i4 = 0; i4 < currentCallbacks.length; i4 += 1) {
            currentCallbacks[i4]?.(timestamp);
          }
        }
      });
    }
    request(fn) {
      const id = this.nextId;
      this.nextId += 1;
      this.callbacks.push(fn);
      this.callbacksCount += 1;
      const didRAFChange = LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
      if (!this.isScheduled || didRAFChange) {
        requestAnimationFrame(this.tick);
        this.isScheduled = true;
      }
      return id;
    }
    cancel(id) {
      const index = id - this.startId;
      if (index < 0 || index >= this.callbacks.length) {
        return;
      }
      if (this.callbacks[index] === null) {
        return;
      }
      this.callbacks[index] = null;
      this.callbacksCount -= 1;
    }
  };
  var scheduler = new Scheduler();
  var AnimationFrame = class _AnimationFrame {
    constructor() {
      __publicField(this, "currentId", EMPTY);
      __publicField(this, "cancel", () => {
        if (this.currentId !== EMPTY) {
          scheduler.cancel(this.currentId);
          this.currentId = EMPTY;
        }
      });
      __publicField(this, "disposeEffect", () => {
        return this.cancel;
      });
    }
    static create() {
      return new _AnimationFrame();
    }
    static request(fn) {
      return scheduler.request(fn);
    }
    static cancel(id) {
      return scheduler.cancel(id);
    }
    /**
     * Executes `fn` after `delay`, clearing any previously scheduled call.
     */
    request(fn) {
      this.cancel();
      this.currentId = scheduler.request(() => {
        this.currentId = EMPTY;
        fn();
      });
    }
  };
  function useAnimationFrame() {
    const timeout = useRefWithInit(AnimationFrame.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
  }

  // node_modules/@base-ui/react/utils/resolveRef.mjs
  init_define_import_meta_env();
  function resolveRef(maybeRef) {
    if (maybeRef == null) {
      return maybeRef;
    }
    return "current" in maybeRef ? maybeRef.current : maybeRef;
  }

  // node_modules/@base-ui/react/internals/TransitionStatusDataAttributes.mjs
  init_define_import_meta_env();
  var startingStyle = "data-starting-style";
  var endingStyle = "data-ending-style";

  // node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
  var pendingCallbacks = null;
  function flushBeforePaint(fn) {
    if (!pendingCallbacks) {
      const callbacks = [];
      pendingCallbacks = callbacks;
      queueMicrotask(() => {
        pendingCallbacks = null;
        ReactDOM.flushSync(() => {
          for (const callback of callbacks) {
            callback();
          }
        });
      });
    }
    pendingCallbacks.push(fn);
  }
  function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, batch = false) {
    const frame = useAnimationFrame();
    return useStableCallback((fnToExecute, signal = null) => {
      frame.cancel();
      const element = resolveRef(elementOrRef);
      if (element == null) {
        return;
      }
      const resolvedElement = element;
      const done = () => {
        if (!batch) {
          ReactDOM.flushSync(fnToExecute);
          return;
        }
        flushBeforePaint(() => {
          if (!signal?.aborted) {
            fnToExecute();
          }
        });
      };
      if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
        fnToExecute();
        return;
      }
      function exec() {
        Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
          if (!signal?.aborted) {
            done();
          }
        }, () => {
          if (signal?.aborted) {
            return;
          }
          const currentAnimations = resolvedElement.getAnimations();
          if (currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
            exec();
            return;
          }
          done();
        });
      }
      if (waitForStartingStyleRemoved) {
        const startingStyleAttribute = startingStyle;
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          frame.request(exec);
          return;
        }
        const attributeObserver = new MutationObserver(() => {
          if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
            attributeObserver.disconnect();
            exec();
          }
        });
        attributeObserver.observe(resolvedElement, {
          attributes: true,
          attributeFilter: [startingStyleAttribute]
        });
        signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
          once: true
        });
        return;
      }
      frame.request(exec);
    });
  }

  // node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
  function useOpenChangeComplete(parameters) {
    const {
      enabled = true,
      open,
      ref,
      batch = false,
      onComplete: onCompleteParam
    } = parameters;
    const onComplete = useStableCallback(onCompleteParam);
    const runOnceAnimationsFinish = useAnimationsFinished(ref, open, batch);
    React10.useEffect(() => {
      if (!enabled) {
        return void 0;
      }
      const abortController = new AbortController();
      runOnceAnimationsFinish(onComplete, abortController.signal);
      return () => {
        abortController.abort();
      };
    }, [enabled, open, onComplete, runOnceAnimationsFinish]);
  }

  // node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
  init_define_import_meta_env();
  var STARTING_HOOK = {
    [startingStyle]: ""
  };
  var ENDING_HOOK = {
    [endingStyle]: ""
  };
  var transitionStatusMapping = {
    transitionStatus(value) {
      if (value === "starting") {
        return STARTING_HOOK;
      }
      if (value === "ending") {
        return ENDING_HOOK;
      }
      return null;
    }
  };

  // node_modules/@base-ui/react/internals/useTransitionStatus.mjs
  init_define_import_meta_env();
  var React11 = __toESM(require_react_shim(), 1);
  function useTransitionStatus(open, enableIdleState = false, deferEndingState = false, animateInitialOpen = false) {
    const [transitionStatus, setTransitionStatus] = React11.useState(open && enableIdleState ? "idle" : void 0);
    const [mounted, setMounted] = React11.useState(open && !animateInitialOpen);
    if (open && !mounted) {
      setMounted(true);
      setTransitionStatus("starting");
    }
    if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
      setTransitionStatus("ending");
    }
    if (!open && !mounted && transitionStatus === "ending") {
      setTransitionStatus(void 0);
    }
    useIsoLayoutEffect(() => {
      if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
        const frame = AnimationFrame.request(() => {
          setTransitionStatus("ending");
        });
        return () => {
          AnimationFrame.cancel(frame);
        };
      }
      return void 0;
    }, [open, mounted, transitionStatus, deferEndingState]);
    useIsoLayoutEffect(() => {
      if (!open || enableIdleState) {
        return void 0;
      }
      const frame = AnimationFrame.request(() => {
        setTransitionStatus(void 0);
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }, [enableIdleState, open]);
    useIsoLayoutEffect(() => {
      if (!open || !enableIdleState) {
        return void 0;
      }
      if (open && mounted && transitionStatus !== "idle") {
        setTransitionStatus("starting");
      }
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("idle");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }, [enableIdleState, open, mounted, transitionStatus]);
    return {
      mounted,
      setMounted,
      transitionStatus
    };
  }

  // node_modules/@base-ui/react/avatar/image/useImageLoadingStatus.mjs
  init_define_import_meta_env();
  var React12 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/noop.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/avatar/image/useImageLoadingStatus.mjs
  function useImageLoadingStatus(src, {
    referrerPolicy,
    crossOrigin,
    sizes,
    srcSet
  }, enabled) {
    const state = React12.useState("idle");
    const setLoadingStatus = state[1];
    useIsoLayoutEffect(() => {
      if (!enabled) {
        return NOOP;
      }
      if (!src && !srcSet) {
        setLoadingStatus("error");
        return NOOP;
      }
      let isMounted = true;
      const image = new window.Image();
      const updateStatus = (status) => () => {
        if (!isMounted) {
          return;
        }
        setLoadingStatus(status);
      };
      setLoadingStatus("loading");
      image.onload = updateStatus("loaded");
      image.onerror = updateStatus("error");
      if (referrerPolicy) {
        image.referrerPolicy = referrerPolicy;
      }
      image.crossOrigin = crossOrigin ?? null;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcSet) {
        image.srcset = srcSet;
      }
      if (src) {
        image.src = src;
      }
      if (image.complete) {
        setLoadingStatus(image.naturalWidth > 0 ? "loaded" : "error");
      }
      return () => {
        isMounted = false;
      };
    }, [enabled, src, srcSet, sizes, crossOrigin, referrerPolicy, setLoadingStatus]);
    return state;
  }

  // node_modules/@base-ui/react/avatar/image/AvatarImage.mjs
  var stateAttributesMapping = {
    ...avatarStateAttributesMapping,
    ...transitionStatusMapping
  };
  var AvatarImage = /* @__PURE__ */ React13.forwardRef(function AvatarImage2(componentProps, forwardedRef) {
    const {
      className,
      render,
      onLoadingStatusChange: onLoadingStatusChangeProp,
      keepMounted = false,
      style,
      // Split out so they can be applied after every other prop. React 17 and 18 set attributes in
      // props order, and Safari and Firefox start fetching as soon as `src` lands, ignoring a
      // `loading` or `srcSet` that arrives after it. React 19 orders these itself.
      sizes,
      srcSet,
      src,
      ...elementProps
    } = componentProps;
    const {
      setImageLoadingStatus: setRootImageLoadingStatus
    } = useAvatarRootContext();
    const [imageLoadingStatus, setImageLoadingStatus] = useImageLoadingStatus(src, componentProps, !keepMounted);
    const isVisible = imageLoadingStatus === "loaded";
    const {
      mounted,
      transitionStatus,
      setMounted
    } = useTransitionStatus(isVisible);
    const imageRef = React13.useRef(null);
    const initialCommitRef = React13.useRef(true);
    useIsoLayoutEffect(() => {
      if (!keepMounted) {
        return;
      }
      const isInitialCommit = initialCommitRef.current;
      initialCommitRef.current = false;
      const image = imageRef.current;
      if (!image) {
        return;
      }
      if (!image.complete) {
        setImageLoadingStatus("loading");
        return;
      }
      const status = image.naturalWidth > 0 ? "loaded" : "error";
      setImageLoadingStatus(status);
      if (status === "loaded" && isInitialCommit) {
        setMounted(true);
      }
    }, [keepMounted, src, srcSet, sizes, elementProps.crossOrigin, elementProps.referrerPolicy, render, setImageLoadingStatus, setMounted]);
    const renderedStatusProps = keepMounted ? {
      // Presence no longer implies the image loaded, so the not-loaded states need their own
      // styling hooks. Scoped to `keepMounted` so the default mode, where the element only
      // exists once loaded, doesn't pick them up while it animates out.
      "data-loading": imageLoadingStatus === "loading" ? "" : void 0,
      "data-error": imageLoadingStatus === "error" ? "" : void 0,
      // Until the image is displayable, the fallback owns the accessible name; without this
      // both would be exposed to assistive technology at once (including in server HTML).
      "aria-hidden": imageLoadingStatus !== "loaded" || void 0,
      onLoad() {
        setImageLoadingStatus("loaded");
      },
      onError() {
        setImageLoadingStatus("error");
      }
    } : void 0;
    const handleLoadingStatusChange = useStableCallback((status) => {
      onLoadingStatusChangeProp?.(status);
      setRootImageLoadingStatus(status);
    });
    useIsoLayoutEffect(() => {
      if (imageLoadingStatus !== "idle") {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    useIsoLayoutEffect(() => {
      return () => setRootImageLoadingStatus("idle");
    }, [setRootImageLoadingStatus]);
    useOpenChangeComplete({
      enabled: !isVisible,
      open: isVisible,
      ref: imageRef,
      onComplete() {
        if (!isVisible) {
          setMounted(false);
        }
      }
    });
    const state = {
      imageLoadingStatus,
      // The element never unmounts with `keepMounted`, so an exit transition would play and then
      // reverse itself once the status is cleared. `data-loading`/`data-error` cover that state.
      transitionStatus: keepMounted && transitionStatus === "ending" ? void 0 : transitionStatus
    };
    const shouldRender = keepMounted || mounted;
    const sourceProps = {};
    if (sizes !== void 0) {
      sourceProps.sizes = sizes;
    }
    if (srcSet !== void 0) {
      sourceProps.srcSet = srcSet;
    }
    if (src !== void 0) {
      sourceProps.src = src;
    }
    const element = useRenderElement("img", componentProps, {
      state,
      ref: [forwardedRef, imageRef],
      props: [renderedStatusProps, elementProps, sourceProps],
      stateAttributesMapping,
      enabled: shouldRender
    });
    if (!shouldRender) {
      return null;
    }
    return element;
  });
  if (true) AvatarImage.displayName = "AvatarImage";

  // node_modules/@base-ui/react/avatar/fallback/AvatarFallback.mjs
  init_define_import_meta_env();
  var React14 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useTimeout.mjs
  init_define_import_meta_env();
  var EMPTY2 = 0;
  var Timeout = class _Timeout {
    constructor() {
      __publicField(this, "currentId", EMPTY2);
      __publicField(this, "clear", () => {
        if (this.currentId !== EMPTY2) {
          clearTimeout(this.currentId);
          this.currentId = EMPTY2;
        }
      });
      __publicField(this, "disposeEffect", () => {
        return this.clear;
      });
    }
    static create() {
      return new _Timeout();
    }
    /**
     * Executes `fn` after `delay`, clearing any previously scheduled call.
     */
    start(delay, fn) {
      this.clear();
      this.currentId = setTimeout(() => {
        this.currentId = EMPTY2;
        fn();
      }, delay);
    }
    isStarted() {
      return this.currentId !== EMPTY2;
    }
  };
  function useTimeout() {
    const timeout = useRefWithInit(Timeout.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
  }

  // node_modules/@base-ui/react/avatar/fallback/AvatarFallback.mjs
  var AvatarFallback = /* @__PURE__ */ React14.forwardRef(function AvatarFallback2(componentProps, forwardedRef) {
    const {
      className,
      render,
      delay = 0,
      style,
      ...elementProps
    } = componentProps;
    const {
      imageLoadingStatus
    } = useAvatarRootContext();
    const [delayPassed, setDelayPassed] = React14.useState(delay === 0);
    const timeout = useTimeout();
    React14.useEffect(() => {
      if (delay > 0) {
        timeout.start(delay, () => setDelayPassed(true));
      } else {
        setDelayPassed(true);
      }
      return timeout.clear;
    }, [timeout, delay]);
    const state = {
      imageLoadingStatus
    };
    const element = useRenderElement("span", componentProps, {
      state,
      ref: forwardedRef,
      props: elementProps,
      stateAttributesMapping: avatarStateAttributesMapping,
      enabled: imageLoadingStatus !== "loaded" && (delay === 0 || delayPassed)
    });
    return element;
  });
  if (true) AvatarFallback.displayName = "AvatarFallback";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/avatar.js
  var o2 = {
    root: "cjL2Cu5ew cBo57cSH2",
    image: "c7YQoLYyq",
    fallback: "cxq7Trpmg",
    status: "czUrI8iEs",
    active: "c5wCrZ8wu",
    inactive: "cH1KskmLM"
  };
  var s2 = (e6) => {
    let t7 = e6.trim().split(/\s+/u).filter(Boolean);
    return `${t7.at(0)?.at(0) ?? ""}${t7.length > 1 ? t7.at(-1)?.at(0) ?? "" : ""}`.toLocaleUpperCase();
  };
  var c2 = {
    userActive: "{{name}}, active",
    userInactive: "{{name}}, inactive"
  };
  var l2 = cva(o2.status, { variants: { status: {
    active: o2.active,
    inactive: o2.inactive
  } } });
  var u2 = {
    active: c2.userActive,
    inactive: c2.userInactive
  };
  var d = (0, import_react3.forwardRef)(({ name: t7, src: i4, status: c6 = "none", ...d4 }, f3) => {
    let p2 = u(), m2 = c6 === "none" ? t7 : p2(u2[c6], { name: t7 });
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(index_parts_exports.Root, {
      className: o2.root,
      ...d4,
      ref: f3,
      "aria-label": m2,
      role: "img",
      children: [
        i4 !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(index_parts_exports.Image, {
          alt: "",
          className: o2.image,
          src: i4
        }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(index_parts_exports.Fallback, {
          "aria-hidden": true,
          className: o2.fallback,
          children: s2(t7)
        }),
        c6 !== "none" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
          "aria-hidden": true,
          className: l2({ status: c6 })
        })
      ]
    });
  });
  d.displayName = "Avatar";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/badge.js
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var r4 = {
    root: "cPWU7Krw7",
    positive: "chexwposD",
    neutral: "ccmLUVNJ7"
  };
  var i2 = cva(r4.root, {
    variants: { intent: {
      positive: r4.positive,
      neutral: r4.neutral
    } },
    defaultVariants: { intent: "neutral" }
  });
  var a2 = (0, import_react4.forwardRef)(({ intent: e6, ...n6 }, r8) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
    className: i2({ intent: e6 }),
    ...n6,
    ref: r8
  }));
  a2.displayName = "Badge";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/button.js
  init_define_import_meta_env();
  var import_react5 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/button/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/button/Button.mjs
  init_define_import_meta_env();
  var React18 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/use-button/useButton.mjs
  init_define_import_meta_env();
  var React17 = __toESM(require_react_shim(), 1);

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
  init_define_import_meta_env();
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }

  // node_modules/@base-ui/utils/error.mjs
  init_define_import_meta_env();
  var error = createLogOnce("error", "Base UI");

  // node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
  init_define_import_meta_env();
  var React15 = __toESM(require_react_shim(), 1);
  var CompositeRootContext = /* @__PURE__ */ React15.createContext(void 0);
  if (true) CompositeRootContext.displayName = "CompositeRootContext";
  function useCompositeRootContext(optional = false) {
    const context = React15.useContext(CompositeRootContext);
    if (context === void 0 && !optional) {
      throw new Error(true ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
    }
    return context;
  }

  // node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
  init_define_import_meta_env();
  var React16 = __toESM(require_react_shim(), 1);
  function useFocusableWhenDisabled(parameters) {
    const {
      focusableWhenDisabled,
      disabled: disabled2,
      composite = false,
      tabIndex: tabIndexProp = 0,
      isNativeButton
    } = parameters;
    const isFocusableComposite = composite && focusableWhenDisabled !== false;
    const isNonFocusableComposite = composite && focusableWhenDisabled === false;
    const props = React16.useMemo(() => {
      const additionalProps = {
        // allow Tabbing away from focusableWhenDisabled elements
        onKeyDown(event) {
          if (disabled2 && focusableWhenDisabled && event.key !== "Tab") {
            event.preventDefault();
          }
        }
      };
      if (!composite) {
        additionalProps.tabIndex = tabIndexProp;
        if (!isNativeButton && disabled2) {
          additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
        }
      }
      if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled2) {
        additionalProps["aria-disabled"] = disabled2;
      }
      if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
        additionalProps.disabled = disabled2;
      }
      return additionalProps;
    }, [composite, disabled2, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
    return {
      props
    };
  }

  // node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/owner.mjs
  init_define_import_meta_env();
  function ownerDocument(node) {
    return node?.ownerDocument || document;
  }

  // node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
  function dispatchClickWithModifiers(target, sourceEvent, {
    detail = 0
  } = {}) {
    target.dispatchEvent(new (getWindow(target)).PointerEvent("click", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail,
      shiftKey: sourceEvent.shiftKey,
      ctrlKey: sourceEvent.ctrlKey,
      altKey: sourceEvent.altKey,
      metaKey: sourceEvent.metaKey
    }));
  }

  // node_modules/@base-ui/react/internals/use-button/useButton.mjs
  function useButton(parameters = {}) {
    const {
      disabled: disabled2 = false,
      focusableWhenDisabled,
      tabIndex = 0,
      native: isNativeButton = true,
      composite: compositeProp
    } = parameters;
    const elementRef = React17.useRef(null);
    const compositeRootContext = useCompositeRootContext(true);
    const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
    const {
      props: focusableWhenDisabledProps
    } = useFocusableWhenDisabled({
      focusableWhenDisabled,
      disabled: disabled2,
      composite: isCompositeItem,
      tabIndex,
      isNativeButton
    });
    if (true) {
      React17.useEffect(() => {
        if (!elementRef.current) {
          return;
        }
        const isButtonTag = isButtonElement(elementRef.current);
        if (isNativeButton) {
          if (!isButtonTag) {
            const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
            const message = "A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the `render` prop, or set `nativeButton` to `false`.";
            error(`${message}${ownerStackMessage}`);
          }
        } else if (isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message = "A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set `nativeButton` to `true`.";
          error(`${message}${ownerStackMessage}`);
        }
      }, [isNativeButton]);
    }
    const updateDisabled = React17.useCallback(() => {
      const element = elementRef.current;
      if (!isButtonElement(element)) {
        return;
      }
      if (isCompositeItem && disabled2 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
        element.disabled = false;
      }
    }, [disabled2, focusableWhenDisabledProps.disabled, isCompositeItem]);
    useIsoLayoutEffect(updateDisabled, [updateDisabled]);
    const getButtonProps = React17.useCallback((externalProps = {}) => {
      const {
        onClick: externalOnClick,
        onMouseDown: externalOnMouseDown,
        onKeyUp: externalOnKeyUp,
        onKeyDown: externalOnKeyDown,
        onPointerDown: externalOnPointerDown,
        ...otherExternalProps
      } = externalProps;
      return mergeProps({
        onClick(event) {
          if (disabled2) {
            event.preventDefault();
            return;
          }
          externalOnClick?.(event);
        },
        onMouseDown(event) {
          if (!disabled2) {
            externalOnMouseDown?.(event);
          }
        },
        onKeyDown(event) {
          if (disabled2) {
            return;
          }
          makeEventPreventable(event);
          externalOnKeyDown?.(event);
          if (event.baseUIHandlerPrevented) {
            return;
          }
          const isCurrentTarget = event.target === event.currentTarget;
          const currentTarget = event.currentTarget;
          const isButton = isButtonElement(currentTarget);
          const isLink = !isNativeButton && isValidLinkElement(currentTarget);
          const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
          const isEnterKey = event.key === "Enter";
          const isSpaceKey = event.key === " ";
          const role = currentTarget.getAttribute("role");
          const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
          if (isCurrentTarget && isCompositeItem && isSpaceKey) {
            if (event.defaultPrevented && isTextNavigationRole) {
              return;
            }
            event.preventDefault();
            if (!isNativeButton || isButton) {
              event.preventBaseUIHandler();
              dispatchClickWithModifiers(currentTarget, event);
            }
            return;
          }
          if (!shouldClick || isNativeButton || !isSpaceKey && !isEnterKey) {
            if (isCurrentTarget && isLink && isSpaceKey) {
              event.preventDefault();
            }
            return;
          }
          if (event.defaultPrevented) {
            return;
          }
          event.preventDefault();
          if (isEnterKey) {
            event.preventBaseUIHandler();
            dispatchClickWithModifiers(currentTarget, event);
          }
        },
        onKeyUp(event) {
          if (disabled2) {
            return;
          }
          makeEventPreventable(event);
          externalOnKeyUp?.(event);
          if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
            event.preventDefault();
            return;
          }
          if (event.baseUIHandlerPrevented) {
            return;
          }
          if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && !event.defaultPrevented && event.key === " ") {
            event.preventBaseUIHandler();
            dispatchClickWithModifiers(event.currentTarget, event);
          }
        },
        onPointerDown(event) {
          if (disabled2) {
            event.preventDefault();
            return;
          }
          externalOnPointerDown?.(event);
        }
      }, isNativeButton ? {
        type: "button"
      } : {
        role: "button"
      }, focusableWhenDisabledProps, otherExternalProps);
    }, [disabled2, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
    const buttonRef = useStableCallback((element) => {
      elementRef.current = element;
      updateDisabled();
    });
    return {
      getButtonProps,
      buttonRef
    };
  }
  function isButtonElement(elem) {
    return isHTMLElement(elem) && elem.tagName === "BUTTON";
  }
  function isValidLinkElement(elem) {
    return isHTMLElement(elem) && elem.tagName === "A" && Boolean(elem.href);
  }

  // node_modules/@base-ui/react/button/Button.mjs
  var Button = /* @__PURE__ */ React18.forwardRef(function Button2(componentProps, forwardedRef) {
    const {
      render,
      className,
      disabled: disabled2 = false,
      focusableWhenDisabled = false,
      nativeButton = true,
      style,
      ...elementProps
    } = componentProps;
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      focusableWhenDisabled,
      native: nativeButton
    });
    const state = {
      disabled: disabled2
    };
    return useRenderElement("button", componentProps, {
      state,
      ref: [forwardedRef, buttonRef],
      props: [elementProps, getButtonProps]
    });
  });
  if (true) Button.displayName = "Button";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/button.js
  var c3 = (0, import_react5.createContext)(null);
  var l3 = {
    root: "cCR7RV7b8",
    sm: "c5cEDp7cI",
    md: "cH9hYZici",
    full: "ck8WyplTX",
    positive: "c1KZLCItE",
    danger: "cub676zv2",
    automation: "cgtmURIaQ",
    neutral: "cTsqGa6eu",
    primary: "cFH1stVMW",
    secondary: "cwbwtnj2n",
    tertiary: "cbVXVI4tp",
    grouped: "crTlI9bBW",
    spinner: "ckdoDUfTw",
    letter: "cMXj7lhsF",
    "spinner-letter": "cVwqPIwn5",
    sweepLeft: "c2fg5ZWnu",
    sweepRight: "cMjI5DoDP",
    "spinner-sweep-left": "cdE3gg4aU",
    "spinner-sweep-right": "cryxDFUEB"
  };
  var u3 = () => {
    let e6 = (0, import_react5.useId)().replace(/:/g, "");
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", {
      "aria-hidden": "true",
      className: l3.spinner,
      fill: "currentColor",
      focusable: "false",
      viewBox: "0 0 38 24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("mask", {
          id: `${e6}-left`,
          maskUnits: "userSpaceOnUse",
          x: -10,
          y: -10,
          width: 58,
          height: 44,
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", {
            className: l3.sweepLeft,
            x: 19,
            y: -40,
            width: 60,
            height: 104,
            fill: "white"
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("mask", {
          id: `${e6}-right`,
          maskUnits: "userSpaceOnUse",
          x: -10,
          y: -10,
          width: 58,
          height: 44,
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", {
            className: l3.sweepRight,
            x: -41,
            y: -40,
            width: 60,
            height: 104,
            fill: "white"
          })
        })] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
          className: l3.letter,
          d: "M13.05 8.52h4.4v9.4h3.4v-9.4h4.4v-2.7h-12.2z"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
          mask: `url(#${e6}-left)`,
          d: "M15.09 22.52c.55.08 1.12.15 1.69.19-.57-.05-1.15-.1-1.69-.19M4.75 14a7 7 0 0 1 3.3-5.6V3.12c-4.2 2-6.9 5.1-6.9 8.7C1.15 17 7.08 21.36 15 22.51 9 21.4 4.75 18 4.75 14"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
          mask: `url(#${e6}-right)`,
          d: "M23.06 1.29l.63.1-.34-.07ZM23.69 1.39c5.72 1.07 9.86 4.41 9.86 8.33 0 .53 0 3.23-3.37 5.73v5.3c6.8-3.18 7-7.75 7-8.73-.03-5.13-5.78-9.4-13.49-10.63"
        })
      ]
    });
  };
  var d2 = cva(l3.root, {
    variants: {
      variant: {
        primary: l3.primary,
        secondary: l3.secondary,
        tertiary: l3.tertiary
      },
      intent: {
        positive: l3.positive,
        danger: l3.danger,
        neutral: l3.neutral,
        automation: l3.automation
      },
      size: {
        sm: l3.sm,
        md: l3.md
      },
      width: {
        auto: null,
        full: l3.full
      },
      grouped: {
        true: l3.grouped,
        false: null
      }
    },
    defaultVariants: {
      variant: "primary",
      intent: "positive",
      size: "md",
      width: "auto"
    }
  });
  var f = (0, import_react5.forwardRef)(({ variant: e6, intent: t7, size: r8, width: o5, loading: l6 = false, children: f3, onClick: p2, ...m2 }, h2) => {
    let g = (0, import_react5.useContext)(c3) !== null;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
      className: d2({
        variant: e6,
        intent: t7,
        size: r8,
        width: o5,
        grouped: g
      }),
      ...m2,
      "aria-busy": l6 || void 0,
      "data-loading": l6 ? "" : void 0,
      onClick: (e7) => {
        l6 || p2?.(e7);
      },
      ref: h2,
      children: [f3, l6 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(u3, {})]
    });
  });
  f.displayName = "Button";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/checkbox.js
  init_define_import_meta_env();
  var import_react6 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime7 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/checkbox/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/checkbox/index.parts.mjs
  var index_parts_exports2 = {};
  __export(index_parts_exports2, {
    Indicator: () => CheckboxIndicator,
    Root: () => CheckboxRoot
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/checkbox/root/CheckboxRoot.mjs
  init_define_import_meta_env();
  var React30 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useControlled.mjs
  init_define_import_meta_env();
  var React19 = __toESM(require_react_shim(), 1);
  function useControlled({
    controlled,
    default: defaultProp,
    name,
    state = "value"
  }) {
    const {
      current: isControlled
    } = React19.useRef(controlled !== void 0);
    const [valueState, setValue] = React19.useState(defaultProp);
    const value = isControlled && controlled !== void 0 ? controlled : valueState;
    if (true) {
      React19.useEffect(() => {
        if (isControlled !== (controlled !== void 0)) {
          error([`A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
        }
      }, [state, name, controlled]);
      const {
        current: defaultValue
      } = React19.useRef(defaultProp);
      React19.useEffect(() => {
        if (!isControlled && serializeToDevModeString(defaultValue) !== serializeToDevModeString(defaultProp)) {
          error([`A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
        }
      }, [defaultProp]);
    }
    const setValueIfUncontrolled = React19.useCallback((newValue) => {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
    return [value, setValueIfUncontrolled];
  }
  function serializeToDevModeString(input) {
    let nextId = 0;
    const seen = /* @__PURE__ */ new WeakMap();
    try {
      const result = JSON.stringify(input, function replacer(key, value) {
        if (key === "_owner" && this != null && typeof this === "object" && "$$typeof" in this) {
          return void 0;
        }
        if (typeof value === "bigint") {
          return `__bigint__:${value}`;
        }
        if (value !== null && typeof value === "object") {
          const id = seen.get(value);
          if (id !== void 0) {
            return `__object__:${id}`;
          }
          seen.set(value, nextId);
          nextId += 1;
        }
        return value;
      });
      return result ?? `__top__:${typeof input}`;
    } catch {
      return "__unserializable__";
    }
  }

  // node_modules/@base-ui/utils/visuallyHidden.mjs
  init_define_import_meta_env();
  var visuallyHiddenBase = {
    clipPath: "inset(50%)",
    overflow: "hidden",
    whiteSpace: "nowrap",
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1
  };
  var visuallyHidden = {
    ...visuallyHiddenBase,
    position: "fixed",
    top: 0,
    left: 0
  };
  var visuallyHiddenInput = {
    ...visuallyHiddenBase,
    position: "absolute"
  };

  // node_modules/@base-ui/utils/getDefaultFormSubmitter.mjs
  init_define_import_meta_env();
  function getDefaultFormSubmitter(form) {
    if (!form) {
      return null;
    }
    for (const candidate of form.elements) {
      const tagName = candidate.tagName;
      if (tagName === "BUTTON" || tagName === "INPUT") {
        const button = candidate;
        if (button.type === "submit") {
          return button;
        }
      }
    }
    return null;
  }

  // node_modules/@base-ui/react/checkbox/utils/getCheckboxStateAttributesMapping.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/field-constants/constants.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/field/control/FieldControlDataAttributes.mjs
  init_define_import_meta_env();
  var valid = "data-valid";
  var invalid = "data-invalid";

  // node_modules/@base-ui/react/internals/field-constants/constants.mjs
  var DEFAULT_VALIDITY_STATE = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: null,
    valueMissing: false
  };
  var DEFAULT_FIELD_STATE_ATTRIBUTES = {
    valid: null,
    touched: false,
    dirty: false,
    filled: false,
    focused: false
  };
  var DEFAULT_FIELD_ROOT_STATE = {
    disabled: false,
    ...DEFAULT_FIELD_STATE_ATTRIBUTES
  };
  var fieldValidityMapping = {
    valid(value) {
      if (value === null) {
        return null;
      }
      if (value) {
        return {
          [valid]: ""
        };
      }
      return {
        [invalid]: ""
      };
    }
  };

  // node_modules/@base-ui/react/checkbox/root/CheckboxRootDataAttributes.mjs
  init_define_import_meta_env();
  var checked = "data-checked";
  var unchecked = "data-unchecked";

  // node_modules/@base-ui/react/checkbox/utils/getCheckboxStateAttributesMapping.mjs
  function getCheckboxStateAttributesMapping(state) {
    return {
      checked(value) {
        if (state.indeterminate) {
          return {};
        }
        if (value) {
          return {
            [checked]: ""
          };
        }
        return {
          [unchecked]: ""
        };
      },
      ...fieldValidityMapping
    };
  }

  // node_modules/@base-ui/react/internals/useBaseUiId.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/useId.mjs
  init_define_import_meta_env();
  var React20 = __toESM(require_react_shim(), 1);
  var globalId = 0;
  function useGlobalId(idOverride, prefix = "mui") {
    const [defaultId, setDefaultId] = React20.useState(idOverride);
    const id = idOverride || defaultId;
    React20.useEffect(() => {
      if (defaultId == null) {
        globalId += 1;
        setDefaultId(`${prefix}-${globalId}`);
      }
    }, [defaultId, prefix]);
    return id;
  }
  var maybeReactUseId = SafeReact.useId;
  function useId(idOverride, prefix) {
    if (maybeReactUseId !== void 0) {
      const reactId = maybeReactUseId();
      return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
    }
    return useGlobalId(idOverride, prefix);
  }

  // node_modules/@base-ui/react/internals/useBaseUiId.mjs
  function useBaseUiId(idOverride) {
    return useId(idOverride, "base-ui");
  }

  // node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
  init_define_import_meta_env();
  var React21 = __toESM(require_react_shim(), 1);
  var DEFAULT_FIELD_ROOT_CONTEXT = {
    invalid: void 0,
    name: void 0,
    validityData: {
      state: DEFAULT_VALIDITY_STATE,
      errors: [],
      error: "",
      value: "",
      initialValue: null
    },
    setValidityData: NOOP,
    disabled: void 0,
    setTouched: NOOP,
    setDirty: NOOP,
    setFilled: NOOP,
    setFocused: NOOP,
    validationMode: "onSubmit",
    shouldValidateOnChange: () => false,
    state: DEFAULT_FIELD_ROOT_STATE,
    registerFieldControl: NOOP,
    validation: {
      getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
      inputRef: {
        current: null
      },
      registeredInputs: /* @__PURE__ */ new Map(),
      registerInput: NOOP,
      getInputControl: () => null,
      commit: async () => {
      },
      change: NOOP
    }
  };
  var FieldRootContext = /* @__PURE__ */ React21.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
  if (true) FieldRootContext.displayName = "FieldRootContext";
  function useFieldRootContext(optional = true) {
    const context = React21.useContext(FieldRootContext);
    if (context.setValidityData === NOOP && !optional) {
      throw new Error(true ? "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>." : formatErrorMessage_default(28));
    }
    return context;
  }

  // node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
  init_define_import_meta_env();
  function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
    const {
      registerFieldControl
    } = useFieldRootContext();
    const sourceRef = useRefWithInit(() => /* @__PURE__ */ Symbol());
    useIsoLayoutEffect(() => {
      const source = sourceRef.current;
      if (!enabled) {
        registerFieldControl(source, void 0);
        return;
      }
      const registration = {
        controlRef,
        getValue: getFormValueOverride,
        id,
        name,
        value
      };
      registerFieldControl(source, registration);
    }, [controlRef, enabled, getFormValueOverride, id, name, registerFieldControl, sourceRef, value]);
    useIsoLayoutEffect(() => {
      const source = sourceRef.current;
      return () => {
        registerFieldControl(source, void 0);
      };
    }, [registerFieldControl, sourceRef]);
  }

  // node_modules/@base-ui/react/field/item/FieldItemContext.mjs
  init_define_import_meta_env();
  var React22 = __toESM(require_react_shim(), 1);
  var FieldItemContext = /* @__PURE__ */ React22.createContext({
    disabled: false
  });
  if (true) FieldItemContext.displayName = "FieldItemContext";
  function useFieldItemContext() {
    const context = React22.useContext(FieldItemContext);
    return context;
  }

  // node_modules/@base-ui/react/internals/form-context/FormContext.mjs
  init_define_import_meta_env();
  var React23 = __toESM(require_react_shim(), 1);
  var FormContext = /* @__PURE__ */ React23.createContext({
    elementRef: {
      current: null
    },
    formRef: {
      current: {
        fields: /* @__PURE__ */ new Map()
      }
    },
    errors: {},
    clearErrors: NOOP,
    validationMode: "onSubmit",
    submitCountRef: {
      current: 0
    }
  });
  if (true) FormContext.displayName = "FormContext";
  function useFormContext() {
    return React23.useContext(FormContext);
  }

  // node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
  init_define_import_meta_env();
  var React24 = __toESM(require_react_shim(), 1);
  var LabelableContext = /* @__PURE__ */ React24.createContext({
    controlId: void 0,
    registerControlId: NOOP,
    resetControlId: NOOP,
    labelId: void 0,
    setLabelId: NOOP,
    messageIds: [],
    setMessageIds: NOOP,
    getDescriptionProps: (externalProps) => externalProps
  });
  if (true) LabelableContext.displayName = "LabelableContext";
  function useLabelableContext() {
    return React24.useContext(LabelableContext);
  }

  // node_modules/@base-ui/react/internals/labelable-provider/useAriaLabelledBy.mjs
  init_define_import_meta_env();
  var React25 = __toESM(require_react_shim(), 1);
  function useAriaLabelledBy(explicitAriaLabelledBy, labelId, labelSourceRef, enableFallback = true, labelSourceId) {
    const [fallbackAriaLabelledBy, setFallbackAriaLabelledBy] = React25.useState();
    const generatedLabelId = useBaseUiId(labelSourceId ? `${labelSourceId}-label` : void 0);
    const ariaLabelledBy = explicitAriaLabelledBy ?? labelId ?? fallbackAriaLabelledBy;
    useIsoLayoutEffect(() => {
      const nextAriaLabelledBy = explicitAriaLabelledBy || labelId || !enableFallback ? void 0 : getAriaLabelledBy(labelSourceRef.current, generatedLabelId);
      if (fallbackAriaLabelledBy !== nextAriaLabelledBy) {
        setFallbackAriaLabelledBy(nextAriaLabelledBy);
      }
    });
    return ariaLabelledBy;
  }
  function getAriaLabelledBy(labelSource, generatedLabelId) {
    const label = findAssociatedLabel(labelSource);
    if (!label) {
      return void 0;
    }
    if (!label.id && generatedLabelId) {
      label.id = generatedLabelId;
    }
    return label.id || void 0;
  }
  function findAssociatedLabel(labelSource) {
    if (!labelSource) {
      return void 0;
    }
    const parent = labelSource.parentElement;
    if (parent && parent.tagName === "LABEL") {
      return parent;
    }
    const controlId = labelSource.id;
    if (controlId) {
      const nextSibling = labelSource.nextElementSibling;
      if (nextSibling && nextSibling.htmlFor === controlId) {
        return nextSibling;
      }
    }
    const labels = labelSource.labels;
    return labels && labels[0];
  }

  // node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
  init_define_import_meta_env();
  var React26 = __toESM(require_react_shim(), 1);
  function useLabelableId(params = {}) {
    const {
      id,
      enabled = true
    } = params;
    const {
      controlId,
      registerControlId,
      resetControlId
    } = useLabelableContext();
    const defaultId = useBaseUiId();
    const controlSourceRef = useRefWithInit(() => /* @__PURE__ */ Symbol());
    const hasRegisteredRef = React26.useRef(false);
    const hadExplicitIdRef = React26.useRef(false);
    const unregisterControlId = useStableCallback(() => {
      if (!hasRegisteredRef.current || registerControlId === NOOP) {
        return;
      }
      hasRegisteredRef.current = false;
      registerControlId(controlSourceRef.current, void 0);
    });
    useIsoLayoutEffect(() => {
      if (!enabled || registerControlId === NOOP) {
        unregisterControlId();
        return void 0;
      }
      let nextId;
      if (id !== void 0) {
        hadExplicitIdRef.current = true;
        nextId = id;
      } else if (hadExplicitIdRef.current) {
        nextId = defaultId;
      } else {
        resetControlId();
        return void 0;
      }
      if (nextId === void 0) {
        unregisterControlId();
        return void 0;
      }
      hasRegisteredRef.current = true;
      registerControlId(controlSourceRef.current, nextId);
      return void 0;
    }, [id, enabled, registerControlId, resetControlId, defaultId, controlSourceRef, unregisterControlId]);
    useIsoLayoutEffect(() => {
      return unregisterControlId;
    }, [unregisterControlId]);
    return (enabled ? controlId : void 0) ?? id ?? defaultId;
  }

  // node_modules/@base-ui/react/checkbox-group/CheckboxGroupContext.mjs
  init_define_import_meta_env();
  var React27 = __toESM(require_react_shim(), 1);
  var CheckboxGroupContext = /* @__PURE__ */ React27.createContext(void 0);
  if (true) CheckboxGroupContext.displayName = "CheckboxGroupContext";
  function useCheckboxGroupContext() {
    return React27.useContext(CheckboxGroupContext);
  }

  // node_modules/@base-ui/react/checkbox/root/CheckboxRootContext.mjs
  init_define_import_meta_env();
  var React28 = __toESM(require_react_shim(), 1);
  var CheckboxRootContext = /* @__PURE__ */ React28.createContext(void 0);
  if (true) CheckboxRootContext.displayName = "CheckboxRootContext";
  function useCheckboxRootContext() {
    const context = React28.useContext(CheckboxRootContext);
    if (context === void 0) {
      throw new Error(true ? "Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>." : formatErrorMessage_default(14));
    }
    return context;
  }

  // node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/reasons.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/reason-parts.mjs
  var reason_parts_exports = {};
  __export(reason_parts_exports, {
    cancelOpen: () => cancelOpen,
    chipRemovePress: () => chipRemovePress,
    clearPress: () => clearPress,
    closePress: () => closePress,
    closeWatcher: () => closeWatcher,
    decrementPress: () => decrementPress,
    disabled: () => disabled,
    drag: () => drag,
    escapeKey: () => escapeKey,
    focusOut: () => focusOut,
    imperativeAction: () => imperativeAction,
    incrementPress: () => incrementPress,
    initial: () => initial,
    inputBlur: () => inputBlur,
    inputChange: () => inputChange,
    inputClear: () => inputClear,
    inputPaste: () => inputPaste,
    inputPress: () => inputPress,
    itemPress: () => itemPress,
    keyboard: () => keyboard,
    linkPress: () => linkPress,
    listNavigation: () => listNavigation,
    missing: () => missing,
    none: () => none,
    outsidePress: () => outsidePress,
    pointer: () => pointer,
    scrub: () => scrub,
    siblingOpen: () => siblingOpen,
    swipe: () => swipe,
    trackPress: () => trackPress,
    triggerFocus: () => triggerFocus,
    triggerHover: () => triggerHover,
    triggerPress: () => triggerPress,
    wheel: () => wheel,
    windowResize: () => windowResize
  });
  init_define_import_meta_env();
  var none = "none";
  var triggerPress = "trigger-press";
  var triggerHover = "trigger-hover";
  var triggerFocus = "trigger-focus";
  var outsidePress = "outside-press";
  var itemPress = "item-press";
  var closePress = "close-press";
  var linkPress = "link-press";
  var clearPress = "clear-press";
  var chipRemovePress = "chip-remove-press";
  var trackPress = "track-press";
  var incrementPress = "increment-press";
  var decrementPress = "decrement-press";
  var inputChange = "input-change";
  var inputClear = "input-clear";
  var inputBlur = "input-blur";
  var inputPaste = "input-paste";
  var inputPress = "input-press";
  var focusOut = "focus-out";
  var escapeKey = "escape-key";
  var closeWatcher = "close-watcher";
  var listNavigation = "list-navigation";
  var keyboard = "keyboard";
  var pointer = "pointer";
  var drag = "drag";
  var wheel = "wheel";
  var scrub = "scrub";
  var cancelOpen = "cancel-open";
  var siblingOpen = "sibling-open";
  var disabled = "disabled";
  var missing = "missing";
  var initial = "initial";
  var imperativeAction = "imperative-action";
  var swipe = "swipe";
  var windowResize = "window-resize";

  // node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
  function createChangeEventDetails(reason, event, trigger, customProperties) {
    let canceled = false;
    let allowPropagation = false;
    const custom = customProperties ?? EMPTY_OBJECT;
    const details = {
      reason,
      event: event ?? new Event("base-ui"),
      cancel() {
        canceled = true;
      },
      allowPropagation() {
        allowPropagation = true;
      },
      get isCanceled() {
        return canceled;
      },
      get isPropagationAllowed() {
        return allowPropagation;
      },
      trigger,
      ...custom
    };
    return details;
  }

  // node_modules/@base-ui/react/internals/useValueChanged.mjs
  init_define_import_meta_env();
  var React29 = __toESM(require_react_shim(), 1);
  function useValueChanged(value, onChange) {
    const valueRef = React29.useRef(value);
    const onChangeCallback = useStableCallback(onChange);
    useIsoLayoutEffect(() => {
      if (valueRef.current !== value) {
        onChangeCallback(valueRef.current);
      }
      valueRef.current = value;
    }, [value, onChangeCallback]);
  }

  // node_modules/@base-ui/react/checkbox/root/CheckboxRoot.mjs
  var import_jsx_runtime6 = __toESM(require_react_shim(), 1);
  var PARENT_CHECKBOX = "data-parent";
  var CheckboxRoot = /* @__PURE__ */ React30.forwardRef(function CheckboxRoot2(componentProps, forwardedRef) {
    const {
      checked: checkedProp,
      className,
      defaultChecked = false,
      "aria-labelledby": ariaLabelledByProp,
      disabled: disabledProp = false,
      form,
      id: idProp,
      indeterminate = false,
      inputRef: inputRefProp,
      name: nameProp,
      onCheckedChange,
      parent = false,
      readOnly = false,
      render,
      required = false,
      uncheckedValue,
      value: valueProp,
      nativeButton = false,
      style,
      ...elementProps
    } = componentProps;
    const {
      clearErrors
    } = useFormContext();
    const {
      disabled: rootDisabled,
      name: fieldName,
      setDirty,
      setFilled,
      setFocused,
      setTouched,
      state: fieldState,
      validationMode,
      validityData,
      validation: localValidation
    } = useFieldRootContext();
    const fieldItemContext = useFieldItemContext();
    const {
      labelId,
      registerControlId,
      getDescriptionProps
    } = useLabelableContext();
    const groupContext = useCheckboxGroupContext();
    const parentContext = groupContext?.allValues === void 0 ? void 0 : groupContext.parent;
    const isGroupedWithParent = parentContext !== void 0;
    const disabled2 = rootDisabled || fieldItemContext.disabled || groupContext?.disabled || disabledProp;
    const name = fieldName ?? nameProp;
    const value = valueProp ?? name;
    const id = useBaseUiId();
    const ownsControlId = groupContext?.registerControlId !== registerControlId;
    const controlId = useLabelableId({
      id: idProp || void 0,
      enabled: ownsControlId
    });
    const rootId = nativeButton ? controlId : id;
    let groupProps = {};
    if (isGroupedWithParent) {
      if (parent) {
        groupProps = parentContext.getParentProps();
      } else if (value !== void 0) {
        groupProps = parentContext.getChildProps(value);
      }
    }
    const {
      checked: groupChecked = checkedProp,
      indeterminate: groupIndeterminate = indeterminate,
      onCheckedChange: groupOnChange,
      ...otherGroupProps
    } = groupProps;
    const groupValue = groupContext?.value;
    const controlRef = React30.useRef(null);
    const {
      getButtonProps,
      buttonRef
    } = useButton({
      disabled: disabled2,
      native: nativeButton
    });
    const validation = groupContext?.validation ?? localValidation;
    const [checked2, setCheckedState] = useControlled({
      controlled: value !== void 0 && groupValue !== void 0 && !parent ? groupValue.includes(value) : groupChecked,
      default: defaultChecked,
      name: "Checkbox",
      state: "checked"
    });
    const computedChecked = isGroupedWithParent ? Boolean(groupChecked) : checked2;
    const computedIndeterminate = isGroupedWithParent ? groupIndeterminate || indeterminate : indeterminate;
    useRegisterFieldControl(controlRef, id, checked2, void 0, !groupContext && !disabled2, nameProp);
    const registerChildId = parentContext?.registerChildId;
    const inputRef = React30.useRef(null);
    const registerFieldInput = validation.registerInput;
    const registeredInputValue = groupContext ? value : void 0;
    const registerInput = React30.useCallback((element2) => registerFieldInput(element2, {
      controlRef,
      value: registeredInputValue
    }), [registerFieldInput, registeredInputValue]);
    const mergedInputRef = useMergedRefs(inputRefProp, inputRef, parent ? void 0 : registerInput);
    const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, controlId);
    useIsoLayoutEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = computedIndeterminate;
      }
      if (!groupContext) {
        setFilled(checked2);
      }
    }, [checked2, computedIndeterminate, groupContext, setFilled]);
    useValueChanged(checked2, () => {
      if (groupContext) {
        return;
      }
      clearErrors(name);
      setDirty(checked2 !== validityData.initialValue);
      validation.change(checked2);
    });
    const inputProps = mergeProps(
      {
        checked: checked2,
        disabled: disabled2,
        form,
        // parent checkboxes unset `name` to be excluded from form submission
        name: parent ? void 0 : name,
        // Set `id` to stop Chrome warning about an unassociated input.
        // When using a native button, the `id` is applied to the button instead.
        id: nativeButton ? void 0 : controlId,
        required,
        ref: mergedInputRef,
        style: name ? visuallyHiddenInput : visuallyHidden,
        tabIndex: -1,
        type: "checkbox",
        "aria-hidden": true,
        onChange(event) {
          if (event.nativeEvent.defaultPrevented) {
            return;
          }
          if (readOnly) {
            event.preventDefault();
            return;
          }
          const nextChecked = event.currentTarget.checked;
          const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
          onCheckedChange?.(nextChecked, details);
          if (details.isCanceled) {
            return;
          }
          groupOnChange?.(nextChecked, details);
          if (details.isCanceled) {
            return;
          }
          setCheckedState(nextChecked);
          if (value !== void 0 && groupContext !== void 0 && !parent && !isGroupedWithParent) {
            const nextGroupValue = nextChecked ? [...groupContext.value, value] : groupContext.value.filter((item) => item !== value);
            groupContext.setValue(nextGroupValue, details);
          }
        },
        onClick(event) {
          event.stopPropagation();
        },
        onFocus() {
          controlRef.current?.focus();
        }
      },
      // React <19 sets an empty value if `undefined` is passed explicitly
      // To avoid this, we only set the value if it's defined
      valueProp !== void 0 ? {
        value: (groupContext ? checked2 && valueProp : valueProp) || ""
      } : EMPTY_OBJECT,
      getDescriptionProps,
      (props) => validation.getValidationProps(disabled2, props)
    );
    React30.useEffect(() => {
      if (!parentContext || value === void 0) {
        return void 0;
      }
      const disabledStates = parentContext.disabledStatesRef.current;
      disabledStates.set(value, disabled2);
      return () => {
        disabledStates.delete(value);
      };
    }, [parentContext, disabled2, value]);
    const state = React30.useMemo(() => ({
      ...fieldState,
      checked: computedChecked,
      disabled: disabled2,
      readOnly,
      required,
      indeterminate: computedIndeterminate
    }), [fieldState, computedChecked, disabled2, readOnly, required, computedIndeterminate]);
    const stateAttributesMapping3 = getCheckboxStateAttributesMapping(state);
    const element = useRenderElement("span", componentProps, {
      state,
      ref: [buttonRef, controlRef, forwardedRef],
      props: [{
        id: rootId,
        role: "checkbox",
        "aria-checked": computedIndeterminate ? "mixed" : computedChecked,
        "aria-readonly": readOnly || void 0,
        "aria-required": required || void 0,
        "aria-labelledby": ariaLabelledBy,
        [PARENT_CHECKBOX]: parent ? "" : void 0,
        onFocus() {
          if (!disabled2) {
            setFocused(true);
          }
        },
        onBlur() {
          const inputEl = inputRef.current;
          if (!inputEl) {
            return;
          }
          setTouched(true);
          setFocused(false);
          if (validationMode === "onBlur") {
            validation.commit(groupContext ? groupValue : inputEl.checked);
          }
        },
        onKeyDown(event) {
          if (event.key !== "Enter") {
            return;
          }
          event.preventBaseUIHandler();
          if (event.defaultPrevented) {
            return;
          }
          const formToSubmit = inputRef.current?.form ?? null;
          const currentTarget = event.currentTarget;
          const nativeEvent = event.nativeEvent;
          const originalPreventDefault = event.preventDefault;
          const originalNativePreventDefault = nativeEvent.preventDefault;
          let preventDefaultCalledAfterPropagation = false;
          event.preventDefault = () => {
            preventDefaultCalledAfterPropagation = true;
            originalPreventDefault.call(event);
          };
          nativeEvent.preventDefault = () => {
            preventDefaultCalledAfterPropagation = true;
            originalNativePreventDefault.call(nativeEvent);
          };
          originalNativePreventDefault.call(nativeEvent);
          getWindow(currentTarget).queueMicrotask(() => {
            event.preventDefault = originalPreventDefault;
            nativeEvent.preventDefault = originalNativePreventDefault;
            if (!preventDefaultCalledAfterPropagation) {
              getDefaultFormSubmitter(formToSubmit)?.click();
            }
          });
        },
        onClick(event) {
          if (readOnly || disabled2) {
            return;
          }
          event.preventDefault();
          const input = inputRef.current;
          if (!input) {
            return;
          }
          dispatchClickWithModifiers(input, event);
        }
      }, elementProps, otherGroupProps, getButtonProps, getDescriptionProps, (props) => validation.getValidationProps(disabled2, props)],
      stateAttributesMapping: stateAttributesMapping3
    });
    const renderedId = element.props.id;
    useIsoLayoutEffect(() => {
      if (!registerChildId || parent || value === void 0 || renderedId === void 0) {
        return void 0;
      }
      return registerChildId(value, renderedId);
    }, [registerChildId, parent, value, renderedId]);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(CheckboxRootContext.Provider, {
      value: state,
      children: [element, !checked2 && !groupContext && name && !parent && uncheckedValue !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", {
        type: "hidden",
        form,
        name,
        value: uncheckedValue,
        disabled: disabled2
      }), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", {
        ...inputProps,
        suppressHydrationWarning: true
      })]
    });
  });
  if (true) CheckboxRoot.displayName = "CheckboxRoot";

  // node_modules/@base-ui/react/checkbox/indicator/CheckboxIndicator.mjs
  init_define_import_meta_env();
  var React31 = __toESM(require_react_shim(), 1);
  var CheckboxIndicator = /* @__PURE__ */ React31.forwardRef(function CheckboxIndicator2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      keepMounted = false,
      ...elementProps
    } = componentProps;
    const rootState = useCheckboxRootContext();
    const rendered = rootState.checked || rootState.indeterminate;
    const {
      mounted,
      transitionStatus,
      setMounted
    } = useTransitionStatus(rendered);
    const indicatorRef = React31.useRef(null);
    const state = {
      ...rootState,
      transitionStatus
    };
    useOpenChangeComplete({
      batch: true,
      enabled: !rendered,
      open: rendered,
      ref: indicatorRef,
      onComplete() {
        if (!rendered) {
          setMounted(false);
        }
      }
    });
    const baseStateAttributesMapping = getCheckboxStateAttributesMapping(rootState);
    const stateAttributesMapping3 = {
      ...baseStateAttributesMapping,
      ...transitionStatusMapping
    };
    const shouldRender = keepMounted || mounted;
    const element = useRenderElement("span", componentProps, {
      ref: [forwardedRef, indicatorRef],
      state,
      stateAttributesMapping: stateAttributesMapping3,
      props: elementProps
    });
    if (!shouldRender) {
      return null;
    }
    return element;
  });
  if (true) CheckboxIndicator.displayName = "CheckboxIndicator";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/checkbox.js
  var o3 = {
    root: "ciRA68X3w c2caINmtb",
    selection: "crvq7PJLh c1fAD8AXB",
    automation: "ctfAPKPIA cVkGUZ5Kr",
    sm: "cG2PBlchu cWu2LlkAm",
    md: "cxplhNG2p cFFcNJPXU",
    indicator: "cB2c4zMdU",
    icon: "cbac7epuF cQGQHnYGR"
  };
  var s3 = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", {
    "aria-hidden": true,
    className: o3.icon,
    fill: "none",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
      d: "M3.5 8.5 6.5 11.5 12.5 4.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })
  });
  var c4 = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", {
    "aria-hidden": true,
    className: o3.icon,
    fill: "none",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
      d: "M4 8h8",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2"
    })
  });
  var l4 = (e6, t7) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
    ...e6,
    children: t7.indeterminate ? c4 : s3
  });
  var u4 = (0, import_react6.forwardRef)((e6, t7) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(index_parts_exports2.Indicator, {
    className: o3.indicator,
    ...e6,
    ref: t7,
    render: l4
  }));
  u4.displayName = "CheckboxIndicator";
  var d3 = (0, import_react6.createContext)(null);
  var f2 = (e6, t7) => {
    let r8 = (0, import_react6.useContext)(d3);
    return {
      accent: e6 ?? r8?.accent ?? "selection",
      size: t7 ?? r8?.size ?? "md"
    };
  };
  var p = cva(o3.root, { variants: {
    size: {
      sm: o3.sm,
      md: o3.md
    },
    accent: {
      selection: o3.selection,
      automation: o3.automation
    }
  } });
  var m = (0, import_react6.forwardRef)(({ size: e6, accent: t7, ...n6 }, i4) => {
    let o5 = f2(t7, e6);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(index_parts_exports2.Root, {
      className: p(o5),
      ...n6,
      ref: i4
    });
  });
  m.displayName = "CheckboxRoot";
  var h = {
    Root: m,
    Indicator: u4
  };

  // .design-sync/.cache/shadow/@mini-ui/base/dist/input.js
  init_define_import_meta_env();
  var import_react7 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime14 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/input/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/input/Input.mjs
  init_define_import_meta_env();
  var React43 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/field/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/field/index.parts.mjs
  var index_parts_exports3 = {};
  __export(index_parts_exports3, {
    Control: () => FieldControl,
    Description: () => FieldDescription,
    Error: () => FieldError,
    Item: () => FieldItem,
    Label: () => FieldLabel,
    Root: () => FieldRoot,
    Validity: () => FieldValidity
  });
  init_define_import_meta_env();

  // node_modules/@base-ui/react/field/root/FieldRoot.mjs
  init_define_import_meta_env();
  var React36 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs
  init_define_import_meta_env();
  var React32 = __toESM(require_react_shim(), 1);
  var FieldsetRootContext = /* @__PURE__ */ React32.createContext(void 0);
  if (true) FieldsetRootContext.displayName = "FieldsetRootContext";
  function useFieldsetRootContext(optional = false) {
    const context = React32.useContext(FieldsetRootContext);
    if (!context && !optional) {
      throw new Error(true ? "Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>." : formatErrorMessage_default(86));
    }
    return context;
  }

  // node_modules/@base-ui/react/internals/labelable-provider/LabelableProvider.mjs
  init_define_import_meta_env();
  var React33 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime8 = __toESM(require_react_shim(), 1);
  var LabelableProvider = function LabelableProvider2(props) {
    const defaultId = useBaseUiId();
    const [controlIdState, setControlIdState] = React33.useState(defaultId);
    const [labelId, setLabelId] = React33.useState();
    const [messageIds, setMessageIds] = React33.useState([]);
    const controlId = controlIdState === void 0 ? defaultId : controlIdState;
    const registrationsRef = useRefWithInit(() => /* @__PURE__ */ new Map());
    const {
      messageIds: parentMessageIds
    } = useLabelableContext();
    const registerControlId = useStableCallback((source, nextId) => {
      const registrations = registrationsRef.current;
      if (nextId === void 0) {
        registrations.delete(source);
      } else {
        registrations.set(source, nextId);
      }
      setControlIdState((prev) => {
        if (registrations.size === 0) {
          return prev;
        }
        let nextControlId;
        for (const id of registrations.values()) {
          if (id === prev) {
            return prev;
          }
          if (nextControlId === void 0) {
            nextControlId = id;
          }
        }
        return nextControlId;
      });
    });
    const resetControlId = useStableCallback(() => {
      if (registrationsRef.current.size === 0) {
        setControlIdState(defaultId);
      }
    });
    const getDescriptionProps = React33.useCallback((externalProps) => {
      const ids = externalProps["aria-describedby"] ? externalProps["aria-describedby"].split(" ") : [];
      ids.push(...parentMessageIds, ...messageIds);
      return {
        ...externalProps,
        "aria-describedby": Array.from(new Set(ids)).join(" ") || void 0
      };
    }, [parentMessageIds, messageIds]);
    const contextValue = React33.useMemo(() => ({
      controlId,
      registerControlId,
      resetControlId,
      labelId,
      setLabelId,
      messageIds,
      setMessageIds,
      getDescriptionProps
    }), [controlId, registerControlId, resetControlId, labelId, setLabelId, messageIds, setMessageIds, getDescriptionProps]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LabelableContext.Provider, {
      value: contextValue,
      children: props.children
    });
  };
  if (true) LabelableProvider.displayName = "LabelableProvider";

  // node_modules/@base-ui/react/internals/labelable-provider/useLabel.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/shadowDom.mjs
  init_define_import_meta_env();
  function activeElement(doc) {
    let element = doc.activeElement;
    while (element?.shadowRoot?.activeElement != null) {
      element = element.shadowRoot.activeElement;
    }
    return element;
  }
  function getTarget(event) {
    if ("composedPath" in event) {
      return event.composedPath()[0] ?? event.target;
    }
    return event.target;
  }

  // node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs
  init_define_import_meta_env();
  function useRegisteredLabelId(idProp, setLabelId) {
    const id = useBaseUiId(idProp);
    useIsoLayoutEffect(() => {
      setLabelId(id);
      return () => {
        setLabelId((currentId) => currentId === id ? void 0 : currentId);
      };
    }, [id, setLabelId]);
    return id;
  }

  // node_modules/@base-ui/react/internals/labelable-provider/useLabel.mjs
  function useLabel(params = {}) {
    const {
      id: idProp,
      fallbackControlId,
      native = false,
      setLabelId: setLabelIdProp,
      focusControl: focusControlProp
    } = params;
    const {
      controlId: contextControlId,
      setLabelId: setContextLabelId
    } = useLabelableContext();
    const syncLabelId = useStableCallback((nextLabelId) => {
      setContextLabelId(nextLabelId);
      setLabelIdProp?.(nextLabelId);
    });
    const id = useRegisteredLabelId(idProp, syncLabelId);
    const resolvedControlId = contextControlId ?? fallbackControlId;
    function focusControl(event) {
      if (focusControlProp) {
        focusControlProp(event, resolvedControlId);
        return;
      }
      if (!resolvedControlId) {
        return;
      }
      const controlElement = ownerDocument(event.currentTarget).getElementById(resolvedControlId);
      if (isHTMLElement(controlElement)) {
        focusElementWithVisible(controlElement);
      }
    }
    function handleInteraction(event) {
      const target = getTarget(event.nativeEvent);
      if (target?.closest("button,input,select,textarea")) {
        return;
      }
      if (!event.defaultPrevented && event.detail > 1) {
        event.preventDefault();
      }
      if (native) {
        return;
      }
      focusControl(event);
    }
    return native ? {
      id,
      htmlFor: resolvedControlId,
      onMouseDown: handleInteraction
    } : {
      id,
      onClick: handleInteraction,
      onPointerDown(event) {
        event.preventDefault();
      }
    };
  }
  function focusElementWithVisible(element) {
    element.focus({
      // Available from Chrome 144+ (January 2026).
      // Safari and Firefox already support it.
      focusVisible: true
    });
  }

  // node_modules/@base-ui/react/field/root/useFieldValidation.mjs
  init_define_import_meta_env();
  var React34 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/field/utils/getCombinedFieldValidityData.mjs
  init_define_import_meta_env();
  function getCombinedFieldValidityData(validityData, invalid2) {
    return {
      ...validityData,
      state: {
        ...validityData.state,
        valid: !invalid2 && validityData.state.valid
      }
    };
  }

  // node_modules/@base-ui/react/field/root/useFieldValidation.mjs
  var validityKeys = Object.keys(DEFAULT_VALIDITY_STATE);
  function isEligibleInput(input, formElement) {
    if (input.matches(":disabled")) {
      return false;
    }
    if (!formElement || input.form === formElement) {
      return true;
    }
    return input.form === null && !input.hasAttribute("form");
  }
  function findRepresentativeInput(inputs, formElement) {
    let fallback = null;
    for (const input of inputs.keys()) {
      if (!isEligibleInput(input, formElement)) {
        continue;
      }
      if (!input.validity.valid) {
        return input;
      }
      fallback ?? (fallback = input);
    }
    return fallback;
  }
  function makeState(customError) {
    return {
      ...DEFAULT_VALIDITY_STATE,
      valid: !customError,
      customError
    };
  }
  function getNativeErrors(element) {
    return element && element.validationMessage ? [element.validationMessage] : [];
  }
  function useFieldValidation(params) {
    const {
      elementRef,
      formRef
    } = useFormContext();
    const {
      setValidityData,
      validate,
      validityData,
      validationDebounceTime,
      invalid: invalid2,
      markedDirtyRef,
      state,
      shouldValidateOnChange,
      validationMode,
      registeredFieldIdRef
    } = params;
    const {
      controlId,
      getDescriptionProps
    } = useLabelableContext();
    const timeout = useTimeout();
    const inputRef = React34.useRef(null);
    const registeredInputs = useRefWithInit(() => /* @__PURE__ */ new Map()).current;
    const validationCommitIdRef = React34.useRef(0);
    const customValidityRef = React34.useRef(null);
    const registerInput = React34.useCallback((element, registration) => {
      registeredInputs.set(element, registration);
      return () => {
        registeredInputs.delete(element);
      };
    }, [registeredInputs]);
    const getInputControl = useStableCallback(() => {
      const element = findRepresentativeInput(registeredInputs, elementRef.current);
      return element && registeredInputs.get(element)?.controlRef.current || null;
    });
    const commit = useStableCallback(async (value, revalidate = false) => {
      validationCommitIdRef.current += 1;
      const validationCommitId = validationCommitIdRef.current;
      function updateRegisteredFieldValidity(nextValidityData, externalInvalid = invalid2) {
        const fieldId = registeredFieldIdRef.current ?? controlId;
        if (fieldId == null) {
          return;
        }
        const currentFieldData = formRef.current.fields.get(fieldId);
        if (!currentFieldData) {
          return;
        }
        const validityDataWithFormErrors = getCombinedFieldValidityData(nextValidityData, externalInvalid);
        formRef.current.fields.set(fieldId, {
          ...currentFieldData,
          validityData: validityDataWithFormErrors
        });
      }
      function makeValidityData(validityState, errorMessages) {
        const errors = validityState.valid === false ? errorMessages : [];
        return {
          value,
          state: validityState,
          error: errors[0] ?? "",
          errors,
          initialValue: validityData.initialValue
        };
      }
      function setCustomValidity(element2, message) {
        const displaced = element2.validity.customError ? element2.validationMessage : "";
        const ownedMessage = message.replace(/\r\n?/g, "\n");
        element2.setCustomValidity(ownedMessage);
        customValidityRef.current = [element2, ownedMessage, displaced];
      }
      function clearCustomValidity() {
        const record = customValidityRef.current;
        customValidityRef.current = null;
        if (record && (!record[0].willValidate || record[0].validationMessage === record[1])) {
          record[0].setCustomValidity(record[2]);
        }
      }
      function publish(validityState, errorMessages, externalInvalid) {
        const nextValidityData = makeValidityData(validityState, errorMessages);
        updateRegisteredFieldValidity(nextValidityData, externalInvalid);
        setValidityData(nextValidityData);
      }
      function getState(el) {
        const computedState = validityKeys.reduce((acc, key) => {
          acc[key] = el.validity[key];
          return acc;
        }, {});
        let hasOnlyValueMissingError = false;
        for (const key of validityKeys) {
          if (key === "valid") {
            continue;
          }
          if (key === "valueMissing" && computedState[key]) {
            hasOnlyValueMissingError = true;
          } else if (computedState[key]) {
            return computedState;
          }
        }
        if (hasOnlyValueMissingError && !markedDirtyRef.current) {
          computedState.valid = true;
          computedState.valueMissing = false;
        }
        return computedState;
      }
      function resolveRepresentativeInput() {
        return registeredInputs.size > 0 ? findRepresentativeInput(registeredInputs, elementRef.current) : inputRef.current;
      }
      let element = resolveRepresentativeInput();
      function refreshState() {
        element = resolveRepresentativeInput();
        return element?.willValidate ? getState(element) : makeState(false);
      }
      if (revalidate) {
        if (state.valid !== false || !element) {
          return;
        }
        if (!element.validity.valueMissing) {
          clearCustomValidity();
          const currentElement = resolveRepresentativeInput();
          const foreign = currentElement?.validity.customError ? getNativeErrors(currentElement) : [];
          publish(makeState(foreign.length > 0), foreign, false);
          return;
        }
        for (const key of validityKeys) {
          if (key !== "valid" && key !== "valueMissing" && key !== "customError" && element.validity[key]) {
            return;
          }
        }
      }
      timeout.clear();
      clearCustomValidity();
      let nextState = refreshState();
      let validationErrors = getNativeErrors(element);
      const isValidatingOnChange = shouldValidateOnChange();
      if (validationErrors.length === 0 || isValidatingOnChange) {
        const formValues = Array.from(formRef.current.fields.values()).reduce((acc, field) => {
          if (field.name) {
            acc[field.name] = field.getValue();
          }
          return acc;
        }, {});
        const resultOrPromise = validate(value, formValues);
        let result;
        if (typeof resultOrPromise === "object" && resultOrPromise !== null && "then" in resultOrPromise) {
          if (nextState.valid === false) {
            publish(nextState, validationErrors);
          } else if (validationMode === "onSubmit" || !validityData.state.customError) {
            nextState.valid = null;
            publish(nextState, validationErrors);
          }
          result = await resultOrPromise;
          if (validationCommitId !== validationCommitIdRef.current) {
            return;
          }
          nextState = refreshState();
        } else {
          result = resultOrPromise;
        }
        validationErrors = result ? [].concat(result).filter(Boolean) : [];
        if (validationErrors.length > 0) {
          nextState.valid = false;
          nextState.customError = true;
          if (element?.willValidate) {
            setCustomValidity(element, validationErrors.join("\n"));
          }
        } else {
          validationErrors = getNativeErrors(element);
        }
      }
      publish(nextState, validationErrors);
    });
    const change = useStableCallback((value, cancelPending = false) => {
      timeout.clear();
      validationCommitIdRef.current += 1;
      if (cancelPending) {
        return;
      }
      const validateOnChange = shouldValidateOnChange();
      if (validateOnChange && value !== "" && validationDebounceTime) {
        timeout.start(validationDebounceTime, () => {
          commit(value);
        });
      } else {
        commit(value, !validateOnChange);
      }
    });
    const getValidationProps = React34.useCallback((disabled2, externalProps = {}) => mergeProps(getDescriptionProps(externalProps), state.valid === false && !state.disabled && !disabled2 ? {
      "aria-invalid": true
    } : EMPTY_OBJECT), [getDescriptionProps, state.disabled, state.valid]);
    return React34.useMemo(() => ({
      getValidationProps,
      inputRef,
      registeredInputs,
      registerInput,
      getInputControl,
      commit,
      change
    }), [getValidationProps, registeredInputs, registerInput, getInputControl, commit, change]);
  }

  // node_modules/@base-ui/react/internals/field-register-control/useFieldControlRegistration.mjs
  init_define_import_meta_env();
  var React35 = __toESM(require_react_shim(), 1);
  function useFieldControlRegistration(params) {
    const {
      change,
      commit,
      invalid: invalid2,
      markedDirtyRef,
      name,
      setRegisteredFieldName,
      registeredFieldIdRef,
      setValidityData,
      validityData
    } = params;
    const {
      formRef
    } = useFormContext();
    const activeFieldControlSourceRef = React35.useRef(null);
    const registrationRef = React35.useRef(null);
    const initialValueCapturedRef = React35.useRef(false);
    const getValueForForm = useStableCallback(() => {
      const registration = registrationRef.current;
      if (!registration) {
        return void 0;
      }
      if (registration.getValue) {
        return registration.getValue();
      }
      return registration.value;
    });
    function getRegistrationValue(registration) {
      return registration.value === void 0 ? getValueForForm() : registration.value;
    }
    const validate = useStableCallback(() => {
      const registration = registrationRef.current;
      markedDirtyRef.current = true;
      if (!registration) {
        commit(validityData.value);
        return;
      }
      commit(getRegistrationValue(registration));
    });
    function refreshRegistration() {
      const registration = registrationRef.current;
      if (!registration || !registration.id) {
        return;
      }
      formRef.current.fields.set(registration.id, {
        getValue: getValueForForm,
        name: name ?? registration.name,
        controlRef: registration.controlRef,
        validityData: getCombinedFieldValidityData(validityData, invalid2),
        validate
      });
    }
    function deleteRegistration(id = registrationRef.current?.id) {
      if (id) {
        formRef.current.fields.delete(id);
      }
    }
    function captureInitialValue(registration) {
      if (initialValueCapturedRef.current) {
        return;
      }
      initialValueCapturedRef.current = true;
      const initialValue = getRegistrationValue(registration);
      setValidityData((prev) => prev.initialValue === initialValue ? prev : {
        ...prev,
        initialValue
      });
    }
    useIsoLayoutEffect(() => {
      const registration = registrationRef.current;
      if (!registration || !registration.id) {
        return;
      }
      setRegisteredFieldName(name ? void 0 : registration.name);
      formRef.current.fields.set(registration.id, {
        getValue: getValueForForm,
        name: name ?? registration.name,
        controlRef: registration.controlRef,
        validityData: getCombinedFieldValidityData(validityData, invalid2),
        validate
      });
    }, [formRef, getValueForForm, invalid2, name, setRegisteredFieldName, validate, validityData]);
    useIsoLayoutEffect(() => {
      const fields = formRef.current.fields;
      return () => {
        const id = registrationRef.current?.id;
        if (id) {
          fields.delete(id);
        }
      };
    }, [formRef]);
    const register = useStableCallback((source, registration) => {
      if (!registration) {
        if (activeFieldControlSourceRef.current === source) {
          activeFieldControlSourceRef.current = null;
          change(void 0, true);
          deleteRegistration();
          registrationRef.current = null;
          setRegisteredFieldName(void 0);
          registeredFieldIdRef.current = void 0;
        }
        return;
      }
      const previousId = registrationRef.current?.id;
      const previousSource = activeFieldControlSourceRef.current;
      if (previousSource && previousSource !== source) {
        change(void 0, true);
      }
      activeFieldControlSourceRef.current = source;
      registrationRef.current = registration;
      if (!name) {
        setRegisteredFieldName(registration.name);
      }
      registeredFieldIdRef.current = registration.id;
      if (previousId && previousId !== registration.id) {
        deleteRegistration(previousId);
      }
      captureInitialValue(registration);
      refreshRegistration();
    });
    return [validate, register];
  }

  // node_modules/@base-ui/react/field/root/FieldRoot.mjs
  var import_jsx_runtime9 = __toESM(require_react_shim(), 1);
  var FieldRootInner = /* @__PURE__ */ React36.forwardRef(function FieldRootInner2(componentProps, forwardedRef) {
    const {
      errors,
      validationMode: formValidationMode,
      submitCountRef
    } = useFormContext();
    const {
      render,
      className,
      validate: validateProp,
      validationDebounceTime = 0,
      validationMode = formValidationMode,
      name,
      disabled: disabledProp = false,
      invalid: invalidProp,
      dirty: dirtyProp,
      touched: touchedProp,
      actionsRef,
      style,
      ...elementProps
    } = componentProps;
    const disabledFieldset = useFieldsetRootContext(true)?.disabled;
    const validate = useStableCallback(validateProp || (() => null));
    const disabled2 = disabledFieldset || disabledProp;
    const [touchedState, setTouchedUnwrapped] = React36.useState(false);
    const [dirtyState, setDirtyUnwrapped] = React36.useState(false);
    const [filled, setFilled] = React36.useState(false);
    const [focused, setFocused] = React36.useState(false);
    const dirty = dirtyProp ?? dirtyState;
    const touched = touchedProp ?? touchedState;
    const markedDirtyRef = React36.useRef(dirty);
    const registeredFieldIdRef = React36.useRef(void 0);
    const [registeredFieldName, setRegisteredFieldName] = React36.useState();
    const effectiveName = name ?? registeredFieldName;
    useIsoLayoutEffect(() => {
      if (dirtyProp !== void 0) {
        markedDirtyRef.current = dirtyProp;
      }
    }, [dirtyProp]);
    const setDirty = useStableCallback((value) => {
      if (dirtyProp !== void 0) {
        return;
      }
      if (value) {
        markedDirtyRef.current = true;
      }
      setDirtyUnwrapped(value);
    });
    const setTouched = useStableCallback((value) => {
      if (touchedProp !== void 0) {
        return;
      }
      setTouchedUnwrapped(value);
    });
    const shouldValidateOnChange = useStableCallback(() => validationMode === "onChange" || validationMode === "onSubmit" && submitCountRef.current > 0);
    const formError = effectiveName && Object.hasOwn(errors, effectiveName) ? errors[effectiveName] : null;
    const hasFormError = !!(Array.isArray(formError) ? formError.length : formError);
    const invalid2 = invalidProp === true || hasFormError;
    const [validityData, setValidityData] = React36.useState({
      state: DEFAULT_VALIDITY_STATE,
      error: "",
      errors: [],
      value: null,
      initialValue: null
    });
    const valid2 = !invalid2 && (disabled2 ? null : validityData.state.valid);
    const state = React36.useMemo(() => ({
      disabled: disabled2,
      touched,
      dirty,
      valid: valid2,
      filled,
      focused
    }), [disabled2, touched, dirty, valid2, filled, focused]);
    const validation = useFieldValidation({
      setValidityData,
      validate,
      validityData,
      validationDebounceTime,
      invalid: invalid2,
      markedDirtyRef,
      state,
      shouldValidateOnChange,
      validationMode,
      registeredFieldIdRef
    });
    const [validateFieldControl, registerFieldControl] = useFieldControlRegistration({
      change: validation.change,
      commit: validation.commit,
      invalid: invalid2,
      markedDirtyRef,
      name,
      setRegisteredFieldName,
      registeredFieldIdRef,
      setValidityData,
      validityData
    });
    React36.useImperativeHandle(actionsRef, () => ({
      validate: validateFieldControl
    }), [validateFieldControl]);
    const contextValue = React36.useMemo(() => ({
      invalid: invalid2,
      name: effectiveName,
      validityData,
      setValidityData,
      disabled: disabled2,
      setTouched,
      setDirty,
      setFilled,
      setFocused,
      validationMode,
      shouldValidateOnChange,
      state,
      registerFieldControl,
      validation
    }), [invalid2, effectiveName, validityData, disabled2, setTouched, setDirty, setFilled, setFocused, validationMode, shouldValidateOnChange, state, registerFieldControl, validation]);
    const element = useRenderElement("div", componentProps, {
      ref: forwardedRef,
      state,
      props: elementProps,
      stateAttributesMapping: fieldValidityMapping
    });
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FieldRootContext.Provider, {
      value: contextValue,
      children: element
    });
  });
  if (true) FieldRootInner.displayName = "FieldRootInner";
  var FieldRoot = /* @__PURE__ */ React36.forwardRef(function FieldRoot2(componentProps, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(LabelableProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FieldRootInner, {
        ...componentProps,
        ref: forwardedRef
      })
    });
  });
  if (true) FieldRoot.displayName = "FieldRoot";

  // node_modules/@base-ui/react/field/label/FieldLabel.mjs
  init_define_import_meta_env();
  var React37 = __toESM(require_react_shim(), 1);
  var FieldLabel = /* @__PURE__ */ React37.forwardRef(function FieldLabel2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      nativeLabel = true,
      ...elementProps
    } = componentProps;
    const fieldRootContext = useFieldRootContext(false);
    const fieldItemContext = useFieldItemContext();
    const {
      labelId
    } = useLabelableContext();
    const state = {
      ...fieldRootContext.state,
      disabled: fieldRootContext.disabled || fieldItemContext.disabled
    };
    const labelRef = React37.useRef(null);
    const labelProps = useLabel({
      id: labelId ?? idProp,
      native: nativeLabel
    });
    if (true) {
      React37.useEffect(() => {
        if (!labelRef.current) {
          return;
        }
        const isLabelTag = labelRef.current.tagName === "LABEL";
        if (nativeLabel) {
          if (!isLabelTag) {
            const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
            const message = "<Field.Label> expected a <label> element because the `nativeLabel` prop is true. Rendering a non-<label> disables native label association, so `htmlFor` will not work. Use a real <label> in the `render` prop, or set `nativeLabel` to `false`.";
            error(`${message}${ownerStackMessage}`);
          }
        } else if (isLabelTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message = "<Field.Label> expected a non-<label> element because the `nativeLabel` prop is false. Rendering a <label> assumes native label behavior while Base UI treats it as non-native, which can cause unexpected pointer behavior. Use a non-<label> in the `render` prop, or set `nativeLabel` to `true`.";
          error(`${message}${ownerStackMessage}`);
        }
      }, [nativeLabel]);
    }
    const element = useRenderElement("label", componentProps, {
      ref: [forwardedRef, labelRef],
      state,
      props: [labelProps, elementProps],
      stateAttributesMapping: fieldValidityMapping
    });
    return element;
  });
  if (true) FieldLabel.displayName = "FieldLabel";

  // node_modules/@base-ui/react/field/error/FieldError.mjs
  init_define_import_meta_env();
  var React38 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime10 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping2 = {
    ...fieldValidityMapping,
    ...transitionStatusMapping
  };
  var FieldError = /* @__PURE__ */ React38.forwardRef(function FieldError2(componentProps, forwardedRef) {
    const {
      render,
      id: idProp,
      className,
      match,
      style,
      ...elementProps
    } = componentProps;
    const id = useBaseUiId(idProp);
    const {
      validityData,
      state: fieldState,
      name
    } = useFieldRootContext(false);
    const {
      setMessageIds
    } = useLabelableContext();
    const {
      errors
    } = useFormContext();
    const formError = name && Object.hasOwn(errors, name) ? errors[name] : null;
    const hasFormError = !!(Array.isArray(formError) ? formError.length : formError);
    const hasSpecificMatch = typeof match === "string";
    let rendered = false;
    if (match === true) {
      rendered = true;
    } else if (fieldState.disabled) {
      rendered = false;
    } else if (hasSpecificMatch) {
      rendered = Boolean(validityData.state[match]);
    } else {
      rendered = hasFormError || validityData.state.valid === false;
    }
    const {
      mounted,
      transitionStatus,
      setMounted
    } = useTransitionStatus(rendered);
    useIsoLayoutEffect(() => {
      if (!rendered || !id) {
        return void 0;
      }
      setMessageIds((v) => v.concat(id));
      return () => {
        setMessageIds((v) => v.filter((item) => item !== id));
      };
    }, [rendered, id, setMessageIds]);
    const errorRef = React38.useRef(null);
    const [lastRenderedMessage, setLastRenderedMessage] = React38.useState(null);
    const [lastRenderedMessageKey, setLastRenderedMessageKey] = React38.useState(null);
    let error2 = validityData.error;
    if (!hasSpecificMatch && hasFormError) {
      error2 = formError;
    } else if (validityData.errors.length > 1) {
      error2 = validityData.errors;
    }
    let errorMessage = error2;
    if (Array.isArray(error2)) {
      errorMessage = error2.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", {
        children: error2.map((message) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", {
          children: message
        }, message))
      }) : error2[0];
    }
    const errorKey = Array.isArray(error2) ? JSON.stringify(error2) : error2;
    if (rendered && errorKey !== lastRenderedMessageKey) {
      setLastRenderedMessageKey(errorKey);
      setLastRenderedMessage(errorMessage);
    }
    useOpenChangeComplete({
      open: rendered,
      ref: errorRef,
      onComplete() {
        if (!rendered) {
          setMounted(false);
        }
      }
    });
    const state = {
      ...fieldState,
      transitionStatus
    };
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, errorRef],
      state,
      props: [{
        id,
        children: rendered ? errorMessage : lastRenderedMessage
      }, elementProps],
      stateAttributesMapping: stateAttributesMapping2,
      enabled: mounted
    });
    if (!mounted) {
      return null;
    }
    return element;
  });
  if (true) FieldError.displayName = "FieldError";

  // node_modules/@base-ui/react/field/description/FieldDescription.mjs
  init_define_import_meta_env();
  var React39 = __toESM(require_react_shim(), 1);
  var FieldDescription = /* @__PURE__ */ React39.forwardRef(function FieldDescription2(componentProps, forwardedRef) {
    const {
      render,
      id: idProp,
      className,
      style,
      ...elementProps
    } = componentProps;
    const id = useBaseUiId(idProp);
    const fieldRootContext = useFieldRootContext(false);
    const fieldItemContext = useFieldItemContext();
    const {
      setMessageIds
    } = useLabelableContext();
    const state = {
      ...fieldRootContext.state,
      disabled: fieldRootContext.disabled || fieldItemContext.disabled
    };
    useIsoLayoutEffect(() => {
      if (!id) {
        return void 0;
      }
      setMessageIds((v) => v.concat(id));
      return () => {
        setMessageIds((v) => v.filter((item) => item !== id));
      };
    }, [id, setMessageIds]);
    const element = useRenderElement("p", componentProps, {
      ref: forwardedRef,
      state,
      props: [{
        id
      }, elementProps],
      stateAttributesMapping: fieldValidityMapping
    });
    return element;
  });
  if (true) FieldDescription.displayName = "FieldDescription";

  // node_modules/@base-ui/react/field/control/FieldControl.mjs
  init_define_import_meta_env();
  var React40 = __toESM(require_react_shim(), 1);
  var FieldControl = /* @__PURE__ */ React40.forwardRef(function FieldControl2(componentProps, forwardedRef) {
    const {
      render,
      className,
      id: idProp,
      name: nameProp,
      value: valueProp,
      disabled: disabledProp = false,
      onValueChange,
      defaultValue,
      autoFocus = false,
      style,
      ...elementProps
    } = componentProps;
    const {
      state: fieldState,
      name: fieldName,
      disabled: fieldDisabled,
      setTouched,
      setDirty,
      validityData,
      setFocused,
      setFilled,
      validationMode,
      validation
    } = useFieldRootContext();
    const {
      clearErrors,
      elementRef: formElementRef,
      submitCountRef
    } = useFormContext();
    const disabled2 = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const state = {
      ...fieldState,
      disabled: disabled2
    };
    const {
      labelId
    } = useLabelableContext();
    const id = useLabelableId({
      id: idProp
    });
    const [valueUnwrapped] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: "FieldControl",
      state: "value"
    });
    const isControlled = valueProp !== void 0;
    const value = isControlled ? valueUnwrapped : void 0;
    const serializedValue = value == null ? void 0 : String(value);
    const getValueFromInput = useStableCallback(() => validation.inputRef.current?.value);
    useRegisterFieldControl(validation.inputRef, id, serializedValue, getValueFromInput, !disabled2, nameProp);
    useIsoLayoutEffect(() => {
      const currentValue = serializedValue ?? validation.inputRef.current?.value;
      if (currentValue !== void 0) {
        setFilled(currentValue !== "");
      }
    }, [serializedValue, validation.inputRef, setFilled]);
    useValueChanged(serializedValue, () => {
      if (serializedValue === void 0) {
        return;
      }
      clearErrors(name);
      setDirty(serializedValue !== (validityData.initialValue ?? ""));
      validation.change(serializedValue);
    });
    const inputRef = React40.useRef(null);
    const enterValidationTimeout = useTimeout();
    useIsoLayoutEffect(() => {
      if (autoFocus && inputRef.current === activeElement(ownerDocument(inputRef.current))) {
        setFocused(true);
      }
    }, [autoFocus, setFocused]);
    const element = useRenderElement("input", componentProps, {
      ref: [forwardedRef, inputRef],
      state,
      props: [{
        id,
        disabled: disabled2,
        name,
        ref: validation.inputRef,
        "aria-labelledby": labelId,
        autoFocus,
        ...isControlled ? {
          value
        } : {
          defaultValue
        },
        onChange(event) {
          const inputValue = event.currentTarget.value;
          const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
          onValueChange?.(inputValue, details);
          if (isControlled) {
            return;
          }
          setDirty(inputValue !== (validityData.initialValue ?? ""));
          setFilled(inputValue !== "");
          if (!event.nativeEvent.defaultPrevented && !details.isCanceled) {
            clearErrors(name);
            validation.change(inputValue);
          }
        },
        onFocus() {
          setFocused(true);
        },
        onBlur(event) {
          setTouched(true);
          setFocused(false);
          if (validationMode === "onBlur") {
            const inputValue = event.currentTarget.value;
            validation.commit(inputValue);
            if (isControlled) {
              queueMicrotask(() => {
                const nextValue = validation.inputRef.current?.value;
                if (nextValue !== void 0 && nextValue !== inputValue && nextValue !== (validityData.initialValue ?? "")) {
                  validation.commit(nextValue);
                }
              });
            }
          }
        },
        onKeyDown(event) {
          if (event.currentTarget.tagName === "INPUT" && event.key === "Enter") {
            setTouched(true);
            const value2 = event.currentTarget.value;
            const form = event.currentTarget.form;
            if (form && form === formElementRef.current && !event.defaultPrevented) {
              const input = event.currentTarget;
              const submitCount = submitCountRef.current;
              enterValidationTimeout.start(0, () => {
                if (submitCountRef.current === submitCount) {
                  validation.commit(input.value);
                }
              });
            } else {
              validation.commit(value2);
            }
          }
        }
      }, elementProps, (props) => validation.getValidationProps(disabled2, props)],
      stateAttributesMapping: fieldValidityMapping
    });
    return element;
  });
  if (true) FieldControl.displayName = "FieldControl";

  // node_modules/@base-ui/react/field/validity/FieldValidity.mjs
  init_define_import_meta_env();
  var React41 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime11 = __toESM(require_react_shim(), 1);
  var FieldValidity = function FieldValidity2(props) {
    const {
      children
    } = props;
    const {
      validityData,
      invalid: invalid2
    } = useFieldRootContext(false);
    const combinedFieldValidityData = React41.useMemo(() => getCombinedFieldValidityData(validityData, invalid2), [validityData, invalid2]);
    const isInvalid = combinedFieldValidityData.state.valid === false;
    const {
      transitionStatus
    } = useTransitionStatus(isInvalid);
    const fieldValidityState = React41.useMemo(() => {
      return {
        ...combinedFieldValidityData,
        validity: combinedFieldValidityData.state,
        transitionStatus
      };
    }, [combinedFieldValidityData, transitionStatus]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(React41.Fragment, {
      children: children(fieldValidityState)
    });
  };
  if (true) FieldValidity.displayName = "FieldValidity";

  // node_modules/@base-ui/react/field/item/FieldItem.mjs
  init_define_import_meta_env();
  var React42 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime12 = __toESM(require_react_shim(), 1);
  var FieldItem = /* @__PURE__ */ React42.forwardRef(function FieldItem2(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled: disabledProp = false,
      ...elementProps
    } = componentProps;
    const {
      state: fieldState,
      disabled: rootDisabled
    } = useFieldRootContext(false);
    const disabled2 = rootDisabled || disabledProp;
    const state = {
      ...fieldState,
      disabled: disabled2
    };
    const fieldItemContext = React42.useMemo(() => ({
      disabled: disabled2
    }), [disabled2]);
    const element = useRenderElement("div", componentProps, {
      ref: forwardedRef,
      state,
      props: elementProps,
      stateAttributesMapping: fieldValidityMapping
    });
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LabelableProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FieldItemContext.Provider, {
        value: fieldItemContext,
        children: element
      })
    });
  });
  if (true) FieldItem.displayName = "FieldItem";

  // node_modules/@base-ui/react/input/Input.mjs
  var import_jsx_runtime13 = __toESM(require_react_shim(), 1);
  var Input = /* @__PURE__ */ React43.forwardRef(function Input2(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(index_parts_exports3.Control, {
      ref: forwardedRef,
      ...props
    });
  });
  if (true) Input.displayName = "Input";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/input.js
  var o4 = (0, import_react7.createContext)(false);
  var s4 = {
    root: "cW8k1OFpV cPb2uwIV5",
    inGroup: "cnxOX0yUu"
  };
  var c5 = cva("", { variants: { inGroup: {
    true: s4.inGroup,
    false: s4.root
  } } });
  var l5 = (0, import_react7.forwardRef)((e6, t7) => {
    let a4 = (0, import_react7.useContext)(o4);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Input, {
      className: c5({ inGroup: a4 }),
      ...e6,
      ref: t7,
      "data-frame-input": a4 || void 0
    });
  });
  l5.displayName = "Input";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/translations-context.js
  init_define_import_meta_env();
  return __toCommonJS(index_exports);
})();
window.MiniUiBase=MiniUiBase.__dsMainNs?Object.assign({},MiniUiBase,MiniUiBase.__dsMainNs,{__dsMainNs:undefined}):MiniUiBase;
