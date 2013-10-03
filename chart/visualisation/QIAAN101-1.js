/* Created by ianb on 03/10/2013 16:38:52 using v0.9 */
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
title: {text: 'How have mortality rates changed with respect to deprivation?'},
credits: {enabled: true, text: '� Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Index of multiple deprivation (IMD) score 2007'}
, labels: {
}
},
yAxis: {
title: {text:'All age mortality rate '}
, max: 1200
, labels: {
}},
series:[
{
name: '2008-2011',
type: 'scatter',
data: [[19.76,637.55],[26.3,476.24],[8.33,524.49],[23.51,431.91],[33.33,684.65],[10.43,549.29],[10.84,518.73],[43.2,794.54],[14.62,554.94],[28.62,679.44],[21.13,567.51],[15.34,608.57],[14.1,608.07],[5.36,514.85],[7.43,512.84],[44.64,782.24],[22.31,620.87],[12.06,546.54],[15.92,555.45],[8.59,574.55],[12.86,604.67],[13.1,535.16],[8.75,595.14],[16.65,649.37],[17.8,627.65],[9.55,528.81],[16.16,559.19],[10.73,556.02],[8.35,523.3],[29.69,671.16],[16,610.92],[17.37,609.06],[18.12,646.52],[12.53,539.81],[9.18,543.45],[13.98,607.23],[28.07,643.65],[20.27,617.32],[20.4,691.63],[20.64,740.8],[8.49,526.34],[16.22,567.2],[7.12,505.11],[31.16,758.14],[15.59,519.07],[9.63,563.75],[42.95,794.51],[17.79,623.56],[17.98,638.62],[46.1,712.06],[18.44,716.36],[9.84,534.26],[21.31,661.02],[10.34,525.83],[26.19,605.71],[17.29,561.54],[24.11,692.11],[6.46,546.68],[9.24,573.42],[8.13,565.24],[32.69,698.97],[14.37,536.51],[11.9,584.4],[34.94,751.43],[9.31,562.05],[11.99,563.17],[22.41,712],[13.93,637.55],[19.27,664.62],[15.81,648.93],[17.08,579.72],[34.49,747.64],[16.56,705.23],[8.76,573.21],[11.49,587.59],[7.02,543.61],[10.26,613.73],[12.12,645.75],[10.22,544.79],[8.51,608.59],[15.55,535.63],[4.13,510.2],[31.79,794.96],[17.89,693.85],[23.68,680.82],[15.3,591.15],[33.19,728.57],[21.31,602.85],[12.17,586.72],[24.21,701.86],[9.84,575.93],[22.32,608.5],[20.58,603.95],[17.7,664.66],[19.55,728.9],[10.95,584.72],[12.9,579.07],[11.45,547.91],[16.75,616.15],[6.94,554.55],[31.04,777.72],[23.2,676.5],[20.36,602.03],[12.18,575.23],[24.73,692.49],[14.73,650.25],[24.31,664.5],[23.45,633.43],[14.36,571.52],[14.33,614.16],[19.09,652.68],[44.5,918.27],[7.75,567.65],[29.52,767.82],[25.73,695.84],[15.09,656.32],[13.4,594.75],[13.69,524.63],[24.1,742.03],[38.67,748.97],[36.03,790.71],[29.22,618.7],[35.73,720.03],[14.64,594.6],[21.16,563.6],[7.25,544.47],[9.26,559.35],[13.61,616.56],[8.06,571.93],[14.79,527.11],[20.34,698.88],[7.49,503.85],[16.21,599.58],[26.56,720.31],[30.14,737.84],[25.1,648.6],[11.62,644.13],[23.8,719.76],[10.74,562.7],[11.78,617.63],[7.16,533.36],[27.84,690.76],[11.59,572.69],[16.94,654.68],[26.91,787.89],[15.32,677.06],[10.69,625.46],[28.35,673.47],[10.65,562.43],[21.63,710.22],[14.83,567.42],[10.07,635.6],[31.36,762.99],[8.2,524.53],[7.41,580.18],[9.22,582.01],[17.33,649.17],[19.97,647.44],[10.61,613.12],[14.41,640.42],[25.26,760.69],[13.08,639.84],[11.14,589.15],[18.06,655.83],[20.5,700.83],[38.94,790.04],[8.19,565.19],[20.58,644.04],[7.23,537.39],[12.26,611.59],[6.94,551.32],[26.64,689.45],[27.07,734.67],[37.03,819.31],[21.42,730.71],[30.48,775.65],[11.3,570.47],[24.06,671.08],[26.16,826.48],[7.28,542.02],[14.18,596.9],[10.9,600.42],[19.12,655.26],[32,754.03],[11.97,592.78],[8.46,486.07],[9.58,560.66],[5.75,573.68],[20.88,696.34],[33.02,746.66],[7.08,572.96],[9.79,554.08],[11.95,618.42],[14.59,609.39],[10.16,520.64],[8.88,547.1],[6.67,574.52],[15.01,587.67],[16.07,651.7],[25.13,736.61],[9.49,600.69],[25.07,692.33],[7.38,532.77],[33.89,782.62],[27.85,726.82],[31.8,726.3],[20.67,627.9],[13.49,517.44],[16.18,689.4],[10.2,623.74],[25.56,702.19],[14.17,626.39],[34.1,821.14],[11.47,575.95],[30.24,697.21],[18.03,689.19],[12.71,622.83],[32.21,724.11],[18.06,581.34],[18.8,645.32],[11.67,594.91],[26.11,711.98],[46.97,897.13],[8.88,576.78],[17.85,601.67],[17.76,644.07],[6.86,552.99],[30.82,816.81],[27.9,749.38],[17.34,571.24],[23.16,562.73],[28.78,810.01],[22.35,714.53],[16.36,662.46],[23.36,666.94],[29.82,792.13],[21.94,728.12],[20.37,655.29],[18.56,650.02],[15.54,613.19],[11.33,560.61],[6.55,518.12],[29.67,763.67],[24.49,713.53],[10.84,546.62],[21.35,656.03],[17.58,611.61],[15.65,631.42],[23.51,736.59],[22.7,730.96],[18.03,715.87],[33.94,772.22],[38.96,816],[16.21,652.71],[21.64,684.02],[23.01,716.6],[12.99,629.62],[30.84,754.25],[16.42,684.32],[10.86,558.02],[28.93,759.47],[13.02,513.89],[38.31,820.7],[15.51,579.62],[10.09,582.97],[14.68,528.87],[27.76,729.62],[11.23,592.29],[11.3,638.6],[24.61,683.44],[16.64,612.7],[21.28,612.94],[14.49,574.93],[21.19,674.41],[22.1,707.63],[20.55,621.89],[29.78,796],[26.71,758.04],[12.86,630.54],[22.47,702.45],[37.46,840.91],[30.91,827.43],[21.05,680.91],[25.23,740.07],[14.31,560.55],[13.59,598.93],[21.15,707.21],[29.73,763.56],[11.62,646.96],[22.99,690.08],[13.86,590.22],[25.75,752.78],[27.84,689.72],[36.51,889.74],[26.42,652.22],[10.94,655.59],[13.87,652.01],[17.48,707.66],[10.51,611.51],[8.7,617.1],[34.61,800.06],[16.17,643.78],[23.75,676.44],[34.68,835.49],[8.41,587.11],[12.08,594.41],[21.44,692.72],[32.61,843.14],[35.83,869.46],[19.3,691.73],[22.75,720.89],[14.93,613.26],[27.61,771.67],[24.23,836.75],[37.66,932.3]]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: '2008-2011 trendline',
data: [[4.13, 521.24],[46.97, 880.86]]
},
{
name: '1999-2001',
type: 'scatter',
data: [[19.76,931.47],[26.3,736.23],[8.33,791.64],[23.51,679.56],[33.33,978.91],[10.43,813.02],[10.84,766.44],[43.2,1093.16],[14.62,801.26],[28.62,946.82],[21.13,810.33],[15.34,857.83],[14.1,854.56],[5.36,741.74],[7.43,738.32],[44.64,1062.27],[22.31,865.33],[12.06,775.15],[15.92,785.53],[8.59,807.2],[12.86,840.93],[13.1,756.32],[8.75,828.16],[16.65,893.32],[17.8,865.05],[9.55,743.31],[16.16,776.57],[10.73,772.34],[8.35,732.53],[29.69,911.24],[16,837.9],[17.37,834.84],[18.12,879.89],[12.53,750.5],[9.18,752.19],[13.98,828.78],[28.07,872.38],[20.27,840.28],[20.4,929.61],[20.64,988.58],[8.49,729.16],[16.22,778.34],[7.12,702.19],[31.16,1007.98],[15.59,717.79],[9.63,771.66],[42.95,1050.18],[17.79,842.9],[17.98,860.63],[46.1,947.31],[18.44,952.37],[9.84,731.68],[21.31,884.58],[10.34,720.77],[26.19,816.69],[17.29,763.2],[24.11,920.46],[6.46,743.44],[9.24,775.64],[8.13,765.03],[32.69,926.59],[14.37,729.38],[11.9,787.18],[34.94,987.85],[9.31,757.83],[11.99,758.94],[22.41,938.86],[13.93,848.63],[19.27,880.35],[15.81,860.66],[17.08,776.94],[34.49,979.86],[16.56,927.66],[8.76,767.47],[11.49,784.57],[7.02,731.23],[10.26,815.18],[12.12,853.37],[10.22,730.23],[8.51,807.35],[15.55,718.82],[4.13,687.93],[31.79,1031.84],[17.89,908.82],[23.68,892.19],[15.3,783.58],[33.19,949.29],[21.31,796.35],[12.17,776.54],[24.21,915.51],[9.84,763.25],[22.32,802.46],[20.58,796.23],[17.7,869.52],[19.55,946.67],[10.95,772.28],[12.9,765.44],[11.45,727.71],[16.75,810.01],[6.94,735.29],[31.04,1004.97],[23.2,881.29],[20.36,791.25],[12.18,758.76],[24.73,900.21],[14.73,849.12],[24.31,865.74],[23.45,828.15],[14.36,753.17],[14.33,804.5],[19.09,850.97],[44.5,1171.98],[7.75,747.78],[29.52,989.6],[25.73,902.43],[15.09,854.15],[13.4,779.51],[13.69,694.13],[24.1,956.53],[38.67,964.84],[36.03,1015.02],[29.22,806.65],[35.73,928.99],[14.64,776.65],[21.16,739.12],[7.25,715.55],[9.26,733.5],[13.61,802.32],[8.06,747.64],[14.79,693.4],[20.34,900.97],[7.49,664.78],[16.21,780.41],[26.56,926.27],[30.14,947.39],[25.1,839.12],[11.62,833.65],[23.8,924.17],[10.74,733.31],[11.78,799.71],[7.16,697.75],[27.84,888.03],[11.59,745.16],[16.94,844.27],[26.91,1005.1],[15.32,870.83],[10.69,808.15],[28.35,865.87],[10.65,730.73],[21.63,909],[14.83,736.02],[10.07,818.26],[31.36,971.93],[8.2,683.44],[7.41,750.64],[9.22,752.83],[17.33,833.25],[19.97,830.91],[10.61,788.58],[14.41,821.49],[25.26,966.66],[13.08,820.33],[11.14,758.91],[18.06,839.3],[20.5,893.53],[38.94,1001.31],[8.19,729.12],[20.58,823.58],[7.23,693.68],[12.26,782.72],[6.94,709.73],[26.64,875.86],[27.07,930.18],[37.03,1032.5],[21.42,924.67],[30.48,978.9],[11.3,730.71],[24.06,852.07],[26.16,1039.74],[7.28,695.45],[14.18,761.52],[10.9,765.54],[19.12,831.38],[32,950.36],[11.97,755.41],[8.46,626.36],[9.58,716.49],[5.75,732.08],[20.88,880.21],[33.02,941],[7.08,730.89],[9.79,708.02],[11.95,785.67],[14.59,774.73],[10.16,666.14],[8.88,697.94],[6.67,730.95],[15.01,746.26],[16.07,823.53],[25.13,926.02],[9.49,761.67],[25.07,872.26],[7.38,679.07],[33.89,980.97],[27.85,912.73],[31.8,911.3],[20.67,792.19],[13.49,658.53],[16.18,865.68],[10.2,785.66],[25.56,880.47],[14.17,788.58],[34.1,1023.4],[11.47,726.81],[30.24,872.67],[18.03,862.46],[12.71,782.13],[32.21,904.07],[18.06,730.95],[18.8,806.98],[11.67,745.37],[26.11,886.8],[46.97,1110.33],[8.88,722.91],[17.85,752.32],[17.76,803.46],[6.86,693.3],[30.82,1012.19],[27.9,930.54],[17.34,714.77],[23.16,704.37],[28.78,1003.3],[22.35,887.84],[16.36,823.59],[23.36,829],[29.82,979.6],[21.94,902],[20.37,813.94],[18.56,807.47],[15.54,762.89],[11.33,699.32],[6.55,646.89],[29.67,943.25],[24.49,882.22],[10.84,678.62],[21.35,810.38],[17.58,756.59],[15.65,780.44],[23.51,906.64],[22.7,899.56],[18.03,881.11],[33.94,948.44],[38.96,1000.61],[16.21,802.77],[21.64,840.49],[23.01,879.12],[12.99,773.92],[30.84,923.22],[16.42,838.39],[10.86,685.08],[28.93,926.4],[13.02,629.24],[38.31,1000.05],[15.51,708.38],[10.09,712.03],[14.68,646.51],[27.76,888.55],[11.23,722.15],[11.3,777.32],[24.61,831.38],[16.64,745.33],[21.28,745.02],[14.49,698.83],[21.19,818.82],[22.1,857.95],[20.55,754.07],[29.78,963.91],[26.71,917.78],[12.86,763.49],[22.47,848.8],[37.46,1016.14],[30.91,999.42],[21.05,820.61],[25.23,891.74],[14.31,674.43],[13.59,720.55],[21.15,850.77],[29.73,917.57],[11.62,775.34],[22.99,827.12],[13.86,705.48],[25.75,901.61],[27.84,824.43],[36.51,1064.24],[26.42,776.92],[10.94,778.16],[13.87,773.24],[17.48,840.38],[10.51,723.9],[8.7,729.37],[34.61,949.79],[16.17,758.9],[23.75,798.13],[34.68,989.86],[8.41,685.79],[12.08,694.53],[21.44,812.8],[32.61,994.39],[35.83,1024.75],[19.3,807.48],[22.75,840.32],[14.93,709.85],[27.61,897.17],[24.23,948.95],[37.66,1063.02]]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: '1999-2001 trendline',
data: [[4.13, 687.55],[46.97, 1095.71]]
}
]
});
});

