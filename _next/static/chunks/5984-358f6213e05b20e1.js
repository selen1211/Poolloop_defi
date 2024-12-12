"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5984],
  {
    16463: function (e, t, n) {
      var r = n(71169);
      n.o(r, "redirect") &&
        n.d(t, {
          redirect: function () {
            return r.redirect;
          },
        }),
        n.o(r, "usePathname") &&
          n.d(t, {
            usePathname: function () {
              return r.usePathname;
            },
          }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        n.o(r, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    34492: function (e, t, n) {
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(2265),
        c =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = r.useState,
        o = r.useEffect,
        s = r.useLayoutEffect,
        u = r.useDebugValue;
      function a(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !c(e, n);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = i({ inst: { value: n, getSnapshot: t } }),
                c = r[0].inst,
                l = r[1];
              return (
                s(
                  function () {
                    (c.value = n), (c.getSnapshot = t), a(c) && l({ inst: c });
                  },
                  [e, n, t]
                ),
                o(
                  function () {
                    return (
                      a(c) && l({ inst: c }),
                      e(function () {
                        a(c) && l({ inst: c });
                      })
                    );
                  },
                  [e]
                ),
                u(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
    },
    85107: function (e, t, n) {
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(2265),
        c = n(10554),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = c.useSyncExternalStore,
        s = r.useRef,
        u = r.useEffect,
        a = r.useMemo,
        l = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, c) {
        var d = s(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var h = o(
          e,
          (d = a(
            function () {
              function e(e) {
                if (!u) {
                  if (
                    ((u = !0), (o = e), (e = r(e)), void 0 !== c && f.hasValue)
                  ) {
                    var t = f.value;
                    if (c(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), i(o, e))) return t;
                var n = r(e);
                return void 0 !== c && c(t, n) ? t : ((o = e), (s = n));
              }
              var o,
                s,
                u = !1,
                a = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === a
                  ? void 0
                  : function () {
                      return e(a());
                    },
              ];
            },
            [t, n, r, c]
          ))[0],
          d[1]
        );
        return (
          u(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h]
          ),
          l(h),
          h
        );
      };
    },
    10554: function (e, t, n) {
      e.exports = n(34492);
    },
    35006: function (e, t, n) {
      e.exports = n(85107);
    },
    79886: function (e, t, n) {
      n.d(t, {
        D: function () {
          return r;
        },
      });
      function r(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = n?.accounts,
          c = r?.[0],
          i = e.chains.find((e) => e.id === n?.chainId),
          o = e.state.status;
        switch (o) {
          case "connected":
            return {
              address: c,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: o,
            };
          case "reconnecting":
            return {
              address: c,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!c,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: o,
            };
          case "connecting":
            return {
              address: c,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: o,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: o,
            };
        }
      }
    },
    30807: function (e, t, n) {
      n.d(t, {
        u: function () {
          return i;
        },
      });
      var r = n(90331),
        c = n(79886);
      function i(e, t) {
        let { onChange: n } = t;
        return e.subscribe(() => (0, c.D)(e), n, {
          equalityFn(e, t) {
            let { connector: n, ...c } = e,
              { connector: i, ...o } = t;
            return (0, r.v)(c, o) && n?.id === i?.id && n?.uid === i?.uid;
          },
        });
      }
    },
    66564: function (e, t, n) {
      n.d(t, {
        G: function () {
          return u;
        },
      });
      var r,
        c,
        i = n(52520);
      let o = () => `@wagmi/core@${i.i}`;
      var s = function (e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      };
      class u extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return o();
        }
        constructor(e, t = {}) {
          super(),
            r.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof u
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            c = (t.cause instanceof u && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(c
              ? [
                  `Docs: ${this.docsBaseUrl}${c}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = c),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return s(this, r, "m", c).call(this, this, e);
        }
      }
      (r = new WeakSet()),
        (c = function e(t, n) {
          return n?.(t)
            ? t
            : t.cause
            ? s(this, r, "m", e).call(this, t.cause, n)
            : t;
        });
    },
    90331: function (e, t, n) {
      n.d(t, {
        v: function () {
          return function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              let r, c;
              if (t.constructor !== n.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(n)) {
                if ((r = t.length) !== n.length) return !1;
                for (c = r; 0 != c--; ) if (!e(t[c], n[c])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === n.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === n.toString();
              let i = Object.keys(t);
              if ((r = i.length) !== Object.keys(n).length) return !1;
              for (c = r; 0 != c--; )
                if (!Object.prototype.hasOwnProperty.call(n, i[c])) return !1;
              for (c = r; 0 != c--; ) {
                let r = i[c];
                if (r && !e(t[r], n[r])) return !1;
              }
              return !0;
            }
            return t != t && n != n;
          };
        },
      });
    },
    52520: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = "2.14.6";
    },
    40181: function (e, t, n) {
      n.d(t, {
        V: function () {
          return s;
        },
        F: function () {
          return u;
        },
      });
      var r = n(2265);
      let c = !1;
      async function i(e, t = {}) {
        let n;
        if (c) return [];
        (c = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let r = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              r.push(t);
          }
        else r.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let i = {};
        for (let [, t] of e.state.connections) i[t.connector.id] = 1;
        n && (i[n] = 0);
        let o =
            Object.keys(i).length > 0
              ? [...r].sort((e, t) => (i[e.id] ?? 10) - (i[t.id] ?? 10))
              : r,
          s = !1,
          u = [],
          a = [];
        for (let t of o) {
          let n = await t.getProvider().catch(() => void 0);
          if (!n || a.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(s ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: s ? e.current : t.uid, connections: n };
            }),
            u.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            a.push(n),
            (s = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (s
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (c = !1),
          u
        );
      }
      function o(e) {
        let {
            children: t,
            config: n,
            initialState: c,
            reconnectOnMount: o = !0,
          } = e,
          { onMount: s } = (function (e, t) {
            let { initialState: n, reconnectOnMount: r } = t;
            return (
              n &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...n,
                  chainId: e.chains.some((e) => e.id === n.chainId)
                    ? n.chainId
                    : e.chains[0].id,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        let n = new Set();
                        for (let e of t ?? [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              n.add(t);
                        let r = [];
                        for (let t of e._internal.mipd?.getProviders() ?? []) {
                          if (n.has(t.info.rdns)) continue;
                          let c =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            i = e._internal.connectors.setup(c);
                          r.push(i);
                        }
                        return [...t, ...r];
                      })),
                    r
                      ? i(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: c, reconnectOnMount: o });
        n._internal.ssr || s();
        let u = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (u.current && n._internal.ssr)
              return (
                s(),
                () => {
                  u.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let s = (0, r.createContext)(void 0);
      function u(e) {
        let { children: t, config: n } = e;
        return (0, r.createElement)(
          o,
          e,
          (0, r.createElement)(s.Provider, { value: n }, t)
        );
      }
    },
    26735: function (e, t, n) {
      n.d(t, {
        m: function () {
          return l;
        },
      });
      var r = n(30807),
        c = n(79886),
        i = n(94956),
        o = n(90331),
        s = n(2265),
        u = n(35006);
      let a = (e) => "object" == typeof e && !Array.isArray(e);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, i.Z)(e);
        return (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : o.v,
            c = (0, s.useRef)([]),
            i = (0, u.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (a(e) && a(t) && c.current.length) {
                  for (let n of c.current) if (!r(e[n], t[n])) return !1;
                  return !0;
                }
                return r(e, t);
              }
            );
          return (0, s.useMemo)(() => {
            if (a(i)) {
              let e = { ...i },
                t = {};
              for (let [n, r] of Object.entries(e))
                t = {
                  ...t,
                  [n]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (c.current.includes(n) || c.current.push(n), r),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return i;
          }, [i]);
        })(
          (e) => (0, r.u)(t, { onChange: e }),
          () => (0, c.D)(t)
        );
      }
    },
    94956: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(2265),
        c = n(40181),
        i = n(66564);
      let o = () => "wagmi@2.12.32";
      class s extends i.G {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return o();
        }
      }
      class u extends s {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function a() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n =
            null !== (e = t.config) && void 0 !== e
              ? e
              : (0, r.useContext)(c.V);
        if (!n) throw new u();
        return n;
      }
    },
  },
]);
