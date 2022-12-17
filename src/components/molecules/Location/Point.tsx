interface IPointProps {
  name: string;
  address: string;
}
const Point = ({ name, address }: IPointProps) => {
  return (
    <div className="flex flex-col">
      <p className="font-medium text-white">{name}</p>
      <p className="flex items-center gap-1 text-white opacity-30">
        <img src="./icons/Point.svg" />
        {address}
      </p>
    </div>
  );
};

export default Point;
