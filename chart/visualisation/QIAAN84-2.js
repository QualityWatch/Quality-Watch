/* Created by JMorris on 28/11/2017 12:02:12 using v2.7 *//* Created by JMORRIS on 28/11/2017 using v2.7 */
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
'Aug-10','Sep-10','Oct-10','Nov-10','Dec-10','Jan-11','Feb-11','Mar-11','Apr-11','May-11','Jun-11','Jul-11','Aug-11','Sep-11','Oct-11','Nov-11','Dec-11','Jan-12','Feb-12','Mar-12','Apr-12','May-12','Jun-12','Jul-12','Aug-12','Sep-12','Oct-12','Nov-12','Dec-12','Jan-13','Feb-13','Mar-13','Apr-13','May-13','Jun-13','Jul-13','Aug-13','Sep-13','Oct-13','Nov-13','Dec-13','Jan-14','Feb-14','Mar-14','Apr-14','May-14','Jun-14','Jul-14','Aug-14','Sep-14','Oct-14','Nov-14','Dec-14','Jan-15','Feb-15','Mar-15','Apr-15','May-15','Jun-15','Jul-15','Aug-15','Sep-15','Oct-15','Nov-15','Dec-15','Jan-16','Feb-16','Mar-16','Apr-16','May-16','Jun-16','Jul-16','Aug-16','Sep-16','Oct-16','Nov-16','Dec-16','Jan-17','Feb-17','Mar-17','Apr-17','May-17','Jun-17','Jul-17','Aug-17','Sep-17']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Total number of delayed days (thousands)'},
max: 220,
min: 80,
tickInterval: 20,
labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Aug-10 to Apr-14',
type: 'line',
data: [109.918, 115.855, 113.246, 113.091, 116.466, 114.346, 112.386, 123.13, 108.064, 113.364, 117.075, 115.517, 117.297, 117.194, 116.878, 114.705, 112.096, 111.934, 109.532, 119.736, 108.482, 119.331, 110.348, 117.2, 120.094, 114.264, 116.881, 116.169, 107.652, 125.716, 109.18, 115.158, 113.297, 120.55, 112.984, 111.951, 122.337, 118.864, 123.852, 116.932, 112.629, 124.289, 112.845, 123.061, 116.261],
tooltip: {valueSuffix: ' (thousands)'},
zIndex: 1
},
{
name: 'Apr-14 onwards',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,116.261, 126.779, 124.118, 133.903, 137.613, 138.267, 142.927, 140.949, 139.025, 150.392, 134.353, 140.39, 138.03, 137.115, 139.538, 147.376, 145.093, 147.738, 160.13, 153.155, 154.008, 159.467, 158.055, 169.882, 168.018, 172.294, 173.122, 184.578, 187.851, 196.57, 200.095, 193.206, 195.445, 197.511, 186.49, 199.641, 176.945, 178.204, 178.042, 181.888, 180.065, 168.302],
tooltip: {valueSuffix: ' (thousands)'},
zIndex: 2
},
]
}