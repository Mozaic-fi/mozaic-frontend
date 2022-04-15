import { useState, useEffect } from 'react';
import Chart from '../../components/chart/Chart';
import Card from '../../components/commons/card/Card';
import CounterCardContent from '../../components/commons/card/CounterCardContent';
import SelectOptions from '../../components/commons/SelectOptions';
import CompactTable from '../../components/table/CompactTable';
import Table from '../../components/table/Table';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface dataType {
  id: any;
  name: string;
  value: string;
}

const Product = () => {
  const filterByDataType: dataType[] = [
    {
      id: 1,
      name: 'Index Price',
      value: 'ip',
    },
    {
      id: 2,
      name: 'Assets Under Management',
      value: 'aum',
    },
    {
      id: 3,
      name: 'Annual Percentage Yield',
      value: 'apy',
    },
  ];

  const filterByTime: dataType[] = [
    {
      id: 1,
      name: '1D',
      value: '1d',
    },
    {
      id: 2,
      name: '1W',
      value: '1w',
    },
    {
      id: 3,
      name: '1M',
      value: '1m',
    },
    {
      id: 4,
      name: '3M',
      value: '3m',
    },
    {
      id: 5,
      name: '6M',
      value: '6m',
    },
    {
      id: 6,
      name: '1Y',
      value: '1y',
    },
  ];

  const investmentTitles: { id: any; name: string }[] = [
    {
      id: 1,
      name: 'Asset name',
    },
    {
      id: 2,
      name: 'Allocation',
    },
    {
      id: 3,
      name: 'Price',
    },
    {
      id: 4,
      name: 'APY',
    },
    {
      id: 5,
      name: 'Strategy',
    },
  ];

  const productData = {
    id: 1,
    name: 'Avalanche Majors',
    tokenName: 'AVAM',
    icoSrc: '/assets/icons/products/ico.avalanchemajor.svg',
    summary: {
      depositors: 5,
      current: 3946.31,
      maxCap: 15500,
      assetsUnderManagement: 8197319912.78,
      averageMonthlyReturn: 23,
      lastMonthsAverageApy: 6,
      predictedApy: 4,
    },
    aum: {
      name: 'Assets Under Management',
      value: 8197319912.78,
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        [1328050800000, 31.24],
        [1328137200000, 31.29],
        [1328223600000, 31.85],
        [1328482800000, 31.86],
        [1328569200000, 32.28],
        [1328655600000, 32.1],
        [1328742000000, 32.65],
        [1328828400000, 32.21],
        [1329087600000, 32.35],
        [1329174000000, 32.44],
        [1329260400000, 32.46],
        [1329346800000, 32.86],
        [1329433200000, 32.75],
        [1329778800000, 32.54],
        [1329865200000, 32.33],
        [1329951600000, 32.97],
        [1330038000000, 33.41],
        [1330297200000, 33.27],
        [1330383600000, 33.27],
        [1330470000000, 32.89],
        [1330556400000, 33.1],
        [1330642800000, 33.73],
        [1330902000000, 33.22],
        [1330988400000, 31.99],
        [1331074800000, 32.41],
        [1331161200000, 33.05],
        [1331247600000, 33.64],
        [1331506800000, 33.56],
        [1331593200000, 34.22],
        [1331679600000, 33.77],
        [1331766000000, 34.17],
        [1331852400000, 33.82],
        [1332111600000, 34.51],
        [1332198000000, 33.16],
        [1332284400000, 33.56],
        [1332370800000, 33.71],
        [1332457200000, 33.81],
        [1332712800000, 34.4],
        [1332799200000, 34.63],
        [1332885600000, 34.46],
        [1332972000000, 34.48],
        [1333058400000, 34.31],
        [1333317600000, 34.7],
        [1333404000000, 34.31],
        [1333490400000, 33.46],
        [1333576800000, 33.59],
        [1333922400000, 33.22],
        [1334008800000, 32.61],
        [1334095200000, 33.01],
        [1334181600000, 33.55],
        [1334268000000, 33.18],
        [1334527200000, 32.84],
        [1334613600000, 33.84],
        [1334700000000, 33.39],
        [1334786400000, 32.91],
        [1334872800000, 33.06],
        [1335132000000, 32.62],
        [1335218400000, 32.4],
        [1335304800000, 33.13],
        [1335391200000, 33.26],
        [1335477600000, 33.58],
        [1335736800000, 33.55],
        [1335823200000, 33.77],
        [1335909600000, 33.76],
        [1335996000000, 33.32],
        [1336082400000, 32.61],
        [1336341600000, 32.52],
        [1336428000000, 32.67],
        [1336514400000, 32.52],
        [1336600800000, 31.92],
        [1336687200000, 32.2],
        [1336946400000, 32.23],
        [1337032800000, 32.33],
        [1337119200000, 32.36],
        [1337205600000, 32.01],
        [1337292000000, 31.31],
        [1337551200000, 32.01],
        [1337637600000, 32.01],
        [1337724000000, 32.18],
        [1337810400000, 31.54],
        [1337896800000, 31.6],
        [1338242400000, 32.05],
        [1338328800000, 31.29],
        [1338415200000, 31.05],
        [1338501600000, 29.82],
        [1338760800000, 30.31],
        [1338847200000, 30.7],
        [1338933600000, 31.69],
        [1339020000000, 31.32],
        [1339106400000, 31.65],
        [1339365600000, 31.13],
        [1339452000000, 31.77],
        [1339538400000, 31.79],
        [1339624800000, 31.67],
        [1339711200000, 32.39],
        [1339970400000, 32.63],
        [1340056800000, 32.89],
        [1340143200000, 31.99],
        [1340229600000, 31.23],
        [1340316000000, 31.57],
        [1340575200000, 30.84],
        [1340661600000, 31.07],
        [1340748000000, 31.41],
        [1340834400000, 31.17],
        [1340920800000, 32.37],
        [1341180000000, 32.19],
        [1341266400000, 32.51],
        [1341439200000, 32.53],
        [1341525600000, 31.37],
        [1341784800000, 30.43],
        [1341871200000, 30.44],
        [1341957600000, 30.2],
        [1342044000000, 30.14],
        [1342130400000, 30.65],
        [1342389600000, 30.4],
        [1342476000000, 30.65],
        [1342562400000, 31.43],
        [1342648800000, 31.89],
        [1342735200000, 31.38],
        [1342994400000, 30.64],
        [1343080800000, 30.02],
        [1343167200000, 30.33],
        [1343253600000, 30.95],
        [1343340000000, 31.89],
        [1343599200000, 31.01],
        [1343685600000, 30.88],
        [1343772000000, 30.69],
        [1343858400000, 30.58],
        [1343944800000, 32.02],
        [1344204000000, 32.14],
        [1344290400000, 32.37],
        [1344376800000, 32.51],
        [1344463200000, 32.65],
        [1344549600000, 32.64],
        [1344808800000, 32.27],
        [1344895200000, 32.1],
        [1344981600000, 32.91],
        [1345068000000, 33.65],
        [1345154400000, 33.8],
        [1345413600000, 33.92],
        [1345500000000, 33.75],
        [1345586400000, 33.84],
        [1345672800000, 33.5],
        [1345759200000, 32.26],
        [1346018400000, 32.32],
        [1346104800000, 32.06],
        [1346191200000, 31.96],
        [1346277600000, 31.46],
        [1346364000000, 31.27],
        [1346709600000, 31.43],
        [1346796000000, 32.26],
        [1346882400000, 32.79],
        [1346968800000, 32.46],
        [1347228000000, 32.13],
        [1347314400000, 32.43],
        [1347400800000, 32.42],
        [1347487200000, 32.81],
        [1347573600000, 33.34],
        [1347832800000, 33.41],
        [1347919200000, 32.57],
        [1348005600000, 33.12],
        [1348092000000, 34.53],
        [1348178400000, 33.83],
        [1348437600000, 33.41],
        [1348524000000, 32.9],
        [1348610400000, 32.53],
        [1348696800000, 32.8],
        [1348783200000, 32.44],
        [1349042400000, 32.62],
        [1349128800000, 32.57],
        [1349215200000, 32.6],
        [1349301600000, 32.68],
        [1349388000000, 32.47],
        [1349647200000, 32.23],
        [1349733600000, 31.68],
        [1349820000000, 31.51],
        [1349906400000, 31.78],
        [1349992800000, 31.94],
        [1350252000000, 32.33],
        [1350338400000, 33.24],
        [1350424800000, 33.44],
        [1350511200000, 33.48],
        [1350597600000, 33.24],
        [1350856800000, 33.49],
        [1350943200000, 33.31],
        [1351029600000, 33.36],
        [1351116000000, 33.4],
        [1351202400000, 34.01],
        [1351638000000, 34.02],
        [1351724400000, 34.36],
        [1351810800000, 34.39],
        [1352070000000, 34.24],
        [1352156400000, 34.39],
        [1352242800000, 33.47],
        [1352329200000, 32.98],
        [1352415600000, 32.9],
        [1352674800000, 32.7],
        [1352761200000, 32.54],
        [1352847600000, 32.23],
        [1352934000000, 32.64],
        [1353020400000, 32.65],
        [1353279600000, 32.92],
        [1353366000000, 32.64],
        [1353452400000, 32.84],
        [1353625200000, 33.4],
        [1353884400000, 33.3],
        [1353970800000, 33.18],
        [1354057200000, 33.88],
        [1354143600000, 34.09],
        [1354230000000, 34.61],
        [1354489200000, 34.7],
        [1354575600000, 35.3],
        [1354662000000, 35.4],
        [1354748400000, 35.14],
        [1354834800000, 35.48],
        [1355094000000, 35.75],
        [1355180400000, 35.54],
        [1355266800000, 35.96],
        [1355353200000, 35.53],
        [1355439600000, 37.56],
        [1355698800000, 37.42],
        [1355785200000, 37.49],
        [1355871600000, 38.09],
        [1355958000000, 37.87],
        [1356044400000, 37.71],
        [1356303600000, 37.53],
        [1356476400000, 37.55],
        [1356562800000, 37.3],
        [1356649200000, 36.9],
        [1356908400000, 37.68],
        [1357081200000, 38.34],
        [1357167600000, 37.75],
        [1357254000000, 38.13],
        [1357513200000, 37.94],
        [1357599600000, 38.14],
        [1357686000000, 38.66],
        [1357772400000, 38.62],
        [1357858800000, 38.09],
        [1358118000000, 38.16],
        [1358204400000, 38.15],
        [1358290800000, 37.88],
        [1358377200000, 37.73],
        [1358463600000, 37.98],
        [1358809200000, 37.95],
        [1358895600000, 38.25],
        [1358982000000, 38.1],
        [1359068400000, 38.32],
        [1359327600000, 38.24],
        [1359414000000, 38.52],
        [1359500400000, 37.94],
        [1359586800000, 37.83],
        [1359673200000, 38.34],
        [1359932400000, 38.1],
        [1360018800000, 38.51],
        [1360105200000, 38.4],
        [1360191600000, 38.07],
        [1360278000000, 39.12],
        [1360537200000, 38.64],
        [1360623600000, 38.89],
        [1360710000000, 38.81],
        [1360796400000, 38.61],
        [1360882800000, 38.63],
        [1361228400000, 38.99],
        [1361314800000, 38.77],
        [1361401200000, 38.34],
        [1361487600000, 38.55],
        [1361746800000, 38.11],
        [1361833200000, 38.59],
        [1361919600000, 39.6],
      ],
    },
    ip: {
      name: 'Index Price',
      value: 2419.37,
      monthlyReturn: -2.9,
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        [1329260400000, 32.46],
        [1329346800000, 32.86],
        [1329433200000, 32.75],
        [1329778800000, 32.54],
        [1329865200000, 32.33],
        [1329951600000, 32.97],
        [1330038000000, 33.41],
        [1330297200000, 33.27],
        [1330383600000, 33.27],
        [1330470000000, 32.89],
        [1330556400000, 33.1],
        [1357167600000, 37.75],
        [1357254000000, 38.13],
        [1357513200000, 37.94],
        [1357599600000, 38.14],
        [1357686000000, 38.66],
        [1357772400000, 38.62],
        [1357858800000, 38.09],
        [1358118000000, 38.16],
        [1358204400000, 38.15],
        [1358290800000, 37.88],
        [1358377200000, 37.73],
        [1358463600000, 37.98],
        [1358809200000, 37.95],
        [1358895600000, 38.25],
        [1358982000000, 38.1],
        [1359068400000, 38.32],
        [1359327600000, 38.24],
        [1359414000000, 38.52],
        [1359500400000, 37.94],
        [1359586800000, 37.83],
        [1359673200000, 38.34],
        [1359932400000, 38.1],
        [1360018800000, 38.51],
        [1360105200000, 38.4],
        [1360191600000, 38.07],
        [1360278000000, 39.12],
        [1360537200000, 38.64],
        [1360623600000, 38.89],
        [1360710000000, 38.81],
        [1360796400000, 38.61],
        [1360882800000, 38.63],
        [1361228400000, 38.99],
        [1361314800000, 38.77],
        [1361401200000, 38.34],
        [1361487600000, 38.55],
        [1361746800000, 38.11],
        [1361833200000, 38.59],
        [1361919600000, 39.6],
      ],
    },
    apy: {
      name: 'Annual Percentage Yield',
      value: 8197319912.78,
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        [1328050800000, 31.24],
        [1328137200000, 31.29],
        [1328223600000, 31.85],
        [1328482800000, 31.86],
        [1328569200000, 32.28],
        [1328655600000, 32.1],
        [1328742000000, 32.65],
        [1328828400000, 32.21],
        [1329087600000, 32.35],
        [1329174000000, 32.44],
        [1329260400000, 32.46],
        [1329346800000, 32.86],
        [1329433200000, 32.75],
        [1329778800000, 32.54],
        [1329865200000, 32.33],
        [1329951600000, 32.97],
        [1330038000000, 33.41],
        [1330297200000, 33.27],
        [1330383600000, 33.27],
        [1330470000000, 32.89],
        [1330556400000, 33.1],
        [1330642800000, 33.73],
        [1330902000000, 33.22],
        [1330988400000, 31.99],
        [1331074800000, 32.41],
        [1331161200000, 33.05],
        [1331247600000, 33.64],
        [1331506800000, 33.56],
        [1331593200000, 34.22],
        [1331679600000, 33.77],
        [1331766000000, 34.17],
        [1331852400000, 33.82],
        [1332111600000, 34.51],
        [1332198000000, 33.16],
        [1332284400000, 33.56],
        [1332370800000, 33.71],
        [1332457200000, 33.81],
        [1332712800000, 34.4],
        [1332799200000, 34.63],
        [1332885600000, 34.46],
        [1332972000000, 34.48],
        [1333058400000, 34.31],
        [1333317600000, 34.7],
        [1333404000000, 34.31],
        [1333490400000, 33.46],
        [1333576800000, 33.59],
        [1333922400000, 33.22],
        [1334008800000, 32.61],
        [1334095200000, 33.01],
        [1334181600000, 33.55],
        [1334268000000, 33.18],
        [1334527200000, 32.84],
        [1334613600000, 33.84],
        [1334700000000, 33.39],
        [1334786400000, 32.91],
        [1334872800000, 33.06],
        [1335132000000, 32.62],
        [1335218400000, 32.4],
        [1335304800000, 33.13],
        [1335391200000, 33.26],
        [1335477600000, 33.58],
        [1335736800000, 33.55],
        [1335823200000, 33.77],
        [1335909600000, 33.76],
        [1335996000000, 33.32],
        [1336082400000, 32.61],
        [1336341600000, 32.52],
        [1336428000000, 32.67],
        [1336514400000, 32.52],
        [1336600800000, 31.92],
        [1336687200000, 32.2],
        [1336946400000, 32.23],
        [1337032800000, 32.33],
        [1337119200000, 32.36],
        [1337205600000, 32.01],
        [1337292000000, 31.31],
        [1337551200000, 32.01],
        [1337637600000, 32.01],
        [1337724000000, 32.18],
        [1337810400000, 31.54],
        [1337896800000, 31.6],
        [1338242400000, 32.05],
        [1338328800000, 31.29],
        [1338415200000, 31.05],
        [1338501600000, 29.82],
        [1338760800000, 30.31],
        [1338847200000, 30.7],
        [1338933600000, 31.69],
        [1339020000000, 31.32],
        [1339106400000, 31.65],
        [1339365600000, 31.13],
        [1339452000000, 31.77],
        [1339538400000, 31.79],
        [1339624800000, 31.67],
        [1339711200000, 32.39],
        [1339970400000, 32.63],
        [1340056800000, 32.89],
        [1340143200000, 31.99],
        [1340229600000, 31.23],
        [1340316000000, 31.57],
        [1340575200000, 30.84],
        [1340661600000, 31.07],
        [1340748000000, 31.41],
        [1340834400000, 31.17],
        [1340920800000, 32.37],
        [1341180000000, 32.19],
        [1341266400000, 32.51],
        [1341439200000, 32.53],
        [1341525600000, 31.37],
        [1341784800000, 30.43],
        [1341871200000, 30.44],
        [1341957600000, 30.2],
        [1342044000000, 30.14],
        [1342130400000, 30.65],
        [1342389600000, 30.4],
        [1342476000000, 30.65],
        [1342562400000, 31.43],
        [1342648800000, 31.89],
        [1342735200000, 31.38],
        [1342994400000, 30.64],
        [1343080800000, 30.02],
        [1343167200000, 30.33],
        [1343253600000, 30.95],
        [1343340000000, 31.89],
        [1343599200000, 31.01],
        [1343685600000, 30.88],
        [1343772000000, 30.69],
        [1343858400000, 30.58],
        [1343944800000, 32.02],
        [1344204000000, 32.14],
        [1344290400000, 32.37],
        [1344376800000, 32.51],
        [1344463200000, 32.65],
        [1344549600000, 32.64],
        [1344808800000, 32.27],
        [1344895200000, 32.1],
        [1344981600000, 32.91],
        [1345068000000, 33.65],
        [1345154400000, 33.8],
        [1345413600000, 33.92],
        [1345500000000, 33.75],
        [1345586400000, 33.84],
        [1345672800000, 33.5],
        [1345759200000, 32.26],
        [1346018400000, 32.32],
        [1346104800000, 32.06],
        [1346191200000, 31.96],
        [1346277600000, 31.46],
        [1346364000000, 31.27],
        [1346709600000, 31.43],
        [1346796000000, 32.26],
        [1346882400000, 32.79],
        [1346968800000, 32.46],
        [1347228000000, 32.13],
        [1347314400000, 32.43],
        [1347400800000, 32.42],
        [1347487200000, 32.81],
        [1347573600000, 33.34],
        [1347832800000, 33.41],
        [1347919200000, 32.57],
        [1348005600000, 33.12],
        [1348092000000, 34.53],
        [1348178400000, 33.83],
        [1348437600000, 33.41],
        [1348524000000, 32.9],
        [1348610400000, 32.53],
        [1348696800000, 32.8],
        [1348783200000, 32.44],
        [1349042400000, 32.62],
        [1349128800000, 32.57],
        [1349215200000, 32.6],
        [1349301600000, 32.68],
        [1349388000000, 32.47],
        [1349647200000, 32.23],
        [1349733600000, 31.68],
        [1349820000000, 31.51],
        [1349906400000, 31.78],
        [1349992800000, 31.94],
        [1350252000000, 32.33],
        [1350338400000, 33.24],
        [1350424800000, 33.44],
        [1350511200000, 33.48],
        [1350597600000, 33.24],
        [1350856800000, 33.49],
        [1350943200000, 33.31],
        [1351029600000, 33.36],
        [1351116000000, 33.4],
        [1351202400000, 34.01],
        [1351638000000, 34.02],
        [1351724400000, 34.36],
        [1351810800000, 34.39],
        [1352070000000, 34.24],
        [1352156400000, 34.39],
        [1352242800000, 33.47],
        [1352329200000, 32.98],
        [1352415600000, 32.9],
        [1352674800000, 32.7],
        [1352761200000, 32.54],
        [1352847600000, 32.23],
        [1352934000000, 32.64],
        [1353020400000, 32.65],
        [1353279600000, 32.92],
        [1353366000000, 32.64],
        [1353452400000, 32.84],
        [1353625200000, 33.4],
        [1353884400000, 33.3],
        [1353970800000, 33.18],
        [1354057200000, 33.88],
        [1354143600000, 34.09],
        [1354230000000, 34.61],
        [1354489200000, 34.7],
        [1354575600000, 35.3],
        [1354662000000, 35.4],
        [1354748400000, 35.14],
        [1354834800000, 35.48],
        [1355094000000, 35.75],
        [1355180400000, 35.54],
        [1355266800000, 35.96],
        [1355353200000, 35.53],
        [1355439600000, 37.56],
        [1355698800000, 37.42],
        [1355785200000, 37.49],
        [1355871600000, 38.09],
        [1355958000000, 37.87],
        [1356044400000, 37.71],
        [1356303600000, 37.53],
        [1356476400000, 37.55],
        [1356562800000, 37.3],
        [1356649200000, 36.9],
        [1356908400000, 37.68],
        [1357081200000, 38.34],
        [1357167600000, 37.75],
        [1357254000000, 38.13],
        [1357513200000, 37.94],
        [1357599600000, 38.14],
        [1357686000000, 38.66],
        [1357772400000, 38.62],
        [1357858800000, 38.09],
        [1358118000000, 38.16],
        [1358204400000, 38.15],
        [1358290800000, 37.88],
        [1358377200000, 37.73],
        [1358463600000, 37.98],
        [1358809200000, 37.95],
        [1358895600000, 38.25],
        [1358982000000, 38.1],
        [1359068400000, 38.32],
        [1359327600000, 38.24],
        [1359414000000, 38.52],
        [1359500400000, 37.94],
        [1359586800000, 37.83],
        [1359673200000, 38.34],
        [1359932400000, 38.1],
        [1360018800000, 38.51],
        [1360105200000, 38.4],
        [1360191600000, 38.07],
        [1360278000000, 39.12],
        [1360537200000, 38.64],
        [1360623600000, 38.89],
        [1360710000000, 38.81],
        [1360796400000, 38.61],
        [1360882800000, 38.63],
        [1361228400000, 38.99],
        [1361314800000, 38.77],
        [1361401200000, 38.34],
        [1361487600000, 38.55],
        [1361746800000, 38.11],
        [1361833200000, 38.59],
        [1361919600000, 39.6],
      ],
    },
    tokens: [
      {
        id: 1,
        name: 'LINK',
        icoSrc: '/assets/icons/tokens/ico.token.link.svg',
        allocation: 23.08,
        price: 1844,
        apy: '0.00%',
        strategy: 0,
      },
      {
        id: 2,
        name: 'AVAX',
        icoSrc: '/assets/icons/tokens/ico.token.avax.svg',
        allocation: 17.81,
        price: 1844,
        apy: 'none',
        strategy: 2,
      },
      {
        id: 3,
        name: 'WBTC',
        icoSrc: '/assets/icons/tokens/ico.token.wbtc.svg',
        allocation: 14.37,
        price: 1844,
        apy: '0.00%',
        strategy: 1,
      },
      {
        id: 4,
        name: 'WETH',
        icoSrc: '/assets/icons/tokens/ico.token.weth.svg',
        allocation: 14.37,
        price: 1844,
        apy: '0.00%',
        strategy: 0,
      },
    ],
  };

  const bottomCardContent: { id: any; title: string; description: string }[] = [
    {
      id: 1,
      title: 'Fee Structure',
      description:
        'The vault fee consists of a 2% annualised management fee and a 20% performance fee. The performance fee is charged based on the assets managed by the vault. If the strategy is profitable, the performance fee is charged on the premiums when withdrawing; however, if the strategy is unprofitable, there are no fees charged. There is no withdraw fee.',
    },
    {
      id: 2,
      title: 'Vault Strategy',
      description:
        'The vault gives users exposure to a specific category of tokens. Every hour the vault rebalanced the portfolio according to our modelling system and then rotates the tokens to the highest rewarding protocol to farm with.',
    },
  ];

  const { height, width } = useWindowDimensions();
  const calculatedCardWidth =
    width < 670 ? '100%' : width < 910 ? '45%' : width < 1110 ? '30%' : '260px';

  const [selectedOpt, setSelectedOpt] = useState(filterByDataType[0].value);
  const [selectedRange, setSelectedRange] = useState(filterByTime[0].value);
  const [isOpenWM, setIsOpenWM] = useState(false);
  const [isOpenDM, setIsOpenDM] = useState(false);
  const [currentDataStream, setCurrentDataStream] = useState<any>(null);

  const handleWD = (whichOne: number) => {
    if (whichOne === 0) {
      setIsOpenWM(false);
      setIsOpenDM(true);
    }
    if (whichOne === 1) {
      setIsOpenDM(false);
      setIsOpenWM(true);
    }
  };

  useEffect(() => {
    selectedOpt === 'ip'
      ? setCurrentDataStream(productData.ip)
      : selectedOpt === 'aum'
      ? setCurrentDataStream(productData.aum)
      : selectedOpt === 'apy'
      ? setCurrentDataStream(productData.apy)
      : null;
    console.log(selectedOpt);
  }, [selectedOpt]);

  return (
    <>
      {currentDataStream && (
        <>
          <div className='container header-container'>
            {/* product info card */}

            <div className='product-info-container'>
              <div className='product-info bg-s'>
                <div className='product-header'>
                  <img
                    className='product-icon'
                    src={productData.icoSrc}
                    alt=''
                  />
                  <h2 className='product-name fs-xxl tc-s fw-l'>
                    {productData.name}
                  </h2>
                </div>
                <div className='info-container bg-p'>
                  <div>
                    <p className='fw-b fs-s tc-h'>{currentDataStream.name}</p>
                    <div className='about-product'>
                      <h1 className='ff-1 fs-xxl'>
                        ${currentDataStream.value}
                      </h1>
                      <div className='df-sb'>
                        <p
                          className={`fs-s fw-b ${
                            currentDataStream.monthlyReturn < 0
                              ? 'tc-alert'
                              : 'tc-positive'
                          }`}
                        >
                          {currentDataStream.monthlyReturn
                            ? currentDataStream.monthlyReturn
                            : '---'}
                        </p>
                        <p className='fs-s tc-hd'>Past {selectedRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* withdraw & deposit button */}

              <div className='button-container-dw'>
                <button onClick={() => handleWD(0)} className='btn-left'>
                  Deposit
                </button>
                {/* {isOpenDM && (
                  <DepositModal
                  closeModal={setIsOpenDM}
                  availableToken={productData.tokens}
                  tokenName={productData.tokenName}
                  />
                )} */}
                <button onClick={() => handleWD(1)} className='btn-right'>
                  Withdraw
                </button>
                {/* {isOpenWM && (
                  <WithdrawModal
                  closeModal={setIsOpenWM}
                  availableToken={productData.tokens}
                  tokenName={productData.tokenName}
                  />
                )} */}
              </div>
            </div>

            {/* chart */}

            <div className='chart-container'>
              {/* chart filter */}

              <div className='filter'>
                <SelectOptions
                  options={filterByDataType}
                  selectedVal={selectedOpt}
                  setSelectedVal={setSelectedOpt}
                  type='dropdown'
                />
                <SelectOptions
                  options={filterByTime}
                  selectedVal={selectedRange}
                  setSelectedVal={setSelectedRange}
                  type='range'
                />
              </div>

              {/* chart */}

              <div className='chart-graph-container'>
                {selectedOpt && (
                  <Chart
                    dataSource={currentDataStream.data}
                    filter={selectedRange}
                  />
                )}
              </div>
            </div>
          </div>
          <div className=' container'>
            <div className='card-container-p'>
              <Card w={calculatedCardWidth}>
                <CounterCardContent
                  icoSrc='/assets/icons/productindepth/ico.predictedapy.svg'
                  title='PREDICTED APY'
                  counter={productData.summary.predictedApy}
                />
              </Card>
              <Card w={calculatedCardWidth}>
                <CounterCardContent
                  icoSrc='/assets/icons/productindepth/ico.lastmonthsapy.svg'
                  title='LAST MONTHS AVERAGE APY'
                  counter={productData.summary.lastMonthsAverageApy}
                />
              </Card>
              <Card w={calculatedCardWidth}>
                <CounterCardContent
                  icoSrc='/assets/icons/productindepth/ico.avaragemonthlyreturn.svg'
                  title='Avarage monthly return'
                  counter={`${productData.summary.averageMonthlyReturn}%`}
                />
              </Card>
              <Card w={calculatedCardWidth}>
                <CounterCardContent
                  icoSrc='/assets/icons/productindepth/ico.managedassets.svg'
                  title='Assets under management'
                  counter={`$${productData.summary.assetsUnderManagement}`}
                />
              </Card>
            </div>
            <div className='table'>
              {width > 670 ? (
                <Table titles={investmentTitles} items={productData.tokens} />
              ) : (
                <CompactTable items={productData.tokens} />
              )}
            </div>
            <div className='space'></div>
            <div className='card-container-p'>
              {bottomCardContent.map((content) => (
                <Card
                  key={content.id}
                  w={width > 850 ? '%' : '100%'}
                  type='secondary'
                  h='auto'
                  d='block'
                  p='30px'
                >
                  <>
                    <h2 className='ff-1 tc-p'>{content.title}</h2>
                    <p className='tc-s fs-s'>{content.description}</p>
                  </>
                </Card>
              ))}
            </div>
            <div className='space'></div>
          </div>
        </>
      )}

      <style jsx>
        {`
          .header-container {
            display: flex;
            margin-top: 150px;
            flex-direction: row;
            gap: 30px;

            .product-info-container {
              width: 270px;
              display: flex;
              flex-direction: column;
            }

            .product-info {
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              width: 100%px;
              justify-content: center;
              align-items: center;
              padding: 8px;
              margin: 0;
              margin-bottom: 24px;
            }

            .product-header {
              display: flex;
              flex-direction: column;
              align-items: center;

              .product-icon {
                width: 74px;
                margin-top: 24px;
                margin-bottom: 20px;
              }

              .product-name {
                text-align: center;
                line-height: 100%;
              }
            }

            .info-container {
              margin-top: 24px;
              padding: 16px;
              box-sizing: border-box;
              width: 100%;
              border-radius: 5px;
            }

            .filter {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: end;
            }

            .button-container-dw {
              box-sizing: border-box;
              padding: 4px;
              width: 80%;
              width: 270px;
              height: max-content;
              background: linear-gradient(95.03deg, var(--bgPrimary), #2f2d33)
                  padding-box,
                linear-gradient(
                    95.26deg,
                    var(--primaryColor) 5.57%,
                    rgba(0, 0, 0, 0) 97.7%
                  )
                  border-box;
              border: 1px solid transparent;
              border-radius: 53px;
            }

            button {
              cursor: pointer;
              border: none;
              transition: all 0.5s ease;
            }

            .btn-left {
              font-size: 0.96rem;
              font-weight: bold;
              position: static;
              border-radius: 35px 0 0 35px;
              height: 50px;
              width: 50%;
              background-color: var(--primaryColor);
              color: var(--bgPrimary);
              &:hover {
                background-color: var(--primaryColorGlow);
              }
            }

            .btn-right {
              font-size: 0.96rem;
              font-weight: bold;
              position: static;
              border-radius: 0 35px 35px 0;
              height: 50px;
              width: 50%;
              background-color: var(--bgPrimary);

              &:hover {
                background-color: rgba(47, 45, 51, 0.079);
              }
            }
          }

          .chart-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: end;

            .chart-graph-container {
              width: 100%;
              height: 100%;
            }
          }

          .card-container-p {
            flex-basis: 100%;
            margin-top: 30px;
            margin-bottom: 30px;
            display: flex;
            gap: 30px;
            justify-content: space-between;
            width: 100%;
            flex-direction: row-reverse;
            flex-wrap: wrap-reverse;
          }

          .table {
            width: 100%;
          }

          @media screen and (max-width: 1160px) {
            .card-container-p {
              justify-content: center;
            }
          }

          @media screen and (max-width: 960px) {
            .chart-container {
              align-items: center;
            }

            .filter {
              display: flex;
              flex-direction: column;
            }
          }

          @media screen and (max-width: 680px) {
            .header-container {
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-top: 120px;

              .product-info-container {
                width: 100%;
              }

              .product-header {
                display: flex;
                flex-direction: row;
                gap: 30px;
                align-items: center;
                justify-content: center;
                margin-top: 24px;
                margin-bottom: 20px;
                width: min-content;

                .product-icon {
                  margin-top: 0px;
                  margin-bottom: 0px;
                }

                .product-name {
                  text-align: left;
                  line-height: 100%;
                }
              }

              .button-container-dw {
                width: 100%;
              }
            }
          }
        `}
      </style>
    </>
  );
};

export default Product;
