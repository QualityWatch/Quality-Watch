/* Created by JMorris on 13/02/2018 12:56:57 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of Category A (Red 1 and 2) calls attended within 8 minutes changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Percentage of Category A calls responded <br> to within eight minutes', offset: 87}
, min: 50
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'All Category A',
type: 'line',
data: [76.9,77,75.5,76.6,77.5,75.7,76,77.1,74.1,77.9,73.9,75.5,76.2,74.8,77.4,77.3,78,75.8,76.4,75.9,70.8,75.6,75.3,73.8,76,77.8,77.1,74.1,75.5,73.9,73.7,73.1,71.8,76.4,74.1,74.8,73.8,72.6,70.8,68.9,71.1,70.1,70,68.6,61.3,67.8,67.8,69.8,72.5,73.4,71.5,70.7,69.9,69,69,67.6,67.5,63.7,60.7,58.4,65.7,65.4,63.3,60.8,64.5,62.7,63.4,63.6,59.1,58.9,62.1,64.7,66.6,63.9,62.2,60.9,62.1,59]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'All Category A trendline',
data: [[0, 79.6],[77, 61.8]]
},
{
name: 'Red 1',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,75.6,75.3,75.1,75.1,74.9,73.2,70.4,73.5,74.1,73.4,75.4,77.9,77.4,75.5,77,75.1,74.6,74.1,72.8,76.4,75.2,76.2,75.5,73.4,72.5,70.9,73.2,72.7,72.2,71.8,66,71.6,72.1,73.4,75.7,77,75,74.7,73.9,73,73.5,72.1,72.7,69.9,68,66.5,71.2,70.4,69.1,67.4,70.1,68.1,67.2,67.7,66.4,66.8,69.3,70.7,73,70.5,68.8,67.9,69.7,66.3]
,index: 2
},
{
name: 'Red 2',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,77.5,77.4,78.1,75.9,76.5,76,70.8,75.8,75.3,73.8,76,77.8,77.1,74.1,75.4,73.8,73.7,73,71.8,76.4,74.1,74.8,73.7,72.6,70.8,68.8,70.9,70,69.9,68.4,61,67.6,67.6,69.6,72.3,73.2,71.3,70.5,69.7,68.8,68.8,67.4,67.2,63.4,60.3,58,65.4,65.1,63,60.5,64.3,62.4,63.2,63.4,58.7,58.4,61.7,64.3,66.2,63.5,61.8,60.5,61.8,58.6]
,index: 3
},
{
name: 'Eight minute target',
type: 'line',
data: [75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75]
,index: 4
}
]
}
