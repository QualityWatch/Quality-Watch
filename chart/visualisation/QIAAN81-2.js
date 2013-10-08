/* Created by ianb on 08/10/2013 13:52:19 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the average waiting times for diagnostic tests changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan 2006','Feb 2006','Mar 2006','Apr 2006','May 2006','Jun 2006','Jul 2006','Aug 2006','Sep 2006','Oct 2006','Nov 2006','Dec 2006','Jan 2007','Feb 2007','Mar 2007','Apr 2007','May 2007','Jun 2007','Jul 2007','Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'The median number of weeks it took <br> for a diagnostic test', offset: 87}
, labels: {
}},
series:[
{
name: 'Median',
type: 'line',
data: [4.7,6.5,4.9,6.1,5.7,5.4,5.3,5.6,5.2,5.2,4.8,5.5,4.7,4.2,3.9,4.1,3.8,3.4,3.3,3.4,2.8,2.7,2.4,3,2,1.9,2.1,1.7,1.8,1.7,1.7,1.9,1.7,1.7,1.6,2.2,1.5,1.6,1.7,1.6,1.9,1.7,1.7,1.8,1.6,1.7,1.7,2.3,1.6,1.7,1.7,1.7,1.8,1.7,1.8,1.9,1.7,1.8,1.8,2.4,1.6,1.8,1.8,2.3,1.9,1.8,1.8,2,1.8,1.8,1.8,2.3,1.7,1.8,1.8,1.7,1.8,1.8,1.9,2,1.8,1.9,1.8,2.4,1.7,1.8,2,1.8,2,1.9]
,index: 1
}
]
}
