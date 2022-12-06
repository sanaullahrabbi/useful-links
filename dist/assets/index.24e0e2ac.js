(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
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
 *//**
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
 */const Si=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Ja=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},bi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let g=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(g=64)),s.push(n[h],n[l],n[g],n[p])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Si(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ja(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw Error();const g=i<<2|a>>4;if(s.push(g),u!==64){const p=a<<4&240|u>>2;if(s.push(p),l!==64){const T=u<<6&192|l;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Za=function(e){const t=Si(e);return bi.encodeByteArray(t,!0)},nn=function(e){return Za(e).replace(/\./g,"")},tc=function(e){try{return bi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function ec(){return typeof indexedDB=="object"}function nc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function sc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rc=()=>sc().__FIREBASE_DEFAULTS__,ic=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},oc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&tc(e[1]);return t&&JSON.parse(t)},Ai=()=>{try{return rc()||ic()||oc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ac=e=>{var t,n;return(n=(t=Ai())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},cc=e=>{const t=ac(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},uc=()=>{var e;return(e=Ai())===null||e===void 0?void 0:e.config};/**
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
 */class hc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function lc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[nn(JSON.stringify(n)),nn(JSON.stringify(o)),a].join(".")}/**
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
 */const dc="FirebaseError";class Xt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=dc,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?fc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Xt(r,a,s)}}function fc(e,t){return e.replace(gc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const gc=/\{\$([^}]+)}/g;function as(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Dr(i)&&Dr(o)){if(!as(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Dr(e){return e!==null&&typeof e=="object"}/**
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
 */function de(e){return e&&e._delegate?e._delegate:e}class fe{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const St="[DEFAULT]";/**
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
 */class pc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new hc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yc(t))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=St){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=St){return this.instances.has(t)}getOptions(t=St){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=St){return this.component?this.component.multipleInstances?t:St:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mc(e){return e===St?void 0:e}function yc(e){return e.instantiationMode==="EAGER"}/**
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
 */class vc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new pc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const wc={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Ec=k.INFO,Tc={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Ic=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Tc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ki{constructor(t){this.name=t,this._logLevel=Ec,this._logHandler=Ic,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const Cc=(e,t)=>t.some(n=>e instanceof n);let kr,_r;function Sc(){return kr||(kr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bc(){return _r||(_r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _i=new WeakMap,cs=new WeakMap,Ni=new WeakMap,Gn=new WeakMap,Ms=new WeakMap;function Ac(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(pt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&_i.set(n,e)}).catch(()=>{}),Ms.set(t,e),t}function Dc(e){if(cs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});cs.set(e,t)}let us={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return cs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ni.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function kc(e){us=e(us)}function _c(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Qn(this),t,...n);return Ni.set(s,t.sort?t.sort():[t]),pt(s)}:bc().includes(e)?function(...t){return e.apply(Qn(this),t),pt(_i.get(this))}:function(...t){return pt(e.apply(Qn(this),t))}}function Nc(e){return typeof e=="function"?_c(e):(e instanceof IDBTransaction&&Dc(e),Cc(e,Sc())?new Proxy(e,us):e)}function pt(e){if(e instanceof IDBRequest)return Ac(e);if(Gn.has(e))return Gn.get(e);const t=Nc(e);return t!==e&&(Gn.set(e,t),Ms.set(t,e)),t}const Qn=e=>Ms.get(e);function Rc(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=pt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(pt(o.result),c.oldVersion,c.newVersion,pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const xc=["get","getKey","getAll","getAllKeys","count"],Lc=["put","add","delete","clear"],Wn=new Map;function Nr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Wn.get(t))return Wn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Lc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||xc.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Wn.set(t,i),i}kc(e=>({...e,get:(t,n,s)=>Nr(t,n)||e.get(t,n,s),has:(t,n)=>!!Nr(t,n)||e.has(t,n)}));/**
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
 */class Oc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Mc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const hs="@firebase/app",Rr="0.8.4";/**
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
 */const Nt=new ki("@firebase/app"),Fc="@firebase/app-compat",Pc="@firebase/analytics-compat",Vc="@firebase/analytics",Uc="@firebase/app-check-compat",Bc="@firebase/app-check",$c="@firebase/auth",jc="@firebase/auth-compat",qc="@firebase/database",Kc="@firebase/database-compat",Hc="@firebase/functions",zc="@firebase/functions-compat",Gc="@firebase/installations",Qc="@firebase/installations-compat",Wc="@firebase/messaging",Xc="@firebase/messaging-compat",Yc="@firebase/performance",Jc="@firebase/performance-compat",Zc="@firebase/remote-config",tu="@firebase/remote-config-compat",eu="@firebase/storage",nu="@firebase/storage-compat",su="@firebase/firestore",ru="@firebase/firestore-compat",iu="firebase",ou="9.14.0";/**
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
 */const ls="[DEFAULT]",au={[hs]:"fire-core",[Fc]:"fire-core-compat",[Vc]:"fire-analytics",[Pc]:"fire-analytics-compat",[Bc]:"fire-app-check",[Uc]:"fire-app-check-compat",[$c]:"fire-auth",[jc]:"fire-auth-compat",[qc]:"fire-rtdb",[Kc]:"fire-rtdb-compat",[Hc]:"fire-fn",[zc]:"fire-fn-compat",[Gc]:"fire-iid",[Qc]:"fire-iid-compat",[Wc]:"fire-fcm",[Xc]:"fire-fcm-compat",[Yc]:"fire-perf",[Jc]:"fire-perf-compat",[Zc]:"fire-rc",[tu]:"fire-rc-compat",[eu]:"fire-gcs",[nu]:"fire-gcs-compat",[su]:"fire-fst",[ru]:"fire-fst-compat","fire-js":"fire-js",[iu]:"fire-js-all"};/**
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
 */const sn=new Map,ds=new Map;function cu(e,t){try{e.container.addComponent(t)}catch(n){Nt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rn(e){const t=e.name;if(ds.has(t))return Nt.debug(`There were multiple attempts to register component ${t}.`),!1;ds.set(t,e);for(const n of sn.values())cu(n,e);return!0}function uu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const hu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new Di("app","Firebase",hu);/**
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
 */class lu{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
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
 */const du=ou;function Ri(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ls,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw mt.create("bad-app-name",{appName:String(r)});if(n||(n=uc()),!n)throw mt.create("no-options");const i=sn.get(r);if(i){if(as(n,i.options)&&as(s,i.config))return i;throw mt.create("duplicate-app",{appName:r})}const o=new vc(r);for(const c of ds.values())o.addComponent(c);const a=new lu(n,s,o);return sn.set(r,a),a}function fu(e=ls){const t=sn.get(e);if(!t&&e===ls)return Ri();if(!t)throw mt.create("no-app",{appName:e});return t}function Bt(e,t,n){var s;let r=(s=au[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}rn(new fe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const gu="firebase-heartbeat-database",pu=1,ge="firebase-heartbeat-store";let Xn=null;function xi(){return Xn||(Xn=Rc(gu,pu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ge)}}}).catch(e=>{throw mt.create("idb-open",{originalErrorMessage:e.message})})),Xn}async function mu(e){var t;try{return(await xi()).transaction(ge).objectStore(ge).get(Li(e))}catch(n){if(n instanceof Xt)Nt.warn(n.message);else{const s=mt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Nt.warn(s.message)}}}async function xr(e,t){var n;try{const r=(await xi()).transaction(ge,"readwrite");return await r.objectStore(ge).put(t,Li(e)),r.done}catch(s){if(s instanceof Xt)Nt.warn(s.message);else{const r=mt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Nt.warn(r.message)}}}function Li(e){return`${e.name}!${e.options.appId}`}/**
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
 */const yu=1024,vu=30*24*60*60*1e3;class wu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tu(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=vu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lr(),{heartbeatsToSend:n,unsentEntries:s}=Eu(this._heartbeatsCache.heartbeats),r=nn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Lr(){return new Date().toISOString().substring(0,10)}function Eu(e,t=yu){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Or(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Or(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Tu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ec()?nc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return xr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return xr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Or(e){return nn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Iu(e){rn(new fe("platform-logger",t=>new Oc(t),"PRIVATE")),rn(new fe("heartbeat",t=>new wu(t),"PRIVATE")),Bt(hs,Rr,e),Bt(hs,Rr,"esm2017"),Bt("fire-js","")}Iu("");var Cu="firebase",Su="9.14.0";/**
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
 */Bt(Cu,Su,"app");var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Fs=Fs||{},E=bu||self;function on(){}function Tn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ke(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Au(e){return Object.prototype.hasOwnProperty.call(e,Yn)&&e[Yn]||(e[Yn]=++Du)}var Yn="closure_uid_"+(1e9*Math.random()>>>0),Du=0;function ku(e,t,n){return e.call.apply(e.bind,arguments)}function _u(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=ku:X=_u,X.apply(null,arguments)}function He(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function It(){this.s=this.s,this.o=this.o}var Nu=0;It.prototype.s=!1;It.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Nu!=0)&&Au(this)};It.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ps(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Mr(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Tn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var Ru=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",on,t),E.removeEventListener("test",on,t)}catch{}return e}();function an(e){return/^[\s\xa0]*$/.test(e)}var Fr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Jn(e,t){return e<t?-1:e>t?1:0}function In(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function it(e){return In().indexOf(e)!=-1}function Vs(e){return Vs[" "](e),e}Vs[" "]=on;function xu(e){var t=Mu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Lu=it("Opera"),qt=it("Trident")||it("MSIE"),Mi=it("Edge"),fs=Mi||qt,Fi=it("Gecko")&&!(In().toLowerCase().indexOf("webkit")!=-1&&!it("Edge"))&&!(it("Trident")||it("MSIE"))&&!it("Edge"),Ou=In().toLowerCase().indexOf("webkit")!=-1&&!it("Edge");function Pi(){var e=E.document;return e?e.documentMode:void 0}var cn;t:{var Zn="",ts=function(){var e=In();if(Fi)return/rv:([^\);]+)(\)|;)/.exec(e);if(Mi)return/Edge\/([\d\.]+)/.exec(e);if(qt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ou)return/WebKit\/(\S+)/.exec(e);if(Lu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ts&&(Zn=ts?ts[1]:""),qt){var es=Pi();if(es!=null&&es>parseFloat(Zn)){cn=String(es);break t}}cn=Zn}var Mu={};function Fu(){return xu(function(){let e=0;const t=Fr(String(cn)).split("."),n=Fr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Jn(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Jn(r[2].length==0,i[2].length==0)||Jn(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var gs;if(E.document&&qt){var Pr=Pi();gs=Pr||parseInt(cn,10)||void 0}else gs=void 0;var Pu=gs;function pe(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Fi){t:{try{Vs(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Vu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&pe.X.h.call(this)}}z(pe,Y);var Vu={2:"touch",3:"pen",4:"mouse"};pe.prototype.h=function(){pe.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),Uu=0;function Bu(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++Uu,this.ba=this.ea=!1}function Cn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Us(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Vi(e){const t={};for(const n in e)t[n]=e[n];return t}const Vr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ui(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Vr.length;i++)n=Vr[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Sn(e){this.src=e,this.g={},this.h=0}Sn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ms(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Bu(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function ps(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Oi(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Cn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ms(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var Bs="closure_lm_"+(1e6*Math.random()|0),ns={};function Bi(e,t,n,s,r){if(s&&s.once)return ji(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Bi(e,t[i],n,s,r);return null}return n=qs(n),e&&e[_e]?e.N(t,n,ke(s)?!!s.capture:!!s,r):$i(e,t,n,!1,s,r)}function $i(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=ke(r)?!!r.capture:!!r,a=js(e);if(a||(e[Bs]=a=new Sn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=$u(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Ru||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Ki(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $u(){function e(n){return t.call(e.src,e.listener,n)}const t=ju;return e}function ji(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ji(e,t[i],n,s,r);return null}return n=qs(n),e&&e[_e]?e.O(t,n,ke(s)?!!s.capture:!!s,r):$i(e,t,n,!0,s,r)}function qi(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)qi(e,t[i],n,s,r);else s=ke(s)?!!s.capture:!!s,n=qs(n),e&&e[_e]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ms(i,n,s,r),-1<n&&(Cn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=js(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ms(t,n,s,r)),(n=-1<e?t[e]:null)&&$s(n))}function $s(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[_e])ps(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ki(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=js(t))?(ps(n,e),n.h==0&&(n.src=null,t[Bs]=null)):Cn(e)}}}function Ki(e){return e in ns?ns[e]:ns[e]="on"+e}function ju(e,t){if(e.ba)e=!0;else{t=new pe(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&$s(e),e=n.call(s,t)}return e}function js(e){return e=e[Bs],e instanceof Sn?e:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function qs(e){return typeof e=="function"?e:(e[ss]||(e[ss]=function(t){return e.handleEvent(t)}),e[ss])}function j(){It.call(this),this.i=new Sn(this),this.P=this,this.I=null}z(j,It);j.prototype[_e]=!0;j.prototype.removeEventListener=function(e,t,n,s){qi(this,e,t,n,s)};function H(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var r=t;t=new Y(s,e),Ui(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=ze(o,s,!0,t)&&r}if(o=t.g=e,r=ze(o,s,!0,t)&&r,r=ze(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=ze(o,s,!1,t)&&r}j.prototype.M=function(){if(j.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Cn(n[s]);delete e.g[t],e.h--}}this.I=null};j.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};j.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ze(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ps(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ks=E.JSON.stringify;function qu(){var e=Gi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ku{constructor(){this.h=this.g=null}add(t,n){const s=Hi.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Hi=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Hu,e=>e.reset());class Hu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zu(e){E.setTimeout(()=>{throw e},0)}function zi(e,t){ys||Gu(),vs||(ys(),vs=!0),Gi.add(e,t)}var ys;function Gu(){var e=E.Promise.resolve(void 0);ys=function(){e.then(Qu)}}var vs=!1,Gi=new Ku;function Qu(){for(var e;e=qu();){try{e.h.call(e.g)}catch(n){zu(n)}var t=Hi;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}vs=!1}function bn(e,t){j.call(this),this.h=e||1,this.g=t||E,this.j=X(this.lb,this),this.l=Date.now()}z(bn,j);m=bn.prototype;m.ca=!1;m.R=null;m.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&(Hs(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hs(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}m.M=function(){bn.X.M.call(this),Hs(this),delete this.g};function zs(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Qi(e){e.g=zs(()=>{e.g=null,e.i&&(e.i=!1,Qi(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Wu extends It{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Qi(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(e){It.call(this),this.h=e,this.g={}}z(me,It);var Ur=[];function Wi(e,t,n,s){Array.isArray(n)||(n&&(Ur[0]=n.toString()),n=Ur);for(var r=0;r<n.length;r++){var i=Bi(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Xi(e){Us(e.g,function(t,n){this.g.hasOwnProperty(n)&&$s(t)},e),e.g={}}me.prototype.M=function(){me.X.M.call(this),Xi(this)};me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function An(){this.g=!0}An.prototype.Aa=function(){this.g=!1};function Xu(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Yu(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Vt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Zu(e,n)+(s?" "+s:"")})}function Ju(e,t){e.info(function(){return"TIMEOUT: "+t})}An.prototype.info=function(){};function Zu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ks(n)}catch{return t}}var Lt={},Br=null;function Dn(){return Br=Br||new j}Lt.Pa="serverreachability";function Yi(e){Y.call(this,Lt.Pa,e)}z(Yi,Y);function ye(e){const t=Dn();H(t,new Yi(t))}Lt.STAT_EVENT="statevent";function Ji(e,t){Y.call(this,Lt.STAT_EVENT,e),this.stat=t}z(Ji,Y);function Z(e){const t=Dn();H(t,new Ji(t,e))}Lt.Qa="timingevent";function Zi(e,t){Y.call(this,Lt.Qa,e),this.size=t}z(Zi,Y);function Ne(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var kn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},to={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Gs(){}Gs.prototype.h=null;function $r(e){return e.h||(e.h=e.i())}function eo(){}var Re={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qs(){Y.call(this,"d")}z(Qs,Y);function Ws(){Y.call(this,"c")}z(Ws,Y);var ws;function _n(){}z(_n,Gs);_n.prototype.g=function(){return new XMLHttpRequest};_n.prototype.i=function(){return{}};ws=new _n;function xe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new me(this),this.O=th,e=fs?125:void 0,this.T=new bn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}var th=45e3,Es={},un={};m=xe.prototype;m.setTimeout=function(e){this.O=e};function Ts(e,t,n){e.K=1,e.v=Rn(lt(t)),e.s=n,e.P=!0,so(e,null)}function so(e,t){e.F=Date.now(),Le(e),e.A=lt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),lo(n.i,"t",s),e.C=0,n=e.l.H,e.h=new no,e.g=Lo(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Wu(X(e.La,e,e.g),e.N)),Wi(e.S,e.g,"readystatechange",e.ib),t=e.H?Vi(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ye(),Xu(e.j,e.u,e.A,e.m,e.U,e.s)}m.ib=function(e){e=e.target;const t=this.L;t&&ct(e)==3?t.l():this.La(e)};m.La=function(e){try{if(e==this.g)t:{const h=ct(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||fs||this.g&&(this.h.h||this.g.fa()||Hr(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?ye(3):ye(2)),Nn(this);var n=this.g.aa();this.Y=n;e:if(ro(this)){var s=Hr(this.g);e="";var r=s.length,i=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bt(this),ae(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Yu(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!an(a)){var u=a;break e}}u=null}if(n=u)Vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Is(this,n);else{this.i=!1,this.o=3,Z(12),bt(this),ae(this);break t}}this.P?(io(this,h,o),fs&&this.i&&h==3&&(Wi(this.S,this.T,"tick",this.hb),this.T.start())):(Vt(this.j,this.m,o,null),Is(this,o)),h==4&&bt(this),this.i&&!this.I&&(h==4?_o(this.l,this):(this.i=!1,Le(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),bt(this),ae(this)}}}catch{}finally{}};function ro(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function io(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=eh(e,n),r==un){t==4&&(e.o=4,Z(14),s=!1),Vt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Es){e.o=4,Z(15),Vt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Vt(e.j,e.m,r,null),Is(e,r);ro(e)&&r!=un&&r!=Es&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nr(t),t.K=!0,Z(11))):(Vt(e.j,e.m,n,"[Invalid Chunked Response]"),bt(e),ae(e))}m.hb=function(){if(this.g){var e=ct(this.g),t=this.g.fa();this.C<t.length&&(Nn(this),io(this,e,t),this.i&&e!=4&&Le(this))}};function eh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?un:(n=Number(t.substring(n,s)),isNaN(n)?Es:(s+=1,s+n>t.length?un:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,bt(this)};function Le(e){e.V=Date.now()+e.O,oo(e,e.O)}function oo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ne(X(e.gb,e),t)}function Nn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}m.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ju(this.j,this.A),this.K!=2&&(ye(),Z(17)),bt(this),this.o=2,ae(this)):oo(this,this.V-e)};function ae(e){e.l.G==0||e.I||_o(e.l,e)}function bt(e){Nn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Hs(e.T),Xi(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Is(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Cs(n.h,e))){if(!e.J&&Cs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)dn(n),On(n);else break t;er(n),Z(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ne(X(n.cb,n),6e3));if(1>=po(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else At(n,11)}else if((e.J||n.g==e)&&dn(n),!an(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=u[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const T=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var i=s.h;i.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Xs(i,i.h),i.h=null))}if(s.D){const A=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.za=A,x(s.F,s.D,A))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=xo(s,s.H?s.ka:null,s.V),o.J){mo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Nn(a),Le(a)),s.g=o}else Do(s);0<n.i.length&&Mn(n)}else u[0]!="stop"&&u[0]!="close"||At(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?At(n,7):tr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ye(4)}catch{}}function nh(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Tn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function sh(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Tn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function ao(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Tn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=sh(e),s=nh(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var co=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function kt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof kt){this.h=t!==void 0?t:e.h,hn(this,e.j),this.s=e.s,this.g=e.g,ln(this,e.m),this.l=e.l,t=e.i;var n=new ve;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),jr(this,n),this.o=e.o}else e&&(n=String(e).match(co))?(this.h=!!t,hn(this,n[1]||"",!0),this.s=re(n[2]||""),this.g=re(n[3]||"",!0),ln(this,n[4]),this.l=re(n[5]||"",!0),jr(this,n[6]||"",!0),this.o=re(n[7]||"")):(this.h=!!t,this.i=new ve(null,this.h))}kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ie(t,qr,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ie(t,qr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ie(n,n.charAt(0)=="/"?ah:oh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ie(n,uh)),e.join("")};function lt(e){return new kt(e)}function hn(e,t,n){e.j=n?re(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ln(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function jr(e,t,n){t instanceof ve?(e.i=t,hh(e.i,e.h)):(n||(t=ie(t,ch)),e.i=new ve(t,e.h))}function x(e,t,n){e.i.set(t,n)}function Rn(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function re(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ie(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ih),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ih(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var qr=/[#\/\?@]/g,oh=/[#\?:]/g,ah=/[#\?]/g,ch=/[#\?@]/g,uh=/#/g;function ve(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ct(e){e.g||(e.g=new Map,e.h=0,e.i&&rh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=ve.prototype;m.add=function(e,t){Ct(this),this.i=null,e=Yt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function uo(e,t){Ct(e),t=Yt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ho(e,t){return Ct(e),t=Yt(e,t),e.g.has(t)}m.forEach=function(e,t){Ct(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};m.oa=function(){Ct(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};m.W=function(e){Ct(this);let t=[];if(typeof e=="string")ho(this,e)&&(t=t.concat(this.g.get(Yt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Ct(this),this.i=null,e=Yt(this,e),ho(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function lo(e,t,n){uo(e,t),0<n.length&&(e.i=null,e.g.set(Yt(e,t),Ps(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Yt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function hh(e,t){t&&!e.j&&(Ct(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(uo(this,s),lo(this,r,n))},e)),e.j=t}var lh=class{constructor(e,t){this.h=e,this.g=t}};function fo(e){this.l=e||dh,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ga&&E.g.Ga()&&E.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dh=10;function go(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function po(e){return e.h?1:e.g?e.g.size:0}function Cs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Xs(e,t){e.g?e.g.add(t):e.h=t}function mo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}fo.prototype.cancel=function(){if(this.i=yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function yo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ps(e.i)}function Ys(){}Ys.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};Ys.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function fh(){this.g=new Ys}function gh(e,t,n){const s=n||"";try{ao(e,function(r,i){let o=r;ke(r)&&(o=Ks(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function ph(e,t){const n=new An;if(E.Image){const s=new Image;s.onload=He(Ge,n,s,"TestLoadImage: loaded",!0,t),s.onerror=He(Ge,n,s,"TestLoadImage: error",!1,t),s.onabort=He(Ge,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=He(Ge,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ge(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Oe(e){this.l=e.ac||null,this.j=e.jb||!1}z(Oe,Gs);Oe.prototype.g=function(){return new xn(this.l,this.j)};Oe.prototype.i=function(e){return function(){return e}}({});function xn(e,t){j.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Js,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(xn,j);var Js=0;m=xn.prototype;m.open=function(e,t){if(this.readyState!=Js)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,we(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Me(this)),this.readyState=Js};m.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,we(this)),this.g&&(this.readyState=3,we(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function vo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}m.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Me(this):we(this),this.readyState==3&&vo(this)}};m.Va=function(e){this.g&&(this.response=this.responseText=e,Me(this))};m.Ua=function(e){this.g&&(this.response=e,Me(this))};m.ga=function(){this.g&&Me(this)};function Me(e){e.readyState=4,e.l=null,e.j=null,e.A=null,we(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function we(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var mh=E.JSON.parse;function O(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wo,this.K=this.L=!1}z(O,j);var wo="",yh=/^https?$/i,vh=["POST","PUT"];m=O.prototype;m.Ka=function(e){this.L=e};m.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ws.g(),this.C=this.u?$r(this.u):$r(ws),this.g.onreadystatechange=X(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Kr(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=E.FormData&&e instanceof E.FormData,!(0<=Oi(vh,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Io(this),0<this.B&&((this.K=wh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.qa,this)):this.A=zs(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Kr(this,i)}};function wh(e){return qt&&Fu()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.qa=function(){typeof Fs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Kr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Eo(e),Ln(e)}function Eo(e){e.D||(e.D=!0,H(e,"complete"),H(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),Ln(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),O.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?To(this):this.fb())};m.fb=function(){To(this)};function To(e){if(e.h&&typeof Fs<"u"&&(!e.C[1]||ct(e)!=4||e.aa()!=2)){if(e.v&&ct(e)==4)zs(e.Ha,0,e);else if(H(e,"readystatechange"),ct(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(co)[1]||null;if(!r&&E.self&&E.self.location){var i=E.self.location.protocol;r=i.substr(0,i.length-1)}s=!yh.test(r?r.toLowerCase():"")}n=s}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var o=2<ct(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Eo(e)}}finally{Ln(e)}}}}function Ln(e,t){if(e.g){Io(e);const n=e.g,s=e.C[0]?on:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=s}catch{}}}function Io(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function ct(e){return e.g?e.g.readyState:0}m.aa=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),mh(t)}};function Hr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case wo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Co(e){let t="";return Us(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Zs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Co(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function se(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function So(e){this.Ca=0,this.i=[],this.j=new An,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=se("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=se("baseRetryDelayMs",5e3,e),this.bb=se("retryDelaySeedMs",1e4,e),this.$a=se("forwardChannelMaxRetries",2,e),this.ta=se("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new fo(e&&e.concurrentRequestLimit),this.Fa=new fh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=So.prototype;m.ma=8;m.G=1;function tr(e){if(bo(e),e.G==3){var t=e.U++,n=lt(e.F);x(n,"SID",e.I),x(n,"RID",t),x(n,"TYPE","terminate"),Fe(e,n),t=new xe(e,e.j,t,void 0),t.K=2,t.v=Rn(lt(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Lo(t.l,null),t.g.da(t.v)),t.F=Date.now(),Le(t)}Ro(e)}function On(e){e.g&&(nr(e),e.g.cancel(),e.g=null)}function bo(e){On(e),e.u&&(E.clearTimeout(e.u),e.u=null),dn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function Mn(e){go(e.h)||e.m||(e.m=!0,zi(e.Ja,e),e.C=0)}function Eh(e,t){return po(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ne(X(e.Ja,e,t),No(e,e.C)),e.C++,!0)}m.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new xe(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Vi(i),Ui(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ao(this,r,t),n=lt(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),Fe(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Co(i)))+"&"+t:this.o&&Zs(n,this.o,i)),Xs(this.h,r),this.Ya&&x(n,"TYPE","init"),this.O?(x(n,"$req",t),x(n,"SID","null"),r.Z=!0,Ts(r,n,null)):Ts(r,n,t),this.G=2}}else this.G==3&&(e?zr(this,e):this.i.length==0||go(this.h)||zr(this))};function zr(e,t){var n;t?n=t.m:n=e.U++;const s=lt(e.F);x(s,"SID",e.I),x(s,"RID",n),x(s,"AID",e.T),Fe(e,s),e.o&&e.s&&Zs(s,e.o,e.s),n=new xe(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Ao(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Xs(e.h,n),Ts(n,s,t)}function Fe(e,t){e.ia&&Us(e.ia,function(n,s){x(t,s,n)}),e.l&&ao({},function(n,s){x(t,s,n)})}function Ao(e,t,n){n=Math.min(e.i.length,n);var s=e.l?X(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{gh(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Do(e){e.g||e.u||(e.Z=1,zi(e.Ia,e),e.A=0)}function er(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ne(X(e.Ia,e),No(e,e.A)),e.A++,!0)}m.Ia=function(){if(this.u=null,ko(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ne(X(this.eb,this),e)}};m.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Z(10),On(this),ko(this))};function nr(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function ko(e){e.g=new xe(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=lt(e.sa);x(t,"RID","rpc"),x(t,"SID",e.I),x(t,"CI",e.L?"0":"1"),x(t,"AID",e.T),x(t,"TYPE","xmlhttp"),Fe(e,t),e.o&&e.s&&Zs(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Rn(lt(t)),n.s=null,n.P=!0,so(n,e)}m.cb=function(){this.v!=null&&(this.v=null,On(this),er(this),Z(19))};function dn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function _o(e,t){var n=null;if(e.g==t){dn(e),nr(e),e.g=null;var s=2}else if(Cs(e.h,t))n=t.D,mo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Dn(),H(s,new Zi(s,n)),Mn(e)}else Do(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&Eh(e,t)||s==2&&er(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:At(e,5);break;case 4:At(e,10);break;case 3:At(e,6);break;default:At(e,2)}}}function No(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function At(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=X(e.kb,e);n||(n=new kt("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||hn(n,"https"),Rn(n)),ph(n.toString(),s)}else Z(2);e.G=0,e.l&&e.l.va(t),Ro(e),bo(e)}m.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function Ro(e){if(e.G=0,e.la=[],e.l){const t=yo(e.h);(t.length!=0||e.i.length!=0)&&(Mr(e.la,t),Mr(e.la,e.i),e.h.i.length=0,Ps(e.i),e.i.length=0),e.l.ua()}}function xo(e,t,n){var s=n instanceof kt?lt(n):new kt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),ln(s,s.m);else{var r=E.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new kt(null,void 0);s&&hn(i,s),t&&(i.g=t),r&&ln(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&x(s,n,t),x(s,"VER",e.ma),Fe(e,s),s}function Lo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new O(new Oe({jb:!0})):new O(e.ra),t.Ka(e.H),t}function Oo(){}m=Oo.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Ra=function(){};function fn(){if(qt&&!(10<=Number(Pu)))throw Error("Environmental error: no available transport.")}fn.prototype.g=function(e,t){return new nt(e,t)};function nt(e,t){j.call(this),this.g=new So(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!an(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!an(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Jt(this)}z(nt,j);nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Z(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=xo(e,null,e.V),Mn(e)};nt.prototype.close=function(){tr(this.g)};nt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ks(e),e=n);t.i.push(new lh(t.ab++,e)),t.G==3&&Mn(t)};nt.prototype.M=function(){this.g.l=null,delete this.j,tr(this.g),delete this.g,nt.X.M.call(this)};function Mo(e){Qs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Mo,Qs);function Fo(){Ws.call(this),this.status=1}z(Fo,Ws);function Jt(e){this.g=e}z(Jt,Oo);Jt.prototype.xa=function(){H(this.g,"a")};Jt.prototype.wa=function(e){H(this.g,new Mo(e))};Jt.prototype.va=function(e){H(this.g,new Fo)};Jt.prototype.ua=function(){H(this.g,"b")};fn.prototype.createWebChannel=fn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;kn.NO_ERROR=0;kn.TIMEOUT=8;kn.HTTP_ERROR=6;to.COMPLETE="complete";eo.EventType=Re;Re.OPEN="a";Re.CLOSE="b";Re.ERROR="c";Re.MESSAGE="d";j.prototype.listen=j.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.Oa;O.prototype.getLastErrorCode=O.prototype.Ea;O.prototype.getStatus=O.prototype.aa;O.prototype.getResponseJson=O.prototype.Sa;O.prototype.getResponseText=O.prototype.fa;O.prototype.send=O.prototype.da;O.prototype.setWithCredentials=O.prototype.Ka;var Th=function(){return new fn},Ih=function(){return Dn()},rs=kn,Ch=to,Sh=Lt,Gr={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},bh=Oe,Qe=eo,Ah=O;const Qr="@firebase/firestore";/**
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
 */class Q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
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
 */let Zt="9.14.0";/**
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
 */const Rt=new ki("@firebase/firestore");function Wr(){return Rt.logLevel}function y(e,...t){if(Rt.logLevel<=k.DEBUG){const n=t.map(sr);Rt.debug(`Firestore (${Zt}): ${e}`,...n)}}function dt(e,...t){if(Rt.logLevel<=k.ERROR){const n=t.map(sr);Rt.error(`Firestore (${Zt}): ${e}`,...n)}}function Ss(e,...t){if(Rt.logLevel<=k.WARN){const n=t.map(sr);Rt.warn(`Firestore (${Zt}): ${e}`,...n)}}function sr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Zt}) INTERNAL ASSERTION FAILED: `+e;throw dt(t),new Error(t)}function R(e,t){e||I()}function C(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Xt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Po{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Dh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Q.UNAUTHENTICATED))}shutdown(){}}class kh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _h{constructor(t){this.t=t,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new Po(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new Q(t)}}class Nh{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(R(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Rh{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Nh(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lh{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.A=n.token,new xh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Oh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Vo{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Oh(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function _(e,t){return e<t?-1:e>t?1:0}function Kt(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_(this.nanoseconds,t.nanoseconds):_(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new P(0,0))}static max(){return new S(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ee{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ee.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ee?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends Ee{construct(t,n,s){return new L(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new L(n)}static emptyPath(){return new L([])}}const Mh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Ee{construct(t,n,s){return new W(t,n,s)}static isValidIdentifier(t){return Mh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
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
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(L.fromString(t))}static fromName(t){return new v(L.fromString(t).popFirst(5))}static empty(){return new v(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new L(t.slice()))}}function Fh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=S.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new wt(r,v.empty(),t)}function Ph(e){return new wt(e.readTime,e.key,-1)}class wt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new wt(S.min(),v.empty(),-1)}static max(){return new wt(S.max(),v.empty(),-1)}}function Vh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:_(e.largestBatchId,t.largestBatchId))}/**
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
 */const Uh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Pe(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Uh)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(r=>r?d.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new d((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new d((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Ve(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class rr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
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
 */function Xr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function te(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Uo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */rr.at=-1;class U{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new We(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new We(this.root,t,this.comparator,!1)}getReverseIterator(){return new We(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new We(this.root,t,this.comparator,!0)}}class We{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:q.RED,this.left=r!=null?r:q.EMPTY,this.right=i!=null?i:q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new q(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return q.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,r){return this}insert(e,t,n){return new q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class V{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yr(this.data.getIterator())}getIteratorFrom(t){return new Yr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof V)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new V(this.comparator);return n.data=t,n}}class Yr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ot{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new ot([])}unionWith(t){let n=new V(W.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Kt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new J(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const $h=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(e){if(R(!!e),typeof e=="string"){let t=0;const n=$h.exec(e);if(R(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ht(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
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
 */function Bo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $o(e){const t=e.mapValue.fields.__previous_value__;return Bo(t)?$o(t):t}function Te(e){const t=Et(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
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
 */class jh{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ie{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ie("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ie&&t.projectId===this.projectId&&t.database===this.database}}function Fn(e){return e==null}function gn(e){return e===0&&1/e==-1/0}function qh(e){return typeof e=="number"&&Number.isInteger(e)&&!gn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const Xe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Bo(e)?4:Kh(e)?9007199254740991:10:I()}function at(e,t){if(e===t)return!0;const n=xt(e);if(n!==xt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Te(e).isEqual(Te(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Et(s.timestampValue),o=Et(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Ht(s.bytesValue).isEqual(Ht(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return F(s.geoPointValue.latitude)===F(r.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return F(s.integerValue)===F(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=F(s.doubleValue),o=F(r.doubleValue);return i===o?gn(i)===gn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Kt(e.arrayValue.values||[],t.arrayValue.values||[],at);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Xr(i)!==Xr(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!at(i[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ce(e,t){return(e.values||[]).find(n=>at(n,t))!==void 0}function zt(e,t){if(e===t)return 0;const n=xt(e),s=xt(t);if(n!==s)return _(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=F(r.integerValue||r.doubleValue),a=F(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Jr(e.timestampValue,t.timestampValue);case 4:return Jr(Te(e),Te(t));case 5:return _(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Ht(r),a=Ht(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=_(o[c],a[c]);if(u!==0)return u}return _(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=_(F(r.latitude),F(i.latitude));return o!==0?o:_(F(r.longitude),F(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=zt(o[c],a[c]);if(u)return u}return _(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Xe.mapValue&&i===Xe.mapValue)return 0;if(r===Xe.mapValue)return 1;if(i===Xe.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=_(a[h],u[h]);if(l!==0)return l;const g=zt(o[a[h]],c[u[h]]);if(g!==0)return g}return _(a.length,u.length)}(e.mapValue,t.mapValue);default:throw I()}}function Jr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _(e,t);const n=Et(e),s=Et(t),r=_(n.seconds,s.seconds);return r!==0?r:_(n.nanos,s.nanos)}function $t(e){return bs(e)}function bs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Et(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ht(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=bs(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${bs(s.fields[a])}`;return i+"}"}(e.mapValue):I();var t,n}function As(e){return!!e&&"integerValue"in e}function ir(e){return!!e&&"arrayValue"in e}function Zr(e){return!!e&&"nullValue"in e}function ti(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Je(e){return!!e&&"mapValue"in e}function ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return te(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ce(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Kh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Je(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ce(n)}setAll(t){let n=W.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ce(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Je(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Je(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){te(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new st(ce(this.value))}}function jo(e){const t=[];return te(e.fields,(n,s)=>{const r=new W([n]);if(Je(s)){const i=jo(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new ot(t)}/**
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
 */class K{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new K(t,0,S.min(),S.min(),st.empty(),0)}static newFoundDocument(t,n,s){return new K(t,1,n,S.min(),s,0)}static newNoDocument(t,n){return new K(t,2,n,S.min(),st.empty(),0)}static newUnknownDocument(t,n){return new K(t,3,n,S.min(),st.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof K&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new K(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hh{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function ei(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Hh(e,t,n,s,r,i,o)}function or(e){const t=C(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+$t(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Fn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>$t(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>$t(s)).join(",")),t.ht=n}return t.ht}function zh(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${$t(s.value)}`;var s}).join(", ")}]`),Fn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>$t(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>$t(n)).join(",")),`Target(${t})`}function ar(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!tl(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!at(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!si(e.startAt,t.startAt)&&si(e.endAt,t.endAt)}function Ds(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class tt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,s):new Gh(t,n,s):n==="array-contains"?new Xh(t,s):n==="in"?new Yh(t,s):n==="not-in"?new Jh(t,s):n==="array-contains-any"?new Zh(t,s):new tt(t,n,s)}static lt(t,n,s){return n==="in"?new Qh(t,s):new Wh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(zt(n,this.value)):n!==null&&xt(this.value)===xt(n)&&this.ft(zt(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Gh extends tt{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.ft(n)}}class Qh extends tt{constructor(t,n){super(t,"in",n),this.keys=qo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Wh extends tt{constructor(t,n){super(t,"not-in",n),this.keys=qo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function qo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class Xh extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ir(n)&&Ce(n.arrayValue,this.value)}}class Yh extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ce(this.value.arrayValue,n)}}class Jh extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ce(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ce(this.value.arrayValue,n)}}class Zh extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ir(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ce(this.value.arrayValue,s))}}class pn{constructor(t,n){this.position=t,this.inclusive=n}}class ue{constructor(t,n="asc"){this.field=t,this.dir=n}}function tl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ni(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=zt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function si(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!at(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Pn{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function el(e,t,n,s,r,i,o,a){return new Pn(e,t,n,s,r,i,o,a)}function Ko(e){return new Pn(e)}function ri(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function nl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function sl(e){for(const t of e.filters)if(t.dt())return t.field;return null}function rl(e){return e.collectionGroup!==null}function Se(e){const t=C(e);if(t._t===null){t._t=[];const n=sl(t),s=nl(t);if(n!==null&&s===null)n.isKeyField()||t._t.push(new ue(n)),t._t.push(new ue(W.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new ue(W.keyField(),i))}}}return t._t}function ft(e){const t=C(e);if(!t.wt)if(t.limitType==="F")t.wt=ei(t.path,t.collectionGroup,Se(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Se(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new ue(i.field,o))}const s=t.endAt?new pn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pn(t.startAt.position,t.startAt.inclusive):null;t.wt=ei(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.wt}function ks(e,t,n){return new Pn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Vn(e,t){return ar(ft(e),ft(t))&&e.limitType===t.limitType}function Ho(e){return`${or(ft(e))}|lt:${e.limitType}`}function _s(e){return`Query(target=${zh(ft(e))}; limitType=${e.limitType})`}function cr(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):v.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ni(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Se(n),s)||n.endAt&&!function(r,i,o){const a=ni(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Se(n),s))}(e,t)}function il(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function zo(e){return(t,n)=>{let s=!1;for(const r of Se(e)){const i=ol(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ol(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?zt(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function Go(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gn(t)?"-0":t}}function Qo(e){return{integerValue:""+e}}function al(e,t){return qh(t)?Qo(t):Go(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Un{constructor(){this._=void 0}}function cl(e,t,n){return e instanceof mn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof be?Xo(e,t):e instanceof Ae?Yo(e,t):function(s,r){const i=Wo(s,r),o=ii(i)+ii(s.yt);return As(i)&&As(s.yt)?Qo(o):Go(s.It,o)}(e,t)}function ul(e,t,n){return e instanceof be?Xo(e,t):e instanceof Ae?Yo(e,t):n}function Wo(e,t){return e instanceof yn?As(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class mn extends Un{}class be extends Un{constructor(t){super(),this.elements=t}}function Xo(e,t){const n=Jo(t);for(const s of e.elements)n.some(r=>at(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ae extends Un{constructor(t){super(),this.elements=t}}function Yo(e,t){let n=Jo(t);for(const s of e.elements)n=n.filter(r=>!at(r,s));return{arrayValue:{values:n}}}class yn extends Un{constructor(t,n){super(),this.It=t,this.yt=n}}function ii(e){return F(e.integerValue||e.doubleValue)}function Jo(e){return ir(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function hl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof be&&s instanceof be||n instanceof Ae&&s instanceof Ae?Kt(n.elements,s.elements,at):n instanceof yn&&s instanceof yn?at(n.yt,s.yt):n instanceof mn&&s instanceof mn}(e.transform,t.transform)}class ll{constructor(t,n){this.version=t,this.transformResults=n}}class ut{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ut}static exists(t){return new ut(void 0,t)}static updateTime(t){return new ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ze(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Bn{}function Zo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ea(e.key,ut.none()):new Ue(e.key,e.data,ut.none());{const n=e.data,s=st.empty();let r=new V(W.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ot(e.key,s,new ot(r.toArray()),ut.none())}}function dl(e,t,n){e instanceof Ue?function(s,r,i){const o=s.value.clone(),a=ai(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ot?function(s,r,i){if(!Ze(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ai(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ta(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function he(e,t,n,s){return e instanceof Ue?function(r,i,o,a){if(!Ze(r.precondition,i))return o;const c=r.value.clone(),u=ci(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ot?function(r,i,o,a){if(!Ze(r.precondition,i))return o;const c=ci(r.fieldTransforms,a,i),u=i.data;return u.setAll(ta(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return Ze(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function fl(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Wo(s.transform,r||null);i!=null&&(n===null&&(n=st.empty()),n.set(s.field,i))}return n||null}function oi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Kt(n,s,(r,i)=>hl(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ue extends Bn{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ot extends Bn{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ta(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function ai(e,t,n){const s=new Map;R(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,ul(o,a,n[r]))}return s}function ci(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,cl(i,o,t))}return s}class ea extends Bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gl extends Bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pl{constructor(t){this.count=t}}/**
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
 */var M,D;function ml(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function na(e){if(e===void 0)return dt("GRPC error has no .code"),f.UNKNOWN;switch(e){case M.OK:return f.OK;case M.CANCELLED:return f.CANCELLED;case M.UNKNOWN:return f.UNKNOWN;case M.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case M.INTERNAL:return f.INTERNAL;case M.UNAVAILABLE:return f.UNAVAILABLE;case M.UNAUTHENTICATED:return f.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case M.NOT_FOUND:return f.NOT_FOUND;case M.ALREADY_EXISTS:return f.ALREADY_EXISTS;case M.PERMISSION_DENIED:return f.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case M.ABORTED:return f.ABORTED;case M.OUT_OF_RANGE:return f.OUT_OF_RANGE;case M.UNIMPLEMENTED:return f.UNIMPLEMENTED;case M.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(D=M||(M={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ee{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){te(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Uo(this.inner)}size(){return this.innerSize}}/**
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
 */const yl=new U(v.comparator);function gt(){return yl}const sa=new U(v.comparator);function oe(...e){let t=sa;for(const n of e)t=t.insert(n.key,n);return t}function ra(e){let t=sa;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Dt(){return le()}function ia(){return le()}function le(){return new ee(e=>e.toString(),(e,t)=>e.isEqual(t))}const vl=new U(v.comparator),wl=new V(v.comparator);function b(...e){let t=wl;for(const n of e)t=t.add(n);return t}const El=new V(_);function oa(){return El}/**
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
 */class $n{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,Be.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new $n(S.min(),r,oa(),gt(),b())}}class Be{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Be(s,n,b(),b(),b())}}/**
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
 */class tn{constructor(t,n,s,r){this.Tt=t,this.removedTargetIds=n,this.key=s,this.Et=r}}class aa{constructor(t,n){this.targetId=t,this.At=n}}class ca{constructor(t,n,s=J.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ui{constructor(){this.Rt=0,this.bt=li(),this.Pt=J.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=b(),n=b(),s=b();return this.bt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new Be(this.Pt,this.vt,t,n,s)}Nt(){this.Vt=!1,this.bt=li()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Tl{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=gt(),this.qt=hi(),this.Kt=new V(_)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const s=this.zt(n);switch(t.state){case 0:this.Ht(n)&&s.Ct(t.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(t.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(t){const n=t.targetId,s=t.At.count,r=this.Xt(n);if(r){const i=r.target;if(Ds(i))if(s===0){const o=new v(i.path);this.jt(n,o,K.newNoDocument(o,S.min()))}else R(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Ds(a.target)){const c=new v(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,K.newNoDocument(c,t))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=b();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(t));const r=new $n(t,n,this.Kt,this.Ut,s);return this.Ut=gt(),this.qt=hi(),this.Kt=new V(_),r}Qt(t,n){if(!this.Ht(t))return;const s=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,s){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let n=this.Lt.get(t);return n||(n=new ui,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new V(_),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new ui),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function hi(){return new U(v.comparator)}function li(){return new U(v.comparator)}/**
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
 */const Il=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Cl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Sl{constructor(t,n){this.databaseId=t,this.gt=n}}function vn(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ua(e,t){return e.gt?t.toBase64():t.toUint8Array()}function bl(e,t){return vn(e,t.toTimestamp())}function ht(e){return R(!!e),S.fromTimestamp(function(t){const n=Et(t);return new P(n.seconds,n.nanos)}(e))}function ur(e,t){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ha(e){const t=L.fromString(e);return R(fa(t)),t}function Ns(e,t){return ur(e.databaseId,t.path)}function is(e,t){const n=ha(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(la(n))}function Rs(e,t){return ur(e.databaseId,t)}function Al(e){const t=ha(e);return t.length===4?L.emptyPath():la(t)}function xs(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function la(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function di(e,t,n){return{name:Ns(e,t),fields:n.value.mapValue.fields}}function Dl(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.gt?(R(u===void 0||typeof u=="string"),J.fromBase64String(u||"")):(R(u===void 0||u instanceof Uint8Array),J.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:na(c.code);return new w(u,c.message||"")}(o);n=new ca(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=is(e,s.document.name),i=ht(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=K.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new tn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=is(e,s.document),i=s.readTime?ht(s.readTime):S.min(),o=K.newNoDocument(r,i),a=s.removedTargetIds||[];n=new tn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=is(e,s.document),i=s.removedTargetIds||[];n=new tn([],i,r,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new pl(r),o=s.targetId;n=new aa(o,i)}}return n}function kl(e,t){let n;if(t instanceof Ue)n={update:di(e,t.key,t.value)};else if(t instanceof ea)n={delete:Ns(e,t.key)};else if(t instanceof Ot)n={update:di(e,t.key,t.data),updateMask:Vl(t.fieldMask)};else{if(!(t instanceof gl))return I();n={verify:Ns(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof mn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof be)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ae)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yn)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:bl(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:I()}(e,t.precondition)),n}function _l(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?ht(s.updateTime):ht(r);return i.isEqual(S.min())&&(i=ht(r)),new ll(i,s.transformResults||[])}(n,t))):[]}function Nl(e,t){return{documents:[Rs(e,t.path)]}}function Rl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Rs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Rs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(ti(l.value))return{unaryFilter:{field:Pt(l.field),op:"IS_NAN"}};if(Zr(l.value))return{unaryFilter:{field:Pt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(ti(l.value))return{unaryFilter:{field:Pt(l.field),op:"IS_NOT_NAN"}};if(Zr(l.value))return{unaryFilter:{field:Pt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pt(l.field),op:Ml(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Pt(h.field),direction:Ol(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||Fn(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function xl(e){let t=Al(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=da(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new ue(Ut(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Fn(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,g=h.values||[];return new pn(g,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,g=h.values||[];return new pn(g,l)}(n.endAt)),el(t,r,o,i,a,"F",c,u)}function Ll(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function da(e){return e?e.unaryFilter!==void 0?[Pl(e)]:e.fieldFilter!==void 0?[Fl(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>da(t)).reduce((t,n)=>t.concat(n)):I():[]}function Ol(e){return Il[e]}function Ml(e){return Cl[e]}function Pt(e){return{fieldPath:e.canonicalString()}}function Ut(e){return W.fromServerFormat(e.fieldPath)}function Fl(e){return tt.create(Ut(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Pl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ut(e.unaryFilter.field);return tt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ut(e.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ut(e.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ut(e.unaryFilter.field);return tt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Vl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function fa(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Ul{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&dl(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=he(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=he(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=ia();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Zo(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),b())}isEqual(t){return this.batchId===t.batchId&&Kt(this.mutations,t.mutations,(n,s)=>oi(n,s))&&Kt(this.baseMutations,t.baseMutations,(n,s)=>oi(n,s))}}class hr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){R(t.mutations.length===s.length);let r=vl;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new hr(t,n,s,r)}}/**
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
 */class Bl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class _t{constructor(t,n,s,r,i=S.min(),o=S.min(),a=J.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new _t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class $l{constructor(t){this.re=t}}function jl(e){const t=xl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ks(t,t.limit,"L"):t}/**
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
 */class ql{constructor(){this.Ye=new Kl}addToCollectionParentIndex(t,n){return this.Ye.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(wt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(wt.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class Kl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new V(L.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new V(L.comparator)).toArray()}}/**
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
 */class Gt{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Gt(0)}static vn(){return new Gt(-1)}}/**
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
 */class Hl{constructor(){this.changes=new ee(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,K.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class zl{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Gl{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&he(s.mutation,r,ot.empty(),P.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,b()).next(()=>s))}getLocalViewOfDocuments(t,n,s=b()){const r=Dt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=oe();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Dt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,b()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=gt();const o=le(),a=le();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ot)?i=i.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),he(h.mutation,u,h.mutation.getFieldMask(),P.now()))}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new zl(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=le();let r=new U((o,a)=>o-a),i=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||ot.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(r.get(a.batchId)||b()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=ia();h.forEach(g=>{if(!i.has(g)){const p=Zo(n.get(g),s.get(g));p!==null&&l.set(g,p),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):rl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):d.resolve(Dt());let a=-1,c=i;return o.next(u=>d.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?d.resolve():this.getBaseDocument(t,h,l).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,b())).next(h=>({batchId:a,changes:ra(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(s=>{let r=oe();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=oe();return this.indexManager.getCollectionParents(t,r).next(o=>d.forEach(o,a=>{const c=function(u,h){return new Pn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,K.newInvalidDocument(u)))});let o=oe();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&he(u.mutation,c,ot.empty(),P.now()),cr(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):d.resolve(K.newInvalidDocument(n))}}/**
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
 */class Ql{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return d.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:jl(s.bundledQuery),readTime:ht(s.readTime)}}(n)),d.resolve()}}/**
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
 */class Wl{constructor(){this.overlays=new U(v.comparator),this.es=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Dt();return d.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ue(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const r=Dt(),i=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return d.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new U((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Dt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Dt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return d.resolve(a)}ue(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Bl(n,s));let i=this.es.get(n);i===void 0&&(i=b(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class lr{constructor(){this.ns=new V(B.ss),this.rs=new V(B.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new B(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new B(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new v(new L([])),s=new B(n,t),r=new B(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new v(new L([])),s=new B(n,t),r=new B(n,t+1);let i=b();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new B(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class B{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return v.comparator(t.key,n.key)||_(t._s,n._s)}static os(t,n){return _(t._s,n._s)||v.comparator(t.key,n.key)}}/**
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
 */class Xl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new V(B.ss)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ul(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new B(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new B(n,0),r=new B(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new V(_);return n.forEach(r=>{const i=new B(r,0),o=new B(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),d.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new B(new v(i),0);let a=new V(_);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),d.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){R(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return d.forEach(n.mutations,r=>{const i=new B(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new B(n,0),r=this.gs.firstAfterOrEqual(s);return d.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Yl{constructor(t){this.Es=t,this.docs=new U(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():K.newInvalidDocument(n))}getEntries(t,n){let s=gt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():K.newInvalidDocument(r))}),d.resolve(s)}getAllFromCollection(t,n,s){let r=gt();const i=new v(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Vh(Ph(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return d.resolve(r)}getAllFromCollectionGroup(t,n,s,r){I()}As(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Jl(this)}getSize(t){return d.resolve(this.size)}}class Jl extends Hl{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class Zl{constructor(t){this.persistence=t,this.Rs=new ee(n=>or(n),ar),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.bs=0,this.Ps=new lr,this.targetCount=0,this.vs=Gt.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),d.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Gt(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.Dn(n),d.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),d.waitFor(i).next(()=>r)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.Ps.containsKey(n))}}/**
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
 */class td{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new rr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Zl(this),this.indexManager=new ql,this.remoteDocumentCache=function(s){return new Yl(s)}(s=>this.referenceDelegate.xs(s)),this.It=new $l(n),this.Ns=new Ql(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Wl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new Xl(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const r=new ed(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(t,n){return d.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class ed extends Bh{constructor(t){super(),this.currentSequenceNumber=t}}class dr{constructor(t){this.persistence=t,this.Fs=new lr,this.$s=null}static Bs(t){return new dr(t)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),d.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Ls,s=>{const r=v.fromPath(s);return this.Us(t,r).next(i=>{i||n.removeEntry(r,S.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return d.or([()=>d.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class fr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=b(),r=b();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new fr(t,n.fromCache,s,r)}}/**
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
 */class nd{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Mi(t,n))}ki(t,n){if(ri(n))return d.resolve(null);let s=ft(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ks(n,null,"F"),s=ft(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=b(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,ks(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,s,r){return ri(n)||r.isEqual(S.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(t,n):(Wr()<=k.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_s(n)),this.Bi(t,o,n,Fh(r,-1)))})}Fi(t,n){let s=new V(zo(t));return n.forEach((r,i)=>{cr(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,n){return Wr()<=k.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",_s(n)),this.Ni.getDocumentsMatchingQuery(t,n,wt.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class sd{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.It=r,this.Ui=new U(_),this.qi=new ee(i=>or(i),ar),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gl(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function rd(e,t,n,s){return new sd(e,t,n,s)}async function ga(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=b();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function id(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let g=d.resolve();return l.forEach(p=>{g=g.next(()=>u.getEntry(a,p)).next(T=>{const A=c.docVersions.get(p);R(A!==null),T.version.compareTo(A)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=b();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function pa(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function od(e,t){const n=C(e),s=t.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];t.targetChanges.forEach((h,l)=>{const g=r.get(l);if(!g)return;a.push(n.Cs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(i,h.addedDocuments,l)));let p=g.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(l)?p=p.withResumeToken(J.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),r=r.insert(l,p),function(T,A,N){return T.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(g,p,h)&&a.push(n.Cs.updateTargetData(i,p))});let c=gt(),u=b();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(ad(i,o,t.documentUpdates).next(h=>{c=h.Wi,u=h.zi})),!s.isEqual(S.min())){const h=n.Cs.getLastRemoteSnapshotVersion(i).next(l=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=r,i))}function ad(e,t,n){let s=b(),r=b();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=gt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function cd(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function ud(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,d.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new _t(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function Ls(e,t,n){const s=C(e),r=s.Ui.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ve(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ui=s.Ui.remove(t),s.qi.delete(r.target)}function fi(e,t,n){const s=C(e);let r=S.min(),i=b();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=C(a),l=h.qi.get(u);return l!==void 0?d.resolve(h.Ui.get(l)):h.Cs.getTargetData(c,u)}(s,o,ft(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:S.min(),n?i:b())).next(a=>(hd(s,il(t),a),{documents:a,Hi:i})))}function hd(e,t,n){let s=e.Ki.get(t)||S.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class gi{constructor(){this.activeTargetIds=oa()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ld{constructor(){this.Lr=new gi,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,s){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new gi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class dd{qr(t){}shutdown(){}}/**
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
 */class pi{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const fd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gd{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class pd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,r,i){const o=this.ho(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(t,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw Ss("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,r,i,o){return this.ao(t,n,s,r,i)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Zt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ho(t,n){const s=fd[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,r){return new Promise((i,o)=>{const a=new Ah;a.setWithCredentials(!0),a.listenOnce(Ch.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case rs.NO_ERROR:const h=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(h)),i(h);break;case rs.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case rs.HTTP_ERROR:const l=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let g=a.getResponseJson();Array.isArray(g)&&(g=g[0]);const p=(u=g)===null||u===void 0?void 0:u.error;if(p&&p.status&&p.message){const T=function(A){const N=A.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(N)>=0?N:f.UNKNOWN}(p.status);o(new w(T,p.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Th(),o=Ih(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new bh({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");y("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const g=new gd({Hr:T=>{l?y("Connection","Not sending because WebChannel is closed:",T):(h||(y("Connection","Opening WebChannel transport."),u.open(),h=!0),y("Connection","WebChannel sending:",T),u.send(T))},Jr:()=>u.close()}),p=(T,A,N)=>{T.listen(A,et=>{try{N(et)}catch(G){setTimeout(()=>{throw G},0)}})};return p(u,Qe.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),p(u,Qe.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),g.io())}),p(u,Qe.EventType.ERROR,T=>{l||(l=!0,Ss("Connection","WebChannel transport errored:",T),g.io(new w(f.UNAVAILABLE,"The operation could not be completed")))}),p(u,Qe.EventType.MESSAGE,T=>{var A;if(!l){const N=T.data[0];R(!!N);const et=N,G=et.error||((A=et[0])===null||A===void 0?void 0:A.error);if(G){y("Connection","WebChannel received error:",G);const qe=G.status;let Ft=function(Ya){const Ar=M[Ya];if(Ar!==void 0)return na(Ar)}(qe),Ke=G.message;Ft===void 0&&(Ft=f.INTERNAL,Ke="Unknown error status: "+qe+" with message "+G.message),l=!0,g.io(new w(Ft,Ke)),u.close()}else y("Connection","WebChannel received:",N),g.ro(N)}}),p(o,Sh.STAT_EVENT,T=>{T.stat===Gr.PROXY?y("Connection","Detected buffering proxy"):T.stat===Gr.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.so()},0),g}}function os(){return typeof document<"u"?document:null}/**
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
 */function jn(e){return new Sl(e,!0)}class ma{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class ya{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ma(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class md extends ya{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=Dl(this.It,t),s=function(r){if(!("targetChange"in r))return S.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?S.min():i.readTime?ht(i.readTime):S.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=xs(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Ds(a)?{documents:Nl(r,a)}:{query:Rl(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ua(r,i.resumeToken):i.snapshotVersion.compareTo(S.min())>0&&(o.readTime=vn(r,i.snapshotVersion.toTimestamp())),o}(this.It,t);const s=Ll(this.It,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=xs(this.It),n.removeTarget=t,this.Bo(n)}}class yd extends ya{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=_l(t.writeResults,t.commitTime),s=ht(t.commitTime);return this.listener.Zo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=xs(this.It),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>kl(this.It,s))};this.Bo(n)}}/**
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
 */class vd extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(f.UNKNOWN,r.toString())})}_o(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class wd{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(dt(n),this.ou=!1):y("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Ed{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Mt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c._u.add(4),await $e(c),c.gu.set("Unknown"),c._u.delete(4),await qn(c)}(this))})}),this.gu=new wd(s,r)}}async function qn(e){if(Mt(e))for(const t of e.wu)await t(!0)}async function $e(e){for(const t of e.wu)await t(!1)}function va(e,t){const n=C(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),mr(n)?pr(n):ne(n).ko()&&gr(n,t))}function wa(e,t){const n=C(e),s=ne(n);n.du.delete(t),s.ko()&&Ea(n,t),n.du.size===0&&(s.ko()?s.Fo():Mt(n)&&n.gu.set("Unknown"))}function gr(e,t){e.yu.Mt(t.targetId),ne(e).zo(t)}function Ea(e,t){e.yu.Mt(t),ne(e).Ho(t)}function pr(e){e.yu=new Tl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),ne(e).start(),e.gu.uu()}function mr(e){return Mt(e)&&!ne(e).No()&&e.du.size>0}function Mt(e){return C(e)._u.size===0}function Ta(e){e.yu=void 0}async function Td(e){e.du.forEach((t,n)=>{gr(e,t)})}async function Id(e,t){Ta(e),mr(e)?(e.gu.hu(t),pr(e)):e.gu.set("Unknown")}async function Cd(e,t,n){if(e.gu.set("Online"),t instanceof ca&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await wn(e,s)}else if(t instanceof tn?e.yu.Gt(t):t instanceof aa?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(S.min()))try{const s=await pa(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(J.EMPTY_BYTE_STRING,c.snapshotVersion)),Ea(r,a);const u=new _t(c.target,a,1,c.sequenceNumber);gr(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await wn(e,s)}}async function wn(e,t,n){if(!Ve(t))throw t;e._u.add(1),await $e(e),e.gu.set("Offline"),n||(n=()=>pa(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await qn(e)})}function Ia(e,t){return t().catch(n=>wn(e,n,t))}async function Kn(e){const t=C(e),n=Tt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Sd(t);)try{const r=await cd(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,bd(t,r)}catch(r){await wn(t,r)}Ca(t)&&Sa(t)}function Sd(e){return Mt(e)&&e.fu.length<10}function bd(e,t){e.fu.push(t);const n=Tt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Ca(e){return Mt(e)&&!Tt(e).No()&&e.fu.length>0}function Sa(e){Tt(e).start()}async function Ad(e){Tt(e).eu()}async function Dd(e){const t=Tt(e);for(const n of e.fu)t.Xo(n.mutations)}async function kd(e,t,n){const s=e.fu.shift(),r=hr.from(s,t,n);await Ia(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Kn(e)}async function _d(e,t){t&&Tt(e).Yo&&await async function(n,s){if(r=s.code,ml(r)&&r!==f.ABORTED){const i=n.fu.shift();Tt(n).Mo(),await Ia(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Kn(n)}var r}(e,t),Ca(e)&&Sa(e)}async function mi(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Mt(n);n._u.add(3),await $e(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await qn(n)}async function Nd(e,t){const n=C(e);t?(n._u.delete(2),await qn(n)):t||(n._u.add(2),await $e(n),n.gu.set("Unknown"))}function ne(e){return e.pu||(e.pu=function(t,n,s){const r=C(t);return r.su(),new md(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(e.datastore,e.asyncQueue,{Yr:Td.bind(null,e),Zr:Id.bind(null,e),Wo:Cd.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),mr(e)?pr(e):e.gu.set("Unknown")):(await e.pu.stop(),Ta(e))})),e.pu}function Tt(e){return e.Iu||(e.Iu=function(t,n,s){const r=C(t);return r.su(),new yd(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(e.datastore,e.asyncQueue,{Yr:Ad.bind(null,e),Zr:_d.bind(null,e),tu:Dd.bind(null,e),Zo:kd.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Kn(e)):(await e.Iu.stop(),e.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class yr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new yr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vr(e,t){if(dt("AsyncQueue",`${t}: ${e}`),Ve(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class jt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=oe(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new jt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new jt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class yi{constructor(){this.Tu=new U(v.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):I():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Qt{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qt(t,n,jt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Vn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Rd{constructor(){this.Au=void 0,this.listeners=[]}}class xd{constructor(){this.queries=new ee(t=>Ho(t),Vn),this.onlineState="Unknown",this.Ru=new Set}}async function Ld(e,t){const n=C(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Rd),r)try{i.Au=await n.onListen(s)}catch(o){const a=vr(o,`Initialization of query '${_s(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&wr(n)}async function Od(e,t){const n=C(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Md(e,t){const n=C(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&wr(n)}function Fd(e,t,n){const s=C(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function wr(e){e.Ru.forEach(t=>{t.next()})}class Pd{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Qt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Qt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
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
 */class ba{constructor(t){this.key=t}}class Aa{constructor(t){this.key=t}}class Vd{constructor(t,n){this.query=t,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=b(),this.mutatedKeys=b(),this.Gu=zo(t),this.Qu=new jt(this.Gu)}get ju(){return this.Uu}Wu(t,n){const s=n?n.zu:new yi,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const g=r.get(h),p=cr(this.query,l)?l:null,T=!!g&&this.mutatedKeys.has(g.key),A=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let N=!1;g&&p?g.data.isEqual(p.data)?T!==A&&(s.track({type:3,doc:p}),N=!0):this.Hu(g,p)||(s.track({type:2,doc:p}),N=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!g&&p?(s.track({type:0,doc:p}),N=!0):g&&!p&&(s.track({type:1,doc:g}),N=!0,(c||u)&&(a=!0)),N&&(p?(o=o.add(p),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((u,h)=>function(l,g){const p=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return p(l)-p(g)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Qt(this.query,t.Qu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new yi,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=b(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new Aa(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new ba(s))}),n}tc(t){this.Uu=t.Hi,this.Ku=b();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Qt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Ud{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Bd{constructor(t){this.key=t,this.nc=!1}}class $d{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ee(a=>Ho(a),Vn),this.rc=new Map,this.oc=new Set,this.uc=new U(v.comparator),this.cc=new Map,this.ac=new lr,this.hc={},this.lc=new Map,this.fc=Gt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function jd(e,t){const n=Jd(e);let s,r;const i=n.ic.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await ud(n.localStore,ft(t));n.isPrimaryClient&&va(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await qd(n,t,s,a==="current",o.resumeToken)}return r}async function qd(e,t,n,s,r){e._c=(l,g,p)=>async function(T,A,N,et){let G=A.view.Wu(N);G.$i&&(G=await fi(T.localStore,A.query,!1).then(({documents:Ke})=>A.view.Wu(Ke,G)));const qe=et&&et.targetChanges.get(A.targetId),Ft=A.view.applyChanges(G,T.isPrimaryClient,qe);return wi(T,A.targetId,Ft.Xu),Ft.snapshot}(e,l,g,p);const i=await fi(e.localStore,t,!0),o=new Vd(t,i.Hi),a=o.Wu(i.documents),c=Be.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);wi(e,n,u.Xu);const h=new Ud(t,n,o);return e.ic.set(t,h),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function Kd(e,t){const n=C(e),s=n.ic.get(t),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Vn(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ls(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),wa(n.remoteStore,s.targetId),Os(n,s.targetId)}).catch(Pe)):(Os(n,s.targetId),await Ls(n.localStore,s.targetId,!0))}async function Hd(e,t,n){const s=Zd(e);try{const r=await function(i,o){const a=C(i),c=P.now(),u=o.reduce((g,p)=>g.add(p.key),b());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let p=gt(),T=b();return a.Gi.getEntries(g,u).next(A=>{p=A,p.forEach((N,et)=>{et.isValidDocument()||(T=T.add(N))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,p)).next(A=>{h=A;const N=[];for(const et of o){const G=fl(et,h.get(et.key).overlayedDocument);G!=null&&N.push(new Ot(et.key,G,jo(G.value.mapValue),ut.exists(!0)))}return a.mutationQueue.addMutationBatch(g,c,N,o)}).next(A=>{l=A;const N=A.applyToLocalDocumentSet(h,T);return a.documentOverlayCache.saveOverlays(g,A.batchId,N)})}).then(()=>({batchId:l.batchId,changes:ra(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new U(_)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await je(s,r.changes),await Kn(s.remoteStore)}catch(r){const i=vr(r,"Failed to persist write");n.reject(i)}}async function Da(e,t){const n=C(e);try{const s=await od(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(R(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?R(o.nc):r.removedDocuments.size>0&&(R(o.nc),o.nc=!1))}),await je(n,s,t)}catch(s){await Pe(s)}}function vi(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=C(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.bu(o)&&(c=!0)}),c&&wr(a)}(s.eventManager,t),r.length&&s.sc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function zd(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.cc.get(t),i=r&&r.key;if(i){let o=new U(v.comparator);o=o.insert(i,K.newNoDocument(i,S.min()));const a=b().add(i),c=new $n(S.min(),new Map,new V(_),o,a);await Da(s,c),s.uc=s.uc.remove(i),s.cc.delete(t),Er(s)}else await Ls(s.localStore,t,!1).then(()=>Os(s,t,n)).catch(Pe)}async function Gd(e,t){const n=C(e),s=t.batch.batchId;try{const r=await id(n.localStore,t);_a(n,s,null),ka(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await je(n,r)}catch(r){await Pe(r)}}async function Qd(e,t,n){const s=C(e);try{const r=await function(i,o){const a=C(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(R(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);_a(s,t,n),ka(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await je(s,r)}catch(r){await Pe(r)}}function ka(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function _a(e,t,n){const s=C(e);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.hc[s.currentUser.toKey()]=r}}function Os(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||Na(e,s)})}function Na(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(wa(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Er(e))}function wi(e,t,n){for(const s of n)s instanceof ba?(e.ac.addReference(s.key,t),Wd(e,s)):s instanceof Aa?(y("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||Na(e,s.key)):I()}function Wd(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.oc.add(s),Er(e))}function Er(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new v(L.fromString(t)),s=e.fc.next();e.cc.set(s,new Bd(n)),e.uc=e.uc.insert(n,s),va(e.remoteStore,new _t(ft(Ko(n.path)),s,2,rr.at))}}async function je(e,t,n){const s=C(e),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=fr.Ci(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=C(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(c,l=>d.forEach(l.Si,g=>u.persistence.referenceDelegate.addReference(h,l.targetId,g)).next(()=>d.forEach(l.Di,g=>u.persistence.referenceDelegate.removeReference(h,l.targetId,g)))))}catch(h){if(!Ve(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const g=u.Ui.get(l),p=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(p);u.Ui=u.Ui.insert(l,T)}}}(s.localStore,i))}async function Xd(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await ga(n.localStore,t);n.currentUser=t,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await je(n,s.ji)}}function Yd(e,t){const n=C(e),s=n.cc.get(t);if(s&&s.nc)return b().add(s.key);{let r=b();const i=n.rc.get(t);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Jd(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Da.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zd.bind(null,t),t.sc.Wo=Md.bind(null,t.eventManager),t.sc.wc=Fd.bind(null,t.eventManager),t}function Zd(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Gd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qd.bind(null,t),t}class tf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=jn(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return rd(this.persistence,new nd,t.initialUser,this.It)}yc(t){return new td(dr.Bs,this.It)}gc(t){return new ld}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ef{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xd.bind(null,this.syncEngine),await Nd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new xd}createDatastore(t){const n=jn(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new pd(r));var r;return function(i,o,a,c){return new vd(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>vi(this.syncEngine,a,0),o=pi.C()?new pi:new dd,new Ed(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new $d(s,r,i,o,a,c);return u&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);y("RemoteStore","RemoteStore shutting down."),n._u.add(5),await $e(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Ra(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nf(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ei(e){if(!v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ti(e){if(v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Tr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function De(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tr(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Ii=new Map;class Ci{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,nf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Hn{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ci({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ci(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Dh;switch(n.type){case"gapi":const s=n.client;return new Rh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ii.get(t);n&&(y("ComponentProvider","Removing Datastore"),Ii.delete(t),n.terminate())}(this),Promise.resolve()}}function sf(e,t,n,s={}){var r;const i=(e=De(e,Hn))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Ss("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Q.MOCK_USER;else{o=lc(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new w(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Q(c)}e._authCredentials=new kh(new Po(o,a))}}/**
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
 */class rt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rt(this.firestore,t,this._key)}}class zn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new zn(this.firestore,t,this._query)}}class vt extends zn{constructor(t,n,s){super(t,n,Ko(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rt(this.firestore,null,new v(t))}withConverter(t){return new vt(this.firestore,t,this._path)}}function xa(e,t,...n){if(e=de(e),Ra("collection","path",t),e instanceof Hn){const s=L.fromString(t,...n);return Ti(s),new vt(e,null,s)}{if(!(e instanceof rt||e instanceof vt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return Ti(s),new vt(e.firestore,null,s)}}function La(e,t,...n){if(e=de(e),arguments.length===1&&(t=Vo.R()),Ra("doc","path",t),e instanceof Hn){const s=L.fromString(t,...n);return Ei(s),new rt(e,null,new v(s))}{if(!(e instanceof rt||e instanceof vt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return Ei(s),new rt(e.firestore,e instanceof vt?e.converter:null,new v(s))}}/**
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
 *//**
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
 */class rf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):dt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class of{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Q.UNAUTHENTICATED,this.clientId=Vo.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=vr(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function af(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ga(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function cf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await uf(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>mi(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>mi(t.remoteStore,i)),e.onlineComponents=t}async function uf(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await af(e,new tf)),e.offlineComponents}async function Oa(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await cf(e,new ef)),e.onlineComponents}function hf(e){return Oa(e).then(t=>t.syncEngine)}async function lf(e){const t=await Oa(e),n=t.eventManager;return n.onListen=jd.bind(null,t.syncEngine),n.onUnlisten=Kd.bind(null,t.syncEngine),n}function df(e,t,n={}){const s=new yt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new rf({next:l=>{i.enqueueAndForget(()=>Od(r,h)),l.fromCache&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new Pd(o,u,{includeMetadataChanges:!0,Nu:!0});return Ld(r,h)}(await lf(e),e.asyncQueue,t,n,s)),s.promise}class ff{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ma(this,"async_queue_retry"),this.Wc=()=>{const n=os();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=os();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=os();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new yt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Ve(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw dt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const r=yr.createAndSchedule(this,t,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&I()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}class Ir extends Hn{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new ff,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fa(this),this._firestoreClient.terminate()}}function gf(e,t){const n=typeof e=="object"?e:fu(),s=typeof e=="string"?e:t||"(default)",r=uu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=cc("firestore");i&&sf(r,...i)}return r}function Ma(e){return e._firestoreClient||Fa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Fa(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new jh(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new of(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 *//**
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
 */class Wt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wt(J.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Wt(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Cr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Pa{constructor(t){this._methodName=t}}/**
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
 */class Sr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _(this._lat,t._lat)||_(this._long,t._long)}}/**
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
 */const pf=/^__.*__$/;class mf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ot(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ue(t,this.data,n,this.fieldTransforms)}}function Va(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class br{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new br(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.ua(t),r}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return En(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(Va(this.sa)&&pf.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class yf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=s||jn(t)}da(t,n,s,r=!1){return new br({sa:t,methodName:n,fa:s,path:W.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function vf(e){const t=e._freezeSettings(),n=jn(e._databaseId);return new yf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wf(e,t,n,s,r,i={}){const o=e.da(i.merge||i.mergeFields?2:0,t,n,r);ja("Data must be an object, but it was:",o,s);const a=Ba(s,o);let c,u;if(i.merge)c=new ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const g=Ef(t,l,n);if(!o.contains(g))throw new w(f.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);If(h,g)||h.push(g)}c=new ot(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new mf(new st(a),c,u)}function Ua(e,t){if($a(e=de(e)))return ja("Unsupported field value:",t,e),Ba(e,t);if(e instanceof Pa)return function(n,s){if(!Va(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ua(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=de(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return al(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=P.fromDate(n);return{timestampValue:vn(s.It,r)}}if(n instanceof P){const r=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vn(s.It,r)}}if(n instanceof Sr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Wt)return{bytesValue:ua(s.It,n._byteString)};if(n instanceof rt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ur(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Tr(n)}`)}(e,t)}function Ba(e,t){const n={};return Uo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):te(e,(s,r)=>{const i=Ua(r,t.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function $a(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof Sr||e instanceof Wt||e instanceof rt||e instanceof Pa)}function ja(e,t,n){if(!$a(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Tr(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Ef(e,t,n){if((t=de(t))instanceof Cr)return t._internalPath;if(typeof t=="string")return qa(e,t);throw En("Field path arguments must be of type string or ",e,!1,void 0,n)}const Tf=new RegExp("[~\\*/\\[\\]]");function qa(e,t,n){if(t.search(Tf)>=0)throw En(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Cr(...t.split("."))._internalPath}catch{throw En(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function En(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new w(f.INVALID_ARGUMENT,a+e+c)}function If(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Ka{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ha("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cf extends Ka{data(){return super.data()}}function Ha(e,t){return typeof t=="string"?qa(e,t):t instanceof Cr?t._internalPath:t._delegate._internalPath}/**
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
 */function Sf(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class bf{convertValue(t,n="none"){switch(xt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return te(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Sr(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=$o(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Te(t));default:return null}}convertTimestamp(t){const n=Et(t);return new P(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=L.fromString(t);R(fa(s));const r=new Ie(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(n)||dt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Af(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
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
 */class Ye{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Df extends Ka{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new en(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Ha("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class en extends Df{data(t={}){return super.data(t)}}class kf{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ye(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new en(this._firestore,this._userDataWriter,s.key,s,new Ye(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new en(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ye(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new en(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ye(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:_f(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _f(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}class Nf extends bf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function za(e){e=De(e,zn);const t=De(e.firestore,Ir),n=Ma(t),s=new Nf(t);return Sf(e._query),df(n,e._query).then(r=>new kf(t,s,e,r))}function Ga(e,t,n){e=De(e,rt);const s=De(e.firestore,Ir),r=Af(e.converter,t,n);return Rf(s,[wf(vf(s),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,ut.none())])}function Rf(e,t){return function(n,s){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>Hd(await hf(n),s,r)),r.promise}(Ma(e),t)}(function(e,t=!0){(function(n){Zt=n})(du),rn(new fe("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ir(new _h(n.getProvider("auth-internal")),new Lh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ie(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Bt(Qr,"3.7.3",e),Bt(Qr,"3.7.3","esm2017")})();const xf=(e,t)=>{let n='<div class="category">',s=`<h2>${e}</h2>`;n+=s;let r="<ul>";return t.forEach(i=>{let o=`<li class="list-before">
                <a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.name}</a>
            </li>`;r+=o}),r+="</ul>",n+=r,n+="</div>",n},Lf={apiKey:"AIzaSyAczHi6KA79GB20v5OnGUZxxCB5SqFUXfk",authDomain:"useful-links-fa1cf.firebaseapp.com",databaseURL:"https://useful-links-fa1cf-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"useful-links-fa1cf",storageBucket:"useful-links-fa1cf.appspot.com",messagingSenderId:"313872860667",appId:"1:313872860667:web:dab989a46c772e868ff75e"},Of=Ri(Lf),Qa=gf(Of),Wa=xa(Qa,"Categories"),Xa=xa(Qa,"Links"),Mf=async()=>{(await za(Wa)).docs.map(n=>n.data()).forEach(n=>{$("#category").append(`<option value="${n.category}">${n.category}</option>`)}),$("#category").trigger("change")},Ff=async()=>{const n=(await za(Xa)).docs.map(s=>s.data()).reduce((s,r)=>{const i=s[r.category]||[];return i.push(r),s[r.category]=i,s},{});for(const[s,r]of Object.entries(n))$(".main").append(xf(s,r));$(".main").isotope({itemSelector:"div"})},Pf=async e=>{await Ga(La(Wa),e)},Vf=async e=>{await Ga(La(Xa),e)};document.addEventListener("DOMContentLoaded",()=>{$("#category").select2({placeholder:"Choose Category",allowClear:!0})});const Uf=document.getElementById("addLinkForm"),Bf=document.getElementById("addCategoryForm"),$f=document.getElementById("openLinkAddForm"),jf=document.getElementById("openCategoryAddForm"),qf=document.getElementById("closeAddLinkForm"),Kf=document.getElementById("closeAddCategoryForm");$f.addEventListener("click",()=>{$("#addLinkFormContainer").fadeIn("fast")});jf.addEventListener("click",()=>{$("#addCategoryFormContainer").fadeIn("fast")});qf.addEventListener("click",()=>{$("#addLinkFormContainer").fadeOut("fast")});Kf.addEventListener("click",()=>{$("#addCategoryFormContainer").fadeOut("fast")});Uf.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(e.target),n=Object.fromEntries(t);"approved"in n&&(n.approved=!0),n.category=$("#category").val(),console.log(n),Vf(n),e.target.reset(),$("#category").val(null).trigger("change")});Bf.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(e.target),n=Object.fromEntries(t);Pf(n),e.target.reset()});Ff();Mf();
