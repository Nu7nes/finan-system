import { useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";

export default function PieChart({ series, labels, size }) {
    const theme = useTheme();
    return (
        <ReactApexChart
            type="donut"
            height={size}
            // width={size}
            series={series}
            options={{
                labels: labels,
                stroke: { show: false },
                legend: {
                    position: "left",
                    fontSize: "16px",
                    horizontalAlign: "center",
                    labels: {
                        colors: [theme.palette.text, theme.palette.text]
                    }
                },
                colors: [theme.palette.primary.main, theme.palette.gray.main],
            }}
        />
    );
}
