import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getModuleState } from "services/profile";
import { Line } from "react-chartjs-2";
import { alpha } from "@material-ui/core/styles";

const DashboardPage = () => {
  const profileState = useSelector(getModuleState);

  const patientByAgeData = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, alpha("#2164E8", 0.4));
    gradient.addColorStop(1, alpha("#2164E8", 0));

    return {
      labels: [
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
      ],
      datasets: [
        {
          backgroundColor: gradient,
          label: "",
          borderColor: "#2164E8",
          borderWidth: 1,
          pointRadius: 2,
          data: [
            46, 50, 78, 56, 40, 18, 19, 40, 52, 33, 23, 56, 76, 44, 33, 45, 34, 45, 33, 34,
            44, 56,
          ],
        },
      ],
    };
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      display: false,
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Typography
        variant="h4"
        color="textSecondary"
        style={{ marginBottom: "20px" }}
      >
        Dashboard
      </Typography>
      <Typography
        variant="h5"
        color="textSecondary"
        style={{ marginBottom: "20px" }}
      >
        It's good to see you, {profileState.firstName} {profileState.secondName}
      </Typography>
      
      <div style={{ width: "500px", padding: '20px', background: '#fff' }}>
        <Typography
          style={{ marginBottom: "20px", fontWeight: 'bold', fontSize: '15px' }}
        >
          Activity history
        </Typography>
        <Line data={patientByAgeData} showLines={false} options={options} />
      </div>
    </div>
  );
};

export default DashboardPage;
