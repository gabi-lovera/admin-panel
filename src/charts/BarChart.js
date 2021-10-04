import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Antes", "2016", "2017", "2018", "2019", "2021"],
  datasets: [
    {
      label: "Usuarios",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Ventas",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      label: "Nuevos",
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const BarChart = () => (
  <>
    <div className="header">
      <h1 className="title">Gráfico de Barras</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default BarChart;
