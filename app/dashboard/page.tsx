import { Card } from "../ui/card";

export default function Dashboard() {
  return (
    <>
      <div>
        <main className="flex min-h-screen place-content-center bg-radial-[at_15%_25%] from-cyan-700 from-5% to-gray-900 to-95% p-8">
          <div>
            <Card title="Testi" value={3}></Card>
          </div>
        </main>
      </div>
    </>
  );
}
