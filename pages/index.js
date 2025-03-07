import dynamic from "next/dynamic";

const VentasChart = dynamic(() => import("../components/VentasChart"), { ssr: false });

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gráfico de Ventas</h1>
      <VentasChart />
    </div>
  );
}