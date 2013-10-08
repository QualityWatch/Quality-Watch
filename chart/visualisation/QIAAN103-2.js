/* Created by ianb on 08/10/2013 13:47:00 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have breaches of the four hour target changed since 2003?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan 2003','Apr 2003','Jul 2003','Oct 2003','Jan 2004','Apr 2004','Jul 2004','Oct 2004','Jan 2005','Apr 2005','Jul 2005','Oct 2005','Jan 2006','Apr 2006','Jul 2006','Oct 2006','Jan 2007','Apr 2007','Jul 2007','Oct 2007','Jan 2008','Apr 2008','Jul 2008','Oct 2008','Jan 2009','Apr 2009','Jul 2009','Oct 2009','Jan 2010','Apr 2010','Jul 2010','Oct 2010','Jan 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Percentage of patients waiting less <br> than four hours in major A&E', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage',
type: 'line',
data: [17.6,12.7,11.9,11.7,9.4,6.9,5.4,4.2,3.6,2.4,1.7,2.4,3.4,2.3,2.1,2.4,3.2,2.4,2.3,3.7,3.5,2.4,1.9,3.6,3.2,2,1.9,3.2,3.1,2.3,3,5.3,5.2,4.7,4.4,4.4,3.6,3.9,4.7,5.1,5.1,6.3,6.4,7.5,5.2,5.5,4.8,4.9,4.4,4.5,4.9,5.6,5.9,8,8.1,8.6,9.7,9.9,5.2,4.6,5,5.7]
,index: 1
},
{
name: 'Old target (2%)',
type: 'line',
data: [null,null,null,null,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 2
},
{
name: 'New target (5%)',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
,index: 3
}
]
}
