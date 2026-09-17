export default function Layout({
  modal,
  children,
}: {
  modal: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="container p-4">{children}</div>
      <div>{modal}</div>
    </div>
  )
}
