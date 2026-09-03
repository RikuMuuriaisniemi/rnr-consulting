export function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="flex w-[150px] h-[75px] content-center flex-col border-1 rounded-md bg-gray-500/20 backdrop-blur-xl shadow-md shadow-black ">
      <div className="flex bg-gray-500/50 p-2">
        <h3>{title}</h3>
      </div>
      <p className="flex text-center">{value}</p>
    </div>
  );
}
