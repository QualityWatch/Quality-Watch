/* Created by rreed on 25/05/2017 13:34:19 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of ambulance staff changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Number of ambulance staff (FTE)'}
, min: 10000
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Ambulance staff',
type: 'line',
data: [16986.9,17167.2,17234.9,17244.1,17398.9,17527,17575.3,17551.3,17482.1,17508.4,17468.1,17433.9,17440.9,17539.5,17530.1,17516.1,17585.9,17675.2,17662.7,17594.2,17573.1,17540.1,17511,17552.1,17595.7,17714.8,17749.1,17736.4,17723.6,17742.4,17726.5,17701.5,17613,17566.8,17547,17460,17513.8,17682,17679.6,17658.7,17672.7,17709.4,17647.3,17654.5,17588.4,17484.5,17478.9,17484.5,17537.3,17688.9,17654.4,17629.8,17598.7,17591.4,17548,17468.3,17392.5,17364.3,17319.7,17340.7,17437.1,17519.2,17517.7,17504.6,17540.6,17541.5,17644.4,17641.1,17522,17583.2,17697.6,17720.5,17880.3,18048.7,18073,18008.8,18058.6,18184.8,18394.8,18488.6,18583.4,18704.2,18825,18993.2,19113.6,19405.5,19455.7,19392.3,19719.7]
,index: 1
}
]
}
