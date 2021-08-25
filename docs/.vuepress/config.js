const ogprefix = "og: http://ogp.me/ns#";
const title = "Red Kite Help Center";
const description = "Red Kite Help Center";

module.exports = {
  // title: title,
  // description: description,
  head: [
    ["meta", { prefix: ogprefix, property: "og:title", content: title }],
    [
      "meta",
      { prefix: ogprefix, property: "og:description", content: description },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "icon", href: "/logo.png" }],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Red Kite Help Center",
      description: "Red Kite Help Center",
    },
    // "/vi/": {
    //   lang: "vi-VN",
    //   title: "Redkite FAQs",
    //   description: "Redkite FAQs",
    // },
  },
  themeConfig: {
    smoothScroll: true,
    logo: "/logo.png",
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    locales: {
      // "/vi/": {
      //   selectText: "Ngôn ngữ",
      //   label: "Vietnamese",
      //   ariaLabel: "Languages",
      //   editLinkText: "",
      //   serviceWorker: {
      //     updatePopup: {
      //       message: "New content is available.",
      //       buttonText: "Refresh",
      //     },
      //   },
      //   algolia: {},
      //   nav: false,
      //   sidebar: [
      //     {
      //       title: "Get Started with Red Kite",
      //       path: "/vi/get-started/",
      //       collapsable: false,
      //       sidebarDepth: 1,
      //     },
      //     {
      //       title: "KYC",
      //       path: "/vi/kyc/",
      //       collapsable: false,
      //       sidebarDepth: 1,
      //     },
      //     {
      //       title: "Staking",
      //       path: "/vi/staking/",
      //       collapsable: false,
      //       sidebarDepth: 1,
      //     },
      //     {
      //       title: "Whitelist",
      //       path: "/vi/whitelist/",
      //       collapsable: false,
      //       sidebarDepth: 1,
      //     },
      //     {
      //       title: "Allocation Result & Buying",
      //       path: "/vi/allocation-result-and-buying/",
      //       collapsable: false,
      //       sidebarDepth: 1,
      //     },
      //     {
      //       title: "Claim",
      //       path: "/vi/claim/",
      //       collapsable: false,
      //       sidebarDepth: 1,
      //     },
      //     {
      //       title: "Others",
      //       path: "/vi/others/",
      //       collapsable: false,
      //       sidebarDepth: 1,
      //     },
      //   ],
      // },
      "/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
        algolia: {},
        nav: false,
        sidebar: [
          {
            title: "Introduce",
            path: "/about/",
            prefix: "about/",
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: "Guides",
            path: "/guides/before-joining-idos",
            prefix: "guides/before-joining-idos/",
            collapsable: false,
            sidebarDepth: 3,
            children: [
              // ["/guides/definition", "Definitions"],
              ["/guides/before-joining-idos", "I. Before joining IDOs"],
              ["/guides/swap", "II. How to Swap Tokens"],
              ["/guides/claim", "III. How to Claim Tokens"],
              ["/guides/tier", "IV. Tier and Reputation"],
              ["/guides/myaccount", "V. My Account"],
              //["/guides/guide_staking", "VI. Staking"],
            ],
          },
          {
            title: "FAQs",
            path: "/faqs/get-started",
            prefix: "faqs/get-started/",
            collapsable: false,
            sidebarDepth: 2,
            children: [
              ["/faqs/get-started", "Get Started"],
              ["/faqs/kyc", "KYC"],
              ["/faqs/staking", "Staking"],
              ["/faqs/whitelist", "Whitelist"],
              [
                "/faqs/allocation-result-and-buying",
                "Allocation Result & Buying",
              ],
              ["/faqs/claim", "Claim"],
              ["/faqs/others", "Others"],
            ],
          },
        ],
        // sidebar: [
        //   // {
        //   //   title: "Get Started with Red Kite",
        //   //   path: "/get-started/",
        //   //   collapsable: false,
        //   //   sidebarDepth: 1,
        //   // },
        //   // {
        //   //   title: "KYC",
        //   //   path: "/kyc/",
        //   //   collapsable: false,
        //   //   sidebarDepth: 1,
        //   // },
        //   // {
        //   //   title: "Staking",
        //   //   path: "/staking/",
        //   //   collapsable: false,
        //   //   sidebarDepth: 1,
        //   // },
        //   // {
        //   //   title: "Whitelist",
        //   //   path: "/whitelist/",
        //   //   collapsable: false,
        //   //   sidebarDepth: 1,
        //   // },
        //   // {
        //   //   title: "Allocation Result & Buying",
        //   //   path: "/allocation-result-and-buying/",
        //   //   collapsable: false,
        //   //   sidebarDepth: 1,
        //   // },
        //   // {
        //   //   title: "Claim",
        //   //   path: "/claim/",
        //   //   collapsable: false,
        //   //   sidebarDepth: 1,
        //   // },
        //   // {
        //   //   title: "Others",
        //   //   path: "/others/",
        //   //   collapsable: false,
        //   //   sidebarDepth: 1,
        //   // },
        // ],
      },
    },
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
