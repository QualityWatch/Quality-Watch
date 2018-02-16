/* Created by JMorris on 15/02/2018 14:40:34 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of community nurses changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Number of community nurses (FTE)'}
, max: 44000
, min: 34000
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Community nurses',
type: 'line',
data: [41351.3,41549.2,41708.6,41674.6,41948,41881.7,42011.4,41711.3,41555.1,41594.3,41554.1,41516.4,41388,41159.7,41245.1,41156.5,41187,41262.6,41179.5,40547.5,40404.5,40301,40038.2,39961.4,40281.1,39836.1,39601.6,39389.8,39429.2,38212.8,38387.2,38496.8,37048.7,36898.4,36804.9,36671.9,37092.5,36730.6,36780,36590.9,36834.4,37077.4,37251,36646.7,36552.3,36536.2,36460.3,36304.8,36705.3,36490.3,36413.1,36290.7,36720.4,36529.8,36604.7,36447.9,36385.6,36358.4,36247.5,36128.5,36435.6,36219.7,36083.8,36074.2,35955.4,35937.1,36017.7,35850.1,35673,35654.4,35510.6,35385,35726.1,36009.4,36134.5,35973.3,36226.1,36411.3,36260.1,36322.1,36212.6,36099.8,35901.2,35911.5,35845.8,35811.1,35852.2,35436.5,35489,35403.7,35441.9,35213.9,35192.2,35228.9,35031.7,34879.9,35404.2]
,index: 1
}
]
}
