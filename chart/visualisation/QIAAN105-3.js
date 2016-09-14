/* Created by NCODowd on 09/09/2016 08:30:49 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How convenient did patients find the appointment they were able to get?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> the appointment they were able to <br> get was convenient', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Convenient appointment',
type: 'column',
data: [93.3,92.5,91.9,91.8,92.1]
,index: 1
},{
            name: 'Error bars',
            type: 'errorbar',
            data: [
[93.24, 93.38], [92.41, 92.57], [91.82, 91.99], [91.74, 91.92], [91.97, 92.14]
            ]
        }

]
}