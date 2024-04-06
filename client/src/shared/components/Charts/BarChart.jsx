import { useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

export default function BarChart({ data }) {
    const theme = useTheme();
    const chartColor = theme.palette.chart;
    const colorMode = useSelector((state) => state.user.config.color_mode);
    const seriesChart = [
        {
            data: [
                {
                    x: "Unidades",
                    y: data.units,
                },
                {
                    x: "Envio hoje",
                    y: data.envios.hoje,
                },
                {
                    x: "Envio amanhã",
                    y: data.envios.amanha,
                },
            ],
        },
    ];
    // console.log(data);
    return (
        <ReactApexChart
            type="bar"
            height={200}
            width={150}
            // series={[{
            //     data: [{
            //       x: 'category A',
            //       y: 10
            //     }, {
            //       x: 'category B',
            //       y: 18
            //     }, {
            //       x: 'category C',
            //       y: 13
            //     }]
            //   }]}
            series={seriesChart}
            options={{
                plotOptions: {
                    bar: {
                        borderRadius: 6,
                        distributed: true,
                        dataLabels: { orientation: "horizontal" },

                    },
                },
                grid: {
                    show: false,
                },
                yaxis: {
                    show: false,
                },
                chart: {
                    background: "transparent",
                    zoom: {
                        enabled: false,
                    },

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
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                    labels: {
                        show: false,
                    },
                },
                tooltip: {
                    enabled: true,
                    theme: colorMode,
                    items: {
                        display: false,
                    },
                },
                colors: Object.keys(chartColor).map((key) => chartColor[key]),
                legend: {
                    show: false,
                },
            }}
        />
    );
}
