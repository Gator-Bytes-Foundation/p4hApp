!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/static/"),
    r((r.s = 5));
})([
  function (t, e, r) {
    var n;
    /*!
     * jQuery JavaScript Library v3.5.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-04-10T15:07Z
     */ !(function (e, r) {
      "use strict";
      "object" == typeof t.exports
        ? (t.exports = e.document
            ? r(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return r(t);
              })
        : r(e);
    })("undefined" != typeof window ? window : this, function (r, o) {
      "use strict";
      var i = [],
        a = Object.getPrototypeOf,
        l = i.slice,
        s = i.flat
          ? function (t) {
              return i.flat.call(t);
            }
          : function (t) {
              return i.concat.apply([], t);
            },
        d = i.push,
        m = i.indexOf,
        c = {},
        p = c.toString,
        f = c.hasOwnProperty,
        u = f.toString,
        g = u.call(Object),
        b = {},
        h = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        x = function (t) {
          return null != t && t === t.window;
        },
        w = r.document,
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function y(t, e, r) {
        var n,
          o,
          i = (r = r || w).createElement("script");
        if (((i.text = t), e))
          for (n in v)
            (o = e[n] || (e.getAttribute && e.getAttribute(n))) &&
              i.setAttribute(n, o);
        r.head.appendChild(i).parentNode.removeChild(i);
      }
      function k(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? c[p.call(t)] || "object"
          : typeof t;
      }
      var T = function (t, e) {
        return new T.fn.init(t, e);
      };
      function _(t) {
        var e = !!t && "length" in t && t.length,
          r = k(t);
        return (
          !h(t) &&
          !x(t) &&
          ("array" === r ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      (T.fn = T.prototype = {
        jquery: "3.5.0",
        constructor: T,
        length: 0,
        toArray: function () {
          return l.call(this);
        },
        get: function (t) {
          return null == t
            ? l.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          var e = T.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function (t) {
          return T.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            T.map(this, function (e, r) {
              return t.call(e, r, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            T.grep(this, function (t, e) {
              return (e + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            T.grep(this, function (t, e) {
              return e % 2;
            })
          );
        },
        eq: function (t) {
          var e = this.length,
            r = +t + (t < 0 ? e : 0);
          return this.pushStack(r >= 0 && r < e ? [this[r]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: d,
        sort: i.sort,
        splice: i.splice,
      }),
        (T.extend = T.fn.extend = function () {
          var t,
            e,
            r,
            n,
            o,
            i,
            a = arguments[0] || {},
            l = 1,
            s = arguments.length,
            d = !1;
          for (
            "boolean" == typeof a && ((d = a), (a = arguments[l] || {}), l++),
              "object" == typeof a || h(a) || (a = {}),
              l === s && ((a = this), l--);
            l < s;
            l++
          )
            if (null != (t = arguments[l]))
              for (e in t)
                (n = t[e]),
                  "__proto__" !== e &&
                    a !== n &&
                    (d && n && (T.isPlainObject(n) || (o = Array.isArray(n)))
                      ? ((r = a[e]),
                        (i =
                          o && !Array.isArray(r)
                            ? []
                            : o || T.isPlainObject(r)
                            ? r
                            : {}),
                        (o = !1),
                        (a[e] = T.extend(d, i, n)))
                      : void 0 !== n && (a[e] = n));
          return a;
        }),
        T.extend({
          expando: "jQuery" + ("3.5.0" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, r;
            return (
              !(!t || "[object Object]" !== p.call(t)) &&
              (!(e = a(t)) ||
                ("function" ==
                  typeof (r = f.call(e, "constructor") && e.constructor) &&
                  u.call(r) === g))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t, e, r) {
            y(t, { nonce: e && e.nonce }, r);
          },
          each: function (t, e) {
            var r,
              n = 0;
            if (_(t))
              for (r = t.length; n < r && !1 !== e.call(t[n], n, t[n]); n++);
            else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
            return t;
          },
          makeArray: function (t, e) {
            var r = e || [];
            return (
              null != t &&
                (_(Object(t))
                  ? T.merge(r, "string" == typeof t ? [t] : t)
                  : d.call(r, t)),
              r
            );
          },
          inArray: function (t, e, r) {
            return null == e ? -1 : m.call(e, t, r);
          },
          merge: function (t, e) {
            for (var r = +e.length, n = 0, o = t.length; n < r; n++)
              t[o++] = e[n];
            return (t.length = o), t;
          },
          grep: function (t, e, r) {
            for (var n = [], o = 0, i = t.length, a = !r; o < i; o++)
              !e(t[o], o) !== a && n.push(t[o]);
            return n;
          },
          map: function (t, e, r) {
            var n,
              o,
              i = 0,
              a = [];
            if (_(t))
              for (n = t.length; i < n; i++)
                null != (o = e(t[i], i, r)) && a.push(o);
            else for (i in t) null != (o = e(t[i], i, r)) && a.push(o);
            return s(a);
          },
          guid: 1,
          support: b,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = i[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            c["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var C =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (t) {
          var e,
            r,
            n,
            o,
            i,
            a,
            l,
            s,
            d,
            m,
            c,
            p,
            f,
            u,
            g,
            b,
            h,
            x,
            w,
            v = "sizzle" + 1 * new Date(),
            y = t.document,
            k = 0,
            T = 0,
            _ = st(),
            C = st(),
            E = st(),
            D = st(),
            j = function (t, e) {
              return t === e && (c = !0), 0;
            },
            O = {}.hasOwnProperty,
            S = [],
            A = S.pop,
            z = S.push,
            L = S.push,
            I = S.slice,
            N = function (t, e) {
              for (var r = 0, n = t.length; r < n; r++)
                if (t[r] === e) return r;
              return -1;
            },
            q =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            M =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              R +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            P =
              "\\[" +
              R +
              "*(" +
              M +
              ")(?:" +
              R +
              "*([*^$|!~]?=)" +
              R +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              M +
              "))|)" +
              R +
              "*\\]",
            B =
              ":(" +
              M +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              P +
              ")*)|.*)\\)|)",
            X = new RegExp(R + "+", "g"),
            H = new RegExp(
              "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
              "g"
            ),
            U = new RegExp("^" + R + "*," + R + "*"),
            Z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            W = new RegExp(R + "|>"),
            Y = new RegExp(B),
            F = new RegExp("^" + M + "$"),
            $ = {
              ID: new RegExp("^#(" + M + ")"),
              CLASS: new RegExp("^\\.(" + M + ")"),
              TAG: new RegExp("^(" + M + "|[*])"),
              ATTR: new RegExp("^" + P),
              PSEUDO: new RegExp("^" + B),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  R +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  R +
                  "*(?:([+-]|)" +
                  R +
                  "*(\\d+)|))" +
                  R +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + q + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  R +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  R +
                  "*((?:-\\d)?\\d*)" +
                  R +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            K = /HTML$/i,
            V = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            rt = function (t, e) {
              var r = "0x" + t.slice(1) - 65536;
              return (
                e ||
                (r < 0
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320))
              );
            },
            nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ot = function (t, e) {
              return e
                ? "\0" === t
                  ? "�"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            },
            it = function () {
              p();
            },
            at = vt(
              function (t) {
                return (
                  !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            L.apply((S = I.call(y.childNodes)), y.childNodes),
              S[y.childNodes.length].nodeType;
          } catch (t) {
            L = {
              apply: S.length
                ? function (t, e) {
                    z.apply(t, I.call(e));
                  }
                : function (t, e) {
                    for (var r = t.length, n = 0; (t[r++] = e[n++]); );
                    t.length = r - 1;
                  },
            };
          }
          function lt(t, e, n, o) {
            var i,
              l,
              d,
              m,
              c,
              u,
              h,
              x = e && e.ownerDocument,
              y = e ? e.nodeType : 9;
            if (
              ((n = n || []),
              "string" != typeof t || !t || (1 !== y && 9 !== y && 11 !== y))
            )
              return n;
            if (!o && (p(e), (e = e || f), g)) {
              if (11 !== y && (c = Q.exec(t)))
                if ((i = c[1])) {
                  if (9 === y) {
                    if (!(d = e.getElementById(i))) return n;
                    if (d.id === i) return n.push(d), n;
                  } else if (
                    x &&
                    (d = x.getElementById(i)) &&
                    w(e, d) &&
                    d.id === i
                  )
                    return n.push(d), n;
                } else {
                  if (c[2]) return L.apply(n, e.getElementsByTagName(t)), n;
                  if (
                    (i = c[3]) &&
                    r.getElementsByClassName &&
                    e.getElementsByClassName
                  )
                    return L.apply(n, e.getElementsByClassName(i)), n;
                }
              if (
                r.qsa &&
                !D[t + " "] &&
                (!b || !b.test(t)) &&
                (1 !== y || "object" !== e.nodeName.toLowerCase())
              ) {
                if (((h = t), (x = e), 1 === y && (W.test(t) || Z.test(t)))) {
                  for (
                    ((x = (tt.test(t) && ht(e.parentNode)) || e) === e &&
                      r.scope) ||
                      ((m = e.getAttribute("id"))
                        ? (m = m.replace(nt, ot))
                        : e.setAttribute("id", (m = v))),
                      l = (u = a(t)).length;
                    l--;

                  )
                    u[l] = (m ? "#" + m : ":scope") + " " + wt(u[l]);
                  h = u.join(",");
                }
                try {
                  return L.apply(n, x.querySelectorAll(h)), n;
                } catch (e) {
                  D(t, !0);
                } finally {
                  m === v && e.removeAttribute("id");
                }
              }
            }
            return s(t.replace(H, "$1"), e, n, o);
          }
          function st() {
            var t = [];
            return function e(r, o) {
              return (
                t.push(r + " ") > n.cacheLength && delete e[t.shift()],
                (e[r + " "] = o)
              );
            };
          }
          function dt(t) {
            return (t[v] = !0), t;
          }
          function mt(t) {
            var e = f.createElement("fieldset");
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function ct(t, e) {
            for (var r = t.split("|"), o = r.length; o--; )
              n.attrHandle[r[o]] = e;
          }
          function pt(t, e) {
            var r = e && t,
              n =
                r &&
                1 === t.nodeType &&
                1 === e.nodeType &&
                t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (r) for (; (r = r.nextSibling); ) if (r === e) return -1;
            return t ? 1 : -1;
          }
          function ft(t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          }
          function ut(t) {
            return function (e) {
              var r = e.nodeName.toLowerCase();
              return ("input" === r || "button" === r) && e.type === t;
            };
          }
          function gt(t) {
            return function (e) {
              return "form" in e
                ? e.parentNode && !1 === e.disabled
                  ? "label" in e
                    ? "label" in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && at(e) === t)
                  : e.disabled === t
                : "label" in e && e.disabled === t;
            };
          }
          function bt(t) {
            return dt(function (e) {
              return (
                (e = +e),
                dt(function (r, n) {
                  for (var o, i = t([], r.length, e), a = i.length; a--; )
                    r[(o = i[a])] && (r[o] = !(n[o] = r[o]));
                })
              );
            });
          }
          function ht(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (e in ((r = lt.support = {}),
          (i = lt.isXML = function (t) {
            var e = t.namespaceURI,
              r = (t.ownerDocument || t).documentElement;
            return !K.test(e || (r && r.nodeName) || "HTML");
          }),
          (p = lt.setDocument = function (t) {
            var e,
              o,
              a = t ? t.ownerDocument || t : y;
            return a != f && 9 === a.nodeType && a.documentElement
              ? ((u = (f = a).documentElement),
                (g = !i(f)),
                y != f &&
                  (o = f.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener("unload", it, !1)
                    : o.attachEvent && o.attachEvent("onunload", it)),
                (r.scope = mt(function (t) {
                  return (
                    u.appendChild(t).appendChild(f.createElement("div")),
                    void 0 !== t.querySelectorAll &&
                      !t.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (r.attributes = mt(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (r.getElementsByTagName = mt(function (t) {
                  return (
                    t.appendChild(f.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (r.getElementsByClassName = J.test(f.getElementsByClassName)),
                (r.getById = mt(function (t) {
                  return (
                    (u.appendChild(t).id = v),
                    !f.getElementsByName || !f.getElementsByName(v).length
                  );
                })),
                r.getById
                  ? ((n.filter.ID = function (t) {
                      var e = t.replace(et, rt);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }),
                    (n.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && g) {
                        var r = e.getElementById(t);
                        return r ? [r] : [];
                      }
                    }))
                  : ((n.filter.ID = function (t) {
                      var e = t.replace(et, rt);
                      return function (t) {
                        var r =
                          void 0 !== t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return r && r.value === e;
                      };
                    }),
                    (n.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && g) {
                        var r,
                          n,
                          o,
                          i = e.getElementById(t);
                        if (i) {
                          if ((r = i.getAttributeNode("id")) && r.value === t)
                            return [i];
                          for (
                            o = e.getElementsByName(t), n = 0;
                            (i = o[n++]);

                          )
                            if ((r = i.getAttributeNode("id")) && r.value === t)
                              return [i];
                        }
                        return [];
                      }
                    })),
                (n.find.TAG = r.getElementsByTagName
                  ? function (t, e) {
                      return void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : r.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var r,
                        n = [],
                        o = 0,
                        i = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (r = i[o++]); ) 1 === r.nodeType && n.push(r);
                        return n;
                      }
                      return i;
                    }),
                (n.find.CLASS =
                  r.getElementsByClassName &&
                  function (t, e) {
                    if (void 0 !== e.getElementsByClassName && g)
                      return e.getElementsByClassName(t);
                  }),
                (h = []),
                (b = []),
                (r.qsa = J.test(f.querySelectorAll)) &&
                  (mt(function (t) {
                    var e;
                    (u.appendChild(t).innerHTML =
                      "<a id='" +
                      v +
                      "'></a><select id='" +
                      v +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        b.push("[*^$]=" + R + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        b.push("\\[" + R + "*(?:value|" + q + ")"),
                      t.querySelectorAll("[id~=" + v + "-]").length ||
                        b.push("~="),
                      (e = f.createElement("input")).setAttribute("name", ""),
                      t.appendChild(e),
                      t.querySelectorAll("[name='']").length ||
                        b.push(
                          "\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"
                        ),
                      t.querySelectorAll(":checked").length ||
                        b.push(":checked"),
                      t.querySelectorAll("a#" + v + "+*").length ||
                        b.push(".#.+[+~]"),
                      t.querySelectorAll("\\\f"),
                      b.push("[\\r\\n\\f]");
                  }),
                  mt(function (t) {
                    t.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = f.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        b.push("name" + R + "*[*^$|!~]?="),
                      2 !== t.querySelectorAll(":enabled").length &&
                        b.push(":enabled", ":disabled"),
                      (u.appendChild(t).disabled = !0),
                      2 !== t.querySelectorAll(":disabled").length &&
                        b.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      b.push(",.*:");
                  })),
                (r.matchesSelector = J.test(
                  (x =
                    u.matches ||
                    u.webkitMatchesSelector ||
                    u.mozMatchesSelector ||
                    u.oMatchesSelector ||
                    u.msMatchesSelector)
                )) &&
                  mt(function (t) {
                    (r.disconnectedMatch = x.call(t, "*")),
                      x.call(t, "[s!='']:x"),
                      h.push("!=", B);
                  }),
                (b = b.length && new RegExp(b.join("|"))),
                (h = h.length && new RegExp(h.join("|"))),
                (e = J.test(u.compareDocumentPosition)),
                (w =
                  e || J.test(u.contains)
                    ? function (t, e) {
                        var r = 9 === t.nodeType ? t.documentElement : t,
                          n = e && e.parentNode;
                        return (
                          t === n ||
                          !(
                            !n ||
                            1 !== n.nodeType ||
                            !(r.contains
                              ? r.contains(n)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(n))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (j = e
                  ? function (t, e) {
                      if (t === e) return (c = !0), 0;
                      var n =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return (
                        n ||
                        (1 &
                          (n =
                            (t.ownerDocument || t) == (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1) ||
                        (!r.sortDetached && e.compareDocumentPosition(t) === n)
                          ? t == f || (t.ownerDocument == y && w(y, t))
                            ? -1
                            : e == f || (e.ownerDocument == y && w(y, e))
                            ? 1
                            : m
                            ? N(m, t) - N(m, e)
                            : 0
                          : 4 & n
                          ? -1
                          : 1)
                      );
                    }
                  : function (t, e) {
                      if (t === e) return (c = !0), 0;
                      var r,
                        n = 0,
                        o = t.parentNode,
                        i = e.parentNode,
                        a = [t],
                        l = [e];
                      if (!o || !i)
                        return t == f
                          ? -1
                          : e == f
                          ? 1
                          : o
                          ? -1
                          : i
                          ? 1
                          : m
                          ? N(m, t) - N(m, e)
                          : 0;
                      if (o === i) return pt(t, e);
                      for (r = t; (r = r.parentNode); ) a.unshift(r);
                      for (r = e; (r = r.parentNode); ) l.unshift(r);
                      for (; a[n] === l[n]; ) n++;
                      return n
                        ? pt(a[n], l[n])
                        : a[n] == y
                        ? -1
                        : l[n] == y
                        ? 1
                        : 0;
                    }),
                f)
              : f;
          }),
          (lt.matches = function (t, e) {
            return lt(t, null, null, e);
          }),
          (lt.matchesSelector = function (t, e) {
            if (
              (p(t),
              r.matchesSelector &&
                g &&
                !D[e + " "] &&
                (!h || !h.test(e)) &&
                (!b || !b.test(e)))
            )
              try {
                var n = x.call(t, e);
                if (
                  n ||
                  r.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return n;
              } catch (t) {
                D(e, !0);
              }
            return lt(e, f, null, [t]).length > 0;
          }),
          (lt.contains = function (t, e) {
            return (t.ownerDocument || t) != f && p(t), w(t, e);
          }),
          (lt.attr = function (t, e) {
            (t.ownerDocument || t) != f && p(t);
            var o = n.attrHandle[e.toLowerCase()],
              i =
                o && O.call(n.attrHandle, e.toLowerCase())
                  ? o(t, e, !g)
                  : void 0;
            return void 0 !== i
              ? i
              : r.attributes || !g
              ? t.getAttribute(e)
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
          (lt.escape = function (t) {
            return (t + "").replace(nt, ot);
          }),
          (lt.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (lt.uniqueSort = function (t) {
            var e,
              n = [],
              o = 0,
              i = 0;
            if (
              ((c = !r.detectDuplicates),
              (m = !r.sortStable && t.slice(0)),
              t.sort(j),
              c)
            ) {
              for (; (e = t[i++]); ) e === t[i] && (o = n.push(i));
              for (; o--; ) t.splice(n[o], 1);
            }
            return (m = null), t;
          }),
          (o = lt.getText = function (t) {
            var e,
              r = "",
              n = 0,
              i = t.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) r += o(t);
              } else if (3 === i || 4 === i) return t.nodeValue;
            } else for (; (e = t[n++]); ) r += o(e);
            return r;
          }),
          ((n = lt.selectors = {
            cacheLength: 50,
            createPseudo: dt,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(et, rt)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(et, rt)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || lt.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && lt.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  r = !t[6] && t[2];
                return $.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : r &&
                        Y.test(r) &&
                        (e = a(r, !0)) &&
                        (e = r.indexOf(")", r.length - e) - r.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = r.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(et, rt).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = _[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) &&
                    _(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, e, r) {
                return function (n) {
                  var o = lt.attr(n, t);
                  return null == o
                    ? "!=" === e
                    : !e ||
                        ((o += ""),
                        "=" === e
                          ? o === r
                          : "!=" === e
                          ? o !== r
                          : "^=" === e
                          ? r && 0 === o.indexOf(r)
                          : "*=" === e
                          ? r && o.indexOf(r) > -1
                          : "$=" === e
                          ? r && o.slice(-r.length) === r
                          : "~=" === e
                          ? (" " + o.replace(X, " ") + " ").indexOf(r) > -1
                          : "|=" === e &&
                            (o === r || o.slice(0, r.length + 1) === r + "-"));
                };
              },
              CHILD: function (t, e, r, n, o) {
                var i = "nth" !== t.slice(0, 3),
                  a = "last" !== t.slice(-4),
                  l = "of-type" === e;
                return 1 === n && 0 === o
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, r, s) {
                      var d,
                        m,
                        c,
                        p,
                        f,
                        u,
                        g = i !== a ? "nextSibling" : "previousSibling",
                        b = e.parentNode,
                        h = l && e.nodeName.toLowerCase(),
                        x = !s && !l,
                        w = !1;
                      if (b) {
                        if (i) {
                          for (; g; ) {
                            for (p = e; (p = p[g]); )
                              if (
                                l
                                  ? p.nodeName.toLowerCase() === h
                                  : 1 === p.nodeType
                              )
                                return !1;
                            u = g = "only" === t && !u && "nextSibling";
                          }
                          return !0;
                        }
                        if (((u = [a ? b.firstChild : b.lastChild]), a && x)) {
                          for (
                            w =
                              (f =
                                (d =
                                  (m =
                                    (c = (p = b)[v] || (p[v] = {}))[
                                      p.uniqueID
                                    ] || (c[p.uniqueID] = {}))[t] || [])[0] ===
                                  k && d[1]) && d[2],
                              p = f && b.childNodes[f];
                            (p = (++f && p && p[g]) || (w = f = 0) || u.pop());

                          )
                            if (1 === p.nodeType && ++w && p === e) {
                              m[t] = [k, f, w];
                              break;
                            }
                        } else if (
                          (x &&
                            (w = f =
                              (d =
                                (m =
                                  (c = (p = e)[v] || (p[v] = {}))[p.uniqueID] ||
                                  (c[p.uniqueID] = {}))[t] || [])[0] === k &&
                              d[1]),
                          !1 === w)
                        )
                          for (
                            ;
                            (p =
                              (++f && p && p[g]) || (w = f = 0) || u.pop()) &&
                            ((l
                              ? p.nodeName.toLowerCase() !== h
                              : 1 !== p.nodeType) ||
                              !++w ||
                              (x &&
                                ((m =
                                  (c = p[v] || (p[v] = {}))[p.uniqueID] ||
                                  (c[p.uniqueID] = {}))[t] = [k, w]),
                              p !== e));

                          );
                        return (w -= o) === n || (w % n == 0 && w / n >= 0);
                      }
                    };
              },
              PSEUDO: function (t, e) {
                var r,
                  o =
                    n.pseudos[t] ||
                    n.setFilters[t.toLowerCase()] ||
                    lt.error("unsupported pseudo: " + t);
                return o[v]
                  ? o(e)
                  : o.length > 1
                  ? ((r = [t, t, "", e]),
                    n.setFilters.hasOwnProperty(t.toLowerCase())
                      ? dt(function (t, r) {
                          for (var n, i = o(t, e), a = i.length; a--; )
                            t[(n = N(t, i[a]))] = !(r[n] = i[a]);
                        })
                      : function (t) {
                          return o(t, 0, r);
                        })
                  : o;
              },
            },
            pseudos: {
              not: dt(function (t) {
                var e = [],
                  r = [],
                  n = l(t.replace(H, "$1"));
                return n[v]
                  ? dt(function (t, e, r, o) {
                      for (var i, a = n(t, null, o, []), l = t.length; l--; )
                        (i = a[l]) && (t[l] = !(e[l] = i));
                    })
                  : function (t, o, i) {
                      return (
                        (e[0] = t), n(e, null, i, r), (e[0] = null), !r.pop()
                      );
                    };
              }),
              has: dt(function (t) {
                return function (e) {
                  return lt(t, e).length > 0;
                };
              }),
              contains: dt(function (t) {
                return (
                  (t = t.replace(et, rt)),
                  function (e) {
                    return (e.textContent || o(e)).indexOf(t) > -1;
                  }
                );
              }),
              lang: dt(function (t) {
                return (
                  F.test(t || "") || lt.error("unsupported lang: " + t),
                  (t = t.replace(et, rt).toLowerCase()),
                  function (e) {
                    var r;
                    do {
                      if (
                        (r = g
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (r = r.toLowerCase()) === t ||
                          0 === r.indexOf(t + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var r = t.location && t.location.hash;
                return r && r.slice(1) === e.id;
              },
              root: function (t) {
                return t === u;
              },
              focus: function (t) {
                return (
                  t === f.activeElement &&
                  (!f.hasFocus || f.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: gt(!1),
              disabled: gt(!0),
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !n.pseudos.empty(t);
              },
              header: function (t) {
                return G.test(t.nodeName);
              },
              input: function (t) {
                return V.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: bt(function () {
                return [0];
              }),
              last: bt(function (t, e) {
                return [e - 1];
              }),
              eq: bt(function (t, e, r) {
                return [r < 0 ? r + e : r];
              }),
              even: bt(function (t, e) {
                for (var r = 0; r < e; r += 2) t.push(r);
                return t;
              }),
              odd: bt(function (t, e) {
                for (var r = 1; r < e; r += 2) t.push(r);
                return t;
              }),
              lt: bt(function (t, e, r) {
                for (var n = r < 0 ? r + e : r > e ? e : r; --n >= 0; )
                  t.push(n);
                return t;
              }),
              gt: bt(function (t, e, r) {
                for (var n = r < 0 ? r + e : r; ++n < e; ) t.push(n);
                return t;
              }),
            },
          }).pseudos.nth = n.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            n.pseudos[e] = ft(e);
          for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ut(e);
          function xt() {}
          function wt(t) {
            for (var e = 0, r = t.length, n = ""; e < r; e++) n += t[e].value;
            return n;
          }
          function vt(t, e, r) {
            var n = e.dir,
              o = e.next,
              i = o || n,
              a = r && "parentNode" === i,
              l = T++;
            return e.first
              ? function (e, r, o) {
                  for (; (e = e[n]); )
                    if (1 === e.nodeType || a) return t(e, r, o);
                  return !1;
                }
              : function (e, r, s) {
                  var d,
                    m,
                    c,
                    p = [k, l];
                  if (s) {
                    for (; (e = e[n]); )
                      if ((1 === e.nodeType || a) && t(e, r, s)) return !0;
                  } else
                    for (; (e = e[n]); )
                      if (1 === e.nodeType || a)
                        if (
                          ((m =
                            (c = e[v] || (e[v] = {}))[e.uniqueID] ||
                            (c[e.uniqueID] = {})),
                          o && o === e.nodeName.toLowerCase())
                        )
                          e = e[n] || e;
                        else {
                          if ((d = m[i]) && d[0] === k && d[1] === l)
                            return (p[2] = d[2]);
                          if (((m[i] = p), (p[2] = t(e, r, s)))) return !0;
                        }
                  return !1;
                };
          }
          function yt(t) {
            return t.length > 1
              ? function (e, r, n) {
                  for (var o = t.length; o--; ) if (!t[o](e, r, n)) return !1;
                  return !0;
                }
              : t[0];
          }
          function kt(t, e, r, n, o) {
            for (var i, a = [], l = 0, s = t.length, d = null != e; l < s; l++)
              (i = t[l]) && ((r && !r(i, n, o)) || (a.push(i), d && e.push(l)));
            return a;
          }
          function Tt(t, e, r, n, o, i) {
            return (
              n && !n[v] && (n = Tt(n)),
              o && !o[v] && (o = Tt(o, i)),
              dt(function (i, a, l, s) {
                var d,
                  m,
                  c,
                  p = [],
                  f = [],
                  u = a.length,
                  g =
                    i ||
                    (function (t, e, r) {
                      for (var n = 0, o = e.length; n < o; n++) lt(t, e[n], r);
                      return r;
                    })(e || "*", l.nodeType ? [l] : l, []),
                  b = !t || (!i && e) ? g : kt(g, p, t, l, s),
                  h = r ? (o || (i ? t : u || n) ? [] : a) : b;
                if ((r && r(b, h, l, s), n))
                  for (d = kt(h, f), n(d, [], l, s), m = d.length; m--; )
                    (c = d[m]) && (h[f[m]] = !(b[f[m]] = c));
                if (i) {
                  if (o || t) {
                    if (o) {
                      for (d = [], m = h.length; m--; )
                        (c = h[m]) && d.push((b[m] = c));
                      o(null, (h = []), d, s);
                    }
                    for (m = h.length; m--; )
                      (c = h[m]) &&
                        (d = o ? N(i, c) : p[m]) > -1 &&
                        (i[d] = !(a[d] = c));
                  }
                } else (h = kt(h === a ? h.splice(u, h.length) : h)), o ? o(null, a, h, s) : L.apply(a, h);
              })
            );
          }
          function _t(t) {
            for (
              var e,
                r,
                o,
                i = t.length,
                a = n.relative[t[0].type],
                l = a || n.relative[" "],
                s = a ? 1 : 0,
                m = vt(
                  function (t) {
                    return t === e;
                  },
                  l,
                  !0
                ),
                c = vt(
                  function (t) {
                    return N(e, t) > -1;
                  },
                  l,
                  !0
                ),
                p = [
                  function (t, r, n) {
                    var o =
                      (!a && (n || r !== d)) ||
                      ((e = r).nodeType ? m(t, r, n) : c(t, r, n));
                    return (e = null), o;
                  },
                ];
              s < i;
              s++
            )
              if ((r = n.relative[t[s].type])) p = [vt(yt(p), r)];
              else {
                if ((r = n.filter[t[s].type].apply(null, t[s].matches))[v]) {
                  for (o = ++s; o < i && !n.relative[t[o].type]; o++);
                  return Tt(
                    s > 1 && yt(p),
                    s > 1 &&
                      wt(
                        t
                          .slice(0, s - 1)
                          .concat({ value: " " === t[s - 2].type ? "*" : "" })
                      ).replace(H, "$1"),
                    r,
                    s < o && _t(t.slice(s, o)),
                    o < i && _t((t = t.slice(o))),
                    o < i && wt(t)
                  );
                }
                p.push(r);
              }
            return yt(p);
          }
          return (
            (xt.prototype = n.filters = n.pseudos),
            (n.setFilters = new xt()),
            (a = lt.tokenize = function (t, e) {
              var r,
                o,
                i,
                a,
                l,
                s,
                d,
                m = C[t + " "];
              if (m) return e ? 0 : m.slice(0);
              for (l = t, s = [], d = n.preFilter; l; ) {
                for (a in ((r && !(o = U.exec(l))) ||
                  (o && (l = l.slice(o[0].length) || l), s.push((i = []))),
                (r = !1),
                (o = Z.exec(l)) &&
                  ((r = o.shift()),
                  i.push({ value: r, type: o[0].replace(H, " ") }),
                  (l = l.slice(r.length))),
                n.filter))
                  !(o = $[a].exec(l)) ||
                    (d[a] && !(o = d[a](o))) ||
                    ((r = o.shift()),
                    i.push({ value: r, type: a, matches: o }),
                    (l = l.slice(r.length)));
                if (!r) break;
              }
              return e ? l.length : l ? lt.error(t) : C(t, s).slice(0);
            }),
            (l = lt.compile = function (t, e) {
              var r,
                o = [],
                i = [],
                l = E[t + " "];
              if (!l) {
                for (e || (e = a(t)), r = e.length; r--; )
                  (l = _t(e[r]))[v] ? o.push(l) : i.push(l);
                (l = E(
                  t,
                  (function (t, e) {
                    var r = e.length > 0,
                      o = t.length > 0,
                      i = function (i, a, l, s, m) {
                        var c,
                          u,
                          b,
                          h = 0,
                          x = "0",
                          w = i && [],
                          v = [],
                          y = d,
                          T = i || (o && n.find.TAG("*", m)),
                          _ = (k += null == y ? 1 : Math.random() || 0.1),
                          C = T.length;
                        for (
                          m && (d = a == f || a || m);
                          x !== C && null != (c = T[x]);
                          x++
                        ) {
                          if (o && c) {
                            for (
                              u = 0,
                                a || c.ownerDocument == f || (p(c), (l = !g));
                              (b = t[u++]);

                            )
                              if (b(c, a || f, l)) {
                                s.push(c);
                                break;
                              }
                            m && (k = _);
                          }
                          r && ((c = !b && c) && h--, i && w.push(c));
                        }
                        if (((h += x), r && x !== h)) {
                          for (u = 0; (b = e[u++]); ) b(w, v, a, l);
                          if (i) {
                            if (h > 0)
                              for (; x--; ) w[x] || v[x] || (v[x] = A.call(s));
                            v = kt(v);
                          }
                          L.apply(s, v),
                            m &&
                              !i &&
                              v.length > 0 &&
                              h + e.length > 1 &&
                              lt.uniqueSort(s);
                        }
                        return m && ((k = _), (d = y)), w;
                      };
                    return r ? dt(i) : i;
                  })(i, o)
                )).selector = t;
              }
              return l;
            }),
            (s = lt.select = function (t, e, r, o) {
              var i,
                s,
                d,
                m,
                c,
                p = "function" == typeof t && t,
                f = !o && a((t = p.selector || t));
              if (((r = r || []), 1 === f.length)) {
                if (
                  (s = f[0] = f[0].slice(0)).length > 2 &&
                  "ID" === (d = s[0]).type &&
                  9 === e.nodeType &&
                  g &&
                  n.relative[s[1].type]
                ) {
                  if (
                    !(e = (n.find.ID(d.matches[0].replace(et, rt), e) || [])[0])
                  )
                    return r;
                  p && (e = e.parentNode),
                    (t = t.slice(s.shift().value.length));
                }
                for (
                  i = $.needsContext.test(t) ? 0 : s.length;
                  i-- && ((d = s[i]), !n.relative[(m = d.type)]);

                )
                  if (
                    (c = n.find[m]) &&
                    (o = c(
                      d.matches[0].replace(et, rt),
                      (tt.test(s[0].type) && ht(e.parentNode)) || e
                    ))
                  ) {
                    if ((s.splice(i, 1), !(t = o.length && wt(s))))
                      return L.apply(r, o), r;
                    break;
                  }
              }
              return (
                (p || l(t, f))(
                  o,
                  e,
                  !g,
                  r,
                  !e || (tt.test(t) && ht(e.parentNode)) || e
                ),
                r
              );
            }),
            (r.sortStable = v.split("").sort(j).join("") === v),
            (r.detectDuplicates = !!c),
            p(),
            (r.sortDetached = mt(function (t) {
              return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
            })),
            mt(function (t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                "#" === t.firstChild.getAttribute("href")
              );
            }) ||
              ct("type|href|height|width", function (t, e, r) {
                if (!r)
                  return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
              }),
            (r.attributes &&
              mt(function (t) {
                return (
                  (t.innerHTML = "<input/>"),
                  t.firstChild.setAttribute("value", ""),
                  "" === t.firstChild.getAttribute("value")
                );
              })) ||
              ct("value", function (t, e, r) {
                if (!r && "input" === t.nodeName.toLowerCase())
                  return t.defaultValue;
              }),
            mt(function (t) {
              return null == t.getAttribute("disabled");
            }) ||
              ct(q, function (t, e, r) {
                var n;
                if (!r)
                  return !0 === t[e]
                    ? e.toLowerCase()
                    : (n = t.getAttributeNode(e)) && n.specified
                    ? n.value
                    : null;
              }),
            lt
          );
        })(r);
      (T.find = C),
        (T.expr = C.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = C.uniqueSort),
        (T.text = C.getText),
        (T.isXMLDoc = C.isXML),
        (T.contains = C.contains),
        (T.escapeSelector = C.escape);
      var E = function (t, e, r) {
          for (var n = [], o = void 0 !== r; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (o && T(t).is(r)) break;
              n.push(t);
            }
          return n;
        },
        D = function (t, e) {
          for (var r = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && r.push(t);
          return r;
        },
        j = T.expr.match.needsContext;
      function O(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function A(t, e, r) {
        return h(e)
          ? T.grep(t, function (t, n) {
              return !!e.call(t, n, t) !== r;
            })
          : e.nodeType
          ? T.grep(t, function (t) {
              return (t === e) !== r;
            })
          : "string" != typeof e
          ? T.grep(t, function (t) {
              return m.call(e, t) > -1 !== r;
            })
          : T.filter(e, t, r);
      }
      (T.filter = function (t, e, r) {
        var n = e[0];
        return (
          r && (t = ":not(" + t + ")"),
          1 === e.length && 1 === n.nodeType
            ? T.find.matchesSelector(n, t)
              ? [n]
              : []
            : T.find.matches(
                t,
                T.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (t) {
            var e,
              r,
              n = this.length,
              o = this;
            if ("string" != typeof t)
              return this.pushStack(
                T(t).filter(function () {
                  for (e = 0; e < n; e++) if (T.contains(o[e], this)) return !0;
                })
              );
            for (r = this.pushStack([]), e = 0; e < n; e++) T.find(t, o[e], r);
            return n > 1 ? T.uniqueSort(r) : r;
          },
          filter: function (t) {
            return this.pushStack(A(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(A(this, t || [], !0));
          },
          is: function (t) {
            return !!A(
              this,
              "string" == typeof t && j.test(t) ? T(t) : t || [],
              !1
            ).length;
          },
        });
      var z,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (t, e, r) {
        var n, o;
        if (!t) return this;
        if (((r = r || z), "string" == typeof t)) {
          if (
            !(n =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : L.exec(t)) ||
            (!n[1] && e)
          )
            return !e || e.jquery
              ? (e || r).find(t)
              : this.constructor(e).find(t);
          if (n[1]) {
            if (
              ((e = e instanceof T ? e[0] : e),
              T.merge(
                this,
                T.parseHTML(
                  n[1],
                  e && e.nodeType ? e.ownerDocument || e : w,
                  !0
                )
              ),
              S.test(n[1]) && T.isPlainObject(e))
            )
              for (n in e) h(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this;
          }
          return (
            (o = w.getElementById(n[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : h(t)
          ? void 0 !== r.ready
            ? r.ready(t)
            : t(T)
          : T.makeArray(t, this);
      }).prototype = T.fn),
        (z = T(w));
      var I = /^(?:parents|prev(?:Until|All))/,
        N = { children: !0, contents: !0, next: !0, prev: !0 };
      function q(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      T.fn.extend({
        has: function (t) {
          var e = T(t, this),
            r = e.length;
          return this.filter(function () {
            for (var t = 0; t < r; t++) if (T.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var r,
            n = 0,
            o = this.length,
            i = [],
            a = "string" != typeof t && T(t);
          if (!j.test(t))
            for (; n < o; n++)
              for (r = this[n]; r && r !== e; r = r.parentNode)
                if (
                  r.nodeType < 11 &&
                  (a
                    ? a.index(r) > -1
                    : 1 === r.nodeType && T.find.matchesSelector(r, t))
                ) {
                  i.push(r);
                  break;
                }
          return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? m.call(T(t), this[0])
              : m.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        T.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return E(t, "parentNode");
            },
            parentsUntil: function (t, e, r) {
              return E(t, "parentNode", r);
            },
            next: function (t) {
              return q(t, "nextSibling");
            },
            prev: function (t) {
              return q(t, "previousSibling");
            },
            nextAll: function (t) {
              return E(t, "nextSibling");
            },
            prevAll: function (t) {
              return E(t, "previousSibling");
            },
            nextUntil: function (t, e, r) {
              return E(t, "nextSibling", r);
            },
            prevUntil: function (t, e, r) {
              return E(t, "previousSibling", r);
            },
            siblings: function (t) {
              return D((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return D(t.firstChild);
            },
            contents: function (t) {
              return null != t.contentDocument && a(t.contentDocument)
                ? t.contentDocument
                : (O(t, "template") && (t = t.content || t),
                  T.merge([], t.childNodes));
            },
          },
          function (t, e) {
            T.fn[t] = function (r, n) {
              var o = T.map(this, e, r);
              return (
                "Until" !== t.slice(-5) && (n = r),
                n && "string" == typeof n && (o = T.filter(n, o)),
                this.length > 1 &&
                  (N[t] || T.uniqueSort(o), I.test(t) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var R = /[^\x20\t\r\n\f]+/g;
      function M(t) {
        return t;
      }
      function P(t) {
        throw t;
      }
      function B(t, e, r, n) {
        var o;
        try {
          t && h((o = t.promise))
            ? o.call(t).done(e).fail(r)
            : t && h((o = t.then))
            ? o.call(t, e, r)
            : e.apply(void 0, [t].slice(n));
        } catch (t) {
          r.apply(void 0, [t]);
        }
      }
      (T.Callbacks = function (t) {
        t =
          "string" == typeof t
            ? (function (t) {
                var e = {};
                return (
                  T.each(t.match(R) || [], function (t, r) {
                    e[r] = !0;
                  }),
                  e
                );
              })(t)
            : T.extend({}, t);
        var e,
          r,
          n,
          o,
          i = [],
          a = [],
          l = -1,
          s = function () {
            for (o = o || t.once, n = e = !0; a.length; l = -1)
              for (r = a.shift(); ++l < i.length; )
                !1 === i[l].apply(r[0], r[1]) &&
                  t.stopOnFalse &&
                  ((l = i.length), (r = !1));
            t.memory || (r = !1), (e = !1), o && (i = r ? [] : "");
          },
          d = {
            add: function () {
              return (
                i &&
                  (r && !e && ((l = i.length - 1), a.push(r)),
                  (function e(r) {
                    T.each(r, function (r, n) {
                      h(n)
                        ? (t.unique && d.has(n)) || i.push(n)
                        : n && n.length && "string" !== k(n) && e(n);
                    });
                  })(arguments),
                  r && !e && s()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (t, e) {
                  for (var r; (r = T.inArray(e, i, r)) > -1; )
                    i.splice(r, 1), r <= l && l--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? T.inArray(t, i) > -1 : i.length > 0;
            },
            empty: function () {
              return i && (i = []), this;
            },
            disable: function () {
              return (o = a = []), (i = r = ""), this;
            },
            disabled: function () {
              return !i;
            },
            lock: function () {
              return (o = a = []), r || e || (i = r = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (t, r) {
              return (
                o ||
                  ((r = [t, (r = r || []).slice ? r.slice() : r]),
                  a.push(r),
                  e || s()),
                this
              );
            },
            fire: function () {
              return d.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!n;
            },
          };
        return d;
      }),
        T.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              n = "pending",
              o = {
                state: function () {
                  return n;
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return o.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return T.Deferred(function (r) {
                    T.each(e, function (e, n) {
                      var o = h(t[n[4]]) && t[n[4]];
                      i[n[1]](function () {
                        var t = o && o.apply(this, arguments);
                        t && h(t.promise)
                          ? t
                              .promise()
                              .progress(r.notify)
                              .done(r.resolve)
                              .fail(r.reject)
                          : r[n[0] + "With"](this, o ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function (t, n, o) {
                  var i = 0;
                  function a(t, e, n, o) {
                    return function () {
                      var l = this,
                        s = arguments,
                        d = function () {
                          var r, d;
                          if (!(t < i)) {
                            if ((r = n.apply(l, s)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (d =
                              r &&
                              ("object" == typeof r ||
                                "function" == typeof r) &&
                              r.then),
                              h(d)
                                ? o
                                  ? d.call(r, a(i, e, M, o), a(i, e, P, o))
                                  : (i++,
                                    d.call(
                                      r,
                                      a(i, e, M, o),
                                      a(i, e, P, o),
                                      a(i, e, M, e.notifyWith)
                                    ))
                                : (n !== M && ((l = void 0), (s = [r])),
                                  (o || e.resolveWith)(l, s));
                          }
                        },
                        m = o
                          ? d
                          : function () {
                              try {
                                d();
                              } catch (r) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(r, m.stackTrace),
                                  t + 1 >= i &&
                                    (n !== P && ((l = void 0), (s = [r])),
                                    e.rejectWith(l, s));
                              }
                            };
                      t
                        ? m()
                        : (T.Deferred.getStackHook &&
                            (m.stackTrace = T.Deferred.getStackHook()),
                          r.setTimeout(m));
                    };
                  }
                  return T.Deferred(function (r) {
                    e[0][3].add(a(0, r, h(o) ? o : M, r.notifyWith)),
                      e[1][3].add(a(0, r, h(t) ? t : M)),
                      e[2][3].add(a(0, r, h(n) ? n : P));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? T.extend(t, o) : o;
                },
              },
              i = {};
            return (
              T.each(e, function (t, r) {
                var a = r[2],
                  l = r[5];
                (o[r[1]] = a.add),
                  l &&
                    a.add(
                      function () {
                        n = l;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  a.add(r[3].fire),
                  (i[r[0]] = function () {
                    return (
                      i[r[0] + "With"](this === i ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (i[r[0] + "With"] = a.fireWith);
              }),
              o.promise(i),
              t && t.call(i, i),
              i
            );
          },
          when: function (t) {
            var e = arguments.length,
              r = e,
              n = Array(r),
              o = l.call(arguments),
              i = T.Deferred(),
              a = function (t) {
                return function (r) {
                  (n[t] = this),
                    (o[t] = arguments.length > 1 ? l.call(arguments) : r),
                    --e || i.resolveWith(n, o);
                };
              };
            if (
              e <= 1 &&
              (B(t, i.done(a(r)).resolve, i.reject, !e),
              "pending" === i.state() || h(o[r] && o[r].then))
            )
              return i.then();
            for (; r--; ) B(o[r], a(r), i.reject);
            return i.promise();
          },
        });
      var X = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (t, e) {
        r.console &&
          r.console.warn &&
          t &&
          X.test(t.name) &&
          r.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (T.readyException = function (t) {
          r.setTimeout(function () {
            throw t;
          });
        });
      var H = T.Deferred();
      function U() {
        w.removeEventListener("DOMContentLoaded", U),
          r.removeEventListener("load", U),
          T.ready();
      }
      (T.fn.ready = function (t) {
        return (
          H.then(t).catch(function (t) {
            T.readyException(t);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== t && --T.readyWait > 0) || H.resolveWith(w, [T]));
          },
        }),
        (T.ready.then = H.then),
        "complete" === w.readyState ||
        ("loading" !== w.readyState && !w.documentElement.doScroll)
          ? r.setTimeout(T.ready)
          : (w.addEventListener("DOMContentLoaded", U),
            r.addEventListener("load", U));
      var Z = function (t, e, r, n, o, i, a) {
          var l = 0,
            s = t.length,
            d = null == r;
          if ("object" === k(r))
            for (l in ((o = !0), r)) Z(t, e, l, r[l], !0, i, a);
          else if (
            void 0 !== n &&
            ((o = !0),
            h(n) || (a = !0),
            d &&
              (a
                ? (e.call(t, n), (e = null))
                : ((d = e),
                  (e = function (t, e, r) {
                    return d.call(T(t), r);
                  }))),
            e)
          )
            for (; l < s; l++) e(t[l], r, a ? n : n.call(t[l], l, e(t[l], r)));
          return o ? t : d ? e.call(t) : s ? e(t[0], r) : i;
        },
        W = /^-ms-/,
        Y = /-([a-z])/g;
      function F(t, e) {
        return e.toUpperCase();
      }
      function $(t) {
        return t.replace(W, "ms-").replace(Y, F);
      }
      var K = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function V() {
        this.expando = T.expando + V.uid++;
      }
      (V.uid = 1),
        (V.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = Object.create(null)),
                K(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, r) {
            var n,
              o = this.cache(t);
            if ("string" == typeof e) o[$(e)] = r;
            else for (n in e) o[$(n)] = e[n];
            return o;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][$(e)];
          },
          access: function (t, e, r) {
            return void 0 === e || (e && "string" == typeof e && void 0 === r)
              ? this.get(t, e)
              : (this.set(t, e, r), void 0 !== r ? r : e);
          },
          remove: function (t, e) {
            var r,
              n = t[this.expando];
            if (void 0 !== n) {
              if (void 0 !== e) {
                r = (e = Array.isArray(e)
                  ? e.map($)
                  : (e = $(e)) in n
                  ? [e]
                  : e.match(R) || []).length;
                for (; r--; ) delete n[e[r]];
              }
              (void 0 === e || T.isEmptyObject(n)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !T.isEmptyObject(e);
          },
        });
      var G = new V(),
        J = new V(),
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        tt = /[A-Z]/g;
      function et(t, e, r) {
        var n;
        if (void 0 === r && 1 === t.nodeType)
          if (
            ((n = "data-" + e.replace(tt, "-$&").toLowerCase()),
            "string" == typeof (r = t.getAttribute(n)))
          ) {
            try {
              r = (function (t) {
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ("null" === t
                      ? null
                      : t === +t + ""
                      ? +t
                      : Q.test(t)
                      ? JSON.parse(t)
                      : t))
                );
              })(r);
            } catch (t) {}
            J.set(t, e, r);
          } else r = void 0;
        return r;
      }
      T.extend({
        hasData: function (t) {
          return J.hasData(t) || G.hasData(t);
        },
        data: function (t, e, r) {
          return J.access(t, e, r);
        },
        removeData: function (t, e) {
          J.remove(t, e);
        },
        _data: function (t, e, r) {
          return G.access(t, e, r);
        },
        _removeData: function (t, e) {
          G.remove(t, e);
        },
      }),
        T.fn.extend({
          data: function (t, e) {
            var r,
              n,
              o,
              i = this[0],
              a = i && i.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((o = J.get(i)), 1 === i.nodeType && !G.get(i, "hasDataAttrs"))
              ) {
                for (r = a.length; r--; )
                  a[r] &&
                    0 === (n = a[r].name).indexOf("data-") &&
                    ((n = $(n.slice(5))), et(i, n, o[n]));
                G.set(i, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof t
              ? this.each(function () {
                  J.set(this, t);
                })
              : Z(
                  this,
                  function (e) {
                    var r;
                    if (i && void 0 === e)
                      return void 0 !== (r = J.get(i, t)) ||
                        void 0 !== (r = et(i, t))
                        ? r
                        : void 0;
                    this.each(function () {
                      J.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              J.remove(this, t);
            });
          },
        }),
        T.extend({
          queue: function (t, e, r) {
            var n;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (n = G.get(t, e)),
                r &&
                  (!n || Array.isArray(r)
                    ? (n = G.access(t, e, T.makeArray(r)))
                    : n.push(r)),
                n || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var r = T.queue(t, e),
              n = r.length,
              o = r.shift(),
              i = T._queueHooks(t, e);
            "inprogress" === o && ((o = r.shift()), n--),
              o &&
                ("fx" === e && r.unshift("inprogress"),
                delete i.stop,
                o.call(
                  t,
                  function () {
                    T.dequeue(t, e);
                  },
                  i
                )),
              !n && i && i.empty.fire();
          },
          _queueHooks: function (t, e) {
            var r = e + "queueHooks";
            return (
              G.get(t, r) ||
              G.access(t, r, {
                empty: T.Callbacks("once memory").add(function () {
                  G.remove(t, [e + "queue", r]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (t, e) {
            var r = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), r--),
              arguments.length < r
                ? T.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var r = T.queue(this, t, e);
                    T._queueHooks(this, t),
                      "fx" === t && "inprogress" !== r[0] && T.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              T.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var r,
              n = 1,
              o = T.Deferred(),
              i = this,
              a = this.length,
              l = function () {
                --n || o.resolveWith(i, [i]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              a--;

            )
              (r = G.get(i[a], t + "queueHooks")) &&
                r.empty &&
                (n++, r.empty.add(l));
            return l(), o.promise(e);
          },
        });
      var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        nt = new RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"),
        ot = ["Top", "Right", "Bottom", "Left"],
        it = w.documentElement,
        at = function (t) {
          return T.contains(t.ownerDocument, t);
        },
        lt = { composed: !0 };
      it.getRootNode &&
        (at = function (t) {
          return (
            T.contains(t.ownerDocument, t) ||
            t.getRootNode(lt) === t.ownerDocument
          );
        });
      var st = function (t, e) {
        return (
          "none" === (t = e || t).style.display ||
          ("" === t.style.display && at(t) && "none" === T.css(t, "display"))
        );
      };
      function dt(t, e, r, n) {
        var o,
          i,
          a = 20,
          l = n
            ? function () {
                return n.cur();
              }
            : function () {
                return T.css(t, e, "");
              },
          s = l(),
          d = (r && r[3]) || (T.cssNumber[e] ? "" : "px"),
          m =
            t.nodeType &&
            (T.cssNumber[e] || ("px" !== d && +s)) &&
            nt.exec(T.css(t, e));
        if (m && m[3] !== d) {
          for (s /= 2, d = d || m[3], m = +s || 1; a--; )
            T.style(t, e, m + d),
              (1 - i) * (1 - (i = l() / s || 0.5)) <= 0 && (a = 0),
              (m /= i);
          (m *= 2), T.style(t, e, m + d), (r = r || []);
        }
        return (
          r &&
            ((m = +m || +s || 0),
            (o = r[1] ? m + (r[1] + 1) * r[2] : +r[2]),
            n && ((n.unit = d), (n.start = m), (n.end = o))),
          o
        );
      }
      var mt = {};
      function ct(t) {
        var e,
          r = t.ownerDocument,
          n = t.nodeName,
          o = mt[n];
        return (
          o ||
          ((e = r.body.appendChild(r.createElement(n))),
          (o = T.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === o && (o = "block"),
          (mt[n] = o),
          o)
        );
      }
      function pt(t, e) {
        for (var r, n, o = [], i = 0, a = t.length; i < a; i++)
          (n = t[i]).style &&
            ((r = n.style.display),
            e
              ? ("none" === r &&
                  ((o[i] = G.get(n, "display") || null),
                  o[i] || (n.style.display = "")),
                "" === n.style.display && st(n) && (o[i] = ct(n)))
              : "none" !== r && ((o[i] = "none"), G.set(n, "display", r)));
        for (i = 0; i < a; i++) null != o[i] && (t[i].style.display = o[i]);
        return t;
      }
      T.fn.extend({
        show: function () {
          return pt(this, !0);
        },
        hide: function () {
          return pt(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                st(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var ft,
        ut,
        gt = /^(?:checkbox|radio)$/i,
        bt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ht = /^$|^module$|\/(?:java|ecma)script/i;
      (ft = w.createDocumentFragment().appendChild(w.createElement("div"))),
        (ut = w.createElement("input")).setAttribute("type", "radio"),
        ut.setAttribute("checked", "checked"),
        ut.setAttribute("name", "t"),
        ft.appendChild(ut),
        (b.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ft.innerHTML = "<textarea>x</textarea>"),
        (b.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue),
        (ft.innerHTML = "<option></option>"),
        (b.option = !!ft.lastChild);
      var xt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function wt(t, e) {
        var r;
        return (
          (r =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && O(t, e)) ? T.merge([t], r) : r
        );
      }
      function vt(t, e) {
        for (var r = 0, n = t.length; r < n; r++)
          G.set(t[r], "globalEval", !e || G.get(e[r], "globalEval"));
      }
      (xt.tbody = xt.tfoot = xt.colgroup = xt.caption = xt.thead),
        (xt.th = xt.td),
        b.option ||
          (xt.optgroup = xt.option = [
            1,
            "<select multiple='multiple'>",
            "</select>",
          ]);
      var yt = /<|&#?\w+;/;
      function kt(t, e, r, n, o) {
        for (
          var i,
            a,
            l,
            s,
            d,
            m,
            c = e.createDocumentFragment(),
            p = [],
            f = 0,
            u = t.length;
          f < u;
          f++
        )
          if ((i = t[f]) || 0 === i)
            if ("object" === k(i)) T.merge(p, i.nodeType ? [i] : i);
            else if (yt.test(i)) {
              for (
                a = a || c.appendChild(e.createElement("div")),
                  l = (bt.exec(i) || ["", ""])[1].toLowerCase(),
                  s = xt[l] || xt._default,
                  a.innerHTML = s[1] + T.htmlPrefilter(i) + s[2],
                  m = s[0];
                m--;

              )
                a = a.lastChild;
              T.merge(p, a.childNodes), ((a = c.firstChild).textContent = "");
            } else p.push(e.createTextNode(i));
        for (c.textContent = "", f = 0; (i = p[f++]); )
          if (n && T.inArray(i, n) > -1) o && o.push(i);
          else if (
            ((d = at(i)), (a = wt(c.appendChild(i), "script")), d && vt(a), r)
          )
            for (m = 0; (i = a[m++]); ) ht.test(i.type || "") && r.push(i);
        return c;
      }
      var Tt = /^key/,
        _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ct = /^([^.]*)(?:\.(.+)|)/;
      function Et() {
        return !0;
      }
      function Dt() {
        return !1;
      }
      function jt(t, e) {
        return (
          (t ===
            (function () {
              try {
                return w.activeElement;
              } catch (t) {}
            })()) ==
          ("focus" === e)
        );
      }
      function Ot(t, e, r, n, o, i) {
        var a, l;
        if ("object" == typeof e) {
          for (l in ("string" != typeof r && ((n = n || r), (r = void 0)), e))
            Ot(t, l, r, n, e[l], i);
          return t;
        }
        if (
          (null == n && null == o
            ? ((o = r), (n = r = void 0))
            : null == o &&
              ("string" == typeof r
                ? ((o = n), (n = void 0))
                : ((o = n), (n = r), (r = void 0))),
          !1 === o)
        )
          o = Dt;
        else if (!o) return t;
        return (
          1 === i &&
            ((a = o),
            ((o = function (t) {
              return T().off(t), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = T.guid++))),
          t.each(function () {
            T.event.add(this, e, o, n, r);
          })
        );
      }
      function St(t, e, r) {
        r
          ? (G.set(t, e, !1),
            T.event.add(t, e, {
              namespace: !1,
              handler: function (t) {
                var n,
                  o,
                  i = G.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                  if (i.length)
                    (T.event.special[e] || {}).delegateType &&
                      t.stopPropagation();
                  else if (
                    ((i = l.call(arguments)),
                    G.set(this, e, i),
                    (n = r(this, e)),
                    this[e](),
                    i !== (o = G.get(this, e)) || n
                      ? G.set(this, e, !1)
                      : (o = {}),
                    i !== o)
                  )
                    return (
                      t.stopImmediatePropagation(), t.preventDefault(), o.value
                    );
                } else
                  i.length &&
                    (G.set(this, e, {
                      value: T.event.trigger(
                        T.extend(i[0], T.Event.prototype),
                        i.slice(1),
                        this
                      ),
                    }),
                    t.stopImmediatePropagation());
              },
            }))
          : void 0 === G.get(t, e) && T.event.add(t, e, Et);
      }
      (T.event = {
        global: {},
        add: function (t, e, r, n, o) {
          var i,
            a,
            l,
            s,
            d,
            m,
            c,
            p,
            f,
            u,
            g,
            b = G.get(t);
          if (K(t))
            for (
              r.handler && ((r = (i = r).handler), (o = i.selector)),
                o && T.find.matchesSelector(it, o),
                r.guid || (r.guid = T.guid++),
                (s = b.events) || (s = b.events = Object.create(null)),
                (a = b.handle) ||
                  (a = b.handle = function (e) {
                    return void 0 !== T && T.event.triggered !== e.type
                      ? T.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                d = (e = (e || "").match(R) || [""]).length;
              d--;

            )
              (f = g = (l = Ct.exec(e[d]) || [])[1]),
                (u = (l[2] || "").split(".").sort()),
                f &&
                  ((c = T.event.special[f] || {}),
                  (f = (o ? c.delegateType : c.bindType) || f),
                  (c = T.event.special[f] || {}),
                  (m = T.extend(
                    {
                      type: f,
                      origType: g,
                      data: n,
                      handler: r,
                      guid: r.guid,
                      selector: o,
                      needsContext: o && T.expr.match.needsContext.test(o),
                      namespace: u.join("."),
                    },
                    i
                  )),
                  (p = s[f]) ||
                    (((p = s[f] = []).delegateCount = 0),
                    (c.setup && !1 !== c.setup.call(t, n, u, a)) ||
                      (t.addEventListener && t.addEventListener(f, a))),
                  c.add &&
                    (c.add.call(t, m),
                    m.handler.guid || (m.handler.guid = r.guid)),
                  o ? p.splice(p.delegateCount++, 0, m) : p.push(m),
                  (T.event.global[f] = !0));
        },
        remove: function (t, e, r, n, o) {
          var i,
            a,
            l,
            s,
            d,
            m,
            c,
            p,
            f,
            u,
            g,
            b = G.hasData(t) && G.get(t);
          if (b && (s = b.events)) {
            for (d = (e = (e || "").match(R) || [""]).length; d--; )
              if (
                ((f = g = (l = Ct.exec(e[d]) || [])[1]),
                (u = (l[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  c = T.event.special[f] || {},
                    p = s[(f = (n ? c.delegateType : c.bindType) || f)] || [],
                    l =
                      l[2] &&
                      new RegExp(
                        "(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = i = p.length;
                  i--;

                )
                  (m = p[i]),
                    (!o && g !== m.origType) ||
                      (r && r.guid !== m.guid) ||
                      (l && !l.test(m.namespace)) ||
                      (n && n !== m.selector && ("**" !== n || !m.selector)) ||
                      (p.splice(i, 1),
                      m.selector && p.delegateCount--,
                      c.remove && c.remove.call(t, m));
                a &&
                  !p.length &&
                  ((c.teardown && !1 !== c.teardown.call(t, u, b.handle)) ||
                    T.removeEvent(t, f, b.handle),
                  delete s[f]);
              } else for (f in s) T.event.remove(t, f + e[d], r, n, !0);
            T.isEmptyObject(s) && G.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            r,
            n,
            o,
            i,
            a,
            l = new Array(arguments.length),
            s = T.event.fix(t),
            d = (G.get(this, "events") || Object.create(null))[s.type] || [],
            m = T.event.special[s.type] || {};
          for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (
            ((s.delegateTarget = this),
            !m.preDispatch || !1 !== m.preDispatch.call(this, s))
          ) {
            for (
              a = T.event.handlers.call(this, s, d), e = 0;
              (o = a[e++]) && !s.isPropagationStopped();

            )
              for (
                s.currentTarget = o.elem, r = 0;
                (i = o.handlers[r++]) && !s.isImmediatePropagationStopped();

              )
                (s.rnamespace &&
                  !1 !== i.namespace &&
                  !s.rnamespace.test(i.namespace)) ||
                  ((s.handleObj = i),
                  (s.data = i.data),
                  void 0 !==
                    (n = (
                      (T.event.special[i.origType] || {}).handle || i.handler
                    ).apply(o.elem, l)) &&
                    !1 === (s.result = n) &&
                    (s.preventDefault(), s.stopPropagation()));
            return m.postDispatch && m.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function (t, e) {
          var r,
            n,
            o,
            i,
            a,
            l = [],
            s = e.delegateCount,
            d = t.target;
          if (s && d.nodeType && !("click" === t.type && t.button >= 1))
            for (; d !== this; d = d.parentNode || this)
              if (
                1 === d.nodeType &&
                ("click" !== t.type || !0 !== d.disabled)
              ) {
                for (i = [], a = {}, r = 0; r < s; r++)
                  void 0 === a[(o = (n = e[r]).selector + " ")] &&
                    (a[o] = n.needsContext
                      ? T(o, this).index(d) > -1
                      : T.find(o, this, null, [d]).length),
                    a[o] && i.push(n);
                i.length && l.push({ elem: d, handlers: i });
              }
          return (
            (d = this),
            s < e.length && l.push({ elem: d, handlers: e.slice(s) }),
            l
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(T.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: h(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[T.expando] ? t : new T.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (t) {
              var e = this || t;
              return (
                gt.test(e.type) &&
                  e.click &&
                  O(e, "input") &&
                  St(e, "click", Et),
                !1
              );
            },
            trigger: function (t) {
              var e = this || t;
              return (
                gt.test(e.type) && e.click && O(e, "input") && St(e, "click"),
                !0
              );
            },
            _default: function (t) {
              var e = t.target;
              return (
                (gt.test(e.type) &&
                  e.click &&
                  O(e, "input") &&
                  G.get(e, "click")) ||
                O(e, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (T.removeEvent = function (t, e, r) {
          t.removeEventListener && t.removeEventListener(e, r);
        }),
        (T.Event = function (t, e) {
          if (!(this instanceof T.Event)) return new T.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? Et
                  : Dt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && T.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Dt,
          isPropagationStopped: Dt,
          isImmediatePropagationStopped: Dt,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = Et),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = Et),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = Et),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && Tt.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && _t.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          T.event.special[t] = {
            setup: function () {
              return St(this, t, jt), !1;
            },
            trigger: function () {
              return St(this, t), !0;
            },
            delegateType: e,
          };
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            T.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var r,
                  n = this,
                  o = t.relatedTarget,
                  i = t.handleObj;
                return (
                  (o && (o === n || T.contains(n, o))) ||
                    ((t.type = i.origType),
                    (r = i.handler.apply(this, arguments)),
                    (t.type = e)),
                  r
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (t, e, r, n) {
            return Ot(this, t, e, r, n);
          },
          one: function (t, e, r, n) {
            return Ot(this, t, e, r, n, 1);
          },
          off: function (t, e, r) {
            var n, o;
            if (t && t.preventDefault && t.handleObj)
              return (
                (n = t.handleObj),
                T(t.delegateTarget).off(
                  n.namespace ? n.origType + "." + n.namespace : n.origType,
                  n.selector,
                  n.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (o in t) this.off(o, e, t[o]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((r = e), (e = void 0)),
              !1 === r && (r = Dt),
              this.each(function () {
                T.event.remove(this, t, r, e);
              })
            );
          },
        });
      var At = /<script|<style|<link/i,
        zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function It(t, e) {
        return (
          (O(t, "table") &&
            O(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            T(t).children("tbody")[0]) ||
          t
        );
      }
      function Nt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function qt(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function Rt(t, e) {
        var r, n, o, i, a, l;
        if (1 === e.nodeType) {
          if (G.hasData(t) && (l = G.get(t).events))
            for (o in (G.remove(e, "handle events"), l))
              for (r = 0, n = l[o].length; r < n; r++)
                T.event.add(e, o, l[o][r]);
          J.hasData(t) &&
            ((i = J.access(t)), (a = T.extend({}, i)), J.set(e, a));
        }
      }
      function Mt(t, e) {
        var r = e.nodeName.toLowerCase();
        "input" === r && gt.test(t.type)
          ? (e.checked = t.checked)
          : ("input" !== r && "textarea" !== r) ||
            (e.defaultValue = t.defaultValue);
      }
      function Pt(t, e, r, n) {
        e = s(e);
        var o,
          i,
          a,
          l,
          d,
          m,
          c = 0,
          p = t.length,
          f = p - 1,
          u = e[0],
          g = h(u);
        if (g || (p > 1 && "string" == typeof u && !b.checkClone && zt.test(u)))
          return t.each(function (o) {
            var i = t.eq(o);
            g && (e[0] = u.call(this, o, i.html())), Pt(i, e, r, n);
          });
        if (
          p &&
          ((i = (o = kt(e, t[0].ownerDocument, !1, t, n)).firstChild),
          1 === o.childNodes.length && (o = i),
          i || n)
        ) {
          for (l = (a = T.map(wt(o, "script"), Nt)).length; c < p; c++)
            (d = o),
              c !== f &&
                ((d = T.clone(d, !0, !0)), l && T.merge(a, wt(d, "script"))),
              r.call(t[c], d, c);
          if (l)
            for (
              m = a[a.length - 1].ownerDocument, T.map(a, qt), c = 0;
              c < l;
              c++
            )
              (d = a[c]),
                ht.test(d.type || "") &&
                  !G.access(d, "globalEval") &&
                  T.contains(m, d) &&
                  (d.src && "module" !== (d.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !d.noModule &&
                      T._evalUrl(
                        d.src,
                        { nonce: d.nonce || d.getAttribute("nonce") },
                        m
                      )
                    : y(d.textContent.replace(Lt, ""), d, m));
        }
        return t;
      }
      function Bt(t, e, r) {
        for (var n, o = e ? T.filter(e, t) : t, i = 0; null != (n = o[i]); i++)
          r || 1 !== n.nodeType || T.cleanData(wt(n)),
            n.parentNode &&
              (r && at(n) && vt(wt(n, "script")), n.parentNode.removeChild(n));
        return t;
      }
      T.extend({
        htmlPrefilter: function (t) {
          return t;
        },
        clone: function (t, e, r) {
          var n,
            o,
            i,
            a,
            l = t.cloneNode(!0),
            s = at(t);
          if (
            !(
              b.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              T.isXMLDoc(t)
            )
          )
            for (a = wt(l), n = 0, o = (i = wt(t)).length; n < o; n++)
              Mt(i[n], a[n]);
          if (e)
            if (r)
              for (
                i = i || wt(t), a = a || wt(l), n = 0, o = i.length;
                n < o;
                n++
              )
                Rt(i[n], a[n]);
            else Rt(t, l);
          return (
            (a = wt(l, "script")).length > 0 && vt(a, !s && wt(t, "script")), l
          );
        },
        cleanData: function (t) {
          for (
            var e, r, n, o = T.event.special, i = 0;
            void 0 !== (r = t[i]);
            i++
          )
            if (K(r)) {
              if ((e = r[G.expando])) {
                if (e.events)
                  for (n in e.events)
                    o[n] ? T.event.remove(r, n) : T.removeEvent(r, n, e.handle);
                r[G.expando] = void 0;
              }
              r[J.expando] && (r[J.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (t) {
            return Bt(this, t, !0);
          },
          remove: function (t) {
            return Bt(this, t);
          },
          text: function (t) {
            return Z(
              this,
              function (t) {
                return void 0 === t
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return Pt(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                It(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return Pt(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = It(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return Pt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return Pt(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (T.cleanData(wt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return T.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return Z(
              this,
              function (t) {
                var e = this[0] || {},
                  r = 0,
                  n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !At.test(t) &&
                  !xt[(bt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = T.htmlPrefilter(t);
                  try {
                    for (; r < n; r++)
                      1 === (e = this[r] || {}).nodeType &&
                        (T.cleanData(wt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return Pt(
              this,
              arguments,
              function (e) {
                var r = this.parentNode;
                T.inArray(this, t) < 0 &&
                  (T.cleanData(wt(this)), r && r.replaceChild(e, this));
              },
              t
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            T.fn[t] = function (t) {
              for (
                var r, n = [], o = T(t), i = o.length - 1, a = 0;
                a <= i;
                a++
              )
                (r = a === i ? this : this.clone(!0)),
                  T(o[a])[e](r),
                  d.apply(n, r.get());
              return this.pushStack(n);
            };
          }
        );
      var Xt = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
        Ht = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = r), e.getComputedStyle(t);
        },
        Ut = function (t, e, r) {
          var n,
            o,
            i = {};
          for (o in e) (i[o] = t.style[o]), (t.style[o] = e[o]);
          for (o in ((n = r.call(t)), e)) t.style[o] = i[o];
          return n;
        },
        Zt = new RegExp(ot.join("|"), "i");
      function Wt(t, e, r) {
        var n,
          o,
          i,
          a,
          l = t.style;
        return (
          (r = r || Ht(t)) &&
            ("" !== (a = r.getPropertyValue(e) || r[e]) ||
              at(t) ||
              (a = T.style(t, e)),
            !b.pixelBoxStyles() &&
              Xt.test(a) &&
              Zt.test(e) &&
              ((n = l.width),
              (o = l.minWidth),
              (i = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = a),
              (a = r.width),
              (l.width = n),
              (l.minWidth = o),
              (l.maxWidth = i))),
          void 0 !== a ? a + "" : a
        );
      }
      function Yt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (m) {
            (d.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (m.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              it.appendChild(d).appendChild(m);
            var t = r.getComputedStyle(m);
            (n = "1%" !== t.top),
              (s = 12 === e(t.marginLeft)),
              (m.style.right = "60%"),
              (a = 36 === e(t.right)),
              (o = 36 === e(t.width)),
              (m.style.position = "absolute"),
              (i = 12 === e(m.offsetWidth / 3)),
              it.removeChild(d),
              (m = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var n,
          o,
          i,
          a,
          l,
          s,
          d = w.createElement("div"),
          m = w.createElement("div");
        m.style &&
          ((m.style.backgroundClip = "content-box"),
          (m.cloneNode(!0).style.backgroundClip = ""),
          (b.clearCloneStyle = "content-box" === m.style.backgroundClip),
          T.extend(b, {
            boxSizingReliable: function () {
              return t(), o;
            },
            pixelBoxStyles: function () {
              return t(), a;
            },
            pixelPosition: function () {
              return t(), n;
            },
            reliableMarginLeft: function () {
              return t(), s;
            },
            scrollboxSize: function () {
              return t(), i;
            },
            reliableTrDimensions: function () {
              var t, e, n, o;
              return (
                null == l &&
                  ((t = w.createElement("table")),
                  (e = w.createElement("tr")),
                  (n = w.createElement("div")),
                  (t.style.cssText = "position:absolute;left:-11111px"),
                  (e.style.height = "1px"),
                  (n.style.height = "9px"),
                  it.appendChild(t).appendChild(e).appendChild(n),
                  (o = r.getComputedStyle(e)),
                  (l = parseInt(o.height) > 3),
                  it.removeChild(t)),
                l
              );
            },
          }));
      })();
      var Ft = ["Webkit", "Moz", "ms"],
        $t = w.createElement("div").style,
        Kt = {};
      function Vt(t) {
        var e = T.cssProps[t] || Kt[t];
        return (
          e ||
          (t in $t
            ? t
            : (Kt[t] =
                (function (t) {
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), r = Ft.length;
                    r--;

                  )
                    if ((t = Ft[r] + e) in $t) return t;
                })(t) || t))
        );
      }
      var Gt = /^(none|table(?!-c[ea]).+)/,
        Jt = /^--/,
        Qt = { position: "absolute", visibility: "hidden", display: "block" },
        te = { letterSpacing: "0", fontWeight: "400" };
      function ee(t, e, r) {
        var n = nt.exec(e);
        return n ? Math.max(0, n[2] - (r || 0)) + (n[3] || "px") : e;
      }
      function re(t, e, r, n, o, i) {
        var a = "width" === e ? 1 : 0,
          l = 0,
          s = 0;
        if (r === (n ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === r && (s += T.css(t, r + ot[a], !0, o)),
            n
              ? ("content" === r && (s -= T.css(t, "padding" + ot[a], !0, o)),
                "margin" !== r &&
                  (s -= T.css(t, "border" + ot[a] + "Width", !0, o)))
              : ((s += T.css(t, "padding" + ot[a], !0, o)),
                "padding" !== r
                  ? (s += T.css(t, "border" + ot[a] + "Width", !0, o))
                  : (l += T.css(t, "border" + ot[a] + "Width", !0, o)));
        return (
          !n &&
            i >= 0 &&
            (s +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    i -
                    s -
                    l -
                    0.5
                )
              ) || 0),
          s
        );
      }
      function ne(t, e, r) {
        var n = Ht(t),
          o =
            (!b.boxSizingReliable() || r) &&
            "border-box" === T.css(t, "boxSizing", !1, n),
          i = o,
          a = Wt(t, e, n),
          l = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Xt.test(a)) {
          if (!r) return a;
          a = "auto";
        }
        return (
          ((!b.boxSizingReliable() && o) ||
            (!b.reliableTrDimensions() && O(t, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === T.css(t, "display", !1, n))) &&
            t.getClientRects().length &&
            ((o = "border-box" === T.css(t, "boxSizing", !1, n)),
            (i = l in t) && (a = t[l])),
          (a = parseFloat(a) || 0) +
            re(t, e, r || (o ? "border" : "content"), i, n, a) +
            "px"
        );
      }
      function oe(t, e, r, n, o) {
        return new oe.prototype.init(t, e, r, n, o);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var r = Wt(t, "opacity");
                return "" === r ? "1" : r;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, e, r, n) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var o,
              i,
              a,
              l = $(e),
              s = Jt.test(e),
              d = t.style;
            if (
              (s || (e = Vt(l)),
              (a = T.cssHooks[e] || T.cssHooks[l]),
              void 0 === r)
            )
              return a && "get" in a && void 0 !== (o = a.get(t, !1, n))
                ? o
                : d[e];
            "string" === (i = typeof r) &&
              (o = nt.exec(r)) &&
              o[1] &&
              ((r = dt(t, e, o)), (i = "number")),
              null != r &&
                r == r &&
                ("number" !== i ||
                  s ||
                  (r += (o && o[3]) || (T.cssNumber[l] ? "" : "px")),
                b.clearCloneStyle ||
                  "" !== r ||
                  0 !== e.indexOf("background") ||
                  (d[e] = "inherit"),
                (a && "set" in a && void 0 === (r = a.set(t, r, n))) ||
                  (s ? d.setProperty(e, r) : (d[e] = r)));
          }
        },
        css: function (t, e, r, n) {
          var o,
            i,
            a,
            l = $(e);
          return (
            Jt.test(e) || (e = Vt(l)),
            (a = T.cssHooks[e] || T.cssHooks[l]) &&
              "get" in a &&
              (o = a.get(t, !0, r)),
            void 0 === o && (o = Wt(t, e, n)),
            "normal" === o && e in te && (o = te[e]),
            "" === r || r
              ? ((i = parseFloat(o)), !0 === r || isFinite(i) ? i || 0 : o)
              : o
          );
        },
      }),
        T.each(["height", "width"], function (t, e) {
          T.cssHooks[e] = {
            get: function (t, r, n) {
              if (r)
                return !Gt.test(T.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? ne(t, e, n)
                  : Ut(t, Qt, function () {
                      return ne(t, e, n);
                    });
            },
            set: function (t, r, n) {
              var o,
                i = Ht(t),
                a = !b.scrollboxSize() && "absolute" === i.position,
                l = (a || n) && "border-box" === T.css(t, "boxSizing", !1, i),
                s = n ? re(t, e, n, l, i) : 0;
              return (
                l &&
                  a &&
                  (s -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(i[e]) -
                      re(t, e, "border", !1, i) -
                      0.5
                  )),
                s &&
                  (o = nt.exec(r)) &&
                  "px" !== (o[3] || "px") &&
                  ((t.style[e] = r), (r = T.css(t, e))),
                ee(0, r, s)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Yt(b.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(Wt(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  Ut(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (T.cssHooks[t + e] = {
            expand: function (r) {
              for (
                var n = 0,
                  o = {},
                  i = "string" == typeof r ? r.split(" ") : [r];
                n < 4;
                n++
              )
                o[t + ot[n] + e] = i[n] || i[n - 2] || i[0];
              return o;
            },
          }),
            "margin" !== t && (T.cssHooks[t + e].set = ee);
        }),
        T.fn.extend({
          css: function (t, e) {
            return Z(
              this,
              function (t, e, r) {
                var n,
                  o,
                  i = {},
                  a = 0;
                if (Array.isArray(e)) {
                  for (n = Ht(t), o = e.length; a < o; a++)
                    i[e[a]] = T.css(t, e[a], !1, n);
                  return i;
                }
                return void 0 !== r ? T.style(t, e, r) : T.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = oe),
        (oe.prototype = {
          constructor: oe,
          init: function (t, e, r, n, o, i) {
            (this.elem = t),
              (this.prop = r),
              (this.easing = o || T.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = n),
              (this.unit = i || (T.cssNumber[r] ? "" : "px"));
          },
          cur: function () {
            var t = oe.propHooks[this.prop];
            return t && t.get ? t.get(this) : oe.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              r = oe.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e = T.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              r && r.set ? r.set(this) : oe.propHooks._default.set(this),
              this
            );
          },
        }),
        (oe.prototype.init.prototype = oe.prototype),
        (oe.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = T.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function (t) {
              T.fx.step[t.prop]
                ? T.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (!T.cssHooks[t.prop] && null == t.elem.style[Vt(t.prop)])
                ? (t.elem[t.prop] = t.now)
                : T.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (oe.propHooks.scrollTop = oe.propHooks.scrollLeft = {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
        (T.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = oe.prototype.init),
        (T.fx.step = {});
      var ie,
        ae,
        le = /^(?:toggle|show|hide)$/,
        se = /queueHooks$/;
      function de() {
        ae &&
          (!1 === w.hidden && r.requestAnimationFrame
            ? r.requestAnimationFrame(de)
            : r.setTimeout(de, T.fx.interval),
          T.fx.tick());
      }
      function me() {
        return (
          r.setTimeout(function () {
            ie = void 0;
          }),
          (ie = Date.now())
        );
      }
      function ce(t, e) {
        var r,
          n = 0,
          o = { height: t };
        for (e = e ? 1 : 0; n < 4; n += 2 - e)
          o["margin" + (r = ot[n])] = o["padding" + r] = t;
        return e && (o.opacity = o.width = t), o;
      }
      function pe(t, e, r) {
        for (
          var n,
            o = (fe.tweeners[e] || []).concat(fe.tweeners["*"]),
            i = 0,
            a = o.length;
          i < a;
          i++
        )
          if ((n = o[i].call(r, e, t))) return n;
      }
      function fe(t, e, r) {
        var n,
          o,
          i = 0,
          a = fe.prefilters.length,
          l = T.Deferred().always(function () {
            delete s.elem;
          }),
          s = function () {
            if (o) return !1;
            for (
              var e = ie || me(),
                r = Math.max(0, d.startTime + d.duration - e),
                n = 1 - (r / d.duration || 0),
                i = 0,
                a = d.tweens.length;
              i < a;
              i++
            )
              d.tweens[i].run(n);
            return (
              l.notifyWith(t, [d, n, r]),
              n < 1 && a
                ? r
                : (a || l.notifyWith(t, [d, 1, 0]), l.resolveWith(t, [d]), !1)
            );
          },
          d = l.promise({
            elem: t,
            props: T.extend({}, e),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              r
            ),
            originalProperties: e,
            originalOptions: r,
            startTime: ie || me(),
            duration: r.duration,
            tweens: [],
            createTween: function (e, r) {
              var n = T.Tween(
                t,
                d.opts,
                e,
                r,
                d.opts.specialEasing[e] || d.opts.easing
              );
              return d.tweens.push(n), n;
            },
            stop: function (e) {
              var r = 0,
                n = e ? d.tweens.length : 0;
              if (o) return this;
              for (o = !0; r < n; r++) d.tweens[r].run(1);
              return (
                e
                  ? (l.notifyWith(t, [d, 1, 0]), l.resolveWith(t, [d, e]))
                  : l.rejectWith(t, [d, e]),
                this
              );
            },
          }),
          m = d.props;
        for (
          !(function (t, e) {
            var r, n, o, i, a;
            for (r in t)
              if (
                ((o = e[(n = $(r))]),
                (i = t[r]),
                Array.isArray(i) && ((o = i[1]), (i = t[r] = i[0])),
                r !== n && ((t[n] = i), delete t[r]),
                (a = T.cssHooks[n]) && ("expand" in a))
              )
                for (r in ((i = a.expand(i)), delete t[n], i))
                  (r in t) || ((t[r] = i[r]), (e[r] = o));
              else e[n] = o;
          })(m, d.opts.specialEasing);
          i < a;
          i++
        )
          if ((n = fe.prefilters[i].call(d, t, m, d.opts)))
            return (
              h(n.stop) &&
                (T._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)),
              n
            );
        return (
          T.map(m, pe, d),
          h(d.opts.start) && d.opts.start.call(t, d),
          d
            .progress(d.opts.progress)
            .done(d.opts.done, d.opts.complete)
            .fail(d.opts.fail)
            .always(d.opts.always),
          T.fx.timer(T.extend(s, { elem: t, anim: d, queue: d.opts.queue })),
          d
        );
      }
      (T.Animation = T.extend(fe, {
        tweeners: {
          "*": [
            function (t, e) {
              var r = this.createTween(t, e);
              return dt(r.elem, t, nt.exec(e), r), r;
            },
          ],
        },
        tweener: function (t, e) {
          h(t) ? ((e = t), (t = ["*"])) : (t = t.match(R));
          for (var r, n = 0, o = t.length; n < o; n++)
            (r = t[n]),
              (fe.tweeners[r] = fe.tweeners[r] || []),
              fe.tweeners[r].unshift(e);
        },
        prefilters: [
          function (t, e, r) {
            var n,
              o,
              i,
              a,
              l,
              s,
              d,
              m,
              c = "width" in e || "height" in e,
              p = this,
              f = {},
              u = t.style,
              g = t.nodeType && st(t),
              b = G.get(t, "fxshow");
            for (n in (r.queue ||
              (null == (a = T._queueHooks(t, "fx")).unqueued &&
                ((a.unqueued = 0),
                (l = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || l();
                })),
              a.unqueued++,
              p.always(function () {
                p.always(function () {
                  a.unqueued--, T.queue(t, "fx").length || a.empty.fire();
                });
              })),
            e))
              if (((o = e[n]), le.test(o))) {
                if (
                  (delete e[n],
                  (i = i || "toggle" === o),
                  o === (g ? "hide" : "show"))
                ) {
                  if ("show" !== o || !b || void 0 === b[n]) continue;
                  g = !0;
                }
                f[n] = (b && b[n]) || T.style(t, n);
              }
            if ((s = !T.isEmptyObject(e)) || !T.isEmptyObject(f))
              for (n in (c &&
                1 === t.nodeType &&
                ((r.overflow = [u.overflow, u.overflowX, u.overflowY]),
                null == (d = b && b.display) && (d = G.get(t, "display")),
                "none" === (m = T.css(t, "display")) &&
                  (d
                    ? (m = d)
                    : (pt([t], !0),
                      (d = t.style.display || d),
                      (m = T.css(t, "display")),
                      pt([t]))),
                ("inline" === m || ("inline-block" === m && null != d)) &&
                  "none" === T.css(t, "float") &&
                  (s ||
                    (p.done(function () {
                      u.display = d;
                    }),
                    null == d &&
                      ((m = u.display), (d = "none" === m ? "" : m))),
                  (u.display = "inline-block"))),
              r.overflow &&
                ((u.overflow = "hidden"),
                p.always(function () {
                  (u.overflow = r.overflow[0]),
                    (u.overflowX = r.overflow[1]),
                    (u.overflowY = r.overflow[2]);
                })),
              (s = !1),
              f))
                s ||
                  (b
                    ? "hidden" in b && (g = b.hidden)
                    : (b = G.access(t, "fxshow", { display: d })),
                  i && (b.hidden = !g),
                  g && pt([t], !0),
                  p.done(function () {
                    for (n in (g || pt([t]), G.remove(t, "fxshow"), f))
                      T.style(t, n, f[n]);
                  })),
                  (s = pe(g ? b[n] : 0, n, p)),
                  n in b ||
                    ((b[n] = s.start), g && ((s.end = s.start), (s.start = 0)));
          },
        ],
        prefilter: function (t, e) {
          e ? fe.prefilters.unshift(t) : fe.prefilters.push(t);
        },
      })),
        (T.speed = function (t, e, r) {
          var n =
            t && "object" == typeof t
              ? T.extend({}, t)
              : {
                  complete: r || (!r && e) || (h(t) && t),
                  duration: t,
                  easing: (r && e) || (e && !h(e) && e),
                };
          return (
            T.fx.off
              ? (n.duration = 0)
              : "number" != typeof n.duration &&
                (n.duration in T.fx.speeds
                  ? (n.duration = T.fx.speeds[n.duration])
                  : (n.duration = T.fx.speeds._default)),
            (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
            (n.old = n.complete),
            (n.complete = function () {
              h(n.old) && n.old.call(this), n.queue && T.dequeue(this, n.queue);
            }),
            n
          );
        }),
        T.fn.extend({
          fadeTo: function (t, e, r, n) {
            return this.filter(st)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, r, n);
          },
          animate: function (t, e, r, n) {
            var o = T.isEmptyObject(t),
              i = T.speed(e, r, n),
              a = function () {
                var e = fe(this, T.extend({}, t), i);
                (o || G.get(this, "finish")) && e.stop(!0);
              };
            return (
              (a.finish = a),
              o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            );
          },
          stop: function (t, e, r) {
            var n = function (t) {
              var e = t.stop;
              delete t.stop, e(r);
            };
            return (
              "string" != typeof t && ((r = e), (e = t), (t = void 0)),
              e && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  o = null != t && t + "queueHooks",
                  i = T.timers,
                  a = G.get(this);
                if (o) a[o] && a[o].stop && n(a[o]);
                else for (o in a) a[o] && a[o].stop && se.test(o) && n(a[o]);
                for (o = i.length; o--; )
                  i[o].elem !== this ||
                    (null != t && i[o].queue !== t) ||
                    (i[o].anim.stop(r), (e = !1), i.splice(o, 1));
                (!e && r) || T.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var e,
                  r = G.get(this),
                  n = r[t + "queue"],
                  o = r[t + "queueHooks"],
                  i = T.timers,
                  a = n ? n.length : 0;
                for (
                  r.finish = !0,
                    T.queue(this, t, []),
                    o && o.stop && o.stop.call(this, !0),
                    e = i.length;
                  e--;

                )
                  i[e].elem === this &&
                    i[e].queue === t &&
                    (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < a; e++)
                  n[e] && n[e].finish && n[e].finish.call(this);
                delete r.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (t, e) {
          var r = T.fn[e];
          T.fn[e] = function (t, n, o) {
            return null == t || "boolean" == typeof t
              ? r.apply(this, arguments)
              : this.animate(ce(e, !0), t, n, o);
          };
        }),
        T.each(
          {
            slideDown: ce("show"),
            slideUp: ce("hide"),
            slideToggle: ce("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            T.fn[t] = function (t, r, n) {
              return this.animate(e, t, r, n);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var t,
            e = 0,
            r = T.timers;
          for (ie = Date.now(); e < r.length; e++)
            (t = r[e])() || r[e] !== t || r.splice(e--, 1);
          r.length || T.fx.stop(), (ie = void 0);
        }),
        (T.fx.timer = function (t) {
          T.timers.push(t), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          ae || ((ae = !0), de());
        }),
        (T.fx.stop = function () {
          ae = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (t, e) {
          return (
            (t = (T.fx && T.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function (e, n) {
              var o = r.setTimeout(e, t);
              n.stop = function () {
                r.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var t = w.createElement("input"),
            e = w
              .createElement("select")
              .appendChild(w.createElement("option"));
          (t.type = "checkbox"),
            (b.checkOn = "" !== t.value),
            (b.optSelected = e.selected),
            ((t = w.createElement("input")).value = "t"),
            (t.type = "radio"),
            (b.radioValue = "t" === t.value);
        })();
      var ue,
        ge = T.expr.attrHandle;
      T.fn.extend({
        attr: function (t, e) {
          return Z(this, T.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            T.removeAttr(this, t);
          });
        },
      }),
        T.extend({
          attr: function (t, e, r) {
            var n,
              o,
              i = t.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === t.getAttribute
                ? T.prop(t, e, r)
                : ((1 === i && T.isXMLDoc(t)) ||
                    (o =
                      T.attrHooks[e.toLowerCase()] ||
                      (T.expr.match.bool.test(e) ? ue : void 0)),
                  void 0 !== r
                    ? null === r
                      ? void T.removeAttr(t, e)
                      : o && "set" in o && void 0 !== (n = o.set(t, r, e))
                      ? n
                      : (t.setAttribute(e, r + ""), r)
                    : o && "get" in o && null !== (n = o.get(t, e))
                    ? n
                    : null == (n = T.find.attr(t, e))
                    ? void 0
                    : n);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!b.radioValue && "radio" === e && O(t, "input")) {
                  var r = t.value;
                  return t.setAttribute("type", e), r && (t.value = r), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var r,
              n = 0,
              o = e && e.match(R);
            if (o && 1 === t.nodeType)
              for (; (r = o[n++]); ) t.removeAttribute(r);
          },
        }),
        (ue = {
          set: function (t, e, r) {
            return !1 === e ? T.removeAttr(t, r) : t.setAttribute(r, r), r;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var r = ge[e] || T.find.attr;
          ge[e] = function (t, e, n) {
            var o,
              i,
              a = e.toLowerCase();
            return (
              n ||
                ((i = ge[a]),
                (ge[a] = o),
                (o = null != r(t, e, n) ? a : null),
                (ge[a] = i)),
              o
            );
          };
        });
      var be = /^(?:input|select|textarea|button)$/i,
        he = /^(?:a|area)$/i;
      function xe(t) {
        return (t.match(R) || []).join(" ");
      }
      function we(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function ve(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(R)) || [];
      }
      T.fn.extend({
        prop: function (t, e) {
          return Z(this, T.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[T.propFix[t] || t];
          });
        },
      }),
        T.extend({
          prop: function (t, e, r) {
            var n,
              o,
              i = t.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && T.isXMLDoc(t)) ||
                  ((e = T.propFix[e] || e), (o = T.propHooks[e])),
                void 0 !== r
                  ? o && "set" in o && void 0 !== (n = o.set(t, r, e))
                    ? n
                    : (t[e] = r)
                  : o && "get" in o && null !== (n = o.get(t, e))
                  ? n
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = T.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : be.test(t.nodeName) || (he.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        b.optSelected ||
          (T.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (t) {
            var e,
              r,
              n,
              o,
              i,
              a,
              l,
              s = 0;
            if (h(t))
              return this.each(function (e) {
                T(this).addClass(t.call(this, e, we(this)));
              });
            if ((e = ve(t)).length)
              for (; (r = this[s++]); )
                if (
                  ((o = we(r)), (n = 1 === r.nodeType && " " + xe(o) + " "))
                ) {
                  for (a = 0; (i = e[a++]); )
                    n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                  o !== (l = xe(n)) && r.setAttribute("class", l);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              r,
              n,
              o,
              i,
              a,
              l,
              s = 0;
            if (h(t))
              return this.each(function (e) {
                T(this).removeClass(t.call(this, e, we(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = ve(t)).length)
              for (; (r = this[s++]); )
                if (
                  ((o = we(r)), (n = 1 === r.nodeType && " " + xe(o) + " "))
                ) {
                  for (a = 0; (i = e[a++]); )
                    for (; n.indexOf(" " + i + " ") > -1; )
                      n = n.replace(" " + i + " ", " ");
                  o !== (l = xe(n)) && r.setAttribute("class", l);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var r = typeof t,
              n = "string" === r || Array.isArray(t);
            return "boolean" == typeof e && n
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : h(t)
              ? this.each(function (r) {
                  T(this).toggleClass(t.call(this, r, we(this), e), e);
                })
              : this.each(function () {
                  var e, o, i, a;
                  if (n)
                    for (o = 0, i = T(this), a = ve(t); (e = a[o++]); )
                      i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== r) ||
                      ((e = we(this)) && G.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || !1 === t
                            ? ""
                            : G.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (t) {
            var e,
              r,
              n = 0;
            for (e = " " + t + " "; (r = this[n++]); )
              if (1 === r.nodeType && (" " + xe(we(r)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
      var ye = /\r/g;
      T.fn.extend({
        val: function (t) {
          var e,
            r,
            n,
            o = this[0];
          return arguments.length
            ? ((n = h(t)),
              this.each(function (r) {
                var o;
                1 === this.nodeType &&
                  (null == (o = n ? t.call(this, r, T(this).val()) : t)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = T.map(o, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (e =
                T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (r = e.get(o, "value"))
              ? r
              : "string" == typeof (r = o.value)
              ? r.replace(ye, "")
              : null == r
              ? ""
              : r
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = T.find.attr(t, "value");
                return null != e ? e : xe(T.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  r,
                  n,
                  o = t.options,
                  i = t.selectedIndex,
                  a = "select-one" === t.type,
                  l = a ? null : [],
                  s = a ? i + 1 : o.length;
                for (n = i < 0 ? s : a ? i : 0; n < s; n++)
                  if (
                    ((r = o[n]).selected || n === i) &&
                    !r.disabled &&
                    (!r.parentNode.disabled || !O(r.parentNode, "optgroup"))
                  ) {
                    if (((e = T(r).val()), a)) return e;
                    l.push(e);
                  }
                return l;
              },
              set: function (t, e) {
                for (
                  var r, n, o = t.options, i = T.makeArray(e), a = o.length;
                  a--;

                )
                  ((n = o[a]).selected =
                    T.inArray(T.valHooks.option.get(n), i) > -1) && (r = !0);
                return r || (t.selectedIndex = -1), i;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = T.inArray(T(t).val(), e) > -1);
            },
          }),
            b.checkOn ||
              (T.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (b.focusin = "onfocusin" in r);
      var ke = /^(?:focusinfocus|focusoutblur)$/,
        Te = function (t) {
          t.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (t, e, n, o) {
          var i,
            a,
            l,
            s,
            d,
            m,
            c,
            p,
            u = [n || w],
            g = f.call(t, "type") ? t.type : t,
            b = f.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((a = p = l = n = n || w),
            3 !== n.nodeType &&
              8 !== n.nodeType &&
              !ke.test(g + T.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((b = g.split(".")), (g = b.shift()), b.sort()),
              (d = g.indexOf(":") < 0 && "on" + g),
              ((t = t[T.expando]
                ? t
                : new T.Event(g, "object" == typeof t && t)).isTrigger = o
                ? 2
                : 3),
              (t.namespace = b.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = n),
              (e = null == e ? [t] : T.makeArray(e, [t])),
              (c = T.event.special[g] || {}),
              o || !c.trigger || !1 !== c.trigger.apply(n, e)))
          ) {
            if (!o && !c.noBubble && !x(n)) {
              for (
                s = c.delegateType || g, ke.test(s + g) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                u.push(a), (l = a);
              l === (n.ownerDocument || w) &&
                u.push(l.defaultView || l.parentWindow || r);
            }
            for (i = 0; (a = u[i++]) && !t.isPropagationStopped(); )
              (p = a),
                (t.type = i > 1 ? s : c.bindType || g),
                (m =
                  (G.get(a, "events") || Object.create(null))[t.type] &&
                  G.get(a, "handle")) && m.apply(a, e),
                (m = d && a[d]) &&
                  m.apply &&
                  K(a) &&
                  ((t.result = m.apply(a, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = g),
              o ||
                t.isDefaultPrevented() ||
                (c._default && !1 !== c._default.apply(u.pop(), e)) ||
                !K(n) ||
                (d &&
                  h(n[g]) &&
                  !x(n) &&
                  ((l = n[d]) && (n[d] = null),
                  (T.event.triggered = g),
                  t.isPropagationStopped() && p.addEventListener(g, Te),
                  n[g](),
                  t.isPropagationStopped() && p.removeEventListener(g, Te),
                  (T.event.triggered = void 0),
                  l && (n[d] = l))),
              t.result
            );
          }
        },
        simulate: function (t, e, r) {
          var n = T.extend(new T.Event(), r, { type: t, isSimulated: !0 });
          T.event.trigger(n, null, e);
        },
      }),
        T.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              T.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var r = this[0];
            if (r) return T.event.trigger(t, e, r, !0);
          },
        }),
        b.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var r = function (t) {
              T.event.simulate(e, t.target, T.event.fix(t));
            };
            T.event.special[e] = {
              setup: function () {
                var n = this.ownerDocument || this.document || this,
                  o = G.access(n, e);
                o || n.addEventListener(t, r, !0), G.access(n, e, (o || 0) + 1);
              },
              teardown: function () {
                var n = this.ownerDocument || this.document || this,
                  o = G.access(n, e) - 1;
                o
                  ? G.access(n, e, o)
                  : (n.removeEventListener(t, r, !0), G.remove(n, e));
              },
            };
          });
      var _e = r.location,
        Ce = { guid: Date.now() },
        Ee = /\?/;
      T.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new r.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + t),
          e
        );
      };
      var De = /\[\]$/,
        je = /\r?\n/g,
        Oe = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;
      function Ae(t, e, r, n) {
        var o;
        if (Array.isArray(e))
          T.each(e, function (e, o) {
            r || De.test(t)
              ? n(t, o)
              : Ae(
                  t + "[" + ("object" == typeof o && null != o ? e : "") + "]",
                  o,
                  r,
                  n
                );
          });
        else if (r || "object" !== k(e)) n(t, e);
        else for (o in e) Ae(t + "[" + o + "]", e[o], r, n);
      }
      (T.param = function (t, e) {
        var r,
          n = [],
          o = function (t, e) {
            var r = h(e) ? e() : e;
            n[n.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == r ? "" : r);
          };
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !T.isPlainObject(t)))
          T.each(t, function () {
            o(this.name, this.value);
          });
        else for (r in t) Ae(r, t[r], e, o);
        return n.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = T.prop(this, "elements");
              return t ? T.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Se.test(this.nodeName) &&
                  !Oe.test(t) &&
                  (this.checked || !gt.test(t))
                );
              })
              .map(function (t, e) {
                var r = T(this).val();
                return null == r
                  ? null
                  : Array.isArray(r)
                  ? T.map(r, function (t) {
                      return { name: e.name, value: t.replace(je, "\r\n") };
                    })
                  : { name: e.name, value: r.replace(je, "\r\n") };
              })
              .get();
          },
        });
      var ze = /%20/g,
        Le = /#.*$/,
        Ie = /([?&])_=[^&]*/,
        Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qe = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        Me = {},
        Pe = {},
        Be = "*/".concat("*"),
        Xe = w.createElement("a");
      function He(t) {
        return function (e, r) {
          "string" != typeof e && ((r = e), (e = "*"));
          var n,
            o = 0,
            i = e.toLowerCase().match(R) || [];
          if (h(r))
            for (; (n = i[o++]); )
              "+" === n[0]
                ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(r))
                : (t[n] = t[n] || []).push(r);
        };
      }
      function Ue(t, e, r, n) {
        var o = {},
          i = t === Pe;
        function a(l) {
          var s;
          return (
            (o[l] = !0),
            T.each(t[l] || [], function (t, l) {
              var d = l(e, r, n);
              return "string" != typeof d || i || o[d]
                ? i
                  ? !(s = d)
                  : void 0
                : (e.dataTypes.unshift(d), a(d), !1);
            }),
            s
          );
        }
        return a(e.dataTypes[0]) || (!o["*"] && a("*"));
      }
      function Ze(t, e) {
        var r,
          n,
          o = T.ajaxSettings.flatOptions || {};
        for (r in e) void 0 !== e[r] && ((o[r] ? t : n || (n = {}))[r] = e[r]);
        return n && T.extend(!0, t, n), t;
      }
      (Xe.href = _e.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: _e.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              _e.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Be,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? Ze(Ze(t, T.ajaxSettings), e) : Ze(T.ajaxSettings, t);
          },
          ajaxPrefilter: He(Me),
          ajaxTransport: He(Pe),
          ajax: function (t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var n,
              o,
              i,
              a,
              l,
              s,
              d,
              m,
              c,
              p,
              f = T.ajaxSetup({}, e),
              u = f.context || f,
              g = f.context && (u.nodeType || u.jquery) ? T(u) : T.event,
              b = T.Deferred(),
              h = T.Callbacks("once memory"),
              x = f.statusCode || {},
              v = {},
              y = {},
              k = "canceled",
              _ = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (d) {
                    if (!a)
                      for (a = {}; (e = Ne.exec(i)); )
                        a[e[1].toLowerCase() + " "] = (
                          a[e[1].toLowerCase() + " "] || []
                        ).concat(e[2]);
                    e = a[t.toLowerCase() + " "];
                  }
                  return null == e ? null : e.join(", ");
                },
                getAllResponseHeaders: function () {
                  return d ? i : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == d &&
                      ((t = y[t.toLowerCase()] = y[t.toLowerCase()] || t),
                      (v[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == d && (f.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (d) _.always(t[_.status]);
                    else for (e in t) x[e] = [x[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || k;
                  return n && n.abort(e), C(0, e), this;
                },
              };
            if (
              (b.promise(_),
              (f.url = ((t || f.url || _e.href) + "").replace(
                Re,
                _e.protocol + "//"
              )),
              (f.type = e.method || e.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(R) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              s = w.createElement("a");
              try {
                (s.href = f.url),
                  (s.href = s.href),
                  (f.crossDomain =
                    Xe.protocol + "//" + Xe.host != s.protocol + "//" + s.host);
              } catch (t) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = T.param(f.data, f.traditional)),
              Ue(Me, f, e, _),
              d)
            )
              return _;
            for (c in ((m = T.event && f.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !qe.test(f.type)),
            (o = f.url.replace(Le, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (f.data = f.data.replace(ze, "+"))
              : ((p = f.url.slice(o.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((o += (Ee.test(o) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((o = o.replace(Ie, "$1")),
                  (p = (Ee.test(o) ? "&" : "?") + "_=" + Ce.guid++ + p)),
                (f.url = o + p)),
            f.ifModified &&
              (T.lastModified[o] &&
                _.setRequestHeader("If-Modified-Since", T.lastModified[o]),
              T.etag[o] && _.setRequestHeader("If-None-Match", T.etag[o])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              e.contentType) &&
              _.setRequestHeader("Content-Type", f.contentType),
            _.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + Be + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              _.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (!1 === f.beforeSend.call(u, _, f) || d))
              return _.abort();
            if (
              ((k = "abort"),
              h.add(f.complete),
              _.done(f.success),
              _.fail(f.error),
              (n = Ue(Pe, f, e, _)))
            ) {
              if (((_.readyState = 1), m && g.trigger("ajaxSend", [_, f]), d))
                return _;
              f.async &&
                f.timeout > 0 &&
                (l = r.setTimeout(function () {
                  _.abort("timeout");
                }, f.timeout));
              try {
                (d = !1), n.send(v, C);
              } catch (t) {
                if (d) throw t;
                C(-1, t);
              }
            } else C(-1, "No Transport");
            function C(t, e, a, s) {
              var c,
                p,
                w,
                v,
                y,
                k = e;
              d ||
                ((d = !0),
                l && r.clearTimeout(l),
                (n = void 0),
                (i = s || ""),
                (_.readyState = t > 0 ? 4 : 0),
                (c = (t >= 200 && t < 300) || 304 === t),
                a &&
                  (v = (function (t, e, r) {
                    for (
                      var n, o, i, a, l = t.contents, s = t.dataTypes;
                      "*" === s[0];

                    )
                      s.shift(),
                        void 0 === n &&
                          (n =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                      for (o in l)
                        if (l[o] && l[o].test(n)) {
                          s.unshift(o);
                          break;
                        }
                    if (s[0] in r) i = s[0];
                    else {
                      for (o in r) {
                        if (!s[0] || t.converters[o + " " + s[0]]) {
                          i = o;
                          break;
                        }
                        a || (a = o);
                      }
                      i = i || a;
                    }
                    if (i) return i !== s[0] && s.unshift(i), r[i];
                  })(f, _, a)),
                !c &&
                  T.inArray("script", f.dataTypes) > -1 &&
                  (f.converters["text script"] = function () {}),
                (v = (function (t, e, r, n) {
                  var o,
                    i,
                    a,
                    l,
                    s,
                    d = {},
                    m = t.dataTypes.slice();
                  if (m[1])
                    for (a in t.converters)
                      d[a.toLowerCase()] = t.converters[a];
                  for (i = m.shift(); i; )
                    if (
                      (t.responseFields[i] && (r[t.responseFields[i]] = e),
                      !s &&
                        n &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (s = i),
                      (i = m.shift()))
                    )
                      if ("*" === i) i = s;
                      else if ("*" !== s && s !== i) {
                        if (!(a = d[s + " " + i] || d["* " + i]))
                          for (o in d)
                            if (
                              (l = o.split(" "))[1] === i &&
                              (a = d[s + " " + l[0]] || d["* " + l[0]])
                            ) {
                              !0 === a
                                ? (a = d[o])
                                : !0 !== d[o] && ((i = l[0]), m.unshift(l[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && t.throws) e = a(e);
                          else
                            try {
                              e = a(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? t
                                  : "No conversion from " + s + " to " + i,
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(f, v, _, c)),
                c
                  ? (f.ifModified &&
                      ((y = _.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[o] = y),
                      (y = _.getResponseHeader("etag")) && (T.etag[o] = y)),
                    204 === t || "HEAD" === f.type
                      ? (k = "nocontent")
                      : 304 === t
                      ? (k = "notmodified")
                      : ((k = v.state), (p = v.data), (c = !(w = v.error))))
                  : ((w = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
                (_.status = t),
                (_.statusText = (e || k) + ""),
                c ? b.resolveWith(u, [p, k, _]) : b.rejectWith(u, [_, k, w]),
                _.statusCode(x),
                (x = void 0),
                m &&
                  g.trigger(c ? "ajaxSuccess" : "ajaxError", [_, f, c ? p : w]),
                h.fireWith(u, [_, k]),
                m &&
                  (g.trigger("ajaxComplete", [_, f]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return _;
          },
          getJSON: function (t, e, r) {
            return T.get(t, e, r, "json");
          },
          getScript: function (t, e) {
            return T.get(t, void 0, e, "script");
          },
        }),
        T.each(["get", "post"], function (t, e) {
          T[e] = function (t, r, n, o) {
            return (
              h(r) && ((o = o || n), (n = r), (r = void 0)),
              T.ajax(
                T.extend(
                  { url: t, type: e, dataType: o, data: r, success: n },
                  T.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        T.ajaxPrefilter(function (t) {
          var e;
          for (e in t.headers)
            "content-type" === e.toLowerCase() &&
              (t.contentType = t.headers[e] || "");
        }),
        (T._evalUrl = function (t, e, r) {
          return T.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (t) {
              T.globalEval(t, e, r);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (h(t) && (t = t.call(this[0])),
                (e = T(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return h(t)
              ? this.each(function (e) {
                  T(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = T(this),
                    r = e.contents();
                  r.length ? r.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = h(t);
            return this.each(function (r) {
              T(this).wrapAll(e ? t.call(this, r) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (t) {
          return !T.expr.pseudos.visible(t);
        }),
        (T.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new r.XMLHttpRequest();
          } catch (t) {}
        });
      var We = { 0: 200, 1223: 204 },
        Ye = T.ajaxSettings.xhr();
      (b.cors = !!Ye && "withCredentials" in Ye),
        (b.ajax = Ye = !!Ye),
        T.ajaxTransport(function (t) {
          var e, n;
          if (b.cors || (Ye && !t.crossDomain))
            return {
              send: function (o, i) {
                var a,
                  l = t.xhr();
                if (
                  (l.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (a in t.xhrFields) l[a] = t.xhrFields[a];
                for (a in (t.mimeType &&
                  l.overrideMimeType &&
                  l.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  l.setRequestHeader(a, o[a]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e = n = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null),
                      "abort" === t
                        ? l.abort()
                        : "error" === t
                        ? "number" != typeof l.status
                          ? i(0, "error")
                          : i(l.status, l.statusText)
                        : i(
                            We[l.status] || l.status,
                            l.statusText,
                            "text" !== (l.responseType || "text") ||
                              "string" != typeof l.responseText
                              ? { binary: l.response }
                              : { text: l.responseText },
                            l.getAllResponseHeaders()
                          ));
                  };
                }),
                  (l.onload = e()),
                  (n = l.onerror = l.ontimeout = e("error")),
                  void 0 !== l.onabort
                    ? (l.onabort = n)
                    : (l.onreadystatechange = function () {
                        4 === l.readyState &&
                          r.setTimeout(function () {
                            e && n();
                          });
                      }),
                  (e = e("abort"));
                try {
                  l.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        T.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return T.globalEval(t), t;
            },
          },
        }),
        T.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        T.ajaxTransport("script", function (t) {
          var e, r;
          if (t.crossDomain || t.scriptAttrs)
            return {
              send: function (n, o) {
                (e = T("<script>")
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (r = function (t) {
                      e.remove(),
                        (r = null),
                        t && o("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  w.head.appendChild(e[0]);
              },
              abort: function () {
                r && r();
              },
            };
        });
      var Fe,
        $e = [],
        Ke = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = $e.pop() || T.expando + "_" + Ce.guid++;
          return (this[t] = !0), t;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (t, e, n) {
          var o,
            i,
            a,
            l =
              !1 !== t.jsonp &&
              (Ke.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Ke.test(t.data) &&
                  "data");
          if (l || "jsonp" === t.dataTypes[0])
            return (
              (o = t.jsonpCallback = h(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
              l
                ? (t[l] = t[l].replace(Ke, "$1" + o))
                : !1 !== t.jsonp &&
                  (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
              (t.converters["script json"] = function () {
                return a || T.error(o + " was not called"), a[0];
              }),
              (t.dataTypes[0] = "json"),
              (i = r[o]),
              (r[o] = function () {
                a = arguments;
              }),
              n.always(function () {
                void 0 === i ? T(r).removeProp(o) : (r[o] = i),
                  t[o] && ((t.jsonpCallback = e.jsonpCallback), $e.push(o)),
                  a && h(i) && i(a[0]),
                  (a = i = void 0);
              }),
              "script"
            );
        }),
        (b.createHTMLDocument =
          (((Fe = w.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Fe.childNodes.length)),
        (T.parseHTML = function (t, e, r) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((r = e), (e = !1)),
              e ||
                (b.createHTMLDocument
                  ? (((n = (e = w.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = w.location.href),
                    e.head.appendChild(n))
                  : (e = w)),
              (i = !r && []),
              (o = S.exec(t))
                ? [e.createElement(o[1])]
                : ((o = kt([t], e, i)),
                  i && i.length && T(i).remove(),
                  T.merge([], o.childNodes)));
          var n, o, i;
        }),
        (T.fn.load = function (t, e, r) {
          var n,
            o,
            i,
            a = this,
            l = t.indexOf(" ");
          return (
            l > -1 && ((n = xe(t.slice(l))), (t = t.slice(0, l))),
            h(e)
              ? ((r = e), (e = void 0))
              : e && "object" == typeof e && (o = "POST"),
            a.length > 0 &&
              T.ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (i = arguments),
                    a.html(n ? T("<div>").append(T.parseHTML(t)).find(n) : t);
                })
                .always(
                  r &&
                    function (t, e) {
                      a.each(function () {
                        r.apply(this, i || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (t) {
          return T.grep(T.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (t, e, r) {
            var n,
              o,
              i,
              a,
              l,
              s,
              d = T.css(t, "position"),
              m = T(t),
              c = {};
            "static" === d && (t.style.position = "relative"),
              (l = m.offset()),
              (i = T.css(t, "top")),
              (s = T.css(t, "left")),
              ("absolute" === d || "fixed" === d) &&
              (i + s).indexOf("auto") > -1
                ? ((a = (n = m.position()).top), (o = n.left))
                : ((a = parseFloat(i) || 0), (o = parseFloat(s) || 0)),
              h(e) && (e = e.call(t, r, T.extend({}, l))),
              null != e.top && (c.top = e.top - l.top + a),
              null != e.left && (c.left = e.left - l.left + o),
              "using" in e
                ? e.using.call(t, c)
                : ("number" == typeof c.top && (c.top += "px"),
                  "number" == typeof c.left && (c.left += "px"),
                  m.css(c));
          },
        }),
        T.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    T.offset.setOffset(this, t, e);
                  });
            var e,
              r,
              n = this[0];
            return n
              ? n.getClientRects().length
                ? ((e = n.getBoundingClientRect()),
                  (r = n.ownerDocument.defaultView),
                  { top: e.top + r.pageYOffset, left: e.left + r.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                r,
                n = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === T.css(n, "position"))
                e = n.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    r = n.ownerDocument,
                    t = n.offsetParent || r.documentElement;
                  t &&
                  (t === r.body || t === r.documentElement) &&
                  "static" === T.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== n &&
                  1 === t.nodeType &&
                  (((o = T(t).offset()).top += T.css(t, "borderTopWidth", !0)),
                  (o.left += T.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - o.top - T.css(n, "marginTop", !0),
                left: e.left - o.left - T.css(n, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === T.css(t, "position");

              )
                t = t.offsetParent;
              return t || it;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var r = "pageYOffset" === e;
            T.fn[t] = function (n) {
              return Z(
                this,
                function (t, n, o) {
                  var i;
                  if (
                    (x(t) ? (i = t) : 9 === t.nodeType && (i = t.defaultView),
                    void 0 === o)
                  )
                    return i ? i[e] : t[n];
                  i
                    ? i.scrollTo(r ? i.pageXOffset : o, r ? o : i.pageYOffset)
                    : (t[n] = o);
                },
                t,
                n,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (t, e) {
          T.cssHooks[e] = Yt(b.pixelPosition, function (t, r) {
            if (r)
              return (r = Wt(t, e)), Xt.test(r) ? T(t).position()[e] + "px" : r;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (t, e) {
          T.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (r, n) {
              T.fn[n] = function (o, i) {
                var a = arguments.length && (r || "boolean" != typeof o),
                  l = r || (!0 === o || !0 === i ? "margin" : "border");
                return Z(
                  this,
                  function (e, r, o) {
                    var i;
                    return x(e)
                      ? 0 === n.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((i = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          i["scroll" + t],
                          e.body["offset" + t],
                          i["offset" + t],
                          i["client" + t]
                        ))
                      : void 0 === o
                      ? T.css(e, r, l)
                      : T.style(e, r, o, l);
                  },
                  e,
                  a ? o : void 0,
                  a
                );
              };
            }
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            T.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        T.fn.extend({
          bind: function (t, e, r) {
            return this.on(t, null, e, r);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, r, n) {
            return this.on(e, t, r, n);
          },
          undelegate: function (t, e, r) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", r);
          },
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, e) {
            T.fn[e] = function (t, r) {
              return arguments.length > 0
                ? this.on(e, null, t, r)
                : this.trigger(e);
            };
          }
        );
      var Ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (T.proxy = function (t, e) {
        var r, n, o;
        if (("string" == typeof e && ((r = t[e]), (e = t), (t = r)), h(t)))
          return (
            (n = l.call(arguments, 2)),
            ((o = function () {
              return t.apply(e || this, n.concat(l.call(arguments)));
            }).guid = t.guid = t.guid || T.guid++),
            o
          );
      }),
        (T.holdReady = function (t) {
          t ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = O),
        (T.isFunction = h),
        (T.isWindow = x),
        (T.camelCase = $),
        (T.type = k),
        (T.now = Date.now),
        (T.isNumeric = function (t) {
          var e = T.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        (T.trim = function (t) {
          return null == t ? "" : (t + "").replace(Ve, "");
        }),
        void 0 ===
          (n = function () {
            return T;
          }.apply(e, [])) || (t.exports = n);
      var Ge = r.jQuery,
        Je = r.$;
      return (
        (T.noConflict = function (t) {
          return (
            r.$ === T && (r.$ = Je), t && r.jQuery === T && (r.jQuery = Ge), T
          );
        }),
        void 0 === o && (r.jQuery = r.$ = T),
        T
      );
    });
  },
  function (t, e, r) {
    "use strict";
    var n,
      o = function () {
        return (
          void 0 === n &&
            (n = Boolean(window && document && document.all && !window.atob)),
          n
        );
      },
      i = (function () {
        var t = {};
        return function (e) {
          if (void 0 === t[e]) {
            var r = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (t) {
                r = null;
              }
            t[e] = r;
          }
          return t[e];
        };
      })(),
      a = [];
    function l(t) {
      for (var e = -1, r = 0; r < a.length; r++)
        if (a[r].identifier === t) {
          e = r;
          break;
        }
      return e;
    }
    function s(t, e) {
      for (var r = {}, n = [], o = 0; o < t.length; o++) {
        var i = t[o],
          s = e.base ? i[0] + e.base : i[0],
          d = r[s] || 0,
          m = "".concat(s, " ").concat(d);
        r[s] = d + 1;
        var c = l(m),
          p = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== c
          ? (a[c].references++, a[c].updater(p))
          : a.push({ identifier: m, updater: b(p, e), references: 1 }),
          n.push(m);
      }
      return n;
    }
    function d(t) {
      var e = document.createElement("style"),
        n = t.attributes || {};
      if (void 0 === n.nonce) {
        var o = r.nc;
        o && (n.nonce = o);
      }
      if (
        (Object.keys(n).forEach(function (t) {
          e.setAttribute(t, n[t]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(e);
      else {
        var a = i(t.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(e);
      }
      return e;
    }
    var m,
      c =
        ((m = []),
        function (t, e) {
          return (m[t] = e), m.filter(Boolean).join("\n");
        });
    function p(t, e, r, n) {
      var o = r
        ? ""
        : n.media
        ? "@media ".concat(n.media, " {").concat(n.css, "}")
        : n.css;
      if (t.styleSheet) t.styleSheet.cssText = c(e, o);
      else {
        var i = document.createTextNode(o),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
    function f(t, e, r) {
      var n = r.css,
        o = r.media,
        i = r.sourceMap;
      if (
        (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
        i &&
          btoa &&
          (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = n;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
    var u = null,
      g = 0;
    function b(t, e) {
      var r, n, o;
      if (e.singleton) {
        var i = g++;
        (r = u || (u = d(e))),
          (n = p.bind(null, r, i, !1)),
          (o = p.bind(null, r, i, !0));
      } else
        (r = d(e)),
          (n = f.bind(null, r, e)),
          (o = function () {
            !(function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(r);
          });
      return (
        n(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            n((t = e));
          } else o();
        }
      );
    }
    t.exports = function (t, e) {
      (e = e || {}).singleton ||
        "boolean" == typeof e.singleton ||
        (e.singleton = o());
      var r = s((t = t || []), e);
      return function (t) {
        if (
          ((t = t || []),
          "[object Array]" === Object.prototype.toString.call(t))
        ) {
          for (var n = 0; n < r.length; n++) {
            var o = l(r[n]);
            a[o].references--;
          }
          for (var i = s(t, e), d = 0; d < r.length; d++) {
            var m = l(r[d]);
            0 === a[m].references && (a[m].updater(), a.splice(m, 1));
          }
          r = i;
        }
      };
    };
  },
  function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var r = (function (t, e) {
              var r = t[1] || "",
                n = t[3];
              if (!n) return r;
              if (e && "function" == typeof btoa) {
                var o =
                    ((a = n),
                    (l = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      l
                    )),
                    "/*# ".concat(s, " */")),
                  i = n.sources.map(function (t) {
                    return "/*# sourceURL="
                      .concat(n.sourceRoot || "")
                      .concat(t, " */");
                  });
                return [r].concat(i).concat([o]).join("\n");
              }
              var a, l, s;
              return [r].join("\n");
            })(e, t);
            return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r;
          }).join("");
        }),
        (e.i = function (t, r, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          var o = {};
          if (n)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o[a] = !0);
            }
          for (var l = 0; l < t.length; l++) {
            var s = [].concat(t[l]);
            (n && o[s[0]]) ||
              (r &&
                (s[2]
                  ? (s[2] = "".concat(r, " and ").concat(s[2]))
                  : (s[2] = r)),
              e.push(s));
          }
        }),
        e
      );
    };
  },
  ,
  ,
  function (t, e, r) {
    var n = r(1),
      o = r(7);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (n(o, i), o.locals ? o.locals : {});
    t.exports = a;
  },
  function (t, e, r) {
    (e = r(2)(!1)).push([
      t.i,
      "/*!\n * Bootstrap v4.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]){color:inherit;text-decoration:none}a:not([href]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-last{-ms-flex-order:13;order:13}.order-0{-ms-flex-order:0;order:0}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-sm-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-last{-ms-flex-order:13;order:13}.order-sm-0{-ms-flex-order:0;order:0}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-md-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-md-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-md-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-md-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-md-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-last{-ms-flex-order:13;order:13}.order-md-0{-ms-flex-order:0;order:0}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-lg-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-last{-ms-flex-order:13;order:13}.order-lg-0{-ms-flex-order:0;order:0}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-xl-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-last{-ms-flex-order:13;order:13}.order-xl-0{-ms-flex-order:0;order:0}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{border-color:#28a745}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{border-color:#dc3545}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#0069d9;border-color:#0062cc;box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{color:#fff;background-color:#5a6268;border-color:#545b62;box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#218838;border-color:#1e7e34;box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#138496;border-color:#117a8b;box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{color:#212529;background-color:#e0a800;border-color:#d39e00;box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c82333;border-color:#bd2130;box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{color:#fff;background-color:#23272b;border-color:#1d2124;box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;-ms-flex:1 1 0%;flex:1 1 0%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:-ms-flexbox;display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label::before,.custom-control-input[disabled]~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + .75rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img,.card-img-bottom,.card-img-top{-ms-flex-negative:0;flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{-ms-flex:1 0 0%;flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.media-body{-ms-flex:1;flex:1}.list-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal .list-group-item.active{margin-top:0}.list-group-horizontal .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-sm .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm .list-group-item.active{margin-top:0}.list-group-horizontal-sm .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-md .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md .list-group-item.active{margin-top:0}.list-group-horizontal-md .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-lg .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg .list-group-item.active{margin-top:0}.list-group-horizontal-lg .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-xl .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl .list-group-item.active{margin-top:0}.list-group-horizontal-xl .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush .list-group-item{border-right-width:0;border-left-width:0;border-radius:0}.list-group-flush .list-group-item:first-child{border-top-width:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-50px);transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal.modal-static .modal-dialog{-webkit-transform:scale(1.02);transform:scale(1.02)}.modal-dialog-scrollable{display:-ms-flexbox;display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{-ms-flex-negative:0;flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow::before,.bs-popover-top>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow::after,.bs-popover-top>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow::before,.bs-popover-right>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow::after,.bs-popover-right>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow::before,.bs-popover-bottom>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow::after,.bs-popover-bottom>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow::before,.bs-popover-left>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow::after,.bs-popover-left>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{-ms-touch-action:pan-y;touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-sm-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-sm-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-sm-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-sm-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-sm-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-sm-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-md-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-md-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-md-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-md-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-md-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-md-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-lg-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-lg-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-lg-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-lg-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-lg-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-lg-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-xl-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-xl-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-xl-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-xl-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-xl-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-xl-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;overflow-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, r) {
    var n;
    /*! jQuery v3.5.0 | (c) JS Foundation and other contributors | jquery.org/license */ !(function (
      e,
      r
    ) {
      "use strict";
      "object" == typeof t.exports
        ? (t.exports = e.document
            ? r(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return r(t);
              })
        : r(e);
    })("undefined" != typeof window ? window : this, function (r, o) {
      "use strict";
      var i = [],
        a = Object.getPrototypeOf,
        l = i.slice,
        s = i.flat
          ? function (t) {
              return i.flat.call(t);
            }
          : function (t) {
              return i.concat.apply([], t);
            },
        d = i.push,
        m = i.indexOf,
        c = {},
        p = c.toString,
        f = c.hasOwnProperty,
        u = f.toString,
        g = u.call(Object),
        b = {},
        h = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        x = function (t) {
          return null != t && t === t.window;
        },
        w = r.document,
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function y(t, e, r) {
        var n,
          o,
          i = (r = r || w).createElement("script");
        if (((i.text = t), e))
          for (n in v)
            (o = e[n] || (e.getAttribute && e.getAttribute(n))) &&
              i.setAttribute(n, o);
        r.head.appendChild(i).parentNode.removeChild(i);
      }
      function k(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? c[p.call(t)] || "object"
          : typeof t;
      }
      var T = "3.5.0",
        _ = function (t, e) {
          return new _.fn.init(t, e);
        };
      function C(t) {
        var e = !!t && "length" in t && t.length,
          r = k(t);
        return (
          !h(t) &&
          !x(t) &&
          ("array" === r ||
            0 === e ||
            ("number" == typeof e && 0 < e && e - 1 in t))
        );
      }
      (_.fn = _.prototype = {
        jquery: T,
        constructor: _,
        length: 0,
        toArray: function () {
          return l.call(this);
        },
        get: function (t) {
          return null == t
            ? l.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          var e = _.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function (t) {
          return _.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            _.map(this, function (e, r) {
              return t.call(e, r, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            _.grep(this, function (t, e) {
              return (e + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            _.grep(this, function (t, e) {
              return e % 2;
            })
          );
        },
        eq: function (t) {
          var e = this.length,
            r = +t + (t < 0 ? e : 0);
          return this.pushStack(0 <= r && r < e ? [this[r]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: d,
        sort: i.sort,
        splice: i.splice,
      }),
        (_.extend = _.fn.extend = function () {
          var t,
            e,
            r,
            n,
            o,
            i,
            a = arguments[0] || {},
            l = 1,
            s = arguments.length,
            d = !1;
          for (
            "boolean" == typeof a && ((d = a), (a = arguments[l] || {}), l++),
              "object" == typeof a || h(a) || (a = {}),
              l === s && ((a = this), l--);
            l < s;
            l++
          )
            if (null != (t = arguments[l]))
              for (e in t)
                (n = t[e]),
                  "__proto__" !== e &&
                    a !== n &&
                    (d && n && (_.isPlainObject(n) || (o = Array.isArray(n)))
                      ? ((r = a[e]),
                        (i =
                          o && !Array.isArray(r)
                            ? []
                            : o || _.isPlainObject(r)
                            ? r
                            : {}),
                        (o = !1),
                        (a[e] = _.extend(d, i, n)))
                      : void 0 !== n && (a[e] = n));
          return a;
        }),
        _.extend({
          expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, r;
            return !(
              !t ||
              "[object Object]" !== p.call(t) ||
              ((e = a(t)) &&
                ("function" !=
                  typeof (r = f.call(e, "constructor") && e.constructor) ||
                  u.call(r) !== g))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t, e, r) {
            y(t, { nonce: e && e.nonce }, r);
          },
          each: function (t, e) {
            var r,
              n = 0;
            if (C(t))
              for (r = t.length; n < r && !1 !== e.call(t[n], n, t[n]); n++);
            else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
            return t;
          },
          makeArray: function (t, e) {
            var r = e || [];
            return (
              null != t &&
                (C(Object(t))
                  ? _.merge(r, "string" == typeof t ? [t] : t)
                  : d.call(r, t)),
              r
            );
          },
          inArray: function (t, e, r) {
            return null == e ? -1 : m.call(e, t, r);
          },
          merge: function (t, e) {
            for (var r = +e.length, n = 0, o = t.length; n < r; n++)
              t[o++] = e[n];
            return (t.length = o), t;
          },
          grep: function (t, e, r) {
            for (var n = [], o = 0, i = t.length, a = !r; o < i; o++)
              !e(t[o], o) !== a && n.push(t[o]);
            return n;
          },
          map: function (t, e, r) {
            var n,
              o,
              i = 0,
              a = [];
            if (C(t))
              for (n = t.length; i < n; i++)
                null != (o = e(t[i], i, r)) && a.push(o);
            else for (i in t) null != (o = e(t[i], i, r)) && a.push(o);
            return s(a);
          },
          guid: 1,
          support: b,
        }),
        "function" == typeof Symbol &&
          (_.fn[Symbol.iterator] = i[Symbol.iterator]),
        _.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            c["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var E = (function (t) {
        var e,
          r,
          n,
          o,
          i,
          a,
          l,
          s,
          d,
          m,
          c,
          p,
          f,
          u,
          g,
          b,
          h,
          x,
          w,
          v = "sizzle" + 1 * new Date(),
          y = t.document,
          k = 0,
          T = 0,
          _ = st(),
          C = st(),
          E = st(),
          D = st(),
          j = function (t, e) {
            return t === e && (c = !0), 0;
          },
          O = {}.hasOwnProperty,
          S = [],
          A = S.pop,
          z = S.push,
          L = S.push,
          I = S.slice,
          N = function (t, e) {
            for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
            return -1;
          },
          q =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          R = "[\\x20\\t\\r\\n\\f]",
          M =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            R +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          P =
            "\\[" +
            R +
            "*(" +
            M +
            ")(?:" +
            R +
            "*([*^$|!~]?=)" +
            R +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            M +
            "))|)" +
            R +
            "*\\]",
          B =
            ":(" +
            M +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            P +
            ")*)|.*)\\)|)",
          X = new RegExp(R + "+", "g"),
          H = new RegExp(
            "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
            "g"
          ),
          U = new RegExp("^" + R + "*," + R + "*"),
          Z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
          W = new RegExp(R + "|>"),
          Y = new RegExp(B),
          F = new RegExp("^" + M + "$"),
          $ = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + B),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                R +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                R +
                "*(?:([+-]|)" +
                R +
                "*(\\d+)|))" +
                R +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + q + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                R +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                R +
                "*((?:-\\d)?\\d*)" +
                R +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          K = /HTML$/i,
          V = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          tt = /[+~]/,
          et = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          rt = function (t, e) {
            var r = "0x" + t.slice(1) - 65536;
            return (
              e ||
              (r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320))
            );
          },
          nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ot = function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          },
          it = function () {
            p();
          },
          at = vt(
            function (t) {
              return (
                !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          L.apply((S = I.call(y.childNodes)), y.childNodes),
            S[y.childNodes.length].nodeType;
        } catch (e) {
          L = {
            apply: S.length
              ? function (t, e) {
                  z.apply(t, I.call(e));
                }
              : function (t, e) {
                  for (var r = t.length, n = 0; (t[r++] = e[n++]); );
                  t.length = r - 1;
                },
          };
        }
        function lt(t, e, n, o) {
          var i,
            l,
            d,
            m,
            c,
            u,
            h,
            x = e && e.ownerDocument,
            y = e ? e.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof t || !t || (1 !== y && 9 !== y && 11 !== y))
          )
            return n;
          if (!o && (p(e), (e = e || f), g)) {
            if (11 !== y && (c = Q.exec(t)))
              if ((i = c[1])) {
                if (9 === y) {
                  if (!(d = e.getElementById(i))) return n;
                  if (d.id === i) return n.push(d), n;
                } else if (
                  x &&
                  (d = x.getElementById(i)) &&
                  w(e, d) &&
                  d.id === i
                )
                  return n.push(d), n;
              } else {
                if (c[2]) return L.apply(n, e.getElementsByTagName(t)), n;
                if (
                  (i = c[3]) &&
                  r.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return L.apply(n, e.getElementsByClassName(i)), n;
              }
            if (
              r.qsa &&
              !D[t + " "] &&
              (!b || !b.test(t)) &&
              (1 !== y || "object" !== e.nodeName.toLowerCase())
            ) {
              if (((h = t), (x = e), 1 === y && (W.test(t) || Z.test(t)))) {
                for (
                  ((x = (tt.test(t) && ht(e.parentNode)) || e) === e &&
                    r.scope) ||
                    ((m = e.getAttribute("id"))
                      ? (m = m.replace(nt, ot))
                      : e.setAttribute("id", (m = v))),
                    l = (u = a(t)).length;
                  l--;

                )
                  u[l] = (m ? "#" + m : ":scope") + " " + wt(u[l]);
                h = u.join(",");
              }
              try {
                return L.apply(n, x.querySelectorAll(h)), n;
              } catch (e) {
                D(t, !0);
              } finally {
                m === v && e.removeAttribute("id");
              }
            }
          }
          return s(t.replace(H, "$1"), e, n, o);
        }
        function st() {
          var t = [];
          return function e(r, o) {
            return (
              t.push(r + " ") > n.cacheLength && delete e[t.shift()],
              (e[r + " "] = o)
            );
          };
        }
        function dt(t) {
          return (t[v] = !0), t;
        }
        function mt(t) {
          var e = f.createElement("fieldset");
          try {
            return !!t(e);
          } catch (t) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function ct(t, e) {
          for (var r = t.split("|"), o = r.length; o--; )
            n.attrHandle[r[o]] = e;
        }
        function pt(t, e) {
          var r = e && t,
            n =
              r &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              t.sourceIndex - e.sourceIndex;
          if (n) return n;
          if (r) for (; (r = r.nextSibling); ) if (r === e) return -1;
          return t ? 1 : -1;
        }
        function ft(t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }
        function ut(t) {
          return function (e) {
            var r = e.nodeName.toLowerCase();
            return ("input" === r || "button" === r) && e.type === t;
          };
        }
        function gt(t) {
          return function (e) {
            return "form" in e
              ? e.parentNode && !1 === e.disabled
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && at(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function bt(t) {
          return dt(function (e) {
            return (
              (e = +e),
              dt(function (r, n) {
                for (var o, i = t([], r.length, e), a = i.length; a--; )
                  r[(o = i[a])] && (r[o] = !(n[o] = r[o]));
              })
            );
          });
        }
        function ht(t) {
          return t && void 0 !== t.getElementsByTagName && t;
        }
        for (e in ((r = lt.support = {}),
        (i = lt.isXML = function (t) {
          var e = t.namespaceURI,
            r = (t.ownerDocument || t).documentElement;
          return !K.test(e || (r && r.nodeName) || "HTML");
        }),
        (p = lt.setDocument = function (t) {
          var e,
            o,
            a = t ? t.ownerDocument || t : y;
          return (
            a != f &&
              9 === a.nodeType &&
              a.documentElement &&
              ((u = (f = a).documentElement),
              (g = !i(f)),
              y != f &&
                (o = f.defaultView) &&
                o.top !== o &&
                (o.addEventListener
                  ? o.addEventListener("unload", it, !1)
                  : o.attachEvent && o.attachEvent("onunload", it)),
              (r.scope = mt(function (t) {
                return (
                  u.appendChild(t).appendChild(f.createElement("div")),
                  void 0 !== t.querySelectorAll &&
                    !t.querySelectorAll(":scope fieldset div").length
                );
              })),
              (r.attributes = mt(function (t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (r.getElementsByTagName = mt(function (t) {
                return (
                  t.appendChild(f.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (r.getElementsByClassName = J.test(f.getElementsByClassName)),
              (r.getById = mt(function (t) {
                return (
                  (u.appendChild(t).id = v),
                  !f.getElementsByName || !f.getElementsByName(v).length
                );
              })),
              r.getById
                ? ((n.filter.ID = function (t) {
                    var e = t.replace(et, rt);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }),
                  (n.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                      var r = e.getElementById(t);
                      return r ? [r] : [];
                    }
                  }))
                : ((n.filter.ID = function (t) {
                    var e = t.replace(et, rt);
                    return function (t) {
                      var r =
                        void 0 !== t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return r && r.value === e;
                    };
                  }),
                  (n.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                      var r,
                        n,
                        o,
                        i = e.getElementById(t);
                      if (i) {
                        if ((r = i.getAttributeNode("id")) && r.value === t)
                          return [i];
                        for (o = e.getElementsByName(t), n = 0; (i = o[n++]); )
                          if ((r = i.getAttributeNode("id")) && r.value === t)
                            return [i];
                      }
                      return [];
                    }
                  })),
              (n.find.TAG = r.getElementsByTagName
                ? function (t, e) {
                    return void 0 !== e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : r.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function (t, e) {
                    var r,
                      n = [],
                      o = 0,
                      i = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (r = i[o++]); ) 1 === r.nodeType && n.push(r);
                      return n;
                    }
                    return i;
                  }),
              (n.find.CLASS =
                r.getElementsByClassName &&
                function (t, e) {
                  if (void 0 !== e.getElementsByClassName && g)
                    return e.getElementsByClassName(t);
                }),
              (h = []),
              (b = []),
              (r.qsa = J.test(f.querySelectorAll)) &&
                (mt(function (t) {
                  var e;
                  (u.appendChild(t).innerHTML =
                    "<a id='" +
                    v +
                    "'></a><select id='" +
                    v +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      b.push("[*^$]=" + R + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      b.push("\\[" + R + "*(?:value|" + q + ")"),
                    t.querySelectorAll("[id~=" + v + "-]").length ||
                      b.push("~="),
                    (e = f.createElement("input")).setAttribute("name", ""),
                    t.appendChild(e),
                    t.querySelectorAll("[name='']").length ||
                      b.push(
                        "\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"
                      ),
                    t.querySelectorAll(":checked").length || b.push(":checked"),
                    t.querySelectorAll("a#" + v + "+*").length ||
                      b.push(".#.+[+~]"),
                    t.querySelectorAll("\\\f"),
                    b.push("[\\r\\n\\f]");
                }),
                mt(function (t) {
                  t.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var e = f.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      b.push("name" + R + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length &&
                      b.push(":enabled", ":disabled"),
                    (u.appendChild(t).disabled = !0),
                    2 !== t.querySelectorAll(":disabled").length &&
                      b.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    b.push(",.*:");
                })),
              (r.matchesSelector = J.test(
                (x =
                  u.matches ||
                  u.webkitMatchesSelector ||
                  u.mozMatchesSelector ||
                  u.oMatchesSelector ||
                  u.msMatchesSelector)
              )) &&
                mt(function (t) {
                  (r.disconnectedMatch = x.call(t, "*")),
                    x.call(t, "[s!='']:x"),
                    h.push("!=", B);
                }),
              (b = b.length && new RegExp(b.join("|"))),
              (h = h.length && new RegExp(h.join("|"))),
              (e = J.test(u.compareDocumentPosition)),
              (w =
                e || J.test(u.contains)
                  ? function (t, e) {
                      var r = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                      return (
                        t === n ||
                        !(
                          !n ||
                          1 !== n.nodeType ||
                          !(r.contains
                            ? r.contains(n)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(n))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (j = e
                ? function (t, e) {
                    if (t === e) return (c = !0), 0;
                    var n =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (t.ownerDocument || t) == (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1) ||
                      (!r.sortDetached && e.compareDocumentPosition(t) === n)
                        ? t == f || (t.ownerDocument == y && w(y, t))
                          ? -1
                          : e == f || (e.ownerDocument == y && w(y, e))
                          ? 1
                          : m
                          ? N(m, t) - N(m, e)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (t, e) {
                    if (t === e) return (c = !0), 0;
                    var r,
                      n = 0,
                      o = t.parentNode,
                      i = e.parentNode,
                      a = [t],
                      l = [e];
                    if (!o || !i)
                      return t == f
                        ? -1
                        : e == f
                        ? 1
                        : o
                        ? -1
                        : i
                        ? 1
                        : m
                        ? N(m, t) - N(m, e)
                        : 0;
                    if (o === i) return pt(t, e);
                    for (r = t; (r = r.parentNode); ) a.unshift(r);
                    for (r = e; (r = r.parentNode); ) l.unshift(r);
                    for (; a[n] === l[n]; ) n++;
                    return n
                      ? pt(a[n], l[n])
                      : a[n] == y
                      ? -1
                      : l[n] == y
                      ? 1
                      : 0;
                  })),
            f
          );
        }),
        (lt.matches = function (t, e) {
          return lt(t, null, null, e);
        }),
        (lt.matchesSelector = function (t, e) {
          if (
            (p(t),
            r.matchesSelector &&
              g &&
              !D[e + " "] &&
              (!h || !h.test(e)) &&
              (!b || !b.test(e)))
          )
            try {
              var n = x.call(t, e);
              if (
                n ||
                r.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return n;
            } catch (t) {
              D(e, !0);
            }
          return 0 < lt(e, f, null, [t]).length;
        }),
        (lt.contains = function (t, e) {
          return (t.ownerDocument || t) != f && p(t), w(t, e);
        }),
        (lt.attr = function (t, e) {
          (t.ownerDocument || t) != f && p(t);
          var o = n.attrHandle[e.toLowerCase()],
            i =
              o && O.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
          return void 0 !== i
            ? i
            : r.attributes || !g
            ? t.getAttribute(e)
            : (i = t.getAttributeNode(e)) && i.specified
            ? i.value
            : null;
        }),
        (lt.escape = function (t) {
          return (t + "").replace(nt, ot);
        }),
        (lt.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (lt.uniqueSort = function (t) {
          var e,
            n = [],
            o = 0,
            i = 0;
          if (
            ((c = !r.detectDuplicates),
            (m = !r.sortStable && t.slice(0)),
            t.sort(j),
            c)
          ) {
            for (; (e = t[i++]); ) e === t[i] && (o = n.push(i));
            for (; o--; ) t.splice(n[o], 1);
          }
          return (m = null), t;
        }),
        (o = lt.getText = function (t) {
          var e,
            r = "",
            n = 0,
            i = t.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) r += o(t);
            } else if (3 === i || 4 === i) return t.nodeValue;
          } else for (; (e = t[n++]); ) r += o(e);
          return r;
        }),
        ((n = lt.selectors = {
          cacheLength: 50,
          createPseudo: dt,
          match: $,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(et, rt)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(et, rt)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || lt.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && lt.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                r = !t[6] && t[2];
              return $.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : r &&
                      Y.test(r) &&
                      (e = a(r, !0)) &&
                      (e = r.indexOf(")", r.length - e) - r.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = r.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(et, rt).toLowerCase();
              return "*" === t
                ? function () {
                    return !0;
                  }
                : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function (t) {
              var e = _[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) &&
                  _(t, function (t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        (void 0 !== t.getAttribute &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (t, e, r) {
              return function (n) {
                var o = lt.attr(n, t);
                return null == o
                  ? "!=" === e
                  : !e ||
                      ((o += ""),
                      "=" === e
                        ? o === r
                        : "!=" === e
                        ? o !== r
                        : "^=" === e
                        ? r && 0 === o.indexOf(r)
                        : "*=" === e
                        ? r && -1 < o.indexOf(r)
                        : "$=" === e
                        ? r && o.slice(-r.length) === r
                        : "~=" === e
                        ? -1 < (" " + o.replace(X, " ") + " ").indexOf(r)
                        : "|=" === e &&
                          (o === r || o.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (t, e, r, n, o) {
              var i = "nth" !== t.slice(0, 3),
                a = "last" !== t.slice(-4),
                l = "of-type" === e;
              return 1 === n && 0 === o
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (e, r, s) {
                    var d,
                      m,
                      c,
                      p,
                      f,
                      u,
                      g = i !== a ? "nextSibling" : "previousSibling",
                      b = e.parentNode,
                      h = l && e.nodeName.toLowerCase(),
                      x = !s && !l,
                      w = !1;
                    if (b) {
                      if (i) {
                        for (; g; ) {
                          for (p = e; (p = p[g]); )
                            if (
                              l
                                ? p.nodeName.toLowerCase() === h
                                : 1 === p.nodeType
                            )
                              return !1;
                          u = g = "only" === t && !u && "nextSibling";
                        }
                        return !0;
                      }
                      if (((u = [a ? b.firstChild : b.lastChild]), a && x)) {
                        for (
                          w =
                            (f =
                              (d =
                                (m =
                                  (c = (p = b)[v] || (p[v] = {}))[p.uniqueID] ||
                                  (c[p.uniqueID] = {}))[t] || [])[0] === k &&
                              d[1]) && d[2],
                            p = f && b.childNodes[f];
                          (p = (++f && p && p[g]) || (w = f = 0) || u.pop());

                        )
                          if (1 === p.nodeType && ++w && p === e) {
                            m[t] = [k, f, w];
                            break;
                          }
                      } else if (
                        (x &&
                          (w = f =
                            (d =
                              (m =
                                (c = (p = e)[v] || (p[v] = {}))[p.uniqueID] ||
                                (c[p.uniqueID] = {}))[t] || [])[0] === k &&
                            d[1]),
                        !1 === w)
                      )
                        for (
                          ;
                          (p = (++f && p && p[g]) || (w = f = 0) || u.pop()) &&
                          ((l
                            ? p.nodeName.toLowerCase() !== h
                            : 1 !== p.nodeType) ||
                            !++w ||
                            (x &&
                              ((m =
                                (c = p[v] || (p[v] = {}))[p.uniqueID] ||
                                (c[p.uniqueID] = {}))[t] = [k, w]),
                            p !== e));

                        );
                      return (w -= o) === n || (w % n == 0 && 0 <= w / n);
                    }
                  };
            },
            PSEUDO: function (t, e) {
              var r,
                o =
                  n.pseudos[t] ||
                  n.setFilters[t.toLowerCase()] ||
                  lt.error("unsupported pseudo: " + t);
              return o[v]
                ? o(e)
                : 1 < o.length
                ? ((r = [t, t, "", e]),
                  n.setFilters.hasOwnProperty(t.toLowerCase())
                    ? dt(function (t, r) {
                        for (var n, i = o(t, e), a = i.length; a--; )
                          t[(n = N(t, i[a]))] = !(r[n] = i[a]);
                      })
                    : function (t) {
                        return o(t, 0, r);
                      })
                : o;
            },
          },
          pseudos: {
            not: dt(function (t) {
              var e = [],
                r = [],
                n = l(t.replace(H, "$1"));
              return n[v]
                ? dt(function (t, e, r, o) {
                    for (var i, a = n(t, null, o, []), l = t.length; l--; )
                      (i = a[l]) && (t[l] = !(e[l] = i));
                  })
                : function (t, o, i) {
                    return (
                      (e[0] = t), n(e, null, i, r), (e[0] = null), !r.pop()
                    );
                  };
            }),
            has: dt(function (t) {
              return function (e) {
                return 0 < lt(t, e).length;
              };
            }),
            contains: dt(function (t) {
              return (
                (t = t.replace(et, rt)),
                function (e) {
                  return -1 < (e.textContent || o(e)).indexOf(t);
                }
              );
            }),
            lang: dt(function (t) {
              return (
                F.test(t || "") || lt.error("unsupported lang: " + t),
                (t = t.replace(et, rt).toLowerCase()),
                function (e) {
                  var r;
                  do {
                    if (
                      (r = g
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (r = r.toLowerCase()) === t || 0 === r.indexOf(t + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var r = t.location && t.location.hash;
              return r && r.slice(1) === e.id;
            },
            root: function (t) {
              return t === u;
            },
            focus: function (t) {
              return (
                t === f.activeElement &&
                (!f.hasFocus || f.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: gt(!1),
            disabled: gt(!0),
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function (t) {
              return !n.pseudos.empty(t);
            },
            header: function (t) {
              return G.test(t.nodeName);
            },
            input: function (t) {
              return V.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function (t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: bt(function () {
              return [0];
            }),
            last: bt(function (t, e) {
              return [e - 1];
            }),
            eq: bt(function (t, e, r) {
              return [r < 0 ? r + e : r];
            }),
            even: bt(function (t, e) {
              for (var r = 0; r < e; r += 2) t.push(r);
              return t;
            }),
            odd: bt(function (t, e) {
              for (var r = 1; r < e; r += 2) t.push(r);
              return t;
            }),
            lt: bt(function (t, e, r) {
              for (var n = r < 0 ? r + e : e < r ? e : r; 0 <= --n; ) t.push(n);
              return t;
            }),
            gt: bt(function (t, e, r) {
              for (var n = r < 0 ? r + e : r; ++n < e; ) t.push(n);
              return t;
            }),
          },
        }).pseudos.nth = n.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          n.pseudos[e] = ft(e);
        for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ut(e);
        function xt() {}
        function wt(t) {
          for (var e = 0, r = t.length, n = ""; e < r; e++) n += t[e].value;
          return n;
        }
        function vt(t, e, r) {
          var n = e.dir,
            o = e.next,
            i = o || n,
            a = r && "parentNode" === i,
            l = T++;
          return e.first
            ? function (e, r, o) {
                for (; (e = e[n]); )
                  if (1 === e.nodeType || a) return t(e, r, o);
                return !1;
              }
            : function (e, r, s) {
                var d,
                  m,
                  c,
                  p = [k, l];
                if (s) {
                  for (; (e = e[n]); )
                    if ((1 === e.nodeType || a) && t(e, r, s)) return !0;
                } else
                  for (; (e = e[n]); )
                    if (1 === e.nodeType || a)
                      if (
                        ((m =
                          (c = e[v] || (e[v] = {}))[e.uniqueID] ||
                          (c[e.uniqueID] = {})),
                        o && o === e.nodeName.toLowerCase())
                      )
                        e = e[n] || e;
                      else {
                        if ((d = m[i]) && d[0] === k && d[1] === l)
                          return (p[2] = d[2]);
                        if (((m[i] = p)[2] = t(e, r, s))) return !0;
                      }
                return !1;
              };
        }
        function yt(t) {
          return 1 < t.length
            ? function (e, r, n) {
                for (var o = t.length; o--; ) if (!t[o](e, r, n)) return !1;
                return !0;
              }
            : t[0];
        }
        function kt(t, e, r, n, o) {
          for (var i, a = [], l = 0, s = t.length, d = null != e; l < s; l++)
            (i = t[l]) && ((r && !r(i, n, o)) || (a.push(i), d && e.push(l)));
          return a;
        }
        function Tt(t, e, r, n, o, i) {
          return (
            n && !n[v] && (n = Tt(n)),
            o && !o[v] && (o = Tt(o, i)),
            dt(function (i, a, l, s) {
              var d,
                m,
                c,
                p = [],
                f = [],
                u = a.length,
                g =
                  i ||
                  (function (t, e, r) {
                    for (var n = 0, o = e.length; n < o; n++) lt(t, e[n], r);
                    return r;
                  })(e || "*", l.nodeType ? [l] : l, []),
                b = !t || (!i && e) ? g : kt(g, p, t, l, s),
                h = r ? (o || (i ? t : u || n) ? [] : a) : b;
              if ((r && r(b, h, l, s), n))
                for (d = kt(h, f), n(d, [], l, s), m = d.length; m--; )
                  (c = d[m]) && (h[f[m]] = !(b[f[m]] = c));
              if (i) {
                if (o || t) {
                  if (o) {
                    for (d = [], m = h.length; m--; )
                      (c = h[m]) && d.push((b[m] = c));
                    o(null, (h = []), d, s);
                  }
                  for (m = h.length; m--; )
                    (c = h[m]) &&
                      -1 < (d = o ? N(i, c) : p[m]) &&
                      (i[d] = !(a[d] = c));
                }
              } else (h = kt(h === a ? h.splice(u, h.length) : h)), o ? o(null, a, h, s) : L.apply(a, h);
            })
          );
        }
        function _t(t) {
          for (
            var e,
              r,
              o,
              i = t.length,
              a = n.relative[t[0].type],
              l = a || n.relative[" "],
              s = a ? 1 : 0,
              m = vt(
                function (t) {
                  return t === e;
                },
                l,
                !0
              ),
              c = vt(
                function (t) {
                  return -1 < N(e, t);
                },
                l,
                !0
              ),
              p = [
                function (t, r, n) {
                  var o =
                    (!a && (n || r !== d)) ||
                    ((e = r).nodeType ? m(t, r, n) : c(t, r, n));
                  return (e = null), o;
                },
              ];
            s < i;
            s++
          )
            if ((r = n.relative[t[s].type])) p = [vt(yt(p), r)];
            else {
              if ((r = n.filter[t[s].type].apply(null, t[s].matches))[v]) {
                for (o = ++s; o < i && !n.relative[t[o].type]; o++);
                return Tt(
                  1 < s && yt(p),
                  1 < s &&
                    wt(
                      t
                        .slice(0, s - 1)
                        .concat({ value: " " === t[s - 2].type ? "*" : "" })
                    ).replace(H, "$1"),
                  r,
                  s < o && _t(t.slice(s, o)),
                  o < i && _t((t = t.slice(o))),
                  o < i && wt(t)
                );
              }
              p.push(r);
            }
          return yt(p);
        }
        return (
          (xt.prototype = n.filters = n.pseudos),
          (n.setFilters = new xt()),
          (a = lt.tokenize = function (t, e) {
            var r,
              o,
              i,
              a,
              l,
              s,
              d,
              m = C[t + " "];
            if (m) return e ? 0 : m.slice(0);
            for (l = t, s = [], d = n.preFilter; l; ) {
              for (a in ((r && !(o = U.exec(l))) ||
                (o && (l = l.slice(o[0].length) || l), s.push((i = []))),
              (r = !1),
              (o = Z.exec(l)) &&
                ((r = o.shift()),
                i.push({ value: r, type: o[0].replace(H, " ") }),
                (l = l.slice(r.length))),
              n.filter))
                !(o = $[a].exec(l)) ||
                  (d[a] && !(o = d[a](o))) ||
                  ((r = o.shift()),
                  i.push({ value: r, type: a, matches: o }),
                  (l = l.slice(r.length)));
              if (!r) break;
            }
            return e ? l.length : l ? lt.error(t) : C(t, s).slice(0);
          }),
          (l = lt.compile = function (t, e) {
            var r,
              o,
              i,
              l,
              s,
              m,
              c = [],
              u = [],
              b = E[t + " "];
            if (!b) {
              for (e || (e = a(t)), r = e.length; r--; )
                (b = _t(e[r]))[v] ? c.push(b) : u.push(b);
              (b = E(
                t,
                ((o = u),
                (l = 0 < (i = c).length),
                (s = 0 < o.length),
                (m = function (t, e, r, a, m) {
                  var c,
                    u,
                    b,
                    h = 0,
                    x = "0",
                    w = t && [],
                    v = [],
                    y = d,
                    T = t || (s && n.find.TAG("*", m)),
                    _ = (k += null == y ? 1 : Math.random() || 0.1),
                    C = T.length;
                  for (
                    m && (d = e == f || e || m);
                    x !== C && null != (c = T[x]);
                    x++
                  ) {
                    if (s && c) {
                      for (
                        u = 0, e || c.ownerDocument == f || (p(c), (r = !g));
                        (b = o[u++]);

                      )
                        if (b(c, e || f, r)) {
                          a.push(c);
                          break;
                        }
                      m && (k = _);
                    }
                    l && ((c = !b && c) && h--, t && w.push(c));
                  }
                  if (((h += x), l && x !== h)) {
                    for (u = 0; (b = i[u++]); ) b(w, v, e, r);
                    if (t) {
                      if (0 < h)
                        for (; x--; ) w[x] || v[x] || (v[x] = A.call(a));
                      v = kt(v);
                    }
                    L.apply(a, v),
                      m &&
                        !t &&
                        0 < v.length &&
                        1 < h + i.length &&
                        lt.uniqueSort(a);
                  }
                  return m && ((k = _), (d = y)), w;
                }),
                l ? dt(m) : m)
              )).selector = t;
            }
            return b;
          }),
          (s = lt.select = function (t, e, r, o) {
            var i,
              s,
              d,
              m,
              c,
              p = "function" == typeof t && t,
              f = !o && a((t = p.selector || t));
            if (((r = r || []), 1 === f.length)) {
              if (
                2 < (s = f[0] = f[0].slice(0)).length &&
                "ID" === (d = s[0]).type &&
                9 === e.nodeType &&
                g &&
                n.relative[s[1].type]
              ) {
                if (
                  !(e = (n.find.ID(d.matches[0].replace(et, rt), e) || [])[0])
                )
                  return r;
                p && (e = e.parentNode), (t = t.slice(s.shift().value.length));
              }
              for (
                i = $.needsContext.test(t) ? 0 : s.length;
                i-- && ((d = s[i]), !n.relative[(m = d.type)]);

              )
                if (
                  (c = n.find[m]) &&
                  (o = c(
                    d.matches[0].replace(et, rt),
                    (tt.test(s[0].type) && ht(e.parentNode)) || e
                  ))
                ) {
                  if ((s.splice(i, 1), !(t = o.length && wt(s))))
                    return L.apply(r, o), r;
                  break;
                }
            }
            return (
              (p || l(t, f))(
                o,
                e,
                !g,
                r,
                !e || (tt.test(t) && ht(e.parentNode)) || e
              ),
              r
            );
          }),
          (r.sortStable = v.split("").sort(j).join("") === v),
          (r.detectDuplicates = !!c),
          p(),
          (r.sortDetached = mt(function (t) {
            return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
          })),
          mt(function (t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              "#" === t.firstChild.getAttribute("href")
            );
          }) ||
            ct("type|href|height|width", function (t, e, r) {
              if (!r)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
          (r.attributes &&
            mt(function (t) {
              return (
                (t.innerHTML = "<input/>"),
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
              );
            })) ||
            ct("value", function (t, e, r) {
              if (!r && "input" === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
          mt(function (t) {
            return null == t.getAttribute("disabled");
          }) ||
            ct(q, function (t, e, r) {
              var n;
              if (!r)
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (n = t.getAttributeNode(e)) && n.specified
                  ? n.value
                  : null;
            }),
          lt
        );
      })(r);
      (_.find = E),
        (_.expr = E.selectors),
        (_.expr[":"] = _.expr.pseudos),
        (_.uniqueSort = _.unique = E.uniqueSort),
        (_.text = E.getText),
        (_.isXMLDoc = E.isXML),
        (_.contains = E.contains),
        (_.escapeSelector = E.escape);
      var D = function (t, e, r) {
          for (var n = [], o = void 0 !== r; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (o && _(t).is(r)) break;
              n.push(t);
            }
          return n;
        },
        j = function (t, e) {
          for (var r = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && r.push(t);
          return r;
        },
        O = _.expr.match.needsContext;
      function S(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function z(t, e, r) {
        return h(e)
          ? _.grep(t, function (t, n) {
              return !!e.call(t, n, t) !== r;
            })
          : e.nodeType
          ? _.grep(t, function (t) {
              return (t === e) !== r;
            })
          : "string" != typeof e
          ? _.grep(t, function (t) {
              return -1 < m.call(e, t) !== r;
            })
          : _.filter(e, t, r);
      }
      (_.filter = function (t, e, r) {
        var n = e[0];
        return (
          r && (t = ":not(" + t + ")"),
          1 === e.length && 1 === n.nodeType
            ? _.find.matchesSelector(n, t)
              ? [n]
              : []
            : _.find.matches(
                t,
                _.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        _.fn.extend({
          find: function (t) {
            var e,
              r,
              n = this.length,
              o = this;
            if ("string" != typeof t)
              return this.pushStack(
                _(t).filter(function () {
                  for (e = 0; e < n; e++) if (_.contains(o[e], this)) return !0;
                })
              );
            for (r = this.pushStack([]), e = 0; e < n; e++) _.find(t, o[e], r);
            return 1 < n ? _.uniqueSort(r) : r;
          },
          filter: function (t) {
            return this.pushStack(z(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(z(this, t || [], !0));
          },
          is: function (t) {
            return !!z(
              this,
              "string" == typeof t && O.test(t) ? _(t) : t || [],
              !1
            ).length;
          },
        });
      var L,
        I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((_.fn.init = function (t, e, r) {
        var n, o;
        if (!t) return this;
        if (((r = r || L), "string" == typeof t)) {
          if (
            !(n =
              "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length
                ? [null, t, null]
                : I.exec(t)) ||
            (!n[1] && e)
          )
            return !e || e.jquery
              ? (e || r).find(t)
              : this.constructor(e).find(t);
          if (n[1]) {
            if (
              ((e = e instanceof _ ? e[0] : e),
              _.merge(
                this,
                _.parseHTML(
                  n[1],
                  e && e.nodeType ? e.ownerDocument || e : w,
                  !0
                )
              ),
              A.test(n[1]) && _.isPlainObject(e))
            )
              for (n in e) h(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this;
          }
          return (
            (o = w.getElementById(n[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : h(t)
          ? void 0 !== r.ready
            ? r.ready(t)
            : t(_)
          : _.makeArray(t, this);
      }).prototype = _.fn),
        (L = _(w));
      var N = /^(?:parents|prev(?:Until|All))/,
        q = { children: !0, contents: !0, next: !0, prev: !0 };
      function R(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      _.fn.extend({
        has: function (t) {
          var e = _(t, this),
            r = e.length;
          return this.filter(function () {
            for (var t = 0; t < r; t++) if (_.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var r,
            n = 0,
            o = this.length,
            i = [],
            a = "string" != typeof t && _(t);
          if (!O.test(t))
            for (; n < o; n++)
              for (r = this[n]; r && r !== e; r = r.parentNode)
                if (
                  r.nodeType < 11 &&
                  (a
                    ? -1 < a.index(r)
                    : 1 === r.nodeType && _.find.matchesSelector(r, t))
                ) {
                  i.push(r);
                  break;
                }
          return this.pushStack(1 < i.length ? _.uniqueSort(i) : i);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? m.call(_(t), this[0])
              : m.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        _.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return D(t, "parentNode");
            },
            parentsUntil: function (t, e, r) {
              return D(t, "parentNode", r);
            },
            next: function (t) {
              return R(t, "nextSibling");
            },
            prev: function (t) {
              return R(t, "previousSibling");
            },
            nextAll: function (t) {
              return D(t, "nextSibling");
            },
            prevAll: function (t) {
              return D(t, "previousSibling");
            },
            nextUntil: function (t, e, r) {
              return D(t, "nextSibling", r);
            },
            prevUntil: function (t, e, r) {
              return D(t, "previousSibling", r);
            },
            siblings: function (t) {
              return j((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return j(t.firstChild);
            },
            contents: function (t) {
              return null != t.contentDocument && a(t.contentDocument)
                ? t.contentDocument
                : (S(t, "template") && (t = t.content || t),
                  _.merge([], t.childNodes));
            },
          },
          function (t, e) {
            _.fn[t] = function (r, n) {
              var o = _.map(this, e, r);
              return (
                "Until" !== t.slice(-5) && (n = r),
                n && "string" == typeof n && (o = _.filter(n, o)),
                1 < this.length &&
                  (q[t] || _.uniqueSort(o), N.test(t) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var M = /[^\x20\t\r\n\f]+/g;
      function P(t) {
        return t;
      }
      function B(t) {
        throw t;
      }
      function X(t, e, r, n) {
        var o;
        try {
          t && h((o = t.promise))
            ? o.call(t).done(e).fail(r)
            : t && h((o = t.then))
            ? o.call(t, e, r)
            : e.apply(void 0, [t].slice(n));
        } catch (t) {
          r.apply(void 0, [t]);
        }
      }
      (_.Callbacks = function (t) {
        var e, r;
        t =
          "string" == typeof t
            ? ((e = t),
              (r = {}),
              _.each(e.match(M) || [], function (t, e) {
                r[e] = !0;
              }),
              r)
            : _.extend({}, t);
        var n,
          o,
          i,
          a,
          l = [],
          s = [],
          d = -1,
          m = function () {
            for (a = a || t.once, i = n = !0; s.length; d = -1)
              for (o = s.shift(); ++d < l.length; )
                !1 === l[d].apply(o[0], o[1]) &&
                  t.stopOnFalse &&
                  ((d = l.length), (o = !1));
            t.memory || (o = !1), (n = !1), a && (l = o ? [] : "");
          },
          c = {
            add: function () {
              return (
                l &&
                  (o && !n && ((d = l.length - 1), s.push(o)),
                  (function e(r) {
                    _.each(r, function (r, n) {
                      h(n)
                        ? (t.unique && c.has(n)) || l.push(n)
                        : n && n.length && "string" !== k(n) && e(n);
                    });
                  })(arguments),
                  o && !n && m()),
                this
              );
            },
            remove: function () {
              return (
                _.each(arguments, function (t, e) {
                  for (var r; -1 < (r = _.inArray(e, l, r)); )
                    l.splice(r, 1), r <= d && d--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? -1 < _.inArray(t, l) : 0 < l.length;
            },
            empty: function () {
              return l && (l = []), this;
            },
            disable: function () {
              return (a = s = []), (l = o = ""), this;
            },
            disabled: function () {
              return !l;
            },
            lock: function () {
              return (a = s = []), o || n || (l = o = ""), this;
            },
            locked: function () {
              return !!a;
            },
            fireWith: function (t, e) {
              return (
                a ||
                  ((e = [t, (e = e || []).slice ? e.slice() : e]),
                  s.push(e),
                  n || m()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        _.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  _.Callbacks("memory"),
                  _.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  _.Callbacks("once memory"),
                  _.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  _.Callbacks("once memory"),
                  _.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              n = "pending",
              o = {
                state: function () {
                  return n;
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return o.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return _.Deferred(function (r) {
                    _.each(e, function (e, n) {
                      var o = h(t[n[4]]) && t[n[4]];
                      i[n[1]](function () {
                        var t = o && o.apply(this, arguments);
                        t && h(t.promise)
                          ? t
                              .promise()
                              .progress(r.notify)
                              .done(r.resolve)
                              .fail(r.reject)
                          : r[n[0] + "With"](this, o ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function (t, n, o) {
                  var i = 0;
                  function a(t, e, n, o) {
                    return function () {
                      var l = this,
                        s = arguments,
                        d = function () {
                          var r, d;
                          if (!(t < i)) {
                            if ((r = n.apply(l, s)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (d =
                              r &&
                              ("object" == typeof r ||
                                "function" == typeof r) &&
                              r.then),
                              h(d)
                                ? o
                                  ? d.call(r, a(i, e, P, o), a(i, e, B, o))
                                  : (i++,
                                    d.call(
                                      r,
                                      a(i, e, P, o),
                                      a(i, e, B, o),
                                      a(i, e, P, e.notifyWith)
                                    ))
                                : (n !== P && ((l = void 0), (s = [r])),
                                  (o || e.resolveWith)(l, s));
                          }
                        },
                        m = o
                          ? d
                          : function () {
                              try {
                                d();
                              } catch (r) {
                                _.Deferred.exceptionHook &&
                                  _.Deferred.exceptionHook(r, m.stackTrace),
                                  i <= t + 1 &&
                                    (n !== B && ((l = void 0), (s = [r])),
                                    e.rejectWith(l, s));
                              }
                            };
                      t
                        ? m()
                        : (_.Deferred.getStackHook &&
                            (m.stackTrace = _.Deferred.getStackHook()),
                          r.setTimeout(m));
                    };
                  }
                  return _.Deferred(function (r) {
                    e[0][3].add(a(0, r, h(o) ? o : P, r.notifyWith)),
                      e[1][3].add(a(0, r, h(t) ? t : P)),
                      e[2][3].add(a(0, r, h(n) ? n : B));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? _.extend(t, o) : o;
                },
              },
              i = {};
            return (
              _.each(e, function (t, r) {
                var a = r[2],
                  l = r[5];
                (o[r[1]] = a.add),
                  l &&
                    a.add(
                      function () {
                        n = l;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  a.add(r[3].fire),
                  (i[r[0]] = function () {
                    return (
                      i[r[0] + "With"](this === i ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (i[r[0] + "With"] = a.fireWith);
              }),
              o.promise(i),
              t && t.call(i, i),
              i
            );
          },
          when: function (t) {
            var e = arguments.length,
              r = e,
              n = Array(r),
              o = l.call(arguments),
              i = _.Deferred(),
              a = function (t) {
                return function (r) {
                  (n[t] = this),
                    (o[t] = 1 < arguments.length ? l.call(arguments) : r),
                    --e || i.resolveWith(n, o);
                };
              };
            if (
              e <= 1 &&
              (X(t, i.done(a(r)).resolve, i.reject, !e),
              "pending" === i.state() || h(o[r] && o[r].then))
            )
              return i.then();
            for (; r--; ) X(o[r], a(r), i.reject);
            return i.promise();
          },
        });
      var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (_.Deferred.exceptionHook = function (t, e) {
        r.console &&
          r.console.warn &&
          t &&
          H.test(t.name) &&
          r.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (_.readyException = function (t) {
          r.setTimeout(function () {
            throw t;
          });
        });
      var U = _.Deferred();
      function Z() {
        w.removeEventListener("DOMContentLoaded", Z),
          r.removeEventListener("load", Z),
          _.ready();
      }
      (_.fn.ready = function (t) {
        return (
          U.then(t).catch(function (t) {
            _.readyException(t);
          }),
          this
        );
      }),
        _.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --_.readyWait : _.isReady) ||
              ((_.isReady = !0) !== t && 0 < --_.readyWait) ||
              U.resolveWith(w, [_]);
          },
        }),
        (_.ready.then = U.then),
        "complete" === w.readyState ||
        ("loading" !== w.readyState && !w.documentElement.doScroll)
          ? r.setTimeout(_.ready)
          : (w.addEventListener("DOMContentLoaded", Z),
            r.addEventListener("load", Z));
      var W = function (t, e, r, n, o, i, a) {
          var l = 0,
            s = t.length,
            d = null == r;
          if ("object" === k(r))
            for (l in ((o = !0), r)) W(t, e, l, r[l], !0, i, a);
          else if (
            void 0 !== n &&
            ((o = !0),
            h(n) || (a = !0),
            d &&
              (a
                ? (e.call(t, n), (e = null))
                : ((d = e),
                  (e = function (t, e, r) {
                    return d.call(_(t), r);
                  }))),
            e)
          )
            for (; l < s; l++) e(t[l], r, a ? n : n.call(t[l], l, e(t[l], r)));
          return o ? t : d ? e.call(t) : s ? e(t[0], r) : i;
        },
        Y = /^-ms-/,
        F = /-([a-z])/g;
      function $(t, e) {
        return e.toUpperCase();
      }
      function K(t) {
        return t.replace(Y, "ms-").replace(F, $);
      }
      var V = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function G() {
        this.expando = _.expando + G.uid++;
      }
      (G.uid = 1),
        (G.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = Object.create(null)),
                V(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, r) {
            var n,
              o = this.cache(t);
            if ("string" == typeof e) o[K(e)] = r;
            else for (n in e) o[K(n)] = e[n];
            return o;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][K(e)];
          },
          access: function (t, e, r) {
            return void 0 === e || (e && "string" == typeof e && void 0 === r)
              ? this.get(t, e)
              : (this.set(t, e, r), void 0 !== r ? r : e);
          },
          remove: function (t, e) {
            var r,
              n = t[this.expando];
            if (void 0 !== n) {
              if (void 0 !== e) {
                r = (e = Array.isArray(e)
                  ? e.map(K)
                  : (e = K(e)) in n
                  ? [e]
                  : e.match(M) || []).length;
                for (; r--; ) delete n[e[r]];
              }
              (void 0 === e || _.isEmptyObject(n)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !_.isEmptyObject(e);
          },
        });
      var J = new G(),
        Q = new G(),
        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        et = /[A-Z]/g;
      function rt(t, e, r) {
        var n, o;
        if (void 0 === r && 1 === t.nodeType)
          if (
            ((n = "data-" + e.replace(et, "-$&").toLowerCase()),
            "string" == typeof (r = t.getAttribute(n)))
          ) {
            try {
              r =
                "true" === (o = r) ||
                ("false" !== o &&
                  ("null" === o
                    ? null
                    : o === +o + ""
                    ? +o
                    : tt.test(o)
                    ? JSON.parse(o)
                    : o));
            } catch (t) {}
            Q.set(t, e, r);
          } else r = void 0;
        return r;
      }
      _.extend({
        hasData: function (t) {
          return Q.hasData(t) || J.hasData(t);
        },
        data: function (t, e, r) {
          return Q.access(t, e, r);
        },
        removeData: function (t, e) {
          Q.remove(t, e);
        },
        _data: function (t, e, r) {
          return J.access(t, e, r);
        },
        _removeData: function (t, e) {
          J.remove(t, e);
        },
      }),
        _.fn.extend({
          data: function (t, e) {
            var r,
              n,
              o,
              i = this[0],
              a = i && i.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((o = Q.get(i)), 1 === i.nodeType && !J.get(i, "hasDataAttrs"))
              ) {
                for (r = a.length; r--; )
                  a[r] &&
                    0 === (n = a[r].name).indexOf("data-") &&
                    ((n = K(n.slice(5))), rt(i, n, o[n]));
                J.set(i, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof t
              ? this.each(function () {
                  Q.set(this, t);
                })
              : W(
                  this,
                  function (e) {
                    var r;
                    if (i && void 0 === e)
                      return void 0 !== (r = Q.get(i, t)) ||
                        void 0 !== (r = rt(i, t))
                        ? r
                        : void 0;
                    this.each(function () {
                      Q.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  1 < arguments.length,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              Q.remove(this, t);
            });
          },
        }),
        _.extend({
          queue: function (t, e, r) {
            var n;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (n = J.get(t, e)),
                r &&
                  (!n || Array.isArray(r)
                    ? (n = J.access(t, e, _.makeArray(r)))
                    : n.push(r)),
                n || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var r = _.queue(t, e),
              n = r.length,
              o = r.shift(),
              i = _._queueHooks(t, e);
            "inprogress" === o && ((o = r.shift()), n--),
              o &&
                ("fx" === e && r.unshift("inprogress"),
                delete i.stop,
                o.call(
                  t,
                  function () {
                    _.dequeue(t, e);
                  },
                  i
                )),
              !n && i && i.empty.fire();
          },
          _queueHooks: function (t, e) {
            var r = e + "queueHooks";
            return (
              J.get(t, r) ||
              J.access(t, r, {
                empty: _.Callbacks("once memory").add(function () {
                  J.remove(t, [e + "queue", r]);
                }),
              })
            );
          },
        }),
        _.fn.extend({
          queue: function (t, e) {
            var r = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), r--),
              arguments.length < r
                ? _.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var r = _.queue(this, t, e);
                    _._queueHooks(this, t),
                      "fx" === t && "inprogress" !== r[0] && _.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              _.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var r,
              n = 1,
              o = _.Deferred(),
              i = this,
              a = this.length,
              l = function () {
                --n || o.resolveWith(i, [i]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              a--;

            )
              (r = J.get(i[a], t + "queueHooks")) &&
                r.empty &&
                (n++, r.empty.add(l));
            return l(), o.promise(e);
          },
        });
      var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ot = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        at = w.documentElement,
        lt = function (t) {
          return _.contains(t.ownerDocument, t);
        },
        st = { composed: !0 };
      at.getRootNode &&
        (lt = function (t) {
          return (
            _.contains(t.ownerDocument, t) ||
            t.getRootNode(st) === t.ownerDocument
          );
        });
      var dt = function (t, e) {
        return (
          "none" === (t = e || t).style.display ||
          ("" === t.style.display && lt(t) && "none" === _.css(t, "display"))
        );
      };
      function mt(t, e, r, n) {
        var o,
          i,
          a = 20,
          l = n
            ? function () {
                return n.cur();
              }
            : function () {
                return _.css(t, e, "");
              },
          s = l(),
          d = (r && r[3]) || (_.cssNumber[e] ? "" : "px"),
          m =
            t.nodeType &&
            (_.cssNumber[e] || ("px" !== d && +s)) &&
            ot.exec(_.css(t, e));
        if (m && m[3] !== d) {
          for (s /= 2, d = d || m[3], m = +s || 1; a--; )
            _.style(t, e, m + d),
              (1 - i) * (1 - (i = l() / s || 0.5)) <= 0 && (a = 0),
              (m /= i);
          (m *= 2), _.style(t, e, m + d), (r = r || []);
        }
        return (
          r &&
            ((m = +m || +s || 0),
            (o = r[1] ? m + (r[1] + 1) * r[2] : +r[2]),
            n && ((n.unit = d), (n.start = m), (n.end = o))),
          o
        );
      }
      var ct = {};
      function pt(t, e) {
        for (var r, n, o, i, a, l, s, d = [], m = 0, c = t.length; m < c; m++)
          (n = t[m]).style &&
            ((r = n.style.display),
            e
              ? ("none" === r &&
                  ((d[m] = J.get(n, "display") || null),
                  d[m] || (n.style.display = "")),
                "" === n.style.display &&
                  dt(n) &&
                  (d[m] =
                    ((s = a = i = void 0),
                    (a = (o = n).ownerDocument),
                    (l = o.nodeName),
                    (s = ct[l]) ||
                      ((i = a.body.appendChild(a.createElement(l))),
                      (s = _.css(i, "display")),
                      i.parentNode.removeChild(i),
                      "none" === s && (s = "block"),
                      (ct[l] = s)))))
              : "none" !== r && ((d[m] = "none"), J.set(n, "display", r)));
        for (m = 0; m < c; m++) null != d[m] && (t[m].style.display = d[m]);
        return t;
      }
      _.fn.extend({
        show: function () {
          return pt(this, !0);
        },
        hide: function () {
          return pt(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                dt(this) ? _(this).show() : _(this).hide();
              });
        },
      });
      var ft,
        ut,
        gt = /^(?:checkbox|radio)$/i,
        bt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ht = /^$|^module$|\/(?:java|ecma)script/i;
      (ft = w.createDocumentFragment().appendChild(w.createElement("div"))),
        (ut = w.createElement("input")).setAttribute("type", "radio"),
        ut.setAttribute("checked", "checked"),
        ut.setAttribute("name", "t"),
        ft.appendChild(ut),
        (b.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ft.innerHTML = "<textarea>x</textarea>"),
        (b.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue),
        (ft.innerHTML = "<option></option>"),
        (b.option = !!ft.lastChild);
      var xt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function wt(t, e) {
        var r;
        return (
          (r =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && S(t, e)) ? _.merge([t], r) : r
        );
      }
      function vt(t, e) {
        for (var r = 0, n = t.length; r < n; r++)
          J.set(t[r], "globalEval", !e || J.get(e[r], "globalEval"));
      }
      (xt.tbody = xt.tfoot = xt.colgroup = xt.caption = xt.thead),
        (xt.th = xt.td),
        b.option ||
          (xt.optgroup = xt.option = [
            1,
            "<select multiple='multiple'>",
            "</select>",
          ]);
      var yt = /<|&#?\w+;/;
      function kt(t, e, r, n, o) {
        for (
          var i,
            a,
            l,
            s,
            d,
            m,
            c = e.createDocumentFragment(),
            p = [],
            f = 0,
            u = t.length;
          f < u;
          f++
        )
          if ((i = t[f]) || 0 === i)
            if ("object" === k(i)) _.merge(p, i.nodeType ? [i] : i);
            else if (yt.test(i)) {
              for (
                a = a || c.appendChild(e.createElement("div")),
                  l = (bt.exec(i) || ["", ""])[1].toLowerCase(),
                  s = xt[l] || xt._default,
                  a.innerHTML = s[1] + _.htmlPrefilter(i) + s[2],
                  m = s[0];
                m--;

              )
                a = a.lastChild;
              _.merge(p, a.childNodes), ((a = c.firstChild).textContent = "");
            } else p.push(e.createTextNode(i));
        for (c.textContent = "", f = 0; (i = p[f++]); )
          if (n && -1 < _.inArray(i, n)) o && o.push(i);
          else if (
            ((d = lt(i)), (a = wt(c.appendChild(i), "script")), d && vt(a), r)
          )
            for (m = 0; (i = a[m++]); ) ht.test(i.type || "") && r.push(i);
        return c;
      }
      var Tt = /^key/,
        _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ct = /^([^.]*)(?:\.(.+)|)/;
      function Et() {
        return !0;
      }
      function Dt() {
        return !1;
      }
      function jt(t, e) {
        return (
          (t ===
            (function () {
              try {
                return w.activeElement;
              } catch (t) {}
            })()) ==
          ("focus" === e)
        );
      }
      function Ot(t, e, r, n, o, i) {
        var a, l;
        if ("object" == typeof e) {
          for (l in ("string" != typeof r && ((n = n || r), (r = void 0)), e))
            Ot(t, l, r, n, e[l], i);
          return t;
        }
        if (
          (null == n && null == o
            ? ((o = r), (n = r = void 0))
            : null == o &&
              ("string" == typeof r
                ? ((o = n), (n = void 0))
                : ((o = n), (n = r), (r = void 0))),
          !1 === o)
        )
          o = Dt;
        else if (!o) return t;
        return (
          1 === i &&
            ((a = o),
            ((o = function (t) {
              return _().off(t), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = _.guid++))),
          t.each(function () {
            _.event.add(this, e, o, n, r);
          })
        );
      }
      function St(t, e, r) {
        r
          ? (J.set(t, e, !1),
            _.event.add(t, e, {
              namespace: !1,
              handler: function (t) {
                var n,
                  o,
                  i = J.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                  if (i.length)
                    (_.event.special[e] || {}).delegateType &&
                      t.stopPropagation();
                  else if (
                    ((i = l.call(arguments)),
                    J.set(this, e, i),
                    (n = r(this, e)),
                    this[e](),
                    i !== (o = J.get(this, e)) || n
                      ? J.set(this, e, !1)
                      : (o = {}),
                    i !== o)
                  )
                    return (
                      t.stopImmediatePropagation(), t.preventDefault(), o.value
                    );
                } else
                  i.length &&
                    (J.set(this, e, {
                      value: _.event.trigger(
                        _.extend(i[0], _.Event.prototype),
                        i.slice(1),
                        this
                      ),
                    }),
                    t.stopImmediatePropagation());
              },
            }))
          : void 0 === J.get(t, e) && _.event.add(t, e, Et);
      }
      (_.event = {
        global: {},
        add: function (t, e, r, n, o) {
          var i,
            a,
            l,
            s,
            d,
            m,
            c,
            p,
            f,
            u,
            g,
            b = J.get(t);
          if (V(t))
            for (
              r.handler && ((r = (i = r).handler), (o = i.selector)),
                o && _.find.matchesSelector(at, o),
                r.guid || (r.guid = _.guid++),
                (s = b.events) || (s = b.events = Object.create(null)),
                (a = b.handle) ||
                  (a = b.handle = function (e) {
                    return void 0 !== _ && _.event.triggered !== e.type
                      ? _.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                d = (e = (e || "").match(M) || [""]).length;
              d--;

            )
              (f = g = (l = Ct.exec(e[d]) || [])[1]),
                (u = (l[2] || "").split(".").sort()),
                f &&
                  ((c = _.event.special[f] || {}),
                  (f = (o ? c.delegateType : c.bindType) || f),
                  (c = _.event.special[f] || {}),
                  (m = _.extend(
                    {
                      type: f,
                      origType: g,
                      data: n,
                      handler: r,
                      guid: r.guid,
                      selector: o,
                      needsContext: o && _.expr.match.needsContext.test(o),
                      namespace: u.join("."),
                    },
                    i
                  )),
                  (p = s[f]) ||
                    (((p = s[f] = []).delegateCount = 0),
                    (c.setup && !1 !== c.setup.call(t, n, u, a)) ||
                      (t.addEventListener && t.addEventListener(f, a))),
                  c.add &&
                    (c.add.call(t, m),
                    m.handler.guid || (m.handler.guid = r.guid)),
                  o ? p.splice(p.delegateCount++, 0, m) : p.push(m),
                  (_.event.global[f] = !0));
        },
        remove: function (t, e, r, n, o) {
          var i,
            a,
            l,
            s,
            d,
            m,
            c,
            p,
            f,
            u,
            g,
            b = J.hasData(t) && J.get(t);
          if (b && (s = b.events)) {
            for (d = (e = (e || "").match(M) || [""]).length; d--; )
              if (
                ((f = g = (l = Ct.exec(e[d]) || [])[1]),
                (u = (l[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  c = _.event.special[f] || {},
                    p = s[(f = (n ? c.delegateType : c.bindType) || f)] || [],
                    l =
                      l[2] &&
                      new RegExp(
                        "(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = i = p.length;
                  i--;

                )
                  (m = p[i]),
                    (!o && g !== m.origType) ||
                      (r && r.guid !== m.guid) ||
                      (l && !l.test(m.namespace)) ||
                      (n && n !== m.selector && ("**" !== n || !m.selector)) ||
                      (p.splice(i, 1),
                      m.selector && p.delegateCount--,
                      c.remove && c.remove.call(t, m));
                a &&
                  !p.length &&
                  ((c.teardown && !1 !== c.teardown.call(t, u, b.handle)) ||
                    _.removeEvent(t, f, b.handle),
                  delete s[f]);
              } else for (f in s) _.event.remove(t, f + e[d], r, n, !0);
            _.isEmptyObject(s) && J.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            r,
            n,
            o,
            i,
            a,
            l = new Array(arguments.length),
            s = _.event.fix(t),
            d = (J.get(this, "events") || Object.create(null))[s.type] || [],
            m = _.event.special[s.type] || {};
          for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (
            ((s.delegateTarget = this),
            !m.preDispatch || !1 !== m.preDispatch.call(this, s))
          ) {
            for (
              a = _.event.handlers.call(this, s, d), e = 0;
              (o = a[e++]) && !s.isPropagationStopped();

            )
              for (
                s.currentTarget = o.elem, r = 0;
                (i = o.handlers[r++]) && !s.isImmediatePropagationStopped();

              )
                (s.rnamespace &&
                  !1 !== i.namespace &&
                  !s.rnamespace.test(i.namespace)) ||
                  ((s.handleObj = i),
                  (s.data = i.data),
                  void 0 !==
                    (n = (
                      (_.event.special[i.origType] || {}).handle || i.handler
                    ).apply(o.elem, l)) &&
                    !1 === (s.result = n) &&
                    (s.preventDefault(), s.stopPropagation()));
            return m.postDispatch && m.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function (t, e) {
          var r,
            n,
            o,
            i,
            a,
            l = [],
            s = e.delegateCount,
            d = t.target;
          if (s && d.nodeType && !("click" === t.type && 1 <= t.button))
            for (; d !== this; d = d.parentNode || this)
              if (
                1 === d.nodeType &&
                ("click" !== t.type || !0 !== d.disabled)
              ) {
                for (i = [], a = {}, r = 0; r < s; r++)
                  void 0 === a[(o = (n = e[r]).selector + " ")] &&
                    (a[o] = n.needsContext
                      ? -1 < _(o, this).index(d)
                      : _.find(o, this, null, [d]).length),
                    a[o] && i.push(n);
                i.length && l.push({ elem: d, handlers: i });
              }
          return (
            (d = this),
            s < e.length && l.push({ elem: d, handlers: e.slice(s) }),
            l
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(_.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: h(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[_.expando] ? t : new _.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (t) {
              var e = this || t;
              return (
                gt.test(e.type) &&
                  e.click &&
                  S(e, "input") &&
                  St(e, "click", Et),
                !1
              );
            },
            trigger: function (t) {
              var e = this || t;
              return (
                gt.test(e.type) && e.click && S(e, "input") && St(e, "click"),
                !0
              );
            },
            _default: function (t) {
              var e = t.target;
              return (
                (gt.test(e.type) &&
                  e.click &&
                  S(e, "input") &&
                  J.get(e, "click")) ||
                S(e, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (_.removeEvent = function (t, e, r) {
          t.removeEventListener && t.removeEventListener(e, r);
        }),
        (_.Event = function (t, e) {
          if (!(this instanceof _.Event)) return new _.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? Et
                  : Dt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && _.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[_.expando] = !0);
        }),
        (_.Event.prototype = {
          constructor: _.Event,
          isDefaultPrevented: Dt,
          isPropagationStopped: Dt,
          isImmediatePropagationStopped: Dt,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = Et),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = Et),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = Et),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        _.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && Tt.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && _t.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          _.event.addProp
        ),
        _.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          _.event.special[t] = {
            setup: function () {
              return St(this, t, jt), !1;
            },
            trigger: function () {
              return St(this, t), !0;
            },
            delegateType: e,
          };
        }),
        _.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            _.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var r,
                  n = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (n && (n === this || _.contains(this, n))) ||
                    ((t.type = o.origType),
                    (r = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  r
                );
              },
            };
          }
        ),
        _.fn.extend({
          on: function (t, e, r, n) {
            return Ot(this, t, e, r, n);
          },
          one: function (t, e, r, n) {
            return Ot(this, t, e, r, n, 1);
          },
          off: function (t, e, r) {
            var n, o;
            if (t && t.preventDefault && t.handleObj)
              return (
                (n = t.handleObj),
                _(t.delegateTarget).off(
                  n.namespace ? n.origType + "." + n.namespace : n.origType,
                  n.selector,
                  n.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (o in t) this.off(o, e, t[o]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((r = e), (e = void 0)),
              !1 === r && (r = Dt),
              this.each(function () {
                _.event.remove(this, t, r, e);
              })
            );
          },
        });
      var At = /<script|<style|<link/i,
        zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function It(t, e) {
        return (
          (S(t, "table") &&
            S(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            _(t).children("tbody")[0]) ||
          t
        );
      }
      function Nt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function qt(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function Rt(t, e) {
        var r, n, o, i, a, l;
        if (1 === e.nodeType) {
          if (J.hasData(t) && (l = J.get(t).events))
            for (o in (J.remove(e, "handle events"), l))
              for (r = 0, n = l[o].length; r < n; r++)
                _.event.add(e, o, l[o][r]);
          Q.hasData(t) &&
            ((i = Q.access(t)), (a = _.extend({}, i)), Q.set(e, a));
        }
      }
      function Mt(t, e, r, n) {
        e = s(e);
        var o,
          i,
          a,
          l,
          d,
          m,
          c = 0,
          p = t.length,
          f = p - 1,
          u = e[0],
          g = h(u);
        if (g || (1 < p && "string" == typeof u && !b.checkClone && zt.test(u)))
          return t.each(function (o) {
            var i = t.eq(o);
            g && (e[0] = u.call(this, o, i.html())), Mt(i, e, r, n);
          });
        if (
          p &&
          ((i = (o = kt(e, t[0].ownerDocument, !1, t, n)).firstChild),
          1 === o.childNodes.length && (o = i),
          i || n)
        ) {
          for (l = (a = _.map(wt(o, "script"), Nt)).length; c < p; c++)
            (d = o),
              c !== f &&
                ((d = _.clone(d, !0, !0)), l && _.merge(a, wt(d, "script"))),
              r.call(t[c], d, c);
          if (l)
            for (
              m = a[a.length - 1].ownerDocument, _.map(a, qt), c = 0;
              c < l;
              c++
            )
              (d = a[c]),
                ht.test(d.type || "") &&
                  !J.access(d, "globalEval") &&
                  _.contains(m, d) &&
                  (d.src && "module" !== (d.type || "").toLowerCase()
                    ? _._evalUrl &&
                      !d.noModule &&
                      _._evalUrl(
                        d.src,
                        { nonce: d.nonce || d.getAttribute("nonce") },
                        m
                      )
                    : y(d.textContent.replace(Lt, ""), d, m));
        }
        return t;
      }
      function Pt(t, e, r) {
        for (var n, o = e ? _.filter(e, t) : t, i = 0; null != (n = o[i]); i++)
          r || 1 !== n.nodeType || _.cleanData(wt(n)),
            n.parentNode &&
              (r && lt(n) && vt(wt(n, "script")), n.parentNode.removeChild(n));
        return t;
      }
      _.extend({
        htmlPrefilter: function (t) {
          return t;
        },
        clone: function (t, e, r) {
          var n,
            o,
            i,
            a,
            l,
            s,
            d,
            m = t.cloneNode(!0),
            c = lt(t);
          if (
            !(
              b.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              _.isXMLDoc(t)
            )
          )
            for (a = wt(m), n = 0, o = (i = wt(t)).length; n < o; n++)
              (l = i[n]),
                "input" === (d = (s = a[n]).nodeName.toLowerCase()) &&
                gt.test(l.type)
                  ? (s.checked = l.checked)
                  : ("input" !== d && "textarea" !== d) ||
                    (s.defaultValue = l.defaultValue);
          if (e)
            if (r)
              for (
                i = i || wt(t), a = a || wt(m), n = 0, o = i.length;
                n < o;
                n++
              )
                Rt(i[n], a[n]);
            else Rt(t, m);
          return (
            0 < (a = wt(m, "script")).length && vt(a, !c && wt(t, "script")), m
          );
        },
        cleanData: function (t) {
          for (
            var e, r, n, o = _.event.special, i = 0;
            void 0 !== (r = t[i]);
            i++
          )
            if (V(r)) {
              if ((e = r[J.expando])) {
                if (e.events)
                  for (n in e.events)
                    o[n] ? _.event.remove(r, n) : _.removeEvent(r, n, e.handle);
                r[J.expando] = void 0;
              }
              r[Q.expando] && (r[Q.expando] = void 0);
            }
        },
      }),
        _.fn.extend({
          detach: function (t) {
            return Pt(this, t, !0);
          },
          remove: function (t) {
            return Pt(this, t);
          },
          text: function (t) {
            return W(
              this,
              function (t) {
                return void 0 === t
                  ? _.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return Mt(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                It(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return Mt(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = It(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return Mt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return Mt(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (_.cleanData(wt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return _.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return W(
              this,
              function (t) {
                var e = this[0] || {},
                  r = 0,
                  n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !At.test(t) &&
                  !xt[(bt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = _.htmlPrefilter(t);
                  try {
                    for (; r < n; r++)
                      1 === (e = this[r] || {}).nodeType &&
                        (_.cleanData(wt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return Mt(
              this,
              arguments,
              function (e) {
                var r = this.parentNode;
                _.inArray(this, t) < 0 &&
                  (_.cleanData(wt(this)), r && r.replaceChild(e, this));
              },
              t
            );
          },
        }),
        _.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            _.fn[t] = function (t) {
              for (
                var r, n = [], o = _(t), i = o.length - 1, a = 0;
                a <= i;
                a++
              )
                (r = a === i ? this : this.clone(!0)),
                  _(o[a])[e](r),
                  d.apply(n, r.get());
              return this.pushStack(n);
            };
          }
        );
      var Bt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
        Xt = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = r), e.getComputedStyle(t);
        },
        Ht = function (t, e, r) {
          var n,
            o,
            i = {};
          for (o in e) (i[o] = t.style[o]), (t.style[o] = e[o]);
          for (o in ((n = r.call(t)), e)) t.style[o] = i[o];
          return n;
        },
        Ut = new RegExp(it.join("|"), "i");
      function Zt(t, e, r) {
        var n,
          o,
          i,
          a,
          l = t.style;
        return (
          (r = r || Xt(t)) &&
            ("" !== (a = r.getPropertyValue(e) || r[e]) ||
              lt(t) ||
              (a = _.style(t, e)),
            !b.pixelBoxStyles() &&
              Bt.test(a) &&
              Ut.test(e) &&
              ((n = l.width),
              (o = l.minWidth),
              (i = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = a),
              (a = r.width),
              (l.width = n),
              (l.minWidth = o),
              (l.maxWidth = i))),
          void 0 !== a ? a + "" : a
        );
      }
      function Wt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (m) {
            (d.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (m.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              at.appendChild(d).appendChild(m);
            var t = r.getComputedStyle(m);
            (n = "1%" !== t.top),
              (s = 12 === e(t.marginLeft)),
              (m.style.right = "60%"),
              (a = 36 === e(t.right)),
              (o = 36 === e(t.width)),
              (m.style.position = "absolute"),
              (i = 12 === e(m.offsetWidth / 3)),
              at.removeChild(d),
              (m = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var n,
          o,
          i,
          a,
          l,
          s,
          d = w.createElement("div"),
          m = w.createElement("div");
        m.style &&
          ((m.style.backgroundClip = "content-box"),
          (m.cloneNode(!0).style.backgroundClip = ""),
          (b.clearCloneStyle = "content-box" === m.style.backgroundClip),
          _.extend(b, {
            boxSizingReliable: function () {
              return t(), o;
            },
            pixelBoxStyles: function () {
              return t(), a;
            },
            pixelPosition: function () {
              return t(), n;
            },
            reliableMarginLeft: function () {
              return t(), s;
            },
            scrollboxSize: function () {
              return t(), i;
            },
            reliableTrDimensions: function () {
              var t, e, n, o;
              return (
                null == l &&
                  ((t = w.createElement("table")),
                  (e = w.createElement("tr")),
                  (n = w.createElement("div")),
                  (t.style.cssText = "position:absolute;left:-11111px"),
                  (e.style.height = "1px"),
                  (n.style.height = "9px"),
                  at.appendChild(t).appendChild(e).appendChild(n),
                  (o = r.getComputedStyle(e)),
                  (l = 3 < parseInt(o.height)),
                  at.removeChild(t)),
                l
              );
            },
          }));
      })();
      var Yt = ["Webkit", "Moz", "ms"],
        Ft = w.createElement("div").style,
        $t = {};
      function Kt(t) {
        return (
          _.cssProps[t] ||
          $t[t] ||
          (t in Ft
            ? t
            : ($t[t] =
                (function (t) {
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), r = Yt.length;
                    r--;

                  )
                    if ((t = Yt[r] + e) in Ft) return t;
                })(t) || t))
        );
      }
      var Vt = /^(none|table(?!-c[ea]).+)/,
        Gt = /^--/,
        Jt = { position: "absolute", visibility: "hidden", display: "block" },
        Qt = { letterSpacing: "0", fontWeight: "400" };
      function te(t, e, r) {
        var n = ot.exec(e);
        return n ? Math.max(0, n[2] - (r || 0)) + (n[3] || "px") : e;
      }
      function ee(t, e, r, n, o, i) {
        var a = "width" === e ? 1 : 0,
          l = 0,
          s = 0;
        if (r === (n ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === r && (s += _.css(t, r + it[a], !0, o)),
            n
              ? ("content" === r && (s -= _.css(t, "padding" + it[a], !0, o)),
                "margin" !== r &&
                  (s -= _.css(t, "border" + it[a] + "Width", !0, o)))
              : ((s += _.css(t, "padding" + it[a], !0, o)),
                "padding" !== r
                  ? (s += _.css(t, "border" + it[a] + "Width", !0, o))
                  : (l += _.css(t, "border" + it[a] + "Width", !0, o)));
        return (
          !n &&
            0 <= i &&
            (s +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    i -
                    s -
                    l -
                    0.5
                )
              ) || 0),
          s
        );
      }
      function re(t, e, r) {
        var n = Xt(t),
          o =
            (!b.boxSizingReliable() || r) &&
            "border-box" === _.css(t, "boxSizing", !1, n),
          i = o,
          a = Zt(t, e, n),
          l = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Bt.test(a)) {
          if (!r) return a;
          a = "auto";
        }
        return (
          ((!b.boxSizingReliable() && o) ||
            (!b.reliableTrDimensions() && S(t, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === _.css(t, "display", !1, n))) &&
            t.getClientRects().length &&
            ((o = "border-box" === _.css(t, "boxSizing", !1, n)),
            (i = l in t) && (a = t[l])),
          (a = parseFloat(a) || 0) +
            ee(t, e, r || (o ? "border" : "content"), i, n, a) +
            "px"
        );
      }
      function ne(t, e, r, n, o) {
        return new ne.prototype.init(t, e, r, n, o);
      }
      _.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var r = Zt(t, "opacity");
                return "" === r ? "1" : r;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, e, r, n) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var o,
              i,
              a,
              l = K(e),
              s = Gt.test(e),
              d = t.style;
            if (
              (s || (e = Kt(l)),
              (a = _.cssHooks[e] || _.cssHooks[l]),
              void 0 === r)
            )
              return a && "get" in a && void 0 !== (o = a.get(t, !1, n))
                ? o
                : d[e];
            "string" == (i = typeof r) &&
              (o = ot.exec(r)) &&
              o[1] &&
              ((r = mt(t, e, o)), (i = "number")),
              null != r &&
                r == r &&
                ("number" !== i ||
                  s ||
                  (r += (o && o[3]) || (_.cssNumber[l] ? "" : "px")),
                b.clearCloneStyle ||
                  "" !== r ||
                  0 !== e.indexOf("background") ||
                  (d[e] = "inherit"),
                (a && "set" in a && void 0 === (r = a.set(t, r, n))) ||
                  (s ? d.setProperty(e, r) : (d[e] = r)));
          }
        },
        css: function (t, e, r, n) {
          var o,
            i,
            a,
            l = K(e);
          return (
            Gt.test(e) || (e = Kt(l)),
            (a = _.cssHooks[e] || _.cssHooks[l]) &&
              "get" in a &&
              (o = a.get(t, !0, r)),
            void 0 === o && (o = Zt(t, e, n)),
            "normal" === o && e in Qt && (o = Qt[e]),
            "" === r || r
              ? ((i = parseFloat(o)), !0 === r || isFinite(i) ? i || 0 : o)
              : o
          );
        },
      }),
        _.each(["height", "width"], function (t, e) {
          _.cssHooks[e] = {
            get: function (t, r, n) {
              if (r)
                return !Vt.test(_.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? re(t, e, n)
                  : Ht(t, Jt, function () {
                      return re(t, e, n);
                    });
            },
            set: function (t, r, n) {
              var o,
                i = Xt(t),
                a = !b.scrollboxSize() && "absolute" === i.position,
                l = (a || n) && "border-box" === _.css(t, "boxSizing", !1, i),
                s = n ? ee(t, e, n, l, i) : 0;
              return (
                l &&
                  a &&
                  (s -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(i[e]) -
                      ee(t, e, "border", !1, i) -
                      0.5
                  )),
                s &&
                  (o = ot.exec(r)) &&
                  "px" !== (o[3] || "px") &&
                  ((t.style[e] = r), (r = _.css(t, e))),
                te(0, r, s)
              );
            },
          };
        }),
        (_.cssHooks.marginLeft = Wt(b.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(Zt(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  Ht(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        _.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (_.cssHooks[t + e] = {
            expand: function (r) {
              for (
                var n = 0,
                  o = {},
                  i = "string" == typeof r ? r.split(" ") : [r];
                n < 4;
                n++
              )
                o[t + it[n] + e] = i[n] || i[n - 2] || i[0];
              return o;
            },
          }),
            "margin" !== t && (_.cssHooks[t + e].set = te);
        }),
        _.fn.extend({
          css: function (t, e) {
            return W(
              this,
              function (t, e, r) {
                var n,
                  o,
                  i = {},
                  a = 0;
                if (Array.isArray(e)) {
                  for (n = Xt(t), o = e.length; a < o; a++)
                    i[e[a]] = _.css(t, e[a], !1, n);
                  return i;
                }
                return void 0 !== r ? _.style(t, e, r) : _.css(t, e);
              },
              t,
              e,
              1 < arguments.length
            );
          },
        }),
        (((_.Tween = ne).prototype = {
          constructor: ne,
          init: function (t, e, r, n, o, i) {
            (this.elem = t),
              (this.prop = r),
              (this.easing = o || _.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = n),
              (this.unit = i || (_.cssNumber[r] ? "" : "px"));
          },
          cur: function () {
            var t = ne.propHooks[this.prop];
            return t && t.get ? t.get(this) : ne.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              r = ne.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e = _.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              r && r.set ? r.set(this) : ne.propHooks._default.set(this),
              this
            );
          },
        }).init.prototype = ne.prototype),
        ((ne.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = _.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function (t) {
              _.fx.step[t.prop]
                ? _.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (!_.cssHooks[t.prop] && null == t.elem.style[Kt(t.prop)])
                ? (t.elem[t.prop] = t.now)
                : _.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }).scrollTop = ne.propHooks.scrollLeft = {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
        (_.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (_.fx = ne.prototype.init),
        (_.fx.step = {});
      var oe,
        ie,
        ae,
        le,
        se = /^(?:toggle|show|hide)$/,
        de = /queueHooks$/;
      function me() {
        ie &&
          (!1 === w.hidden && r.requestAnimationFrame
            ? r.requestAnimationFrame(me)
            : r.setTimeout(me, _.fx.interval),
          _.fx.tick());
      }
      function ce() {
        return (
          r.setTimeout(function () {
            oe = void 0;
          }),
          (oe = Date.now())
        );
      }
      function pe(t, e) {
        var r,
          n = 0,
          o = { height: t };
        for (e = e ? 1 : 0; n < 4; n += 2 - e)
          o["margin" + (r = it[n])] = o["padding" + r] = t;
        return e && (o.opacity = o.width = t), o;
      }
      function fe(t, e, r) {
        for (
          var n,
            o = (ue.tweeners[e] || []).concat(ue.tweeners["*"]),
            i = 0,
            a = o.length;
          i < a;
          i++
        )
          if ((n = o[i].call(r, e, t))) return n;
      }
      function ue(t, e, r) {
        var n,
          o,
          i = 0,
          a = ue.prefilters.length,
          l = _.Deferred().always(function () {
            delete s.elem;
          }),
          s = function () {
            if (o) return !1;
            for (
              var e = oe || ce(),
                r = Math.max(0, d.startTime + d.duration - e),
                n = 1 - (r / d.duration || 0),
                i = 0,
                a = d.tweens.length;
              i < a;
              i++
            )
              d.tweens[i].run(n);
            return (
              l.notifyWith(t, [d, n, r]),
              n < 1 && a
                ? r
                : (a || l.notifyWith(t, [d, 1, 0]), l.resolveWith(t, [d]), !1)
            );
          },
          d = l.promise({
            elem: t,
            props: _.extend({}, e),
            opts: _.extend(
              !0,
              { specialEasing: {}, easing: _.easing._default },
              r
            ),
            originalProperties: e,
            originalOptions: r,
            startTime: oe || ce(),
            duration: r.duration,
            tweens: [],
            createTween: function (e, r) {
              var n = _.Tween(
                t,
                d.opts,
                e,
                r,
                d.opts.specialEasing[e] || d.opts.easing
              );
              return d.tweens.push(n), n;
            },
            stop: function (e) {
              var r = 0,
                n = e ? d.tweens.length : 0;
              if (o) return this;
              for (o = !0; r < n; r++) d.tweens[r].run(1);
              return (
                e
                  ? (l.notifyWith(t, [d, 1, 0]), l.resolveWith(t, [d, e]))
                  : l.rejectWith(t, [d, e]),
                this
              );
            },
          }),
          m = d.props;
        for (
          (function (t, e) {
            var r, n, o, i, a;
            for (r in t)
              if (
                ((o = e[(n = K(r))]),
                (i = t[r]),
                Array.isArray(i) && ((o = i[1]), (i = t[r] = i[0])),
                r !== n && ((t[n] = i), delete t[r]),
                (a = _.cssHooks[n]) && ("expand" in a))
              )
                for (r in ((i = a.expand(i)), delete t[n], i))
                  (r in t) || ((t[r] = i[r]), (e[r] = o));
              else e[n] = o;
          })(m, d.opts.specialEasing);
          i < a;
          i++
        )
          if ((n = ue.prefilters[i].call(d, t, m, d.opts)))
            return (
              h(n.stop) &&
                (_._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)),
              n
            );
        return (
          _.map(m, fe, d),
          h(d.opts.start) && d.opts.start.call(t, d),
          d
            .progress(d.opts.progress)
            .done(d.opts.done, d.opts.complete)
            .fail(d.opts.fail)
            .always(d.opts.always),
          _.fx.timer(_.extend(s, { elem: t, anim: d, queue: d.opts.queue })),
          d
        );
      }
      (_.Animation = _.extend(ue, {
        tweeners: {
          "*": [
            function (t, e) {
              var r = this.createTween(t, e);
              return mt(r.elem, t, ot.exec(e), r), r;
            },
          ],
        },
        tweener: function (t, e) {
          h(t) ? ((e = t), (t = ["*"])) : (t = t.match(M));
          for (var r, n = 0, o = t.length; n < o; n++)
            (r = t[n]),
              (ue.tweeners[r] = ue.tweeners[r] || []),
              ue.tweeners[r].unshift(e);
        },
        prefilters: [
          function (t, e, r) {
            var n,
              o,
              i,
              a,
              l,
              s,
              d,
              m,
              c = "width" in e || "height" in e,
              p = this,
              f = {},
              u = t.style,
              g = t.nodeType && dt(t),
              b = J.get(t, "fxshow");
            for (n in (r.queue ||
              (null == (a = _._queueHooks(t, "fx")).unqueued &&
                ((a.unqueued = 0),
                (l = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || l();
                })),
              a.unqueued++,
              p.always(function () {
                p.always(function () {
                  a.unqueued--, _.queue(t, "fx").length || a.empty.fire();
                });
              })),
            e))
              if (((o = e[n]), se.test(o))) {
                if (
                  (delete e[n],
                  (i = i || "toggle" === o),
                  o === (g ? "hide" : "show"))
                ) {
                  if ("show" !== o || !b || void 0 === b[n]) continue;
                  g = !0;
                }
                f[n] = (b && b[n]) || _.style(t, n);
              }
            if ((s = !_.isEmptyObject(e)) || !_.isEmptyObject(f))
              for (n in (c &&
                1 === t.nodeType &&
                ((r.overflow = [u.overflow, u.overflowX, u.overflowY]),
                null == (d = b && b.display) && (d = J.get(t, "display")),
                "none" === (m = _.css(t, "display")) &&
                  (d
                    ? (m = d)
                    : (pt([t], !0),
                      (d = t.style.display || d),
                      (m = _.css(t, "display")),
                      pt([t]))),
                ("inline" === m || ("inline-block" === m && null != d)) &&
                  "none" === _.css(t, "float") &&
                  (s ||
                    (p.done(function () {
                      u.display = d;
                    }),
                    null == d &&
                      ((m = u.display), (d = "none" === m ? "" : m))),
                  (u.display = "inline-block"))),
              r.overflow &&
                ((u.overflow = "hidden"),
                p.always(function () {
                  (u.overflow = r.overflow[0]),
                    (u.overflowX = r.overflow[1]),
                    (u.overflowY = r.overflow[2]);
                })),
              (s = !1),
              f))
                s ||
                  (b
                    ? "hidden" in b && (g = b.hidden)
                    : (b = J.access(t, "fxshow", { display: d })),
                  i && (b.hidden = !g),
                  g && pt([t], !0),
                  p.done(function () {
                    for (n in (g || pt([t]), J.remove(t, "fxshow"), f))
                      _.style(t, n, f[n]);
                  })),
                  (s = fe(g ? b[n] : 0, n, p)),
                  n in b ||
                    ((b[n] = s.start), g && ((s.end = s.start), (s.start = 0)));
          },
        ],
        prefilter: function (t, e) {
          e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
        },
      })),
        (_.speed = function (t, e, r) {
          var n =
            t && "object" == typeof t
              ? _.extend({}, t)
              : {
                  complete: r || (!r && e) || (h(t) && t),
                  duration: t,
                  easing: (r && e) || (e && !h(e) && e),
                };
          return (
            _.fx.off
              ? (n.duration = 0)
              : "number" != typeof n.duration &&
                (n.duration in _.fx.speeds
                  ? (n.duration = _.fx.speeds[n.duration])
                  : (n.duration = _.fx.speeds._default)),
            (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
            (n.old = n.complete),
            (n.complete = function () {
              h(n.old) && n.old.call(this), n.queue && _.dequeue(this, n.queue);
            }),
            n
          );
        }),
        _.fn.extend({
          fadeTo: function (t, e, r, n) {
            return this.filter(dt)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, r, n);
          },
          animate: function (t, e, r, n) {
            var o = _.isEmptyObject(t),
              i = _.speed(e, r, n),
              a = function () {
                var e = ue(this, _.extend({}, t), i);
                (o || J.get(this, "finish")) && e.stop(!0);
              };
            return (
              (a.finish = a),
              o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            );
          },
          stop: function (t, e, r) {
            var n = function (t) {
              var e = t.stop;
              delete t.stop, e(r);
            };
            return (
              "string" != typeof t && ((r = e), (e = t), (t = void 0)),
              e && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  o = null != t && t + "queueHooks",
                  i = _.timers,
                  a = J.get(this);
                if (o) a[o] && a[o].stop && n(a[o]);
                else for (o in a) a[o] && a[o].stop && de.test(o) && n(a[o]);
                for (o = i.length; o--; )
                  i[o].elem !== this ||
                    (null != t && i[o].queue !== t) ||
                    (i[o].anim.stop(r), (e = !1), i.splice(o, 1));
                (!e && r) || _.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var e,
                  r = J.get(this),
                  n = r[t + "queue"],
                  o = r[t + "queueHooks"],
                  i = _.timers,
                  a = n ? n.length : 0;
                for (
                  r.finish = !0,
                    _.queue(this, t, []),
                    o && o.stop && o.stop.call(this, !0),
                    e = i.length;
                  e--;

                )
                  i[e].elem === this &&
                    i[e].queue === t &&
                    (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < a; e++)
                  n[e] && n[e].finish && n[e].finish.call(this);
                delete r.finish;
              })
            );
          },
        }),
        _.each(["toggle", "show", "hide"], function (t, e) {
          var r = _.fn[e];
          _.fn[e] = function (t, n, o) {
            return null == t || "boolean" == typeof t
              ? r.apply(this, arguments)
              : this.animate(pe(e, !0), t, n, o);
          };
        }),
        _.each(
          {
            slideDown: pe("show"),
            slideUp: pe("hide"),
            slideToggle: pe("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            _.fn[t] = function (t, r, n) {
              return this.animate(e, t, r, n);
            };
          }
        ),
        (_.timers = []),
        (_.fx.tick = function () {
          var t,
            e = 0,
            r = _.timers;
          for (oe = Date.now(); e < r.length; e++)
            (t = r[e])() || r[e] !== t || r.splice(e--, 1);
          r.length || _.fx.stop(), (oe = void 0);
        }),
        (_.fx.timer = function (t) {
          _.timers.push(t), _.fx.start();
        }),
        (_.fx.interval = 13),
        (_.fx.start = function () {
          ie || ((ie = !0), me());
        }),
        (_.fx.stop = function () {
          ie = null;
        }),
        (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (_.fn.delay = function (t, e) {
          return (
            (t = (_.fx && _.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function (e, n) {
              var o = r.setTimeout(e, t);
              n.stop = function () {
                r.clearTimeout(o);
              };
            })
          );
        }),
        (ae = w.createElement("input")),
        (le = w.createElement("select").appendChild(w.createElement("option"))),
        (ae.type = "checkbox"),
        (b.checkOn = "" !== ae.value),
        (b.optSelected = le.selected),
        ((ae = w.createElement("input")).value = "t"),
        (ae.type = "radio"),
        (b.radioValue = "t" === ae.value);
      var ge,
        be = _.expr.attrHandle;
      _.fn.extend({
        attr: function (t, e) {
          return W(this, _.attr, t, e, 1 < arguments.length);
        },
        removeAttr: function (t) {
          return this.each(function () {
            _.removeAttr(this, t);
          });
        },
      }),
        _.extend({
          attr: function (t, e, r) {
            var n,
              o,
              i = t.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === t.getAttribute
                ? _.prop(t, e, r)
                : ((1 === i && _.isXMLDoc(t)) ||
                    (o =
                      _.attrHooks[e.toLowerCase()] ||
                      (_.expr.match.bool.test(e) ? ge : void 0)),
                  void 0 !== r
                    ? null === r
                      ? void _.removeAttr(t, e)
                      : o && "set" in o && void 0 !== (n = o.set(t, r, e))
                      ? n
                      : (t.setAttribute(e, r + ""), r)
                    : o && "get" in o && null !== (n = o.get(t, e))
                    ? n
                    : null == (n = _.find.attr(t, e))
                    ? void 0
                    : n);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!b.radioValue && "radio" === e && S(t, "input")) {
                  var r = t.value;
                  return t.setAttribute("type", e), r && (t.value = r), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var r,
              n = 0,
              o = e && e.match(M);
            if (o && 1 === t.nodeType)
              for (; (r = o[n++]); ) t.removeAttribute(r);
          },
        }),
        (ge = {
          set: function (t, e, r) {
            return !1 === e ? _.removeAttr(t, r) : t.setAttribute(r, r), r;
          },
        }),
        _.each(_.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var r = be[e] || _.find.attr;
          be[e] = function (t, e, n) {
            var o,
              i,
              a = e.toLowerCase();
            return (
              n ||
                ((i = be[a]),
                (be[a] = o),
                (o = null != r(t, e, n) ? a : null),
                (be[a] = i)),
              o
            );
          };
        });
      var he = /^(?:input|select|textarea|button)$/i,
        xe = /^(?:a|area)$/i;
      function we(t) {
        return (t.match(M) || []).join(" ");
      }
      function ve(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function ye(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(M)) || [];
      }
      _.fn.extend({
        prop: function (t, e) {
          return W(this, _.prop, t, e, 1 < arguments.length);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[_.propFix[t] || t];
          });
        },
      }),
        _.extend({
          prop: function (t, e, r) {
            var n,
              o,
              i = t.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && _.isXMLDoc(t)) ||
                  ((e = _.propFix[e] || e), (o = _.propHooks[e])),
                void 0 !== r
                  ? o && "set" in o && void 0 !== (n = o.set(t, r, e))
                    ? n
                    : (t[e] = r)
                  : o && "get" in o && null !== (n = o.get(t, e))
                  ? n
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = _.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : he.test(t.nodeName) || (xe.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        b.optSelected ||
          (_.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        _.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            _.propFix[this.toLowerCase()] = this;
          }
        ),
        _.fn.extend({
          addClass: function (t) {
            var e,
              r,
              n,
              o,
              i,
              a,
              l,
              s = 0;
            if (h(t))
              return this.each(function (e) {
                _(this).addClass(t.call(this, e, ve(this)));
              });
            if ((e = ye(t)).length)
              for (; (r = this[s++]); )
                if (
                  ((o = ve(r)), (n = 1 === r.nodeType && " " + we(o) + " "))
                ) {
                  for (a = 0; (i = e[a++]); )
                    n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                  o !== (l = we(n)) && r.setAttribute("class", l);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              r,
              n,
              o,
              i,
              a,
              l,
              s = 0;
            if (h(t))
              return this.each(function (e) {
                _(this).removeClass(t.call(this, e, ve(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = ye(t)).length)
              for (; (r = this[s++]); )
                if (
                  ((o = ve(r)), (n = 1 === r.nodeType && " " + we(o) + " "))
                ) {
                  for (a = 0; (i = e[a++]); )
                    for (; -1 < n.indexOf(" " + i + " "); )
                      n = n.replace(" " + i + " ", " ");
                  o !== (l = we(n)) && r.setAttribute("class", l);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var r = typeof t,
              n = "string" === r || Array.isArray(t);
            return "boolean" == typeof e && n
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : h(t)
              ? this.each(function (r) {
                  _(this).toggleClass(t.call(this, r, ve(this), e), e);
                })
              : this.each(function () {
                  var e, o, i, a;
                  if (n)
                    for (o = 0, i = _(this), a = ye(t); (e = a[o++]); )
                      i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== r) ||
                      ((e = ve(this)) && J.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || !1 === t
                            ? ""
                            : J.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (t) {
            var e,
              r,
              n = 0;
            for (e = " " + t + " "; (r = this[n++]); )
              if (1 === r.nodeType && -1 < (" " + we(ve(r)) + " ").indexOf(e))
                return !0;
            return !1;
          },
        });
      var ke = /\r/g;
      _.fn.extend({
        val: function (t) {
          var e,
            r,
            n,
            o = this[0];
          return arguments.length
            ? ((n = h(t)),
              this.each(function (r) {
                var o;
                1 === this.nodeType &&
                  (null == (o = n ? t.call(this, r, _(this).val()) : t)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = _.map(o, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    _.valHooks[this.type] ||
                    _.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (e =
                _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (r = e.get(o, "value"))
              ? r
              : "string" == typeof (r = o.value)
              ? r.replace(ke, "")
              : null == r
              ? ""
              : r
            : void 0;
        },
      }),
        _.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = _.find.attr(t, "value");
                return null != e ? e : we(_.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  r,
                  n,
                  o = t.options,
                  i = t.selectedIndex,
                  a = "select-one" === t.type,
                  l = a ? null : [],
                  s = a ? i + 1 : o.length;
                for (n = i < 0 ? s : a ? i : 0; n < s; n++)
                  if (
                    ((r = o[n]).selected || n === i) &&
                    !r.disabled &&
                    (!r.parentNode.disabled || !S(r.parentNode, "optgroup"))
                  ) {
                    if (((e = _(r).val()), a)) return e;
                    l.push(e);
                  }
                return l;
              },
              set: function (t, e) {
                for (
                  var r, n, o = t.options, i = _.makeArray(e), a = o.length;
                  a--;

                )
                  ((n = o[a]).selected =
                    -1 < _.inArray(_.valHooks.option.get(n), i)) && (r = !0);
                return r || (t.selectedIndex = -1), i;
              },
            },
          },
        }),
        _.each(["radio", "checkbox"], function () {
          (_.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = -1 < _.inArray(_(t).val(), e));
            },
          }),
            b.checkOn ||
              (_.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (b.focusin = "onfocusin" in r);
      var Te = /^(?:focusinfocus|focusoutblur)$/,
        _e = function (t) {
          t.stopPropagation();
        };
      _.extend(_.event, {
        trigger: function (t, e, n, o) {
          var i,
            a,
            l,
            s,
            d,
            m,
            c,
            p,
            u = [n || w],
            g = f.call(t, "type") ? t.type : t,
            b = f.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((a = p = l = n = n || w),
            3 !== n.nodeType &&
              8 !== n.nodeType &&
              !Te.test(g + _.event.triggered) &&
              (-1 < g.indexOf(".") &&
                ((g = (b = g.split(".")).shift()), b.sort()),
              (d = g.indexOf(":") < 0 && "on" + g),
              ((t = t[_.expando]
                ? t
                : new _.Event(g, "object" == typeof t && t)).isTrigger = o
                ? 2
                : 3),
              (t.namespace = b.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = n),
              (e = null == e ? [t] : _.makeArray(e, [t])),
              (c = _.event.special[g] || {}),
              o || !c.trigger || !1 !== c.trigger.apply(n, e)))
          ) {
            if (!o && !c.noBubble && !x(n)) {
              for (
                s = c.delegateType || g, Te.test(s + g) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                u.push(a), (l = a);
              l === (n.ownerDocument || w) &&
                u.push(l.defaultView || l.parentWindow || r);
            }
            for (i = 0; (a = u[i++]) && !t.isPropagationStopped(); )
              (p = a),
                (t.type = 1 < i ? s : c.bindType || g),
                (m =
                  (J.get(a, "events") || Object.create(null))[t.type] &&
                  J.get(a, "handle")) && m.apply(a, e),
                (m = d && a[d]) &&
                  m.apply &&
                  V(a) &&
                  ((t.result = m.apply(a, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = g),
              o ||
                t.isDefaultPrevented() ||
                (c._default && !1 !== c._default.apply(u.pop(), e)) ||
                !V(n) ||
                (d &&
                  h(n[g]) &&
                  !x(n) &&
                  ((l = n[d]) && (n[d] = null),
                  (_.event.triggered = g),
                  t.isPropagationStopped() && p.addEventListener(g, _e),
                  n[g](),
                  t.isPropagationStopped() && p.removeEventListener(g, _e),
                  (_.event.triggered = void 0),
                  l && (n[d] = l))),
              t.result
            );
          }
        },
        simulate: function (t, e, r) {
          var n = _.extend(new _.Event(), r, { type: t, isSimulated: !0 });
          _.event.trigger(n, null, e);
        },
      }),
        _.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              _.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var r = this[0];
            if (r) return _.event.trigger(t, e, r, !0);
          },
        }),
        b.focusin ||
          _.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var r = function (t) {
              _.event.simulate(e, t.target, _.event.fix(t));
            };
            _.event.special[e] = {
              setup: function () {
                var n = this.ownerDocument || this.document || this,
                  o = J.access(n, e);
                o || n.addEventListener(t, r, !0), J.access(n, e, (o || 0) + 1);
              },
              teardown: function () {
                var n = this.ownerDocument || this.document || this,
                  o = J.access(n, e) - 1;
                o
                  ? J.access(n, e, o)
                  : (n.removeEventListener(t, r, !0), J.remove(n, e));
              },
            };
          });
      var Ce = r.location,
        Ee = { guid: Date.now() },
        De = /\?/;
      _.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new r.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            _.error("Invalid XML: " + t),
          e
        );
      };
      var je = /\[\]$/,
        Oe = /\r?\n/g,
        Se = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
      function ze(t, e, r, n) {
        var o;
        if (Array.isArray(e))
          _.each(e, function (e, o) {
            r || je.test(t)
              ? n(t, o)
              : ze(
                  t + "[" + ("object" == typeof o && null != o ? e : "") + "]",
                  o,
                  r,
                  n
                );
          });
        else if (r || "object" !== k(e)) n(t, e);
        else for (o in e) ze(t + "[" + o + "]", e[o], r, n);
      }
      (_.param = function (t, e) {
        var r,
          n = [],
          o = function (t, e) {
            var r = h(e) ? e() : e;
            n[n.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == r ? "" : r);
          };
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !_.isPlainObject(t)))
          _.each(t, function () {
            o(this.name, this.value);
          });
        else for (r in t) ze(r, t[r], e, o);
        return n.join("&");
      }),
        _.fn.extend({
          serialize: function () {
            return _.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = _.prop(this, "elements");
              return t ? _.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !_(this).is(":disabled") &&
                  Ae.test(this.nodeName) &&
                  !Se.test(t) &&
                  (this.checked || !gt.test(t))
                );
              })
              .map(function (t, e) {
                var r = _(this).val();
                return null == r
                  ? null
                  : Array.isArray(r)
                  ? _.map(r, function (t) {
                      return { name: e.name, value: t.replace(Oe, "\r\n") };
                    })
                  : { name: e.name, value: r.replace(Oe, "\r\n") };
              })
              .get();
          },
        });
      var Le = /%20/g,
        Ie = /#.*$/,
        Ne = /([?&])_=[^&]*/,
        qe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Re = /^(?:GET|HEAD)$/,
        Me = /^\/\//,
        Pe = {},
        Be = {},
        Xe = "*/".concat("*"),
        He = w.createElement("a");
      function Ue(t) {
        return function (e, r) {
          "string" != typeof e && ((r = e), (e = "*"));
          var n,
            o = 0,
            i = e.toLowerCase().match(M) || [];
          if (h(r))
            for (; (n = i[o++]); )
              "+" === n[0]
                ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(r))
                : (t[n] = t[n] || []).push(r);
        };
      }
      function Ze(t, e, r, n) {
        var o = {},
          i = t === Be;
        function a(l) {
          var s;
          return (
            (o[l] = !0),
            _.each(t[l] || [], function (t, l) {
              var d = l(e, r, n);
              return "string" != typeof d || i || o[d]
                ? i
                  ? !(s = d)
                  : void 0
                : (e.dataTypes.unshift(d), a(d), !1);
            }),
            s
          );
        }
        return a(e.dataTypes[0]) || (!o["*"] && a("*"));
      }
      function We(t, e) {
        var r,
          n,
          o = _.ajaxSettings.flatOptions || {};
        for (r in e) void 0 !== e[r] && ((o[r] ? t : n || (n = {}))[r] = e[r]);
        return n && _.extend(!0, t, n), t;
      }
      (He.href = Ce.href),
        _.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ce.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Ce.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Xe,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": _.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? We(We(t, _.ajaxSettings), e) : We(_.ajaxSettings, t);
          },
          ajaxPrefilter: Ue(Pe),
          ajaxTransport: Ue(Be),
          ajax: function (t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var n,
              o,
              i,
              a,
              l,
              s,
              d,
              m,
              c,
              p,
              f = _.ajaxSetup({}, e),
              u = f.context || f,
              g = f.context && (u.nodeType || u.jquery) ? _(u) : _.event,
              b = _.Deferred(),
              h = _.Callbacks("once memory"),
              x = f.statusCode || {},
              v = {},
              y = {},
              k = "canceled",
              T = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (d) {
                    if (!a)
                      for (a = {}; (e = qe.exec(i)); )
                        a[e[1].toLowerCase() + " "] = (
                          a[e[1].toLowerCase() + " "] || []
                        ).concat(e[2]);
                    e = a[t.toLowerCase() + " "];
                  }
                  return null == e ? null : e.join(", ");
                },
                getAllResponseHeaders: function () {
                  return d ? i : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == d &&
                      ((t = y[t.toLowerCase()] = y[t.toLowerCase()] || t),
                      (v[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == d && (f.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (d) T.always(t[T.status]);
                    else for (e in t) x[e] = [x[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || k;
                  return n && n.abort(e), C(0, e), this;
                },
              };
            if (
              (b.promise(T),
              (f.url = ((t || f.url || Ce.href) + "").replace(
                Me,
                Ce.protocol + "//"
              )),
              (f.type = e.method || e.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(M) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              s = w.createElement("a");
              try {
                (s.href = f.url),
                  (s.href = s.href),
                  (f.crossDomain =
                    He.protocol + "//" + He.host != s.protocol + "//" + s.host);
              } catch (t) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = _.param(f.data, f.traditional)),
              Ze(Pe, f, e, T),
              d)
            )
              return T;
            for (c in ((m = _.event && f.global) &&
              0 == _.active++ &&
              _.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !Re.test(f.type)),
            (o = f.url.replace(Ie, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (f.data = f.data.replace(Le, "+"))
              : ((p = f.url.slice(o.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((o += (De.test(o) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((o = o.replace(Ne, "$1")),
                  (p = (De.test(o) ? "&" : "?") + "_=" + Ee.guid++ + p)),
                (f.url = o + p)),
            f.ifModified &&
              (_.lastModified[o] &&
                T.setRequestHeader("If-Modified-Since", _.lastModified[o]),
              _.etag[o] && T.setRequestHeader("If-None-Match", _.etag[o])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              e.contentType) &&
              T.setRequestHeader("Content-Type", f.contentType),
            T.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + Xe + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              T.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (!1 === f.beforeSend.call(u, T, f) || d))
              return T.abort();
            if (
              ((k = "abort"),
              h.add(f.complete),
              T.done(f.success),
              T.fail(f.error),
              (n = Ze(Be, f, e, T)))
            ) {
              if (((T.readyState = 1), m && g.trigger("ajaxSend", [T, f]), d))
                return T;
              f.async &&
                0 < f.timeout &&
                (l = r.setTimeout(function () {
                  T.abort("timeout");
                }, f.timeout));
              try {
                (d = !1), n.send(v, C);
              } catch (t) {
                if (d) throw t;
                C(-1, t);
              }
            } else C(-1, "No Transport");
            function C(t, e, a, s) {
              var c,
                p,
                w,
                v,
                y,
                k = e;
              d ||
                ((d = !0),
                l && r.clearTimeout(l),
                (n = void 0),
                (i = s || ""),
                (T.readyState = 0 < t ? 4 : 0),
                (c = (200 <= t && t < 300) || 304 === t),
                a &&
                  (v = (function (t, e, r) {
                    for (
                      var n, o, i, a, l = t.contents, s = t.dataTypes;
                      "*" === s[0];

                    )
                      s.shift(),
                        void 0 === n &&
                          (n =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                      for (o in l)
                        if (l[o] && l[o].test(n)) {
                          s.unshift(o);
                          break;
                        }
                    if (s[0] in r) i = s[0];
                    else {
                      for (o in r) {
                        if (!s[0] || t.converters[o + " " + s[0]]) {
                          i = o;
                          break;
                        }
                        a || (a = o);
                      }
                      i = i || a;
                    }
                    if (i) return i !== s[0] && s.unshift(i), r[i];
                  })(f, T, a)),
                !c &&
                  -1 < _.inArray("script", f.dataTypes) &&
                  (f.converters["text script"] = function () {}),
                (v = (function (t, e, r, n) {
                  var o,
                    i,
                    a,
                    l,
                    s,
                    d = {},
                    m = t.dataTypes.slice();
                  if (m[1])
                    for (a in t.converters)
                      d[a.toLowerCase()] = t.converters[a];
                  for (i = m.shift(); i; )
                    if (
                      (t.responseFields[i] && (r[t.responseFields[i]] = e),
                      !s &&
                        n &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (s = i),
                      (i = m.shift()))
                    )
                      if ("*" === i) i = s;
                      else if ("*" !== s && s !== i) {
                        if (!(a = d[s + " " + i] || d["* " + i]))
                          for (o in d)
                            if (
                              (l = o.split(" "))[1] === i &&
                              (a = d[s + " " + l[0]] || d["* " + l[0]])
                            ) {
                              !0 === a
                                ? (a = d[o])
                                : !0 !== d[o] && ((i = l[0]), m.unshift(l[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && t.throws) e = a(e);
                          else
                            try {
                              e = a(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? t
                                  : "No conversion from " + s + " to " + i,
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(f, v, T, c)),
                c
                  ? (f.ifModified &&
                      ((y = T.getResponseHeader("Last-Modified")) &&
                        (_.lastModified[o] = y),
                      (y = T.getResponseHeader("etag")) && (_.etag[o] = y)),
                    204 === t || "HEAD" === f.type
                      ? (k = "nocontent")
                      : 304 === t
                      ? (k = "notmodified")
                      : ((k = v.state), (p = v.data), (c = !(w = v.error))))
                  : ((w = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
                (T.status = t),
                (T.statusText = (e || k) + ""),
                c ? b.resolveWith(u, [p, k, T]) : b.rejectWith(u, [T, k, w]),
                T.statusCode(x),
                (x = void 0),
                m &&
                  g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? p : w]),
                h.fireWith(u, [T, k]),
                m &&
                  (g.trigger("ajaxComplete", [T, f]),
                  --_.active || _.event.trigger("ajaxStop")));
            }
            return T;
          },
          getJSON: function (t, e, r) {
            return _.get(t, e, r, "json");
          },
          getScript: function (t, e) {
            return _.get(t, void 0, e, "script");
          },
        }),
        _.each(["get", "post"], function (t, e) {
          _[e] = function (t, r, n, o) {
            return (
              h(r) && ((o = o || n), (n = r), (r = void 0)),
              _.ajax(
                _.extend(
                  { url: t, type: e, dataType: o, data: r, success: n },
                  _.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        _.ajaxPrefilter(function (t) {
          var e;
          for (e in t.headers)
            "content-type" === e.toLowerCase() &&
              (t.contentType = t.headers[e] || "");
        }),
        (_._evalUrl = function (t, e, r) {
          return _.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (t) {
              _.globalEval(t, e, r);
            },
          });
        }),
        _.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (h(t) && (t = t.call(this[0])),
                (e = _(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return h(t)
              ? this.each(function (e) {
                  _(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = _(this),
                    r = e.contents();
                  r.length ? r.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = h(t);
            return this.each(function (r) {
              _(this).wrapAll(e ? t.call(this, r) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  _(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (_.expr.pseudos.hidden = function (t) {
          return !_.expr.pseudos.visible(t);
        }),
        (_.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (_.ajaxSettings.xhr = function () {
          try {
            return new r.XMLHttpRequest();
          } catch (t) {}
        });
      var Ye = { 0: 200, 1223: 204 },
        Fe = _.ajaxSettings.xhr();
      (b.cors = !!Fe && "withCredentials" in Fe),
        (b.ajax = Fe = !!Fe),
        _.ajaxTransport(function (t) {
          var e, n;
          if (b.cors || (Fe && !t.crossDomain))
            return {
              send: function (o, i) {
                var a,
                  l = t.xhr();
                if (
                  (l.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (a in t.xhrFields) l[a] = t.xhrFields[a];
                for (a in (t.mimeType &&
                  l.overrideMimeType &&
                  l.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  l.setRequestHeader(a, o[a]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e = n = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null),
                      "abort" === t
                        ? l.abort()
                        : "error" === t
                        ? "number" != typeof l.status
                          ? i(0, "error")
                          : i(l.status, l.statusText)
                        : i(
                            Ye[l.status] || l.status,
                            l.statusText,
                            "text" !== (l.responseType || "text") ||
                              "string" != typeof l.responseText
                              ? { binary: l.response }
                              : { text: l.responseText },
                            l.getAllResponseHeaders()
                          ));
                  };
                }),
                  (l.onload = e()),
                  (n = l.onerror = l.ontimeout = e("error")),
                  void 0 !== l.onabort
                    ? (l.onabort = n)
                    : (l.onreadystatechange = function () {
                        4 === l.readyState &&
                          r.setTimeout(function () {
                            e && n();
                          });
                      }),
                  (e = e("abort"));
                try {
                  l.send((t.hasContent && t.data) || null);
                } catch (o) {
                  if (e) throw o;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        _.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        _.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return _.globalEval(t), t;
            },
          },
        }),
        _.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        _.ajaxTransport("script", function (t) {
          var e, r;
          if (t.crossDomain || t.scriptAttrs)
            return {
              send: function (n, o) {
                (e = _("<script>")
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (r = function (t) {
                      e.remove(),
                        (r = null),
                        t && o("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  w.head.appendChild(e[0]);
              },
              abort: function () {
                r && r();
              },
            };
        });
      var $e,
        Ke = [],
        Ve = /(=)\?(?=&|$)|\?\?/;
      _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Ke.pop() || _.expando + "_" + Ee.guid++;
          return (this[t] = !0), t;
        },
      }),
        _.ajaxPrefilter("json jsonp", function (t, e, n) {
          var o,
            i,
            a,
            l =
              !1 !== t.jsonp &&
              (Ve.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Ve.test(t.data) &&
                  "data");
          if (l || "jsonp" === t.dataTypes[0])
            return (
              (o = t.jsonpCallback = h(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
              l
                ? (t[l] = t[l].replace(Ve, "$1" + o))
                : !1 !== t.jsonp &&
                  (t.url += (De.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
              (t.converters["script json"] = function () {
                return a || _.error(o + " was not called"), a[0];
              }),
              (t.dataTypes[0] = "json"),
              (i = r[o]),
              (r[o] = function () {
                a = arguments;
              }),
              n.always(function () {
                void 0 === i ? _(r).removeProp(o) : (r[o] = i),
                  t[o] && ((t.jsonpCallback = e.jsonpCallback), Ke.push(o)),
                  a && h(i) && i(a[0]),
                  (a = i = void 0);
              }),
              "script"
            );
        }),
        (b.createHTMLDocument =
          ((($e = w.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === $e.childNodes.length)),
        (_.parseHTML = function (t, e, r) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((r = e), (e = !1)),
              e ||
                (b.createHTMLDocument
                  ? (((n = (e = w.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = w.location.href),
                    e.head.appendChild(n))
                  : (e = w)),
              (i = !r && []),
              (o = A.exec(t))
                ? [e.createElement(o[1])]
                : ((o = kt([t], e, i)),
                  i && i.length && _(i).remove(),
                  _.merge([], o.childNodes)));
          var n, o, i;
        }),
        (_.fn.load = function (t, e, r) {
          var n,
            o,
            i,
            a = this,
            l = t.indexOf(" ");
          return (
            -1 < l && ((n = we(t.slice(l))), (t = t.slice(0, l))),
            h(e)
              ? ((r = e), (e = void 0))
              : e && "object" == typeof e && (o = "POST"),
            0 < a.length &&
              _.ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (i = arguments),
                    a.html(n ? _("<div>").append(_.parseHTML(t)).find(n) : t);
                })
                .always(
                  r &&
                    function (t, e) {
                      a.each(function () {
                        r.apply(this, i || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        (_.expr.pseudos.animated = function (t) {
          return _.grep(_.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (_.offset = {
          setOffset: function (t, e, r) {
            var n,
              o,
              i,
              a,
              l,
              s,
              d = _.css(t, "position"),
              m = _(t),
              c = {};
            "static" === d && (t.style.position = "relative"),
              (l = m.offset()),
              (i = _.css(t, "top")),
              (s = _.css(t, "left")),
              ("absolute" === d || "fixed" === d) &&
              -1 < (i + s).indexOf("auto")
                ? ((a = (n = m.position()).top), (o = n.left))
                : ((a = parseFloat(i) || 0), (o = parseFloat(s) || 0)),
              h(e) && (e = e.call(t, r, _.extend({}, l))),
              null != e.top && (c.top = e.top - l.top + a),
              null != e.left && (c.left = e.left - l.left + o),
              "using" in e
                ? e.using.call(t, c)
                : ("number" == typeof c.top && (c.top += "px"),
                  "number" == typeof c.left && (c.left += "px"),
                  m.css(c));
          },
        }),
        _.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    _.offset.setOffset(this, t, e);
                  });
            var e,
              r,
              n = this[0];
            return n
              ? n.getClientRects().length
                ? ((e = n.getBoundingClientRect()),
                  (r = n.ownerDocument.defaultView),
                  { top: e.top + r.pageYOffset, left: e.left + r.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                r,
                n = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === _.css(n, "position"))
                e = n.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    r = n.ownerDocument,
                    t = n.offsetParent || r.documentElement;
                  t &&
                  (t === r.body || t === r.documentElement) &&
                  "static" === _.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== n &&
                  1 === t.nodeType &&
                  (((o = _(t).offset()).top += _.css(t, "borderTopWidth", !0)),
                  (o.left += _.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - o.top - _.css(n, "marginTop", !0),
                left: e.left - o.left - _.css(n, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === _.css(t, "position");

              )
                t = t.offsetParent;
              return t || at;
            });
          },
        }),
        _.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var r = "pageYOffset" === e;
            _.fn[t] = function (n) {
              return W(
                this,
                function (t, n, o) {
                  var i;
                  if (
                    (x(t) ? (i = t) : 9 === t.nodeType && (i = t.defaultView),
                    void 0 === o)
                  )
                    return i ? i[e] : t[n];
                  i
                    ? i.scrollTo(r ? i.pageXOffset : o, r ? o : i.pageYOffset)
                    : (t[n] = o);
                },
                t,
                n,
                arguments.length
              );
            };
          }
        ),
        _.each(["top", "left"], function (t, e) {
          _.cssHooks[e] = Wt(b.pixelPosition, function (t, r) {
            if (r)
              return (r = Zt(t, e)), Bt.test(r) ? _(t).position()[e] + "px" : r;
          });
        }),
        _.each({ Height: "height", Width: "width" }, function (t, e) {
          _.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (r, n) {
              _.fn[n] = function (o, i) {
                var a = arguments.length && (r || "boolean" != typeof o),
                  l = r || (!0 === o || !0 === i ? "margin" : "border");
                return W(
                  this,
                  function (e, r, o) {
                    var i;
                    return x(e)
                      ? 0 === n.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((i = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          i["scroll" + t],
                          e.body["offset" + t],
                          i["offset" + t],
                          i["client" + t]
                        ))
                      : void 0 === o
                      ? _.css(e, r, l)
                      : _.style(e, r, o, l);
                  },
                  e,
                  a ? o : void 0,
                  a
                );
              };
            }
          );
        }),
        _.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            _.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        _.fn.extend({
          bind: function (t, e, r) {
            return this.on(t, null, e, r);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, r, n) {
            return this.on(e, t, r, n);
          },
          undelegate: function (t, e, r) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", r);
          },
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        _.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, e) {
            _.fn[e] = function (t, r) {
              return 0 < arguments.length
                ? this.on(e, null, t, r)
                : this.trigger(e);
            };
          }
        );
      var Ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (_.proxy = function (t, e) {
        var r, n, o;
        if (("string" == typeof e && ((r = t[e]), (e = t), (t = r)), h(t)))
          return (
            (n = l.call(arguments, 2)),
            ((o = function () {
              return t.apply(e || this, n.concat(l.call(arguments)));
            }).guid = t.guid = t.guid || _.guid++),
            o
          );
      }),
        (_.holdReady = function (t) {
          t ? _.readyWait++ : _.ready(!0);
        }),
        (_.isArray = Array.isArray),
        (_.parseJSON = JSON.parse),
        (_.nodeName = S),
        (_.isFunction = h),
        (_.isWindow = x),
        (_.camelCase = K),
        (_.type = k),
        (_.now = Date.now),
        (_.isNumeric = function (t) {
          var e = _.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        (_.trim = function (t) {
          return null == t ? "" : (t + "").replace(Ge, "");
        }),
        void 0 ===
          (n = function () {
            return _;
          }.apply(e, [])) || (t.exports = n);
      var Je = r.jQuery,
        Qe = r.$;
      return (
        (_.noConflict = function (t) {
          return (
            r.$ === _ && (r.$ = Qe), t && r.jQuery === _ && (r.jQuery = Je), _
          );
        }),
        void 0 === o && (r.jQuery = r.$ = _),
        _
      );
    });
  },
  function (t, e, r) {
    var n = r(1),
      o = r(10);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (n(o, i), o.locals ? o.locals : {});
    t.exports = a;
  },
  function (t, e, r) {
    (e = r(2)(!1)).push([
      t.i,
      '@charset "UTF-8";\n\n/*!\n * animate.css -https://daneden.github.io/animate.css/\n * Version - 3.7.2\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2019 Daniel Eden\n */\n\n@-webkit-keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.pulse{-webkit-animation-name:pulse;animation-name:pulse}@-webkit-keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}.headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes heartBeat{0%{-webkit-transform:scale(1);transform:scale(1)}14%{-webkit-transform:scale(1.3);transform:scale(1.3)}28%{-webkit-transform:scale(1);transform:scale(1)}42%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes heartBeat{0%{-webkit-transform:scale(1);transform:scale(1)}14%{-webkit-transform:scale(1.3);transform:scale(1.3)}28%{-webkit-transform:scale(1);transform:scale(1)}42%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(1);transform:scale(1)}}.heartBeat{-webkit-animation-name:heartBeat;animation-name:heartBeat;-webkit-animation-duration:1.3s;animation-duration:1.3s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}.bounceIn{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes flip{0%{-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{0%{-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX}@-webkit-keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}.flipOutX{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}.flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY}@-webkit-keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn}@-webkit-keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}@-webkit-keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}@-webkit-keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}@-webkit-keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}@-webkit-keyframes rotateOut{0%{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}@keyframes rotateOut{0%{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut}@-webkit-keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft}@-webkit-keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight}@-webkit-keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft}@-webkit-keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}@keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight}@-webkit-keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}.hinge{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-name:hinge;animation-name:hinge}@-webkit-keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.jackInTheBox{-webkit-animation-name:jackInTheBox;animation-name:jackInTheBox}@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animated.delay-1s{-webkit-animation-delay:1s;animation-delay:1s}.animated.delay-2s{-webkit-animation-delay:2s;animation-delay:2s}.animated.delay-3s{-webkit-animation-delay:3s;animation-delay:3s}.animated.delay-4s{-webkit-animation-delay:4s;animation-delay:4s}.animated.delay-5s{-webkit-animation-delay:5s;animation-delay:5s}.animated.fast{-webkit-animation-duration:.8s;animation-duration:.8s}.animated.faster{-webkit-animation-duration:.5s;animation-duration:.5s}.animated.slow{-webkit-animation-duration:2s;animation-duration:2s}.animated.slower{-webkit-animation-duration:3s;animation-duration:3s}@media (prefers-reduced-motion:reduce),(print){.animated{-webkit-animation-duration:1ms!important;animation-duration:1ms!important;-webkit-transition-duration:1ms!important;transition-duration:1ms!important;-webkit-animation-iteration-count:1!important;animation-iteration-count:1!important}}',
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, r) {
    var n = r(1),
      o = r(12);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (n(o, i), o.locals ? o.locals : {});
    t.exports = a;
  },
  function (t, e, r) {
    (e = r(2)(!1)).push([
      t.i,
      "/* This is the main CSS stylesheet that will get loaded on every page */\n\n/* CSS to overwrite any bootstrap */\n.bs-example {\n    margin-bottom: 20px;\n}\n.center {\n    margin: auto;\n    width: 50%;\n    text-align: center;\n}\n/* overwrite bootstrap blue primary color */\n.btn {\n    background-color: #1632aa;\n    color: white;\n    border-color: #112787;\n}\n.btn:hover {\n    background-color: #112787; /* Green */\n}\n.p4h {\n    color:#1632AA;\n}\n.p4h-full {\n    max-width: 900px; \n}\n.p4h-btn {\n    cursor:pointer;\n    display: block;\n    background-color: transparent; /* same color as #1632AA with low opacity */\n    box-shadow: 0px 4px 7px 0px rgba(22,50,170, 0.10);/* same color as #1632AA with low opacity */\n    text-align: center;\n    border: thin;\n    border-style: solid;\n    border-color: rgba(22,80,200,0.20); \n}\n.p4h-pad {\n    padding:6px;\n    /*margin-right:6px !important;\n    margin-left:6px !important;*/\n    padding-right: 14px;\n    padding-left: 14px;\n    margin: 7px 0px 5px 0;\n}\n\n    \n\n\n  ",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, r) {
    var n = r(1),
      o = r(14);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (n(o, i), o.locals ? o.locals : {});
    t.exports = a;
  },
  function (t, e, r) {
    (e = r(2)(!1)).push([
      t.i,
      "/* haitian flag blue: #1632AA\n/* haitian flag red: #B30D2C\n*/ \n@media only screen  {\n  #navbar-container {\n    padding-right: 5px;\n    border-radius: 3px;\n    background-color: rgba(179,13,44,0.95);\n    color:rgb(255,255,255,1.0);\n    min-height: 10px;\n    margin-bottom: 0;\n  }\n  a.nav-item{\n    padding:5px;\n    color:white !important;\n  }\n  a.nav-item:hover {\n    border-top: thin;\n    border-bottom: thin;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    background-color: rgba(189,23,54,1.00);\n    border-color:rgb(255,255,255,0.4); \n    font-weight:bolder;\n  }\n  .navbar-toggler {\n    height: 40%;\n  }\n  #nav-logo-p4h {\n    margin-bottom: auto;\n  }\n}\n",
      "",
    ]),
      (t.exports = e);
  },
]);
//# sourceMappingURL=main.js.map
