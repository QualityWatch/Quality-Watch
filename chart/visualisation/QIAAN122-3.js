    {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year cancer survival vary by gender?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Melanoma of skin','Hodgkin lymphoma','Non-Hodgkin lymphoma','Rectum','Colorectum','Colon','Kidney','Bladder','Leukaemia','Myeloma','Brain','Stomach','Oesophagus','Lung','Pancreas']
    , labels: {step: 1
}
},
yAxis: {
title: {text:'Five-year survival estimates for <br> adults (aged 15–99 years) in England <br> diagnosed 2007-2011 and followed <br> up to 2012', offset: 20}
, max: 100
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Men',
type: 'bar',
data: [85.55,82.41,62.35,57.12,56.5,56.61,54.69,58.56,46.96,42.84,17.79,18.39,13.51,9.69,4.66]
},
    {name: 'Man err',
     type: 'errorbar',
     data: [
         [84.695,86.396],
[80.322,84.493],
[61.232,63.47],
[56.096,58.138],
[55.864,57.134],
[55.832,57.393],
[53.596,55.782],
[57.569,59.551],
[45.352,48.565],
[40.778,44.911],
[15.733,19.84],
[17.403,19.381],
[12.47,14.542],
[9.369,10.019],
[4.059,5.269]
     ]},
{
name: 'Women',
type: 'bar',
data: [92.07,85.96,68.51,59.87,57.82,57.28,56.94,49.09,46.78,41.62,20.36,19.64,15.62,12.47,5.36]
},
        {name: 'Woman err',
     type: 'errorbar',
     data: [
         [91.388,92.753],
[84.103,87.807],
[67.475,69.544],
[58.763,60.976],
[57.216,58.429],
[56.564,57.988],
[55.631,58.242],
[47.669,50.502],
[45.18,48.379],
[39.392,43.857],
[18.061,22.649],
[18.293,20.989],
[14.096,17.149],
[12.053,12.878],
[4.754,5.972]
     ]}
]
}