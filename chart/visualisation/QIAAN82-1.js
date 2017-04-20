/* Created by NCODowd on 16/11/2016 16:53:59 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of abandoned ambulance calls changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011', 'May 2011', 'Jun 2011', 'Jul 2011', 'Aug 2011', 'Sep 2011', 'Oct 2011', 'Nov 2011', 'Dec 2011', 'Jan 2012', 'Feb 2012', 'Mar 2012', 'Apr 2012', 'May 2012', 'Jun 2012', 'Jul 2012', 'Aug 2012', 'Sep 2012', 'Oct 2012', 'Nov 2012', 'Dec 2012', 'Jan 2013', 'Feb 2013', 'Mar 2013', 'Apr 2013', 'May 2013', 'Jun 2013', 'Jul 2013', 'Aug 2013', 'Sep 2013', 'Oct 2013', 'Nov 2013', 'Dec 2013', 'Jan 2014', 'Feb 2014', 'Mar 2014', 'Apr 2014', 'May 2014', 'Jun 2014', 'Jul 2014', 'Aug 2014', 'Sep 2014', 'Oct 2014', 'Nov 2014', 'Dec 2014', 'Jan 2015', 'Feb 2015', 'Mar 2015', 'Apr 2015', 'May 2015', 'Jun 2015', 'Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015', 'Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017'
]
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: [{title: {text:'Proportion of abandoned ambulance calls'} 
, labels: {format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
 {
 title: {text:'Total number of calls received'}, opposite: true, max: 2500000
 }],
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of calls abandoned (left)',
 yAxis: 0,
 type: 'line',
data: [1.36, 0.99, 1.42, 1.14, 1.14, 1.25, 1.11, 0.94, 1.14, 1.21, 1.2, 1.16, 0.9, 1.43, 1.01, 1.37, 2.28, 1.74, 1.2, 1.1, 2.26, 1.41, 1.09, 1.31, 1.07, 1.03, 1.21, 1.81, 1.34, 1.07, 1.02, 1.11, 1.19, 1.03, 1.12, 0.87, 0.92, 1.06, 1.5, 2.21, 1.39, 1.65, 1.31, 1.27, 1.9, 0.82, 0.85, 0.69, 0.48, 0.44, 0.53, 0.55, 0.66, 0.50, 0.53, 0.61, 0.51, 0.61, 0.77, 1.28, 0.73, 1.11, 1.14, 1.63, 1.18, 1.22,1.6,1.48,2.22,1.31]
},
{
type: 'line',
 yAxis:0,
marker: {fillColor: 'none', lineColor: null },
name: 'Proportion of calls abandoned (left) trendline',
data: [[0, 1.4],[65, 1.22]]
},
{
name: 'Number of calls (right)',
yAxis:1,
type: 'column',
data: [633538, 622422, 633855, 688923, 662401, 677200, 700073, 661334, 750597, 691563, 701850, 733892, 685416, 741536, 614241, 641541, 715299, 714006, 735309, 719170, 828194, 737321, 662874, 749992, 700054, 692813, 680286, 765618, 709834, 693413, 723049, 704034, 749012, 691680, 649998, 725977, 716652, 760604, 758614, 806856, 737389, 741204, 769653, 759591, 870738, 756887, 628898, 694188, 653006, 741171, 756888, 782122, 777543, 759173, 801122, 783309, 819183, 821938, 792642, 861853, 745032, 806354, 791434, 853493, 797871, 788748,839724,819120,919924,840302]
}
]
}
