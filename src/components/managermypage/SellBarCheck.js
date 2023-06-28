import "./App.css";
import React, { useEffect } from "react";
import ManagerTitleMenu from "./ManagerTitleMenu";
import { Chart, registerables } from "chart.js/auto";

function SellBarCheck() {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    // Chart.register(...registerables);
    // let day = new Date.now();

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["일", "월", "화", "수", "목", "금", "토"],
        datasets: [
          {
            label: "# of Votes",
            data: [1, 2, 3, 4, 5, 6, 7],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <ManagerTitleMenu></ManagerTitleMenu>
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default SellBarCheck;
