/* Created by EFisher on 25/02/2014 18:18:11 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the median time spent in A&E changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Median number of minutes spent in A&E'}
, max: 230
, min: 90
, labels: {
}},
series:[
{
name: 'All patients',
type: 'line',
data: [129,129,125,121,128,128,127,130,128,134,130,127,127,127,126,122,127,129,131,136,131,135,137,135,127,126,128,125,129]
,index: 1
},
{
name: 'Non-admitted patients',
type: 'line',
data: [110,110,108,101,109,109,107,106,105,111,110,106,108,108,107,102,107,108,110,112,108,112,115,113,107,107,109,104,108]
,index: 2
},
{
name: 'Admitted patients',
type: 'line',
data: [213,213,209,210,215,215,215,219,220,225,218,219,217,217,215,216,219,221,221,226,226,227,229,228,215,215,217,218,221]
,index: 3
}
]
}
