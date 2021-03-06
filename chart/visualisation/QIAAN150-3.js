/* Created by ianb on 20/03/2015 10:57:37 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have admissions for falls changed for older people?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2006','May 2006','Jun 2006','Jul 2006','Aug 2006','Sep 2006','Oct 2006','Nov 2006','Dec 2006','Jan 2007','Feb 2007','Mar 2007','Apr 2007','May 2007','Jun 2007','Jul 2007','Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Monthly rate of admissions per 100,000 <br> people (standardised for age and <br> sex)', offset: 99}
, labels: {
}},
series:[
{
name: 'Age 65-79',
type: 'line',
data: [61.92,68.09,65.62,66.4,65.85,65,64.56,65.97,73.67,69.49,57.61,65,67.17,69.31,65.12,66.94,69.98,66.51,67.43,65.52,73.24,66.79,64.18,66.18,66.29,69.32,68.04,69.39,69.07,69.11,72.28,68.41,84.68,75.29,72.69,70.07,72.17,73.58,75.19,73.01,76.85,78.25,77.69,75.5,123.94,101.42,68.89,73,75.37,77.13,76.23,75.55,79.43,78.05,78.64,78.26,121.38,78.43,67.9,73.59,76.35,79,77.39,76.82,78.96,76.36,77.6,77.29,92.44,77.07,75.11,74.52,69.09,77.11,74.39,77.25,79.52,76.86,77.13,76.02,90.28,82.83,66.32,73.5,71.32,77.15,77.88,83.16,79.28,75.68,78.2,80.66,87.43]
,index: 1
},
{
name: 'Age 80+',
type: 'line',
data: [289.76,305.1,303.03,300.08,318.8,294.23,323.6,327.57,345.04,334.42,291.16,313.43,316.1,325.96,304.7,310.9,337.87,328.55,328.89,326.09,358.24,329.98,318.99,322.58,306.24,326.89,325.9,330.94,338.01,339.49,359.85,344.06,400.16,367.54,321.22,350.51,358.23,374.85,372.51,365.35,374.35,394.98,403.68,388.74,492.2,404.22,357.69,380.57,391.77,399.11,377.7,381.04,399.94,397.16,427,417.26,463.25,393.46,358.25,394.13,397.09,404.46,392.73,398.88,408.45,406.42,429.82,407.7,464.45,415.52,402.7,394.46,386.86,406.01,393.28,410.69,409.81,423.54,420.46,413.58,456.47,432.75,376.87,413.26,393.79,422.67,407.32,425.31,431.97,418.83,425.19,453.8,466.77]
,index: 2
}
]
}
