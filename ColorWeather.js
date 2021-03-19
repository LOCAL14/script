var obj = JSON.parse($response.body);
obj.result["xy_vip_expire"] = 4096483190;
obj.result["is_vip"] = true;
obj.result["vip_expired_at"] = 4096483190;
obj.result["svip_expired_at"] = 4096483190;
obj.result["xy_svip_expire"] = 4096483190;
obj.result["is_xy_vip"] = true;
obj.result["vip_type"] = "svip";
obj.result.wt = {
  vip: {
    is_auto_renewal: false,
    enabled: true,
    auto_renewal_type: "",
    expired_at: 4096483190,
  },
};

console.log(JSON.stringify(obj));

$done({ body: JSON.stringify(obj) });
