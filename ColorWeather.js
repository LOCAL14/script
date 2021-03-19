//By Zachary
// QX
// [Rewrite_local]
// ^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body https://gitee.com/local14/script/raw/master/ColorWeather.js
// [MitM]
// host = biz.caiyunapp.com

try {
  var obj = JSON.parse($response.body);
  obj.result["xy_vip_expire"] = 0;
  obj.result["vip_expired_at"] = 0;
  obj.result["svip_expired_at"] = 4096483190.5724830627;
  obj.result["is_xy_vip"] = false;
  obj.result["xy_svip_expire"] = 0;
  obj.result["is_xy_auto_renewal"] = false;
  obj.result["vip_type"] = "s";
  obj.result["is_vip"] = true;
  obj.result.wt = {
    vip: {
      enabled: true,
      is_auto_renewal: false,
      auto_renewal_type: "",
      svip_auto_renewal_type: "",
      svip_expired_at: 4096483190.5724830627,
      expired_at: 0,
    },
    last_acted_at: 1616127107.3484880924,
    created_at: 1616127107.3484880924,
    is_login: true,
  };
  console.log("彩云天气APP-SVIP：激活成功");
} catch (e) {
  console.warn("彩云天气APP-SVIP：" + e);
} finally {
  $done({ body: JSON.stringify(obj) });
}

// 原始 Response 参考
// {
// 	"result": {
// 		"xy_vip_expire": 0,
// 		"vip_expired_at": 0,
// 		"ranking_above": 0,
// 		"auto_renewal_type": "",
// 		"third_party_id": null,
// 		"svip_expired_at": 1618719129.5724830627,
// 		"is_login": true,
// 		"is_xy_vip": false,
// 		"platform_name": "caiyun",
// 		"xy_svip_expire": 0,
// 		"third_party_ids": [],
// 		"score": 2000,
// 		"is_xy_auto_renewal": false,
// 		"is_primary": true,
// 		"phone_num": "15395469582",
// 		"free_trial": 0,
// 		"last_acted_at": 1616127107.3484880924,
// 		"vip_type": "s",
// 		"is_phone_verified": true,
// 		"wt": {
// 			"vip": {
// 				"enabled": true,
// 				"is_auto_renewal": false,
// 				"auto_renewal_type": "",
// 				"svip_auto_renewal_type": "",
// 				"svip_expired_at": 1618719129.5724830627,
// 				"expired_at": 0
// 			},
// 			"last_acted_at": 1616127107.3484880924,
// 			"created_at": 1616127107.3484880924,
// 			"is_login": true
// 		},
// 		"device_id": "89602B62-A6F3-4879-B230-A42F4A8CB4CD",
// 		"name": "***9582",
// 		"bound_status": {
// 			"qq": {
// 				"username": "",
// 				"is_bound": false,
// 				"id": ""
// 			},
// 			"weibo": {
// 				"username": "",
// 				"is_bound": false,
// 				"id": ""
// 			},
// 			"google": {
// 				"username": "",
// 				"is_bound": false,
// 				"id": ""
// 			},
// 			"apple": {
// 				"username": "",
// 				"is_bound": false,
// 				"id": ""
// 			},
// 			"weixin": {
// 				"username": "",
// 				"is_bound": false,
// 				"id": ""
// 			},
// 			"caiyun": {
// 				"username": "",
// 				"is_bound": true,
// 				"id": "60542483812a060013755778"
// 			},
// 			"twitter": {
// 				"username": "",
// 				"is_bound": false,
// 				"id": ""
// 			},
// 			"facebook": {
// 				"username": "",
// 				"is_bound": false,
// 				"id": ""
// 			}
// 		},
// 		"created_at": 1616127107.3471269608,
// 		"is_auto_renewal": false,
// 		"hasBeenInvited": true,
// 		"platform_id": "",
// 		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNjA1NDI0ODM4MTJhMDYwMDEzNzU1Nzc4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNjE4NzE5MTI5LjU3MjQ4MywidmlwX2V4cGlyZWRfYXQiOjB9.xeFcQveTPM_JTJhFjLbX8zMlDRxC-B1sziG3_-ZB1Gs",
// 		"svip_given": 0,
// 		"avatar": "https:\/\/caiyunapp.com\/imgs\/webtrs\/default.png",
// 		"is_vip": true,
// 		"gender": "0",
// 		"_id": "60542483812a060013755778"
// 	},
// 	"rc": 0
// }
