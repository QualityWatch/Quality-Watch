/* Created by EFisher on 25/02/2014 18:25:07 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What\'s happening to people waiting the longest (over 52 weeks)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Proportion of those referred waiting <br> more than 52 weeks for treatment', offset: 87}
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [1.315,1.271,1.274,1.312,1.285,1.308,0.984,0.925,0.879,0.896,0.799,0.764,0.841,0.717,0.709,0.737,0.786,0.519,0.554,0.537,0.608,0.6,0.609,0.585,0.543,0.493,0.52,0.763,0.762,0.774,0.434,0.293,0.255,0.25,0.237,0.213,0.17,0.129,0.132,0.11,0.078,0.059,0.049,0.044,0.042,0.033,0.026,0.018,0.014,0.015,0.01,0.013,0.012,0.013,0.009,0.008]
,index: 1
},
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [0.156,0.172,0.17,0.186,0.167,0.143,0.144,0.129,0.1,0.111,0.109,0.097,0.11,0.12,0.133,0.104,0.099,0.097,0.103,0.099,0.101,0.117,0.146,0.147,0.155,0.18,0.223,0.199,0.252,0.247,0.215,0.2,0.204,0.191,0.186,0.184,0.138,0.134,0.154,0.142,0.16,0.164,0.129,0.107,0.09,0.117,0.088,0.129,0.082,0.055,0.067,0.052,0.05,0.056,0.052,0.047]
,index: 2
},
{
name: 'Non-admitted RTT pathways',
type: 'line',
data: [0.184,0.148,0.151,0.136,0.162,0.204,0.15,0.132,0.116,0.108,0.092,0.111,0.11,0.121,0.091,0.09,0.09,0.076,0.123,0.106,0.115,0.101,0.133,0.116,0.118,0.136,0.12,0.135,0.119,0.124,0.12,0.126,0.13,0.129,0.126,0.121,0.081,0.076,0.07,0.076,0.062,0.06,0.072,0.054,0.04,0.035,0.036,0.03,0.026,0.024,0.031,0.023,0.021,0.019,0.024,0.015]
,index: 3
}
]
}
