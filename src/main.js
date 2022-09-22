import { createApp } from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import ApiEndpoints from "./plugins/apiEndpoints.js";
import VueAwesomePaginate from "vue-awesome-paginate";
import globalMixin from "./mixins/globalMixin.js";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(ApiEndpoints)
  .use(VueAwesomePaginate)
  .mixin(globalMixin)
  .mount("#app");
