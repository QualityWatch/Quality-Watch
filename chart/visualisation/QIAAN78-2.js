/* Created by EFisher on 20/10/2015 15:59:58 using v2.7 */{
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
name: '2014/15 Q1',
type: 'column',
data:  [98.31, 96.65, 92.34, 92.86, 94.4, 96.43, 95.24, 93.58, 96.16, 94.51, 94.14, 93, 97.16, 92.21, 94.04]
},
    {
        name: '2014/15 Q1 error',
        type: 'errorbar',
        data: [
        [96.62, 99.99], [96.25, 97.06], [92.24, 92.44], [92.27, 93.45], [94.28, 94.53], [96.1, 96.75], [95.13, 95.35], [93.47, 93.68], [96, 96.32], [93.6, 95.41], [93.56, 94.71], [92.9, 93.09], [96.8, 97.53], [92.07, 92.34], [93.92, 94.15]
        ]},
{
name: '2015/16 Q1',
type: 'column',
data: [94.12, 95.54, 94.61, 94.05, 94.6, 96.97, 94.71, 92.24, 94.98, 96.7, 95.06, 93.51, 96.46, 90.97, 93.91]
},
    {
        name: '2015/16 Q1 error',
        type: 'errorbar',
        data: [
        [90.08, 98.15], [95.1, 95.98], [94.53, 94.69], [93.51, 94.59], [94.48, 94.71], [96.69, 97.26], [94.6, 94.82], [92.14, 92.35], [94.8, 95.16], [96.15, 97.25], [94.55, 95.57], [93.43, 93.6], [96.08, 96.84], [90.84, 91.1], [93.8, 94.02]
        ]}    
]
}