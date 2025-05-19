import * as echarts from 'echarts';

export function renderRadarChart() {
  const chartDom = document.getElementById("radar-chart");

  const myChart = echarts.init(chartDom, null, {
    renderer: 'canvas',
  });

  const option = {
    backgroundColor: 'transparent',
    textStyle: {
      fontFamily: 'Inter, sans-serif',
      color: '#1f2937'
    },
    tooltip: {
      backgroundColor: 'rgba(31,41,55,0.9)',
      borderColor: '#3B82F6',
      borderWidth: 1,
      textStyle: {
        color: '#f9fafb'
      }
    },
    radar: {
      indicator: [
        { name: 'Frontend', max: 100 },
        { name: 'DevOps', max: 100 },
        { name: 'Testing', max: 100 },
        { name: 'Mobile Dev', max: 100 },
        { name: 'UI/UX', max: 100 },
        { name: 'Backend', max: 100 }
      ],
      axisName: {
        color: '#111827',
        fontSize: 13,
        fontWeight: '600'
      },
      splitLine: {
        lineStyle: {
          color: ['#9ca3af']
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.1)', 'rgba(59,130,246,0.05)']
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d1d5db'
        }
      }
    },
    series: [{
      name: 'Skill Set',
      type: 'radar',
      data: [{
        value: [80, 10, 65, 60, 50, 40],
        name: 'Atul Kumar'
      }],
      areaStyle: {
        color: 'rgba(59,130,246,0.3)'
      },
      lineStyle: {
        color: '#3B82F6',
        width: 2
      },
      symbol: 'circle',
      symbolSize: 5,
      itemStyle: {
        color: '#3B82F6'
      }
    }]
  };

  myChart.setOption(option);
}