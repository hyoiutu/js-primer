// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// reload asap
workbox.skipWaiting();
workbox.clientsClaim();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "appendix/links/index.html",
    "revision": "449e4a83f7b95ea7681c34e22457e6df"
  },
  {
    "url": "basic/array/index.html",
    "revision": "8297a0062e6618ec4ace739f0fe6fe22"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "0c1efe754c64a177739c145ba97a11fa"
  },
  {
    "url": "basic/class/index.html",
    "revision": "4e3f31f2fab9b5009f5c46aad1189e5c"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "eebb3e7afca3b231c436d756f052b949"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "ba1913a3780e5a344375478230c3bdc1"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "857329742d3a81c82d12d744c6359ed1"
  },
  {
    "url": "basic/date/index.html",
    "revision": "19c2e9b546ea62ed81acb121fee49b89"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "e266b3d14f35a817e568b4994ad08926"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "c56103f5335eafa697ea4a18cc37be2e"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "bd675af66664c54266dad0aaace5fd77"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "4a2cf91de6386c18d719806cc667fddb"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "206b87da8a5597ada0825fe9b45ccd55"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "e5c44492d343f9dcd33c17cfe71f33f0"
  },
  {
    "url": "basic/index.html",
    "revision": "94e39033a9662755d53bdc250a69d738"
  },
  {
    "url": "basic/introduction/img/javascript-ecmascript.png",
    "revision": "40a83bcf5b26783fc68b7caeb792d36d"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "08b739e97cb453e1e86a9de16150a140"
  },
  {
    "url": "basic/json/index.html",
    "revision": "c8b2425944ab8af8a8835ec91ebdbbc5"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "342ecd1bd7ebf845d57fe05d75d1803b"
  },
  {
    "url": "basic/loop/public/index.html",
    "revision": "226c5a5e385446f7b048d1b990a8f603"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "921e41c828f696df10fe45410ab7c853"
  },
  {
    "url": "basic/math/index.html",
    "revision": "7ec4940903a4fe41e742831c7756c897"
  },
  {
    "url": "basic/object/index.html",
    "revision": "9fbc20189e47ff065860fd479279deb4"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "36f81615de35abfc2f8e796784ee3be2"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "0144be14d588fca4022a0818ce842601"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "af75bcaadcf54fb28074bb2f44468247"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/img/web-console.png",
    "revision": "23eb78c09ad1d984cfa76270d8467b24"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "7b22671287c76b20b49e5d8def1326e3"
  },
  {
    "url": "basic/read-eval-print/src/empty/index.html",
    "revision": "5a2a8b11dda21e4b54164d24dd751dc4"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "7f80030f7ccacd30cc45eb6f6665a544"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "7d065a8e65d944b1898b9de5e8d1e07e"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "6665ae16a9f3b2bfee3d28930988f382"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "81bdae3abbfa82c8a14ce1d961bab2e5"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "76ff8f480213c61d9a958a933fbc50bc"
  },
  {
    "url": "basic/string/index.html",
    "revision": "9fcbe52acc44a53231670a0ddc3663f8"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "c940be6fd5982a0832025733dc1e961e"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "006343dcf537a41c5c23952cd86e3fca"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "0ca768e48d364ee90d22664568902840"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "643a674a6c2c15edd7f005475abf9599"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "e0a4dfd806b6d51bc7d54c35c971a9fb"
  },
  {
    "url": "intro/index.html",
    "revision": "8465583660be8300aeb665de43e26ceb"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "49a900f03c55743c8149f16db6571b73"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "1bf50123dd7fe8053c579742357ec970"
  },
  {
    "url": "outro/index.html",
    "revision": "1ff3d59467663c334077ecc0974bc677"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "7ff60893922cf7b4d484257ebc0bbece"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "b89416cb1388482fc234c4bf894e0e83"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "fe524b2e39538badca4b8d880ecba4d2"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "59d564baee8b85ccee9e5e5eac419944"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "c4fc965f555f66e67f123c7706970c64"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "7f8ebbd18129b44e4690f69e7035bca6"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "08f26d218b17fbc1aea4461f2a01df19"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "08f26d218b17fbc1aea4461f2a01df19"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "6b8d314ec1bea3f207c3c7965a0cd8ab"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "45577067ec45b8853a9b639641dd7dd5"
  },
  {
    "url": "use-case/index.html",
    "revision": "5cfba3b52f8897724d2597eb910ba6be"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "947b063eb40690706e514f6aa9110b5e"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "6f4763d8a30a478b12e7200c8a39d5ac"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "f09685414240c509cca4c60cf93bc5ef"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "251395c2dbe2b3f4ad62ffb3751fbd61"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "6210f347e472568b6b5c9955cf70af1b"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "b05ea98858d0d727e910ef5a66e09190"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "9d3a140e629a9a6400b4426a6e6052ef"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "98b8e1ceac14ee8d5bd405fe8fc1b2bc"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "3e557867866e2b8b33bff34a0243311e"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "a7e248a9554bc7f79bc635b4c373ed9c"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "dea085466faac33ac0ec1ee47e47e0c2"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "7982d73005aace941cf4c11764d8d601"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "be5eee3981ec18c49a62181f3fa78987"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "07fda3c2b654ee7b03f3ded0a58c1fff"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "a0c89c64e680150b8bfb10b1bb7f7be8"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "be5eee3981ec18c49a62181f3fa78987"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "363ad66f11327d4fbd4584c65dbcde65"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "f50a4cd83e8b4b42968d6e842cadfc1a"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "9ffaa1daeb5dc9ad3021970002a5aa53"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "6386dae811c22b0f595200806fb7a27d"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "9ffaa1daeb5dc9ad3021970002a5aa53"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "d8a4c5b56c5bdbb75d18f39127687c75"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "c60343514ee285d5d2e731db7da111b4"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "63a078771868a4e0c68b4753c40d11fe"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "9528b6b1e9c5c6c029843537ea4121f5"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  }
]);