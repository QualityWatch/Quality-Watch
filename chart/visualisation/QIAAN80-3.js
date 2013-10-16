/* Created by ianb on 14/10/2013 11:44:11 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the longest referral to treatment times changed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2007','May 2007','Jun 2007','Jul 2007','Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Referral to treatment (RTT) 95th <br> percentile (weeks) ', offset: 87}
, labels: {
}},
series:[
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,27.3,28.1,27.6,25.6,23.3,22.9,22.4,22.3,21.9,20.3,20,20.1,20,19.8,19.6,19.3,19.3,19.4,19.6,20,20.2,19.8,20.3,20.9,21.2,21.3,21.2,20,19.8,20,20.4,20.7,20.9,20.9,22.4,22.8,23.4,22.9,23.7,23.1,22.5,22.6,22.8,22,22.1,21.9,22.1,21.9,22.2,21.7,21.6,21.4,20.8,20.9,21.2,20.9,20.8,20.5,21,21.2,21.5,21.9,22.4,21.9]
,index: 1
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [null,null,null,null,52,52,52,52,52,51.7,39.7,21.8,22.7,21.8,19.2,17.9,17.6,17.3,16.7,16.6,15.7,15.9,15.8,15.7,14.9,14.9,15.1,16.2,15.5,15.5,15.5,15.3,14.9,15.5,15.5,15.4,14.4,14.6,14.9,14.9,15,15.5,15.6,15.7,15.3,16.1,16.1,15.8,14.7,15.2,15.6,15.8,15.7,16,16.1,16.1,15.7,16.1,16.1,15.8,15,15.2,15.6,15.7,15.7,16.1,16,15.9,15.5,16,16.1,16,16.1,15.9,16.3]
,index: 2
},
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [null,null,null,null,52,52,52,52,52,52,52,52,52,52,52,48.7,52,52,41.3,39.3,37.7,38.3,30.5,29.8,27.3,27.2,25.1,25,25.2,25.3,24.2,24.2,24.7,25.1,24,23.3,23.9,23.4,22.8,23.7,24.9,23.8,24.2,24.6,26.3,26.7,26.2,25.4,24.7,24,22.8,23.8,24.2,24.1,23,22.5,22.5,21.5,21,20.2,19.5,18.7,19,19.2,18.6,18.7,18.3,18.3,18.7,18.8,18.8,18.9,18.8,18.2,18.5]
,index: 3
},
{
name: '18 week target',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18]
,index: 4
}
]
}
