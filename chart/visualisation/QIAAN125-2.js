/* Created by NCODowd on 14/09/2016 15:36:41 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the amount spent on home care vary by client type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['1994-95','1995-96','1996-97','1997-98','1998-99','1999-00','2000-01','2001-02','2002-03','2003-04','2004-05','2005-06','2006-07','2007-08','2008-09','2009-10','2010-11','2011-12','2012-13','2013-14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Gross adult social care expenditure <br> spent on home care (billions)', offset: 87}
, min: 0
, labels: {
format: '{value:.4f}' 
,formatter: function() {return '$'+this.value;}}},
series:[
{
name: 'Older people (aged 65 or over) including older mentally ill',
type: 'line',
data: [947123.3497,1007107.9751,1071196.0174,1119895.0112,1165980.4058,1226602.6523,1260397.0414,1315586.3788,1395092.8603,1524688.8865,1699165.1624,1856900.9295,1931742.6036,1944280.0614,2022861.2654,2118722.2952,2139076.2928,1911749.2119,1832168.9859,1816722.4897]
,index: 1
},
{
name: 'Adults aged under 65 with a physical disability or sensory impairment',
type: 'line',
data: [53212.0534,85573.8586,98392.6353,128072.736,149288.1025,188989.3198,198816.6069,205674.4205,220890.8425,237521.1074,257777.0985,287799.5033,305865.4731,301137.9367,304388.8234,323181.3766,340440.1385,305394.4383,289868.1231,295185.6833]
,index: 2
},
{
name: 'Adults aged under 65 with learning disabilities',
type: 'line',
data: [14735.5171,27878.9582,39531.6945,57913.5075,76251.4617,88640.6224,110863.3729,127662.8041,138670.6537,175346.5663,216098.3929,288125.4983,349106.5246,390011.3588,464817.3312,488850.9638,557074.8026,658683.2036,655525.1417,676081.0519]
,index: 3
},
{
name: 'Adults aged under 65 with mental health needs',
type: 'line',
data: [12693.9169,19672.3416,25605.8449,28393.6638,27393.9762,35177.03,36179.5382,42009.3659,41142.7485,44528.6503,46912.9811,53546.9322,55797.8653,57372.7269,63381.9727,64408.7336,81946.4153,81162.5474,73673.21,69376.8937]
,index: 4
}
]
}
