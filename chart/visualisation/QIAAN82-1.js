/* Created by EFisher on 07/12/2017 14:53:46 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of abandoned ambulance calls changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr-11', 'May-11', 'Jun-11', 'Jul-11', 'Aug-11', 'Sep-11', 'Oct-11', 'Nov-11', 'Dec-11', 'Jan-12', 'Feb-12', 'Mar-12', 'Apr-12', 'May-12', 'Jun-12', 'Jul-12', 'Aug-12', 'Sep-12', 'Oct-12', 'Nov-12', 'Dec-12', 'Jan-13', 'Feb-13', 'Mar-13', 'Apr-13', 'May-13', 'Jun-13', 'Jul-13', 'Aug-13', 'Sep-13', 'Oct-13', 'Nov-13', 'Dec-13', 'Jan-14', 'Feb-14', 'Mar-14', 'Apr-14', 'May-14', 'Jun-14', 'Jul-14', 'Aug-14', 'Sep-14', 'Oct-14', 'Nov-14', 'Dec-14', 'Jan-15', 'Feb-15', 'Mar-15', 'Apr-15', 'May-15', 'Jun-15', 'Jul-15', 'Aug-15', 'Sep-15', 'Oct-15', 'Nov-15', 'Dec-15', 'Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16', 'Jul-16', 'Aug-16', 'Sep-16', 'Oct-16', 'Nov-16', 'Dec-16', 'Jan-17', 'Feb-17', 'Mar-17', 'Apr-17', 'May-17', 'Jun-17', 'Jul-17', 'Aug-17', 'Sep-17']
, labels: {
 rotation: -45
, step: 3
}
},
yAxis: [{
title: {text:'Proportion of abandoned ambulance calls'}
, tickInterval: 0.6
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
 {
 title: {text:'Number of call received (thousands)'}, opposite: true,    max: 2000
 }],
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of abandoned ambulance calls (left)',
 yAxis: 0,
 type: 'line',
data: [1.36, 0.99, 1.42, 1.14, 1.14, 1.25, 1.11, 0.94, 1.14, 1.21, 1.2, 1.16, 0.9, 1.43, 1.01, 1.37, 2.28, 1.74, 1.2, 1.1, 2.26, 1.41, 1.09, 1.31, 1.07, 1.03, 1.21, 1.81, 1.34, 1.07, 1.02, 1.11, 1.19, 1.03, 1.12, 0.87, 0.92, 1.06, 1.5, 2.21, 1.39, 1.65, 1.31, 1.27, 1.9, 0.82, 0.85, 0.69, 0.46, 0.43, 0.52, 0.55, 0.66, 0.5, 0.53, 0.61, 0.51, 0.61, 0.77, 1.28, 0.73, 1.11, 1.14, 1.63, 1.18, 1.23, 1.6, 1.48, 2.22, 1.55, 0.91, 0.84, 0.74, 1.04, 1.75, 1.76, 1.28, 1.11]
,index: 3
},
{
type: 'line',
 yAxis:0,
marker: {fillColor: 'none', lineColor: null },
name: 'Proportion of calls abandoned (left) trendline',
data: [[0,1.26],[77,1.08]]
,index: 2
},
{
tooltip: {valueSuffix: ''},
name: 'Number of calls received (right)',
yAxis:1,
type: 'column',
data: [633.54, 622.42, 633.86, 688.923, 662.401, 677.2, 700.073, 661.334, 750.597, 691.563, 701.85, 733.892, 685.416, 741.536, 614.241, 641.541, 715.299, 714.006, 735.309, 719.17, 828.194, 737.321, 662.874, 749.992, 700.054, 692.813, 680.286, 765.618, 709.834, 693.413, 723.049, 704.034, 749.012, 691.68, 649.998, 725.977, 716.652, 760.604, 758.614, 806.856, 737.389, 741.204, 769.653, 759.591, 870.738, 756.887, 628.898, 694.188, 707.709, 741.183, 756.899, 782.122, 777.543, 759.173, 801.122, 783.309, 819.183, 821.938, 792.642, 861.853, 745.032, 806.354, 791.434, 853.493, 797.871, 788.081, 839.724, 819.12, 912.924, 857.464, 750.099, 812.897, 772.747, 845.674, 845.473, 856.262, 852.798, 876.723]
,index: 1
}
]
}