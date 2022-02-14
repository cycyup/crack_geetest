# geetest极验第三代空间推理验证码破解
在网上看到很多破解了极验的滑动验证码和文字点选验证码，但是没怎么见破解空间推理的，就训练了个yolo模型，试试破解这个每次都要要思考好久的验证码。
同时通过反爬极验的接口获取的加密方法，使用requests，因此比网上已有的selenium自动化浏览器点击滑动破解验证码的方法相比，速度极快，需要的依赖也少。   
     
![image](https://github.com/cycyup/crack_geetest/blob/main/images/test1.jpg)     
       
训练的模型的精度为0.96 预测速度在GTX1070ti上能达到30ms，就算在最低配1核cpu 2G内存最低配的服务器上也能达到200ms，足够一定量并发预测   

## **声明**
**本项目仅供学习交流使用，严禁用于商业和违法行为，否则产生的一切后果与本人无关！！！！**

## **破解**     
1.从需要破解验证码的网页上获取验证码的gt和challenge    
2.使用gt和challenge的获取验证码类型，获取图片、文字信息和一些生成。   
    
对存在验证码的网页抓包可以看到，验证步骤分为获取图片获取js，在网页中弹出验证码。
```
url = 'https://api.geetest.com/get.php'
# 请求参数
is_next: true
type: click
gt: c9428d9361cd70d26e28d7cd780ec640
challenge: 6c6c16991df7b7fa7596ee70872f96bf
lang: zh-cn
https: true
protocol: https://
offline: false
product: float
api_server: api.geetest.com
isPC: true
autoReset: true
width: 100%
callback: geetest_1644770447212

# 请求响应
"data": {
    "theme": "silver",
    "theme_version": "1.5.0",
    "static_servers": ["static.geetest.com/", "dn-staticdown.qbox.me/"],
    "api_server": "api.geetest.com",
    "logo": false,
    "sign": "\u8bf7_\u70b9\u51fb_\u5728\u5927\u578b\u7eff\u8272\u7403\u4f53\u540e\u9762\u7684\u7ea2\u8272\u7269\u4f53\u3002", # 点击物体的文字信息
    "pic": "/nerualpic/space_l1_zh_2019.07.17/space/587417a058088f2f5934e22fcc503980.jpg",  # 图片的url地址，同时也是后续加密生成w需要
    "pic_type": "space",
    "num": 0,
    "c": [12, 58, 98, 36, 43, 95, 62, 15, 12],  # 后续生成w需要
    "s": "514c622c",  # 后续加密生成w需要
    ······
  }
```
点击坐标后提交，将坐标等加密给服务器，返回validate表示通过验证码
```
url = 'https://api.geetest.com/ajax.php'
# 请求参数
'gt': 'c9428d9361cd70d26e28d7cd780ec640',
'challenge': '33146d766e1c5632215cf424ec17e5ef',
'lang': 'zh-cn',
'pt': 0',
'client_type': 'web',
'w': 'Y1gV9CACfWsfd)vtGUQD(WuKBZnmxhgfpXfD)qDHwhG(h1F4rOco··· //点击的坐标和一些信息的加密信息（点击坐标，图片pic，上面的c和s内容）
'callback': 'geetest_1644752017507'

# 请求响应
{
     "status": "success", 
     "data": {
          "result": 
          "success", 
          "validate": "23ff2a4fddac68b9e40884befcfbb9af", 
          "score": "1"
          }
}
```
有了validate就可以和gt，challenge一起交给需要登录的网站做验证了。   
详细破解js的教程在csdn找，这里提供个接口可以传图片等参数可以生成w。


yolo训练一个定位模型，定位物体形状、颜色和位置。  

分析文本确实需要点击的物体位置。

## 细教程（图文并茂）已发表在

## 觉得不错帮忙Star一下
