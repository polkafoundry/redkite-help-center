/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import VueRouter from "vue-router";
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  window.addEventListener("load", () => {
    
    // if (!window.location.pathname.includes("about")) {
      if (["", "/"].includes(window.location.pathname)) {
      router.push("/about/");
    }
    const removeClassOpen = () => {
      const elemOpened = document.querySelector(
        ".sidebar > .sidebar-links > li > section > a.sidebar-heading.open"
      );
      if (elemOpened) {
        elemOpened.classList.remove("open");
      }
    };
    const elemSidebarActive = document.querySelector(
      ".sidebar > .sidebar-links > li > a.sidebar-link"
    );

    if (elemSidebarActive) {
      elemSidebarActive.addEventListener("click", removeClassOpen);
    }

    const homelink = document.querySelector("a.home-link");
    if (homelink) {
      homelink.addEventListener("click", () => {
        if (!window.location.pathname.includes("about")) {
          removeClassOpen();
          router.push("/about/");
        }
      });
    }
  });
};
