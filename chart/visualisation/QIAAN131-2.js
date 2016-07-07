/* Created by NCODowd on 07/07/2016 12:52:02 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do people rate their health with EQ-VAS?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Groin Hernia 2009/2010','Groin Hernia 2010/2011','Groin Hernia 2011/2012','Groin Hernia 2012/2013','Groin Hernia 2013/2014','','Varicose Vein 2009/2010','Varicose Vein 2010/2011','Varicose Vein 2011/2012','Varicose Vein 2012/2013','Varicose Vein 2013/2014','','Hip Replacement 2009/2010','Hip Replacement 2010/2011','Hip Replacement 2011/2012','','Hip Primary 2012/2013','Hip Primary 2013/2014','','Hip Revision 2012/2013','Hip Revision 2013/2014','','Knee Replacement 2009/2010','Knee Replacement 2010/2011','Knee Replacement 2011/2012','','Knee Primary 2012/2013','Knee Primary 2013/2014','','Knee Revision 2012/2013','Knee Revision 2013/2014']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage change - EQ-VAS'}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Improvement',
type: 'column',
data: [38.1,38.8,39.3,37.7,37.3,null,40.5,39.5,42.1,40.9,40.1,null,61.1,61.1,63.7,null,65.5,65.1,null,53.7,53,null,50.3,50.4,53.9,null,54.9,55,null,49,48.1]
,index: 2
},
{
name: 'No change',
type: 'column',
data: [18.8,19.8,18,18.1,18.6,null,18.9,20.4,17.1,16.6,18.2,null,11.5,11.4,9.8,null,9.8,10.7,null,10.8,11.8,null,14,12.9,11.1,null,12.1,13,null,10.5,11.3]
,index: 1
},
{
name: 'Deterioration',
type: 'column',
data: [43.1,41.4,42.7,44.2,44.2,null,40.6,40,40.8,42.5,41.7,null,27.4,27.5,26.5,null,24.7,24.2,null,35.5,35.2,null,35.7,36.6,35,null,33.1,32,null,40.4,40.6]
,index: 0
}
]
}
