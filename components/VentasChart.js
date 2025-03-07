// components/VentasChart.js
import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";

const VentasChart = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    fetch("/api/ventas")
      .then((res) => res.json())
      .then((data) => setVentas(data));
  }, []);

  const data = {
    labels: ventas.map((v) => v.mes),
    datasets: [
      {
        label: "Ventas por mes",
        data: ventas.map((v) => v.total),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Chart type="bar" data={data} />;
};

export default VentasChart;
