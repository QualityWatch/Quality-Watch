
    $('#container').highcharts(/* Created by NCODowd on 24/05/2016 16:32:03 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the proportion of people with learning disabilities living in their own home vary across England?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North West','Yorkshire and the Humber','North East','England','East Midlands','South West','Eastern','London','South East','West Midlands']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of adults with a learning <br> disability who live in their own <br> home or with family', offset: 99}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value+'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2014-15',
type: 'column',
data: [87.9,81.4,78.1,73.3,73.2,69.5,69.2,69.1,68.5,62.6]
,index: 1
}
]
}
);
}
