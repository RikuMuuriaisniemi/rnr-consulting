import { Card } from '@/app/ui/card'

export default function Dashboard() {
  return (
    <>
      <div>
        <main className="flex min-h-screen place-content-center bg-radial-[at_15%_25%] from-cyan-700 from-5% to-gray-900 to-95% p-8">
          <div className="flex flex-row">
            <Card title="Testi" value={420}></Card>
            <Card
              title="Testi 2 todella pitkä teksti kokeilu"
              value={20}
            ></Card>
          </div>
        </main>
      </div>
    </>
  )
}
