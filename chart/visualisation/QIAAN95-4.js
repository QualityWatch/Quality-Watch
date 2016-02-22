/* Created by EFisher on 17/02/2016 16:22:08 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What is the regional variation of cancelled elective operations?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Devon, Cornwall <br>and Isles Of Scilly','Bristol,<br> North<br> Somerset, <br>Somerset<br> and <br>South<br> Gloucestershire','Bath,<br> Gloucestershire,<br> Swindon<br> and<br> Wiltshire','Shropshire<br> and<br> Staffordshire','Birmingham<br> and<br> The<br> Black<br> Country','Greater<br> Manchester','Arden,<br> Herefordshire<br> and<br> Worcestershire','Cheshire,<br> Warrington<br> and<br> Wirral','East Anglia','North <br>Yorkshire and<br> Humber','Essex','Leicestershire<br> and Lincolnshire','England','Hertfordshire<br> and The South<br> Midlands','Surrey<br> and Sussex','Merseyside','South Yorkshire<br> and Bassetlaw','West Yorkshire','London','Wessex','Cumbria, Northumberland,<br> Tyne and Wear','Lancashire','Kent and Medway','Durham, Darlington and Tees','Thames Valley','Derbyshire <br>and <br>Nottinghamshire']
, labels: {
 rotation: -30
, step: 12
},
showLastLabel: true,
endOnTick: true
},
yAxis: {
title: {text:'Rate of cancelled elective operations <br> per 1,000 \'elective\' admissions', offset: 50}
, max: 14
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Series1',
type: 'column',
data: [13.8,11.7,10.9,10.7,10.5,10.5,10.3,10.1,9.9,9.9,9.3,9.1,8.6,8.3,8.2,8.2,8.1,7.8,7.7,7.7,7.4,7,6.6,5.8,5.1,4.5]
,index: 1
}
]
}