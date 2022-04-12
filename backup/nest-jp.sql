/*
 Navicat Premium Data Transfer

 Source Server         : 腾讯云mongodb
 Source Server Type    : MongoDB
 Source Server Version : 40406
 Source Host           : 175.178.107.120:27017
 Source Schema         : nest-jp

 Target Server Type    : MongoDB
 Target Server Version : 40406
 File Encoding         : 65001

 Date: 07/04/2022 18:27:34
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
    createdAt: ISODate("2022-03-28T09:24:54.141Z"),
    updatedAt: ISODate("2022-03-28T09:24:54.141Z"),
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
    createdAt: ISODate("2022-03-28T09:45:06.682Z"),
    updatedAt: ISODate("2022-03-28T09:45:06.682Z"),
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
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/1644807683-1_l.jpg",
    url: "https://www.zhouxuanyu.com",
    type: NumberInt("1"),
    status: NumberInt("2"),
    productId: null,
    createdAt: ISODate("2022-02-11T10:06:43.498Z"),
    updatedAt: ISODate("2022-03-08T03:46:19.262Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("6225db479516ca9a73884764"),
    name: "测试图片二",
    sort: NumberInt("1"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/1645433138-1_l.jpg",
    type: NumberInt("3"),
    status: NumberInt("2"),
    product: null,
    createdAt: ISODate("2022-03-07T10:15:35.7Z"),
    updatedAt: ISODate("2022-03-08T03:46:27.489Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("6225db579516ca9a7388476b"),
    name: "测试图片三",
    sort: NumberInt("1"),
    image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/1645672634-1_l.jpg",
    type: NumberInt("3"),
    status: NumberInt("2"),
    product: null,
    createdAt: ISODate("2022-03-07T10:15:51.173Z"),
    updatedAt: ISODate("2022-03-08T03:46:33.993Z"),
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
    createdAt: ISODate("2022-02-12T01:56:28.95Z"),
    updatedAt: ISODate("2022-02-12T01:56:28.95Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("620713e91f625fb6a4893f32"),
    name: "烧酒",
    sort: NumberInt("2"),
    status: true,
    parentId: null,
    createdAt: ISODate("2022-02-12T01:56:57.113Z"),
    updatedAt: ISODate("2022-02-12T01:56:57.113Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("620783fd6aaebbecc07fa9fb"),
    name: "测试",
    sort: NumberInt("3"),
    status: true,
    parentId: ObjectId("620713cc1f625fb6a4893f2b"),
    createdAt: ISODate("2022-02-12T09:55:09.74Z"),
    updatedAt: ISODate("2022-02-12T09:55:09.74Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for chatmessages
// ----------------------------
db.getCollection("chatmessages").drop();
db.createCollection("chatmessages");

// ----------------------------
// Documents of chatmessages
// ----------------------------

// ----------------------------
// Collection structure for classifynavigations
// ----------------------------
db.getCollection("classifynavigations").drop();
db.createCollection("classifynavigations");

// ----------------------------
// Documents of classifynavigations
// ----------------------------

// ----------------------------
// Collection structure for librarycategories
// ----------------------------
db.getCollection("librarycategories").drop();
db.createCollection("librarycategories");

// ----------------------------
// Documents of librarycategories
// ----------------------------
db.getCollection("librarycategories").insert([ {
    _id: ObjectId("6204bd5b1d797993f869774f"),
    name: "Banner",
    parentId: null,
    createdAt: ISODate("2022-02-10T07:23:07.315Z"),
    updatedAt: ISODate("2022-02-10T07:23:07.315Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("librarycategories").insert([ {
    _id: ObjectId("6226cd6f34e951c07a467d6a"),
    name: "商品",
    parentId: null,
    createdAt: ISODate("2022-03-08T03:28:47.548Z"),
    updatedAt: ISODate("2022-03-08T03:28:47.548Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for medialibraries
// ----------------------------
db.getCollection("medialibraries").drop();
db.createCollection("medialibraries");

// ----------------------------
// Documents of medialibraries
// ----------------------------
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("62062ee71f625fb6a4893ed3"),
    name: "3.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/e6fb1bcca1d360fba08bb66a08712a3c.jpg",
    createdAt: ISODate("2022-02-11T09:39:51.325Z"),
    updatedAt: ISODate("2022-02-11T09:39:51.325Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("62062f0a1f625fb6a4893ede"),
    name: "3e6d23ca6c3a16fe.jpg",
    categoryId: null,
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg",
    createdAt: ISODate("2022-02-11T09:40:26.465Z"),
    updatedAt: ISODate("2022-02-11T09:40:26.465Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6225d8189516ca9a73884735"),
    name: "slideshow_img_371dd9.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/slideshow_img_371dd9.jpg",
    createdAt: ISODate("2022-03-07T10:02:00.051Z"),
    updatedAt: ISODate("2022-03-07T10:02:00.051Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6225d9d59516ca9a7388473b"),
    name: "slideshow_img_004192.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/slideshow_img_004192.jpg",
    createdAt: ISODate("2022-03-07T10:09:25.189Z"),
    updatedAt: ISODate("2022-03-07T10:09:25.189Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6225d9da9516ca9a73884741"),
    name: "slideshow_img_ac4d1b.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/slideshow_img_ac4d1b.jpg",
    createdAt: ISODate("2022-03-07T10:09:30.986Z"),
    updatedAt: ISODate("2022-03-07T10:09:30.986Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6225dc669516ca9a7388478e"),
    name: "0220307182009.png",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/0220307182009.png",
    createdAt: ISODate("2022-03-07T10:20:22.611Z"),
    updatedAt: ISODate("2022-03-07T10:20:22.611Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6225dcd79516ca9a738847a9"),
    name: "_20220307182135.png",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/_20220307182135.png",
    createdAt: ISODate("2022-03-07T10:22:15.302Z"),
    updatedAt: ISODate("2022-03-07T10:22:15.302Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6225dd8b9516ca9a738847be"),
    name: "企业微信截图_20220307182446.png",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220307182446.png",
    createdAt: ISODate("2022-03-07T10:25:15.568Z"),
    updatedAt: ISODate("2022-03-07T10:25:15.568Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6225de1e9516ca9a738847d5"),
    name: "截图_20220307182700.png",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/%E6%88%AA%E5%9B%BE_20220307182700.png",
    createdAt: ISODate("2022-03-07T10:27:42.162Z"),
    updatedAt: ISODate("2022-03-07T10:27:42.162Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6226cd8534e951c07a467d74"),
    name: "微信图片_20220308094802.png",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220308094802.png",
    createdAt: ISODate("2022-03-08T03:29:09.319Z"),
    updatedAt: ISODate("2022-03-08T03:29:09.319Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6226cd9534e951c07a467d7a"),
    name: "7644-1624616821-1.png",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
    createdAt: ISODate("2022-03-08T03:29:25.133Z"),
    updatedAt: ISODate("2022-03-08T03:29:25.133Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6226cdbf34e951c07a467d80"),
    name: "257-1638773420-1.jpg",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
    createdAt: ISODate("2022-03-08T03:30:07.471Z"),
    updatedAt: ISODate("2022-03-08T03:30:07.471Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6226cde834e951c07a467d86"),
    name: "6930-1638773666-1.jpg",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg",
    createdAt: ISODate("2022-03-08T03:30:48.099Z"),
    updatedAt: ISODate("2022-03-08T03:30:48.099Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6226cecb34e951c07a467dd1"),
    name: "15758-1626952020-1.jpg",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/15758-1626952020-1.jpg",
    createdAt: ISODate("2022-03-08T03:34:35.203Z"),
    updatedAt: ISODate("2022-03-08T03:34:35.203Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6226cf6f34e951c07a467e08"),
    name: "1644807683-1_l.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/1644807683-1_l.jpg",
    createdAt: ISODate("2022-03-08T03:37:19.453Z"),
    updatedAt: ISODate("2022-03-08T03:37:19.453Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6226cf7434e951c07a467e0e"),
    name: "1645433138-1_l.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/1645433138-1_l.jpg",
    createdAt: ISODate("2022-03-08T03:37:24.03Z"),
    updatedAt: ISODate("2022-03-08T03:37:24.03Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6226cf7934e951c07a467e14"),
    name: "1645672634-1_l.jpg",
    categoryId: ObjectId("6204bd5b1d797993f869774f"),
    url: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/1645672634-1_l.jpg",
    createdAt: ISODate("2022-03-08T03:37:29.291Z"),
    updatedAt: ISODate("2022-03-08T03:37:29.291Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("medialibraries").insert([ {
    _id: ObjectId("6247c2fb54c3e926cadd54d1"),
    name: "1644807683-1_l.jpg",
    categoryId: ObjectId("6226cd6f34e951c07a467d6a"),
    url: "http://localhost:3008/uploads-images/1644807683-1_l.jpg",
    createdAt: ISODate("2022-04-02T03:28:59.826Z"),
    updatedAt: ISODate("2022-04-02T03:28:59.826Z"),
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
    createdAt: ISODate("2022-03-28T04:45:15.07Z"),
    updatedAt: ISODate("2022-04-02T08:18:59.442Z"),
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
    createdAt: ISODate("2022-03-28T04:49:28.723Z"),
    updatedAt: ISODate("2022-03-29T02:04:05.486Z"),
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
    createdAt: ISODate("2022-03-28T07:06:30.577Z"),
    updatedAt: ISODate("2022-03-29T02:04:13.127Z"),
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
    createdAt: ISODate("2022-03-28T07:08:10.494Z"),
    updatedAt: ISODate("2022-03-29T02:04:21.139Z"),
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
    createdAt: ISODate("2022-03-28T07:09:41.737Z"),
    updatedAt: ISODate("2022-04-02T08:51:43.531Z"),
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
    createdAt: ISODate("2022-03-28T07:12:52.757Z"),
    updatedAt: ISODate("2022-03-29T02:04:38.493Z"),
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
    createdAt: ISODate("2022-03-28T07:14:21.023Z"),
    updatedAt: ISODate("2022-03-29T02:04:43.712Z"),
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
    createdAt: ISODate("2022-03-28T07:17:34.591Z"),
    updatedAt: ISODate("2022-04-07T02:58:24.169Z"),
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
    createdAt: ISODate("2022-03-28T07:18:12.948Z"),
    updatedAt: ISODate("2022-03-29T02:04:57.649Z"),
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
    createdAt: ISODate("2022-03-28T07:23:35.728Z"),
    updatedAt: ISODate("2022-04-02T07:24:36.822Z"),
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
    createdAt: ISODate("2022-03-28T07:26:50.056Z"),
    updatedAt: ISODate("2022-03-29T07:24:28.217Z"),
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
    createdAt: ISODate("2022-03-28T07:28:34.281Z"),
    updatedAt: ISODate("2022-03-29T07:24:40.477Z"),
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
    createdAt: ISODate("2022-03-28T07:29:46.112Z"),
    updatedAt: ISODate("2022-03-29T07:23:46.973Z"),
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
    createdAt: ISODate("2022-03-29T03:07:14.88Z"),
    updatedAt: ISODate("2022-03-29T03:10:29.863Z"),
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
    createdAt: ISODate("2022-03-29T03:10:29.88Z"),
    updatedAt: ISODate("2022-03-29T03:10:29.88Z"),
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
    createdAt: ISODate("2022-03-29T03:11:57.997Z"),
    updatedAt: ISODate("2022-04-07T02:58:24.186Z"),
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
    createdAt: ISODate("2022-03-29T03:13:45.191Z"),
    updatedAt: ISODate("2022-03-29T03:13:45.191Z"),
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
    createdAt: ISODate("2022-03-29T03:17:15.849Z"),
    updatedAt: ISODate("2022-03-29T03:36:36.082Z"),
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
    createdAt: ISODate("2022-03-29T03:38:30.571Z"),
    updatedAt: ISODate("2022-03-29T03:39:44.324Z"),
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
    createdAt: ISODate("2022-03-29T03:39:44.339Z"),
    updatedAt: ISODate("2022-03-29T03:39:44.339Z"),
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
    createdAt: ISODate("2022-03-29T03:40:49.828Z"),
    updatedAt: ISODate("2022-03-29T03:41:24.549Z"),
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
    createdAt: ISODate("2022-03-29T03:41:24.564Z"),
    updatedAt: ISODate("2022-03-29T03:41:24.564Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("62428096e21930fdd25dd257"),
    name: "ChatMassage",
    path: "/chat-message",
    component: "/chat-massage/index",
    meta: {
        icon: "carbon:chat-bot",
        disabled: false,
        hideMenu: false,
        title: "客服聊天",
        affix: false,
        ignoreKeepAlive: false,
        hideChildrenInMenu: false,
        orderNo: NumberInt("13"),
        _id: ObjectId("62428096e21930fdd25dd258")
    },
    parentId: null,
    createdAt: ISODate("2022-03-29T03:44:22.506Z"),
    updatedAt: ISODate("2022-03-29T03:44:22.506Z"),
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
    createdAt: ISODate("2022-03-29T03:45:54.053Z"),
    updatedAt: ISODate("2022-03-29T03:47:07.048Z"),
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
    createdAt: ISODate("2022-03-29T03:47:07.062Z"),
    updatedAt: ISODate("2022-03-29T03:47:07.062Z"),
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
    createdAt: ISODate("2022-03-29T03:48:03.823Z"),
    updatedAt: ISODate("2022-03-29T03:48:03.823Z"),
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
    createdAt: ISODate("2022-03-29T03:49:56.336Z"),
    updatedAt: ISODate("2022-03-29T03:54:31.201Z"),
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
    createdAt: ISODate("2022-03-29T03:51:07.467Z"),
    updatedAt: ISODate("2022-03-29T03:51:07.467Z"),
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
    createdAt: ISODate("2022-03-29T03:52:22.583Z"),
    updatedAt: ISODate("2022-03-29T03:52:22.583Z"),
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
    createdAt: ISODate("2022-03-29T03:53:46.85Z"),
    updatedAt: ISODate("2022-03-29T03:53:46.85Z"),
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
    createdAt: ISODate("2022-03-29T03:54:31.219Z"),
    updatedAt: ISODate("2022-03-29T03:54:31.219Z"),
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
    createdAt: ISODate("2022-03-29T07:19:14.558Z"),
    updatedAt: ISODate("2022-04-02T07:16:53.398Z"),
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
    createdAt: ISODate("2022-03-29T07:29:36.726Z"),
    updatedAt: ISODate("2022-03-29T07:29:36.726Z"),
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
    createdAt: ISODate("2022-03-29T07:54:54.343Z"),
    updatedAt: ISODate("2022-03-29T07:54:54.343Z"),
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
    createdAt: ISODate("2022-04-02T06:40:33.825Z"),
    updatedAt: ISODate("2022-04-02T07:48:56.924Z"),
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
    createdAt: ISODate("2022-04-02T06:42:09.042Z"),
    updatedAt: ISODate("2022-04-02T07:28:14.297Z"),
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
    createdAt: ISODate("2022-04-02T07:48:56.971Z"),
    updatedAt: ISODate("2022-04-02T07:48:56.971Z"),
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
    createdAt: ISODate("2022-04-02T08:00:19.988Z"),
    updatedAt: ISODate("2022-04-02T08:00:19.988Z"),
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
    createdAt: ISODate("2022-04-02T08:08:14.672Z"),
    updatedAt: ISODate("2022-04-02T08:51:43.546Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("624806f380c807ce1a355148"),
    name: "ShopDecorate",
    path: "/shop/decorate",
    component: "/shop/decorate/index",
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
    createdAt: ISODate("2022-04-02T08:18:59.46Z"),
    updatedAt: ISODate("2022-04-02T08:18:59.46Z"),
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
    createdAt: ISODate("2022-03-19T10:45:36.438Z"),
    updatedAt: ISODate("2022-03-20T02:46:54.566Z"),
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
    createdAt: ISODate("2022-03-19T11:13:06.939Z"),
    updatedAt: ISODate("2022-03-19T11:13:06.939Z"),
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
    createdAt: ISODate("2022-03-20T02:41:03.456Z"),
    updatedAt: ISODate("2022-03-20T02:41:03.456Z"),
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
    createdAt: ISODate("2022-03-22T06:20:53.718Z"),
    updatedAt: ISODate("2022-03-22T06:20:53.718Z"),
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
    createdAt: ISODate("2022-03-22T06:42:49.633Z"),
    updatedAt: ISODate("2022-03-23T10:03:55.835Z"),
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
    createdAt: ISODate("2022-03-22T08:15:30.122Z"),
    updatedAt: ISODate("2022-03-22T08:15:30.122Z"),
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
    createdAt: ISODate("2022-03-22T08:20:03.703Z"),
    updatedAt: ISODate("2022-03-22T08:20:17.485Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for productcomments
// ----------------------------
db.getCollection("productcomments").drop();
db.createCollection("productcomments");

// ----------------------------
// Documents of productcomments
// ----------------------------
db.getCollection("productcomments").insert([ {
    _id: ObjectId("62393ecfc8e78c7759e24f2f"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6225dc919516ca9a7388479d"),
    rate: NumberInt("5"),
    content: "评论内容测试",
    images: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg"
    ],
    createdAt: ISODate("2022-03-22T03:13:19.912Z"),
    updatedAt: ISODate("2022-03-29T10:10:48.839Z"),
    __v: NumberInt("0"),
    replyContent: "评论内容测试"
} ]);
db.getCollection("productcomments").insert([ {
    _id: ObjectId("623aeea29501d60162aa1bfe"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6225ddae9516ca9a738847c9"),
    rate: NumberInt("5"),
    content: "测试评分",
    images: [ ],
    createdAt: ISODate("2022-03-23T09:55:46.313Z"),
    updatedAt: ISODate("2022-03-29T10:13:59.647Z"),
    __v: NumberInt("0"),
    replyContent: "你胡发顺丰 是否"
} ]);
db.getCollection("productcomments").insert([ {
    _id: ObjectId("623af08b9501d60162aa1c05"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6225ddae9516ca9a738847c9"),
    rate: NumberInt("5"),
    content: "测试评分",
    images: [ ],
    createdAt: ISODate("2022-03-23T10:03:55.817Z"),
    updatedAt: ISODate("2022-03-23T10:03:55.817Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for productparams
// ----------------------------
db.getCollection("productparams").drop();
db.createCollection("productparams");

// ----------------------------
// Documents of productparams
// ----------------------------

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
    description: "<div class=\"product__lead\">米の品種と磨きの違いで<br />香りと味わいを楽しむ4本セット</div>\n<div class=\"product-description rte\">\n<p><strong>富久長 八反草 サタケシリーズ HENPEI 生酒　720ml</strong><br /><strong>富久長 八反草 サタケシリーズ GENKEI 生酒　720ml</strong><br /><strong>富久長 八反草 純米吟醸 ハイブリッド生酛 生酒　720ml</strong><br /><strong>富久長 八反草 純米 ハイブリッド生酛 生酒　720ml</strong></p>\n<br />\n<p>富久長 サタケシリーズ HENPEI &amp; GENKEI 生酒とハイブリッド生酛 生酒の4本セットです。広島の精米機メーカー、サタケの最新技術である真吟精米は、米を球形に磨く従来型から、薄く磨く「扁平精米」と玄米と同じ形に磨く「原形精米」を実現しました。真吟精米は、タンパク質の削減具合が精米60%で従来の球形精米40%に匹敵します。ハイブリッド生酛シリーズは、富久長が試行錯誤を重ね開発した高温糖化と古来伝統の生酛系酒母を組み合わせた手法です。米の磨きと造りの違いによる香りと味わいの違いをぜひご賞味ください！</p>\n<br />\n<p><strong>【ギフト包装について】</strong><br />ギフト包装をご希望の方は「<a href=\"https://fukucho.jp/collections/%E3%82%AE%E3%83%95%E3%83%88%E5%8C%85%E8%A3%85-%E7%86%A8%E6%96%97\">ギフト包装・紙袋</a>」を併せてご注文ください。4本用の化粧箱のご用意がなく、ギフト包装をご希望の場合は1本〜3本用の箱にどの様に分けて包装するかをカートページの備考欄にお書き添えください。</p>\n</div>",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("188"),
    costPrice: NumberInt("66"),
    inventory: NumberInt("99"),
    sales: NumberInt("0"),
    views: NumberInt("71"),
    skuType: NumberInt("2"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: true,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-07T10:21:05.387Z"),
    updatedAt: ISODate("2022-03-22T06:10:40.547Z"),
    __v: NumberInt("0"),
    skuAttrs: [
        {
            name: "容量",
            values: [
                "500ml",
                "750ml"
            ],
            _id: ObjectId("6247c97bcf162026452c1e09")
        }
    ],
    skus: [
        {
            price: NumberInt("188"),
            inventory: NumberInt("99"),
            costPrice: NumberInt("188"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
            artNo: NumberInt("8456465"),
            skuNames: [
                "500ml"
            ],
            _id: ObjectId("6247c3b254c3e926cadd5506"),
            updatedAt: ISODate("2022-04-02T03:56:43.087Z"),
            createdAt: ISODate("2022-04-02T03:56:43.087Z")
        },
        {
            price: NumberInt("128"),
            inventory: NumberInt("99"),
            costPrice: NumberInt("388"),
            weight: NumberInt("1"),
            image: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
            artNo: NumberInt("231313"),
            skuNames: [
                "750ml"
            ],
            _id: ObjectId("6247c3b254c3e926cadd5507"),
            updatedAt: ISODate("2022-04-02T03:56:43.087Z"),
            createdAt: ISODate("2022-04-02T03:56:43.087Z")
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
    description: "<div class=\"product__lead\">米の磨きの違いで<br />香りと味わいを楽しむ3本セット</div>\n<div class=\"product-description rte\">\n<p><strong>富久長 八反草 サタケシリーズ HENPEI 生酒　720ml</strong><br /><strong>富久長 八反草 サタケシリーズ GENKEI 生酒　720ml</strong></p>\n<br />\n<p>広島の精米機メーカー、サタケの最新技術である真吟精米は、米を球形に磨く従来型から、薄く磨く「扁平精米」と玄米と同じ形に磨く「原形精米」を実現しました。真吟精米は、タンパク質の削減具合が精米60%で従来の球形精米40%に匹敵します。米の磨きによる香りと味わいの違いをぜひご賞味ください！</p>\n<br />\n<p><strong>【ギフト包装について】</strong><br />ギフト包装をご希望の方は「<a href=\"https://fukucho.jp/collections/%E3%82%AE%E3%83%95%E3%83%88%E5%8C%85%E8%A3%85-%E7%86%A8%E6%96%97\">ギフト包装・紙袋</a>」を併せてご注文ください。</p>\n</div>",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("128"),
    costPrice: NumberInt("128"),
    inventory: NumberInt("88"),
    sales: NumberInt("0"),
    views: NumberInt("6"),
    skuType: NumberInt("2"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: true,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-07T10:23:00.201Z"),
    updatedAt: ISODate("2022-03-22T04:22:13.232Z"),
    __v: NumberInt("0"),
    skuAttrs: [
        {
            name: "容量",
            values: [
                "500ml",
                "750ml"
            ],
            _id: ObjectId("6247ed828453ca65d94d84cd")
        }
    ],
    skus: [
        {
            price: NumberInt("128"),
            inventory: NumberInt("88"),
            costPrice: NumberInt("199"),
            weight: NumberInt("1"),
            image: "",
            artNo: NumberInt("456465465"),
            skuNames: [
                "500ml"
            ],
            _id: ObjectId("6247ed828453ca65d94d84cb"),
            updatedAt: ISODate("2022-04-02T06:30:26.84Z"),
            createdAt: ISODate("2022-04-02T06:30:26.84Z")
        },
        {
            price: NumberInt("138"),
            inventory: NumberInt("99"),
            costPrice: NumberInt("288"),
            weight: NumberInt("1"),
            image: "",
            artNo: NumberInt("132156465"),
            skuNames: [
                "750ml"
            ],
            _id: ObjectId("6247ed828453ca65d94d84cc"),
            updatedAt: ISODate("2022-04-02T06:30:26.84Z"),
            createdAt: ISODate("2022-04-02T06:30:26.84Z")
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
    views: NumberInt("25"),
    skuType: NumberInt("1"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: true,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-07T10:25:50.745Z"),
    updatedAt: ISODate("2022-03-22T08:15:08.659Z"),
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
    inventory: NumberInt("122222"),
    sales: NumberInt("0"),
    views: NumberInt("7"),
    skuType: NumberInt("1"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: true,
    isHot: true,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-07T10:28:02.064Z"),
    updatedAt: ISODate("2022-03-22T08:15:10.769Z"),
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
    views: NumberInt("2"),
    skuType: NumberInt("1"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: false,
    isHot: false,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-08T03:31:59.456Z"),
    updatedAt: ISODate("2022-03-22T03:32:22.711Z"),
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
    views: NumberInt("2"),
    skuType: NumberInt("1"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: false,
    isHot: false,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-08T03:32:56.866Z"),
    updatedAt: ISODate("2022-03-19T11:12:43.848Z"),
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
    createdAt: ISODate("2022-03-08T03:33:49.718Z"),
    updatedAt: ISODate("2022-03-22T08:15:16.734Z"),
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
    description: "<p>「全國新酒鑑評会（ぜんこくしんしゅかんぴょうかい）」乃全日本十大最具認受性的<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>品質評審機構之一，此<a href=\"https://www.whiskychillhk.com/%E6%B8%85%E9%85%92-Sake\">清酒</a>獲年度甄選並予以頒發金賞。</p>",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("149"),
    costPrice: NumberInt("88"),
    inventory: NumberInt("88"),
    sales: NumberInt("0"),
    views: NumberInt("2"),
    skuType: NumberInt("2"),
    sku: [ ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: false,
    isHot: false,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    createdAt: ISODate("2022-03-08T03:35:21.669Z"),
    updatedAt: ISODate("2022-03-22T08:19:25.269Z"),
    __v: NumberInt("0"),
    skuAttrs: [
        {
            name: "容量",
            values: [
                "500ml",
                "750ml"
            ],
            _id: ObjectId("6247c9067bb8bd21de7d132b")
        }
    ],
    skus: [
        {
            price: NumberInt("149"),
            inventory: NumberInt("88"),
            costPrice: NumberInt("198"),
            weight: NumberInt("1"),
            image: null,
            artNo: NumberInt("15415456"),
            skuNames: [
                "500ml"
            ],
            _id: ObjectId("6246b9ed14396db71505bb5a"),
            updatedAt: ISODate("2022-04-02T03:54:46.469Z"),
            createdAt: ISODate("2022-04-02T03:54:46.469Z")
        },
        {
            price: NumberInt("138"),
            inventory: NumberInt("99"),
            costPrice: NumberInt("218"),
            weight: NumberInt("1"),
            image: null,
            artNo: NumberInt("18478964"),
            skuNames: [
                "750ml"
            ],
            _id: ObjectId("6246b9ed14396db71505bb5b"),
            updatedAt: ISODate("2022-04-02T03:54:46.469Z"),
            createdAt: ISODate("2022-04-02T03:54:46.469Z")
        }
    ]
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6246b19e35afd6c9a3829990"),
    title: "阿萨法是否阿萨法",
    subTitle: "啊发顺丰啊发送",
    pic: "http://nestshop.oss-cn-shenzhen.aliyuncs.com/d511ecfe8005553bfa9063a99c62ecee.jpg",
    bannerImg: [
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/7644-1624616821-1.png",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/257-1638773420-1.jpg",
        "http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/6930-1638773666-1.jpg"
    ],
    description: "<p>描述澳服阿萨阿萨啊啊啊</p>",
    category: ObjectId("620713cc1f625fb6a4893f2b"),
    tags: [
        ObjectId("6225dc189516ca9a7388477c")
    ],
    price: NumberInt("13"),
    costPrice: NumberInt("0"),
    inventory: NumberInt("88"),
    sales: NumberInt("0"),
    views: NumberInt("0"),
    skuType: NumberInt("2"),
    skus: [
        {
            price: NumberInt("13"),
            inventory: NumberInt("88"),
            costPrice: NumberInt("88"),
            weight: NumberInt("1"),
            image: null,
            artNo: NumberInt("154654"),
            skuNames: [
                "黑色",
                "500ml"
            ],
            _id: ObjectId("6246b19e35afd6c9a3829991"),
            updatedAt: ISODate("2022-04-01T08:25:50.9Z"),
            createdAt: ISODate("2022-04-01T08:25:50.9Z")
        },
        {
            price: NumberInt("15"),
            inventory: NumberInt("188"),
            costPrice: NumberInt("88"),
            weight: NumberInt("1"),
            image: null,
            artNo: NumberInt("84684"),
            skuNames: [
                "黑色",
                "750ml"
            ],
            _id: ObjectId("6246b19e35afd6c9a3829992"),
            updatedAt: ISODate("2022-04-01T08:25:50.9Z"),
            createdAt: ISODate("2022-04-01T08:25:50.9Z")
        },
        {
            price: NumberInt("20"),
            inventory: NumberInt("128"),
            costPrice: NumberInt("128"),
            weight: NumberInt("1"),
            image: null,
            artNo: NumberInt("56465"),
            skuNames: [
                "幻色",
                "500ml"
            ],
            _id: ObjectId("6246b19e35afd6c9a3829993"),
            updatedAt: ISODate("2022-04-01T08:25:50.9Z"),
            createdAt: ISODate("2022-04-01T08:25:50.9Z")
        },
        {
            price: NumberInt("39"),
            inventory: NumberInt("98"),
            costPrice: NumberInt("138"),
            weight: NumberInt("1"),
            image: null,
            artNo: NumberInt("84564"),
            skuNames: [
                "幻色",
                "750ml"
            ],
            _id: ObjectId("6246b19e35afd6c9a3829994"),
            updatedAt: ISODate("2022-04-01T08:25:50.9Z"),
            createdAt: ISODate("2022-04-01T08:25:50.9Z")
        },
        {
            price: NumberInt("49"),
            inventory: NumberInt("555"),
            costPrice: NumberInt("149"),
            weight: NumberInt("1"),
            image: null,
            artNo: NumberInt("45465465"),
            skuNames: [
                "绿色",
                "500ml"
            ],
            _id: ObjectId("6246b19e35afd6c9a3829995"),
            updatedAt: ISODate("2022-04-01T08:25:50.9Z"),
            createdAt: ISODate("2022-04-01T08:25:50.9Z")
        },
        {
            price: NumberInt("88"),
            inventory: NumberInt("99"),
            costPrice: NumberInt("188"),
            weight: NumberInt("1"),
            image: null,
            artNo: NumberInt("45456465"),
            skuNames: [
                "绿色",
                "750ml"
            ],
            _id: ObjectId("6246b19e35afd6c9a3829996"),
            updatedAt: ISODate("2022-04-01T08:25:50.9Z"),
            createdAt: ISODate("2022-04-01T08:25:50.9Z")
        }
    ],
    skuAttrs: [
        {
            name: "颜色",
            values: [
                "黑色",
                "幻色",
                "绿色"
            ],
            _id: ObjectId("6246b70e14396db71505ba66")
        },
        {
            name: "容器",
            values: [
                "500ml",
                "750ml"
            ],
            _id: ObjectId("6246b70e14396db71505ba67")
        }
    ],
    sort: NumberInt("1"),
    status: true,
    isTimeLimit: false,
    isHot: false,
    shareCount: NumberInt("0"),
    collectionCount: NumberInt("0"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for productskuattrs
// ----------------------------
db.getCollection("productskuattrs").drop();
db.createCollection("productskuattrs");

// ----------------------------
// Documents of productskuattrs
// ----------------------------
db.getCollection("productskuattrs").insert([ {
    _id: ObjectId("6246a85fbe4e21f3c44f9f64"),
    name: "颜色",
    productId: ObjectId("6246a85fbe4e21f3c44f9f62"),
    values: [
        "黑色",
        "红色",
        "黄色"
    ],
    createdAt: ISODate("2022-04-01T07:23:11.521Z"),
    updatedAt: ISODate("2022-04-01T07:23:11.521Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("productskuattrs").insert([ {
    _id: ObjectId("6246a85fbe4e21f3c44f9f66"),
    name: "容量",
    productId: ObjectId("6246a85fbe4e21f3c44f9f62"),
    values: [
        "500ml",
        "750ml"
    ],
    createdAt: ISODate("2022-04-01T07:23:11.533Z"),
    updatedAt: ISODate("2022-04-02T10:19:01.758Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("productskuattrs").insert([ {
    _id: ObjectId("624822cbca62e2fbb10a8c3a"),
    name: "测试",
    productId: null,
    values: [
        "黄色",
        "蓝色",
        "黑色",
        "白色"
    ],
    createdAt: ISODate("2022-04-02T10:17:47.178Z"),
    updatedAt: ISODate("2022-04-02T10:17:47.178Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for productskus
// ----------------------------
db.getCollection("productskus").drop();
db.createCollection("productskus");

// ----------------------------
// Documents of productskus
// ----------------------------
db.getCollection("productskus").insert([ {
    _id: ObjectId("6246a85fbe4e21f3c44f9f69"),
    productId: ObjectId("6246a85fbe4e21f3c44f9f62"),
    image: "",
    inventory: NumberInt("99"),
    costPrice: NumberInt("188"),
    price: NumberInt("88"),
    weight: NumberInt("1"),
    artNo: "55645456",
    skuNames: [
        "黑色",
        "500ml"
    ],
    createdAt: ISODate("2022-04-01T07:23:11.568Z"),
    updatedAt: ISODate("2022-04-01T07:23:11.568Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("productskus").insert([ {
    _id: ObjectId("6246a85fbe4e21f3c44f9f6b"),
    productId: ObjectId("6246a85fbe4e21f3c44f9f62"),
    image: "",
    inventory: NumberInt("888"),
    costPrice: NumberInt("188"),
    price: NumberInt("88"),
    weight: NumberInt("8"),
    artNo: "1515",
    skuNames: [
        "黑色",
        "750ml"
    ],
    createdAt: ISODate("2022-04-01T07:23:11.596Z"),
    updatedAt: ISODate("2022-04-01T07:23:11.596Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("productskus").insert([ {
    _id: ObjectId("6246a85fbe4e21f3c44f9f6d"),
    productId: ObjectId("6246a85fbe4e21f3c44f9f62"),
    image: "",
    inventory: NumberInt("999"),
    costPrice: NumberInt("199"),
    price: NumberInt("99"),
    weight: NumberInt("2"),
    artNo: "12454",
    skuNames: [
        "红色",
        "500ml"
    ],
    createdAt: ISODate("2022-04-01T07:23:11.618Z"),
    updatedAt: ISODate("2022-04-01T07:23:11.618Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("productskus").insert([ {
    _id: ObjectId("6246a85fbe4e21f3c44f9f6f"),
    productId: ObjectId("6246a85fbe4e21f3c44f9f62"),
    image: "",
    inventory: NumberInt("999"),
    costPrice: NumberInt("188"),
    price: NumberInt("128"),
    weight: NumberInt("1"),
    artNo: "1221321",
    skuNames: [
        "红色",
        "750ml"
    ],
    createdAt: ISODate("2022-04-01T07:23:11.632Z"),
    updatedAt: ISODate("2022-04-01T07:23:11.632Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("productskus").insert([ {
    _id: ObjectId("6246a85fbe4e21f3c44f9f71"),
    productId: ObjectId("6246a85fbe4e21f3c44f9f62"),
    image: "",
    inventory: NumberInt("888"),
    costPrice: NumberInt("289"),
    price: NumberInt("138"),
    weight: NumberInt("1"),
    artNo: "1546",
    skuNames: [
        "黄色",
        "500ml"
    ],
    createdAt: ISODate("2022-04-01T07:23:11.646Z"),
    updatedAt: ISODate("2022-04-01T07:23:11.646Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("productskus").insert([ {
    _id: ObjectId("6246a85fbe4e21f3c44f9f73"),
    productId: ObjectId("6246a85fbe4e21f3c44f9f62"),
    image: "",
    inventory: NumberInt("55"),
    costPrice: NumberInt("399"),
    price: NumberInt("159"),
    weight: NumberInt("1"),
    artNo: "1514654",
    skuNames: [
        "黄色",
        "750ml"
    ],
    createdAt: ISODate("2022-04-01T07:23:11.665Z"),
    updatedAt: ISODate("2022-04-01T07:23:11.665Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for producttopics
// ----------------------------
db.getCollection("producttopics").drop();
db.createCollection("producttopics");

// ----------------------------
// Documents of producttopics
// ----------------------------

// ----------------------------
// Collection structure for productunits
// ----------------------------
db.getCollection("productunits").drop();
db.createCollection("productunits");

// ----------------------------
// Documents of productunits
// ----------------------------
db.getCollection("productunits").insert([ {
    _id: ObjectId("624e4ec89e3ef95601c561b6"),
    name: "件",
    sort: NumberInt("1"),
    createdAt: ISODate("2022-04-07T02:39:04.949Z"),
    updatedAt: ISODate("2022-04-07T02:39:04.949Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("productunits").insert([ {
    _id: ObjectId("624e4eda9e3ef95601c561bb"),
    name: "瓶",
    sort: NumberInt("1"),
    createdAt: ISODate("2022-04-07T02:39:22.482Z"),
    updatedAt: ISODate("2022-04-07T02:39:22.482Z"),
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
        ObjectId("624278fde21930fdd25dcf94"),
        ObjectId("62416134dc6e6a32af526cca"),
        ObjectId("62427969e21930fdd25dcfbe"),
        ObjectId("62427a3be21930fdd25dd000"),
        ObjectId("624277e2e21930fdd25dceea"),
        ObjectId("624278a5e21930fdd25dcf5b"),
        ObjectId("62427f36e21930fdd25dd18f"),
        ObjectId("62427f80e21930fdd25dd1bf"),
        ObjectId("62427fc1e21930fdd25dd1ef"),
        ObjectId("62427fe4e21930fdd25dd223"),
        ObjectId("62428096e21930fdd25dd257"),
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
        ObjectId("62415e76dc6e6a32af526c49")
    ],
    createdAt: ISODate("2022-03-28T08:17:53.811Z"),
    updatedAt: ISODate("2022-04-02T08:19:13.628Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("62416f988fef456a9d24af8c"),
    name: "测试管理员",
    label: "Test",
    remark: "仅限操作商品管理、店铺管理功能",
    menuIds: [ ],
    createdAt: ISODate("2022-03-28T08:19:36.776Z"),
    updatedAt: ISODate("2022-03-29T03:58:56.573Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for sitesettings
// ----------------------------
db.getCollection("sitesettings").drop();
db.createCollection("sitesettings");

// ----------------------------
// Documents of sitesettings
// ----------------------------
db.getCollection("sitesettings").insert([ {
    _id: ObjectId("6226caaafe07752f557da4dc"),
    fileStorage: {
        mode: "2",
        aliOss: {
            region: "oss-cn-shenzhen",
            accessKeyId: "LTAI4FzDnAmwU3RpTyFtdGsa",
            accessKeySecret: "zot5lHfGOzbjHKLYnUNwmzBGSbHLgs",
            bucket: "nestshop",
            _id: ObjectId("62318024db5076ecb762ad98")
        },
        _id: ObjectId("62318024db5076ecb762ad97"),
        updatedAt: ISODate("2022-03-16T06:13:56.242Z"),
        createdAt: ISODate("2022-03-16T06:13:56.242Z")
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
    createdAt: ISODate("2022-03-07T10:19:04.633Z"),
    updatedAt: ISODate("2022-03-07T10:19:04.633Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for useraddresses
// ----------------------------
db.getCollection("useraddresses").drop();
db.createCollection("useraddresses");

// ----------------------------
// Documents of useraddresses
// ----------------------------
db.getCollection("useraddresses").insert([ {
    _id: ObjectId("622ef6653259b55d1951779f"),
    name: "阿宇",
    phone: "15800021934",
    address: "广东省-广州市-天河区",
    detail: "梁婆街5号",
    isDefault: true,
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    createdAt: ISODate("2022-03-14T08:01:41.209Z"),
    updatedAt: ISODate("2022-03-14T08:01:46.171Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for usercarts
// ----------------------------
db.getCollection("usercarts").drop();
db.createCollection("usercarts");

// ----------------------------
// Documents of usercarts
// ----------------------------

// ----------------------------
// Collection structure for usercollections
// ----------------------------
db.getCollection("usercollections").drop();
db.createCollection("usercollections");

// ----------------------------
// Documents of usercollections
// ----------------------------
db.getCollection("usercollections").insert([ {
    _id: ObjectId("622ffbf290deea5ae0e0f316"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6225ddae9516ca9a738847c9"),
    createdAt: ISODate("2022-03-15T02:37:38.245Z"),
    updatedAt: ISODate("2022-03-15T02:37:38.245Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("usercollections").insert([ {
    _id: ObjectId("622ffe2990deea5ae0e0f354"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6225dc919516ca9a7388479d"),
    createdAt: ISODate("2022-03-15T02:47:05.024Z"),
    updatedAt: ISODate("2022-03-15T02:47:05.024Z"),
    __v: NumberInt("0")
} ]);

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
    avatar: "",
    gender: NumberInt("1"),
    phone: "15800021934",
    loginCount: NumberInt("0"),
    password: "$2a$10$RU84e1.DJfQlTG2chYYJ9.HooWab1mh.FKQHF9VJ7EnAE5K9ykEuq",
    consumptionAmount: NumberInt("0"),
    consumptionCount: NumberInt("0"),
    status: true,
    isOnline: false,
    createdAt: ISODate("2022-03-08T07:38:32.994Z"),
    updatedAt: ISODate("2022-03-08T07:38:32.994Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for userviewshistories
// ----------------------------
db.getCollection("userviewshistories").drop();
db.createCollection("userviewshistories");

// ----------------------------
// Documents of userviewshistories
// ----------------------------
db.getCollection("userviewshistories").insert([ {
    _id: ObjectId("62270c91ddf23c9a77a880a3"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6225dc919516ca9a7388479d"),
    createdAt: ISODate("2022-03-08T07:58:09.149Z"),
    updatedAt: ISODate("2022-03-08T07:58:09.149Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("userviewshistories").insert([ {
    _id: ObjectId("622716fbddf23c9a77a880cd"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6225dd049516ca9a738847b2"),
    createdAt: ISODate("2022-03-08T08:42:35.121Z"),
    updatedAt: ISODate("2022-03-08T08:42:35.121Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("userviewshistories").insert([ {
    _id: ObjectId("62271706ddf23c9a77a880d7"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6225ddae9516ca9a738847c9"),
    createdAt: ISODate("2022-03-08T08:42:46.805Z"),
    updatedAt: ISODate("2022-03-08T08:42:46.805Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("userviewshistories").insert([ {
    _id: ObjectId("6227170bddf23c9a77a880dd"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6225de329516ca9a738847e0"),
    createdAt: ISODate("2022-03-08T08:42:51.131Z"),
    updatedAt: ISODate("2022-03-08T08:42:51.131Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("userviewshistories").insert([ {
    _id: ObjectId("6235b3c7f67334d0742a412a"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6226ce6834e951c07a467db4"),
    createdAt: ISODate("2022-03-19T10:43:19.696Z"),
    updatedAt: ISODate("2022-03-19T10:43:19.696Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("userviewshistories").insert([ {
    _id: ObjectId("6235bab3a7d3d65e31e381c4"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6226ce2f34e951c07a467da3"),
    createdAt: ISODate("2022-03-19T11:12:51.312Z"),
    updatedAt: ISODate("2022-03-19T11:12:51.312Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("userviewshistories").insert([ {
    _id: ObjectId("6236942b86c5d2b40e8e0dab"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6226cef934e951c07a467dee"),
    createdAt: ISODate("2022-03-20T02:40:43.217Z"),
    updatedAt: ISODate("2022-03-20T02:40:43.217Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("userviewshistories").insert([ {
    _id: ObjectId("6239859457908cc4e35bc1e8"),
    userId: ObjectId("622707f8ddf23c9a77a88092"),
    productId: ObjectId("6226ce9d34e951c07a467dc3"),
    createdAt: ISODate("2022-03-22T08:15:16.785Z"),
    updatedAt: ISODate("2022-03-22T08:15:16.785Z"),
    __v: NumberInt("0")
} ]);
