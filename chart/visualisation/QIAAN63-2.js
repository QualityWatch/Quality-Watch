/* Created by EFisher on 23/11/2015 14:07:34 using v2.7 *//* Created by EFisher on 23/11/2015 14:02:05 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has satisfaction with social care services changed by region?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['South West','North West','North East','Yorkshire and the Humber','South East','England','East Midlands','West Midlands','Eastern','London']
, labels: {
 rotation: -45
, step: 1
}
},
yAxis: {
title: {text:'Proportion of respondents who said <br> they were satisfied with their care <br> and support (%) ', offset: 99}
, min: 0
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: '2014-15',
type: 'column',
data: [67.4,66.8,66.6,65.9,65.6,{
                y: 64.7,
                color: 'rgba(0,154,166,0.5)'
            },64.4,64.3,63.6,59.5]
}
        ,{name: 'Eng err',
        type: 'errorbar',
        data: [[65.7,67.9],[66.1,68.7],[65.3,67.9],[64.7,67.1],[64.4,66.8],[64.3,65.1],[62.8,66],[62.9,65.7],[62.1,65.1],[58.6,60.4]        
        ]}
]
    }