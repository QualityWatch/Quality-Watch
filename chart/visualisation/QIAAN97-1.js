/* Created by ianb on 01/10/2014 11:56:37 using v2.1 */{
title: {text:'National Absence Rate'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have NHS staff sickness absence rates changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:''}
, min: 3
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'England',
type: 'line',
data: [3.953,4.024,4.117,4.657,4.261,4.201,4.706,4.764,4.647,4.813,4.448,4.223,3.907,3.906,3.916,3.978,3.825,4.089,4.312,4.35,4.961,4.657,4.081,3.925,3.73,3.689,3.898,3.969,3.916,4.033,4.247,4.421,4.393,4.459,4.481,4.175,3.999,4.12,3.929,4.148,4.003,4.03,4.401,4.492,4.607,4.725,4.326,4.078,3.981,3.785,3.8,3.875,3.808,3.942,4.177,4.238,4.348,4.444,4.305,4.042,3.95]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'England trendline',
data: [[0, 4.285],[60, 4.104]]
}
]
}
