/* Created by EFisher on 26/03/2014 17:25:02 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the proportion spent on home care vary within each client group budget?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['1994-95','1995-96','1996-97','1997-98','1998-99','1999-2000','2000-01','2001-02','2002-03','2003-04','2004-05','2005-06','2006-07','2007-08','2008-09','2009-10','2010-11','2011-12','2012-13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The proportion of client group total <br> expenditure spent on home care', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Older people (aged 65 or over) including older mentally ill',
type: 'line',
data: [26.6,24.7,23.4,22.8,22.4,21.7,21.4,21.3,20.3,21.2,21.8,22.5,22.7,22.6,22.7,23,23.1,21.7,21]
,index: 1
},
{
name: 'Adults aged under 65 with a physical disability or sensory impairment',
type: 'line',
data: [10.6,14.4,15.1,18.2,19.9,22.7,23.2,22.2,21.1,21.2,21.1,21.4,21.7,20.6,19.7,19.8,20.7,19.5,18.6]
,index: 2
},
{
name: 'Adults aged under 65 with learning disabilities',
type: 'line',
data: [1.5,2.6,3.3,4.4,5.1,5.4,6.3,6.7,6.2,7.4,8.2,9.9,11.2,11.9,12.7,12.7,13.8,13.1,12.8]
,index: 3
},
{
name: 'Adults aged under 65 with mental health needs',
type: 'line',
data: [3.7,4.8,5.5,5.5,4.9,5.6,5.3,5.8,5.1,5.4,5.2,5.6,5.7,5.6,5.9,5.8,7.3,7.6,7]
,index: 4
}
]
}
