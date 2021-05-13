/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "32bcef0e92f40da05d4239ca81814dda"
  },
  {
    "url": "assets/css/0.styles.53544d52.css",
    "revision": "f4c470637afad9b43f18740b018766f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2feebefe.js",
    "revision": "c5201bc94dbab57fa744fdd3884ac33f"
  },
  {
    "url": "assets/js/11.4d649f36.js",
    "revision": "282f5012d772ef08796878d4c4ba71ae"
  },
  {
    "url": "assets/js/12.2b1c842e.js",
    "revision": "c8fe39679494bb3bceb1be7c807b76d2"
  },
  {
    "url": "assets/js/13.446e0b50.js",
    "revision": "910e1c460c8a95c6fe4143cfa8c7eea6"
  },
  {
    "url": "assets/js/14.ebb36c57.js",
    "revision": "a27fbdddb20fc6a74fe73991422f67d0"
  },
  {
    "url": "assets/js/15.00ed25b9.js",
    "revision": "962bbd3d7fe8b1c0c71b9488f794aa73"
  },
  {
    "url": "assets/js/16.26229a43.js",
    "revision": "5a26298dc0da4a12b36beabd861c1763"
  },
  {
    "url": "assets/js/17.174e10b2.js",
    "revision": "e52f400b6d1987219a539bfe8f98c110"
  },
  {
    "url": "assets/js/18.f0614be4.js",
    "revision": "9706260fbda8e1e62305812f561ffa2c"
  },
  {
    "url": "assets/js/19.84f49bf6.js",
    "revision": "f96f7f6131cc62e007dc98d56c2fc73f"
  },
  {
    "url": "assets/js/20.fb1b13a6.js",
    "revision": "8991f082c8ed43d8bf4ca5dd7eb68b1a"
  },
  {
    "url": "assets/js/21.cbeb3d27.js",
    "revision": "d9d14d369339b13cc7373abf39568360"
  },
  {
    "url": "assets/js/22.f10169d4.js",
    "revision": "11a1a95a4fa2e3afd1babffce31f4edb"
  },
  {
    "url": "assets/js/23.ec15dc03.js",
    "revision": "cba54ecfa576f8953519cd450a9e3550"
  },
  {
    "url": "assets/js/24.e6b3e261.js",
    "revision": "ffe90c3254c4c7a2b2e6de7d19e3be0e"
  },
  {
    "url": "assets/js/25.6be62869.js",
    "revision": "3b7d195bdf9b839e8a6c8348e9bcd2ba"
  },
  {
    "url": "assets/js/26.618d9024.js",
    "revision": "125004a5d2c6f6e4a1dd9c76659f9210"
  },
  {
    "url": "assets/js/27.45a8d239.js",
    "revision": "3853d4a2d436cc86bf206eddec561e54"
  },
  {
    "url": "assets/js/28.134a45ad.js",
    "revision": "33a232568bb258585c103b0beefa9c3f"
  },
  {
    "url": "assets/js/29.9f50307c.js",
    "revision": "872bc98db73b9b31221d7196680b6e9b"
  },
  {
    "url": "assets/js/30.7cc7cc6b.js",
    "revision": "4d1d55d0d544d396862b18f8105c8bd6"
  },
  {
    "url": "assets/js/31.22defb84.js",
    "revision": "d63dd85f5b6bb7a33786bd76ad18c710"
  },
  {
    "url": "assets/js/32.1b14d61a.js",
    "revision": "04aa8a48f703e421a21039c52bfcb427"
  },
  {
    "url": "assets/js/33.898e87ab.js",
    "revision": "61ad3ee1014b0c828f4acad153fff4ef"
  },
  {
    "url": "assets/js/34.a3420481.js",
    "revision": "1f6a5b16ad92fcff571506e9837e8e97"
  },
  {
    "url": "assets/js/4.72217794.js",
    "revision": "304b142424b320b51babb9b6fa01ff9d"
  },
  {
    "url": "assets/js/5.f880ae76.js",
    "revision": "a1c6c2f9519befa2af8bffc129dd1cb7"
  },
  {
    "url": "assets/js/6.420cc174.js",
    "revision": "84df89fba07fc796ca84630701b5ef62"
  },
  {
    "url": "assets/js/7.046e5a1b.js",
    "revision": "a1a4eabe5f9f709c8fdb0f59c535f7e3"
  },
  {
    "url": "assets/js/8.77fb8967.js",
    "revision": "fe3132e4d77b75cf16882c0fcf84463c"
  },
  {
    "url": "assets/js/9.ebfa537e.js",
    "revision": "f8c46e4421227a74a3111727b37c7e7a"
  },
  {
    "url": "assets/js/app.7ecaa4c8.js",
    "revision": "0df066151ca2f31726139c9c2b61e8e0"
  },
  {
    "url": "assets/js/vendors~flowchart.20a64d45.js",
    "revision": "716c82a5a8d7e7248817c9c543fbb778"
  },
  {
    "url": "assets/js/vendors~notification.ea176280.js",
    "revision": "4638db80765160e1766d4bf574a4457c"
  },
  {
    "url": "core/index.html",
    "revision": "502563da67fa42b857443485b9014b25"
  },
  {
    "url": "core/spring-aop.html",
    "revision": "d4fa8a8c79cb57ab49eb421cc2e1282d"
  },
  {
    "url": "core/spring-bean.html",
    "revision": "74aacf8ae78be050aff39ceb86d528c3"
  },
  {
    "url": "core/spring-ioc.html",
    "revision": "8f6a4a272df53cdf2793e7dcd6a1f033"
  },
  {
    "url": "core/Spring依赖查找.html",
    "revision": "da3c0992915b508e345cc192aa118085"
  },
  {
    "url": "core/Spring依赖注入.html",
    "revision": "6cdff92aababd4035e8d332c21a7c2e4"
  },
  {
    "url": "core/Spring资源管理.html",
    "revision": "f7e0a92683cf31b2214a49ec4950541b"
  },
  {
    "url": "data/index.html",
    "revision": "068b58cfb26b8cb1b799cbfdc7633ba7"
  },
  {
    "url": "data/spring-tx.html",
    "revision": "9042ee3648e6735985cafab6da5e411d"
  },
  {
    "url": "data/Spring中使用JDBC访问数据.html",
    "revision": "6814b82a2b6b57dcf3802fa0f5ad8b94"
  },
  {
    "url": "data/Spring事务管理.html",
    "revision": "25d4c2f34bbeb5c2e704890fe9c8774c"
  },
  {
    "url": "data/Spring数据访问策略.html",
    "revision": "3714366a957416c8e095de216028e61d"
  },
  {
    "url": "index.html",
    "revision": "8ba85211d43d04193b521f9b7abad30f"
  },
  {
    "url": "integration/index.html",
    "revision": "f82de9edf4ad47cfbb7e874b551968c7"
  },
  {
    "url": "integration/Spring集成Dubbo.html",
    "revision": "aab9f6d6fb5b72c7c34891e52372e147"
  },
  {
    "url": "integration/Spring集成定时任务中间件.html",
    "revision": "91d752539515d851adc33aabc0c40306"
  },
  {
    "url": "integration/Spring集成缓存中间件.html",
    "revision": "fc3d2f53a3da784e3ba7a7209bc7389c"
  },
  {
    "url": "others/index.html",
    "revision": "fc7f27d38547d6831f551e28f80b4c4b"
  },
  {
    "url": "others/spring4-upgrade.html",
    "revision": "b8032b12efec6ff4ec8055cb85dc66f7"
  },
  {
    "url": "summary/index.html",
    "revision": "ea06c503b6750a887ed77f201cf1dee9"
  },
  {
    "url": "summary/Spring常见面试题.html",
    "revision": "a718a31af49591e84c76b47f5d3414c5"
  },
  {
    "url": "summary/Spring概述.html",
    "revision": "14640eb03826999425f1281d2e3032ad"
  },
  {
    "url": "web/index.html",
    "revision": "7c36cd2042ccc995f77c0053d836ae1c"
  },
  {
    "url": "web/spring-mvc.html",
    "revision": "25af0ea481dedb6748bfdce570212992"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
