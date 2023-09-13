import { createStore } from "vuex";
import { storePHP } from "./storePHP.js";
import { storePech } from "./storePech.js";

export default createStore({
  modules: {
    storePHP,
    storePech,
  },
  state() {
    return {
      // modalSuccess: "",
      modalFeedback: false,
      review: false,

      user: {
        name: "",
        phone: "",
        rassrochka: false,
      },
    };
  },
  mutations: {
    openModalSuccess(state, text) {
      state.modalSuccess = text;
    },

    // openModalSuccessManager(state) {
    //   state.modalSuccess = "Наш менеджер уже получил ваше обращение. <br> Ожидайте звонка в течение 10 минут с <span>7(495)255-37-10</span>";
    // },

    changeUserRassrochka(state, value) {
      state.user.rassrochka = value;
    },

    openModalFeedback(state) {
      state.modalFeedback = true;
    },

    writeReview(state) {
      state.review = true;
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getUserRassrochka(state) {
      return state.user.rassrochka;
    },
    getModalFeedback(state) {
      return state.modalFeedback;
    },
    getReview(state) {
      return state.review;
    },
    getModalSuccess(state) {
      return state.modalSuccess;
    },

    getLastDayOfMonth(state) {
      return "30 сентября";
    },
  },
});
