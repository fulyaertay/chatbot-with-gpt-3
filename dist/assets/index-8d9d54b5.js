(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw Be(e)},Be=function(n){return new Error("Firebase Database ("+ir.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},aa=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},es={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):aa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new la;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class la extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const or=function(n){const e=rr(n);return es.encodeByteArray(e,!0)},St=function(n){return or(n).replace(/\./g,"")},xn=function(n){try{return es.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){return ar(void 0,n)}function ar(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ha(t)||(n[t]=ar(n[t],e[t]));return n}function ha(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=()=>ua().__FIREBASE_DEFAULTS__,fa=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},pa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xn(n[1]);return e&&JSON.parse(e)},lr=()=>{try{return da()||fa()||pa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_a=n=>{var e,t;return(t=(e=lr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ma=n=>{const e=_a(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},cr=()=>{var n;return(n=lr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[St(JSON.stringify(t)),St(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(va())}function ya(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ur(){return ir.NODE_ADMIN===!0}function Ea(){try{return typeof indexedDB=="object"}catch{return!1}}function ba(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="FirebaseError";class ut extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ca,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dr.prototype.create)}}class dr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Sa(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ut(i,a,s)}}function Sa(n,e){return n.replace(wa,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const wa=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n){return JSON.parse(n)}function x(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Xe(xn(r[0])||""),t=Xe(xn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Ia=function(n){const e=fr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ta=function(n){const e=fr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ke(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ws(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Mn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if($s(r)&&$s(o)){if(!Mn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function $s(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ts(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Bt=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new jt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Da(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Na(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Na(n){return n===me?void 0:n}function Da(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const Ma={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Fa=O.INFO,ka={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},La=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=ka[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pr{constructor(e){this.name=e,this._logLevel=Fa,this._logHandler=La,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ma[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const Ua=(n,e)=>e.some(t=>n instanceof t);let zs,Gs;function ja(){return zs||(zs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ba(){return Gs||(Gs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _r=new WeakMap,Fn=new WeakMap,mr=new WeakMap,sn=new WeakMap,ns=new WeakMap;function Va(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ae(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_r.set(t,n)}).catch(()=>{}),ns.set(e,n),e}function Ha(n){if(Fn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Fn.set(n,e)}let kn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ae(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qa(n){kn=n(kn)}function Wa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(rn(this),e,...t);return mr.set(s,e.sort?e.sort():[e]),ae(s)}:Ba().includes(n)?function(...e){return n.apply(rn(this),e),ae(_r.get(this))}:function(...e){return ae(n.apply(rn(this),e))}}function $a(n){return typeof n=="function"?Wa(n):(n instanceof IDBTransaction&&Ha(n),Ua(n,ja())?new Proxy(n,kn):n)}function ae(n){if(n instanceof IDBRequest)return Va(n);if(sn.has(n))return sn.get(n);const e=$a(n);return e!==n&&(sn.set(n,e),ns.set(e,n)),e}const rn=n=>ns.get(n);function za(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ae(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ae(o.result),l.oldVersion,l.newVersion,ae(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ga=["get","getKey","getAll","getAllKeys","count"],Ya=["put","add","delete","clear"],on=new Map;function Ys(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(on.get(e))return on.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ya.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ga.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return on.set(e,r),r}qa(n=>({...n,get:(e,t,s)=>Ys(e,t)||n.get(e,t,s),has:(e,t)=>!!Ys(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ka(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ka(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ln="@firebase/app",Qs="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new pr("@firebase/app"),Ja="@firebase/app-compat",Xa="@firebase/analytics-compat",Za="@firebase/analytics",el="@firebase/app-check-compat",tl="@firebase/app-check",nl="@firebase/auth",sl="@firebase/auth-compat",il="@firebase/database",rl="@firebase/database-compat",ol="@firebase/functions",al="@firebase/functions-compat",ll="@firebase/installations",cl="@firebase/installations-compat",hl="@firebase/messaging",ul="@firebase/messaging-compat",dl="@firebase/performance",fl="@firebase/performance-compat",pl="@firebase/remote-config",_l="@firebase/remote-config-compat",ml="@firebase/storage",gl="@firebase/storage-compat",vl="@firebase/firestore",yl="@firebase/firestore-compat",El="firebase",bl="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]",Cl={[Ln]:"fire-core",[Ja]:"fire-core-compat",[Za]:"fire-analytics",[Xa]:"fire-analytics-compat",[tl]:"fire-app-check",[el]:"fire-app-check-compat",[nl]:"fire-auth",[sl]:"fire-auth-compat",[il]:"fire-rtdb",[rl]:"fire-rtdb-compat",[ol]:"fire-fn",[al]:"fire-fn-compat",[ll]:"fire-iid",[cl]:"fire-iid-compat",[hl]:"fire-fcm",[ul]:"fire-fcm-compat",[dl]:"fire-perf",[fl]:"fire-perf-compat",[pl]:"fire-rc",[_l]:"fire-rc-compat",[ml]:"fire-gcs",[gl]:"fire-gcs-compat",[vl]:"fire-fst",[yl]:"fire-fst-compat","fire-js":"fire-js",[El]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Map,jn=new Map;function Sl(n,e){try{n.container.addComponent(e)}catch(t){be.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tt(n){const e=n.name;if(jn.has(e))return be.debug(`There were multiple attempts to register component ${e}.`),!1;jn.set(e,n);for(const t of It.values())Sl(t,n);return!0}function wl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},le=new dr("app","Firebase",Il);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=bl;function gr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Un,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw le.create("bad-app-name",{appName:String(i)});if(t||(t=cr()),!t)throw le.create("no-options");const r=It.get(i);if(r){if(Mn(t,r.options)&&Mn(s,r.config))return r;throw le.create("duplicate-app",{appName:i})}const o=new xa(i);for(const l of jn.values())o.addComponent(l);const a=new Tl(t,s,o);return It.set(i,a),a}function Al(n=Un){const e=It.get(n);if(!e&&n===Un&&cr())return gr();if(!e)throw le.create("no-app",{appName:n});return e}function De(n,e,t){var s;let i=(s=Cl[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),be.warn(a.join(" "));return}Tt(new Ze(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="firebase-heartbeat-database",Pl=1,et="firebase-heartbeat-store";let an=null;function vr(){return an||(an=za(Rl,Pl,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(et)}}}).catch(n=>{throw le.create("idb-open",{originalErrorMessage:n.message})})),an}async function Nl(n){try{return await(await vr()).transaction(et).objectStore(et).get(yr(n))}catch(e){if(e instanceof ut)be.warn(e.message);else{const t=le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});be.warn(t.message)}}}async function Ks(n,e){try{const s=(await vr()).transaction(et,"readwrite");await s.objectStore(et).put(e,yr(n)),await s.done}catch(t){if(t instanceof ut)be.warn(t.message);else{const s=le.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});be.warn(s.message)}}}function yr(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=1024,xl=30*24*60*60*1e3;class Ml{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Js();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=xl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Js(),{heartbeatsToSend:t,unsentEntries:s}=Fl(this._heartbeatsCache.heartbeats),i=St(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Js(){return new Date().toISOString().substring(0,10)}function Fl(n,e=Dl){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Xs(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Xs(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class kl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ea()?ba().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Nl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ks(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ks(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xs(n){return St(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){Tt(new Ze("platform-logger",e=>new Qa(e),"PRIVATE")),Tt(new Ze("heartbeat",e=>new Ml(e),"PRIVATE")),De(Ln,Qs,n),De(Ln,Qs,"esm2017"),De("fire-js","")}Ll("");var Ul="firebase",jl="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(Ul,jl,"app");const Zs="@firebase/database",ei="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er="";function Bl(n){Er=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),x(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Xe(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Vl(e)}}catch{}return new Hl},ve=br("localStorage"),Bn=br("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new pr("@firebase/database"),ql=function(){let n=1;return function(){return n++}}(),Cr=function(n){const e=Ra(n),t=new Aa;t.update(e);const s=t.digest();return es.encodeByteArray(s)},dt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=dt.apply(null,s):typeof s=="object"?e+=x(s):e+=s,e+=" "}return e};let Ee=null,ti=!0;const Wl=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(xe.logLevel=O.VERBOSE,Ee=xe.log.bind(xe),e&&Bn.set("logging_enabled",!0)):typeof n=="function"?Ee=n:(Ee=null,Bn.remove("logging_enabled"))},j=function(...n){if(ti===!0&&(ti=!1,Ee===null&&Bn.get("logging_enabled")===!0&&Wl(!0)),Ee){const e=dt.apply(null,n);Ee(e)}},ft=function(n){return function(...e){j(n,...e)}},Vn=function(...n){const e="FIREBASE INTERNAL ERROR: "+dt(...n);xe.error(e)},se=function(...n){const e=`FIREBASE FATAL ERROR: ${dt(...n)}`;throw xe.error(e),new Error(e)},H=function(...n){const e="FIREBASE WARNING: "+dt(...n);xe.warn(e)},$l=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&H("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},zl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Le="[MIN_NAME]",Ce="[MAX_NAME]",Ve=function(n,e){if(n===e)return 0;if(n===Le||e===Ce)return-1;if(e===Le||n===Ce)return 1;{const t=ni(n),s=ni(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Gl=function(n,e){return n===e?0:n<e?-1:1},We=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+x(e))},ss=function(n){if(typeof n!="object"||n===null)return x(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=x(e[s]),t+=":",t+=ss(n[e[s]]);return t+="}",t},wr=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ir=function(n){m(!Sr(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Yl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ql=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Kl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Jl=new RegExp("^-?(0*)\\d{1,10}$"),Xl=-2147483648,Zl=2147483647,ni=function(n){if(Jl.test(n)){const e=Number(n);if(e>=Xl&&e<=Zl)return e}return null},He=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw H("Exception was thrown by user callback.",t),e},Math.floor(0))}},ec=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ye=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){H(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(j("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',H(e)}}class Me{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Me.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="5",Tr="v",Or="s",Ar="r",Rr="f",Pr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nr="ls",Dr="p",Hn="ac",xr="websocket",Mr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ve.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ve.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function sc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function kr(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===xr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Mr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sc(n)&&(t.ns=n.namespace);const i=[];return q(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.counters_={}}incrementCounter(e,t=1){ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ca(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={},cn={};function rs(n){const e=n.toString();return ln[e]||(ln[e]=new ic),ln[e]}function rc(n,e){const t=n.toString();return cn[t]||(cn[t]=e()),cn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&He(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="start",ac="close",lc="pLPCommand",cc="pRTLPCB",Lr="id",Ur="pw",jr="ser",hc="cb",uc="seg",dc="ts",fc="d",pc="dframe",Br=1870,Vr=30,_c=Br-Vr,mc=25e3,gc=3e4;class Ne{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ft(e),this.stats_=rs(t),this.urlFn=l=>(this.appCheckToken&&(l[Hn]=this.appCheckToken),kr(t,Mr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new oc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gc)),zl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new os((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===si)this.id=a,this.password=l;else if(o===ac)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[si]="t",s[jr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[hc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Tr]=is,this.transportSessionId&&(s[Or]=this.transportSessionId),this.lastSessionId&&(s[Nr]=this.lastSessionId),this.applicationId&&(s[Dr]=this.applicationId),this.appCheckToken&&(s[Hn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pr.test(location.hostname)&&(s[Ar]=Rr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ne.forceAllow_=!0}static forceDisallow(){Ne.forceDisallow_=!0}static isAvailable(){return Ne.forceAllow_?!0:!Ne.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Yl()&&!Ql()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=or(t),i=wr(s,_c);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[pc]="t",s[Lr]=e,s[Ur]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=x(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class os{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ql(),window[lc+this.uniqueCallbackIdentifier]=e,window[cc+this.uniqueCallbackIdentifier]=t,this.myIFrame=os.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){j("frame writing exception"),a.stack&&j(a.stack),j(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||j("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lr]=this.myID,e[Ur]=this.myPW,e[jr]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vr+s.length<=Br;){const o=this.pendingSegs.shift();s=s+"&"+uc+i+"="+o.seg+"&"+dc+i+"="+o.ts+"&"+fc+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(mc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{j("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=16384,yc=45e3;let Ot=null;typeof MozWebSocket<"u"?Ot=MozWebSocket:typeof WebSocket<"u"&&(Ot=WebSocket);class Y{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ft(this.connId),this.stats_=rs(t),this.connURL=Y.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Tr]=is,typeof location<"u"&&location.hostname&&Pr.test(location.hostname)&&(o[Ar]=Rr),t&&(o[Or]=t),s&&(o[Nr]=s),i&&(o[Hn]=i),r&&(o[Dr]=r),kr(e,xr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ve.set("previous_websocket_failure",!0);try{let s;ur(),this.mySock=new Ot(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Y.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ot!==null&&!Y.forceDisallow_}static previouslyFailed(){return ve.isInMemoryStorage||ve.get("previous_websocket_failure")===!0}markConnectionHealthy(){ve.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Xe(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=wr(t,vc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Y.responsesRequiredToBeHealthy=2;Y.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ne,Y]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Y&&Y.isAvailable();let s=t&&!Y.previouslyFailed();if(e.webSocketOnly&&(t||H("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Y];else{const i=this.transports_=[];for(const r of tt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);tt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=6e4,bc=5e3,Cc=10*1024,Sc=100*1024,hn="t",ii="d",wc="s",ri="r",Ic="e",oi="o",ai="a",li="n",ci="p",Tc="h";class Oc{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ft("c:"+this.id+":"),this.transportManager_=new tt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ye(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Sc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hn in e){const t=e[hn];t===ai?this.upgradeIfSecondaryHealthy_():t===ri?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===oi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=We("t",e),s=We("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ci,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ai,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:li,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=We("t",e),s=We("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=We(hn,e);if(ii in e){const s=e[ii];if(t===Tc){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===li){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===wc?this.onConnectionShutdown_(s):t===ri?this.onReset_(s):t===Ic?Vn("Server Error: "+s):t===oi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),is!==s&&H("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ye(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ec))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ye(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ci,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ve.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends qr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new At}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=32,ui=768;class T{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function w(){return new T("")}function S(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ue(n){return n.pieces_.length-n.pieceNum_}function A(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new T(n.pieces_,e)}function Wr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Ac(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function $r(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function zr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new T(e,0)}function M(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof T)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new T(t,0)}function C(n){return n.pieceNum_>=n.pieces_.length}function B(n,e){const t=S(n),s=S(e);if(t===null)return e;if(t===s)return B(A(n),A(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Gr(n,e){if(ue(n)!==ue(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Q(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ue(n)>ue(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Rc{constructor(e,t){this.errorPrefix_=t,this.parts_=$r(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bt(this.parts_[s]);Yr(this)}}function Pc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Bt(e),Yr(n)}function Nc(n){const e=n.parts_.pop();n.byteLength_-=Bt(e),n.parts_.length>0&&(n.byteLength_-=1)}function Yr(n){if(n.byteLength_>ui)throw new Error(n.errorPrefix_+"has a key path longer than "+ui+" bytes ("+n.byteLength_+").");if(n.parts_.length>hi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hi+") or object contains a cycle "+ge(n))}function ge(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends qr{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new as}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=1e3,Dc=60*5*1e3,di=30*1e3,xc=1.3,Mc=3e4,Fc="server_kill",fi=3;class ne extends Hr{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ne.nextPersistentConnectionId_++,this.log_=ft("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$e,this.maxReconnectDelay_=Dc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ur())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");as.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&At.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(x(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new jt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ne.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ie(e,"w")){const s=ke(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();H(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ta(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=di)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ia(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+x(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Vn("Unrecognized action received from server: "+x(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Mc&&(this.reconnectDelay_=$e),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ne.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?j("getToken() completed but was canceled"):(j("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Oc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{H(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Fc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&H(h),l())}}}interrupt(e){j("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){j("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ws(this.interruptReasons_)&&(this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>ss(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new T(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){j("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fi&&(this.reconnectDelay_=di,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){j("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Er.replace(/\./g,"-")]=1,hr()?e["framework.cordova"]=1:ya()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=At.getInstance().currentlyOnline();return Ws(this.interruptReasons_)&&e}}ne.nextPersistentConnectionId_=0;ne.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new b(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new b(Le,e),i=new b(Le,t);return this.compare(s,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yt;class Qr extends Vt{static get __EMPTY_NODE(){return yt}static set __EMPTY_NODE(e){yt=e}compare(e,t){return Ve(e.name,t.name)}isDefinedOn(e){throw Be("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return b.MIN}maxPost(){return new b(Ce,yt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,yt)}toString(){return".key"}}const Fe=new Qr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class k{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??k.RED,this.left=i??V.EMPTY_NODE,this.right=r??V.EMPTY_NODE}copy(e,t,s,i,r){return new k(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return V.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return V.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,k.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,k.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}k.RED=!0;k.BLACK=!1;class kc{copy(e,t,s,i,r){return this}insert(e,t,s){return new k(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class V{constructor(e,t=V.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new V(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,k.BLACK,null,null))}remove(e){return new V(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,k.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Et(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Et(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Et(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Et(this.root_,null,this.comparator_,!0,e)}}V.EMPTY_NODE=new kc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n,e){return Ve(n.name,e.name)}function ls(n,e){return Ve(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;function Uc(n){qn=n}const Kr=function(n){return typeof n=="number"?"number:"+Ir(n):"string:"+n},Jr=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ie(e,".sv"),"Priority must be a string or number.")}else m(n===qn||n.isEmpty(),"priority of unexpected type.");m(n===qn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;class F{constructor(e,t=F.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jr(this.priorityNode_)}static set __childrenNodeConstructor(e){pi=e}static get __childrenNodeConstructor(){return pi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new F(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return C(e)?this:S(e)===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:F.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=S(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||ue(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,F.__childrenNodeConstructor.EMPTY_NODE.updateChild(A(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Kr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ir(this.value_):e+=this.value_,this.lazyHash_=Cr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===F.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof F.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=F.VALUE_TYPE_ORDER.indexOf(t),r=F.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}F.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr,Zr;function jc(n){Xr=n}function Bc(n){Zr=n}class Vc extends Vt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ve(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Ce,new F("[PRIORITY-POST]",Zr))}makePost(e,t){const s=Xr(e);return new b(t,new F("[PRIORITY-POST]",s))}toString(){return".priority"}}const D=new Vc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=Math.log(2);class qc{constructor(e){const t=r=>parseInt(Math.log(r)/Hc,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rt=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new k(d,h.node,k.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),_=i(f+1,c);return h=n[f],d=t?t(h):h,new k(d,h.node,k.BLACK,p,_)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,_){const g=h-p,E=h;h-=p;const P=i(g+1,E),I=n[g],v=t?t(I):I;f(new k(v,I.node,_,null,P))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const _=l.nextBitIsOne(),g=Math.pow(2,l.count-(p+1));_?d(g,k.BLACK):(d(g,k.BLACK),d(g,k.RED))}return u},o=new qc(n.length),a=r(o);return new V(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const Ae={};class te{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(Ae&&D,"ChildrenNode.ts has not been loaded"),un=un||new te({".priority":Ae},{".priority":D}),un}get(e){const t=ke(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof V?t:null}hasIndex(e){return ie(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Fe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(b.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Rt(s,e.getCompare()):a=Ae;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new te(u,c)}addToIndexes(e,t){const s=wt(this.indexes_,(i,r)=>{const o=ke(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Ae)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(b.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Rt(a,o.getCompare())}else return Ae;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new b(e.name,a))),l.insert(e,e.node)}});return new te(s,this.indexSet_)}removeFromIndexes(e,t){const s=wt(this.indexes_,i=>{if(i===Ae)return i;{const r=t.get(e.name);return r?i.remove(new b(e.name,r)):i}});return new te(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ze;class y{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Jr(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ze||(ze=new y(new V(ls),null,te.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ze}updatePriority(e){return this.children_.isEmpty()?this:new y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ze:t}}getChild(e){const t=S(e);return t===null?this:this.getImmediateChild(t).getChild(A(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new b(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ze:this.priorityNode_;return new y(i,o,r)}}updateChild(e,t){const s=S(e);if(s===null)return t;{m(S(e)!==".priority"||ue(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(A(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(D,(o,a)=>{t[o]=a.val(e),s++,r&&y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Kr(this.getPriority().val())+":"),this.forEachChild(D,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Cr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new b(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new b(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new b(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pt?-1:0}withIndex(e){if(e===Fe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new y(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Fe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(D),i=t.getIterator(D);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fe?null:this.indexMap_.get(e.toString())}}y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Wc extends y{constructor(){super(new V(ls),y.EMPTY_NODE,te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return y.EMPTY_NODE}isEmpty(){return!1}}const pt=new Wc;Object.defineProperties(b,{MIN:{value:new b(Le,y.EMPTY_NODE)},MAX:{value:new b(Ce,pt)}});Qr.__EMPTY_NODE=y.EMPTY_NODE;F.__childrenNodeConstructor=y;Uc(pt);Bc(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=!0;function L(n,e=null){if(n===null)return y.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new F(t,L(e))}if(!(n instanceof Array)&&$c){const t=[];let s=!1;if(q(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=L(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new b(o,l)))}}),t.length===0)return y.EMPTY_NODE;const r=Rt(t,Lc,o=>o.name,ls);if(s){const o=Rt(t,D.getCompare());return new y(r,L(e),new te({".priority":o},{".priority":D}))}else return new y(r,L(e),te.Default)}else{let t=y.EMPTY_NODE;return q(n,(s,i)=>{if(ie(n,s)&&s.substring(0,1)!=="."){const r=L(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(L(e))}}jc(L);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Vt{constructor(e){super(),this.indexPath_=e,m(!C(e)&&S(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ve(e.name,t.name):r}makePost(e,t){const s=L(e),i=y.EMPTY_NODE.updateChild(this.indexPath_,s);return new b(t,i)}maxPost(){const e=y.EMPTY_NODE.updateChild(this.indexPath_,pt);return new b(Ce,e)}toString(){return $r(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends Vt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ve(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,t){const s=L(e);return new b(t,s)}toString(){return".value"}}const Yc=new Gc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n){return{type:"value",snapshotNode:n}}function Ue(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function nt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function st(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Qc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(nt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ue(t,s)):o.trackChildChange(st(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(D,(i,r)=>{t.hasChild(i)||s.trackChildChange(nt(i,r))}),t.isLeafNode()||t.forEachChild(D,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(st(i,r,o))}else s.trackChildChange(Ue(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?y.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.indexedFilter_=new cs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=it.getStartPost_(e),this.endPost_=it.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new b(t,s))||(s=y.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=y.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(y.EMPTY_NODE);const r=this;return t.forEachChild(D,(o,a)=>{r.matches(new b(o,a))||(i=i.updateImmediateChild(o,y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new it(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new b(t,s))||(s=y.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(y.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new b(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(st(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(nt(t,h));const _=a.updateImmediateChild(t,y.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ue(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(nt(c.name,c.node)),r.trackChildChange(Ue(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=D}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Le}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ce}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===D}copy(){const e=new hs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jc(n){return n.loadsAllData()?new cs(n.getIndex()):n.hasLimit()?new Kc(n):new it(n)}function _i(n){const e={};if(n.isDefault())return e;let t;if(n.index_===D?t="$priority":n.index_===Yc?t="$value":n.index_===Fe?t="$key":(m(n.index_ instanceof zc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=x(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=x(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+x(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=x(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+x(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function mi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==D&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Hr{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ft("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Pt.getListenId_(e,s),a={};this.listens_[o]=a;const l=_i(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ke(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Pt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=_i(e._queryParams),s=e._path.toString(),i=new jt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Oa(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xe(a.responseText)}catch{H("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&H("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.rootNode_=y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return{value:null,children:new Map}}function to(n,e,t){if(C(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=S(e);n.children.has(s)||n.children.set(s,Nt());const i=n.children.get(s);e=A(e),to(i,e,t)}}function Wn(n,e,t){n.value!==null?t(e,n.value):Zc(n,(s,i)=>{const r=new T(e.toString()+"/"+s);Wn(i,r,t)})}function Zc(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&q(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=10*1e3,th=30*1e3,nh=5*60*1e3;class sh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new eh(e);const s=gi+(th-gi)*Math.random();Ye(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;q(e,(i,r)=>{r>0&&ie(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ye(this.reportStats_.bind(this),Math.floor(Math.random()*2*nh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(K||(K={}));function no(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function us(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ds(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=K.ACK_USER_WRITE,this.source=no()}operationForChild(e){if(C(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new T(e));return new Dt(w(),t,this.revert)}}else return m(S(this.path)===e,"operationForChild called for unrelated child."),new Dt(A(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.source=e,this.path=t,this.type=K.LISTEN_COMPLETE}operationForChild(e){return C(this.path)?new rt(this.source,w()):new rt(this.source,A(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=K.OVERWRITE}operationForChild(e){return C(this.path)?new Se(this.source,w(),this.snap.getImmediateChild(e)):new Se(this.source,A(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=K.MERGE}operationForChild(e){if(C(this.path)){const t=this.children.subtree(new T(e));return t.isEmpty()?null:t.value?new Se(this.source,w(),t.value):new ot(this.source,w(),t)}else return m(S(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ot(this.source,A(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(C(e))return this.isFullyInitialized()&&!this.filtered_;const t=S(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Qc(o.childName,o.snapshotNode))}),Ge(n,i,"child_removed",e,s,t),Ge(n,i,"child_added",e,s,t),Ge(n,i,"child_moved",r,s,t),Ge(n,i,"child_changed",e,s,t),Ge(n,i,"value",e,s,t),i}function Ge(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>ah(n,a,l)),o.forEach(a=>{const l=oh(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function oh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ah(n,e,t){if(e.childName==null||t.childName==null)throw Be("Should only compare child_ events.");const s=new b(e.childName,e.snapshotNode),i=new b(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(n,e){return{eventCache:n,serverCache:e}}function Qe(n,e,t,s){return Ht(new de(e,t,s),n.serverCache)}function so(n,e,t,s){return Ht(n.eventCache,new de(e,t,s))}function xt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function we(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const lh=()=>(dn||(dn=new V(Gl)),dn);class R{constructor(e,t=lh()){this.value=e,this.children=t}static fromObject(e){let t=new R(null);return q(e,(s,i)=>{t=t.set(new T(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:w(),value:this.value};if(C(e))return null;{const s=S(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(A(e),t);return r!=null?{path:M(new T(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(C(e))return this;{const t=S(e),s=this.children.get(t);return s!==null?s.subtree(A(e)):new R(null)}}set(e,t){if(C(e))return new R(t,this.children);{const s=S(e),r=(this.children.get(s)||new R(null)).set(A(e),t),o=this.children.insert(s,r);return new R(this.value,o)}}remove(e){if(C(e))return this.children.isEmpty()?new R(null):new R(null,this.children);{const t=S(e),s=this.children.get(t);if(s){const i=s.remove(A(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new R(null):new R(this.value,r)}else return this}}get(e){if(C(e))return this.value;{const t=S(e),s=this.children.get(t);return s?s.get(A(e)):null}}setTree(e,t){if(C(e))return t;{const s=S(e),r=(this.children.get(s)||new R(null)).setTree(A(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new R(this.value,o)}}fold(e){return this.fold_(w(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(M(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,w(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(C(e))return null;{const r=S(e),o=this.children.get(r);return o?o.findOnPath_(A(e),M(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,w(),t)}foreachOnPath_(e,t,s){if(C(e))return this;{this.value&&s(t,this.value);const i=S(e),r=this.children.get(i);return r?r.foreachOnPath_(A(e),M(t,i),s):new R(null)}}foreach(e){this.foreach_(w(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(M(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.writeTree_=e}static empty(){return new J(new R(null))}}function Ke(n,e,t){if(C(e))return new J(new R(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=B(i,e);return r=r.updateChild(o,t),new J(n.writeTree_.set(i,r))}else{const i=new R(t),r=n.writeTree_.setTree(e,i);return new J(r)}}}function vi(n,e,t){let s=n;return q(t,(i,r)=>{s=Ke(s,M(e,i),r)}),s}function yi(n,e){if(C(e))return J.empty();{const t=n.writeTree_.setTree(e,new R(null));return new J(t)}}function $n(n,e){return Te(n,e)!=null}function Te(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(B(t.path,e)):null}function Ei(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(D,(s,i)=>{e.push(new b(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new b(s,i.value))}),e}function ce(n,e){if(C(e))return n;{const t=Te(n,e);return t!=null?new J(new R(t)):new J(n.writeTree_.subtree(e))}}function zn(n){return n.writeTree_.isEmpty()}function je(n,e){return io(w(),n.writeTree_,e)}function io(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=io(M(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(M(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,e){return lo(e,n)}function ch(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Ke(n.visibleWrites,e,t)),n.lastWriteId=s}function hh(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function uh(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&dh(a,s.path)?i=!1:Q(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return fh(n),!0;if(s.snap)n.visibleWrites=yi(n.visibleWrites,s.path);else{const a=s.children;q(a,l=>{n.visibleWrites=yi(n.visibleWrites,M(s.path,l))})}return!0}else return!1}function dh(n,e){if(n.snap)return Q(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Q(M(n.path,t),e))return!0;return!1}function fh(n){n.visibleWrites=ro(n.allWrites,ph,w()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ph(n){return n.visible}function ro(n,e,t){let s=J.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Q(t,o)?(a=B(t,o),s=Ke(s,a,r.snap)):Q(o,t)&&(a=B(o,t),s=Ke(s,w(),r.snap.getChild(a)));else if(r.children){if(Q(t,o))a=B(t,o),s=vi(s,a,r.children);else if(Q(o,t))if(a=B(o,t),C(a))s=vi(s,w(),r.children);else{const l=ke(r.children,S(a));if(l){const c=l.getChild(A(a));s=Ke(s,w(),c)}}}else throw Be("WriteRecord should have .snap or .children")}}return s}function oo(n,e,t,s,i){if(!s&&!i){const r=Te(n.visibleWrites,e);if(r!=null)return r;{const o=ce(n.visibleWrites,e);if(zn(o))return t;if(t==null&&!$n(o,w()))return null;{const a=t||y.EMPTY_NODE;return je(o,a)}}}else{const r=ce(n.visibleWrites,e);if(!i&&zn(r))return t;if(!i&&t==null&&!$n(r,w()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Q(c.path,e)||Q(e,c.path))},a=ro(n.allWrites,o,e),l=t||y.EMPTY_NODE;return je(a,l)}}}function _h(n,e,t){let s=y.EMPTY_NODE;const i=Te(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(D,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ce(n.visibleWrites,e);return t.forEachChild(D,(o,a)=>{const l=je(ce(r,new T(o)),a);s=s.updateImmediateChild(o,l)}),Ei(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ce(n.visibleWrites,e);return Ei(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function mh(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=M(e,t);if($n(n.visibleWrites,r))return null;{const o=ce(n.visibleWrites,r);return zn(o)?i.getChild(t):je(o,i.getChild(t))}}function gh(n,e,t,s){const i=M(e,t),r=Te(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ce(n.visibleWrites,i);return je(o,s.getNode().getImmediateChild(t))}else return null}function vh(n,e){return Te(n.visibleWrites,e)}function yh(n,e,t,s,i,r,o){let a;const l=ce(n.visibleWrites,e),c=Te(l,w());if(c!=null)a=c;else if(t!=null)a=je(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Eh(){return{visibleWrites:J.empty(),allWrites:[],lastWriteId:-1}}function Mt(n,e,t,s){return oo(n.writeTree,n.treePath,e,t,s)}function fs(n,e){return _h(n.writeTree,n.treePath,e)}function bi(n,e,t,s){return mh(n.writeTree,n.treePath,e,t,s)}function Ft(n,e){return vh(n.writeTree,M(n.treePath,e))}function bh(n,e,t,s,i,r){return yh(n.writeTree,n.treePath,e,t,s,i,r)}function ps(n,e,t){return gh(n.writeTree,n.treePath,e,t)}function ao(n,e){return lo(M(n.treePath,e),n.writeTree)}function lo(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,st(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,nt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Ue(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,st(s,e.snapshotNode,i.oldSnap));else throw Be("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const co=new Sh;class _s{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new de(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ps(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:we(this.viewCache_),r=bh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(n){return{filter:n}}function Ih(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Th(n,e,t,s,i){const r=new Ch;let o,a;if(t.type===K.OVERWRITE){const c=t;c.source.fromUser?o=Gn(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!C(c.path),o=kt(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===K.MERGE){const c=t;c.source.fromUser?o=Ah(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Yn(n,e,c.path,c.children,s,i,a,r))}else if(t.type===K.ACK_USER_WRITE){const c=t;c.revert?o=Nh(n,e,c.path,s,i,r):o=Rh(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===K.LISTEN_COMPLETE)o=Ph(n,e,t.path,s,r);else throw Be("Unknown operation type: "+t.type);const l=r.getChanges();return Oh(e,o,l),{viewCache:o,changes:l}}function Oh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=xt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(eo(xt(e)))}}function ho(n,e,t,s,i,r){const o=e.eventCache;if(Ft(s,t)!=null)return e;{let a,l;if(C(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=we(e),u=c instanceof y?c:y.EMPTY_NODE,h=fs(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Mt(s,we(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=S(t);if(c===".priority"){m(ue(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=bi(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=A(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=bi(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ps(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Qe(e,a,o.isFullyInitialized()||C(t),n.filter.filtersNodes())}}function kt(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(C(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=S(t);if(!l.isCompleteForPath(t)&&ue(t)>1)return e;const p=A(t),g=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),f,g,p,co,null)}const h=so(e,c,l.isFullyInitialized()||C(t),u.filtersNodes()),d=new _s(i,h,r);return ho(n,h,t,i,d,a)}function Gn(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new _s(i,e,r);if(C(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Qe(e,c,!0,n.filter.filtersNodes());else{const h=S(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Qe(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=A(t),f=a.getNode().getImmediateChild(h);let p;if(C(d))p=s;else{const _=u.getCompleteChild(h);_!=null?Wr(d)===".priority"&&_.getChild(zr(d)).isEmpty()?p=_:p=_.updateChild(d,s):p=y.EMPTY_NODE}if(f.equals(p))l=e;else{const _=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=Qe(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ci(n,e){return n.eventCache.isCompleteForChild(e)}function Ah(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=M(t,l);Ci(e,S(u))&&(a=Gn(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=M(t,l);Ci(e,S(u))||(a=Gn(n,a,u,c,i,r,o))}),a}function Si(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Yn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;C(t)?c=s:c=new R(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Si(n,f,d);l=kt(n,l,new T(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),_=Si(n,p,d);l=kt(n,l,new T(h),_,i,r,o,a)}}),l}function Rh(n,e,t,s,i,r,o){if(Ft(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(C(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return kt(n,e,t,l.getNode().getChild(t),i,r,a,o);if(C(t)){let c=new R(null);return l.getNode().forEachChild(Fe,(u,h)=>{c=c.set(new T(u),h)}),Yn(n,e,t,c,i,r,a,o)}else return e}else{let c=new R(null);return s.foreach((u,h)=>{const d=M(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Yn(n,e,t,c,i,r,a,o)}}function Ph(n,e,t,s,i){const r=e.serverCache,o=so(e,r.getNode(),r.isFullyInitialized()||C(t),r.isFiltered());return ho(n,o,t,s,co,i)}function Nh(n,e,t,s,i,r){let o;if(Ft(s,t)!=null)return e;{const a=new _s(s,e,i),l=e.eventCache.getNode();let c;if(C(t)||S(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Mt(s,we(e));else{const h=e.serverCache.getNode();m(h instanceof y,"serverChildren would be complete if leaf node"),u=fs(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=S(t);let h=ps(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,A(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,y.EMPTY_NODE,A(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mt(s,we(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ft(s,w())!=null,Qe(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new cs(s.getIndex()),r=Jc(s);this.processor_=wh(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(y.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(y.EMPTY_NODE,a.getNode(),null),u=new de(l,o.isFullyInitialized(),i.filtersNodes()),h=new de(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ht(h,u),this.eventGenerator_=new ih(this.query_)}get query(){return this.query_}}function xh(n){return n.viewCache_.serverCache.getNode()}function Mh(n){return xt(n.viewCache_)}function Fh(n,e){const t=we(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!C(e)&&!t.getImmediateChild(S(e)).isEmpty())?t.getChild(e):null}function wi(n){return n.eventRegistrations_.length===0}function kh(n,e){n.eventRegistrations_.push(e)}function Ii(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ti(n,e,t,s){e.type===K.MERGE&&e.source.queryId!==null&&(m(we(n.viewCache_),"We should always have a full cache before handling merges"),m(xt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Th(n.processor_,i,e,t,s);return Ih(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,uo(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Lh(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(D,(r,o)=>{s.push(Ue(r,o))}),t.isFullyInitialized()&&s.push(eo(t.getNode())),uo(n,s,t.getNode(),e)}function uo(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return rh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt;class fo{constructor(){this.views=new Map}}function Uh(n){m(!Lt,"__referenceConstructor has already been defined"),Lt=n}function jh(){return m(Lt,"Reference.ts has not been loaded"),Lt}function Bh(n){return n.views.size===0}function ms(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Ti(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ti(o,e,t,s));return r}}function po(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Mt(t,i?s:null),l=!1;a?l=!0:s instanceof y?(a=fs(t,s),l=!1):(a=y.EMPTY_NODE,l=!1);const c=Ht(new de(a,l,!1),new de(s,i,!1));return new Dh(e,c)}return o}function Vh(n,e,t,s,i,r){const o=po(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),kh(o,t),Lh(o,t)}function Hh(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=fe(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Ii(c,t,s)),wi(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Ii(l,t,s)),wi(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!fe(n)&&r.push(new(jh())(e._repo,e._path)),{removed:r,events:o}}function _o(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function he(n,e){let t=null;for(const s of n.views.values())t=t||Fh(s,e);return t}function mo(n,e){if(e._queryParams.loadsAllData())return Wt(n);{const s=e._queryIdentifier;return n.views.get(s)}}function go(n,e){return mo(n,e)!=null}function fe(n){return Wt(n)!=null}function Wt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;function qh(n){m(!Ut,"__referenceConstructor has already been defined"),Ut=n}function Wh(){return m(Ut,"Reference.ts has not been loaded"),Ut}let $h=1;class Oi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new R(null),this.pendingWriteTree_=Eh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vo(n,e,t,s,i){return ch(n.pendingWriteTree_,e,t,s,i),i?mt(n,new Se(no(),e,t)):[]}function ye(n,e,t=!1){const s=hh(n.pendingWriteTree_,e);if(uh(n.pendingWriteTree_,e)){let r=new R(null);return s.snap!=null?r=r.set(w(),!0):q(s.children,o=>{r=r.set(new T(o),!0)}),mt(n,new Dt(s.path,r,t))}else return[]}function _t(n,e,t){return mt(n,new Se(us(),e,t))}function zh(n,e,t){const s=R.fromObject(t);return mt(n,new ot(us(),e,s))}function Gh(n,e){return mt(n,new rt(us(),e))}function Yh(n,e,t){const s=vs(n,t);if(s){const i=ys(s),r=i.path,o=i.queryId,a=B(r,e),l=new rt(ds(o),a);return Es(n,r,l)}else return[]}function yo(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||go(o,e))){const l=Hh(o,e,t,s);Bh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>fe(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Xh(d);for(let p=0;p<f.length;++p){const _=f[p],g=_.query,E=So(n,_);n.listenProvider_.startListening(Je(g),at(n,g),E.hashFn,E.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Je(e),null):c.forEach(d=>{const f=n.queryToTagMap.get($t(d));n.listenProvider_.stopListening(Je(d),f)}))}Zh(n,c)}return a}function Eo(n,e,t,s){const i=vs(n,s);if(i!=null){const r=ys(i),o=r.path,a=r.queryId,l=B(o,e),c=new Se(ds(a),l,t);return Es(n,o,c)}else return[]}function Qh(n,e,t,s){const i=vs(n,s);if(i){const r=ys(i),o=r.path,a=r.queryId,l=B(o,e),c=R.fromObject(t),u=new ot(ds(a),l,c);return Es(n,o,u)}else return[]}function Kh(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=B(d,i);r=r||he(f,p),o=o||fe(f)});let a=n.syncPointTree_.get(i);a?(o=o||fe(a),r=r||he(a,w())):(a=new fo,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=y.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const _=he(p,w());_&&(r=r.updateImmediateChild(f,_))}));const c=go(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=$t(e);m(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=eu();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=qt(n.pendingWriteTree_,i);let h=Vh(a,e,t,u,r,l);if(!c&&!o&&!s){const d=mo(a,e);h=h.concat(tu(n,e,d))}return h}function gs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=B(o,e),c=he(a,l);if(c)return c});return oo(i,e,r,t,!0)}function Jh(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=B(c,t);s=s||he(u,h)});let i=n.syncPointTree_.get(t);i?s=s||he(i,w()):(i=new fo,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new de(s,!0,!1):null,a=qt(n.pendingWriteTree_,e._path),l=po(i,e,a,r?o.getNode():y.EMPTY_NODE,r);return Mh(l)}function mt(n,e){return bo(e,n.syncPointTree_,null,qt(n.pendingWriteTree_,w()))}function bo(n,e,t,s){if(C(n.path))return Co(n,e,t,s);{const i=e.get(w());t==null&&i!=null&&(t=he(i,w()));let r=[];const o=S(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=ao(s,o);r=r.concat(bo(a,l,c,u))}return i&&(r=r.concat(ms(i,n,s,t))),r}}function Co(n,e,t,s){const i=e.get(w());t==null&&i!=null&&(t=he(i,w()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=ao(s,o),u=n.operationForChild(o);u&&(r=r.concat(Co(u,a,l,c)))}),i&&(r=r.concat(ms(i,n,s,t))),r}function So(n,e){const t=e.query,s=at(n,t);return{hashFn:()=>(xh(e)||y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Yh(n,t._path,s):Gh(n,t._path);{const r=Kl(i,t);return yo(n,t,null,r)}}}}function at(n,e){const t=$t(e);return n.queryToTagMap.get(t)}function $t(n){return n._path.toString()+"$"+n._queryIdentifier}function vs(n,e){return n.tagToQueryMap.get(e)}function ys(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new T(n.substr(0,e))}}function Es(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=qt(n.pendingWriteTree_,e);return ms(s,t,i,null)}function Xh(n){return n.fold((e,t,s)=>{if(t&&fe(t))return[Wt(t)];{let i=[];return t&&(i=_o(t)),q(s,(r,o)=>{i=i.concat(o)}),i}})}function Je(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Wh())(n._repo,n._path):n}function Zh(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=$t(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function eu(){return $h++}function tu(n,e,t){const s=e._path,i=at(n,e),r=So(n,t),o=n.listenProvider_.startListening(Je(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!fe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!C(c)&&u&&fe(u))return[Wt(u).query];{let d=[];return u&&(d=d.concat(_o(u).map(f=>f.query))),q(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Je(u),at(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new bs(t)}node(){return this.node_}}class Cs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=M(this.path_,e);return new Cs(this.syncTree_,t)}node(){return gs(this.syncTree_,this.path_)}}const nu=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ai=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return su(n[".sv"],e,t);if(typeof n[".sv"]=="object")return iu(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},su=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},iu=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ru=function(n,e,t,s){return Ss(e,new Cs(t,n),s)},wo=function(n,e,t){return Ss(n,new bs(e),t)};function Ss(n,e,t){const s=n.getPriority().val(),i=Ai(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ai(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new F(a,L(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new F(i))),o.forEachChild(D,(a,l)=>{const c=Ss(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Is(n,e){let t=e instanceof T?e:new T(e),s=n,i=S(t);for(;i!==null;){const r=ke(s.node.children,i)||{children:{},childCount:0};s=new ws(i,s,r),t=A(t),i=S(t)}return s}function qe(n){return n.node.value}function Io(n,e){n.node.value=e,Qn(n)}function To(n){return n.node.childCount>0}function ou(n){return qe(n)===void 0&&!To(n)}function zt(n,e){q(n.node.children,(t,s)=>{e(new ws(t,n,s))})}function Oo(n,e,t,s){t&&!s&&e(n),zt(n,i=>{Oo(i,e,!0,s)}),t&&s&&e(n)}function au(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function gt(n){return new T(n.parent===null?n.name:gt(n.parent)+"/"+n.name)}function Qn(n){n.parent!==null&&lu(n.parent,n.name,n)}function lu(n,e,t){const s=ou(t),i=ie(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Qn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Qn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=/[\[\].#$\/\u0000-\u001F\u007F]/,hu=/[\[\].#$\u0000-\u001F\u007F]/,fn=10*1024*1024,Ao=function(n){return typeof n=="string"&&n.length!==0&&!cu.test(n)},Ro=function(n){return typeof n=="string"&&n.length!==0&&!hu.test(n)},uu=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ro(n)},Po=function(n,e,t,s){s&&e===void 0||Ts(ts(n,"value"),e,t)},Ts=function(n,e,t){const s=t instanceof T?new Rc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ge(s));if(typeof e=="function")throw new Error(n+"contains a function "+ge(s)+" with contents = "+e.toString());if(Sr(e))throw new Error(n+"contains "+e.toString()+" "+ge(s));if(typeof e=="string"&&e.length>fn/3&&Bt(e)>fn)throw new Error(n+"contains a string greater than "+fn+" utf8 bytes "+ge(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(q(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ao(o)))throw new Error(n+" contains an invalid key ("+o+") "+ge(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pc(s,o),Ts(n,a,s),Nc(s)}),i&&r)throw new Error(n+' contains ".value" child '+ge(s)+" in addition to actual children.")}},No=function(n,e,t,s){if(!(s&&t===void 0)&&!Ro(t))throw new Error(ts(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},du=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),No(n,e,t,s)},Os=function(n,e){if(S(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},fu=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ao(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!uu(t))throw new Error(ts(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Do(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Gr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Z(n,e,t){Do(n,t),_u(n,s=>Q(s,e)||Q(e,s))}function _u(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(mu(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function mu(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ee&&j("event: "+t.toString()),He(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="repo_interrupt",vu=25;class yu{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nt(),this.transactionQueueTree_=new ws,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Eu(n,e,t){if(n.stats_=rs(n.repoInfo_),n.forceRestClient_||ec())n.server_=new Pt(n.repoInfo_,(s,i,r,o)=>{Ri(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Pi(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{x(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ne(n.repoInfo_,e,(s,i,r,o)=>{Ri(n,s,i,r,o)},s=>{Pi(n,s)},s=>{bu(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=rc(n.repoInfo_,()=>new sh(n.stats_,n.server_)),n.infoData_=new Xc,n.infoSyncTree_=new Oi({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=_t(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rs(n,"connected",!1),n.serverSyncTree_=new Oi({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Z(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function xo(n){const t=n.infoData_.getNode(new T(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function As(n){return nu({timestamp:xo(n)})}function Ri(n,e,t,s,i){n.dataUpdateCount++;const r=new T(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=wt(t,c=>L(c));o=Qh(n.serverSyncTree_,r,l,i)}else{const l=L(t);o=Eo(n.serverSyncTree_,r,l,i)}else if(s){const l=wt(t,c=>L(c));o=zh(n.serverSyncTree_,r,l)}else{const l=L(t);o=_t(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Yt(n,r)),Z(n.eventQueue_,a,o)}function Pi(n,e){Rs(n,"connected",e),e===!1&&wu(n)}function bu(n,e){q(e,(t,s)=>{Rs(n,t,s)})}function Rs(n,e,t){const s=new T("/.info/"+e),i=L(t);n.infoData_.updateSnapshot(s,i);const r=_t(n.infoSyncTree_,s,i);Z(n.eventQueue_,s,r)}function Mo(n){return n.nextWriteId_++}function Cu(n,e,t){const s=Jh(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=L(i).withIndex(e._queryParams.getIndex());Kh(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=_t(n.serverSyncTree_,e._path,r);else{const a=at(n.serverSyncTree_,e);o=Eo(n.serverSyncTree_,e._path,r,a)}return Z(n.eventQueue_,e._path,o),yo(n.serverSyncTree_,e,t,null,!0),r},i=>(Gt(n,"get for query "+x(e)+" failed: "+i),Promise.reject(new Error(i))))}function Su(n,e,t,s,i){Gt(n,"set",{path:e.toString(),value:t,priority:s});const r=As(n),o=L(t,s),a=gs(n.serverSyncTree_,e),l=wo(o,a,r),c=Mo(n),u=vo(n.serverSyncTree_,e,l,c,!0);Do(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||H("set at "+e+" failed: "+d);const _=ye(n.serverSyncTree_,c,!p);Z(n.eventQueue_,e,_),Tu(n,i,d,f)});const h=jo(n,e);Yt(n,h),Z(n.eventQueue_,h,[])}function wu(n){Gt(n,"onDisconnectEvents");const e=As(n),t=Nt();Wn(n.onDisconnect_,w(),(i,r)=>{const o=ru(i,r,n.serverSyncTree_,e);to(t,i,o)});let s=[];Wn(t,w(),(i,r)=>{s=s.concat(_t(n.serverSyncTree_,i,r));const o=jo(n,i);Yt(n,o)}),n.onDisconnect_=Nt(),Z(n.eventQueue_,w(),s)}function Iu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(gu)}function Gt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),j(t,...e)}function Tu(n,e,t,s){e&&He(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Fo(n,e,t){return gs(n.serverSyncTree_,e,t)||y.EMPTY_NODE}function Ps(n,e=n.transactionQueueTree_){if(e||Qt(n,e),qe(e)){const t=Lo(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Ou(n,gt(e),t)}else To(e)&&zt(e,t=>{Ps(n,t)})}function Ou(n,e,t){const s=t.map(c=>c.currentWriteId),i=Fo(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=B(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Gt(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(ye(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Qt(n,Is(n.transactionQueueTree_,e)),Ps(n,n.transactionQueueTree_),Z(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)He(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{H("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Yt(n,e)}},o)}function Yt(n,e){const t=ko(n,e),s=gt(t),i=Lo(n,t);return Au(n,i,s),s}function Au(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=B(t,l.path);let u=!1,h;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ye(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=vu)u=!0,h="maxretry",i=i.concat(ye(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Fo(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Ts("transaction failed: Data returned ",f,l.path);let p=L(f);typeof f=="object"&&f!=null&&ie(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=l.currentWriteId,E=As(n),P=wo(p,d,E);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=P,l.currentWriteId=Mo(n),o.splice(o.indexOf(g),1),i=i.concat(vo(n.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(ye(n.serverSyncTree_,g,!0))}else u=!0,h="nodata",i=i.concat(ye(n.serverSyncTree_,l.currentWriteId,!0))}Z(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Qt(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)He(s[a]);Ps(n,n.transactionQueueTree_)}function ko(n,e){let t,s=n.transactionQueueTree_;for(t=S(e);t!==null&&qe(s)===void 0;)s=Is(s,t),e=A(e),t=S(e);return s}function Lo(n,e){const t=[];return Uo(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Uo(n,e,t){const s=qe(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);zt(e,i=>{Uo(n,i,t)})}function Qt(n,e){const t=qe(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Io(e,t.length>0?t:void 0)}zt(e,s=>{Qt(n,s)})}function jo(n,e){const t=gt(ko(n,e)),s=Is(n.transactionQueueTree_,e);return au(s,i=>{pn(n,i)}),pn(n,s),Oo(s,i=>{pn(n,i)}),t}function pn(n,e){const t=qe(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ye(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Io(e,void 0):t.length=r+1,Z(n.eventQueue_,gt(e),i);for(let o=0;o<s.length;o++)He(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Pu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):H(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ni=function(n,e){const t=Nu(n),s=t.namespace;t.domain==="firebase.com"&&se(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&se("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||$l();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Fr(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new T(t.pathString)}},Nu=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Ru(n.substring(u,h)));const d=Pu(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Du=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Di.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Di.charAt(e[i]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+x(this.snapshot.exportVal())}}class Mu{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return C(this._path)?null:Wr(this._path)}get ref(){return new re(this._repo,this._path)}get _queryIdentifier(){const e=mi(this._queryParams),t=ss(e);return t==="{}"?"default":t}get _queryObject(){return mi(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof Ns))return!1;const t=this._repo===e._repo,s=Gr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ac(this._path)}}class re extends Ns{constructor(e,t){super(e,t,new hs,!1)}get parent(){const e=zr(this._path);return e===null?null:new re(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class lt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new T(e),s=ct(this.ref,e);return new lt(this._node.getChild(t),s,D)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new lt(i,ct(this.ref,s),D)))}hasChild(e){const t=new T(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ku(n,e){return n=Ie(n),n._checkNotDeleted("ref"),e!==void 0?ct(n._root,e):n._root}function ct(n,e){return n=Ie(n),S(n._path)===null?du("child","path",e,!1):No("child","path",e,!1),new re(n._repo,M(n._path,e))}function Bo(n,e){n=Ie(n),Os("push",n._path),Po("push",e,n._path,!0);const t=xo(n._repo),s=Du(t),i=ct(n,s),r=ct(n,s);let o;return e!=null?o=Vo(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Lu(n){return Os("remove",n._path),Vo(n,null)}function Vo(n,e){n=Ie(n),Os("set",n._path),Po("set",e,n._path,!1);const t=new jt;return Su(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ho(n){n=Ie(n);const e=new Fu(()=>{}),t=new Ds(e);return Cu(n._repo,n,t).then(s=>new lt(s,new re(n._repo,n._path),n._queryParams.getIndex()))}class Ds{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new xu("value",this,new lt(e.snapshotNode,new re(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Mu(this,e,t):null}matches(e){return e instanceof Ds?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Uh(re);qh(re);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="FIREBASE_DATABASE_EMULATOR_HOST",Kn={};let ju=!1;function Bu(n,e,t,s){n.repoInfo_=new Fr(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Vu(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||se("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),j("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ni(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Uu]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ni(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Me(Me.OWNER):new nc(n.name,n.options,e);fu("Invalid Firebase Database URL",o),C(o.path)||se("Database URL must point to the root of a Firebase Database (not including a child path).");const h=qu(a,n,u,new tc(n.name,t));return new Wu(h,n)}function Hu(n,e){const t=Kn[e];(!t||t[n.key]!==n)&&se(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Iu(n),delete t[n.key]}function qu(n,e,t,s){let i=Kn[e.name];i||(i={},Kn[e.name]=i);let r=i[n.toURLString()];return r&&se("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new yu(n,ju,t,s),i[n.toURLString()]=r,r}class Wu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Eu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new re(this._repo,w())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Hu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&se("Cannot call "+e+" on a deleted database.")}}function $u(n=Al(),e){const t=wl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=ma("database");s&&zu(t,...s)}return t}function zu(n,e,t,s={}){n=Ie(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&se("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&se('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Me(Me.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ga(s.mockUserToken,n.app.options.projectId);r=new Me(o)}Bu(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){Bl(Ol),Tt(new Ze("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Vu(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),De(Zs,ei,n),De(Zs,ei,"esm2017")}ne.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ne.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Gu();var oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xs={},qo={},Ms={exports:{}},Wo=function(e,t){return function(){for(var i=new Array(arguments.length),r=0;r<i.length;r++)i[r]=arguments[r];return e.apply(t,i)}},Yu=Wo,pe=Object.prototype.toString;function Fs(n){return Array.isArray(n)}function Jn(n){return typeof n>"u"}function Qu(n){return n!==null&&!Jn(n)&&n.constructor!==null&&!Jn(n.constructor)&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}function $o(n){return pe.call(n)==="[object ArrayBuffer]"}function Ku(n){return pe.call(n)==="[object FormData]"}function Ju(n){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&$o(n.buffer),e}function Xu(n){return typeof n=="string"}function Zu(n){return typeof n=="number"}function zo(n){return n!==null&&typeof n=="object"}function bt(n){if(pe.call(n)!=="[object Object]")return!1;var e=Object.getPrototypeOf(n);return e===null||e===Object.prototype}function ed(n){return pe.call(n)==="[object Date]"}function td(n){return pe.call(n)==="[object File]"}function nd(n){return pe.call(n)==="[object Blob]"}function Go(n){return pe.call(n)==="[object Function]"}function sd(n){return zo(n)&&Go(n.pipe)}function id(n){return pe.call(n)==="[object URLSearchParams]"}function rd(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function od(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ks(n,e){if(!(n===null||typeof n>"u"))if(typeof n!="object"&&(n=[n]),Fs(n))for(var t=0,s=n.length;t<s;t++)e.call(null,n[t],t,n);else for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.call(null,n[i],i,n)}function Xn(){var n={};function e(i,r){bt(n[r])&&bt(i)?n[r]=Xn(n[r],i):bt(i)?n[r]=Xn({},i):Fs(i)?n[r]=i.slice():n[r]=i}for(var t=0,s=arguments.length;t<s;t++)ks(arguments[t],e);return n}function ad(n,e,t){return ks(e,function(i,r){t&&typeof i=="function"?n[r]=Yu(i,t):n[r]=i}),n}function ld(n){return n.charCodeAt(0)===65279&&(n=n.slice(1)),n}var W={isArray:Fs,isArrayBuffer:$o,isBuffer:Qu,isFormData:Ku,isArrayBufferView:Ju,isString:Xu,isNumber:Zu,isObject:zo,isPlainObject:bt,isUndefined:Jn,isDate:ed,isFile:td,isBlob:nd,isFunction:Go,isStream:sd,isURLSearchParams:id,isStandardBrowserEnv:od,forEach:ks,merge:Xn,extend:ad,trim:rd,stripBOM:ld},Re=W;function xi(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Yo=function(e,t,s){if(!t)return e;var i;if(s)i=s(t);else if(Re.isURLSearchParams(t))i=t.toString();else{var r=[];Re.forEach(t,function(l,c){l===null||typeof l>"u"||(Re.isArray(l)?c=c+"[]":l=[l],Re.forEach(l,function(h){Re.isDate(h)?h=h.toISOString():Re.isObject(h)&&(h=JSON.stringify(h)),r.push(xi(c)+"="+xi(h))}))}),i=r.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},cd=W;function Kt(){this.handlers=[]}Kt.prototype.use=function(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};Kt.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Kt.prototype.forEach=function(e){cd.forEach(this.handlers,function(s){s!==null&&e(s)})};var hd=Kt,ud=W,dd=function(e,t){ud.forEach(e,function(i,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=i,delete e[r])})},Qo=function(e,t,s,i,r){return e.config=t,s&&(e.code=s),e.request=i,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Ko={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_n,Mi;function Jo(){if(Mi)return _n;Mi=1;var n=Qo;return _n=function(t,s,i,r,o){var a=new Error(t);return n(a,s,i,r,o)},_n}var mn,Fi;function fd(){if(Fi)return mn;Fi=1;var n=Jo();return mn=function(t,s,i){var r=i.config.validateStatus;!i.status||!r||r(i.status)?t(i):s(n("Request failed with status code "+i.status,i.config,null,i.request,i))},mn}var gn,ki;function pd(){if(ki)return gn;ki=1;var n=W;return gn=n.isStandardBrowserEnv()?function(){return{write:function(s,i,r,o,a,l){var c=[];c.push(s+"="+encodeURIComponent(i)),n.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),n.isString(o)&&c.push("path="+o),n.isString(a)&&c.push("domain="+a),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(s){var i=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),gn}var vn,Li;function _d(){return Li||(Li=1,vn=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}),vn}var yn,Ui;function md(){return Ui||(Ui=1,yn=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}),yn}var En,ji;function gd(){if(ji)return En;ji=1;var n=_d(),e=md();return En=function(s,i){return s&&!n(i)?e(s,i):i},En}var bn,Bi;function vd(){if(Bi)return bn;Bi=1;var n=W,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return bn=function(s){var i={},r,o,a;return s&&n.forEach(s.split(`
`),function(c){if(a=c.indexOf(":"),r=n.trim(c.substr(0,a)).toLowerCase(),o=n.trim(c.substr(a+1)),r){if(i[r]&&e.indexOf(r)>=0)return;r==="set-cookie"?i[r]=(i[r]?i[r]:[]).concat([o]):i[r]=i[r]?i[r]+", "+o:o}}),i},bn}var Cn,Vi;function yd(){if(Vi)return Cn;Vi=1;var n=W;return Cn=n.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),i;function r(o){var a=o;return t&&(s.setAttribute("href",a),a=s.href),s.setAttribute("href",a),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return i=r(window.location.href),function(a){var l=n.isString(a)?r(a):a;return l.protocol===i.protocol&&l.host===i.host}}():function(){return function(){return!0}}(),Cn}var Sn,Hi;function Jt(){if(Hi)return Sn;Hi=1;function n(e){this.message=e}return n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,Sn=n,Sn}var wn,qi;function Wi(){if(qi)return wn;qi=1;var n=W,e=fd(),t=pd(),s=Yo,i=gd(),r=vd(),o=yd(),a=Jo(),l=Ko,c=Jt();return wn=function(h){return new Promise(function(f,p){var _=h.data,g=h.headers,E=h.responseType,P;function I(){h.cancelToken&&h.cancelToken.unsubscribe(P),h.signal&&h.signal.removeEventListener("abort",P)}n.isFormData(_)&&delete g["Content-Type"];var v=new XMLHttpRequest;if(h.auth){var $=h.auth.username||"",tn=h.auth.password?unescape(encodeURIComponent(h.auth.password)):"";g.Authorization="Basic "+btoa($+":"+tn)}var Vs=i(h.baseURL,h.url);v.open(h.method.toUpperCase(),s(Vs,h.params,h.paramsSerializer),!0),v.timeout=h.timeout;function Hs(){if(v){var G="getAllResponseHeaders"in v?r(v.getAllResponseHeaders()):null,Oe=!E||E==="text"||E==="json"?v.responseText:v.response,_e={data:Oe,status:v.status,statusText:v.statusText,headers:G,config:h,request:v};e(function(nn){f(nn),I()},function(nn){p(nn),I()},_e),v=null}}if("onloadend"in v?v.onloadend=Hs:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(Hs)},v.onabort=function(){v&&(p(a("Request aborted",h,"ECONNABORTED",v)),v=null)},v.onerror=function(){p(a("Network Error",h,null,v)),v=null},v.ontimeout=function(){var Oe=h.timeout?"timeout of "+h.timeout+"ms exceeded":"timeout exceeded",_e=h.transitional||l;h.timeoutErrorMessage&&(Oe=h.timeoutErrorMessage),p(a(Oe,h,_e.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},n.isStandardBrowserEnv()){var qs=(h.withCredentials||o(Vs))&&h.xsrfCookieName?t.read(h.xsrfCookieName):void 0;qs&&(g[h.xsrfHeaderName]=qs)}"setRequestHeader"in v&&n.forEach(g,function(Oe,_e){typeof _>"u"&&_e.toLowerCase()==="content-type"?delete g[_e]:v.setRequestHeader(_e,Oe)}),n.isUndefined(h.withCredentials)||(v.withCredentials=!!h.withCredentials),E&&E!=="json"&&(v.responseType=h.responseType),typeof h.onDownloadProgress=="function"&&v.addEventListener("progress",h.onDownloadProgress),typeof h.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",h.onUploadProgress),(h.cancelToken||h.signal)&&(P=function(G){v&&(p(!G||G&&G.type?new c("canceled"):G),v.abort(),v=null)},h.cancelToken&&h.cancelToken.subscribe(P),h.signal&&(h.signal.aborted?P():h.signal.addEventListener("abort",P))),_||(_=null),v.send(_)})},wn}var U=W,$i=dd,Ed=Qo,bd=Ko,Cd={"Content-Type":"application/x-www-form-urlencoded"};function zi(n,e){!U.isUndefined(n)&&U.isUndefined(n["Content-Type"])&&(n["Content-Type"]=e)}function Sd(){var n;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(n=Wi()),n}function wd(n,e,t){if(U.isString(n))try{return(e||JSON.parse)(n),U.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(n)}var Xt={transitional:bd,adapter:Sd(),transformRequest:[function(e,t){return $i(t,"Accept"),$i(t,"Content-Type"),U.isFormData(e)||U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e)?e:U.isArrayBufferView(e)?e.buffer:U.isURLSearchParams(e)?(zi(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):U.isObject(e)||t&&t["Content-Type"]==="application/json"?(zi(t,"application/json"),wd(e)):e}],transformResponse:[function(e){var t=this.transitional||Xt.transitional,s=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,r=!s&&this.responseType==="json";if(r||i&&U.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(r)throw o.name==="SyntaxError"?Ed(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],function(e){Xt.headers[e]={}});U.forEach(["post","put","patch"],function(e){Xt.headers[e]=U.merge(Cd)});var Ls=Xt,Id=W,Td=Ls,Od=function(e,t,s){var i=this||Td;return Id.forEach(s,function(o){e=o.call(i,e,t)}),e},In,Gi;function Xo(){return Gi||(Gi=1,In=function(e){return!!(e&&e.__CANCEL__)}),In}var Yi=W,Tn=Od,Ad=Xo(),Rd=Ls,Pd=Jt();function On(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Pd("canceled")}var Nd=function(e){On(e),e.headers=e.headers||{},e.data=Tn.call(e,e.data,e.headers,e.transformRequest),e.headers=Yi.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Yi.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var t=e.adapter||Rd.adapter;return t(e).then(function(i){return On(e),i.data=Tn.call(e,i.data,i.headers,e.transformResponse),i},function(i){return Ad(i)||(On(e),i&&i.response&&(i.response.data=Tn.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},z=W,Zo=function(e,t){t=t||{};var s={};function i(u,h){return z.isPlainObject(u)&&z.isPlainObject(h)?z.merge(u,h):z.isPlainObject(h)?z.merge({},h):z.isArray(h)?h.slice():h}function r(u){if(z.isUndefined(t[u])){if(!z.isUndefined(e[u]))return i(void 0,e[u])}else return i(e[u],t[u])}function o(u){if(!z.isUndefined(t[u]))return i(void 0,t[u])}function a(u){if(z.isUndefined(t[u])){if(!z.isUndefined(e[u]))return i(void 0,e[u])}else return i(void 0,t[u])}function l(u){if(u in t)return i(e[u],t[u]);if(u in e)return i(void 0,e[u])}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return z.forEach(Object.keys(e).concat(Object.keys(t)),function(h){var d=c[h]||r,f=d(h);z.isUndefined(f)&&d!==l||(s[h]=f)}),s},An,Qi;function ea(){return Qi||(Qi=1,An={version:"0.26.1"}),An}var Dd=ea().version,Us={};["object","boolean","number","function","string","symbol"].forEach(function(n,e){Us[n]=function(s){return typeof s===n||"a"+(e<1?"n ":" ")+n}});var Ki={};Us.transitional=function(e,t,s){function i(r,o){return"[Axios v"+Dd+"] Transitional option '"+r+"'"+o+(s?". "+s:"")}return function(r,o,a){if(e===!1)throw new Error(i(o," has been removed"+(t?" in "+t:"")));return t&&!Ki[o]&&(Ki[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}};function xd(n,e,t){if(typeof n!="object")throw new TypeError("options must be an object");for(var s=Object.keys(n),i=s.length;i-- >0;){var r=s[i],o=e[r];if(o){var a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new TypeError("option "+r+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+r)}}var Md={assertOptions:xd,validators:Us},ta=W,Fd=Yo,Ji=hd,Xi=Nd,Zt=Zo,na=Md,Pe=na.validators;function vt(n){this.defaults=n,this.interceptors={request:new Ji,response:new Ji}}vt.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Zt(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var s=t.transitional;s!==void 0&&na.assertOptions(s,{silentJSONParsing:Pe.transitional(Pe.boolean),forcedJSONParsing:Pe.transitional(Pe.boolean),clarifyTimeoutError:Pe.transitional(Pe.boolean)},!1);var i=[],r=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(t)===!1||(r=r&&f.synchronous,i.unshift(f.fulfilled,f.rejected))});var o=[];this.interceptors.response.forEach(function(f){o.push(f.fulfilled,f.rejected)});var a;if(!r){var l=[Xi,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(o),a=Promise.resolve(t);l.length;)a=a.then(l.shift(),l.shift());return a}for(var c=t;i.length;){var u=i.shift(),h=i.shift();try{c=u(c)}catch(d){h(d);break}}try{a=Xi(c)}catch(d){return Promise.reject(d)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};vt.prototype.getUri=function(e){return e=Zt(this.defaults,e),Fd(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ta.forEach(["delete","get","head","options"],function(e){vt.prototype[e]=function(t,s){return this.request(Zt(s||{},{method:e,url:t,data:(s||{}).data}))}});ta.forEach(["post","put","patch"],function(e){vt.prototype[e]=function(t,s,i){return this.request(Zt(i||{},{method:e,url:t,data:s}))}});var kd=vt,Rn,Zi;function Ld(){if(Zi)return Rn;Zi=1;var n=Jt();function e(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(o){s=o});var i=this;this.promise.then(function(r){if(i._listeners){var o,a=i._listeners.length;for(o=0;o<a;o++)i._listeners[o](r);i._listeners=null}}),this.promise.then=function(r){var o,a=new Promise(function(l){i.subscribe(l),o=l}).then(r);return a.cancel=function(){i.unsubscribe(o)},a},t(function(o){i.reason||(i.reason=new n(o),s(i.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},e.prototype.unsubscribe=function(s){if(this._listeners){var i=this._listeners.indexOf(s);i!==-1&&this._listeners.splice(i,1)}},e.source=function(){var s,i=new e(function(o){s=o});return{token:i,cancel:s}},Rn=e,Rn}var Pn,er;function Ud(){return er||(er=1,Pn=function(e){return function(s){return e.apply(null,s)}}),Pn}var Nn,tr;function jd(){if(tr)return Nn;tr=1;var n=W;return Nn=function(t){return n.isObject(t)&&t.isAxiosError===!0},Nn}var nr=W,Bd=Wo,Ct=kd,Vd=Zo,Hd=Ls;function sa(n){var e=new Ct(n),t=Bd(Ct.prototype.request,e);return nr.extend(t,Ct.prototype,e),nr.extend(t,e),t.create=function(i){return sa(Vd(n,i))},t}var ee=sa(Hd);ee.Axios=Ct;ee.Cancel=Jt();ee.CancelToken=Ld();ee.isCancel=Xo();ee.VERSION=ea().version;ee.all=function(e){return Promise.all(e)};ee.spread=Ud();ee.isAxiosError=jd();Ms.exports=ee;Ms.exports.default=ee;var qd=Ms.exports,ia=qd,N={},js={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.RequiredError=n.BaseAPI=n.COLLECTION_FORMATS=n.BASE_PATH=void 0;const e=ia;n.BASE_PATH="https://api.openai.com/v1".replace(/\/+$/,""),n.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"	",pipes:"|"};class t{constructor(r,o=n.BASE_PATH,a=e.default){this.basePath=o,this.axios=a,r&&(this.configuration=r,this.basePath=r.basePath||this.basePath)}}n.BaseAPI=t;class s extends Error{constructor(r,o){super(o),this.field=r,this.name="RequiredError"}}n.RequiredError=s})(js);var Bs=oe&&oe.__awaiter||function(n,e,t,s){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{c(s.next(u))}catch(h){o(h)}}function l(u){try{c(s.throw(u))}catch(h){o(h)}}function c(u){u.done?r(u.value):i(u.value).then(a,l)}c((s=s.apply(n,e||[])).next())})};Object.defineProperty(N,"__esModule",{value:!0});N.createRequestFunction=N.toPathString=N.serializeDataIfNeeded=N.setSearchParams=N.setOAuthToObject=N.setBearerAuthToObject=N.setBasicAuthToObject=N.setApiKeyToObject=N.assertParamExists=N.DUMMY_BASE_URL=void 0;const Wd=js;N.DUMMY_BASE_URL="https://example.com";N.assertParamExists=function(n,e,t){if(t==null)throw new Wd.RequiredError(e,`Required parameter ${e} was null or undefined when calling ${n}.`)};N.setApiKeyToObject=function(n,e,t){return Bs(this,void 0,void 0,function*(){if(t&&t.apiKey){const s=typeof t.apiKey=="function"?yield t.apiKey(e):yield t.apiKey;n[e]=s}})};N.setBasicAuthToObject=function(n,e){e&&(e.username||e.password)&&(n.auth={username:e.username,password:e.password})};N.setBearerAuthToObject=function(n,e){return Bs(this,void 0,void 0,function*(){if(e&&e.accessToken){const t=typeof e.accessToken=="function"?yield e.accessToken():yield e.accessToken;n.Authorization="Bearer "+t}})};N.setOAuthToObject=function(n,e,t,s){return Bs(this,void 0,void 0,function*(){if(s&&s.accessToken){const i=typeof s.accessToken=="function"?yield s.accessToken(e,t):yield s.accessToken;n.Authorization="Bearer "+i}})};function Zn(n,e,t=""){e!=null&&(typeof e=="object"?Array.isArray(e)?e.forEach(s=>Zn(n,s,t)):Object.keys(e).forEach(s=>Zn(n,e[s],`${t}${t!==""?".":""}${s}`)):n.has(t)?n.append(t,e):n.set(t,e))}N.setSearchParams=function(n,...e){const t=new URLSearchParams(n.search);Zn(t,e),n.search=t.toString()};N.serializeDataIfNeeded=function(n,e,t){const s=typeof n!="string";return(s&&t&&t.isJsonMime?t.isJsonMime(e.headers["Content-Type"]):s)?JSON.stringify(n!==void 0?n:{}):n||""};N.toPathString=function(n){return n.pathname+n.search+n.hash};N.createRequestFunction=function(n,e,t,s){return(i=e,r=t)=>{const o=Object.assign(Object.assign({},n.options),{url:((s==null?void 0:s.basePath)||r)+n.url});return i.request(o)}};(function(n){var e=oe&&oe.__awaiter||function(o,a,l,c){function u(h){return h instanceof l?h:new l(function(d){d(h)})}return new(l||(l=Promise))(function(h,d){function f(g){try{_(c.next(g))}catch(E){d(E)}}function p(g){try{_(c.throw(g))}catch(E){d(E)}}function _(g){g.done?h(g.value):u(g.value).then(f,p)}_((c=c.apply(o,a||[])).next())})};Object.defineProperty(n,"__esModule",{value:!0}),n.OpenAIApi=n.OpenAIApiFactory=n.OpenAIApiFp=n.OpenAIApiAxiosParamCreator=n.CreateImageRequestResponseFormatEnum=n.CreateImageRequestSizeEnum=n.ChatCompletionResponseMessageRoleEnum=n.ChatCompletionRequestMessageRoleEnum=void 0;const t=ia,s=N,i=js;n.ChatCompletionRequestMessageRoleEnum={System:"system",User:"user",Assistant:"assistant",Function:"function"},n.ChatCompletionResponseMessageRoleEnum={System:"system",User:"user",Assistant:"assistant",Function:"function"},n.CreateImageRequestSizeEnum={_256x256:"256x256",_512x512:"512x512",_1024x1024:"1024x1024"},n.CreateImageRequestResponseFormatEnum={Url:"url",B64Json:"b64_json"},n.OpenAIApiAxiosParamCreator=function(o){return{cancelFineTune:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("cancelFineTune","fineTuneId",a);const c="/fine-tunes/{fine_tune_id}/cancel".replace("{fine_tune_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),{url:s.toPathString(u),options:d}}),createAnswer:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createAnswer","createAnswerRequest",a);const c="/answers",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};f["Content-Type"]="application/json",s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),d.data=s.serializeDataIfNeeded(a,d,o),{url:s.toPathString(u),options:d}}),createChatCompletion:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createChatCompletion","createChatCompletionRequest",a);const c="/chat/completions",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};f["Content-Type"]="application/json",s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),d.data=s.serializeDataIfNeeded(a,d,o),{url:s.toPathString(u),options:d}}),createClassification:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createClassification","createClassificationRequest",a);const c="/classifications",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};f["Content-Type"]="application/json",s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),d.data=s.serializeDataIfNeeded(a,d,o),{url:s.toPathString(u),options:d}}),createCompletion:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createCompletion","createCompletionRequest",a);const c="/completions",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};f["Content-Type"]="application/json",s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),d.data=s.serializeDataIfNeeded(a,d,o),{url:s.toPathString(u),options:d}}),createEdit:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createEdit","createEditRequest",a);const c="/edits",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};f["Content-Type"]="application/json",s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),d.data=s.serializeDataIfNeeded(a,d,o),{url:s.toPathString(u),options:d}}),createEmbedding:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createEmbedding","createEmbeddingRequest",a);const c="/embeddings",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};f["Content-Type"]="application/json",s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),d.data=s.serializeDataIfNeeded(a,d,o),{url:s.toPathString(u),options:d}}),createFile:(a,l,c={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createFile","file",a),s.assertParamExists("createFile","purpose",l);const u="/files",h=new URL(u,s.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),p={},_={},g=new(o&&o.formDataCtor||FormData);a!==void 0&&g.append("file",a),l!==void 0&&g.append("purpose",l),p["Content-Type"]="multipart/form-data",s.setSearchParams(h,_);let E=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign(Object.assign({},p),g.getHeaders()),E),c.headers),f.data=g,{url:s.toPathString(h),options:f}}),createFineTune:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createFineTune","createFineTuneRequest",a);const c="/fine-tunes",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};f["Content-Type"]="application/json",s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),d.data=s.serializeDataIfNeeded(a,d,o),{url:s.toPathString(u),options:d}}),createImage:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createImage","createImageRequest",a);const c="/images/generations",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};f["Content-Type"]="application/json",s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),d.data=s.serializeDataIfNeeded(a,d,o),{url:s.toPathString(u),options:d}}),createImageEdit:(a,l,c,u,h,d,f,p={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createImageEdit","image",a),s.assertParamExists("createImageEdit","prompt",l);const _="/images/edits",g=new URL(_,s.DUMMY_BASE_URL);let E;o&&(E=o.baseOptions);const P=Object.assign(Object.assign({method:"POST"},E),p),I={},v={},$=new(o&&o.formDataCtor||FormData);a!==void 0&&$.append("image",a),c!==void 0&&$.append("mask",c),l!==void 0&&$.append("prompt",l),u!==void 0&&$.append("n",u),h!==void 0&&$.append("size",h),d!==void 0&&$.append("response_format",d),f!==void 0&&$.append("user",f),I["Content-Type"]="multipart/form-data",s.setSearchParams(g,v);let tn=E&&E.headers?E.headers:{};return P.headers=Object.assign(Object.assign(Object.assign(Object.assign({},I),$.getHeaders()),tn),p.headers),P.data=$,{url:s.toPathString(g),options:P}}),createImageVariation:(a,l,c,u,h,d={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createImageVariation","image",a);const f="/images/variations",p=new URL(f,s.DUMMY_BASE_URL);let _;o&&(_=o.baseOptions);const g=Object.assign(Object.assign({method:"POST"},_),d),E={},P={},I=new(o&&o.formDataCtor||FormData);a!==void 0&&I.append("image",a),l!==void 0&&I.append("n",l),c!==void 0&&I.append("size",c),u!==void 0&&I.append("response_format",u),h!==void 0&&I.append("user",h),E["Content-Type"]="multipart/form-data",s.setSearchParams(p,P);let v=_&&_.headers?_.headers:{};return g.headers=Object.assign(Object.assign(Object.assign(Object.assign({},E),I.getHeaders()),v),d.headers),g.data=I,{url:s.toPathString(p),options:g}}),createModeration:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createModeration","createModerationRequest",a);const c="/moderations",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),f={},p={};f["Content-Type"]="application/json",s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),d.data=s.serializeDataIfNeeded(a,d,o),{url:s.toPathString(u),options:d}}),createSearch:(a,l,c={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createSearch","engineId",a),s.assertParamExists("createSearch","createSearchRequest",l);const u="/engines/{engine_id}/search".replace("{engine_id}",encodeURIComponent(String(a))),h=new URL(u,s.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),p={},_={};p["Content-Type"]="application/json",s.setSearchParams(h,_);let g=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},p),g),c.headers),f.data=s.serializeDataIfNeeded(l,f,o),{url:s.toPathString(h),options:f}}),createTranscription:(a,l,c,u,h,d,f={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createTranscription","file",a),s.assertParamExists("createTranscription","model",l);const p="/audio/transcriptions",_=new URL(p,s.DUMMY_BASE_URL);let g;o&&(g=o.baseOptions);const E=Object.assign(Object.assign({method:"POST"},g),f),P={},I={},v=new(o&&o.formDataCtor||FormData);a!==void 0&&v.append("file",a),l!==void 0&&v.append("model",l),c!==void 0&&v.append("prompt",c),u!==void 0&&v.append("response_format",u),h!==void 0&&v.append("temperature",h),d!==void 0&&v.append("language",d),P["Content-Type"]="multipart/form-data",s.setSearchParams(_,I);let $=g&&g.headers?g.headers:{};return E.headers=Object.assign(Object.assign(Object.assign(Object.assign({},P),v.getHeaders()),$),f.headers),E.data=v,{url:s.toPathString(_),options:E}}),createTranslation:(a,l,c,u,h,d={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createTranslation","file",a),s.assertParamExists("createTranslation","model",l);const f="/audio/translations",p=new URL(f,s.DUMMY_BASE_URL);let _;o&&(_=o.baseOptions);const g=Object.assign(Object.assign({method:"POST"},_),d),E={},P={},I=new(o&&o.formDataCtor||FormData);a!==void 0&&I.append("file",a),l!==void 0&&I.append("model",l),c!==void 0&&I.append("prompt",c),u!==void 0&&I.append("response_format",u),h!==void 0&&I.append("temperature",h),E["Content-Type"]="multipart/form-data",s.setSearchParams(p,P);let v=_&&_.headers?_.headers:{};return g.headers=Object.assign(Object.assign(Object.assign(Object.assign({},E),I.getHeaders()),v),d.headers),g.data=I,{url:s.toPathString(p),options:g}}),deleteFile:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("deleteFile","fileId",a);const c="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"DELETE"},h),l),f={},p={};s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),{url:s.toPathString(u),options:d}}),deleteModel:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("deleteModel","model",a);const c="/models/{model}".replace("{model}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"DELETE"},h),l),f={},p={};s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),{url:s.toPathString(u),options:d}}),downloadFile:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("downloadFile","fileId",a);const c="/files/{file_id}/content".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),f={},p={};s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),{url:s.toPathString(u),options:d}}),listEngines:(a={})=>e(this,void 0,void 0,function*(){const l="/engines",c=new URL(l,s.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),d={},f={};s.setSearchParams(c,f);let p=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},d),p),a.headers),{url:s.toPathString(c),options:h}}),listFiles:(a={})=>e(this,void 0,void 0,function*(){const l="/files",c=new URL(l,s.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),d={},f={};s.setSearchParams(c,f);let p=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},d),p),a.headers),{url:s.toPathString(c),options:h}}),listFineTuneEvents:(a,l,c={})=>e(this,void 0,void 0,function*(){s.assertParamExists("listFineTuneEvents","fineTuneId",a);const u="/fine-tunes/{fine_tune_id}/events".replace("{fine_tune_id}",encodeURIComponent(String(a))),h=new URL(u,s.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"GET"},d),c),p={},_={};l!==void 0&&(_.stream=l),s.setSearchParams(h,_);let g=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},p),g),c.headers),{url:s.toPathString(h),options:f}}),listFineTunes:(a={})=>e(this,void 0,void 0,function*(){const l="/fine-tunes",c=new URL(l,s.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),d={},f={};s.setSearchParams(c,f);let p=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},d),p),a.headers),{url:s.toPathString(c),options:h}}),listModels:(a={})=>e(this,void 0,void 0,function*(){const l="/models",c=new URL(l,s.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),d={},f={};s.setSearchParams(c,f);let p=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},d),p),a.headers),{url:s.toPathString(c),options:h}}),retrieveEngine:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("retrieveEngine","engineId",a);const c="/engines/{engine_id}".replace("{engine_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),f={},p={};s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),{url:s.toPathString(u),options:d}}),retrieveFile:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("retrieveFile","fileId",a);const c="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),f={},p={};s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),{url:s.toPathString(u),options:d}}),retrieveFineTune:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("retrieveFineTune","fineTuneId",a);const c="/fine-tunes/{fine_tune_id}".replace("{fine_tune_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),f={},p={};s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),{url:s.toPathString(u),options:d}}),retrieveModel:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("retrieveModel","model",a);const c="/models/{model}".replace("{model}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),f={},p={};s.setSearchParams(u,p);let _=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),_),l.headers),{url:s.toPathString(u),options:d}})}},n.OpenAIApiFp=function(o){const a=n.OpenAIApiAxiosParamCreator(o);return{cancelFineTune(l,c){return e(this,void 0,void 0,function*(){const u=yield a.cancelFineTune(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createAnswer(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createAnswer(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createChatCompletion(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createChatCompletion(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createClassification(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createClassification(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createCompletion(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createCompletion(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createEdit(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createEdit(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createEmbedding(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createEmbedding(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createFile(l,c,u){return e(this,void 0,void 0,function*(){const h=yield a.createFile(l,c,u);return s.createRequestFunction(h,t.default,i.BASE_PATH,o)})},createFineTune(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createFineTune(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createImage(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createImage(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createImageEdit(l,c,u,h,d,f,p,_){return e(this,void 0,void 0,function*(){const g=yield a.createImageEdit(l,c,u,h,d,f,p,_);return s.createRequestFunction(g,t.default,i.BASE_PATH,o)})},createImageVariation(l,c,u,h,d,f){return e(this,void 0,void 0,function*(){const p=yield a.createImageVariation(l,c,u,h,d,f);return s.createRequestFunction(p,t.default,i.BASE_PATH,o)})},createModeration(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createModeration(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createSearch(l,c,u){return e(this,void 0,void 0,function*(){const h=yield a.createSearch(l,c,u);return s.createRequestFunction(h,t.default,i.BASE_PATH,o)})},createTranscription(l,c,u,h,d,f,p){return e(this,void 0,void 0,function*(){const _=yield a.createTranscription(l,c,u,h,d,f,p);return s.createRequestFunction(_,t.default,i.BASE_PATH,o)})},createTranslation(l,c,u,h,d,f){return e(this,void 0,void 0,function*(){const p=yield a.createTranslation(l,c,u,h,d,f);return s.createRequestFunction(p,t.default,i.BASE_PATH,o)})},deleteFile(l,c){return e(this,void 0,void 0,function*(){const u=yield a.deleteFile(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},deleteModel(l,c){return e(this,void 0,void 0,function*(){const u=yield a.deleteModel(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},downloadFile(l,c){return e(this,void 0,void 0,function*(){const u=yield a.downloadFile(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},listEngines(l){return e(this,void 0,void 0,function*(){const c=yield a.listEngines(l);return s.createRequestFunction(c,t.default,i.BASE_PATH,o)})},listFiles(l){return e(this,void 0,void 0,function*(){const c=yield a.listFiles(l);return s.createRequestFunction(c,t.default,i.BASE_PATH,o)})},listFineTuneEvents(l,c,u){return e(this,void 0,void 0,function*(){const h=yield a.listFineTuneEvents(l,c,u);return s.createRequestFunction(h,t.default,i.BASE_PATH,o)})},listFineTunes(l){return e(this,void 0,void 0,function*(){const c=yield a.listFineTunes(l);return s.createRequestFunction(c,t.default,i.BASE_PATH,o)})},listModels(l){return e(this,void 0,void 0,function*(){const c=yield a.listModels(l);return s.createRequestFunction(c,t.default,i.BASE_PATH,o)})},retrieveEngine(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveEngine(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},retrieveFile(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveFile(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},retrieveFineTune(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveFineTune(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})},retrieveModel(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveModel(l,c);return s.createRequestFunction(u,t.default,i.BASE_PATH,o)})}}},n.OpenAIApiFactory=function(o,a,l){const c=n.OpenAIApiFp(o);return{cancelFineTune(u,h){return c.cancelFineTune(u,h).then(d=>d(l,a))},createAnswer(u,h){return c.createAnswer(u,h).then(d=>d(l,a))},createChatCompletion(u,h){return c.createChatCompletion(u,h).then(d=>d(l,a))},createClassification(u,h){return c.createClassification(u,h).then(d=>d(l,a))},createCompletion(u,h){return c.createCompletion(u,h).then(d=>d(l,a))},createEdit(u,h){return c.createEdit(u,h).then(d=>d(l,a))},createEmbedding(u,h){return c.createEmbedding(u,h).then(d=>d(l,a))},createFile(u,h,d){return c.createFile(u,h,d).then(f=>f(l,a))},createFineTune(u,h){return c.createFineTune(u,h).then(d=>d(l,a))},createImage(u,h){return c.createImage(u,h).then(d=>d(l,a))},createImageEdit(u,h,d,f,p,_,g,E){return c.createImageEdit(u,h,d,f,p,_,g,E).then(P=>P(l,a))},createImageVariation(u,h,d,f,p,_){return c.createImageVariation(u,h,d,f,p,_).then(g=>g(l,a))},createModeration(u,h){return c.createModeration(u,h).then(d=>d(l,a))},createSearch(u,h,d){return c.createSearch(u,h,d).then(f=>f(l,a))},createTranscription(u,h,d,f,p,_,g){return c.createTranscription(u,h,d,f,p,_,g).then(E=>E(l,a))},createTranslation(u,h,d,f,p,_){return c.createTranslation(u,h,d,f,p,_).then(g=>g(l,a))},deleteFile(u,h){return c.deleteFile(u,h).then(d=>d(l,a))},deleteModel(u,h){return c.deleteModel(u,h).then(d=>d(l,a))},downloadFile(u,h){return c.downloadFile(u,h).then(d=>d(l,a))},listEngines(u){return c.listEngines(u).then(h=>h(l,a))},listFiles(u){return c.listFiles(u).then(h=>h(l,a))},listFineTuneEvents(u,h,d){return c.listFineTuneEvents(u,h,d).then(f=>f(l,a))},listFineTunes(u){return c.listFineTunes(u).then(h=>h(l,a))},listModels(u){return c.listModels(u).then(h=>h(l,a))},retrieveEngine(u,h){return c.retrieveEngine(u,h).then(d=>d(l,a))},retrieveFile(u,h){return c.retrieveFile(u,h).then(d=>d(l,a))},retrieveFineTune(u,h){return c.retrieveFineTune(u,h).then(d=>d(l,a))},retrieveModel(u,h){return c.retrieveModel(u,h).then(d=>d(l,a))}}};class r extends i.BaseAPI{cancelFineTune(a,l){return n.OpenAIApiFp(this.configuration).cancelFineTune(a,l).then(c=>c(this.axios,this.basePath))}createAnswer(a,l){return n.OpenAIApiFp(this.configuration).createAnswer(a,l).then(c=>c(this.axios,this.basePath))}createChatCompletion(a,l){return n.OpenAIApiFp(this.configuration).createChatCompletion(a,l).then(c=>c(this.axios,this.basePath))}createClassification(a,l){return n.OpenAIApiFp(this.configuration).createClassification(a,l).then(c=>c(this.axios,this.basePath))}createCompletion(a,l){return n.OpenAIApiFp(this.configuration).createCompletion(a,l).then(c=>c(this.axios,this.basePath))}createEdit(a,l){return n.OpenAIApiFp(this.configuration).createEdit(a,l).then(c=>c(this.axios,this.basePath))}createEmbedding(a,l){return n.OpenAIApiFp(this.configuration).createEmbedding(a,l).then(c=>c(this.axios,this.basePath))}createFile(a,l,c){return n.OpenAIApiFp(this.configuration).createFile(a,l,c).then(u=>u(this.axios,this.basePath))}createFineTune(a,l){return n.OpenAIApiFp(this.configuration).createFineTune(a,l).then(c=>c(this.axios,this.basePath))}createImage(a,l){return n.OpenAIApiFp(this.configuration).createImage(a,l).then(c=>c(this.axios,this.basePath))}createImageEdit(a,l,c,u,h,d,f,p){return n.OpenAIApiFp(this.configuration).createImageEdit(a,l,c,u,h,d,f,p).then(_=>_(this.axios,this.basePath))}createImageVariation(a,l,c,u,h,d){return n.OpenAIApiFp(this.configuration).createImageVariation(a,l,c,u,h,d).then(f=>f(this.axios,this.basePath))}createModeration(a,l){return n.OpenAIApiFp(this.configuration).createModeration(a,l).then(c=>c(this.axios,this.basePath))}createSearch(a,l,c){return n.OpenAIApiFp(this.configuration).createSearch(a,l,c).then(u=>u(this.axios,this.basePath))}createTranscription(a,l,c,u,h,d,f){return n.OpenAIApiFp(this.configuration).createTranscription(a,l,c,u,h,d,f).then(p=>p(this.axios,this.basePath))}createTranslation(a,l,c,u,h,d){return n.OpenAIApiFp(this.configuration).createTranslation(a,l,c,u,h,d).then(f=>f(this.axios,this.basePath))}deleteFile(a,l){return n.OpenAIApiFp(this.configuration).deleteFile(a,l).then(c=>c(this.axios,this.basePath))}deleteModel(a,l){return n.OpenAIApiFp(this.configuration).deleteModel(a,l).then(c=>c(this.axios,this.basePath))}downloadFile(a,l){return n.OpenAIApiFp(this.configuration).downloadFile(a,l).then(c=>c(this.axios,this.basePath))}listEngines(a){return n.OpenAIApiFp(this.configuration).listEngines(a).then(l=>l(this.axios,this.basePath))}listFiles(a){return n.OpenAIApiFp(this.configuration).listFiles(a).then(l=>l(this.axios,this.basePath))}listFineTuneEvents(a,l,c){return n.OpenAIApiFp(this.configuration).listFineTuneEvents(a,l,c).then(u=>u(this.axios,this.basePath))}listFineTunes(a){return n.OpenAIApiFp(this.configuration).listFineTunes(a).then(l=>l(this.axios,this.basePath))}listModels(a){return n.OpenAIApiFp(this.configuration).listModels(a).then(l=>l(this.axios,this.basePath))}retrieveEngine(a,l){return n.OpenAIApiFp(this.configuration).retrieveEngine(a,l).then(c=>c(this.axios,this.basePath))}retrieveFile(a,l){return n.OpenAIApiFp(this.configuration).retrieveFile(a,l).then(c=>c(this.axios,this.basePath))}retrieveFineTune(a,l){return n.OpenAIApiFp(this.configuration).retrieveFineTune(a,l).then(c=>c(this.axios,this.basePath))}retrieveModel(a,l){return n.OpenAIApiFp(this.configuration).retrieveModel(a,l).then(c=>c(this.axios,this.basePath))}}n.OpenAIApi=r})(qo);var en={};const $d="openai",zd="3.3.0",Gd="Node.js library for the OpenAI API",Yd={type:"git",url:"git@github.com:openai/openai-node.git"},Qd=["openai","open","ai","gpt-3","gpt3"],Kd="OpenAI",Jd="MIT",Xd="./dist/index.js",Zd="./dist/index.d.ts",ef={build:"tsc --outDir dist/"},tf={axios:"^0.26.0","form-data":"^4.0.0"},nf={"@types/node":"^12.11.5",typescript:"^3.6.4"},sf={name:$d,version:zd,description:Gd,repository:Yd,keywords:Qd,author:Kd,license:Jd,main:Xd,types:Zd,scripts:ef,dependencies:tf,devDependencies:nf};var Dn,sr;function rf(){return sr||(sr=1,Dn=typeof self=="object"?self.FormData:window.FormData),Dn}Object.defineProperty(en,"__esModule",{value:!0});en.Configuration=void 0;const of=sf;class af{constructor(e={}){this.apiKey=e.apiKey,this.organization=e.organization,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor,this.baseOptions||(this.baseOptions={}),this.baseOptions.headers=Object.assign({"User-Agent":`OpenAI/NodeJS/${of.version}`,Authorization:`Bearer ${this.apiKey}`},this.baseOptions.headers),this.organization&&(this.baseOptions.headers["OpenAI-Organization"]=this.organization),this.formDataCtor||(this.formDataCtor=rf())}isJsonMime(e){const t=new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$","i");return e!==null&&(t.test(e)||e.toLowerCase()==="application/json-patch+json")}}en.Configuration=af;(function(n){var e=oe&&oe.__createBinding||(Object.create?function(s,i,r,o){o===void 0&&(o=r),Object.defineProperty(s,o,{enumerable:!0,get:function(){return i[r]}})}:function(s,i,r,o){o===void 0&&(o=r),s[o]=i[r]}),t=oe&&oe.__exportStar||function(s,i){for(var r in s)r!=="default"&&!i.hasOwnProperty(r)&&e(i,s,r)};Object.defineProperty(n,"__esModule",{value:!0}),t(qo,n),t(en,n)})(xs);const ra=new xs.Configuration({apiKey:{}.OPENAI_API_KEY});delete ra.baseOptions.headers["User-Agent"];const lf=new xs.OpenAIApi(ra),cf={databaseURL:"https://gpt-4-project-cafcf-default-rtdb.europe-west1.firebasedatabase.app/"},hf=gr(cf),uf=$u(hf),ht=ku(uf),X=document.getElementById("chatbot-conversation"),df={role:"system",content:"You are a helpful assistant."};document.addEventListener("submit",n=>{n.preventDefault();const e=document.getElementById("user-input");Bo(ht,{role:"user",content:e.value}),ff();const t=document.createElement("div");t.classList.add("speech","speech-human"),X.appendChild(t),t.textContent=e.value,e.value="",X.scrollTop=X.scrollHeight});function ff(){Ho(ht).then(async n=>{if(n.exists()){const e=Object.values(n.val());e.unshift(df);const t=await lf.createChatCompletion({model:"gpt-3.5-turbo",messages:e,presence_penalty:0,frequency_penalty:.3});Bo(ht,t.data.choices[0].message),pf(t.data.choices[0].message.content)}else console.log("No data available")})}function pf(n){const e=document.createElement("div");e.classList.add("speech","speech-ai","blinking-cursor"),X.appendChild(e);let t=0;const s=setInterval(()=>{e.textContent+=n.slice(t-1,t),n.length===t&&(clearInterval(s),e.classList.remove("blinking-cursor")),t++,X.scrollTop=X.scrollHeight},50)}document.getElementById("clear-btn").addEventListener("click",()=>{Lu(ht),X.innerHTML='<div class="speech speech-ai">How can I help you?</div>'});function _f(){Ho(ht).then(async n=>{n.exists()&&(Object.values(n.val()).forEach(e=>{const t=document.createElement("div");t.classList.add("speech",`speech-${e.role==="user"?"human":"ai"}`),X.appendChild(t),t.textContent=e.content}),X.scrollTop=X.scrollHeight)})}_f();
