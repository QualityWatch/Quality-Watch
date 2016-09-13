/* Created by NCODowd on 13/09/2016 11:07:27 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the rates of employment in England?'},
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
title: {text:'Rate of employment'}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'People with mental illness',
type: 'line',
data: [2850,2690,2660,2670,2750,2740,2810,2790,2830,2750,2860,2780,2750,2810,3020,2970,2960,2870,2810,2740,2900,3020,2970,3120,3260,3330,3240,3330,3510,3560,3610,3630,3720,3770,3890,3770,3830,3990,4010]
,index: 1
},
{
name: 'General population',
type: 'line',
data: [7330,7300,7230,7240,7310,7330,7300,7280,7290,7260,7170,7090,7120,7110,7040,7060,7140,7100,7060,7050,7070,7070,7060,7110,7190,7210,7130,7150,7220,7260,7270,7310,7350,7370,7350,7340,7430,7460,7430]
,index: 2
}
]
}
