/* Created by ianb on 03/10/2013 13:31:37 using v0.9 */
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
title: {text: 'How have admissions for falls changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2006','May 2006','Jun 2006','Jul 2006','Aug 2006','Sep 2006','Oct 2006','Nov 2006','Dec 2006','Jan 2007','Feb 2007','Mar 2007','Apr 2007','May 2007','Jun 2007','Jul 2007','Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Monthly rate of admissions per 100,000 <br> people 65 and over (standardised <br> for age and sex)', offset: 99}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'DSR',
type: 'line',
data: [103.3,111.2,108.8,108.9,111.8,106.7,111.7,113.5,123,117.7,100.1,110.2,112.4,116,108.7,111.3,118.7,114.2,115,112.9,125.1,114.6,110.5,112.8,109.9,116.2,114.9,116.9,118,118.3,124.6,118.5,142,128.4,117.9,121,124.2,128.3,129.2,126.1,130.7,135.3,137,132.4,190.9,156.4,121.4,128.9,132.9,135.6,131,130.2,136.9,135.1,142,139.9,183.5,135.7,120.7,131.8,134.7,138.2,134.7,135.4,138.9,136.4,141.7,137.4,160.1,138.6,134.6,132.6,126.9,137,132.5,137.6,138.5,139.9,139.6,136.9,154.9,138.2]
,index: 1
},
{
name: 'Trend (Pre-Austerity)',
type: 'line',
data: [103.7,104.4,105.1,105.8,106.5,107.3,108,108.7,109.4,110.1,110.8,111.6,112.3,113,113.7,114.4,115.2,115.9,116.6,117.3,118,118.8,119.5,120.2,120.9,121.6,122.3,123.1,123.8,124.5,125.2,125.9,126.7,127.4,128.1,128.8,129.5,130.3,131,131.7,132.4,133.1,133.8,134.6,135.3,136,136.7,137.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 2
},
{
name: 'Trend (Post-Austerity)',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,136.7,136.8,136.9,137,137.1,137.2,137.3,137.4,137.5,137.6,137.7,137.7,137.8,137.9,138,138.1,138.2,138.3,138.4,138.5,138.6,138.7,138.7,138.8,138.9,139,139.1,139.2,139.3,139.4,139.5,139.6,139.7,139.8]
,index: 3
}
]
});
});

