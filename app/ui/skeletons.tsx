export function UserAdminSkeleton() {
  return (
    <div className="m-2 table w-md border-collapse animate-pulse overflow-hidden rounded-md shadow-md shadow-black">
      <div className="table-header-group border-b-2 border-gray-600/20">
        <div className="table-row h-8 bg-gray-400/50 font-medium">
          <div className="table-cell items-center px-2 py-1" />
          <div className="table-cell items-center px-2 py-1" />
        </div>
      </div>
      <div className="table-row-group divide-y-2 divide-gray-600 bg-gray-500/50 font-medium">
        <div className="table-row h-8">
          <div className="table-cell items-center px-2 py-1"></div>
          <div className="table-cell items-center px-2 py-1"></div>
        </div>
      </div>
    </div>
  )
}
