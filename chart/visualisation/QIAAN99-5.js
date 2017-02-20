/* Created by rreed on 20/02/2017 12:58:40 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
legend: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the numbers of health visitors changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Number of health visitors (FTE)'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Health visitors',
type: 'line',
data: [8100,8056.3,8069.7,8029.9,8003.6,7984.7,7963.2,7918.5,7878.7,7815.6,7752.8,7695.8,7849.1,7919.4,7961.3,7929.9,7906.2,7939.4,7846.3,7668.2,7681.4,7642.9,7546.2,7506.7,7802.1,7819.8,7812,7808.4,7872.3,7706.9,7697.3,7745.6,7474.8,7393.2,7386.9,7374.5,7686.6,7909.8,7962.9,7985.9,8025.1,8032.1,8028.6,8109.6,8111.4,8083.6,8066.5,8005.7,8304.5,8395.4,8526,8552.6,8706.6,8831.7,8926.5,8947.5,8927.1,8887.3,8828.2,8765.5,9162.5,9481.2,9628.5,9639.4,9889.2,10074.7,10256.5,10185.3,10111.4,10041.9,9943.1,9927.6,10235.5,10308.7,10278.7,10212.5,10213.2,10178.5,10143.9,9710.6,9592.2,9491,9385.2,9311.4,9521,9409.9]
,index: 1
}
]
}
