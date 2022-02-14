import requests

url = 'http://116.62.154.65:5550/object_detection'

data = {
	"challenge": "f218e6a104e53a84b6e2d898d511f4db",
	"pic": "/nerualpic/space_l1_zh_2019.07.17/space/ae4f979da27fd0c6b7b0a8a515b71216.jpg",
	"sign": "\u8bf7_\u70b9\u51fb_\u4e0e\u7ea2\u8272\u7269\u4f53\u6709\u76f8\u540c\u5f62\u72b6\u7684\u5927\u578b\u7269\u54c1\u3002",
}
response = requests.post(url, json=data)
print(response.text)
# 响应内容
# {
#     "coordinate": "7730_5479",  # 归一化坐标，x方向0.773，y方向0.5479
#     "labels": [
#         {
#             "confidence": 0.8949509859085083,  # 置信度过小可以判定为错误定位
#             "name": "红方块",    # 物体颜色和形状 为了准确性没有分类大小
#             "xmax": 171.88429260253906, 	# 物体的大小可以通过高度判断
#             "xmin": 76.12577819824219,
#             "ymax": 248.02699279785156,
#             "ymin": 149.64186096191406
#         },
# 		······
#         {
#             "confidence": 0.7747563719749451,
#             "name": "绿多面体",
#             "xmax": 188.7611846923828,
#             "xmin": 148.63084411621094,
#             "ymax": 258.1257629394531,
#             "ymin": 220.86749267578125
#         }
#     ]
# }

url = 'http://116.62.154.65:5550/get_w'

data = {
	"challenge": "f218e6a104e53a84b6e2d898d511f4db",
	"pic": "/nerualpic/space_l1_zh_2019.07.17/space/ae4f979da27fd0c6b7b0a8a515b71216.jpg",
	"sign": "\u8bf7_\u70b9\u51fb_\u4e0e\u7ea2\u8272\u7269\u4f53\u6709\u76f8\u540c\u5f62\u72b6\u7684\u5927\u578b\u7269\u54c1\u3002",
	"gt": "c9428d9361cd70d26e28d7cd780ec640",
	"c": "[12, 58, 98, 36, 43, 95, 62, 15, 12]",
	"s": "4b724676",
	"coordinate": "7425_2999"
}
response = requests.post(url, json=data)
print(response.text)
# 响应内容
# {
# 	"w": "WvLPZfSdSRyvbP14WaORKr4LyFWQHmJUhndRcND)8m8Ww9Q5JTK1MlHfUgnD3SVN2jM······"
# }
