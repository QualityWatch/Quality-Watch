/* Created by EFisher on 12/10/2015 14:31:43 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the numbers of nurses in psychiatric services changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 09','Oct 09','Nov 09','Dec 09','Jan 10','Feb 10','Mar 10','Apr 10','May 10','Jun 10','Jul 10','Aug 10','Sep 10','Oct 10','Nov 10','Dec 10','Jan 11','Feb 11','Mar 11','Apr 11','May 11','Jun 11','Jul 11','Aug 11','Sep 11','Oct 11','Nov 11','Dec 11','Jan 12','Feb 12','Mar 12','Apr 12','May 12','Jun 12','Jul 12','Aug 12','Sep 12','Oct 12','Nov 12','Dec 12','Jan 13','Feb 13','Mar 13','Apr 13','May 13','Jun 13','Jul 13','Aug 13','Sep 13','Oct 13','Nov 13','Dec 13','Jan 14','Feb 14','Mar 14','Apr 14','May 14','Jun 14','Jul 14','Aug 14','Sep 14','Oct 14','Nov 14','Dec 14','Jan 15','Feb 15','Mar 15','Apr 15','May 15']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Number of nurses (FTEs)'}
, min: 14000
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Community Psychiatry',
type: 'line',
data: [15709.5,15717.6,15812.8,15811.5,15841.4,15985.8,15943.4,15866.1,15905.5,15960.3,15938.7,15999.2,15985.6,16032.9,16061.6,16039,16036.4,15996.3,15919.3,15713.9,15707.4,15713.5,15643.6,15571.7,15574.6,15609.9,15641.7,15708.1,15749.3,15762.8,15736.7,15596.1,15567,15538.3,15619.1,15677.3,15767.3,15826.3,15890.6,15855.8,15834.4,15809.2,15818.8,15802.6,15677.3,15679.7,15680.3,15651.5,15694.5,15747,15726.7,15724.6,15690,15759.7,15883,15695.6,15559.9,15574.6,15468.7,15404.2,15388.6,15342.6,15360,15325.7,15352.2,15363.7,15419.2,15446.3,15627.4]
,index: 1
},
{
name: 'Other Psychiatry',
type: 'line',
data: [26299.5,26318.1,26401,26279.1,26258.4,26091.2,26148.3,26069.7,25939.2,25866.5,25702.2,25372.3,25334.5,25272.9,25348.6,25247,25139,25059.2,24934.4,24858.7,24859.3,24760.2,24636.8,24517.4,24477.2,24532,24539.1,24392.6,24314.6,24212.5,24170.4,24119,24100.7,24059.7,23852.9,23648.7,23557.9,23664.1,23621.5,23490.4,23482.7,23480.1,23388.9,23257.1,23225.6,23143.9,23091.6,22976.6,22895.8,23051.2,23202.1,23168.7,23140,23134,22970.6,22747.2,22750.4,22656.5,22586.5,22405.5,22398,22586.7,22626,22532.7,22481.7,22407.5,22294.5,22189.5,21800.8]
,index: 2
}
]
}
