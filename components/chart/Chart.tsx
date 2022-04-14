
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from "react";
import SelectOptions from "../SelectOptions";
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Chart = ({ filter, dataSource }) => {

    const dataState = {
        series: [{
            data: dataSource
        }],

        options: {
            grid: {
                show: false,
            },

            dataLabels: {
                enabled: false,
            },

            chart: {
                id: 'area-datetime',
                type: 'area',
                height: 350,
                zoom: {
                    autoScaleYaxis: true
                }
            },
            annotations: {
            },
            colors: ['#FFBB00', '#FFBB00', '#FFBB00'],
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                show: false,
                type: 'datetime',
                // min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },

            yaxis: {
                show: false
            },

            tooltip: {
                theme: true,
                fill: {
                    shade: 'dark',
                },
                colors: ['#FFBB00', '#FFBB00'],
                x: {
                    format: 'dd MMM yyyy'
                }
            },

            fill: {
                type: "gradient",
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0,
                    opacityFrom: 0.9,
                    opacityTo: 0.0,
                    stops: [0, 100]
                }
            },
        },
    };


    const [state, setState] = useState(dataState)

    useEffect(() => {

        const refDate = (date, distance) => {
            var dt = new Date(date);
            return dt.setDate(dt.getDate() - distance);
        }

        let data = [];
        let ref = dataSource[dataSource.length - 1][0];

        if (filter === "1y") {
            data = dataSource.filter(d => refDate(ref, 367) < d[0])
            console.log(data)
        }

        if (filter === "6m") {
            data = dataSource.filter(d => refDate(ref, 183) < d[0])
        }

        if (filter === "3m") {
            data = dataSource.filter(d => refDate(ref, 92) < d[0])
        }

        if (filter === "1m") {
            data = dataSource.filter(d => refDate(ref, 32) < d[0])
        }

        if (filter === "1w") {
            data = dataSource.filter(d => refDate(ref, 8) < d[0])
        }

        if (filter === "1d") {
            data = dataSource.filter(d => refDate(ref, 2) < d[0])
        }

        setState({
            ...dataState, series: [{
                data: data
            }],
        })


    }, [dataSource, filter])



    return (<>

        <div id="chart-timeline">
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
        </div>
    </>);
}


export default Chart;