/* Created by JMorris on 09/05/2018 14:37:48 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of people waiting over 52 weeks to start treatment changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017','Oct 2017','Nov 2017','Dec 2017','Jan 2018','Feb 2018']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Number of patients waiting for treatment <br> >52 weeks after referral', offset: 87}
, max: 25000
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Number of people waiting >52 weeks',
type: 'line',
data: [18681,18494,21098,18458,18221,19585,20855,13442,14254,13568,14671,14222,14880,14355,13434,12536,13257,19937,19938,20097,11132,7324,6071,5898,5653,5149,4213,3308,3478,2959,2054,1570,1281,1147,1085,842,663,473,391,434,295,368,350,387,257,214,316,430,539,488,516,572,594,532,490,362,381,362,399,440,442,475,413,634,751,786,739,756,868,835,758,728,692,871,886,1009,942,1077,1062,1185,1428,1234,1227,1345,1583,1528,1568,1651,1542,1642,1734,1778,1517,1452,1750,1869,2236]
,index: 1
}
]
}
