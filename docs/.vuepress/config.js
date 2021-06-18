const ogprefix = "og: http://ogp.me/ns#";
const title = "Redkite FAQs";
const description = "Redkite FAQs";

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
      title: "Redkite FAQs",
      description: "Redkite FAQs",
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
            title: "Get Started with Red Kite",
            path: "/get-started/",
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: "KYC",
            path: "/kyc/",
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: "Staking",
            path: "/staking/",
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: "Whitelist",
            path: "/whitelist/",
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: "AlLocation Result & Buying",
            path: "/allocation-result-and-buying/",
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: "Claim",
            path: "/claim/",
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: "Others",
            path: "/others/",
            collapsable: false,
            sidebarDepth: 1,
          },
        ],
      },
    },
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
