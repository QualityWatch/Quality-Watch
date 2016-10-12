/* Created by NCODowd on 12/10/2016 17:28:13 using v2.7 *//* Created by EFisher on 23/11/2015 13:21:44 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of social care users who feel safe changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13','2013-14','2014-15','2015-16']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who use services <br> who feel safe', offset: 87}
, max: 80
, min: 40
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [62.4,63.8,65.1,66.0,{y: 68.5, color: 'rgba(0,154,166,0.5)'},{y: 69.2, color: 'rgba(0,154,166,0.5)'} ]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [[61.9,62.9],[63.3,64.3],[64.7,65.5],[65.6,66.4],[68.1,68.9],[68.8,69.6]
     ]}
]
}