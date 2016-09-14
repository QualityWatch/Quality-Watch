/* Created by NCODowd on 09/09/2016 08:42:16 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did patients describe their overall experience of making an appointment?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> overall their experience of making <br> an appointment was good', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Overall experience',
type: 'column',
data: [79.1,76.3,74.6,73.3,73.4]
,index: 1
}, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[79.04, 79.26], [76.23, 76.46], [74.48, 74.73], [73.16, 73.42],[73.31,73.57]
            ]
        }
]
}
