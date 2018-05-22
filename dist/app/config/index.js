'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
require('dotenv').config('../../.env');

var host = process.env.HOST.replace(/(https)(:\/\/.*)/g, function (str, $1, $2) {
  return process.env.HOME ? 'http' + $2 : $1 + $2;
});

var config = {
  api_host: '' + host + (process.env.API_PORT != 80 ? ':' + process.env.API_PORT : '') + '/api',
  prefix: {
    oss: '//goss.vcg.com/'
  },
  date: {
    locale: 'zh-cn',
    format: {
      full: 'YYYY年MM月DD日 HH:mm:ss',
      date: 'YYYY年MM月DD日',
      time: 'HH:mm:ss'
    }
  },
  responsive: [{ size: 'xs', columns: 1, gutter: 8, mq: '360px' }, { size: 'sm', columns: 2, gutter: 16, mq: '600px' }, { size: 'md', columns: 3, gutter: 16, mq: '960px' }, { size: 'lg', columns: 4, gutter: 16, mq: '1280px' }, { size: 'xl', columns: 6, gutter: 16, mq: '1920px' }],
  const: {
    channels: [{ label: '国内', pid: '220634', name: 'inland', cmsId: 2 }, { label: '国际', pid: '220635', name: 'international', cmsId: 3 }, { label: '财经', pid: '220636', name: 'finance', cmsId: 4 }, { label: '体育', pid: '220637', name: 'sport', cmsId: 5 }, { label: '娱乐', pid: '220638', name: 'entertainment', cmsId: 6 }, { label: '时尚', pid: '220671', name: 'fashion', cmsId: 7 }, { label: '肖像', pid: '220641', name: 'portrait', cmsId: 278 }, { label: '历史', pid: '220654', name: 'history', cmsId: 279 }, { label: '故事', pid: '220677', name: 'story', cmsId: 280 }, { label: '旅游', pid: '223291', nae: 'travel', cmsId: 281 }, { label: '图表', pid: '220727', name: 'chart', cmsId: 282 }, { label: '漫画', pid: '220728', name: 'cartoon', cmsId: 434 }, { label: '插图', pid: '220729', name: '220729', cmsId: 283 }],
    topicMode: [{ label: '自动', value: '1' }, { label: '直播', value: '2' }, { label: '手动', value: '3' }],
    topicTemplate: [{ label: '简单', value: '1' }, { label: '复杂', value: '2' }, { label: '一般', value: '3' }, { label: '直播', value: '4' }],
    topicStatus: [{ label: '未发布', value: '0' }, { label: '已发布', value: '1' }, { label: '已下线', value: '2' }],
    companyTypes: [{ label: '--请选择--', value: '0' }, { label: '国际广告公司', value: '1' }, { label: '本土广告公司', value: '2' }, { label: '企业', value: '3' }, { label: '政府机构', value: '4' }, { label: '报纸', value: '5' }, { label: '期刊杂志', value: '6' }, { label: '出版', value: '7' }, { label: '广播电影电视', value: '8' }, { label: '网络新媒体', value: '9' }, { label: '其它', value: '999' }]
  },
  business: {
    notHasInfoArr: ['A', 'A1', 'A2', 'B', 'B1', 'B2', 'C', 'C1', 'C2'], //未完善用户信息的用户类型
    needDialogArr: ['A', 'A1', 'A2', 'B', 'B1', 'B2', 'C', 'C1', 'C2', 'D'], //需要弹窗的用户类型
    needBuyUserArr: ['A', 'A1', 'A2', 'B', 'B1', 'B2', 'C', 'C1', 'C2', 'D', 'F'], //未完善信息的用户类型
    contractUserArr: ['E', 'F'],
    chooseCity: [{
      'id': 0,
      'pid': 0,
      'name': '请选择地区'

    }, {
      'id': 110000,
      'pid': 0,
      'name': '北京市'

    }, {
      'id': 120000,
      'pid': 0,
      'name': '天津市',
      'type': '0'

    }, {
      'id': 130000,
      'pid': 0,
      'name': '河北省',
      'type': '0'

    }, {
      'id': 140000,
      'pid': 0,
      'name': '山西省'

    }, {
      'id': 150000,
      'pid': 0,
      'name': '内蒙古自治区',
      'type': '0'

    }, {
      'id': 210000,
      'pid': 0,
      'name': '辽宁省',
      'type': '0'

    }, {
      'id': 220000,
      'pid': 0,
      'name': '吉林省',
      'type': '0'

    }, {
      'id': 230000,
      'pid': 0,
      'name': '黑龙江省',
      'type': '0'

    }, {
      'id': 310000,
      'pid': 0,
      'name': '上海市',
      'type': '0'

    }, {
      'id': 320000,
      'pid': 0,
      'name': '江苏省',
      'type': '0'

    }, {
      'id': 330000,
      'pid': 0,
      'name': '浙江省',
      'type': '0'

    }, {
      'id': 340000,
      'pid': 0,
      'name': '安徽省',
      'type': '0'

    }, {
      'id': 350000,
      'pid': 0,
      'name': '福建省',
      'type': '0'

    }, {
      'id': 360000,
      'pid': 0,
      'name': '江西省',
      'type': '0'

    }, {
      'id': 370000,
      'pid': 0,
      'name': '山东省',
      'type': '0'

    }, {
      'id': 410000,
      'pid': 0,
      'name': '河南省',
      'type': '0'

    }, {
      'id': 420000,
      'pid': 0,
      'name': '湖北省',
      'type': '0'

    }, {
      'id': 430000,
      'pid': 0,
      'name': '湖南省',
      'type': '0'

    }, {
      'id': 440000,
      'pid': 0,
      'name': '广东省',
      'type': '0'

    }, {
      'id': 450000,
      'pid': 0,
      'name': '广西壮族自治区',
      'type': '0'

    }, {
      'id': 460000,
      'pid': 0,
      'name': '海南省',
      'type': '0'

    }, {
      'id': 500000,
      'pid': 0,
      'name': '重庆市',
      'type': '0'

    }, {
      'id': 510000,
      'pid': 0,
      'name': '四川省',
      'type': '0'

    }, {
      'id': 520000,
      'pid': 0,
      'name': '贵州省',
      'type': '0'

    }, {
      'id': 530000,
      'pid': 0,
      'name': '云南省',
      'type': '0'

    }, {
      'id': 540000,
      'pid': 0,
      'name': '西藏自治区',
      'type': '0'

    }, {
      'id': 610000,
      'pid': 0,
      'name': '陕西省',
      'type': '0'

    }, {
      'id': 620000,
      'pid': 0,
      'name': '甘肃省',
      'type': '0'

    }, {
      'id': 630000,
      'pid': 0,
      'name': '青海省',
      'type': '0'

    }, {
      'id': 640000,
      'pid': 0,
      'name': '宁夏回族自治区',
      'type': '0'

    }, {
      'id': 650000,
      'pid': 0,
      'name': '新疆维吾尔自治区',
      'type': '0'

    }, {
      'id': 710000,
      'pid': 0,
      'name': '台湾省',
      'type': '0'

    }, {
      'id': 810000,
      'pid': 0,
      'name': '香港特别行政区',
      'type': '0'

    }, {
      'id': 820000,
      'pid': 0,
      'name': '澳门特别行政区',
      'type': '0'

    }]
  },
  downloadSize: [{ label: 'S', value: '600', desc: '适合微博、微信配图，网络广告，网站大配图、幻灯片展示等' }, { label: 'M', value: '800', desc: '适合App配图及主视觉画面、全屏投影展示、视频剪辑制作等' }, { label: 'X', value: '1024', desc: '适合APP全屏画面、全屏投影幻灯片展示、视频剪辑制作等' }, { label: 'XL', value: '2048', desc: '适合户外电子屏幕展示、TVC、电视制作、电影制作等' }],
  buriedPointEmun: {
    favor: '收藏夹',
    creativeSearch: '创意搜索',
    editorialSearch: '编辑搜索',
    group: '组照页',
    topic: '专题',
    editorialDetail: '编辑大图页',
    creativeDetail: '创意大图页',
    download: '下载记录'
  },
  videoVGASize: [{ label: 'WEB', value: 'web', index: 0 }, { label: 'SD', value: 'sd', index: 1 }, { label: 'HD', value: 'hd', index: 2 }, { label: '原片', value: 'yuan', index: 3 }]
};

exports.default = config;