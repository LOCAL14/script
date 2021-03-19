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

console.log(JSON.stringify(obj));

$done({ body: JSON.stringify(obj) });
