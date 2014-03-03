/* Created by EFisher on 25/02/2014 18:30:07 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the numbers of nurses in psychiatric services changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 09','Oct 09','Nov 09','Dec 09','Jan 10','Feb 10','Mar 10','Apr 10','May 10','Jun 10','Jul 10','Aug 10','Sep 10','Oct 10','Nov 10','Dec 10','Jan 11','Feb 11','Mar 11','Apr 11','May 11','Jun 11','Jul 11','Aug 11','Sep 11','Oct 11','Nov 11','Dec 11','Jan 12','Feb 12','Mar 12','Apr 12','May 12','Jun 12','Jul 12','Aug 12','Sep 12','Oct 12','Nov 12','Dec 12','Jan 13','Feb 13','Mar 13','Apr 13','May 13','Jun 13','Jul 13','Aug 13','Sep 13','Oct 13']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Number of full time equivalent psychiatry <br> (non-community) nurses', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Other Psychiatry',
type: 'line',
data: [26299.5,26318.1,26401,26279.1,26258.4,26091.2,26148.3,26069.7,25939.2,25866.5,25702.2,25372.3,25334.5,25272.9,25348.6,25247,25139,25059.2,24934.4,24858.7,24859.3,24760.2,24636.8,24517.4,24477.2,24532,24539.1,24392.6,24314.6,24212.5,24170.4,24119,24100.7,24059.7,23852.9,23648.7,23557.9,23664.1,23621.5,23490.4,23482.7,23480.1,23388.9,23257.1,23225.6,23143.9,23091.6,22976.6,22895.8,23051.2]
,index: 1
}
]
}
