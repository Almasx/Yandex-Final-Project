import { ReactComponent as Pin } from "../../../../common/assets/icons/Point.svg";

interface IPointProps {
  name: string;
  address: string;
}
const Point = ({ name, address }: IPointProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-white font-medium">{name}</p>
      <p className="text-white opacity-30 flex items-center gap-1">
        <Pin />
        {address}
      </p>
    </div>
  );
};

export default Point;
