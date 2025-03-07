// pages/index.js
import dynamic from "next/dynamic";

const VentasChart = dynamic(() => import("../components/VentasChart"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Gráfico de Ventas</h1>
      <VentasChart />
    </div>
  );
}
