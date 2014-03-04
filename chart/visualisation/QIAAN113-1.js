{
legend: {enabled: false},
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the percentage of women who smoke at birth decreased?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The percentage of women known to <br> be a smoker at the time of birth', offset: 87}
, max: 20
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [16.5,16.9,15.6,15.1,14.4,14.4,14,13.5,13.2,12.7]
}, {
            name: 'error',
            type: 'errorbar',
            data: [
[null,null],
[null,null],
[null,null],
[15,15.2],
[14.4,14.5],
[14.3,14.5],
[13.9,14.1],
[13.4,13.6],
[13.1,13.3],
[12.6,12.8]
            ]
        }

]
}