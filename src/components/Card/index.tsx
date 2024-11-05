import { FC } from "react";

interface ICard {
  title: string;
  text: string;
  type: string;
}
const Card: FC<ICard> = ({ title, text, type }) => {
  return (
    <>
      <h2>{title}</h2>
      type&&<p>{text}</p>
    </>
  );
};
export default Card;
