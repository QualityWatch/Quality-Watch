{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Infant mortality rate, how does the UK compare to similar countries over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1990,1995,2000,2005,2010]
, labels: {
}
},
yAxis: {
title: {text:'Infant mortality rate*'}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [7.6,5.8,5.1,4.7,4.2]
,index: 1
}, {
            name: 'error',
            type: 'errorbar',
            data: [
[7.4,7.8],
[5.6,6],
[5,5.2],
[4.6,4.8],
[4.1,4.3]
            ]
        },
{
name: 'France',
visible: false,type: 'line',
data: [7.4,5.3,4.4,3.8,3.5]
,index: 2
}, {
            name: 'error',visible: false,
            type: 'errorbar',
            data: [
[7.2,7.6],
[5.2,5.4],
[4.3,4.5],
[3.7,3.9],
[3.5,3.5]

            ]
        },
{
name: 'Germany',
visible: false,type: 'line',
data: [7,5.3,4.4,3.9,3.5]
,index: 3
}, {
            name: 'error',visible: false,
            type: 'errorbar',
            data: [
[6.8,7.2],
[5.2,5.4],
[4.3,4.5],
[3.8,4],
[3.4,3.6]
            ]
        },
{
name: 'United Kingdom',
visible: false,type: 'line',
data: [7.9,6.1,5.6,5.1,4.4]
,index: 4
}, {
            name: 'error',visible: false,
            type: 'errorbar',
            data: [
[7.8,8],
[6,6.2],
[5.5,5.7],
[5,5.2],
[4.3,4.5]
            ]
        },
{
name: 'United States of America',
visible: false,type: 'line',
data: [9.4,8,7.1,6.8,6.3]
,index: 5
}, {
            name: 'error', visible: false,
            type: 'errorbar',
            data: [
[9.2,9.6],
[7.8,8.2],
[7,7.2],
[6.6,7],
[5.9,6.7]
            ]
        },
{
name: 'Australia target',
visible: true,type: 'line',
data: [null,null,null,null,4.2,2.53]
,index: 6
},
{
name: 'Germany target',
visible: false,type: 'line',
data: [null,null,null,null,3.5,2.33]
,index: 7
},
{
name: 'United Kingdom target',
visible: false,type: 'line',
data: [null,null,null,null,4.4,2.63]
,index: 8
},
{
name: 'United States of America target',
visible: false,type: 'line',
data: [null,null,null,null,6.3,3.13]
,index: 9
},
{
name: 'France target',
visible: false,type: 'line',
data: [null,null,null,null,3.5,2.47]
,index: 10
}
]
}