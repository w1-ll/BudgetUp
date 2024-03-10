import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Compare Budgets</h2>
      <Bar
        data={{
          labels: [
            "Groceries",
            "Childcare",
            "Rent/Mortgage",
            "Restaurants",
            "Debt Owed"
          ],
          datasets: [
            {
              label: "Last month",
              data: chartData.dataset1,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1
            },
            {
              label: "This month",
              data: chartData.dataset2,
              backgroundColor: "rgba(255,99,132,1)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1
            }
          ]
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Compare monthly spending"
            },
            legend: {
              display: true,
              position: "top"
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart;
