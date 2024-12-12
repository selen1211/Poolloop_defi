"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2573],
  {
    85020: function (e, n, t) {
      t.d(n, {
        et: function () {
          return a;
        },
        gT: function () {
          return c;
        },
        mg: function () {
          return o;
        },
      });
      let c = {
          PAGES: {
            DOCS: "https://maxims-organization-22.gitbook.io/loof_defi",
            BLOG: "https://mirror.xyz/loopfixyz.eth",
            ABOUT: "https://loop-defi.vercel.app/",
            CONTACT: "/contact",
            TERMS: "/terms",
            PRIVACY: "/privacy-policy",
            IMPRINT: "/imprint",
          },
          SOCIALS: {
            DISCORD: "https://discord.com/invite/mVqf2Q5Whg",
            TELEGRAM: "https://t.me/loopfixyz",
            X: "https://x.com/Loop_defix",
            MIRROR: "https://mirror.xyz/loopfixyz.eth",
          },
          BIG_BOUNTY: "https://code4rena.com/bounties/loopfi#top",
          BTC_CHAIN_ID: 555,
          MAINNET_CHAIN_ID: 1,
          SCROLL_CHAIN_ID: 534352,
        },
        o = { FIVE_MIN: 3e5, ONE_HOUR: 36e5 },
        a = 1718615215869;
    },
    60954: function (e, n, t) {
      t.d(n, {
        CF: function () {
          return a;
        },
      });
      var c = t(57437),
        o = t(93999);
      let a = (e) => {
          let {
            title: n,
            description: t,
            type: a,
            icon: r,
            action: s,
            options: E,
          } = e;
          switch (a) {
            case "success":
              o.Am.success(
                (0, c.jsx)(i, { title: n, description: t, action: s }),
                { ...E, icon: r }
              );
              break;
            case "error":
              o.Am.error(
                (0, c.jsx)(i, { title: n, description: t, action: s }),
                { ...E, icon: r }
              );
              break;
            case "warning":
              o.Am.warning(
                (0, c.jsx)(i, { title: n, description: t, action: s }),
                { ...E, icon: r }
              );
              break;
            case "info":
              o.Am.info(
                (0, c.jsx)(i, { title: n, description: t, action: s }),
                { ...E, icon: r }
              );
              break;
            default:
              (0, o.Am)(
                (0, c.jsx)(i, { title: n, description: t, action: s }),
                { ...E, icon: r }
              );
          }
        },
        i = (e) => {
          let { icon: n, title: t, description: o, action: a } = e;
          return (0, c.jsxs)("div", {
            className: "flex items-center ".concat(n ? "" : "pl-4"),
            children: [
              (0, c.jsxs)("div", {
                className: "content",
                children: [
                  t
                    ? (0, c.jsx)("h2", {
                        className: "toast-title",
                        children: t,
                      })
                    : null,
                  o
                    ? (0, c.jsx)("p", {
                        className: "toast-description",
                        children: o,
                      })
                    : null,
                ],
              }),
              a || null,
            ],
          });
        };
    },
    27269: function (e, n, t) {
      t.d(n, {
        l: function () {
          return o;
        },
      });
      var c = t(2265);
      let o = (e) => {
        let { render: n, of: t } = e;
        return c.Children.toArray(t.map((e, t) => n(e, t)));
      };
    },
    63161: function (e, n, t) {
      t.r(n),
        t.d(n, {
          isPROD: function () {
            return v;
          },
          mainnetConfig: function () {
            return h;
          },
          publicClient: function () {
            return S;
          },
          scrollConfig: function () {
            return D;
          },
          wagmiConfig: function () {
            return g;
          },
          walletClient: function () {
            return R;
          },
        });
      var c = t(62536),
        o = t(1850),
        a = t(53611),
        i = t(16491),
        r = t(60247),
        s = t(61913),
        E = t(69532),
        l = t(60152),
        T = t(62655),
        d = t(54463),
        u = t(46800),
        m = t(16537),
        f = t(34105),
        C = t(78574),
        p = t(76624),
        B = t(95422),
        H = t(35001);
      let b = { ...i.R, iconUrl: "/icons/logo-ethereum.svg" },
        A = { ...t(67118).A, iconUrl: "/icons/crypto/scroll.svg" },
        v = "https://api-points.loopfi.xyz",
        y = v ? b : a.y,
        g = (0, T.vX)({
          appName: "LoopFi",
          projectId: "5dc159f16db9657e68df16331f0a0304",
          chains: [y, A],
          wallets: [
            {
              groupName: "Suggested",
              wallets: [d.U, u.u, m.D, f.P, C.D, p.p, B.a, H.l],
            },
          ],
          ssr: !0,
          transports: v
            ? {
                [b.id]: (0, r.t)([
                  (0, c.d)(
                    "https://eth-mainnet.g.alchemy.com/v2/ROltkBji2jl5R0powbQPmcJPmWZsEpxX"
                  ),
                  (0, c.d)(),
                ]),
                [A.id]: (0, r.t)([
                  (0, c.d)("https://rpc.scroll.io/"),
                  (0, c.d)(),
                ]),
              }
            : {
                [a.y.id]: (0, r.t)([
                  (0, c.d)(
                    "https://arb-mainnet.g.alchemy.com/v2/bJ38AK0KGAYQKAFi3rUVeSPvNakP1R8z"
                  ),
                  (0, c.d)(),
                ]),
                [A.id]: (0, r.t)([
                  (0, c.d)("https://rpc.scroll.io/"),
                  (0, c.d)(),
                ]),
              },
        }),
        R = (e) => (0, s.K)({ chain: b, transport: (0, E.P)(e) }),
        h = (0, o._)({
          chains: [y, A],
          transports: {
            [y.id]: (0, r.t)([
              (0, c.d)(
                "https://eth-mainnet.g.alchemy.com/v2/vlQBuMg8fWcrBr7BTOT7bXn4kv91RbXz"
              ),
              (0, c.d)("https://eth.llamarpc.com"),
            ]),
            [A.id]: (0, r.t)([
              (0, c.d)(
                "https://eth-mainnet.g.alchemy.com/v2/vlQBuMg8fWcrBr7BTOT7bXn4kv91RbXz"
              ),
              (0, c.d)("https://eth.llamarpc.com"),
            ]),
          },
        }),
        D = (0, o._)({
          chains: [y, A],
          transports: {
            [y.id]: (0, c.d)("https://rpc.scroll.io/"),
            [A.id]: (0, c.d)("https://rpc.scroll.io/"),
          },
        }),
        S = (0, l.v)({ chain: i.R, transport: (0, c.d)() });
    },
    19152: function (e, n, t) {
      t.d(n, {
        U: function () {
          return c;
        },
      });
      let c = {
        prelaunchPoints: "0xaBEEcB1d3414550B30694bB37ac24CAaD0b82aE9",
        prelaunchPointsYieldNest: "0xa67C60AE18BE09F074a6c733a1cc06B63Ae53589",
        nftAficionado: "0x05d16459e6455931fd2b0893ae66d74d9eff984a",
        canvasBadge: "0x826BD204a329f15a2D5bcDaab83F00056FD4674E",
        tokens: {
          ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          weETH: "0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee",
          ezETH: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
          rsETH: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
          rswETH: "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
          uniETH: "0xF1376bceF0f78459C0Ed0ba5ddce976F1ddF51F4",
          pufETH: "0xD9A442856C234a39a81a089C06451EBAa4306a72",
          weETHs: "0x917ceE801a67f933F2e6b33fC0cD1ED2d5909D88",
          ynETH: "0x09db87A538BD693E9d08544577d5cCfAA6373A48",
          lpETH: "0xa684EAf215ad323452e2B2bF6F817d4aa5C116ab",
        },
        prelaunchPointsScroll: "0x640befeAd1A7ce841ef878058A7003EC260ebAE8",
        tokensScroll: {
          ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          WETH: "0x5300000000000000000000000000000000000004",
          weETH: "0x01f0a31698C4d065659b9bdC21B3610292a1c506",
          wrsETH: "0xa25b25548B4C98B0c7d3d27dcA5D5ca743d68b7F",
          pufETH: "0xc4d46E8402F476F269c379677C99F18E22Ea030e",
          STONE: "0x80137510979822322193fc997d400d5a6c747bf7",
        },
        tokensBtc: {
          WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          swBTC: "0x8DB2350D78aBc13f5673A411D4700BCF87864dDE",
          LBTC: "0x8236a87084f8B84306f72007F36F2618A5634494",
          pumpBTC: "0xF469fBD2abcd6B9de8E169d128226C0Fc90a012e",
          eBTC: "0x657e8C867D8B37dCC18fA4Caead9C45EB088C642",
          solvBTC: "0x7A56E1C57C7475CCf742a1832B028F0456652F97",
          solvBTCBBN: "0xd9D920AA40f578ab794426F5C90F6C731D159DEf",
        },
        prelaunchPointsBtc: "0x497Fb40D610C29E66d06F3B18Cd9966053abB49A",
      };
    },
    53036: function (e, n, t) {
      t.d(n, {
        $r: function () {
          return B;
        },
        As: function () {
          return p;
        },
        B9: function () {
          return C;
        },
        Jb: function () {
          return i;
        },
        SM: function () {
          return m;
        },
        Tl: function () {
          return a;
        },
        jY: function () {
          return f;
        },
        mX: function () {
          return l;
        },
      });
      var c,
        o,
        a,
        i,
        r = t(85020),
        s = t(19152);
      let E = "/icons/crypto/",
        l = [
          {
            id: 0,
            symbol: "ETH",
            name: "Native ETH",
            icon: "".concat(E, "ETH.svg"),
          },
          {
            id: 1,
            symbol: "WETH",
            name: "Wrapped ETH",
            icon: "".concat(E, "WETH.svg"),
          },
          {
            id: 2,
            symbol: "weETH",
            name: "Wrapped Ether.fi Restaked ETH",
            icon: "".concat(E, "eETH.svg"),
          },
          {
            id: 3,
            symbol: "ezETH",
            name: "Renzo Restaked ETH",
            icon: "".concat(E, "ezETH.svg"),
          },
          {
            id: 4,
            symbol: "pufETH",
            name: "Puffer Restaked ETH",
            icon: "".concat(E, "pufETH.svg"),
          },
          {
            id: 5,
            symbol: "rsETH",
            name: "Kelp DAO Restaked ETH",
            icon: "".concat(E, "rsETH.svg"),
          },
          {
            id: 6,
            symbol: "rswETH",
            name: "Restaked Swell ETH",
            icon: "".concat(E, "rswETH.svg"),
          },
          {
            id: 7,
            symbol: "uniETH",
            name: "Bedrock uniETH",
            icon: "".concat(E, "uniETH.svg"),
          },
          {
            id: 8,
            symbol: "ynETH",
            name: "Yieldnest Restaked ETH",
            icon: "".concat(E, "ynETH.svg"),
          },
        ],
        T = [
          {
            id: 0,
            symbol: "WBTC",
            name: "Wrapped BTC",
            icon: "".concat(E, "WBTC.svg"),
          },
          {
            id: 1,
            symbol: "swBTC",
            name: "Swell Restaked BTC",
            icon: "".concat(E, "swBTC.png"),
          },
          {
            id: 2,
            symbol: "pumpBTC",
            name: "Babylon Pump BTC",
            icon: "".concat(E, "pumpBTC.svg"),
          },
          {
            id: 3,
            symbol: "eBTC",
            name: "Ether.fi BTC",
            icon: "".concat(E, "eBTC.svg"),
          },
          {
            id: 3,
            symbol: "LBTC",
            name: "Lombard Staked BTC",
            icon: "".concat(E, "LBTC.svg"),
          },
          {
            id: 4,
            symbol: "solvBTC",
            name: "Solv BTC",
            icon: "".concat(E, "solvBTC.svg"),
          },
          {
            id: 5,
            symbol: "solvBTCBBN",
            name: "Solv BTC Babylon",
            icon: "".concat(E, "solvBTCBBN.svg"),
          },
        ],
        d = [
          {
            id: 0,
            symbol: "ETH",
            name: "Native ETH",
            icon: "".concat(E, "ETH.svg"),
          },
          {
            id: 1,
            symbol: "WETH",
            name: "Wrapped ETH",
            icon: "".concat(E, "WETH.svg"),
          },
          {
            id: 2,
            symbol: "weETH",
            name: "Wrapped Ether.fi Restaked ETH",
            icon: "".concat(E, "eETH.svg"),
          },
          {
            id: 3,
            symbol: "pufETH",
            name: "Puffer Restaked ETH",
            icon: "".concat(E, "pufETH.svg"),
          },
          {
            id: 4,
            symbol: "wrsETH",
            name: "Kelp DAO Restaked ETH",
            icon: "".concat(E, "wrsETH.svg"),
          },
          {
            id: 5,
            symbol: "STONE",
            name: "StakeStone ETH",
            icon: "".concat(E, "stoneETH.svg"),
          },
        ],
        u = (e) => e === r.gT.MAINNET_CHAIN_ID;
      function m(e, n) {
        return u(e) ? (n ? T : l) : d;
      }
      ((c = a || (a = {}))[(c.ETH = 0)] = "ETH"),
        (c[(c.WETH = 1)] = "WETH"),
        (c[(c.weETH = 2)] = "weETH"),
        (c[(c.ezETH = 3)] = "ezETH"),
        (c[(c.rsETH = 4)] = "rsETH"),
        (c[(c.rswETH = 5)] = "rswETH"),
        (c[(c.uniETH = 6)] = "uniETH"),
        (c[(c.pufETH = 7)] = "pufETH"),
        (c[(c.ynETH = 8)] = "ynETH"),
        (c[(c.wrsETH = 9)] = "wrsETH"),
        (c[(c.STONE = 10)] = "STONE"),
        (c[(c.WBTC = 11)] = "WBTC"),
        (c[(c.swBTC = 12)] = "swBTC"),
        (c[(c.pumpBTC = 13)] = "pumpBTC"),
        (c[(c.eBTC = 14)] = "eBTC"),
        (c[(c.LBTC = 15)] = "LBTC"),
        (c[(c.solvBTC = 16)] = "solvBTC"),
        (c[(c.solvBTCBBN = 17)] = "solvBTCBBN");
      let f = {
        0: { symbol: "ETH", name: "Native ETH", icon: "".concat(E, "ETH.svg") },
        1: {
          symbol: "WETH",
          name: "Wrapped ETH",
          icon: "".concat(E, "WETH.svg"),
        },
        2: {
          symbol: "weETH",
          name: "Wrapped Ether.fi Restaked ETH",
          icon: "".concat(E, "eETH.svg"),
        },
        3: {
          symbol: "ezETH",
          name: "Renzo Restaked ETH",
          icon: "".concat(E, "ezETH.svg"),
        },
        4: {
          symbol: "rsETH",
          name: "Kelp DAO Restaked ETH",
          icon: "".concat(E, "rsETH.svg"),
        },
        5: {
          symbol: "rswETH",
          name: "Restaked Swell ETH",
          icon: "".concat(E, "rswETH.svg"),
        },
        6: {
          symbol: "uniETH",
          name: "Bedrock uniETH",
          icon: "".concat(E, "uniETH.svg"),
        },
        7: {
          symbol: "pufETH",
          name: "Puffer Restaked ETH",
          icon: "".concat(E, "pufETH.svg"),
        },
        8: {
          symbol: "ynETH",
          name: "Yieldnest Restaked ETH",
          icon: "".concat(E, "ynETH.svg"),
        },
        9: {
          symbol: "wrsETH",
          name: "Kelp DAO Restaked ETH",
          icon: "".concat(E, "wrsETH.svg"),
        },
        10: {
          symbol: "STONE",
          name: "StakeStone ETH",
          icon: "".concat(E, "stoneETH.svg"),
        },
        11: {
          symbol: "WBTC",
          name: "Wrapped BTC",
          icon: "".concat(E, "WBTC.svg"),
        },
        12: {
          symbol: "swBTC",
          name: "Swell Restaked BTC",
          icon: "".concat(E, "swBTC.png"),
        },
        13: {
          symbol: "pumpBTC",
          name: "Babylon PumpBTC",
          icon: "".concat(E, "pumpBTC.svg"),
        },
        14: {
          symbol: "eBTC",
          name: "Ether.fi BTC",
          icon: "".concat(E, "eBTC.svg"),
        },
        15: {
          symbol: "LBTC",
          name: "Lombard Staked BTC",
          icon: "".concat(E, "LBTC.svg"),
        },
        16: {
          symbol: "solvBTC",
          name: "Solv BTC",
          icon: "".concat(E, "solvBTC.svg"),
        },
        17: {
          symbol: "solvBTCBBN",
          name: "Solv BTC Babylon",
          icon: "".concat(E, "solvBTCBBN.svg"),
        },
      };
      ((o = i || (i = {}))[(o.Mainnet = 0)] = "Mainnet"),
        (o[(o.BTC = 1)] = "BTC"),
        (o[(o.Scroll = 2)] = "Scroll");
      let C = (e, n) => (u(e) && !n ? 0 : u(e) && n ? 1 : 2),
        p = (e) => (1 == e ? 8 : 18),
        B = (e) => (0 === e ? s.U.tokens.WETH : s.U.tokensScroll.WETH);
    },
    58054: function (e, n, t) {
      var c = t(16463);
      n.Z = function () {
        let e = (0, c.usePathname)();
        return {
          isBTC: e.includes("btc"),
          isETH: e.includes("eth") || e.includes("epoch2"),
          isScroll: e.includes("scroll"),
        };
      };
    },
    46053: function (e, n, t) {
      t.d(n, {
        Hh: function () {
          return E;
        },
        a9: function () {
          return r;
        },
        eU: function () {
          return s;
        },
        nj: function () {
          return i;
        },
      });
      var c = t(55067),
        o = t(99441);
      let { persistAtom: a } = (0, t(928).J)(),
        i = (0, o.cn)({ key: "Settings Atom", default: { epoch: c.o.FIRST } }),
        r = (0, o.cn)({ key: "Stats Timestamp Atom", default: null }),
        s = (0, o.cn)({ key: "Deposit Update Atom", default: null }),
        E = (0, o.cn)({
          key: "Deposit Check Atom",
          default: !1,
          effects_UNSTABLE: [a],
        });
    },
    55067: function (e, n, t) {
      var c, o;
      t.d(n, {
        o: function () {
          return c;
        },
      }),
        ((o = c || (c = {}))[(o.FIRST = 1)] = "FIRST"),
        (o[(o.SECOND = 2)] = "SECOND");
    },
    16303: function (e, n) {
      let t = "/api",
        c = "https://api-points.loopfi.xyz";
      n.Z = {
        API_URL: c,
        GENERATE_REFERRAL_CODE: "".concat(t, "/referrals"),
        VALIDATE_REFERRAL_CODE: "".concat(t, "/referrals"),
        HAS_REFERRAL_CODE: "".concat(t, "/has-code"),
        GET_REFERRAL_CODE: "".concat(t, "/get-code"),
        ACTIVATE_NFT: "".concat(t, "/activate-nft"),
        ACTIVATE_CANVAS: "".concat(t, "/activate-canvas"),
        LEADERBOARD: "".concat(t, "/leaderboard"),
        STATS: "".concat(t),
        MARKET_CAP_PRICE: "".concat(t, "/marketcap"),
        ZERO_X_PRICE: "".concat(t, "/zero-x-price"),
        KYBER_QUOTE: "".concat(t, "/kyber-quote"),
        SERVER: {
          GENERATE_REFERRAL_CODE: "".concat(c, "/referrals/generate-code"),
          VALIDATE_REFERRAL_CODE: "".concat(c, "/referrals/validate-code"),
          HAS_REFERRAL_CODE: "".concat(c, "/referrals/has-code"),
          GET_REFERRAL_CODE: "".concat(c, "/referrals/get-code"),
          ACTIVATE_NFT: "".concat(c, "/nftbonus/activate-nft"),
          ACTIVATE_CANVAS: "".concat(c, "/nftbonus/activate-canvas"),
          LEADERBOARD: "".concat(c, "/leaderboard"),
          STATS: "".concat(c, "/stats"),
          MARKET_CAP_PRICE: "".concat(c, "/marketcap"),
        },
      };
    },
    67365: function (e, n, t) {
      t.d(n, {
        BF: function () {
          return H;
        },
        D4: function () {
          return y;
        },
        DR: function () {
          return u;
        },
        GA: function () {
          return g;
        },
        Gt: function () {
          return R;
        },
        T4: function () {
          return B;
        },
        _6: function () {
          return C;
        },
        gw: function () {
          return v;
        },
        jW: function () {
          return m;
        },
        jm: function () {
          return d;
        },
        kx: function () {
          return A;
        },
        sz: function () {
          return b;
        },
      });
      var c = t(60954),
        o = t(53036),
        a = t(51903),
        i = t(57603),
        r = t(81744),
        s = t.n(r),
        E = t(85053),
        l = t(42921),
        T = t(17439);
      let d = async (e, n, t) => {
          try {
            await navigator.clipboard.writeText(e),
              (0, c.CF)({
                title: "Success",
                description: n || "You've copied the address.",
                type: "success",
              });
          } catch (e) {
            console.error("Unable ".concat(e)),
              (0, c.CF)({
                title: "Error",
                description: t || "Failed to copy the address.",
                type: "error",
              });
          }
        },
        u = (e) => (0, a.U)(e, Date.now()),
        m = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
          if ("0" === e.toString()) return "0";
          if ("" == e.toString()) return "";
          let t = new i.Z(e).toDecimalPlaces(n, i.Z.ROUND_DOWN).toString();
          return "0" === t ? "≈0" : f(t, e);
        },
        f = (e, n) => {
          if (isNaN(Number(e))) return n;
          if (e.includes(".")) {
            let n = e.split(".");
            if (n.length > 0 && !Number(n[1])) return n[1];
          }
          return e;
        },
        C = (e, n) => e.toLocaleString("en-US", { maximumFractionDigits: n }),
        p = {
          style: "currency",
          currency: "USD",
          notation: "compact",
          roundingMode: "floor",
        },
        B = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            n = 2,
            t = new Intl.NumberFormat("en-US", {
              ...p,
              minimumFractionDigits: n,
            }).format(e),
            [c, o] = t.split(".")[1],
            a = !0;
          return ("0" === o && ((n = 1), (a = !1)),
          "0" === c && ((n = 0), (a = !1)),
          a)
            ? t
            : new Intl.NumberFormat("en-US", {
                ...p,
                minimumFractionDigits: n,
              }).format(e);
        },
        H = (e) => (e ? parseFloat((0, E.d)(e)) : 0),
        b = (e) => (e ? parseFloat((0, l.b)(e, 8)) : 0),
        A = (e) => {
          let n = !1;
          for (let [t, c] of s()(e))
            if (c > BigInt(0)) {
              n = !0;
              break;
            }
          return n;
        };
      function v(e) {
        return new Promise((n) => setTimeout(n, e));
      }
      let y = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
          return (0, T.v)(e, n);
        },
        g = (e) => H(BigInt(e)).toString(),
        R = (e, n) => m((0, l.b)(e, (0, o.As)(n)), 6);
    },
  },
]);
