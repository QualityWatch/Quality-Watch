{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of social care users who feel safe changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13']
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
data: [62.4,63.8,65.1]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [[61.9,62.9],[63.3,64.3],[64.7,65.5]
     ]}
]
}