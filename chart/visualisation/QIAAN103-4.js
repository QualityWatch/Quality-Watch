/* Created by EFisher on 03/12/2015 13:04:49 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the median time spent in A&E changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Median number of minutes spent in A&E'}
, max: 250
, min: 90
, labels: {
}},
series:[
{
name: 'Admitted patients',
type: 'line',
data: [213,213,209,210,215,215,215,219,220,225,218,219,217,217,215,216,219,221,221,226,226,227,229,228,215,215,217,218,221,220,220,222,223,226,223,224,224,223,224,223,227,228,229,235,233,232,231,228,225,224,223]
,index: 1
},
{
name: 'Non-admitted patients',
type: 'line',
data: [110,110,108,101,109,109,107,106,105,111,110,106,108,108,107,102,107,108,110,112,108,112,115,113,107,107,109,104,108,109,109,110,106,111,115,112,115,116,114,108,115,114,116,119,109,114,119,115,115,116,114]
,index: 2
},
{
name: 'All patients',
type: 'line',
data: [129,129,125,121,128,128,127,130,128,134,130,127,127,127,126,122,127,129,131,136,131,135,137,135,127,126,128,125,129,129,131,133,130,134,136,133,135,135,133,130,136,137,139,145,135,139,141,137,136,136,134]
,index: 3
},
{
name: 'Target',
type: 'line',
data: [240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240]
,index: 4
}
]
}
