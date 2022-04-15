import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const Chart = ({ filter, dataSource }: { filter: any; dataSource: any }) => {
  const dataState: any = {
    series: [
      {
        data: dataSource,
      },
    ],

    options: {
      grid: {
        show: false,
      },

      dataLabels: {
        enabled: false,
      },

      chart: {
        toolbar: {
          show: false,
        },
        id: 'area-datetime',
        type: 'area',
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      annotations: {},

      colors: ['#f3deb7', '#f3deb7', '#f3deb7'],

      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        show: false,
        type: 'datetime',
        tickAmount: 6,
        labels: {
          style: {
            colors: '#f3deb750',
          },
        },
      },

      yaxis: {
        show: false,
      },

      tooltip: {
        enabled: true,
        fillSeriesColor: true,
        theme: false,
        style: {
          fontSize: '12px',
          fontFamily: undefined,
          colors: ['#000', '#000'],
        },
        x: {
          format: 'dd MMM yyyy',
        },
      },

      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0,
          opacityFrom: 0.9,
          opacityTo: 0.0,
          stops: [0, 100],
        },
      },
    },
  };

  const [state, setState] = useState(dataState);

  useEffect(() => {
    const refDate = (date: any, distance: any) => {
      var dt = new Date(date);
      return dt.setDate(dt.getDate() - distance);
    };

    let data: [] = [];
    let ref = dataSource[dataSource.length - 1][0];

    if (filter === '1y') {
      data = dataSource.filter((d: any) => refDate(ref, 367) < d[0]);
      console.log(data);
    }

    if (filter === '6m') {
      data = dataSource.filter((d: any) => refDate(ref, 183) < d[0]);
    }

    if (filter === '3m') {
      data = dataSource.filter((d: any) => refDate(ref, 92) < d[0]);
    }

    if (filter === '1m') {
      data = dataSource.filter((d: any) => refDate(ref, 32) < d[0]);
    }

    if (filter === '1w') {
      data = dataSource.filter((d: any) => refDate(ref, 8) < d[0]);
    }

    if (filter === '1d') {
      data = dataSource.filter((d: any) => refDate(ref, 2) < d[0]);
    }

    setState({
      ...dataState,
      series: [
        {
          data: data,
        },
      ],
    });
  }, [dataSource, filter]);

  return (
    <>
      <div id='chart-timeline'>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type='area'
          height={350}
        />
      </div>

      <style jsx>{`
        .apexcharts-xaxis-texts-g > * {
          color: red;
        }
        .apexcharts-tooltip {
          background: red !important;
          color: orange !important;
        }
      `}</style>
    </>
  );
};

export default Chart;
