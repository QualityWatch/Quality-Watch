/* Created by ianb on 21/07/2014 16:45:27 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How long to people wait for treatment to begin?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Time to treatment (minutes)'}
, labels: {
}},
series:[
{
name: 'Median',
type: 'line',
data: [57,56,53,47,53,54,51,50,49,54,55,51,53,55,54,49,53,53,53,55,50,54,57,56,51,51,53,48,50,51,50,50,47,52,56]
,index: 1
},
{
name: '95th Percentile',
type: 'line',
data: [195,191,186,182,188,189,181,188,185,192,188,189,191,194,192,181,184,184,182,192,184,185,195,200,187,180,185,182,183,180,180,184,174,183,180]
,index: 2
}
]
}
