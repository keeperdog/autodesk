import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    // Pay attention to the name here, it is best not to write it to hard code, directly use the name passed by the main application
    base: window.__POWERED_BY_QIANKUN__ ? `${props.name}` : "/",
    mode: "history",
    routes,
  });
  Vue.use(VueRouter);
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue2] vue app bootstraped");
}

function storeTest(props) {
  // Add a timer for the demonstration effect
  setTimeout(() => {
    props.setGlobalState &&
      props.setGlobalState({
        id: `${props.name}_sub_application`,
      });
  }, 3000);

  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value) => console.log(`[onGlobalStateChange - ${props.name}]:`, value),
      true
    );
}

export async function mount(props) {
  console.log("value from main-app===", props);
  storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
