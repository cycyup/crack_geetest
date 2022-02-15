import requests
import json


headers = {
	'Content-Type': 'application/json'
}


def get_w(gt, challenge, pic, sign, c, s):
	url = 'http://116.62.154.65:5550/object_detection'

	payload= {
		"challenge": challenge,
		"pic": pic,
		"sign": sign,
	}
	response = requests.post(url, json=payload, headers=headers)
	response = json.loads(response.text)
	print(response)
	coordinate = response['coordinate']

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

	payload = {
		"challenge": challenge,
		"pic": pic,
		"gt": gt,
		"c": c,
		"s": s,
		"coordinate": coordinate
	}
	response = requests.post(url, json=payload, headers=headers)
	print(response.text)
	# 响应内容
	# {
	# 	"w": "WvLPZfSdSRyvbP14WaORKr4LyFWQHmJUhndRcND)8m8Ww9Q5JTK1MlHfUgnD3SVN2jM······"
	# }
	return json.loads(response.text)['w']
