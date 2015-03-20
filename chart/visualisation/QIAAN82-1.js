/* Created by ianb on 20/03/2015 10:34:26 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of abandoned ambulance calls changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Proportion of abandoned ambulance calls'}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of calls abandoned (left)',
type: 'line',
data: [1.36,0.99,1.42,1.14,1.14,1.25,1.11,0.94,1.14,1.21,1.2,1.16,0.9,1.43,1.01,1.37,2.28,1.74,1.2,1.1,2.26,1.41,1.09,1.31,1.07,1.03,1.21,1.81,1.34,1.07,1.02,1.11,1.19,1.03,1.12,0.87,0.91,1.06,1.5,2.21,1.39,1.74,1.3,1.26,1.87]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Proportion of calls abandoned (left) trendline',
data: [[0, 1.19],[44, 1.39]]
},
{
name: 'Number of calls (right)',
type: 'line',
data: [63353800,62242200,63385500,68892300,66240100,67720000,70007300,66133400,75059700,69156300,70185000,73389200,68541600,74153600,61424100,64154100,71529900,71400600,73530900,71917000,82819400,73732100,66287400,74999200,70005400,69281300,68028600,76561800,70983400,69341300,72304900,70403400,74901200,69168000,64999800,72597700,71667600,76063400,75904300,80822300,73741300,67116600,77445400,77054900,88374100]
,index: 1
}
]
}
