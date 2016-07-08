/* Created by NCODowd on 29/06/2016 15:44:21 using v2.7 *//* Created by EFisher on 17/02/2016 16:22:08 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What is the regional variation of cancelled elective operations?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Devon, Cornwall & Isles Of Scilly','Bristol,Somerset & South Gloucestershire','Bath, Gloucestershire,Swindon & Wiltshire','Shropshire & Staffordshire','Birmingham & Black Country','Manchester','Arden,Herefordshire & Worcestershire','Cheshire,Warrington & Wirral','East Anglia','N.Yorkshire & Humber','Essex','Leicestershire & Lincolnshire','England','Hertfordshire & The South Midlands','Surrey & Sussex','Merseyside','South Yorkshire & Bassetlaw','West Yorkshire','London','Wessex','Cumbria, Northumberland,Tyne & Wear','Lancashire','Kent & Medway','Durham, Darlington and Tees','Thames Valley','Derbyshire & Nottinghamshire']
, labels: {
 rotation: -90
, step: 1
},
showLastLabel: true,
endOnTick: true
},
yAxis: {
title: {text:'Rate of cancelled elective<br>operations per 1,000<br>elective admissions', offset: 70}
, max: 14
, labels: {
format: '{value:.0f}' 
}},
series:[
{name: 'Series1',showInLegend:false,
type: 'column',
data: [13.8,11.7,10.9,10.7,10.5,10.5,10.3,10.1,9.9,9.9,9.3,9.1,8.6,8.3,8.2,8.2,8.1,7.8,7.7,7.7,7.4,7,6.6,5.8,5.1,4.5]
,index: 1
}
]
}