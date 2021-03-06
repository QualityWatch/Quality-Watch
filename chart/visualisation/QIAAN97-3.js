/* Created by rreed on 25/05/2017 13:34:14 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did NHS staff sickness rates vary by staff type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Sickness absence rate'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'England',
visible: true,type: 'line',
data: [4.8,4.4,4.2,3.9,3.9,3.9,4,3.8,4.1,4.3,4.4,5,4.7,4.1,3.9,3.7,3.7,3.9,4,3.9,4,4.2,4.4,4.4,4.5,4.5,4.2,4,4.1,3.9,4.1,4,4,4.4,4.5,4.6,4.7,4.3,4.1,4,3.8,3.8,3.9,3.8,3.9,4.2,4.2,4.3,4.4,4.3,4,3.9,3.9,3.9,4.1,4,4.2,4.4,4.5,4.8,4.7,4.4,4.2,4,3.9,3.9,4,3.9,4,4.2,4.3,4.4,4.5,4.4,4.2,4,3.8,3.9,4,3.9,4,4.3,4.5,4.6]
,index: 1
},
{
name: 'Ambulance Staff',
visible: false,type: 'line',
data: [6.8,6.5,6.2,5.9,5.8,5.7,5.8,5.9,5.7,5.7,5.9,7.4,7.2,5.9,5.6,5.7,5.6,5.7,6,6.1,6,6.1,6.3,6.8,6.6,6.4,6,5.9,6.1,6,6.2,6.3,6.2,6.2,6.7,7.8,7.6,6.8,6.5,6.3,6,5.9,5.8,5.8,5.6,5.6,5.7,6.8,6.9,6.9,6.6,6.5,6.4,6.3,6.4,6.5,6.4,6.6,6.8,7.7,7.4,6.7,6.3,5.8,5.5,5.4,5.3,5.6,5.6,5.5,5.6,6.3,6.2,5.9,5.5,5.2,4.9,5.1,5.4,5.4,5.4,5.7,5.7,6.4]
,index: 2
},
{
name: 'Administration and Estates ',
visible: false,type: 'line',
data: [4.1,3.9,3.6,3.3,3.2,3.3,3.3,3.2,3.5,3.9,3.9,4.4,4,3.6,3.4,3.1,3,3.3,3.3,3.3,3.5,3.7,3.9,3.7,3.9,3.9,3.6,3.4,3.5,3.2,3.4,3.3,3.4,3.9,3.9,3.9,4.1,3.8,3.4,3.3,3.2,3.2,3.3,3.2,3.4,3.7,3.8,3.7,3.8,3.8,3.5,3.3,3.2,3.4,3.5,3.4,3.6,3.9,4,4.2,4.1,4,3.7,3.5,3.4,3.4,3.5,3.4,3.6,3.9,3.9,4,4,4.1,3.8,3.5,3.4,3.5,3.5,3.5,3.5,3.9,4.1,4]
,index: 3
},
{
name: 'Healthcare Assistants and Other Support Staff',
visible: false,type: 'line',
data: [7.4,6.7,6.3,6,5.9,5.9,6,5.8,6.1,6.5,6.3,7.1,6.8,6,5.8,5.6,5.6,5.9,6,6,6.1,6.4,6.5,6.5,6.6,6.6,6.2,6,6.1,5.9,6.3,6.1,6.1,6.5,6.6,6.7,6.8,6.2,6,5.9,5.6,5.6,5.8,5.8,6,6.2,6.2,6.5,6.6,6.3,6,5.9,5.8,6,6.3,6.1,6.3,6.6,6.7,7.1,7,6.5,6.3,6.2,6,6.1,6.2,6.1,6.1,6.4,6.5,6.6,6.7,6.5,6.3,6.1,5.9,6,6.2,6.1,6.2,6.5,6.6,6.8]
,index: 4
},
{
name: 'Medical and Dental Staff',
visible: false,type: 'line',
data: [1.3,1.2,1.2,1.1,1.1,1.1,1.2,1,1.1,1.2,1.2,1.4,1.3,1.2,1.2,1.1,1.1,1.1,1.1,1,1.1,1.2,1.3,1.3,1.4,1.4,1.3,1.2,1.2,1.1,1.2,1.1,1.2,1.3,1.3,1.4,1.4,1.4,1.3,1.2,1.2,1.2,1.2,1,1.2,1.2,1.3,1.3,1.3,1.3,1.2,1.2,1.2,1.2,1.2,1,1.1,1.2,1.2,1.3,1.3,1.3,1.3,1.2,1.2,1.2,1.2,1.1,1.1,1.2,1.3,1.3,1.3,1.4,1.3,1.2,1.2,1.2,1.2,1.1,1.1,1.3,1.3,1.4]
,index: 5
},
{
name: 'Nursing, Midwifery and Health Visiting Staff',
visible: false,type: 'line',
data: [5.7,5.2,5,4.7,4.8,4.8,4.8,4.7,4.9,5.1,5.1,5.9,5.6,4.9,4.7,4.6,4.5,4.7,4.8,4.7,4.9,5.1,5.2,5.3,5.3,5.3,5,4.8,5,4.8,5,4.9,4.9,5.2,5.3,5.6,5.7,5.1,4.9,4.8,4.6,4.6,4.7,4.6,4.7,4.9,5,5.2,5.3,5,4.7,4.7,4.6,4.7,4.8,4.7,4.9,5.2,5.2,5.7,5.6,5.1,4.9,4.7,4.6,4.6,4.7,4.6,4.7,4.9,4.9,5.1,5.2,5.1,4.9,4.7,4.5,4.6,4.7,4.6,4.7,5,5.1,5.3]
,index: 6
},
{
name: 'Nursing, Midwifery and Health Visiting Learners',
visible: false,type: 'line',
data: [1.4,1.3,1.1,0.9,1.2,1.3,1.3,1.1,1,1.3,1.4,1,1.2,1.2,0.8,0.8,0.8,0.9,1.2,1.1,0.8,1,1,1,1.2,1.1,1,0.9,1.2,1.1,1.3,1.2,1.1,1,1.1,1,1.1,1.1,0.9,1.1,1.3,1.4,1.5,1.4,1.1,1,1.1,0.9,1.1,1.1,1.1,1,1,1.4,1.6,1.5,1.3,1.3,1.3,1.2,1.3,1.4,1,0.9,1.1,1.2,1.3,1.2,1,0.8,0.8,1,1.2,1.3,1.2,0.9,0.9,1,1,0.9,1,1.1,1.3,1.1]
,index: 7
},
{
name: 'Scientific, Therapeutic and Technical Staff',
visible: false,type: 'line',
data: [3.9,3.7,3.5,3.1,3.1,3.1,3.1,3.1,3.3,3.5,3.6,4.1,3.7,3.3,3.2,2.9,2.9,3.1,3.1,3.1,3.2,3.5,3.7,3.5,3.6,3.7,3.4,3.1,3.3,3,3.3,3.1,3.1,3.6,3.7,3.7,3.8,3.5,3.3,3.2,3,3,3,2.9,3.1,3.4,3.6,3.5,3.6,3.6,3.3,3.1,3,3.2,3.3,3.1,3.4,3.7,3.7,3.9,3.8,3.7,3.4,3.1,3.1,3.1,3.2,3.1,3.2,3.5,3.6,3.6,3.6,3.6,3.4,3.3,3.1,3.2,3.3,3.1,3.2,3.5,3.8,3.8]
,index: 8
},
{
name: 'Healthcare Scientists',
visible: false,type: 'line',
data: [3.8,3.6,3.4,2.9,3,3,3,2.9,3.2,3.5,3.5,4,3.6,3.4,3.2,2.8,2.7,3,3,3,3.1,3.3,3.5,3.3,3.5,3.8,3.5,3.1,3.2,3.1,3.2,3.1,3.3,3.8,3.8,3.6,3.8,3.7,3.4,3.2,3,3.1,3.1,3,3.3,3.6,3.7,3.5,3.7,3.6,3.4,3.2,3.1,3.3,3.4,3.3,3.4,3.6,3.7,3.8,3.8,3.6,3.4,3.1,3,3.1,3.2,3.2,3.2,3.6,3.7,3.5,3.7,3.8,3.7,3.4,3.1,3.3,3.3,3.2,3.3,3.6,3.8,3.8]
,index: 9
}
]
}
