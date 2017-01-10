/* Created by rreed on 19/12/2016 16:59:08 using v2.7 */
{
title: {text:''},
legend: {enabled: false},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year cancer survival vary by cancer type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Cancer (m/o=men only; w/o=women only)'}
, categories: ['Testis (m/o)' , 'Melanoma of skin' , 'Thyroid' , 'Breast (w/o)' , 'Hodgkin lymphoma' , 'Prostate (m/o)' , 'Uterus (w/o)' , 'Non-Hodgkin lymphoma' , 'Cervix (w/o)' , 'Larynx (m/o)' , 'Kidney' , 'Rectum' , 'Colorectum' , 'Colon' , 'Bladder' , 'Leukaemia' , 'Ovary (w/o)' , 'Myeloma' , 'Brain' , 'Stomach' , 'Oesophagus' , 'Lung' , 'Liver' , 'Mesothelioma' , 'Pancreas']
    , labels: {step: 1
}
},
yAxis: {
title: {text:'Five-year survival estimates for adults (aged 15–99 years)<br> in England diagnosed with cancer 2010–2014 and followed up to 2015', offset: 20}
, max: 100
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Survival',
type: 'bar',
data: [96.8,90,87.1,86.3,85.2,83.6,77.8,68.2,66.8,65.5,60.2,59.5,57.8,57.3,54.6,50.5,49.5,47.9,19.7,19.1,15.1,13.3,12.2,6.6,5.6]
},
    {name: 'Error',
     type: 'errorbar',
     data: [
         [96.1,97.5],
[89.5,90.5],
[85.6,88.6],
[86,86.7],
[83.7,86.6],
[83,84.2],
[77,78.6],
[67.5,68.9],
[65.1,68.5],
[63.7,67.3],
[59.4,61],
[58.7,60.3],
[57.4,58.2],
[56.8,57.8],
[53.8,55.5],
[49.4,51.7],
[48.5,50.5],
[46.5,49.4],
[18.1,21.2],
[18.3,19.9],
[14.4,15.8],
[13,13.6],
[11.3,13.1],
[5.7,7.6],
[5.2,6.1],
     ]}
]
}
