(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    79614: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 64404)),
        Promise.resolve().then(n.bind(n, 27640)),
        Promise.resolve().then(n.bind(n, 90239)),
        Promise.resolve().then(n.bind(n, 80354)),
        Promise.resolve().then(n.t.bind(n, 84080, 23)),
        Promise.resolve().then(n.t.bind(n, 91541, 23)),
        Promise.resolve().then(n.t.bind(n, 58488, 23)),
        Promise.resolve().then(n.bind(n, 93999)),
        Promise.resolve().then(n.t.bind(n, 44193, 23)),
        Promise.resolve().then(n.bind(n, 78119)),
        Promise.resolve().then(n.bind(n, 60670)),
        Promise.resolve().then(n.t.bind(n, 53054, 23)),
        Promise.resolve().then(n.bind(n, 60970));
    },
    78119: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return x;
        },
      });
      var s = n(57437),
        o = n(66648),
        i = n(80354),
        l = n(27269),
        r = n(85020),
        a = n(87138),
        c = function (e) {
          let { className: t = "" } = e,
            n = [
              { icon: "icon-x", url: r.gT.SOCIALS.X, name: "X" },
            ];
          return (0, s.jsx)("div", {
            className: "social-icons flex items-center gap-4 ".concat(t),
            children: (0, s.jsx)(l.l, {
              of: n,
              render: (e) =>
                (0, s.jsx)(a.default, {
                  className:
                    "min-w-8 h-8 bg-black/5 hover:bg-black/10 hover:scale-105 hover:transition-transform transition-transform rounded-full grid place-content-center",
                  href: e.url,
                  target: "_blank",
                  title: e.name,
                  children: (0, s.jsx)("svg", {
                    className: e.icon,
                    width: 16,
                    height: 16,
                    children: (0, s.jsx)("use", {
                      href: "/icons/icons.svg#".concat(e.icon),
                    }),
                  }),
                }),
            }),
          });
        },
        d = n(2265),
        h = n(49582),
        u = n(60019),
        m = n(87520),
        x = function () {
          let e = [
              { url: r.gT.PAGES.ABOUT, title: "About" },
              { url: r.gT.PAGES.DOCS, title: "Docs" },
            ],
            t = h.ZP.timeline({ delay: 1 }),
            n = (0, d.useRef)(null);
          return (
            (0, u.V)(
              () => {
                let e = n.current;
                (0, m.j)(e, () => {
                  var s, o, i;
                  (e.style.opacity = "1"),
                    t
                      .fromTo(
                        null === (s = n.current) || void 0 === s
                          ? void 0
                          : s.querySelector(".info"),
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
                      )
                      .fromTo(
                        null === (o = n.current) || void 0 === o
                          ? void 0
                          : o.querySelectorAll(".social-icons a"),
                        { x: -10, opacity: 0, stagger: 0.1 },
                        {
                          x: 0,
                          opacity: 1,
                          duration: 1,
                          stagger: 0.1,
                          ease: "power2.inOut",
                        },
                        "-=.7"
                      )
                      .fromTo(
                        null === (i = n.current) || void 0 === i
                          ? void 0
                          : i.querySelectorAll("ul li"),
                        { y: 20, opacity: 0, stagger: 0.1 },
                        {
                          y: 0,
                          opacity: 1,
                          duration: 1,
                          stagger: 0.1,
                          ease: "power2.inOut",
                        },
                        "-=.7"
                      );
                });
              },
              { scope: n }
            ),
            (0, s.jsx)("footer", {
              ref: n,
              style: { opacity: 0 },
              className:
                "footer w-full pt-9 pb-10 border-t border-t-footer-border",
              children: (0, s.jsxs)("div", {
                className:
                  "fbody flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 max-w-9xl mx-auto",
                children: [
                  (0, s.jsxs)("div", {
                    className: "info flex flex-col md:flex-row items-center",
                    children: [
                      (0, s.jsx)(o.default, {
                        src: "/img/logo/black.svg",
                        alt: "Logo",
                        width: 100,
                        height: 24,
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "line hidden md:block w-[1px] h-6 mx-6 bg-footer-border",
                      }),
                      (0, s.jsx)(c, {
                        className: "mt-6 md:mt-0 mb-10 md:mb-0",
                      }),
                    ],
                  }),
                  (0, s.jsx)("ul", {
                    className:
                      "flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-center",
                    children: (0, s.jsx)(l.l, {
                      of: e,
                      render: (e) =>
                        (0, s.jsx)("li", {
                          className: "text-black/70 font-light text-sm",
                          children: (0, s.jsx)(i.r, {
                            href: e.url,
                            children: e.title,
                          }),
                        }),
                    }),
                  }),
                ],
              }),
            })
          );
        };
    },
    60670: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return P;
        },
      });
      var s = n(57437),
        o = n(80354),
        i = n(66648),
        l = n(2265),
        r = n(27269),
        a = n(53036),
        c = n(58054),
        d = n(67365),
        h = n(46789),
        u = n(62655),
        m = n(49972),
        x = n.n(m),
        p = n(16463),
        b = n(26735),
        g = n(98286);
      let f = () => {
        let e = (0, p.usePathname)(),
          { isConnected: t } = (0, b.m)(),
          n = (0, g.x)(),
          o = (0, a.B9)(n),
          { isETH: r, isBTC: m } = (0, c.Z)(),
          [f, w] = (0, l.useState)(m),
          v = !m && o === a.Jb.Scroll,
          j = (e) => {
            w(e),
              setTimeout(
                () => (location.pathname = e ? "/btc" : "/epoch2-eth"),
                0
              );
          };
        return (
          (0, l.useEffect)(() => {
            !(!t || x()(o)) &&
              e &&
              (("/epoch2-eth" === e || "/btc" === e) &&
                o === a.Jb.Scroll &&
                setTimeout(() => (location.pathname = "/scroll"), 0),
              "/scroll" === e &&
                o === a.Jb.Mainnet &&
                setTimeout(() => (location.pathname = "/epoch2-eth"), 0));
          }, [t, n, e]),
          (0, s.jsx)(u.NL.Custom, {
            children: (t) => {
              var n;
              let {
                  account: o,
                  chain: l,
                  openAccountModal: a,
                  openChainModal: c,
                  openConnectModal: u,
                  authenticationStatus: x,
                  mounted: p,
                } = t,
                b = p && "loading" !== x;
              return (0, s.jsx)("div", {
                ...(!b && {
                  "aria-hidden": !0,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                }),
                children:
                  b && o && l && (!x || "authenticated" === x)
                    ? l.unsupported
                      ? (0, s.jsx)("button", {
                          onClick: c,
                          type: "button",
                          className:
                            "btn-action w-[160px] sm:w-[200px] h-[48px] p-1 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                          children: "Wrong network",
                        })
                      : (0, s.jsxs)("div", {
                          style: { display: "flex" },
                          className: "gap-[6px] md:gap-3",
                          children: [
                            v || "/epoch2" === e
                              ? (0, s.jsxs)("button", {
                                  onClick: c,
                                  type: "button",
                                  className:
                                    "btn-action flex items-center text-sm sm:text-base h-[40px] md:h-[48px] p-[6px] md:p-4 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                                  children: [
                                    l.hasIcon &&
                                      (0, s.jsx)("div", {
                                        style: {
                                          background: l.iconBackground,
                                          borderRadius: 999,
                                          overflow: "hidden",
                                        },
                                        className:
                                          "mr-0 md:mr-1 w-7 md:w-5 h-7 md:h-5",
                                        children:
                                          l.iconUrl &&
                                          (0, s.jsx)(i.default, {
                                            alt:
                                              null !== (n = l.name) &&
                                              void 0 !== n
                                                ? n
                                                : "Chain icon",
                                            src: l.iconUrl,
                                            width: 30,
                                            height: 30,
                                          }),
                                      }),
                                    (0, s.jsx)("div", {
                                      className: "hidden md:block",
                                      children: l.name,
                                    }),
                                  ],
                                })
                              : (0, s.jsxs)("div", {
                                  className: "inline-flex gap-3",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className:
                                        "btn-action flex items-center text-sm sm:text-base h-[40px] md:h-[48px] p-[6px] md:p-2 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          onClick: () => (f ? j(!f) : null),
                                          className:
                                            "flex items-center cursor-pointer ".concat(
                                              f ? "opacity-70" : ""
                                            ),
                                          children: [
                                            (0, s.jsx)("div", {
                                              style: {
                                                borderRadius: 999,
                                                overflow: "hidden",
                                              },
                                              className:
                                                "mr-0 md:mr-1 w-7 h-7 bg-white",
                                              children: (0, s.jsx)(i.default, {
                                                alt: "ETH",
                                                src: "/icons/crypto/ETH.svg",
                                                width: 38,
                                                height: 38,
                                              }),
                                            }),
                                            (0, s.jsx)("div", {
                                              className: "hidden md:block",
                                              children: "ETH",
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)(h.r, {
                                          checked: f,
                                          onChange: j,
                                          className: "".concat(
                                            f
                                              ? "bg-orange"
                                              : "bg-switch-gradient",
                                            " relative mx-2 inline-flex h-[32px] w-[60px] shrink-0 cursor-pointer p-0.5 rounded-full border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                          ),
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "sr-only",
                                              children: "Use setting",
                                            }),
                                            (0, s.jsx)("span", {
                                              "aria-hidden": "true",
                                              className: "".concat(
                                                f
                                                  ? "translate-x-7"
                                                  : "translate-x-0",
                                                "\n                          pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          onClick: () => (f ? null : j(!f)),
                                          className:
                                            "flex items-center cursor-pointer ".concat(
                                              f ? "" : "opacity-70"
                                            ),
                                          children: [
                                            (0, s.jsx)("div", {
                                              className: "hidden md:block",
                                              children: "BTC",
                                            }),
                                            (0, s.jsx)("div", {
                                              style: {
                                                borderRadius: 999,
                                                overflow: "hidden",
                                              },
                                              className:
                                                "ml-0 md:ml-1 w-7 h-7 bg-orange",
                                              children: (0, s.jsx)(i.default, {
                                                alt: "BTC",
                                                src: "/icons/crypto/BTC.svg",
                                                width: 38,
                                                height: 38,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (r || m) &&
                                      (0, s.jsx)("div", {
                                        className:
                                          "btn-action flex items-center text-sm sm:text-base h-[40px] md:h-[48px] p-[6px] md:p-2 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                                        children: (0, s.jsxs)("div", {
                                          onClick: c,
                                          className:
                                            "flex items-center cursor-pointer",
                                          children: [
                                            (0, s.jsx)("div", {
                                              style: {
                                                borderRadius: 999,
                                                overflow: "hidden",
                                              },
                                              className:
                                                "mr-0 md:mr-1 w-7 h-7 bg-white",
                                              children: (0, s.jsx)(i.default, {
                                                alt: "ETH",
                                                src: "/icons/logo-ethereum.svg",
                                                width: 38,
                                                height: 38,
                                              }),
                                            }),
                                            (0, s.jsx)("div", {
                                              className: "hidden md:block mr-2",
                                              children: "Ethereum",
                                            }),
                                          ],
                                        }),
                                      }),
                                  ],
                                }),
                            (0, s.jsxs)("button", {
                              onClick: a,
                              type: "button",
                              className:
                                "btn-action hidden sm:flex items-center text-sm sm:text-base h-[40px] md:h-[48px] p-3 md:p-4 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                              children: [
                                o.displayName,
                                (0, s.jsx)("span", {
                                  className: "hidden md:block",
                                  children: o.displayBalance
                                    ? " (".concat(
                                        (0, d.jW)(
                                          o.displayBalance.split(" ")[0],
                                          2
                                        ),
                                        " ETH)"
                                      )
                                    : "",
                                }),
                              ],
                            }),
                          ],
                        })
                    : (0, s.jsx)("button", {
                        onClick: u,
                        type: "button",
                        className:
                          "btn-action w-[160px] sm:w-[200px] h-[48px] p-1 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                        children: "Connect Wallet",
                      }),
              });
            },
          })
        );
      };
      var w = n(49582),
        v = n(60019),
        j = n(99441),
        y = n(46053),
        N = n(85020),
        k = n(96164),
        T = function (e) {
          let { className: t = "" } = e;
          return (0, s.jsxs)("div", {
            className: (0, k.m6)(
              "loop-banner p-2 flex flex-col sm:flex-row justify-center items-center flex-wrap gap-0.5 md:gap-5 bg-top-banner-gradient absolute top-0 inset-x-0 z-50 min-h-8 text-white text-sm",
              t
            ),
            children: [
              (0, s.jsx)("a", {
                href: N.gT.BIG_BOUNTY,
                target: "_blank",
                "aria-label": "A button that on click navigates to ".concat(
                  N.gT.BIG_BOUNTY
                ),
                rel: "noreferrer",
                children: "Join our Bug Bounty Program",
              }),
              (0, s.jsx)("div", { className: "separator hidden sm:block" }),
              (0, s.jsx)("a", {
                href: N.gT.BIG_BOUNTY,
                target: "_blank",
                "aria-label": "A button that on click navigates to ".concat(
                  N.gT.BIG_BOUNTY
                ),
                rel: "noreferrer",
                children: "Find bugs and EARN $100,000.00",
              }),
              (0, s.jsx)("div", { className: "separator hidden sm:block" }),
              (0, s.jsxs)("a", {
                href: N.gT.BIG_BOUNTY,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "A button that on click navigates to ".concat(
                  N.gT.BIG_BOUNTY
                ),
                className: "flex items-center gap-2",
                children: [
                  (0, s.jsx)(i.default, {
                    src: "/img/code4rena.svg",
                    alt: "Logo",
                    width: 100,
                    height: 20,
                  }),
                  "Join now",
                  (0, s.jsx)("svg", {
                    "aria-label": "Svg open icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "24px",
                    height: "18px",
                    viewBox: "0 0 24 24",
                    version: "1.1",
                    children: (0, s.jsx)("path", {
                      d: "M21.7737743,11.5137744 L15.5837743,5.33377443 C15.3369573,5.1419567 14.9859464,5.16387706 14.7649117,5.38491179 C14.543877,5.60594651 14.5219566,5.95695738 14.7137743,6.20377443 L19.8437743,11.3337744 L2.57377432,11.3337744 C2.23135777,11.3337744 1.95377432,11.6113579 1.95377432,11.9537744 C1.95377432,12.296191 2.23135777,12.5737744 2.57377432,12.5737744 L19.8337743,12.5737744 L14.7137743,17.6937744 C14.5242496,17.8410665 14.4367708,18.0845204 14.4892042,18.3187538 C14.5416376,18.5529872 14.7245615,18.7359112 14.9587949,18.7883446 C15.1930284,18.8407779 15.4364822,18.7532991 15.5837743,18.5637744 L21.7737743,12.3737744 C22.004902,12.133695 22.004902,11.7538539 21.7737743,11.5137744 L21.7737743,11.5137744 Z",
                      id: "Path",
                      fill: "#fff",
                      fillRule: "nonzero",
                      transform:
                        "translate(11.950447, 12.003327) scale(1, -1) rotate(0) translate(-11.950447, -12.003327)",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        C = n(16303);
      let S = () => {
        let { address: e } = (0, b.m)();
        return (0, s.jsx)(u.NL.Custom, {
          children: (t) => {
            let {
                account: n,
                chain: o,
                openAccountModal: i,
                openChainModal: l,
                openConnectModal: r,
                authenticationStatus: a,
                mounted: c,
              } = t,
              h = c && "loading" !== a;
            return (0, s.jsx)("div", {
              className: "w-full",
              ...(!h && {
                "aria-hidden": !0,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              }),
              children:
                h && n && o && (!a || "authenticated" === a)
                  ? o.unsupported
                    ? (0, s.jsx)("button", {
                        onClick: l,
                        type: "button",
                        className:
                          "btn-action w-[160px] sm:w-[200px] h-[48px] p-1 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                        children: "Wrong network",
                      })
                    : (0, s.jsxs)("button", {
                        onClick: i,
                        type: "button",
                        className:
                          "btn-action w-full flex items-center text-sm sm:text-base p-3 md:p-4 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                        children: [
                          e || n.displayName,
                          (0, s.jsx)("span", {
                            className: "hidden md:block",
                            children: n.displayBalance
                              ? " (".concat(
                                  (0, d.jW)(n.displayBalance.split(" ")[0], 2),
                                  " ETH)"
                                )
                              : "",
                          }),
                        ],
                      })
                  : (0, s.jsx)("button", {
                      onClick: r,
                      type: "button",
                      className:
                        "btn-action w-[160px] sm:w-[200px] h-[48px] p-1 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                      children: "Connect Wallet",
                    }),
            });
          },
        });
      };
      var B = n(55067),
        P = function () {
          var e;
          let t = (0, j.sJ)(y.nj),
            { isETH: n } = (0, c.Z)(),
            a =
              null === (e = C.Z.API_URL) || void 0 === e
                ? void 0
                : e.includes("dev-api-points"),
            [d, h] = (0, l.useState)(!1),
            [u, m] = (0, l.useState)(!1),
            [x, p] = (0, l.useState)(!1),
            b = (0, l.useRef)(0),
            g = [
              { url: N.gT.PAGES.ABOUT, title: "About" },
              { url: N.gT.PAGES.DOCS, title: "Docs" },
            ],
            k = w.ZP.timeline({ delay: 0.2 }),
            P = (0, l.useRef)(null);
          (0, v.V)(
            () => {
              var e, t, n, s;
              w.ZP.set(".actions button", { opacity: 0 }),
                w.ZP.set(document.body, { opacity: 1 }),
                w.ZP.set(
                  null === (e = document) || void 0 === e
                    ? void 0
                    : e.querySelectorAll(".header .nft"),
                  { opacity: 0, y: -20 }
                ),
                k
                  .fromTo(
                    null === (t = P.current) || void 0 === t
                      ? void 0
                      : t.querySelector(".logo"),
                    { y: -100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
                  )
                  .fromTo(
                    null === (n = P.current) || void 0 === n
                      ? void 0
                      : n.querySelector(".epoch-btn"),
                    { x: -30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                    "-=0.5"
                  )
                  .fromTo(
                    null === (s = P.current) || void 0 === s
                      ? void 0
                      : s.querySelectorAll(".actions .btn-action"),
                    { y: -100, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      stagger: 0.1,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "-=1"
                  );
            },
            { scope: P }
          ),
            (0, l.useEffect)(() => {
              let e = (e) => {
                let t = e.target.documentElement.scrollTop;
                p(!(t > b.current)), (b.current = t), t <= 0 && p(!1);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, [b.current]),
            (0, l.useEffect)(() => {
              E();
            }, []);
          let E = () => {
            (null == t ? void 0 : t.epoch) === B.o.FIRST &&
              setTimeout(() => {
                h(!0);
              }, 3e3);
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(T, { className: x ? "sm:fixed" : "" }),
              (0, s.jsxs)("header", {
                ref: P,
                className:
                  "navbar overflow-x-clip w-full z-999 border-b ".concat(
                    x
                      ? "fixed bg-step1/10 border-b-border-line/20 backdrop-blur-2xl sm:top-8"
                      : "absolute border-b-border-line/5 top-20 sm:top-8",
                    " transition-all"
                  ),
                children: [
                  (0, s.jsxs)("nav", {
                    className:
                      "nav-items flex justify-between gap-6 items-center px-4 sm:px-6 max-w-9xl mx-auto ".concat(
                        x ? "min-h-20" : "min-h-28",
                        " transition-all"
                      ),
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "main-logo flex items-center flex-col sm:flex-row gap-2 sm:gap-1.5",
                        children: [
                          (0, s.jsx)(o.r, {
                            href: "/",
                            children: (0, s.jsx)(i.default, {
                              src: "/img/logo/black.svg",
                              alt: "Logo",
                              className: "logo",
                              width: 100,
                              height: 24,
                              priority: !0,
                              sizes: "(max-width: 768px) 100vw, 100vw",
                              quality: 100,
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "epoch-btn text-xxs text-white flex items-center whitespace-nowrap gap-2 min-h-8 rounded-full ".concat(
                                (null == t ? void 0 : t.epoch) === B.o.FIRST
                                  ? "pl-2 pr-1"
                                  : "px-2"
                              ),
                            children: [
                              "EPOCH ",
                              null == t ? void 0 : t.epoch,
                              (null == t ? void 0 : t.epoch) === B.o.FIRST &&
                                n &&
                                (0, s.jsxs)("div", {
                                  role: "button",
                                  onClick: () => h(!0),
                                  className:
                                    "upgrade uppercase text-primary bg-white rounded-full flex items-center pl-2 pr-1 gap-1 min-h-6",
                                  children: [
                                    "Upgrade to Epoch 2",
                                    (0, s.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "14",
                                      height: "14",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      children: [
                                        (0, s.jsx)("path", {
                                          d: "m5 12 7-7 7 7",
                                        }),
                                        (0, s.jsx)("path", { d: "M12 19V5" }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "actions flex items-center gap-2 sm:gap-4",
                        children: [
                          (0, s.jsx)(f, {}),
                          (0, s.jsx)("button", {
                            className:
                              "btn-action svg-hover min-w-[40px] w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-black/5 shadow-inner rounded-full grid sm:hidden place-items-center",
                            onClick: () => m(!u),
                            children: (0, s.jsx)("svg", {
                              className: "icon-nav fill-black",
                              width: 24,
                              height: 24,
                              children: (0, s.jsx)("use", {
                                href: "/icons/icons.svg#".concat(
                                  u ? "icon-nav-close" : "icon-nav-menu"
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "".concat(
                      u ? "w-full" : "w-0",
                      " aside-backdrop z-[99] h-full fixed inset-0 transition backdrop-blur-sm bg-black-opacity-2"
                    ),
                    onClick: () => m(!1),
                  }),
                  (0, s.jsxs)("aside", {
                    className: "".concat(
                      u ? "translate-x-[0]" : "translate-x-[100%]",
                      " sidebar  z-[100] bg-white/90 backdrop:blur-2xl text-black w-full min-h-screen md:w-[350px] p-2.5 fixed inset-y-0 right-0 transform transition duration-500 ease-in-out overflow-y-auto"
                    ),
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("button", {
                            className:
                              "svg-hover min-w-[50px] h-[50px] bg-black/5 shadow-inner rounded-full grid place-items-center m-2",
                            onClick: () => m(!1),
                            children: (0, s.jsx)("svg", {
                              className: "icon-nav-close",
                              width: 24,
                              height: 24,
                              children: (0, s.jsx)("use", {
                                href: "/icons/icons.svg#icon-nav-close",
                              }),
                            }),
                          }),
                          (0, s.jsx)(S, {}),
                        ],
                      }),
                      (0, s.jsx)("hr", {
                        className: "nav mt-10 mb-10 opacity-10",
                      }),
                      (0, s.jsx)("ul", {
                        className:
                          "flex flex-col items-center justify-center gap-6",
                        children: (0, s.jsx)(r.l, {
                          of: g,
                          render: (e) =>
                            (0, s.jsx)("li", {
                              className: "text-black font-light",
                              children: (0, s.jsx)(o.r, {
                                href: e.url,
                                children: e.title,
                              }),
                            }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a
                ? (0, s.jsx)("div", {
                    className:
                      "fixed bottom-2 right-2 rounded-full bg-black text-white size-12 z-999 grid place-content-center",
                    children: "DEV",
                  })
                : null,
            ],
          });
        };
    },
    60970: function (e, t, n) {
      "use strict";
      var s = n(57437),
        o = n(16909),
        i = n(62655),
        l = n(40181),
        r = n(58421),
        a = n(93191),
        c = n(63161),
        d = n(99441);
      let h = (0, o.W)({
          accentColor: "rgb(78, 183, 0)",
          borderRadius: "large",
          fontStack: "system",
        }),
        u = new r.S({
          defaultOptions: { queries: { refetchOnWindowFocus: !1 } },
        });
      t.default = (e) => {
        let { children: t } = e;
        return (0, s.jsx)(d.Wh, {
          children: (0, s.jsx)(l.F, {
            config: c.wagmiConfig,
            children: (0, s.jsx)(a.aH, {
              client: u,
              children: (0, s.jsx)(i.pj, { theme: h, children: t }),
            }),
          }),
        });
      };
    },
    53054: function () {},
  },
  function (e) {
    e.O(
      0,
      [9757, 9141, 9472, 691, 922, 5984, 8145, 6571, 2573, 2971, 7023, 1744],
      function () {
        return e((e.s = 79614));
      }
    ),
      (_N_E = e.O());
  },
]);
