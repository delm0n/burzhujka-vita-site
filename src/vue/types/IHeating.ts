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
