(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2318],
  {
    3937: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 88904));
    },
    88904: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return tt;
          },
        });
      var s,
        a,
        r = l(57437),
        i = l(66648),
        n = l(58054),
        o = l(49582),
        c = l(60019),
        d = l(2265),
        u = l(98786),
        x = function () {
          let { isBTC: e } = (0, n.Z)(),
            t = o.ZP.timeline({ delay: 0.2 }),
            l = (0, d.useRef)(null);
          return (
            (0, c.V)(
              () => {
                var l, s, a, r, i, n, c, d;
                o.ZP.set(".actions button", { opacity: 0 }),
                  o.ZP.set(document.body, { opacity: 1 }),
                  o.ZP.set(
                    null === (l = document) || void 0 === l
                      ? void 0
                      : l.querySelectorAll(".header .nft"),
                    { opacity: 0, y: -20 }
                  ),
                  e &&
                    (null === (d = document) ||
                      void 0 === d ||
                      null === (c = d.body) ||
                      void 0 === c ||
                      null === (n = c.classList) ||
                      void 0 === n ||
                      n.add("btc")),
                  o.ZP.to(
                    null === (s = document) || void 0 === s
                      ? void 0
                      : s.querySelector(".app .main-loop-bg"),
                    {
                      duration: 5,
                      stagger: 0.3,
                      opacity: 1,
                      ease: "sine.out",
                      "--mask":
                        "linear-gradient(-45deg, transparent -50%, black 0%)",
                    }
                  ),
                  t
                    .to(
                      null === (a = document) || void 0 === a
                        ? void 0
                        : a.querySelectorAll(".header .nft"),
                      { opacity: 1, y: 0, ease: "sine.out" },
                      "-=1"
                    )
                    .to(
                      null === (r = document) || void 0 === r
                        ? void 0
                        : r.querySelectorAll(".header h1"),
                      {
                        duration: 3,
                        stagger: 0.3,
                        opacity: 1,
                        ease: "sine.out",
                        "--mask":
                          "linear-gradient(-45deg, transparent -50%, black 0%)",
                      },
                      "-=1"
                    )
                    .to(
                      null === (i = document) || void 0 === i
                        ? void 0
                        : i.querySelectorAll(".header h2"),
                      {
                        duration: 3,
                        stagger: 0.3,
                        opacity: 1,
                        ease: "sine.out",
                        "--mask":
                          "linear-gradient(-45deg, transparent -50%, black 0%)",
                      },
                      "-=1.5"
                    );
              },
              { scope: l }
            ),
            (0, r.jsxs)("div", {
              ref: l,
              className: "header overflow-clip pt-16 sm:pt-0",
              children: [
                (0, r.jsx)(i.default, {
                  src: u.Z,
                  alt: "NFT Image",
                  className:
                    "nft max-w-[350px] sm:max-w-[400px] md:max-w-[500px] mx-auto translate-x-4 sm:translate-x-0",
                  priority: !0,
                  placeholder: "blur",
                }),
                (0, r.jsx)("h1", {
                  className:
                    "mask-it -mt-6 sm:-mt-10 pb-6 sm:pb-12 text-black px-2 sm:px-0 text-4xl sm:text-5.5xl xl:text-7xl text-center mx-auto leading-tight",
                  children: "Pool Points Party",
                }),
                (0, r.jsxs)("h2", {
                  className:
                    "mask-it pb-4 text-black px-2 sm:px-0 text-2xl sm:text-4xl max-w-[700px] xl:text-5xl xl:max-w-[1050px] mx-auto font-normal leading-tight tracking-tight text-center",
                  children: [
                    "Deposit ",
                    e ? "BTC" : "ETH",
                    " and LRTs to earn Quaaloops",
                    " ",
                    (0, r.jsx)("br", { className: "hidden sm:block" }),
                    (0, r.jsx)("span", {
                      className: "font-medium bg-text-clip ".concat(
                        e ? "bg-text-orange-linear" : "bg-text-green-linear"
                      ),
                      children: "or get 20%",
                    }),
                    " ",
                    "of the friends you refer.",
                  ],
                }),
              ],
            })
          );
        },
        m = l(32929),
        h = l(61195),
        p = function (e) {
          let { value: t = "", decimal: l, delay: s } = e,
            a = (0, d.useRef)("0"),
            i = (0, d.useMemo)(() => {
              let e = { from: a.current, to: t.toString() };
              return (a.current = e.to), e;
            }, [t]);
          return (0, r.jsx)(h.Z, { ...i, decimal: l, delay: s });
        },
        g = function (e) {
          let {
              title: t = "",
              opacity: l = 90,
              symbol: s = "",
              symbolEnd: a = "",
              value: i = "",
              tooltip: n = "",
              valueTooltip: o,
              className: c = "",
              h1Color: d = "",
              center: u,
              valueChildren: x,
              decimal: h,
              delay: g,
            } = e,
            f = (0, r.jsxs)("div", {
              className: "span",
              children: [
                s,
                (0, r.jsx)(p, { value: i, decimal: h, delay: g }),
                a,
              ],
            }),
            b = "text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl "
              .concat(d || "bg-text-block-linear bg-text-clip", " ")
              .concat(x ? "flex items-center gap-3" : "");
          return (0, r.jsxs)("div", {
            className: "text-block "
              .concat(u ? "text-center" : "", " ")
              .concat(c),
            children: [
              t &&
                (0, r.jsxs)("h6", {
                  className: "flex items-center gap-1 mb-1 sm:mb-2 opacity-"
                    .concat(l, " text-sm sm:text-base ")
                    .concat(u ? "justify-center" : ""),
                  children: [
                    t,
                    n &&
                      (0, r.jsx)(m.Z, {
                        content: n,
                        children: (0, r.jsx)("svg", {
                          className: "icon-info",
                          width: 12,
                          height: 12,
                          children: (0, r.jsx)("use", {
                            href: "/icons/icons.svg#icon-info",
                          }),
                        }),
                      }),
                  ],
                }),
              o
                ? (0, r.jsxs)("h1", {
                    className: b,
                    children: [(0, r.jsx)(m.Z, { content: o, children: f }), x],
                  })
                : (0, r.jsxs)("h1", { className: b, children: [f, x] }),
            ],
          });
        },
        f = l(85020),
        b = l(16906),
        v = l(24307),
        j = l(84017),
        y = l(19152),
        N = l(10540),
        w = l(46053),
        T = l(55067),
        E = l(67365),
        S = l(25524),
        A = l(78746),
        L = l(97281),
        O = l.n(L),
        C = l(49972),
        P = l.n(C),
        I = l(24735),
        k = l.n(I),
        R = l(99441),
        _ = l(26735),
        U = l(98286),
        D = l(32290),
        H = l(26260),
        B = l(12531),
        F = l(60954),
        Z = l(47722),
        z = l(5582),
        M = function (e) {
          let { value: t = "", className: l = "", onUpdateClick: s } = e,
            a = (0, d.useRef)("0"),
            { isBTC: i } = (0, n.Z)(),
            [o, c] = (0, d.useState)(""),
            u = (0, d.useMemo)(() => {
              let e = {
                from: "NaN" == a.current ? "0" : a.current,
                to: t.toString(),
              };
              return (a.current = e.to), e;
            }, [t]),
            x = (e) => {
              let t = e.replaceAll(",", "");
              c("." === t.slice(-1) ? e : (0, E._6)(Number(t), 2));
            };
          return (0, r.jsxs)("div", {
            className:
              "text-block text-center flex flex-col items-center justify-center ".concat(
                l
              ),
            children: [
              (0, r.jsxs)("h6", {
                className:
                  "flex items-center justify-center gap-1 mb-1 sm:mb-2 opacity-50 text-sm sm:text-base",
                children: [
                  "Estimated APR",
                  (0, r.jsx)(m.Z, {
                    className:
                      "sm:!max-w-[34rem] -translate-x-6 sm:translate-x-0",
                    content:
                      "Determines your proportion of new points distributed per hour for a deposit of 1 ETH. Estimates your final share of the total points at the current dilution and calculates a return on invest for a 7% Airdrop with your set FDV. Not considering referrals or other bonuses. ROI estimations are annualized based on a Points-Program duration of 6 months. Program could end later or much earlier.",
                    children: (0, r.jsx)("svg", {
                      className: "icon-info",
                      width: 12,
                      height: 12,
                      children: (0, r.jsx)("use", {
                        href: "/icons/icons.svg#icon-info",
                      }),
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(z.Z, {
                className: "card-mint",
                content: (0, r.jsxs)("div", {
                  className: "relative p-5",
                  children: [
                    (0, r.jsx)("h2", {
                      className: "mb-4",
                      children: "Calculate your APR",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-xs opacity-70 pr-2",
                      children:
                        "Estimate the Fully Diluted Valuation for the LOOP token to calculate the instant APR",
                    }),
                    (0, r.jsxs)("div", {
                      className: "relative mt-3 mb-4 rounded-md shadow-sm",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",
                          children: (0, r.jsx)("span", {
                            className: "text-gray-500 text-base",
                            children: "$",
                          }),
                        }),
                        (0, r.jsx)("input", {
                          type: "text",
                          name: "fdv",
                          id: "fdv",
                          className:
                            "block w-full rounded-14 border-0 py-3 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600",
                          placeholder: "1.000.000,00",
                          value: o,
                          onChange: (e) => {
                            x(e.target.value);
                          },
                          onPaste: (e) => {
                            e.preventDefault(),
                              x(e.clipboardData.getData("text/plain"));
                          },
                        }),
                      ],
                    }),
                    (0, r.jsx)("button", {
                      type: "button",
                      "aria-label": "A button that on click update ar value",
                      id: "update-apr",
                      className: "deposit w-full mt-auto ".concat(
                        (0, Z.L)({ size: "sm", color: "primary" })
                      ),
                      onClick: () => {
                        s(o.replaceAll(",", ""));
                      },
                      children: "Update",
                    }),
                  ],
                }),
                children: (0, r.jsxs)("div", {
                  className: "box relative cursor-pointer",
                  children: [
                    (0, r.jsx)("h1", {
                      className:
                        "text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl ".concat(
                          i ? "bg-text-orange-linear" : "bg-text-green-linear",
                          " bg-text-clip text-medium"
                        ),
                      children: (0, r.jsx)("div", {
                        className: "span",
                        children: isNaN(null == u ? void 0 : u.to)
                          ? "--"
                          : (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(h.Z, {
                                  ...u,
                                  decimal: 2,
                                  delay: 0.2,
                                }),
                                " %",
                              ],
                            }),
                      }),
                    }),
                    (0, r.jsxs)("span", {
                      className: "".concat(
                        i ? "text-orange" : "text-step1",
                        " text-xs bg-white rounded-full p-1 px-3 mt-1 sm:mt-2 inline-flex shadow-sm"
                      ),
                      children: [
                        "Calculate your APR",
                        (0, r.jsx)("svg", {
                          className: "icon-edit size-3 ml-1",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 12 12",
                          children: (0, r.jsx)("path", {
                            d: "M7.373 1.94a1.5 1.5 0 0 1 2.122 0l.707.706a1.5 1.5 0 0 1 0 2.122L5.005 9.964a.5.5 0 0 1-.255.137l-2.652.53a.5.5 0 0 1-.588-.588l.53-2.652a.5.5 0 0 1 .137-.255l5.196-5.197zm1.415.706.707.708a.5.5 0 0 1 0 .707l-.707.707-1.415-1.414.707-.708a.5.5 0 0 1 .708 0zM6.666 4.061 2.991 7.736l-.353 1.767 1.767-.353L8.08 5.475 6.666 4.06z",
                            fill: i ? "#f7931a" : "#4EB700",
                            fillRule: "evenodd",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        W = (e) => {
          let { onCanvasActiveClick: t } = e,
            { isBTC: l } = (0, n.Z)();
          return (0, r.jsx)("section", {
            className:
              "active-nft z-1 w-full -mt-6 px-4 pt-10 pb-4 bg-white/70 border rounded-b-20 border-secondary min-h-32",
            children: (0, r.jsxs)("div", {
              className: "active-nft-body relative card-mint overflow-x-hidden",
              children: [
                (0, r.jsx)("div", {
                  className: "absolute inset-0 bg-mint-linear rounded-2xl",
                }),
                (0, r.jsxs)("div", {
                  className:
                    "mint-content relative z-1 p-6 sm:py-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "groups flex flex-col lg:flex-row items-center gap-4",
                      children: [
                        (0, r.jsx)(i.default, {
                          src: "/img/canvas-card.png",
                          alt: "Canvas Card",
                          width: 124,
                          height: 104,
                        }),
                        (0, r.jsxs)("div", {
                          className: "col text-center md:text-left",
                          children: [
                            (0, r.jsx)("h1", {
                              className: "text-lg font-regular mb-2",
                              children: "You have the Loop Canvas Badge!",
                            }),
                            (0, r.jsxs)("div", {
                              className: "div flex flex-col sm:flex-row gap-10",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "col flex items-center gap-2",
                                  children: [
                                    (0, r.jsx)(g, {
                                      symbol: "+",
                                      value: "250",
                                      h1Color:
                                        "bg-primary-gradient bg-text-clip text-3xl lg:text-3.5xl font-medium",
                                      className: "text-white",
                                      decimal: 0,
                                      delay: 3,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "text-sm opacity-50",
                                      children: "Free Quaaloops",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "col flex items-center gap-2",
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className:
                                        "bg-primary-gradient bg-text-clip text-3xl lg:text-3.5xl font-medium",
                                      children: (0, r.jsx)(g, {
                                        symbol: "+",
                                        value: "20",
                                        symbolEnd: "%",
                                        h1Color:
                                          "bg-primary-gradient bg-text-clip text-3xl lg:text-3.5xl font-medium",
                                        className: "text-white",
                                        decimal: 0,
                                        delay: 3,
                                      }),
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "text-sm opacity-50",
                                      children: "Bonus Quaaloops",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "mint-action w-full md:w-auto flex flex-col items-center lg:mr-9",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        "aria-label":
                          "A button that on click provides liquidity",
                        id: "provide-liquidity",
                        className: "provide-liquidity ".concat(
                          (0, Z.L)({
                            size: "lg",
                            color: l ? "orange" : "primary",
                          }),
                          " font-normal w-full sm:max-w-[200px]"
                        ),
                        onClick: t,
                        children: "Activate",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Y = l(27269);
      l(11183);
      var Q = (e) => {
          let { className: t = "" } = e;
          return (0, r.jsx)("div", {
            className: "circle-main ".concat(t),
            children: (0, r.jsx)(Y.l, {
              of: Array.from({ length: 100 }, (e, t) => t + 1),
              render: () =>
                (0, r.jsx)("div", {
                  className: "circle-container",
                  children: (0, r.jsx)("div", { className: "circle" }),
                }),
            }),
          });
        },
        q = l(49459),
        V = l(53036),
        G = l(72059),
        K = l(85053),
        J = l(22559),
        X = l(57818);
      function $(e) {
        let {
          className: t,
          label: l,
          value: s = 0,
          min: a = 0,
          max: i = 100,
          handleChange: n,
        } = e;
        return (0, r.jsxs)("div", {
          className: "slider-range relative ".concat(t || ""),
          children: [
            l &&
              (0, r.jsx)("label", {
                htmlFor: "default-range",
                className:
                  "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: l,
              }),
            (0, r.jsx)("input", {
              id: "range-input",
              type: "range",
              min: a,
              max: i,
              defaultValue: s,
              onChange: (e) => n(e.target.valueAsNumber),
              className:
                "w-full h-2 bg-gray-200 rounded-lg range-lg appearance-none cursor-pointer range-slider",
              style: {
                background:
                  "linear-gradient(to right, rgb(115 120 255 / 50%) 0%, rgb(115 120 255 / 100%) "
                    .concat(s, "%, #D1D5DB ")
                    .concat(s, "%)"),
              },
            }),
            (0, r.jsxs)("output", {
              htmlFor: "range-input",
              style: {
                left: "".concat(((s - (a - 4)) / (i + 8 - a)) * 100, "%"),
                transform: "translateX(-50%)",
              },
              className:
                "absolute bg-slate-200 p-2 rounded-lg shadow-lg -bottom-8 inset-x-0 w-14 text-center text-base z-10",
              children: [s, "%"],
            }),
          ],
        });
      }
      var ee = (0, X.default)(() => Promise.resolve($), { ssr: !1 }),
        et = l(25463),
        el = l(68255),
        es = l(96164);
      let ea = (e) => {
        let { children: t, className: l = "" } = e;
        return (0, r.jsx)("div", {
          className: (0, es.m6)(
            "border bg-skeleton border-card-border dark:border-card-border-dark shadow rounded-20 p-7 w-full",
            l
          ),
          children: (0, r.jsx)("div", {
            className: "animate-pulse",
            children: t ? (Array.isArray(t) ? t.map((e) => e) : t) : null,
          }),
        });
      };
      (ea.Avatar = () =>
        (0, r.jsx)("div", {
          className: "h-2 w-full bg-slate-200 rounded-full opacity-50",
        })),
        (ea.CardBox = (e) =>
          (0, r.jsx)("div", {
            className: (0, es.m6)(
              "w-70 h-[180px] mx-auto mt-6 bg-slate-200 rounded-20 opacity-50",
              (null == e ? void 0 : e.className) || ""
            ),
          })),
        (ea.QR = (e) =>
          (0, r.jsx)("div", {
            className: (0, es.m6)(
              "w-44 h-40 mx-auto mt-6 bg-slate-200 rounded-20 opacity-50",
              (null == e ? void 0 : e.className) || ""
            ),
          })),
        (ea.Block = (e) =>
          (0, r.jsx)("div", {
            className: (0, es.m6)(
              "h-2 w-full bg-slate-200 rounded-20 opacity-50",
              (null == e ? void 0 : e.className) || ""
            ),
          })),
        (ea.Card = (e) => {
          let { className: t, children: l } = e;
          return (0, r.jsx)("div", {
            className: (0, es.m6)("bg-skeleton-card rounded-20", t || ""),
            children: Array.isArray(l) ? l.map((e) => e) : l,
          });
        });
      var er = l(28143),
        ei = l(54104),
        en = l(64800),
        eo = l(16497);
      let ec = () =>
        (0, r.jsxs)("div", {
          className: "w-24",
          children: [
            (0, r.jsx)(ea.Block, {
              className: "mt-1.5 mb-1 py-2 max-w-sm mx-auto",
            }),
            (0, r.jsxs)("div", {
              className: "flex items-center justify-end",
              children: [
                "≈$ ",
                (0, r.jsx)(ea.Block, { className: "ml-1 py-2 max-w-16" }),
              ],
            }),
          ],
        });
      var ed = (e) => {
          let {
              type: t = "mint",
              mcPriceListApi: l,
              currencyIndex: s,
              balanceOf: a,
              locked: o,
              isDataLoaded: c,
              address: u,
              chainId: x,
              isOpen: h,
              setIsOpen: p,
            } = e,
            g = V.mX[s],
            [b, j] = (0, d.useState)(!1),
            [N, w] = (0, d.useState)(!0),
            [T, A] = (0, d.useState)(""),
            [L, O] = (0, d.useState)("0"),
            [C, P] = (0, d.useState)(""),
            I = (function (e, t) {
              let [l, s] = (0, d.useState)(e);
              return (
                (0, d.useEffect)(() => {
                  let t = setTimeout(() => {
                    s(e);
                  }, 1e3);
                  return () => {
                    clearTimeout(t);
                  };
                }, [e, 1e3]),
                l
              );
            })(T, 0),
            [k, R] = (0, d.useState)(""),
            [_, U] = (0, d.useState)("0"),
            [D, H] = (0, d.useState)("0"),
            [F, M] = (0, d.useState)("0.5"),
            [W, Q] = (0, d.useState)(100),
            [X, $] = (0, d.useState)(void 0),
            [es, ea] = (0, d.useState)(void 0),
            [ed, eu] = (0, d.useState)(""),
            [ex, em] = (0, d.useState)(""),
            [eh, ep] = (0, d.useState)(0.005),
            [eg, ef] = (0, d.useState)(""),
            [eb, ev] = (0, d.useState)(!0),
            [ej, ey] = (0, d.useState)(100),
            [eN, ew] = (0, d.useState)(),
            [eT, eE] = (0, d.useState)(!1),
            { isBTC: eS, isScroll: eA } = (0, n.Z)(),
            eL = eS || eA || "ynETH" == g.symbol,
            eO = "mint" === t,
            eC = (null == g ? void 0 : g.symbol) || "";
          (0, d.useEffect)(() => {
            if (c) {
              var e;
              let t =
                null !== (e = o[g.symbol]) && void 0 !== e ? e : BigInt(0);
              O(t.toString()),
                H((0, K.d)(t)),
                A(t.toString()),
                ek(t.toString());
            } else H("0"), O("0");
          }, [u, a, c, eC]),
            (0, d.useEffect)(() => {
              ew(
                x == f.gT.MAINNET_CHAIN_ID
                  ? eS
                    ? new ei.Z()
                    : "ynETH" == g.symbol
                    ? new en.Z()
                    : new q.Z()
                  : new eo.Z()
              );
            }, [x, g]),
            (0, d.useEffect)(() => {
              if (T && o && g) {
                let e = BigInt(T),
                  t = o[g.symbol] >= e;
                ev(t), eE(BigInt(T) > 0n && t && !N);
              } else eE(!1);
            }, [T, o, g, N]),
            (0, d.useEffect)(() => {
              if (c && L && ej) {
                let e = ((BigInt(L) * BigInt(ej)) / 100n).toString();
                eP((0, E.GA)(e)), A(e), P(e), setTimeout(() => w(!1), 3e3);
              }
            }, [ej, L, c, eh]),
            (0, d.useEffect)(() => {
              c && ek(T);
            }, [I, c]);
          let eP = (e) => {
              R(Number(e.charAt(e.length - 1)) ? (0, E.jW)(e, 6) : e);
            },
            eI = (e) => {
              100 > parseFloat(e) && (M(e), ep(parseFloat(e) / 100));
            },
            ek = async (e) => {
              if ((eP((0, E.GA)(e)), "WETH" == g.symbol)) {
                var t;
                eu((0, E.GA)(e));
                let s =
                  parseFloat((0, E.GA)(e)) *
                  (null !== (t = l.WETH) && void 0 !== t ? t : 0);
                U(isNaN(s) ? "0" : (0, E.jW)(s, 2)),
                  em(isNaN(s) ? "0" : (0, E.jW)(s, 2));
              } else
                "ynETH" == g.symbol
                  ? parseFloat(C) > 0 && (await e_(eC, C))
                  : parseFloat(C) > 0 && (await eR(eC, C));
            },
            eR = async (e, t) => {
              let l = y.U.tokens[e];
              if (l && x && eh) {
                let e = eh.toString();
                await eU({
                  chainId: x,
                  sellToken: l,
                  sellAmount: t,
                  slippage: e,
                });
              }
            },
            e_ = async (e, t) => {
              console.log("SLIPPAGE", eh);
              let l = y.U.tokens[e];
              if (l && x && eh) {
                let e = eh.toString();
                await eD({
                  project: "yieldnest",
                  sellToken: l,
                  sellAmount: t,
                  slippage: e,
                });
              }
            },
            { mutateAsync: eU } = (0, S.D)({
              ...v.So,
              onSuccess: (e) => {
                var t, s;
                eu((0, E.GA)(e.buyAmount));
                let a =
                  (parseFloat((0, E.GA)(e.sellAmount)) *
                    (null !== (t = l.WETH) && void 0 !== t ? t : 0)) /
                  parseFloat(e.sellTokenToEthRate);
                U(isNaN(a) ? "0" : (0, E.jW)(a, 2));
                let r =
                  parseFloat((0, E.GA)(e.buyAmount)) *
                  (null !== (s = l.WETH) && void 0 !== s ? s : 0);
                em(isNaN(r) ? "0" : (0, E.jW)(r, 2)),
                  ef(e.estimatedPriceImpact);
                let i = e.data.slice(0, 10);
                if ("0x415565b0" == i) $(1);
                else if ("0x803ba26d" == i) $(0);
                else throw Error("Unrecognized 0x exchange selector");
                ea(e.data);
              },
            }),
            { mutateAsync: eD } = (0, S.D)({
              ...v.X7,
              onSuccess: (e) => {
                var t, s;
                eu((0, E.GA)(e.amountOut));
                let a =
                  parseFloat((0, E.GA)(e.amountIn)) *
                  (null !== (t = l.ynETH) && void 0 !== t ? t : 0);
                U(isNaN(a) ? "0" : (0, E.jW)(a, 2));
                let r =
                  parseFloat((0, E.GA)(e.amountOut)) *
                  (null !== (s = l.WETH) && void 0 !== s ? s : 0);
                em(isNaN(r) ? "0" : (0, E.jW)(r, 2)),
                  ef(((100 * r) / a - 100).toString());
                let i = e.data.slice(0, 10);
                if ("0x8af033fb" == i) $(1);
                else if ("0xe21fd0e9" == i) $(0);
                else throw Error("Unrecognized Kyberswap exchange selector");
                ea(e.data);
              },
            }),
            {
              isTransactionLoading: eH,
              completed: eB,
              setHash: eF,
            } = (0, er.Z)("mint"),
            {
              isTransactionLoading: eZ,
              completed: ez,
              setHash: eM,
            } = (0, er.Z)("convertAndMint"),
            eW = async () => {
              j(!0),
                void 0 !== eN && u
                  ? eF(await eN.claim("WETH", 100, 1, ""))
                  : (0, B.AW)("failed"),
                j(!1);
            },
            eY = async () => {
              j(!0),
                void 0 !== eN && u && g && W && es && void 0 !== X
                  ? eM(await eN.claim(g.symbol, W, X, es))
                  : (0, B.AW)("failed", "convertMint"),
                j(!1);
            };
          return (0, r.jsx)(J.Z, {
            state: h,
            onClose: p,
            children: (0, r.jsxs)("div", {
              className:
                "my-6 bg-white border border-dialog-border inline-block w-full max-w-[400px] overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-40",
              children: [
                (0, r.jsxs)(G.V.Title, {
                  as: "div",
                  className: "flex items-center justify-center p-6",
                  children: [
                    (0, r.jsx)("h2", {
                      className: "font-boston text-lg text-black font-medium",
                      children: eO ? "Mint" : "Convert and Mint",
                    }),
                    (0, r.jsx)("div", {
                      onClick: () => p(!1),
                      className:
                        "close-icon absolute right-4 w-12 h-12 rounded-2xl bg-white-2 hover:bg-black-2 grid place-items-center cursor-pointer",
                      children: (0, r.jsx)("svg", {
                        className: "icon-close w-8 h-8",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("use", {
                          xlinkHref: "/icons/icons.svg#icon-close",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)(G.V.Description, {
                  as: "div",
                  className: "py-2 overflow-auto max-h-[90vh]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "group flex items-center justify-between px-8",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "col",
                          children: [
                            (0, r.jsx)("div", {
                              className: "text-xs mb-2",
                              children: "Converting",
                            }),
                            (0, r.jsx)(et.Z, {
                              text: eC || "",
                              icon: (0, r.jsx)(i.default, {
                                src: null == g ? void 0 : g.icon,
                                alt: "eth",
                                className: "",
                                width: 24,
                                height: 24,
                                sizes: "(max-width: 768px) 100vw, 100vw",
                                quality: 100,
                              }),
                              showArrowIcon: !1,
                              className: "cursor-pointer hover:bg-black/5",
                            }),
                          ],
                        }),
                        !eO &&
                          (0, r.jsxs)("div", {
                            className: "col",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "text-xs mb-2 opacity-50 text-right",
                                children: ["Locked: ", (0, E.jW)(D, 6)],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "group-btn flex justify-end items-center gap-2",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "bg-grey-color min-h-10 flex items-center rounded-20 px-4 text-sm text-black/50 font-medium",
                                    children: [ej, "%"],
                                  }),
                                  (0, r.jsx)(z.Z, {
                                    className:
                                      "settings w-[334px] card-deposit",
                                    side: "bottom",
                                    align: "end",
                                    showArrow: !1,
                                    content: (0, r.jsxs)("div", {
                                      className: "relative p-5",
                                      children: [
                                        (0, r.jsxs)("h5", {
                                          className:
                                            "flex items-center gap-1 opacity-60 mb-6",
                                          children: [
                                            "Slippage",
                                            (0, r.jsx)(m.Z, {
                                              content:
                                                "Set the slippage tolerance for your ".concat(
                                                  eC,
                                                  " to WETH swap. Lower slippage may cause your transaction to revert, while higher slippage can be subject to front-running and get a bad swap price."
                                                ),
                                              children: (0, r.jsx)("svg", {
                                                className: "icon-info",
                                                width: 12,
                                                height: 12,
                                                children: (0, r.jsx)("use", {
                                                  href: "/icons/icons.svg#icon-info",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center gap-1",
                                          children: [
                                            (0, r.jsx)(Y.l, {
                                              of: [0.5, 1, 5],
                                              render: (e) =>
                                                (0, r.jsx)("button", {
                                                  className:
                                                    "bg-grey-color min-h-10 flex justify-center items-center rounded-20 min-w-16 card-color-hover text-center text-sm text-black/50 font-medium hover:text-black/60 hover:bg-gray-100 hover:shadow-sm",
                                                  onClick: () =>
                                                    eI(e.toString()),
                                                  children:
                                                    0.5 == e
                                                      ? "Auto"
                                                      : "".concat(e, " %"),
                                                }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className:
                                                "bg-white min-h-10 flex items-center rounded-20 card-color-hover text-center text-sm text-black/50 font-medium hover:text-black/60 hover:bg-gray-100 hover:shadow-sm border-2 border-social-border w-[60px]",
                                              children: [
                                                (0, r.jsx)("input", {
                                                  type: "text",
                                                  defaultValue: "0.5",
                                                  value: F,
                                                  onChange: (e) => {
                                                    eI(e.target.value);
                                                  },
                                                  className:
                                                    "leading-none border-none outline-none w-full text-right rounded-lg ".concat(
                                                      (null == F
                                                        ? void 0
                                                        : F.length) > 3
                                                        ? "max-w-9"
                                                        : "max-w-7"
                                                    ),
                                                }),
                                                "%",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    children: (0, r.jsx)("button", {
                                      className:
                                        "bg-grey-color min-h-10 flex items-center rounded-20 px-3 text-sm text-black/50 font-medium hover:text-black/60 hover:bg-gray-100 hover:shadow-sm",
                                      children: (0, r.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "18px",
                                        height: "18px",
                                        viewBox: "0 0 24 24",
                                        fill: "#5f6368",
                                        children: (0, r.jsx)("path", {
                                          d: "M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "group text-2xl mt-8 flex items-center justify-between px-8",
                      children: [
                        (0, r.jsx)("input", {
                          placeholder: "0",
                          autoComplete: "off",
                          name: "amount",
                          readOnly: !0,
                          value: k,
                          onChange: (e) => {
                            let t = e.target.value.replace(/[^0-9,.]/g, "");
                            ek(
                              (t = (t = t.replace(/,/g, ".")).replace(
                                /\.(?=.*\.)/g,
                                ""
                              ))
                            );
                          },
                          onPaste: (e) => {
                            e.preventDefault(),
                              ek(
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
                        (0, r.jsx)("span", {
                          className: "opacity-50 text-xs text-nowrap",
                          children: "≈$ ".concat(_),
                        }),
                      ],
                    }),
                    eb
                      ? (0, r.jsx)(r.Fragment, {})
                      : (0, r.jsx)("div", {
                          className: "text-red text-xs pt-1 text-right px-8",
                          children: "Not enough funds",
                        }),
                    !eO &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(ee, {
                            className: "pt-6 pb-2 mx-8",
                            value: ej,
                            handleChange: (e) => {
                              ey(e), Q(e), w(!0);
                            },
                          }),
                          (0, r.jsxs)("div", {
                            className: "card-convert-to relative bg-convert-to",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "line-icon relative",
                                children: [
                                  (0, r.jsx)("hr", {
                                    className: "mt-6 opacity-50",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "circle w-8 h-8 -translate-y-4 mx-auto bg-white rounded-full border border-social-border grid place-content-center",
                                    children: (0, r.jsx)("svg", {
                                      className: "icon-arrow",
                                      width: 16,
                                      height: 16,
                                      children: (0, r.jsx)("path", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "#000",
                                        d: "M10,17.41a.68.68,0,0,1-.52-.26l-4-3.94a.67.67,0,0,1,1-.94l2.86,2.86V3.41a.67.67,0,1,1,1.33,0V15.14l2.86-2.87a.67.67,0,0,1,.88-.06l.07.06a.66.66,0,0,1,0,.94l-4,4a.69.69,0,0,1-.48.2Z",
                                        transform: "translate(-2.34 -2.74)",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "content relative pl-8 pr-9 pb-4",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex items-center mb-2 justify-between",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: "text-xs mr-2",
                                        children: "To",
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "",
                                        children: eL
                                          ? (0, r.jsx)(i.default, {
                                              src: "/icons/powered-by-kyber.svg",
                                              alt: "Kyber",
                                              className: "",
                                              width: 100,
                                              height: 10,
                                              sizes:
                                                "(max-width: 768px) 100vw, 100vw",
                                              quality: 100,
                                            })
                                          : (0, r.jsx)(i.default, {
                                              src: "/icons/powered-by-0x.svg",
                                              alt: "0x",
                                              className: "",
                                              width: 100,
                                              height: 10,
                                              sizes:
                                                "(max-width: 768px) 100vw, 100vw",
                                              quality: 100,
                                            }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "group flex items-center justify-between gap-2",
                                    children: [
                                      (0, r.jsx)(et.Z, {
                                        text: "WETH",
                                        icon: (0, r.jsx)(i.default, {
                                          src: "/icons/crypto/WETH.svg",
                                          alt: "WETH",
                                          className: "",
                                          width: 23,
                                          height: 23,
                                          sizes:
                                            "(max-width: 768px) 100vw, 100vw",
                                          quality: 100,
                                        }),
                                        showArrowIcon: !1,
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "col flex flex-col items-end flex-1 min-h-12",
                                        children: N
                                          ? (0, r.jsx)(ec, {})
                                          : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                (0, r.jsx)("input", {
                                                  type: "text",
                                                  readOnly: !0,
                                                  value: (0, E.jW)(ed, 6),
                                                  className:
                                                    "w-full text-2xl bg-primary-gradient2 bg-text-clip leading-none text-right border-none outline-none",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "opacity-50 text-xs text-right text-nowrap",
                                                  children: "≈$ "
                                                    .concat(ex, " (-")
                                                    .concat(
                                                      (0, E.jW)(eg, 2),
                                                      "%)"
                                                    ),
                                                }),
                                              ],
                                            }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, r.jsxs)("div", {
                      className: "line-icon relative",
                      children: [
                        (0, r.jsx)("hr", { className: "mt-6 opacity-50" }),
                        (0, r.jsx)("div", {
                          className:
                            "circle w-8 h-8 -translate-y-4 mx-auto bg-white rounded-full border border-social-border grid place-content-center",
                          children: (0, r.jsx)("svg", {
                            className: "icon-arrow",
                            width: 16,
                            height: 16,
                            children: (0, r.jsx)("path", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "#5a5ee3",
                              d: "M10,17.41a.68.68,0,0,1-.52-.26l-4-3.94a.67.67,0,0,1,1-.94l2.86,2.86V3.41a.67.67,0,1,1,1.33,0V15.14l2.86-2.87a.67.67,0,0,1,.88-.06l.07.06a.66.66,0,0,1,0,.94l-4,4a.69.69,0,0,1-.48.2Z",
                              transform: "translate(-2.34 -2.74)",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "px-5",
                      children: (0, r.jsx)("div", {
                        className:
                          "card-receive relative rounded-14 p-4 mb-8 bg-card-primary-receive-linear before:absolute before:top-0 before:left-0 before:size-full before:rounded-14 before:bg-card-primary-receive-dashed",
                        children: (0, r.jsxs)("div", {
                          className: "content relative",
                          children: [
                            (0, r.jsx)("div", {
                              className: "text-xs mb-2",
                              children: "Minting",
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "group flex items-center justify-between gap-2",
                              children: [
                                (0, r.jsx)(et.Z, {
                                  text: "lpETH",
                                  icon: (0, r.jsx)(i.default, {
                                    src: "/icons/icon-ethereum.svg",
                                    alt: "eth",
                                    className: "",
                                    width: 10,
                                    height: 10,
                                    sizes: "(max-width: 768px) 100vw, 100vw",
                                    quality: 100,
                                  }),
                                  showArrowIcon: !1,
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "col flex flex-col items-end flex-1 min-h-12",
                                  children: N
                                    ? (0, r.jsx)(ec, {})
                                    : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "text",
                                            readOnly: !0,
                                            value: (0, E.jW)(ed, 6),
                                            className:
                                              "w-full text-2xl bg-primary-gradient2 bg-text-clip leading-none text-right border-none outline-none",
                                          }),
                                          (0, r.jsxs)("span", {
                                            className:
                                              "opacity-50 text-xs text-right text-nowrap",
                                            children: ["≈$ ", ex],
                                          }),
                                        ],
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("hr", {
                      className: "absolute h-[1px] w-full inset-x-0 opacity-50",
                    }),
                    (0, r.jsx)("div", {
                      className: "action pt-5 px-10 pb-8",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        "aria-label":
                          "A button that on click withdraw the transaction",
                        id: "connect-wallet",
                        className: "converting w-full ".concat(
                          (0, Z.L)({ size: "lg", color: "primary" })
                        ),
                        onClick: eO ? eW : eY,
                        disabled: !eT,
                        children: eO
                          ? "Mint ".concat("lpETH")
                          : "Convert and Mint",
                      }),
                    }),
                    b &&
                      (0, r.jsx)("div", {
                        className:
                          "loading bg-black/20 fixed inset-0 z-[1000] w-full h-full grid place-content-center",
                        children: (0, r.jsx)(el.Z, {
                          className: "text-primary size-10",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        eu = l(62655),
        ex = () => {
          let { openConnectModal: e } = (0, eu.We)(),
            { isBTC: t } = (0, n.Z)();
          return (0, r.jsx)("button", {
            onClick: e,
            type: "button",
            "aria-label":
              "A button that on click converts currencies and you can mint",
            id: "mint",
            className: "mint ".concat(
              (0, Z.L)({ size: "sm", color: t ? "orange" : "primary" }),
              " font-normal w-full sm:max-w-[200px] h-[50px] rounded-full"
            ),
            children: "Connect Wallet",
          });
        };
      let em = (e) => {
        let {
            img: t = "",
            title: l = "",
            value: s = "",
            textBtn: a = "Mint",
            onClick: o,
          } = e,
          { isBTC: c } = (0, n.Z)();
        return (0, r.jsxs)("div", {
          className:
            "row flex justify-between p-3 gap-2 border border-row-border rounded-2xl",
          children: [
            (0, r.jsx)("div", {
              className:
                "col flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4",
              children: (0, r.jsxs)("div", {
                className: "flex items-center gap-2 sm:gap-4",
                children: [
                  (0, r.jsx)(i.default, {
                    src: "/icons/crypto/".concat(t),
                    alt: l,
                    className: "aspect-square max-w-8 sm:max-w-none",
                    width: 32,
                    height: 32,
                  }),
                  (0, r.jsxs)("h2", {
                    className: "text-xl",
                    children: [
                      s,
                      " ",
                      (0, r.jsx)("span", {
                        className: "opacity-50 text-base",
                        children: l,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, r.jsx)("button", {
              type: "button",
              "aria-label":
                "A button that on click converts currencies and you can mint",
              id: "mint",
              className: "mint ".concat(
                (0, Z.L)({ size: "sm", color: c ? "orange" : "primary" }),
                " font-normal w-full sm:max-w-[200px]"
              ),
              onClick: o,
              children: a,
            }),
          ],
        });
      };
      var eh = (e) => {
          let {
              locked: t,
              address: l,
              chainId: s,
              balanceOf: a,
              isDataLoaded: i,
              mcPriceListApi: n,
              assets: o,
              totalLpETH: c,
            } = e,
            [u, x] = (0, d.useState)({
              index: V.Tl.ETH,
              type: "mint",
              show: !1,
            }),
            m = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : V.Tl.ETH,
                l =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "convertAndMint";
              x((s) => ({ ...s, index: t, show: e, type: l }));
            },
            h = (e) => {
              m(!0, V.Tl[e], "WETH" == e ? "mint" : "convertAndMint");
            };
          return (0, r.jsxs)("section", {
            className:
              "convert-mint-card z-0 w-full -mt-6 px-4 pt-10 pb-4 bg-white/70 border rounded-b-20 border-primary-border-03 min-h-32",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "convert-mint-card-body relative card-mint overflow-x-hidden",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 bg-convert-mint-linear rounded-2xl",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "mint-content relative z-1 py-4 px-6 sm:p-10 flex flex-col gap-8 sm:gap-10",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex items-center justify-between gap-8 sm:gap-20",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "col text-center md:text-left",
                            children: [
                              (0, r.jsx)("h1", {
                                className: "text-xl font-regular mb-2",
                                children: "Convert and Mint your lpETH",
                              }),
                              (0, r.jsx)("p", {
                                className: "opacity-70",
                                children:
                                  "To continue receiving points for your deposited LRTs from Epoch 1, convert them to ETH and mint lpETH",
                              }),
                            ],
                          }),
                          l
                            ? (0, r.jsx)("div", {
                                className:
                                  "my-points relative flex text-center p-2 rounded-14 bg-white/20 w-full sm:max-w-[240px] min-h-[85px] before:absolute before:top-0 before:left-0 before:size-full before:rounded-20 before:bg-invite-card-dashed",
                                children: (0, r.jsxs)("div", {
                                  className: "content-points relative w-full",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "text-xs opacity-50 pt-4",
                                      children: "Total Mintable lpETH",
                                    }),
                                    (0, r.jsx)("h2", {
                                      className:
                                        "mb-3 pt-1 pb-0.5 text-2xl font-medium bg-primary-gradient bg-text-clip",
                                      children:
                                        c > 0
                                          ? "≈".concat(
                                              (0, E.jW)(c, 4),
                                              " lpETH"
                                            )
                                          : "0 lpETH",
                                    }),
                                  ],
                                }),
                              })
                            : (0, r.jsx)(ex, {}),
                        ],
                      }),
                      l &&
                        c > 0 &&
                        (0, r.jsxs)("div", {
                          className: "table-token-conversions",
                          children: [
                            (0, r.jsx)("p", {
                              className: "opacity-50 text-sm font-light mb-4",
                              children: "Select LRT to Convert or Mint",
                            }),
                            (0, r.jsx)("div", {
                              className: "rows flex flex-col gap-2",
                              children: (o || []).map((e, l) =>
                                (0, r.jsx)(
                                  em,
                                  {
                                    img: "".concat(e, ".svg"),
                                    title: e,
                                    value: (0, E.jW)((0, E.BF)(t[e]), 6),
                                    onClick: () => h(e),
                                    textBtn:
                                      "WETH" == e ? "Mint" : "Convert and Mint",
                                  },
                                  l
                                )
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              u.show &&
                l &&
                (0, r.jsx)(ed, {
                  locked: t,
                  balanceOf: a,
                  isDataLoaded: i,
                  address: l,
                  chainId: s,
                  mcPriceListApi: n,
                  type: u.type,
                  isOpen: u.show,
                  currencyIndex: u.index,
                  setIsOpen: m,
                }),
            ],
          });
        },
        ep = (e) => {
          let { balanceOf: t } = e,
            l = (0, U.x)(),
            { isBTC: s } = (0, n.Z)(),
            a = (0, V.B9)(l, s),
            o = (0, V.SM)(l, s),
            c = (e) => (t[e.symbol] ? (0, E.Gt)(t[e.symbol], a) : "0");
          return (0, r.jsx)(Y.l, {
            of: o.filter((e) => "ETH" !== e.symbol),
            render: (e) =>
              (0, r.jsxs)("div", {
                className:
                  "currency flex justify-between items-center gap-1 rounded-28 text-xs mb-1 w-40",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                      (0, r.jsx)("div", {
                        className: "icon",
                        children: (0, r.jsx)(i.default, {
                          className: "object-contain",
                          width: 18,
                          height: 18,
                          src: e.icon,
                          alt: e.symbol,
                          draggable: !1,
                          loading: "lazy",
                          decoding: "async",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "content flex flex-col !items-start !gap-0",
                        children: (0, r.jsx)("h1", { children: e.symbol }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", { className: "", children: c(e) }),
                ],
              }),
          });
        },
        eg = l(63161),
        ef = (e) => {
          let { tvlMainnet: t, tvlMainnetBtc: l, tvlScroll: s } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className:
                  "currency flex justify-between items-center gap-1 rounded-28 text-xs mb-1 w-40",
                children: [
                  eg.isPROD
                    ? (0, r.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, r.jsx)("div", {
                            className: "icon",
                            children: (0, r.jsx)(i.default, {
                              className: "object-contain",
                              width: 18,
                              height: 18,
                              src: "/icons/logo-ethereum.svg",
                              alt: "Ethereum",
                              draggable: !1,
                              loading: "lazy",
                              decoding: "async",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "content flex flex-col !items-start !gap-0",
                            children: (0, r.jsx)("h1", {
                              children: "Ethereum",
                            }),
                          }),
                        ],
                      })
                    : (0, r.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, r.jsx)("div", {
                            className: "icon",
                            children: (0, r.jsx)(i.default, {
                              className: "object-contain",
                              width: 18,
                              height: 18,
                              src: "/icons/logo-arbitrum.svg",
                              alt: "Arbitrum",
                              draggable: !1,
                              loading: "lazy",
                              decoding: "async",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "content flex flex-col !items-start !gap-0",
                            children: (0, r.jsx)("h1", {
                              children: "Arbitrum",
                            }),
                          }),
                        ],
                      }),
                  (0, r.jsx)("div", {
                    className: "",
                    children: t ? "$" + (0, E._6)(t, 2) : "0",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "currency flex justify-between items-center gap-1 rounded-28 text-xs mb-1 w-40",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, r.jsx)("div", {
                        className: "icon",
                        children: (0, r.jsx)(i.default, {
                          className: "object-contain",
                          width: 18,
                          height: 18,
                          src: "/icons/crypto/BTC.svg",
                          alt: "Bitcoin",
                          draggable: !1,
                          loading: "lazy",
                          decoding: "async",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "content flex flex-col !items-start !gap-0",
                        children: (0, r.jsx)("h1", { children: "Bitcoin" }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "",
                    children: l ? "$" + (0, E._6)(l, 2) : "0",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "currency flex justify-between items-center gap-1 rounded-28 text-xs mb-1 w-40",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, r.jsx)("div", {
                        className: "icon",
                        children: (0, r.jsx)(i.default, {
                          className: "object-contain",
                          width: 18,
                          height: 18,
                          src: "/icons/crypto/scroll.svg",
                          alt: "Scroll",
                          draggable: !1,
                          loading: "lazy",
                          decoding: "async",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "content flex flex-col !items-start !gap-0",
                        children: (0, r.jsx)("h1", { children: "Scroll" }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "",
                    children: s ? "$" + (0, E._6)(s, 2) : "0",
                  }),
                ],
              }),
            ],
          });
        };
      let eb = [
        { key: "nftBonusPoints", title: "Aficionado" },
        { key: "canvasBonusPoints", title: "Canvas Badge" },
        { key: "basePoints", title: "Deposits" },
        { key: "referralPoints", title: "Referrals" },
      ];
      var ev = (e) => {
        let { dataPoints: t } = e,
          l = t.nftBonusPoints
            ? eb
            : eb.filter((e) => "nftBonusPoints" !== e.key),
          s = t.canvasBonusPoints
            ? l
            : l.filter((e) => "canvasBonusPoints" !== e.key);
        return (0, r.jsx)(Y.l, {
          of: t ? s : [],
          render: (e) =>
            (0, r.jsxs)("div", {
              className:
                "currency flex justify-between items-center gap-1 rounded-28 text-xs mb-1 w-40",
              children: [
                (0, r.jsx)("div", {
                  className: "flex items-center gap-4",
                  children: (0, r.jsx)("h1", { children: e.title }),
                }),
                (0, r.jsx)("div", {
                  className: "",
                  children: (0, E.jW)(t[e.key] || 0, 4),
                }),
              ],
            }),
        });
      };
      let ej = (e, t, l) => {
          let s = 0;
          return (
            O()(e, (e, a) => {
              let r = l ? (0, E.sz)(t[a]) : (0, E.BF)(t[a]);
              s += e * r;
            }),
            isNaN(s) ? 0 : s
          );
        },
        ey = (e, t, l) => {
          let s = 0;
          return (
            O()(e, (e, a) => {
              let r = l ? (0, E.sz)(t[a]) : (0, E.BF)(t[a]);
              s += e * r;
            }),
            isNaN(s) ? 0 : s
          );
        },
        eN = (e, t) => {
          let l = 0;
          return (
            O()(k()(e, ["ETH"]), (s, a) => {
              l += (0, E.BF)(t[a]) * (s / e.ETH);
            }),
            isNaN(l) ? 0 : l
          );
        },
        ew = (e, t, l) =>
          (0, V.SM)(t, l)
            .map((e) => e.symbol)
            .filter((t) => e[t] > 0n);
      var eT = function () {
          var e, t, l, s;
          let a = (0, d.useRef)(null),
            u = (0, R.sJ)(w.nj),
            x = (0, R.sJ)(w.eU),
            m = (0, R.Zl)(w.a9),
            { isBTC: h } = (0, n.Z)(),
            { address: p, isConnected: L } = (0, _.m)(),
            O = (0, U.x)(),
            { data: C, signMessage: I } = (0, D.Q)(),
            { switchChain: k } = (0, H.o)(),
            { data: Z, refetch: z } = (0, j.Z)(p),
            { safeData: Y } = (0, b.Z)(),
            [q, V] = (0, d.useState)("NaN"),
            {
              balanceOf: G,
              locked: K,
              hasNft: J,
              hasBadge: X,
              isDataLoaded: $,
            } = (0, N.Z)({ address: p, chainId: O, isBTC: h }),
            { balanceOf: ee } = (0, N.Z)({
              address: y.U.prelaunchPoints,
              chainId: f.gT.MAINNET_CHAIN_ID,
              isBTC: !1,
            }),
            { balanceOf: et } = (0, N.Z)({
              address: y.U.prelaunchPointsBtc,
              chainId: f.gT.MAINNET_CHAIN_ID,
              isBTC: !0,
            }),
            { balanceOf: el } = (0, N.Z)({
              address: y.U.prelaunchPointsScroll,
              chainId: f.gT.SCROLL_CHAIN_ID,
              isBTC: !1,
            }),
            es = o.ZP.timeline({ delay: 2.5 }),
            ea = (0, d.useRef)(null);
          (0, c.V)(
            () => {
              let e = ea.current;
              if (
                (es
                  .fromTo(
                    null == e
                      ? void 0
                      : e.querySelectorAll(".stats-header .text-block"),
                    { y: 20, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      stagger: 0.1,
                      duration: 1,
                      ease: "power2.inOut",
                    }
                  )
                  .fromTo(
                    null == e ? void 0 : e.querySelector(".card"),
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
                  ),
                u.epoch !== T.o.FIRST)
              ) {
                let t = null == e ? void 0 : e.querySelector(".mint-card");
                t &&
                  es
                    .fromTo(
                      t,
                      { y: 20, opacity: 0 },
                      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
                    )
                    .fromTo(
                      null == e ? void 0 : e.querySelector(".bg-mint-linear"),
                      { x: 400, duration: 1 },
                      { x: 0, duration: 1, ease: "power2.inOut" },
                      "-=.5"
                    );
              }
            },
            { scope: ea }
          ),
            (0, d.useEffect)(() => {
              P()(a.current) && (a.current = p),
                a.current !== p &&
                  ((a.current = p),
                  localStorage.removeItem("nftActivated"),
                  localStorage.removeItem("canvasActivated"),
                  setTimeout(() => z(), 3e3)),
                x && setTimeout(() => z(), 3e3);
            }, [p, x, z]),
            (0, d.useEffect)(() => {
              (null == Z ? void 0 : Z.updatedAt) && m(Z.updatedAt);
            }, [m, Z]);
          let er = (0, d.useMemo)(() => ej(Y, ee), [Y, ee]),
            ei = (0, d.useMemo)(() => ej(Y, et, !0), [Y, et]),
            en = (0, d.useMemo)(() => ej(Y, el), [Y, el]),
            eo = (0, d.useMemo)(() => ey(Y, K, h), [Y, K, h]),
            ec = (0, d.useMemo)(() => {
              var e;
              return (0, E.jW)(
                (0, E.BF)(null !== (e = G.lpETH) && void 0 !== e ? e : 0n),
                6
              );
            }, [Y, G]),
            ed = (0, d.useMemo)(() => eN(Y, K), [Y, K]),
            eu = (0, d.useMemo)(() => ew(K, O, h), [K, O, h]),
            { mutateAsync: ex } = (0, S.D)({
              ...v.RO,
              onSuccess: (e) => {
                e.success && (z(), setTimeout(() => location.reload(), 3e3));
              },
            }),
            { mutateAsync: em } = (0, S.D)({
              ...v.Xy,
              onSuccess: (e) => {
                e.success &&
                  (z(), (0, B.OE)(), setTimeout(() => location.reload(), 3e3));
              },
            });
          return (
            (0, d.useEffect)(() => {
              let e = () => {
                let e = window.scrollY,
                  t = document.querySelector(".bg-parallax");
                t &&
                  (t.style.transform = "translateY(-" + (e / 3) * 0.5 + "px)");
              };
              return (
                document.addEventListener("scroll", e),
                () => {
                  document.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, r.jsxs)("div", {
              className: h ? "btc" : "eth",
              ref: ea,
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "stats-header sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-2 md:gap-1 justify-center pt-8 pb-10 sm:pt-10 sm:pb-12 px-10",
                  children: [
                    (0, r.jsx)(g, {
                      title: "Total Value Locked",
                      symbol: "$",
                      value: (0, E.jW)(er + en + ei, 2),
                      valueTooltip: (0, r.jsx)(ef, {
                        tvlMainnet: er,
                        tvlMainnetBtc: ei,
                        tvlScroll: en,
                      }),
                      tooltip:
                        "Total Value Locked in the Pool Points Party in ".concat(
                          h ? "BTC" : "ETH",
                          " and LRTs."
                        ),
                      opacity: 50,
                      center: !0,
                      h1Color: "text-black font-normal",
                      delay: 3,
                    }),
                    (0, r.jsx)(M, {
                      value: q,
                      onUpdateClick: (e) => {
                        if (Y.ETH && Z && e) {
                          let t = (Date.now() - f.et) / 36e5,
                            l = Z.totalPoints / t,
                            s = (14 * parseFloat(e)) / ((l + 1) * Y.ETH);
                          V((0, E.jW)(s.toString(), 2));
                        }
                      },
                    }),
                    (0, r.jsx)(g, {
                      title: "Total Quaaloops",
                      value: (0, E.jW)(
                        null !== (t = null == Z ? void 0 : Z.totalPoints) &&
                          void 0 !== t
                          ? t
                          : 0,
                        0
                      ),
                      tooltip: "All Quaaloops of all users in circulation.",
                      opacity: 50,
                      center: !0,
                      h1Color: "text-black font-normal",
                      decimal: 0,
                      delay: 3,
                    }),
                    (0, r.jsx)(g, {
                      title: "Total Users",
                      value: "".concat(
                        null !== (l = null == Z ? void 0 : Z.totalUsers) &&
                          void 0 !== l
                          ? l
                          : 0
                      ),
                      tooltip:
                        "Number of Participants in the Pool Points Party.",
                      opacity: 50,
                      center: !0,
                      h1Color: "text-black font-normal",
                      decimal: 0,
                      delay: 3,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "card relative z-2 ".concat(
                    h ? "bg-card-orange-referral" : "bg-card-referral",
                    " rounded-20 p-8 sm:p-11 overflow-hidden"
                  ),
                  children: [
                    (0, r.jsx)(Q, { className: "!absolute inset-0" }),
                    (0, r.jsxs)("div", {
                      className:
                        "card-body relative z-1 flex flex-col gap-6 md:items-center md:grid grid-cols-2 justify-between",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center gap-6",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "relative img-box min-w-20 h-20 bg-white rounded-full",
                              children: (0, r.jsx)(i.default, {
                                src: "/img/header/Quaaloop.svg",
                                alt: "card circles",
                                className: "object-contain",
                                fill: !0,
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "flex items-start lg:items-center lg:gap-6 flex-col lg:flex-row",
                              children: (0, r.jsx)(g, {
                                title: "Your Quaaloops",
                                value: "".concat(
                                  null !==
                                    (s =
                                      null == Z
                                        ? void 0
                                        : null === (e = Z.myPoints) ||
                                          void 0 === e
                                        ? void 0
                                        : e.totalPoints) && void 0 !== s
                                    ? s
                                    : 0
                                ),
                                valueTooltip: L
                                  ? (0, r.jsx)(ev, {
                                      dataPoints:
                                        null == Z ? void 0 : Z.myPoints,
                                    })
                                  : void 0,
                                h1Color: "text-white font-medium",
                                className: "text-white",
                                decimal: 2,
                                delay: 5,
                                valueChildren: (0, r.jsxs)("div", {
                                  className:
                                    "box-info bg-white/15 text-xs text-white flex items-center h-8 rounded-2xl pl-4 pr-2",
                                  children: [
                                    "Updates every hour",
                                    (0, r.jsx)("div", {
                                      className:
                                        "status w-4 h-4 bg-white/10 rounded-full grid place-content-center ml-2",
                                      children: (0, r.jsx)("div", {
                                        className:
                                          "circle w-1.5 h-1.5 bg-white rounded-full",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center gap-6",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "relative img-box min-w-20 h-20 bg-white rounded-full",
                              children: (0, r.jsx)(i.default, {
                                src: h
                                  ? "/img/header/BTC.svg"
                                  : "/img/header/ETH.svg",
                                alt: "card circles",
                                className: "object-contain",
                                fill: !0,
                                sizes: "(max-width: 768px) 100vw, 100vw",
                                quality: 100,
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "flex items-start lg:items-center lg:gap-6 flex-col lg:flex-row",
                              children:
                                u.epoch === T.o.FIRST
                                  ? (0, r.jsx)(g, {
                                      title: "Your Deposits",
                                      symbol: "$",
                                      value: (0, E.jW)(null != eo ? eo : 0, 2),
                                      valueTooltip: (0, r.jsx)(ep, {
                                        balanceOf: K,
                                      }),
                                      h1Color: "text-white font-medium",
                                      className: "text-white",
                                      delay: 5,
                                    })
                                  : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsx)(g, {
                                          title: "Current lpETH Balance",
                                          value: ec,
                                          h1Color: "text-white font-medium",
                                          className: "text-white",
                                          decimal: 6,
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "box-info mt-4 lg:mt-8 bg-white/15 text-xs text-white flex items-center h-8 rounded-2xl pl-4 pr-2",
                                          children: [
                                            "1 ETH = 1 lpETH",
                                            (0, r.jsx)("div", {
                                              className:
                                                "status w-4 h-4 bg-white/10 rounded-full grid place-content-center ml-2",
                                              children: (0, r.jsx)("div", {
                                                className:
                                                  "circle w-1.5 h-1.5 bg-white rounded-full",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                X &&
                  (null == Z ? void 0 : Z.activatedCanvas) === !1 &&
                  (0, r.jsx)(A.E.div, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { delay: 3, duration: 0.8, ease: "easeInOut" },
                    viewport: { once: !0 },
                    className:
                      "relative flex flex-col gap-4 items-center justify-center",
                    children: (0, r.jsx)(W, {
                      onCanvasActiveClick: () => {
                        I(
                          { account: p, message: "Activate Loop Canvas Badge" },
                          {
                            onSuccess(e, t, l) {
                              em({
                                user: {
                                  walletAddress: p,
                                  challenge: "Activate Loop Canvas Badge",
                                  challengeDate: Date.now(),
                                },
                                signature: e,
                              });
                            },
                            onError(e, t, l) {
                              (0, F.CF)({
                                title: "Something went wrong",
                                description: e.message,
                                type: "error",
                              });
                            },
                          }
                        );
                      },
                    }),
                  }),
                (null == u ? void 0 : u.epoch) !== T.o.FIRST &&
                  (0, r.jsx)(A.E.div, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { delay: 3, duration: 0.5, ease: "easeInOut" },
                    viewport: { once: !0 },
                    className:
                      "relative flex flex-col gap-4 items-center justify-center",
                    children: (0, r.jsx)(eh, {
                      locked: K,
                      address: p,
                      chainId: O,
                      mcPriceListApi: Y,
                      balanceOf: G,
                      isDataLoaded: $,
                      assets: eu,
                      totalLpETH: ed,
                    }),
                  }),
              ],
            })
          );
        },
        eE = l(33514),
        eS = l(54175),
        eA = l(12496),
        eL = l.n(eA),
        eO = l(80770),
        eC = l(43178);
      l(70982);
      let eP = {
          SCROLL: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return { icon: "scroll.svg", title: "Scroll Marks", value: e };
          },
          QUAALOOPS: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return { icon: "quaaloop.svg", title: "Quaaloops", value: e };
          },
          EIGENLAYER: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return {
              icon: "eigenlayer.svg",
              title: "EigenLayer",
              value: e,
              href: "https://app.eigenlayer.xyz/",
            };
          },
          EIGENLAYER_STONE: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return {
              icon: "eigenlayer.svg",
              title: "EigenLayer",
              value: e,
              href: "https://app.eigenlayer.xyz/",
              tooltip:
                "STONE dynamically deposits ETH into <br /> both Eigenlayer and other restaking <br /> protocols.",
            };
          },
          SYMBIOTIC: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return {
              icon: "symbiotic.svg",
              title: "Symbiotic",
              value: e,
              href: "https://app.symbiotic.fi/restake",
            };
          },
          SYMBIOTIC_STONE: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return {
              icon: "symbiotic.svg",
              title: "Symbiotic",
              value: e,
              href: "https://app.symbiotic.fi/restake",
              tooltip:
                "STONE dynamically deposits ETH into <br /> both Symbiotic and other restaking <br /> protocols.",
            };
          },
          VEDA: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return { icon: "veda.png", title: "Veda", value: e };
          },
          ETHER_FI: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return {
              icon: "etherfi.svg",
              title: "Ether.fi",
              value: e,
              href: "https://app.ether.fi/eeth?address=0x567E5EB2dd8EC9A52F0D30e724Ab5Cdc5D619273",
            };
          },
          PUFFER_POINTS: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return { icon: "pufETH.png", title: "Puffer Points", value: e };
          },
          KELP_MILES: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return { icon: "kelpDAO.svg", title: "Kelp Miles", value: e };
          },
          SEEDS: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return { icon: "ynSeeds.svg", title: "Yieldnest Seeds", value: e };
          },
          STONE_POINTS: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return { icon: "stoneETH.svg", title: "Stone Points", value: e };
          },
          RENZO_POINTS: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return {
              icon: "renzoFinance.svg",
              title: "Renzo ezPoints",
              value: e,
            };
          },
          SWELL_PEARLS: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return {
              icon: "swellpearls.png",
              title: "Swell Pearls",
              value: e,
              href: "https://app.swellnetwork.io/earn/portfolio",
            };
          },
          BEDROCK_DIAMONDS: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return { icon: "bedrock.svg", title: "Bedrock Diamonds", value: e };
          },
          TURTLE_QUAALOOPS: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
              icon: "turtleQuaaloops.svg",
              title: "Turtle Quaaloops",
              value: e,
              tooltip: t
                ? '<span style="font-weight:500">You are a Turtle Club member!</span> <br />\n    You will earn boosted turtle rewards <br />\n    for depositing in this pool '
                : "\n    Turtle Club members exclusively <br />\n    earn boosted turtle rewards for <br />\n    depositing in this pool.",
              href: "https://turtle.club/dashboard/?ref=LOOPFIXYZ",
            };
          },
          TURTLE_SCROLL: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
              icon: "turtleScroll.svg",
              title: "Turtle Scroll",
              value: e,
              tooltip: t
                ? '<span style="font-weight:500">You are a Turtle Club member!</span> <br />\n  You will earn boosted turtle rewards <br />\n  for depositing in this pool '
                : "\n  Turtle Club members exclusively <br />\n  earn boosted turtle rewards for <br />\n  depositing in this pool.",
              href: "https://turtle.club/dashboard/?ref=LOOPFIXYZ",
            };
          },
          TURTLE_KELP: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
              icon: "turtleKelp.svg",
              title: "Turtle Kelp",
              value: e,
              tooltip: t
                ? '<span style="font-weight:500">You are a Turtle Club member!</span> <br />\nYou will earn boosted turtle rewards <br />\nfor depositing in this pool '
                : "\nTurtle Club members exclusively <br />\nearn boosted turtle rewards for <br />\ndepositing in this pool.",
              href: "https://turtle.club/dashboard/?ref=LOOPFIXYZ",
            };
          },
          TURTLE_SEEDS: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
              icon: "turtleSeeds.svg",
              title: "Turtle Seeds",
              value: e,
              tooltip: t
                ? '<span style="font-weight:500">You are a Turtle Club member!</span> <br />\nYou will earn boosted turtle rewards <br />\nfor depositing in this pool '
                : "\nTurtle Club members exclusively <br />\nearn boosted turtle rewards for <br />\ndepositing in this pool.",
              href: "https://turtle.club/dashboard/?ref=LOOPFIXYZ",
            };
          },
          TURTLE_STONE: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
              icon: "turtleStone.svg",
              title: "Turtle Stakestone",
              value: e,
              tooltip: t
                ? '<span style="font-weight:500">You are a Turtle Club member!</span> <br />\nYou will earn boosted turtle rewards <br />\nfor depositing in this pool '
                : "\nTurtle Club members exclusively <br />\nearn boosted turtle rewards for <br />\ndepositing in this pool.",
              href: "https://turtle.club/dashboard/?ref=LOOPFIXYZ",
            };
          },
          TURTLE_RENZO: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
              icon: "turtleRenzo.svg",
              title: "Turtle Renzo",
              value: e,
              tooltip: t
                ? '<span style="font-weight:500">You are a Turtle Club member!</span> <br />\nYou will earn boosted turtle rewards <br />\nfor depositing in this pool '
                : "\nTurtle Club members exclusively <br />\nearn boosted turtle rewards for <br />\ndepositing in this pool.",
              href: "https://turtle.club/dashboard/?ref=LOOPFIXYZ",
            };
          },
          TURTLE_SWELL: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
              icon: "turtleSwell.svg",
              title: "Turtle Swell",
              value: e,
              tooltip: t
                ? '<span style="font-weight:500">You are a Turtle Club member!</span> <br />\nYou will earn boosted turtle rewards <br />\nfor depositing in this pool '
                : "\nTurtle Club members exclusively <br />\nearn boosted turtle rewards for <br />\ndepositing in this pool.",
              href: "https://turtle.club/dashboard/?ref=LOOPFIXYZ",
            };
          },
        },
        eI = (e) => eP[e]().title,
        ek = (e, t) => Object.keys(e).map((l) => eP[l](e[l], t));
      ((s = a || (a = {}))[(s.Manage = 0)] = "Manage"),
        (s[(s.Deposit = 1)] = "Deposit"),
        (s[(s.CapsReached = 2)] = "CapsReached");
      let eR = (0, eS.Cl)(),
        e_ = (e) => [
          eR.accessor("assets", {
            header: () => "Asset",
            cell: (e) => e.getValue(),
          }),
          eR.accessor("tvl", {
            header: () =>
              e
                ? "TVL"
                : (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("span", { children: " TVL " }),
                      " ",
                      (0, r.jsx)("span", {
                        className: "px-2 opacity-25",
                        children: "|",
                      }),
                      " ",
                      (0, r.jsx)("span", { children: "Cap" }),
                    ],
                  }),
            cell: (e) => e.getValue(),
          }),
          eR.accessor("points", {
            header: () => "Points",
            cell: (e) => e.getValue(),
          }),
          eR.accessor("deposits", {
            header: "Your Deposit",
            cell: (e) => e.getValue(),
          }),
          eR.accessor("state", { header: "", cell: (e) => e.getValue() }),
        ],
        eU = (e) => {
          let t = e.getIsPinned();
          return {
            left: "left" === t ? "".concat(e.getStart("left"), "px") : void 0,
            right:
              "right" === t ? "".concat(e.getAfter("right"), "px") : void 0,
            position: t ? "sticky" : "relative",
            zIndex: t ? 1 : 0,
            backgroundColor: "#fff",
            paddingLeft: e.getIsFirstColumn() ? "12px" : "2px",
            paddingRight: e.getIsLastColumn() ? "0" : "2px",
          };
        },
        eD = {
          assets: (e) => {
            var t, l, s, a;
            return (0, r.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                (0, r.jsx)("div", {
                  className: "icon",
                  children: (0, r.jsx)(i.default, {
                    className: "object-contain",
                    style: { minWidth: 32 },
                    width: 32,
                    height: 32,
                    src:
                      null === (t = e.assets) || void 0 === t ? void 0 : t.icon,
                    alt:
                      null === (l = e.assets) || void 0 === l
                        ? void 0
                        : l.symbol,
                    draggable: !1,
                    loading: "lazy",
                    decoding: "async",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "content flex flex-col !items-start !gap-0",
                  children: [
                    (0, r.jsx)("h1", {
                      className: "text-sm",
                      children:
                        null === (s = e.assets) || void 0 === s
                          ? void 0
                          : s.symbol,
                    }),
                    (0, r.jsx)("span", {
                      className: "text-xs opacity-50",
                      children:
                        null === (a = e.assets) || void 0 === a
                          ? void 0
                          : a.name,
                    }),
                  ],
                }),
              ],
            });
          },
          tvl: (e) => (0, r.jsx)(eH, { ...e }),
          points: (e) => (0, r.jsx)(eB, { points: e.points }),
          deposits: (e) => {
            let t = e.deposits.usd;
            return (0, r.jsx)("div", {
              className: "text-center",
              children: isNaN(t) ? "-" : (0, E.T4)(t),
            });
          },
          state: (e, t, l) =>
            (0, r.jsx)("button", {
              type: "button",
              onClick: t,
              "aria-label":
                "A button that on click connects you with the wallet",
              className: "state w-full max-w-[128px] font-normal ".concat(
                (0, Z.L)({
                  size: "sm",
                  color:
                    1 === e.state
                      ? l
                        ? "orangelight"
                        : "greenlight"
                      : 2 === e.state
                      ? "social"
                      : "outline",
                })
              ),
              disabled: 2 === e.state,
              children: 0 === e.state ? "Manage" : "Deposit",
            }),
        },
        eH = (e) => {
          let t = (0, E.jW)(e.tvl.eth, 2),
            l = e.tvl.usd,
            s = (0, E.jW)(e.maxCap.eth, 2),
            a = 0 == e.maxCap.eth ? 100 : (100 * e.tvl.eth) / e.maxCap.eth,
            i = "tvl-circular-gradient",
            { isETH: o } = (0, n.Z)();
          return (0, r.jsx)(r.Fragment, {
            children: o
              ? (0, r.jsx)("div", {
                  className: "flex items-center justify-center gap-2",
                  children: (0, r.jsx)("div", {
                    className: "text-center flex items-center gap-2",
                    children: (0, r.jsxs)("div", {
                      className: "col flex flex-col gap-0.5",
                      children: [
                        t,
                        (0, r.jsx)("span", {
                          className: "opacity-30 text-xxs",
                          children: isNaN(l) ? "-" : (0, E.T4)(l),
                        }),
                      ],
                    }),
                  }),
                })
              : (0, r.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, r.jsxs)("div", {
                      style: { width: 38, height: 38 },
                      children: [
                        (0, r.jsx)("svg", {
                          style: { height: 0 },
                          children: (0, r.jsx)("defs", {
                            children: (0, r.jsxs)("linearGradient", {
                              id: i,
                              gradientTransform: "rotate(5)",
                              children: [
                                (0, r.jsx)("stop", {
                                  offset: "16.29%",
                                  stopColor: "#5a5ee3",
                                }),
                                (0, r.jsx)("stop", {
                                  offset: "85.56%",
                                  stopColor: "#9597e7",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, r.jsx)(eC.Ip, {
                          value: a,
                          text: "".concat((0, E.jW)(a, 0), "%"),
                          strokeWidth: 12,
                          styles: {
                            path: {
                              stroke: "url(#".concat(i, ")"),
                              height: "100%",
                            },
                            text: { fill: "#000", fontWeight: 500 },
                          },
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "text-center flex items-center gap-2",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "col flex flex-col gap-0.5",
                          children: [
                            t,
                            (0, r.jsx)("span", {
                              className: "opacity-30 text-xxs",
                              children: isNaN(l) ? "-" : (0, E.T4)(l),
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "separator bg-[#dedede] w-[1px] h-4",
                        }),
                        (0, r.jsxs)("div", {
                          className: "col flex flex-col gap-0.5 opacity-50",
                          children: [
                            s,
                            (0, r.jsx)("span", {
                              className: "opacity-70 text-xxs",
                              children: isNaN(e.maxCap.usd)
                                ? "-"
                                : (0, E.T4)(e.maxCap.usd),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          });
        },
        eB = (e) => {
          let { points: t } = e;
          return (0, r.jsx)("div", {
            className: "flex items-center flex-col gap-1",
            children: (0, r.jsx)(Y.l, {
              of: t,
              render: (e) => {
                let t = (0, r.jsxs)("div", {
                  className:
                    "flex items-center gap-1.5 pr-2 border border-border-card-block/50 rounded-2xl min-h-8 "
                      .concat(
                        e.href ? "!cursor-pointer [&>*]:!cursor-pointer" : "",
                        " "
                      )
                      .concat(
                        e.title === eI("SCROLL")
                          ? "bg-[#ebc28e40]"
                          : e.title === eI("QUAALOOPS")
                          ? "bg-[#9ae79740]"
                          : e.title === eI("TURTLE_QUAALOOPS")
                          ? "bg-[#c68ef940]"
                          : e.title === eI("TURTLE_SEEDS")
                          ? "bg-[#f9d78e40]"
                          : e.title === eI("SEEDS")
                          ? "bg-[#f9d78e40]"
                          : e.title === eI("TURTLE_SCROLL")
                          ? "bg-[#ebc28e40]"
                          : e.title === eI("EIGENLAYER")
                          ? "bg-[#9a91d340]"
                          : e.title === eI("SYMBIOTIC")
                          ? "bg-[#c5fb7b40]"
                          : e.title === eI("VEDA")
                          ? "bg-[#ec479720]"
                          : e.title === eI("ETHER_FI")
                          ? "bg-[#d1a1f640]"
                          : e.title === eI("PUFFER_POINTS")
                          ? "bg-[#706af640]"
                          : e.title === eI("KELP_MILES")
                          ? "bg-[#3e707040]"
                          : e.title === eI("TURTLE_KELP")
                          ? "bg-[#6ac33440]"
                          : e.title === eI("STONE_POINTS")
                          ? "bg-[#aeadad40]"
                          : "bg-badge"
                      ),
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "min-size-5 bg-white rounded-full border border-social-border ml-0.5",
                      children: (0, r.jsx)(i.default, {
                        src: "/icons/crypto/".concat(e.icon),
                        alt: e.title,
                        className: "rounded-full",
                        width: 24,
                        height: 24,
                        sizes: "(max-width: 768px) 100vw, 100vw",
                        quality: 100,
                      }),
                    }),
                    (0, r.jsx)("h2", {
                      className: "title opacity-50 text-xs",
                      children: e.title,
                    }),
                    (0, r.jsx)("b", {
                      className: "text-xs ".concat(
                        e.title === eI("SCROLL")
                          ? "text-[#ebc28e]"
                          : e.title === eI("QUAALOOPS")
                          ? "text-[#1d6b1a]"
                          : e.title === eI("TURTLE_QUAALOOPS")
                          ? "text-[#470087]"
                          : e.title === eI("TURTLE_SCROLL")
                          ? "text-[#894d00]"
                          : e.title === eI("EIGENLAYER")
                          ? "text-[#1a0c6d]"
                          : e.title === eI("SYMBIOTIC")
                          ? "text-[#437103]"
                          : e.title === eI("VEDA")
                          ? "text-[#dc267e]"
                          : e.title === eI("ETHER_FI")
                          ? "text-[#61129e]"
                          : e.title === eI("PUFFER_POINTS")
                          ? "text-[#140f8e]"
                          : e.title === eI("KELP_MILES")
                          ? "text-[#014141]"
                          : e.title === eI("TURTLE_KELP")
                          ? "text-[#296d00]"
                          : "text-black"
                      ),
                      children: e.value,
                    }),
                    e.href &&
                      (0, r.jsx)(i.default, {
                        src: "/img/external-link-icon.png",
                        className: "opacity-70",
                        alt: "&#128279",
                        width: 12,
                        height: 12,
                      }),
                  ],
                });
                return (null == e ? void 0 : e.tooltip)
                  ? (0, r.jsx)(m.Z, {
                      content: (0, r.jsx)("div", {
                        className: "tootltip-content text-left",
                        dangerouslySetInnerHTML: {
                          __html: (null == e ? void 0 : e.tooltip) || "",
                        },
                      }),
                      children: (0, r.jsx)("a", {
                        href: e.href,
                        target: "_blank",
                        children: t,
                      }),
                    })
                  : t;
              },
            }),
          });
        },
        eF = (e, t, l, s, a) => {
          let r =
            s === V.Jb.Scroll ? { SCROLL: "1x", TURTLE_SCROLL: "+10%" } : {};
          eL()(t.eth, V.Tl[V.Tl.WETH]) &&
            e.push(
              l(
                V.Tl.WETH,
                ek({ ...r, QUAALOOPS: "1x", TURTLE_QUAALOOPS: "+51%" }, a)
              )
            ),
            eL()(t.eth, V.Tl[V.Tl.STONE]) &&
              e.push(
                l(
                  V.Tl.STONE,
                  ek(
                    {
                      ...r,
                      EIGENLAYER_STONE: "",
                      SYMBIOTIC_STONE: "",
                      STONE_POINTS: "2x",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+51%",
                      TURTLE_STONE: "+20%",
                    },
                    a
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.weETH]) &&
              e.push(
                l(
                  V.Tl.weETH,
                  ek(
                    {
                      ...r,
                      EIGENLAYER: "1x",
                      ETHER_FI: "2x",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+51%",
                    },
                    a
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.rsETH]) &&
              e.push(
                l(
                  V.Tl.rsETH,
                  ek(
                    {
                      ...r,
                      EIGENLAYER: "1x",
                      KELP_MILES: "3x \uD83D\uDD25",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+51%",
                      TURTLE_KELP: "+50%",
                    },
                    a
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.ynETH]) &&
              e.push(
                l(
                  V.Tl.ynETH,
                  ek(
                    {
                      ...r,
                      EIGENLAYER: "1x",
                      QUAALOOPS: "2x",
                      SEEDS: "6x",
                      TURTLE_QUAALOOPS: "+51%",
                      TURTLE_SEEDS: "+10%",
                    },
                    a
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.wrsETH]) &&
              e.push(
                l(
                  V.Tl.wrsETH,
                  ek(
                    {
                      ...r,
                      EIGENLAYER: "1x",
                      KELP_MILES: "3x \uD83D\uDD25",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+51%",
                      TURTLE_KELP: "+50%",
                    },
                    a
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.pufETH]) &&
              e.push(
                l(
                  V.Tl.pufETH,
                  ek(
                    {
                      ...r,
                      EIGENLAYER: "1x",
                      PUFFER_POINTS: "1.5x",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+51%",
                    },
                    a
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.rswETH]) &&
              e.push(
                l(
                  V.Tl.rswETH,
                  ek(
                    {
                      ...r,
                      EIGENLAYER: "1x",
                      SWELL_PEARLS: "1x",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+51%",
                      TURTLE_SWELL: "+10%",
                    },
                    a
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.ezETH]) &&
              e.push(
                l(
                  V.Tl.ezETH,
                  ek(
                    {
                      ...r,
                      EIGENLAYER: "1x",
                      RENZO_POINTS: "1x",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+51%",
                      TURTLE_RENZO: "+25%",
                    },
                    a
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.uniETH]) &&
              e.push(
                l(
                  V.Tl.uniETH,
                  ek(
                    {
                      ...r,
                      EIGENLAYER: "1x",
                      BEDROCK_DIAMONDS: "2x",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+51%",
                    },
                    a
                  )
                )
              );
        },
        eZ = (e, t, l, s) => {
          eL()(t.eth, V.Tl[V.Tl.WBTC]) &&
            e.push(
              l(V.Tl.WBTC, ek({ QUAALOOPS: "1x", TURTLE_QUAALOOPS: "+51%" }, s))
            ),
            eL()(t.eth, V.Tl[V.Tl.swBTC]) &&
              e.push(
                l(
                  V.Tl.swBTC,
                  ek(
                    {
                      SWELL_PEARLS: "3x",
                      SYMBIOTIC: "1x",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+51%",
                      TURTLE_SWELL: "+10%",
                    },
                    s
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.eBTC]) &&
              e.push(
                l(
                  V.Tl.eBTC,
                  ek(
                    {
                      ETHER_FI: "2x",
                      SYMBIOTIC: "1x",
                      VEDA: "1x",
                      QUAALOOPS: "2x",
                      TURTLE_QUAALOOPS: "+45%",
                    },
                    s
                  )
                )
              ),
            eL()(t.eth, V.Tl[V.Tl.solvBTC]) &&
              e.push(
                l(
                  V.Tl.solvBTC,
                  ek({ QUAALOOPS: "2x", TURTLE_QUAALOOPS: "+45%" }, s)
                )
              );
        },
        ez = (e, t, l, s, r) => {
          let i = [],
            n = (r, i) => {
              var n;
              let o = null !== (n = t.usd[V.Tl[r]]) && void 0 !== n ? n : 0;
              return {
                assets: V.jY[r],
                tvl: {
                  eth:
                    s == V.Jb.BTC
                      ? (0, E.sz)(e.eth[V.Tl[r]])
                      : (0, E.BF)(e.eth[V.Tl[r]]),
                  usd: e.usd[V.Tl[r]],
                },
                points: i,
                deposits: {
                  eth:
                    s == V.Jb.BTC
                      ? (0, E.sz)(t.eth[V.Tl[r]])
                      : (0, E.BF)(t.eth[V.Tl[r]]),
                  usd: t.usd[V.Tl[r]],
                },
                maxCap: {
                  eth:
                    s == V.Jb.BTC
                      ? (0, E.sz)(l.eth[V.Tl[r]])
                      : (0, E.BF)(l.eth[V.Tl[r]]),
                  usd: l.usd[V.Tl[r]],
                },
                state:
                  e.eth[V.Tl[r]] == l.eth[V.Tl[r]]
                    ? a.CapsReached
                    : o > 0
                    ? a.Manage
                    : a.Deposit,
              };
            };
          return s === V.Jb.BTC ? eZ(i, e, n, r) : eF(i, e, n, s, r), i;
        };
      var eM = function (e) {
        let { tvl: t, deposits: l, maxCaps: s, isTurtleClubMember: a } = e,
          [i, o] = (0, d.useState)({ currency: V.jY[V.Tl.ETH], deposit: "0" }),
          [c, u] = (0, d.useState)(!1),
          { isBTC: x, isETH: m } = (0, n.Z)(),
          h = x ? V.Jb.BTC : m ? V.Jb.Mainnet : V.Jb.Scroll,
          [p, g] = (0, d.useState)(() => ez(t, l, s, h, a)),
          f = (0, eE.b7)({
            initialState: { columnPinning: { left: ["assets"] } },
            data: p,
            columns: e_(m),
            getCoreRowModel: (0, eS.sC)(),
          });
        (0, d.useEffect)(() => {
          g(() => ez(t, l, s, h, a));
        }, [t, l, s, a]);
        let b = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return u(e);
          },
          v = (e) => {
            let t = e.assets;
            o({
              currency: V.jY[V.Tl[t.symbol]],
              deposit: e.deposits.eth.toString(),
            }),
              b(!0);
          };
        return (0, r.jsxs)("div", {
          className:
            "relative asset-table border border-row-border rounded-2xl overflow-y-hidden overflow-x-auto px-4 pt-6 pb-2",
          children: [
            (0, r.jsxs)("table", {
              className: "w-full overflow-x-auto border-separate",
              children: [
                (0, r.jsx)("thead", {
                  children: f.getHeaderGroups().map((e) =>
                    (0, r.jsx)(
                      "tr",
                      {
                        className: "sticky top-0 z-2 bg-white",
                        children: e.headers.map((e) => {
                          let t =
                            "font-light text-sm text-black/50 before:absolute before:-top-[28px] before:z-10 before:block before:bg-white before:w-full before:h-[28px]";
                          return (0, r.jsx)(
                            "th",
                            {
                              className: e.column.getIsFirstColumn()
                                ? "".concat(t, " stickyTd text-left !pl-16")
                                : t,
                              style: { ...eU(e.column) },
                              children: e.isPlaceholder
                                ? null
                                : (0, eE.ie)(
                                    e.column.columnDef.header,
                                    e.getContext()
                                  ),
                            },
                            e.id
                          );
                        }),
                      },
                      e.id
                    )
                  ),
                }),
                (0, r.jsx)("tbody", {
                  children: f
                    .getRowModel()
                    .rows.map((e) =>
                      (0, r.jsx)(
                        "tr",
                        {
                          className: "mt-2 py-2",
                          children: e
                            .getVisibleCells()
                            .map((t) =>
                              (0, r.jsx)(
                                "td",
                                {
                                  className: "border-y border-row-border py-2 "
                                    .concat(
                                      t.column.getIsFirstColumn()
                                        ? "stickyTd border-l rounded-l-xl"
                                        : "",
                                      " "
                                    )
                                    .concat(
                                      t.column.getIsLastColumn()
                                        ? "border-r rounded-r-xl w-[150px]"
                                        : ""
                                    ),
                                  style: { ...eU(t.column) },
                                  children: eD[t.column.id](
                                    e.original,
                                    () => v(e.original),
                                    x
                                  ),
                                },
                                t.id
                              )
                            ),
                        },
                        e.id
                      )
                    ),
                }),
              ],
            }),
            !p.length &&
              (0, r.jsx)("div", {
                className: "relative text-center mt-8 mb-4",
                children: "Connect Wallet to display!",
              }),
            c &&
              (0, r.jsx)(eO.Z, {
                isOpen: !0,
                asset: i,
                locked: l.eth,
                setIsOpen: b,
              }),
          ],
        });
      };
      let eW = ["10-60% APR", "5x Points"],
        eY = Array.from([, , , , ,], (e, t) => t + 1);
      var eQ = function () {
          return (0, r.jsxs)("section", {
            className:
              "card relative m-2 sm:m-4 bg-white/80 border border-dashed border-border-card-block rounded-20 overflow-x-hidden",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "liq-bg absolute inset-0 flex justify-end rounded-20 bg-liquidity-linear overflow-hidden",
                children: [
                  (0, r.jsx)(i.default, {
                    src: "/img/elements/liquidity-circle.svg",
                    alt: "Liquidity",
                    className: "liq-circle mx-6 sm:mx-12",
                    width: 168,
                    height: 168,
                    sizes: "(max-width: 768px) 100vw, 100vw",
                    quality: 100,
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "group absolute top-0 right-0 isolate w-full h-full sm:w-[37%]",
                    children: (0, r.jsx)(Y.l, {
                      of: eY,
                      render: (e, t) =>
                        (0, r.jsx)(i.default, {
                          src: "/img/elements/leaf-blur.svg",
                          alt: "Liquidity",
                          className: "absolute ".concat(
                            0 === t
                              ? "-top-12 right-[35%]"
                              : 1 === t
                              ? "-top-14 -right-14"
                              : 2 === t
                              ? "top-[26%]"
                              : 3 === t
                              ? "-bottom-14 right-[35%]"
                              : 4 === t
                              ? "-bottom-14 -right-10"
                              : ""
                          ),
                          width: 134,
                          height: 143,
                          sizes: "(max-width: 768px) 100vw, 100vw",
                          quality: 100,
                        }),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "relative liq-content py-10 px-6 sm:p-10",
                children: [
                  (0, r.jsx)("span", {
                    className:
                      "step inline-flex items-center px-2 mb-4 min-h-8 text-xs font-medium bg-step2/10 text-step2 rounded-2xl",
                    children: "2ND STEP",
                  }),
                  (0, r.jsx)("h1", {
                    className: "text-2xl font-medium",
                    children: "Provide Liquidity",
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "max-w-[582px] leading-snug pt-2 pb-4 opacity-70",
                    children:
                      "Create a Liquidity Provider Token on various exchanges and lock them for a minimum of 7 days. You earn the DEX APR and 5x Points.",
                  }),
                  (0, r.jsx)("div", {
                    className: "tags flex items-center gap-2 mb-8",
                    children: (0, r.jsx)(Y.l, {
                      of: eW,
                      render: (e) =>
                        (0, r.jsx)("div", {
                          className:
                            "border border-primary bg-white/5 text-primary text-xs rounded-xl min-h-6 px-2 grid place-content-center",
                          children: e,
                        }),
                    }),
                  }),
                  (0, r.jsx)("a", {
                    href: "https://app-loop.vercel.app/#/dashboard",
                    children: (0, r.jsx)("button", {
                      type: "button",
                      "aria-label": "A button that on click provides liquidity",
                      id: "provide-liquidity",
                      className: "provide-liquidity ".concat(
                        (0, Z.L)({ size: "lg", color: "green" }),
                        " font-normal w-full md:w-[350px]"
                      ),
                      children: "Provide Liquidity",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        eq = function () {
          let e = o.ZP.timeline({ delay: 3 }),
            t = (0, d.useRef)(null),
            { isBTC: l, isETH: s, isScroll: a } = (0, n.Z)(),
            i = (0, R.sJ)(w.nj),
            { address: u, isConnected: x, chainId: m } = (0, _.m)(),
            { data: h } = (0, j.Z)(u),
            {
              balanceOf: p,
              locked: g,
              isDataLoaded: v,
            } = (0, N.Z)({
              address: u,
              chainId: a ? f.gT.SCROLL_CHAIN_ID : f.gT.MAINNET_CHAIN_ID,
              isBTC: l,
            }),
            { balanceOf: S, caps: A } = (0, N.Z)({
              address: s
                ? y.U.prelaunchPoints
                : l
                ? y.U.prelaunchPointsBtc
                : y.U.prelaunchPointsScroll,
              chainId: a ? f.gT.SCROLL_CHAIN_ID : f.gT.MAINNET_CHAIN_ID,
              isBTC: l,
            }),
            { safeData: L } = (0, b.Z)(),
            [C, P] = (0, d.useState)({ eth: {}, usd: {} }),
            [I, k] = (0, d.useState)({ eth: {}, usd: {} }),
            [U, D] = (0, d.useState)({ eth: {}, usd: {} });
          return (
            (0, d.useEffect)(() => {
              let e = {};
              O()(S, (t, s) => {
                let a = l ? (0, E.sz)(t) : (0, E.BF)(t);
                e[s] = a * L[s];
              }),
                P({ eth: S, usd: e });
            }, [S]),
            (0, d.useEffect)(() => {
              let e = {};
              O()(g, (t, s) => {
                let a = l ? (0, E.sz)(t) : (0, E.BF)(t);
                e[s] = a * L[s];
              }),
                k({ eth: g, usd: e });
            }, [g]),
            (0, d.useEffect)(() => {
              let e = {};
              O()(A, (t, s) => {
                let a = l ? (0, E.sz)(t) : (0, E.BF)(t);
                e[s] = a * L[s];
              }),
                D({ eth: A, usd: e });
            }, [A]),
            (0, c.V)(
              () => {
                let l = t.current;
                o.ZP.set(l, { y: 20, opacity: 0 }),
                  e.to(l, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                  });
              },
              { scope: t }
            ),
            (0, r.jsxs)("section", {
              ref: t,
              className:
                "invite-card realtive mt-4 bg-white/30 border border-primary-border-03 shadow-referral-card rounded-20",
              children: [
                (null == i ? void 0 : i.epoch) == T.o.FIRST &&
                  (0, r.jsx)("div", {
                    className:
                      "card relative m-2 sm:m-4 p-4 sm:p-6 bg-white/80 rounded-20 before:absolute before:top-0 before:left-0 before:size-full before:rounded-20 before:bg-invite-card-dashed",
                    children: (0, r.jsxs)("div", {
                      className: "relative info",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "step inline-flex items-center px-2 min-h-8 text-xs font-medium bg-step1/10 text-step1 rounded-2xl",
                          children: "1ST STEP",
                        }),
                        (0, r.jsxs)("h2", {
                          className:
                            "mt-4 mb-3 text-3xl sm:text-4xl font-medium",
                          children: [
                            "Deposit ",
                            l ? "BTC" : "ETH",
                            " or LRTs, Get Quaaloops",
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className:
                            "text-base md:text-lg sm:leading-tight font-light mb-6 sm:mb-10",
                          children: [
                            "Deposit ",
                            l ? "BTC" : "ETH",
                            " or Liquid Restaking Tokens to start earning Quaaloops for the upcoming Airdrop. At protocol launch you can stake your deposits and earn protocol revenue.",
                          ],
                        }),
                        (0, r.jsx)(d.Suspense, {
                          children: (0, r.jsx)(eM, {
                            tvl: C,
                            maxCaps: U,
                            deposits: I,
                            isTurtleClubMember: !!h.isTurtleClubMember,
                          }),
                        }),
                      ],
                    }),
                  }),
                (0, r.jsx)(eQ, {}),
              ],
            })
          );
        },
        eV = l(67458),
        eG = l(12916),
        eK = l.n(eG),
        eJ = l(67655),
        eX = l.n(eJ),
        e$ = l(87520),
        e0 = l(54713);
      let e1 = (e) => {
          var t, l;
          let { address: s } = e,
            a = (0, d.useRef)(null),
            i = (0, R.sJ)(w.eU),
            {
              data: n,
              user: o,
              isLoading: c,
              hasNextPage: u,
              refetch: x,
              fetchNextPage: m,
            } = (0, eV.Z)(s);
          return (
            (0, d.useEffect)(() => {
              P()(a.current) && (a.current = s),
                a.current !== s && (x(), (a.current = s)),
                i && x();
            }, [s, i, x]),
            (0, d.useEffect)(() => {
              (0, e$.j)(".loading", () => {
                c || m();
              });
            }, [u, c, m]),
            (0, r.jsx)("div", {
              children:
                c && (null == n ? void 0 : n.length) === 0
                  ? (0, r.jsx)("div", {
                      className:
                        "loading card-body mx-2 sm:mx-10 min-h-10 border border-dashed border-border-card-block rounded-20 text-center p-5",
                      children: "Loading...",
                    })
                  : (0, r.jsxs)("div", {
                      className:
                        "card-body mx-2 sm:mx-10 border border-dashed border-border-card-block rounded-20",
                      children: [
                        s &&
                          o &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "highlighted bg-border-card-block/10 rounded-t-xl p-2 sm:p-4",
                                children: (0, r.jsx)(e2, {
                                  color: "avatar-gradient-1",
                                  address: s,
                                  title:
                                    null !==
                                      (t = null == o ? void 0 : o.user) &&
                                    void 0 !== t
                                      ? t
                                      : "--",
                                  points:
                                    null !==
                                      (l = null == o ? void 0 : o.total) &&
                                    void 0 !== l
                                      ? l
                                      : 0,
                                  score: "",
                                }),
                              }),
                              (0, r.jsx)("hr", {}),
                            ],
                          }),
                        (0, r.jsx)("div", {
                          className:
                            "listed p-2 sm:p-4 flex flex-col gap-1 max-h-[500px] overflow-auto",
                          children:
                            (null == n ? void 0 : n.length) > 0
                              ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)(Y.l, {
                                      of: eX()(n, ["total"], ["desc"]),
                                      render: (e, t) => {
                                        var l, a;
                                        return (0, r.jsx)(e2, {
                                          color: "avatar-gradient-".concat(
                                            (t % 20) + 1
                                          ),
                                          address: s,
                                          title:
                                            null !==
                                              (l =
                                                null == e ? void 0 : e.user) &&
                                            void 0 !== l
                                              ? l
                                              : "--",
                                          points:
                                            null !==
                                              (a =
                                                null == e ? void 0 : e.total) &&
                                            void 0 !== a
                                              ? a
                                              : 0,
                                          index: t + 1,
                                        });
                                      },
                                    }),
                                    u &&
                                      (0, r.jsx)("div", {
                                        className:
                                          "loading h-10 flex justify-center mt-2 items-center",
                                        children: (0, r.jsx)(el.Z, {
                                          className: "text-primary",
                                        }),
                                      }),
                                  ],
                                })
                              : (0, r.jsx)("div", {
                                  className: "opacity-60 text-center text-sm",
                                  children: "There is no data to display!",
                                }),
                        }),
                      ],
                    }),
            })
          );
        },
        e2 = (e) => {
          let {
              index: t,
              address: l,
              color: s,
              title: a = "",
              points: n = 0,
              score: o = "",
            } = e,
            { data: c } = (0, e0.F)({
              address: a,
              chainId: f.gT.MAINNET_CHAIN_ID,
            }),
            d = c || "".concat(a.slice(0, 7), "...").concat(a.slice(-5));
          return (0, r.jsxs)("div", {
            className:
              "row flex items-center justify-between bg-white rounded-xl min-h-10 ".concat(
                o ? "copy-input" : "border border-row-border"
              ),
            children: [
              (0, r.jsxs)("div", {
                className: "col flex items-center gap-2 ml-2 ".concat(
                  !P()(t) && eK()(l, a) ? "text-primary" : ""
                ),
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "avatar w-6 h-6 rounded-full border border-social-border ".concat(
                        s
                      ),
                  }),
                  d,
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0",
                children: [
                  (0, E._6)(n, 2),
                  " quaaloops",
                  (0, r.jsx)("div", {
                    className:
                      "score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3",
                    children: t
                      ? 1 === t || 2 === t || 3 === t
                        ? (0, r.jsx)(i.default, {
                            src: "/icons/achievement".concat(t, ".svg"),
                            alt: "achievement",
                            className: "ml-auto aspect-square",
                            width: 20,
                            height: 20,
                          })
                        : "#" + t
                      : o,
                  }),
                ],
              }),
            ],
          });
        };
      var e4 = function () {
        let { address: e } = (0, _.m)(),
          t = (0, R.sJ)(w.nj),
          l = (0, R.sJ)(w.a9),
          s = o.ZP.timeline({
            delay: t.epoch === T.o.FIRST ? T.o.FIRST : T.o.SECOND,
          }),
          a = (0, d.useRef)(null);
      };
      let e5 = (0, X.default)(() => l.e(4388).then(l.bind(l, 14388)), {
        loadableGenerated: { webpack: () => [14388] },
        ssr: !1,
      });
      var e6 = function () {
        let { isBTC: e } = (0, n.Z)(),
          { isConnected: t, address: l } = (0, _.m)(),
          s = (0, U.x)(),
          { switchChain: a } = (0, H.o)(),
          { openConnectModal: i } = (0, eu.We)(),
          { data: u, signMessage: x } = (0, D.Q)(),
          [m, h] = (0, d.useState)(""),
          [p, g] = (0, d.useState)(!1),
          { mutateAsync: b } = (0, S.D)({
            ...v.gk,
            onSuccess: (e) => {
              h(e.code || "");
            },
          }),
          { mutateAsync: j } = (0, S.D)({
            ...v.VF,
            onSuccess: (e) => h(e.code || ""),
          }),
          { mutateAsync: y } = (0, S.D)({
            ...v.RZ,
            onSuccess: (e) => {
              g(e.result);
            },
          }),
          N = o.ZP.timeline({ delay: 1 }),
          w = (0, d.useRef)(null);
        (0, c.V)(
          () => {
            let e = w.current;
            o.ZP.set(e, { y: 20, opacity: 0 }),
              (0, e$.j)(e, () => {
                N.to(e, { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" })
                  .fromTo(
                    e.querySelector(".liq-bg"),
                    { x: 400, duration: 1 },
                    { x: 0, duration: 1, ease: "power2.inOut" }
                  )
                  .fromTo(
                    e.querySelector(".liq-circle"),
                    { scale: 0, rotate: "20deg", opacity: 0, duration: 1 },
                    {
                      scale: 1,
                      rotate: "0deg",
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "+=.5"
                  )
                  .fromTo(
                    e.querySelector(".group"),
                    { y: -400, x: 400, opacity: 0, duration: 1 },
                    {
                      y: 0,
                      x: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "-=.5"
                  );
              });
          },
          { scope: w }
        ),
          (0, d.useEffect)(() => {
            l && y(l);
          }, [y, l]);
        let T = async () => {
            if (s !== f.gT.MAINNET_CHAIN_ID && s !== f.gT.SCROLL_CHAIN_ID)
              return (0, B.vd)(() => {
                a && a({ chainId: f.gT.MAINNET_CHAIN_ID });
              });
            x(
              { account: l, message: "Generate Loop Referral Code" },
              {
                onSuccess(e, t, s) {
                  b({
                    user: {
                      walletAddress: l,
                      challenge: "Generate Loop Referral Code",
                      challengeDate: Date.now(),
                    },
                    signature: e,
                  });
                },
                onError(e, t, l) {
                  (0, F.CF)({
                    title: "Something went wrong",
                    description: e.message,
                    type: "error",
                  });
                },
              }
            );
          },
          E = async () => {
            if (s !== f.gT.MAINNET_CHAIN_ID && s !== f.gT.SCROLL_CHAIN_ID)
              return (0, B.vd)(() => {
                a && a({ chainId: f.gT.MAINNET_CHAIN_ID });
              });
            x(
              { account: l, message: "Show Loop Referral Code" },
              {
                onSuccess(e, t, s) {
                  j({
                    user: {
                      walletAddress: l,
                      challenge: "Show Loop Referral Code",
                      challengeDate: Date.now(),
                    },
                    signature: e,
                  });
                },
                onError(e, t, l) {
                  (0, F.CF)({
                    title: "Something went wrong",
                    description: e.message,
                    type: "error",
                  });
                },
              }
            );
          };
        return (0, r.jsxs)("section", {
          ref: w,
          className:
            "relative card px-6 pt-6 pb-10 sm:px-10 sm:pt-10 sm:pb-12 bg-white/70 rounded-20 mt-4 shadow-liquidity overflow-x-hidden",
          children: [
            (0, r.jsx)("h2", {
              className: "mt-4 mb-4 sm:mb-3 text-3xl sm:text-4.5xl font-medium",
              children: "20% Referral Bonus",
            }),
            (0, r.jsx)("p", {
              className:
                "text-base sm:text-lg !leading-normal !sm:leading-tight mb-8 font-light max-w-4xl",
              children:
                "Use your code to invite friends and earn 20% of their Quaaloops. Your rank on the leaderboard is determined by the total Quaaloops you accumulate.",
            }),
            t
              ? (0, r.jsx)(r.Fragment, {
                  children: m
                    ? (0, r.jsx)(e5, { value: m })
                    : (0, r.jsx)(r.Fragment, {
                        children:
                          !0 == p
                            ? (0, r.jsx)(e8, { isBTC: e, onClick: E })
                            : (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(e3, {
                                  isBTC: e,
                                  onClick: T,
                                }),
                              }),
                      }),
                })
              : (0, r.jsx)("button", {
                  type: "button",
                  "aria-label":
                    "A button that on click connects you with the wallet",
                  id: "connect-wallet",
                  className: "deposit w-full max-w-[350px] ".concat(
                    (0, Z.L)({ size: "lg", color: "green" })
                  ),
                  onClick: i,
                  children: "Connect Wallet",
                }),
          ],
        });
      };
      let e3 = (e) => {
          let { onClick: t, isBTC: l } = e;
          return (0, r.jsx)("button", {
            type: "button",
            onClick: t,
            "aria-label": "A button that on click connects you with the wallet",
            id: "connect-wallet",
            className: "gen-referral-code w-full max-w-[350px] ".concat(
              (0, Z.L)({ size: "lg", color: l ? "orange" : "primary" })
            ),
            children: "Generate Referral Code",
          });
        },
        e8 = (e) => {
          let { onClick: t, isBTC: l } = e;
          return (0, r.jsx)("div", {
            className: "flex flex-wrap items-center gap-4",
            children: (0, r.jsx)("div", {
              className: "copy-input rounded-28",
              children: (0, r.jsxs)("div", {
                className: "relative min-w-[220px] rounded-28 shadow-sm",
                children: [
                  (0, r.jsx)("input", {
                    type: "text",
                    name: "copy",
                    id: "copy",
                    className:
                      "block w-full rounded-28 border-0 py-1.5 pl-6 pr-20 min-h-[54px] text-black !text-lg placeholder:text-gray-400 sm:text-sm sm:leading-6",
                    placeholder: "Code",
                    value: "*******",
                    readOnly: !0,
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-y-0 right-[-1px] flex items-center",
                    children: (0, r.jsx)("button", {
                      type: "button",
                      onClick: t,
                      "aria-label":
                        "A button that on click connects you with the wallets",
                      id: "subscribe",
                      className: "copy min-w-[110px] ".concat(
                        (0, es.m6)(
                          (0, Z.L)({
                            size: "lgx",
                            color: l ? "orange" : "primary",
                          }),
                          "min-w-0 sm:px-4 md:px-4"
                        )
                      ),
                      children: "Show",
                    }),
                  }),
                ],
              }),
            }),
          });
        };
      var e7 = l(79506),
        e9 = function () {
          let e = (0, R.Zl)(w.nj);
          return (
            (0, d.useEffect)(() => {
              e((e) => ({ ...e, epoch: T.o.SECOND }));
            }, []),
            (0, r.jsxs)("main", {
              className: "app min-h-screen",
              children: [
                (0, r.jsx)(e7.Z, {}),
                (0, r.jsxs)("div", {
                  className:
                    "relative z-1 pt-32 pb-24 max-w-referral mx-auto px-2 sm:px-4",
                  children: [
                    (0, r.jsx)(x, {}),
                    (0, r.jsx)(eT, {}),
                    (0, r.jsx)(eq, {}),
                    (0, r.jsx)(e6, {}),
                    (0, r.jsx)(e4, {}),
                  ],
                }),
              ],
            })
          );
        },
        te = l(16463),
        tt = function () {
          let { isConnected: e, chainId: t } = (0, _.m)();
          return (
            (0, d.useEffect)(() => {
              if (e && t)
                switch ((0, V.B9)(t)) {
                  case V.Jb.Scroll:
                    return (0, te.redirect)("/scroll");
                  case V.Jb.Mainnet:
                    return;
                  default:
                    return (0, te.redirect)("/btc");
                }
            }, [t]),
            (0, r.jsx)(e9, {})
          );
        };
    },
    11183: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        9262, 6409, 9472, 691, 922, 5984, 8145, 8794, 2573, 3834, 2971, 7023,
        1744,
      ],
      function () {
        return e((e.s = 3937));
      }
    ),
      (_N_E = e.O());
  },
]);
