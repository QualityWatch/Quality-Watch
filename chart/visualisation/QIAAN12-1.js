/* Created by NCODowd on 13/09/2016 11:03:11 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have medication errors causing severe harm or death changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2008,2009,2010,2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Number of reported medication incidents <br> where the degree of harm is severe <br> or death, per 100,000 population.', offset: 99}
, labels: {
}},
series:[
{
name: 'Medication errors',
type: 'column',
data: [0.76,0.6,0.51,0.5,0.39,0.34,0.37]
,index: 1
}
]
}
