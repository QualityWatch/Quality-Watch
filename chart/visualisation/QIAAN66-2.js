/* Created by JMorris on 09/05/2018 14:45:40 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does childhood vaccination coverage vary across UK countries?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Diphtheria, Tetanus, Polio, Pertussis, Hib (DTaP/IPV/Hib) 1st birthday','Pneumococcal Disease (PCV)','Pneumococcal Disease (PCV) booster','Measles, Mumps, Rubella (MMR)','Hib/MenC booster','Diphtheria, Tetanus, Polio, Pertussis, Hib (DTaP/IPV/Hib) 2nd birthday']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of children vaccinated, <br> 2016/17', offset: 87}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'England',
type: 'column',
data: [93.4,93.5,91.5,91.6,91.5,95.1]
,index: 1
},
{
name: 'Northern Ireland',
type: 'column',
data: [97,97,95.1,94.9,95,97.9]
,index: 2
},
{
name: 'Scotland',
type: 'column',
data: [96.8,96.8,94.9,94.9,95,97.7]
,index: 3
},
{
name: 'Wales',
type: 'column',
data: [96.3,96.2,95.4,95.1,94.5,97]
,index: 4
}
]
}
