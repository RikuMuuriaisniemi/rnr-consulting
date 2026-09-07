import { Card } from '@/app/ui/card'

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row place-content-center">
        <Card title="Testi" value={420}></Card>
        <Card title="Testi 2 todella pitkä teksti kokeilu" value={20}></Card>
      </div>
    </>
  )
}
