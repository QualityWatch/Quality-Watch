/* Created by rreed on 4/19/2017 4:39:37 PM using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many patients are affected by delayed transfers of care and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017']
, labels: {
 rotation: -90
, step: 4
}
},
yAxis: {
title: {text:'Number of patients with a Delayed <br> Transfer of Care', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Total',
type: 'line',
data: [4940,5004,4588,4409,3861,4597,4404,4170,3910,4056,4137,4228,4144,4165,4150,4165,3617,4094,4007,4028,3954,3857,4086,4031,3961,4102,4115,3894,3448,4188,4007,4053,4046,4184,3888,3961,4084,4231,4147,4200,3649,4221,4276,4327,4207,4516,4363,4612,4704,4960,4930,5063,4475,5221,4942,4948,4739,4972,4996,4888,5114,5247,5330,5573,5004,5781,5727,5628,5879,6010,6121,6364,6448,6777,6810,6825,6191,7106]
,index: 1
},
]
}
