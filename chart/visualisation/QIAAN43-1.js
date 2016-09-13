/* Created by NCODowd on 13/09/2016 11:03:49 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have employment rates changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/2007 Q2','2006/2007 Q3','2006/2007 Q4','2007/2008 Q1','2007/2008 Q2','2007/2008 Q3','2007/2008 Q4','2008/2009 Q1','2008/2009 Q2','2008/2009 Q3','2008/2009 Q4','2009/2010 Q1','2009/2010 Q2','2009/2010 Q3','2009/2010 Q4','2010/2011 Q1','2010/2011 Q2','2010/2011 Q3','2010/2011 Q4','2011/2012 Q1','2011/2012 Q2','2011/2012 Q3','2011/2012 Q4','2012/2013 Q1','2012/2013 Q2','2012/2013 Q3','2012/2013 Q4','2013/2014 Q1','2013/2014 Q2','2013/2014 Q3','2013/2014 Q4','2014/2015 Q1','2014/2015 Q2','2014/2015 Q3','2014/2015 Q4','2015/2016 Q1','2015/2016 Q2','2015/2016 Q3','2015/2016 Q4']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:''}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Employment rate of people with long-term conditions',
type: 'line',
data: [5810,5770,5770,5750,5800,5820,5780,5790,5780,5840,5810,5730,5750,5770,5920,5900,5960,5940,5920,5860,5930,5880,5830,5910,5960,6030,5950,5870,5850,5870,5880,5990,6030,6050,6040,6030,6020,6090,6100]
,index: 1
},
{
name: 'Employment rate of population ',
type: 'line',
data: [7330,7300,7230,7240,7310,7330,7300,7280,7290,7260,7170,7090,7120,7110,7040,7060,7140,7100,7060,7050,7070,7070,7060,7110,7190,7210,7130,7150,7220,7260,7270,7310,7350,7370,7350,7340,7430,7460,7430]
,index: 2
}
]
}
