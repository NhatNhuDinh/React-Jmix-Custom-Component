var fw = Object.defineProperty;
var hw = (e, t, n) => t in e ? fw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Zi = (e, t, n) => hw(e, typeof t != "symbol" ? t + "" : t, n);
function rg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var og = { exports: {} }, Vl = {}, ig = { exports: {} }, se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li = Symbol.for("react.element"), pw = Symbol.for("react.portal"), gw = Symbol.for("react.fragment"), mw = Symbol.for("react.strict_mode"), yw = Symbol.for("react.profiler"), xw = Symbol.for("react.provider"), vw = Symbol.for("react.context"), ww = Symbol.for("react.forward_ref"), Sw = Symbol.for("react.suspense"), Ew = Symbol.for("react.memo"), _w = Symbol.for("react.lazy"), Ef = Symbol.iterator;
function bw(e) {
  return e === null || typeof e != "object" ? null : (e = Ef && e[Ef] || e["@@iterator"], typeof e == "function" ? e : null);
}
var sg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, lg = Object.assign, ag = {};
function xo(e, t, n) {
  this.props = e, this.context = t, this.refs = ag, this.updater = n || sg;
}
xo.prototype.isReactComponent = {};
xo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
xo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ug() {
}
ug.prototype = xo.prototype;
function Bc(e, t, n) {
  this.props = e, this.context = t, this.refs = ag, this.updater = n || sg;
}
var Uc = Bc.prototype = new ug();
Uc.constructor = Bc;
lg(Uc, xo.prototype);
Uc.isPureReactComponent = !0;
var _f = Array.isArray, cg = Object.prototype.hasOwnProperty, Kc = { current: null }, dg = { key: !0, ref: !0, __self: !0, __source: !0 };
function fg(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) cg.call(t, r) && !dg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Li, type: e, key: i, ref: s, props: o, _owner: Kc.current };
}
function Nw(e, t) {
  return { $$typeof: Li, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Wc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Li;
}
function kw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var bf = /\/+/g;
function Ma(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? kw("" + e.key) : t.toString(36);
}
function Ts(e, t, n, r, o) {
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
        case Li:
        case pw:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Ma(s, 0) : r, _f(o) ? (n = "", e != null && (n = e.replace(bf, "$&/") + "/"), Ts(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Wc(o) && (o = Nw(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(bf, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", _f(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + Ma(i, l);
    s += Ts(i, t, n, a, o);
  }
  else if (a = bw(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + Ma(i, l++), s += Ts(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function qi(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Ts(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Cw(e) {
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
var Xe = { current: null }, Ps = { transition: null }, Iw = { ReactCurrentDispatcher: Xe, ReactCurrentBatchConfig: Ps, ReactCurrentOwner: Kc };
function hg() {
  throw Error("act(...) is not supported in production builds of React.");
}
se.Children = { map: qi, forEach: function(e, t, n) {
  qi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return qi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return qi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Wc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
se.Component = xo;
se.Fragment = gw;
se.Profiler = yw;
se.PureComponent = Bc;
se.StrictMode = mw;
se.Suspense = Sw;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iw;
se.act = hg;
se.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = lg({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Kc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) cg.call(t, a) && !dg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Li, type: e.type, key: o, ref: i, props: r, _owner: s };
};
se.createContext = function(e) {
  return e = { $$typeof: vw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: xw, _context: e }, e.Consumer = e;
};
se.createElement = fg;
se.createFactory = function(e) {
  var t = fg.bind(null, e);
  return t.type = e, t;
};
se.createRef = function() {
  return { current: null };
};
se.forwardRef = function(e) {
  return { $$typeof: ww, render: e };
};
se.isValidElement = Wc;
se.lazy = function(e) {
  return { $$typeof: _w, _payload: { _status: -1, _result: e }, _init: Cw };
};
se.memo = function(e, t) {
  return { $$typeof: Ew, type: e, compare: t === void 0 ? null : t };
};
se.startTransition = function(e) {
  var t = Ps.transition;
  Ps.transition = {};
  try {
    e();
  } finally {
    Ps.transition = t;
  }
};
se.unstable_act = hg;
se.useCallback = function(e, t) {
  return Xe.current.useCallback(e, t);
};
se.useContext = function(e) {
  return Xe.current.useContext(e);
};
se.useDebugValue = function() {
};
se.useDeferredValue = function(e) {
  return Xe.current.useDeferredValue(e);
};
se.useEffect = function(e, t) {
  return Xe.current.useEffect(e, t);
};
se.useId = function() {
  return Xe.current.useId();
};
se.useImperativeHandle = function(e, t, n) {
  return Xe.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function(e, t) {
  return Xe.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function(e, t) {
  return Xe.current.useLayoutEffect(e, t);
};
se.useMemo = function(e, t) {
  return Xe.current.useMemo(e, t);
};
se.useReducer = function(e, t, n) {
  return Xe.current.useReducer(e, t, n);
};
se.useRef = function(e) {
  return Xe.current.useRef(e);
};
se.useState = function(e) {
  return Xe.current.useState(e);
};
se.useSyncExternalStore = function(e, t, n) {
  return Xe.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function() {
  return Xe.current.useTransition();
};
se.version = "18.3.1";
ig.exports = se;
var b = ig.exports;
const Tw = /* @__PURE__ */ rg(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pw = b, Mw = Symbol.for("react.element"), Aw = Symbol.for("react.fragment"), Dw = Object.prototype.hasOwnProperty, Lw = Pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jw = { key: !0, ref: !0, __self: !0, __source: !0 };
function pg(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Dw.call(t, r) && !jw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Mw, type: e, key: i, ref: s, props: o, _owner: Lw.current };
}
Vl.Fragment = Aw;
Vl.jsx = pg;
Vl.jsxs = pg;
og.exports = Vl;
var m = og.exports, gg = { exports: {} }, mg = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji = b;
function Rw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fw = typeof Object.is == "function" ? Object.is : Rw, Ow = ji.useSyncExternalStore, zw = ji.useRef, $w = ji.useEffect, Hw = ji.useMemo, Vw = ji.useDebugValue;
mg.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = zw(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = Hw(
    function() {
      function a(p) {
        if (!u) {
          if (u = !0, d = p, p = r(p), o !== void 0 && s.hasValue) {
            var y = s.value;
            if (o(y, p))
              return c = y;
          }
          return c = p;
        }
        if (y = c, Fw(d, p)) return y;
        var w = r(p);
        return o !== void 0 && o(y, w) ? (d = p, y) : (d = p, c = w);
      }
      var u = !1, d, c, f = n === void 0 ? null : n;
      return [
        function() {
          return a(t());
        },
        f === null ? void 0 : function() {
          return a(f());
        }
      ];
    },
    [t, n, r, o]
  );
  var l = Ow(e, i[0], i[1]);
  return $w(
    function() {
      s.hasValue = !0, s.value = l;
    },
    [l]
  ), Vw(l), l;
};
gg.exports = mg;
var Bw = gg.exports;
function Uw(e) {
  e();
}
function Kw() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Uw(() => {
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
var Nf = {
  notify() {
  },
  get: () => []
};
function Ww(e, t) {
  let n, r = Nf, o = 0, i = !1;
  function s(w) {
    d();
    const E = r.subscribe(w);
    let h = !1;
    return () => {
      h || (h = !0, E(), c());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    y.onStateChange && y.onStateChange();
  }
  function u() {
    return i;
  }
  function d() {
    o++, n || (n = e.subscribe(a), r = Kw());
  }
  function c() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Nf);
  }
  function f() {
    i || (i = !0, d());
  }
  function p() {
    i && (i = !1, c());
  }
  const y = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return y;
}
var Yw = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xw = /* @__PURE__ */ Yw(), Gw = () => typeof navigator < "u" && navigator.product === "ReactNative", Qw = /* @__PURE__ */ Gw(), Zw = () => Xw || Qw ? b.useLayoutEffect : b.useEffect, qw = /* @__PURE__ */ Zw(), Aa = /* @__PURE__ */ Symbol.for("react-redux-context"), Da = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Jw() {
  if (!b.createContext) return {};
  const e = Da[Aa] ?? (Da[Aa] = /* @__PURE__ */ new Map());
  let t = e.get(b.createContext);
  return t || (t = b.createContext(
    null
  ), e.set(b.createContext, t)), t;
}
var Vn = /* @__PURE__ */ Jw();
function e1(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = b.useMemo(() => {
    const a = Ww(o);
    return {
      store: o,
      subscription: a,
      getServerState: r ? () => r : void 0
    };
  }, [o, r]), s = b.useMemo(() => o.getState(), [o]);
  qw(() => {
    const { subscription: a } = i;
    return a.onStateChange = a.notifyNestedSubs, a.trySubscribe(), s !== o.getState() && a.notifyNestedSubs(), () => {
      a.tryUnsubscribe(), a.onStateChange = void 0;
    };
  }, [i, s]);
  const l = n || Vn;
  return /* @__PURE__ */ b.createElement(l.Provider, { value: i }, t);
}
var t1 = e1;
function Yc(e = Vn) {
  return function() {
    return b.useContext(e);
  };
}
var yg = /* @__PURE__ */ Yc();
function xg(e = Vn) {
  const t = e === Vn ? yg : (
    // @ts-ignore
    Yc(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var n1 = /* @__PURE__ */ xg();
function r1(e = Vn) {
  const t = e === Vn ? n1 : xg(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var vo = /* @__PURE__ */ r1(), o1 = (e, t) => e === t;
function i1(e = Vn) {
  const t = e === Vn ? yg : Yc(e), n = (r, o = {}) => {
    const { equalityFn: i = o1 } = typeof o == "function" ? { equalityFn: o } : o, s = t(), { store: l, subscription: a, getServerState: u } = s;
    b.useRef(!0);
    const d = b.useCallback(
      {
        [r.name](f) {
          return r(f);
        }
      }[r.name],
      [r]
    ), c = Bw.useSyncExternalStoreWithSelector(
      a.addNestedSub,
      l.getState,
      u || l.getState,
      d,
      i
    );
    return b.useDebugValue(c), c;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var an = /* @__PURE__ */ i1();
function Re(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var s1 = typeof Symbol == "function" && Symbol.observable || "@@observable", kf = s1, La = () => Math.random().toString(36).substring(7).split("").join("."), l1 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ La()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ La()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${La()}`
}, Xs = l1;
function Xc(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function vg(e, t, n) {
  if (typeof e != "function")
    throw new Error(Re(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Re(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Re(1));
    return n(vg)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, l = 0, a = !1;
  function u() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((E, h) => {
      s.set(h, E);
    }));
  }
  function d() {
    if (a)
      throw new Error(Re(3));
    return o;
  }
  function c(E) {
    if (typeof E != "function")
      throw new Error(Re(4));
    if (a)
      throw new Error(Re(5));
    let h = !0;
    u();
    const x = l++;
    return s.set(x, E), function() {
      if (h) {
        if (a)
          throw new Error(Re(6));
        h = !1, u(), s.delete(x), i = null;
      }
    };
  }
  function f(E) {
    if (!Xc(E))
      throw new Error(Re(7));
    if (typeof E.type > "u")
      throw new Error(Re(8));
    if (typeof E.type != "string")
      throw new Error(Re(17));
    if (a)
      throw new Error(Re(9));
    try {
      a = !0, o = r(o, E);
    } finally {
      a = !1;
    }
    return (i = s).forEach((x) => {
      x();
    }), E;
  }
  function p(E) {
    if (typeof E != "function")
      throw new Error(Re(10));
    r = E, f({
      type: Xs.REPLACE
    });
  }
  function y() {
    const E = c;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(h) {
        if (typeof h != "object" || h === null)
          throw new Error(Re(11));
        function x() {
          const v = h;
          v.next && v.next(d());
        }
        return x(), {
          unsubscribe: E(x)
        };
      },
      [kf]() {
        return this;
      }
    };
  }
  return f({
    type: Xs.INIT
  }), {
    dispatch: f,
    subscribe: c,
    getState: d,
    replaceReducer: p,
    [kf]: y
  };
}
function a1(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Xs.INIT
    }) > "u")
      throw new Error(Re(12));
    if (typeof n(void 0, {
      type: Xs.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Re(13));
  });
}
function u1(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    a1(n);
  } catch (i) {
    o = i;
  }
  return function(s = {}, l) {
    if (o)
      throw o;
    let a = !1;
    const u = {};
    for (let d = 0; d < r.length; d++) {
      const c = r[d], f = n[c], p = s[c], y = f(p, l);
      if (typeof y > "u")
        throw l && l.type, new Error(Re(14));
      u[c] = y, a = a || y !== p;
    }
    return a = a || r.length !== Object.keys(s).length, a ? u : s;
  };
}
function Gs(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function c1(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(Re(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (a, ...u) => i(a, ...u)
    }, l = e.map((a) => a(s));
    return i = Gs(...l)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function d1(e) {
  return Xc(e) && "type" in e && typeof e.type == "string";
}
var wg = Symbol.for("immer-nothing"), Cf = Symbol.for("immer-draftable"), Ye = Symbol.for("immer-state");
function Pt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var st = Object, Zr = st.getPrototypeOf, Qs = "constructor", Bl = "prototype", Eu = "configurable", Zs = "enumerable", Ms = "writable", ei = "value", dn = (e) => !!e && !!e[Ye];
function Rt(e) {
  var t;
  return e ? Sg(e) || Kl(e) || !!e[Cf] || !!((t = e[Qs]) != null && t[Cf]) || Wl(e) || Yl(e) : !1;
}
var f1 = st[Bl][Qs].toString(), If = /* @__PURE__ */ new WeakMap();
function Sg(e) {
  if (!e || !Gc(e))
    return !1;
  const t = Zr(e);
  if (t === null || t === st[Bl])
    return !0;
  const n = st.hasOwnProperty.call(t, Qs) && t[Qs];
  if (n === Object)
    return !0;
  if (!kr(n))
    return !1;
  let r = If.get(n);
  return r === void 0 && (r = Function.toString.call(n), If.set(n, r)), r === f1;
}
function Ul(e, t, n = !0) {
  Ri(e) === 0 ? (n ? Reflect.ownKeys(e) : st.keys(e)).forEach((o) => {
    t(o, e[o], e);
  }) : e.forEach((r, o) => t(o, r, e));
}
function Ri(e) {
  const t = e[Ye];
  return t ? t.type_ : Kl(e) ? 1 : Wl(e) ? 2 : Yl(e) ? 3 : 0;
}
var Tf = (e, t, n = Ri(e)) => n === 2 ? e.has(t) : st[Bl].hasOwnProperty.call(e, t), _u = (e, t, n = Ri(e)) => (
  // @ts-ignore
  n === 2 ? e.get(t) : e[t]
), qs = (e, t, n, r = Ri(e)) => {
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function h1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Kl = Array.isArray, Wl = (e) => e instanceof Map, Yl = (e) => e instanceof Set, Gc = (e) => typeof e == "object", kr = (e) => typeof e == "function", ja = (e) => typeof e == "boolean";
function p1(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var nn = (e) => e.copy_ || e.base_, Qc = (e) => e.modified_ ? e.copy_ : e.base_;
function bu(e, t) {
  if (Wl(e))
    return new Map(e);
  if (Yl(e))
    return new Set(e);
  if (Kl(e))
    return Array[Bl].slice.call(e);
  const n = Sg(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = st.getOwnPropertyDescriptors(e);
    delete r[Ye];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const s = o[i], l = r[s];
      l[Ms] === !1 && (l[Ms] = !0, l[Eu] = !0), (l.get || l.set) && (r[s] = {
        [Eu]: !0,
        [Ms]: !0,
        // could live with !!desc.set as well here...
        [Zs]: l[Zs],
        [ei]: e[s]
      });
    }
    return st.create(Zr(e), r);
  } else {
    const r = Zr(e);
    if (r !== null && n)
      return { ...e };
    const o = st.create(r);
    return st.assign(o, e);
  }
}
function Zc(e, t = !1) {
  return Xl(e) || dn(e) || !Rt(e) || (Ri(e) > 1 && st.defineProperties(e, {
    set: Ji,
    add: Ji,
    clear: Ji,
    delete: Ji
  }), st.freeze(e), t && Ul(
    e,
    (n, r) => {
      Zc(r, !0);
    },
    !1
  )), e;
}
function g1() {
  Pt(2);
}
var Ji = {
  [ei]: g1
};
function Xl(e) {
  return e === null || !Gc(e) ? !0 : st.isFrozen(e);
}
var Js = "MapSet", Nu = "Patches", Pf = "ArrayMethods", Eg = {};
function ur(e) {
  const t = Eg[e];
  return t || Pt(0, e), t;
}
var Mf = (e) => !!Eg[e], ti, _g = () => ti, m1 = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Mf(Js) ? ur(Js) : void 0,
  arrayMethodsPlugin_: Mf(Pf) ? ur(Pf) : void 0
});
function Af(e, t) {
  t && (e.patchPlugin_ = ur(Nu), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ku(e) {
  Cu(e), e.drafts_.forEach(y1), e.drafts_ = null;
}
function Cu(e) {
  e === ti && (ti = e.parent_);
}
var Df = (e) => ti = m1(ti, e);
function y1(e) {
  const t = e[Ye];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Lf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  if (e !== void 0 && e !== n) {
    n[Ye].modified_ && (ku(t), Pt(4)), Rt(e) && (e = jf(t, e));
    const { patchPlugin_: o } = t;
    o && o.generateReplacementPatches_(
      n[Ye].base_,
      e,
      t
    );
  } else
    e = jf(t, n);
  return x1(t, e, !0), ku(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== wg ? e : void 0;
}
function jf(e, t) {
  if (Xl(t))
    return t;
  const n = t[Ye];
  if (!n)
    return el(t, e.handledSet_, e);
  if (!Gl(n, e))
    return t;
  if (!n.modified_)
    return n.base_;
  if (!n.finalized_) {
    const { callbacks_: r } = n;
    if (r)
      for (; r.length > 0; )
        r.pop()(e);
    kg(n, e);
  }
  return n.copy_;
}
function x1(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Zc(t, n);
}
function bg(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var Gl = (e, t) => e.scope_ === t, v1 = [];
function Ng(e, t, n, r) {
  const o = nn(e), i = e.type_;
  if (r !== void 0 && _u(o, r, i) === t) {
    qs(o, r, n, i);
    return;
  }
  if (!e.draftLocations_) {
    const l = e.draftLocations_ = /* @__PURE__ */ new Map();
    Ul(o, (a, u) => {
      if (dn(u)) {
        const d = l.get(u) || [];
        d.push(a), l.set(u, d);
      }
    });
  }
  const s = e.draftLocations_.get(t) ?? v1;
  for (const l of s)
    qs(o, l, n, i);
}
function w1(e, t, n) {
  e.callbacks_.push(function(o) {
    var l;
    const i = t;
    if (!i || !Gl(i, o))
      return;
    (l = o.mapSetPlugin_) == null || l.fixSetContents(i);
    const s = Qc(i);
    Ng(e, i.draft_ ?? i, s, n), kg(i, o);
  });
}
function kg(e, t) {
  var r;
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (((r = e.assigned_) == null ? void 0 : r.size) ?? 0) > 0)) {
    const { patchPlugin_: o } = t;
    if (o) {
      const i = o.getPath(e);
      i && o.generatePatches_(e, i, t);
    }
    bg(e);
  }
}
function S1(e, t, n) {
  const { scope_: r } = e;
  if (dn(n)) {
    const o = n[Ye];
    Gl(o, r) && o.callbacks_.push(function() {
      As(e);
      const s = Qc(o);
      Ng(e, n, s, t);
    });
  } else Rt(n) && e.callbacks_.push(function() {
    const i = nn(e);
    e.type_ === 3 ? i.has(n) && el(n, r.handledSet_, r) : _u(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && el(
      _u(e.copy_, t, e.type_),
      r.handledSet_,
      r
    );
  });
}
function el(e, t, n) {
  return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || dn(e) || t.has(e) || !Rt(e) || Xl(e) || (t.add(e), Ul(e, (r, o) => {
    if (dn(o)) {
      const i = o[Ye];
      if (Gl(i, n)) {
        const s = Qc(i);
        qs(e, r, s, e.type_), bg(i);
      }
    } else Rt(o) && el(o, t, n);
  })), e;
}
function E1(e, t) {
  const n = Kl(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : _g(),
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
  let o = r, i = tl;
  n && (o = [r], i = ni);
  const { revoke: s, proxy: l } = Proxy.revocable(o, i);
  return r.draft_ = l, r.revoke_ = s, [l, r];
}
var tl = {
  get(e, t) {
    if (t === Ye)
      return e;
    let n = e.scope_.arrayMethodsPlugin_;
    const r = e.type_ === 1 && typeof t == "string";
    if (r && n != null && n.isArrayOperationMethod(t))
      return n.createMethodInterceptor(e, t);
    const o = nn(e);
    if (!Tf(o, t, e.type_))
      return _1(e, o, t);
    const i = o[t];
    if (e.finalized_ || !Rt(i) || r && e.operationMethod && (n != null && n.isMutatingArrayMethod(
      e.operationMethod
    )) && p1(t))
      return i;
    if (i === Ra(e.base_, t)) {
      As(e);
      const s = e.type_ === 1 ? +t : t, l = Tu(e.scope_, i, e, s);
      return e.copy_[s] = l;
    }
    return i;
  },
  has(e, t) {
    return t in nn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(nn(e));
  },
  set(e, t, n) {
    const r = Cg(nn(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Ra(nn(e), t), i = o == null ? void 0 : o[Ye];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
      if (h1(n, o) && (n !== void 0 || Tf(e.base_, t, e.type_)))
        return !0;
      As(e), Iu(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), S1(e, t, n)), !0;
  },
  deleteProperty(e, t) {
    return As(e), Ra(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Iu(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = nn(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      [Ms]: !0,
      [Eu]: e.type_ !== 1 || t !== "length",
      [Zs]: r[Zs],
      [ei]: n[t]
    };
  },
  defineProperty() {
    Pt(11);
  },
  getPrototypeOf(e) {
    return Zr(e.base_);
  },
  setPrototypeOf() {
    Pt(12);
  }
}, ni = {};
for (let e in tl) {
  let t = tl[e];
  ni[e] = function() {
    const n = arguments;
    return n[0] = n[0][0], t.apply(this, n);
  };
}
ni.deleteProperty = function(e, t) {
  return ni.set.call(this, e, t, void 0);
};
ni.set = function(e, t, n) {
  return tl.set.call(this, e[0], t, n, e[0]);
};
function Ra(e, t) {
  const n = e[Ye];
  return (n ? nn(n) : e)[t];
}
function _1(e, t, n) {
  var o;
  const r = Cg(t, n);
  return r ? ei in r ? r[ei] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Cg(e, t) {
  if (!(t in e))
    return;
  let n = Zr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Zr(n);
  }
}
function Iu(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Iu(e.parent_));
}
function As(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = bu(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var b1 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (t, n, r) => {
      if (kr(t) && !kr(n)) {
        const i = n;
        n = t;
        const s = this;
        return function(a = i, ...u) {
          return s.produce(a, (d) => n.call(this, d, ...u));
        };
      }
      kr(n) || Pt(6), r !== void 0 && !kr(r) && Pt(7);
      let o;
      if (Rt(t)) {
        const i = Df(this), s = Tu(i, t, void 0);
        let l = !0;
        try {
          o = n(s), l = !1;
        } finally {
          l ? ku(i) : Cu(i);
        }
        return Af(i, r), Lf(o, i);
      } else if (!t || !Gc(t)) {
        if (o = n(t), o === void 0 && (o = t), o === wg && (o = void 0), this.autoFreeze_ && Zc(o, !0), r) {
          const i = [], s = [];
          ur(Nu).generateReplacementPatches_(t, o, {
            patches_: i,
            inversePatches_: s
          }), r(i, s);
        }
        return o;
      } else
        Pt(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (kr(t))
        return (s, ...l) => this.produceWithPatches(s, (a) => t(a, ...l));
      let r, o;
      return [this.produce(t, n, (s, l) => {
        r = s, o = l;
      }), r, o];
    }, ja(e == null ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), ja(e == null ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), ja(e == null ? void 0 : e.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Rt(e) || Pt(8), dn(e) && (e = N1(e));
    const t = Df(this), n = Tu(t, e, void 0);
    return n[Ye].isManual_ = !0, Cu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ye];
    (!n || !n.isManual_) && Pt(9);
    const { scope_: r } = n;
    return Af(r, t), Lf(void 0, r);
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
    const r = ur(Nu).applyPatches_;
    return dn(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Tu(e, t, n, r) {
  const [o, i] = Wl(t) ? ur(Js).proxyMap_(t, n) : Yl(t) ? ur(Js).proxySet_(t, n) : E1(t, n);
  return ((n == null ? void 0 : n.scope_) ?? _g()).drafts_.push(o), i.callbacks_ = (n == null ? void 0 : n.callbacks_) ?? [], i.key_ = r, n && r !== void 0 ? w1(n, i, r) : i.callbacks_.push(function(a) {
    var d;
    (d = a.mapSetPlugin_) == null || d.fixSetContents(i);
    const { patchPlugin_: u } = a;
    i.modified_ && u && u.generatePatches_(i, [], a);
  }), o;
}
function N1(e) {
  return dn(e) || Pt(10, e), Ig(e);
}
function Ig(e) {
  if (!Rt(e) || Xl(e))
    return e;
  const t = e[Ye];
  let n, r = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = bu(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
  } else
    n = bu(e, !0);
  return Ul(
    n,
    (o, i) => {
      qs(n, o, Ig(i));
    },
    r
  ), t && (t.finalized_ = !1), n;
}
var k1 = new b1(), Tg = k1.produce;
function Pg(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var C1 = Pg(), I1 = Pg, T1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Gs : Gs.apply(null, arguments);
};
function Rf(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(un(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => d1(r) && r.type === e, n;
}
var Mg = class Ro extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ro.prototype);
  }
  static get [Symbol.species]() {
    return Ro;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ro(...t[0].concat(this)) : new Ro(...t.concat(this));
  }
};
function Ff(e) {
  return Rt(e) ? Tg(e, () => {
  }) : e;
}
function es(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function P1(e) {
  return typeof e == "boolean";
}
var M1 = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new Mg();
  return n && (P1(n) ? s.push(C1) : s.push(I1(n.extraArgument))), s;
}, A1 = "RTK_autoBatch", Of = (e) => (t) => {
  setTimeout(t, e);
}, D1 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const l = /* @__PURE__ */ new Set(), a = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Of(10)
  ) : e.type === "callback" ? e.queueNotification : Of(e.timeout), u = () => {
    s = !1, i && (i = !1, l.forEach((d) => d()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(d) {
      const c = () => o && d(), f = r.subscribe(c);
      return l.add(d), () => {
        f(), l.delete(d);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(d) {
      var c;
      try {
        return o = !((c = d == null ? void 0 : d.meta) != null && c[A1]), i = !o, i && (s || (s = !0, a(u))), r.dispatch(d);
      } finally {
        o = !0;
      }
    }
  });
}, L1 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Mg(e);
  return r && o.push(D1(typeof r == "object" ? r : void 0)), o;
};
function j1(e) {
  const t = M1(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let l;
  if (typeof n == "function")
    l = n;
  else if (Xc(n))
    l = u1(n);
  else
    throw new Error(un(1));
  let a;
  typeof r == "function" ? a = r(t) : a = t();
  let u = Gs;
  o && (u = T1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof o == "object" && o
  }));
  const d = c1(...a), c = L1(d);
  let f = typeof s == "function" ? s(c) : c();
  const p = u(...f);
  return vg(l, i, p);
}
function Ag(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      const l = typeof i == "string" ? i : i.type;
      if (!l)
        throw new Error(un(28));
      if (l in t)
        throw new Error(un(29));
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
function R1(e) {
  return typeof e == "function";
}
function F1(e, t) {
  let [n, r, o] = Ag(t), i;
  if (R1(e))
    i = () => Ff(e());
  else {
    const l = Ff(e);
    i = () => l;
  }
  function s(l = i(), a) {
    let u = [n[a.type], ...r.filter(({
      matcher: d
    }) => d(a)).map(({
      reducer: d
    }) => d)];
    return u.filter((d) => !!d).length === 0 && (u = [o]), u.reduce((d, c) => {
      if (c)
        if (dn(d)) {
          const p = c(d, a);
          return p === void 0 ? d : p;
        } else {
          if (Rt(d))
            return Tg(d, (f) => c(f, a));
          {
            const f = c(d, a);
            if (f === void 0) {
              if (d === null)
                return d;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return f;
          }
        }
      return d;
    }, l);
  }
  return s.getInitialState = i, s;
}
var O1 = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function z1(e, t) {
  return `${e}/${t}`;
}
function $1({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[O1];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(un(11));
    const l = (typeof o.reducers == "function" ? o.reducers(V1()) : o.reducers) || {}, a = Object.keys(l), u = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, d = {
      addCase(v, S) {
        const _ = typeof v == "string" ? v : v.type;
        if (!_)
          throw new Error(un(12));
        if (_ in u.sliceCaseReducersByType)
          throw new Error(un(13));
        return u.sliceCaseReducersByType[_] = S, d;
      },
      addMatcher(v, S) {
        return u.sliceMatchers.push({
          matcher: v,
          reducer: S
        }), d;
      },
      exposeAction(v, S) {
        return u.actionCreators[v] = S, d;
      },
      exposeCaseReducer(v, S) {
        return u.sliceCaseReducersByName[v] = S, d;
      }
    };
    a.forEach((v) => {
      const S = l[v], _ = {
        reducerName: v,
        type: z1(i, v),
        createNotation: typeof o.reducers == "function"
      };
      U1(S) ? W1(_, S, d, t) : B1(_, S, d);
    });
    function c() {
      const [v = {}, S = [], _ = void 0] = typeof o.extraReducers == "function" ? Ag(o.extraReducers) : [o.extraReducers], N = {
        ...v,
        ...u.sliceCaseReducersByType
      };
      return F1(o.initialState, (k) => {
        for (let T in N)
          k.addCase(T, N[T]);
        for (let T of u.sliceMatchers)
          k.addMatcher(T.matcher, T.reducer);
        for (let T of S)
          k.addMatcher(T.matcher, T.reducer);
        _ && k.addDefaultCase(_);
      });
    }
    const f = (v) => v, p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new WeakMap();
    let w;
    function E(v, S) {
      return w || (w = c()), w(v, S);
    }
    function h() {
      return w || (w = c()), w.getInitialState();
    }
    function x(v, S = !1) {
      function _(k) {
        let T = k[v];
        return typeof T > "u" && S && (T = es(y, _, h)), T;
      }
      function N(k = f) {
        const T = es(p, S, () => /* @__PURE__ */ new WeakMap());
        return es(T, k, () => {
          const D = {};
          for (const [A, M] of Object.entries(o.selectors ?? {}))
            D[A] = H1(M, k, () => es(y, k, h), S);
          return D;
        });
      }
      return {
        reducerPath: v,
        getSelectors: N,
        get selectors() {
          return N(_);
        },
        selectSlice: _
      };
    }
    const g = {
      name: i,
      reducer: E,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: h,
      ...x(s),
      injectInto(v, {
        reducerPath: S,
        ..._
      } = {}) {
        const N = S ?? s;
        return v.inject({
          reducerPath: N,
          reducer: E
        }, _), {
          ...g,
          ...x(N, !0)
        };
      }
    };
    return g;
  };
}
function H1(e, t, n, r) {
  function o(i, ...s) {
    let l = t(i);
    return typeof l > "u" && r && (l = n()), e(l, ...s);
  }
  return o.unwrapped = e, o;
}
var Ql = /* @__PURE__ */ $1();
function V1() {
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
function B1({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !K1(r))
      throw new Error(un(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? Rf(e, s) : Rf(e));
}
function U1(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function K1(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function W1({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(un(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: l,
    rejected: a,
    settled: u,
    options: d
  } = n, c = o(e, i, d);
  r.exposeAction(t, c), s && r.addCase(c.fulfilled, s), l && r.addCase(c.pending, l), a && r.addCase(c.rejected, a), u && r.addMatcher(c.settled, u), r.exposeCaseReducer(t, {
    fulfilled: s || ts,
    pending: l || ts,
    rejected: a || ts,
    settled: u || ts
  });
}
function ts() {
}
function un(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const ht = {
  UNDO: "@@redux-undo/UNDO",
  REDO: "@@redux-undo/REDO",
  JUMP_TO_FUTURE: "@@redux-undo/JUMP_TO_FUTURE",
  JUMP_TO_PAST: "@@redux-undo/JUMP_TO_PAST",
  JUMP: "@@redux-undo/JUMP",
  CLEAR_HISTORY: "@@redux-undo/CLEAR_HISTORY"
}, nl = {
  undo() {
    return { type: ht.UNDO };
  },
  redo() {
    return { type: ht.REDO };
  },
  jumpToFuture(e) {
    return { type: ht.JUMP_TO_FUTURE, index: e };
  },
  jumpToPast(e) {
    return { type: ht.JUMP_TO_PAST, index: e };
  },
  jump(e) {
    return { type: ht.JUMP, index: e };
  },
  clearHistory() {
    return { type: ht.CLEAR_HISTORY };
  }
};
function Pu(e, t = []) {
  return Array.isArray(e) ? e : typeof e == "string" ? [e] : t;
}
function Y1(e) {
  return typeof e.present < "u" && typeof e.future < "u" && typeof e.past < "u" && Array.isArray(e.future) && Array.isArray(e.past);
}
function X1(e) {
  const t = Pu(e);
  return (n) => t.indexOf(n.type) < 0;
}
function rr(e, t, n, r = null) {
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
let Zl, pt;
const Mu = {
  prevState: "#9E9E9E",
  action: "#03A9F4",
  nextState: "#4CAF50"
};
function G1() {
  pt = {
    header: [],
    prev: [],
    action: [],
    next: [],
    msgs: []
  };
}
function Q1() {
  const { header: e, prev: t, next: n, action: r, msgs: o } = pt;
  console.group ? (console.groupCollapsed(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...o), console.groupEnd()) : (console.log(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...o));
}
function Au(e, t, n) {
  return [
    `%c${e}`,
    `color: ${t}; font-weight: bold`,
    n
  ];
}
function Z1(e, t) {
  G1(), Zl && (console.group ? (pt.header = ["%credux-undo", "font-style: italic", "action", e.type], pt.action = Au("action", Mu.action, e), pt.prev = Au("prev history", Mu.prevState, t)) : (pt.header = ["redux-undo action", e.type], pt.action = ["action", e], pt.prev = ["prev history", t]));
}
function bt(e) {
  Zl && (console.group ? pt.next = Au("next history", Mu.nextState, e) : pt.next = ["next history", e], Q1());
}
function Ve(...e) {
  Zl && (pt.msgs = pt.msgs.concat([...e, `
`]));
}
function q1(e) {
  Zl = e;
}
function Fa(e, t) {
  const n = rr([], e, []);
  return t && (n._latestUnfiltered = null), n;
}
function J1(e, t, n, r) {
  const o = e.past.length + 1;
  Ve("inserting", t), Ve("new free: ", n - o);
  const { past: i, _latestUnfiltered: s } = e, l = n && n <= o, a = i.slice(l ? 1 : 0), u = s != null ? [
    ...a,
    s
  ] : a;
  return rr(u, t, [], r);
}
function Dg(e, t) {
  if (t < 0 || t >= e.future.length)
    return e;
  const { past: n, future: r, _latestUnfiltered: o } = e, i = [...n, o, ...r.slice(0, t)], s = r[t], l = r.slice(t + 1);
  return rr(i, s, l);
}
function Lg(e, t) {
  if (t < 0 || t >= e.past.length)
    return e;
  const { past: n, future: r, _latestUnfiltered: o } = e, i = n.slice(0, t), s = [...n.slice(t + 1), o, ...r], l = n[t];
  return rr(i, l, s);
}
function Oa(e, t) {
  return t > 0 ? Dg(e, t - 1) : t < 0 ? Lg(e, e.past.length + t) : e;
}
function eS(e, t) {
  return t.indexOf(e) > -1 ? e : !e;
}
function tS(e, t = {}) {
  q1(t.debug);
  const n = {
    limit: void 0,
    filter: () => !0,
    groupBy: () => null,
    undoType: ht.UNDO,
    redoType: ht.REDO,
    jumpToPastType: ht.JUMP_TO_PAST,
    jumpToFutureType: ht.JUMP_TO_FUTURE,
    jumpType: ht.JUMP,
    neverSkipReducer: !1,
    ignoreInitialState: !1,
    syncFilter: !1,
    ...t,
    initTypes: Pu(t.initTypes, ["@@redux-undo/INIT"]),
    clearHistoryType: Pu(
      t.clearHistoryType,
      [ht.CLEAR_HISTORY]
    )
  }, r = n.neverSkipReducer ? (i, s, ...l) => ({
    ...i,
    present: e(i.present, s, ...l)
  }) : (i) => i;
  let o;
  return (i = o, s = {}, ...l) => {
    Z1(s, i);
    let a = i;
    if (!o)
      if (Ve("history is uninitialized"), i === void 0) {
        const d = e(i, { type: "@@redux-undo/CREATE_HISTORY" }, ...l);
        return a = Fa(
          d,
          n.ignoreInitialState
        ), Ve("do not set initialState on probe actions"), bt(a), a;
      } else
        Y1(i) ? (a = o = n.ignoreInitialState ? i : rr(
          i.past,
          i.present,
          i.future
        ), Ve(
          "initialHistory initialized: initialState is a history",
          o
        )) : (a = o = Fa(
          i,
          n.ignoreInitialState
        ), Ve(
          "initialHistory initialized: initialState is not a history",
          o
        ));
    let u;
    switch (s.type) {
      case void 0:
        return a;
      case n.undoType:
        return u = Oa(a, -1), Ve("perform undo"), bt(u), r(u, s, ...l);
      case n.redoType:
        return u = Oa(a, 1), Ve("perform redo"), bt(u), r(u, s, ...l);
      case n.jumpToPastType:
        return u = Lg(a, s.index), Ve(`perform jumpToPast to ${s.index}`), bt(u), r(u, s, ...l);
      case n.jumpToFutureType:
        return u = Dg(a, s.index), Ve(`perform jumpToFuture to ${s.index}`), bt(u), r(u, s, ...l);
      case n.jumpType:
        return u = Oa(a, s.index), Ve(`perform jump to ${s.index}`), bt(u), r(u, s, ...l);
      case eS(s.type, n.clearHistoryType):
        return u = Fa(a.present, n.ignoreInitialState), Ve("perform clearHistory"), bt(u), r(u, s, ...l);
      default:
        if (u = e(
          a.present,
          s,
          ...l
        ), n.initTypes.some((c) => c === s.type))
          return Ve("reset history due to init action"), bt(o), o;
        if (a._latestUnfiltered === u)
          return a;
        if (typeof n.filter == "function" && !n.filter(
          s,
          u,
          a
        )) {
          const c = rr(
            a.past,
            u,
            a.future,
            a.group
          );
          return n.syncFilter || (c._latestUnfiltered = a._latestUnfiltered), Ve("filter ignored action, not storing it in past"), bt(c), c;
        }
        const d = n.groupBy(s, u, a);
        if (d != null && d === a.group) {
          const c = rr(
            a.past,
            u,
            a.future,
            a.group
          );
          return Ve("groupBy grouped the action with the previous action"), bt(c), c;
        }
        return a = J1(a, u, n.limit, d), Ve("inserted new state into history"), bt(a), a;
    }
  };
}
function Te(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Te(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var nS = { value: () => {
} };
function ql() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ds(n);
}
function Ds(e) {
  this._ = e;
}
function rS(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ds.prototype = ql.prototype = {
  constructor: Ds,
  on: function(e, t) {
    var n = this._, r = rS(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = oS(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = zf(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = zf(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ds(e);
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
function oS(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function zf(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = nS, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Du = "http://www.w3.org/1999/xhtml";
const $f = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Du,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Jl(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $f.hasOwnProperty(t) ? { space: $f[t], local: e } : e;
}
function iS(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Du && t.documentElement.namespaceURI === Du ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function sS(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function jg(e) {
  var t = Jl(e);
  return (t.local ? sS : iS)(t);
}
function lS() {
}
function qc(e) {
  return e == null ? lS : function() {
    return this.querySelector(e);
  };
}
function aS(e) {
  typeof e != "function" && (e = qc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = new Array(s), a, u, d = 0; d < s; ++d)
      (a = i[d]) && (u = e.call(a, a.__data__, d, i)) && ("__data__" in a && (u.__data__ = a.__data__), l[d] = u);
  return new ut(r, this._parents);
}
function uS(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function cS() {
  return [];
}
function Rg(e) {
  return e == null ? cS : function() {
    return this.querySelectorAll(e);
  };
}
function dS(e) {
  return function() {
    return uS(e.apply(this, arguments));
  };
}
function fS(e) {
  typeof e == "function" ? e = dS(e) : e = Rg(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], l = s.length, a, u = 0; u < l; ++u)
      (a = s[u]) && (r.push(e.call(a, a.__data__, u, s)), o.push(a));
  return new ut(r, o);
}
function Fg(e) {
  return function() {
    return this.matches(e);
  };
}
function Og(e) {
  return function(t) {
    return t.matches(e);
  };
}
var hS = Array.prototype.find;
function pS(e) {
  return function() {
    return hS.call(this.children, e);
  };
}
function gS() {
  return this.firstElementChild;
}
function mS(e) {
  return this.select(e == null ? gS : pS(typeof e == "function" ? e : Og(e)));
}
var yS = Array.prototype.filter;
function xS() {
  return Array.from(this.children);
}
function vS(e) {
  return function() {
    return yS.call(this.children, e);
  };
}
function wS(e) {
  return this.selectAll(e == null ? xS : vS(typeof e == "function" ? e : Og(e)));
}
function SS(e) {
  typeof e != "function" && (e = Fg(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], a, u = 0; u < s; ++u)
      (a = i[u]) && e.call(a, a.__data__, u, i) && l.push(a);
  return new ut(r, this._parents);
}
function zg(e) {
  return new Array(e.length);
}
function ES() {
  return new ut(this._enter || this._groups.map(zg), this._parents);
}
function rl(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
rl.prototype = {
  constructor: rl,
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
function _S(e) {
  return function() {
    return e;
  };
}
function bS(e, t, n, r, o, i) {
  for (var s = 0, l, a = t.length, u = i.length; s < u; ++s)
    (l = t[s]) ? (l.__data__ = i[s], r[s] = l) : n[s] = new rl(e, i[s]);
  for (; s < a; ++s)
    (l = t[s]) && (o[s] = l);
}
function NS(e, t, n, r, o, i, s) {
  var l, a, u = /* @__PURE__ */ new Map(), d = t.length, c = i.length, f = new Array(d), p;
  for (l = 0; l < d; ++l)
    (a = t[l]) && (f[l] = p = s.call(a, a.__data__, l, t) + "", u.has(p) ? o[l] = a : u.set(p, a));
  for (l = 0; l < c; ++l)
    p = s.call(e, i[l], l, i) + "", (a = u.get(p)) ? (r[l] = a, a.__data__ = i[l], u.delete(p)) : n[l] = new rl(e, i[l]);
  for (l = 0; l < d; ++l)
    (a = t[l]) && u.get(f[l]) === a && (o[l] = a);
}
function kS(e) {
  return e.__data__;
}
function CS(e, t) {
  if (!arguments.length) return Array.from(this, kS);
  var n = t ? NS : bS, r = this._parents, o = this._groups;
  typeof e != "function" && (e = _S(e));
  for (var i = o.length, s = new Array(i), l = new Array(i), a = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], c = o[u], f = c.length, p = IS(e.call(d, d && d.__data__, u, r)), y = p.length, w = l[u] = new Array(y), E = s[u] = new Array(y), h = a[u] = new Array(f);
    n(d, c, w, E, h, p, t);
    for (var x = 0, g = 0, v, S; x < y; ++x)
      if (v = w[x]) {
        for (x >= g && (g = x + 1); !(S = E[g]) && ++g < y; ) ;
        v._next = S || null;
      }
  }
  return s = new ut(s, r), s._enter = l, s._exit = a, s;
}
function IS(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function TS() {
  return new ut(this._exit || this._groups.map(zg), this._parents);
}
function PS(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function MS(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), l = new Array(o), a = 0; a < s; ++a)
    for (var u = n[a], d = r[a], c = u.length, f = l[a] = new Array(c), p, y = 0; y < c; ++y)
      (p = u[y] || d[y]) && (f[y] = p);
  for (; a < o; ++a)
    l[a] = n[a];
  return new ut(l, this._parents);
}
function AS() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function DS(e) {
  e || (e = LS);
  function t(c, f) {
    return c && f ? e(c.__data__, f.__data__) : !c - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], l = s.length, a = o[i] = new Array(l), u, d = 0; d < l; ++d)
      (u = s[d]) && (a[d] = u);
    a.sort(t);
  }
  return new ut(o, this._parents).order();
}
function LS(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function jS() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function RS() {
  return Array.from(this);
}
function FS() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function OS() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function zS() {
  return !this.node();
}
function $S(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, l; i < s; ++i)
      (l = o[i]) && e.call(l, l.__data__, i, o);
  return this;
}
function HS(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function VS(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function BS(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function US(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function KS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function WS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function YS(e, t) {
  var n = Jl(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? VS : HS : typeof t == "function" ? n.local ? WS : KS : n.local ? US : BS)(n, t));
}
function $g(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function XS(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function GS(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function QS(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function ZS(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? XS : typeof t == "function" ? QS : GS)(e, t, n ?? "")) : qr(this.node(), e);
}
function qr(e, t) {
  return e.style.getPropertyValue(t) || $g(e).getComputedStyle(e, null).getPropertyValue(t);
}
function qS(e) {
  return function() {
    delete this[e];
  };
}
function JS(e, t) {
  return function() {
    this[e] = t;
  };
}
function eE(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function tE(e, t) {
  return arguments.length > 1 ? this.each((t == null ? qS : typeof t == "function" ? eE : JS)(e, t)) : this.node()[e];
}
function Hg(e) {
  return e.trim().split(/^|\s+/);
}
function Jc(e) {
  return e.classList || new Vg(e);
}
function Vg(e) {
  this._node = e, this._names = Hg(e.getAttribute("class") || "");
}
Vg.prototype = {
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
function Bg(e, t) {
  for (var n = Jc(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ug(e, t) {
  for (var n = Jc(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function nE(e) {
  return function() {
    Bg(this, e);
  };
}
function rE(e) {
  return function() {
    Ug(this, e);
  };
}
function oE(e, t) {
  return function() {
    (t.apply(this, arguments) ? Bg : Ug)(this, e);
  };
}
function iE(e, t) {
  var n = Hg(e + "");
  if (arguments.length < 2) {
    for (var r = Jc(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? oE : t ? nE : rE)(n, t));
}
function sE() {
  this.textContent = "";
}
function lE(e) {
  return function() {
    this.textContent = e;
  };
}
function aE(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function uE(e) {
  return arguments.length ? this.each(e == null ? sE : (typeof e == "function" ? aE : lE)(e)) : this.node().textContent;
}
function cE() {
  this.innerHTML = "";
}
function dE(e) {
  return function() {
    this.innerHTML = e;
  };
}
function fE(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function hE(e) {
  return arguments.length ? this.each(e == null ? cE : (typeof e == "function" ? fE : dE)(e)) : this.node().innerHTML;
}
function pE() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function gE() {
  return this.each(pE);
}
function mE() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function yE() {
  return this.each(mE);
}
function xE(e) {
  var t = typeof e == "function" ? e : jg(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function vE() {
  return null;
}
function wE(e, t) {
  var n = typeof e == "function" ? e : jg(e), r = t == null ? vE : typeof t == "function" ? t : qc(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function SE() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function EE() {
  return this.each(SE);
}
function _E() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function bE() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function NE(e) {
  return this.select(e ? bE : _E);
}
function kE(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function CE(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function IE(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function TE(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function PE(e, t, n) {
  return function() {
    var r = this.__on, o, i = CE(t);
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
function ME(e, t, n) {
  var r = IE(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var a = 0, u = l.length, d; a < u; ++a)
        for (o = 0, d = l[a]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (l = t ? PE : TE, o = 0; o < i; ++o) this.each(l(r[o], t, n));
  return this;
}
function Kg(e, t, n) {
  var r = $g(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function AE(e, t) {
  return function() {
    return Kg(this, e, t);
  };
}
function DE(e, t) {
  return function() {
    return Kg(this, e, t.apply(this, arguments));
  };
}
function LE(e, t) {
  return this.each((typeof t == "function" ? DE : AE)(e, t));
}
function* jE() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Wg = [null];
function ut(e, t) {
  this._groups = e, this._parents = t;
}
function Fi() {
  return new ut([[document.documentElement]], Wg);
}
function RE() {
  return this;
}
ut.prototype = Fi.prototype = {
  constructor: ut,
  select: aS,
  selectAll: fS,
  selectChild: mS,
  selectChildren: wS,
  filter: SS,
  data: CS,
  enter: ES,
  exit: TS,
  join: PS,
  merge: MS,
  selection: RE,
  order: AS,
  sort: DS,
  call: jS,
  nodes: RS,
  node: FS,
  size: OS,
  empty: zS,
  each: $S,
  attr: YS,
  style: ZS,
  property: tE,
  classed: iE,
  text: uE,
  html: hE,
  raise: gE,
  lower: yE,
  append: xE,
  insert: wE,
  remove: EE,
  clone: NE,
  datum: kE,
  on: ME,
  dispatch: LE,
  [Symbol.iterator]: jE
};
function it(e) {
  return typeof e == "string" ? new ut([[document.querySelector(e)]], [document.documentElement]) : new ut([[e]], Wg);
}
function FE(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Ct(e, t) {
  if (e = FE(e), t === void 0 && (t = e.currentTarget), t) {
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
const OE = { passive: !1 }, ri = { capture: !0, passive: !1 };
function za(e) {
  e.stopImmediatePropagation();
}
function Vr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Yg(e) {
  var t = e.document.documentElement, n = it(e).on("dragstart.drag", Vr, ri);
  "onselectstart" in t ? n.on("selectstart.drag", Vr, ri) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Xg(e, t) {
  var n = e.document.documentElement, r = it(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Vr, ri), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ns = (e) => () => e;
function Lu(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: l,
  dx: a,
  dy: u,
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
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Lu.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function zE(e) {
  return !e.ctrlKey && !e.button;
}
function $E() {
  return this.parentNode;
}
function HE(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function VE() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Gg() {
  var e = zE, t = $E, n = HE, r = VE, o = {}, i = ql("start", "drag", "end"), s = 0, l, a, u, d, c = 0;
  function f(v) {
    v.on("mousedown.drag", p).filter(r).on("touchstart.drag", E).on("touchmove.drag", h, OE).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(v, S) {
    if (!(d || !e.call(this, v, S))) {
      var _ = g(this, t.call(this, v, S), v, S, "mouse");
      _ && (it(v.view).on("mousemove.drag", y, ri).on("mouseup.drag", w, ri), Yg(v.view), za(v), u = !1, l = v.clientX, a = v.clientY, _("start", v));
    }
  }
  function y(v) {
    if (Vr(v), !u) {
      var S = v.clientX - l, _ = v.clientY - a;
      u = S * S + _ * _ > c;
    }
    o.mouse("drag", v);
  }
  function w(v) {
    it(v.view).on("mousemove.drag mouseup.drag", null), Xg(v.view, u), Vr(v), o.mouse("end", v);
  }
  function E(v, S) {
    if (e.call(this, v, S)) {
      var _ = v.changedTouches, N = t.call(this, v, S), k = _.length, T, D;
      for (T = 0; T < k; ++T)
        (D = g(this, N, v, S, _[T].identifier, _[T])) && (za(v), D("start", v, _[T]));
    }
  }
  function h(v) {
    var S = v.changedTouches, _ = S.length, N, k;
    for (N = 0; N < _; ++N)
      (k = o[S[N].identifier]) && (Vr(v), k("drag", v, S[N]));
  }
  function x(v) {
    var S = v.changedTouches, _ = S.length, N, k;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), N = 0; N < _; ++N)
      (k = o[S[N].identifier]) && (za(v), k("end", v, S[N]));
  }
  function g(v, S, _, N, k, T) {
    var D = i.copy(), A = Ct(T || _, S), M, $, I;
    if ((I = n.call(v, new Lu("beforestart", {
      sourceEvent: _,
      target: f,
      identifier: k,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), N)) != null)
      return M = I.x - A[0] || 0, $ = I.y - A[1] || 0, function j(L, F, C) {
        var P = A, R;
        switch (L) {
          case "start":
            o[k] = j, R = s++;
            break;
          case "end":
            delete o[k], --s;
          case "drag":
            A = Ct(C || F, S), R = s;
            break;
        }
        D.call(
          L,
          v,
          new Lu(L, {
            sourceEvent: F,
            subject: I,
            target: f,
            identifier: k,
            active: R,
            x: A[0] + M,
            y: A[1] + $,
            dx: A[0] - P[0],
            dy: A[1] - P[1],
            dispatch: D
          }),
          N
        );
      };
  }
  return f.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : ns(!!v), f) : e;
  }, f.container = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : ns(v), f) : t;
  }, f.subject = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : ns(v), f) : n;
  }, f.touchable = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : ns(!!v), f) : r;
  }, f.on = function() {
    var v = i.on.apply(i, arguments);
    return v === i ? f : v;
  }, f.clickDistance = function(v) {
    return arguments.length ? (c = (v = +v) * v, f) : Math.sqrt(c);
  }, f;
}
function ed(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Qg(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Oi() {
}
var oi = 0.7, ol = 1 / oi, Br = "\\s*([+-]?\\d+)\\s*", ii = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Kt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", BE = /^#([0-9a-f]{3,8})$/, UE = new RegExp(`^rgb\\(${Br},${Br},${Br}\\)$`), KE = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`), WE = new RegExp(`^rgba\\(${Br},${Br},${Br},${ii}\\)$`), YE = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${ii}\\)$`), XE = new RegExp(`^hsl\\(${ii},${Kt},${Kt}\\)$`), GE = new RegExp(`^hsla\\(${ii},${Kt},${Kt},${ii}\\)$`), Hf = {
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
ed(Oi, cr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Vf,
  // Deprecated! Use color.formatHex.
  formatHex: Vf,
  formatHex8: QE,
  formatHsl: ZE,
  formatRgb: Bf,
  toString: Bf
});
function Vf() {
  return this.rgb().formatHex();
}
function QE() {
  return this.rgb().formatHex8();
}
function ZE() {
  return Zg(this).formatHsl();
}
function Bf() {
  return this.rgb().formatRgb();
}
function cr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = BE.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Uf(t) : n === 3 ? new Je(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? rs(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? rs(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = UE.exec(e)) ? new Je(t[1], t[2], t[3], 1) : (t = KE.exec(e)) ? new Je(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = WE.exec(e)) ? rs(t[1], t[2], t[3], t[4]) : (t = YE.exec(e)) ? rs(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = XE.exec(e)) ? Yf(t[1], t[2] / 100, t[3] / 100, 1) : (t = GE.exec(e)) ? Yf(t[1], t[2] / 100, t[3] / 100, t[4]) : Hf.hasOwnProperty(e) ? Uf(Hf[e]) : e === "transparent" ? new Je(NaN, NaN, NaN, 0) : null;
}
function Uf(e) {
  return new Je(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function rs(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Je(e, t, n, r);
}
function qE(e) {
  return e instanceof Oi || (e = cr(e)), e ? (e = e.rgb(), new Je(e.r, e.g, e.b, e.opacity)) : new Je();
}
function ju(e, t, n, r) {
  return arguments.length === 1 ? qE(e) : new Je(e, t, n, r ?? 1);
}
function Je(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ed(Je, ju, Qg(Oi, {
  brighter(e) {
    return e = e == null ? ol : Math.pow(ol, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oi : Math.pow(oi, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Je(or(this.r), or(this.g), or(this.b), il(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Kf,
  // Deprecated! Use color.formatHex.
  formatHex: Kf,
  formatHex8: JE,
  formatRgb: Wf,
  toString: Wf
}));
function Kf() {
  return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}`;
}
function JE() {
  return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}${Jn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wf() {
  const e = il(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${or(this.r)}, ${or(this.g)}, ${or(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function il(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function or(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Jn(e) {
  return e = or(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Yf(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Mt(e, t, n, r);
}
function Zg(e) {
  if (e instanceof Mt) return new Mt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Oi || (e = cr(e)), !e) return new Mt();
  if (e instanceof Mt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, l = i - o, a = (i + o) / 2;
  return l ? (t === i ? s = (n - r) / l + (n < r) * 6 : n === i ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= a < 0.5 ? i + o : 2 - i - o, s *= 60) : l = a > 0 && a < 1 ? 0 : s, new Mt(s, l, a, e.opacity);
}
function e_(e, t, n, r) {
  return arguments.length === 1 ? Zg(e) : new Mt(e, t, n, r ?? 1);
}
function Mt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ed(Mt, e_, Qg(Oi, {
  brighter(e) {
    return e = e == null ? ol : Math.pow(ol, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oi : Math.pow(oi, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Je(
      $a(e >= 240 ? e - 240 : e + 120, o, r),
      $a(e, o, r),
      $a(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Mt(Xf(this.h), os(this.s), os(this.l), il(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = il(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Xf(this.h)}, ${os(this.s) * 100}%, ${os(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Xf(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function os(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function $a(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const td = (e) => () => e;
function t_(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function n_(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function r_(e) {
  return (e = +e) == 1 ? qg : function(t, n) {
    return n - t ? n_(t, n, e) : td(isNaN(t) ? n : t);
  };
}
function qg(e, t) {
  var n = t - e;
  return n ? t_(e, n) : td(isNaN(e) ? t : e);
}
const sl = function e(t) {
  var n = r_(t);
  function r(o, i) {
    var s = n((o = ju(o)).r, (i = ju(i)).r), l = n(o.g, i.g), a = n(o.b, i.b), u = qg(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = l(d), o.b = a(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function o_(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function i_(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function s_(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Bo(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(l) {
    for (s = 0; s < r; ++s) i[s] = o[s](l);
    return i;
  };
}
function l_(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Bt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function a_(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Bo(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Ru = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ha = new RegExp(Ru.source, "g");
function u_(e) {
  return function() {
    return e;
  };
}
function c_(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Jg(e, t) {
  var n = Ru.lastIndex = Ha.lastIndex = 0, r, o, i, s = -1, l = [], a = [];
  for (e = e + "", t = t + ""; (r = Ru.exec(e)) && (o = Ha.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), l[s] ? l[s] += i : l[++s] = i), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, a.push({ i: s, x: Bt(r, o) })), n = Ha.lastIndex;
  return n < t.length && (i = t.slice(n), l[s] ? l[s] += i : l[++s] = i), l.length < 2 ? a[0] ? c_(a[0].x) : u_(t) : (t = a.length, function(u) {
    for (var d = 0, c; d < t; ++d) l[(c = a[d]).i] = c.x(u);
    return l.join("");
  });
}
function Bo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? td(t) : (n === "number" ? Bt : n === "string" ? (r = cr(t)) ? (t = r, sl) : Jg : t instanceof cr ? sl : t instanceof Date ? l_ : i_(t) ? o_ : Array.isArray(t) ? s_ : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? a_ : Bt)(e, t);
}
var Gf = 180 / Math.PI, Fu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function em(e, t, n, r, o, i) {
  var s, l, a;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (a = e * n + t * r) && (n -= e * a, r -= t * a), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, a /= l), e * r < t * n && (e = -e, t = -t, a = -a, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Gf,
    skewX: Math.atan(a) * Gf,
    scaleX: s,
    scaleY: l
  };
}
var is;
function d_(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Fu : em(t.a, t.b, t.c, t.d, t.e, t.f);
}
function f_(e) {
  return e == null || (is || (is = document.createElementNS("http://www.w3.org/2000/svg", "g")), is.setAttribute("transform", e), !(e = is.transform.baseVal.consolidate())) ? Fu : (e = e.matrix, em(e.a, e.b, e.c, e.d, e.e, e.f));
}
function tm(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, c, f, p, y) {
    if (u !== c || d !== f) {
      var w = p.push("translate(", null, t, null, n);
      y.push({ i: w - 4, x: Bt(u, c) }, { i: w - 2, x: Bt(d, f) });
    } else (c || f) && p.push("translate(" + c + t + f + n);
  }
  function s(u, d, c, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: c.push(o(c) + "rotate(", null, r) - 2, x: Bt(u, d) })) : d && c.push(o(c) + "rotate(" + d + r);
  }
  function l(u, d, c, f) {
    u !== d ? f.push({ i: c.push(o(c) + "skewX(", null, r) - 2, x: Bt(u, d) }) : d && c.push(o(c) + "skewX(" + d + r);
  }
  function a(u, d, c, f, p, y) {
    if (u !== c || d !== f) {
      var w = p.push(o(p) + "scale(", null, ",", null, ")");
      y.push({ i: w - 4, x: Bt(u, c) }, { i: w - 2, x: Bt(d, f) });
    } else (c !== 1 || f !== 1) && p.push(o(p) + "scale(" + c + "," + f + ")");
  }
  return function(u, d) {
    var c = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, c, f), s(u.rotate, d.rotate, c, f), l(u.skewX, d.skewX, c, f), a(u.scaleX, u.scaleY, d.scaleX, d.scaleY, c, f), u = d = null, function(p) {
      for (var y = -1, w = f.length, E; ++y < w; ) c[(E = f[y]).i] = E.x(p);
      return c.join("");
    };
  };
}
var h_ = tm(d_, "px, ", "px)", "deg)"), p_ = tm(f_, ", ", ")", ")"), g_ = 1e-12;
function Qf(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function m_(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function y_(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ls = function e(t, n, r) {
  function o(i, s) {
    var l = i[0], a = i[1], u = i[2], d = s[0], c = s[1], f = s[2], p = d - l, y = c - a, w = p * p + y * y, E, h;
    if (w < g_)
      h = Math.log(f / u) / t, E = function(N) {
        return [
          l + N * p,
          a + N * y,
          u * Math.exp(t * N * h)
        ];
      };
    else {
      var x = Math.sqrt(w), g = (f * f - u * u + r * w) / (2 * u * n * x), v = (f * f - u * u - r * w) / (2 * f * n * x), S = Math.log(Math.sqrt(g * g + 1) - g), _ = Math.log(Math.sqrt(v * v + 1) - v);
      h = (_ - S) / t, E = function(N) {
        var k = N * h, T = Qf(S), D = u / (n * x) * (T * y_(t * k + S) - m_(S));
        return [
          l + D * p,
          a + D * y,
          u * T / Qf(t * k + S)
        ];
      };
    }
    return E.duration = h * 1e3 * t / Math.SQRT2, E;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), l = s * s, a = l * l;
    return e(s, l, a);
  }, o;
}(Math.SQRT2, 2, 4);
var Jr = 0, Fo = 0, bo = 0, nm = 1e3, ll, Oo, al = 0, dr = 0, ea = 0, si = typeof performance == "object" && performance.now ? performance : Date, rm = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function nd() {
  return dr || (rm(x_), dr = si.now() + ea);
}
function x_() {
  dr = 0;
}
function ul() {
  this._call = this._time = this._next = null;
}
ul.prototype = om.prototype = {
  constructor: ul,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? nd() : +n) + (t == null ? 0 : +t), !this._next && Oo !== this && (Oo ? Oo._next = this : ll = this, Oo = this), this._call = e, this._time = n, Ou();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ou());
  }
};
function om(e, t, n) {
  var r = new ul();
  return r.restart(e, t, n), r;
}
function v_() {
  nd(), ++Jr;
  for (var e = ll, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Jr;
}
function Zf() {
  dr = (al = si.now()) + ea, Jr = Fo = 0;
  try {
    v_();
  } finally {
    Jr = 0, S_(), dr = 0;
  }
}
function w_() {
  var e = si.now(), t = e - al;
  t > nm && (ea -= t, al = e);
}
function S_() {
  for (var e, t = ll, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ll = n);
  Oo = e, Ou(r);
}
function Ou(e) {
  if (!Jr) {
    Fo && (Fo = clearTimeout(Fo));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (Fo = setTimeout(Zf, e - si.now() - ea)), bo && (bo = clearInterval(bo))) : (bo || (al = si.now(), bo = setInterval(w_, nm)), Jr = 1, rm(Zf));
  }
}
function qf(e, t, n) {
  var r = new ul();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var E_ = ql("start", "end", "cancel", "interrupt"), __ = [], im = 0, Jf = 1, zu = 2, js = 3, eh = 4, $u = 5, Rs = 6;
function ta(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  b_(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: E_,
    tween: __,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: im
  });
}
function rd(e, t) {
  var n = Ot(e, t);
  if (n.state > im) throw new Error("too late; already scheduled");
  return n;
}
function Gt(e, t) {
  var n = Ot(e, t);
  if (n.state > js) throw new Error("too late; already running");
  return n;
}
function Ot(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function b_(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = om(i, 0, n.time);
  function i(u) {
    n.state = Jf, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, c, f, p;
    if (n.state !== Jf) return a();
    for (d in r)
      if (p = r[d], p.name === n.name) {
        if (p.state === js) return qf(s);
        p.state === eh ? (p.state = Rs, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[d]) : +d < t && (p.state = Rs, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[d]);
      }
    if (qf(function() {
      n.state === js && (n.state = eh, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = zu, n.on.call("start", e, e.__data__, n.index, n.group), n.state === zu) {
      for (n.state = js, o = new Array(f = n.tween.length), d = 0, c = -1; d < f; ++d)
        (p = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++c] = p);
      o.length = c + 1;
    }
  }
  function l(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(a), n.state = $u, 1), c = -1, f = o.length; ++c < f; )
      o[c].call(e, d);
    n.state === $u && (n.on.call("end", e, e.__data__, n.index, n.group), a());
  }
  function a() {
    n.state = Rs, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Fs(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > zu && r.state < $u, r.state = Rs, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function N_(e) {
  return this.each(function() {
    Fs(this, e);
  });
}
function k_(e, t) {
  var n, r;
  return function() {
    var o = Gt(this, e), i = o.tween;
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
function C_(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Gt(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var l = { name: t, value: n }, a = 0, u = o.length; a < u; ++a)
        if (o[a].name === t) {
          o[a] = l;
          break;
        }
      a === u && o.push(l);
    }
    i.tween = o;
  };
}
function I_(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Ot(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? k_ : C_)(n, e, t));
}
function od(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Gt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ot(o, r).value[t];
  };
}
function sm(e, t) {
  var n;
  return (typeof t == "number" ? Bt : t instanceof cr ? sl : (n = cr(t)) ? (t = n, sl) : Jg)(e, t);
}
function T_(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function P_(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function M_(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function A_(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function D_(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), a;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), a = l + "", s === a ? null : s === r && a === o ? i : (o = a, i = t(r = s, l)));
  };
}
function L_(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), a;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), a = l + "", s === a ? null : s === r && a === o ? i : (o = a, i = t(r = s, l)));
  };
}
function j_(e, t) {
  var n = Jl(e), r = n === "transform" ? p_ : sm;
  return this.attrTween(e, typeof t == "function" ? (n.local ? L_ : D_)(n, r, od(this, "attr." + e, t)) : t == null ? (n.local ? P_ : T_)(n) : (n.local ? A_ : M_)(n, r, t));
}
function R_(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function F_(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function O_(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && F_(e, i)), n;
  }
  return o._value = t, o;
}
function z_(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && R_(e, i)), n;
  }
  return o._value = t, o;
}
function $_(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Jl(e);
  return this.tween(n, (r.local ? O_ : z_)(r, t));
}
function H_(e, t) {
  return function() {
    rd(this, e).delay = +t.apply(this, arguments);
  };
}
function V_(e, t) {
  return t = +t, function() {
    rd(this, e).delay = t;
  };
}
function B_(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? H_ : V_)(t, e)) : Ot(this.node(), t).delay;
}
function U_(e, t) {
  return function() {
    Gt(this, e).duration = +t.apply(this, arguments);
  };
}
function K_(e, t) {
  return t = +t, function() {
    Gt(this, e).duration = t;
  };
}
function W_(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? U_ : K_)(t, e)) : Ot(this.node(), t).duration;
}
function Y_(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Gt(this, e).ease = t;
  };
}
function X_(e) {
  var t = this._id;
  return arguments.length ? this.each(Y_(t, e)) : Ot(this.node(), t).ease;
}
function G_(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Gt(this, e).ease = n;
  };
}
function Q_(e) {
  if (typeof e != "function") throw new Error();
  return this.each(G_(this._id, e));
}
function Z_(e) {
  typeof e != "function" && (e = Fg(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], a, u = 0; u < s; ++u)
      (a = i[u]) && e.call(a, a.__data__, u, i) && l.push(a);
  return new fn(r, this._parents, this._name, this._id);
}
function q_(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), l = 0; l < i; ++l)
    for (var a = t[l], u = n[l], d = a.length, c = s[l] = new Array(d), f, p = 0; p < d; ++p)
      (f = a[p] || u[p]) && (c[p] = f);
  for (; l < r; ++l)
    s[l] = t[l];
  return new fn(s, this._parents, this._name, this._id);
}
function J_(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function eb(e, t, n) {
  var r, o, i = J_(t) ? rd : Gt;
  return function() {
    var s = i(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function tb(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ot(this.node(), n).on.on(e) : this.each(eb(n, e, t));
}
function nb(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function rb() {
  return this.on("end.remove", nb(this._id));
}
function ob(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = qc(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], a = l.length, u = i[s] = new Array(a), d, c, f = 0; f < a; ++f)
      (d = l[f]) && (c = e.call(d, d.__data__, f, l)) && ("__data__" in d && (c.__data__ = d.__data__), u[f] = c, ta(u[f], t, n, f, u, Ot(d, n)));
  return new fn(i, this._parents, t, n);
}
function ib(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Rg(e));
  for (var r = this._groups, o = r.length, i = [], s = [], l = 0; l < o; ++l)
    for (var a = r[l], u = a.length, d, c = 0; c < u; ++c)
      if (d = a[c]) {
        for (var f = e.call(d, d.__data__, c, a), p, y = Ot(d, n), w = 0, E = f.length; w < E; ++w)
          (p = f[w]) && ta(p, t, n, w, f, y);
        i.push(f), s.push(d);
      }
  return new fn(i, s, t, n);
}
var sb = Fi.prototype.constructor;
function lb() {
  return new sb(this._groups, this._parents);
}
function ab(e, t) {
  var n, r, o;
  return function() {
    var i = qr(this, e), s = (this.style.removeProperty(e), qr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function lm(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ub(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = qr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function cb(e, t, n) {
  var r, o, i;
  return function() {
    var s = qr(this, e), l = n(this), a = l + "";
    return l == null && (a = l = (this.style.removeProperty(e), qr(this, e))), s === a ? null : s === r && a === o ? i : (o = a, i = t(r = s, l));
  };
}
function db(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, l;
  return function() {
    var a = Gt(this, e), u = a.on, d = a.value[i] == null ? l || (l = lm(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), a.on = r;
  };
}
function fb(e, t, n) {
  var r = (e += "") == "transform" ? h_ : sm;
  return t == null ? this.styleTween(e, ab(e, r)).on("end.style." + e, lm(e)) : typeof t == "function" ? this.styleTween(e, cb(e, r, od(this, "style." + e, t))).each(db(this._id, e)) : this.styleTween(e, ub(e, r, t), n).on("end.style." + e, null);
}
function hb(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function pb(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && hb(e, s, n)), r;
  }
  return i._value = t, i;
}
function gb(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, pb(e, t, n ?? ""));
}
function mb(e) {
  return function() {
    this.textContent = e;
  };
}
function yb(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function xb(e) {
  return this.tween("text", typeof e == "function" ? yb(od(this, "text", e)) : mb(e == null ? "" : e + ""));
}
function vb(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function wb(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && vb(o)), t;
  }
  return r._value = e, r;
}
function Sb(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, wb(e));
}
function Eb() {
  for (var e = this._name, t = this._id, n = am(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, a, u = 0; u < l; ++u)
      if (a = s[u]) {
        var d = Ot(a, t);
        ta(a, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new fn(r, this._parents, e, n);
}
function _b() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var l = { value: s }, a = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Gt(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(a)), u.on = t;
    }), o === 0 && i();
  });
}
var bb = 0;
function fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function am() {
  return ++bb;
}
var Jt = Fi.prototype;
fn.prototype = {
  constructor: fn,
  select: ob,
  selectAll: ib,
  selectChild: Jt.selectChild,
  selectChildren: Jt.selectChildren,
  filter: Z_,
  merge: q_,
  selection: lb,
  transition: Eb,
  call: Jt.call,
  nodes: Jt.nodes,
  node: Jt.node,
  size: Jt.size,
  empty: Jt.empty,
  each: Jt.each,
  on: tb,
  attr: j_,
  attrTween: $_,
  style: fb,
  styleTween: gb,
  text: xb,
  textTween: Sb,
  remove: rb,
  tween: I_,
  delay: B_,
  duration: W_,
  ease: X_,
  easeVarying: Q_,
  end: _b,
  [Symbol.iterator]: Jt[Symbol.iterator]
};
function Nb(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var kb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Nb
};
function Cb(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ib(e) {
  var t, n;
  e instanceof fn ? (t = e._id, e = e._name) : (t = am(), (n = kb).time = nd(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, a, u = 0; u < l; ++u)
      (a = s[u]) && ta(a, e, t, u, s, n || Cb(a, t));
  return new fn(r, this._parents, e, t);
}
Fi.prototype.interrupt = N_;
Fi.prototype.transition = Ib;
const ss = (e) => () => e;
function Tb(e, {
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
function on(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
on.prototype = {
  constructor: on,
  scale: function(e) {
    return e === 1 ? this : new on(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new on(this.k, this.x + this.k * e, this.y + this.k * t);
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
var na = new on(1, 0, 0);
um.prototype = on.prototype;
function um(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return na;
  return e.__zoom;
}
function Va(e) {
  e.stopImmediatePropagation();
}
function No(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Pb(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Mb() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function th() {
  return this.__zoom || na;
}
function Ab(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Db() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Lb(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function cm() {
  var e = Pb, t = Mb, n = Lb, r = Ab, o = Db, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, a = Ls, u = ql("start", "zoom", "end"), d, c, f, p = 500, y = 150, w = 0, E = 10;
  function h(I) {
    I.property("__zoom", th).on("wheel.zoom", k, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", M).on("touchend.zoom touchcancel.zoom", $).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  h.transform = function(I, j, L, F) {
    var C = I.selection ? I.selection() : I;
    C.property("__zoom", th), I !== C ? S(I, j, L, F) : C.interrupt().each(function() {
      _(this, arguments).event(F).start().zoom(null, typeof j == "function" ? j.apply(this, arguments) : j).end();
    });
  }, h.scaleBy = function(I, j, L, F) {
    h.scaleTo(I, function() {
      var C = this.__zoom.k, P = typeof j == "function" ? j.apply(this, arguments) : j;
      return C * P;
    }, L, F);
  }, h.scaleTo = function(I, j, L, F) {
    h.transform(I, function() {
      var C = t.apply(this, arguments), P = this.__zoom, R = L == null ? v(C) : typeof L == "function" ? L.apply(this, arguments) : L, O = P.invert(R), z = typeof j == "function" ? j.apply(this, arguments) : j;
      return n(g(x(P, z), R, O), C, s);
    }, L, F);
  }, h.translateBy = function(I, j, L, F) {
    h.transform(I, function() {
      return n(this.__zoom.translate(
        typeof j == "function" ? j.apply(this, arguments) : j,
        typeof L == "function" ? L.apply(this, arguments) : L
      ), t.apply(this, arguments), s);
    }, null, F);
  }, h.translateTo = function(I, j, L, F, C) {
    h.transform(I, function() {
      var P = t.apply(this, arguments), R = this.__zoom, O = F == null ? v(P) : typeof F == "function" ? F.apply(this, arguments) : F;
      return n(na.translate(O[0], O[1]).scale(R.k).translate(
        typeof j == "function" ? -j.apply(this, arguments) : -j,
        typeof L == "function" ? -L.apply(this, arguments) : -L
      ), P, s);
    }, F, C);
  };
  function x(I, j) {
    return j = Math.max(i[0], Math.min(i[1], j)), j === I.k ? I : new on(j, I.x, I.y);
  }
  function g(I, j, L) {
    var F = j[0] - L[0] * I.k, C = j[1] - L[1] * I.k;
    return F === I.x && C === I.y ? I : new on(I.k, F, C);
  }
  function v(I) {
    return [(+I[0][0] + +I[1][0]) / 2, (+I[0][1] + +I[1][1]) / 2];
  }
  function S(I, j, L, F) {
    I.on("start.zoom", function() {
      _(this, arguments).event(F).start();
    }).on("interrupt.zoom end.zoom", function() {
      _(this, arguments).event(F).end();
    }).tween("zoom", function() {
      var C = this, P = arguments, R = _(C, P).event(F), O = t.apply(C, P), z = L == null ? v(O) : typeof L == "function" ? L.apply(C, P) : L, U = Math.max(O[1][0] - O[0][0], O[1][1] - O[0][1]), V = C.__zoom, X = typeof j == "function" ? j.apply(C, P) : j, G = a(V.invert(z).concat(U / V.k), X.invert(z).concat(U / X.k));
      return function(Q) {
        if (Q === 1) Q = X;
        else {
          var B = G(Q), q = U / B[2];
          Q = new on(q, z[0] - B[0] * q, z[1] - B[1] * q);
        }
        R.zoom(null, Q);
      };
    });
  }
  function _(I, j, L) {
    return !L && I.__zooming || new N(I, j);
  }
  function N(I, j) {
    this.that = I, this.args = j, this.active = 0, this.sourceEvent = null, this.extent = t.apply(I, j), this.taps = 0;
  }
  N.prototype = {
    event: function(I) {
      return I && (this.sourceEvent = I), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(I, j) {
      return this.mouse && I !== "mouse" && (this.mouse[1] = j.invert(this.mouse[0])), this.touch0 && I !== "touch" && (this.touch0[1] = j.invert(this.touch0[0])), this.touch1 && I !== "touch" && (this.touch1[1] = j.invert(this.touch1[0])), this.that.__zoom = j, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(I) {
      var j = it(this.that).datum();
      u.call(
        I,
        this.that,
        new Tb(I, {
          sourceEvent: this.sourceEvent,
          target: h,
          transform: this.that.__zoom,
          dispatch: u
        }),
        j
      );
    }
  };
  function k(I, ...j) {
    if (!e.apply(this, arguments)) return;
    var L = _(this, j).event(I), F = this.__zoom, C = Math.max(i[0], Math.min(i[1], F.k * Math.pow(2, r.apply(this, arguments)))), P = Ct(I);
    if (L.wheel)
      (L.mouse[0][0] !== P[0] || L.mouse[0][1] !== P[1]) && (L.mouse[1] = F.invert(L.mouse[0] = P)), clearTimeout(L.wheel);
    else {
      if (F.k === C) return;
      L.mouse = [P, F.invert(P)], Fs(this), L.start();
    }
    No(I), L.wheel = setTimeout(R, y), L.zoom("mouse", n(g(x(F, C), L.mouse[0], L.mouse[1]), L.extent, s));
    function R() {
      L.wheel = null, L.end();
    }
  }
  function T(I, ...j) {
    if (f || !e.apply(this, arguments)) return;
    var L = I.currentTarget, F = _(this, j, !0).event(I), C = it(I.view).on("mousemove.zoom", z, !0).on("mouseup.zoom", U, !0), P = Ct(I, L), R = I.clientX, O = I.clientY;
    Yg(I.view), Va(I), F.mouse = [P, this.__zoom.invert(P)], Fs(this), F.start();
    function z(V) {
      if (No(V), !F.moved) {
        var X = V.clientX - R, G = V.clientY - O;
        F.moved = X * X + G * G > w;
      }
      F.event(V).zoom("mouse", n(g(F.that.__zoom, F.mouse[0] = Ct(V, L), F.mouse[1]), F.extent, s));
    }
    function U(V) {
      C.on("mousemove.zoom mouseup.zoom", null), Xg(V.view, F.moved), No(V), F.event(V).end();
    }
  }
  function D(I, ...j) {
    if (e.apply(this, arguments)) {
      var L = this.__zoom, F = Ct(I.changedTouches ? I.changedTouches[0] : I, this), C = L.invert(F), P = L.k * (I.shiftKey ? 0.5 : 2), R = n(g(x(L, P), F, C), t.apply(this, j), s);
      No(I), l > 0 ? it(this).transition().duration(l).call(S, R, F, I) : it(this).call(h.transform, R, F, I);
    }
  }
  function A(I, ...j) {
    if (e.apply(this, arguments)) {
      var L = I.touches, F = L.length, C = _(this, j, I.changedTouches.length === F).event(I), P, R, O, z;
      for (Va(I), R = 0; R < F; ++R)
        O = L[R], z = Ct(O, this), z = [z, this.__zoom.invert(z), O.identifier], C.touch0 ? !C.touch1 && C.touch0[2] !== z[2] && (C.touch1 = z, C.taps = 0) : (C.touch0 = z, P = !0, C.taps = 1 + !!d);
      d && (d = clearTimeout(d)), P && (C.taps < 2 && (c = z[0], d = setTimeout(function() {
        d = null;
      }, p)), Fs(this), C.start());
    }
  }
  function M(I, ...j) {
    if (this.__zooming) {
      var L = _(this, j).event(I), F = I.changedTouches, C = F.length, P, R, O, z;
      for (No(I), P = 0; P < C; ++P)
        R = F[P], O = Ct(R, this), L.touch0 && L.touch0[2] === R.identifier ? L.touch0[0] = O : L.touch1 && L.touch1[2] === R.identifier && (L.touch1[0] = O);
      if (R = L.that.__zoom, L.touch1) {
        var U = L.touch0[0], V = L.touch0[1], X = L.touch1[0], G = L.touch1[1], Q = (Q = X[0] - U[0]) * Q + (Q = X[1] - U[1]) * Q, B = (B = G[0] - V[0]) * B + (B = G[1] - V[1]) * B;
        R = x(R, Math.sqrt(Q / B)), O = [(U[0] + X[0]) / 2, (U[1] + X[1]) / 2], z = [(V[0] + G[0]) / 2, (V[1] + G[1]) / 2];
      } else if (L.touch0) O = L.touch0[0], z = L.touch0[1];
      else return;
      L.zoom("touch", n(g(R, O, z), L.extent, s));
    }
  }
  function $(I, ...j) {
    if (this.__zooming) {
      var L = _(this, j).event(I), F = I.changedTouches, C = F.length, P, R;
      for (Va(I), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, p), P = 0; P < C; ++P)
        R = F[P], L.touch0 && L.touch0[2] === R.identifier ? delete L.touch0 : L.touch1 && L.touch1[2] === R.identifier && delete L.touch1;
      if (L.touch1 && !L.touch0 && (L.touch0 = L.touch1, delete L.touch1), L.touch0) L.touch0[1] = this.__zoom.invert(L.touch0[0]);
      else if (L.end(), L.taps === 2 && (R = Ct(R, this), Math.hypot(c[0] - R[0], c[1] - R[1]) < E)) {
        var O = it(this).on("dblclick.zoom");
        O && O.apply(this, arguments);
      }
    }
  }
  return h.wheelDelta = function(I) {
    return arguments.length ? (r = typeof I == "function" ? I : ss(+I), h) : r;
  }, h.filter = function(I) {
    return arguments.length ? (e = typeof I == "function" ? I : ss(!!I), h) : e;
  }, h.touchable = function(I) {
    return arguments.length ? (o = typeof I == "function" ? I : ss(!!I), h) : o;
  }, h.extent = function(I) {
    return arguments.length ? (t = typeof I == "function" ? I : ss([[+I[0][0], +I[0][1]], [+I[1][0], +I[1][1]]]), h) : t;
  }, h.scaleExtent = function(I) {
    return arguments.length ? (i[0] = +I[0], i[1] = +I[1], h) : [i[0], i[1]];
  }, h.translateExtent = function(I) {
    return arguments.length ? (s[0][0] = +I[0][0], s[1][0] = +I[1][0], s[0][1] = +I[0][1], s[1][1] = +I[1][1], h) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, h.constrain = function(I) {
    return arguments.length ? (n = I, h) : n;
  }, h.duration = function(I) {
    return arguments.length ? (l = +I, h) : l;
  }, h.interpolate = function(I) {
    return arguments.length ? (a = I, h) : a;
  }, h.on = function() {
    var I = u.on.apply(u, arguments);
    return I === u ? h : I;
  }, h.clickDistance = function(I) {
    return arguments.length ? (w = (I = +I) * I, h) : Math.sqrt(w);
  }, h.tapDistance = function(I) {
    return arguments.length ? (E = +I, h) : E;
  }, h;
}
const Xt = {
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
}, li = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], dm = ["Enter", " ", "Escape"], fm = {
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
var eo;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(eo || (eo = {}));
var ir;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ir || (ir = {}));
var ai;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ai || (ai = {}));
const hm = {
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
var In;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(In || (In = {}));
var cl;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(cl || (cl = {}));
var Y;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Y || (Y = {}));
const nh = {
  [Y.Left]: Y.Right,
  [Y.Right]: Y.Left,
  [Y.Top]: Y.Bottom,
  [Y.Bottom]: Y.Top
};
function pm(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const gm = (e) => "id" in e && "source" in e && "target" in e, jb = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), id = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), zi = (e, t = [0, 0]) => {
  const { width: n, height: r } = yn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Rb = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : id(o) ? o : t.nodeLookup.get(o.id));
    const l = s ? dl(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ra(r, l);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return oa(n);
}, $i = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = ra(n, dl(o)), r = !0);
  }), r ? oa(n) : { x: 0, y: 0, width: 0, height: 0 };
}, sd = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const l = {
    ...Vi(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, a = [];
  for (const u of e.values()) {
    const { measured: d, selectable: c = !0, hidden: f = !1 } = u;
    if (s && !c || f)
      continue;
    const p = d.width ?? u.width ?? u.initialWidth ?? null, y = d.height ?? u.height ?? u.initialHeight ?? null, w = ui(l, no(u)), E = (p ?? 0) * (y ?? 0), h = i && w > 0;
    (!u.internals.handleBounds || h || w >= E || u.dragging) && a.push(u);
  }
  return a;
}, Fb = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Ob(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function zb({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const l = Ob(e, s), a = $i(l), u = ld(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(u, {
    duration: s == null ? void 0 : s.duration,
    ease: s == null ? void 0 : s.ease,
    interpolate: s == null ? void 0 : s.interpolate
  }), Promise.resolve(!0);
}
function mm({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), l = s.parentId ? n.get(s.parentId) : void 0, { x: a, y: u } = l ? l.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let c = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!l)
      i == null || i("005", Xt.error005());
    else {
      const p = l.measured.width, y = l.measured.height;
      p && y && (c = [
        [a, u],
        [a + p, u + y]
      ]);
    }
  else l && ro(s.extent) && (c = [
    [s.extent[0][0] + a, s.extent[0][1] + u],
    [s.extent[1][0] + a, s.extent[1][1] + u]
  ]);
  const f = ro(c) ? fr(t, c, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Xt.error015())), {
    position: {
      x: f.x - a + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function $b({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const p = i.has(f.id), y = !p && f.parentId && s.find((w) => w.id === f.parentId);
    (p || y) && s.push(f);
  }
  const l = new Set(t.map((f) => f.id)), a = r.filter((f) => f.deletable !== !1), d = Fb(s, a);
  for (const f of a)
    l.has(f.id) && !d.find((y) => y.id === f.id) && d.push(f);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const c = await o({
    nodes: s,
    edges: d
  });
  return typeof c == "boolean" ? c ? { edges: d, nodes: s } : { edges: [], nodes: [] } : c;
}
const to = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fr = (e = { x: 0, y: 0 }, t, n) => ({
  x: to(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: to(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function ym(e, t, n) {
  const { width: r, height: o } = yn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const rh = (e, t, n) => e < t ? to(Math.abs(e - t), 1, t) / t : e > n ? -to(Math.abs(e - n), 1, t) / t : 0, xm = (e, t, n = 15, r = 40) => {
  const o = rh(e.x, r, t.width - r) * n, i = rh(e.y, r, t.height - r) * n;
  return [o, i];
}, ra = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Hu = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), oa = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), no = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = id(e) ? e.internals.positionAbsolute : zi(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, dl = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = id(e) ? e.internals.positionAbsolute : zi(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, vm = (e, t) => oa(ra(Hu(e), Hu(t))), ui = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, oh = (e) => At(e.width) && At(e.height) && At(e.x) && At(e.y), At = (e) => !isNaN(e) && isFinite(e), Hb = (e, t) => {
}, Hi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Vi = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const l = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Hi(l, s) : l;
}, fl = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function br(e, t) {
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
function Vb(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = br(e, n), o = br(e, t);
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
    const r = br(e.top ?? e.y ?? 0, n), o = br(e.bottom ?? e.y ?? 0, n), i = br(e.left ?? e.x ?? 0, t), s = br(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Bb(e, t, n, r, o, i) {
  const { x: s, y: l } = fl(e, [t, n, r]), { x: a, y: u } = fl({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - a, c = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(d),
    bottom: Math.floor(c)
  };
}
const ld = (e, t, n, r, o, i) => {
  const s = Vb(i, t, n), l = (t - s.x) / e.width, a = (n - s.y) / e.height, u = Math.min(l, a), d = to(u, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, p = t / 2 - c * d, y = n / 2 - f * d, w = Bb(e, p, y, d, t, n), E = {
    left: Math.min(w.left - s.left, 0),
    top: Math.min(w.top - s.top, 0),
    right: Math.min(w.right - s.right, 0),
    bottom: Math.min(w.bottom - s.bottom, 0)
  };
  return {
    x: p - E.left + E.right,
    y: y - E.top + E.bottom,
    zoom: d
  };
}, ci = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function ro(e) {
  return e != null && e !== "parent";
}
function yn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function wm(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Sm(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const l = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * l[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * l[1];
  }
  return i;
}
function ih(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Ub() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function Kb(e) {
  return { ...fm, ...e || {} };
}
function Uo(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Dt(e), l = Vi({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: a, y: u } = n ? Hi(l, t) : l;
  return {
    xSnapped: a,
    ySnapped: u,
    ...l
  };
}
const ad = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Em = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Wb = ["INPUT", "SELECT", "TEXTAREA"];
function _m(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : Wb.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const bm = (e) => "clientX" in e, Dt = (e, t) => {
  var i, s;
  const n = bm(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, sh = (e, t, n, r, o) => {
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
      ...ad(s)
    };
  });
};
function Nm({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: l }) {
  const a = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + l * 0.375 + r * 0.125, d = Math.abs(a - e), c = Math.abs(u - t);
  return [a, u, d, c];
}
function ls(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function lh({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Y.Left:
      return [t - ls(t - r, i), n];
    case Y.Right:
      return [t + ls(r - t, i), n];
    case Y.Top:
      return [t, n - ls(n - o, i)];
    case Y.Bottom:
      return [t, n + ls(o - n, i)];
  }
}
function ud({ sourceX: e, sourceY: t, sourcePosition: n = Y.Bottom, targetX: r, targetY: o, targetPosition: i = Y.Top, curvature: s = 0.25 }) {
  const [l, a] = lh({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = lh({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [c, f, p, y] = Nm({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: l,
    sourceControlY: a,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${e},${t} C${l},${a} ${u},${d} ${r},${o}`,
    c,
    f,
    p,
    y
  ];
}
function km({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [i, l, o, s];
}
function Yb({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, l = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + l;
}
function Xb({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ra(dl(e), dl(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ui(s, oa(i)) > 0;
}
const Gb = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Qb = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Zb = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || Gb;
  let o;
  return gm(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, Qb(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function Cm({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, l] = km({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, l];
}
const ah = {
  [Y.Left]: { x: -1, y: 0 },
  [Y.Right]: { x: 1, y: 0 },
  [Y.Top]: { x: 0, y: -1 },
  [Y.Bottom]: { x: 0, y: 1 }
}, qb = ({ source: e, sourcePosition: t = Y.Bottom, target: n }) => t === Y.Left || t === Y.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, uh = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Jb({ source: e, sourcePosition: t = Y.Bottom, target: n, targetPosition: r = Y.Top, center: o, offset: i, stepPosition: s }) {
  const l = ah[t], a = ah[r], u = { x: e.x + l.x * i, y: e.y + l.y * i }, d = { x: n.x + a.x * i, y: n.y + a.y * i }, c = qb({
    source: u,
    sourcePosition: t,
    target: d
  }), f = c.x !== 0 ? "x" : "y", p = c[f];
  let y = [], w, E;
  const h = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , g, v] = km({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (l[f] * a[f] === -1) {
    f === "x" ? (w = o.x ?? u.x + (d.x - u.x) * s, E = o.y ?? (u.y + d.y) / 2) : (w = o.x ?? (u.x + d.x) / 2, E = o.y ?? u.y + (d.y - u.y) * s);
    const _ = [
      { x: w, y: u.y },
      { x: w, y: d.y }
    ], N = [
      { x: u.x, y: E },
      { x: d.x, y: E }
    ];
    l[f] === p ? y = f === "x" ? _ : N : y = f === "x" ? N : _;
  } else {
    const _ = [{ x: u.x, y: d.y }], N = [{ x: d.x, y: u.y }];
    if (f === "x" ? y = l.x === p ? N : _ : y = l.y === p ? _ : N, t === r) {
      const M = Math.abs(e[f] - n[f]);
      if (M <= i) {
        const $ = Math.min(i - 1, i - M);
        l[f] === p ? h[f] = (u[f] > e[f] ? -1 : 1) * $ : x[f] = (d[f] > n[f] ? -1 : 1) * $;
      }
    }
    if (t !== r) {
      const M = f === "x" ? "y" : "x", $ = l[f] === a[M], I = u[M] > d[M], j = u[M] < d[M];
      (l[f] === 1 && (!$ && I || $ && j) || l[f] !== 1 && (!$ && j || $ && I)) && (y = f === "x" ? _ : N);
    }
    const k = { x: u.x + h.x, y: u.y + h.y }, T = { x: d.x + x.x, y: d.y + x.y }, D = Math.max(Math.abs(k.x - y[0].x), Math.abs(T.x - y[0].x)), A = Math.max(Math.abs(k.y - y[0].y), Math.abs(T.y - y[0].y));
    D >= A ? (w = (k.x + T.x) / 2, E = y[0].y) : (w = y[0].x, E = (k.y + T.y) / 2);
  }
  return [[
    e,
    { x: u.x + h.x, y: u.y + h.y },
    ...y,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], w, E, g, v];
}
function eN(e, t, n, r) {
  const o = Math.min(uh(e, t) / 2, uh(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const l = e.x < n.x ? 1 : -1, a = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * a}Q ${i},${s} ${i + o * l},${s}`;
}
function hl({ sourceX: e, sourceY: t, sourcePosition: n = Y.Bottom, targetX: r, targetY: o, targetPosition: i = Y.Top, borderRadius: s = 5, centerX: l, centerY: a, offset: u = 20, stepPosition: d = 0.5 }) {
  const [c, f, p, y, w] = Jb({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: l, y: a },
    offset: u,
    stepPosition: d
  });
  return [c.reduce((h, x, g) => {
    let v = "";
    return g > 0 && g < c.length - 1 ? v = eN(c[g - 1], x, c[g + 1], s) : v = `${g === 0 ? "M" : "L"}${x.x} ${x.y}`, h += v, h;
  }, ""), f, p, y, w];
}
function ch(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function tN(e) {
  var c;
  const { sourceNode: t, targetNode: n } = e;
  if (!ch(t) || !ch(n))
    return null;
  const r = t.internals.handleBounds || dh(t.handles), o = n.internals.handleBounds || dh(n.handles), i = fh((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = fh(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === eo.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (c = e.onError) == null || c.call(e, "008", Xt.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || Y.Bottom, a = (s == null ? void 0 : s.position) || Y.Top, u = hr(t, i, l), d = hr(n, s, a);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: a
  };
}
function dh(e) {
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
function hr(e, t, n = Y.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: l } = t ?? yn(e);
  if (r)
    return { x: o + s / 2, y: i + l / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Y.Top:
      return { x: o + s / 2, y: i };
    case Y.Right:
      return { x: o + s, y: i + l / 2 };
    case Y.Bottom:
      return { x: o + s / 2, y: i + l };
    case Y.Left:
      return { x: o, y: i + l / 2 };
  }
}
function fh(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Vu(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function nN(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, l) => ([l.markerStart || r, l.markerEnd || o].forEach((a) => {
    if (a && typeof a == "object") {
      const u = Vu(a, t);
      i.has(u) || (s.push({ id: u, color: a.color || n, ...a }), i.add(u));
    }
  }), s), []).sort((s, l) => s.id.localeCompare(l.id));
}
const Im = 1e3, rN = 10, cd = {
  nodeOrigin: [0, 0],
  nodeExtent: li,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, oN = {
  ...cd,
  checkEquality: !0
};
function dd(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function iN(e, t, n) {
  const r = dd(cd, n);
  for (const o of e.values())
    if (o.parentId)
      hd(o, e, t, r);
    else {
      const i = zi(o, r.nodeOrigin), s = ro(o.extent) ? o.extent : r.nodeExtent, l = fr(i, s, yn(o));
      o.internals.positionAbsolute = l;
    }
}
function sN(e, t) {
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
function fd(e) {
  return e === "manual";
}
function Bu(e, t, n, r = {}) {
  var u, d;
  const o = dd(oN, r), i = { i: 0 }, s = new Map(t), l = o != null && o.elevateNodesOnSelect && !fd(o.zIndexMode) ? Im : 0;
  let a = e.length > 0;
  t.clear(), n.clear();
  for (const c of e) {
    let f = s.get(c.id);
    if (o.checkEquality && c === (f == null ? void 0 : f.internals.userNode))
      t.set(c.id, f);
    else {
      const p = zi(c, o.nodeOrigin), y = ro(c.extent) ? c.extent : o.nodeExtent, w = fr(p, y, yn(c));
      f = {
        ...o.defaults,
        ...c,
        measured: {
          width: (u = c.measured) == null ? void 0 : u.width,
          height: (d = c.measured) == null ? void 0 : d.height
        },
        internals: {
          positionAbsolute: w,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: sN(c, f),
          z: Tm(c, l, o.zIndexMode),
          userNode: c
        }
      }, t.set(c.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (a = !1), c.parentId && hd(f, t, n, r, i);
  }
  return a;
}
function lN(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function hd(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: l, zIndexMode: a } = dd(cd, r), u = e.parentId, d = t.get(u);
  if (!d) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  lN(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && a === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * rN), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const c = i && !fd(a) ? Im : 0, { x: f, y: p, z: y } = aN(e, d, s, l, c, a), { positionAbsolute: w } = e.internals, E = f !== w.x || p !== w.y;
  (E || y !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: E ? { x: f, y: p } : w,
      z: y
    }
  });
}
function Tm(e, t, n) {
  const r = At(e.zIndex) ? e.zIndex : 0;
  return fd(n) ? r : r + (e.selected ? t : 0);
}
function aN(e, t, n, r, o, i) {
  const { x: s, y: l } = t.internals.positionAbsolute, a = yn(e), u = zi(e, n), d = ro(e.extent) ? fr(u, e.extent, a) : u;
  let c = fr({ x: s + d.x, y: l + d.y }, r, a);
  e.extent === "parent" && (c = ym(c, a, t));
  const f = Tm(e, o, i), p = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: p >= f ? p + 1 : f
  };
}
function pd(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const l of e) {
    const a = t.get(l.parentId);
    if (!a)
      continue;
    const u = ((s = i.get(l.parentId)) == null ? void 0 : s.expandedRect) ?? no(a), d = vm(u, l.rect);
    i.set(l.parentId, { expandedRect: d, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: l, parent: a }, u) => {
    var g;
    const d = a.internals.positionAbsolute, c = yn(a), f = a.origin ?? r, p = l.x < d.x ? Math.round(Math.abs(d.x - l.x)) : 0, y = l.y < d.y ? Math.round(Math.abs(d.y - l.y)) : 0, w = Math.max(c.width, Math.round(l.width)), E = Math.max(c.height, Math.round(l.height)), h = (w - c.width) * f[0], x = (E - c.height) * f[1];
    (p > 0 || y > 0 || h || x) && (o.push({
      id: u,
      type: "position",
      position: {
        x: a.position.x - p + h,
        y: a.position.y - y + x
      }
    }), (g = n.get(u)) == null || g.forEach((v) => {
      e.some((S) => S.id === v.id) || o.push({
        id: v.id,
        type: "position",
        position: {
          x: v.position.x + p,
          y: v.position.y + y
        }
      });
    })), (c.width < l.width || c.height < l.height || p || y) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: w + (p ? f[0] * p - h : 0),
        height: E + (y ? f[1] * y - x : 0)
      }
    });
  }), o;
}
function uN(e, t, n, r, o, i, s) {
  const l = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!l)
    return { changes: [], updatedInternals: a };
  const u = [], d = window.getComputedStyle(l), { m22: c } = new window.DOMMatrixReadOnly(d.transform), f = [];
  for (const p of e.values()) {
    const y = t.get(p.id);
    if (!y)
      continue;
    if (y.hidden) {
      t.set(y.id, {
        ...y,
        internals: {
          ...y.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const w = ad(p.nodeElement), E = y.measured.width !== w.width || y.measured.height !== w.height;
    if (!!(w.width && w.height && (E || !y.internals.handleBounds || p.force))) {
      const x = p.nodeElement.getBoundingClientRect(), g = ro(y.extent) ? y.extent : i;
      let { positionAbsolute: v } = y.internals;
      y.parentId && y.extent === "parent" ? v = ym(v, w, t.get(y.parentId)) : g && (v = fr(v, g, w));
      const S = {
        ...y,
        measured: w,
        internals: {
          ...y.internals,
          positionAbsolute: v,
          handleBounds: {
            source: sh("source", p.nodeElement, x, c, y.id),
            target: sh("target", p.nodeElement, x, c, y.id)
          }
        }
      };
      t.set(y.id, S), y.parentId && hd(S, t, n, { nodeOrigin: o, zIndexMode: s }), a = !0, E && (u.push({
        id: y.id,
        type: "dimensions",
        dimensions: w
      }), y.expandParent && y.parentId && f.push({
        id: y.id,
        parentId: y.parentId,
        rect: no(S, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = pd(f, t, n, o);
    u.push(...p);
  }
  return { changes: u, updatedInternals: a };
}
async function cN({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function hh(e, t, n, r, o, i) {
  let s = o;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, l.set(n, t)), s = `${o}-${e}`;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, a.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function Pm(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: l = null } = r, a = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: l }, u = `${o}-${s}--${i}-${l}`, d = `${i}-${l}--${o}-${s}`;
    hh("source", a, d, e, o, s), hh("target", a, u, e, i, l), t.set(r.id, r);
  }
}
function Mm(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Mm(n, t) : !1;
}
function ph(e, t, n) {
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
function dN(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Mm(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ba({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, l, a;
  const o = [];
  for (const [u, d] of t) {
    const c = (s = n.get(u)) == null ? void 0 : s.internals.userNode;
    c && o.push({
      ...c,
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
function fN({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Hi(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function hN({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, l = /* @__PURE__ */ new Map(), a = !1, u = { x: 0, y: 0 }, d = null, c = !1, f = null, p = !1, y = !1, w = null;
  function E({ noDragClassName: x, handleSelector: g, domNode: v, isSelectable: S, nodeId: _, nodeClickDistance: N = 0 }) {
    f = it(v);
    function k({ x: M, y: $ }) {
      const { nodeLookup: I, nodeExtent: j, snapGrid: L, snapToGrid: F, nodeOrigin: C, onNodeDrag: P, onSelectionDrag: R, onError: O, updateNodePositions: z } = t();
      i = { x: M, y: $ };
      let U = !1;
      const V = l.size > 1, X = V && j ? Hu($i(l)) : null, G = V && F ? fN({
        dragItems: l,
        snapGrid: L,
        x: M,
        y: $
      }) : null;
      for (const [Q, B] of l) {
        if (!I.has(Q))
          continue;
        let q = { x: M - B.distance.x, y: $ - B.distance.y };
        F && (q = G ? {
          x: Math.round(q.x + G.x),
          y: Math.round(q.y + G.y)
        } : Hi(q, L));
        let ie = null;
        if (V && j && !B.extent && X) {
          const { positionAbsolute: ee } = B.internals, ce = ee.x - X.x + j[0][0], pe = ee.x + B.measured.width - X.x2 + j[1][0], ue = ee.y - X.y + j[0][1], Ae = ee.y + B.measured.height - X.y2 + j[1][1];
          ie = [
            [ce, ue],
            [pe, Ae]
          ];
        }
        const { position: te, positionAbsolute: J } = mm({
          nodeId: Q,
          nextPosition: q,
          nodeLookup: I,
          nodeExtent: ie || j,
          nodeOrigin: C,
          onError: O
        });
        U = U || B.position.x !== te.x || B.position.y !== te.y, B.position = te, B.internals.positionAbsolute = J;
      }
      if (y = y || U, !!U && (z(l, !0), w && (r || P || !_ && R))) {
        const [Q, B] = Ba({
          nodeId: _,
          dragItems: l,
          nodeLookup: I
        });
        r == null || r(w, l, Q, B), P == null || P(w, Q, B), _ || R == null || R(w, B);
      }
    }
    async function T() {
      if (!d)
        return;
      const { transform: M, panBy: $, autoPanSpeed: I, autoPanOnNodeDrag: j } = t();
      if (!j) {
        a = !1, cancelAnimationFrame(s);
        return;
      }
      const [L, F] = xm(u, d, I);
      (L !== 0 || F !== 0) && (i.x = (i.x ?? 0) - L / M[2], i.y = (i.y ?? 0) - F / M[2], await $({ x: L, y: F }) && k(i)), s = requestAnimationFrame(T);
    }
    function D(M) {
      var V;
      const { nodeLookup: $, multiSelectionActive: I, nodesDraggable: j, transform: L, snapGrid: F, snapToGrid: C, selectNodesOnDrag: P, onNodeDragStart: R, onSelectionDragStart: O, unselectNodesAndEdges: z } = t();
      c = !0, (!P || !S) && !I && _ && ((V = $.get(_)) != null && V.selected || z()), S && P && _ && (e == null || e(_));
      const U = Uo(M.sourceEvent, { transform: L, snapGrid: F, snapToGrid: C, containerBounds: d });
      if (i = U, l = dN($, j, U, _), l.size > 0 && (n || R || !_ && O)) {
        const [X, G] = Ba({
          nodeId: _,
          dragItems: l,
          nodeLookup: $
        });
        n == null || n(M.sourceEvent, l, X, G), R == null || R(M.sourceEvent, X, G), _ || O == null || O(M.sourceEvent, G);
      }
    }
    const A = Gg().clickDistance(N).on("start", (M) => {
      const { domNode: $, nodeDragThreshold: I, transform: j, snapGrid: L, snapToGrid: F } = t();
      d = ($ == null ? void 0 : $.getBoundingClientRect()) || null, p = !1, y = !1, w = M.sourceEvent, I === 0 && D(M), i = Uo(M.sourceEvent, { transform: j, snapGrid: L, snapToGrid: F, containerBounds: d }), u = Dt(M.sourceEvent, d);
    }).on("drag", (M) => {
      const { autoPanOnNodeDrag: $, transform: I, snapGrid: j, snapToGrid: L, nodeDragThreshold: F, nodeLookup: C } = t(), P = Uo(M.sourceEvent, { transform: I, snapGrid: j, snapToGrid: L, containerBounds: d });
      if (w = M.sourceEvent, (M.sourceEvent.type === "touchmove" && M.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      _ && !C.has(_)) && (p = !0), !p) {
        if (!a && $ && c && (a = !0, T()), !c) {
          const R = Dt(M.sourceEvent, d), O = R.x - u.x, z = R.y - u.y;
          Math.sqrt(O * O + z * z) > F && D(M);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && l && c && (u = Dt(M.sourceEvent, d), k(P));
      }
    }).on("end", (M) => {
      if (!(!c || p) && (a = !1, c = !1, cancelAnimationFrame(s), l.size > 0)) {
        const { nodeLookup: $, updateNodePositions: I, onNodeDragStop: j, onSelectionDragStop: L } = t();
        if (y && (I(l, !1), y = !1), o || j || !_ && L) {
          const [F, C] = Ba({
            nodeId: _,
            dragItems: l,
            nodeLookup: $,
            dragging: !1
          });
          o == null || o(M.sourceEvent, l, F, C), j == null || j(M.sourceEvent, F, C), _ || L == null || L(M.sourceEvent, C);
        }
      }
    }).filter((M) => {
      const $ = M.target;
      return !M.button && (!x || !ph($, `.${x}`, v)) && (!g || ph($, g, v));
    });
    f.call(A);
  }
  function h() {
    f == null || f.on(".drag", null);
  }
  return {
    update: E,
    destroy: h
  };
}
function pN(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    ui(o, no(i)) > 0 && r.push(i);
  return r;
}
const gN = 250;
function mN(e, t, n, r) {
  var l, a;
  let o = [], i = 1 / 0;
  const s = pN(e, n, t + gN);
  for (const u of s) {
    const d = [...((l = u.internals.handleBounds) == null ? void 0 : l.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const c of d) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: f, y: p } = hr(u, c, c.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(p - e.y, 2));
      y > t || (y < i ? (o = [{ ...c, x: f, y: p }], i = y) : y === i && o.push({ ...c, x: f, y: p }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return o.find((d) => d.type === u) ?? o[0];
  }
  return o[0];
}
function Am(e, t, n, r, o, i = !1) {
  var u, d, c;
  const s = r.get(e);
  if (!s)
    return null;
  const l = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((d = s.internals.handleBounds) == null ? void 0 : d.source) ?? [], ...((c = s.internals.handleBounds) == null ? void 0 : c.target) ?? []], a = (n ? l == null ? void 0 : l.find((f) => f.id === n) : l == null ? void 0 : l[0]) ?? null;
  return a && i ? { ...a, ...hr(s, a, a.position, !0) } : a;
}
function Dm(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function yN(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Lm = () => !0;
function xN(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: l, nodeLookup: a, lib: u, autoPanOnConnect: d, flowId: c, panBy: f, cancelConnection: p, onConnectStart: y, onConnect: w, onConnectEnd: E, isValidConnection: h = Lm, onReconnectEnd: x, updateConnection: g, getTransform: v, getFromHandle: S, autoPanSpeed: _, dragThreshold: N = 1, handleDomNode: k }) {
  const T = Em(e.target);
  let D = 0, A;
  const { x: M, y: $ } = Dt(e), I = Dm(i, k), j = l == null ? void 0 : l.getBoundingClientRect();
  let L = !1;
  if (!j || !I)
    return;
  const F = Am(o, I, r, a, t);
  if (!F)
    return;
  let C = Dt(e, j), P = !1, R = null, O = !1, z = null;
  function U() {
    if (!d || !j)
      return;
    const [te, J] = xm(C, j, _);
    f({ x: te, y: J }), D = requestAnimationFrame(U);
  }
  const V = {
    ...F,
    nodeId: o,
    type: I,
    position: F.position
  }, X = a.get(o);
  let Q = {
    inProgress: !0,
    isValid: null,
    from: hr(X, V, Y.Left, !0),
    fromHandle: V,
    fromPosition: V.position,
    fromNode: X,
    to: C,
    toHandle: null,
    toPosition: nh[V.position],
    toNode: null,
    pointer: C
  };
  function B() {
    L = !0, g(Q), y == null || y(e, { nodeId: o, handleId: r, handleType: I });
  }
  N === 0 && B();
  function q(te) {
    if (!L) {
      const { x: Ae, y: Et } = Dt(te), _t = Ae - M, Zt = Et - $;
      if (!(_t * _t + Zt * Zt > N * N))
        return;
      B();
    }
    if (!S() || !V) {
      ie(te);
      return;
    }
    const J = v();
    C = Dt(te, j), A = mN(Vi(C, J, !1, [1, 1]), n, a, V), P || (U(), P = !0);
    const ee = jm(te, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: h,
      doc: T,
      lib: u,
      flowId: c,
      nodeLookup: a
    });
    z = ee.handleDomNode, R = ee.connection, O = yN(!!A, ee.isValid);
    const ce = a.get(o), pe = ce ? hr(ce, V, Y.Left, !0) : Q.from, ue = {
      ...Q,
      from: pe,
      isValid: O,
      to: ee.toHandle && O ? fl({ x: ee.toHandle.x, y: ee.toHandle.y }, J) : C,
      toHandle: ee.toHandle,
      toPosition: O && ee.toHandle ? ee.toHandle.position : nh[V.position],
      toNode: ee.toHandle ? a.get(ee.toHandle.nodeId) : null,
      pointer: C
    };
    g(ue), Q = ue;
  }
  function ie(te) {
    if (!("touches" in te && te.touches.length > 0)) {
      if (L) {
        (A || z) && R && O && (w == null || w(R));
        const { inProgress: J, ...ee } = Q, ce = {
          ...ee,
          toPosition: Q.toHandle ? Q.toPosition : null
        };
        E == null || E(te, ce), i && (x == null || x(te, ce));
      }
      p(), cancelAnimationFrame(D), P = !1, O = !1, R = null, z = null, T.removeEventListener("mousemove", q), T.removeEventListener("mouseup", ie), T.removeEventListener("touchmove", q), T.removeEventListener("touchend", ie);
    }
  }
  T.addEventListener("mousemove", q), T.addEventListener("mouseup", ie), T.addEventListener("touchmove", q), T.addEventListener("touchend", ie);
}
function jm(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: l, flowId: a, isValidConnection: u = Lm, nodeLookup: d }) {
  const c = i === "target", f = t ? s.querySelector(`.${l}-flow__handle[data-id="${a}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: p, y } = Dt(e), w = s.elementFromPoint(p, y), E = w != null && w.classList.contains(`${l}-flow__handle`) ? w : f, h = {
    handleDomNode: E,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (E) {
    const x = Dm(void 0, E), g = E.getAttribute("data-nodeid"), v = E.getAttribute("data-handleid"), S = E.classList.contains("connectable"), _ = E.classList.contains("connectableend");
    if (!g || !x)
      return h;
    const N = {
      source: c ? g : r,
      sourceHandle: c ? v : o,
      target: c ? r : g,
      targetHandle: c ? o : v
    };
    h.connection = N;
    const T = S && _ && (n === eo.Strict ? c && x === "source" || !c && x === "target" : g !== r || v !== o);
    h.isValid = T && u(N), h.toHandle = Am(g, x, v, d, n, !0);
  }
  return h;
}
const Uu = {
  onPointerDown: xN,
  isValid: jm
};
function vN({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = it(e);
  function i({ translateExtent: l, width: a, height: u, zoomStep: d = 1, pannable: c = !0, zoomable: f = !0, inversePan: p = !1 }) {
    const y = (g) => {
      if (g.sourceEvent.type !== "wheel" || !t)
        return;
      const v = n(), S = g.sourceEvent.ctrlKey && ci() ? 10 : 1, _ = -g.sourceEvent.deltaY * (g.sourceEvent.deltaMode === 1 ? 0.05 : g.sourceEvent.deltaMode ? 1 : 2e-3) * d, N = v[2] * Math.pow(2, _ * S);
      t.scaleTo(N);
    };
    let w = [0, 0];
    const E = (g) => {
      (g.sourceEvent.type === "mousedown" || g.sourceEvent.type === "touchstart") && (w = [
        g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
        g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY
      ]);
    }, h = (g) => {
      const v = n();
      if (g.sourceEvent.type !== "mousemove" && g.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
        g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY
      ], _ = [S[0] - w[0], S[1] - w[1]];
      w = S;
      const N = r() * Math.max(v[2], Math.log(v[2])) * (p ? -1 : 1), k = {
        x: v[0] - _[0] * N,
        y: v[1] - _[1] * N
      }, T = [
        [0, 0],
        [a, u]
      ];
      t.setViewportConstrained({
        x: k.x,
        y: k.y,
        zoom: v[2]
      }, T, l);
    }, x = cm().on("start", E).on("zoom", c ? h : null).on("zoom.wheel", f ? y : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Ct
  };
}
const ia = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ua = ({ x: e, y: t, zoom: n }) => na.translate(e, t).scale(n), Ir = (e, t) => e.target.closest(`.${t}`), Rm = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), wN = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Ka = (e, t = 0, n = wN, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Fm = (e) => {
  const t = e.ctrlKey && ci() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function SN({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: l, onPanZoom: a, onPanZoomEnd: u }) {
  return (d) => {
    if (Ir(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const c = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const E = Ct(d), h = Fm(d), x = c * Math.pow(2, h);
      r.scaleTo(n, x, E, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let p = o === ir.Vertical ? 0 : d.deltaX * f, y = o === ir.Horizontal ? 0 : d.deltaY * f;
    !ci() && d.shiftKey && o !== ir.Vertical && (p = d.deltaY * f, y = 0), r.translateBy(
      n,
      -(p / c) * i,
      -(y / c) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const w = ia(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (a == null || a(d, w), e.panScrollTimeout = setTimeout(() => {
      u == null || u(d, w), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, l == null || l(d, w));
  };
}
function EN({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, l = Ir(r, e);
    if (r.ctrlKey && i && l && r.preventDefault(), s || l)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function _N({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, l;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = ia(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function bN({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, l;
    e.usedRightMouseButton = !!(n && Rm(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((l = i.sourceEvent) != null && l.internal) && (o == null || o(i.sourceEvent, ia(i.transform)));
  };
}
function NN({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var l;
    if (!((l = s.sourceEvent) != null && l.internal) && (e.isZoomingOrPanning = !1, i && Rm(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = ia(s.transform);
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
function kN({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: l, noPanClassName: a, lib: u, connectionInProgress: d }) {
  return (c) => {
    var E;
    const f = e || t, p = n && c.ctrlKey, y = c.type === "wheel";
    if (c.button === 1 && c.type === "mousedown" && (Ir(c, `${u}-flow__node`) || Ir(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !y || Ir(c, l) && y || Ir(c, a) && (!y || o && y && !e) || !n && c.ctrlKey && y)
      return !1;
    if (!n && c.type === "touchstart" && ((E = c.touches) == null ? void 0 : E.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !p && y || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || y) && w;
  };
}
function CN({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: a }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), c = cm().scaleExtent([t, n]).translateExtent(r), f = it(e).call(c);
  x({
    x: o.x,
    y: o.y,
    zoom: to(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const p = f.on("wheel.zoom"), y = f.on("dblclick.zoom");
  c.wheelDelta(Fm);
  function w(A, M) {
    return f ? new Promise(($) => {
      c == null || c.interpolate((M == null ? void 0 : M.interpolate) === "linear" ? Bo : Ls).transform(Ka(f, M == null ? void 0 : M.duration, M == null ? void 0 : M.ease, () => $(!0)), A);
    }) : Promise.resolve(!1);
  }
  function E({ noWheelClassName: A, noPanClassName: M, onPaneContextMenu: $, userSelectionActive: I, panOnScroll: j, panOnDrag: L, panOnScrollMode: F, panOnScrollSpeed: C, preventScrolling: P, zoomOnPinch: R, zoomOnScroll: O, zoomOnDoubleClick: z, zoomActivationKeyPressed: U, lib: V, onTransformChange: X, connectionInProgress: G, paneClickDistance: Q, selectionOnDrag: B }) {
    I && !u.isZoomingOrPanning && h();
    const q = j && !U && !I;
    c.clickDistance(B ? 1 / 0 : !At(Q) || Q < 0 ? 0 : Q);
    const ie = q ? SN({
      zoomPanValues: u,
      noWheelClassName: A,
      d3Selection: f,
      d3Zoom: c,
      panOnScrollMode: F,
      panOnScrollSpeed: C,
      zoomOnPinch: R,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : EN({
      noWheelClassName: A,
      preventScrolling: P,
      d3ZoomHandler: p
    });
    if (f.on("wheel.zoom", ie, { passive: !1 }), !I) {
      const J = _N({
        zoomPanValues: u,
        onDraggingChange: a,
        onPanZoomStart: s
      });
      c.on("start", J);
      const ee = bN({
        zoomPanValues: u,
        panOnDrag: L,
        onPaneContextMenu: !!$,
        onPanZoom: i,
        onTransformChange: X
      });
      c.on("zoom", ee);
      const ce = NN({
        zoomPanValues: u,
        panOnDrag: L,
        panOnScroll: j,
        onPaneContextMenu: $,
        onPanZoomEnd: l,
        onDraggingChange: a
      });
      c.on("end", ce);
    }
    const te = kN({
      zoomActivationKeyPressed: U,
      panOnDrag: L,
      zoomOnScroll: O,
      panOnScroll: j,
      zoomOnDoubleClick: z,
      zoomOnPinch: R,
      userSelectionActive: I,
      noPanClassName: M,
      noWheelClassName: A,
      lib: V,
      connectionInProgress: G
    });
    c.filter(te), z ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function h() {
    c.on("zoom", null);
  }
  async function x(A, M, $) {
    const I = Ua(A), j = c == null ? void 0 : c.constrain()(I, M, $);
    return j && await w(j), new Promise((L) => L(j));
  }
  async function g(A, M) {
    const $ = Ua(A);
    return await w($, M), new Promise((I) => I($));
  }
  function v(A) {
    if (f) {
      const M = Ua(A), $ = f.property("__zoom");
      ($.k !== A.zoom || $.x !== A.x || $.y !== A.y) && (c == null || c.transform(f, M, null, { sync: !0 }));
    }
  }
  function S() {
    const A = f ? um(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: A.x, y: A.y, zoom: A.k };
  }
  function _(A, M) {
    return f ? new Promise(($) => {
      c == null || c.interpolate((M == null ? void 0 : M.interpolate) === "linear" ? Bo : Ls).scaleTo(Ka(f, M == null ? void 0 : M.duration, M == null ? void 0 : M.ease, () => $(!0)), A);
    }) : Promise.resolve(!1);
  }
  function N(A, M) {
    return f ? new Promise(($) => {
      c == null || c.interpolate((M == null ? void 0 : M.interpolate) === "linear" ? Bo : Ls).scaleBy(Ka(f, M == null ? void 0 : M.duration, M == null ? void 0 : M.ease, () => $(!0)), A);
    }) : Promise.resolve(!1);
  }
  function k(A) {
    c == null || c.scaleExtent(A);
  }
  function T(A) {
    c == null || c.translateExtent(A);
  }
  function D(A) {
    const M = !At(A) || A < 0 ? 0 : A;
    c == null || c.clickDistance(M);
  }
  return {
    update: E,
    destroy: h,
    setViewport: g,
    setViewportConstrained: x,
    getViewport: S,
    scaleTo: _,
    scaleBy: N,
    setScaleExtent: k,
    setTranslateExtent: T,
    syncViewport: v,
    setClickDistance: D
  };
}
var oo;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(oo || (oo = {}));
function IN({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const s = e - t, l = n - r, a = [s > 0 ? 1 : s < 0 ? -1 : 0, l > 0 ? 1 : l < 0 ? -1 : 0];
  return s && o && (a[0] = a[0] * -1), l && i && (a[1] = a[1] * -1), a;
}
function gh(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), r = e.includes("left"), o = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: o
  };
}
function Sn(e, t) {
  return Math.max(0, t - e);
}
function En(e, t) {
  return Math.max(0, e - t);
}
function as(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function mh(e, t) {
  return e ? !t : t;
}
function TN(e, t, n, r, o, i, s, l) {
  let { affectsX: a, affectsY: u } = t;
  const { isHorizontal: d, isVertical: c } = t, f = d && c, { xSnapped: p, ySnapped: y } = n, { minWidth: w, maxWidth: E, minHeight: h, maxHeight: x } = r, { x: g, y: v, width: S, height: _, aspectRatio: N } = e;
  let k = Math.floor(d ? p - e.pointerX : 0), T = Math.floor(c ? y - e.pointerY : 0);
  const D = S + (a ? -k : k), A = _ + (u ? -T : T), M = -i[0] * S, $ = -i[1] * _;
  let I = as(D, w, E), j = as(A, h, x);
  if (s) {
    let C = 0, P = 0;
    a && k < 0 ? C = Sn(g + k + M, s[0][0]) : !a && k > 0 && (C = En(g + D + M, s[1][0])), u && T < 0 ? P = Sn(v + T + $, s[0][1]) : !u && T > 0 && (P = En(v + A + $, s[1][1])), I = Math.max(I, C), j = Math.max(j, P);
  }
  if (l) {
    let C = 0, P = 0;
    a && k > 0 ? C = En(g + k, l[0][0]) : !a && k < 0 && (C = Sn(g + D, l[1][0])), u && T > 0 ? P = En(v + T, l[0][1]) : !u && T < 0 && (P = Sn(v + A, l[1][1])), I = Math.max(I, C), j = Math.max(j, P);
  }
  if (o) {
    if (d) {
      const C = as(D / N, h, x) * N;
      if (I = Math.max(I, C), s) {
        let P = 0;
        !a && !u || a && !u && f ? P = En(v + $ + D / N, s[1][1]) * N : P = Sn(v + $ + (a ? k : -k) / N, s[0][1]) * N, I = Math.max(I, P);
      }
      if (l) {
        let P = 0;
        !a && !u || a && !u && f ? P = Sn(v + D / N, l[1][1]) * N : P = En(v + (a ? k : -k) / N, l[0][1]) * N, I = Math.max(I, P);
      }
    }
    if (c) {
      const C = as(A * N, w, E) / N;
      if (j = Math.max(j, C), s) {
        let P = 0;
        !a && !u || u && !a && f ? P = En(g + A * N + M, s[1][0]) / N : P = Sn(g + (u ? T : -T) * N + M, s[0][0]) / N, j = Math.max(j, P);
      }
      if (l) {
        let P = 0;
        !a && !u || u && !a && f ? P = Sn(g + A * N, l[1][0]) / N : P = En(g + (u ? T : -T) * N, l[0][0]) / N, j = Math.max(j, P);
      }
    }
  }
  T = T + (T < 0 ? j : -j), k = k + (k < 0 ? I : -I), o && (f ? D > A * N ? T = (mh(a, u) ? -k : k) / N : k = (mh(a, u) ? -T : T) * N : d ? (T = k / N, u = a) : (k = T * N, a = u));
  const L = a ? g + k : g, F = u ? v + T : v;
  return {
    width: S + (a ? -k : k),
    height: _ + (u ? -T : T),
    x: i[0] * k * (a ? -1 : 1) + L,
    y: i[1] * T * (u ? -1 : 1) + F
  };
}
const Om = { width: 0, height: 0, x: 0, y: 0 }, PN = {
  ...Om,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function MN(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function AN(e, t, n) {
  const r = t.position.x + e.position.x, o = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, l = n[0] * i, a = n[1] * s;
  return [
    [r - l, o - a],
    [r + i - l, o + s - a]
  ];
}
function DN({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = it(e);
  let s = {
    controlDirection: gh("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function l({ controlPosition: u, boundaries: d, keepAspectRatio: c, resizeDirection: f, onResizeStart: p, onResize: y, onResizeEnd: w, shouldResize: E }) {
    let h = { ...Om }, x = { ...PN };
    s = {
      boundaries: d,
      resizeDirection: f,
      keepAspectRatio: c,
      controlDirection: gh(u)
    };
    let g, v = null, S = [], _, N, k, T = !1;
    const D = Gg().on("start", (A) => {
      const { nodeLookup: M, transform: $, snapGrid: I, snapToGrid: j, nodeOrigin: L, paneDomNode: F } = n();
      if (g = M.get(t), !g)
        return;
      v = (F == null ? void 0 : F.getBoundingClientRect()) ?? null;
      const { xSnapped: C, ySnapped: P } = Uo(A.sourceEvent, {
        transform: $,
        snapGrid: I,
        snapToGrid: j,
        containerBounds: v
      });
      h = {
        width: g.measured.width ?? 0,
        height: g.measured.height ?? 0,
        x: g.position.x ?? 0,
        y: g.position.y ?? 0
      }, x = {
        ...h,
        pointerX: C,
        pointerY: P,
        aspectRatio: h.width / h.height
      }, _ = void 0, g.parentId && (g.extent === "parent" || g.expandParent) && (_ = M.get(g.parentId), N = _ && g.extent === "parent" ? MN(_) : void 0), S = [], k = void 0;
      for (const [R, O] of M)
        if (O.parentId === t && (S.push({
          id: R,
          position: { ...O.position },
          extent: O.extent
        }), O.extent === "parent" || O.expandParent)) {
          const z = AN(O, g, O.origin ?? L);
          k ? k = [
            [Math.min(z[0][0], k[0][0]), Math.min(z[0][1], k[0][1])],
            [Math.max(z[1][0], k[1][0]), Math.max(z[1][1], k[1][1])]
          ] : k = z;
        }
      p == null || p(A, { ...h });
    }).on("drag", (A) => {
      const { transform: M, snapGrid: $, snapToGrid: I, nodeOrigin: j } = n(), L = Uo(A.sourceEvent, {
        transform: M,
        snapGrid: $,
        snapToGrid: I,
        containerBounds: v
      }), F = [];
      if (!g)
        return;
      const { x: C, y: P, width: R, height: O } = h, z = {}, U = g.origin ?? j, { width: V, height: X, x: G, y: Q } = TN(x, s.controlDirection, L, s.boundaries, s.keepAspectRatio, U, N, k), B = V !== R, q = X !== O, ie = G !== C && B, te = Q !== P && q;
      if (!ie && !te && !B && !q)
        return;
      if ((ie || te || U[0] === 1 || U[1] === 1) && (z.x = ie ? G : h.x, z.y = te ? Q : h.y, h.x = z.x, h.y = z.y, S.length > 0)) {
        const pe = G - C, ue = Q - P;
        for (const Ae of S)
          Ae.position = {
            x: Ae.position.x - pe + U[0] * (V - R),
            y: Ae.position.y - ue + U[1] * (X - O)
          }, F.push(Ae);
      }
      if ((B || q) && (z.width = B && (!s.resizeDirection || s.resizeDirection === "horizontal") ? V : h.width, z.height = q && (!s.resizeDirection || s.resizeDirection === "vertical") ? X : h.height, h.width = z.width, h.height = z.height), _ && g.expandParent) {
        const pe = U[0] * (z.width ?? 0);
        z.x && z.x < pe && (h.x = pe, x.x = x.x - (z.x - pe));
        const ue = U[1] * (z.height ?? 0);
        z.y && z.y < ue && (h.y = ue, x.y = x.y - (z.y - ue));
      }
      const J = IN({
        width: h.width,
        prevWidth: R,
        height: h.height,
        prevHeight: O,
        affectsX: s.controlDirection.affectsX,
        affectsY: s.controlDirection.affectsY
      }), ee = { ...h, direction: J };
      (E == null ? void 0 : E(A, ee)) !== !1 && (T = !0, y == null || y(A, ee), r(z, F));
    }).on("end", (A) => {
      T && (w == null || w(A, { ...h }), o == null || o({ ...h }), T = !1);
    });
    i.call(D);
  }
  function a() {
    i.on(".drag", null);
  }
  return {
    update: l,
    destroy: a
  };
}
var zm = { exports: {} }, $m = {}, Hm = { exports: {} }, Vm = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io = b;
function LN(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jN = typeof Object.is == "function" ? Object.is : LN, RN = io.useState, FN = io.useEffect, ON = io.useLayoutEffect, zN = io.useDebugValue;
function $N(e, t) {
  var n = t(), r = RN({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return ON(
    function() {
      o.value = n, o.getSnapshot = t, Wa(o) && i({ inst: o });
    },
    [e, n, t]
  ), FN(
    function() {
      return Wa(o) && i({ inst: o }), e(function() {
        Wa(o) && i({ inst: o });
      });
    },
    [e]
  ), zN(n), n;
}
function Wa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jN(e, n);
  } catch {
    return !0;
  }
}
function HN(e, t) {
  return t();
}
var VN = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? HN : $N;
Vm.useSyncExternalStore = io.useSyncExternalStore !== void 0 ? io.useSyncExternalStore : VN;
Hm.exports = Vm;
var BN = Hm.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa = b, UN = BN;
function KN(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var WN = typeof Object.is == "function" ? Object.is : KN, YN = UN.useSyncExternalStore, XN = sa.useRef, GN = sa.useEffect, QN = sa.useMemo, ZN = sa.useDebugValue;
$m.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = XN(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = QN(
    function() {
      function a(p) {
        if (!u) {
          if (u = !0, d = p, p = r(p), o !== void 0 && s.hasValue) {
            var y = s.value;
            if (o(y, p))
              return c = y;
          }
          return c = p;
        }
        if (y = c, WN(d, p)) return y;
        var w = r(p);
        return o !== void 0 && o(y, w) ? (d = p, y) : (d = p, c = w);
      }
      var u = !1, d, c, f = n === void 0 ? null : n;
      return [
        function() {
          return a(t());
        },
        f === null ? void 0 : function() {
          return a(f());
        }
      ];
    },
    [t, n, r, o]
  );
  var l = YN(e, i[0], i[1]);
  return GN(
    function() {
      s.hasValue = !0, s.value = l;
    },
    [l]
  ), ZN(l), l;
};
zm.exports = $m;
var qN = zm.exports;
const JN = /* @__PURE__ */ rg(qN), ek = {}, yh = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, c) => {
    const f = typeof d == "function" ? d(t) : d;
    if (!Object.is(f, t)) {
      const p = t;
      t = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((y) => y(t, p));
    }
  }, o = () => t, a = { setState: r, getState: o, getInitialState: () => u, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (ek ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, u = t = e(r, o, a);
  return a;
}, tk = (e) => e ? yh(e) : yh, { useDebugValue: nk } = Tw, { useSyncExternalStoreWithSelector: rk } = JN, ok = (e) => e;
function Bm(e, t = ok, n) {
  const r = rk(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return nk(r), r;
}
const xh = (e, t) => {
  const n = tk(e), r = (o, i = t) => Bm(n, o, i);
  return Object.assign(r, n), r;
}, ik = (e, t) => e ? xh(e, t) : xh;
function we(e, t) {
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
var Um = { exports: {} }, dt = {}, Km = { exports: {} }, Wm = {};
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
  function t(C, P) {
    var R = C.length;
    C.push(P);
    e: for (; 0 < R; ) {
      var O = R - 1 >>> 1, z = C[O];
      if (0 < o(z, P)) C[O] = P, C[R] = z, R = O;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0], R = C.pop();
    if (R !== P) {
      C[0] = R;
      e: for (var O = 0, z = C.length, U = z >>> 1; O < U; ) {
        var V = 2 * (O + 1) - 1, X = C[V], G = V + 1, Q = C[G];
        if (0 > o(X, R)) G < z && 0 > o(Q, X) ? (C[O] = Q, C[G] = R, O = G) : (C[O] = X, C[V] = R, O = V);
        else if (G < z && 0 > o(Q, R)) C[O] = Q, C[G] = R, O = G;
        else break e;
      }
    }
    return P;
  }
  function o(C, P) {
    var R = C.sortIndex - P.sortIndex;
    return R !== 0 ? R : C.id - P.id;
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
  var a = [], u = [], d = 1, c = null, f = 3, p = !1, y = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(C) {
    for (var P = n(u); P !== null; ) {
      if (P.callback === null) r(u);
      else if (P.startTime <= C) r(u), P.sortIndex = P.expirationTime, t(a, P);
      else break;
      P = n(u);
    }
  }
  function v(C) {
    if (w = !1, g(C), !y) if (n(a) !== null) y = !0, L(S);
    else {
      var P = n(u);
      P !== null && F(v, P.startTime - C);
    }
  }
  function S(C, P) {
    y = !1, w && (w = !1, h(k), k = -1), p = !0;
    var R = f;
    try {
      for (g(P), c = n(a); c !== null && (!(c.expirationTime > P) || C && !A()); ) {
        var O = c.callback;
        if (typeof O == "function") {
          c.callback = null, f = c.priorityLevel;
          var z = O(c.expirationTime <= P);
          P = e.unstable_now(), typeof z == "function" ? c.callback = z : c === n(a) && r(a), g(P);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var U = !0;
      else {
        var V = n(u);
        V !== null && F(v, V.startTime - P), U = !1;
      }
      return U;
    } finally {
      c = null, f = R, p = !1;
    }
  }
  var _ = !1, N = null, k = -1, T = 5, D = -1;
  function A() {
    return !(e.unstable_now() - D < T);
  }
  function M() {
    if (N !== null) {
      var C = e.unstable_now();
      D = C;
      var P = !0;
      try {
        P = N(!0, C);
      } finally {
        P ? $() : (_ = !1, N = null);
      }
    } else _ = !1;
  }
  var $;
  if (typeof x == "function") $ = function() {
    x(M);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), j = I.port2;
    I.port1.onmessage = M, $ = function() {
      j.postMessage(null);
    };
  } else $ = function() {
    E(M, 0);
  };
  function L(C) {
    N = C, _ || (_ = !0, $());
  }
  function F(C, P) {
    k = E(function() {
      C(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    y || p || (y = !0, L(S));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(C) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = f;
    }
    var R = f;
    f = P;
    try {
      return C();
    } finally {
      f = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, P) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var R = f;
    f = C;
    try {
      return P();
    } finally {
      f = R;
    }
  }, e.unstable_scheduleCallback = function(C, P, R) {
    var O = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? O + R : O) : R = O, C) {
      case 1:
        var z = -1;
        break;
      case 2:
        z = 250;
        break;
      case 5:
        z = 1073741823;
        break;
      case 4:
        z = 1e4;
        break;
      default:
        z = 5e3;
    }
    return z = R + z, C = { id: d++, callback: P, priorityLevel: C, startTime: R, expirationTime: z, sortIndex: -1 }, R > O ? (C.sortIndex = R, t(u, C), n(a) === null && C === n(u) && (w ? (h(k), k = -1) : w = !0, F(v, R - O))) : (C.sortIndex = z, t(a, C), y || p || (y = !0, L(S))), C;
  }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(C) {
    var P = f;
    return function() {
      var R = f;
      f = P;
      try {
        return C.apply(this, arguments);
      } finally {
        f = R;
      }
    };
  };
})(Wm);
Km.exports = Wm;
var sk = Km.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lk = b, ct = sk;
function H(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ym = /* @__PURE__ */ new Set(), di = {};
function wr(e, t) {
  so(e, t), so(e + "Capture", t);
}
function so(e, t) {
  for (di[e] = t, e = 0; e < t.length; e++) Ym.add(t[e]);
}
var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ku = Object.prototype.hasOwnProperty, ak = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, vh = {}, wh = {};
function uk(e) {
  return Ku.call(wh, e) ? !0 : Ku.call(vh, e) ? !1 : ak.test(e) ? wh[e] = !0 : (vh[e] = !0, !1);
}
function ck(e, t, n, r) {
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
function dk(e, t, n, r) {
  if (t === null || typeof t > "u" || ck(e, t, n, r)) return !0;
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
function Ge(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ze[e] = new Ge(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ze[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ze[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ze[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ze[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ze[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ze[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ze[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ze[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gd = /[\-:]([a-z])/g;
function md(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    gd,
    md
  );
  ze[t] = new Ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(gd, md);
  ze[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(gd, md);
  ze[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ze[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ze[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yd(e, t, n, r) {
  var o = ze.hasOwnProperty(t) ? ze[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (dk(t, n, o, r) && (n = null), r || o === null ? uk(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xn = lk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, us = Symbol.for("react.element"), Tr = Symbol.for("react.portal"), Pr = Symbol.for("react.fragment"), xd = Symbol.for("react.strict_mode"), Wu = Symbol.for("react.profiler"), Xm = Symbol.for("react.provider"), Gm = Symbol.for("react.context"), vd = Symbol.for("react.forward_ref"), Yu = Symbol.for("react.suspense"), Xu = Symbol.for("react.suspense_list"), wd = Symbol.for("react.memo"), kn = Symbol.for("react.lazy"), Qm = Symbol.for("react.offscreen"), Sh = Symbol.iterator;
function ko(e) {
  return e === null || typeof e != "object" ? null : (e = Sh && e[Sh] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ne = Object.assign, Ya;
function zo(e) {
  if (Ya === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ya = t && t[1] || "";
  }
  return `
` + Ya + e;
}
var Xa = !1;
function Ga(e, t) {
  if (!e || Xa) return "";
  Xa = !0;
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
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
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
    Xa = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zo(e) : "";
}
function fk(e) {
  switch (e.tag) {
    case 5:
      return zo(e.type);
    case 16:
      return zo("Lazy");
    case 13:
      return zo("Suspense");
    case 19:
      return zo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ga(e.type, !1), e;
    case 11:
      return e = Ga(e.type.render, !1), e;
    case 1:
      return e = Ga(e.type, !0), e;
    default:
      return "";
  }
}
function Gu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Pr:
      return "Fragment";
    case Tr:
      return "Portal";
    case Wu:
      return "Profiler";
    case xd:
      return "StrictMode";
    case Yu:
      return "Suspense";
    case Xu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Gm:
      return (e.displayName || "Context") + ".Consumer";
    case Xm:
      return (e._context.displayName || "Context") + ".Provider";
    case vd:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case wd:
      return t = e.displayName || null, t !== null ? t : Gu(e.type) || "Memo";
    case kn:
      t = e._payload, e = e._init;
      try {
        return Gu(e(t));
      } catch {
      }
  }
  return null;
}
function hk(e) {
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
      return Gu(t);
    case 8:
      return t === xd ? "StrictMode" : "Mode";
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
function Bn(e) {
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
function Zm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function pk(e) {
  var t = Zm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function cs(e) {
  e._valueTracker || (e._valueTracker = pk(e));
}
function qm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Zm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function pl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Qu(e, t) {
  var n = t.checked;
  return Ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Eh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Bn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Jm(e, t) {
  t = t.checked, t != null && yd(e, "checked", t, !1);
}
function Zu(e, t) {
  Jm(e, t);
  var n = Bn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? qu(e, t.type, n) : t.hasOwnProperty("defaultValue") && qu(e, t.type, Bn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _h(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function qu(e, t, n) {
  (t !== "number" || pl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $o = Array.isArray;
function Ur(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ju(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return Ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function bh(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(H(92));
      if ($o(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Bn(n) };
}
function ey(e, t) {
  var n = Bn(t.value), r = Bn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Nh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ty(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ec(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ty(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ds, ny = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ds = ds || document.createElement("div"), ds.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ds.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function fi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ko = {
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
}, gk = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ko).forEach(function(e) {
  gk.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ko[t] = Ko[e];
  });
});
function ry(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ko.hasOwnProperty(e) && Ko[e] ? ("" + t).trim() : t + "px";
}
function oy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = ry(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var mk = Ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function tc(e, t) {
  if (t) {
    if (mk[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function nc(e, t) {
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
var rc = null;
function Sd(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var oc = null, Kr = null, Wr = null;
function kh(e) {
  if (e = Ki(e)) {
    if (typeof oc != "function") throw Error(H(280));
    var t = e.stateNode;
    t && (t = da(t), oc(e.stateNode, e.type, t));
  }
}
function iy(e) {
  Kr ? Wr ? Wr.push(e) : Wr = [e] : Kr = e;
}
function sy() {
  if (Kr) {
    var e = Kr, t = Wr;
    if (Wr = Kr = null, kh(e), t) for (e = 0; e < t.length; e++) kh(t[e]);
  }
}
function ly(e, t) {
  return e(t);
}
function ay() {
}
var Qa = !1;
function uy(e, t, n) {
  if (Qa) return e(t, n);
  Qa = !0;
  try {
    return ly(e, t, n);
  } finally {
    Qa = !1, (Kr !== null || Wr !== null) && (ay(), sy());
  }
}
function hi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = da(n);
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
var ic = !1;
if (hn) try {
  var Co = {};
  Object.defineProperty(Co, "passive", { get: function() {
    ic = !0;
  } }), window.addEventListener("test", Co, Co), window.removeEventListener("test", Co, Co);
} catch {
  ic = !1;
}
function yk(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Wo = !1, gl = null, ml = !1, sc = null, xk = { onError: function(e) {
  Wo = !0, gl = e;
} };
function vk(e, t, n, r, o, i, s, l, a) {
  Wo = !1, gl = null, yk.apply(xk, arguments);
}
function wk(e, t, n, r, o, i, s, l, a) {
  if (vk.apply(this, arguments), Wo) {
    if (Wo) {
      var u = gl;
      Wo = !1, gl = null;
    } else throw Error(H(198));
    ml || (ml = !0, sc = u);
  }
}
function Sr(e) {
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
function cy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ch(e) {
  if (Sr(e) !== e) throw Error(H(188));
}
function Sk(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Sr(e), t === null) throw Error(H(188));
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
        if (i === n) return Ch(o), e;
        if (i === r) return Ch(o), t;
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
function dy(e) {
  return e = Sk(e), e !== null ? fy(e) : null;
}
function fy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hy = ct.unstable_scheduleCallback, Ih = ct.unstable_cancelCallback, Ek = ct.unstable_shouldYield, _k = ct.unstable_requestPaint, Ce = ct.unstable_now, bk = ct.unstable_getCurrentPriorityLevel, Ed = ct.unstable_ImmediatePriority, py = ct.unstable_UserBlockingPriority, yl = ct.unstable_NormalPriority, Nk = ct.unstable_LowPriority, gy = ct.unstable_IdlePriority, la = null, Wt = null;
function kk(e) {
  if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
    Wt.onCommitFiberRoot(la, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Lt = Math.clz32 ? Math.clz32 : Tk, Ck = Math.log, Ik = Math.LN2;
function Tk(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ck(e) / Ik | 0) | 0;
}
var fs = 64, hs = 4194304;
function Ho(e) {
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
function xl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = Ho(l) : (i &= s, i !== 0 && (r = Ho(i)));
  } else s = n & ~o, s !== 0 ? r = Ho(s) : i !== 0 && (r = Ho(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Lt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Pk(e, t) {
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
function Mk(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Lt(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = Pk(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function lc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function my() {
  var e = fs;
  return fs <<= 1, !(fs & 4194240) && (fs = 64), e;
}
function Za(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Bi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Lt(t), e[t] = n;
}
function Ak(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Lt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function _d(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Lt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var he = 0;
function yy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var xy, bd, vy, wy, Sy, ac = !1, ps = [], Dn = null, Ln = null, jn = null, pi = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map(), Tn = [], Dk = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Th(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dn = null;
      break;
    case "dragenter":
    case "dragleave":
      Ln = null;
      break;
    case "mouseover":
    case "mouseout":
      jn = null;
      break;
    case "pointerover":
    case "pointerout":
      pi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gi.delete(t.pointerId);
  }
}
function Io(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ki(t), t !== null && bd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Lk(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Dn = Io(Dn, e, t, n, r, o), !0;
    case "dragenter":
      return Ln = Io(Ln, e, t, n, r, o), !0;
    case "mouseover":
      return jn = Io(jn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return pi.set(i, Io(pi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, gi.set(i, Io(gi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Ey(e) {
  var t = er(e.target);
  if (t !== null) {
    var n = Sr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = cy(n), t !== null) {
          e.blockedOn = t, Sy(e.priority, function() {
            vy(n);
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
function Os(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = uc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      rc = r, n.target.dispatchEvent(r), rc = null;
    } else return t = Ki(n), t !== null && bd(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ph(e, t, n) {
  Os(e) && n.delete(t);
}
function jk() {
  ac = !1, Dn !== null && Os(Dn) && (Dn = null), Ln !== null && Os(Ln) && (Ln = null), jn !== null && Os(jn) && (jn = null), pi.forEach(Ph), gi.forEach(Ph);
}
function To(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ac || (ac = !0, ct.unstable_scheduleCallback(ct.unstable_NormalPriority, jk)));
}
function mi(e) {
  function t(o) {
    return To(o, e);
  }
  if (0 < ps.length) {
    To(ps[0], e);
    for (var n = 1; n < ps.length; n++) {
      var r = ps[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Dn !== null && To(Dn, e), Ln !== null && To(Ln, e), jn !== null && To(jn, e), pi.forEach(t), gi.forEach(t), n = 0; n < Tn.length; n++) r = Tn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tn.length && (n = Tn[0], n.blockedOn === null); ) Ey(n), n.blockedOn === null && Tn.shift();
}
var Yr = xn.ReactCurrentBatchConfig, vl = !0;
function Rk(e, t, n, r) {
  var o = he, i = Yr.transition;
  Yr.transition = null;
  try {
    he = 1, Nd(e, t, n, r);
  } finally {
    he = o, Yr.transition = i;
  }
}
function Fk(e, t, n, r) {
  var o = he, i = Yr.transition;
  Yr.transition = null;
  try {
    he = 4, Nd(e, t, n, r);
  } finally {
    he = o, Yr.transition = i;
  }
}
function Nd(e, t, n, r) {
  if (vl) {
    var o = uc(e, t, n, r);
    if (o === null) lu(e, t, r, wl, n), Th(e, r);
    else if (Lk(o, e, t, n, r)) r.stopPropagation();
    else if (Th(e, r), t & 4 && -1 < Dk.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ki(o);
        if (i !== null && xy(i), i = uc(e, t, n, r), i === null && lu(e, t, r, wl, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else lu(e, t, r, null, n);
  }
}
var wl = null;
function uc(e, t, n, r) {
  if (wl = null, e = Sd(r), e = er(e), e !== null) if (t = Sr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = cy(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return wl = e, null;
}
function _y(e) {
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
      switch (bk()) {
        case Ed:
          return 1;
        case py:
          return 4;
        case yl:
        case Nk:
          return 16;
        case gy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mn = null, kd = null, zs = null;
function by() {
  if (zs) return zs;
  var e, t = kd, n = t.length, r, o = "value" in Mn ? Mn.value : Mn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return zs = o.slice(e, 1 < r ? 1 - r : void 0);
}
function $s(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gs() {
  return !0;
}
function Mh() {
  return !1;
}
function ft(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? gs : Mh, this.isPropagationStopped = Mh, this;
  }
  return Ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gs);
  }, persist: function() {
  }, isPersistent: gs }), t;
}
var wo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Cd = ft(wo), Ui = Ne({}, wo, { view: 0, detail: 0 }), Ok = ft(Ui), qa, Ja, Po, aa = Ne({}, Ui, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Id, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Po && (Po && e.type === "mousemove" ? (qa = e.screenX - Po.screenX, Ja = e.screenY - Po.screenY) : Ja = qa = 0, Po = e), qa);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ja;
} }), Ah = ft(aa), zk = Ne({}, aa, { dataTransfer: 0 }), $k = ft(zk), Hk = Ne({}, Ui, { relatedTarget: 0 }), eu = ft(Hk), Vk = Ne({}, wo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bk = ft(Vk), Uk = Ne({}, wo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Kk = ft(Uk), Wk = Ne({}, wo, { data: 0 }), Dh = ft(Wk), Yk = {
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
}, Xk = {
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
}, Gk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Qk(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gk[e]) ? !!t[e] : !1;
}
function Id() {
  return Qk;
}
var Zk = Ne({}, Ui, { key: function(e) {
  if (e.key) {
    var t = Yk[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = $s(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xk[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Id, charCode: function(e) {
  return e.type === "keypress" ? $s(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? $s(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), qk = ft(Zk), Jk = Ne({}, aa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lh = ft(Jk), eC = Ne({}, Ui, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Id }), tC = ft(eC), nC = Ne({}, wo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rC = ft(nC), oC = Ne({}, aa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), iC = ft(oC), sC = [9, 13, 27, 32], Td = hn && "CompositionEvent" in window, Yo = null;
hn && "documentMode" in document && (Yo = document.documentMode);
var lC = hn && "TextEvent" in window && !Yo, Ny = hn && (!Td || Yo && 8 < Yo && 11 >= Yo), jh = " ", Rh = !1;
function ky(e, t) {
  switch (e) {
    case "keyup":
      return sC.indexOf(t.keyCode) !== -1;
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
function Cy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Mr = !1;
function aC(e, t) {
  switch (e) {
    case "compositionend":
      return Cy(t);
    case "keypress":
      return t.which !== 32 ? null : (Rh = !0, jh);
    case "textInput":
      return e = t.data, e === jh && Rh ? null : e;
    default:
      return null;
  }
}
function uC(e, t) {
  if (Mr) return e === "compositionend" || !Td && ky(e, t) ? (e = by(), zs = kd = Mn = null, Mr = !1, e) : null;
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
      return Ny && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cC = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Fh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cC[e.type] : t === "textarea";
}
function Iy(e, t, n, r) {
  iy(r), t = Sl(t, "onChange"), 0 < t.length && (n = new Cd("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Xo = null, yi = null;
function dC(e) {
  zy(e, 0);
}
function ua(e) {
  var t = Lr(e);
  if (qm(t)) return e;
}
function fC(e, t) {
  if (e === "change") return t;
}
var Ty = !1;
if (hn) {
  var tu;
  if (hn) {
    var nu = "oninput" in document;
    if (!nu) {
      var Oh = document.createElement("div");
      Oh.setAttribute("oninput", "return;"), nu = typeof Oh.oninput == "function";
    }
    tu = nu;
  } else tu = !1;
  Ty = tu && (!document.documentMode || 9 < document.documentMode);
}
function zh() {
  Xo && (Xo.detachEvent("onpropertychange", Py), yi = Xo = null);
}
function Py(e) {
  if (e.propertyName === "value" && ua(yi)) {
    var t = [];
    Iy(t, yi, e, Sd(e)), uy(dC, t);
  }
}
function hC(e, t, n) {
  e === "focusin" ? (zh(), Xo = t, yi = n, Xo.attachEvent("onpropertychange", Py)) : e === "focusout" && zh();
}
function pC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ua(yi);
}
function gC(e, t) {
  if (e === "click") return ua(t);
}
function mC(e, t) {
  if (e === "input" || e === "change") return ua(t);
}
function yC(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ft = typeof Object.is == "function" ? Object.is : yC;
function xi(e, t) {
  if (Ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ku.call(t, o) || !Ft(e[o], t[o])) return !1;
  }
  return !0;
}
function $h(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hh(e, t) {
  var n = $h(e);
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
    n = $h(n);
  }
}
function My(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? My(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ay() {
  for (var e = window, t = pl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = pl(e.document);
  }
  return t;
}
function Pd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xC(e) {
  var t = Ay(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && My(n.ownerDocument.documentElement, n)) {
    if (r !== null && Pd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Hh(n, i);
        var s = Hh(
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
var vC = hn && "documentMode" in document && 11 >= document.documentMode, Ar = null, cc = null, Go = null, dc = !1;
function Vh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  dc || Ar == null || Ar !== pl(r) || (r = Ar, "selectionStart" in r && Pd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Go && xi(Go, r) || (Go = r, r = Sl(cc, "onSelect"), 0 < r.length && (t = new Cd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ar)));
}
function ms(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Dr = { animationend: ms("Animation", "AnimationEnd"), animationiteration: ms("Animation", "AnimationIteration"), animationstart: ms("Animation", "AnimationStart"), transitionend: ms("Transition", "TransitionEnd") }, ru = {}, Dy = {};
hn && (Dy = document.createElement("div").style, "AnimationEvent" in window || (delete Dr.animationend.animation, delete Dr.animationiteration.animation, delete Dr.animationstart.animation), "TransitionEvent" in window || delete Dr.transitionend.transition);
function ca(e) {
  if (ru[e]) return ru[e];
  if (!Dr[e]) return e;
  var t = Dr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Dy) return ru[e] = t[n];
  return e;
}
var Ly = ca("animationend"), jy = ca("animationiteration"), Ry = ca("animationstart"), Fy = ca("transitionend"), Oy = /* @__PURE__ */ new Map(), Bh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kn(e, t) {
  Oy.set(e, t), wr(t, [e]);
}
for (var ou = 0; ou < Bh.length; ou++) {
  var iu = Bh[ou], wC = iu.toLowerCase(), SC = iu[0].toUpperCase() + iu.slice(1);
  Kn(wC, "on" + SC);
}
Kn(Ly, "onAnimationEnd");
Kn(jy, "onAnimationIteration");
Kn(Ry, "onAnimationStart");
Kn("dblclick", "onDoubleClick");
Kn("focusin", "onFocus");
Kn("focusout", "onBlur");
Kn(Fy, "onTransitionEnd");
so("onMouseEnter", ["mouseout", "mouseover"]);
so("onMouseLeave", ["mouseout", "mouseover"]);
so("onPointerEnter", ["pointerout", "pointerover"]);
so("onPointerLeave", ["pointerout", "pointerover"]);
wr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
wr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
wr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
wr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), EC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));
function Uh(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, wk(r, t, void 0, e), e.currentTarget = null;
}
function zy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Uh(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Uh(o, l, u), i = a;
      }
    }
  }
  if (ml) throw e = sc, ml = !1, sc = null, e;
}
function xe(e, t) {
  var n = t[mc];
  n === void 0 && (n = t[mc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || ($y(t, e, 2, !1), n.add(r));
}
function su(e, t, n) {
  var r = 0;
  t && (r |= 4), $y(n, e, r, t);
}
var ys = "_reactListening" + Math.random().toString(36).slice(2);
function vi(e) {
  if (!e[ys]) {
    e[ys] = !0, Ym.forEach(function(n) {
      n !== "selectionchange" && (EC.has(n) || su(n, !1, e), su(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ys] || (t[ys] = !0, su("selectionchange", !1, t));
  }
}
function $y(e, t, n, r) {
  switch (_y(t)) {
    case 1:
      var o = Rk;
      break;
    case 4:
      o = Fk;
      break;
    default:
      o = Nd;
  }
  n = o.bind(null, t, n, e), o = void 0, !ic || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function lu(e, t, n, r, o) {
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
        if (s = er(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  uy(function() {
    var u = i, d = Sd(n), c = [];
    e: {
      var f = Oy.get(e);
      if (f !== void 0) {
        var p = Cd, y = e;
        switch (e) {
          case "keypress":
            if ($s(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = qk;
            break;
          case "focusin":
            y = "focus", p = eu;
            break;
          case "focusout":
            y = "blur", p = eu;
            break;
          case "beforeblur":
          case "afterblur":
            p = eu;
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
            p = Ah;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = $k;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = tC;
            break;
          case Ly:
          case jy:
          case Ry:
            p = Bk;
            break;
          case Fy:
            p = rC;
            break;
          case "scroll":
            p = Ok;
            break;
          case "wheel":
            p = iC;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Kk;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Lh;
        }
        var w = (t & 4) !== 0, E = !w && e === "scroll", h = w ? f !== null ? f + "Capture" : null : f;
        w = [];
        for (var x = u, g; x !== null; ) {
          g = x;
          var v = g.stateNode;
          if (g.tag === 5 && v !== null && (g = v, h !== null && (v = hi(x, h), v != null && w.push(wi(x, v, g)))), E) break;
          x = x.return;
        }
        0 < w.length && (f = new p(f, y, null, n, d), c.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== rc && (y = n.relatedTarget || n.fromElement) && (er(y) || y[pn])) break e;
        if ((p || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (y = n.relatedTarget || n.toElement, p = u, y = y ? er(y) : null, y !== null && (E = Sr(y), y !== E || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
          if (w = Ah, v = "onMouseLeave", h = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (w = Lh, v = "onPointerLeave", h = "onPointerEnter", x = "pointer"), E = p == null ? f : Lr(p), g = y == null ? f : Lr(y), f = new w(v, x + "leave", p, n, d), f.target = E, f.relatedTarget = g, v = null, er(d) === u && (w = new w(h, x + "enter", y, n, d), w.target = g, w.relatedTarget = E, v = w), E = v, p && y) t: {
            for (w = p, h = y, x = 0, g = w; g; g = Nr(g)) x++;
            for (g = 0, v = h; v; v = Nr(v)) g++;
            for (; 0 < x - g; ) w = Nr(w), x--;
            for (; 0 < g - x; ) h = Nr(h), g--;
            for (; x--; ) {
              if (w === h || h !== null && w === h.alternate) break t;
              w = Nr(w), h = Nr(h);
            }
            w = null;
          }
          else w = null;
          p !== null && Kh(c, f, p, w, !1), y !== null && E !== null && Kh(c, E, y, w, !0);
        }
      }
      e: {
        if (f = u ? Lr(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file") var S = fC;
        else if (Fh(f)) if (Ty) S = mC;
        else {
          S = pC;
          var _ = hC;
        }
        else (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = gC);
        if (S && (S = S(e, u))) {
          Iy(c, S, n, d);
          break e;
        }
        _ && _(e, f, u), e === "focusout" && (_ = f._wrapperState) && _.controlled && f.type === "number" && qu(f, "number", f.value);
      }
      switch (_ = u ? Lr(u) : window, e) {
        case "focusin":
          (Fh(_) || _.contentEditable === "true") && (Ar = _, cc = u, Go = null);
          break;
        case "focusout":
          Go = cc = Ar = null;
          break;
        case "mousedown":
          dc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          dc = !1, Vh(c, n, d);
          break;
        case "selectionchange":
          if (vC) break;
        case "keydown":
        case "keyup":
          Vh(c, n, d);
      }
      var N;
      if (Td) e: {
        switch (e) {
          case "compositionstart":
            var k = "onCompositionStart";
            break e;
          case "compositionend":
            k = "onCompositionEnd";
            break e;
          case "compositionupdate":
            k = "onCompositionUpdate";
            break e;
        }
        k = void 0;
      }
      else Mr ? ky(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k && (Ny && n.locale !== "ko" && (Mr || k !== "onCompositionStart" ? k === "onCompositionEnd" && Mr && (N = by()) : (Mn = d, kd = "value" in Mn ? Mn.value : Mn.textContent, Mr = !0)), _ = Sl(u, k), 0 < _.length && (k = new Dh(k, e, null, n, d), c.push({ event: k, listeners: _ }), N ? k.data = N : (N = Cy(n), N !== null && (k.data = N)))), (N = lC ? aC(e, n) : uC(e, n)) && (u = Sl(u, "onBeforeInput"), 0 < u.length && (d = new Dh("onBeforeInput", "beforeinput", null, n, d), c.push({ event: d, listeners: u }), d.data = N));
    }
    zy(c, t);
  });
}
function wi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Sl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = hi(e, n), i != null && r.unshift(wi(e, i, o)), i = hi(e, t), i != null && r.push(wi(e, i, o))), e = e.return;
  }
  return r;
}
function Nr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Kh(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = hi(n, i), a != null && s.unshift(wi(n, a, l))) : o || (a = hi(n, i), a != null && s.push(wi(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var _C = /\r\n?/g, bC = /\u0000|\uFFFD/g;
function Wh(e) {
  return (typeof e == "string" ? e : "" + e).replace(_C, `
`).replace(bC, "");
}
function xs(e, t, n) {
  if (t = Wh(t), Wh(e) !== t && n) throw Error(H(425));
}
function El() {
}
var fc = null, hc = null;
function pc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var gc = typeof setTimeout == "function" ? setTimeout : void 0, NC = typeof clearTimeout == "function" ? clearTimeout : void 0, Yh = typeof Promise == "function" ? Promise : void 0, kC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yh < "u" ? function(e) {
  return Yh.resolve(null).then(e).catch(CC);
} : gc;
function CC(e) {
  setTimeout(function() {
    throw e;
  });
}
function au(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), mi(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  mi(t);
}
function Rn(e) {
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
function Xh(e) {
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
var So = Math.random().toString(36).slice(2), Ut = "__reactFiber$" + So, Si = "__reactProps$" + So, pn = "__reactContainer$" + So, mc = "__reactEvents$" + So, IC = "__reactListeners$" + So, TC = "__reactHandles$" + So;
function er(e) {
  var t = e[Ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pn] || n[Ut]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xh(e); e !== null; ) {
        if (n = e[Ut]) return n;
        e = Xh(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ki(e) {
  return e = e[Ut] || e[pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function da(e) {
  return e[Si] || null;
}
var yc = [], jr = -1;
function Wn(e) {
  return { current: e };
}
function ve(e) {
  0 > jr || (e.current = yc[jr], yc[jr] = null, jr--);
}
function ge(e, t) {
  jr++, yc[jr] = e.current, e.current = t;
}
var Un = {}, Ue = Wn(Un), tt = Wn(!1), pr = Un;
function lo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function nt(e) {
  return e = e.childContextTypes, e != null;
}
function _l() {
  ve(tt), ve(Ue);
}
function Gh(e, t, n) {
  if (Ue.current !== Un) throw Error(H(168));
  ge(Ue, t), ge(tt, n);
}
function Hy(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, hk(e) || "Unknown", o));
  return Ne({}, n, r);
}
function bl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Un, pr = Ue.current, ge(Ue, e), ge(tt, tt.current), !0;
}
function Qh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n ? (e = Hy(e, t, pr), r.__reactInternalMemoizedMergedChildContext = e, ve(tt), ve(Ue), ge(Ue, e)) : ve(tt), ge(tt, n);
}
var rn = null, fa = !1, uu = !1;
function Vy(e) {
  rn === null ? rn = [e] : rn.push(e);
}
function PC(e) {
  fa = !0, Vy(e);
}
function Yn() {
  if (!uu && rn !== null) {
    uu = !0;
    var e = 0, t = he;
    try {
      var n = rn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      rn = null, fa = !1;
    } catch (o) {
      throw rn !== null && (rn = rn.slice(e + 1)), hy(Ed, Yn), o;
    } finally {
      he = t, uu = !1;
    }
  }
  return null;
}
var Rr = [], Fr = 0, Nl = null, kl = 0, gt = [], mt = 0, gr = null, sn = 1, ln = "";
function Gn(e, t) {
  Rr[Fr++] = kl, Rr[Fr++] = Nl, Nl = e, kl = t;
}
function By(e, t, n) {
  gt[mt++] = sn, gt[mt++] = ln, gt[mt++] = gr, gr = e;
  var r = sn;
  e = ln;
  var o = 32 - Lt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Lt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, sn = 1 << 32 - Lt(t) + o | n << o | r, ln = i + e;
  } else sn = 1 << i | n << o | r, ln = e;
}
function Md(e) {
  e.return !== null && (Gn(e, 1), By(e, 1, 0));
}
function Ad(e) {
  for (; e === Nl; ) Nl = Rr[--Fr], Rr[Fr] = null, kl = Rr[--Fr], Rr[Fr] = null;
  for (; e === gr; ) gr = gt[--mt], gt[mt] = null, ln = gt[--mt], gt[mt] = null, sn = gt[--mt], gt[mt] = null;
}
var at = null, lt = null, Ee = !1, Tt = null;
function Uy(e, t) {
  var n = yt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Zh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, at = e, lt = Rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, at = e, lt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = gr !== null ? { id: sn, overflow: ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = yt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, at = e, lt = null, !0) : !1;
    default:
      return !1;
  }
}
function xc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vc(e) {
  if (Ee) {
    var t = lt;
    if (t) {
      var n = t;
      if (!Zh(e, t)) {
        if (xc(e)) throw Error(H(418));
        t = Rn(n.nextSibling);
        var r = at;
        t && Zh(e, t) ? Uy(r, n) : (e.flags = e.flags & -4097 | 2, Ee = !1, at = e);
      }
    } else {
      if (xc(e)) throw Error(H(418));
      e.flags = e.flags & -4097 | 2, Ee = !1, at = e;
    }
  }
}
function qh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  at = e;
}
function vs(e) {
  if (e !== at) return !1;
  if (!Ee) return qh(e), Ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !pc(e.type, e.memoizedProps)), t && (t = lt)) {
    if (xc(e)) throw Ky(), Error(H(418));
    for (; t; ) Uy(e, t), t = Rn(t.nextSibling);
  }
  if (qh(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              lt = Rn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      lt = null;
    }
  } else lt = at ? Rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ky() {
  for (var e = lt; e; ) e = Rn(e.nextSibling);
}
function ao() {
  lt = at = null, Ee = !1;
}
function Dd(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
var MC = xn.ReactCurrentBatchConfig;
function Mo(e, t, n) {
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
function ws(e, t) {
  throw e = Object.prototype.toString.call(t), Error(H(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Jh(e) {
  var t = e._init;
  return t(e._payload);
}
function Wy(e) {
  function t(h, x) {
    if (e) {
      var g = h.deletions;
      g === null ? (h.deletions = [x], h.flags |= 16) : g.push(x);
    }
  }
  function n(h, x) {
    if (!e) return null;
    for (; x !== null; ) t(h, x), x = x.sibling;
    return null;
  }
  function r(h, x) {
    for (h = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? h.set(x.key, x) : h.set(x.index, x), x = x.sibling;
    return h;
  }
  function o(h, x) {
    return h = $n(h, x), h.index = 0, h.sibling = null, h;
  }
  function i(h, x, g) {
    return h.index = g, e ? (g = h.alternate, g !== null ? (g = g.index, g < x ? (h.flags |= 2, x) : g) : (h.flags |= 2, x)) : (h.flags |= 1048576, x);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, x, g, v) {
    return x === null || x.tag !== 6 ? (x = mu(g, h.mode, v), x.return = h, x) : (x = o(x, g), x.return = h, x);
  }
  function a(h, x, g, v) {
    var S = g.type;
    return S === Pr ? d(h, x, g.props.children, v, g.key) : x !== null && (x.elementType === S || typeof S == "object" && S !== null && S.$$typeof === kn && Jh(S) === x.type) ? (v = o(x, g.props), v.ref = Mo(h, x, g), v.return = h, v) : (v = Ys(g.type, g.key, g.props, null, h.mode, v), v.ref = Mo(h, x, g), v.return = h, v);
  }
  function u(h, x, g, v) {
    return x === null || x.tag !== 4 || x.stateNode.containerInfo !== g.containerInfo || x.stateNode.implementation !== g.implementation ? (x = yu(g, h.mode, v), x.return = h, x) : (x = o(x, g.children || []), x.return = h, x);
  }
  function d(h, x, g, v, S) {
    return x === null || x.tag !== 7 ? (x = lr(g, h.mode, v, S), x.return = h, x) : (x = o(x, g), x.return = h, x);
  }
  function c(h, x, g) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return x = mu("" + x, h.mode, g), x.return = h, x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case us:
          return g = Ys(x.type, x.key, x.props, null, h.mode, g), g.ref = Mo(h, null, x), g.return = h, g;
        case Tr:
          return x = yu(x, h.mode, g), x.return = h, x;
        case kn:
          var v = x._init;
          return c(h, v(x._payload), g);
      }
      if ($o(x) || ko(x)) return x = lr(x, h.mode, g, null), x.return = h, x;
      ws(h, x);
    }
    return null;
  }
  function f(h, x, g, v) {
    var S = x !== null ? x.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return S !== null ? null : l(h, x, "" + g, v);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case us:
          return g.key === S ? a(h, x, g, v) : null;
        case Tr:
          return g.key === S ? u(h, x, g, v) : null;
        case kn:
          return S = g._init, f(
            h,
            x,
            S(g._payload),
            v
          );
      }
      if ($o(g) || ko(g)) return S !== null ? null : d(h, x, g, v, null);
      ws(h, g);
    }
    return null;
  }
  function p(h, x, g, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return h = h.get(g) || null, l(x, h, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case us:
          return h = h.get(v.key === null ? g : v.key) || null, a(x, h, v, S);
        case Tr:
          return h = h.get(v.key === null ? g : v.key) || null, u(x, h, v, S);
        case kn:
          var _ = v._init;
          return p(h, x, g, _(v._payload), S);
      }
      if ($o(v) || ko(v)) return h = h.get(g) || null, d(x, h, v, S, null);
      ws(x, v);
    }
    return null;
  }
  function y(h, x, g, v) {
    for (var S = null, _ = null, N = x, k = x = 0, T = null; N !== null && k < g.length; k++) {
      N.index > k ? (T = N, N = null) : T = N.sibling;
      var D = f(h, N, g[k], v);
      if (D === null) {
        N === null && (N = T);
        break;
      }
      e && N && D.alternate === null && t(h, N), x = i(D, x, k), _ === null ? S = D : _.sibling = D, _ = D, N = T;
    }
    if (k === g.length) return n(h, N), Ee && Gn(h, k), S;
    if (N === null) {
      for (; k < g.length; k++) N = c(h, g[k], v), N !== null && (x = i(N, x, k), _ === null ? S = N : _.sibling = N, _ = N);
      return Ee && Gn(h, k), S;
    }
    for (N = r(h, N); k < g.length; k++) T = p(N, h, k, g[k], v), T !== null && (e && T.alternate !== null && N.delete(T.key === null ? k : T.key), x = i(T, x, k), _ === null ? S = T : _.sibling = T, _ = T);
    return e && N.forEach(function(A) {
      return t(h, A);
    }), Ee && Gn(h, k), S;
  }
  function w(h, x, g, v) {
    var S = ko(g);
    if (typeof S != "function") throw Error(H(150));
    if (g = S.call(g), g == null) throw Error(H(151));
    for (var _ = S = null, N = x, k = x = 0, T = null, D = g.next(); N !== null && !D.done; k++, D = g.next()) {
      N.index > k ? (T = N, N = null) : T = N.sibling;
      var A = f(h, N, D.value, v);
      if (A === null) {
        N === null && (N = T);
        break;
      }
      e && N && A.alternate === null && t(h, N), x = i(A, x, k), _ === null ? S = A : _.sibling = A, _ = A, N = T;
    }
    if (D.done) return n(
      h,
      N
    ), Ee && Gn(h, k), S;
    if (N === null) {
      for (; !D.done; k++, D = g.next()) D = c(h, D.value, v), D !== null && (x = i(D, x, k), _ === null ? S = D : _.sibling = D, _ = D);
      return Ee && Gn(h, k), S;
    }
    for (N = r(h, N); !D.done; k++, D = g.next()) D = p(N, h, k, D.value, v), D !== null && (e && D.alternate !== null && N.delete(D.key === null ? k : D.key), x = i(D, x, k), _ === null ? S = D : _.sibling = D, _ = D);
    return e && N.forEach(function(M) {
      return t(h, M);
    }), Ee && Gn(h, k), S;
  }
  function E(h, x, g, v) {
    if (typeof g == "object" && g !== null && g.type === Pr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case us:
          e: {
            for (var S = g.key, _ = x; _ !== null; ) {
              if (_.key === S) {
                if (S = g.type, S === Pr) {
                  if (_.tag === 7) {
                    n(h, _.sibling), x = o(_, g.props.children), x.return = h, h = x;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === kn && Jh(S) === _.type) {
                  n(h, _.sibling), x = o(_, g.props), x.ref = Mo(h, _, g), x.return = h, h = x;
                  break e;
                }
                n(h, _);
                break;
              } else t(h, _);
              _ = _.sibling;
            }
            g.type === Pr ? (x = lr(g.props.children, h.mode, v, g.key), x.return = h, h = x) : (v = Ys(g.type, g.key, g.props, null, h.mode, v), v.ref = Mo(h, x, g), v.return = h, h = v);
          }
          return s(h);
        case Tr:
          e: {
            for (_ = g.key; x !== null; ) {
              if (x.key === _) if (x.tag === 4 && x.stateNode.containerInfo === g.containerInfo && x.stateNode.implementation === g.implementation) {
                n(h, x.sibling), x = o(x, g.children || []), x.return = h, h = x;
                break e;
              } else {
                n(h, x);
                break;
              }
              else t(h, x);
              x = x.sibling;
            }
            x = yu(g, h.mode, v), x.return = h, h = x;
          }
          return s(h);
        case kn:
          return _ = g._init, E(h, x, _(g._payload), v);
      }
      if ($o(g)) return y(h, x, g, v);
      if (ko(g)) return w(h, x, g, v);
      ws(h, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, x !== null && x.tag === 6 ? (n(h, x.sibling), x = o(x, g), x.return = h, h = x) : (n(h, x), x = mu(g, h.mode, v), x.return = h, h = x), s(h)) : n(h, x);
  }
  return E;
}
var uo = Wy(!0), Yy = Wy(!1), Cl = Wn(null), Il = null, Or = null, Ld = null;
function jd() {
  Ld = Or = Il = null;
}
function Rd(e) {
  var t = Cl.current;
  ve(Cl), e._currentValue = t;
}
function wc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Xr(e, t) {
  Il = e, Ld = Or = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (et = !0), e.firstContext = null);
}
function vt(e) {
  var t = e._currentValue;
  if (Ld !== e) if (e = { context: e, memoizedValue: t, next: null }, Or === null) {
    if (Il === null) throw Error(H(308));
    Or = e, Il.dependencies = { lanes: 0, firstContext: e };
  } else Or = Or.next = e;
  return t;
}
var tr = null;
function Fd(e) {
  tr === null ? tr = [e] : tr.push(e);
}
function Xy(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Fd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, gn(e, r);
}
function gn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Cn = !1;
function Od(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Gy(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function cn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Fn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, de & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, gn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Fd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, gn(e, n);
}
function Hs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _d(e, n);
  }
}
function ep(e, t) {
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
function Tl(e, t, n, r) {
  var o = e.updateQueue;
  Cn = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var c = o.baseState;
    s = 0, d = u = a = null, l = i;
    do {
      var f = l.lane, p = l.eventTime;
      if ((r & f) === f) {
        d !== null && (d = d.next = {
          eventTime: p,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var y = e, w = l;
          switch (f = t, p = n, w.tag) {
            case 1:
              if (y = w.payload, typeof y == "function") {
                c = y.call(p, c, f);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = w.payload, f = typeof y == "function" ? y.call(p, c, f) : y, f == null) break e;
              c = Ne({}, c, f);
              break e;
            case 2:
              Cn = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [l] : f.push(l));
      } else p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = p, a = c) : d = d.next = p, s |= f;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        f = l, l = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = c), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    yr |= s, e.lanes = s, e.memoizedState = c;
  }
}
function tp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(H(191, o));
      o.call(r);
    }
  }
}
var Wi = {}, Yt = Wn(Wi), Ei = Wn(Wi), _i = Wn(Wi);
function nr(e) {
  if (e === Wi) throw Error(H(174));
  return e;
}
function zd(e, t) {
  switch (ge(_i, t), ge(Ei, e), ge(Yt, Wi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ec(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ec(t, e);
  }
  ve(Yt), ge(Yt, t);
}
function co() {
  ve(Yt), ve(Ei), ve(_i);
}
function Qy(e) {
  nr(_i.current);
  var t = nr(Yt.current), n = ec(t, e.type);
  t !== n && (ge(Ei, e), ge(Yt, n));
}
function $d(e) {
  Ei.current === e && (ve(Yt), ve(Ei));
}
var _e = Wn(0);
function Pl(e) {
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
var cu = [];
function Hd() {
  for (var e = 0; e < cu.length; e++) cu[e]._workInProgressVersionPrimary = null;
  cu.length = 0;
}
var Vs = xn.ReactCurrentDispatcher, du = xn.ReactCurrentBatchConfig, mr = 0, be = null, Pe = null, De = null, Ml = !1, Qo = !1, bi = 0, AC = 0;
function $e() {
  throw Error(H(321));
}
function Vd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ft(e[n], t[n])) return !1;
  return !0;
}
function Bd(e, t, n, r, o, i) {
  if (mr = i, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vs.current = e === null || e.memoizedState === null ? RC : FC, e = n(r, o), Qo) {
    i = 0;
    do {
      if (Qo = !1, bi = 0, 25 <= i) throw Error(H(301));
      i += 1, De = Pe = null, t.updateQueue = null, Vs.current = OC, e = n(r, o);
    } while (Qo);
  }
  if (Vs.current = Al, t = Pe !== null && Pe.next !== null, mr = 0, De = Pe = be = null, Ml = !1, t) throw Error(H(300));
  return e;
}
function Ud() {
  var e = bi !== 0;
  return bi = 0, e;
}
function Vt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? be.memoizedState = De = e : De = De.next = e, De;
}
function wt() {
  if (Pe === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = De === null ? be.memoizedState : De.next;
  if (t !== null) De = t, Pe = e;
  else {
    if (e === null) throw Error(H(310));
    Pe = e, e = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, De === null ? be.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function Ni(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fu(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = Pe, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = s = null, a = null, u = i;
    do {
      var d = u.lane;
      if ((mr & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = c, s = r) : a = a.next = c, be.lanes |= d, yr |= d;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Ft(r, t.memoizedState) || (et = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, be.lanes |= i, yr |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hu(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Ft(i, t.memoizedState) || (et = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Zy() {
}
function qy(e, t) {
  var n = be, r = wt(), o = t(), i = !Ft(r.memoizedState, o);
  if (i && (r.memoizedState = o, et = !0), r = r.queue, Kd(t0.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, ki(9, e0.bind(null, n, r, o, t), void 0, null), Le === null) throw Error(H(349));
    mr & 30 || Jy(n, t, o);
  }
  return o;
}
function Jy(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function e0(e, t, n, r) {
  t.value = n, t.getSnapshot = r, n0(t) && r0(e);
}
function t0(e, t, n) {
  return n(function() {
    n0(t) && r0(e);
  });
}
function n0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ft(e, n);
  } catch {
    return !0;
  }
}
function r0(e) {
  var t = gn(e, 1);
  t !== null && jt(t, e, 1, -1);
}
function np(e) {
  var t = Vt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ni, lastRenderedState: e }, t.queue = e, e = e.dispatch = jC.bind(null, be, e), [t.memoizedState, e];
}
function ki(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function o0() {
  return wt().memoizedState;
}
function Bs(e, t, n, r) {
  var o = Vt();
  be.flags |= e, o.memoizedState = ki(1 | t, n, void 0, r === void 0 ? null : r);
}
function ha(e, t, n, r) {
  var o = wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Pe !== null) {
    var s = Pe.memoizedState;
    if (i = s.destroy, r !== null && Vd(r, s.deps)) {
      o.memoizedState = ki(t, n, i, r);
      return;
    }
  }
  be.flags |= e, o.memoizedState = ki(1 | t, n, i, r);
}
function rp(e, t) {
  return Bs(8390656, 8, e, t);
}
function Kd(e, t) {
  return ha(2048, 8, e, t);
}
function i0(e, t) {
  return ha(4, 2, e, t);
}
function s0(e, t) {
  return ha(4, 4, e, t);
}
function l0(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function a0(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ha(4, 4, l0.bind(null, t, e), n);
}
function Wd() {
}
function u0(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function c0(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function d0(e, t, n) {
  return mr & 21 ? (Ft(n, t) || (n = my(), be.lanes |= n, yr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, et = !0), e.memoizedState = n);
}
function DC(e, t) {
  var n = he;
  he = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = du.transition;
  du.transition = {};
  try {
    e(!1), t();
  } finally {
    he = n, du.transition = r;
  }
}
function f0() {
  return wt().memoizedState;
}
function LC(e, t, n) {
  var r = zn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, h0(e)) p0(t, n);
  else if (n = Xy(e, t, n, r), n !== null) {
    var o = We();
    jt(n, e, r, o), g0(n, t, r);
  }
}
function jC(e, t, n) {
  var r = zn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (h0(e)) p0(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Ft(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Fd(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Xy(e, t, o, r), n !== null && (o = We(), jt(n, e, r, o), g0(n, t, r));
  }
}
function h0(e) {
  var t = e.alternate;
  return e === be || t !== null && t === be;
}
function p0(e, t) {
  Qo = Ml = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function g0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _d(e, n);
  }
}
var Al = { readContext: vt, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, RC = { readContext: vt, useCallback: function(e, t) {
  return Vt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: vt, useEffect: rp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Bs(
    4194308,
    4,
    l0.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Bs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Bs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Vt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Vt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = LC.bind(null, be, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Vt();
  return e = { current: e }, t.memoizedState = e;
}, useState: np, useDebugValue: Wd, useDeferredValue: function(e) {
  return Vt().memoizedState = e;
}, useTransition: function() {
  var e = np(!1), t = e[0];
  return e = DC.bind(null, e[1]), Vt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = be, o = Vt();
  if (Ee) {
    if (n === void 0) throw Error(H(407));
    n = n();
  } else {
    if (n = t(), Le === null) throw Error(H(349));
    mr & 30 || Jy(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, rp(t0.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ki(9, e0.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Vt(), t = Le.identifierPrefix;
  if (Ee) {
    var n = ln, r = sn;
    n = (r & ~(1 << 32 - Lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = bi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = AC++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, FC = {
  readContext: vt,
  useCallback: u0,
  useContext: vt,
  useEffect: Kd,
  useImperativeHandle: a0,
  useInsertionEffect: i0,
  useLayoutEffect: s0,
  useMemo: c0,
  useReducer: fu,
  useRef: o0,
  useState: function() {
    return fu(Ni);
  },
  useDebugValue: Wd,
  useDeferredValue: function(e) {
    var t = wt();
    return d0(t, Pe.memoizedState, e);
  },
  useTransition: function() {
    var e = fu(Ni)[0], t = wt().memoizedState;
    return [e, t];
  },
  useMutableSource: Zy,
  useSyncExternalStore: qy,
  useId: f0,
  unstable_isNewReconciler: !1
}, OC = { readContext: vt, useCallback: u0, useContext: vt, useEffect: Kd, useImperativeHandle: a0, useInsertionEffect: i0, useLayoutEffect: s0, useMemo: c0, useReducer: hu, useRef: o0, useState: function() {
  return hu(Ni);
}, useDebugValue: Wd, useDeferredValue: function(e) {
  var t = wt();
  return Pe === null ? t.memoizedState = e : d0(t, Pe.memoizedState, e);
}, useTransition: function() {
  var e = hu(Ni)[0], t = wt().memoizedState;
  return [e, t];
}, useMutableSource: Zy, useSyncExternalStore: qy, useId: f0, unstable_isNewReconciler: !1 };
function kt(e, t) {
  if (e && e.defaultProps) {
    t = Ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Sc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pa = { isMounted: function(e) {
  return (e = e._reactInternals) ? Sr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = We(), o = zn(e), i = cn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Fn(e, i, o), t !== null && (jt(t, e, o, r), Hs(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = We(), o = zn(e), i = cn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Fn(e, i, o), t !== null && (jt(t, e, o, r), Hs(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = We(), r = zn(e), o = cn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Fn(e, o, r), t !== null && (jt(t, e, r, n), Hs(t, e, r));
} };
function op(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !xi(n, r) || !xi(o, i) : !0;
}
function m0(e, t, n) {
  var r = !1, o = Un, i = t.contextType;
  return typeof i == "object" && i !== null ? i = vt(i) : (o = nt(t) ? pr : Ue.current, r = t.contextTypes, i = (r = r != null) ? lo(e, o) : Un), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ip(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pa.enqueueReplaceState(t, t.state, null);
}
function Ec(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Od(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = vt(i) : (i = nt(t) ? pr : Ue.current, o.context = lo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Sc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && pa.enqueueReplaceState(o, o.state, null), Tl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function fo(e, t) {
  try {
    var n = "", r = t;
    do
      n += fk(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function pu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _c(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var zC = typeof WeakMap == "function" ? WeakMap : Map;
function y0(e, t, n) {
  n = cn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ll || (Ll = !0, Dc = r), _c(e, t);
  }, n;
}
function x0(e, t, n) {
  n = cn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      _c(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    _c(e, t), typeof r != "function" && (On === null ? On = /* @__PURE__ */ new Set([this]) : On.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function sp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zC();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = JC.bind(null, e, t, n), t.then(e, e));
}
function lp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ap(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = cn(-1, 1), t.tag = 2, Fn(n, t, 1))), n.lanes |= 1), e);
}
var $C = xn.ReactCurrentOwner, et = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? Yy(t, null, n, r) : uo(t, e.child, n, r);
}
function up(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Xr(t, o), r = Bd(e, t, n, r, i, o), n = Ud(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, mn(e, t, o)) : (Ee && n && Md(t), t.flags |= 1, Ke(e, t, r, o), t.child);
}
function cp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ef(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, v0(e, t, i, r, o)) : (e = Ys(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : xi, n(s, r) && e.ref === t.ref) return mn(e, t, o);
  }
  return t.flags |= 1, e = $n(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function v0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (xi(i, r) && e.ref === t.ref) if (et = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (et = !0);
    else return t.lanes = e.lanes, mn(e, t, o);
  }
  return bc(e, t, n, r, o);
}
function w0(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ge($r, ot), ot |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ge($r, ot), ot |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ge($r, ot), ot |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ge($r, ot), ot |= r;
  return Ke(e, t, o, n), t.child;
}
function S0(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function bc(e, t, n, r, o) {
  var i = nt(n) ? pr : Ue.current;
  return i = lo(t, i), Xr(t, o), n = Bd(e, t, n, r, i, o), r = Ud(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, mn(e, t, o)) : (Ee && r && Md(t), t.flags |= 1, Ke(e, t, n, o), t.child);
}
function dp(e, t, n, r, o) {
  if (nt(n)) {
    var i = !0;
    bl(t);
  } else i = !1;
  if (Xr(t, o), t.stateNode === null) Us(e, t), m0(t, n, r), Ec(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = vt(u) : (u = nt(n) ? pr : Ue.current, u = lo(t, u));
    var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && ip(t, s, r, u), Cn = !1;
    var f = t.memoizedState;
    s.state = f, Tl(t, r, s, o), a = t.memoizedState, l !== r || f !== a || tt.current || Cn ? (typeof d == "function" && (Sc(t, n, d, r), a = t.memoizedState), (l = Cn || op(t, n, l, r, f, a, u)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Gy(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : kt(t.type, l), s.props = u, c = t.pendingProps, f = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = vt(a) : (a = nt(n) ? pr : Ue.current, a = lo(t, a));
    var p = n.getDerivedStateFromProps;
    (d = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== c || f !== a) && ip(t, s, r, a), Cn = !1, f = t.memoizedState, s.state = f, Tl(t, r, s, o);
    var y = t.memoizedState;
    l !== c || f !== y || tt.current || Cn ? (typeof p == "function" && (Sc(t, n, p, r), y = t.memoizedState), (u = Cn || op(t, n, u, r, f, y, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Nc(e, t, n, r, i, o);
}
function Nc(e, t, n, r, o, i) {
  S0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Qh(t, n, !1), mn(e, t, i);
  r = t.stateNode, $C.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = uo(t, e.child, null, i), t.child = uo(t, null, l, i)) : Ke(e, t, l, i), t.memoizedState = r.state, o && Qh(t, n, !0), t.child;
}
function E0(e) {
  var t = e.stateNode;
  t.pendingContext ? Gh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gh(e, t.context, !1), zd(e, t.containerInfo);
}
function fp(e, t, n, r, o) {
  return ao(), Dd(o), t.flags |= 256, Ke(e, t, n, r), t.child;
}
var kc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _0(e, t, n) {
  var r = t.pendingProps, o = _e.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ge(_e, o & 1), e === null)
    return vc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = ya(s, r, 0, null), e = lr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Cc(n), t.memoizedState = kc, e) : Yd(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return HC(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = $n(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = $n(l, i) : (i = lr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Cc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = kc, r;
  }
  return i = e.child, e = i.sibling, r = $n(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Yd(e, t) {
  return t = ya({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ss(e, t, n, r) {
  return r !== null && Dd(r), uo(t, e.child, null, n), e = Yd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function HC(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = pu(Error(H(422))), Ss(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ya({ mode: "visible", children: r.children }, o, 0, null), i = lr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && uo(t, e.child, null, s), t.child.memoizedState = Cc(s), t.memoizedState = kc, i);
  if (!(t.mode & 1)) return Ss(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(H(419)), r = pu(i, r, void 0), Ss(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, et || l) {
    if (r = Le, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, gn(e, o), jt(r, e, o, -1));
    }
    return Jd(), r = pu(Error(H(421))), Ss(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = e2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, lt = Rn(o.nextSibling), at = t, Ee = !0, Tt = null, e !== null && (gt[mt++] = sn, gt[mt++] = ln, gt[mt++] = gr, sn = e.id, ln = e.overflow, gr = t), t = Yd(t, r.children), t.flags |= 4096, t);
}
function hp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wc(e.return, t, n);
}
function gu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function b0(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ke(e, t, r.children, n), r = _e.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && hp(e, n, t);
      else if (e.tag === 19) hp(e, n, t);
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
  if (ge(_e, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Pl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), gu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Pl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      gu(t, !0, n, null, i);
      break;
    case "together":
      gu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Us(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function mn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), yr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = $n(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function VC(e, t, n) {
  switch (t.tag) {
    case 3:
      E0(t), ao();
      break;
    case 5:
      Qy(t);
      break;
    case 1:
      nt(t.type) && bl(t);
      break;
    case 4:
      zd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ge(Cl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ge(_e, _e.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _0(e, t, n) : (ge(_e, _e.current & 1), e = mn(e, t, n), e !== null ? e.sibling : null);
      ge(_e, _e.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return b0(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ge(_e, _e.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, w0(e, t, n);
  }
  return mn(e, t, n);
}
var N0, Ic, k0, C0;
N0 = function(e, t) {
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
Ic = function() {
};
k0 = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, nr(Yt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Qu(e, o), r = Qu(e, r), i = [];
        break;
      case "select":
        o = Ne({}, o, { value: void 0 }), r = Ne({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Ju(e, o), r = Ju(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = El);
    }
    tc(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (di.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (di.hasOwnProperty(u) ? (a != null && u === "onScroll" && xe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
C0 = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ao(e, t) {
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
function He(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function BC(e, t, n) {
  var r = t.pendingProps;
  switch (Ad(t), t.tag) {
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
      return He(t), null;
    case 1:
      return nt(t.type) && _l(), He(t), null;
    case 3:
      return r = t.stateNode, co(), ve(tt), ve(Ue), Hd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Tt !== null && (Rc(Tt), Tt = null))), Ic(e, t), He(t), null;
    case 5:
      $d(t);
      var o = nr(_i.current);
      if (n = t.type, e !== null && t.stateNode != null) k0(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return He(t), null;
        }
        if (e = nr(Yt.current), vs(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ut] = t, r[Si] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vo.length; o++) xe(Vo[o], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe(
                "error",
                r
              ), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              Eh(r, i), xe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, xe("invalid", r);
              break;
            case "textarea":
              bh(r, i), xe("invalid", r);
          }
          tc(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && xs(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && xs(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : di.hasOwnProperty(s) && l != null && s === "onScroll" && xe("scroll", r);
          }
          switch (n) {
            case "input":
              cs(r), _h(r, i, !0);
              break;
            case "textarea":
              cs(r), Nh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = El);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ty(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ut] = t, e[Si] = r, N0(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = nc(n, r), n) {
              case "dialog":
                xe("cancel", e), xe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Vo.length; o++) xe(Vo[o], e);
                o = r;
                break;
              case "source":
                xe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  e
                ), xe("load", e), o = r;
                break;
              case "details":
                xe("toggle", e), o = r;
                break;
              case "input":
                Eh(e, r), o = Qu(e, r), xe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ne({}, r, { value: void 0 }), xe("invalid", e);
                break;
              case "textarea":
                bh(e, r), o = Ju(e, r), xe("invalid", e);
                break;
              default:
                o = r;
            }
            tc(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? oy(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ny(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && fi(e, a) : typeof a == "number" && fi(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (di.hasOwnProperty(i) ? a != null && i === "onScroll" && xe("scroll", e) : a != null && yd(e, i, a, s));
            }
            switch (n) {
              case "input":
                cs(e), _h(e, r, !1);
                break;
              case "textarea":
                cs(e), Nh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Ur(e, !!r.multiple, i, !1) : r.defaultValue != null && Ur(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = El);
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
      return He(t), null;
    case 6:
      if (e && t.stateNode != null) C0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (n = nr(_i.current), nr(Yt.current), vs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ut] = t, (i = r.nodeValue !== n) && (e = at, e !== null)) switch (e.tag) {
            case 3:
              xs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && xs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ut] = t, t.stateNode = r;
      }
      return He(t), null;
    case 13:
      if (ve(_e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ee && lt !== null && t.mode & 1 && !(t.flags & 128)) Ky(), ao(), t.flags |= 98560, i = !1;
        else if (i = vs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[Ut] = t;
          } else ao(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          He(t), i = !1;
        } else Tt !== null && (Rc(Tt), Tt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || _e.current & 1 ? Me === 0 && (Me = 3) : Jd())), t.updateQueue !== null && (t.flags |= 4), He(t), null);
    case 4:
      return co(), Ic(e, t), e === null && vi(t.stateNode.containerInfo), He(t), null;
    case 10:
      return Rd(t.type._context), He(t), null;
    case 17:
      return nt(t.type) && _l(), He(t), null;
    case 19:
      if (ve(_e), i = t.memoizedState, i === null) return He(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Ao(i, !1);
      else {
        if (Me !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Pl(e), s !== null) {
            for (t.flags |= 128, Ao(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ge(_e, _e.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Ce() > ho && (t.flags |= 128, r = !0, Ao(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Pl(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ao(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ee) return He(t), null;
        } else 2 * Ce() - i.renderingStartTime > ho && n !== 1073741824 && (t.flags |= 128, r = !0, Ao(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ce(), t.sibling = null, n = _e.current, ge(_e, r ? n & 1 | 2 : n & 1), t) : (He(t), null);
    case 22:
    case 23:
      return qd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ot & 1073741824 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function UC(e, t) {
  switch (Ad(t), t.tag) {
    case 1:
      return nt(t.type) && _l(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return co(), ve(tt), ve(Ue), Hd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return $d(t), null;
    case 13:
      if (ve(_e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(H(340));
        ao();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ve(_e), null;
    case 4:
      return co(), null;
    case 10:
      return Rd(t.type._context), null;
    case 22:
    case 23:
      return qd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Es = !1, Be = !1, KC = typeof WeakSet == "function" ? WeakSet : Set, W = null;
function zr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ke(e, t, r);
  }
  else n.current = null;
}
function Tc(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var pp = !1;
function WC(e, t) {
  if (fc = vl, e = Ay(), Pd(e)) {
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
        var s = 0, l = -1, a = -1, u = 0, d = 0, c = e, f = null;
        t: for (; ; ) {
          for (var p; c !== n || o !== 0 && c.nodeType !== 3 || (l = s + o), c !== i || r !== 0 && c.nodeType !== 3 || (a = s + r), c.nodeType === 3 && (s += c.nodeValue.length), (p = c.firstChild) !== null; )
            f = c, c = p;
          for (; ; ) {
            if (c === e) break t;
            if (f === n && ++u === o && (l = s), f === i && ++d === r && (a = s), (p = c.nextSibling) !== null) break;
            c = f, f = c.parentNode;
          }
          c = p;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hc = { focusedElem: e, selectionRange: n }, vl = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
  else for (; W !== null; ) {
    t = W;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var w = y.memoizedProps, E = y.memoizedState, h = t.stateNode, x = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : kt(t.type, w), E);
            h.__reactInternalSnapshotBeforeUpdate = x;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(H(163));
      }
    } catch (v) {
      ke(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, W = e;
      break;
    }
    W = t.return;
  }
  return y = pp, pp = !1, y;
}
function Zo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Tc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ga(e, t) {
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
function Pc(e) {
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
function I0(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, I0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ut], delete t[Si], delete t[mc], delete t[IC], delete t[TC])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function T0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || T0(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = El));
  else if (r !== 4 && (e = e.child, e !== null)) for (Mc(e, t, n), e = e.sibling; e !== null; ) Mc(e, t, n), e = e.sibling;
}
function Ac(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ac(e, t, n), e = e.sibling; e !== null; ) Ac(e, t, n), e = e.sibling;
}
var Fe = null, It = !1;
function _n(e, t, n) {
  for (n = n.child; n !== null; ) P0(e, t, n), n = n.sibling;
}
function P0(e, t, n) {
  if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
    Wt.onCommitFiberUnmount(la, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Be || zr(n, t);
    case 6:
      var r = Fe, o = It;
      Fe = null, _n(e, t, n), Fe = r, It = o, Fe !== null && (It ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Fe.removeChild(n.stateNode));
      break;
    case 18:
      Fe !== null && (It ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? au(e.parentNode, n) : e.nodeType === 1 && au(e, n), mi(e)) : au(Fe, n.stateNode));
      break;
    case 4:
      r = Fe, o = It, Fe = n.stateNode.containerInfo, It = !0, _n(e, t, n), Fe = r, It = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Tc(n, t, s), o = o.next;
        } while (o !== r);
      }
      _n(e, t, n);
      break;
    case 1:
      if (!Be && (zr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        ke(n, t, l);
      }
      _n(e, t, n);
      break;
    case 21:
      _n(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null, _n(e, t, n), Be = r) : _n(e, t, n);
      break;
    default:
      _n(e, t, n);
  }
}
function mp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new KC()), t.forEach(function(r) {
      var o = t2.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Nt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Fe = l.stateNode, It = !1;
            break e;
          case 3:
            Fe = l.stateNode.containerInfo, It = !0;
            break e;
          case 4:
            Fe = l.stateNode.containerInfo, It = !0;
            break e;
        }
        l = l.return;
      }
      if (Fe === null) throw Error(H(160));
      P0(i, s, o), Fe = null, It = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      ke(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) M0(t, e), t = t.sibling;
}
function M0(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Nt(t, e), Ht(e), r & 4) {
        try {
          Zo(3, e, e.return), ga(3, e);
        } catch (w) {
          ke(e, e.return, w);
        }
        try {
          Zo(5, e, e.return);
        } catch (w) {
          ke(e, e.return, w);
        }
      }
      break;
    case 1:
      Nt(t, e), Ht(e), r & 512 && n !== null && zr(n, n.return);
      break;
    case 5:
      if (Nt(t, e), Ht(e), r & 512 && n !== null && zr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          fi(o, "");
        } catch (w) {
          ke(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && Jm(o, i), nc(l, s);
          var u = nc(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], c = a[s + 1];
            d === "style" ? oy(o, c) : d === "dangerouslySetInnerHTML" ? ny(o, c) : d === "children" ? fi(o, c) : yd(o, d, c, u);
          }
          switch (l) {
            case "input":
              Zu(o, i);
              break;
            case "textarea":
              ey(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var p = i.value;
              p != null ? Ur(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? Ur(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Ur(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Si] = i;
        } catch (w) {
          ke(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Nt(t, e), Ht(e), r & 4) {
        if (e.stateNode === null) throw Error(H(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          ke(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Nt(t, e), Ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        mi(t.containerInfo);
      } catch (w) {
        ke(e, e.return, w);
      }
      break;
    case 4:
      Nt(t, e), Ht(e);
      break;
    case 13:
      Nt(t, e), Ht(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Qd = Ce())), r & 4 && mp(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Be = (u = Be) || d, Nt(t, e), Be = u) : Nt(t, e), Ht(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (W = e, d = e.child; d !== null; ) {
          for (c = W = d; W !== null; ) {
            switch (f = W, p = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Zo(4, f, f.return);
                break;
              case 1:
                zr(f, f.return);
                var y = f.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (w) {
                    ke(r, n, w);
                  }
                }
                break;
              case 5:
                zr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  xp(c);
                  continue;
                }
            }
            p !== null ? (p.return = f, W = p) : xp(c);
          }
          d = d.sibling;
        }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                o = c.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = c.stateNode, a = c.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = ry("display", s));
              } catch (w) {
                ke(e, e.return, w);
              }
            }
          } else if (c.tag === 6) {
            if (d === null) try {
              c.stateNode.nodeValue = u ? "" : c.memoizedProps;
            } catch (w) {
              ke(e, e.return, w);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), c = c.return;
          }
          d === c && (d = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      Nt(t, e), Ht(e), r & 4 && mp(e);
      break;
    case 21:
      break;
    default:
      Nt(
        t,
        e
      ), Ht(e);
  }
}
function Ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (T0(n)) {
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
          r.flags & 32 && (fi(o, ""), r.flags &= -33);
          var i = gp(e);
          Ac(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = gp(e);
          Mc(e, l, s);
          break;
        default:
          throw Error(H(161));
      }
    } catch (a) {
      ke(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function YC(e, t, n) {
  W = e, A0(e);
}
function A0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Es;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Be;
        l = Es;
        var u = Be;
        if (Es = s, (Be = a) && !u) for (W = o; W !== null; ) s = W, a = s.child, s.tag === 22 && s.memoizedState !== null ? vp(o) : a !== null ? (a.return = s, W = a) : vp(o);
        for (; i !== null; ) W = i, A0(i), i = i.sibling;
        W = o, Es = l, Be = u;
      }
      yp(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, W = i) : yp(e);
  }
}
function yp(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Be || ga(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Be) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && tp(t, i, r);
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
              tp(t, s, n);
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
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var c = d.dehydrated;
                  c !== null && mi(c);
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
        Be || t.flags & 512 && Pc(t);
      } catch (f) {
        ke(t, t.return, f);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, W = n;
      break;
    }
    W = t.return;
  }
}
function xp(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, W = n;
      break;
    }
    W = t.return;
  }
}
function vp(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ga(4, t);
          } catch (a) {
            ke(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ke(t, o, a);
            }
          }
          var i = t.return;
          try {
            Pc(t);
          } catch (a) {
            ke(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Pc(t);
          } catch (a) {
            ke(t, s, a);
          }
      }
    } catch (a) {
      ke(t, t.return, a);
    }
    if (t === e) {
      W = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, W = l;
      break;
    }
    W = t.return;
  }
}
var XC = Math.ceil, Dl = xn.ReactCurrentDispatcher, Xd = xn.ReactCurrentOwner, xt = xn.ReactCurrentBatchConfig, de = 0, Le = null, Ie = null, Oe = 0, ot = 0, $r = Wn(0), Me = 0, Ci = null, yr = 0, ma = 0, Gd = 0, qo = null, qe = null, Qd = 0, ho = 1 / 0, tn = null, Ll = !1, Dc = null, On = null, _s = !1, An = null, jl = 0, Jo = 0, Lc = null, Ks = -1, Ws = 0;
function We() {
  return de & 6 ? Ce() : Ks !== -1 ? Ks : Ks = Ce();
}
function zn(e) {
  return e.mode & 1 ? de & 2 && Oe !== 0 ? Oe & -Oe : MC.transition !== null ? (Ws === 0 && (Ws = my()), Ws) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _y(e.type)), e) : 1;
}
function jt(e, t, n, r) {
  if (50 < Jo) throw Jo = 0, Lc = null, Error(H(185));
  Bi(e, n, r), (!(de & 2) || e !== Le) && (e === Le && (!(de & 2) && (ma |= n), Me === 4 && Pn(e, Oe)), rt(e, r), n === 1 && de === 0 && !(t.mode & 1) && (ho = Ce() + 500, fa && Yn()));
}
function rt(e, t) {
  var n = e.callbackNode;
  Mk(e, t);
  var r = xl(e, e === Le ? Oe : 0);
  if (r === 0) n !== null && Ih(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ih(n), t === 1) e.tag === 0 ? PC(wp.bind(null, e)) : Vy(wp.bind(null, e)), kC(function() {
      !(de & 6) && Yn();
    }), n = null;
    else {
      switch (yy(r)) {
        case 1:
          n = Ed;
          break;
        case 4:
          n = py;
          break;
        case 16:
          n = yl;
          break;
        case 536870912:
          n = gy;
          break;
        default:
          n = yl;
      }
      n = $0(n, D0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function D0(e, t) {
  if (Ks = -1, Ws = 0, de & 6) throw Error(H(327));
  var n = e.callbackNode;
  if (Gr() && e.callbackNode !== n) return null;
  var r = xl(e, e === Le ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Rl(e, r);
  else {
    t = r;
    var o = de;
    de |= 2;
    var i = j0();
    (Le !== e || Oe !== t) && (tn = null, ho = Ce() + 500, sr(e, t));
    do
      try {
        ZC();
        break;
      } catch (l) {
        L0(e, l);
      }
    while (!0);
    jd(), Dl.current = i, de = o, Ie !== null ? t = 0 : (Le = null, Oe = 0, t = Me);
  }
  if (t !== 0) {
    if (t === 2 && (o = lc(e), o !== 0 && (r = o, t = jc(e, o))), t === 1) throw n = Ci, sr(e, 0), Pn(e, r), rt(e, Ce()), n;
    if (t === 6) Pn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !GC(o) && (t = Rl(e, r), t === 2 && (i = lc(e), i !== 0 && (r = i, t = jc(e, i))), t === 1)) throw n = Ci, sr(e, 0), Pn(e, r), rt(e, Ce()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          Qn(e, qe, tn);
          break;
        case 3:
          if (Pn(e, r), (r & 130023424) === r && (t = Qd + 500 - Ce(), 10 < t)) {
            if (xl(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              We(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = gc(Qn.bind(null, e, qe, tn), t);
            break;
          }
          Qn(e, qe, tn);
          break;
        case 4:
          if (Pn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Lt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * XC(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = gc(Qn.bind(null, e, qe, tn), r);
            break;
          }
          Qn(e, qe, tn);
          break;
        case 5:
          Qn(e, qe, tn);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return rt(e, Ce()), e.callbackNode === n ? D0.bind(null, e) : null;
}
function jc(e, t) {
  var n = qo;
  return e.current.memoizedState.isDehydrated && (sr(e, t).flags |= 256), e = Rl(e, t), e !== 2 && (t = qe, qe = n, t !== null && Rc(t)), e;
}
function Rc(e) {
  qe === null ? qe = e : qe.push.apply(qe, e);
}
function GC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Ft(i(), o)) return !1;
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
function Pn(e, t) {
  for (t &= ~Gd, t &= ~ma, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Lt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function wp(e) {
  if (de & 6) throw Error(H(327));
  Gr();
  var t = xl(e, 0);
  if (!(t & 1)) return rt(e, Ce()), null;
  var n = Rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = lc(e);
    r !== 0 && (t = r, n = jc(e, r));
  }
  if (n === 1) throw n = Ci, sr(e, 0), Pn(e, t), rt(e, Ce()), n;
  if (n === 6) throw Error(H(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qn(e, qe, tn), rt(e, Ce()), null;
}
function Zd(e, t) {
  var n = de;
  de |= 1;
  try {
    return e(t);
  } finally {
    de = n, de === 0 && (ho = Ce() + 500, fa && Yn());
  }
}
function xr(e) {
  An !== null && An.tag === 0 && !(de & 6) && Gr();
  var t = de;
  de |= 1;
  var n = xt.transition, r = he;
  try {
    if (xt.transition = null, he = 1, e) return e();
  } finally {
    he = r, xt.transition = n, de = t, !(de & 6) && Yn();
  }
}
function qd() {
  ot = $r.current, ve($r);
}
function sr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, NC(n)), Ie !== null) for (n = Ie.return; n !== null; ) {
    var r = n;
    switch (Ad(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && _l();
        break;
      case 3:
        co(), ve(tt), ve(Ue), Hd();
        break;
      case 5:
        $d(r);
        break;
      case 4:
        co();
        break;
      case 13:
        ve(_e);
        break;
      case 19:
        ve(_e);
        break;
      case 10:
        Rd(r.type._context);
        break;
      case 22:
      case 23:
        qd();
    }
    n = n.return;
  }
  if (Le = e, Ie = e = $n(e.current, null), Oe = ot = t, Me = 0, Ci = null, Gd = ma = yr = 0, qe = qo = null, tr !== null) {
    for (t = 0; t < tr.length; t++) if (n = tr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    tr = null;
  }
  return e;
}
function L0(e, t) {
  do {
    var n = Ie;
    try {
      if (jd(), Vs.current = Al, Ml) {
        for (var r = be.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ml = !1;
      }
      if (mr = 0, De = Pe = be = null, Qo = !1, bi = 0, Xd.current = null, n === null || n.return === null) {
        Me = 1, Ci = t, Ie = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Oe, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, d = l, c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var p = lp(s);
          if (p !== null) {
            p.flags &= -257, ap(p, s, l, i, t), p.mode & 1 && sp(i, u, t), t = p, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              sp(i, u, t), Jd();
              break e;
            }
            a = Error(H(426));
          }
        } else if (Ee && l.mode & 1) {
          var E = lp(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), ap(E, s, l, i, t), Dd(fo(a, l));
            break e;
          }
        }
        i = a = fo(a, l), Me !== 4 && (Me = 2), qo === null ? qo = [i] : qo.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = y0(i, a, t);
              ep(i, h);
              break e;
            case 1:
              l = a;
              var x = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof x.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (On === null || !On.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = x0(i, l, t);
                ep(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      F0(n);
    } catch (S) {
      t = S, Ie === n && n !== null && (Ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function j0() {
  var e = Dl.current;
  return Dl.current = Al, e === null ? Al : e;
}
function Jd() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4), Le === null || !(yr & 268435455) && !(ma & 268435455) || Pn(Le, Oe);
}
function Rl(e, t) {
  var n = de;
  de |= 2;
  var r = j0();
  (Le !== e || Oe !== t) && (tn = null, sr(e, t));
  do
    try {
      QC();
      break;
    } catch (o) {
      L0(e, o);
    }
  while (!0);
  if (jd(), de = n, Dl.current = r, Ie !== null) throw Error(H(261));
  return Le = null, Oe = 0, Me;
}
function QC() {
  for (; Ie !== null; ) R0(Ie);
}
function ZC() {
  for (; Ie !== null && !Ek(); ) R0(Ie);
}
function R0(e) {
  var t = z0(e.alternate, e, ot);
  e.memoizedProps = e.pendingProps, t === null ? F0(e) : Ie = t, Xd.current = null;
}
function F0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = UC(n, t), n !== null) {
        n.flags &= 32767, Ie = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Me = 6, Ie = null;
        return;
      }
    } else if (n = BC(n, t, ot), n !== null) {
      Ie = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ie = t;
      return;
    }
    Ie = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function Qn(e, t, n) {
  var r = he, o = xt.transition;
  try {
    xt.transition = null, he = 1, qC(e, t, n, r);
  } finally {
    xt.transition = o, he = r;
  }
  return null;
}
function qC(e, t, n, r) {
  do
    Gr();
  while (An !== null);
  if (de & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(H(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Ak(e, i), e === Le && (Ie = Le = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _s || (_s = !0, $0(yl, function() {
    return Gr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = xt.transition, xt.transition = null;
    var s = he;
    he = 1;
    var l = de;
    de |= 4, Xd.current = null, WC(e, n), M0(n, e), xC(hc), vl = !!fc, hc = fc = null, e.current = n, YC(n), _k(), de = l, he = s, xt.transition = i;
  } else e.current = n;
  if (_s && (_s = !1, An = e, jl = o), i = e.pendingLanes, i === 0 && (On = null), kk(n.stateNode), rt(e, Ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ll) throw Ll = !1, e = Dc, Dc = null, e;
  return jl & 1 && e.tag !== 0 && Gr(), i = e.pendingLanes, i & 1 ? e === Lc ? Jo++ : (Jo = 0, Lc = e) : Jo = 0, Yn(), null;
}
function Gr() {
  if (An !== null) {
    var e = yy(jl), t = xt.transition, n = he;
    try {
      if (xt.transition = null, he = 16 > e ? 16 : e, An === null) var r = !1;
      else {
        if (e = An, An = null, jl = 0, de & 6) throw Error(H(331));
        var o = de;
        for (de |= 4, W = e.current; W !== null; ) {
          var i = W, s = i.child;
          if (W.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (W = u; W !== null; ) {
                  var d = W;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zo(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) c.return = d, W = c;
                  else for (; W !== null; ) {
                    d = W;
                    var f = d.sibling, p = d.return;
                    if (I0(d), d === u) {
                      W = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = p, W = f;
                      break;
                    }
                    W = p;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var E = w.sibling;
                    w.sibling = null, w = E;
                  } while (w !== null);
                }
              }
              W = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, W = s;
          else e: for (; W !== null; ) {
            if (i = W, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Zo(9, i, i.return);
            }
            var h = i.sibling;
            if (h !== null) {
              h.return = i.return, W = h;
              break e;
            }
            W = i.return;
          }
        }
        var x = e.current;
        for (W = x; W !== null; ) {
          s = W;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) g.return = s, W = g;
          else e: for (s = x; W !== null; ) {
            if (l = W, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  ga(9, l);
              }
            } catch (S) {
              ke(l, l.return, S);
            }
            if (l === s) {
              W = null;
              break e;
            }
            var v = l.sibling;
            if (v !== null) {
              v.return = l.return, W = v;
              break e;
            }
            W = l.return;
          }
        }
        if (de = o, Yn(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
          Wt.onPostCommitFiberRoot(la, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      he = n, xt.transition = t;
    }
  }
  return !1;
}
function Sp(e, t, n) {
  t = fo(n, t), t = y0(e, t, 1), e = Fn(e, t, 1), t = We(), e !== null && (Bi(e, 1, t), rt(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3) Sp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Sp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (On === null || !On.has(r))) {
        e = fo(n, e), e = x0(t, e, 1), t = Fn(t, e, 1), e = We(), t !== null && (Bi(t, 1, e), rt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function JC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = We(), e.pingedLanes |= e.suspendedLanes & n, Le === e && (Oe & n) === n && (Me === 4 || Me === 3 && (Oe & 130023424) === Oe && 500 > Ce() - Qd ? sr(e, 0) : Gd |= n), rt(e, t);
}
function O0(e, t) {
  t === 0 && (e.mode & 1 ? (t = hs, hs <<= 1, !(hs & 130023424) && (hs = 4194304)) : t = 1);
  var n = We();
  e = gn(e, t), e !== null && (Bi(e, t, n), rt(e, n));
}
function e2(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), O0(e, n);
}
function t2(e, t) {
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
  r !== null && r.delete(t), O0(e, n);
}
var z0;
z0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return et = !1, VC(e, t, n);
    et = !!(e.flags & 131072);
  }
  else et = !1, Ee && t.flags & 1048576 && By(t, kl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Us(e, t), e = t.pendingProps;
      var o = lo(t, Ue.current);
      Xr(t, n), o = Bd(null, t, r, e, o, n);
      var i = Ud();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, nt(r) ? (i = !0, bl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Od(t), o.updater = pa, t.stateNode = o, o._reactInternals = t, Ec(t, r, e, n), t = Nc(null, t, r, !0, i, n)) : (t.tag = 0, Ee && i && Md(t), Ke(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Us(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = r2(r), e = kt(r, e), o) {
          case 0:
            t = bc(null, t, r, e, n);
            break e;
          case 1:
            t = dp(null, t, r, e, n);
            break e;
          case 11:
            t = up(null, t, r, e, n);
            break e;
          case 14:
            t = cp(null, t, r, kt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), bc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), dp(e, t, r, o, n);
    case 3:
      e: {
        if (E0(t), e === null) throw Error(H(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Gy(e, t), Tl(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = fo(Error(H(423)), t), t = fp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = fo(Error(H(424)), t), t = fp(e, t, r, n, o);
          break e;
        } else for (lt = Rn(t.stateNode.containerInfo.firstChild), at = t, Ee = !0, Tt = null, n = Yy(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ao(), r === o) {
            t = mn(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Qy(t), e === null && vc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, pc(r, o) ? s = null : i !== null && pc(r, i) && (t.flags |= 32), S0(e, t), Ke(e, t, s, n), t.child;
    case 6:
      return e === null && vc(t), null;
    case 13:
      return _0(e, t, n);
    case 4:
      return zd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = uo(t, null, r, n) : Ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), up(e, t, r, o, n);
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ge(Cl, r._currentValue), r._currentValue = s, i !== null) if (Ft(i.value, s)) {
          if (i.children === o.children && !tt.current) {
            t = mn(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = cn(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), wc(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), wc(s, n, t), s = i.sibling;
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
        Ke(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Xr(t, n), o = vt(o), r = r(o), t.flags |= 1, Ke(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = kt(r, t.pendingProps), o = kt(r.type, o), cp(e, t, r, o, n);
    case 15:
      return v0(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), Us(e, t), t.tag = 1, nt(r) ? (e = !0, bl(t)) : e = !1, Xr(t, n), m0(t, r, o), Ec(t, r, o, n), Nc(null, t, r, !0, e, n);
    case 19:
      return b0(e, t, n);
    case 22:
      return w0(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function $0(e, t) {
  return hy(e, t);
}
function n2(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function yt(e, t, n, r) {
  return new n2(e, t, n, r);
}
function ef(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function r2(e) {
  if (typeof e == "function") return ef(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === vd) return 11;
    if (e === wd) return 14;
  }
  return 2;
}
function $n(e, t) {
  var n = e.alternate;
  return n === null ? (n = yt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ys(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") ef(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Pr:
      return lr(n.children, o, i, t);
    case xd:
      s = 8, o |= 8;
      break;
    case Wu:
      return e = yt(12, n, t, o | 2), e.elementType = Wu, e.lanes = i, e;
    case Yu:
      return e = yt(13, n, t, o), e.elementType = Yu, e.lanes = i, e;
    case Xu:
      return e = yt(19, n, t, o), e.elementType = Xu, e.lanes = i, e;
    case Qm:
      return ya(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Xm:
          s = 10;
          break e;
        case Gm:
          s = 9;
          break e;
        case vd:
          s = 11;
          break e;
        case wd:
          s = 14;
          break e;
        case kn:
          s = 16, r = null;
          break e;
      }
      throw Error(H(130, e == null ? e : typeof e, ""));
  }
  return t = yt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function lr(e, t, n, r) {
  return e = yt(7, e, r, t), e.lanes = n, e;
}
function ya(e, t, n, r) {
  return e = yt(22, e, r, t), e.elementType = Qm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function mu(e, t, n) {
  return e = yt(6, e, null, t), e.lanes = n, e;
}
function yu(e, t, n) {
  return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function o2(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Za(0), this.expirationTimes = Za(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Za(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function tf(e, t, n, r, o, i, s, l, a) {
  return e = new o2(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = yt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Od(i), e;
}
function i2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Tr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function H0(e) {
  if (!e) return Un;
  e = e._reactInternals;
  e: {
    if (Sr(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
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
    if (nt(n)) return Hy(e, n, t);
  }
  return t;
}
function V0(e, t, n, r, o, i, s, l, a) {
  return e = tf(n, r, !0, e, o, i, s, l, a), e.context = H0(null), n = e.current, r = We(), o = zn(n), i = cn(r, o), i.callback = t ?? null, Fn(n, i, o), e.current.lanes = o, Bi(e, o, r), rt(e, r), e;
}
function xa(e, t, n, r) {
  var o = t.current, i = We(), s = zn(o);
  return n = H0(n), t.context === null ? t.context = n : t.pendingContext = n, t = cn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Fn(o, t, s), e !== null && (jt(e, o, s, i), Hs(e, o, s)), s;
}
function Fl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ep(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nf(e, t) {
  Ep(e, t), (e = e.alternate) && Ep(e, t);
}
function s2() {
  return null;
}
var B0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function rf(e) {
  this._internalRoot = e;
}
va.prototype.render = rf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  xa(e, t, null, null);
};
va.prototype.unmount = rf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xr(function() {
      xa(null, e, null, null);
    }), t[pn] = null;
  }
};
function va(e) {
  this._internalRoot = e;
}
va.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = wy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tn.length && t !== 0 && t < Tn[n].priority; n++) ;
    Tn.splice(n, 0, e), n === 0 && Ey(e);
  }
};
function of(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function wa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _p() {
}
function l2(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Fl(s);
        i.call(u);
      };
    }
    var s = V0(t, r, e, 0, null, !1, !1, "", _p);
    return e._reactRootContainer = s, e[pn] = s.current, vi(e.nodeType === 8 ? e.parentNode : e), xr(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Fl(a);
      l.call(u);
    };
  }
  var a = tf(e, 0, !1, null, null, !1, !1, "", _p);
  return e._reactRootContainer = a, e[pn] = a.current, vi(e.nodeType === 8 ? e.parentNode : e), xr(function() {
    xa(t, a, n, r);
  }), a;
}
function Sa(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Fl(s);
        l.call(a);
      };
    }
    xa(t, s, e, o);
  } else s = l2(n, t, e, o, r);
  return Fl(s);
}
xy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ho(t.pendingLanes);
        n !== 0 && (_d(t, n | 1), rt(t, Ce()), !(de & 6) && (ho = Ce() + 500, Yn()));
      }
      break;
    case 13:
      xr(function() {
        var r = gn(e, 1);
        if (r !== null) {
          var o = We();
          jt(r, e, 1, o);
        }
      }), nf(e, 1);
  }
};
bd = function(e) {
  if (e.tag === 13) {
    var t = gn(e, 134217728);
    if (t !== null) {
      var n = We();
      jt(t, e, 134217728, n);
    }
    nf(e, 134217728);
  }
};
vy = function(e) {
  if (e.tag === 13) {
    var t = zn(e), n = gn(e, t);
    if (n !== null) {
      var r = We();
      jt(n, e, t, r);
    }
    nf(e, t);
  }
};
wy = function() {
  return he;
};
Sy = function(e, t) {
  var n = he;
  try {
    return he = e, t();
  } finally {
    he = n;
  }
};
oc = function(e, t, n) {
  switch (t) {
    case "input":
      if (Zu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = da(r);
            if (!o) throw Error(H(90));
            qm(r), Zu(r, o);
          }
        }
      }
      break;
    case "textarea":
      ey(e, n);
      break;
    case "select":
      t = n.value, t != null && Ur(e, !!n.multiple, t, !1);
  }
};
ly = Zd;
ay = xr;
var a2 = { usingClientEntryPoint: !1, Events: [Ki, Lr, da, iy, sy, Zd] }, Do = { findFiberByHostInstance: er, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, u2 = { bundleType: Do.bundleType, version: Do.version, rendererPackageName: Do.rendererPackageName, rendererConfig: Do.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = dy(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Do.findFiberByHostInstance || s2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bs.isDisabled && bs.supportsFiber) try {
    la = bs.inject(u2), Wt = bs;
  } catch {
  }
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a2;
dt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!of(t)) throw Error(H(200));
  return i2(e, t, null, n);
};
dt.createRoot = function(e, t) {
  if (!of(e)) throw Error(H(299));
  var n = !1, r = "", o = B0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = tf(e, 1, !1, null, null, n, !1, r, o), e[pn] = t.current, vi(e.nodeType === 8 ? e.parentNode : e), new rf(t);
};
dt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(H(188)) : (e = Object.keys(e).join(","), Error(H(268, e)));
  return e = dy(t), e = e === null ? null : e.stateNode, e;
};
dt.flushSync = function(e) {
  return xr(e);
};
dt.hydrate = function(e, t, n) {
  if (!wa(t)) throw Error(H(200));
  return Sa(null, e, t, !0, n);
};
dt.hydrateRoot = function(e, t, n) {
  if (!of(e)) throw Error(H(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = B0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = V0(t, null, e, 1, n ?? null, o, !1, i, s), e[pn] = t.current, vi(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new va(t);
};
dt.render = function(e, t, n) {
  if (!wa(t)) throw Error(H(200));
  return Sa(null, e, t, !1, n);
};
dt.unmountComponentAtNode = function(e) {
  if (!wa(e)) throw Error(H(40));
  return e._reactRootContainer ? (xr(function() {
    Sa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pn] = null;
    });
  }), !0) : !1;
};
dt.unstable_batchedUpdates = Zd;
dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!wa(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return Sa(e, t, n, !1, r);
};
dt.version = "18.3.1-next-f1338f8080-20240426";
function U0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U0);
    } catch (e) {
      console.error(e);
    }
}
U0(), Um.exports = dt;
var K0 = Um.exports;
const Ea = b.createContext(null), c2 = Ea.Provider, W0 = Xt.error001();
function ae(e, t) {
  const n = b.useContext(Ea);
  if (n === null)
    throw new Error(W0);
  return Bm(n, e, t);
}
function Se() {
  const e = b.useContext(Ea);
  if (e === null)
    throw new Error(W0);
  return b.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const bp = { display: "none" }, d2 = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Y0 = "react-flow__node-desc", X0 = "react-flow__edge-desc", f2 = "react-flow__aria-live", h2 = (e) => e.ariaLiveMessage, p2 = (e) => e.ariaLabelConfig;
function g2({ rfId: e }) {
  const t = ae(h2);
  return m.jsx("div", { id: `${f2}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: d2, children: t });
}
function m2({ rfId: e, disableKeyboardA11y: t }) {
  const n = ae(p2);
  return m.jsxs(m.Fragment, { children: [m.jsx("div", { id: `${Y0}-${e}`, style: bp, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), m.jsx("div", { id: `${X0}-${e}`, style: bp, children: n["edge.a11yDescription.default"] }), !t && m.jsx(g2, { rfId: e })] });
}
const _a = b.forwardRef(({ position: e = "top-left", children: t, className: n, style: r, ...o }, i) => {
  const s = `${e}`.split("-");
  return m.jsx("div", { className: Te(["react-flow__panel", n, ...s]), style: r, ref: i, ...o, children: t });
});
_a.displayName = "Panel";
function y2({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : m.jsx(_a, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: m.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const x2 = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, Ns = (e) => e.id;
function v2(e, t) {
  return we(e.selectedNodes.map(Ns), t.selectedNodes.map(Ns)) && we(e.selectedEdges.map(Ns), t.selectedEdges.map(Ns));
}
function w2({ onSelectionChange: e }) {
  const t = Se(), { selectedNodes: n, selectedEdges: r } = ae(x2, v2);
  return b.useEffect(() => {
    const o = { nodes: n, edges: r };
    e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
  }, [n, r, e]), null;
}
const S2 = (e) => !!e.onSelectionChangeHandlers;
function E2({ onSelectionChange: e }) {
  const t = ae(S2);
  return e || t ? m.jsx(w2, { onSelectionChange: e }) : null;
}
const G0 = [0, 0], _2 = { x: 0, y: 0, zoom: 1 }, b2 = [
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
], Np = [...b2, "rfId"], N2 = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), kp = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: li,
  nodeOrigin: G0,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function k2(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: o, setTranslateExtent: i, setNodeExtent: s, reset: l, setDefaultNodesAndEdges: a } = ae(N2, we), u = Se();
  b.useEffect(() => (a(e.defaultNodes, e.defaultEdges), () => {
    d.current = kp, l();
  }), []);
  const d = b.useRef(kp);
  return b.useEffect(
    () => {
      for (const c of Np) {
        const f = e[c], p = d.current[c];
        f !== p && (typeof e[c] > "u" || (c === "nodes" ? t(f) : c === "edges" ? n(f) : c === "minZoom" ? r(f) : c === "maxZoom" ? o(f) : c === "translateExtent" ? i(f) : c === "nodeExtent" ? s(f) : c === "ariaLabelConfig" ? u.setState({ ariaLabelConfig: Kb(f) }) : c === "fitView" ? u.setState({ fitViewQueued: f }) : c === "fitViewOptions" ? u.setState({ fitViewOptions: f }) : u.setState({ [c]: f })));
      }
      d.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    Np.map((c) => e[c])
  ), null;
}
function Cp() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function C2(e) {
  var r;
  const [t, n] = b.useState(e === "system" ? null : e);
  return b.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = Cp(), i = () => n(o != null && o.matches ? "dark" : "light");
    return i(), o == null || o.addEventListener("change", i), () => {
      o == null || o.removeEventListener("change", i);
    };
  }, [e]), t !== null ? t : (r = Cp()) != null && r.matches ? "dark" : "light";
}
const Ip = typeof document < "u" ? document : null;
function Ii(e = null, t = { target: Ip, actInsideInputWithModifier: !0 }) {
  const [n, r] = b.useState(!1), o = b.useRef(!1), i = b.useRef(/* @__PURE__ */ new Set([])), [s, l] = b.useMemo(() => {
    if (e !== null) {
      const u = (Array.isArray(e) ? e : [e]).filter((c) => typeof c == "string").map((c) => c.replace("+", `
`).replace(`

`, `
+`).split(`
`)), d = u.reduce((c, f) => c.concat(...f), []);
      return [u, d];
    }
    return [[], []];
  }, [e]);
  return b.useEffect(() => {
    const a = (t == null ? void 0 : t.target) ?? Ip, u = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const d = (p) => {
        var E, h;
        if (o.current = p.ctrlKey || p.metaKey || p.shiftKey || p.altKey, (!o.current || o.current && !u) && _m(p))
          return !1;
        const w = Pp(p.code, l);
        if (i.current.add(p[w]), Tp(s, i.current, !1)) {
          const x = ((h = (E = p.composedPath) == null ? void 0 : E.call(p)) == null ? void 0 : h[0]) || p.target, g = (x == null ? void 0 : x.nodeName) === "BUTTON" || (x == null ? void 0 : x.nodeName) === "A";
          t.preventDefault !== !1 && (o.current || !g) && p.preventDefault(), r(!0);
        }
      }, c = (p) => {
        const y = Pp(p.code, l);
        Tp(s, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(p[y]), p.key === "Meta" && i.current.clear(), o.current = !1;
      }, f = () => {
        i.current.clear(), r(!1);
      };
      return a == null || a.addEventListener("keydown", d), a == null || a.addEventListener("keyup", c), window.addEventListener("blur", f), window.addEventListener("contextmenu", f), () => {
        a == null || a.removeEventListener("keydown", d), a == null || a.removeEventListener("keyup", c), window.removeEventListener("blur", f), window.removeEventListener("contextmenu", f);
      };
    }
  }, [e, r]), n;
}
function Tp(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function Pp(e, t) {
  return t.includes(e) ? "code" : "key";
}
const I2 = () => {
  const e = Se();
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
      const { width: r, height: o, minZoom: i, maxZoom: s, panZoom: l } = e.getState(), a = ld(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
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
      const { x: l, y: a } = s.getBoundingClientRect(), u = {
        x: t.x - l,
        y: t.y - a
      }, d = n.snapGrid ?? o, c = n.snapToGrid ?? i;
      return Vi(u, r, c, d);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: r } = e.getState();
      if (!r)
        return t;
      const { x: o, y: i } = r.getBoundingClientRect(), s = fl(t, n);
      return {
        x: s.x + o,
        y: s.y + i
      };
    }
  }), []);
};
function Q0(e, t) {
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
      T2(a, l);
    n.push(l);
  }
  return o.length && o.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function T2(e, t) {
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
function Z0(e, t) {
  return Q0(e, t);
}
function q0(e, t) {
  return Q0(e, t);
}
function Zn(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Hr(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const s = t.has(o);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), r.push(Zn(i.id, s)));
  }
  return r;
}
function Mp({ items: e = [], lookup: t }) {
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
function Ap(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const Dp = (e) => jb(e), P2 = (e) => gm(e);
function J0(e) {
  return b.forwardRef(e);
}
const M2 = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function Lp(e) {
  const [t, n] = b.useState(BigInt(0)), [r] = b.useState(() => A2(() => n((o) => o + BigInt(1))));
  return M2(() => {
    const o = r.get();
    o.length && (e(o), r.reset());
  }, [t]), r;
}
function A2(e) {
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
const ex = b.createContext(null);
function D2({ children: e }) {
  const t = Se(), n = b.useCallback((l) => {
    const { nodes: a = [], setNodes: u, hasDefaultNodes: d, onNodesChange: c, nodeLookup: f, fitViewQueued: p, onNodesChangeMiddlewareMap: y } = t.getState();
    let w = a;
    for (const h of l)
      w = typeof h == "function" ? h(w) : h;
    let E = Mp({
      items: w,
      lookup: f
    });
    for (const h of y.values())
      E = h(E);
    d && u(w), E.length > 0 ? c == null || c(E) : p && window.requestAnimationFrame(() => {
      const { fitViewQueued: h, nodes: x, setNodes: g } = t.getState();
      h && g(x);
    });
  }, []), r = Lp(n), o = b.useCallback((l) => {
    const { edges: a = [], setEdges: u, hasDefaultEdges: d, onEdgesChange: c, edgeLookup: f } = t.getState();
    let p = a;
    for (const y of l)
      p = typeof y == "function" ? y(p) : y;
    d ? u(p) : c && c(Mp({
      items: p,
      lookup: f
    }));
  }, []), i = Lp(o), s = b.useMemo(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return m.jsx(ex.Provider, { value: s, children: e });
}
function L2() {
  const e = b.useContext(ex);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const j2 = (e) => !!e.panZoom;
function Yi() {
  const e = I2(), t = Se(), n = L2(), r = ae(j2), o = b.useMemo(() => {
    const i = (c) => t.getState().nodeLookup.get(c), s = (c) => {
      n.nodeQueue.push(c);
    }, l = (c) => {
      n.edgeQueue.push(c);
    }, a = (c) => {
      var h, x;
      const { nodeLookup: f, nodeOrigin: p } = t.getState(), y = Dp(c) ? c : f.get(c.id), w = y.parentId ? Sm(y.position, y.measured, y.parentId, f, p) : y.position, E = {
        ...y,
        position: w,
        width: ((h = y.measured) == null ? void 0 : h.width) ?? y.width,
        height: ((x = y.measured) == null ? void 0 : x.height) ?? y.height
      };
      return no(E);
    }, u = (c, f, p = { replace: !1 }) => {
      s((y) => y.map((w) => {
        if (w.id === c) {
          const E = typeof f == "function" ? f(w) : f;
          return p.replace && Dp(E) ? E : { ...w, ...E };
        }
        return w;
      }));
    }, d = (c, f, p = { replace: !1 }) => {
      l((y) => y.map((w) => {
        if (w.id === c) {
          const E = typeof f == "function" ? f(w) : f;
          return p.replace && P2(E) ? E : { ...w, ...E };
        }
        return w;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((c) => ({ ...c })),
      getNode: (c) => {
        var f;
        return (f = i(c)) == null ? void 0 : f.internals.userNode;
      },
      getInternalNode: i,
      getEdges: () => {
        const { edges: c = [] } = t.getState();
        return c.map((f) => ({ ...f }));
      },
      getEdge: (c) => t.getState().edgeLookup.get(c),
      setNodes: s,
      setEdges: l,
      addNodes: (c) => {
        const f = Array.isArray(c) ? c : [c];
        n.nodeQueue.push((p) => [...p, ...f]);
      },
      addEdges: (c) => {
        const f = Array.isArray(c) ? c : [c];
        n.edgeQueue.push((p) => [...p, ...f]);
      },
      toObject: () => {
        const { nodes: c = [], edges: f = [], transform: p } = t.getState(), [y, w, E] = p;
        return {
          nodes: c.map((h) => ({ ...h })),
          edges: f.map((h) => ({ ...h })),
          viewport: {
            x: y,
            y: w,
            zoom: E
          }
        };
      },
      deleteElements: async ({ nodes: c = [], edges: f = [] }) => {
        const { nodes: p, edges: y, onNodesDelete: w, onEdgesDelete: E, triggerNodeChanges: h, triggerEdgeChanges: x, onDelete: g, onBeforeDelete: v } = t.getState(), { nodes: S, edges: _ } = await $b({
          nodesToRemove: c,
          edgesToRemove: f,
          nodes: p,
          edges: y,
          onBeforeDelete: v
        }), N = _.length > 0, k = S.length > 0;
        if (N) {
          const T = _.map(Ap);
          E == null || E(_), x(T);
        }
        if (k) {
          const T = S.map(Ap);
          w == null || w(S), h(T);
        }
        return (k || N) && (g == null || g({ nodes: S, edges: _ })), { deletedNodes: S, deletedEdges: _ };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (c, f = !0, p) => {
        const y = oh(c), w = y ? c : a(c), E = p !== void 0;
        return w ? (p || t.getState().nodes).filter((h) => {
          const x = t.getState().nodeLookup.get(h.id);
          if (x && !y && (h.id === c.id || !x.internals.positionAbsolute))
            return !1;
          const g = no(E ? h : x), v = ui(g, w);
          return f && v > 0 || v >= g.width * g.height || v >= w.width * w.height;
        }) : [];
      },
      isNodeIntersecting: (c, f, p = !0) => {
        const w = oh(c) ? c : a(c);
        if (!w)
          return !1;
        const E = ui(w, f);
        return p && E > 0 || E >= f.width * f.height || E >= w.width * w.height;
      },
      updateNode: u,
      updateNodeData: (c, f, p = { replace: !1 }) => {
        u(c, (y) => {
          const w = typeof f == "function" ? f(y) : f;
          return p.replace ? { ...y, data: w } : { ...y, data: { ...y.data, ...w } };
        }, p);
      },
      updateEdge: d,
      updateEdgeData: (c, f, p = { replace: !1 }) => {
        d(c, (y) => {
          const w = typeof f == "function" ? f(y) : f;
          return p.replace ? { ...y, data: w } : { ...y, data: { ...y.data, ...w } };
        }, p);
      },
      getNodesBounds: (c) => {
        const { nodeLookup: f, nodeOrigin: p } = t.getState();
        return Rb(c, { nodeLookup: f, nodeOrigin: p });
      },
      getHandleConnections: ({ type: c, id: f, nodeId: p }) => {
        var y;
        return Array.from(((y = t.getState().connectionLookup.get(`${p}-${c}${f ? `-${f}` : ""}`)) == null ? void 0 : y.values()) ?? []);
      },
      getNodeConnections: ({ type: c, handleId: f, nodeId: p }) => {
        var y;
        return Array.from(((y = t.getState().connectionLookup.get(`${p}${c ? f ? `-${c}-${f}` : `-${c}` : ""}`)) == null ? void 0 : y.values()) ?? []);
      },
      fitView: async (c) => {
        const f = t.getState().fitViewResolver ?? Ub();
        return t.setState({ fitViewQueued: !0, fitViewOptions: c, fitViewResolver: f }), n.nodeQueue.push((p) => [...p]), f.promise;
      }
    };
  }, []);
  return b.useMemo(() => ({
    ...o,
    ...e,
    viewportInitialized: r
  }), [r]);
}
const jp = (e) => e.selected, R2 = typeof window < "u" ? window : void 0;
function F2({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = Se(), { deleteElements: r } = Yi(), o = Ii(e, { actInsideInputWithModifier: !1 }), i = Ii(t, { target: R2 });
  b.useEffect(() => {
    if (o) {
      const { edges: s, nodes: l } = n.getState();
      r({ nodes: l.filter(jp), edges: s.filter(jp) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), b.useEffect(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function O2(e) {
  const t = Se();
  b.useEffect(() => {
    const n = () => {
      var o, i, s, l;
      if (!e.current || !(((i = (o = e.current).checkVisibility) == null ? void 0 : i.call(o)) ?? !0))
        return !1;
      const r = ad(e.current);
      (r.height === 0 || r.width === 0) && ((l = (s = t.getState()).onError) == null || l.call(s, "004", Xt.error004())), t.setState({ width: r.width || 500, height: r.height || 500 });
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
const ba = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, z2 = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function $2({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: o = 0.5, panOnScrollMode: i = ir.Free, zoomOnDoubleClick: s = !0, panOnDrag: l = !0, defaultViewport: a, translateExtent: u, minZoom: d, maxZoom: c, zoomActivationKeyCode: f, preventScrolling: p = !0, children: y, noWheelClassName: w, noPanClassName: E, onViewportChange: h, isControlledViewport: x, paneClickDistance: g, selectionOnDrag: v }) {
  const S = Se(), _ = b.useRef(null), { userSelectionActive: N, lib: k, connectionInProgress: T } = ae(z2, we), D = Ii(f), A = b.useRef();
  O2(_);
  const M = b.useCallback(($) => {
    h == null || h({ x: $[0], y: $[1], zoom: $[2] }), x || S.setState({ transform: $ });
  }, [h, x]);
  return b.useEffect(() => {
    if (_.current) {
      A.current = CN({
        domNode: _.current,
        minZoom: d,
        maxZoom: c,
        translateExtent: u,
        viewport: a,
        onDraggingChange: (L) => S.setState({ paneDragging: L }),
        onPanZoomStart: (L, F) => {
          const { onViewportChangeStart: C, onMoveStart: P } = S.getState();
          P == null || P(L, F), C == null || C(F);
        },
        onPanZoom: (L, F) => {
          const { onViewportChange: C, onMove: P } = S.getState();
          P == null || P(L, F), C == null || C(F);
        },
        onPanZoomEnd: (L, F) => {
          const { onViewportChangeEnd: C, onMoveEnd: P } = S.getState();
          P == null || P(L, F), C == null || C(F);
        }
      });
      const { x: $, y: I, zoom: j } = A.current.getViewport();
      return S.setState({
        panZoom: A.current,
        transform: [$, I, j],
        domNode: _.current.closest(".react-flow")
      }), () => {
        var L;
        (L = A.current) == null || L.destroy();
      };
    }
  }, []), b.useEffect(() => {
    var $;
    ($ = A.current) == null || $.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: r,
      panOnScrollSpeed: o,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: l,
      zoomActivationKeyPressed: D,
      preventScrolling: p,
      noPanClassName: E,
      userSelectionActive: N,
      noWheelClassName: w,
      lib: k,
      onTransformChange: M,
      connectionInProgress: T,
      selectionOnDrag: v,
      paneClickDistance: g
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
    D,
    p,
    E,
    N,
    w,
    k,
    M,
    T,
    v,
    g
  ]), m.jsx("div", { className: "react-flow__renderer", ref: _, style: ba, children: y });
}
const H2 = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function V2() {
  const { userSelectionActive: e, userSelectionRect: t } = ae(H2, we);
  return e && t ? m.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const xu = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, B2 = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function U2({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = ai.Full, panOnDrag: r, paneClickDistance: o, selectionOnDrag: i, onSelectionStart: s, onSelectionEnd: l, onPaneClick: a, onPaneContextMenu: u, onPaneScroll: d, onPaneMouseEnter: c, onPaneMouseMove: f, onPaneMouseLeave: p, children: y }) {
  const w = Se(), { userSelectionActive: E, elementsSelectable: h, dragging: x, connectionInProgress: g } = ae(B2, we), v = h && (e || E), S = b.useRef(null), _ = b.useRef(), N = b.useRef(/* @__PURE__ */ new Set()), k = b.useRef(/* @__PURE__ */ new Set()), T = b.useRef(!1), D = (C) => {
    if (T.current || g) {
      T.current = !1;
      return;
    }
    a == null || a(C), w.getState().resetSelectedElements(), w.setState({ nodesSelectionActive: !1 });
  }, A = (C) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      C.preventDefault();
      return;
    }
    u == null || u(C);
  }, M = d ? (C) => d(C) : void 0, $ = (C) => {
    T.current && (C.stopPropagation(), T.current = !1);
  }, I = (C) => {
    var X, G;
    const { domNode: P } = w.getState();
    if (_.current = P == null ? void 0 : P.getBoundingClientRect(), !_.current)
      return;
    const R = C.target === S.current;
    if (!R && !!C.target.closest(".nokey") || !e || !(i && R || t) || C.button !== 0 || !C.isPrimary)
      return;
    (G = (X = C.target) == null ? void 0 : X.setPointerCapture) == null || G.call(X, C.pointerId), T.current = !1;
    const { x: U, y: V } = Dt(C.nativeEvent, _.current);
    w.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: U,
        startY: V,
        x: U,
        y: V
      }
    }), R || (C.stopPropagation(), C.preventDefault());
  }, j = (C) => {
    const { userSelectionRect: P, transform: R, nodeLookup: O, edgeLookup: z, connectionLookup: U, triggerNodeChanges: V, triggerEdgeChanges: X, defaultEdgeOptions: G, resetSelectedElements: Q } = w.getState();
    if (!_.current || !P)
      return;
    const { x: B, y: q } = Dt(C.nativeEvent, _.current), { startX: ie, startY: te } = P;
    if (!T.current) {
      const ue = t ? 0 : o;
      if (Math.hypot(B - ie, q - te) <= ue)
        return;
      Q(), s == null || s(C);
    }
    T.current = !0;
    const J = {
      startX: ie,
      startY: te,
      x: B < ie ? B : ie,
      y: q < te ? q : te,
      width: Math.abs(B - ie),
      height: Math.abs(q - te)
    }, ee = N.current, ce = k.current;
    N.current = new Set(sd(O, J, R, n === ai.Partial, !0).map((ue) => ue.id)), k.current = /* @__PURE__ */ new Set();
    const pe = (G == null ? void 0 : G.selectable) ?? !0;
    for (const ue of N.current) {
      const Ae = U.get(ue);
      if (Ae)
        for (const { edgeId: Et } of Ae.values()) {
          const _t = z.get(Et);
          _t && (_t.selectable ?? pe) && k.current.add(Et);
        }
    }
    if (!ih(ee, N.current)) {
      const ue = Hr(O, N.current, !0);
      V(ue);
    }
    if (!ih(ce, k.current)) {
      const ue = Hr(z, k.current);
      X(ue);
    }
    w.setState({
      userSelectionRect: J,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, L = (C) => {
    var P, R;
    C.button === 0 && ((R = (P = C.target) == null ? void 0 : P.releasePointerCapture) == null || R.call(P, C.pointerId), !E && C.target === S.current && w.getState().userSelectionRect && (D == null || D(C)), w.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), T.current && (l == null || l(C), w.setState({
      nodesSelectionActive: N.current.size > 0
    })));
  }, F = r === !0 || Array.isArray(r) && r.includes(0);
  return m.jsxs("div", { className: Te(["react-flow__pane", { draggable: F, dragging: x, selection: e }]), onClick: v ? void 0 : xu(D, S), onContextMenu: xu(A, S), onWheel: xu(M, S), onPointerEnter: v ? void 0 : c, onPointerMove: v ? j : f, onPointerUp: v ? L : void 0, onPointerDownCapture: v ? I : void 0, onClickCapture: v ? $ : void 0, onPointerLeave: p, ref: S, style: ba, children: [y, m.jsx(V2, {})] });
}
function Fc({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: o, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: l, onError: a } = t.getState(), u = l.get(e);
  if (!u) {
    a == null || a("012", Xt.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), u.selected ? (n || u.selected && s) && (i({ nodes: [u], edges: [] }), requestAnimationFrame(() => {
    var d;
    return (d = r == null ? void 0 : r.current) == null ? void 0 : d.blur();
  })) : o([e]);
}
function tx({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, nodeClickDistance: s }) {
  const l = Se(), [a, u] = b.useState(!1), d = b.useRef();
  return b.useEffect(() => {
    d.current = hN({
      getStoreItems: () => l.getState(),
      onNodeMouseDown: (c) => {
        Fc({
          id: c,
          store: l,
          nodeRef: e
        });
      },
      onDragStart: () => {
        u(!0);
      },
      onDragStop: () => {
        u(!1);
      }
    });
  }, []), b.useEffect(() => {
    var c, f;
    if (t)
      (c = d.current) == null || c.destroy();
    else if (e.current)
      return (f = d.current) == null || f.update({
        noDragClassName: n,
        handleSelector: r,
        domNode: e.current,
        isSelectable: i,
        nodeId: o,
        nodeClickDistance: s
      }), () => {
        var p;
        (p = d.current) == null || p.destroy();
      };
  }, [n, r, t, i, e, o]), a;
}
const K2 = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function nx() {
  const e = Se();
  return b.useCallback((n) => {
    const { nodeExtent: r, snapToGrid: o, snapGrid: i, nodesDraggable: s, onError: l, updateNodePositions: a, nodeLookup: u, nodeOrigin: d } = e.getState(), c = /* @__PURE__ */ new Map(), f = K2(s), p = o ? i[0] : 5, y = o ? i[1] : 5, w = n.direction.x * p * n.factor, E = n.direction.y * y * n.factor;
    for (const [, h] of u) {
      if (!f(h))
        continue;
      let x = {
        x: h.internals.positionAbsolute.x + w,
        y: h.internals.positionAbsolute.y + E
      };
      o && (x = Hi(x, i));
      const { position: g, positionAbsolute: v } = mm({
        nodeId: h.id,
        nextPosition: x,
        nodeLookup: u,
        nodeExtent: r,
        nodeOrigin: d,
        onError: l
      });
      h.position = g, h.internals.positionAbsolute = v, c.set(h.id, h);
    }
    a(c);
  }, []);
}
const sf = b.createContext(null), W2 = sf.Provider;
sf.Consumer;
const rx = () => b.useContext(sf), Y2 = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), X2 = (e, t, n) => (r) => {
  const { connectionClickStartHandle: o, connectionMode: i, connection: s } = r, { fromHandle: l, toHandle: a, isValid: u } = s, d = (a == null ? void 0 : a.nodeId) === e && (a == null ? void 0 : a.id) === t && (a == null ? void 0 : a.type) === n;
  return {
    connectingFrom: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.id) === t && (l == null ? void 0 : l.type) === n,
    connectingTo: d,
    clickConnecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.id) === t && (o == null ? void 0 : o.type) === n,
    isPossibleEndHandle: i === eo.Strict ? (l == null ? void 0 : l.type) !== n : e !== (l == null ? void 0 : l.nodeId) || t !== (l == null ? void 0 : l.id),
    connectionInProcess: !!l,
    clickConnectionInProcess: !!o,
    valid: d && u
  };
};
function G2({ type: e = "source", position: t = Y.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: s, onConnect: l, children: a, className: u, onMouseDown: d, onTouchStart: c, ...f }, p) {
  var j, L;
  const y = s || null, w = e === "target", E = Se(), h = rx(), { connectOnClick: x, noPanClassName: g, rfId: v } = ae(Y2, we), { connectingFrom: S, connectingTo: _, clickConnecting: N, isPossibleEndHandle: k, connectionInProcess: T, clickConnectionInProcess: D, valid: A } = ae(X2(h, y, e), we);
  h || (L = (j = E.getState()).onError) == null || L.call(j, "010", Xt.error010());
  const M = (F) => {
    const { defaultEdgeOptions: C, onConnect: P, hasDefaultEdges: R } = E.getState(), O = {
      ...C,
      ...F
    };
    if (R) {
      const { edges: z, setEdges: U } = E.getState();
      U(Zb(O, z));
    }
    P == null || P(O), l == null || l(O);
  }, $ = (F) => {
    if (!h)
      return;
    const C = bm(F.nativeEvent);
    if (o && (C && F.button === 0 || !C)) {
      const P = E.getState();
      Uu.onPointerDown(F.nativeEvent, {
        handleDomNode: F.currentTarget,
        autoPanOnConnect: P.autoPanOnConnect,
        connectionMode: P.connectionMode,
        connectionRadius: P.connectionRadius,
        domNode: P.domNode,
        nodeLookup: P.nodeLookup,
        lib: P.lib,
        isTarget: w,
        handleId: y,
        nodeId: h,
        flowId: P.rfId,
        panBy: P.panBy,
        cancelConnection: P.cancelConnection,
        onConnectStart: P.onConnectStart,
        onConnectEnd: P.onConnectEnd,
        updateConnection: P.updateConnection,
        onConnect: M,
        isValidConnection: n || P.isValidConnection,
        getTransform: () => E.getState().transform,
        getFromHandle: () => E.getState().connection.fromHandle,
        autoPanSpeed: P.autoPanSpeed,
        dragThreshold: P.connectionDragThreshold
      });
    }
    C ? d == null || d(F) : c == null || c(F);
  }, I = (F) => {
    const { onClickConnectStart: C, onClickConnectEnd: P, connectionClickStartHandle: R, connectionMode: O, isValidConnection: z, lib: U, rfId: V, nodeLookup: X, connection: G } = E.getState();
    if (!h || !R && !o)
      return;
    if (!R) {
      C == null || C(F.nativeEvent, { nodeId: h, handleId: y, handleType: e }), E.setState({ connectionClickStartHandle: { nodeId: h, type: e, id: y } });
      return;
    }
    const Q = Em(F.target), B = n || z, { connection: q, isValid: ie } = Uu.isValid(F.nativeEvent, {
      handle: {
        nodeId: h,
        id: y,
        type: e
      },
      connectionMode: O,
      fromNodeId: R.nodeId,
      fromHandleId: R.id || null,
      fromType: R.type,
      isValidConnection: B,
      flowId: V,
      doc: Q,
      lib: U,
      nodeLookup: X
    });
    ie && q && M(q);
    const te = structuredClone(G);
    delete te.inProgress, te.toPosition = te.toHandle ? te.toHandle.position : null, P == null || P(F, te), E.setState({ connectionClickStartHandle: null });
  };
  return m.jsx("div", { "data-handleid": y, "data-nodeid": h, "data-handlepos": t, "data-id": `${v}-${h}-${y}-${e}`, className: Te([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    g,
    u,
    {
      source: !w,
      target: w,
      connectable: r,
      connectablestart: o,
      connectableend: i,
      clickconnecting: N,
      connectingfrom: S,
      connectingto: _,
      valid: A,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!T || k) && (T || D ? i : o)
    }
  ]), onMouseDown: $, onTouchStart: $, onClick: x ? I : void 0, ref: p, ...f, children: a });
}
const vr = b.memo(J0(G2));
function Q2({ data: e, isConnectable: t, sourcePosition: n = Y.Bottom }) {
  return m.jsxs(m.Fragment, { children: [e == null ? void 0 : e.label, m.jsx(vr, { type: "source", position: n, isConnectable: t })] });
}
function Z2({ data: e, isConnectable: t, targetPosition: n = Y.Top, sourcePosition: r = Y.Bottom }) {
  return m.jsxs(m.Fragment, { children: [m.jsx(vr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, m.jsx(vr, { type: "source", position: r, isConnectable: t })] });
}
function q2() {
  return null;
}
function J2({ data: e, isConnectable: t, targetPosition: n = Y.Top }) {
  return m.jsxs(m.Fragment, { children: [m.jsx(vr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const Ol = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, Rp = {
  input: Q2,
  default: Z2,
  output: J2,
  group: q2
};
function eI(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((o = e.style) == null ? void 0 : o.height)
  };
}
const tI = (e) => {
  const { width: t, height: n, x: r, y: o } = $i(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: At(t) ? t : null,
    height: At(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`
  };
};
function nI({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = Se(), { width: o, height: i, transformString: s, userSelectionActive: l } = ae(tI, we), a = nx(), u = b.useRef(null);
  if (b.useEffect(() => {
    var f;
    n || (f = u.current) == null || f.focus({
      preventScroll: !0
    });
  }, [n]), tx({
    nodeRef: u
  }), l || !o || !i)
    return null;
  const d = e ? (f) => {
    const p = r.getState().nodes.filter((y) => y.selected);
    e(f, p);
  } : void 0, c = (f) => {
    Object.prototype.hasOwnProperty.call(Ol, f.key) && (f.preventDefault(), a({
      direction: Ol[f.key],
      factor: f.shiftKey ? 4 : 1
    }));
  };
  return m.jsx("div", { className: Te(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: m.jsx("div", { ref: u, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : c, style: {
    width: o,
    height: i
  } }) });
}
const Fp = typeof window < "u" ? window : void 0, rI = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function ox({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: l, deleteKeyCode: a, selectionKeyCode: u, selectionOnDrag: d, selectionMode: c, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: y, panActivationKeyCode: w, zoomActivationKeyCode: E, elementsSelectable: h, zoomOnScroll: x, zoomOnPinch: g, panOnScroll: v, panOnScrollSpeed: S, panOnScrollMode: _, zoomOnDoubleClick: N, panOnDrag: k, defaultViewport: T, translateExtent: D, minZoom: A, maxZoom: M, preventScrolling: $, onSelectionContextMenu: I, noWheelClassName: j, noPanClassName: L, disableKeyboardA11y: F, onViewportChange: C, isControlledViewport: P }) {
  const { nodesSelectionActive: R, userSelectionActive: O } = ae(rI, we), z = Ii(u, { target: Fp }), U = Ii(w, { target: Fp }), V = U || k, X = U || v, G = d && V !== !0, Q = z || O || G;
  return F2({ deleteKeyCode: a, multiSelectionKeyCode: y }), m.jsx($2, { onPaneContextMenu: i, elementsSelectable: h, zoomOnScroll: x, zoomOnPinch: g, panOnScroll: X, panOnScrollSpeed: S, panOnScrollMode: _, zoomOnDoubleClick: N, panOnDrag: !z && V, defaultViewport: T, translateExtent: D, minZoom: A, maxZoom: M, zoomActivationKeyCode: E, preventScrolling: $, noWheelClassName: j, noPanClassName: L, onViewportChange: C, isControlledViewport: P, paneClickDistance: l, selectionOnDrag: G, children: m.jsxs(U2, { onSelectionStart: f, onSelectionEnd: p, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: V, isSelecting: !!Q, selectionMode: c, selectionKeyPressed: z, paneClickDistance: l, selectionOnDrag: G, children: [e, R && m.jsx(nI, { onSelectionContextMenu: I, noPanClassName: L, disableKeyboardA11y: F })] }) });
}
ox.displayName = "FlowRenderer";
const oI = b.memo(ox), iI = (e) => (t) => e ? sd(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function sI(e) {
  return ae(b.useCallback(iI(e), [e]), we);
}
const lI = (e) => e.updateNodeInternals;
function aI() {
  const e = ae(lI), [t] = b.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
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
function uI({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = Se(), i = b.useRef(null), s = b.useRef(null), l = b.useRef(e.sourcePosition), a = b.useRef(e.targetPosition), u = b.useRef(t), d = n && !!e.internals.handleBounds;
  return b.useEffect(() => {
    i.current && !e.hidden && (!d || s.current !== i.current) && (s.current && (r == null || r.unobserve(s.current)), r == null || r.observe(i.current), s.current = i.current);
  }, [d, e.hidden]), b.useEffect(() => () => {
    s.current && (r == null || r.unobserve(s.current), s.current = null);
  }, []), b.useEffect(() => {
    if (i.current) {
      const c = u.current !== t, f = l.current !== e.sourcePosition, p = a.current !== e.targetPosition;
      (c || f || p) && (u.current = t, l.current = e.sourcePosition, a.current = e.targetPosition, o.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function cI({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: o, onContextMenu: i, onDoubleClick: s, nodesDraggable: l, elementsSelectable: a, nodesConnectable: u, nodesFocusable: d, resizeObserver: c, noDragClassName: f, noPanClassName: p, disableKeyboardA11y: y, rfId: w, nodeTypes: E, nodeClickDistance: h, onError: x }) {
  const { node: g, internals: v, isParent: S } = ae((B) => {
    const q = B.nodeLookup.get(e), ie = B.parentLookup.has(e);
    return {
      node: q,
      internals: q.internals,
      isParent: ie
    };
  }, we);
  let _ = g.type || "default", N = (E == null ? void 0 : E[_]) || Rp[_];
  N === void 0 && (x == null || x("003", Xt.error003(_)), _ = "default", N = (E == null ? void 0 : E.default) || Rp.default);
  const k = !!(g.draggable || l && typeof g.draggable > "u"), T = !!(g.selectable || a && typeof g.selectable > "u"), D = !!(g.connectable || u && typeof g.connectable > "u"), A = !!(g.focusable || d && typeof g.focusable > "u"), M = Se(), $ = wm(g), I = uI({ node: g, nodeType: _, hasDimensions: $, resizeObserver: c }), j = tx({
    nodeRef: I,
    disabled: g.hidden || !k,
    noDragClassName: f,
    handleSelector: g.dragHandle,
    nodeId: e,
    isSelectable: T,
    nodeClickDistance: h
  }), L = nx();
  if (g.hidden)
    return null;
  const F = yn(g), C = eI(g), P = T || k || t || n || r || o, R = n ? (B) => n(B, { ...v.userNode }) : void 0, O = r ? (B) => r(B, { ...v.userNode }) : void 0, z = o ? (B) => o(B, { ...v.userNode }) : void 0, U = i ? (B) => i(B, { ...v.userNode }) : void 0, V = s ? (B) => s(B, { ...v.userNode }) : void 0, X = (B) => {
    const { selectNodesOnDrag: q, nodeDragThreshold: ie } = M.getState();
    T && (!q || !k || ie > 0) && Fc({
      id: e,
      store: M,
      nodeRef: I
    }), t && t(B, { ...v.userNode });
  }, G = (B) => {
    if (!(_m(B.nativeEvent) || y)) {
      if (dm.includes(B.key) && T) {
        const q = B.key === "Escape";
        Fc({
          id: e,
          store: M,
          unselect: q,
          nodeRef: I
        });
      } else if (k && g.selected && Object.prototype.hasOwnProperty.call(Ol, B.key)) {
        B.preventDefault();
        const { ariaLabelConfig: q } = M.getState();
        M.setState({
          ariaLiveMessage: q["node.a11yDescription.ariaLiveMessage"]({
            direction: B.key.replace("Arrow", "").toLowerCase(),
            x: ~~v.positionAbsolute.x,
            y: ~~v.positionAbsolute.y
          })
        }), L({
          direction: Ol[B.key],
          factor: B.shiftKey ? 4 : 1
        });
      }
    }
  }, Q = () => {
    var ce;
    if (y || !((ce = I.current) != null && ce.matches(":focus-visible")))
      return;
    const { transform: B, width: q, height: ie, autoPanOnNodeFocus: te, setCenter: J } = M.getState();
    if (!te)
      return;
    sd(/* @__PURE__ */ new Map([[e, g]]), { x: 0, y: 0, width: q, height: ie }, B, !0).length > 0 || J(g.position.x + F.width / 2, g.position.y + F.height / 2, {
      zoom: B[2]
    });
  };
  return m.jsx("div", { className: Te([
    "react-flow__node",
    `react-flow__node-${_}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [p]: k
    },
    g.className,
    {
      selected: g.selected,
      selectable: T,
      parent: S,
      draggable: k,
      dragging: j
    }
  ]), ref: I, style: {
    zIndex: v.z,
    transform: `translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,
    pointerEvents: P ? "all" : "none",
    visibility: $ ? "visible" : "hidden",
    ...g.style,
    ...C
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: R, onMouseMove: O, onMouseLeave: z, onContextMenu: U, onClick: X, onDoubleClick: V, onKeyDown: A ? G : void 0, tabIndex: A ? 0 : void 0, onFocus: A ? Q : void 0, role: g.ariaRole ?? (A ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": y ? void 0 : `${Y0}-${w}`, "aria-label": g.ariaLabel, ...g.domAttributes, children: m.jsx(W2, { value: e, children: m.jsx(N, { id: e, data: g.data, type: _, positionAbsoluteX: v.positionAbsolute.x, positionAbsoluteY: v.positionAbsolute.y, selected: g.selected ?? !1, selectable: T, draggable: k, deletable: g.deletable ?? !0, isConnectable: D, sourcePosition: g.sourcePosition, targetPosition: g.targetPosition, dragging: j, dragHandle: g.dragHandle, zIndex: v.z, parentId: g.parentId, ...F }) }) });
}
var dI = b.memo(cI);
const fI = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function ix(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = ae(fI, we), s = sI(e.onlyRenderVisibleElements), l = aI();
  return m.jsx("div", { className: "react-flow__nodes", style: ba, children: s.map((a) => (
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
    m.jsx(dI, { id: a, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: l, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, nodeClickDistance: e.nodeClickDistance, onError: i }, a)
  )) });
}
ix.displayName = "NodeRenderer";
const hI = b.memo(ix);
function pI(e) {
  return ae(b.useCallback((n) => {
    if (!e)
      return n.edges.map((o) => o.id);
    const r = [];
    if (n.width && n.height)
      for (const o of n.edges) {
        const i = n.nodeLookup.get(o.source), s = n.nodeLookup.get(o.target);
        i && s && Xb({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && r.push(o.id);
      }
    return r;
  }, [e]), we);
}
const gI = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return m.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, mI = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return m.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, Op = {
  [cl.Arrow]: gI,
  [cl.ArrowClosed]: mI
};
function yI(e) {
  const t = Se();
  return b.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(Op, e) ? Op[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", Xt.error009(e)), null);
  }, [e]);
}
const xI = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: l = "auto-start-reverse" }) => {
  const a = yI(t);
  return a ? m.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: l, refX: "0", refY: "0", children: m.jsx(a, { color: n, strokeWidth: s }) }) : null;
}, sx = ({ defaultColor: e, rfId: t }) => {
  const n = ae((i) => i.edges), r = ae((i) => i.defaultEdgeOptions), o = b.useMemo(() => nN(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return o.length ? m.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: m.jsx("defs", { children: o.map((i) => m.jsx(xI, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
sx.displayName = "MarkerDefinitions";
var vI = b.memo(sx);
function lx({ x: e, y: t, label: n, labelStyle: r, labelShowBg: o = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: l = 2, children: a, className: u, ...d }) {
  const [c, f] = b.useState({ x: 1, y: 0, width: 0, height: 0 }), p = Te(["react-flow__edge-textwrapper", u]), y = b.useRef(null);
  return b.useEffect(() => {
    if (y.current) {
      const w = y.current.getBBox();
      f({
        x: w.x,
        y: w.y,
        width: w.width,
        height: w.height
      });
    }
  }, [n]), n ? m.jsxs("g", { transform: `translate(${e - c.width / 2} ${t - c.height / 2})`, className: p, visibility: c.width ? "visible" : "hidden", ...d, children: [o && m.jsx("rect", { width: c.width + 2 * s[0], x: -s[0], y: -s[1], height: c.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: l, ry: l }), m.jsx("text", { className: "react-flow__edge-text", y: c.height / 2, dy: "0.3em", ref: y, style: r, children: n }), a] }) : null;
}
lx.displayName = "EdgeText";
const wI = b.memo(lx);
function Na({ path: e, labelX: t, labelY: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: a, interactionWidth: u = 20, ...d }) {
  return m.jsxs(m.Fragment, { children: [m.jsx("path", { ...d, d: e, fill: "none", className: Te(["react-flow__edge-path", d.className]) }), u ? m.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: u, className: "react-flow__edge-interaction" }) : null, r && At(t) && At(n) ? m.jsx(wI, { x: t, y: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: a }) : null] });
}
function zp({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === Y.Left || e === Y.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function ax({ sourceX: e, sourceY: t, sourcePosition: n = Y.Bottom, targetX: r, targetY: o, targetPosition: i = Y.Top }) {
  const [s, l] = zp({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [a, u] = zp({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [d, c, f, p] = Nm({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: l,
    targetControlX: a,
    targetControlY: u
  });
  return [
    `M${e},${t} C${s},${l} ${a},${u} ${r},${o}`,
    d,
    c,
    f,
    p
  ];
}
function ux(e) {
  return b.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s, targetPosition: l, label: a, labelStyle: u, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: p, style: y, markerEnd: w, markerStart: E, interactionWidth: h }) => {
    const [x, g, v] = ax({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: l
    }), S = e.isInternal ? void 0 : t;
    return m.jsx(Na, { id: S, path: x, labelX: g, labelY: v, label: a, labelStyle: u, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: p, style: y, markerEnd: w, markerStart: E, interactionWidth: h });
  });
}
const SI = ux({ isInternal: !1 }), cx = ux({ isInternal: !0 });
SI.displayName = "SimpleBezierEdge";
cx.displayName = "SimpleBezierEdgeInternal";
function dx(e) {
  return b.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: a, labelBgStyle: u, labelBgPadding: d, labelBgBorderRadius: c, style: f, sourcePosition: p = Y.Bottom, targetPosition: y = Y.Top, markerEnd: w, markerStart: E, pathOptions: h, interactionWidth: x }) => {
    const [g, v, S] = hl({
      sourceX: n,
      sourceY: r,
      sourcePosition: p,
      targetX: o,
      targetY: i,
      targetPosition: y,
      borderRadius: h == null ? void 0 : h.borderRadius,
      offset: h == null ? void 0 : h.offset,
      stepPosition: h == null ? void 0 : h.stepPosition
    }), _ = e.isInternal ? void 0 : t;
    return m.jsx(Na, { id: _, path: g, labelX: v, labelY: S, label: s, labelStyle: l, labelShowBg: a, labelBgStyle: u, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: w, markerStart: E, interactionWidth: x });
  });
}
const fx = dx({ isInternal: !1 }), hx = dx({ isInternal: !0 });
fx.displayName = "SmoothStepEdge";
hx.displayName = "SmoothStepEdgeInternal";
function px(e) {
  return b.memo(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return m.jsx(fx, { ...n, id: r, pathOptions: b.useMemo(() => {
      var i;
      return { borderRadius: 0, offset: (i = n.pathOptions) == null ? void 0 : i.offset };
    }, [(o = n.pathOptions) == null ? void 0 : o.offset]) });
  });
}
const EI = px({ isInternal: !1 }), gx = px({ isInternal: !0 });
EI.displayName = "StepEdge";
gx.displayName = "StepEdgeInternal";
function mx(e) {
  return b.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: a, labelBgStyle: u, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: p, markerStart: y, interactionWidth: w }) => {
    const [E, h, x] = Cm({ sourceX: n, sourceY: r, targetX: o, targetY: i }), g = e.isInternal ? void 0 : t;
    return m.jsx(Na, { id: g, path: E, labelX: h, labelY: x, label: s, labelStyle: l, labelShowBg: a, labelBgStyle: u, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: p, markerStart: y, interactionWidth: w });
  });
}
const _I = mx({ isInternal: !1 }), yx = mx({ isInternal: !0 });
_I.displayName = "StraightEdge";
yx.displayName = "StraightEdgeInternal";
function xx(e) {
  return b.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s = Y.Bottom, targetPosition: l = Y.Top, label: a, labelStyle: u, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: p, style: y, markerEnd: w, markerStart: E, pathOptions: h, interactionWidth: x }) => {
    const [g, v, S] = ud({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: l,
      curvature: h == null ? void 0 : h.curvature
    }), _ = e.isInternal ? void 0 : t;
    return m.jsx(Na, { id: _, path: g, labelX: v, labelY: S, label: a, labelStyle: u, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: p, style: y, markerEnd: w, markerStart: E, interactionWidth: x });
  });
}
const bI = xx({ isInternal: !1 }), vx = xx({ isInternal: !0 });
bI.displayName = "BezierEdge";
vx.displayName = "BezierEdgeInternal";
const $p = {
  default: vx,
  straight: yx,
  step: gx,
  smoothstep: hx,
  simplebezier: cx
}, Hp = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, NI = (e, t, n) => n === Y.Left ? e - t : n === Y.Right ? e + t : e, kI = (e, t, n) => n === Y.Top ? e - t : n === Y.Bottom ? e + t : e, Vp = "react-flow__edgeupdater";
function Bp({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: s, type: l }) {
  return m.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: s, className: Te([Vp, `${Vp}-${l}`]), cx: NI(t, r, e), cy: kI(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function CI({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: o, targetX: i, targetY: s, sourcePosition: l, targetPosition: a, onReconnect: u, onReconnectStart: d, onReconnectEnd: c, setReconnecting: f, setUpdateHover: p }) {
  const y = Se(), w = (v, S) => {
    if (v.button !== 0)
      return;
    const { autoPanOnConnect: _, domNode: N, isValidConnection: k, connectionMode: T, connectionRadius: D, lib: A, onConnectStart: M, onConnectEnd: $, cancelConnection: I, nodeLookup: j, rfId: L, panBy: F, updateConnection: C } = y.getState(), P = S.type === "target", R = (U, V) => {
      f(!1), c == null || c(U, n, S.type, V);
    }, O = (U) => u == null ? void 0 : u(n, U), z = (U, V) => {
      f(!0), d == null || d(v, n, S.type), M == null || M(U, V);
    };
    Uu.onPointerDown(v.nativeEvent, {
      autoPanOnConnect: _,
      connectionMode: T,
      connectionRadius: D,
      domNode: N,
      handleId: S.id,
      nodeId: S.nodeId,
      nodeLookup: j,
      isTarget: P,
      edgeUpdaterType: S.type,
      lib: A,
      flowId: L,
      cancelConnection: I,
      panBy: F,
      isValidConnection: k,
      onConnect: O,
      onConnectStart: z,
      onConnectEnd: $,
      onReconnectEnd: R,
      updateConnection: C,
      getTransform: () => y.getState().transform,
      getFromHandle: () => y.getState().connection.fromHandle,
      dragThreshold: y.getState().connectionDragThreshold,
      handleDomNode: v.currentTarget
    });
  }, E = (v) => w(v, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), h = (v) => w(v, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), x = () => p(!0), g = () => p(!1);
  return m.jsxs(m.Fragment, { children: [(e === !0 || e === "source") && m.jsx(Bp, { position: l, centerX: r, centerY: o, radius: t, onMouseDown: E, onMouseEnter: x, onMouseOut: g, type: "source" }), (e === !0 || e === "target") && m.jsx(Bp, { position: a, centerX: i, centerY: s, radius: t, onMouseDown: h, onMouseEnter: x, onMouseOut: g, type: "target" })] });
}
function II({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: o, onDoubleClick: i, onContextMenu: s, onMouseEnter: l, onMouseMove: a, onMouseLeave: u, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: p, rfId: y, edgeTypes: w, noPanClassName: E, onError: h, disableKeyboardA11y: x }) {
  let g = ae((J) => J.edgeLookup.get(e));
  const v = ae((J) => J.defaultEdgeOptions);
  g = v ? { ...v, ...g } : g;
  let S = g.type || "default", _ = (w == null ? void 0 : w[S]) || $p[S];
  _ === void 0 && (h == null || h("011", Xt.error011(S)), S = "default", _ = (w == null ? void 0 : w.default) || $p.default);
  const N = !!(g.focusable || t && typeof g.focusable > "u"), k = typeof c < "u" && (g.reconnectable || n && typeof g.reconnectable > "u"), T = !!(g.selectable || r && typeof g.selectable > "u"), D = b.useRef(null), [A, M] = b.useState(!1), [$, I] = b.useState(!1), j = Se(), { zIndex: L, sourceX: F, sourceY: C, targetX: P, targetY: R, sourcePosition: O, targetPosition: z } = ae(b.useCallback((J) => {
    const ee = J.nodeLookup.get(g.source), ce = J.nodeLookup.get(g.target);
    if (!ee || !ce)
      return {
        zIndex: g.zIndex,
        ...Hp
      };
    const pe = tN({
      id: e,
      sourceNode: ee,
      targetNode: ce,
      sourceHandle: g.sourceHandle || null,
      targetHandle: g.targetHandle || null,
      connectionMode: J.connectionMode,
      onError: h
    });
    return {
      zIndex: Yb({
        selected: g.selected,
        zIndex: g.zIndex,
        sourceNode: ee,
        targetNode: ce,
        elevateOnSelect: J.elevateEdgesOnSelect,
        zIndexMode: J.zIndexMode
      }),
      ...pe || Hp
    };
  }, [g.source, g.target, g.sourceHandle, g.targetHandle, g.selected, g.zIndex]), we), U = b.useMemo(() => g.markerStart ? `url('#${Vu(g.markerStart, y)}')` : void 0, [g.markerStart, y]), V = b.useMemo(() => g.markerEnd ? `url('#${Vu(g.markerEnd, y)}')` : void 0, [g.markerEnd, y]);
  if (g.hidden || F === null || C === null || P === null || R === null)
    return null;
  const X = (J) => {
    var ue;
    const { addSelectedEdges: ee, unselectNodesAndEdges: ce, multiSelectionActive: pe } = j.getState();
    T && (j.setState({ nodesSelectionActive: !1 }), g.selected && pe ? (ce({ nodes: [], edges: [g] }), (ue = D.current) == null || ue.blur()) : ee([e])), o && o(J, g);
  }, G = i ? (J) => {
    i(J, { ...g });
  } : void 0, Q = s ? (J) => {
    s(J, { ...g });
  } : void 0, B = l ? (J) => {
    l(J, { ...g });
  } : void 0, q = a ? (J) => {
    a(J, { ...g });
  } : void 0, ie = u ? (J) => {
    u(J, { ...g });
  } : void 0, te = (J) => {
    var ee;
    if (!x && dm.includes(J.key) && T) {
      const { unselectNodesAndEdges: ce, addSelectedEdges: pe } = j.getState();
      J.key === "Escape" ? ((ee = D.current) == null || ee.blur(), ce({ edges: [g] })) : pe([e]);
    }
  };
  return m.jsx("svg", { style: { zIndex: L }, children: m.jsxs("g", { className: Te([
    "react-flow__edge",
    `react-flow__edge-${S}`,
    g.className,
    E,
    {
      selected: g.selected,
      animated: g.animated,
      inactive: !T && !o,
      updating: A,
      selectable: T
    }
  ]), onClick: X, onDoubleClick: G, onContextMenu: Q, onMouseEnter: B, onMouseMove: q, onMouseLeave: ie, onKeyDown: N ? te : void 0, tabIndex: N ? 0 : void 0, role: g.ariaRole ?? (N ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": g.ariaLabel === null ? void 0 : g.ariaLabel || `Edge from ${g.source} to ${g.target}`, "aria-describedby": N ? `${X0}-${y}` : void 0, ref: D, ...g.domAttributes, children: [!$ && m.jsx(_, { id: e, source: g.source, target: g.target, type: g.type, selected: g.selected, animated: g.animated, selectable: T, deletable: g.deletable ?? !0, label: g.label, labelStyle: g.labelStyle, labelShowBg: g.labelShowBg, labelBgStyle: g.labelBgStyle, labelBgPadding: g.labelBgPadding, labelBgBorderRadius: g.labelBgBorderRadius, sourceX: F, sourceY: C, targetX: P, targetY: R, sourcePosition: O, targetPosition: z, data: g.data, style: g.style, sourceHandleId: g.sourceHandle, targetHandleId: g.targetHandle, markerStart: U, markerEnd: V, pathOptions: "pathOptions" in g ? g.pathOptions : void 0, interactionWidth: g.interactionWidth }), k && m.jsx(CI, { edge: g, isReconnectable: k, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: p, sourceX: F, sourceY: C, targetX: P, targetY: R, sourcePosition: O, targetPosition: z, setUpdateHover: M, setReconnecting: I })] }) });
}
var TI = b.memo(II);
const PI = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function wx({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: o, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: l, onEdgeMouseMove: a, onEdgeMouseLeave: u, onEdgeClick: d, reconnectRadius: c, onEdgeDoubleClick: f, onReconnectStart: p, onReconnectEnd: y, disableKeyboardA11y: w }) {
  const { edgesFocusable: E, edgesReconnectable: h, elementsSelectable: x, onError: g } = ae(PI, we), v = pI(t);
  return m.jsxs("div", { className: "react-flow__edges", children: [m.jsx(vI, { defaultColor: e, rfId: n }), v.map((S) => m.jsx(TI, { id: S, edgesFocusable: E, edgesReconnectable: h, elementsSelectable: x, noPanClassName: o, onReconnect: i, onContextMenu: s, onMouseEnter: l, onMouseMove: a, onMouseLeave: u, onClick: d, reconnectRadius: c, onDoubleClick: f, onReconnectStart: p, onReconnectEnd: y, rfId: n, onError: g, edgeTypes: r, disableKeyboardA11y: w }, S))] });
}
wx.displayName = "EdgeRenderer";
const MI = b.memo(wx), AI = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function DI({ children: e }) {
  const t = ae(AI);
  return m.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function LI(e) {
  const t = Yi(), n = b.useRef(!1);
  b.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const jI = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function RI(e) {
  const t = ae(jI), n = Se();
  return b.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function FI(e) {
  return e.connection.inProgress ? { ...e.connection, to: Vi(e.connection.to, e.transform) } : { ...e.connection };
}
function OI(e) {
  return FI;
}
function zI(e) {
  const t = OI();
  return ae(t, we);
}
const $I = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function HI({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: s, isValid: l, inProgress: a } = ae($I, we);
  return !(i && o && a) ? null : m.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: m.jsx("g", { className: Te(["react-flow__connection", pm(l)]), children: m.jsx(Sx, { style: t, type: n, CustomComponent: r, isValid: l }) }) });
}
const Sx = ({ style: e, type: t = In.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: o, from: i, fromNode: s, fromHandle: l, fromPosition: a, to: u, toNode: d, toHandle: c, toPosition: f, pointer: p } = zI();
  if (!o)
    return;
  if (n)
    return m.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: l, fromX: i.x, fromY: i.y, toX: u.x, toY: u.y, fromPosition: a, toPosition: f, connectionStatus: pm(r), toNode: d, toHandle: c, pointer: p });
  let y = "";
  const w = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: a,
    targetX: u.x,
    targetY: u.y,
    targetPosition: f
  };
  switch (t) {
    case In.Bezier:
      [y] = ud(w);
      break;
    case In.SimpleBezier:
      [y] = ax(w);
      break;
    case In.Step:
      [y] = hl({
        ...w,
        borderRadius: 0
      });
      break;
    case In.SmoothStep:
      [y] = hl(w);
      break;
    default:
      [y] = Cm(w);
  }
  return m.jsx("path", { d: y, fill: "none", className: "react-flow__connection-path", style: e });
};
Sx.displayName = "ConnectionLine";
const VI = {};
function Up(e = VI) {
  b.useRef(e), Se(), b.useEffect(() => {
  }, [e]);
}
function BI() {
  Se(), b.useRef(!1), b.useEffect(() => {
  }, []);
}
function Ex({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: o, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: l, onNodeMouseMove: a, onNodeMouseLeave: u, onNodeContextMenu: d, onSelectionContextMenu: c, onSelectionStart: f, onSelectionEnd: p, connectionLineType: y, connectionLineStyle: w, connectionLineComponent: E, connectionLineContainerStyle: h, selectionKeyCode: x, selectionOnDrag: g, selectionMode: v, multiSelectionKeyCode: S, panActivationKeyCode: _, zoomActivationKeyCode: N, deleteKeyCode: k, onlyRenderVisibleElements: T, elementsSelectable: D, defaultViewport: A, translateExtent: M, minZoom: $, maxZoom: I, preventScrolling: j, defaultMarkerColor: L, zoomOnScroll: F, zoomOnPinch: C, panOnScroll: P, panOnScrollSpeed: R, panOnScrollMode: O, zoomOnDoubleClick: z, panOnDrag: U, onPaneClick: V, onPaneMouseEnter: X, onPaneMouseMove: G, onPaneMouseLeave: Q, onPaneScroll: B, onPaneContextMenu: q, paneClickDistance: ie, nodeClickDistance: te, onEdgeContextMenu: J, onEdgeMouseEnter: ee, onEdgeMouseMove: ce, onEdgeMouseLeave: pe, reconnectRadius: ue, onReconnect: Ae, onReconnectStart: Et, onReconnectEnd: _t, noDragClassName: Zt, noWheelClassName: vn, noPanClassName: zt, disableKeyboardA11y: $t, nodeExtent: _o, rfId: wn, viewport: qt, onViewportChange: K }) {
  return Up(e), Up(t), BI(), LI(n), RI(qt), m.jsx(oI, { onPaneClick: V, onPaneMouseEnter: X, onPaneMouseMove: G, onPaneMouseLeave: Q, onPaneContextMenu: q, onPaneScroll: B, paneClickDistance: ie, deleteKeyCode: k, selectionKeyCode: x, selectionOnDrag: g, selectionMode: v, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: S, panActivationKeyCode: _, zoomActivationKeyCode: N, elementsSelectable: D, zoomOnScroll: F, zoomOnPinch: C, zoomOnDoubleClick: z, panOnScroll: P, panOnScrollSpeed: R, panOnScrollMode: O, panOnDrag: U, defaultViewport: A, translateExtent: M, minZoom: $, maxZoom: I, onSelectionContextMenu: c, preventScrolling: j, noDragClassName: Zt, noWheelClassName: vn, noPanClassName: zt, disableKeyboardA11y: $t, onViewportChange: K, isControlledViewport: !!qt, children: m.jsxs(DI, { children: [m.jsx(MI, { edgeTypes: t, onEdgeClick: o, onEdgeDoubleClick: s, onReconnect: Ae, onReconnectStart: Et, onReconnectEnd: _t, onlyRenderVisibleElements: T, onEdgeContextMenu: J, onEdgeMouseEnter: ee, onEdgeMouseMove: ce, onEdgeMouseLeave: pe, reconnectRadius: ue, defaultMarkerColor: L, noPanClassName: zt, disableKeyboardA11y: $t, rfId: wn }), m.jsx(HI, { style: w, type: y, component: E, containerStyle: h }), m.jsx("div", { className: "react-flow__edgelabel-renderer" }), m.jsx(hI, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: i, onNodeMouseEnter: l, onNodeMouseMove: a, onNodeMouseLeave: u, onNodeContextMenu: d, nodeClickDistance: te, onlyRenderVisibleElements: T, noPanClassName: zt, noDragClassName: Zt, disableKeyboardA11y: $t, nodeExtent: _o, rfId: wn }), m.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
Ex.displayName = "GraphView";
const UI = b.memo(Ex), Kp = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: a = 0.5, maxZoom: u = 2, nodeOrigin: d, nodeExtent: c, zIndexMode: f = "basic" } = {}) => {
  const p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), h = r ?? t ?? [], x = n ?? e ?? [], g = d ?? [0, 0], v = c ?? li;
  Pm(w, E, h);
  const S = Bu(x, p, y, {
    nodeOrigin: g,
    nodeExtent: v,
    zIndexMode: f
  });
  let _ = [0, 0, 1];
  if (s && o && i) {
    const N = $i(p, {
      filter: (A) => !!((A.width || A.initialWidth) && (A.height || A.initialHeight))
    }), { x: k, y: T, zoom: D } = ld(N, o, i, a, u, (l == null ? void 0 : l.padding) ?? 0.1);
    _ = [k, T, D];
  }
  return {
    rfId: "1",
    width: o ?? 0,
    height: i ?? 0,
    transform: _,
    nodes: x,
    nodesInitialized: S,
    nodeLookup: p,
    parentLookup: y,
    edges: h,
    edgeLookup: E,
    connectionLookup: w,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: a,
    maxZoom: u,
    translateExtent: li,
    nodeExtent: v,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: eo.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: g,
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
    connection: { ...hm },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: Hb,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: fm,
    zIndexMode: f,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, KI = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: a, maxZoom: u, nodeOrigin: d, nodeExtent: c, zIndexMode: f }) => ik((p, y) => {
  async function w() {
    const { nodeLookup: E, panZoom: h, fitViewOptions: x, fitViewResolver: g, width: v, height: S, minZoom: _, maxZoom: N } = y();
    h && (await zb({
      nodes: E,
      width: v,
      height: S,
      panZoom: h,
      minZoom: _,
      maxZoom: N
    }, x), g == null || g.resolve(!0), p({ fitViewResolver: null }));
  }
  return {
    ...Kp({
      nodes: e,
      edges: t,
      width: o,
      height: i,
      fitView: s,
      fitViewOptions: l,
      minZoom: a,
      maxZoom: u,
      nodeOrigin: d,
      nodeExtent: c,
      defaultNodes: n,
      defaultEdges: r,
      zIndexMode: f
    }),
    setNodes: (E) => {
      const { nodeLookup: h, parentLookup: x, nodeOrigin: g, elevateNodesOnSelect: v, fitViewQueued: S, zIndexMode: _ } = y(), N = Bu(E, h, x, {
        nodeOrigin: g,
        nodeExtent: c,
        elevateNodesOnSelect: v,
        checkEquality: !0,
        zIndexMode: _
      });
      S && N ? (w(), p({ nodes: E, nodesInitialized: N, fitViewQueued: !1, fitViewOptions: void 0 })) : p({ nodes: E, nodesInitialized: N });
    },
    setEdges: (E) => {
      const { connectionLookup: h, edgeLookup: x } = y();
      Pm(h, x, E), p({ edges: E });
    },
    setDefaultNodesAndEdges: (E, h) => {
      if (E) {
        const { setNodes: x } = y();
        x(E), p({ hasDefaultNodes: !0 });
      }
      if (h) {
        const { setEdges: x } = y();
        x(h), p({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (E) => {
      const { triggerNodeChanges: h, nodeLookup: x, parentLookup: g, domNode: v, nodeOrigin: S, nodeExtent: _, debug: N, fitViewQueued: k, zIndexMode: T } = y(), { changes: D, updatedInternals: A } = uN(E, x, g, v, S, _, T);
      A && (iN(x, g, { nodeOrigin: S, nodeExtent: _, zIndexMode: T }), k ? (w(), p({ fitViewQueued: !1, fitViewOptions: void 0 })) : p({}), (D == null ? void 0 : D.length) > 0 && (N && console.log("React Flow: trigger node changes", D), h == null || h(D)));
    },
    updateNodePositions: (E, h = !1) => {
      const x = [];
      let g = [];
      const { nodeLookup: v, triggerNodeChanges: S, connection: _, updateConnection: N, onNodesChangeMiddlewareMap: k } = y();
      for (const [T, D] of E) {
        const A = v.get(T), M = !!(A != null && A.expandParent && (A != null && A.parentId) && (D != null && D.position)), $ = {
          id: T,
          type: "position",
          position: M ? {
            x: Math.max(0, D.position.x),
            y: Math.max(0, D.position.y)
          } : D.position,
          dragging: h
        };
        if (A && _.inProgress && _.fromNode.id === A.id) {
          const I = hr(A, _.fromHandle, Y.Left, !0);
          N({ ..._, from: I });
        }
        M && A.parentId && x.push({
          id: T,
          parentId: A.parentId,
          rect: {
            ...D.internals.positionAbsolute,
            width: D.measured.width ?? 0,
            height: D.measured.height ?? 0
          }
        }), g.push($);
      }
      if (x.length > 0) {
        const { parentLookup: T, nodeOrigin: D } = y(), A = pd(x, v, T, D);
        g.push(...A);
      }
      for (const T of k.values())
        g = T(g);
      S(g);
    },
    triggerNodeChanges: (E) => {
      const { onNodesChange: h, setNodes: x, nodes: g, hasDefaultNodes: v, debug: S } = y();
      if (E != null && E.length) {
        if (v) {
          const _ = Z0(E, g);
          x(_);
        }
        S && console.log("React Flow: trigger node changes", E), h == null || h(E);
      }
    },
    triggerEdgeChanges: (E) => {
      const { onEdgesChange: h, setEdges: x, edges: g, hasDefaultEdges: v, debug: S } = y();
      if (E != null && E.length) {
        if (v) {
          const _ = q0(E, g);
          x(_);
        }
        S && console.log("React Flow: trigger edge changes", E), h == null || h(E);
      }
    },
    addSelectedNodes: (E) => {
      const { multiSelectionActive: h, edgeLookup: x, nodeLookup: g, triggerNodeChanges: v, triggerEdgeChanges: S } = y();
      if (h) {
        const _ = E.map((N) => Zn(N, !0));
        v(_);
        return;
      }
      v(Hr(g, /* @__PURE__ */ new Set([...E]), !0)), S(Hr(x));
    },
    addSelectedEdges: (E) => {
      const { multiSelectionActive: h, edgeLookup: x, nodeLookup: g, triggerNodeChanges: v, triggerEdgeChanges: S } = y();
      if (h) {
        const _ = E.map((N) => Zn(N, !0));
        S(_);
        return;
      }
      S(Hr(x, /* @__PURE__ */ new Set([...E]))), v(Hr(g, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: E, edges: h } = {}) => {
      const { edges: x, nodes: g, nodeLookup: v, triggerNodeChanges: S, triggerEdgeChanges: _ } = y(), N = E || g, k = h || x, T = N.map((A) => {
        const M = v.get(A.id);
        return M && (M.selected = !1), Zn(A.id, !1);
      }), D = k.map((A) => Zn(A.id, !1));
      S(T), _(D);
    },
    setMinZoom: (E) => {
      const { panZoom: h, maxZoom: x } = y();
      h == null || h.setScaleExtent([E, x]), p({ minZoom: E });
    },
    setMaxZoom: (E) => {
      const { panZoom: h, minZoom: x } = y();
      h == null || h.setScaleExtent([x, E]), p({ maxZoom: E });
    },
    setTranslateExtent: (E) => {
      var h;
      (h = y().panZoom) == null || h.setTranslateExtent(E), p({ translateExtent: E });
    },
    resetSelectedElements: () => {
      const { edges: E, nodes: h, triggerNodeChanges: x, triggerEdgeChanges: g, elementsSelectable: v } = y();
      if (!v)
        return;
      const S = h.reduce((N, k) => k.selected ? [...N, Zn(k.id, !1)] : N, []), _ = E.reduce((N, k) => k.selected ? [...N, Zn(k.id, !1)] : N, []);
      x(S), g(_);
    },
    setNodeExtent: (E) => {
      const { nodes: h, nodeLookup: x, parentLookup: g, nodeOrigin: v, elevateNodesOnSelect: S, nodeExtent: _, zIndexMode: N } = y();
      E[0][0] === _[0][0] && E[0][1] === _[0][1] && E[1][0] === _[1][0] && E[1][1] === _[1][1] || (Bu(h, x, g, {
        nodeOrigin: v,
        nodeExtent: E,
        elevateNodesOnSelect: S,
        checkEquality: !1,
        zIndexMode: N
      }), p({ nodeExtent: E }));
    },
    panBy: (E) => {
      const { transform: h, width: x, height: g, panZoom: v, translateExtent: S } = y();
      return cN({ delta: E, panZoom: v, transform: h, translateExtent: S, width: x, height: g });
    },
    setCenter: async (E, h, x) => {
      const { width: g, height: v, maxZoom: S, panZoom: _ } = y();
      if (!_)
        return Promise.resolve(!1);
      const N = typeof (x == null ? void 0 : x.zoom) < "u" ? x.zoom : S;
      return await _.setViewport({
        x: g / 2 - E * N,
        y: v / 2 - h * N,
        zoom: N
      }, { duration: x == null ? void 0 : x.duration, ease: x == null ? void 0 : x.ease, interpolate: x == null ? void 0 : x.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      p({
        connection: { ...hm }
      });
    },
    updateConnection: (E) => {
      p({ connection: E });
    },
    reset: () => p({ ...Kp() })
  };
}, Object.is);
function WI({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: o, initialHeight: i, initialMinZoom: s, initialMaxZoom: l, initialFitViewOptions: a, fitView: u, nodeOrigin: d, nodeExtent: c, zIndexMode: f, children: p }) {
  const [y] = b.useState(() => KI({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: u,
    minZoom: s,
    maxZoom: l,
    fitViewOptions: a,
    nodeOrigin: d,
    nodeExtent: c,
    zIndexMode: f
  }));
  return m.jsx(c2, { value: y, children: m.jsx(D2, { children: p }) });
}
function YI({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: o, width: i, height: s, fitView: l, fitViewOptions: a, minZoom: u, maxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: p }) {
  return b.useContext(Ea) ? m.jsx(m.Fragment, { children: e }) : m.jsx(WI, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: o, initialWidth: i, initialHeight: s, fitView: l, initialFitViewOptions: a, initialMinZoom: u, initialMaxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: p, children: e });
}
const XI = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function GI({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i, edgeTypes: s, onNodeClick: l, onEdgeClick: a, onInit: u, onMove: d, onMoveStart: c, onMoveEnd: f, onConnect: p, onConnectStart: y, onConnectEnd: w, onClickConnectStart: E, onClickConnectEnd: h, onNodeMouseEnter: x, onNodeMouseMove: g, onNodeMouseLeave: v, onNodeContextMenu: S, onNodeDoubleClick: _, onNodeDragStart: N, onNodeDrag: k, onNodeDragStop: T, onNodesDelete: D, onEdgesDelete: A, onDelete: M, onSelectionChange: $, onSelectionDragStart: I, onSelectionDrag: j, onSelectionDragStop: L, onSelectionContextMenu: F, onSelectionStart: C, onSelectionEnd: P, onBeforeDelete: R, connectionMode: O, connectionLineType: z = In.Bezier, connectionLineStyle: U, connectionLineComponent: V, connectionLineContainerStyle: X, deleteKeyCode: G = "Backspace", selectionKeyCode: Q = "Shift", selectionOnDrag: B = !1, selectionMode: q = ai.Full, panActivationKeyCode: ie = "Space", multiSelectionKeyCode: te = ci() ? "Meta" : "Control", zoomActivationKeyCode: J = ci() ? "Meta" : "Control", snapToGrid: ee, snapGrid: ce, onlyRenderVisibleElements: pe = !1, selectNodesOnDrag: ue, nodesDraggable: Ae, autoPanOnNodeFocus: Et, nodesConnectable: _t, nodesFocusable: Zt, nodeOrigin: vn = G0, edgesFocusable: zt, edgesReconnectable: $t, elementsSelectable: _o = !0, defaultViewport: wn = _2, minZoom: qt = 0.5, maxZoom: K = 2, translateExtent: Z = li, preventScrolling: le = !0, nodeExtent: Qe, defaultMarkerColor: me = "#b1b1b7", zoomOnScroll: je = !0, zoomOnPinch: Xn = !0, panOnScroll: hv = !1, panOnScrollSpeed: pv = 0.5, panOnScrollMode: gv = ir.Free, zoomOnDoubleClick: mv = !0, panOnDrag: yv = !0, onPaneClick: xv, onPaneMouseEnter: vv, onPaneMouseMove: wv, onPaneMouseLeave: Sv, onPaneScroll: Ev, onPaneContextMenu: _v, paneClickDistance: bv = 1, nodeClickDistance: Nv = 0, children: kv, onReconnect: Cv, onReconnectStart: Iv, onReconnectEnd: Tv, onEdgeContextMenu: Pv, onEdgeDoubleClick: Mv, onEdgeMouseEnter: Av, onEdgeMouseMove: Dv, onEdgeMouseLeave: Lv, reconnectRadius: jv = 10, onNodesChange: Rv, onEdgesChange: Fv, noDragClassName: Ov = "nodrag", noWheelClassName: zv = "nowheel", noPanClassName: gf = "nopan", fitView: mf, fitViewOptions: yf, connectOnClick: $v, attributionPosition: Hv, proOptions: Vv, defaultEdgeOptions: Bv, elevateNodesOnSelect: Uv = !0, elevateEdgesOnSelect: Kv = !1, disableKeyboardA11y: xf = !1, autoPanOnConnect: Wv, autoPanOnNodeDrag: Yv, autoPanSpeed: Xv, connectionRadius: Gv, isValidConnection: Qv, onError: Zv, style: qv, id: vf, nodeDragThreshold: Jv, connectionDragThreshold: ew, viewport: tw, onViewportChange: nw, width: rw, height: ow, colorMode: iw = "light", debug: sw, onScroll: Qi, ariaLabelConfig: lw, zIndexMode: wf = "basic", ...aw }, uw) {
  const Pa = vf || "1", cw = C2(iw), dw = b.useCallback((Sf) => {
    Sf.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Qi == null || Qi(Sf);
  }, [Qi]);
  return m.jsx("div", { "data-testid": "rf__wrapper", ...aw, onScroll: dw, style: { ...qv, ...XI }, ref: uw, className: Te(["react-flow", o, cw]), id: vf, role: "application", children: m.jsxs(YI, { nodes: e, edges: t, width: rw, height: ow, fitView: mf, fitViewOptions: yf, minZoom: qt, maxZoom: K, nodeOrigin: vn, nodeExtent: Qe, zIndexMode: wf, children: [m.jsx(UI, { onInit: u, onNodeClick: l, onEdgeClick: a, onNodeMouseEnter: x, onNodeMouseMove: g, onNodeMouseLeave: v, onNodeContextMenu: S, onNodeDoubleClick: _, nodeTypes: i, edgeTypes: s, connectionLineType: z, connectionLineStyle: U, connectionLineComponent: V, connectionLineContainerStyle: X, selectionKeyCode: Q, selectionOnDrag: B, selectionMode: q, deleteKeyCode: G, multiSelectionKeyCode: te, panActivationKeyCode: ie, zoomActivationKeyCode: J, onlyRenderVisibleElements: pe, defaultViewport: wn, translateExtent: Z, minZoom: qt, maxZoom: K, preventScrolling: le, zoomOnScroll: je, zoomOnPinch: Xn, zoomOnDoubleClick: mv, panOnScroll: hv, panOnScrollSpeed: pv, panOnScrollMode: gv, panOnDrag: yv, onPaneClick: xv, onPaneMouseEnter: vv, onPaneMouseMove: wv, onPaneMouseLeave: Sv, onPaneScroll: Ev, onPaneContextMenu: _v, paneClickDistance: bv, nodeClickDistance: Nv, onSelectionContextMenu: F, onSelectionStart: C, onSelectionEnd: P, onReconnect: Cv, onReconnectStart: Iv, onReconnectEnd: Tv, onEdgeContextMenu: Pv, onEdgeDoubleClick: Mv, onEdgeMouseEnter: Av, onEdgeMouseMove: Dv, onEdgeMouseLeave: Lv, reconnectRadius: jv, defaultMarkerColor: me, noDragClassName: Ov, noWheelClassName: zv, noPanClassName: gf, rfId: Pa, disableKeyboardA11y: xf, nodeExtent: Qe, viewport: tw, onViewportChange: nw }), m.jsx(k2, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: p, onConnectStart: y, onConnectEnd: w, onClickConnectStart: E, onClickConnectEnd: h, nodesDraggable: Ae, autoPanOnNodeFocus: Et, nodesConnectable: _t, nodesFocusable: Zt, edgesFocusable: zt, edgesReconnectable: $t, elementsSelectable: _o, elevateNodesOnSelect: Uv, elevateEdgesOnSelect: Kv, minZoom: qt, maxZoom: K, nodeExtent: Qe, onNodesChange: Rv, onEdgesChange: Fv, snapToGrid: ee, snapGrid: ce, connectionMode: O, translateExtent: Z, connectOnClick: $v, defaultEdgeOptions: Bv, fitView: mf, fitViewOptions: yf, onNodesDelete: D, onEdgesDelete: A, onDelete: M, onNodeDragStart: N, onNodeDrag: k, onNodeDragStop: T, onSelectionDrag: j, onSelectionDragStart: I, onSelectionDragStop: L, onMove: d, onMoveStart: c, onMoveEnd: f, noPanClassName: gf, nodeOrigin: vn, rfId: Pa, autoPanOnConnect: Wv, autoPanOnNodeDrag: Yv, autoPanSpeed: Xv, onError: Zv, connectionRadius: Gv, isValidConnection: Qv, selectNodesOnDrag: ue, nodeDragThreshold: Jv, connectionDragThreshold: ew, onBeforeDelete: R, debug: sw, ariaLabelConfig: lw, zIndexMode: wf }), m.jsx(E2, { onSelectionChange: $ }), kv, m.jsx(y2, { proOptions: Vv, position: Hv }), m.jsx(m2, { rfId: Pa, disableKeyboardA11y: xf })] }) });
}
var QI = J0(GI);
function ZI() {
  const e = Se();
  return b.useCallback((t) => {
    const { domNode: n, updateNodeInternals: r } = e.getState(), o = Array.isArray(t) ? t : [t], i = /* @__PURE__ */ new Map();
    o.forEach((s) => {
      const l = n == null ? void 0 : n.querySelector(`.react-flow__node[data-id="${s}"]`);
      l && i.set(s, { id: s, nodeElement: l, force: !0 });
    }), requestAnimationFrame(() => r(i, { triggerFitView: !1 }));
  }, []);
}
const qI = (e) => e.nodes;
function JI() {
  return ae(qI, we);
}
function eT({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return m.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: Te(["react-flow__background-pattern", n, r]) });
}
function tT({ radius: e, className: t }) {
  return m.jsx("circle", { cx: e, cy: e, r: e, className: Te(["react-flow__background-pattern", "dots", t]) });
}
var Hn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Hn || (Hn = {}));
const nT = {
  [Hn.Dots]: 1,
  [Hn.Lines]: 1,
  [Hn.Cross]: 6
}, rT = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function _x({
  id: e,
  variant: t = Hn.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: r,
  lineWidth: o = 1,
  offset: i = 0,
  color: s,
  bgColor: l,
  style: a,
  className: u,
  patternClassName: d
}) {
  const c = b.useRef(null), { transform: f, patternId: p } = ae(rT, we), y = r || nT[t], w = t === Hn.Dots, E = t === Hn.Cross, h = Array.isArray(n) ? n : [n, n], x = [h[0] * f[2] || 1, h[1] * f[2] || 1], g = y * f[2], v = Array.isArray(i) ? i : [i, i], S = E ? [g, g] : x, _ = [
    v[0] * f[2] || 1 + S[0] / 2,
    v[1] * f[2] || 1 + S[1] / 2
  ], N = `${p}${e || ""}`;
  return m.jsxs("svg", { className: Te(["react-flow__background", u]), style: {
    ...a,
    ...ba,
    "--xy-background-color-props": l,
    "--xy-background-pattern-color-props": s
  }, ref: c, "data-testid": "rf__background", children: [m.jsx("pattern", { id: N, x: f[0] % x[0], y: f[1] % x[1], width: x[0], height: x[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${_[0]},-${_[1]})`, children: w ? m.jsx(tT, { radius: g / 2, className: d }) : m.jsx(eT, { dimensions: S, lineWidth: o, variant: t, className: d }) }), m.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${N})` })] });
}
_x.displayName = "Background";
const oT = b.memo(_x);
function iT() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: m.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function sT() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: m.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function lT() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: m.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function aT() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: m.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function uT() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: m.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function ks({ children: e, className: t, ...n }) {
  return m.jsx("button", { type: "button", className: Te(["react-flow__controls-button", t]), ...n, children: e });
}
const cT = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function bx({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: s, onFitView: l, onInteractiveChange: a, className: u, children: d, position: c = "bottom-left", orientation: f = "vertical", "aria-label": p }) {
  const y = Se(), { isInteractive: w, minZoomReached: E, maxZoomReached: h, ariaLabelConfig: x } = ae(cT, we), { zoomIn: g, zoomOut: v, fitView: S } = Yi(), _ = () => {
    g(), i == null || i();
  }, N = () => {
    v(), s == null || s();
  }, k = () => {
    S(o), l == null || l();
  }, T = () => {
    y.setState({
      nodesDraggable: !w,
      nodesConnectable: !w,
      elementsSelectable: !w
    }), a == null || a(!w);
  }, D = f === "horizontal" ? "horizontal" : "vertical";
  return m.jsxs(_a, { className: Te(["react-flow__controls", D, u]), position: c, style: e, "data-testid": "rf__controls", "aria-label": p ?? x["controls.ariaLabel"], children: [t && m.jsxs(m.Fragment, { children: [m.jsx(ks, { onClick: _, className: "react-flow__controls-zoomin", title: x["controls.zoomIn.ariaLabel"], "aria-label": x["controls.zoomIn.ariaLabel"], disabled: h, children: m.jsx(iT, {}) }), m.jsx(ks, { onClick: N, className: "react-flow__controls-zoomout", title: x["controls.zoomOut.ariaLabel"], "aria-label": x["controls.zoomOut.ariaLabel"], disabled: E, children: m.jsx(sT, {}) })] }), n && m.jsx(ks, { className: "react-flow__controls-fitview", onClick: k, title: x["controls.fitView.ariaLabel"], "aria-label": x["controls.fitView.ariaLabel"], children: m.jsx(lT, {}) }), r && m.jsx(ks, { className: "react-flow__controls-interactive", onClick: T, title: x["controls.interactive.ariaLabel"], "aria-label": x["controls.interactive.ariaLabel"], children: w ? m.jsx(uT, {}) : m.jsx(aT, {}) }), d] });
}
bx.displayName = "Controls";
const dT = b.memo(bx);
function fT({ id: e, x: t, y: n, width: r, height: o, style: i, color: s, strokeColor: l, strokeWidth: a, className: u, borderRadius: d, shapeRendering: c, selected: f, onClick: p }) {
  const { background: y, backgroundColor: w } = i || {}, E = s || y || w;
  return m.jsx("rect", { className: Te(["react-flow__minimap-node", { selected: f }, u]), x: t, y: n, rx: d, ry: d, width: r, height: o, style: {
    fill: E,
    stroke: l,
    strokeWidth: a
  }, shapeRendering: c, onClick: p ? (h) => p(h, e) : void 0 });
}
const hT = b.memo(fT), pT = (e) => e.nodes.map((t) => t.id), vu = (e) => e instanceof Function ? e : () => e;
function gT({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = hT,
  onClick: s
}) {
  const l = ae(pT, we), a = vu(t), u = vu(e), d = vu(n), c = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return m.jsx(m.Fragment, { children: l.map((f) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    m.jsx(yT, { id: f, nodeColorFunc: a, nodeStrokeColorFunc: u, nodeClassNameFunc: d, nodeBorderRadius: r, nodeStrokeWidth: o, NodeComponent: i, onClick: s, shapeRendering: c }, f)
  )) });
}
function mT({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: o, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: l, onClick: a }) {
  const { node: u, x: d, y: c, width: f, height: p } = ae((y) => {
    const { internals: w } = y.nodeLookup.get(e), E = w.userNode, { x: h, y: x } = w.positionAbsolute, { width: g, height: v } = yn(E);
    return {
      node: E,
      x: h,
      y: x,
      width: g,
      height: v
    };
  }, we);
  return !u || u.hidden || !wm(u) ? null : m.jsx(l, { x: d, y: c, width: f, height: p, style: u.style, selected: !!u.selected, className: r(u), color: t(u), borderRadius: o, strokeColor: n(u), strokeWidth: i, shapeRendering: s, onClick: a, id: u.id });
}
const yT = b.memo(mT);
var xT = b.memo(gT);
const vT = 200, wT = 150, ST = (e) => !e.hidden, ET = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? vm($i(e.nodeLookup, { filter: ST }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, _T = "react-flow__minimap-desc";
function Nx({
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
  maskColor: u,
  maskStrokeColor: d,
  maskStrokeWidth: c,
  position: f = "bottom-right",
  onClick: p,
  onNodeClick: y,
  pannable: w = !1,
  zoomable: E = !1,
  ariaLabel: h,
  inversePan: x,
  zoomStep: g = 1,
  offsetScale: v = 5
}) {
  const S = Se(), _ = b.useRef(null), { boundingRect: N, viewBB: k, rfId: T, panZoom: D, translateExtent: A, flowWidth: M, flowHeight: $, ariaLabelConfig: I } = ae(ET, we), j = (e == null ? void 0 : e.width) ?? vT, L = (e == null ? void 0 : e.height) ?? wT, F = N.width / j, C = N.height / L, P = Math.max(F, C), R = P * j, O = P * L, z = v * P, U = N.x - (R - N.width) / 2 - z, V = N.y - (O - N.height) / 2 - z, X = R + z * 2, G = O + z * 2, Q = `${_T}-${T}`, B = b.useRef(0), q = b.useRef();
  B.current = P, b.useEffect(() => {
    if (_.current && D)
      return q.current = vN({
        domNode: _.current,
        panZoom: D,
        getTransform: () => S.getState().transform,
        getViewScale: () => B.current
      }), () => {
        var ee;
        (ee = q.current) == null || ee.destroy();
      };
  }, [D]), b.useEffect(() => {
    var ee;
    (ee = q.current) == null || ee.update({
      translateExtent: A,
      width: M,
      height: $,
      inversePan: x,
      pannable: w,
      zoomStep: g,
      zoomable: E
    });
  }, [w, E, x, g, A, M, $]);
  const ie = p ? (ee) => {
    var ue;
    const [ce, pe] = ((ue = q.current) == null ? void 0 : ue.pointer(ee)) || [0, 0];
    p(ee, { x: ce, y: pe });
  } : void 0, te = y ? b.useCallback((ee, ce) => {
    const pe = S.getState().nodeLookup.get(ce).internals.userNode;
    y(ee, pe);
  }, []) : void 0, J = h ?? I["minimap.ariaLabel"];
  return m.jsx(_a, { position: f, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof a == "string" ? a : void 0,
    "--xy-minimap-mask-background-color-props": typeof u == "string" ? u : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof c == "number" ? c * P : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: Te(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: m.jsxs("svg", { width: j, height: L, viewBox: `${U} ${V} ${X} ${G}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": Q, ref: _, onClick: ie, children: [J && m.jsx("title", { id: Q, children: J }), m.jsx(xT, { onClick: te, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: o, nodeStrokeWidth: s, nodeComponent: l }), m.jsx("path", { className: "react-flow__minimap-mask", d: `M${U - z},${V - z}h${X + z * 2}v${G + z * 2}h${-X - z * 2}z
        M${k.x},${k.y}h${k.width}v${k.height}h${-k.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
Nx.displayName = "MiniMap";
const bT = b.memo(Nx), NT = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, kT = {
  [oo.Line]: "right",
  [oo.Handle]: "bottom-right"
};
function CT({ nodeId: e, position: t, variant: n = oo.Handle, className: r, style: o = void 0, children: i, color: s, minWidth: l = 10, minHeight: a = 10, maxWidth: u = Number.MAX_VALUE, maxHeight: d = Number.MAX_VALUE, keepAspectRatio: c = !1, resizeDirection: f, autoScale: p = !0, shouldResize: y, onResizeStart: w, onResize: E, onResizeEnd: h }) {
  const x = rx(), g = typeof e == "string" ? e : x, v = Se(), S = b.useRef(null), _ = n === oo.Handle, N = ae(b.useCallback(NT(_ && p), [_, p]), we), k = b.useRef(null), T = t ?? kT[n];
  b.useEffect(() => {
    if (!(!S.current || !g))
      return k.current || (k.current = DN({
        domNode: S.current,
        nodeId: g,
        getStoreItems: () => {
          const { nodeLookup: A, transform: M, snapGrid: $, snapToGrid: I, nodeOrigin: j, domNode: L } = v.getState();
          return {
            nodeLookup: A,
            transform: M,
            snapGrid: $,
            snapToGrid: I,
            nodeOrigin: j,
            paneDomNode: L
          };
        },
        onChange: (A, M) => {
          const { triggerNodeChanges: $, nodeLookup: I, parentLookup: j, nodeOrigin: L } = v.getState(), F = [], C = { x: A.x, y: A.y }, P = I.get(g);
          if (P && P.expandParent && P.parentId) {
            const R = P.origin ?? L, O = A.width ?? P.measured.width ?? 0, z = A.height ?? P.measured.height ?? 0, U = {
              id: P.id,
              parentId: P.parentId,
              rect: {
                width: O,
                height: z,
                ...Sm({
                  x: A.x ?? P.position.x,
                  y: A.y ?? P.position.y
                }, { width: O, height: z }, P.parentId, I, R)
              }
            }, V = pd([U], I, j, L);
            F.push(...V), C.x = A.x ? Math.max(R[0] * O, A.x) : void 0, C.y = A.y ? Math.max(R[1] * z, A.y) : void 0;
          }
          if (C.x !== void 0 && C.y !== void 0) {
            const R = {
              id: g,
              type: "position",
              position: { ...C }
            };
            F.push(R);
          }
          if (A.width !== void 0 && A.height !== void 0) {
            const O = {
              id: g,
              type: "dimensions",
              resizing: !0,
              setAttributes: f ? f === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: A.width,
                height: A.height
              }
            };
            F.push(O);
          }
          for (const R of M) {
            const O = {
              ...R,
              type: "position"
            };
            F.push(O);
          }
          $(F);
        },
        onEnd: ({ width: A, height: M }) => {
          const $ = {
            id: g,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: A,
              height: M
            }
          };
          v.getState().triggerNodeChanges([$]);
        }
      })), k.current.update({
        controlPosition: T,
        boundaries: {
          minWidth: l,
          minHeight: a,
          maxWidth: u,
          maxHeight: d
        },
        keepAspectRatio: c,
        resizeDirection: f,
        onResizeStart: w,
        onResize: E,
        onResizeEnd: h,
        shouldResize: y
      }), () => {
        var A;
        (A = k.current) == null || A.destroy();
      };
  }, [
    T,
    l,
    a,
    u,
    d,
    c,
    w,
    E,
    h,
    y
  ]);
  const D = T.split("-");
  return m.jsx("div", { className: Te(["react-flow__resize-control", "nodrag", ...D, n, r]), ref: S, style: {
    ...o,
    scale: N,
    ...s && { [_ ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
b.memo(CT);
const Wp = [
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
], Cs = {
  MAX_NAME_LENGTH: 63,
  RESERVED_NAMES: ["id", "created_at", "updated_at"]
}, wu = {
  FIELD_NAME_REQUIRED: "Tên trường không được để trống",
  FIELD_NAME_TOO_LONG: "Tên trường quá dài (tối đa 63 ký tự)",
  FIELD_NAME_INVALID: "Tên trường không hợp lệ (chỉ chứa chữ cái, số và dấu gạch dưới)"
}, kx = (e, t) => {
  const n = /* @__PURE__ */ new Set(), r = [t];
  for (; r.length > 0; ) {
    const o = r.shift();
    n.has(o) || (n.add(o), e.filter((s) => s.source === o).forEach((s) => {
      r.push(s.target);
    }));
  }
  return n;
}, IT = (e, t, n, r, o = !1) => {
  const i = e.find((c) => c.id === n);
  if (!i) return;
  const s = i.data.columns[r], l = t.filter(
    (c) => {
      var f;
      return c.source === n && c.sourceHandle === s.name || // 1-n array/link
      c.source === n && ((f = c.data) == null ? void 0 : f.objectFieldName) === s.name;
    }
    // n-1 object link
  ), a = l.map((c) => c.target), u = [];
  l.forEach((c) => {
    var f, p;
    ((f = c.data) == null ? void 0 : f.relationshipType) === "1-n" ? c.target && c.targetHandle && u.push({ nodeId: c.target, fieldName: c.targetHandle }) : c.source && ((p = c.data) != null && p.sourceFK) && u.push({ nodeId: c.source, fieldName: c.data.sourceFK });
  });
  const d = new Set(l.map((c) => c.id));
  for (let c = t.length - 1; c >= 0; c--)
    d.has(t[c].id) && t.splice(c, 1);
  u.forEach(({ nodeId: c, fieldName: f }) => {
    if (!t.some((y) => {
      var w, E;
      return ((w = y.data) == null ? void 0 : w.relationshipType) === "1-n" ? y.target === c && y.targetHandle === f : y.source === c && ((E = y.data) == null ? void 0 : E.sourceFK) === f;
    })) {
      const y = e.find((w) => w.id === c);
      if (y) {
        const w = y.data.columns.find((E) => E.name === f);
        w && (w.isForeignKey = !1);
      }
    }
  }), i.data.columns.splice(r, 1), o || a.forEach((c) => {
    const f = kx(t, c);
    for (let p = e.length - 1; p >= 0; p--)
      f.has(e[p].id) && e.splice(p, 1);
    for (let p = t.length - 1; p >= 0; p--) {
      const y = t[p];
      (f.has(y.source) || f.has(y.target)) && t.splice(p, 1);
    }
  });
}, TT = (e, t, n, r, o) => {
  const i = e.find((a) => a.id === n);
  if (!i || !i.data.columns[r]) return;
  const s = i.data.columns[r], l = s.name;
  if (i.data.columns[r] = { ...s, ...o }, i.data._version = Date.now(), o.name && o.name !== l) {
    const a = o.name;
    t.forEach((u) => {
      var d;
      u.source === n && u.sourceHandle === l && (u.sourceHandle = a), u.target === n && u.targetHandle === l && (u.targetHandle = a), u.source === n && ((d = u.data) == null ? void 0 : d.objectFieldName) === l && (u.data.objectFieldName = a, u.sourceHandle === l && (u.sourceHandle = a));
    });
  }
}, PT = (e, t, n, r) => {
  const o = e.find((l) => l.id === n);
  if (!o) return;
  const i = o.data.columns[r], s = i.visible === !1;
  i.visible = s, i.isForeignKey && t.filter(
    (a) => {
      var u;
      return a.source === n && a.sourceHandle === i.name && ((u = a.data) == null ? void 0 : u.objectFieldName);
    }
  ).forEach((a) => {
    const u = e.find((d) => d.id === a.target);
    if (u) {
      const d = u.data.columns.find(
        (c) => {
          var f;
          return c.name === ((f = a.data) == null ? void 0 : f.objectFieldName) && c.type === "object";
        }
      );
      d && (d.visible = s);
    }
  });
}, MT = {
  nodes: [],
  edges: []
}, Cx = Ql({
  name: "schema",
  initialState: MT,
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
      e.nodes = Z0(t.payload, e.nodes);
    },
    onEdgesChange: (e, t) => {
      e.edges = q0(t.payload, e.edges);
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
      const { id: n, name: r, tableName: o, columns: i, position: s } = t.payload, l = n || `table-${Date.now()}-${Math.floor(Math.random() * 1e3)}`, a = Wp[e.nodes.length % Wp.length], u = {
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
      e.nodes.push(u);
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
      const n = t.payload, r = kx(e.edges, n);
      e.nodes = e.nodes.filter((o) => !r.has(o.id)), e.edges = e.edges.filter((o) => !r.has(o.source) && !r.has(o.target));
    },
    // Column operations
    addField: (e, t) => {
      const { nodeId: n, field: r } = t.payload, o = e.nodes.find((i) => i.id === n);
      o && o.data.columns.push(r);
    },
    updateField: (e, t) => {
      const { nodeId: n, fieldIndex: r, updates: o } = t.payload;
      TT(e.nodes, e.edges, n, r, o);
    },
    toggleFieldVisibility: (e, t) => {
      const { nodeId: n, fieldIndex: r } = t.payload;
      PT(e.nodes, e.edges, n, r);
    },
    deleteField: (e, t) => {
      const { nodeId: n, fieldIndex: r, skipRecursive: o } = t.payload;
      IT(e.nodes, e.edges, n, r, o);
    },
    reorderFields: (e, t) => {
      const { nodeId: n, oldIndex: r, newIndex: o } = t.payload, i = e.nodes.findIndex((s) => s.id === n);
      if (i !== -1) {
        const s = e.nodes[i], l = [...s.data.columns], [a] = l.splice(r, 1);
        l.splice(o, 0, a);
        const u = {
          ...s,
          data: {
            ...s.data,
            columns: l,
            _version: Date.now()
          }
        };
        e.nodes = e.nodes.map((d, c) => c === i ? u : d), e.edges = e.edges.map((d) => d.source === n || d.target === n ? { ...d } : d);
      }
    },
    // Complex Operations
    confirmLinkField: (e, t) => {
      const { sourceNodeId: n, targetNodeId: r, sourcePK: o, targetFK: i, newFieldName: s, relationshipType: l } = t.payload, a = e.nodes.find((h) => h.id === n), u = e.nodes.find((h) => h.id === r);
      if (!a || !u) return;
      const d = a.data.columns.findIndex((h) => h.name === s), c = {
        name: s,
        type: "array",
        // Force type to match Link
        visible: !0,
        isVirtual: !0,
        isPrimaryKey: !1,
        linkedPrimaryKeyField: o,
        linkedForeignKeyField: i
      };
      if (d !== -1) {
        const h = a.data.columns[d];
        a.data.columns[d] = {
          ...h,
          ...c,
          visible: h.visible
        };
      } else
        a.data.columns.push(c);
      const f = a.data.columns.find((h) => h.name === o);
      f && f.isForeignKey && (e.edges.some(
        (x) => {
          var g;
          return x.source === n && ((g = x.data) == null ? void 0 : g.sourceFK) === o || x.target === n && x.targetHandle === o;
        }
      ) || (f.isForeignKey = !1));
      const p = u.data.columns.find((h) => h.name === i);
      p && (p.isForeignKey = !0);
      const y = `${n}-${s}-to-${r}-${i}`;
      e.edges.push({
        id: y,
        source: n,
        target: r,
        sourceHandle: s,
        targetHandle: i,
        type: "relationship",
        data: { relationshipType: l || "1-n" }
      });
      const w = e.nodes.findIndex((h) => h.id === n);
      w !== -1 && (e.nodes[w] = { ...e.nodes[w] });
      const E = e.nodes.findIndex((h) => h.id === r);
      E !== -1 && (e.nodes[E] = { ...e.nodes[E] });
    },
    updateLinkConnection: (e, t) => {
      const { sourceNodeId: n, oldFieldName: r, newFieldName: o, targetNodeId: i, sourceKey: s, targetKey: l, relationshipType: a } = t.payload, u = e.nodes.find((y) => y.id === n);
      if (!u) return;
      const d = u.data.columns.findIndex((y) => y.name === r);
      if (d !== -1) {
        const y = u.data.columns[d];
        y.name = o, a === "1-n" ? (y.isVirtual = !0, y.type = "varchar", y.linkedPrimaryKeyField = s, y.linkedForeignKeyField = l, delete y.primaryKeyField) : (y.isVirtual = !1, y.type = "object", y.primaryKeyField = l, y.linkedForeignKeyField = s, y.relationshipType = a, delete y.linkedPrimaryKeyField);
      }
      e.edges = e.edges.filter(
        (y) => !(y.source === n && y.sourceHandle === r)
      );
      const c = `edge-${Date.now()}`;
      let f = o, p = l;
      f = o, p = l, e.edges.push({
        id: c,
        source: n,
        target: i,
        sourceHandle: f,
        targetHandle: p,
        type: "relationship",
        data: { relationshipType: a }
      }), e.nodes = [...e.nodes];
    },
    confirmLinkObject: (e, t) => {
      const { sourceNodeId: n, targetNodeId: r, sourceFK: o, targetPK: i, newFieldName: s, relationshipType: l } = t.payload, a = e.nodes.find((d) => d.id === n), u = e.nodes.find((d) => d.id === r);
      if (a && u) {
        const d = a.data.columns.findIndex((E) => E.name === s), c = {
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
        };
        if (d !== -1) {
          const E = a.data.columns[d];
          a.data.columns[d] = {
            ...E,
            ...c,
            visible: E.visible
            // Keep user visibility preference if any
          };
        } else
          a.data.columns.push(c);
        const f = u.data.columns.find((E) => E.name === i);
        f && f.isForeignKey && (e.edges.some(
          (h) => {
            var x;
            return h.target === r && h.targetHandle === i || h.source === r && ((x = h.data) == null ? void 0 : x.sourceFK) === i;
          }
        ) || (f.isForeignKey = !1));
        const p = a.data.columns.find((E) => E.name === o);
        p && (p.isForeignKey = !0);
        const y = `e-${n}-${o}-${r}-${i}`;
        e.edges.some((E) => E.id === y) || e.edges.push({
          id: y,
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
      let u, d, c;
      a ? (u = n, d = o, c = i || "") : (u = o, d = n, c = r);
      const f = e.nodes.find((E) => E.id === u), p = e.nodes.find((E) => E.id === d);
      if (!f || !p) return;
      f.data.columns.push({
        name: s,
        type: "object",
        isPrimaryKey: !1,
        visible: !0,
        primaryKeyField: l
      });
      const y = p.data.columns.find((E) => E.name === c);
      y && (y.isForeignKey = !0);
      const w = `${d}-${c}-to-${u}-${s}`;
      e.edges.push({
        id: w,
        source: d,
        target: u,
        sourceHandle: c,
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
  setNodes: Oc,
  setEdges: zM,
  addEdge: $M,
  onNodesChange: AT,
  onEdgesChange: DT,
  onConnect: HM,
  updateEdge: VM,
  addTable: zl,
  updateTable: zc,
  deleteTable: Ix,
  deleteElements: BM,
  addField: Tx,
  updateField: Px,
  deleteField: ka,
  reorderFields: Mx,
  toggleFieldVisibility: Ax,
  resetSchema: Dx,
  confirmLinkField: Ti,
  confirmLinkObject: Pi,
  updateLinkConnection: UM,
  confirmObjectConnection: KM
} = Cx.actions, LT = Cx.reducer, jT = {
  sidebarOpen: !0,
  isAddTableDialogOpen: !1,
  linkFieldDialog: {
    isOpen: !1,
    sourceNodeId: null
  },
  confirmDeleteDialog: {
    isOpen: !1,
    nodeId: null
  }
}, Lx = Ql({
  name: "ui",
  initialState: jT,
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
    },
    // Confirm Delete Dialog
    openConfirmDeleteDialog: (e, t) => {
      e.confirmDeleteDialog = {
        isOpen: !0,
        nodeId: t.payload.nodeId,
        fieldIndex: t.payload.fieldIndex,
        fieldName: t.payload.fieldName
      };
    },
    closeConfirmDeleteDialog: (e) => {
      e.confirmDeleteDialog = {
        isOpen: !1,
        nodeId: null,
        fieldIndex: void 0,
        fieldName: void 0
      };
    }
  }
}), {
  toggleSidebar: WM,
  setAddTableDialogOpen: YM,
  openLinkFieldDialog: RT,
  openEditLinkFieldDialog: FT,
  openLinkFieldDialogWithValues: OT,
  closeLinkFieldDialog: Yp,
  openConfirmDeleteDialog: zT,
  closeConfirmDeleteDialog: $T
} = Lx.actions, HT = Lx.reducer, Xp = {
  selectedTargetNodeId: "",
  selectedSourceKey: "",
  selectedTargetKey: "",
  newFieldName: "",
  linkType: "1-n",
  searchQuery: ""
}, jx = Ql({
  name: "linkField",
  initialState: Xp,
  reducers: {
    setLinkFieldSelectedTargetNodeId: (e, t) => {
      e.selectedTargetNodeId = t.payload;
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
    resetLinkFieldState: () => Xp,
    initializeLinkFieldState: (e, t) => ({ ...e, ...t.payload })
  }
}), {
  setLinkFieldSelectedTargetNodeId: VT,
  setLinkFieldSelectedSourceKey: BT,
  setLinkFieldSelectedTargetKey: UT,
  setLinkFieldNewFieldName: KT,
  setLinkFieldLinkType: WT,
  setLinkFieldSearchQuery: YT,
  resetLinkFieldState: XT,
  initializeLinkFieldState: GT
} = jx.actions, QT = jx.reducer, Rx = Ql({
  name: "jmix",
  initialState: {},
  reducers: {
    eventReceived: (e, t) => {
    }
  }
}), { eventReceived: Fx } = Rx.actions, ZT = Rx.reducer, Gp = "jmix:ui";
function qT(e) {
  const t = (n) => {
    const r = n;
    !r.detail || r.detail.v !== 1 || (console.log(r.detail), e(r.detail));
  };
  return window.addEventListener(Gp, t), () => window.removeEventListener(Gp, t);
}
function Ze(e, t, n) {
  var o;
  const r = {
    v: 1,
    type: e,
    ts: Date.now(),
    payload: t ?? {},
    correlationId: n
  };
  if ((o = window.ReactBridge) != null && o.notify) {
    window.ReactBridge.notify(r);
    return;
  }
  window.dispatchEvent(new CustomEvent("react:ui", { detail: r }));
}
const $c = (e) => e.map((o, i) => {
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
}), JT = (e) => (t) => (n) => {
  if (n.type !== Fx.type) return t(n);
  const r = n.payload;
  switch (r.type) {
    case "SCHEMA_LOAD": {
      const o = r.payload ?? {};
      e.dispatch(Dx());
      const i = {}, s = {};
      Array.isArray(o.tables) && o.tables.forEach((l) => {
        const a = l.id;
        let u = l.id;
        s[a] === void 0 ? (s[a] = 0, u = `node_${a}`) : (s[a]++, u = `node_${a}_replica_${s[a]}`), a && (i[a] || (i[a] = []), i[a].push(u)), e.dispatch(
          zl({
            ...l,
            id: u
          })
        );
      }), Array.isArray(o.relationships) && setTimeout(() => {
        o.relationships.forEach((l) => {
          var y;
          const a = i[l.sourceNodeId] || [l.sourceNodeId], u = i[l.targetNodeId] || [l.targetNodeId], d = l.sourceReplicaIndex || 0, c = l.targetReplicaIndex || 0, f = a[d], p = u[c];
          if (f && p) {
            const w = (y = l.type) == null ? void 0 : y.toLowerCase();
            w === "array" ? e.dispatch(
              Ti({
                sourceNodeId: f,
                targetNodeId: p,
                sourcePK: l.sourceKey,
                targetFK: l.targetKey,
                newFieldName: l.fieldName,
                relationshipType: l.relationshipType
              })
            ) : w === "object" && e.dispatch(
              Pi({
                sourceNodeId: f,
                targetNodeId: p,
                sourceFK: l.sourceKey,
                targetPK: l.targetKey,
                newFieldName: l.fieldName,
                relationshipType: l.relationshipType
              })
            );
          }
        });
      }, 50), o.autoLayout && setTimeout(() => {
        const l = e.getState(), a = $c(l.schema.present.nodes);
        e.dispatch(Oc(a));
      }, 100), Ze("SCHEMA_LOADED", {}, r.correlationId);
      break;
    }
    case "TABLE_ADD": {
      const o = r.payload ?? {};
      e.dispatch(zl(o)), Ze("TABLE_ADDED", { id: o.id || `table-${Date.now()}` }, r.correlationId);
      break;
    }
    case "TABLE_UPDATE": {
      const o = r.payload ?? {};
      o.id && (e.dispatch(zc({ id: o.id, updates: o.updates ?? {} })), Ze("TABLE_UPDATED", { id: o.id }, r.correlationId));
      break;
    }
    case "TABLE_DELETE": {
      const o = r.payload ?? {};
      o.id && (e.dispatch(Ix(o.id)), Ze("TABLE_DELETED", { id: o.id }, r.correlationId));
      break;
    }
    case "FIELD_ADD": {
      const o = r.payload ?? {};
      o.nodeId && o.field && (e.dispatch(Tx({ nodeId: o.nodeId, field: o.field })), Ze("FIELD_ADDED", { nodeId: o.nodeId }, r.correlationId));
      break;
    }
    case "FIELD_UPDATE": {
      const o = r.payload ?? {};
      o.nodeId && typeof o.fieldIndex == "number" && (e.dispatch(
        Px({
          nodeId: o.nodeId,
          fieldIndex: o.fieldIndex,
          updates: o.updates ?? {}
        })
      ), Ze("FIELD_UPDATED", { nodeId: o.nodeId, fieldIndex: o.fieldIndex }, r.correlationId));
      break;
    }
    case "FIELD_DELETE": {
      const o = r.payload ?? {};
      o.nodeId && typeof o.fieldIndex == "number" && (e.dispatch(ka({ nodeId: o.nodeId, fieldIndex: o.fieldIndex })), Ze("FIELD_DELETED", { nodeId: o.nodeId, fieldIndex: o.fieldIndex }, r.correlationId));
      break;
    }
    case "FIELD_REORDER": {
      const o = r.payload ?? {};
      o.nodeId && typeof o.oldIndex == "number" && typeof o.newIndex == "number" && (e.dispatch(
        Mx({
          nodeId: o.nodeId,
          oldIndex: o.oldIndex,
          newIndex: o.newIndex
        })
      ), Ze("FIELD_REORDERED", { nodeId: o.nodeId }, r.correlationId));
      break;
    }
    case "FIELD_TOGGLE_VISIBILITY": {
      const o = r.payload ?? {};
      o.nodeId && typeof o.fieldIndex == "number" && (e.dispatch(Ax({ nodeId: o.nodeId, fieldIndex: o.fieldIndex })), Ze("FIELD_VISIBILITY_TOGGLED", { nodeId: o.nodeId, fieldIndex: o.fieldIndex }, r.correlationId));
      break;
    }
    case "RELATIONSHIP_ADD": {
      const o = r.payload ?? {};
      o.type === "1-n" || o.type === "array" ? e.dispatch(
        Ti({
          sourceNodeId: o.sourceNodeId,
          targetNodeId: o.targetNodeId,
          sourcePK: o.sourceKey,
          targetFK: o.targetKey,
          newFieldName: o.fieldName,
          relationshipType: o.relationshipType
        })
      ) : (o.type === "object" || o.type === "n-1") && e.dispatch(
        Pi({
          sourceNodeId: o.sourceNodeId,
          targetNodeId: o.targetNodeId,
          sourceFK: o.sourceKey,
          targetPK: o.targetKey,
          newFieldName: o.fieldName,
          relationshipType: o.relationshipType
        })
      ), Ze("RELATIONSHIP_ADDED", {}, r.correlationId);
      break;
    }
    case "SCHEMA_UNDO": {
      e.dispatch(nl.undo()), Ze("SCHEMA_UNDONE", {}, r.correlationId);
      break;
    }
    case "SCHEMA_REDO": {
      e.dispatch(nl.redo()), Ze("SCHEMA_REDONE", {}, r.correlationId);
      break;
    }
    case "SCHEMA_AUTO_LAYOUT": {
      const o = e.getState(), i = $c(o.schema.present.nodes);
      e.dispatch(Oc(i)), Ze("SCHEMA_LAYOUT_APPLIED", {}, r.correlationId);
      break;
    }
  }
  return t(n);
}, eP = [JT], tP = j1({
  reducer: {
    schema: tS(LT, {
      limit: 50,
      filter: X1([
        "schema/onNodesChange",
        "schema/onEdgesChange",
        "schema/setNodes",
        "schema/setEdges"
      ])
    }),
    ui: HT,
    linkField: QT,
    jmix: ZT
  },
  middleware: (e) => e({
    serializableCheck: {
      ignoredActions: ["schema/onNodesChange", "schema/onEdgesChange"]
    }
  }).concat(...eP)
});
class nP {
  constructor() {
    Zi(this, "listeners", {});
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
const ne = new nP(), rP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  schemaEventBus: ne
}, Symbol.toStringTag, { value: "Module" })), re = {
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
  FIELD_REQUEST_EDIT: "field:request_edit",
  FIELD_REQUEST_DELETE: "field:request_delete",
  // Alias/Option for confirmed delete
  // Global Actions
  SCHEMA_AUTO_LAYOUT: "schema:auto_layout",
  SCHEMA_UNDO: "schema:undo",
  SCHEMA_REDO: "schema:redo",
  RELATIONSHIP_ADD: "relationship:add",
  LINK_FIELD_OPEN: "link_field:open",
  TABLE_TOGGLE_VISIBILITY: "table:toggle_visibility"
}, oP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SchemaEvents: re
}, Symbol.toStringTag, { value: "Module" }));
function iP() {
  const { fitView: e } = Yi();
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
    return ne.on(re.TABLE_FOCUS, t), ne.on(re.SCHEMA_AUTO_LAYOUT, n), () => {
      ne.off(re.TABLE_FOCUS, t), ne.off(re.SCHEMA_AUTO_LAYOUT, n);
    };
  }, [e]), null;
}
function Ox(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ox(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function zx() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ox(e)) && (r && (r += " "), r += t);
  return r;
}
const lf = "-", sP = (e) => {
  const t = aP(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(lf);
      return l[0] === "" && l.length !== 1 && l.shift(), $x(l, t) || lP(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const a = n[s] || [];
      return l && r[s] ? [...a, ...r[s]] : a;
    }
  };
}, $x = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? $x(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(lf);
  return (s = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : s.classGroupId;
}, Qp = /^\[(.+)\]$/, lP = (e) => {
  if (Qp.test(e)) {
    const t = Qp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, aP = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return cP(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    Hc(s, r, i, t);
  }), r;
}, Hc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Zp(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (uP(o)) {
        Hc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      Hc(s, Zp(t, i), n, r);
    });
  });
}, Zp = (e, t) => {
  let n = e;
  return t.split(lf).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, uP = (e) => e.isThemeGetter, cP = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
  return [n, o];
}) : e, dP = (e) => {
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
}, Hx = "!", fP = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, s = (l) => {
    const a = [];
    let u = 0, d = 0, c;
    for (let E = 0; E < l.length; E++) {
      let h = l[E];
      if (u === 0) {
        if (h === o && (r || l.slice(E, E + i) === t)) {
          a.push(l.slice(d, E)), d = E + i;
          continue;
        }
        if (h === "/") {
          c = E;
          continue;
        }
      }
      h === "[" ? u++ : h === "]" && u--;
    }
    const f = a.length === 0 ? l : l.substring(d), p = f.startsWith(Hx), y = p ? f.substring(1) : f, w = c && c > d ? c - d : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: w
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: s
  }) : s;
}, hP = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, pP = (e) => ({
  cache: dP(e.cacheSize),
  parseClassName: fP(e),
  ...sP(e)
}), gP = /\s+/, mP = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(gP);
  let l = "";
  for (let a = s.length - 1; a >= 0; a -= 1) {
    const u = s[a], {
      modifiers: d,
      hasImportantModifier: c,
      baseClassName: f,
      maybePostfixModifierPosition: p
    } = n(u);
    let y = !!p, w = r(y ? f.substring(0, p) : f);
    if (!w) {
      if (!y) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(f), !w) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const E = hP(d).join(":"), h = c ? E + Hx : E, x = h + w;
    if (i.includes(x))
      continue;
    i.push(x);
    const g = o(w, y);
    for (let v = 0; v < g.length; ++v) {
      const S = g[v];
      i.push(h + S);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function yP() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Vx(t)) && (r && (r += " "), r += n);
  return r;
}
const Vx = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Vx(e[r])) && (n && (n += " "), n += t);
  return n;
};
function xP(e, ...t) {
  let n, r, o, i = s;
  function s(a) {
    const u = t.reduce((d, c) => c(d), e());
    return n = pP(u), r = n.cache.get, o = n.cache.set, i = l, l(a);
  }
  function l(a) {
    const u = r(a);
    if (u)
      return u;
    const d = mP(a, n);
    return o(a, d), d;
  }
  return function() {
    return i(yP.apply(null, arguments));
  };
}
const ye = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Bx = /^\[(?:([a-z-]+):)?(.+)\]$/i, vP = /^\d+\/\d+$/, wP = /* @__PURE__ */ new Set(["px", "full", "screen"]), SP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, EP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _P = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, bP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, NP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, en = (e) => Qr(e) || wP.has(e) || vP.test(e), bn = (e) => Eo(e, "length", DP), Qr = (e) => !!e && !Number.isNaN(Number(e)), Su = (e) => Eo(e, "number", Qr), Lo = (e) => !!e && Number.isInteger(Number(e)), kP = (e) => e.endsWith("%") && Qr(e.slice(0, -1)), oe = (e) => Bx.test(e), Nn = (e) => SP.test(e), CP = /* @__PURE__ */ new Set(["length", "size", "percentage"]), IP = (e) => Eo(e, CP, Ux), TP = (e) => Eo(e, "position", Ux), PP = /* @__PURE__ */ new Set(["image", "url"]), MP = (e) => Eo(e, PP, jP), AP = (e) => Eo(e, "", LP), jo = () => !0, Eo = (e, t, n) => {
  const r = Bx.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, DP = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  EP.test(e) && !_P.test(e)
), Ux = () => !1, LP = (e) => bP.test(e), jP = (e) => NP.test(e), RP = () => {
  const e = ye("colors"), t = ye("spacing"), n = ye("blur"), r = ye("brightness"), o = ye("borderColor"), i = ye("borderRadius"), s = ye("borderSpacing"), l = ye("borderWidth"), a = ye("contrast"), u = ye("grayscale"), d = ye("hueRotate"), c = ye("invert"), f = ye("gap"), p = ye("gradientColorStops"), y = ye("gradientColorStopPositions"), w = ye("inset"), E = ye("margin"), h = ye("opacity"), x = ye("padding"), g = ye("saturate"), v = ye("scale"), S = ye("sepia"), _ = ye("skew"), N = ye("space"), k = ye("translate"), T = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", oe, t], M = () => [oe, t], $ = () => ["", en, bn], I = () => ["auto", Qr, oe], j = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], P = () => ["", "0", oe], R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [Qr, oe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [jo],
      spacing: [en, bn],
      blur: ["none", "", Nn, oe],
      brightness: O(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Nn, oe],
      borderSpacing: M(),
      borderWidth: $(),
      contrast: O(),
      grayscale: P(),
      hueRotate: O(),
      invert: P(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [kP, bn],
      inset: A(),
      margin: A(),
      opacity: O(),
      padding: M(),
      saturate: O(),
      scale: O(),
      sepia: P(),
      skew: O(),
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
        aspect: ["auto", "square", "video", oe]
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
        columns: [Nn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": R()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": R()
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
        object: [...j(), oe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
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
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
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
        z: ["auto", Lo, oe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: A()
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
        flex: ["1", "auto", "initial", "none", oe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: P()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: P()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Lo, oe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [jo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Lo, oe]
        }, oe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [jo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Lo, oe]
        }, oe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        "auto-cols": ["auto", "min", "max", "fr", oe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", oe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...C()]
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
        content: ["normal", ...C(), "baseline"]
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
        "place-content": [...C(), "baseline"]
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
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [E]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [E]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [E]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [E]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [E]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [E]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [E]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [E]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [E]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", oe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [oe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [oe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Nn]
        }, Nn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [oe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [oe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [oe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [oe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Nn, bn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Su]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", oe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Qr, Su]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", en, oe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", oe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", oe]
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
        "placeholder-opacity": [h]
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
        "text-opacity": [h]
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
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", en, bn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", en, oe]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", oe]
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
        content: ["none", oe]
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
        "bg-opacity": [h]
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
        bg: [...j(), TP]
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
        bg: ["auto", "cover", "contain", IP]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, MP]
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
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
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
        "border-opacity": [h]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
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
        "divide-opacity": [h]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
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
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [en, oe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [en, bn]
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
        ring: $()
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
        "ring-opacity": [h]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [en, bn]
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
        shadow: ["", "inner", "none", Nn, AP]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [jo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [h]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...F(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
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
        "drop-shadow": ["", "none", Nn, oe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
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
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [g]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
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
        "backdrop-grayscale": [u]
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
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [h]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [g]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", oe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: O()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", oe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: O()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", oe]
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
        scale: [v]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [v]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [v]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Lo, oe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [_]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [_]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", oe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", oe]
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
        "will-change": ["auto", "scroll", "contents", "transform", oe]
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
        stroke: [en, bn, Su]
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
}, FP = /* @__PURE__ */ xP(RP);
function fe(...e) {
  return FP(zx(e));
}
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Kx = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zP = {
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
const $P = b.forwardRef(
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
      ...zP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Kx("lucide", o),
      ...l
    },
    [
      ...s.map(([u, d]) => b.createElement(u, d)),
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
const Er = (e, t) => {
  const n = b.forwardRef(
    ({ className: r, ...o }, i) => b.createElement($P, {
      ref: i,
      iconNode: t,
      className: Kx(`lucide-${OP(e)}`, r),
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
const HP = Er("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VP = Er("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BP = Er("Database", [
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
const UP = Er("EllipsisVertical", [
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
const Wx = Er("Pen", [
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
const KP = Er("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = Er("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]), af = b.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Ai = ({ open: e = !1, onOpenChange: t, children: n }) => /* @__PURE__ */ m.jsx(af.Provider, { value: { open: e, onOpenChange: t || (() => {
}) }, children: n }), Yx = b.forwardRef(({ children: e, onClick: t, ...n }, r) => {
  const { onOpenChange: o } = b.useContext(af);
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      ref: r,
      onClick: (i) => {
        o(!0), t == null || t(i);
      },
      ...n,
      children: e
    }
  );
});
Yx.displayName = "DialogTrigger";
const po = b.forwardRef(
  ({ className: e, children: t, ...n }, r) => {
    const { open: o, onOpenChange: i } = b.useContext(af);
    return o ? K0.createPortal(
      /* @__PURE__ */ m.jsxs(
        "div",
        {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          onClick: () => i(!1),
          children: [
            /* @__PURE__ */ m.jsx(
              "div",
              {
                ref: r,
                className: fe(
                  "relative z-50 w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg",
                  e
                ),
                onClick: (s) => s.stopPropagation(),
                ...n,
                children: t
              }
            ),
            /* @__PURE__ */ m.jsx("div", { className: "fixed inset-0 bg-black/50" })
          ]
        }
      ),
      document.body
    ) : null;
  }
);
po.displayName = "DialogContent";
const go = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: fe(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
go.displayName = "DialogHeader";
const mo = b.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  "h2",
  {
    ref: n,
    className: fe(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
mo.displayName = "DialogTitle";
const Ca = b.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  "p",
  {
    ref: n,
    className: fe("text-sm text-muted-foreground", e),
    ...t
  }
));
Ca.displayName = "DialogDescription";
const Cr = {
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
function WP(e, t) {
  const [n, r] = b.useState(!1), [o, i] = b.useState(t.label), [s, l] = b.useState(!1), a = t.color || Cr.NODE.HEADER_BG_DEFAULT;
  return {
    isEditing: n,
    setIsEditing: r,
    editName: o,
    setEditName: i,
    showDeleteDialog: s,
    setShowDeleteDialog: l,
    headerColor: a,
    handleAddField: () => {
      const f = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      Ze("field:add", { sourceNodeId: e }, f), console.log("Emitted FIELD_ADD with correlation:", f);
    },
    handleClone: () => {
      const f = `table-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
      ne.emit(re.TABLE_ADD, {
        id: f,
        name: `${t.label} (Bản sao)`,
        tableName: t.tableName || t.label,
        columns: t.columns
      });
    },
    handleSaveRename: () => {
      o.trim() && (ne.emit(re.TABLE_UPDATE, { id: e, updates: { label: o.trim() } }), r(!1));
    }
  };
}
const uf = b.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ m.jsx(
    "input",
    {
      type: t,
      className: fe(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
uf.displayName = "Input";
function YP({
  data: e,
  id: t,
  isEditing: n,
  editName: r,
  headerColor: o,
  setIsEditing: i,
  setEditName: s,
  handleSaveRename: l,
  handleClone: a,
  setShowDeleteDialog: u
}) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: "text-white px-4 py-3 rounded-t-lg relative",
      style: { backgroundColor: o },
      children: /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between items-start", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex-1 mr-8", children: [
          n ? /* @__PURE__ */ m.jsx(
            uf,
            {
              value: r,
              onChange: (d) => s(d.target.value),
              onBlur: l,
              onKeyDown: (d) => d.key === "Enter" && l(),
              autoFocus: !0,
              className: "h-7 bg-white/20 border-white/30 text-white placeholder:text-white/50 text-sm font-bold focus:bg-white/30"
            }
          ) : /* @__PURE__ */ m.jsx(
            "div",
            {
              className: "font-bold text-sm cursor-text hover:bg-white/10 rounded px-1 -ml-1",
              onDoubleClick: () => i(!0),
              children: e.label
            }
          ),
          /* @__PURE__ */ m.jsxs("div", { className: "text-[10px] opacity-80 flex items-center gap-1.5 mt-1", children: [
            /* @__PURE__ */ m.jsxs("span", { children: [
              "ID: ",
              t
            ] }),
            /* @__PURE__ */ m.jsx("span", { children: "•" }),
            /* @__PURE__ */ m.jsx("span", { className: "font-mono", children: e.tableName || e.label })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex gap-1 absolute right-2 top-2 opacity-0 group-hover/node:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: () => i(!0),
              className: "p-1 hover:bg-white/20 rounded transition-colors",
              title: "Đổi tên",
              children: /* @__PURE__ */ m.jsx(Wx, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: a,
              className: "p-1 hover:bg-white/20 rounded transition-colors",
              title: "Nhân bản (Instance)",
              children: /* @__PURE__ */ m.jsx(VP, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: () => u(!0),
              className: "p-1 hover:bg-red-500/50 rounded transition-colors",
              title: "Xóa",
              children: /* @__PURE__ */ m.jsx(Mi, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ] })
    }
  );
}
function XP({ column: e }) {
  return e.visible === !1 ? null : /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: fe(
        "px-4 py-2 text-sm flex items-center gap-2 relative",
        e.isPrimaryKey && "bg-yellow-50",
        e.isForeignKey && "bg-blue-50",
        e.isVirtual && "bg-green-50 border-l-2 border-l-green-400"
      ),
      children: [
        /* @__PURE__ */ m.jsx(
          vr,
          {
            type: "target",
            position: Y.Left,
            id: e.name,
            isConnectable: !1,
            className: "w-1 h-1 !bg-transparent !border-0 opacity-0 pointer-events-none absolute left-0",
            style: {
              top: "50%",
              transform: "translateY(-50%)"
            }
          }
        ),
        /* @__PURE__ */ m.jsx("span", { className: "font-medium text-gray-900 pointer-events-none", children: e.name || "" }),
        e.isVirtual && e.linkedPrimaryKeyField ? /* @__PURE__ */ m.jsxs("span", { className: "text-gray-500 text-xs flex items-center gap-1 pointer-events-none", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-green-600", children: "→" }),
          /* @__PURE__ */ m.jsx("span", { className: "text-green-600 font-medium", children: e.linkedPrimaryKeyField })
        ] }) : e.type === "object" && (e.linkedForeignKeyField || e.primaryKeyField) ? /* @__PURE__ */ m.jsxs("span", { className: "text-gray-500 text-xs flex items-center gap-1 pointer-events-none", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-violet-600", children: "→" }),
          /* @__PURE__ */ m.jsx("span", { className: "text-violet-600 font-medium", children: e.linkedForeignKeyField || e.primaryKeyField })
        ] }) : /* @__PURE__ */ m.jsx("span", { className: "text-gray-500 text-xs pointer-events-none", children: e.type }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex gap-1 items-center ml-auto pointer-events-none", children: [
          e.isVirtual && /* @__PURE__ */ m.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-emerald-100 text-emerald-700 border border-emerald-200/50 rounded shadow-sm font-bold select-none", title: "Virtual Field", children: "V" }),
          e.isPrimaryKey && /* @__PURE__ */ m.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-amber-100 text-amber-700 border border-amber-200/50 rounded shadow-sm font-bold select-none", title: "Primary Key", children: "PK" }),
          e.isForeignKey && /* @__PURE__ */ m.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-sky-100 text-sky-700 border border-sky-200/50 rounded shadow-sm font-bold select-none", title: "Foreign Key", children: "FK" }),
          e.type === "object" && /* @__PURE__ */ m.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-violet-100 text-violet-700 border border-violet-200/50 rounded shadow-sm font-bold select-none", title: "Object", children: "O" }),
          e.type === "array" && /* @__PURE__ */ m.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-[10px] bg-orange-100 text-orange-700 border border-orange-200/50 rounded shadow-sm font-bold select-none", title: "Array", children: "A" })
        ] }),
        /* @__PURE__ */ m.jsx(
          vr,
          {
            type: "source",
            position: Y.Right,
            id: e.name,
            isConnectable: !1,
            className: "w-1 h-1 !bg-transparent !border-0 opacity-0 pointer-events-none absolute right-0",
            style: {
              top: "50%",
              transform: "translateY(-50%)"
            }
          }
        )
      ]
    }
  );
}
function GP({ data: e, selected: t, id: n }) {
  const {
    isEditing: r,
    setIsEditing: o,
    editName: i,
    setEditName: s,
    showDeleteDialog: l,
    setShowDeleteDialog: a,
    headerColor: u,
    handleAddField: d,
    handleClone: c,
    handleSaveRename: f
  } = WP(n, e);
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: fe(
          "bg-white border-2 rounded-lg shadow-xl min-w-[240px] group/node",
          t ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200"
        ),
        children: [
          /* @__PURE__ */ m.jsx(
            YP,
            {
              data: e,
              id: n,
              isEditing: r,
              editName: i,
              headerColor: u,
              setIsEditing: o,
              setEditName: s,
              handleSaveRename: f,
              handleClone: c,
              setShowDeleteDialog: a
            }
          ),
          /* @__PURE__ */ m.jsxs("div", { className: "divide-y nodrag", children: [
            e.columns.map((p) => /* @__PURE__ */ m.jsx(XP, { column: p }, p.name)),
            /* @__PURE__ */ m.jsx("div", { className: "px-4 py-2 border-t border-gray-200", children: /* @__PURE__ */ m.jsxs(
              "button",
              {
                onClick: d,
                className: "w-full flex items-center justify-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors",
                title: "Thêm field mới",
                children: [
                  /* @__PURE__ */ m.jsx(KP, { className: "w-4 h-4" }),
                  /* @__PURE__ */ m.jsx("span", { children: "Thêm field" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ m.jsx("div", { className: "relative border-t border-gray-200 py-0 h-0", children: /* @__PURE__ */ m.jsx(
            vr,
            {
              type: "target",
              position: Y.Bottom,
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
    /* @__PURE__ */ m.jsx(Ai, { open: l, onOpenChange: a, children: /* @__PURE__ */ m.jsxs(po, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ m.jsxs(go, { children: [
        /* @__PURE__ */ m.jsxs(mo, { className: "flex items-center gap-2 text-red-600", children: [
          /* @__PURE__ */ m.jsx(Mi, { className: "w-5 h-5" }),
          "Xóa bảng ",
          e.label,
          "?"
        ] }),
        /* @__PURE__ */ m.jsxs(Ca, { className: "py-2", children: [
          /* @__PURE__ */ m.jsx("span", { className: "block font-medium text-gray-900 mb-2", children: "CẢNH BÁO CAO ĐỘ:" }),
          "Hành động này sẽ xóa bảng ",
          /* @__PURE__ */ m.jsx("strong", { children: e.label }),
          " VÀ ",
          /* @__PURE__ */ m.jsx("strong", { className: "text-red-600", children: "TẤT CẢ các bảng con (descendants)" }),
          " đang được liên kết với nó.",
          /* @__PURE__ */ m.jsx("br", {}),
          /* @__PURE__ */ m.jsx("br", {}),
          "Bạn có chắc chắn muốn tiếp tục không? Hành động này không thể hoàn tác."
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex justify-end gap-3 mt-4", children: [
        /* @__PURE__ */ m.jsx(
          "button",
          {
            onClick: () => a(!1),
            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            children: "Hủy bỏ"
          }
        ),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            onClick: () => {
              ne.emit(re.TABLE_DELETE, { id: n }), a(!1);
            },
            className: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
            children: "Xác nhận Xóa"
          }
        )
      ] })
    ] }) })
  ] });
}
const QP = b.memo(GP), qp = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Jp = zx, ZP = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Jp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((u) => {
    const d = n == null ? void 0 : n[u], c = i == null ? void 0 : i[u];
    if (d === null) return null;
    const f = qp(d) || qp(c);
    return o[u][f];
  }), l = n && Object.entries(n).reduce((u, d) => {
    let [c, f] = d;
    return f === void 0 || (u[c] = f), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let { class: c, className: f, ...p } = d;
    return Object.entries(p).every((y) => {
      let [w, E] = y;
      return Array.isArray(E) ? E.includes({
        ...i,
        ...l
      }[w]) : {
        ...i,
        ...l
      }[w] === E;
    }) ? [
      ...u,
      c,
      f
    ] : u;
  }, []);
  return Jp(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Xx = ZP(
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
), Di = b.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => /* @__PURE__ */ m.jsx(
    "button",
    {
      className: fe(Xx({ variant: t, size: n, className: e })),
      ref: i,
      ...o
    }
  )
);
Di.displayName = "Button";
class cf {
  /**
   * Validates field name format
   */
  static validateFieldName(t) {
    return !t || t.trim().length === 0 ? { valid: !1, error: wu.FIELD_NAME_REQUIRED } : t.length > Cs.MAX_NAME_LENGTH ? { valid: !1, error: wu.FIELD_NAME_TOO_LONG } : /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(t) ? { valid: !0 } : { valid: !1, error: wu.FIELD_NAME_INVALID };
  }
  /**
   * Validates if a field name is reserved
   */
  static isReservedName(t) {
    return Cs.RESERVED_NAMES.includes(t.toLowerCase());
  }
  /**
   * Sanitizes field name
   */
  static sanitizeFieldName(t) {
    return t.trim().toLowerCase().replace(/[^a-z0-9_]/g, "_").replace(/^[0-9]/, "_$&").substring(0, Cs.MAX_NAME_LENGTH);
  }
  /**
   * Validates table name
   */
  static validateTableName(t) {
    return !t || t.trim().length === 0 ? { valid: !1, error: "Tên bảng không được để trống" } : t.length > Cs.MAX_NAME_LENGTH ? { valid: !1, error: "Tên bảng quá dài (tối đa 63 ký tự)" } : { valid: !0 };
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
Zi(cf, "COMPATIBLE_TYPE_GROUPS", [
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
function Gx({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: r,
  targetY: o,
  sourcePosition: i,
  targetPosition: s,
  style: l = {},
  markerEnd: a,
  data: u,
  selected: d,
  source: c,
  target: f,
  sourceHandleId: p,
  targetHandleId: y
}) {
  var qt;
  const { updateEdge: w, getNode: E, getNodes: h } = Yi(), x = vo(), g = h(), [v, S] = b.useState(
    (u == null ? void 0 : u.relationshipType) || "1-n"
  ), [_, N] = b.useState(p || ""), [k, T] = b.useState(f), [D, A] = b.useState(""), [M, $] = b.useState(y || ""), [I, j] = b.useState(null), [L, F] = b.useState(!1), [C, P] = b.useState((u == null ? void 0 : u.pathType) || "bezier"), [R, O] = b.useState(!1), [z, U] = b.useState(!1), [V, X] = b.useState((u == null ? void 0 : u.relationshipType) === "1-n"), G = b.useMemo(() => {
    if (!D || !M || !k) return null;
    const K = E(c), Z = g.find((le) => le.id === k);
    if (K && Z) {
      const le = K.data.columns.find((me) => me.name === D), Qe = Z.data.columns.find((me) => me.name === M);
      if (le && Qe) {
        const me = cf.validateRelationshipTypes(
          le.type,
          Qe.type,
          le.name,
          Qe.name
        );
        if (!me.valid) return me.error;
      }
    }
    return null;
  }, [D, M, k, E, c, g]);
  b.useEffect(() => {
    j(G || null);
  }, [G]), b.useEffect(() => {
    var K;
    if (R) {
      N(p || ""), T(f);
      const Z = E(c);
      let le = D, Qe = M;
      if (!le && Z) {
        const je = Z.data.columns.find((Xn) => Xn.name === p);
        (u == null ? void 0 : u.relationshipType) === "1-n" ? (le = (je == null ? void 0 : je.linkedPrimaryKeyField) || ((K = Z.data.columns.find((Xn) => Xn.isPrimaryKey)) == null ? void 0 : K.name) || "", Qe = y || "") : (le = (u == null ? void 0 : u.sourceFK) || (je == null ? void 0 : je.linkedForeignKeyField) || "", Qe = y || ""), A(le), $(Qe);
      }
      if (Z) {
        const je = Z.data.columns.find((Xn) => Xn.name === p);
        je && V === void 0 && X(!!je.isVirtual);
      }
      const me = Z == null ? void 0 : Z.data.columns.find((je) => je.name === p);
      me && X(!!me.isVirtual);
    }
  }, [R, c, f, p, y, u, E]);
  const Q = () => {
    const K = E(c), Z = g.find((me) => me.id === k);
    if (K && D) {
      const me = K.data.columns.find((je) => je.name === D);
      if (me && (me.type === "array" || me.type === "object")) {
        j(`Trường nguồn '${D}' có kiểu ${me.type}. Chỉ được liên kết tới kiểu nguyên thủy.`);
        return;
      }
    }
    if (Z && M) {
      const me = Z.data.columns.find((je) => je.name === M);
      if (me && (me.type === "array" || me.type === "object")) {
        j(`Trường đích '${M}' có kiểu ${me.type}. Chỉ được liên kết tới kiểu nguyên thủy.`);
        return;
      }
    }
    if (!_ || !k || !D || !M) return;
    j(null);
    const le = E(c);
    if (!le) return;
    const Qe = le.data.columns.findIndex((me) => me.name === p);
    Qe !== -1 && x(ka({
      nodeId: c,
      fieldIndex: Qe,
      skipRecursive: !0
      // We are replacing it immediately
    })), x(V ? Ti({
      sourceNodeId: c,
      targetNodeId: k,
      sourcePK: D,
      targetFK: M,
      newFieldName: _,
      relationshipType: v
    }) : Pi({
      sourceNodeId: c,
      targetNodeId: k,
      sourceFK: D,
      // This should be the FK column name in source table
      targetPK: M,
      // This should be the PK column name in target table
      newFieldName: _,
      relationshipType: v
    })), O(!1);
  };
  b.useEffect(() => {
    u != null && u.relationshipType && S(u.relationshipType), u != null && u.pathType && P(u.pathType);
  }, [u == null ? void 0 : u.relationshipType, u == null ? void 0 : u.pathType]);
  const q = (() => {
    if (C === "straight")
      return `M ${t},${n} L ${r},${o}`;
    if (C === "smoothstep") {
      const [K] = hl({
        sourceX: t,
        sourceY: n,
        sourcePosition: i,
        targetX: r,
        targetY: o,
        targetPosition: s
      });
      return K;
    } else {
      const [K] = ud({
        sourceX: t,
        sourceY: n,
        sourcePosition: i,
        targetX: r,
        targetY: o,
        targetPosition: s
      });
      return K;
    }
  })(), ie = (t + r) / 2, te = (n + o) / 2, J = (K) => {
    K !== v && S(K);
  }, ee = (K) => {
    P(K), w(e, (Z) => ({
      ...Z,
      data: {
        ...Z.data,
        pathType: K
      }
    }));
  }, ce = () => {
    U(!0);
  }, pe = () => {
    Promise.resolve().then(() => rP).then(({ schemaEventBus: K }) => {
      Promise.resolve().then(() => oP).then(({ SchemaEvents: Z }) => {
        K.emit(Z.TABLE_DELETE, { id: f });
      });
    }), U(!1), O(!1);
  };
  b.useEffect(() => {
    if (!c || !f || !p || !y) return;
    const K = Et(v), Z = document.querySelector(
      `.react-flow__handle[data-handleid="${p}"][data-nodeid="${c}"]`
    ), le = document.querySelector(
      `.react-flow__handle[data-handleid="${y}"][data-nodeid="${f}"]`
    );
    return L || d ? (Z && (Z.style.backgroundColor = K, Z.style.borderColor = K, Z.style.boxShadow = `0 0 0 2px ${K}40`), le && (le.style.backgroundColor = K, le.style.borderColor = K, le.style.boxShadow = `0 0 0 2px ${K}40`)) : (Z && (Z.style.backgroundColor = "", Z.style.borderColor = "", Z.style.boxShadow = ""), le && (le.style.backgroundColor = "", le.style.borderColor = "", le.style.boxShadow = "")), () => {
      Z && (Z.style.backgroundColor = "", Z.style.borderColor = "", Z.style.boxShadow = ""), le && (le.style.backgroundColor = "", le.style.borderColor = "", le.style.boxShadow = "");
    };
  }, [L, d, v, c, f, p, y]);
  const ue = (K) => {
    switch (K) {
      case "1-1":
        return "1";
      case "1-n":
        return "1";
      case "n-1":
        return "N";
      default:
        return "1";
    }
  }, Ae = (K) => {
    switch (K) {
      case "1-1":
        return "1";
      case "1-n":
        return "N";
      case "n-1":
        return "1";
      default:
        return "N";
    }
  }, Et = (K) => {
    switch (K) {
      case "1-1":
        return Cr.RELATIONSHIP.COLORS.ONE_TO_ONE;
      case "1-n":
        return Cr.RELATIONSHIP.COLORS.ONE_TO_MANY;
      case "n-1":
        return Cr.RELATIONSHIP.COLORS.MANY_TO_ONE;
      default:
        return Cr.RELATIONSHIP.COLORS.ONE_TO_MANY;
    }
  }, _t = () => {
    let Z = t, le = n;
    return i === Y.Left ? Z = t - 20 : i === Y.Right ? Z = t + 20 : i === Y.Top ? le = n - 20 : i === Y.Bottom && (le = n + 20), { x: Z, y: le };
  }, Zt = () => {
    let Z = r, le = o;
    return s === Y.Left ? Z = r - 20 : s === Y.Right ? Z = r + 20 : s === Y.Top ? le = o - 20 : s === Y.Bottom && (le = o + 20), { x: Z, y: le };
  }, vn = _t(), zt = Zt(), $t = Et(v), _o = Cr.RELATIONSHIP.COLORS.DEFAULT, wn = d || L ? $t : _o;
  return /* @__PURE__ */ m.jsxs(
    "g",
    {
      onMouseEnter: () => F(!0),
      onMouseLeave: () => F(!1),
      children: [
        /* @__PURE__ */ m.jsx(
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
            d: q,
            onClick: (K) => {
              K.stopPropagation(), O(!0);
            }
          }
        ),
        /* @__PURE__ */ m.jsx(
          "path",
          {
            id: e,
            style: {
              ...l,
              stroke: wn,
              strokeWidth: d ? 3 : 2,
              strokeDasharray: "5,5",
              transition: "stroke 0.2s ease, stroke-width 0.2s ease",
              pointerEvents: "none"
            },
            className: "react-flow__edge-path",
            d: q,
            markerEnd: a
          }
        ),
        /* @__PURE__ */ m.jsx(
          "foreignObject",
          {
            width: 30,
            height: 30,
            x: vn.x - 15,
            y: vn.y - 15,
            className: "overflow-visible pointer-events-none",
            requiredExtensions: "http://www.w3.org/1999/xhtml",
            children: /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ m.jsx(
              "span",
              {
                className: "text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md transition-colors duration-200",
                style: {
                  backgroundColor: wn
                },
                children: ue(v)
              }
            ) })
          }
        ),
        /* @__PURE__ */ m.jsx(
          "foreignObject",
          {
            width: 30,
            height: 30,
            x: zt.x - 15,
            y: zt.y - 15,
            className: "overflow-visible pointer-events-none",
            requiredExtensions: "http://www.w3.org/1999/xhtml",
            children: /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ m.jsx(
              "span",
              {
                className: "text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md transition-colors duration-200",
                style: {
                  backgroundColor: wn
                },
                children: Ae(v)
              }
            ) })
          }
        ),
        (u == null ? void 0 : u.primaryKeyField) && /* @__PURE__ */ m.jsx(
          "foreignObject",
          {
            width: 200,
            height: 40,
            x: zt.x + 25,
            y: zt.y - 20,
            className: "overflow-visible pointer-events-none",
            requiredExtensions: "http://www.w3.org/1999/xhtml",
            children: /* @__PURE__ */ m.jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ m.jsxs("span", { className: "text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded shadow-sm border border-gray-200", children: [
              "PK: ",
              u.primaryKeyField
            ] }) })
          }
        ),
        /* @__PURE__ */ m.jsx(
          "foreignObject",
          {
            width: 60,
            height: 60,
            x: ie - 30,
            y: te - 30,
            className: "overflow-visible",
            requiredExtensions: "http://www.w3.org/1999/xhtml",
            children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-center w-full h-full", children: [
              /* @__PURE__ */ m.jsxs(Ai, { open: R, onOpenChange: O, children: [
                /* @__PURE__ */ m.jsx(
                  Yx,
                  {
                    onClick: (K) => {
                      K.stopPropagation(), O(!0);
                    },
                    className: fe(
                      Xx({ variant: "secondary", size: "icon" }),
                      "rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer",
                      "bg-white border-2 hover:scale-110"
                    ),
                    style: {
                      borderColor: $t
                    },
                    children: /* @__PURE__ */ m.jsx(
                      UP,
                      {
                        size: 20,
                        style: { color: $t }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ m.jsxs(po, { className: "sm:max-w-[700px] p-0 overflow-hidden gap-0", children: [
                  /* @__PURE__ */ m.jsx(go, { className: "px-6 py-4 border-b bg-gray-50", children: /* @__PURE__ */ m.jsx(mo, { children: "Chỉnh sửa liên kết" }) }),
                  /* @__PURE__ */ m.jsxs("div", { className: "grid gap-6 p-6", style: { gridTemplateColumns: "1fr 2fr" }, children: [
                    /* @__PURE__ */ m.jsxs("div", { className: "space-y-6 border-r pr-6", children: [
                      /* @__PURE__ */ m.jsxs("div", { children: [
                        /* @__PURE__ */ m.jsx("h4", { className: "font-medium text-sm text-gray-900 mb-3", children: "Kiểu Dữ Liệu" }),
                        /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
                          /* @__PURE__ */ m.jsxs(
                            "button",
                            {
                              onClick: () => {
                                X(!0), v !== "1-n" && J("1-n");
                              },
                              className: fe(
                                "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                                V ? "bg-blue-50 text-blue-700 font-medium" : "hover:bg-gray-50 text-gray-700"
                              ),
                              children: [
                                /* @__PURE__ */ m.jsx("span", { className: "block font-semibold", children: "Array" }),
                                /* @__PURE__ */ m.jsx("span", { className: "block text-xs text-gray-500 mt-0.5", children: "Danh sách (1:N)" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ m.jsxs(
                            "button",
                            {
                              onClick: () => {
                                X(!1), v === "1-n" && J("n-1");
                              },
                              className: fe(
                                "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                                V ? "hover:bg-gray-50 text-gray-700" : "bg-purple-50 text-purple-700 font-medium"
                              ),
                              children: [
                                /* @__PURE__ */ m.jsx("span", { className: "block font-semibold", children: "Object" }),
                                /* @__PURE__ */ m.jsx("span", { className: "block text-xs text-gray-500 mt-0.5", children: "Đối tượng (N:1, 1:1)" })
                              ]
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ m.jsxs("div", { children: [
                        /* @__PURE__ */ m.jsx("h4", { className: "font-medium text-sm text-gray-900 mb-3", children: "Quan hệ" }),
                        /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
                          /* @__PURE__ */ m.jsxs(
                            "button",
                            {
                              onClick: () => J("1-1"),
                              className: fe(
                                "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors flex items-center justify-between",
                                v === "1-1" ? "bg-green-50 text-green-700" : "hover:bg-gray-50"
                              ),
                              children: [
                                /* @__PURE__ */ m.jsx("span", { className: "font-semibold text-green-600", children: "1:1" }),
                                /* @__PURE__ */ m.jsx("span", { className: "text-xs text-gray-500", children: "One to One" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ m.jsxs(
                            "button",
                            {
                              onClick: () => {
                                J("1-n"), X(!0);
                              },
                              className: fe(
                                "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors flex items-center justify-between",
                                v === "1-n" ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"
                              ),
                              children: [
                                /* @__PURE__ */ m.jsx("span", { className: "font-semibold text-blue-600", children: "1:N" }),
                                /* @__PURE__ */ m.jsx("span", { className: "text-xs text-gray-500", children: "One to Many" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ m.jsxs(
                            "button",
                            {
                              onClick: () => J("n-1"),
                              className: fe(
                                "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors flex items-center justify-between",
                                v === "n-1" ? "bg-purple-50 text-purple-700" : "hover:bg-gray-50"
                              ),
                              children: [
                                /* @__PURE__ */ m.jsx("span", { className: "font-semibold text-purple-600", children: "N:1" }),
                                /* @__PURE__ */ m.jsx("span", { className: "text-xs text-gray-500", children: "Many to One" })
                              ]
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ m.jsxs("div", { children: [
                        /* @__PURE__ */ m.jsx("h4", { className: "font-medium text-sm text-gray-900 mb-3", children: "Kiểu đường" }),
                        /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
                          /* @__PURE__ */ m.jsx(
                            "button",
                            {
                              onClick: () => ee("bezier"),
                              className: fe(
                                "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                                C === "bezier" ? "bg-gray-100 font-medium" : "hover:bg-gray-50 text-gray-700"
                              ),
                              children: "Cong (Bezier)"
                            }
                          ),
                          /* @__PURE__ */ m.jsx(
                            "button",
                            {
                              onClick: () => ee("smoothstep"),
                              className: fe(
                                "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                                C === "smoothstep" ? "bg-gray-100 font-medium" : "hover:bg-gray-50 text-gray-700"
                              ),
                              children: "Bậc thang (Smoothstep)"
                            }
                          ),
                          /* @__PURE__ */ m.jsx(
                            "button",
                            {
                              onClick: () => ee("straight"),
                              className: fe(
                                "w-full text-left px-3 py-2 text-sm rounded cursor-pointer transition-colors",
                                C === "straight" ? "bg-gray-100 font-medium" : "hover:bg-gray-50 text-gray-700"
                              ),
                              children: "Thẳng (Straight)"
                            }
                          )
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ m.jsxs("div", { className: "", children: [
                      /* @__PURE__ */ m.jsx("h4", { className: "font-medium text-sm text-gray-900 mb-4", children: "Thông tin liên kết" }),
                      /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                          /* @__PURE__ */ m.jsxs("div", { children: [
                            /* @__PURE__ */ m.jsx("label", { className: "text-sm text-gray-500 block mb-1.5 font-medium", children: "Tên trường" }),
                            /* @__PURE__ */ m.jsx(
                              "input",
                              {
                                type: "text",
                                value: _,
                                onChange: (K) => N(K.target.value),
                                className: "w-full px-3 py-2 text-sm border rounded bg-white text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ m.jsxs("div", { children: [
                            /* @__PURE__ */ m.jsx("label", { className: "text-sm text-gray-500 block mb-1.5 font-medium", children: "Bảng đích" }),
                            /* @__PURE__ */ m.jsx(
                              "select",
                              {
                                value: k,
                                onChange: (K) => {
                                  T(K.target.value), $("");
                                },
                                className: "w-full px-2 py-2 text-sm border rounded bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none",
                                children: g.filter((K) => K.id !== c).map((K) => /* @__PURE__ */ m.jsx("option", { value: K.id, children: K.data.label }, K.id))
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                          /* @__PURE__ */ m.jsxs("div", { children: [
                            /* @__PURE__ */ m.jsx("label", { className: "text-sm text-gray-500 block mb-1.5 font-medium", children: v === "1-n" ? "Source (PK)" : "Source (FK)" }),
                            /* @__PURE__ */ m.jsxs(
                              "select",
                              {
                                value: D,
                                onChange: (K) => A(K.target.value),
                                className: "w-full px-3 py-2 text-sm border rounded bg-white text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none",
                                children: [
                                  /* @__PURE__ */ m.jsx("option", { value: "", children: "Chọn..." }),
                                  (() => {
                                    const K = E(c);
                                    return (K == null ? void 0 : K.data.columns.map((Z) => /* @__PURE__ */ m.jsxs("option", { value: Z.name, children: [
                                      Z.name,
                                      " ",
                                      Z.isPrimaryKey ? "(PK)" : ""
                                    ] }, Z.name))) || null;
                                  })()
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ m.jsxs("div", { children: [
                            /* @__PURE__ */ m.jsx("label", { className: "text-sm text-gray-500 block mb-1.5 font-medium", children: v === "1-n" ? "Target (FK)" : "Target (PK)" }),
                            /* @__PURE__ */ m.jsxs(
                              "select",
                              {
                                value: M,
                                onChange: (K) => $(K.target.value),
                                className: "w-full px-3 py-2 text-sm border rounded bg-white text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none",
                                children: [
                                  /* @__PURE__ */ m.jsx("option", { value: "", children: "Chọn..." }),
                                  (() => {
                                    const K = g.find((Z) => Z.id === k);
                                    return (K == null ? void 0 : K.data.columns.map((Z) => /* @__PURE__ */ m.jsxs("option", { value: Z.name, children: [
                                      Z.name,
                                      " ",
                                      Z.isPrimaryKey ? "(PK)" : ""
                                    ] }, Z.name))) || null;
                                  })()
                                ]
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ m.jsxs("div", { className: "pt-4 flex flex-col gap-3", children: [
                          I && /* @__PURE__ */ m.jsxs("div", { className: "p-3 bg-red-50 border border-red-200 rounded text-red-600 text-xs font-medium flex items-center gap-2", children: [
                            /* @__PURE__ */ m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                              /* @__PURE__ */ m.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                              /* @__PURE__ */ m.jsx("line", { x1: "12", x2: "12", y1: "8", y2: "12" }),
                              /* @__PURE__ */ m.jsx("line", { x1: "12", x2: "12.01", y1: "16", y2: "16" })
                            ] }),
                            I
                          ] }),
                          /* @__PURE__ */ m.jsxs(
                            "button",
                            {
                              onClick: Q,
                              disabled: !!I,
                              className: fe(
                                "w-full px-3 py-2.5 text-sm rounded flex items-center justify-center gap-1.5 transition-colors font-medium shadow-sm hover:shadow",
                                I ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
                              ),
                              children: [
                                /* @__PURE__ */ m.jsx(Wx, { size: 14 }),
                                /* @__PURE__ */ m.jsx("span", { children: "Lưu thay đổi" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ m.jsx("div", { className: "h-px bg-gray-100 my-1" }),
                          /* @__PURE__ */ m.jsxs(
                            "button",
                            {
                              onClick: ce,
                              className: "w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded flex items-center justify-center gap-2 transition-colors font-medium",
                              children: [
                                /* @__PURE__ */ m.jsx(Mi, { size: 14 }),
                                /* @__PURE__ */ m.jsx("span", { children: "Xóa quan hệ" })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ m.jsx(Ai, { open: z, onOpenChange: U, children: /* @__PURE__ */ m.jsxs(po, { className: "sm:max-w-[425px]", children: [
                /* @__PURE__ */ m.jsxs(go, { children: [
                  /* @__PURE__ */ m.jsxs(mo, { className: "flex items-center gap-2 text-red-600", children: [
                    /* @__PURE__ */ m.jsx(Mi, { className: "w-5 h-5" }),
                    "Xóa quan hệ & Bảng con?"
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { className: "py-2 text-sm text-gray-500", children: [
                    /* @__PURE__ */ m.jsx("span", { className: "block font-medium text-gray-900 mb-2", children: "CẢNH BÁO:" }),
                    "Bạn đang xóa quan hệ dẫn tới bảng ",
                    /* @__PURE__ */ m.jsx("strong", { children: (qt = g.find((K) => K.id === f)) == null ? void 0 : qt.data.label }),
                    ".",
                    /* @__PURE__ */ m.jsx("br", {}),
                    /* @__PURE__ */ m.jsx("br", {}),
                    "Hành động này sẽ ",
                    /* @__PURE__ */ m.jsx("strong", { className: "text-red-600", children: "XÓA LUÔN Bảng đích" }),
                    " và tất cả các bảng con cháu của nó.",
                    /* @__PURE__ */ m.jsx("br", {}),
                    "Bạn có chắc chắn không?"
                  ] })
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "flex justify-end gap-3 mt-4", children: [
                  /* @__PURE__ */ m.jsx(
                    Di,
                    {
                      variant: "outline",
                      onClick: () => U(!1),
                      className: "border-gray-300",
                      children: "Hủy bỏ"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    Di,
                    {
                      variant: "destructive",
                      onClick: pe,
                      className: "bg-red-600 hover:bg-red-700",
                      children: "Xóa tất cả"
                    }
                  )
                ] })
              ] }) })
            ] })
          }
        )
      ]
    }
  );
}
b.memo(Gx);
const qP = {
  table: QP
}, JP = {
  relationship: Gx
}, eM = {
  type: "relationship",
  animated: !0
};
function tM() {
  const e = ZI(), t = JI(), n = b.useMemo(
    () => t.reduce((r, o) => r + (o.data._version || 0), 0),
    [t]
  );
  return b.useEffect(() => {
    t.filter((o) => o.data._version).forEach((o) => {
      e(o.id);
    });
  }, [n, e]), null;
}
function nM() {
  const e = vo(), t = an((a) => a.schema.present.nodes), n = an((a) => a.schema.present.edges), r = b.useMemo(() => t.filter((a) => {
    var u;
    return ((u = a.data) == null ? void 0 : u.isActive) !== !1;
  }), [t]), o = b.useCallback((a) => {
    const u = a.filter((d) => d.type !== "remove");
    u.length > 0 && e(AT(u));
  }, [e]), i = b.useCallback((a) => {
    a.forEach((u) => {
      ne.emit(re.TABLE_DELETE, { id: u.id });
    });
  }, []), s = b.useCallback((a) => a.source !== a.target, []), l = b.useCallback((a) => {
    const { source: u, target: d, sourceHandle: c, targetHandle: f } = a;
    u && d && c && f && e(OT({
      sourceNodeId: u,
      initialValues: {
        targetNodeId: d,
        sourceKey: c,
        targetKey: f,
        linkType: "1-n",
        fieldName: ""
      }
    }));
  }, [e]);
  return /* @__PURE__ */ m.jsx("div", { className: "flex-1 h-full w-full", children: /* @__PURE__ */ m.jsxs(
    QI,
    {
      nodes: r,
      edges: n,
      onNodesChange: o,
      onEdgesChange: (a) => e(DT(a)),
      onNodesDelete: i,
      onConnect: l,
      isValidConnection: s,
      nodeTypes: qP,
      edgeTypes: JP,
      defaultEdgeOptions: eM,
      fitView: !0,
      className: "bg-gray-50",
      minZoom: 0.1,
      maxZoom: 4,
      snapToGrid: !0,
      snapGrid: [16, 16],
      proOptions: { hideAttribution: !0 },
      children: [
        /* @__PURE__ */ m.jsx(iP, {}),
        /* @__PURE__ */ m.jsx(tM, {}),
        /* @__PURE__ */ m.jsx(oT, { color: "#ccc", gap: 16 }),
        /* @__PURE__ */ m.jsx(dT, { className: "bg-white text-black border-gray-200 shadow-sm" }),
        /* @__PURE__ */ m.jsx(
          bT,
          {
            nodeColor: (a) => a.data.color || "#ccc",
            maskColor: "rgba(240, 240, 240, 0.6)",
            className: "bg-white border border-gray-200 rounded shadow-md"
          }
        )
      ]
    }
  ) });
}
function eg(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Qx(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = eg(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : eg(e[o], null);
        }
      };
  };
}
function _r(...e) {
  return b.useCallback(Qx(...e), e);
}
// @__NO_SIDE_EFFECTS__
function rM(e) {
  const t = /* @__PURE__ */ oM(e), n = b.forwardRef((r, o) => {
    const { children: i, ...s } = r, l = b.Children.toArray(i), a = l.find(sM);
    if (a) {
      const u = a.props.children, d = l.map((c) => c === a ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : c);
      return /* @__PURE__ */ m.jsx(t, { ...s, ref: o, children: b.isValidElement(u) ? b.cloneElement(u, void 0, d) : null });
    }
    return /* @__PURE__ */ m.jsx(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function oM(e) {
  const t = b.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (b.isValidElement(o)) {
      const s = aM(o), l = lM(i, o.props);
      return o.type !== b.Fragment && (l.ref = r ? Qx(r, s) : s), b.cloneElement(o, l);
    }
    return b.Children.count(o) > 1 ? b.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var iM = Symbol("radix.slottable");
function sM(e) {
  return b.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === iM;
}
function lM(e, t) {
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
function aM(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var uM = [
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
], Xi = uM.reduce((e, t) => {
  const n = /* @__PURE__ */ rM(`Primitive.${t}`), r = b.forwardRef((o, i) => {
    const { asChild: s, ...l } = o, a = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m.jsx(a, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Vc = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
};
function cM(e, t) {
  return b.useReducer((n, r) => t[n][r] ?? n, e);
}
var Gi = (e) => {
  const { present: t, children: n } = e, r = dM(t), o = typeof n == "function" ? n({ present: r.isPresent }) : b.Children.only(n), i = _r(r.ref, fM(o));
  return typeof n == "function" || r.isPresent ? b.cloneElement(o, { ref: i }) : null;
};
Gi.displayName = "Presence";
function dM(e) {
  const [t, n] = b.useState(), r = b.useRef(null), o = b.useRef(e), i = b.useRef("none"), s = e ? "mounted" : "unmounted", [l, a] = cM(s, {
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
    const u = Is(r.current);
    i.current = l === "mounted" ? u : "none";
  }, [l]), Vc(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const f = i.current, p = Is(u);
      e ? a("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), Vc(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, c = (p) => {
        const w = Is(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && w && (a("ANIMATION_END"), !o.current)) {
          const E = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = E);
          });
        }
      }, f = (p) => {
        p.target === t && (i.current = Is(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      a("ANIMATION_END");
  }, [t, a]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: b.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Is(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function fM(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function hM(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = b.createContext(s), a = n.length;
    n = [...n, s];
    const u = (c) => {
      var h;
      const { scope: f, children: p, ...y } = c, w = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[a]) || l, E = b.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ m.jsx(w.Provider, { value: E, children: p });
    };
    u.displayName = i + "Provider";
    function d(c, f) {
      var w;
      const p = ((w = f == null ? void 0 : f[e]) == null ? void 0 : w[a]) || l, y = b.useContext(p);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return [u, d];
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
  return o.scopeName = e, [r, pM(o, ...t)];
}
function pM(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const c = a(i)[`__scope${u}`];
        return { ...l, ...c };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function qn(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
var gM = b.createContext(void 0);
function mM(e) {
  const t = b.useContext(gM);
  return e || t || "ltr";
}
function yM(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ar(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function xM(e, t) {
  return b.useReducer((n, r) => t[n][r] ?? n, e);
}
var df = "ScrollArea", [Zx] = hM(df), [vM, St] = Zx(df), qx = b.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...s
    } = e, [l, a] = b.useState(null), [u, d] = b.useState(null), [c, f] = b.useState(null), [p, y] = b.useState(null), [w, E] = b.useState(null), [h, x] = b.useState(0), [g, v] = b.useState(0), [S, _] = b.useState(!1), [N, k] = b.useState(!1), T = _r(t, (A) => a(A)), D = mM(o);
    return /* @__PURE__ */ m.jsx(
      vM,
      {
        scope: n,
        type: r,
        dir: D,
        scrollHideDelay: i,
        scrollArea: l,
        viewport: u,
        onViewportChange: d,
        content: c,
        onContentChange: f,
        scrollbarX: p,
        onScrollbarXChange: y,
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: _,
        scrollbarY: w,
        onScrollbarYChange: E,
        scrollbarYEnabled: N,
        onScrollbarYEnabledChange: k,
        onCornerWidthChange: x,
        onCornerHeightChange: v,
        children: /* @__PURE__ */ m.jsx(
          Xi.div,
          {
            dir: D,
            ...s,
            ref: T,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": h + "px",
              "--radix-scroll-area-corner-height": g + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
qx.displayName = df;
var Jx = "ScrollAreaViewport", ev = b.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, s = St(Jx, n), l = b.useRef(null), a = _r(t, l, s.onViewportChange);
    return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ m.jsx(
        Xi.div,
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
          children: /* @__PURE__ */ m.jsx("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
ev.displayName = Jx;
var Qt = "ScrollAreaScrollbar", ff = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = St(Qt, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, l = e.orientation === "horizontal";
    return b.useEffect(() => (l ? i(!0) : s(!0), () => {
      l ? i(!1) : s(!1);
    }), [l, i, s]), o.type === "hover" ? /* @__PURE__ */ m.jsx(wM, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ m.jsx(SM, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ m.jsx(tv, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ m.jsx(hf, { ...r, ref: t }) : null;
  }
);
ff.displayName = Qt;
var wM = b.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = St(Qt, e.__scopeScrollArea), [i, s] = b.useState(!1);
  return b.useEffect(() => {
    const l = o.scrollArea;
    let a = 0;
    if (l) {
      const u = () => {
        window.clearTimeout(a), s(!0);
      }, d = () => {
        a = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return l.addEventListener("pointerenter", u), l.addEventListener("pointerleave", d), () => {
        window.clearTimeout(a), l.removeEventListener("pointerenter", u), l.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ m.jsx(Gi, { present: n || i, children: /* @__PURE__ */ m.jsx(
    tv,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), SM = b.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = St(Qt, e.__scopeScrollArea), i = e.orientation === "horizontal", s = Ta(() => a("SCROLL_END"), 100), [l, a] = xM("hidden", {
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
      const u = window.setTimeout(() => a("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [l, o.scrollHideDelay, a]), b.useEffect(() => {
    const u = o.viewport, d = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let c = u[d];
      const f = () => {
        const p = u[d];
        c !== p && (a("SCROLL"), s()), c = p;
      };
      return u.addEventListener("scroll", f), () => u.removeEventListener("scroll", f);
    }
  }, [o.viewport, i, a, s]), /* @__PURE__ */ m.jsx(Gi, { present: n || l !== "hidden", children: /* @__PURE__ */ m.jsx(
    hf,
    {
      "data-state": l === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: ar(e.onPointerEnter, () => a("POINTER_ENTER")),
      onPointerLeave: ar(e.onPointerLeave, () => a("POINTER_LEAVE"))
    }
  ) });
}), tv = b.forwardRef((e, t) => {
  const n = St(Qt, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, s] = b.useState(!1), l = e.orientation === "horizontal", a = Ta(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(l ? u : d);
    }
  }, 10);
  return yo(n.viewport, a), yo(n.content, a), /* @__PURE__ */ m.jsx(Gi, { present: r || i, children: /* @__PURE__ */ m.jsx(
    hf,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), hf = b.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = St(Qt, e.__scopeScrollArea), i = b.useRef(null), s = b.useRef(0), [l, a] = b.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = sv(l.viewport, l.content), d = {
    ...r,
    sizes: l,
    onSizesChange: a,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (f) => i.current = f,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (f) => s.current = f
  };
  function c(f, p) {
    return CM(f, s.current, l, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ m.jsx(
    EM,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const f = o.viewport.scrollLeft, p = tg(f, l, o.dir);
          i.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (f) => {
        o.viewport && (o.viewport.scrollLeft = f);
      },
      onDragScroll: (f) => {
        o.viewport && (o.viewport.scrollLeft = c(f, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ m.jsx(
    _M,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const f = o.viewport.scrollTop, p = tg(f, l);
          i.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (f) => {
        o.viewport && (o.viewport.scrollTop = f);
      },
      onDragScroll: (f) => {
        o.viewport && (o.viewport.scrollTop = c(f));
      }
    }
  ) : null;
}), EM = b.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = St(Qt, e.__scopeScrollArea), [s, l] = b.useState(), a = b.useRef(null), u = _r(t, a, i.onScrollbarXChange);
  return b.useEffect(() => {
    a.current && l(getComputedStyle(a.current));
  }, [a]), /* @__PURE__ */ m.jsx(
    rv,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ia(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, c) => {
        if (i.viewport) {
          const f = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(f), av(f, c) && d.preventDefault();
        }
      },
      onResize: () => {
        a.current && i.viewport && s && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: a.current.clientWidth,
            paddingStart: Hl(s.paddingLeft),
            paddingEnd: Hl(s.paddingRight)
          }
        });
      }
    }
  );
}), _M = b.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = St(Qt, e.__scopeScrollArea), [s, l] = b.useState(), a = b.useRef(null), u = _r(t, a, i.onScrollbarYChange);
  return b.useEffect(() => {
    a.current && l(getComputedStyle(a.current));
  }, [a]), /* @__PURE__ */ m.jsx(
    rv,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ia(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, c) => {
        if (i.viewport) {
          const f = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(f), av(f, c) && d.preventDefault();
        }
      },
      onResize: () => {
        a.current && i.viewport && s && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: a.current.clientHeight,
            paddingStart: Hl(s.paddingTop),
            paddingEnd: Hl(s.paddingBottom)
          }
        });
      }
    }
  );
}), [bM, nv] = Zx(Qt), rv = b.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: i,
    onThumbPointerUp: s,
    onThumbPointerDown: l,
    onThumbPositionChange: a,
    onDragScroll: u,
    onWheelScroll: d,
    onResize: c,
    ...f
  } = e, p = St(Qt, n), [y, w] = b.useState(null), E = _r(t, (T) => w(T)), h = b.useRef(null), x = b.useRef(""), g = p.viewport, v = r.content - r.viewport, S = qn(d), _ = qn(a), N = Ta(c, 10);
  function k(T) {
    if (h.current) {
      const D = T.clientX - h.current.left, A = T.clientY - h.current.top;
      u({ x: D, y: A });
    }
  }
  return b.useEffect(() => {
    const T = (D) => {
      const A = D.target;
      (y == null ? void 0 : y.contains(A)) && S(D, v);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [g, y, v, S]), b.useEffect(_, [r, _]), yo(y, N), yo(p.content, N), /* @__PURE__ */ m.jsx(
    bM,
    {
      scope: n,
      scrollbar: y,
      hasThumb: o,
      onThumbChange: qn(i),
      onThumbPointerUp: qn(s),
      onThumbPositionChange: _,
      onThumbPointerDown: qn(l),
      children: /* @__PURE__ */ m.jsx(
        Xi.div,
        {
          ...f,
          ref: E,
          style: { position: "absolute", ...f.style },
          onPointerDown: ar(e.onPointerDown, (T) => {
            T.button === 0 && (T.target.setPointerCapture(T.pointerId), h.current = y.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), k(T));
          }),
          onPointerMove: ar(e.onPointerMove, k),
          onPointerUp: ar(e.onPointerUp, (T) => {
            const D = T.target;
            D.hasPointerCapture(T.pointerId) && D.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = x.current, p.viewport && (p.viewport.style.scrollBehavior = ""), h.current = null;
          })
        }
      )
    }
  );
}), $l = "ScrollAreaThumb", ov = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = nv($l, e.__scopeScrollArea);
    return /* @__PURE__ */ m.jsx(Gi, { present: n || o.hasThumb, children: /* @__PURE__ */ m.jsx(NM, { ref: t, ...r }) });
  }
), NM = b.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = St($l, n), s = nv($l, n), { onThumbPositionChange: l } = s, a = _r(
      t,
      (c) => s.onThumbChange(c)
    ), u = b.useRef(void 0), d = Ta(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return b.useEffect(() => {
      const c = i.viewport;
      if (c) {
        const f = () => {
          if (d(), !u.current) {
            const p = IM(c, l);
            u.current = p, l();
          }
        };
        return l(), c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
      }
    }, [i.viewport, d, l]), /* @__PURE__ */ m.jsx(
      Xi.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: a,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: ar(e.onPointerDownCapture, (c) => {
          const p = c.target.getBoundingClientRect(), y = c.clientX - p.left, w = c.clientY - p.top;
          s.onThumbPointerDown({ x: y, y: w });
        }),
        onPointerUp: ar(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
ov.displayName = $l;
var pf = "ScrollAreaCorner", iv = b.forwardRef(
  (e, t) => {
    const n = St(pf, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ m.jsx(kM, { ...e, ref: t }) : null;
  }
);
iv.displayName = pf;
var kM = b.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = St(pf, n), [i, s] = b.useState(0), [l, a] = b.useState(0), u = !!(i && l);
  return yo(o.scrollbarX, () => {
    var c;
    const d = ((c = o.scrollbarX) == null ? void 0 : c.offsetHeight) || 0;
    o.onCornerHeightChange(d), a(d);
  }), yo(o.scrollbarY, () => {
    var c;
    const d = ((c = o.scrollbarY) == null ? void 0 : c.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), u ? /* @__PURE__ */ m.jsx(
    Xi.div,
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
function Hl(e) {
  return e ? parseInt(e, 10) : 0;
}
function sv(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ia(e) {
  const t = sv(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function CM(e, t, n, r = "ltr") {
  const o = Ia(n), i = o / 2, s = t || i, l = o - s, a = n.scrollbar.paddingStart + s, u = n.scrollbar.size - n.scrollbar.paddingEnd - l, d = n.content - n.viewport, c = r === "ltr" ? [0, d] : [d * -1, 0];
  return lv([a, u], c)(e);
}
function tg(e, t, n = "ltr") {
  const r = Ia(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, l = i - r, a = n === "ltr" ? [0, s] : [s * -1, 0], u = yM(e, a);
  return lv([0, s], [0, l])(u);
}
function lv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function av(e, t) {
  return e > 0 && e < t;
}
var IM = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, l = n.top !== i.top;
    (s || l) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Ta(e, t) {
  const n = qn(e), r = b.useRef(0);
  return b.useEffect(() => () => window.clearTimeout(r.current), []), b.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function yo(e, t) {
  const n = qn(t);
  Vc(() => {
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
var uv = qx, TM = ev, PM = iv;
const cv = b.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ m.jsxs(
  uv,
  {
    ref: r,
    className: fe("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ m.jsx(TM, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ m.jsx(dv, {}),
      /* @__PURE__ */ m.jsx(PM, {})
    ]
  }
));
cv.displayName = uv.displayName;
const dv = b.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ m.jsx(
  ff,
  {
    ref: r,
    orientation: t,
    className: fe(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ m.jsx(ov, { className: "relative flex-1 rounded-full bg-border" })
  }
));
dv.displayName = ff.displayName;
function MM() {
  const e = vo(), t = an((_) => _.schema.present.nodes), { isOpen: n, sourceNodeId: r, isEditMode: o, fieldIndex: i, initialValues: s } = an((_) => _.ui.linkFieldDialog), {
    selectedTargetNodeId: l,
    selectedSourceKey: a,
    selectedTargetKey: u,
    newFieldName: d,
    linkType: c,
    searchQuery: f
  } = an((_) => _.linkField), p = b.useMemo(() => t.find((_) => _.id === r), [t, r]);
  b.useEffect(() => {
    n && e(s ? GT({
      selectedTargetNodeId: s.targetNodeId,
      selectedSourceKey: s.sourceKey,
      selectedTargetKey: s.targetKey,
      newFieldName: s.fieldName,
      linkType: s.linkType,
      searchQuery: ""
    }) : XT());
  }, [n, s, e]);
  const y = b.useMemo(() => p ? t : [], [t, p]), w = b.useMemo(() => p ? p.data.columns.filter((_) => _.visible !== !1) : [], [p]), E = b.useMemo(() => {
    if (!l) return [];
    const _ = y.find((N) => N.id === l);
    return _ ? _.data.columns.filter((N) => N.visible !== !1) : [];
  }, [l, y]), h = b.useMemo(() => {
    var _;
    return (_ = y.find((N) => N.id === l)) == null ? void 0 : _.data.label;
  }, [l, y]), x = b.useMemo(() => {
    if (!a || !u || !l) return null;
    const _ = p == null ? void 0 : p.data.columns.find((k) => k.name === a), N = E.find((k) => k.name === u);
    if (_ && N) {
      const k = cf.validateRelationshipTypes(
        _.type,
        N.type,
        _.name,
        N.name
      );
      if (!k.valid) return k.error;
    }
    if (a) {
      const k = w.find((T) => T.name === a);
      if (k && (k.type === "array" || k.type === "object"))
        return `Không thể liên kết tới trường '${a}' vì nó có kiểu '${k.type}'`;
    }
    if (u) {
      const k = E.find((T) => T.name === u);
      if (k && (k.type === "array" || k.type === "object"))
        return `Không thể liên kết tới trường '${u}' vì nó có kiểu '${k.type}'`;
    }
    return null;
  }, [a, u, l, p, E, w]), g = l && a && u && d.trim() && !x, v = b.useCallback(() => {
    r && l && a && u && d.trim() && (o && i !== void 0 && ne.emit(re.FIELD_DELETE, {
      nodeId: r,
      fieldIndex: i,
      skipRecursive: !0
    }), ne.emit(re.RELATIONSHIP_ADD, {
      type: c === "1-n" ? "1-n" : "object",
      relationshipType: c,
      sourceNodeId: r,
      targetNodeId: l,
      sourceKey: a,
      targetKey: u,
      fieldName: d.trim()
    }), e(Yp()));
  }, [r, l, a, u, d, o, i, c, e]);
  return {
    // State
    isOpen: n,
    isEditMode: o,
    sourceNode: p,
    sourceFields: w,
    targetFields: E,
    validationError: x,
    isFormValid: g,
    // Form Values
    selectedTargetNodeId: l,
    selectedSourceKey: a,
    selectedTargetKey: u,
    newFieldName: d,
    linkType: c,
    searchQuery: f,
    selectedTargetName: h,
    availableTargetNodes: y,
    // Handlers
    handleConfirm: v,
    handleCancel: () => e(Yp()),
    // Setters
    setLinkFieldSearchQuery: (_) => e(YT(_)),
    setLinkFieldNewFieldName: (_) => e(KT(_)),
    setLinkFieldLinkType: (_) => e(WT(_)),
    setLinkFieldSelectedTargetNodeId: (_) => e(VT(_)),
    setLinkFieldSelectedSourceKey: (_) => e(BT(_)),
    setLinkFieldSelectedTargetKey: (_) => e(UT(_))
  };
}
function AM() {
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
    selectedTargetNodeId: l,
    selectedSourceKey: a,
    selectedTargetKey: u,
    newFieldName: d,
    linkType: c,
    selectedTargetName: f,
    availableTargetNodes: p,
    // Handlers
    handleConfirm: y,
    handleCancel: w,
    // Setters
    setLinkFieldNewFieldName: E,
    setLinkFieldLinkType: h,
    setLinkFieldSelectedTargetNodeId: x,
    setLinkFieldSelectedSourceKey: g,
    setLinkFieldSelectedTargetKey: v
  } = MM();
  return n ? /* @__PURE__ */ m.jsx(Ai, { open: e, onOpenChange: (S) => !S && w(), children: /* @__PURE__ */ m.jsxs(po, { className: fe(
    "bg-white text-gray-900 border-gray-200 shadow-xl flex flex-col p-0 gap-0",
    "resize-y overflow-hidden min-h-[500px]",
    "max-w-5xl h-[80vh]"
  ), style: { resize: "both" }, children: [
    /* @__PURE__ */ m.jsxs(go, { className: "p-4 border-b border-gray-100 shrink-0", children: [
      /* @__PURE__ */ m.jsx(mo, { children: t ? "Chỉnh Sửa Trường Link" : "Thêm Trường Link Mới" }),
      /* @__PURE__ */ m.jsxs(Ca, { className: "text-gray-500", children: [
        t ? "Cập nhật" : "Tạo",
        " liên kết giữa ",
        /* @__PURE__ */ m.jsx("strong", { children: n == null ? void 0 : n.data.label }),
        " và bảng khác."
      ] })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "flex flex-1 min-h-0", children: /* @__PURE__ */ m.jsxs("div", { className: "flex-1 flex flex-col bg-white min-w-0", children: [
      /* @__PURE__ */ m.jsx("div", { className: "flex-1 min-h-0 flex flex-col relative", children: f ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx("div", { className: "px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white z-10", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx("span", { className: "bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide", children: "Selected" }),
          /* @__PURE__ */ m.jsx("h3", { className: "font-bold text-gray-900 text-lg", children: f })
        ] }) }),
        /* @__PURE__ */ m.jsx("div", { className: "flex-1 min-h-0 bg-gray-50 relative group", children: /* @__PURE__ */ m.jsx(cv, { className: "h-full", children: /* @__PURE__ */ m.jsxs("div", { className: "p-6 grid grid-cols-[1fr,100px,1fr] gap-0 relative", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "space-y-3 z-10 w-full min-w-0", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ m.jsx("span", { className: "bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide", children: "Source" }),
              /* @__PURE__ */ m.jsx("h4", { className: "font-bold text-gray-900 text-sm truncate", children: n == null ? void 0 : n.data.label })
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden ring-1 ring-gray-900/5", children: /* @__PURE__ */ m.jsxs("table", { className: "w-full text-left border-collapse table-fixed", children: [
              /* @__PURE__ */ m.jsx("thead", { children: /* @__PURE__ */ m.jsx("tr", { className: "bg-gray-50/50 border-b border-gray-100 h-10", children: /* @__PURE__ */ m.jsx("th", { className: "px-3 text-[9px] font-extrabold text-slate-700 uppercase tracking-widest font-sans w-full", children: "Field" }) }) }),
              /* @__PURE__ */ m.jsxs("tbody", { className: "divide-y divide-gray-50", children: [
                r.map((S, _) => /* @__PURE__ */ m.jsx("tr", { className: fe("transition-colors h-10", a === S.name ? "bg-blue-50" : "hover:bg-slate-50"), children: /* @__PURE__ */ m.jsx("td", { className: fe("px-3 text-xs font-bold font-mono truncate", S.isPrimaryKey ? "text-violet-800" : "text-slate-800", a === S.name && "text-blue-700"), children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
                  S.isPrimaryKey && /* @__PURE__ */ m.jsx("div", { className: "w-1.5 h-1.5 bg-violet-600 rounded-full ring-2 ring-violet-100 shadow-sm shrink-0" }),
                  /* @__PURE__ */ m.jsx("span", { className: "truncate", children: S.name })
                ] }) }) }, _)),
                r.length === 0 && /* @__PURE__ */ m.jsx("tr", { children: /* @__PURE__ */ m.jsx("td", { className: "py-4 text-center text-gray-400 text-xs", children: "No columns" }) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ m.jsx("div", { className: "relative w-full h-full pointer-events-none", children: /* @__PURE__ */ m.jsxs("svg", { className: "absolute top-0 left-0 w-full h-full overflow-visible", children: [
            /* @__PURE__ */ m.jsx("defs", { children: /* @__PURE__ */ m.jsx("marker", { id: "arrowhead-end", markerWidth: "6", markerHeight: "6", refX: "3", refY: "3", orient: "auto", children: /* @__PURE__ */ m.jsx("circle", { cx: "3", cy: "3", r: "2", fill: "#3b82f6" }) }) }),
            (() => {
              const S = r.findIndex((A) => A.name === a), _ = o.findIndex((A) => A.name === u);
              if (S === -1 || _ === -1) return null;
              const N = 68, k = 40, T = N + S * k + k / 2, D = N + _ * k + k / 2;
              return /* @__PURE__ */ m.jsx(
                "path",
                {
                  d: `M 0 ${T} C 50 ${T}, 50 ${D}, 100 ${D}`,
                  fill: "none",
                  stroke: "#3b82f6",
                  strokeWidth: "2",
                  strokeDasharray: "4",
                  className: "animate-pulse",
                  markerEnd: "url(#arrowhead-end)"
                }
              );
            })()
          ] }) }),
          /* @__PURE__ */ m.jsxs("div", { className: "space-y-3 z-10 w-full min-w-0", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ m.jsx("span", { className: "bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide", children: "Target" }),
              /* @__PURE__ */ m.jsx("h4", { className: "font-bold text-gray-900 text-sm truncate", children: f })
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden ring-1 ring-gray-900/5", children: /* @__PURE__ */ m.jsxs("table", { className: "w-full text-left border-collapse table-fixed", children: [
              /* @__PURE__ */ m.jsx("thead", { children: /* @__PURE__ */ m.jsxs("tr", { className: "bg-gray-50/50 border-b border-gray-100 h-10", children: [
                /* @__PURE__ */ m.jsx("th", { className: "px-3 text-[9px] font-extrabold text-slate-700 uppercase tracking-widest w-10 text-center font-sans", children: "PK" }),
                /* @__PURE__ */ m.jsx("th", { className: "px-3 text-[9px] font-extrabold text-slate-700 uppercase tracking-widest font-sans w-full", children: "Field" }),
                /* @__PURE__ */ m.jsx("th", { className: "px-3 text-[9px] font-extrabold text-slate-700 uppercase tracking-widest w-20 text-right font-sans", children: "Type" })
              ] }) }),
              /* @__PURE__ */ m.jsxs("tbody", { className: "divide-y divide-gray-50", children: [
                o.map((S, _) => /* @__PURE__ */ m.jsxs("tr", { className: fe("transition-colors h-10", u === S.name ? "bg-blue-50" : "hover:bg-slate-50"), children: [
                  /* @__PURE__ */ m.jsx("td", { className: "px-3 text-center", children: S.isPrimaryKey && /* @__PURE__ */ m.jsx("div", { className: "w-1.5 h-1.5 bg-violet-600 rounded-full mx-auto ring-2 ring-violet-100 shadow-sm" }) }),
                  /* @__PURE__ */ m.jsxs("td", { className: fe("px-3 text-xs font-bold font-mono truncate", S.isPrimaryKey ? "text-violet-800" : "text-slate-800", u === S.name && "text-blue-700"), children: [
                    S.name,
                    S.isVirtual && /* @__PURE__ */ m.jsx("span", { className: "ml-1 inline-flex items-center px-1 py-0.5 rounded text-[8px] font-medium bg-blue-100 text-blue-800 uppercase tracking-wider", children: "Vir" })
                  ] }),
                  /* @__PURE__ */ m.jsx("td", { className: "px-3 text-[10px] font-semibold font-mono text-slate-600 text-right truncate", children: S.isVirtual ? "relation" : S.type })
                ] }, _)),
                o.length === 0 && /* @__PURE__ */ m.jsx("tr", { children: /* @__PURE__ */ m.jsx("td", { colSpan: 3, className: "py-4 text-center text-gray-400 text-xs", children: "No columns found" }) })
              ] })
            ] }) })
          ] })
        ] }) }) })
      ] }) : (
        // Empty State
        /* @__PURE__ */ m.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center text-gray-400 gap-3", children: [
          /* @__PURE__ */ m.jsx("div", { className: "w-16 h-16 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center", children: /* @__PURE__ */ m.jsx(BP, { className: "w-8 h-8 opacity-20" }) }),
          /* @__PURE__ */ m.jsx("p", { className: "text-sm font-medium", children: t ? "Chọn bảng đích để chỉnh sửa liên kết" : "Chọn một bảng từ danh sách bên trái" })
        ] })
      ) }),
      /* @__PURE__ */ m.jsxs("div", { className: "p-6 border-t border-gray-100 bg-white shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] z-20", children: [
        /* @__PURE__ */ m.jsx("h4", { className: "text-xs font-bold text-gray-900 uppercase tracking-widest mb-4", children: "Cấu hình liên kết" }),
        /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "col-span-12 grid grid-cols-2 gap-6 pb-4 border-b border-gray-50 mb-2", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ m.jsx("label", { className: "text-[10px] font-semibold text-gray-500 uppercase block", children: "Kiểu Dữ Liệu" }),
              /* @__PURE__ */ m.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ m.jsx("button", { onClick: () => h("1-n"), className: fe("flex-1 py-1.5 px-3 rounded text-xs font-medium border transition-all", c === "1-n" ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 hover:border-gray-300 text-slate-700"), children: "Array (1:N)" }),
                /* @__PURE__ */ m.jsx("button", { onClick: () => h("n-1"), className: fe("flex-1 py-1.5 px-3 rounded text-xs font-medium border transition-all", c !== "1-n" ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 hover:border-gray-300 text-slate-700"), children: "Object (N:1)" })
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ m.jsx("label", { className: "text-[10px] font-semibold text-gray-500 uppercase block", children: "Quan hệ" }),
              /* @__PURE__ */ m.jsx("div", { className: "flex gap-2", children: ["1-1", "1-n", "n-1"].map((S) => /* @__PURE__ */ m.jsx("button", { onClick: () => h(S), className: fe("flex-1 py-1.5 px-3 rounded text-xs font-medium border transition-all uppercase", c === S ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 hover:border-gray-300 text-slate-700"), children: S }, S)) })
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "col-span-12 space-y-1.5", children: [
            /* @__PURE__ */ m.jsx("label", { className: "text-[10px] font-semibold text-gray-500 uppercase block", children: "Target Table" }),
            /* @__PURE__ */ m.jsxs(
              "select",
              {
                value: l || "",
                onChange: (S) => x(S.target.value),
                className: "w-full h-9 rounded-md border-gray-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-colors shadow-sm",
                children: [
                  /* @__PURE__ */ m.jsx("option", { value: "", children: "-- Chọn bảng đích --" }),
                  p.map((S) => /* @__PURE__ */ m.jsx("option", { value: S.id, children: S.data.label }, S.id))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "col-span-8 grid grid-cols-[1fr,auto,1fr] gap-4 items-center", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ m.jsxs("label", { className: "text-[10px] font-semibold text-gray-500 uppercase flex justify-between", children: [
                /* @__PURE__ */ m.jsx("span", { children: "Source Key (PK)" }),
                /* @__PURE__ */ m.jsx("span", { className: "text-blue-600", children: n == null ? void 0 : n.data.label })
              ] }),
              /* @__PURE__ */ m.jsxs(
                "select",
                {
                  value: a,
                  onChange: (S) => g(S.target.value),
                  className: "w-full h-9 rounded-md border-gray-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-colors shadow-sm",
                  children: [
                    /* @__PURE__ */ m.jsx("option", { value: "", children: "-- Chọn khóa --" }),
                    r.map((S) => /* @__PURE__ */ m.jsx("option", { value: S.name, children: S.name }, S.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "pt-5 text-gray-300", children: /* @__PURE__ */ m.jsx(HP, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ m.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ m.jsxs("label", { className: "text-[10px] font-semibold text-gray-500 uppercase flex justify-between", children: [
                /* @__PURE__ */ m.jsx("span", { children: "Target Key (FK)" }),
                /* @__PURE__ */ m.jsx("span", { className: "text-blue-600 truncate max-w-[100px]", children: f })
              ] }),
              /* @__PURE__ */ m.jsxs(
                "select",
                {
                  value: u,
                  onChange: (S) => v(S.target.value),
                  className: "w-full h-9 rounded-md border-gray-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-colors shadow-sm",
                  children: [
                    /* @__PURE__ */ m.jsx("option", { value: "", children: "-- Chọn khóa --" }),
                    o.map((S) => /* @__PURE__ */ m.jsx("option", { value: S.name, children: S.name }, S.name))
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "col-span-4 space-y-1.5", children: [
            /* @__PURE__ */ m.jsx("label", { className: "text-[10px] font-semibold text-gray-500 uppercase block", children: "Field Name in Source" }),
            /* @__PURE__ */ m.jsx(
              uf,
              {
                value: d,
                onChange: (S) => E(S.target.value),
                placeholder: "e.g. suppliers",
                className: "h-9 bg-white border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
              }
            )
          ] })
        ] }),
        i && /* @__PURE__ */ m.jsxs("div", { className: "mt-3 text-red-600 text-[11px] font-medium flex items-center gap-2 animate-in slide-in-from-left-2", children: [
          /* @__PURE__ */ m.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-red-500" }),
          i
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ m.jsxs("div", { className: "p-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50 shrink-0", children: [
      /* @__PURE__ */ m.jsx(Di, { variant: "ghost", onClick: w, className: "text-gray-500 hover:text-gray-900 border border-transparent hover:bg-white hover:border-gray-200 transition-all font-medium", children: "Hủy bỏ" }),
      /* @__PURE__ */ m.jsx(
        Di,
        {
          onClick: y,
          disabled: !s,
          className: fe(
            "min-w-[140px] shadow-lg shadow-blue-500/20 transition-all font-bold",
            s ? "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
          ),
          children: t ? "Lưu Thay Đổi" : "Tạo Liên Kết"
        }
      )
    ] })
  ] }) }) : null;
}
function DM() {
  const e = vo(), { isOpen: t, nodeId: n, fieldIndex: r, fieldName: o } = an((l) => l.ui.confirmDeleteDialog) || { isOpen: !1, nodeId: null }, i = () => {
    e($T());
  }, s = () => {
    n && r !== void 0 && e(ka({ nodeId: n, fieldIndex: r })), i();
  };
  return t ? /* @__PURE__ */ m.jsx(Ai, { open: t, onOpenChange: (l) => !l && i(), children: /* @__PURE__ */ m.jsxs(po, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ m.jsxs(go, { children: [
      /* @__PURE__ */ m.jsxs(mo, { className: "flex items-center gap-2 text-red-600", children: [
        /* @__PURE__ */ m.jsx(Mi, { className: "w-5 h-5" }),
        "Xóa trường ",
        o,
        "?"
      ] }),
      /* @__PURE__ */ m.jsxs(Ca, { className: "py-2", children: [
        /* @__PURE__ */ m.jsx("span", { className: "block font-medium text-gray-900 mb-2", children: "CẢNH BÁO CAO ĐỘ:" }),
        "Hành động này sẽ xóa trường ",
        /* @__PURE__ */ m.jsx("strong", { children: o }),
        " VÀ ",
        /* @__PURE__ */ m.jsx("strong", { className: "text-red-600", children: "TẤT CẢ các bảng con (descendants)" }),
        " được sinh ra từ trường này.",
        /* @__PURE__ */ m.jsx("br", {}),
        /* @__PURE__ */ m.jsx("br", {}),
        "Bạn có chắc chắn muốn tiếp tục không? Hành động này không thể hoàn tác."
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex justify-end gap-3 mt-4", children: [
      /* @__PURE__ */ m.jsx(
        "button",
        {
          onClick: i,
          className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          children: "Hủy bỏ"
        }
      ),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          onClick: s,
          className: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
          children: "Xác nhận Xóa"
        }
      )
    ] })
  ] }) }) : null;
}
function LM() {
  const e = an((n) => n.ui.linkFieldDialog.isOpen), t = an((n) => {
    var r;
    return (r = n.ui.confirmDeleteDialog) == null ? void 0 : r.isOpen;
  });
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    e && /* @__PURE__ */ m.jsx(AM, {}),
    t && /* @__PURE__ */ m.jsx(DM, {})
  ] });
}
function jM() {
  const e = vo(), { nodes: t, edges: n } = an((o) => o.schema.present), r = b.useRef({});
  return b.useEffect(() => {
    const o = (S) => {
      e(zl(S));
    }, i = (S) => {
      e(zc({ id: S.id, updates: S.updates }));
    }, s = (S) => {
      e(Ix(S.id));
    }, l = (S) => {
      const _ = t.find((N) => N.id === S.id);
      if (_) {
        const N = _.data.isActive !== !1;
        e(zc({ id: S.id, updates: { isActive: !N } }));
      }
    }, a = (S) => {
      e(Tx({ nodeId: S.nodeId, field: S.field }));
    }, u = (S) => {
      e(Px({ nodeId: S.nodeId, fieldIndex: S.fieldIndex, updates: S.updates }));
    }, d = (S) => {
      e(ka({ nodeId: S.nodeId, fieldIndex: S.fieldIndex }));
    }, c = (S) => {
      e(Mx({ nodeId: S.nodeId, oldIndex: S.oldIndex, newIndex: S.newIndex }));
    }, f = (S) => {
      console.log("Toggle visibility for node:", S.nodeId), e(Ax({ nodeId: S.nodeId, fieldIndex: S.fieldIndex }));
    }, p = () => e(nl.undo()), y = () => e(nl.redo()), w = () => {
      const S = $c(t);
      e(Oc(S));
    }, E = (S) => {
      const _ = t.find((k) => k.id === S.nodeId);
      if (!_) return;
      const N = _.data.columns[S.fieldIndex];
      if (N)
        if (console.log("[JmixDataController] Request Edit Field:", N.name), N.isVirtual || N.type === "object" || N.type === "array") {
          const k = N.type === "object" || N.relationshipType === "n-1" || N.relationshipType === "1-1" ? "n-1" : "1-n", T = n.find((D) => D.source === S.nodeId && D.sourceHandle === N.name);
          T ? e(FT({
            sourceNodeId: S.nodeId,
            fieldIndex: S.fieldIndex,
            initialValues: {
              targetNodeId: T.target,
              sourceKey: k === "1-n" ? N.linkedPrimaryKeyField || "id" : N.linkedForeignKeyField || "id",
              targetKey: T.targetHandle || "id",
              fieldName: N.name,
              linkType: k
            }
          })) : console.warn("[JmixDataController] Edge not found for link field:", N.name);
        } else
          console.log("[JmixDataController] Edit normal field requested. Not implemented dialog yet."), alert(`Edit request for field '${N.name}' received from Jmix.
(Normal field editing dialog is coming soon)`);
    }, h = (S) => {
      S.type === "1-n" ? e(Ti({
        sourceNodeId: S.sourceNodeId,
        targetNodeId: S.targetNodeId,
        sourcePK: S.sourceKey,
        targetFK: S.targetKey,
        newFieldName: S.fieldName,
        relationshipType: S.relationshipType
      })) : e(Pi({
        sourceNodeId: S.sourceNodeId,
        targetNodeId: S.targetNodeId,
        sourceFK: S.sourceKey,
        targetPK: S.targetKey,
        newFieldName: S.fieldName,
        relationshipType: S.relationshipType
      }));
    }, x = (S) => {
      e(RT(S.sourceNodeId));
    }, g = (S) => {
      const _ = t.find((N) => N.id === S.nodeId);
      if (_) {
        let N = S.fieldIndex, k = _.data.columns[N];
        if (S.fieldName && (!k || k.name !== S.fieldName)) {
          const T = _.data.columns.findIndex((D) => D.name === S.fieldName);
          T !== -1 && (N = T, k = _.data.columns[T]);
        }
        k && e(zT({
          nodeId: S.nodeId,
          fieldIndex: N,
          fieldName: k.name
        }));
      }
    };
    ne.on(re.TABLE_ADD, o), ne.on(re.TABLE_UPDATE, i), ne.on(re.TABLE_DELETE, s), ne.on(re.TABLE_TOGGLE_VISIBILITY, l), ne.on(re.FIELD_ADD, a), ne.on(re.FIELD_UPDATE, u), ne.on(re.FIELD_DELETE, d), ne.on(re.FIELD_REQUEST_DELETE, g), ne.on(re.FIELD_REORDER, c), ne.on(re.FIELD_TOGGLE_VISIBILITY, f), ne.on(re.FIELD_REQUEST_EDIT, E), ne.on(re.SCHEMA_UNDO, p), ne.on(re.SCHEMA_REDO, y), ne.on(re.SCHEMA_AUTO_LAYOUT, w), ne.on(re.RELATIONSHIP_ADD, h), ne.on(re.LINK_FIELD_OPEN, x);
    const v = (S) => {
      const _ = S.data;
      if (_ && _.type === "SCHEMA_ACTION" && _.payload) {
        const { event: N, data: k } = _.payload;
        if (N === "schema:load") {
          console.log("[JmixDataController] Loading Bulk Schema with Broadcast Mapping...", k), e(Dx()), r.current = {};
          const T = {};
          Array.isArray(k.tables) && k.tables.forEach((D) => {
            const A = D.id;
            let M = D.id;
            A && (T[A] === void 0 ? (T[A] = 0, M = `node_${A}`) : (T[A]++, M = `node_${A}_replica_${T[A]}`), r.current[A] || (r.current[A] = []), r.current[A].push(M)), e(zl({
              ...D,
              id: M
            }));
          }), Array.isArray(k.relationships) && setTimeout(() => {
            k.relationships.forEach((D) => {
              const A = r.current[D.sourceNodeId] || [D.sourceNodeId], M = r.current[D.targetNodeId] || [D.targetNodeId], $ = D.sourceReplicaIndex || 0, I = D.targetReplicaIndex || 0, j = A[$], L = M[I];
              if (j && L) {
                const F = D.type.toLowerCase();
                F === "array" ? e(Ti({
                  sourceNodeId: j,
                  targetNodeId: L,
                  sourcePK: D.sourceKey,
                  targetFK: D.targetKey,
                  newFieldName: D.fieldName,
                  relationshipType: D.relationshipType
                })) : F === "object" && e(Pi({
                  sourceNodeId: j,
                  targetNodeId: L,
                  sourceFK: D.sourceKey,
                  targetPK: D.targetKey,
                  newFieldName: D.fieldName,
                  relationshipType: D.relationshipType
                }));
              }
            });
          }, 50), k.autoLayout && setTimeout(() => ne.emit(re.SCHEMA_AUTO_LAYOUT), 100);
          return;
        }
        if (Object.values(re).includes(N)) {
          let T = [], D = "nodeId";
          if (k.nodeId ? (D = "nodeId", console.log(`[JmixDataController] Received Event: ${N} for ${k.nodeId}`), console.log("[JmixDataController] Current Map:", r.current), T = r.current[k.nodeId] || [k.nodeId], console.log("[JmixDataController] Mapped to Targets:", T)) : k.id && (D = "id", T = r.current[k.id] || [k.id]), T.length > 0)
            if (typeof k.instanceIndex == "number" && T[k.instanceIndex]) {
              const A = T[k.instanceIndex], M = { ...k, [D]: A };
              console.log(`[JmixDataController] Emitting ${N} for SPECIFIC target ${A} (Index ${k.instanceIndex})`), ne.emit(N, M);
            } else
              T.forEach((A) => {
                const M = { ...k, [D]: A };
                console.log(`[JmixDataController] Emitting ${N} for ${A}`), ne.emit(N, M);
              });
          else
            ne.emit(N, k);
        }
      }
    };
    return window.addEventListener("message", v), () => {
      ne.off(re.TABLE_ADD, o), ne.off(re.TABLE_UPDATE, i), ne.off(re.TABLE_DELETE, s), ne.off(re.TABLE_TOGGLE_VISIBILITY, l), ne.off(re.FIELD_ADD, a), ne.off(re.FIELD_UPDATE, u), ne.off(re.FIELD_DELETE, d), ne.off(re.FIELD_REORDER, c), ne.off(re.FIELD_TOGGLE_VISIBILITY, f), ne.off(re.SCHEMA_UNDO, p), ne.off(re.SCHEMA_REDO, y), ne.off(re.SCHEMA_AUTO_LAYOUT, w), ne.off(re.RELATIONSHIP_ADD, h), ne.off(re.LINK_FIELD_OPEN, x), window.removeEventListener("message", v);
    };
  }, [e, t]), null;
}
function RM() {
  const e = vo();
  return b.useEffect(() => qT((t) => e(Fx(t))), [e]), /* @__PURE__ */ m.jsxs("div", { className: "flex h-screen w-screen bg-gray-50 text-gray-900 overflow-hidden", children: [
    /* @__PURE__ */ m.jsx(jM, {}),
    /* @__PURE__ */ m.jsx("div", { className: "flex-1 flex flex-col relative h-full", children: /* @__PURE__ */ m.jsx("div", { className: "flex-1 h-full", children: /* @__PURE__ */ m.jsx(nM, {}) }) }),
    /* @__PURE__ */ m.jsx(LM, {})
  ] });
}
var fv, ng = K0;
fv = ng.createRoot, ng.hydrateRoot;
class FM extends HTMLElement {
  constructor() {
    super(...arguments);
    Zi(this, "root");
  }
  connectedCallback() {
    this.style.display = "block", this.root = fv(this), this.root.render(
      /* @__PURE__ */ m.jsx(t1, { store: tP, children: /* @__PURE__ */ m.jsx(RM, {}) })
    );
  }
  disconnectedCallback() {
    var n;
    (n = this.root) == null || n.unmount(), this.root = void 0;
  }
}
customElements.get("custom-schema") || customElements.define("custom-schema", FM);
export {
  FM as CustomSchema
};
