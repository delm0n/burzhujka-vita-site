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
        id: goods.convector_mini,
        price: goodsJson[goods.convector_mini].price,
        oldPrice: goodsJson[goods.convector_mini].oldPrice,
        name: "Конвекторные экраны",
        active: false,
        parent: true,
        img: {
          src: "convector",
          alt: "Конвекторные экраны для буржуйки VITA",
        },
        convector: true,

        together: {
          decr: `Расположенные по бокам конвекторные экраны пропускают комнатный воздух, согревают его и направляют обратно в помещение. Всего за полчаса комната, баня или гараж прогреваются до комфортной температуры.`,
          decrList: [
            {
              bold: "Количество конвекторов",
              par: "18",
            },
            {
              bold: "Площадь нагрева одного конвектора",
              par: "267 см²",
            },
            {
              bold: "Материал",
              par: "сталь Ст3",
            },
            {
              bold: "Толщина материала",
              par: "1 мм",
            },
            {
              bold: "Покрытие",
              par: "термостойкая краска ",
            },
          ],
          hover: false,
        },
      },

      {
        id: goods.door_mini,
        price: goodsJson[goods.door_mini].price,
        oldPrice: goodsJson[goods.door_mini].oldPrice,
        name: "Стеклянная дверца",
        active: false,
        parent: true,
        img: {
          src: "door",
          alt: "Стеклянная дверца для буржуйки VITA",
        },
        door: true,

        together: {
          decr: "Версия дверцы со стеклянной вставкой, которая позволяет следить за нагревом и любоваться пламенем.",
          decrList: [
            {
              bold: "Материал",
              par: "сталь Ст3",
            },
            {
              bold: "Толщина материала",
              par: "1 мм",
            },
            {
              bold: "Размер",
              par: "183x183 мм",
            },
          ],
          hover: false,
        },
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

        together: {
          decrList: [
            {
              bold: "Диаметр",
              par: "110 мм",
            },
            {
              bold: "Материал",
              par: "сталь AISI 304",
            },
            {
              bold: "Толщина",
              par: "0,8 мм",
            },
          ],
          decr: "Трубы из стали — легче и долговечнее чугунных. Благодаря небольшому весу, их удобнее закреплять в месте расположения дымохода. Комплектация предусматривает различные варианты соединения труб.",
          decrBottom: "В комплекте 2 трубы длиной 100 см, 2 отвода и зонтик.",
          img: "together-tube",
          hover: false,
        },
      },

      {
        id: goods.tubing_smoke,
        price: goodsJson[goods.tubing_smoke].price,
        oldPrice: goodsJson[goods.tubing_smoke].oldPrice,
        name: "Труба дымоходная",
        active: false,
        img: {
          src: "tubing_smoke-2",
          alt: "Трубы дымоходные для буржуйки VITA",
        },

        together: {
          decrList: [
            {
              bold: "Диаметр",
              par: "110 мм",
            },
            {
              bold: "Длина",
              par: "100 см",
            },
            {
              bold: "Материал",
              par: "сталь AISI 304",
            },
            {
              bold: "Толщина",
              par: "0,8 мм",
            },
          ],
          decr: "Труба из стали — легче и долговечнее чугунных. Она легко масштабируется и крепится к другой трубе. Кроме того, благодаря небольшому весу её удобнее закреплять и фиксировать на месте.",
          img: "together-tubing_smoke-2",
          hover: false,
          modalTitle: "Труба для дымохода",
        },

        sortLast: true,
      },

      {
        id: goods.ugol_smoke,
        price: goodsJson[goods.ugol_smoke].price,
        oldPrice: goodsJson[goods.ugol_smoke].oldPrice,
        name: "Угол дымохода",
        active: false,
        img: {
          src: "ugol_smoke-2",
          alt: "Углы дымохода для буржуйки VITA",
        },

        together: {
          decrList: [
            {
              bold: "Диаметр",
              par: "110 мм",
            },
            {
              bold: "Угол сгиба*",
              par: "45°",
            },
            {
              bold: "Материал",
              par: "сталь AISI 304",
            },
            {
              bold: "Толщина",
              par: "0,8 мм",
            },
          ],
          decr: "Отвод — это отдельный элемент канала, который необходим для изменения направления дымохода.",
          img: "together-ugol_smoke-2",
          hover: false,
          decrBottom: "* Угол отклонения от трубы",
          modalTitle: "Отвод для дымохода",
        },

        sortLast: true,
      },

      {
        id: goods.umbrella,
        price: goodsJson[goods.umbrella].price,
        oldPrice: goodsJson[goods.umbrella].oldPrice,
        name: "Зонтик для дымохода",
        active: false,
        img: {
          src: "umbrella",
          alt: "Зонт для буржуйки VITA",
        },

        together: {
          decrList: [
            {
              bold: "Материал",
              par: "сталь AISI 304",
            },
            {
              bold: "Толщина",
              par: "0,8 мм",
            },
            {
              bold: "Диаметр",
              par: "110 мм",
            },
          ],
          decr: "Зонтик из нержавеющей стали используется для защиты трубы от осадков. Он также значительно уменьшает воздействие ветра, которое способно нарушить тягу. ",
          img: "together-umbrella",
          hover: false,
        },

        sortLast: true,
      },

      {
        id: goods.coherga_mini,
        price: goodsJson[goods.coherga_mini].price,
        oldPrice: goodsJson[goods.coherga_mini].oldPrice,
        name: "Кочерга",
        active: false,
        parent: true,
        img: {
          src: "coherga",
          alt: "Кочерга для буржуйки VITA",
        },

        together: {
          decrList: [
            {
              bold: "Материал",
              par: "сталь Ст3",
            },
            {
              bold: "Толщина материала ",
              par: "4 мм",
            },
            {
              bold: "Покрытие",
              par: "термостойкая краска CERTA 900",
            },
          ],
          decr: "Полезное дополнение для печи-буржуйки, мангала или камина. Кочерга имеет зубья со всех сторон, благодаря которым уголь дробится гораздо эффективнее. Чистите колосник и убирайте продукты горения ещё проще! Изделие выполнено из толстой стали, поэтому прослужит вам целую вечность!",
          img: "together-coherga",
          hover: false,
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

        together: {
          decrList: [
            {
              bold: "Материал",
              par: "сталь Ст3",
            },
            {
              bold: "Толщина материала",
              par: "1 мм",
            },
            {
              bold: "Размер",
              par: "500x400 мм",
            },
          ],
          decr: "Стальной округлый лист для защиты напольного покрытия от искр, углей и сажи. Попадая на него, искры гаснут, а угли не пачкают пол, поэтому снижается риск возгорания и сохраняется чистота&nbsp;в&nbsp;помещении.",
          img: "together-list",
          hover: false,
        },
      },
      {
        id: goods.woodcarry,
        price: goodsJson[goods.woodcarry].price,
        oldPrice: goodsJson[goods.woodcarry].oldPrice,
        name: "Дровница-переноска",
        active: false,
        img: {
          src: "woodcarry",
          alt: "Дровница-переноска для буржуйки VITA",
        },

        together: {
          decrList: [
            {
              bold: "Материал",
              par: "сталь Ст3",
            },
            {
              bold: "Толщина материала",
              par: "4 мм",
            },
            {
              bold: "Размер",
              par: "470x300 мм",
            },
          ],
          decr: "Переноска с округлой широкой ручкой поможет перенести дрова ещё быстрее и удобнее! Металлическая складная конструкция не сломается и не займёт много места. Дровница просто необходима при переноске дров с улицы— поберегите спину, суставы и руки!",
          img: "together-woodcarry",
          hover: false,
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

    //допы без конвекторов
    getDopsTest(state, getters) {
      return getters.isTest
        ? state.dops.filter((el) => !el.convector)
        : state.dops;
    },
  },
};
