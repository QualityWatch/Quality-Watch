/* Created by NCODowd on 16/11/2016 17:22:45 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
legend: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of nurses, midwives and health visitors changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Number of nurses (FTE)'}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Nursing, midwifery & health visiting',
type: 'line',
data: [297429.68,299982.09,300821.26,299568.16,300508.31,300890.83,301398.52,301050.69,300428.45,300070.66,299309.58,298482.7,299369.57,301089.43,301336.13,300053.23,300876.75,300794.78,300466.26,299166.72,298600.55,297871.33,296950.07,295724.53,296924.75,298272.28,298073.21,297144.81,297919.79,295204.57,295456.34,295431.05,292810.01,292152.98,291569.82,290173.85,291620.46,294120.4,294916.62,294074.11,294917.99,295270.21,295544.23,295268.86,294614.15,294508.85,294044.76,292725.53,295163.32,297928.37,299710.03,299030.98,300536.99,301114.67,301914.25,301403.22,300883.96,300231.62,298908.58,297687.26,299818.92,302704.75,303672.46,302930.58,303484.79,303829.32,304360.36,303388.14,302538.36,302154.85,300929.23,299692.01,302408.39,306320.57,307384.58,305778.62,306675.3,307203.4,306851.47,306456.17,306011.73,305030.33,303934.31]
,index: 1
}
]
}
