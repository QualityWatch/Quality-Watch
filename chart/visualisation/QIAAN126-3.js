{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Distribution of adult social service jobs by service group'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of jobs'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Residential',
type: 'column',
data: [23.9,22.2,21.8]
,index: 4
},
{
name: 'Day',
type: 'column',
data: [10.2,9.8,10.9]
,index: 3
},
{
name: 'Domiciliary (home care)',
type: 'column',
data: [14.5,12.7,14.1]
,index: 2
},
{
name: 'Community',
type: 'column',
data: [31.7,34.9,32.7]
,index: 1
},
{
name: 'Other',
type: 'column',
data: [19.6,20.3,20.5]
,index: 0
}
]
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
