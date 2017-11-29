/* Created by JMorris on 28/11/2017 12:59:32 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What is the overall trend in the number of delayed transfer of care beds?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Total number of delayed transfer <br> of care beds (thousands)', offset: 87}
, min: 3000
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Total',
type: 'line',
data: [3545.7,3861.8,3653.1,3769.7,3757,3688.6,4013.8,3971.9,3602.1,3656.9,3902.5,3726.4,3783.8,3906.5,3770.3,3823.5,3616,3610.8,3777,3862.5,3616.1,3849.4,3678.3,3780.6,3874,3808.8,3770.4,3872.3,3472.6,4055.4,3899.3,3714.8,3776.6,3888.7,3766.1,3611.3,3946.4,3962.1,3995.2,3897.7,3633.2,4009.3,4030.2,3969.7,3875.4,4089.6,4137.3,4319.5,4439.1,4608.9,4610.5,4698.3,4484.7,4851.4,4798.3,4528.7,4601,4423.1,4651.3,4754.1,4680.4,4924.6,5165.5,5105.2,4968,5144.1,5450.2,5480.1,5600.6,5557.9,5770.7,5954.1,6059.7,6552.3,6454.7,6440.2,6304.7,6371.3,6660.4,6440,5898.2,5748.5,5934.7,5867.4,5808.5,5610.1]
,index: 1
}
]
}
