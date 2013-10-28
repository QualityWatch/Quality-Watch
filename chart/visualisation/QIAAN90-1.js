/* Created by ianb on 14/10/2013 11:45:28 using v0.9 */{
title: {text:'Expenditure'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does health expenditure per head vary by country?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['United States','Norway','Switzerland','Netherlands','Austria','Canada','Germany','Denmark','France','Sweden','Australia','Ireland','United Kingdom','Finland','OECD average','Japan','New Zealand','Spain','Italy','Portugal','Greece','Hungary','Poland','Estonia','Mexico','Turkey']
, labels: {
}
},
yAxis: {
title: {text:'Total expenditure on health/capita <br> (US$ PPP) 2011 (or nearest year)', offset: 87}
, labels: {
format: '{value:.5f}' 
,formatter: function() {return '$'+this.value;}}},
series:[
{
name: 'Expenditure',
type: 'bar',
data: [8508,5669,5643,5099,4546,4522,4495,4448,4118,3925,3800,3700,3405,3374,3322,3213,3182,3072,3012,2619,2361,1689,1452,1303,977,906]
,index: 1
}
]
}
