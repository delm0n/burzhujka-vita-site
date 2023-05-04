import IImage from "./IImage";

interface IVitaContent {
  title: string;
  subtitle?: string;
  text?: Array<string>;
  img?: IImage;
  video?: string;
  anycontent?: boolean;
  anymedia?: boolean;
}
export default IVitaContent;
