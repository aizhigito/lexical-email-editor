var jo = Object.defineProperty;
var $o = (t, n, e) => n in t ? jo(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var F = (t, n, e) => $o(t, typeof n != "symbol" ? n + "" : n, e);
import * as At from "react";
import _e, { createContext as Er, useContext as kr, useMemo as we, useLayoutEffect as dt, useEffect as B, useState as j, useRef as ee, useCallback as M, Suspense as hn, forwardRef as Nt, useImperativeHandle as Bo } from "react";
import { createEditor as Do, $getRoot as st, $createParagraphNode as ie, $getSelection as Q, ElementNode as pt, ParagraphNode as wr, $getNodeByKey as it, DRAGOVER_COMMAND as Po, COMMAND_PRIORITY_LOW as ce, DROP_COMMAND as Mo, COMMAND_PRIORITY_HIGH as Tr, $getNearestNodeFromDOMNode as jn, $isTextNode as ue, DecoratorNode as Sr, $applyNodeReplacement as fn, createCommand as Rr, $isNodeSelection as Ge, $createNodeSelection as Wo, $setSelection as lt, $isRangeSelection as re, CLICK_COMMAND as Ar, KEY_DELETE_COMMAND as Uo, KEY_BACKSPACE_COMMAND as zo, KEY_ENTER_COMMAND as Ho, $isDecoratorNode as Lr, $isElementNode as Me, $isRootOrShadowRoot as Nr, $isLineBreakNode as Fr, $copyNode as $n, SELECTION_CHANGE_COMMAND as Ft, FORMAT_ELEMENT_COMMAND as Ko, FORMAT_TEXT_COMMAND as Le, $isParagraphNode as Or, UNDO_COMMAND as Ir, CAN_REDO_COMMAND as rt, CAN_UNDO_COMMAND as ot, COMMAND_PRIORITY_EDITOR as vt, REDO_COMMAND as jr, CLEAR_EDITOR_COMMAND as Go, CLEAR_HISTORY_COMMAND as Yo, $isRootNode as Zo, TextNode as Jo, $isTabNode as $r, $createTabNode as Vo, $createLineBreakNode as Bn, COMMAND_PRIORITY_CRITICAL as Qt, KEY_ESCAPE_COMMAND as qo, PASTE_COMMAND as Xo } from "lexical";
import { addClassNamesToElement as ge, mergeRegister as se, $findMatchingParent as Ae, removeClassNamesFromElement as Qo, isHTMLElement as ea, objectKlassEquals as ta } from "@lexical/utils";
import { createPortal as gt, flushSync as na } from "react-dom";
import { $setBlocksType as Br, $patchStyleText as Dr, $isAtNodeEnd as Dn, $getSelectionStyleValueForProperty as Ht } from "@lexical/selection";
import { $createHeadingNode as Pn, $isHeadingNode as ra, registerRichText as oa, HeadingNode as aa } from "@lexical/rich-text";
import { $isLinkNode as ke, TOGGLE_LINK_COMMAND as Je, $isAutoLinkNode as en, $createLinkNode as ia, LinkNode as Pr, $toggleLink as Kt, AutoLinkNode as sa } from "@lexical/link";
import { $generateHtmlFromNodes as Mn } from "@lexical/html";
var Wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tn = { exports: {} }, et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function la() {
  if (Un) return et;
  Un = 1;
  var t = _e, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, d) {
    var u, b = {}, f = null, y = null;
    d !== void 0 && (f = "" + d), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (u in l) r.call(l, u) && !a.hasOwnProperty(u) && (b[u] = l[u]);
    if (s && s.defaultProps) for (u in l = s.defaultProps, l) b[u] === void 0 && (b[u] = l[u]);
    return { $$typeof: n, type: s, key: f, ref: y, props: b, _owner: o.current };
  }
  return et.Fragment = e, et.jsx = c, et.jsxs = c, et;
}
var tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function ca() {
  return zn || (zn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = _e, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), _ = Symbol.iterator, x = "@@iterator";
    function m(p) {
      if (p === null || typeof p != "object")
        return null;
      var T = _ && p[_] || p[x];
      return typeof T == "function" ? T : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(p) {
      {
        for (var T = arguments.length, R = new Array(T > 1 ? T - 1 : 0), I = 1; I < T; I++)
          R[I - 1] = arguments[I];
        h("error", p, R);
      }
    }
    function h(p, T, R) {
      {
        var I = C.ReactDebugCurrentFrame, G = I.getStackAddendum();
        G !== "" && (T += "%s", R = R.concat([G]));
        var Y = R.map(function(U) {
          return String(U);
        });
        Y.unshift("Warning: " + T), Function.prototype.apply.call(console[p], console, Y);
      }
    }
    var v = !1, k = !1, w = !1, S = !1, N = !1, A;
    A = Symbol.for("react.module.reference");
    function z(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === a || N || p === o || p === d || p === u || S || p === y || v || k || w || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === b || p.$$typeof === c || p.$$typeof === s || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === A || p.getModuleId !== void 0));
    }
    function $(p, T, R) {
      var I = p.displayName;
      if (I)
        return I;
      var G = T.displayName || T.name || "";
      return G !== "" ? R + "(" + G + ")" : R;
    }
    function H(p) {
      return p.displayName || "Context";
    }
    function K(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case s:
            var T = p;
            return H(T) + ".Consumer";
          case c:
            var R = p;
            return H(R._context) + ".Provider";
          case l:
            return $(p, p.render, "ForwardRef");
          case b:
            var I = p.displayName || null;
            return I !== null ? I : K(p.type) || "Memo";
          case f: {
            var G = p, Y = G._payload, U = G._init;
            try {
              return K(U(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, xe = 0, We, Oe, E, L, O, W, P;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function V() {
      {
        if (xe === 0) {
          We = console.log, Oe = console.info, E = console.warn, L = console.error, O = console.group, W = console.groupCollapsed, P = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        xe++;
      }
    }
    function oe() {
      {
        if (xe--, xe === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, p, {
              value: We
            }),
            info: J({}, p, {
              value: Oe
            }),
            warn: J({}, p, {
              value: E
            }),
            error: J({}, p, {
              value: L
            }),
            group: J({}, p, {
              value: O
            }),
            groupCollapsed: J({}, p, {
              value: W
            }),
            groupEnd: J({}, p, {
              value: P
            })
          });
        }
        xe < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = C.ReactCurrentDispatcher, he;
    function le(p, T, R) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (G) {
            var I = G.stack.trim().match(/\n( *(at )?)/);
            he = I && I[1] || "";
          }
        return `
` + he + p;
      }
    }
    var fe = !1, me;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      me = new ve();
    }
    function Te(p, T) {
      if (!p || fe)
        return "";
      {
        var R = me.get(p);
        if (R !== void 0)
          return R;
      }
      var I;
      fe = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = Ce.current, Ce.current = null, V();
      try {
        if (T) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (ae) {
              I = ae;
            }
            Reflect.construct(p, [], U);
          } else {
            try {
              U.call();
            } catch (ae) {
              I = ae;
            }
            p.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            I = ae;
          }
          p();
        }
      } catch (ae) {
        if (ae && I && typeof ae.stack == "string") {
          for (var D = ae.stack.split(`
`), ne = I.stack.split(`
`), q = D.length - 1, X = ne.length - 1; q >= 1 && X >= 0 && D[q] !== ne[X]; )
            X--;
          for (; q >= 1 && X >= 0; q--, X--)
            if (D[q] !== ne[X]) {
              if (q !== 1 || X !== 1)
                do
                  if (q--, X--, X < 0 || D[q] !== ne[X]) {
                    var pe = `
` + D[q].replace(" at new ", " at ");
                    return p.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", p.displayName)), typeof p == "function" && me.set(p, pe), pe;
                  }
                while (q >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        fe = !1, Ce.current = Y, oe(), Error.prepareStackTrace = G;
      }
      var He = p ? p.displayName || p.name : "", Be = He ? le(He) : "";
      return typeof p == "function" && me.set(p, Be), Be;
    }
    function Ie(p, T, R) {
      return Te(p, !1);
    }
    function Bt(p) {
      var T = p.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ue(p, T, R) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return Te(p, Bt(p));
      if (typeof p == "string")
        return le(p);
      switch (p) {
        case d:
          return le("Suspense");
        case u:
          return le("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return Ie(p.render);
          case b:
            return Ue(p.type, T, R);
          case f: {
            var I = p, G = I._payload, Y = I._init;
            try {
              return Ue(Y(G), T, R);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, de = {}, $e = C.ReactDebugCurrentFrame;
    function Ct(p) {
      if (p) {
        var T = p._owner, R = Ue(p.type, p._source, T ? T.type : null);
        $e.setExtraStackFrame(R);
      } else
        $e.setExtraStackFrame(null);
    }
    function go(p, T, R, I, G) {
      {
        var Y = Function.call.bind(je);
        for (var U in p)
          if (Y(p, U)) {
            var D = void 0;
            try {
              if (typeof p[U] != "function") {
                var ne = Error((I || "React class") + ": " + R + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ne.name = "Invariant Violation", ne;
              }
              D = p[U](T, U, I, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              D = q;
            }
            D && !(D instanceof Error) && (Ct(G), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", R, U, typeof D), Ct(null)), D instanceof Error && !(D.message in de) && (de[D.message] = !0, Ct(G), g("Failed %s type: %s", R, D.message), Ct(null));
          }
      }
    }
    var ho = Array.isArray;
    function Dt(p) {
      return ho(p);
    }
    function fo(p) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, R = T && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return R;
      }
    }
    function mo(p) {
      try {
        return kn(p), !1;
      } catch {
        return !0;
      }
    }
    function kn(p) {
      return "" + p;
    }
    function wn(p) {
      if (mo(p))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fo(p)), kn(p);
    }
    var Qe = C.ReactCurrentOwner, bo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Tn, Sn, Pt;
    Pt = {};
    function _o(p) {
      if (je.call(p, "ref")) {
        var T = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function yo(p) {
      if (je.call(p, "key")) {
        var T = Object.getOwnPropertyDescriptor(p, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function xo(p, T) {
      if (typeof p.ref == "string" && Qe.current && T && Qe.current.stateNode !== T) {
        var R = K(Qe.current.type);
        Pt[R] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Qe.current.type), p.ref), Pt[R] = !0);
      }
    }
    function Co(p, T) {
      {
        var R = function() {
          Tn || (Tn = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        R.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function vo(p, T) {
      {
        var R = function() {
          Sn || (Sn = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        R.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var Eo = function(p, T, R, I, G, Y, U) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: p,
        key: T,
        ref: R,
        props: U,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function ko(p, T, R, I, G) {
      {
        var Y, U = {}, D = null, ne = null;
        R !== void 0 && (wn(R), D = "" + R), yo(T) && (wn(T.key), D = "" + T.key), _o(T) && (ne = T.ref, xo(T, G));
        for (Y in T)
          je.call(T, Y) && !bo.hasOwnProperty(Y) && (U[Y] = T[Y]);
        if (p && p.defaultProps) {
          var q = p.defaultProps;
          for (Y in q)
            U[Y] === void 0 && (U[Y] = q[Y]);
        }
        if (D || ne) {
          var X = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          D && Co(U, X), ne && vo(U, X);
        }
        return Eo(p, D, ne, G, I, Qe.current, U);
      }
    }
    var Mt = C.ReactCurrentOwner, Rn = C.ReactDebugCurrentFrame;
    function ze(p) {
      if (p) {
        var T = p._owner, R = Ue(p.type, p._source, T ? T.type : null);
        Rn.setExtraStackFrame(R);
      } else
        Rn.setExtraStackFrame(null);
    }
    var Wt;
    Wt = !1;
    function Ut(p) {
      return typeof p == "object" && p !== null && p.$$typeof === n;
    }
    function An() {
      {
        if (Mt.current) {
          var p = K(Mt.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function wo(p) {
      return "";
    }
    var Ln = {};
    function To(p) {
      {
        var T = An();
        if (!T) {
          var R = typeof p == "string" ? p : p.displayName || p.name;
          R && (T = `

Check the top-level render call using <` + R + ">.");
        }
        return T;
      }
    }
    function Nn(p, T) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var R = To(T);
        if (Ln[R])
          return;
        Ln[R] = !0;
        var I = "";
        p && p._owner && p._owner !== Mt.current && (I = " It was passed a child from " + K(p._owner.type) + "."), ze(p), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, I), ze(null);
      }
    }
    function Fn(p, T) {
      {
        if (typeof p != "object")
          return;
        if (Dt(p))
          for (var R = 0; R < p.length; R++) {
            var I = p[R];
            Ut(I) && Nn(I, T);
          }
        else if (Ut(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var G = m(p);
          if (typeof G == "function" && G !== p.entries)
            for (var Y = G.call(p), U; !(U = Y.next()).done; )
              Ut(U.value) && Nn(U.value, T);
        }
      }
    }
    function So(p) {
      {
        var T = p.type;
        if (T == null || typeof T == "string")
          return;
        var R;
        if (typeof T == "function")
          R = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === b))
          R = T.propTypes;
        else
          return;
        if (R) {
          var I = K(T);
          go(R, p.props, "prop", I, p);
        } else if (T.PropTypes !== void 0 && !Wt) {
          Wt = !0;
          var G = K(T);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ro(p) {
      {
        for (var T = Object.keys(p.props), R = 0; R < T.length; R++) {
          var I = T[R];
          if (I !== "children" && I !== "key") {
            ze(p), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), ze(null);
            break;
          }
        }
        p.ref !== null && (ze(p), g("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    var On = {};
    function In(p, T, R, I, G, Y) {
      {
        var U = z(p);
        if (!U) {
          var D = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ne = wo();
          ne ? D += ne : D += An();
          var q;
          p === null ? q = "null" : Dt(p) ? q = "array" : p !== void 0 && p.$$typeof === n ? (q = "<" + (K(p.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : q = typeof p, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, D);
        }
        var X = ko(p, T, R, G, Y);
        if (X == null)
          return X;
        if (U) {
          var pe = T.children;
          if (pe !== void 0)
            if (I)
              if (Dt(pe)) {
                for (var He = 0; He < pe.length; He++)
                  Fn(pe[He], p);
                Object.freeze && Object.freeze(pe);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fn(pe, p);
        }
        if (je.call(T, "key")) {
          var Be = K(p), ae = Object.keys(T).filter(function(Io) {
            return Io !== "key";
          }), zt = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!On[Be + zt]) {
            var Oo = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zt, Be, Oo, Be), On[Be + zt] = !0;
          }
        }
        return p === r ? Ro(X) : So(X), X;
      }
    }
    function Ao(p, T, R) {
      return In(p, T, R, !0);
    }
    function Lo(p, T, R) {
      return In(p, T, R, !1);
    }
    var No = Lo, Fo = Ao;
    tt.Fragment = r, tt.jsx = No, tt.jsxs = Fo;
  }()), tt;
}
process.env.NODE_ENV === "production" ? tn.exports = la() : tn.exports = ca();
var i = tn.exports;
function ua(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var da = ua(function(t) {
  const n = new URLSearchParams();
  n.append("code", t);
  for (let e = 1; e < arguments.length; e++) n.append("v", arguments[e]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${n} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const Mr = Er(null);
function pa(t, n) {
  let e = null;
  return { getTheme: function() {
    return n ?? (e != null ? e.getTheme() : null);
  } };
}
function ye() {
  const t = kr(Mr);
  return t == null && da(8), t;
}
const Wr = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, ga = Wr ? dt : B, Et = { tag: "history-merge" };
function ha({ initialConfig: t, children: n }) {
  const e = we(() => {
    const { theme: r, namespace: o, nodes: a, onError: c, editorState: s, html: l } = t, d = pa(null, r), u = Do({ editable: t.editable, html: l, namespace: o, nodes: a, onError: (b) => c(b, u), theme: r });
    return function(b, f) {
      if (f !== null) {
        if (f === void 0) b.update(() => {
          const y = st();
          if (y.isEmpty()) {
            const _ = ie();
            y.append(_);
            const x = Wr ? document.activeElement : null;
            (Q() !== null || x !== null && x === b.getRootElement()) && _.select();
          }
        }, Et);
        else if (f !== null) switch (typeof f) {
          case "string": {
            const y = b.parseEditorState(f);
            b.setEditorState(y, Et);
            break;
          }
          case "object":
            b.setEditorState(f, Et);
            break;
          case "function":
            b.update(() => {
              st().isEmpty() && f(b);
            }, Et);
        }
      }
    }(u, s), [u, d];
  }, []);
  return ga(() => {
    const r = t.editable, [o] = e;
    o.setEditable(r === void 0 || r);
  }, []), i.jsx(Mr.Provider, { value: e, children: n });
}
const Ur = 600, zr = "#000000", Hr = 16, Kr = "transparent", Gr = "Arial, sans-serif", Yr = 1.5, Zr = "center", Jr = "transparent", Ne = 0, kt = 0, wt = "#000000", fa = 16, Ye = 8, Ze = 72, ma = [
  {
    label: ["100%"],
    value: "1fr"
  },
  {
    label: ["50%", "50%"],
    value: "1fr 1fr"
  },
  {
    label: ["33%", "33%", "33%"],
    value: "1fr 1fr 1fr"
  },
  {
    label: ["25%", "75%"],
    value: "1fr 3fr"
  },
  {
    label: ["75%", "25%"],
    value: "3fr 1fr"
  },
  {
    label: ["25%", "50%", "25%"],
    value: "1fr 2fr 1fr"
  },
  {
    label: ["25%", "25%", "25%", "25%"],
    value: "1fr 1fr 1fr 1fr"
  }
], ba = {
  "custom-paragraph": "Paragraph",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  "image-block": "Image",
  "button-link-block": "Button"
}, _a = ["custom-paragraph", "h1", "h2", "h3"], ya = '{"root":{"children":[{"children":[{"children":[{"children":[{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"custom-paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":null,"format":"","indent":0,"type":"layout-item","version":1,"backgroundColor":"transparent","paddingLeft":0,"paddingRight":0,"paddingTop":0,"paddingBottom":0,"borderLeftWidth":0,"borderLeftColor":"#000000","borderRightWidth":0,"borderRightColor":"#000000","borderTopWidth":0,"borderTopColor":"#000000","borderBottomWidth":0,"borderBottomColor":"#000000"}],"direction":null,"format":"","indent":0,"type":"layout-container","version":1,"templateColumns":"1fr"}],"direction":null,"format":"","indent":0,"type":"email-template-block","version":1,"backgroundColor":"transparent","paddingLeft":0,"paddingRight":0,"paddingTop":0,"paddingBottom":0}],"direction":null,"format":"","indent":0,"type":"email-template-root","version":1,"layoutWidth":700,"color":"#000000","fontSize":17,"backgroundColor":"#ffffff","fontFamily":"Arial, sans-serif","lineHeight":1.5,"alignItems":"center"}],"direction":null,"format":"","indent":0,"type":"root","version":1}}', xa = {
  mso: "mso",
  ie: "IE",
  oneOf: "(mso)|(IE)",
  notOneOf: "(!mso)&(!IE)"
};
function Hn(t) {
  if (!t.dataTransfer)
    return [!1, []];
  const n = Array.from(t.dataTransfer.files);
  return [n.length > 0, n];
}
const Z = (t, n = {}, e = {}) => {
  const r = document.createElement(t);
  return Object.entries(n).forEach(([o, a]) => {
    r.setAttribute(o, a);
  }), Object.assign(r.style, e), r;
}, Fe = ({ comment: t, condition: n }) => n ? document.createComment(`[if ${xa[n]}]>${t}<![endif]`) : document.createComment(t), Ca = (t, n) => {
  const e = t.split(" "), r = e.reduce((o, a) => a.endsWith("fr") ? o + parseFloat(a) : o, 0);
  return e.map((o) => {
    const a = parseFloat(o) / r * n;
    return [a, Math.round(a / n * 100)];
  });
};
class ht extends pt {
  constructor(e, r) {
    super(r);
    F(this, "__templateColumns");
    this.__templateColumns = e;
  }
  static getType() {
    return "layout-container";
  }
  static clone(e) {
    return new ht(e.__templateColumns, e.__key);
  }
  getState() {
    return {
      templateColumns: this.getLatest().__templateColumns
    };
  }
  getTemplateColumns() {
    return this.getLatest().__templateColumns;
  }
  canBeEmpty() {
    return !1;
  }
  createDOM(e) {
    const r = document.createElement("div");
    return r.style.gridTemplateColumns = this.__templateColumns, ge(r, e.theme.layoutContainer), r;
  }
  updateDOM(e, r) {
    return e.__templateColumns !== this.__templateColumns && (r.style.gridTemplateColumns = this.__templateColumns), !1;
  }
  static importDOM() {
    return {};
  }
  static importJSON(e) {
    return mn(e.templateColumns);
  }
  exportDOM() {
    var s;
    const e = (s = this.getParent()) == null ? void 0 : s.getParent();
    if (!e)
      return { element: document.createDocumentFragment() };
    const r = document.createElement("div"), o = Ca(this.__templateColumns, e.__layoutWidth), a = [
      {
        comment: `<table width="100%" height="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="${e.__alignItems}"><table cellpadding="0" cellspacing="0" border="0" style="width:${e.__layoutWidth}px;"><tr style="background-color: transparent;">`,
        condition: "oneOf"
      },
      {
        comment: "</tr></table></td></tr></table>",
        condition: "oneOf"
      }
    ], c = Z(
      "div",
      {},
      {
        borderCollapse: "collapse",
        display: "table",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent"
      }
    );
    return c.append(Fe(a[0])), {
      after: (l) => {
        if (l instanceof HTMLElement) {
          const d = this.getChildren();
          Array.from(l.children).forEach((b, f) => {
            const y = d[f], _ = o[f][0] - y.__borderRight - y.__borderLeft;
            c.append(Fe(
              {
                comment: `<td align="center" width="${_}" style="width: ${_}px;padding: ${y.__paddingTop}px ${y.__paddingRight}px ${y.__paddingBottom}px ${y.__paddingLeft}px;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">`,
                condition: "oneOf"
              }
            ));
            const x = Z(
              "div",
              {
                class: `layout-item layout-item-${o[f][1]}`
              },
              {
                display: "table-cell",
                maxWidth: "320px",
                minWidth: `${o[f][0]}px`,
                verticalAlign: "top"
              }
            );
            x.append(b), c.append(x), c.append(Fe(
              {
                comment: "</td>",
                condition: "oneOf"
              }
            ));
          });
        }
        return c.append(Fe(a[1])), c;
      },
      element: r
    };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      templateColumns: this.__templateColumns,
      type: "layout-container",
      version: 1
    };
  }
  setStyle() {
    return this;
  }
  setTemplateColumns(e) {
    this.getWritable().__templateColumns = e;
  }
}
function mn(t) {
  return new ht(t);
}
function nn(t) {
  return t instanceof ht;
}
class Vr extends pt {
  constructor(e = Jr, r = Ne, o = Ne, a = Ne, c = Ne, s) {
    super(s);
    F(this, "__backgroundColor");
    F(this, "__paddingLeft");
    F(this, "__paddingRight");
    F(this, "__paddingTop");
    F(this, "__paddingBottom");
    this.__backgroundColor = e, this.__paddingLeft = r, this.__paddingRight = o, this.__paddingTop = a, this.__paddingBottom = c;
  }
  getState() {
    const e = this.getLatest();
    return {
      backgroundColor: e.__backgroundColor,
      paddingLeft: e.__paddingLeft,
      paddingRight: e.__paddingRight,
      paddingTop: e.__paddingTop,
      paddingBottom: e.__paddingBottom
    };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      backgroundColor: this.__backgroundColor,
      paddingLeft: this.__paddingLeft,
      paddingRight: this.__paddingRight,
      paddingTop: this.__paddingTop,
      paddingBottom: this.__paddingBottom
    };
  }
  updateDOM(e, r) {
    return e.__backgroundColor !== this.__backgroundColor && (r.style.backgroundColor = this.__backgroundColor), (e.__paddingLeft !== this.__paddingLeft || e.__paddingRight !== this.__paddingRight || e.__paddingTop !== this.__paddingTop || e.__paddingBottom !== this.__paddingBottom) && (r.style.padding = `${this.__paddingTop}px ${this.__paddingRight}px ${this.__paddingBottom}px ${this.__paddingLeft}px`), e.__key !== this.__key && r.setAttribute("data-key", this.__key), !1;
  }
  setBackgroundColor(e) {
    const r = this.getWritable();
    return r.__backgroundColor = e, this;
  }
  setPaddingLeft(e) {
    const r = this.getWritable();
    return r.__paddingLeft = e, this;
  }
  setPaddingRight(e) {
    const r = this.getWritable();
    return r.__paddingRight = e, this;
  }
  setPaddingTop(e) {
    const r = this.getWritable();
    return r.__paddingTop = e, this;
  }
  setPaddingBottom(e) {
    const r = this.getWritable();
    return r.__paddingBottom = e, this;
  }
  setPadding(e) {
    const r = this.getWritable();
    return r.__paddingTop = e[0], r.__paddingRight = e[1], r.__paddingBottom = e[2], r.__paddingLeft = e[3], this;
  }
}
class ft extends Vr {
  constructor(e = Jr, r = Ne, o = Ne, a = Ne, c = Ne, s = kt, l = wt, d = kt, u = wt, b = kt, f = wt, y = kt, _ = wt, x) {
    super(e, r, o, a, c, x);
    F(this, "__borderLeft");
    F(this, "__borderLeftColor");
    F(this, "__borderRight");
    F(this, "__borderRightColor");
    F(this, "__borderTop");
    F(this, "__borderTopColor");
    F(this, "__borderBottom");
    F(this, "__borderBottomColor");
    this.__borderLeft = s, this.__borderLeftColor = l, this.__borderRight = d, this.__borderRightColor = u, this.__borderTop = b, this.__borderTopColor = f, this.__borderBottom = y, this.__borderBottomColor = _;
  }
  static getType() {
    return "layout-item";
  }
  static clone(e) {
    return new ft(
      e.__backgroundColor,
      e.__paddingLeft,
      e.__paddingRight,
      e.__paddingTop,
      e.__paddingBottom,
      e.__borderLeft,
      e.__borderLeftColor,
      e.__borderRight,
      e.__borderRightColor,
      e.__borderTop,
      e.__borderTopColor,
      e.__borderBottom,
      e.__borderBottomColor,
      e.__key
    );
  }
  getState() {
    const e = this.getLatest();
    return {
      ...super.getState(),
      borderLeftWidth: e.__borderLeft,
      borderLeftColor: e.__borderLeftColor,
      borderRightWidth: e.__borderRight,
      borderRightColor: e.__borderRightColor,
      borderTopWidth: e.__borderTop,
      borderTopColor: e.__borderTopColor,
      borderBottomWidth: e.__borderBottom,
      borderBottomColor: e.__borderBottomColor
    };
  }
  createDOM(e) {
    const r = document.createElement("div");
    return r.setAttribute("data-layout-item", "true"), r.setAttribute("data-key", this.__key), r.style.backgroundColor = this.__backgroundColor, r.style.borderLeft = `${this.__borderLeft}px solid ${this.__borderLeftColor}`, r.style.borderRight = `${this.__borderRight}px solid ${this.__borderRightColor}`, r.style.borderTop = `${this.__borderTop}px solid ${this.__borderTopColor}`, r.style.borderBottom = `${this.__borderBottom}px solid ${this.__borderBottomColor}`, r.style.paddingLeft = `${this.__paddingLeft}px`, r.style.paddingRight = `${this.__paddingRight}px`, r.style.paddingTop = `${this.__paddingTop}px`, r.style.paddingBottom = `${this.__paddingBottom}px`, ge(r, e.theme.layoutItem), r;
  }
  updateDOM(e, r) {
    const o = super.updateDOM(e, r);
    return this.__key !== e.__key && r.setAttribute("data-key", this.__key), (e.__borderLeft !== this.__borderLeft || e.__borderLeftColor !== this.__borderLeftColor || e.__borderRight !== this.__borderRight || e.__borderRightColor !== this.__borderRightColor || e.__borderTop !== this.__borderTop || e.__borderTopColor !== this.__borderTopColor || e.__borderBottom !== this.__borderBottom || e.__borderBottomColor !== this.__borderBottomColor) && (r.style.backgroundColor = this.__backgroundColor, r.style.borderLeft = `${this.__borderLeft}px solid ${this.__borderLeftColor}`, r.style.borderRight = `${this.__borderRight}px solid ${this.__borderRightColor}`, r.style.borderTop = `${this.__borderTop}px solid ${this.__borderTopColor}`, r.style.borderBottom = `${this.__borderBottom}px solid ${this.__borderBottomColor}`), o;
  }
  static importDOM() {
    return {};
  }
  static importJSON(e) {
    const r = Ot(e);
    return r.setFormat(e.format), r;
  }
  isShadowRoot() {
    return !0;
  }
  canBeEmpty() {
    return !1;
  }
  exportDOM() {
    const e = document.createElement("div"), r = document.createComment("[if (!mso)&(!IE)]><!"), o = document.createComment("<![endif]"), a = Z(
      "div",
      {},
      {
        height: "100%",
        width: "100%!important",
        borderRadius: "0",
        "-webkit-border-radius": "0",
        "-moz-border-radius": "0",
        backgroundColor: this.__backgroundColor
      }
    ), c = Z(
      "div",
      {},
      {
        boxSizing: "border-box",
        height: "100%",
        padding: `${this.__paddingTop}px ${this.__paddingRight}px ${this.__paddingBottom}px ${this.__paddingLeft}px`,
        borderLeft: `${this.__borderLeft}px solid ${this.__borderLeftColor}`,
        borderRight: `${this.__borderRight}px solid ${this.__borderRightColor}`,
        borderTop: `${this.__borderTop}px solid ${this.__borderTopColor}`,
        borderBottom: `${this.__borderBottom}px solid ${this.__borderBottomColor}`,
        borderRadius: "0",
        "-webkit-border-radius": "0",
        "-moz-border-radius": "0"
      }
    );
    a.append(r.cloneNode()), c.append(o.cloneNode());
    const s = Z(
      "table",
      {
        role: "presentation",
        cellpadding: "0",
        cellspacing: "0",
        border: "0",
        width: "100%",
        height: "100%"
      }
    ), l = Z("tr"), d = Z(
      "td",
      {
        height: "100%",
        width: "100%",
        align: "left"
      },
      {
        overflowWrap: "break-word",
        wordWrap: "break-word",
        padding: "0"
      }
    );
    return {
      after: (u) => (l.append(d), s.append(l), c.appendChild(s), a.append(c), u instanceof HTMLElement && Array.from(u.children).forEach((f) => {
        d.append(f);
      }), c.append(r.cloneNode()), a.append(o.cloneNode()), a),
      element: e
    };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      borderLeftWidth: this.__borderLeft,
      borderLeftColor: this.__borderLeftColor,
      borderRightWidth: this.__borderRight,
      borderRightColor: this.__borderRightColor,
      borderTopWidth: this.__borderTop,
      borderTopColor: this.__borderTopColor,
      borderBottomWidth: this.__borderBottom,
      borderBottomColor: this.__borderBottomColor,
      type: "layout-item"
    };
  }
  setBorder(e, r, o, a, c, s, l, d) {
    const u = this.getWritable();
    u.__borderTop = e, u.__borderTopColor = r, u.__borderRight = o, u.__borderRightColor = a, u.__borderBottom = c, u.__borderBottomColor = s, u.__borderLeft = l, u.__borderLeftColor = d;
  }
}
function Ot(t = {}) {
  const {
    backgroundColor: n,
    paddingLeft: e,
    paddingRight: r,
    paddingTop: o,
    paddingBottom: a,
    borderLeftWidth: c,
    borderLeftColor: s,
    borderRightWidth: l,
    borderRightColor: d,
    borderTopWidth: u,
    borderTopColor: b,
    borderBottomWidth: f,
    borderBottomColor: y
  } = t;
  return new ft(
    n,
    e,
    r,
    o,
    a,
    c,
    s,
    l,
    d,
    u,
    b,
    f,
    y
  );
}
function qr(t) {
  return t instanceof ft;
}
class ct extends wr {
  static getType() {
    return "custom-paragraph";
  }
  static clone(n) {
    return new ct(n.__key);
  }
  static importJSON(n) {
    const e = bn();
    return e.setFormat(n.format), e.setIndent(n.indent), e.setDirection(n.direction), e.setTextFormat(n.textFormat), e;
  }
  exportDOM(n) {
    const { element: e, after: r } = super.exportDOM(n);
    return e instanceof HTMLElement && (e.style.padding = "0px", e.style.margin = "0px"), this.isEmpty() && (e != null && e.firstChild) && (e == null || e.replaceChild(document.createTextNode(" "), e.firstChild)), { element: e, after: r };
  }
  exportJSON() {
    return { ...super.exportJSON(), type: "custom-paragraph" };
  }
}
function bn() {
  return new ct();
}
class mt extends Vr {
  static getType() {
    return "email-template-block";
  }
  static clone(n) {
    return new mt(
      n.__backgroundColor,
      n.__paddingLeft,
      n.__paddingRight,
      n.__paddingTop,
      n.__paddingBottom,
      n.__key
    );
  }
  canInsertTextAfter() {
    return !1;
  }
  canInsertTextBefore() {
    return !1;
  }
  isShadowRoot() {
    return !0;
  }
  createDOM(n) {
    const e = document.createElement("div");
    return e.setAttribute("data-email-template-block", "true"), e.setAttribute("data-key", this.__key), e.style.backgroundColor = this.__backgroundColor, e.style.padding = `${this.__paddingTop}px ${this.__paddingRight}px ${this.__paddingBottom}px ${this.__paddingLeft}px`, ge(e, n.theme.emailTemplateBlock), e;
  }
  append(...n) {
    if (n.length > 1)
      throw new Error("EmailTemplateBlockNode can only have one child");
    for (let e = 0; e < n.length; e++) {
      const r = n[e];
      if (!nn(r))
        throw new Error("EmailTemplateBlockNode can only have LayoutContainerNode as children");
    }
    return super.append(...n);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "email-template-block"
    };
  }
  exportDOM() {
    const n = this.getParent();
    if (!n)
      throw new Error("EmailTemplateBlockNode must have EmailTemplateRootNode as parent");
    const e = document.createElement("div"), r = Z(
      "div",
      {
        class: "et-block-container"
      },
      {
        backgroundColor: this.__backgroundColor,
        paddingLeft: `${this.__paddingLeft}px`,
        paddingRight: `${this.__paddingRight}px`,
        paddingTop: `${this.__paddingTop}px`,
        paddingBottom: `${this.__paddingBottom}px`
      }
    ), o = Z(
      "div",
      {
        class: "et-block-content"
      },
      {
        minWidth: "320px",
        maxWidth: `${n.getLayoutWidth()}px`,
        overflowWrap: "break-word",
        wordWrap: "break-word",
        wordBreak: "break-word",
        backgroundColor: "transparent",
        ...n.__alignItems === "center" ? { margin: "0 auto" } : { margin: "0 auto 0 0" }
      }
    );
    return r.append(o), {
      after: (a) => (a instanceof HTMLElement && o.append(...a.childNodes), r),
      element: e
    };
  }
  static importDOM() {
    return {};
  }
  static importJSON(n) {
    const e = rn(n);
    return e.setFormat(n.format), e;
  }
  setStyle() {
    return this;
  }
  remove(n) {
    const e = this.getParent();
    if (super.remove(n), e && e.isEmpty()) {
      const r = rn(), o = mn("1fr"), a = Ot(), c = bn();
      a.append(c), o.append(a), r.append(o), e.append(r);
    }
  }
}
function rn(t = {}) {
  const {
    backgroundColor: n,
    paddingLeft: e,
    paddingRight: r,
    paddingTop: o,
    paddingBottom: a
  } = t;
  return new mt(
    n,
    e,
    r,
    o,
    a
  );
}
function _n(t) {
  return t instanceof mt;
}
class Xr {
  constructor(n, e) {
    F(this, "_x");
    F(this, "_y");
    this._x = n, this._y = e;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  equals({ x: n, y: e }) {
    return this.x === n && this.y === e;
  }
  calcDeltaXTo({ x: n }) {
    return this.x - n;
  }
  calcDeltaYTo({ y: n }) {
    return this.y - n;
  }
  calcHorizontalDistanceTo(n) {
    return Math.abs(this.calcDeltaXTo(n));
  }
  calcVerticalDistance(n) {
    return Math.abs(this.calcDeltaYTo(n));
  }
  calcDistanceTo(n) {
    return Math.sqrt(
      Math.pow(this.calcDeltaXTo(n), 2) + Math.pow(this.calcDeltaYTo(n), 2)
    );
  }
}
function va(t) {
  return t instanceof Xr;
}
class Re {
  constructor(n, e, r, o) {
    F(this, "_left");
    F(this, "_top");
    F(this, "_right");
    F(this, "_bottom");
    const [a, c] = e <= o ? [e, o] : [o, e], [s, l] = n <= r ? [n, r] : [r, n];
    this._top = a, this._right = l, this._left = s, this._bottom = c;
  }
  get top() {
    return this._top;
  }
  get right() {
    return this._right;
  }
  get bottom() {
    return this._bottom;
  }
  get left() {
    return this._left;
  }
  get width() {
    return Math.abs(this._left - this._right);
  }
  get height() {
    return Math.abs(this._bottom - this._top);
  }
  equals({ top: n, left: e, bottom: r, right: o }) {
    return n === this._top && r === this._bottom && e === this._left && o === this._right;
  }
  contains(n) {
    if (va(n)) {
      const { x: e, y: r } = n, o = r < this._top, a = r > this._bottom, c = e < this._left, s = e > this._right;
      return {
        reason: {
          isOnBottomSide: a,
          isOnLeftSide: c,
          isOnRightSide: s,
          isOnTopSide: o
        },
        result: !o && !a && !c && !s
      };
    } else {
      const { top: e, left: r, bottom: o, right: a } = n;
      return e >= this._top && e <= this._bottom && o >= this._top && o <= this._bottom && r >= this._left && r <= this._right && a >= this._left && a <= this._right;
    }
  }
  intersectsWith(n) {
    const { left: e, top: r, width: o, height: a } = n, { left: c, top: s, width: l, height: d } = this, u = e + o >= c + l ? e + o : c + l, b = r + a >= s + d ? r + a : s + d, f = e <= c ? e : c, y = r <= s ? r : s;
    return u - f <= o + l && b - y <= a + d;
  }
  generateNewRect({
    left: n = this.left,
    top: e = this.top,
    right: r = this.right,
    bottom: o = this.bottom
  }) {
    return new Re(n, e, r, o);
  }
  static fromLTRB(n, e, r, o) {
    return new Re(n, e, r, o);
  }
  static fromLWTH(n, e, r, o) {
    return new Re(n, r, n + e, r + o);
  }
  static fromPoints(n, e) {
    const { y: r, x: o } = n, { y: a, x: c } = e;
    return Re.fromLTRB(o, r, c, a);
  }
  static fromDOM(n, e = !1) {
    if (e) {
      let { top: s, left: l, width: d, height: u } = n.getBoundingClientRect();
      const b = parseFloat(window.getComputedStyle(n, ":before").getPropertyValue("width")), f = parseFloat(window.getComputedStyle(n, ":before").getPropertyValue("height"));
      return l -= (b - d) / 2, s -= (f - u) / 2, d = b, u = f, Re.fromLWTH(l, d, s, u);
    }
    const { top: r, width: o, left: a, height: c } = n.getBoundingClientRect();
    return Re.fromLWTH(a, o, r, c);
  }
}
function Gt(t) {
  return t instanceof HTMLElement;
}
class It extends pt {
  constructor(e = Ur, r = zr, o = Hr, a = Kr, c = Gr, s = Yr, l = Zr, d) {
    super(d);
    F(this, "__layoutWidth");
    F(this, "__color");
    F(this, "__fontSize");
    F(this, "__backgroundColor");
    F(this, "__fontFamily");
    F(this, "__lineHeight");
    F(this, "__alignItems");
    this.__layoutWidth = e, this.__color = r, this.__fontSize = o, this.__backgroundColor = a, this.__fontFamily = c, this.__lineHeight = s, this.__alignItems = l;
  }
  static getType() {
    return "email-template-root";
  }
  static clone(e) {
    return new It(
      e.__layoutWidth,
      e.__color,
      e.__fontSize,
      e.__backgroundColor,
      e.__fontFamily,
      e.__lineHeight,
      e.__alignItems,
      e.__key
    );
  }
  getLayoutWidth() {
    return this.getLatest().__layoutWidth;
  }
  getColor() {
    return this.getLatest().__color;
  }
  getFontSize() {
    return this.getLatest().__fontSize;
  }
  getBackgroundColor() {
    return this.getLatest().__backgroundColor;
  }
  getFontFamily() {
    return this.getLatest().__fontFamily;
  }
  getLineHeight() {
    return this.getLatest().__lineHeight;
  }
  getAlignItems() {
    return this.getLatest().__alignItems;
  }
  getState() {
    const e = this.getLatest();
    return {
      layoutWidth: e.__layoutWidth,
      color: e.__color,
      fontSize: e.__fontSize,
      backgroundColor: e.__backgroundColor,
      fontFamily: e.__fontFamily,
      lineHeight: e.__lineHeight,
      alignItems: e.__alignItems
    };
  }
  createDOM(e) {
    var o;
    const r = document.createElement("div");
    return r.setAttribute("data-email-template-root", "true"), r.setAttribute("data-over-330", this.__layoutWidth > 330 ? "true" : "false"), r.style.color = this.__color, r.style.fontSize = `${this.__fontSize}px`, r.style.backgroundColor = this.__backgroundColor, r.style.fontFamily = this.__fontFamily, r.style.lineHeight = (o = this.__lineHeight) == null ? void 0 : o.toString(), r.style.alignItems = this.__alignItems, r.style.setProperty("--content-width", `${this.__layoutWidth}px`), ge(r, e.theme.emailTemplateRoot), r;
  }
  updateDOM(e, r) {
    return e.__color !== this.__color && (r.style.color = this.__color), e.__fontSize !== this.__fontSize && (r.style.fontSize = `${this.__fontSize}px`), e.__backgroundColor !== this.__backgroundColor && (r.style.backgroundColor = this.__backgroundColor), e.__fontFamily !== this.__fontFamily && (r.style.fontFamily = this.__fontFamily), e.__lineHeight !== this.__lineHeight && (r.style.lineHeight = this.__lineHeight.toString()), e.__alignItems !== this.__alignItems && (r.style.alignItems = this.__alignItems), e.__layoutWidth !== this.__layoutWidth && (r.style.setProperty("--content-width", `${this.__layoutWidth}px`), r.setAttribute("data-over-330", this.__layoutWidth > 330 ? "true" : "false")), !1;
  }
  append(...e) {
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if (!_n(o))
        throw new Error("EmailTemplateRootNode can only have EmailTemplateBlockNode as children");
    }
    return super.append(...e);
  }
  static importDOM() {
    return {};
  }
  static importJSON(e) {
    return Ea(e);
  }
  exportDOM() {
    const e = document.createElement("html"), r = Z(
      "html",
      {
        mlns: "http://www.w3.org/1999/xhtml",
        "xmlns:v": "urn:schemas-microsoft-com:vml",
        "xmlns:o": "urn:schemas-microsoft-com:office:office"
      }
    ), o = document.createComment("[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]"), a = Z("head"), c = Z("meta", { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" }), s = Z("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), l = Z("meta", { name: "x-apple-disable-message-reformatting" }), d = Z("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }), u = document.createComment("[if !mso]><!"), b = document.createComment("<![endif]");
    a.appendChild(o), a.appendChild(c), a.appendChild(s), a.appendChild(l), a.appendChild(u), a.appendChild(d), a.appendChild(b);
    const f = document.createElement("body"), y = Z("style", { type: "text/css" });
    y.textContent = `
      @media only screen and (min-width: ${this.__layoutWidth + 20}px) {
        .et-block-content {
          width: ${this.__layoutWidth}px !important;
        }
        .et-block-content .layout-item {
          vertical-align: top;
        }
        .et-block-content .layout-item-50 {
           width: ${this.__layoutWidth / 2}px !important;
        }
        .et-block-content .layout-item-33 {
           width: ${this.__layoutWidth / 3}px !important;
        }
        .et-block-content .layout-item-25 {
           width: ${this.__layoutWidth / 4}px !important;
        }
        .et-block-content .layout-item-75 {
           width: ${this.__layoutWidth * 0.75}px !important;
         }
      }
      
      @media only screen and (max-width: ${this.__layoutWidth + 20}px) {
        .et-block-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        
        .et-block-content {
          width: 100% !important;
        }
        
        .et-block-content .layout-item {
          display: block !important;
          width: 100% !important;
          min-width: 320px !important;
          max-width: 100% !important;
        }
        
        .et-block-content .layout-item > div {
          margin: 0 auto;
        }
        
        .et-block-content .layout-item img {
          max-width: 100% !important;
        }
      }
      
      body {
        margin: 0;
        padding: 0;
      }
      table, tr, td {
        border-collapse: collapse;
        vertical-align: top;
      }
      p {
        margin: 0;
      }
      .ie-container table, .mso-container table {
        table-layout: fixed;
      }
      * {
        line-height: inherit;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
      } 
    `, y.textContent = y.textContent.replace(/\s+/g, " "), a.appendChild(y), r.appendChild(a), r.appendChild(f);
    const _ = Z(
      "table",
      {
        cellspacing: "0",
        cellpadding: "0",
        border: "0"
      },
      {
        borderCollapse: "collapse",
        tableLayout: "fixed",
        borderSpacing: "0",
        msTableLspace: "0pt",
        msTableRspace: "0pt",
        verticalAlign: "top",
        minWidth: "320px",
        margin: "0 auto",
        backgroundColor: this.__backgroundColor,
        color: this.__color,
        width: "100%",
        fontSize: `${this.__fontSize}px`,
        fontFamily: this.__fontFamily
      }
    ), x = Z("tr", {}, { verticalAlign: "top" }), m = Z("td", {}, { wordBreak: "break-word", borderCollapse: "collapse", verticalAlign: "top" }), C = [
      { comment: '<div class="ie-container">', condition: "ie" },
      { comment: '<div class="mso-container">', condition: "mso" },
      { comment: "</div>", condition: "mso" },
      { comment: "</div>", condition: "ie" },
      {
        comment: `<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: ${this.__backgroundColor};">`,
        condition: "oneOf"
      },
      {
        comment: "</td></tr></table>",
        condition: "oneOf"
      }
    ];
    return x.appendChild(m), _.appendChild(x), C.slice(0, 2).forEach((g) => {
      f.appendChild(Fe(g));
    }), f.appendChild(_), C.slice(2, 4).forEach((g) => {
      f.appendChild(Fe(g));
    }), m.appendChild(Fe(C[4])), {
      after: (g) => (g instanceof HTMLElement && Array.from(g.children).forEach((v) => {
        m.appendChild(v);
      }), m.appendChild(Fe(C[5])), r),
      element: e
    };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      layoutWidth: this.__layoutWidth,
      color: this.__color,
      fontSize: this.__fontSize,
      backgroundColor: this.__backgroundColor,
      fontFamily: this.__fontFamily,
      lineHeight: this.__lineHeight,
      alignItems: this.__alignItems,
      type: "email-template-root"
    };
  }
  canInsertTextAfter() {
    return !1;
  }
  canInsertTextBefore() {
    return !1;
  }
  canMergeWhenEmpty() {
    return !0;
  }
  isShadowRoot() {
    return !0;
  }
  setStyle() {
    return this;
  }
  canBeEmpty() {
    return !1;
  }
  setLayoutWidth(e) {
    const r = this.getWritable();
    return r.__layoutWidth = e, this;
  }
  setColor(e) {
    const r = this.getWritable();
    return r.__color = e, this;
  }
  setFontSize(e) {
    typeof e == "string" && (e = parseInt(e));
    const r = this.getWritable();
    return r.__fontSize = e, this;
  }
  setBackgroundColor(e) {
    const r = this.getWritable();
    return r.__backgroundColor = e, this;
  }
  setFontFamily(e) {
    const r = this.getWritable();
    return r.__fontFamily = e, this;
  }
  setLineHeight(e) {
    typeof e == "string" && (e = parseFloat(e));
    const r = this.getWritable();
    return r.__lineHeight = e, this;
  }
  setAlignItems(e) {
    const r = this.getWritable();
    return r.__alignItems = e, this;
  }
}
function Ea(t = {}) {
  const {
    layoutWidth: n,
    color: e,
    fontSize: r,
    backgroundColor: o,
    fontFamily: a,
    lineHeight: c,
    alignItems: s
  } = t;
  return new It(
    n,
    e,
    r,
    o,
    a,
    c,
    s
  );
}
function Pe(t) {
  const n = t.getEditorState(), e = Array.from(n._nodeMap.entries()).filter(([, r]) => r.getType() === "email-template-root");
  if (e.length < 1)
    throw new Error("No EmailTemplateRootNode found");
  if (e.length > 1)
    throw new Error("Multiple EmailTemplateRootNode found");
  return e[0][1];
}
const Kn = 4, ka = 2, wa = "draggable-block-menu", Gn = "application/x-lexical-email-drag-block", Yn = 28, Ta = 1, Sa = -1, Zn = 0;
let Lt = 1 / 0;
function Ra(t) {
  return t === 0 ? 1 / 0 : Lt >= 0 && Lt < t ? Lt : Math.floor(t / 2);
}
function Aa(t) {
  return t.getEditorState().read(() => Pe(t).getChildrenKeys());
}
function Qr(t) {
  const n = (l, d) => l ? parseFloat(window.getComputedStyle(l)[d]) : 0, { marginTop: e, marginBottom: r } = window.getComputedStyle(t), o = n(
    t.previousElementSibling,
    "marginBottom"
  ), a = n(
    t.nextElementSibling,
    "marginTop"
  ), c = Math.max(
    parseFloat(e),
    o
  );
  return { marginBottom: Math.max(
    parseFloat(r),
    a
  ), marginTop: c };
}
function Yt(t, n, e = !1) {
  const r = Aa(t);
  let o = null;
  return t.getEditorState().read(() => {
    if (e) {
      const [s, l] = [
        t.getElementByKey(r[0]),
        t.getElementByKey(r[r.length - 1])
      ], [d, u] = [
        s == null ? void 0 : s.getBoundingClientRect(),
        l == null ? void 0 : l.getBoundingClientRect()
      ];
      if (d && u && (n.y < d.top ? o = s : n.y > u.bottom && (o = l), o))
        return;
    }
    let a = Ra(r.length), c = Zn;
    for (; a >= 0 && a < r.length; ) {
      const s = r[a], l = t.getElementByKey(s);
      if (l === null)
        break;
      const d = new Xr(n.x, n.y), u = Re.fromDOM(l, !0), { marginTop: b, marginBottom: f } = Qr(l), y = u.generateNewRect({
        bottom: u.bottom + f,
        left: u.left,
        right: u.right,
        top: u.top - b
      }), {
        result: _,
        reason: { isOnTopSide: x, isOnBottomSide: m }
      } = y.contains(d);
      if (_) {
        o = l, Lt = a;
        break;
      }
      c === Zn && (x ? c = Sa : m ? c = Ta : c = 1 / 0), a += c;
    }
  }), o;
}
function La(t) {
  return !!t.closest(`.${wa}`);
}
function Na(t, n, e) {
  if (!t) {
    n.style.opacity = "0", n.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const r = t.getBoundingClientRect(), o = window.getComputedStyle(t), a = n.getBoundingClientRect(), c = e.getBoundingClientRect(), s = parseFloat(window.getComputedStyle(e).paddingTop), l = parseFloat(window.getComputedStyle(e).marginTop), d = parseFloat(window.getComputedStyle(t, ":before").width) || r.width, u = r.top + parseInt(o.height, 10) / 2 - a.height / 2 - c.top + s + l;
  n.style.opacity = "1", n.style.transform = `translate(-${Math.abs(d - r.width) / 2 + a.width}px, ${u}px)`;
}
function Fa(t, n, e, r) {
  const { top: o, height: a } = n.getBoundingClientRect(), { top: c, width: s } = r.getBoundingClientRect(), { marginTop: l, marginBottom: d } = Qr(n);
  let u = o;
  e >= o ? u += a + d / 2 : u -= l / 2;
  const b = u - c - ka, f = Yn - Kn;
  t.style.transform = `translate(${f}px, ${b}px)`, t.style.width = `${s - (Yn - Kn) * 2}px`, t.style.opacity = ".4";
}
function Oa(t, n) {
  const { transform: e } = n.style;
  n.style.transform = "translateZ(-10)", t.setDragImage(n, -20, -20), setTimeout(() => {
    n.style.transform = e;
  });
}
function Ia(t) {
  t && (t.style.opacity = "0", t.style.transform = "translate(-10000px, -10000px)");
}
const ja = ({ editor: t, anchorElem: n = document.body }) => {
  const e = n.parentElement, [r, o] = j(null), a = ee(null), c = ee(!1), s = ee(null), l = M(() => {
    const y = rn(), _ = mn("1fr"), x = Ot(), m = ie();
    return x.append(m), _.append(x), y.append(_), y;
  }, []), d = M(() => {
    if (r) {
      const y = r.getAttribute("data-key");
      y && t.update(() => {
        const _ = it(y), x = l();
        _.insertAfter(x);
      });
    }
  }, [t, l, r]), u = M(() => {
    if (r) {
      const y = r.getAttribute("data-key");
      y && t.update(() => {
        const _ = it(y), x = l();
        _.insertBefore(x);
      });
    }
  }, [t, l, r]);
  B(() => {
    const y = (x) => {
      var g;
      const m = x.target;
      if (!Gt(m)) {
        o(null);
        return;
      }
      if (La(m) || (g = a.current) != null && g.contains(x.target))
        return;
      const C = Yt(t, x);
      if (C === null || C !== x.target) {
        o(null);
        return;
      }
      o(C);
    }, _ = () => {
      r == null || r.classList.remove("hovered"), o(null);
    };
    return e == null || e.addEventListener("mousemove", y), e == null || e.addEventListener("mouseleave", _), () => {
      e == null || e.removeEventListener("mousemove", y), e == null || e.removeEventListener("mouseleave", _);
    };
  }, [e, n, t]), B(() => (a.current && (Na(r, a.current, n), r == null || r.classList.add("hovered")), () => {
    r == null || r.classList.remove("hovered");
  }), [n, r]), B(() => {
    function y(x) {
      if (!c.current)
        return !1;
      const [m] = Hn(x);
      if (m)
        return !1;
      const { pageY: C, target: g } = x;
      if (!Gt(g))
        return !1;
      const h = Yt(t, x, !0), v = s.current;
      return h === null || v === null ? !1 : (Fa(v, h, C, n), x.preventDefault(), !0);
    }
    function _(x) {
      if (!c.current)
        return !1;
      const [m] = Hn(x);
      if (m)
        return !1;
      const { target: C, dataTransfer: g, pageY: h } = x, v = (g == null ? void 0 : g.getData(Gn)) || "", k = it(v);
      if (!k || !Gt(C))
        return !1;
      const w = Yt(t, x, !0);
      if (!w)
        return !1;
      const S = jn(w);
      if (!S)
        return !1;
      if (S === k)
        return !0;
      const N = w.getBoundingClientRect().top;
      return h >= N ? S.insertAfter(k) : S.insertBefore(k), o(null), !0;
    }
    return se(
      t.registerCommand(
        Po,
        (x) => y(x),
        ce
      ),
      t.registerCommand(
        Mo,
        (x) => _(x),
        Tr
      )
    );
  }, [n, t]);
  const b = (y) => {
    const _ = y.dataTransfer;
    if (!_ || !r)
      return;
    Oa(_, r);
    let x = "";
    t.update(() => {
      const m = jn(r);
      _n(m) && (x = m.getKey());
    }), c.current = !0, _.setData(Gn, x);
  }, f = () => {
    c.current = !1, Ia(s.current);
  };
  return gt(
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "block-adder-box", ref: a, children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", onClick: u, children: "+" }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "block-drag",
            onDragStart: b,
            onDragEnd: f,
            draggable: !0,
            children: "☷"
          }
        ),
        /* @__PURE__ */ i.jsx("button", { type: "button", onClick: d, children: "+" })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "draggable-block-target-line", ref: s })
    ] }),
    n
  );
}, Jn = (t, n, e) => t > n ? n : t < e ? e : t, Vn = (t) => {
  if (t.startsWith("#")) {
    if (t.length === 4 || t.length === 5)
      return t = t.split("").map((n, e) => e ? n + n : "#").join(""), t;
    if (t.length === 7 || t.length === 9)
      return t;
  } else {
    const n = document.createElement("canvas").getContext("2d");
    if (!n)
      throw new Error("2d context not supported or canvas already initialized");
    return n.fillStyle = t, n.fillStyle;
  }
  return "#000000";
}, qn = (t) => {
  const n = (t.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (e, r, o, a) => "#" + r + r + o + o + a + a
  ).substring(1).match(/.{2}/g) || []).map((e) => parseInt(e, 16));
  return {
    r: n[0],
    g: n[1],
    b: n[2]
  };
}, Zt = ({ r: t, g: n, b: e }) => {
  t /= 255, n /= 255, e /= 255;
  const r = Math.max(t, n, e), o = r - Math.min(t, n, e), a = o ? (r === t ? (n - e) / o + (n < e ? 6 : 0) : r === n ? 2 + (e - t) / o : 4 + (t - n) / o) * 60 : 0, c = r ? o / r * 100 : 0, s = r * 100;
  return {
    h: a,
    s: c,
    v: s
  };
}, $a = ({ h: t, s: n, v: e }) => {
  n /= 100, e /= 100;
  const r = ~~(t / 60), o = t / 60 - r, a = e * (1 - n), c = e * (1 - o * n), s = e * (1 - (1 - o) * n), l = r % 6, d = Math.round([e, c, a, a, s, e][l] * 255), u = Math.round([s, e, e, c, a, a][l] * 255), b = Math.round([a, a, s, e, e, c][l] * 255);
  return {
    r: d,
    g: u,
    b
  };
}, Xn = ({ r: t, g: n, b: e }) => "#" + [t, n, e].map((r) => r.toString(16).padStart(2, "0")).join(""), Se = (t, n) => {
  if (n === "inherit" || n === "transparent")
    return {
      hex: n,
      rgb: { r: 0, g: 0, b: 0 },
      hsv: { h: 0, s: 0, v: 0 }
    };
  let e = Vn("#121212"), r = qn(e), o = Zt(r);
  return t === "hex" ? (e = Vn(n), r = qn(e), o = Zt(r)) : t === "rgb" ? (r = n, e = Xn(r), o = Zt(r)) : t === "hsv" && (o = n, r = $a(o), e = Xn(r)), {
    hex: e,
    rgb: r,
    hsv: o
  };
}, Ba = ({ label: t, ...n }) => /* @__PURE__ */ i.jsxs("div", { className: "Input__wrapper", children: [
  /* @__PURE__ */ i.jsx("label", { className: "Input__label", children: t }),
  /* @__PURE__ */ i.jsx("input", { className: "Input__input", ...n })
] }), Qn = ({
  className: t,
  style: n,
  onChange: e,
  children: r,
  skipAddingToHistoryStack: o
}) => {
  const a = ee(null), c = ee(!1), s = (d) => {
    if (a.current) {
      const { current: u } = a, { width: b, height: f, left: y, top: _ } = u.getBoundingClientRect(), x = Jn(d.clientX - y, b, 0), m = Jn(d.clientY - _, f, 0);
      e({ x, y: m });
    }
  }, l = (d) => {
    var f, y;
    if (d.button !== 0)
      return;
    s(d);
    const u = (_) => {
      c.current = !0, o.current = !0, s(_);
    }, b = (_) => {
      var x, m;
      c.current && (o.current = !1), (x = a.current) == null || x.removeEventListener("mousemove", u, !1), (m = a.current) == null || m.removeEventListener("mouseup", b, !1), s(_), c.current = !1;
    };
    (f = a.current) == null || f.addEventListener("mousemove", u, !1), (y = a.current) == null || y.addEventListener("mouseup", b, !1);
  };
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: a,
      className: t,
      style: n,
      onMouseDown: l,
      children: r
    }
  );
}, eo = _e.createContext(null), Da = ({
  children: t,
  dropDownRef: n,
  onClose: e
}) => {
  const [r, o] = j([]), [a, c] = j(), s = M((u) => {
    o((b) => b ? [...b, u] : [u]);
  }, []), l = (u) => {
    if (!r)
      return;
    const b = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(b) && u.preventDefault(), b === "Escape" || b === "Tab" ? e() : b === "ArrowUp" ? c((f) => {
      if (!f)
        return r[0];
      const y = r.indexOf(f) - 1;
      return r[y === -1 ? r.length - 1 : y];
    }) : b === "ArrowDown" && c((f) => f ? r[r.indexOf(f) + 1] : r[0]);
  }, d = we(() => ({
    registerItem: s
  }), [s]);
  return B(() => {
    r.length > 0 && !a && c(r[0]), a && a.current && a.current.focus();
  }, [r]), /* @__PURE__ */ i.jsx(eo.Provider, { value: d, children: /* @__PURE__ */ i.jsx("div", { className: "dropdown", ref: n, onKeyDown: l, children: t }) });
}, er = 4, to = ({
  buttonClassName: t,
  children: n,
  title: e,
  disabled: r = !1,
  buttonAriaLabel: o = "",
  buttonLabel: a,
  stopCloseOnClickSelf: c = !1
}) => {
  const s = ee(null), l = ee(null), [d, u] = j(!1), b = () => {
    u(!1), l && l.current && l.current.focus();
  };
  return B(() => {
    const f = l.current, y = s.current;
    if (d && f !== null && y !== null) {
      const { top: _, left: x } = f.getBoundingClientRect();
      y.style.top = `${_ + f.offsetHeight + er}px`, y.style.left = `${Math.min(
        x,
        window.innerWidth - y.offsetWidth - 20
      )}px`;
    }
  }, [d]), B(() => {
    const f = l.current;
    if (f !== null && d) {
      const y = (_) => {
        const x = _.target;
        c && s.current && s.current.contains(x) || f.contains(x) || u(!1);
      };
      return document.addEventListener("click", y), () => {
        document.removeEventListener("click", y);
      };
    }
  }, [d, c]), B(() => {
    const f = () => {
      if (d) {
        const y = l.current, _ = s.current;
        if (y !== null && _ !== null) {
          const { top: x } = y.getBoundingClientRect(), m = x + y.offsetHeight + er;
          m !== _.getBoundingClientRect().top && (_.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [d]), /* @__PURE__ */ i.jsxs(_e.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        disabled: r,
        "aria-label": o,
        className: t,
        onClick: () => u(!d),
        ref: l,
        title: e,
        children: a
      }
    ),
    d && gt(
      /* @__PURE__ */ i.jsx(Da, { dropDownRef: s, onClose: b, children: n }),
      document.body
    )
  ] });
}, nt = 214, tr = 150, Pa = [
  "#d0021b",
  "#f5a623",
  "#f8e71c",
  "#8b572a",
  "#7ed321",
  "#417505",
  "#bd10e0",
  "#9013fe",
  "#4a90e2",
  "#50e3c2",
  "#b8e986",
  "#000000",
  "#4a4a4a",
  "#9b9b9b",
  "#ffffff"
], Ma = ({ color: t, onChange: n, name: e, typeOfColor: r = "color" }) => {
  const [o, a] = j(Se("hex", t)), [c, s] = j(t), l = _e.useRef(null), d = ee(!1), u = ee(), b = we(
    () => ({
      x: o.hsv.s / 100 * nt,
      y: (100 - o.hsv.v) / 100 * tr
    }),
    [o.hsv.s, o.hsv.v]
  ), f = we(
    () => ({
      x: o.hsv.h / 360 * nt
    }),
    [o.hsv]
  ), y = (m) => {
    if (s(m), /^#[0-9A-Fa-f]{6}$/i.test(m)) {
      const C = Se("hex", m);
      a(C);
    }
  }, _ = ({ x: m, y: C }) => {
    const g = {
      ...o.hsv,
      s: m / nt * 100,
      v: 100 - C / tr * 100
    }, h = Se("hsv", g);
    a(h), s(h.hex);
  }, x = ({ x: m }) => {
    const C = { ...o.hsv, h: m / nt * 360 }, g = Se("hsv", C);
    a(g), s(g.hex);
  };
  return B(() => {
    l.current !== null && n && o.hex !== t && (n(o.hex, d.current, e, u.current), s(o.hex));
  }, [o, n]), B(() => {
    if (!t || t === "inherit" || t === "transparent")
      return;
    const m = Se("hex", t);
    a(m), s(m.hex);
  }, [t]), /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: l,
      style: { width: nt },
      className: "color-picker-wrapper",
      children: [
        /* @__PURE__ */ i.jsx(
          Ba,
          {
            label: "Hex",
            onChange: (m) => {
              y(m.target.value);
            },
            value: c
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "color-picker-wrapper__basic-color", children: [
          r === "color" ? /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: `inherit-color ${c === "inherit" ? "active" : ""}`,
              onClick: () => {
                s("inherit"), a(Se("hex", "inherit"));
              }
            }
          ) : /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: `transparent-color ${c === "transparent" ? "active" : ""}`,
              onClick: () => {
                s("transparent"), a(Se("hex", "transparent"));
              }
            }
          ),
          Pa.map((m) => /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: m === o.hex ? " active" : "",
              style: { backgroundColor: m },
              onClick: () => {
                s(m), a(Se("hex", m));
              }
            },
            m
          ))
        ] }),
        /* @__PURE__ */ i.jsx(
          Qn,
          {
            className: "color-picker-wrapper__saturation",
            style: { backgroundColor: `hsl(${o.hsv.h}, 100%, 50%)` },
            onChange: _,
            skipAddingToHistoryStack: d,
            children: /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "color-picker-wrapper__saturation__cursor",
                style: {
                  backgroundColor: o.hex,
                  left: b.x || 0,
                  top: b.y || 0
                }
              }
            )
          }
        ),
        /* @__PURE__ */ i.jsx(
          Qn,
          {
            className: "color-picker-wrapper__hue",
            onChange: x,
            skipAddingToHistoryStack: d,
            children: /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "color-picker-wrapper__hue__cursor",
                style: {
                  backgroundColor: `hsl(${o.hsv.h}, 100%, 50%)`,
                  left: f.x
                }
              }
            )
          }
        ),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "color-picker-wrapper__color",
            style: { backgroundColor: o.hex }
          }
        )
      ]
    }
  );
}, Ee = (t) => {
  const { onChange: n, color: e, removeChevron: r = !0, buttonClassName: o = "color-picker-button", name: a, ...c } = t;
  return /* @__PURE__ */ i.jsx(
    to,
    {
      stopCloseOnClickSelf: !0,
      removeChevron: r,
      buttonClassName: o,
      buttonLabel: /* @__PURE__ */ i.jsx("span", { className: `color-fill-rect ${e === "inherit" || e === "transparent" ? "transparent" : ""}`, style: { backgroundColor: e } }),
      ...c,
      children: /* @__PURE__ */ i.jsx(Ma, { color: e, onChange: n, name: a })
    }
  );
};
class Xe extends pt {
  static getType() {
    return "image-block";
  }
  static clone(n) {
    return new Xe(n.__key);
  }
  constructor(n) {
    super(n), this.__format = 1;
  }
  createDOM(n) {
    const e = document.createElement("p");
    return e.setAttribute("data-image-block", "true"), ge(e, n.theme.imageBlock), e;
  }
  updateDOM() {
    return !1;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      version: 1,
      type: "image-block"
    };
  }
  exportDOM() {
    const n = document.createElement("div"), e = Z(
      "table",
      {
        width: "100%",
        height: "100%",
        cellpadding: "0",
        cellspacing: "0",
        border: "0"
      }
    ), r = document.createElement("tr"), o = Z(
      "td",
      {
        height: "100%",
        width: "100%",
        align: this.getFormatType()
      }
    );
    return r.appendChild(o), e.appendChild(r), {
      element: n,
      after: (a) => {
        const c = a == null ? void 0 : a.firstChild;
        return c instanceof HTMLElement && o.appendChild(c), e;
      }
    };
  }
  static importJSON(n) {
    const e = yn();
    return e.setFormat(n.format), e;
  }
  canMergeWhenEmpty() {
    return !1;
  }
  canBeEmpty() {
    return !1;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  isInline() {
    return !1;
  }
  insertNewAfter(n, e) {
    const r = ie();
    r.setTextFormat(n.format), r.setTextStyle(n.style);
    const o = this.getDirection();
    return r.setDirection(o), r.setFormat(this.getFormatType()), this.insertAfter(r, e), r;
  }
  insertBefore(n, e) {
    let r = n;
    if (ue(n)) {
      const o = ie();
      o.append(n), r = o;
    }
    return super.insertBefore(r, e);
  }
  insertAfter(n, e) {
    let r = n;
    if (ue(n)) {
      const o = ie();
      o.append(n), r = o;
    }
    return super.insertAfter(r, e);
  }
  collapseAtStart() {
    return !0;
  }
}
const yn = (t) => new Xe(t);
function nr(t) {
  return (t == null ? void 0 : t.getType()) === Xe.getType();
}
const Wa = At.lazy(() => import("./ImageComponent-DBtMRl-4.js"));
function Ua(t) {
  return t.parentElement != null && t.parentElement.tagName === "LI" && t.previousSibling === null && t.getAttribute("aria-roledescription") === "checkbox";
}
function za(t) {
  const n = t;
  if (n.src.startsWith("file:///") || Ua(n))
    return null;
  const { alt: e, src: r, width: o, height: a } = n;
  return { node: xn({ altText: e, height: a, src: r, width: o }) };
}
class bt extends Sr {
  constructor(e, r, o, a, c, s, l, d, u) {
    super(u);
    F(this, "__src");
    F(this, "__altText");
    F(this, "__width");
    F(this, "__height");
    F(this, "__maxWidth");
    F(this, "__showCaption");
    F(this, "__caption");
    // Captions cannot yet be used within editor cells
    F(this, "__captionsEnabled");
    this.__src = e || "", this.__altText = r || "", this.__maxWidth = o || 500, this.__width = a || "100%", this.__height = c || "100%", this.__showCaption = s || !1, this.__caption = l || "", this.__captionsEnabled = d || d === void 0;
  }
  static getType() {
    return "image";
  }
  static clone(e) {
    return new bt(
      e.__src,
      e.__altText,
      e.__maxWidth,
      e.__width,
      e.__height,
      e.__showCaption,
      e.__caption,
      e.__captionsEnabled,
      e.__key
    );
  }
  static importJSON(e) {
    return xn(e);
  }
  exportDOM() {
    const e = document.createElement("img");
    return e.setAttribute("align", "center"), e.setAttribute("border", "0"), e.setAttribute("src", this.__src), e.setAttribute("alt", this.__altText), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), e.style.outline = "none", e.style.textDecoration = "none", e.style.clear = "both", e.style.display = "inline-block", e.style.maxWidth = "100%", e.style.width = this.__width === "100%" ? "100%" : `${this.__width}px`, e.style.height = this.__height === "100%" ? "auto" : `${this.__height}px`, { element: e };
  }
  static importDOM() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      img: (e) => ({
        conversion: za,
        priority: 0
      })
    };
  }
  exportJSON() {
    return {
      altText: this.getAltText(),
      caption: this.getCaption(),
      height: this.__height === "100%" ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: "image",
      version: 1,
      width: this.__width === "100%" ? 0 : this.__width
    };
  }
  setWidthAndHeight(e, r) {
    const o = this.getWritable();
    o.__width = e, o.__height = r;
  }
  setShowCaption(e) {
    const r = this.getWritable();
    r.__showCaption = e;
  }
  // View
  createDOM(e) {
    const r = document.createElement("div"), o = e.theme;
    return ge(r, o.image), r;
  }
  updateDOM() {
    return !1;
  }
  getState() {
    const e = this.getLatest();
    return {
      altText: e.__altText,
      caption: e.__caption,
      height: e.__height === "100%" ? 0 : e.__height,
      key: e.getKey(),
      maxWidth: e.__maxWidth,
      showCaption: e.__showCaption,
      src: e.__src,
      width: e.__width === "100%" ? 0 : e.__width,
      captionsEnabled: e.__captionsEnabled
    };
  }
  getSrc() {
    return this.__src;
  }
  getCaption() {
    return this.__caption;
  }
  getAltText() {
    return this.__altText;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return yn();
  }
  decorate() {
    return /* @__PURE__ */ i.jsx(hn, { fallback: null, children: /* @__PURE__ */ i.jsx(
      Wa,
      {
        src: this.__src,
        altText: this.__altText,
        width: this.__width,
        height: this.__height,
        nodeKey: this.getKey(),
        showCaption: this.__showCaption,
        caption: this.__caption,
        captionsEnabled: this.__captionsEnabled,
        resizable: !0
      }
    ) });
  }
  setSrc(e) {
    const r = this.getWritable();
    return r.__src = e, this;
  }
  setAltText(e) {
    const r = this.getWritable();
    return r.__altText = e, this;
  }
  setCaption(e) {
    const r = this.getWritable();
    return r.__caption = e, this;
  }
  setCaptionsEnabled(e) {
    const r = this.getWritable();
    return r.__captionsEnabled = e, this;
  }
  remove(e) {
    const r = this.getParent();
    (r == null ? void 0 : r.getPreviousSibling()) || r == null || r.insertBefore(ie()), super.remove(e);
  }
}
function xn({
  altText: t,
  height: n,
  maxWidth: e = 500,
  captionsEnabled: r,
  src: o,
  width: a,
  showCaption: c,
  caption: s,
  key: l
}) {
  return fn(
    new bt(
      o,
      t,
      e,
      a,
      n,
      c,
      s,
      r,
      l
    )
  );
}
function rr(t) {
  return t instanceof bt;
}
const Ha = Rr("RATION_CHANGE_IMAGE_COMMAND"), no = Rr("CONTENT_WIDTH_CHANGE_EMAIL_COMMAND");
function or(t, n) {
  return t.getEditorState().read(() => {
    const e = it(n);
    return e !== null && e.isSelected();
  });
}
function Ka(t) {
  const [n] = ye(), [e, r] = j(() => or(n, t));
  return B(() => {
    let o = !0;
    const a = n.registerUpdateListener(() => {
      o && r(or(n, t));
    });
    return () => {
      o = !1, a();
    };
  }, [n, t]), [e, M((o) => {
    n.update(() => {
      let a = Q();
      Ge(a) || (a = Wo(), lt(a)), Ge(a) && (o ? a.add(t) : a.delete(t));
    });
  }, [n, t]), M(() => {
    n.update(() => {
      const o = Q();
      Ge(o) && o.clear();
    });
  }, [n])];
}
class _t extends Xe {
  static getType() {
    return "button-link-block";
  }
  static clone(n) {
    return new _t(n.__key);
  }
  constructor(n) {
    super(n), this.__format = 2;
  }
  createDOM(n) {
    const e = document.createElement("p");
    return e.setAttribute("data-button-link-block", "true"), ge(e, n.theme.buttonLinkBlock), e;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      version: 1,
      type: "button-link-block"
    };
  }
  exportDOM() {
    return { element: document.createDocumentFragment() };
  }
  static importJSON(n) {
    const e = Cn();
    return e.setFormat(n.format), e;
  }
}
const Cn = (t) => new _t(t);
function ut(t) {
  return (t == null ? void 0 : t.getType()) === _t.getType();
}
const Ga = ({
  url: t,
  text: n,
  backgroundColor: e,
  color: r,
  fontSize: o,
  borderRadius: a,
  borderLeftWidth: c,
  borderRightWidth: s,
  borderTopWidth: l,
  borderBottomWidth: d,
  borderLeftColor: u,
  borderRightColor: b,
  borderTopColor: f,
  borderBottomColor: y,
  paddingBottom: _,
  paddingLeft: x,
  paddingRight: m,
  paddingTop: C,
  nodeKey: g
}) => {
  const [h, v, k] = Ka(g), [w] = ye(), S = ee(null), N = M(
    ($) => {
      const H = Q();
      if (h && Ge(H))
        $.preventDefault(), w.update(() => {
          H.getNodes().forEach((K) => {
            on(K) && K.remove();
          });
        });
      else if (re(H) && H.isCollapsed()) {
        const K = H.anchor.getNode(), J = K.getPreviousSibling();
        if (ut(J))
          return $.preventDefault(), K.remove(), J.select(), !0;
      }
      return !1;
    },
    [w, h]
  ), A = M(
    ($) => {
      const H = Q();
      if (re(H)) {
        const K = H.anchor.getNode();
        if (ut(K)) {
          lt(null), $.preventDefault();
          const J = ie();
          return H.anchor.offset === 0 ? K.insertBefore(J) : K.insertAfter(J), J.select(), !0;
        }
      }
      return !1;
    },
    []
  ), z = M(
    ($) => {
      const H = $;
      return H.target === S.current ? (H.shiftKey ? v(!h) : (k(), v(!0)), !0) : !1;
    },
    [v, k, h]
  );
  return B(() => {
    const $ = se(
      w.registerCommand(
        Ar,
        z,
        ce
      ),
      w.registerCommand(
        Uo,
        N,
        ce
      ),
      w.registerCommand(
        zo,
        N,
        ce
      ),
      w.registerCommand(Ho, A, ce)
    );
    return () => {
      $();
    };
  }, [
    k,
    w,
    h,
    g,
    N,
    A,
    z,
    v
  ]), /* @__PURE__ */ i.jsx(
    "a",
    {
      ref: S,
      href: t,
      style: {
        backgroundColor: e,
        color: r,
        fontSize: o,
        borderRadius: a + "px",
        borderLeftWidth: c,
        borderRightWidth: s,
        borderTopWidth: l,
        borderBottomWidth: d,
        borderLeftColor: u,
        borderRightColor: b,
        borderTopColor: f,
        borderBottomColor: y,
        paddingBottom: _,
        paddingLeft: x,
        paddingRight: m,
        paddingTop: C,
        borderStyle: "solid",
        lineHeight: "17px"
      },
      children: n
    }
  );
};
class yt extends Sr {
  constructor(e, r, o, a, c, s, l, d, u, b, f, y, _, x, m, C, g, h, v) {
    super(v);
    F(this, "__url");
    F(this, "__text");
    F(this, "__backgroundColor");
    F(this, "__color");
    F(this, "__fontSize");
    F(this, "__borderRadius");
    F(this, "__borderLeftWidth");
    F(this, "__borderRightWidth");
    F(this, "__borderTopWidth");
    F(this, "__borderBottomWidth");
    F(this, "__borderLeftColor");
    F(this, "__borderRightColor");
    F(this, "__borderTopColor");
    F(this, "__borderBottomColor");
    F(this, "__paddingTop");
    F(this, "__paddingRight");
    F(this, "__paddingBottom");
    F(this, "__paddingLeft");
    this.__url = e || "", this.__text = r || "", this.__backgroundColor = o || "", this.__color = a || "", this.__fontSize = c || "", this.__borderRadius = s || 0, this.__borderLeftWidth = l || 0, this.__borderRightWidth = d || 0, this.__borderTopWidth = u || 0, this.__borderBottomWidth = b || 0, this.__borderLeftColor = f || "#000000", this.__borderRightColor = y || "#000000", this.__borderTopColor = _ || "#000000", this.__borderBottomColor = x || "#000000", this.__paddingTop = m || 0, this.__paddingRight = C || 0, this.__paddingBottom = g || 0, this.__paddingLeft = h || 0;
  }
  static getType() {
    return "button-link";
  }
  static clone(e) {
    return new yt(
      e.__url,
      e.__text,
      e.__backgroundColor,
      e.__color,
      e.__fontSize,
      e.__borderRadius,
      e.__borderLeftWidth,
      e.__borderRightWidth,
      e.__borderTopWidth,
      e.__borderBottomWidth,
      e.__borderLeftColor,
      e.__borderRightColor,
      e.__borderTopColor,
      e.__borderBottomColor,
      e.__paddingTop,
      e.__paddingRight,
      e.__paddingBottom,
      e.__paddingLeft,
      e.__key
    );
  }
  getState() {
    const e = this.getLatest();
    return {
      url: e.__url,
      text: e.__text,
      backgroundColor: e.__backgroundColor,
      color: e.__color,
      fontSize: e.__fontSize,
      borderRadius: e.__borderRadius,
      borderLeftWidth: e.__borderLeftWidth,
      borderRightWidth: e.__borderRightWidth,
      borderTopWidth: e.__borderTopWidth,
      borderBottomWidth: e.__borderBottomWidth,
      borderLeftColor: e.__borderLeftColor,
      borderRightColor: e.__borderRightColor,
      borderTopColor: e.__borderTopColor,
      borderBottomColor: e.__borderBottomColor,
      paddingTop: e.__paddingTop,
      paddingRight: e.__paddingRight,
      paddingBottom: e.__paddingBottom,
      paddingLeft: e.__paddingLeft
    };
  }
  setUrl(e) {
    const r = this.getWritable();
    r.__url = e;
  }
  setText(e) {
    const r = this.getWritable();
    r.__text = e;
  }
  setBackgroundColor(e) {
    const r = this.getWritable();
    r.__backgroundColor = e;
  }
  setColor(e) {
    const r = this.getWritable();
    r.__color = e;
  }
  setFontSize(e) {
    const r = this.getWritable();
    r.__fontSize = e;
  }
  setBorderRadius(e) {
    const r = this.getWritable();
    r.__borderRadius = e;
  }
  createDOM(e) {
    const r = document.createElement("span");
    return r.setAttribute("data-button-link", "true"), ge(r, e.theme.buttonLink), r;
  }
  updateDOM() {
    return !1;
  }
  static importJSON(e) {
    return ro(e);
  }
  exportJSON() {
    return {
      ...this.getState(),
      type: "button-link",
      version: 1
    };
  }
  exportDOM() {
    const e = this.getParent();
    if (!ut(e))
      throw new Error("ButtonLinkNode must be a child of ButtonLinkBlockNode");
    const r = document.createDocumentFragment(), o = Z(
      "a",
      {
        href: this.__url,
        target: "_blank",
        class: "v-button"
      },
      {
        boxSizing: "border-box",
        display: "inline-block",
        textDecoration: "none",
        "-webkit-text-size-adjust": "none",
        textAlign: "center",
        color: this.__color,
        backgroundColor: this.__backgroundColor,
        borderRadius: `${this.__borderRadius}px`,
        "-webkit-border-radius": `${this.__borderRadius}px`,
        "-moz-border-radius": `${this.__borderRadius}px`,
        width: "auto",
        maxWidth: "100%",
        overflowWrap: "break-word",
        wordBreak: "break-word",
        wordWrap: "break-word",
        "mso-border-alt": "none",
        fontSize: this.__fontSize,
        borderLeft: `${this.__borderLeftWidth}px solid ${this.__borderLeftColor}`,
        borderRight: `${this.__borderRightWidth}px solid ${this.__borderRightColor}`,
        borderTop: `${this.__borderTopWidth}px solid ${this.__borderTopColor}`,
        borderBottom: `${this.__borderBottomWidth}px solid ${this.__borderBottomColor}`,
        lineHeight: "17px"
      }
    ), a = Z(
      "span",
      {},
      {
        display: "block",
        padding: `${this.__paddingTop}px ${this.__paddingRight}px ${this.__paddingBottom}px ${this.__paddingLeft}px`
      }
    );
    a.textContent = this.__text, o.appendChild(a);
    const s = document.createElement("canvas").getContext("2d");
    if (!s)
      throw new Error("Canvas context not available");
    s.font = `${this.__fontSize} Arial`;
    const l = 17 + this.__paddingTop + this.__paddingBottom, d = Math.round(this.__paddingLeft + this.__paddingRight + s.measureText(this.__text).width), u = Math.round(this.__borderRadius / Math.min(l, d) * 100) + 0.5, b = document.createComment("[if mso]><style>.v-button {background: transparent !important;}</style><![endif]"), f = document.createComment(`[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:${l}px; v-text-anchor:middle; width:${d}px;" arcsize="${u}%"  stroke="f" fillcolor="${this.__backgroundColor}"><w:anchorlock/><center style="color:${this.__color};"><![endif]`), y = document.createComment("[if mso]></center></v:roundrect><![endif]"), _ = Z("div", { align: e.getFormatType() });
    return _.appendChild(b), _.appendChild(f), _.appendChild(o), _.appendChild(y), r.appendChild(_), { element: r };
  }
  insertAfter(e, r) {
    return super.insertAfter(e, r);
  }
  decorate() {
    return /* @__PURE__ */ i.jsx(hn, { fallback: null, children: /* @__PURE__ */ i.jsx(
      Ga,
      {
        url: this.__url,
        text: this.__text,
        backgroundColor: this.__backgroundColor,
        color: this.__color,
        fontSize: this.__fontSize,
        borderRadius: this.__borderRadius,
        borderLeftWidth: this.__borderLeftWidth,
        borderRightWidth: this.__borderRightWidth,
        borderTopWidth: this.__borderTopWidth,
        borderBottomWidth: this.__borderBottomWidth,
        borderLeftColor: this.__borderLeftColor,
        borderRightColor: this.__borderRightColor,
        borderTopColor: this.__borderTopColor,
        borderBottomColor: this.__borderBottomColor,
        paddingTop: this.__paddingTop,
        paddingRight: this.__paddingRight,
        paddingBottom: this.__paddingBottom,
        paddingLeft: this.__paddingLeft,
        nodeKey: this.getKey()
      }
    ) });
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return Cn();
  }
  remove(e) {
    const r = this.getParent();
    (r == null ? void 0 : r.getPreviousSibling()) || r == null || r.insertBefore(ie()), super.remove(e);
  }
  setBorder(e, r, o, a, c, s, l, d) {
    const u = this.getWritable();
    u.__borderTopWidth = e, u.__borderTopColor = r, u.__borderRightWidth = o, u.__borderRightColor = a, u.__borderBottomWidth = c, u.__borderBottomColor = s, u.__borderLeftWidth = l, u.__borderLeftColor = d;
  }
  setPadding(e) {
    const r = this.getWritable();
    r.__paddingTop = e[0], r.__paddingRight = e[1], r.__paddingBottom = e[2], r.__paddingLeft = e[3];
  }
}
const ro = (t = {}) => {
  const {
    url: n,
    text: e,
    backgroundColor: r,
    color: o,
    fontSize: a,
    borderRadius: c,
    borderLeftWidth: s,
    borderRightWidth: l,
    borderTopWidth: d,
    borderBottomWidth: u,
    borderLeftColor: b,
    borderRightColor: f,
    borderTopColor: y,
    borderBottomColor: _,
    paddingTop: x,
    paddingRight: m,
    paddingBottom: C,
    paddingLeft: g
  } = t;
  return new yt(
    n,
    e,
    r,
    o,
    a,
    c,
    s,
    l,
    d,
    u,
    b,
    f,
    y,
    _,
    x,
    m,
    C,
    g
  );
}, on = (t) => t instanceof yt;
var an = /* @__PURE__ */ ((t) => (t[t.increment = 1] = "increment", t[t.decrement = 2] = "decrement", t))(an || {});
const oo = (t, n) => {
  if (!n)
    return t;
  let e = t;
  switch (n) {
    case 2:
      switch (!0) {
        case t > Ze:
          e = Ze;
          break;
        case t >= 48:
          e -= 12;
          break;
        case t >= 24:
          e -= 4;
          break;
        case t >= 14:
          e -= 2;
          break;
        case t >= 9:
          e -= 1;
          break;
        default:
          e = Ye;
          break;
      }
      break;
    case 1:
      switch (!0) {
        case t < Ye:
          e = Ye;
          break;
        case t < 12:
          e += 1;
          break;
        case t < 20:
          e += 2;
          break;
        case t < 36:
          e += 4;
          break;
        case t <= 60:
          e += 12;
          break;
        default:
          e = Ze;
          break;
      }
      break;
  }
  return e;
}, sn = (t, n, e, r) => {
  const o = (a) => (a || (a = `${fa}px`), a = a.slice(0, -2), `${oo(
    Number(a),
    e
  )}px`);
  t.update(() => {
    if (t.isEditable())
      if (r) {
        const a = Pe(t), c = (n || o(`${a.getFontSize()}px`)).slice(0, -2);
        a.setFontSize(c), t.dispatchCommand(no, Number(c));
      } else {
        const a = Q();
        a !== null && Dr(a, {
          "font-size": n || o
        });
      }
  });
};
function ar(t, n, e, r = !1) {
  if (e !== "") {
    const o = oo(Number(e), n);
    sn(t, String(o) + "px", null, r);
  } else
    sn(t, null, n, r);
}
const Ya = (t) => {
  t.update(() => {
    const n = Q(), e = Ve(n), r = Ve(n, !1, !0), o = e || r || null;
    if (o !== null) {
      const a = ie();
      o.replace(a), a.selectEnd();
    } else
      Br(n, () => ie());
  });
}, ir = (t, n = "image") => {
  t.update(() => {
    const e = Q();
    if (e === null)
      return;
    const r = vn(e), o = e.getNodes(), a = r ? Za(r, sr) : !1;
    a && o.indexOf(a) === -1 && o.push(a);
    for (let c = 0; c < o.length; c++) {
      const s = o[c];
      if (!sr(s))
        continue;
      let l = null;
      if (n === "image") {
        const d = xn({});
        l = yn(), l.append(d);
      } else if (n === "button-link") {
        const d = ro({
          text: s.getTextContent().slice(0, 10),
          paddingTop: 5,
          paddingRight: 10,
          paddingBottom: 5,
          paddingLeft: 10,
          borderRadius: 5,
          backgroundColor: "#007bff",
          color: "#ffffff",
          fontSize: "16px",
          borderLeftColor: "#63a9f4",
          borderRightColor: "#63a9f4",
          borderTopColor: "#63a9f4",
          borderBottomColor: "#63a9f4",
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1
        });
        l = Cn(), l.append(d);
      }
      l !== null && (s.replace(l), l.selectEnd());
    }
  });
}, Jt = (t, n, e) => {
  n !== e && t.update(() => {
    const r = Q(), o = Ve(r), a = Ve(r, !1, !0), c = o || a || null;
    if (c !== null) {
      const s = Pn(e);
      c.replace(s), s.selectEnd();
    } else
      Br(r, () => Pn(e));
  });
};
function sr(t) {
  if (Lr(t) || !Me(t) || Nr(t))
    return !1;
  const n = t.getFirstChild(), e = n === null || Fr(n) || ue(n) || n.isInline();
  return !t.isInline() && t.canBeEmpty() && e;
}
function Za(t, n) {
  let e = t;
  for (; e !== null && e.getParent() !== null && !n(e); )
    e = e.getParentOrThrow();
  return n(e) ? e : null;
}
const vn = (t) => {
  const n = t == null ? void 0 : t.getStartEndPoints(), e = n ? n[0] : null;
  return e == null ? void 0 : e.getNode();
};
function Ve(t, n = !1, e = !1) {
  const r = vn(t);
  if (r !== void 0 && (!e && nr(r) || e && ut(r))) {
    if (n) {
      const o = r.getFirstChild();
      return o !== null && !e && rr(o) ? [r, o] : o !== null && e && on(o) ? [r, o] : [r, null];
    }
    return r;
  } else if (r === void 0 && Ge(t)) {
    const o = t.getNodes();
    if (o.length === 1 && !e && rr(o[0])) {
      const a = o[0].getParent();
      if (a !== null && nr(a))
        return n ? [a, o[0]] : a;
    } else if (o.length === 1 && e && on(o[0])) {
      const a = o[0].getParent();
      if (a !== null && ut(a))
        return n ? [a, o[0]] : a;
    }
  }
  return n ? [null, null] : null;
}
function ln(t, n, e, r, o) {
  t.update(() => {
    e.setPadding(n);
  }, {
    onUpdate: () => {
      r((a) => ({
        ...a,
        paddingTop: n[0],
        paddingRight: n[1],
        paddingBottom: n[2],
        paddingLeft: n[3]
      })), o.focus();
    }
  });
}
function ao(t) {
  const n = t.getParent();
  if (n === null)
    return;
  const e = t.getLatest(), r = $n(e), o = e.getChildren();
  r.afterCloneFrom(e), r.__next = null, r.__prev = null, r.__size = 0, r.__parent = null;
  for (let a = 0; a < o.length; a++) {
    const c = o[a];
    let s = c;
    Me(c) ? s = ao(c) : (s = $n(c), s.__next = null, s.__prev = null, s.__parent = null), s !== void 0 && r.append(s);
  }
  return n.append(r), r;
}
const Vt = (t) => {
  const n = new Image();
  return n.src = t, new Promise((e) => {
    n.onload = () => {
      e({ width: n.width, height: n.height });
    };
  });
}, De = (t) => {
  const {
    size: n,
    editor: e,
    onUpdate: r,
    name: o,
    stepBy: a = 1,
    isRoot: c = !1,
    minSize: s = Ye,
    maxSize: l = Ze
  } = t, [d, u] = _e.useState(n.slice(0, -2)), [b, f] = _e.useState(!1), y = (m) => {
    const C = Number(d);
    if (m.key !== "Tab") {
      if (["e", "E", "+", "-"].includes(m.key) || isNaN(C)) {
        m.preventDefault(), u("");
        return;
      }
      f(!0), (m.key === "Enter" || m.key === "Escape") && (m.preventDefault(), x(C));
    }
  }, _ = () => {
    if (d !== "" && b) {
      const m = Number(d);
      r ? r(m, o) : x(m);
    }
  }, x = (m) => {
    let C = m;
    m > Ze ? C = Ze : m < Ye && (C = Ye), u(String(C)), sn(e, String(C) + "px", null, c), f(!1);
  };
  return B(() => {
    u(n.slice(0, -2));
  }, [n]), /* @__PURE__ */ i.jsxs("div", { className: "content-width-box", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "content-width-input", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          value: d,
          step: a,
          min: s,
          max: l,
          onKeyDown: y,
          onBlur: _,
          onChange: (m) => {
            u(m.target.value);
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { children: "px" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "content-width-adjuster", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            r !== void 0 ? (r(Number(d) - a, o), u((m) => Number(m) - a + "")) : ar(e, an.decrement, d, c);
          },
          children: "-"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            r !== void 0 ? (r(Number(d) + a, o), u((m) => Number(m) + a + "")) : ar(e, an.increment, d, c);
          },
          children: "+"
        }
      )
    ] })
  ] });
};
function Tt({ show: t, onClick: n, formatElement: e, active: r }) {
  return t ? /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: `text-format-button ${r ? "active" : ""}`,
      onClick: () => {
        n(e);
      },
      children: /* @__PURE__ */ i.jsx("i", { className: `format ${e}-align` })
    }
  ) : null;
}
function io({
  currentActive: t,
  onClick: n,
  showAlignments: e = ["left", "center", "right", "justify"]
}) {
  return /* @__PURE__ */ i.jsxs("div", { className: "text-format-box", children: [
    /* @__PURE__ */ i.jsx(
      Tt,
      {
        show: e.includes("left"),
        onClick: n,
        formatElement: "left",
        active: t === "left"
      }
    ),
    /* @__PURE__ */ i.jsx(
      Tt,
      {
        show: e.includes("center"),
        onClick: n,
        formatElement: "center",
        active: t === "center"
      }
    ),
    /* @__PURE__ */ i.jsx(
      Tt,
      {
        show: e.includes("right"),
        onClick: n,
        formatElement: "right",
        active: t === "right"
      }
    ),
    /* @__PURE__ */ i.jsx(
      Tt,
      {
        show: e.includes("justify"),
        onClick: n,
        formatElement: "justify",
        active: t === "justify"
      }
    )
  ] });
}
const Ja = ({ editor: t }) => {
  const [n, e] = j({
    layoutWidth: Ur,
    color: zr,
    fontSize: Hr,
    backgroundColor: Kr,
    fontFamily: Gr,
    lineHeight: Yr,
    alignItems: Zr
  }), r = M((s, l, d = "color") => {
    t.update(() => {
      const u = Pe(t);
      d === "color" ? u.setColor(s) : u.setBackgroundColor(s);
    }, {
      ...l ? { tag: "historic" } : {},
      onUpdate: () => {
        e((u) => ({
          ...u,
          [d === "color" ? "color" : "backgroundColor"]: s
        }));
      }
    });
  }, [t]), o = M((s) => {
    t.update(() => {
      Pe(t).setAlignItems(s === "center" ? "center" : "start"), lt(null);
    }, {
      onUpdate: () => {
        e((l) => ({ ...l, alignItems: s }));
      }
    });
  }, [t]), a = M((s) => {
    t.update(() => {
      Pe(t).setLayoutWidth(s), lt(null);
    }, {
      onUpdate: () => {
        e((l) => ({ ...l, layoutWidth: s }));
      }
    });
  }, [t]), c = M((s) => (e((l) => ({ ...l, fontSize: s })), !0), []);
  return B(() => {
    let s = {};
    return t.read(() => {
      s = Pe(t).getState(), e((d) => ({ ...d, ...s }));
    }), se(
      t.registerCommand(
        no,
        c,
        ce
      )
    );
  }, [t, c]), /* @__PURE__ */ i.jsx("div", { className: "body-layout-box", children: /* @__PURE__ */ i.jsxs("dl", { children: [
    /* @__PURE__ */ i.jsx("dt", { children: "Text Color" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      Ee,
      {
        color: n.color,
        name: "color",
        onChange: r
      }
    ) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Background Color" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      Ee,
      {
        color: n.backgroundColor,
        name: "bg",
        onChange: r
      }
    ) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Font Size" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      De,
      {
        size: `${n.fontSize}px`,
        editor: t,
        isRoot: !0
      }
    ) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Content Alignment" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      io,
      {
        currentActive: n.alignItems === "center" ? "center" : "left",
        showAlignments: ["left", "center"],
        onClick: o
      }
    ) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Content Width" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      De,
      {
        size: `${n.layoutWidth}px`,
        editor: t,
        onUpdate: a,
        minSize: 320,
        maxSize: 1e3,
        stepBy: 20
      }
    ) })
  ] }) });
}, Va = [
  { key: "paddingLeft", label: "Left" },
  { key: "paddingRight", label: "Right" },
  { key: "paddingTop", label: "Top" },
  { key: "paddingBottom", label: "Bottom" }
], cn = ({ padding: t, onUpdate: n }) => {
  const [e, r] = _e.useState({
    paddingTop: t[0],
    paddingRight: t[1],
    paddingBottom: t[2],
    paddingLeft: t[3]
  }), o = (a, c) => {
    const { value: s } = a.target, l = { ...e, [c]: Number(s) };
    r(l), n([l.paddingTop, l.paddingRight, l.paddingBottom, l.paddingLeft], a.target);
  };
  return B(() => {
    r({
      paddingTop: t[0],
      paddingRight: t[1],
      paddingBottom: t[2],
      paddingLeft: t[3]
    });
  }, [t]), /* @__PURE__ */ i.jsxs("div", { className: "padding-adjuster", children: [
    Va.map((a) => /* @__PURE__ */ i.jsxs("div", { className: "range-input-box", children: [
      /* @__PURE__ */ i.jsxs("label", { children: [
        a.label,
        /* @__PURE__ */ i.jsxs("span", { children: [
          "(",
          e[a.key],
          "px)"
        ] })
      ] }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "range",
          min: "0",
          max: "75",
          step: "1",
          value: e[a.key],
          list: "padding-ticks",
          onChange: (c) => {
            o(c, a.key);
          }
        }
      )
    ] }, a.key)),
    /* @__PURE__ */ i.jsxs("datalist", { id: "padding-ticks", children: [
      /* @__PURE__ */ i.jsx("option", { value: "0" }),
      /* @__PURE__ */ i.jsx("option", { value: "25" }),
      /* @__PURE__ */ i.jsx("option", { value: "50" }),
      /* @__PURE__ */ i.jsx("option", { value: "75" })
    ] })
  ] });
}, so = ({ onDelete: t, onClose: n, children: e }) => /* @__PURE__ */ i.jsxs("div", { className: "column-layout-box", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "column-layout-box-header", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "column-layout-action-button", onClick: t, children: /* @__PURE__ */ i.jsx("i", { className: "action trash" }) }),
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "column-layout-action-button", onClick: n, children: /* @__PURE__ */ i.jsx("i", { className: "action xmark" }) })
  ] }),
  e
] }), qa = ({ editor: t, node: n, onClose: e, onDelete: r }) => {
  const [o, a] = j({}), c = M((d) => {
    const u = d.split(" ").length;
    t.update(() => {
      const b = n.getFirstChild();
      if (nn(b)) {
        b.setTemplateColumns(d);
        const f = b.getChildren();
        if (f.length > u)
          f.slice(u).forEach((y) => y.remove());
        else if (f.length < u)
          for (let y = f.length; y < u; y++) {
            const _ = Ot(), x = ie();
            _.append(x), b.append(_);
          }
      }
    }, {
      onUpdate: () => {
        a((b) => ({ ...b, templateColumns: d }));
      }
    });
  }, [t, n]), s = M((d, u) => {
    t.update(() => {
      n.setBackgroundColor(d);
    }, {
      onUpdate: () => {
        a((b) => ({
          ...b,
          backgroundColor: d
        }));
      },
      ...u ? { tag: "historic" } : {}
    });
  }, [t, n]), l = M((d, u) => {
    ln(t, d, n, a, u);
  }, [t, n]);
  return B(() => {
    const d = t.getElementByKey(n.getKey());
    let u = { templateColumns: "1fr" };
    return t.read(() => {
      u = n.getState();
      const b = n.getFirstChild();
      nn(b) && (u.templateColumns = b.getTemplateColumns());
    }), a(u), d == null || d.classList.add("selected"), () => {
      d == null || d.classList.remove("selected");
    };
  }, [t, n]), /* @__PURE__ */ i.jsx(so, { onDelete: r, onClose: e, children: /* @__PURE__ */ i.jsxs("dl", { children: [
    /* @__PURE__ */ i.jsx("dt", { children: "Copy to New Block" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "button button-primary",
        onClick: () => {
          t.update(() => {
            ao(n);
          });
        },
        children: "Copy"
      }
    ) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Layout" }),
    /* @__PURE__ */ i.jsx("dd", { style: { gridColumnStart: 1, gridColumnEnd: 3 }, children: /* @__PURE__ */ i.jsx("div", { className: "layout-picker-box", children: ma.map((d, u) => /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `layout-picker ${d.value === o.templateColumns ? "active" : ""}`,
        onClick: () => {
          c(d.value);
        },
        style: {
          gridTemplateColumns: d.value,
          pointerEvents: d.value === o.templateColumns ? "none" : "auto"
        },
        children: d.label.map((b, f) => /* @__PURE__ */ i.jsx("div", { className: "layout-picker-item", children: b }, f))
      },
      u
    )) }) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Background Color" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      Ee,
      {
        color: o.backgroundColor || "",
        onChange: s
      }
    ) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Padding" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      cn,
      {
        padding: [o.paddingTop || 0, o.paddingRight || 0, o.paddingBottom || 0, o.paddingLeft || 0],
        onUpdate: l
      }
    ) })
  ] }) });
}, Ke = ({
  children: t,
  className: n,
  onClick: e,
  title: r
}) => {
  const o = ee(null), a = _e.useContext(eo);
  if (a === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: c } = a;
  return B(() => {
    o && o.current && c(o);
  }, [c]), /* @__PURE__ */ i.jsx(
    "button",
    {
      className: n,
      onClick: e,
      ref: o,
      title: r,
      type: "button",
      children: t
    }
  );
}, qe = (t) => {
  const n = t.anchor, e = t.focus, r = t.anchor.getNode(), o = t.focus.getNode();
  return r === o ? r : t.isBackward() ? Dn(e) ? r : o : Dn(n) ? r : o;
}, Xa = [
  { key: "borderTopWidth", label: "Top", colorKey: "borderTopColor" },
  { key: "borderRightWidth", label: "Right", colorKey: "borderRightColor" },
  { key: "borderBottomWidth", label: "Bottom", colorKey: "borderBottomColor" },
  { key: "borderLeftWidth", label: "Left", colorKey: "borderLeftColor" }
], lr = ({ border: t, onUpdate: n }) => {
  const [e, r] = j({
    borderTopWidth: t[0][0],
    borderTopColor: t[0][1],
    borderRightWidth: t[1][0],
    borderRightColor: t[1][1],
    borderBottomWidth: t[2][0],
    borderBottomColor: t[2][1],
    borderLeftWidth: t[3][0],
    borderLeftColor: t[3][1]
  }), o = (a, c) => {
    const { value: s } = a.target, l = { ...e, [c]: Number(s) };
    r(l), n([
      [l.borderTopWidth, l.borderTopColor],
      [l.borderRightWidth, l.borderRightColor],
      [l.borderBottomWidth, l.borderBottomColor],
      [l.borderLeftWidth, l.borderLeftColor]
    ], a.target);
  };
  return B(() => {
    r({
      borderTopWidth: t[0][0],
      borderTopColor: t[0][1],
      borderRightWidth: t[1][0],
      borderRightColor: t[1][1],
      borderBottomWidth: t[2][0],
      borderBottomColor: t[2][1],
      borderLeftWidth: t[3][0],
      borderLeftColor: t[3][1]
    });
  }, [t]), /* @__PURE__ */ i.jsx("div", { className: "border-adjuster", children: Xa.map((a) => /* @__PURE__ */ i.jsxs("div", { className: "range-input-box", children: [
    /* @__PURE__ */ i.jsxs("label", { children: [
      a.label,
      /* @__PURE__ */ i.jsxs("span", { children: [
        "(",
        e[a.key],
        "px)"
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "range",
        min: "0",
        max: "75",
        step: "1",
        value: e[a.key],
        list: "border-ticks",
        onChange: (c) => {
          o(c, a.key);
        }
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ee,
      {
        buttonClassName: "color-picker",
        color: e[a.colorKey],
        onChange: (c, s, l, d) => {
          const u = { ...e, [a.key.replace("Width", "Color")]: c };
          r(u), n([
            [u.borderTopWidth, u.borderTopColor],
            [u.borderRightWidth, u.borderRightColor],
            [u.borderBottomWidth, u.borderBottomColor],
            [u.borderLeftWidth, u.borderLeftColor]
          ], d);
        }
      }
    )
  ] }, a.key)) });
};
function Qa({
  accept: t,
  label: n,
  onChange: e
}) {
  return /* @__PURE__ */ i.jsx("div", { className: "Input__wrapper", children: /* @__PURE__ */ i.jsxs("label", { className: "Input__label", children: [
    n,
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "file",
        accept: t,
        className: "Input__input file",
        onChange: (r) => e(r.target.files)
      }
    )
  ] }) });
}
const ei = ({ editor: t, node: n, onClose: e, imageUploadCallback: r }) => {
  const [o, a] = j({}), [c, s] = j({
    isBold: !1,
    isItalic: !1,
    isUnderline: !1,
    isStrikethrough: !1,
    color: "inherit",
    backgroundColor: "transparent",
    blockType: "custom-paragraph",
    fontSize: "",
    formatElement: "left"
  }), [l, d] = j({}), [u, b] = j(null), [f, y] = j(null), [_, x] = j({}), [m, C] = _e.useState(!1), g = _e.useRef(!1), h = M(() => {
    const E = Q(), [L, O] = Ve(E, !0, !0);
    if (L) {
      const te = L.getFormatType() || "left";
      s((V) => ({
        ...V,
        blockType: "button-link-block",
        formatElement: te
      }));
    }
    O && (f === null || f.getKey() !== O.getKey()) ? (y(O), x(O.getState())) : O === null && (y(null), x({}));
    const [W, P] = Ve(E, !0);
    if (W) {
      const te = W.getFormatType() || "left";
      s((V) => ({
        ...V,
        blockType: "image-block",
        formatElement: te
      }));
    }
    if (P && (!u || u.getKey() !== P.getKey()) ? (b(P), d(P.getState())) : P || (b(null), d({})), re(E)) {
      const te = Pe(t), V = E.anchor.getNode();
      let oe = V.getKey() === "root" ? V : Ae(V, (de) => {
        const $e = de.getParent();
        return $e !== null && Nr($e);
      });
      oe === null && (oe = V.getTopLevelElementOrThrow());
      const Ce = oe.getKey(), he = t.getElementByKey(Ce), le = qe(E), fe = le.getParent();
      let me = "custom-paragraph", ve = `${te.getFontSize()}px`;
      if (he !== null) {
        const de = ra(oe), $e = de ? oe.getTag() : oe.getType();
        de && (ve = window.getComputedStyle(he, null).getPropertyValue("font-size") || ve), me = $e;
      }
      let Te;
      ke(fe) && (Te = Ae(
        le,
        (de) => Me(de) && !de.isInline()
      ));
      const Ie = Me(Te) ? Te.getFormatType() : Me(le) ? le.getFormatType() : (fe == null ? void 0 : fe.getFormatType()) || "left", Bt = Ht(E, "color", "inherit"), Ue = Ht(E, "background-color", "transparent"), je = Ht(E, "font-size", ve);
      s((de) => ({
        ...de,
        isBold: E.hasFormat("bold"),
        isItalic: E.hasFormat("italic"),
        isUnderline: E.hasFormat("underline"),
        isStrikethrough: E.hasFormat("strikethrough"),
        formatElement: Ie,
        color: Bt,
        backgroundColor: Ue,
        blockType: me,
        fontSize: je
      }));
    }
  }, [t, u, f]), v = M(
    ({ width: E, height: L }) => (d((O) => ({
      ...O,
      width: E,
      height: L
    })), !0),
    []
  ), k = M((E, L, O = "color", W) => {
    t.update(() => {
      const P = Q();
      P !== null && Dr(P, { [O]: E });
    }, {
      ...L ? { tag: "historic" } : {},
      onUpdate: () => {
        W == null || W.focus();
      }
    });
  }, [t]), w = M((E, L) => {
    t.update(() => {
      n.setBackgroundColor(E);
    }, {
      ...L ? { tag: "historic" } : {},
      onUpdate: () => {
        a((O) => ({
          ...O,
          backgroundColor: E
        }));
      }
    });
  }, [t, n]), S = M((E, L) => {
    ln(t, E, n, a, L);
  }, [t, n]), N = M((E, L) => {
    f && ln(t, E, f, x, L);
  }, [t, f]), A = M((E, L, O = "color") => {
    t.update(() => {
      f && (O === "color" ? f.setColor(E) : f.setBackgroundColor(E));
    }, {
      ...L ? { tag: "historic" } : {},
      onUpdate: () => {
        x((W) => ({
          ...W,
          [O]: E
        }));
      }
    });
  }, [t, f]), z = M((E, L) => {
    if (L !== "width" && L !== "height" || u === null)
      return;
    const O = L === "width" ? E : l.width, W = L === "height" ? E : l.height;
    t.update(() => {
      u.setWidthAndHeight(O || "100%", W || "100%");
    }, {
      onUpdate: () => {
        d((P) => ({
          ...P,
          width: O,
          height: W
        }));
      }
    });
  }, [t, l, u]), $ = M(() => {
    t.update(() => {
      if (!n.isEmpty()) {
        const E = Q(), L = vn(E);
        if (L && !qr(L) && n.isParentOf(L) ? L.getTopLevelElementOrThrow().remove() : Ge(E) && E.getNodes().forEach((O) => {
          O.remove();
        }), n.isEmpty()) {
          const O = ie();
          n.append(O), O.selectEnd();
        }
      }
    });
  }, [t, n]);
  B(() => (g.current || (g.current = !0, t.read(() => {
    h();
  })), se(
    t.registerUpdateListener(({ editorState: E }) => {
      E.read(() => {
        h();
      });
    }),
    t.registerCommand(
      Ft,
      () => (h(), !1),
      ce
    ),
    t.registerCommand(
      Ha,
      v,
      ce
    )
  )), [t, h, v]), B(() => {
    t.read(() => {
      a(n.getState());
    });
    const E = t.getElementByKey(n.getKey());
    return E == null || E.classList.add("selected"), () => {
      E == null || E.classList.remove("selected");
    };
  }, [t, n]);
  const H = (E) => {
    const { name: L, value: O, checked: W } = E.target;
    d((P) => ({
      ...P,
      [L]: L === "width" || L === "height" ? Number(O) : L === "showCaption" ? W : O
    })), L === "showCaption" ? t.update(() => {
      u && u.setShowCaption(W);
    }) : C(!0);
  }, K = (E) => {
    const { name: L, value: O } = E.target;
    x((W) => ({
      ...W,
      [L]: O
    })), C(!0);
  }, J = (E) => {
    if (!u || !m)
      return;
    const { name: L } = E.target;
    t.update(() => {
      switch (L) {
        case "src":
          u.setSrc(l.src || "");
          break;
        case "altText":
          u.setAltText(l.altText || "");
          break;
        case "caption":
          u.setCaption(l.caption || "");
          break;
      }
    }, {
      onUpdate: () => {
        C(!1);
      }
    }), L === "src" && Vt(l.src || "").then(({ width: O, height: W }) => {
      t.update(() => {
        u && u.setWidthAndHeight(O, W);
      }, {
        onUpdate: () => {
          d((P) => ({
            ...P,
            width: O,
            height: W
          }));
        }
      });
    });
  }, xe = (E) => {
    if (!f || !m)
      return;
    const { name: L } = E.target;
    t.update(() => {
      switch (L) {
        case "url":
          f.setUrl(_.url || "");
          break;
        case "text":
          f.setText(_.text || "");
          break;
      }
    }, {
      onUpdate: () => {
        C(!1);
      }
    });
  }, We = M((E, L) => {
    t.update(() => {
      n.setBorder(
        E[0][0],
        E[0][1],
        E[1][0],
        E[1][1],
        E[2][0],
        E[2][1],
        E[3][0],
        E[3][1]
      );
    }, {
      onUpdate: () => {
        a((O) => ({
          ...O,
          borderTopWidth: E[0][0],
          borderTopColor: E[0][1],
          borderRightWidth: E[1][0],
          borderRightColor: E[1][1],
          borderBottomWidth: E[2][0],
          borderBottomColor: E[2][1],
          borderLeftWidth: E[3][0],
          borderLeftColor: E[3][1]
        })), L == null || L.focus();
      },
      discrete: !0
    });
  }, [t, n]), Oe = (E) => {
    const L = new FileReader();
    L.onload = function() {
      if (typeof L.result == "string" && E !== null) {
        const O = L.result;
        r !== void 0 ? r(E[0], O, (W) => {
          Vt(W).then(({ width: P, height: te }) => {
            t.update(() => {
              u && (u.setSrc(W), u.setWidthAndHeight(P, te));
            }, {
              onUpdate: () => {
                d((V) => ({
                  ...V,
                  src: W,
                  width: P,
                  height: te
                }));
              }
            });
          });
        }) : Vt(O).then(({ width: W, height: P }) => {
          t.update(() => {
            u && (u.setSrc(O), u.setWidthAndHeight(W, P));
          }, {
            onUpdate: () => {
              d((te) => ({
                ...te,
                src: O,
                width: W,
                height: P
              }));
            }
          });
        });
      }
      return "";
    }, E !== null && L.readAsDataURL(E[0]);
  };
  return /* @__PURE__ */ i.jsx(so, { onDelete: $, onClose: e, children: /* @__PURE__ */ i.jsxs("dl", { children: [
    /* @__PURE__ */ i.jsx("dt", { children: "Block" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsxs(
      to,
      {
        buttonClassName: "toolbar-item block-controls",
        buttonLabel: ba[c.blockType],
        buttonAriaLabel: "Block Type",
        children: [
          /* @__PURE__ */ i.jsx(
            Ke,
            {
              className: `item wide ${c.blockType === "custom-paragraph" ? " active" : ""}`,
              onClick: () => {
                Ya(t);
              },
              children: /* @__PURE__ */ i.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ i.jsx("i", { className: "icon custom-paragraph-block" }),
                /* @__PURE__ */ i.jsx("span", { className: "text", children: "Paragraph" })
              ] })
            }
          ),
          /* @__PURE__ */ i.jsx(
            Ke,
            {
              className: `item wide ${c.blockType === "h1" ? " active" : ""}`,
              onClick: () => {
                Jt(t, c.blockType, "h1");
              },
              children: /* @__PURE__ */ i.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ i.jsx("i", { className: "icon h1-block" }),
                /* @__PURE__ */ i.jsx("span", { className: "text", children: "Heading 1" })
              ] })
            }
          ),
          /* @__PURE__ */ i.jsx(
            Ke,
            {
              className: `item wide ${c.blockType === "h2" ? " active" : ""}`,
              onClick: () => {
                Jt(t, c.blockType, "h2");
              },
              children: /* @__PURE__ */ i.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ i.jsx("i", { className: "icon h2-block" }),
                /* @__PURE__ */ i.jsx("span", { className: "text", children: "Heading 2" })
              ] })
            }
          ),
          /* @__PURE__ */ i.jsx(
            Ke,
            {
              className: `item wide ${c.blockType === "h3" ? " active" : ""}`,
              onClick: () => {
                Jt(t, c.blockType, "h3");
              },
              children: /* @__PURE__ */ i.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ i.jsx("i", { className: "icon h3-block" }),
                /* @__PURE__ */ i.jsx("span", { className: "text", children: "Heading 3" })
              ] })
            }
          ),
          /* @__PURE__ */ i.jsx(
            Ke,
            {
              className: `item wide ${c.blockType === "image-block" ? " active" : ""}`,
              onClick: () => {
                ir(t);
              },
              children: /* @__PURE__ */ i.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ i.jsx("i", { className: "icon image-block" }),
                /* @__PURE__ */ i.jsx("span", { className: "text", children: "Image" })
              ] })
            }
          ),
          /* @__PURE__ */ i.jsx(
            Ke,
            {
              className: `item wide ${c.blockType === "button-link-block" ? " active" : ""}`,
              onClick: () => {
                ir(t, "button-link");
              },
              children: /* @__PURE__ */ i.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ i.jsx("i", { className: "icon button-link" }),
                /* @__PURE__ */ i.jsx("span", { className: "text", children: "Button" })
              ] })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Alignment" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      io,
      {
        currentActive: c.formatElement || "left",
        onClick: (E) => {
          t.dispatchCommand(Ko, E);
        }
      }
    ) }),
    _a.includes(c.blockType) ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("dt", { children: "Font Size" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(De, { editor: t, size: c.fontSize }) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Text Format" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsxs("div", { className: "text-format-box", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: `text-format-button ${c.isBold ? "active" : ""}`,
            onClick: () => {
              t.dispatchCommand(Le, "bold");
            },
            children: /* @__PURE__ */ i.jsx("i", { className: "format bold" })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: `text-format-button ${c.isItalic ? "active" : ""}`,
            onClick: () => {
              t.dispatchCommand(Le, "italic");
            },
            children: /* @__PURE__ */ i.jsx("i", { className: "format italic" })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: `text-format-button ${c.isUnderline ? "active" : ""}`,
            onClick: () => {
              t.dispatchCommand(Le, "underline");
            },
            children: /* @__PURE__ */ i.jsx("i", { className: "format underline" })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: `text-format-button ${c.isStrikethrough ? "active" : ""}`,
            onClick: () => {
              t.dispatchCommand(Le, "strikethrough");
            },
            children: /* @__PURE__ */ i.jsx("i", { className: "format strikethrough" })
          }
        )
      ] }) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Font Color" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        Ee,
        {
          color: c.color,
          name: "color",
          onChange: k
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Font Background Color" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        Ee,
        {
          color: c.backgroundColor,
          name: "background-color",
          onChange: k
        }
      ) })
    ] }) : c.blockType === "image-block" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("dt", {}),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        Qa,
        {
          label: "Upload Image",
          accept: "image/*",
          onChange: Oe
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "URL" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        "input",
        {
          name: "src",
          value: l.src,
          onChange: H,
          onBlur: J
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Alt Text" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        "input",
        {
          name: "altText",
          value: l.altText,
          onChange: H,
          onBlur: J
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Width" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        De,
        {
          name: "width",
          size: `${l.width}px`,
          editor: t,
          onUpdate: z
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Height" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        De,
        {
          name: "height",
          size: `${l.height}px`,
          editor: t,
          onUpdate: z
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Show Caption" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          name: "showCaption",
          checked: l.showCaption,
          onChange: H
        }
      ) }),
      l.showCaption && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Caption" }),
        /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
          "input",
          {
            name: "caption",
            value: l.caption,
            onChange: H,
            onBlur: J
          }
        ) })
      ] })
    ] }) : c.blockType === "button-link-block" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("dt", { children: "URL" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        "input",
        {
          name: "url",
          value: _.url,
          onChange: K,
          onBlur: xe
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Text" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        "input",
        {
          name: "text",
          value: _.text,
          onChange: K,
          onBlur: xe
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Font Size" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(De, { editor: t, size: _.fontSize || "" }) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Font Color" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        Ee,
        {
          name: "color",
          color: _.color || "",
          onChange: A
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Button Background Color" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        Ee,
        {
          name: "backgroundColor",
          color: _.backgroundColor || "",
          onChange: A
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Padding" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        cn,
        {
          padding: [
            _.paddingTop || 0,
            _.paddingRight || 0,
            _.paddingBottom || 0,
            _.paddingLeft || 0
          ],
          onUpdate: N
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Border Radius" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        De,
        {
          editor: t,
          size: `${_.borderRadius || 0}px`,
          onUpdate: (E) => {
            t.update(() => {
              f == null || f.setBorderRadius(E);
            }, {
              onUpdate: () => {
                x((L) => ({
                  ...L,
                  borderRadius: E
                }));
              }
            });
          }
        }
      ) }),
      /* @__PURE__ */ i.jsx("dt", { children: "Border" }),
      /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
        lr,
        {
          border: [
            [_.borderTopWidth || 0, _.borderTopColor || "transparent"],
            [_.borderRightWidth || 0, _.borderRightColor || "transparent"],
            [_.borderBottomWidth || 0, _.borderBottomColor || "transparent"],
            [_.borderLeftWidth || 0, _.borderLeftColor || "transparent"]
          ],
          onUpdate: (E, L) => {
            t.update(() => {
              f == null || f.setBorder(
                E[0][0],
                E[0][1],
                E[1][0],
                E[1][1],
                E[2][0],
                E[2][1],
                E[3][0],
                E[3][1]
              );
            }, {
              onUpdate: () => {
                x((O) => ({
                  ...O,
                  borderTopWidth: E[0][0],
                  borderTopColor: E[0][1],
                  borderRightWidth: E[1][0],
                  borderRightColor: E[1][1],
                  borderBottomWidth: E[2][0],
                  borderBottomColor: E[2][1],
                  borderLeftWidth: E[3][0],
                  borderLeftColor: E[3][1]
                })), L == null || L.focus();
              },
              discrete: !0
            });
          }
        }
      ) })
    ] }) : null,
    /* @__PURE__ */ i.jsx("dt", { children: "Background Color" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      Ee,
      {
        color: o.backgroundColor || "transparent",
        onChange: w
      }
    ) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Padding" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      cn,
      {
        padding: [o.paddingTop || 0, o.paddingRight || 0, o.paddingBottom || 0, o.paddingLeft || 0],
        onUpdate: S
      }
    ) }),
    /* @__PURE__ */ i.jsx("dt", { children: "Border" }),
    /* @__PURE__ */ i.jsx("dd", { children: /* @__PURE__ */ i.jsx(
      lr,
      {
        border: [
          [o.borderTopWidth || 0, o.borderTopColor || "transparent"],
          [o.borderRightWidth || 0, o.borderRightColor || "transparent"],
          [o.borderBottomWidth || 0, o.borderBottomColor || "transparent"],
          [o.borderLeftWidth || 0, o.borderLeftColor || "transparent"]
        ],
        onUpdate: We
      }
    ) })
  ] }) });
};
function ti({
  editor: t,
  anchorElem: n,
  imageUploadCallback: e
}) {
  const [r, o] = j(null), [a, c] = j(null), s = M((f) => {
    const y = t.getRootElement();
    let _ = f.target;
    for (; y !== _ && _ !== null; ) {
      const x = _.getAttribute("data-key");
      if (x) {
        let m = null;
        if (t.read(() => {
          m = it(x);
        }), _n(m)) {
          o(m), c(null), t.update(() => {
            lt(null);
          });
          return;
        } else if (qr(m)) {
          o(null), c(m);
          return;
        }
      }
      _ = _.parentElement;
    }
  }, [t]), l = M(() => {
    c(null);
  }, []), d = M(() => {
    o(null);
  }, []), u = M(() => {
    r && (t.update(() => {
      r.remove();
    }), o(null));
  }, [t, r]);
  B(() => t.registerRootListener((f, y) => {
    y !== null && y.removeEventListener("click", s), f !== null && f.addEventListener("click", s);
  }), [t, s]);
  const b = we(() => r ? /* @__PURE__ */ i.jsx(
    qa,
    {
      editor: t,
      node: r,
      onClose: d,
      onDelete: u
    }
  ) : a ? /* @__PURE__ */ i.jsx(
    ei,
    {
      editor: t,
      node: a,
      onClose: l,
      imageUploadCallback: e
    }
  ) : /* @__PURE__ */ i.jsx(Ja, { editor: t }), [r, a, t, d, u, l]);
  return /* @__PURE__ */ i.jsxs("div", { className: "sidebar", children: [
    /* @__PURE__ */ i.jsx("div", { className: "sidebar-content", children: b }),
    /* @__PURE__ */ i.jsx(ja, { editor: t, anchorElem: n })
  ] });
}
function un(t, n) {
  return un = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, un(t, n);
}
var cr = { error: null }, ni = function(t) {
  var n, e;
  function r() {
    for (var a, c = arguments.length, s = new Array(c), l = 0; l < c; l++) s[l] = arguments[l];
    return (a = t.call.apply(t, [this].concat(s)) || this).state = cr, a.resetErrorBoundary = function() {
      for (var d, u = arguments.length, b = new Array(u), f = 0; f < u; f++) b[f] = arguments[f];
      a.props.onReset == null || (d = a.props).onReset.apply(d, b), a.reset();
    }, a;
  }
  e = t, (n = r).prototype = Object.create(e.prototype), n.prototype.constructor = n, un(n, e), r.getDerivedStateFromError = function(a) {
    return { error: a };
  };
  var o = r.prototype;
  return o.reset = function() {
    this.setState(cr);
  }, o.componentDidCatch = function(a, c) {
    var s, l;
    (s = (l = this.props).onError) == null || s.call(l, a, c);
  }, o.componentDidUpdate = function(a, c) {
    var s, l, d, u, b = this.state.error, f = this.props.resetKeys;
    b !== null && c.error !== null && ((d = a.resetKeys) === void 0 && (d = []), (u = f) === void 0 && (u = []), d.length !== u.length || d.some(function(y, _) {
      return !Object.is(y, u[_]);
    })) && ((s = (l = this.props).onResetKeysChange) == null || s.call(l, a.resetKeys, f), this.reset());
  }, o.render = function() {
    var a = this.state.error, c = this.props, s = c.fallbackRender, l = c.FallbackComponent, d = c.fallback;
    if (a !== null) {
      var u = { error: a, resetErrorBoundary: this.resetErrorBoundary };
      if (At.isValidElement(d)) return d;
      if (typeof s == "function") return s(u);
      if (l) return At.createElement(l, u);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, r;
}(At.Component);
function ri({ children: t, onError: n }) {
  return i.jsx(ni, { fallback: i.jsx("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: n, children: t });
}
const oi = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? dt : B;
function ai(t) {
  return { initialValueFn: () => t.isEditable(), subscribe: (n) => t.registerEditableListener(n) };
}
function ii() {
  return function(t) {
    const [n] = ye(), e = we(() => t(n), [n, t]), r = ee(e.initialValueFn()), [o, a] = j(r.current);
    return oi(() => {
      const { initialValueFn: c, subscribe: s } = e, l = c();
      return r.current !== l && (r.current = l, a(l)), s((d) => {
        r.current = d, a(d);
      });
    }, [e, t]), o;
  }(ai);
}
function si() {
  return st().getTextContent();
}
function li(t, n = !0) {
  if (t) return !1;
  let e = si();
  return n && (e = e.trim()), e === "";
}
function ci(t) {
  if (!li(t, !1)) return !1;
  const n = st().getChildren(), e = n.length;
  if (e > 1) return !1;
  for (let r = 0; r < e; r++) {
    const o = n[r];
    if (Lr(o)) return !1;
    if (Me(o)) {
      if (!Or(o) || o.__indent !== 0) return !1;
      const a = o.getChildren(), c = a.length;
      for (let s = 0; s < c; s++) {
        const l = a[r];
        if (!ue(l)) return !1;
      }
    }
  }
  return !0;
}
function lo(t) {
  return () => ci(t);
}
function ui(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
ui(function(t) {
  const n = new URLSearchParams();
  n.append("code", t);
  for (let e = 1; e < arguments.length; e++) n.append("v", arguments[e]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${n} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function di(t) {
  const n = window.location.origin, e = (r) => {
    if (r.origin !== n) return;
    const o = t.getRootElement();
    if (document.activeElement !== o) return;
    const a = r.data;
    if (typeof a == "string") {
      let c;
      try {
        c = JSON.parse(a);
      } catch {
        return;
      }
      if (c && c.protocol === "nuanria_messaging" && c.type === "request") {
        const s = c.payload;
        if (s && s.functionId === "makeChanges") {
          const l = s.args;
          if (l) {
            const [d, u, b, f, y, _] = l;
            t.update(() => {
              const x = Q();
              if (re(x)) {
                const m = x.anchor;
                let C = m.getNode(), g = 0, h = 0;
                if (ue(C) && d >= 0 && u >= 0 && (g = d, h = d + u, x.setTextNodeRange(C, g, C, h)), g === h && b === "" || (x.insertRawText(b), C = m.getNode()), ue(C)) {
                  g = f, h = f + y;
                  const v = C.getTextContentSize();
                  g = g > v ? v : g, h = h > v ? v : h, x.setTextNodeRange(C, g, C, h);
                }
                r.stopImmediatePropagation();
              }
            });
          }
        }
      }
    }
  };
  return window.addEventListener("message", e, !0), () => {
    window.removeEventListener("message", e, !0);
  };
}
const dn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? dt : B;
function ur(t) {
  return t.getEditorState().read(lo(t.isComposing()));
}
function pi({ contentEditable: t, placeholder: n = null, ErrorBoundary: e }) {
  const [r] = ye(), o = function(a, c) {
    const [s, l] = j(() => a.getDecorators());
    return dn(() => a.registerDecoratorListener((d) => {
      na(() => {
        l(d);
      });
    }), [a]), B(() => {
      l(a.getDecorators());
    }, [a]), we(() => {
      const d = [], u = Object.keys(s);
      for (let b = 0; b < u.length; b++) {
        const f = u[b], y = i.jsx(c, { onError: (x) => a._onError(x), children: i.jsx(hn, { fallback: null, children: s[f] }) }), _ = a.getElementByKey(f);
        _ !== null && d.push(gt(y, _, f));
      }
      return d;
    }, [c, s, a]);
  }(r, e);
  return function(a) {
    dn(() => se(oa(a), di(a)), [a]);
  }(r), i.jsxs(i.Fragment, { children: [t, i.jsx(gi, { content: n }), o] });
}
function gi({ content: t }) {
  const [n] = ye(), e = function(o) {
    const [a, c] = j(() => ur(o));
    return dn(() => {
      function s() {
        const l = ur(o);
        c(l);
      }
      return s(), se(o.registerUpdateListener(() => {
        s();
      }), o.registerEditableListener(() => {
        s();
      }));
    }, [o]), a;
  }(n), r = ii();
  return e ? typeof t == "function" ? t(r) : t : null;
}
const co = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? dt : B;
function hi({ editor: t, ariaActiveDescendant: n, ariaAutoComplete: e, ariaControls: r, ariaDescribedBy: o, ariaErrorMessage: a, ariaExpanded: c, ariaInvalid: s, ariaLabel: l, ariaLabelledBy: d, ariaMultiline: u, ariaOwns: b, ariaRequired: f, autoCapitalize: y, className: _, id: x, role: m = "textbox", spellCheck: C = !0, style: g, tabIndex: h, "data-testid": v, ...k }, w) {
  const [S, N] = j(t.isEditable()), A = M(($) => {
    $ && $.ownerDocument && $.ownerDocument.defaultView ? t.setRootElement($) : t.setRootElement(null);
  }, [t]), z = we(() => /* @__PURE__ */ function(...$) {
    return (H) => {
      $.forEach((K) => {
        typeof K == "function" ? K(H) : K != null && (K.current = H);
      });
    };
  }(w, A), [A, w]);
  return co(() => (N(t.isEditable()), t.registerEditableListener(($) => {
    N($);
  })), [t]), i.jsx("div", { ...k, "aria-activedescendant": S ? n : void 0, "aria-autocomplete": S ? e : "none", "aria-controls": S ? r : void 0, "aria-describedby": o, ...a != null ? { "aria-errormessage": a } : {}, "aria-expanded": S && m === "combobox" ? !!c : void 0, ...s != null ? { "aria-invalid": s } : {}, "aria-label": l, "aria-labelledby": d, "aria-multiline": u, "aria-owns": S ? b : void 0, "aria-readonly": !S || void 0, "aria-required": f, autoCapitalize: y, className: _, contentEditable: S, "data-testid": v, id: x, ref: z, role: S ? m : void 0, spellCheck: C, style: g, tabIndex: h });
}
const fi = Nt(hi);
function dr(t) {
  return t.getEditorState().read(lo(t.isComposing()));
}
const mi = Nt(bi);
function bi(t, n) {
  const { placeholder: e, ...r } = t, [o] = ye();
  return i.jsxs(i.Fragment, { children: [i.jsx(fi, { editor: o, ...r, ref: n }), e != null && i.jsx(_i, { editor: o, content: e })] });
}
function _i({ content: t, editor: n }) {
  const e = function(c) {
    const [s, l] = j(() => dr(c));
    return co(() => {
      function d() {
        const u = dr(c);
        l(u);
      }
      return d(), se(c.registerUpdateListener(() => {
        d();
      }), c.registerEditableListener(() => {
        d();
      }));
    }, [c]), s;
  }(n), [r, o] = j(n.isEditable());
  if (dt(() => (o(n.isEditable()), n.registerEditableListener((c) => {
    o(c);
  })), [n]), !e) return null;
  let a = null;
  return typeof t == "function" ? a = t(r) : t !== null && (a = t), a === null ? null : i.jsx("div", { "aria-hidden": !0, children: a });
}
const pr = ({ className: t, ...n }) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    className: t,
    ...n,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"
      }
    )
  }
), gr = ({ className: t, ...n }) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512",
    className: t,
    ...n,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"
      }
    )
  }
), hr = ({ className: t, ...n }) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: t,
    ...n,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64L64 64l0 320 320 0 0-320z"
      }
    )
  }
), yi = Er({}), xi = () => kr(yi), St = 0, pn = 1, gn = 2, be = 0, Ci = 1, fr = 2, vi = 3, Ei = 4;
function ki(t, n, e, r, o) {
  if (t === null || e.size === 0 && r.size === 0 && !o) return be;
  const a = n._selection, c = t._selection;
  if (o) return Ci;
  if (!(re(a) && re(c) && c.isCollapsed() && a.isCollapsed())) return be;
  const s = function(C, g, h) {
    const v = C._nodeMap, k = [];
    for (const w of g) {
      const S = v.get(w);
      S !== void 0 && k.push(S);
    }
    for (const [w, S] of h) {
      if (!S) continue;
      const N = v.get(w);
      N === void 0 || Zo(N) || k.push(N);
    }
    return k;
  }(n, e, r);
  if (s.length === 0) return be;
  if (s.length > 1) {
    const C = n._nodeMap, g = C.get(a.anchor.key), h = C.get(c.anchor.key);
    return g && h && !t._nodeMap.has(g.__key) && ue(g) && g.__text.length === 1 && a.anchor.offset === 1 ? fr : be;
  }
  const l = s[0], d = t._nodeMap.get(l.__key);
  if (!ue(d) || !ue(l) || d.__mode !== l.__mode) return be;
  const u = d.__text, b = l.__text;
  if (u === b) return be;
  const f = a.anchor, y = c.anchor;
  if (f.key !== y.key || f.type !== "text") return be;
  const _ = f.offset, x = y.offset, m = b.length - u.length;
  return m === 1 && x === _ - 1 ? fr : m === -1 && x === _ + 1 ? vi : m === -1 && x === _ ? Ei : be;
}
function wi(t, n) {
  let e = Date.now(), r = be;
  return (o, a, c, s, l, d) => {
    const u = Date.now();
    if (d.has("historic")) return r = be, e = u, gn;
    const b = ki(o, a, s, l, t.isComposing()), f = (() => {
      const y = c === null || c.editor === t, _ = d.has("history-push");
      if (!_ && y && d.has("history-merge")) return St;
      if (o === null) return pn;
      const x = a._selection;
      return s.size > 0 || l.size > 0 ? _ === !1 && b !== be && b === r && u < e + n && y || s.size === 1 && function(m, C, g) {
        const h = C._nodeMap.get(m), v = g._nodeMap.get(m), k = C._selection, w = g._selection;
        return !(re(k) && re(w) && k.anchor.type === "element" && k.focus.type === "element" && w.anchor.type === "text" && w.focus.type === "text" || !ue(h) || !ue(v) || h.__parent !== v.__parent) && JSON.stringify(C.read(() => h.exportJSON())) === JSON.stringify(g.read(() => v.exportJSON()));
      }(Array.from(s)[0], o, a) ? St : pn : x !== null ? St : gn;
    })();
    return e = u, r = b, f;
  };
}
function mr(t) {
  t.undoStack = [], t.redoStack = [], t.current = null;
}
function Ti(t, n, e) {
  const r = wi(t, e);
  return se(t.registerCommand(Ir, () => (function(a, c) {
    const s = c.redoStack, l = c.undoStack;
    if (l.length !== 0) {
      const d = c.current, u = l.pop();
      d !== null && (s.push(d), a.dispatchCommand(rt, !0)), l.length === 0 && a.dispatchCommand(ot, !1), c.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: "historic" });
    }
  }(t, n), !0), vt), t.registerCommand(jr, () => (function(a, c) {
    const s = c.redoStack, l = c.undoStack;
    if (s.length !== 0) {
      const d = c.current;
      d !== null && (l.push(d), a.dispatchCommand(ot, !0));
      const u = s.pop();
      s.length === 0 && a.dispatchCommand(rt, !1), c.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: "historic" });
    }
  }(t, n), !0), vt), t.registerCommand(Go, () => (mr(n), !1), vt), t.registerCommand(Yo, () => (mr(n), t.dispatchCommand(rt, !1), t.dispatchCommand(ot, !1), !0), vt), t.registerUpdateListener(({ editorState: a, prevEditorState: c, dirtyLeaves: s, dirtyElements: l, tags: d }) => {
    const u = n.current, b = n.redoStack, f = n.undoStack, y = u === null ? null : u.editorState;
    if (u !== null && a === y) return;
    const _ = r(c, a, u, s, l, d);
    if (_ === pn) b.length !== 0 && (n.redoStack = [], t.dispatchCommand(rt, !1)), u !== null && (f.push({ ...u }), t.dispatchCommand(ot, !0));
    else if (_ === gn) return;
    n.current = { editor: t, editorState: a };
  }));
}
function Si() {
  return { current: null, redoStack: [], undoStack: [] };
}
function Ri({ delay: t, externalHistoryState: n }) {
  const [e] = ye();
  return function(r, o, a = 1e3) {
    const c = we(() => o || Si(), [o]);
    B(() => Ti(r, c, a), [a, r, c]);
  }(e, n, t), null;
}
var Ai = { exports: {} };
(function(t) {
  var n = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var e = function(r) {
    var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, a = 0, c = {}, s = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function g(h) {
          return h instanceof l ? new l(h.type, g(h.content), h.alias) : Array.isArray(h) ? h.map(g) : h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(g) {
          return Object.prototype.toString.call(g).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(g) {
          return g.__id || Object.defineProperty(g, "__id", { value: ++a }), g.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function g(h, v) {
          v = v || {};
          var k, w;
          switch (s.util.type(h)) {
            case "Object":
              if (w = s.util.objId(h), v[w])
                return v[w];
              k = /** @type {Record<string, any>} */
              {}, v[w] = k;
              for (var S in h)
                h.hasOwnProperty(S) && (k[S] = g(h[S], v));
              return (
                /** @type {any} */
                k
              );
            case "Array":
              return w = s.util.objId(h), v[w] ? v[w] : (k = [], v[w] = k, /** @type {Array} */
              /** @type {any} */
              h.forEach(function(N, A) {
                k[A] = g(N, v);
              }), /** @type {any} */
              k);
            default:
              return h;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(g) {
          for (; g; ) {
            var h = o.exec(g.className);
            if (h)
              return h[1].toLowerCase();
            g = g.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(g, h) {
          g.className = g.className.replace(RegExp(o, "gi"), ""), g.classList.add("language-" + h);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (k) {
            var g = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack) || [])[1];
            if (g) {
              var h = document.getElementsByTagName("script");
              for (var v in h)
                if (h[v].src == g)
                  return h[v];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(g, h, v) {
          for (var k = "no-" + h; g; ) {
            var w = g.classList;
            if (w.contains(h))
              return !0;
            if (w.contains(k))
              return !1;
            g = g.parentElement;
          }
          return !!v;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: c,
        plaintext: c,
        text: c,
        txt: c,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(g, h) {
          var v = s.util.clone(s.languages[g]);
          for (var k in h)
            v[k] = h[k];
          return v;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(g, h, v, k) {
          k = k || /** @type {any} */
          s.languages;
          var w = k[g], S = {};
          for (var N in w)
            if (w.hasOwnProperty(N)) {
              if (N == h)
                for (var A in v)
                  v.hasOwnProperty(A) && (S[A] = v[A]);
              v.hasOwnProperty(N) || (S[N] = w[N]);
            }
          var z = k[g];
          return k[g] = S, s.languages.DFS(s.languages, function($, H) {
            H === z && $ != g && (this[$] = S);
          }), S;
        },
        // Traverse a language definition with Depth First Search
        DFS: function g(h, v, k, w) {
          w = w || {};
          var S = s.util.objId;
          for (var N in h)
            if (h.hasOwnProperty(N)) {
              v.call(h, N, h[N], k || N);
              var A = h[N], z = s.util.type(A);
              z === "Object" && !w[S(A)] ? (w[S(A)] = !0, g(A, v, null, w)) : z === "Array" && !w[S(A)] && (w[S(A)] = !0, g(A, v, N, w));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(g, h) {
        s.highlightAllUnder(document, g, h);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(g, h, v) {
        var k = {
          callback: v,
          container: g,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        s.hooks.run("before-highlightall", k), k.elements = Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)), s.hooks.run("before-all-elements-highlight", k);
        for (var w = 0, S; S = k.elements[w++]; )
          s.highlightElement(S, h === !0, k.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(g, h, v) {
        var k = s.util.getLanguage(g), w = s.languages[k];
        s.util.setLanguage(g, k);
        var S = g.parentElement;
        S && S.nodeName.toLowerCase() === "pre" && s.util.setLanguage(S, k);
        var N = g.textContent, A = {
          element: g,
          language: k,
          grammar: w,
          code: N
        };
        function z(H) {
          A.highlightedCode = H, s.hooks.run("before-insert", A), A.element.innerHTML = A.highlightedCode, s.hooks.run("after-highlight", A), s.hooks.run("complete", A), v && v.call(A.element);
        }
        if (s.hooks.run("before-sanity-check", A), S = A.element.parentElement, S && S.nodeName.toLowerCase() === "pre" && !S.hasAttribute("tabindex") && S.setAttribute("tabindex", "0"), !A.code) {
          s.hooks.run("complete", A), v && v.call(A.element);
          return;
        }
        if (s.hooks.run("before-highlight", A), !A.grammar) {
          z(s.util.encode(A.code));
          return;
        }
        if (h && r.Worker) {
          var $ = new Worker(s.filename);
          $.onmessage = function(H) {
            z(H.data);
          }, $.postMessage(JSON.stringify({
            language: A.language,
            code: A.code,
            immediateClose: !0
          }));
        } else
          z(s.highlight(A.code, A.grammar, A.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(g, h, v) {
        var k = {
          code: g,
          grammar: h,
          language: v
        };
        if (s.hooks.run("before-tokenize", k), !k.grammar)
          throw new Error('The language "' + k.language + '" has no grammar.');
        return k.tokens = s.tokenize(k.code, k.grammar), s.hooks.run("after-tokenize", k), l.stringify(s.util.encode(k.tokens), k.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(g, h) {
        var v = h.rest;
        if (v) {
          for (var k in v)
            h[k] = v[k];
          delete h.rest;
        }
        var w = new b();
        return f(w, w.head, g), u(g, w, h, w.head, 0), _(w);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(g, h) {
          var v = s.hooks.all;
          v[g] = v[g] || [], v[g].push(h);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(g, h) {
          var v = s.hooks.all[g];
          if (!(!v || !v.length))
            for (var k = 0, w; w = v[k++]; )
              w(h);
        }
      },
      Token: l
    };
    r.Prism = s;
    function l(g, h, v, k) {
      this.type = g, this.content = h, this.alias = v, this.length = (k || "").length | 0;
    }
    l.stringify = function g(h, v) {
      if (typeof h == "string")
        return h;
      if (Array.isArray(h)) {
        var k = "";
        return h.forEach(function(z) {
          k += g(z, v);
        }), k;
      }
      var w = {
        type: h.type,
        content: g(h.content, v),
        tag: "span",
        classes: ["token", h.type],
        attributes: {},
        language: v
      }, S = h.alias;
      S && (Array.isArray(S) ? Array.prototype.push.apply(w.classes, S) : w.classes.push(S)), s.hooks.run("wrap", w);
      var N = "";
      for (var A in w.attributes)
        N += " " + A + '="' + (w.attributes[A] || "").replace(/"/g, "&quot;") + '"';
      return "<" + w.tag + ' class="' + w.classes.join(" ") + '"' + N + ">" + w.content + "</" + w.tag + ">";
    };
    function d(g, h, v, k) {
      g.lastIndex = h;
      var w = g.exec(v);
      if (w && k && w[1]) {
        var S = w[1].length;
        w.index += S, w[0] = w[0].slice(S);
      }
      return w;
    }
    function u(g, h, v, k, w, S) {
      for (var N in v)
        if (!(!v.hasOwnProperty(N) || !v[N])) {
          var A = v[N];
          A = Array.isArray(A) ? A : [A];
          for (var z = 0; z < A.length; ++z) {
            if (S && S.cause == N + "," + z)
              return;
            var $ = A[z], H = $.inside, K = !!$.lookbehind, J = !!$.greedy, xe = $.alias;
            if (J && !$.pattern.global) {
              var We = $.pattern.toString().match(/[imsuy]*$/)[0];
              $.pattern = RegExp($.pattern.source, We + "g");
            }
            for (var Oe = $.pattern || $, E = k.next, L = w; E !== h.tail && !(S && L >= S.reach); L += E.value.length, E = E.next) {
              var O = E.value;
              if (h.length > g.length)
                return;
              if (!(O instanceof l)) {
                var W = 1, P;
                if (J) {
                  if (P = d(Oe, L, g, K), !P || P.index >= g.length)
                    break;
                  var Ce = P.index, te = P.index + P[0].length, V = L;
                  for (V += E.value.length; Ce >= V; )
                    E = E.next, V += E.value.length;
                  if (V -= E.value.length, L = V, E.value instanceof l)
                    continue;
                  for (var oe = E; oe !== h.tail && (V < te || typeof oe.value == "string"); oe = oe.next)
                    W++, V += oe.value.length;
                  W--, O = g.slice(L, V), P.index -= L;
                } else if (P = d(Oe, 0, O, K), !P)
                  continue;
                var Ce = P.index, he = P[0], le = O.slice(0, Ce), fe = O.slice(Ce + he.length), me = L + O.length;
                S && me > S.reach && (S.reach = me);
                var ve = E.prev;
                le && (ve = f(h, ve, le), L += le.length), y(h, ve, W);
                var Te = new l(N, H ? s.tokenize(he, H) : he, xe, he);
                if (E = f(h, ve, Te), fe && f(h, E, fe), W > 1) {
                  var Ie = {
                    cause: N + "," + z,
                    reach: me
                  };
                  u(g, h, v, E.prev, L, Ie), S && Ie.reach > S.reach && (S.reach = Ie.reach);
                }
              }
            }
          }
        }
    }
    function b() {
      var g = { value: null, prev: null, next: null }, h = { value: null, prev: g, next: null };
      g.next = h, this.head = g, this.tail = h, this.length = 0;
    }
    function f(g, h, v) {
      var k = h.next, w = { value: v, prev: h, next: k };
      return h.next = w, k.prev = w, g.length++, w;
    }
    function y(g, h, v) {
      for (var k = h.next, w = 0; w < v && k !== g.tail; w++)
        k = k.next;
      h.next = k, k.prev = h, g.length -= w;
    }
    function _(g) {
      for (var h = [], v = g.head.next; v !== g.tail; )
        h.push(v.value), v = v.next;
      return h;
    }
    if (!r.document)
      return r.addEventListener && (s.disableWorkerMessageHandler || r.addEventListener("message", function(g) {
        var h = JSON.parse(g.data), v = h.language, k = h.code, w = h.immediateClose;
        r.postMessage(s.highlight(k, s.languages[v], v)), w && r.close();
      }, !1)), s;
    var x = s.util.currentScript();
    x && (s.filename = x.src, x.hasAttribute("data-manual") && (s.manual = !0));
    function m() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var C = document.readyState;
      C === "loading" || C === "interactive" && x && x.defer ? document.addEventListener("DOMContentLoaded", m) : window.requestAnimationFrame ? window.requestAnimationFrame(m) : window.setTimeout(m, 16);
    }
    return s;
  }(n);
  t.exports && (t.exports = e), typeof Wn < "u" && (Wn.Prism = e), e.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup, e.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(e.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(o, a) {
      var c = {};
      c["language-" + a] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: e.languages[a]
      }, c.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var s = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: c
        }
      };
      s["language-" + a] = {
        pattern: /[\s\S]+/,
        inside: e.languages[a]
      };
      var l = {};
      l[o] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return o;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: s
      }, e.languages.insertBefore("markup", "cdata", l);
    }
  }), Object.defineProperty(e.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, o) {
      e.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [o, "language-" + o],
                inside: e.languages[o]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), e.languages.html = e.languages.markup, e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, e.languages.xml = e.languages.extend("markup", {}), e.languages.ssml = e.languages.xml, e.languages.atom = e.languages.xml, e.languages.rss = e.languages.xml, function(r) {
    var o = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + o.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + o.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + o.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + o.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: o,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var a = r.languages.markup;
    a && (a.tag.addInlined("style", "css"), a.tag.addAttribute("style", "css"));
  }(e), e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, e.languages.javascript = e.languages.extend("clike", {
    "class-name": [
      e.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), e.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: e.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: e.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), e.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: e.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), e.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"), e.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), e.languages.js = e.languages.javascript, function() {
    if (typeof e > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", o = function(x, m) {
      return "✖ Error " + x + " while fetching file: " + m;
    }, a = "✖ Error: File does not exist or is empty", c = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, s = "data-src-status", l = "loading", d = "loaded", u = "failed", b = "pre[data-src]:not([" + s + '="' + d + '"]):not([' + s + '="' + l + '"])';
    function f(x, m, C) {
      var g = new XMLHttpRequest();
      g.open("GET", x, !0), g.onreadystatechange = function() {
        g.readyState == 4 && (g.status < 400 && g.responseText ? m(g.responseText) : g.status >= 400 ? C(o(g.status, g.statusText)) : C(a));
      }, g.send(null);
    }
    function y(x) {
      var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x || "");
      if (m) {
        var C = Number(m[1]), g = m[2], h = m[3];
        return g ? h ? [C, Number(h)] : [C, void 0] : [C, C];
      }
    }
    e.hooks.add("before-highlightall", function(x) {
      x.selector += ", " + b;
    }), e.hooks.add("before-sanity-check", function(x) {
      var m = (
        /** @type {HTMLPreElement} */
        x.element
      );
      if (m.matches(b)) {
        x.code = "", m.setAttribute(s, l);
        var C = m.appendChild(document.createElement("CODE"));
        C.textContent = r;
        var g = m.getAttribute("data-src"), h = x.language;
        if (h === "none") {
          var v = (/\.(\w+)$/.exec(g) || [, "none"])[1];
          h = c[v] || v;
        }
        e.util.setLanguage(C, h), e.util.setLanguage(m, h);
        var k = e.plugins.autoloader;
        k && k.loadLanguages(h), f(
          g,
          function(w) {
            m.setAttribute(s, d);
            var S = y(m.getAttribute("data-range"));
            if (S) {
              var N = w.split(/\r\n?|\n/g), A = S[0], z = S[1] == null ? N.length : S[1];
              A < 0 && (A += N.length), A = Math.max(0, Math.min(A - 1, N.length)), z < 0 && (z += N.length), z = Math.max(0, Math.min(z, N.length)), w = N.slice(A, z).join(`
`), m.hasAttribute("data-start") || m.setAttribute("data-start", String(A + 1));
            }
            C.textContent = w, e.highlightElement(C);
          },
          function(w) {
            m.setAttribute(s, u), C.textContent = w;
          }
        );
      }
    }), e.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(m) {
        for (var C = (m || document).querySelectorAll(b), g = 0, h; h = C[g++]; )
          e.highlightElement(h);
      }
    };
    var _ = !1;
    e.fileHighlight = function() {
      _ || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), _ = !0), e.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Ai);
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(t) {
  t.type === "entity" && (t.attributes.title = t.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function(n, e) {
    var r = {};
    r["language-" + e] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[e]
    }, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var o = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: r
      }
    };
    o["language-" + e] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[e]
    };
    var a = {};
    a[n] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return n;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: o
    }, Prism.languages.insertBefore("markup", "cdata", a);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function(t, n) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source + "(?:" + t + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [n, "language-" + n],
              inside: Prism.languages[n]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function(t) {
  var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function e(u) {
    return u = u.replace(/<inner>/g, function() {
      return n;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + u + ")");
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return r;
  }), a = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  t.languages.markdown = t.languages.extend("markup", {}), t.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: t.languages.yaml
        }
      }
    },
    blockquote: {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + o + a + "(?:" + o + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + o + a + ")(?:" + o + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(r),
              inside: t.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + o + ")" + a + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + o + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(r),
              alias: "important",
              inside: t.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [
      {
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      },
      {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }
    ],
    title: [
      {
        // title 1
        // =======
        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      },
      {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }
    ],
    hr: {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: e(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: e(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: e(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: e(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function(u) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(b) {
      u !== b && (t.languages.markdown[u].inside.content.inside[b] = t.languages.markdown[b]);
    });
  }), t.hooks.add("after-tokenize", function(u) {
    if (u.language !== "markdown" && u.language !== "md")
      return;
    function b(f) {
      if (!(!f || typeof f == "string"))
        for (var y = 0, _ = f.length; y < _; y++) {
          var x = f[y];
          if (x.type !== "code") {
            b(x.content);
            continue;
          }
          var m = x.content[1], C = x.content[3];
          if (m && C && m.type === "code-language" && C.type === "code-block" && typeof m.content == "string") {
            var g = m.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            g = (/[a-z][\w-]*/i.exec(g) || [""])[0].toLowerCase();
            var h = "language-" + g;
            C.alias ? typeof C.alias == "string" ? C.alias = [C.alias, h] : C.alias.push(h) : C.alias = [h];
          }
        }
    }
    b(u.tokens);
  }), t.hooks.add("wrap", function(u) {
    if (u.type === "code-block") {
      for (var b = "", f = 0, y = u.classes.length; f < y; f++) {
        var _ = u.classes[f], x = /language-(.+)/.exec(_);
        if (x) {
          b = x[1];
          break;
        }
      }
      var m = t.languages[b];
      if (m)
        u.content = t.highlight(d(u.content), m, b);
      else if (b && b !== "none" && t.plugins.autoloader) {
        var C = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        u.attributes.id = C, t.plugins.autoloader.loadLanguages(b, function() {
          var g = document.getElementById(C);
          g && (g.innerHTML = t.highlight(g.textContent, t.languages[b], b));
        });
      }
    }
  });
  var c = RegExp(t.languages.markup.tag.pattern.source, "gi"), s = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  }, l = String.fromCodePoint || String.fromCharCode;
  function d(u) {
    var b = u.replace(c, "");
    return b = b.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(f, y) {
      if (y = y.toLowerCase(), y[0] === "#") {
        var _;
        return y[1] === "x" ? _ = parseInt(y.slice(2), 16) : _ = Number(y.slice(1)), l(_);
      } else {
        var x = s[y];
        return x || f;
      }
    }), b;
  }
  t.languages.md = t.languages.markdown;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(t) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  t.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + n.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: n,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, t.languages.css.atrule.inside.rest = t.languages.css;
  var e = t.languages.markup;
  e && (e.tag.addInlined("style", "css"), e.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec["class-name"];
Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(t) {
  var n = t.languages.powershell = {
    comment: [
      {
        pattern: /(^|[^`])<#[\s\S]*?#>/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^`])#.*/,
        lookbehind: !0
      }
    ],
    string: [
      {
        pattern: /"(?:`[\s\S]|[^`"])*"/,
        greedy: !0,
        inside: null
        // see below
      },
      {
        pattern: /'(?:[^']|'')*'/,
        greedy: !0
      }
    ],
    // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
    // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
    // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
    // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
    ],
    // per http://technet.microsoft.com/en-us/library/hh847744.aspx
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  };
  n.string[0].inside = {
    function: {
      // Allow for one level of nesting
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: n
    },
    boolean: n.boolean,
    variable: n.variable
  };
})(Prism);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(t) {
  for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, e = 0; e < 2; e++)
    n = n.replace(/<self>/g, function() {
      return n;
    });
  n = n.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), t.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + n),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
        // see below
      }
    },
    // Closure params should not be confused with bitwise OR |
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
        // see below
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [
      {
        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
        lookbehind: !0,
        alias: "namespace"
      },
      {
        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
        lookbehind: !0,
        alias: "namespace",
        inside: {
          punctuation: /::/
        }
      }
    ],
    keyword: [
      // https://github.com/rust-lang/reference/blob/master/src/keywords.md
      /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
      // primitives and str
      // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
      /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
    ],
    // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
    // and Rust's naming conventions recommend snake_case anyway.
    // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }, t.languages.rust["closure-params"].inside.rest = t.languages.rust, t.languages.rust.attribute.inside.string = t.languages.rust.string;
})(Prism);
Prism.languages.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: RegExp(
        /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: RegExp(
      /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
    ),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
Prism.languages.swift["string-literal"].forEach(function(t) {
  t.inside.interpolation.inside = Prism.languages.swift;
});
(function(t) {
  t.languages.typescript = t.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
      // see below
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), t.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  ), delete t.languages.typescript.parameter, delete t.languages.typescript["literal-property"];
  var n = t.languages.extend("typescript", {});
  delete n["class-name"], t.languages.typescript["class-name"].inside = n, t.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: n
        }
      }
    }
  }), t.languages.ts = t.languages.typescript;
})(Prism);
(function(t) {
  var n = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, e = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
    pattern: RegExp(/(^|[^\w.])/.source + e + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  t.languages.java = t.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      r,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + e + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: r.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + e + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: r.inside
      }
    ],
    keyword: n,
    function: [
      t.languages.clike.function,
      {
        pattern: /(::\s*)[a-z_]\w*/,
        lookbehind: !0
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  }), t.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: !0
    }
  }), t.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": r,
        keyword: n,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + e + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: r.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + e + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: r.inside.namespace,
          static: /\b\w+$/,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      }
    ],
    namespace: {
      pattern: RegExp(
        /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return n.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
(function(t) {
  var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, e = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return n.source;
  });
  t.languages.cpp = t.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return n.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: n,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), t.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return e;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), t.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: t.languages.cpp
        }
      }
    }
  }), t.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), t.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: t.languages.extend("cpp", {})
    }
  }), t.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, t.languages.cpp["base-clause"]);
})(Prism);
function Li(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
Li(function(t) {
  const n = new URLSearchParams();
  n.append("code", t);
  for (let e = 1; e < arguments.length; e++) n.append("v", arguments[e]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${n} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const Ni = globalThis.Prism || window.Prism, br = (t) => {
  try {
    return !!t && Ni.languages.hasOwnProperty(t);
  } catch {
    return !1;
  }
};
function uo(t, n) {
  for (const e of t.childNodes) {
    if (ea(e) && e.tagName === n) return !0;
    uo(e, n);
  }
  return !1;
}
const at = "data-language", Rt = "data-highlight-language";
class jt extends pt {
  static getType() {
    return "code";
  }
  static clone(n) {
    return new jt(n.__language, n.__key);
  }
  constructor(n, e) {
    super(e), this.__language = n, this.__isSyntaxHighlightSupported = br(n);
  }
  createDOM(n) {
    const e = document.createElement("code");
    ge(e, n.theme.code), e.setAttribute("spellcheck", "false");
    const r = this.getLanguage();
    return r && (e.setAttribute(at, r), this.getIsSyntaxHighlightSupported() && e.setAttribute(Rt, r)), e;
  }
  updateDOM(n, e, r) {
    const o = this.__language, a = n.__language;
    return o ? o !== a && (e.setAttribute(at, o), this.__isSyntaxHighlightSupported && e.setAttribute(Rt, o)) : a && (e.removeAttribute(at), n.__isSyntaxHighlightSupported && e.removeAttribute(Rt)), !1;
  }
  exportDOM(n) {
    const e = document.createElement("pre");
    ge(e, n._config.theme.code), e.setAttribute("spellcheck", "false");
    const r = this.getLanguage();
    return r && (e.setAttribute(at, r), this.getIsSyntaxHighlightSupported() && e.setAttribute(Rt, r)), { element: e };
  }
  static importDOM() {
    return { code: (n) => n.textContent != null && (/\r?\n/.test(n.textContent) || uo(n, "BR")) ? { conversion: _r, priority: 1 } : null, div: () => ({ conversion: Oi, priority: 1 }), pre: () => ({ conversion: _r, priority: 0 }), table: (n) => qt(n) ? { conversion: Ii, priority: 3 } : null, td: (n) => {
      const e = n, r = e.closest("table");
      return e.classList.contains("js-file-line") || r && qt(r) ? { conversion: yr, priority: 3 } : null;
    }, tr: (n) => {
      const e = n.closest("table");
      return e && qt(e) ? { conversion: yr, priority: 3 } : null;
    } };
  }
  static importJSON(n) {
    const e = xt(n.language);
    return e.setFormat(n.format), e.setIndent(n.indent), e.setDirection(n.direction), e;
  }
  exportJSON() {
    return { ...super.exportJSON(), language: this.getLanguage(), type: "code", version: 1 };
  }
  insertNewAfter(n, e = !0) {
    const r = this.getChildren(), o = r.length;
    if (o >= 2 && r[o - 1].getTextContent() === `
` && r[o - 2].getTextContent() === `
` && n.isCollapsed() && n.anchor.key === this.__key && n.anchor.offset === o) {
      r[o - 1].remove(), r[o - 2].remove();
      const l = ie();
      return this.insertAfter(l, e), l;
    }
    const { anchor: a, focus: c } = n, s = (a.isBefore(c) ? a : c).getNode();
    if (ue(s)) {
      let l = ji(s);
      const d = [];
      for (; ; ) if ($r(l)) d.push(Vo()), l = l.getNextSibling();
      else {
        if (!En(l)) break;
        {
          let m = 0;
          const C = l.getTextContent(), g = l.getTextContentSize();
          for (; m < g && C[m] === " "; ) m++;
          if (m !== 0 && d.push(po(" ".repeat(m))), m !== g) break;
          l = l.getNextSibling();
        }
      }
      const u = s.splitText(a.offset)[0], b = a.offset === 0 ? 0 : 1, f = u.getIndexWithinParent() + b, y = s.getParentOrThrow(), _ = [Bn(), ...d];
      y.splice(f, 0, _);
      const x = d[d.length - 1];
      x ? x.select() : a.offset === 0 ? u.selectPrevious() : u.getNextSibling().selectNext(0, 0);
    }
    if (Fi(s)) {
      const { offset: l } = n.anchor;
      s.splice(l, 0, [Bn()]), s.select(l + 1, l + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const n = ie();
    return this.getChildren().forEach((e) => n.append(e)), this.replace(n), !0;
  }
  setLanguage(n) {
    const e = this.getWritable();
    e.__language = n, e.__isSyntaxHighlightSupported = br(n);
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
}
function xt(t) {
  return fn(new jt(t));
}
function Fi(t) {
  return t instanceof jt;
}
function _r(t) {
  return { node: xt(t.getAttribute(at)) };
}
function Oi(t) {
  const n = t, e = xr(n);
  return e || function(r) {
    let o = r.parentElement;
    for (; o !== null; ) {
      if (xr(o)) return !0;
      o = o.parentElement;
    }
    return !1;
  }(n) ? { node: e ? xt() : null } : { node: null };
}
function Ii() {
  return { node: xt() };
}
function yr() {
  return { node: null };
}
function xr(t) {
  return t.style.fontFamily.match("monospace") !== null;
}
function qt(t) {
  return t.classList.contains("js-file-line-container");
}
class $t extends Jo {
  constructor(n, e, r) {
    super(n, r), this.__highlightType = e;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(n) {
    return new $t(n.__text, n.__highlightType || void 0, n.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(n) {
    const e = super.createDOM(n), r = Xt(n.theme, this.__highlightType);
    return ge(e, r), e;
  }
  updateDOM(n, e, r) {
    const o = super.updateDOM(n, e, r), a = Xt(r.theme, n.__highlightType), c = Xt(r.theme, this.__highlightType);
    return a !== c && (a && Qo(e, a), c && ge(e, c)), o;
  }
  static importJSON(n) {
    const e = po(n.text, n.highlightType);
    return e.setFormat(n.format), e.setDetail(n.detail), e.setMode(n.mode), e.setStyle(n.style), e;
  }
  exportJSON() {
    return { ...super.exportJSON(), highlightType: this.getHighlightType(), type: "code-highlight", version: 1 };
  }
  setFormat(n) {
    return this;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return xt();
  }
}
function Xt(t, n) {
  return n && t && t.codeHighlight && t.codeHighlight[n];
}
function po(t, n) {
  return fn(new $t(t, n));
}
function En(t) {
  return t instanceof $t;
}
function ji(t) {
  let n = t, e = t;
  for (; En(e) || $r(e); ) n = e, e = e.getPreviousSibling();
  return n;
}
function $i(t, n) {
  const e = t.getRangeAt(0);
  let r;
  if (t.anchorNode === n) {
    let o = n;
    for (; o.firstElementChild != null; )
      o = o.firstElementChild;
    r = o.getBoundingClientRect();
  } else
    r = e.getBoundingClientRect();
  return r;
}
const Bi = 10, Di = 5;
function Pi(t, n, e, r = !1, o = Bi, a = Di) {
  const c = e.parentElement;
  if (t === null || !c) {
    n.style.opacity = "0", n.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const s = n.getBoundingClientRect(), l = e.getBoundingClientRect(), d = c.getBoundingClientRect();
  let u = t.top - s.height - o, b = t.left - a;
  u < d.top && (u += s.height + t.height + o * (r ? 9 : 2)), b + s.width > d.right && (b = d.right - s.width - a), u -= l.top, b -= l.left, n.style.opacity = "1", n.style.transform = `translate(${b}px, ${u}px)`;
}
function Mi({
  editor: t,
  anchorElem: n,
  isLink: e,
  isBold: r,
  isItalic: o,
  isUnderline: a,
  isStrikethrough: c,
  setIsLinkEditMode: s
}) {
  const l = ee(null), d = M(() => {
    e ? (s(!1), t.dispatchCommand(Je, null)) : (s(!0), t.dispatchCommand(Je, "https://"));
  }, [t, e, s]);
  function u(y) {
    if (l != null && l.current && (y.buttons === 1 || y.buttons === 3) && l.current.style.pointerEvents !== "none") {
      const _ = y.clientX, x = y.clientY, m = document.elementFromPoint(_, x);
      l.current.contains(m) || (l.current.style.pointerEvents = "none");
    }
  }
  function b() {
    l != null && l.current && l.current.style.pointerEvents !== "auto" && (l.current.style.pointerEvents = "auto");
  }
  B(() => {
    if (l != null && l.current)
      return document.addEventListener("mousemove", u), document.addEventListener("mouseup", b), () => {
        document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", b);
      };
  }, [l]);
  const f = M(() => {
    const y = Q(), _ = l.current, x = window.getSelection();
    if (_ === null)
      return;
    const m = t.getRootElement();
    if (y !== null && x !== null && !x.isCollapsed && m !== null && m.contains(x.anchorNode)) {
      const C = $i(x, m);
      Pi(
        C,
        _,
        n,
        e
      );
    }
  }, [t, n, e]);
  return B(() => {
    const y = n.parentElement, _ = () => {
      t.getEditorState().read(() => {
        f();
      });
    };
    return window.addEventListener("resize", _), y && y.addEventListener("scroll", _), () => {
      window.removeEventListener("resize", _), y && y.removeEventListener("scroll", _);
    };
  }, [t, f, n]), B(() => (t.getEditorState().read(() => {
    f();
  }), se(
    t.registerUpdateListener(({ editorState: y }) => {
      y.read(() => {
        f();
      });
    }),
    t.registerCommand(
      Ft,
      () => (f(), !1),
      ce
    )
  )), [t, f]), /* @__PURE__ */ i.jsx("div", { ref: l, className: "floating-text-format-popup", children: t.isEditable() && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          t.dispatchCommand(Le, "bold");
        },
        className: "popup-item spaced " + (r ? "active" : ""),
        "aria-label": "Format text as bold",
        children: /* @__PURE__ */ i.jsx("i", { className: "format bold" })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          t.dispatchCommand(Le, "italic");
        },
        className: "popup-item spaced " + (o ? "active" : ""),
        "aria-label": "Format text as italics",
        children: /* @__PURE__ */ i.jsx("i", { className: "format italic" })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          t.dispatchCommand(Le, "underline");
        },
        className: "popup-item spaced " + (a ? "active" : ""),
        "aria-label": "Format text to underlined",
        children: /* @__PURE__ */ i.jsx("i", { className: "format underline" })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          t.dispatchCommand(Le, "strikethrough");
        },
        className: "popup-item spaced " + (c ? "active" : ""),
        "aria-label": "Format text with a strikethrough",
        children: /* @__PURE__ */ i.jsx("i", { className: "format strikethrough" })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        onClick: d,
        className: "popup-item spaced " + (e ? "active" : ""),
        "aria-label": "Insert link",
        children: /* @__PURE__ */ i.jsx("i", { className: "format link" })
      }
    )
  ] }) });
}
function Wi(t, n, e) {
  const [r, o] = j(!1), [a, c] = j(!1), [s, l] = j(!1), [d, u] = j(!1), [b, f] = j(!1), [y, _] = j(!1), x = M(() => {
    t.getEditorState().read(() => {
      if (t.isComposing())
        return;
      const m = Q(), C = window.getSelection(), g = t.getRootElement();
      if (C !== null && (!re(m) || g === null || !g.contains(C.anchorNode))) {
        o(!1);
        return;
      }
      if (!re(m))
        return;
      const h = qe(m);
      l(m.hasFormat("bold")), u(m.hasFormat("italic")), f(m.hasFormat("underline")), _(m.hasFormat("strikethrough"));
      const v = h.getParent();
      ke(v) || ke(h) ? c(!0) : c(!1), !En(m.anchor.getNode()) && m.getTextContent() !== "" ? o(ue(h) || Or(h)) : o(!1);
      const k = m.getTextContent().replace(/\n/g, "");
      if (!m.isCollapsed() && k === "") {
        o(!1);
        return;
      }
    });
  }, [t]);
  return B(() => (document.addEventListener("selectionchange", x), () => {
    document.removeEventListener("selectionchange", x);
  }), [x]), B(() => se(
    t.registerUpdateListener(() => {
      x();
    }),
    t.registerRootListener(() => {
      t.getRootElement() === null && o(!1);
    })
  ), [t, x]), r ? gt(
    /* @__PURE__ */ i.jsx(
      Mi,
      {
        editor: t,
        anchorElem: n,
        isLink: a,
        isBold: s,
        isItalic: d,
        isStrikethrough: y,
        isUnderline: b,
        setIsLinkEditMode: e
      }
    ),
    n
  ) : null;
}
function Ui({
  anchorElem: t = document.body,
  setIsLinkEditMode: n
}) {
  const [e] = ye();
  return Wi(e, t, n);
}
const zi = 10, Hi = 5;
function Cr(t, n, e, r = zi, o = Hi) {
  const a = e.parentElement;
  if (t === null || !a) {
    n.style.opacity = "0", n.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const c = n.getBoundingClientRect(), s = e.getBoundingClientRect(), l = a.getBoundingClientRect();
  let d = t.top - r, u = t.left - o;
  d < l.top && (d += c.height + t.height + r * 2), u + c.width > l.right && (u = l.right - c.width - o), d -= s.top, u -= s.left, n.style.opacity = "1", n.style.transform = `translate(${u}px, ${d}px)`;
}
const Ki = /* @__PURE__ */ new Set([
  "http:",
  "https:",
  "mailto:",
  "sms:",
  "tel:"
]);
function vr(t) {
  try {
    const n = new URL(t);
    if (!Ki.has(n.protocol))
      return "about:blank";
  } catch {
    return t;
  }
  return t;
}
function Gi({
  editor: t,
  isLink: n,
  setIsLink: e,
  anchorElem: r,
  isLinkEditMode: o,
  setIsLinkEditMode: a
}) {
  const c = ee(null), s = ee(null), [l, d] = j(""), [u, b] = j("https://"), [f, y] = j(
    null
  ), _ = M(() => {
    var w, S;
    const C = Q();
    if (re(C)) {
      const N = qe(C), A = Ae(N, ke);
      A ? d(A.getURL()) : ke(N) ? d(N.getURL()) : d(""), o && b(l);
    }
    const g = c.current, h = window.getSelection(), v = document.activeElement;
    if (g === null)
      return;
    const k = t.getRootElement();
    if (C !== null && h !== null && k !== null && k.contains(h.anchorNode) && t.isEditable()) {
      const N = (S = (w = h.focusNode) == null ? void 0 : w.parentElement) == null ? void 0 : S.getBoundingClientRect();
      N && (N.y += 40, Cr(N, g, r)), y(C);
    } else (!v || v.className !== "link-input") && (k !== null && Cr(null, g, r), y(null), a(!1), d(""));
    return !0;
  }, [r, t, a, o, l]);
  B(() => {
    const C = r.parentElement, g = () => {
      t.getEditorState().read(() => {
        _();
      });
    };
    return window.addEventListener("resize", g), C && C.addEventListener("scroll", g), () => {
      window.removeEventListener("resize", g), C && C.removeEventListener("scroll", g);
    };
  }, [r.parentElement, t, _]), B(() => se(
    t.registerUpdateListener(({ editorState: C }) => {
      C.read(() => {
        _();
      });
    }),
    t.registerCommand(
      Ft,
      () => (_(), !0),
      ce
    ),
    t.registerCommand(
      qo,
      () => n ? (e(!1), !0) : !1,
      Tr
    )
  ), [t, _, e, n]), B(() => {
    t.getEditorState().read(() => {
      _();
    });
  }, [t, _]), B(() => {
    o && s.current && s.current.focus();
  }, [o, n]);
  const x = (C) => {
    C.key === "Enter" ? (C.preventDefault(), m()) : C.key === "Escape" && (C.preventDefault(), a(!1));
  }, m = () => {
    f !== null && (l !== "" && (t.dispatchCommand(Je, vr(u)), t.update(() => {
      const C = Q();
      if (re(C)) {
        const g = qe(C).getParent();
        if (en(g)) {
          const h = ia(g.getURL(), {
            rel: g.__rel,
            target: g.__target,
            title: g.__title
          });
          g.replace(h, !0);
        }
      }
    })), b("https://"), a(!1));
  };
  return /* @__PURE__ */ i.jsx("div", { ref: c, className: "link-editor", children: n ? o ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        ref: s,
        className: "link-input",
        value: u,
        onChange: (C) => {
          b(C.target.value);
        },
        onKeyDown: (C) => {
          x(C);
        }
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: "link-cancel",
          role: "button",
          tabIndex: 0,
          onMouseDown: (C) => C.preventDefault(),
          onClick: () => {
            a(!1);
          }
        }
      ),
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: "link-confirm",
          role: "button",
          tabIndex: 0,
          onMouseDown: (C) => C.preventDefault(),
          onClick: m
        }
      )
    ] })
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "link-view", children: [
    /* @__PURE__ */ i.jsx(
      "a",
      {
        href: vr(l),
        target: "_blank",
        rel: "noopener noreferrer",
        children: l
      }
    ),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "link-edit",
        role: "button",
        tabIndex: 0,
        onMouseDown: (C) => C.preventDefault(),
        onClick: () => {
          b(l), a(!0);
        }
      }
    ),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "link-trash",
        role: "button",
        tabIndex: 0,
        onMouseDown: (C) => C.preventDefault(),
        onClick: () => {
          t.dispatchCommand(Je, null);
        }
      }
    )
  ] }) : null });
}
function Yi(t, n, e, r) {
  const [o, a] = j(t), [c, s] = j(!1);
  return B(() => {
    function l() {
      const d = Q();
      if (re(d)) {
        const u = qe(d), b = Ae(u, ke), f = Ae(
          u,
          en
        );
        if (!(b || f)) {
          s(!1);
          return;
        }
        const y = d.getNodes().find((_) => {
          const x = Ae(_, ke), m = Ae(_, en);
          if (!(x != null && x.is(b)) && !(m != null && m.is(f)) && !x && !m && !Fr(_))
            return _;
        });
        s(!y);
      }
    }
    return se(
      t.registerUpdateListener(({ editorState: d }) => {
        d.read(() => {
          l();
        });
      }),
      t.registerCommand(
        Ft,
        (d, u) => (l(), a(u), !1),
        Qt
      ),
      t.registerCommand(
        Ar,
        (d) => {
          const u = Q();
          if (re(u)) {
            const b = qe(u), f = Ae(b, ke);
            if (ke(f) && (d.metaKey || d.ctrlKey))
              return window.open(f.getURL(), "_blank"), !0;
          }
          return !1;
        },
        ce
      )
    );
  }, [t]), gt(
    /* @__PURE__ */ i.jsx(
      Gi,
      {
        editor: o,
        isLink: c,
        anchorElem: n,
        setIsLink: s,
        isLinkEditMode: e,
        setIsLinkEditMode: r
      }
    ),
    n
  );
}
function Zi({
  anchorElem: t = document.body,
  isLinkEditMode: n,
  setIsLinkEditMode: e
}) {
  const [r] = ye();
  return Yi(
    r,
    t,
    n,
    e
  );
}
function Ji({ validateUrl: t, attributes: n }) {
  const [e] = ye();
  return B(() => {
    if (!e.hasNodes([Pr])) throw new Error("LinkPlugin: LinkNode not registered on editor");
    return se(e.registerCommand(Je, (r) => {
      if (r === null) return Kt(r), !0;
      if (typeof r == "string") return !(t !== void 0 && !t(r)) && (Kt(r, n), !0);
      {
        const { url: o, target: a, rel: c, title: s } = r;
        return Kt(o, { ...n, rel: c, target: a, title: s }), !0;
      }
    }, ce), t !== void 0 ? e.registerCommand(Xo, (r) => {
      const o = Q();
      if (!re(o) || o.isCollapsed() || !ta(r, ClipboardEvent)) return !1;
      const a = r;
      if (a.clipboardData === null) return !1;
      const c = a.clipboardData.getData("text");
      return !!t(c) && !o.getNodes().some((s) => Me(s)) && (e.dispatchCommand(Je, { ...n, url: c }), r.preventDefault(), !0);
    }, ce) : () => {
    });
  }, [e, t, n]), null;
}
const Vi = Nt(({ imageUploadCallback: t }, n) => {
  const { historyState: e } = xi(), [r] = ye(), [o, a] = j("desktop"), [c, s] = j({ canUndo: !1, canRedo: !1 }), [l, d] = j(null), [u, b] = j(!1), [f, y] = j(""), _ = ee(null), x = (h) => {
    h !== null && d(h);
  }, m = async () => {
    var h;
    await r.read(async () => {
      const v = Mn(r);
      y(v);
    }), (h = _.current) == null || h.classList.toggle("show");
  }, C = () => {
    let h = "", v = {};
    return r.read(() => {
      h = Mn(r), h = `<!DOCTYPE html PUBLIC "-//W3C/DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">${h}`, v = r.getEditorState().toJSON();
    }), [v, h];
  }, g = (h) => {
    if (h !== null)
      switch (typeof h) {
        case "string": {
          const v = r.parseEditorState(h);
          r.setEditorState(v, { tag: "history-merge" });
          break;
        }
        case "object": {
          r.setEditorState(h, { tag: "history-merge" });
          break;
        }
        case "function": {
          r.update(() => {
            st().isEmpty() && h(r);
          }, { tag: "history-merge" });
          break;
        }
      }
  };
  return Bo(n, () => ({
    exportData: C,
    updateEditorState: g,
    getEditor: () => r
  })), B(() => se(
    r.registerCommand(
      ot,
      (h) => (s((v) => ({ ...v, canUndo: h })), !1),
      Qt
    ),
    r.registerCommand(
      rt,
      (h) => (s((v) => ({ ...v, canRedo: h })), !1),
      Qt
    )
  ), []), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    l && /* @__PURE__ */ i.jsx(ti, { anchorElem: l, editor: r, imageUploadCallback: t }),
    /* @__PURE__ */ i.jsxs("div", { className: "toolbar", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: `history ${c.canUndo ? "active" : ""}`,
            onClick: () => r.dispatchCommand(Ir, void 0),
            children: /* @__PURE__ */ i.jsx("i", { className: "undo" })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: `history ${c.canRedo ? "active" : ""}`,
            onClick: () => r.dispatchCommand(jr, void 0),
            children: /* @__PURE__ */ i.jsx("i", { className: "redo" })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => a("desktop"),
            className: o === "desktop" ? "active" : "",
            children: /* @__PURE__ */ i.jsx(pr, { fill: "currentColor" })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => a("mobile"),
            className: o === "mobile" ? "active" : "",
            children: /* @__PURE__ */ i.jsx(gr, { fill: "currentColor" })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => a("tablet"),
            className: o === "tablet" ? "active" : "",
            children: /* @__PURE__ */ i.jsx(hr, { fill: "currentColor" })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "preview-btn",
          onClick: m,
          children: /* @__PURE__ */ i.jsx("i", { className: "eye" })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "editor-container", children: [
      /* @__PURE__ */ i.jsx(Ri, { externalHistoryState: e }),
      /* @__PURE__ */ i.jsx(Ji, {}),
      /* @__PURE__ */ i.jsx(
        pi,
        {
          contentEditable: /* @__PURE__ */ i.jsx("div", { className: "editor-scroller", children: /* @__PURE__ */ i.jsx("div", { className: `editor ${o}`, ref: x, children: /* @__PURE__ */ i.jsx(mi, {}) }) }),
          ErrorBoundary: ri
        }
      ),
      l && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(
          Zi,
          {
            anchorElem: l,
            isLinkEditMode: u,
            setIsLinkEditMode: b
          }
        ),
        /* @__PURE__ */ i.jsx(
          Ui,
          {
            anchorElem: l,
            setIsLinkEditMode: b
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "preview-box", ref: _, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "toolbar", children: [
        /* @__PURE__ */ i.jsx("div", {}),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              onClick: () => a("desktop"),
              className: o === "desktop" ? "active" : "",
              children: /* @__PURE__ */ i.jsx(pr, { fill: "currentColor" })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              onClick: () => a("mobile"),
              className: o === "mobile" ? "active" : "",
              children: /* @__PURE__ */ i.jsx(gr, { fill: "currentColor" })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              onClick: () => a("tablet"),
              className: o === "tablet" ? "active" : "",
              children: /* @__PURE__ */ i.jsx(hr, { fill: "currentColor" })
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "preview-btn", onClick: m, children: /* @__PURE__ */ i.jsx("i", { className: "eye-slash" }) })
      ] }),
      /* @__PURE__ */ i.jsx(
        "iframe",
        {
          "data-safe-html": !1,
          srcDoc: `<!DOCTYPE html PUBLIC "-//W3C/DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">${f}`,
          title: "email-preview",
          className: o,
          width: "100%"
        }
      )
    ] })
  ] });
}), qi = {
  root: "email-editor-root",
  paragraph: "email-editor-paragraph",
  textBlock: "email-editor-text-block",
  text: {
    bold: "email-editor-text-bold",
    code: "email-editor-text-code",
    hashtag: "email-editor-text-hashtag",
    italic: "email-editor-text-italic",
    overflowed: "email-editor-text-overflowed",
    strikethrough: "email-editor-text-strikethrough",
    underline: "email-editor-text-underline",
    underlineStrikethrough: "email-editor-text-underlineStrikethrough",
    subscript: "email-editor-text-subscript",
    superscript: "email-editor-text-superscript"
  },
  link: "email-editor-link",
  image: "email-editor-image",
  imageBlock: "email-editor-image-block",
  emailTemplateRoot: "email-editor-email-template-root",
  emailTemplateBlock: "email-editor-email-template-block",
  layoutContainer: "email-editor-layout-container",
  layoutItem: "email-editor-layout-item",
  buttonLink: "email-editor-button-link",
  buttonLinkBlock: "email-editor-button-link-block"
}, ss = Nt(({ editorState: t, imageUploadCallback: n }, e) => {
  const o = {
    editorState: t || ya,
    namespace: "LexicalEmailEditor",
    nodes: [
      It,
      mt,
      ht,
      ft,
      aa,
      Xe,
      bt,
      _t,
      yt,
      sa,
      Pr,
      ct,
      {
        replace: wr,
        with: () => bn(),
        withKlass: ct
      }
    ],
    onError: (a) => {
      console.log(a);
    },
    theme: qi
  };
  return /* @__PURE__ */ i.jsx(ha, { initialConfig: o, children: /* @__PURE__ */ i.jsx("div", { className: "email-editor-shell", children: /* @__PURE__ */ i.jsx(Vi, { ref: e, imageUploadCallback: n }) }) });
});
export {
  rr as $,
  ss as A,
  Ha as R,
  ye as a,
  ii as b,
  nr as c,
  i as j,
  Ka as u
};
