/* Created by NCODowd on 16/11/2016 17:22:22 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of community VTE changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Proportion of patients in a community <br> setting with an incidence of Venous <br> Thromboembolism (VTE)', offset: 99}
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'VTE, community setting',
type: 'line',
data: [0.378,0.405,0.436,0.343,0.37,0.474,0.33,0.391,0.344,0.405,0.325,0.29,0.326,0.333,0.296,0.308,0.285,0.229,0.265,0.219,0.278,0.251,0.302,0.295,0.253,0.185,0.233,0.216,0.172,0.232,0.198,0.197,0.225,0.22,0.237,0.193,0.204,0.161,0.192,0.168,0.2,0.199,0.203,0.182,0.207,0.19,0.188,0.193,0.149,0.184,0.157,0.177]
,index: 1
}
]
}
