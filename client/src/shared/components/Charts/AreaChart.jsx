import { useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

export default function AreaChart({ series, size }) {
    const theme = useTheme();
    const chartColor = theme.palette.chart
    const colorMode = useSelector((state) => state.user.config.color_mode);
    return (
        <ReactApexChart
            type="area"
            height={size}
            // width={size}
            series={[{ data: series }]}
            options={{
                chart: {
                    background: "transparent",
                    zoom: {
                        enabled: false
                    }
                },
                theme: {
                    mode: colorMode,
                    monochrome: {
                        enabled: false,
                        shadeTo: colorMode,
                        shadeIntensity: 0.65,
                    },
                },
                stroke: { curve: "smooth" },
                xaxis: {
                    categories: [1, 2, 3, 4, 5, 6, 7],
                },
                fill: { type: "gradient" },
                tooltip: {
                    enabled: true,
                    theme: colorMode,
                },
                colors: Object.keys(chartColor).map(key => chartColor[key]),
            }}
        />
    );
}
