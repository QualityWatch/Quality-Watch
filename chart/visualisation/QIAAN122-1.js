{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does one-year cancer survival vary by cancer type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Testis (men only)','Melanoma of skin','Breast (women only)','Prostate (men only)','Hodgkin lymphoma','Uterus (women only)','Larynx (men only)','Cervix (women only)','Rectum','Non-Hodgkin lymphoma','Colorectum','Bladder','Myeloma','Ovary (women only)','Colon','Kidney','Leukaemia','Brain','Stomach','Oesophagus','Lung','Pancreas']
, labels: {step: 1
}
},
yAxis: {
title: {text:'One-year survival estimates for <br> adults (aged 15–99 years) in England <br> diagnosed 2007-2011 and followed <br> up to 2012', offset: 20}
, max: 100
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'One-year survival',
type: 'bar',
data: [98.11,97.03,95.79,93.12,91.57,89.92,84.96,83.72,79.69,78.61,75.28,75.13,74.22,73.67,73.4,72.94,66.18,43.75,43.16,41.99,32.94,19.64]
},
    {name: 'Error',
     type: 'errorbar',
     data:[
[97.784,98.445],
[96.855,97.208],
[95.681,95.906],
[92.929,93.306],
[90.891,92.24],
[89.563,90.285],
[84.08,85.848],
[82.868,84.568],
[79.316,80.056],
[78.228,79.001],
[75.043,75.514],
[74.691,75.578],
[73.545,74.903],
[73.087,74.25],
[73.101,73.692],
[72.465,73.424],
[65.605,66.755],
[42.736,44.758],
[42.551,43.766],
[41.42,42.567],
[32.696,33.181],
[19.158,20.124]         
     ]}
]
}