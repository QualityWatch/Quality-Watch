/* Created by ianb on 27/04/2015 18:07:17 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Vaccination coverage in children in the United Kingdom'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['United Kingdom','England','Wales','Scotland','Northern Ireland']
, labels: {
 rotation: -90
, step: 1
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
data: [94.8,94.3,96.7,97.5,97.5]
,index: 1
},
{
name: 'Pneumococcal Disease (PCV) by 1st birthday',
type: 'column',
data: [94.5,94.1,96.2,97.5,97.4]
,index: 2
},
{
name: 'Pneumococcal Disease (PCV) booster by 2nd birthday',
type: 'column',
data: [92.9,92.4,95.5,95.5,96]
,index: 3
},
{
name: 'Measles, Mumps, Rubella (MMR) by 2nd birthday',
type: 'column',
data: [93.1,92.7,96.5,95.6,96.2]
,index: 4
},
{
name: 'Hib/MenC booster by 2nd birthday',
type: 'column',
data: [93,92.5,95.3,95.7,96.2]
,index: 5
}
]
}
