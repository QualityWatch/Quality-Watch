/* Created by NCODowd on 27/04/2016 10:33:25 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Vaccination coverage in children in the United Kingdom'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['United Kingdom','England','Wales','Scotland']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of children immunised'}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Diphtheria, Tetanus, Polio, Pertussis, Hib (DTaP/IPV/Hib) by 1st birthday',
type: 'column',
data: [94.7,94.2,96.6,97.4]
,index: 1
},
{
name: 'Pneumococcal Disease (PCV) by 1st birthday',
type: 'column',
data: [94.4,93.9,96.3,97.4]
,index: 2
},
{
name: 'Pneumococcal Disease (PCV) booster by 2nd birthday',
type: 'column',
data: [92.7,92.2,95.7,95.4]
,index: 3
},
{
name: 'Measles, Mumps, Rubella (MMR) by 2nd birthday',
type: 'column',
data: [92.8,92.3,95.8,95.4]
,index: 4
},
{
name: 'Hib/MenC booster by 2nd birthday',
type: 'column',
data: [92.6,92.1,95,95.4]
,index: 5
}
]
}
