export const storePHP = {
  state: () => ({
    webpSupport: webp,
    year: year,
    modalSuccess: "",
    formHelicon: hideForm.innerHTML,
  }),
  mutations: {
    openModalSuccessManager(state) {
      e.preventDefault();
      state.modalSuccess =
        "Наш менеджер уже получил ваше обращение. <br> Ожидайте звонка в течение 10 минут с <span>7(495)255-37-10</span>";
    },
  },
  getters: {
    getYear(state) {
      return state.year;
    },
    getWebp(state) {
      return state.webpSupport;
    },
    getMetric(state) {
      return state.formHelicon;
    },
  },
};
