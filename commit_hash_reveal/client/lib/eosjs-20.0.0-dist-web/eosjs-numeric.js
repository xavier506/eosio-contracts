var eosjs_numeric=function(r){var t={};function e(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var a in r)e.d(n,a,function(t){return r[t]}.bind(null,a));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=6)}({6:function(r,t,e){"use strict";var n=this&&this.__read||function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,a,o=e.call(r),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(r){a={error:r}}finally{try{n&&!n.done&&(e=o.return)&&e.call(o)}finally{if(a)throw a.error}}return i},a=this&&this.__spread||function(){for(var r=[],t=0;t<arguments.length;t++)r=r.concat(n(arguments[t]));return r},o=this&&this.__values||function(r){var t="function"==typeof Symbol&&r[Symbol.iterator],e=0;return t?t.call(r):{next:function(){return r&&e>=r.length&&(r=void 0),{value:r&&r[e++],done:!r}}}};Object.defineProperty(t,"__esModule",{value:!0});var i=e(7).RIPEMD160.hash,u="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var c=function(){for(var r=Array(256).fill(-1),t=0;t<u.length;++t)r[u.charCodeAt(t)]=t;return r}();var l,d=function(){for(var r=Array(256).fill(-1),t=0;t<f.length;++t)r[f.charCodeAt(t)]=t;return r["=".charCodeAt(0)]=0,r}();function s(r){return 0!=(128&r[r.length-1])}function y(r){for(var t=1,e=0;e<r.length;++e){var n=(255&~r[e])+t;r[e]=n,t=n>>8}}function h(r,t){for(var e=new Uint8Array(r),n=0;n<t.length;++n){var a=t.charCodeAt(n);if(a<"0".charCodeAt(0)||a>"9".charCodeAt(0))throw new Error("invalid number");for(var o=a-"0".charCodeAt(0),i=0;i<r;++i){var u=10*e[i]+o;e[i]=u,o=u>>8}if(o)throw new Error("number is out of range")}return e}function v(r,t){void 0===t&&(t=1);for(var e=Array(t).fill("0".charCodeAt(0)),n=r.length-1;n>=0;--n){for(var o=r[n],i=0;i<e.length;++i){var u=(e[i]-"0".charCodeAt(0)<<8)+o;e[i]="0".charCodeAt(0)+u%10,o=u/10|0}for(;o;)e.push("0".charCodeAt(0)+o%10),o=o/10|0}return e.reverse(),String.fromCharCode.apply(String,a(e))}function g(r,t){for(var e=new Uint8Array(r),n=0;n<t.length;++n){var a=c[t.charCodeAt(n)];if(a<0)throw new Error("invalid base-58 value");for(var o=0;o<r;++o){var i=58*e[o]+a;e[o]=i,a=i>>8}if(a)throw new Error("base-58 value is out of range")}return e.reverse(),e}function p(r,t){var e,n,i,f;void 0===t&&(t=1);var l=[];try{for(var d=o(r),s=d.next();!s.done;s=d.next()){for(var y=s.value,h=0;h<l.length;++h){var v=(c[l[h]]<<8)+y;l[h]=u.charCodeAt(v%58),y=v/58|0}for(;y;)l.push(u.charCodeAt(y%58)),y=y/58|0}}catch(r){e={error:r}}finally{try{s&&!s.done&&(n=d.return)&&n.call(d)}finally{if(e)throw e.error}}try{for(var g=o(r),p=g.next();!p.done;p=g.next()){if(p.value)break;l.push("1".charCodeAt(0))}}catch(r){i={error:r}}finally{try{p&&!p.done&&(f=g.return)&&f.call(g)}finally{if(i)throw i.error}}return l.reverse(),String.fromCharCode.apply(String,a(l))}function b(r,t){for(var e=new Uint8Array(r.length+t.length),n=0;n<r.length;++n)e[n]=r[n];for(n=0;n<t.length;++n)e[r.length+n]=t.charCodeAt(n);return i(e)}function w(r,t,e,n){var a=g(e+4,r),o={type:t,data:new Uint8Array(a.buffer,0,e)},i=new Uint8Array(b(o.data,n));if(i[0]!==a[e+0]||i[1]!==a[e+1]||i[2]!==a[e+2]||i[3]!==a[e+3])throw new Error("checksum doesn't match");return o}function _(r,t,e){for(var n=new Uint8Array(b(r.data,t)),a=new Uint8Array(r.data.length+4),o=0;o<r.data.length;++o)a[o]=r.data[o];for(o=0;o<4;++o)a[o+r.data.length]=n[o];return e+p(a)}function m(r){if("string"!=typeof r)throw new Error("expected string containing public key");if("EOS"===r.substr(0,3)){for(var e=g(t.publicKeyDataSize+4,r.substr(3)),n={type:l.k1,data:new Uint8Array(t.publicKeyDataSize)},a=0;a<t.publicKeyDataSize;++a)n.data[a]=e[a];var o=new Uint8Array(i(n.data));if(o[0]!==e[t.publicKeyDataSize]||o[1]!==e[34]||o[2]!==e[35]||o[3]!==e[36])throw new Error("checksum doesn't match");return n}if("PUB_K1_"===r.substr(0,7))return w(r.substr(7),l.k1,t.publicKeyDataSize,"K1");if("PUB_R1_"===r.substr(0,7))return w(r.substr(7),l.r1,t.publicKeyDataSize,"R1");throw new Error("unrecognized public key format")}function A(r){if(r.type===l.k1&&r.data.length===t.publicKeyDataSize)return _(r,"K1","PUB_K1_");if(r.type===l.r1&&r.data.length===t.publicKeyDataSize)return _(r,"R1","PUB_R1_");throw new Error("unrecognized public key format")}function S(r){return"EOS"===r.substr(0,3)?A(m(r)):r}t.isNegative=s,t.negate=y,t.decimalToBinary=h,t.signedDecimalToBinary=function(r,t){var e="-"===t[0];e&&(t=t.substr(1));var n=h(r,t);if(e){if(y(n),!s(n))throw new Error("number is out of range")}else if(s(n))throw new Error("number is out of range");return n},t.binaryToDecimal=v,t.signedBinaryToDecimal=function(r,t){if(void 0===t&&(t=1),s(r)){var e=r.slice();return y(e),"-"+v(e,t)}return v(r,t)},t.base58ToBinary=g,t.binaryToBase58=p,t.base64ToBinary=function(r){var t=r.length;if(1==(3&t)&&"="===r[t-1]&&(t-=1),0!=(3&t))throw new Error("base-64 value is not padded correctly");var e=t>>2,n=3*e;t>0&&"="===r[t-1]&&("="===r[t-2]?n-=2:n-=1);for(var a=new Uint8Array(n),o=0;o<e;++o){var i=d[r.charCodeAt(4*o+0)],u=d[r.charCodeAt(4*o+1)],f=d[r.charCodeAt(4*o+2)],c=d[r.charCodeAt(4*o+3)];a[3*o+0]=i<<2|u>>4,3*o+1<n&&(a[3*o+1]=(15&u)<<4|f>>2),3*o+2<n&&(a[3*o+2]=(3&f)<<6|c)}return a},function(r){r[r.k1=0]="k1",r[r.r1=1]="r1"}(l=t.KeyType||(t.KeyType={})),t.publicKeyDataSize=33,t.privateKeyDataSize=32,t.signatureDataSize=65,t.stringToPublicKey=m,t.publicKeyToString=A,t.convertLegacyPublicKey=S,t.convertLegacyPublicKeys=function(r){return r.map(S)},t.stringToPrivateKey=function(r){if("string"!=typeof r)throw new Error("expected string containing private key");if("PVT_R1_"===r.substr(0,7))return w(r.substr(7),l.r1,t.privateKeyDataSize,"R1");throw new Error("unrecognized private key format")},t.privateKeyToString=function(r){if(r.type===l.r1)return _(r,"R1","PVT_R1_");throw new Error("unrecognized private key format")},t.stringToSignature=function(r){if("string"!=typeof r)throw new Error("expected string containing signature");if("SIG_K1_"===r.substr(0,7))return w(r.substr(7),l.k1,t.signatureDataSize,"K1");if("SIG_R1_"===r.substr(0,7))return w(r.substr(7),l.r1,t.signatureDataSize,"R1");throw new Error("unrecognized signature format")},t.signatureToString=function(r){if(r.type===l.k1)return _(r,"K1","SIG_K1_");if(r.type===l.r1)return _(r,"R1","SIG_R1_");throw new Error("unrecognized signature format")}},7:function(r,t,e){"use strict";class n{constructor(){}static get_n_pad_bytes(r){return 64-(r+8&63)}static pad(r){const t=r.byteLength,e=n.get_n_pad_bytes(t),[a,o]=((r,t)=>[Math.floor(r/t),r%t])(t,536870912).map((r,t)=>t?8*r:r),i=new Uint8Array(t+e+8);i.set(new Uint8Array(r),0);const u=new DataView(i.buffer);return u.setUint8(t,128),u.setUint32(t+e,o,!0),u.setUint32(t+e+4,a,!0),i.buffer}static f(r,t,e,n){return 0<=r&&r<=15?t^e^n:16<=r&&r<=31?t&e|~t&n:32<=r&&r<=47?(t|~e)^n:48<=r&&r<=63?t&n|e&~n:64<=r&&r<=79?t^(e|~n):void 0}static K(r){return 0<=r&&r<=15?0:16<=r&&r<=31?1518500249:32<=r&&r<=47?1859775393:48<=r&&r<=63?2400959708:64<=r&&r<=79?2840853838:void 0}static KP(r){return 0<=r&&r<=15?1352829926:16<=r&&r<=31?1548603684:32<=r&&r<=47?1836072691:48<=r&&r<=63?2053994217:64<=r&&r<=79?0:void 0}static add_modulo32(){return 0|Array.from(arguments).reduce((r,t)=>r+t,0)}static rol32(r,t){return r<<t|r>>>32-t}static hash(r){const t=n.pad(r),e=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],a=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],o=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],i=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],u=t.byteLength/64,f=new Array(u).fill(void 0).map((r,e)=>r=>new DataView(t,64*e,64).getUint32(4*r,!0));let c=[1732584193,4023233417,2562383102,271733878,3285377520];for(let r=0;r<u;++r){let t=c[0],u=c[1],l=c[2],d=c[3],s=c[4],y=t,h=u,v=l,g=d,p=s;for(let c=0;c<80;++c){let b=n.add_modulo32(n.rol32(n.add_modulo32(t,n.f(c,u,l,d),f[r](e[c]),n.K(c)),o[c]),s);t=s,s=d,d=n.rol32(l,10),l=u,u=b,b=n.add_modulo32(n.rol32(n.add_modulo32(y,n.f(79-c,h,v,g),f[r](a[c]),n.KP(c)),i[c]),p),y=p,p=g,g=n.rol32(v,10),v=h,h=b}let b=n.add_modulo32(c[1],l,g);c[1]=n.add_modulo32(c[2],d,p),c[2]=n.add_modulo32(c[3],s,y),c[3]=n.add_modulo32(c[4],t,h),c[4]=n.add_modulo32(c[0],u,v),c[0]=b}const l=new ArrayBuffer(20),d=new DataView(l);return c.forEach((r,t)=>d.setUint32(4*t,r,!0)),l}}r.exports={RIPEMD160:n}}});