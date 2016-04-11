/* Created by NCODowd on 04/04/2016 10:41:03 using v2.7 */
/* Created by NCODowd on 04/04/2016 09:45:31 using v2.7 */
/* Created by NCODowd on 01/04/2016 14:09:24 using v2.7 */
/* Created by EFisher on 01/10/2015 10:59:47 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Staff satisfaction with the quality of work and care they are able to deliver'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2008,2009,2010,2011,2012,2013,2014,2015]

, labels: {
    rotation: - 45
}
},
yAxis: {
title: {text:'Staff personally pleased with<br>the standard and quality of<br>care they provide (%)', offset: 99}
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [60.41,73.6,73.19,71.48,77.38,77.58,76.66]

},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
         [60.13,60.7],
[73.33,73.86],
[72.89,73.5],
[71.08,71.87],
[77.08,77.68],
[77.26,77.89],
[76.28,77.03]
     ]},
     
      {name: 'Acute',
type: 'column',
data: [62.09,74.01,74.54,74.7,78.09,78.87,78.43]
},
    {name: 'Acute err',
     type: 'errorbar',
     data: [
[61.87,62.32],
[73.75,74.27],
[74.27,74.81],
[74.44,74.96],
[77.81,78.37],
[78.61,79.13],
[78.15,78.71]
     ]},
     
     {name: 'Ambulance',
type: 'column',
data: [66.89,75.59,76.21,74.83,75.26,72.8,72.61]

},
    {name: 'Amb err',
     type: 'errorbar',
     data: [
[66.55,67.23],
[75.26,75.92],
[75.82,76.61],
[74.54,75.11],
[74.88,75.63],
[72.4,73.21],
[72.14,73.09]
     ]},
     
     {
name: 'Mental Health & Learning Disability',
type: 'column',
data: [59.48,74.58,74.44,73.1,76.91,76.03,75.34]
},
        {name: 'MH err',
     type: 'errorbar',
     data: [
         [59.2,59.75],
[74.32,74.85],
[74.17,74.71],
[72.82,73.38],
[76.61,77.21],
[75.74,76.31],
[75.03,75.65]
     ]},
     
{
name: 'Community',
type: 'column',
data: [null,null,null,72.73,75.72,74.44,75.51]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [null,
null,null,
[72.48,72.99],
[75.47,75.97],
[74.18,74.69],
[75.26,75.77]
     ]}
]
}
