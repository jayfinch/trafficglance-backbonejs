define(["module"],function(n){var e=n.config()||{};return{load:function(n,r,t,u){if(u.isBuild)r([n],function(n){t(n)});else{if(require.defined(n))return void r([n],function(n){t(n)});r(["text","dust-full","q"],function(i,f,o){var c=e.url||u.baseUrl,d=e.ext||".dust",l=e.helper||"dust",a=n,s=function(n){return{render:function(e,r){r||"function"!=typeof e||(r=e,e={}),f.render(n,e,r)},renderSync:function(e){e||(e={});var r;return f.render(n,e,function(n,e){if(n)throw n;r=e}),r},stream:function(e,r){r||"function"!=typeof e||(r=e,e={}),f.stream(n,e,r)}}},v=function(n){return{render:function(e){return e||(e={}),o.nfcall(f.render,n,e)},renderSync:function(e){e||(e={});var r;return f.render(n,e,function(n,e){if(n)throw n;r=e}),r},stream:function(e){return e||(e={}),o.nfcall(f.stream,n,e)}}};"dust"===l&&(l=s),"q"===l&&(l=v),a&&"."!==a[0]&&(a=c+a),-1===a.indexOf(d,a.length-d.length)&&(a+=d),i.get(r.toUrl(a),function(e){f.loadSource(f.compile(e,n)),t(l(n))})})}},write:function(n,e,r){var t='define(["'+e+'"], function(value) {return value;});';r.asModule(n+"!"+e,t)}}});
//# sourceMappingURL=dustc.js.map