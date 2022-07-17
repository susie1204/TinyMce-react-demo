import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  headScripts: [
//     'http://code.highcharts.com/stock/highstock.js',
//   'https://code.highcharts.com/maps/modules/map.js',
// //  ' https://code.highcharts.com/maps/modules/data.js',
//  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/codemirror.min.js',
//  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/mode/javascript/javascript.min.js',
//  'https://code.highcharts.com/adapters/standalone-framework.js',
//  'https://code.highcharts.com/highcharts-more.js',
//  'https://code.highcharts.com/highcharts-3d.js',
//  'https://code.highcharts.com/modules/data.js',
//  'https://code.highcharts.com/modules/exporting.js',
// 'https://code.highcharts.com/modules/funnel.js',
// 'https://code.highcharts.com/modules/solid-gauge.js',
// 'https://code.highcharts.com/modules/accessibility.js',
// 'http://editor.highcharts.com/highcharts-editor.complete.js',
],

  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
