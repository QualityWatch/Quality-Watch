/* Created by EFisher on 23/11/2015 16:11:15 using v2.7 */ {
legend: {
            enabled: false
        },
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did patients feel about how quickly they received care from out-of-hours GP service?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','Jan 2013 - Sept 2013','July 2013 - Mar 2014','Jan 2014 - Sept 2014','July 2014 - Mar 2015']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> the time it took to receive care <br> from the out-of-hours GP service <br> was about right', offset: 111}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [63.3,62,{
                y: 59.6,
                color: 'rgba(0,154,166,1)'
            },{
                y: 58.9,
                color: 'rgba(0,154,166,1)'
            },{
                y: 60.5,
                color: 'rgba(0,154,166,1)'
            },{
                y: 60.7,
                color: 'rgba(0,154,166,1)'
            }]
}, {
            name: 'error',
            type: 'errorbar',
            data: [
[62.89,63.62],
[61.57,62.33],
[59.18,59.99],
                [58.5,59.3],
[60.1,60.9],
[60.3,61.1]


            ]
        }
    
    
]
}