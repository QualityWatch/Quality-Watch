/* Created by NCODowd on 13/09/2016 11:07:13 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Does feeling supported to manage their long-term condition(s) differ by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['18 to 24','25 to 34','35 to 44','45 to 54','55 to 64','65 to 74','75 to 84','85 or over']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percnetage of people who feel supported <br> to manage their long-term condition', offset: 87}
, labels: {
}},
series:[
{
name: '2014/15',
type: 'column',
data: [53.7,54.7,59.5,64.4,69.9,76.6,76.5,73.8]
,index: 1
},
{
name: '2015/16',
type: 'column',
data: [55.2,55.2,58.9,64.1,69.1,76.2,76.8,73.5]
,index: 2
}
]
}
