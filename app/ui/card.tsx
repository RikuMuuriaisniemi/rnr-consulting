export function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="flex flex-col min-w-[150px] max-w-[250px] min-h-[80px] h-max content-center m-2 rounded-md bg-gray-500/20 backdrop-blur-xl shadow-md shadow-black ">
      <div className="flex min-w-[150px] max-w-[250px] min-h-[40px] max-h-[120px] bg-gray-500/50 rounded-t-md p-2">
        <h3 className="border-b-1">{title}</h3>
      </div>
      <div className="flex min-w-[150px] max-w-[250px] h-[40px] min-h-[40px] max-h-[120px] content-center rounded-md p-2">
        <p>{value}</p>
      </div>
    </div>
  );
}
