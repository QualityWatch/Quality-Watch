{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times after an urgent referral changed by cancer type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Acute Leukaemia','Brain/CNS','Breast','Children\'s','Gynaecological','Haematological malignancies','Head & neck','Lower gastrointestinal','Lung','Other','Sarcoma','Skin','Testicular','Upper gastrointestinal','Urological malignancies']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The proportion of people with an <br> urgent referral who were seen by <br> a specialist within 2 weeks', offset: 99}
    , min: 80, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2013/14 Q1',
type: 'column',
data:  [97.6, 96.4, 96.8, 96.4, 96.2, 97.2, 96, 94.8, 97, 94.6, 96, 95, 97.8, 93.5, 95]
},
    {
        name: '2013/14 Q2 error',
        type: 'errorbar',
        data: [
        [92.99,102.21], [95.54,97.26], [96.66,96.94], [95.48,97.32], [95.98,96.42], [96.59,97.81], [95.78,96.22], [94.61,94.99], [96.71,97.29], [92.68,96.52], [94.99,97.01], [94.82,95.18], [97.15,98.45], [93.23,93.77], [94.77,95.23]
        ]},
{
name: '2014/15 Q1',
type: 'column',
data: [98.31, 96.65, 92.34, 92.86, 94.4, 96.43, 95.24, 93.58, 96.16, 94.51, 94.14, 93, 97.16, 92.21, 94.04]
},
    {
        name: '2014/15 Q1 error',
        type: 'errorbar',
        data: [
     [95.01,101.6], [95.86,97.45], [92.14,92.53], [91.7,94.02], [94.16,94.65], [95.78,97.07], [95.02,95.46], [93.37,93.78], [95.85,96.47], [92.74,96.28], [93.01,95.26], [92.81,93.18], [96.44,97.88], [91.94,92.48], [93.81,94.27]
        ]}    
]
}