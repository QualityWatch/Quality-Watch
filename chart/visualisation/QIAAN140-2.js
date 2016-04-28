/* Created by NCODowd on 21/04/2016 10:39:08 using v2.7 *//* Created by NCODowd on 21/04/2016 10:37:16 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have alcohol related deaths changed in different age and sex groups?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Age-standardised alcohol-related <br> death rates (with 95 per cent confidence <br> limits) by sex, United Kingdom, <br> deaths registered 1994 to 2014', offset: 111}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Male',
type: 'line',
data: [12.2,13.5,14.4,15.9,17,17.6,17.9,19.5,19.8,21,20.7,21,21.4,21,21.7,20.3,20.7,20.3,19.1,19.1,19.4]
,index: 1
},{name: 'Error', type: 'errorbar', data: [[11.7,12.6],[13.1,14],[13.9,14.9],[15.4,16.4],[16.4,17.5],[17,18.1],[17.3,18.4],[18.9,20],[19.3,20.4],[20.4,21.6],[20.1,21.2],[20.5,21.6],[20.9,22],[20.5,21.6],[21.2,22.3],[19.8,20.9],[20.2,21.2],[19.8,20.8],[18.5,19.6],[18.6,19.6],[18.9,19.9]]},
{
name: 'Female',
type: 'line',
data: [6.3,7,7.3,7.9,8.2,8.6,8.7,9.2,9.4,9.6,9.8,9.8,10.3,10.2,10.3,9.9,9.7,9.7,9.4,9.1,9.6]
,index: 2
},{name: 'Error', type: 'errorbar', data: [[6,6.6],[6.6,7.3],[7,7.6],[7.5,8.2],[7.8,8.5],[8.3,9],[8.4,9.1],[8.9,9.6],[9,9.8],[9.3,10],[9.4,10.2],[9.4,10.2],[9.9,10.7],[9.9,10.6],[9.9,10.7],[9.6,10.3],[9.3,10],[9.3,10],[9,9.7],[8.8,9.5],[9.2,9.9]]}
]
}