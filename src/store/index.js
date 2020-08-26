import Vue from "vue";
import Vuex from "vuex";
import contactForm from "./modules/contact-form";
Vue.use(Vuex);

export default new Vuex.Store({
	modules: { contactForm },
});
