/* Created by rreed on 20/12/2016 09:45:02 using v2.7 *//* Created by rreed on 20/12/2016 09:45:02 using v2.7 *//* Created by rreed on 20/12/2016 09:45:02 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does one-year cancer survival vary by cancer type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Cancer (m/o=men only; w/o=women only)'}
, categories: ['Testis (m/o)' , 'Melanoma of skin' , 'Breast (w/o)' , 'Prostate (m/o)' , 'Hodgkin lymphoma' , 'Thyroid' , 'Uterus (w/o)' , 'Larynx (m/o)' , 'Cervix (w/o)' , 'Rectum' , 'Non-Hodgkin lymphoma' , 'Myeloma' , 'Kidney' , 'Colorectum' , 'Ovary (w/o)' , 'Bladder' , 'Colon' , 'Leukaemia' , 'Mesothelioma' , 'Brain' , 'Stomach' , 'Oesophagus'  , 'Lung' , 'Liver' , 'Pancreas']
, labels: {step: 1
}
},
yAxis: {
title: {text:'One-year survival estimates for adults (aged 15–99 years) <br>in England diagnosed  with cancer 2010–2014 and followed up to 2015', offset: 20}
, max: 100
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'One-year survival',
type: 'bar',
data: [98.4,97.6,96.3,94.4,92.1,90.8,90.5,85.5,84.5,81.8,80.3,79.0,77.1,76.7,76.5,74.9,74.6,68.7,46.9,46.5,44.6,44.1,36.9,35.0,21.9]
},
    {name: 'Error',
     type: 'errorbar',
     data:[
[98.1,98.7],
[97.4,97.7],
[96.2,96.4],
[94.2,94.6],
[91.5,92.7],
[90,91.5],
[90.2,90.9],
[84.7,86.4],
[83.6,85.3],
[81.4,82.1],
[80,80.7],
[78.4,79.6],
[76.7,77.5],
[76.5,76.9],
[76,77],
[74.5,75.4],
[74.3,74.8],
[68.1,69.2],
[45.8,48.1],
[45.5,47.5],
[44,45.3],
[43.5,44.6],
[36.7,37.1],
[34.3,35.7],
[21.4,22.3]
         
     ]}
]
});
})
