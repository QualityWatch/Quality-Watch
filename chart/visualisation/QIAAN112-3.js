/* Created by EFisher on 26/11/2015 10:13:23 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have mortality rates for hip fracture within 30 days of admission changed?'},
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
    yAxis: [
        {min: 0,
title: {text:'Deaths within 30 days following <br> hip fracture  admission', offset: 87}},
        {opposite: true, min: 0,
title: {text:'Directly standardised mortality rate <br> per 1,000 admissions', offset: 87}}
       ]
    
    ,
series:[
{
name: 'Deaths within 30 days',
type: 'line',
data: [4986, 5244, 5191, 5327, 5173, 5234, 4891, 4539, 4349, 4295, 4392, 4139, 4123]
},
{
name: 'Directly standardised 30-day mortality rate',
type: 'line',
    yAxis:1,
data: [101.9, 105.6, 105.9, 106.3, 103.4, 101.6, 94.1, 84.7, 80.6, 78.1, 79.6, 72, 71.5]

}, {
            name: 'error',
            type: 'errorbar',
    yAxis: 1,
            data: [
[99.1, 104.76], [102.78, 108.5], [102.98, 108.74], [103.43, 109.14], [100.58, 106.21], [98.85, 104.36], [91.46, 96.74], [82.23, 87.15], [78.19, 82.98], [75.78, 80.45], [77.28, 81.99], [69.85, 74.24], [69.31, 73.68]

            ]
        }
]
}    
