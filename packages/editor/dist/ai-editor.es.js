var Me = Object.defineProperty;
var Wt = (t) => {
  throw TypeError(t);
};
var Ie = (t, e, r) => e in t ? Me(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var O = (t, e, r) => Ie(t, typeof e != "symbol" ? e + "" : e, r), Gt = (t, e, r) => e.has(t) || Wt("Cannot " + r);
var y = (t, e, r) => (Gt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ct = (t, e, r) => e.has(t) ? Wt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Rt = (t, e, r, s) => (Gt(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r);
const je = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(je);
const qe = 2, Ve = "[", Be = "]", tt = {}, E = Symbol(), Zt = !1, D = 2, ne = 4, Vt = 8, Bt = 16, U = 32, z = 64, $t = 128, A = 256, gt = 512, k = 1024, B = 2048, Q = 4096, mt = 8192, kt = 16384, Ye = 32768, He = 65536, Ue = 1 << 19, se = 1 << 20, At = Symbol("$state"), Je = Symbol("legacy props");
var Yt = Array.isArray, Ke = Array.prototype.indexOf, We = Array.from, wt = Object.keys, yt = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, le = Object.prototype, Ge = Array.prototype, ie = Object.getPrototypeOf;
function ue(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let rt = [], Ft = [];
function fe() {
  var t = rt;
  rt = [], ue(t);
}
function Ze() {
  var t = Ft;
  Ft = [], ue(t);
}
function ze(t) {
  rt.length === 0 && queueMicrotask(fe), rt.push(t);
}
function zt() {
  rt.length > 0 && fe(), Ft.length > 0 && Ze();
}
function ae(t) {
  return t === this.v;
}
function Qe(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Xe(t) {
  return !Qe(t, this.v);
}
function tr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function er() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function rr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function sr() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function lr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Nt = !1, ir = !1;
function ur() {
  Nt = !0;
}
const fr = [];
function ar(t, e = !1) {
  return _t(t, /* @__PURE__ */ new Map(), "", fr);
}
function _t(t, e, r, s, n = null) {
  if (typeof t == "object" && t !== null) {
    var l = e.get(t);
    if (l !== void 0) return l;
    if (t instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(t)
    );
    if (t instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(t)
    );
    if (Yt(t)) {
      var i = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, i), n !== null && e.set(n, i);
      for (var u = 0; u < t.length; u += 1) {
        var f = t[u];
        u in t && (i[u] = _t(f, e, r, s));
      }
      return i;
    }
    if (ie(t) === le) {
      i = {}, e.set(t, i), n !== null && e.set(n, i);
      for (var a in t)
        i[a] = _t(t[a], e, r, s);
      return i;
    }
    if (t instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(t)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    t.toJSON == "function")
      return _t(
        /** @type {T & { toJSON(): any } } */
        t.toJSON(),
        e,
        r,
        s,
        // Associate the instance with the toJSON clone
        t
      );
  }
  if (t instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      t
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(t)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      t
    );
  }
}
function S(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: ae,
    rv: 0,
    wv: 0
  };
  return r;
}
function Qt(t) {
  return /* @__PURE__ */ cr(S(t));
}
// @__NO_SIDE_EFFECTS__
function or(t, e = !1) {
  var s;
  const r = S(t);
  return e || (r.equals = Xe), Nt && g !== null && g.l !== null && ((s = g.l).s ?? (s.s = [])).push(r), r;
}
// @__NO_SIDE_EFFECTS__
function cr(t) {
  return h !== null && !R && (h.f & D) !== 0 && (P === null ? $r([t]) : P.push(t)), t;
}
function C(t, e) {
  return h !== null && !R && lt() && (h.f & (D | Bt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (P === null || !P.includes(t)) && lr(), _r(t, e);
}
function _r(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = we(), oe(t, B), lt() && d !== null && (d.f & k) !== 0 && (d.f & (U | z)) === 0 && (L === null ? gr([t]) : L.push(t))), e;
}
function oe(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var s = lt(), n = r.length, l = 0; l < n; l++) {
      var i = r[l], u = i.f;
      (u & B) === 0 && (!s && i === d || (q(i, e), (u & (k | A)) !== 0 && ((u & D) !== 0 ? oe(
        /** @type {Derived} */
        i,
        Q
      ) : Jt(
        /** @type {Effect} */
        i
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function vr(t) {
  var e = D | B, r = h !== null && (h.f & D) !== 0 ? (
    /** @type {Derived} */
    h
  ) : null;
  return d === null || r !== null && (r.f & A) !== 0 ? e |= A : d.f |= se, {
    ctx: g,
    deps: null,
    effects: null,
    equals: ae,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? d
  };
}
function ce(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      V(
        /** @type {Effect} */
        e[r]
      );
  }
}
function hr(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & D) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function dr(t) {
  var e, r = d;
  j(hr(t));
  try {
    ce(t), e = Ee(t);
  } finally {
    j(r);
  }
  return e;
}
function _e(t) {
  var e = dr(t), r = (M || (t.f & A) !== 0) && t.deps !== null ? Q : k;
  q(t, r), t.equals(e) || (t.v = e, t.wv = we());
}
function Ht(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let N = !1;
function ut(t) {
  N = t;
}
let w;
function H(t) {
  if (t === null)
    throw Ht(), tt;
  return w = t;
}
function ve() {
  return H(
    /** @type {TemplateNode} */
    /* @__PURE__ */ st(w)
  );
}
function ft(t) {
  if (N) {
    if (/* @__PURE__ */ st(w) !== null)
      throw Ht(), tt;
    w = t;
  }
}
function G(t, e = null, r) {
  if (typeof t != "object" || t === null || At in t)
    return t;
  const s = ie(t);
  if (s !== le && s !== Ge)
    return t;
  var n = /* @__PURE__ */ new Map(), l = Yt(t), i = S(0);
  l && n.set("length", S(
    /** @type {any[]} */
    t.length
  ));
  var u;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(f, a, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && rr();
        var o = n.get(a);
        return o === void 0 ? (o = S(_.value), n.set(a, o)) : C(o, G(_.value, u)), !0;
      },
      deleteProperty(f, a) {
        var _ = n.get(a);
        if (_ === void 0)
          a in f && n.set(a, S(E));
        else {
          if (l && typeof a == "string") {
            var o = (
              /** @type {Source<number>} */
              n.get("length")
            ), c = Number(a);
            Number.isInteger(c) && c < o.v && C(o, c);
          }
          C(_, E), Xt(i);
        }
        return !0;
      },
      get(f, a, _) {
        var $;
        if (a === At)
          return t;
        var o = n.get(a), c = a in f;
        if (o === void 0 && (!c || ($ = Z(f, a)) != null && $.writable) && (o = S(G(c ? f[a] : E, u)), n.set(a, o)), o !== void 0) {
          var v = T(o);
          return v === E ? void 0 : v;
        }
        return Reflect.get(f, a, _);
      },
      getOwnPropertyDescriptor(f, a) {
        var _ = Reflect.getOwnPropertyDescriptor(f, a);
        if (_ && "value" in _) {
          var o = n.get(a);
          o && (_.value = T(o));
        } else if (_ === void 0) {
          var c = n.get(a), v = c == null ? void 0 : c.v;
          if (c !== void 0 && v !== E)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return _;
      },
      has(f, a) {
        var v;
        if (a === At)
          return !0;
        var _ = n.get(a), o = _ !== void 0 && _.v !== E || Reflect.has(f, a);
        if (_ !== void 0 || d !== null && (!o || (v = Z(f, a)) != null && v.writable)) {
          _ === void 0 && (_ = S(o ? G(f[a], u) : E), n.set(a, _));
          var c = T(_);
          if (c === E)
            return !1;
        }
        return o;
      },
      set(f, a, _, o) {
        var Y;
        var c = n.get(a), v = a in f;
        if (l && a === "length")
          for (var $ = _; $ < /** @type {Source<number>} */
          c.v; $ += 1) {
            var b = n.get($ + "");
            b !== void 0 ? C(b, E) : $ in f && (b = S(E), n.set($ + "", b));
          }
        c === void 0 ? (!v || (Y = Z(f, a)) != null && Y.writable) && (c = S(void 0), C(c, G(_, u)), n.set(a, c)) : (v = c.v !== E, C(c, G(_, u)));
        var J = Reflect.getOwnPropertyDescriptor(f, a);
        if (J != null && J.set && J.set.call(o, _), !v) {
          if (l && typeof a == "string") {
            var it = (
              /** @type {Source<number>} */
              n.get("length")
            ), K = Number(a);
            Number.isInteger(K) && K >= it.v && C(it, K + 1);
          }
          Xt(i);
        }
        return !0;
      },
      ownKeys(f) {
        T(i);
        var a = Reflect.ownKeys(f).filter((c) => {
          var v = n.get(c);
          return v === void 0 || v.v !== E;
        });
        for (var [_, o] of n)
          o.v !== E && !(_ in f) && a.push(_);
        return a;
      },
      setPrototypeOf() {
        nr();
      }
    }
  );
}
function Xt(t, e = 1) {
  C(t, t.v + e);
}
var te, he, de, $e;
function Mt() {
  if (te === void 0) {
    te = window, he = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    de = Z(e, "firstChild").get, $e = Z(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Et(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function nt(t) {
  return de.call(t);
}
// @__NO_SIDE_EFFECTS__
function st(t) {
  return $e.call(t);
}
function at(t, e) {
  if (!N)
    return /* @__PURE__ */ nt(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ nt(w)
  );
  if (r === null)
    r = w.appendChild(Et());
  else if (e && r.nodeType !== 3) {
    var s = Et();
    return r == null || r.before(s), H(s), s;
  }
  return H(r), r;
}
function ot(t, e = 1, r = !1) {
  let s = N ? w : t;
  for (var n; e--; )
    n = s, s = /** @type {TemplateNode} */
    /* @__PURE__ */ st(s);
  if (!N)
    return s;
  var l = s == null ? void 0 : s.nodeType;
  if (r && l !== 3) {
    var i = Et();
    return s === null ? n == null || n.after(i) : s.before(i), H(i), i;
  }
  return H(s), /** @type {TemplateNode} */
  s;
}
function ge(t) {
  t.textContent = "";
}
let vt = !1, pt = !1, bt = null, ht = !1, et = [];
let h = null, R = !1;
function I(t) {
  h = t;
}
let d = null;
function j(t) {
  d = t;
}
let P = null;
function $r(t) {
  P = t;
}
let m = null, p = 0, L = null;
function gr(t) {
  L = t;
}
let me = 1, xt = 0, M = !1;
function we() {
  return ++me;
}
function Ot(t) {
  var o;
  var e = t.f;
  if ((e & B) !== 0)
    return !0;
  if ((e & Q) !== 0) {
    var r = t.deps, s = (e & A) !== 0;
    if (r !== null) {
      var n, l, i = (e & gt) !== 0, u = s && d !== null && !M, f = r.length;
      if (i || u) {
        var a = (
          /** @type {Derived} */
          t
        ), _ = a.parent;
        for (n = 0; n < f; n++)
          l = r[n], (i || !((o = l == null ? void 0 : l.reactions) != null && o.includes(a))) && (l.reactions ?? (l.reactions = [])).push(a);
        i && (a.f ^= gt), u && _ !== null && (_.f & A) === 0 && (a.f ^= A);
      }
      for (n = 0; n < f; n++)
        if (l = r[n], Ot(
          /** @type {Derived} */
          l
        ) && _e(
          /** @type {Derived} */
          l
        ), l.wv > t.wv)
          return !0;
    }
    (!s || d !== null && !M) && q(t, k);
  }
  return !1;
}
function mr(t, e) {
  for (var r = e; r !== null; ) {
    if ((r.f & $t) !== 0)
      try {
        r.fn(t);
        return;
      } catch {
        r.f ^= $t;
      }
    r = r.parent;
  }
  throw vt = !1, t;
}
function wr(t) {
  return (t.f & kt) === 0 && (t.parent === null || (t.parent.f & $t) === 0);
}
function St(t, e, r, s) {
  if (vt) {
    if (r === null && (vt = !1), wr(e))
      throw t;
    return;
  }
  r !== null && (vt = !0);
  {
    mr(t, e);
    return;
  }
}
function ye(t, e, r = !0) {
  var s = t.reactions;
  if (s !== null)
    for (var n = 0; n < s.length; n++) {
      var l = s[n];
      (l.f & D) !== 0 ? ye(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (r ? q(l, B) : (l.f & k) !== 0 && q(l, Q), Jt(
        /** @type {Effect} */
        l
      ));
    }
}
function Ee(t) {
  var v;
  var e = m, r = p, s = L, n = h, l = M, i = P, u = g, f = R, a = t.f;
  m = /** @type {null | Value[]} */
  null, p = 0, L = null, M = (a & A) !== 0 && (R || !ht || h === null), h = (a & (U | z)) === 0 ? t : null, P = null, ee(t.ctx), R = !1, xt++;
  try {
    var _ = (
      /** @type {Function} */
      (0, t.fn)()
    ), o = t.deps;
    if (m !== null) {
      var c;
      if (Tt(t, p), o !== null && p > 0)
        for (o.length = p + m.length, c = 0; c < m.length; c++)
          o[p + c] = m[c];
      else
        t.deps = o = m;
      if (!M)
        for (c = p; c < o.length; c++)
          ((v = o[c]).reactions ?? (v.reactions = [])).push(t);
    } else o !== null && p < o.length && (Tt(t, p), o.length = p);
    if (lt() && L !== null && !R && o !== null && (t.f & (D | Q | B)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      L.length; c++)
        ye(
          L[c],
          /** @type {Effect} */
          t
        );
    return n !== null && xt++, _;
  } finally {
    m = e, p = r, L = s, h = n, M = l, P = i, ee(u), R = f;
  }
}
function yr(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var s = Ke.call(r, t);
    if (s !== -1) {
      var n = r.length - 1;
      n === 0 ? r = e.reactions = null : (r[s] = r[n], r.pop());
    }
  }
  r === null && (e.f & D) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (m === null || !m.includes(e)) && (q(e, Q), (e.f & (A | gt)) === 0 && (e.f ^= gt), ce(
    /** @type {Derived} **/
    e
  ), Tt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Tt(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var s = e; s < r.length; s++)
      yr(t, r[s]);
}
function Ut(t) {
  var e = t.f;
  if ((e & kt) === 0) {
    q(t, k);
    var r = d, s = g, n = ht;
    d = t, ht = !0;
    try {
      (e & Bt) !== 0 ? Pr(t) : Te(t), xe(t);
      var l = Ee(t);
      t.teardown = typeof l == "function" ? l : null, t.wv = me;
      var i = t.deps, u;
      Zt && ir && t.f & B;
    } catch (f) {
      St(f, t, r, s || t.ctx);
    } finally {
      ht = n, d = r;
    }
  }
}
function Er() {
  try {
    tr();
  } catch (t) {
    if (bt !== null)
      St(t, bt, null);
    else
      throw t;
  }
}
function pe() {
  try {
    for (var t = 0; et.length > 0; ) {
      t++ > 1e3 && Er();
      var e = et, r = e.length;
      et = [];
      for (var s = 0; s < r; s++) {
        var n = e[s];
        (n.f & k) === 0 && (n.f ^= k);
        var l = br(n);
        pr(l);
      }
    }
  } finally {
    pt = !1, bt = null;
  }
}
function pr(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var s = t[r];
      if ((s.f & (kt | mt)) === 0)
        try {
          Ot(s) && (Ut(s), s.deps === null && s.first === null && s.nodes_start === null && (s.teardown === null ? ke(s) : s.fn = null));
        } catch (n) {
          St(n, s, null, s.ctx);
        }
    }
}
function Jt(t) {
  pt || (pt = !0, queueMicrotask(pe));
  for (var e = bt = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if ((r & (z | U)) !== 0) {
      if ((r & k) === 0) return;
      e.f ^= k;
    }
  }
  et.push(e);
}
function br(t) {
  for (var e = [], r = t.first; r !== null; ) {
    var s = r.f, n = (s & U) !== 0, l = n && (s & k) !== 0;
    if (!l && (s & mt) === 0) {
      if ((s & ne) !== 0)
        e.push(r);
      else if (n)
        r.f ^= k;
      else {
        var i = h;
        try {
          h = r, Ot(r) && Ut(r);
        } catch (a) {
          St(a, r, null, r.ctx);
        } finally {
          h = i;
        }
      }
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    var f = r.parent;
    for (r = r.next; r === null && f !== null; )
      r = f.next, f = f.parent;
  }
  return e;
}
function xr(t) {
  var e;
  for (zt(); et.length > 0; )
    pt = !0, pe(), zt();
  return (
    /** @type {T} */
    e
  );
}
function T(t) {
  var e = t.f, r = (e & D) !== 0;
  if (h !== null && !R) {
    P !== null && P.includes(t) && sr();
    var s = h.deps;
    t.rv < xt && (t.rv = xt, m === null && s !== null && s[p] === t ? p++ : m === null ? m = [t] : (!M || !m.includes(t)) && m.push(t));
  } else if (r && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var n = (
      /** @type {Derived} */
      t
    ), l = n.parent;
    l !== null && (l.f & A) === 0 && (n.f ^= A);
  }
  return r && (n = /** @type {Derived} */
  t, Ot(n) && _e(n)), t.v;
}
function Tr(t) {
  var e = R;
  try {
    return R = !0, t();
  } finally {
    R = e;
  }
}
const kr = -7169;
function q(t, e) {
  t.f = t.f & kr | e;
}
function Nr(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function X(t, e, r, s = !0) {
  var n = (t & z) !== 0, l = d, i = {
    ctx: g,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | B,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n ? null : l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Ut(i), i.f |= Ye;
    } catch (a) {
      throw V(i), a;
    }
  else e !== null && Jt(i);
  var u = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (se | $t)) === 0;
  if (!u && !n && s && (l !== null && Nr(i, l), h !== null && (h.f & D) !== 0)) {
    var f = (
      /** @type {Derived} */
      h
    );
    (f.effects ?? (f.effects = [])).push(i);
  }
  return i;
}
function Or(t) {
  const e = X(z, t, !0);
  return () => {
    V(e);
  };
}
function Sr(t) {
  const e = X(z, t, !0);
  return (r = {}) => new Promise((s) => {
    r.outro ? Lr(e, () => {
      V(e), s(void 0);
    }) : (V(e), s(void 0));
  });
}
function Cr(t) {
  return X(ne, t, !1);
}
function be(t) {
  return X(Vt, t, !0);
}
function Rr(t, e = [], r = vr) {
  const s = e.map(r);
  return Ar(() => t(...s.map(T)));
}
function Ar(t, e = 0) {
  return X(Vt | Bt | e, t, !0);
}
function Dr(t, e = !0) {
  return X(Vt | U, t, !0, e);
}
function xe(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = h;
    I(null);
    try {
      e.call(null);
    } finally {
      I(r);
    }
  }
}
function Te(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var s = r.next;
    V(r, e), r = s;
  }
}
function Pr(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & U) === 0 && V(e), e = r;
  }
}
function V(t, e = !0) {
  var r = !1;
  if ((e || (t.f & Ue) !== 0) && t.nodes_start !== null) {
    for (var s = t.nodes_start, n = t.nodes_end; s !== null; ) {
      var l = s === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(s)
      );
      s.remove(), s = l;
    }
    r = !0;
  }
  Te(t, e && !r), Tt(t, 0), q(t, kt);
  var i = t.transitions;
  if (i !== null)
    for (const f of i)
      f.stop();
  xe(t);
  var u = t.parent;
  u !== null && u.first !== null && ke(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function ke(t) {
  var e = t.parent, r = t.prev, s = t.next;
  r !== null && (r.next = s), s !== null && (s.prev = r), e !== null && (e.first === t && (e.first = s), e.last === t && (e.last = r));
}
function Lr(t, e) {
  var r = [];
  Ne(t, r, !0), Fr(r, () => {
    V(t), e && e();
  });
}
function Fr(t, e) {
  var r = t.length;
  if (r > 0) {
    var s = () => --r || e();
    for (var n of t)
      n.out(s);
  } else
    e();
}
function Ne(t, e, r) {
  if ((t.f & mt) === 0) {
    if (t.f ^= mt, t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || r) && e.push(i);
    for (var s = t.first; s !== null; ) {
      var n = s.next, l = (s.f & He) !== 0 || (s.f & U) !== 0;
      Ne(s, e, l ? r : !1), s = n;
    }
  }
}
let g = null;
function ee(t) {
  g = t;
}
function Oe(t, e = !1, r) {
  g = {
    p: g,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  }, Nt && !e && (g.l = {
    s: null,
    u: null,
    r1: [],
    r2: S(!1)
  });
}
function Se(t) {
  const e = g;
  if (e !== null) {
    const i = e.e;
    if (i !== null) {
      var r = d, s = h;
      e.e = null;
      try {
        for (var n = 0; n < i.length; n++) {
          var l = i[n];
          j(l.effect), I(l.reaction), Cr(l.fn);
        }
      } finally {
        j(r), I(s);
      }
    }
    g = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function lt() {
  return !Nt || g !== null && g.l === null;
}
const Mr = ["touchstart", "touchmove"];
function Ir(t) {
  return Mr.includes(t);
}
function jr(t) {
  N && /* @__PURE__ */ nt(t) !== null && ge(t);
}
let re = !1;
function qr() {
  re || (re = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = r.__on_r) == null || e.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Vr(t) {
  var e = h, r = d;
  I(null), j(null);
  try {
    return t();
  } finally {
    I(e), j(r);
  }
}
function Br(t, e, r, s = r) {
  t.addEventListener(e, () => Vr(r));
  const n = t.__on_r;
  n ? t.__on_r = () => {
    n(), s(!0);
  } : t.__on_r = () => s(!0), qr();
}
const Ce = /* @__PURE__ */ new Set(), It = /* @__PURE__ */ new Set();
function Yr(t) {
  for (var e = 0; e < t.length; e++)
    Ce.add(t[e]);
  for (var r of It)
    r(t);
}
function ct(t) {
  var K;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), s = t.type, n = ((K = t.composedPath) == null ? void 0 : K.call(t)) || [], l = (
    /** @type {null | Element} */
    n[0] || t.target
  ), i = 0, u = t.__root;
  if (u) {
    var f = n.indexOf(u);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var a = n.indexOf(e);
    if (a === -1)
      return;
    f <= a && (i = f);
  }
  if (l = /** @type {Element} */
  n[i] || t.target, l !== e) {
    yt(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var _ = h, o = d;
    I(null), j(null);
    try {
      for (var c, v = []; l !== null; ) {
        var $ = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var b = l["__" + s];
          if (b !== void 0 && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l))
            if (Yt(b)) {
              var [J, ...it] = b;
              J.apply(l, [t, ...it]);
            } else
              b.call(l, t);
        } catch (Y) {
          c ? v.push(Y) : c = Y;
        }
        if (t.cancelBubble || $ === e || $ === null)
          break;
        l = $;
      }
      if (c) {
        for (let Y of v)
          queueMicrotask(() => {
            throw Y;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, I(_), j(o);
    }
  }
}
function Hr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function jt(t, e) {
  var r = (
    /** @type {Effect} */
    d
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Re(t, e) {
  var r = (e & qe) !== 0, s, n = !t.startsWith("<!>");
  return () => {
    if (N)
      return jt(w, null), w;
    s === void 0 && (s = Hr(n ? t : "<!>" + t), s = /** @type {Node} */
    /* @__PURE__ */ nt(s));
    var l = (
      /** @type {TemplateNode} */
      r || he ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    return jt(l, l), l;
  };
}
function Kt(t, e) {
  if (N) {
    d.nodes_end = w, ve();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Dt(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r + "");
}
function Ae(t, e) {
  return De(t, e);
}
function Ur(t, e) {
  Mt(), e.intro = e.intro ?? !1;
  const r = e.target, s = N, n = w;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nt(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== Ve); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ st(l);
    if (!l)
      throw tt;
    ut(!0), H(
      /** @type {Comment} */
      l
    ), ve();
    const i = De(t, { ...e, anchor: l });
    if (w === null || w.nodeType !== 8 || /** @type {Comment} */
    w.data !== Be)
      throw Ht(), tt;
    return ut(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === tt)
      return e.recover === !1 && er(), Mt(), ge(r), ut(!1), Ae(t, e);
    throw i;
  } finally {
    ut(s), H(n);
  }
}
const W = /* @__PURE__ */ new Map();
function De(t, { target: e, anchor: r, props: s = {}, events: n, context: l, intro: i = !0 }) {
  Mt();
  var u = /* @__PURE__ */ new Set(), f = (o) => {
    for (var c = 0; c < o.length; c++) {
      var v = o[c];
      if (!u.has(v)) {
        u.add(v);
        var $ = Ir(v);
        e.addEventListener(v, ct, { passive: $ });
        var b = W.get(v);
        b === void 0 ? (document.addEventListener(v, ct, { passive: $ }), W.set(v, 1)) : W.set(v, b + 1);
      }
    }
  };
  f(We(Ce)), It.add(f);
  var a = void 0, _ = Sr(() => {
    var o = r ?? e.appendChild(Et());
    return Dr(() => {
      if (l) {
        Oe({});
        var c = (
          /** @type {ComponentContext} */
          g
        );
        c.c = l;
      }
      n && (s.$$events = n), N && jt(
        /** @type {TemplateNode} */
        o,
        null
      ), a = t(o, s) || {}, N && (d.nodes_end = w), l && Se();
    }), () => {
      var $;
      for (var c of u) {
        e.removeEventListener(c, ct);
        var v = (
          /** @type {number} */
          W.get(c)
        );
        --v === 0 ? (document.removeEventListener(c, ct), W.delete(c)) : W.set(c, v);
      }
      It.delete(f), o !== r && (($ = o.parentNode) == null || $.removeChild(o));
    };
  });
  return qt.set(a, _), a;
}
let qt = /* @__PURE__ */ new WeakMap();
function Jr(t, e) {
  const r = qt.get(t);
  return r ? (qt.delete(t), r(e)) : Promise.resolve();
}
function Kr(t, e) {
  ze(() => {
    var r = t.getRootNode(), s = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!s.querySelector("#" + e.hash)) {
      const n = document.createElement("style");
      n.id = e.hash, n.textContent = e.code, s.appendChild(n);
    }
  });
}
function Wr(t, e, r = e) {
  var s = lt();
  Br(t, "input", (n) => {
    var l = n ? t.defaultValue : t.value;
    if (l = Pt(t) ? Lt(l) : l, r(l), s && l !== (l = e())) {
      var i = t.selectionStart, u = t.selectionEnd;
      t.value = l ?? "", u !== null && (t.selectionStart = i, t.selectionEnd = Math.min(u, t.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (N && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Tr(e) == null && t.value) && r(Pt(t) ? Lt(t.value) : t.value), be(() => {
    var n = e();
    Pt(t) && n === Lt(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function Pt(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Lt(t) {
  return t === "" ? null : +t;
}
function Gr(t) {
  return new Zr(t);
}
var F, x;
class Zr {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    Ct(this, F);
    /** @type {Record<string, any>} */
    Ct(this, x);
    var l;
    var r = /* @__PURE__ */ new Map(), s = (i, u) => {
      var f = /* @__PURE__ */ or(u);
      return r.set(i, f), f;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, u) {
          return T(r.get(u) ?? s(u, Reflect.get(i, u)));
        },
        has(i, u) {
          return u === Je ? !0 : (T(r.get(u) ?? s(u, Reflect.get(i, u))), Reflect.has(i, u));
        },
        set(i, u, f) {
          return C(r.get(u) ?? s(u, f), f), Reflect.set(i, u, f);
        }
      }
    );
    Rt(this, x, (e.hydrate ? Ur : Ae)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((l = e == null ? void 0 : e.props) != null && l.$$host) || e.sync === !1) && xr(), Rt(this, F, n.$$events);
    for (const i of Object.keys(y(this, x)))
      i === "$set" || i === "$destroy" || i === "$on" || yt(this, i, {
        get() {
          return y(this, x)[i];
        },
        /** @param {any} value */
        set(u) {
          y(this, x)[i] = u;
        },
        enumerable: !0
      });
    y(this, x).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(n, i);
    }, y(this, x).$destroy = () => {
      Jr(y(this, x));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    y(this, x).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    y(this, F)[e] = y(this, F)[e] || [];
    const s = (...n) => r.call(this, ...n);
    return y(this, F)[e].push(s), () => {
      y(this, F)[e] = y(this, F)[e].filter(
        /** @param {any} fn */
        (n) => n !== s
      );
    };
  }
  $destroy() {
    y(this, x).$destroy();
  }
}
F = new WeakMap(), x = new WeakMap();
let Pe;
typeof HTMLElement == "function" && (Pe = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, s) {
    super();
    /** The Svelte component constructor */
    O(this, "$$ctor");
    /** Slots */
    O(this, "$$s");
    /** @type {any} The Svelte component instance */
    O(this, "$$c");
    /** Whether or not the custom element is connected */
    O(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    O(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    O(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    O(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    O(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    O(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    O(this, "$$me");
    this.$$ctor = e, this.$$s = r, s && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, r, s) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(r), this.$$c) {
      const n = this.$$c.$on(e, r);
      this.$$l_u.set(r, n);
    }
    super.addEventListener(e, r, s);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, r, s) {
    if (super.removeEventListener(e, r, s), this.$$c) {
      const n = this.$$l_u.get(r);
      n && (n(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return (l) => {
          const i = document.createElement("slot");
          n !== "default" && (i.name = n), Kt(l, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, s = zr(this);
      for (const n of this.$$s)
        n in s && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), r.default = !0) : r[n] = e(n));
      for (const n of this.attributes) {
        const l = this.$$g_p(n.name);
        l in this.$$d || (this.$$d[l] = dt(l, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = Gr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Or(() => {
        be(() => {
          var n;
          this.$$r = !0;
          for (const l of wt(this.$$c)) {
            if (!((n = this.$$p_d[l]) != null && n.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const i = dt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, i);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const l of this.$$l[n]) {
          const i = this.$$c.$on(n, l);
          this.$$l_u.set(l, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, r, s) {
    var n;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = dt(e, s, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return wt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function dt(t, e, r, s) {
  var l;
  const n = (l = r[t]) == null ? void 0 : l.type;
  if (e = n === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !r[t])
    return e;
  if (s === "toAttribute")
    switch (n) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (n) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function zr(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function Le(t, e, r, s, n, l) {
  let i = class extends Pe {
    constructor() {
      super(t, r, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return wt(e).map(
        (u) => (e[u].attribute || u).toLowerCase()
      );
    }
  };
  return wt(e).forEach((u) => {
    yt(i.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        var o;
        f = dt(u, f, e), this.$$d[u] = f;
        var a = this.$$c;
        if (a) {
          var _ = (o = Z(a, u)) == null ? void 0 : o.get;
          _ ? a[u] = f : a.$set({ [u]: f });
        }
      }
    });
  }), s.forEach((u) => {
    yt(i.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), t.element = /** @type {any} */
  i, i;
}
ur();
var Qr = /* @__PURE__ */ Re('<div class="main">sss</div>');
function Fe(t) {
  var e = Qr();
  Kt(t, e);
}
Le(Fe, {}, [], [], !0);
var Xr = (t, e) => e(), tn = /* @__PURE__ */ Re('<div class="editor svelte-s5rj1m"><h3> </h3> <button> </button> <textarea class="w-full h-20 p-2 border"></textarea> <p class="text-red-700"> </p> <!></div>');
const en = {
  hash: "svelte-s5rj1m",
  code: ".editor.svelte-s5rj1m {padding:10px;border:1px solid #ccc;}"
};
function rn(t, e) {
  Oe(e, !0), Kr(t, en);
  let r = Qt(G(e.content)), s = Qt(0);
  function n() {
    C(s, T(s) + 1), e.increment(ar(T(s)));
  }
  var l = tn(), i = at(l), u = at(i, !0);
  ft(i);
  var f = ot(i, 2);
  f.__click = [Xr, n];
  var a = at(f);
  ft(f);
  var _ = ot(f, 2);
  jr(_);
  var o = ot(_, 2), c = at(o);
  ft(o);
  var v = ot(o, 2);
  Fe(v), ft(l), Rr(() => {
    Dt(u, e.id), Dt(a, `点击次数: ${T(s) ?? ""}`), Dt(c, `修改内容：${T(r) ?? ""}`);
  }), Wr(_, () => T(r), ($) => C(r, $)), Kt(t, l), Se();
}
Yr(["click"]);
Le(rn, {}, [], [], !0);
export {
  rn as default
};
