import Vue from "vue";

Vue.directive("click-outside", {
  bind: function (el: any, binding, vnode) {
    el.clickOutsideEvent = function (event: { target: Node | null }) {
      if (!(el == event.target || el.contains(event.target))) {
        // @ts-ignore
        vnode.context && vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function (el: any) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});
