/* Created by rreed on 20/12/2016 10:31:13 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year cancer survival vary by gender?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Cancer'}
, categories: ['Melanoma of skin' , 'Thyroid' , 'Hodgkin lymphoma' , 'Non-Hodgkin lymphoma' , 'Kidney' , 'Rectum' , 'Colorectum' , 'Colon' , 'Bladder' , 'Leukaemia' , 'Myeloma' , 'Brain' , 'Stomach' , 'Oesophagus' , 'Lung' , 'Liver' , 'Mesothelioma' , 'Pancreas']
    , labels: {step: 1
}
},
yAxis: {
title: {text:'Five-year survival estimates for adults (aged 15–99 years)<br>in England diagnosed  with  cancer 2010–2014 and followed up to 2015', offset: 30}
, max: 100
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Men',
type: 'bar',
data: [87.1,82.8,84.5,66.1,58.8,59.4,57.8,57.3,57.1,50.8,47.5,18.3,18.3,14.3,11.4,12.8,5.5,5.2]
},
    {name: 'Man err',
     type: 'errorbar',
     data: [
         [86.3,87.9],
[79.6,86],
[81.7,87.3],
[65.2,67.1],
[57.7,59.9],
[58.4,60.5],
[57.2,58.4],
[56.5,58.1],
[56.1,58.1],
[49.2,52.3],
[45.4,49.5],
[16.2,20.4],
[17.3,19.3],
[13.5,15.1],
[11.1,11.8],
[11.7,14],
[4.5,6.5],
[4.5,5.9]
     ]},
{
name: 'Women',
type: 'bar',
data: [92.6,89.1,86,70.8,62.9,60,57.9,57.3,48,50.3,48.5,21.7,21.1,17.6,15.5,11.2,10,6.2]
},
        {name: 'Woman err',
     type: 'errorbar',
     data: [
         [92,93.2],
[87.5,90.7],
[84.2,87.8],
[69.9,71.8],
[61.7,64],
[58.8,61.2],
[57.3,58.5],
[56.6,58],
[46.6,49.4],
[48.8,51.9],
[46.5,50.5],
[19.4,24],
[19.7,22.5],
[16.3,18.8],
[15.1,16],
[9.2,13.1],
[7.4,12.6],
[5.6,6.9]
     ]}
]
}
