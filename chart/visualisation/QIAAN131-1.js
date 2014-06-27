/* Created by ianb on 27/06/2014 16:36:12 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do people rate their health with the EQ-5D descriptive system?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Groin Hernia 2009/2010','Groin Hernia 2010/2011','Groin Hernia 2011/2012','Groin Hernia 2012/2013','Groin Hernia 2013/2013','','Varicose Vein 2009/2010','Varicose Vein 2010/2011','Varicose Vein 2011/2012','Varicose Vein 2012/2013','Varicose Vein 2013/2013','','Hip Replacement 2009/2010','Hip Replacement 2010/2011','Hip Replacement 2011/2012','','Hip Primary 2012/2013','Hip Primary 2013/2013','','Hip Revision 2012/2013','Hip Revision 2013/2013','','Knee Replacement 2009/2010','Knee Replacement 2010/2011','Knee Replacement 2011/2012','','Knee Primary 2012/2013','Knee Primary 2013/2013','','Knee Revision 2012/2013','Knee Revision 2013/2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percent Change - EQ-5D Index'}
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
data: [50.2,51.2,51,50.2,50.7,null,52.7,51.4,53.6,52.8,52.8,null,87.3,86.9,87.5,null,89.7,89.1,null,72.3,70.1,null,77.7,78.2,78.8,null,80.6,81.8,null,67.5,63.9]
,index: 2
},
{
name: 'No change',
type: 'column',
data: [32.1,31.3,31.5,32,31.6,null,33,33.1,30.8,30.7,32,null,6.2,6.5,6.3,null,5.3,5.5,null,11.6,14.2,null,11,10.9,10.4,null,9.6,9.3,null,14.4,16.8]
,index: 1
},
{
name: 'Deterioration',
type: 'column',
data: [17.7,17.5,17.5,17.8,17.7,null,14.2,15.5,15.6,16.4,15.2,null,6.6,6.5,6.2,null,5,5.4,null,16.1,15.7,null,11.3,10.9,10.8,null,9.8,8.9,null,18.1,19.3]
,index: 0
}
]
}
