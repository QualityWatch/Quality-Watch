/* Created by EFisher on 17/02/2016 18:38:41 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What\'s happening to people waiting the longest for treatment (over 52 weeks)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015']
, labels: {
 rotation: -90
, step: 3
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
name: 'Number of people (right axis)',
type: 'line',
data: [2079200,2073700,1868100,1849400,2109800,1845800,1822100,1958500,2085500,1344200,1425400,1356800,1467100,1422200,1488000,1435500,1343400,1253600,1325700,1993700,1993800,2009700,1113200,732400,607100,589800,565300,514900,421300,330800,347800,295900,205400,157000,128100,114700,108500,84200,66300,47300,39100,43400,29500,36800,35000,38700,25700,21400,31600,43000,53900,48800,51600,57200,59400,53200,49000,36200,38100,36200,39900,44000,44200,47500,41300,63400,75100,78600,73900,75600,86700,83400,75500]
,index: 1
},
{
name: 'Proportion of people (left axis)',
type: 'line',
data: [0.879,0.896,0.799,0.764,0.841,0.717,0.709,0.737,0.786,0.519,0.554,0.537,0.608,0.6,0.609,0.585,0.543,0.493,0.52,0.763,0.762,0.774,0.434,0.293,0.255,0.25,0.237,0.213,0.17,0.129,0.132,0.11,0.078,0.059,0.049,0.044,0.042,0.033,0.026,0.018,0.014,0.015,0.01,0.013,0.012,0.013,0.009,0.007,0.011,0.015,0.019,0.017,0.017,0.018,0.019,0.017,0.016,0.012,0.013,0.012,0.014,0.015,0.015,0.016,0,0,0,0,0,0,0,0,0]
,index: 1
}
]
}
