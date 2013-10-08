{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of timely antenatal assessments changed by region?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['South West','North East','Yorkshire and The Humber','East Midlands','South East Coast','England','East of England','South Central','North West','West Midlands','London']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Ratio of maternities which had the <br> first antenatal appointment before <br> 12 weeks 6 days', offset: 99}
, min: 0.75
, labels: {
format: '{value:.3f}' 
}},
series:[
{
name: '2009-10 (Q3 & Q4)',
type: 'column',
    data: [0.945,1.001,0.886,0.898,0.933,{color:'#E10E49', y:0.872},0.893,0.892,0.862,0.808,0.783]
,index: 1
},
{
name: '2010-11',
type: 'column',
    data: [0.978,1,0.93,0.923,0.916,{color:'#E35479', y:0.908},0.914,0.884,0.867,0.86,0.893]
,index: 2
},
{
name: '2011-12',
type: 'column',
    data: [1.013,0.978,0.973,0.954,0.93,{color:'#E59AA9', y:0.936},0.922,0.903,0.932,0.921,0.9]
,index: 3
},
{
name: '2012-13 (Q1)',
type: 'column',
    data: [0.974,0.958,0.928,0.948,0.917,{color:'#E7E0D9', y:0.916},0.897,0.923,0.925,0.88,0.88]
,index: 4
}
]
}



















