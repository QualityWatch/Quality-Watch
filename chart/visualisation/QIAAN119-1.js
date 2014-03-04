{
  legend: {
            enabled: false
        },
     
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Can patients successfully get an NHS dentistry appointment?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','Jan 2013 - Sept 2013']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who were <br> successful in getting an NHS dental <br> appointment', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
    data: [92.7,93,{y:93, color: '#3FCFD5'}]
,index: 1
}
]
}