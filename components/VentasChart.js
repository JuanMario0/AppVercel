import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const VentasChart = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data from /api/ventas...");
      try {
        const response = await fetch('/api/ventas');
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
        setVentas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const chartData = {
    labels: ventas.map((v) => v.mes),
    datasets: [
      {
        label: "Ventas por mes",
        data: ventas.map((v) => v.venta), // Cambiamos 'total' por 'venta'
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      {ventas.length > 0 ? (
        <Chart type="bar" data={chartData} />
      ) : (
        <p>Cargando datos... o no hay datos disponibles.</p>
      )}
    </div>
  );
};

export default VentasChart;