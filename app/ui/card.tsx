export function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="m-2 flex h-max min-h-20 max-w-62.5 min-w-37.5 flex-col content-center rounded-md bg-gray-500/20 shadow-md shadow-black backdrop-blur-xl">
      <div className="flex max-h-30 min-h-10 max-w-62.5 min-w-37.5 rounded-t-md bg-gray-500/50 p-2">
        <h3 className="container border-b border-cyan-600 p-1 text-cyan-300">
          {title}
        </h3>
      </div>
      <div className="flex max-h-30 min-h-10 max-w-62.5 min-w-37.5 content-center items-start rounded-md p-2 text-cyan-300">
        <p>{value}</p>
      </div>
    </div>
  )
}
