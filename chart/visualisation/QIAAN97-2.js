/* Created by ianb on 01/10/2014 11:56:41 using v2.1 */{
title: {text:'Absence Rate by Organisation Type'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did NHS staff sickness rates vary by trust type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:''}
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Acute',
type: 'line',
data: [4.573,4.198,4.002,3.703,3.678,3.676,3.734,3.588,3.825,4.033,4.059,4.686,4.362,3.838,3.712,3.501,3.468,3.674,3.741,3.673,3.77,4.017,4.156,4.138,4.223,4.253,3.972,3.798,3.9,3.726,3.935,3.795,3.812,4.178,4.247,4.34,4.458,4.086,3.883,3.774,3.557,3.581,3.654,3.587,3.73,3.95,4.005,4.093,4.206,4.071,3.836,3.733]
,index: 1
},
{
name: 'Ambulance',
visible: false,type: 'line',
data: [6.332,6.018,5.839,5.569,5.398,5.288,5.41,5.404,5.356,5.43,5.667,6.892,6.71,5.54,5.302,5.367,5.198,5.327,5.55,5.676,5.645,5.917,6.091,6.449,6.199,6.089,5.656,5.541,5.73,5.594,5.764,5.758,5.759,5.845,6.227,7.118,6.935,6.306,6.001,5.853,5.719,5.571,5.496,5.576,5.371,5.389,5.451,6.347,6.448,6.397,6.183,6.108]
,index: 2
},
{
name: 'Community Provider Trust',
visible: false,type: 'line',
data: [4.326,3.951,3.936,3.795,4.185,4.162,4.354,4.047,4.47,4.947,4.863,5.393,5.099,4.427,4.529,4.081,4.2,4.486,4.365,4.07,4.287,4.559,4.778,4.792,4.863,4.874,4.653,4.374,4.484,4.23,4.518,4.296,4.323,4.905,5.038,5.122,5.24,4.831,4.512,4.447,4.205,4.302,4.296,4.189,4.33,4.618,4.751,4.806,4.756,4.598,4.352,4.31]
,index: 3
},
{
name: 'Mental Health and Learning Disability',
visible: false,type: 'line',
data: [5.672,5.203,4.918,4.6,4.659,4.72,4.772,4.691,4.976,5.187,5.182,5.729,5.439,4.798,4.642,4.436,4.381,4.633,4.75,4.709,4.899,5.06,5.27,5.188,5.212,5.215,4.774,4.605,4.794,4.584,4.839,4.69,4.751,5.123,5.256,5.354,5.532,5.005,4.721,4.651,4.481,4.408,4.515,4.439,4.619,4.949,5.013,5.129,5.187,4.964,4.566,4.526]
,index: 4
},
{
name: 'Primary Care Trust',
visible: false,type: 'line',
data: [4.83,4.548,4.254,3.882,3.937,3.946,4.025,3.806,4.168,4.448,4.514,5.015,4.743,4.154,3.884,3.737,3.706,3.908,3.945,3.875,4.04,4.035,4.35,4.202,3.956,3.992,3.638,3.136,3.209,2.885,3.083,2.945,2.989,3.262,3.34,3.279,3.397,3.08,2.436,3.796,3.399,2.681,3.128,3.524,3.017,2.658,2.131,2.15,2.145,2.15,2.15,2.15]
,index: 5
},
{
name: 'Special Health Authority',
visible: false,type: 'line',
data: [4.287,4.006,3.833,3.374,3.35,3.403,3.299,3.119,3.443,3.827,4.075,4.616,4.432,3.758,3.626,3.336,3.182,3.315,3.319,3.287,3.354,3.385,3.709,3.614,3.608,3.799,3.749,3.611,3.773,3.415,3.474,3.257,3.314,3.679,3.689,3.759,3.85,3.554,3.279,2.661,2.788,2.937,3.325,3.206,3.265,3.452,3.491,3.393,3.645,3.813,3.497,3.244]
,index: 6
},
{
name: 'Clinical Commissioning Group',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2.069,1.483,1.672,1.798,1.966,1.955,2.181,2.418,2.452,2.41,2.65,2.657,2.443,2.224]
,index: 7
},
{
name: 'Commissioning Support Unit',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.688,1.9,2.335,2.622,2.562,2.639,3.137,3.031,2.995,3.025,3.121,3.043,2.989]
,index: 8
},
{
name: 'England',
visible: false,type: 'line',
data: [4.813,4.448,4.223,3.907,3.906,3.916,3.978,3.825,4.089,4.312,4.35,4.961,4.657,4.081,3.925,3.73,3.689,3.898,3.969,3.916,4.033,4.247,4.421,4.393,4.459,4.481,4.175,3.999,4.12,3.929,4.148,4.003,4.03,4.401,4.492,4.607,4.725,4.326,4.078,3.981,3.785,3.8,3.875,3.808,3.942,4.177,4.238,4.348,4.444,4.305,4.042,3.95,null]
,index: 9
}
]
}
