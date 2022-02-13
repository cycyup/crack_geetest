# geetest极验第三代空间推理验证码破解
说明：在网上看到很多破解了极验的滑动验证码和文字点选验证码，但是很少见破解空间推理的，就训练了个yolo模型，试试在验证码上的效果。
同时通过反爬极验的接口获取的加密方法，使用requests，因此比网上已有的selenium自动化浏览器点击滑动破解验证码的方法相比，速度极快，需要的依赖也少。   
![image](https://github.com/cycyup/crack_geetest/blob/main/images/test1.jpg)  
模型的精度为0.97 预测速度在GTX1070ti上能达到30ms，就算在最低配1核cpu 2G内存最低配的服务器上也能达到200ms，足够一定量并发预测   

## **声明**
**本项目仅供学习交流使用，严禁用于商业和违法行为，否则产生的一切后果与本人无关！！！！**

## **破解**   
### 使用方法  
1.从需要破解验证码的网页上获取验证码的gt和challenge 
2.使用gt和challenge的获取验证码类型，获取图片、文字信息和一些生成。
```
url = 'https://api.geetest.com/ajax.php'

payload = {
  'gt': 'c9428d9361cd70d26e28d7cd780ec640',
  'challenge': '33146d766e1c5632215cf424ec17e5ef',
  'lang': 'zh-cn',
  'pt': 0',
  'client_type': 'web',
  'w': 'Y1gV9CACfWsfd)vtGUQD(WuKBZnmxhgfpXfD)qDHwhG(h1F4rOco……(略) //点击的坐标和一些信息的加密信息
  'callback': 'geetest_1644752017507'
}
```
上面的请求是获取validate的最后一步，可以看出只要获得 
1.yolo训练一个定位模型，定位物体形状、颜色和位置。  
2.分析文本确实需要点击的物体位置。

## 细教程（图文并茂）已发表在

## 觉得不错帮忙Star一下
