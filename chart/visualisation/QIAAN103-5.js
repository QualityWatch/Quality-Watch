/* Created by EFisher on 05/04/2016 10:07:29 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How long do people wait for treatment to begin?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015']
, labels: {
 rotation: -90
, step: 2
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
data: [57,56,53,47,53,54,51,50,49,54,55,51,53,55,54,49,53,53,53,55,50,54,57,56,51,51,53,48,50,51,50,50,47,52,56,53,56,58,56,50,55,53,54,56,46,51,56,54,53,54,53,51,55,56,58]
,index: 1
},
{
name: '95th percentile',
type: 'line',
data: [195,191,186,182,188,189,181,188,185,192,188,189,191,194,192,181,184,184,182,192,184,185,195,200,187,180,185,182,183,180,180,184,174,183,180,182,186,188,188,185,192,186,188,200,181,184,191,188,182,182,181,182,186,191,197]
,index: 2
}
]
}
