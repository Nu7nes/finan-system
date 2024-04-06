import calculatePercentage from "@/shared/utils/percentage";
import { Typography, useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";

export default function PieChart({ series, labels, size }) {
    const theme = useTheme();
    const chartColor = theme.palette.chart;
    const percentage = calculatePercentage(series[1],series[0]).toFixed(2)
    return (
        <>
        {/* <Typography>{percentage}</Typography> */}
            <ReactApexChart
                type="donut"
                height={"150%"}
                // width={size}
                series={series}
                options={{
                    labels: labels,
                    dataLabels: {
                        enabled: false,
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: false,
                                }
                            }
                        }
                    },
                    stroke: { show: false },
                    legend: {
                        position: "bottom",
                        fontSize: "16px",
                        horizontalAlign: "center",
                        fontFamily: theme.typography.fontFamily,
                        itemMargin: {
                            horizontal: 30
                        },
                        labels: {
                            colors: [theme.palette.text, theme.palette.text],
                        },
                    },
                    colors: Object.keys(chartColor).map(
                        (key) => chartColor[key]
                    ),
                }}
            />
        </>
    );
}
