var nE = Object.defineProperty;
var rE = (e, t, n) => t in e ? nE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var zs = (e, t, n) => rE(e, typeof t != "symbol" ? t + "" : t, n);
function oE(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function kf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xy = { exports: {} }, Ya = {}, Qy = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs = Symbol.for("react.element"), iE = Symbol.for("react.portal"), sE = Symbol.for("react.fragment"), lE = Symbol.for("react.strict_mode"), aE = Symbol.for("react.profiler"), cE = Symbol.for("react.provider"), uE = Symbol.for("react.context"), dE = Symbol.for("react.forward_ref"), fE = Symbol.for("react.suspense"), pE = Symbol.for("react.memo"), hE = Symbol.for("react.lazy"), _h = Symbol.iterator;
function mE(e) {
  return e === null || typeof e != "object" ? null : (e = _h && e[_h] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qy = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zy = Object.assign, Jy = {};
function qo(e, t, n) {
  this.props = e, this.context = t, this.refs = Jy, this.updater = n || qy;
}
qo.prototype.isReactComponent = {};
qo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
qo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function e0() {
}
e0.prototype = qo.prototype;
function Tf(e, t, n) {
  this.props = e, this.context = t, this.refs = Jy, this.updater = n || qy;
}
var jf = Tf.prototype = new e0();
jf.constructor = Tf;
Zy(jf, qo.prototype);
jf.isPureReactComponent = !0;
var kh = Array.isArray, t0 = Object.prototype.hasOwnProperty, If = { current: null }, n0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function r0(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) t0.call(t, r) && !n0.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: xs, type: e, key: i, ref: s, props: o, _owner: If.current };
}
function gE(e, t) {
  return { $$typeof: xs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Pf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xs;
}
function yE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Th = /\/+/g;
function Bc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? yE("" + e.key) : t.toString(36);
}
function Nl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case xs:
        case iE:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Bc(s, 0) : r, kh(o) ? (n = "", e != null && (n = e.replace(Th, "$&/") + "/"), Nl(o, t, n, "", function(c) {
    return c;
  })) : o != null && (Pf(o) && (o = gE(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Th, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", kh(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + Bc(i, l);
    s += Nl(i, t, n, a, o);
  }
  else if (a = mE(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + Bc(i, l++), s += Nl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function $s(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Nl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function xE(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ot = { current: null }, El = { transition: null }, vE = { ReactCurrentDispatcher: ot, ReactCurrentBatchConfig: El, ReactCurrentOwner: If };
function o0() {
  throw Error("act(...) is not supported in production builds of React.");
}
ue.Children = { map: $s, forEach: function(e, t, n) {
  $s(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return $s(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return $s(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Pf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = qo;
ue.Fragment = sE;
ue.Profiler = aE;
ue.PureComponent = Tf;
ue.StrictMode = lE;
ue.Suspense = fE;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vE;
ue.act = o0;
ue.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zy({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = If.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) t0.call(t, a) && !n0.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: xs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ue.createContext = function(e) {
  return e = { $$typeof: uE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: cE, _context: e }, e.Consumer = e;
};
ue.createElement = r0;
ue.createFactory = function(e) {
  var t = r0.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: dE, render: e };
};
ue.isValidElement = Pf;
ue.lazy = function(e) {
  return { $$typeof: hE, _payload: { _status: -1, _result: e }, _init: xE };
};
ue.memo = function(e, t) {
  return { $$typeof: pE, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = El.transition;
  El.transition = {};
  try {
    e();
  } finally {
    El.transition = t;
  }
};
ue.unstable_act = o0;
ue.useCallback = function(e, t) {
  return ot.current.useCallback(e, t);
};
ue.useContext = function(e) {
  return ot.current.useContext(e);
};
ue.useDebugValue = function() {
};
ue.useDeferredValue = function(e) {
  return ot.current.useDeferredValue(e);
};
ue.useEffect = function(e, t) {
  return ot.current.useEffect(e, t);
};
ue.useId = function() {
  return ot.current.useId();
};
ue.useImperativeHandle = function(e, t, n) {
  return ot.current.useImperativeHandle(e, t, n);
};
ue.useInsertionEffect = function(e, t) {
  return ot.current.useInsertionEffect(e, t);
};
ue.useLayoutEffect = function(e, t) {
  return ot.current.useLayoutEffect(e, t);
};
ue.useMemo = function(e, t) {
  return ot.current.useMemo(e, t);
};
ue.useReducer = function(e, t, n) {
  return ot.current.useReducer(e, t, n);
};
ue.useRef = function(e) {
  return ot.current.useRef(e);
};
ue.useState = function(e) {
  return ot.current.useState(e);
};
ue.useSyncExternalStore = function(e, t, n) {
  return ot.current.useSyncExternalStore(e, t, n);
};
ue.useTransition = function() {
  return ot.current.useTransition();
};
ue.version = "18.3.1";
Qy.exports = ue;
var b = Qy.exports;
const Sn = /* @__PURE__ */ kf(b), i0 = /* @__PURE__ */ oE({
  __proto__: null,
  default: Sn
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wE = b, bE = Symbol.for("react.element"), SE = Symbol.for("react.fragment"), NE = Object.prototype.hasOwnProperty, EE = wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, CE = { key: !0, ref: !0, __self: !0, __source: !0 };
function s0(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) NE.call(t, r) && !CE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: bE, type: e, key: i, ref: s, props: o, _owner: EE.current };
}
Ya.Fragment = SE;
Ya.jsx = s0;
Ya.jsxs = s0;
Xy.exports = Ya;
var f = Xy.exports, l0 = { exports: {} }, a0 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs = b;
function _E(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var kE = typeof Object.is == "function" ? Object.is : _E, TE = vs.useSyncExternalStore, jE = vs.useRef, IE = vs.useEffect, PE = vs.useMemo, ME = vs.useDebugValue;
a0.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = jE(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = PE(
    function() {
      function a(h) {
        if (!c) {
          if (c = !0, d = h, h = r(h), o !== void 0 && s.hasValue) {
            var m = s.value;
            if (o(m, h))
              return u = m;
          }
          return u = h;
        }
        if (m = u, kE(d, h)) return m;
        var x = r(h);
        return o !== void 0 && o(m, x) ? (d = h, m) : (d = h, u = x);
      }
      var c = !1, d, u, p = n === void 0 ? null : n;
      return [
        function() {
          return a(t());
        },
        p === null ? void 0 : function() {
          return a(p());
        }
      ];
    },
    [t, n, r, o]
  );
  var l = TE(e, i[0], i[1]);
  return IE(
    function() {
      s.hasValue = !0, s.value = l;
    },
    [l]
  ), ME(l), l;
};
l0.exports = a0;
var AE = l0.exports;
function RE(e) {
  e();
}
function DE() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      RE(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = t = {
        callback: n,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : e = o, function() {
        !r || e === null || (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
      };
    }
  };
}
var jh = {
  notify() {
  },
  get: () => []
};
function LE(e, t) {
  let n, r = jh, o = 0, i = !1;
  function s(x) {
    d();
    const w = r.subscribe(x);
    let g = !1;
    return () => {
      g || (g = !0, w(), u());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    m.onStateChange && m.onStateChange();
  }
  function c() {
    return i;
  }
  function d() {
    o++, n || (n = e.subscribe(a), r = DE());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = jh);
  }
  function p() {
    i || (i = !0, d());
  }
  function h() {
    i && (i = !1, u());
  }
  const m = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: c,
    trySubscribe: p,
    tryUnsubscribe: h,
    getListeners: () => r
  };
  return m;
}
var OE = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", FE = /* @__PURE__ */ OE(), zE = () => typeof navigator < "u" && navigator.product === "ReactNative", $E = /* @__PURE__ */ zE(), HE = () => FE || $E ? b.useLayoutEffect : b.useEffect, VE = /* @__PURE__ */ HE(), Uc = /* @__PURE__ */ Symbol.for("react-redux-context"), Kc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function BE() {
  if (!b.createContext) return {};
  const e = Kc[Uc] ?? (Kc[Uc] = /* @__PURE__ */ new Map());
  let t = e.get(b.createContext);
  return t || (t = b.createContext(
    null
  ), e.set(b.createContext, t)), t;
}
var dr = /* @__PURE__ */ BE();
function UE(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = b.useMemo(() => {
    const a = LE(o);
    return {
      store: o,
      subscription: a,
      getServerState: r ? () => r : void 0
    };
  }, [o, r]), s = b.useMemo(() => o.getState(), [o]);
  VE(() => {
    const { subscription: a } = i;
    return a.onStateChange = a.notifyNestedSubs, a.trySubscribe(), s !== o.getState() && a.notifyNestedSubs(), () => {
      a.tryUnsubscribe(), a.onStateChange = void 0;
    };
  }, [i, s]);
  const l = n || dr;
  return /* @__PURE__ */ b.createElement(l.Provider, { value: i }, t);
}
var KE = UE;
function Mf(e = dr) {
  return function() {
    return b.useContext(e);
  };
}
var c0 = /* @__PURE__ */ Mf();
function u0(e = dr) {
  const t = e === dr ? c0 : (
    // @ts-ignore
    Mf(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var WE = /* @__PURE__ */ u0();
function YE(e = dr) {
  const t = e === dr ? WE : u0(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Nt = /* @__PURE__ */ YE(), GE = (e, t) => e === t;
function XE(e = dr) {
  const t = e === dr ? c0 : Mf(e), n = (r, o = {}) => {
    const { equalityFn: i = GE } = typeof o == "function" ? { equalityFn: o } : o, s = t(), { store: l, subscription: a, getServerState: c } = s;
    b.useRef(!0);
    const d = b.useCallback(
      {
        [r.name](p) {
          return r(p);
        }
      }[r.name],
      [r]
    ), u = AE.useSyncExternalStoreWithSelector(
      a.addNestedSub,
      l.getState,
      c || l.getState,
      d,
      i
    );
    return b.useDebugValue(u), u;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var xe = /* @__PURE__ */ XE();
function Be(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var QE = typeof Symbol == "function" && Symbol.observable || "@@observable", Ih = QE, Wc = () => Math.random().toString(36).substring(7).split("").join("."), qE = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Wc()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Wc()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Wc()}`
}, Wl = qE;
function Af(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function d0(e, t, n) {
  if (typeof e != "function")
    throw new Error(Be(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Be(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Be(1));
    return n(d0)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, l = 0, a = !1;
  function c() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((w, g) => {
      s.set(g, w);
    }));
  }
  function d() {
    if (a)
      throw new Error(Be(3));
    return o;
  }
  function u(w) {
    if (typeof w != "function")
      throw new Error(Be(4));
    if (a)
      throw new Error(Be(5));
    let g = !0;
    c();
    const v = l++;
    return s.set(v, w), function() {
      if (g) {
        if (a)
          throw new Error(Be(6));
        g = !1, c(), s.delete(v), i = null;
      }
    };
  }
  function p(w) {
    if (!Af(w))
      throw new Error(Be(7));
    if (typeof w.type > "u")
      throw new Error(Be(8));
    if (typeof w.type != "string")
      throw new Error(Be(17));
    if (a)
      throw new Error(Be(9));
    try {
      a = !0, o = r(o, w);
    } finally {
      a = !1;
    }
    return (i = s).forEach((v) => {
      v();
    }), w;
  }
  function h(w) {
    if (typeof w != "function")
      throw new Error(Be(10));
    r = w, p({
      type: Wl.REPLACE
    });
  }
  function m() {
    const w = u;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(g) {
        if (typeof g != "object" || g === null)
          throw new Error(Be(11));
        function v() {
          const S = g;
          S.next && S.next(d());
        }
        return v(), {
          unsubscribe: w(v)
        };
      },
      [Ih]() {
        return this;
      }
    };
  }
  return p({
    type: Wl.INIT
  }), {
    dispatch: p,
    subscribe: u,
    getState: d,
    replaceReducer: h,
    [Ih]: m
  };
}
function ZE(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Wl.INIT
    }) > "u")
      throw new Error(Be(12));
    if (typeof n(void 0, {
      type: Wl.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Be(13));
  });
}
function JE(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    ZE(n);
  } catch (i) {
    o = i;
  }
  return function(s = {}, l) {
    if (o)
      throw o;
    let a = !1;
    const c = {};
    for (let d = 0; d < r.length; d++) {
      const u = r[d], p = n[u], h = s[u], m = p(h, l);
      if (typeof m > "u")
        throw l && l.type, new Error(Be(14));
      c[u] = m, a = a || m !== h;
    }
    return a = a || r.length !== Object.keys(s).length, a ? c : s;
  };
}
function Yl(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function eC(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(Be(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (a, ...c) => i(a, ...c)
    }, l = e.map((a) => a(s));
    return i = Yl(...l)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function tC(e) {
  return Af(e) && "type" in e && typeof e.type == "string";
}
var f0 = Symbol.for("immer-nothing"), Ph = Symbol.for("immer-draftable"), rt = Symbol.for("immer-state");
function Ut(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var yt = Object, Ao = yt.getPrototypeOf, Gl = "constructor", Ga = "prototype", Gu = "configurable", Xl = "enumerable", Cl = "writable", zi = "value", Pn = (e) => !!e && !!e[rt];
function Qt(e) {
  var t;
  return e ? p0(e) || Qa(e) || !!e[Ph] || !!((t = e[Gl]) != null && t[Ph]) || qa(e) || Za(e) : !1;
}
var nC = yt[Ga][Gl].toString(), Mh = /* @__PURE__ */ new WeakMap();
function p0(e) {
  if (!e || !Rf(e))
    return !1;
  const t = Ao(e);
  if (t === null || t === yt[Ga])
    return !0;
  const n = yt.hasOwnProperty.call(t, Gl) && t[Gl];
  if (n === Object)
    return !0;
  if (!io(n))
    return !1;
  let r = Mh.get(n);
  return r === void 0 && (r = Function.toString.call(n), Mh.set(n, r)), r === nC;
}
function Xa(e, t, n = !0) {
  ws(e) === 0 ? (n ? Reflect.ownKeys(e) : yt.keys(e)).forEach((o) => {
    t(o, e[o], e);
  }) : e.forEach((r, o) => t(o, r, e));
}
function ws(e) {
  const t = e[rt];
  return t ? t.type_ : Qa(e) ? 1 : qa(e) ? 2 : Za(e) ? 3 : 0;
}
var Ah = (e, t, n = ws(e)) => n === 2 ? e.has(t) : yt[Ga].hasOwnProperty.call(e, t), Xu = (e, t, n = ws(e)) => (
  // @ts-ignore
  n === 2 ? e.get(t) : e[t]
), Ql = (e, t, n, r = ws(e)) => {
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function rC(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Qa = Array.isArray, qa = (e) => e instanceof Map, Za = (e) => e instanceof Set, Rf = (e) => typeof e == "object", io = (e) => typeof e == "function", Yc = (e) => typeof e == "boolean";
function oC(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var En = (e) => e.copy_ || e.base_, Df = (e) => e.modified_ ? e.copy_ : e.base_;
function Qu(e, t) {
  if (qa(e))
    return new Map(e);
  if (Za(e))
    return new Set(e);
  if (Qa(e))
    return Array[Ga].slice.call(e);
  const n = p0(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = yt.getOwnPropertyDescriptors(e);
    delete r[rt];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const s = o[i], l = r[s];
      l[Cl] === !1 && (l[Cl] = !0, l[Gu] = !0), (l.get || l.set) && (r[s] = {
        [Gu]: !0,
        [Cl]: !0,
        // could live with !!desc.set as well here...
        [Xl]: l[Xl],
        [zi]: e[s]
      });
    }
    return yt.create(Ao(e), r);
  } else {
    const r = Ao(e);
    if (r !== null && n)
      return { ...e };
    const o = yt.create(r);
    return yt.assign(o, e);
  }
}
function Lf(e, t = !1) {
  return Ja(e) || Pn(e) || !Qt(e) || (ws(e) > 1 && yt.defineProperties(e, {
    set: Hs,
    add: Hs,
    clear: Hs,
    delete: Hs
  }), yt.freeze(e), t && Xa(
    e,
    (n, r) => {
      Lf(r, !0);
    },
    !1
  )), e;
}
function iC() {
  Ut(2);
}
var Hs = {
  [zi]: iC
};
function Ja(e) {
  return e === null || !Rf(e) ? !0 : yt.isFrozen(e);
}
var ql = "MapSet", qu = "Patches", Rh = "ArrayMethods", h0 = {};
function Lr(e) {
  const t = h0[e];
  return t || Ut(0, e), t;
}
var Dh = (e) => !!h0[e], $i, m0 = () => $i, sC = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Dh(ql) ? Lr(ql) : void 0,
  arrayMethodsPlugin_: Dh(Rh) ? Lr(Rh) : void 0
});
function Lh(e, t) {
  t && (e.patchPlugin_ = Lr(qu), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Zu(e) {
  Ju(e), e.drafts_.forEach(lC), e.drafts_ = null;
}
function Ju(e) {
  e === $i && ($i = e.parent_);
}
var Oh = (e) => $i = sC($i, e);
function lC(e) {
  const t = e[rt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Fh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  if (e !== void 0 && e !== n) {
    n[rt].modified_ && (Zu(t), Ut(4)), Qt(e) && (e = zh(t, e));
    const { patchPlugin_: o } = t;
    o && o.generateReplacementPatches_(
      n[rt].base_,
      e,
      t
    );
  } else
    e = zh(t, n);
  return aC(t, e, !0), Zu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== f0 ? e : void 0;
}
function zh(e, t) {
  if (Ja(t))
    return t;
  const n = t[rt];
  if (!n)
    return Zl(t, e.handledSet_, e);
  if (!ec(n, e))
    return t;
  if (!n.modified_)
    return n.base_;
  if (!n.finalized_) {
    const { callbacks_: r } = n;
    if (r)
      for (; r.length > 0; )
        r.pop()(e);
    x0(n, e);
  }
  return n.copy_;
}
function aC(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Lf(t, n);
}
function g0(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var ec = (e, t) => e.scope_ === t, cC = [];
function y0(e, t, n, r) {
  const o = En(e), i = e.type_;
  if (r !== void 0 && Xu(o, r, i) === t) {
    Ql(o, r, n, i);
    return;
  }
  if (!e.draftLocations_) {
    const l = e.draftLocations_ = /* @__PURE__ */ new Map();
    Xa(o, (a, c) => {
      if (Pn(c)) {
        const d = l.get(c) || [];
        d.push(a), l.set(c, d);
      }
    });
  }
  const s = e.draftLocations_.get(t) ?? cC;
  for (const l of s)
    Ql(o, l, n, i);
}
function uC(e, t, n) {
  e.callbacks_.push(function(o) {
    var l;
    const i = t;
    if (!i || !ec(i, o))
      return;
    (l = o.mapSetPlugin_) == null || l.fixSetContents(i);
    const s = Df(i);
    y0(e, i.draft_ ?? i, s, n), x0(i, o);
  });
}
function x0(e, t) {
  var r;
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (((r = e.assigned_) == null ? void 0 : r.size) ?? 0) > 0)) {
    const { patchPlugin_: o } = t;
    if (o) {
      const i = o.getPath(e);
      i && o.generatePatches_(e, i, t);
    }
    g0(e);
  }
}
function dC(e, t, n) {
  const { scope_: r } = e;
  if (Pn(n)) {
    const o = n[rt];
    ec(o, r) && o.callbacks_.push(function() {
      _l(e);
      const s = Df(o);
      y0(e, n, s, t);
    });
  } else Qt(n) && e.callbacks_.push(function() {
    const i = En(e);
    e.type_ === 3 ? i.has(n) && Zl(n, r.handledSet_, r) : Xu(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && Zl(
      Xu(e.copy_, t, e.type_),
      r.handledSet_,
      r
    );
  });
}
function Zl(e, t, n) {
  return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || Pn(e) || t.has(e) || !Qt(e) || Ja(e) || (t.add(e), Xa(e, (r, o) => {
    if (Pn(o)) {
      const i = o[rt];
      if (ec(i, n)) {
        const s = Df(i);
        Ql(e, r, s, e.type_), g0(i);
      }
    } else Qt(o) && Zl(o, t, n);
  })), e;
}
function fC(e, t) {
  const n = Qa(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : m0(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let o = r, i = Jl;
  n && (o = [r], i = Hi);
  const { revoke: s, proxy: l } = Proxy.revocable(o, i);
  return r.draft_ = l, r.revoke_ = s, [l, r];
}
var Jl = {
  get(e, t) {
    if (t === rt)
      return e;
    let n = e.scope_.arrayMethodsPlugin_;
    const r = e.type_ === 1 && typeof t == "string";
    if (r && n != null && n.isArrayOperationMethod(t))
      return n.createMethodInterceptor(e, t);
    const o = En(e);
    if (!Ah(o, t, e.type_))
      return pC(e, o, t);
    const i = o[t];
    if (e.finalized_ || !Qt(i) || r && e.operationMethod && (n != null && n.isMutatingArrayMethod(
      e.operationMethod
    )) && oC(t))
      return i;
    if (i === Gc(e.base_, t)) {
      _l(e);
      const s = e.type_ === 1 ? +t : t, l = td(e.scope_, i, e, s);
      return e.copy_[s] = l;
    }
    return i;
  },
  has(e, t) {
    return t in En(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(En(e));
  },
  set(e, t, n) {
    const r = v0(En(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Gc(En(e), t), i = o == null ? void 0 : o[rt];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
      if (rC(n, o) && (n !== void 0 || Ah(e.base_, t, e.type_)))
        return !0;
      _l(e), ed(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), dC(e, t, n)), !0;
  },
  deleteProperty(e, t) {
    return _l(e), Gc(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), ed(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = En(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      [Cl]: !0,
      [Gu]: e.type_ !== 1 || t !== "length",
      [Xl]: r[Xl],
      [zi]: n[t]
    };
  },
  defineProperty() {
    Ut(11);
  },
  getPrototypeOf(e) {
    return Ao(e.base_);
  },
  setPrototypeOf() {
    Ut(12);
  }
}, Hi = {};
for (let e in Jl) {
  let t = Jl[e];
  Hi[e] = function() {
    const n = arguments;
    return n[0] = n[0][0], t.apply(this, n);
  };
}
Hi.deleteProperty = function(e, t) {
  return Hi.set.call(this, e, t, void 0);
};
Hi.set = function(e, t, n) {
  return Jl.set.call(this, e[0], t, n, e[0]);
};
function Gc(e, t) {
  const n = e[rt];
  return (n ? En(n) : e)[t];
}
function pC(e, t, n) {
  var o;
  const r = v0(t, n);
  return r ? zi in r ? r[zi] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function v0(e, t) {
  if (!(t in e))
    return;
  let n = Ao(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Ao(n);
  }
}
function ed(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ed(e.parent_));
}
function _l(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = Qu(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var hC = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (t, n, r) => {
      if (io(t) && !io(n)) {
        const i = n;
        n = t;
        const s = this;
        return function(a = i, ...c) {
          return s.produce(a, (d) => n.call(this, d, ...c));
        };
      }
      io(n) || Ut(6), r !== void 0 && !io(r) && Ut(7);
      let o;
      if (Qt(t)) {
        const i = Oh(this), s = td(i, t, void 0);
        let l = !0;
        try {
          o = n(s), l = !1;
        } finally {
          l ? Zu(i) : Ju(i);
        }
        return Lh(i, r), Fh(o, i);
      } else if (!t || !Rf(t)) {
        if (o = n(t), o === void 0 && (o = t), o === f0 && (o = void 0), this.autoFreeze_ && Lf(o, !0), r) {
          const i = [], s = [];
          Lr(qu).generateReplacementPatches_(t, o, {
            patches_: i,
            inversePatches_: s
          }), r(i, s);
        }
        return o;
      } else
        Ut(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (io(t))
        return (s, ...l) => this.produceWithPatches(s, (a) => t(a, ...l));
      let r, o;
      return [this.produce(t, n, (s, l) => {
        r = s, o = l;
      }), r, o];
    }, Yc(e == null ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), Yc(e == null ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), Yc(e == null ? void 0 : e.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Qt(e) || Ut(8), Pn(e) && (e = mC(e));
    const t = Oh(this), n = td(t, e, void 0);
    return n[rt].isManual_ = !0, Ju(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[rt];
    (!n || !n.isManual_) && Ut(9);
    const { scope_: r } = n;
    return Lh(r, t), Fh(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Lr(qu).applyPatches_;
    return Pn(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function td(e, t, n, r) {
  const [o, i] = qa(t) ? Lr(ql).proxyMap_(t, n) : Za(t) ? Lr(ql).proxySet_(t, n) : fC(t, n);
  return ((n == null ? void 0 : n.scope_) ?? m0()).drafts_.push(o), i.callbacks_ = (n == null ? void 0 : n.callbacks_) ?? [], i.key_ = r, n && r !== void 0 ? uC(n, i, r) : i.callbacks_.push(function(a) {
    var d;
    (d = a.mapSetPlugin_) == null || d.fixSetContents(i);
    const { patchPlugin_: c } = a;
    i.modified_ && c && c.generatePatches_(i, [], a);
  }), o;
}
function mC(e) {
  return Pn(e) || Ut(10, e), w0(e);
}
function w0(e) {
  if (!Qt(e) || Ja(e))
    return e;
  const t = e[rt];
  let n, r = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Qu(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
  } else
    n = Qu(e, !0);
  return Xa(
    n,
    (o, i) => {
      Ql(n, o, w0(i));
    },
    r
  ), t && (t.finalized_ = !1), n;
}
var gC = new hC(), b0 = gC.produce;
function S0(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var yC = S0(), xC = S0, vC = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Yl : Yl.apply(null, arguments);
};
function $h(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(jn(0));
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: r[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => tC(r) && r.type === e, n;
}
var N0 = class xi extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, xi.prototype);
  }
  static get [Symbol.species]() {
    return xi;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new xi(...t[0].concat(this)) : new xi(...t.concat(this));
  }
};
function Hh(e) {
  return Qt(e) ? b0(e, () => {
  }) : e;
}
function Vs(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function wC(e) {
  return typeof e == "boolean";
}
var bC = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new N0();
  return n && (wC(n) ? s.push(yC) : s.push(xC(n.extraArgument))), s;
}, SC = "RTK_autoBatch", Vh = (e) => (t) => {
  setTimeout(t, e);
}, NC = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const l = /* @__PURE__ */ new Set(), a = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Vh(10)
  ) : e.type === "callback" ? e.queueNotification : Vh(e.timeout), c = () => {
    s = !1, i && (i = !1, l.forEach((d) => d()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(d) {
      const u = () => o && d(), p = r.subscribe(u);
      return l.add(d), () => {
        p(), l.delete(d);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(d) {
      var u;
      try {
        return o = !((u = d == null ? void 0 : d.meta) != null && u[SC]), i = !o, i && (s || (s = !0, a(c))), r.dispatch(d);
      } finally {
        o = !0;
      }
    }
  });
}, EC = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new N0(e);
  return r && o.push(NC(typeof r == "object" ? r : void 0)), o;
};
function CC(e) {
  const t = bC(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let l;
  if (typeof n == "function")
    l = n;
  else if (Af(n))
    l = JE(n);
  else
    throw new Error(jn(1));
  let a;
  typeof r == "function" ? a = r(t) : a = t();
  let c = Yl;
  o && (c = vC({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof o == "object" && o
  }));
  const d = eC(...a), u = EC(d);
  let p = typeof s == "function" ? s(u) : u();
  const h = c(...p);
  return d0(l, i, h);
}
function E0(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      const l = typeof i == "string" ? i : i.type;
      if (!l)
        throw new Error(jn(28));
      if (l in t)
        throw new Error(jn(29));
      return t[l] = s, o;
    },
    addAsyncThunk(i, s) {
      return s.pending && (t[i.pending.type] = s.pending), s.rejected && (t[i.rejected.type] = s.rejected), s.fulfilled && (t[i.fulfilled.type] = s.fulfilled), s.settled && n.push({
        matcher: i.settled,
        reducer: s.settled
      }), o;
    },
    addMatcher(i, s) {
      return n.push({
        matcher: i,
        reducer: s
      }), o;
    },
    addDefaultCase(i) {
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function _C(e) {
  return typeof e == "function";
}
function kC(e, t) {
  let [n, r, o] = E0(t), i;
  if (_C(e))
    i = () => Hh(e());
  else {
    const l = Hh(e);
    i = () => l;
  }
  function s(l = i(), a) {
    let c = [n[a.type], ...r.filter(({
      matcher: d
    }) => d(a)).map(({
      reducer: d
    }) => d)];
    return c.filter((d) => !!d).length === 0 && (c = [o]), c.reduce((d, u) => {
      if (u)
        if (Pn(d)) {
          const h = u(d, a);
          return h === void 0 ? d : h;
        } else {
          if (Qt(d))
            return b0(d, (p) => u(p, a));
          {
            const p = u(d, a);
            if (p === void 0) {
              if (d === null)
                return d;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return d;
    }, l);
  }
  return s.getInitialState = i, s;
}
var TC = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function jC(e, t) {
  return `${e}/${t}`;
}
function IC({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[TC];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(jn(11));
    const l = (typeof o.reducers == "function" ? o.reducers(MC()) : o.reducers) || {}, a = Object.keys(l), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, d = {
      addCase(S, E) {
        const C = typeof S == "string" ? S : S.type;
        if (!C)
          throw new Error(jn(12));
        if (C in c.sliceCaseReducersByType)
          throw new Error(jn(13));
        return c.sliceCaseReducersByType[C] = E, d;
      },
      addMatcher(S, E) {
        return c.sliceMatchers.push({
          matcher: S,
          reducer: E
        }), d;
      },
      exposeAction(S, E) {
        return c.actionCreators[S] = E, d;
      },
      exposeCaseReducer(S, E) {
        return c.sliceCaseReducersByName[S] = E, d;
      }
    };
    a.forEach((S) => {
      const E = l[S], C = {
        reducerName: S,
        type: jC(i, S),
        createNotation: typeof o.reducers == "function"
      };
      RC(E) ? LC(C, E, d, t) : AC(C, E, d);
    });
    function u() {
      const [S = {}, E = [], C = void 0] = typeof o.extraReducers == "function" ? E0(o.extraReducers) : [o.extraReducers], N = {
        ...S,
        ...c.sliceCaseReducersByType
      };
      return kC(o.initialState, (P) => {
        for (let A in N)
          P.addCase(A, N[A]);
        for (let A of c.sliceMatchers)
          P.addMatcher(A.matcher, A.reducer);
        for (let A of E)
          P.addMatcher(A.matcher, A.reducer);
        C && P.addDefaultCase(C);
      });
    }
    const p = (S) => S, h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new WeakMap();
    let x;
    function w(S, E) {
      return x || (x = u()), x(S, E);
    }
    function g() {
      return x || (x = u()), x.getInitialState();
    }
    function v(S, E = !1) {
      function C(P) {
        let A = P[S];
        return typeof A > "u" && E && (A = Vs(m, C, g)), A;
      }
      function N(P = p) {
        const A = Vs(h, E, () => /* @__PURE__ */ new WeakMap());
        return Vs(A, P, () => {
          const L = {};
          for (const [_, M] of Object.entries(o.selectors ?? {}))
            L[_] = PC(M, P, () => Vs(m, P, g), E);
          return L;
        });
      }
      return {
        reducerPath: S,
        getSelectors: N,
        get selectors() {
          return N(C);
        },
        selectSlice: C
      };
    }
    const y = {
      name: i,
      reducer: w,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: g,
      ...v(s),
      injectInto(S, {
        reducerPath: E,
        ...C
      } = {}) {
        const N = E ?? s;
        return S.inject({
          reducerPath: N,
          reducer: w
        }, C), {
          ...y,
          ...v(N, !0)
        };
      }
    };
    return y;
  };
}
function PC(e, t, n, r) {
  function o(i, ...s) {
    let l = t(i);
    return typeof l > "u" && r && (l = n()), e(l, ...s);
  }
  return o.unwrapped = e, o;
}
var yr = /* @__PURE__ */ IC();
function MC() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function AC({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !DC(r))
      throw new Error(jn(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? $h(e, s) : $h(e));
}
function RC(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function DC(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function LC({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(jn(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: l,
    rejected: a,
    settled: c,
    options: d
  } = n, u = o(e, i, d);
  r.exposeAction(t, u), s && r.addCase(u.fulfilled, s), l && r.addCase(u.pending, l), a && r.addCase(u.rejected, a), c && r.addMatcher(u.settled, c), r.exposeCaseReducer(t, {
    fulfilled: s || Bs,
    pending: l || Bs,
    rejected: a || Bs,
    settled: c || Bs
  });
}
function Bs() {
}
function jn(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
function De(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = De(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var OC = { value: () => {
} };
function tc() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new kl(n);
}
function kl(e) {
  this._ = e;
}
function FC(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
kl.prototype = tc.prototype = {
  constructor: kl,
  on: function(e, t) {
    var n = this._, r = FC(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = zC(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Bh(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Bh(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new kl(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  }
};
function zC(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Bh(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = OC, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var nd = "http://www.w3.org/1999/xhtml";
const Uh = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: nd,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function nc(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Uh.hasOwnProperty(t) ? { space: Uh[t], local: e } : e;
}
function $C(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === nd && t.documentElement.namespaceURI === nd ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function HC(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function C0(e) {
  var t = nc(e);
  return (t.local ? HC : $C)(t);
}
function VC() {
}
function Of(e) {
  return e == null ? VC : function() {
    return this.querySelector(e);
  };
}
function BC(e) {
  typeof e != "function" && (e = Of(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = new Array(s), a, c, d = 0; d < s; ++d)
      (a = i[d]) && (c = e.call(a, a.__data__, d, i)) && ("__data__" in a && (c.__data__ = a.__data__), l[d] = c);
  return new bt(r, this._parents);
}
function UC(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function KC() {
  return [];
}
function _0(e) {
  return e == null ? KC : function() {
    return this.querySelectorAll(e);
  };
}
function WC(e) {
  return function() {
    return UC(e.apply(this, arguments));
  };
}
function YC(e) {
  typeof e == "function" ? e = WC(e) : e = _0(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], l = s.length, a, c = 0; c < l; ++c)
      (a = s[c]) && (r.push(e.call(a, a.__data__, c, s)), o.push(a));
  return new bt(r, o);
}
function k0(e) {
  return function() {
    return this.matches(e);
  };
}
function T0(e) {
  return function(t) {
    return t.matches(e);
  };
}
var GC = Array.prototype.find;
function XC(e) {
  return function() {
    return GC.call(this.children, e);
  };
}
function QC() {
  return this.firstElementChild;
}
function qC(e) {
  return this.select(e == null ? QC : XC(typeof e == "function" ? e : T0(e)));
}
var ZC = Array.prototype.filter;
function JC() {
  return Array.from(this.children);
}
function e_(e) {
  return function() {
    return ZC.call(this.children, e);
  };
}
function t_(e) {
  return this.selectAll(e == null ? JC : e_(typeof e == "function" ? e : T0(e)));
}
function n_(e) {
  typeof e != "function" && (e = k0(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], a, c = 0; c < s; ++c)
      (a = i[c]) && e.call(a, a.__data__, c, i) && l.push(a);
  return new bt(r, this._parents);
}
function j0(e) {
  return new Array(e.length);
}
function r_() {
  return new bt(this._enter || this._groups.map(j0), this._parents);
}
function ea(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ea.prototype = {
  constructor: ea,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function o_(e) {
  return function() {
    return e;
  };
}
function i_(e, t, n, r, o, i) {
  for (var s = 0, l, a = t.length, c = i.length; s < c; ++s)
    (l = t[s]) ? (l.__data__ = i[s], r[s] = l) : n[s] = new ea(e, i[s]);
  for (; s < a; ++s)
    (l = t[s]) && (o[s] = l);
}
function s_(e, t, n, r, o, i, s) {
  var l, a, c = /* @__PURE__ */ new Map(), d = t.length, u = i.length, p = new Array(d), h;
  for (l = 0; l < d; ++l)
    (a = t[l]) && (p[l] = h = s.call(a, a.__data__, l, t) + "", c.has(h) ? o[l] = a : c.set(h, a));
  for (l = 0; l < u; ++l)
    h = s.call(e, i[l], l, i) + "", (a = c.get(h)) ? (r[l] = a, a.__data__ = i[l], c.delete(h)) : n[l] = new ea(e, i[l]);
  for (l = 0; l < d; ++l)
    (a = t[l]) && c.get(p[l]) === a && (o[l] = a);
}
function l_(e) {
  return e.__data__;
}
function a_(e, t) {
  if (!arguments.length) return Array.from(this, l_);
  var n = t ? s_ : i_, r = this._parents, o = this._groups;
  typeof e != "function" && (e = o_(e));
  for (var i = o.length, s = new Array(i), l = new Array(i), a = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], u = o[c], p = u.length, h = c_(e.call(d, d && d.__data__, c, r)), m = h.length, x = l[c] = new Array(m), w = s[c] = new Array(m), g = a[c] = new Array(p);
    n(d, u, x, w, g, h, t);
    for (var v = 0, y = 0, S, E; v < m; ++v)
      if (S = x[v]) {
        for (v >= y && (y = v + 1); !(E = w[y]) && ++y < m; ) ;
        S._next = E || null;
      }
  }
  return s = new bt(s, r), s._enter = l, s._exit = a, s;
}
function c_(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function u_() {
  return new bt(this._exit || this._groups.map(j0), this._parents);
}
function d_(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function f_(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), l = new Array(o), a = 0; a < s; ++a)
    for (var c = n[a], d = r[a], u = c.length, p = l[a] = new Array(u), h, m = 0; m < u; ++m)
      (h = c[m] || d[m]) && (p[m] = h);
  for (; a < o; ++a)
    l[a] = n[a];
  return new bt(l, this._parents);
}
function p_() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function h_(e) {
  e || (e = m_);
  function t(u, p) {
    return u && p ? e(u.__data__, p.__data__) : !u - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], l = s.length, a = o[i] = new Array(l), c, d = 0; d < l; ++d)
      (c = s[d]) && (a[d] = c);
    a.sort(t);
  }
  return new bt(o, this._parents).order();
}
function m_(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function g_() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function y_() {
  return Array.from(this);
}
function x_() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function v_() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function w_() {
  return !this.node();
}
function b_(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, l; i < s; ++i)
      (l = o[i]) && e.call(l, l.__data__, i, o);
  return this;
}
function S_(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function N_(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function E_(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function C_(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function __(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function k_(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function T_(e, t) {
  var n = nc(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? N_ : S_ : typeof t == "function" ? n.local ? k_ : __ : n.local ? C_ : E_)(n, t));
}
function I0(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function j_(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function I_(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function P_(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function M_(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? j_ : typeof t == "function" ? P_ : I_)(e, t, n ?? "")) : Ro(this.node(), e);
}
function Ro(e, t) {
  return e.style.getPropertyValue(t) || I0(e).getComputedStyle(e, null).getPropertyValue(t);
}
function A_(e) {
  return function() {
    delete this[e];
  };
}
function R_(e, t) {
  return function() {
    this[e] = t;
  };
}
function D_(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function L_(e, t) {
  return arguments.length > 1 ? this.each((t == null ? A_ : typeof t == "function" ? D_ : R_)(e, t)) : this.node()[e];
}
function P0(e) {
  return e.trim().split(/^|\s+/);
}
function Ff(e) {
  return e.classList || new M0(e);
}
function M0(e) {
  this._node = e, this._names = P0(e.getAttribute("class") || "");
}
M0.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function A0(e, t) {
  for (var n = Ff(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function R0(e, t) {
  for (var n = Ff(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function O_(e) {
  return function() {
    A0(this, e);
  };
}
function F_(e) {
  return function() {
    R0(this, e);
  };
}
function z_(e, t) {
  return function() {
    (t.apply(this, arguments) ? A0 : R0)(this, e);
  };
}
function $_(e, t) {
  var n = P0(e + "");
  if (arguments.length < 2) {
    for (var r = Ff(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? z_ : t ? O_ : F_)(n, t));
}
function H_() {
  this.textContent = "";
}
function V_(e) {
  return function() {
    this.textContent = e;
  };
}
function B_(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function U_(e) {
  return arguments.length ? this.each(e == null ? H_ : (typeof e == "function" ? B_ : V_)(e)) : this.node().textContent;
}
function K_() {
  this.innerHTML = "";
}
function W_(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Y_(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function G_(e) {
  return arguments.length ? this.each(e == null ? K_ : (typeof e == "function" ? Y_ : W_)(e)) : this.node().innerHTML;
}
function X_() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Q_() {
  return this.each(X_);
}
function q_() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Z_() {
  return this.each(q_);
}
function J_(e) {
  var t = typeof e == "function" ? e : C0(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ek() {
  return null;
}
function tk(e, t) {
  var n = typeof e == "function" ? e : C0(e), r = t == null ? ek : typeof t == "function" ? t : Of(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function nk() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function rk() {
  return this.each(nk);
}
function ok() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ik() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function sk(e) {
  return this.select(e ? ik : ok);
}
function lk(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ak(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function ck(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function uk(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function dk(e, t, n) {
  return function() {
    var r = this.__on, o, i = ak(t);
    if (r) {
      for (var s = 0, l = r.length; s < l; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function fk(e, t, n) {
  var r = ck(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var a = 0, c = l.length, d; a < c; ++a)
        for (o = 0, d = l[a]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (l = t ? dk : uk, o = 0; o < i; ++o) this.each(l(r[o], t, n));
  return this;
}
function D0(e, t, n) {
  var r = I0(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function pk(e, t) {
  return function() {
    return D0(this, e, t);
  };
}
function hk(e, t) {
  return function() {
    return D0(this, e, t.apply(this, arguments));
  };
}
function mk(e, t) {
  return this.each((typeof t == "function" ? hk : pk)(e, t));
}
function* gk() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var L0 = [null];
function bt(e, t) {
  this._groups = e, this._parents = t;
}
function bs() {
  return new bt([[document.documentElement]], L0);
}
function yk() {
  return this;
}
bt.prototype = bs.prototype = {
  constructor: bt,
  select: BC,
  selectAll: YC,
  selectChild: qC,
  selectChildren: t_,
  filter: n_,
  data: a_,
  enter: r_,
  exit: u_,
  join: d_,
  merge: f_,
  selection: yk,
  order: p_,
  sort: h_,
  call: g_,
  nodes: y_,
  node: x_,
  size: v_,
  empty: w_,
  each: b_,
  attr: T_,
  style: M_,
  property: L_,
  classed: $_,
  text: U_,
  html: G_,
  raise: Q_,
  lower: Z_,
  append: J_,
  insert: tk,
  remove: rk,
  clone: sk,
  datum: lk,
  on: fk,
  dispatch: mk,
  [Symbol.iterator]: gk
};
function gt(e) {
  return typeof e == "string" ? new bt([[document.querySelector(e)]], [document.documentElement]) : new bt([[e]], L0);
}
function xk(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Ht(e, t) {
  if (e = xk(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const vk = { passive: !1 }, Vi = { capture: !0, passive: !1 };
function Xc(e) {
  e.stopImmediatePropagation();
}
function So(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function O0(e) {
  var t = e.document.documentElement, n = gt(e).on("dragstart.drag", So, Vi);
  "onselectstart" in t ? n.on("selectstart.drag", So, Vi) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function F0(e, t) {
  var n = e.document.documentElement, r = gt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", So, Vi), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Us = (e) => () => e;
function rd(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: l,
  dx: a,
  dy: c,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: a, enumerable: !0, configurable: !0 },
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
rd.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function wk(e) {
  return !e.ctrlKey && !e.button;
}
function bk() {
  return this.parentNode;
}
function Sk(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Nk() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function z0() {
  var e = wk, t = bk, n = Sk, r = Nk, o = {}, i = tc("start", "drag", "end"), s = 0, l, a, c, d, u = 0;
  function p(S) {
    S.on("mousedown.drag", h).filter(r).on("touchstart.drag", w).on("touchmove.drag", g, vk).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(S, E) {
    if (!(d || !e.call(this, S, E))) {
      var C = y(this, t.call(this, S, E), S, E, "mouse");
      C && (gt(S.view).on("mousemove.drag", m, Vi).on("mouseup.drag", x, Vi), O0(S.view), Xc(S), c = !1, l = S.clientX, a = S.clientY, C("start", S));
    }
  }
  function m(S) {
    if (So(S), !c) {
      var E = S.clientX - l, C = S.clientY - a;
      c = E * E + C * C > u;
    }
    o.mouse("drag", S);
  }
  function x(S) {
    gt(S.view).on("mousemove.drag mouseup.drag", null), F0(S.view, c), So(S), o.mouse("end", S);
  }
  function w(S, E) {
    if (e.call(this, S, E)) {
      var C = S.changedTouches, N = t.call(this, S, E), P = C.length, A, L;
      for (A = 0; A < P; ++A)
        (L = y(this, N, S, E, C[A].identifier, C[A])) && (Xc(S), L("start", S, C[A]));
    }
  }
  function g(S) {
    var E = S.changedTouches, C = E.length, N, P;
    for (N = 0; N < C; ++N)
      (P = o[E[N].identifier]) && (So(S), P("drag", S, E[N]));
  }
  function v(S) {
    var E = S.changedTouches, C = E.length, N, P;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), N = 0; N < C; ++N)
      (P = o[E[N].identifier]) && (Xc(S), P("end", S, E[N]));
  }
  function y(S, E, C, N, P, A) {
    var L = i.copy(), _ = Ht(A || C, E), M, j, k;
    if ((k = n.call(S, new rd("beforestart", {
      sourceEvent: C,
      target: p,
      identifier: P,
      active: s,
      x: _[0],
      y: _[1],
      dx: 0,
      dy: 0,
      dispatch: L
    }), N)) != null)
      return M = k.x - _[0] || 0, j = k.y - _[1] || 0, function D(R, O, I) {
        var T = _, F;
        switch (R) {
          case "start":
            o[P] = D, F = s++;
            break;
          case "end":
            delete o[P], --s;
          case "drag":
            _ = Ht(I || O, E), F = s;
            break;
        }
        L.call(
          R,
          S,
          new rd(R, {
            sourceEvent: O,
            subject: k,
            target: p,
            identifier: P,
            active: F,
            x: _[0] + M,
            y: _[1] + j,
            dx: _[0] - T[0],
            dy: _[1] - T[1],
            dispatch: L
          }),
          N
        );
      };
  }
  return p.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Us(!!S), p) : e;
  }, p.container = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Us(S), p) : t;
  }, p.subject = function(S) {
    return arguments.length ? (n = typeof S == "function" ? S : Us(S), p) : n;
  }, p.touchable = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Us(!!S), p) : r;
  }, p.on = function() {
    var S = i.on.apply(i, arguments);
    return S === i ? p : S;
  }, p.clickDistance = function(S) {
    return arguments.length ? (u = (S = +S) * S, p) : Math.sqrt(u);
  }, p;
}
function zf(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function $0(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ss() {
}
var Bi = 0.7, ta = 1 / Bi, No = "\\s*([+-]?\\d+)\\s*", Ui = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ek = /^#([0-9a-f]{3,8})$/, Ck = new RegExp(`^rgb\\(${No},${No},${No}\\)$`), _k = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`), kk = new RegExp(`^rgba\\(${No},${No},${No},${Ui}\\)$`), Tk = new RegExp(`^rgba\\(${cn},${cn},${cn},${Ui}\\)$`), jk = new RegExp(`^hsl\\(${Ui},${cn},${cn}\\)$`), Ik = new RegExp(`^hsla\\(${Ui},${cn},${cn},${Ui}\\)$`), Kh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
zf(Ss, Or, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Wh,
  // Deprecated! Use color.formatHex.
  formatHex: Wh,
  formatHex8: Pk,
  formatHsl: Mk,
  formatRgb: Yh,
  toString: Yh
});
function Wh() {
  return this.rgb().formatHex();
}
function Pk() {
  return this.rgb().formatHex8();
}
function Mk() {
  return H0(this).formatHsl();
}
function Yh() {
  return this.rgb().formatRgb();
}
function Or(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ek.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Gh(t) : n === 3 ? new at(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ks(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ks(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ck.exec(e)) ? new at(t[1], t[2], t[3], 1) : (t = _k.exec(e)) ? new at(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = kk.exec(e)) ? Ks(t[1], t[2], t[3], t[4]) : (t = Tk.exec(e)) ? Ks(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = jk.exec(e)) ? qh(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ik.exec(e)) ? qh(t[1], t[2] / 100, t[3] / 100, t[4]) : Kh.hasOwnProperty(e) ? Gh(Kh[e]) : e === "transparent" ? new at(NaN, NaN, NaN, 0) : null;
}
function Gh(e) {
  return new at(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ks(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new at(e, t, n, r);
}
function Ak(e) {
  return e instanceof Ss || (e = Or(e)), e ? (e = e.rgb(), new at(e.r, e.g, e.b, e.opacity)) : new at();
}
function od(e, t, n, r) {
  return arguments.length === 1 ? Ak(e) : new at(e, t, n, r ?? 1);
}
function at(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
zf(at, od, $0(Ss, {
  brighter(e) {
    return e = e == null ? ta : Math.pow(ta, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Bi : Math.pow(Bi, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new at(Ir(this.r), Ir(this.g), Ir(this.b), na(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Xh,
  // Deprecated! Use color.formatHex.
  formatHex: Xh,
  formatHex8: Rk,
  formatRgb: Qh,
  toString: Qh
}));
function Xh() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
}
function Rk() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Qh() {
  const e = na(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ir(this.r)}, ${Ir(this.g)}, ${Ir(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function na(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _r(e) {
  return e = Ir(e), (e < 16 ? "0" : "") + e.toString(16);
}
function qh(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Kt(e, t, n, r);
}
function H0(e) {
  if (e instanceof Kt) return new Kt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ss || (e = Or(e)), !e) return new Kt();
  if (e instanceof Kt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, l = i - o, a = (i + o) / 2;
  return l ? (t === i ? s = (n - r) / l + (n < r) * 6 : n === i ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= a < 0.5 ? i + o : 2 - i - o, s *= 60) : l = a > 0 && a < 1 ? 0 : s, new Kt(s, l, a, e.opacity);
}
function Dk(e, t, n, r) {
  return arguments.length === 1 ? H0(e) : new Kt(e, t, n, r ?? 1);
}
function Kt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
zf(Kt, Dk, $0(Ss, {
  brighter(e) {
    return e = e == null ? ta : Math.pow(ta, e), new Kt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Bi : Math.pow(Bi, e), new Kt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new at(
      Qc(e >= 240 ? e - 240 : e + 120, o, r),
      Qc(e, o, r),
      Qc(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Kt(Zh(this.h), Ws(this.s), Ws(this.l), na(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = na(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Zh(this.h)}, ${Ws(this.s) * 100}%, ${Ws(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Zh(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ws(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Qc(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const $f = (e) => () => e;
function Lk(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Ok(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Fk(e) {
  return (e = +e) == 1 ? V0 : function(t, n) {
    return n - t ? Ok(t, n, e) : $f(isNaN(t) ? n : t);
  };
}
function V0(e, t) {
  var n = t - e;
  return n ? Lk(e, n) : $f(isNaN(e) ? t : e);
}
const ra = function e(t) {
  var n = Fk(t);
  function r(o, i) {
    var s = n((o = od(o)).r, (i = od(i)).r), l = n(o.g, i.g), a = n(o.b, i.b), c = V0(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = l(d), o.b = a(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function zk(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function $k(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Hk(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = ki(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(l) {
    for (s = 0; s < r; ++s) i[s] = o[s](l);
    return i;
  };
}
function Vk(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function on(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Bk(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = ki(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var id = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qc = new RegExp(id.source, "g");
function Uk(e) {
  return function() {
    return e;
  };
}
function Kk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function B0(e, t) {
  var n = id.lastIndex = qc.lastIndex = 0, r, o, i, s = -1, l = [], a = [];
  for (e = e + "", t = t + ""; (r = id.exec(e)) && (o = qc.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), l[s] ? l[s] += i : l[++s] = i), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, a.push({ i: s, x: on(r, o) })), n = qc.lastIndex;
  return n < t.length && (i = t.slice(n), l[s] ? l[s] += i : l[++s] = i), l.length < 2 ? a[0] ? Kk(a[0].x) : Uk(t) : (t = a.length, function(c) {
    for (var d = 0, u; d < t; ++d) l[(u = a[d]).i] = u.x(c);
    return l.join("");
  });
}
function ki(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? $f(t) : (n === "number" ? on : n === "string" ? (r = Or(t)) ? (t = r, ra) : B0 : t instanceof Or ? ra : t instanceof Date ? Vk : $k(t) ? zk : Array.isArray(t) ? Hk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Bk : on)(e, t);
}
var Jh = 180 / Math.PI, sd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function U0(e, t, n, r, o, i) {
  var s, l, a;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (a = e * n + t * r) && (n -= e * a, r -= t * a), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, a /= l), e * r < t * n && (e = -e, t = -t, a = -a, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Jh,
    skewX: Math.atan(a) * Jh,
    scaleX: s,
    scaleY: l
  };
}
var Ys;
function Wk(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? sd : U0(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Yk(e) {
  return e == null || (Ys || (Ys = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ys.setAttribute("transform", e), !(e = Ys.transform.baseVal.consolidate())) ? sd : (e = e.matrix, U0(e.a, e.b, e.c, e.d, e.e, e.f));
}
function K0(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, u, p, h, m) {
    if (c !== u || d !== p) {
      var x = h.push("translate(", null, t, null, n);
      m.push({ i: x - 4, x: on(c, u) }, { i: x - 2, x: on(d, p) });
    } else (u || p) && h.push("translate(" + u + t + p + n);
  }
  function s(c, d, u, p) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), p.push({ i: u.push(o(u) + "rotate(", null, r) - 2, x: on(c, d) })) : d && u.push(o(u) + "rotate(" + d + r);
  }
  function l(c, d, u, p) {
    c !== d ? p.push({ i: u.push(o(u) + "skewX(", null, r) - 2, x: on(c, d) }) : d && u.push(o(u) + "skewX(" + d + r);
  }
  function a(c, d, u, p, h, m) {
    if (c !== u || d !== p) {
      var x = h.push(o(h) + "scale(", null, ",", null, ")");
      m.push({ i: x - 4, x: on(c, u) }, { i: x - 2, x: on(d, p) });
    } else (u !== 1 || p !== 1) && h.push(o(h) + "scale(" + u + "," + p + ")");
  }
  return function(c, d) {
    var u = [], p = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, u, p), s(c.rotate, d.rotate, u, p), l(c.skewX, d.skewX, u, p), a(c.scaleX, c.scaleY, d.scaleX, d.scaleY, u, p), c = d = null, function(h) {
      for (var m = -1, x = p.length, w; ++m < x; ) u[(w = p[m]).i] = w.x(h);
      return u.join("");
    };
  };
}
var Gk = K0(Wk, "px, ", "px)", "deg)"), Xk = K0(Yk, ", ", ")", ")"), Qk = 1e-12;
function em(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function qk(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Zk(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Tl = function e(t, n, r) {
  function o(i, s) {
    var l = i[0], a = i[1], c = i[2], d = s[0], u = s[1], p = s[2], h = d - l, m = u - a, x = h * h + m * m, w, g;
    if (x < Qk)
      g = Math.log(p / c) / t, w = function(N) {
        return [
          l + N * h,
          a + N * m,
          c * Math.exp(t * N * g)
        ];
      };
    else {
      var v = Math.sqrt(x), y = (p * p - c * c + r * x) / (2 * c * n * v), S = (p * p - c * c - r * x) / (2 * p * n * v), E = Math.log(Math.sqrt(y * y + 1) - y), C = Math.log(Math.sqrt(S * S + 1) - S);
      g = (C - E) / t, w = function(N) {
        var P = N * g, A = em(E), L = c / (n * v) * (A * Zk(t * P + E) - qk(E));
        return [
          l + L * h,
          a + L * m,
          c * A / em(t * P + E)
        ];
      };
    }
    return w.duration = g * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), l = s * s, a = l * l;
    return e(s, l, a);
  }, o;
}(Math.SQRT2, 2, 4);
var Do = 0, vi = 0, si = 0, W0 = 1e3, oa, wi, ia = 0, Fr = 0, rc = 0, Ki = typeof performance == "object" && performance.now ? performance : Date, Y0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Hf() {
  return Fr || (Y0(Jk), Fr = Ki.now() + rc);
}
function Jk() {
  Fr = 0;
}
function sa() {
  this._call = this._time = this._next = null;
}
sa.prototype = G0.prototype = {
  constructor: sa,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Hf() : +n) + (t == null ? 0 : +t), !this._next && wi !== this && (wi ? wi._next = this : oa = this, wi = this), this._call = e, this._time = n, ld();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ld());
  }
};
function G0(e, t, n) {
  var r = new sa();
  return r.restart(e, t, n), r;
}
function e2() {
  Hf(), ++Do;
  for (var e = oa, t; e; )
    (t = Fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Do;
}
function tm() {
  Fr = (ia = Ki.now()) + rc, Do = vi = 0;
  try {
    e2();
  } finally {
    Do = 0, n2(), Fr = 0;
  }
}
function t2() {
  var e = Ki.now(), t = e - ia;
  t > W0 && (rc -= t, ia = e);
}
function n2() {
  for (var e, t = oa, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : oa = n);
  wi = e, ld(r);
}
function ld(e) {
  if (!Do) {
    vi && (vi = clearTimeout(vi));
    var t = e - Fr;
    t > 24 ? (e < 1 / 0 && (vi = setTimeout(tm, e - Ki.now() - rc)), si && (si = clearInterval(si))) : (si || (ia = Ki.now(), si = setInterval(t2, W0)), Do = 1, Y0(tm));
  }
}
function nm(e, t, n) {
  var r = new sa();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var r2 = tc("start", "end", "cancel", "interrupt"), o2 = [], X0 = 0, rm = 1, ad = 2, jl = 3, om = 4, cd = 5, Il = 6;
function oc(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  i2(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: r2,
    tween: o2,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: X0
  });
}
function Vf(e, t) {
  var n = en(e, t);
  if (n.state > X0) throw new Error("too late; already scheduled");
  return n;
}
function mn(e, t) {
  var n = en(e, t);
  if (n.state > jl) throw new Error("too late; already running");
  return n;
}
function en(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function i2(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = G0(i, 0, n.time);
  function i(c) {
    n.state = rm, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, u, p, h;
    if (n.state !== rm) return a();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === jl) return nm(s);
        h.state === om ? (h.state = Il, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Il, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (nm(function() {
      n.state === jl && (n.state = om, n.timer.restart(l, n.delay, n.time), l(c));
    }), n.state = ad, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ad) {
      for (n.state = jl, o = new Array(p = n.tween.length), d = 0, u = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++u] = h);
      o.length = u + 1;
    }
  }
  function l(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(a), n.state = cd, 1), u = -1, p = o.length; ++u < p; )
      o[u].call(e, d);
    n.state === cd && (n.on.call("end", e, e.__data__, n.index, n.group), a());
  }
  function a() {
    n.state = Il, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function Pl(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ad && r.state < cd, r.state = Il, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function s2(e) {
  return this.each(function() {
    Pl(this, e);
  });
}
function l2(e, t) {
  var n, r;
  return function() {
    var o = mn(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, l = r.length; s < l; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function a2(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = mn(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var l = { name: t, value: n }, a = 0, c = o.length; a < c; ++a)
        if (o[a].name === t) {
          o[a] = l;
          break;
        }
      a === c && o.push(l);
    }
    i.tween = o;
  };
}
function c2(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = en(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? l2 : a2)(n, e, t));
}
function Bf(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = mn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return en(o, r).value[t];
  };
}
function Q0(e, t) {
  var n;
  return (typeof t == "number" ? on : t instanceof Or ? ra : (n = Or(t)) ? (t = n, ra) : B0)(e, t);
}
function u2(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function d2(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function f2(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function p2(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function h2(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), a;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), a = l + "", s === a ? null : s === r && a === o ? i : (o = a, i = t(r = s, l)));
  };
}
function m2(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), a;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), a = l + "", s === a ? null : s === r && a === o ? i : (o = a, i = t(r = s, l)));
  };
}
function g2(e, t) {
  var n = nc(e), r = n === "transform" ? Xk : Q0;
  return this.attrTween(e, typeof t == "function" ? (n.local ? m2 : h2)(n, r, Bf(this, "attr." + e, t)) : t == null ? (n.local ? d2 : u2)(n) : (n.local ? p2 : f2)(n, r, t));
}
function y2(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function x2(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function v2(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && x2(e, i)), n;
  }
  return o._value = t, o;
}
function w2(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && y2(e, i)), n;
  }
  return o._value = t, o;
}
function b2(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = nc(e);
  return this.tween(n, (r.local ? v2 : w2)(r, t));
}
function S2(e, t) {
  return function() {
    Vf(this, e).delay = +t.apply(this, arguments);
  };
}
function N2(e, t) {
  return t = +t, function() {
    Vf(this, e).delay = t;
  };
}
function E2(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? S2 : N2)(t, e)) : en(this.node(), t).delay;
}
function C2(e, t) {
  return function() {
    mn(this, e).duration = +t.apply(this, arguments);
  };
}
function _2(e, t) {
  return t = +t, function() {
    mn(this, e).duration = t;
  };
}
function k2(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? C2 : _2)(t, e)) : en(this.node(), t).duration;
}
function T2(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    mn(this, e).ease = t;
  };
}
function j2(e) {
  var t = this._id;
  return arguments.length ? this.each(T2(t, e)) : en(this.node(), t).ease;
}
function I2(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    mn(this, e).ease = n;
  };
}
function P2(e) {
  if (typeof e != "function") throw new Error();
  return this.each(I2(this._id, e));
}
function M2(e) {
  typeof e != "function" && (e = k0(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], a, c = 0; c < s; ++c)
      (a = i[c]) && e.call(a, a.__data__, c, i) && l.push(a);
  return new Mn(r, this._parents, this._name, this._id);
}
function A2(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), l = 0; l < i; ++l)
    for (var a = t[l], c = n[l], d = a.length, u = s[l] = new Array(d), p, h = 0; h < d; ++h)
      (p = a[h] || c[h]) && (u[h] = p);
  for (; l < r; ++l)
    s[l] = t[l];
  return new Mn(s, this._parents, this._name, this._id);
}
function R2(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function D2(e, t, n) {
  var r, o, i = R2(t) ? Vf : mn;
  return function() {
    var s = i(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function L2(e, t) {
  var n = this._id;
  return arguments.length < 2 ? en(this.node(), n).on.on(e) : this.each(D2(n, e, t));
}
function O2(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function F2() {
  return this.on("end.remove", O2(this._id));
}
function z2(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Of(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], a = l.length, c = i[s] = new Array(a), d, u, p = 0; p < a; ++p)
      (d = l[p]) && (u = e.call(d, d.__data__, p, l)) && ("__data__" in d && (u.__data__ = d.__data__), c[p] = u, oc(c[p], t, n, p, c, en(d, n)));
  return new Mn(i, this._parents, t, n);
}
function $2(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = _0(e));
  for (var r = this._groups, o = r.length, i = [], s = [], l = 0; l < o; ++l)
    for (var a = r[l], c = a.length, d, u = 0; u < c; ++u)
      if (d = a[u]) {
        for (var p = e.call(d, d.__data__, u, a), h, m = en(d, n), x = 0, w = p.length; x < w; ++x)
          (h = p[x]) && oc(h, t, n, x, p, m);
        i.push(p), s.push(d);
      }
  return new Mn(i, s, t, n);
}
var H2 = bs.prototype.constructor;
function V2() {
  return new H2(this._groups, this._parents);
}
function B2(e, t) {
  var n, r, o;
  return function() {
    var i = Ro(this, e), s = (this.style.removeProperty(e), Ro(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function q0(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function U2(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ro(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function K2(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ro(this, e), l = n(this), a = l + "";
    return l == null && (a = l = (this.style.removeProperty(e), Ro(this, e))), s === a ? null : s === r && a === o ? i : (o = a, i = t(r = s, l));
  };
}
function W2(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, l;
  return function() {
    var a = mn(this, e), c = a.on, d = a.value[i] == null ? l || (l = q0(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), a.on = r;
  };
}
function Y2(e, t, n) {
  var r = (e += "") == "transform" ? Gk : Q0;
  return t == null ? this.styleTween(e, B2(e, r)).on("end.style." + e, q0(e)) : typeof t == "function" ? this.styleTween(e, K2(e, r, Bf(this, "style." + e, t))).each(W2(this._id, e)) : this.styleTween(e, U2(e, r, t), n).on("end.style." + e, null);
}
function G2(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function X2(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && G2(e, s, n)), r;
  }
  return i._value = t, i;
}
function Q2(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, X2(e, t, n ?? ""));
}
function q2(e) {
  return function() {
    this.textContent = e;
  };
}
function Z2(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function J2(e) {
  return this.tween("text", typeof e == "function" ? Z2(Bf(this, "text", e)) : q2(e == null ? "" : e + ""));
}
function eT(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function tT(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && eT(o)), t;
  }
  return r._value = e, r;
}
function nT(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, tT(e));
}
function rT() {
  for (var e = this._name, t = this._id, n = Z0(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, a, c = 0; c < l; ++c)
      if (a = s[c]) {
        var d = en(a, t);
        oc(a, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Mn(r, this._parents, e, n);
}
function oT() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var l = { value: s }, a = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = mn(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(a)), c.on = t;
    }), o === 0 && i();
  });
}
var iT = 0;
function Mn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Z0() {
  return ++iT;
}
var wn = bs.prototype;
Mn.prototype = {
  constructor: Mn,
  select: z2,
  selectAll: $2,
  selectChild: wn.selectChild,
  selectChildren: wn.selectChildren,
  filter: M2,
  merge: A2,
  selection: V2,
  transition: rT,
  call: wn.call,
  nodes: wn.nodes,
  node: wn.node,
  size: wn.size,
  empty: wn.empty,
  each: wn.each,
  on: L2,
  attr: g2,
  attrTween: b2,
  style: Y2,
  styleTween: Q2,
  text: J2,
  textTween: nT,
  remove: F2,
  tween: c2,
  delay: E2,
  duration: k2,
  ease: j2,
  easeVarying: P2,
  end: oT,
  [Symbol.iterator]: wn[Symbol.iterator]
};
function sT(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var lT = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: sT
};
function aT(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function cT(e) {
  var t, n;
  e instanceof Mn ? (t = e._id, e = e._name) : (t = Z0(), (n = lT).time = Hf(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, a, c = 0; c < l; ++c)
      (a = s[c]) && oc(a, e, t, c, s, n || aT(a, t));
  return new Mn(r, this._parents, e, t);
}
bs.prototype.interrupt = s2;
bs.prototype.transition = cT;
const Gs = (e) => () => e;
function uT(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function _n(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
_n.prototype = {
  constructor: _n,
  scale: function(e) {
    return e === 1 ? this : new _n(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new _n(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var ic = new _n(1, 0, 0);
J0.prototype = _n.prototype;
function J0(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ic;
  return e.__zoom;
}
function Zc(e) {
  e.stopImmediatePropagation();
}
function li(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function dT(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function fT() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function im() {
  return this.__zoom || ic;
}
function pT(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function hT() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function mT(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function ex() {
  var e = dT, t = fT, n = mT, r = pT, o = hT, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, a = Tl, c = tc("start", "zoom", "end"), d, u, p, h = 500, m = 150, x = 0, w = 10;
  function g(k) {
    k.property("__zoom", im).on("wheel.zoom", P, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", L).filter(o).on("touchstart.zoom", _).on("touchmove.zoom", M).on("touchend.zoom touchcancel.zoom", j).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  g.transform = function(k, D, R, O) {
    var I = k.selection ? k.selection() : k;
    I.property("__zoom", im), k !== I ? E(k, D, R, O) : I.interrupt().each(function() {
      C(this, arguments).event(O).start().zoom(null, typeof D == "function" ? D.apply(this, arguments) : D).end();
    });
  }, g.scaleBy = function(k, D, R, O) {
    g.scaleTo(k, function() {
      var I = this.__zoom.k, T = typeof D == "function" ? D.apply(this, arguments) : D;
      return I * T;
    }, R, O);
  }, g.scaleTo = function(k, D, R, O) {
    g.transform(k, function() {
      var I = t.apply(this, arguments), T = this.__zoom, F = R == null ? S(I) : typeof R == "function" ? R.apply(this, arguments) : R, z = T.invert(F), $ = typeof D == "function" ? D.apply(this, arguments) : D;
      return n(y(v(T, $), F, z), I, s);
    }, R, O);
  }, g.translateBy = function(k, D, R, O) {
    g.transform(k, function() {
      return n(this.__zoom.translate(
        typeof D == "function" ? D.apply(this, arguments) : D,
        typeof R == "function" ? R.apply(this, arguments) : R
      ), t.apply(this, arguments), s);
    }, null, O);
  }, g.translateTo = function(k, D, R, O, I) {
    g.transform(k, function() {
      var T = t.apply(this, arguments), F = this.__zoom, z = O == null ? S(T) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(ic.translate(z[0], z[1]).scale(F.k).translate(
        typeof D == "function" ? -D.apply(this, arguments) : -D,
        typeof R == "function" ? -R.apply(this, arguments) : -R
      ), T, s);
    }, O, I);
  };
  function v(k, D) {
    return D = Math.max(i[0], Math.min(i[1], D)), D === k.k ? k : new _n(D, k.x, k.y);
  }
  function y(k, D, R) {
    var O = D[0] - R[0] * k.k, I = D[1] - R[1] * k.k;
    return O === k.x && I === k.y ? k : new _n(k.k, O, I);
  }
  function S(k) {
    return [(+k[0][0] + +k[1][0]) / 2, (+k[0][1] + +k[1][1]) / 2];
  }
  function E(k, D, R, O) {
    k.on("start.zoom", function() {
      C(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      C(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var I = this, T = arguments, F = C(I, T).event(O), z = t.apply(I, T), $ = R == null ? S(z) : typeof R == "function" ? R.apply(I, T) : R, U = Math.max(z[1][0] - z[0][0], z[1][1] - z[0][1]), V = I.__zoom, Q = typeof D == "function" ? D.apply(I, T) : D, K = a(V.invert($).concat(U / V.k), Q.invert($).concat(U / Q.k));
      return function(W) {
        if (W === 1) W = Q;
        else {
          var B = K(W), Y = U / B[2];
          W = new _n(Y, $[0] - B[0] * Y, $[1] - B[1] * Y);
        }
        F.zoom(null, W);
      };
    });
  }
  function C(k, D, R) {
    return !R && k.__zooming || new N(k, D);
  }
  function N(k, D) {
    this.that = k, this.args = D, this.active = 0, this.sourceEvent = null, this.extent = t.apply(k, D), this.taps = 0;
  }
  N.prototype = {
    event: function(k) {
      return k && (this.sourceEvent = k), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(k, D) {
      return this.mouse && k !== "mouse" && (this.mouse[1] = D.invert(this.mouse[0])), this.touch0 && k !== "touch" && (this.touch0[1] = D.invert(this.touch0[0])), this.touch1 && k !== "touch" && (this.touch1[1] = D.invert(this.touch1[0])), this.that.__zoom = D, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(k) {
      var D = gt(this.that).datum();
      c.call(
        k,
        this.that,
        new uT(k, {
          sourceEvent: this.sourceEvent,
          target: g,
          transform: this.that.__zoom,
          dispatch: c
        }),
        D
      );
    }
  };
  function P(k, ...D) {
    if (!e.apply(this, arguments)) return;
    var R = C(this, D).event(k), O = this.__zoom, I = Math.max(i[0], Math.min(i[1], O.k * Math.pow(2, r.apply(this, arguments)))), T = Ht(k);
    if (R.wheel)
      (R.mouse[0][0] !== T[0] || R.mouse[0][1] !== T[1]) && (R.mouse[1] = O.invert(R.mouse[0] = T)), clearTimeout(R.wheel);
    else {
      if (O.k === I) return;
      R.mouse = [T, O.invert(T)], Pl(this), R.start();
    }
    li(k), R.wheel = setTimeout(F, m), R.zoom("mouse", n(y(v(O, I), R.mouse[0], R.mouse[1]), R.extent, s));
    function F() {
      R.wheel = null, R.end();
    }
  }
  function A(k, ...D) {
    if (p || !e.apply(this, arguments)) return;
    var R = k.currentTarget, O = C(this, D, !0).event(k), I = gt(k.view).on("mousemove.zoom", $, !0).on("mouseup.zoom", U, !0), T = Ht(k, R), F = k.clientX, z = k.clientY;
    O0(k.view), Zc(k), O.mouse = [T, this.__zoom.invert(T)], Pl(this), O.start();
    function $(V) {
      if (li(V), !O.moved) {
        var Q = V.clientX - F, K = V.clientY - z;
        O.moved = Q * Q + K * K > x;
      }
      O.event(V).zoom("mouse", n(y(O.that.__zoom, O.mouse[0] = Ht(V, R), O.mouse[1]), O.extent, s));
    }
    function U(V) {
      I.on("mousemove.zoom mouseup.zoom", null), F0(V.view, O.moved), li(V), O.event(V).end();
    }
  }
  function L(k, ...D) {
    if (e.apply(this, arguments)) {
      var R = this.__zoom, O = Ht(k.changedTouches ? k.changedTouches[0] : k, this), I = R.invert(O), T = R.k * (k.shiftKey ? 0.5 : 2), F = n(y(v(R, T), O, I), t.apply(this, D), s);
      li(k), l > 0 ? gt(this).transition().duration(l).call(E, F, O, k) : gt(this).call(g.transform, F, O, k);
    }
  }
  function _(k, ...D) {
    if (e.apply(this, arguments)) {
      var R = k.touches, O = R.length, I = C(this, D, k.changedTouches.length === O).event(k), T, F, z, $;
      for (Zc(k), F = 0; F < O; ++F)
        z = R[F], $ = Ht(z, this), $ = [$, this.__zoom.invert($), z.identifier], I.touch0 ? !I.touch1 && I.touch0[2] !== $[2] && (I.touch1 = $, I.taps = 0) : (I.touch0 = $, T = !0, I.taps = 1 + !!d);
      d && (d = clearTimeout(d)), T && (I.taps < 2 && (u = $[0], d = setTimeout(function() {
        d = null;
      }, h)), Pl(this), I.start());
    }
  }
  function M(k, ...D) {
    if (this.__zooming) {
      var R = C(this, D).event(k), O = k.changedTouches, I = O.length, T, F, z, $;
      for (li(k), T = 0; T < I; ++T)
        F = O[T], z = Ht(F, this), R.touch0 && R.touch0[2] === F.identifier ? R.touch0[0] = z : R.touch1 && R.touch1[2] === F.identifier && (R.touch1[0] = z);
      if (F = R.that.__zoom, R.touch1) {
        var U = R.touch0[0], V = R.touch0[1], Q = R.touch1[0], K = R.touch1[1], W = (W = Q[0] - U[0]) * W + (W = Q[1] - U[1]) * W, B = (B = K[0] - V[0]) * B + (B = K[1] - V[1]) * B;
        F = v(F, Math.sqrt(W / B)), z = [(U[0] + Q[0]) / 2, (U[1] + Q[1]) / 2], $ = [(V[0] + K[0]) / 2, (V[1] + K[1]) / 2];
      } else if (R.touch0) z = R.touch0[0], $ = R.touch0[1];
      else return;
      R.zoom("touch", n(y(F, z, $), R.extent, s));
    }
  }
  function j(k, ...D) {
    if (this.__zooming) {
      var R = C(this, D).event(k), O = k.changedTouches, I = O.length, T, F;
      for (Zc(k), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, h), T = 0; T < I; ++T)
        F = O[T], R.touch0 && R.touch0[2] === F.identifier ? delete R.touch0 : R.touch1 && R.touch1[2] === F.identifier && delete R.touch1;
      if (R.touch1 && !R.touch0 && (R.touch0 = R.touch1, delete R.touch1), R.touch0) R.touch0[1] = this.__zoom.invert(R.touch0[0]);
      else if (R.end(), R.taps === 2 && (F = Ht(F, this), Math.hypot(u[0] - F[0], u[1] - F[1]) < w)) {
        var z = gt(this).on("dblclick.zoom");
        z && z.apply(this, arguments);
      }
    }
  }
  return g.wheelDelta = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : Gs(+k), g) : r;
  }, g.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : Gs(!!k), g) : e;
  }, g.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : Gs(!!k), g) : o;
  }, g.extent = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : Gs([[+k[0][0], +k[0][1]], [+k[1][0], +k[1][1]]]), g) : t;
  }, g.scaleExtent = function(k) {
    return arguments.length ? (i[0] = +k[0], i[1] = +k[1], g) : [i[0], i[1]];
  }, g.translateExtent = function(k) {
    return arguments.length ? (s[0][0] = +k[0][0], s[1][0] = +k[1][0], s[0][1] = +k[0][1], s[1][1] = +k[1][1], g) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, g.constrain = function(k) {
    return arguments.length ? (n = k, g) : n;
  }, g.duration = function(k) {
    return arguments.length ? (l = +k, g) : l;
  }, g.interpolate = function(k) {
    return arguments.length ? (a = k, g) : a;
  }, g.on = function() {
    var k = c.on.apply(c, arguments);
    return k === c ? g : k;
  }, g.clickDistance = function(k) {
    return arguments.length ? (x = (k = +k) * k, g) : Math.sqrt(x);
  }, g.tapDistance = function(k) {
    return arguments.length ? (w = +k, g) : w;
  }, g;
}
const pn = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, Wi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], tx = ["Enter", " ", "Escape"], nx = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var Lo;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Lo || (Lo = {}));
var Pr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Pr || (Pr = {}));
var Yi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Yi || (Yi = {}));
const rx = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var qn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(qn || (qn = {}));
var la;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(la || (la = {}));
var X;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(X || (X = {}));
const sm = {
  [X.Left]: X.Right,
  [X.Right]: X.Left,
  [X.Top]: X.Bottom,
  [X.Bottom]: X.Top
};
function ox(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const ix = (e) => "id" in e && "source" in e && "target" in e, gT = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Uf = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ns = (e, t = [0, 0]) => {
  const { width: n, height: r } = $n(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, yT = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Uf(o) ? o : t.nodeLookup.get(o.id));
    const l = s ? aa(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return sc(r, l);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return lc(n);
}, Es = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = sc(n, aa(o)), r = !0);
  }), r ? lc(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Kf = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const l = {
    ..._s(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, a = [];
  for (const c of e.values()) {
    const { measured: d, selectable: u = !0, hidden: p = !1 } = c;
    if (s && !u || p)
      continue;
    const h = d.width ?? c.width ?? c.initialWidth ?? null, m = d.height ?? c.height ?? c.initialHeight ?? null, x = Gi(l, Fo(c)), w = (h ?? 0) * (m ?? 0), g = i && x > 0;
    (!c.internals.handleBounds || g || x >= w || c.dragging) && a.push(c);
  }
  return a;
}, xT = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function vT(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function wT({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const l = vT(e, s), a = Es(l), c = Wf(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(c, {
    duration: s == null ? void 0 : s.duration,
    ease: s == null ? void 0 : s.ease,
    interpolate: s == null ? void 0 : s.interpolate
  }), Promise.resolve(!0);
}
function sx({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), l = s.parentId ? n.get(s.parentId) : void 0, { x: a, y: c } = l ? l.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let u = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!l)
      i == null || i("005", pn.error005());
    else {
      const h = l.measured.width, m = l.measured.height;
      h && m && (u = [
        [a, c],
        [a + h, c + m]
      ]);
    }
  else l && zo(s.extent) && (u = [
    [s.extent[0][0] + a, s.extent[0][1] + c],
    [s.extent[1][0] + a, s.extent[1][1] + c]
  ]);
  const p = zo(u) ? zr(t, u, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", pn.error015())), {
    position: {
      x: p.x - a + (s.measured.width ?? 0) * d[0],
      y: p.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function bT({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const h = i.has(p.id), m = !h && p.parentId && s.find((x) => x.id === p.parentId);
    (h || m) && s.push(p);
  }
  const l = new Set(t.map((p) => p.id)), a = r.filter((p) => p.deletable !== !1), d = xT(s, a);
  for (const p of a)
    l.has(p.id) && !d.find((m) => m.id === p.id) && d.push(p);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const u = await o({
    nodes: s,
    edges: d
  });
  return typeof u == "boolean" ? u ? { edges: d, nodes: s } : { edges: [], nodes: [] } : u;
}
const Oo = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), zr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Oo(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Oo(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function lx(e, t, n) {
  const { width: r, height: o } = $n(n), { x: i, y: s } = n.internals.positionAbsolute;
  return zr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const lm = (e, t, n) => e < t ? Oo(Math.abs(e - t), 1, t) / t : e > n ? -Oo(Math.abs(e - n), 1, t) / t : 0, ax = (e, t, n = 15, r = 40) => {
  const o = lm(e.x, r, t.width - r) * n, i = lm(e.y, r, t.height - r) * n;
  return [o, i];
}, sc = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ud = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), lc = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Fo = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Uf(e) ? e.internals.positionAbsolute : Ns(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, aa = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Uf(e) ? e.internals.positionAbsolute : Ns(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, cx = (e, t) => lc(sc(ud(e), ud(t))), Gi = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, am = (e) => Wt(e.width) && Wt(e.height) && Wt(e.x) && Wt(e.y), Wt = (e) => !isNaN(e) && isFinite(e), ST = (e, t) => {
}, Cs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), _s = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const l = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Cs(l, s) : l;
}, ca = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function eo(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function NT(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = eo(e, n), o = eo(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = eo(e.top ?? e.y ?? 0, n), o = eo(e.bottom ?? e.y ?? 0, n), i = eo(e.left ?? e.x ?? 0, t), s = eo(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function ET(e, t, n, r, o, i) {
  const { x: s, y: l } = ca(e, [t, n, r]), { x: a, y: c } = ca({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - a, u = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(d),
    bottom: Math.floor(u)
  };
}
const Wf = (e, t, n, r, o, i) => {
  const s = NT(i, t, n), l = (t - s.x) / e.width, a = (n - s.y) / e.height, c = Math.min(l, a), d = Oo(c, r, o), u = e.x + e.width / 2, p = e.y + e.height / 2, h = t / 2 - u * d, m = n / 2 - p * d, x = ET(e, h, m, d, t, n), w = {
    left: Math.min(x.left - s.left, 0),
    top: Math.min(x.top - s.top, 0),
    right: Math.min(x.right - s.right, 0),
    bottom: Math.min(x.bottom - s.bottom, 0)
  };
  return {
    x: h - w.left + w.right,
    y: m - w.top + w.bottom,
    zoom: d
  };
}, Xi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function zo(e) {
  return e != null && e !== "parent";
}
function $n(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function ux(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function dx(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const l = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * l[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * l[1];
  }
  return i;
}
function cm(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function CT() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function _T(e) {
  return { ...nx, ...e || {} };
}
function Ti(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Yt(e), l = _s({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: a, y: c } = n ? Cs(l, t) : l;
  return {
    xSnapped: a,
    ySnapped: c,
    ...l
  };
}
const Yf = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), fx = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, kT = ["INPUT", "SELECT", "TEXTAREA"];
function px(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : kT.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const hx = (e) => "clientX" in e, Yt = (e, t) => {
  var i, s;
  const n = hx(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, um = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const l = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (l.left - n.left) / r,
      y: (l.top - n.top) / r,
      ...Yf(s)
    };
  });
};
function mx({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: l }) {
  const a = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + l * 0.375 + r * 0.125, d = Math.abs(a - e), u = Math.abs(c - t);
  return [a, c, d, u];
}
function Xs(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function dm({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case X.Left:
      return [t - Xs(t - r, i), n];
    case X.Right:
      return [t + Xs(r - t, i), n];
    case X.Top:
      return [t, n - Xs(n - o, i)];
    case X.Bottom:
      return [t, n + Xs(o - n, i)];
  }
}
function Gf({ sourceX: e, sourceY: t, sourcePosition: n = X.Bottom, targetX: r, targetY: o, targetPosition: i = X.Top, curvature: s = 0.25 }) {
  const [l, a] = dm({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = dm({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [u, p, h, m] = mx({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: l,
    sourceControlY: a,
    targetControlX: c,
    targetControlY: d
  });
  return [
    `M${e},${t} C${l},${a} ${c},${d} ${r},${o}`,
    u,
    p,
    h,
    m
  ];
}
function gx({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [i, l, o, s];
}
function TT({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, l = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + l;
}
function jT({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = sc(aa(e), aa(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Gi(s, lc(i)) > 0;
}
const IT = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, PT = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), MT = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || IT;
  let o;
  return ix(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, PT(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function yx({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, l] = gx({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, l];
}
const fm = {
  [X.Left]: { x: -1, y: 0 },
  [X.Right]: { x: 1, y: 0 },
  [X.Top]: { x: 0, y: -1 },
  [X.Bottom]: { x: 0, y: 1 }
}, AT = ({ source: e, sourcePosition: t = X.Bottom, target: n }) => t === X.Left || t === X.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, pm = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function RT({ source: e, sourcePosition: t = X.Bottom, target: n, targetPosition: r = X.Top, center: o, offset: i, stepPosition: s }) {
  const l = fm[t], a = fm[r], c = { x: e.x + l.x * i, y: e.y + l.y * i }, d = { x: n.x + a.x * i, y: n.y + a.y * i }, u = AT({
    source: c,
    sourcePosition: t,
    target: d
  }), p = u.x !== 0 ? "x" : "y", h = u[p];
  let m = [], x, w;
  const g = { x: 0, y: 0 }, v = { x: 0, y: 0 }, [, , y, S] = gx({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (l[p] * a[p] === -1) {
    p === "x" ? (x = o.x ?? c.x + (d.x - c.x) * s, w = o.y ?? (c.y + d.y) / 2) : (x = o.x ?? (c.x + d.x) / 2, w = o.y ?? c.y + (d.y - c.y) * s);
    const C = [
      { x, y: c.y },
      { x, y: d.y }
    ], N = [
      { x: c.x, y: w },
      { x: d.x, y: w }
    ];
    l[p] === h ? m = p === "x" ? C : N : m = p === "x" ? N : C;
  } else {
    const C = [{ x: c.x, y: d.y }], N = [{ x: d.x, y: c.y }];
    if (p === "x" ? m = l.x === h ? N : C : m = l.y === h ? C : N, t === r) {
      const M = Math.abs(e[p] - n[p]);
      if (M <= i) {
        const j = Math.min(i - 1, i - M);
        l[p] === h ? g[p] = (c[p] > e[p] ? -1 : 1) * j : v[p] = (d[p] > n[p] ? -1 : 1) * j;
      }
    }
    if (t !== r) {
      const M = p === "x" ? "y" : "x", j = l[p] === a[M], k = c[M] > d[M], D = c[M] < d[M];
      (l[p] === 1 && (!j && k || j && D) || l[p] !== 1 && (!j && D || j && k)) && (m = p === "x" ? C : N);
    }
    const P = { x: c.x + g.x, y: c.y + g.y }, A = { x: d.x + v.x, y: d.y + v.y }, L = Math.max(Math.abs(P.x - m[0].x), Math.abs(A.x - m[0].x)), _ = Math.max(Math.abs(P.y - m[0].y), Math.abs(A.y - m[0].y));
    L >= _ ? (x = (P.x + A.x) / 2, w = m[0].y) : (x = m[0].x, w = (P.y + A.y) / 2);
  }
  return [[
    e,
    { x: c.x + g.x, y: c.y + g.y },
    ...m,
    { x: d.x + v.x, y: d.y + v.y },
    n
  ], x, w, y, S];
}
function DT(e, t, n, r) {
  const o = Math.min(pm(e, t) / 2, pm(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const l = e.x < n.x ? 1 : -1, a = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * a}Q ${i},${s} ${i + o * l},${s}`;
}
function ua({ sourceX: e, sourceY: t, sourcePosition: n = X.Bottom, targetX: r, targetY: o, targetPosition: i = X.Top, borderRadius: s = 5, centerX: l, centerY: a, offset: c = 20, stepPosition: d = 0.5 }) {
  const [u, p, h, m, x] = RT({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: l, y: a },
    offset: c,
    stepPosition: d
  });
  return [u.reduce((g, v, y) => {
    let S = "";
    return y > 0 && y < u.length - 1 ? S = DT(u[y - 1], v, u[y + 1], s) : S = `${y === 0 ? "M" : "L"}${v.x} ${v.y}`, g += S, g;
  }, ""), p, h, m, x];
}
function hm(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function LT(e) {
  var u;
  const { sourceNode: t, targetNode: n } = e;
  if (!hm(t) || !hm(n))
    return null;
  const r = t.internals.handleBounds || mm(t.handles), o = n.internals.handleBounds || mm(n.handles), i = gm((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = gm(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Lo.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (u = e.onError) == null || u.call(e, "008", pn.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || X.Bottom, a = (s == null ? void 0 : s.position) || X.Top, c = $r(t, i, l), d = $r(n, s, a);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: a
  };
}
function mm(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function $r(e, t, n = X.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: l } = t ?? $n(e);
  if (r)
    return { x: o + s / 2, y: i + l / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case X.Top:
      return { x: o + s / 2, y: i };
    case X.Right:
      return { x: o + s, y: i + l / 2 };
    case X.Bottom:
      return { x: o + s / 2, y: i + l };
    case X.Left:
      return { x: o, y: i + l / 2 };
  }
}
function gm(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function dd(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function OT(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, l) => ([l.markerStart || r, l.markerEnd || o].forEach((a) => {
    if (a && typeof a == "object") {
      const c = dd(a, t);
      i.has(c) || (s.push({ id: c, color: a.color || n, ...a }), i.add(c));
    }
  }), s), []).sort((s, l) => s.id.localeCompare(l.id));
}
const xx = 1e3, FT = 10, Xf = {
  nodeOrigin: [0, 0],
  nodeExtent: Wi,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, zT = {
  ...Xf,
  checkEquality: !0
};
function Qf(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function $T(e, t, n) {
  const r = Qf(Xf, n);
  for (const o of e.values())
    if (o.parentId)
      Zf(o, e, t, r);
    else {
      const i = Ns(o, r.nodeOrigin), s = zo(o.extent) ? o.extent : r.nodeExtent, l = zr(i, s, $n(o));
      o.internals.positionAbsolute = l;
    }
}
function HT(e, t) {
  if (!e.handles)
    return e.measured ? t == null ? void 0 : t.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
      x: o.x,
      y: o.y,
      position: o.position,
      type: o.type
    };
    o.type === "source" ? n.push(i) : o.type === "target" && r.push(i);
  }
  return {
    source: n,
    target: r
  };
}
function qf(e) {
  return e === "manual";
}
function fd(e, t, n, r = {}) {
  var c, d;
  const o = Qf(zT, r), i = { i: 0 }, s = new Map(t), l = o != null && o.elevateNodesOnSelect && !qf(o.zIndexMode) ? xx : 0;
  let a = e.length > 0;
  t.clear(), n.clear();
  for (const u of e) {
    let p = s.get(u.id);
    if (o.checkEquality && u === (p == null ? void 0 : p.internals.userNode))
      t.set(u.id, p);
    else {
      const h = Ns(u, o.nodeOrigin), m = zo(u.extent) ? u.extent : o.nodeExtent, x = zr(h, m, $n(u));
      p = {
        ...o.defaults,
        ...u,
        measured: {
          width: (c = u.measured) == null ? void 0 : c.width,
          height: (d = u.measured) == null ? void 0 : d.height
        },
        internals: {
          positionAbsolute: x,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: HT(u, p),
          z: vx(u, l, o.zIndexMode),
          userNode: u
        }
      }, t.set(u.id, p);
    }
    (p.measured === void 0 || p.measured.width === void 0 || p.measured.height === void 0) && !p.hidden && (a = !1), u.parentId && Zf(p, t, n, r, i);
  }
  return a;
}
function VT(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Zf(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: l, zIndexMode: a } = Qf(Xf, r), c = e.parentId, d = t.get(c);
  if (!d) {
    console.warn(`Parent node ${c} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  VT(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && a === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * FT), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const u = i && !qf(a) ? xx : 0, { x: p, y: h, z: m } = BT(e, d, s, l, u, a), { positionAbsolute: x } = e.internals, w = p !== x.x || h !== x.y;
  (w || m !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: p, y: h } : x,
      z: m
    }
  });
}
function vx(e, t, n) {
  const r = Wt(e.zIndex) ? e.zIndex : 0;
  return qf(n) ? r : r + (e.selected ? t : 0);
}
function BT(e, t, n, r, o, i) {
  const { x: s, y: l } = t.internals.positionAbsolute, a = $n(e), c = Ns(e, n), d = zo(e.extent) ? zr(c, e.extent, a) : c;
  let u = zr({ x: s + d.x, y: l + d.y }, r, a);
  e.extent === "parent" && (u = lx(u, a, t));
  const p = vx(e, o, i), h = t.internals.z ?? 0;
  return {
    x: u.x,
    y: u.y,
    z: h >= p ? h + 1 : p
  };
}
function Jf(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const l of e) {
    const a = t.get(l.parentId);
    if (!a)
      continue;
    const c = ((s = i.get(l.parentId)) == null ? void 0 : s.expandedRect) ?? Fo(a), d = cx(c, l.rect);
    i.set(l.parentId, { expandedRect: d, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: l, parent: a }, c) => {
    var y;
    const d = a.internals.positionAbsolute, u = $n(a), p = a.origin ?? r, h = l.x < d.x ? Math.round(Math.abs(d.x - l.x)) : 0, m = l.y < d.y ? Math.round(Math.abs(d.y - l.y)) : 0, x = Math.max(u.width, Math.round(l.width)), w = Math.max(u.height, Math.round(l.height)), g = (x - u.width) * p[0], v = (w - u.height) * p[1];
    (h > 0 || m > 0 || g || v) && (o.push({
      id: c,
      type: "position",
      position: {
        x: a.position.x - h + g,
        y: a.position.y - m + v
      }
    }), (y = n.get(c)) == null || y.forEach((S) => {
      e.some((E) => E.id === S.id) || o.push({
        id: S.id,
        type: "position",
        position: {
          x: S.position.x + h,
          y: S.position.y + m
        }
      });
    })), (u.width < l.width || u.height < l.height || h || m) && o.push({
      id: c,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (h ? p[0] * h - g : 0),
        height: w + (m ? p[1] * m - v : 0)
      }
    });
  }), o;
}
function UT(e, t, n, r, o, i, s) {
  const l = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!l)
    return { changes: [], updatedInternals: a };
  const c = [], d = window.getComputedStyle(l), { m22: u } = new window.DOMMatrixReadOnly(d.transform), p = [];
  for (const h of e.values()) {
    const m = t.get(h.id);
    if (!m)
      continue;
    if (m.hidden) {
      t.set(m.id, {
        ...m,
        internals: {
          ...m.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const x = Yf(h.nodeElement), w = m.measured.width !== x.width || m.measured.height !== x.height;
    if (!!(x.width && x.height && (w || !m.internals.handleBounds || h.force))) {
      const v = h.nodeElement.getBoundingClientRect(), y = zo(m.extent) ? m.extent : i;
      let { positionAbsolute: S } = m.internals;
      m.parentId && m.extent === "parent" ? S = lx(S, x, t.get(m.parentId)) : y && (S = zr(S, y, x));
      const E = {
        ...m,
        measured: x,
        internals: {
          ...m.internals,
          positionAbsolute: S,
          handleBounds: {
            source: um("source", h.nodeElement, v, u, m.id),
            target: um("target", h.nodeElement, v, u, m.id)
          }
        }
      };
      t.set(m.id, E), m.parentId && Zf(E, t, n, { nodeOrigin: o, zIndexMode: s }), a = !0, w && (c.push({
        id: m.id,
        type: "dimensions",
        dimensions: x
      }), m.expandParent && m.parentId && p.push({
        id: m.id,
        parentId: m.parentId,
        rect: Fo(E, o)
      }));
    }
  }
  if (p.length > 0) {
    const h = Jf(p, t, n, o);
    c.push(...h);
  }
  return { changes: c, updatedInternals: a };
}
async function KT({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), l = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(l);
}
function ym(e, t, n, r, o, i) {
  let s = o;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, l.set(n, t)), s = `${o}-${e}`;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, a.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, t));
  }
}
function wx(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: l = null } = r, a = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: l }, c = `${o}-${s}--${i}-${l}`, d = `${i}-${l}--${o}-${s}`;
    ym("source", a, d, e, o, s), ym("target", a, c, e, i, l), t.set(r.id, r);
  }
}
function bx(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : bx(n, t) : !1;
}
function xm(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function WT(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !bx(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const l = e.get(i);
      l && o.set(i, {
        id: i,
        position: l.position || { x: 0, y: 0 },
        distance: {
          x: n.x - l.internals.positionAbsolute.x,
          y: n.y - l.internals.positionAbsolute.y
        },
        extent: l.extent,
        parentId: l.parentId,
        origin: l.origin,
        expandParent: l.expandParent,
        internals: {
          positionAbsolute: l.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: l.measured.width ?? 0,
          height: l.measured.height ?? 0
        }
      });
    }
  return o;
}
function Jc({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, l, a;
  const o = [];
  for (const [c, d] of t) {
    const u = (s = n.get(c)) == null ? void 0 : s.internals.userNode;
    u && o.push({
      ...u,
      position: d.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = (l = n.get(e)) == null ? void 0 : l.internals.userNode;
  return [
    i ? {
      ...i,
      position: ((a = t.get(e)) == null ? void 0 : a.position) || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function YT({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Cs(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function GT({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, l = /* @__PURE__ */ new Map(), a = !1, c = { x: 0, y: 0 }, d = null, u = !1, p = null, h = !1, m = !1, x = null;
  function w({ noDragClassName: v, handleSelector: y, domNode: S, isSelectable: E, nodeId: C, nodeClickDistance: N = 0 }) {
    p = gt(S);
    function P({ x: M, y: j }) {
      const { nodeLookup: k, nodeExtent: D, snapGrid: R, snapToGrid: O, nodeOrigin: I, onNodeDrag: T, onSelectionDrag: F, onError: z, updateNodePositions: $ } = t();
      i = { x: M, y: j };
      let U = !1;
      const V = l.size > 1, Q = V && D ? ud(Es(l)) : null, K = V && O ? YT({
        dragItems: l,
        snapGrid: R,
        x: M,
        y: j
      }) : null;
      for (const [W, B] of l) {
        if (!k.has(W))
          continue;
        let Y = { x: M - B.distance.x, y: j - B.distance.y };
        O && (Y = K ? {
          x: Math.round(Y.x + K.x),
          y: Math.round(Y.y + K.y)
        } : Cs(Y, R));
        let ie = null;
        if (V && D && !B.extent && Q) {
          const { positionAbsolute: J } = B.internals, de = J.x - Q.x + D[0][0], he = J.x + B.measured.width - Q.x2 + D[1][0], ce = J.y - Q.y + D[0][1], Me = J.y + B.measured.height - Q.y2 + D[1][1];
          ie = [
            [de, ce],
            [he, Me]
          ];
        }
        const { position: ne, positionAbsolute: ee } = sx({
          nodeId: W,
          nextPosition: Y,
          nodeLookup: k,
          nodeExtent: ie || D,
          nodeOrigin: I,
          onError: z
        });
        U = U || B.position.x !== ne.x || B.position.y !== ne.y, B.position = ne, B.internals.positionAbsolute = ee;
      }
      if (m = m || U, !!U && ($(l, !0), x && (r || T || !C && F))) {
        const [W, B] = Jc({
          nodeId: C,
          dragItems: l,
          nodeLookup: k
        });
        r == null || r(x, l, W, B), T == null || T(x, W, B), C || F == null || F(x, B);
      }
    }
    async function A() {
      if (!d)
        return;
      const { transform: M, panBy: j, autoPanSpeed: k, autoPanOnNodeDrag: D } = t();
      if (!D) {
        a = !1, cancelAnimationFrame(s);
        return;
      }
      const [R, O] = ax(c, d, k);
      (R !== 0 || O !== 0) && (i.x = (i.x ?? 0) - R / M[2], i.y = (i.y ?? 0) - O / M[2], await j({ x: R, y: O }) && P(i)), s = requestAnimationFrame(A);
    }
    function L(M) {
      var V;
      const { nodeLookup: j, multiSelectionActive: k, nodesDraggable: D, transform: R, snapGrid: O, snapToGrid: I, selectNodesOnDrag: T, onNodeDragStart: F, onSelectionDragStart: z, unselectNodesAndEdges: $ } = t();
      u = !0, (!T || !E) && !k && C && ((V = j.get(C)) != null && V.selected || $()), E && T && C && (e == null || e(C));
      const U = Ti(M.sourceEvent, { transform: R, snapGrid: O, snapToGrid: I, containerBounds: d });
      if (i = U, l = WT(j, D, U, C), l.size > 0 && (n || F || !C && z)) {
        const [Q, K] = Jc({
          nodeId: C,
          dragItems: l,
          nodeLookup: j
        });
        n == null || n(M.sourceEvent, l, Q, K), F == null || F(M.sourceEvent, Q, K), C || z == null || z(M.sourceEvent, K);
      }
    }
    const _ = z0().clickDistance(N).on("start", (M) => {
      const { domNode: j, nodeDragThreshold: k, transform: D, snapGrid: R, snapToGrid: O } = t();
      d = (j == null ? void 0 : j.getBoundingClientRect()) || null, h = !1, m = !1, x = M.sourceEvent, k === 0 && L(M), i = Ti(M.sourceEvent, { transform: D, snapGrid: R, snapToGrid: O, containerBounds: d }), c = Yt(M.sourceEvent, d);
    }).on("drag", (M) => {
      const { autoPanOnNodeDrag: j, transform: k, snapGrid: D, snapToGrid: R, nodeDragThreshold: O, nodeLookup: I } = t(), T = Ti(M.sourceEvent, { transform: k, snapGrid: D, snapToGrid: R, containerBounds: d });
      if (x = M.sourceEvent, (M.sourceEvent.type === "touchmove" && M.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      C && !I.has(C)) && (h = !0), !h) {
        if (!a && j && u && (a = !0, A()), !u) {
          const F = Yt(M.sourceEvent, d), z = F.x - c.x, $ = F.y - c.y;
          Math.sqrt(z * z + $ * $) > O && L(M);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && l && u && (c = Yt(M.sourceEvent, d), P(T));
      }
    }).on("end", (M) => {
      if (!(!u || h) && (a = !1, u = !1, cancelAnimationFrame(s), l.size > 0)) {
        const { nodeLookup: j, updateNodePositions: k, onNodeDragStop: D, onSelectionDragStop: R } = t();
        if (m && (k(l, !1), m = !1), o || D || !C && R) {
          const [O, I] = Jc({
            nodeId: C,
            dragItems: l,
            nodeLookup: j,
            dragging: !1
          });
          o == null || o(M.sourceEvent, l, O, I), D == null || D(M.sourceEvent, O, I), C || R == null || R(M.sourceEvent, I);
        }
      }
    }).filter((M) => {
      const j = M.target;
      return !M.button && (!v || !xm(j, `.${v}`, S)) && (!y || xm(j, y, S));
    });
    p.call(_);
  }
  function g() {
    p == null || p.on(".drag", null);
  }
  return {
    update: w,
    destroy: g
  };
}
function XT(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Gi(o, Fo(i)) > 0 && r.push(i);
  return r;
}
const QT = 250;
function qT(e, t, n, r) {
  var l, a;
  let o = [], i = 1 / 0;
  const s = XT(e, n, t + QT);
  for (const c of s) {
    const d = [...((l = c.internals.handleBounds) == null ? void 0 : l.source) ?? [], ...((a = c.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const u of d) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: p, y: h } = $r(c, u, u.position, !0), m = Math.sqrt(Math.pow(p - e.x, 2) + Math.pow(h - e.y, 2));
      m > t || (m < i ? (o = [{ ...u, x: p, y: h }], i = m) : m === i && o.push({ ...u, x: p, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const c = r.type === "source" ? "target" : "source";
    return o.find((d) => d.type === c) ?? o[0];
  }
  return o[0];
}
function Sx(e, t, n, r, o, i = !1) {
  var c, d, u;
  const s = r.get(e);
  if (!s)
    return null;
  const l = o === "strict" ? (c = s.internals.handleBounds) == null ? void 0 : c[t] : [...((d = s.internals.handleBounds) == null ? void 0 : d.source) ?? [], ...((u = s.internals.handleBounds) == null ? void 0 : u.target) ?? []], a = (n ? l == null ? void 0 : l.find((p) => p.id === n) : l == null ? void 0 : l[0]) ?? null;
  return a && i ? { ...a, ...$r(s, a, a.position, !0) } : a;
}
function Nx(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function ZT(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Ex = () => !0;
function JT(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: l, nodeLookup: a, lib: c, autoPanOnConnect: d, flowId: u, panBy: p, cancelConnection: h, onConnectStart: m, onConnect: x, onConnectEnd: w, isValidConnection: g = Ex, onReconnectEnd: v, updateConnection: y, getTransform: S, getFromHandle: E, autoPanSpeed: C, dragThreshold: N = 1, handleDomNode: P }) {
  const A = fx(e.target);
  let L = 0, _;
  const { x: M, y: j } = Yt(e), k = Nx(i, P), D = l == null ? void 0 : l.getBoundingClientRect();
  let R = !1;
  if (!D || !k)
    return;
  const O = Sx(o, k, r, a, t);
  if (!O)
    return;
  let I = Yt(e, D), T = !1, F = null, z = !1, $ = null;
  function U() {
    if (!d || !D)
      return;
    const [ne, ee] = ax(I, D, C);
    p({ x: ne, y: ee }), L = requestAnimationFrame(U);
  }
  const V = {
    ...O,
    nodeId: o,
    type: k,
    position: O.position
  }, Q = a.get(o);
  let W = {
    inProgress: !0,
    isValid: null,
    from: $r(Q, V, X.Left, !0),
    fromHandle: V,
    fromPosition: V.position,
    fromNode: Q,
    to: I,
    toHandle: null,
    toPosition: sm[V.position],
    toNode: null,
    pointer: I
  };
  function B() {
    R = !0, y(W), m == null || m(e, { nodeId: o, handleId: r, handleType: k });
  }
  N === 0 && B();
  function Y(ne) {
    if (!R) {
      const { x: Me, y: _t } = Yt(ne), He = Me - M, kt = _t - j;
      if (!(He * He + kt * kt > N * N))
        return;
      B();
    }
    if (!E() || !V) {
      ie(ne);
      return;
    }
    const ee = S();
    I = Yt(ne, D), _ = qT(_s(I, ee, !1, [1, 1]), n, a, V), T || (U(), T = !0);
    const J = Cx(ne, {
      handle: _,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: g,
      doc: A,
      lib: c,
      flowId: u,
      nodeLookup: a
    });
    $ = J.handleDomNode, F = J.connection, z = ZT(!!_, J.isValid);
    const de = a.get(o), he = de ? $r(de, V, X.Left, !0) : W.from, ce = {
      ...W,
      from: he,
      isValid: z,
      to: J.toHandle && z ? ca({ x: J.toHandle.x, y: J.toHandle.y }, ee) : I,
      toHandle: J.toHandle,
      toPosition: z && J.toHandle ? J.toHandle.position : sm[V.position],
      toNode: J.toHandle ? a.get(J.toHandle.nodeId) : null,
      pointer: I
    };
    y(ce), W = ce;
  }
  function ie(ne) {
    if (!("touches" in ne && ne.touches.length > 0)) {
      if (R) {
        (_ || $) && F && z && (x == null || x(F));
        const { inProgress: ee, ...J } = W, de = {
          ...J,
          toPosition: W.toHandle ? W.toPosition : null
        };
        w == null || w(ne, de), i && (v == null || v(ne, de));
      }
      h(), cancelAnimationFrame(L), T = !1, z = !1, F = null, $ = null, A.removeEventListener("mousemove", Y), A.removeEventListener("mouseup", ie), A.removeEventListener("touchmove", Y), A.removeEventListener("touchend", ie);
    }
  }
  A.addEventListener("mousemove", Y), A.addEventListener("mouseup", ie), A.addEventListener("touchmove", Y), A.addEventListener("touchend", ie);
}
function Cx(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: l, flowId: a, isValidConnection: c = Ex, nodeLookup: d }) {
  const u = i === "target", p = t ? s.querySelector(`.${l}-flow__handle[data-id="${a}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: m } = Yt(e), x = s.elementFromPoint(h, m), w = x != null && x.classList.contains(`${l}-flow__handle`) ? x : p, g = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const v = Nx(void 0, w), y = w.getAttribute("data-nodeid"), S = w.getAttribute("data-handleid"), E = w.classList.contains("connectable"), C = w.classList.contains("connectableend");
    if (!y || !v)
      return g;
    const N = {
      source: u ? y : r,
      sourceHandle: u ? S : o,
      target: u ? r : y,
      targetHandle: u ? o : S
    };
    g.connection = N;
    const A = E && C && (n === Lo.Strict ? u && v === "source" || !u && v === "target" : y !== r || S !== o);
    g.isValid = A && c(N), g.toHandle = Sx(y, v, S, d, n, !0);
  }
  return g;
}
const pd = {
  onPointerDown: JT,
  isValid: Cx
};
function ej({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = gt(e);
  function i({ translateExtent: l, width: a, height: c, zoomStep: d = 1, pannable: u = !0, zoomable: p = !0, inversePan: h = !1 }) {
    const m = (y) => {
      if (y.sourceEvent.type !== "wheel" || !t)
        return;
      const S = n(), E = y.sourceEvent.ctrlKey && Xi() ? 10 : 1, C = -y.sourceEvent.deltaY * (y.sourceEvent.deltaMode === 1 ? 0.05 : y.sourceEvent.deltaMode ? 1 : 2e-3) * d, N = S[2] * Math.pow(2, C * E);
      t.scaleTo(N);
    };
    let x = [0, 0];
    const w = (y) => {
      (y.sourceEvent.type === "mousedown" || y.sourceEvent.type === "touchstart") && (x = [
        y.sourceEvent.clientX ?? y.sourceEvent.touches[0].clientX,
        y.sourceEvent.clientY ?? y.sourceEvent.touches[0].clientY
      ]);
    }, g = (y) => {
      const S = n();
      if (y.sourceEvent.type !== "mousemove" && y.sourceEvent.type !== "touchmove" || !t)
        return;
      const E = [
        y.sourceEvent.clientX ?? y.sourceEvent.touches[0].clientX,
        y.sourceEvent.clientY ?? y.sourceEvent.touches[0].clientY
      ], C = [E[0] - x[0], E[1] - x[1]];
      x = E;
      const N = r() * Math.max(S[2], Math.log(S[2])) * (h ? -1 : 1), P = {
        x: S[0] - C[0] * N,
        y: S[1] - C[1] * N
      }, A = [
        [0, 0],
        [a, c]
      ];
      t.setViewportConstrained({
        x: P.x,
        y: P.y,
        zoom: S[2]
      }, A, l);
    }, v = ex().on("start", w).on("zoom", u ? g : null).on("zoom.wheel", p ? m : null);
    o.call(v, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Ht
  };
}
const ac = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), eu = ({ x: e, y: t, zoom: n }) => ic.translate(e, t).scale(n), lo = (e, t) => e.target.closest(`.${t}`), _x = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), tj = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, tu = (e, t = 0, n = tj, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, kx = (e) => {
  const t = e.ctrlKey && Xi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function nj({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: l, onPanZoom: a, onPanZoomEnd: c }) {
  return (d) => {
    if (lo(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const u = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = Ht(d), g = kx(d), v = u * Math.pow(2, g);
      r.scaleTo(n, v, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let h = o === Pr.Vertical ? 0 : d.deltaX * p, m = o === Pr.Horizontal ? 0 : d.deltaY * p;
    !Xi() && d.shiftKey && o !== Pr.Vertical && (h = d.deltaY * p, m = 0), r.translateBy(
      n,
      -(h / u) * i,
      -(m / u) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = ac(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (a == null || a(d, x), e.panScrollTimeout = setTimeout(() => {
      c == null || c(d, x), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, l == null || l(d, x));
  };
}
function rj({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, l = lo(r, e);
    if (r.ctrlKey && i && l && r.preventDefault(), s || l)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function oj({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, l;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = ac(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function ij({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, l;
    e.usedRightMouseButton = !!(n && _x(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((l = i.sourceEvent) != null && l.internal) && (o == null || o(i.sourceEvent, ac(i.transform)));
  };
}
function sj({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var l;
    if (!((l = s.sourceEvent) != null && l.internal) && (e.isZoomingOrPanning = !1, i && _x(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = ac(s.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function lj({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: l, noPanClassName: a, lib: c, connectionInProgress: d }) {
  return (u) => {
    var w;
    const p = e || t, h = n && u.ctrlKey, m = u.type === "wheel";
    if (u.button === 1 && u.type === "mousedown" && (lo(u, `${c}-flow__node`) || lo(u, `${c}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !m || lo(u, l) && m || lo(u, a) && (!m || o && m && !e) || !n && u.ctrlKey && m)
      return !1;
    if (!n && u.type === "touchstart" && ((w = u.touches) == null ? void 0 : w.length) > 1)
      return u.preventDefault(), !1;
    if (!p && !o && !h && m || !r && (u.type === "mousedown" || u.type === "touchstart") || Array.isArray(r) && !r.includes(u.button) && u.type === "mousedown")
      return !1;
    const x = Array.isArray(r) && r.includes(u.button) || !u.button || u.button <= 1;
    return (!u.ctrlKey || m) && x;
  };
}
function aj({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: a }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), u = ex().scaleExtent([t, n]).translateExtent(r), p = gt(e).call(u);
  v({
    x: o.x,
    y: o.y,
    zoom: Oo(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const h = p.on("wheel.zoom"), m = p.on("dblclick.zoom");
  u.wheelDelta(kx);
  function x(_, M) {
    return p ? new Promise((j) => {
      u == null || u.interpolate((M == null ? void 0 : M.interpolate) === "linear" ? ki : Tl).transform(tu(p, M == null ? void 0 : M.duration, M == null ? void 0 : M.ease, () => j(!0)), _);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: _, noPanClassName: M, onPaneContextMenu: j, userSelectionActive: k, panOnScroll: D, panOnDrag: R, panOnScrollMode: O, panOnScrollSpeed: I, preventScrolling: T, zoomOnPinch: F, zoomOnScroll: z, zoomOnDoubleClick: $, zoomActivationKeyPressed: U, lib: V, onTransformChange: Q, connectionInProgress: K, paneClickDistance: W, selectionOnDrag: B }) {
    k && !c.isZoomingOrPanning && g();
    const Y = D && !U && !k;
    u.clickDistance(B ? 1 / 0 : !Wt(W) || W < 0 ? 0 : W);
    const ie = Y ? nj({
      zoomPanValues: c,
      noWheelClassName: _,
      d3Selection: p,
      d3Zoom: u,
      panOnScrollMode: O,
      panOnScrollSpeed: I,
      zoomOnPinch: F,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : rj({
      noWheelClassName: _,
      preventScrolling: T,
      d3ZoomHandler: h
    });
    if (p.on("wheel.zoom", ie, { passive: !1 }), !k) {
      const ee = oj({
        zoomPanValues: c,
        onDraggingChange: a,
        onPanZoomStart: s
      });
      u.on("start", ee);
      const J = ij({
        zoomPanValues: c,
        panOnDrag: R,
        onPaneContextMenu: !!j,
        onPanZoom: i,
        onTransformChange: Q
      });
      u.on("zoom", J);
      const de = sj({
        zoomPanValues: c,
        panOnDrag: R,
        panOnScroll: D,
        onPaneContextMenu: j,
        onPanZoomEnd: l,
        onDraggingChange: a
      });
      u.on("end", de);
    }
    const ne = lj({
      zoomActivationKeyPressed: U,
      panOnDrag: R,
      zoomOnScroll: z,
      panOnScroll: D,
      zoomOnDoubleClick: $,
      zoomOnPinch: F,
      userSelectionActive: k,
      noPanClassName: M,
      noWheelClassName: _,
      lib: V,
      connectionInProgress: K
    });
    u.filter(ne), $ ? p.on("dblclick.zoom", m) : p.on("dblclick.zoom", null);
  }
  function g() {
    u.on("zoom", null);
  }
  async function v(_, M, j) {
    const k = eu(_), D = u == null ? void 0 : u.constrain()(k, M, j);
    return D && await x(D), new Promise((R) => R(D));
  }
  async function y(_, M) {
    const j = eu(_);
    return await x(j, M), new Promise((k) => k(j));
  }
  function S(_) {
    if (p) {
      const M = eu(_), j = p.property("__zoom");
      (j.k !== _.zoom || j.x !== _.x || j.y !== _.y) && (u == null || u.transform(p, M, null, { sync: !0 }));
    }
  }
  function E() {
    const _ = p ? J0(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function C(_, M) {
    return p ? new Promise((j) => {
      u == null || u.interpolate((M == null ? void 0 : M.interpolate) === "linear" ? ki : Tl).scaleTo(tu(p, M == null ? void 0 : M.duration, M == null ? void 0 : M.ease, () => j(!0)), _);
    }) : Promise.resolve(!1);
  }
  function N(_, M) {
    return p ? new Promise((j) => {
      u == null || u.interpolate((M == null ? void 0 : M.interpolate) === "linear" ? ki : Tl).scaleBy(tu(p, M == null ? void 0 : M.duration, M == null ? void 0 : M.ease, () => j(!0)), _);
    }) : Promise.resolve(!1);
  }
  function P(_) {
    u == null || u.scaleExtent(_);
  }
  function A(_) {
    u == null || u.translateExtent(_);
  }
  function L(_) {
    const M = !Wt(_) || _ < 0 ? 0 : _;
    u == null || u.clickDistance(M);
  }
  return {
    update: w,
    destroy: g,
    setViewport: y,
    setViewportConstrained: v,
    getViewport: E,
    scaleTo: C,
    scaleBy: N,
    setScaleExtent: P,
    setTranslateExtent: A,
    syncViewport: S,
    setClickDistance: L
  };
}
var $o;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})($o || ($o = {}));
function cj({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const s = e - t, l = n - r, a = [s > 0 ? 1 : s < 0 ? -1 : 0, l > 0 ? 1 : l < 0 ? -1 : 0];
  return s && o && (a[0] = a[0] * -1), l && i && (a[1] = a[1] * -1), a;
}
function vm(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), r = e.includes("left"), o = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: o
  };
}
function Bn(e, t) {
  return Math.max(0, t - e);
}
function Un(e, t) {
  return Math.max(0, e - t);
}
function Qs(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function wm(e, t) {
  return e ? !t : t;
}
function uj(e, t, n, r, o, i, s, l) {
  let { affectsX: a, affectsY: c } = t;
  const { isHorizontal: d, isVertical: u } = t, p = d && u, { xSnapped: h, ySnapped: m } = n, { minWidth: x, maxWidth: w, minHeight: g, maxHeight: v } = r, { x: y, y: S, width: E, height: C, aspectRatio: N } = e;
  let P = Math.floor(d ? h - e.pointerX : 0), A = Math.floor(u ? m - e.pointerY : 0);
  const L = E + (a ? -P : P), _ = C + (c ? -A : A), M = -i[0] * E, j = -i[1] * C;
  let k = Qs(L, x, w), D = Qs(_, g, v);
  if (s) {
    let I = 0, T = 0;
    a && P < 0 ? I = Bn(y + P + M, s[0][0]) : !a && P > 0 && (I = Un(y + L + M, s[1][0])), c && A < 0 ? T = Bn(S + A + j, s[0][1]) : !c && A > 0 && (T = Un(S + _ + j, s[1][1])), k = Math.max(k, I), D = Math.max(D, T);
  }
  if (l) {
    let I = 0, T = 0;
    a && P > 0 ? I = Un(y + P, l[0][0]) : !a && P < 0 && (I = Bn(y + L, l[1][0])), c && A > 0 ? T = Un(S + A, l[0][1]) : !c && A < 0 && (T = Bn(S + _, l[1][1])), k = Math.max(k, I), D = Math.max(D, T);
  }
  if (o) {
    if (d) {
      const I = Qs(L / N, g, v) * N;
      if (k = Math.max(k, I), s) {
        let T = 0;
        !a && !c || a && !c && p ? T = Un(S + j + L / N, s[1][1]) * N : T = Bn(S + j + (a ? P : -P) / N, s[0][1]) * N, k = Math.max(k, T);
      }
      if (l) {
        let T = 0;
        !a && !c || a && !c && p ? T = Bn(S + L / N, l[1][1]) * N : T = Un(S + (a ? P : -P) / N, l[0][1]) * N, k = Math.max(k, T);
      }
    }
    if (u) {
      const I = Qs(_ * N, x, w) / N;
      if (D = Math.max(D, I), s) {
        let T = 0;
        !a && !c || c && !a && p ? T = Un(y + _ * N + M, s[1][0]) / N : T = Bn(y + (c ? A : -A) * N + M, s[0][0]) / N, D = Math.max(D, T);
      }
      if (l) {
        let T = 0;
        !a && !c || c && !a && p ? T = Bn(y + _ * N, l[1][0]) / N : T = Un(y + (c ? A : -A) * N, l[0][0]) / N, D = Math.max(D, T);
      }
    }
  }
  A = A + (A < 0 ? D : -D), P = P + (P < 0 ? k : -k), o && (p ? L > _ * N ? A = (wm(a, c) ? -P : P) / N : P = (wm(a, c) ? -A : A) * N : d ? (A = P / N, c = a) : (P = A * N, a = c));
  const R = a ? y + P : y, O = c ? S + A : S;
  return {
    width: E + (a ? -P : P),
    height: C + (c ? -A : A),
    x: i[0] * P * (a ? -1 : 1) + R,
    y: i[1] * A * (c ? -1 : 1) + O
  };
}
const Tx = { width: 0, height: 0, x: 0, y: 0 }, dj = {
  ...Tx,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function fj(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function pj(e, t, n) {
  const r = t.position.x + e.position.x, o = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, l = n[0] * i, a = n[1] * s;
  return [
    [r - l, o - a],
    [r + i - l, o + s - a]
  ];
}
function hj({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = gt(e);
  let s = {
    controlDirection: vm("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function l({ controlPosition: c, boundaries: d, keepAspectRatio: u, resizeDirection: p, onResizeStart: h, onResize: m, onResizeEnd: x, shouldResize: w }) {
    let g = { ...Tx }, v = { ...dj };
    s = {
      boundaries: d,
      resizeDirection: p,
      keepAspectRatio: u,
      controlDirection: vm(c)
    };
    let y, S = null, E = [], C, N, P, A = !1;
    const L = z0().on("start", (_) => {
      const { nodeLookup: M, transform: j, snapGrid: k, snapToGrid: D, nodeOrigin: R, paneDomNode: O } = n();
      if (y = M.get(t), !y)
        return;
      S = (O == null ? void 0 : O.getBoundingClientRect()) ?? null;
      const { xSnapped: I, ySnapped: T } = Ti(_.sourceEvent, {
        transform: j,
        snapGrid: k,
        snapToGrid: D,
        containerBounds: S
      });
      g = {
        width: y.measured.width ?? 0,
        height: y.measured.height ?? 0,
        x: y.position.x ?? 0,
        y: y.position.y ?? 0
      }, v = {
        ...g,
        pointerX: I,
        pointerY: T,
        aspectRatio: g.width / g.height
      }, C = void 0, y.parentId && (y.extent === "parent" || y.expandParent) && (C = M.get(y.parentId), N = C && y.extent === "parent" ? fj(C) : void 0), E = [], P = void 0;
      for (const [F, z] of M)
        if (z.parentId === t && (E.push({
          id: F,
          position: { ...z.position },
          extent: z.extent
        }), z.extent === "parent" || z.expandParent)) {
          const $ = pj(z, y, z.origin ?? R);
          P ? P = [
            [Math.min($[0][0], P[0][0]), Math.min($[0][1], P[0][1])],
            [Math.max($[1][0], P[1][0]), Math.max($[1][1], P[1][1])]
          ] : P = $;
        }
      h == null || h(_, { ...g });
    }).on("drag", (_) => {
      const { transform: M, snapGrid: j, snapToGrid: k, nodeOrigin: D } = n(), R = Ti(_.sourceEvent, {
        transform: M,
        snapGrid: j,
        snapToGrid: k,
        containerBounds: S
      }), O = [];
      if (!y)
        return;
      const { x: I, y: T, width: F, height: z } = g, $ = {}, U = y.origin ?? D, { width: V, height: Q, x: K, y: W } = uj(v, s.controlDirection, R, s.boundaries, s.keepAspectRatio, U, N, P), B = V !== F, Y = Q !== z, ie = K !== I && B, ne = W !== T && Y;
      if (!ie && !ne && !B && !Y)
        return;
      if ((ie || ne || U[0] === 1 || U[1] === 1) && ($.x = ie ? K : g.x, $.y = ne ? W : g.y, g.x = $.x, g.y = $.y, E.length > 0)) {
        const he = K - I, ce = W - T;
        for (const Me of E)
          Me.position = {
            x: Me.position.x - he + U[0] * (V - F),
            y: Me.position.y - ce + U[1] * (Q - z)
          }, O.push(Me);
      }
      if ((B || Y) && ($.width = B && (!s.resizeDirection || s.resizeDirection === "horizontal") ? V : g.width, $.height = Y && (!s.resizeDirection || s.resizeDirection === "vertical") ? Q : g.height, g.width = $.width, g.height = $.height), C && y.expandParent) {
        const he = U[0] * ($.width ?? 0);
        $.x && $.x < he && (g.x = he, v.x = v.x - ($.x - he));
        const ce = U[1] * ($.height ?? 0);
        $.y && $.y < ce && (g.y = ce, v.y = v.y - ($.y - ce));
      }
      const ee = cj({
        width: g.width,
        prevWidth: F,
        height: g.height,
        prevHeight: z,
        affectsX: s.controlDirection.affectsX,
        affectsY: s.controlDirection.affectsY
      }), J = { ...g, direction: ee };
      (w == null ? void 0 : w(_, J)) !== !1 && (A = !0, m == null || m(_, J), r($, O));
    }).on("end", (_) => {
      A && (x == null || x(_, { ...g }), o == null || o({ ...g }), A = !1);
    });
    i.call(L);
  }
  function a() {
    i.on(".drag", null);
  }
  return {
    update: l,
    destroy: a
  };
}
var jx = { exports: {} }, Ix = {}, Px = { exports: {} }, Mx = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho = b;
function mj(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var gj = typeof Object.is == "function" ? Object.is : mj, yj = Ho.useState, xj = Ho.useEffect, vj = Ho.useLayoutEffect, wj = Ho.useDebugValue;
function bj(e, t) {
  var n = t(), r = yj({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return vj(
    function() {
      o.value = n, o.getSnapshot = t, nu(o) && i({ inst: o });
    },
    [e, n, t]
  ), xj(
    function() {
      return nu(o) && i({ inst: o }), e(function() {
        nu(o) && i({ inst: o });
      });
    },
    [e]
  ), wj(n), n;
}
function nu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gj(e, n);
  } catch {
    return !0;
  }
}
function Sj(e, t) {
  return t();
}
var Nj = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Sj : bj;
Mx.useSyncExternalStore = Ho.useSyncExternalStore !== void 0 ? Ho.useSyncExternalStore : Nj;
Px.exports = Mx;
var Ej = Px.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cc = b, Cj = Ej;
function _j(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var kj = typeof Object.is == "function" ? Object.is : _j, Tj = Cj.useSyncExternalStore, jj = cc.useRef, Ij = cc.useEffect, Pj = cc.useMemo, Mj = cc.useDebugValue;
Ix.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = jj(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = Pj(
    function() {
      function a(h) {
        if (!c) {
          if (c = !0, d = h, h = r(h), o !== void 0 && s.hasValue) {
            var m = s.value;
            if (o(m, h))
              return u = m;
          }
          return u = h;
        }
        if (m = u, kj(d, h)) return m;
        var x = r(h);
        return o !== void 0 && o(m, x) ? (d = h, m) : (d = h, u = x);
      }
      var c = !1, d, u, p = n === void 0 ? null : n;
      return [
        function() {
          return a(t());
        },
        p === null ? void 0 : function() {
          return a(p());
        }
      ];
    },
    [t, n, r, o]
  );
  var l = Tj(e, i[0], i[1]);
  return Ij(
    function() {
      s.hasValue = !0, s.value = l;
    },
    [l]
  ), Mj(l), l;
};
jx.exports = Ix;
var Aj = jx.exports;
const Rj = /* @__PURE__ */ kf(Aj), Dj = {}, bm = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, u) => {
    const p = typeof d == "function" ? d(t) : d;
    if (!Object.is(p, t)) {
      const h = t;
      t = u ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((m) => m(t, h));
    }
  }, o = () => t, a = { setState: r, getState: o, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (Dj ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, c = t = e(r, o, a);
  return a;
}, Lj = (e) => e ? bm(e) : bm, { useDebugValue: Oj } = Sn, { useSyncExternalStoreWithSelector: Fj } = Rj, zj = (e) => e;
function Ax(e, t = zj, n) {
  const r = Fj(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return Oj(r), r;
}
const Sm = (e, t) => {
  const n = Lj(e), r = (o, i = t) => Ax(n, o, i);
  return Object.assign(r, n), r;
}, $j = (e, t) => e ? Sm(e, t) : Sm;
function Se(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e)
      if (!Object.is(o, t.get(r)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e)
      if (!t.has(r))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
var Rx = { exports: {} }, Et = {}, Dx = { exports: {} }, Lx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(I, T) {
    var F = I.length;
    I.push(T);
    e: for (; 0 < F; ) {
      var z = F - 1 >>> 1, $ = I[z];
      if (0 < o($, T)) I[z] = T, I[F] = $, F = z;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var T = I[0], F = I.pop();
    if (F !== T) {
      I[0] = F;
      e: for (var z = 0, $ = I.length, U = $ >>> 1; z < U; ) {
        var V = 2 * (z + 1) - 1, Q = I[V], K = V + 1, W = I[K];
        if (0 > o(Q, F)) K < $ && 0 > o(W, Q) ? (I[z] = W, I[K] = F, z = K) : (I[z] = Q, I[V] = F, z = V);
        else if (K < $ && 0 > o(W, F)) I[z] = W, I[K] = F, z = K;
        else break e;
      }
    }
    return T;
  }
  function o(I, T) {
    var F = I.sortIndex - T.sortIndex;
    return F !== 0 ? F : I.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], c = [], d = 1, u = null, p = 3, h = !1, m = !1, x = !1, w = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(I) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= I) r(c), T.sortIndex = T.expirationTime, t(a, T);
      else break;
      T = n(c);
    }
  }
  function S(I) {
    if (x = !1, y(I), !m) if (n(a) !== null) m = !0, R(E);
    else {
      var T = n(c);
      T !== null && O(S, T.startTime - I);
    }
  }
  function E(I, T) {
    m = !1, x && (x = !1, g(P), P = -1), h = !0;
    var F = p;
    try {
      for (y(T), u = n(a); u !== null && (!(u.expirationTime > T) || I && !_()); ) {
        var z = u.callback;
        if (typeof z == "function") {
          u.callback = null, p = u.priorityLevel;
          var $ = z(u.expirationTime <= T);
          T = e.unstable_now(), typeof $ == "function" ? u.callback = $ : u === n(a) && r(a), y(T);
        } else r(a);
        u = n(a);
      }
      if (u !== null) var U = !0;
      else {
        var V = n(c);
        V !== null && O(S, V.startTime - T), U = !1;
      }
      return U;
    } finally {
      u = null, p = F, h = !1;
    }
  }
  var C = !1, N = null, P = -1, A = 5, L = -1;
  function _() {
    return !(e.unstable_now() - L < A);
  }
  function M() {
    if (N !== null) {
      var I = e.unstable_now();
      L = I;
      var T = !0;
      try {
        T = N(!0, I);
      } finally {
        T ? j() : (C = !1, N = null);
      }
    } else C = !1;
  }
  var j;
  if (typeof v == "function") j = function() {
    v(M);
  };
  else if (typeof MessageChannel < "u") {
    var k = new MessageChannel(), D = k.port2;
    k.port1.onmessage = M, j = function() {
      D.postMessage(null);
    };
  } else j = function() {
    w(M, 0);
  };
  function R(I) {
    N = I, C || (C = !0, j());
  }
  function O(I, T) {
    P = w(function() {
      I(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    m || h || (m = !0, R(E));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(I) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = p;
    }
    var F = p;
    p = T;
    try {
      return I();
    } finally {
      p = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, T) {
    switch (I) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        I = 3;
    }
    var F = p;
    p = I;
    try {
      return T();
    } finally {
      p = F;
    }
  }, e.unstable_scheduleCallback = function(I, T, F) {
    var z = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? z + F : z) : F = z, I) {
      case 1:
        var $ = -1;
        break;
      case 2:
        $ = 250;
        break;
      case 5:
        $ = 1073741823;
        break;
      case 4:
        $ = 1e4;
        break;
      default:
        $ = 5e3;
    }
    return $ = F + $, I = { id: d++, callback: T, priorityLevel: I, startTime: F, expirationTime: $, sortIndex: -1 }, F > z ? (I.sortIndex = F, t(c, I), n(a) === null && I === n(c) && (x ? (g(P), P = -1) : x = !0, O(S, F - z))) : (I.sortIndex = $, t(a, I), m || h || (m = !0, R(E))), I;
  }, e.unstable_shouldYield = _, e.unstable_wrapCallback = function(I) {
    var T = p;
    return function() {
      var F = p;
      p = T;
      try {
        return I.apply(this, arguments);
      } finally {
        p = F;
      }
    };
  };
})(Lx);
Dx.exports = Lx;
var Hj = Dx.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vj = b, St = Hj;
function H(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ox = /* @__PURE__ */ new Set(), Qi = {};
function Yr(e, t) {
  Vo(e, t), Vo(e + "Capture", t);
}
function Vo(e, t) {
  for (Qi[e] = t, e = 0; e < t.length; e++) Ox.add(t[e]);
}
var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hd = Object.prototype.hasOwnProperty, Bj = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Nm = {}, Em = {};
function Uj(e) {
  return hd.call(Em, e) ? !0 : hd.call(Nm, e) ? !1 : Bj.test(e) ? Em[e] = !0 : (Nm[e] = !0, !1);
}
function Kj(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Wj(e, t, n, r) {
  if (t === null || typeof t > "u" || Kj(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function it(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  We[e] = new it(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  We[t] = new it(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  We[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  We[e] = new it(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  We[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  We[e] = new it(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  We[e] = new it(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  We[e] = new it(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  We[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ep = /[\-:]([a-z])/g;
function tp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ep,
    tp
  );
  We[t] = new it(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ep, tp);
  We[t] = new it(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ep, tp);
  We[t] = new it(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  We[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
We.xlinkHref = new it("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  We[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function np(e, t, n, r) {
  var o = We.hasOwnProperty(t) ? We[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Wj(t, n, o, r) && (n = null), r || o === null ? Uj(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Hn = Vj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qs = Symbol.for("react.element"), ao = Symbol.for("react.portal"), co = Symbol.for("react.fragment"), rp = Symbol.for("react.strict_mode"), md = Symbol.for("react.profiler"), Fx = Symbol.for("react.provider"), zx = Symbol.for("react.context"), op = Symbol.for("react.forward_ref"), gd = Symbol.for("react.suspense"), yd = Symbol.for("react.suspense_list"), ip = Symbol.for("react.memo"), Xn = Symbol.for("react.lazy"), $x = Symbol.for("react.offscreen"), Cm = Symbol.iterator;
function ai(e) {
  return e === null || typeof e != "object" ? null : (e = Cm && e[Cm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ke = Object.assign, ru;
function bi(e) {
  if (ru === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ru = t && t[1] || "";
  }
  return `
` + ru + e;
}
var ou = !1;
function iu(e, t) {
  if (!e || ou) return "";
  ou = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var o = c.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
        if (s !== 1 || l !== 1)
          do
            if (s--, l--, 0 > l || o[s] !== i[l]) {
              var a = `
` + o[s].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    ou = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? bi(e) : "";
}
function Yj(e) {
  switch (e.tag) {
    case 5:
      return bi(e.type);
    case 16:
      return bi("Lazy");
    case 13:
      return bi("Suspense");
    case 19:
      return bi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = iu(e.type, !1), e;
    case 11:
      return e = iu(e.type.render, !1), e;
    case 1:
      return e = iu(e.type, !0), e;
    default:
      return "";
  }
}
function xd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case co:
      return "Fragment";
    case ao:
      return "Portal";
    case md:
      return "Profiler";
    case rp:
      return "StrictMode";
    case gd:
      return "Suspense";
    case yd:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case zx:
      return (e.displayName || "Context") + ".Consumer";
    case Fx:
      return (e._context.displayName || "Context") + ".Provider";
    case op:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ip:
      return t = e.displayName || null, t !== null ? t : xd(e.type) || "Memo";
    case Xn:
      t = e._payload, e = e._init;
      try {
        return xd(e(t));
      } catch {
      }
  }
  return null;
}
function Gj(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xd(t);
    case 8:
      return t === rp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function fr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Hx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Xj(e) {
  var t = Hx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Zs(e) {
  e._valueTracker || (e._valueTracker = Xj(e));
}
function Vx(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Hx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function da(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vd(e, t) {
  var n = t.checked;
  return ke({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _m(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = fr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Bx(e, t) {
  t = t.checked, t != null && np(e, "checked", t, !1);
}
function wd(e, t) {
  Bx(e, t);
  var n = fr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? bd(e, t.type, n) : t.hasOwnProperty("defaultValue") && bd(e, t.type, fr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function km(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function bd(e, t, n) {
  (t !== "number" || da(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Si = Array.isArray;
function Eo(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return ke({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Tm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(H(92));
      if (Si(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: fr(n) };
}
function Ux(e, t) {
  var n = fr(t.value), r = fr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function jm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Nd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Kx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Js, Wx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Js = Js || document.createElement("div"), Js.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Js.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function qi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ji = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Qj = ["Webkit", "ms", "Moz", "O"];
Object.keys(ji).forEach(function(e) {
  Qj.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ji[t] = ji[e];
  });
});
function Yx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ji.hasOwnProperty(e) && ji[e] ? ("" + t).trim() : t + "px";
}
function Gx(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Yx(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var qj = ke({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ed(e, t) {
  if (t) {
    if (qj[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function Cd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _d = null;
function sp(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var kd = null, Co = null, _o = null;
function Im(e) {
  if (e = js(e)) {
    if (typeof kd != "function") throw Error(H(280));
    var t = e.stateNode;
    t && (t = hc(t), kd(e.stateNode, e.type, t));
  }
}
function Xx(e) {
  Co ? _o ? _o.push(e) : _o = [e] : Co = e;
}
function Qx() {
  if (Co) {
    var e = Co, t = _o;
    if (_o = Co = null, Im(e), t) for (e = 0; e < t.length; e++) Im(t[e]);
  }
}
function qx(e, t) {
  return e(t);
}
function Zx() {
}
var su = !1;
function Jx(e, t, n) {
  if (su) return e(t, n);
  su = !0;
  try {
    return qx(e, t, n);
  } finally {
    su = !1, (Co !== null || _o !== null) && (Zx(), Qx());
  }
}
function Zi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(H(231, t, typeof n));
  return n;
}
var Td = !1;
if (An) try {
  var ci = {};
  Object.defineProperty(ci, "passive", { get: function() {
    Td = !0;
  } }), window.addEventListener("test", ci, ci), window.removeEventListener("test", ci, ci);
} catch {
  Td = !1;
}
function Zj(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Ii = !1, fa = null, pa = !1, jd = null, Jj = { onError: function(e) {
  Ii = !0, fa = e;
} };
function eI(e, t, n, r, o, i, s, l, a) {
  Ii = !1, fa = null, Zj.apply(Jj, arguments);
}
function tI(e, t, n, r, o, i, s, l, a) {
  if (eI.apply(this, arguments), Ii) {
    if (Ii) {
      var c = fa;
      Ii = !1, fa = null;
    } else throw Error(H(198));
    pa || (pa = !0, jd = c);
  }
}
function Gr(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ev(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pm(e) {
  if (Gr(e) !== e) throw Error(H(188));
}
function nI(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Gr(e), t === null) throw Error(H(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Pm(o), e;
        if (i === r) return Pm(o), t;
        i = i.sibling;
      }
      throw Error(H(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (l === r) {
          s = !0, r = o, n = i;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (l === r) {
            s = !0, r = i, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(H(189));
      }
    }
    if (n.alternate !== r) throw Error(H(190));
  }
  if (n.tag !== 3) throw Error(H(188));
  return n.stateNode.current === n ? e : t;
}
function tv(e) {
  return e = nI(e), e !== null ? nv(e) : null;
}
function nv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = nv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rv = St.unstable_scheduleCallback, Mm = St.unstable_cancelCallback, rI = St.unstable_shouldYield, oI = St.unstable_requestPaint, je = St.unstable_now, iI = St.unstable_getCurrentPriorityLevel, lp = St.unstable_ImmediatePriority, ov = St.unstable_UserBlockingPriority, ha = St.unstable_NormalPriority, sI = St.unstable_LowPriority, iv = St.unstable_IdlePriority, uc = null, un = null;
function lI(e) {
  if (un && typeof un.onCommitFiberRoot == "function") try {
    un.onCommitFiberRoot(uc, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Gt = Math.clz32 ? Math.clz32 : uI, aI = Math.log, cI = Math.LN2;
function uI(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (aI(e) / cI | 0) | 0;
}
var el = 64, tl = 4194304;
function Ni(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ma(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = Ni(l) : (i &= s, i !== 0 && (r = Ni(i)));
  } else s = n & ~o, s !== 0 ? r = Ni(s) : i !== 0 && (r = Ni(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Gt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function dI(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function fI(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Gt(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = dI(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function Id(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function sv() {
  var e = el;
  return el <<= 1, !(el & 4194240) && (el = 64), e;
}
function lu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ks(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Gt(t), e[t] = n;
}
function pI(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Gt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ap(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Gt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var me = 0;
function lv(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var av, cp, cv, uv, dv, Pd = !1, nl = [], nr = null, rr = null, or = null, Ji = /* @__PURE__ */ new Map(), es = /* @__PURE__ */ new Map(), Zn = [], hI = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Am(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nr = null;
      break;
    case "dragenter":
    case "dragleave":
      rr = null;
      break;
    case "mouseover":
    case "mouseout":
      or = null;
      break;
    case "pointerover":
    case "pointerout":
      Ji.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      es.delete(t.pointerId);
  }
}
function ui(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = js(t), t !== null && cp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function mI(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return nr = ui(nr, e, t, n, r, o), !0;
    case "dragenter":
      return rr = ui(rr, e, t, n, r, o), !0;
    case "mouseover":
      return or = ui(or, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ji.set(i, ui(Ji.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, es.set(i, ui(es.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function fv(e) {
  var t = kr(e.target);
  if (t !== null) {
    var n = Gr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ev(n), t !== null) {
          e.blockedOn = t, dv(e.priority, function() {
            cv(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Md(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      _d = r, n.target.dispatchEvent(r), _d = null;
    } else return t = js(n), t !== null && cp(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Rm(e, t, n) {
  Ml(e) && n.delete(t);
}
function gI() {
  Pd = !1, nr !== null && Ml(nr) && (nr = null), rr !== null && Ml(rr) && (rr = null), or !== null && Ml(or) && (or = null), Ji.forEach(Rm), es.forEach(Rm);
}
function di(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Pd || (Pd = !0, St.unstable_scheduleCallback(St.unstable_NormalPriority, gI)));
}
function ts(e) {
  function t(o) {
    return di(o, e);
  }
  if (0 < nl.length) {
    di(nl[0], e);
    for (var n = 1; n < nl.length; n++) {
      var r = nl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nr !== null && di(nr, e), rr !== null && di(rr, e), or !== null && di(or, e), Ji.forEach(t), es.forEach(t), n = 0; n < Zn.length; n++) r = Zn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zn.length && (n = Zn[0], n.blockedOn === null); ) fv(n), n.blockedOn === null && Zn.shift();
}
var ko = Hn.ReactCurrentBatchConfig, ga = !0;
function yI(e, t, n, r) {
  var o = me, i = ko.transition;
  ko.transition = null;
  try {
    me = 1, up(e, t, n, r);
  } finally {
    me = o, ko.transition = i;
  }
}
function xI(e, t, n, r) {
  var o = me, i = ko.transition;
  ko.transition = null;
  try {
    me = 4, up(e, t, n, r);
  } finally {
    me = o, ko.transition = i;
  }
}
function up(e, t, n, r) {
  if (ga) {
    var o = Md(e, t, n, r);
    if (o === null) yu(e, t, r, ya, n), Am(e, r);
    else if (mI(o, e, t, n, r)) r.stopPropagation();
    else if (Am(e, r), t & 4 && -1 < hI.indexOf(e)) {
      for (; o !== null; ) {
        var i = js(o);
        if (i !== null && av(i), i = Md(e, t, n, r), i === null && yu(e, t, r, ya, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else yu(e, t, r, null, n);
  }
}
var ya = null;
function Md(e, t, n, r) {
  if (ya = null, e = sp(r), e = kr(e), e !== null) if (t = Gr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ev(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ya = e, null;
}
function pv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (iI()) {
        case lp:
          return 1;
        case ov:
          return 4;
        case ha:
        case sI:
          return 16;
        case iv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var er = null, dp = null, Al = null;
function hv() {
  if (Al) return Al;
  var e, t = dp, n = t.length, r, o = "value" in er ? er.value : er.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Al = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Rl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function rl() {
  return !0;
}
function Dm() {
  return !1;
}
function Ct(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? rl : Dm, this.isPropagationStopped = Dm, this;
  }
  return ke(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = rl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = rl);
  }, persist: function() {
  }, isPersistent: rl }), t;
}
var Zo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, fp = Ct(Zo), Ts = ke({}, Zo, { view: 0, detail: 0 }), vI = Ct(Ts), au, cu, fi, dc = ke({}, Ts, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pp, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fi && (fi && e.type === "mousemove" ? (au = e.screenX - fi.screenX, cu = e.screenY - fi.screenY) : cu = au = 0, fi = e), au);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : cu;
} }), Lm = Ct(dc), wI = ke({}, dc, { dataTransfer: 0 }), bI = Ct(wI), SI = ke({}, Ts, { relatedTarget: 0 }), uu = Ct(SI), NI = ke({}, Zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), EI = Ct(NI), CI = ke({}, Zo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), _I = Ct(CI), kI = ke({}, Zo, { data: 0 }), Om = Ct(kI), TI = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, jI = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, II = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function PI(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = II[e]) ? !!t[e] : !1;
}
function pp() {
  return PI;
}
var MI = ke({}, Ts, { key: function(e) {
  if (e.key) {
    var t = TI[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Rl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jI[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pp, charCode: function(e) {
  return e.type === "keypress" ? Rl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), AI = Ct(MI), RI = ke({}, dc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fm = Ct(RI), DI = ke({}, Ts, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pp }), LI = Ct(DI), OI = ke({}, Zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), FI = Ct(OI), zI = ke({}, dc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $I = Ct(zI), HI = [9, 13, 27, 32], hp = An && "CompositionEvent" in window, Pi = null;
An && "documentMode" in document && (Pi = document.documentMode);
var VI = An && "TextEvent" in window && !Pi, mv = An && (!hp || Pi && 8 < Pi && 11 >= Pi), zm = " ", $m = !1;
function gv(e, t) {
  switch (e) {
    case "keyup":
      return HI.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function yv(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var uo = !1;
function BI(e, t) {
  switch (e) {
    case "compositionend":
      return yv(t);
    case "keypress":
      return t.which !== 32 ? null : ($m = !0, zm);
    case "textInput":
      return e = t.data, e === zm && $m ? null : e;
    default:
      return null;
  }
}
function UI(e, t) {
  if (uo) return e === "compositionend" || !hp && gv(e, t) ? (e = hv(), Al = dp = er = null, uo = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return mv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var KI = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!KI[e.type] : t === "textarea";
}
function xv(e, t, n, r) {
  Xx(r), t = xa(t, "onChange"), 0 < t.length && (n = new fp("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Mi = null, ns = null;
function WI(e) {
  jv(e, 0);
}
function fc(e) {
  var t = ho(e);
  if (Vx(t)) return e;
}
function YI(e, t) {
  if (e === "change") return t;
}
var vv = !1;
if (An) {
  var du;
  if (An) {
    var fu = "oninput" in document;
    if (!fu) {
      var Vm = document.createElement("div");
      Vm.setAttribute("oninput", "return;"), fu = typeof Vm.oninput == "function";
    }
    du = fu;
  } else du = !1;
  vv = du && (!document.documentMode || 9 < document.documentMode);
}
function Bm() {
  Mi && (Mi.detachEvent("onpropertychange", wv), ns = Mi = null);
}
function wv(e) {
  if (e.propertyName === "value" && fc(ns)) {
    var t = [];
    xv(t, ns, e, sp(e)), Jx(WI, t);
  }
}
function GI(e, t, n) {
  e === "focusin" ? (Bm(), Mi = t, ns = n, Mi.attachEvent("onpropertychange", wv)) : e === "focusout" && Bm();
}
function XI(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return fc(ns);
}
function QI(e, t) {
  if (e === "click") return fc(t);
}
function qI(e, t) {
  if (e === "input" || e === "change") return fc(t);
}
function ZI(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qt = typeof Object.is == "function" ? Object.is : ZI;
function rs(e, t) {
  if (qt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!hd.call(t, o) || !qt(e[o], t[o])) return !1;
  }
  return !0;
}
function Um(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Km(e, t) {
  var n = Um(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Um(n);
  }
}
function bv(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Sv() {
  for (var e = window, t = da(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = da(e.document);
  }
  return t;
}
function mp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function JI(e) {
  var t = Sv(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && bv(n.ownerDocument.documentElement, n)) {
    if (r !== null && mp(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Km(n, i);
        var s = Km(
          n,
          r
        );
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var eP = An && "documentMode" in document && 11 >= document.documentMode, fo = null, Ad = null, Ai = null, Rd = !1;
function Wm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Rd || fo == null || fo !== da(r) || (r = fo, "selectionStart" in r && mp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ai && rs(Ai, r) || (Ai = r, r = xa(Ad, "onSelect"), 0 < r.length && (t = new fp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = fo)));
}
function ol(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var po = { animationend: ol("Animation", "AnimationEnd"), animationiteration: ol("Animation", "AnimationIteration"), animationstart: ol("Animation", "AnimationStart"), transitionend: ol("Transition", "TransitionEnd") }, pu = {}, Nv = {};
An && (Nv = document.createElement("div").style, "AnimationEvent" in window || (delete po.animationend.animation, delete po.animationiteration.animation, delete po.animationstart.animation), "TransitionEvent" in window || delete po.transitionend.transition);
function pc(e) {
  if (pu[e]) return pu[e];
  if (!po[e]) return e;
  var t = po[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nv) return pu[e] = t[n];
  return e;
}
var Ev = pc("animationend"), Cv = pc("animationiteration"), _v = pc("animationstart"), kv = pc("transitionend"), Tv = /* @__PURE__ */ new Map(), Ym = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xr(e, t) {
  Tv.set(e, t), Yr(t, [e]);
}
for (var hu = 0; hu < Ym.length; hu++) {
  var mu = Ym[hu], tP = mu.toLowerCase(), nP = mu[0].toUpperCase() + mu.slice(1);
  xr(tP, "on" + nP);
}
xr(Ev, "onAnimationEnd");
xr(Cv, "onAnimationIteration");
xr(_v, "onAnimationStart");
xr("dblclick", "onDoubleClick");
xr("focusin", "onFocus");
xr("focusout", "onBlur");
xr(kv, "onTransitionEnd");
Vo("onMouseEnter", ["mouseout", "mouseover"]);
Vo("onMouseLeave", ["mouseout", "mouseover"]);
Vo("onPointerEnter", ["pointerout", "pointerover"]);
Vo("onPointerLeave", ["pointerout", "pointerover"]);
Yr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Yr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Yr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Yr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ei = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rP = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));
function Gm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, tI(r, t, void 0, e), e.currentTarget = null;
}
function jv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Gm(o, l, c), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Gm(o, l, c), i = a;
      }
    }
  }
  if (pa) throw e = jd, pa = !1, jd = null, e;
}
function we(e, t) {
  var n = t[zd];
  n === void 0 && (n = t[zd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Iv(t, e, 2, !1), n.add(r));
}
function gu(e, t, n) {
  var r = 0;
  t && (r |= 4), Iv(n, e, r, t);
}
var il = "_reactListening" + Math.random().toString(36).slice(2);
function os(e) {
  if (!e[il]) {
    e[il] = !0, Ox.forEach(function(n) {
      n !== "selectionchange" && (rP.has(n) || gu(n, !1, e), gu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[il] || (t[il] = !0, gu("selectionchange", !1, t));
  }
}
function Iv(e, t, n, r) {
  switch (pv(t)) {
    case 1:
      var o = yI;
      break;
    case 4:
      o = xI;
      break;
    default:
      o = up;
  }
  n = o.bind(null, t, n, e), o = void 0, !Td || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function yu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var a = s.tag;
        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = kr(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Jx(function() {
    var c = i, d = sp(n), u = [];
    e: {
      var p = Tv.get(e);
      if (p !== void 0) {
        var h = fp, m = e;
        switch (e) {
          case "keypress":
            if (Rl(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = AI;
            break;
          case "focusin":
            m = "focus", h = uu;
            break;
          case "focusout":
            m = "blur", h = uu;
            break;
          case "beforeblur":
          case "afterblur":
            h = uu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Lm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = bI;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = LI;
            break;
          case Ev:
          case Cv:
          case _v:
            h = EI;
            break;
          case kv:
            h = FI;
            break;
          case "scroll":
            h = vI;
            break;
          case "wheel":
            h = $I;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = _I;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Fm;
        }
        var x = (t & 4) !== 0, w = !x && e === "scroll", g = x ? p !== null ? p + "Capture" : null : p;
        x = [];
        for (var v = c, y; v !== null; ) {
          y = v;
          var S = y.stateNode;
          if (y.tag === 5 && S !== null && (y = S, g !== null && (S = Zi(v, g), S != null && x.push(is(v, S, y)))), w) break;
          v = v.return;
        }
        0 < x.length && (p = new h(p, m, null, n, d), u.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", p && n !== _d && (m = n.relatedTarget || n.fromElement) && (kr(m) || m[Rn])) break e;
        if ((h || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, h ? (m = n.relatedTarget || n.toElement, h = c, m = m ? kr(m) : null, m !== null && (w = Gr(m), m !== w || m.tag !== 5 && m.tag !== 6) && (m = null)) : (h = null, m = c), h !== m)) {
          if (x = Lm, S = "onMouseLeave", g = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (x = Fm, S = "onPointerLeave", g = "onPointerEnter", v = "pointer"), w = h == null ? p : ho(h), y = m == null ? p : ho(m), p = new x(S, v + "leave", h, n, d), p.target = w, p.relatedTarget = y, S = null, kr(d) === c && (x = new x(g, v + "enter", m, n, d), x.target = y, x.relatedTarget = w, S = x), w = S, h && m) t: {
            for (x = h, g = m, v = 0, y = x; y; y = to(y)) v++;
            for (y = 0, S = g; S; S = to(S)) y++;
            for (; 0 < v - y; ) x = to(x), v--;
            for (; 0 < y - v; ) g = to(g), y--;
            for (; v--; ) {
              if (x === g || g !== null && x === g.alternate) break t;
              x = to(x), g = to(g);
            }
            x = null;
          }
          else x = null;
          h !== null && Xm(u, p, h, x, !1), m !== null && w !== null && Xm(u, w, m, x, !0);
        }
      }
      e: {
        if (p = c ? ho(c) : window, h = p.nodeName && p.nodeName.toLowerCase(), h === "select" || h === "input" && p.type === "file") var E = YI;
        else if (Hm(p)) if (vv) E = qI;
        else {
          E = XI;
          var C = GI;
        }
        else (h = p.nodeName) && h.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = QI);
        if (E && (E = E(e, c))) {
          xv(u, E, n, d);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && bd(p, "number", p.value);
      }
      switch (C = c ? ho(c) : window, e) {
        case "focusin":
          (Hm(C) || C.contentEditable === "true") && (fo = C, Ad = c, Ai = null);
          break;
        case "focusout":
          Ai = Ad = fo = null;
          break;
        case "mousedown":
          Rd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Rd = !1, Wm(u, n, d);
          break;
        case "selectionchange":
          if (eP) break;
        case "keydown":
        case "keyup":
          Wm(u, n, d);
      }
      var N;
      if (hp) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else uo ? gv(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (mv && n.locale !== "ko" && (uo || P !== "onCompositionStart" ? P === "onCompositionEnd" && uo && (N = hv()) : (er = d, dp = "value" in er ? er.value : er.textContent, uo = !0)), C = xa(c, P), 0 < C.length && (P = new Om(P, e, null, n, d), u.push({ event: P, listeners: C }), N ? P.data = N : (N = yv(n), N !== null && (P.data = N)))), (N = VI ? BI(e, n) : UI(e, n)) && (c = xa(c, "onBeforeInput"), 0 < c.length && (d = new Om("onBeforeInput", "beforeinput", null, n, d), u.push({ event: d, listeners: c }), d.data = N));
    }
    jv(u, t);
  });
}
function is(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Zi(e, n), i != null && r.unshift(is(e, i, o)), i = Zi(e, t), i != null && r.push(is(e, i, o))), e = e.return;
  }
  return r;
}
function to(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = Zi(n, i), a != null && s.unshift(is(n, a, l))) : o || (a = Zi(n, i), a != null && s.push(is(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var oP = /\r\n?/g, iP = /\u0000|\uFFFD/g;
function Qm(e) {
  return (typeof e == "string" ? e : "" + e).replace(oP, `
`).replace(iP, "");
}
function sl(e, t, n) {
  if (t = Qm(t), Qm(e) !== t && n) throw Error(H(425));
}
function va() {
}
var Dd = null, Ld = null;
function Od(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Fd = typeof setTimeout == "function" ? setTimeout : void 0, sP = typeof clearTimeout == "function" ? clearTimeout : void 0, qm = typeof Promise == "function" ? Promise : void 0, lP = typeof queueMicrotask == "function" ? queueMicrotask : typeof qm < "u" ? function(e) {
  return qm.resolve(null).then(e).catch(aP);
} : Fd;
function aP(e) {
  setTimeout(function() {
    throw e;
  });
}
function xu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), ts(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ts(t);
}
function ir(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Zm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Jo = Math.random().toString(36).slice(2), sn = "__reactFiber$" + Jo, ss = "__reactProps$" + Jo, Rn = "__reactContainer$" + Jo, zd = "__reactEvents$" + Jo, cP = "__reactListeners$" + Jo, uP = "__reactHandles$" + Jo;
function kr(e) {
  var t = e[sn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Rn] || n[sn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Zm(e); e !== null; ) {
        if (n = e[sn]) return n;
        e = Zm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function js(e) {
  return e = e[sn] || e[Rn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ho(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function hc(e) {
  return e[ss] || null;
}
var $d = [], mo = -1;
function vr(e) {
  return { current: e };
}
function be(e) {
  0 > mo || (e.current = $d[mo], $d[mo] = null, mo--);
}
function ye(e, t) {
  mo++, $d[mo] = e.current, e.current = t;
}
var pr = {}, Je = vr(pr), ut = vr(!1), Hr = pr;
function Bo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function dt(e) {
  return e = e.childContextTypes, e != null;
}
function wa() {
  be(ut), be(Je);
}
function Jm(e, t, n) {
  if (Je.current !== pr) throw Error(H(168));
  ye(Je, t), ye(ut, n);
}
function Pv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, Gj(e) || "Unknown", o));
  return ke({}, n, r);
}
function ba(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pr, Hr = Je.current, ye(Je, e), ye(ut, ut.current), !0;
}
function eg(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n ? (e = Pv(e, t, Hr), r.__reactInternalMemoizedMergedChildContext = e, be(ut), be(Je), ye(Je, e)) : be(ut), ye(ut, n);
}
var Cn = null, mc = !1, vu = !1;
function Mv(e) {
  Cn === null ? Cn = [e] : Cn.push(e);
}
function dP(e) {
  mc = !0, Mv(e);
}
function wr() {
  if (!vu && Cn !== null) {
    vu = !0;
    var e = 0, t = me;
    try {
      var n = Cn;
      for (me = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Cn = null, mc = !1;
    } catch (o) {
      throw Cn !== null && (Cn = Cn.slice(e + 1)), rv(lp, wr), o;
    } finally {
      me = t, vu = !1;
    }
  }
  return null;
}
var go = [], yo = 0, Sa = null, Na = 0, Tt = [], jt = 0, Vr = null, kn = 1, Tn = "";
function Sr(e, t) {
  go[yo++] = Na, go[yo++] = Sa, Sa = e, Na = t;
}
function Av(e, t, n) {
  Tt[jt++] = kn, Tt[jt++] = Tn, Tt[jt++] = Vr, Vr = e;
  var r = kn;
  e = Tn;
  var o = 32 - Gt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Gt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, kn = 1 << 32 - Gt(t) + o | n << o | r, Tn = i + e;
  } else kn = 1 << i | n << o | r, Tn = e;
}
function gp(e) {
  e.return !== null && (Sr(e, 1), Av(e, 1, 0));
}
function yp(e) {
  for (; e === Sa; ) Sa = go[--yo], go[yo] = null, Na = go[--yo], go[yo] = null;
  for (; e === Vr; ) Vr = Tt[--jt], Tt[jt] = null, Tn = Tt[--jt], Tt[jt] = null, kn = Tt[--jt], Tt[jt] = null;
}
var vt = null, xt = null, Ee = !1, Bt = null;
function Rv(e, t) {
  var n = Mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function tg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, vt = e, xt = ir(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, vt = e, xt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Vr !== null ? { id: kn, overflow: Tn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, vt = e, xt = null, !0) : !1;
    default:
      return !1;
  }
}
function Hd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vd(e) {
  if (Ee) {
    var t = xt;
    if (t) {
      var n = t;
      if (!tg(e, t)) {
        if (Hd(e)) throw Error(H(418));
        t = ir(n.nextSibling);
        var r = vt;
        t && tg(e, t) ? Rv(r, n) : (e.flags = e.flags & -4097 | 2, Ee = !1, vt = e);
      }
    } else {
      if (Hd(e)) throw Error(H(418));
      e.flags = e.flags & -4097 | 2, Ee = !1, vt = e;
    }
  }
}
function ng(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  vt = e;
}
function ll(e) {
  if (e !== vt) return !1;
  if (!Ee) return ng(e), Ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Od(e.type, e.memoizedProps)), t && (t = xt)) {
    if (Hd(e)) throw Dv(), Error(H(418));
    for (; t; ) Rv(e, t), t = ir(t.nextSibling);
  }
  if (ng(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xt = ir(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      xt = null;
    }
  } else xt = vt ? ir(e.stateNode.nextSibling) : null;
  return !0;
}
function Dv() {
  for (var e = xt; e; ) e = ir(e.nextSibling);
}
function Uo() {
  xt = vt = null, Ee = !1;
}
function xp(e) {
  Bt === null ? Bt = [e] : Bt.push(e);
}
var fP = Hn.ReactCurrentBatchConfig;
function pi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(H(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(H(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(H(284));
    if (!n._owner) throw Error(H(290, e));
  }
  return e;
}
function al(e, t) {
  throw e = Object.prototype.toString.call(t), Error(H(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function rg(e) {
  var t = e._init;
  return t(e._payload);
}
function Lv(e) {
  function t(g, v) {
    if (e) {
      var y = g.deletions;
      y === null ? (g.deletions = [v], g.flags |= 16) : y.push(v);
    }
  }
  function n(g, v) {
    if (!e) return null;
    for (; v !== null; ) t(g, v), v = v.sibling;
    return null;
  }
  function r(g, v) {
    for (g = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? g.set(v.key, v) : g.set(v.index, v), v = v.sibling;
    return g;
  }
  function o(g, v) {
    return g = cr(g, v), g.index = 0, g.sibling = null, g;
  }
  function i(g, v, y) {
    return g.index = y, e ? (y = g.alternate, y !== null ? (y = y.index, y < v ? (g.flags |= 2, v) : y) : (g.flags |= 2, v)) : (g.flags |= 1048576, v);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, v, y, S) {
    return v === null || v.tag !== 6 ? (v = _u(y, g.mode, S), v.return = g, v) : (v = o(v, y), v.return = g, v);
  }
  function a(g, v, y, S) {
    var E = y.type;
    return E === co ? d(g, v, y.props.children, S, y.key) : v !== null && (v.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Xn && rg(E) === v.type) ? (S = o(v, y.props), S.ref = pi(g, v, y), S.return = g, S) : (S = Hl(y.type, y.key, y.props, null, g.mode, S), S.ref = pi(g, v, y), S.return = g, S);
  }
  function c(g, v, y, S) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== y.containerInfo || v.stateNode.implementation !== y.implementation ? (v = ku(y, g.mode, S), v.return = g, v) : (v = o(v, y.children || []), v.return = g, v);
  }
  function d(g, v, y, S, E) {
    return v === null || v.tag !== 7 ? (v = Ar(y, g.mode, S, E), v.return = g, v) : (v = o(v, y), v.return = g, v);
  }
  function u(g, v, y) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return v = _u("" + v, g.mode, y), v.return = g, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case qs:
          return y = Hl(v.type, v.key, v.props, null, g.mode, y), y.ref = pi(g, null, v), y.return = g, y;
        case ao:
          return v = ku(v, g.mode, y), v.return = g, v;
        case Xn:
          var S = v._init;
          return u(g, S(v._payload), y);
      }
      if (Si(v) || ai(v)) return v = Ar(v, g.mode, y, null), v.return = g, v;
      al(g, v);
    }
    return null;
  }
  function p(g, v, y, S) {
    var E = v !== null ? v.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return E !== null ? null : l(g, v, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case qs:
          return y.key === E ? a(g, v, y, S) : null;
        case ao:
          return y.key === E ? c(g, v, y, S) : null;
        case Xn:
          return E = y._init, p(
            g,
            v,
            E(y._payload),
            S
          );
      }
      if (Si(y) || ai(y)) return E !== null ? null : d(g, v, y, S, null);
      al(g, y);
    }
    return null;
  }
  function h(g, v, y, S, E) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(y) || null, l(v, g, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case qs:
          return g = g.get(S.key === null ? y : S.key) || null, a(v, g, S, E);
        case ao:
          return g = g.get(S.key === null ? y : S.key) || null, c(v, g, S, E);
        case Xn:
          var C = S._init;
          return h(g, v, y, C(S._payload), E);
      }
      if (Si(S) || ai(S)) return g = g.get(y) || null, d(v, g, S, E, null);
      al(v, S);
    }
    return null;
  }
  function m(g, v, y, S) {
    for (var E = null, C = null, N = v, P = v = 0, A = null; N !== null && P < y.length; P++) {
      N.index > P ? (A = N, N = null) : A = N.sibling;
      var L = p(g, N, y[P], S);
      if (L === null) {
        N === null && (N = A);
        break;
      }
      e && N && L.alternate === null && t(g, N), v = i(L, v, P), C === null ? E = L : C.sibling = L, C = L, N = A;
    }
    if (P === y.length) return n(g, N), Ee && Sr(g, P), E;
    if (N === null) {
      for (; P < y.length; P++) N = u(g, y[P], S), N !== null && (v = i(N, v, P), C === null ? E = N : C.sibling = N, C = N);
      return Ee && Sr(g, P), E;
    }
    for (N = r(g, N); P < y.length; P++) A = h(N, g, P, y[P], S), A !== null && (e && A.alternate !== null && N.delete(A.key === null ? P : A.key), v = i(A, v, P), C === null ? E = A : C.sibling = A, C = A);
    return e && N.forEach(function(_) {
      return t(g, _);
    }), Ee && Sr(g, P), E;
  }
  function x(g, v, y, S) {
    var E = ai(y);
    if (typeof E != "function") throw Error(H(150));
    if (y = E.call(y), y == null) throw Error(H(151));
    for (var C = E = null, N = v, P = v = 0, A = null, L = y.next(); N !== null && !L.done; P++, L = y.next()) {
      N.index > P ? (A = N, N = null) : A = N.sibling;
      var _ = p(g, N, L.value, S);
      if (_ === null) {
        N === null && (N = A);
        break;
      }
      e && N && _.alternate === null && t(g, N), v = i(_, v, P), C === null ? E = _ : C.sibling = _, C = _, N = A;
    }
    if (L.done) return n(
      g,
      N
    ), Ee && Sr(g, P), E;
    if (N === null) {
      for (; !L.done; P++, L = y.next()) L = u(g, L.value, S), L !== null && (v = i(L, v, P), C === null ? E = L : C.sibling = L, C = L);
      return Ee && Sr(g, P), E;
    }
    for (N = r(g, N); !L.done; P++, L = y.next()) L = h(N, g, P, L.value, S), L !== null && (e && L.alternate !== null && N.delete(L.key === null ? P : L.key), v = i(L, v, P), C === null ? E = L : C.sibling = L, C = L);
    return e && N.forEach(function(M) {
      return t(g, M);
    }), Ee && Sr(g, P), E;
  }
  function w(g, v, y, S) {
    if (typeof y == "object" && y !== null && y.type === co && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case qs:
          e: {
            for (var E = y.key, C = v; C !== null; ) {
              if (C.key === E) {
                if (E = y.type, E === co) {
                  if (C.tag === 7) {
                    n(g, C.sibling), v = o(C, y.props.children), v.return = g, g = v;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Xn && rg(E) === C.type) {
                  n(g, C.sibling), v = o(C, y.props), v.ref = pi(g, C, y), v.return = g, g = v;
                  break e;
                }
                n(g, C);
                break;
              } else t(g, C);
              C = C.sibling;
            }
            y.type === co ? (v = Ar(y.props.children, g.mode, S, y.key), v.return = g, g = v) : (S = Hl(y.type, y.key, y.props, null, g.mode, S), S.ref = pi(g, v, y), S.return = g, g = S);
          }
          return s(g);
        case ao:
          e: {
            for (C = y.key; v !== null; ) {
              if (v.key === C) if (v.tag === 4 && v.stateNode.containerInfo === y.containerInfo && v.stateNode.implementation === y.implementation) {
                n(g, v.sibling), v = o(v, y.children || []), v.return = g, g = v;
                break e;
              } else {
                n(g, v);
                break;
              }
              else t(g, v);
              v = v.sibling;
            }
            v = ku(y, g.mode, S), v.return = g, g = v;
          }
          return s(g);
        case Xn:
          return C = y._init, w(g, v, C(y._payload), S);
      }
      if (Si(y)) return m(g, v, y, S);
      if (ai(y)) return x(g, v, y, S);
      al(g, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, v !== null && v.tag === 6 ? (n(g, v.sibling), v = o(v, y), v.return = g, g = v) : (n(g, v), v = _u(y, g.mode, S), v.return = g, g = v), s(g)) : n(g, v);
  }
  return w;
}
var Ko = Lv(!0), Ov = Lv(!1), Ea = vr(null), Ca = null, xo = null, vp = null;
function wp() {
  vp = xo = Ca = null;
}
function bp(e) {
  var t = Ea.current;
  be(Ea), e._currentValue = t;
}
function Bd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function To(e, t) {
  Ca = e, vp = xo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ct = !0), e.firstContext = null);
}
function Dt(e) {
  var t = e._currentValue;
  if (vp !== e) if (e = { context: e, memoizedValue: t, next: null }, xo === null) {
    if (Ca === null) throw Error(H(308));
    xo = e, Ca.dependencies = { lanes: 0, firstContext: e };
  } else xo = xo.next = e;
  return t;
}
var Tr = null;
function Sp(e) {
  Tr === null ? Tr = [e] : Tr.push(e);
}
function Fv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Sp(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Dn(e, r);
}
function Dn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Qn = !1;
function Np(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function zv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function In(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function sr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, pe & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Dn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Sp(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Dn(e, n);
}
function Dl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ap(e, n);
  }
}
function og(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function _a(e, t, n, r) {
  var o = e.updateQueue;
  Qn = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, s === null ? i = c : s.next = c, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var u = o.baseState;
    s = 0, d = c = a = null, l = i;
    do {
      var p = l.lane, h = l.eventTime;
      if ((r & p) === p) {
        d !== null && (d = d.next = {
          eventTime: h,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var m = e, x = l;
          switch (p = t, h = n, x.tag) {
            case 1:
              if (m = x.payload, typeof m == "function") {
                u = m.call(h, u, p);
                break e;
              }
              u = m;
              break e;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              if (m = x.payload, p = typeof m == "function" ? m.call(h, u, p) : m, p == null) break e;
              u = ke({}, u, p);
              break e;
            case 2:
              Qn = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [l] : p.push(l));
      } else h = { eventTime: h, lane: p, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (c = d = h, a = u) : d = d.next = h, s |= p;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        p = l, l = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = u), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Ur |= s, e.lanes = s, e.memoizedState = u;
  }
}
function ig(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(H(191, o));
      o.call(r);
    }
  }
}
var Is = {}, dn = vr(Is), ls = vr(Is), as = vr(Is);
function jr(e) {
  if (e === Is) throw Error(H(174));
  return e;
}
function Ep(e, t) {
  switch (ye(as, t), ye(ls, e), ye(dn, Is), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Nd(t, e);
  }
  be(dn), ye(dn, t);
}
function Wo() {
  be(dn), be(ls), be(as);
}
function $v(e) {
  jr(as.current);
  var t = jr(dn.current), n = Nd(t, e.type);
  t !== n && (ye(ls, e), ye(dn, n));
}
function Cp(e) {
  ls.current === e && (be(dn), be(ls));
}
var Ce = vr(0);
function ka(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var wu = [];
function _p() {
  for (var e = 0; e < wu.length; e++) wu[e]._workInProgressVersionPrimary = null;
  wu.length = 0;
}
var Ll = Hn.ReactCurrentDispatcher, bu = Hn.ReactCurrentBatchConfig, Br = 0, _e = null, Oe = null, ze = null, Ta = !1, Ri = !1, cs = 0, pP = 0;
function Ge() {
  throw Error(H(321));
}
function kp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qt(e[n], t[n])) return !1;
  return !0;
}
function Tp(e, t, n, r, o, i) {
  if (Br = i, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ll.current = e === null || e.memoizedState === null ? yP : xP, e = n(r, o), Ri) {
    i = 0;
    do {
      if (Ri = !1, cs = 0, 25 <= i) throw Error(H(301));
      i += 1, ze = Oe = null, t.updateQueue = null, Ll.current = vP, e = n(r, o);
    } while (Ri);
  }
  if (Ll.current = ja, t = Oe !== null && Oe.next !== null, Br = 0, ze = Oe = _e = null, Ta = !1, t) throw Error(H(300));
  return e;
}
function jp() {
  var e = cs !== 0;
  return cs = 0, e;
}
function rn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ze === null ? _e.memoizedState = ze = e : ze = ze.next = e, ze;
}
function Lt() {
  if (Oe === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = ze === null ? _e.memoizedState : ze.next;
  if (t !== null) ze = t, Oe = e;
  else {
    if (e === null) throw Error(H(310));
    Oe = e, e = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }, ze === null ? _e.memoizedState = ze = e : ze = ze.next = e;
  }
  return ze;
}
function us(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Su(e) {
  var t = Lt(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = Oe, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = s = null, a = null, c = i;
    do {
      var d = c.lane;
      if ((Br & d) === d) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var u = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = u, s = r) : a = a.next = u, _e.lanes |= d, Ur |= d;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? s = r : a.next = l, qt(r, t.memoizedState) || (ct = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, _e.lanes |= i, Ur |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Nu(e) {
  var t = Lt(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    qt(i, t.memoizedState) || (ct = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Hv() {
}
function Vv(e, t) {
  var n = _e, r = Lt(), o = t(), i = !qt(r.memoizedState, o);
  if (i && (r.memoizedState = o, ct = !0), r = r.queue, Ip(Kv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ze !== null && ze.memoizedState.tag & 1) {
    if (n.flags |= 2048, ds(9, Uv.bind(null, n, r, o, t), void 0, null), $e === null) throw Error(H(349));
    Br & 30 || Bv(n, t, o);
  }
  return o;
}
function Bv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Uv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Wv(t) && Yv(e);
}
function Kv(e, t, n) {
  return n(function() {
    Wv(t) && Yv(e);
  });
}
function Wv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qt(e, n);
  } catch {
    return !0;
  }
}
function Yv(e) {
  var t = Dn(e, 1);
  t !== null && Xt(t, e, 1, -1);
}
function sg(e) {
  var t = rn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: us, lastRenderedState: e }, t.queue = e, e = e.dispatch = gP.bind(null, _e, e), [t.memoizedState, e];
}
function ds(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Gv() {
  return Lt().memoizedState;
}
function Ol(e, t, n, r) {
  var o = rn();
  _e.flags |= e, o.memoizedState = ds(1 | t, n, void 0, r === void 0 ? null : r);
}
function gc(e, t, n, r) {
  var o = Lt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Oe !== null) {
    var s = Oe.memoizedState;
    if (i = s.destroy, r !== null && kp(r, s.deps)) {
      o.memoizedState = ds(t, n, i, r);
      return;
    }
  }
  _e.flags |= e, o.memoizedState = ds(1 | t, n, i, r);
}
function lg(e, t) {
  return Ol(8390656, 8, e, t);
}
function Ip(e, t) {
  return gc(2048, 8, e, t);
}
function Xv(e, t) {
  return gc(4, 2, e, t);
}
function Qv(e, t) {
  return gc(4, 4, e, t);
}
function qv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Zv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gc(4, 4, qv.bind(null, t, e), n);
}
function Pp() {
}
function Jv(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ew(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function tw(e, t, n) {
  return Br & 21 ? (qt(n, t) || (n = sv(), _e.lanes |= n, Ur |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ct = !0), e.memoizedState = n);
}
function hP(e, t) {
  var n = me;
  me = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = bu.transition;
  bu.transition = {};
  try {
    e(!1), t();
  } finally {
    me = n, bu.transition = r;
  }
}
function nw() {
  return Lt().memoizedState;
}
function mP(e, t, n) {
  var r = ar(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, rw(e)) ow(t, n);
  else if (n = Fv(e, t, n, r), n !== null) {
    var o = nt();
    Xt(n, e, r, o), iw(n, t, r);
  }
}
function gP(e, t, n) {
  var r = ar(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rw(e)) ow(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, qt(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Sp(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Fv(e, t, o, r), n !== null && (o = nt(), Xt(n, e, r, o), iw(n, t, r));
  }
}
function rw(e) {
  var t = e.alternate;
  return e === _e || t !== null && t === _e;
}
function ow(e, t) {
  Ri = Ta = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function iw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ap(e, n);
  }
}
var ja = { readContext: Dt, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useInsertionEffect: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useSyncExternalStore: Ge, useId: Ge, unstable_isNewReconciler: !1 }, yP = { readContext: Dt, useCallback: function(e, t) {
  return rn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Dt, useEffect: lg, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ol(
    4194308,
    4,
    qv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ol(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ol(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = rn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = rn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = mP.bind(null, _e, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = rn();
  return e = { current: e }, t.memoizedState = e;
}, useState: sg, useDebugValue: Pp, useDeferredValue: function(e) {
  return rn().memoizedState = e;
}, useTransition: function() {
  var e = sg(!1), t = e[0];
  return e = hP.bind(null, e[1]), rn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = _e, o = rn();
  if (Ee) {
    if (n === void 0) throw Error(H(407));
    n = n();
  } else {
    if (n = t(), $e === null) throw Error(H(349));
    Br & 30 || Bv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, lg(Kv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ds(9, Uv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = rn(), t = $e.identifierPrefix;
  if (Ee) {
    var n = Tn, r = kn;
    n = (r & ~(1 << 32 - Gt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = pP++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, xP = {
  readContext: Dt,
  useCallback: Jv,
  useContext: Dt,
  useEffect: Ip,
  useImperativeHandle: Zv,
  useInsertionEffect: Xv,
  useLayoutEffect: Qv,
  useMemo: ew,
  useReducer: Su,
  useRef: Gv,
  useState: function() {
    return Su(us);
  },
  useDebugValue: Pp,
  useDeferredValue: function(e) {
    var t = Lt();
    return tw(t, Oe.memoizedState, e);
  },
  useTransition: function() {
    var e = Su(us)[0], t = Lt().memoizedState;
    return [e, t];
  },
  useMutableSource: Hv,
  useSyncExternalStore: Vv,
  useId: nw,
  unstable_isNewReconciler: !1
}, vP = { readContext: Dt, useCallback: Jv, useContext: Dt, useEffect: Ip, useImperativeHandle: Zv, useInsertionEffect: Xv, useLayoutEffect: Qv, useMemo: ew, useReducer: Nu, useRef: Gv, useState: function() {
  return Nu(us);
}, useDebugValue: Pp, useDeferredValue: function(e) {
  var t = Lt();
  return Oe === null ? t.memoizedState = e : tw(t, Oe.memoizedState, e);
}, useTransition: function() {
  var e = Nu(us)[0], t = Lt().memoizedState;
  return [e, t];
}, useMutableSource: Hv, useSyncExternalStore: Vv, useId: nw, unstable_isNewReconciler: !1 };
function $t(e, t) {
  if (e && e.defaultProps) {
    t = ke({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ud(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ke({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var yc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Gr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = nt(), o = ar(e), i = In(r, o);
  i.payload = t, n != null && (i.callback = n), t = sr(e, i, o), t !== null && (Xt(t, e, o, r), Dl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = nt(), o = ar(e), i = In(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = sr(e, i, o), t !== null && (Xt(t, e, o, r), Dl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = nt(), r = ar(e), o = In(n, r);
  o.tag = 2, t != null && (o.callback = t), t = sr(e, o, r), t !== null && (Xt(t, e, r, n), Dl(t, e, r));
} };
function ag(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !rs(n, r) || !rs(o, i) : !0;
}
function sw(e, t, n) {
  var r = !1, o = pr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Dt(i) : (o = dt(t) ? Hr : Je.current, r = t.contextTypes, i = (r = r != null) ? Bo(e, o) : pr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = yc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function cg(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yc.enqueueReplaceState(t, t.state, null);
}
function Kd(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Np(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Dt(i) : (i = dt(t) ? Hr : Je.current, o.context = Bo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ud(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && yc.enqueueReplaceState(o, o.state, null), _a(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yo(e, t) {
  try {
    var n = "", r = t;
    do
      n += Yj(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Eu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var wP = typeof WeakMap == "function" ? WeakMap : Map;
function lw(e, t, n) {
  n = In(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Pa || (Pa = !0, nf = r), Wd(e, t);
  }, n;
}
function aw(e, t, n) {
  n = In(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Wd(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Wd(e, t), typeof r != "function" && (lr === null ? lr = /* @__PURE__ */ new Set([this]) : lr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function ug(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wP();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = RP.bind(null, e, t, n), t.then(e, e));
}
function dg(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fg(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = In(-1, 1), t.tag = 2, sr(n, t, 1))), n.lanes |= 1), e);
}
var bP = Hn.ReactCurrentOwner, ct = !1;
function tt(e, t, n, r) {
  t.child = e === null ? Ov(t, null, n, r) : Ko(t, e.child, n, r);
}
function pg(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return To(t, o), r = Tp(e, t, n, r, i, o), n = jp(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ln(e, t, o)) : (Ee && n && gp(t), t.flags |= 1, tt(e, t, r, o), t.child);
}
function hg(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !zp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, cw(e, t, i, r, o)) : (e = Hl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : rs, n(s, r) && e.ref === t.ref) return Ln(e, t, o);
  }
  return t.flags |= 1, e = cr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function cw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (rs(i, r) && e.ref === t.ref) if (ct = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (ct = !0);
    else return t.lanes = e.lanes, Ln(e, t, o);
  }
  return Yd(e, t, n, r, o);
}
function uw(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(wo, pt), pt |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(wo, pt), pt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ye(wo, pt), pt |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ye(wo, pt), pt |= r;
  return tt(e, t, o, n), t.child;
}
function dw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Yd(e, t, n, r, o) {
  var i = dt(n) ? Hr : Je.current;
  return i = Bo(t, i), To(t, o), n = Tp(e, t, n, r, i, o), r = jp(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ln(e, t, o)) : (Ee && r && gp(t), t.flags |= 1, tt(e, t, n, o), t.child);
}
function mg(e, t, n, r, o) {
  if (dt(n)) {
    var i = !0;
    ba(t);
  } else i = !1;
  if (To(t, o), t.stateNode === null) Fl(e, t), sw(t, n, r), Kd(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Dt(c) : (c = dt(n) ? Hr : Je.current, c = Bo(t, c));
    var d = n.getDerivedStateFromProps, u = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    u || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && cg(t, s, r, c), Qn = !1;
    var p = t.memoizedState;
    s.state = p, _a(t, r, s, o), a = t.memoizedState, l !== r || p !== a || ut.current || Qn ? (typeof d == "function" && (Ud(t, n, d, r), a = t.memoizedState), (l = Qn || ag(t, n, l, r, p, a, c)) ? (u || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, zv(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : $t(t.type, l), s.props = c, u = t.pendingProps, p = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Dt(a) : (a = dt(n) ? Hr : Je.current, a = Bo(t, a));
    var h = n.getDerivedStateFromProps;
    (d = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== u || p !== a) && cg(t, s, r, a), Qn = !1, p = t.memoizedState, s.state = p, _a(t, r, s, o);
    var m = t.memoizedState;
    l !== u || p !== m || ut.current || Qn ? (typeof h == "function" && (Ud(t, n, h, r), m = t.memoizedState), (c = Qn || ag(t, n, c, r, p, m, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, m, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, m, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), s.props = r, s.state = m, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Gd(e, t, n, r, i, o);
}
function Gd(e, t, n, r, o, i) {
  dw(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && eg(t, n, !1), Ln(e, t, i);
  r = t.stateNode, bP.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ko(t, e.child, null, i), t.child = Ko(t, null, l, i)) : tt(e, t, l, i), t.memoizedState = r.state, o && eg(t, n, !0), t.child;
}
function fw(e) {
  var t = e.stateNode;
  t.pendingContext ? Jm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Jm(e, t.context, !1), Ep(e, t.containerInfo);
}
function gg(e, t, n, r, o) {
  return Uo(), xp(o), t.flags |= 256, tt(e, t, n, r), t.child;
}
var Xd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pw(e, t, n) {
  var r = t.pendingProps, o = Ce.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ye(Ce, o & 1), e === null)
    return Vd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = wc(s, r, 0, null), e = Ar(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Qd(n), t.memoizedState = Xd, e) : Mp(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return SP(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = cr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = cr(l, i) : (i = Ar(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Qd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Xd, r;
  }
  return i = e.child, e = i.sibling, r = cr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Mp(e, t) {
  return t = wc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function cl(e, t, n, r) {
  return r !== null && xp(r), Ko(t, e.child, null, n), e = Mp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function SP(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Eu(Error(H(422))), cl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = wc({ mode: "visible", children: r.children }, o, 0, null), i = Ar(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ko(t, e.child, null, s), t.child.memoizedState = Qd(s), t.memoizedState = Xd, i);
  if (!(t.mode & 1)) return cl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(H(419)), r = Eu(i, r, void 0), cl(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, ct || l) {
    if (r = $e, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Dn(e, o), Xt(r, e, o, -1));
    }
    return Fp(), r = Eu(Error(H(421))), cl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = DP.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, xt = ir(o.nextSibling), vt = t, Ee = !0, Bt = null, e !== null && (Tt[jt++] = kn, Tt[jt++] = Tn, Tt[jt++] = Vr, kn = e.id, Tn = e.overflow, Vr = t), t = Mp(t, r.children), t.flags |= 4096, t);
}
function yg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bd(e.return, t, n);
}
function Cu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function hw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (tt(e, t, r.children, n), r = Ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && yg(e, n, t);
      else if (e.tag === 19) yg(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ye(Ce, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ka(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Cu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ka(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Cu(t, !0, n, null, i);
      break;
    case "together":
      Cu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Fl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ln(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ur |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (e = t.child, n = cr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = cr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function NP(e, t, n) {
  switch (t.tag) {
    case 3:
      fw(t), Uo();
      break;
    case 5:
      $v(t);
      break;
    case 1:
      dt(t.type) && ba(t);
      break;
    case 4:
      Ep(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ye(Ea, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ye(Ce, Ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? pw(e, t, n) : (ye(Ce, Ce.current & 1), e = Ln(e, t, n), e !== null ? e.sibling : null);
      ye(Ce, Ce.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return hw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ye(Ce, Ce.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, uw(e, t, n);
  }
  return Ln(e, t, n);
}
var mw, qd, gw, yw;
mw = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
qd = function() {
};
gw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, jr(dn.current);
    var i = null;
    switch (n) {
      case "input":
        o = vd(e, o), r = vd(e, r), i = [];
        break;
      case "select":
        o = ke({}, o, { value: void 0 }), r = ke({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Sd(e, o), r = Sd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = va);
    }
    Ed(n, r);
    var s;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var l = o[c];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Qi.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = o != null ? o[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Qi.hasOwnProperty(c) ? (a != null && c === "onScroll" && we("scroll", e), i || l === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
yw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hi(e, t) {
  if (!Ee) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function EP(e, t, n) {
  var r = t.pendingProps;
  switch (yp(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Xe(t), null;
    case 1:
      return dt(t.type) && wa(), Xe(t), null;
    case 3:
      return r = t.stateNode, Wo(), be(ut), be(Je), _p(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ll(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Bt !== null && (sf(Bt), Bt = null))), qd(e, t), Xe(t), null;
    case 5:
      Cp(t);
      var o = jr(as.current);
      if (n = t.type, e !== null && t.stateNode != null) gw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return Xe(t), null;
        }
        if (e = jr(dn.current), ll(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[sn] = t, r[ss] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              we("cancel", r), we("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ei.length; o++) we(Ei[o], r);
              break;
            case "source":
              we("error", r);
              break;
            case "img":
            case "image":
            case "link":
              we(
                "error",
                r
              ), we("load", r);
              break;
            case "details":
              we("toggle", r);
              break;
            case "input":
              _m(r, i), we("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, we("invalid", r);
              break;
            case "textarea":
              Tm(r, i), we("invalid", r);
          }
          Ed(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && sl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && sl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Qi.hasOwnProperty(s) && l != null && s === "onScroll" && we("scroll", r);
          }
          switch (n) {
            case "input":
              Zs(r), km(r, i, !0);
              break;
            case "textarea":
              Zs(r), jm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = va);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[sn] = t, e[ss] = r, mw(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Cd(n, r), n) {
              case "dialog":
                we("cancel", e), we("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ei.length; o++) we(Ei[o], e);
                o = r;
                break;
              case "source":
                we("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                we(
                  "error",
                  e
                ), we("load", e), o = r;
                break;
              case "details":
                we("toggle", e), o = r;
                break;
              case "input":
                _m(e, r), o = vd(e, r), we("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ke({}, r, { value: void 0 }), we("invalid", e);
                break;
              case "textarea":
                Tm(e, r), o = Sd(e, r), we("invalid", e);
                break;
              default:
                o = r;
            }
            Ed(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Gx(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Wx(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && qi(e, a) : typeof a == "number" && qi(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Qi.hasOwnProperty(i) ? a != null && i === "onScroll" && we("scroll", e) : a != null && np(e, i, a, s));
            }
            switch (n) {
              case "input":
                Zs(e), km(e, r, !1);
                break;
              case "textarea":
                Zs(e), jm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Eo(e, !!r.multiple, i, !1) : r.defaultValue != null && Eo(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = va);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Xe(t), null;
    case 6:
      if (e && t.stateNode != null) yw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (n = jr(as.current), jr(dn.current), ll(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[sn] = t, (i = r.nodeValue !== n) && (e = vt, e !== null)) switch (e.tag) {
            case 3:
              sl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && sl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[sn] = t, t.stateNode = r;
      }
      return Xe(t), null;
    case 13:
      if (be(Ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ee && xt !== null && t.mode & 1 && !(t.flags & 128)) Dv(), Uo(), t.flags |= 98560, i = !1;
        else if (i = ll(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[sn] = t;
          } else Uo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Xe(t), i = !1;
        } else Bt !== null && (sf(Bt), Bt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ce.current & 1 ? Fe === 0 && (Fe = 3) : Fp())), t.updateQueue !== null && (t.flags |= 4), Xe(t), null);
    case 4:
      return Wo(), qd(e, t), e === null && os(t.stateNode.containerInfo), Xe(t), null;
    case 10:
      return bp(t.type._context), Xe(t), null;
    case 17:
      return dt(t.type) && wa(), Xe(t), null;
    case 19:
      if (be(Ce), i = t.memoizedState, i === null) return Xe(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) hi(i, !1);
      else {
        if (Fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ka(e), s !== null) {
            for (t.flags |= 128, hi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ye(Ce, Ce.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && je() > Go && (t.flags |= 128, r = !0, hi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ka(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ee) return Xe(t), null;
        } else 2 * je() - i.renderingStartTime > Go && n !== 1073741824 && (t.flags |= 128, r = !0, hi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = je(), t.sibling = null, n = Ce.current, ye(Ce, r ? n & 1 | 2 : n & 1), t) : (Xe(t), null);
    case 22:
    case 23:
      return Op(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? pt & 1073741824 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function CP(e, t) {
  switch (yp(t), t.tag) {
    case 1:
      return dt(t.type) && wa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Wo(), be(ut), be(Je), _p(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Cp(t), null;
    case 13:
      if (be(Ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(H(340));
        Uo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return be(Ce), null;
    case 4:
      return Wo(), null;
    case 10:
      return bp(t.type._context), null;
    case 22:
    case 23:
      return Op(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ul = !1, qe = !1, _P = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function vo(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Te(e, t, r);
  }
  else n.current = null;
}
function Zd(e, t, n) {
  try {
    n();
  } catch (r) {
    Te(e, t, r);
  }
}
var xg = !1;
function kP(e, t) {
  if (Dd = ga, e = Sv(), mp(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, l = -1, a = -1, c = 0, d = 0, u = e, p = null;
        t: for (; ; ) {
          for (var h; u !== n || o !== 0 && u.nodeType !== 3 || (l = s + o), u !== i || r !== 0 && u.nodeType !== 3 || (a = s + r), u.nodeType === 3 && (s += u.nodeValue.length), (h = u.firstChild) !== null; )
            p = u, u = h;
          for (; ; ) {
            if (u === e) break t;
            if (p === n && ++c === o && (l = s), p === i && ++d === r && (a = s), (h = u.nextSibling) !== null) break;
            u = p, p = u.parentNode;
          }
          u = h;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ld = { focusedElem: e, selectionRange: n }, ga = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
  else for (; G !== null; ) {
    t = G;
    try {
      var m = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (m !== null) {
            var x = m.memoizedProps, w = m.memoizedState, g = t.stateNode, v = g.getSnapshotBeforeUpdate(t.elementType === t.type ? x : $t(t.type, x), w);
            g.__reactInternalSnapshotBeforeUpdate = v;
          }
          break;
        case 3:
          var y = t.stateNode.containerInfo;
          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(H(163));
      }
    } catch (S) {
      Te(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return m = xg, xg = !1, m;
}
function Di(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Zd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function xc(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Jd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function xw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, xw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[sn], delete t[ss], delete t[zd], delete t[cP], delete t[uP])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function vw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vg(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || vw(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ef(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = va));
  else if (r !== 4 && (e = e.child, e !== null)) for (ef(e, t, n), e = e.sibling; e !== null; ) ef(e, t, n), e = e.sibling;
}
function tf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (tf(e, t, n), e = e.sibling; e !== null; ) tf(e, t, n), e = e.sibling;
}
var Ue = null, Vt = !1;
function Kn(e, t, n) {
  for (n = n.child; n !== null; ) ww(e, t, n), n = n.sibling;
}
function ww(e, t, n) {
  if (un && typeof un.onCommitFiberUnmount == "function") try {
    un.onCommitFiberUnmount(uc, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      qe || vo(n, t);
    case 6:
      var r = Ue, o = Vt;
      Ue = null, Kn(e, t, n), Ue = r, Vt = o, Ue !== null && (Vt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ue.removeChild(n.stateNode));
      break;
    case 18:
      Ue !== null && (Vt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? xu(e.parentNode, n) : e.nodeType === 1 && xu(e, n), ts(e)) : xu(Ue, n.stateNode));
      break;
    case 4:
      r = Ue, o = Vt, Ue = n.stateNode.containerInfo, Vt = !0, Kn(e, t, n), Ue = r, Vt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Zd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Kn(e, t, n);
      break;
    case 1:
      if (!qe && (vo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        Te(n, t, l);
      }
      Kn(e, t, n);
      break;
    case 21:
      Kn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (qe = (r = qe) || n.memoizedState !== null, Kn(e, t, n), qe = r) : Kn(e, t, n);
      break;
    default:
      Kn(e, t, n);
  }
}
function wg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new _P()), t.forEach(function(r) {
      var o = LP.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ft(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Ue = l.stateNode, Vt = !1;
            break e;
          case 3:
            Ue = l.stateNode.containerInfo, Vt = !0;
            break e;
          case 4:
            Ue = l.stateNode.containerInfo, Vt = !0;
            break e;
        }
        l = l.return;
      }
      if (Ue === null) throw Error(H(160));
      ww(i, s, o), Ue = null, Vt = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      Te(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) bw(t, e), t = t.sibling;
}
function bw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ft(t, e), nn(e), r & 4) {
        try {
          Di(3, e, e.return), xc(3, e);
        } catch (x) {
          Te(e, e.return, x);
        }
        try {
          Di(5, e, e.return);
        } catch (x) {
          Te(e, e.return, x);
        }
      }
      break;
    case 1:
      Ft(t, e), nn(e), r & 512 && n !== null && vo(n, n.return);
      break;
    case 5:
      if (Ft(t, e), nn(e), r & 512 && n !== null && vo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          qi(o, "");
        } catch (x) {
          Te(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && Bx(o, i), Cd(l, s);
          var c = Cd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], u = a[s + 1];
            d === "style" ? Gx(o, u) : d === "dangerouslySetInnerHTML" ? Wx(o, u) : d === "children" ? qi(o, u) : np(o, d, u, c);
          }
          switch (l) {
            case "input":
              wd(o, i);
              break;
            case "textarea":
              Ux(o, i);
              break;
            case "select":
              var p = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var h = i.value;
              h != null ? Eo(o, !!i.multiple, h, !1) : p !== !!i.multiple && (i.defaultValue != null ? Eo(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Eo(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[ss] = i;
        } catch (x) {
          Te(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Ft(t, e), nn(e), r & 4) {
        if (e.stateNode === null) throw Error(H(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (x) {
          Te(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Ft(t, e), nn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ts(t.containerInfo);
      } catch (x) {
        Te(e, e.return, x);
      }
      break;
    case 4:
      Ft(t, e), nn(e);
      break;
    case 13:
      Ft(t, e), nn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Dp = je())), r & 4 && wg(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (c = qe) || d, Ft(t, e), qe = c) : Ft(t, e), nn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1) for (G = e, d = e.child; d !== null; ) {
          for (u = G = d; G !== null; ) {
            switch (p = G, h = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Di(4, p, p.return);
                break;
              case 1:
                vo(p, p.return);
                var m = p.stateNode;
                if (typeof m.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                  } catch (x) {
                    Te(r, n, x);
                  }
                }
                break;
              case 5:
                vo(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Sg(u);
                  continue;
                }
            }
            h !== null ? (h.return = p, G = h) : Sg(u);
          }
          d = d.sibling;
        }
        e: for (d = null, u = e; ; ) {
          if (u.tag === 5) {
            if (d === null) {
              d = u;
              try {
                o = u.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = u.stateNode, a = u.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Yx("display", s));
              } catch (x) {
                Te(e, e.return, x);
              }
            }
          } else if (u.tag === 6) {
            if (d === null) try {
              u.stateNode.nodeValue = c ? "" : u.memoizedProps;
            } catch (x) {
              Te(e, e.return, x);
            }
          } else if ((u.tag !== 22 && u.tag !== 23 || u.memoizedState === null || u === e) && u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
          if (u === e) break e;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === e) break e;
            d === u && (d = null), u = u.return;
          }
          d === u && (d = null), u.sibling.return = u.return, u = u.sibling;
        }
      }
      break;
    case 19:
      Ft(t, e), nn(e), r & 4 && wg(e);
      break;
    case 21:
      break;
    default:
      Ft(
        t,
        e
      ), nn(e);
  }
}
function nn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (qi(o, ""), r.flags &= -33);
          var i = vg(e);
          tf(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = vg(e);
          ef(e, l, s);
          break;
        default:
          throw Error(H(161));
      }
    } catch (a) {
      Te(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function TP(e, t, n) {
  G = e, Sw(e);
}
function Sw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var o = G, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ul;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || qe;
        l = ul;
        var c = qe;
        if (ul = s, (qe = a) && !c) for (G = o; G !== null; ) s = G, a = s.child, s.tag === 22 && s.memoizedState !== null ? Ng(o) : a !== null ? (a.return = s, G = a) : Ng(o);
        for (; i !== null; ) G = i, Sw(i), i = i.sibling;
        G = o, ul = l, qe = c;
      }
      bg(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, G = i) : bg(e);
  }
}
function bg(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            qe || xc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !qe) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : $t(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && ig(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              ig(t, s, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var d = c.memoizedState;
                if (d !== null) {
                  var u = d.dehydrated;
                  u !== null && ts(u);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(H(163));
        }
        qe || t.flags & 512 && Jd(t);
      } catch (p) {
        Te(t, t.return, p);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, G = n;
      break;
    }
    G = t.return;
  }
}
function Sg(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, G = n;
      break;
    }
    G = t.return;
  }
}
function Ng(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xc(4, t);
          } catch (a) {
            Te(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Te(t, o, a);
            }
          }
          var i = t.return;
          try {
            Jd(t);
          } catch (a) {
            Te(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Jd(t);
          } catch (a) {
            Te(t, s, a);
          }
      }
    } catch (a) {
      Te(t, t.return, a);
    }
    if (t === e) {
      G = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, G = l;
      break;
    }
    G = t.return;
  }
}
var jP = Math.ceil, Ia = Hn.ReactCurrentDispatcher, Ap = Hn.ReactCurrentOwner, At = Hn.ReactCurrentBatchConfig, pe = 0, $e = null, Ae = null, Ke = 0, pt = 0, wo = vr(0), Fe = 0, fs = null, Ur = 0, vc = 0, Rp = 0, Li = null, lt = null, Dp = 0, Go = 1 / 0, Nn = null, Pa = !1, nf = null, lr = null, dl = !1, tr = null, Ma = 0, Oi = 0, rf = null, zl = -1, $l = 0;
function nt() {
  return pe & 6 ? je() : zl !== -1 ? zl : zl = je();
}
function ar(e) {
  return e.mode & 1 ? pe & 2 && Ke !== 0 ? Ke & -Ke : fP.transition !== null ? ($l === 0 && ($l = sv()), $l) : (e = me, e !== 0 || (e = window.event, e = e === void 0 ? 16 : pv(e.type)), e) : 1;
}
function Xt(e, t, n, r) {
  if (50 < Oi) throw Oi = 0, rf = null, Error(H(185));
  ks(e, n, r), (!(pe & 2) || e !== $e) && (e === $e && (!(pe & 2) && (vc |= n), Fe === 4 && Jn(e, Ke)), ft(e, r), n === 1 && pe === 0 && !(t.mode & 1) && (Go = je() + 500, mc && wr()));
}
function ft(e, t) {
  var n = e.callbackNode;
  fI(e, t);
  var r = ma(e, e === $e ? Ke : 0);
  if (r === 0) n !== null && Mm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Mm(n), t === 1) e.tag === 0 ? dP(Eg.bind(null, e)) : Mv(Eg.bind(null, e)), lP(function() {
      !(pe & 6) && wr();
    }), n = null;
    else {
      switch (lv(r)) {
        case 1:
          n = lp;
          break;
        case 4:
          n = ov;
          break;
        case 16:
          n = ha;
          break;
        case 536870912:
          n = iv;
          break;
        default:
          n = ha;
      }
      n = Iw(n, Nw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Nw(e, t) {
  if (zl = -1, $l = 0, pe & 6) throw Error(H(327));
  var n = e.callbackNode;
  if (jo() && e.callbackNode !== n) return null;
  var r = ma(e, e === $e ? Ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Aa(e, r);
  else {
    t = r;
    var o = pe;
    pe |= 2;
    var i = Cw();
    ($e !== e || Ke !== t) && (Nn = null, Go = je() + 500, Mr(e, t));
    do
      try {
        MP();
        break;
      } catch (l) {
        Ew(e, l);
      }
    while (!0);
    wp(), Ia.current = i, pe = o, Ae !== null ? t = 0 : ($e = null, Ke = 0, t = Fe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Id(e), o !== 0 && (r = o, t = of(e, o))), t === 1) throw n = fs, Mr(e, 0), Jn(e, r), ft(e, je()), n;
    if (t === 6) Jn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !IP(o) && (t = Aa(e, r), t === 2 && (i = Id(e), i !== 0 && (r = i, t = of(e, i))), t === 1)) throw n = fs, Mr(e, 0), Jn(e, r), ft(e, je()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          Nr(e, lt, Nn);
          break;
        case 3:
          if (Jn(e, r), (r & 130023424) === r && (t = Dp + 500 - je(), 10 < t)) {
            if (ma(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              nt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Fd(Nr.bind(null, e, lt, Nn), t);
            break;
          }
          Nr(e, lt, Nn);
          break;
        case 4:
          if (Jn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Gt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jP(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Fd(Nr.bind(null, e, lt, Nn), r);
            break;
          }
          Nr(e, lt, Nn);
          break;
        case 5:
          Nr(e, lt, Nn);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return ft(e, je()), e.callbackNode === n ? Nw.bind(null, e) : null;
}
function of(e, t) {
  var n = Li;
  return e.current.memoizedState.isDehydrated && (Mr(e, t).flags |= 256), e = Aa(e, t), e !== 2 && (t = lt, lt = n, t !== null && sf(t)), e;
}
function sf(e) {
  lt === null ? lt = e : lt.push.apply(lt, e);
}
function IP(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!qt(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Jn(e, t) {
  for (t &= ~Rp, t &= ~vc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Gt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Eg(e) {
  if (pe & 6) throw Error(H(327));
  jo();
  var t = ma(e, 0);
  if (!(t & 1)) return ft(e, je()), null;
  var n = Aa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Id(e);
    r !== 0 && (t = r, n = of(e, r));
  }
  if (n === 1) throw n = fs, Mr(e, 0), Jn(e, t), ft(e, je()), n;
  if (n === 6) throw Error(H(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nr(e, lt, Nn), ft(e, je()), null;
}
function Lp(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    pe = n, pe === 0 && (Go = je() + 500, mc && wr());
  }
}
function Kr(e) {
  tr !== null && tr.tag === 0 && !(pe & 6) && jo();
  var t = pe;
  pe |= 1;
  var n = At.transition, r = me;
  try {
    if (At.transition = null, me = 1, e) return e();
  } finally {
    me = r, At.transition = n, pe = t, !(pe & 6) && wr();
  }
}
function Op() {
  pt = wo.current, be(wo);
}
function Mr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, sP(n)), Ae !== null) for (n = Ae.return; n !== null; ) {
    var r = n;
    switch (yp(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && wa();
        break;
      case 3:
        Wo(), be(ut), be(Je), _p();
        break;
      case 5:
        Cp(r);
        break;
      case 4:
        Wo();
        break;
      case 13:
        be(Ce);
        break;
      case 19:
        be(Ce);
        break;
      case 10:
        bp(r.type._context);
        break;
      case 22:
      case 23:
        Op();
    }
    n = n.return;
  }
  if ($e = e, Ae = e = cr(e.current, null), Ke = pt = t, Fe = 0, fs = null, Rp = vc = Ur = 0, lt = Li = null, Tr !== null) {
    for (t = 0; t < Tr.length; t++) if (n = Tr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Tr = null;
  }
  return e;
}
function Ew(e, t) {
  do {
    var n = Ae;
    try {
      if (wp(), Ll.current = ja, Ta) {
        for (var r = _e.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ta = !1;
      }
      if (Br = 0, ze = Oe = _e = null, Ri = !1, cs = 0, Ap.current = null, n === null || n.return === null) {
        Fe = 1, fs = t, Ae = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Ke, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, d = l, u = d.tag;
          if (!(d.mode & 1) && (u === 0 || u === 11 || u === 15)) {
            var p = d.alternate;
            p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var h = dg(s);
          if (h !== null) {
            h.flags &= -257, fg(h, s, l, i, t), h.mode & 1 && ug(i, c, t), t = h, a = c;
            var m = t.updateQueue;
            if (m === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else m.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ug(i, c, t), Fp();
              break e;
            }
            a = Error(H(426));
          }
        } else if (Ee && l.mode & 1) {
          var w = dg(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), fg(w, s, l, i, t), xp(Yo(a, l));
            break e;
          }
        }
        i = a = Yo(a, l), Fe !== 4 && (Fe = 2), Li === null ? Li = [i] : Li.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = lw(i, a, t);
              og(i, g);
              break e;
            case 1:
              l = a;
              var v = i.type, y = i.stateNode;
              if (!(i.flags & 128) && (typeof v.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (lr === null || !lr.has(y)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = aw(i, l, t);
                og(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kw(n);
    } catch (E) {
      t = E, Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cw() {
  var e = Ia.current;
  return Ia.current = ja, e === null ? ja : e;
}
function Fp() {
  (Fe === 0 || Fe === 3 || Fe === 2) && (Fe = 4), $e === null || !(Ur & 268435455) && !(vc & 268435455) || Jn($e, Ke);
}
function Aa(e, t) {
  var n = pe;
  pe |= 2;
  var r = Cw();
  ($e !== e || Ke !== t) && (Nn = null, Mr(e, t));
  do
    try {
      PP();
      break;
    } catch (o) {
      Ew(e, o);
    }
  while (!0);
  if (wp(), pe = n, Ia.current = r, Ae !== null) throw Error(H(261));
  return $e = null, Ke = 0, Fe;
}
function PP() {
  for (; Ae !== null; ) _w(Ae);
}
function MP() {
  for (; Ae !== null && !rI(); ) _w(Ae);
}
function _w(e) {
  var t = jw(e.alternate, e, pt);
  e.memoizedProps = e.pendingProps, t === null ? kw(e) : Ae = t, Ap.current = null;
}
function kw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = CP(n, t), n !== null) {
        n.flags &= 32767, Ae = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Fe = 6, Ae = null;
        return;
      }
    } else if (n = EP(n, t, pt), n !== null) {
      Ae = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  Fe === 0 && (Fe = 5);
}
function Nr(e, t, n) {
  var r = me, o = At.transition;
  try {
    At.transition = null, me = 1, AP(e, t, n, r);
  } finally {
    At.transition = o, me = r;
  }
  return null;
}
function AP(e, t, n, r) {
  do
    jo();
  while (tr !== null);
  if (pe & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(H(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (pI(e, i), e === $e && (Ae = $e = null, Ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || dl || (dl = !0, Iw(ha, function() {
    return jo(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = At.transition, At.transition = null;
    var s = me;
    me = 1;
    var l = pe;
    pe |= 4, Ap.current = null, kP(e, n), bw(n, e), JI(Ld), ga = !!Dd, Ld = Dd = null, e.current = n, TP(n), oI(), pe = l, me = s, At.transition = i;
  } else e.current = n;
  if (dl && (dl = !1, tr = e, Ma = o), i = e.pendingLanes, i === 0 && (lr = null), lI(n.stateNode), ft(e, je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Pa) throw Pa = !1, e = nf, nf = null, e;
  return Ma & 1 && e.tag !== 0 && jo(), i = e.pendingLanes, i & 1 ? e === rf ? Oi++ : (Oi = 0, rf = e) : Oi = 0, wr(), null;
}
function jo() {
  if (tr !== null) {
    var e = lv(Ma), t = At.transition, n = me;
    try {
      if (At.transition = null, me = 16 > e ? 16 : e, tr === null) var r = !1;
      else {
        if (e = tr, tr = null, Ma = 0, pe & 6) throw Error(H(331));
        var o = pe;
        for (pe |= 4, G = e.current; G !== null; ) {
          var i = G, s = i.child;
          if (G.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (G = c; G !== null; ) {
                  var d = G;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Di(8, d, i);
                  }
                  var u = d.child;
                  if (u !== null) u.return = d, G = u;
                  else for (; G !== null; ) {
                    d = G;
                    var p = d.sibling, h = d.return;
                    if (xw(d), d === c) {
                      G = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = h, G = p;
                      break;
                    }
                    G = h;
                  }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var x = m.child;
                if (x !== null) {
                  m.child = null;
                  do {
                    var w = x.sibling;
                    x.sibling = null, x = w;
                  } while (x !== null);
                }
              }
              G = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, G = s;
          else e: for (; G !== null; ) {
            if (i = G, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Di(9, i, i.return);
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, G = g;
              break e;
            }
            G = i.return;
          }
        }
        var v = e.current;
        for (G = v; G !== null; ) {
          s = G;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) y.return = s, G = y;
          else e: for (s = v; G !== null; ) {
            if (l = G, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  xc(9, l);
              }
            } catch (E) {
              Te(l, l.return, E);
            }
            if (l === s) {
              G = null;
              break e;
            }
            var S = l.sibling;
            if (S !== null) {
              S.return = l.return, G = S;
              break e;
            }
            G = l.return;
          }
        }
        if (pe = o, wr(), un && typeof un.onPostCommitFiberRoot == "function") try {
          un.onPostCommitFiberRoot(uc, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      me = n, At.transition = t;
    }
  }
  return !1;
}
function Cg(e, t, n) {
  t = Yo(n, t), t = lw(e, t, 1), e = sr(e, t, 1), t = nt(), e !== null && (ks(e, 1, t), ft(e, t));
}
function Te(e, t, n) {
  if (e.tag === 3) Cg(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Cg(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (lr === null || !lr.has(r))) {
        e = Yo(n, e), e = aw(t, e, 1), t = sr(t, e, 1), e = nt(), t !== null && (ks(t, 1, e), ft(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function RP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = nt(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (Ke & n) === n && (Fe === 4 || Fe === 3 && (Ke & 130023424) === Ke && 500 > je() - Dp ? Mr(e, 0) : Rp |= n), ft(e, t);
}
function Tw(e, t) {
  t === 0 && (e.mode & 1 ? (t = tl, tl <<= 1, !(tl & 130023424) && (tl = 4194304)) : t = 1);
  var n = nt();
  e = Dn(e, t), e !== null && (ks(e, t, n), ft(e, n));
}
function DP(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Tw(e, n);
}
function LP(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(H(314));
  }
  r !== null && r.delete(t), Tw(e, n);
}
var jw;
jw = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ut.current) ct = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ct = !1, NP(e, t, n);
    ct = !!(e.flags & 131072);
  }
  else ct = !1, Ee && t.flags & 1048576 && Av(t, Na, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fl(e, t), e = t.pendingProps;
      var o = Bo(t, Je.current);
      To(t, n), o = Tp(null, t, r, e, o, n);
      var i = jp();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, dt(r) ? (i = !0, ba(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Np(t), o.updater = yc, t.stateNode = o, o._reactInternals = t, Kd(t, r, e, n), t = Gd(null, t, r, !0, i, n)) : (t.tag = 0, Ee && i && gp(t), tt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = FP(r), e = $t(r, e), o) {
          case 0:
            t = Yd(null, t, r, e, n);
            break e;
          case 1:
            t = mg(null, t, r, e, n);
            break e;
          case 11:
            t = pg(null, t, r, e, n);
            break e;
          case 14:
            t = hg(null, t, r, $t(r.type, e), n);
            break e;
        }
        throw Error(H(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : $t(r, o), Yd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : $t(r, o), mg(e, t, r, o, n);
    case 3:
      e: {
        if (fw(t), e === null) throw Error(H(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, zv(e, t), _a(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Yo(Error(H(423)), t), t = gg(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Yo(Error(H(424)), t), t = gg(e, t, r, n, o);
          break e;
        } else for (xt = ir(t.stateNode.containerInfo.firstChild), vt = t, Ee = !0, Bt = null, n = Ov(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Uo(), r === o) {
            t = Ln(e, t, n);
            break e;
          }
          tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return $v(t), e === null && Vd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Od(r, o) ? s = null : i !== null && Od(r, i) && (t.flags |= 32), dw(e, t), tt(e, t, s, n), t.child;
    case 6:
      return e === null && Vd(t), null;
    case 13:
      return pw(e, t, n);
    case 4:
      return Ep(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ko(t, null, r, n) : tt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : $t(r, o), pg(e, t, r, o, n);
    case 7:
      return tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ye(Ea, r._currentValue), r._currentValue = s, i !== null) if (qt(i.value, s)) {
          if (i.children === o.children && !ut.current) {
            t = Ln(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = In(-1, n & -n), a.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var d = c.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), c.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Bd(
                  i.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(H(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Bd(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        tt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, To(t, n), o = Dt(o), r = r(o), t.flags |= 1, tt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = $t(r, t.pendingProps), o = $t(r.type, o), hg(e, t, r, o, n);
    case 15:
      return cw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : $t(r, o), Fl(e, t), t.tag = 1, dt(r) ? (e = !0, ba(t)) : e = !1, To(t, n), sw(t, r, o), Kd(t, r, o, n), Gd(null, t, r, !0, e, n);
    case 19:
      return hw(e, t, n);
    case 22:
      return uw(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function Iw(e, t) {
  return rv(e, t);
}
function OP(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Mt(e, t, n, r) {
  return new OP(e, t, n, r);
}
function zp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function FP(e) {
  if (typeof e == "function") return zp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === op) return 11;
    if (e === ip) return 14;
  }
  return 2;
}
function cr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Hl(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") zp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case co:
      return Ar(n.children, o, i, t);
    case rp:
      s = 8, o |= 8;
      break;
    case md:
      return e = Mt(12, n, t, o | 2), e.elementType = md, e.lanes = i, e;
    case gd:
      return e = Mt(13, n, t, o), e.elementType = gd, e.lanes = i, e;
    case yd:
      return e = Mt(19, n, t, o), e.elementType = yd, e.lanes = i, e;
    case $x:
      return wc(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Fx:
          s = 10;
          break e;
        case zx:
          s = 9;
          break e;
        case op:
          s = 11;
          break e;
        case ip:
          s = 14;
          break e;
        case Xn:
          s = 16, r = null;
          break e;
      }
      throw Error(H(130, e == null ? e : typeof e, ""));
  }
  return t = Mt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ar(e, t, n, r) {
  return e = Mt(7, e, r, t), e.lanes = n, e;
}
function wc(e, t, n, r) {
  return e = Mt(22, e, r, t), e.elementType = $x, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function _u(e, t, n) {
  return e = Mt(6, e, null, t), e.lanes = n, e;
}
function ku(e, t, n) {
  return t = Mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function zP(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lu(0), this.expirationTimes = lu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function $p(e, t, n, r, o, i, s, l, a) {
  return e = new zP(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Mt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Np(i), e;
}
function $P(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ao, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Pw(e) {
  if (!e) return pr;
  e = e._reactInternals;
  e: {
    if (Gr(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(H(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n)) return Pv(e, n, t);
  }
  return t;
}
function Mw(e, t, n, r, o, i, s, l, a) {
  return e = $p(n, r, !0, e, o, i, s, l, a), e.context = Pw(null), n = e.current, r = nt(), o = ar(n), i = In(r, o), i.callback = t ?? null, sr(n, i, o), e.current.lanes = o, ks(e, o, r), ft(e, r), e;
}
function bc(e, t, n, r) {
  var o = t.current, i = nt(), s = ar(o);
  return n = Pw(n), t.context === null ? t.context = n : t.pendingContext = n, t = In(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = sr(o, t, s), e !== null && (Xt(e, o, s, i), Dl(e, o, s)), s;
}
function Ra(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _g(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hp(e, t) {
  _g(e, t), (e = e.alternate) && _g(e, t);
}
function HP() {
  return null;
}
var Aw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vp(e) {
  this._internalRoot = e;
}
Sc.prototype.render = Vp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  bc(e, t, null, null);
};
Sc.prototype.unmount = Vp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kr(function() {
      bc(null, e, null, null);
    }), t[Rn] = null;
  }
};
function Sc(e) {
  this._internalRoot = e;
}
Sc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = uv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zn.length && t !== 0 && t < Zn[n].priority; n++) ;
    Zn.splice(n, 0, e), n === 0 && fv(e);
  }
};
function Bp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Nc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function kg() {
}
function VP(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = Ra(s);
        i.call(c);
      };
    }
    var s = Mw(t, r, e, 0, null, !1, !1, "", kg);
    return e._reactRootContainer = s, e[Rn] = s.current, os(e.nodeType === 8 ? e.parentNode : e), Kr(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = Ra(a);
      l.call(c);
    };
  }
  var a = $p(e, 0, !1, null, null, !1, !1, "", kg);
  return e._reactRootContainer = a, e[Rn] = a.current, os(e.nodeType === 8 ? e.parentNode : e), Kr(function() {
    bc(t, a, n, r);
  }), a;
}
function Ec(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Ra(s);
        l.call(a);
      };
    }
    bc(t, s, e, o);
  } else s = VP(n, t, e, o, r);
  return Ra(s);
}
av = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ni(t.pendingLanes);
        n !== 0 && (ap(t, n | 1), ft(t, je()), !(pe & 6) && (Go = je() + 500, wr()));
      }
      break;
    case 13:
      Kr(function() {
        var r = Dn(e, 1);
        if (r !== null) {
          var o = nt();
          Xt(r, e, 1, o);
        }
      }), Hp(e, 1);
  }
};
cp = function(e) {
  if (e.tag === 13) {
    var t = Dn(e, 134217728);
    if (t !== null) {
      var n = nt();
      Xt(t, e, 134217728, n);
    }
    Hp(e, 134217728);
  }
};
cv = function(e) {
  if (e.tag === 13) {
    var t = ar(e), n = Dn(e, t);
    if (n !== null) {
      var r = nt();
      Xt(n, e, t, r);
    }
    Hp(e, t);
  }
};
uv = function() {
  return me;
};
dv = function(e, t) {
  var n = me;
  try {
    return me = e, t();
  } finally {
    me = n;
  }
};
kd = function(e, t, n) {
  switch (t) {
    case "input":
      if (wd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = hc(r);
            if (!o) throw Error(H(90));
            Vx(r), wd(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ux(e, n);
      break;
    case "select":
      t = n.value, t != null && Eo(e, !!n.multiple, t, !1);
  }
};
qx = Lp;
Zx = Kr;
var BP = { usingClientEntryPoint: !1, Events: [js, ho, hc, Xx, Qx, Lp] }, mi = { findFiberByHostInstance: kr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, UP = { bundleType: mi.bundleType, version: mi.version, rendererPackageName: mi.rendererPackageName, rendererConfig: mi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Hn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = tv(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: mi.findFiberByHostInstance || HP, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fl.isDisabled && fl.supportsFiber) try {
    uc = fl.inject(UP), un = fl;
  } catch {
  }
}
Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BP;
Et.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bp(t)) throw Error(H(200));
  return $P(e, t, null, n);
};
Et.createRoot = function(e, t) {
  if (!Bp(e)) throw Error(H(299));
  var n = !1, r = "", o = Aw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = $p(e, 1, !1, null, null, n, !1, r, o), e[Rn] = t.current, os(e.nodeType === 8 ? e.parentNode : e), new Vp(t);
};
Et.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(H(188)) : (e = Object.keys(e).join(","), Error(H(268, e)));
  return e = tv(t), e = e === null ? null : e.stateNode, e;
};
Et.flushSync = function(e) {
  return Kr(e);
};
Et.hydrate = function(e, t, n) {
  if (!Nc(t)) throw Error(H(200));
  return Ec(null, e, t, !0, n);
};
Et.hydrateRoot = function(e, t, n) {
  if (!Bp(e)) throw Error(H(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Aw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Mw(t, null, e, 1, n ?? null, o, !1, i, s), e[Rn] = t.current, os(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Sc(t);
};
Et.render = function(e, t, n) {
  if (!Nc(t)) throw Error(H(200));
  return Ec(null, e, t, !1, n);
};
Et.unmountComponentAtNode = function(e) {
  if (!Nc(e)) throw Error(H(40));
  return e._reactRootContainer ? (Kr(function() {
    Ec(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Rn] = null;
    });
  }), !0) : !1;
};
Et.unstable_batchedUpdates = Lp;
Et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Nc(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return Ec(e, t, n, !1, r);
};
Et.version = "18.3.1-next-f1338f8080-20240426";
function Rw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rw);
    } catch (e) {
      console.error(e);
    }
}
Rw(), Rx.exports = Et;
var Ps = Rx.exports;
const KP = /* @__PURE__ */ kf(Ps), Cc = b.createContext(null), WP = Cc.Provider, Dw = pn.error001();
function fe(e, t) {
  const n = b.useContext(Cc);
  if (n === null)
    throw new Error(Dw);
  return Ax(n, e, t);
}
function Ne() {
  const e = b.useContext(Cc);
  if (e === null)
    throw new Error(Dw);
  return b.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const Tg = { display: "none" }, YP = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Lw = "react-flow__node-desc", Ow = "react-flow__edge-desc", GP = "react-flow__aria-live", XP = (e) => e.ariaLiveMessage, QP = (e) => e.ariaLabelConfig;
function qP({ rfId: e }) {
  const t = fe(XP);
  return f.jsx("div", { id: `${GP}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: YP, children: t });
}
function ZP({ rfId: e, disableKeyboardA11y: t }) {
  const n = fe(QP);
  return f.jsxs(f.Fragment, { children: [f.jsx("div", { id: `${Lw}-${e}`, style: Tg, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), f.jsx("div", { id: `${Ow}-${e}`, style: Tg, children: n["edge.a11yDescription.default"] }), !t && f.jsx(qP, { rfId: e })] });
}
const _c = b.forwardRef(({ position: e = "top-left", children: t, className: n, style: r, ...o }, i) => {
  const s = `${e}`.split("-");
  return f.jsx("div", { className: De(["react-flow__panel", n, ...s]), style: r, ref: i, ...o, children: t });
});
_c.displayName = "Panel";
function JP({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : f.jsx(_c, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: f.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const eM = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, pl = (e) => e.id;
function tM(e, t) {
  return Se(e.selectedNodes.map(pl), t.selectedNodes.map(pl)) && Se(e.selectedEdges.map(pl), t.selectedEdges.map(pl));
}
function nM({ onSelectionChange: e }) {
  const t = Ne(), { selectedNodes: n, selectedEdges: r } = fe(eM, tM);
  return b.useEffect(() => {
    const o = { nodes: n, edges: r };
    e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
  }, [n, r, e]), null;
}
const rM = (e) => !!e.onSelectionChangeHandlers;
function oM({ onSelectionChange: e }) {
  const t = fe(rM);
  return e || t ? f.jsx(nM, { onSelectionChange: e }) : null;
}
const Fw = [0, 0], iM = { x: 0, y: 0, zoom: 1 }, sM = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
], jg = [...sM, "rfId"], lM = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), Ig = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Wi,
  nodeOrigin: Fw,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function aM(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: o, setTranslateExtent: i, setNodeExtent: s, reset: l, setDefaultNodesAndEdges: a } = fe(lM, Se), c = Ne();
  b.useEffect(() => (a(e.defaultNodes, e.defaultEdges), () => {
    d.current = Ig, l();
  }), []);
  const d = b.useRef(Ig);
  return b.useEffect(
    () => {
      for (const u of jg) {
        const p = e[u], h = d.current[u];
        p !== h && (typeof e[u] > "u" || (u === "nodes" ? t(p) : u === "edges" ? n(p) : u === "minZoom" ? r(p) : u === "maxZoom" ? o(p) : u === "translateExtent" ? i(p) : u === "nodeExtent" ? s(p) : u === "ariaLabelConfig" ? c.setState({ ariaLabelConfig: _T(p) }) : u === "fitView" ? c.setState({ fitViewQueued: p }) : u === "fitViewOptions" ? c.setState({ fitViewOptions: p }) : c.setState({ [u]: p })));
      }
      d.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    jg.map((u) => e[u])
  ), null;
}
function Pg() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function cM(e) {
  var r;
  const [t, n] = b.useState(e === "system" ? null : e);
  return b.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = Pg(), i = () => n(o != null && o.matches ? "dark" : "light");
    return i(), o == null || o.addEventListener("change", i), () => {
      o == null || o.removeEventListener("change", i);
    };
  }, [e]), t !== null ? t : (r = Pg()) != null && r.matches ? "dark" : "light";
}
const Mg = typeof document < "u" ? document : null;
function ps(e = null, t = { target: Mg, actInsideInputWithModifier: !0 }) {
  const [n, r] = b.useState(!1), o = b.useRef(!1), i = b.useRef(/* @__PURE__ */ new Set([])), [s, l] = b.useMemo(() => {
    if (e !== null) {
      const c = (Array.isArray(e) ? e : [e]).filter((u) => typeof u == "string").map((u) => u.replace("+", `
`).replace(`

`, `
+`).split(`
`)), d = c.reduce((u, p) => u.concat(...p), []);
      return [c, d];
    }
    return [[], []];
  }, [e]);
  return b.useEffect(() => {
    const a = (t == null ? void 0 : t.target) ?? Mg, c = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const d = (h) => {
        var w, g;
        if (o.current = h.ctrlKey || h.metaKey || h.shiftKey || h.altKey, (!o.current || o.current && !c) && px(h))
          return !1;
        const x = Rg(h.code, l);
        if (i.current.add(h[x]), Ag(s, i.current, !1)) {
          const v = ((g = (w = h.composedPath) == null ? void 0 : w.call(h)) == null ? void 0 : g[0]) || h.target, y = (v == null ? void 0 : v.nodeName) === "BUTTON" || (v == null ? void 0 : v.nodeName) === "A";
          t.preventDefault !== !1 && (o.current || !y) && h.preventDefault(), r(!0);
        }
      }, u = (h) => {
        const m = Rg(h.code, l);
        Ag(s, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(h[m]), h.key === "Meta" && i.current.clear(), o.current = !1;
      }, p = () => {
        i.current.clear(), r(!1);
      };
      return a == null || a.addEventListener("keydown", d), a == null || a.addEventListener("keyup", u), window.addEventListener("blur", p), window.addEventListener("contextmenu", p), () => {
        a == null || a.removeEventListener("keydown", d), a == null || a.removeEventListener("keyup", u), window.removeEventListener("blur", p), window.removeEventListener("contextmenu", p);
      };
    }
  }, [e, r]), n;
}
function Ag(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function Rg(e, t) {
  return t.includes(e) ? "code" : "key";
}
const uM = () => {
  const e = Ne();
  return b.useMemo(() => ({
    zoomIn: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomOut: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomTo: (t, n) => {
      const { panZoom: r } = e.getState();
      return r ? r.scaleTo(t, { duration: n == null ? void 0 : n.duration }) : Promise.resolve(!1);
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [r, o, i], panZoom: s } = e.getState();
      return s ? (await s.setViewport({
        x: t.x ?? r,
        y: t.y ?? o,
        zoom: t.zoom ?? i
      }, n), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => {
      const [t, n, r] = e.getState().transform;
      return { x: t, y: n, zoom: r };
    },
    setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
    fitBounds: async (t, n) => {
      const { width: r, height: o, minZoom: i, maxZoom: s, panZoom: l } = e.getState(), a = Wf(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
      return l ? (await l.setViewport(a, {
        duration: n == null ? void 0 : n.duration,
        ease: n == null ? void 0 : n.ease,
        interpolate: n == null ? void 0 : n.interpolate
      }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: r, snapGrid: o, snapToGrid: i, domNode: s } = e.getState();
      if (!s)
        return t;
      const { x: l, y: a } = s.getBoundingClientRect(), c = {
        x: t.x - l,
        y: t.y - a
      }, d = n.snapGrid ?? o, u = n.snapToGrid ?? i;
      return _s(c, r, u, d);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: r } = e.getState();
      if (!r)
        return t;
      const { x: o, y: i } = r.getBoundingClientRect(), s = ca(t, n);
      return {
        x: s.x + o,
        y: s.y + i
      };
    }
  }), []);
};
function zw(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = [];
  for (const i of e)
    if (i.type === "add") {
      o.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace")
      r.set(i.id, [i]);
    else {
      const s = r.get(i.id);
      s ? s.push(i) : r.set(i.id, [i]);
    }
  for (const i of t) {
    const s = r.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove")
      continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const l = { ...i };
    for (const a of s)
      dM(a, l);
    n.push(l);
  }
  return o.length && o.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function dM(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured = {
        ...e.dimensions
      }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function $w(e, t) {
  return zw(e, t);
}
function Hw(e, t) {
  return zw(e, t);
}
function Er(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function bo(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const s = t.has(o);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), r.push(Er(i.id, s)));
  }
  return r;
}
function Dg({ items: e = [], lookup: t }) {
  var o;
  const n = [], r = new Map(e.map((i) => [i.id, i]));
  for (const [i, s] of e.entries()) {
    const l = t.get(s.id), a = ((o = l == null ? void 0 : l.internals) == null ? void 0 : o.userNode) ?? l;
    a !== void 0 && a !== s && n.push({ id: s.id, item: s, type: "replace" }), a === void 0 && n.push({ item: s, type: "add", index: i });
  }
  for (const [i] of t)
    r.get(i) === void 0 && n.push({ id: i, type: "remove" });
  return n;
}
function Lg(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const Og = (e) => gT(e), fM = (e) => ix(e);
function Vw(e) {
  return b.forwardRef(e);
}
const pM = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function Fg(e) {
  const [t, n] = b.useState(BigInt(0)), [r] = b.useState(() => hM(() => n((o) => o + BigInt(1))));
  return pM(() => {
    const o = r.get();
    o.length && (e(o), r.reset());
  }, [t]), r;
}
function hM(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const Bw = b.createContext(null);
function mM({ children: e }) {
  const t = Ne(), n = b.useCallback((l) => {
    const { nodes: a = [], setNodes: c, hasDefaultNodes: d, onNodesChange: u, nodeLookup: p, fitViewQueued: h, onNodesChangeMiddlewareMap: m } = t.getState();
    let x = a;
    for (const g of l)
      x = typeof g == "function" ? g(x) : g;
    let w = Dg({
      items: x,
      lookup: p
    });
    for (const g of m.values())
      w = g(w);
    d && c(x), w.length > 0 ? u == null || u(w) : h && window.requestAnimationFrame(() => {
      const { fitViewQueued: g, nodes: v, setNodes: y } = t.getState();
      g && y(v);
    });
  }, []), r = Fg(n), o = b.useCallback((l) => {
    const { edges: a = [], setEdges: c, hasDefaultEdges: d, onEdgesChange: u, edgeLookup: p } = t.getState();
    let h = a;
    for (const m of l)
      h = typeof m == "function" ? m(h) : m;
    d ? c(h) : u && u(Dg({
      items: h,
      lookup: p
    }));
  }, []), i = Fg(o), s = b.useMemo(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return f.jsx(Bw.Provider, { value: s, children: e });
}
function gM() {
  const e = b.useContext(Bw);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const yM = (e) => !!e.panZoom;
function Ms() {
  const e = uM(), t = Ne(), n = gM(), r = fe(yM), o = b.useMemo(() => {
    const i = (u) => t.getState().nodeLookup.get(u), s = (u) => {
      n.nodeQueue.push(u);
    }, l = (u) => {
      n.edgeQueue.push(u);
    }, a = (u) => {
      var g, v;
      const { nodeLookup: p, nodeOrigin: h } = t.getState(), m = Og(u) ? u : p.get(u.id), x = m.parentId ? dx(m.position, m.measured, m.parentId, p, h) : m.position, w = {
        ...m,
        position: x,
        width: ((g = m.measured) == null ? void 0 : g.width) ?? m.width,
        height: ((v = m.measured) == null ? void 0 : v.height) ?? m.height
      };
      return Fo(w);
    }, c = (u, p, h = { replace: !1 }) => {
      s((m) => m.map((x) => {
        if (x.id === u) {
          const w = typeof p == "function" ? p(x) : p;
          return h.replace && Og(w) ? w : { ...x, ...w };
        }
        return x;
      }));
    }, d = (u, p, h = { replace: !1 }) => {
      l((m) => m.map((x) => {
        if (x.id === u) {
          const w = typeof p == "function" ? p(x) : p;
          return h.replace && fM(w) ? w : { ...x, ...w };
        }
        return x;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((u) => ({ ...u })),
      getNode: (u) => {
        var p;
        return (p = i(u)) == null ? void 0 : p.internals.userNode;
      },
      getInternalNode: i,
      getEdges: () => {
        const { edges: u = [] } = t.getState();
        return u.map((p) => ({ ...p }));
      },
      getEdge: (u) => t.getState().edgeLookup.get(u),
      setNodes: s,
      setEdges: l,
      addNodes: (u) => {
        const p = Array.isArray(u) ? u : [u];
        n.nodeQueue.push((h) => [...h, ...p]);
      },
      addEdges: (u) => {
        const p = Array.isArray(u) ? u : [u];
        n.edgeQueue.push((h) => [...h, ...p]);
      },
      toObject: () => {
        const { nodes: u = [], edges: p = [], transform: h } = t.getState(), [m, x, w] = h;
        return {
          nodes: u.map((g) => ({ ...g })),
          edges: p.map((g) => ({ ...g })),
          viewport: {
            x: m,
            y: x,
            zoom: w
          }
        };
      },
      deleteElements: async ({ nodes: u = [], edges: p = [] }) => {
        const { nodes: h, edges: m, onNodesDelete: x, onEdgesDelete: w, triggerNodeChanges: g, triggerEdgeChanges: v, onDelete: y, onBeforeDelete: S } = t.getState(), { nodes: E, edges: C } = await bT({
          nodesToRemove: u,
          edgesToRemove: p,
          nodes: h,
          edges: m,
          onBeforeDelete: S
        }), N = C.length > 0, P = E.length > 0;
        if (N) {
          const A = C.map(Lg);
          w == null || w(C), v(A);
        }
        if (P) {
          const A = E.map(Lg);
          x == null || x(E), g(A);
        }
        return (P || N) && (y == null || y({ nodes: E, edges: C })), { deletedNodes: E, deletedEdges: C };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (u, p = !0, h) => {
        const m = am(u), x = m ? u : a(u), w = h !== void 0;
        return x ? (h || t.getState().nodes).filter((g) => {
          const v = t.getState().nodeLookup.get(g.id);
          if (v && !m && (g.id === u.id || !v.internals.positionAbsolute))
            return !1;
          const y = Fo(w ? g : v), S = Gi(y, x);
          return p && S > 0 || S >= y.width * y.height || S >= x.width * x.height;
        }) : [];
      },
      isNodeIntersecting: (u, p, h = !0) => {
        const x = am(u) ? u : a(u);
        if (!x)
          return !1;
        const w = Gi(x, p);
        return h && w > 0 || w >= p.width * p.height || w >= x.width * x.height;
      },
      updateNode: c,
      updateNodeData: (u, p, h = { replace: !1 }) => {
        c(u, (m) => {
          const x = typeof p == "function" ? p(m) : p;
          return h.replace ? { ...m, data: x } : { ...m, data: { ...m.data, ...x } };
        }, h);
      },
      updateEdge: d,
      updateEdgeData: (u, p, h = { replace: !1 }) => {
        d(u, (m) => {
          const x = typeof p == "function" ? p(m) : p;
          return h.replace ? { ...m, data: x } : { ...m, data: { ...m.data, ...x } };
        }, h);
      },
      getNodesBounds: (u) => {
        const { nodeLookup: p, nodeOrigin: h } = t.getState();
        return yT(u, { nodeLookup: p, nodeOrigin: h });
      },
      getHandleConnections: ({ type: u, id: p, nodeId: h }) => {
        var m;
        return Array.from(((m = t.getState().connectionLookup.get(`${h}-${u}${p ? `-${p}` : ""}`)) == null ? void 0 : m.values()) ?? []);
      },
      getNodeConnections: ({ type: u, handleId: p, nodeId: h }) => {
        var m;
        return Array.from(((m = t.getState().connectionLookup.get(`${h}${u ? p ? `-${u}-${p}` : `-${u}` : ""}`)) == null ? void 0 : m.values()) ?? []);
      },
      fitView: async (u) => {
        const p = t.getState().fitViewResolver ?? CT();
        return t.setState({ fitViewQueued: !0, fitViewOptions: u, fitViewResolver: p }), n.nodeQueue.push((h) => [...h]), p.promise;
      }
    };
  }, []);
  return b.useMemo(() => ({
    ...o,
    ...e,
    viewportInitialized: r
  }), [r]);
}
const zg = (e) => e.selected, xM = typeof window < "u" ? window : void 0;
function vM({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = Ne(), { deleteElements: r } = Ms(), o = ps(e, { actInsideInputWithModifier: !1 }), i = ps(t, { target: xM });
  b.useEffect(() => {
    if (o) {
      const { edges: s, nodes: l } = n.getState();
      r({ nodes: l.filter(zg), edges: s.filter(zg) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), b.useEffect(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function wM(e) {
  const t = Ne();
  b.useEffect(() => {
    const n = () => {
      var o, i, s, l;
      if (!e.current || !(((i = (o = e.current).checkVisibility) == null ? void 0 : i.call(o)) ?? !0))
        return !1;
      const r = Yf(e.current);
      (r.height === 0 || r.width === 0) && ((l = (s = t.getState()).onError) == null || l.call(s, "004", pn.error004())), t.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const r = new ResizeObserver(() => n());
      return r.observe(e.current), () => {
        window.removeEventListener("resize", n), r && e.current && r.unobserve(e.current);
      };
    }
  }, []);
}
const kc = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, bM = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function SM({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: o = 0.5, panOnScrollMode: i = Pr.Free, zoomOnDoubleClick: s = !0, panOnDrag: l = !0, defaultViewport: a, translateExtent: c, minZoom: d, maxZoom: u, zoomActivationKeyCode: p, preventScrolling: h = !0, children: m, noWheelClassName: x, noPanClassName: w, onViewportChange: g, isControlledViewport: v, paneClickDistance: y, selectionOnDrag: S }) {
  const E = Ne(), C = b.useRef(null), { userSelectionActive: N, lib: P, connectionInProgress: A } = fe(bM, Se), L = ps(p), _ = b.useRef();
  wM(C);
  const M = b.useCallback((j) => {
    g == null || g({ x: j[0], y: j[1], zoom: j[2] }), v || E.setState({ transform: j });
  }, [g, v]);
  return b.useEffect(() => {
    if (C.current) {
      _.current = aj({
        domNode: C.current,
        minZoom: d,
        maxZoom: u,
        translateExtent: c,
        viewport: a,
        onDraggingChange: (R) => E.setState({ paneDragging: R }),
        onPanZoomStart: (R, O) => {
          const { onViewportChangeStart: I, onMoveStart: T } = E.getState();
          T == null || T(R, O), I == null || I(O);
        },
        onPanZoom: (R, O) => {
          const { onViewportChange: I, onMove: T } = E.getState();
          T == null || T(R, O), I == null || I(O);
        },
        onPanZoomEnd: (R, O) => {
          const { onViewportChangeEnd: I, onMoveEnd: T } = E.getState();
          T == null || T(R, O), I == null || I(O);
        }
      });
      const { x: j, y: k, zoom: D } = _.current.getViewport();
      return E.setState({
        panZoom: _.current,
        transform: [j, k, D],
        domNode: C.current.closest(".react-flow")
      }), () => {
        var R;
        (R = _.current) == null || R.destroy();
      };
    }
  }, []), b.useEffect(() => {
    var j;
    (j = _.current) == null || j.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: r,
      panOnScrollSpeed: o,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: l,
      zoomActivationKeyPressed: L,
      preventScrolling: h,
      noPanClassName: w,
      userSelectionActive: N,
      noWheelClassName: x,
      lib: P,
      onTransformChange: M,
      connectionInProgress: A,
      selectionOnDrag: S,
      paneClickDistance: y
    });
  }, [
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    l,
    L,
    h,
    w,
    N,
    x,
    P,
    M,
    A,
    S,
    y
  ]), f.jsx("div", { className: "react-flow__renderer", ref: C, style: kc, children: m });
}
const NM = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function EM() {
  const { userSelectionActive: e, userSelectionRect: t } = fe(NM, Se);
  return e && t ? f.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Tu = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, CM = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function _M({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = Yi.Full, panOnDrag: r, paneClickDistance: o, selectionOnDrag: i, onSelectionStart: s, onSelectionEnd: l, onPaneClick: a, onPaneContextMenu: c, onPaneScroll: d, onPaneMouseEnter: u, onPaneMouseMove: p, onPaneMouseLeave: h, children: m }) {
  const x = Ne(), { userSelectionActive: w, elementsSelectable: g, dragging: v, connectionInProgress: y } = fe(CM, Se), S = g && (e || w), E = b.useRef(null), C = b.useRef(), N = b.useRef(/* @__PURE__ */ new Set()), P = b.useRef(/* @__PURE__ */ new Set()), A = b.useRef(!1), L = (I) => {
    if (A.current || y) {
      A.current = !1;
      return;
    }
    a == null || a(I), x.getState().resetSelectedElements(), x.setState({ nodesSelectionActive: !1 });
  }, _ = (I) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      I.preventDefault();
      return;
    }
    c == null || c(I);
  }, M = d ? (I) => d(I) : void 0, j = (I) => {
    A.current && (I.stopPropagation(), A.current = !1);
  }, k = (I) => {
    var Q, K;
    const { domNode: T } = x.getState();
    if (C.current = T == null ? void 0 : T.getBoundingClientRect(), !C.current)
      return;
    const F = I.target === E.current;
    if (!F && !!I.target.closest(".nokey") || !e || !(i && F || t) || I.button !== 0 || !I.isPrimary)
      return;
    (K = (Q = I.target) == null ? void 0 : Q.setPointerCapture) == null || K.call(Q, I.pointerId), A.current = !1;
    const { x: U, y: V } = Yt(I.nativeEvent, C.current);
    x.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: U,
        startY: V,
        x: U,
        y: V
      }
    }), F || (I.stopPropagation(), I.preventDefault());
  }, D = (I) => {
    const { userSelectionRect: T, transform: F, nodeLookup: z, edgeLookup: $, connectionLookup: U, triggerNodeChanges: V, triggerEdgeChanges: Q, defaultEdgeOptions: K, resetSelectedElements: W } = x.getState();
    if (!C.current || !T)
      return;
    const { x: B, y: Y } = Yt(I.nativeEvent, C.current), { startX: ie, startY: ne } = T;
    if (!A.current) {
      const ce = t ? 0 : o;
      if (Math.hypot(B - ie, Y - ne) <= ce)
        return;
      W(), s == null || s(I);
    }
    A.current = !0;
    const ee = {
      startX: ie,
      startY: ne,
      x: B < ie ? B : ie,
      y: Y < ne ? Y : ne,
      width: Math.abs(B - ie),
      height: Math.abs(Y - ne)
    }, J = N.current, de = P.current;
    N.current = new Set(Kf(z, ee, F, n === Yi.Partial, !0).map((ce) => ce.id)), P.current = /* @__PURE__ */ new Set();
    const he = (K == null ? void 0 : K.selectable) ?? !0;
    for (const ce of N.current) {
      const Me = U.get(ce);
      if (Me)
        for (const { edgeId: _t } of Me.values()) {
          const He = $.get(_t);
          He && (He.selectable ?? he) && P.current.add(_t);
        }
    }
    if (!cm(J, N.current)) {
      const ce = bo(z, N.current, !0);
      V(ce);
    }
    if (!cm(de, P.current)) {
      const ce = bo($, P.current);
      Q(ce);
    }
    x.setState({
      userSelectionRect: ee,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, R = (I) => {
    var T, F;
    I.button === 0 && ((F = (T = I.target) == null ? void 0 : T.releasePointerCapture) == null || F.call(T, I.pointerId), !w && I.target === E.current && x.getState().userSelectionRect && (L == null || L(I)), x.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), A.current && (l == null || l(I), x.setState({
      nodesSelectionActive: N.current.size > 0
    })));
  }, O = r === !0 || Array.isArray(r) && r.includes(0);
  return f.jsxs("div", { className: De(["react-flow__pane", { draggable: O, dragging: v, selection: e }]), onClick: S ? void 0 : Tu(L, E), onContextMenu: Tu(_, E), onWheel: Tu(M, E), onPointerEnter: S ? void 0 : u, onPointerMove: S ? D : p, onPointerUp: S ? R : void 0, onPointerDownCapture: S ? k : void 0, onClickCapture: S ? j : void 0, onPointerLeave: h, ref: E, style: kc, children: [m, f.jsx(EM, {})] });
}
function lf({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: o, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: l, onError: a } = t.getState(), c = l.get(e);
  if (!c) {
    a == null || a("012", pn.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), c.selected ? (n || c.selected && s) && (i({ nodes: [c], edges: [] }), requestAnimationFrame(() => {
    var d;
    return (d = r == null ? void 0 : r.current) == null ? void 0 : d.blur();
  })) : o([e]);
}
function Uw({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, nodeClickDistance: s }) {
  const l = Ne(), [a, c] = b.useState(!1), d = b.useRef();
  return b.useEffect(() => {
    d.current = GT({
      getStoreItems: () => l.getState(),
      onNodeMouseDown: (u) => {
        lf({
          id: u,
          store: l,
          nodeRef: e
        });
      },
      onDragStart: () => {
        c(!0);
      },
      onDragStop: () => {
        c(!1);
      }
    });
  }, []), b.useEffect(() => {
    var u, p;
    if (t)
      (u = d.current) == null || u.destroy();
    else if (e.current)
      return (p = d.current) == null || p.update({
        noDragClassName: n,
        handleSelector: r,
        domNode: e.current,
        isSelectable: i,
        nodeId: o,
        nodeClickDistance: s
      }), () => {
        var h;
        (h = d.current) == null || h.destroy();
      };
  }, [n, r, t, i, e, o]), a;
}
const kM = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function Kw() {
  const e = Ne();
  return b.useCallback((n) => {
    const { nodeExtent: r, snapToGrid: o, snapGrid: i, nodesDraggable: s, onError: l, updateNodePositions: a, nodeLookup: c, nodeOrigin: d } = e.getState(), u = /* @__PURE__ */ new Map(), p = kM(s), h = o ? i[0] : 5, m = o ? i[1] : 5, x = n.direction.x * h * n.factor, w = n.direction.y * m * n.factor;
    for (const [, g] of c) {
      if (!p(g))
        continue;
      let v = {
        x: g.internals.positionAbsolute.x + x,
        y: g.internals.positionAbsolute.y + w
      };
      o && (v = Cs(v, i));
      const { position: y, positionAbsolute: S } = sx({
        nodeId: g.id,
        nextPosition: v,
        nodeLookup: c,
        nodeExtent: r,
        nodeOrigin: d,
        onError: l
      });
      g.position = y, g.internals.positionAbsolute = S, u.set(g.id, g);
    }
    a(u);
  }, []);
}
const Up = b.createContext(null), TM = Up.Provider;
Up.Consumer;
const Ww = () => b.useContext(Up), jM = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), IM = (e, t, n) => (r) => {
  const { connectionClickStartHandle: o, connectionMode: i, connection: s } = r, { fromHandle: l, toHandle: a, isValid: c } = s, d = (a == null ? void 0 : a.nodeId) === e && (a == null ? void 0 : a.id) === t && (a == null ? void 0 : a.type) === n;
  return {
    connectingFrom: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.id) === t && (l == null ? void 0 : l.type) === n,
    connectingTo: d,
    clickConnecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.id) === t && (o == null ? void 0 : o.type) === n,
    isPossibleEndHandle: i === Lo.Strict ? (l == null ? void 0 : l.type) !== n : e !== (l == null ? void 0 : l.nodeId) || t !== (l == null ? void 0 : l.id),
    connectionInProcess: !!l,
    clickConnectionInProcess: !!o,
    valid: d && c
  };
};
function PM({ type: e = "source", position: t = X.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: s, onConnect: l, children: a, className: c, onMouseDown: d, onTouchStart: u, ...p }, h) {
  var D, R;
  const m = s || null, x = e === "target", w = Ne(), g = Ww(), { connectOnClick: v, noPanClassName: y, rfId: S } = fe(jM, Se), { connectingFrom: E, connectingTo: C, clickConnecting: N, isPossibleEndHandle: P, connectionInProcess: A, clickConnectionInProcess: L, valid: _ } = fe(IM(g, m, e), Se);
  g || (R = (D = w.getState()).onError) == null || R.call(D, "010", pn.error010());
  const M = (O) => {
    const { defaultEdgeOptions: I, onConnect: T, hasDefaultEdges: F } = w.getState(), z = {
      ...I,
      ...O
    };
    if (F) {
      const { edges: $, setEdges: U } = w.getState();
      U(MT(z, $));
    }
    T == null || T(z), l == null || l(z);
  }, j = (O) => {
    if (!g)
      return;
    const I = hx(O.nativeEvent);
    if (o && (I && O.button === 0 || !I)) {
      const T = w.getState();
      pd.onPointerDown(O.nativeEvent, {
        handleDomNode: O.currentTarget,
        autoPanOnConnect: T.autoPanOnConnect,
        connectionMode: T.connectionMode,
        connectionRadius: T.connectionRadius,
        domNode: T.domNode,
        nodeLookup: T.nodeLookup,
        lib: T.lib,
        isTarget: x,
        handleId: m,
        nodeId: g,
        flowId: T.rfId,
        panBy: T.panBy,
        cancelConnection: T.cancelConnection,
        onConnectStart: T.onConnectStart,
        onConnectEnd: T.onConnectEnd,
        updateConnection: T.updateConnection,
        onConnect: M,
        isValidConnection: n || T.isValidConnection,
        getTransform: () => w.getState().transform,
        getFromHandle: () => w.getState().connection.fromHandle,
        autoPanSpeed: T.autoPanSpeed,
        dragThreshold: T.connectionDragThreshold
      });
    }
    I ? d == null || d(O) : u == null || u(O);
  }, k = (O) => {
    const { onClickConnectStart: I, onClickConnectEnd: T, connectionClickStartHandle: F, connectionMode: z, isValidConnection: $, lib: U, rfId: V, nodeLookup: Q, connection: K } = w.getState();
    if (!g || !F && !o)
      return;
    if (!F) {
      I == null || I(O.nativeEvent, { nodeId: g, handleId: m, handleType: e }), w.setState({ connectionClickStartHandle: { nodeId: g, type: e, id: m } });
      return;
    }
    const W = fx(O.target), B = n || $, { connection: Y, isValid: ie } = pd.isValid(O.nativeEvent, {
      handle: {
        nodeId: g,
        id: m,
        type: e
      },
      connectionMode: z,
      fromNodeId: F.nodeId,
      fromHandleId: F.id || null,
      fromType: F.type,
      isValidConnection: B,
      flowId: V,
      doc: W,
      lib: U,
      nodeLookup: Q
    });
    ie && Y && M(Y);
    const ne = structuredClone(K);
    delete ne.inProgress, ne.toPosition = ne.toHandle ? ne.toHandle.position : null, T == null || T(O, ne), w.setState({ connectionClickStartHandle: null });
  };
  return f.jsx("div", { "data-handleid": m, "data-nodeid": g, "data-handlepos": t, "data-id": `${S}-${g}-${m}-${e}`, className: De([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    y,
    c,
    {
      source: !x,
      target: x,
      connectable: r,
      connectablestart: o,
      connectableend: i,
      clickconnecting: N,
      connectingfrom: E,
      connectingto: C,
      valid: _,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!A || P) && (A || L ? i : o)
    }
  ]), onMouseDown: j, onTouchStart: j, onClick: v ? k : void 0, ref: h, ...p, children: a });
}
const Rr = b.memo(Vw(PM));
function MM({ data: e, isConnectable: t, sourcePosition: n = X.Bottom }) {
  return f.jsxs(f.Fragment, { children: [e == null ? void 0 : e.label, f.jsx(Rr, { type: "source", position: n, isConnectable: t })] });
}
function AM({ data: e, isConnectable: t, targetPosition: n = X.Top, sourcePosition: r = X.Bottom }) {
  return f.jsxs(f.Fragment, { children: [f.jsx(Rr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, f.jsx(Rr, { type: "source", position: r, isConnectable: t })] });
}
function RM() {
  return null;
}
function DM({ data: e, isConnectable: t, targetPosition: n = X.Top }) {
  return f.jsxs(f.Fragment, { children: [f.jsx(Rr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const Da = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, $g = {
  input: MM,
  default: AM,
  output: DM,
  group: RM
};
function LM(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((o = e.style) == null ? void 0 : o.height)
  };
}
const OM = (e) => {
  const { width: t, height: n, x: r, y: o } = Es(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: Wt(t) ? t : null,
    height: Wt(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`
  };
};
function FM({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = Ne(), { width: o, height: i, transformString: s, userSelectionActive: l } = fe(OM, Se), a = Kw(), c = b.useRef(null);
  if (b.useEffect(() => {
    var p;
    n || (p = c.current) == null || p.focus({
      preventScroll: !0
    });
  }, [n]), Uw({
    nodeRef: c
  }), l || !o || !i)
    return null;
  const d = e ? (p) => {
    const h = r.getState().nodes.filter((m) => m.selected);
    e(p, h);
  } : void 0, u = (p) => {
    Object.prototype.hasOwnProperty.call(Da, p.key) && (p.preventDefault(), a({
      direction: Da[p.key],
      factor: p.shiftKey ? 4 : 1
    }));
  };
  return f.jsx("div", { className: De(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: f.jsx("div", { ref: c, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : u, style: {
    width: o,
    height: i
  } }) });
}
const Hg = typeof window < "u" ? window : void 0, zM = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function Yw({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: l, deleteKeyCode: a, selectionKeyCode: c, selectionOnDrag: d, selectionMode: u, onSelectionStart: p, onSelectionEnd: h, multiSelectionKeyCode: m, panActivationKeyCode: x, zoomActivationKeyCode: w, elementsSelectable: g, zoomOnScroll: v, zoomOnPinch: y, panOnScroll: S, panOnScrollSpeed: E, panOnScrollMode: C, zoomOnDoubleClick: N, panOnDrag: P, defaultViewport: A, translateExtent: L, minZoom: _, maxZoom: M, preventScrolling: j, onSelectionContextMenu: k, noWheelClassName: D, noPanClassName: R, disableKeyboardA11y: O, onViewportChange: I, isControlledViewport: T }) {
  const { nodesSelectionActive: F, userSelectionActive: z } = fe(zM, Se), $ = ps(c, { target: Hg }), U = ps(x, { target: Hg }), V = U || P, Q = U || S, K = d && V !== !0, W = $ || z || K;
  return vM({ deleteKeyCode: a, multiSelectionKeyCode: m }), f.jsx(SM, { onPaneContextMenu: i, elementsSelectable: g, zoomOnScroll: v, zoomOnPinch: y, panOnScroll: Q, panOnScrollSpeed: E, panOnScrollMode: C, zoomOnDoubleClick: N, panOnDrag: !$ && V, defaultViewport: A, translateExtent: L, minZoom: _, maxZoom: M, zoomActivationKeyCode: w, preventScrolling: j, noWheelClassName: D, noPanClassName: R, onViewportChange: I, isControlledViewport: T, paneClickDistance: l, selectionOnDrag: K, children: f.jsxs(_M, { onSelectionStart: p, onSelectionEnd: h, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: V, isSelecting: !!W, selectionMode: u, selectionKeyPressed: $, paneClickDistance: l, selectionOnDrag: K, children: [e, F && f.jsx(FM, { onSelectionContextMenu: k, noPanClassName: R, disableKeyboardA11y: O })] }) });
}
Yw.displayName = "FlowRenderer";
const $M = b.memo(Yw), HM = (e) => (t) => e ? Kf(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function VM(e) {
  return fe(b.useCallback(HM(e), [e]), Se);
}
const BM = (e) => e.updateNodeInternals;
function UM() {
  const e = fe(BM), [t] = b.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const r = /* @__PURE__ */ new Map();
    n.forEach((o) => {
      const i = o.target.getAttribute("data-id");
      r.set(i, {
        id: i,
        nodeElement: o.target,
        force: !0
      });
    }), e(r);
  }));
  return b.useEffect(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function KM({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = Ne(), i = b.useRef(null), s = b.useRef(null), l = b.useRef(e.sourcePosition), a = b.useRef(e.targetPosition), c = b.useRef(t), d = n && !!e.internals.handleBounds;
  return b.useEffect(() => {
    i.current && !e.hidden && (!d || s.current !== i.current) && (s.current && (r == null || r.unobserve(s.current)), r == null || r.observe(i.current), s.current = i.current);
  }, [d, e.hidden]), b.useEffect(() => () => {
    s.current && (r == null || r.unobserve(s.current), s.current = null);
  }, []), b.useEffect(() => {
    if (i.current) {
      const u = c.current !== t, p = l.current !== e.sourcePosition, h = a.current !== e.targetPosition;
      (u || p || h) && (c.current = t, l.current = e.sourcePosition, a.current = e.targetPosition, o.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function WM({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: o, onContextMenu: i, onDoubleClick: s, nodesDraggable: l, elementsSelectable: a, nodesConnectable: c, nodesFocusable: d, resizeObserver: u, noDragClassName: p, noPanClassName: h, disableKeyboardA11y: m, rfId: x, nodeTypes: w, nodeClickDistance: g, onError: v }) {
  const { node: y, internals: S, isParent: E } = fe((B) => {
    const Y = B.nodeLookup.get(e), ie = B.parentLookup.has(e);
    return {
      node: Y,
      internals: Y.internals,
      isParent: ie
    };
  }, Se);
  let C = y.type || "default", N = (w == null ? void 0 : w[C]) || $g[C];
  N === void 0 && (v == null || v("003", pn.error003(C)), C = "default", N = (w == null ? void 0 : w.default) || $g.default);
  const P = !!(y.draggable || l && typeof y.draggable > "u"), A = !!(y.selectable || a && typeof y.selectable > "u"), L = !!(y.connectable || c && typeof y.connectable > "u"), _ = !!(y.focusable || d && typeof y.focusable > "u"), M = Ne(), j = ux(y), k = KM({ node: y, nodeType: C, hasDimensions: j, resizeObserver: u }), D = Uw({
    nodeRef: k,
    disabled: y.hidden || !P,
    noDragClassName: p,
    handleSelector: y.dragHandle,
    nodeId: e,
    isSelectable: A,
    nodeClickDistance: g
  }), R = Kw();
  if (y.hidden)
    return null;
  const O = $n(y), I = LM(y), T = A || P || t || n || r || o, F = n ? (B) => n(B, { ...S.userNode }) : void 0, z = r ? (B) => r(B, { ...S.userNode }) : void 0, $ = o ? (B) => o(B, { ...S.userNode }) : void 0, U = i ? (B) => i(B, { ...S.userNode }) : void 0, V = s ? (B) => s(B, { ...S.userNode }) : void 0, Q = (B) => {
    const { selectNodesOnDrag: Y, nodeDragThreshold: ie } = M.getState();
    A && (!Y || !P || ie > 0) && lf({
      id: e,
      store: M,
      nodeRef: k
    }), t && t(B, { ...S.userNode });
  }, K = (B) => {
    if (!(px(B.nativeEvent) || m)) {
      if (tx.includes(B.key) && A) {
        const Y = B.key === "Escape";
        lf({
          id: e,
          store: M,
          unselect: Y,
          nodeRef: k
        });
      } else if (P && y.selected && Object.prototype.hasOwnProperty.call(Da, B.key)) {
        B.preventDefault();
        const { ariaLabelConfig: Y } = M.getState();
        M.setState({
          ariaLiveMessage: Y["node.a11yDescription.ariaLiveMessage"]({
            direction: B.key.replace("Arrow", "").toLowerCase(),
            x: ~~S.positionAbsolute.x,
            y: ~~S.positionAbsolute.y
          })
        }), R({
          direction: Da[B.key],
          factor: B.shiftKey ? 4 : 1
        });
      }
    }
  }, W = () => {
    var de;
    if (m || !((de = k.current) != null && de.matches(":focus-visible")))
      return;
    const { transform: B, width: Y, height: ie, autoPanOnNodeFocus: ne, setCenter: ee } = M.getState();
    if (!ne)
      return;
    Kf(/* @__PURE__ */ new Map([[e, y]]), { x: 0, y: 0, width: Y, height: ie }, B, !0).length > 0 || ee(y.position.x + O.width / 2, y.position.y + O.height / 2, {
      zoom: B[2]
    });
  };
  return f.jsx("div", { className: De([
    "react-flow__node",
    `react-flow__node-${C}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [h]: P
    },
    y.className,
    {
      selected: y.selected,
      selectable: A,
      parent: E,
      draggable: P,
      dragging: D
    }
  ]), ref: k, style: {
    zIndex: S.z,
    transform: `translate(${S.positionAbsolute.x}px,${S.positionAbsolute.y}px)`,
    pointerEvents: T ? "all" : "none",
    visibility: j ? "visible" : "hidden",
    ...y.style,
    ...I
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: F, onMouseMove: z, onMouseLeave: $, onContextMenu: U, onClick: Q, onDoubleClick: V, onKeyDown: _ ? K : void 0, tabIndex: _ ? 0 : void 0, onFocus: _ ? W : void 0, role: y.ariaRole ?? (_ ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": m ? void 0 : `${Lw}-${x}`, "aria-label": y.ariaLabel, ...y.domAttributes, children: f.jsx(TM, { value: e, children: f.jsx(N, { id: e, data: y.data, type: C, positionAbsoluteX: S.positionAbsolute.x, positionAbsoluteY: S.positionAbsolute.y, selected: y.selected ?? !1, selectable: A, draggable: P, deletable: y.deletable ?? !0, isConnectable: L, sourcePosition: y.sourcePosition, targetPosition: y.targetPosition, dragging: D, dragHandle: y.dragHandle, zIndex: S.z, parentId: y.parentId, ...O }) }) });
}
var YM = b.memo(WM);
const GM = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function Gw(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = fe(GM, Se), s = VM(e.onlyRenderVisibleElements), l = UM();
  return f.jsx("div", { className: "react-flow__nodes", style: kc, children: s.map((a) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    f.jsx(YM, { id: a, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: l, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, nodeClickDistance: e.nodeClickDistance, onError: i }, a)
  )) });
}
Gw.displayName = "NodeRenderer";
const XM = b.memo(Gw);
function QM(e) {
  return fe(b.useCallback((n) => {
    if (!e)
      return n.edges.map((o) => o.id);
    const r = [];
    if (n.width && n.height)
      for (const o of n.edges) {
        const i = n.nodeLookup.get(o.source), s = n.nodeLookup.get(o.target);
        i && s && jT({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && r.push(o.id);
      }
    return r;
  }, [e]), Se);
}
const qM = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return f.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, ZM = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return f.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, Vg = {
  [la.Arrow]: qM,
  [la.ArrowClosed]: ZM
};
function JM(e) {
  const t = Ne();
  return b.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(Vg, e) ? Vg[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", pn.error009(e)), null);
  }, [e]);
}
const eA = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: l = "auto-start-reverse" }) => {
  const a = JM(t);
  return a ? f.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: l, refX: "0", refY: "0", children: f.jsx(a, { color: n, strokeWidth: s }) }) : null;
}, Xw = ({ defaultColor: e, rfId: t }) => {
  const n = fe((i) => i.edges), r = fe((i) => i.defaultEdgeOptions), o = b.useMemo(() => OT(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return o.length ? f.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: f.jsx("defs", { children: o.map((i) => f.jsx(eA, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
Xw.displayName = "MarkerDefinitions";
var tA = b.memo(Xw);
function Qw({ x: e, y: t, label: n, labelStyle: r, labelShowBg: o = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: l = 2, children: a, className: c, ...d }) {
  const [u, p] = b.useState({ x: 1, y: 0, width: 0, height: 0 }), h = De(["react-flow__edge-textwrapper", c]), m = b.useRef(null);
  return b.useEffect(() => {
    if (m.current) {
      const x = m.current.getBBox();
      p({
        x: x.x,
        y: x.y,
        width: x.width,
        height: x.height
      });
    }
  }, [n]), n ? f.jsxs("g", { transform: `translate(${e - u.width / 2} ${t - u.height / 2})`, className: h, visibility: u.width ? "visible" : "hidden", ...d, children: [o && f.jsx("rect", { width: u.width + 2 * s[0], x: -s[0], y: -s[1], height: u.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: l, ry: l }), f.jsx("text", { className: "react-flow__edge-text", y: u.height / 2, dy: "0.3em", ref: m, style: r, children: n }), a] }) : null;
}
Qw.displayName = "EdgeText";
const nA = b.memo(Qw);
function Tc({ path: e, labelX: t, labelY: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: a, interactionWidth: c = 20, ...d }) {
  return f.jsxs(f.Fragment, { children: [f.jsx("path", { ...d, d: e, fill: "none", className: De(["react-flow__edge-path", d.className]) }), c ? f.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: c, className: "react-flow__edge-interaction" }) : null, r && Wt(t) && Wt(n) ? f.jsx(nA, { x: t, y: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: a }) : null] });
}
function Bg({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === X.Left || e === X.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function qw({ sourceX: e, sourceY: t, sourcePosition: n = X.Bottom, targetX: r, targetY: o, targetPosition: i = X.Top }) {
  const [s, l] = Bg({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [a, c] = Bg({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [d, u, p, h] = mx({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: l,
    targetControlX: a,
    targetControlY: c
  });
  return [
    `M${e},${t} C${s},${l} ${a},${c} ${r},${o}`,
    d,
    u,
    p,
    h
  ];
}
function Zw(e) {
  return b.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s, targetPosition: l, label: a, labelStyle: c, labelShowBg: d, labelBgStyle: u, labelBgPadding: p, labelBgBorderRadius: h, style: m, markerEnd: x, markerStart: w, interactionWidth: g }) => {
    const [v, y, S] = qw({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: l
    }), E = e.isInternal ? void 0 : t;
    return f.jsx(Tc, { id: E, path: v, labelX: y, labelY: S, label: a, labelStyle: c, labelShowBg: d, labelBgStyle: u, labelBgPadding: p, labelBgBorderRadius: h, style: m, markerEnd: x, markerStart: w, interactionWidth: g });
  });
}
const rA = Zw({ isInternal: !1 }), Jw = Zw({ isInternal: !0 });
rA.displayName = "SimpleBezierEdge";
Jw.displayName = "SimpleBezierEdgeInternal";
function eb(e) {
  return b.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: a, labelBgStyle: c, labelBgPadding: d, labelBgBorderRadius: u, style: p, sourcePosition: h = X.Bottom, targetPosition: m = X.Top, markerEnd: x, markerStart: w, pathOptions: g, interactionWidth: v }) => {
    const [y, S, E] = ua({
      sourceX: n,
      sourceY: r,
      sourcePosition: h,
      targetX: o,
      targetY: i,
      targetPosition: m,
      borderRadius: g == null ? void 0 : g.borderRadius,
      offset: g == null ? void 0 : g.offset,
      stepPosition: g == null ? void 0 : g.stepPosition
    }), C = e.isInternal ? void 0 : t;
    return f.jsx(Tc, { id: C, path: y, labelX: S, labelY: E, label: s, labelStyle: l, labelShowBg: a, labelBgStyle: c, labelBgPadding: d, labelBgBorderRadius: u, style: p, markerEnd: x, markerStart: w, interactionWidth: v });
  });
}
const tb = eb({ isInternal: !1 }), nb = eb({ isInternal: !0 });
tb.displayName = "SmoothStepEdge";
nb.displayName = "SmoothStepEdgeInternal";
function rb(e) {
  return b.memo(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return f.jsx(tb, { ...n, id: r, pathOptions: b.useMemo(() => {
      var i;
      return { borderRadius: 0, offset: (i = n.pathOptions) == null ? void 0 : i.offset };
    }, [(o = n.pathOptions) == null ? void 0 : o.offset]) });
  });
}
const oA = rb({ isInternal: !1 }), ob = rb({ isInternal: !0 });
oA.displayName = "StepEdge";
ob.displayName = "StepEdgeInternal";
function ib(e) {
  return b.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: a, labelBgStyle: c, labelBgPadding: d, labelBgBorderRadius: u, style: p, markerEnd: h, markerStart: m, interactionWidth: x }) => {
    const [w, g, v] = yx({ sourceX: n, sourceY: r, targetX: o, targetY: i }), y = e.isInternal ? void 0 : t;
    return f.jsx(Tc, { id: y, path: w, labelX: g, labelY: v, label: s, labelStyle: l, labelShowBg: a, labelBgStyle: c, labelBgPadding: d, labelBgBorderRadius: u, style: p, markerEnd: h, markerStart: m, interactionWidth: x });
  });
}
const iA = ib({ isInternal: !1 }), sb = ib({ isInternal: !0 });
iA.displayName = "StraightEdge";
sb.displayName = "StraightEdgeInternal";
function lb(e) {
  return b.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s = X.Bottom, targetPosition: l = X.Top, label: a, labelStyle: c, labelShowBg: d, labelBgStyle: u, labelBgPadding: p, labelBgBorderRadius: h, style: m, markerEnd: x, markerStart: w, pathOptions: g, interactionWidth: v }) => {
    const [y, S, E] = Gf({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: l,
      curvature: g == null ? void 0 : g.curvature
    }), C = e.isInternal ? void 0 : t;
    return f.jsx(Tc, { id: C, path: y, labelX: S, labelY: E, label: a, labelStyle: c, labelShowBg: d, labelBgStyle: u, labelBgPadding: p, labelBgBorderRadius: h, style: m, markerEnd: x, markerStart: w, interactionWidth: v });
  });
}
const sA = lb({ isInternal: !1 }), ab = lb({ isInternal: !0 });
sA.displayName = "BezierEdge";
ab.displayName = "BezierEdgeInternal";
const Ug = {
  default: ab,
  straight: sb,
  step: ob,
  smoothstep: nb,
  simplebezier: Jw
}, Kg = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, lA = (e, t, n) => n === X.Left ? e - t : n === X.Right ? e + t : e, aA = (e, t, n) => n === X.Top ? e - t : n === X.Bottom ? e + t : e, Wg = "react-flow__edgeupdater";
function Yg({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: s, type: l }) {
  return f.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: s, className: De([Wg, `${Wg}-${l}`]), cx: lA(t, r, e), cy: aA(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function cA({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: o, targetX: i, targetY: s, sourcePosition: l, targetPosition: a, onReconnect: c, onReconnectStart: d, onReconnectEnd: u, setReconnecting: p, setUpdateHover: h }) {
  const m = Ne(), x = (S, E) => {
    if (S.button !== 0)
      return;
    const { autoPanOnConnect: C, domNode: N, isValidConnection: P, connectionMode: A, connectionRadius: L, lib: _, onConnectStart: M, onConnectEnd: j, cancelConnection: k, nodeLookup: D, rfId: R, panBy: O, updateConnection: I } = m.getState(), T = E.type === "target", F = (U, V) => {
      p(!1), u == null || u(U, n, E.type, V);
    }, z = (U) => c == null ? void 0 : c(n, U), $ = (U, V) => {
      p(!0), d == null || d(S, n, E.type), M == null || M(U, V);
    };
    pd.onPointerDown(S.nativeEvent, {
      autoPanOnConnect: C,
      connectionMode: A,
      connectionRadius: L,
      domNode: N,
      handleId: E.id,
      nodeId: E.nodeId,
      nodeLookup: D,
      isTarget: T,
      edgeUpdaterType: E.type,
      lib: _,
      flowId: R,
      cancelConnection: k,
      panBy: O,
      isValidConnection: P,
      onConnect: z,
      onConnectStart: $,
      onConnectEnd: j,
      onReconnectEnd: F,
      updateConnection: I,
      getTransform: () => m.getState().transform,
      getFromHandle: () => m.getState().connection.fromHandle,
      dragThreshold: m.getState().connectionDragThreshold,
      handleDomNode: S.currentTarget
    });
  }, w = (S) => x(S, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), g = (S) => x(S, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), v = () => h(!0), y = () => h(!1);
  return f.jsxs(f.Fragment, { children: [(e === !0 || e === "source") && f.jsx(Yg, { position: l, centerX: r, centerY: o, radius: t, onMouseDown: w, onMouseEnter: v, onMouseOut: y, type: "source" }), (e === !0 || e === "target") && f.jsx(Yg, { position: a, centerX: i, centerY: s, radius: t, onMouseDown: g, onMouseEnter: v, onMouseOut: y, type: "target" })] });
}
function uA({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: o, onDoubleClick: i, onContextMenu: s, onMouseEnter: l, onMouseMove: a, onMouseLeave: c, reconnectRadius: d, onReconnect: u, onReconnectStart: p, onReconnectEnd: h, rfId: m, edgeTypes: x, noPanClassName: w, onError: g, disableKeyboardA11y: v }) {
  let y = fe((ee) => ee.edgeLookup.get(e));
  const S = fe((ee) => ee.defaultEdgeOptions);
  y = S ? { ...S, ...y } : y;
  let E = y.type || "default", C = (x == null ? void 0 : x[E]) || Ug[E];
  C === void 0 && (g == null || g("011", pn.error011(E)), E = "default", C = (x == null ? void 0 : x.default) || Ug.default);
  const N = !!(y.focusable || t && typeof y.focusable > "u"), P = typeof u < "u" && (y.reconnectable || n && typeof y.reconnectable > "u"), A = !!(y.selectable || r && typeof y.selectable > "u"), L = b.useRef(null), [_, M] = b.useState(!1), [j, k] = b.useState(!1), D = Ne(), { zIndex: R, sourceX: O, sourceY: I, targetX: T, targetY: F, sourcePosition: z, targetPosition: $ } = fe(b.useCallback((ee) => {
    const J = ee.nodeLookup.get(y.source), de = ee.nodeLookup.get(y.target);
    if (!J || !de)
      return {
        zIndex: y.zIndex,
        ...Kg
      };
    const he = LT({
      id: e,
      sourceNode: J,
      targetNode: de,
      sourceHandle: y.sourceHandle || null,
      targetHandle: y.targetHandle || null,
      connectionMode: ee.connectionMode,
      onError: g
    });
    return {
      zIndex: TT({
        selected: y.selected,
        zIndex: y.zIndex,
        sourceNode: J,
        targetNode: de,
        elevateOnSelect: ee.elevateEdgesOnSelect,
        zIndexMode: ee.zIndexMode
      }),
      ...he || Kg
    };
  }, [y.source, y.target, y.sourceHandle, y.targetHandle, y.selected, y.zIndex]), Se), U = b.useMemo(() => y.markerStart ? `url('#${dd(y.markerStart, m)}')` : void 0, [y.markerStart, m]), V = b.useMemo(() => y.markerEnd ? `url('#${dd(y.markerEnd, m)}')` : void 0, [y.markerEnd, m]);
  if (y.hidden || O === null || I === null || T === null || F === null)
    return null;
  const Q = (ee) => {
    var ce;
    const { addSelectedEdges: J, unselectNodesAndEdges: de, multiSelectionActive: he } = D.getState();
    A && (D.setState({ nodesSelectionActive: !1 }), y.selected && he ? (de({ nodes: [], edges: [y] }), (ce = L.current) == null || ce.blur()) : J([e])), o && o(ee, y);
  }, K = i ? (ee) => {
    i(ee, { ...y });
  } : void 0, W = s ? (ee) => {
    s(ee, { ...y });
  } : void 0, B = l ? (ee) => {
    l(ee, { ...y });
  } : void 0, Y = a ? (ee) => {
    a(ee, { ...y });
  } : void 0, ie = c ? (ee) => {
    c(ee, { ...y });
  } : void 0, ne = (ee) => {
    var J;
    if (!v && tx.includes(ee.key) && A) {
      const { unselectNodesAndEdges: de, addSelectedEdges: he } = D.getState();
      ee.key === "Escape" ? ((J = L.current) == null || J.blur(), de({ edges: [y] })) : he([e]);
    }
  };
  return f.jsx("svg", { style: { zIndex: R }, children: f.jsxs("g", { className: De([
    "react-flow__edge",
    `react-flow__edge-${E}`,
    y.className,
    w,
    {
      selected: y.selected,
      animated: y.animated,
      inactive: !A && !o,
      updating: _,
      selectable: A
    }
  ]), onClick: Q, onDoubleClick: K, onContextMenu: W, onMouseEnter: B, onMouseMove: Y, onMouseLeave: ie, onKeyDown: N ? ne : void 0, tabIndex: N ? 0 : void 0, role: y.ariaRole ?? (N ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": y.ariaLabel === null ? void 0 : y.ariaLabel || `Edge from ${y.source} to ${y.target}`, "aria-describedby": N ? `${Ow}-${m}` : void 0, ref: L, ...y.domAttributes, children: [!j && f.jsx(C, { id: e, source: y.source, target: y.target, type: y.type, selected: y.selected, animated: y.animated, selectable: A, deletable: y.deletable ?? !0, label: y.label, labelStyle: y.labelStyle, labelShowBg: y.labelShowBg, labelBgStyle: y.labelBgStyle, labelBgPadding: y.labelBgPadding, labelBgBorderRadius: y.labelBgBorderRadius, sourceX: O, sourceY: I, targetX: T, targetY: F, sourcePosition: z, targetPosition: $, data: y.data, style: y.style, sourceHandleId: y.sourceHandle, targetHandleId: y.targetHandle, markerStart: U, markerEnd: V, pathOptions: "pathOptions" in y ? y.pathOptions : void 0, interactionWidth: y.interactionWidth }), P && f.jsx(cA, { edge: y, isReconnectable: P, reconnectRadius: d, onReconnect: u, onReconnectStart: p, onReconnectEnd: h, sourceX: O, sourceY: I, targetX: T, targetY: F, sourcePosition: z, targetPosition: $, setUpdateHover: M, setReconnecting: k })] }) });
}
var dA = b.memo(uA);
const fA = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function cb({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: o, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: l, onEdgeMouseMove: a, onEdgeMouseLeave: c, onEdgeClick: d, reconnectRadius: u, onEdgeDoubleClick: p, onReconnectStart: h, onReconnectEnd: m, disableKeyboardA11y: x }) {
  const { edgesFocusable: w, edgesReconnectable: g, elementsSelectable: v, onError: y } = fe(fA, Se), S = QM(t);
  return f.jsxs("div", { className: "react-flow__edges", children: [f.jsx(tA, { defaultColor: e, rfId: n }), S.map((E) => f.jsx(dA, { id: E, edgesFocusable: w, edgesReconnectable: g, elementsSelectable: v, noPanClassName: o, onReconnect: i, onContextMenu: s, onMouseEnter: l, onMouseMove: a, onMouseLeave: c, onClick: d, reconnectRadius: u, onDoubleClick: p, onReconnectStart: h, onReconnectEnd: m, rfId: n, onError: y, edgeTypes: r, disableKeyboardA11y: x }, E))] });
}
cb.displayName = "EdgeRenderer";
const pA = b.memo(cb), hA = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function mA({ children: e }) {
  const t = fe(hA);
  return f.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function gA(e) {
  const t = Ms(), n = b.useRef(!1);
  b.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const yA = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function xA(e) {
  const t = fe(yA), n = Ne();
  return b.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function vA(e) {
  return e.connection.inProgress ? { ...e.connection, to: _s(e.connection.to, e.transform) } : { ...e.connection };
}
function wA(e) {
  return vA;
}
function bA(e) {
  const t = wA();
  return fe(t, Se);
}
const SA = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function NA({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: s, isValid: l, inProgress: a } = fe(SA, Se);
  return !(i && o && a) ? null : f.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: f.jsx("g", { className: De(["react-flow__connection", ox(l)]), children: f.jsx(ub, { style: t, type: n, CustomComponent: r, isValid: l }) }) });
}
const ub = ({ style: e, type: t = qn.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: o, from: i, fromNode: s, fromHandle: l, fromPosition: a, to: c, toNode: d, toHandle: u, toPosition: p, pointer: h } = bA();
  if (!o)
    return;
  if (n)
    return f.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: l, fromX: i.x, fromY: i.y, toX: c.x, toY: c.y, fromPosition: a, toPosition: p, connectionStatus: ox(r), toNode: d, toHandle: u, pointer: h });
  let m = "";
  const x = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: a,
    targetX: c.x,
    targetY: c.y,
    targetPosition: p
  };
  switch (t) {
    case qn.Bezier:
      [m] = Gf(x);
      break;
    case qn.SimpleBezier:
      [m] = qw(x);
      break;
    case qn.Step:
      [m] = ua({
        ...x,
        borderRadius: 0
      });
      break;
    case qn.SmoothStep:
      [m] = ua(x);
      break;
    default:
      [m] = yx(x);
  }
  return f.jsx("path", { d: m, fill: "none", className: "react-flow__connection-path", style: e });
};
ub.displayName = "ConnectionLine";
const EA = {};
function Gg(e = EA) {
  b.useRef(e), Ne(), b.useEffect(() => {
  }, [e]);
}
function CA() {
  Ne(), b.useRef(!1), b.useEffect(() => {
  }, []);
}
function db({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: o, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: l, onNodeMouseMove: a, onNodeMouseLeave: c, onNodeContextMenu: d, onSelectionContextMenu: u, onSelectionStart: p, onSelectionEnd: h, connectionLineType: m, connectionLineStyle: x, connectionLineComponent: w, connectionLineContainerStyle: g, selectionKeyCode: v, selectionOnDrag: y, selectionMode: S, multiSelectionKeyCode: E, panActivationKeyCode: C, zoomActivationKeyCode: N, deleteKeyCode: P, onlyRenderVisibleElements: A, elementsSelectable: L, defaultViewport: _, translateExtent: M, minZoom: j, maxZoom: k, preventScrolling: D, defaultMarkerColor: R, zoomOnScroll: O, zoomOnPinch: I, panOnScroll: T, panOnScrollSpeed: F, panOnScrollMode: z, zoomOnDoubleClick: $, panOnDrag: U, onPaneClick: V, onPaneMouseEnter: Q, onPaneMouseMove: K, onPaneMouseLeave: W, onPaneScroll: B, onPaneContextMenu: Y, paneClickDistance: ie, nodeClickDistance: ne, onEdgeContextMenu: ee, onEdgeMouseEnter: J, onEdgeMouseMove: de, onEdgeMouseLeave: he, reconnectRadius: ce, onReconnect: Me, onReconnectStart: _t, onReconnectEnd: He, noDragClassName: kt, noWheelClassName: tn, noPanClassName: br, disableKeyboardA11y: xn, nodeExtent: q, rfId: te, viewport: se, onViewportChange: Ye }) {
  return Gg(e), Gg(t), CA(), gA(n), xA(se), f.jsx($M, { onPaneClick: V, onPaneMouseEnter: Q, onPaneMouseMove: K, onPaneMouseLeave: W, onPaneContextMenu: Y, onPaneScroll: B, paneClickDistance: ie, deleteKeyCode: P, selectionKeyCode: v, selectionOnDrag: y, selectionMode: S, onSelectionStart: p, onSelectionEnd: h, multiSelectionKeyCode: E, panActivationKeyCode: C, zoomActivationKeyCode: N, elementsSelectable: L, zoomOnScroll: O, zoomOnPinch: I, zoomOnDoubleClick: $, panOnScroll: T, panOnScrollSpeed: F, panOnScrollMode: z, panOnDrag: U, defaultViewport: _, translateExtent: M, minZoom: j, maxZoom: k, onSelectionContextMenu: u, preventScrolling: D, noDragClassName: kt, noWheelClassName: tn, noPanClassName: br, disableKeyboardA11y: xn, onViewportChange: Ye, isControlledViewport: !!se, children: f.jsxs(mA, { children: [f.jsx(pA, { edgeTypes: t, onEdgeClick: o, onEdgeDoubleClick: s, onReconnect: Me, onReconnectStart: _t, onReconnectEnd: He, onlyRenderVisibleElements: A, onEdgeContextMenu: ee, onEdgeMouseEnter: J, onEdgeMouseMove: de, onEdgeMouseLeave: he, reconnectRadius: ce, defaultMarkerColor: R, noPanClassName: br, disableKeyboardA11y: xn, rfId: te }), f.jsx(NA, { style: x, type: m, component: w, containerStyle: g }), f.jsx("div", { className: "react-flow__edgelabel-renderer" }), f.jsx(XM, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: i, onNodeMouseEnter: l, onNodeMouseMove: a, onNodeMouseLeave: c, onNodeContextMenu: d, nodeClickDistance: ne, onlyRenderVisibleElements: A, noPanClassName: br, noDragClassName: kt, disableKeyboardA11y: xn, nodeExtent: q, rfId: te }), f.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
db.displayName = "GraphView";
const _A = b.memo(db), Xg = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: a = 0.5, maxZoom: c = 2, nodeOrigin: d, nodeExtent: u, zIndexMode: p = "basic" } = {}) => {
  const h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), g = r ?? t ?? [], v = n ?? e ?? [], y = d ?? [0, 0], S = u ?? Wi;
  wx(x, w, g);
  const E = fd(v, h, m, {
    nodeOrigin: y,
    nodeExtent: S,
    zIndexMode: p
  });
  let C = [0, 0, 1];
  if (s && o && i) {
    const N = Es(h, {
      filter: (_) => !!((_.width || _.initialWidth) && (_.height || _.initialHeight))
    }), { x: P, y: A, zoom: L } = Wf(N, o, i, a, c, (l == null ? void 0 : l.padding) ?? 0.1);
    C = [P, A, L];
  }
  return {
    rfId: "1",
    width: o ?? 0,
    height: i ?? 0,
    transform: C,
    nodes: v,
    nodesInitialized: E,
    nodeLookup: h,
    parentLookup: m,
    edges: g,
    edgeLookup: w,
    connectionLookup: x,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: a,
    maxZoom: c,
    translateExtent: Wi,
    nodeExtent: S,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: Lo.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: y,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: s ?? !1,
    fitViewOptions: l,
    fitViewResolver: null,
    connection: { ...rx },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: ST,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: nx,
    zIndexMode: p,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, kA = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: a, maxZoom: c, nodeOrigin: d, nodeExtent: u, zIndexMode: p }) => $j((h, m) => {
  async function x() {
    const { nodeLookup: w, panZoom: g, fitViewOptions: v, fitViewResolver: y, width: S, height: E, minZoom: C, maxZoom: N } = m();
    g && (await wT({
      nodes: w,
      width: S,
      height: E,
      panZoom: g,
      minZoom: C,
      maxZoom: N
    }, v), y == null || y.resolve(!0), h({ fitViewResolver: null }));
  }
  return {
    ...Xg({
      nodes: e,
      edges: t,
      width: o,
      height: i,
      fitView: s,
      fitViewOptions: l,
      minZoom: a,
      maxZoom: c,
      nodeOrigin: d,
      nodeExtent: u,
      defaultNodes: n,
      defaultEdges: r,
      zIndexMode: p
    }),
    setNodes: (w) => {
      const { nodeLookup: g, parentLookup: v, nodeOrigin: y, elevateNodesOnSelect: S, fitViewQueued: E, zIndexMode: C } = m(), N = fd(w, g, v, {
        nodeOrigin: y,
        nodeExtent: u,
        elevateNodesOnSelect: S,
        checkEquality: !0,
        zIndexMode: C
      });
      E && N ? (x(), h({ nodes: w, nodesInitialized: N, fitViewQueued: !1, fitViewOptions: void 0 })) : h({ nodes: w, nodesInitialized: N });
    },
    setEdges: (w) => {
      const { connectionLookup: g, edgeLookup: v } = m();
      wx(g, v, w), h({ edges: w });
    },
    setDefaultNodesAndEdges: (w, g) => {
      if (w) {
        const { setNodes: v } = m();
        v(w), h({ hasDefaultNodes: !0 });
      }
      if (g) {
        const { setEdges: v } = m();
        v(g), h({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (w) => {
      const { triggerNodeChanges: g, nodeLookup: v, parentLookup: y, domNode: S, nodeOrigin: E, nodeExtent: C, debug: N, fitViewQueued: P, zIndexMode: A } = m(), { changes: L, updatedInternals: _ } = UT(w, v, y, S, E, C, A);
      _ && ($T(v, y, { nodeOrigin: E, nodeExtent: C, zIndexMode: A }), P ? (x(), h({ fitViewQueued: !1, fitViewOptions: void 0 })) : h({}), (L == null ? void 0 : L.length) > 0 && (N && console.log("React Flow: trigger node changes", L), g == null || g(L)));
    },
    updateNodePositions: (w, g = !1) => {
      const v = [];
      let y = [];
      const { nodeLookup: S, triggerNodeChanges: E, connection: C, updateConnection: N, onNodesChangeMiddlewareMap: P } = m();
      for (const [A, L] of w) {
        const _ = S.get(A), M = !!(_ != null && _.expandParent && (_ != null && _.parentId) && (L != null && L.position)), j = {
          id: A,
          type: "position",
          position: M ? {
            x: Math.max(0, L.position.x),
            y: Math.max(0, L.position.y)
          } : L.position,
          dragging: g
        };
        if (_ && C.inProgress && C.fromNode.id === _.id) {
          const k = $r(_, C.fromHandle, X.Left, !0);
          N({ ...C, from: k });
        }
        M && _.parentId && v.push({
          id: A,
          parentId: _.parentId,
          rect: {
            ...L.internals.positionAbsolute,
            width: L.measured.width ?? 0,
            height: L.measured.height ?? 0
          }
        }), y.push(j);
      }
      if (v.length > 0) {
        const { parentLookup: A, nodeOrigin: L } = m(), _ = Jf(v, S, A, L);
        y.push(..._);
      }
      for (const A of P.values())
        y = A(y);
      E(y);
    },
    triggerNodeChanges: (w) => {
      const { onNodesChange: g, setNodes: v, nodes: y, hasDefaultNodes: S, debug: E } = m();
      if (w != null && w.length) {
        if (S) {
          const C = $w(w, y);
          v(C);
        }
        E && console.log("React Flow: trigger node changes", w), g == null || g(w);
      }
    },
    triggerEdgeChanges: (w) => {
      const { onEdgesChange: g, setEdges: v, edges: y, hasDefaultEdges: S, debug: E } = m();
      if (w != null && w.length) {
        if (S) {
          const C = Hw(w, y);
          v(C);
        }
        E && console.log("React Flow: trigger edge changes", w), g == null || g(w);
      }
    },
    addSelectedNodes: (w) => {
      const { multiSelectionActive: g, edgeLookup: v, nodeLookup: y, triggerNodeChanges: S, triggerEdgeChanges: E } = m();
      if (g) {
        const C = w.map((N) => Er(N, !0));
        S(C);
        return;
      }
      S(bo(y, /* @__PURE__ */ new Set([...w]), !0)), E(bo(v));
    },
    addSelectedEdges: (w) => {
      const { multiSelectionActive: g, edgeLookup: v, nodeLookup: y, triggerNodeChanges: S, triggerEdgeChanges: E } = m();
      if (g) {
        const C = w.map((N) => Er(N, !0));
        E(C);
        return;
      }
      E(bo(v, /* @__PURE__ */ new Set([...w]))), S(bo(y, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: w, edges: g } = {}) => {
      const { edges: v, nodes: y, nodeLookup: S, triggerNodeChanges: E, triggerEdgeChanges: C } = m(), N = w || y, P = g || v, A = N.map((_) => {
        const M = S.get(_.id);
        return M && (M.selected = !1), Er(_.id, !1);
      }), L = P.map((_) => Er(_.id, !1));
      E(A), C(L);
    },
    setMinZoom: (w) => {
      const { panZoom: g, maxZoom: v } = m();
      g == null || g.setScaleExtent([w, v]), h({ minZoom: w });
    },
    setMaxZoom: (w) => {
      const { panZoom: g, minZoom: v } = m();
      g == null || g.setScaleExtent([v, w]), h({ maxZoom: w });
    },
    setTranslateExtent: (w) => {
      var g;
      (g = m().panZoom) == null || g.setTranslateExtent(w), h({ translateExtent: w });
    },
    resetSelectedElements: () => {
      const { edges: w, nodes: g, triggerNodeChanges: v, triggerEdgeChanges: y, elementsSelectable: S } = m();
      if (!S)
        return;
      const E = g.reduce((N, P) => P.selected ? [...N, Er(P.id, !1)] : N, []), C = w.reduce((N, P) => P.selected ? [...N, Er(P.id, !1)] : N, []);
      v(E), y(C);
    },
    setNodeExtent: (w) => {
      const { nodes: g, nodeLookup: v, parentLookup: y, nodeOrigin: S, elevateNodesOnSelect: E, nodeExtent: C, zIndexMode: N } = m();
      w[0][0] === C[0][0] && w[0][1] === C[0][1] && w[1][0] === C[1][0] && w[1][1] === C[1][1] || (fd(g, v, y, {
        nodeOrigin: S,
        nodeExtent: w,
        elevateNodesOnSelect: E,
        checkEquality: !1,
        zIndexMode: N
      }), h({ nodeExtent: w }));
    },
    panBy: (w) => {
      const { transform: g, width: v, height: y, panZoom: S, translateExtent: E } = m();
      return KT({ delta: w, panZoom: S, transform: g, translateExtent: E, width: v, height: y });
    },
    setCenter: async (w, g, v) => {
      const { width: y, height: S, maxZoom: E, panZoom: C } = m();
      if (!C)
        return Promise.resolve(!1);
      const N = typeof (v == null ? void 0 : v.zoom) < "u" ? v.zoom : E;
      return await C.setViewport({
        x: y / 2 - w * N,
        y: S / 2 - g * N,
        zoom: N
      }, { duration: v == null ? void 0 : v.duration, ease: v == null ? void 0 : v.ease, interpolate: v == null ? void 0 : v.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      h({
        connection: { ...rx }
      });
    },
    updateConnection: (w) => {
      h({ connection: w });
    },
    reset: () => h({ ...Xg() })
  };
}, Object.is);
function TA({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: o, initialHeight: i, initialMinZoom: s, initialMaxZoom: l, initialFitViewOptions: a, fitView: c, nodeOrigin: d, nodeExtent: u, zIndexMode: p, children: h }) {
  const [m] = b.useState(() => kA({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: c,
    minZoom: s,
    maxZoom: l,
    fitViewOptions: a,
    nodeOrigin: d,
    nodeExtent: u,
    zIndexMode: p
  }));
  return f.jsx(WP, { value: m, children: f.jsx(mM, { children: h }) });
}
function jA({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: o, width: i, height: s, fitView: l, fitViewOptions: a, minZoom: c, maxZoom: d, nodeOrigin: u, nodeExtent: p, zIndexMode: h }) {
  return b.useContext(Cc) ? f.jsx(f.Fragment, { children: e }) : f.jsx(TA, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: o, initialWidth: i, initialHeight: s, fitView: l, initialFitViewOptions: a, initialMinZoom: c, initialMaxZoom: d, nodeOrigin: u, nodeExtent: p, zIndexMode: h, children: e });
}
const IA = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function PA({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i, edgeTypes: s, onNodeClick: l, onEdgeClick: a, onInit: c, onMove: d, onMoveStart: u, onMoveEnd: p, onConnect: h, onConnectStart: m, onConnectEnd: x, onClickConnectStart: w, onClickConnectEnd: g, onNodeMouseEnter: v, onNodeMouseMove: y, onNodeMouseLeave: S, onNodeContextMenu: E, onNodeDoubleClick: C, onNodeDragStart: N, onNodeDrag: P, onNodeDragStop: A, onNodesDelete: L, onEdgesDelete: _, onDelete: M, onSelectionChange: j, onSelectionDragStart: k, onSelectionDrag: D, onSelectionDragStop: R, onSelectionContextMenu: O, onSelectionStart: I, onSelectionEnd: T, onBeforeDelete: F, connectionMode: z, connectionLineType: $ = qn.Bezier, connectionLineStyle: U, connectionLineComponent: V, connectionLineContainerStyle: Q, deleteKeyCode: K = "Backspace", selectionKeyCode: W = "Shift", selectionOnDrag: B = !1, selectionMode: Y = Yi.Full, panActivationKeyCode: ie = "Space", multiSelectionKeyCode: ne = Xi() ? "Meta" : "Control", zoomActivationKeyCode: ee = Xi() ? "Meta" : "Control", snapToGrid: J, snapGrid: de, onlyRenderVisibleElements: he = !1, selectNodesOnDrag: ce, nodesDraggable: Me, autoPanOnNodeFocus: _t, nodesConnectable: He, nodesFocusable: kt, nodeOrigin: tn = Fw, edgesFocusable: br, edgesReconnectable: xn, elementsSelectable: q = !0, defaultViewport: te = iM, minZoom: se = 0.5, maxZoom: Ye = 2, translateExtent: ge = Wi, preventScrolling: Ve = !0, nodeExtent: vn, defaultMarkerColor: eN = "#b1b1b7", zoomOnScroll: tN = !0, zoomOnPinch: nN = !0, panOnScroll: rN = !1, panOnScrollSpeed: oN = 0.5, panOnScrollMode: iN = Pr.Free, zoomOnDoubleClick: sN = !0, panOnDrag: lN = !0, onPaneClick: aN, onPaneMouseEnter: cN, onPaneMouseMove: uN, onPaneMouseLeave: dN, onPaneScroll: fN, onPaneContextMenu: pN, paneClickDistance: hN = 1, nodeClickDistance: mN = 0, children: gN, onReconnect: yN, onReconnectStart: xN, onReconnectEnd: vN, onEdgeContextMenu: wN, onEdgeDoubleClick: bN, onEdgeMouseEnter: SN, onEdgeMouseMove: NN, onEdgeMouseLeave: EN, reconnectRadius: CN = 10, onNodesChange: _N, onEdgesChange: kN, noDragClassName: TN = "nodrag", noWheelClassName: jN = "nowheel", noPanClassName: vh = "nopan", fitView: wh, fitViewOptions: bh, connectOnClick: IN, attributionPosition: PN, proOptions: MN, defaultEdgeOptions: AN, elevateNodesOnSelect: RN = !0, elevateEdgesOnSelect: DN = !1, disableKeyboardA11y: Sh = !1, autoPanOnConnect: LN, autoPanOnNodeDrag: ON, autoPanSpeed: FN, connectionRadius: zN, isValidConnection: $N, onError: HN, style: VN, id: Nh, nodeDragThreshold: BN, connectionDragThreshold: UN, viewport: KN, onViewportChange: WN, width: YN, height: GN, colorMode: XN = "light", debug: QN, onScroll: Fs, ariaLabelConfig: qN, zIndexMode: Eh = "basic", ...ZN }, JN) {
  const Vc = Nh || "1", eE = cM(XN), tE = b.useCallback((Ch) => {
    Ch.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Fs == null || Fs(Ch);
  }, [Fs]);
  return f.jsx("div", { "data-testid": "rf__wrapper", ...ZN, onScroll: tE, style: { ...VN, ...IA }, ref: JN, className: De(["react-flow", o, eE]), id: Nh, role: "application", children: f.jsxs(jA, { nodes: e, edges: t, width: YN, height: GN, fitView: wh, fitViewOptions: bh, minZoom: se, maxZoom: Ye, nodeOrigin: tn, nodeExtent: vn, zIndexMode: Eh, children: [f.jsx(_A, { onInit: c, onNodeClick: l, onEdgeClick: a, onNodeMouseEnter: v, onNodeMouseMove: y, onNodeMouseLeave: S, onNodeContextMenu: E, onNodeDoubleClick: C, nodeTypes: i, edgeTypes: s, connectionLineType: $, connectionLineStyle: U, connectionLineComponent: V, connectionLineContainerStyle: Q, selectionKeyCode: W, selectionOnDrag: B, selectionMode: Y, deleteKeyCode: K, multiSelectionKeyCode: ne, panActivationKeyCode: ie, zoomActivationKeyCode: ee, onlyRenderVisibleElements: he, defaultViewport: te, translateExtent: ge, minZoom: se, maxZoom: Ye, preventScrolling: Ve, zoomOnScroll: tN, zoomOnPinch: nN, zoomOnDoubleClick: sN, panOnScroll: rN, panOnScrollSpeed: oN, panOnScrollMode: iN, panOnDrag: lN, onPaneClick: aN, onPaneMouseEnter: cN, onPaneMouseMove: uN, onPaneMouseLeave: dN, onPaneScroll: fN, onPaneContextMenu: pN, paneClickDistance: hN, nodeClickDistance: mN, onSelectionContextMenu: O, onSelectionStart: I, onSelectionEnd: T, onReconnect: yN, onReconnectStart: xN, onReconnectEnd: vN, onEdgeContextMenu: wN, onEdgeDoubleClick: bN, onEdgeMouseEnter: SN, onEdgeMouseMove: NN, onEdgeMouseLeave: EN, reconnectRadius: CN, defaultMarkerColor: eN, noDragClassName: TN, noWheelClassName: jN, noPanClassName: vh, rfId: Vc, disableKeyboardA11y: Sh, nodeExtent: vn, viewport: KN, onViewportChange: WN }), f.jsx(aM, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: h, onConnectStart: m, onConnectEnd: x, onClickConnectStart: w, onClickConnectEnd: g, nodesDraggable: Me, autoPanOnNodeFocus: _t, nodesConnectable: He, nodesFocusable: kt, edgesFocusable: br, edgesReconnectable: xn, elementsSelectable: q, elevateNodesOnSelect: RN, elevateEdgesOnSelect: DN, minZoom: se, maxZoom: Ye, nodeExtent: vn, onNodesChange: _N, onEdgesChange: kN, snapToGrid: J, snapGrid: de, connectionMode: z, translateExtent: ge, connectOnClick: IN, defaultEdgeOptions: AN, fitView: wh, fitViewOptions: bh, onNodesDelete: L, onEdgesDelete: _, onDelete: M, onNodeDragStart: N, onNodeDrag: P, onNodeDragStop: A, onSelectionDrag: D, onSelectionDragStart: k, onSelectionDragStop: R, onMove: d, onMoveStart: u, onMoveEnd: p, noPanClassName: vh, nodeOrigin: tn, rfId: Vc, autoPanOnConnect: LN, autoPanOnNodeDrag: ON, autoPanSpeed: FN, onError: HN, connectionRadius: zN, isValidConnection: $N, selectNodesOnDrag: ce, nodeDragThreshold: BN, connectionDragThreshold: UN, onBeforeDelete: F, debug: QN, ariaLabelConfig: qN, zIndexMode: Eh }), f.jsx(oM, { onSelectionChange: j }), gN, f.jsx(JP, { proOptions: MN, position: PN }), f.jsx(ZP, { rfId: Vc, disableKeyboardA11y: Sh })] }) });
}
var MA = Vw(PA);
function AA() {
  const e = Ne();
  return b.useCallback((t) => {
    const { domNode: n, updateNodeInternals: r } = e.getState(), o = Array.isArray(t) ? t : [t], i = /* @__PURE__ */ new Map();
    o.forEach((s) => {
      const l = n == null ? void 0 : n.querySelector(`.react-flow__node[data-id="${s}"]`);
      l && i.set(s, { id: s, nodeElement: l, force: !0 });
    }), requestAnimationFrame(() => r(i, { triggerFitView: !1 }));
  }, []);
}
const RA = (e) => e.nodes;
function DA() {
  return fe(RA, Se);
}
function LA({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return f.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: De(["react-flow__background-pattern", n, r]) });
}
function OA({ radius: e, className: t }) {
  return f.jsx("circle", { cx: e, cy: e, r: e, className: De(["react-flow__background-pattern", "dots", t]) });
}
var ur;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(ur || (ur = {}));
const FA = {
  [ur.Dots]: 1,
  [ur.Lines]: 1,
  [ur.Cross]: 6
}, zA = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function fb({
  id: e,
  variant: t = ur.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: r,
  lineWidth: o = 1,
  offset: i = 0,
  color: s,
  bgColor: l,
  style: a,
  className: c,
  patternClassName: d
}) {
  const u = b.useRef(null), { transform: p, patternId: h } = fe(zA, Se), m = r || FA[t], x = t === ur.Dots, w = t === ur.Cross, g = Array.isArray(n) ? n : [n, n], v = [g[0] * p[2] || 1, g[1] * p[2] || 1], y = m * p[2], S = Array.isArray(i) ? i : [i, i], E = w ? [y, y] : v, C = [
    S[0] * p[2] || 1 + E[0] / 2,
    S[1] * p[2] || 1 + E[1] / 2
  ], N = `${h}${e || ""}`;
  return f.jsxs("svg", { className: De(["react-flow__background", c]), style: {
    ...a,
    ...kc,
    "--xy-background-color-props": l,
    "--xy-background-pattern-color-props": s
  }, ref: u, "data-testid": "rf__background", children: [f.jsx("pattern", { id: N, x: p[0] % v[0], y: p[1] % v[1], width: v[0], height: v[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${C[0]},-${C[1]})`, children: x ? f.jsx(OA, { radius: y / 2, className: d }) : f.jsx(LA, { dimensions: E, lineWidth: o, variant: t, className: d }) }), f.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${N})` })] });
}
fb.displayName = "Background";
const $A = b.memo(fb);
function HA() {
  return f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: f.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function VA() {
  return f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: f.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function BA() {
  return f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: f.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function UA() {
  return f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: f.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function KA() {
  return f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: f.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function hl({ children: e, className: t, ...n }) {
  return f.jsx("button", { type: "button", className: De(["react-flow__controls-button", t]), ...n, children: e });
}
const WA = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function pb({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: s, onFitView: l, onInteractiveChange: a, className: c, children: d, position: u = "bottom-left", orientation: p = "vertical", "aria-label": h }) {
  const m = Ne(), { isInteractive: x, minZoomReached: w, maxZoomReached: g, ariaLabelConfig: v } = fe(WA, Se), { zoomIn: y, zoomOut: S, fitView: E } = Ms(), C = () => {
    y(), i == null || i();
  }, N = () => {
    S(), s == null || s();
  }, P = () => {
    E(o), l == null || l();
  }, A = () => {
    m.setState({
      nodesDraggable: !x,
      nodesConnectable: !x,
      elementsSelectable: !x
    }), a == null || a(!x);
  }, L = p === "horizontal" ? "horizontal" : "vertical";
  return f.jsxs(_c, { className: De(["react-flow__controls", L, c]), position: u, style: e, "data-testid": "rf__controls", "aria-label": h ?? v["controls.ariaLabel"], children: [t && f.jsxs(f.Fragment, { children: [f.jsx(hl, { onClick: C, className: "react-flow__controls-zoomin", title: v["controls.zoomIn.ariaLabel"], "aria-label": v["controls.zoomIn.ariaLabel"], disabled: g, children: f.jsx(HA, {}) }), f.jsx(hl, { onClick: N, className: "react-flow__controls-zoomout", title: v["controls.zoomOut.ariaLabel"], "aria-label": v["controls.zoomOut.ariaLabel"], disabled: w, children: f.jsx(VA, {}) })] }), n && f.jsx(hl, { className: "react-flow__controls-fitview", onClick: P, title: v["controls.fitView.ariaLabel"], "aria-label": v["controls.fitView.ariaLabel"], children: f.jsx(BA, {}) }), r && f.jsx(hl, { className: "react-flow__controls-interactive", onClick: A, title: v["controls.interactive.ariaLabel"], "aria-label": v["controls.interactive.ariaLabel"], children: x ? f.jsx(KA, {}) : f.jsx(UA, {}) }), d] });
}
pb.displayName = "Controls";
const YA = b.memo(pb);
function GA({ id: e, x: t, y: n, width: r, height: o, style: i, color: s, strokeColor: l, strokeWidth: a, className: c, borderRadius: d, shapeRendering: u, selected: p, onClick: h }) {
  const { background: m, backgroundColor: x } = i || {}, w = s || m || x;
  return f.jsx("rect", { className: De(["react-flow__minimap-node", { selected: p }, c]), x: t, y: n, rx: d, ry: d, width: r, height: o, style: {
    fill: w,
    stroke: l,
    strokeWidth: a
  }, shapeRendering: u, onClick: h ? (g) => h(g, e) : void 0 });
}
const XA = b.memo(GA), QA = (e) => e.nodes.map((t) => t.id), ju = (e) => e instanceof Function ? e : () => e;
function qA({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = XA,
  onClick: s
}) {
  const l = fe(QA, Se), a = ju(t), c = ju(e), d = ju(n), u = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return f.jsx(f.Fragment, { children: l.map((p) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    f.jsx(JA, { id: p, nodeColorFunc: a, nodeStrokeColorFunc: c, nodeClassNameFunc: d, nodeBorderRadius: r, nodeStrokeWidth: o, NodeComponent: i, onClick: s, shapeRendering: u }, p)
  )) });
}
function ZA({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: o, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: l, onClick: a }) {
  const { node: c, x: d, y: u, width: p, height: h } = fe((m) => {
    const { internals: x } = m.nodeLookup.get(e), w = x.userNode, { x: g, y: v } = x.positionAbsolute, { width: y, height: S } = $n(w);
    return {
      node: w,
      x: g,
      y: v,
      width: y,
      height: S
    };
  }, Se);
  return !c || c.hidden || !ux(c) ? null : f.jsx(l, { x: d, y: u, width: p, height: h, style: c.style, selected: !!c.selected, className: r(c), color: t(c), borderRadius: o, strokeColor: n(c), strokeWidth: i, shapeRendering: s, onClick: a, id: c.id });
}
const JA = b.memo(ZA);
var eR = b.memo(qA);
const tR = 200, nR = 150, rR = (e) => !e.hidden, oR = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? cx(Es(e.nodeLookup, { filter: rR }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, iR = "react-flow__minimap-desc";
function hb({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: o = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: l,
  bgColor: a,
  maskColor: c,
  maskStrokeColor: d,
  maskStrokeWidth: u,
  position: p = "bottom-right",
  onClick: h,
  onNodeClick: m,
  pannable: x = !1,
  zoomable: w = !1,
  ariaLabel: g,
  inversePan: v,
  zoomStep: y = 1,
  offsetScale: S = 5
}) {
  const E = Ne(), C = b.useRef(null), { boundingRect: N, viewBB: P, rfId: A, panZoom: L, translateExtent: _, flowWidth: M, flowHeight: j, ariaLabelConfig: k } = fe(oR, Se), D = (e == null ? void 0 : e.width) ?? tR, R = (e == null ? void 0 : e.height) ?? nR, O = N.width / D, I = N.height / R, T = Math.max(O, I), F = T * D, z = T * R, $ = S * T, U = N.x - (F - N.width) / 2 - $, V = N.y - (z - N.height) / 2 - $, Q = F + $ * 2, K = z + $ * 2, W = `${iR}-${A}`, B = b.useRef(0), Y = b.useRef();
  B.current = T, b.useEffect(() => {
    if (C.current && L)
      return Y.current = ej({
        domNode: C.current,
        panZoom: L,
        getTransform: () => E.getState().transform,
        getViewScale: () => B.current
      }), () => {
        var J;
        (J = Y.current) == null || J.destroy();
      };
  }, [L]), b.useEffect(() => {
    var J;
    (J = Y.current) == null || J.update({
      translateExtent: _,
      width: M,
      height: j,
      inversePan: v,
      pannable: x,
      zoomStep: y,
      zoomable: w
    });
  }, [x, w, v, y, _, M, j]);
  const ie = h ? (J) => {
    var ce;
    const [de, he] = ((ce = Y.current) == null ? void 0 : ce.pointer(J)) || [0, 0];
    h(J, { x: de, y: he });
  } : void 0, ne = m ? b.useCallback((J, de) => {
    const he = E.getState().nodeLookup.get(de).internals.userNode;
    m(J, he);
  }, []) : void 0, ee = g ?? k["minimap.ariaLabel"];
  return f.jsx(_c, { position: p, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof a == "string" ? a : void 0,
    "--xy-minimap-mask-background-color-props": typeof c == "string" ? c : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof u == "number" ? u * T : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: De(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: f.jsxs("svg", { width: D, height: R, viewBox: `${U} ${V} ${Q} ${K}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": W, ref: C, onClick: ie, children: [ee && f.jsx("title", { id: W, children: ee }), f.jsx(eR, { onClick: ne, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: o, nodeStrokeWidth: s, nodeComponent: l }), f.jsx("path", { className: "react-flow__minimap-mask", d: `M${U - $},${V - $}h${Q + $ * 2}v${K + $ * 2}h${-Q - $ * 2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
hb.displayName = "MiniMap";
const sR = b.memo(hb), lR = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, aR = {
  [$o.Line]: "right",
  [$o.Handle]: "bottom-right"
};
function cR({ nodeId: e, position: t, variant: n = $o.Handle, className: r, style: o = void 0, children: i, color: s, minWidth: l = 10, minHeight: a = 10, maxWidth: c = Number.MAX_VALUE, maxHeight: d = Number.MAX_VALUE, keepAspectRatio: u = !1, resizeDirection: p, autoScale: h = !0, shouldResize: m, onResizeStart: x, onResize: w, onResizeEnd: g }) {
  const v = Ww(), y = typeof e == "string" ? e : v, S = Ne(), E = b.useRef(null), C = n === $o.Handle, N = fe(b.useCallback(lR(C && h), [C, h]), Se), P = b.useRef(null), A = t ?? aR[n];
  b.useEffect(() => {
    if (!(!E.current || !y))
      return P.current || (P.current = hj({
        domNode: E.current,
        nodeId: y,
        getStoreItems: () => {
          const { nodeLookup: _, transform: M, snapGrid: j, snapToGrid: k, nodeOrigin: D, domNode: R } = S.getState();
          return {
            nodeLookup: _,
            transform: M,
            snapGrid: j,
            snapToGrid: k,
            nodeOrigin: D,
            paneDomNode: R
          };
        },
        onChange: (_, M) => {
          const { triggerNodeChanges: j, nodeLookup: k, parentLookup: D, nodeOrigin: R } = S.getState(), O = [], I = { x: _.x, y: _.y }, T = k.get(y);
          if (T && T.expandParent && T.parentId) {
            const F = T.origin ?? R, z = _.width ?? T.measured.width ?? 0, $ = _.height ?? T.measured.height ?? 0, U = {
              id: T.id,
              parentId: T.parentId,
              rect: {
                width: z,
                height: $,
                ...dx({
                  x: _.x ?? T.position.x,
                  y: _.y ?? T.position.y
                }, { width: z, height: $ }, T.parentId, k, F)
              }
            }, V = Jf([U], k, D, R);
            O.push(...V), I.x = _.x ? Math.max(F[0] * z, _.x) : void 0, I.y = _.y ? Math.max(F[1] * $, _.y) : void 0;
          }
          if (I.x !== void 0 && I.y !== void 0) {
            const F = {
              id: y,
              type: "position",
              position: { ...I }
            };
            O.push(F);
          }
          if (_.width !== void 0 && _.height !== void 0) {
            const z = {
              id: y,
              type: "dimensions",
              resizing: !0,
              setAttributes: p ? p === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: _.width,
                height: _.height
              }
            };
            O.push(z);
          }
          for (const F of M) {
            const z = {
              ...F,
              type: "position"
            };
            O.push(z);
          }
          j(O);
        },
        onEnd: ({ width: _, height: M }) => {
          const j = {
            id: y,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: _,
              height: M
            }
          };
          S.getState().triggerNodeChanges([j]);
        }
      })), P.current.update({
        controlPosition: A,
        boundaries: {
          minWidth: l,
          minHeight: a,
          maxWidth: c,
          maxHeight: d
        },
        keepAspectRatio: u,
        resizeDirection: p,
        onResizeStart: x,
        onResize: w,
        onResizeEnd: g,
        shouldResize: m
      }), () => {
        var _;
        (_ = P.current) == null || _.destroy();
      };
  }, [
    A,
    l,
    a,
    c,
    d,
    u,
    x,
    w,
    g,
    m
  ]);
  const L = A.split("-");
  return f.jsx("div", { className: De(["react-flow__resize-control", "nodrag", ...L, n, r]), ref: E, style: {
    ...o,
    scale: N,
    ...s && { [C ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
b.memo(cR);
const et = [
  "#22c55e",
  // Green
  "#a855f7",
  // Purple
  "#eab308",
  // Yellow
  "#3b82f6",
  // Blue
  "#ef4444",
  // Red
  "#14b8a6"
  // Teal
], ml = {
  MAX_NAME_LENGTH: 63,
  RESERVED_NAMES: ["id", "created_at", "updated_at"]
}, Iu = {
  FIELD_NAME_REQUIRED: "Tên trường không được để trống",
  FIELD_NAME_TOO_LONG: "Tên trường quá dài (tối đa 63 ký tự)",
  FIELD_NAME_INVALID: "Tên trường không hợp lệ (chỉ chứa chữ cái, số và dấu gạch dưới)"
}, uR = {
  nodes: [],
  edges: []
}, mb = yr({
  name: "schema",
  initialState: uR,
  reducers: {
    // React Flow specific actions
    setNodes: (e, t) => {
      e.nodes = t.payload;
    },
    setEdges: (e, t) => {
      e.edges = t.payload;
    },
    addEdge: (e, t) => {
      e.edges.push(t.payload);
    },
    onNodesChange: (e, t) => {
      e.nodes = $w(t.payload, e.nodes);
    },
    onEdgesChange: (e, t) => {
      e.edges = Hw(t.payload, e.edges);
    },
    resetSchema: (e) => {
      e.nodes = [], e.edges = [];
    },
    onConnect: (e, t) => {
      const { source: n, target: r, sourceHandle: o, targetHandle: i } = t.payload;
      if (n !== r && n && r && o && i) {
        const s = `${n}-${o}-to-${r}-${i}`;
        if (!e.edges.some(
          (a) => a.source === n && a.target === r && a.sourceHandle === o && a.targetHandle === i
        )) {
          const a = {
            id: s,
            source: n,
            target: r,
            sourceHandle: o,
            targetHandle: i,
            type: "relationship",
            data: { relationshipType: "1-n" }
          };
          e.edges.push(a);
        }
      }
    },
    updateEdge: (e, t) => {
      const { id: n, data: r } = t.payload, o = e.edges.find((i) => i.id === n);
      o && (o.data = { ...o.data, ...r });
    },
    // Table operations
    addTable: (e, t) => {
      console.log("addTable action", t.payload);
      const { id: n, name: r, tableName: o, columns: i, position: s } = t.payload, l = n || `table-${Date.now()}-${Math.floor(Math.random() * 1e3)}`, a = et[e.nodes.length % et.length], c = {
        id: l,
        type: "table",
        position: s || {
          x: Math.random() * 500 + 100,
          y: Math.random() * 400 + 100
        },
        data: {
          tableName: o || r.toLowerCase().replace(/\s+/g, "_"),
          label: r,
          columns: i.map((d) => ({ ...d, visible: !0 })),
          color: a,
          isActive: !0,
          _version: Date.now()
        }
      };
      e.nodes.push(c);
    },
    updateTable: (e, t) => {
      const { id: n, updates: r } = t.payload, o = e.nodes.find((i) => i.id === n);
      o && (o.data = { ...o.data, ...r });
    },
    deleteElements: (e, t) => {
      const { nodeIds: n, edgeIds: r } = t.payload, o = new Set(n), i = new Set(r);
      e.nodes = e.nodes.filter((s) => !o.has(s.id)), e.edges = e.edges.filter((s) => !i.has(s.id));
    },
    deleteTable: (e, t) => {
      const n = t.payload, r = /* @__PURE__ */ new Set(), o = [n];
      for (; o.length > 0; ) {
        const i = o.shift();
        r.has(i) || (r.add(i), e.edges.filter((l) => l.source === i).forEach((l) => {
          o.push(l.target);
        }));
      }
      e.nodes = e.nodes.filter((i) => !r.has(i.id)), e.edges = e.edges.filter((i) => !r.has(i.source) && !r.has(i.target));
    },
    // Column operations
    addField: (e, t) => {
      const { nodeId: n, field: r } = t.payload, o = e.nodes.find((i) => i.id === n);
      o && o.data.columns.push(r);
    },
    updateField: (e, t) => {
      const { nodeId: n, fieldIndex: r, updates: o } = t.payload, i = e.nodes.find((s) => s.id === n);
      if (i && i.data.columns[r]) {
        const s = i.data.columns[r], l = s.name;
        if (i.data.columns[r] = { ...s, ...o }, i.data._version = Date.now(), o.name && o.name !== l) {
          const a = o.name;
          e.edges.forEach((c) => {
            var d;
            c.source === n && c.sourceHandle === l && (c.sourceHandle = a), c.target === n && c.targetHandle === l && (c.targetHandle = a), c.source === n && ((d = c.data) == null ? void 0 : d.objectFieldName) === l && (c.data.objectFieldName = a, c.sourceHandle === l && (c.sourceHandle = a));
          });
        }
      }
    },
    toggleFieldVisibility: (e, t) => {
      const { nodeId: n, fieldIndex: r } = t.payload, o = e.nodes.find((l) => l.id === n);
      if (!o) return;
      const i = o.data.columns[r], s = i.visible === !1;
      i.visible = s, i.isForeignKey && e.edges.filter(
        (a) => {
          var c;
          return a.source === n && a.sourceHandle === i.name && ((c = a.data) == null ? void 0 : c.objectFieldName);
        }
      ).forEach((a) => {
        const c = e.nodes.find((d) => d.id === a.target);
        if (c) {
          const d = c.data.columns.find(
            (u) => {
              var p;
              return u.name === ((p = a.data) == null ? void 0 : p.objectFieldName) && u.type === "object";
            }
          );
          d && (d.visible = s);
        }
      });
    },
    deleteField: (e, t) => {
      const { nodeId: n, fieldIndex: r, skipRecursive: o } = t.payload, i = e.nodes.find((s) => s.id === n);
      if (i) {
        const s = i.data.columns[r], l = e.edges.filter(
          (u) => {
            var p;
            return u.source === n && u.sourceHandle === s.name || // 1-n array/link
            u.source === n && ((p = u.data) == null ? void 0 : p.objectFieldName) === s.name;
          }
          // n-1 object link
        ), a = l.map((u) => u.target), c = [];
        l.forEach((u) => {
          var p, h;
          ((p = u.data) == null ? void 0 : p.relationshipType) === "1-n" ? u.target && u.targetHandle && c.push({ nodeId: u.target, fieldName: u.targetHandle }) : u.source && ((h = u.data) != null && h.sourceFK) && c.push({ nodeId: u.source, fieldName: u.data.sourceFK });
        });
        const d = new Set(l.map((u) => u.id));
        if (e.edges = e.edges.filter((u) => !d.has(u.id)), c.forEach(({ nodeId: u, fieldName: p }) => {
          if (!e.edges.some((m) => {
            var x, w;
            return ((x = m.data) == null ? void 0 : x.relationshipType) === "1-n" ? m.target === u && m.targetHandle === p : m.source === u && ((w = m.data) == null ? void 0 : w.sourceFK) === p;
          })) {
            const m = e.nodes.find((x) => x.id === u);
            if (m) {
              const x = m.data.columns.find((w) => w.name === p);
              x && (x.isForeignKey = !1);
            }
          }
        }), i.data.columns.splice(r, 1), !o) {
          const u = (p) => {
            if (!e.nodes.find((x) => x.id === p)) return;
            const m = e.edges.filter((x) => x.source === p).map((x) => x.target);
            e.nodes = e.nodes.filter((x) => x.id !== p), e.edges = e.edges.filter((x) => x.source !== p && x.target !== p), m.forEach((x) => u(x));
          };
          a.forEach((p) => u(p));
        }
      }
    },
    reorderFields: (e, t) => {
      const { nodeId: n, oldIndex: r, newIndex: o } = t.payload, i = e.nodes.findIndex((s) => s.id === n);
      if (i !== -1) {
        const s = e.nodes[i], l = [...s.data.columns], [a] = l.splice(r, 1);
        l.splice(o, 0, a);
        const c = {
          ...s,
          data: {
            ...s.data,
            columns: l,
            _version: Date.now()
          }
        };
        e.nodes = e.nodes.map((d, u) => u === i ? c : d), e.edges = e.edges.map((d) => d.source === n || d.target === n ? { ...d } : d);
      }
    },
    // Complex Operations
    confirmLinkField: (e, t) => {
      const { sourceNodeId: n, targetNodeId: r, sourcePK: o, targetFK: i, newFieldName: s, relationshipType: l } = t.payload, a = e.nodes.find((w) => w.id === n), c = e.nodes.find((w) => w.id === r);
      if (!a || !c) return;
      const d = {
        name: s,
        type: "array",
        visible: !0,
        isVirtual: !0,
        isPrimaryKey: !1,
        // Fix: Virtual field is not PK
        linkedPrimaryKeyField: o,
        linkedForeignKeyField: i
      };
      a.data.columns.push(d);
      const u = a.data.columns.find((w) => w.name === o);
      u && u.isForeignKey && (e.edges.some(
        (g) => {
          var v;
          return g.source === n && ((v = g.data) == null ? void 0 : v.sourceFK) === o || g.target === n && g.targetHandle === o;
        }
      ) || (u.isForeignKey = !1));
      const p = c.data.columns.find((w) => w.name === i);
      p && (p.isForeignKey = !0);
      const h = `${n}-${s}-to-${r}-${i}`;
      e.edges.push({
        id: h,
        source: n,
        target: r,
        sourceHandle: s,
        targetHandle: i,
        type: "relationship",
        data: { relationshipType: l || "1-n" }
      });
      const m = e.nodes.findIndex((w) => w.id === n);
      m !== -1 && (e.nodes[m] = { ...e.nodes[m] });
      const x = e.nodes.findIndex((w) => w.id === r);
      x !== -1 && (e.nodes[x] = { ...e.nodes[x] });
    },
    updateLinkConnection: (e, t) => {
      const { sourceNodeId: n, oldFieldName: r, newFieldName: o, targetNodeId: i, sourceKey: s, targetKey: l, relationshipType: a } = t.payload, c = e.nodes.find((m) => m.id === n);
      if (!c) return;
      const d = c.data.columns.findIndex((m) => m.name === r);
      if (d !== -1) {
        const m = c.data.columns[d];
        m.name = o, a === "1-n" ? (m.isVirtual = !0, m.type = "varchar", m.linkedPrimaryKeyField = s, m.linkedForeignKeyField = l, delete m.primaryKeyField) : (m.isVirtual = !1, m.type = "object", m.primaryKeyField = l, m.linkedForeignKeyField = s, m.relationshipType = a, delete m.linkedPrimaryKeyField);
      }
      e.edges = e.edges.filter(
        (m) => !(m.source === n && m.sourceHandle === r)
      );
      const u = `edge-${Date.now()}`;
      let p = o, h = l;
      p = o, h = l, e.edges.push({
        id: u,
        source: n,
        target: i,
        sourceHandle: p,
        targetHandle: h,
        type: "relationship",
        data: { relationshipType: a }
      }), e.nodes = [...e.nodes];
    },
    confirmLinkObject: (e, t) => {
      const { sourceNodeId: n, targetNodeId: r, sourceFK: o, targetPK: i, newFieldName: s, relationshipType: l } = t.payload, a = e.nodes.find((d) => d.id === n), c = e.nodes.find((d) => d.id === r);
      if (a && c) {
        a.data.columns.push({
          name: s,
          type: "object",
          visible: !0,
          isVirtual: !0,
          isPrimaryKey: !1,
          isForeignKey: !1,
          isNotNull: !1,
          primaryKeyField: i,
          // Store generic PK ref
          linkedForeignKeyField: o,
          relationshipType: l || "n-1"
        });
        const d = c.data.columns.find((m) => m.name === i);
        d && d.isForeignKey && (e.edges.some(
          (x) => {
            var w;
            return x.target === r && x.targetHandle === i || x.source === r && ((w = x.data) == null ? void 0 : w.sourceFK) === i;
          }
        ) || (d.isForeignKey = !1));
        const u = a.data.columns.find((m) => m.name === o);
        u && (u.isForeignKey = !0);
        const p = `e-${n}-${o}-${r}-${i}`;
        e.edges.some((m) => m.id === p) || e.edges.push({
          id: p,
          source: n,
          target: r,
          sourceHandle: s,
          targetHandle: i,
          type: "relationship",
          data: { relationshipType: l || "n-1" }
        }), e.nodes = [...e.nodes];
      }
    },
    confirmObjectConnection: (e, t) => {
      const { sourceNodeId: n, sourceFieldName: r, targetNodeId: o, targetFieldName: i, newFieldName: s, primaryKeyFieldName: l } = t.payload, a = r === "object-target";
      let c, d, u;
      a ? (c = n, d = o, u = i || "") : (c = o, d = n, u = r);
      const p = e.nodes.find((w) => w.id === c), h = e.nodes.find((w) => w.id === d);
      if (!p || !h) return;
      p.data.columns.push({
        name: s,
        type: "object",
        isPrimaryKey: !1,
        visible: !0,
        primaryKeyField: l
      });
      const m = h.data.columns.find((w) => w.name === u);
      m && (m.isForeignKey = !0);
      const x = `${d}-${u}-to-${c}-${s}`;
      e.edges.push({
        id: x,
        source: d,
        target: c,
        sourceHandle: u,
        targetHandle: s,
        type: "relationship",
        data: {
          relationshipType: "n-1",
          primaryKeyField: l,
          objectFieldName: s
        }
      });
    }
  }
}), {
  setNodes: Kp,
  setEdges: e4,
  addEdge: t4,
  onNodesChange: dR,
  onEdgesChange: fR,
  onConnect: n4,
  updateEdge: r4,
  addTable: gb,
  updateTable: af,
  deleteTable: o4,
  deleteElements: yb,
  addField: pR,
  updateField: Vl,
  deleteField: xb,
  reorderFields: Wp,
  toggleFieldVisibility: vb,
  resetSchema: i4,
  confirmLinkField: wb,
  confirmLinkObject: bb,
  updateLinkConnection: s4,
  confirmObjectConnection: l4
} = mb.actions, hR = mb.reducer, mR = {
  searchQuery: "",
  expandedNodes: [],
  draggedNodeId: null,
  dragOverNodeId: null,
  width: 320,
  isResizing: !1,
  isCollapsed: !1,
  editingNodeId: null,
  editName: "",
  menuOpenNodeId: null,
  deleteDialogNodeId: null,
  draggedFieldNodeId: null,
  draggedFieldIndex: null,
  dragOverFieldIndex: null
}, Sb = yr({
  name: "sidebar",
  initialState: mR,
  reducers: {
    setSidebarSearchQuery: (e, t) => {
      e.searchQuery = t.payload;
    },
    toggleSidebarNodeExpand: (e, t) => {
      const n = t.payload;
      e.expandedNodes.includes(n) ? e.expandedNodes = e.expandedNodes.filter((r) => r !== n) : e.expandedNodes.push(n);
    },
    setSidebarDraggedNodeId: (e, t) => {
      e.draggedNodeId = t.payload;
    },
    setSidebarDragOverNodeId: (e, t) => {
      e.dragOverNodeId = t.payload;
    },
    setSidebarWidth: (e, t) => {
      e.width = t.payload;
    },
    setIsSidebarResizing: (e, t) => {
      e.isResizing = t.payload;
    },
    setIsSidebarCollapsed: (e, t) => {
      e.isCollapsed = t.payload;
    },
    // Item UI Reducers
    setEditingNodeId: (e, t) => {
      e.editingNodeId = t.payload, t.payload === null && (e.editName = "");
    },
    setEditName: (e, t) => {
      e.editName = t.payload;
    },
    setMenuOpenNodeId: (e, t) => {
      e.menuOpenNodeId = t.payload;
    },
    setDeleteDialogNodeId: (e, t) => {
      e.deleteDialogNodeId = t.payload;
    },
    // Field DnD Reducers
    setSidebarFieldDragState: (e, t) => {
      e.draggedFieldNodeId = t.payload.nodeId, e.draggedFieldIndex = t.payload.index;
    },
    setSidebarFieldDragOverIndex: (e, t) => {
      e.dragOverFieldIndex = t.payload;
    }
  }
}), {
  setSidebarSearchQuery: gR,
  toggleSidebarNodeExpand: yR,
  setSidebarDraggedNodeId: Qg,
  setSidebarDragOverNodeId: qg,
  setSidebarWidth: Zg,
  setIsSidebarResizing: Jg,
  setIsSidebarCollapsed: Nb,
  setEditingNodeId: ey,
  setEditName: ty,
  setMenuOpenNodeId: ny,
  setDeleteDialogNodeId: gl,
  setSidebarFieldDragState: ry,
  setSidebarFieldDragOverIndex: oy
} = Sb.actions, xR = Sb.reducer;
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vR = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Eb = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wR = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bR = b.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...l
  }, a) => b.createElement(
    "svg",
    {
      ref: a,
      ...wR,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Eb("lucide", o),
      ...l
    },
    [
      ...s.map(([c, d]) => b.createElement(c, d)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = (e, t) => {
  const n = b.forwardRef(
    ({ className: r, ...o }, i) => b.createElement(bR, {
      ref: i,
      iconNode: t,
      className: Eb(`lucide-${vR(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SR = Pe("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = Pe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = Pe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NR = Pe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = Pe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ER = Pe("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _b = Pe("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fi = Pe("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = Pe("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = Pe("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = Pe("FileJson", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = Pe("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CR = Pe("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = Pe("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = Pe("Pen", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = Pe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _R = Pe("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tb = Pe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = Pe("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kR = Pe("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sy = Pe("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
function jb(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = jb(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ib() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = jb(e)) && (r && (r += " "), r += t);
  return r;
}
const Xp = "-", TR = (e) => {
  const t = IR(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(Xp);
      return l[0] === "" && l.length !== 1 && l.shift(), Pb(l, t) || jR(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const a = n[s] || [];
      return l && r[s] ? [...a, ...r[s]] : a;
    }
  };
}, Pb = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Pb(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Xp);
  return (s = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : s.classGroupId;
}, ly = /^\[(.+)\]$/, jR = (e) => {
  if (ly.test(e)) {
    const t = ly.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, IR = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return MR(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    ff(s, r, i, t);
  }), r;
}, ff = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : ay(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (PR(o)) {
        ff(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      ff(s, ay(t, i), n, r);
    });
  });
}, ay = (e, t) => {
  let n = e;
  return t.split(Xp).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, PR = (e) => e.isThemeGetter, MR = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
  return [n, o];
}) : e, AR = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, s) => {
    n.set(i, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    }
  };
}, Mb = "!", RR = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, s = (l) => {
    const a = [];
    let c = 0, d = 0, u;
    for (let w = 0; w < l.length; w++) {
      let g = l[w];
      if (c === 0) {
        if (g === o && (r || l.slice(w, w + i) === t)) {
          a.push(l.slice(d, w)), d = w + i;
          continue;
        }
        if (g === "/") {
          u = w;
          continue;
        }
      }
      g === "[" ? c++ : g === "]" && c--;
    }
    const p = a.length === 0 ? l : l.substring(d), h = p.startsWith(Mb), m = h ? p.substring(1) : p, x = u && u > d ? u - d : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: x
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: s
  }) : s;
}, DR = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, LR = (e) => ({
  cache: AR(e.cacheSize),
  parseClassName: RR(e),
  ...TR(e)
}), OR = /\s+/, FR = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(OR);
  let l = "";
  for (let a = s.length - 1; a >= 0; a -= 1) {
    const c = s[a], {
      modifiers: d,
      hasImportantModifier: u,
      baseClassName: p,
      maybePostfixModifierPosition: h
    } = n(c);
    let m = !!h, x = r(m ? p.substring(0, h) : p);
    if (!x) {
      if (!m) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (x = r(p), !x) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      m = !1;
    }
    const w = DR(d).join(":"), g = u ? w + Mb : w, v = g + x;
    if (i.includes(v))
      continue;
    i.push(v);
    const y = o(x, m);
    for (let S = 0; S < y.length; ++S) {
      const E = y[S];
      i.push(g + E);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function zR() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ab(t)) && (r && (r += " "), r += n);
  return r;
}
const Ab = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ab(e[r])) && (n && (n += " "), n += t);
  return n;
};
function $R(e, ...t) {
  let n, r, o, i = s;
  function s(a) {
    const c = t.reduce((d, u) => u(d), e());
    return n = LR(c), r = n.cache.get, o = n.cache.set, i = l, l(a);
  }
  function l(a) {
    const c = r(a);
    if (c)
      return c;
    const d = FR(a, n);
    return o(a, d), d;
  }
  return function() {
    return i(zR.apply(null, arguments));
  };
}
const ve = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Rb = /^\[(?:([a-z-]+):)?(.+)\]$/i, HR = /^\d+\/\d+$/, VR = /* @__PURE__ */ new Set(["px", "full", "screen"]), BR = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, UR = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, KR = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, WR = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, YR = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, bn = (e) => Io(e) || VR.has(e) || HR.test(e), Wn = (e) => ei(e, "length", tD), Io = (e) => !!e && !Number.isNaN(Number(e)), Pu = (e) => ei(e, "number", Io), gi = (e) => !!e && Number.isInteger(Number(e)), GR = (e) => e.endsWith("%") && Io(e.slice(0, -1)), le = (e) => Rb.test(e), Yn = (e) => BR.test(e), XR = /* @__PURE__ */ new Set(["length", "size", "percentage"]), QR = (e) => ei(e, XR, Db), qR = (e) => ei(e, "position", Db), ZR = /* @__PURE__ */ new Set(["image", "url"]), JR = (e) => ei(e, ZR, rD), eD = (e) => ei(e, "", nD), yi = () => !0, ei = (e, t, n) => {
  const r = Rb.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, tD = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  UR.test(e) && !KR.test(e)
), Db = () => !1, nD = (e) => WR.test(e), rD = (e) => YR.test(e), oD = () => {
  const e = ve("colors"), t = ve("spacing"), n = ve("blur"), r = ve("brightness"), o = ve("borderColor"), i = ve("borderRadius"), s = ve("borderSpacing"), l = ve("borderWidth"), a = ve("contrast"), c = ve("grayscale"), d = ve("hueRotate"), u = ve("invert"), p = ve("gap"), h = ve("gradientColorStops"), m = ve("gradientColorStopPositions"), x = ve("inset"), w = ve("margin"), g = ve("opacity"), v = ve("padding"), y = ve("saturate"), S = ve("scale"), E = ve("sepia"), C = ve("skew"), N = ve("space"), P = ve("translate"), A = () => ["auto", "contain", "none"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", le, t], M = () => [le, t], j = () => ["", bn, Wn], k = () => ["auto", Io, le], D = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], O = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T = () => ["", "0", le], F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [Io, le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [yi],
      spacing: [bn, Wn],
      blur: ["none", "", Yn, le],
      brightness: z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Yn, le],
      borderSpacing: M(),
      borderWidth: j(),
      contrast: z(),
      grayscale: T(),
      hueRotate: z(),
      invert: T(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [GR, Wn],
      inset: _(),
      margin: _(),
      opacity: z(),
      padding: M(),
      saturate: z(),
      scale: z(),
      sepia: T(),
      skew: z(),
      space: M(),
      translate: M()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", le]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Yn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...D(), le]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", gi, le]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: _()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: T()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: T()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", gi, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [yi]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", gi, le]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [yi]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [gi, le]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...I()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...I(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...I(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [N]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [N]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [le, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [le, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Yn]
        }, Yn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [le, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Yn, Wn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pu]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yi]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Io, Pu]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", bn, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [g]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [g]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", bn, Wn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", bn, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", le]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [g]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...D(), qR]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", QR]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, JR]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [g]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...R(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [g]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: R()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...R()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [bn, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [bn, Wn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: j()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [g]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [bn, Wn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Yn, eD]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [yi]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...O(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": O()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [a]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Yn, le]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [a]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: z()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", le]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: z()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [gi, le]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [P]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [P]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", le]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [bn, Wn, Pu]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, iD = /* @__PURE__ */ $R(oD);
function Z(...e) {
  return iD(Ib(e));
}
const ht = b.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.jsx(
    "input",
    {
      type: t,
      className: Z(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
ht.displayName = "Input";
const cy = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, uy = Ib, sD = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return uy(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const d = n == null ? void 0 : n[c], u = i == null ? void 0 : i[c];
    if (d === null) return null;
    const p = cy(d) || cy(u);
    return o[c][p];
  }), l = n && Object.entries(n).reduce((c, d) => {
    let [u, p] = d;
    return p === void 0 || (c[u] = p), c;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: u, className: p, ...h } = d;
    return Object.entries(h).every((m) => {
      let [x, w] = m;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...l
      }[x]) : {
        ...i,
        ...l
      }[x] === w;
    }) ? [
      ...c,
      u,
      p
    ] : c;
  }, []);
  return uy(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, lD = sD(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ie = b.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => /* @__PURE__ */ f.jsx(
    "button",
    {
      className: Z(lD({ variant: t, size: n, className: e })),
      ref: i,
      ...o
    }
  )
);
Ie.displayName = "Button";
const aD = {
  sidebarOpen: !0,
  selectedNodeId: null,
  isAddTableDialogOpen: !1,
  linkFieldDialog: {
    isOpen: !1,
    sourceNodeId: null
  }
}, Lb = yr({
  name: "ui",
  initialState: aD,
  reducers: {
    toggleSidebar: (e) => {
      e.sidebarOpen = !e.sidebarOpen;
    },
    // Dialog Actions
    setAddTableDialogOpen: (e, t) => {
      e.isAddTableDialogOpen = t.payload;
    },
    openLinkFieldDialog: (e, t) => {
      e.linkFieldDialog.isOpen = !0, e.linkFieldDialog.sourceNodeId = t.payload, e.linkFieldDialog.isEditMode = !1, e.linkFieldDialog.initialValues = void 0;
    },
    openEditLinkFieldDialog: (e, t) => {
      e.linkFieldDialog.isOpen = !0, e.linkFieldDialog.sourceNodeId = t.payload.sourceNodeId, e.linkFieldDialog.isEditMode = !0, e.linkFieldDialog.fieldIndex = t.payload.fieldIndex, e.linkFieldDialog.initialValues = t.payload.initialValues;
    },
    openLinkFieldDialogWithValues: (e, t) => {
      e.linkFieldDialog.isOpen = !0, e.linkFieldDialog.sourceNodeId = t.payload.sourceNodeId, e.linkFieldDialog.isEditMode = !1, e.linkFieldDialog.initialValues = {
        fieldName: "",
        ...t.payload.initialValues
      };
    },
    closeLinkFieldDialog: (e) => {
      e.linkFieldDialog.isOpen = !1, e.linkFieldDialog.sourceNodeId = null, e.linkFieldDialog.isEditMode = !1, e.linkFieldDialog.initialValues = void 0;
    }
  }
}), {
  toggleSidebar: a4,
  setAddTableDialogOpen: Ob,
  openLinkFieldDialog: Qp,
  openEditLinkFieldDialog: cD,
  openLinkFieldDialogWithValues: uD,
  closeLinkFieldDialog: dy
} = Lb.actions, dD = Lb.reducer, Fb = (e) => e.map((o, i) => {
  const s = Math.floor(i / 3), l = i % 3;
  return {
    ...o,
    position: {
      x: l * 400,
      y: s * 300
    },
    // Update version to force redraw if needed, though position change usually triggers it
    data: {
      ...o.data,
      _version: Date.now()
    }
  };
}), It = {
  UNDO: "@@redux-undo/UNDO",
  REDO: "@@redux-undo/REDO",
  JUMP_TO_FUTURE: "@@redux-undo/JUMP_TO_FUTURE",
  JUMP_TO_PAST: "@@redux-undo/JUMP_TO_PAST",
  JUMP: "@@redux-undo/JUMP",
  CLEAR_HISTORY: "@@redux-undo/CLEAR_HISTORY"
}, Cr = {
  undo() {
    return { type: It.UNDO };
  },
  redo() {
    return { type: It.REDO };
  },
  jumpToFuture(e) {
    return { type: It.JUMP_TO_FUTURE, index: e };
  },
  jumpToPast(e) {
    return { type: It.JUMP_TO_PAST, index: e };
  },
  jump(e) {
    return { type: It.JUMP, index: e };
  },
  clearHistory() {
    return { type: It.CLEAR_HISTORY };
  }
};
function pf(e, t = []) {
  return Array.isArray(e) ? e : typeof e == "string" ? [e] : t;
}
function fD(e) {
  return typeof e.present < "u" && typeof e.future < "u" && typeof e.past < "u" && Array.isArray(e.future) && Array.isArray(e.past);
}
function pD(e) {
  const t = pf(e);
  return (n) => t.indexOf(n.type) < 0;
}
function Dr(e, t, n, r = null) {
  return {
    past: e,
    present: t,
    future: n,
    group: r,
    _latestUnfiltered: t,
    index: e.length,
    limit: e.length + n.length + 1
  };
}
let Ic, Pt;
const hf = {
  prevState: "#9E9E9E",
  action: "#03A9F4",
  nextState: "#4CAF50"
};
function hD() {
  Pt = {
    header: [],
    prev: [],
    action: [],
    next: [],
    msgs: []
  };
}
function mD() {
  const { header: e, prev: t, next: n, action: r, msgs: o } = Pt;
  console.group ? (console.groupCollapsed(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...o), console.groupEnd()) : (console.log(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...o));
}
function mf(e, t, n) {
  return [
    `%c${e}`,
    `color: ${t}; font-weight: bold`,
    n
  ];
}
function gD(e, t) {
  hD(), Ic && (console.group ? (Pt.header = ["%credux-undo", "font-style: italic", "action", e.type], Pt.action = mf("action", hf.action, e), Pt.prev = mf("prev history", hf.prevState, t)) : (Pt.header = ["redux-undo action", e.type], Pt.action = ["action", e], Pt.prev = ["prev history", t]));
}
function zt(e) {
  Ic && (console.group ? Pt.next = mf("next history", hf.nextState, e) : Pt.next = ["next history", e], mD());
}
function Qe(...e) {
  Ic && (Pt.msgs = Pt.msgs.concat([...e, `
`]));
}
function yD(e) {
  Ic = e;
}
function Mu(e, t) {
  const n = Dr([], e, []);
  return t && (n._latestUnfiltered = null), n;
}
function xD(e, t, n, r) {
  const o = e.past.length + 1;
  Qe("inserting", t), Qe("new free: ", n - o);
  const { past: i, _latestUnfiltered: s } = e, l = n && n <= o, a = i.slice(l ? 1 : 0), c = s != null ? [
    ...a,
    s
  ] : a;
  return Dr(c, t, [], r);
}
function zb(e, t) {
  if (t < 0 || t >= e.future.length)
    return e;
  const { past: n, future: r, _latestUnfiltered: o } = e, i = [...n, o, ...r.slice(0, t)], s = r[t], l = r.slice(t + 1);
  return Dr(i, s, l);
}
function $b(e, t) {
  if (t < 0 || t >= e.past.length)
    return e;
  const { past: n, future: r, _latestUnfiltered: o } = e, i = n.slice(0, t), s = [...n.slice(t + 1), o, ...r], l = n[t];
  return Dr(i, l, s);
}
function Au(e, t) {
  return t > 0 ? zb(e, t - 1) : t < 0 ? $b(e, e.past.length + t) : e;
}
function vD(e, t) {
  return t.indexOf(e) > -1 ? e : !e;
}
function wD(e, t = {}) {
  yD(t.debug);
  const n = {
    limit: void 0,
    filter: () => !0,
    groupBy: () => null,
    undoType: It.UNDO,
    redoType: It.REDO,
    jumpToPastType: It.JUMP_TO_PAST,
    jumpToFutureType: It.JUMP_TO_FUTURE,
    jumpType: It.JUMP,
    neverSkipReducer: !1,
    ignoreInitialState: !1,
    syncFilter: !1,
    ...t,
    initTypes: pf(t.initTypes, ["@@redux-undo/INIT"]),
    clearHistoryType: pf(
      t.clearHistoryType,
      [It.CLEAR_HISTORY]
    )
  }, r = n.neverSkipReducer ? (i, s, ...l) => ({
    ...i,
    present: e(i.present, s, ...l)
  }) : (i) => i;
  let o;
  return (i = o, s = {}, ...l) => {
    gD(s, i);
    let a = i;
    if (!o)
      if (Qe("history is uninitialized"), i === void 0) {
        const d = e(i, { type: "@@redux-undo/CREATE_HISTORY" }, ...l);
        return a = Mu(
          d,
          n.ignoreInitialState
        ), Qe("do not set initialState on probe actions"), zt(a), a;
      } else
        fD(i) ? (a = o = n.ignoreInitialState ? i : Dr(
          i.past,
          i.present,
          i.future
        ), Qe(
          "initialHistory initialized: initialState is a history",
          o
        )) : (a = o = Mu(
          i,
          n.ignoreInitialState
        ), Qe(
          "initialHistory initialized: initialState is not a history",
          o
        ));
    let c;
    switch (s.type) {
      case void 0:
        return a;
      case n.undoType:
        return c = Au(a, -1), Qe("perform undo"), zt(c), r(c, s, ...l);
      case n.redoType:
        return c = Au(a, 1), Qe("perform redo"), zt(c), r(c, s, ...l);
      case n.jumpToPastType:
        return c = $b(a, s.index), Qe(`perform jumpToPast to ${s.index}`), zt(c), r(c, s, ...l);
      case n.jumpToFutureType:
        return c = zb(a, s.index), Qe(`perform jumpToFuture to ${s.index}`), zt(c), r(c, s, ...l);
      case n.jumpType:
        return c = Au(a, s.index), Qe(`perform jump to ${s.index}`), zt(c), r(c, s, ...l);
      case vD(s.type, n.clearHistoryType):
        return c = Mu(a.present, n.ignoreInitialState), Qe("perform clearHistory"), zt(c), r(c, s, ...l);
      default:
        if (c = e(
          a.present,
          s,
          ...l
        ), n.initTypes.some((u) => u === s.type))
          return Qe("reset history due to init action"), zt(o), o;
        if (a._latestUnfiltered === c)
          return a;
        if (typeof n.filter == "function" && !n.filter(
          s,
          c,
          a
        )) {
          const u = Dr(
            a.past,
            c,
            a.future,
            a.group
          );
          return n.syncFilter || (u._latestUnfiltered = a._latestUnfiltered), Qe("filter ignored action, not storing it in past"), zt(u), u;
        }
        const d = n.groupBy(s, c, a);
        if (d != null && d === a.group) {
          const u = Dr(
            a.past,
            c,
            a.future,
            a.group
          );
          return Qe("groupBy grouped the action with the previous action"), zt(u), u;
        }
        return a = xD(a, c, n.limit, d), Qe("inserted new state into history"), zt(a), a;
    }
  };
}
function bD() {
  const e = Nt(), t = xe((l) => l.sidebar.searchQuery), n = xe((l) => l.schema.present.nodes), r = xe((l) => l.schema.past.length > 0), o = xe((l) => l.schema.future.length > 0), i = () => {
    const l = Fb(n);
    e(Kp(l));
  }, s = () => {
    e(Nb(!0));
  };
  return b.useEffect(() => {
    const l = (a) => {
      a.target instanceof HTMLInputElement || a.target instanceof HTMLTextAreaElement || ((a.ctrlKey || a.metaKey) && a.key.toLowerCase() === "z" && (a.shiftKey ? e(Cr.redo()) : e(Cr.undo()), a.preventDefault()), (a.ctrlKey || a.metaKey) && a.key.toLowerCase() === "y" && (e(Cr.redo()), a.preventDefault()));
    };
    return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
  }, [e]), /* @__PURE__ */ f.jsxs("div", { className: "p-4 border-b border-gray-200 space-y-3 bg-white sticky top-0 z-10", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ f.jsx("h2", { className: "text-lg font-bold text-gray-900 flex items-center gap-2", children: /* @__PURE__ */ f.jsx("span", { className: "hidden xl:inline", children: "Tables" }) }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ f.jsx(
          Ie,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7",
            disabled: !r,
            onClick: () => e(Cr.undo()),
            title: "Undo (Ctrl+Z)",
            children: /* @__PURE__ */ f.jsx(kR, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ f.jsx(
          Ie,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7",
            disabled: !o,
            onClick: () => e(Cr.redo()),
            title: "Redo (Ctrl+Y)",
            children: /* @__PURE__ */ f.jsx(_R, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ f.jsx("div", { className: "w-px h-4 bg-gray-300 mx-1" }),
        /* @__PURE__ */ f.jsx(
          Ie,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 text-gray-600 hover:text-gray-900",
            onClick: i,
            title: "Auto Layout",
            children: /* @__PURE__ */ f.jsx(CR, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ f.jsx("div", { className: "w-px h-4 bg-gray-300 mx-1" }),
        /* @__PURE__ */ f.jsx(
          Ie,
          {
            variant: "ghost",
            size: "icon",
            onClick: () => e(Ob(!0)),
            className: "h-7 w-7 text-blue-600 hover:text-blue-700 hover:bg-blue-50",
            title: "Manage Schema",
            children: /* @__PURE__ */ f.jsx(As, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ f.jsx("div", { className: "w-px h-4 bg-gray-300 mx-1" }),
        /* @__PURE__ */ f.jsx(
          Ie,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 text-gray-500 hover:text-gray-900",
            onClick: s,
            title: "Shrink",
            children: /* @__PURE__ */ f.jsx(NR, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ f.jsx(Tb, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-gray-400" }),
      /* @__PURE__ */ f.jsx(
        ht,
        {
          placeholder: "Search tables...",
          value: t,
          onChange: (l) => e(gR(l.target.value)),
          className: "pl-8 h-8 text-xs bg-gray-50 border-gray-200 text-gray-900 focus:bg-white placeholder:text-gray-500"
        }
      )
    ] })
  ] });
}
const Hb = (e) => (t, n) => {
  const r = n(), { edges: o } = r.schema.present, i = /* @__PURE__ */ new Set(), s = [e];
  for (; s.length > 0; ) {
    const a = s.shift();
    i.has(a) || (i.add(a), o.filter((d) => d.source === a).forEach((d) => {
      s.push(d.target);
    }));
  }
  const l = o.filter((a) => i.has(a.source) || i.has(a.target)).map((a) => a.id);
  t(yb({
    nodeIds: Array.from(i),
    edgeIds: l
  }));
}, Vb = (e, t) => (n, r) => {
  const o = r(), { nodes: i, edges: s } = o.schema.present, l = i.find((w) => w.id === e);
  if (!l) return;
  const a = l.data.columns[t];
  if (!a) return;
  const c = s.filter(
    (w) => {
      var g;
      return w.source === e && w.sourceHandle === a.name || w.source === e && ((g = w.data) == null ? void 0 : g.objectFieldName) === a.name;
    }
  ), d = c.map((w) => w.target), u = /* @__PURE__ */ new Set(), p = [...d];
  for (; p.length > 0; ) {
    const w = p.shift();
    u.has(w) || (u.add(w), s.filter((v) => v.source === w).map((v) => v.target).forEach((v) => p.push(v)));
  }
  const h = s.filter((w) => u.has(w.source) || u.has(w.target)).map((w) => w.id), m = c.map((w) => w.id), x = Array.from(/* @__PURE__ */ new Set([...h, ...m]));
  (u.size > 0 || x.length > 0) && n(yb({
    nodeIds: Array.from(u),
    edgeIds: x
  })), n(xb({ nodeId: e, fieldIndex: t, skipRecursive: !0 }));
};
function SD({ nodeId: e, fields: t, rootNodeId: n, isReadOnly: r }) {
  const o = Nt(), i = xe((v) => e ? v.schema.present.nodes.find((y) => y.id === e) : null), [s, l] = b.useState(null), [a, c] = b.useState(null);
  if (!i && !t) return null;
  const d = t || (i ? i.data.columns : []), u = !!t, p = u ? "Inline Structure" : i == null ? void 0 : i.data.label, h = u ? n || "" : (i == null ? void 0 : i.id) || "", m = u || r, x = (v, y) => {
    l(y), v.dataTransfer.effectAllowed = "move", v.stopPropagation();
  }, w = (v, y) => {
    v.preventDefault(), v.stopPropagation(), s !== null && s !== y && c(y);
  }, g = (v, y) => {
    v.preventDefault(), v.stopPropagation(), !m && h && s !== null && s !== y && o(Wp({ nodeId: h, oldIndex: s, newIndex: y })), l(null), c(null);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "pl-3 pr-0 ml-3 border-l-2 border-dashed border-gray-300 space-y-1 relative my-2", children: [
    /* @__PURE__ */ f.jsx("div", { className: "absolute -left-[2px] -top-3 w-3 h-4 border-l-2 border-b-2 border-dashed border-gray-300 rounded-bl-lg pointer-events-none" }),
    /* @__PURE__ */ f.jsxs("div", { className: "text-[10px] uppercase font-black text-gray-400 mb-2 pl-2 flex items-center gap-1.5 tracking-wider select-none", children: [
      /* @__PURE__ */ f.jsx("span", { className: "bg-gray-100 text-gray-500 px-1 py-0.5 rounded border border-gray-200", children: u ? "INLINE" : "REF OBJECT" }),
      p
    ] }),
    d.map((v, y) => /* @__PURE__ */ f.jsx(
      IS,
      {
        nodeId: h,
        field: v,
        index: y,
        onDragStart: x,
        onDragOver: w,
        onDrop: g,
        isDragging: s === y,
        isDragOver: a === y,
        isReadOnly: m
      },
      `${h || "inline"}-${y}`
    )),
    !m && h && /* @__PURE__ */ f.jsxs(
      "button",
      {
        onClick: () => o(Qp(h)),
        className: "w-full mt-2 py-1.5 text-[10px] border border-dashed border-gray-300 text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 rounded flex items-center justify-center gap-1 transition-colors",
        children: [
          /* @__PURE__ */ f.jsx(As, { className: "w-3 h-3" }),
          " Add Column to ",
          p
        ]
      }
    )
  ] });
}
class ND {
  constructor() {
    zs(this, "listeners", {});
  }
  on(t, n) {
    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(n);
  }
  off(t, n) {
    this.listeners[t] && (this.listeners[t] = this.listeners[t].filter((r) => r !== n));
  }
  emit(t, n) {
    this.listeners[t] && this.listeners[t].forEach((r) => r(n));
  }
}
const re = new ND(), oe = {
  // Table Actions
  TABLE_ADD: "table:add",
  TABLE_UPDATE: "table:update",
  TABLE_DELETE: "table:delete",
  TABLE_FOCUS: "table:focus",
  // Previously "flyToNode"
  // Field Actions
  FIELD_ADD: "field:add",
  FIELD_UPDATE: "field:update",
  FIELD_DELETE: "field:delete",
  FIELD_REORDER: "field:reorder",
  FIELD_TOGGLE_VISIBILITY: "field:toggle_visibility",
  // Global Actions
  SCHEMA_AUTO_LAYOUT: "schema:auto_layout",
  SCHEMA_UNDO: "schema:undo",
  SCHEMA_REDO: "schema:redo",
  RELATIONSHIP_ADD: "relationship:add",
  LINK_FIELD_OPEN: "link_field:open",
  TABLE_TOGGLE_VISIBILITY: "table:toggle_visibility"
}, qp = b.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), ti = ({ open: e = !1, onOpenChange: t, children: n }) => /* @__PURE__ */ f.jsx(qp.Provider, { value: { open: e, onOpenChange: t || (() => {
}) }, children: n }), Bb = b.forwardRef(
  ({ children: e, onClick: t, asChild: n = !1, ...r }, o) => {
    var l;
    const { onOpenChange: i } = b.useContext(qp), s = (a) => {
      i(!0), t == null || t(a);
    };
    if (n && b.isValidElement(e)) {
      const a = e, c = (l = a.props) == null ? void 0 : l.onClick;
      return b.cloneElement(a, {
        ...r,
        onClick: (d) => {
          i(!0), c == null || c(d), t == null || t(d);
        },
        ref: o
      });
    }
    return /* @__PURE__ */ f.jsx(
      "button",
      {
        ref: o,
        onClick: s,
        ...r,
        children: e
      }
    );
  }
);
Bb.displayName = "DialogTrigger";
const Xr = b.forwardRef(
  ({ className: e, children: t, ...n }, r) => {
    const { open: o, onOpenChange: i } = b.useContext(qp);
    return o ? Ps.createPortal(
      /* @__PURE__ */ f.jsxs(
        "div",
        {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          onClick: () => i(!1),
          children: [
            /* @__PURE__ */ f.jsx(
              "div",
              {
                ref: r,
                className: Z(
                  "relative z-50 w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg",
                  e
                ),
                onClick: (s) => s.stopPropagation(),
                ...n,
                children: t
              }
            ),
            /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 bg-black/50" })
          ]
        }
      ),
      document.body
    ) : null;
  }
);
Xr.displayName = "DialogContent";
const Qr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: Z(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Qr.displayName = "DialogHeader";
const qr = b.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  "h2",
  {
    ref: n,
    className: Z(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
qr.displayName = "DialogTitle";
const ni = b.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  "p",
  {
    ref: n,
    className: Z("text-sm text-muted-foreground", e),
    ...t
  }
));
ni.displayName = "DialogDescription";
function ae(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function fy(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Pc(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = fy(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : fy(e[o], null);
        }
      };
  };
}
function Re(...e) {
  return b.useCallback(Pc(...e), e);
}
function ri(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = b.createContext(s), a = n.length;
    n = [...n, s];
    const c = (u) => {
      var g;
      const { scope: p, children: h, ...m } = u, x = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[a]) || l, w = b.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ f.jsx(x.Provider, { value: w, children: h });
    };
    c.displayName = i + "Provider";
    function d(u, p) {
      var x;
      const h = ((x = p == null ? void 0 : p[e]) == null ? void 0 : x[a]) || l, m = b.useContext(h);
      if (m) return m;
      if (s !== void 0) return s;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return [c, d];
  }
  const o = () => {
    const i = n.map((s) => b.createContext(s));
    return function(l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: a } }),
        [l, a]
      );
    };
  };
  return o.scopeName = e, [r, ED(o, ...t)];
}
function ED(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((l, { useScope: a, scopeName: c }) => {
        const u = a(i)[`__scope${c}`];
        return { ...l, ...u };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var On = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
}, CD = i0[" useInsertionEffect ".trim().toString()] || On;
function Ub({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = _D({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, a = l ? e : o;
  {
    const d = b.useRef(e !== void 0);
    b.useEffect(() => {
      const u = d.current;
      u !== l && console.warn(
        `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = l;
    }, [l, r]);
  }
  const c = b.useCallback(
    (d) => {
      var u;
      if (l) {
        const p = kD(d) ? d(e) : d;
        p !== e && ((u = s.current) == null || u.call(s, p));
      } else
        i(d);
    },
    [l, e, i, s]
  );
  return [a, c];
}
function _D({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = b.useState(e), o = b.useRef(n), i = b.useRef(t);
  return CD(() => {
    i.current = t;
  }, [t]), b.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function kD(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function La(e) {
  const t = /* @__PURE__ */ TD(e), n = b.forwardRef((r, o) => {
    const { children: i, ...s } = r, l = b.Children.toArray(i), a = l.find(ID);
    if (a) {
      const c = a.props.children, d = l.map((u) => u === a ? b.Children.count(c) > 1 ? b.Children.only(null) : b.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ f.jsx(t, { ...s, ref: o, children: b.isValidElement(c) ? b.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ f.jsx(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function TD(e) {
  const t = b.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (b.isValidElement(o)) {
      const s = MD(o), l = PD(i, o.props);
      return o.type !== b.Fragment && (l.ref = r ? Pc(r, s) : s), b.cloneElement(o, l);
    }
    return b.Children.count(o) > 1 ? b.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var jD = Symbol("radix.slottable");
function ID(e) {
  return b.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === jD;
}
function PD(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      const a = i(...l);
      return o(...l), a;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function MD(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var AD = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Le = AD.reduce((e, t) => {
  const n = /* @__PURE__ */ La(`Primitive.${t}`), r = b.forwardRef((o, i) => {
    const { asChild: s, ...l } = o, a = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f.jsx(a, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Kb(e, t) {
  e && Ps.flushSync(() => e.dispatchEvent(t));
}
function Wb(e) {
  const t = e + "CollectionProvider", [n, r] = ri(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (x) => {
    const { scope: w, children: g } = x, v = Sn.useRef(null), y = Sn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f.jsx(o, { scope: w, itemMap: y, collectionRef: v, children: g });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", a = /* @__PURE__ */ La(l), c = Sn.forwardRef(
    (x, w) => {
      const { scope: g, children: v } = x, y = i(l, g), S = Re(w, y.collectionRef);
      return /* @__PURE__ */ f.jsx(a, { ref: S, children: v });
    }
  );
  c.displayName = l;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", p = /* @__PURE__ */ La(d), h = Sn.forwardRef(
    (x, w) => {
      const { scope: g, children: v, ...y } = x, S = Sn.useRef(null), E = Re(w, S), C = i(d, g);
      return Sn.useEffect(() => (C.itemMap.set(S, { ref: S, ...y }), () => void C.itemMap.delete(S))), /* @__PURE__ */ f.jsx(p, { [u]: "", ref: E, children: v });
    }
  );
  h.displayName = d;
  function m(x) {
    const w = i(e + "CollectionConsumer", x);
    return Sn.useCallback(() => {
      const v = w.collectionRef.current;
      if (!v) return [];
      const y = Array.from(v.querySelectorAll(`[${u}]`));
      return Array.from(w.itemMap.values()).sort(
        (C, N) => y.indexOf(C.ref.current) - y.indexOf(N.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: h },
    m,
    r
  ];
}
var RD = b.createContext(void 0);
function Zp(e) {
  const t = b.useContext(RD);
  return e || t || "ltr";
}
function Ze(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function DD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e);
  b.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var LD = "DismissableLayer", gf = "dismissableLayer.update", OD = "dismissableLayer.pointerDownOutside", FD = "dismissableLayer.focusOutside", py, Yb = b.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Gb = b.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: l,
      ...a
    } = e, c = b.useContext(Yb), [d, u] = b.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = b.useState({}), m = Re(t, (N) => u(N)), x = Array.from(c.layers), [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), g = x.indexOf(w), v = d ? x.indexOf(d) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, S = v >= g, E = HD((N) => {
      const P = N.target, A = [...c.branches].some((L) => L.contains(P));
      !S || A || (o == null || o(N), s == null || s(N), N.defaultPrevented || l == null || l());
    }, p), C = VD((N) => {
      const P = N.target;
      [...c.branches].some((L) => L.contains(P)) || (i == null || i(N), s == null || s(N), N.defaultPrevented || l == null || l());
    }, p);
    return DD((N) => {
      v === c.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && l && (N.preventDefault(), l()));
    }, p), b.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (py = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), hy(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = py);
        };
    }, [d, p, n, c]), b.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), hy());
    }, [d, c]), b.useEffect(() => {
      const N = () => h({});
      return document.addEventListener(gf, N), () => document.removeEventListener(gf, N);
    }, []), /* @__PURE__ */ f.jsx(
      Le.div,
      {
        ...a,
        ref: m,
        style: {
          pointerEvents: y ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ae(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ae(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ae(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Gb.displayName = LD;
var zD = "DismissableLayerBranch", $D = b.forwardRef((e, t) => {
  const n = b.useContext(Yb), r = b.useRef(null), o = Re(t, r);
  return b.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ f.jsx(Le.div, { ...e, ref: o });
});
$D.displayName = zD;
function HD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e), r = b.useRef(!1), o = b.useRef(() => {
  });
  return b.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let a = function() {
          Xb(
            OD,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, { once: !0 })) : a();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function VD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e), r = b.useRef(!1);
  return b.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Xb(FD, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function hy() {
  const e = new CustomEvent(gf);
  document.dispatchEvent(e);
}
function Xb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Kb(o, i) : o.dispatchEvent(i);
}
var Ru = 0;
function BD() {
  b.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? my()), document.body.insertAdjacentElement("beforeend", e[1] ?? my()), Ru++, () => {
      Ru === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ru--;
    };
  }, []);
}
function my() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Du = "focusScope.autoFocusOnMount", Lu = "focusScope.autoFocusOnUnmount", gy = { bubbles: !1, cancelable: !0 }, UD = "FocusScope", Qb = b.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [l, a] = b.useState(null), c = Ze(o), d = Ze(i), u = b.useRef(null), p = Re(t, (x) => a(x)), h = b.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  b.useEffect(() => {
    if (r) {
      let x = function(y) {
        if (h.paused || !l) return;
        const S = y.target;
        l.contains(S) ? u.current = S : Gn(u.current, { select: !0 });
      }, w = function(y) {
        if (h.paused || !l) return;
        const S = y.relatedTarget;
        S !== null && (l.contains(S) || Gn(u.current, { select: !0 }));
      }, g = function(y) {
        if (document.activeElement === document.body)
          for (const E of y)
            E.removedNodes.length > 0 && Gn(l);
      };
      document.addEventListener("focusin", x), document.addEventListener("focusout", w);
      const v = new MutationObserver(g);
      return l && v.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", x), document.removeEventListener("focusout", w), v.disconnect();
      };
    }
  }, [r, l, h.paused]), b.useEffect(() => {
    if (l) {
      xy.add(h);
      const x = document.activeElement;
      if (!l.contains(x)) {
        const g = new CustomEvent(Du, gy);
        l.addEventListener(Du, c), l.dispatchEvent(g), g.defaultPrevented || (KD(QD(qb(l)), { select: !0 }), document.activeElement === x && Gn(l));
      }
      return () => {
        l.removeEventListener(Du, c), setTimeout(() => {
          const g = new CustomEvent(Lu, gy);
          l.addEventListener(Lu, d), l.dispatchEvent(g), g.defaultPrevented || Gn(x ?? document.body, { select: !0 }), l.removeEventListener(Lu, d), xy.remove(h);
        }, 0);
      };
    }
  }, [l, c, d, h]);
  const m = b.useCallback(
    (x) => {
      if (!n && !r || h.paused) return;
      const w = x.key === "Tab" && !x.altKey && !x.ctrlKey && !x.metaKey, g = document.activeElement;
      if (w && g) {
        const v = x.currentTarget, [y, S] = WD(v);
        y && S ? !x.shiftKey && g === S ? (x.preventDefault(), n && Gn(y, { select: !0 })) : x.shiftKey && g === y && (x.preventDefault(), n && Gn(S, { select: !0 })) : g === v && x.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ f.jsx(Le.div, { tabIndex: -1, ...s, ref: p, onKeyDown: m });
});
Qb.displayName = UD;
function KD(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Gn(r, { select: t }), document.activeElement !== n) return;
}
function WD(e) {
  const t = qb(e), n = yy(t, e), r = yy(t.reverse(), e);
  return [n, r];
}
function qb(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function yy(e, t) {
  for (const n of e)
    if (!YD(n, { upTo: t })) return n;
}
function YD(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function GD(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Gn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && GD(e) && t && e.select();
  }
}
var xy = XD();
function XD() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = vy(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = vy(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function vy(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function QD(e) {
  return e.filter((t) => t.tagName !== "A");
}
var qD = i0[" useId ".trim().toString()] || (() => {
}), ZD = 0;
function yf(e) {
  const [t, n] = b.useState(qD());
  return On(() => {
    n((r) => r ?? String(ZD++));
  }, [e]), t ? `radix-${t}` : "";
}
const JD = ["top", "right", "bottom", "left"], mr = Math.min, mt = Math.max, Oa = Math.round, yl = Math.floor, fn = (e) => ({
  x: e,
  y: e
}), eL = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, tL = {
  start: "end",
  end: "start"
};
function xf(e, t, n) {
  return mt(e, mr(t, n));
}
function Fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zn(e) {
  return e.split("-")[0];
}
function oi(e) {
  return e.split("-")[1];
}
function Jp(e) {
  return e === "x" ? "y" : "x";
}
function eh(e) {
  return e === "y" ? "height" : "width";
}
const nL = /* @__PURE__ */ new Set(["top", "bottom"]);
function an(e) {
  return nL.has(zn(e)) ? "y" : "x";
}
function th(e) {
  return Jp(an(e));
}
function rL(e, t, n) {
  n === void 0 && (n = !1);
  const r = oi(e), o = th(e), i = eh(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Fa(s)), [s, Fa(s)];
}
function oL(e) {
  const t = Fa(e);
  return [vf(e), t, vf(t)];
}
function vf(e) {
  return e.replace(/start|end/g, (t) => tL[t]);
}
const wy = ["left", "right"], by = ["right", "left"], iL = ["top", "bottom"], sL = ["bottom", "top"];
function lL(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? by : wy : t ? wy : by;
    case "left":
    case "right":
      return t ? iL : sL;
    default:
      return [];
  }
}
function aL(e, t, n, r) {
  const o = oi(e);
  let i = lL(zn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(vf)))), i;
}
function Fa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => eL[t]);
}
function cL(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zb(e) {
  return typeof e != "number" ? cL(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function za(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Sy(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = an(t), s = th(t), l = eh(s), a = zn(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
  let h;
  switch (a) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (oi(t)) {
    case "start":
      h[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const uL = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = Sy(c, r, a), p = r, h = {}, m = 0;
  for (let x = 0; x < l.length; x++) {
    const {
      name: w,
      fn: g
    } = l[x], {
      x: v,
      y,
      data: S,
      reset: E
    } = await g({
      x: d,
      y: u,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = v ?? d, u = y ?? u, h = {
      ...h,
      [w]: {
        ...h[w],
        ...S
      }
    }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (c = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: u
    } = Sy(c, p, a)), x = -1);
  }
  return {
    x: d,
    y: u,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function hs(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: l,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Fn(t, e), m = Zb(h), w = l[p ? u === "floating" ? "reference" : "floating" : u], g = za(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: a
  })), v = u === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), S = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = za(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: v,
    offsetParent: y,
    strategy: a
  }) : v);
  return {
    top: (g.top - E.top + m.top) / S.y,
    bottom: (E.bottom - g.bottom + m.bottom) / S.y,
    left: (g.left - E.left + m.left) / S.x,
    right: (E.right - g.right + m.right) / S.x
  };
}
const dL = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: l,
      middlewareData: a
    } = t, {
      element: c,
      padding: d = 0
    } = Fn(e, t) || {};
    if (c == null)
      return {};
    const u = Zb(d), p = {
      x: n,
      y: r
    }, h = th(o), m = eh(h), x = await s.getDimensions(c), w = h === "y", g = w ? "top" : "left", v = w ? "bottom" : "right", y = w ? "clientHeight" : "clientWidth", S = i.reference[m] + i.reference[h] - p[h] - i.floating[m], E = p[h] - i.reference[h], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let N = C ? C[y] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(C))) && (N = l.floating[y] || i.floating[m]);
    const P = S / 2 - E / 2, A = N / 2 - x[m] / 2 - 1, L = mr(u[g], A), _ = mr(u[v], A), M = L, j = N - x[m] - _, k = N / 2 - x[m] / 2 + P, D = xf(M, k, j), R = !a.arrow && oi(o) != null && k !== D && i.reference[m] / 2 - (k < M ? L : _) - x[m] / 2 < 0, O = R ? k < M ? k - M : k - j : 0;
    return {
      [h]: p[h] + O,
      data: {
        [h]: D,
        centerOffset: k - D - O,
        ...R && {
          alignmentOffset: O
        }
      },
      reset: R
    };
  }
}), fL = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: l,
        platform: a,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: x = !0,
        ...w
      } = Fn(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = zn(o), v = an(l), y = zn(l) === l, S = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), E = p || (y || !x ? [Fa(l)] : oL(l)), C = m !== "none";
      !p && C && E.push(...aL(l, x, m, S));
      const N = [l, ...E], P = await hs(t, w), A = [];
      let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && A.push(P[g]), u) {
        const k = rL(o, s, S);
        A.push(P[k[0]], P[k[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: A
      }], !A.every((k) => k <= 0)) {
        var _, M;
        const k = (((_ = i.flip) == null ? void 0 : _.index) || 0) + 1, D = N[k];
        if (D && (!(u === "alignment" ? v !== an(D) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        L.every((I) => an(I.placement) === v ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: k,
              overflows: L
            },
            reset: {
              placement: D
            }
          };
        let R = (M = L.filter((O) => O.overflows[0] <= 0).sort((O, I) => O.overflows[1] - I.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!R)
          switch (h) {
            case "bestFit": {
              var j;
              const O = (j = L.filter((I) => {
                if (C) {
                  const T = an(I.placement);
                  return T === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((T) => T > 0).reduce((T, F) => T + F, 0)]).sort((I, T) => I[1] - T[1])[0]) == null ? void 0 : j[0];
              O && (R = O);
              break;
            }
            case "initialPlacement":
              R = l;
              break;
          }
        if (o !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function Ny(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ey(e) {
  return JD.some((t) => e[t] >= 0);
}
const pL = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Fn(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await hs(t, {
            ...o,
            elementContext: "reference"
          }), s = Ny(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ey(s)
            }
          };
        }
        case "escaped": {
          const i = await hs(t, {
            ...o,
            altBoundary: !0
          }), s = Ny(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ey(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Jb = /* @__PURE__ */ new Set(["left", "top"]);
async function hL(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = zn(n), l = oi(n), a = an(n) === "y", c = Jb.has(s) ? -1 : 1, d = i && a ? -1 : 1, u = Fn(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return l && typeof m == "number" && (h = l === "end" ? m * -1 : m), a ? {
    x: h * d,
    y: p * c
  } : {
    x: p * c,
    y: h * d
  };
}
const mL = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: l
      } = t, a = await hL(t, e);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, gL = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (w) => {
            let {
              x: g,
              y: v
            } = w;
            return {
              x: g,
              y: v
            };
          }
        },
        ...a
      } = Fn(e, t), c = {
        x: n,
        y: r
      }, d = await hs(t, a), u = an(zn(o)), p = Jp(u);
      let h = c[p], m = c[u];
      if (i) {
        const w = p === "y" ? "top" : "left", g = p === "y" ? "bottom" : "right", v = h + d[w], y = h - d[g];
        h = xf(v, h, y);
      }
      if (s) {
        const w = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", v = m + d[w], y = m - d[g];
        m = xf(v, m, y);
      }
      const x = l.fn({
        ...t,
        [p]: h,
        [u]: m
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [p]: i,
            [u]: s
          }
        }
      };
    }
  };
}, yL = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: l = 0,
        mainAxis: a = !0,
        crossAxis: c = !0
      } = Fn(e, t), d = {
        x: n,
        y: r
      }, u = an(o), p = Jp(u);
      let h = d[p], m = d[u];
      const x = Fn(l, t), w = typeof x == "number" ? {
        mainAxis: x,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...x
      };
      if (a) {
        const y = p === "y" ? "height" : "width", S = i.reference[p] - i.floating[y] + w.mainAxis, E = i.reference[p] + i.reference[y] - w.mainAxis;
        h < S ? h = S : h > E && (h = E);
      }
      if (c) {
        var g, v;
        const y = p === "y" ? "width" : "height", S = Jb.has(zn(o)), E = i.reference[u] - i.floating[y] + (S && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (S ? 0 : w.crossAxis), C = i.reference[u] + i.reference[y] + (S ? 0 : ((v = s.offset) == null ? void 0 : v[u]) || 0) - (S ? w.crossAxis : 0);
        m < E ? m = E : m > C && (m = C);
      }
      return {
        [p]: h,
        [u]: m
      };
    }
  };
}, xL = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: l
      } = t, {
        apply: a = () => {
        },
        ...c
      } = Fn(e, t), d = await hs(t, c), u = zn(o), p = oi(o), h = an(o) === "y", {
        width: m,
        height: x
      } = i.floating;
      let w, g;
      u === "top" || u === "bottom" ? (w = u, g = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (g = u, w = p === "end" ? "top" : "bottom");
      const v = x - d.top - d.bottom, y = m - d.left - d.right, S = mr(x - d[w], v), E = mr(m - d[g], y), C = !t.middlewareData.shift;
      let N = S, P = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y), (r = t.middlewareData.shift) != null && r.enabled.y && (N = v), C && !p) {
        const L = mt(d.left, 0), _ = mt(d.right, 0), M = mt(d.top, 0), j = mt(d.bottom, 0);
        h ? P = m - 2 * (L !== 0 || _ !== 0 ? L + _ : mt(d.left, d.right)) : N = x - 2 * (M !== 0 || j !== 0 ? M + j : mt(d.top, d.bottom));
      }
      await a({
        ...t,
        availableWidth: P,
        availableHeight: N
      });
      const A = await s.getDimensions(l.floating);
      return m !== A.width || x !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Mc() {
  return typeof window < "u";
}
function ii(e) {
  return e1(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gn(e) {
  var t;
  return (t = (e1(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function e1(e) {
  return Mc() ? e instanceof Node || e instanceof wt(e).Node : !1;
}
function Zt(e) {
  return Mc() ? e instanceof Element || e instanceof wt(e).Element : !1;
}
function hn(e) {
  return Mc() ? e instanceof HTMLElement || e instanceof wt(e).HTMLElement : !1;
}
function Cy(e) {
  return !Mc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot;
}
const vL = /* @__PURE__ */ new Set(["inline", "contents"]);
function Rs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !vL.has(o);
}
const wL = /* @__PURE__ */ new Set(["table", "td", "th"]);
function bL(e) {
  return wL.has(ii(e));
}
const SL = [":popover-open", ":modal"];
function Ac(e) {
  return SL.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const NL = ["transform", "translate", "scale", "rotate", "perspective"], EL = ["transform", "translate", "scale", "rotate", "perspective", "filter"], CL = ["paint", "layout", "strict", "content"];
function nh(e) {
  const t = rh(), n = Zt(e) ? Jt(e) : e;
  return NL.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || EL.some((r) => (n.willChange || "").includes(r)) || CL.some((r) => (n.contain || "").includes(r));
}
function _L(e) {
  let t = gr(e);
  for (; hn(t) && !Xo(t); ) {
    if (nh(t))
      return t;
    if (Ac(t))
      return null;
    t = gr(t);
  }
  return null;
}
function rh() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const kL = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Xo(e) {
  return kL.has(ii(e));
}
function Jt(e) {
  return wt(e).getComputedStyle(e);
}
function Rc(e) {
  return Zt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function gr(e) {
  if (ii(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Cy(e) && e.host || // Fallback.
    gn(e)
  );
  return Cy(t) ? t.host : t;
}
function t1(e) {
  const t = gr(e);
  return Xo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hn(t) && Rs(t) ? t : t1(t);
}
function ms(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = t1(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = wt(o);
  if (i) {
    const l = wf(s);
    return t.concat(s, s.visualViewport || [], Rs(o) ? o : [], l && n ? ms(l) : []);
  }
  return t.concat(o, ms(o, [], n));
}
function wf(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function n1(e) {
  const t = Jt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = hn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = Oa(n) !== i || Oa(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function oh(e) {
  return Zt(e) ? e : e.contextElement;
}
function Po(e) {
  const t = oh(e);
  if (!hn(t))
    return fn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = n1(t);
  let s = (i ? Oa(n.width) : n.width) / r, l = (i ? Oa(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const TL = /* @__PURE__ */ fn(0);
function r1(e) {
  const t = wt(e);
  return !rh() || !t.visualViewport ? TL : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function jL(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== wt(e) ? !1 : t;
}
function Wr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = oh(e);
  let s = fn(1);
  t && (r ? Zt(r) && (s = Po(r)) : s = Po(e));
  const l = jL(i, n, r) ? r1(i) : fn(0);
  let a = (o.left + l.x) / s.x, c = (o.top + l.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (i) {
    const p = wt(i), h = r && Zt(r) ? wt(r) : r;
    let m = p, x = wf(m);
    for (; x && r && h !== m; ) {
      const w = Po(x), g = x.getBoundingClientRect(), v = Jt(x), y = g.left + (x.clientLeft + parseFloat(v.paddingLeft)) * w.x, S = g.top + (x.clientTop + parseFloat(v.paddingTop)) * w.y;
      a *= w.x, c *= w.y, d *= w.x, u *= w.y, a += y, c += S, m = wt(x), x = wf(m);
    }
  }
  return za({
    width: d,
    height: u,
    x: a,
    y: c
  });
}
function Dc(e, t) {
  const n = Rc(e).scrollLeft;
  return t ? t.left + n : Wr(gn(e)).left + n;
}
function o1(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Dc(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function IL(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = gn(r), l = t ? Ac(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = fn(1);
  const d = fn(0), u = hn(r);
  if ((u || !u && !i) && ((ii(r) !== "body" || Rs(s)) && (a = Rc(r)), hn(r))) {
    const h = Wr(r);
    c = Po(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !u && !i ? o1(s, a) : fn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + d.x + p.x,
    y: n.y * c.y - a.scrollTop * c.y + d.y + p.y
  };
}
function PL(e) {
  return Array.from(e.getClientRects());
}
function ML(e) {
  const t = gn(e), n = Rc(e), r = e.ownerDocument.body, o = mt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = mt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Dc(e);
  const l = -n.scrollTop;
  return Jt(r).direction === "rtl" && (s += mt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
const _y = 25;
function AL(e, t) {
  const n = wt(e), r = gn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = rh();
    (!d || d && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  const c = Dc(r);
  if (c <= 0) {
    const d = r.ownerDocument, u = d.body, p = getComputedStyle(u), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, m = Math.abs(r.clientWidth - u.clientWidth - h);
    m <= _y && (i -= m);
  } else c <= _y && (i += c);
  return {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
const RL = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function DL(e, t) {
  const n = Wr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = hn(e) ? Po(e) : fn(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, c = r * i.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function ky(e, t, n) {
  let r;
  if (t === "viewport")
    r = AL(e, n);
  else if (t === "document")
    r = ML(gn(e));
  else if (Zt(t))
    r = DL(t, n);
  else {
    const o = r1(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return za(r);
}
function i1(e, t) {
  const n = gr(e);
  return n === t || !Zt(n) || Xo(n) ? !1 : Jt(n).position === "fixed" || i1(n, t);
}
function LL(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ms(e, [], !1).filter((l) => Zt(l) && ii(l) !== "body"), o = null;
  const i = Jt(e).position === "fixed";
  let s = i ? gr(e) : e;
  for (; Zt(s) && !Xo(s); ) {
    const l = Jt(s), a = nh(s);
    !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && RL.has(o.position) || Rs(s) && !a && i1(e, s)) ? r = r.filter((d) => d !== s) : o = l, s = gr(s);
  }
  return t.set(e, r), r;
}
function OL(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ac(t) ? [] : LL(t, this._c) : [].concat(n), r], l = s[0], a = s.reduce((c, d) => {
    const u = ky(t, d, o);
    return c.top = mt(u.top, c.top), c.right = mr(u.right, c.right), c.bottom = mr(u.bottom, c.bottom), c.left = mt(u.left, c.left), c;
  }, ky(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function FL(e) {
  const {
    width: t,
    height: n
  } = n1(e);
  return {
    width: t,
    height: n
  };
}
function zL(e, t, n) {
  const r = hn(t), o = gn(t), i = n === "fixed", s = Wr(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = fn(0);
  function c() {
    a.x = Dc(o);
  }
  if (r || !r && !i)
    if ((ii(t) !== "body" || Rs(o)) && (l = Rc(t)), r) {
      const h = Wr(t, !0, i, t);
      a.x = h.x + t.clientLeft, a.y = h.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? o1(o, l) : fn(0), u = s.left + l.scrollLeft - a.x - d.x, p = s.top + l.scrollTop - a.y - d.y;
  return {
    x: u,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Ou(e) {
  return Jt(e).position === "static";
}
function Ty(e, t) {
  if (!hn(e) || Jt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return gn(e) === n && (n = n.ownerDocument.body), n;
}
function s1(e, t) {
  const n = wt(e);
  if (Ac(e))
    return n;
  if (!hn(e)) {
    let o = gr(e);
    for (; o && !Xo(o); ) {
      if (Zt(o) && !Ou(o))
        return o;
      o = gr(o);
    }
    return n;
  }
  let r = Ty(e, t);
  for (; r && bL(r) && Ou(r); )
    r = Ty(r, t);
  return r && Xo(r) && Ou(r) && !nh(r) ? n : r || _L(e) || n;
}
const $L = async function(e) {
  const t = this.getOffsetParent || s1, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: zL(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function HL(e) {
  return Jt(e).direction === "rtl";
}
const VL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: IL,
  getDocumentElement: gn,
  getClippingRect: OL,
  getOffsetParent: s1,
  getElementRects: $L,
  getClientRects: PL,
  getDimensions: FL,
  getScale: Po,
  isElement: Zt,
  isRTL: HL
};
function l1(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function BL(e, t) {
  let n = null, r;
  const o = gn(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: u,
      width: p,
      height: h
    } = c;
    if (l || t(), !p || !h)
      return;
    const m = yl(u), x = yl(o.clientWidth - (d + p)), w = yl(o.clientHeight - (u + h)), g = yl(d), y = {
      rootMargin: -m + "px " + -x + "px " + -w + "px " + -g + "px",
      threshold: mt(0, mr(1, a)) || 1
    };
    let S = !0;
    function E(C) {
      const N = C[0].intersectionRatio;
      if (N !== a) {
        if (!S)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !l1(c, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function UL(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, c = oh(e), d = o || i ? [...c ? ms(c) : [], ...ms(t)] : [];
  d.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const u = c && l ? BL(c, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((g) => {
    let [v] = g;
    v && v.target === c && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), c && !a && h.observe(c), h.observe(t));
  let m, x = a ? Wr(e) : null;
  a && w();
  function w() {
    const g = Wr(e);
    x && !l1(x, g) && n(), x = g, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    d.forEach((v) => {
      o && v.removeEventListener("scroll", n), i && v.removeEventListener("resize", n);
    }), u == null || u(), (g = h) == null || g.disconnect(), h = null, a && cancelAnimationFrame(m);
  };
}
const KL = mL, WL = gL, YL = fL, GL = xL, XL = pL, jy = dL, QL = yL, qL = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: VL,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return uL(e, t, {
    ...o,
    platform: i
  });
};
var ZL = typeof document < "u", JL = function() {
}, Bl = ZL ? b.useLayoutEffect : JL;
function $a(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!$a(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !$a(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function a1(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Iy(e, t) {
  const n = a1(e);
  return Math.round(t * n) / n;
}
function Fu(e) {
  const t = b.useRef(e);
  return Bl(() => {
    t.current = e;
  }), t;
}
function eO(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: l = !0,
    whileElementsMounted: a,
    open: c
  } = e, [d, u] = b.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = b.useState(r);
  $a(p, r) || h(r);
  const [m, x] = b.useState(null), [w, g] = b.useState(null), v = b.useCallback((I) => {
    I !== C.current && (C.current = I, x(I));
  }, []), y = b.useCallback((I) => {
    I !== N.current && (N.current = I, g(I));
  }, []), S = i || m, E = s || w, C = b.useRef(null), N = b.useRef(null), P = b.useRef(d), A = a != null, L = Fu(a), _ = Fu(o), M = Fu(c), j = b.useCallback(() => {
    if (!C.current || !N.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: p
    };
    _.current && (I.platform = _.current), qL(C.current, N.current, I).then((T) => {
      const F = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      k.current && !$a(P.current, F) && (P.current = F, Ps.flushSync(() => {
        u(F);
      }));
    });
  }, [p, t, n, _, M]);
  Bl(() => {
    c === !1 && P.current.isPositioned && (P.current.isPositioned = !1, u((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [c]);
  const k = b.useRef(!1);
  Bl(() => (k.current = !0, () => {
    k.current = !1;
  }), []), Bl(() => {
    if (S && (C.current = S), E && (N.current = E), S && E) {
      if (L.current)
        return L.current(S, E, j);
      j();
    }
  }, [S, E, j, L, A]);
  const D = b.useMemo(() => ({
    reference: C,
    floating: N,
    setReference: v,
    setFloating: y
  }), [v, y]), R = b.useMemo(() => ({
    reference: S,
    floating: E
  }), [S, E]), O = b.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return I;
    const T = Iy(R.floating, d.x), F = Iy(R.floating, d.y);
    return l ? {
      ...I,
      transform: "translate(" + T + "px, " + F + "px)",
      ...a1(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: F
    };
  }, [n, l, R.floating, d.x, d.y]);
  return b.useMemo(() => ({
    ...d,
    update: j,
    refs: D,
    elements: R,
    floatingStyles: O
  }), [d, j, D, R, O]);
}
const tO = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? jy({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? jy({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, nO = (e, t) => ({
  ...KL(e),
  options: [e, t]
}), rO = (e, t) => ({
  ...WL(e),
  options: [e, t]
}), oO = (e, t) => ({
  ...QL(e),
  options: [e, t]
}), iO = (e, t) => ({
  ...YL(e),
  options: [e, t]
}), sO = (e, t) => ({
  ...GL(e),
  options: [e, t]
}), lO = (e, t) => ({
  ...XL(e),
  options: [e, t]
}), aO = (e, t) => ({
  ...tO(e),
  options: [e, t]
});
var cO = "Arrow", c1 = b.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ f.jsx(
    Le.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
c1.displayName = cO;
var uO = c1;
function dO(e) {
  const [t, n] = b.useState(void 0);
  return On(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, l;
        if ("borderBoxSize" in i) {
          const a = i.borderBoxSize, c = Array.isArray(a) ? a[0] : a;
          s = c.inlineSize, l = c.blockSize;
        } else
          s = e.offsetWidth, l = e.offsetHeight;
        n({ width: s, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var ih = "Popper", [u1, d1] = ri(ih), [fO, f1] = u1(ih), p1 = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = b.useState(null);
  return /* @__PURE__ */ f.jsx(fO, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
p1.displayName = ih;
var h1 = "PopperAnchor", m1 = b.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = f1(h1, n), s = b.useRef(null), l = Re(t, s), a = b.useRef(null);
    return b.useEffect(() => {
      const c = a.current;
      a.current = (r == null ? void 0 : r.current) || s.current, c !== a.current && i.onAnchorChange(a.current);
    }), r ? null : /* @__PURE__ */ f.jsx(Le.div, { ...o, ref: l });
  }
);
m1.displayName = h1;
var sh = "PopperContent", [pO, hO] = u1(sh), g1 = b.forwardRef(
  (e, t) => {
    var W, B, Y, ie, ne, ee;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: l = 0,
      avoidCollisions: a = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: u = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: m,
      ...x
    } = e, w = f1(sh, n), [g, v] = b.useState(null), y = Re(t, (J) => v(J)), [S, E] = b.useState(null), C = dO(S), N = (C == null ? void 0 : C.width) ?? 0, P = (C == null ? void 0 : C.height) ?? 0, A = r + (i !== "center" ? "-" + i : ""), L = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, _ = Array.isArray(c) ? c : [c], M = _.length > 0, j = {
      padding: L,
      boundary: _.filter(gO),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: k, floatingStyles: D, placement: R, isPositioned: O, middlewareData: I } = eO({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: A,
      whileElementsMounted: (...J) => UL(...J, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        nO({ mainAxis: o + P, alignmentAxis: s }),
        a && rO({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? oO() : void 0,
          ...j
        }),
        a && iO({ ...j }),
        sO({
          ...j,
          apply: ({ elements: J, rects: de, availableWidth: he, availableHeight: ce }) => {
            const { width: Me, height: _t } = de.reference, He = J.floating.style;
            He.setProperty("--radix-popper-available-width", `${he}px`), He.setProperty("--radix-popper-available-height", `${ce}px`), He.setProperty("--radix-popper-anchor-width", `${Me}px`), He.setProperty("--radix-popper-anchor-height", `${_t}px`);
          }
        }),
        S && aO({ element: S, padding: l }),
        yO({ arrowWidth: N, arrowHeight: P }),
        p && lO({ strategy: "referenceHidden", ...j })
      ]
    }), [T, F] = v1(R), z = Ze(m);
    On(() => {
      O && (z == null || z());
    }, [O, z]);
    const $ = (W = I.arrow) == null ? void 0 : W.x, U = (B = I.arrow) == null ? void 0 : B.y, V = ((Y = I.arrow) == null ? void 0 : Y.centerOffset) !== 0, [Q, K] = b.useState();
    return On(() => {
      g && K(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...D,
          transform: O ? D.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Q,
          "--radix-popper-transform-origin": [
            (ie = I.transformOrigin) == null ? void 0 : ie.x,
            (ne = I.transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee = I.hide) == null ? void 0 : ee.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f.jsx(
          pO,
          {
            scope: n,
            placedSide: T,
            onArrowChange: E,
            arrowX: $,
            arrowY: U,
            shouldHideArrow: V,
            children: /* @__PURE__ */ f.jsx(
              Le.div,
              {
                "data-side": T,
                "data-align": F,
                ...x,
                ref: y,
                style: {
                  ...x.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: O ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
g1.displayName = sh;
var y1 = "PopperArrow", mO = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, x1 = b.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = hO(y1, r), s = mO[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f.jsx(
          uO,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
x1.displayName = y1;
function gO(e) {
  return e !== null;
}
var yO = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, g, v;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, a = s ? 0 : e.arrowHeight, [c, d] = v1(n), u = { start: "0%", center: "50%", end: "100%" }[d], p = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + l / 2, h = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + a / 2;
    let m = "", x = "";
    return c === "bottom" ? (m = s ? u : `${p}px`, x = `${-a}px`) : c === "top" ? (m = s ? u : `${p}px`, x = `${r.floating.height + a}px`) : c === "right" ? (m = `${-a}px`, x = s ? u : `${h}px`) : c === "left" && (m = `${r.floating.width + a}px`, x = s ? u : `${h}px`), { data: { x: m, y: x } };
  }
});
function v1(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var xO = p1, vO = m1, wO = g1, bO = x1, SO = "Portal", w1 = b.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = b.useState(!1);
  On(() => i(!0), []);
  const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? KP.createPortal(/* @__PURE__ */ f.jsx(Le.div, { ...r, ref: t }), s) : null;
});
w1.displayName = SO;
function NO(e, t) {
  return b.useReducer((n, r) => t[n][r] ?? n, e);
}
var Vn = (e) => {
  const { present: t, children: n } = e, r = EO(t), o = typeof n == "function" ? n({ present: r.isPresent }) : b.Children.only(n), i = Re(r.ref, CO(o));
  return typeof n == "function" || r.isPresent ? b.cloneElement(o, { ref: i }) : null;
};
Vn.displayName = "Presence";
function EO(e) {
  const [t, n] = b.useState(), r = b.useRef(null), o = b.useRef(e), i = b.useRef("none"), s = e ? "mounted" : "unmounted", [l, a] = NO(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return b.useEffect(() => {
    const c = xl(r.current);
    i.current = l === "mounted" ? c : "none";
  }, [l]), On(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const p = i.current, h = xl(c);
      e ? a("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? a("UNMOUNT") : a(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), On(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, u = (h) => {
        const x = xl(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && x && (a("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, p = (h) => {
        h.target === t && (i.current = xl(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      a("ANIMATION_END");
  }, [t, a]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: b.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function xl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function CO(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var zu = "rovingFocusGroup.onEntryFocus", _O = { bubbles: !1, cancelable: !0 }, Ds = "RovingFocusGroup", [bf, b1, kO] = Wb(Ds), [TO, S1] = ri(
  Ds,
  [kO]
), [jO, IO] = TO(Ds), N1 = b.forwardRef(
  (e, t) => /* @__PURE__ */ f.jsx(bf.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(bf.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(PO, { ...e, ref: t }) }) })
);
N1.displayName = Ds;
var PO = b.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: a,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...u
  } = e, p = b.useRef(null), h = Re(t, p), m = Zp(i), [x, w] = Ub({
    prop: s,
    defaultProp: l ?? null,
    onChange: a,
    caller: Ds
  }), [g, v] = b.useState(!1), y = Ze(c), S = b1(n), E = b.useRef(!1), [C, N] = b.useState(0);
  return b.useEffect(() => {
    const P = p.current;
    if (P)
      return P.addEventListener(zu, y), () => P.removeEventListener(zu, y);
  }, [y]), /* @__PURE__ */ f.jsx(
    jO,
    {
      scope: n,
      orientation: r,
      dir: m,
      loop: o,
      currentTabStopId: x,
      onItemFocus: b.useCallback(
        (P) => w(P),
        [w]
      ),
      onItemShiftTab: b.useCallback(() => v(!0), []),
      onFocusableItemAdd: b.useCallback(
        () => N((P) => P + 1),
        []
      ),
      onFocusableItemRemove: b.useCallback(
        () => N((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ f.jsx(
        Le.div,
        {
          tabIndex: g || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: ae(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: ae(e.onFocus, (P) => {
            const A = !E.current;
            if (P.target === P.currentTarget && A && !g) {
              const L = new CustomEvent(zu, _O);
              if (P.currentTarget.dispatchEvent(L), !L.defaultPrevented) {
                const _ = S().filter((R) => R.focusable), M = _.find((R) => R.active), j = _.find((R) => R.id === x), D = [M, j, ..._].filter(
                  Boolean
                ).map((R) => R.ref.current);
                _1(D, d);
              }
            }
            E.current = !1;
          }),
          onBlur: ae(e.onBlur, () => v(!1))
        }
      )
    }
  );
}), E1 = "RovingFocusGroupItem", C1 = b.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...l
    } = e, a = yf(), c = i || a, d = IO(E1, n), u = d.currentTabStopId === c, p = b1(n), { onFocusableItemAdd: h, onFocusableItemRemove: m, currentTabStopId: x } = d;
    return b.useEffect(() => {
      if (r)
        return h(), () => m();
    }, [r, h, m]), /* @__PURE__ */ f.jsx(
      bf.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ f.jsx(
          Le.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": d.orientation,
            ...l,
            ref: t,
            onMouseDown: ae(e.onMouseDown, (w) => {
              r ? d.onItemFocus(c) : w.preventDefault();
            }),
            onFocus: ae(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: ae(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const g = RO(w, d.orientation, d.dir);
              if (g !== void 0) {
                if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                w.preventDefault();
                let y = p().filter((S) => S.focusable).map((S) => S.ref.current);
                if (g === "last") y.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && y.reverse();
                  const S = y.indexOf(w.currentTarget);
                  y = d.loop ? DO(y, S + 1) : y.slice(S + 1);
                }
                setTimeout(() => _1(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: u, hasTabStop: x != null }) : s
          }
        )
      }
    );
  }
);
C1.displayName = E1;
var MO = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function AO(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function RO(e, t, n) {
  const r = AO(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return MO[r];
}
function _1(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function DO(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var LO = N1, OO = C1, FO = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, no = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakMap(), wl = {}, $u = 0, k1 = function(e) {
  return e && (e.host || k1(e.parentNode));
}, zO = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = k1(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, $O = function(e, t, n, r) {
  var o = zO(t, Array.isArray(e) ? e : [e]);
  wl[n] || (wl[n] = /* @__PURE__ */ new WeakMap());
  var i = wl[n], s = [], l = /* @__PURE__ */ new Set(), a = new Set(o), c = function(u) {
    !u || l.has(u) || (l.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var d = function(u) {
    !u || a.has(u) || Array.prototype.forEach.call(u.children, function(p) {
      if (l.has(p))
        d(p);
      else
        try {
          var h = p.getAttribute(r), m = h !== null && h !== "false", x = (no.get(p) || 0) + 1, w = (i.get(p) || 0) + 1;
          no.set(p, x), i.set(p, w), s.push(p), x === 1 && m && vl.set(p, !0), w === 1 && p.setAttribute(n, "true"), m || p.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", p, g);
        }
    });
  };
  return d(t), l.clear(), $u++, function() {
    s.forEach(function(u) {
      var p = no.get(u) - 1, h = i.get(u) - 1;
      no.set(u, p), i.set(u, h), p || (vl.has(u) || u.removeAttribute(r), vl.delete(u)), h || u.removeAttribute(n);
    }), $u--, $u || (no = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakMap(), wl = {});
  };
}, HO = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = FO(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), $O(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ln = function() {
  return ln = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ln.apply(this, arguments);
};
function T1(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function VO(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ul = "right-scroll-bar-position", Kl = "width-before-scroll-bar", BO = "with-scroll-bars-hidden", UO = "--removed-body-scroll-bar-size";
function Hu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function KO(e, t) {
  var n = b.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var WO = typeof window < "u" ? b.useLayoutEffect : b.useEffect, Py = /* @__PURE__ */ new WeakMap();
function YO(e, t) {
  var n = KO(null, function(r) {
    return e.forEach(function(o) {
      return Hu(o, r);
    });
  });
  return WO(function() {
    var r = Py.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(l) {
        i.has(l) || Hu(l, null);
      }), i.forEach(function(l) {
        o.has(l) || Hu(l, s);
      });
    }
    Py.set(n, e);
  }, [e]), n;
}
function GO(e) {
  return e;
}
function XO(e, t) {
  t === void 0 && (t = GO);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(l) {
          return l !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(l) {
          return i(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(i), s = n;
      }
      var a = function() {
        var d = s;
        s = [], d.forEach(i);
      }, c = function() {
        return Promise.resolve().then(a);
      };
      c(), n = {
        push: function(d) {
          s.push(d), c();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function QO(e) {
  e === void 0 && (e = {});
  var t = XO(null);
  return t.options = ln({ async: !0, ssr: !1 }, e), t;
}
var j1 = function(e) {
  var t = e.sideCar, n = T1(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return b.createElement(r, ln({}, n));
};
j1.isSideCarExport = !0;
function qO(e, t) {
  return e.useMedium(t), j1;
}
var I1 = QO(), Vu = function() {
}, Lc = b.forwardRef(function(e, t) {
  var n = b.useRef(null), r = b.useState({
    onScrollCapture: Vu,
    onWheelCapture: Vu,
    onTouchMoveCapture: Vu
  }), o = r[0], i = r[1], s = e.forwardProps, l = e.children, a = e.className, c = e.removeScrollBar, d = e.enabled, u = e.shards, p = e.sideCar, h = e.noRelative, m = e.noIsolation, x = e.inert, w = e.allowPinchZoom, g = e.as, v = g === void 0 ? "div" : g, y = e.gapMode, S = T1(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, C = YO([n, t]), N = ln(ln({}, S), o);
  return b.createElement(
    b.Fragment,
    null,
    d && b.createElement(E, { sideCar: I1, removeScrollBar: c, shards: u, noRelative: h, noIsolation: m, inert: x, setCallbacks: i, allowPinchZoom: !!w, lockRef: n, gapMode: y }),
    s ? b.cloneElement(b.Children.only(l), ln(ln({}, N), { ref: C })) : b.createElement(v, ln({}, N, { className: a, ref: C }), l)
  );
});
Lc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Lc.classNames = {
  fullWidth: Kl,
  zeroRight: Ul
};
var ZO = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function JO() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ZO();
  return t && e.setAttribute("nonce", t), e;
}
function e5(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function t5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var n5 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = JO()) && (e5(t, n), t5(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, r5 = function() {
  var e = n5();
  return function(t, n) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, P1 = function() {
  var e = r5(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, o5 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Bu = function(e) {
  return parseInt(e || "", 10) || 0;
}, i5 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Bu(n), Bu(r), Bu(o)];
}, s5 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return o5;
  var t = i5(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, l5 = P1(), Mo = "data-scroll-locked", a5 = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(BO, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(Mo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ul, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Kl, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ul, " .").concat(Ul, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Kl, " .").concat(Kl, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Mo, `] {
    `).concat(UO, ": ").concat(l, `px;
  }
`);
}, My = function() {
  var e = parseInt(document.body.getAttribute(Mo) || "0", 10);
  return isFinite(e) ? e : 0;
}, c5 = function() {
  b.useEffect(function() {
    return document.body.setAttribute(Mo, (My() + 1).toString()), function() {
      var e = My() - 1;
      e <= 0 ? document.body.removeAttribute(Mo) : document.body.setAttribute(Mo, e.toString());
    };
  }, []);
}, u5 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  c5();
  var i = b.useMemo(function() {
    return s5(o);
  }, [o]);
  return b.createElement(l5, { styles: a5(i, !t, o, n ? "" : "!important") });
}, Sf = !1;
if (typeof window < "u")
  try {
    var bl = Object.defineProperty({}, "passive", {
      get: function() {
        return Sf = !0, !0;
      }
    });
    window.addEventListener("test", bl, bl), window.removeEventListener("test", bl, bl);
  } catch {
    Sf = !1;
  }
var ro = Sf ? { passive: !1 } : !1, d5 = function(e) {
  return e.tagName === "TEXTAREA";
}, M1 = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !d5(e) && n[t] === "visible")
  );
}, f5 = function(e) {
  return M1(e, "overflowY");
}, p5 = function(e) {
  return M1(e, "overflowX");
}, Ay = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = A1(e, r);
    if (o) {
      var i = R1(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, h5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, m5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, A1 = function(e, t) {
  return e === "v" ? f5(t) : p5(t);
}, R1 = function(e, t) {
  return e === "v" ? h5(t) : m5(t);
}, g5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, y5 = function(e, t, n, r, o) {
  var i = g5(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, a = t.contains(l), c = !1, d = s > 0, u = 0, p = 0;
  do {
    if (!l)
      break;
    var h = R1(e, l), m = h[0], x = h[1], w = h[2], g = x - w - i * m;
    (m || g) && A1(e, l) && (u += g, p += m);
    var v = l.parentNode;
    l = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v;
  } while (
    // portaled content
    !a && l !== document.body || // self content
    a && (t.contains(l) || t === l)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(p) < 1) && (c = !0), c;
}, Sl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ry = function(e) {
  return [e.deltaX, e.deltaY];
}, Dy = function(e) {
  return e && "current" in e ? e.current : e;
}, x5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, v5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, w5 = 0, oo = [];
function b5(e) {
  var t = b.useRef([]), n = b.useRef([0, 0]), r = b.useRef(), o = b.useState(w5++)[0], i = b.useState(P1)[0], s = b.useRef(e);
  b.useEffect(function() {
    s.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var x = VO([e.lockRef.current], (e.shards || []).map(Dy), !0).filter(Boolean);
      return x.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), x.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = b.useCallback(function(x, w) {
    if ("touches" in x && x.touches.length === 2 || x.type === "wheel" && x.ctrlKey)
      return !s.current.allowPinchZoom;
    var g = Sl(x), v = n.current, y = "deltaX" in x ? x.deltaX : v[0] - g[0], S = "deltaY" in x ? x.deltaY : v[1] - g[1], E, C = x.target, N = Math.abs(y) > Math.abs(S) ? "h" : "v";
    if ("touches" in x && N === "h" && C.type === "range")
      return !1;
    var P = window.getSelection(), A = P && P.anchorNode, L = A ? A === C || A.contains(C) : !1;
    if (L)
      return !1;
    var _ = Ay(N, C);
    if (!_)
      return !0;
    if (_ ? E = N : (E = N === "v" ? "h" : "v", _ = Ay(N, C)), !_)
      return !1;
    if (!r.current && "changedTouches" in x && (y || S) && (r.current = E), !E)
      return !0;
    var M = r.current || E;
    return y5(M, w, x, M === "h" ? y : S);
  }, []), a = b.useCallback(function(x) {
    var w = x;
    if (!(!oo.length || oo[oo.length - 1] !== i)) {
      var g = "deltaY" in w ? Ry(w) : Sl(w), v = t.current.filter(function(E) {
        return E.name === w.type && (E.target === w.target || w.target === E.shadowParent) && x5(E.delta, g);
      })[0];
      if (v && v.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!v) {
        var y = (s.current.shards || []).map(Dy).filter(Boolean).filter(function(E) {
          return E.contains(w.target);
        }), S = y.length > 0 ? l(w, y[0]) : !s.current.noIsolation;
        S && w.cancelable && w.preventDefault();
      }
    }
  }, []), c = b.useCallback(function(x, w, g, v) {
    var y = { name: x, delta: w, target: g, should: v, shadowParent: S5(g) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== y;
      });
    }, 1);
  }, []), d = b.useCallback(function(x) {
    n.current = Sl(x), r.current = void 0;
  }, []), u = b.useCallback(function(x) {
    c(x.type, Ry(x), x.target, l(x, e.lockRef.current));
  }, []), p = b.useCallback(function(x) {
    c(x.type, Sl(x), x.target, l(x, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return oo.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", a, ro), document.addEventListener("touchmove", a, ro), document.addEventListener("touchstart", d, ro), function() {
      oo = oo.filter(function(x) {
        return x !== i;
      }), document.removeEventListener("wheel", a, ro), document.removeEventListener("touchmove", a, ro), document.removeEventListener("touchstart", d, ro);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    m ? b.createElement(i, { styles: v5(o) }) : null,
    h ? b.createElement(u5, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function S5(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const N5 = qO(I1, b5);
var D1 = b.forwardRef(function(e, t) {
  return b.createElement(Lc, ln({}, e, { ref: t, sideCar: N5 }));
});
D1.classNames = Lc.classNames;
var Nf = ["Enter", " "], E5 = ["ArrowDown", "PageUp", "Home"], L1 = ["ArrowUp", "PageDown", "End"], C5 = [...E5, ...L1], _5 = {
  ltr: [...Nf, "ArrowRight"],
  rtl: [...Nf, "ArrowLeft"]
}, k5 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Ls = "Menu", [gs, T5, j5] = Wb(Ls), [Zr, O1] = ri(Ls, [
  j5,
  d1,
  S1
]), Oc = d1(), F1 = S1(), [I5, Jr] = Zr(Ls), [P5, Os] = Zr(Ls), z1 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, l = Oc(t), [a, c] = b.useState(null), d = b.useRef(!1), u = Ze(i), p = Zp(o);
  return b.useEffect(() => {
    const h = () => {
      d.current = !0, document.addEventListener("pointerdown", m, { capture: !0, once: !0 }), document.addEventListener("pointermove", m, { capture: !0, once: !0 });
    }, m = () => d.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", m, { capture: !0 }), document.removeEventListener("pointermove", m, { capture: !0 });
    };
  }, []), /* @__PURE__ */ f.jsx(xO, { ...l, children: /* @__PURE__ */ f.jsx(
    I5,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: a,
      onContentChange: c,
      children: /* @__PURE__ */ f.jsx(
        P5,
        {
          scope: t,
          onClose: b.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: d,
          dir: p,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
z1.displayName = Ls;
var M5 = "MenuAnchor", lh = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Oc(n);
    return /* @__PURE__ */ f.jsx(vO, { ...o, ...r, ref: t });
  }
);
lh.displayName = M5;
var ah = "MenuPortal", [A5, $1] = Zr(ah, {
  forceMount: void 0
}), H1 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Jr(ah, t);
  return /* @__PURE__ */ f.jsx(A5, { scope: t, forceMount: n, children: /* @__PURE__ */ f.jsx(Vn, { present: n || i.open, children: /* @__PURE__ */ f.jsx(w1, { asChild: !0, container: o, children: r }) }) });
};
H1.displayName = ah;
var Rt = "MenuContent", [R5, ch] = Zr(Rt), V1 = b.forwardRef(
  (e, t) => {
    const n = $1(Rt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Jr(Rt, e.__scopeMenu), s = Os(Rt, e.__scopeMenu);
    return /* @__PURE__ */ f.jsx(gs.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(Vn, { present: r || i.open, children: /* @__PURE__ */ f.jsx(gs.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ f.jsx(D5, { ...o, ref: t }) : /* @__PURE__ */ f.jsx(L5, { ...o, ref: t }) }) }) });
  }
), D5 = b.forwardRef(
  (e, t) => {
    const n = Jr(Rt, e.__scopeMenu), r = b.useRef(null), o = Re(t, r);
    return b.useEffect(() => {
      const i = r.current;
      if (i) return HO(i);
    }, []), /* @__PURE__ */ f.jsx(
      uh,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: ae(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), L5 = b.forwardRef((e, t) => {
  const n = Jr(Rt, e.__scopeMenu);
  return /* @__PURE__ */ f.jsx(
    uh,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), O5 = /* @__PURE__ */ La("MenuContent.ScrollLock"), uh = b.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: l,
      onEntryFocus: a,
      onEscapeKeyDown: c,
      onPointerDownOutside: d,
      onFocusOutside: u,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: m,
      ...x
    } = e, w = Jr(Rt, n), g = Os(Rt, n), v = Oc(n), y = F1(n), S = T5(n), [E, C] = b.useState(null), N = b.useRef(null), P = Re(t, N, w.onContentChange), A = b.useRef(0), L = b.useRef(""), _ = b.useRef(0), M = b.useRef(null), j = b.useRef("right"), k = b.useRef(0), D = m ? D1 : b.Fragment, R = m ? { as: O5, allowPinchZoom: !0 } : void 0, O = (T) => {
      var W, B;
      const F = L.current + T, z = S().filter((Y) => !Y.disabled), $ = document.activeElement, U = (W = z.find((Y) => Y.ref.current === $)) == null ? void 0 : W.textValue, V = z.map((Y) => Y.textValue), Q = X5(V, F, U), K = (B = z.find((Y) => Y.textValue === Q)) == null ? void 0 : B.ref.current;
      (function Y(ie) {
        L.current = ie, window.clearTimeout(A.current), ie !== "" && (A.current = window.setTimeout(() => Y(""), 1e3));
      })(F), K && setTimeout(() => K.focus());
    };
    b.useEffect(() => () => window.clearTimeout(A.current), []), BD();
    const I = b.useCallback((T) => {
      var z, $;
      return j.current === ((z = M.current) == null ? void 0 : z.side) && q5(T, ($ = M.current) == null ? void 0 : $.area);
    }, []);
    return /* @__PURE__ */ f.jsx(
      R5,
      {
        scope: n,
        searchRef: L,
        onItemEnter: b.useCallback(
          (T) => {
            I(T) && T.preventDefault();
          },
          [I]
        ),
        onItemLeave: b.useCallback(
          (T) => {
            var F;
            I(T) || ((F = N.current) == null || F.focus(), C(null));
          },
          [I]
        ),
        onTriggerLeave: b.useCallback(
          (T) => {
            I(T) && T.preventDefault();
          },
          [I]
        ),
        pointerGraceTimerRef: _,
        onPointerGraceIntentChange: b.useCallback((T) => {
          M.current = T;
        }, []),
        children: /* @__PURE__ */ f.jsx(D, { ...R, children: /* @__PURE__ */ f.jsx(
          Qb,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: ae(i, (T) => {
              var F;
              T.preventDefault(), (F = N.current) == null || F.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ f.jsx(
              Gb,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: u,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ f.jsx(
                  LO,
                  {
                    asChild: !0,
                    ...y,
                    dir: g.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: C,
                    onEntryFocus: ae(a, (T) => {
                      g.isUsingKeyboardRef.current || T.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ f.jsx(
                      wO,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": oS(w.open),
                        "data-radix-menu-content": "",
                        dir: g.dir,
                        ...v,
                        ...x,
                        ref: P,
                        style: { outline: "none", ...x.style },
                        onKeyDown: ae(x.onKeyDown, (T) => {
                          const z = T.target.closest("[data-radix-menu-content]") === T.currentTarget, $ = T.ctrlKey || T.altKey || T.metaKey, U = T.key.length === 1;
                          z && (T.key === "Tab" && T.preventDefault(), !$ && U && O(T.key));
                          const V = N.current;
                          if (T.target !== V || !C5.includes(T.key)) return;
                          T.preventDefault();
                          const K = S().filter((W) => !W.disabled).map((W) => W.ref.current);
                          L1.includes(T.key) && K.reverse(), Y5(K);
                        }),
                        onBlur: ae(e.onBlur, (T) => {
                          T.currentTarget.contains(T.target) || (window.clearTimeout(A.current), L.current = "");
                        }),
                        onPointerMove: ae(
                          e.onPointerMove,
                          ys((T) => {
                            const F = T.target, z = k.current !== T.clientX;
                            if (T.currentTarget.contains(F) && z) {
                              const $ = T.clientX > k.current ? "right" : "left";
                              j.current = $, k.current = T.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
V1.displayName = Rt;
var F5 = "MenuGroup", dh = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(Le.div, { role: "group", ...r, ref: t });
  }
);
dh.displayName = F5;
var z5 = "MenuLabel", B1 = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(Le.div, { ...r, ref: t });
  }
);
B1.displayName = z5;
var Ha = "MenuItem", Ly = "menu.itemSelect", Fc = b.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = b.useRef(null), s = Os(Ha, e.__scopeMenu), l = ch(Ha, e.__scopeMenu), a = Re(t, i), c = b.useRef(!1), d = () => {
      const u = i.current;
      if (!n && u) {
        const p = new CustomEvent(Ly, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Ly, (h) => r == null ? void 0 : r(h), { once: !0 }), Kb(u, p), p.defaultPrevented ? c.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ f.jsx(
      U1,
      {
        ...o,
        ref: a,
        disabled: n,
        onClick: ae(e.onClick, d),
        onPointerDown: (u) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, u), c.current = !0;
        },
        onPointerUp: ae(e.onPointerUp, (u) => {
          var p;
          c.current || (p = u.currentTarget) == null || p.click();
        }),
        onKeyDown: ae(e.onKeyDown, (u) => {
          const p = l.searchRef.current !== "";
          n || p && u.key === " " || Nf.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
Fc.displayName = Ha;
var U1 = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = ch(Ha, n), l = F1(n), a = b.useRef(null), c = Re(t, a), [d, u] = b.useState(!1), [p, h] = b.useState("");
    return b.useEffect(() => {
      const m = a.current;
      m && h((m.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ f.jsx(
      gs.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ f.jsx(OO, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ f.jsx(
          Le.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: ae(
              e.onPointerMove,
              ys((m) => {
                r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ae(
              e.onPointerLeave,
              ys((m) => s.onItemLeave(m))
            ),
            onFocus: ae(e.onFocus, () => u(!0)),
            onBlur: ae(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), $5 = "MenuCheckboxItem", K1 = b.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ f.jsx(Q1, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ f.jsx(
      Fc,
      {
        role: "menuitemcheckbox",
        "aria-checked": Va(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ph(n),
        onSelect: ae(
          o.onSelect,
          () => r == null ? void 0 : r(Va(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
K1.displayName = $5;
var W1 = "MenuRadioGroup", [H5, V5] = Zr(
  W1,
  { value: void 0, onValueChange: () => {
  } }
), Y1 = b.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Ze(r);
    return /* @__PURE__ */ f.jsx(H5, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ f.jsx(dh, { ...o, ref: t }) });
  }
);
Y1.displayName = W1;
var G1 = "MenuRadioItem", X1 = b.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = V5(G1, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ f.jsx(Q1, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ f.jsx(
      Fc,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": ph(i),
        onSelect: ae(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
X1.displayName = G1;
var fh = "MenuItemIndicator", [Q1, B5] = Zr(
  fh,
  { checked: !1 }
), q1 = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = B5(fh, n);
    return /* @__PURE__ */ f.jsx(
      Vn,
      {
        present: r || Va(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ f.jsx(
          Le.span,
          {
            ...o,
            ref: t,
            "data-state": ph(i.checked)
          }
        )
      }
    );
  }
);
q1.displayName = fh;
var U5 = "MenuSeparator", Z1 = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(
      Le.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Z1.displayName = U5;
var K5 = "MenuArrow", J1 = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Oc(n);
    return /* @__PURE__ */ f.jsx(bO, { ...o, ...r, ref: t });
  }
);
J1.displayName = K5;
var W5 = "MenuSub", [c4, eS] = Zr(W5), Ci = "MenuSubTrigger", tS = b.forwardRef(
  (e, t) => {
    const n = Jr(Ci, e.__scopeMenu), r = Os(Ci, e.__scopeMenu), o = eS(Ci, e.__scopeMenu), i = ch(Ci, e.__scopeMenu), s = b.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: a } = i, c = { __scopeMenu: e.__scopeMenu }, d = b.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return b.useEffect(() => d, [d]), b.useEffect(() => {
      const u = l.current;
      return () => {
        window.clearTimeout(u), a(null);
      };
    }, [l, a]), /* @__PURE__ */ f.jsx(lh, { asChild: !0, ...c, children: /* @__PURE__ */ f.jsx(
      U1,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": oS(n.open),
        ...e,
        ref: Pc(t, o.onTriggerChange),
        onClick: (u) => {
          var p;
          (p = e.onClick) == null || p.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: ae(
          e.onPointerMove,
          ys((u) => {
            i.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: ae(
          e.onPointerLeave,
          ys((u) => {
            var h, m;
            d();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const x = (m = n.content) == null ? void 0 : m.dataset.side, w = x === "right", g = w ? -5 : 5, v = p[w ? "left" : "right"], y = p[w ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + g, y: u.clientY },
                  { x: v, y: p.top },
                  { x: y, y: p.top },
                  { x: y, y: p.bottom },
                  { x: v, y: p.bottom }
                ],
                side: x
              }), window.clearTimeout(l.current), l.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(u), u.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: ae(e.onKeyDown, (u) => {
          var h;
          const p = i.searchRef.current !== "";
          e.disabled || p && u.key === " " || _5[r.dir].includes(u.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
tS.displayName = Ci;
var nS = "MenuSubContent", rS = b.forwardRef(
  (e, t) => {
    const n = $1(Rt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Jr(Rt, e.__scopeMenu), s = Os(Rt, e.__scopeMenu), l = eS(nS, e.__scopeMenu), a = b.useRef(null), c = Re(t, a);
    return /* @__PURE__ */ f.jsx(gs.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(Vn, { present: r || i.open, children: /* @__PURE__ */ f.jsx(gs.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(
      uh,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var u;
          s.isUsingKeyboardRef.current && ((u = a.current) == null || u.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: ae(e.onFocusOutside, (d) => {
          d.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: ae(e.onEscapeKeyDown, (d) => {
          s.onClose(), d.preventDefault();
        }),
        onKeyDown: ae(e.onKeyDown, (d) => {
          var h;
          const u = d.currentTarget.contains(d.target), p = k5[s.dir].includes(d.key);
          u && p && (i.onOpenChange(!1), (h = l.trigger) == null || h.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
rS.displayName = nS;
function oS(e) {
  return e ? "open" : "closed";
}
function Va(e) {
  return e === "indeterminate";
}
function ph(e) {
  return Va(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Y5(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function G5(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function X5(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = G5(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const a = s.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function Q5(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i], a = t[s], c = l.x, d = l.y, u = a.x, p = a.y;
    d > r != p > r && n < (u - c) * (r - d) / (p - d) + c && (o = !o);
  }
  return o;
}
function q5(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Q5(n, t);
}
function ys(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Z5 = z1, J5 = lh, eF = H1, tF = V1, nF = dh, rF = B1, oF = Fc, iF = K1, sF = Y1, lF = X1, aF = q1, cF = Z1, uF = J1, dF = tS, fF = rS, zc = "DropdownMenu", [pF] = ri(
  zc,
  [O1]
), st = O1(), [hF, iS] = pF(zc), sS = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: l = !0
  } = e, a = st(t), c = b.useRef(null), [d, u] = Ub({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: zc
  });
  return /* @__PURE__ */ f.jsx(
    hF,
    {
      scope: t,
      triggerId: yf(),
      triggerRef: c,
      contentId: yf(),
      open: d,
      onOpenChange: u,
      onOpenToggle: b.useCallback(() => u((p) => !p), [u]),
      modal: l,
      children: /* @__PURE__ */ f.jsx(Z5, { ...a, open: d, onOpenChange: u, dir: r, modal: l, children: n })
    }
  );
};
sS.displayName = zc;
var lS = "DropdownMenuTrigger", aS = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = iS(lS, n), s = st(n);
    return /* @__PURE__ */ f.jsx(J5, { asChild: !0, ...s, children: /* @__PURE__ */ f.jsx(
      Le.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Pc(t, i.triggerRef),
        onPointerDown: ae(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: ae(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
aS.displayName = lS;
var mF = "DropdownMenuPortal", cS = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = st(t);
  return /* @__PURE__ */ f.jsx(eF, { ...r, ...n });
};
cS.displayName = mF;
var uS = "DropdownMenuContent", dS = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = iS(uS, n), i = st(n), s = b.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      tF,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: ae(e.onCloseAutoFocus, (l) => {
          var a;
          s.current || (a = o.triggerRef.current) == null || a.focus(), s.current = !1, l.preventDefault();
        }),
        onInteractOutside: ae(e.onInteractOutside, (l) => {
          const a = l.detail.originalEvent, c = a.button === 0 && a.ctrlKey === !0, d = a.button === 2 || c;
          (!o.modal || d) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
dS.displayName = uS;
var gF = "DropdownMenuGroup", yF = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
    return /* @__PURE__ */ f.jsx(nF, { ...o, ...r, ref: t });
  }
);
yF.displayName = gF;
var xF = "DropdownMenuLabel", fS = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
    return /* @__PURE__ */ f.jsx(rF, { ...o, ...r, ref: t });
  }
);
fS.displayName = xF;
var vF = "DropdownMenuItem", pS = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
    return /* @__PURE__ */ f.jsx(oF, { ...o, ...r, ref: t });
  }
);
pS.displayName = vF;
var wF = "DropdownMenuCheckboxItem", hS = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ f.jsx(iF, { ...o, ...r, ref: t });
});
hS.displayName = wF;
var bF = "DropdownMenuRadioGroup", SF = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ f.jsx(sF, { ...o, ...r, ref: t });
});
SF.displayName = bF;
var NF = "DropdownMenuRadioItem", mS = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ f.jsx(lF, { ...o, ...r, ref: t });
});
mS.displayName = NF;
var EF = "DropdownMenuItemIndicator", gS = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ f.jsx(aF, { ...o, ...r, ref: t });
});
gS.displayName = EF;
var CF = "DropdownMenuSeparator", yS = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ f.jsx(cF, { ...o, ...r, ref: t });
});
yS.displayName = CF;
var _F = "DropdownMenuArrow", kF = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
    return /* @__PURE__ */ f.jsx(uF, { ...o, ...r, ref: t });
  }
);
kF.displayName = _F;
var TF = "DropdownMenuSubTrigger", xS = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ f.jsx(dF, { ...o, ...r, ref: t });
});
xS.displayName = TF;
var jF = "DropdownMenuSubContent", vS = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ f.jsx(
    fF,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
vS.displayName = jF;
var IF = sS, PF = aS, MF = cS, wS = dS, bS = fS, SS = pS, NS = hS, ES = mS, CS = gS, _S = yS, kS = xS, TS = vS;
const AF = IF, RF = PF, DF = b.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.jsxs(
  kS,
  {
    ref: o,
    className: Z(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.jsx(Yp, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DF.displayName = kS.displayName;
const LF = b.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  TS,
  {
    ref: n,
    className: Z(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
LF.displayName = TS.displayName;
const jS = b.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.jsx(MF, { children: /* @__PURE__ */ f.jsx(
  wS,
  {
    ref: r,
    sideOffset: t,
    className: Z(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
jS.displayName = wS.displayName;
const _i = b.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  SS,
  {
    ref: r,
    className: Z(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
_i.displayName = SS.displayName;
const OF = b.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.jsxs(
  NS,
  {
    ref: o,
    className: Z(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(CS, { children: /* @__PURE__ */ f.jsx(cf, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
OF.displayName = NS.displayName;
const FF = b.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(
  ES,
  {
    ref: r,
    className: Z(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(CS, { children: /* @__PURE__ */ f.jsx(ER, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
FF.displayName = ES.displayName;
const zF = b.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  bS,
  {
    ref: r,
    className: Z(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
zF.displayName = bS.displayName;
const Ef = b.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  _S,
  {
    ref: n,
    className: Z("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Ef.displayName = _S.displayName;
const $F = ({
  nodeId: e,
  field: t,
  index: n,
  onDragStart: r,
  onDragOver: o,
  onDrop: i,
  isDragging: s,
  isDragOver: l,
  isReadOnly: a
}) => {
  var _;
  const c = Nt(), [d, u] = b.useState(t.name || ""), [p, h] = b.useState(!1), [m, x] = b.useState(!1);
  b.useEffect(() => {
    p || u(t.name || "");
  }, [t.name, p]), b.useEffect(() => {
    if (a) return;
    const M = setTimeout(() => {
      d !== (t.name || "") && (t.isVirtual === !0 || t.type === "object" || t.type === "array") && c(Vl({ nodeId: e, fieldIndex: n, updates: { name: d } }));
    }, 500);
    return () => clearTimeout(M);
  }, [d, e, n, c, t.name, t.isVirtual, t.type, a]);
  const w = xe((M) => M.schema.present.edges), g = xe((M) => M.schema.present.nodes);
  let v = "";
  if (t.isVirtual) {
    const M = w.find((j) => j.source === e && j.sourceHandle === t.name);
    if (M) {
      const j = g.find((k) => k.id === M.target);
      j && (v = j.data.label);
    }
  }
  let y = !1;
  if (t.isVirtual) {
    const M = w.find((j) => j.source === e && j.sourceHandle === t.name);
    M && ((_ = M.data) == null ? void 0 : _.relationshipType) === "1-n" && (y = !0);
  }
  const [S, E] = b.useState(!1);
  let C = null;
  if (t.isVirtual) {
    const M = w.find((j) => j.source === e && j.sourceHandle === t.name);
    M && (C = M.target);
  } else if (t.type === "object") {
    const M = w.find((j) => j.source === e && j.sourceHandle === t.name);
    M && (C = M.target);
  }
  const N = C ? g.find((M) => M.id === C) : null, P = !!t.children && t.children.length > 0, A = !!N || P, L = N ? N.data.isActive !== !1 : !1;
  return /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        draggable: !a,
        onDragStart: (M) => {
          if (!a) {
            if (M.target.tagName === "INPUT") {
              M.preventDefault();
              return;
            }
            r(M, n);
          }
        },
        onDragOver: (M) => !a && o(M, n),
        onDrop: (M) => !a && i(M, n),
        className: Z(
          "group/field flex items-center gap-2 px-2.5 py-2 hover:bg-gray-100 rounded-md transition-all duration-150 border border-transparent hover:border-gray-200 overflow-hidden",
          s && "opacity-50",
          l && "border-blue-500 bg-blue-50",
          t.isVirtual === !0 && !y && t.type !== "array" && t.type !== "object" ? "bg-amber-50 hover:bg-amber-100 border-amber-200" : "bg-gray-100 hover:bg-gray-200 border-gray-200",
          // Darker gray for standard types including array/object
          a && "cursor-default hover:bg-transparent pl-1"
        ),
        children: [
          !a && /* @__PURE__ */ f.jsx(kb, { className: "w-3 h-3 text-gray-400 cursor-move hover:text-gray-600 transition-colors flex-shrink-0" }),
          A && /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => E(!S),
              className: "p-0.5 hover:bg-gray-200 rounded text-gray-500 flex-shrink-0",
              children: S ? /* @__PURE__ */ f.jsx(Cb, { className: "w-3 h-3" }) : /* @__PURE__ */ f.jsx(Yp, { className: "w-3 h-3" })
            }
          ),
          !a && /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.visible !== !1,
              onChange: () => c(vb({ nodeId: e, fieldIndex: n })),
              className: "w-4 h-4 cursor-pointer accent-blue-600"
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { className: "flex-1 min-w-[60px] overflow-hidden flex items-center gap-2", children: [
            /* @__PURE__ */ f.jsx(
              ht,
              {
                value: d,
                onChange: (M) => u(M.target.value),
                onFocus: () => h(!0),
                onBlur: () => h(!1),
                placeholder: "Field Name",
                disabled: a || !t.isVirtual,
                className: Z(
                  "h-7 flex-1 text-xs bg-transparent border-0 text-gray-900 font-bold font-mono px-1 focus:bg-white focus:border-gray-500 focus:px-2 rounded placeholder:text-gray-400",
                  t.visible === !1 && "line-through text-gray-500",
                  (a || !t.isVirtual) && "cursor-not-allowed disabled:opacity-100 disabled:bg-transparent"
                )
              }
            ),
            !A && t.isVirtual && v && /* @__PURE__ */ f.jsxs("span", { className: "text-xs text-green-700 font-medium px-2 py-0.5 bg-green-100 rounded border border-green-200 whitespace-nowrap", children: [
              "→ ",
              v
            ] }),
            A && N && /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 rounded border border-blue-200 min-w-0 max-w-[120px]", children: [
              !a && /* @__PURE__ */ f.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: L,
                  onChange: () => {
                    re.emit(oe.TABLE_TOGGLE_VISIBILITY, {
                      id: N.id,
                      isVisible: !L
                    });
                  },
                  className: "w-3 h-3 cursor-pointer accent-blue-600 flex-shrink-0",
                  title: "Show/Hide Table on Board"
                }
              ),
              /* @__PURE__ */ f.jsxs(
                "span",
                {
                  className: "text-xs text-blue-600 font-medium truncate block",
                  onClick: () => {
                    L || re.emit(oe.TABLE_TOGGLE_VISIBILITY, {
                      id: N.id,
                      isVisible: !0
                    });
                  },
                  children: [
                    ": ",
                    N.data.label
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-1 ml-auto shrink-0 max-w-[40%] overflow-hidden justify-end", children: [
            /* @__PURE__ */ f.jsx("div", { className: Z(
              "text-[9px] font-bold font-mono px-1.5 py-0.5 rounded border uppercase tracking-wider shrink-0",
              y || t.type === "array" ? "bg-orange-100 text-orange-700 border-orange-200" : t.type === "object" || t.type === "jsonb" ? "bg-violet-100 text-violet-700 border-violet-200" : t.isVirtual ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-gray-50 text-gray-500 border-gray-200"
            ), children: y || t.type === "array" ? "Array" : t.type === "object" || t.type === "jsonb" ? "Object" : t.isVirtual ? "Virtual" : t.type }),
            (t.type === "object" || t.type === "array" || t.isVirtual) && /* @__PURE__ */ f.jsx("div", { className: Z(
              "flex items-center gap-1 text-[9px] font-bold font-mono px-1.5 py-0.5 rounded border uppercase shrink-0",
              N ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-orange-50 text-orange-700 border-orange-200"
            ), children: /* @__PURE__ */ f.jsxs("span", { className: "truncate max-w-[80px]", children: [
              "Ref: ",
              N ? "True" : "False"
            ] }) }),
            N && /* @__PURE__ */ f.jsx("div", { className: "hidden xl:flex items-center gap-1 text-[9px] font-bold font-mono text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 shrink-0 max-w-[80px]", children: /* @__PURE__ */ f.jsxs("span", { className: "truncate", children: [
              "→ ",
              N.data.tableName || N.data.label
            ] }) })
          ] }),
          !a && t.isVirtual && /* @__PURE__ */ f.jsxs(AF, { children: [
            /* @__PURE__ */ f.jsx(RF, { asChild: !0, children: /* @__PURE__ */ f.jsx("button", { className: "h-6 w-6 flex items-center justify-center rounded-md hover:bg-gray-200 text-gray-500 transition-colors ml-1 shrink-0", children: /* @__PURE__ */ f.jsx(Gp, { className: "w-4 h-4" }) }) }),
            /* @__PURE__ */ f.jsxs(jS, { align: "end", className: "w-48", children: [
              /* @__PURE__ */ f.jsx(_i, { onClick: () => c(Vl({ nodeId: e, fieldIndex: n, updates: { isPrimaryKey: !t.isPrimaryKey } })), children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
                /* @__PURE__ */ f.jsx("div", { className: Z(
                  "w-4 h-4 flex items-center justify-center rounded text-[8px] font-bold border",
                  t.isPrimaryKey ? "bg-yellow-100 border-yellow-300 text-yellow-700" : "bg-gray-50 border-gray-200 text-gray-400"
                ), children: "PK" }),
                /* @__PURE__ */ f.jsx("span", { children: "Primary Key" }),
                t.isPrimaryKey && /* @__PURE__ */ f.jsx(cf, { className: "w-3 h-3 ml-auto text-blue-600" })
              ] }) }),
              /* @__PURE__ */ f.jsx(_i, { onClick: () => c(Vl({ nodeId: e, fieldIndex: n, updates: { isForeignKey: !t.isForeignKey } })), children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
                /* @__PURE__ */ f.jsx("div", { className: Z(
                  "w-4 h-4 flex items-center justify-center rounded text-[8px] font-bold border",
                  t.isForeignKey ? "bg-sky-100 border-sky-300 text-sky-700" : "bg-gray-50 border-gray-200 text-gray-400"
                ), children: "FK" }),
                /* @__PURE__ */ f.jsx("span", { children: "Foreign Key" }),
                t.isForeignKey && /* @__PURE__ */ f.jsx(cf, { className: "w-3 h-3 ml-auto text-blue-600" })
              ] }) }),
              /* @__PURE__ */ f.jsx(Ef, {}),
              /* @__PURE__ */ f.jsxs(_i, { onClick: () => {
                var j;
                let M = null;
                if (t.isVirtual || t.type === "array") {
                  const k = w.find((D) => D.source === e && D.sourceHandle === t.name);
                  k && k.targetHandle ? M = {
                    targetNodeId: k.target,
                    sourceKey: t.linkedPrimaryKeyField || "id",
                    targetKey: k.targetHandle,
                    fieldName: t.name,
                    linkType: "1-n"
                  } : M = {
                    targetNodeId: "",
                    sourceKey: "id",
                    targetKey: "",
                    fieldName: t.name,
                    linkType: "1-n"
                  };
                } else if (t.type === "object") {
                  const k = w.find((D) => {
                    var R;
                    return D.source === e && ((R = D.data) == null ? void 0 : R.objectFieldName) === t.name;
                  });
                  k && k.sourceHandle && k.targetHandle ? M = {
                    targetNodeId: k.target,
                    sourceKey: ((j = k.data) == null ? void 0 : j.sourceFK) || k.sourceHandle || "",
                    // FK (stored in data for n-1)
                    targetKey: k.targetHandle,
                    // PK
                    fieldName: t.name,
                    linkType: "n-1"
                  } : M = {
                    targetNodeId: "",
                    sourceKey: "",
                    targetKey: "id",
                    fieldName: t.name,
                    linkType: "n-1"
                  };
                }
                M && c(cD({
                  sourceNodeId: e,
                  fieldIndex: n,
                  initialValues: M
                }));
              }, children: [
                /* @__PURE__ */ f.jsx(jc, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f.jsx("span", { children: "Chỉnh sửa liên kết" })
              ] }),
              /* @__PURE__ */ f.jsx(Ef, {}),
              /* @__PURE__ */ f.jsxs(_i, { onClick: () => x(!0), className: "text-red-600 focus:text-red-700 focus:bg-red-50", children: [
                /* @__PURE__ */ f.jsx(hr, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f.jsx("span", { children: "Xóa trường" })
              ] })
            ] })
          ] })
        ]
      }
    ),
    S && /* @__PURE__ */ f.jsx(
      SD,
      {
        nodeId: N ? N.id : void 0,
        fields: N ? void 0 : t.children,
        isReadOnly: a
      }
    ),
    /* @__PURE__ */ f.jsx(ti, { open: m, onOpenChange: x, children: /* @__PURE__ */ f.jsxs(Xr, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ f.jsxs(Qr, { children: [
        /* @__PURE__ */ f.jsxs(qr, { className: "flex items-center gap-2 text-red-600", children: [
          /* @__PURE__ */ f.jsx(hr, { className: "w-5 h-5" }),
          "Xóa trường ",
          t.name,
          "?"
        ] }),
        /* @__PURE__ */ f.jsxs(ni, { className: "py-2", children: [
          /* @__PURE__ */ f.jsx("span", { className: "block font-medium text-gray-900 mb-2", children: "CẢNH BÁO CAO ĐỘ:" }),
          "Hành động này sẽ xóa trường ",
          /* @__PURE__ */ f.jsx("strong", { children: t.name }),
          " VÀ ",
          /* @__PURE__ */ f.jsx("strong", { className: "text-red-600", children: "TẤT CẢ các bảng con (descendants)" }),
          " được sinh ra từ trường này.",
          /* @__PURE__ */ f.jsx("br", {}),
          /* @__PURE__ */ f.jsx("br", {}),
          "Bạn có chắc chắn muốn tiếp tục không? Hành động này không thể hoàn tác."
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex justify-end gap-3 mt-4", children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => x(!1),
            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            children: "Hủy bỏ"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => {
              c(Vb(e, n)), x(!1);
            },
            className: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
            children: "Xác nhận Xóa"
          }
        )
      ] })
    ] }) })
  ] });
}, IS = b.memo($F), HF = ({
  node: e,
  depth: t = 0,
  isExpanded: n,
  onToggleExpand: r,
  isSelected: o,
  onDragStart: i,
  onDragOver: s,
  onDrop: l,
  isDragging: a,
  isDragOver: c
}) => {
  const d = Nt(), {
    editingNodeId: u,
    editName: p,
    menuOpenNodeId: h,
    deleteDialogNodeId: m,
    draggedFieldNodeId: x,
    draggedFieldIndex: w,
    dragOverFieldIndex: g
  } = xe((j) => j.sidebar), v = u === e.id, y = v ? p : e.data.label, S = h === e.id, E = m === e.id, C = x === e.id, N = () => {
    y.trim() && (d(af({ id: e.id, updates: { label: y.trim() } })), d(ey(null)));
  }, P = (j, k) => {
    d(ry({ nodeId: e.id, index: k })), j.dataTransfer.effectAllowed = "move", j.stopPropagation();
  }, A = (j, k) => {
    j.preventDefault(), j.stopPropagation(), C && w !== k && d(oy(k));
  }, L = (j, k) => {
    j.preventDefault(), j.stopPropagation(), C && w !== null && w !== k && d(Wp({ nodeId: e.id, oldIndex: w, newIndex: k })), d(ry({ nodeId: null, index: null })), d(oy(null));
  }, _ = () => {
    d(Qp(e.id));
  }, M = () => d(ny(null));
  return /* @__PURE__ */ f.jsxs("div", { className: "mb-1", children: [
    /* @__PURE__ */ f.jsx(
      "div",
      {
        draggable: !0,
        onDragStart: (j) => i(j, e.id),
        onDragOver: (j) => s(j, e.id),
        onDrop: (j) => l(j, e.id),
        className: Z(
          "group flex items-center relative hover:bg-gray-100 transition-all duration-200 rounded-lg mx-2 mb-1",
          o && "bg-blue-50 shadow-sm ring-1 ring-blue-200",
          a && "opacity-50",
          c && "border-t-2 border-blue-500"
        ),
        style: { paddingLeft: `${t === 0 ? 8 : t * 12 + 8}px` },
        children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center relative w-full pr-2", children: [
          t === 0 && /* @__PURE__ */ f.jsx(
            "div",
            {
              className: "w-1.5 h-12 rounded-r-full shadow-sm mr-2 flex-shrink-0",
              style: {
                background: `linear-gradient(180deg, ${e.data.color || "#3b82f6"} 0%, ${e.data.color || "#3b82f6"}dd 100%)`
              }
            }
          ),
          t > 0 && /* @__PURE__ */ f.jsx("div", { className: "w-0.5 h-12 bg-green-500/60 rounded-r-full mr-1 flex-shrink-0" }),
          /* @__PURE__ */ f.jsx("button", { onClick: () => r(e.id), className: "p-2 hover:bg-gray-200 z-10 rounded-full transition-colors ml-1", children: n ? /* @__PURE__ */ f.jsx(Cb, { className: "w-4 h-4 text-gray-500" }) : /* @__PURE__ */ f.jsx(Yp, { className: "w-4 h-4 text-gray-500" }) }),
          /* @__PURE__ */ f.jsx(kb, { className: "w-4 h-4 text-gray-400 mr-2 cursor-move opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ f.jsx("div", { className: "flex-1 cursor-pointer py-3 min-w-0", onClick: () => {
            re.emit(oe.TABLE_FOCUS, { nodeId: e.id });
          }, children: v ? /* @__PURE__ */ f.jsx(
            ht,
            {
              value: y,
              onChange: (j) => d(ty(j.target.value)),
              onBlur: N,
              onKeyDown: (j) => j.key === "Enter" && N(),
              autoFocus: !0,
              className: "h-8 bg-white border-gray-300 text-gray-900",
              onClick: (j) => j.stopPropagation()
            }
          ) : /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("span", { className: "text-sm font-medium text-gray-700 truncate block", title: e.data.label, children: e.data.label }),
            /* @__PURE__ */ f.jsxs("div", { className: "text-[10px] text-gray-500 mt-0.5 flex items-center gap-1.5", children: [
              /* @__PURE__ */ f.jsxs("span", { children: [
                "ID: ",
                e.id
              ] }),
              /* @__PURE__ */ f.jsx("span", { children: "•" }),
              /* @__PURE__ */ f.jsxs("span", { children: [
                "Type: ",
                e.data.tableName || e.data.label
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ f.jsx("button", { onClick: () => d(ny(S ? null : e.id)), className: "p-2 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-all", children: /* @__PURE__ */ f.jsx(Gp, { className: "w-4 h-4 text-gray-500" }) }),
            S && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 z-10", onClick: M }),
              /* @__PURE__ */ f.jsxs("div", { className: "absolute right-0 top-8 z-20 bg-white border border-gray-200 rounded-md shadow-lg min-w-[140px]", children: [
                /* @__PURE__ */ f.jsxs("button", { onClick: () => {
                  d(ey(e.id)), d(ty(e.data.label)), M();
                }, className: "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2 text-gray-700", children: [
                  /* @__PURE__ */ f.jsx(jc, { className: "w-3 h-3" }),
                  " Rename"
                ] }),
                /* @__PURE__ */ f.jsxs("button", { onClick: () => {
                  M(), d(gl(e.id));
                }, className: "w-full px-4 py-2 text-left text-sm hover:bg-red-50 text-red-600 flex items-center gap-2 border-t border-gray-100", children: [
                  /* @__PURE__ */ f.jsx(hr, { className: "w-3 h-3" }),
                  " Delete"
                ] })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    n && /* @__PURE__ */ f.jsxs("div", { className: "pl-4 pr-4 pb-3 space-y-1.5 border-t border-gray-100 pt-3 mt-2 bg-gray-50/50 rounded-b-lg", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "text-xs font-bold text-gray-500 mb-3 px-2 uppercase tracking-wider flex items-center gap-2", children: [
        /* @__PURE__ */ f.jsx("div", { className: "w-1 h-3 bg-gray-400 rounded-full" }),
        " Trường"
      ] }),
      e.data.columns.map((j, k) => /* @__PURE__ */ f.jsx(
        IS,
        {
          nodeId: e.id,
          field: j,
          index: k,
          onDragStart: P,
          onDragOver: A,
          onDrop: L,
          isDragging: C && w === k,
          isDragOver: C && g === k
        },
        k
      )),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: _,
          className: "w-full mt-3 px-3 py-2 text-xs font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md flex items-center justify-center gap-2 border border-dashed border-gray-300 hover:border-blue-300 transition-all duration-200",
          children: [
            /* @__PURE__ */ f.jsx(As, { className: "w-3.5 h-3.5" }),
            "Thêm trường"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx(ti, { open: E, onOpenChange: (j) => !j && d(gl(null)), children: /* @__PURE__ */ f.jsxs(Xr, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ f.jsxs(Qr, { children: [
        /* @__PURE__ */ f.jsxs(qr, { className: "flex items-center gap-2 text-red-600", children: [
          /* @__PURE__ */ f.jsx(hr, { className: "w-5 h-5" }),
          "Xóa bảng ",
          e.data.label,
          "?"
        ] }),
        /* @__PURE__ */ f.jsxs(ni, { className: "py-2", children: [
          /* @__PURE__ */ f.jsx("span", { className: "block font-medium text-gray-900 mb-2", children: "CẢNH BÁO CAO ĐỘ:" }),
          "Hành động này sẽ xóa bảng ",
          /* @__PURE__ */ f.jsx("strong", { children: e.data.label }),
          " VÀ ",
          /* @__PURE__ */ f.jsx("strong", { className: "text-red-600", children: "TẤT CẢ các bảng con (descendants)" }),
          " đang được liên kết với nó.",
          /* @__PURE__ */ f.jsx("br", {}),
          /* @__PURE__ */ f.jsx("br", {}),
          "Bạn có chắc chắn muốn tiếp tục không? Hành động này không thể hoàn tác."
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex justify-end gap-3 mt-4", children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => d(gl(null)),
            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            children: "Hủy bỏ"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => {
              d(Hb(e.id)), d(gl(null));
            },
            className: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
            children: "Xác nhận Xóa"
          }
        )
      ] })
    ] }) })
  ] });
}, VF = b.memo(HF);
function BF() {
  const e = Nt(), t = xe((N) => N.schema.present.nodes), n = xe((N) => N.schema.present.edges), r = xe((N) => N.ui.selectedNodeId), {
    searchQuery: o,
    expandedNodes: i,
    draggedNodeId: s,
    dragOverNodeId: l,
    width: a,
    isResizing: c,
    isCollapsed: d
  } = xe((N) => N.sidebar), u = b.useRef(null), p = t.filter((N) => N.data.isActive !== !1), h = b.useMemo(() => {
    const N = new Set(n.map((P) => P.target));
    return p.filter((P) => !N.has(P.id));
  }, [p, n]), m = b.useMemo(() => o.trim() ? p.filter((N) => N.data.label.toLowerCase().includes(o.toLowerCase())) : h, [o, h, p]), x = (N) => {
    e(yR(N));
  }, w = (N, P) => {
    e(Qg(P)), N.dataTransfer.effectAllowed = "move";
  }, g = (N, P) => {
    N.preventDefault(), s && s !== P && e(qg(P));
  }, v = (N, P) => {
    if (N.preventDefault(), s && s !== P) {
      const A = t.findIndex((_) => _.id === s), L = t.findIndex((_) => _.id === P);
      if (A !== -1 && L !== -1) {
        const _ = [...t], [M] = _.splice(A, 1);
        _.splice(L, 0, M), e(Kp(_));
      }
    }
    e(Qg(null)), e(qg(null));
  }, y = (N) => {
    e(Jg(!0)), N.preventDefault(), window.addEventListener("mousemove", E), window.addEventListener("mouseup", S);
  }, S = () => {
    e(Jg(!1)), window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", S);
  }, E = (N) => {
    if (u.current && !d) {
      const P = N.clientX - u.current.getBoundingClientRect().left;
      P > 280 && P < 800 ? e(Zg(P)) : P <= 280 && e(Zg(280));
    }
  }, C = () => {
    e(Nb(!d));
  };
  return d ? /* @__PURE__ */ f.jsx("div", { className: "h-full bg-white border-r border-gray-200 flex flex-col items-center py-4 w-[50px] shrink-0 transition-all", children: /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: C,
      className: "p-2 hover:bg-gray-100 rounded text-gray-500 hover:text-blue-600 transition-colors",
      children: /* @__PURE__ */ f.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ f.jsx("polyline", { points: "13 17 18 12 13 7" }),
        /* @__PURE__ */ f.jsx("polyline", { points: "6 17 11 12 6 7" })
      ] })
    }
  ) }) : /* @__PURE__ */ f.jsxs(
    "div",
    {
      ref: u,
      className: "flex flex-col h-full bg-white border-r border-gray-200 flex-shrink-0 relative group transition-[width] duration-0 ease-linear",
      style: { width: `${a}px` },
      children: [
        /* @__PURE__ */ f.jsx(bD, {}),
        /* @__PURE__ */ f.jsxs("div", { className: "flex-1 overflow-y-auto overflow-x-hidden p-2", children: [
          m.map((N) => /* @__PURE__ */ f.jsx(
            VF,
            {
              node: N,
              isExpanded: i.includes(N.id),
              onToggleExpand: x,
              isSelected: r === N.id,
              onDragStart: w,
              onDragOver: g,
              onDrop: v,
              isDragging: s === N.id,
              isDragOver: l === N.id
            },
            N.id
          )),
          m.length === 0 && /* @__PURE__ */ f.jsx("div", { className: "text-gray-500 text-center py-4 text-sm italic", children: o ? "No tables found" : "No root tables visible" })
        ] }),
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: `absolute right-0 top-0 w-1 h-full cursor-col-resize hover:bg-blue-500 transition-colors z-40 ${c ? "bg-blue-500" : "bg-transparent"}`,
            onMouseDown: y
          }
        )
      ]
    }
  );
}
function UF() {
  const { fitView: e } = Ms();
  return b.useEffect(() => {
    const t = (r) => {
      r.nodeId && e({
        nodes: [{ id: r.nodeId }],
        duration: 800,
        padding: 0.2,
        maxZoom: 1.5
      });
    }, n = () => {
      setTimeout(() => e({ duration: 800, padding: 0.2 }), 100);
    };
    return re.on(oe.TABLE_FOCUS, t), re.on(oe.SCHEMA_AUTO_LAYOUT, n), () => {
      re.off(oe.TABLE_FOCUS, t), re.off(oe.SCHEMA_AUTO_LAYOUT, n);
    };
  }, [e]), null;
}
const so = {
  NODE: {
    HEADER_BG_DEFAULT: "#3b82f6"
  },
  RELATIONSHIP: {
    COLORS: {
      ONE_TO_ONE: "#22c55e",
      // green-500
      ONE_TO_MANY: "#3b82f6",
      // blue-500
      MANY_TO_ONE: "#a855f7",
      // purple-500
      DEFAULT: "#9ca3af"
    }
  }
};
function KF({ data: e, selected: t, id: n }) {
  const [r, o] = b.useState(!1), [i, s] = b.useState(e.label), [l, a] = b.useState(!1), c = e.color || so.NODE.HEADER_BG_DEFAULT, d = () => {
    re.emit(oe.LINK_FIELD_OPEN, { sourceNodeId: n });
  }, u = () => {
    const h = `table-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
    re.emit(oe.TABLE_ADD, {
      id: h,
      name: `${e.label} (Bản sao)`,
      tableName: e.tableName || e.label,
      columns: e.columns
    });
  }, p = () => {
    i.trim() && (re.emit(oe.TABLE_UPDATE, { id: n, updates: { label: i.trim() } }), o(!1));
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        className: Z(
          "bg-white border-2 rounded-lg shadow-xl min-w-[240px] group/node",
          t ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200"
        ),
        children: [
          /* @__PURE__ */ f.jsx(
            "div",
            {
              className: "text-white px-4 py-3 rounded-t-lg relative",
              style: { backgroundColor: c },
              children: /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "flex-1 mr-8", children: [
                  r ? /* @__PURE__ */ f.jsx(
                    ht,
                    {
                      value: i,
                      onChange: (h) => s(h.target.value),
                      onBlur: p,
                      onKeyDown: (h) => h.key === "Enter" && p(),
                      autoFocus: !0,
                      className: "h-7 bg-white/20 border-white/30 text-white placeholder:text-white/50 text-sm font-bold focus:bg-white/30"
                    }
                  ) : /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      className: "font-bold text-sm cursor-text hover:bg-white/10 rounded px-1 -ml-1",
                      onDoubleClick: () => o(!0),
                      children: e.label
                    }
                  ),
                  /* @__PURE__ */ f.jsxs("div", { className: "text-[10px] opacity-80 flex items-center gap-1.5 mt-1", children: [
                    /* @__PURE__ */ f.jsxs("span", { children: [
                      "ID: ",
                      n
                    ] }),
                    /* @__PURE__ */ f.jsx("span", { children: "•" }),
                    /* @__PURE__ */ f.jsx("span", { className: "font-mono", children: e.tableName || e.label })
                  ] })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { className: "flex gap-1 absolute right-2 top-2 opacity-0 group-hover/node:opacity-100 transition-opacity", children: [
                  /* @__PURE__ */ f.jsx(
                    "button",
                    {
                      onClick: () => o(!0),
                      className: "p-1 hover:bg-white/20 rounded transition-colors",
                      title: "Đổi tên",
                      children: /* @__PURE__ */ f.jsx(jc, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ f.jsx(
                    "button",
                    {
                      onClick: u,
                      className: "p-1 hover:bg-white/20 rounded transition-colors",
                      title: "Nhân bản (Instance)",
                      children: /* @__PURE__ */ f.jsx(_b, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ f.jsx(
                    "button",
                    {
                      onClick: () => a(!0),
                      className: "p-1 hover:bg-red-500/50 rounded transition-colors",
                      title: "Xóa",
                      children: /* @__PURE__ */ f.jsx(hr, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { className: "divide-y nodrag", children: [
            e.columns.filter((h) => h.visible !== !1).map((h) => /* @__PURE__ */ f.jsxs(
              "div",
              {
                className: Z(
                  "px-4 py-2 text-sm flex items-center gap-2 relative",
                  h.isPrimaryKey && "bg-yellow-50",
                  h.isForeignKey && "bg-blue-50",
                  h.isVirtual && "bg-green-50 border-l-2 border-l-green-400"
                ),
                children: [
                  /* @__PURE__ */ f.jsx(
                    Rr,
                    {
                      type: "target",
                      position: X.Left,
                      id: h.name,
                      isConnectable: !1,
                      className: "w-1 h-1 !bg-transparent !border-0 opacity-0 pointer-events-none absolute left-0",
                      style: {
                        top: "50%",
                        transform: "translateY(-50%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ f.jsx("span", { className: "font-medium text-gray-900 pointer-events-none", children: h.name || "" }),
                  h.isVirtual && h.linkedPrimaryKeyField ? /* @__PURE__ */ f.jsxs("span", { className: "text-gray-500 text-xs flex items-center gap-1 pointer-events-none", children: [
                    /* @__PURE__ */ f.jsx("span", { className: "text-green-600", children: "→" }),
                    /* @__PURE__ */ f.jsx("span", { className: "text-green-600 font-medium", children: h.linkedPrimaryKeyField })
                  ] }) : h.type === "object" && (h.linkedForeignKeyField || h.primaryKeyField) ? /* @__PURE__ */ f.jsxs("span", { className: "text-gray-500 text-xs flex items-center gap-1 pointer-events-none", children: [
                    /* @__PURE__ */ f.jsx("span", { className: "text-violet-600", children: "→" }),
                    /* @__PURE__ */ f.jsx("span", { className: "text-violet-600 font-medium", children: h.linkedForeignKeyField || h.primaryKeyField })
                  ] }) : /* @__PURE__ */ f.jsx("span", { className: "text-gray-500 text-xs pointer-events-none", children: h.type }),
                  /* @__PURE__ */ f.jsxs("div", { className: "flex gap-1 items-center ml-auto pointer-events-none", children: [
                    h.isVirtual && /* @__PURE__ */ f.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-emerald-100 text-emerald-700 border border-emerald-200/50 rounded shadow-sm font-bold select-none", title: "Virtual Field", children: "V" }),
                    h.isPrimaryKey && /* @__PURE__ */ f.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-amber-100 text-amber-700 border border-amber-200/50 rounded shadow-sm font-bold select-none", title: "Primary Key", children: "PK" }),
                    h.isForeignKey && /* @__PURE__ */ f.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-sky-100 text-sky-700 border border-sky-200/50 rounded shadow-sm font-bold select-none", title: "Foreign Key", children: "FK" }),
                    h.type === "object" && /* @__PURE__ */ f.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-violet-100 text-violet-700 border border-violet-200/50 rounded shadow-sm font-bold select-none", title: "Object", children: "O" }),
                    h.type === "array" && /* @__PURE__ */ f.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-orange-100 text-orange-700 border border-orange-200/50 rounded shadow-sm font-bold select-none", title: "Array", children: "A" })
                  ] }),
                  /* @__PURE__ */ f.jsx(
                    Rr,
                    {
                      type: "source",
                      position: X.Right,
                      id: h.name,
                      isConnectable: !1,
                      className: "w-1 h-1 !bg-transparent !border-0 opacity-0 pointer-events-none absolute right-0",
                      style: {
                        top: "50%",
                        transform: "translateY(-50%)"
                      }
                    }
                  )
                ]
              },
              h.name
            )),
            /* @__PURE__ */ f.jsx("div", { className: "px-4 py-2 border-t border-gray-200", children: /* @__PURE__ */ f.jsxs(
              "button",
              {
                onClick: d,
                className: "w-full flex items-center justify-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors",
                title: "Thêm field mới",
                children: [
                  /* @__PURE__ */ f.jsx(As, { className: "w-4 h-4" }),
                  /* @__PURE__ */ f.jsx("span", { children: "Thêm field" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ f.jsx("div", { className: "relative border-t border-gray-200 py-0 h-0", children: /* @__PURE__ */ f.jsx(
            Rr,
            {
              type: "target",
              position: X.Bottom,
              id: "object-target",
              isConnectable: !1,
              className: "w-1 h-1 !bg-transparent !border-0 opacity-0 pointer-events-none absolute",
              style: {
                left: "50%",
                transform: "translateX(-50%)"
              }
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(ti, { open: l, onOpenChange: a, children: /* @__PURE__ */ f.jsxs(Xr, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ f.jsxs(Qr, { children: [
        /* @__PURE__ */ f.jsxs(qr, { className: "flex items-center gap-2 text-red-600", children: [
          /* @__PURE__ */ f.jsx(hr, { className: "w-5 h-5" }),
          "Xóa bảng ",
          e.label,
          "?"
        ] }),
        /* @__PURE__ */ f.jsxs(ni, { className: "py-2", children: [
          /* @__PURE__ */ f.jsx("span", { className: "block font-medium text-gray-900 mb-2", children: "CẢNH BÁO CAO ĐỘ:" }),
          "Hành động này sẽ xóa bảng ",
          /* @__PURE__ */ f.jsx("strong", { children: e.label }),
          " VÀ ",
          /* @__PURE__ */ f.jsx("strong", { className: "text-red-600", children: "TẤT CẢ các bảng con (descendants)" }),
          " đang được liên kết với nó.",
          /* @__PURE__ */ f.jsx("br", {}),
          /* @__PURE__ */ f.jsx("br", {}),
          "Bạn có chắc chắn muốn tiếp tục không? Hành động này không thể hoàn tác."
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex justify-end gap-3 mt-4", children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => a(!1),
            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            children: "Hủy bỏ"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => {
              re.emit(oe.TABLE_DELETE, { id: n }), a(!1);
            },
            className: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
            children: "Xác nhận Xóa"
          }
        )
      ] })
    ] }) })
  ] });
}
const WF = b.memo(KF);
class hh {
  /**
   * Validates field name format
   */
  static validateFieldName(t) {
    return !t || t.trim().length === 0 ? { valid: !1, error: Iu.FIELD_NAME_REQUIRED } : t.length > ml.MAX_NAME_LENGTH ? { valid: !1, error: Iu.FIELD_NAME_TOO_LONG } : /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(t) ? { valid: !0 } : { valid: !1, error: Iu.FIELD_NAME_INVALID };
  }
  /**
   * Validates if a field name is reserved
   */
  static isReservedName(t) {
    return ml.RESERVED_NAMES.includes(t.toLowerCase());
  }
  /**
   * Sanitizes field name
   */
  static sanitizeFieldName(t) {
    return t.trim().toLowerCase().replace(/[^a-z0-9_]/g, "_").replace(/^[0-9]/, "_$&").substring(0, ml.MAX_NAME_LENGTH);
  }
  /**
   * Validates table name
   */
  static validateTableName(t) {
    return !t || t.trim().length === 0 ? { valid: !1, error: "Tên bảng không được để trống" } : t.length > ml.MAX_NAME_LENGTH ? { valid: !1, error: "Tên bảng quá dài (tối đa 63 ký tự)" } : { valid: !0 };
  }
  /**
   * Validates if two fields have compatible types for a relationship
   */
  static validateRelationshipTypes(t, n, r, o) {
    const i = t.toLowerCase(), s = n.toLowerCase();
    return i === s ? { valid: !0 } : this.COMPATIBLE_TYPE_GROUPS.some(
      (a) => a.includes(i) && a.includes(s)
    ) ? { valid: !0 } : {
      valid: !1,
      error: `Kiểu dữ liệu không khớp: ${r} (${t}) ≠ ${o} (${n})`
    };
  }
}
/**
 * Validates if two fields have compatible types for a relationship
 */
zs(hh, "COMPATIBLE_TYPE_GROUPS", [
  ["integer", "bigint", "smallint", "serial", "bigserial", "int8", "int4", "int2"],
  // Integer types
  ["varchar", "text", "char", "character varying", "string"],
  // String types
  ["uuid"],
  // UUID types (Strictly separate from strings)
  ["decimal", "numeric", "real", "double precision", "float"],
  // Floating types
  ["timestamp", "timestamptz", "date", "time"],
  // Date types
  ["boolean", "bool"]
  // Boolean types
]);
function PS({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: r,
  targetY: o,
  sourcePosition: i,
  targetPosition: s,
  style: l = {},
  markerEnd: a,
  data: c,
  selected: d,
  source: u,
  target: p,
  sourceHandleId: h,
  targetHandleId: m
}) {
  const { updateEdge: x, getNode: w, deleteElements: g, getNodes: v } = Ms(), y = Nt(), S = v(), [E, C] = b.useState(
    (c == null ? void 0 : c.relationshipType) || "1-n"
  ), [N, P] = b.useState(h || ""), [A, L] = b.useState(p), [_, M] = b.useState(""), [j, k] = b.useState(m || ""), [D, R] = b.useState(null), [O, I] = b.useState(!1), [T, F] = b.useState((c == null ? void 0 : c.pathType) || "bezier"), [z, $] = b.useState(!1), [U, V] = b.useState((c == null ? void 0 : c.relationshipType) === "1-n"), Q = b.useMemo(() => {
    if (!_ || !j || !A) return null;
    const q = w(u), te = S.find((se) => se.id === A);
    if (q && te) {
      const se = q.data.columns.find((ge) => ge.name === _), Ye = te.data.columns.find((ge) => ge.name === j);
      if (se && Ye) {
        const ge = hh.validateRelationshipTypes(
          se.type,
          Ye.type,
          se.name,
          Ye.name
        );
        if (!ge.valid) return ge.error;
      }
    }
    return null;
  }, [_, j, A, w, u, S]);
  b.useEffect(() => {
    R(Q || null);
  }, [Q]), b.useEffect(() => {
    var q;
    if (z) {
      P(h || ""), L(p);
      const te = w(u);
      let se = _, Ye = j;
      if (!se && te) {
        const Ve = te.data.columns.find((vn) => vn.name === h);
        (c == null ? void 0 : c.relationshipType) === "1-n" ? (se = (Ve == null ? void 0 : Ve.linkedPrimaryKeyField) || ((q = te.data.columns.find((vn) => vn.isPrimaryKey)) == null ? void 0 : q.name) || "", Ye = m || "") : (se = (c == null ? void 0 : c.sourceFK) || (Ve == null ? void 0 : Ve.linkedForeignKeyField) || "", Ye = m || ""), M(se), k(Ye);
      }
      if (te) {
        const Ve = te.data.columns.find((vn) => vn.name === h);
        Ve && U === void 0 && V(!!Ve.isVirtual);
      }
      const ge = te == null ? void 0 : te.data.columns.find((Ve) => Ve.name === h);
      ge && V(!!ge.isVirtual);
    }
  }, [z, u, p, h, m, c, w]);
  const K = () => {
    const q = w(u), te = S.find((ge) => ge.id === A);
    if (q && _) {
      const ge = q.data.columns.find((Ve) => Ve.name === _);
      if (ge && (ge.type === "array" || ge.type === "object")) {
        R(`Trường nguồn '${_}' có kiểu ${ge.type}. Chỉ được liên kết tới kiểu nguyên thủy.`);
        return;
      }
    }
    if (te && j) {
      const ge = te.data.columns.find((Ve) => Ve.name === j);
      if (ge && (ge.type === "array" || ge.type === "object")) {
        R(`Trường đích '${j}' có kiểu ${ge.type}. Chỉ được liên kết tới kiểu nguyên thủy.`);
        return;
      }
    }
    if (!N || !A || !_ || !j) return;
    R(null);
    const se = w(u);
    if (!se) return;
    const Ye = se.data.columns.findIndex((ge) => ge.name === h);
    Ye !== -1 && y(xb({
      nodeId: u,
      fieldIndex: Ye,
      skipRecursive: !0
      // We are replacing it immediately
    })), y(U ? wb({
      sourceNodeId: u,
      targetNodeId: A,
      sourcePK: _,
      targetFK: j,
      newFieldName: N,
      relationshipType: E
    }) : bb({
      sourceNodeId: u,
      targetNodeId: A,
      sourceFK: _,
      // This should be the FK column name in source table
      targetPK: j,
      // This should be the PK column name in target table
      newFieldName: N,
      relationshipType: E
    })), $(!1);
  };
  b.useEffect(() => {
    c != null && c.relationshipType && C(c.relationshipType), c != null && c.pathType && F(c.pathType);
  }, [c == null ? void 0 : c.relationshipType, c == null ? void 0 : c.pathType]);
  const B = (() => {
    if (T === "straight")
      return `M ${t},${n} L ${r},${o}`;
    if (T === "smoothstep") {
      const [q] = ua({
        sourceX: t,
        sourceY: n,
        sourcePosition: i,
        targetX: r,
        targetY: o,
        targetPosition: s
      });
      return q;
    } else {
      const [q] = Gf({
        sourceX: t,
        sourceY: n,
        sourcePosition: i,
        targetX: r,
        targetY: o,
        targetPosition: s
      });
      return q;
    }
  })(), Y = (t + r) / 2, ie = (n + o) / 2, ne = (q) => {
    q !== E && C(q);
  }, ee = (q) => {
    F(q), x(e, (te) => ({
      ...te,
      data: {
        ...te.data,
        pathType: q
      }
    }));
  }, J = () => {
    g({ edges: [{ id: e }] });
  };
  b.useEffect(() => {
    if (!u || !p || !h || !m) return;
    const q = ce(E), te = document.querySelector(
      `.react-flow__handle[data-handleid="${h}"][data-nodeid="${u}"]`
    ), se = document.querySelector(
      `.react-flow__handle[data-handleid="${m}"][data-nodeid="${p}"]`
    );
    return O || d ? (te && (te.style.backgroundColor = q, te.style.borderColor = q, te.style.boxShadow = `0 0 0 2px ${q}40`), se && (se.style.backgroundColor = q, se.style.borderColor = q, se.style.boxShadow = `0 0 0 2px ${q}40`)) : (te && (te.style.backgroundColor = "", te.style.borderColor = "", te.style.boxShadow = ""), se && (se.style.backgroundColor = "", se.style.borderColor = "", se.style.boxShadow = "")), () => {
      te && (te.style.backgroundColor = "", te.style.borderColor = "", te.style.boxShadow = ""), se && (se.style.backgroundColor = "", se.style.borderColor = "", se.style.boxShadow = "");
    };
  }, [O, d, E, u, p, h, m]);
  const de = (q) => {
    switch (q) {
      case "1-1":
        return "1";
      case "1-n":
        return "1";
      case "n-1":
        return "N";
      default:
        return "1";
    }
  }, he = (q) => {
    switch (q) {
      case "1-1":
        return "1";
      case "1-n":
        return "N";
      case "n-1":
        return "1";
      default:
        return "N";
    }
  }, ce = (q) => {
    switch (q) {
      case "1-1":
        return so.RELATIONSHIP.COLORS.ONE_TO_ONE;
      case "1-n":
        return so.RELATIONSHIP.COLORS.ONE_TO_MANY;
      case "n-1":
        return so.RELATIONSHIP.COLORS.MANY_TO_ONE;
      default:
        return so.RELATIONSHIP.COLORS.ONE_TO_MANY;
    }
  }, Me = () => {
    let te = t, se = n;
    return i === X.Left ? te = t - 20 : i === X.Right ? te = t + 20 : i === X.Top ? se = n - 20 : i === X.Bottom && (se = n + 20), { x: te, y: se };
  }, _t = () => {
    let te = r, se = o;
    return s === X.Left ? te = r - 20 : s === X.Right ? te = r + 20 : s === X.Top ? se = o - 20 : s === X.Bottom && (se = o + 20), { x: te, y: se };
  }, He = Me(), kt = _t(), tn = ce(E), br = so.RELATIONSHIP.COLORS.DEFAULT, xn = d || O ? tn : br;
  return /* @__PURE__ */ f.jsxs(
    "g",
    {
      onMouseEnter: () => I(!0),
      onMouseLeave: () => I(!1),
      children: [
        /* @__PURE__ */ f.jsx(
          "path",
          {
            id: `${e}-hitarea`,
            style: {
              ...l,
              stroke: "transparent",
              strokeWidth: 20,
              fill: "none",
              pointerEvents: "stroke"
            },
            className: "react-flow__edge-path cursor-pointer",
            d: B,
            onClick: (q) => {
              q.stopPropagation(), $(!0);
            }
          }
        ),
        /* @__PURE__ */ f.jsx(
          "path",
          {
            id: e,
            style: {
              ...l,
              stroke: xn,
              strokeWidth: d ? 3 : 2,
              strokeDasharray: "5,5",
              transition: "stroke 0.2s ease, stroke-width 0.2s ease",
              pointerEvents: "none"
            },
            className: "react-flow__edge-path",
            d: B,
            markerEnd: a
          }
        ),
        /* @__PURE__ */ f.jsx(
          "foreignObject",
          {
            width: 30,
            height: 30,
            x: He.x - 15,
            y: He.y - 15,
            className: "overflow-visible pointer-events-none",
            requiredExtensions: "http://www.w3.org/1999/xhtml",
            children: /* @__PURE__ */ f.jsx("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md transition-colors duration-200",
                style: {
                  backgroundColor: xn
                },
                children: de(E)
              }
            ) })
          }
        ),
        /* @__PURE__ */ f.jsx(
          "foreignObject",
          {
            width: 30,
            height: 30,
            x: kt.x - 15,
            y: kt.y - 15,
            className: "overflow-visible pointer-events-none",
            requiredExtensions: "http://www.w3.org/1999/xhtml",
            children: /* @__PURE__ */ f.jsx("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ f.jsx(
              "span",
              {
                className: "text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md transition-colors duration-200",
                style: {
                  backgroundColor: xn
                },
                children: he(E)
              }
            ) })
          }
        ),
        (c == null ? void 0 : c.primaryKeyField) && /* @__PURE__ */ f.jsx(
          "foreignObject",
          {
            width: 200,
            height: 40,
            x: kt.x + 25,
            y: kt.y - 20,
            className: "overflow-visible pointer-events-none",
            requiredExtensions: "http://www.w3.org/1999/xhtml",
            children: /* @__PURE__ */ f.jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ f.jsxs("span", { className: "text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded shadow-sm border border-gray-200", children: [
              "PK: ",
              c.primaryKeyField
            ] }) })
          }
        ),
        /* @__PURE__ */ f.jsx(
          "foreignObject",
          {
            width: 60,
            height: 60,
            x: Y - 30,
            y: ie - 30,
            className: "overflow-visible",
            requiredExtensions: "http://www.w3.org/1999/xhtml",
            children: /* @__PURE__ */ f.jsx("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ f.jsxs(ti, { open: z, onOpenChange: $, children: [
              /* @__PURE__ */ f.jsx(Bb, { asChild: !0, children: /* @__PURE__ */ f.jsx(
                Ie,
                {
                  size: "icon",
                  variant: "secondary",
                  onClick: (q) => {
                    q.stopPropagation(), $(!0);
                  },
                  className: Z(
                    "h-10 w-10 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer",
                    "bg-white border-2 hover:scale-110"
                  ),
                  style: {
                    borderColor: tn
                  },
                  children: /* @__PURE__ */ f.jsx(
                    Gp,
                    {
                      size: 20,
                      style: { color: tn }
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ f.jsxs(Xr, { className: "sm:max-w-[700px] p-0 overflow-hidden gap-0", children: [
                /* @__PURE__ */ f.jsx(Qr, { className: "px-6 py-4 border-b bg-gray-50", children: /* @__PURE__ */ f.jsx(qr, { children: "Chỉnh sửa liên kết" }) }),
                /* @__PURE__ */ f.jsxs("div", { className: "grid gap-6 p-6", style: { gridTemplateColumns: "1fr 2fr" }, children: [
                  /* @__PURE__ */ f.jsxs("div", { className: "space-y-6 border-r pr-6", children: [
                    /* @__PURE__ */ f.jsxs("div", { children: [
                      /* @__PURE__ */ f.jsx("h4", { className: "font-medium text-sm text-gray-900 mb-3", children: "Kiểu Dữ Liệu" }),
                      /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ f.jsxs(
                          "button",
                          {
                            onClick: () => {
                              V(!0), E !== "1-n" && ne("1-n");
                            },
                            className: Z(
                              "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                              U ? "bg-blue-50 text-blue-700 font-medium" : "hover:bg-gray-50 text-gray-700"
                            ),
                            children: [
                              /* @__PURE__ */ f.jsx("span", { className: "block font-semibold", children: "Array" }),
                              /* @__PURE__ */ f.jsx("span", { className: "block text-xs text-gray-500 mt-0.5", children: "Danh sách (1:N)" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ f.jsxs(
                          "button",
                          {
                            onClick: () => {
                              V(!1), E === "1-n" && ne("n-1");
                            },
                            className: Z(
                              "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                              U ? "hover:bg-gray-50 text-gray-700" : "bg-purple-50 text-purple-700 font-medium"
                            ),
                            children: [
                              /* @__PURE__ */ f.jsx("span", { className: "block font-semibold", children: "Object" }),
                              /* @__PURE__ */ f.jsx("span", { className: "block text-xs text-gray-500 mt-0.5", children: "Đối tượng (N:1, 1:1)" })
                            ]
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ f.jsxs("div", { children: [
                      /* @__PURE__ */ f.jsx("h4", { className: "font-medium text-sm text-gray-900 mb-3", children: "Quan hệ" }),
                      /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ f.jsxs(
                          "button",
                          {
                            onClick: () => ne("1-1"),
                            className: Z(
                              "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors flex items-center justify-between",
                              E === "1-1" ? "bg-green-50 text-green-700" : "hover:bg-gray-50"
                            ),
                            children: [
                              /* @__PURE__ */ f.jsx("span", { className: "font-semibold text-green-600", children: "1:1" }),
                              /* @__PURE__ */ f.jsx("span", { className: "text-xs text-gray-500", children: "One to One" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ f.jsxs(
                          "button",
                          {
                            onClick: () => {
                              ne("1-n"), V(!0);
                            },
                            className: Z(
                              "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors flex items-center justify-between",
                              E === "1-n" ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"
                            ),
                            children: [
                              /* @__PURE__ */ f.jsx("span", { className: "font-semibold text-blue-600", children: "1:N" }),
                              /* @__PURE__ */ f.jsx("span", { className: "text-xs text-gray-500", children: "One to Many" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ f.jsxs(
                          "button",
                          {
                            onClick: () => ne("n-1"),
                            className: Z(
                              "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors flex items-center justify-between",
                              E === "n-1" ? "bg-purple-50 text-purple-700" : "hover:bg-gray-50"
                            ),
                            children: [
                              /* @__PURE__ */ f.jsx("span", { className: "font-semibold text-purple-600", children: "N:1" }),
                              /* @__PURE__ */ f.jsx("span", { className: "text-xs text-gray-500", children: "Many to One" })
                            ]
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ f.jsxs("div", { children: [
                      /* @__PURE__ */ f.jsx("h4", { className: "font-medium text-sm text-gray-900 mb-3", children: "Kiểu đường" }),
                      /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ f.jsx(
                          "button",
                          {
                            onClick: () => ee("bezier"),
                            className: Z(
                              "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                              T === "bezier" ? "bg-gray-100 font-medium" : "hover:bg-gray-50 text-gray-700"
                            ),
                            children: "Cong (Bezier)"
                          }
                        ),
                        /* @__PURE__ */ f.jsx(
                          "button",
                          {
                            onClick: () => ee("smoothstep"),
                            className: Z(
                              "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                              T === "smoothstep" ? "bg-gray-100 font-medium" : "hover:bg-gray-50 text-gray-700"
                            ),
                            children: "Bậc thang (Smoothstep)"
                          }
                        ),
                        /* @__PURE__ */ f.jsx(
                          "button",
                          {
                            onClick: () => ee("straight"),
                            className: Z(
                              "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                              T === "straight" ? "bg-gray-100 font-medium" : "hover:bg-gray-50 text-gray-700"
                            ),
                            children: "Thẳng (Straight)"
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { className: "", children: [
                    /* @__PURE__ */ f.jsx("h4", { className: "font-medium text-sm text-gray-900 mb-4", children: "Thông tin liên kết" }),
                    /* @__PURE__ */ f.jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ f.jsxs("div", { children: [
                          /* @__PURE__ */ f.jsx("label", { className: "text-sm text-gray-500 block mb-1.5 font-medium", children: "Tên trường" }),
                          /* @__PURE__ */ f.jsx(
                            "input",
                            {
                              type: "text",
                              value: N,
                              onChange: (q) => P(q.target.value),
                              className: "w-full px-3 py-2 text-sm border rounded bg-white text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ f.jsxs("div", { children: [
                          /* @__PURE__ */ f.jsx("label", { className: "text-sm text-gray-500 block mb-1.5 font-medium", children: "Bảng đích" }),
                          /* @__PURE__ */ f.jsx(
                            "select",
                            {
                              value: A,
                              onChange: (q) => {
                                L(q.target.value), k("");
                              },
                              className: "w-full px-2 py-2 text-sm border rounded bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none",
                              children: S.filter((q) => q.id !== u).map((q) => /* @__PURE__ */ f.jsx("option", { value: q.id, children: q.data.label }, q.id))
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ f.jsxs("div", { children: [
                          /* @__PURE__ */ f.jsx("label", { className: "text-sm text-gray-500 block mb-1.5 font-medium", children: E === "1-n" ? "Source (PK)" : "Source (FK)" }),
                          /* @__PURE__ */ f.jsxs(
                            "select",
                            {
                              value: _,
                              onChange: (q) => M(q.target.value),
                              className: "w-full px-3 py-2 text-sm border rounded bg-white text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none",
                              children: [
                                /* @__PURE__ */ f.jsx("option", { value: "", children: "Chọn..." }),
                                (() => {
                                  const q = w(u);
                                  return (q == null ? void 0 : q.data.columns.map((te) => /* @__PURE__ */ f.jsxs("option", { value: te.name, children: [
                                    te.name,
                                    " ",
                                    te.isPrimaryKey ? "(PK)" : ""
                                  ] }, te.name))) || null;
                                })()
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ f.jsxs("div", { children: [
                          /* @__PURE__ */ f.jsx("label", { className: "text-sm text-gray-500 block mb-1.5 font-medium", children: E === "1-n" ? "Target (FK)" : "Target (PK)" }),
                          /* @__PURE__ */ f.jsxs(
                            "select",
                            {
                              value: j,
                              onChange: (q) => k(q.target.value),
                              className: "w-full px-3 py-2 text-sm border rounded bg-white text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none",
                              children: [
                                /* @__PURE__ */ f.jsx("option", { value: "", children: "Chọn..." }),
                                (() => {
                                  const q = S.find((te) => te.id === A);
                                  return (q == null ? void 0 : q.data.columns.map((te) => /* @__PURE__ */ f.jsxs("option", { value: te.name, children: [
                                    te.name,
                                    " ",
                                    te.isPrimaryKey ? "(PK)" : ""
                                  ] }, te.name))) || null;
                                })()
                              ]
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ f.jsxs("div", { className: "pt-4 flex flex-col gap-3", children: [
                        D && /* @__PURE__ */ f.jsxs("div", { className: "p-3 bg-red-50 border border-red-200 rounded text-red-600 text-xs font-medium flex items-center gap-2", children: [
                          /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                            /* @__PURE__ */ f.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                            /* @__PURE__ */ f.jsx("line", { x1: "12", x2: "12", y1: "8", y2: "12" }),
                            /* @__PURE__ */ f.jsx("line", { x1: "12", x2: "12.01", y1: "16", y2: "16" })
                          ] }),
                          D
                        ] }),
                        /* @__PURE__ */ f.jsxs(
                          "button",
                          {
                            onClick: K,
                            disabled: !!D,
                            className: Z(
                              "w-full px-3 py-2.5 text-sm rounded flex items-center justify-center gap-1.5 transition-colors font-medium shadow-sm hover:shadow",
                              D ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
                            ),
                            children: [
                              /* @__PURE__ */ f.jsx(jc, { size: 14 }),
                              /* @__PURE__ */ f.jsx("span", { children: "Lưu thay đổi" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ f.jsx("div", { className: "h-px bg-gray-100 my-1" }),
                        /* @__PURE__ */ f.jsxs(
                          "button",
                          {
                            onClick: J,
                            className: "w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded flex items-center justify-center gap-2 transition-colors font-medium",
                            children: [
                              /* @__PURE__ */ f.jsx(hr, { size: 14 }),
                              /* @__PURE__ */ f.jsx("span", { children: "Xóa quan hệ" })
                            ]
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        )
      ]
    }
  );
}
b.memo(PS);
const YF = {
  table: WF
}, GF = {
  relationship: PS
};
function XF() {
  const e = AA(), t = DA(), n = t.reduce((r, o) => r + (o.data._version || 0), 0);
  return b.useEffect(() => {
    t.filter((o) => o.data._version).forEach((o) => {
      e(o.id);
    });
  }, [n, e]), null;
}
function QF() {
  const e = Nt(), t = xe((l) => l.schema.present.nodes), n = xe((l) => l.schema.present.edges), r = b.useMemo(() => t.filter((l) => {
    var a;
    return ((a = l.data) == null ? void 0 : a.isActive) !== !1;
  }), [t]), o = b.useCallback((l) => {
    const a = l.filter((d) => d.type !== "remove");
    a.length > 0 && e(dR(a)), l.filter((d) => d.type === "remove").forEach((d) => {
      re.emit(oe.TABLE_DELETE, { id: d.id });
    });
  }, [e]), i = b.useCallback((l) => {
    const { source: a, target: c, sourceHandle: d, targetHandle: u } = l;
    a && c && d && u && e(uD({
      sourceNodeId: a,
      initialValues: {
        targetNodeId: c,
        sourceKey: d,
        targetKey: u,
        // Default guess, can be changed in dialog
        linkType: "1-n",
        fieldName: ""
      }
    }));
  }, [e]), s = b.useCallback((l) => l.source !== l.target, []);
  return /* @__PURE__ */ f.jsx("div", { className: "flex-1 h-full w-full", children: /* @__PURE__ */ f.jsxs(
    MA,
    {
      nodes: r,
      edges: n,
      onNodesChange: o,
      onEdgesChange: (l) => e(fR(l)),
      onConnect: i,
      isValidConnection: s,
      nodeTypes: YF,
      edgeTypes: GF,
      fitView: !0,
      className: "bg-gray-50",
      children: [
        /* @__PURE__ */ f.jsx(UF, {}),
        /* @__PURE__ */ f.jsx(XF, {}),
        /* @__PURE__ */ f.jsx($A, { color: "#ccc", gap: 16 }),
        /* @__PURE__ */ f.jsx(YA, { className: "bg-white text-black border-gray-200 shadow-sm" }),
        /* @__PURE__ */ f.jsx(
          sR,
          {
            nodeColor: (l) => l.data.color || "#ccc",
            maskColor: "rgba(240, 240, 240, 0.6)",
            className: "bg-white border border-gray-200"
          }
        )
      ]
    }
  ) });
}
const qF = (e) => {
  const t = [], n = [];
  if (!e.collections)
    throw new Error("Invalid schema format: missing collections");
  return e.collections.forEach((r) => {
    var o, i, s, l;
    if (r.instances && r.instances.length > 0)
      r.instances.forEach((a, c) => {
        var h, m, x, w;
        const d = ((m = (h = r.validator) == null ? void 0 : h.$jsonSchema) == null ? void 0 : m.properties) || {}, u = ((w = (x = r.validator) == null ? void 0 : x.$jsonSchema) == null ? void 0 : w.required) || [], p = Object.entries(d).filter(([g]) => g !== "_instanceId").map(([g, v]) => ({
          name: g,
          type: Ba(v.bsonType),
          isPrimaryKey: u.includes(g) && g === "id",
          isForeignKey: v.isForeignKey || !1,
          // Default from generic schema
          isNotNull: u.includes(g),
          visible: !0,
          isRef: v.isRef || !1,
          children: Ua(v),
          description: v.description
        }));
        a.columnSettings && p.forEach((g) => {
          const v = a.columnSettings[g.name];
          v && (v.isForeignKey !== void 0 && (g.isForeignKey = v.isForeignKey), v.isRef !== void 0 && (g.isRef = v.isRef), v.isPrimaryKey !== void 0 && (g.isPrimaryKey = v.isPrimaryKey));
        }), r.virtualFields && r.virtualFields.filter(
          (v) => v.instanceId === a.id
        ).forEach((v) => {
          p.push({
            name: v.name,
            type: v.type || "varchar",
            isPrimaryKey: !1,
            isForeignKey: !1,
            isNotNull: !1,
            visible: v.visible !== !1,
            isVirtual: !0,
            isRef: v.isRef || !1,
            linkedPrimaryKeyField: v.linkedPrimaryKeyField
          });
        }), t.push({
          id: a.id,
          type: "table",
          position: { x: 100 + c * 400, y: 100 },
          data: {
            tableName: r.name,
            label: a.label,
            columns: p,
            color: "#22c55e"
          }
        });
      });
    else {
      const a = ((i = (o = r.validator) == null ? void 0 : o.$jsonSchema) == null ? void 0 : i.properties) || {}, c = ((l = (s = r.validator) == null ? void 0 : s.$jsonSchema) == null ? void 0 : l.required) || [], d = Object.entries(a).filter(([p]) => p !== "_instanceId").map(([p, h]) => ({
        name: p,
        type: Ba(h.bsonType),
        isPrimaryKey: c.includes(p) && p === "id",
        isForeignKey: h.isForeignKey || !1,
        isNotNull: c.includes(p),
        visible: !0,
        isRef: h.isRef || !1,
        children: Ua(h),
        description: h.description
      })), u = r.instanceId || `imported-${r.name}-${Date.now()}`;
      t.push({
        id: u,
        type: "table",
        position: { x: 100, y: 100 },
        data: {
          tableName: r.name,
          label: r.displayName || r.name,
          columns: d,
          color: "#22c55e"
        }
      });
    }
  }), e.collections.forEach((r) => {
    r.relationships && r.relationships.forEach((o) => {
      const i = t.find((l) => l.id === o.instanceId), s = t.find(
        (l) => o.relatedInstanceId ? l.id === o.relatedInstanceId : l.data.tableName === o.relatedCollection
      );
      if (i && s) {
        const l = o.field, a = o.targetField || "id", c = `${i.id}-${l}-to-${s.id}-${a}`;
        n.some((d) => d.id === c) || n.push({
          id: c,
          source: i.id,
          target: s.id,
          sourceHandle: l,
          targetHandle: a,
          type: "relationship",
          data: { relationshipType: o.type }
        });
      }
    });
  }), { nodes: t, edges: n };
}, Ba = (e) => ({
  string: "varchar",
  int: "int",
  long: "bigint",
  double: "float",
  decimal: "decimal",
  bool: "boolean",
  date: "date",
  object: "object",
  array: "array"
})[e] || "varchar", Ua = (e) => {
  var t;
  if (e.bsonType === "object" && e.properties)
    return Object.entries(e.properties).map(([n, r]) => ({
      name: n,
      type: Ba(r.bsonType),
      visible: !0,
      children: Ua(r)
    }));
  if (e.bsonType === "array" && ((t = e.items) != null && t.properties))
    return Object.entries(e.items.properties).map(([n, r]) => ({
      name: n,
      type: Ba(r.bsonType),
      visible: !0,
      children: Ua(r)
    }));
}, Oy = {
  fileName: "",
  previewData: null,
  error: ""
}, MS = yr({
  name: "jsonImport",
  initialState: Oy,
  reducers: {
    setJsonImportFileName: (e, t) => {
      e.fileName = t.payload;
    },
    setJsonImportPreviewData: (e, t) => {
      e.previewData = t.payload;
    },
    setJsonImportError: (e, t) => {
      e.error = t.payload;
    },
    resetJsonImportState: () => Oy
  }
}), { setJsonImportFileName: ZF, setJsonImportPreviewData: Fy, setJsonImportError: Uu, resetJsonImportState: zy } = MS.actions, JF = MS.reducer;
function e3({ onImport: e }) {
  const t = Nt(), { fileName: n, previewData: r, error: o } = xe((c) => c.jsonImport), i = b.useRef(null), s = async (c) => {
    var u;
    const d = (u = c.target.files) == null ? void 0 : u[0];
    if (d) {
      t(ZF(d.name)), t(Uu("")), t(Fy(null));
      try {
        const p = await d.text(), h = JSON.parse(p), { nodes: m, edges: x } = qF(h);
        if (m.length === 0) {
          t(Uu("Không tìm thấy bảng nào trong file JSON!"));
          return;
        }
        t(Fy({
          nodes: m,
          edges: x,
          collections: h.collections || []
        }));
      } catch (p) {
        t(Uu(p instanceof Error ? p.message : "Lỗi khi đọc file JSON")), console.error("[JSON Import]", p);
      }
    }
  }, l = () => {
    r && (e(r.nodes, r.edges), t(zy()));
  }, a = () => {
    t(zy());
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-8", children: [
    /* @__PURE__ */ f.jsx(
      "input",
      {
        ref: i,
        type: "file",
        accept: ".json",
        onChange: s,
        style: { display: "none" }
      }
    ),
    r ? /* @__PURE__ */ f.jsxs("div", { className: "w-full max-w-2xl", children: [
      /* @__PURE__ */ f.jsx("div", { className: "bg-green-50 border border-green-200 rounded-lg p-6 mb-4", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ f.jsx("div", { className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0", children: /* @__PURE__ */ f.jsx(df, { className: "w-5 h-5 text-green-600" }) }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ f.jsx("h4", { className: "font-semibold text-green-900 mb-1", children: "Sẵn sàng import!" }),
          /* @__PURE__ */ f.jsxs("p", { className: "text-sm text-green-700 mb-3", children: [
            "File: ",
            /* @__PURE__ */ f.jsx("span", { className: "font-mono", children: n })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "bg-white rounded px-3 py-2", children: [
              /* @__PURE__ */ f.jsx("div", { className: "text-gray-500 text-xs", children: "Số bảng" }),
              /* @__PURE__ */ f.jsx("div", { className: "text-lg font-bold text-gray-900", children: r.nodes.length })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "bg-white rounded px-3 py-2", children: [
              /* @__PURE__ */ f.jsx("div", { className: "text-gray-500 text-xs", children: "Mối quan hệ" }),
              /* @__PURE__ */ f.jsx("div", { className: "text-lg font-bold text-gray-900", children: r.edges.length })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ f.jsx("div", { className: "bg-gray-50 rounded-lg p-4 mb-4 max-h-64 overflow-y-auto", children: (() => {
        const c = [], d = [];
        return r.collections.forEach((u) => {
          const p = r.nodes.filter((m) => m.data.tableName === u.name).map((m) => m.id);
          r.edges.some(
            (m) => p.includes(m.source) || p.includes(m.target)
          ) ? c.push(u) : d.push(u);
        }), /* @__PURE__ */ f.jsxs("div", { className: "space-y-4", children: [
          c.length > 0 && /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsxs("h5", { className: "flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase mb-2", children: [
              /* @__PURE__ */ f.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-600" }),
              "Bảng có mối quan hệ (",
              c.length,
              ")"
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "space-y-1 pl-3 border-l-2 border-blue-100", children: c.map((u, p) => {
              var h;
              return /* @__PURE__ */ f.jsxs("div", { className: "bg-white rounded px-3 py-2 text-sm shadow-sm flex justify-between items-center group", children: [
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("div", { className: "font-medium text-gray-900 group-hover:text-blue-600 transition-colors", children: u.displayName }),
                  /* @__PURE__ */ f.jsxs("div", { className: "text-xs text-gray-500", children: [
                    "Type: ",
                    u.name
                  ] })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { className: "text-xs font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100", children: [
                  ((h = u.instances) == null ? void 0 : h.length) || 1,
                  " instance(s)"
                ] })
              ] }, `linked-${p}`);
            }) })
          ] }),
          d.length > 0 && /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsxs("h5", { className: "flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase mb-2 mt-4", children: [
              /* @__PURE__ */ f.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-gray-400" }),
              "Bảng độc lập (",
              d.length,
              ")"
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "space-y-1 pl-3 border-l-2 border-gray-200", children: d.map((u, p) => {
              var h;
              return /* @__PURE__ */ f.jsx("div", { className: "bg-white rounded px-3 py-2 text-sm border border-gray-100 opacity-80 hover:opacity-100 transition-opacity", children: /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ f.jsxs("div", { children: [
                  /* @__PURE__ */ f.jsx("div", { className: "font-medium text-gray-700", children: u.displayName }),
                  /* @__PURE__ */ f.jsxs("div", { className: "text-xs text-gray-400", children: [
                    "Type: ",
                    u.name
                  ] })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { className: "text-xs font-mono bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full", children: [
                  ((h = u.instances) == null ? void 0 : h.length) || 1,
                  " instance(s)"
                ] })
              ] }) }, `indep-${p}`);
            }) })
          ] })
        ] });
      })() }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ f.jsx(
          Ie,
          {
            variant: "outline",
            onClick: a,
            className: "flex-1",
            children: "Hủy"
          }
        ),
        /* @__PURE__ */ f.jsxs(
          Ie,
          {
            onClick: l,
            className: "flex-1 bg-blue-600 hover:bg-blue-700",
            children: [
              /* @__PURE__ */ f.jsx(sy, { className: "w-4 h-4 mr-2" }),
              "Tạo Bảng"
            ]
          }
        )
      ] })
    ] }) : /* @__PURE__ */ f.jsxs("div", { className: "text-center max-w-md", children: [
      /* @__PURE__ */ f.jsx("div", { className: "w-24 h-24 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center", children: /* @__PURE__ */ f.jsx(df, { className: "w-12 h-12 text-blue-500" }) }),
      /* @__PURE__ */ f.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Import Schema từ JSON" }),
      /* @__PURE__ */ f.jsx("p", { className: "text-sm text-gray-500 mb-6", children: "Chọn file JSON đã export trước đó để tạo bảng tự động" }),
      o && /* @__PURE__ */ f.jsx("div", { className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ f.jsx("p", { className: "text-sm text-red-600", children: o }) }),
      /* @__PURE__ */ f.jsxs(
        Ie,
        {
          onClick: () => {
            var c;
            return (c = i.current) == null ? void 0 : c.click();
          },
          className: "bg-blue-600 hover:bg-blue-700",
          children: [
            /* @__PURE__ */ f.jsx(sy, { className: "w-4 h-4 mr-2" }),
            "Chọn File JSON"
          ]
        }
      ),
      n && /* @__PURE__ */ f.jsxs("p", { className: "mt-3 text-xs text-gray-400", children: [
        "File: ",
        n
      ] })
    ] })
  ] });
}
const t3 = (e) => ({
  varchar: "string",
  text: "string",
  uuid: "string",
  int: "int",
  int4: "int",
  bigint: "long",
  float: "double",
  decimal: "decimal",
  money: "decimal",
  boolean: "bool",
  date: "date",
  timestamp: "date",
  jsonb: "object",
  object: "object",
  array: "array"
})[e.toLowerCase()] || "string", Cf = (e) => {
  const n = {
    bsonType: t3(e.type)
  };
  if (e.description && (n.description = e.description), e.isRef && (n.isRef = !0), e.isForeignKey && (n.isForeignKey = !0), e.type === "object" && e.children && e.children.length > 0) {
    n.properties = {};
    const r = [];
    e.children.forEach((o) => {
      n.properties[o.name] = Cf(o), o.isNotNull && r.push(o.name);
    }), r.length > 0 && (n.required = r);
  }
  if (e.type === "array" && e.children && e.children.length > 0) {
    n.items = {
      bsonType: "object",
      properties: {}
    };
    const r = [];
    e.children.forEach((o) => {
      n.items.properties[o.name] = Cf(o), o.isNotNull && r.push(o.name);
    }), r.length > 0 && (n.items.required = r);
  }
  return n;
}, n3 = (e, t) => {
  const n = e.reduce((o, i) => {
    const s = i.data.tableName;
    return o[s] || (o[s] = []), o[s].push(i), o;
  }, {}), r = Object.entries(n).map(([o, i]) => {
    const s = i[0], l = {}, a = [], c = [];
    s.data.columns.forEach((h) => {
      h.isVirtual || (l[h.name] = Cf(h), (h.isNotNull || h.isPrimaryKey) && a.push(h.name), h.isPrimaryKey ? c.push({
        key: { [h.name]: 1 },
        unique: !0,
        name: `${h.name}_pk`
      }) : h.isForeignKey && c.push({
        key: { [h.name]: 1 },
        name: `${h.name}_fk`
      }));
    });
    const d = i.flatMap(
      (h) => h.data.columns.filter((m) => m.isVirtual).map((m) => ({
        instanceId: h.id,
        name: m.name,
        type: m.type,
        linkedPrimaryKeyField: m.linkedPrimaryKeyField,
        visible: m.visible,
        isRef: m.isRef
      }))
    );
    l._instanceId = {
      bsonType: "string",
      description: "Instance identifier for UI tracking"
    };
    const u = {
      $jsonSchema: {
        bsonType: "object",
        title: s.data.label,
        properties: l
      }
    };
    a.length > 0 && (u.$jsonSchema.required = a);
    const p = i.flatMap((h) => t.filter((m) => m.source === h.id).map((m) => {
      var w;
      const x = e.find((g) => g.id === m.target);
      return {
        instanceId: h.id,
        field: m.sourceHandle,
        // The exact field name in source
        targetField: m.targetHandle,
        // The exact field name in target
        relatedCollection: (x == null ? void 0 : x.data.tableName) || "unknown",
        relatedInstanceId: m.target,
        type: ((w = m.data) == null ? void 0 : w.relationshipType) || "1-n",
        direction: "outgoing"
      };
    }));
    return {
      name: o,
      displayName: s.data.label,
      instances: i.map((h) => {
        const m = h.data.columns.filter((x) => !x.isVirtual).reduce((x, w) => ((w.isForeignKey || w.isRef || w.isPrimaryKey) && (x[w.name] = {
          isForeignKey: w.isForeignKey,
          isRef: w.isRef,
          isPrimaryKey: w.isPrimaryKey
        }), x), {});
        return {
          id: h.id,
          label: h.data.label,
          columnSettings: Object.keys(m).length > 0 ? m : void 0
        };
      }),
      validator: u,
      indexes: c.length > 0 ? c : void 0,
      relationships: p.length > 0 ? p : void 0,
      virtualFields: d.length > 0 ? d : void 0
      // Add virtual fields
    };
  });
  return {
    version: "1.0",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    database: "my_database",
    collections: r
  };
}, _f = (e, t, n) => {
  switch (e.type.toLowerCase()) {
    case "varchar":
    case "text":
      return { value: "Sample text" };
    case "uuid":
      return { value: "uuid-001" };
    case "int":
    case "int4":
    case "bigint":
      return { value: 123 };
    case "float":
    case "decimal":
      return { value: 123.45 };
    case "boolean":
      return { value: !0 };
    case "date":
    case "timestamp":
      return { value: "2024-01-01" };
    case "object":
      if (e.children && e.children.length > 0) {
        const r = {};
        e.children.forEach((i) => {
          const s = _f(i);
          r[i.name] = s.value;
        });
        const o = e.description ? `, ref: ${e.description}` : "";
        return {
          value: r,
          comment: `// type: Object, is_ref: false${o}`
        };
      }
      return {
        value: {},
        comment: e.description ? `// type: Object, is_ref: true, ref: ${e.description}` : void 0
      };
    case "array":
      if (e.children && e.children.length > 0) {
        const r = {};
        return e.children.forEach((o) => {
          const i = _f(o);
          r[o.name] = i.value;
        }), {
          value: [r],
          comment: "// type: Array, is_ref: false"
        };
      }
      return {
        value: [],
        comment: "// type: Array, is_ref: false"
      };
    default:
      return { value: null };
  }
}, r3 = (e, t) => {
  let n = `// Sample Data Structure
`;
  return n += "// Generated at: " + (/* @__PURE__ */ new Date()).toISOString() + `

`, e.forEach((r, o) => {
    o > 0 && (n += `

`), n += `// Collection: ${r.data.tableName}
`, n += `// Display Name: ${r.data.label}
`, n += `{
`, r.data.columns.forEach((i, s) => {
      if (i.isVirtual) {
        const c = t.find(
          (u) => u.source === r.id && u.sourceHandle === i.name || u.target === r.id && u.targetHandle === i.name
        ), d = c ? e.find(
          (u) => u.id === (c.source === r.id ? c.target : c.source)
        ) : null;
        n += `  "${i.name}": // type: Reference, is_ref: true, ref: ${(d == null ? void 0 : d.data.tableName) || "unknown"}
`;
        return;
      }
      const l = _f(i), a = JSON.stringify(l.value, null, 2).split(`
`).map(
        (c, d) => d === 0 ? c : "  " + c
      ).join(`
`);
      n += `  "${i.name}": ${a}`, l.comment && (n += ` ${l.comment}`), s < r.data.columns.length - 1 && (n += ","), n += `
`;
    }), n += "}";
  }), n;
}, o3 = {
  format: "sample"
}, AS = yr({
  name: "export",
  initialState: o3,
  reducers: {
    setExportFormat: (e, t) => {
      e.format = t.payload;
    }
  }
}), { setExportFormat: i3 } = AS.actions, s3 = AS.reducer;
function l3() {
  const e = Nt(), t = xe((c) => c.export.format), n = xe((c) => c.schema.present.nodes), r = xe((c) => c.schema.present.edges), i = (() => {
    if (t === "sample")
      return r3(n, r);
    {
      const c = n3(n, r);
      return JSON.stringify(c, null, 2);
    }
  })(), s = () => {
    const c = t === "sample" ? ".js" : ".json", d = t === "sample" ? "sample-data" : "schema", u = new Blob([i], {
      type: t === "sample" ? "text/javascript" : "application/json"
    }), p = URL.createObjectURL(u), h = document.createElement("a");
    h.href = p, h.download = d + c, document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(p);
  }, l = () => {
    navigator.clipboard.writeText(i), alert("Copied to clipboard!");
  }, a = (c) => {
    e(i3(c));
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden bg-gray-50/50", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "p-4 border-b border-gray-100 bg-white shrink-0", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ f.jsx("div", { className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600", children: /* @__PURE__ */ f.jsx(uf, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsx("h3", { className: "font-semibold text-gray-900", children: "Export Schema" }),
          /* @__PURE__ */ f.jsx("p", { className: "text-sm text-gray-500", children: "Chọn định dạng để xuất dữ liệu" })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ f.jsx(
          Ie,
          {
            variant: t === "sample" ? "default" : "outline",
            size: "sm",
            onClick: () => a("sample"),
            className: t === "sample" ? "bg-green-600 hover:bg-green-700" : "hover:bg-green-50 hover:text-green-700 hover:border-green-200",
            children: "Sample Data"
          }
        ),
        /* @__PURE__ */ f.jsx(
          Ie,
          {
            variant: t === "schema" ? "default" : "outline",
            size: "sm",
            onClick: () => a("schema"),
            className: t === "schema" ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200",
            children: "Schema JSON"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "flex-1 min-h-0 p-4 flex flex-col overflow-hidden", children: /* @__PURE__ */ f.jsx("div", { className: "flex-1 bg-gray-900 rounded-lg p-4 overflow-auto border border-gray-800 shadow-inner custom-scrollbar", children: /* @__PURE__ */ f.jsx("pre", { className: "font-mono text-[11px] text-green-400 whitespace-pre", children: i }) }) }),
    /* @__PURE__ */ f.jsxs("div", { className: "p-4 bg-white border-t border-gray-100 flex gap-2 justify-end shrink-0", children: [
      /* @__PURE__ */ f.jsxs(
        Ie,
        {
          variant: "outline",
          onClick: l,
          className: "min-w-[140px]",
          children: [
            /* @__PURE__ */ f.jsx(_b, { className: "w-4 h-4 mr-2" }),
            "Copy Code"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        Ie,
        {
          onClick: s,
          className: "bg-green-600 hover:bg-green-700 min-w-[140px]",
          children: [
            /* @__PURE__ */ f.jsx(uf, { className: "w-4 h-4 mr-2" }),
            "Download File"
          ]
        }
      )
    ] })
  ] });
}
const $y = {
  mode: "template",
  searchQuery: "",
  apiUrl: "https://jsonplaceholder.typicode.com/users/1",
  isFetching: !1,
  tableName: "",
  displayLabel: "",
  columns: [{ name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 }],
  selectedTemplateName: null
}, RS = yr({
  name: "addTable",
  initialState: $y,
  reducers: {
    setMode: (e, t) => {
      e.mode = t.payload;
    },
    setSearchQuery: (e, t) => {
      e.searchQuery = t.payload;
    },
    setApiUrl: (e, t) => {
      e.apiUrl = t.payload;
    },
    setIsFetching: (e, t) => {
      e.isFetching = t.payload;
    },
    setTableName: (e, t) => {
      e.tableName = t.payload;
    },
    setDisplayLabel: (e, t) => {
      e.displayLabel = t.payload;
    },
    setColumns: (e, t) => {
      e.columns = t.payload;
    },
    addColumn: (e) => {
      e.columns.push({ name: "", type: "varchar", visible: !0 });
    },
    updateColumn: (e, t) => {
      const { index: n, field: r, value: o } = t.payload;
      e.columns[n] && (e.columns[n][r] = o);
    },
    removeColumn: (e, t) => {
      e.columns = e.columns.filter((n, r) => r !== t.payload);
    },
    setSelectedTemplateName: (e, t) => {
      e.selectedTemplateName = t.payload;
    },
    resetAddTableState: () => $y,
    resetManualForm: (e) => {
      e.tableName = "", e.displayLabel = "", e.columns = [{ name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 }];
    }
  }
}), {
  setMode: Hy,
  setSearchQuery: a3,
  setApiUrl: c3,
  setIsFetching: Vy,
  setTableName: By,
  setDisplayLabel: Uy,
  setColumns: u3,
  addColumn: d3,
  updateColumn: f3,
  removeColumn: p3,
  setSelectedTemplateName: h3,
  resetAddTableState: m3,
  resetManualForm: u4
} = RS.actions, g3 = RS.reducer, y3 = [
  {
    id: "sample-api-user",
    type: "table",
    position: { x: -400, y: 0 },
    data: {
      tableName: "users_sample",
      label: "Users (API Sample)",
      columns: [
        { name: "id", type: "int", isPrimaryKey: !0, visible: !0 },
        { name: "name", type: "varchar", visible: !0 },
        { name: "username", type: "varchar", visible: !0 },
        { name: "email", type: "varchar", visible: !0 },
        { name: "address", type: "object", visible: !0 },
        { name: "phone", type: "varchar", visible: !0 },
        { name: "website", type: "varchar", visible: !0 },
        { name: "company", type: "object", visible: !0 }
      ],
      color: et[2]
    }
  },
  {
    id: "1",
    type: "table",
    position: { x: 0, y: 0 },
    data: {
      tableName: "products",
      label: "Products",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "name", type: "varchar", visible: !0 },
        { name: "description", type: "varchar", visible: !0 },
        { name: "price", type: "money", visible: !0 },
        { name: "quantity", type: "int4", visible: !0 }
      ],
      color: et[5]
    }
  },
  {
    id: "2",
    type: "table",
    position: { x: 400, y: -150 },
    data: {
      tableName: "warehouses",
      label: "Warehouses",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "name", type: "varchar", visible: !0 },
        { name: "address", type: "varchar", visible: !0 },
        { name: "capacity", type: "int4", visible: !0 }
      ],
      color: et[4]
    }
  },
  {
    id: "3",
    type: "table",
    position: { x: 400, y: 100 },
    data: {
      tableName: "suppliers",
      label: "Suppliers",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "name", type: "varchar", visible: !0 },
        { name: "contact", type: "varchar", visible: !0 },
        { name: "country", type: "varchar", visible: !0 }
      ],
      color: et[3]
    }
  },
  {
    id: "4",
    type: "table",
    position: { x: 800, y: -200 },
    data: {
      tableName: "categories",
      label: "Categories",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "name", type: "varchar", visible: !0 },
        { name: "description", type: "text", visible: !0 }
      ],
      color: et[2]
    }
  },
  {
    id: "5",
    type: "table",
    position: { x: 800, y: -50 },
    data: {
      tableName: "orders",
      label: "Orders",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "order_date", type: "timestamp", visible: !0 },
        { name: "total_amount", type: "money", visible: !0 },
        { name: "status", type: "varchar", visible: !0 }
      ],
      color: et[1]
    }
  },
  {
    id: "6",
    type: "table",
    position: { x: 800, y: 150 },
    data: {
      tableName: "customers",
      label: "Customers",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "name", type: "varchar", visible: !0 },
        { name: "email", type: "varchar", visible: !0 },
        { name: "phone", type: "varchar", visible: !0 }
      ],
      color: et[0]
    }
  },
  {
    id: "7",
    type: "table",
    position: { x: 400, y: 350 },
    data: {
      tableName: "reviews",
      label: "Reviews",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "rating", type: "int", visible: !0 },
        { name: "comment", type: "text", visible: !0 },
        { name: "created_at", type: "timestamp", visible: !0 }
      ],
      color: et[5]
    }
  },
  {
    id: "8",
    type: "table",
    position: { x: 800, y: 350 },
    data: {
      tableName: "inventory",
      label: "Inventory",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "stock_quantity", type: "int", visible: !0 },
        { name: "last_updated", type: "timestamp", visible: !0 }
      ],
      color: et[4]
    }
  },
  {
    id: "9",
    type: "table",
    position: { x: 0, y: 500 },
    data: {
      tableName: "large_test_table",
      label: "Large Test Table (40 fields)",
      columns: Array.from({ length: 40 }, (e, t) => ({
        name: `field_${t + 1}_${["data", "info", "meta"][t % 3]}`,
        type: ["varchar", "int", "boolean", "timestamp", "jsonb"][t % 5],
        visible: !0,
        isPrimaryKey: t === 0
      })),
      color: et[2]
    }
  },
  {
    id: "10",
    type: "table",
    position: { x: 50, y: 600 },
    data: {
      tableName: "cong_dan",
      label: "Công Dân (Citizens)",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "HoVaTen", type: "varchar", visible: !0 },
        {
          name: "DiaChi",
          type: "object",
          visible: !0,
          children: [
            { name: "ThanhPho", type: "varchar", visible: !0 },
            { name: "XaPhuong", type: "varchar", visible: !0 }
          ]
        },
        {
          name: "GiayToTuyThan",
          type: "array",
          visible: !0,
          children: [
            { name: "SoGiayTo", type: "varchar", visible: !0 },
            { name: "LoaiGiayTo", type: "varchar", visible: !0 },
            {
              name: "chi_tiet",
              type: "object",
              visible: !0,
              children: [
                { name: "NgayCap", type: "date", visible: !0 },
                { name: "NoiCap", type: "varchar", visible: !0 }
              ]
            }
          ]
        },
        { name: "ho_khau", type: "object", visible: !0, description: "Sổ Hộ Khẩu" }
      ],
      color: et[0]
    }
  },
  {
    id: "11",
    type: "table",
    position: { x: 400, y: 600 },
    data: {
      tableName: "dia_chi",
      label: "Địa Chỉ (Addresses)",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "ThanhPho", type: "varchar", visible: !0 },
        { name: "XaPhuong", type: "varchar", visible: !0 }
      ],
      color: et[1]
    }
  },
  {
    id: "12",
    type: "table",
    position: { x: 800, y: 600 },
    data: {
      tableName: "giay_to_tuy_than",
      label: "Giấy Tờ Tùy Thân",
      columns: [
        { name: "id", type: "uuid", isPrimaryKey: !0, visible: !0 },
        { name: "SoGiayTo", type: "varchar", visible: !0 },
        { name: "LoaiGiayTo", type: "varchar", visible: !0 },
        { name: "cong_dan_id", type: "uuid", visible: !0, isForeignKey: !0 }
      ],
      color: et[2]
    }
  }
];
function DS(e = "") {
  const t = b.useMemo(() => y3.map((r) => ({
    id: r.id,
    name: r.data.label,
    tableName: r.data.tableName,
    description: `Bảng mẫu với ${r.data.columns.length} cột`,
    columns: r.data.columns
  })), []), n = b.useMemo(() => {
    if (!e) return t;
    const r = e.toLowerCase();
    return t.filter(
      (o) => o.name.toLowerCase().includes(r) || o.tableName.toLowerCase().includes(r)
    );
  }, [t, e]);
  return { templates: t, filteredTemplates: n };
}
function x3() {
  const e = Nt(), t = xe((j) => j.ui.isAddTableDialogOpen), n = xe((j) => j.schema.present.nodes), r = xe((j) => j.addTable), { mode: o, searchQuery: i, apiUrl: s, isFetching: l, tableName: a, displayLabel: c, columns: d, selectedTemplateName: u } = r, { templates: p, filteredTemplates: h } = DS(i), m = b.useCallback((j) => {
    e(Ob(j));
  }, [e]), x = b.useCallback(() => {
    if (!a.trim() || !c.trim()) return;
    const j = `table-${Date.now()}`;
    re.emit(oe.TABLE_ADD, {
      id: j,
      name: c,
      tableName: a,
      columns: d.map((k) => ({
        ...k,
        visible: !0,
        isNotNull: !1,
        isVirtual: !1
      }))
    }), e(m3()), m(!1);
  }, [a, c, d, e, m]), w = b.useCallback(() => {
    if (!u) return;
    const j = p.find((k) => k.name === u);
    if (j) {
      const k = n.filter((O) => O.data.tableName === j.tableName).length, D = `table-${Date.now()}-${Math.floor(Math.random() * 1e3)}`, R = k > 0 ? `${j.name} (${k + 1})` : j.name;
      re.emit(oe.TABLE_ADD, {
        id: D,
        name: R,
        tableName: j.tableName || j.name.toLowerCase().replace(/\s+/g, "_"),
        columns: j.columns.map((O) => ({ ...O, visible: !0, isVirtual: !1 }))
      });
    }
    m(!1);
  }, [u, p, n, m]), g = b.useCallback(() => {
    o === "manual" ? x() : w();
  }, [o, x, w]), v = b.useCallback((j, k) => {
    j.forEach((D) => {
      re.emit(oe.TABLE_ADD, {
        id: D.id,
        name: D.data.label,
        tableName: D.data.tableName,
        columns: D.data.columns
      });
    }), m(!1);
  }, [m]);
  return {
    // State
    open: t,
    mode: o,
    searchQuery: i,
    apiUrl: s,
    isFetching: l,
    tableName: a,
    displayLabel: c,
    columns: d,
    selectedTemplateName: u,
    templates: p,
    filteredTemplates: h,
    // Handlers
    handleOpenChange: m,
    handleAddTable: g,
    handleJsonImport: v,
    handleFetchApi: async () => {
      e(Vy(!0));
      try {
        const k = await (await fetch(s)).json(), D = (O) => !O || typeof O != "object" ? [] : Object.keys(O).map((I) => {
          const T = O[I];
          let F = "varchar", z;
          return Array.isArray(T) ? F = "array" : T === null ? F = "varchar" : typeof T == "number" ? F = Number.isInteger(T) ? "int" : "float" : typeof T == "boolean" ? F = "boolean" : typeof T == "object" && (F = "object", z = D(T)), {
            name: I,
            type: F,
            visible: !0,
            isPrimaryKey: I === "id",
            children: z
          };
        }), R = D(k);
        e(u3(R)), e(By("imported_api_table")), e(Uy("API Data Table")), e(Hy("manual"));
      } catch (j) {
        console.error(j), alert("Failed to fetch/parse API: " + j);
      } finally {
        e(Vy(!1));
      }
    },
    // Setters
    setMode: (j) => e(Hy(j)),
    setSearchQuery: (j) => e(a3(j)),
    setApiUrl: (j) => e(c3(j)),
    setTableName: (j) => e(By(j)),
    setDisplayLabel: (j) => e(Uy(j)),
    addColumn: () => e(d3()),
    updateColumn: (j) => e(f3(j)),
    removeColumn: (j) => e(p3(j)),
    setSelectedTemplateName: (j) => e(h3(j))
  };
}
function v3() {
  var P, A, L;
  const {
    open: e,
    mode: t,
    searchQuery: n,
    apiUrl: r,
    isFetching: o,
    tableName: i,
    displayLabel: s,
    columns: l,
    selectedTemplateName: a,
    filteredTemplates: c,
    templates: d,
    handleOpenChange: u,
    handleAddTable: p,
    handleJsonImport: h,
    handleFetchApi: m,
    setMode: x,
    setSearchQuery: w,
    setApiUrl: g,
    setTableName: v,
    setDisplayLabel: y,
    addColumn: S,
    updateColumn: E,
    removeColumn: C,
    setSelectedTemplateName: N
  } = x3();
  return /* @__PURE__ */ f.jsx(ti, { open: e, onOpenChange: u, children: /* @__PURE__ */ f.jsxs(Xr, { className: "max-w-4xl bg-white text-gray-900 border-gray-200 shadow-xl max-h-[90vh] flex flex-col", children: [
    /* @__PURE__ */ f.jsxs(Qr, { children: [
      /* @__PURE__ */ f.jsx(qr, { children: "Quản Lý Schema & Bảng" }),
      /* @__PURE__ */ f.jsx(ni, { className: "text-gray-500", children: "Thêm bảng mới, import/export schema và quản lý dữ liệu." })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-5 gap-2 p-1 bg-gray-100 rounded-lg shrink-0", children: [
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: () => x("template"),
          className: Z(
            "py-2 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all",
            t === "template" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          ),
          children: [
            /* @__PURE__ */ f.jsx(Fi, { className: "w-4 h-4" }),
            " Chọn Mẫu"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: () => x("manual"),
          className: Z(
            "py-2 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all",
            t === "manual" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          ),
          children: [
            /* @__PURE__ */ f.jsx(iy, { className: "w-4 h-4" }),
            " Thủ Công"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: () => x("api"),
          className: Z(
            "py-2 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all",
            t === "api" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          ),
          children: [
            /* @__PURE__ */ f.jsx(iy, { className: "w-4 h-4" }),
            " Import API"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: () => x("json"),
          className: Z(
            "py-2 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all",
            t === "json" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          ),
          children: [
            /* @__PURE__ */ f.jsx(df, { className: "w-4 h-4" }),
            " Import schema"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: () => x("export"),
          className: Z(
            "py-2 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all",
            t === "export" ? "bg-white text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          ),
          children: [
            /* @__PURE__ */ f.jsx(uf, { className: "w-4 h-4" }),
            " Export"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "flex-1 overflow-hidden mt-4 min-h-0 flex flex-col", children: t === "json" ? /* @__PURE__ */ f.jsx(e3, { onImport: h }) : t === "export" ? /* @__PURE__ */ f.jsx(l3, {}) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      t === "template" && /* @__PURE__ */ f.jsxs("div", { className: "flex-1 flex gap-4 min-h-0", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "w-1/3 border-r border-gray-200 pr-4 flex flex-col min-h-0", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "relative mb-2 shrink-0", children: [
            /* @__PURE__ */ f.jsx(Fi, { className: "absolute left-2 top-2.5 h-4 w-4 text-gray-400" }),
            /* @__PURE__ */ f.jsx(
              ht,
              {
                placeholder: "Tìm kiếm mẫu...",
                value: n,
                onChange: (_) => w(_.target.value),
                className: "pl-8 h-9 text-sm bg-gray-50 border-gray-200 focus:bg-white"
              }
            )
          ] }),
          /* @__PURE__ */ f.jsx("h3", { className: "text-[10px] font-bold text-gray-400 uppercase mb-2 tracking-wider", children: "Danh sách mẫu" }),
          /* @__PURE__ */ f.jsx("div", { className: "flex-1 overflow-y-auto -mr-2 pr-2 min-h-0", children: /* @__PURE__ */ f.jsxs("div", { className: "space-y-1 pb-2", children: [
            c.map((_) => /* @__PURE__ */ f.jsxs(
              "button",
              {
                onClick: () => N(_.name),
                className: Z(
                  "w-full text-left px-3 py-2 rounded-md text-sm transition-all border border-transparent",
                  a === _.name ? "bg-blue-50 text-blue-700 font-medium border-blue-100 shadow-sm" : "hover:bg-gray-100 text-gray-700 hover:border-gray-200"
                ),
                children: [
                  /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ f.jsx("div", { className: Z(
                      "w-1.5 h-1.5 rounded-full shrink-0",
                      a === _.name ? "bg-blue-500" : "bg-gray-300"
                    ) }),
                    /* @__PURE__ */ f.jsx("span", { className: "truncate", children: _.name })
                  ] }),
                  /* @__PURE__ */ f.jsx("div", { className: "text-[10px] text-gray-400 mt-0.5 truncate pl-3.5", children: _.tableName })
                ]
              },
              _.name
            )),
            c.length === 0 && /* @__PURE__ */ f.jsx("div", { className: "text-center py-8 text-gray-400 text-xs italic", children: "Không tìm thấy mẫu nào" })
          ] }) })
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "flex-1 min-h-0 flex flex-col bg-gray-50/50 rounded-lg border border-gray-100 overflow-hidden", children: a ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "p-3 border-b border-gray-200 bg-white flex justify-between items-center shrink-0", children: [
            /* @__PURE__ */ f.jsxs("div", { children: [
              /* @__PURE__ */ f.jsx("h4", { className: "font-bold text-gray-900", children: a }),
              /* @__PURE__ */ f.jsx("div", { className: "text-xs text-gray-500 font-mono mt-0.5", children: (P = d.find((_) => _.name === a)) == null ? void 0 : P.tableName })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100", children: [
              (A = d.find((_) => _.name === a)) == null ? void 0 : A.columns.length,
              " columns"
            ] })
          ] }),
          /* @__PURE__ */ f.jsx("div", { className: "flex-1 overflow-auto p-0", children: /* @__PURE__ */ f.jsxs("table", { className: "w-full text-sm text-left", children: [
            /* @__PURE__ */ f.jsx("thead", { className: "text-xs text-gray-500 uppercase bg-gray-50 sticky top-0 z-10 shadow-sm", children: /* @__PURE__ */ f.jsxs("tr", { children: [
              /* @__PURE__ */ f.jsx("th", { className: "px-4 py-2 font-semibold", children: "Column" }),
              /* @__PURE__ */ f.jsx("th", { className: "px-4 py-2 font-semibold w-24", children: "Type" }),
              /* @__PURE__ */ f.jsx("th", { className: "px-4 py-2 font-semibold w-16 text-center", children: "PK" })
            ] }) }),
            /* @__PURE__ */ f.jsx("tbody", { className: "divide-y divide-gray-100 bg-white", children: (L = d.find((_) => _.name === a)) == null ? void 0 : L.columns.map((_, M) => /* @__PURE__ */ f.jsxs("tr", { className: "hover:bg-gray-50", children: [
              /* @__PURE__ */ f.jsx("td", { className: "px-4 py-2 font-mono text-gray-700", children: _.name }),
              /* @__PURE__ */ f.jsx("td", { className: "px-4 py-2 text-gray-500 font-mono text-xs", children: _.type }),
              /* @__PURE__ */ f.jsx("td", { className: "px-4 py-2 text-center text-xs", children: _.isPrimaryKey && /* @__PURE__ */ f.jsx("div", { className: "w-1.5 h-1.5 bg-yellow-500 rounded-full mx-auto" }) })
            ] }, M)) })
          ] }) })
        ] }) : /* @__PURE__ */ f.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-gray-400 text-sm gap-2", children: [
          /* @__PURE__ */ f.jsx(Fi, { className: "w-8 h-8 opacity-20" }),
          /* @__PURE__ */ f.jsx("p", { children: "Chọn một bảng bên trái để xem trước" })
        ] }) })
      ] }),
      t === "api" && /* @__PURE__ */ f.jsx("div", { className: "space-y-4 py-2", children: /* @__PURE__ */ f.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ f.jsx("label", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider", children: "API URL" }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ f.jsx(
            ht,
            {
              value: r,
              onChange: (_) => g(_.target.value),
              placeholder: "https://api.example.com/data",
              className: "font-mono text-xs"
            }
          ),
          /* @__PURE__ */ f.jsx(
            Ie,
            {
              onClick: m,
              disabled: o,
              children: o ? "Fetching..." : "Fetch & Parse"
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "text-[10px] text-gray-400", children: "Supports JSON response. Will extract keys as columns and detect nested objects." })
      ] }) }),
      t === "manual" && /* @__PURE__ */ f.jsxs("div", { className: "space-y-4 flex-1 overflow-y-auto pr-2", children: [
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsxs("label", { className: "text-sm font-medium mb-2 block text-gray-700", children: [
            "Table Name (DB)",
            /* @__PURE__ */ f.jsx("span", { className: "text-xs text-gray-500 ml-2 font-normal", children: "Tên bảng thực tế trong database (viết liền, không dấu)" })
          ] }),
          /* @__PURE__ */ f.jsx(
            ht,
            {
              value: i,
              onChange: (_) => v(_.target.value),
              placeholder: "e.g. cong_dan, ho_khau",
              className: "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsxs("label", { className: "text-sm font-medium mb-2 block text-gray-700", children: [
            "Display Label",
            /* @__PURE__ */ f.jsx("span", { className: "text-xs text-gray-500 ml-2 font-normal", children: "Tên hiển thị trên giao diện" })
          ] }),
          /* @__PURE__ */ f.jsx(
            ht,
            {
              value: s,
              onChange: (_) => y(_.target.value),
              placeholder: "e.g. Chủ hộ, Thành viên",
              className: "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Columns" }),
            /* @__PURE__ */ f.jsxs(Ie, { variant: "ghost", size: "sm", onClick: () => S(), className: "h-6 px-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50", children: [
              /* @__PURE__ */ f.jsx(As, { className: "w-3 h-3 mr-1" }),
              " Add Column"
            ] })
          ] }),
          /* @__PURE__ */ f.jsx("div", { className: "space-y-2", children: l.map((_, M) => /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ f.jsx(
              ht,
              {
                value: _.name,
                onChange: (j) => E({ index: M, field: "name", value: j.target.value }),
                placeholder: "Column name",
                className: "flex-1 bg-white border-gray-300 text-gray-900 h-8 text-sm placeholder:text-gray-400"
              }
            ),
            /* @__PURE__ */ f.jsx(
              ht,
              {
                value: _.type,
                onChange: (j) => E({ index: M, field: "type", value: j.target.value }),
                placeholder: "Type",
                className: "w-24 bg-white border-gray-300 text-gray-900 h-8 text-sm"
              }
            ),
            /* @__PURE__ */ f.jsxs("label", { className: "flex items-center gap-1 text-xs cursor-pointer text-gray-600 select-none", children: [
              /* @__PURE__ */ f.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: _.isPrimaryKey || !1,
                  onChange: (j) => E({ index: M, field: "isPrimaryKey", value: j.target.checked }),
                  className: "rounded bg-gray-100 border-gray-300 accent-blue-600"
                }
              ),
              "PK"
            ] }),
            /* @__PURE__ */ f.jsx(
              Ie,
              {
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-50",
                onClick: () => C(M),
                children: /* @__PURE__ */ f.jsx(hr, { className: "w-4 h-4" })
              }
            )
          ] }, M)) })
        ] })
      ] })
    ] }) }),
    t !== "json" && t !== "export" && /* @__PURE__ */ f.jsxs("div", { className: "flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100 shrink-0", children: [
      /* @__PURE__ */ f.jsx(Ie, { variant: "ghost", onClick: () => u(!1), className: "text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-6", children: "Hủy" }),
      /* @__PURE__ */ f.jsx(
        Ie,
        {
          onClick: p,
          className: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 transition-all font-bold",
          disabled: t === "template" && !a || t === "manual" && (!i || !s),
          children: t === "template" ? "Tạo Bản Sao (Instance)" : "Tạo Bảng Mới"
        }
      )
    ] })
  ] }) });
}
function w3(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function b3(e, t) {
  return b.useReducer((n, r) => t[n][r] ?? n, e);
}
var mh = "ScrollArea", [LS] = ri(mh), [S3, Ot] = LS(mh), OS = b.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...s
    } = e, [l, a] = b.useState(null), [c, d] = b.useState(null), [u, p] = b.useState(null), [h, m] = b.useState(null), [x, w] = b.useState(null), [g, v] = b.useState(0), [y, S] = b.useState(0), [E, C] = b.useState(!1), [N, P] = b.useState(!1), A = Re(t, (_) => a(_)), L = Zp(o);
    return /* @__PURE__ */ f.jsx(
      S3,
      {
        scope: n,
        type: r,
        dir: L,
        scrollHideDelay: i,
        scrollArea: l,
        viewport: c,
        onViewportChange: d,
        content: u,
        onContentChange: p,
        scrollbarX: h,
        onScrollbarXChange: m,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: C,
        scrollbarY: x,
        onScrollbarYChange: w,
        scrollbarYEnabled: N,
        onScrollbarYEnabledChange: P,
        onCornerWidthChange: v,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ f.jsx(
          Le.div,
          {
            dir: L,
            ...s,
            ref: A,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": g + "px",
              "--radix-scroll-area-corner-height": y + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
OS.displayName = mh;
var FS = "ScrollAreaViewport", zS = b.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, s = Ot(FS, n), l = b.useRef(null), a = Re(t, l, s.onViewportChange);
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ f.jsx(
        Le.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...i,
          ref: a,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ f.jsx("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
zS.displayName = FS;
var yn = "ScrollAreaScrollbar", gh = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ot(yn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, l = e.orientation === "horizontal";
    return b.useEffect(() => (l ? i(!0) : s(!0), () => {
      l ? i(!1) : s(!1);
    }), [l, i, s]), o.type === "hover" ? /* @__PURE__ */ f.jsx(N3, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ f.jsx(E3, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ f.jsx($S, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ f.jsx(yh, { ...r, ref: t }) : null;
  }
);
gh.displayName = yn;
var N3 = b.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ot(yn, e.__scopeScrollArea), [i, s] = b.useState(!1);
  return b.useEffect(() => {
    const l = o.scrollArea;
    let a = 0;
    if (l) {
      const c = () => {
        window.clearTimeout(a), s(!0);
      }, d = () => {
        a = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return l.addEventListener("pointerenter", c), l.addEventListener("pointerleave", d), () => {
        window.clearTimeout(a), l.removeEventListener("pointerenter", c), l.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ f.jsx(Vn, { present: n || i, children: /* @__PURE__ */ f.jsx(
    $S,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), E3 = b.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ot(yn, e.__scopeScrollArea), i = e.orientation === "horizontal", s = Hc(() => a("SCROLL_END"), 100), [l, a] = b3("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return b.useEffect(() => {
    if (l === "idle") {
      const c = window.setTimeout(() => a("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [l, o.scrollHideDelay, a]), b.useEffect(() => {
    const c = o.viewport, d = i ? "scrollLeft" : "scrollTop";
    if (c) {
      let u = c[d];
      const p = () => {
        const h = c[d];
        u !== h && (a("SCROLL"), s()), u = h;
      };
      return c.addEventListener("scroll", p), () => c.removeEventListener("scroll", p);
    }
  }, [o.viewport, i, a, s]), /* @__PURE__ */ f.jsx(Vn, { present: n || l !== "hidden", children: /* @__PURE__ */ f.jsx(
    yh,
    {
      "data-state": l === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: ae(e.onPointerEnter, () => a("POINTER_ENTER")),
      onPointerLeave: ae(e.onPointerLeave, () => a("POINTER_LEAVE"))
    }
  ) });
}), $S = b.forwardRef((e, t) => {
  const n = Ot(yn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, s] = b.useState(!1), l = e.orientation === "horizontal", a = Hc(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(l ? c : d);
    }
  }, 10);
  return Qo(n.viewport, a), Qo(n.content, a), /* @__PURE__ */ f.jsx(Vn, { present: r || i, children: /* @__PURE__ */ f.jsx(
    yh,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), yh = b.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Ot(yn, e.__scopeScrollArea), i = b.useRef(null), s = b.useRef(0), [l, a] = b.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = KS(l.viewport, l.content), d = {
    ...r,
    sizes: l,
    onSizesChange: a,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (p) => i.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function u(p, h) {
    return I3(p, s.current, l, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ f.jsx(
    C3,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollLeft, h = Ky(p, l, o.dir);
          i.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = u(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ f.jsx(
    _3,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollTop, h = Ky(p, l);
          i.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = u(p));
      }
    }
  ) : null;
}), C3 = b.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Ot(yn, e.__scopeScrollArea), [s, l] = b.useState(), a = b.useRef(null), c = Re(t, a, i.onScrollbarXChange);
  return b.useEffect(() => {
    a.current && l(getComputedStyle(a.current));
  }, [a]), /* @__PURE__ */ f.jsx(
    VS,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": $c(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, u) => {
        if (i.viewport) {
          const p = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(p), YS(p, u) && d.preventDefault();
        }
      },
      onResize: () => {
        a.current && i.viewport && s && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: a.current.clientWidth,
            paddingStart: Wa(s.paddingLeft),
            paddingEnd: Wa(s.paddingRight)
          }
        });
      }
    }
  );
}), _3 = b.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Ot(yn, e.__scopeScrollArea), [s, l] = b.useState(), a = b.useRef(null), c = Re(t, a, i.onScrollbarYChange);
  return b.useEffect(() => {
    a.current && l(getComputedStyle(a.current));
  }, [a]), /* @__PURE__ */ f.jsx(
    VS,
    {
      "data-orientation": "vertical",
      ...o,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": $c(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, u) => {
        if (i.viewport) {
          const p = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(p), YS(p, u) && d.preventDefault();
        }
      },
      onResize: () => {
        a.current && i.viewport && s && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: a.current.clientHeight,
            paddingStart: Wa(s.paddingTop),
            paddingEnd: Wa(s.paddingBottom)
          }
        });
      }
    }
  );
}), [k3, HS] = LS(yn), VS = b.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: i,
    onThumbPointerUp: s,
    onThumbPointerDown: l,
    onThumbPositionChange: a,
    onDragScroll: c,
    onWheelScroll: d,
    onResize: u,
    ...p
  } = e, h = Ot(yn, n), [m, x] = b.useState(null), w = Re(t, (A) => x(A)), g = b.useRef(null), v = b.useRef(""), y = h.viewport, S = r.content - r.viewport, E = Ze(d), C = Ze(a), N = Hc(u, 10);
  function P(A) {
    if (g.current) {
      const L = A.clientX - g.current.left, _ = A.clientY - g.current.top;
      c({ x: L, y: _ });
    }
  }
  return b.useEffect(() => {
    const A = (L) => {
      const _ = L.target;
      (m == null ? void 0 : m.contains(_)) && E(L, S);
    };
    return document.addEventListener("wheel", A, { passive: !1 }), () => document.removeEventListener("wheel", A, { passive: !1 });
  }, [y, m, S, E]), b.useEffect(C, [r, C]), Qo(m, N), Qo(h.content, N), /* @__PURE__ */ f.jsx(
    k3,
    {
      scope: n,
      scrollbar: m,
      hasThumb: o,
      onThumbChange: Ze(i),
      onThumbPointerUp: Ze(s),
      onThumbPositionChange: C,
      onThumbPointerDown: Ze(l),
      children: /* @__PURE__ */ f.jsx(
        Le.div,
        {
          ...p,
          ref: w,
          style: { position: "absolute", ...p.style },
          onPointerDown: ae(e.onPointerDown, (A) => {
            A.button === 0 && (A.target.setPointerCapture(A.pointerId), g.current = m.getBoundingClientRect(), v.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), P(A));
          }),
          onPointerMove: ae(e.onPointerMove, P),
          onPointerUp: ae(e.onPointerUp, (A) => {
            const L = A.target;
            L.hasPointerCapture(A.pointerId) && L.releasePointerCapture(A.pointerId), document.body.style.webkitUserSelect = v.current, h.viewport && (h.viewport.style.scrollBehavior = ""), g.current = null;
          })
        }
      )
    }
  );
}), Ka = "ScrollAreaThumb", BS = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = HS(Ka, e.__scopeScrollArea);
    return /* @__PURE__ */ f.jsx(Vn, { present: n || o.hasThumb, children: /* @__PURE__ */ f.jsx(T3, { ref: t, ...r }) });
  }
), T3 = b.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = Ot(Ka, n), s = HS(Ka, n), { onThumbPositionChange: l } = s, a = Re(
      t,
      (u) => s.onThumbChange(u)
    ), c = b.useRef(void 0), d = Hc(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return b.useEffect(() => {
      const u = i.viewport;
      if (u) {
        const p = () => {
          if (d(), !c.current) {
            const h = P3(u, l);
            c.current = h, l();
          }
        };
        return l(), u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
      }
    }, [i.viewport, d, l]), /* @__PURE__ */ f.jsx(
      Le.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: a,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: ae(e.onPointerDownCapture, (u) => {
          const h = u.target.getBoundingClientRect(), m = u.clientX - h.left, x = u.clientY - h.top;
          s.onThumbPointerDown({ x: m, y: x });
        }),
        onPointerUp: ae(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
BS.displayName = Ka;
var xh = "ScrollAreaCorner", US = b.forwardRef(
  (e, t) => {
    const n = Ot(xh, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ f.jsx(j3, { ...e, ref: t }) : null;
  }
);
US.displayName = xh;
var j3 = b.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Ot(xh, n), [i, s] = b.useState(0), [l, a] = b.useState(0), c = !!(i && l);
  return Qo(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) == null ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), a(d);
  }), Qo(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) == null ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), c ? /* @__PURE__ */ f.jsx(
    Le.div,
    {
      ...r,
      ref: t,
      style: {
        width: i,
        height: l,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Wa(e) {
  return e ? parseInt(e, 10) : 0;
}
function KS(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function $c(e) {
  const t = KS(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function I3(e, t, n, r = "ltr") {
  const o = $c(n), i = o / 2, s = t || i, l = o - s, a = n.scrollbar.paddingStart + s, c = n.scrollbar.size - n.scrollbar.paddingEnd - l, d = n.content - n.viewport, u = r === "ltr" ? [0, d] : [d * -1, 0];
  return WS([a, c], u)(e);
}
function Ky(e, t, n = "ltr") {
  const r = $c(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, l = i - r, a = n === "ltr" ? [0, s] : [s * -1, 0], c = w3(e, a);
  return WS([0, s], [0, l])(c);
}
function WS(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function YS(e, t) {
  return e > 0 && e < t;
}
var P3 = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, l = n.top !== i.top;
    (s || l) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Hc(e, t) {
  const n = Ze(e), r = b.useRef(0);
  return b.useEffect(() => () => window.clearTimeout(r.current), []), b.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Qo(e, t) {
  const n = Ze(t);
  On(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var GS = OS, M3 = zS, A3 = US;
const XS = b.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(
  GS,
  {
    ref: r,
    className: Z("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.jsx(M3, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.jsx(QS, {}),
      /* @__PURE__ */ f.jsx(A3, {})
    ]
  }
));
XS.displayName = GS.displayName;
const QS = b.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.jsx(
  gh,
  {
    ref: r,
    orientation: t,
    className: Z(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.jsx(BS, { className: "relative flex-1 rounded-full bg-border" })
  }
));
QS.displayName = gh.displayName;
const Wy = {
  targetType: "template",
  selectedTargetNodeId: "",
  selectedTemplateId: "",
  selectedSourceKey: "",
  selectedTargetKey: "",
  newFieldName: "",
  linkType: "1-n",
  searchQuery: ""
}, qS = yr({
  name: "linkField",
  initialState: Wy,
  reducers: {
    setLinkFieldTargetType: (e, t) => {
      e.targetType = t.payload;
    },
    setLinkFieldSelectedTargetNodeId: (e, t) => {
      e.selectedTargetNodeId = t.payload;
    },
    setLinkFieldSelectedTemplateId: (e, t) => {
      e.selectedTemplateId = t.payload;
    },
    setLinkFieldSelectedSourceKey: (e, t) => {
      e.selectedSourceKey = t.payload;
    },
    setLinkFieldSelectedTargetKey: (e, t) => {
      e.selectedTargetKey = t.payload;
    },
    setLinkFieldNewFieldName: (e, t) => {
      e.newFieldName = t.payload;
    },
    setLinkFieldLinkType: (e, t) => {
      e.linkType = t.payload;
    },
    setLinkFieldSearchQuery: (e, t) => {
      e.searchQuery = t.payload;
    },
    resetLinkFieldState: () => Wy,
    initializeLinkFieldState: (e, t) => ({ ...e, ...t.payload })
  }
}), {
  setLinkFieldTargetType: Ku,
  setLinkFieldSelectedTargetNodeId: Wu,
  setLinkFieldSelectedTemplateId: Yu,
  setLinkFieldSelectedSourceKey: R3,
  setLinkFieldSelectedTargetKey: D3,
  setLinkFieldNewFieldName: L3,
  setLinkFieldLinkType: O3,
  setLinkFieldSearchQuery: F3,
  resetLinkFieldState: z3,
  initializeLinkFieldState: $3
} = qS.actions, H3 = qS.reducer;
function V3() {
  const e = Nt(), t = xe((j) => j.schema.present.nodes), { isOpen: n, sourceNodeId: r, isEditMode: o, fieldIndex: i, initialValues: s } = xe((j) => j.ui.linkFieldDialog), {
    targetType: l,
    selectedTargetNodeId: a,
    selectedTemplateId: c,
    selectedSourceKey: d,
    selectedTargetKey: u,
    newFieldName: p,
    linkType: h,
    searchQuery: m
  } = xe((j) => j.linkField), x = b.useMemo(() => t.find((j) => j.id === r), [t, r]), w = t;
  b.useEffect(() => {
    n && e(s ? $3({
      targetType: "existing",
      selectedTargetNodeId: s.targetNodeId,
      selectedSourceKey: s.sourceKey,
      selectedTargetKey: s.targetKey,
      newFieldName: s.fieldName,
      linkType: s.linkType,
      selectedTemplateId: "",
      searchQuery: ""
    }) : z3());
  }, [n, s, e]);
  const { templates: g, filteredTemplates: v } = DS(m), y = b.useMemo(() => x ? w : [], [w, x]), S = b.useMemo(() => x ? x.data.columns.filter((j) => j.visible !== !1) : [], [x]), E = b.useMemo(() => {
    if (l === "existing") {
      if (!a) return [];
      const j = y.find((k) => k.id === a);
      return j ? j.data.columns.filter((k) => k.visible !== !1) : [];
    } else {
      if (!c) return [];
      const j = g.find((k) => k.id === c);
      return j ? j.columns : [];
    }
  }, [a, c, y, g, l]), C = b.useMemo(() => {
    var j, k;
    return l === "existing" ? (j = y.find((D) => D.id === a)) == null ? void 0 : j.data.label : (k = g.find((D) => D.id === c)) == null ? void 0 : k.name;
  }, [l, a, c, y, g]), N = b.useMemo(() => {
    if (!d || !u || !(l === "existing" ? a : c)) return null;
    const k = x == null ? void 0 : x.data.columns.find((R) => R.name === d), D = E.find((R) => R.name === u);
    if (k && D) {
      const R = hh.validateRelationshipTypes(
        k.type,
        D.type,
        k.name,
        D.name
      );
      if (!R.valid) return R.error;
    }
    if (d) {
      const R = S.find((O) => O.name === d);
      if (R && (R.type === "array" || R.type === "object"))
        return `Không thể liên kết tới trường '${d}' vì nó có kiểu '${R.type}'`;
    }
    if (u) {
      const R = E.find((O) => O.name === u);
      if (R && (R.type === "array" || R.type === "object"))
        return `Không thể liên kết tới trường '${u}' vì nó có kiểu '${R.type}'`;
    }
    return null;
  }, [d, u, a, c, x, E, l, S]), P = (l === "existing" ? a : c) && d && u && p.trim() && !N, A = b.useCallback(() => {
    if (!r) return;
    const j = l === "existing" ? a : c, k = l === "template";
    if (j && d && u && p.trim()) {
      let D = a;
      if (o && i !== void 0 && re.emit(oe.FIELD_DELETE, {
        nodeId: r,
        fieldIndex: i,
        skipRecursive: !0
      }), k && c) {
        const R = g.find((I) => I.id === c), O = t.find((I) => I.id === r);
        if (R && O) {
          const I = `table-${Date.now()}-${Math.floor(Math.random() * 1e3)}`, T = t.filter(($) => $.data.tableName === R.tableName).length, F = T > 0 ? `${R.name} (${T + 1})` : R.name, z = { x: O.position.x + 600, y: O.position.y };
          re.emit(oe.TABLE_ADD, {
            id: I,
            name: F,
            tableName: R.tableName,
            columns: R.columns.map(($) => ({ ...$, isVirtual: !1 })),
            position: z
          }), D = I;
        }
      }
      re.emit(oe.RELATIONSHIP_ADD, {
        type: h === "1-n" ? "1-n" : "object",
        relationshipType: h,
        sourceNodeId: r,
        targetNodeId: D,
        sourceKey: d,
        targetKey: u,
        fieldName: p.trim()
      }), e(dy());
    }
  }, [r, l, a, c, d, u, p, o, i, h, t, e, g]);
  return {
    // State
    isOpen: n,
    isEditMode: o,
    sourceNode: x,
    sourceFields: S,
    targetFields: E,
    validationError: N,
    isFormValid: P,
    // Form Values
    targetType: l,
    selectedTargetNodeId: a,
    selectedTemplateId: c,
    selectedSourceKey: d,
    selectedTargetKey: u,
    newFieldName: p,
    linkType: h,
    searchQuery: m,
    selectedTargetName: C,
    availableTargetNodes: y,
    filteredTemplates: v,
    templates: g,
    // Handlers
    handleConfirm: A,
    handleCancel: () => e(dy()),
    // Setters
    setLinkFieldSearchQuery: (j) => e(F3(j)),
    setLinkFieldSelectedTemplateId: (j) => e(Yu(j)),
    setLinkFieldNewFieldName: (j) => e(L3(j)),
    setLinkFieldTargetType: (j) => e(Ku(j)),
    setLinkFieldLinkType: (j) => e(O3(j)),
    setLinkFieldSelectedTargetNodeId: (j) => e(Wu(j)),
    setLinkFieldSelectedSourceKey: (j) => e(R3(j)),
    setLinkFieldSelectedTargetKey: (j) => e(D3(j)),
    setSelectionAction: (j) => {
      j.type === "template" ? (e(Ku("template")), e(Yu(j.id)), e(Wu(""))) : (e(Ku("existing")), e(Wu(j.id)), e(Yu("")));
    }
  };
}
function B3() {
  const {
    // State
    isOpen: e,
    isEditMode: t,
    sourceNode: n,
    sourceFields: r,
    targetFields: o,
    validationError: i,
    isFormValid: s,
    // Form Values
    targetType: l,
    selectedTargetNodeId: a,
    selectedTemplateId: c,
    selectedSourceKey: d,
    selectedTargetKey: u,
    newFieldName: p,
    linkType: h,
    searchQuery: m,
    selectedTargetName: x,
    availableTargetNodes: w,
    filteredTemplates: g,
    templates: v,
    // Handlers
    handleConfirm: y,
    handleCancel: S,
    // Setters
    setLinkFieldSearchQuery: E,
    setLinkFieldNewFieldName: C,
    setLinkFieldLinkType: N,
    setLinkFieldSelectedSourceKey: P,
    setLinkFieldSelectedTargetKey: A,
    setSelectionAction: L
  } = V3();
  return n ? /* @__PURE__ */ f.jsx(ti, { open: e, onOpenChange: (_) => !_ && S(), children: /* @__PURE__ */ f.jsxs(Xr, { className: Z(
    "bg-white text-gray-900 border-gray-200 shadow-xl flex flex-col p-0 gap-0",
    "resize-y overflow-hidden min-h-[500px]",
    t ? "max-w-6xl h-[80vh]" : "max-w-7xl h-[85vh]"
  ), style: { resize: "both" }, children: [
    /* @__PURE__ */ f.jsxs(Qr, { className: "p-4 border-b border-gray-100 shrink-0", children: [
      /* @__PURE__ */ f.jsx(qr, { children: t ? "Chỉnh Sửa Trường Link" : "Thêm Trường Link Mới" }),
      /* @__PURE__ */ f.jsxs(ni, { className: "text-gray-500", children: [
        t ? "Cập nhật" : "Tạo",
        " liên kết giữa ",
        /* @__PURE__ */ f.jsx("strong", { children: n == null ? void 0 : n.data.label }),
        " và bảng khác."
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-1 min-h-0", children: [
      t && /* @__PURE__ */ f.jsx("div", { className: "w-[280px] border-r border-gray-200 flex flex-col bg-white min-h-0 overflow-y-auto shrink-0", children: /* @__PURE__ */ f.jsxs("div", { className: "p-6 space-y-8", children: [
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsx("h3", { className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-4", children: "Kiểu Dữ Liệu" }),
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ f.jsxs(
              "button",
              {
                onClick: () => N("1-n"),
                className: Z("w-full text-left p-3 rounded-lg border transition-all", h === "1-n" ? "bg-blue-50 border-blue-200 ring-1 ring-blue-200" : "bg-gray-50 border-transparent hover:bg-gray-100"),
                children: [
                  /* @__PURE__ */ f.jsx("div", { className: Z("font-bold text-sm mb-0.5", h === "1-n" ? "text-blue-700" : "text-gray-900"), children: "Array" }),
                  /* @__PURE__ */ f.jsx("div", { className: "text-xs text-gray-500", children: "Danh sách (1:N)" })
                ]
              }
            ),
            /* @__PURE__ */ f.jsxs(
              "button",
              {
                onClick: () => N("n-1"),
                className: Z("w-full text-left p-3 rounded-lg border transition-all", h !== "1-n" ? "bg-blue-50 border-blue-200 ring-1 ring-blue-200" : "bg-gray-50 border-transparent hover:bg-gray-100"),
                children: [
                  /* @__PURE__ */ f.jsx("div", { className: Z("font-bold text-sm mb-0.5", h !== "1-n" ? "text-blue-700" : "text-gray-900"), children: "Object" }),
                  /* @__PURE__ */ f.jsx("div", { className: "text-xs text-gray-500", children: "Đối tượng (N:1, 1:1)" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsx("h3", { className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-4", children: "Quan hệ" }),
          /* @__PURE__ */ f.jsx("div", { className: "space-y-2", children: [
            { id: "1-1", label: "1:1", desc: "One to One" },
            { id: "1-n", label: "1:N", desc: "One to Many" },
            { id: "n-1", label: "N:1", desc: "Many to One" }
          ].map((_) => /* @__PURE__ */ f.jsxs(
            "button",
            {
              onClick: () => N(_.id),
              className: Z(
                "w-full flex items-center justify-between p-2 px-3 rounded-md transition-all",
                h === _.id ? "bg-blue-50 text-blue-700 font-bold" : "text-gray-600 hover:bg-gray-100"
              ),
              children: [
                /* @__PURE__ */ f.jsx("span", { className: Z("font-mono text-xs", h === _.id && "bg-blue-100 px-1.5 py-0.5 rounded"), children: _.label }),
                /* @__PURE__ */ f.jsx("span", { className: "text-xs opacity-70", children: _.desc })
              ]
            },
            _.id
          )) })
        ] })
      ] }) }),
      !t && /* @__PURE__ */ f.jsxs("div", { className: "w-[320px] border-r border-gray-200 flex flex-col bg-gray-50/50 min-h-0", children: [
        /* @__PURE__ */ f.jsx("div", { className: "p-3 pb-0 bg-gray-50/50 pt-3", children: /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ f.jsx(Tb, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-gray-400" }),
          /* @__PURE__ */ f.jsx(
            ht,
            {
              placeholder: "Tìm mẫu...",
              value: m,
              onChange: (_) => E(_.target.value),
              className: "pl-8 h-9 text-sm bg-white border-gray-200"
            }
          )
        ] }) }),
        /* @__PURE__ */ f.jsx("div", { className: "flex-1 p-3 overflow-y-auto min-h-0", children: /* @__PURE__ */ f.jsx("div", { className: "space-y-1", children: g.length > 0 ? g.map((_) => /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => {
              L({ type: "template", id: _.id }), C(_.name.toLowerCase());
            },
            className: Z(
              "w-full text-left px-3 py-2.5 rounded-lg transition-all border group",
              c === _.id ? "bg-blue-50 border-blue-200 shadow-sm" : "border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm"
            ),
            children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ f.jsx(Fi, { className: Z("w-4 h-4 shrink-0", c === _.id ? "text-blue-600" : "text-gray-400") }),
              /* @__PURE__ */ f.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ f.jsx("div", { className: Z("text-sm font-semibold truncate", c === _.id ? "text-blue-900" : "text-gray-700"), children: _.name }),
                /* @__PURE__ */ f.jsx("div", { className: "text-[10px] text-gray-400 truncate", children: _.tableName })
              ] })
            ] })
          },
          _.id
        )) : /* @__PURE__ */ f.jsx("div", { className: "text-center py-8 text-xs text-gray-400", children: "Không tìm thấy mẫu data" }) }) })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "flex-1 flex flex-col bg-white min-w-0", children: x ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx("div", { className: "px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white z-10", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ f.jsx("span", { className: "bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide", children: "Selected" }),
          /* @__PURE__ */ f.jsx("h3", { className: "font-bold text-gray-900 text-lg", children: x })
        ] }) }),
        /* @__PURE__ */ f.jsx("div", { className: "flex-1 min-h-0 bg-gray-50 relative group", children: /* @__PURE__ */ f.jsx(XS, { className: "h-full", children: /* @__PURE__ */ f.jsxs("div", { className: "p-6 grid grid-cols-[1fr,100px,1fr] gap-0 relative", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-3 z-10 w-full min-w-0", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ f.jsx("span", { className: "bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide", children: "Source" }),
              /* @__PURE__ */ f.jsx("h4", { className: "font-bold text-gray-900 text-sm truncate", children: n == null ? void 0 : n.data.label })
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden ring-1 ring-gray-900/5", children: /* @__PURE__ */ f.jsxs("table", { className: "w-full text-left border-collapse table-fixed", children: [
              /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsx("tr", { className: "bg-gray-50/50 border-b border-gray-100 h-10", children: /* @__PURE__ */ f.jsx("th", { className: "px-3 text-[9px] font-extrabold text-slate-700 uppercase tracking-widest font-sans w-full", children: "Field" }) }) }),
              /* @__PURE__ */ f.jsxs("tbody", { className: "divide-y divide-gray-50", children: [
                r.map((_, M) => /* @__PURE__ */ f.jsx("tr", { className: Z("transition-colors h-10", d === _.name ? "bg-blue-50" : "hover:bg-slate-50"), children: /* @__PURE__ */ f.jsx("td", { className: Z("px-3 text-xs font-bold font-mono truncate", _.isPrimaryKey ? "text-violet-800" : "text-slate-800", d === _.name && "text-blue-700"), children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2", children: [
                  _.isPrimaryKey && /* @__PURE__ */ f.jsx("div", { className: "w-1.5 h-1.5 bg-violet-600 rounded-full ring-2 ring-violet-100 shadow-sm shrink-0" }),
                  /* @__PURE__ */ f.jsx("span", { className: "truncate", children: _.name })
                ] }) }) }, M)),
                r.length === 0 && /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { className: "py-4 text-center text-gray-400 text-xs", children: "No columns" }) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ f.jsx("div", { className: "relative w-full h-full pointer-events-none", children: /* @__PURE__ */ f.jsxs("svg", { className: "absolute top-0 left-0 w-full h-full overflow-visible", children: [
            /* @__PURE__ */ f.jsxs("defs", { children: [
              /* @__PURE__ */ f.jsx("marker", { id: "arrowhead-start", markerWidth: "6", markerHeight: "6", refX: "3", refY: "3", orient: "auto", children: /* @__PURE__ */ f.jsx("circle", { cx: "3", cy: "3", r: "2", fill: "#3b82f6" }) }),
              /* @__PURE__ */ f.jsx("marker", { id: "arrowhead-end", markerWidth: "6", markerHeight: "6", refX: "3", refY: "3", orient: "auto", children: /* @__PURE__ */ f.jsx("circle", { cx: "3", cy: "3", r: "2", fill: "#3b82f6" }) })
            ] }),
            (() => {
              const _ = r.findIndex((O) => O.name === d), M = o.findIndex((O) => O.name === u);
              if (_ === -1 || M === -1) return null;
              const j = 68, k = 40, D = j + _ * k + k / 2, R = j + M * k + k / 2;
              return /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsx(
                "path",
                {
                  d: `M 0 ${D} C 50 ${D}, 50 ${R}, 100 ${R}`,
                  fill: "none",
                  stroke: "#3b82f6",
                  strokeWidth: "2",
                  strokeDasharray: "4",
                  className: "animate-pulse",
                  markerEnd: "url(#arrowhead-end)"
                }
              ) });
            })()
          ] }) }),
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-3 z-10 w-full min-w-0", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ f.jsxs("span", { className: Z("px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide", l === "existing" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"), children: [
                "Target (",
                l,
                ")"
              ] }),
              /* @__PURE__ */ f.jsx("h4", { className: "font-bold text-gray-900 text-sm truncate", children: x })
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden ring-1 ring-gray-900/5", children: /* @__PURE__ */ f.jsxs("table", { className: "w-full text-left border-collapse table-fixed", children: [
              /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { className: "bg-gray-50/50 border-b border-gray-100 h-10", children: [
                /* @__PURE__ */ f.jsx("th", { className: "px-3 text-[9px] font-extrabold text-slate-700 uppercase tracking-widest w-10 text-center font-sans", children: "PK" }),
                /* @__PURE__ */ f.jsx("th", { className: "px-3 text-[9px] font-extrabold text-slate-700 uppercase tracking-widest font-sans w-full", children: "Field" }),
                /* @__PURE__ */ f.jsx("th", { className: "px-3 text-[9px] font-extrabold text-slate-700 uppercase tracking-widest w-20 text-right font-sans", children: "Type" })
              ] }) }),
              /* @__PURE__ */ f.jsxs("tbody", { className: "divide-y divide-gray-50", children: [
                o.map((_, M) => /* @__PURE__ */ f.jsxs("tr", { className: Z("transition-colors h-10", u === _.name ? "bg-blue-50" : "hover:bg-slate-50"), children: [
                  /* @__PURE__ */ f.jsx("td", { className: "px-3 text-center", children: _.isPrimaryKey && /* @__PURE__ */ f.jsx("div", { className: "w-1.5 h-1.5 bg-violet-600 rounded-full mx-auto ring-2 ring-violet-100 shadow-sm" }) }),
                  /* @__PURE__ */ f.jsxs("td", { className: Z("px-3 text-xs font-bold font-mono truncate", _.isPrimaryKey ? "text-violet-800" : "text-slate-800", u === _.name && "text-blue-700"), children: [
                    _.name,
                    _.isVirtual && /* @__PURE__ */ f.jsx("span", { className: "ml-1 inline-flex items-center px-1 py-0.5 rounded text-[8px] font-medium bg-blue-100 text-blue-800 uppercase tracking-wider", children: "Vir" })
                  ] }),
                  /* @__PURE__ */ f.jsx("td", { className: "px-3 text-[10px] font-semibold font-mono text-slate-600 text-right truncate", children: _.isVirtual ? "relation" : _.type })
                ] }, M)),
                o.length === 0 && /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { colSpan: 3, className: "py-4 text-center text-gray-400 text-xs", children: "No columns found" }) })
              ] })
            ] }) })
          ] })
        ] }) }) }),
        /* @__PURE__ */ f.jsxs("div", { className: "p-6 border-t border-gray-100 bg-white shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] z-20", children: [
          /* @__PURE__ */ f.jsx("h4", { className: "text-xs font-bold text-gray-900 uppercase tracking-widest mb-4", children: "Cấu hình liên kết" }),
          /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
            !t && /* @__PURE__ */ f.jsxs("div", { className: "col-span-12 grid grid-cols-2 gap-6 pb-4 border-b border-gray-50 mb-2", children: [
              /* @__PURE__ */ f.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ f.jsx("label", { className: "text-[10px] font-semibold text-gray-500 uppercase block", children: "Kiểu Dữ Liệu" }),
                /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ f.jsx("button", { onClick: () => N("1-n"), className: Z("flex-1 py-1.5 px-3 rounded text-xs font-medium border transition-all", h === "1-n" ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 hover:border-gray-300 text-slate-700"), children: "Array (1:N)" }),
                  /* @__PURE__ */ f.jsx("button", { onClick: () => N("n-1"), className: Z("flex-1 py-1.5 px-3 rounded text-xs font-medium border transition-all", h !== "1-n" ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 hover:border-gray-300 text-slate-700"), children: "Object (N:1)" })
                ] })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ f.jsx("label", { className: "text-[10px] font-semibold text-gray-500 uppercase block", children: "Quan hệ" }),
                /* @__PURE__ */ f.jsx("div", { className: "flex gap-2", children: ["1-1", "1-n", "n-1"].map((_) => /* @__PURE__ */ f.jsx("button", { onClick: () => N(_), className: Z("flex-1 py-1.5 px-3 rounded text-xs font-medium border transition-all uppercase", h === _ ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 hover:border-gray-300 text-slate-700"), children: _ }, _)) })
              ] })
            ] }),
            t && /* @__PURE__ */ f.jsxs("div", { className: "col-span-12 space-y-1.5", children: [
              /* @__PURE__ */ f.jsx("label", { className: "text-[10px] font-semibold text-gray-500 uppercase block", children: "Target Table" }),
              /* @__PURE__ */ f.jsxs(
                "select",
                {
                  value: l === "template" ? `template:${c}` : a,
                  onChange: (_) => {
                    const M = _.target.value;
                    M.startsWith("template:") ? L({ type: "template", id: M.replace("template:", "") }) : L({ type: "existing", id: M });
                  },
                  className: "w-full h-9 rounded-md border-gray-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-colors shadow-sm",
                  children: [
                    /* @__PURE__ */ f.jsx("optgroup", { label: "Bảng hiện có", children: w.map((_) => /* @__PURE__ */ f.jsxs("option", { value: _.id, children: [
                      _.data.label,
                      " (Instance)"
                    ] }, _.id)) }),
                    /* @__PURE__ */ f.jsx("optgroup", { label: "Tạo bảng mới từ mẫu", children: v.map((_) => /* @__PURE__ */ f.jsxs("option", { value: `template:${_.id}`, children: [
                      _.name,
                      " (Template)"
                    ] }, _.id)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "col-span-8 grid grid-cols-[1fr,auto,1fr] gap-4 items-center", children: [
              /* @__PURE__ */ f.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ f.jsxs("label", { className: "text-[10px] font-semibold text-gray-500 uppercase flex justify-between", children: [
                  /* @__PURE__ */ f.jsx("span", { children: "Source Key (PK)" }),
                  /* @__PURE__ */ f.jsx("span", { className: "text-blue-600", children: n == null ? void 0 : n.data.label })
                ] }),
                /* @__PURE__ */ f.jsxs(
                  "select",
                  {
                    value: d,
                    onChange: (_) => P(_.target.value),
                    disabled: l === "existing" && !t,
                    className: "w-full h-9 rounded-md border-gray-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-colors shadow-sm disabled:bg-gray-100 disabled:text-gray-500",
                    children: [
                      /* @__PURE__ */ f.jsx("option", { value: "", children: "-- Chọn khóa --" }),
                      r.map((_) => /* @__PURE__ */ f.jsx("option", { value: _.name, children: _.name }, _.name))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ f.jsx("div", { className: "pt-5 text-gray-300", children: /* @__PURE__ */ f.jsx(SR, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ f.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ f.jsxs("label", { className: "text-[10px] font-semibold text-gray-500 uppercase flex justify-between", children: [
                  /* @__PURE__ */ f.jsx("span", { children: "Target Key (FK)" }),
                  /* @__PURE__ */ f.jsx("span", { className: "text-blue-600 truncate max-w-[100px]", children: x })
                ] }),
                /* @__PURE__ */ f.jsxs(
                  "select",
                  {
                    value: u,
                    onChange: (_) => A(_.target.value),
                    disabled: l === "existing" && !t,
                    className: "w-full h-9 rounded-md border-gray-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-colors shadow-sm disabled:bg-gray-100 disabled:text-gray-500",
                    children: [
                      /* @__PURE__ */ f.jsx("option", { value: "", children: "-- Chọn khóa --" }),
                      o.map((_) => /* @__PURE__ */ f.jsx("option", { value: _.name, children: _.name }, _.name))
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "col-span-4 space-y-1.5", children: [
              /* @__PURE__ */ f.jsx("label", { className: "text-[10px] font-semibold text-gray-500 uppercase block", children: "Field Name in Source" }),
              /* @__PURE__ */ f.jsx(
                ht,
                {
                  value: p,
                  onChange: (_) => C(_.target.value),
                  placeholder: "e.g. suppliers",
                  disabled: l === "existing" && !t,
                  className: "h-9 bg-white border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                }
              )
            ] })
          ] }),
          l === "existing" && !t && /* @__PURE__ */ f.jsxs("div", { className: "mt-3 bg-blue-50 p-3 rounded text-[11px] text-blue-700 flex gap-2", children: [
            /* @__PURE__ */ f.jsx("span", { className: "font-bold", children: "Info:" }),
            /* @__PURE__ */ f.jsx("span", { children: "Select keys below to create a link to this existing table." })
          ] }),
          i && /* @__PURE__ */ f.jsxs("div", { className: "mt-3 text-red-600 text-[11px] font-medium flex items-center gap-2 animate-in slide-in-from-left-2", children: [
            /* @__PURE__ */ f.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-red-500" }),
            i
          ] })
        ] })
      ] }) : (
        // ... Empty State ...
        /* @__PURE__ */ f.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center text-gray-400 gap-3", children: [
          /* @__PURE__ */ f.jsx("div", { className: "w-16 h-16 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center", children: /* @__PURE__ */ f.jsx(Fi, { className: "w-8 h-8 opacity-20" }) }),
          /* @__PURE__ */ f.jsx("p", { className: "text-sm font-medium", children: "Chọn một bảng từ danh sách bên trái" })
        ] })
      ) })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "p-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50 shrink-0", children: [
      /* @__PURE__ */ f.jsx(Ie, { variant: "ghost", onClick: S, className: "text-gray-500 hover:text-gray-900 border border-transparent hover:bg-white hover:border-gray-200 transition-all font-medium", children: l === "existing" && !t ? "Đóng" : "Hủy bỏ" }),
      /* @__PURE__ */ f.jsx(
        Ie,
        {
          onClick: y,
          disabled: !s,
          className: Z(
            "min-w-[140px] shadow-lg shadow-blue-500/20 transition-all font-bold",
            s ? "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
          ),
          children: l === "template" ? "Tạo Bản Sao & Link" : t ? "Lưu Thay Đổi" : "Tạo Liên Kết"
        }
      )
    ] })
  ] }) }) : null;
}
function U3() {
  const e = xe((t) => t.ui.linkFieldDialog.isOpen);
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(v3, {}),
    e && /* @__PURE__ */ f.jsx(B3, {})
  ] });
}
function K3() {
  const e = Nt(), t = xe((n) => n.schema.present.nodes);
  return b.useEffect(() => {
    const n = (w) => {
      e(gb(w));
    }, r = (w) => {
      e(af({ id: w.id, updates: w.updates }));
    }, o = (w) => {
      e(Hb(w.id));
    }, i = (w) => {
      e(pR({ nodeId: w.nodeId, field: w.field }));
    }, s = (w) => {
      e(Vl({ nodeId: w.nodeId, fieldIndex: w.fieldIndex, updates: w.updates }));
    }, l = (w) => {
      e(Vb(w.nodeId, w.fieldIndex));
    }, a = (w) => {
      e(Wp({ nodeId: w.nodeId, oldIndex: w.oldIndex, newIndex: w.newIndex }));
    }, c = (w) => {
      e(vb({ nodeId: w.nodeId, fieldIndex: w.fieldIndex }));
    }, d = () => e(Cr.undo()), u = () => e(Cr.redo()), p = () => {
      const w = Fb(t);
      e(Kp(w));
    }, h = (w) => {
      w.type === "1-n" ? e(wb({
        sourceNodeId: w.sourceNodeId,
        targetNodeId: w.targetNodeId,
        sourcePK: w.sourceKey,
        targetFK: w.targetKey,
        newFieldName: w.fieldName,
        relationshipType: w.relationshipType || "1-n"
      })) : e(bb({
        sourceNodeId: w.sourceNodeId,
        targetNodeId: w.targetNodeId,
        sourceFK: w.sourceKey,
        targetPK: w.targetKey,
        newFieldName: w.fieldName,
        relationshipType: w.relationshipType
      }));
    }, m = (w) => {
      e(Qp(w.sourceNodeId));
    }, x = (w) => {
      const g = t.find((v) => v.id === w.id);
      if (g) {
        const v = g.data.isActive !== !1;
        e(af({ id: w.id, updates: { isActive: !v } }));
      }
    };
    return re.on(oe.TABLE_ADD, n), re.on(oe.TABLE_UPDATE, r), re.on(oe.TABLE_DELETE, o), re.on(oe.TABLE_TOGGLE_VISIBILITY, x), re.on(oe.FIELD_ADD, i), re.on(oe.FIELD_UPDATE, s), re.on(oe.FIELD_DELETE, l), re.on(oe.FIELD_REORDER, a), re.on(oe.FIELD_TOGGLE_VISIBILITY, c), re.on(oe.SCHEMA_UNDO, d), re.on(oe.SCHEMA_REDO, u), re.on(oe.SCHEMA_AUTO_LAYOUT, p), re.on(oe.RELATIONSHIP_ADD, h), re.on(oe.LINK_FIELD_OPEN, m), () => {
      re.off(oe.TABLE_ADD, n), re.off(oe.TABLE_UPDATE, r), re.off(oe.TABLE_DELETE, o), re.off(oe.TABLE_TOGGLE_VISIBILITY, x), re.off(oe.FIELD_ADD, i), re.off(oe.FIELD_UPDATE, s), re.off(oe.FIELD_DELETE, l), re.off(oe.FIELD_REORDER, a), re.off(oe.FIELD_TOGGLE_VISIBILITY, c), re.off(oe.SCHEMA_UNDO, d), re.off(oe.SCHEMA_REDO, u), re.off(oe.SCHEMA_AUTO_LAYOUT, p), re.off(oe.RELATIONSHIP_ADD, h), re.off(oe.LINK_FIELD_OPEN, m);
    };
  }, [e, t]), null;
}
const Yy = "jmix:ui";
function W3(e) {
  const t = (n) => {
    const r = n;
    !r.detail || r.detail.v !== 1 || (console.log(r.detail), e(r.detail));
  };
  return window.addEventListener(Yy, t), () => window.removeEventListener(Yy, t);
}
const Y3 = yr({
  name: "jmix",
  initialState: {},
  reducers: {
    eventReceived: (e, t) => {
    }
  }
}), { eventReceived: ZS } = Y3.actions;
function G3() {
  const e = Nt();
  return b.useEffect(() => W3((t) => e(ZS(t))), [e]), /* @__PURE__ */ f.jsxs("div", { className: "flex h-screen w-screen bg-gray-50 text-gray-900 overflow-hidden", children: [
    /* @__PURE__ */ f.jsx(K3, {}),
    /* @__PURE__ */ f.jsx(BF, {}),
    /* @__PURE__ */ f.jsx("div", { className: "flex-1 flex flex-col relative h-full", children: /* @__PURE__ */ f.jsx("div", { className: "flex-1 h-full", children: /* @__PURE__ */ f.jsx(QF, {}) }) }),
    /* @__PURE__ */ f.jsx(U3, {})
  ] });
}
var JS, Gy = Ps;
JS = Gy.createRoot, Gy.hydrateRoot;
const X3 = (e) => (t) => (n) => {
  if (n.type !== ZS.type) return t(n);
  const r = n.payload;
  switch (r.type) {
    case "TABLE_ADD": {
      console.log("schemaMiddleware received message", r.payload), e.dispatch(gb(r.payload));
      break;
    }
  }
  return t(n);
}, Q3 = [X3], q3 = CC({
  reducer: {
    schema: wD(hR, {
      limit: 50,
      filter: pD([
        "schema/onNodesChange",
        "schema/onEdgesChange",
        "schema/setNodes",
        "schema/setEdges"
      ])
    }),
    ui: dD,
    addTable: g3,
    export: s3,
    jsonImport: JF,
    sidebar: xR,
    linkField: H3
  },
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //         serializableCheck: {
  //             ignoredActions: ['schema/onNodesChange', 'schema/onEdgesChange'],
  //         },
  //     }),
  middleware: (e) => e().concat(...Q3)
});
class Z3 extends HTMLElement {
  constructor() {
    super(...arguments);
    zs(this, "root");
  }
  connectedCallback() {
    this.style.display = "block", this.root = JS(this), this.root.render(
      /* @__PURE__ */ f.jsx(KE, { store: q3, children: /* @__PURE__ */ f.jsx(G3, {}) })
    );
  }
  disconnectedCallback() {
    var n;
    (n = this.root) == null || n.unmount(), this.root = void 0;
  }
}
customElements.get("schema-element") || customElements.define("schema-element", Z3);
export {
  Z3 as CustomTable
};
