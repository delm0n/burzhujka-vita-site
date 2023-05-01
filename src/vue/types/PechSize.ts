import IImage from "./IImage";
import { PechType } from "./IPech";

interface ICharProfile {
  collect: string;
  appart: string;
  decr: string;
}

interface IPech {
  img: IImage;
  profile: ICharProfile; //габариты
  square: string; //отапливаемая площадь
  weight: string; //вес
  density: string; //толщина стали
  paint: string; //краска
  firewood: string;
}

type PechSize = {
  [key in PechType]: IPech;
};

export let characteristicSize: PechSize = {
  [PechType.Mini]: {
    img: { src: "vita-mini", alt: "буржуйка VITA мини" },
    profile: {
      collect: "54х38х38",
      appart: "42х40х40",
      decr: "Печь можно переносить вручную или возить любым удобным для вас способом: на тележке, санках, в багажнике автомобиля.",
    },
    square: "50&nbsp;м³",
    weight: "17,4&nbsp;кг",
    density: "3&nbsp;мм",
    paint: "Матовая краска CERTA 900",
    firewood: "300&nbsp;мм",
  },
  [PechType.Standart]: {
    img: { src: "vita-standart", alt: "буржуйка VITA стандарт" },
    profile: {
      collect: "61х45х48",
      appart: "50х44х46",
      decr: "Печь можно переносить руками или возить любым удобным для вас способом: на тележке, санках, в багажнике автомобиля. Лёгкий вес металлических изделий обеспечивает их мобильность.",
    },
    square: "75&nbsp;м³",
    weight: "23,6&nbsp;кг",
    density: "3&nbsp;мм",
    paint: "Матовая краска CERTA 900",
    firewood: "400&nbsp;мм",
  },
};
