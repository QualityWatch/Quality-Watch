/* Created by JMorris on 09/05/2018 11:59:08 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year cancer survival vary by cancer type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Cancer (m/o=men only, w/o=women only)'}
, categories: ['Testis (m/o)', 'Melanoma of skin', 'Thyroid', 'Prostate (m/o)' ,'Breast (w/o)' , 'Hodgkin lymphoma' ,  'Uterus (w/o)', 'Vulva (w/o)', 'Larynx (m/o)', 'Non-Hodgkin lymphoma' , 'Rectum', 'Cervix (w/o)' ,  'Kidney' ,  'Colorectum' , 'Colon' , 'Bladder' , 'Leukaemia' , 'Myeloma' , 'Ovary (w/o)' , 'Stomach' , 'Oesophagus' , 'Lung' , 'Liver' , 'Brain', 'Pancreas', 'Mesothelioma']
    , labels: {step: 1
}
},
yAxis: {
title: {text:'Five-year cancer survival estimates for adults (aged 15–99 years)<br> in England diagnosed between 2011–2015 and followed up to 2016', offset: 20}
, max: 100
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Survival',
type: 'bar',
data: [96.8,91.7,88.5,88.3,86.0,81.8,76.7,67.9,67.1,66.9,62.0,61.3,60.8,60.5,59.5,56.4,53.0,51.4,42.9,21.3,16.6,15.2,12.1,11.5,6.9,6.6]
},
    {name: 'Error',
     type: 'errorbar',
     data: [
         [96.1,97.5],
[91.2,92.2],
[87.4,89.6],
[87.9,88.7],
[85.7,86.4],
[80.4,83.2],
[75.9,77.5],
[65.5,70.5],
[65.2,69.1],
[66.2,67.6],
[61.3,62.6],
[59.6,63.0],
[60.0,61.5],
[60.1,60.9],
[59.0,59.9],
[55.6,57.2],
[52.1,53.8],
[50.3,52.6],
[41.9,43.9],
[20.6,22.1],
[16.0,17.3],
[14.9,15.5],
[11.3,13.0],
[10.5,12.5],
[6.5,7.3],
[5.7,7.6]
     ]}
]
}