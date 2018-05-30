/*
/!**
 * Created by songzhongkun on 2018/5/29.
 *!/

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: '516132823@qq.com',
    pass: 'lahghlztgxxebhff', //授权码,通过QQ获取
  }
});

const mailOptions = {
  from: '516132823@qq.com', // 发送者
  to: '13552186047@163.com', // 接受者,可以同时发送多个,以逗号隔开
  subject: 'node发送邮件测试', // 标题
  text: 'Hello world', // 文本
  html: `<h2>nodemailer基本使用:</h2>
         <h3>
           <a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">
            http://blog.csdn.net/zzwwjjdj1/article/details/51878392
           </a>
         </h3>`
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('发送成功');
});*/
