export const storePech = {
  state: () => ({
    pechModels: [
      {
        id: goods.vita_standart,
        price: goodsJson[goods.vita_standart].price,
        oldPrice: goodsJson[goods.vita_standart].oldPrice,
        name: "стандарт",
        active: true,
        img: { src: "vita-standart", alt: "буржуйка VITA стандарт" },
      },
      {
        price: goodsJson[goods.vita_mini].price,
        oldPrice: goodsJson[goods.vita_mini].oldPrice,
        id: goods.vita_mini,
        name: "мини",
        active: false,
        img: { src: "vita-mini", alt: "буржуйка VITA мини" },
      },
    ],

    dops: [
      {
        id: goods.convector_standart,
        price: goodsJson[goods.convector_standart].price,
        oldPrice: goodsJson[goods.convector_standart].oldPrice,
        name: "Конвектор",
        active: false,
        parent: true,
        img: {
          src: "convector",
          alt: "Конвектор для буржуйки VITA",
        },
      },

      {
        id: goods.door_standart,
        price: goodsJson[goods.door_standart].price,
        oldPrice: goodsJson[goods.door_standart].oldPrice,
        name: "Стеклянная дверца",
        active: false,
        parent: true,
        img: {
          src: "door",
          alt: "Стеклянная дверца для буржуйки VITA",
        },
        door: true,
      },

      {
        id: goods.tubing,
        price: goodsJson[goods.tubing].price,
        oldPrice: goodsJson[goods.tubing].oldPrice,
        name: "Комплект труб",
        active: false,
        img: {
          src: "tubing",
          alt: "Комплект труб для буржуйки VITA",
        },
      },

      {
        id: goods.coherga_standart,
        price: goodsJson[goods.coherga_standart].price,
        oldPrice: goodsJson[goods.coherga_standart].oldPrice,
        name: "Кочерга",
        active: false,
        parent: true,
        img: {
          src: "coherga",
          alt: "Кочерга для буржуйки VITA",
        },
      },

      {
        id: goods.list,
        price: goodsJson[goods.list].price,
        oldPrice: goodsJson[goods.list].oldPrice,
        name: "Притопочный лист",
        active: false,
        img: {
          src: "list",
          alt: "Притопочный лист для буржуйки VITA",
        },
      },
    ],
  }),
  mutations: {
    changePechModel(state, id) {
      state.pechModels.forEach((element) => {
        element.id == id ? (element.active = true) : (element.active = false);
      });

      state.dops
        .filter((el) => el.parent)
        .forEach((dop) => {
          switch (dop.id) {
            case goods.convector_standart:
              dop.id = goods.convector_mini;
              dop.price = goodsJson[goods.convector_mini].price;
              dop.oldPrice = goodsJson[goods.convector_mini].oldPrice;
              break;

            case goods.convector_mini:
              dop.id = goods.convector_standart;
              dop.price = goodsJson[goods.convector_standart].price;
              dop.oldPrice = goodsJson[goods.convector_standart].oldPrice;
              break;

            case goods.door_standart:
              dop.id = goods.door_mini;
              dop.price = goodsJson[goods.door_mini].price;
              dop.oldPrice = goodsJson[goods.door_mini].oldPrice;
              break;

            case goods.door_mini:
              dop.id = goods.door_standart;
              dop.price = goodsJson[goods.door_standart].price;
              dop.oldPrice = goodsJson[goods.door_standart].oldPrice;
              break;

            case goods.coherga_standart:
              dop.id = goods.coherga_mini;
              dop.price = goodsJson[goods.coherga_mini].price;
              dop.oldPrice = goodsJson[goods.coherga_mini].oldPrice;
              break;

            case goods.coherga_mini:
              dop.id = goods.coherga_standart;
              dop.price = goodsJson[goods.coherga_standart].price;
              dop.oldPrice = goodsJson[goods.coherga_standart].oldPrice;
              break;
          }
        });
    },
  },
  getters: {
    getPechModels(state) {
      return state.pechModels;
    },
    getPechModelsActive(state) {
      return state.pechModels.find((el) => el.active);
    },
    getPechModelsIdActive(state) {
      return state.pechModels.find((el) => el.active).id;
    },
    getDops(state) {
      return state.dops;
    },
    getDopsDoorActive(state) {
      return state.dops.find((el) => el.door).active;
    },
    getPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.active ? sum + dop.price : sum;
      }, state.pechModels.find((el) => el.active).price);
    },
    getOldPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.active ? sum + dop.oldPrice : sum;
      }, state.pechModels.find((el) => el.active).oldPrice);
    },
  },
};
