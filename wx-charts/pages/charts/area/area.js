import MyF2 from '../../../util/my-f2.js';
const app = getApp();
let chart = null;

Page({
  data: {},
  onLoad() {
    const data = [
      { month: 12, tem: 7, city: 'tokyo' },
      { month: 1, tem: 6.9, city: 'tokyo' },
      { month: 2, tem: 9.5, city: 'tokyo' },
      { month: 3, tem: 14.5, city: 'tokyo' },
      { month: 4, tem: 18.2, city: 'tokyo' },
      { month: 5, tem: 21.5, city: 'tokyo' },
      { month: 6, tem: 25.2, city: 'tokyo' },
      { month: 7, tem: 26.5, city: 'tokyo' },
      { month: 8, tem: 23.3, city: 'tokyo' },
      { month: 9, tem: 18.3, city: 'tokyo' },
      { month: 10, tem: 13.9, city: 'tokyo' },
      { month: 11, tem: 9.6, city: 'tokyo' },
      { month: 12, tem: 0, city: 'newYork' },
      { month: 1, tem: 0.8, city: 'newYork' },
      { month: 2, tem: 5.7, city: 'newYork' },
      { month: 3, tem: 11.3, city: 'newYork' },
      { month: 4, tem: 17, city: 'newYork' },
      { month: 5, tem: 22, city: 'newYork' },
      { month: 6, tem: 24.8, city: 'newYork' },
      { month: 7, tem: 24.1, city: 'newYork' },
      { month: 8, tem: 20.1, city: 'newYork' },
      { month: 9, tem: 14.1, city: 'newYork' },
      { month: 10, tem: 8.6, city: 'newYork' },
      { month: 11, tem: 2.5, city: 'newYork' },
      { month: 12, tem: 2, city: 'berlin' },
      { month: 1, tem: 0.6, city: 'berlin' },
      { month: 2, tem: 3.5, city: 'berlin' },
      { month: 3, tem: 8.4, city: 'berlin' },
      { month: 4, tem: 13.5, city: 'berlin' },
      { month: 5, tem: 17, city: 'berlin' },
      { month: 6, tem: 18.6, city: 'berlin' },
      { month: 7, tem: 17.9, city: 'berlin' },
      { month: 8, tem: 14.3, city: 'berlin' },
      { month: 9, tem: 9, city: 'berlin' },
      { month: 10, tem: 3.9, city: 'berlin' },
      { month: 11, tem: 1, city: 'berlin' }
    ];
    chart = new MyF2.Chart({
      el: wx.createCanvasContext('canvas'),
      width: 300,
      height: 300
    });
    chart.source(data, {
      month: {
        tickCount: 12
      },
      tem: {
        tickCount: 5
      }
    });
    // 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('tem', {
      label: {
        fontSize: 14
      }
    });
    chart.axis('time', {
      label: {
        fontSize: 14
      }
    });
    chart.area().position('month*tem').color('city')
      .shape('smooth')
      .style({
        opacity: 0.6
      })
      .adjust('stack');

    chart.line().position('month*tem').color('city')
      .shape('smooth')
      .adjust('stack');

    chart.render();
  },
  click(e) {
    if (e.touches && e.touches[0]) {
      const data = chart.getSnapRecords({x: e.touches[0].x, y: e.touches[0].y});
      let html = '';
      data.forEach(function(item) {
        html += 'city:' + item._origin.city + ',tem:' + item._origin.tem + ',month:' + item._origin.month + '\b\n';
      });
      console.log(data);
    } else {
      console.log('nothing');
    }
  }
});
