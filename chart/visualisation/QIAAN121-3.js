/* Created by EFisher on 26/03/2014 17:20:41 using v2.1 */
   {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did people feel they were treated with respect and dignity?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Did people feel their NHS healthcare <br> or social care worker treated them <br> with dignity and respect', offset: 99}
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, definitely',
type: 'column',
    data: [88,87,87,86, {y: 75, color:'#3FCFD5'}]
},
{
name: 'Yes, to some extent',
type: 'column',
    data: [10,11,11,11, {y: 19, color:'#E59AAA'}]
},
{
name: 'No',
type: 'column',
    data: [2,2,2,2, {y:6, color:'#B634BB'}]
}
]
}
