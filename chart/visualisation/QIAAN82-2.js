/* Created by EFisher on 20/12/2017 15:35:27 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of calls are resolved without a person needing to go to hospital?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Proportion of all emergency call'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'resolved by phone',
type: 'line',
data: [4.5,4.7,4.7,5.2,5.2,5.3,5.3,5.3,5.6,5.5,5.7,5.7,5.5,5.6,6,5.7,5.8,5.8,5.9,5.9,6.6,6.4,6.4,6.5,6.2,5.8,5.5,6.1,5.8,5.7,5.5,5.4,6.5,5.9,6.3,6.5,6.9,6.9,7.3,7.7,7.6,7.8,8.3,8.6,9.9,8.7,8.8,8.9,10.4,10.5,10.7,10.8,10.8,10.5,10.7,10.8,10.8,10.7,10.1,10.7,9.2,9.9,9.9,10.6,10,10,10.5,10.5,11.2,10.5,10,9.7,9.9,10.3,10.4,10.2,8.9,10.3]
,index: 1
},
{
name: 'Did not go to hospital',
type: 'line',
data: [33,32.9,33.9,33.9,33.9,33.4,33.5,34.1,34.8,34,34.4,34.8,33.9,34.7,34.7,35.2,35.3,35,34.5,34.7,36,35.1,35.3,35.9,35.5,35.5,36.1,36.9,36.6,35.9,35.6,35.8,36.7,35.7,36,36.1,36.2,36.7,37.2,37.5,37.3,37,36.9,36.8,37.8,37.2,36.6,36.3,36.4,36.7,37.1,37.5,37.6,36.8,36.7,36.8,37.6,37.8,38,37.9,37.2,37.6,37.9,38.2,38.3,37.8,37.4,37.1,38,37.5,37.3,37,37,37.2,37.6,38,37.6,36.9]
,index: 2
}
]
}
