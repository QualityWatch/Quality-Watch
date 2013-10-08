/* Created by ianb on 08/10/2013 13:52:26 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many patients are affected by delayed transfers of care and how has this changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Number of Patients with a Delayed <br> Transfer of Care', offset: 87}
, min: 3000
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Total',
type: 'line',
data: [4940,5004,4588,4409,3861,4597,4404,4170,3910,4056,4137,4228,4144,4165,4150,4165,3617,4094,4007,4028,3954,3857,4086,4031,3961,4102,4115,3894,3448,4188,4009,4052,4043,4200,3895,3977]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Total trendline',
data: [[0, 4433.7],[35, 3848.9]]
}
]
}
