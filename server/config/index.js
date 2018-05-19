const config = {
  development: {
    service: {
      port: 3000,
    },
    mysql: {
      cms: {
        host: '47.98.230.130',
        port: 3306,
        user: 'root',
        password: 'q1w2e3r4',
        database: 'bookstore',
        debug: ['ComQueryPacket'],
      },
    },
    redis: {
      /*host: '47.98.230.130',
      port: 6379,
      password: 'q1w2e3r4',
      db: 0,*/
      host: '192.168.23.119',
      port: 6379,
      db: 1,
    },
    oss: {
      endpoint: 'oss-cn-beijing.aliyuncs.com',
      accessKeyId: '3DY6vP2EJZZSQuoH',
      accessKeySecret: 'isBfiTaaJctCuo4AUOqXQDXihvfqHj',
      bucket: 'bj-feiyuantu',
    },
    nms: {
      accountId: '1449321991392367',
      keyId: 'LTAIHSOvgtIVCnen',
      keySecret: '1pKkU1G1D9HvFH7VKhAgri5j1TIlaD',
      mgName: 'vcg-download-records-test',
      region: '',
    },
    api: {
      content: 'http://test-edgeservice.vcg.com',//search
      resource: 'http://test-resourceservice.vcg.com',
      cms: 'http://test-cmsservice.vcg.com',
      passport: 'http://test-passportservice.vcg.com',
      auth: 'http://test-authservice.vcg.com',
      download: 'http://test-downloadservice.vcg.com',
      boss: 'http://test-account.bossnew.vcg.com',
      onebox: 'http://192.168.0.203:8080',
      searchSign:'http://192.168.0.206:9108',
      ucToken: 'ff05f8ef2433785ec6467be1ba44e2301',
      paService : 'http://test-paservice.vcg.com',
    },
    imgUrl: '//goss.vcg.com',
    ossUrl: '//bj-feiyuantu.oss-cn-beijing.aliyuncs.com',
    prefix: {
      oss: '//goss.vcg.com/',
    },
    captchaWhiteList: [
      '4e850d6e-163c-4c79-951e-0438d9761156',
    ],
  },
  production: {
    service: {
      port: 3000,
    },
    mysql: {
      cms: {
        host: '47.98.230.130',
        port: 3306,
        user: 'root',
        password: 'q1w2e3r4',
        database: 'bookstore',
        debug: ['ComQueryPacket'],
      },
    },
    redis: {
      host: '7b4c5d6f0ebe48d2.redis.rds.aliyuncs.com',
      password: 'MoUcJkv4',
      port: 6379,
      db: 1,
    },
    oss: {
      endpoint: 'vpc100-oss-cn-beijing.aliyuncs.com',
      accessKeyId: '3DY6vP2EJZZSQuoH',
      accessKeySecret: 'isBfiTaaJctCuo4AUOqXQDXihvfqHj',
      bucket: 'bj-feiyuantu',
    },
    nms: {
      accountId: '1449321991392367',
      keyId: 'LTAIHSOvgtIVCnen',
      keySecret: '1pKkU1G1D9HvFH7VKhAgri5j1TIlaD',
      mgName: 'vcg-download-records',
      region: '-internal-vpc',
    },
    api: {
      auth: 'http://authservice.vcg.com',
      download: 'http://downloadservice.vcg.com',
      passport: 'http://passportservice.vcg.com',
      ucToken: 'ff05f8ef2433785ec6467be1ba44e2301',
      content: 'http://edgeservice.vcg.com',
      resource: 'http://resourceservice.vcg.com',
      cms: 'http://cmsservice.vcg.com',
      boss: 'http://account.boss.vcg.com',
      onebox: 'http://172.16.240.188:8080',
      searchSign:'http://172.16.241.81:9108',
      paService : 'http://paservice.vcg.com',
    },
    imgUrl: '//goss.vcg.com',
    ossUrl: '//goss.vcg.com',
    prefix: {
      oss: '//goss.vcg.com',
    },
    captchaWhiteList: [
      '4e850d6e-163c-4c79-951e-0438d9761156',
    ],
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];
