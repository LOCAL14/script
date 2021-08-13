//By Zachary
// QX
// [Rewrite_local]
// ^https:\/\/srv\.app\.ikea\.cn\/configs\/abtest url script-response-body https://gitee.com/local14/script/raw/master/IkeaConfig.js
// [MitM]
// host = srv.app.ikea.cn

try {
  var obj = JSON.parse($response.body);
  obj = {
	"app_home_show_all_ranking":"true",
	"show_cms_more_ranking":"true",
	"back_to_school_kv":"dark",
	"open_developer_mode":"true",
	"ins_list_show_article_folders":"true",
	"use_new_time_window_api":"true",
	"show_recommended_home_ranking" : "show",
	"product_info_source" : "salesItem",
	"pip_show_video" : "true",
	"is_new_ins_card" : "true",
	"show_review_item_type" : "true",
	"show_comment_detail" : "true",
	"login_flow" : "ciam",
	"pip_product_recommendation" : "dap",
	"show_trial_report" : "true",
	"pip_featured_review_layout" : "true",
	"show_event_booking" : "tester",
	"ad_pax_design" : "online-design",
	"add_to_store_shopping_list_button" : "new",
	"bannner_copy_test_lowerthan9" : "lowthan9p9",
	"home_pax_entrance_style" : "light",
	"selling_point" : "selling_point_A",
	"smp_homepage_show_pax" : "tester",
	"me_show_event_booking_entrance" : "true",
	"friends_referral_banner" : "show",
	"home_test_entrance" : "tester",
	"pip_you_may_like" : "dap",
	"pip_show_pax_local_content" : "true",
	"pip_show_promotion_info" : "true",
	"cart_show_addon_items" : "addon_a",
	"no_order_user_banner" : "149show",
	"checkout" : "ccs",
	"fuzzy_search" : "sik",
	"product_recommend_notification" : "push",
	"payment_test_banner" : "normal",
	"payment_gateway_version" : "v2",
	"review_publish_layout" : "up",
	"new_similar" : "true",
	"cart_recommendation" : "version-a",
	"signature_authorization" : "required",
	"show_review" : "true",
	"home_product_recommendation" : "personalized",
	"product_recommendation_algorithm" : "manual",
	"show_category_in_search" : "true",
	"pip_show_ranking_tag" : "true"
  }
  console.log("IKEA Config：成功");
} catch (e) {
  console.warn("IKEA Config：" + e);
} finally {
  $done({ body: JSON.stringify(obj) });
}
