/* Created by JMorris on 28/11/2017 12:59:35 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Which organisations are responsible for the number of delayed transfer of care beds?'},
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
title: {text:'Number of delayed transfer of care <br> beds', offset: 50}
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'NHS',
type: 'line',
data: [2072.7,2315.6,2133.1,2274.5,2306.4,2291.5,2400.9,2393.6,2210.1,2236.2,2387.9,2225.4,2283.9,2409.7,2337.1,2370,2253.7,2316.3,2393.5,2466.1,2291.7,2463,2374.5,2485.6,2545.3,2494.6,2477.8,2572.7,2322.5,2693.3,2553.7,2456.4,2566.8,2620.5,2547.8,2460,2659.2,2684.5,2695.3,2655.4,2466.4,2768.5,2773.4,2723.3,2642.7,2800.5,2835,2941,2953.5,3104.1,3059.2,3120.1,2978,3279.5,3196.6,2952.9,2906.9,2683.5,2862.3,2949.3,2894.6,3049.7,3196.1,3167.4,3027.8,3137.5,3330,3349.6,3366.4,3317,3444.7,3513.2,3558.7,3783.8,3698.4,3685.5,3538.4,3608.2,3703.8,3537.1,3226.6,3199.3,3274.1,3280,3233.4,3170.1]
,index: 1
},
{
name: 'Social Care',
type: 'line',
data: [1236.3,1269.1,1239.1,1234.3,1184.4,1153.2,1357.1,1291.5,1144.5,1161.2,1253.1,1222.2,1215.2,1231.6,1166.5,1176,1072.5,1007.1,1086.7,1120.9,1058.5,1097.2,1050.3,1031.3,1071.2,1083.9,1058.6,1060.8,923.4,1092.3,1108.9,1031.6,984.8,1041.1,993,930.3,1037.8,1053.5,1045.8,990.8,944,993.3,987.6,999.4,965.9,1020.5,1020,1091.5,1187.8,1188.8,1230.9,1253.7,1181.1,1257.1,1244.5,1216.2,1339.8,1367.5,1457.6,1443.4,1442.7,1519,1594.7,1586.7,1601.8,1660.9,1748.4,1767.1,1845.5,1821.1,1871.7,1975.1,2027.7,2257.5,2253.6,2239.5,2269.5,2245.1,2421.2,2396.4,2253.2,2125.2,2239.7,2196.7,2164.2,2038.2]
,index: 2
},
{
name: 'Both',
type: 'line',
data: [236.7,277.1,280.9,260.9,266.2,243.9,255.7,286.9,247.5,259.6,261.5,278.8,284.6,265.2,266.6,277.5,289.8,287.5,296.8,275.5,265.9,289.2,253.4,263.7,257.5,230.3,233.9,238.8,226.7,269.7,236.7,226.8,224.9,227.1,225.3,221.1,249.4,224.1,254.1,251.5,222.8,247.6,269.2,247,266.8,268.6,282.3,286.9,297.8,316,320.4,324.6,325.6,314.8,357.3,359.6,354.3,372,331.4,361.4,343.1,355.9,374.6,351,338.4,345.7,371.8,363.4,388.7,419.8,454.3,465.8,473.3,511.1,502.6,515.2,496.8,518.1,535.3,506.6,418.3,424,421,390.6,411,401.7]
,index: 3
}
]
}
