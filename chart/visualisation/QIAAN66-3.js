/* Created by rreed on 4/19/2017 4:41:52 PM using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Vaccination coverage in children in the United Kingdom, July-September 2015-16'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['United Kingdom','Wales','Northern Ireland','Scotland','England']
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
data: [93.5,96.4,97.1,97.1,92.9]
,index: 1
},
{
name: 'Pneumococcal Disease (PCV) by 1st birthday',
type: 'column',
data: [93.7,96.4,97.1,97.2,93.1]
,index: 2
},
{
name: 'Pneumococcal Disease (PCV) booster by 2nd birthday',
type: 'column',
data: [92,96,94.9,95.1,91.4]
,index: 3
},
{
name: 'Measles, Mumps, Rubella (MMR) by 2nd birthday',
type: 'column',
data: [91.7,95.3,94.5,94.8,91.2]
,index: 4
},
{
name: 'Hib/MenC booster by 2nd birthday',
type: 'column',
data: [95.3,97.4,97.4,97.7,94.9]
,index: 5
}
]
}
