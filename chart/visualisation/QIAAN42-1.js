{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many discharges from hospital result in emergency admissions within 30 days?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of discharges from hopsital <br> that result in emergency readmissions <br> within 30 days', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage of discharges from hopsital that result <br> in emergency readmissions within 30 days',
type: 'column',
data: [9.4,9.5,9.8,10.2,10.6,10.8,11,11.3,11.6,11.8]
,index: 1
},
    {name: 'error bars',
     type: 'errorbar',
     data: [
[9.3,9.4],
[9.4,9.5],
[9.8,9.8],
[10.2,10.3],
[10.6,10.7],
[10.8,10.8],
[11,11],
[11.3,11.3],
[11.5,11.6],
[11.7,11.8]


     ]}

     
]
}


















