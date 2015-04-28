{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many days in total are patients delayed and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Total number of delayed days'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Whole period',
type: 'line',
data: [109918,115855,113246,113091,116466,114346,112386,123130,108064,113364,117075,115517,117297,117194,116878,114705,112096,111934,109532,119736,108482,119331,110348,117200,120094,114264,116881,116169,107652,125716,109180,115158,113297,120550,112984,111951,122337,118864,123852,116932,112629,124289,112845,123061,116278,126854,124124,133724,137954,138068,143118,139658,139156,151093,134508]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Whole period trendline',
data: [[0, 107975],[54, 130129.2]]
},
{
name: 'Since April 2014',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,116278,126854,124124,133724,137954,138068,143118,139658,139156,151093,134508]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Since April 2014 trendline',
data: [[44, 121308.6],[54, 146332]]
}
]
}