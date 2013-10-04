/* Created by ianb on 03/10/2013 16:43:59 using v0.9 */
$(function () {       
    Highcharts.theme = {
        colors: ['#009AA6', '#E10E49', '#4F0B7B', '#6C6F70',
            '#3FCFD5', '#E59AAA', '#B634BB', '#CECFCB'],
        chart: {

        },
        title: {
            style: {
                color: '#000000',
                font: '"Proxima Nova", Verdana'
            }
        },

        yAxis: {
            gridLineWidth: 1,
            gridLineColor: '#CECFCB',
            title: {
                style: {
                    color: '#000000',
                    font: '"Proxima Nova", Verdana',
                   fontWeight: ''
                }
            },
            labels: {
                style: {
                    color: '#000000',
                    font: '"Proxima Nova", Verdana'
                }
            }            
        },

        xAxis: {
            gridLineWidth: 1,            
            gridLineColor: '#CECFCB',
            title: {
                style: {
                    color: '#000000',
                    font: '"Proxima Nova", Verdana'
                }
            },
            labels: {
                style: {
                    color: '#000000',
                    font: '"Proxima Nova", Verdana'
                }
            } 
        },

        legend: {
            itemStyle: {
                color: '#000000',
                font: '"Proxima Nova", Verdana'
            },
            itemHoverStyle: {
                color: 'gray'
            }
        }
    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
 $('#container').highcharts({
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have referral to treatment times changed by pathway?'},
credits: {enabled: true, text: '� Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2007','May 2007','Jun 2007','Jul 2007','Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Median waiting times from referral <br> to treatment (weeks)', offset: 87}
, labels: {
}},
series:[
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,8.1,8.3,8.2,8.1,7.9,8,8.3,8.2,8.1,7.6,8.6,8.7,7.7,7.7,8.1,8,7.8,7.9,8.3,8.1,7.9,7.7,8.7,9.1,8,8,8.4,8.3,8.3,8.3,8.7,8.7,8.3,7.9,9.1,9,7.9,7.7,8.4,8.7,8.2,8.1,8.8,8.4,8.1,7.8,8.8,8.7,8.1,8.1,8.4,8.4,8.5,8.3,8.8,8.6,8.3,8,9.2,9.2,8.2,8.5,8.7,8.7]
,index: 1
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [null,null,null,null,7.4,7.5,6.7,6.2,5.5,5.9,4.5,3.9,4.2,4.1,4.3,4.2,4.3,4.4,4.1,4.2,4.1,4.6,3.7,3.8,4.2,4.3,4.4,4.4,4.5,4.7,4.3,4.3,4.2,4.9,3.8,3.8,4.3,4.3,4.4,4.3,4.4,4.7,4.3,4.2,4.1,4.8,3.5,3.7,3.7,4.5,4.1,3.9,4.1,4.5,3.9,4,3.8,4.4,3.6,3.6,4,4.1,4.2,4.1,4.3,4.7,4.2,4.2,4,4.8,3.8,3.9,5.1,4.8,5.2]
,index: 2
},
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [null,null,null,null,14.3,13.4,13.2,13.3,14.3,12.3,10.5,9.8,9,8.1,7.4,6.9,7.3,6.8,6.2,6.3,6.9,6.7,5.7,5.6,5.7,5.7,5.6,5.8,6.1,5.9,5.7,5.7,6.5,6.5,5.3,5.2,5.6,5.5,5.7,5.8,6.2,6,5.9,5.9,6.9,6.5,5.5,5.5,6,6.1,5.6,5.8,6.2,6,5.7,5.7,6.3,5.9,5.2,5.2,5.5,5.3,5.7,5.5,5.8,5.8,5.3,5.4,6.1,6,5.1,5.5,5.6,5.6,5.7]
,index: 3
}
]
});
});
