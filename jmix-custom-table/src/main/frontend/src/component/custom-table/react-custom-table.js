var Lc = { exports: {} }, Ra = {};
var my;
function Bh() {
  if (my) return Ra;
  my = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(c, h, _) {
    var O = null;
    if (_ !== void 0 && (O = "" + _), h.key !== void 0 && (O = "" + h.key), "key" in h) {
      _ = {};
      for (var R in h)
        R !== "key" && (_[R] = h[R]);
    } else _ = h;
    return h = _.ref, {
      $$typeof: i,
      type: c,
      key: O,
      ref: h !== void 0 ? h : null,
      props: _
    };
  }
  return Ra.Fragment = r, Ra.jsx = o, Ra.jsxs = o, Ra;
}
var Sy;
function qh() {
  return Sy || (Sy = 1, Lc.exports = Bh()), Lc.exports;
}
var Ot = qh(), Vc = { exports: {} }, V = {};
var gy;
function Yh() {
  if (gy) return V;
  gy = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), h = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), O = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), G = Symbol.iterator;
  function P(v) {
    return v === null || typeof v != "object" ? null : (v = G && v[G] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var k = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _t = Object.assign, at = {};
  function nt(v, U, B) {
    this.props = v, this.context = U, this.refs = at, this.updater = B || k;
  }
  nt.prototype.isReactComponent = {}, nt.prototype.setState = function(v, U) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, U, "setState");
  }, nt.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function zt() {
  }
  zt.prototype = nt.prototype;
  function Z(v, U, B) {
    this.props = v, this.context = U, this.refs = at, this.updater = B || k;
  }
  var W = Z.prototype = new zt();
  W.constructor = Z, _t(W, nt.prototype), W.isPureReactComponent = !0;
  var tt = Array.isArray;
  function st() {
  }
  var Q = { H: null, A: null, T: null, S: null }, ot = Object.prototype.hasOwnProperty;
  function ul(v, U, B) {
    var Y = B.ref;
    return {
      $$typeof: i,
      type: v,
      key: U,
      ref: Y !== void 0 ? Y : null,
      props: B
    };
  }
  function ae(v, U) {
    return ul(v.type, U, v.props);
  }
  function hl(v) {
    return typeof v == "object" && v !== null && v.$$typeof === i;
  }
  function kt(v) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(B) {
      return U[B];
    });
  }
  var Re = /\/+/g;
  function Yl(v, U) {
    return typeof v == "object" && v !== null && v.key != null ? kt("" + v.key) : U.toString(36);
  }
  function Ml(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(st, st) : (v.status = "pending", v.then(
          function(U) {
            v.status === "pending" && (v.status = "fulfilled", v.value = U);
          },
          function(U) {
            v.status === "pending" && (v.status = "rejected", v.reason = U);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function A(v, U, B, Y, K) {
    var $ = typeof v;
    ($ === "undefined" || $ === "boolean") && (v = null);
    var rt = !1;
    if (v === null) rt = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case i:
            case r:
              rt = !0;
              break;
            case N:
              return rt = v._init, A(
                rt(v._payload),
                U,
                B,
                Y,
                K
              );
          }
      }
    if (rt)
      return K = K(v), rt = Y === "" ? "." + Yl(v, 0) : Y, tt(K) ? (B = "", rt != null && (B = rt.replace(Re, "$&/") + "/"), A(K, U, B, "", function(xu) {
        return xu;
      })) : K != null && (hl(K) && (K = ae(
        K,
        B + (K.key == null || v && v.key === K.key ? "" : ("" + K.key).replace(
          Re,
          "$&/"
        ) + "/") + rt
      )), U.push(K)), 1;
    rt = 0;
    var Kt = Y === "" ? "." : Y + ":";
    if (tt(v))
      for (var Dt = 0; Dt < v.length; Dt++)
        Y = v[Dt], $ = Kt + Yl(Y, Dt), rt += A(
          Y,
          U,
          B,
          $,
          K
        );
    else if (Dt = P(v), typeof Dt == "function")
      for (v = Dt.call(v), Dt = 0; !(Y = v.next()).done; )
        Y = Y.value, $ = Kt + Yl(Y, Dt++), rt += A(
          Y,
          U,
          B,
          $,
          K
        );
    else if ($ === "object") {
      if (typeof v.then == "function")
        return A(
          Ml(v),
          U,
          B,
          Y,
          K
        );
      throw U = String(v), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return rt;
  }
  function H(v, U, B) {
    if (v == null) return v;
    var Y = [], K = 0;
    return A(v, Y, "", "", function($) {
      return U.call(B, $, K++);
    }), Y;
  }
  function L(v) {
    if (v._status === -1) {
      var U = v._result;
      U = U(), U.then(
        function(B) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = B);
        },
        function(B) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = B);
        }
      ), v._status === -1 && (v._status = 0, v._result = U);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var vt = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  }, gt = {
    map: H,
    forEach: function(v, U, B) {
      H(
        v,
        function() {
          U.apply(this, arguments);
        },
        B
      );
    },
    count: function(v) {
      var U = 0;
      return H(v, function() {
        U++;
      }), U;
    },
    toArray: function(v) {
      return H(v, function(U) {
        return U;
      }) || [];
    },
    only: function(v) {
      if (!hl(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return V.Activity = C, V.Children = gt, V.Component = nt, V.Fragment = o, V.Profiler = h, V.PureComponent = Z, V.StrictMode = c, V.Suspense = z, V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, V.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return Q.H.useMemoCache(v);
    }
  }, V.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, V.cacheSignal = function() {
    return null;
  }, V.cloneElement = function(v, U, B) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var Y = _t({}, v.props), K = v.key;
    if (U != null)
      for ($ in U.key !== void 0 && (K = "" + U.key), U)
        !ot.call(U, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && U.ref === void 0 || (Y[$] = U[$]);
    var $ = arguments.length - 2;
    if ($ === 1) Y.children = B;
    else if (1 < $) {
      for (var rt = Array($), Kt = 0; Kt < $; Kt++)
        rt[Kt] = arguments[Kt + 2];
      Y.children = rt;
    }
    return ul(v.type, K, Y);
  }, V.createContext = function(v) {
    return v = {
      $$typeof: O,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: _,
      _context: v
    }, v;
  }, V.createElement = function(v, U, B) {
    var Y, K = {}, $ = null;
    if (U != null)
      for (Y in U.key !== void 0 && ($ = "" + U.key), U)
        ot.call(U, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (K[Y] = U[Y]);
    var rt = arguments.length - 2;
    if (rt === 1) K.children = B;
    else if (1 < rt) {
      for (var Kt = Array(rt), Dt = 0; Dt < rt; Dt++)
        Kt[Dt] = arguments[Dt + 2];
      K.children = Kt;
    }
    if (v && v.defaultProps)
      for (Y in rt = v.defaultProps, rt)
        K[Y] === void 0 && (K[Y] = rt[Y]);
    return ul(v, $, K);
  }, V.createRef = function() {
    return { current: null };
  }, V.forwardRef = function(v) {
    return { $$typeof: R, render: v };
  }, V.isValidElement = hl, V.lazy = function(v) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: v },
      _init: L
    };
  }, V.memo = function(v, U) {
    return {
      $$typeof: S,
      type: v,
      compare: U === void 0 ? null : U
    };
  }, V.startTransition = function(v) {
    var U = Q.T, B = {};
    Q.T = B;
    try {
      var Y = v(), K = Q.S;
      K !== null && K(B, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(st, vt);
    } catch ($) {
      vt($);
    } finally {
      U !== null && B.types !== null && (U.types = B.types), Q.T = U;
    }
  }, V.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, V.use = function(v) {
    return Q.H.use(v);
  }, V.useActionState = function(v, U, B) {
    return Q.H.useActionState(v, U, B);
  }, V.useCallback = function(v, U) {
    return Q.H.useCallback(v, U);
  }, V.useContext = function(v) {
    return Q.H.useContext(v);
  }, V.useDebugValue = function() {
  }, V.useDeferredValue = function(v, U) {
    return Q.H.useDeferredValue(v, U);
  }, V.useEffect = function(v, U) {
    return Q.H.useEffect(v, U);
  }, V.useEffectEvent = function(v) {
    return Q.H.useEffectEvent(v);
  }, V.useId = function() {
    return Q.H.useId();
  }, V.useImperativeHandle = function(v, U, B) {
    return Q.H.useImperativeHandle(v, U, B);
  }, V.useInsertionEffect = function(v, U) {
    return Q.H.useInsertionEffect(v, U);
  }, V.useLayoutEffect = function(v, U) {
    return Q.H.useLayoutEffect(v, U);
  }, V.useMemo = function(v, U) {
    return Q.H.useMemo(v, U);
  }, V.useOptimistic = function(v, U) {
    return Q.H.useOptimistic(v, U);
  }, V.useReducer = function(v, U, B) {
    return Q.H.useReducer(v, U, B);
  }, V.useRef = function(v) {
    return Q.H.useRef(v);
  }, V.useState = function(v) {
    return Q.H.useState(v);
  }, V.useSyncExternalStore = function(v, U, B) {
    return Q.H.useSyncExternalStore(
      v,
      U,
      B
    );
  }, V.useTransition = function() {
    return Q.H.useTransition();
  }, V.version = "19.2.3", V;
}
var by;
function mi() {
  return by || (by = 1, Vc.exports = Yh()), Vc.exports;
}
var wt = mi(), Kc = { exports: {} }, Jc = {};
var _y;
function jh() {
  if (_y) return Jc;
  _y = 1;
  var i = mi();
  function r(z, S) {
    return z === S && (z !== 0 || 1 / z === 1 / S) || z !== z && S !== S;
  }
  var o = typeof Object.is == "function" ? Object.is : r, c = i.useSyncExternalStore, h = i.useRef, _ = i.useEffect, O = i.useMemo, R = i.useDebugValue;
  return Jc.useSyncExternalStoreWithSelector = function(z, S, N, C, G) {
    var P = h(null);
    if (P.current === null) {
      var k = { hasValue: !1, value: null };
      P.current = k;
    } else k = P.current;
    P = O(
      function() {
        function at(tt) {
          if (!nt) {
            if (nt = !0, zt = tt, tt = C(tt), G !== void 0 && k.hasValue) {
              var st = k.value;
              if (G(st, tt))
                return Z = st;
            }
            return Z = tt;
          }
          if (st = Z, o(zt, tt)) return st;
          var Q = C(tt);
          return G !== void 0 && G(st, Q) ? (zt = tt, st) : (zt = tt, Z = Q);
        }
        var nt = !1, zt, Z, W = N === void 0 ? null : N;
        return [
          function() {
            return at(S());
          },
          W === null ? void 0 : function() {
            return at(W());
          }
        ];
      },
      [S, N, C, G]
    );
    var _t = c(z, P[0], P[1]);
    return _(
      function() {
        k.hasValue = !0, k.value = _t;
      },
      [_t]
    ), R(_t), _t;
  }, Jc;
}
var Ey;
function xh() {
  return Ey || (Ey = 1, Kc.exports = jh()), Kc.exports;
}
var Gh = xh();
function Xh(i) {
  i();
}
function Qh() {
  let i = null, r = null;
  return {
    clear() {
      i = null, r = null;
    },
    notify() {
      Xh(() => {
        let o = i;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      const o = [];
      let c = i;
      for (; c; )
        o.push(c), c = c.next;
      return o;
    },
    subscribe(o) {
      let c = !0;
      const h = r = {
        callback: o,
        next: null,
        prev: r
      };
      return h.prev ? h.prev.next = h : i = h, function() {
        !c || i === null || (c = !1, h.next ? h.next.prev = h.prev : r = h.prev, h.prev ? h.prev.next = h.next : i = h.next);
      };
    }
  };
}
var Ty = {
  notify() {
  },
  get: () => []
};
function Zh(i, r) {
  let o, c = Ty, h = 0, _ = !1;
  function O(_t) {
    N();
    const at = c.subscribe(_t);
    let nt = !1;
    return () => {
      nt || (nt = !0, at(), C());
    };
  }
  function R() {
    c.notify();
  }
  function z() {
    k.onStateChange && k.onStateChange();
  }
  function S() {
    return _;
  }
  function N() {
    h++, o || (o = i.subscribe(z), c = Qh());
  }
  function C() {
    h--, o && h === 0 && (o(), o = void 0, c.clear(), c = Ty);
  }
  function G() {
    _ || (_ = !0, N());
  }
  function P() {
    _ && (_ = !1, C());
  }
  const k = {
    addNestedSub: O,
    notifyNestedSubs: R,
    handleChangeWrapper: z,
    isSubscribed: S,
    trySubscribe: G,
    tryUnsubscribe: P,
    getListeners: () => c
  };
  return k;
}
var Lh = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vh = /* @__PURE__ */ Lh(), Kh = () => typeof navigator < "u" && navigator.product === "ReactNative", Jh = /* @__PURE__ */ Kh(), wh = () => Vh || Jh ? wt.useLayoutEffect : wt.useEffect, Wh = /* @__PURE__ */ wh(), kh = /* @__PURE__ */ Symbol.for("react-redux-context"), $h = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Fh() {
  if (!wt.createContext) return {};
  const i = $h[kh] ??= /* @__PURE__ */ new Map();
  let r = i.get(wt.createContext);
  return r || (r = wt.createContext(
    null
  ), i.set(wt.createContext, r)), r;
}
var Ce = /* @__PURE__ */ Fh();
function Ih(i) {
  const { children: r, context: o, serverState: c, store: h } = i, _ = wt.useMemo(() => {
    const z = Zh(h);
    return {
      store: h,
      subscription: z,
      getServerState: c ? () => c : void 0
    };
  }, [h, c]), O = wt.useMemo(() => h.getState(), [h]);
  Wh(() => {
    const { subscription: z } = _;
    return z.onStateChange = z.notifyNestedSubs, z.trySubscribe(), O !== h.getState() && z.notifyNestedSubs(), () => {
      z.tryUnsubscribe(), z.onStateChange = void 0;
    };
  }, [_, O]);
  const R = o || Ce;
  return /* @__PURE__ */ wt.createElement(R.Provider, { value: _ }, r);
}
var Ph = Ih;
function ss(i = Ce) {
  return function() {
    return wt.useContext(i);
  };
}
var Vy = /* @__PURE__ */ ss();
function Ky(i = Ce) {
  const r = i === Ce ? Vy : (
    // @ts-ignore
    ss(i)
  ), o = () => {
    const { store: c } = r();
    return c;
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var tm = /* @__PURE__ */ Ky();
function lm(i = Ce) {
  const r = i === Ce ? tm : Ky(i), o = () => r().dispatch;
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var Jy = /* @__PURE__ */ lm(), em = (i, r) => i === r;
function um(i = Ce) {
  const r = i === Ce ? Vy : ss(i), o = (c, h = {}) => {
    const { equalityFn: _ = em } = typeof h == "function" ? { equalityFn: h } : h, O = r(), { store: R, subscription: z, getServerState: S } = O;
    wt.useRef(!0);
    const N = wt.useCallback(
      {
        [c.name](G) {
          return c(G);
        }
      }[c.name],
      [c]
    ), C = Gh.useSyncExternalStoreWithSelector(
      z.addNestedSub,
      R.getState,
      S || R.getState,
      N,
      _
    );
    return wt.useDebugValue(C), C;
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var am = /* @__PURE__ */ um();
function Lt(i) {
  return `Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
var nm = typeof Symbol == "function" && Symbol.observable || "@@observable", zy = nm, wc = () => Math.random().toString(36).substring(7).split("").join("."), im = {
  INIT: `@@redux/INIT${/* @__PURE__ */ wc()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ wc()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${wc()}`
}, ci = im;
function rs(i) {
  if (typeof i != "object" || i === null)
    return !1;
  let r = i;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(i) === r || Object.getPrototypeOf(i) === null;
}
function wy(i, r, o) {
  if (typeof i != "function")
    throw new Error(Lt(2));
  if (typeof r == "function" && typeof o == "function" || typeof o == "function" && typeof arguments[3] == "function")
    throw new Error(Lt(0));
  if (typeof r == "function" && typeof o > "u" && (o = r, r = void 0), typeof o < "u") {
    if (typeof o != "function")
      throw new Error(Lt(1));
    return o(wy)(i, r);
  }
  let c = i, h = r, _ = /* @__PURE__ */ new Map(), O = _, R = 0, z = !1;
  function S() {
    O === _ && (O = /* @__PURE__ */ new Map(), _.forEach((at, nt) => {
      O.set(nt, at);
    }));
  }
  function N() {
    if (z)
      throw new Error(Lt(3));
    return h;
  }
  function C(at) {
    if (typeof at != "function")
      throw new Error(Lt(4));
    if (z)
      throw new Error(Lt(5));
    let nt = !0;
    S();
    const zt = R++;
    return O.set(zt, at), function() {
      if (nt) {
        if (z)
          throw new Error(Lt(6));
        nt = !1, S(), O.delete(zt), _ = null;
      }
    };
  }
  function G(at) {
    if (!rs(at))
      throw new Error(Lt(7));
    if (typeof at.type > "u")
      throw new Error(Lt(8));
    if (typeof at.type != "string")
      throw new Error(Lt(17));
    if (z)
      throw new Error(Lt(9));
    try {
      z = !0, h = c(h, at);
    } finally {
      z = !1;
    }
    return (_ = O).forEach((zt) => {
      zt();
    }), at;
  }
  function P(at) {
    if (typeof at != "function")
      throw new Error(Lt(10));
    c = at, G({
      type: ci.REPLACE
    });
  }
  function k() {
    const at = C;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(nt) {
        if (typeof nt != "object" || nt === null)
          throw new Error(Lt(11));
        function zt() {
          const W = nt;
          W.next && W.next(N());
        }
        return zt(), {
          unsubscribe: at(zt)
        };
      },
      [zy]() {
        return this;
      }
    };
  }
  return G({
    type: ci.INIT
  }), {
    dispatch: G,
    subscribe: C,
    getState: N,
    replaceReducer: P,
    [zy]: k
  };
}
function fm(i) {
  Object.keys(i).forEach((r) => {
    const o = i[r];
    if (typeof o(void 0, {
      type: ci.INIT
    }) > "u")
      throw new Error(Lt(12));
    if (typeof o(void 0, {
      type: ci.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Lt(13));
  });
}
function cm(i) {
  const r = Object.keys(i), o = {};
  for (let _ = 0; _ < r.length; _++) {
    const O = r[_];
    typeof i[O] == "function" && (o[O] = i[O]);
  }
  const c = Object.keys(o);
  let h;
  try {
    fm(o);
  } catch (_) {
    h = _;
  }
  return function(O = {}, R) {
    if (h)
      throw h;
    let z = !1;
    const S = {};
    for (let N = 0; N < c.length; N++) {
      const C = c[N], G = o[C], P = O[C], k = G(P, R);
      if (typeof k > "u")
        throw R && R.type, new Error(Lt(14));
      S[C] = k, z = z || k !== P;
    }
    return z = z || c.length !== Object.keys(O).length, z ? S : O;
  };
}
function si(...i) {
  return i.length === 0 ? (r) => r : i.length === 1 ? i[0] : i.reduce((r, o) => (...c) => r(o(...c)));
}
function sm(...i) {
  return (r) => (o, c) => {
    const h = r(o, c);
    let _ = () => {
      throw new Error(Lt(15));
    };
    const O = {
      getState: h.getState,
      dispatch: (z, ...S) => _(z, ...S)
    }, R = i.map((z) => z(O));
    return _ = si(...R)(h.dispatch), {
      ...h,
      dispatch: _
    };
  };
}
function rm(i) {
  return rs(i) && "type" in i && typeof i.type == "string";
}
var Wy = /* @__PURE__ */ Symbol.for("immer-nothing"), py = /* @__PURE__ */ Symbol.for("immer-draftable"), Wt = /* @__PURE__ */ Symbol.for("immer-state");
function Cl(i, ...r) {
  throw new Error(
    `[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var vl = Object, ju = vl.getPrototypeOf, ri = "constructor", Si = "prototype", ls = "configurable", oi = "enumerable", ii = "writable", Ba = "value", ue = (i) => !!i && !!i[Wt];
function Rl(i) {
  return i ? ky(i) || bi(i) || !!i[py] || !!i[ri]?.[py] || _i(i) || Ei(i) : !1;
}
var om = vl[Si][ri].toString(), Ay = /* @__PURE__ */ new WeakMap();
function ky(i) {
  if (!i || !os(i))
    return !1;
  const r = ju(i);
  if (r === null || r === vl[Si])
    return !0;
  const o = vl.hasOwnProperty.call(r, ri) && r[ri];
  if (o === Object)
    return !0;
  if (!Yu(o))
    return !1;
  let c = Ay.get(o);
  return c === void 0 && (c = Function.toString.call(o), Ay.set(o, c)), c === om;
}
function gi(i, r, o = !0) {
  ja(i) === 0 ? (o ? Reflect.ownKeys(i) : vl.keys(i)).forEach((h) => {
    r(h, i[h], i);
  }) : i.forEach((c, h) => r(h, c, i));
}
function ja(i) {
  const r = i[Wt];
  return r ? r.type_ : bi(i) ? 1 : _i(i) ? 2 : Ei(i) ? 3 : 0;
}
var My = (i, r, o = ja(i)) => o === 2 ? i.has(r) : vl[Si].hasOwnProperty.call(i, r), es = (i, r, o = ja(i)) => (
  // @ts-ignore
  o === 2 ? i.get(r) : i[r]
), di = (i, r, o, c = ja(i)) => {
  c === 2 ? i.set(r, o) : c === 3 ? i.add(o) : i[r] = o;
};
function dm(i, r) {
  return i === r ? i !== 0 || 1 / i === 1 / r : i !== i && r !== r;
}
var bi = Array.isArray, _i = (i) => i instanceof Map, Ei = (i) => i instanceof Set, os = (i) => typeof i == "object", Yu = (i) => typeof i == "function", Wc = (i) => typeof i == "boolean";
function ym(i) {
  const r = +i;
  return Number.isInteger(r) && String(r) === i;
}
var le = (i) => i.copy_ || i.base_, ds = (i) => i.modified_ ? i.copy_ : i.base_;
function us(i, r) {
  if (_i(i))
    return new Map(i);
  if (Ei(i))
    return new Set(i);
  if (bi(i))
    return Array[Si].slice.call(i);
  const o = ky(i);
  if (r === !0 || r === "class_only" && !o) {
    const c = vl.getOwnPropertyDescriptors(i);
    delete c[Wt];
    let h = Reflect.ownKeys(c);
    for (let _ = 0; _ < h.length; _++) {
      const O = h[_], R = c[O];
      R[ii] === !1 && (R[ii] = !0, R[ls] = !0), (R.get || R.set) && (c[O] = {
        [ls]: !0,
        [ii]: !0,
        // could live with !!desc.set as well here...
        [oi]: R[oi],
        [Ba]: i[O]
      });
    }
    return vl.create(ju(i), c);
  } else {
    const c = ju(i);
    if (c !== null && o)
      return { ...i };
    const h = vl.create(c);
    return vl.assign(h, i);
  }
}
function ys(i, r = !1) {
  return Ti(i) || ue(i) || !Rl(i) || (ja(i) > 1 && vl.defineProperties(i, {
    set: ui,
    add: ui,
    clear: ui,
    delete: ui
  }), vl.freeze(i), r && gi(
    i,
    (o, c) => {
      ys(c, !0);
    },
    !1
  )), i;
}
function vm() {
  Cl(2);
}
var ui = {
  [Ba]: vm
};
function Ti(i) {
  return i === null || !os(i) ? !0 : vl.isFrozen(i);
}
var yi = "MapSet", as = "Patches", Oy = "ArrayMethods", $y = {};
function Fe(i) {
  const r = $y[i];
  return r || Cl(0, i), r;
}
var Dy = (i) => !!$y[i], qa, Fy = () => qa, hm = (i, r) => ({
  drafts_: [],
  parent_: i,
  immer_: r,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Dy(yi) ? Fe(yi) : void 0,
  arrayMethodsPlugin_: Dy(Oy) ? Fe(Oy) : void 0
});
function Uy(i, r) {
  r && (i.patchPlugin_ = Fe(as), i.patches_ = [], i.inversePatches_ = [], i.patchListener_ = r);
}
function ns(i) {
  is(i), i.drafts_.forEach(mm), i.drafts_ = null;
}
function is(i) {
  i === qa && (qa = i.parent_);
}
var Cy = (i) => qa = hm(qa, i);
function mm(i) {
  const r = i[Wt];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : r.revoked_ = !0;
}
function Ry(i, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const o = r.drafts_[0];
  if (i !== void 0 && i !== o) {
    o[Wt].modified_ && (ns(r), Cl(4)), Rl(i) && (i = Ny(r, i));
    const { patchPlugin_: h } = r;
    h && h.generateReplacementPatches_(
      o[Wt].base_,
      i,
      r
    );
  } else
    i = Ny(r, o);
  return Sm(r, i, !0), ns(r), r.patches_ && r.patchListener_(r.patches_, r.inversePatches_), i !== Wy ? i : void 0;
}
function Ny(i, r) {
  if (Ti(r))
    return r;
  const o = r[Wt];
  if (!o)
    return vi(r, i.handledSet_, i);
  if (!zi(o, i))
    return r;
  if (!o.modified_)
    return o.base_;
  if (!o.finalized_) {
    const { callbacks_: c } = o;
    if (c)
      for (; c.length > 0; )
        c.pop()(i);
    t0(o, i);
  }
  return o.copy_;
}
function Sm(i, r, o = !1) {
  !i.parent_ && i.immer_.autoFreeze_ && i.canAutoFreeze_ && ys(r, o);
}
function Iy(i) {
  i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
}
var zi = (i, r) => i.scope_ === r, gm = [];
function Py(i, r, o, c) {
  const h = le(i), _ = i.type_;
  if (c !== void 0 && es(h, c, _) === r) {
    di(h, c, o, _);
    return;
  }
  if (!i.draftLocations_) {
    const R = i.draftLocations_ = /* @__PURE__ */ new Map();
    gi(h, (z, S) => {
      if (ue(S)) {
        const N = R.get(S) || [];
        N.push(z), R.set(S, N);
      }
    });
  }
  const O = i.draftLocations_.get(r) ?? gm;
  for (const R of O)
    di(h, R, o, _);
}
function bm(i, r, o) {
  i.callbacks_.push(function(h) {
    const _ = r;
    if (!_ || !zi(_, h))
      return;
    h.mapSetPlugin_?.fixSetContents(_);
    const O = ds(_);
    Py(i, _.draft_ ?? _, O, o), t0(_, h);
  });
}
function t0(i, r) {
  if (i.modified_ && !i.finalized_ && (i.type_ === 3 || i.type_ === 1 && i.allIndicesReassigned_ || (i.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: c } = r;
    if (c) {
      const h = c.getPath(i);
      h && c.generatePatches_(i, h, r);
    }
    Iy(i);
  }
}
function _m(i, r, o) {
  const { scope_: c } = i;
  if (ue(o)) {
    const h = o[Wt];
    zi(h, c) && h.callbacks_.push(function() {
      fi(i);
      const O = ds(h);
      Py(i, o, O, r);
    });
  } else Rl(o) && i.callbacks_.push(function() {
    const _ = le(i);
    i.type_ === 3 ? _.has(o) && vi(o, c.handledSet_, c) : es(_, r, i.type_) === o && c.drafts_.length > 1 && (i.assigned_.get(r) ?? !1) === !0 && i.copy_ && vi(
      es(i.copy_, r, i.type_),
      c.handledSet_,
      c
    );
  });
}
function vi(i, r, o) {
  return !o.immer_.autoFreeze_ && o.unfinalizedDrafts_ < 1 || ue(i) || r.has(i) || !Rl(i) || Ti(i) || (r.add(i), gi(i, (c, h) => {
    if (ue(h)) {
      const _ = h[Wt];
      if (zi(_, o)) {
        const O = ds(_);
        di(i, c, O, i.type_), Iy(_);
      }
    } else Rl(h) && vi(h, r, o);
  })), i;
}
function Em(i, r) {
  const o = bi(i), c = {
    type_: o ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: r ? r.scope_ : Fy(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: r,
    // The base state.
    base_: i,
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
  let h = c, _ = hi;
  o && (h = [c], _ = Ya);
  const { revoke: O, proxy: R } = Proxy.revocable(h, _);
  return c.draft_ = R, c.revoke_ = O, [R, c];
}
var hi = {
  get(i, r) {
    if (r === Wt)
      return i;
    let o = i.scope_.arrayMethodsPlugin_;
    const c = i.type_ === 1 && typeof r == "string";
    if (c && o?.isArrayOperationMethod(r))
      return o.createMethodInterceptor(i, r);
    const h = le(i);
    if (!My(h, r, i.type_))
      return Tm(i, h, r);
    const _ = h[r];
    if (i.finalized_ || !Rl(_) || c && i.operationMethod && o?.isMutatingArrayMethod(
      i.operationMethod
    ) && ym(r))
      return _;
    if (_ === kc(i.base_, r)) {
      fi(i);
      const O = i.type_ === 1 ? +r : r, R = cs(i.scope_, _, i, O);
      return i.copy_[O] = R;
    }
    return _;
  },
  has(i, r) {
    return r in le(i);
  },
  ownKeys(i) {
    return Reflect.ownKeys(le(i));
  },
  set(i, r, o) {
    const c = l0(le(i), r);
    if (c?.set)
      return c.set.call(i.draft_, o), !0;
    if (!i.modified_) {
      const h = kc(le(i), r), _ = h?.[Wt];
      if (_ && _.base_ === o)
        return i.copy_[r] = o, i.assigned_.set(r, !1), !0;
      if (dm(o, h) && (o !== void 0 || My(i.base_, r, i.type_)))
        return !0;
      fi(i), fs(i);
    }
    return i.copy_[r] === o && // special case: handle new props with value 'undefined'
    (o !== void 0 || r in i.copy_) || // special case: NaN
    Number.isNaN(o) && Number.isNaN(i.copy_[r]) || (i.copy_[r] = o, i.assigned_.set(r, !0), _m(i, r, o)), !0;
  },
  deleteProperty(i, r) {
    return fi(i), kc(i.base_, r) !== void 0 || r in i.base_ ? (i.assigned_.set(r, !1), fs(i)) : i.assigned_.delete(r), i.copy_ && delete i.copy_[r], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(i, r) {
    const o = le(i), c = Reflect.getOwnPropertyDescriptor(o, r);
    return c && {
      [ii]: !0,
      [ls]: i.type_ !== 1 || r !== "length",
      [oi]: c[oi],
      [Ba]: o[r]
    };
  },
  defineProperty() {
    Cl(11);
  },
  getPrototypeOf(i) {
    return ju(i.base_);
  },
  setPrototypeOf() {
    Cl(12);
  }
}, Ya = {};
for (let i in hi) {
  let r = hi[i];
  Ya[i] = function() {
    const o = arguments;
    return o[0] = o[0][0], r.apply(this, o);
  };
}
Ya.deleteProperty = function(i, r) {
  return Ya.set.call(this, i, r, void 0);
};
Ya.set = function(i, r, o) {
  return hi.set.call(this, i[0], r, o, i[0]);
};
function kc(i, r) {
  const o = i[Wt];
  return (o ? le(o) : i)[r];
}
function Tm(i, r, o) {
  const c = l0(r, o);
  return c ? Ba in c ? c[Ba] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    c.get?.call(i.draft_)
  ) : void 0;
}
function l0(i, r) {
  if (!(r in i))
    return;
  let o = ju(i);
  for (; o; ) {
    const c = Object.getOwnPropertyDescriptor(o, r);
    if (c)
      return c;
    o = ju(o);
  }
}
function fs(i) {
  i.modified_ || (i.modified_ = !0, i.parent_ && fs(i.parent_));
}
function fi(i) {
  i.copy_ || (i.assigned_ = /* @__PURE__ */ new Map(), i.copy_ = us(
    i.base_,
    i.scope_.immer_.useStrictShallowCopy_
  ));
}
var zm = class {
  constructor(i) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (r, o, c) => {
      if (Yu(r) && !Yu(o)) {
        const _ = o;
        o = r;
        const O = this;
        return function(z = _, ...S) {
          return O.produce(z, (N) => o.call(this, N, ...S));
        };
      }
      Yu(o) || Cl(6), c !== void 0 && !Yu(c) && Cl(7);
      let h;
      if (Rl(r)) {
        const _ = Cy(this), O = cs(_, r, void 0);
        let R = !0;
        try {
          h = o(O), R = !1;
        } finally {
          R ? ns(_) : is(_);
        }
        return Uy(_, c), Ry(h, _);
      } else if (!r || !os(r)) {
        if (h = o(r), h === void 0 && (h = r), h === Wy && (h = void 0), this.autoFreeze_ && ys(h, !0), c) {
          const _ = [], O = [];
          Fe(as).generateReplacementPatches_(r, h, {
            patches_: _,
            inversePatches_: O
          }), c(_, O);
        }
        return h;
      } else
        Cl(1, r);
    }, this.produceWithPatches = (r, o) => {
      if (Yu(r))
        return (O, ...R) => this.produceWithPatches(O, (z) => r(z, ...R));
      let c, h;
      return [this.produce(r, o, (O, R) => {
        c = O, h = R;
      }), c, h];
    }, Wc(i?.autoFreeze) && this.setAutoFreeze(i.autoFreeze), Wc(i?.useStrictShallowCopy) && this.setUseStrictShallowCopy(i.useStrictShallowCopy), Wc(i?.useStrictIteration) && this.setUseStrictIteration(i.useStrictIteration);
  }
  createDraft(i) {
    Rl(i) || Cl(8), ue(i) && (i = pm(i));
    const r = Cy(this), o = cs(r, i, void 0);
    return o[Wt].isManual_ = !0, is(r), o;
  }
  finishDraft(i, r) {
    const o = i && i[Wt];
    (!o || !o.isManual_) && Cl(9);
    const { scope_: c } = o;
    return Uy(c, r), Ry(void 0, c);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(i) {
    this.autoFreeze_ = i;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(i) {
    this.useStrictShallowCopy_ = i;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(i) {
    this.useStrictIteration_ = i;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(i, r) {
    let o;
    for (o = r.length - 1; o >= 0; o--) {
      const h = r[o];
      if (h.path.length === 0 && h.op === "replace") {
        i = h.value;
        break;
      }
    }
    o > -1 && (r = r.slice(o + 1));
    const c = Fe(as).applyPatches_;
    return ue(i) ? c(i, r) : this.produce(
      i,
      (h) => c(h, r)
    );
  }
};
function cs(i, r, o, c) {
  const [h, _] = _i(r) ? Fe(yi).proxyMap_(r, o) : Ei(r) ? Fe(yi).proxySet_(r, o) : Em(r, o);
  return (o?.scope_ ?? Fy()).drafts_.push(h), _.callbacks_ = o?.callbacks_ ?? [], _.key_ = c, o && c !== void 0 ? bm(o, _, c) : _.callbacks_.push(function(z) {
    z.mapSetPlugin_?.fixSetContents(_);
    const { patchPlugin_: S } = z;
    _.modified_ && S && S.generatePatches_(_, [], z);
  }), h;
}
function pm(i) {
  return ue(i) || Cl(10, i), e0(i);
}
function e0(i) {
  if (!Rl(i) || Ti(i))
    return i;
  const r = i[Wt];
  let o, c = !0;
  if (r) {
    if (!r.modified_)
      return r.base_;
    r.finalized_ = !0, o = us(i, r.scope_.immer_.useStrictShallowCopy_), c = r.scope_.immer_.shouldUseStrictIteration();
  } else
    o = us(i, !0);
  return gi(
    o,
    (h, _) => {
      di(o, h, e0(_));
    },
    c
  ), r && (r.finalized_ = !1), o;
}
var Am = new zm(), u0 = Am.produce;
function a0(i) {
  return ({ dispatch: o, getState: c }) => (h) => (_) => typeof _ == "function" ? _(o, c, i) : h(_);
}
var Mm = a0(), Om = a0, Dm = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? si : si.apply(null, arguments);
};
function Hy(i, r) {
  function o(...c) {
    if (r) {
      let h = r(...c);
      if (!h)
        throw new Error(ee(0));
      return {
        type: i,
        payload: h.payload,
        ..."meta" in h && {
          meta: h.meta
        },
        ..."error" in h && {
          error: h.error
        }
      };
    }
    return {
      type: i,
      payload: c[0]
    };
  }
  return o.toString = () => `${i}`, o.type = i, o.match = (c) => rm(c) && c.type === i, o;
}
var n0 = class Ha extends Array {
  constructor(...r) {
    super(...r), Object.setPrototypeOf(this, Ha.prototype);
  }
  static get [Symbol.species]() {
    return Ha;
  }
  concat(...r) {
    return super.concat.apply(this, r);
  }
  prepend(...r) {
    return r.length === 1 && Array.isArray(r[0]) ? new Ha(...r[0].concat(this)) : new Ha(...r.concat(this));
  }
};
function By(i) {
  return Rl(i) ? u0(i, () => {
  }) : i;
}
function ai(i, r, o) {
  return i.has(r) ? i.get(r) : i.set(r, o(r)).get(r);
}
function Um(i) {
  return typeof i == "boolean";
}
var Cm = () => function(r) {
  const {
    thunk: o = !0,
    immutableCheck: c = !0,
    serializableCheck: h = !0,
    actionCreatorCheck: _ = !0
  } = r ?? {};
  let O = new n0();
  return o && (Um(o) ? O.push(Mm) : O.push(Om(o.extraArgument))), O;
}, Rm = "RTK_autoBatch", qy = (i) => (r) => {
  setTimeout(r, i);
}, Nm = (i = {
  type: "raf"
}) => (r) => (...o) => {
  const c = r(...o);
  let h = !0, _ = !1, O = !1;
  const R = /* @__PURE__ */ new Set(), z = i.type === "tick" ? queueMicrotask : i.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : qy(10)
  ) : i.type === "callback" ? i.queueNotification : qy(i.timeout), S = () => {
    O = !1, _ && (_ = !1, R.forEach((N) => N()));
  };
  return Object.assign({}, c, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(N) {
      const C = () => h && N(), G = c.subscribe(C);
      return R.add(N), () => {
        G(), R.delete(N);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(N) {
      try {
        return h = !N?.meta?.[Rm], _ = !h, _ && (O || (O = !0, z(S))), c.dispatch(N);
      } finally {
        h = !0;
      }
    }
  });
}, Hm = (i) => function(o) {
  const {
    autoBatch: c = !0
  } = o ?? {};
  let h = new n0(i);
  return c && h.push(Nm(typeof c == "object" ? c : void 0)), h;
};
function Bm(i) {
  const r = Cm(), {
    reducer: o = void 0,
    middleware: c,
    devTools: h = !0,
    preloadedState: _ = void 0,
    enhancers: O = void 0
  } = i || {};
  let R;
  if (typeof o == "function")
    R = o;
  else if (rs(o))
    R = cm(o);
  else
    throw new Error(ee(1));
  let z;
  typeof c == "function" ? z = c(r) : z = r();
  let S = si;
  h && (S = Dm({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof h == "object" && h
  }));
  const N = sm(...z), C = Hm(N);
  let G = typeof O == "function" ? O(C) : C();
  const P = S(...G);
  return wy(R, _, P);
}
function i0(i) {
  const r = {}, o = [];
  let c;
  const h = {
    addCase(_, O) {
      const R = typeof _ == "string" ? _ : _.type;
      if (!R)
        throw new Error(ee(28));
      if (R in r)
        throw new Error(ee(29));
      return r[R] = O, h;
    },
    addAsyncThunk(_, O) {
      return O.pending && (r[_.pending.type] = O.pending), O.rejected && (r[_.rejected.type] = O.rejected), O.fulfilled && (r[_.fulfilled.type] = O.fulfilled), O.settled && o.push({
        matcher: _.settled,
        reducer: O.settled
      }), h;
    },
    addMatcher(_, O) {
      return o.push({
        matcher: _,
        reducer: O
      }), h;
    },
    addDefaultCase(_) {
      return c = _, h;
    }
  };
  return i(h), [r, o, c];
}
function qm(i) {
  return typeof i == "function";
}
function Ym(i, r) {
  let [o, c, h] = i0(r), _;
  if (qm(i))
    _ = () => By(i());
  else {
    const R = By(i);
    _ = () => R;
  }
  function O(R = _(), z) {
    let S = [o[z.type], ...c.filter(({
      matcher: N
    }) => N(z)).map(({
      reducer: N
    }) => N)];
    return S.filter((N) => !!N).length === 0 && (S = [h]), S.reduce((N, C) => {
      if (C)
        if (ue(N)) {
          const P = C(N, z);
          return P === void 0 ? N : P;
        } else {
          if (Rl(N))
            return u0(N, (G) => C(G, z));
          {
            const G = C(N, z);
            if (G === void 0) {
              if (N === null)
                return N;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return G;
          }
        }
      return N;
    }, R);
  }
  return O.getInitialState = _, O;
}
var jm = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function xm(i, r) {
  return `${i}/${r}`;
}
function Gm({
  creators: i
} = {}) {
  const r = i?.asyncThunk?.[jm];
  return function(c) {
    const {
      name: h,
      reducerPath: _ = h
    } = c;
    if (!h)
      throw new Error(ee(11));
    const O = (typeof c.reducers == "function" ? c.reducers(Qm()) : c.reducers) || {}, R = Object.keys(O), z = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, S = {
      addCase(Z, W) {
        const tt = typeof Z == "string" ? Z : Z.type;
        if (!tt)
          throw new Error(ee(12));
        if (tt in z.sliceCaseReducersByType)
          throw new Error(ee(13));
        return z.sliceCaseReducersByType[tt] = W, S;
      },
      addMatcher(Z, W) {
        return z.sliceMatchers.push({
          matcher: Z,
          reducer: W
        }), S;
      },
      exposeAction(Z, W) {
        return z.actionCreators[Z] = W, S;
      },
      exposeCaseReducer(Z, W) {
        return z.sliceCaseReducersByName[Z] = W, S;
      }
    };
    R.forEach((Z) => {
      const W = O[Z], tt = {
        reducerName: Z,
        type: xm(h, Z),
        createNotation: typeof c.reducers == "function"
      };
      Lm(W) ? Km(tt, W, S, r) : Zm(tt, W, S);
    });
    function N() {
      const [Z = {}, W = [], tt = void 0] = typeof c.extraReducers == "function" ? i0(c.extraReducers) : [c.extraReducers], st = {
        ...Z,
        ...z.sliceCaseReducersByType
      };
      return Ym(c.initialState, (Q) => {
        for (let ot in st)
          Q.addCase(ot, st[ot]);
        for (let ot of z.sliceMatchers)
          Q.addMatcher(ot.matcher, ot.reducer);
        for (let ot of W)
          Q.addMatcher(ot.matcher, ot.reducer);
        tt && Q.addDefaultCase(tt);
      });
    }
    const C = (Z) => Z, G = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new WeakMap();
    let k;
    function _t(Z, W) {
      return k || (k = N()), k(Z, W);
    }
    function at() {
      return k || (k = N()), k.getInitialState();
    }
    function nt(Z, W = !1) {
      function tt(Q) {
        let ot = Q[Z];
        return typeof ot > "u" && W && (ot = ai(P, tt, at)), ot;
      }
      function st(Q = C) {
        const ot = ai(G, W, () => /* @__PURE__ */ new WeakMap());
        return ai(ot, Q, () => {
          const ul = {};
          for (const [ae, hl] of Object.entries(c.selectors ?? {}))
            ul[ae] = Xm(hl, Q, () => ai(P, Q, at), W);
          return ul;
        });
      }
      return {
        reducerPath: Z,
        getSelectors: st,
        get selectors() {
          return st(tt);
        },
        selectSlice: tt
      };
    }
    const zt = {
      name: h,
      reducer: _t,
      actions: z.actionCreators,
      caseReducers: z.sliceCaseReducersByName,
      getInitialState: at,
      ...nt(_),
      injectInto(Z, {
        reducerPath: W,
        ...tt
      } = {}) {
        const st = W ?? _;
        return Z.inject({
          reducerPath: st,
          reducer: _t
        }, tt), {
          ...zt,
          ...nt(st, !0)
        };
      }
    };
    return zt;
  };
}
function Xm(i, r, o, c) {
  function h(_, ...O) {
    let R = r(_);
    return typeof R > "u" && c && (R = o()), i(R, ...O);
  }
  return h.unwrapped = i, h;
}
var f0 = /* @__PURE__ */ Gm();
function Qm() {
  function i(r, o) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: r,
      ...o
    };
  }
  return i.withTypes = () => i, {
    reducer(r) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [r.name](...o) {
          return r(...o);
        }
      }[r.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(r, o) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: r,
        reducer: o
      };
    },
    asyncThunk: i
  };
}
function Zm({
  type: i,
  reducerName: r,
  createNotation: o
}, c, h) {
  let _, O;
  if ("reducer" in c) {
    if (o && !Vm(c))
      throw new Error(ee(17));
    _ = c.reducer, O = c.prepare;
  } else
    _ = c;
  h.addCase(i, _).exposeCaseReducer(r, _).exposeAction(r, O ? Hy(i, O) : Hy(i));
}
function Lm(i) {
  return i._reducerDefinitionType === "asyncThunk";
}
function Vm(i) {
  return i._reducerDefinitionType === "reducerWithPrepare";
}
function Km({
  type: i,
  reducerName: r
}, o, c, h) {
  if (!h)
    throw new Error(ee(18));
  const {
    payloadCreator: _,
    fulfilled: O,
    pending: R,
    rejected: z,
    settled: S,
    options: N
  } = o, C = h(i, _, N);
  c.exposeAction(r, C), O && c.addCase(C.fulfilled, O), R && c.addCase(C.pending, R), z && c.addCase(C.rejected, z), S && c.addMatcher(C.settled, S), c.exposeCaseReducer(r, {
    fulfilled: O || ni,
    pending: R || ni,
    rejected: z || ni,
    settled: S || ni
  });
}
function ni() {
}
function ee(i) {
  return `Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
const Jm = {
  columns: [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "type", header: "Type" },
    { key: "age", header: "Age" }
  ],
  dataTable: [
    { id: 1, name: "Tom", type: "Cat", age: 2 },
    { id: 2, name: "Jerry", type: "Mouse", age: 1 },
    { id: 3, name: "Spike", type: "Dog", age: 5 },
    { id: 4, name: "Kitty", type: "Cat", age: 3 },
    { id: 5, name: "Max", type: "Dog", age: 4 },
    { id: 6, name: "Luna", type: "Cat", age: 1 },
    { id: 7, name: "Rocky", type: "Dog", age: 6 }
  ],
  pageSize: 5,
  page: 0,
  loaded: !1
}, c0 = f0({
  name: "table",
  initialState: Jm,
  reducers: {
    setColumns(i, r) {
      i.columns = r.payload;
    },
    setDataTable(i, r) {
      i.dataTable = r.payload;
    },
    setPage(i, r) {
      i.page = r.payload;
    },
    setPageSize(i, r) {
      i.pageSize = r.payload;
    },
    deleteRowById(i, r) {
      const o = String(r.payload);
      i.dataTable = i.dataTable.filter((c) => String(c.id) !== o);
    },
    setLoaded(i, r) {
      i.loaded = r.payload;
    }
  }
}), {
  setColumns: d1,
  setDataTable: wm,
  setPage: $c,
  setPageSize: y1,
  deleteRowById: Wm,
  setLoaded: Yy
} = c0.actions, km = c0.reducer, $m = f0({
  name: "jmix",
  initialState: {},
  reducers: {
    eventReceived: (i, r) => {
    }
  }
}), { eventReceived: s0 } = $m.actions, jy = "jmix:ui";
function Fm(i) {
  const r = (o) => {
    const c = o;
    !c.detail || c.detail.v !== 1 || (console.log(c.detail), i(c.detail));
  };
  return window.addEventListener(jy, r), () => window.removeEventListener(jy, r);
}
function r0(i, r, o) {
  const c = {
    v: 1,
    type: i,
    ts: Date.now(),
    payload: r ?? {},
    correlationId: o
  };
  if (window.ReactBridge?.notify) {
    window.ReactBridge.notify(c);
    return;
  }
  window.dispatchEvent(new CustomEvent("react:ui", { detail: c }));
}
function Im() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
const Pm = (i) => (r) => (o) => {
  if (o.type !== s0.type) return r(o);
  const c = o.payload;
  switch (c.type) {
    case "TABLE_TRIGGER_LOAD": {
      const h = c.payload ?? {};
      i.dispatch(Yy(!1)), r0(
        "DATA_REQUESTED",
        {
          target: "list",
          page: h.page ?? 0,
          pageSize: h.pageSize ?? 5,
          filters: h.filters ?? {}
        },
        c.correlationId ?? Im()
      );
      break;
    }
    case "LIST_FULL_DATA": {
      const h = c.payload?.rows ?? [];
      i.dispatch(wm(h)), i.dispatch(Yy(!0));
      break;
    }
    case "DELETE_ROW_OK": {
      const h = c.payload?.rowId;
      h != null && i.dispatch(Wm(h));
      break;
    }
    case "ROW_DELETE_FAILED": {
      console.error(c.payload?.message ?? "Delete failed");
      break;
    }
  }
  return r(o);
}, t1 = [Pm], l1 = Bm({
  reducer: {
    table: km
  },
  middleware: (i) => i().concat(...t1)
});
function e1() {
  const i = Jy(), {
    columns: r,
    dataTable: o,
    page: c,
    pageSize: h,
    loaded: _
  } = am((S) => S.table);
  if (wt.useEffect(() => {
    const S = Math.max(1, Math.ceil(o.length / h));
    c > S - 1 && i($c(S - 1));
  }, [o.length, h, c, i]), !_)
    return /* @__PURE__ */ Ot.jsxs("div", { className: "ct-container ct-empty", children: [
      /* @__PURE__ */ Ot.jsx("div", { className: "ct-empty-title", children: "Table not loaded" }),
      /* @__PURE__ */ Ot.jsxs("div", { className: "ct-empty-desc", children: [
        "Waiting for ",
        /* @__PURE__ */ Ot.jsx("code", { children: "TABLE_LOAD" }),
        " event…"
      ] })
    ] });
  const O = c * h, R = o.slice(O, O + h), z = Math.ceil(o.length / h);
  return /* @__PURE__ */ Ot.jsxs("div", { className: "ct-container", children: [
    /* @__PURE__ */ Ot.jsxs("table", { className: "ct-table", children: [
      /* @__PURE__ */ Ot.jsx("thead", { children: /* @__PURE__ */ Ot.jsxs("tr", { children: [
        r.map((S) => /* @__PURE__ */ Ot.jsx("th", { children: S.header }, S.key)),
        /* @__PURE__ */ Ot.jsx("th", { className: "ct-action-col" })
      ] }) }),
      /* @__PURE__ */ Ot.jsx("tbody", { children: R.map((S, N) => /* @__PURE__ */ Ot.jsxs("tr", { className: "ct-row", children: [
        r.map((C) => /* @__PURE__ */ Ot.jsx("td", { children: String(S[C.key] ?? "") }, C.key)),
        /* @__PURE__ */ Ot.jsx("td", { className: "ct-action", children: /* @__PURE__ */ Ot.jsx(
          "button",
          {
            className: "ct-delete",
            onClick: () => {
              const C = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
              r0(
                "ROW_DELETE_REQUESTED",
                {
                  rowId: S.id,
                  page: c,
                  pageSize: h,
                  filters: {}
                },
                C
              );
            },
            children: "✕"
          }
        ) })
      ] }, O + N)) })
    ] }),
    /* @__PURE__ */ Ot.jsxs("div", { className: "ct-pagination", children: [
      /* @__PURE__ */ Ot.jsx(
        "button",
        {
          disabled: c === 0,
          onClick: () => i($c(c - 1)),
          children: "◀"
        }
      ),
      /* @__PURE__ */ Ot.jsxs("span", { children: [
        "Page ",
        c + 1,
        " / ",
        z
      ] }),
      /* @__PURE__ */ Ot.jsx(
        "button",
        {
          disabled: c >= z - 1,
          onClick: () => i($c(c + 1)),
          children: "▶"
        }
      )
    ] })
  ] });
}
function u1() {
  const i = Jy();
  return wt.useEffect(() => Fm((r) => i(s0(r))), [i]), /* @__PURE__ */ Ot.jsx(e1, {});
}
var Fc = { exports: {} }, Na = {}, Ic = { exports: {} }, Pc = {};
var xy;
function a1() {
  return xy || (xy = 1, (function(i) {
    function r(A, H) {
      var L = A.length;
      A.push(H);
      t: for (; 0 < L; ) {
        var vt = L - 1 >>> 1, gt = A[vt];
        if (0 < h(gt, H))
          A[vt] = H, A[L] = gt, L = vt;
        else break t;
      }
    }
    function o(A) {
      return A.length === 0 ? null : A[0];
    }
    function c(A) {
      if (A.length === 0) return null;
      var H = A[0], L = A.pop();
      if (L !== H) {
        A[0] = L;
        t: for (var vt = 0, gt = A.length, v = gt >>> 1; vt < v; ) {
          var U = 2 * (vt + 1) - 1, B = A[U], Y = U + 1, K = A[Y];
          if (0 > h(B, L))
            Y < gt && 0 > h(K, B) ? (A[vt] = K, A[Y] = L, vt = Y) : (A[vt] = B, A[U] = L, vt = U);
          else if (Y < gt && 0 > h(K, L))
            A[vt] = K, A[Y] = L, vt = Y;
          else break t;
        }
      }
      return H;
    }
    function h(A, H) {
      var L = A.sortIndex - H.sortIndex;
      return L !== 0 ? L : A.id - H.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var _ = performance;
      i.unstable_now = function() {
        return _.now();
      };
    } else {
      var O = Date, R = O.now();
      i.unstable_now = function() {
        return O.now() - R;
      };
    }
    var z = [], S = [], N = 1, C = null, G = 3, P = !1, k = !1, _t = !1, at = !1, nt = typeof setTimeout == "function" ? setTimeout : null, zt = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function W(A) {
      for (var H = o(S); H !== null; ) {
        if (H.callback === null) c(S);
        else if (H.startTime <= A)
          c(S), H.sortIndex = H.expirationTime, r(z, H);
        else break;
        H = o(S);
      }
    }
    function tt(A) {
      if (_t = !1, W(A), !k)
        if (o(z) !== null)
          k = !0, st || (st = !0, kt());
        else {
          var H = o(S);
          H !== null && Ml(tt, H.startTime - A);
        }
    }
    var st = !1, Q = -1, ot = 5, ul = -1;
    function ae() {
      return at ? !0 : !(i.unstable_now() - ul < ot);
    }
    function hl() {
      if (at = !1, st) {
        var A = i.unstable_now();
        ul = A;
        var H = !0;
        try {
          t: {
            k = !1, _t && (_t = !1, zt(Q), Q = -1), P = !0;
            var L = G;
            try {
              l: {
                for (W(A), C = o(z); C !== null && !(C.expirationTime > A && ae()); ) {
                  var vt = C.callback;
                  if (typeof vt == "function") {
                    C.callback = null, G = C.priorityLevel;
                    var gt = vt(
                      C.expirationTime <= A
                    );
                    if (A = i.unstable_now(), typeof gt == "function") {
                      C.callback = gt, W(A), H = !0;
                      break l;
                    }
                    C === o(z) && c(z), W(A);
                  } else c(z);
                  C = o(z);
                }
                if (C !== null) H = !0;
                else {
                  var v = o(S);
                  v !== null && Ml(
                    tt,
                    v.startTime - A
                  ), H = !1;
                }
              }
              break t;
            } finally {
              C = null, G = L, P = !1;
            }
            H = void 0;
          }
        } finally {
          H ? kt() : st = !1;
        }
      }
    }
    var kt;
    if (typeof Z == "function")
      kt = function() {
        Z(hl);
      };
    else if (typeof MessageChannel < "u") {
      var Re = new MessageChannel(), Yl = Re.port2;
      Re.port1.onmessage = hl, kt = function() {
        Yl.postMessage(null);
      };
    } else
      kt = function() {
        nt(hl, 0);
      };
    function Ml(A, H) {
      Q = nt(function() {
        A(i.unstable_now());
      }, H);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, i.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ot = 0 < A ? Math.floor(1e3 / A) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, i.unstable_next = function(A) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = G;
      }
      var L = G;
      G = H;
      try {
        return A();
      } finally {
        G = L;
      }
    }, i.unstable_requestPaint = function() {
      at = !0;
    }, i.unstable_runWithPriority = function(A, H) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var L = G;
      G = A;
      try {
        return H();
      } finally {
        G = L;
      }
    }, i.unstable_scheduleCallback = function(A, H, L) {
      var vt = i.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? vt + L : vt) : L = vt, A) {
        case 1:
          var gt = -1;
          break;
        case 2:
          gt = 250;
          break;
        case 5:
          gt = 1073741823;
          break;
        case 4:
          gt = 1e4;
          break;
        default:
          gt = 5e3;
      }
      return gt = L + gt, A = {
        id: N++,
        callback: H,
        priorityLevel: A,
        startTime: L,
        expirationTime: gt,
        sortIndex: -1
      }, L > vt ? (A.sortIndex = L, r(S, A), o(z) === null && A === o(S) && (_t ? (zt(Q), Q = -1) : _t = !0, Ml(tt, L - vt))) : (A.sortIndex = gt, r(z, A), k || P || (k = !0, st || (st = !0, kt()))), A;
    }, i.unstable_shouldYield = ae, i.unstable_wrapCallback = function(A) {
      var H = G;
      return function() {
        var L = G;
        G = H;
        try {
          return A.apply(this, arguments);
        } finally {
          G = L;
        }
      };
    };
  })(Pc)), Pc;
}
var Gy;
function n1() {
  return Gy || (Gy = 1, Ic.exports = a1()), Ic.exports;
}
var ts = { exports: {} }, Vt = {};
var Xy;
function i1() {
  if (Xy) return Vt;
  Xy = 1;
  var i = mi();
  function r(z) {
    var S = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        S += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return "Minified React error #" + z + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var c = {
    d: {
      f: o,
      r: function() {
        throw Error(r(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, h = /* @__PURE__ */ Symbol.for("react.portal");
  function _(z, S, N) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: C == null ? null : "" + C,
      children: z,
      containerInfo: S,
      implementation: N
    };
  }
  var O = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function R(z, S) {
    if (z === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, Vt.createPortal = function(z, S) {
    var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(r(299));
    return _(z, S, null, N);
  }, Vt.flushSync = function(z) {
    var S = O.T, N = c.p;
    try {
      if (O.T = null, c.p = 2, z) return z();
    } finally {
      O.T = S, c.p = N, c.d.f();
    }
  }, Vt.preconnect = function(z, S) {
    typeof z == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, c.d.C(z, S));
  }, Vt.prefetchDNS = function(z) {
    typeof z == "string" && c.d.D(z);
  }, Vt.preinit = function(z, S) {
    if (typeof z == "string" && S && typeof S.as == "string") {
      var N = S.as, C = R(N, S.crossOrigin), G = typeof S.integrity == "string" ? S.integrity : void 0, P = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      N === "style" ? c.d.S(
        z,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: C,
          integrity: G,
          fetchPriority: P
        }
      ) : N === "script" && c.d.X(z, {
        crossOrigin: C,
        integrity: G,
        fetchPriority: P,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, Vt.preinitModule = function(z, S) {
    if (typeof z == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var N = R(
            S.as,
            S.crossOrigin
          );
          c.d.M(z, {
            crossOrigin: N,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          });
        }
      } else S == null && c.d.M(z);
  }, Vt.preload = function(z, S) {
    if (typeof z == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var N = S.as, C = R(N, S.crossOrigin);
      c.d.L(z, N, {
        crossOrigin: C,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, Vt.preloadModule = function(z, S) {
    if (typeof z == "string")
      if (S) {
        var N = R(S.as, S.crossOrigin);
        c.d.m(z, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: N,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        });
      } else c.d.m(z);
  }, Vt.requestFormReset = function(z) {
    c.d.r(z);
  }, Vt.unstable_batchedUpdates = function(z, S) {
    return z(S);
  }, Vt.useFormState = function(z, S, N) {
    return O.H.useFormState(z, S, N);
  }, Vt.useFormStatus = function() {
    return O.H.useHostTransitionStatus();
  }, Vt.version = "19.2.3", Vt;
}
var Qy;
function f1() {
  if (Qy) return ts.exports;
  Qy = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), ts.exports = i1(), ts.exports;
}
var Zy;
function c1() {
  if (Zy) return Na;
  Zy = 1;
  var i = n1(), r = mi(), o = f1();
  function c(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function _(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function O(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function R(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function z(t) {
    if (_(t) !== t)
      throw Error(c(188));
  }
  function S(t) {
    var l = t.alternate;
    if (!l) {
      if (l = _(t), l === null) throw Error(c(188));
      return l !== t ? null : t;
    }
    for (var e = t, u = l; ; ) {
      var a = e.return;
      if (a === null) break;
      var n = a.alternate;
      if (n === null) {
        if (u = a.return, u !== null) {
          e = u;
          continue;
        }
        break;
      }
      if (a.child === n.child) {
        for (n = a.child; n; ) {
          if (n === e) return z(a), t;
          if (n === u) return z(a), l;
          n = n.sibling;
        }
        throw Error(c(188));
      }
      if (e.return !== u.return) e = a, u = n;
      else {
        for (var f = !1, s = a.child; s; ) {
          if (s === e) {
            f = !0, e = a, u = n;
            break;
          }
          if (s === u) {
            f = !0, u = a, e = n;
            break;
          }
          s = s.sibling;
        }
        if (!f) {
          for (s = n.child; s; ) {
            if (s === e) {
              f = !0, e = n, u = a;
              break;
            }
            if (s === u) {
              f = !0, u = n, e = a;
              break;
            }
            s = s.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (e.alternate !== u) throw Error(c(190));
    }
    if (e.tag !== 3) throw Error(c(188));
    return e.stateNode.current === e ? t : l;
  }
  function N(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = N(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var C = Object.assign, G = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.transitional.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), _t = /* @__PURE__ */ Symbol.for("react.fragment"), at = /* @__PURE__ */ Symbol.for("react.strict_mode"), nt = /* @__PURE__ */ Symbol.for("react.profiler"), zt = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), tt = /* @__PURE__ */ Symbol.for("react.suspense"), st = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), ot = /* @__PURE__ */ Symbol.for("react.lazy"), ul = /* @__PURE__ */ Symbol.for("react.activity"), ae = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), hl = Symbol.iterator;
  function kt(t) {
    return t === null || typeof t != "object" ? null : (t = hl && t[hl] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Re = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Yl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Re ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case _t:
        return "Fragment";
      case nt:
        return "Profiler";
      case at:
        return "StrictMode";
      case tt:
        return "Suspense";
      case st:
        return "SuspenseList";
      case ul:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case k:
          return "Portal";
        case Z:
          return t.displayName || "Context";
        case zt:
          return (t._context.displayName || "Context") + ".Consumer";
        case W:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Q:
          return l = t.displayName || null, l !== null ? l : Yl(t.type) || "Memo";
        case ot:
          l = t._payload, t = t._init;
          try {
            return Yl(t(l));
          } catch {
          }
      }
    return null;
  }
  var Ml = Array.isArray, A = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, vt = [], gt = -1;
  function v(t) {
    return { current: t };
  }
  function U(t) {
    0 > gt || (t.current = vt[gt], vt[gt] = null, gt--);
  }
  function B(t, l) {
    gt++, vt[gt] = t.current, t.current = l;
  }
  var Y = v(null), K = v(null), $ = v(null), rt = v(null);
  function Kt(t, l) {
    switch (B($, l), B(K, t), B(Y, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Gd(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Gd(l), t = Xd(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    U(Y), B(Y, t);
  }
  function Dt() {
    U(Y), U(K), U($);
  }
  function xu(t) {
    t.memoizedState !== null && B(rt, t);
    var l = Y.current, e = Xd(l, t.type);
    l !== e && (B(K, t), B(Y, e));
  }
  function xa(t) {
    K.current === t && (U(Y), U(K)), rt.current === t && (U(rt), Oa._currentValue = L);
  }
  var pi, vs;
  function Ne(t) {
    if (pi === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        pi = l && l[1] || "", vs = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + pi + t + vs;
  }
  var Ai = !1;
  function Mi(t, l) {
    if (!t || Ai) return "";
    Ai = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var D = function() {
                throw Error();
              };
              if (Object.defineProperty(D.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(D, []);
                } catch (T) {
                  var E = T;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (T) {
                  E = T;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                E = T;
              }
              (D = t()) && typeof D.catch == "function" && D.catch(function() {
              });
            }
          } catch (T) {
            if (T && E && typeof T.stack == "string")
              return [T.stack, E.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), f = n[0], s = n[1];
      if (f && s) {
        var d = f.split(`
`), b = s.split(`
`);
        for (a = u = 0; u < d.length && !d[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; a < b.length && !b[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (u === d.length || a === b.length)
          for (u = d.length - 1, a = b.length - 1; 1 <= u && 0 <= a && d[u] !== b[a]; )
            a--;
        for (; 1 <= u && 0 <= a; u--, a--)
          if (d[u] !== b[a]) {
            if (u !== 1 || a !== 1)
              do
                if (u--, a--, 0 > a || d[u] !== b[a]) {
                  var p = `
` + d[u].replace(" at new ", " at ");
                  return t.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", t.displayName)), p;
                }
              while (1 <= u && 0 <= a);
            break;
          }
      }
    } finally {
      Ai = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Ne(e) : "";
  }
  function o0(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ne(t.type);
      case 16:
        return Ne("Lazy");
      case 13:
        return t.child !== l && l !== null ? Ne("Suspense Fallback") : Ne("Suspense");
      case 19:
        return Ne("SuspenseList");
      case 0:
      case 15:
        return Mi(t.type, !1);
      case 11:
        return Mi(t.type.render, !1);
      case 1:
        return Mi(t.type, !0);
      case 31:
        return Ne("Activity");
      default:
        return "";
    }
  }
  function hs(t) {
    try {
      var l = "", e = null;
      do
        l += o0(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Oi = Object.prototype.hasOwnProperty, Di = i.unstable_scheduleCallback, Ui = i.unstable_cancelCallback, d0 = i.unstable_shouldYield, y0 = i.unstable_requestPaint, al = i.unstable_now, v0 = i.unstable_getCurrentPriorityLevel, ms = i.unstable_ImmediatePriority, Ss = i.unstable_UserBlockingPriority, Ga = i.unstable_NormalPriority, h0 = i.unstable_LowPriority, gs = i.unstable_IdlePriority, m0 = i.log, S0 = i.unstable_setDisableYieldValue, Gu = null, nl = null;
  function ne(t) {
    if (typeof m0 == "function" && S0(t), nl && typeof nl.setStrictMode == "function")
      try {
        nl.setStrictMode(Gu, t);
      } catch {
      }
  }
  var il = Math.clz32 ? Math.clz32 : _0, g0 = Math.log, b0 = Math.LN2;
  function _0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (g0(t) / b0 | 0) | 0;
  }
  var Xa = 256, Qa = 262144, Za = 4194304;
  function He(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function La(t, l, e) {
    var u = t.pendingLanes;
    if (u === 0) return 0;
    var a = 0, n = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var s = u & 134217727;
    return s !== 0 ? (u = s & ~n, u !== 0 ? a = He(u) : (f &= s, f !== 0 ? a = He(f) : e || (e = s & ~t, e !== 0 && (a = He(e))))) : (s = u & ~n, s !== 0 ? a = He(s) : f !== 0 ? a = He(f) : e || (e = u & ~t, e !== 0 && (a = He(e)))), a === 0 ? 0 : l !== 0 && l !== a && (l & n) === 0 && (n = a & -a, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : a;
  }
  function Xu(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function E0(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
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
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bs() {
    var t = Za;
    return Za <<= 1, (Za & 62914560) === 0 && (Za = 4194304), t;
  }
  function Ci(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Qu(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function T0(t, l, e, u, a, n) {
    var f = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var s = t.entanglements, d = t.expirationTimes, b = t.hiddenUpdates;
    for (e = f & ~e; 0 < e; ) {
      var p = 31 - il(e), D = 1 << p;
      s[p] = 0, d[p] = -1;
      var E = b[p];
      if (E !== null)
        for (b[p] = null, p = 0; p < E.length; p++) {
          var T = E[p];
          T !== null && (T.lane &= -536870913);
        }
      e &= ~D;
    }
    u !== 0 && _s(t, u, 0), n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(f & ~l));
  }
  function _s(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var u = 31 - il(l);
    t.entangledLanes |= l, t.entanglements[u] = t.entanglements[u] | 1073741824 | e & 261930;
  }
  function Es(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var u = 31 - il(e), a = 1 << u;
      a & l | t[u] & l && (t[u] |= l), e &= ~a;
    }
  }
  function Ts(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : Ri(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function Ri(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ni(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function zs() {
    var t = H.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : sy(t.type));
  }
  function ps(t, l) {
    var e = H.p;
    try {
      return H.p = t, l();
    } finally {
      H.p = e;
    }
  }
  var ie = Math.random().toString(36).slice(2), xt = "__reactFiber$" + ie, $t = "__reactProps$" + ie, Ie = "__reactContainer$" + ie, Hi = "__reactEvents$" + ie, z0 = "__reactListeners$" + ie, p0 = "__reactHandles$" + ie, As = "__reactResources$" + ie, Zu = "__reactMarker$" + ie;
  function Bi(t) {
    delete t[xt], delete t[$t], delete t[Hi], delete t[z0], delete t[p0];
  }
  function Pe(t) {
    var l = t[xt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Ie] || e[xt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = wd(t); t !== null; ) {
            if (e = t[xt]) return e;
            t = wd(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function tu(t) {
    if (t = t[xt] || t[Ie]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Lu(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(c(33));
  }
  function lu(t) {
    var l = t[As];
    return l || (l = t[As] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Yt(t) {
    t[Zu] = !0;
  }
  var Ms = /* @__PURE__ */ new Set(), Os = {};
  function Be(t, l) {
    eu(t, l), eu(t + "Capture", l);
  }
  function eu(t, l) {
    for (Os[t] = l, t = 0; t < l.length; t++)
      Ms.add(l[t]);
  }
  var A0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ds = {}, Us = {};
  function M0(t) {
    return Oi.call(Us, t) ? !0 : Oi.call(Ds, t) ? !1 : A0.test(t) ? Us[t] = !0 : (Ds[t] = !0, !1);
  }
  function Va(t, l, e) {
    if (M0(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var u = l.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Ka(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function jl(t, l, e, u) {
    if (u === null) t.removeAttribute(e);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + u);
    }
  }
  function ml(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Cs(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function O0(t, l, e) {
    var u = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var a = u.get, n = u.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(f) {
          e = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(t, l, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(f) {
          e = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function qi(t) {
    if (!t._valueTracker) {
      var l = Cs(t) ? "checked" : "value";
      t._valueTracker = O0(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function Rs(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), u = "";
    return t && (u = Cs(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== e ? (l.setValue(t), !0) : !1;
  }
  function Ja(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var D0 = /[\n"\\]/g;
  function Sl(t) {
    return t.replace(
      D0,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Yi(t, l, e, u, a, n, f, s) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), l != null ? f === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + ml(l)) : t.value !== "" + ml(l) && (t.value = "" + ml(l)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), l != null ? ji(t, f, ml(l)) : e != null ? ji(t, f, ml(e)) : u != null && t.removeAttribute("value"), a == null && n != null && (t.defaultChecked = !!n), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + ml(s) : t.removeAttribute("name");
  }
  function Ns(t, l, e, u, a, n, f, s) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        qi(t);
        return;
      }
      e = e != null ? "" + ml(e) : "", l = l != null ? "" + ml(l) : e, s || l === t.value || (t.value = l), t.defaultValue = l;
    }
    u = u ?? a, u = typeof u != "function" && typeof u != "symbol" && !!u, t.checked = s ? t.checked : !!u, t.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), qi(t);
  }
  function ji(t, l, e) {
    l === "number" && Ja(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function uu(t, l, e, u) {
    if (t = t.options, l) {
      l = {};
      for (var a = 0; a < e.length; a++)
        l["$" + e[a]] = !0;
      for (e = 0; e < t.length; e++)
        a = l.hasOwnProperty("$" + t[e].value), t[e].selected !== a && (t[e].selected = a), a && u && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + ml(e), l = null, a = 0; a < t.length; a++) {
        if (t[a].value === e) {
          t[a].selected = !0, u && (t[a].defaultSelected = !0);
          return;
        }
        l !== null || t[a].disabled || (l = t[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Hs(t, l, e) {
    if (l != null && (l = "" + ml(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + ml(e) : "";
  }
  function Bs(t, l, e, u) {
    if (l == null) {
      if (u != null) {
        if (e != null) throw Error(c(92));
        if (Ml(u)) {
          if (1 < u.length) throw Error(c(93));
          u = u[0];
        }
        e = u;
      }
      e == null && (e = ""), l = e;
    }
    e = ml(l), t.defaultValue = e, u = t.textContent, u === e && u !== "" && u !== null && (t.value = u), qi(t);
  }
  function au(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var U0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qs(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? u ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : u ? t.setProperty(l, e) : typeof e != "number" || e === 0 || U0.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function Ys(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(c(62));
    if (t = t.style, e != null) {
      for (var u in e)
        !e.hasOwnProperty(u) || l != null && l.hasOwnProperty(u) || (u.indexOf("--") === 0 ? t.setProperty(u, "") : u === "float" ? t.cssFloat = "" : t[u] = "");
      for (var a in l)
        u = l[a], l.hasOwnProperty(a) && e[a] !== u && qs(t, a, u);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && qs(t, n, l[n]);
  }
  function xi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var C0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), R0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wa(t) {
    return R0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function xl() {
  }
  var Gi = null;
  function Xi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var nu = null, iu = null;
  function js(t) {
    var l = tu(t);
    if (l && (t = l.stateNode)) {
      var e = t[$t] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Yi(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + Sl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var u = e[l];
              if (u !== t && u.form === t.form) {
                var a = u[$t] || null;
                if (!a) throw Error(c(90));
                Yi(
                  u,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              u = e[l], u.form === t.form && Rs(u);
          }
          break t;
        case "textarea":
          Hs(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && uu(t, !!e.multiple, l, !1);
      }
    }
  }
  var Qi = !1;
  function xs(t, l, e) {
    if (Qi) return t(l, e);
    Qi = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (Qi = !1, (nu !== null || iu !== null) && (qn(), nu && (l = nu, t = iu, iu = nu = null, js(l), t)))
        for (l = 0; l < t.length; l++) js(t[l]);
    }
  }
  function Vu(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var u = e[$t] || null;
    if (u === null) return null;
    e = u[l];
    t: switch (l) {
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
        (u = !u.disabled) || (t = t.type, u = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !u;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        c(231, l, typeof e)
      );
    return e;
  }
  var Gl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zi = !1;
  if (Gl)
    try {
      var Ku = {};
      Object.defineProperty(Ku, "passive", {
        get: function() {
          Zi = !0;
        }
      }), window.addEventListener("test", Ku, Ku), window.removeEventListener("test", Ku, Ku);
    } catch {
      Zi = !1;
    }
  var fe = null, Li = null, Wa = null;
  function Gs() {
    if (Wa) return Wa;
    var t, l = Li, e = l.length, u, a = "value" in fe ? fe.value : fe.textContent, n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++) ;
    var f = e - t;
    for (u = 1; u <= f && l[e - u] === a[n - u]; u++) ;
    return Wa = a.slice(t, 1 < u ? 1 - u : void 0);
  }
  function ka(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function $a() {
    return !0;
  }
  function Xs() {
    return !1;
  }
  function Ft(t) {
    function l(e, u, a, n, f) {
      this._reactName = e, this._targetInst = a, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var s in t)
        t.hasOwnProperty(s) && (e = t[s], this[s] = e ? e(n) : n[s]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? $a : Xs, this.isPropagationStopped = Xs, this;
    }
    return C(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = $a);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = $a);
      },
      persist: function() {
      },
      isPersistent: $a
    }), l;
  }
  var qe = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Fa = Ft(qe), Ju = C({}, qe, { view: 0, detail: 0 }), N0 = Ft(Ju), Vi, Ki, wu, Ia = C({}, Ju, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wi,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== wu && (wu && t.type === "mousemove" ? (Vi = t.screenX - wu.screenX, Ki = t.screenY - wu.screenY) : Ki = Vi = 0, wu = t), Vi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ki;
    }
  }), Qs = Ft(Ia), H0 = C({}, Ia, { dataTransfer: 0 }), B0 = Ft(H0), q0 = C({}, Ju, { relatedTarget: 0 }), Ji = Ft(q0), Y0 = C({}, qe, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), j0 = Ft(Y0), x0 = C({}, qe, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), G0 = Ft(x0), X0 = C({}, qe, { data: 0 }), Zs = Ft(X0), Q0 = {
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
  }, Z0 = {
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
  }, L0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function V0(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = L0[t]) ? !!l[t] : !1;
  }
  function wi() {
    return V0;
  }
  var K0 = C({}, Ju, {
    key: function(t) {
      if (t.key) {
        var l = Q0[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = ka(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Z0[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wi,
    charCode: function(t) {
      return t.type === "keypress" ? ka(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? ka(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), J0 = Ft(K0), w0 = C({}, Ia, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ls = Ft(w0), W0 = C({}, Ju, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wi
  }), k0 = Ft(W0), $0 = C({}, qe, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), F0 = Ft($0), I0 = C({}, Ia, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), P0 = Ft(I0), tv = C({}, qe, {
    newState: 0,
    oldState: 0
  }), lv = Ft(tv), ev = [9, 13, 27, 32], Wi = Gl && "CompositionEvent" in window, Wu = null;
  Gl && "documentMode" in document && (Wu = document.documentMode);
  var uv = Gl && "TextEvent" in window && !Wu, Vs = Gl && (!Wi || Wu && 8 < Wu && 11 >= Wu), Ks = " ", Js = !1;
  function ws(t, l) {
    switch (t) {
      case "keyup":
        return ev.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ws(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var fu = !1;
  function av(t, l) {
    switch (t) {
      case "compositionend":
        return Ws(l);
      case "keypress":
        return l.which !== 32 ? null : (Js = !0, Ks);
      case "textInput":
        return t = l.data, t === Ks && Js ? null : t;
      default:
        return null;
    }
  }
  function nv(t, l) {
    if (fu)
      return t === "compositionend" || !Wi && ws(t, l) ? (t = Gs(), Wa = Li = fe = null, fu = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Vs && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var iv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ks(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!iv[t.type] : l === "textarea";
  }
  function $s(t, l, e, u) {
    nu ? iu ? iu.push(u) : iu = [u] : nu = u, l = Zn(l, "onChange"), 0 < l.length && (e = new Fa(
      "onChange",
      "change",
      null,
      e,
      u
    ), t.push({ event: e, listeners: l }));
  }
  var ku = null, $u = null;
  function fv(t) {
    Hd(t, 0);
  }
  function Pa(t) {
    var l = Lu(t);
    if (Rs(l)) return t;
  }
  function Fs(t, l) {
    if (t === "change") return l;
  }
  var Is = !1;
  if (Gl) {
    var ki;
    if (Gl) {
      var $i = "oninput" in document;
      if (!$i) {
        var Ps = document.createElement("div");
        Ps.setAttribute("oninput", "return;"), $i = typeof Ps.oninput == "function";
      }
      ki = $i;
    } else ki = !1;
    Is = ki && (!document.documentMode || 9 < document.documentMode);
  }
  function tr() {
    ku && (ku.detachEvent("onpropertychange", lr), $u = ku = null);
  }
  function lr(t) {
    if (t.propertyName === "value" && Pa($u)) {
      var l = [];
      $s(
        l,
        $u,
        t,
        Xi(t)
      ), xs(fv, l);
    }
  }
  function cv(t, l, e) {
    t === "focusin" ? (tr(), ku = l, $u = e, ku.attachEvent("onpropertychange", lr)) : t === "focusout" && tr();
  }
  function sv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pa($u);
  }
  function rv(t, l) {
    if (t === "click") return Pa(l);
  }
  function ov(t, l) {
    if (t === "input" || t === "change")
      return Pa(l);
  }
  function dv(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var fl = typeof Object.is == "function" ? Object.is : dv;
  function Fu(t, l) {
    if (fl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), u = Object.keys(l);
    if (e.length !== u.length) return !1;
    for (u = 0; u < e.length; u++) {
      var a = e[u];
      if (!Oi.call(l, a) || !fl(t[a], l[a]))
        return !1;
    }
    return !0;
  }
  function er(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ur(t, l) {
    var e = er(t);
    t = 0;
    for (var u; e; ) {
      if (e.nodeType === 3) {
        if (u = t + e.textContent.length, t <= l && u >= l)
          return { node: e, offset: l - t };
        t = u;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = er(e);
    }
  }
  function ar(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? ar(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function nr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Ja(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Ja(t.document);
    }
    return l;
  }
  function Fi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var yv = Gl && "documentMode" in document && 11 >= document.documentMode, cu = null, Ii = null, Iu = null, Pi = !1;
  function ir(t, l, e) {
    var u = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Pi || cu == null || cu !== Ja(u) || (u = cu, "selectionStart" in u && Fi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Iu && Fu(Iu, u) || (Iu = u, u = Zn(Ii, "onSelect"), 0 < u.length && (l = new Fa(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: u }), l.target = cu)));
  }
  function Ye(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var su = {
    animationend: Ye("Animation", "AnimationEnd"),
    animationiteration: Ye("Animation", "AnimationIteration"),
    animationstart: Ye("Animation", "AnimationStart"),
    transitionrun: Ye("Transition", "TransitionRun"),
    transitionstart: Ye("Transition", "TransitionStart"),
    transitioncancel: Ye("Transition", "TransitionCancel"),
    transitionend: Ye("Transition", "TransitionEnd")
  }, tf = {}, fr = {};
  Gl && (fr = document.createElement("div").style, "AnimationEvent" in window || (delete su.animationend.animation, delete su.animationiteration.animation, delete su.animationstart.animation), "TransitionEvent" in window || delete su.transitionend.transition);
  function je(t) {
    if (tf[t]) return tf[t];
    if (!su[t]) return t;
    var l = su[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in fr)
        return tf[t] = l[e];
    return t;
  }
  var cr = je("animationend"), sr = je("animationiteration"), rr = je("animationstart"), vv = je("transitionrun"), hv = je("transitionstart"), mv = je("transitioncancel"), or = je("transitionend"), dr = /* @__PURE__ */ new Map(), lf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lf.push("scrollEnd");
  function Ol(t, l) {
    dr.set(t, l), Be(l, [t]);
  }
  var tn = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, gl = [], ru = 0, ef = 0;
  function ln() {
    for (var t = ru, l = ef = ru = 0; l < t; ) {
      var e = gl[l];
      gl[l++] = null;
      var u = gl[l];
      gl[l++] = null;
      var a = gl[l];
      gl[l++] = null;
      var n = gl[l];
      if (gl[l++] = null, u !== null && a !== null) {
        var f = u.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), u.pending = a;
      }
      n !== 0 && yr(e, a, n);
    }
  }
  function en(t, l, e, u) {
    gl[ru++] = t, gl[ru++] = l, gl[ru++] = e, gl[ru++] = u, ef |= u, t.lanes |= u, t = t.alternate, t !== null && (t.lanes |= u);
  }
  function uf(t, l, e, u) {
    return en(t, l, e, u), un(t);
  }
  function xe(t, l) {
    return en(t, null, null, l), un(t);
  }
  function yr(t, l, e) {
    t.lanes |= e;
    var u = t.alternate;
    u !== null && (u.lanes |= e);
    for (var a = !1, n = t.return; n !== null; )
      n.childLanes |= e, u = n.alternate, u !== null && (u.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (a = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, a && l !== null && (a = 31 - il(e), t = n.hiddenUpdates, u = t[a], u === null ? t[a] = [l] : u.push(l), l.lane = e | 536870912), n) : null;
  }
  function un(t) {
    if (50 < _a)
      throw _a = 0, yc = null, Error(c(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ou = {};
  function Sv(t, l, e, u) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function cl(t, l, e, u) {
    return new Sv(t, l, e, u);
  }
  function af(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Xl(t, l) {
    var e = t.alternate;
    return e === null ? (e = cl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function vr(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function an(t, l, e, u, a, n) {
    var f = 0;
    if (u = t, typeof t == "function") af(t) && (f = 1);
    else if (typeof t == "string")
      f = Th(
        t,
        e,
        Y.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case ul:
          return t = cl(31, e, l, a), t.elementType = ul, t.lanes = n, t;
        case _t:
          return Ge(e.children, a, n, l);
        case at:
          f = 8, a |= 24;
          break;
        case nt:
          return t = cl(12, e, l, a | 2), t.elementType = nt, t.lanes = n, t;
        case tt:
          return t = cl(13, e, l, a), t.elementType = tt, t.lanes = n, t;
        case st:
          return t = cl(19, e, l, a), t.elementType = st, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Z:
                f = 10;
                break t;
              case zt:
                f = 9;
                break t;
              case W:
                f = 11;
                break t;
              case Q:
                f = 14;
                break t;
              case ot:
                f = 16, u = null;
                break t;
            }
          f = 29, e = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), u = null;
      }
    return l = cl(f, e, l, a), l.elementType = t, l.type = u, l.lanes = n, l;
  }
  function Ge(t, l, e, u) {
    return t = cl(7, t, u, l), t.lanes = e, t;
  }
  function nf(t, l, e) {
    return t = cl(6, t, null, l), t.lanes = e, t;
  }
  function hr(t) {
    var l = cl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function ff(t, l, e) {
    return l = cl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var mr = /* @__PURE__ */ new WeakMap();
  function bl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = mr.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: hs(l)
      }, mr.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: hs(l)
    };
  }
  var du = [], yu = 0, nn = null, Pu = 0, _l = [], El = 0, ce = null, Nl = 1, Hl = "";
  function Ql(t, l) {
    du[yu++] = Pu, du[yu++] = nn, nn = t, Pu = l;
  }
  function Sr(t, l, e) {
    _l[El++] = Nl, _l[El++] = Hl, _l[El++] = ce, ce = t;
    var u = Nl;
    t = Hl;
    var a = 32 - il(u) - 1;
    u &= ~(1 << a), e += 1;
    var n = 32 - il(l) + a;
    if (30 < n) {
      var f = a - a % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, a -= f, Nl = 1 << 32 - il(l) + a | e << a | u, Hl = n + t;
    } else
      Nl = 1 << n | e << a | u, Hl = t;
  }
  function cf(t) {
    t.return !== null && (Ql(t, 1), Sr(t, 1, 0));
  }
  function sf(t) {
    for (; t === nn; )
      nn = du[--yu], du[yu] = null, Pu = du[--yu], du[yu] = null;
    for (; t === ce; )
      ce = _l[--El], _l[El] = null, Hl = _l[--El], _l[El] = null, Nl = _l[--El], _l[El] = null;
  }
  function gr(t, l) {
    _l[El++] = Nl, _l[El++] = Hl, _l[El++] = ce, Nl = l.id, Hl = l.overflow, ce = t;
  }
  var Gt = null, Et = null, ut = !1, se = null, Tl = !1, rf = Error(c(519));
  function re(t) {
    var l = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ta(bl(l, t)), rf;
  }
  function br(t) {
    var l = t.stateNode, e = t.type, u = t.memoizedProps;
    switch (l[xt] = t, l[$t] = u, e) {
      case "dialog":
        I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Ta.length; e++)
          I(Ta[e], l);
        break;
      case "source":
        I("error", l);
        break;
      case "img":
      case "image":
      case "link":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "input":
        I("invalid", l), Ns(
          l,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        I("invalid", l);
        break;
      case "textarea":
        I("invalid", l), Bs(l, u.value, u.defaultValue, u.children);
    }
    e = u.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || u.suppressHydrationWarning === !0 || jd(l.textContent, e) ? (u.popover != null && (I("beforetoggle", l), I("toggle", l)), u.onScroll != null && I("scroll", l), u.onScrollEnd != null && I("scrollend", l), u.onClick != null && (l.onclick = xl), l = !0) : l = !1, l || re(t, !0);
  }
  function _r(t) {
    for (Gt = t.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 31:
        case 13:
          Tl = !1;
          return;
        case 27:
        case 3:
          Tl = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function vu(t) {
    if (t !== Gt) return !1;
    if (!ut) return _r(t), ut = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || Dc(t.type, t.memoizedProps)), e = !e), e && Et && re(t), _r(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Et = Jd(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Et = Jd(t);
    } else
      l === 27 ? (l = Et, pe(t.type) ? (t = Hc, Hc = null, Et = t) : Et = l) : Et = Gt ? pl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Xe() {
    Et = Gt = null, ut = !1;
  }
  function of() {
    var t = se;
    return t !== null && (ll === null ? ll = t : ll.push.apply(
      ll,
      t
    ), se = null), t;
  }
  function ta(t) {
    se === null ? se = [t] : se.push(t);
  }
  var df = v(null), Qe = null, Zl = null;
  function oe(t, l, e) {
    B(df, l._currentValue), l._currentValue = e;
  }
  function Ll(t) {
    t._currentValue = df.current, U(df);
  }
  function yf(t, l, e) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, u !== null && (u.childLanes |= l)) : u !== null && (u.childLanes & l) !== l && (u.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function vf(t, l, e, u) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var f = a.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var s = n;
          n = a;
          for (var d = 0; d < l.length; d++)
            if (s.context === l[d]) {
              n.lanes |= e, s = n.alternate, s !== null && (s.lanes |= e), yf(
                n.return,
                e,
                t
              ), u || (f = null);
              break t;
            }
          n = s.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(c(341));
        f.lanes |= e, n = f.alternate, n !== null && (n.lanes |= e), yf(f, e, t), f = null;
      } else f = a.child;
      if (f !== null) f.return = a;
      else
        for (f = a; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (a = f.sibling, a !== null) {
            a.return = f.return, f = a;
            break;
          }
          f = f.return;
        }
      a = f;
    }
  }
  function hu(t, l, e, u) {
    t = null;
    for (var a = l, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var f = a.alternate;
        if (f === null) throw Error(c(387));
        if (f = f.memoizedProps, f !== null) {
          var s = a.type;
          fl(a.pendingProps.value, f.value) || (t !== null ? t.push(s) : t = [s]);
        }
      } else if (a === rt.current) {
        if (f = a.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(Oa) : t = [Oa]);
      }
      a = a.return;
    }
    t !== null && vf(
      l,
      t,
      e,
      u
    ), l.flags |= 262144;
  }
  function fn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ze(t) {
    Qe = t, Zl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Xt(t) {
    return Er(Qe, t);
  }
  function cn(t, l) {
    return Qe === null && Ze(t), Er(t, l);
  }
  function Er(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Zl === null) {
      if (t === null) throw Error(c(308));
      Zl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Zl = Zl.next = l;
    return e;
  }
  var gv = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, u) {
        t.push(u);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, bv = i.unstable_scheduleCallback, _v = i.unstable_NormalPriority, Rt = {
    $$typeof: Z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function hf() {
    return {
      controller: new gv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function la(t) {
    t.refCount--, t.refCount === 0 && bv(_v, function() {
      t.controller.abort();
    });
  }
  var ea = null, mf = 0, mu = 0, Su = null;
  function Ev(t, l) {
    if (ea === null) {
      var e = ea = [];
      mf = 0, mu = bc(), Su = {
        status: "pending",
        value: void 0,
        then: function(u) {
          e.push(u);
        }
      };
    }
    return mf++, l.then(Tr, Tr), l;
  }
  function Tr() {
    if (--mf === 0 && ea !== null) {
      Su !== null && (Su.status = "fulfilled");
      var t = ea;
      ea = null, mu = 0, Su = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Tv(t, l) {
    var e = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        e.push(a);
      }
    };
    return t.then(
      function() {
        u.status = "fulfilled", u.value = l;
        for (var a = 0; a < e.length; a++) (0, e[a])(l);
      },
      function(a) {
        for (u.status = "rejected", u.reason = a, a = 0; a < e.length; a++)
          (0, e[a])(void 0);
      }
    ), u;
  }
  var zr = A.S;
  A.S = function(t, l) {
    fd = al(), typeof l == "object" && l !== null && typeof l.then == "function" && Ev(t, l), zr !== null && zr(t, l);
  };
  var Le = v(null);
  function Sf() {
    var t = Le.current;
    return t !== null ? t : bt.pooledCache;
  }
  function sn(t, l) {
    l === null ? B(Le, Le.current) : B(Le, l.pool);
  }
  function pr() {
    var t = Sf();
    return t === null ? null : { parent: Rt._currentValue, pool: t };
  }
  var gu = Error(c(460)), gf = Error(c(474)), rn = Error(c(542)), on = { then: function() {
  } };
  function Ar(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Mr(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(xl, xl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Dr(t), t;
      default:
        if (typeof l.status == "string") l.then(xl, xl);
        else {
          if (t = bt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = l, t.status = "pending", t.then(
            function(u) {
              if (l.status === "pending") {
                var a = l;
                a.status = "fulfilled", a.value = u;
              }
            },
            function(u) {
              if (l.status === "pending") {
                var a = l;
                a.status = "rejected", a.reason = u;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Dr(t), t;
        }
        throw Ke = l, gu;
    }
  }
  function Ve(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ke = e, gu) : e;
    }
  }
  var Ke = null;
  function Or() {
    if (Ke === null) throw Error(c(459));
    var t = Ke;
    return Ke = null, t;
  }
  function Dr(t) {
    if (t === gu || t === rn)
      throw Error(c(483));
  }
  var bu = null, ua = 0;
  function dn(t) {
    var l = ua;
    return ua += 1, bu === null && (bu = []), Mr(bu, t, l);
  }
  function aa(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function yn(t, l) {
    throw l.$$typeof === G ? Error(c(525)) : (t = Object.prototype.toString.call(l), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function Ur(t) {
    function l(m, y) {
      if (t) {
        var g = m.deletions;
        g === null ? (m.deletions = [y], m.flags |= 16) : g.push(y);
      }
    }
    function e(m, y) {
      if (!t) return null;
      for (; y !== null; )
        l(m, y), y = y.sibling;
      return null;
    }
    function u(m) {
      for (var y = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? y.set(m.key, m) : y.set(m.index, m), m = m.sibling;
      return y;
    }
    function a(m, y) {
      return m = Xl(m, y), m.index = 0, m.sibling = null, m;
    }
    function n(m, y, g) {
      return m.index = g, t ? (g = m.alternate, g !== null ? (g = g.index, g < y ? (m.flags |= 67108866, y) : g) : (m.flags |= 67108866, y)) : (m.flags |= 1048576, y);
    }
    function f(m) {
      return t && m.alternate === null && (m.flags |= 67108866), m;
    }
    function s(m, y, g, M) {
      return y === null || y.tag !== 6 ? (y = nf(g, m.mode, M), y.return = m, y) : (y = a(y, g), y.return = m, y);
    }
    function d(m, y, g, M) {
      var x = g.type;
      return x === _t ? p(
        m,
        y,
        g.props.children,
        M,
        g.key
      ) : y !== null && (y.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ot && Ve(x) === y.type) ? (y = a(y, g.props), aa(y, g), y.return = m, y) : (y = an(
        g.type,
        g.key,
        g.props,
        null,
        m.mode,
        M
      ), aa(y, g), y.return = m, y);
    }
    function b(m, y, g, M) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== g.containerInfo || y.stateNode.implementation !== g.implementation ? (y = ff(g, m.mode, M), y.return = m, y) : (y = a(y, g.children || []), y.return = m, y);
    }
    function p(m, y, g, M, x) {
      return y === null || y.tag !== 7 ? (y = Ge(
        g,
        m.mode,
        M,
        x
      ), y.return = m, y) : (y = a(y, g), y.return = m, y);
    }
    function D(m, y, g) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = nf(
          "" + y,
          m.mode,
          g
        ), y.return = m, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case P:
            return g = an(
              y.type,
              y.key,
              y.props,
              null,
              m.mode,
              g
            ), aa(g, y), g.return = m, g;
          case k:
            return y = ff(
              y,
              m.mode,
              g
            ), y.return = m, y;
          case ot:
            return y = Ve(y), D(m, y, g);
        }
        if (Ml(y) || kt(y))
          return y = Ge(
            y,
            m.mode,
            g,
            null
          ), y.return = m, y;
        if (typeof y.then == "function")
          return D(m, dn(y), g);
        if (y.$$typeof === Z)
          return D(
            m,
            cn(m, y),
            g
          );
        yn(m, y);
      }
      return null;
    }
    function E(m, y, g, M) {
      var x = y !== null ? y.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return x !== null ? null : s(m, y, "" + g, M);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case P:
            return g.key === x ? d(m, y, g, M) : null;
          case k:
            return g.key === x ? b(m, y, g, M) : null;
          case ot:
            return g = Ve(g), E(m, y, g, M);
        }
        if (Ml(g) || kt(g))
          return x !== null ? null : p(m, y, g, M, null);
        if (typeof g.then == "function")
          return E(
            m,
            y,
            dn(g),
            M
          );
        if (g.$$typeof === Z)
          return E(
            m,
            y,
            cn(m, g),
            M
          );
        yn(m, g);
      }
      return null;
    }
    function T(m, y, g, M, x) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return m = m.get(g) || null, s(y, m, "" + M, x);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case P:
            return m = m.get(
              M.key === null ? g : M.key
            ) || null, d(y, m, M, x);
          case k:
            return m = m.get(
              M.key === null ? g : M.key
            ) || null, b(y, m, M, x);
          case ot:
            return M = Ve(M), T(
              m,
              y,
              g,
              M,
              x
            );
        }
        if (Ml(M) || kt(M))
          return m = m.get(g) || null, p(y, m, M, x, null);
        if (typeof M.then == "function")
          return T(
            m,
            y,
            g,
            dn(M),
            x
          );
        if (M.$$typeof === Z)
          return T(
            m,
            y,
            g,
            cn(y, M),
            x
          );
        yn(y, M);
      }
      return null;
    }
    function q(m, y, g, M) {
      for (var x = null, it = null, j = y, w = y = 0, et = null; j !== null && w < g.length; w++) {
        j.index > w ? (et = j, j = null) : et = j.sibling;
        var ft = E(
          m,
          j,
          g[w],
          M
        );
        if (ft === null) {
          j === null && (j = et);
          break;
        }
        t && j && ft.alternate === null && l(m, j), y = n(ft, y, w), it === null ? x = ft : it.sibling = ft, it = ft, j = et;
      }
      if (w === g.length)
        return e(m, j), ut && Ql(m, w), x;
      if (j === null) {
        for (; w < g.length; w++)
          j = D(m, g[w], M), j !== null && (y = n(
            j,
            y,
            w
          ), it === null ? x = j : it.sibling = j, it = j);
        return ut && Ql(m, w), x;
      }
      for (j = u(j); w < g.length; w++)
        et = T(
          j,
          m,
          w,
          g[w],
          M
        ), et !== null && (t && et.alternate !== null && j.delete(
          et.key === null ? w : et.key
        ), y = n(
          et,
          y,
          w
        ), it === null ? x = et : it.sibling = et, it = et);
      return t && j.forEach(function(Ue) {
        return l(m, Ue);
      }), ut && Ql(m, w), x;
    }
    function X(m, y, g, M) {
      if (g == null) throw Error(c(151));
      for (var x = null, it = null, j = y, w = y = 0, et = null, ft = g.next(); j !== null && !ft.done; w++, ft = g.next()) {
        j.index > w ? (et = j, j = null) : et = j.sibling;
        var Ue = E(m, j, ft.value, M);
        if (Ue === null) {
          j === null && (j = et);
          break;
        }
        t && j && Ue.alternate === null && l(m, j), y = n(Ue, y, w), it === null ? x = Ue : it.sibling = Ue, it = Ue, j = et;
      }
      if (ft.done)
        return e(m, j), ut && Ql(m, w), x;
      if (j === null) {
        for (; !ft.done; w++, ft = g.next())
          ft = D(m, ft.value, M), ft !== null && (y = n(ft, y, w), it === null ? x = ft : it.sibling = ft, it = ft);
        return ut && Ql(m, w), x;
      }
      for (j = u(j); !ft.done; w++, ft = g.next())
        ft = T(j, m, w, ft.value, M), ft !== null && (t && ft.alternate !== null && j.delete(ft.key === null ? w : ft.key), y = n(ft, y, w), it === null ? x = ft : it.sibling = ft, it = ft);
      return t && j.forEach(function(Hh) {
        return l(m, Hh);
      }), ut && Ql(m, w), x;
    }
    function St(m, y, g, M) {
      if (typeof g == "object" && g !== null && g.type === _t && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case P:
            t: {
              for (var x = g.key; y !== null; ) {
                if (y.key === x) {
                  if (x = g.type, x === _t) {
                    if (y.tag === 7) {
                      e(
                        m,
                        y.sibling
                      ), M = a(
                        y,
                        g.props.children
                      ), M.return = m, m = M;
                      break t;
                    }
                  } else if (y.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ot && Ve(x) === y.type) {
                    e(
                      m,
                      y.sibling
                    ), M = a(y, g.props), aa(M, g), M.return = m, m = M;
                    break t;
                  }
                  e(m, y);
                  break;
                } else l(m, y);
                y = y.sibling;
              }
              g.type === _t ? (M = Ge(
                g.props.children,
                m.mode,
                M,
                g.key
              ), M.return = m, m = M) : (M = an(
                g.type,
                g.key,
                g.props,
                null,
                m.mode,
                M
              ), aa(M, g), M.return = m, m = M);
            }
            return f(m);
          case k:
            t: {
              for (x = g.key; y !== null; ) {
                if (y.key === x)
                  if (y.tag === 4 && y.stateNode.containerInfo === g.containerInfo && y.stateNode.implementation === g.implementation) {
                    e(
                      m,
                      y.sibling
                    ), M = a(y, g.children || []), M.return = m, m = M;
                    break t;
                  } else {
                    e(m, y);
                    break;
                  }
                else l(m, y);
                y = y.sibling;
              }
              M = ff(g, m.mode, M), M.return = m, m = M;
            }
            return f(m);
          case ot:
            return g = Ve(g), St(
              m,
              y,
              g,
              M
            );
        }
        if (Ml(g))
          return q(
            m,
            y,
            g,
            M
          );
        if (kt(g)) {
          if (x = kt(g), typeof x != "function") throw Error(c(150));
          return g = x.call(g), X(
            m,
            y,
            g,
            M
          );
        }
        if (typeof g.then == "function")
          return St(
            m,
            y,
            dn(g),
            M
          );
        if (g.$$typeof === Z)
          return St(
            m,
            y,
            cn(m, g),
            M
          );
        yn(m, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, y !== null && y.tag === 6 ? (e(m, y.sibling), M = a(y, g), M.return = m, m = M) : (e(m, y), M = nf(g, m.mode, M), M.return = m, m = M), f(m)) : e(m, y);
    }
    return function(m, y, g, M) {
      try {
        ua = 0;
        var x = St(
          m,
          y,
          g,
          M
        );
        return bu = null, x;
      } catch (j) {
        if (j === gu || j === rn) throw j;
        var it = cl(29, j, null, m.mode);
        return it.lanes = M, it.return = m, it;
      }
    };
  }
  var Je = Ur(!0), Cr = Ur(!1), de = !1;
  function bf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _f(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ye(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ve(t, l, e) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ct & 2) !== 0) {
      var a = u.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), u.pending = l, l = un(t), yr(t, null, e), l;
    }
    return en(t, u, l, e), un(t);
  }
  function na(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, Es(t, e);
    }
  }
  function Ef(t, l) {
    var e = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, e === u)) {
      var a = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var f = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? a = n = f : n = n.next = f, e = e.next;
        } while (e !== null);
        n === null ? a = n = l : n = n.next = l;
      } else a = n = l;
      e = {
        baseState: u.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var Tf = !1;
  function ia() {
    if (Tf) {
      var t = Su;
      if (t !== null) throw t;
    }
  }
  function fa(t, l, e, u) {
    Tf = !1;
    var a = t.updateQueue;
    de = !1;
    var n = a.firstBaseUpdate, f = a.lastBaseUpdate, s = a.shared.pending;
    if (s !== null) {
      a.shared.pending = null;
      var d = s, b = d.next;
      d.next = null, f === null ? n = b : f.next = b, f = d;
      var p = t.alternate;
      p !== null && (p = p.updateQueue, s = p.lastBaseUpdate, s !== f && (s === null ? p.firstBaseUpdate = b : s.next = b, p.lastBaseUpdate = d));
    }
    if (n !== null) {
      var D = a.baseState;
      f = 0, p = b = d = null, s = n;
      do {
        var E = s.lane & -536870913, T = E !== s.lane;
        if (T ? (lt & E) === E : (u & E) === E) {
          E !== 0 && E === mu && (Tf = !0), p !== null && (p = p.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          t: {
            var q = t, X = s;
            E = l;
            var St = e;
            switch (X.tag) {
              case 1:
                if (q = X.payload, typeof q == "function") {
                  D = q.call(St, D, E);
                  break t;
                }
                D = q;
                break t;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = X.payload, E = typeof q == "function" ? q.call(St, D, E) : q, E == null) break t;
                D = C({}, D, E);
                break t;
              case 2:
                de = !0;
            }
          }
          E = s.callback, E !== null && (t.flags |= 64, T && (t.flags |= 8192), T = a.callbacks, T === null ? a.callbacks = [E] : T.push(E));
        } else
          T = {
            lane: E,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, p === null ? (b = p = T, d = D) : p = p.next = T, f |= E;
        if (s = s.next, s === null) {
          if (s = a.shared.pending, s === null)
            break;
          T = s, s = T.next, T.next = null, a.lastBaseUpdate = T, a.shared.pending = null;
        }
      } while (!0);
      p === null && (d = D), a.baseState = d, a.firstBaseUpdate = b, a.lastBaseUpdate = p, n === null && (a.shared.lanes = 0), be |= f, t.lanes = f, t.memoizedState = D;
    }
  }
  function Rr(t, l) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(l);
  }
  function Nr(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        Rr(e[t], l);
  }
  var _u = v(null), vn = v(0);
  function Hr(t, l) {
    t = Il, B(vn, t), B(_u, l), Il = t | l.baseLanes;
  }
  function zf() {
    B(vn, Il), B(_u, _u.current);
  }
  function pf() {
    Il = vn.current, U(_u), U(vn);
  }
  var sl = v(null), zl = null;
  function he(t) {
    var l = t.alternate;
    B(Ut, Ut.current & 1), B(sl, t), zl === null && (l === null || _u.current !== null || l.memoizedState !== null) && (zl = t);
  }
  function Af(t) {
    B(Ut, Ut.current), B(sl, t), zl === null && (zl = t);
  }
  function Br(t) {
    t.tag === 22 ? (B(Ut, Ut.current), B(sl, t), zl === null && (zl = t)) : me();
  }
  function me() {
    B(Ut, Ut.current), B(sl, sl.current);
  }
  function rl(t) {
    U(sl), zl === t && (zl = null), U(Ut);
  }
  var Ut = v(0);
  function hn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || Rc(e) || Nc(e)))
          return l;
      } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var Vl = 0, J = null, ht = null, Nt = null, mn = !1, Eu = !1, we = !1, Sn = 0, ca = 0, Tu = null, zv = 0;
  function At() {
    throw Error(c(321));
  }
  function Mf(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!fl(t[e], l[e])) return !1;
    return !0;
  }
  function Of(t, l, e, u, a, n) {
    return Vl = n, J = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, A.H = t === null || t.memoizedState === null ? go : Zf, we = !1, n = e(u, a), we = !1, Eu && (n = Yr(
      l,
      e,
      u,
      a
    )), qr(t), n;
  }
  function qr(t) {
    A.H = oa;
    var l = ht !== null && ht.next !== null;
    if (Vl = 0, Nt = ht = J = null, mn = !1, ca = 0, Tu = null, l) throw Error(c(300));
    t === null || Ht || (t = t.dependencies, t !== null && fn(t) && (Ht = !0));
  }
  function Yr(t, l, e, u) {
    J = t;
    var a = 0;
    do {
      if (Eu && (Tu = null), ca = 0, Eu = !1, 25 <= a) throw Error(c(301));
      if (a += 1, Nt = ht = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      A.H = bo, n = l(e, u);
    } while (Eu);
    return n;
  }
  function pv() {
    var t = A.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? sa(l) : l, t = t.useState()[0], (ht !== null ? ht.memoizedState : null) !== t && (J.flags |= 1024), l;
  }
  function Df() {
    var t = Sn !== 0;
    return Sn = 0, t;
  }
  function Uf(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function Cf(t) {
    if (mn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      mn = !1;
    }
    Vl = 0, Nt = ht = J = null, Eu = !1, ca = Sn = 0, Tu = null;
  }
  function Jt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Nt === null ? J.memoizedState = Nt = t : Nt = Nt.next = t, Nt;
  }
  function Ct() {
    if (ht === null) {
      var t = J.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ht.next;
    var l = Nt === null ? J.memoizedState : Nt.next;
    if (l !== null)
      Nt = l, ht = t;
    else {
      if (t === null)
        throw J.alternate === null ? Error(c(467)) : Error(c(310));
      ht = t, t = {
        memoizedState: ht.memoizedState,
        baseState: ht.baseState,
        baseQueue: ht.baseQueue,
        queue: ht.queue,
        next: null
      }, Nt === null ? J.memoizedState = Nt = t : Nt = Nt.next = t;
    }
    return Nt;
  }
  function gn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sa(t) {
    var l = ca;
    return ca += 1, Tu === null && (Tu = []), t = Mr(Tu, t, l), l = J, (Nt === null ? l.memoizedState : Nt.next) === null && (l = l.alternate, A.H = l === null || l.memoizedState === null ? go : Zf), t;
  }
  function bn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return sa(t);
      if (t.$$typeof === Z) return Xt(t);
    }
    throw Error(c(438, String(t)));
  }
  function Rf(t) {
    var l = null, e = J.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var u = J.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (l = {
        data: u.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = gn(), J.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), u = 0; u < t; u++)
        e[u] = ae;
    return l.index++, e;
  }
  function Kl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function _n(t) {
    var l = Ct();
    return Nf(l, ht, t);
  }
  function Nf(t, l, e) {
    var u = t.queue;
    if (u === null) throw Error(c(311));
    u.lastRenderedReducer = e;
    var a = t.baseQueue, n = u.pending;
    if (n !== null) {
      if (a !== null) {
        var f = a.next;
        a.next = n.next, n.next = f;
      }
      l.baseQueue = a = n, u.pending = null;
    }
    if (n = t.baseState, a === null) t.memoizedState = n;
    else {
      l = a.next;
      var s = f = null, d = null, b = l, p = !1;
      do {
        var D = b.lane & -536870913;
        if (D !== b.lane ? (lt & D) === D : (Vl & D) === D) {
          var E = b.revertLane;
          if (E === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), D === mu && (p = !0);
          else if ((Vl & E) === E) {
            b = b.next, E === mu && (p = !0);
            continue;
          } else
            D = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, d === null ? (s = d = D, f = n) : d = d.next = D, J.lanes |= E, be |= E;
          D = b.action, we && e(n, D), n = b.hasEagerState ? b.eagerState : e(n, D);
        } else
          E = {
            lane: D,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, d === null ? (s = d = E, f = n) : d = d.next = E, J.lanes |= D, be |= D;
        b = b.next;
      } while (b !== null && b !== l);
      if (d === null ? f = n : d.next = s, !fl(n, t.memoizedState) && (Ht = !0, p && (e = Su, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = f, t.baseQueue = d, u.lastRenderedState = n;
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function Hf(t) {
    var l = Ct(), e = l.queue;
    if (e === null) throw Error(c(311));
    e.lastRenderedReducer = t;
    var u = e.dispatch, a = e.pending, n = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var f = a = a.next;
      do
        n = t(n, f.action), f = f.next;
      while (f !== a);
      fl(n, l.memoizedState) || (Ht = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, u];
  }
  function jr(t, l, e) {
    var u = J, a = Ct(), n = ut;
    if (n) {
      if (e === void 0) throw Error(c(407));
      e = e();
    } else e = l();
    var f = !fl(
      (ht || a).memoizedState,
      e
    );
    if (f && (a.memoizedState = e, Ht = !0), a = a.queue, Yf(Xr.bind(null, u, a, t), [
      t
    ]), a.getSnapshot !== l || f || Nt !== null && Nt.memoizedState.tag & 1) {
      if (u.flags |= 2048, zu(
        9,
        { destroy: void 0 },
        Gr.bind(
          null,
          u,
          a,
          e,
          l
        ),
        null
      ), bt === null) throw Error(c(349));
      n || (Vl & 127) !== 0 || xr(u, l, e);
    }
    return e;
  }
  function xr(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = J.updateQueue, l === null ? (l = gn(), J.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Gr(t, l, e, u) {
    l.value = e, l.getSnapshot = u, Qr(l) && Zr(t);
  }
  function Xr(t, l, e) {
    return e(function() {
      Qr(l) && Zr(t);
    });
  }
  function Qr(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !fl(t, e);
    } catch {
      return !0;
    }
  }
  function Zr(t) {
    var l = xe(t, 2);
    l !== null && el(l, t, 2);
  }
  function Bf(t) {
    var l = Jt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), we) {
        ne(!0);
        try {
          e();
        } finally {
          ne(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kl,
      lastRenderedState: t
    }, l;
  }
  function Lr(t, l, e, u) {
    return t.baseState = e, Nf(
      t,
      ht,
      typeof u == "function" ? u : Kl
    );
  }
  function Av(t, l, e, u, a) {
    if (zn(t)) throw Error(c(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      A.T !== null ? e(!0) : n.isTransition = !1, u(n), e = l.pending, e === null ? (n.next = l.pending = n, Vr(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function Vr(t, l) {
    var e = l.action, u = l.payload, a = t.state;
    if (l.isTransition) {
      var n = A.T, f = {};
      A.T = f;
      try {
        var s = e(a, u), d = A.S;
        d !== null && d(f, s), Kr(t, l, s);
      } catch (b) {
        qf(t, l, b);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), A.T = n;
      }
    } else
      try {
        n = e(a, u), Kr(t, l, n);
      } catch (b) {
        qf(t, l, b);
      }
  }
  function Kr(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(u) {
        Jr(t, l, u);
      },
      function(u) {
        return qf(t, l, u);
      }
    ) : Jr(t, l, e);
  }
  function Jr(t, l, e) {
    l.status = "fulfilled", l.value = e, wr(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Vr(t, e)));
  }
  function qf(t, l, e) {
    var u = t.pending;
    if (t.pending = null, u !== null) {
      u = u.next;
      do
        l.status = "rejected", l.reason = e, wr(l), l = l.next;
      while (l !== u);
    }
    t.action = null;
  }
  function wr(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Wr(t, l) {
    return l;
  }
  function kr(t, l) {
    if (ut) {
      var e = bt.formState;
      if (e !== null) {
        t: {
          var u = J;
          if (ut) {
            if (Et) {
              l: {
                for (var a = Et, n = Tl; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break l;
                  }
                  if (a = pl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                n = a.data, a = n === "F!" || n === "F" ? a : null;
              }
              if (a) {
                Et = pl(
                  a.nextSibling
                ), u = a.data === "F!";
                break t;
              }
            }
            re(u);
          }
          u = !1;
        }
        u && (l = e[0]);
      }
    }
    return e = Jt(), e.memoizedState = e.baseState = l, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: l
    }, e.queue = u, e = ho.bind(
      null,
      J,
      u
    ), u.dispatch = e, u = Bf(!1), n = Qf.bind(
      null,
      J,
      !1,
      u.queue
    ), u = Jt(), a = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, u.queue = a, e = Av.bind(
      null,
      J,
      a,
      n,
      e
    ), a.dispatch = e, u.memoizedState = t, [l, e, !1];
  }
  function $r(t) {
    var l = Ct();
    return Fr(l, ht, t);
  }
  function Fr(t, l, e) {
    if (l = Nf(
      t,
      l,
      Wr
    )[0], t = _n(Kl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var u = sa(l);
      } catch (f) {
        throw f === gu ? rn : f;
      }
    else u = l;
    l = Ct();
    var a = l.queue, n = a.dispatch;
    return e !== l.memoizedState && (J.flags |= 2048, zu(
      9,
      { destroy: void 0 },
      Mv.bind(null, a, e),
      null
    )), [u, n, t];
  }
  function Mv(t, l) {
    t.action = l;
  }
  function Ir(t) {
    var l = Ct(), e = ht;
    if (e !== null)
      return Fr(l, e, t);
    Ct(), l = l.memoizedState, e = Ct();
    var u = e.queue.dispatch;
    return e.memoizedState = t, [l, u, !1];
  }
  function zu(t, l, e, u) {
    return t = { tag: t, create: e, deps: u, inst: l, next: null }, l = J.updateQueue, l === null && (l = gn(), J.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (u = e.next, e.next = t, t.next = u, l.lastEffect = t), t;
  }
  function Pr() {
    return Ct().memoizedState;
  }
  function En(t, l, e, u) {
    var a = Jt();
    J.flags |= t, a.memoizedState = zu(
      1 | l,
      { destroy: void 0 },
      e,
      u === void 0 ? null : u
    );
  }
  function Tn(t, l, e, u) {
    var a = Ct();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    ht !== null && u !== null && Mf(u, ht.memoizedState.deps) ? a.memoizedState = zu(l, n, e, u) : (J.flags |= t, a.memoizedState = zu(
      1 | l,
      n,
      e,
      u
    ));
  }
  function to(t, l) {
    En(8390656, 8, t, l);
  }
  function Yf(t, l) {
    Tn(2048, 8, t, l);
  }
  function Ov(t) {
    J.flags |= 4;
    var l = J.updateQueue;
    if (l === null)
      l = gn(), J.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function lo(t) {
    var l = Ct().memoizedState;
    return Ov({ ref: l, nextImpl: t }), function() {
      if ((ct & 2) !== 0) throw Error(c(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function eo(t, l) {
    return Tn(4, 2, t, l);
  }
  function uo(t, l) {
    return Tn(4, 4, t, l);
  }
  function ao(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function no(t, l, e) {
    e = e != null ? e.concat([t]) : null, Tn(4, 4, ao.bind(null, l, t), e);
  }
  function jf() {
  }
  function io(t, l) {
    var e = Ct();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && Mf(l, u[1]) ? u[0] : (e.memoizedState = [t, l], t);
  }
  function fo(t, l) {
    var e = Ct();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && Mf(l, u[1]))
      return u[0];
    if (u = t(), we) {
      ne(!0);
      try {
        t();
      } finally {
        ne(!1);
      }
    }
    return e.memoizedState = [u, l], u;
  }
  function xf(t, l, e) {
    return e === void 0 || (Vl & 1073741824) !== 0 && (lt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = sd(), J.lanes |= t, be |= t, e);
  }
  function co(t, l, e, u) {
    return fl(e, l) ? e : _u.current !== null ? (t = xf(t, e, u), fl(t, l) || (Ht = !0), t) : (Vl & 42) === 0 || (Vl & 1073741824) !== 0 && (lt & 261930) === 0 ? (Ht = !0, t.memoizedState = e) : (t = sd(), J.lanes |= t, be |= t, l);
  }
  function so(t, l, e, u, a) {
    var n = H.p;
    H.p = n !== 0 && 8 > n ? n : 8;
    var f = A.T, s = {};
    A.T = s, Qf(t, !1, l, e);
    try {
      var d = a(), b = A.S;
      if (b !== null && b(s, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var p = Tv(
          d,
          u
        );
        ra(
          t,
          l,
          p,
          yl(t)
        );
      } else
        ra(
          t,
          l,
          u,
          yl(t)
        );
    } catch (D) {
      ra(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: D },
        yl()
      );
    } finally {
      H.p = n, f !== null && s.types !== null && (f.types = s.types), A.T = f;
    }
  }
  function Dv() {
  }
  function Gf(t, l, e, u) {
    if (t.tag !== 5) throw Error(c(476));
    var a = ro(t).queue;
    so(
      t,
      a,
      l,
      L,
      e === null ? Dv : function() {
        return oo(t), e(u);
      }
    );
  }
  function ro(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: L,
      baseState: L,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kl,
        lastRenderedState: L
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kl,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function oo(t) {
    var l = ro(t);
    l.next === null && (l = t.alternate.memoizedState), ra(
      t,
      l.next.queue,
      {},
      yl()
    );
  }
  function Xf() {
    return Xt(Oa);
  }
  function yo() {
    return Ct().memoizedState;
  }
  function vo() {
    return Ct().memoizedState;
  }
  function Uv(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = yl();
          t = ye(e);
          var u = ve(l, t, e);
          u !== null && (el(u, l, e), na(u, l, e)), l = { cache: hf() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Cv(t, l, e) {
    var u = yl();
    e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, zn(t) ? mo(l, e) : (e = uf(t, l, e, u), e !== null && (el(e, t, u), So(e, l, u)));
  }
  function ho(t, l, e) {
    var u = yl();
    ra(t, l, e, u);
  }
  function ra(t, l, e, u) {
    var a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (zn(t)) mo(l, a);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var f = l.lastRenderedState, s = n(f, e);
          if (a.hasEagerState = !0, a.eagerState = s, fl(s, f))
            return en(t, l, a, 0), bt === null && ln(), !1;
        } catch {
        }
      if (e = uf(t, l, a, u), e !== null)
        return el(e, t, u), So(e, l, u), !0;
    }
    return !1;
  }
  function Qf(t, l, e, u) {
    if (u = {
      lane: 2,
      revertLane: bc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, zn(t)) {
      if (l) throw Error(c(479));
    } else
      l = uf(
        t,
        e,
        u,
        2
      ), l !== null && el(l, t, 2);
  }
  function zn(t) {
    var l = t.alternate;
    return t === J || l !== null && l === J;
  }
  function mo(t, l) {
    Eu = mn = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function So(t, l, e) {
    if ((e & 4194048) !== 0) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, Es(t, e);
    }
  }
  var oa = {
    readContext: Xt,
    use: bn,
    useCallback: At,
    useContext: At,
    useEffect: At,
    useImperativeHandle: At,
    useLayoutEffect: At,
    useInsertionEffect: At,
    useMemo: At,
    useReducer: At,
    useRef: At,
    useState: At,
    useDebugValue: At,
    useDeferredValue: At,
    useTransition: At,
    useSyncExternalStore: At,
    useId: At,
    useHostTransitionStatus: At,
    useFormState: At,
    useActionState: At,
    useOptimistic: At,
    useMemoCache: At,
    useCacheRefresh: At
  };
  oa.useEffectEvent = At;
  var go = {
    readContext: Xt,
    use: bn,
    useCallback: function(t, l) {
      return Jt().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Xt,
    useEffect: to,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, En(
        4194308,
        4,
        ao.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return En(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      En(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = Jt();
      l = l === void 0 ? null : l;
      var u = t();
      if (we) {
        ne(!0);
        try {
          t();
        } finally {
          ne(!1);
        }
      }
      return e.memoizedState = [u, l], u;
    },
    useReducer: function(t, l, e) {
      var u = Jt();
      if (e !== void 0) {
        var a = e(l);
        if (we) {
          ne(!0);
          try {
            e(l);
          } finally {
            ne(!1);
          }
        }
      } else a = l;
      return u.memoizedState = u.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, u.queue = t, t = t.dispatch = Cv.bind(
        null,
        J,
        t
      ), [u.memoizedState, t];
    },
    useRef: function(t) {
      var l = Jt();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = Bf(t);
      var l = t.queue, e = ho.bind(null, J, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: jf,
    useDeferredValue: function(t, l) {
      var e = Jt();
      return xf(e, t, l);
    },
    useTransition: function() {
      var t = Bf(!1);
      return t = so.bind(
        null,
        J,
        t.queue,
        !0,
        !1
      ), Jt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var u = J, a = Jt();
      if (ut) {
        if (e === void 0)
          throw Error(c(407));
        e = e();
      } else {
        if (e = l(), bt === null)
          throw Error(c(349));
        (lt & 127) !== 0 || xr(u, l, e);
      }
      a.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return a.queue = n, to(Xr.bind(null, u, n, t), [
        t
      ]), u.flags |= 2048, zu(
        9,
        { destroy: void 0 },
        Gr.bind(
          null,
          u,
          n,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = Jt(), l = bt.identifierPrefix;
      if (ut) {
        var e = Hl, u = Nl;
        e = (u & ~(1 << 32 - il(u) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = Sn++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = zv++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: Xf,
    useFormState: kr,
    useActionState: kr,
    useOptimistic: function(t) {
      var l = Jt();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = Qf.bind(
        null,
        J,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: Rf,
    useCacheRefresh: function() {
      return Jt().memoizedState = Uv.bind(
        null,
        J
      );
    },
    useEffectEvent: function(t) {
      var l = Jt(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((ct & 2) !== 0)
          throw Error(c(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Zf = {
    readContext: Xt,
    use: bn,
    useCallback: io,
    useContext: Xt,
    useEffect: Yf,
    useImperativeHandle: no,
    useInsertionEffect: eo,
    useLayoutEffect: uo,
    useMemo: fo,
    useReducer: _n,
    useRef: Pr,
    useState: function() {
      return _n(Kl);
    },
    useDebugValue: jf,
    useDeferredValue: function(t, l) {
      var e = Ct();
      return co(
        e,
        ht.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = _n(Kl)[0], l = Ct().memoizedState;
      return [
        typeof t == "boolean" ? t : sa(t),
        l
      ];
    },
    useSyncExternalStore: jr,
    useId: yo,
    useHostTransitionStatus: Xf,
    useFormState: $r,
    useActionState: $r,
    useOptimistic: function(t, l) {
      var e = Ct();
      return Lr(e, ht, t, l);
    },
    useMemoCache: Rf,
    useCacheRefresh: vo
  };
  Zf.useEffectEvent = lo;
  var bo = {
    readContext: Xt,
    use: bn,
    useCallback: io,
    useContext: Xt,
    useEffect: Yf,
    useImperativeHandle: no,
    useInsertionEffect: eo,
    useLayoutEffect: uo,
    useMemo: fo,
    useReducer: Hf,
    useRef: Pr,
    useState: function() {
      return Hf(Kl);
    },
    useDebugValue: jf,
    useDeferredValue: function(t, l) {
      var e = Ct();
      return ht === null ? xf(e, t, l) : co(
        e,
        ht.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Hf(Kl)[0], l = Ct().memoizedState;
      return [
        typeof t == "boolean" ? t : sa(t),
        l
      ];
    },
    useSyncExternalStore: jr,
    useId: yo,
    useHostTransitionStatus: Xf,
    useFormState: Ir,
    useActionState: Ir,
    useOptimistic: function(t, l) {
      var e = Ct();
      return ht !== null ? Lr(e, ht, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: Rf,
    useCacheRefresh: vo
  };
  bo.useEffectEvent = lo;
  function Lf(t, l, e, u) {
    l = t.memoizedState, e = e(u, l), e = e == null ? l : C({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var Vf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var u = yl(), a = ye(u);
      a.payload = l, e != null && (a.callback = e), l = ve(t, a, u), l !== null && (el(l, t, u), na(l, t, u));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var u = yl(), a = ye(u);
      a.tag = 1, a.payload = l, e != null && (a.callback = e), l = ve(t, a, u), l !== null && (el(l, t, u), na(l, t, u));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = yl(), u = ye(e);
      u.tag = 2, l != null && (u.callback = l), l = ve(t, u, e), l !== null && (el(l, t, e), na(l, t, e));
    }
  };
  function _o(t, l, e, u, a, n, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, n, f) : l.prototype && l.prototype.isPureReactComponent ? !Fu(e, u) || !Fu(a, n) : !0;
  }
  function Eo(t, l, e, u) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, u), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, u), l.state !== t && Vf.enqueueReplaceState(l, l.state, null);
  }
  function We(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var u in l)
        u !== "ref" && (e[u] = l[u]);
    }
    if (t = t.defaultProps) {
      e === l && (e = C({}, e));
      for (var a in t)
        e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  function To(t) {
    tn(t);
  }
  function zo(t) {
    console.error(t);
  }
  function po(t) {
    tn(t);
  }
  function pn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Ao(t, l, e) {
    try {
      var u = t.onCaughtError;
      u(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Kf(t, l, e) {
    return e = ye(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      pn(t, l);
    }, e;
  }
  function Mo(t) {
    return t = ye(t), t.tag = 3, t;
  }
  function Oo(t, l, e, u) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      t.payload = function() {
        return a(n);
      }, t.callback = function() {
        Ao(l, e, u);
      };
    }
    var f = e.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Ao(l, e, u), typeof a != "function" && (_e === null ? _e = /* @__PURE__ */ new Set([this]) : _e.add(this));
      var s = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function Rv(t, l, e, u, a) {
    if (e.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (l = e.alternate, l !== null && hu(
        l,
        e,
        a,
        !0
      ), e = sl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return zl === null ? Yn() : e.alternate === null && Mt === 0 && (Mt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, u === on ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([u]) : l.add(u), mc(t, u, a)), !1;
          case 22:
            return e.flags |= 65536, u === on ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([u]) : e.add(u)), mc(t, u, a)), !1;
        }
        throw Error(c(435, e.tag));
      }
      return mc(t, u, a), Yn(), !1;
    }
    if (ut)
      return l = sl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, u !== rf && (t = Error(c(422), { cause: u }), ta(bl(t, e)))) : (u !== rf && (l = Error(c(423), {
        cause: u
      }), ta(
        bl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, u = bl(u, e), a = Kf(
        t.stateNode,
        u,
        a
      ), Ef(t, a), Mt !== 4 && (Mt = 2)), !1;
    var n = Error(c(520), { cause: u });
    if (n = bl(n, e), ba === null ? ba = [n] : ba.push(n), Mt !== 4 && (Mt = 2), l === null) return !0;
    u = bl(u, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = Kf(e.stateNode, u, t), Ef(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (_e === null || !_e.has(n))))
            return e.flags |= 65536, a &= -a, e.lanes |= a, a = Mo(a), Oo(
              a,
              t,
              e,
              u
            ), Ef(e, a), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Jf = Error(c(461)), Ht = !1;
  function Qt(t, l, e, u) {
    l.child = t === null ? Cr(l, null, e, u) : Je(
      l,
      t.child,
      e,
      u
    );
  }
  function Do(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var f = {};
      for (var s in u)
        s !== "ref" && (f[s] = u[s]);
    } else f = u;
    return Ze(l), u = Of(
      t,
      l,
      e,
      f,
      n,
      a
    ), s = Df(), t !== null && !Ht ? (Uf(t, l, a), Jl(t, l, a)) : (ut && s && cf(l), l.flags |= 1, Qt(t, l, u, a), l.child);
  }
  function Uo(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !af(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, Co(
        t,
        l,
        n,
        u,
        a
      )) : (t = an(
        e.type,
        null,
        u,
        l,
        l.mode,
        a
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !tc(t, a)) {
      var f = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Fu, e(f, u) && t.ref === l.ref)
        return Jl(t, l, a);
    }
    return l.flags |= 1, t = Xl(n, u), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Co(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Fu(n, u) && t.ref === l.ref)
        if (Ht = !1, l.pendingProps = u = n, tc(t, a))
          (t.flags & 131072) !== 0 && (Ht = !0);
        else
          return l.lanes = t.lanes, Jl(t, l, a);
    }
    return wf(
      t,
      l,
      e,
      u,
      a
    );
  }
  function Ro(t, l, e, u) {
    var a = u.children, n = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, t !== null) {
          for (u = l.child = t.child, a = 0; u !== null; )
            a = a | u.lanes | u.childLanes, u = u.sibling;
          u = a & ~n;
        } else u = 0, l.child = null;
        return No(
          t,
          l,
          n,
          e,
          u
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && sn(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? Hr(l, n) : zf(), Br(l);
      else
        return u = l.lanes = 536870912, No(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e,
          u
        );
    } else
      n !== null ? (sn(l, n.cachePool), Hr(l, n), me(), l.memoizedState = null) : (t !== null && sn(l, null), zf(), me());
    return Qt(t, l, a, e), l.child;
  }
  function da(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function No(t, l, e, u, a) {
    var n = Sf();
    return n = n === null ? null : { parent: Rt._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && sn(l, null), zf(), Br(l), t !== null && hu(t, l, u, !0), l.childLanes = a, null;
  }
  function An(t, l) {
    return l = On(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Ho(t, l, e) {
    return Je(l, t.child, null, e), t = An(l, l.pendingProps), t.flags |= 2, rl(l), l.memoizedState = null, t;
  }
  function Nv(t, l, e) {
    var u = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (ut) {
        if (u.mode === "hidden")
          return t = An(l, u), l.lanes = 536870912, da(null, t);
        if (Af(l), (t = Et) ? (t = Kd(
          t,
          Tl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: ce !== null ? { id: Nl, overflow: Hl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = hr(t), e.return = l, l.child = e, Gt = l, Et = null)) : t = null, t === null) throw re(l);
        return l.lanes = 536870912, null;
      }
      return An(l, u);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Af(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = Ho(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(c(558));
      else if (Ht || hu(t, l, e, !1), a = (e & t.childLanes) !== 0, Ht || a) {
        if (u = bt, u !== null && (f = Ts(u, e), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, xe(t, f), el(u, t, f), Jf;
        Yn(), l = Ho(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, Et = pl(f.nextSibling), Gt = l, ut = !0, se = null, Tl = !1, t !== null && gr(l, t), l = An(l, u), l.flags |= 4096;
      return l;
    }
    return t = Xl(t.child, {
      mode: u.mode,
      children: u.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Mn(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(c(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function wf(t, l, e, u, a) {
    return Ze(l), e = Of(
      t,
      l,
      e,
      u,
      void 0,
      a
    ), u = Df(), t !== null && !Ht ? (Uf(t, l, a), Jl(t, l, a)) : (ut && u && cf(l), l.flags |= 1, Qt(t, l, e, a), l.child);
  }
  function Bo(t, l, e, u, a, n) {
    return Ze(l), l.updateQueue = null, e = Yr(
      l,
      u,
      e,
      a
    ), qr(t), u = Df(), t !== null && !Ht ? (Uf(t, l, n), Jl(t, l, n)) : (ut && u && cf(l), l.flags |= 1, Qt(t, l, e, n), l.child);
  }
  function qo(t, l, e, u, a) {
    if (Ze(l), l.stateNode === null) {
      var n = ou, f = e.contextType;
      typeof f == "object" && f !== null && (n = Xt(f)), n = new e(u, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Vf, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = u, n.state = l.memoizedState, n.refs = {}, bf(l), f = e.contextType, n.context = typeof f == "object" && f !== null ? Xt(f) : ou, n.state = l.memoizedState, f = e.getDerivedStateFromProps, typeof f == "function" && (Lf(
        l,
        e,
        f,
        u
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Vf.enqueueReplaceState(n, n.state, null), fa(l, u, n, a), ia(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !0;
    } else if (t === null) {
      n = l.stateNode;
      var s = l.memoizedProps, d = We(e, s);
      n.props = d;
      var b = n.context, p = e.contextType;
      f = ou, typeof p == "object" && p !== null && (f = Xt(p));
      var D = e.getDerivedStateFromProps;
      p = typeof D == "function" || typeof n.getSnapshotBeforeUpdate == "function", s = l.pendingProps !== s, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (s || b !== f) && Eo(
        l,
        n,
        u,
        f
      ), de = !1;
      var E = l.memoizedState;
      n.state = E, fa(l, u, n, a), ia(), b = l.memoizedState, s || E !== b || de ? (typeof D == "function" && (Lf(
        l,
        e,
        D,
        u
      ), b = l.memoizedState), (d = de || _o(
        l,
        e,
        d,
        u,
        E,
        b,
        f
      )) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = u, l.memoizedState = b), n.props = u, n.state = b, n.context = f, u = d) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !1);
    } else {
      n = l.stateNode, _f(t, l), f = l.memoizedProps, p = We(e, f), n.props = p, D = l.pendingProps, E = n.context, b = e.contextType, d = ou, typeof b == "object" && b !== null && (d = Xt(b)), s = e.getDerivedStateFromProps, (b = typeof s == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== D || E !== d) && Eo(
        l,
        n,
        u,
        d
      ), de = !1, E = l.memoizedState, n.state = E, fa(l, u, n, a), ia();
      var T = l.memoizedState;
      f !== D || E !== T || de || t !== null && t.dependencies !== null && fn(t.dependencies) ? (typeof s == "function" && (Lf(
        l,
        e,
        s,
        u
      ), T = l.memoizedState), (p = de || _o(
        l,
        e,
        p,
        u,
        E,
        T,
        d
      ) || t !== null && t.dependencies !== null && fn(t.dependencies)) ? (b || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, T, d), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        T,
        d
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (l.flags |= 1024), l.memoizedProps = u, l.memoizedState = T), n.props = u, n.state = T, n.context = d, u = p) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (l.flags |= 1024), u = !1);
    }
    return n = u, Mn(t, l), u = (l.flags & 128) !== 0, n || u ? (n = l.stateNode, e = u && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && u ? (l.child = Je(
      l,
      t.child,
      null,
      a
    ), l.child = Je(
      l,
      null,
      e,
      a
    )) : Qt(t, l, e, a), l.memoizedState = n.state, t = l.child) : t = Jl(
      t,
      l,
      a
    ), t;
  }
  function Yo(t, l, e, u) {
    return Xe(), l.flags |= 256, Qt(t, l, e, u), l.child;
  }
  var Wf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function kf(t) {
    return { baseLanes: t, cachePool: pr() };
  }
  function $f(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= dl), t;
  }
  function jo(t, l, e) {
    var u = l.pendingProps, a = !1, n = (l.flags & 128) !== 0, f;
    if ((f = n) || (f = t !== null && t.memoizedState === null ? !1 : (Ut.current & 2) !== 0), f && (a = !0, l.flags &= -129), f = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (ut) {
        if (a ? he(l) : me(), (t = Et) ? (t = Kd(
          t,
          Tl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: ce !== null ? { id: Nl, overflow: Hl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = hr(t), e.return = l, l.child = e, Gt = l, Et = null)) : t = null, t === null) throw re(l);
        return Nc(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var s = u.children;
      return u = u.fallback, a ? (me(), a = l.mode, s = On(
        { mode: "hidden", children: s },
        a
      ), u = Ge(
        u,
        a,
        e,
        null
      ), s.return = l, u.return = l, s.sibling = u, l.child = s, u = l.child, u.memoizedState = kf(e), u.childLanes = $f(
        t,
        f,
        e
      ), l.memoizedState = Wf, da(null, u)) : (he(l), Ff(l, s));
    }
    var d = t.memoizedState;
    if (d !== null && (s = d.dehydrated, s !== null)) {
      if (n)
        l.flags & 256 ? (he(l), l.flags &= -257, l = If(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (me(), l.child = t.child, l.flags |= 128, l = null) : (me(), s = u.fallback, a = l.mode, u = On(
          { mode: "visible", children: u.children },
          a
        ), s = Ge(
          s,
          a,
          e,
          null
        ), s.flags |= 2, u.return = l, s.return = l, u.sibling = s, l.child = u, Je(
          l,
          t.child,
          null,
          e
        ), u = l.child, u.memoizedState = kf(e), u.childLanes = $f(
          t,
          f,
          e
        ), l.memoizedState = Wf, l = da(null, u));
      else if (he(l), Nc(s)) {
        if (f = s.nextSibling && s.nextSibling.dataset, f) var b = f.dgst;
        f = b, u = Error(c(419)), u.stack = "", u.digest = f, ta({ value: u, source: null, stack: null }), l = If(
          t,
          l,
          e
        );
      } else if (Ht || hu(t, l, e, !1), f = (e & t.childLanes) !== 0, Ht || f) {
        if (f = bt, f !== null && (u = Ts(f, e), u !== 0 && u !== d.retryLane))
          throw d.retryLane = u, xe(t, u), el(f, t, u), Jf;
        Rc(s) || Yn(), l = If(
          t,
          l,
          e
        );
      } else
        Rc(s) ? (l.flags |= 192, l.child = t.child, l = null) : (t = d.treeContext, Et = pl(
          s.nextSibling
        ), Gt = l, ut = !0, se = null, Tl = !1, t !== null && gr(l, t), l = Ff(
          l,
          u.children
        ), l.flags |= 4096);
      return l;
    }
    return a ? (me(), s = u.fallback, a = l.mode, d = t.child, b = d.sibling, u = Xl(d, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = d.subtreeFlags & 65011712, b !== null ? s = Xl(
      b,
      s
    ) : (s = Ge(
      s,
      a,
      e,
      null
    ), s.flags |= 2), s.return = l, u.return = l, u.sibling = s, l.child = u, da(null, u), u = l.child, s = t.child.memoizedState, s === null ? s = kf(e) : (a = s.cachePool, a !== null ? (d = Rt._currentValue, a = a.parent !== d ? { parent: d, pool: d } : a) : a = pr(), s = {
      baseLanes: s.baseLanes | e,
      cachePool: a
    }), u.memoizedState = s, u.childLanes = $f(
      t,
      f,
      e
    ), l.memoizedState = Wf, da(t.child, u)) : (he(l), e = t.child, t = e.sibling, e = Xl(e, {
      mode: "visible",
      children: u.children
    }), e.return = l, e.sibling = null, t !== null && (f = l.deletions, f === null ? (l.deletions = [t], l.flags |= 16) : f.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Ff(t, l) {
    return l = On(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function On(t, l) {
    return t = cl(22, t, null, l), t.lanes = 0, t;
  }
  function If(t, l, e) {
    return Je(l, t.child, null, e), t = Ff(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function xo(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), yf(t.return, l, e);
  }
  function Pf(t, l, e, u, a, n) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: e,
      tailMode: a,
      treeForkCount: n
    } : (f.isBackwards = l, f.rendering = null, f.renderingStartTime = 0, f.last = u, f.tail = e, f.tailMode = a, f.treeForkCount = n);
  }
  function Go(t, l, e) {
    var u = l.pendingProps, a = u.revealOrder, n = u.tail;
    u = u.children;
    var f = Ut.current, s = (f & 2) !== 0;
    if (s ? (f = f & 1 | 2, l.flags |= 128) : f &= 1, B(Ut, f), Qt(t, l, u, e), u = ut ? Pu : 0, !s && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && xo(t, e, l);
        else if (t.tag === 19)
          xo(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (a) {
      case "forwards":
        for (e = l.child, a = null; e !== null; )
          t = e.alternate, t !== null && hn(t) === null && (a = e), e = e.sibling;
        e = a, e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null), Pf(
          l,
          !1,
          a,
          e,
          n,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, a = l.child, l.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && hn(t) === null) {
            l.child = a;
            break;
          }
          t = a.sibling, a.sibling = e, e = a, a = t;
        }
        Pf(
          l,
          !0,
          e,
          null,
          n,
          u
        );
        break;
      case "together":
        Pf(
          l,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Jl(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), be |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (hu(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(c(153));
    if (l.child !== null) {
      for (t = l.child, e = Xl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Xl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function tc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && fn(t)));
  }
  function Hv(t, l, e) {
    switch (l.tag) {
      case 3:
        Kt(l, l.stateNode.containerInfo), oe(l, Rt, t.memoizedState.cache), Xe();
        break;
      case 27:
      case 5:
        xu(l);
        break;
      case 4:
        Kt(l, l.stateNode.containerInfo);
        break;
      case 10:
        oe(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, Af(l), null;
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (he(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? jo(t, l, e) : (he(l), t = Jl(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        he(l);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (u = (e & l.childLanes) !== 0, u || (hu(
          t,
          l,
          e,
          !1
        ), u = (e & l.childLanes) !== 0), a) {
          if (u)
            return Go(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), B(Ut, Ut.current), u) break;
        return null;
      case 22:
        return l.lanes = 0, Ro(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        oe(l, Rt, t.memoizedState.cache);
    }
    return Jl(t, l, e);
  }
  function Xo(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Ht = !0;
      else {
        if (!tc(t, e) && (l.flags & 128) === 0)
          return Ht = !1, Hv(
            t,
            l,
            e
          );
        Ht = (t.flags & 131072) !== 0;
      }
    else
      Ht = !1, ut && (l.flags & 1048576) !== 0 && Sr(l, Pu, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var u = l.pendingProps;
          if (t = Ve(l.elementType), l.type = t, typeof t == "function")
            af(t) ? (u = We(t, u), l.tag = 1, l = qo(
              null,
              l,
              t,
              u,
              e
            )) : (l.tag = 0, l = wf(
              null,
              l,
              t,
              u,
              e
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === W) {
                l.tag = 11, l = Do(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === Q) {
                l.tag = 14, l = Uo(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              }
            }
            throw l = Yl(t) || t, Error(c(306, l, ""));
          }
        }
        return l;
      case 0:
        return wf(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return u = l.type, a = We(
          u,
          l.pendingProps
        ), qo(
          t,
          l,
          u,
          a,
          e
        );
      case 3:
        t: {
          if (Kt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          u = l.pendingProps;
          var n = l.memoizedState;
          a = n.element, _f(t, l), fa(l, u, null, e);
          var f = l.memoizedState;
          if (u = f.cache, oe(l, Rt, u), u !== n.cache && vf(
            l,
            [Rt],
            e,
            !0
          ), ia(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = Yo(
                t,
                l,
                u,
                e
              );
              break t;
            } else if (u !== a) {
              a = bl(
                Error(c(424)),
                l
              ), ta(a), l = Yo(
                t,
                l,
                u,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Et = pl(t.firstChild), Gt = l, ut = !0, se = null, Tl = !0, e = Cr(
                l,
                null,
                u,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Xe(), u === a) {
              l = Jl(
                t,
                l,
                e
              );
              break t;
            }
            Qt(t, l, u, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Mn(t, l), t === null ? (e = Fd(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : ut || (e = l.type, t = l.pendingProps, u = Ln(
          $.current
        ).createElement(e), u[xt] = l, u[$t] = t, Zt(u, e, t), Yt(u), l.stateNode = u) : l.memoizedState = Fd(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return xu(l), t === null && ut && (u = l.stateNode = Wd(
          l.type,
          l.pendingProps,
          $.current
        ), Gt = l, Tl = !0, a = Et, pe(l.type) ? (Hc = a, Et = pl(u.firstChild)) : Et = a), Qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), Mn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && ut && ((a = u = Et) && (u = sh(
          u,
          l.type,
          l.pendingProps,
          Tl
        ), u !== null ? (l.stateNode = u, Gt = l, Et = pl(u.firstChild), Tl = !1, a = !0) : a = !1), a || re(l)), xu(l), a = l.type, n = l.pendingProps, f = t !== null ? t.memoizedProps : null, u = n.children, Dc(a, n) ? u = null : f !== null && Dc(a, f) && (l.flags |= 32), l.memoizedState !== null && (a = Of(
          t,
          l,
          pv,
          null,
          null,
          e
        ), Oa._currentValue = a), Mn(t, l), Qt(t, l, u, e), l.child;
      case 6:
        return t === null && ut && ((t = e = Et) && (e = rh(
          e,
          l.pendingProps,
          Tl
        ), e !== null ? (l.stateNode = e, Gt = l, Et = null, t = !0) : t = !1), t || re(l)), null;
      case 13:
        return jo(t, l, e);
      case 4:
        return Kt(
          l,
          l.stateNode.containerInfo
        ), u = l.pendingProps, t === null ? l.child = Je(
          l,
          null,
          u,
          e
        ) : Qt(t, l, u, e), l.child;
      case 11:
        return Do(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return Qt(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return Qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return u = l.pendingProps, oe(l, l.type, u.value), Qt(t, l, u.children, e), l.child;
      case 9:
        return a = l.type._context, u = l.pendingProps.children, Ze(l), a = Xt(a), u = u(a), l.flags |= 1, Qt(t, l, u, e), l.child;
      case 14:
        return Uo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return Co(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Go(t, l, e);
      case 31:
        return Nv(t, l, e);
      case 22:
        return Ro(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return Ze(l), u = Xt(Rt), t === null ? (a = Sf(), a === null && (a = bt, n = hf(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= e), a = n), l.memoizedState = { parent: u, cache: a }, bf(l), oe(l, Rt, a)) : ((t.lanes & e) !== 0 && (_f(t, l), fa(l, null, null, e), ia()), a = t.memoizedState, n = l.memoizedState, a.parent !== u ? (a = { parent: u, cache: u }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), oe(l, Rt, u)) : (u = n.cache, oe(l, Rt, u), u !== a.cache && vf(
          l,
          [Rt],
          e,
          !0
        ))), Qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(c(156, l.tag));
  }
  function wl(t) {
    t.flags |= 4;
  }
  function lc(t, l, e, u, a) {
    if ((l = (t.mode & 32) !== 0) && (l = !1), l) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (yd()) t.flags |= 8192;
        else
          throw Ke = on, gf;
    } else t.flags &= -16777217;
  }
  function Qo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !ey(l))
      if (yd()) t.flags |= 8192;
      else
        throw Ke = on, gf;
  }
  function Dn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? bs() : 536870912, t.lanes |= l, Ou |= l);
  }
  function ya(t, l) {
    if (!ut)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var u = null; e !== null; )
            e.alternate !== null && (u = e), e = e.sibling;
          u === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : u.sibling = null;
      }
  }
  function Tt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, u = 0;
    if (l)
      for (var a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags & 65011712, u |= a.flags & 65011712, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags, u |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= u, t.childLanes = e, l;
  }
  function Bv(t, l, e) {
    var u = l.pendingProps;
    switch (sf(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tt(l), null;
      case 1:
        return Tt(l), null;
      case 3:
        return e = l.stateNode, u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), Ll(Rt), Dt(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (vu(l) ? wl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, of())), Tt(l), null;
      case 26:
        var a = l.type, n = l.memoizedState;
        return t === null ? (wl(l), n !== null ? (Tt(l), Qo(l, n)) : (Tt(l), lc(
          l,
          a,
          null,
          u,
          e
        ))) : n ? n !== t.memoizedState ? (wl(l), Tt(l), Qo(l, n)) : (Tt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== u && wl(l), Tt(l), lc(
          l,
          a,
          t,
          u,
          e
        )), null;
      case 27:
        if (xa(l), e = $.current, a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && wl(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(c(166));
            return Tt(l), null;
          }
          t = Y.current, vu(l) ? br(l) : (t = Wd(a, u, e), l.stateNode = t, wl(l));
        }
        return Tt(l), null;
      case 5:
        if (xa(l), a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && wl(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(c(166));
            return Tt(l), null;
          }
          if (n = Y.current, vu(l))
            br(l);
          else {
            var f = Ln(
              $.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? f.createElement("select", {
                      is: u.is
                    }) : f.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? f.createElement(a, { is: u.is }) : f.createElement(a);
                }
            }
            n[xt] = l, n[$t] = u;
            t: for (f = l.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === l) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === l)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            l.stateNode = n;
            t: switch (Zt(n, a, u), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break t;
              case "img":
                u = !0;
                break t;
              default:
                u = !1;
            }
            u && wl(l);
          }
        }
        return Tt(l), lc(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== u && wl(l);
        else {
          if (typeof u != "string" && l.stateNode === null)
            throw Error(c(166));
          if (t = $.current, vu(l)) {
            if (t = l.stateNode, e = l.memoizedProps, u = null, a = Gt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            t[xt] = l, t = !!(t.nodeValue === e || u !== null && u.suppressHydrationWarning === !0 || jd(t.nodeValue, e)), t || re(l, !0);
          } else
            t = Ln(t).createTextNode(
              u
            ), t[xt] = l, l.stateNode = t;
        }
        return Tt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (u = vu(l), e !== null) {
            if (t === null) {
              if (!u) throw Error(c(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[xt] = l;
            } else
              Xe(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Tt(l), t = !1;
          } else
            e = of(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (rl(l), l) : (rl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Tt(l), null;
      case 13:
        if (u = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = vu(l), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(c(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(c(317));
              a[xt] = l;
            } else
              Xe(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Tt(l), a = !1;
          } else
            a = of(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (rl(l), l) : (rl(l), null);
        }
        return rl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = u !== null, t = t !== null && t.memoizedState !== null, e && (u = l.child, a = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (a = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== a && (u.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Dn(l, l.updateQueue), Tt(l), null);
      case 4:
        return Dt(), t === null && zc(l.stateNode.containerInfo), Tt(l), null;
      case 10:
        return Ll(l.type), Tt(l), null;
      case 19:
        if (U(Ut), u = l.memoizedState, u === null) return Tt(l), null;
        if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
          if (a) ya(u, !1);
          else {
            if (Mt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = hn(t), n !== null) {
                  for (l.flags |= 128, ya(u, !1), t = n.updateQueue, l.updateQueue = t, Dn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    vr(e, t), e = e.sibling;
                  return B(
                    Ut,
                    Ut.current & 1 | 2
                  ), ut && Ql(l, u.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null && al() > Hn && (l.flags |= 128, a = !0, ya(u, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = hn(n), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, Dn(l, t), ya(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !ut)
                return Tt(l), null;
            } else
              2 * al() - u.renderingStartTime > Hn && e !== 536870912 && (l.flags |= 128, a = !0, ya(u, !1), l.lanes = 4194304);
          u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = al(), t.sibling = null, e = Ut.current, B(
          Ut,
          a ? e & 1 | 2 : e & 1
        ), ut && Ql(l, u.treeForkCount), t) : (Tt(l), null);
      case 22:
      case 23:
        return rl(l), pf(), u = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== u && (l.flags |= 8192) : u && (l.flags |= 8192), u ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Tt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Tt(l), e = l.updateQueue, e !== null && Dn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== e && (l.flags |= 2048), t !== null && U(Le), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Ll(Rt), Tt(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, l.tag));
  }
  function qv(t, l) {
    switch (sf(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Ll(Rt), Dt(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return xa(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (rl(l), l.alternate === null)
            throw Error(c(340));
          Xe();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (rl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(c(340));
          Xe();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return U(Ut), null;
      case 4:
        return Dt(), null;
      case 10:
        return Ll(l.type), null;
      case 22:
      case 23:
        return rl(l), pf(), t !== null && U(Le), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Ll(Rt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zo(t, l) {
    switch (sf(l), l.tag) {
      case 3:
        Ll(Rt), Dt();
        break;
      case 26:
      case 27:
      case 5:
        xa(l);
        break;
      case 4:
        Dt();
        break;
      case 31:
        l.memoizedState !== null && rl(l);
        break;
      case 13:
        rl(l);
        break;
      case 19:
        U(Ut);
        break;
      case 10:
        Ll(l.type);
        break;
      case 22:
      case 23:
        rl(l), pf(), t !== null && U(Le);
        break;
      case 24:
        Ll(Rt);
    }
  }
  function va(t, l) {
    try {
      var e = l.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        e = a;
        do {
          if ((e.tag & t) === t) {
            u = void 0;
            var n = e.create, f = e.inst;
            u = n(), f.destroy = u;
          }
          e = e.next;
        } while (e !== a);
      }
    } catch (s) {
      yt(l, l.return, s);
    }
  }
  function Se(t, l, e) {
    try {
      var u = l.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & t) === t) {
            var f = u.inst, s = f.destroy;
            if (s !== void 0) {
              f.destroy = void 0, a = l;
              var d = e, b = s;
              try {
                b();
              } catch (p) {
                yt(
                  a,
                  d,
                  p
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (p) {
      yt(l, l.return, p);
    }
  }
  function Lo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Nr(l, e);
      } catch (u) {
        yt(t, t.return, u);
      }
    }
  }
  function Vo(t, l, e) {
    e.props = We(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (u) {
      yt(t, l, u);
    }
  }
  function ha(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = t.stateNode;
            break;
          case 30:
            u = t.stateNode;
            break;
          default:
            u = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(u) : e.current = u;
      }
    } catch (a) {
      yt(t, l, a);
    }
  }
  function Bl(t, l) {
    var e = t.ref, u = t.refCleanup;
    if (e !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (a) {
          yt(t, l, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (a) {
          yt(t, l, a);
        }
      else e.current = null;
  }
  function Ko(t) {
    var l = t.type, e = t.memoizedProps, u = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && u.focus();
          break t;
        case "img":
          e.src ? u.src = e.src : e.srcSet && (u.srcset = e.srcSet);
      }
    } catch (a) {
      yt(t, t.return, a);
    }
  }
  function ec(t, l, e) {
    try {
      var u = t.stateNode;
      uh(u, t.type, e, l), u[$t] = l;
    } catch (a) {
      yt(t, t.return, a);
    }
  }
  function Jo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && pe(t.type) || t.tag === 4;
  }
  function uc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Jo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && pe(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ac(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = xl));
    else if (u !== 4 && (u === 27 && pe(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (ac(t, l, e), t = t.sibling; t !== null; )
        ac(t, l, e), t = t.sibling;
  }
  function Un(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (u !== 4 && (u === 27 && pe(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Un(t, l, e), t = t.sibling; t !== null; )
        Un(t, l, e), t = t.sibling;
  }
  function wo(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var u = t.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      Zt(l, u, e), l[xt] = t, l[$t] = e;
    } catch (n) {
      yt(t, t.return, n);
    }
  }
  var Wl = !1, Bt = !1, nc = !1, Wo = typeof WeakSet == "function" ? WeakSet : Set, jt = null;
  function Yv(t, l) {
    if (t = t.containerInfo, Mc = $n, t = nr(t), Fi(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var u = e.getSelection && e.getSelection();
          if (u && u.rangeCount !== 0) {
            e = u.anchorNode;
            var a = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var f = 0, s = -1, d = -1, b = 0, p = 0, D = t, E = null;
            l: for (; ; ) {
              for (var T; D !== e || a !== 0 && D.nodeType !== 3 || (s = f + a), D !== n || u !== 0 && D.nodeType !== 3 || (d = f + u), D.nodeType === 3 && (f += D.nodeValue.length), (T = D.firstChild) !== null; )
                E = D, D = T;
              for (; ; ) {
                if (D === t) break l;
                if (E === e && ++b === a && (s = f), E === n && ++p === u && (d = f), (T = D.nextSibling) !== null) break;
                D = E, E = D.parentNode;
              }
              D = T;
            }
            e = s === -1 || d === -1 ? null : { start: s, end: d };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Oc = { focusedElem: t, selectionRange: e }, $n = !1, jt = l; jt !== null; )
      if (l = jt, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = l, jt = t;
      else
        for (; jt !== null; ) {
          switch (l = jt, n = l.alternate, t = l.flags, l.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (e = 0; e < t.length; e++)
                  a = t[e], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                t = void 0, e = l, a = n.memoizedProps, n = n.memoizedState, u = e.stateNode;
                try {
                  var q = We(
                    e.type,
                    a
                  );
                  t = u.getSnapshotBeforeUpdate(
                    q,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = t;
                } catch (X) {
                  yt(
                    e,
                    e.return,
                    X
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  Cc(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, jt = t;
            break;
          }
          jt = l.return;
        }
  }
  function ko(t, l, e) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        $l(t, e), u & 4 && va(5, e);
        break;
      case 1:
        if ($l(t, e), u & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (f) {
              yt(e, e.return, f);
            }
          else {
            var a = We(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                a,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              yt(
                e,
                e.return,
                f
              );
            }
          }
        u & 64 && Lo(e), u & 512 && ha(e, e.return);
        break;
      case 3:
        if ($l(t, e), u & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Nr(t, l);
          } catch (f) {
            yt(e, e.return, f);
          }
        }
        break;
      case 27:
        l === null && u & 4 && wo(e);
      case 26:
      case 5:
        $l(t, e), l === null && u & 4 && Ko(e), u & 512 && ha(e, e.return);
        break;
      case 12:
        $l(t, e);
        break;
      case 31:
        $l(t, e), u & 4 && Io(t, e);
        break;
      case 13:
        $l(t, e), u & 4 && Po(t, e), u & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Kv.bind(
          null,
          e
        ), oh(t, e))));
        break;
      case 22:
        if (u = e.memoizedState !== null || Wl, !u) {
          l = l !== null && l.memoizedState !== null || Bt, a = Wl;
          var n = Bt;
          Wl = u, (Bt = l) && !n ? Fl(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : $l(t, e), Wl = a, Bt = n;
        }
        break;
      case 30:
        break;
      default:
        $l(t, e);
    }
  }
  function $o(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, $o(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Bi(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var pt = null, It = !1;
  function kl(t, l, e) {
    for (e = e.child; e !== null; )
      Fo(t, l, e), e = e.sibling;
  }
  function Fo(t, l, e) {
    if (nl && typeof nl.onCommitFiberUnmount == "function")
      try {
        nl.onCommitFiberUnmount(Gu, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Bt || Bl(e, l), kl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Bt || Bl(e, l);
        var u = pt, a = It;
        pe(e.type) && (pt = e.stateNode, It = !1), kl(
          t,
          l,
          e
        ), pa(e.stateNode), pt = u, It = a;
        break;
      case 5:
        Bt || Bl(e, l);
      case 6:
        if (u = pt, a = It, pt = null, kl(
          t,
          l,
          e
        ), pt = u, It = a, pt !== null)
          if (It)
            try {
              (pt.nodeType === 9 ? pt.body : pt.nodeName === "HTML" ? pt.ownerDocument.body : pt).removeChild(e.stateNode);
            } catch (n) {
              yt(
                e,
                l,
                n
              );
            }
          else
            try {
              pt.removeChild(e.stateNode);
            } catch (n) {
              yt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        pt !== null && (It ? (t = pt, Ld(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), qu(t)) : Ld(pt, e.stateNode));
        break;
      case 4:
        u = pt, a = It, pt = e.stateNode.containerInfo, It = !0, kl(
          t,
          l,
          e
        ), pt = u, It = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Se(2, e, l), Bt || Se(4, e, l), kl(
          t,
          l,
          e
        );
        break;
      case 1:
        Bt || (Bl(e, l), u = e.stateNode, typeof u.componentWillUnmount == "function" && Vo(
          e,
          l,
          u
        )), kl(
          t,
          l,
          e
        );
        break;
      case 21:
        kl(
          t,
          l,
          e
        );
        break;
      case 22:
        Bt = (u = Bt) || e.memoizedState !== null, kl(
          t,
          l,
          e
        ), Bt = u;
        break;
      default:
        kl(
          t,
          l,
          e
        );
    }
  }
  function Io(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        qu(t);
      } catch (e) {
        yt(l, l.return, e);
      }
    }
  }
  function Po(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        qu(t);
      } catch (e) {
        yt(l, l.return, e);
      }
  }
  function jv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Wo()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Wo()), l;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function Cn(t, l) {
    var e = jv(t);
    l.forEach(function(u) {
      if (!e.has(u)) {
        e.add(u);
        var a = Jv.bind(null, t, u);
        u.then(a, a);
      }
    });
  }
  function Pt(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = e[u], n = t, f = l, s = f;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (pe(s.type)) {
                pt = s.stateNode, It = !1;
                break t;
              }
              break;
            case 5:
              pt = s.stateNode, It = !1;
              break t;
            case 3:
            case 4:
              pt = s.stateNode.containerInfo, It = !0;
              break t;
          }
          s = s.return;
        }
        if (pt === null) throw Error(c(160));
        Fo(n, f, a), pt = null, It = !1, n = a.alternate, n !== null && (n.return = null), a.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        td(l, t), l = l.sibling;
  }
  var Dl = null;
  function td(t, l) {
    var e = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pt(l, t), tl(t), u & 4 && (Se(3, t, t.return), va(3, t), Se(5, t, t.return));
        break;
      case 1:
        Pt(l, t), tl(t), u & 512 && (Bt || e === null || Bl(e, e.return)), u & 64 && Wl && (t = t.updateQueue, t !== null && (u = t.callbacks, u !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? u : e.concat(u))));
        break;
      case 26:
        var a = Dl;
        if (Pt(l, t), tl(t), u & 512 && (Bt || e === null || Bl(e, e.return)), u & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (u = t.memoizedState, e === null)
            if (u === null)
              if (t.stateNode === null) {
                t: {
                  u = t.type, e = t.memoizedProps, a = a.ownerDocument || a;
                  l: switch (u) {
                    case "title":
                      n = a.getElementsByTagName("title")[0], (!n || n[Zu] || n[xt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = a.createElement(u), a.head.insertBefore(
                        n,
                        a.querySelector("head > title")
                      )), Zt(n, u, e), n[xt] = t, Yt(n), u = n;
                      break t;
                    case "link":
                      var f = ty(
                        "link",
                        "href",
                        a
                      ).get(u + (e.href || ""));
                      if (f) {
                        for (var s = 0; s < f.length; s++)
                          if (n = f[s], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            f.splice(s, 1);
                            break l;
                          }
                      }
                      n = a.createElement(u), Zt(n, u, e), a.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = ty(
                        "meta",
                        "content",
                        a
                      ).get(u + (e.content || ""))) {
                        for (s = 0; s < f.length; s++)
                          if (n = f[s], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            f.splice(s, 1);
                            break l;
                          }
                      }
                      n = a.createElement(u), Zt(n, u, e), a.head.appendChild(n);
                      break;
                    default:
                      throw Error(c(468, u));
                  }
                  n[xt] = t, Yt(n), u = n;
                }
                t.stateNode = u;
              } else
                ly(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Pd(
                a,
                u,
                t.memoizedProps
              );
          else
            n !== u ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, u === null ? ly(
              a,
              t.type,
              t.stateNode
            ) : Pd(
              a,
              u,
              t.memoizedProps
            )) : u === null && t.stateNode !== null && ec(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        Pt(l, t), tl(t), u & 512 && (Bt || e === null || Bl(e, e.return)), e !== null && u & 4 && ec(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (Pt(l, t), tl(t), u & 512 && (Bt || e === null || Bl(e, e.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            au(a, "");
          } catch (q) {
            yt(t, t.return, q);
          }
        }
        u & 4 && t.stateNode != null && (a = t.memoizedProps, ec(
          t,
          a,
          e !== null ? e.memoizedProps : a
        )), u & 1024 && (nc = !0);
        break;
      case 6:
        if (Pt(l, t), tl(t), u & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          u = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = u;
          } catch (q) {
            yt(t, t.return, q);
          }
        }
        break;
      case 3:
        if (Jn = null, a = Dl, Dl = Vn(l.containerInfo), Pt(l, t), Dl = a, tl(t), u & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            qu(l.containerInfo);
          } catch (q) {
            yt(t, t.return, q);
          }
        nc && (nc = !1, ld(t));
        break;
      case 4:
        u = Dl, Dl = Vn(
          t.stateNode.containerInfo
        ), Pt(l, t), tl(t), Dl = u;
        break;
      case 12:
        Pt(l, t), tl(t);
        break;
      case 31:
        Pt(l, t), tl(t), u & 4 && (u = t.updateQueue, u !== null && (t.updateQueue = null, Cn(t, u)));
        break;
      case 13:
        Pt(l, t), tl(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Nn = al()), u & 4 && (u = t.updateQueue, u !== null && (t.updateQueue = null, Cn(t, u)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var d = e !== null && e.memoizedState !== null, b = Wl, p = Bt;
        if (Wl = b || a, Bt = p || d, Pt(l, t), Bt = p, Wl = b, tl(t), u & 8192)
          t: for (l = t.stateNode, l._visibility = a ? l._visibility & -2 : l._visibility | 1, a && (e === null || d || Wl || Bt || ke(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                d = e = l;
                try {
                  if (n = d.stateNode, a)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    s = d.stateNode;
                    var D = d.memoizedProps.style, E = D != null && D.hasOwnProperty("display") ? D.display : null;
                    s.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                  }
                } catch (q) {
                  yt(d, d.return, q);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                d = l;
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (q) {
                  yt(d, d.return, q);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                d = l;
                try {
                  var T = d.stateNode;
                  a ? Vd(T, !0) : Vd(d.stateNode, !1);
                } catch (q) {
                  yt(d, d.return, q);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        u & 4 && (u = t.updateQueue, u !== null && (e = u.retryQueue, e !== null && (u.retryQueue = null, Cn(t, e))));
        break;
      case 19:
        Pt(l, t), tl(t), u & 4 && (u = t.updateQueue, u !== null && (t.updateQueue = null, Cn(t, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pt(l, t), tl(t);
    }
  }
  function tl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, u = t.return; u !== null; ) {
          if (Jo(u)) {
            e = u;
            break;
          }
          u = u.return;
        }
        if (e == null) throw Error(c(160));
        switch (e.tag) {
          case 27:
            var a = e.stateNode, n = uc(t);
            Un(t, n, a);
            break;
          case 5:
            var f = e.stateNode;
            e.flags & 32 && (au(f, ""), e.flags &= -33);
            var s = uc(t);
            Un(t, s, f);
            break;
          case 3:
          case 4:
            var d = e.stateNode.containerInfo, b = uc(t);
            ac(
              t,
              b,
              d
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (p) {
        yt(t, t.return, p);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function ld(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        ld(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function $l(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        ko(t, l.alternate, l), l = l.sibling;
  }
  function ke(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Se(4, l, l.return), ke(l);
          break;
        case 1:
          Bl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && Vo(
            l,
            l.return,
            e
          ), ke(l);
          break;
        case 27:
          pa(l.stateNode);
        case 26:
        case 5:
          Bl(l, l.return), ke(l);
          break;
        case 22:
          l.memoizedState === null && ke(l);
          break;
        case 30:
          ke(l);
          break;
        default:
          ke(l);
      }
      t = t.sibling;
    }
  }
  function Fl(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var u = l.alternate, a = t, n = l, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Fl(
            a,
            n,
            e
          ), va(4, n);
          break;
        case 1:
          if (Fl(
            a,
            n,
            e
          ), u = n, a = u.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (b) {
              yt(u, u.return, b);
            }
          if (u = n, a = u.updateQueue, a !== null) {
            var s = u.stateNode;
            try {
              var d = a.shared.hiddenCallbacks;
              if (d !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < d.length; a++)
                  Rr(d[a], s);
            } catch (b) {
              yt(u, u.return, b);
            }
          }
          e && f & 64 && Lo(n), ha(n, n.return);
          break;
        case 27:
          wo(n);
        case 26:
        case 5:
          Fl(
            a,
            n,
            e
          ), e && u === null && f & 4 && Ko(n), ha(n, n.return);
          break;
        case 12:
          Fl(
            a,
            n,
            e
          );
          break;
        case 31:
          Fl(
            a,
            n,
            e
          ), e && f & 4 && Io(a, n);
          break;
        case 13:
          Fl(
            a,
            n,
            e
          ), e && f & 4 && Po(a, n);
          break;
        case 22:
          n.memoizedState === null && Fl(
            a,
            n,
            e
          ), ha(n, n.return);
          break;
        case 30:
          break;
        default:
          Fl(
            a,
            n,
            e
          );
      }
      l = l.sibling;
    }
  }
  function ic(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && la(e));
  }
  function fc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && la(t));
  }
  function Ul(t, l, e, u) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ed(
          t,
          l,
          e,
          u
        ), l = l.sibling;
  }
  function ed(t, l, e, u) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ul(
          t,
          l,
          e,
          u
        ), a & 2048 && va(9, l);
        break;
      case 1:
        Ul(
          t,
          l,
          e,
          u
        );
        break;
      case 3:
        Ul(
          t,
          l,
          e,
          u
        ), a & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && la(t)));
        break;
      case 12:
        if (a & 2048) {
          Ul(
            t,
            l,
            e,
            u
          ), t = l.stateNode;
          try {
            var n = l.memoizedProps, f = n.id, s = n.onPostCommit;
            typeof s == "function" && s(
              f,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (d) {
            yt(l, l.return, d);
          }
        } else
          Ul(
            t,
            l,
            e,
            u
          );
        break;
      case 31:
        Ul(
          t,
          l,
          e,
          u
        );
        break;
      case 13:
        Ul(
          t,
          l,
          e,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, f = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? Ul(
          t,
          l,
          e,
          u
        ) : ma(t, l) : n._visibility & 2 ? Ul(
          t,
          l,
          e,
          u
        ) : (n._visibility |= 2, pu(
          t,
          l,
          e,
          u,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && ic(f, l);
        break;
      case 24:
        Ul(
          t,
          l,
          e,
          u
        ), a & 2048 && fc(l.alternate, l);
        break;
      default:
        Ul(
          t,
          l,
          e,
          u
        );
    }
  }
  function pu(t, l, e, u, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, f = l, s = e, d = u, b = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          pu(
            n,
            f,
            s,
            d,
            a
          ), va(8, f);
          break;
        case 23:
          break;
        case 22:
          var p = f.stateNode;
          f.memoizedState !== null ? p._visibility & 2 ? pu(
            n,
            f,
            s,
            d,
            a
          ) : ma(
            n,
            f
          ) : (p._visibility |= 2, pu(
            n,
            f,
            s,
            d,
            a
          )), a && b & 2048 && ic(
            f.alternate,
            f
          );
          break;
        case 24:
          pu(
            n,
            f,
            s,
            d,
            a
          ), a && b & 2048 && fc(f.alternate, f);
          break;
        default:
          pu(
            n,
            f,
            s,
            d,
            a
          );
      }
      l = l.sibling;
    }
  }
  function ma(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, u = l, a = u.flags;
        switch (u.tag) {
          case 22:
            ma(e, u), a & 2048 && ic(
              u.alternate,
              u
            );
            break;
          case 24:
            ma(e, u), a & 2048 && fc(u.alternate, u);
            break;
          default:
            ma(e, u);
        }
        l = l.sibling;
      }
  }
  var Sa = 8192;
  function Au(t, l, e) {
    if (t.subtreeFlags & Sa)
      for (t = t.child; t !== null; )
        ud(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function ud(t, l, e) {
    switch (t.tag) {
      case 26:
        Au(
          t,
          l,
          e
        ), t.flags & Sa && t.memoizedState !== null && zh(
          e,
          Dl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Au(
          t,
          l,
          e
        );
        break;
      case 3:
      case 4:
        var u = Dl;
        Dl = Vn(t.stateNode.containerInfo), Au(
          t,
          l,
          e
        ), Dl = u;
        break;
      case 22:
        t.memoizedState === null && (u = t.alternate, u !== null && u.memoizedState !== null ? (u = Sa, Sa = 16777216, Au(
          t,
          l,
          e
        ), Sa = u) : Au(
          t,
          l,
          e
        ));
        break;
      default:
        Au(
          t,
          l,
          e
        );
    }
  }
  function ad(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function ga(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          jt = u, id(
            u,
            t
          );
        }
      ad(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        nd(t), t = t.sibling;
  }
  function nd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ga(t), t.flags & 2048 && Se(9, t, t.return);
        break;
      case 3:
        ga(t);
        break;
      case 12:
        ga(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Rn(t)) : ga(t);
        break;
      default:
        ga(t);
    }
  }
  function Rn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          jt = u, id(
            u,
            t
          );
        }
      ad(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          Se(8, l, l.return), Rn(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Rn(l));
          break;
        default:
          Rn(l);
      }
      t = t.sibling;
    }
  }
  function id(t, l) {
    for (; jt !== null; ) {
      var e = jt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Se(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var u = e.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          la(e.memoizedState.cache);
      }
      if (u = e.child, u !== null) u.return = e, jt = u;
      else
        t: for (e = t; jt !== null; ) {
          u = jt;
          var a = u.sibling, n = u.return;
          if ($o(u), u === e) {
            jt = null;
            break t;
          }
          if (a !== null) {
            a.return = n, jt = a;
            break t;
          }
          jt = n;
        }
    }
  }
  var xv = {
    getCacheForType: function(t) {
      var l = Xt(Rt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Xt(Rt).controller.signal;
    }
  }, Gv = typeof WeakMap == "function" ? WeakMap : Map, ct = 0, bt = null, F = null, lt = 0, dt = 0, ol = null, ge = !1, Mu = !1, cc = !1, Il = 0, Mt = 0, be = 0, $e = 0, sc = 0, dl = 0, Ou = 0, ba = null, ll = null, rc = !1, Nn = 0, fd = 0, Hn = 1 / 0, Bn = null, _e = null, qt = 0, Ee = null, Du = null, Pl = 0, oc = 0, dc = null, cd = null, _a = 0, yc = null;
  function yl() {
    return (ct & 2) !== 0 && lt !== 0 ? lt & -lt : A.T !== null ? bc() : zs();
  }
  function sd() {
    if (dl === 0)
      if ((lt & 536870912) === 0 || ut) {
        var t = Qa;
        Qa <<= 1, (Qa & 3932160) === 0 && (Qa = 262144), dl = t;
      } else dl = 536870912;
    return t = sl.current, t !== null && (t.flags |= 32), dl;
  }
  function el(t, l, e) {
    (t === bt && (dt === 2 || dt === 9) || t.cancelPendingCommit !== null) && (Uu(t, 0), Te(
      t,
      lt,
      dl,
      !1
    )), Qu(t, e), ((ct & 2) === 0 || t !== bt) && (t === bt && ((ct & 2) === 0 && ($e |= e), Mt === 4 && Te(
      t,
      lt,
      dl,
      !1
    )), ql(t));
  }
  function rd(t, l, e) {
    if ((ct & 6) !== 0) throw Error(c(327));
    var u = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || Xu(t, l), a = u ? Zv(t, l) : hc(t, l, !0), n = u;
    do {
      if (a === 0) {
        Mu && !u && Te(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !Xv(e)) {
          a = hc(t, l, !1), n = !1;
          continue;
        }
        if (a === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            l = f;
            t: {
              var s = t;
              a = ba;
              var d = s.current.memoizedState.isDehydrated;
              if (d && (Uu(s, f).flags |= 256), f = hc(
                s,
                f,
                !1
              ), f !== 2) {
                if (cc && !d) {
                  s.errorRecoveryDisabledLanes |= n, $e |= n, a = 4;
                  break t;
                }
                n = ll, ll = a, n !== null && (ll === null ? ll = n : ll.push.apply(
                  ll,
                  n
                ));
              }
              a = f;
            }
            if (n = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Uu(t, 0), Te(t, l, 0, !0);
          break;
        }
        t: {
          switch (u = t, n = a, n) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              Te(
                u,
                l,
                dl,
                !ge
              );
              break t;
            case 2:
              ll = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((l & 62914560) === l && (a = Nn + 300 - al(), 10 < a)) {
            if (Te(
              u,
              l,
              dl,
              !ge
            ), La(u, 0, !0) !== 0) break t;
            Pl = l, u.timeoutHandle = Qd(
              od.bind(
                null,
                u,
                e,
                ll,
                Bn,
                rc,
                l,
                dl,
                $e,
                Ou,
                ge,
                n,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          od(
            u,
            e,
            ll,
            Bn,
            rc,
            l,
            dl,
            $e,
            Ou,
            ge,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ql(t);
  }
  function od(t, l, e, u, a, n, f, s, d, b, p, D, E, T) {
    if (t.timeoutHandle = -1, D = l.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
      D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xl
      }, ud(
        l,
        n,
        D
      );
      var q = (n & 62914560) === n ? Nn - al() : (n & 4194048) === n ? fd - al() : 0;
      if (q = ph(
        D,
        q
      ), q !== null) {
        Pl = n, t.cancelPendingCommit = q(
          bd.bind(
            null,
            t,
            l,
            n,
            e,
            u,
            a,
            f,
            s,
            d,
            p,
            D,
            null,
            E,
            T
          )
        ), Te(t, n, f, !b);
        return;
      }
    }
    bd(
      t,
      l,
      n,
      e,
      u,
      a,
      f,
      s,
      d
    );
  }
  function Xv(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var u = 0; u < e.length; u++) {
          var a = e[u], n = a.getSnapshot;
          a = a.value;
          try {
            if (!fl(n(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function Te(t, l, e, u) {
    l &= ~sc, l &= ~$e, t.suspendedLanes |= l, t.pingedLanes &= ~l, u && (t.warmLanes |= l), u = t.expirationTimes;
    for (var a = l; 0 < a; ) {
      var n = 31 - il(a), f = 1 << n;
      u[n] = -1, a &= ~f;
    }
    e !== 0 && _s(t, e, l);
  }
  function qn() {
    return (ct & 6) === 0 ? (Ea(0), !1) : !0;
  }
  function vc() {
    if (F !== null) {
      if (dt === 0)
        var t = F.return;
      else
        t = F, Zl = Qe = null, Cf(t), bu = null, ua = 0, t = F;
      for (; t !== null; )
        Zo(t.alternate, t), t = t.return;
      F = null;
    }
  }
  function Uu(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, ih(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Pl = 0, vc(), bt = t, F = e = Xl(t.current, null), lt = l, dt = 0, ol = null, ge = !1, Mu = Xu(t, l), cc = !1, Ou = dl = sc = $e = be = Mt = 0, ll = ba = null, rc = !1, (l & 8) !== 0 && (l |= l & 32);
    var u = t.entangledLanes;
    if (u !== 0)
      for (t = t.entanglements, u &= l; 0 < u; ) {
        var a = 31 - il(u), n = 1 << a;
        l |= t[a], u &= ~n;
      }
    return Il = l, ln(), e;
  }
  function dd(t, l) {
    J = null, A.H = oa, l === gu || l === rn ? (l = Or(), dt = 3) : l === gf ? (l = Or(), dt = 4) : dt = l === Jf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ol = l, F === null && (Mt = 1, pn(
      t,
      bl(l, t.current)
    ));
  }
  function yd() {
    var t = sl.current;
    return t === null ? !0 : (lt & 4194048) === lt ? zl === null : (lt & 62914560) === lt || (lt & 536870912) !== 0 ? t === zl : !1;
  }
  function vd() {
    var t = A.H;
    return A.H = oa, t === null ? oa : t;
  }
  function hd() {
    var t = A.A;
    return A.A = xv, t;
  }
  function Yn() {
    Mt = 4, ge || (lt & 4194048) !== lt && sl.current !== null || (Mu = !0), (be & 134217727) === 0 && ($e & 134217727) === 0 || bt === null || Te(
      bt,
      lt,
      dl,
      !1
    );
  }
  function hc(t, l, e) {
    var u = ct;
    ct |= 2;
    var a = vd(), n = hd();
    (bt !== t || lt !== l) && (Bn = null, Uu(t, l)), l = !1;
    var f = Mt;
    t: do
      try {
        if (dt !== 0 && F !== null) {
          var s = F, d = ol;
          switch (dt) {
            case 8:
              vc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              sl.current === null && (l = !0);
              var b = dt;
              if (dt = 0, ol = null, Cu(t, s, d, b), e && Mu) {
                f = 0;
                break t;
              }
              break;
            default:
              b = dt, dt = 0, ol = null, Cu(t, s, d, b);
          }
        }
        Qv(), f = Mt;
        break;
      } catch (p) {
        dd(t, p);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Zl = Qe = null, ct = u, A.H = a, A.A = n, F === null && (bt = null, lt = 0, ln()), f;
  }
  function Qv() {
    for (; F !== null; ) md(F);
  }
  function Zv(t, l) {
    var e = ct;
    ct |= 2;
    var u = vd(), a = hd();
    bt !== t || lt !== l ? (Bn = null, Hn = al() + 500, Uu(t, l)) : Mu = Xu(
      t,
      l
    );
    t: do
      try {
        if (dt !== 0 && F !== null) {
          l = F;
          var n = ol;
          l: switch (dt) {
            case 1:
              dt = 0, ol = null, Cu(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Ar(n)) {
                dt = 0, ol = null, Sd(l);
                break;
              }
              l = function() {
                dt !== 2 && dt !== 9 || bt !== t || (dt = 7), ql(t);
              }, n.then(l, l);
              break t;
            case 3:
              dt = 7;
              break t;
            case 4:
              dt = 5;
              break t;
            case 7:
              Ar(n) ? (dt = 0, ol = null, Sd(l)) : (dt = 0, ol = null, Cu(t, l, n, 7));
              break;
            case 5:
              var f = null;
              switch (F.tag) {
                case 26:
                  f = F.memoizedState;
                case 5:
                case 27:
                  var s = F;
                  if (f ? ey(f) : s.stateNode.complete) {
                    dt = 0, ol = null;
                    var d = s.sibling;
                    if (d !== null) F = d;
                    else {
                      var b = s.return;
                      b !== null ? (F = b, jn(b)) : F = null;
                    }
                    break l;
                  }
              }
              dt = 0, ol = null, Cu(t, l, n, 5);
              break;
            case 6:
              dt = 0, ol = null, Cu(t, l, n, 6);
              break;
            case 8:
              vc(), Mt = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        Lv();
        break;
      } catch (p) {
        dd(t, p);
      }
    while (!0);
    return Zl = Qe = null, A.H = u, A.A = a, ct = e, F !== null ? 0 : (bt = null, lt = 0, ln(), Mt);
  }
  function Lv() {
    for (; F !== null && !d0(); )
      md(F);
  }
  function md(t) {
    var l = Xo(t.alternate, t, Il);
    t.memoizedProps = t.pendingProps, l === null ? jn(t) : F = l;
  }
  function Sd(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Bo(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          lt
        );
        break;
      case 11:
        l = Bo(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          lt
        );
        break;
      case 5:
        Cf(l);
      default:
        Zo(e, l), l = F = vr(l, Il), l = Xo(e, l, Il);
    }
    t.memoizedProps = t.pendingProps, l === null ? jn(t) : F = l;
  }
  function Cu(t, l, e, u) {
    Zl = Qe = null, Cf(l), bu = null, ua = 0;
    var a = l.return;
    try {
      if (Rv(
        t,
        a,
        l,
        e,
        lt
      )) {
        Mt = 1, pn(
          t,
          bl(e, t.current)
        ), F = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw F = a, n;
      Mt = 1, pn(
        t,
        bl(e, t.current)
      ), F = null;
      return;
    }
    l.flags & 32768 ? (ut || u === 1 ? t = !0 : Mu || (lt & 536870912) !== 0 ? t = !1 : (ge = t = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = sl.current, u !== null && u.tag === 13 && (u.flags |= 16384))), gd(l, t)) : jn(l);
  }
  function jn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        gd(
          l,
          ge
        );
        return;
      }
      t = l.return;
      var e = Bv(
        l.alternate,
        l,
        Il
      );
      if (e !== null) {
        F = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        F = l;
        return;
      }
      F = l = t;
    } while (l !== null);
    Mt === 0 && (Mt = 5);
  }
  function gd(t, l) {
    do {
      var e = qv(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, F = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        F = t;
        return;
      }
      F = t = e;
    } while (t !== null);
    Mt = 6, F = null;
  }
  function bd(t, l, e, u, a, n, f, s, d) {
    t.cancelPendingCommit = null;
    do
      xn();
    while (qt !== 0);
    if ((ct & 6) !== 0) throw Error(c(327));
    if (l !== null) {
      if (l === t.current) throw Error(c(177));
      if (n = l.lanes | l.childLanes, n |= ef, T0(
        t,
        e,
        n,
        f,
        s,
        d
      ), t === bt && (F = bt = null, lt = 0), Du = l, Ee = t, Pl = e, oc = n, dc = a, cd = u, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, wv(Ga, function() {
        return pd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), u = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || u) {
        u = A.T, A.T = null, a = H.p, H.p = 2, f = ct, ct |= 4;
        try {
          Yv(t, l, e);
        } finally {
          ct = f, H.p = a, A.T = u;
        }
      }
      qt = 1, _d(), Ed(), Td();
    }
  }
  function _d() {
    if (qt === 1) {
      qt = 0;
      var t = Ee, l = Du, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = A.T, A.T = null;
        var u = H.p;
        H.p = 2;
        var a = ct;
        ct |= 4;
        try {
          td(l, t);
          var n = Oc, f = nr(t.containerInfo), s = n.focusedElem, d = n.selectionRange;
          if (f !== s && s && s.ownerDocument && ar(
            s.ownerDocument.documentElement,
            s
          )) {
            if (d !== null && Fi(s)) {
              var b = d.start, p = d.end;
              if (p === void 0 && (p = b), "selectionStart" in s)
                s.selectionStart = b, s.selectionEnd = Math.min(
                  p,
                  s.value.length
                );
              else {
                var D = s.ownerDocument || document, E = D && D.defaultView || window;
                if (E.getSelection) {
                  var T = E.getSelection(), q = s.textContent.length, X = Math.min(d.start, q), St = d.end === void 0 ? X : Math.min(d.end, q);
                  !T.extend && X > St && (f = St, St = X, X = f);
                  var m = ur(
                    s,
                    X
                  ), y = ur(
                    s,
                    St
                  );
                  if (m && y && (T.rangeCount !== 1 || T.anchorNode !== m.node || T.anchorOffset !== m.offset || T.focusNode !== y.node || T.focusOffset !== y.offset)) {
                    var g = D.createRange();
                    g.setStart(m.node, m.offset), T.removeAllRanges(), X > St ? (T.addRange(g), T.extend(y.node, y.offset)) : (g.setEnd(y.node, y.offset), T.addRange(g));
                  }
                }
              }
            }
            for (D = [], T = s; T = T.parentNode; )
              T.nodeType === 1 && D.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < D.length; s++) {
              var M = D[s];
              M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
            }
          }
          $n = !!Mc, Oc = Mc = null;
        } finally {
          ct = a, H.p = u, A.T = e;
        }
      }
      t.current = l, qt = 2;
    }
  }
  function Ed() {
    if (qt === 2) {
      qt = 0;
      var t = Ee, l = Du, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = A.T, A.T = null;
        var u = H.p;
        H.p = 2;
        var a = ct;
        ct |= 4;
        try {
          ko(t, l.alternate, l);
        } finally {
          ct = a, H.p = u, A.T = e;
        }
      }
      qt = 3;
    }
  }
  function Td() {
    if (qt === 4 || qt === 3) {
      qt = 0, y0();
      var t = Ee, l = Du, e = Pl, u = cd;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? qt = 5 : (qt = 0, Du = Ee = null, zd(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (_e = null), Ni(e), l = l.stateNode, nl && typeof nl.onCommitFiberRoot == "function")
        try {
          nl.onCommitFiberRoot(
            Gu,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        l = A.T, a = H.p, H.p = 2, A.T = null;
        try {
          for (var n = t.onRecoverableError, f = 0; f < u.length; f++) {
            var s = u[f];
            n(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          A.T = l, H.p = a;
        }
      }
      (Pl & 3) !== 0 && xn(), ql(t), a = t.pendingLanes, (e & 261930) !== 0 && (a & 42) !== 0 ? t === yc ? _a++ : (_a = 0, yc = t) : _a = 0, Ea(0);
    }
  }
  function zd(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, la(l)));
  }
  function xn() {
    return _d(), Ed(), Td(), pd();
  }
  function pd() {
    if (qt !== 5) return !1;
    var t = Ee, l = oc;
    oc = 0;
    var e = Ni(Pl), u = A.T, a = H.p;
    try {
      H.p = 32 > e ? 32 : e, A.T = null, e = dc, dc = null;
      var n = Ee, f = Pl;
      if (qt = 0, Du = Ee = null, Pl = 0, (ct & 6) !== 0) throw Error(c(331));
      var s = ct;
      if (ct |= 4, nd(n.current), ed(
        n,
        n.current,
        f,
        e
      ), ct = s, Ea(0, !1), nl && typeof nl.onPostCommitFiberRoot == "function")
        try {
          nl.onPostCommitFiberRoot(Gu, n);
        } catch {
        }
      return !0;
    } finally {
      H.p = a, A.T = u, zd(t, l);
    }
  }
  function Ad(t, l, e) {
    l = bl(e, l), l = Kf(t.stateNode, l, 2), t = ve(t, l, 2), t !== null && (Qu(t, 2), ql(t));
  }
  function yt(t, l, e) {
    if (t.tag === 3)
      Ad(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Ad(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var u = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (_e === null || !_e.has(u))) {
            t = bl(e, t), e = Mo(2), u = ve(l, e, 2), u !== null && (Oo(
              e,
              u,
              l,
              t
            ), Qu(u, 2), ql(u));
            break;
          }
        }
        l = l.return;
      }
  }
  function mc(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new Gv();
      var a = /* @__PURE__ */ new Set();
      u.set(l, a);
    } else
      a = u.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), u.set(l, a));
    a.has(e) || (cc = !0, a.add(e), t = Vv.bind(null, t, l, e), l.then(t, t));
  }
  function Vv(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, bt === t && (lt & e) === e && (Mt === 4 || Mt === 3 && (lt & 62914560) === lt && 300 > al() - Nn ? (ct & 2) === 0 && Uu(t, 0) : sc |= e, Ou === lt && (Ou = 0)), ql(t);
  }
  function Md(t, l) {
    l === 0 && (l = bs()), t = xe(t, l), t !== null && (Qu(t, l), ql(t));
  }
  function Kv(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Md(t, e);
  }
  function Jv(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var u = t.stateNode, a = t.memoizedState;
        a !== null && (e = a.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      case 22:
        u = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    u !== null && u.delete(l), Md(t, e);
  }
  function wv(t, l) {
    return Di(t, l);
  }
  var Gn = null, Ru = null, Sc = !1, Xn = !1, gc = !1, ze = 0;
  function ql(t) {
    t !== Ru && t.next === null && (Ru === null ? Gn = Ru = t : Ru = Ru.next = t), Xn = !0, Sc || (Sc = !0, kv());
  }
  function Ea(t, l) {
    if (!gc && Xn) {
      gc = !0;
      do
        for (var e = !1, u = Gn; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var f = u.suspendedLanes, s = u.pingedLanes;
              n = (1 << 31 - il(42 | t) + 1) - 1, n &= a & ~(f & ~s), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Cd(u, n));
          } else
            n = lt, n = La(
              u,
              u === bt ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Xu(u, n) || (e = !0, Cd(u, n));
          u = u.next;
        }
      while (e);
      gc = !1;
    }
  }
  function Wv() {
    Od();
  }
  function Od() {
    Xn = Sc = !1;
    var t = 0;
    ze !== 0 && nh() && (t = ze);
    for (var l = al(), e = null, u = Gn; u !== null; ) {
      var a = u.next, n = Dd(u, l);
      n === 0 ? (u.next = null, e === null ? Gn = a : e.next = a, a === null && (Ru = e)) : (e = u, (t !== 0 || (n & 3) !== 0) && (Xn = !0)), u = a;
    }
    qt !== 0 && qt !== 5 || Ea(t), ze !== 0 && (ze = 0);
  }
  function Dd(t, l) {
    for (var e = t.suspendedLanes, u = t.pingedLanes, a = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - il(n), s = 1 << f, d = a[f];
      d === -1 ? ((s & e) === 0 || (s & u) !== 0) && (a[f] = E0(s, l)) : d <= l && (t.expiredLanes |= s), n &= ~s;
    }
    if (l = bt, e = lt, e = La(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u = t.callbackNode, e === 0 || t === l && (dt === 2 || dt === 9) || t.cancelPendingCommit !== null)
      return u !== null && u !== null && Ui(u), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Xu(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (u !== null && Ui(u), Ni(e)) {
        case 2:
        case 8:
          e = Ss;
          break;
        case 32:
          e = Ga;
          break;
        case 268435456:
          e = gs;
          break;
        default:
          e = Ga;
      }
      return u = Ud.bind(null, t), e = Di(e, u), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return u !== null && u !== null && Ui(u), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Ud(t, l) {
    if (qt !== 0 && qt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (xn() && t.callbackNode !== e)
      return null;
    var u = lt;
    return u = La(
      t,
      t === bt ? u : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u === 0 ? null : (rd(t, u, l), Dd(t, al()), t.callbackNode != null && t.callbackNode === e ? Ud.bind(null, t) : null);
  }
  function Cd(t, l) {
    if (xn()) return null;
    rd(t, l, !0);
  }
  function kv() {
    fh(function() {
      (ct & 6) !== 0 ? Di(
        ms,
        Wv
      ) : Od();
    });
  }
  function bc() {
    if (ze === 0) {
      var t = mu;
      t === 0 && (t = Xa, Xa <<= 1, (Xa & 261888) === 0 && (Xa = 256)), ze = t;
    }
    return ze;
  }
  function Rd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : wa("" + t);
  }
  function Nd(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function $v(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = Rd(
        (a[$t] || null).action
      ), f = u.submitter;
      f && (l = (l = f[$t] || null) ? Rd(l.formAction) : f.getAttribute("formAction"), l !== null && (n = l, f = null));
      var s = new Fa(
        "action",
        "action",
        null,
        u,
        a
      );
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ze !== 0) {
                  var d = f ? Nd(a, f) : new FormData(a);
                  Gf(
                    e,
                    {
                      pending: !0,
                      data: d,
                      method: a.method,
                      action: n
                    },
                    null,
                    d
                  );
                }
              } else
                typeof n == "function" && (s.preventDefault(), d = f ? Nd(a, f) : new FormData(a), Gf(
                  e,
                  {
                    pending: !0,
                    data: d,
                    method: a.method,
                    action: n
                  },
                  n,
                  d
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var _c = 0; _c < lf.length; _c++) {
    var Ec = lf[_c], Fv = Ec.toLowerCase(), Iv = Ec[0].toUpperCase() + Ec.slice(1);
    Ol(
      Fv,
      "on" + Iv
    );
  }
  Ol(cr, "onAnimationEnd"), Ol(sr, "onAnimationIteration"), Ol(rr, "onAnimationStart"), Ol("dblclick", "onDoubleClick"), Ol("focusin", "onFocus"), Ol("focusout", "onBlur"), Ol(vv, "onTransitionRun"), Ol(hv, "onTransitionStart"), Ol(mv, "onTransitionCancel"), Ol(or, "onTransitionEnd"), eu("onMouseEnter", ["mouseout", "mouseover"]), eu("onMouseLeave", ["mouseout", "mouseover"]), eu("onPointerEnter", ["pointerout", "pointerover"]), eu("onPointerLeave", ["pointerout", "pointerover"]), Be(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Be(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Be("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Be(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Be(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Be(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ta = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Pv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ta)
  );
  function Hd(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var u = t[e], a = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var f = u.length - 1; 0 <= f; f--) {
            var s = u[f], d = s.instance, b = s.currentTarget;
            if (s = s.listener, d !== n && a.isPropagationStopped())
              break t;
            n = s, a.currentTarget = b;
            try {
              n(a);
            } catch (p) {
              tn(p);
            }
            a.currentTarget = null, n = d;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (s = u[f], d = s.instance, b = s.currentTarget, s = s.listener, d !== n && a.isPropagationStopped())
              break t;
            n = s, a.currentTarget = b;
            try {
              n(a);
            } catch (p) {
              tn(p);
            }
            a.currentTarget = null, n = d;
          }
      }
    }
  }
  function I(t, l) {
    var e = l[Hi];
    e === void 0 && (e = l[Hi] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    e.has(u) || (Bd(l, t, 2, !1), e.add(u));
  }
  function Tc(t, l, e) {
    var u = 0;
    l && (u |= 4), Bd(
      e,
      t,
      u,
      l
    );
  }
  var Qn = "_reactListening" + Math.random().toString(36).slice(2);
  function zc(t) {
    if (!t[Qn]) {
      t[Qn] = !0, Ms.forEach(function(e) {
        e !== "selectionchange" && (Pv.has(e) || Tc(e, !1, t), Tc(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Qn] || (l[Qn] = !0, Tc("selectionchange", !1, l));
    }
  }
  function Bd(t, l, e, u) {
    switch (sy(l)) {
      case 2:
        var a = Oh;
        break;
      case 8:
        a = Dh;
        break;
      default:
        a = xc;
    }
    e = a.bind(
      null,
      l,
      e,
      t
    ), a = void 0, !Zi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), u ? a !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: a
    }) : t.addEventListener(l, e, !0) : a !== void 0 ? t.addEventListener(l, e, {
      passive: a
    }) : t.addEventListener(l, e, !1);
  }
  function pc(t, l, e, u, a) {
    var n = u;
    if ((l & 1) === 0 && (l & 2) === 0 && u !== null)
      t: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var s = u.stateNode.containerInfo;
          if (s === a) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var d = f.tag;
              if ((d === 3 || d === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; s !== null; ) {
            if (f = Pe(s), f === null) return;
            if (d = f.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              u = n = f;
              continue t;
            }
            s = s.parentNode;
          }
        }
        u = u.return;
      }
    xs(function() {
      var b = n, p = Xi(e), D = [];
      t: {
        var E = dr.get(t);
        if (E !== void 0) {
          var T = Fa, q = t;
          switch (t) {
            case "keypress":
              if (ka(e) === 0) break t;
            case "keydown":
            case "keyup":
              T = J0;
              break;
            case "focusin":
              q = "focus", T = Ji;
              break;
            case "focusout":
              q = "blur", T = Ji;
              break;
            case "beforeblur":
            case "afterblur":
              T = Ji;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = Qs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = B0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = k0;
              break;
            case cr:
            case sr:
            case rr:
              T = j0;
              break;
            case or:
              T = F0;
              break;
            case "scroll":
            case "scrollend":
              T = N0;
              break;
            case "wheel":
              T = P0;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = G0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Ls;
              break;
            case "toggle":
            case "beforetoggle":
              T = lv;
          }
          var X = (l & 4) !== 0, St = !X && (t === "scroll" || t === "scrollend"), m = X ? E !== null ? E + "Capture" : null : E;
          X = [];
          for (var y = b, g; y !== null; ) {
            var M = y;
            if (g = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || g === null || m === null || (M = Vu(y, m), M != null && X.push(
              za(y, M, g)
            )), St) break;
            y = y.return;
          }
          0 < X.length && (E = new T(
            E,
            q,
            null,
            e,
            p
          ), D.push({ event: E, listeners: X }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (E = t === "mouseover" || t === "pointerover", T = t === "mouseout" || t === "pointerout", E && e !== Gi && (q = e.relatedTarget || e.fromElement) && (Pe(q) || q[Ie]))
            break t;
          if ((T || E) && (E = p.window === p ? p : (E = p.ownerDocument) ? E.defaultView || E.parentWindow : window, T ? (q = e.relatedTarget || e.toElement, T = b, q = q ? Pe(q) : null, q !== null && (St = _(q), X = q.tag, q !== St || X !== 5 && X !== 27 && X !== 6) && (q = null)) : (T = null, q = b), T !== q)) {
            if (X = Qs, M = "onMouseLeave", m = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (X = Ls, M = "onPointerLeave", m = "onPointerEnter", y = "pointer"), St = T == null ? E : Lu(T), g = q == null ? E : Lu(q), E = new X(
              M,
              y + "leave",
              T,
              e,
              p
            ), E.target = St, E.relatedTarget = g, M = null, Pe(p) === b && (X = new X(
              m,
              y + "enter",
              q,
              e,
              p
            ), X.target = g, X.relatedTarget = St, M = X), St = M, T && q)
              l: {
                for (X = th, m = T, y = q, g = 0, M = m; M; M = X(M))
                  g++;
                M = 0;
                for (var x = y; x; x = X(x))
                  M++;
                for (; 0 < g - M; )
                  m = X(m), g--;
                for (; 0 < M - g; )
                  y = X(y), M--;
                for (; g--; ) {
                  if (m === y || y !== null && m === y.alternate) {
                    X = m;
                    break l;
                  }
                  m = X(m), y = X(y);
                }
                X = null;
              }
            else X = null;
            T !== null && qd(
              D,
              E,
              T,
              X,
              !1
            ), q !== null && St !== null && qd(
              D,
              St,
              q,
              X,
              !0
            );
          }
        }
        t: {
          if (E = b ? Lu(b) : window, T = E.nodeName && E.nodeName.toLowerCase(), T === "select" || T === "input" && E.type === "file")
            var it = Fs;
          else if (ks(E))
            if (Is)
              it = ov;
            else {
              it = sv;
              var j = cv;
            }
          else
            T = E.nodeName, !T || T.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? b && xi(b.elementType) && (it = Fs) : it = rv;
          if (it && (it = it(t, b))) {
            $s(
              D,
              it,
              e,
              p
            );
            break t;
          }
          j && j(t, E, b), t === "focusout" && b && E.type === "number" && b.memoizedProps.value != null && ji(E, "number", E.value);
        }
        switch (j = b ? Lu(b) : window, t) {
          case "focusin":
            (ks(j) || j.contentEditable === "true") && (cu = j, Ii = b, Iu = null);
            break;
          case "focusout":
            Iu = Ii = cu = null;
            break;
          case "mousedown":
            Pi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pi = !1, ir(D, e, p);
            break;
          case "selectionchange":
            if (yv) break;
          case "keydown":
          case "keyup":
            ir(D, e, p);
        }
        var w;
        if (Wi)
          t: {
            switch (t) {
              case "compositionstart":
                var et = "onCompositionStart";
                break t;
              case "compositionend":
                et = "onCompositionEnd";
                break t;
              case "compositionupdate":
                et = "onCompositionUpdate";
                break t;
            }
            et = void 0;
          }
        else
          fu ? ws(t, e) && (et = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (et = "onCompositionStart");
        et && (Vs && e.locale !== "ko" && (fu || et !== "onCompositionStart" ? et === "onCompositionEnd" && fu && (w = Gs()) : (fe = p, Li = "value" in fe ? fe.value : fe.textContent, fu = !0)), j = Zn(b, et), 0 < j.length && (et = new Zs(
          et,
          t,
          null,
          e,
          p
        ), D.push({ event: et, listeners: j }), w ? et.data = w : (w = Ws(e), w !== null && (et.data = w)))), (w = uv ? av(t, e) : nv(t, e)) && (et = Zn(b, "onBeforeInput"), 0 < et.length && (j = new Zs(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          p
        ), D.push({
          event: j,
          listeners: et
        }), j.data = w)), $v(
          D,
          t,
          b,
          e,
          p
        );
      }
      Hd(D, l);
    });
  }
  function za(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Zn(t, l) {
    for (var e = l + "Capture", u = []; t !== null; ) {
      var a = t, n = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = Vu(t, e), a != null && u.unshift(
        za(t, a, n)
      ), a = Vu(t, l), a != null && u.push(
        za(t, a, n)
      )), t.tag === 3) return u;
      t = t.return;
    }
    return [];
  }
  function th(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function qd(t, l, e, u, a) {
    for (var n = l._reactName, f = []; e !== null && e !== u; ) {
      var s = e, d = s.alternate, b = s.stateNode;
      if (s = s.tag, d !== null && d === u) break;
      s !== 5 && s !== 26 && s !== 27 || b === null || (d = b, a ? (b = Vu(e, n), b != null && f.unshift(
        za(e, b, d)
      )) : a || (b = Vu(e, n), b != null && f.push(
        za(e, b, d)
      ))), e = e.return;
    }
    f.length !== 0 && t.push({ event: l, listeners: f });
  }
  var lh = /\r\n?/g, eh = /\u0000|\uFFFD/g;
  function Yd(t) {
    return (typeof t == "string" ? t : "" + t).replace(lh, `
`).replace(eh, "");
  }
  function jd(t, l) {
    return l = Yd(l), Yd(t) === l;
  }
  function mt(t, l, e, u, a, n) {
    switch (e) {
      case "children":
        typeof u == "string" ? l === "body" || l === "textarea" && u === "" || au(t, u) : (typeof u == "number" || typeof u == "bigint") && l !== "body" && au(t, "" + u);
        break;
      case "className":
        Ka(t, "class", u);
        break;
      case "tabIndex":
        Ka(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ka(t, e, u);
        break;
      case "style":
        Ys(t, u, n);
        break;
      case "data":
        if (l !== "object") {
          Ka(t, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = wa("" + u), t.setAttribute(e, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (l !== "input" && mt(t, l, "name", a.name, a, null), mt(
            t,
            l,
            "formEncType",
            a.formEncType,
            a,
            null
          ), mt(
            t,
            l,
            "formMethod",
            a.formMethod,
            a,
            null
          ), mt(
            t,
            l,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (mt(t, l, "encType", a.encType, a, null), mt(t, l, "method", a.method, a, null), mt(t, l, "target", a.target, a, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = wa("" + u), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = xl);
        break;
      case "onScroll":
        u != null && I("scroll", t);
        break;
      case "onScrollEnd":
        u != null && I("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(c(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(c(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        t.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = wa("" + u), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, "" + u) : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        u === !0 ? t.setAttribute(e, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? t.removeAttribute(e) : t.setAttribute(e, u);
        break;
      case "popover":
        I("beforetoggle", t), I("toggle", t), Va(t, "popover", u);
        break;
      case "xlinkActuate":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Va(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = C0.get(e) || e, Va(t, e, u));
    }
  }
  function Ac(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        Ys(t, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(c(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(c(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof u == "string" ? au(t, u) : (typeof u == "number" || typeof u == "bigint") && au(t, "" + u);
        break;
      case "onScroll":
        u != null && I("scroll", t);
        break;
      case "onScrollEnd":
        u != null && I("scrollend", t);
        break;
      case "onClick":
        u != null && (t.onclick = xl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Os.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), l = e.slice(2, a ? e.length - 7 : void 0), n = t[$t] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, a), typeof u == "function")) {
              typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, u, a);
              break t;
            }
            e in t ? t[e] = u : u === !0 ? t.setAttribute(e, "") : Va(t, e, u);
          }
    }
  }
  function Zt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        I("error", t), I("load", t);
        var u = !1, a = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var f = e[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, l));
                default:
                  mt(t, l, n, f, e, null);
              }
          }
        a && mt(t, l, "srcSet", e.srcSet, e, null), u && mt(t, l, "src", e.src, e, null);
        return;
      case "input":
        I("invalid", t);
        var s = n = f = a = null, d = null, b = null;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var p = e[u];
            if (p != null)
              switch (u) {
                case "name":
                  a = p;
                  break;
                case "type":
                  f = p;
                  break;
                case "checked":
                  d = p;
                  break;
                case "defaultChecked":
                  b = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  s = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null)
                    throw Error(c(137, l));
                  break;
                default:
                  mt(t, l, u, p, e, null);
              }
          }
        Ns(
          t,
          n,
          s,
          d,
          b,
          f,
          a,
          !1
        );
        return;
      case "select":
        I("invalid", t), u = f = n = null;
        for (a in e)
          if (e.hasOwnProperty(a) && (s = e[a], s != null))
            switch (a) {
              case "value":
                n = s;
                break;
              case "defaultValue":
                f = s;
                break;
              case "multiple":
                u = s;
              default:
                mt(t, l, a, s, e, null);
            }
        l = n, e = f, t.multiple = !!u, l != null ? uu(t, !!u, l, !1) : e != null && uu(t, !!u, e, !0);
        return;
      case "textarea":
        I("invalid", t), n = a = u = null;
        for (f in e)
          if (e.hasOwnProperty(f) && (s = e[f], s != null))
            switch (f) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                a = s;
                break;
              case "children":
                n = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(c(91));
                break;
              default:
                mt(t, l, f, s, e, null);
            }
        Bs(t, u, a, n);
        return;
      case "option":
        for (d in e)
          e.hasOwnProperty(d) && (u = e[d], u != null) && (d === "selected" ? t.selected = u && typeof u != "function" && typeof u != "symbol" : mt(t, l, d, u, e, null));
        return;
      case "dialog":
        I("beforetoggle", t), I("toggle", t), I("cancel", t), I("close", t);
        break;
      case "iframe":
      case "object":
        I("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Ta.length; u++)
          I(Ta[u], t);
        break;
      case "image":
        I("error", t), I("load", t);
        break;
      case "details":
        I("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", t), I("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (b in e)
          if (e.hasOwnProperty(b) && (u = e[b], u != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, l));
              default:
                mt(t, l, b, u, e, null);
            }
        return;
      default:
        if (xi(l)) {
          for (p in e)
            e.hasOwnProperty(p) && (u = e[p], u !== void 0 && Ac(
              t,
              l,
              p,
              u,
              e,
              void 0
            ));
          return;
        }
    }
    for (s in e)
      e.hasOwnProperty(s) && (u = e[s], u != null && mt(t, l, s, u, e, null));
  }
  function uh(t, l, e, u) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, n = null, f = null, s = null, d = null, b = null, p = null;
        for (T in e) {
          var D = e[T];
          if (e.hasOwnProperty(T) && D != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = D;
              default:
                u.hasOwnProperty(T) || mt(t, l, T, null, u, D);
            }
        }
        for (var E in u) {
          var T = u[E];
          if (D = e[E], u.hasOwnProperty(E) && (T != null || D != null))
            switch (E) {
              case "type":
                n = T;
                break;
              case "name":
                a = T;
                break;
              case "checked":
                b = T;
                break;
              case "defaultChecked":
                p = T;
                break;
              case "value":
                f = T;
                break;
              case "defaultValue":
                s = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(c(137, l));
                break;
              default:
                T !== D && mt(
                  t,
                  l,
                  E,
                  T,
                  u,
                  D
                );
            }
        }
        Yi(
          t,
          f,
          s,
          d,
          b,
          p,
          n,
          a
        );
        return;
      case "select":
        T = f = s = E = null;
        for (n in e)
          if (d = e[n], e.hasOwnProperty(n) && d != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                T = d;
              default:
                u.hasOwnProperty(n) || mt(
                  t,
                  l,
                  n,
                  null,
                  u,
                  d
                );
            }
        for (a in u)
          if (n = u[a], d = e[a], u.hasOwnProperty(a) && (n != null || d != null))
            switch (a) {
              case "value":
                E = n;
                break;
              case "defaultValue":
                s = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== d && mt(
                  t,
                  l,
                  a,
                  n,
                  u,
                  d
                );
            }
        l = s, e = f, u = T, E != null ? uu(t, !!e, E, !1) : !!u != !!e && (l != null ? uu(t, !!e, l, !0) : uu(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        T = E = null;
        for (s in e)
          if (a = e[s], e.hasOwnProperty(s) && a != null && !u.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                mt(t, l, s, null, u, a);
            }
        for (f in u)
          if (a = u[f], n = e[f], u.hasOwnProperty(f) && (a != null || n != null))
            switch (f) {
              case "value":
                E = a;
                break;
              case "defaultValue":
                T = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(c(91));
                break;
              default:
                a !== n && mt(t, l, f, a, u, n);
            }
        Hs(t, E, T);
        return;
      case "option":
        for (var q in e)
          E = e[q], e.hasOwnProperty(q) && E != null && !u.hasOwnProperty(q) && (q === "selected" ? t.selected = !1 : mt(
            t,
            l,
            q,
            null,
            u,
            E
          ));
        for (d in u)
          E = u[d], T = e[d], u.hasOwnProperty(d) && E !== T && (E != null || T != null) && (d === "selected" ? t.selected = E && typeof E != "function" && typeof E != "symbol" : mt(
            t,
            l,
            d,
            E,
            u,
            T
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var X in e)
          E = e[X], e.hasOwnProperty(X) && E != null && !u.hasOwnProperty(X) && mt(t, l, X, null, u, E);
        for (b in u)
          if (E = u[b], T = e[b], u.hasOwnProperty(b) && E !== T && (E != null || T != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(c(137, l));
                break;
              default:
                mt(
                  t,
                  l,
                  b,
                  E,
                  u,
                  T
                );
            }
        return;
      default:
        if (xi(l)) {
          for (var St in e)
            E = e[St], e.hasOwnProperty(St) && E !== void 0 && !u.hasOwnProperty(St) && Ac(
              t,
              l,
              St,
              void 0,
              u,
              E
            );
          for (p in u)
            E = u[p], T = e[p], !u.hasOwnProperty(p) || E === T || E === void 0 && T === void 0 || Ac(
              t,
              l,
              p,
              E,
              u,
              T
            );
          return;
        }
    }
    for (var m in e)
      E = e[m], e.hasOwnProperty(m) && E != null && !u.hasOwnProperty(m) && mt(t, l, m, null, u, E);
    for (D in u)
      E = u[D], T = e[D], !u.hasOwnProperty(D) || E === T || E == null && T == null || mt(t, l, D, E, u, T);
  }
  function xd(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ah() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), u = 0; u < e.length; u++) {
        var a = e[u], n = a.transferSize, f = a.initiatorType, s = a.duration;
        if (n && s && xd(f)) {
          for (f = 0, s = a.responseEnd, u += 1; u < e.length; u++) {
            var d = e[u], b = d.startTime;
            if (b > s) break;
            var p = d.transferSize, D = d.initiatorType;
            p && xd(D) && (d = d.responseEnd, f += p * (d < s ? 1 : (s - b) / (d - b)));
          }
          if (--u, l += 8 * (n + f) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Mc = null, Oc = null;
  function Ln(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Gd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xd(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Dc(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Uc = null;
  function nh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Uc ? !1 : (Uc = t, !0) : (Uc = null, !1);
  }
  var Qd = typeof setTimeout == "function" ? setTimeout : void 0, ih = typeof clearTimeout == "function" ? clearTimeout : void 0, Zd = typeof Promise == "function" ? Promise : void 0, fh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zd < "u" ? function(t) {
    return Zd.resolve(null).then(t).catch(ch);
  } : Qd;
  function ch(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function pe(t) {
    return t === "head";
  }
  function Ld(t, l) {
    var e = l, u = 0;
    do {
      var a = e.nextSibling;
      if (t.removeChild(e), a && a.nodeType === 8)
        if (e = a.data, e === "/$" || e === "/&") {
          if (u === 0) {
            t.removeChild(a), qu(l);
            return;
          }
          u--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          u++;
        else if (e === "html")
          pa(t.ownerDocument.documentElement);
        else if (e === "head") {
          e = t.ownerDocument.head, pa(e);
          for (var n = e.firstChild; n; ) {
            var f = n.nextSibling, s = n.nodeName;
            n[Zu] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = f;
          }
        } else
          e === "body" && pa(t.ownerDocument.body);
      e = a;
    } while (e);
    qu(l);
  }
  function Vd(t, l) {
    var e = t;
    t = 0;
    do {
      var u = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), u && u.nodeType === 8)
        if (e = u.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = u;
    } while (e);
  }
  function Cc(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Cc(e), Bi(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function sh(t, l, e, u) {
    for (; t.nodeType === 1; ) {
      var a = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (u) {
        if (!t[Zu])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = pl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function rh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = pl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Kd(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = pl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Rc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Nc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function oh(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var u = function() {
        l(), e.removeEventListener("DOMContentLoaded", u);
      };
      e.addEventListener("DOMContentLoaded", u), t._reactRetry = u;
    }
  }
  function pl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var Hc = null;
  function Jd(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return pl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function wd(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Wd(t, l, e) {
    switch (l = Ln(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function pa(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    Bi(t);
  }
  var Al = /* @__PURE__ */ new Map(), kd = /* @__PURE__ */ new Set();
  function Vn(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var te = H.d;
  H.d = {
    f: dh,
    r: yh,
    D: vh,
    C: hh,
    L: mh,
    m: Sh,
    X: bh,
    S: gh,
    M: _h
  };
  function dh() {
    var t = te.f(), l = qn();
    return t || l;
  }
  function yh(t) {
    var l = tu(t);
    l !== null && l.tag === 5 && l.type === "form" ? oo(l) : te.r(t);
  }
  var Nu = typeof document > "u" ? null : document;
  function $d(t, l, e) {
    var u = Nu;
    if (u && typeof l == "string" && l) {
      var a = Sl(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), kd.has(a) || (kd.add(a), t = { rel: t, crossOrigin: e, href: l }, u.querySelector(a) === null && (l = u.createElement("link"), Zt(l, "link", t), Yt(l), u.head.appendChild(l)));
    }
  }
  function vh(t) {
    te.D(t), $d("dns-prefetch", t, null);
  }
  function hh(t, l) {
    te.C(t, l), $d("preconnect", t, l);
  }
  function mh(t, l, e) {
    te.L(t, l, e);
    var u = Nu;
    if (u && t && l) {
      var a = 'link[rel="preload"][as="' + Sl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (a += '[imagesrcset="' + Sl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (a += '[imagesizes="' + Sl(
        e.imageSizes
      ) + '"]')) : a += '[href="' + Sl(t) + '"]';
      var n = a;
      switch (l) {
        case "style":
          n = Hu(t);
          break;
        case "script":
          n = Bu(t);
      }
      Al.has(n) || (t = C(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Al.set(n, t), u.querySelector(a) !== null || l === "style" && u.querySelector(Aa(n)) || l === "script" && u.querySelector(Ma(n)) || (l = u.createElement("link"), Zt(l, "link", t), Yt(l), u.head.appendChild(l)));
    }
  }
  function Sh(t, l) {
    te.m(t, l);
    var e = Nu;
    if (e && t) {
      var u = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + Sl(u) + '"][href="' + Sl(t) + '"]', n = a;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Bu(t);
      }
      if (!Al.has(n) && (t = C({ rel: "modulepreload", href: t }, l), Al.set(n, t), e.querySelector(a) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Ma(n)))
              return;
        }
        u = e.createElement("link"), Zt(u, "link", t), Yt(u), e.head.appendChild(u);
      }
    }
  }
  function gh(t, l, e) {
    te.S(t, l, e);
    var u = Nu;
    if (u && t) {
      var a = lu(u).hoistableStyles, n = Hu(t);
      l = l || "default";
      var f = a.get(n);
      if (!f) {
        var s = { loading: 0, preload: null };
        if (f = u.querySelector(
          Aa(n)
        ))
          s.loading = 5;
        else {
          t = C(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Al.get(n)) && Bc(t, e);
          var d = f = u.createElement("link");
          Yt(d), Zt(d, "link", t), d._p = new Promise(function(b, p) {
            d.onload = b, d.onerror = p;
          }), d.addEventListener("load", function() {
            s.loading |= 1;
          }), d.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Kn(f, l, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: s
        }, a.set(n, f);
      }
    }
  }
  function bh(t, l) {
    te.X(t, l);
    var e = Nu;
    if (e && t) {
      var u = lu(e).hoistableScripts, a = Bu(t), n = u.get(a);
      n || (n = e.querySelector(Ma(a)), n || (t = C({ src: t, async: !0 }, l), (l = Al.get(a)) && qc(t, l), n = e.createElement("script"), Yt(n), Zt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function _h(t, l) {
    te.M(t, l);
    var e = Nu;
    if (e && t) {
      var u = lu(e).hoistableScripts, a = Bu(t), n = u.get(a);
      n || (n = e.querySelector(Ma(a)), n || (t = C({ src: t, async: !0, type: "module" }, l), (l = Al.get(a)) && qc(t, l), n = e.createElement("script"), Yt(n), Zt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function Fd(t, l, e, u) {
    var a = (a = $.current) ? Vn(a) : null;
    if (!a) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Hu(e.href), e = lu(
          a
        ).hoistableStyles, u = e.get(l), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Hu(e.href);
          var n = lu(
            a
          ).hoistableStyles, f = n.get(t);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, f), (n = a.querySelector(
            Aa(t)
          )) && !n._p && (f.instance = n, f.state.loading = 5), Al.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Al.set(t, e), n || Eh(
            a,
            t,
            e,
            f.state
          ))), l && u === null)
            throw Error(c(528, ""));
          return f;
        }
        if (l && u !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Bu(e), e = lu(
          a
        ).hoistableScripts, u = e.get(l), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function Hu(t) {
    return 'href="' + Sl(t) + '"';
  }
  function Aa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Id(t) {
    return C({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Eh(t, l, e, u) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? u.loading = 1 : (l = t.createElement("link"), u.preload = l, l.addEventListener("load", function() {
      return u.loading |= 1;
    }), l.addEventListener("error", function() {
      return u.loading |= 2;
    }), Zt(l, "link", e), Yt(l), t.head.appendChild(l));
  }
  function Bu(t) {
    return '[src="' + Sl(t) + '"]';
  }
  function Ma(t) {
    return "script[async]" + t;
  }
  function Pd(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var u = t.querySelector(
            'style[data-href~="' + Sl(e.href) + '"]'
          );
          if (u)
            return l.instance = u, Yt(u), u;
          var a = C({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return u = (t.ownerDocument || t).createElement(
            "style"
          ), Yt(u), Zt(u, "style", a), Kn(u, e.precedence, t), l.instance = u;
        case "stylesheet":
          a = Hu(e.href);
          var n = t.querySelector(
            Aa(a)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Yt(n), n;
          u = Id(e), (a = Al.get(a)) && Bc(u, a), n = (t.ownerDocument || t).createElement("link"), Yt(n);
          var f = n;
          return f._p = new Promise(function(s, d) {
            f.onload = s, f.onerror = d;
          }), Zt(n, "link", u), l.state.loading |= 4, Kn(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Bu(e.src), (a = t.querySelector(
            Ma(n)
          )) ? (l.instance = a, Yt(a), a) : (u = e, (a = Al.get(n)) && (u = C({}, e), qc(u, a)), t = t.ownerDocument || t, a = t.createElement("script"), Yt(a), Zt(a, "link", u), t.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(c(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (u = l.instance, l.state.loading |= 4, Kn(u, e.precedence, t));
    return l.instance;
  }
  function Kn(t, l, e) {
    for (var u = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = u.length ? u[u.length - 1] : null, n = a, f = 0; f < u.length; f++) {
      var s = u[f];
      if (s.dataset.precedence === l) n = s;
      else if (n !== a) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function Bc(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function qc(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Jn = null;
  function ty(t, l, e) {
    if (Jn === null) {
      var u = /* @__PURE__ */ new Map(), a = Jn = /* @__PURE__ */ new Map();
      a.set(e, u);
    } else
      a = Jn, u = a.get(e), u || (u = /* @__PURE__ */ new Map(), a.set(e, u));
    if (u.has(t)) return u;
    for (u.set(t, null), e = e.getElementsByTagName(t), a = 0; a < e.length; a++) {
      var n = e[a];
      if (!(n[Zu] || n[xt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(l) || "";
        f = t + f;
        var s = u.get(f);
        s ? s.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function ly(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function Th(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function ey(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function zh(t, l, e, u) {
    if (e.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var a = Hu(u.href), n = l.querySelector(
          Aa(a)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = wn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, Yt(n);
          return;
        }
        n = l.ownerDocument || l, u = Id(u), (a = Al.get(a)) && Bc(u, a), n = n.createElement("link"), Yt(n);
        var f = n;
        f._p = new Promise(function(s, d) {
          f.onload = s, f.onerror = d;
        }), Zt(n, "link", u), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = wn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var Yc = 0;
  function ph(t, l) {
    return t.stylesheets && t.count === 0 && kn(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var u = setTimeout(function() {
        if (t.stylesheets && kn(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && Yc === 0 && (Yc = 62500 * ah());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && kn(t, t.stylesheets), t.unsuspend)) {
            var n = t.unsuspend;
            t.unsuspend = null, n();
          }
        },
        (t.imgBytes > Yc ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(u), clearTimeout(a);
      };
    } : null;
  }
  function wn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) kn(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Wn = null;
  function kn(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Wn = /* @__PURE__ */ new Map(), l.forEach(Ah, t), Wn = null, wn.call(t));
  }
  function Ah(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Wn.get(t);
      if (e) var u = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Wn.set(t, e);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < a.length; n++) {
          var f = a[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (e.set(f.dataset.precedence, f), u = f);
        }
        u && e.set(null, u);
      }
      a = l.instance, f = a.getAttribute("data-precedence"), n = e.get(f) || u, n === u && e.set(null, a), e.set(f, a), this.count++, u = wn.bind(this), a.addEventListener("load", u), a.addEventListener("error", u), n ? n.parentNode.insertBefore(a, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Oa = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: L,
    _currentValue2: L,
    _threadCount: 0
  };
  function Mh(t, l, e, u, a, n, f, s, d) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ci(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ci(0), this.hiddenUpdates = Ci(null), this.identifierPrefix = u, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function uy(t, l, e, u, a, n, f, s, d, b, p, D) {
    return t = new Mh(
      t,
      l,
      e,
      f,
      d,
      b,
      p,
      D,
      s
    ), l = 1, n === !0 && (l |= 24), n = cl(3, null, null, l), t.current = n, n.stateNode = t, l = hf(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: e,
      cache: l
    }, bf(n), t;
  }
  function ay(t) {
    return t ? (t = ou, t) : ou;
  }
  function ny(t, l, e, u, a, n) {
    a = ay(a), u.context === null ? u.context = a : u.pendingContext = a, u = ye(l), u.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (u.callback = n), e = ve(t, u, l), e !== null && (el(e, t, l), na(e, t, l));
  }
  function iy(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function jc(t, l) {
    iy(t, l), (t = t.alternate) && iy(t, l);
  }
  function fy(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = xe(t, 67108864);
      l !== null && el(l, t, 67108864), jc(t, 67108864);
    }
  }
  function cy(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = yl();
      l = Ri(l);
      var e = xe(t, l);
      e !== null && el(e, t, l), jc(t, l);
    }
  }
  var $n = !0;
  function Oh(t, l, e, u) {
    var a = A.T;
    A.T = null;
    var n = H.p;
    try {
      H.p = 2, xc(t, l, e, u);
    } finally {
      H.p = n, A.T = a;
    }
  }
  function Dh(t, l, e, u) {
    var a = A.T;
    A.T = null;
    var n = H.p;
    try {
      H.p = 8, xc(t, l, e, u);
    } finally {
      H.p = n, A.T = a;
    }
  }
  function xc(t, l, e, u) {
    if ($n) {
      var a = Gc(u);
      if (a === null)
        pc(
          t,
          l,
          u,
          Fn,
          e
        ), ry(t, u);
      else if (Ch(
        a,
        t,
        l,
        e,
        u
      ))
        u.stopPropagation();
      else if (ry(t, u), l & 4 && -1 < Uh.indexOf(t)) {
        for (; a !== null; ) {
          var n = tu(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = He(n.pendingLanes);
                  if (f !== 0) {
                    var s = n;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; f; ) {
                      var d = 1 << 31 - il(f);
                      s.entanglements[1] |= d, f &= ~d;
                    }
                    ql(n), (ct & 6) === 0 && (Hn = al() + 500, Ea(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = xe(n, 2), s !== null && el(s, n, 2), qn(), jc(n, 2);
            }
          if (n = Gc(u), n === null && pc(
            t,
            l,
            u,
            Fn,
            e
          ), n === a) break;
          a = n;
        }
        a !== null && u.stopPropagation();
      } else
        pc(
          t,
          l,
          u,
          null,
          e
        );
    }
  }
  function Gc(t) {
    return t = Xi(t), Xc(t);
  }
  var Fn = null;
  function Xc(t) {
    if (Fn = null, t = Pe(t), t !== null) {
      var l = _(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = O(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = R(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Fn = t, null;
  }
  function sy(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (v0()) {
          case ms:
            return 2;
          case Ss:
            return 8;
          case Ga:
          case h0:
            return 32;
          case gs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qc = !1, Ae = null, Me = null, Oe = null, Da = /* @__PURE__ */ new Map(), Ua = /* @__PURE__ */ new Map(), De = [], Uh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ry(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ae = null;
        break;
      case "dragenter":
      case "dragleave":
        Me = null;
        break;
      case "mouseover":
      case "mouseout":
        Oe = null;
        break;
      case "pointerover":
      case "pointerout":
        Da.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ua.delete(l.pointerId);
    }
  }
  function Ca(t, l, e, u, a, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [a]
    }, l !== null && (l = tu(l), l !== null && fy(l)), t) : (t.eventSystemFlags |= u, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function Ch(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return Ae = Ca(
          Ae,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "dragenter":
        return Me = Ca(
          Me,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "mouseover":
        return Oe = Ca(
          Oe,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "pointerover":
        var n = a.pointerId;
        return Da.set(
          n,
          Ca(
            Da.get(n) || null,
            t,
            l,
            e,
            u,
            a
          )
        ), !0;
      case "gotpointercapture":
        return n = a.pointerId, Ua.set(
          n,
          Ca(
            Ua.get(n) || null,
            t,
            l,
            e,
            u,
            a
          )
        ), !0;
    }
    return !1;
  }
  function oy(t) {
    var l = Pe(t.target);
    if (l !== null) {
      var e = _(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = O(e), l !== null) {
            t.blockedOn = l, ps(t.priority, function() {
              cy(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = R(e), l !== null) {
            t.blockedOn = l, ps(t.priority, function() {
              cy(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function In(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = Gc(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(
          e.type,
          e
        );
        Gi = u, e.target.dispatchEvent(u), Gi = null;
      } else
        return l = tu(e), l !== null && fy(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function dy(t, l, e) {
    In(t) && e.delete(l);
  }
  function Rh() {
    Qc = !1, Ae !== null && In(Ae) && (Ae = null), Me !== null && In(Me) && (Me = null), Oe !== null && In(Oe) && (Oe = null), Da.forEach(dy), Ua.forEach(dy);
  }
  function Pn(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Qc || (Qc = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Rh
    )));
  }
  var ti = null;
  function yy(t) {
    ti !== t && (ti = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        ti === t && (ti = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], u = t[l + 1], a = t[l + 2];
          if (typeof u != "function") {
            if (Xc(u || e) === null)
              continue;
            break;
          }
          var n = tu(e);
          n !== null && (t.splice(l, 3), l -= 3, Gf(
            n,
            {
              pending: !0,
              data: a,
              method: e.method,
              action: u
            },
            u,
            a
          ));
        }
      }
    ));
  }
  function qu(t) {
    function l(d) {
      return Pn(d, t);
    }
    Ae !== null && Pn(Ae, t), Me !== null && Pn(Me, t), Oe !== null && Pn(Oe, t), Da.forEach(l), Ua.forEach(l);
    for (var e = 0; e < De.length; e++) {
      var u = De[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < De.length && (e = De[0], e.blockedOn === null); )
      oy(e), e.blockedOn === null && De.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (u = 0; u < e.length; u += 3) {
        var a = e[u], n = e[u + 1], f = a[$t] || null;
        if (typeof n == "function")
          f || yy(e);
        else if (f) {
          var s = null;
          if (n && n.hasAttribute("formAction")) {
            if (a = n, f = n[$t] || null)
              s = f.formAction;
            else if (Xc(a) !== null) continue;
          } else s = f.action;
          typeof s == "function" ? e[u + 1] = s : (e.splice(u, 3), u -= 3), yy(e);
        }
      }
  }
  function vy() {
    function t(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return a = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      a !== null && (a(), a = null), u || setTimeout(e, 20);
    }
    function e() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        u = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), a !== null && (a(), a = null);
      };
    }
  }
  function Zc(t) {
    this._internalRoot = t;
  }
  li.prototype.render = Zc.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(c(409));
    var e = l.current, u = yl();
    ny(e, u, t, l, null, null);
  }, li.prototype.unmount = Zc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      ny(t.current, 2, null, t, null, null), qn(), l[Ie] = null;
    }
  };
  function li(t) {
    this._internalRoot = t;
  }
  li.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = zs();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < De.length && l !== 0 && l < De[e].priority; e++) ;
      De.splice(e, 0, t), e === 0 && oy(t);
    }
  };
  var hy = r.version;
  if (hy !== "19.2.3")
    throw Error(
      c(
        527,
        hy,
        "19.2.3"
      )
    );
  H.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = S(l), t = t !== null ? N(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Nh = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ei.isDisabled && ei.supportsFiber)
      try {
        Gu = ei.inject(
          Nh
        ), nl = ei;
      } catch {
      }
  }
  return Na.createRoot = function(t, l) {
    if (!h(t)) throw Error(c(299));
    var e = !1, u = "", a = To, n = zo, f = po;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError)), l = uy(
      t,
      1,
      !1,
      null,
      null,
      e,
      u,
      null,
      a,
      n,
      f,
      vy
    ), t[Ie] = l.current, zc(t), new Zc(l);
  }, Na.hydrateRoot = function(t, l, e) {
    if (!h(t)) throw Error(c(299));
    var u = !1, a = "", n = To, f = zo, s = po, d = null;
    return e != null && (e.unstable_strictMode === !0 && (u = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError), e.formState !== void 0 && (d = e.formState)), l = uy(
      t,
      1,
      !0,
      l,
      e ?? null,
      u,
      a,
      d,
      n,
      f,
      s,
      vy
    ), l.context = ay(null), e = l.current, u = yl(), u = Ri(u), a = ye(u), a.callback = null, ve(e, a, u), e = u, l.current.lanes = e, Qu(l, e), ql(l), t[Ie] = l.current, zc(t), new li(l);
  }, Na.version = "19.2.3", Na;
}
var Ly;
function s1() {
  if (Ly) return Fc.exports;
  Ly = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), Fc.exports = c1(), Fc.exports;
}
var r1 = s1();
class o1 extends HTMLElement {
  root;
  connectedCallback() {
    this.style.display = "block", this.root = r1.createRoot(this), this.root.render(
      /* @__PURE__ */ Ot.jsx(Ph, { store: l1, children: /* @__PURE__ */ Ot.jsx(u1, {}) })
    );
  }
  disconnectedCallback() {
    this.root?.unmount(), this.root = void 0;
  }
}
customElements.get("custom-table") || customElements.define("custom-table", o1);
export {
  o1 as CustomTable
};
