/* @ds-bundle: {"format":4,"namespace":"MiniUiBase","components":[{"name":"Button"},{"name":"Input"}]} */
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
    } catch (e4) {
      throw err = [e4], e4;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e4) {
      throw mod = 0, e4;
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
      function np(p, k) {
        var o3 = {};
        for (var x in p) if (x !== "children") o3[x] = p[x];
        if (k !== void 0) o3.key = k;
        return o3;
      }
      function jsx(t4, p, k) {
        var c4 = p && p.children;
        return c4 === void 0 ? R.createElement(t4, np(p, k)) : R.createElement(t4, np(p, k), c4);
      }
      function jsxs(t4, p, k) {
        return R.createElement.apply(R, [t4, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t4, p, k, s3) {
        return (s3 ? jsxs : jsx)(t4, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // shim:react-dom-shim
  var require_react_dom_shim = __commonJS({
    "shim:react-dom-shim"(exports, module) {
      init_define_import_meta_env();
      var D = window.ReactDOM;
      var n4 = function() {
      };
      module.exports = Object.assign({ preload: n4, preinit: n4, preconnect: n4, prefetchDNS: n4, preloadModule: n4, preinitModule: n4 }, D);
    }
  });

  // .design-sync/.cache/shadow/@mini-ui/base/dist/index.js
  var index_exports = {};
  __export(index_exports, {
    Button: () => f,
    Input: () => l2,
    TranslationsContext: () => c3,
    useTranslate: () => u2
  });
  init_define_import_meta_env();

  // .design-sync/.cache/shadow/@mini-ui/base/dist/button.js
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime = __toESM(require_react_shim(), 1);

  // node_modules/class-variance-authority/dist/index.mjs
  init_define_import_meta_env();

  // node_modules/clsx/dist/clsx.mjs
  init_define_import_meta_env();
  function r(e4) {
    var t4, f2, n4 = "";
    if ("string" == typeof e4 || "number" == typeof e4) n4 += e4;
    else if ("object" == typeof e4) if (Array.isArray(e4)) {
      var o3 = e4.length;
      for (t4 = 0; t4 < o3; t4++) e4[t4] && (f2 = r(e4[t4])) && (n4 && (n4 += " "), n4 += f2);
    } else for (f2 in e4) e4[f2] && (n4 && (n4 += " "), n4 += f2);
    return n4;
  }
  function clsx() {
    for (var e4, t4, f2 = 0, n4 = "", o3 = arguments.length; f2 < o3; f2++) (e4 = arguments[f2]) && (t4 = r(e4)) && (n4 && (n4 += " "), n4 += t4);
    return n4;
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

  // node_modules/@base-ui/react/button/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/button/Button.mjs
  init_define_import_meta_env();
  var React10 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/use-button/useButton.mjs
  init_define_import_meta_env();
  var React6 = __toESM(require_react_shim(), 1);

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

  // node_modules/@base-ui/utils/useStableCallback.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/safeReact.mjs
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);
  var SafeReact = {
    ...React
  };

  // node_modules/@base-ui/utils/useRefWithInit.mjs
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim(), 1);
  var UNINITIALIZED = {};
  function useRefWithInit(init, initArg) {
    const ref = React2.useRef(UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
      ref.current = init(initArg);
    }
    return ref;
  }

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

  // node_modules/@base-ui/utils/error.mjs
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

  // node_modules/@base-ui/utils/error.mjs
  var error = createLogOnce("error", "Base UI");

  // node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
  init_define_import_meta_env();
  var React3 = __toESM(require_react_shim(), 1);
  var noop = () => {
  };
  var useIsoLayoutEffect = typeof document !== "undefined" ? React3.useLayoutEffect : noop;

  // node_modules/@base-ui/react/merge-props/mergeProps.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/mergeObjects.mjs
  init_define_import_meta_env();
  function mergeObjects(a3, b) {
    if (a3 && !b) {
      return a3;
    }
    if (!a3 && b) {
      return b;
    }
    if (a3 || b) {
      return {
        ...a3,
        ...b
      };
    }
    return void 0;
  }

  // node_modules/@base-ui/react/merge-props/mergeProps.mjs
  var EMPTY_PROPS = {};
  function mergeProps(a3, b, c4, d2, e4) {
    if (!c4 && !d2 && !e4 && !a3) {
      return createInitialMergedProps(b);
    }
    let merged = createInitialMergedProps(a3);
    if (b) {
      merged = mergeInto(merged, b);
    }
    if (c4) {
      merged = mergeInto(merged, c4);
    }
    if (d2) {
      merged = mergeInto(merged, d2);
    }
    if (e4) {
      merged = mergeInto(merged, e4);
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
    for (let i3 = 1; i3 < props.length; i3 += 1) {
      merged = mergeInto(merged, props[i3]);
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

  // node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
  init_define_import_meta_env();
  var React4 = __toESM(require_react_shim(), 1);
  var CompositeRootContext = /* @__PURE__ */ React4.createContext(void 0);
  if (true) CompositeRootContext.displayName = "CompositeRootContext";
  function useCompositeRootContext(optional = false) {
    const context = React4.useContext(CompositeRootContext);
    if (context === void 0 && !optional) {
      throw new Error(true ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
    }
    return context;
  }

  // node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
  init_define_import_meta_env();
  var React5 = __toESM(require_react_shim(), 1);
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
    const props = React5.useMemo(() => {
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
    const elementRef = React6.useRef(null);
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
      React6.useEffect(() => {
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
    const updateDisabled = React6.useCallback(() => {
      const element = elementRef.current;
      if (!isButtonElement(element)) {
        return;
      }
      if (isCompositeItem && disabled2 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
        element.disabled = false;
      }
    }, [disabled2, focusableWhenDisabledProps.disabled, isCompositeItem]);
    useIsoLayoutEffect(updateDisabled, [updateDisabled]);
    const getButtonProps = React6.useCallback((externalProps = {}) => {
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

  // node_modules/@base-ui/react/internals/useRenderElement.mjs
  init_define_import_meta_env();
  var React9 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useMergedRefs.mjs
  init_define_import_meta_env();
  function useMergedRefs(a3, b, c4, d2) {
    const forkRef = useRefWithInit(createForkRef).current;
    if (didChange(forkRef, a3, b, c4, d2)) {
      update(forkRef, [a3, b, c4, d2]);
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
  function didChange(forkRef, a3, b, c4, d2) {
    return forkRef.refs[0] !== a3 || forkRef.refs[1] !== b || forkRef.refs[2] !== c4 || forkRef.refs[3] !== d2;
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
        for (let i3 = 0; i3 < refs.length; i3 += 1) {
          const ref = refs[i3];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const refCleanup = ref(instance);
              if (typeof refCleanup === "function") {
                cleanupCallbacks[i3] = refCleanup;
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
          for (let i3 = 0; i3 < refs.length; i3 += 1) {
            const ref = refs[i3];
            if (ref == null) {
              continue;
            }
            switch (typeof ref) {
              case "function": {
                const cleanupCallback = cleanupCallbacks[i3];
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
  var React8 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/reactVersion.mjs
  init_define_import_meta_env();
  var React7 = __toESM(require_react_shim(), 1);
  var majorVersion = parseInt(React7.version, 10);
  function isReactVersionAtLeast(reactVersionToCheck) {
    return majorVersion >= reactVersionToCheck;
  }

  // node_modules/@base-ui/utils/getReactElementRef.mjs
  function getReactElementRef(element) {
    if (!/* @__PURE__ */ React8.isValidElement(element)) {
      return null;
    }
    const reactElement = element;
    const propsWithRef = reactElement.props;
    return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
  }

  // node_modules/@base-ui/utils/warn.mjs
  init_define_import_meta_env();
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

  // node_modules/@base-ui/react/internals/useRenderElement.mjs
  var import_react = __toESM(require_react_shim(), 1);
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
      stateAttributesMapping: stateAttributesMapping2,
      enabled = true
    } = params;
    const className = enabled ? resolveClassName(classNameProp, state) : void 0;
    const style = enabled ? resolveStyle(styleProp, state) : void 0;
    const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping2) : EMPTY_OBJECT;
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
    const unwrapped = React9.Children.toArray(render)[0];
    return /* @__PURE__ */ React9.isValidElement(unwrapped) ? unwrapped : render;
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
        if (!/* @__PURE__ */ React9.isValidElement(render)) {
          throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
        }
      }
      return /* @__PURE__ */ React9.cloneElement(render, mergedProps);
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
      return /* @__PURE__ */ (0, import_react.createElement)("button", {
        type: "button",
        ...props,
        key: props.key
      });
    }
    if (Tag === "img") {
      return /* @__PURE__ */ (0, import_react.createElement)("img", {
        alt: "",
        ...props,
        key: props.key
      });
    }
    return /* @__PURE__ */ React9.createElement(Tag, props);
  }

  // node_modules/@base-ui/react/button/Button.mjs
  var Button = /* @__PURE__ */ React10.forwardRef(function Button2(componentProps, forwardedRef) {
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
  var c = (0, import_react2.createContext)(null);
  var l = {
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
  var u = () => {
    let e4 = (0, import_react2.useId)().replace(/:/g, "");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
      "aria-hidden": "true",
      className: l.spinner,
      fill: "currentColor",
      focusable: "false",
      viewBox: "0 0 38 24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
          id: `${e4}-left`,
          maskUnits: "userSpaceOnUse",
          x: -10,
          y: -10,
          width: 58,
          height: 44,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
            className: l.sweepLeft,
            x: 19,
            y: -40,
            width: 60,
            height: 104,
            fill: "white"
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
          id: `${e4}-right`,
          maskUnits: "userSpaceOnUse",
          x: -10,
          y: -10,
          width: 58,
          height: 44,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
            className: l.sweepRight,
            x: -41,
            y: -40,
            width: 60,
            height: 104,
            fill: "white"
          })
        })] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
          className: l.letter,
          d: "M13.05 8.52h4.4v9.4h3.4v-9.4h4.4v-2.7h-12.2z"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
          mask: `url(#${e4}-left)`,
          d: "M15.09 22.52c.55.08 1.12.15 1.69.19-.57-.05-1.15-.1-1.69-.19M4.75 14a7 7 0 0 1 3.3-5.6V3.12c-4.2 2-6.9 5.1-6.9 8.7C1.15 17 7.08 21.36 15 22.51 9 21.4 4.75 18 4.75 14"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
          mask: `url(#${e4}-right)`,
          d: "M23.06 1.29l.63.1-.34-.07ZM23.69 1.39c5.72 1.07 9.86 4.41 9.86 8.33 0 .53 0 3.23-3.37 5.73v5.3c6.8-3.18 7-7.75 7-8.73-.03-5.13-5.78-9.4-13.49-10.63"
        })
      ]
    });
  };
  var d = cva(l.root, {
    variants: {
      variant: {
        primary: l.primary,
        secondary: l.secondary,
        tertiary: l.tertiary
      },
      intent: {
        positive: l.positive,
        danger: l.danger,
        neutral: l.neutral,
        automation: l.automation
      },
      size: {
        sm: l.sm,
        md: l.md
      },
      width: {
        auto: null,
        full: l.full
      },
      grouped: {
        true: l.grouped,
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
  var f = (0, import_react2.forwardRef)(({ variant: e4, intent: t4, size: r5, width: o3, loading: l4 = false, children: f2, onClick: p, ...m }, h) => {
    let g = (0, import_react2.useContext)(c) !== null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
      className: d({
        variant: e4,
        intent: t4,
        size: r5,
        width: o3,
        grouped: g
      }),
      ...m,
      "aria-busy": l4 || void 0,
      "data-loading": l4 ? "" : void 0,
      onClick: (e5) => {
        l4 || p?.(e5);
      },
      ref: h,
      children: [f2, l4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(u, {})]
    });
  });
  f.displayName = "Button";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/input.js
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime8 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/input/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/input/Input.mjs
  init_define_import_meta_env();
  var React33 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/field/index.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/field/index.parts.mjs
  var index_parts_exports = {};
  __export(index_parts_exports, {
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
  var React21 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
  init_define_import_meta_env();
  var React11 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/noop.mjs
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

  // node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
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
  var FieldRootContext = /* @__PURE__ */ React11.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
  if (true) FieldRootContext.displayName = "FieldRootContext";
  function useFieldRootContext(optional = true) {
    const context = React11.useContext(FieldRootContext);
    if (context.setValidityData === NOOP && !optional) {
      throw new Error(true ? "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>." : formatErrorMessage_default(28));
    }
    return context;
  }

  // node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs
  init_define_import_meta_env();
  var React12 = __toESM(require_react_shim(), 1);
  var FieldsetRootContext = /* @__PURE__ */ React12.createContext(void 0);
  if (true) FieldsetRootContext.displayName = "FieldsetRootContext";
  function useFieldsetRootContext(optional = false) {
    const context = React12.useContext(FieldsetRootContext);
    if (!context && !optional) {
      throw new Error(true ? "Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>." : formatErrorMessage_default(86));
    }
    return context;
  }

  // node_modules/@base-ui/react/internals/form-context/FormContext.mjs
  init_define_import_meta_env();
  var React13 = __toESM(require_react_shim(), 1);
  var FormContext = /* @__PURE__ */ React13.createContext({
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
    return React13.useContext(FormContext);
  }

  // node_modules/@base-ui/react/internals/labelable-provider/LabelableProvider.mjs
  init_define_import_meta_env();
  var React16 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/useBaseUiId.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/useId.mjs
  init_define_import_meta_env();
  var React14 = __toESM(require_react_shim(), 1);
  var globalId = 0;
  function useGlobalId(idOverride, prefix = "mui") {
    const [defaultId, setDefaultId] = React14.useState(idOverride);
    const id = idOverride || defaultId;
    React14.useEffect(() => {
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

  // node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
  init_define_import_meta_env();
  var React15 = __toESM(require_react_shim(), 1);
  var LabelableContext = /* @__PURE__ */ React15.createContext({
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
    return React15.useContext(LabelableContext);
  }

  // node_modules/@base-ui/react/internals/labelable-provider/LabelableProvider.mjs
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var LabelableProvider = function LabelableProvider2(props) {
    const defaultId = useBaseUiId();
    const [controlIdState, setControlIdState] = React16.useState(defaultId);
    const [labelId, setLabelId] = React16.useState();
    const [messageIds, setMessageIds] = React16.useState([]);
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
    const getDescriptionProps = React16.useCallback((externalProps) => {
      const ids = externalProps["aria-describedby"] ? externalProps["aria-describedby"].split(" ") : [];
      ids.push(...parentMessageIds, ...messageIds);
      return {
        ...externalProps,
        "aria-describedby": Array.from(new Set(ids)).join(" ") || void 0
      };
    }, [parentMessageIds, messageIds]);
    const contextValue = React16.useMemo(() => ({
      controlId,
      registerControlId,
      resetControlId,
      labelId,
      setLabelId,
      messageIds,
      setMessageIds,
      getDescriptionProps
    }), [controlId, registerControlId, resetControlId, labelId, setLabelId, messageIds, setMessageIds, getDescriptionProps]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LabelableContext.Provider, {
      value: contextValue,
      children: props.children
    });
  };
  if (true) LabelableProvider.displayName = "LabelableProvider";

  // node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
  init_define_import_meta_env();
  var React17 = __toESM(require_react_shim(), 1);
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
    const hasRegisteredRef = React17.useRef(false);
    const hadExplicitIdRef = React17.useRef(false);
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

  // node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/react/internals/TransitionStatusDataAttributes.mjs
  init_define_import_meta_env();
  var startingStyle = "data-starting-style";
  var endingStyle = "data-ending-style";

  // node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
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
  var React19 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useTimeout.mjs
  init_define_import_meta_env();

  // node_modules/@base-ui/utils/useOnMount.mjs
  init_define_import_meta_env();
  var React18 = __toESM(require_react_shim(), 1);
  function useOnMount(fn) {
    React18.useEffect(fn, EMPTY_ARRAY);
  }

  // node_modules/@base-ui/utils/useTimeout.mjs
  var EMPTY = 0;
  var Timeout = class _Timeout {
    constructor() {
      __publicField(this, "currentId", EMPTY);
      __publicField(this, "clear", () => {
        if (this.currentId !== EMPTY) {
          clearTimeout(this.currentId);
          this.currentId = EMPTY;
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
        this.currentId = EMPTY;
        fn();
      }, delay);
    }
    isStarted() {
      return this.currentId !== EMPTY;
    }
  };
  function useTimeout() {
    const timeout = useRefWithInit(Timeout.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
  }

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
    const inputRef = React19.useRef(null);
    const registeredInputs = useRefWithInit(() => /* @__PURE__ */ new Map()).current;
    const validationCommitIdRef = React19.useRef(0);
    const customValidityRef = React19.useRef(null);
    const registerInput = React19.useCallback((element, registration) => {
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
    const getValidationProps = React19.useCallback((disabled2, externalProps = {}) => mergeProps(getDescriptionProps(externalProps), state.valid === false && !state.disabled && !disabled2 ? {
      "aria-invalid": true
    } : EMPTY_OBJECT), [getDescriptionProps, state.disabled, state.valid]);
    return React19.useMemo(() => ({
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
  var React20 = __toESM(require_react_shim(), 1);
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
    const activeFieldControlSourceRef = React20.useRef(null);
    const registrationRef = React20.useRef(null);
    const initialValueCapturedRef = React20.useRef(false);
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
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var FieldRootInner = /* @__PURE__ */ React21.forwardRef(function FieldRootInner2(componentProps, forwardedRef) {
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
    const [touchedState, setTouchedUnwrapped] = React21.useState(false);
    const [dirtyState, setDirtyUnwrapped] = React21.useState(false);
    const [filled, setFilled] = React21.useState(false);
    const [focused, setFocused] = React21.useState(false);
    const dirty = dirtyProp ?? dirtyState;
    const touched = touchedProp ?? touchedState;
    const markedDirtyRef = React21.useRef(dirty);
    const registeredFieldIdRef = React21.useRef(void 0);
    const [registeredFieldName, setRegisteredFieldName] = React21.useState();
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
    const [validityData, setValidityData] = React21.useState({
      state: DEFAULT_VALIDITY_STATE,
      error: "",
      errors: [],
      value: null,
      initialValue: null
    });
    const valid2 = !invalid2 && (disabled2 ? null : validityData.state.valid);
    const state = React21.useMemo(() => ({
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
    React21.useImperativeHandle(actionsRef, () => ({
      validate: validateFieldControl
    }), [validateFieldControl]);
    const contextValue = React21.useMemo(() => ({
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FieldRootContext.Provider, {
      value: contextValue,
      children: element
    });
  });
  if (true) FieldRootInner.displayName = "FieldRootInner";
  var FieldRoot = /* @__PURE__ */ React21.forwardRef(function FieldRoot2(componentProps, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LabelableProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FieldRootInner, {
        ...componentProps,
        ref: forwardedRef
      })
    });
  });
  if (true) FieldRoot.displayName = "FieldRoot";

  // node_modules/@base-ui/react/field/label/FieldLabel.mjs
  init_define_import_meta_env();
  var React23 = __toESM(require_react_shim(), 1);

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

  // node_modules/@base-ui/react/field/label/FieldLabel.mjs
  var FieldLabel = /* @__PURE__ */ React23.forwardRef(function FieldLabel2(componentProps, forwardedRef) {
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
    const labelRef = React23.useRef(null);
    const labelProps = useLabel({
      id: labelId ?? idProp,
      native: nativeLabel
    });
    if (true) {
      React23.useEffect(() => {
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
  var React26 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
  init_define_import_meta_env();
  var React24 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
  init_define_import_meta_env();
  var ReactDOM = __toESM(require_react_dom_shim(), 1);

  // node_modules/@base-ui/utils/useAnimationFrame.mjs
  init_define_import_meta_env();
  var EMPTY2 = null;
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
          for (let i3 = 0; i3 < currentCallbacks.length; i3 += 1) {
            currentCallbacks[i3]?.(timestamp);
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
      __publicField(this, "currentId", EMPTY2);
      __publicField(this, "cancel", () => {
        if (this.currentId !== EMPTY2) {
          scheduler.cancel(this.currentId);
          this.currentId = EMPTY2;
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
        this.currentId = EMPTY2;
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
    React24.useEffect(() => {
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

  // node_modules/@base-ui/react/internals/useTransitionStatus.mjs
  init_define_import_meta_env();
  var React25 = __toESM(require_react_shim(), 1);
  function useTransitionStatus(open, enableIdleState = false, deferEndingState = false, animateInitialOpen = false) {
    const [transitionStatus, setTransitionStatus] = React25.useState(open && enableIdleState ? "idle" : void 0);
    const [mounted, setMounted] = React25.useState(open && !animateInitialOpen);
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

  // node_modules/@base-ui/react/field/error/FieldError.mjs
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var stateAttributesMapping = {
    ...fieldValidityMapping,
    ...transitionStatusMapping
  };
  var FieldError = /* @__PURE__ */ React26.forwardRef(function FieldError2(componentProps, forwardedRef) {
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
    const errorRef = React26.useRef(null);
    const [lastRenderedMessage, setLastRenderedMessage] = React26.useState(null);
    const [lastRenderedMessageKey, setLastRenderedMessageKey] = React26.useState(null);
    let error2 = validityData.error;
    if (!hasSpecificMatch && hasFormError) {
      error2 = formError;
    } else if (validityData.errors.length > 1) {
      error2 = validityData.errors;
    }
    let errorMessage = error2;
    if (Array.isArray(error2)) {
      errorMessage = error2.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", {
        children: error2.map((message) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", {
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
      stateAttributesMapping,
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
  var React27 = __toESM(require_react_shim(), 1);
  var FieldDescription = /* @__PURE__ */ React27.forwardRef(function FieldDescription2(componentProps, forwardedRef) {
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
  var React30 = __toESM(require_react_shim(), 1);

  // node_modules/@base-ui/utils/useControlled.mjs
  init_define_import_meta_env();
  var React28 = __toESM(require_react_shim(), 1);
  function useControlled({
    controlled,
    default: defaultProp,
    name,
    state = "value"
  }) {
    const {
      current: isControlled
    } = React28.useRef(controlled !== void 0);
    const [valueState, setValue] = React28.useState(defaultProp);
    const value = isControlled && controlled !== void 0 ? controlled : valueState;
    if (true) {
      React28.useEffect(() => {
        if (isControlled !== (controlled !== void 0)) {
          error([`A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
        }
      }, [state, name, controlled]);
      const {
        current: defaultValue
      } = React28.useRef(defaultProp);
      React28.useEffect(() => {
        if (!isControlled && serializeToDevModeString(defaultValue) !== serializeToDevModeString(defaultProp)) {
          error([`A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
        }
      }, [defaultProp]);
    }
    const setValueIfUncontrolled = React28.useCallback((newValue) => {
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

  // node_modules/@base-ui/react/field/control/FieldControl.mjs
  var FieldControl = /* @__PURE__ */ React30.forwardRef(function FieldControl2(componentProps, forwardedRef) {
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
    const inputRef = React30.useRef(null);
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
  var React31 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  var FieldValidity = function FieldValidity2(props) {
    const {
      children
    } = props;
    const {
      validityData,
      invalid: invalid2
    } = useFieldRootContext(false);
    const combinedFieldValidityData = React31.useMemo(() => getCombinedFieldValidityData(validityData, invalid2), [validityData, invalid2]);
    const isInvalid = combinedFieldValidityData.state.valid === false;
    const {
      transitionStatus
    } = useTransitionStatus(isInvalid);
    const fieldValidityState = React31.useMemo(() => {
      return {
        ...combinedFieldValidityData,
        validity: combinedFieldValidityData.state,
        transitionStatus
      };
    }, [combinedFieldValidityData, transitionStatus]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(React31.Fragment, {
      children: children(fieldValidityState)
    });
  };
  if (true) FieldValidity.displayName = "FieldValidity";

  // node_modules/@base-ui/react/field/item/FieldItem.mjs
  init_define_import_meta_env();
  var React32 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime6 = __toESM(require_react_shim(), 1);
  var FieldItem = /* @__PURE__ */ React32.forwardRef(function FieldItem2(componentProps, forwardedRef) {
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
    const fieldItemContext = React32.useMemo(() => ({
      disabled: disabled2
    }), [disabled2]);
    const element = useRenderElement("div", componentProps, {
      ref: forwardedRef,
      state,
      props: elementProps,
      stateAttributesMapping: fieldValidityMapping
    });
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LabelableProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FieldItemContext.Provider, {
        value: fieldItemContext,
        children: element
      })
    });
  });
  if (true) FieldItem.displayName = "FieldItem";

  // node_modules/@base-ui/react/input/Input.mjs
  var import_jsx_runtime7 = __toESM(require_react_shim(), 1);
  var Input = /* @__PURE__ */ React33.forwardRef(function Input2(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(index_parts_exports.Control, {
      ref: forwardedRef,
      ...props
    });
  });
  if (true) Input.displayName = "Input";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/input.js
  var o = (0, import_react3.createContext)(false);
  var s = {
    root: "cW8k1OFpV cPb2uwIV5",
    inGroup: "cnxOX0yUu"
  };
  var c2 = cva("", { variants: { inGroup: {
    true: s.inGroup,
    false: s.root
  } } });
  var l2 = (0, import_react3.forwardRef)((e4, t4) => {
    let a3 = (0, import_react3.useContext)(o);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Input, {
      className: c2({ inGroup: a3 }),
      ...e4,
      ref: t4,
      "data-frame-input": a3 || void 0
    });
  });
  l2.displayName = "Input";

  // .design-sync/.cache/shadow/@mini-ui/base/dist/translations-context.js
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime9 = __toESM(require_react_shim(), 1);
  var a2 = "___@mini-ui/base";
  var o2 = "___@mini-ui/components";
  var s2 = ((t4, n4, r5) => {
    let i3 = r5?.legacy ? o2 : a2, s3 = window, c4 = s3[i3] ?? /* @__PURE__ */ new Map();
    return s3[i3] = c4, c4.has(t4) || c4.set(t4, (0, import_react4.createContext)(n4)), c4.get(t4);
  })("translations", {});
  var c3 = ({ translations: e4, children: t4 }) => {
    let a3 = (0, import_react4.useContext)(s2), o3 = (0, import_react4.useMemo)(() => ({
      ...a3,
      ...e4
    }), [a3, e4]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(s2.Provider, {
      value: o3,
      children: t4
    });
  };
  c3.displayName = "TranslationsContext";
  var l3 = /\{\{\s*(\w+)\s*\}\}/g;
  var u2 = () => {
    let e4 = (0, import_react4.useContext)(s2);
    return (0, import_react4.useCallback)((t4, n4) => {
      let r5 = e4[t4] ?? t4;
      return n4 === void 0 ? r5 : r5.replaceAll(l3, (e5, t5) => String(n4[t5] ?? e5));
    }, [e4]);
  };
  return __toCommonJS(index_exports);
})();
window.MiniUiBase=MiniUiBase.__dsMainNs?Object.assign({},MiniUiBase,MiniUiBase.__dsMainNs,{__dsMainNs:undefined}):MiniUiBase;
