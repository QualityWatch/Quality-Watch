/* Created by ianb on 07/10/2013 13:39:23 using v0.9 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have NHS staff numbers changed by staff type?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage increase in numbers of <br> full time equivalent for major staff <br> groups', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'GPs',
type: 'line',
data: [0,3.2,6.4,9.4,14.5,15.7,16.8,23.8,20.9,21.1,23]
,index: 1
},
{
name: 'All doctors',
type: 'line',
data: [0,5.1,12.4,17.5,22.5,24.5,29,36.2,36.4,38.3,40.4]
,index: 2
},
{
name: 'Nursing staff',
type: 'line',
data: [0,3.8,7.2,10,10.8,10.1,12,14.4,15.5,14.6,14.1]
,index: 3
},
{
name: 'Scientific, therapeutic & technical staff',
type: 'line',
data: [0,4.6,10.4,15.1,16.4,19,23.9,30.2,33.5,33.9,35]
,index: 4
},
{
name: 'NHS infrastructure support',
type: 'line',
data: [0,6.3,12.7,17.8,12.6,11.9,18.4,28.3,27.6,20.1,17.8]
,index: 5
},
{
name: 'Total',
type: 'line',
data: [0,4.6,9.1,12.8,12.3,11.6,15.1,20.4,22.7,20.9,20.7]
,index: 6
}
]
}

