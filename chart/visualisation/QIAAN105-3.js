{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How convenient did patients find the appointment they were able to get?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','Jan - Sept 2013']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> the appointment they were able to <br> get was convenient', offset: 99}
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
data: [93.3,92.5,{y:92.2, color: 'rgba(0,154,166,0.5)'}]
,index: 1
}, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[93.24,93.38],
[92.41,92.57],
[92.08,92.25]
            ]
        }
]
}