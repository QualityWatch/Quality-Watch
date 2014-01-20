{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have mortality rates for hip fracture within 30 days of admission changed?'},
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
    yAxis: [{opposite: true,
title: {text:'Directly standardised mortality rate <br> per 1,000 admissions', offset: 87}
, min: 50
, labels: {
format: '{value:.1f}' 
}},
       {
title: {text:'Deaths within 30 days following <br> hip fracture  admission', offset: 87}
, min: 3000
, labels: {
format: '{value:.1f}' 
}}
       ]
    
    ,
series:[
{
name: 'Deaths within 30 days',
type: 'line',
    yaxis: 1,
data: [4433,4986,5244,5193,5328,5176,5234,4828,4538,4344]
,index: 1
},
{
name: 'Directly standardised 30-day mortality rate',
type: 'line',
data: [97.3,101.3,105.3,104.9,103.5,99.7,97,88.5,79.1,74.9]
,index: 1
}, {
            name: 'error',
            type: 'errorbar',
            data: [
[94.43,100.18],
[98.47,104.11],
[102.45,108.18],
[102.07,107.81],
[100.71,106.31],
[97.02,102.5],
[94.38,99.69],
[86.03,91.1],
[76.75,81.44],
[72.67,77.22]

            ]
        }
]
}