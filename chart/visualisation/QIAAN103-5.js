/* Created by JMorris on 09/05/2018 14:37:39 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How long do people wait for treatment to begin?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017','Oct 2017','Nov 2017','Dec 2017','Jan 2018','Feb 2018']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Median waiting time (minutes)'}
, labels: {
}},
series:[
{
name: 'Median',
type: 'line',
data: [57,56,53,47,53,54,51,50,49,54,55,51,53,55,54,49,53,53,53,55,50,54,57,56,51,51,53,48,50,51,50,50,47,52,56,53,56,58,56,50,55,53,54,56,46,51,56,54,53,54,53,51,55,56,58,56,58,65,69,57,62,61,62,55,59,59,59,60,57,57,58,56,59,57,60,53,58,59,60,62,57,61]
,index: 1
},
{
name: '95th percentile',
type: 'line',
data: [195,191,186,182,188,189,181,188,185,192,188,189,191,194,192,181,184,184,182,192,184,185,195,200,187,180,185,182,183,180,180,184,174,183,180,182,186,188,188,185,192,186,188,200,181,184,191,188,182,182,181,182,186,191,197,200,207,217,223,205,205,204,207,195,199,202,203,217,216,208,205,210,213,207,213,204,205,203,207,230,223,227]
,index: 2
}
]
}
