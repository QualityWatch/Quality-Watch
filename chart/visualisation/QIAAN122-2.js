{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year cancer survival vary by cancer type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Testis (men only)','Melanoma of skin','Breast (women only)','Hodgkin lymphoma','Prostate (men only)','Uterus (women only)','Cervix (women only)','Larynx (men only)','Non-Hodgkin lymphoma','Rectum','Colorectum','Colon','Bladder','Kidney','Leukaemia','Ovary (women only)','Myeloma','Brain','Stomach','Oesophagus','Lung','Pancreas']
    , labels: {step: 1
}
},
yAxis: {
title: {text:'Five-year survival estimates for <br> adults (aged 15–99 years) in England <br> diagnosed 2007–2011 and followed <br> up to 2012', offset: 111}
, max: 100
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Five-year survival',
type: 'bar',
data: [97.08,89.03,84.97,83.86,81.72,77.38,67.33,66.14,65.15,58.1,57.05,56.9,56.06,55.45,46.89,46.3,42.25,18.85,18.78,13.97,10.9,4.98]
},
    {name: 'Error',
     type: 'errorbar',
     data: [
         [96.449,97.705],
[88.489,89.562],
[84.619,85.316],
[82.445,85.276],
[81.13,82.316],
[76.604,78.166],
[65.751,68.907],
[64.293,67.981],
[64.388,65.908],
[57.355,58.848],
[56.612,57.486],
[56.371,57.422],
[55.25,56.878],
[54.608,56.285],
[45.758,48.018],
[45.268,47.336],
[40.736,43.764],
[17.332,20.364],
[17.985,19.571],
[13.114,14.826],
[10.644,11.159],
[4.549,5.401]
     ]}
]
}