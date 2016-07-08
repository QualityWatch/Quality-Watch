/* Created by NCODowd on 05/07/2016 10:16:03 using v2.7 *//* Created by NCODowd on 28/06/2016 17:02:09 using v2.7 */
/* Created by EFisher on 17/02/2016 13:28:15 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many days in total are patients delayed and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [
'Aug-10','Sep-10','Oct-10','Nov-10','Dec-10','Jan-11','Feb-11','Mar-11','Apr-11','May-11','Jun-11','Jul-11','Aug-11','Sep-11','Oct-11','Nov-11','Dec-11','Jan-12','Feb-12','Mar-12','Apr-12','May-12','Jun-12','Jul-12','Aug-12','Sep-12','Oct-12','Nov-12','Dec-12','Jan-13','Feb-13','Mar-13','Apr-13','May-13','Jun-13','Jul-13','Aug-13','Sep-13','Oct-13','Nov-13','Dec-13','Jan-14','Feb-14','Mar-14','Apr-14','May-14','Jun-14','Jul-14','Aug-14','Sep-14','Oct-14','Nov-14','Dec-14','Jan-15','Feb-15','Mar-15','Apr-15','May-15','Jun-15','Jul-15','Aug-15','Sep-15','Oct-15','Nov-15','Dec-15', 'Jan-16','Feb-16','Mar-16','Apr-16']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Total number of delayed days'}
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Whole period',
type: 'line',
data: [109918, 115855, 113246, 113091, 116466, 114346, 112386, 123130, 108064, 113364, 117075, 115517, 117297, 117194, 116878, 114705, 112096, 111934, 109532, 119736, 108482, 119331, 110348, 117200, 120094, 114264, 116881, 116169, 107652, 125716, 109180, 115158, 113297, 120550, 112984, 111951, 122337, 118864, 123852, 116932, 112629, 124289, 112845, 123061, 116261, 126779, 124118, 133903, 137613, 138267, 142927, 140949, 139025, 150392, 134353, 140390, 138030, 137115, 139538, 147005, 145067, 147738, 160130,153155,154008,159641,158131,169928,167677]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Whole period trendline',
data: [[0, 102952],[68, 148887]]
},
{
name: 'Since April 2014',
type: 'line',
data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 116261, 126779, 124118, 133903, 137613, 138267, 142927, 140949, 139025, 150392, 134353, 140390, 138030, 137115, 139538, 147005, 145067, 147738,160130,153155,154008,159641,158131,169928,167677]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Since April 2014 trendline',
data: [[44, 125104],[68, 163103]]
}
]
}