/* Created by NCODowd on 04/04/2016 10:55:02 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Staff feeling that their role makes a difference to patients/service users'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2008,2009,2010,2011,2012,2013,2014,2015]

, labels: {
}
},
yAxis: {
title: {text:'Percentage of staff agreeing<br>that their role makes a<br>difference to patients (%)', offset: 99}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [89.724,90.003,89.11,87.51,89.267,89.722,88.902,87.992]

},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
         [89.603,89.844],
[89.883,90.123],[88.939,89.281],
[87.21,87.81],
[89.082,89.453],
[89.535,89.91],
[88.651,89.153],
[87.663,88.322]
     ]},
     
      {name: 'Acute',
type: 'column',
data: [89.396,90.029,90.132,90.333,89.63,90.479,90.433,90.397]
},
    {name: 'Acute err',
     type: 'errorbar',
     data: [
[89.286,89.505],
[89.922,90.137],[90.028,90.235],
[90.229,90.438],
[89.488,89.773],
[90.355,90.603],
[90.31,90.556],
[90.277,90.517]
     ]},
     
     {name: 'Ambulance',
type: 'column',
data: [89.906,89.333,89.113,88.919,85.524,86.131,85.393,86.683]

},
    {name: 'Amb err',
     type: 'errorbar',
     data: [
[89.762,90.05],
[89.184,89.483],[88.976,89.249],
[88.774,89.065],
[85.289,85.759],
[85.895,86.367],
[85.095,85.691],
[86.458,86.907]
     ]},
     
     {
name: 'Mental Health & Learning Disability',
type: 'column',
data: [90.174,90.752,90.526,90.435,89.3,89.667,89.324,88.698]
},
        {name: 'MH err',
     type: 'errorbar',
     data: [
         [90.063,90.285],
[90.644,90.86],[90.418,90.634],
[90.337,90.534],
[89.146,89.453],
[89.536,89.798],
[89.191,89.457],
[88.543,88.853]
     ]},
     
{
name: 'Community',
type: 'column',
data: [null,null,null,90.674,90.509,90.53,90.187,90.734]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [null,
null,null,
[90.514,90.834],
[90.376,90.642],
[90.418,90.642],
[90.07,90.304],
[90.649,90.818]
     ]}
]
}