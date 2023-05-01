import Colors from "./ColorsEnum";
import IImage from "./IImage";

interface IHeatingItems {
  icon: Colors;
  text: string;
}

interface IHeating {
  title: string;
  items: Array<IHeatingItems>;
  img: IImage;
}

export default IHeating;

export let heatings: Array<IHeating> = [
  {
    title: "Конвектор/тепловая пушка",
    img: {
      src: "heating-analog-1",
      alt: "Аналог буржуйки VITA",
    },
    items: [
      {
        icon: Colors.Red,
        text: "Мощность — до 2,5&nbsp;кВт тепла.",
      },
      {
        icon: Colors.Red,
        text: "Большой расход электричества — 1150&nbsp;кВт&nbsp;в&nbsp;месяц.",
      },
      {
        icon: Colors.Red,
        text: "Часто ломаются, трудно починить самостоятельно.",
      },
      {
        icon: Colors.Red,
        text: "Не мобильна, не работает без электричества.",
      },
      {
        icon: Colors.Red,
        text: "Опасно использовать дольше 4&nbsp;часов подряд.",
      },
    ],
  },
  {
    title: "Отопитель на дизеле",
    img: {
      src: "heating-analog-2",
      alt: "Аналог буржуйки VITA",
    },
    items: [
      {
        icon: Colors.Red,
        text: "Мощность — до 5&nbsp;кВт&nbsp;тепла.",
      },
      {
        icon: Colors.Red,
        text: "Большой расход топлива — 0,9&nbsp;л/час.",
      },
      {
        icon: Colors.Red,
        text: "Часто ломаются, трудно починить самостоятельно.",
      },
      {
        icon: Colors.Green,
        text: "Мобильная конструкция. Имеются разные&nbsp;размеры.",
      },
      {
        icon: Colors.Red,
        text: "Создаёт много шума и неприятный&nbsp;запах.",
      },
    ],
  },
  {
    title: "Буржуйка «VITA»",
    img: {
      src: "heating-vita",
      alt: "Буржуйка VITA в сравнении с аналогами",
    },
    items: [
      {
        icon: Colors.Green,
        text: "Мощность — до 15&nbsp;кВт&nbsp;тепла.",
      },
      {
        icon: Colors.Green,
        text: "Работает на любом&nbsp;топливе.",
      },
      {
        icon: Colors.Green,
        text: "Простая конструкция, в которой просто нечему&nbsp;ломаться.",
      },
      {
        icon: Colors.Green,
        text: "Печка может работать где&nbsp;угодно.",
      },
      {
        icon: Colors.Green,
        text: "Легко разбирать и&nbsp;переносить.",
      },
      {
        icon: Colors.Green,
        text: "Быстрая установка.",
      },
    ],
  },
];
