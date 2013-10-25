{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did NHS staff sickness rates vary by staff type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},xAxis: {
title: {text:''}
, categories: ['Nursing, Midwifery and Health Visiting Learners','Medical and Dental Staff','Healthcare Scientists','Scientific, Therapeutic and Technical Staff','Administration and Estates ','England','Nursing, Midwifery and Health Visiting Staff','Ambulance Staff','Healthcare Assistants and Other Support Staff']
, labels: {
}
},
yAxis: {
title: {text:'Average daily sickness absence rate <br> (April 2009 - March 2013)', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Sicness absence rate',
type: 'bar',
data: [1.16,1.2,3.35,3.39,3.6,{color: '#E10E49', y:4.22}
,5.08,6.23,6.3]
,index: 1
}
]
}