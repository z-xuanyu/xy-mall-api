/*
 Navicat Premium Data Transfer

 Source Server         : xy-mall
 Source Server Type    : MongoDB
 Source Server Version : 40406
 Source Host           : 175.178.107.120:27017
 Source Schema         : nest-jp

 Target Server Type    : MongoDB
 Target Server Version : 40406
 File Encoding         : 65001

 Date: 01/07/2022 11:22:38
*/


// ----------------------------
// Collection structure for admins
// ----------------------------
db.getCollection("admins").drop();
db.createCollection("admins");
db.getCollection("admins").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of admins
// ----------------------------
db.getCollection("admins").insert([ {
    _id: ObjectId("62417ee6365ac84317c0ada3"),
    name: "阿宇_Coder",
    email: "xuanyu@qq.com",
    password: "$2a$10$MglruXVXzi0jCFgaTmHqTuS5zX52FqLffUwwj6DGmeBBUHc3Yji2m",
    roleIds: [
        ObjectId("62416f318fef456a9d24af6d"),
        ObjectId("62416f988fef456a9d24af8c")
    ],
    status: true,
    isOnline: false,
    createdAt: ISODate("2022-03-28T09:24:54Z"),
    updatedAt: ISODate("2022-03-28T09:24:54Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("admins").insert([ {
    _id: ObjectId("624183a229ef98646b3c1182"),
    name: "测试员",
    email: "test@qq.com",
    password: "$2a$10$hogRwfT1s.mzSs7BZAAUOuGyrfTsC57rauPPT3lIGLFGH6MMHmge6",
    roleIds: [
        ObjectId("62416f988fef456a9d24af8c")
    ],
    status: true,
    isOnline: false,
    createdAt: ISODate("2022-03-28T09:45:06Z"),
    updatedAt: ISODate("2022-03-28T09:45:06Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for banners
// ----------------------------
db.getCollection("banners").drop();
db.createCollection("banners");

// ----------------------------
// Documents of banners
// ----------------------------
db.getCollection("banners").insert([ {
    _id: ObjectId("620635331f625fb6a4893f08"),
    name: "测试图片",
    sort: NumberInt("1"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner2.png",
    url: "https://www.zhouxuanyu.com",
    type: NumberInt("3"),
    status: NumberInt("2"),
    productId: null,
    createdAt: ISODate("2022-02-11T10:06:43Z"),
    updatedAt: ISODate("2022-06-10T06:15:55Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("6225db479516ca9a73884764"),
    name: "测试图片二",
    sort: NumberInt("1"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner3.png",
    type: NumberInt("3"),
    status: NumberInt("2"),
    product: null,
    createdAt: ISODate("2022-03-07T10:15:35Z"),
    updatedAt: ISODate("2022-06-10T06:16:06Z"),
    __v: NumberInt("0"),
    url: ""
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("6225db579516ca9a7388476b"),
    name: "测试图片三",
    sort: NumberInt("1"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner4.png",
    type: NumberInt("3"),
    status: NumberInt("2"),
    product: null,
    createdAt: ISODate("2022-03-07T10:15:51Z"),
    updatedAt: ISODate("2022-06-10T06:16:14Z"),
    __v: NumberInt("0"),
    url: ""
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("62a3044d479871a591e17226"),
    name: "第四张",
    sort: NumberInt("1"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner5.png",
    type: NumberInt("2"),
    status: NumberInt("2"),
    product: ObjectId("6225dc919516ca9a7388479d"),
    createdAt: ISODate("2022-06-10T08:43:57Z"),
    updatedAt: ISODate("2022-06-20T03:47:07Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("62a306f2eab41d95a86c4bc0"),
    name: "第五张",
    sort: NumberInt("1"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner6.png",
    type: NumberInt("3"),
    status: NumberInt("2"),
    product: null,
    createdAt: ISODate("2022-06-10T08:55:14Z"),
    updatedAt: ISODate("2022-06-10T08:55:14Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for categories
// ----------------------------
db.getCollection("categories").drop();
db.createCollection("categories");

// ----------------------------
// Documents of categories
// ----------------------------
db.getCollection("categories").insert([ {
    _id: ObjectId("620713cc1f625fb6a4893f2b"),
    name: "清酒",
    sort: NumberInt("1"),
    status: true,
    parentId: null,
    createdAt: ISODate("2022-02-12T01:56:28Z"),
    updatedAt: ISODate("2022-06-14T06:05:51Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("620713e91f625fb6a4893f32"),
    name: "烧酒",
    sort: NumberInt("2"),
    status: true,
    parentId: ObjectId("620713cc1f625fb6a4893f2b"),
    createdAt: ISODate("2022-02-12T01:56:57Z"),
    updatedAt: ISODate("2022-06-20T03:50:28Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("62a70826fca92aa5f242171b"),
    name: "休闲零食",
    sort: NumberInt("1"),
    status: true,
    parentId: null,
    thumbnail: "https://m.360buyimg.com/n2/jfs/t1/124512/30/4055/648064/5ed85dacE631811d6/a1ddb3d215909a1f.jpg",
    createdAt: ISODate("2022-06-13T09:49:26Z"),
    updatedAt: ISODate("2022-06-13T09:49:26Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("62b020dca0c39134030b5baf"),
    name: "女装",
    sort: NumberInt("1"),
    status: true,
    parentId: null,
    thumbnail: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/category-default.png",
    createdAt: ISODate("2022-06-20T07:25:16Z"),
    updatedAt: ISODate("2022-06-20T07:25:16Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("62b02138a0c39134030b5bd7"),
    name: "连衣裙",
    sort: NumberInt("1"),
    status: true,
    parentId: ObjectId("62b020dca0c39134030b5baf"),
    thumbnail: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/img-9.png",
    createdAt: ISODate("2022-06-20T07:26:48Z"),
    updatedAt: ISODate("2022-06-20T07:26:48Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for chat_conversation_records
// ----------------------------
db.getCollection("chat_conversation_records").drop();
db.createCollection("chat_conversation_records");

// ----------------------------
// Documents of chat_conversation_records
// ----------------------------

// ----------------------------
// Collection structure for chatmessages
// ----------------------------
db.getCollection("chatmessages").drop();
db.createCollection("chatmessages");
db.getCollection("chatmessages").createIndex({
    "$**": "text"
}, {
    name: "messageType_text",
    background: true,
    weights: {
        messageType: NumberInt("1")
    },
    "default_language": "english",
    "language_override": "language",
    textIndexVersion: NumberInt("3")
});

// ----------------------------
// Documents of chatmessages
// ----------------------------

// ----------------------------
// Collection structure for classify_navigations
// ----------------------------
db.getCollection("classify_navigations").drop();
db.createCollection("classify_navigations");

// ----------------------------
// Documents of classify_navigations
// ----------------------------
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("62551f6eafc7fb6c338d8bb9"),
    name: "领优惠券",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/ef33d202202070934578006.png",
    type: NumberInt("1"),
    pagePath: "/pages/coupon/index",
    status: true,
    remark: "领优惠券页面",
    createdAt: ISODate("2022-04-12T06:42:54Z"),
    updatedAt: ISODate("2022-04-12T06:42:54Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("62551fb9afc7fb6c338d8bc0"),
    name: "我的收藏",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/e2911202202070934578221.png",
    type: NumberInt("1"),
    pagePath: "/pages/user/collection/index",
    status: true,
    remark: "用户收藏商品页面",
    createdAt: ISODate("2022-04-12T06:44:09Z"),
    updatedAt: ISODate("2022-04-12T06:44:09Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("62552028afc7fb6c338d8bc7"),
    name: "我的推广",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/274d0202202070934582616.png",
    type: NumberInt("1"),
    pagePath: "/pgaes/user/promoter-list/index",
    status: true,
    remark: "会员推广页面",
    createdAt: ISODate("2022-04-12T06:46:00Z"),
    updatedAt: ISODate("2022-04-12T06:46:00Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("62552104afc7fb6c338d8bce"),
    name: "我要签到",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/432c4202202070934585675.png",
    type: NumberInt("1"),
    pagePath: "/pages/users/user_sgin/index",
    status: true,
    remark: "我要签到页面",
    createdAt: ISODate("2022-04-12T06:49:40Z"),
    updatedAt: ISODate("2022-04-12T07:33:57Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("62552132afc7fb6c338d8bd5"),
    name: "新闻资讯",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/5e3f2202202070934581197.png",
    type: NumberInt("1"),
    pagePath: "/pages/news_list/index",
    status: true,
    remark: "新闻资讯页面",
    createdAt: ISODate("2022-04-12T06:50:26Z"),
    updatedAt: ISODate("2022-04-12T06:50:26Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("6255218cafc7fb6c338d8bdc"),
    name: "秒杀活动",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/f2e56202202070934588409.png",
    type: NumberInt("1"),
    pagePath: "/pages/activity/goods_seckill/index",
    status: true,
    remark: "秒杀活动页面",
    createdAt: ISODate("2022-04-12T06:51:56Z"),
    updatedAt: ISODate("2022-04-12T06:51:56Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("625521baafc7fb6c338d8be3"),
    name: "拼团活动",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6cedd202202070934588755.png",
    type: NumberInt("1"),
    pagePath: "/pages/activity/goods_combination/index",
    status: true,
    remark: "拼团活动",
    createdAt: ISODate("2022-04-12T06:52:42Z"),
    updatedAt: ISODate("2022-04-12T06:52:42Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("625521e7afc7fb6c338d8bea"),
    name: "砍价活动",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/44d8c202202070934585071.png",
    type: NumberInt("1"),
    pagePath: "/pages/activity/goods_bargain/index",
    status: true,
    remark: "砍价活动页面",
    createdAt: ISODate("2022-04-12T06:53:27Z"),
    updatedAt: ISODate("2022-04-12T06:53:27Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("6255220aafc7fb6c338d8bf1"),
    name: "积分商城",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/9182a202202070934586200.png",
    type: NumberInt("1"),
    pagePath: "/pages/points_mall/index",
    status: true,
    remark: "积分商城页面",
    createdAt: ISODate("2022-04-12T06:54:02Z"),
    updatedAt: ISODate("2022-04-12T07:14:26Z"),
    __v: NumberInt("0"),
    sort: NumberInt("1")
} ]);
db.getCollection("classify_navigations").insert([ {
    _id: ObjectId("62552237afc7fb6c338d8bf8"),
    name: "积分抽奖",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/32bcf202202070934584706.png",
    type: NumberInt("1"),
    pagePath: "/pages/activity/lottery/grids/index",
    status: true,
    remark: "积分抽奖页面",
    createdAt: ISODate("2022-04-12T06:54:47Z"),
    updatedAt: ISODate("2022-04-12T07:12:01Z"),
    __v: NumberInt("0"),
    sort: NumberInt("2")
} ]);

// ----------------------------
// Collection structure for coupons
// ----------------------------
db.getCollection("coupons").drop();
db.createCollection("coupons");

// ----------------------------
// Documents of coupons
// ----------------------------

// ----------------------------
// Collection structure for customer_services
// ----------------------------
db.getCollection("customer_services").drop();
db.createCollection("customer_services");

// ----------------------------
// Documents of customer_services
// ----------------------------

// ----------------------------
// Collection structure for library_categories
// ----------------------------
db.getCollection("library_categories").drop();
db.createCollection("library_categories");

// ----------------------------
// Documents of library_categories
// ----------------------------
db.getCollection("library_categories").insert([ {
    _id: ObjectId("6204bd5b1d797993f869774f"),
    name: "Banner",
    parentId: null,
    createdAt: ISODate("2022-02-10T07:23:07Z"),
    updatedAt: ISODate("2022-02-10T07:23:07Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("library_categories").insert([ {
    _id: ObjectId("6226cd6f34e951c07a467d6a"),
    name: "商品",
    parentId: null,
    createdAt: ISODate("2022-03-08T03:28:47Z"),
    updatedAt: ISODate("2022-03-08T03:28:47Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("library_categories").insert([ {
    _id: ObjectId("6254fb07afc7fb6c338d8a6b"),
    name: "首页导航",
    parentId: null,
    createdAt: ISODate("2022-04-12T04:07:36Z"),
    updatedAt: ISODate("2022-04-12T04:07:36Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("library_categories").insert([ {
    _id: ObjectId("6255451e3b38008738c438a4"),
    name: "测试",
    parentId: null,
    createdAt: ISODate("2022-04-12T09:23:42Z"),
    updatedAt: ISODate("2022-04-12T09:23:42Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("library_categories").insert([ {
    _id: ObjectId("6275dec9c9bfc8f24591346b"),
    name: "商品2",
    parentId: ObjectId("6226cd6f34e951c07a467d6a"),
    createdAt: ISODate("2022-05-07T02:51:53Z"),
    updatedAt: ISODate("2022-05-07T02:51:53Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("library_categories").insert([ {
    _id: ObjectId("62b0206da0c39134030b5b66"),
    name: "女装",
    parentId: ObjectId("6226cd6f34e951c07a467d6a"),
    createdAt: ISODate("2022-06-20T07:23:25Z"),
    updatedAt: ISODate("2022-06-20T07:23:25Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("library_categories").insert([ {
    _id: ObjectId("62b0208ba0c39134030b5b71"),
    name: "连衣裙",
    parentId: ObjectId("62b0206da0c39134030b5b66"),
    createdAt: ISODate("2022-06-20T07:23:55Z"),
    updatedAt: ISODate("2022-06-20T07:23:55Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for media_libraries
// ----------------------------
db.getCollection("media_libraries").drop();
db.createCollection("media_libraries");

// ----------------------------
// Documents of media_libraries
// ----------------------------
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62062ee71f625fb6a4893ed3"),
    name: "3.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/e6fb1bcca1d360fba08bb66a08712a3c.jpg",
    createdAt: ISODate("2022-02-11T09:39:51Z"),
    updatedAt: ISODate("2022-02-11T09:39:51Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62062f0a1f625fb6a4893ede"),
    name: "3e6d23ca6c3a16fe.jpg",
    categoryId: null,
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg",
    createdAt: ISODate("2022-02-11T09:40:26Z"),
    updatedAt: ISODate("2022-02-11T09:40:26Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6225d8189516ca9a73884735"),
    name: "slideshow_img_371dd9.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/slideshow_img_371dd9.jpg",
    createdAt: ISODate("2022-03-07T10:02:00Z"),
    updatedAt: ISODate("2022-03-07T10:02:00Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6225d9d59516ca9a7388473b"),
    name: "slideshow_img_004192.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/slideshow_img_004192.jpg",
    createdAt: ISODate("2022-03-07T10:09:25Z"),
    updatedAt: ISODate("2022-03-07T10:09:25Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6225d9da9516ca9a73884741"),
    name: "slideshow_img_ac4d1b.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/slideshow_img_ac4d1b.jpg",
    createdAt: ISODate("2022-03-07T10:09:30Z"),
    updatedAt: ISODate("2022-03-07T10:09:30Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6226cd8534e951c07a467d74"),
    name: "微信图片_20220308094802.png",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220308094802.png",
    createdAt: ISODate("2022-03-08T03:29:09Z"),
    updatedAt: ISODate("2022-03-08T03:29:09Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6226cd9534e951c07a467d7a"),
    name: "7644-1624616821-1.png",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
    createdAt: ISODate("2022-03-08T03:29:25Z"),
    updatedAt: ISODate("2022-03-08T03:29:25Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6226cdbf34e951c07a467d80"),
    name: "257-1638773420-1.jpg",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
    createdAt: ISODate("2022-03-08T03:30:07Z"),
    updatedAt: ISODate("2022-03-08T03:30:07Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6226cde834e951c07a467d86"),
    name: "6930-1638773666-1.jpg",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg",
    createdAt: ISODate("2022-03-08T03:30:48Z"),
    updatedAt: ISODate("2022-03-08T03:30:48Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6226cecb34e951c07a467dd1"),
    name: "15758-1626952020-1.jpg",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/15758-1626952020-1.jpg",
    createdAt: ISODate("2022-03-08T03:34:35Z"),
    updatedAt: ISODate("2022-03-08T03:34:35Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6226cf6f34e951c07a467e08"),
    name: "1644807683-1_l.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/1644807683-1_l.jpg",
    createdAt: ISODate("2022-03-08T03:37:19Z"),
    updatedAt: ISODate("2022-03-08T03:37:19Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6226cf7434e951c07a467e0e"),
    name: "1645433138-1_l.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/1645433138-1_l.jpg",
    createdAt: ISODate("2022-03-08T03:37:24Z"),
    updatedAt: ISODate("2022-03-08T03:37:24Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6226cf7934e951c07a467e14"),
    name: "1645672634-1_l.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/1645672634-1_l.jpg",
    createdAt: ISODate("2022-03-08T03:37:29Z"),
    updatedAt: ISODate("2022-03-08T03:37:29Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551d9dafc7fb6c338d8afc"),
    name: "5e3f2202202070934581197.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/5e3f2202202070934581197.png",
    createdAt: ISODate("2022-04-12T06:35:09Z"),
    updatedAt: ISODate("2022-04-12T06:35:09Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551da6afc7fb6c338d8b02"),
    name: "6cedd202202070934588755.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6cedd202202070934588755.png",
    createdAt: ISODate("2022-04-12T06:35:18Z"),
    updatedAt: ISODate("2022-04-12T06:35:18Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551dabafc7fb6c338d8b08"),
    name: "32bcf202202070934584706.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/32bcf202202070934584706.png",
    createdAt: ISODate("2022-04-12T06:35:23Z"),
    updatedAt: ISODate("2022-04-12T06:35:23Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551db0afc7fb6c338d8b0e"),
    name: "9182a202202070934586200.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/9182a202202070934586200.png",
    createdAt: ISODate("2022-04-12T06:35:28Z"),
    updatedAt: ISODate("2022-04-12T06:35:28Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551db3afc7fb6c338d8b14"),
    name: "432c4202202070934585675.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/432c4202202070934585675.png",
    createdAt: ISODate("2022-04-12T06:35:31Z"),
    updatedAt: ISODate("2022-04-12T06:35:31Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551dbbafc7fb6c338d8b1a"),
    name: "44d8c202202070934585071.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/44d8c202202070934585071.png",
    createdAt: ISODate("2022-04-12T06:35:39Z"),
    updatedAt: ISODate("2022-04-12T06:35:39Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551dcfafc7fb6c338d8b2a"),
    name: "e2911202202070934578221.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/e2911202202070934578221.png",
    createdAt: ISODate("2022-04-12T06:35:59Z"),
    updatedAt: ISODate("2022-04-12T06:35:59Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551dd4afc7fb6c338d8b30"),
    name: "ef33d202202070934578006.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/ef33d202202070934578006.png",
    createdAt: ISODate("2022-04-12T06:36:04Z"),
    updatedAt: ISODate("2022-04-12T06:36:04Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551dd9afc7fb6c338d8b36"),
    name: "f2e56202202070934588409.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/f2e56202202070934588409.png",
    createdAt: ISODate("2022-04-12T06:36:09Z"),
    updatedAt: ISODate("2022-04-12T06:36:09Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62551df4afc7fb6c338d8b3c"),
    name: "274d0202202070934582616.png",
    categoryId: ObjectId("6254fb07afc7fb6c338d8a6b"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/274d0202202070934582616.png",
    createdAt: ISODate("2022-04-12T06:36:36Z"),
    updatedAt: ISODate("2022-04-12T06:36:36Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("625545283b38008738c438ac"),
    name: "cd20e7b7-8604-48d9-a993-cf94ef800d3b.gif",
    categoryId: ObjectId("6255451e3b38008738c438a4"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/cd20e7b7-8604-48d9-a993-cf94ef800d3b.gif",
    createdAt: ISODate("2022-04-12T09:23:52Z"),
    updatedAt: ISODate("2022-04-12T09:23:52Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6257f3a67cde7bb889f27b02"),
    name: "00fba5b8-5aae-466f-9eba-8551d039080b.jpg",
    categoryId: null,
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/00fba5b8-5aae-466f-9eba-8551d039080b.jpg",
    createdAt: ISODate("2022-04-14T10:12:54Z"),
    updatedAt: ISODate("2022-04-14T10:12:54Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("6257f6a8ca1e3541394d6b58"),
    name: "3.jpg",
    categoryId: null,
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/3.jpg",
    createdAt: ISODate("2022-04-14T10:25:44Z"),
    updatedAt: ISODate("2022-04-14T10:25:44Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62a2c66fe0d28cdfe9c593c1"),
    name: "banner2.png",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner2.png",
    createdAt: ISODate("2022-06-10T04:19:59Z"),
    updatedAt: ISODate("2022-06-10T04:19:59Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62a2e17a479871a591e16704"),
    name: "banner3.png",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner3.png",
    createdAt: ISODate("2022-06-10T06:15:22Z"),
    updatedAt: ISODate("2022-06-10T06:15:22Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62a2e17e479871a591e1670d"),
    name: "banner4.png",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner4.png",
    createdAt: ISODate("2022-06-10T06:15:26Z"),
    updatedAt: ISODate("2022-06-10T06:15:26Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62a2e182479871a591e16716"),
    name: "banner5.png",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner5.png",
    createdAt: ISODate("2022-06-10T06:15:30Z"),
    updatedAt: ISODate("2022-06-10T06:15:30Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62a2e185479871a591e1671f"),
    name: "banner6.png",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/banner6.png",
    createdAt: ISODate("2022-06-10T06:15:33Z"),
    updatedAt: ISODate("2022-06-10T06:15:33Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62b0209ea0c39134030b5b88"),
    name: "category-default.png",
    categoryId: ObjectId("62b0206da0c39134030b5b66"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/category-default.png",
    createdAt: ISODate("2022-06-20T07:24:14Z"),
    updatedAt: ISODate("2022-06-20T07:24:14Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62b020a6a0c39134030b5b93"),
    name: "nz-09a.png",
    categoryId: ObjectId("62b0208ba0c39134030b5b71"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09a.png",
    createdAt: ISODate("2022-06-20T07:24:22Z"),
    updatedAt: ISODate("2022-06-20T07:24:22Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62b020a9a0c39134030b5b9c"),
    name: "nz-09b.png",
    categoryId: ObjectId("62b0208ba0c39134030b5b71"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09b.png",
    createdAt: ISODate("2022-06-20T07:24:25Z"),
    updatedAt: ISODate("2022-06-20T07:24:25Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62b02117a0c39134030b5bc4"),
    name: "img-9.png",
    categoryId: ObjectId("62b0208ba0c39134030b5b71"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/img-9.png",
    createdAt: ISODate("2022-06-20T07:26:15Z"),
    updatedAt: ISODate("2022-06-20T07:26:15Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62b92e2c892ea55f3f957eb2"),
    name: "1.jpg",
    categoryId: null,
    url: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656303148093-1.jpg",
    storageType: NumberInt("1"),
    createdAt: ISODate("2022-06-27T04:12:28Z"),
    updatedAt: ISODate("2022-06-27T04:12:28Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("media_libraries").insert([ {
    _id: ObjectId("62b9494d892ea55f3f957f4a"),
    name: "1656310093435-1.jpg",
    categoryId: null,
    url: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656310093435-1.jpg",
    storageType: NumberInt("1"),
    createdAt: ISODate("2022-06-27T06:08:13Z"),
    updatedAt: ISODate("2022-06-27T06:08:13Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for menus
// ----------------------------
db.getCollection("menus").drop();
db.createCollection("menus");

// ----------------------------
// Documents of menus
// ----------------------------
db.getCollection("menus").insert([ {
    _id: ObjectId("62413d5b199676484a76c415"),
    name: "Shop",
    path: "/shop",
    component: "LAYOUT",
    meta: {
        icon: "ant-design:shop-twotone",
        disabled: false,
        hideMenu: false,
        title: "店铺管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("2"),
        _id: ObjectId("624276f0e21930fdd25dce74")
    },
    parentId: null,
    createdAt: ISODate("2022-03-28T04:45:15Z"),
    updatedAt: ISODate("2022-04-02T08:18:59Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62413e58199676484a76c438"),
    name: "ShopClassifyNavigation",
    path: "/shop/classify-navigation",
    component: "/shop/classify-navigation/index",
    meta: {
        icon: "ant-design:appstore-filled",
        disabled: false,
        hideMenu: false,
        title: "分类导航",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("624269155dc93a81fcd5232c")
    },
    parentId: ObjectId("62413d5b199676484a76c415"),
    createdAt: ISODate("2022-03-28T04:49:28Z"),
    updatedAt: ISODate("2022-03-29T02:04:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62415e76dc6e6a32af526c49"),
    name: "ShopHotProduct",
    path: "/shop/hot-product",
    component: "/shop/hot-product/index",
    meta: {
        icon: "bxs:hot",
        disabled: false,
        hideMenu: false,
        title: "热门推荐",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("2"),
        _id: ObjectId("6242691d5dc93a81fcd5234d")
    },
    parentId: ObjectId("62413d5b199676484a76c415"),
    createdAt: ISODate("2022-03-28T07:06:30Z"),
    updatedAt: ISODate("2022-03-29T02:04:13Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62415edadc6e6a32af526c57"),
    name: "ShopTimeLimitProduct",
    path: "/shop/time-limit",
    component: "/shop/time-limit-product/index",
    meta: {
        icon: "bx:select-multiple",
        disabled: false,
        hideMenu: false,
        title: "限时精选",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("624269255dc93a81fcd5236e")
    },
    parentId: ObjectId("62413d5b199676484a76c415"),
    createdAt: ISODate("2022-03-28T07:08:10Z"),
    updatedAt: ISODate("2022-03-29T02:04:21Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62415f35dc6e6a32af526c67"),
    name: "Product",
    path: "/product",
    component: "LAYOUT",
    meta: {
        icon: "bx:bxl-product-hunt",
        disabled: false,
        hideMenu: false,
        title: "商品管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("3"),
        _id: ObjectId("6248071d80c807ce1a35522a")
    },
    parentId: null,
    createdAt: ISODate("2022-03-28T07:09:41Z"),
    updatedAt: ISODate("2022-04-02T08:51:43Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62415ff4dc6e6a32af526c88"),
    name: "Product",
    path: "/product/index",
    component: "/product/index",
    meta: {
        icon: "ci:list-checklist",
        disabled: false,
        hideMenu: false,
        title: "商品列表",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("2"),
        _id: ObjectId("624269365dc93a81fcd523bd")
    },
    parentId: ObjectId("62415f35dc6e6a32af526c67"),
    createdAt: ISODate("2022-03-28T07:12:52Z"),
    updatedAt: ISODate("2022-03-29T02:04:38Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6241604ddc6e6a32af526c9c"),
    name: "ProductCategory",
    path: "/product/category",
    component: "/product/category/index",
    meta: {
        icon: "bx:bx-category",
        disabled: false,
        hideMenu: false,
        title: "商品分类",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("2"),
        _id: ObjectId("6242693b5dc93a81fcd523de")
    },
    parentId: ObjectId("62415f35dc6e6a32af526c67"),
    createdAt: ISODate("2022-03-28T07:14:21Z"),
    updatedAt: ISODate("2022-03-29T02:04:43Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6241610edc6e6a32af526cb2"),
    name: "Member",
    path: "/member",
    component: "LAYOUT",
    meta: {
        icon: "gg:user-list",
        disabled: false,
        hideMenu: false,
        title: "会员管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("3"),
        _id: ObjectId("624269405dc93a81fcd523fd")
    },
    parentId: null,
    createdAt: ISODate("2022-03-28T07:17:34Z"),
    updatedAt: ISODate("2022-04-07T02:58:24Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62416134dc6e6a32af526cca"),
    name: "Member",
    path: "/member/index",
    component: "/member/index",
    meta: {
        icon: "ant-design:unordered-list-outlined",
        disabled: false,
        hideMenu: false,
        title: "会员列表",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("3"),
        _id: ObjectId("624269495dc93a81fcd5241e")
    },
    parentId: ObjectId("6241610edc6e6a32af526cb2"),
    createdAt: ISODate("2022-03-28T07:18:12Z"),
    updatedAt: ISODate("2022-03-29T02:04:57Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62416277dc6e6a32af526cfc"),
    name: "SystemSetting",
    path: "/system-setting",
    component: "LAYOUT",
    meta: {
        icon: "ant-design:setting-outlined",
        disabled: false,
        hideMenu: false,
        title: "系统设置",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("99"),
        _id: ObjectId("6247fa34ff80250484b55316")
    },
    parentId: null,
    createdAt: ISODate("2022-03-28T07:23:35Z"),
    updatedAt: ISODate("2022-04-02T07:24:36Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6241633adc6e6a32af526d40"),
    name: "SystemSettingPermissionsAdmin",
    path: "/system-setting/permissions/account",
    component: "/system-setting/permissions/admin/index",
    meta: {
        icon: "line-md:account",
        disabled: false,
        hideMenu: false,
        title: "管理员账号",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("99"),
        _id: ObjectId("6242b42c87e2fb62fe78bb69")
    },
    parentId: ObjectId("6242b2f287e2fb62fe78b871"),
    createdAt: ISODate("2022-03-28T07:26:50Z"),
    updatedAt: ISODate("2022-03-29T07:24:28Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624163a2dc6e6a32af526d6b"),
    name: "SystemSettingPermissionsRole",
    path: "/system-setting/permissions/role",
    component: "/system-setting/permissions/role/index",
    meta: {
        icon: "eos-icons:role-binding-outlined",
        disabled: false,
        hideMenu: false,
        title: "角色管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("99"),
        _id: ObjectId("6242b43887e2fb62fe78bbb3")
    },
    parentId: ObjectId("6242b2f287e2fb62fe78b871"),
    createdAt: ISODate("2022-03-28T07:28:34Z"),
    updatedAt: ISODate("2022-03-29T07:24:40Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624163eadc6e6a32af526d8b"),
    name: "SystemSettingPermissionsMenu",
    path: "/system-setting/permissions/menu",
    component: "/system-setting/permissions/menu/index",
    meta: {
        icon: "heroicons-solid:menu-alt-2",
        disabled: false,
        hideMenu: false,
        title: "菜单管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("99"),
        _id: ObjectId("6242b40287e2fb62fe78bab2")
    },
    parentId: ObjectId("6242b2f287e2fb62fe78b871"),
    createdAt: ISODate("2022-03-28T07:29:46Z"),
    updatedAt: ISODate("2022-03-29T07:23:46Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624277e2e21930fdd25dceea"),
    name: "TagsPage",
    path: "/tags",
    component: "LAYOUT",
    meta: {
        icon: "akar-icons:tag",
        disabled: false,
        hideMenu: false,
        title: "标签管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("10"),
        _id: ObjectId("624277e2e21930fdd25dceeb")
    },
    parentId: null,
    createdAt: ISODate("2022-03-29T03:07:14Z"),
    updatedAt: ISODate("2022-03-29T03:10:29Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624278a5e21930fdd25dcf5b"),
    name: "Tag",
    path: "/tags/index",
    component: "/tag/index",
    meta: {
        icon: "ci:list-checklist",
        disabled: false,
        hideMenu: false,
        title: "标签列表",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("10"),
        _id: ObjectId("624278a5e21930fdd25dcf5c")
    },
    parentId: ObjectId("624277e2e21930fdd25dceea"),
    createdAt: ISODate("2022-03-29T03:10:29Z"),
    updatedAt: ISODate("2022-03-29T03:10:29Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624278fde21930fdd25dcf94"),
    name: "MemberPaying",
    path: "/member/paying",
    component: "/member/paying/index",
    meta: {
        icon: "iconoir:verified-user",
        disabled: false,
        hideMenu: false,
        title: "付费会员",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("4"),
        _id: ObjectId("624e53509e3ef95601c562f2")
    },
    parentId: ObjectId("6241610edc6e6a32af526cb2"),
    createdAt: ISODate("2022-03-29T03:11:57Z"),
    updatedAt: ISODate("2022-04-07T02:58:24Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62427969e21930fdd25dcfbe"),
    name: "MemberSetting",
    path: "/member/setting",
    component: "/member/setting/index",
    meta: {
        icon: "la:user-cog",
        disabled: false,
        hideMenu: false,
        title: "会员设置",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("6"),
        _id: ObjectId("62427969e21930fdd25dcfbf")
    },
    parentId: ObjectId("6241610edc6e6a32af526cb2"),
    createdAt: ISODate("2022-03-29T03:13:45Z"),
    updatedAt: ISODate("2022-03-29T03:13:45Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62427a3be21930fdd25dd000"),
    name: "MemberDetail",
    path: "/member/detail/:id",
    component: "/member/detail/index",
    meta: {
        icon: "mdi:card-account-details-outline",
        disabled: false,
        hideMenu: true,
        title: "会员详情",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("6"),
        _id: ObjectId("62427ec4e21930fdd25dd117")
    },
    parentId: ObjectId("6241610edc6e6a32af526cb2"),
    createdAt: ISODate("2022-03-29T03:17:15Z"),
    updatedAt: ISODate("2022-03-29T03:36:36Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62427f36e21930fdd25dd18f"),
    name: "NewsPage",
    path: "/news",
    component: "LAYOUT",
    meta: {
        icon: "bx:bx-news",
        disabled: false,
        hideMenu: false,
        title: "新闻管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("11"),
        _id: ObjectId("62427f36e21930fdd25dd190")
    },
    parentId: null,
    createdAt: ISODate("2022-03-29T03:38:30Z"),
    updatedAt: ISODate("2022-03-29T03:39:44Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62427f80e21930fdd25dd1bf"),
    name: "News",
    path: "/news/index",
    component: "/news/index",
    meta: {
        icon: "bi:card-list",
        disabled: false,
        hideMenu: false,
        title: "新闻列表",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("11"),
        _id: ObjectId("62427f80e21930fdd25dd1c0")
    },
    parentId: ObjectId("62427f36e21930fdd25dd18f"),
    createdAt: ISODate("2022-03-29T03:39:44Z"),
    updatedAt: ISODate("2022-03-29T03:39:44Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62427fc1e21930fdd25dd1ef"),
    name: "BannerPage",
    path: "/banner",
    component: "LAYOUT",
    meta: {
        icon: "ph:flag-banner-bold",
        disabled: false,
        hideMenu: false,
        title: "Banner管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("12"),
        _id: ObjectId("62427fc1e21930fdd25dd1f0")
    },
    parentId: null,
    createdAt: ISODate("2022-03-29T03:40:49Z"),
    updatedAt: ISODate("2022-03-29T03:41:24Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62427fe4e21930fdd25dd223"),
    name: "Banner",
    path: "/banner/index",
    component: "/banner/index",
    meta: {
        icon: "ci:list-checklist",
        disabled: false,
        hideMenu: false,
        title: "Banner列表",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("12"),
        _id: ObjectId("62427fe4e21930fdd25dd224")
    },
    parentId: ObjectId("62427fc1e21930fdd25dd1ef"),
    createdAt: ISODate("2022-03-29T03:41:24Z"),
    updatedAt: ISODate("2022-03-29T03:41:24Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62428096e21930fdd25dd257"),
    name: "",
    path: "/customer-service",
    component: "LAYOUT",
    meta: {
        icon: "carbon:chat-bot",
        disabled: false,
        hideMenu: false,
        title: "客服管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("13"),
        _id: ObjectId("62621205b74277f628092c91")
    },
    parentId: null,
    createdAt: ISODate("2022-03-29T03:44:22Z"),
    updatedAt: ISODate("2022-04-22T04:10:01Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624280f2e21930fdd25dd28d"),
    name: "MarketingPage",
    path: "/marketing",
    component: "LAYOUT",
    meta: {
        icon: "mdi-light:clipboard-text",
        disabled: false,
        hideMenu: false,
        title: "营销管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("14"),
        _id: ObjectId("624280f2e21930fdd25dd28e")
    },
    parentId: null,
    createdAt: ISODate("2022-03-29T03:45:54Z"),
    updatedAt: ISODate("2022-03-29T03:47:07Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6242813be21930fdd25dd2c7"),
    name: "MarketingCoupon",
    path: "/marketing/coupon",
    component: "/marketing/coupon/index",
    meta: {
        icon: "icon-park-outline:coupon",
        disabled: false,
        hideMenu: false,
        title: "优惠券",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("14"),
        _id: ObjectId("6242813be21930fdd25dd2c8")
    },
    parentId: ObjectId("624280f2e21930fdd25dd28d"),
    createdAt: ISODate("2022-03-29T03:47:07Z"),
    updatedAt: ISODate("2022-03-29T03:47:07Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62428173e21930fdd25dd301"),
    name: "MediaLibrary",
    path: "/media-library",
    component: "/media-library/index",
    meta: {
        icon: "carbon:media-library",
        disabled: false,
        hideMenu: false,
        title: "媒体库管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("15"),
        _id: ObjectId("62428173e21930fdd25dd302")
    },
    parentId: null,
    createdAt: ISODate("2022-03-29T03:48:03Z"),
    updatedAt: ISODate("2022-03-29T03:48:03Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624281e4e21930fdd25dd377"),
    name: "OrderPage",
    path: "/order",
    component: "LAYOUT",
    meta: {
        icon: "icon-park-outline:transaction-order",
        disabled: false,
        hideMenu: false,
        title: "订单管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("16"),
        _id: ObjectId("624281e4e21930fdd25dd378")
    },
    parentId: null,
    createdAt: ISODate("2022-03-29T03:49:56Z"),
    updatedAt: ISODate("2022-03-29T03:54:31Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6242822be21930fdd25dd42b"),
    name: "Order",
    path: "/order/index",
    component: "/order/index",
    meta: {
        icon: "ant-design:unordered-list-outlined",
        disabled: false,
        hideMenu: false,
        title: "订单列表",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("16"),
        _id: ObjectId("6242822be21930fdd25dd42c")
    },
    parentId: ObjectId("624281e4e21930fdd25dd377"),
    createdAt: ISODate("2022-03-29T03:51:07Z"),
    updatedAt: ISODate("2022-03-29T03:51:07Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62428276e21930fdd25dd46d"),
    name: "OrderRefundsDispose",
    path: "/order/refunds-dispose",
    component: "/order/refunds-dispose/index",
    meta: {
        icon: "ri:refund-line",
        disabled: false,
        hideMenu: false,
        title: "退款处理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("16"),
        _id: ObjectId("62428276e21930fdd25dd46e")
    },
    parentId: ObjectId("624281e4e21930fdd25dd377"),
    createdAt: ISODate("2022-03-29T03:52:22Z"),
    updatedAt: ISODate("2022-03-29T03:52:22Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624282cae21930fdd25dd4d0"),
    name: "OrderSaleReturnDispose",
    path: "/order/sale-return-dispose",
    component: "/order/sale-return-dispose/index",
    meta: {
        icon: "tabler:truck-return",
        disabled: false,
        hideMenu: false,
        title: "退货处理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("16"),
        _id: ObjectId("624282cae21930fdd25dd4d1")
    },
    parentId: ObjectId("624281e4e21930fdd25dd377"),
    createdAt: ISODate("2022-03-29T03:53:46Z"),
    updatedAt: ISODate("2022-03-29T03:53:46Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624282f7e21930fdd25dd516"),
    name: "OrderDealSet",
    path: "/order/deal-set",
    component: "/order/deal-set/index",
    meta: {
        icon: "fluent:text-box-settings-24-regular",
        disabled: false,
        hideMenu: false,
        title: "交易设置",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("16"),
        _id: ObjectId("624282f7e21930fdd25dd517")
    },
    parentId: ObjectId("624281e4e21930fdd25dd377"),
    createdAt: ISODate("2022-03-29T03:54:31Z"),
    updatedAt: ISODate("2022-03-29T03:54:31Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6242b2f287e2fb62fe78b871"),
    name: "SystemSettingPermissions",
    path: "/system-setting/permissions",
    component: "LAYOUT",
    meta: {
        icon: "ant-design:apartment-outlined",
        disabled: false,
        hideMenu: false,
        title: "权限管理",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("6247f8653428d287f3e62fb5")
    },
    parentId: ObjectId("62416277dc6e6a32af526cfc"),
    createdAt: ISODate("2022-03-29T07:19:14Z"),
    updatedAt: ISODate("2022-04-02T07:16:53Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6242b56087e2fb62fe78bd60"),
    name: "SystemSettingWebsite",
    path: "/system-setting/website",
    component: "/system-setting/website/index",
    meta: {
        icon: "dashicons:admin-site-alt3",
        disabled: false,
        hideMenu: false,
        title: "站点设置",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("2"),
        _id: ObjectId("6242b56087e2fb62fe78bd61")
    },
    parentId: ObjectId("62416277dc6e6a32af526cfc"),
    createdAt: ISODate("2022-03-29T07:29:36Z"),
    updatedAt: ISODate("2022-03-29T07:29:36Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6242bb4e87e2fb62fe78bef1"),
    name: "ProductComment",
    path: "/product/comment",
    component: "/product/comment/index",
    meta: {
        icon: "ant-design:comment-outlined",
        disabled: false,
        hideMenu: false,
        title: "商品评论",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("2"),
        _id: ObjectId("6242bb4e87e2fb62fe78bef2")
    },
    parentId: ObjectId("62415f35dc6e6a32af526c67"),
    createdAt: ISODate("2022-03-29T07:54:54Z"),
    updatedAt: ISODate("2022-03-29T07:54:54Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6247efe18453ca65d94d865c"),
    name: "SystemSettingDistribution",
    path: "/system-setting/distribution",
    component: "LAYOUT",
    meta: {
        icon: "ant-design:twitter-outlined",
        disabled: false,
        hideMenu: false,
        title: "配送设置",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("6247f8443428d287f3e62f65")
    },
    parentId: ObjectId("62416277dc6e6a32af526cfc"),
    createdAt: ISODate("2022-04-02T06:40:33Z"),
    updatedAt: ISODate("2022-04-02T07:48:56Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6247f0418453ca65d94d86ac"),
    name: "SystemSettingDistributionDeliver",
    path: "/system-setting/distribution/deliver",
    component: "/system-setting/distribution/deliver/index",
    meta: {
        icon: "ant-design:twitter-circle-filled",
        disabled: false,
        hideMenu: false,
        title: "发货设置",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("6247fb0ece6e992349469d91")
    },
    parentId: ObjectId("6247efe18453ca65d94d865c"),
    createdAt: ISODate("2022-04-02T06:42:09Z"),
    updatedAt: ISODate("2022-04-02T07:28:14Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6247ffe880c807ce1a354cbb"),
    name: "SystemSettingDistributionLogisticsCompany",
    path: "/system-setting/distribution/logistics-company",
    component: "/system-setting/distribution/logistics-company/index",
    meta: {
        icon: "map:moving-company",
        disabled: false,
        hideMenu: false,
        title: "物流公司",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("6247ffe880c807ce1a354cbc")
    },
    parentId: ObjectId("6247efe18453ca65d94d865c"),
    createdAt: ISODate("2022-04-02T07:48:56Z"),
    updatedAt: ISODate("2022-04-02T07:48:56Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6248029380c807ce1a354e43"),
    name: "ProductUnit",
    path: "/product/unit",
    component: "/product/unit/index",
    meta: {
        icon: "mdi:ammunition",
        disabled: false,
        hideMenu: false,
        title: "商品单位",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("6248029380c807ce1a354e44")
    },
    parentId: ObjectId("62415f35dc6e6a32af526c67"),
    createdAt: ISODate("2022-04-02T08:00:19Z"),
    updatedAt: ISODate("2022-04-02T08:00:19Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6248046e80c807ce1a354fa7"),
    name: "ProductSkuTemplate",
    path: "/product/sku-template",
    component: "/product/sku-template/index",
    meta: {
        icon: "carbon:template",
        disabled: false,
        hideMenu: false,
        title: "规格模板",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("62480e9f80274edcfe4717f6")
    },
    parentId: ObjectId("62415f35dc6e6a32af526c67"),
    createdAt: ISODate("2022-04-02T08:08:14Z"),
    updatedAt: ISODate("2022-04-02T08:51:43Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624806f380c807ce1a355148"),
    name: "ShopDecorate",
    path: "/shop/decorate",
    component: "LAYOUT",
    meta: {
        icon: "medical-icon:gift-shop",
        disabled: false,
        hideMenu: false,
        title: "店铺装修",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("624806f380c807ce1a355149")
    },
    parentId: ObjectId("62413d5b199676484a76c415"),
    createdAt: ISODate("2022-04-02T08:18:59Z"),
    updatedAt: ISODate("2022-04-15T08:18:12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62592a44df253ed80ddcfcd2"),
    name: "ShopDecorateThemeStyle",
    path: "/shop/decorate/theme-style",
    component: "/shop/decorate/theme-style/index",
    meta: {
        icon: "icon-park-outline:theme",
        disabled: false,
        hideMenu: false,
        title: "主题风格",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("62592a44df253ed80ddcfcd3")
    },
    parentId: ObjectId("624806f380c807ce1a355148"),
    createdAt: ISODate("2022-04-15T08:18:12Z"),
    updatedAt: ISODate("2022-04-15T08:18:12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6262123fb74277f628092ced"),
    name: "CustomerService",
    path: "/customer-service/list",
    component: "/customer-service/index",
    meta: {
        icon: "ant-design:aliwangwang-outlined",
        disabled: false,
        hideMenu: false,
        title: "客服列表",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("62622a99b74277f62809374d")
    },
    parentId: ObjectId("62428096e21930fdd25dd257"),
    createdAt: ISODate("2022-04-22T02:26:07Z"),
    updatedAt: ISODate("2022-04-22T04:10:01Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("626229f6b74277f6280934cb"),
    name: "CustomerServiceChat",
    path: "/customer-service/chat",
    component: "/customer-service/chat/index",
    meta: {
        icon: "ant-design:aliwangwang-outlined",
        disabled: false,
        hideMenu: true,
        title: "客服聊天",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("1"),
        _id: ObjectId("62622a3ab74277f6280935cc")
    },
    parentId: ObjectId("62428096e21930fdd25dd257"),
    createdAt: ISODate("2022-04-22T04:07:18Z"),
    updatedAt: ISODate("2022-04-22T04:08:26Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for news
// ----------------------------
db.getCollection("news").drop();
db.createCollection("news");

// ----------------------------
// Documents of news
// ----------------------------
db.getCollection("news").insert([ {
    _id: ObjectId("6274f151a9157edf5362d2e4"),
    title: "从的撒发是否是否",
    tags: [
        ObjectId("6274f142a9157edf5362d2db")
    ],
    content: "<p>新闻内容阿萨法撒阿萨</p>",
    createdAt: ISODate("2022-05-06T09:58:41Z"),
    updatedAt: ISODate("2022-05-06T09:58:41Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for orders
// ----------------------------
db.getCollection("orders").drop();
db.createCollection("orders");

// ----------------------------
// Documents of orders
// ----------------------------
db.getCollection("orders").insert([ {
    _id: ObjectId("6235b450f67334d0742a415c"),
    products: [
        {
            productId: ObjectId("6225de329516ca9a738847e0"),
            num: NumberInt("1"),
            price: NumberInt("128"),
            skuName: "500ml",
            _id: ObjectId("6235b450f67334d0742a415d")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("128"),
    payment: NumberInt("128"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "备注一下",
    isDelete: true,
    createdAt: ISODate("2022-03-19T10:45:36Z"),
    updatedAt: ISODate("2022-03-20T02:46:54Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("6235bac2a7d3d65e31e381d7"),
    products: [
        {
            productId: ObjectId("6226ce6834e951c07a467db4"),
            num: NumberInt("1"),
            price: NumberInt("188"),
            skuName: "500ml",
            _id: ObjectId("6235bac2a7d3d65e31e381d8")
        },
        {
            productId: ObjectId("6226ce2f34e951c07a467da3"),
            num: NumberInt("1"),
            price: NumberInt("388"),
            skuName: "500ml",
            _id: ObjectId("6235bac2a7d3d65e31e381d9")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("576"),
    payment: NumberInt("576"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "测试备注",
    isDelete: false,
    createdAt: ISODate("2022-03-19T11:13:06Z"),
    updatedAt: ISODate("2022-03-19T11:13:06Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("6236943f86c5d2b40e8e0dbc"),
    products: [
        {
            productId: ObjectId("6226cef934e951c07a467dee"),
            num: NumberInt("1"),
            price: NumberInt("128"),
            skuName: "500ml",
            _id: ObjectId("6236943f86c5d2b40e8e0dbd")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("128"),
    payment: NumberInt("128"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "是多少是否",
    isDelete: false,
    createdAt: ISODate("2022-03-20T02:41:03Z"),
    updatedAt: ISODate("2022-03-20T02:41:03Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("62396ac5611fb634e02ee5c5"),
    products: [
        {
            productId: ObjectId("6225ddae9516ca9a738847c9"),
            num: NumberInt("1"),
            price: NumberInt("99"),
            skuName: "500ml",
            _id: ObjectId("62396ac5611fb634e02ee5c6")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("99"),
    payment: NumberInt("99"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "三生三世",
    isDelete: false,
    createdAt: ISODate("2022-03-22T06:20:53Z"),
    updatedAt: ISODate("2022-03-22T06:20:53Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("62396fe9611fb634e02ee5e4"),
    products: [
        {
            productId: ObjectId("6225ddae9516ca9a738847c9"),
            num: NumberInt("1"),
            price: NumberInt("99"),
            skuName: "500ml",
            _id: ObjectId("62396fe9611fb634e02ee5e5")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("99"),
    payment: NumberInt("99"),
    status: NumberInt("6"),
    type: NumberInt("1"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "",
    isDelete: false,
    createdAt: ISODate("2022-03-22T06:42:49Z"),
    updatedAt: ISODate("2022-03-23T10:03:55Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("623985a257908cc4e35bc1ef"),
    products: [
        {
            productId: ObjectId("6226ce9d34e951c07a467dc3"),
            num: NumberInt("1"),
            price: NumberInt("288"),
            skuName: "500ml",
            _id: ObjectId("623985a257908cc4e35bc1f0")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("288"),
    payment: NumberInt("288"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "asfsf",
    isDelete: false,
    createdAt: ISODate("2022-03-22T08:15:30Z"),
    updatedAt: ISODate("2022-03-22T08:15:30Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("623986b357908cc4e35bc209"),
    products: [
        {
            productId: ObjectId("6226cef934e951c07a467dee"),
            num: NumberInt("1"),
            price: NumberInt("128"),
            skuName: "500ml",
            _id: ObjectId("623986b357908cc4e35bc20a")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("128"),
    payment: NumberInt("128"),
    status: NumberInt("2"),
    type: NumberInt("1"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "",
    isDelete: false,
    createdAt: ISODate("2022-03-22T08:20:03Z"),
    updatedAt: ISODate("2022-03-22T08:20:17Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("6257ddb3adcd468c2a0186f9"),
    products: [
        {
            productId: ObjectId("6225dc919516ca9a7388479d"),
            num: NumberInt("1"),
            price: NumberInt("128"),
            skuName: "750ml",
            _id: ObjectId("6257ddb3adcd468c2a0186fa")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("128"),
    payment: NumberInt("128"),
    status: NumberInt("2"),
    type: NumberInt("1"),
    paymentType: NumberInt("0"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "",
    isDelete: false,
    createdAt: ISODate("2022-04-14T08:39:15Z"),
    updatedAt: ISODate("2022-04-14T08:39:21Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("626101b550b5fc978c6e52cd"),
    products: [
        {
            productId: ObjectId("6225dd049516ca9a738847b2"),
            num: NumberInt("1"),
            price: NumberInt("128"),
            skuName: "500ml",
            _id: ObjectId("626101b550b5fc978c6e52ce")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("128"),
    payment: NumberInt("128"),
    status: NumberInt("2"),
    type: NumberInt("1"),
    paymentType: NumberInt("0"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "",
    isDelete: false,
    createdAt: ISODate("2022-04-21T07:03:17Z"),
    updatedAt: ISODate("2022-04-21T07:03:46Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("62612bb350b5fc978c6e53f5"),
    products: [
        {
            productId: ObjectId("6246b19e35afd6c9a3829990"),
            num: NumberInt("1"),
            price: NumberInt("13"),
            skuName: "黑色-500ml",
            _id: ObjectId("62612bb350b5fc978c6e53f6")
        }
    ],
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    totalPrice: NumberInt("13"),
    payment: NumberInt("13"),
    status: NumberInt("2"),
    type: NumberInt("1"),
    paymentType: NumberInt("0"),
    addressId: ObjectId("622ef6653259b55d1951779f"),
    source: "H5",
    remark: "",
    isDelete: false,
    createdAt: ISODate("2022-04-21T10:02:27Z"),
    updatedAt: ISODate("2022-04-21T10:02:34Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("62bd458037b98869922fa94a"),
    products: [
        {
            productId: ObjectId("62b0255b80c4a9905bd79778"),
            num: NumberInt("1"),
            price: NumberInt("109"),
            skuName: "米色荷叶边-M",
            _id: ObjectId("62bd452637b98869922fa926")
        }
    ],
    userId: ObjectId("62ba9b55ff2291616ef62502"),
    totalPrice: NumberInt("109"),
    payment: NumberInt("109"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    paymentType: NumberInt("1"),
    addressId: ObjectId("62bd0983c0c7fa8c33e3c20a"),
    source: "小程序",
    remark: "小程序订单测试",
    isDelete: true,
    createdAt: ISODate("2022-06-30T06:41:04Z"),
    updatedAt: ISODate("2022-06-30T07:21:10Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("62bd4a886445d9d7d96872e7"),
    products: [
        {
            productId: ObjectId("6226cef934e951c07a467dee"),
            productName: "中埜酒造 KUNIZAKARI 特撰國盛 彩華 大吟釀 720ml - 金賞受賞酒",
            productPic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/15758-1626952020-1.jpg",
            num: NumberInt("1"),
            price: NumberInt("149"),
            skuId: ObjectId("62b03921f4277630872ec300"),
            skuName: "500ml",
            _id: ObjectId("62bd4a606445d9d7d96872bd")
        },
        {
            productId: ObjectId("6225dc919516ca9a7388479d"),
            productName: "富久長 HENPEI & GENKEI ＋ ハイブリッド生酛 生酒 4本セット",
            productPic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg",
            num: NumberInt("1"),
            price: NumberInt("219"),
            skuId: ObjectId("62bad828892ea55f3f95826b"),
            skuName: "750ml-黄色",
            _id: ObjectId("62bd4a756445d9d7d96872d1")
        }
    ],
    userId: ObjectId("62ba9b55ff2291616ef62502"),
    totalPrice: NumberInt("368"),
    payment: NumberInt("368"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    paymentType: NumberInt("1"),
    addressId: ObjectId("62bbf1ffc0c7fa8c33e3beba"),
    source: "小程序",
    remark: "小程序订单测试",
    isDelete: true,
    createdAt: ISODate("2022-06-30T07:02:32Z"),
    updatedAt: ISODate("2022-06-30T09:06:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("62bd561e6445d9d7d96874ce"),
    products: [
        {
            productId: ObjectId("6225de329516ca9a738847e0"),
            productName: "富久長 兵庫県特A地区東条産山田錦 純米大吟醸 40 “仙” 2017BY",
            productPic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/%E6%88%AA%E5%9B%BE_20220307182700.png",
            num: NumberInt("1"),
            price: NumberInt("88"),
            skuId: null,
            skuName: "默认",
            _id: ObjectId("62bd56146445d9d7d96874b9")
        }
    ],
    userId: ObjectId("62ba9b55ff2291616ef62502"),
    totalPrice: NumberInt("88"),
    payment: NumberInt("88"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    paymentType: NumberInt("1"),
    addressId: ObjectId("62bbf1ffc0c7fa8c33e3beba"),
    source: "小程序",
    remark: "小程序订单测试",
    isDelete: false,
    createdAt: ISODate("2022-06-30T07:51:58Z"),
    updatedAt: ISODate("2022-06-30T10:04:20Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("62bd67b46445d9d7d9687741"),
    products: [
        {
            productId: ObjectId("6226cef934e951c07a467dee"),
            productName: "中埜酒造 KUNIZAKARI 特撰國盛 彩華 大吟釀 720ml - 金賞受賞酒",
            productPic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/15758-1626952020-1.jpg",
            num: NumberInt("1"),
            price: NumberInt("149"),
            skuId: ObjectId("62b03921f4277630872ec300"),
            skuName: "500ml",
            _id: ObjectId("62bd67946445d9d7d968772e")
        }
    ],
    userId: ObjectId("62ba9b55ff2291616ef62502"),
    totalPrice: NumberInt("149"),
    payment: NumberInt("149"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    paymentType: NumberInt("1"),
    addressId: ObjectId("62bbf1ffc0c7fa8c33e3beba"),
    source: "小程序",
    remark: "小程序订单测试",
    isDelete: false,
    createdAt: ISODate("2022-06-30T09:07:00Z"),
    updatedAt: ISODate("2022-06-30T09:07:00Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("62bd67e66445d9d7d968776b"),
    products: [
        {
            productId: ObjectId("62b0255b80c4a9905bd79778"),
            productName: "白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙",
            productPic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09a.png",
            num: NumberInt("1"),
            price: NumberInt("128"),
            skuId: ObjectId("62bc0426892ea55f3f95837e"),
            skuName: "米色荷叶边-S",
            _id: ObjectId("62bd67dc6445d9d7d9687758")
        }
    ],
    userId: ObjectId("62ba9b55ff2291616ef62502"),
    totalPrice: NumberInt("128"),
    payment: NumberInt("128"),
    status: NumberInt("1"),
    type: NumberInt("1"),
    paymentType: NumberInt("1"),
    addressId: ObjectId("62bbf1ffc0c7fa8c33e3beba"),
    source: "小程序",
    remark: "小程序订单测试",
    isDelete: false,
    createdAt: ISODate("2022-06-30T09:07:50Z"),
    updatedAt: ISODate("2022-06-30T09:07:50Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for product_comments
// ----------------------------
db.getCollection("product_comments").drop();
db.createCollection("product_comments");

// ----------------------------
// Documents of product_comments
// ----------------------------

// ----------------------------
// Collection structure for product_params
// ----------------------------
db.getCollection("product_params").drop();
db.createCollection("product_params");

// ----------------------------
// Documents of product_params
// ----------------------------

// ----------------------------
// Collection structure for product_sku_attrs
// ----------------------------
db.getCollection("product_sku_attrs").drop();
db.createCollection("product_sku_attrs");

// ----------------------------
// Documents of product_sku_attrs
// ----------------------------
db.getCollection("product_sku_attrs").insert([ {
    _id: ObjectId("62be67e577cfbfcbae6accae"),
    name: "容量",
    productId: ObjectId("6225dc919516ca9a7388479d"),
    values: [
        "500ml",
        "750ml",
        "150ml"
    ],
    createdAt: ISODate("2022-07-01T03:20:05Z"),
    updatedAt: ISODate("2022-07-01T03:20:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_sku_attrs").insert([ {
    _id: ObjectId("62be67e577cfbfcbae6accb0"),
    name: "颜色",
    productId: ObjectId("6225dc919516ca9a7388479d"),
    values: [
        "黄色",
        "白色"
    ],
    createdAt: ISODate("2022-07-01T03:20:05Z"),
    updatedAt: ISODate("2022-07-01T03:20:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_sku_attrs").insert([ {
    _id: ObjectId("62be67ed77cfbfcbae6acccf"),
    name: "容量",
    productId: ObjectId("6225dd049516ca9a738847b2"),
    values: [
        "500ml",
        "750ml"
    ],
    createdAt: ISODate("2022-07-01T03:20:13Z"),
    updatedAt: ISODate("2022-07-01T03:20:13Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_sku_attrs").insert([ {
    _id: ObjectId("62be681177cfbfcbae6acd06"),
    name: "容量",
    productId: ObjectId("6226cef934e951c07a467dee"),
    values: [
        "500ml",
        "750ml"
    ],
    createdAt: ISODate("2022-07-01T03:20:49Z"),
    updatedAt: ISODate("2022-07-01T03:20:49Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_sku_attrs").insert([ {
    _id: ObjectId("62be681b77cfbfcbae6acd1f"),
    name: "颜色",
    productId: ObjectId("62b0255b80c4a9905bd79778"),
    values: [
        "米色荷叶边"
    ],
    createdAt: ISODate("2022-07-01T03:20:59Z"),
    updatedAt: ISODate("2022-07-01T03:20:59Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_sku_attrs").insert([ {
    _id: ObjectId("62be681b77cfbfcbae6acd21"),
    name: "尺码",
    productId: ObjectId("62b0255b80c4a9905bd79778"),
    values: [
        "S",
        "M",
        "L"
    ],
    createdAt: ISODate("2022-07-01T03:20:59Z"),
    updatedAt: ISODate("2022-07-01T03:20:59Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for product_skus
// ----------------------------
db.getCollection("product_skus").drop();
db.createCollection("product_skus");

// ----------------------------
// Documents of product_skus
// ----------------------------
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be67e577cfbfcbae6accb3"),
    productId: ObjectId("6225dc919516ca9a7388479d"),
    image: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656310093435-1.jpg",
    inventory: NumberInt("128"),
    costPrice: NumberInt("128"),
    price: NumberInt("188"),
    weight: NumberInt("1"),
    artNo: NumberInt("2121"),
    skuNames: [
        "500ml",
        "黄色"
    ],
    createdAt: ISODate("2022-07-01T03:20:05Z"),
    updatedAt: ISODate("2022-07-01T03:20:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be67e577cfbfcbae6accb5"),
    productId: ObjectId("6225dc919516ca9a7388479d"),
    image: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656310093435-1.jpg",
    inventory: NumberInt("128"),
    costPrice: NumberInt("119"),
    price: NumberInt("198"),
    weight: NumberInt("1"),
    artNo: NumberInt("12345"),
    skuNames: [
        "500ml",
        "白色"
    ],
    createdAt: ISODate("2022-07-01T03:20:05Z"),
    updatedAt: ISODate("2022-07-01T03:20:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be67e577cfbfcbae6accb7"),
    productId: ObjectId("6225dc919516ca9a7388479d"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg",
    inventory: NumberInt("125"),
    costPrice: NumberInt("149"),
    price: NumberInt("219"),
    weight: NumberInt("1"),
    artNo: NumberInt("4564"),
    skuNames: [
        "750ml",
        "黄色"
    ],
    createdAt: ISODate("2022-07-01T03:20:05Z"),
    updatedAt: ISODate("2022-07-01T03:20:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be67e577cfbfcbae6accb9"),
    productId: ObjectId("6225dc919516ca9a7388479d"),
    image: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656310093435-1.jpg",
    inventory: NumberInt("128"),
    costPrice: NumberInt("159"),
    price: NumberInt("229"),
    weight: NumberInt("1"),
    artNo: NumberInt("54564"),
    skuNames: [
        "750ml",
        "白色"
    ],
    createdAt: ISODate("2022-07-01T03:20:05Z"),
    updatedAt: ISODate("2022-07-01T03:20:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be67e577cfbfcbae6accbb"),
    productId: ObjectId("6225dc919516ca9a7388479d"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg",
    inventory: NumberInt("11"),
    costPrice: NumberInt("168"),
    price: NumberInt("249"),
    weight: NumberInt("1"),
    artNo: NumberInt("154564"),
    skuNames: [
        "150ml",
        "黄色"
    ],
    createdAt: ISODate("2022-07-01T03:20:05Z"),
    updatedAt: ISODate("2022-07-01T03:20:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be67e577cfbfcbae6accbd"),
    productId: ObjectId("6225dc919516ca9a7388479d"),
    image: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656310093435-1.jpg",
    inventory: NumberInt("544"),
    costPrice: NumberInt("179"),
    price: NumberInt("269"),
    weight: NumberInt("1"),
    artNo: NumberInt("1564564"),
    skuNames: [
        "150ml",
        "白色"
    ],
    createdAt: ISODate("2022-07-01T03:20:05Z"),
    updatedAt: ISODate("2022-07-01T03:20:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be67ed77cfbfcbae6accd2"),
    productId: ObjectId("6225dd049516ca9a738847b2"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
    inventory: NumberInt("88"),
    costPrice: NumberInt("199"),
    price: NumberInt("128"),
    weight: NumberInt("1"),
    artNo: NumberInt("456465465"),
    skuNames: [
        "500ml"
    ],
    createdAt: ISODate("2022-07-01T03:20:13Z"),
    updatedAt: ISODate("2022-07-01T03:20:13Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be67ed77cfbfcbae6accd4"),
    productId: ObjectId("6225dd049516ca9a738847b2"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg",
    inventory: NumberInt("99"),
    costPrice: NumberInt("288"),
    price: NumberInt("138"),
    weight: NumberInt("1"),
    artNo: NumberInt("132156465"),
    skuNames: [
        "750ml"
    ],
    createdAt: ISODate("2022-07-01T03:20:13Z"),
    updatedAt: ISODate("2022-07-01T03:20:13Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be681177cfbfcbae6acd09"),
    productId: ObjectId("6226cef934e951c07a467dee"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/15758-1626952020-1.jpg",
    inventory: NumberInt("88"),
    costPrice: NumberInt("198"),
    price: NumberInt("149"),
    weight: NumberInt("1"),
    artNo: NumberInt("15415456"),
    skuNames: [
        "500ml"
    ],
    createdAt: ISODate("2022-07-01T03:20:49Z"),
    updatedAt: ISODate("2022-07-01T03:20:49Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be681177cfbfcbae6acd0b"),
    productId: ObjectId("6226cef934e951c07a467dee"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
    inventory: NumberInt("99"),
    costPrice: NumberInt("218"),
    price: NumberInt("138"),
    weight: NumberInt("1"),
    artNo: NumberInt("18478964"),
    skuNames: [
        "750ml"
    ],
    createdAt: ISODate("2022-07-01T03:20:49Z"),
    updatedAt: ISODate("2022-07-01T03:20:49Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be681b77cfbfcbae6acd24"),
    productId: ObjectId("62b0255b80c4a9905bd79778"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09a.png",
    inventory: NumberInt("88"),
    costPrice: NumberInt("99"),
    price: NumberInt("128"),
    weight: NumberInt("1"),
    artNo: NumberInt("123"),
    skuNames: [
        "米色荷叶边",
        "S"
    ],
    createdAt: ISODate("2022-07-01T03:20:59Z"),
    updatedAt: ISODate("2022-07-01T03:20:59Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be681b77cfbfcbae6acd26"),
    productId: ObjectId("62b0255b80c4a9905bd79778"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09b.png",
    inventory: NumberInt("88"),
    costPrice: NumberInt("99"),
    price: NumberInt("109"),
    weight: NumberInt("1"),
    artNo: NumberInt("123456"),
    skuNames: [
        "米色荷叶边",
        "M"
    ],
    createdAt: ISODate("2022-07-01T03:20:59Z"),
    updatedAt: ISODate("2022-07-01T03:20:59Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("product_skus").insert([ {
    _id: ObjectId("62be681b77cfbfcbae6acd28"),
    productId: ObjectId("62b0255b80c4a9905bd79778"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/img-9.png",
    inventory: NumberInt("88"),
    costPrice: NumberInt("99"),
    price: NumberInt("98"),
    weight: NumberInt("1"),
    artNo: NumberInt("1888888"),
    skuNames: [
        "米色荷叶边",
        "L"
    ],
    createdAt: ISODate("2022-07-01T03:20:59Z"),
    updatedAt: ISODate("2022-07-01T03:20:59Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for product_topics
// ----------------------------
db.getCollection("product_topics").drop();
db.createCollection("product_topics");

// ----------------------------
// Documents of product_topics
// ----------------------------

// ----------------------------
// Collection structure for product_units
// ----------------------------
db.getCollection("product_units").drop();
db.createCollection("product_units");

// ----------------------------
// Documents of product_units
// ----------------------------
db.getCollection("product_units").insert([ {
    _id: ObjectId("62be683377cfbfcbae6acd35"),
    name: "件",
    sort: NumberInt("1"),
    createdAt: ISODate("2022-07-01T03:21:23Z"),
    updatedAt: ISODate("2022-07-01T03:21:23Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for products
// ----------------------------
db.getCollection("products").drop();
db.createCollection("products");

// ----------------------------
// Documents of products
// ----------------------------
db.getCollection("products").insert([ {
    _id: ObjectId("6225dc919516ca9a7388479d"),
    title: "富久長 HENPEI & GENKEI ＋ ハイブリッド生酛 生酒 4本セット",
    subTitle: "米の品種と磨きの違いで 香りと味わいを楽しむ4本セット",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/0220307182009.png",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/0220307182009.png"
    ],
    description: "描述",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("188"),
    costPrice: NumberInt("66"),
    inventory: NumberInt("128"),
    sales: NumberInt("0"),
    views: NumberInt("839"),
    skuType: NumberInt("2"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: true,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-07T10:21:05Z"),
    updatedAt: ISODate("2022-03-22T06:10:40Z"),
    __v: NumberInt("0"),
    skuAttrs: [
        {
            name: "容量",
            values: [
                "500ml",
                "750ml",
                "150ml"
            ],
            _id: ObjectId("62be67e577cfbfcbae6accaa")
        },
        {
            name: "颜色",
            values: [
                "黄色",
                "白色"
            ],
            _id: ObjectId("62be67e577cfbfcbae6accab")
        }
    ],
    skus: [
        {
            price: NumberInt("188"),
            inventory: NumberInt("128"),
            costPrice: NumberInt("128"),
            weight: NumberInt("1"),
            image: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656310093435-1.jpg",
            artNo: NumberInt("2121"),
            skuNames: [
                "500ml",
                "黄色"
            ],
            _id: ObjectId("62b97aae892ea55f3f958052"),
            updatedAt: ISODate("2022-07-01T03:20:05Z"),
            createdAt: ISODate("2022-07-01T03:20:05Z")
        },
        {
            price: NumberInt("198"),
            inventory: NumberInt("128"),
            costPrice: NumberInt("119"),
            weight: NumberInt("1"),
            image: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656310093435-1.jpg",
            artNo: NumberInt("12345"),
            skuNames: [
                "500ml",
                "白色"
            ],
            _id: ObjectId("62b97aae892ea55f3f958054"),
            updatedAt: ISODate("2022-07-01T03:20:05Z"),
            createdAt: ISODate("2022-07-01T03:20:05Z")
        },
        {
            price: NumberInt("219"),
            inventory: NumberInt("125"),
            costPrice: NumberInt("149"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg",
            artNo: NumberInt("4564"),
            skuNames: [
                "750ml",
                "黄色"
            ],
            _id: ObjectId("62b97aae892ea55f3f958056"),
            updatedAt: ISODate("2022-07-01T03:20:05Z"),
            createdAt: ISODate("2022-07-01T03:20:05Z")
        },
        {
            price: NumberInt("229"),
            inventory: NumberInt("128"),
            costPrice: NumberInt("159"),
            weight: NumberInt("1"),
            image: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656310093435-1.jpg",
            artNo: NumberInt("54564"),
            skuNames: [
                "750ml",
                "白色"
            ],
            _id: ObjectId("62b97aae892ea55f3f958058"),
            updatedAt: ISODate("2022-07-01T03:20:05Z"),
            createdAt: ISODate("2022-07-01T03:20:05Z")
        },
        {
            price: NumberInt("249"),
            inventory: NumberInt("11"),
            costPrice: NumberInt("168"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg",
            artNo: NumberInt("154564"),
            skuNames: [
                "150ml",
                "黄色"
            ],
            _id: ObjectId("62b97aae892ea55f3f95805a"),
            updatedAt: ISODate("2022-07-01T03:20:05Z"),
            createdAt: ISODate("2022-07-01T03:20:05Z")
        },
        {
            price: NumberInt("269"),
            inventory: NumberInt("544"),
            costPrice: NumberInt("179"),
            weight: NumberInt("1"),
            image: "http://fukucho-api.zhouxuanyu.com/uploads-images/1656310093435-1.jpg",
            artNo: NumberInt("1564564"),
            skuNames: [
                "150ml",
                "白色"
            ],
            _id: ObjectId("62b97aae892ea55f3f95805c"),
            updatedAt: ISODate("2022-07-01T03:20:05Z"),
            createdAt: ISODate("2022-07-01T03:20:05Z")
        }
    ]
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6225dd049516ca9a738847b2"),
    title: "富久長 八反草 サタケシリーズ HENPEI & GENKEI 生酒 2本セット",
    subTitle: "米の磨きの違いで 香りと味わいを楽しむ3本セット",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/_20220307182135.png",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/15758-1626952020-1.jpg",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg"
    ],
    description: "描述",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("128"),
    costPrice: NumberInt("128"),
    inventory: NumberInt("88"),
    sales: NumberInt("0"),
    views: NumberInt("33"),
    skuType: NumberInt("2"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: true,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-07T10:23:00Z"),
    updatedAt: ISODate("2022-03-22T04:22:13Z"),
    __v: NumberInt("0"),
    skuAttrs: [
        {
            name: "容量",
            values: [
                "500ml",
                "750ml"
            ],
            _id: ObjectId("62be67ed77cfbfcbae6acccc")
        }
    ],
    skus: [
        {
            price: NumberInt("128"),
            inventory: NumberInt("88"),
            costPrice: NumberInt("199"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
            artNo: NumberInt("456465465"),
            skuNames: [
                "500ml"
            ],
            _id: ObjectId("6247ed828453ca65d94d84cb"),
            updatedAt: ISODate("2022-07-01T03:20:13Z"),
            createdAt: ISODate("2022-07-01T03:20:13Z")
        },
        {
            price: NumberInt("138"),
            inventory: NumberInt("99"),
            costPrice: NumberInt("288"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg",
            artNo: NumberInt("132156465"),
            skuNames: [
                "750ml"
            ],
            _id: ObjectId("6247ed828453ca65d94d84cc"),
            updatedAt: ISODate("2022-07-01T03:20:13Z"),
            createdAt: ISODate("2022-07-01T03:20:13Z")
        }
    ]
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6225ddae9516ca9a738847c9"),
    title: "富久長 海風土 Seafood 純米",
    subTitle: "白麹仕込みの爽快な酸味が 牡蠣や魚介のペアリングにぴったり",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220307182446.png",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220307182446.png"
    ],
    description: "<div class=\"product__lead\">白麹仕込みの爽快な酸味が<br />牡蠣や魚介のペアリングにぴったり</div>\n<div class=\"product-description rte\">\n<p>レモンを思わせる爽やかな飲み心地の富久長。キリッとした酸味と日本酒らしい柔らかな後口が、牡蠣や魚介のおいしさを引き立てます。酸度が高く、原酒でアルコール度数13度に仕上げた軽快な口当たりは、和食だけでなく、イタリアンやフレンチとの相性も抜群。よく冷やして白ワイン感覚でお楽しみください。1本ずつ丁寧に瓶火入れ、瓶貯蔵しているので、搾りたてのフレッシュな風味を保っています。風味保護のため必ず冷蔵庫で保管してください。</p>\n<p>●2018年 フランス KURA MASTER 純米酒部門 最高位プラチナ賞トップ12 受賞</p>\n<br />\n<p><strong>【ギフト包装について】</strong><br />ギフト包装をご希望の方は「<a href=\"https://fukucho.jp/collections/%E3%82%AE%E3%83%95%E3%83%88%E5%8C%85%E8%A3%85-%E7%86%A8%E6%96%97\">ギフト包装・紙袋</a>」を併せてご注文ください。</p>\n</div>\n<table class=\"product__table\">\n<tbody>\n<tr>\n<th>分類</th>\n<td>純米酒</td>\n</tr>\n<tr>\n<th>原材料</th>\n<td>米 / 米麹</td>\n</tr>\n<tr>\n<th>原料米</th>\n<td>広島県安芸高田市産 八反草（契約栽培） / 国産米</td>\n</tr>\n<tr>\n<th>精米歩合</th>\n<td>麹米 : 60% 　掛米 : 70%</td>\n</tr>\n<tr>\n<th>アルコール分</th>\n<td>13度</td>\n</tr>\n<tr>\n<th>酵母</th>\n<td>広島県酵母</td>\n</tr>\n<tr>\n<th>酒母</th>\n<td>速醸</td>\n</tr>\n<tr>\n<th>仕様</th>\n<td>原酒 / 瓶火入れ / 瓶貯蔵</td>\n</tr>\n<tr>\n<th>おすすめ温度</th>\n<td>冷酒</td>\n</tr>\n<tr>\n<th>保存方法</th>\n<td>冷蔵庫</td>\n</tr>\n<tr>\n<th>販売時期</th>\n<td>通年</td>\n</tr>\n</tbody>\n</table>",
    category: ObjectId("620713e91f625fb6a4893f32"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("99"),
    costPrice: NumberInt("88"),
    inventory: NumberInt("1511"),
    sales: NumberInt("0"),
    views: NumberInt("41"),
    skuType: NumberInt("1"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: true,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-07T10:25:50Z"),
    updatedAt: ISODate("2022-03-22T08:15:08Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6225de329516ca9a738847e0"),
    title: "富久長 兵庫県特A地区東条産山田錦 純米大吟醸 40 “仙” 2017BY",
    subTitle: "特Ａ地区東条で栽培した山田錦の 伸びやかさを味わうプレミアム富久長",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/%E6%88%AA%E5%9B%BE_20220307182700.png",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/%E6%88%AA%E5%9B%BE_20220307182700.png"
    ],
    description: "<div class=\"product-description rte\">\n<p>広島杜氏の祖、三浦仙三郎翁から名付けたプレミアム富久長「仙」シリーズ。特A地区は、フランスワインの最上級の格付けグランクリュと同じように、兵庫県が山田錦の優良な土地に与えた格付けです。この富久長は、特A地区の東条で栽培された最高級の山田錦のみを使って2017年に醸造しました。冷蔵庫での瓶熟成を経て円熟味を増した山田錦のふくよかで伸びやかなボディを味わってください。大切な方への贈答におすすめです。</p>\n<br />\n<p><strong>【ギフト包装について】</strong><br />ギフト包装をご希望の方は「<a href=\"https://fukucho.jp/collections/%E3%82%AE%E3%83%95%E3%83%88%E5%8C%85%E8%A3%85-%E7%86%A8%E6%96%97\">ギフト包装・紙袋</a>」を併せてご注文ください。</p>\n</div>\n<table class=\"product__table\">\n<tbody>\n<tr>\n<th>分類</th>\n<td>純米大吟醸酒</td>\n</tr>\n<tr>\n<th>原材料</th>\n<td>米 / 米麹</td>\n</tr>\n<tr>\n<th>原料米</th>\n<td>兵庫県特A地区山田錦</td>\n</tr>\n<tr>\n<th>精米歩合</th>\n<td>麹米 : 40% 　掛米 : 40%</td>\n</tr>\n<tr>\n<th>アルコール分</th>\n<td>16度</td>\n</tr>\n<tr>\n<th>酵母</th>\n<td>広島県酵母</td>\n</tr>\n<tr>\n<th>酒母</th>\n<td>速醸</td>\n</tr>\n<tr>\n<th>仕様</th>\n<td>直汲み / 原酒 / 瓶火入れ / 瓶貯蔵</td>\n</tr>\n<tr>\n<th>おすすめ温度</th>\n<td>冷酒 / 常温 / 燗酒</td>\n</tr>\n<tr>\n<th>保存方法</th>\n<td>冷蔵庫</td>\n</tr>\n<tr>\n<th>販売時期</th>\n<td>通年</td>\n</tr>\n</tbody>\n</table>",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("128"),
    costPrice: NumberInt("88"),
    inventory: NumberInt("122221"),
    sales: NumberInt("1"),
    views: NumberInt("14"),
    skuType: NumberInt("1"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: true,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-07T10:28:02Z"),
    updatedAt: ISODate("2022-03-22T08:15:10Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6226ce2f34e951c07a467da3"),
    title: "獺祭 三割九分 遠心分離 純米大吟釀 39 720ml",
    subTitle: "獺祭 三割九分 遠心分離 純米大吟釀 39 720ml",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png"
    ],
    description: "<h1>清酒 - 【清酒】獺祭</h1>\n<p><a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>名稱：<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>&nbsp;<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>&nbsp;三割九分 遠心分離&nbsp;<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>&nbsp;39 720ml<br />產品類別：<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>&nbsp;|&nbsp;<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a><br /><a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>銘柄：<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>&nbsp;DASSAI<br />生產地區：日本山口縣<br />酒造名稱：旭酒造<br />精米步合：39%<br />酒米：<a class=\"jptooltip\" href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E5%B1%B1%E7%94%B0%E9%8C%A6\">山田錦</a><br />容量：720ml<br />適飲溫度：冷飲</p>\n<p><a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>簡介：<br />三割九分可說是<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>&nbsp;45 的上級，簡稱<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>&nbsp;39，屬<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>系列的中級品。「三割九分」表示每粒米只取 39% 最精華部分去釀造，滴滴甘醇，果香馥郁。<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>三割九分的精米比率為 39%，這個比率在其他品牌中可算是高級品了。<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>&nbsp;39 酒香與<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>&nbsp;45 相似，但入口較柔和，米香較濃厚，整體的味道更細膩。<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>&nbsp;三割九分 獲得 SSI（日本酒服務研究會）的五星評鑑，入口有陣陣哈密瓜的香甜氣味，中段甘甜味慢慢在口腔擴散，餘韻悠長，是<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>釀造中的進階商品，在東京、紐約等時尚城市的 Sake Bar 很受歡迎！&nbsp;</p>\n<p>釀<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>的最後階段通常是將麥麴和米中的醪加壓，把<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>過濾出來，但這也會導致米醪的味道滲入酒中。透過遠心分離機將未加壓的米醪榨取出來的酒就是「<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>遠心分離」。但只有遠心分離的話，<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>會過於清淡，失去酒心，因此<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>遠心分離是用遠心分離機榨取的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>與正常加壓方式榨取的酒混合而成。酒香與普通的<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>&nbsp;39 相似，但在飲下的一瞬間，酒香會像暴風一樣強烈地在口中肆虐起來。</p>\n<p>建議搭配料理：煎炒類、燒烤料理或天婦羅。</p>\n<p>&nbsp;</p>\n<p>日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>類別中「<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>」，作為特定名稱酒是指精米步合在50%以下，並僅以水、米、米麴來發酵，沒有添加其他釀造酒精的日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>。「吟釀」代表以「吟釀造」的製法所製作而成，吟釀造是日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>中一種低溫發酵的製法，會產生特有的芳香。要成為吟釀必須符合嚴格的規定，「吟釀」的精米步合須在60%以下，「大吟釀」的精米步合須在50%以下。精米步合是釀造日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>的術語，指磨過之後的白米，佔原本玄米的比重。精米的目的是去除米的外層部分內的釀造日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>時並非必須的蛋白質、脂肪與維生素，留下米中心由澱粉組成的「心白」部分，為<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>酒質與口感帶來豐富變化。<br /><br />所以「<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>」級別的日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>，即是將一批糙米磨去至少五成，所製成之白米佔原玄米重量的最多五成的精米級別。「<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>」釀酒過程講究精準，是口感風味皆為上品的日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>，凍飲、常温飲用均可，不建議加熱飲用，或會令<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>原有酒香流失。「<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>」大多口感細緻、香氣華麗，散發花果般的香氣，相當適合推薦給初嘗日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>、或是日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>初學者！</p>\n<p>&nbsp;</p>\n<p>山田錦又被稱為【酒米之王】，具有釀造用酒米所需的各種條件：顆粒大、米芯豐厚，因而被冠上「酒米之王」的封號。由<a class=\"jptooltip\" href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E5%B1%B1%E7%94%B0%E9%8C%A6\">山田錦</a>所釀之酒，甘、辛、酸、苦、澀五味均衡，風味不凡，味道豐厚圓潤、餘韻不絕，經過熟成發酵後的甘甜味更有張力。<br /><br /><a class=\"jptooltip\" href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E5%B1%B1%E7%94%B0%E9%8C%A6\">山田錦</a>多數用於製作華麗香味的吟釀酒，這也是深受酒造歡迎的原因之一， 使用<a class=\"jptooltip\" href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E5%B1%B1%E7%94%B0%E9%8C%A6\">山田錦</a>做出的酒是獲獎率高的保證。曾經有一段時間被評定為如果不使用<a class=\"jptooltip\" href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E5%B1%B1%E7%94%B0%E9%8C%A6\">山田錦</a>就無法在日本全國新種評鑑會上取得金賞。<br /><br />主要產地: 兵庫縣、福岡縣、岡山縣等</p>\n<p>&nbsp;</p>\n<p>「<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>」在二十年間躍升為日本最受歡迎的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>品牌，不但性價比高，更多次被美國總統點選。<br /><br />「<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>」只會出產大吟釀級別的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>，無添加額外酒精，帶有醇厚的酒香和甘甜的米香味。近年，「<a href=\"https://www.whiskychillhk.com/%E6%97%A5%E6%9C%AC%E6%B8%85%E9%85%92-%E7%8D%BA%E7%A5%AD-Dassai\">獺祭</a>」嘗試參考紅酒的製作方法，來彌補原料質量問題，更以創新的方法追求釀出最完美的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>。</p>",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("388"),
    costPrice: NumberInt("188"),
    inventory: NumberInt("99999"),
    sales: NumberInt("0"),
    views: NumberInt("3"),
    skuType: NumberInt("1"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: false,
    isHot: false,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-08T03:31:59Z"),
    updatedAt: ISODate("2022-03-22T03:32:22Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6226ce6834e951c07a467db4"),
    title: "梵 吟撰 純米大吟釀 720ml",
    subTitle: "梵 吟撰 純米大吟釀 720ml",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg"
    ],
    description: "<h1>清酒 - 【清酒】梵</h1>\n<p><a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>名稱：梵 吟撰&nbsp;<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>&nbsp;720ml<br />產品類別：<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>&nbsp;|&nbsp;<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a><br /><a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>銘柄：加藤吉平商店釀造<br />生產地區：日本福井縣鯖江市</p>\n<p><br />是在冰溫下於0&deg;C或更低溫度下陳化長達1年的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>的混合物。</p>\n<p><br />「梵」在梵語裡解作「清淨」、「真理」之意，英文名字為「BORN」，意指創造及誕生<br /><br />1928年 被選為昭和天皇即位的儀式用酒<br />1996年 初次在克林頓總統訪日晚餐會上亮相<br />2002年 日本主辦世界盃的歡迎晚會乾杯酒<br />2007年 成為了政府的機內酒，予日本首相及海外政府首腦享用<br /><br /><br />日本愛子公主誕生時的特別製作<br />2019 SFIWC 最高賞<br /><br /><br />2010 IWC (最高賞) 世界第一位。在國宴上用來招待日本國內外<br />重要貴賓的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>。<a class=\"jptooltip\" href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E5%B1%B1%E7%94%B0%E9%8C%A6\">山田錦</a>50%精米、經過0℃儲藏一年熟成。<br />最適合「梵」入門者的一款酒品。<br /><br /></p>\n<p>「International Spirits Challenge (ISC)」乃全日本十大最具認受性的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>品質國際評審機構之一，此<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>獲年度甄選並予以頒發金賞。</p>\n<p>&nbsp;</p>\n<p>「International Sake Challenge (IWC)」乃全日本十大最具認受性的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>品質國際評審機構之一，此<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>獲年度甄選並予以頒發金賞。</p>\n<p>&nbsp;</p>\n<p>日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>類別中「<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>」，作為特定名稱酒是指精米步合在50%以下，並僅以水、米、米麴來發酵，沒有添加其他釀造酒精的日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>。「吟釀」代表以「吟釀造」的製法所製作而成，吟釀造是日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>中一種低溫發酵的製法，會產生特有的芳香。要成為吟釀必須符合嚴格的規定，「吟釀」的精米步合須在60%以下，「大吟釀」的精米步合須在50%以下。精米步合是釀造日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>的術語，指磨過之後的白米，佔原本玄米的比重。精米的目的是去除米的外層部分內的釀造日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>時並非必須的蛋白質、脂肪與維生素，留下米中心由澱粉組成的「心白」部分，為<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>酒質與口感帶來豐富變化。<br /><br />所以「<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>」級別的日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>，即是將一批糙米磨去至少五成，所製成之白米佔原玄米重量的最多五成的精米級別。「<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>」釀酒過程講究精準，是口感風味皆為上品的日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>，凍飲、常温飲用均可，不建議加熱飲用，或會令<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>原有酒香流失。「<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E7%B4%94%E7%B1%B3%E5%A4%A7%E5%90%9F%E9%87%80\">純米大吟釀</a>」大多口感細緻、香氣華麗，散發花果般的香氣，相當適合推薦給初嘗日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>、或是日本<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>初學者！</p>\n<p>&nbsp;</p>\n<p>「梵」在梵語裡為「清淨」之意，英文名字為 Born，指創造及誕生。由日本加藤吉平商店釀造的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>。「梵」用兵庫縣特 A 區出產、精米步合分別為 35% 及 20% 的<a class=\"jptooltip\" href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92%E7%89%B9%E9%9B%86-%E5%B1%B1%E7%94%B0%E9%8C%A6\">山田錦</a>調合而成，在攝氏負 8 度熟成 5 年。「梵」多次在國家重要場合中亮相，比如 1928 年昭和天皇即位的儀式。</p>\n<p><br /><br /></p>\n<div class=\"detail-imglist\">&nbsp;</div>\n<p>&nbsp;</p>\n<p class=\"beizhu\">『根據香港法律，不得在業務過程中，向未成年人售賣或供應令人醺醉的酒類。』<br />\"Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor in the course of business.\"<br />購買令人醺醉的酒類產品（以按體積計算含1.2%乙醇的飲料）人士必須年滿18歲。如送遞人員對收件人的年齡有任何疑問，將會要求收件人出示身份證或年齡證明文件。</p>",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("188"),
    costPrice: NumberInt("99"),
    inventory: NumberInt("999999"),
    sales: NumberInt("0"),
    views: NumberInt("3"),
    skuType: NumberInt("1"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: false,
    isHot: false,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-08T03:32:56Z"),
    updatedAt: ISODate("2022-03-19T11:12:43Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6226ce9d34e951c07a467dc3"),
    title: "梵 GOLD 無濾過 純米大吟釀 15% 720ml",
    subTitle: "梵 GOLD 無濾過 純米大吟釀 15% 720ml",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg"
    ],
    description: "<p>「梵」在梵語裡解作「清淨」、「真理」之意，英文名字為「BORN」，意指創造及誕生</p>",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("288"),
    costPrice: NumberInt("128"),
    inventory: NumberInt("99999"),
    sales: NumberInt("0"),
    views: NumberInt("1"),
    skuType: NumberInt("1"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: false,
    isHot: false,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-08T03:33:49Z"),
    updatedAt: ISODate("2022-03-22T08:15:16Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6226cef934e951c07a467dee"),
    title: "中埜酒造 KUNIZAKARI 特撰國盛 彩華 大吟釀 720ml - 金賞受賞酒",
    subTitle: "中埜酒造 KUNIZAKARI 特撰國盛 彩華 大吟釀 720ml - 金賞受賞酒",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/15758-1626952020-1.jpg",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/15758-1626952020-1.jpg",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg"
    ],
    description: "描述",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("149"),
    costPrice: NumberInt("88"),
    inventory: NumberInt("88"),
    sales: NumberInt("2"),
    views: NumberInt("5"),
    skuType: NumberInt("2"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: false,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-08T03:35:21Z"),
    updatedAt: ISODate("2022-03-22T08:19:25Z"),
    __v: NumberInt("0"),
    skuAttrs: [
        {
            name: "容量",
            values: [
                "500ml",
                "750ml"
            ],
            _id: ObjectId("62be681177cfbfcbae6acd03")
        }
    ],
    skus: [
        {
            price: NumberInt("149"),
            inventory: NumberInt("88"),
            costPrice: NumberInt("198"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/15758-1626952020-1.jpg",
            artNo: NumberInt("15415456"),
            skuNames: [
                "500ml"
            ],
            _id: ObjectId("6246b9ed14396db71505bb5a"),
            updatedAt: ISODate("2022-07-01T03:20:49Z"),
            createdAt: ISODate("2022-07-01T03:20:49Z")
        },
        {
            price: NumberInt("138"),
            inventory: NumberInt("99"),
            costPrice: NumberInt("218"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
            artNo: NumberInt("18478964"),
            skuNames: [
                "750ml"
            ],
            _id: ObjectId("6246b9ed14396db71505bb5b"),
            updatedAt: ISODate("2022-07-01T03:20:49Z"),
            createdAt: ISODate("2022-07-01T03:20:49Z")
        }
    ]
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("62b0255b80c4a9905bd79778"),
    title: "白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙",
    subTitle: "白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09a.png",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09a.png",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09b.png"
    ],
    description: "描述",
    category: ObjectId("62b02138a0c39134030b5bd7"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("128"),
    costPrice: NumberInt("0"),
    inventory: NumberInt("88"),
    sales: NumberInt("1"),
    views: NumberInt("5"),
    skuType: NumberInt("2"),
    skus: [
        {
            price: NumberInt("128"),
            inventory: NumberInt("88"),
            costPrice: NumberInt("99"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09a.png",
            artNo: NumberInt("123"),
            skuNames: [
                "米色荷叶边",
                "S"
            ],
            _id: ObjectId("62b027b080c4a9905bd7985c"),
            updatedAt: ISODate("2022-07-01T03:20:59Z"),
            createdAt: ISODate("2022-07-01T03:20:59Z")
        },
        {
            price: NumberInt("109"),
            inventory: NumberInt("88"),
            costPrice: NumberInt("99"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/nz-09b.png",
            artNo: NumberInt("123456"),
            skuNames: [
                "米色荷叶边",
                "M"
            ],
            _id: ObjectId("62b027b080c4a9905bd7985e"),
            updatedAt: ISODate("2022-07-01T03:20:59Z"),
            createdAt: ISODate("2022-07-01T03:20:59Z")
        },
        {
            price: NumberInt("98"),
            inventory: NumberInt("88"),
            costPrice: NumberInt("99"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/img-9.png",
            artNo: NumberInt("1888888"),
            skuNames: [
                "米色荷叶边",
                "L"
            ],
            _id: ObjectId("62b027b080c4a9905bd79860"),
            updatedAt: ISODate("2022-07-01T03:20:59Z"),
            createdAt: ISODate("2022-07-01T03:20:59Z")
        }
    ],
    skuAttrs: [
        {
            name: "颜色",
            values: [
                "米色荷叶边"
            ],
            _id: ObjectId("62be681b77cfbfcbae6acd1b")
        },
        {
            name: "尺码",
            values: [
                "S",
                "M",
                "L"
            ],
            _id: ObjectId("62be681b77cfbfcbae6acd1c")
        }
    ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: false,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for roles
// ----------------------------
db.getCollection("roles").drop();
db.createCollection("roles");

// ----------------------------
// Documents of roles
// ----------------------------
db.getCollection("roles").insert([ {
    _id: ObjectId("62416f318fef456a9d24af6d"),
    name: "超级管理员",
    label: "Super",
    remark: "可以操作所有功能",
    menuIds: [
        ObjectId("6241610edc6e6a32af526cb2"),
        ObjectId("62416134dc6e6a32af526cca"),
        ObjectId("624278fde21930fdd25dcf94"),
        ObjectId("62427969e21930fdd25dcfbe"),
        ObjectId("62427a3be21930fdd25dd000"),
        ObjectId("624277e2e21930fdd25dceea"),
        ObjectId("624278a5e21930fdd25dcf5b"),
        ObjectId("62427f36e21930fdd25dd18f"),
        ObjectId("62427f80e21930fdd25dd1bf"),
        ObjectId("62427fc1e21930fdd25dd1ef"),
        ObjectId("62427fe4e21930fdd25dd223"),
        ObjectId("624280f2e21930fdd25dd28d"),
        ObjectId("6242813be21930fdd25dd2c7"),
        ObjectId("62428173e21930fdd25dd301"),
        ObjectId("624281e4e21930fdd25dd377"),
        ObjectId("6242822be21930fdd25dd42b"),
        ObjectId("62428276e21930fdd25dd46d"),
        ObjectId("624282cae21930fdd25dd4d0"),
        ObjectId("624282f7e21930fdd25dd516"),
        ObjectId("62416277dc6e6a32af526cfc"),
        ObjectId("6242b2f287e2fb62fe78b871"),
        ObjectId("6241633adc6e6a32af526d40"),
        ObjectId("624163a2dc6e6a32af526d6b"),
        ObjectId("624163eadc6e6a32af526d8b"),
        ObjectId("6247efe18453ca65d94d865c"),
        ObjectId("6247f0418453ca65d94d86ac"),
        ObjectId("6247ffe880c807ce1a354cbb"),
        ObjectId("6242b56087e2fb62fe78bd60"),
        ObjectId("62415f35dc6e6a32af526c67"),
        ObjectId("6248029380c807ce1a354e43"),
        ObjectId("6248046e80c807ce1a354fa7"),
        ObjectId("62415ff4dc6e6a32af526c88"),
        ObjectId("6241604ddc6e6a32af526c9c"),
        ObjectId("6242bb4e87e2fb62fe78bef1"),
        ObjectId("62413d5b199676484a76c415"),
        ObjectId("62413e58199676484a76c438"),
        ObjectId("62415edadc6e6a32af526c57"),
        ObjectId("624806f380c807ce1a355148"),
        ObjectId("62592a44df253ed80ddcfcd2"),
        ObjectId("62415e76dc6e6a32af526c49"),
        ObjectId("62428096e21930fdd25dd257"),
        ObjectId("6262123fb74277f628092ced"),
        ObjectId("626229f6b74277f6280934cb")
    ],
    createdAt: ISODate("2022-03-28T08:17:53Z"),
    updatedAt: ISODate("2022-04-22T04:09:28Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("62416f988fef456a9d24af8c"),
    name: "测试管理员",
    label: "Test",
    remark: "仅限操作商品管理、店铺管理功能",
    menuIds: [
        ObjectId("62427f36e21930fdd25dd18f"),
        ObjectId("62427f80e21930fdd25dd1bf"),
        ObjectId("62428096e21930fdd25dd257"),
        ObjectId("62413d5b199676484a76c415"),
        ObjectId("62413e58199676484a76c438"),
        ObjectId("62415edadc6e6a32af526c57"),
        ObjectId("624806f380c807ce1a355148"),
        ObjectId("62415e76dc6e6a32af526c49")
    ],
    createdAt: ISODate("2022-03-28T08:19:36Z"),
    updatedAt: ISODate("2022-04-08T01:53:16Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for site_settings
// ----------------------------
db.getCollection("site_settings").drop();
db.createCollection("site_settings");

// ----------------------------
// Documents of site_settings
// ----------------------------
db.getCollection("site_settings").insert([ {
    _id: ObjectId("6226caaafe07752f557da4dc"),
    fileStorage: {
        mode: NumberInt("1"),
        aliOss: {
            region: "oss-cn-shenzhen",
            accessKeyId: "LTAI4FzDnAmwU3RpTyFtdGsa",
            accessKeySecret: "zot5lHfGOzbjHKLYnUNwmzBGSbHLgs",
            bucket: "nestshop",
            _id: ObjectId("62b916cff4277630872eca2a")
        },
        _id: ObjectId("62b916cff4277630872eca29"),
        updatedAt: ISODate("2022-06-27T02:32:47Z"),
        createdAt: ISODate("2022-06-27T02:32:47Z")
    },
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for tags
// ----------------------------
db.getCollection("tags").drop();
db.createCollection("tags");

// ----------------------------
// Documents of tags
// ----------------------------
db.getCollection("tags").insert([ {
    _id: ObjectId("6225dc189516ca9a7388477c"),
    name: "新品",
    description: "用于商品",
    type: NumberInt("1"),
    status: true,
    createdAt: ISODate("2022-03-07T10:19:04Z"),
    updatedAt: ISODate("2022-03-07T10:19:04Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("6274f142a9157edf5362d2db"),
    name: "新闻",
    description: "新闻栏目专用",
    type: NumberInt("2"),
    status: true,
    createdAt: ISODate("2022-05-06T09:58:26Z"),
    updatedAt: ISODate("2022-05-06T09:58:26Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("62ba83c5f5ac5b487898f2db"),
    name: "热销",
    description: "用于商品",
    type: NumberInt("1"),
    status: true,
    createdAt: ISODate("2022-06-28T04:29:57Z"),
    updatedAt: ISODate("2022-06-28T04:29:57Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for user_addresses
// ----------------------------
db.getCollection("user_addresses").drop();
db.createCollection("user_addresses");

// ----------------------------
// Documents of user_addresses
// ----------------------------

// ----------------------------
// Collection structure for user_carts
// ----------------------------
db.getCollection("user_carts").drop();
db.createCollection("user_carts");

// ----------------------------
// Documents of user_carts
// ----------------------------

// ----------------------------
// Collection structure for user_collections
// ----------------------------
db.getCollection("user_collections").drop();
db.createCollection("user_collections");

// ----------------------------
// Documents of user_collections
// ----------------------------

// ----------------------------
// Collection structure for user_integrals
// ----------------------------
db.getCollection("user_integrals").drop();
db.createCollection("user_integrals");

// ----------------------------
// Documents of user_integrals
// ----------------------------

// ----------------------------
// Collection structure for user_view_histories
// ----------------------------
db.getCollection("user_view_histories").drop();
db.createCollection("user_view_histories");

// ----------------------------
// Documents of user_view_histories
// ----------------------------

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true,
    unique: true
});
db.getCollection("users").createIndex({
    phone: NumberInt("1")
}, {
    name: "phone_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("622707f8ddf23c9a77a88092"),
    name: "沙漠的风",
    email: "ayu@qq.com",
    avatar: "https://www.zhouxuanyu.com/usr/uploads/2022/02/47540976.jpg",
    gender: NumberInt("1"),
    phone: "15800021934",
    loginCount: NumberInt("0"),
    password: "$2a$10$RU84e1.DJfQlTG2chYYJ9.HooWab1mh.FKQHF9VJ7EnAE5K9ykEuq",
    consumptionAmount: NumberInt("0"),
    consumptionCount: NumberInt("0"),
    status: true,
    isOnline: false,
    createdAt: ISODate("2022-03-08T07:38:32Z"),
    updatedAt: ISODate("2022-03-08T07:38:32Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62ba9b55ff2291616ef62502"),
    nickName: "阿宇",
    avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/GlVjbpIGicUROwicrjBSLYia5mO8fMXuibII01twOXwp0IwmBMwObObkjIklUCicQl9XicNRyVxqibBerxQZKjRnib2SMg/132",
    loginCount: NumberInt("0"),
    openid: "opOX74jX-QgrSNP994y_TE9UPfOg",
    sessionKey: "Dqvg3rIopzZxczGVptCxlg==",
    consumptionAmount: NumberInt("0"),
    consumptionCount: NumberInt("0"),
    status: true,
    isOnline: false,
    createdAt: ISODate("2022-06-28T06:10:29Z"),
    updatedAt: ISODate("2022-06-28T06:10:29Z"),
    __v: NumberInt("0")
} ]);
