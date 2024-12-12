"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3834],
  {
    33337: function (e, t, n) {
      n.d(t, {
        dw: function () {
          return i;
        },
        eZ: function () {
          return o;
        },
        mP: function () {
          return r;
        },
      });
      var a = n(16303),
        s = n(53466);
      let i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 20;
          return (0, s.cp)(
            ""
              .concat(a.Z.LEADERBOARD, "?page=")
              .concat(t, "&limit=")
              .concat(n)
              .concat(e ? "&address=".concat(e) : "")
          );
        },
        r = (e) =>
          (0, s.cp)(
            "".concat(a.Z.STATS, "?").concat(e ? "address=".concat(e) : "")
          ),
        o = () => (0, s.cp)(a.Z.MARKET_CAP_PRICE);
    },
    53466: function (e, t, n) {
      n.d(t, {
        Eg: function () {
          return y;
        },
        cp: function () {
          return u;
        },
        vJ: function () {
          return c;
        },
      });
      var a = n(58421),
        s = n(2265),
        i = n(76287),
        r = n.n(i),
        o = n(22223),
        l = n.n(o);
      (0, s.cache)(() => new a.S());
      let p = { headers: { "Content-Type": "application/json" } },
        d = (e, t) => {
          var n;
          let a = t || [];
          return Array.isArray(a) && (null == a ? void 0 : a.length) > 1
            ? r()(
                (null === (n = l()(a || [])) || void 0 === n
                  ? void 0
                  : n.Message) || ""
              )
            : r()(
                (null == t ? void 0 : t.Message)
                  ? "".concat(null == t ? void 0 : t.Message)
                  : "Error:".concat(e.status, " - ").concat(e.statusText)
              );
        };
      async function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 ? arguments[1] : void 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
        try {
          let a = e;
          t && (a = a + "?" + new URLSearchParams(t));
          let s = m(n),
            i = await fetch(a, s),
            r = await i.json();
          if (!i.ok) throw Error(d(i, r));
          return r;
        } catch (e) {
          return Promise.reject(e);
        }
      }
      async function y() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
        try {
          let a = m(n),
            s = { method: "POST", body: JSON.stringify(t), ...a },
            i = await fetch(e, s),
            r = await i.json();
          if (!i.ok) throw Error(d(i, r));
          return r;
        } catch (e) {
          return Promise.reject(e);
        }
      }
      async function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
        try {
          let a = m(n),
            s = { method: "PUT", body: JSON.stringify(t), ...a },
            i = await fetch(e, s),
            r = await i.json();
          if (!i.ok) throw Error(d(i, r));
          return r;
        } catch (e) {
          return Promise.reject(e);
        }
      }
      let m = (e) => e;
    },
    67458: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var a = n(41287),
        s = n(33337),
        i = n(7815),
        r = n(80203),
        o = n.n(r),
        l = n(10462),
        p = n.n(l),
        d = n(7851),
        u = n.n(d);
      function y(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
          n = i.i.LEADERBOARD,
          {
            data: r,
            error: l,
            fetchNextPage: d,
            hasNextPage: y,
            isFetching: c,
            isFetchingNextPage: m,
            refetch: h,
            status: b,
          } = (0, a.N)({
            queryKey: [e ? "".concat(n, "-").concat(e) : n],
            queryFn: async (n) => {
              let a = n.pageParam;
              return await (0, s.dw)(e, a + 1, t);
            },
            getNextPageParam: (e) => {
              var n, a;
              if (
                !(
                  (null !==
                    (a =
                      null == e
                        ? void 0
                        : null === (n = e.data) || void 0 === n
                        ? void 0
                        : n.length) && void 0 !== a
                    ? a
                    : 0) < t
                )
              )
                return e.page;
            },
            initialPageParam: 0,
            select: (e) => {
              var t;
              return {
                data: [...p()(u()(e.pages, "data"))].reverse(),
                page: [...e.pageParams].reverse(),
                user:
                  (null === (t = o()(e.pages, "user")) || void 0 === t
                    ? void 0
                    : t.user) || {},
              };
            },
          });
        return {
          data: (null == r ? void 0 : r.data) || [],
          user: (null == r ? void 0 : r.user) || {},
          error: l,
          isLoading: c || m,
          refetch: h,
          fetchNextPage: d,
          hasNextPage: y,
        };
      }
    },
    16906: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var a = n(85020),
        s = n(76351),
        i = n(33337),
        r = n(7815),
        o = n(24735),
        l = n.n(o);
      function p() {
        let {
          isLoading: e,
          isError: t,
          data: n = {},
          error: o,
          refetch: p,
        } = (0, s.a)({
          queryKey: [r.i.PRICE_API],
          queryFn: async () => await (0, i.eZ)(),
          refetchOnWindowFocus: !1,
          refetchInterval: a.mg.FIVE_MIN,
        });
        return {
          data: n,
          safeData: l()(n, ["createdAt", "updatedAt", "__v", "_id"]),
          error: o,
          isLoading: e,
          isError: t,
          refetch: p,
        };
      }
    },
    24307: function (e, t, n) {
      n.d(t, {
        RO: function () {
          return d;
        },
        RZ: function () {
          return p;
        },
        So: function () {
          return y;
        },
        VF: function () {
          return o;
        },
        X7: function () {
          return c;
        },
        Xy: function () {
          return u;
        },
        gk: function () {
          return r;
        },
        x1: function () {
          return l;
        },
      });
      var a = n(60954),
        s = n(16303),
        i = n(53466);
      let r = {
          mutationFn: (e) => (0, i.vJ)(s.Z.GENERATE_REFERRAL_CODE, e),
          onError: (e) => {
            (0, a.CF)({
              title: "Error",
              description:
                "Failed to generate a referral code, should have made at least one deposit of any amount!",
              type: "error",
            });
          },
          retry: !1,
        },
        o = {
          mutationFn: (e) => (0, i.Eg)(s.Z.GET_REFERRAL_CODE, e),
          onError: (e) => {
            (0, a.CF)({
              title: "Error",
              description: (null == e ? void 0 : e.message) || "",
              type: "error",
            });
          },
          retry: !1,
        },
        l = {
          mutationFn: (e) =>
            (0, i.cp)(
              "".concat(s.Z.VALIDATE_REFERRAL_CODE, "?code=").concat(e)
            ),
          onError: (e) => {
            (0, a.CF)({
              title: "Error",
              description: (null == e ? void 0 : e.message) || "Ref code",
              type: "error",
            });
          },
          retry: !1,
        },
        p = {
          mutationFn: (e) =>
            (0, i.cp)(
              "".concat(s.Z.HAS_REFERRAL_CODE, "?walletAddress=").concat(e)
            ),
          onError: (e) => {
            (0, a.CF)({
              title: "Error",
              description: (null == e ? void 0 : e.message) || "Ref code",
              type: "error",
            });
          },
          retry: !1,
        },
        d = {
          mutationFn: (e) => (0, i.Eg)(s.Z.ACTIVATE_NFT, e),
          onError: (e) => {
            (0, a.CF)({
              title: "Error",
              description: (null == e ? void 0 : e.message) || "",
              type: "error",
            });
          },
          retry: !1,
        },
        u = {
          mutationFn: (e) => (0, i.Eg)(s.Z.ACTIVATE_CANVAS, e),
          onError: (e) => {
            (0, a.CF)({
              title: "Error",
              description: (null == e ? void 0 : e.message) || "",
              type: "error",
            });
          },
          retry: !1,
        },
        y = {
          mutationFn: (e) =>
            (0, i.cp)(
              ""
                .concat(s.Z.ZERO_X_PRICE, "?chainId=")
                .concat(e.chainId, "&sellToken=")
                .concat(e.sellToken, "&sellAmount=")
                .concat(e.sellAmount, "&slippage=")
                .concat(e.slippage)
            ),
          onError: (e) => {
            (0, a.CF)({
              title: "Error 0x API",
              description:
                (null == e ? void 0 : e.message) || "Failed to get 0x price",
              type: "error",
            });
          },
          retry: !1,
        },
        c = {
          mutationFn: (e) =>
            (0, i.cp)(
              ""
                .concat(s.Z.KYBER_QUOTE, "?project=")
                .concat(e.project, "&sellToken=")
                .concat(e.sellToken, "&sellAmount=")
                .concat(e.sellAmount, "&slippage=")
                .concat(e.slippage)
            ),
          onError: (e) => {
            (0, a.CF)({
              title: "Error Kyberswap API",
              description:
                (null == e ? void 0 : e.message) ||
                "Failed to get Kyberswap price",
              type: "error",
            });
          },
          retry: !1,
        };
    },
    7815: function (e, t, n) {
      n.d(t, {
        i: function () {
          return a;
        },
      });
      let a = {
        STATS: "stats",
        PRICE_API: "marketcap",
        LEADERBOARD: "leaderboard",
      };
    },
    84017: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(76351),
        s = n(33337),
        i = n(85020),
        r = n(7815);
      function o(e) {
        let t = r.i.STATS,
          {
            isLoading: n,
            isError: o,
            data: l = {},
            error: p,
            refetch: d,
          } = (0, a.a)({
            queryKey: [e ? "".concat(t, "-").concat(e) : t],
            queryFn: async () => await (0, s.mP)(e),
            refetchOnWindowFocus: !1,
            refetchInterval: i.mg.FIVE_MIN,
          });
        return { data: l, error: p, isLoading: n, isError: o, refetch: d };
      }
    },
    12531: function (e, t, n) {
      n.d(t, {
        AW: function () {
          return d;
        },
        Cu: function () {
          return r;
        },
        OE: function () {
          return p;
        },
        Vs: function () {
          return o;
        },
        j2: function () {
          return l;
        },
        vd: function () {
          return i;
        },
      });
      var a = n(57437),
        s = n(60954);
      let i = (e) =>
          (0, s.CF)({
            title: "Wrong Network!",
            description: "Please Connect to Mainnet chain to use the app",
            type: "error",
            icon: (0, a.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "32px",
              height: "32px",
              viewBox: "0 0 24 24",
              fill: "#5f6368",
              children: (0, a.jsx)("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z",
              }),
            }),
            action: (0, a.jsx)("svg", {
              className: "icon-action h-6 w-10 mx-auto",
              xmlns: "http://www.w3.org/2000/svg",
              onClick: () => e(),
              children: (0, a.jsx)("path", {
                xmlns: "http://www.w3.org/2000/svg",
                d: "m21.545 14.477.016.01.079.06.018.016c.024.021.048.043.07.067l-.082-.078a1.008 1.008 0 0 1 .324.52c.02.077.03.16.03.244v4.737a1 1 0 0 1-2 0v-1.971C17.62 20.772 15.441 22 11.952 22A9.945 9.945 0 0 1 2 12.047V12a1 1 0 0 1 2 0v.047A7.945 7.945 0 0 0 11.953 20c2.987 0 4.728-1.07 6.928-3.684h-2.618a1 1 0 0 1-.993-.884l-.007-.116a1 1 0 0 1 1-1H21l.07.002.031.003-.101-.005a1.006 1.006 0 0 1 .536.155l.01.006zM12.047 2C17.534 2 22 6.482 22 12a1 1 0 0 1-2 0c0-4.415-3.572-8-7.953-8-3.03 0-4.752 1.04-6.956 3.682l2.646.002a1 1 0 0 1 .993.884l.007.116a1 1 0 0 1-1 1H2.96l-.028-.002-.008-.001a.87.87 0 0 1-.137-.02l-.028-.006-.028-.007a.996.996 0 0 1-.164-.062l-.103-.058-.096-.069a1.008 1.008 0 0 1-.158-.162l-.034-.046-.035-.054a.873.873 0 0 1-.05-.097l-.024-.056a.908.908 0 0 1-.058-.223l-.005-.051A1.04 1.04 0 0 1 2 8.695V3.947a1 1 0 1 1 2 0v1.934C6.373 3.19 8.527 2 12.047 2z",
                fill: "#000",
                fillRule: "nonzero",
                opacity: ".7",
              }),
            }),
          }),
        r = () =>
          (0, s.CF)({
            title: "Yaay",
            description: "You have successfully deposited",
            type: "success",
            icon: (0, a.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "32px",
              height: "32px",
              viewBox: "0 0 24 24",
              fill: "#00FF00",
              children: [
                (0, a.jsx)("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                (0, a.jsx)("path", {
                  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z",
                }),
              ],
            }),
          }),
        o = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "success";
          "failed" === e
            ? (0, s.CF)({
                title: "Error",
                description: "Failed, the withdraw was unsuccessfully!",
                type: "error",
                icon: (0, a.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "32px",
                  height: "32px",
                  viewBox: "0 0 24 24",
                  fill: "#5f6368",
                  children: (0, a.jsx)("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z",
                  }),
                }),
              })
            : (0, s.CF)({
                title: "Yaay",
                description: "You have successfully withdrawn",
                type: "success",
                icon: (0, a.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "32px",
                  height: "32px",
                  viewBox: "0 0 24 24",
                  fill: "#00FF00",
                  children: [
                    (0, a.jsx)("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    (0, a.jsx)("path", {
                      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z",
                    }),
                  ],
                }),
              });
        },
        l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "success";
          "failed" === e
            ? (0, s.CF)({
                title: "Error",
                description: "Failed, the action was unsuccessful!",
                type: "error",
                icon: (0, a.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "32px",
                  height: "32px",
                  viewBox: "0 0 24 24",
                  fill: "#5f6368",
                  children: (0, a.jsx)("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z",
                  }),
                }),
              })
            : (0, s.CF)({
                title: "Yaay",
                description: "You have successfully added WETH",
                type: "success",
                icon: (0, a.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "32px",
                  height: "32px",
                  viewBox: "0 0 24 24",
                  fill: "#00FF00",
                  children: [
                    (0, a.jsx)("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    (0, a.jsx)("path", {
                      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z",
                    }),
                  ],
                }),
              });
        },
        p = () =>
          (0, s.CF)({
            title: "Yaay",
            description: "You activated the Loop Canvas Badge.",
            type: "success",
            icon: (0, a.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "32px",
              height: "32px",
              viewBox: "0 0 24 24",
              fill: "#00FF00",
              children: [
                (0, a.jsx)("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                (0, a.jsx)("path", {
                  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z",
                }),
              ],
            }),
          }),
        d = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "success",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "mint";
          "failed" === e
            ? (0, s.CF)({
                title: "Error",
                description:
                  "mint" === t
                    ? "Failed, minting action was unsuccessful!"
                    : "Failed, mint conversion action was unsuccessful!",
                type: "error",
                icon: (0, a.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "32px",
                  height: "32px",
                  viewBox: "0 0 24 24",
                  fill: "#5f6368",
                  children: (0, a.jsx)("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z",
                  }),
                }),
              })
            : (0, s.CF)({
                title: "Yaay",
                description:
                  "mint" === t
                    ? "You have successfully minted."
                    : "You have successfully converted and minted.",
                type: "success",
                icon: (0, a.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "32px",
                  height: "32px",
                  viewBox: "0 0 24 24",
                  fill: "#00FF00",
                  children: [
                    (0, a.jsx)("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    (0, a.jsx)("path", {
                      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z",
                    }),
                  ],
                }),
              });
        };
    },
    5582: function (e, t, n) {
      var a = n(57437);
      n(2265);
      var s = n(61485),
        i = n(96164);
      t.Z = (e) => {
        let {
          showArrow: t = !0,
          children: n,
          content: r,
          className: o = "",
          side: l = "bottom",
          align: p,
        } = e;
        return (0, a.jsxs)(s.fC, {
          children: [
            (0, a.jsx)(s.xz, { asChild: !0, children: n }),
            (0, a.jsx)(s.h_, {
              children: (0, a.jsxs)(s.VY, {
                side: l,
                className: (0, i.m6)(
                  "rounded-20 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade",
                  o
                ),
                sideOffset: 5,
                align: p,
                children: [
                  r,
                  (0, a.jsx)(s.x8, {
                    className:
                      "rounded-full hidden h-[25px] w-[25px] items-center justify-center absolute top-[5px] right-[5px] hover:bg-black/10 focus:shadow-[0_0_0_2px] outline-none cursor-default",
                    "aria-label": "Close",
                    id: "popover-close",
                    children: "X",
                  }),
                  t && (0, a.jsx)(s.Eh, { className: "fill-white" }),
                ],
              }),
            }),
          ],
        });
      };
    },
    32929: function (e, t, n) {
      var a = n(57437),
        s = n(2265),
        i = n(27071),
        r = n(49972),
        o = n.n(r),
        l = n(96164);
      let p = (e) => {
        let { className: t, children: n, content: r, position: o } = e,
          [p, d] = (0, s.useState)(!1),
          u = () => d(!0),
          y = () => d(!1);
        return (
          (0, s.useEffect)(() => {
            let e = () => {
              window.innerWidth > 767 || y();
            };
            return (
              window.addEventListener("scroll", e),
              window.addEventListener("scroll", e)
            );
          }, []),
          (0, a.jsx)(i.zt, {
            delayDuration: 0,
            children: (0, a.jsxs)(i.fC, {
              open: p,
              children: [
                (0, a.jsx)(i.xz, {
                  className: "r-tooltip",
                  asChild: !0,
                  onMouseEnter: u,
                  onMouseLeave: y,
                  onTouchStart: u,
                  onTouchEnd: u,
                  children: n,
                }),
                (0, a.jsx)(i.h_, {
                  children: (0, a.jsxs)(i.VY, {
                    className: (0, l.m6)("TooltipContent", t || ""),
                    sideOffset: 5,
                    side: o,
                    children: [
                      r,
                      (0, a.jsx)(i.Eh, { className: "TooltipArrow" }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
      t.Z = (e) => {
        let { className: t, children: n, content: s, position: i } = e;
        return o()(s)
          ? n
          : (0, a.jsx)(p, {
              className: t,
              children: n,
              content: s,
              position: i,
            });
      };
    },
    80770: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ep;
        },
      });
      var a = n(57437),
        s = n(61173),
        i = n(59226),
        r = n(2265),
        o = n(96164),
        l = (e) => {
          let {
              labels: t = [],
              children: n = [],
              config: l,
              cls: p = {
                root: "",
                tab: "",
                tabHeader: "",
                panel: "",
                body: "",
              },
            } = e,
            [d, u] = (0, r.useState)(0),
            y = l ? [...t, "config"] : t;
          return (0, a.jsx)("div", {
            className: "w-full ".concat(p.root || ""),
            children: (0, a.jsxs)(s.O.Group, {
              selectedIndex: d,
              onChange: u,
              children: [
                (0, a.jsx)(s.O.List, {
                  className: "flex gap-2 ".concat(p.tabHeader),
                  children: y.map((e, t) =>
                    (0, a.jsx)(
                      s.O,
                      {
                        as: r.Fragment,
                        children: (t) => {
                          let { selected: n } = t;
                          return (0, a.jsx)("div", {
                            className:
                              "w-full cursor-pointer text-base min-h-10 px-4 flex rounded-20 items-center justify-center outline-none "
                                .concat(
                                  n
                                    ? "text-black bg-white border ".concat(
                                        "Withdraw" === e
                                          ? "border-red"
                                          : "border-primary"
                                      )
                                    : "opacity-50 bg-black/5 text-black border border-transparent",
                                  " "
                                )
                                .concat(p.tab || ""),
                            children: e,
                          });
                        },
                      },
                      t
                    )
                  ),
                }),
                (0, a.jsx)(s.O.Panels, {
                  className: (0, o.m6)("p-1", p.panel),
                  children: n.map((e, t) =>
                    (0, a.jsx)(
                      s.O.Panel,
                      {
                        static: !0,
                        children: (0, a.jsx)(i.u, {
                          appear: !0,
                          show: d === t,
                          className:
                            "transition-all duration-500 overflow-hidden",
                          enterFrom: "transform scale-95 opacity-0",
                          enterTo: "transform scale-100 opacity-100",
                          leaveFrom: "transform scale-100 opacity-100",
                          leaveTo: "transform scale-95 opacity-0",
                          children: (0, a.jsx)("div", {
                            className: ""
                              .concat(p.body || "", " ")
                              .concat(d === t ? "" : "absolute"),
                            children: e,
                          }),
                        }),
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          });
        },
        p = n(28143),
        d = n(72059),
        u = n(12496),
        y = n.n(u),
        c = n(42921),
        m = n(85053),
        h = n(22559),
        b = n(47722),
        x = n(62655),
        f = n(66648),
        T = n(26260),
        v = n(26735),
        g = n(25463),
        w = n(85020),
        k = n(16906),
        C = n(24307),
        A = n(84017),
        M = n(16497),
        N = n(60954),
        j = n(67365),
        E = n(8959),
        _ = n(42467),
        S = n(21620),
        F = n(63161),
        P = n(19152);
      class O {
        constructor(e) {
          (this.approve = async (e) => {
            try {
              return await (0, E.n)(F.wagmiConfig, {
                ...this.TokenContractObj,
                functionName: "approve",
                args: [this.prelaunchPointsAddress, (0, j.D4)(e)],
              });
            } catch (e) {
              (0, N.CF)({
                title: "Something went wrong",
                description: null == e ? void 0 : e.shortMessage,
                type: "error",
              });
            }
          }),
            (this.allowance = async (e) => {
              try {
                return await (0, _.L)(F.wagmiConfig, {
                  ...this.TokenContractObj,
                  functionName: "allowance",
                  args: [e, this.prelaunchPointsAddress],
                });
              } catch (e) {
                (0, N.CF)({
                  title: "Something went wrong",
                  description: null == e ? void 0 : e.shortMessage,
                  type: "error",
                });
              }
            }),
            (this.tokens = P.U.tokens),
            (this.TokenContractObj = { address: this.tokens[e], abi: S.Wo }),
            (this.prelaunchPointsAddress =
              "ynETH" == e
                ? P.U.prelaunchPointsYieldNest
                : P.U.prelaunchPoints);
        }
      }
      var I = O;
      class L extends I {
        constructor(e) {
          super(e),
            (this.tokens = P.U.tokensScroll),
            (this.TokenContractObj = { address: this.tokens[e], abi: S.Wo }),
            (this.prelaunchPointsAddress = P.U.prelaunchPointsScroll);
        }
      }
      var D = n(53036),
        H = n(10540),
        R = n(46053),
        Z = n(55067),
        z = n(25524),
        W = n(57818),
        B = n(16463),
        U = n(99441),
        V = n(49459),
        Y = n(12531),
        q = n(47343);
      let K = (e) => {
          let { icon: t } = e;
          return (0, a.jsx)(q.JO, {
            className:
              "SelectIcon relative min-w-8 h-8 m-0.5 grid place-content-center",
            children: (0, a.jsx)(f.default, {
              src: t,
              alt: "Logo",
              width: 24,
              height: 24,
            }),
          });
        },
        G = (0, r.forwardRef)((e, t) => {
          let { children: n, className: s, ...i } = e;
          return (0, a.jsx)(q.ck, {
            className: (0, o.m6)("SelectItem", s),
            ...i,
            ref: t,
            children: (0, a.jsx)(q.eT, { children: n }),
          });
        });
      G.displayName = "SelectItem";
      let J = (e) => {
        let { src: t } = e;
        return (0, a.jsx)(f.default, {
          src: t,
          alt: "",
          width: 18,
          height: 18,
          priority: !0,
        });
      };
      var X = (e) => {
          let {
              label: t = "",
              data: n,
              selected: s,
              onChange: i,
              cls: r = {},
              children: l,
              hideArrow: p,
            } = e,
            d = l || (null == s ? void 0 : s.value) || t,
            u = null == s ? void 0 : s.icon;
          return (0, a.jsxs)(q.fC, {
            value: d,
            onValueChange: i,
            children: [
              (0, a.jsxs)(q.xz, {
                className: (0, o.m6)(
                  "SelectTrigger min-h-10 inline-flex items-center gap-2 pr-10 rounded-20 bg-white border border-social-border shadow-md shadow-slate-100 cursor-pointer hover:bg-black/5 relative w-full max-w-200 leading-none text-left focus:outline-none focus:ring-1 focus:ring-card-border [&>span:first-child]:whitespace-nowrap [&>span:first-child]:overflow-hidden [&>span:first-child]:text-ellipsis [&>span:first-child]:inline-flex [&>span:first-child]:gap-2 [&>span:first-child]:items-center",
                  r.btn || ""
                ),
                "aria-label": t,
                children: [
                  (0, a.jsxs)(q.B4, {
                    children: [(0, a.jsx)(K, { icon: u }), d],
                  }),
                  !p &&
                    (0, a.jsx)(q.JO, {
                      className:
                        "SelectIcon absolute right-2 top-0 bottom-0 grid place-items-center",
                      children: (0, a.jsx)("svg", {
                        className: "icon-select-bottom",
                        width: 14,
                        height: 14,
                        children: (0, a.jsx)("use", {
                          href: "/icons/icons.svg#icon-select-bottom",
                        }),
                      }),
                    }),
                ],
              }),
              (0, a.jsx)(q.h_, {
                children: (0, a.jsxs)(q.VY, {
                  position: "popper",
                  sideOffset: 1,
                  className: (0, o.m6)(
                    "SelectContent mt-1 py-1 pr-10 max-h-56 w-full overflow-auto rounded-20 bg-select border border-card-border shadow-md right-0 text-base focus:outline-none sm:text-sm",
                    r.dropdown || ""
                  ),
                  children: [
                    (0, a.jsx)(q.u_, {
                      className: "SelectScrollButton flex justify-center",
                      children: (0, a.jsx)("svg", {
                        className: "icon-select-up",
                        width: 24,
                        height: 24,
                        children: (0, a.jsx)("use", {
                          href: "/icons/icons.svg#icon-select-up",
                        }),
                      }),
                    }),
                    (0, a.jsx)(q.l_, {
                      className: "SelectViewport",
                      children: (0, a.jsx)(q.ZA, {
                        className: "",
                        children: n.map((e, t) => {
                          var n;
                          return (0, a.jsxs)(
                            G,
                            {
                              value: e,
                              disabled: null == e ? void 0 : e.disabled,
                              className: ""
                                .concat(
                                  (null == s ? void 0 : s.value) ===
                                    (null == e ? void 0 : e.value)
                                    ? "text-primary"
                                    : "font-normal opacity-80 hover:opacity-100",
                                  " "
                                )
                                .concat(
                                  (null == e ? void 0 : e.disabled)
                                    ? ""
                                    : "cursor-pointer hover:bg-black-5",
                                  " min-h-10 flex items-center transition-all "
                                )
                                .concat(
                                  (null == e ? void 0 : e.icon) ? "" : "pl-3",
                                  " outline-none ring-0 truncate font-ag-medium [&>span:first-child]:flex [&>span:first-child]:items-center [&>span:first-child]:gap-2"
                                ),
                              children: [
                                (null == e ? void 0 : e.icon) &&
                                  (0, a.jsx)(K, {
                                    icon: null == e ? void 0 : e.icon,
                                  }),
                                (null == e ? void 0 : e.img) &&
                                  (0, a.jsx)(J, {
                                    src: null == e ? void 0 : e.img,
                                  }),
                                (null == e ? void 0 : e.value) || "",
                              ],
                            },
                            null !== (n = e.id) && void 0 !== n ? n : t
                          );
                        }),
                      }),
                    }),
                    (0, a.jsx)(q.$G, {
                      className: "SelectScrollButton flex justify-center",
                      children: (0, a.jsx)("svg", {
                        className: "icon-select-bottom",
                        width: 24,
                        height: 24,
                        children: (0, a.jsx)("use", {
                          href: "/icons/icons.svg#icon-select-bottom",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Q = n(68255);
      class $ extends I {
        constructor(e) {
          super(e),
            (this.tokens = P.U.tokensBtc),
            (this.TokenContractObj = { address: this.tokens[e], abi: S.Wo }),
            (this.prelaunchPointsAddress = P.U.prelaunchPointsBtc);
        }
      }
      var ee = n(54104),
        et = n(58054),
        en = n(64800);
      let ea = (0, W.default)(() => Promise.resolve().then(n.bind(n, 22378)), {
        loadableGenerated: { webpack: () => [22378] },
      });
      var es = function (e) {
          let { currency: t, setHash: n, isTransactionLoading: s } = e,
            i = (0, B.useSearchParams)(),
            { openConnectModal: o } = (0, x.We)(),
            { switchChain: l } = (0, T.o)(),
            p = (0, r.useRef)(),
            { address: d, isConnected: u, chainId: y } = (0, v.m)(),
            { data: h } = (0, A.Z)(d),
            E = (0, U.sJ)(R.nj),
            [_, S] = (0, r.useState)(t),
            [F, O] = (0, r.useState)(""),
            [W, q] = (0, r.useState)(""),
            [K, G] = (0, r.useState)("0"),
            [J, es] = (0, r.useState)("0"),
            [ei, er] = (0, r.useState)(!0),
            [eo, el] = (0, r.useState)(!0),
            { isBTC: ep } = (0, et.Z)(),
            {
              balanceOf: ed,
              locked: eu,
              isDataLoaded: ey,
              caps: ec,
            } = (0, H.Z)({ address: d, chainId: y, isBTC: ep }),
            { balanceOf: em } = (0, H.Z)({
              address:
                y == w.gT.MAINNET_CHAIN_ID
                  ? ep
                    ? P.U.prelaunchPointsBtc
                    : P.U.prelaunchPoints
                  : P.U.prelaunchPointsScroll,
              chainId: y,
              isBTC: ep,
            }),
            { safeData: eh } = (0, k.Z)(),
            [eb, ex] = (0, r.useState)(),
            [ef, eT] = (0, r.useState)(i.get("ref") || ""),
            [ev, eg] = (0, r.useState)(void 0),
            { mutateAsync: ew } = (0, z.D)(C.x1),
            [ek, eC] = (0, r.useState)(!1),
            [eA, eM] = (0, r.useState)(!1),
            [eN, ej] = (0, r.useState)("Deposit");
          (0, r.useEffect)(() => {
            ex(
              y == w.gT.MAINNET_CHAIN_ID
                ? ep
                  ? new ee.Z()
                  : "ynETH" == _.symbol
                  ? new en.Z()
                  : new V.Z()
                : new M.Z()
            );
          }, [u, y, _]),
            (0, r.useEffect)(() => {
              if (ey) {
                var e, t;
                ep
                  ? es(
                      (0, c.b)(
                        null !== (e = ed[_.symbol]) && void 0 !== e
                          ? e
                          : BigInt(0),
                        8
                      )
                    )
                  : es(
                      (0, m.d)(
                        null !== (t = ed[_.symbol]) && void 0 !== t
                          ? t
                          : BigInt(0)
                      )
                    );
              } else es("0");
            }, [d, ed, ey, _.symbol]),
            (0, r.useEffect)(() => {
              u && (p.current && p.current !== d && eT(""), (p.current = d));
            }, [u, d]);
          let eE = async (e) => {
              var t;
              return "" === e
                ? Promise.resolve(!0)
                : null === (t = await ew(e)) || void 0 === t
                ? void 0
                : t.result;
            },
            e_ = async () => {
              if (y !== w.gT.MAINNET_CHAIN_ID && y !== w.gT.SCROLL_CHAIN_ID)
                return (0, Y.vd)(() => {
                  l && l({ chainId: w.gT.MAINNET_CHAIN_ID });
                });
              if (void 0 !== eb && u && d && _) {
                if (await eE(ef)) {
                  if ("ETH" == _.symbol) n(await eb.lockETH(F, ef));
                  else {
                    let e =
                        y == w.gT.MAINNET_CHAIN_ID
                          ? ep
                            ? new $(_.symbol)
                            : new I(_.symbol)
                          : new L(_.symbol),
                      t = await e.allowance(d);
                    if (void 0 != t) {
                      eM(!0),
                        t < (0, j.D4)(F) &&
                          (ej("Approve ".concat(_.symbol)),
                          await e.approve(F),
                          await (0, j.gw)(7e3)),
                        ej("Confirm Deposit");
                      let a = await eb.lock(F, _.symbol, ef);
                      await (0, j.gw)(7e3), ej("Deposit"), n(a), eM(!1);
                    }
                  }
                  eC(!0), eT("");
                } else
                  (0, N.CF)({
                    title: "Something went wrong",
                    description: "Referral Code is not valid",
                    type: "error",
                  });
              }
            };
          (0, r.useEffect)(() => {
            if (F && _ && ed[_.symbol] && em[_.symbol]) {
              let e = ep ? (0, j.D4)(F, 8) : (0, j.D4)(F),
                t = ed[_.symbol] >= e;
              er(t);
              let n = !0;
              (ep || y == w.gT.SCROLL_CHAIN_ID) &&
                (console.log("INPUT", e, em[_.symbol], ec[_.symbol]),
                el((n = e + em[_.symbol] <= ec[_.symbol]))),
                eC(parseFloat(F) > 0 && t && (!0 === ev || void 0 == ev) && n);
            } else eC(!1);
          }, [F, ed, em, _, ev, ec, y]);
          let eS = (e) => {
              var t;
              O(e), q(Number(e.charAt(e.length - 1)) ? (0, j.jW)(e, 6) : e);
              let n =
                parseFloat(e) *
                (null !== (t = eh[_.symbol]) && void 0 !== t ? t : 0);
              G(isNaN(n) ? "0" : (0, j.jW)(n, 2));
            },
            eF = (e) => {
              let t = e.target.value.replace(/[a-np-z]/g, (e) =>
                e.toUpperCase()
              );
              eT((t = t.replace(/[^A-NP-Z1-9-]/g, ""))),
                "" == t
                  ? eg(void 0)
                  : eg(/^[A-NP-Z1-9]{3}-[A-NP-Z1-9]{3}$/.test(t));
            };
          (0, j.kx)(eu);
          let eP = [
              { id: 0, value: "ETH", icon: D.jY[D.Tl.ETH].icon },
              { id: 1, value: "WETH", icon: D.jY[D.Tl.WETH].icon },
            ],
            [eO, eI] = (0, r.useState)(eP[1]);
          return (0, a.jsxs)("div", {
            className: "deposit-card flex flex-col relative",
            children: [
              (0, a.jsxs)("div", {
                className: "group flex items-center justify-between",
                children: [
                  (0, a.jsxs)("div", {
                    className: "col",
                    children: [
                      (0, a.jsx)("div", {
                        className: "text-xs mb-2",
                        children: "Deposit",
                      }),
                      (0, a.jsx)(a.Fragment, {
                        children:
                          "ETH" === _.symbol || "WETH" === _.symbol
                            ? (0, a.jsx)(X, {
                                data: eP,
                                selected: eO,
                                onChange: (e) => {
                                  eI(e), S(D.jY[e.id]);
                                },
                              })
                            : (0, a.jsx)(g.Z, {
                                text: _.symbol || "",
                                showArrowIcon: !1,
                                icon: (0, a.jsx)(f.default, {
                                  src: _.icon,
                                  alt: _.symbol,
                                  className: "",
                                  width: 24,
                                  height: 24,
                                  sizes: "(max-width: 768px) 100vw, 100vw",
                                  quality: 100,
                                }),
                                className: "cursor-pointer hover:bg-black/5",
                              }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "col",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "text-xs mb-2 opacity-50 text-right",
                        children: ["Balance: ", (0, j.jW)(J, 6)],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "group-btn flex justify-end items-center gap-2",
                        children: [
                          (0, a.jsx)("button", {
                            className:
                              "bg-grey-color min-h-10 flex items-center rounded-20 px-4 text-sm text-black/50 font-medium hover:text-black/60 hover:bg-gray-100 hover:shadow-sm",
                            onClick: () => eS((parseFloat(J) / 2).toString()),
                            children: "50%",
                          }),
                          (0, a.jsx)("button", {
                            className:
                              "bg-grey-color min-h-10 flex items-center rounded-20 px-4 text-sm text-black/50 font-medium hover:text-black/60 hover:bg-gray-100 hover:shadow-sm",
                            onClick: () => eS(J),
                            children: "Max",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "group text-2xl mt-8 flex items-center justify-between",
                children: [
                  (0, a.jsx)("input", {
                    placeholder: "0",
                    autoComplete: "off",
                    name: "amount",
                    value: W,
                    onChange: (e) => {
                      let t = e.target.value.replace(/[^0-9,.]/g, "");
                      eS(
                        (t = (t = t.replace(/,/g, ".")).replace(
                          /\.(?=.*\.)/g,
                          ""
                        ))
                      );
                    },
                    onPaste: (e) => {
                      e.preventDefault(),
                        eS(
                          e.clipboardData
                            .getData("text/plain")
                            .replace(/[^0-9,.]/g, "")
                            .replace(/,/g, ".")
                            .replace(/\.(?=.*\.)/g, "")
                        );
                    },
                    className:
                      "pl-1 mr-[4px] rounded-md outline-0 w-full box-border bg-transparent hover:bg-input-hover-linear outline-none border-none",
                  }),
                  (0, a.jsx)("span", {
                    className: "opacity-50 text-xs text-nowrap",
                    children: "≈$ ".concat(K),
                  }),
                ],
              }),
              ei
                ? (0, a.jsx)(a.Fragment, {})
                : (0, a.jsx)("div", {
                    className: "text-red text-xs pt-1 text-right",
                    children: "Not enough funds",
                  }),
              eo
                ? (0, a.jsx)(a.Fragment, {})
                : (0, a.jsx)("div", {
                    className: "text-red text-xs pt-1 text-right",
                    children: "Amount exceeds deposit cap",
                  }),
              E.epoch !== Z.o.FIRST
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)("div", {
                        className: "line-icon relative",
                        children: [
                          (0, a.jsx)("hr", {
                            className: "mt-6 -mx-6 sm:-mx-10 opacity-50",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "circle w-8 h-8 -translate-y-4 mx-auto bg-white rounded-full border border-social-border grid place-content-center",
                            children: (0, a.jsx)("svg", {
                              className: "icon-arrow",
                              width: 16,
                              height: 16,
                              children: (0, a.jsx)("use", {
                                href: "/icons/icons.svg#icon-arrow",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "card-receive relative rounded-14 p-4 -mx-3 sm:-mx-5 bg-card-receive-linear before:absolute before:top-0 before:left-0 before:size-full before:rounded-14 before:bg-card-receive-dashed",
                        children: (0, a.jsxs)("div", {
                          className: "content relative",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-xs mb-2",
                              children: "Receive",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "group flex items-center justify-between gap-2",
                              children: [
                                (0, a.jsx)(g.Z, {
                                  text: "lpETH",
                                  icon: (0, a.jsx)(f.default, {
                                    src: "/icons/icon-ethereum.svg",
                                    alt: "eth",
                                    className: "",
                                    width: 10,
                                    height: 10,
                                    sizes: "(max-width: 768px) 100vw, 100vw",
                                    quality: 100,
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "col flex flex-col items-end flex-1",
                                  children: [
                                    (0, a.jsx)("input", {
                                      type: "text",
                                      readOnly: !0,
                                      defaultValue: F,
                                      className:
                                        "w-full text-2xl bg-primary-gradient2 bg-text-clip leading-none text-right border-none outline-none",
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "opacity-50 text-xs text-right text-nowrap",
                                      children: "≈$ ".concat(K),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : null,
              h.hasDeposits
                ? (0, a.jsx)(a.Fragment, {})
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("hr", {
                        className: "my-6 -mx-6 sm:-mx-10 opacity-50",
                      }),
                      (0, a.jsx)("label", {
                        htmlFor: "ref-code",
                        className: "text-xs mb-2 font-normal",
                        children: "Referral Code",
                      }),
                      (0, a.jsx)("input", {
                        type: "text",
                        name: "ref-code",
                        id: "ref-code",
                        className:
                          (!1 == ev
                            ? "!border-red !ring-red !outline-red focus:!border-red"
                            : "") +
                          "block w-full rounded-14 border-0 min-h-btn-lg py-1.5 px-4 font-normal !text-base text-black ring-1 ring-inset ring-social-border placeholder:text-gray-400 placeholder:font-light sm:text-sm sm:leading-6",
                        placeholder: "Referral Code (Optional)",
                        onChange: (e) => eF(e),
                        value: ef,
                      }),
                      !1 == ev
                        ? (0, a.jsx)("div", {
                            className: "text-red text-xs pt-1 text-right",
                            children: "Invalid referral code",
                          })
                        : (0, a.jsx)(a.Fragment, {}),
                    ],
                  }),
              (0, a.jsx)("hr", { className: "my-6 -mx-10 opacity-50" }),
              u
                ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("button", {
                      type: "button",
                      "aria-label": "A button that on click does deposits",
                      id: "connect-wallet",
                      className: "deposit w-full mt-auto ".concat(
                        (0, b.L)({ size: "lg", color: "green" })
                      ),
                      onClick: e_,
                      disabled: s || eA || !ek,
                      children: [
                        eN,
                        eA && (0, a.jsx)(Q.Z, { className: "ml-2" }),
                      ],
                    }),
                  })
                : (0, a.jsx)("button", {
                    type: "button",
                    "aria-label":
                      "A button that on click connects you with the wallet",
                    id: "connect-wallet",
                    className: "deposit w-full ".concat(
                      (0, b.L)({ size: "lg", color: "green" })
                    ),
                    onClick: o,
                    children: "Connect Wallet",
                  }),
              ey && (0, a.jsx)(ea, { isOpen: !1 }),
            ],
          });
        },
        ei = n(98286);
      let er = Promise.resolve()
        .then(n.bind(n, 63161))
        .then((e) => e.walletClient(window && window.ethereum));
      var eo = (e) => {
          let {
              currency: t,
              setHash: n,
              inputValue: s,
              isTransactionLoading: i,
            } = e,
            o = (0, ei.x)(),
            { isBTC: l } = (0, et.Z)(),
            [p, d] = (0, r.useState)(!1),
            [u, y] = (0, r.useState)("Withdraw Deposits"),
            c = async () => {
              let e =
                o == w.gT.MAINNET_CHAIN_ID
                  ? l
                    ? new ee.Z()
                    : "ynETH" == t.symbol
                    ? new en.Z()
                    : new V.Z()
                  : new M.Z();
              y("Confirm Withdraw"), d(!0);
              let a = await e.withdraw(t.symbol);
              await (0, j.gw)(7e3), n(a), d(!1), y("Withdraw Deposits");
            },
            m = async () => {
              try {
                let e = await er,
                  t = (0, D.B9)(o);
                await e.watchAsset({
                  type: "ERC20",
                  options: {
                    address: (0, D.$r)(t),
                    decimals: (0, D.As)(t),
                    symbol: "WETH",
                  },
                }),
                  (0, Y.j2)();
              } catch (e) {
                console.error(e), (0, Y.j2)("failed");
              }
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className:
                  "card-receive relative rounded-14 p-4 m-1 bg-card-red-receive-linear before:absolute before:top-0 before:left-0 before:size-full before:rounded-14 before:bg-card-red-receive-dashed",
                children: (0, a.jsxs)("div", {
                  className:
                    "content relative flex items-center justify-between py-2",
                  children: [
                    (0, a.jsx)(g.Z, {
                      text: t.symbol,
                      showArrowIcon: !1,
                      icon: (0, a.jsx)(f.default, {
                        src: t.icon,
                        alt: "token",
                        className: "",
                        width: 16,
                        height: 16,
                        sizes: "(max-width: 768px) 100vw, 100vw",
                        quality: 100,
                      }),
                    }),
                    (0, a.jsx)("input", {
                      type: "text",
                      readOnly: !0,
                      value: s,
                      className:
                        "w-full text-2xl bg-red-gradient2 bg-text-clip leading-none text-right border-none outline-none",
                    }),
                  ],
                }),
              }),
              t &&
                "WETH" == t.symbol &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("p", {
                      className: "pt-8 pb-4 text-xs opacity-50 text-center",
                      children: "You will receive WETH",
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      "aria-label": "A button that on click add wETH",
                      id: "add-weth",
                      className: "deposit w-full mb-10 ".concat(
                        (0, b.L)({ size: "lg", color: "outline" })
                      ),
                      onClick: m,
                      children: "Add WETH to Wallet",
                    }),
                  ],
                }),
              (0, a.jsx)("hr", {
                className: "absolute h-[1px] w-full inset-x-0 opacity-50",
              }),
              (0, a.jsx)("p", {
                className: "mt-6 mb-2 text-red text-center text-xs px-2",
                children:
                  "You will lose 50% of your Quaaloops when you withdraw your Deposits",
              }),
              (0, a.jsx)("div", {
                className: "action pt-5",
                children: (0, a.jsxs)("button", {
                  type: "button",
                  "aria-label":
                    "A button that on click withdraw the transaction",
                  id: "connect-wallet",
                  className: "deposit w-full ".concat(
                    (0, b.L)({ size: "lg", color: "red" })
                  ),
                  onClick: c,
                  disabled: p || "0" === s,
                  children: [u, p && (0, a.jsx)(Q.Z, { className: "ml-2" })],
                }),
              }),
            ],
          });
        },
        el = n(22378),
        ep = (e) => {
          let { asset: t, locked: n, isOpen: s, setIsOpen: i } = e,
            {
              isTransactionLoading: o,
              completed: u,
              setHash: b,
            } = (0, p.Z)("deposit"),
            {
              isTransactionLoading: x,
              completed: f,
              setHash: T,
            } = (0, p.Z)("withdraw"),
            { isBTC: v } = (0, et.Z)();
          (0, r.useEffect)(() => {
            (f || u) && i(!1);
          }, [f, u, i]);
          let g = y()(n, t.currency.symbol)
            ? v
              ? (0, c.b)(n[t.currency.symbol], 8) || "0"
              : (0, m.d)(n[t.currency.symbol]) || "0"
            : "0";
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(h.Z, {
                state: s,
                onClose: i,
                children: (0, a.jsx)("div", {
                  className:
                    "pt-6 my-6 bg-white border border-dialog-border inline-block w-full max-w-[400px] overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-40",
                  children: (0, a.jsxs)(d.V.Description, {
                    as: "div",
                    className: "py-2 overflow-auto max-h-[65vh]",
                    children: [
                      (0, a.jsx)("div", {
                        onClick: () => i(!1),
                        className:
                          "close-icon absolute top-6 right-4 w-12 h-12 rounded-2xl bg-white-2 hover:bg-black-2 grid place-items-center cursor-pointer",
                        children: (0, a.jsx)("svg", {
                          className: "icon-close w-8 h-8",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, a.jsx)("use", {
                            xlinkHref: "/icons/icons.svg#icon-close",
                          }),
                        }),
                      }),
                      (0, a.jsxs)(l, {
                        labels: Number(t.deposit)
                          ? ["Deposit", "Withdraw"]
                          : ["Deposit"],
                        cls: {
                          root: "deposit-tabs",
                          tabHeader: "pl-6",
                          tab: "!w-auto",
                          panel: "pt-5 mt-5 border-t border-t-row-border",
                          body: "p-6",
                        },
                        children: [
                          (0, a.jsx)("div", {
                            className: "tab-pane grizzly-tab-pane fade",
                            id: "apy-breakdown",
                            children: (0, a.jsx)(es, {
                              currency: t.currency,
                              setHash: b,
                              isTransactionLoading: o,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "tab-pane grizzly-tab-pane fade",
                            id: "your-transacions",
                            children: (0, a.jsx)(eo, {
                              currency: t.currency,
                              setHash: T,
                              inputValue: g,
                              isTransactionLoading: x,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              x && (0, a.jsx)(el.default, { isOpen: !0 }),
            ],
          });
        };
    },
    22378: function (e, t, n) {
      n.r(t);
      var a = n(57437),
        s = n(22559);
      t.default = (e) => {
        let { isOpen: t } = e;
        return (0, a.jsx)(s.Z, {
          state: t,
          hasOverlay: !0,
          onClose: () => {},
          children: (0, a.jsx)("div", {
            className:
              "p-8 fixed inset-0 grid place-content-center w-full overflow-hidden transition-all transform",
            children: (0, a.jsx)("div", { className: "donut" }),
          }),
        });
      };
    },
    22559: function (e, t, n) {
      var a = n(57437),
        s = n(59226),
        i = n(72059),
        r = n(2265),
        o = n(96164);
      t.Z = function (e) {
        let {
          className: t = "",
          children: n,
          state: l,
          hasOverlay: p = !0,
          onClose: d,
          onOverlayClose: u,
        } = e;
        return (0, a.jsx)(s.u, {
          appear: !0,
          show: l,
          as: r.Fragment,
          children: (0, a.jsx)(i.V, {
            as: "div",
            onClose: d,
            className: (0, o.m6)(
              "fixed inset-0 z-50 overflow-y-auto modal-scrollbar",
              t
            ),
            children: (0, a.jsxs)("div", {
              className: "min-h-screen px-4 text-center",
              children: [
                (0, a.jsx)(s.u.Child, {
                  as: r.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, a.jsx)(i.V.Overlay, {
                    onClick: u,
                    className:
                      "fixed inset-0 pointer-events-none bg-black/20 ".concat(
                        u ? "" : " pointer-events-none "
                      ),
                  }),
                }),
                (0, a.jsx)("span", {
                  className: "inline-block h-screen align-middle",
                  "aria-hidden": "true",
                  children: "​",
                }),
                (0, a.jsx)(s.u.Child, {
                  as: r.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0 scale-95",
                  enterTo: "opacity-100 scale-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100 scale-100",
                  leaveTo: "opacity-0 scale-95",
                  children: n,
                }),
              ],
            }),
          }),
        });
      };
    },
    25463: function (e, t, n) {
      var a = n(57437),
        s = n(96164);
      t.Z = function (e) {
        let {
          icon: t,
          showArrowIcon: n = !0,
          text: i = "",
          className: r = "",
          onClick: o,
        } = e;
        return (0, a.jsxs)("div", {
          role: "button",
          onClick: o,
          className: (0, s.m6)(
            "badge select-none min-h-10 inline-flex items-center gap-2 pr-3 rounded-20 bg-white border border-social-border shadow-md shadow-slate-100",
            r || ""
          ),
          children: [
            t &&
              (0, a.jsx)("div", {
                className:
                  "relative min-w-6 h-6 ml-2 m-0.5 grid place-content-center rounded-full border border-social-border",
                children: t,
              }),
            i,
            n &&
              (0, a.jsx)("svg", {
                className: "size-4 dark:fill-white",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, a.jsx)("use", {
                  xlinkHref: "/icons/icons.svg#icon-select-arrow",
                }),
              }),
          ],
        });
      };
    },
    61195: function (e, t, n) {
      var a = n(57437),
        s = n(15587),
        i = n(2265),
        r = n(27269),
        o = n(67365);
      t.Z = function (e) {
        let { from: t, to: n, cls: l, decimal: p = 2, delay: d = 1 } = e,
          [u, y] = (0, i.useState)([]);
        return (
          (0, i.useEffect)(() => {
            let e = (0, s.j)(Number(t), Number(n), {
              duration: 2,
              delay: d,
              onUpdate(e) {
                y(0 === e ? ["0"] : (0, o._6)(e, p).split(""));
              },
            });
            return () => (null == e ? void 0 : e.stop());
          }, [t, n, p, d]),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(r.l, {
              of: u,
              render: (e) => (0, a.jsx)("span", { className: l, children: e }),
            }),
          })
        );
      };
    },
    68255: function (e, t, n) {
      var a = n(57437),
        s = n(96164);
      t.Z = function (e) {
        let { className: t = "" } = e;
        return (0, a.jsxs)("svg", {
          className: (0, s.m6)("animate-spin h-5 w-5 text-white", t),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("circle", {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4",
            }),
            (0, a.jsx)("path", {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
            }),
          ],
        });
      };
    },
    79506: function (e, t, n) {
      var a = n(57437),
        s = n(58054);
      t.Z = function () {
        let { isBTC: e } = (0, s.Z)();
        return (0, a.jsxs)("div", {
          className: "absolute mt-6 sm:mt-0 inset-0 overflow-hidden",
          children: [
            (0, a.jsxs)("div", {
              className:
                "max-w-referral bubbles absolute top-0 inset-x-0 mx-auto flex flex-col sm:flex-row justify-center sm:justify-between",
              children: [
                (0, a.jsx)("div", { className: "bubble loop" }),
                (0, a.jsx)("div", { className: "bubble referral" }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "mask-it relative min-h-full sm:min-h-screen main-loop-bg ".concat(
                  e ? "bg-loop-btc-bg" : "bg-loop-bg",
                  " bg-no-repeat bg-cover bg-center after:bg-main-bottom after:absolute after:left-0 after:bottom-0 after:w-full after:h-[20%]"
                ),
            }),
          ],
        });
      };
    },
    47722: function (e, t, n) {
      n.d(t, {
        L: function () {
          return a;
        },
      });
      let a = (0, n(43310).tv)({
        base: "active:scale-99 font-medium inline-flex items-center justify-center select-none transition-color transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
        variants: {
          color: {
            primary: "bg-primary-gradient hover:shadow-md text-white",
            orange: "bg-orange-gradient hover:shadow-md text-white",
            green: "bg-green-gradient hover:shadow-md text-white",
            orangelight:
              "bg-orange/10 hover:bg-orange/30 hover:shadow-md text-orange",
            greenlight:
              "bg-secondary/10 hover:bg-secondary/30 hover:shadow-md text-secondary",
            red: "bg-red-gradient hover:shadow-md hover:red-hover-gradient text-white",
            redtext: "text-red hover:shadow-md hover:bg-red-light-gradient",
            secondary: "bg-white hover:shadow-md text-black",
            outline:
              "bg-white/20 hover:bg-white/30 hover:shadow-md border border-black/30 text-black rounded-40",
            outlineb:
              "bg-white/20 hover:bg-white/30 hover:shadow-md border border-black/30 text-black rounded-40",
            social:
              "bg-white rounded-28 shadow-social hover:shadow-md border border-social-border",
          },
          size: {
            sm: "text-sm px-2 sm:px-4 md:px-6 min-h-btn-sm min-w-btn-sm rounded-20",
            md: "text-base px-2 sm:px-4 md:px-6 min-h-btn-md min-w-btn-md rounded-3xl",
            mdx: "text-base px-2 sm:px-4 md:px-6 min-h-btn-md rounded-3xl",
            lg: "text-base px-2 sm:px-4 md:px-6 min-h-btn-slg min-h-btn-lg min-w-btn-lg rounded-28",
            lgx: "text-base px-2 sm:px-4 md:px-6 min-h-btn-slg min-h-btn-lg rounded-28",
          },
          icon: { sm: "gap-1", md: "gap-1.5", lg: "gap-2" },
        },
        defaultVariants: { size: "md", color: "primary" },
      });
    },
    14793: function (e, t, n) {
      n.d(t, {
        L: function () {
          return a;
        },
      });
      let a = [
        {
          inputs: [
            {
              internalType: "address",
              name: "_exchangeProxy",
              type: "address",
            },
            { internalType: "address", name: "_wethAddress", type: "address" },
            {
              internalType: "address[]",
              name: "_allowedTokens",
              type: "address[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            { internalType: "address", name: "target", type: "address" },
          ],
          name: "AddressEmptyCode",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "AddressInsufficientBalance",
          type: "error",
        },
        { inputs: [], name: "CannotClaimZero", type: "error" },
        { inputs: [], name: "CannotLockZero", type: "error" },
        { inputs: [], name: "CannotWithdrawZero", type: "error" },
        { inputs: [], name: "CurrentlyNotPossible", type: "error" },
        { inputs: [], name: "FailedInnerCall", type: "error" },
        { inputs: [], name: "FailedToSendEther", type: "error" },
        { inputs: [], name: "InvalidToken", type: "error" },
        { inputs: [], name: "LoopNotActivated", type: "error" },
        { inputs: [], name: "MathOverflowedMulDiv", type: "error" },
        { inputs: [], name: "NoLongerPossible", type: "error" },
        { inputs: [], name: "NotAuthorized", type: "error" },
        { inputs: [], name: "NotProposedOwner", type: "error" },
        { inputs: [], name: "NotValidToken", type: "error" },
        { inputs: [], name: "NothingToClaim", type: "error" },
        { inputs: [], name: "ReceiveDisabled", type: "error" },
        {
          inputs: [{ internalType: "address", name: "token", type: "address" }],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        { inputs: [], name: "SellTokenApprovalFailed", type: "error" },
        { inputs: [], name: "SwapCallFailed", type: "error" },
        { inputs: [], name: "TokenNotAllowed", type: "error" },
        { inputs: [], name: "UseClaimInstead", type: "error" },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "inputTokenAmount",
              type: "uint256",
            },
          ],
          name: "WrongDataAmount",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "inputToken", type: "address" },
            { internalType: "address", name: "outputToken", type: "address" },
          ],
          name: "WrongDataTokens",
          type: "error",
        },
        { inputs: [], name: "WrongExchange", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
          ],
          name: "WrongRecipient",
          type: "error",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "selector", type: "bytes4" },
          ],
          name: "WrongSelector",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "reward",
              type: "uint256",
            },
          ],
          name: "Claimed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "amountETH",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amountlpETH",
              type: "uint256",
            },
          ],
          name: "Converted",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "referral",
              type: "bytes32",
            },
          ],
          name: "Locked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "loopAddress",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "vaultAddress",
              type: "address",
            },
          ],
          name: "LoopAddressesUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnerProposed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnerUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Recovered",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "typeIndex",
              type: "uint256",
            },
          ],
          name: "StakedVault",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "sellToken",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "sellAmount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "buyETHAmount",
              type: "uint256",
            },
          ],
          name: "SwappedTokens",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Withdrawn",
          type: "event",
        },
        {
          inputs: [],
          name: "ETH",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "TIMELOCK",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "TRANSFORM_SELECTOR",
          outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UNI_SELECTOR",
          outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "WETH",
          outputs: [
            { internalType: "contract IWETH", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "acceptOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
          ],
          name: "allowToken",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
          ],
          name: "balances",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint8", name: "_percentage", type: "uint8" },
            {
              internalType: "enum PrelaunchPoints.Exchange",
              name: "_exchange",
              type: "uint8",
            },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint8", name: "_percentage", type: "uint8" },
            {
              internalType: "enum PrelaunchPoints.Exchange",
              name: "_exchange",
              type: "uint8",
            },
            { internalType: "uint256", name: "_typeIndex", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "claimAndStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "convertAllETH",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "emergencyMode",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "exchangeProxy",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint8", name: "_epoch", type: "uint8" }],
          name: "forceSetEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "isTokenAllowed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "bytes32", name: "_referral", type: "bytes32" },
          ],
          name: "lock",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "_referral", type: "bytes32" },
          ],
          name: "lockETH",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_for", type: "address" },
            { internalType: "bytes32", name: "_referral", type: "bytes32" },
          ],
          name: "lockETHFor",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "address", name: "_for", type: "address" },
            { internalType: "bytes32", name: "_referral", type: "bytes32" },
          ],
          name: "lockFor",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "loopActivation",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lpETH",
          outputs: [
            { internalType: "contract ILpETH", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lpETHVault",
          outputs: [
            { internalType: "contract ILpETHVault", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_owner", type: "address" },
          ],
          name: "proposeOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "proposedOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "recoverERC20",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "_mode", type: "bool" }],
          name: "setEmergencyMode",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_loopAddress", type: "address" },
            { internalType: "address", name: "_vaultAddress", type: "address" },
          ],
          name: "setLoopAddresses",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "startClaimDate",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalLpETH",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ];
    },
    49459: function (e, t, n) {
      var a = n(7769),
        s = n(13319),
        i = n(8959),
        r = n(56872),
        o = n(19152),
        l = n(14793),
        p = n(63161),
        d = n(95046),
        u = n(60954),
        y = n(67365);
      class c {
        static get instance() {
          return (
            (0, a._)(c, c, m) || (0, s._)(c, c, m, new c()), (0, a._)(c, c, m)
          );
        }
        constructor() {
          (this.lockETH = async (e, t) => {
            let n = (0, d.NC)(t, { size: 32 });
            try {
              return await (0, i.n)(p.wagmiConfig, {
                ...this.prelaunchPointsContract,
                functionName: "lockETH",
                value: (0, y.D4)(e),
                args: [n],
              });
            } catch (e) {
              (0, u.CF)({
                title: "Something went wrong",
                description: null == e ? void 0 : e.shortMessage,
                type: "error",
              });
            }
          }),
            (this.lock = async (e, t, n) => {
              let a = (0, d.NC)(n, { size: 32 }),
                s = this.tokens[t];
              try {
                return await (0, i.n)(p.wagmiConfig, {
                  ...this.prelaunchPointsContract,
                  functionName: "lock",
                  args: [s, (0, y.D4)(e), a],
                });
              } catch (e) {
                (0, u.CF)({
                  title: "Something went wrong",
                  description: null == e ? void 0 : e.shortMessage,
                  type: "error",
                });
              }
            }),
            (this.readContract = async (e) => {
              try {
                return await (0, r.J)(p.wagmiConfig, {
                  contracts: [
                    {
                      ...this.prelaunchPointsContract,
                      functionName: "totalSupply",
                    },
                    {
                      ...this.prelaunchPointsContract,
                      functionName: "balances",
                      args: [e],
                    },
                  ],
                });
              } catch (e) {
                (0, u.CF)({
                  title: "Something went wrong",
                  description: null == e ? void 0 : e.shortMessage,
                  type: "error",
                });
              }
            }),
            (this.withdraw = async (e) => {
              let t = this.tokens[e];
              try {
                return await (0, i.n)(p.wagmiConfig, {
                  ...this.prelaunchPointsContract,
                  functionName: "withdraw",
                  args: [t],
                });
              } catch (e) {
                (0, u.CF)({
                  title: "Something went wrong",
                  description: null == e ? void 0 : e.shortMessage,
                  type: "error",
                });
              }
            }),
            (this.claim = async (e, t, n, a) => {
              let s = this.tokens[e];
              try {
                return await (0, i.n)(p.wagmiConfig, {
                  ...this.prelaunchPointsContract,
                  functionName: "claim",
                  args: [s, t, n, a],
                });
              } catch (e) {
                (0, u.CF)({
                  title: "Something went wrong",
                  description: null == e ? void 0 : e.shortMessage,
                  type: "error",
                });
              }
            }),
            (this.prelaunchPointsContract = {
              address: o.U.prelaunchPoints,
              abi: l.L,
            }),
            (this.tokens = o.U.tokens);
        }
      }
      var m = { writable: !0, value: void 0 };
      t.Z = c;
    },
    54104: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var a = n(8959),
        s = n(95046),
        i = n(17439);
      let r = [
        {
          inputs: [
            {
              internalType: "address",
              name: "_exchangeProxy",
              type: "address",
            },
            { internalType: "address", name: "_wbtcAddress", type: "address" },
            {
              internalType: "address[]",
              name: "_allowedTokens",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "_initialMaxCap",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            { internalType: "address", name: "target", type: "address" },
          ],
          name: "AddressEmptyCode",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "AddressInsufficientBalance",
          type: "error",
        },
        { inputs: [], name: "ArrayLenghtsDoNotMatch", type: "error" },
        { inputs: [], name: "CannotClaimZero", type: "error" },
        { inputs: [], name: "CannotLockZero", type: "error" },
        { inputs: [], name: "CannotWithdrawZero", type: "error" },
        { inputs: [], name: "CurrentlyNotPossible", type: "error" },
        { inputs: [], name: "FailedInnerCall", type: "error" },
        { inputs: [], name: "InvalidToken", type: "error" },
        { inputs: [], name: "LoopNotActivated", type: "error" },
        { inputs: [], name: "MathOverflowedMulDiv", type: "error" },
        {
          inputs: [{ internalType: "address", name: "token", type: "address" }],
          name: "MaxDepositCapReached",
          type: "error",
        },
        { inputs: [], name: "NoLongerPossible", type: "error" },
        { inputs: [], name: "NotAuthorized", type: "error" },
        { inputs: [], name: "NotProposedOwner", type: "error" },
        { inputs: [], name: "NotValidToken", type: "error" },
        { inputs: [], name: "NothingToClaim", type: "error" },
        { inputs: [], name: "ReceiveDisabled", type: "error" },
        {
          inputs: [{ internalType: "address", name: "token", type: "address" }],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        { inputs: [], name: "SellTokenApprovalFailed", type: "error" },
        { inputs: [], name: "SwapCallFailed", type: "error" },
        {
          inputs: [{ internalType: "address", name: "token", type: "address" }],
          name: "TokenNotAllowed",
          type: "error",
        },
        { inputs: [], name: "UseClaimInstead", type: "error" },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "inputTokenAmount",
              type: "uint256",
            },
          ],
          name: "WrongDataAmount",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "inputToken", type: "address" },
            { internalType: "address", name: "outputToken", type: "address" },
          ],
          name: "WrongDataTokens",
          type: "error",
        },
        { inputs: [], name: "WrongExchange", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
          ],
          name: "WrongRecipient",
          type: "error",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "selector", type: "bytes4" },
          ],
          name: "WrongSelector",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "reward",
              type: "uint256",
            },
          ],
          name: "Claimed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "amounWBTC",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amountlpBTC",
              type: "uint256",
            },
          ],
          name: "Converted",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "DepositMaxCapUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !1, internalType: "bool", name: "mode", type: "bool" },
          ],
          name: "EmergencyModeSet",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "referral",
              type: "bytes32",
            },
          ],
          name: "Locked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "loopAddress",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "vaultAddress",
              type: "address",
            },
          ],
          name: "LoopAddressesUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "token",
              type: "address",
            },
          ],
          name: "NewTokenAllowed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnerProposed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnerUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Recovered",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "typeIndex",
              type: "uint256",
            },
          ],
          name: "StakedVault",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "sellToken",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "sellAmount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "buyWBTCAmount",
              type: "uint256",
            },
          ],
          name: "SwappedTokens",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Withdrawn",
          type: "event",
        },
        {
          inputs: [],
          name: "SWAP_SELECTOR",
          outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SWAP_SIMPLE_MODE_SELECTOR",
          outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "TIMELOCK",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "WBTC",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "acceptOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
          ],
          name: "allowToken",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
          ],
          name: "balances",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint8", name: "_percentage", type: "uint8" },
            {
              internalType: "enum PrelaunchPoints.Exchange",
              name: "_exchange",
              type: "uint8",
            },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint8", name: "_percentage", type: "uint8" },
            {
              internalType: "enum PrelaunchPoints.Exchange",
              name: "_exchange",
              type: "uint8",
            },
            { internalType: "uint256", name: "_typeIndex", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "claimAndStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "convertAllBTC",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "emergencyMode",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "exchangeProxy",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "isTokenAllowed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "bytes32", name: "_referral", type: "bytes32" },
          ],
          name: "lock",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "address", name: "_for", type: "address" },
            { internalType: "bytes32", name: "_referral", type: "bytes32" },
          ],
          name: "lockFor",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "loopActivation",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lpBTC",
          outputs: [
            { internalType: "contract ILpBTC", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lpBTCVault",
          outputs: [
            { internalType: "contract ILpBTCVault", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "maxDepositCap",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_owner", type: "address" },
          ],
          name: "proposeOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "proposedOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "recoverERC20",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "_tokens", type: "address[]" },
            { internalType: "uint256[]", name: "_amounts", type: "uint256[]" },
          ],
          name: "setDepositMaxCaps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "_mode", type: "bool" }],
          name: "setEmergencyMode",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_loopAddress", type: "address" },
            { internalType: "address", name: "_vaultAddress", type: "address" },
          ],
          name: "setLoopAddresses",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "startClaimDate",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalLpBTC",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ];
      var o = n(49459),
        l = n(19152),
        p = n(63161),
        d = n(60954);
      class u extends o.Z {
        constructor() {
          super(),
            (this.lock = async (e, t, n) => {
              let r = (0, s.NC)(n, { size: 32 }),
                o = this.tokens[t];
              try {
                return await (0, a.n)(p.wagmiConfig, {
                  ...this.prelaunchPointsContract,
                  functionName: "lock",
                  args: [o, (0, i.v)(e, 8), r],
                });
              } catch (e) {
                (0, d.CF)({
                  title: "Something went wrong",
                  description: null == e ? void 0 : e.shortMessage,
                  type: "error",
                });
              }
            }),
            (this.prelaunchPointsContract = {
              address: l.U.prelaunchPointsBtc,
              abi: r,
            }),
            (this.tokens = l.U.tokensBtc);
        }
      }
      var y = u;
    },
    16497: function (e, t, n) {
      var a = n(14793),
        s = n(49459),
        i = n(19152);
      class r extends s.Z {
        constructor() {
          super(),
            (this.prelaunchPointsContract = {
              address: i.U.prelaunchPointsScroll,
              abi: a.L,
            }),
            (this.tokens = i.U.tokensScroll);
        }
      }
      t.Z = r;
    },
    64800: function (e, t, n) {
      var a = n(14793),
        s = n(49459),
        i = n(19152);
      class r extends s.Z {
        constructor() {
          super(),
            (this.prelaunchPointsContract = {
              address: i.U.prelaunchPointsYieldNest,
              abi: a.L,
            }),
            (this.tokens = i.U.tokens);
        }
      }
      t.Z = r;
    },
    28143: function (e, t, n) {
      var a = n(12531),
        s = n(46053),
        i = n(2265),
        r = n(99441),
        o = n(58729);
      t.Z = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "deposit",
          t = (0, i.useRef)(!1),
          [n, l] = (0, i.useState)({
            initialized: !1,
            hash: void 0,
            isChecking: !1,
            completed: !1,
          }),
          p = (0, r.Zl)(s.Hh),
          { isLoading: d, isSuccess: u } = (0, o.A)({ hash: n.hash });
        return (
          (0, i.useEffect)(() => {
            n.initialized && n.hash && l((e) => ({ ...e, isChecking: !0 }));
          }, [n.initialized, n.hash, d]),
          (0, i.useEffect)(() => {
            n.initialized &&
              ("withdraw" !== e || n.hash || (0, a.Vs)("failed"),
              n.hash &&
                (p(!0),
                t.current ||
                  ("deposit" === e
                    ? (0, a.Cu)()
                    : "mint" === e
                    ? (0, a.AW)("success")
                    : "convertAndMint" === e
                    ? (0, a.AW)("success", "convertMint")
                    : (0, a.Vs)(),
                  (t.current = !0)),
                setTimeout(() => {
                  l((e) => ({
                    ...e,
                    initialized: !1,
                    isChecking: !1,
                    completed: !0,
                  })),
                    location.reload();
                }, 5e3)));
          }, [e, n.initialized, n.hash, u, p]),
          {
            ...n,
            isConfirming: d,
            isTransactionLoading:
              null != n &&
              !!n.initialized &&
              (null == n ? void 0 : n.isChecking),
            setHash: (e) => {
              (t.current = !1), l((t) => ({ ...t, initialized: !0, hash: e }));
            },
          }
        );
      };
    },
    10540: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var a = n(42467),
        s = n(56872),
        i = n(63161),
        r = n(21620),
        o = n(14793),
        l = n(19152),
        p = n(97281),
        d = n.n(p),
        u = n(85020);
      let y = [
          {
            inputs: [
              {
                internalType: "address",
                name: "_exchangeProxy",
                type: "address",
              },
              {
                internalType: "address",
                name: "_wethAddress",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "_allowedTokens",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "_initialMaxCap",
                type: "uint256[]",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "target", type: "address" },
            ],
            name: "AddressEmptyCode",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "AddressInsufficientBalance",
            type: "error",
          },
          { inputs: [], name: "ArrayLenghtsDoNotMatch", type: "error" },
          { inputs: [], name: "CannotClaimZero", type: "error" },
          { inputs: [], name: "CannotLockZero", type: "error" },
          { inputs: [], name: "CannotWithdrawZero", type: "error" },
          { inputs: [], name: "CurrentlyNotPossible", type: "error" },
          { inputs: [], name: "FailedInnerCall", type: "error" },
          { inputs: [], name: "FailedToSendEther", type: "error" },
          { inputs: [], name: "InvalidToken", type: "error" },
          { inputs: [], name: "LoopNotActivated", type: "error" },
          { inputs: [], name: "MathOverflowedMulDiv", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "MaxDepositCapReached",
            type: "error",
          },
          { inputs: [], name: "NoLongerPossible", type: "error" },
          { inputs: [], name: "NotAuthorized", type: "error" },
          { inputs: [], name: "NotProposedOwner", type: "error" },
          { inputs: [], name: "NotValidToken", type: "error" },
          { inputs: [], name: "NothingToClaim", type: "error" },
          { inputs: [], name: "ReceiveDisabled", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          { inputs: [], name: "SellTokenApprovalFailed", type: "error" },
          { inputs: [], name: "SwapCallFailed", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "TokenNotAllowed",
            type: "error",
          },
          { inputs: [], name: "UseClaimInstead", type: "error" },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "inputTokenAmount",
                type: "uint256",
              },
            ],
            name: "WrongDataAmount",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "inputToken", type: "address" },
              { internalType: "address", name: "outputToken", type: "address" },
            ],
            name: "WrongDataTokens",
            type: "error",
          },
          { inputs: [], name: "WrongExchange", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
            ],
            name: "WrongRecipient",
            type: "error",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "selector", type: "bytes4" },
            ],
            name: "WrongSelector",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "reward",
                type: "uint256",
              },
            ],
            name: "Claimed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "amountETH",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amountlpETH",
                type: "uint256",
              },
            ],
            name: "Converted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "DepositMaxCapUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !1, internalType: "bool", name: "mode", type: "bool" },
            ],
            name: "EmergencyModeSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "bytes32",
                name: "referral",
                type: "bytes32",
              },
            ],
            name: "Locked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "loopAddress",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "vaultAddress",
                type: "address",
              },
            ],
            name: "LoopAddressesUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "token",
                type: "address",
              },
            ],
            name: "NewTokenAllowed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnerProposed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnerUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Recovered",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "typeIndex",
                type: "uint256",
              },
            ],
            name: "StakedVault",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "sellToken",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "sellAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "buyETHAmount",
                type: "uint256",
              },
            ],
            name: "SwappedTokens",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Withdrawn",
            type: "event",
          },
          {
            inputs: [],
            name: "ETH",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "SWAP_SELECTOR",
            outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "SWAP_SIMPLE_MODE_SELECTOR",
            outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "TIMELOCK",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "WETH",
            outputs: [
              { internalType: "contract IWETH", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_token", type: "address" },
            ],
            name: "allowToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "address", name: "", type: "address" },
            ],
            name: "balances",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_token", type: "address" },
              { internalType: "uint8", name: "_percentage", type: "uint8" },
              {
                internalType: "enum PrelaunchPoints.Exchange",
                name: "_exchange",
                type: "uint8",
              },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_token", type: "address" },
              { internalType: "uint8", name: "_percentage", type: "uint8" },
              {
                internalType: "enum PrelaunchPoints.Exchange",
                name: "_exchange",
                type: "uint8",
              },
              { internalType: "uint256", name: "_typeIndex", type: "uint256" },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            name: "claimAndStake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "convertAllETH",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "emergencyMode",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "exchangeProxy",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "isTokenAllowed",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_token", type: "address" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "bytes32", name: "_referral", type: "bytes32" },
            ],
            name: "lock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "_referral", type: "bytes32" },
            ],
            name: "lockETH",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_for", type: "address" },
              { internalType: "bytes32", name: "_referral", type: "bytes32" },
            ],
            name: "lockETHFor",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_token", type: "address" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "address", name: "_for", type: "address" },
              { internalType: "bytes32", name: "_referral", type: "bytes32" },
            ],
            name: "lockFor",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "loopActivation",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lpETH",
            outputs: [
              { internalType: "contract ILpETH", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lpETHVault",
            outputs: [
              {
                internalType: "contract ILpETHVault",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "maxDepositCap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "proposeOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "proposedOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              { internalType: "uint256", name: "tokenAmount", type: "uint256" },
            ],
            name: "recoverERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "_tokens", type: "address[]" },
              {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
              },
            ],
            name: "setDepositMaxCaps",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bool", name: "_mode", type: "bool" }],
            name: "setEmergencyMode",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_loopAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_vaultAddress",
                type: "address",
              },
            ],
            name: "setLoopAddresses",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "startClaimDate",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalLpETH",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_token", type: "address" },
            ],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        c = [
          {
            inputs: [
              { internalType: "address", name: "resolver_", type: "address" },
              { internalType: "address[]", name: "tokens_", type: "address[]" },
              {
                internalType: "uint256[]",
                name: "minbalances_",
                type: "uint256[]",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "ArrayLenghtsDontMatch", type: "error" },
          {
            inputs: [{ internalType: "bytes32", name: "uid", type: "bytes32" }],
            name: "AttestationBadgeMismatch",
            type: "error",
          },
          { inputs: [], name: "ExpirationDisabled", type: "error" },
          { inputs: [], name: "MintingDeactivated", type: "error" },
          { inputs: [], name: "NoBadgesLeft", type: "error" },
          { inputs: [], name: "NotAuthorized", type: "error" },
          { inputs: [], name: "NotEligible", type: "error" },
          { inputs: [], name: "NotProposedOwner", type: "error" },
          { inputs: [], name: "RevocationDisabled", type: "error" },
          { inputs: [], name: "SingletonBadge", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "TokenAlreadyExists",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "TokenDoesNotExist",
            type: "error",
          },
          { inputs: [], name: "TooManyBadges", type: "error" },
          { inputs: [], name: "Unauthorized", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
            ],
            name: "IssueBadge",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnerProposed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnerUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
            ],
            name: "RevokeBadge",
            type: "event",
          },
          {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "activateMinting",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "minAmount", type: "uint256" },
            ],
            name: "addToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            name: "badgeTokenURI",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [],
            name: "deactivateMinting",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "uid", type: "bytes32" }],
            name: "getAndValidateBadge",
            outputs: [
              {
                components: [
                  { internalType: "bytes32", name: "uid", type: "bytes32" },
                  { internalType: "bytes32", name: "schema", type: "bytes32" },
                  { internalType: "uint64", name: "time", type: "uint64" },
                  {
                    internalType: "uint64",
                    name: "expirationTime",
                    type: "uint64",
                  },
                  {
                    internalType: "uint64",
                    name: "revocationTime",
                    type: "uint64",
                  },
                  { internalType: "bytes32", name: "refUID", type: "bytes32" },
                  {
                    internalType: "address",
                    name: "recipient",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "attester",
                    type: "address",
                  },
                  { internalType: "bool", name: "revocable", type: "bool" },
                  { internalType: "bytes", name: "data", type: "bytes" },
                ],
                internalType: "struct Attestation",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "hasBadge",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
            ],
            name: "isEligible",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { internalType: "bytes32", name: "uid", type: "bytes32" },
                  { internalType: "bytes32", name: "schema", type: "bytes32" },
                  { internalType: "uint64", name: "time", type: "uint64" },
                  {
                    internalType: "uint64",
                    name: "expirationTime",
                    type: "uint64",
                  },
                  {
                    internalType: "uint64",
                    name: "revocationTime",
                    type: "uint64",
                  },
                  { internalType: "bytes32", name: "refUID", type: "bytes32" },
                  {
                    internalType: "address",
                    name: "recipient",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "attester",
                    type: "address",
                  },
                  { internalType: "bool", name: "revocable", type: "bool" },
                  { internalType: "bytes", name: "data", type: "bytes" },
                ],
                internalType: "struct Attestation",
                name: "attestation",
                type: "tuple",
              },
            ],
            name: "issueBadge",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "maxNumberBadges",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "mintingActivated",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "minAmount", type: "uint256" },
            ],
            name: "modifyToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "proposeOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "proposedOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "removeToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "resolver",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { internalType: "bytes32", name: "uid", type: "bytes32" },
                  { internalType: "bytes32", name: "schema", type: "bytes32" },
                  { internalType: "uint64", name: "time", type: "uint64" },
                  {
                    internalType: "uint64",
                    name: "expirationTime",
                    type: "uint64",
                  },
                  {
                    internalType: "uint64",
                    name: "revocationTime",
                    type: "uint64",
                  },
                  { internalType: "bytes32", name: "refUID", type: "bytes32" },
                  {
                    internalType: "address",
                    name: "recipient",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "attester",
                    type: "address",
                  },
                  { internalType: "bool", name: "revocable", type: "bool" },
                  { internalType: "bytes", name: "data", type: "bytes" },
                ],
                internalType: "struct Attestation",
                name: "attestation",
                type: "tuple",
              },
            ],
            name: "revokeBadge",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "numberBadges",
                type: "uint256",
              },
            ],
            name: "setNumberBadges",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "tokenCounter",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        m = async (e, t, n) => {
          let p =
              t == u.gT.MAINNET_CHAIN_ID
                ? n
                  ? l.U.tokensBtc
                  : l.U.tokens
                : l.U.tokensScroll,
            m = [],
            h = Object.keys(p).filter((e) => "ETH" !== e),
            b = Object.keys(p).filter((e) => "ETH" !== e),
            x = h.length,
            f = b.length;
          h.forEach((t) => {
            "ynETH" == t && e == l.U.prelaunchPoints
              ? m.push({
                  address: p[t],
                  abi: r.Wo,
                  functionName: "balanceOf",
                  args: [l.U.prelaunchPointsYieldNest],
                })
              : m.push({
                  address: p[t],
                  abi: r.Wo,
                  functionName: "balanceOf",
                  args: [e],
                });
          }),
            b.forEach((a) => {
              "ynETH" == a
                ? m.push({
                    address: l.U.prelaunchPointsYieldNest,
                    abi: o.L,
                    functionName: "balances",
                    args: [e, l.U.tokens.ynETH],
                  })
                : m.push({
                    address:
                      t == u.gT.MAINNET_CHAIN_ID
                        ? n
                          ? l.U.prelaunchPointsBtc
                          : l.U.prelaunchPoints
                        : l.U.prelaunchPointsScroll,
                    abi: o.L,
                    functionName: "balances",
                    args: [e, p[a]],
                  });
            }),
            (n || t == u.gT.SCROLL_CHAIN_ID) &&
              b.forEach((e) => {
                m.push({
                  address: n
                    ? l.U.prelaunchPointsBtc
                    : l.U.prelaunchPointsScroll,
                  abi: y,
                  functionName: "maxDepositCap",
                  args: [p[e]],
                });
              });
          let T = await (0, a.L)(i.mainnetConfig, {
              address: l.U.nftAficionado,
              abi: r.Hr,
              functionName: "balanceOf",
              args: [e],
            }),
            v = await (0, a.L)(i.scrollConfig, {
              address: l.U.canvasBadge,
              abi: c,
              functionName: "hasBadge",
              args: [e],
            }),
            g =
              1 == t
                ? i.mainnetConfig
                : 42161 == t
                ? i.wagmiConfig
                : i.scrollConfig,
            w = await (0, s.J)(g, { contracts: m }),
            k = {
              balanceOf: {},
              locked: {},
              hasLocked: !1,
              hasNft: !1,
              hasBadge: !1,
              caps: {},
            };
          (k.hasNft = !!T && T > 0n), (k.hasBadge = v);
          for (let e = 0; e < x; e++)
            k.balanceOf[h[e]] = "success" == w[e].status ? w[e].result : 0n;
          for (let e = x; e < x + f; e++)
            k.locked[b[e - x]] = "success" == w[e].status ? w[e].result : 0n;
          if (n || t == u.gT.SCROLL_CHAIN_ID)
            for (let e = x + f; e < w.length; e++)
              k.caps[b[e - x - f]] =
                "success" == w[e].status ? w[e].result : 0n;
          let C = 0n;
          return (
            d()(k.locked, (e, t) => {
              C += e;
            }),
            (k.hasLocked = C > 0n),
            k
          );
        };
      var h = n(2265),
        b = n(70141),
        x = function (e) {
          let { address: t, chainId: n, isBTC: a } = e,
            [s, i] = (0, h.useState)({
              balanceOf: {},
              locked: {},
              caps: {},
              hasLocked: !1,
              hasNft: !1,
              hasBadge: !1,
              isDataLoaded: !1,
            }),
            r = (0, b.K)({ address: t });
          return (
            (0, h.useEffect)(() => {
              (async () => {
                if (t && n) {
                  var e;
                  let s = await m(t, n, a);
                  (s.balanceOf.ETH =
                    (null == r
                      ? void 0
                      : null === (e = r.data) || void 0 === e
                      ? void 0
                      : e.value) || 0n),
                    (s.caps.ETH = s.caps.WETH || 0n),
                    i((e) => ({ ...e, ...s, isDataLoaded: !0 }));
                } else
                  i({
                    balanceOf: {},
                    locked: {},
                    caps: {},
                    hasLocked: !1,
                    hasNft: !1,
                    hasBadge: !1,
                    isDataLoaded: !1,
                  });
              })();
            }, [t, null == r ? void 0 : r.data, n, a]),
            s
          );
        };
    },
    98786: function (e, t) {
      t.Z = {
        src: "/img/loop-nft.bc06c834.svg",
        height: 1315,
        width: 1524,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAY1BMVEVMaXGueP98bvt6iuZ7r8h6gcp8Y/5KGf91cdq+y8mYh/mddP9/kdV7meCElfWHwMGIhdShl/KUo9d8Z92Eat98cOeIj+53dch6q9dtU6GNzr2NpuOUj/qNx914f956YcOMiud8sBvkAAAAG3RSTlMAaIt/8PpSCDMLyf1Wuv7ynaO9+/v91Xpuny8oR6OUAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAPElEQVR4nD3BxwGAIBAAwVXBOzBgxACG/qv05wy4PW6Hwmlyts8AY1rW+e7ATa81yQu04eqbAhCtylr4fWMsAnC6v7MDAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 7,
      };
    },
  },
]);
