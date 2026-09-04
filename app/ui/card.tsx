export function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="m-2 flex h-max min-h-[80px] max-w-[250px] min-w-[150px] flex-col content-center rounded-md bg-gray-500/20 shadow-md shadow-black backdrop-blur-xl">
      <div className="flex max-h-[120px] min-h-[40px] max-w-[250px] min-w-[150px] rounded-t-md bg-gray-500/50 p-2">
        <h3 className="container border-b-1 border-cyan-600 p-1 text-cyan-300">
          {title}
        </h3>
      </div>
      <div className="flex max-h-[120px] min-h-[40px] max-w-[250px] min-w-[150px] content-center items-start rounded-md p-2 text-cyan-300">
        <p>{value}</p>
      </div>
    </div>
  )
}
