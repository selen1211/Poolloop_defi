(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    86072: function (e, n, o) {
      Promise.resolve().then(o.bind(o, 2300));
    },
    85020: function (e, n, o) {
      "use strict";
      o.d(n, {
        et: function () {
          return E;
        },
        gT: function () {
          return c;
        },
        mg: function () {
          return T;
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
        T = { FIVE_MIN: 3e5, ONE_HOUR: 36e5 },
        E = 1718615215869;
    },
    2300: function (e, n, o) {
      "use strict";
      var c = o(57437),
        T = o(26735),
        E = o(53036),
        a = o(16463);
      n.default = function () {
        let { isConnected: e, chainId: n } = (0, T.m)();
        if (!e || !n) return (0, a.redirect)("/epoch2-eth");
        switch ((0, E.B9)(n)) {
          case E.Jb.Scroll:
            return (0, a.redirect)("/scroll");
          case E.Jb.Mainnet:
            return (0, a.redirect)("/epoch2-eth");
          default:
            return (0, a.redirect)("/btc");
        }
        return (0, c.jsx)("div", {});
      };
    },
    19152: function (e, n, o) {
      "use strict";
      o.d(n, {
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
    53036: function (e, n, o) {
      "use strict";
      o.d(n, {
        $r: function () {
          return b;
        },
        As: function () {
          return f;
        },
        B9: function () {
          return m;
        },
        Jb: function () {
          return a;
        },
        SM: function () {
          return l;
        },
        Tl: function () {
          return E;
        },
        jY: function () {
          return d;
        },
        mX: function () {
          return B;
        },
      });
      var c,
        T,
        E,
        a,
        t = o(85020),
        s = o(19152);
      let i = "/icons/crypto/",
        B = [
          {
            id: 0,
            symbol: "ETH",
            name: "Native ETH",
            icon: "".concat(i, "ETH.svg"),
          },
          {
            id: 1,
            symbol: "WETH",
            name: "Wrapped ETH",
            icon: "".concat(i, "WETH.svg"),
          },
          {
            id: 2,
            symbol: "weETH",
            name: "Wrapped Ether.fi Restaked ETH",
            icon: "".concat(i, "eETH.svg"),
          },
          {
            id: 3,
            symbol: "ezETH",
            name: "Renzo Restaked ETH",
            icon: "".concat(i, "ezETH.svg"),
          },
          {
            id: 4,
            symbol: "pufETH",
            name: "Puffer Restaked ETH",
            icon: "".concat(i, "pufETH.svg"),
          },
          {
            id: 5,
            symbol: "rsETH",
            name: "Kelp DAO Restaked ETH",
            icon: "".concat(i, "rsETH.svg"),
          },
          {
            id: 6,
            symbol: "rswETH",
            name: "Restaked Swell ETH",
            icon: "".concat(i, "rswETH.svg"),
          },
          {
            id: 7,
            symbol: "uniETH",
            name: "Bedrock uniETH",
            icon: "".concat(i, "uniETH.svg"),
          },
          {
            id: 8,
            symbol: "ynETH",
            name: "Yieldnest Restaked ETH",
            icon: "".concat(i, "ynETH.svg"),
          },
        ],
        r = [
          {
            id: 0,
            symbol: "WBTC",
            name: "Wrapped BTC",
            icon: "".concat(i, "WBTC.svg"),
          },
          {
            id: 1,
            symbol: "swBTC",
            name: "Swell Restaked BTC",
            icon: "".concat(i, "swBTC.png"),
          },
          {
            id: 2,
            symbol: "pumpBTC",
            name: "Babylon Pump BTC",
            icon: "".concat(i, "pumpBTC.svg"),
          },
          {
            id: 3,
            symbol: "eBTC",
            name: "Ether.fi BTC",
            icon: "".concat(i, "eBTC.svg"),
          },
          {
            id: 3,
            symbol: "LBTC",
            name: "Lombard Staked BTC",
            icon: "".concat(i, "LBTC.svg"),
          },
          {
            id: 4,
            symbol: "solvBTC",
            name: "Solv BTC",
            icon: "".concat(i, "solvBTC.svg"),
          },
          {
            id: 5,
            symbol: "solvBTCBBN",
            name: "Solv BTC Babylon",
            icon: "".concat(i, "solvBTCBBN.svg"),
          },
        ],
        H = [
          {
            id: 0,
            symbol: "ETH",
            name: "Native ETH",
            icon: "".concat(i, "ETH.svg"),
          },
          {
            id: 1,
            symbol: "WETH",
            name: "Wrapped ETH",
            icon: "".concat(i, "WETH.svg"),
          },
          {
            id: 2,
            symbol: "weETH",
            name: "Wrapped Ether.fi Restaked ETH",
            icon: "".concat(i, "eETH.svg"),
          },
          {
            id: 3,
            symbol: "pufETH",
            name: "Puffer Restaked ETH",
            icon: "".concat(i, "pufETH.svg"),
          },
          {
            id: 4,
            symbol: "wrsETH",
            name: "Kelp DAO Restaked ETH",
            icon: "".concat(i, "wrsETH.svg"),
          },
          {
            id: 5,
            symbol: "STONE",
            name: "StakeStone ETH",
            icon: "".concat(i, "stoneETH.svg"),
          },
        ],
        C = (e) => e === t.gT.MAINNET_CHAIN_ID;
      function l(e, n) {
        return C(e) ? (n ? r : B) : H;
      }
      ((c = E || (E = {}))[(c.ETH = 0)] = "ETH"),
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
      let d = {
        0: { symbol: "ETH", name: "Native ETH", icon: "".concat(i, "ETH.svg") },
        1: {
          symbol: "WETH",
          name: "Wrapped ETH",
          icon: "".concat(i, "WETH.svg"),
        },
        2: {
          symbol: "weETH",
          name: "Wrapped Ether.fi Restaked ETH",
          icon: "".concat(i, "eETH.svg"),
        },
        3: {
          symbol: "ezETH",
          name: "Renzo Restaked ETH",
          icon: "".concat(i, "ezETH.svg"),
        },
        4: {
          symbol: "rsETH",
          name: "Kelp DAO Restaked ETH",
          icon: "".concat(i, "rsETH.svg"),
        },
        5: {
          symbol: "rswETH",
          name: "Restaked Swell ETH",
          icon: "".concat(i, "rswETH.svg"),
        },
        6: {
          symbol: "uniETH",
          name: "Bedrock uniETH",
          icon: "".concat(i, "uniETH.svg"),
        },
        7: {
          symbol: "pufETH",
          name: "Puffer Restaked ETH",
          icon: "".concat(i, "pufETH.svg"),
        },
        8: {
          symbol: "ynETH",
          name: "Yieldnest Restaked ETH",
          icon: "".concat(i, "ynETH.svg"),
        },
        9: {
          symbol: "wrsETH",
          name: "Kelp DAO Restaked ETH",
          icon: "".concat(i, "wrsETH.svg"),
        },
        10: {
          symbol: "STONE",
          name: "StakeStone ETH",
          icon: "".concat(i, "stoneETH.svg"),
        },
        11: {
          symbol: "WBTC",
          name: "Wrapped BTC",
          icon: "".concat(i, "WBTC.svg"),
        },
        12: {
          symbol: "swBTC",
          name: "Swell Restaked BTC",
          icon: "".concat(i, "swBTC.png"),
        },
        13: {
          symbol: "pumpBTC",
          name: "Babylon PumpBTC",
          icon: "".concat(i, "pumpBTC.svg"),
        },
        14: {
          symbol: "eBTC",
          name: "Ether.fi BTC",
          icon: "".concat(i, "eBTC.svg"),
        },
        15: {
          symbol: "LBTC",
          name: "Lombard Staked BTC",
          icon: "".concat(i, "LBTC.svg"),
        },
        16: {
          symbol: "solvBTC",
          name: "Solv BTC",
          icon: "".concat(i, "solvBTC.svg"),
        },
        17: {
          symbol: "solvBTCBBN",
          name: "Solv BTC Babylon",
          icon: "".concat(i, "solvBTCBBN.svg"),
        },
      };
      ((T = a || (a = {}))[(T.Mainnet = 0)] = "Mainnet"),
        (T[(T.BTC = 1)] = "BTC"),
        (T[(T.Scroll = 2)] = "Scroll");
      let m = (e, n) => (C(e) && !n ? 0 : C(e) && n ? 1 : 2),
        f = (e) => (1 == e ? 8 : 18),
        b = (e) => (0 === e ? s.U.tokens.WETH : s.U.tokensScroll.WETH);
    },
  },
  function (e) {
    e.O(0, [5984, 2971, 7023, 1744], function () {
      return e((e.s = 86072));
    }),
      (_N_E = e.O());
  },
]);
