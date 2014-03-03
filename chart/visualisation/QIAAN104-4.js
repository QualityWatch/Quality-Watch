/* Created by EFisher on 25/02/2014 18:30:44 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did rates of ACS admission show greater increases in more deprived areas?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Directly standardised rate of admission <br> per 100,000 population', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Least deprived',
type: 'line',
data: [758.32,768.18,783.37,817.3,852.51,848.78,847.98,891.99,908.59,929.73,905.02,939.74]
,index: 1
},
{
name: '5th vigintile',
visible: false,type: 'line',
data: [962.23,957.36,1005.67,1043.82,1073.63,1059.23,1046.21,1116.8,1137.29,1176.07,1137.44,1195.73]
,index: 2
},
{
name: '10th vigintile',
visible: false,type: 'line',
data: [1135.32,1155,1229.72,1279.03,1320.64,1312.63,1281.81,1370.98,1372.98,1442.6,1410.99,1467.43]
,index: 3
},
{
name: '15th vigintile',
visible: false,type: 'line',
data: [1502.19,1530.19,1615.22,1681.75,1735.22,1756.88,1721.19,1824.79,1834.82,1898.93,1868.37,1946.65]
,index: 4
},
{
name: '18th vigintile',
visible: false,type: 'line',
data: [1822.4,1851.03,1984.66,2052.01,2080.24,2130.68,2111.81,2197.24,2235.3,2333.94,2286.1,2337.27]
,index: 5
},
{
name: '19th vigintile',
visible: false,type: 'line',
data: [2017.73,2078.42,2204.41,2279.93,2306.5,2361.52,2322.64,2437.84,2444.58,2578.56,2489.85,2559.19]
,index: 6
},
{
name: 'Most deprived',
visible: false,type: 'line',
data: [2361.57,2415.49,2615.9,2693.35,2728.09,2845.98,2792.16,2871.04,2910.3,3021.06,2868.46,2963.19]
,index: 7
},
{
name: 'England',
visible: false,type: 'line',
data: [1277.62,1294.63,1366.82,1421.65,1452.66,1463.62,1441.99,1517.35,1539.02,1595.17,1552.94,1613.66]
,index: 8
}
]
}
