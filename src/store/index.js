import Vue from "vue";
import Vuex from "vuex";
import system from "./modules/system";

import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    system
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
