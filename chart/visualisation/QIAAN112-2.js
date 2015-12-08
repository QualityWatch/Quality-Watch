/* Created by EFisher on 26/11/2015 10:02:37 using v2.7 */    {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of people admitted for hip fracture were operated on within 24 & 48 hours?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2002/03', '2003/04', '2004/05', '2005/06', '2006/07', '2007/08', '2008/09', '2009/10', '2010/11', '2011/12', '2012/13', '2013/14', '2014/15']
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
data: [54.9, 52.3, 52.4, 51.2, 51.9, 52.7, 55.2, 58.7, 67, 71.7, 75.4, 76.7, 77.4]
}, {
            name: 'error24h',
            type: 'errorbar',
            data: [
                [54.46, 55.34], [51.85, 52.73], [51.93, 52.81], [50.79, 51.66], [51.42, 52.3], [52.28, 53.14], [54.77, 55.62], [58.29, 59.12], [66.62, 67.42], [71.34, 72.1], [74.99, 75.71], [76.38, 77.07], [77.1, 77.78]
            ]
        },
{
name: 'Surgery within 48h of admission',
type: 'line',
data: [71.4, 69.3, 69.9, 69, 70, 72, 74.2, 77.7, 83.3, 86.3, 88, 88.4, 88.5]
}, {
            name: 'error48h',
            type: 'errorbar',
            data: [
[70.96, 71.84], [68.86, 69.74], [69.43, 70.32], [68.58, 69.45], [69.59, 70.47], [71.55, 72.41], [73.73, 74.58], [77.27, 78.11], [82.89, 83.68], [85.89, 86.64], [87.61, 88.33], [88.07, 88.76], [88.2, 88.88]
            ]
        }
]
}