/* Created by EFisher on 20/12/2017 15:35:25 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of category A (Red 1 and 2) calls attended within 8 minutes varied by commissioning region?'},
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
, min: 40
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'England',
visible: true,type: 'line',
data: [76.9,77,75.5,76.6,77.5,75.7,76,77.1,74.1,77.9,73.9,75.5,76.2,74.8,77.4,77.3,78,75.8,76.4,75.9,70.8,75.6,75.3,73.8,76,77.8,77.1,74.1,75.5,73.9,73.7,73.1,71.8,76.4,74.1,74.8,73.8,72.6,70.8,68.9,71.1,70.1,70,68.6,61.3,67.8,67.8,69.8,72.5,73.4,71.5,70.7,69.9,69,69,67.6,67.5,63.7,60.7,58.4,65.7,65.4,63.3,60.8,64.5,62.7,63.4,63.6,59.1,58.9,62.1,64.7,66.6,63.9,62.2,60.9,62.1,59]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'England trendline',
data: [[0, 79.6],[77, 61.8]]
},
{
name: 'London',
visible: false,type: 'line',
data: [77.9,76.6,74.3,76.9,77.9,73.5,75.5,76.6,72.4,79.1,74.2,74.5,72.5,68.9,76.4,77.8,81.9,74.2,75.3,73.9,67.6,79.8,79.4,78.5,76.2,78,76.2,73.8,74.4,71.2,70.2,71.2,71.9,80.3,80.2,80.9,71,69.3,64.3,61,62.1,54.3,57.7,55.2,48.1,60.1,59,59.2,65.6,67.3,66.1,67,65.9,62.8,65.6,64.5,66.6,61.1,56.6,58.2,65.1,65.6,65.8,64.1,68.9,64.8,67.6,67.5,64.1,62.4,67.8,73.6,73.8,71.9,69.8,68.6,72.1,68.6]
,index: 2
},
{
name: 'Midlands & East',
visible: false,type: 'line',
data: [76.2,77.1,75.6,76.5,76.6,75.5,75.9,75.9,74.1,76.9,72.7,75.6,76.5,75,76.3,76.6,76.5,75.2,76.5,76.1,71,74.7,73.7,70.7,73.7,76.2,75.2,71.7,73.3,71.5,70.5,70.1,68.4,72.5,69.1,70.7,72.4,71.7,70.5,69,70.5,70.8,69.8,69.9,63.6,68.8,69.3,71.7,74.8,74.1,71.9,70.4,68.9,67.6,66.7,65.6,65.5,62.3,59.8,57,63.5,64.6,59.7,57,62.2,61,61.7,62.9,57.6,58.1,60.9,63.2,62.4,60.9,59.1,56.6,58.2,57.5]
,index: 3
},
{
name: 'North',
visible: false,type: 'line',
data: [77,76.9,75.8,76.6,78.7,76.7,76.1,77.9,74.5,78.8,74.8,75.8,77.3,76.3,79,77.9,77.5,76.7,76.5,76,70.6,74.9,75.3,76.2,78.6,79.7,80.2,77.4,78.5,76.3,76.4,75.5,74.3,77.5,74.9,74.7,73.7,73.5,72.2,69.6,72.4,72.8,73.1,70.7,60.6,68,69.4,69.8,73.3,77.3,74.9,74.1,72.8,73.1,71.6,69.6,68.6,65.8,64.8,63.2,69.8,67.7,66.5,63.4,65.6,63.2,62.8,61.3,56.5,57.6,59.8,63,66.9,62.7,62.7,61.4,57.2,54.8]
,index: 4
},
{
name: 'South',
visible: false,type: 'line',
data: [77.1,77.2,75.6,76.6,77.1,76.1,76.4,78,74.7,77.1,73.9,75.8,77,76.5,77.5,77.2,77.9,76.7,77,76.7,72.9,75,74.5,71.6,75.6,77.6,76.5,73.7,75.3,75.6,76.7,75.1,73.2,77.4,75.5,76.3,77.6,74.7,73.9,73.1,75.6,76.1,74.6,73,67.4,71,69.5,74,72.9,71.6,70.3,69.4,70,69.8,71,69.6,69.5,64.5,59.5,54.9,64.2,63.7,61.8,59.3,61.8,61.9,62.2,63.6,59.6,58.1,60.9,60.2,64.6,61.3,58.1,57.1,57,52.3]
,index: 5
},
{
name: 'eight minute target',
visible: false,type: 'line',
data: [75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75]
,index: 6
}
]
}
