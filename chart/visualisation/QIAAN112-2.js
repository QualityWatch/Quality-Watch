    {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of people admitted for hip fracture were operated on within 24 & 48 hours?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of hip fracture admissions'}
, min: 40
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Surgery within 24h of admission',
type: 'line',
data: [56.6,54.9,52.3,52.4,51.2,51.8,52.7,55.2,58.7,67]
}, {
            name: 'error24h',
            type: 'errorbar',
            data: [
                [56.18,57.08],
[54.47,55.35],
[51.89,52.76],
[51.99,52.87],
[50.78,51.65],
[51.39,52.27],
[52.31,53.16],
[54.78,55.64],
[58.25,59.08],
[66.58,67.37]
            ]
        },
{
name: 'Surgery within 48h of admission',
type: 'line',
data: [73.3,71.4,69.3,69.9,69,70,72,74.1,77.7,83.2]
}, {
            name: 'error48h',
            type: 'errorbar',
            data: [
[72.94,73.75],
[71,71.8],
[68.94,69.75],
[69.52,70.33],
[68.6,69.41],
[69.57,70.36],
[71.57,72.34],
[73.72,74.47],
[77.32,78.02],
[82.93,83.55]

            ]
        }
]
}