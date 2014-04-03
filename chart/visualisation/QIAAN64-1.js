{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the proportion of social care users who found it easy to access information changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who use services <br> and carers who find it easy to find <br> information about services', offset: 99}
, max: 80
, min: 50
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [74.2,73.8,71.4]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [[73.5,74.7], [73.3,74.3],null]}
]

    }