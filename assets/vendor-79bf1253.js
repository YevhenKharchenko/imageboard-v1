/**
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
 */const Oo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},mc=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(n[l],n[f],n[p],n[_])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Oo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):mc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new gc;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const x=c<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class gc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _c=function(e){const t=Oo(e);return Mo.encodeByteArray(t,!0)},Un=function(e){return _c(e).replace(/\./g,"")},yc=function(e){try{return Mo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ec=()=>vc().__FIREBASE_DEFAULTS__,Tc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ic=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&yc(e[1]);return t&&JSON.parse(t)},Ii=()=>{try{return Ec()||Tc()||Ic()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wc=e=>{var t,n;return(n=(t=Ii())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ac=e=>{const t=wc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Fo=()=>{var e;return(e=Ii())===null||e===void 0?void 0:e.config};/**
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
 */class Rc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Cc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Un(JSON.stringify(n)),Un(JSON.stringify(o)),a].join(".")}/**
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
 */function qn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sc(){var e;const t=(e=Ii())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pc(){return!Sc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bo(){try{return typeof indexedDB=="object"}catch{return!1}}function Vc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Dc="FirebaseError";class Ce extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Dc,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?bc(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ce(i,a,r)}}function bc(e,t){return e.replace(Nc,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Nc=/\{\$([^}]+)}/g;function Gr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Vs(s)&&Vs(o)){if(!Gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vs(e){return e!==null&&typeof e=="object"}/**
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
 */function te(e){return e&&e._delegate?e._delegate:e}class We{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class xc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Rc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Lc(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kc(e){return e===Kt?void 0:e}function Lc(e){return e.instantiationMode==="EAGER"}/**
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
 */class Oc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new xc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var M;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(M||(M={}));const Mc={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Fc=M.INFO,Bc={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Uc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Bc[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qo{constructor(t){this.name=t,this._logLevel=Fc,this._logHandler=Uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}const qc=(e,t)=>t.some(n=>e instanceof n);let Ds,bs;function jc(){return Ds||(Ds=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zc(){return bs||(bs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jo=new WeakMap,Hr=new WeakMap,zo=new WeakMap,Vr=new WeakMap,wi=new WeakMap;function $c(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Mt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&jo.set(n,e)}).catch(()=>{}),wi.set(t,e),t}function Gc(e){if(Hr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Hr.set(e,t)}let Kr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Hr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||zo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Hc(e){Kr=e(Kr)}function Kc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Dr(this),t,...n);return zo.set(r,t.sort?t.sort():[t]),Mt(r)}:zc().includes(e)?function(...t){return e.apply(Dr(this),t),Mt(jo.get(this))}:function(...t){return Mt(e.apply(Dr(this),t))}}function Wc(e){return typeof e=="function"?Kc(e):(e instanceof IDBTransaction&&Gc(e),qc(e,jc())?new Proxy(e,Kr):e)}function Mt(e){if(e instanceof IDBRequest)return $c(e);if(Vr.has(e))return Vr.get(e);const t=Wc(e);return t!==e&&(Vr.set(e,t),wi.set(t,e)),t}const Dr=e=>wi.get(e);function Qc(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Mt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Mt(o.result),u.oldVersion,u.newVersion,Mt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Xc=["get","getKey","getAll","getAllKeys","count"],Yc=["put","add","delete","clear"],br=new Map;function Ns(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(br.get(t))return br.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xc.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return br.set(t,s),s}Hc(e=>({...e,get:(t,n,r)=>Ns(t,n)||e.get(t,n,r),has:(t,n)=>!!Ns(t,n)||e.has(t,n)}));/**
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
 */class Jc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wr="@firebase/app",xs="0.9.28";/**
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
 */const ee=new qo("@firebase/app"),tl="@firebase/app-compat",el="@firebase/analytics-compat",nl="@firebase/analytics",rl="@firebase/app-check-compat",il="@firebase/app-check",sl="@firebase/auth",ol="@firebase/auth-compat",al="@firebase/database",ul="@firebase/database-compat",cl="@firebase/functions",ll="@firebase/functions-compat",hl="@firebase/installations",dl="@firebase/installations-compat",fl="@firebase/messaging",pl="@firebase/messaging-compat",ml="@firebase/performance",gl="@firebase/performance-compat",_l="@firebase/remote-config",yl="@firebase/remote-config-compat",vl="@firebase/storage",El="@firebase/storage-compat",Tl="@firebase/firestore",Il="@firebase/firestore-compat",wl="firebase",Al="10.8.1";/**
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
 */const Qr="[DEFAULT]",Rl={[Wr]:"fire-core",[tl]:"fire-core-compat",[nl]:"fire-analytics",[el]:"fire-analytics-compat",[il]:"fire-app-check",[rl]:"fire-app-check-compat",[sl]:"fire-auth",[ol]:"fire-auth-compat",[al]:"fire-rtdb",[ul]:"fire-rtdb-compat",[cl]:"fire-fn",[ll]:"fire-fn-compat",[hl]:"fire-iid",[dl]:"fire-iid-compat",[fl]:"fire-fcm",[pl]:"fire-fcm-compat",[ml]:"fire-perf",[gl]:"fire-perf-compat",[_l]:"fire-rc",[yl]:"fire-rc-compat",[vl]:"fire-gcs",[El]:"fire-gcs-compat",[Tl]:"fire-fst",[Il]:"fire-fst-compat","fire-js":"fire-js",[wl]:"fire-js-all"};/**
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
 */const jn=new Map,Xr=new Map;function Cl(e,t){try{e.container.addComponent(t)}catch(n){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function zn(e){const t=e.name;if(Xr.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,e);for(const n of jn.values())Cl(n,e);return!0}function Sl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Pl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new Uo("app","Firebase",Pl);/**
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
 */class Vl{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Dl=Al;function bl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=Fo()),!n)throw Ft.create("no-options");const s=jn.get(i);if(s){if(Gr(n,s.options)&&Gr(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const o=new Oc(i);for(const u of Xr.values())o.addComponent(u);const a=new Vl(n,r,o);return jn.set(i,a),a}function Nl(e=Qr){const t=jn.get(e);if(!t&&e===Qr&&Fo())return bl();if(!t)throw Ft.create("no-app",{appName:e});return t}function fe(e,t,n){var r;let i=(r=Rl[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(a.join(" "));return}zn(new We(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const xl="firebase-heartbeat-database",kl=1,Qe="firebase-heartbeat-store";let Nr=null;function $o(){return Nr||(Nr=Qc(xl,kl,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Qe)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),Nr}async function Ll(e){try{const n=(await $o()).transaction(Qe),r=await n.objectStore(Qe).get(Go(e));return await n.done,r}catch(t){if(t instanceof Ce)ee.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(n.message)}}}async function ks(e,t){try{const r=(await $o()).transaction(Qe,"readwrite");await r.objectStore(Qe).put(t,Go(e)),await r.done}catch(n){if(n instanceof Ce)ee.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ee.warn(r.message)}}}function Go(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Ol=1024,Ml=30*24*60*60*1e3;class Fl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ul(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ls();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ml}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ls(),{heartbeatsToSend:r,unsentEntries:i}=Bl(this._heartbeatsCache.heartbeats),s=Un(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ls(){return new Date().toISOString().substring(0,10)}function Bl(e,t=Ol){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Os(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Os(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ul{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bo()?Vc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ll(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ks(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ks(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Os(e){return Un(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ql(e){zn(new We("platform-logger",t=>new Jc(t),"PRIVATE")),zn(new We("heartbeat",t=>new Fl(t),"PRIVATE")),fe(Wr,xs,e),fe(Wr,xs,"esm2017"),fe("fire-js","")}ql("");var jl="firebase",zl="10.8.1";/**
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
 */fe(jl,zl,"app");var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,Ai=Ai||{},b=$l||self;function nr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function fn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Gl(e){return Object.prototype.hasOwnProperty.call(e,xr)&&e[xr]||(e[xr]=++Hl)}var xr="closure_uid_"+(1e9*Math.random()>>>0),Hl=0;function Kl(e,t,n){return e.call.apply(e.bind,arguments)}function Wl(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function lt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=Kl:lt=Wl,lt.apply(null,arguments)}function Sn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function et(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function $t(){this.s=this.s,this.o=this.o}var Ql=0;$t.prototype.s=!1;$t.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ql!=0)&&Gl(this)};$t.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ho=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ri(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ms(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(nr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ht(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Xl=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};b.addEventListener("test",n,t),b.removeEventListener("test",n,t)}catch{}return e}();function Xe(e){return/^[\s\xa0]*$/.test(e)}function rr(){var e=b.navigator;return e&&(e=e.userAgent)?e:""}function At(e){return rr().indexOf(e)!=-1}function Ci(e){return Ci[" "](e),e}Ci[" "]=function(){};function Yl(e,t){var n=zh;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Jl=At("Opera"),_e=At("Trident")||At("MSIE"),Ko=At("Edge"),Yr=Ko||_e,Wo=At("Gecko")&&!(rr().toLowerCase().indexOf("webkit")!=-1&&!At("Edge"))&&!(At("Trident")||At("MSIE"))&&!At("Edge"),Zl=rr().toLowerCase().indexOf("webkit")!=-1&&!At("Edge");function Qo(){var e=b.document;return e?e.documentMode:void 0}var Jr;t:{var kr="",Lr=function(){var e=rr();if(Wo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ko)return/Edge\/([\d\.]+)/.exec(e);if(_e)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Zl)return/WebKit\/(\S+)/.exec(e);if(Jl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Lr&&(kr=Lr?Lr[1]:""),_e){var Or=Qo();if(Or!=null&&Or>parseFloat(kr)){Jr=String(Or);break t}}Jr=kr}var Zr;if(b.document&&_e){var Fs=Qo();Zr=Fs||parseInt(Jr,10)||void 0}else Zr=void 0;var th=Zr;function Ye(e,t){if(ht.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Wo){t:{try{Ci(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:eh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ye.$.h.call(this)}}et(Ye,ht);var eh={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var pn="closure_listenable_"+(1e6*Math.random()|0),nh=0;function rh(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++nh,this.fa=this.ia=!1}function ir(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Si(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ih(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Xo(e){const t={};for(const n in e)t[n]=e[n];return t}const Bs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yo(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Bs.length;s++)n=Bs[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function sr(e){this.src=e,this.g={},this.h=0}sr.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ei(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new rh(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function ti(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Ho(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ir(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ei(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),Mr={};function Jo(e,t,n,r,i){if(r&&r.once)return ta(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Jo(e,t[s],n,r,i);return null}return n=bi(n),e&&e[pn]?e.O(t,n,fn(r)?!!r.capture:!!r,i):Zo(e,t,n,!1,r,i)}function Zo(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=fn(i)?!!i.capture:!!i,a=Di(e);if(a||(e[Pi]=a=new sr(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=sh(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Xl||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(na(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sh(){function e(n){return t.call(e.src,e.listener,n)}const t=oh;return e}function ta(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ta(e,t[s],n,r,i);return null}return n=bi(n),e&&e[pn]?e.P(t,n,fn(r)?!!r.capture:!!r,i):Zo(e,t,n,!0,r,i)}function ea(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ea(e,t[s],n,r,i);else r=fn(r)?!!r.capture:!!r,n=bi(n),e&&e[pn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ei(s,n,r,i),-1<n&&(ir(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Di(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ei(t,n,r,i)),(n=-1<e?t[e]:null)&&Vi(n))}function Vi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[pn])ti(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(na(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Di(t))?(ti(n,e),n.h==0&&(n.src=null,t[Pi]=null)):ir(e)}}}function na(e){return e in Mr?Mr[e]:Mr[e]="on"+e}function oh(e,t){if(e.fa)e=!0;else{t=new Ye(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Vi(e),e=n.call(r,t)}return e}function Di(e){return e=e[Pi],e instanceof sr?e:null}var Fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function bi(e){return typeof e=="function"?e:(e[Fr]||(e[Fr]=function(t){return e.handleEvent(t)}),e[Fr])}function tt(){$t.call(this),this.i=new sr(this),this.S=this,this.J=null}et(tt,$t);tt.prototype[pn]=!0;tt.prototype.removeEventListener=function(e,t,n,r){ea(this,e,t,n,r)};function st(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ht(t,e);else if(t instanceof ht)t.target=t.target||e;else{var i=t;t=new ht(r,e),Yo(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Pn(o,r,!0,t)&&i}if(o=t.g=e,i=Pn(o,r,!0,t)&&i,i=Pn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Pn(o,r,!1,t)&&i}tt.prototype.N=function(){if(tt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ir(n[r]);delete e.g[t],e.h--}}this.J=null};tt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};tt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Pn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&ti(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ni=b.JSON.stringify;class ah{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function uh(){var e=xi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ch{constructor(){this.h=this.g=null}add(t,n){const r=ra.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ra=new ah(()=>new lh,e=>e.reset());class lh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function dh(e){b.setTimeout(()=>{throw e},0)}let Je,Ze=!1,xi=new ch,ia=()=>{const e=b.Promise.resolve(void 0);Je=()=>{e.then(fh)}};var fh=()=>{for(var e;e=uh();){try{e.h.call(e.g)}catch(n){dh(n)}var t=ra;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ze=!1};function or(e,t){tt.call(this),this.h=e||1,this.g=t||b,this.j=lt(this.qb,this),this.l=Date.now()}et(or,tt);I=or.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),st(this,"tick"),this.ga&&(ki(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ki(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}I.N=function(){or.$.N.call(this),ki(this),delete this.g};function Li(e,t,n){if(typeof e=="function")n&&(e=lt(e,n));else if(e&&typeof e.handleEvent=="function")e=lt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(e,t||0)}function sa(e){e.g=Li(()=>{e.g=null,e.i&&(e.i=!1,sa(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ph extends $t{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:sa(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tn(e){$t.call(this),this.h=e,this.g={}}et(tn,$t);var Us=[];function oa(e,t,n,r){Array.isArray(n)||(n&&(Us[0]=n.toString()),n=Us);for(var i=0;i<n.length;i++){var s=Jo(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function aa(e){Si(e.g,function(t,n){this.g.hasOwnProperty(n)&&Vi(t)},e),e.g={}}tn.prototype.N=function(){tn.$.N.call(this),aa(this)};tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ar(){this.g=!0}ar.prototype.Ea=function(){this.g=!1};function mh(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var f=l.split("_");o=2<=f.length&&f[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function gh(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function de(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+yh(e,n)+(r?" "+r:"")})}function _h(e,t){e.info(function(){return"TIMEOUT: "+t})}ar.prototype.info=function(){};function yh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ni(n)}catch{return t}}var se={},qs=null;function ur(){return qs=qs||new tt}se.Ta="serverreachability";function ua(e){ht.call(this,se.Ta,e)}et(ua,ht);function en(e){const t=ur();st(t,new ua(t))}se.STAT_EVENT="statevent";function ca(e,t){ht.call(this,se.STAT_EVENT,e),this.stat=t}et(ca,ht);function pt(e){const t=ur();st(t,new ca(t,e))}se.Ua="timingevent";function la(e,t){ht.call(this,se.Ua,e),this.size=t}et(la,ht);function mn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){e()},t)}var cr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ha={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Oi(){}Oi.prototype.h=null;function js(e){return e.h||(e.h=e.i())}function da(){}var gn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mi(){ht.call(this,"d")}et(Mi,ht);function Fi(){ht.call(this,"c")}et(Fi,ht);var ni;function lr(){}et(lr,Oi);lr.prototype.g=function(){return new XMLHttpRequest};lr.prototype.i=function(){return{}};ni=new lr;function _n(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new tn(this),this.P=vh,e=Yr?125:void 0,this.V=new or(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fa}function fa(){this.i=null,this.g="",this.h=!1}var vh=45e3,pa={},ri={};I=_n.prototype;I.setTimeout=function(e){this.P=e};function ii(e,t,n){e.L=1,e.A=dr(kt(t)),e.u=n,e.S=!0,ma(e,null)}function ma(e,t){e.G=Date.now(),yn(e),e.B=kt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),wa(n.i,"t",r),e.o=0,n=e.l.J,e.h=new fa,e.g=$a(e.l,n?t:null,!e.u),0<e.O&&(e.M=new ph(lt(e.Pa,e,e.g),e.O)),oa(e.U,e.g,"readystatechange",e.nb),t=e.I?Xo(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),en(),mh(e.j,e.v,e.B,e.m,e.W,e.u)}I.nb=function(e){e=e.target;const t=this.M;t&&Rt(e)==3?t.l():this.Pa(e)};I.Pa=function(e){try{if(e==this.g)t:{const l=Rt(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>l)&&(l!=3||Yr||this.g&&(this.h.h||this.g.ja()||Hs(this.g)))){this.J||l!=4||t==7||(t==8||0>=f?en(3):en(2)),hr(this);var n=this.g.da();this.ca=n;e:if(ga(this)){var r=Hs(this.g);e="";var i=r.length,s=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),je(this);var o="";break e}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,gh(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xe(a)){var c=a;break e}}c=null}if(n=c)de(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,si(this,n);else{this.i=!1,this.s=3,pt(12),Qt(this),je(this);break t}}this.S?(_a(this,l,o),Yr&&this.i&&l==3&&(oa(this.U,this.V,"tick",this.mb),this.V.start())):(de(this.j,this.m,o,null),si(this,o)),l==4&&Qt(this),this.i&&!this.J&&(l==4?Ua(this.l,this):(this.i=!1,yn(this)))}else Uh(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Qt(this),je(this)}}}catch{}finally{}};function ga(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function _a(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=Eh(e,n),i==ri){t==4&&(e.s=4,pt(14),r=!1),de(e.j,e.m,null,"[Incomplete Response]");break}else if(i==pa){e.s=4,pt(15),de(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else de(e.j,e.m,i,null),si(e,i);ga(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,pt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$i(t),t.M=!0,pt(11))):(de(e.j,e.m,n,"[Invalid Chunked Response]"),Qt(e),je(e))}I.mb=function(){if(this.g){var e=Rt(this.g),t=this.g.ja();this.o<t.length&&(hr(this),_a(this,e,t),this.i&&e!=4&&yn(this))}};function Eh(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?ri:(n=Number(t.substring(n,r)),isNaN(n)?pa:(r+=1,r+n>t.length?ri:(t=t.slice(r,r+n),e.o=r+n,t)))}I.cancel=function(){this.J=!0,Qt(this)};function yn(e){e.Y=Date.now()+e.P,ya(e,e.P)}function ya(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=mn(lt(e.lb,e),t)}function hr(e){e.C&&(b.clearTimeout(e.C),e.C=null)}I.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(_h(this.j,this.B),this.L!=2&&(en(),pt(17)),Qt(this),this.s=2,je(this)):ya(this,this.Y-e)};function je(e){e.l.H==0||e.J||Ua(e.l,e)}function Qt(e){hr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,ki(e.V),aa(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function si(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||oi(n.i,e))){if(!e.K&&oi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Hn(n),gr(n);else break t;zi(n),pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=mn(lt(n.ib,n),6e3));if(1>=Ca(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Xt(n,11)}else if((e.K||n.g==e)&&Hn(n),!Xe(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const l=c[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const f=c[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const _=e.g;if(_){const x=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(x){var s=r.i;s.g||x.indexOf("spdy")==-1&&x.indexOf("quic")==-1&&x.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Bi(s,s.h),s.h=null))}if(r.F){const S=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,z(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=za(r,r.J?r.pa:null,r.Y),o.K){Sa(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(hr(a),yn(a)),r.g=o}else Fa(r);0<n.j.length&&_r(n)}else c[0]!="stop"&&c[0]!="close"||Xt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Xt(n,7):ji(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}en(4)}catch{}}function Th(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(nr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Ih(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(nr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function va(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(nr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ih(e),r=Th(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Zt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Zt){this.h=e.h,$n(this,e.j),this.s=e.s,this.g=e.g,Gn(this,e.m),this.l=e.l;var t=e.i,n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zs(this,n),this.o=e.o}else e&&(t=String(e).match(Ea))?(this.h=!1,$n(this,t[1]||"",!0),this.s=Me(t[2]||""),this.g=Me(t[3]||"",!0),Gn(this,t[4]),this.l=Me(t[5]||"",!0),zs(this,t[6]||"",!0),this.o=Me(t[7]||"")):(this.h=!1,this.i=new nn(null,this.h))}Zt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Fe(t,$s,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Fe(t,$s,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Fe(n,n.charAt(0)=="/"?Ch:Rh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Fe(n,Ph)),e.join("")};function kt(e){return new Zt(e)}function $n(e,t,n){e.j=n?Me(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Gn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zs(e,t,n){t instanceof nn?(e.i=t,Vh(e.i,e.h)):(n||(t=Fe(t,Sh)),e.i=new nn(t,e.h))}function z(e,t,n){e.i.set(t,n)}function dr(e){return z(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Me(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Fe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ah),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ah(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var $s=/[#\/\?@]/g,Rh=/[#\?:]/g,Ch=/[#\?]/g,Sh=/[#\?@]/g,Ph=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Gt(e){e.g||(e.g=new Map,e.h=0,e.i&&wh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}I=nn.prototype;I.add=function(e,t){Gt(this),this.i=null,e=Se(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ta(e,t){Gt(e),t=Se(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ia(e,t){return Gt(e),t=Se(e,t),e.g.has(t)}I.forEach=function(e,t){Gt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};I.ta=function(){Gt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};I.Z=function(e){Gt(this);let t=[];if(typeof e=="string")Ia(this,e)&&(t=t.concat(this.g.get(Se(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};I.set=function(e,t){return Gt(this),this.i=null,e=Se(this,e),Ia(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};I.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function wa(e,t,n){Ta(e,t),0<n.length&&(e.i=null,e.g.set(Se(e,t),Ri(n)),e.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Se(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Vh(e,t){t&&!e.j&&(Gt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ta(this,r),wa(this,i,n))},e)),e.j=t}var Dh=class{constructor(e,t){this.g=e,this.map=t}};function Aa(e){this.l=e||bh,b.PerformanceNavigationTiming?(e=b.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bh=10;function Ra(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ca(e){return e.h?1:e.g?e.g.size:0}function oi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Bi(e,t){e.g?e.g.add(t):e.h=t}function Sa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Aa.prototype.cancel=function(){if(this.i=Pa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Pa(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ri(e.i)}var Nh=class{stringify(e){return b.JSON.stringify(e,void 0)}parse(e){return b.JSON.parse(e,void 0)}};function xh(){this.g=new Nh}function kh(e,t,n){const r=n||"";try{va(e,function(i,s){let o=i;fn(i)&&(o=Ni(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Lh(e,t){const n=new ar;if(b.Image){const r=new Image;r.onload=Sn(Vn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Sn(Vn,n,r,"TestLoadImage: error",!1,t),r.onabort=Sn(Vn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Sn(Vn,n,r,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Vn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function fr(e){this.l=e.ec||null,this.j=e.ob||!1}et(fr,Oi);fr.prototype.g=function(){return new pr(this.l,this.j)};fr.prototype.i=function(e){return function(){return e}}({});function pr(e,t){tt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ui,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(pr,tt);var Ui=0;I=pr.prototype;I.open=function(e,t){if(this.readyState!=Ui)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,rn(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vn(this)),this.readyState=Ui};I.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Va(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Va(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}I.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vn(this):rn(this),this.readyState==3&&Va(this)}};I.Za=function(e){this.g&&(this.response=this.responseText=e,vn(this))};I.Ya=function(e){this.g&&(this.response=e,vn(this))};I.ka=function(){this.g&&vn(this)};function vn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,rn(e)}I.setRequestHeader=function(e,t){this.v.append(e,t)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function rn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Oh=b.JSON.parse;function H(e){tt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Da,this.L=this.M=!1}et(H,tt);var Da="",Mh=/^https?$/i,Fh=["POST","PUT"];I=H.prototype;I.Oa=function(e){this.M=e};I.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ni.g(),this.C=this.u?js(this.u):js(ni),this.g.onreadystatechange=lt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Gs(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&e instanceof b.FormData,!(0<=Ho(Fh,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xa(this),0<this.B&&((this.L=Bh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.ua,this)):this.A=Li(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Gs(this,s)}};function Bh(e){return _e&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.ua=function(){typeof Ai<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Gs(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ba(e),mr(e)}function ba(e){e.F||(e.F=!0,st(e,"complete"),st(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,st(this,"complete"),st(this,"abort"),mr(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mr(this,!0)),H.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?Na(this):this.kb())};I.kb=function(){Na(this)};function Na(e){if(e.h&&typeof Ai<"u"&&(!e.C[1]||Rt(e)!=4||e.da()!=2)){if(e.v&&Rt(e)==4)Li(e.La,0,e);else if(st(e,"readystatechange"),Rt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Ea)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!Mh.test(i?i.toLowerCase():"")}n=r}if(n)st(e,"complete"),st(e,"success");else{e.m=6;try{var s=2<Rt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",ba(e)}}finally{mr(e)}}}}function mr(e,t){if(e.g){xa(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||st(e,"ready");try{n.onreadystatechange=r}catch{}}}function xa(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(b.clearTimeout(e.A),e.A=null)}I.isActive=function(){return!!this.g};function Rt(e){return e.g?e.g.readyState:0}I.da=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Oh(t)}};function Hs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Da:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Uh(e){const t={};e=(e.g&&2<=Rt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Xe(e[r]))continue;var n=hh(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}ih(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ka(e){let t="";return Si(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function qi(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ka(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):z(e,t,n))}function ke(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function La(e){this.Ga=0,this.j=[],this.l=new ar,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ke("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ke("baseRetryDelayMs",5e3,e),this.hb=ke("retryDelaySeedMs",1e4,e),this.eb=ke("forwardChannelMaxRetries",2,e),this.xa=ke("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Aa(e&&e.concurrentRequestLimit),this.Ja=new xh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=La.prototype;I.ra=8;I.H=1;function ji(e){if(Oa(e),e.H==3){var t=e.W++,n=kt(e.I);if(z(n,"SID",e.K),z(n,"RID",t),z(n,"TYPE","terminate"),En(e,n),t=new _n(e,e.l,t),t.L=2,t.A=dr(kt(n)),n=!1,b.navigator&&b.navigator.sendBeacon)try{n=b.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&b.Image&&(new Image().src=t.A,n=!0),n||(t.g=$a(t.l,null),t.g.ha(t.A)),t.G=Date.now(),yn(t)}ja(e)}function gr(e){e.g&&($i(e),e.g.cancel(),e.g=null)}function Oa(e){gr(e),e.u&&(b.clearTimeout(e.u),e.u=null),Hn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&b.clearTimeout(e.m),e.m=null)}function _r(e){if(!Ra(e.i)&&!e.m){e.m=!0;var t=e.Na;Je||ia(),Ze||(Je(),Ze=!0),xi.add(t,e),e.C=0}}function qh(e,t){return Ca(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=mn(lt(e.Na,e,t),qa(e,e.C)),e.C++,!0)}I.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new _n(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Xo(s),Yo(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ma(this,i,t),n=kt(this.I),z(n,"RID",e),z(n,"CVER",22),this.F&&z(n,"X-HTTP-Session-Id",this.F),En(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ka(s)))+"&"+t:this.o&&qi(n,this.o,s)),Bi(this.i,i),this.bb&&z(n,"TYPE","init"),this.P?(z(n,"$req",t),z(n,"SID","null"),i.aa=!0,ii(i,n,null)):ii(i,n,t),this.H=2}}else this.H==3&&(e?Ks(this,e):this.j.length==0||Ra(this.i)||Ks(this))};function Ks(e,t){var n;t?n=t.m:n=e.W++;const r=kt(e.I);z(r,"SID",e.K),z(r,"RID",n),z(r,"AID",e.V),En(e,r),e.o&&e.s&&qi(r,e.o,e.s),n=new _n(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ma(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Bi(e.i,n),ii(n,r,t)}function En(e,t){e.na&&Si(e.na,function(n,r){z(t,r,n)}),e.h&&va({},function(n,r){z(t,r,n)})}function Ma(e,t,n){n=Math.min(e.j.length,n);var r=e.h?lt(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].g;const l=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{kh(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Fa(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Je||ia(),Ze||(Je(),Ze=!0),xi.add(t,e),e.A=0}}function zi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=mn(lt(e.Ma,e),qa(e,e.A)),e.A++,!0)}I.Ma=function(){if(this.u=null,Ba(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=mn(lt(this.jb,this),e)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),gr(this),Ba(this))};function $i(e){e.B!=null&&(b.clearTimeout(e.B),e.B=null)}function Ba(e){e.g=new _n(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=kt(e.wa);z(t,"RID","rpc"),z(t,"SID",e.K),z(t,"AID",e.V),z(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&z(t,"TO",e.qa),z(t,"TYPE","xmlhttp"),En(e,t),e.o&&e.s&&qi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=dr(kt(t)),n.u=null,n.S=!0,ma(n,e)}I.ib=function(){this.v!=null&&(this.v=null,gr(this),zi(this),pt(19))};function Hn(e){e.v!=null&&(b.clearTimeout(e.v),e.v=null)}function Ua(e,t){var n=null;if(e.g==t){Hn(e),$i(e),e.g=null;var r=2}else if(oi(e.i,t))n=t.F,Sa(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=ur(),st(r,new la(r,n)),_r(e)}else Fa(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&qh(e,t)||r==2&&zi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Xt(e,5);break;case 4:Xt(e,10);break;case 3:Xt(e,6);break;default:Xt(e,2)}}}function qa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Xt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=lt(e.pb,e);n||(n=new Zt("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||$n(n,"https"),dr(n)),Lh(n.toString(),r)}else pt(2);e.H=0,e.h&&e.h.za(t),ja(e),Oa(e)}I.pb=function(e){e?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function ja(e){if(e.H=0,e.ma=[],e.h){const t=Pa(e.i);(t.length!=0||e.j.length!=0)&&(Ms(e.ma,t),Ms(e.ma,e.j),e.i.i.length=0,Ri(e.j),e.j.length=0),e.h.ya()}}function za(e,t,n){var r=n instanceof Zt?kt(n):new Zt(n);if(r.g!="")t&&(r.g=t+"."+r.g),Gn(r,r.m);else{var i=b.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Zt(null);r&&$n(s,r),t&&(s.g=t),i&&Gn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&z(r,n,t),z(r,"VER",e.ra),En(e,r),r}function $a(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new H(new fr({ob:n})):new H(e.va),t.Oa(e.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ga(){}I=Ga.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function Kn(){if(_e&&!(10<=Number(th)))throw Error("Environmental error: no available transport.")}Kn.prototype.g=function(e,t){return new gt(e,t)};function gt(e,t){tt.call(this),this.g=new La(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Xe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xe(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Pe(this)}et(gt,tt);gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;pt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=za(e,null,e.Y),_r(e)};gt.prototype.close=function(){ji(this.g)};gt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ni(e),e=n);t.j.push(new Dh(t.fb++,e)),t.H==3&&_r(t)};gt.prototype.N=function(){this.g.h=null,delete this.j,ji(this.g),delete this.g,gt.$.N.call(this)};function Ha(e){Mi.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}et(Ha,Mi);function Ka(){Fi.call(this),this.status=1}et(Ka,Fi);function Pe(e){this.g=e}et(Pe,Ga);Pe.prototype.Ba=function(){st(this.g,"a")};Pe.prototype.Aa=function(e){st(this.g,new Ha(e))};Pe.prototype.za=function(e){st(this.g,new Ka)};Pe.prototype.ya=function(){st(this.g,"b")};function jh(){this.blockSize=-1}function It(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(It,jh);It.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Br(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}It.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Br(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Br(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Br(this,r),i=0;break}}this.h=i,this.i+=t};It.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function q(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var zh={};function Gi(e){return-128<=e&&128>e?Yl(e,function(t){return new q([t|0],0>t?-1:0)}):new q([e|0],0>e?-1:0)}function Ct(e){if(isNaN(e)||!isFinite(e))return pe;if(0>e)return rt(Ct(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ai;return new q(t,0)}function Wa(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return rt(Wa(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ct(Math.pow(t,8)),r=pe,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Ct(Math.pow(t,s)),r=r.R(s).add(Ct(o))):(r=r.R(n),r=r.add(Ct(o)))}return r}var ai=4294967296,pe=Gi(0),ui=Gi(1),Ws=Gi(16777216);I=q.prototype;I.ea=function(){if(_t(this))return-rt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ai+r)*t,t*=ai}return e};I.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Nt(this))return"0";if(_t(this))return"-"+rt(this).toString(e);for(var t=Ct(Math.pow(e,6)),n=this,r="";;){var i=Qn(n,t).g;n=Wn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Nt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};I.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Nt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function _t(e){return e.h==-1}I.X=function(e){return e=Wn(this,e),_t(e)?-1:Nt(e)?0:1};function rt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new q(n,~e.h).add(ui)}I.abs=function(){return _t(this)?rt(this):this};I.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new q(n,n[n.length-1]&-2147483648?-1:0)};function Wn(e,t){return e.add(rt(t))}I.R=function(e){if(Nt(this)||Nt(e))return pe;if(_t(this))return _t(e)?rt(this).R(rt(e)):rt(rt(this).R(e));if(_t(e))return rt(this.R(rt(e)));if(0>this.X(Ws)&&0>e.X(Ws))return Ct(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Dn(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Dn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Dn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Dn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new q(n,0)};function Dn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Le(e,t){this.g=e,this.h=t}function Qn(e,t){if(Nt(t))throw Error("division by zero");if(Nt(e))return new Le(pe,pe);if(_t(e))return t=Qn(rt(e),t),new Le(rt(t.g),rt(t.h));if(_t(t))return t=Qn(e,rt(t)),new Le(rt(t.g),t.h);if(30<e.g.length){if(_t(e)||_t(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ui,r=t;0>=r.X(e);)n=Qs(n),r=Qs(r);var i=ue(n,1),s=ue(r,1);for(r=ue(r,2),n=ue(n,2);!Nt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=ue(r,1),n=ue(n,1)}return t=Wn(e,i.R(t)),new Le(i,t)}for(i=pe;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ct(n),o=s.R(t);_t(o)||0<o.X(e);)n-=r,s=Ct(n),o=s.R(t);Nt(s)&&(s=ui),i=i.add(s),e=Wn(e,o)}return new Le(i,e)}I.gb=function(e){return Qn(this,e).h};I.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new q(n,this.h&e.h)};I.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new q(n,this.h|e.h)};I.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new q(n,this.h^e.h)};function Qs(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new q(n,e.h)}function ue(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new q(i,e.h)}Kn.prototype.createWebChannel=Kn.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;cr.NO_ERROR=0;cr.TIMEOUT=8;cr.HTTP_ERROR=6;ha.COMPLETE="complete";da.EventType=gn;gn.OPEN="a";gn.CLOSE="b";gn.ERROR="c";gn.MESSAGE="d";tt.prototype.listen=tt.prototype.O;H.prototype.listenOnce=H.prototype.P;H.prototype.getLastError=H.prototype.Sa;H.prototype.getLastErrorCode=H.prototype.Ia;H.prototype.getStatus=H.prototype.da;H.prototype.getResponseJson=H.prototype.Wa;H.prototype.getResponseText=H.prototype.ja;H.prototype.send=H.prototype.ha;H.prototype.setWithCredentials=H.prototype.Oa;It.prototype.digest=It.prototype.l;It.prototype.reset=It.prototype.reset;It.prototype.update=It.prototype.j;q.prototype.add=q.prototype.add;q.prototype.multiply=q.prototype.R;q.prototype.modulo=q.prototype.gb;q.prototype.compare=q.prototype.X;q.prototype.toNumber=q.prototype.ea;q.prototype.toString=q.prototype.toString;q.prototype.getBits=q.prototype.D;q.fromNumber=Ct;q.fromString=Wa;var $h=function(){return new Kn},Gh=function(){return ur()},Ur=cr,Hh=ha,Kh=se,Xs={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bn=da,Wh=H,Qh=It,me=q;const Ys="@firebase/firestore";/**
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
 */class ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let Ve="10.8.1";/**
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
 */const ne=new qo("@firebase/firestore");function Oe(){return ne.logLevel}function T(e,...t){if(ne.logLevel<=M.DEBUG){const n=t.map(Hi);ne.debug(`Firestore (${Ve}): ${e}`,...n)}}function Dt(e,...t){if(ne.logLevel<=M.ERROR){const n=t.map(Hi);ne.error(`Firestore (${Ve}): ${e}`,...n)}}function ye(e,...t){if(ne.logLevel<=M.WARN){const n=t.map(Hi);ne.warn(`Firestore (${Ve}): ${e}`,...n)}}function Hi(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function V(e="Unexpected state"){const t=`FIRESTORE (${Ve}) INTERNAL ASSERTION FAILED: `+e;throw Dt(t),new Error(t)}function j(e,t){e||V()}function k(e,t){return e}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Ce{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Qa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class Yh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jh{constructor(t){this.t=t,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new Qa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return j(t===null||typeof t=="string"),new ut(t)}}class Zh{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class td{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Zh(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ed{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(j(typeof n.token=="string"),this.R=n.token,new ed(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Xa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=rd(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function B(e,t){return e<t?-1:e>t?1:0}function ve(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class J{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new J(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new J(0,0))}static max(){return new N(new J(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class sn{constructor(t,n,r){n===void 0?n=0:n>t.length&&V(),r===void 0?r=t.length-n:r>t.length-n&&V(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return sn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof sn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class $ extends sn{construct(t,n,r){return new $(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new w(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $(n)}static emptyPath(){return new $([])}}const id=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends sn{construct(t,n,r){return new it(t,n,r)}static isValidIdentifier(t){return id.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new w(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new w(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class C{constructor(t){this.path=t}static fromPath(t){return new C($.fromString(t))}static fromName(t){return new C($.fromString(t).popFirst(5))}static empty(){return new C($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&$.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return $.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new C(new $(t.slice()))}}function sd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=N.fromTimestamp(r===1e9?new J(n+1,0):new J(n,r));return new qt(i,C.empty(),t)}function od(e){return new qt(e.readTime,e.key,-1)}class qt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new qt(N.min(),C.empty(),-1)}static max(){return new qt(N.max(),C.empty(),-1)}}function ad(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=C.comparator(e.documentKey,t.documentKey),n!==0?n:B(e.largestBatchId,t.largestBatchId))}/**
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
 */const ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Tn(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==ud)throw e;T("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(i=>i?g.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,n){return new g((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Ki{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new xt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ze(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Wi(r.target.error);this.V.reject(new ze(t,i))}}static open(t,n,r,i){try{return new Ki(n,t.transaction(i,r))}catch(s){throw new ze(n,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(T("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new hd(n)}}class Yt{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Yt.S(qn())===12.2&&Dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return T("SimpleDb","Removing database:",t),Wt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Bo())return!1;if(Yt.C())return!0;const t=qn(),n=Yt.S(t),r=0<n&&n<10,i=Yt.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(T("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ze(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new w(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new w(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ze(t,o))},i.onupgradeneeded=s=>{T("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{T("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Ki.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),g.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(T("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ld{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Wt(this.k.delete())}}class ze extends w{constructor(t,n){super(m.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function In(e){return e.name==="IndexedDbTransactionError"}class hd{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(T("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(T("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Wt(r)}add(t){return T("SimpleDb","ADD",this.store.name,t,t),Wt(this.store.add(t))}get(t){return Wt(this.store.get(t)).next(n=>(n===void 0&&(n=null),T("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return T("SimpleDb","DELETE",this.store.name,t),Wt(this.store.delete(t))}count(){return T("SimpleDb","COUNT",this.store.name),Wt(this.store.count())}W(t,n){const r=this.options(t,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new g((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new g((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,n){T("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const i=this.cursor(r);return this.G(i,n)}Z(t){const n=this.cursor({});return new g((r,i)=>{n.onerror=s=>{const o=Wi(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new g((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new ld(a),c=n(a.primaryKey,a.value,u);if(c instanceof g){const l=c.catch(f=>(u.done(),g.reject(f)));r.push(l)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>g.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Wt(e){return new g((t,n)=>{e.onsuccess=r=>{const i=r.target.result;t(i)},e.onerror=r=>{const i=Wi(r.target.error);n(i)}})}let Js=!1;function Wi(e){const t=Yt.S(qn());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new w("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Js||(Js=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class Qi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Qi._e=-1;function yr(e){return e==null}function Xn(e){return e===0&&1/e==-1/0}function dd(e){return typeof e=="number"&&Number.isInteger(e)&&!Xn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zs(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function De(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ya(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class G{constructor(t,n){this.comparator=t,this.root=n||nt.EMPTY}insert(t,n){return new G(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new G(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nn(this.root,t,this.comparator,!0)}}class Nn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=s??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new nt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const t=this.left.check();if(t!==this.right.check())throw V();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,n,r,i,s){return this}insert(t,n,r){return new nt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(t){this.comparator=t,this.data=new G(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new to(this.data.getIterator())}getIteratorFrom(t){return new to(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ot(this.comparator);return n.data=t,n}}class to{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new Tt([])}unionWith(t){let n=new ot(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Tt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ve(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Ja extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ja("Invalid base64 string: "+s):s}}(t);return new dt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new dt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const fd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(e){if(j(!!e),typeof e=="string"){let t=0;const n=fd.exec(e);if(j(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:W(e.seconds),nanos:W(e.nanos)}}function W(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function re(e){return typeof e=="string"?dt.fromBase64String(e):dt.fromUint8Array(e)}/**
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
 */function Xi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yi(e){const t=e.mapValue.fields.__previous_value__;return Xi(t)?Yi(t):t}function on(e){const t=jt(e.mapValue.fields.__local_write_time__.timestampValue);return new J(t.seconds,t.nanos)}/**
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
 */class pd{constructor(t,n,r,i,s,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class an{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new an("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof an&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const xn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ie(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Xi(e)?4:md(e)?9007199254740991:10:V()}function bt(e,t){if(e===t)return!0;const n=ie(e);if(n!==ie(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return on(e).isEqual(on(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jt(i.timestampValue),a=jt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return re(i.bytesValue).isEqual(re(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return W(i.geoPointValue.latitude)===W(s.geoPointValue.latitude)&&W(i.geoPointValue.longitude)===W(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return W(i.integerValue)===W(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=W(i.doubleValue),a=W(s.doubleValue);return o===a?Xn(o)===Xn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ve(e.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Zs(o)!==Zs(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!bt(o[u],a[u])))return!1;return!0}(e,t);default:return V()}}function un(e,t){return(e.values||[]).find(n=>bt(n,t))!==void 0}function Ee(e,t){if(e===t)return 0;const n=ie(e),r=ie(t);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=W(s.integerValue||s.doubleValue),u=W(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return eo(e.timestampValue,t.timestampValue);case 4:return eo(on(e),on(t));case 5:return B(e.stringValue,t.stringValue);case 6:return function(s,o){const a=re(s),u=re(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=B(a[c],u[c]);if(l!==0)return l}return B(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=B(W(s.latitude),W(o.latitude));return a!==0?a:B(W(s.longitude),W(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=Ee(a[c],u[c]);if(l)return l}return B(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===xn.mapValue&&o===xn.mapValue)return 0;if(s===xn.mapValue)return 1;if(o===xn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let f=0;f<u.length&&f<l.length;++f){const p=B(u[f],l[f]);if(p!==0)return p;const _=Ee(a[u[f]],c[l[f]]);if(_!==0)return _}return B(u.length,l.length)}(e.mapValue,t.mapValue);default:throw V()}}function eo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return B(e,t);const n=jt(e),r=jt(t),i=B(n.seconds,r.seconds);return i!==0?i:B(n.nanos,r.nanos)}function Te(e){return ci(e)}function ci(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=jt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return re(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return C.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ci(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ci(n.fields[o])}`;return i+"}"}(e.mapValue):V()}function no(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function li(e){return!!e&&"integerValue"in e}function Ji(e){return!!e&&"arrayValue"in e}function ro(e){return!!e&&"nullValue"in e}function io(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function On(e){return!!e&&"mapValue"in e}function $e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return De(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=$e(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=$e(e.arrayValue.values[n]);return t}return Object.assign({},e)}function md(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class yt{constructor(t){this.value=t}static empty(){return new yt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!On(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=$e(n)}setAll(t){let n=it.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$e(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());On(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];On(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){De(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new yt($e(this.value))}}function Za(e){const t=[];return De(e.fields,(n,r)=>{const i=new it([n]);if(On(r)){const s=Za(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Tt(t)}/**
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
 */class ct{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ct(t,0,N.min(),N.min(),N.min(),yt.empty(),0)}static newFoundDocument(t,n,r,i){return new ct(t,1,n,N.min(),r,i,0)}static newNoDocument(t,n){return new ct(t,2,n,N.min(),N.min(),yt.empty(),0)}static newUnknownDocument(t,n){return new ct(t,3,n,N.min(),N.min(),yt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yn{constructor(t,n){this.position=t,this.inclusive=n}}function so(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=C.comparator(C.fromName(o.referenceValue),n.key):r=Ee(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function oo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!bt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class cn{constructor(t,n="asc"){this.field=t,this.dir=n}}function gd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class tu{}class Q extends tu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new yd(t,n,r):n==="array-contains"?new Td(t,r):n==="in"?new Id(t,r):n==="not-in"?new wd(t,r):n==="array-contains-any"?new Ad(t,r):new Q(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new vd(t,r):new Ed(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ee(n,this.value)):n!==null&&ie(this.value)===ie(n)&&this.matchesComparison(Ee(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wt extends tu{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new wt(t,n)}matches(t){return eu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function eu(e){return e.op==="and"}function nu(e){return _d(e)&&eu(e)}function _d(e){for(const t of e.filters)if(t instanceof wt)return!1;return!0}function hi(e){if(e instanceof Q)return e.field.canonicalString()+e.op.toString()+Te(e.value);if(nu(e))return e.filters.map(t=>hi(t)).join(",");{const t=e.filters.map(n=>hi(n)).join(",");return`${e.op}(${t})`}}function ru(e,t){return e instanceof Q?function(r,i){return i instanceof Q&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(e,t):e instanceof wt?function(r,i){return i instanceof wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ru(o,i.filters[a]),!0):!1}(e,t):void V()}function iu(e){return e instanceof Q?function(n){return`${n.field.canonicalString()} ${n.op} ${Te(n.value)}`}(e):e instanceof wt?function(n){return n.op.toString()+" {"+n.getFilters().map(iu).join(" ,")+"}"}(e):"Filter"}class yd extends Q{constructor(t,n,r){super(t,n,r),this.key=C.fromName(r.referenceValue)}matches(t){const n=C.comparator(t.key,this.key);return this.matchesComparison(n)}}class vd extends Q{constructor(t,n){super(t,"in",n),this.keys=su("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ed extends Q{constructor(t,n){super(t,"not-in",n),this.keys=su("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function su(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>C.fromName(r.referenceValue))}class Td extends Q{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ji(n)&&un(n.arrayValue,this.value)}}class Id extends Q{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&un(this.value.arrayValue,n)}}class wd extends Q{constructor(t,n){super(t,"not-in",n)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!un(this.value.arrayValue,n)}}class Ad extends Q{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ji(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>un(this.value.arrayValue,r))}}/**
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
 */class Rd{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function ao(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Rd(e,t,n,r,i,s,o)}function Zi(e){const t=k(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>hi(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Te(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Te(r)).join(",")),t.ce=n}return t.ce}function ts(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ru(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!oo(e.startAt,t.startAt)&&oo(e.endAt,t.endAt)}function di(e){return C.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class be{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Cd(e,t,n,r,i,s,o,a){return new be(e,t,n,r,i,s,o,a)}function es(e){return new be(e)}function uo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ou(e){return e.collectionGroup!==null}function Ge(e){const t=k(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new cn(s,r))}),n.has(it.keyField().canonicalString())||t.le.push(new cn(it.keyField(),r))}return t.le}function St(e){const t=k(e);return t.he||(t.he=Sd(t,Ge(e))),t.he}function Sd(e,t){if(e.limitType==="F")return ao(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new cn(i.field,s)});const n=e.endAt?new Yn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Yn(e.startAt.position,e.startAt.inclusive):null;return ao(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function fi(e,t){const n=e.filters.concat([t]);return new be(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function pi(e,t,n){return new be(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function vr(e,t){return ts(St(e),St(t))&&e.limitType===t.limitType}function au(e){return`${Zi(St(e))}|lt:${e.limitType}`}function ce(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>iu(i)).join(", ")}]`),yr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Te(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Te(i)).join(",")),`Target(${r})`}(St(e))}; limitType=${e.limitType})`}function Er(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):C.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Ge(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=so(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ge(r),i)||r.endAt&&!function(o,a,u){const c=so(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ge(r),i))}(e,t)}function Pd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function uu(e){return(t,n)=>{let r=!1;for(const i of Ge(e)){const s=Vd(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Vd(e,t,n){const r=e.field.isKeyField()?C.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ee(u,c):V()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
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
 */class Ne{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){De(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Ya(this.inner)}size(){return this.innerSize}}/**
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
 */const Dd=new G(C.comparator);function Lt(){return Dd}const cu=new G(C.comparator);function Be(...e){let t=cu;for(const n of e)t=t.insert(n.key,n);return t}function lu(e){let t=cu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Jt(){return He()}function hu(){return He()}function He(){return new Ne(e=>e.toString(),(e,t)=>e.isEqual(t))}const bd=new G(C.comparator),Nd=new ot(C.comparator);function L(...e){let t=Nd;for(const n of e)t=t.add(n);return t}const xd=new ot(B);function kd(){return xd}/**
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
 */function du(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xn(t)?"-0":t}}function fu(e){return{integerValue:""+e}}function Ld(e,t){return dd(t)?fu(t):du(e,t)}/**
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
 */class Tr{constructor(){this._=void 0}}function Od(e,t,n){return e instanceof ln?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xi(s)&&(s=Yi(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof hn?mu(e,t):e instanceof dn?gu(e,t):function(i,s){const o=pu(i,s),a=co(o)+co(i.Ie);return li(o)&&li(i.Ie)?fu(a):du(i.serializer,a)}(e,t)}function Md(e,t,n){return e instanceof hn?mu(e,t):e instanceof dn?gu(e,t):n}function pu(e,t){return e instanceof Jn?function(r){return li(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class ln extends Tr{}class hn extends Tr{constructor(t){super(),this.elements=t}}function mu(e,t){const n=_u(t);for(const r of e.elements)n.some(i=>bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class dn extends Tr{constructor(t){super(),this.elements=t}}function gu(e,t){let n=_u(t);for(const r of e.elements)n=n.filter(i=>!bt(i,r));return{arrayValue:{values:n}}}class Jn extends Tr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function co(e){return W(e.integerValue||e.doubleValue)}function _u(e){return Ji(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class Fd{constructor(t,n){this.field=t,this.transform=n}}function Bd(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof hn&&i instanceof hn||r instanceof dn&&i instanceof dn?ve(r.elements,i.elements,bt):r instanceof Jn&&i instanceof Jn?bt(r.Ie,i.Ie):r instanceof ln&&i instanceof ln}(e.transform,t.transform)}class Ud{constructor(t,n){this.version=t,this.transformResults=n}}class Pt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ir{}function yu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ns(e.key,Pt.none()):new wn(e.key,e.data,Pt.none());{const n=e.data,r=yt.empty();let i=new ot(it.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new oe(e.key,r,new Tt(i.toArray()),Pt.none())}}function qd(e,t,n){e instanceof wn?function(i,s,o){const a=i.value.clone(),u=ho(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof oe?function(i,s,o){if(!Mn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ho(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(vu(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ke(e,t,n,r){return e instanceof wn?function(s,o,a,u){if(!Mn(s.precondition,o))return a;const c=s.value.clone(),l=fo(s.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof oe?function(s,o,a,u){if(!Mn(s.precondition,o))return a;const c=fo(s.fieldTransforms,u,o),l=o.data;return l.setAll(vu(s)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(e,t,n,r):function(s,o,a){return Mn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function jd(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=pu(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function lo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ve(r,i,(s,o)=>Bd(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class wn extends Ir{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oe extends Ir{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ho(e,t,n){const r=new Map;j(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Md(o,a,n[i]))}return r}function fo(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Od(s,o,t))}return r}class ns extends Ir{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zd extends Ir{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $d{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&qd(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ke(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ke(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=hu();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=yu(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(N.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),L())}isEqual(t){return this.batchId===t.batchId&&ve(this.mutations,t.mutations,(n,r)=>lo(n,r))&&ve(this.baseMutations,t.baseMutations,(n,r)=>lo(n,r))}}class rs{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){j(t.mutations.length===r.length);let i=function(){return bd}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rs(t,n,r,i)}}/**
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
 */class Gd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Hd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var K,O;function Kd(e){switch(e){default:return V();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Eu(e){if(e===void 0)return Dt("GRPC error has no .code"),m.UNKNOWN;switch(e){case K.OK:return m.OK;case K.CANCELLED:return m.CANCELLED;case K.UNKNOWN:return m.UNKNOWN;case K.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case K.INTERNAL:return m.INTERNAL;case K.UNAVAILABLE:return m.UNAVAILABLE;case K.UNAUTHENTICATED:return m.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case K.NOT_FOUND:return m.NOT_FOUND;case K.ALREADY_EXISTS:return m.ALREADY_EXISTS;case K.PERMISSION_DENIED:return m.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case K.ABORTED:return m.ABORTED;case K.OUT_OF_RANGE:return m.OUT_OF_RANGE;case K.UNIMPLEMENTED:return m.UNIMPLEMENTED;case K.DATA_LOSS:return m.DATA_LOSS;default:return V()}}(O=K||(K={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Wd(){return new TextEncoder}/**
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
 */const Qd=new me([4294967295,4294967295],0);function po(e){const t=Wd().encode(e),n=new Qh;return n.update(t),new Uint8Array(n.digest())}function mo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new me([n,r],0),new me([i,s],0)]}class is{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ue(`Invalid padding: ${n}`);if(r<0)throw new Ue(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ue(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ue(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=me.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(me.fromNumber(r)));return i.compare(Qd)===1&&(i=new me([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=po(t),[r,i]=mo(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new is(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=po(t),[r,i]=mo(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ue extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wr{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new wr(N.min(),i,new G(B),Lt(),L())}}class An{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new An(r,n,L(),L(),L())}}/**
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
 */class Fn{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class Tu{constructor(t,n){this.targetId=t,this.fe=n}}class Iu{constructor(t,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class go{constructor(){this.ge=0,this.pe=yo(),this.ye=dt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=L(),n=L(),r=L();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new An(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=yo()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,j(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Xd{constructor(t){this.Le=t,this.ke=new Map,this.qe=Lt(),this.Qe=_o(),this.Ke=new G(B)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:V()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(di(s))if(r===0){const o=new C(s.path);this.We(n,o,ct.newNoDocument(o,N.min()))}else j(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=re(r).toUint8Array()}catch(u){if(u instanceof Ja)return ye("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new is(o,i,s)}catch(u){return ye(u instanceof Ue?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&di(a.target)){const u=new C(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,ct.newNoDocument(u,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=L();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new wr(t,n,this.Ke,this.qe,r);return this.qe=Lt(),this.Qe=_o(),this.Ke=new G(B),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new go,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new ot(B),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||T("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new go),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function _o(){return new G(C.comparator)}function yo(){return new G(C.comparator)}const Yd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Jd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Zd=(()=>({and:"AND",or:"OR"}))();class tf{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function mi(e,t){return e.useProto3Json||yr(t)?t:{value:t}}function Zn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ef(e,t){return Zn(e,t.toTimestamp())}function Vt(e){return j(!!e),N.fromTimestamp(function(n){const r=jt(n);return new J(r.seconds,r.nanos)}(e))}function ss(e,t){return gi(e,t).canonicalString()}function gi(e,t){const n=function(i){return new $(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Au(e){const t=$.fromString(e);return j(Vu(t)),t}function _i(e,t){return ss(e.databaseId,t.path)}function qr(e,t){const n=Au(t);if(n.get(1)!==e.databaseId.projectId)throw new w(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new C(Cu(n))}function Ru(e,t){return ss(e.databaseId,t)}function nf(e){const t=Au(e);return t.length===4?$.emptyPath():Cu(t)}function yi(e){return new $(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Cu(e){return j(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function vo(e,t,n){return{name:_i(e,t),fields:n.value.mapValue.fields}}function rf(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:V()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(j(l===void 0||typeof l=="string"),dt.fromBase64String(l||"")):(j(l===void 0||l instanceof Uint8Array),dt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?m.UNKNOWN:Eu(c.code);return new w(l,c.message||"")}(o);n=new Iu(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=qr(e,r.document.name),s=Vt(r.document.updateTime),o=r.document.createTime?Vt(r.document.createTime):N.min(),a=new yt({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Fn(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=qr(e,r.document),s=r.readTime?Vt(r.readTime):N.min(),o=ct.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=qr(e,r.document),s=r.removedTargetIds||[];n=new Fn([],s,i,null)}else{if(!("filter"in t))return V();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Hd(i,s),a=r.targetId;n=new Tu(a,o)}}return n}function sf(e,t){let n;if(t instanceof wn)n={update:vo(e,t.key,t.value)};else if(t instanceof ns)n={delete:_i(e,t.key)};else if(t instanceof oe)n={update:vo(e,t.key,t.data),updateMask:pf(t.fieldMask)};else{if(!(t instanceof zd))return V();n={verify:_i(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ln)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof hn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof dn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw V()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ef(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:V()}(e,t.precondition)),n}function of(e,t){return e&&e.length>0?(j(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Vt(i.updateTime):Vt(s);return o.isEqual(N.min())&&(o=Vt(s)),new Ud(o,i.transformResults||[])}(n,t))):[]}function af(e,t){return{documents:[Ru(e,t.path)]}}function uf(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ru(e,i);const s=function(c){if(c.length!==0)return Pu(wt.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(l=>function(p){return{field:le(p.field),direction:hf(p.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=mi(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:i}}function cf(e){let t=nf(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){j(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];n.where&&(s=function(f){const p=Su(f);return p instanceof wt&&nu(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(x){return new cn(he(x.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,yr(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,_=f.values||[];return new Yn(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,_=f.values||[];return new Yn(_,p)}(n.endAt)),Cd(t,i,o,s,a,"F",u,c)}function lf(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Su(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=he(n.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=he(n.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=he(n.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=he(n.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(e):e.fieldFilter!==void 0?function(n){return Q.create(he(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return wt.create(n.compositeFilter.filters.map(r=>Su(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return V()}}(n.compositeFilter.op))}(e):V()}function hf(e){return Yd[e]}function df(e){return Jd[e]}function ff(e){return Zd[e]}function le(e){return{fieldPath:e.canonicalString()}}function he(e){return it.fromServerFormat(e.fieldPath)}function Pu(e){return e instanceof Q?function(n){if(n.op==="=="){if(io(n.value))return{unaryFilter:{field:le(n.field),op:"IS_NAN"}};if(ro(n.value))return{unaryFilter:{field:le(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(io(n.value))return{unaryFilter:{field:le(n.field),op:"IS_NOT_NAN"}};if(ro(n.value))return{unaryFilter:{field:le(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:le(n.field),op:df(n.op),value:n.value}}}(e):e instanceof wt?function(n){const r=n.getFilters().map(i=>Pu(i));return r.length===1?r[0]:{compositeFilter:{op:ff(n.op),filters:r}}}(e):V()}function pf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Vu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Ot{constructor(t,n,r,i,s=N.min(),o=N.min(),a=dt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Ot(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class mf{constructor(t){this.ct=t}}function gf(e){const t=cf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?pi(t,t.limit,"L"):t}/**
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
 */class _f{constructor(){this._n=new yf}addToCollectionParentIndex(t,n){return this._n.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(qt.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class yf{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new ot($.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ot($.comparator)).toArray()}}/**
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
 */class Ie{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ie(0)}static Bn(){return new Ie(-1)}}/**
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
 */class vf{constructor(){this.changes=new Ne(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ct.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ef{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Tf{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Ke(r.mutation,i,Tt.empty(),J.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,L()).next(()=>r))}getLocalViewOfDocuments(t,n,r=L()){const i=Jt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Be();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Jt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,L()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Lt();const o=He(),a=function(){return He()}();return n.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof oe)?s=s.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Ke(l.mutation,c,l.mutation.getFieldMask(),J.now())):o.set(c.key,Tt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var f;return a.set(c,new Ef(l,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=He();let i=new G((o,a)=>o-a),s=L();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||Tt.empty();l=a.applyToLocalView(c,l),r.set(u,l);const f=(i.get(a.batchId)||L()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,f=hu();l.forEach(p=>{if(!s.has(p)){const _=yu(n.get(p),r.get(p));_!==null&&f.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,f))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return C.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ou(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):g.resolve(Jt());let a=-1,u=s;return o.next(c=>g.forEach(c,(l,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(p=>{u=u.insert(l,p)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,L())).next(l=>({batchId:a,changes:lu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new C(n)).next(r=>{let i=Be();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Be();return this.indexManager.getCollectionParents(t,s).next(a=>g.forEach(a,u=>{const c=function(f,p){return new be(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(l=>{l.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,ct.newInvalidDocument(l)))});let a=Be();return o.forEach((u,c)=>{const l=s.get(u);l!==void 0&&Ke(l.mutation,c,Tt.empty(),J.now()),Er(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class If{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return g.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Vt(i.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:gf(i.bundledQuery),readTime:Vt(i.readTime)}}(n)),g.resolve()}}/**
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
 */class wf{constructor(){this.overlays=new G(C.comparator),this.hr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Jt();return g.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const i=Jt(),s=n.length+1,o=new C(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new G((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=Jt(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Jt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return g.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gd(n,r));let s=this.hr.get(n);s===void 0&&(s=L(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class os{constructor(){this.Pr=new ot(Z.Ir),this.Tr=new ot(Z.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Z(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Z(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new C(new $([])),r=new Z(n,t),i=new Z(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new C(new $([])),r=new Z(n,t),i=new Z(n,t+1);let s=L();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Z(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Z{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return C.comparator(t.key,n.key)||B(t.pr,n.pr)}static Er(t,n){return B(t.pr,n.pr)||C.comparator(t.key,n.key)}}/**
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
 */class Af{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ot(Z.Ir)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $d(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Z(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Z(n,0),i=new Z(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ot(B);return n.forEach(i=>{const s=new Z(i,0),o=new Z(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),g.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;C.isDocumentKey(s)||(s=s.child(""));const o=new Z(new C(s),0);let a=new ot(B);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),g.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){j(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return g.forEach(n.mutations,i=>{const s=new Z(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Z(n,0),i=this.wr.firstAfterOrEqual(r);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Rf{constructor(t){this.vr=t,this.docs=function(){return new G(C.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(t,n){let r=Lt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Lt();const o=n.path,a=new C(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ad(od(l),r)<=0||(i.has(l.key)||Er(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,n,r,i){V()}Fr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Cf(this)}getSize(t){return g.resolve(this.size)}}class Cf extends vf{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class Sf{constructor(t){this.persistence=t,this.Mr=new Ne(n=>Zi(n),ts),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Or=0,this.Nr=new os,this.targetCount=0,this.Br=Ie.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),g.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Ie(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.qn(n),g.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Nr.containsKey(n))}}/**
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
 */class Pf{constructor(t,n){this.Lr={},this.overlays={},this.kr=new Qi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Sf(this),this.indexManager=new _f,this.remoteDocumentCache=function(i){return new Rf(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new mf(n),this.$r=new If(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new wf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new Af(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){T("MemoryPersistence","Starting transaction:",t);const i=new Vf(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return g.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class Vf extends cd{constructor(t){super(),this.currentSequenceNumber=t}}class as{constructor(t){this.persistence=t,this.zr=new os,this.jr=null}static Hr(t){return new as(t)}get Jr(){if(this.jr)return this.jr;throw V()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),g.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Jr,r=>{const i=C.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,N.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return g.or([()=>g.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class us{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=L(),i=L();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new us(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Df{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class bf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Pc()?8:Yt.v(qn())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Df;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(Oe()<=M.DEBUG&&T("QueryEngine","SDK will not create cache indexes for query:",ce(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),g.resolve()):(Oe()<=M.DEBUG&&T("QueryEngine","Query:",ce(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Oe()<=M.DEBUG&&T("QueryEngine","The SDK decides to create cache indexes for query:",ce(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(n))):g.resolve())}ji(t,n){if(uo(n))return g.resolve(null);let r=St(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pi(n,null,"F"),r=St(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=L(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(t,pi(n,null,"F")):this.es(t,c,n,u)}))})))}Hi(t,n,r,i){return uo(n)||i.isEqual(N.min())?g.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?g.resolve(null):(Oe()<=M.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ce(n)),this.es(t,o,n,sd(i,-1)).next(a=>a))})}Zi(t,n){let r=new ot(uu(t));return n.forEach((i,s)=>{Er(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return Oe()<=M.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",ce(n)),this.zi.getDocumentsMatchingQuery(t,n,qt.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Nf{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new G(B),this.rs=new Ne(s=>Zi(s),ts),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Tf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function xf(e,t,n,r){return new Nf(e,t,n,r)}async function Du(e,t){const n=k(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=L();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function kf(e,t){const n=k(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const f=c.batch,p=f.keys();let _=g.resolve();return p.forEach(x=>{_=_.next(()=>l.getEntry(u,x)).next(S=>{const A=c.docVersions.get(x);j(A!==null),S.version.compareTo(A)<0&&(f.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),l.addEntry(S)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=L();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function bu(e){const t=k(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Lf(e,t){const n=k(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((l,f)=>{const p=i.get(f);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,l.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,l.addedDocuments,f)));let _=p.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?_=_.withResumeToken(dt.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,r)),i=i.insert(f,_),function(S,A,U){return S.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(p,_,l)&&a.push(n.Qr.updateTargetData(s,_))});let u=Lt(),c=L();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Of(s,o,t.documentUpdates).next(l=>{u=l.cs,c=l.ls})),!r.isEqual(N.min())){const l=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function Of(e,t,n){let r=L(),i=L();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Lt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(N.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function Mf(e,t){const n=k(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Ff(e,t){const n=k(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ot(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function vi(e,t,n){const r=k(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!In(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Eo(e,t,n){const r=k(e);let i=N.min(),s=L();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const f=k(u),p=f.rs.get(l);return p!==void 0?g.resolve(f.ns.get(p)):f.Qr.getTargetData(c,l)}(r,o,St(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:N.min(),n?s:L())).next(a=>(Bf(r,Pd(t),a),{documents:a,hs:s})))}function Bf(e,t,n){let r=e.ss.get(t)||N.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class To{constructor(){this.activeTargetIds=kd()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Uf{constructor(){this.no=new To,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new To,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class qf{io(t){}shutdown(){}}/**
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
 */class Io{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let kn=null;function jr(){return kn===null?kn=function(){return 268435456+Math.round(2147483648*Math.random())}():kn++,"0x"+kn.toString(16)}/**
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
 */const jf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const at="WebChannelConnection";class $f extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=jr(),u=this.bo(n,r.toUriEncodedString());T("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(n,u,c,i).then(l=>(T("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw ye("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ve}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=jf[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=jr();return new Promise((o,a)=>{const u=new Wh;u.setWithCredentials(!0),u.listenOnce(Hh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ur.NO_ERROR:const l=u.getResponseJson();T(at,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Ur.TIMEOUT:T(at,`RPC '${t}' ${s} timed out`),a(new w(m.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const f=u.getStatus();if(T(at,`RPC '${t}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const x=function(A){const U=A.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(U)>=0?U:m.UNKNOWN}(_.status);a(new w(x,_.message))}else a(new w(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new w(m.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{T(at,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);T(at,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Fo(t,n,r){const i=jr(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=$h(),a=Gh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=s.join("");T(at,`Creating RPC '${t}' stream ${i}: ${l}`,u);const f=o.createWebChannel(l,u);let p=!1,_=!1;const x=new zf({lo:A=>{_?T(at,`Not sending because RPC '${t}' stream ${i} is closed:`,A):(p||(T(at,`Opening RPC '${t}' stream ${i} transport.`),f.open(),p=!0),T(at,`RPC '${t}' stream ${i} sending:`,A),f.send(A))},ho:()=>f.close()}),S=(A,U,X)=>{A.listen(U,ft=>{try{X(ft)}catch(vt){setTimeout(()=>{throw vt},0)}})};return S(f,bn.EventType.OPEN,()=>{_||T(at,`RPC '${t}' stream ${i} transport opened.`)}),S(f,bn.EventType.CLOSE,()=>{_||(_=!0,T(at,`RPC '${t}' stream ${i} transport closed`),x.Vo())}),S(f,bn.EventType.ERROR,A=>{_||(_=!0,ye(at,`RPC '${t}' stream ${i} transport errored:`,A),x.Vo(new w(m.UNAVAILABLE,"The operation could not be completed")))}),S(f,bn.EventType.MESSAGE,A=>{var U;if(!_){const X=A.data[0];j(!!X);const ft=X,vt=ft.error||((U=ft[0])===null||U===void 0?void 0:U.error);if(vt){T(at,`RPC '${t}' stream ${i} received error:`,vt);const Et=vt.status;let E=function(d){const R=K[d];if(R!==void 0)return Eu(R)}(Et),y=vt.message;E===void 0&&(E=m.INTERNAL,y="Unknown error status: "+Et+" with message "+vt.message),_=!0,x.Vo(new w(E,y)),f.close()}else T(at,`RPC '${t}' stream ${i} received:`,X),x.mo(X)}}),S(a,Kh.STAT_EVENT,A=>{A.stat===Xs.PROXY?T(at,`RPC '${t}' stream ${i} detected buffering proxy`):A.stat===Xs.NOPROXY&&T(at,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.Ro()},0),x}}function zr(){return typeof document<"u"?document:null}/**
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
 */function Ar(e){return new tf(e,!0)}/**
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
 */class Nu{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&T("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class xu{constructor(t,n,r,i,s,o,a,u){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Nu(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new w(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gf extends xu{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=rf(this.serializer,t),r=function(s){if(!("targetChange"in s))return N.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?N.min():o.readTime?Vt(o.readTime):N.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=yi(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=di(u)?{documents:af(s,u)}:{query:uf(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wu(s,o.resumeToken);const c=mi(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(N.min())>0){a.readTime=Zn(s,o.snapshotVersion.toTimestamp());const c=mi(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=lf(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=yi(this.serializer),n.removeTarget=t,this.t_(n)}}class Hf extends xu{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(j(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=of(t.writeResults,t.commitTime),r=Vt(t.commitTime);return this.listener.T_(r,n)}return j(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=yi(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>sf(this.serializer,r))};this.t_(n)}}/**
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
 */class Kf extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new w(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,gi(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(m.UNKNOWN,s.toString())})}vo(t,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,gi(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new w(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Wf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Dt(n),this.g_=!1):T("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class Qf{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{ae(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=k(u);c.v_.add(4),await Rn(c),c.x_.set("Unknown"),c.v_.delete(4),await Rr(c)}(this))})}),this.x_=new Wf(r,i)}}async function Rr(e){if(ae(e))for(const t of e.F_)await t(!0)}async function Rn(e){for(const t of e.F_)await t(!1)}function ku(e,t){const n=k(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),hs(n)?ls(n):xe(n).Jo()&&cs(n,t))}function Lu(e,t){const n=k(e),r=xe(n);n.C_.delete(t),r.Jo()&&Ou(n,t),n.C_.size===0&&(r.Jo()?r.Xo():ae(n)&&n.x_.set("Unknown"))}function cs(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(N.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}xe(e).c_(t)}function Ou(e,t){e.O_.Oe(t),xe(e).l_(t)}function ls(e){e.O_=new Xd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),xe(e).start(),e.x_.p_()}function hs(e){return ae(e)&&!xe(e).Ho()&&e.C_.size>0}function ae(e){return k(e).v_.size===0}function Mu(e){e.O_=void 0}async function Xf(e){e.C_.forEach((t,n)=>{cs(e,t)})}async function Yf(e,t){Mu(e),hs(e)?(e.x_.S_(t),ls(e)):e.x_.set("Unknown")}async function Jf(e,t,n){if(e.x_.set("Online"),t instanceof Iu&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await tr(e,r)}else if(t instanceof Fn?e.O_.$e(t):t instanceof Tu?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(N.min()))try{const r=await bu(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.C_.get(c);l&&s.C_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=s.C_.get(u);if(!l)return;s.C_.set(u,l.withResumeToken(dt.EMPTY_BYTE_STRING,l.snapshotVersion)),Ou(s,u);const f=new Ot(l.target,u,c,l.sequenceNumber);cs(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await tr(e,r)}}async function tr(e,t,n){if(!In(t))throw t;e.v_.add(1),await Rn(e),e.x_.set("Offline"),n||(n=()=>bu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Rr(e)})}function Fu(e,t){return t().catch(n=>tr(e,n,t))}async function Cr(e){const t=k(e),n=zt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Zf(t);)try{const i=await Mf(t.localStore,r);if(i===null){t.D_.length===0&&n.Xo();break}r=i.batchId,tp(t,i)}catch(i){await tr(t,i)}Bu(t)&&Uu(t)}function Zf(e){return ae(e)&&e.D_.length<10}function tp(e,t){e.D_.push(t);const n=zt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Bu(e){return ae(e)&&!zt(e).Ho()&&e.D_.length>0}function Uu(e){zt(e).start()}async function ep(e){zt(e).d_()}async function np(e){const t=zt(e);for(const n of e.D_)t.I_(n.mutations)}async function rp(e,t,n){const r=e.D_.shift(),i=rs.from(r,t,n);await Fu(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Cr(e)}async function ip(e,t){t&&zt(e).P_&&await async function(r,i){if(function(o){return Kd(o)&&o!==m.ABORTED}(i.code)){const s=r.D_.shift();zt(r).Zo(),await Fu(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cr(r)}}(e,t),Bu(e)&&Uu(e)}async function wo(e,t){const n=k(e);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=ae(n);n.v_.add(3),await Rn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Rr(n)}async function sp(e,t){const n=k(e);t?(n.v_.delete(2),await Rr(n)):t||(n.v_.add(2),await Rn(n),n.x_.set("Unknown"))}function xe(e){return e.N_||(e.N_=function(n,r,i){const s=k(n);return s.R_(),new Gf(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:Xf.bind(null,e),To:Yf.bind(null,e),u_:Jf.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),hs(e)?ls(e):e.x_.set("Unknown")):(await e.N_.stop(),Mu(e))})),e.N_}function zt(e){return e.B_||(e.B_=function(n,r,i){const s=k(n);return s.R_(),new Hf(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:ep.bind(null,e),To:ip.bind(null,e),E_:np.bind(null,e),T_:rp.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await Cr(e)):(await e.B_.stop(),e.D_.length>0&&(T("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
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
 */class ds{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new ds(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fs(e,t){if(Dt("AsyncQueue",`${t}: ${e}`),In(e))return new w(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ge{constructor(t){this.comparator=t?(n,r)=>t(n,r)||C.comparator(n.key,r.key):(n,r)=>C.comparator(n.key,r.key),this.keyedMap=Be(),this.sortedSet=new G(this.comparator)}static emptySet(t){return new ge(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ge)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ge;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Ao{constructor(){this.L_=new G(C.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):V():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class we{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new we(t,n,ge.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class op{constructor(){this.q_=void 0,this.Q_=[]}}class ap{constructor(){this.queries=new Ne(t=>au(t),vr),this.onlineState="Unknown",this.K_=new Set}}async function qu(e,t){const n=k(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new op),i)try{s.q_=await n.onListen(r)}catch(o){const a=fs(o,`Initialization of query '${ce(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.Q_.push(t),t.U_(n.onlineState),s.q_&&t.W_(s.q_)&&ps(n)}async function ju(e,t){const n=k(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function up(e,t){const n=k(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&ps(n)}function cp(e,t,n){const r=k(e),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(t)}function ps(e){e.K_.forEach(t=>{t.next()})}class zu{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new we(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=we.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class $u{constructor(t){this.key=t}}class Gu{constructor(t){this.key=t}}class lp{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=L(),this.mutatedKeys=L(),this.ua=uu(t),this.ca=new ge(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new Ao,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,f)=>{const p=i.get(l),_=Er(this.query,f)?f:null,x=!!p&&this.mutatedKeys.has(p.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let A=!1;p&&_?p.data.isEqual(_.data)?x!==S&&(r.track({type:3,doc:_}),A=!0):this.Ia(p,_)||(r.track({type:2,doc:_}),A=!0,(u&&this.ua(_,u)>0||c&&this.ua(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),A=!0):p&&!_&&(r.track({type:1,doc:p}),A=!0,(u||c)&&(a=!0)),A&&(_?(o=o.add(_),s=S?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((l,f)=>function(_,x){const S=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return S(_)-S(x)}(l.type,f.type)||this.ua(l.doc,f.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],u=this.aa.size===0&&this.current&&!i?1:0,c=u!==this._a;return this._a=u,o.length!==0||c?{snapshot:new we(this.query,t.ca,s,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Ao,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=L(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new Gu(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new $u(r))}),n}Ra(t){this.oa=t.hs,this.aa=L();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return we.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class hp{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class dp{constructor(t){this.key=t,this.ma=!1}}class fp{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ne(a=>au(a),vr),this.pa=new Map,this.ya=new Set,this.wa=new G(C.comparator),this.Sa=new Map,this.ba=new os,this.Da={},this.Ca=new Map,this.va=Ie.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function pp(e,t){const n=Ap(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Ff(n.localStore,St(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await mp(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&ku(n.remoteStore,o)}return i}async function mp(e,t,n,r,i){e.Ma=(f,p,_)=>async function(S,A,U,X){let ft=A.view.ha(U);ft.Xi&&(ft=await Eo(S.localStore,A.query,!1).then(({documents:y})=>A.view.ha(y,ft)));const vt=X&&X.targetChanges.get(A.targetId),Et=X&&X.targetMismatches.get(A.targetId)!=null,E=A.view.applyChanges(ft,S.isPrimaryClient,vt,Et);return Co(S,A.targetId,E.da),E.snapshot}(e,f,p,_);const s=await Eo(e.localStore,t,!0),o=new lp(t,s.hs),a=o.ha(s.documents),u=An.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);Co(e,n,c.da);const l=new hp(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),c.snapshot}async function gp(e,t){const n=k(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!vr(s,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Lu(n.remoteStore,r.targetId),Ei(n,r.targetId)}).catch(Tn)):(Ei(n,r.targetId),await vi(n.localStore,r.targetId,!0))}async function _p(e,t,n){const r=Rp(e);try{const i=await function(o,a){const u=k(o),c=J.now(),l=a.reduce((_,x)=>_.add(x.key),L());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let x=Lt(),S=L();return u.os.getEntries(_,l).next(A=>{x=A,x.forEach((U,X)=>{X.isValidDocument()||(S=S.add(U))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,x)).next(A=>{f=A;const U=[];for(const X of a){const ft=jd(X,f.get(X.key).overlayedDocument);ft!=null&&U.push(new oe(X.key,ft,Za(ft.value.mapValue),Pt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,U,a)}).next(A=>{p=A;const U=A.applyToLocalDocumentSet(f,S);return u.documentOverlayCache.saveOverlays(_,A.batchId,U)})}).then(()=>({batchId:p.batchId,changes:lu(f)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Da[o.currentUser.toKey()];c||(c=new G(B)),c=c.insert(a,u),o.Da[o.currentUser.toKey()]=c}(r,i.batchId,n),await Cn(r,i.changes),await Cr(r.remoteStore)}catch(i){const s=fs(i,"Failed to persist write");n.reject(s)}}async function Hu(e,t){const n=k(e);try{const r=await Lf(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?j(o.ma):i.removedDocuments.size>0&&(j(o.ma),o.ma=!1))}),await Cn(n,r,t)}catch(r){await Tn(r)}}function Ro(e,t,n){const r=k(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=k(o);u.onlineState=a;let c=!1;u.queries.forEach((l,f)=>{for(const p of f.Q_)p.U_(a)&&(c=!0)}),c&&ps(u)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function yp(e,t,n){const r=k(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new G(C.comparator);o=o.insert(s,ct.newNoDocument(s,N.min()));const a=L().add(s),u=new wr(N.min(),new Map,new G(B),o,a);await Hu(r,u),r.wa=r.wa.remove(s),r.Sa.delete(t),ms(r)}else await vi(r.localStore,t,!1).then(()=>Ei(r,t,n)).catch(Tn)}async function vp(e,t){const n=k(e),r=t.batch.batchId;try{const i=await kf(n.localStore,t);Wu(n,r,null),Ku(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cn(n,i)}catch(i){await Tn(i)}}async function Ep(e,t,n){const r=k(e);try{const i=await function(o,a){const u=k(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(j(f!==null),l=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);Wu(r,t,n),Ku(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Cn(r,i)}catch(i){await Tn(i)}}function Ku(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function Wu(e,t,n){const r=k(e);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function Ei(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||Qu(e,r)})}function Qu(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(Lu(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),ms(e))}function Co(e,t,n){for(const r of n)r instanceof $u?(e.ba.addReference(r.key,t),Tp(e,r)):r instanceof Gu?(T("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Qu(e,r.key)):V()}function Tp(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(T("SyncEngine","New document in limbo: "+n),e.ya.add(r),ms(e))}function ms(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new C($.fromString(t)),r=e.va.next();e.Sa.set(r,new dp(n)),e.wa=e.wa.insert(n,r),ku(e.remoteStore,new Ot(St(es(n.path)),r,"TargetPurposeLimboResolution",Qi._e))}}async function Cn(e,t,n){const r=k(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,u)=>{o.push(r.Ma(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=us.Ki(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.fa.u_(i),await async function(u,c){const l=k(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>g.forEach(c,p=>g.forEach(p.qi,_=>l.persistence.referenceDelegate.addReference(f,p.targetId,_)).next(()=>g.forEach(p.Qi,_=>l.persistence.referenceDelegate.removeReference(f,p.targetId,_)))))}catch(f){if(!In(f))throw f;T("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const _=l.ns.get(p),x=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(x);l.ns=l.ns.insert(p,S)}}}(r.localStore,s))}async function Ip(e,t){const n=k(e);if(!n.currentUser.isEqual(t)){T("SyncEngine","User change. New user:",t.toKey());const r=await Du(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(u=>{u.reject(new w(m.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cn(n,r.us)}}function wp(e,t){const n=k(e),r=n.Sa.get(t);if(r&&r.ma)return L().add(r.key);{let i=L();const s=n.pa.get(t);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function Ap(e){const t=k(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=wp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yp.bind(null,t),t.fa.u_=up.bind(null,t.eventManager),t.fa.xa=cp.bind(null,t.eventManager),t}function Rp(e){const t=k(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ep.bind(null,t),t}class So{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ar(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return xf(this.persistence,new bf,t.initialUser,this.serializer)}createPersistence(t){return new Pf(as.Hr,this.serializer)}createSharedClientState(t){return new Uf}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ro(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ip.bind(null,this.syncEngine),await sp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ap}()}createDatastore(t){const n=Ar(t.databaseInfo.databaseId),r=function(s){return new $f(s)}(t.databaseInfo);return function(s,o,a,u){return new Kf(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Qf(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Ro(this.syncEngine,n,0),function(){return Io.D()?new Io:new qf}())}createSyncEngine(t,n){return function(i,s,o,a,u,c,l){const f=new fp(i,s,o,a,u,c);return l&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=k(r);T("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Rn(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class Xu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Dt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Sp{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=Xa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{T("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(T("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=fs(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function $r(e,t){e.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Du(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Po(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Vp(e);T("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>wo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>wo(t.remoteStore,i)),e._onlineComponents=t}function Pp(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Vp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await $r(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Pp(n))throw n;ye("Error using user provided cache. Falling back to memory cache: "+n),await $r(e,new So)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await $r(e,new So);return e._offlineComponents}async function Yu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await Po(e,e._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await Po(e,new Cp))),e._onlineComponents}function Dp(e){return Yu(e).then(t=>t.syncEngine)}async function Ti(e){const t=await Yu(e),n=t.eventManager;return n.onListen=pp.bind(null,t.syncEngine),n.onUnlisten=gp.bind(null,t.syncEngine),n}function bp(e,t,n={}){const r=new xt;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new Xu({next:p=>{o.enqueueAndForget(()=>ju(s,f)),p.fromCache&&u.source==="server"?c.reject(new w(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new zu(a,l,{includeMetadataChanges:!0,Z_:!0});return qu(s,f)}(await Ti(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ju(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Vo=new Map;/**
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
 */function Zu(e,t,n){if(!n)throw new w(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Np(e,t,n,r){if(t===!0&&r===!0)throw new w(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Do(e){if(!C.isDocumentKey(e))throw new w(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function bo(e){if(C.isDocumentKey(e))throw new w(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Sr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":V()}function Bt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sr(e);throw new w(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class No{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Np("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ju((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new w(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new w(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new w(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Pr{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new No({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new No(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xh;switch(r.type){case"firstParty":return new td(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vo.get(n);r&&(T("ComponentProvider","Removing Datastore"),Vo.delete(n),r.terminate())}(this),Promise.resolve()}}function xp(e,t,n,r={}){var i;const s=(e=Bt(e,Pr))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ut.MOCK_USER;else{a=Cc(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new w(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(c)}e._authCredentials=new Yh(new Qa(a,u))}}/**
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
 */class Ht{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ht(this.firestore,t,this._query)}}class mt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class Ut extends Ht{constructor(t,n,r){super(t,n,es(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new C(t))}withConverter(t){return new Ut(this.firestore,t,this._path)}}function Zp(e,t,...n){if(e=te(e),Zu("collection","path",t),e instanceof Pr){const r=$.fromString(t,...n);return bo(r),new Ut(e,null,r)}{if(!(e instanceof mt||e instanceof Ut))throw new w(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child($.fromString(t,...n));return bo(r),new Ut(e.firestore,null,r)}}function kp(e,t,...n){if(e=te(e),arguments.length===1&&(t=Xa.newId()),Zu("doc","path",t),e instanceof Pr){const r=$.fromString(t,...n);return Do(r),new mt(e,null,new C(r))}{if(!(e instanceof mt||e instanceof Ut))throw new w(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child($.fromString(t,...n));return Do(r),new mt(e.firestore,e instanceof Ut?e.converter:null,new C(r))}}/**
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
 */class Lp{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Nu(this,"async_queue_retry"),this._u=()=>{const n=zr();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=zr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=zr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new xt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!In(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Dt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=ds.createAndSchedule(this,t,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&V()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}function xo(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Ae extends Pr{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Lp}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tc(this),this._firestoreClient.terminate()}}function tm(e,t){const n=typeof e=="object"?e:Nl(),r=typeof e=="string"?e:t||"(default)",i=Sl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ac("firestore");s&&xp(i,...s)}return i}function gs(e){return e._firestoreClient||tc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function tc(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,c,l){return new pd(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Ju(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Sp(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Re{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Re(dt.fromBase64String(t))}catch(n){throw new w(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Re(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class _s{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ys{constructor(t){this._methodName=t}}/**
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
 */class vs{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
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
 */const Op=/^__.*__$/;class Mp{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new oe(t,this.data,this.fieldMask,n,this.fieldTransforms):new wn(t,this.data,n,this.fieldTransforms)}}function ec(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class Es{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Es(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.mu(t),i}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return er(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(ec(this.du)&&Op.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class Fp{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ar(t)}Su(t,n,r,i=!1){return new Es({du:t,methodName:n,wu:r,path:it.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nc(e){const t=e._freezeSettings(),n=Ar(e._databaseId);return new Fp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Bp(e,t,n,r,i,s={}){const o=e.Su(s.merge||s.mergeFields?2:0,t,n,i);sc("Data must be an object, but it was:",o,r);const a=rc(r,o);let u,c;if(s.merge)u=new Tt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const f of s.mergeFields){const p=qp(t,f,n);if(!o.contains(p))throw new w(m.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);zp(l,p)||l.push(p)}u=new Tt(l),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new Mp(new yt(a),u,c)}class Ts extends ys{_toFieldTransform(t){return new Fd(t.path,new ln)}isEqual(t){return t instanceof Ts}}function Up(e,t,n,r=!1){return Is(n,e.Su(r?4:3,t))}function Is(e,t){if(ic(e=te(e)))return sc("Unsupported field value:",t,e),rc(e,t);if(e instanceof ys)return function(r,i){if(!ec(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Is(a,i.gu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ld(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=J.fromDate(r);return{timestampValue:Zn(i.serializer,s)}}if(r instanceof J){const s=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zn(i.serializer,s)}}if(r instanceof vs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Re)return{bytesValue:wu(i.serializer,r._byteString)};if(r instanceof mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ss(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Sr(r)}`)}(e,t)}function rc(e,t){const n={};return Ya(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):De(e,(r,i)=>{const s=Is(i,t.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ic(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof J||e instanceof vs||e instanceof Re||e instanceof mt||e instanceof ys)}function sc(e,t,n){if(!ic(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Sr(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function qp(e,t,n){if((t=te(t))instanceof _s)return t._internalPath;if(typeof t=="string")return oc(e,t);throw er("Field path arguments must be of type string or ",e,!1,void 0,n)}const jp=new RegExp("[~\\*/\\[\\]]");function oc(e,t,n){if(t.search(jp)>=0)throw er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new _s(...t.split("."))._internalPath}catch{throw er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function er(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new w(m.INVALID_ARGUMENT,a+e+u)}function zp(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class ac{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $p(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ws("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $p extends ac{data(){return super.data()}}function ws(e,t){return typeof t=="string"?oc(e,t):t instanceof _s?t._internalPath:t._delegate._internalPath}/**
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
 */function uc(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class As{}class cc extends As{}function em(e,t,...n){let r=[];t instanceof As&&r.push(t),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Cs).length,a=s.filter(u=>u instanceof Rs).length;if(o>1||o>0&&a>0)throw new w(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class Rs extends cc{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Rs(t,n,r)}_apply(t){const n=this._parse(t);return lc(t._query,n),new Ht(t.firestore,t.converter,fi(t._query,n))}_parse(t){const n=nc(t.firestore);return function(s,o,a,u,c,l,f){let p;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Lo(f,l);const _=[];for(const x of f)_.push(ko(u,s,x));p={arrayValue:{values:_}}}else p=ko(u,s,f)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Lo(f,l),p=Up(a,o,f,l==="in"||l==="not-in");return Q.create(c,l,p)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Cs extends As{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Cs(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:wt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)lc(o,u),o=fi(o,u)}(t._query,n),new Ht(t.firestore,t.converter,fi(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ss extends cc{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Ss(t,n)}_apply(t){const n=function(i,s,o){if(i.startAt!==null)throw new w(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new w(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cn(s,o)}(t._query,this._field,this._direction);return new Ht(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new be(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,n))}}function nm(e,t="asc"){const n=t,r=ws("orderBy",e);return Ss._create(r,n)}function ko(e,t,n){if(typeof(n=te(n))=="string"){if(n==="")throw new w(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ou(t)&&n.indexOf("/")!==-1)throw new w(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child($.fromString(n));if(!C.isDocumentKey(r))throw new w(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return no(e,new C(r))}if(n instanceof mt)return no(e,n._key);throw new w(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sr(n)}.`)}function Lo(e,t){if(!Array.isArray(e)||e.length===0)throw new w(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lc(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new w(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new w(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Gp{convertValue(t,n="none"){switch(ie(t)){case 0:return null;case 1:return t.booleanValue;case 2:return W(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw V()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return De(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new vs(W(t.latitude),W(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Yi(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(on(t));default:return null}}convertTimestamp(t){const n=jt(t);return new J(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=$.fromString(t);j(Vu(r));const i=new an(r.get(1),r.get(3)),s=new C(r.popFirst(5));return i.isEqual(n)||Dt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Hp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class qe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hc extends ac{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Bn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(ws("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bn extends hc{data(t={}){return super.data(t)}}class dc{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new qe(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Bn(this._firestore,this._userDataWriter,r.key,r,new qe(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Bn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qe(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Bn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qe(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Kp(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Kp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}class Ps extends Gp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Re(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function rm(e){e=Bt(e,Ht);const t=Bt(e.firestore,Ae),n=gs(t),r=new Ps(t);return uc(e._query),bp(n,e._query).then(i=>new dc(t,r,e,i))}function im(e){return fc(Bt(e.firestore,Ae),[new ns(e._key,Pt.none())])}function sm(e,t){const n=Bt(e.firestore,Ae),r=kp(e),i=Hp(e.converter,t);return fc(n,[Bp(nc(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Pt.exists(!1))]).then(()=>r)}function om(e,...t){var n,r,i;e=te(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||xo(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(xo(t[o])){const f=t[o];t[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),t[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),t[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,l;if(e instanceof mt)c=Bt(e.firestore,Ae),l=es(e._key.path),u={next:f=>{t[o]&&t[o](Wp(c,e,f))},error:t[o+1],complete:t[o+2]};else{const f=Bt(e,Ht);c=Bt(f.firestore,Ae),l=f._query;const p=new Ps(c);u={next:_=>{t[o]&&t[o](new dc(c,p,f,_))},error:t[o+1],complete:t[o+2]},uc(e._query)}return function(p,_,x,S){const A=new Xu(S),U=new zu(_,A,x);return p.asyncQueue.enqueueAndForget(async()=>qu(await Ti(p),U)),()=>{A.La(),p.asyncQueue.enqueueAndForget(async()=>ju(await Ti(p),U))}}(gs(c),l,a,u)}function fc(e,t){return function(r,i){const s=new xt;return r.asyncQueue.enqueueAndForget(async()=>_p(await Dp(r),i,s)),s.promise}(gs(e),t)}function Wp(e,t,n){const r=n.docs.get(t._key),i=new Ps(e);return new hc(e,i,t._key,r,new qe(n.hasPendingWrites,n.fromCache),t.converter)}function am(){return new Ts("serverTimestamp")}(function(t,n=!0){(function(i){Ve=i})(Dl),zn(new We("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ae(new Jh(r.getProvider("auth-internal")),new nd(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new w(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new an(c.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),fe(Ys,"4.4.3",t),fe(Ys,"4.4.3","esm2017")})();var Ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qp={exports:{}};(function(e,t){(function(n,r){e.exports=r(n)})(typeof Ln<"u"?Ln:window||Ln.window||Ln.global,function(n){var r={},i="iziToast";document.querySelector("body");var s=!!/Mobi/.test(navigator.userAgent),o=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),a=typeof InstallTrigger<"u",u="ontouchstart"in document.documentElement,c=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},f=568,p={};r.children={};var _={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var x=function(E,y){y=y||{bubbles:!1,cancelable:!1,detail:void 0};var h=document.createEvent("CustomEvent");return h.initCustomEvent(E,y.bubbles,y.cancelable,y.detail),h};x.prototype=window.Event.prototype,window.CustomEvent=x}var S=function(E,y,h){if(Object.prototype.toString.call(E)==="[object Object]")for(var d in E)Object.prototype.hasOwnProperty.call(E,d)&&y.call(h,E[d],d,E);else if(E)for(var R=0,D=E.length;R<D;R++)y.call(h,E[R],R,E)},A=function(E,y){var h={};return S(E,function(d,R){h[R]=E[R]}),S(y,function(d,R){h[R]=y[R]}),h},U=function(E){var y=document.createDocumentFragment(),h=document.createElement("div");for(h.innerHTML=E;h.firstChild;)y.appendChild(h.firstChild);return y},X=function(E){var y=btoa(encodeURIComponent(E));return y.replace(/=/g,"")},ft=function(E){return E.substring(0,1)=="#"||E.substring(0,3)=="rgb"||E.substring(0,3)=="hsl"},vt=function(E){try{return btoa(atob(E))==E}catch{return!1}},Et=function(){return{move:function(E,y,h,d){var R,D=.3,v=180;d!==0&&(E.classList.add(i+"-dragged"),E.style.transform="translateX("+d+"px)",d>0?(R=(v-d)/v,R<D&&y.hide(A(h,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),E,"drag")):(R=(v+d)/v,R<D&&y.hide(A(h,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),E,"drag")),E.style.opacity=R,R<D&&((o||a)&&(E.style.left=d+"px"),E.parentNode.style.opacity=D,this.stopMoving(E,null)))},startMoving:function(E,y,h,d){d=d||window.event;var R=u?d.touches[0].clientX:d.clientX,D=E.style.transform.replace("px)","");D=D.replace("translateX(","");var v=R-D;h.transitionIn&&E.classList.remove(h.transitionIn),h.transitionInMobile&&E.classList.remove(h.transitionInMobile),E.style.transition="",u?document.ontouchmove=function(P){P.preventDefault(),P=P||window.event;var F=P.touches[0].clientX,Y=F-v;Et.move(E,y,h,Y)}:document.onmousemove=function(P){P.preventDefault(),P=P||window.event;var F=P.clientX,Y=F-v;Et.move(E,y,h,Y)}},stopMoving:function(E,y){u?document.ontouchmove=function(){}:document.onmousemove=function(){},E.style.opacity="",E.style.transform="",E.classList.contains(i+"-dragged")&&(E.classList.remove(i+"-dragged"),E.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){E.style.transition=""},400))}}}();return r.setSetting=function(E,y,h){r.children[E][y]=h},r.getSetting=function(E,y){return r.children[E][y]},r.destroy=function(){S(document.querySelectorAll("."+i+"-overlay"),function(E,y){E.remove()}),S(document.querySelectorAll("."+i+"-wrapper"),function(E,y){E.remove()}),S(document.querySelectorAll("."+i),function(E,y){E.remove()}),this.children={},document.removeEventListener(i+"-opened",{},!1),document.removeEventListener(i+"-opening",{},!1),document.removeEventListener(i+"-closing",{},!1),document.removeEventListener(i+"-closed",{},!1),document.removeEventListener("keyup",{},!1),p={}},r.settings=function(E){r.destroy(),p=E,_=A(_,E||{})},S(l,function(E,y){r[y]=function(h){var d=A(p,h||{});d=A(E,d||{}),this.show(d)}}),r.progress=function(E,y,h){var d=this,R=y.getAttribute("data-iziToast-ref"),D=A(this.children[R],E||{}),v=y.querySelector("."+i+"-progressbar div");return{start:function(){typeof D.time.REMAINING>"u"&&(y.classList.remove(i+"-reseted"),v!==null&&(v.style.transition="width "+D.timeout+"ms "+D.progressBarEasing,v.style.width="0%"),D.time.START=new Date().getTime(),D.time.END=D.time.START+D.timeout,D.time.TIMER=setTimeout(function(){clearTimeout(D.time.TIMER),y.classList.contains(i+"-closing")||(d.hide(D,y,"timeout"),typeof h=="function"&&h.apply(d))},D.timeout),d.setSetting(R,"time",D.time))},pause:function(){if(typeof D.time.START<"u"&&!y.classList.contains(i+"-paused")&&!y.classList.contains(i+"-reseted")){if(y.classList.add(i+"-paused"),D.time.REMAINING=D.time.END-new Date().getTime(),clearTimeout(D.time.TIMER),d.setSetting(R,"time",D.time),v!==null){var P=window.getComputedStyle(v),F=P.getPropertyValue("width");v.style.transition="none",v.style.width=F}typeof h=="function"&&setTimeout(function(){h.apply(d)},10)}},resume:function(){typeof D.time.REMAINING<"u"?(y.classList.remove(i+"-paused"),v!==null&&(v.style.transition="width "+D.time.REMAINING+"ms "+D.progressBarEasing,v.style.width="0%"),D.time.END=new Date().getTime()+D.time.REMAINING,D.time.TIMER=setTimeout(function(){clearTimeout(D.time.TIMER),y.classList.contains(i+"-closing")||(d.hide(D,y,"timeout"),typeof h=="function"&&h.apply(d))},D.time.REMAINING),d.setSetting(R,"time",D.time)):this.start()},reset:function(){clearTimeout(D.time.TIMER),delete D.time.REMAINING,d.setSetting(R,"time",D.time),y.classList.add(i+"-reseted"),y.classList.remove(i+"-paused"),v!==null&&(v.style.transition="none",v.style.width="100%"),typeof h=="function"&&setTimeout(function(){h.apply(d)},10)}}},r.hide=function(E,y,h){typeof y!="object"&&(y=document.querySelector(y));var d=this,R=A(this.children[y.getAttribute("data-iziToast-ref")],E||{});R.closedBy=h||null,delete R.time.REMAINING,y.classList.add(i+"-closing"),function(){var P=document.querySelector("."+i+"-overlay");if(P!==null){var F=P.getAttribute("data-iziToast-ref");F=F.split(",");var Y=F.indexOf(String(R.ref));Y!==-1&&F.splice(Y,1),P.setAttribute("data-iziToast-ref",F.join()),F.length===0&&(P.classList.remove("fadeIn"),P.classList.add("fadeOut"),setTimeout(function(){P.remove()},700))}}(),R.transitionIn&&y.classList.remove(R.transitionIn),R.transitionInMobile&&y.classList.remove(R.transitionInMobile),s||window.innerWidth<=f?R.transitionOutMobile&&y.classList.add(R.transitionOutMobile):R.transitionOut&&y.classList.add(R.transitionOut);var D=y.parentNode.offsetHeight;y.parentNode.style.height=D+"px",y.style.pointerEvents="none",(!s||window.innerWidth>f)&&(y.parentNode.style.transitionDelay="0.2s");try{var v=new CustomEvent(i+"-closing",{detail:R,bubbles:!0,cancelable:!0});document.dispatchEvent(v)}catch(P){console.warn(P)}setTimeout(function(){y.parentNode.style.height="0px",y.parentNode.style.overflow="",setTimeout(function(){delete d.children[R.ref],y.parentNode.remove();try{var P=new CustomEvent(i+"-closed",{detail:R,bubbles:!0,cancelable:!0});document.dispatchEvent(P)}catch(F){console.warn(F)}typeof R.onClosed<"u"&&R.onClosed.apply(null,[R,y,h])},1e3)},200),typeof R.onClosing<"u"&&R.onClosing.apply(null,[R,y,h])},r.show=function(E){var y=this,h=A(p,E||{});if(h=A(_,h),h.time={},h.id===null&&(h.id=X(h.title+h.message+h.color)),h.displayMode===1||h.displayMode=="once")try{if(document.querySelectorAll("."+i+"#"+h.id).length>0)return!1}catch{console.warn("["+i+"] Could not find an element with this selector: #"+h.id+". Try to set an valid id.")}if(h.displayMode===2||h.displayMode=="replace")try{S(document.querySelectorAll("."+i+"#"+h.id),function(v,P){y.hide(h,v,"replaced")})}catch{console.warn("["+i+"] Could not find an element with this selector: #"+h.id+". Try to set an valid id.")}h.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),r.children[h.ref]=h;var d={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:h.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};d.toast.setAttribute("data-iziToast-ref",h.ref),d.toast.appendChild(d.toastBody),d.toastCapsule.appendChild(d.toast),function(){if(d.toast.classList.add(i),d.toast.classList.add(i+"-opening"),d.toastCapsule.classList.add(i+"-capsule"),d.toastBody.classList.add(i+"-body"),d.toastTexts.classList.add(i+"-texts"),s||window.innerWidth<=f?h.transitionInMobile&&d.toast.classList.add(h.transitionInMobile):h.transitionIn&&d.toast.classList.add(h.transitionIn),h.class){var v=h.class.split(" ");S(v,function(P,F){d.toast.classList.add(P)})}h.id&&(d.toast.id=h.id),h.rtl&&(d.toast.classList.add(i+"-rtl"),d.toast.setAttribute("dir","rtl")),h.layout>1&&d.toast.classList.add(i+"-layout"+h.layout),h.balloon&&d.toast.classList.add(i+"-balloon"),h.maxWidth&&(isNaN(h.maxWidth)?d.toast.style.maxWidth=h.maxWidth:d.toast.style.maxWidth=h.maxWidth+"px"),(h.theme!==""||h.theme!=="light")&&d.toast.classList.add(i+"-theme-"+h.theme),h.color&&(ft(h.color)?d.toast.style.background=h.color:d.toast.classList.add(i+"-color-"+h.color)),h.backgroundColor&&(d.toast.style.background=h.backgroundColor,h.balloon&&(d.toast.style.borderColor=h.backgroundColor))}(),function(){h.image&&(d.cover.classList.add(i+"-cover"),d.cover.style.width=h.imageWidth+"px",vt(h.image.replace(/ /g,""))?d.cover.style.backgroundImage="url(data:image/png;base64,"+h.image.replace(/ /g,"")+")":d.cover.style.backgroundImage="url("+h.image+")",h.rtl?d.toastBody.style.marginRight=h.imageWidth+10+"px":d.toastBody.style.marginLeft=h.imageWidth+10+"px",d.toast.appendChild(d.cover))}(),function(){h.close?(d.buttonClose=document.createElement("button"),d.buttonClose.type="button",d.buttonClose.classList.add(i+"-close"),d.buttonClose.addEventListener("click",function(v){v.target,y.hide(h,d.toast,"button")}),d.toast.appendChild(d.buttonClose)):h.rtl?d.toast.style.paddingLeft="18px":d.toast.style.paddingRight="18px"}(),function(){h.progressBar&&(d.progressBar=document.createElement("div"),d.progressBarDiv=document.createElement("div"),d.progressBar.classList.add(i+"-progressbar"),d.progressBarDiv.style.background=h.progressBarColor,d.progressBar.appendChild(d.progressBarDiv),d.toast.appendChild(d.progressBar)),h.timeout&&(h.pauseOnHover&&!h.resetOnHover&&(d.toast.addEventListener("mouseenter",function(v){y.progress(h,d.toast).pause()}),d.toast.addEventListener("mouseleave",function(v){y.progress(h,d.toast).resume()})),h.resetOnHover&&(d.toast.addEventListener("mouseenter",function(v){y.progress(h,d.toast).reset()}),d.toast.addEventListener("mouseleave",function(v){y.progress(h,d.toast).start()})))}(),function(){h.iconUrl?(d.icon.setAttribute("class",i+"-icon"),d.icon.setAttribute("src",h.iconUrl)):h.icon&&(d.icon.setAttribute("class",i+"-icon "+h.icon),h.iconText&&d.icon.appendChild(document.createTextNode(h.iconText)),h.iconColor&&(d.icon.style.color=h.iconColor)),(h.icon||h.iconUrl)&&(h.rtl?d.toastBody.style.paddingRight="33px":d.toastBody.style.paddingLeft="33px",d.toastBody.appendChild(d.icon))}(),function(){h.title.length>0&&(d.strong=document.createElement("strong"),d.strong.classList.add(i+"-title"),d.strong.appendChild(U(h.title)),d.toastTexts.appendChild(d.strong),h.titleColor&&(d.strong.style.color=h.titleColor),h.titleSize&&(isNaN(h.titleSize)?d.strong.style.fontSize=h.titleSize:d.strong.style.fontSize=h.titleSize+"px"),h.titleLineHeight&&(isNaN(h.titleSize)?d.strong.style.lineHeight=h.titleLineHeight:d.strong.style.lineHeight=h.titleLineHeight+"px")),h.message.length>0&&(d.p=document.createElement("p"),d.p.classList.add(i+"-message"),d.p.appendChild(U(h.message)),d.toastTexts.appendChild(d.p),h.messageColor&&(d.p.style.color=h.messageColor),h.messageSize&&(isNaN(h.titleSize)?d.p.style.fontSize=h.messageSize:d.p.style.fontSize=h.messageSize+"px"),h.messageLineHeight&&(isNaN(h.titleSize)?d.p.style.lineHeight=h.messageLineHeight:d.p.style.lineHeight=h.messageLineHeight+"px")),h.title.length>0&&h.message.length>0&&(h.rtl?d.strong.style.marginLeft="10px":h.layout!==2&&!h.rtl&&(d.strong.style.marginRight="10px"))}(),d.toastBody.appendChild(d.toastTexts);var R;(function(){h.inputs.length>0&&(d.inputs.classList.add(i+"-inputs"),S(h.inputs,function(v,P){d.inputs.appendChild(U(v[0])),R=d.inputs.childNodes,R[P].classList.add(i+"-inputs-child"),v[3]&&setTimeout(function(){R[P].focus()},300),R[P].addEventListener(v[1],function(F){var Y=v[2];return Y(y,d.toast,this,F)})}),d.toastBody.appendChild(d.inputs))})(),function(){h.buttons.length>0&&(d.buttons.classList.add(i+"-buttons"),S(h.buttons,function(v,P){d.buttons.appendChild(U(v[0]));var F=d.buttons.childNodes;F[P].classList.add(i+"-buttons-child"),v[2]&&setTimeout(function(){F[P].focus()},300),F[P].addEventListener("click",function(Y){Y.preventDefault();var pc=v[1];return pc(y,d.toast,this,Y,R)})})),d.toastBody.appendChild(d.buttons)}(),h.message.length>0&&(h.inputs.length>0||h.buttons.length>0)&&(d.p.style.marginBottom="0"),(h.inputs.length>0||h.buttons.length>0)&&(h.rtl?d.toastTexts.style.marginLeft="10px":d.toastTexts.style.marginRight="10px",h.inputs.length>0&&h.buttons.length>0&&(h.rtl?d.inputs.style.marginLeft="8px":d.inputs.style.marginRight="8px")),function(){d.toastCapsule.style.visibility="hidden",setTimeout(function(){var v=d.toast.offsetHeight,P=d.toast.currentStyle||window.getComputedStyle(d.toast),F=P.marginTop;F=F.split("px"),F=parseInt(F[0]);var Y=P.marginBottom;Y=Y.split("px"),Y=parseInt(Y[0]),d.toastCapsule.style.visibility="",d.toastCapsule.style.height=v+Y+F+"px",setTimeout(function(){d.toastCapsule.style.height="auto",h.target&&(d.toastCapsule.style.overflow="visible")},500),h.timeout&&y.progress(h,d.toast).start()},100)}(),function(){var v=h.position;if(h.target)d.wrapper=document.querySelector(h.target),d.wrapper.classList.add(i+"-target"),h.targetFirst?d.wrapper.insertBefore(d.toastCapsule,d.wrapper.firstChild):d.wrapper.appendChild(d.toastCapsule);else{if(c.indexOf(h.position)==-1){console.warn("["+i+`] Incorrect position.
It can be › `+c);return}s||window.innerWidth<=f?h.position=="bottomLeft"||h.position=="bottomRight"||h.position=="bottomCenter"?v=i+"-wrapper-bottomCenter":h.position=="topLeft"||h.position=="topRight"||h.position=="topCenter"?v=i+"-wrapper-topCenter":v=i+"-wrapper-center":v=i+"-wrapper-"+v,d.wrapper=document.querySelector("."+i+"-wrapper."+v),d.wrapper||(d.wrapper=document.createElement("div"),d.wrapper.classList.add(i+"-wrapper"),d.wrapper.classList.add(v),document.body.appendChild(d.wrapper)),h.position=="topLeft"||h.position=="topCenter"||h.position=="topRight"?d.wrapper.insertBefore(d.toastCapsule,d.wrapper.firstChild):d.wrapper.appendChild(d.toastCapsule)}isNaN(h.zindex)?console.warn("["+i+"] Invalid zIndex."):d.wrapper.style.zIndex=h.zindex}(),function(){h.overlay&&(document.querySelector("."+i+"-overlay.fadeIn")!==null?(d.overlay=document.querySelector("."+i+"-overlay"),d.overlay.setAttribute("data-iziToast-ref",d.overlay.getAttribute("data-iziToast-ref")+","+h.ref),!isNaN(h.zindex)&&h.zindex!==null&&(d.overlay.style.zIndex=h.zindex-1)):(d.overlay.classList.add(i+"-overlay"),d.overlay.classList.add("fadeIn"),d.overlay.style.background=h.overlayColor,d.overlay.setAttribute("data-iziToast-ref",h.ref),!isNaN(h.zindex)&&h.zindex!==null&&(d.overlay.style.zIndex=h.zindex-1),document.querySelector("body").appendChild(d.overlay)),h.overlayClose?(d.overlay.removeEventListener("click",{}),d.overlay.addEventListener("click",function(v){y.hide(h,d.toast,"overlay")})):d.overlay.removeEventListener("click",{}))}(),function(){if(h.animateInside){d.toast.classList.add(i+"-animateInside");var v=[200,100,300];(h.transitionIn=="bounceInLeft"||h.transitionIn=="bounceInRight")&&(v=[400,200,400]),h.title.length>0&&setTimeout(function(){d.strong.classList.add("slideIn")},v[0]),h.message.length>0&&setTimeout(function(){d.p.classList.add("slideIn")},v[1]),(h.icon||h.iconUrl)&&setTimeout(function(){d.icon.classList.add("revealIn")},v[2]);var P=150;h.buttons.length>0&&d.buttons&&setTimeout(function(){S(d.buttons.childNodes,function(F,Y){setTimeout(function(){F.classList.add("revealIn")},P),P=P+150})},h.inputs.length>0?150:0),h.inputs.length>0&&d.inputs&&(P=150,S(d.inputs.childNodes,function(F,Y){setTimeout(function(){F.classList.add("revealIn")},P),P=P+150}))}}(),h.onOpening.apply(null,[h,d.toast]);try{var D=new CustomEvent(i+"-opening",{detail:h,bubbles:!0,cancelable:!0});document.dispatchEvent(D)}catch(v){console.warn(v)}setTimeout(function(){d.toast.classList.remove(i+"-opening"),d.toast.classList.add(i+"-opened");try{var v=new CustomEvent(i+"-opened",{detail:h,bubbles:!0,cancelable:!0});document.dispatchEvent(v)}catch(P){console.warn(P)}h.onOpened.apply(null,[h,d.toast])},1e3),h.drag&&(u?(d.toast.addEventListener("touchstart",function(v){Et.startMoving(this,y,h,v)},!1),d.toast.addEventListener("touchend",function(v){Et.stopMoving(this,v)},!1)):(d.toast.addEventListener("mousedown",function(v){v.preventDefault(),Et.startMoving(this,y,h,v)},!1),d.toast.addEventListener("mouseup",function(v){v.preventDefault(),Et.stopMoving(this,v)},!1))),h.closeOnEscape&&document.addEventListener("keyup",function(v){v=v||window.event,v.keyCode==27&&y.hide(h,d.toast,"esc")}),h.closeOnClick&&d.toast.addEventListener("click",function(v){y.hide(h,d.toast,"toast")}),y.toast=d.toast},r})})(Qp);export{om as a,sm as b,Zp as c,rm as d,kp as e,im as f,tm as g,bl as i,nm as o,em as q,am as s};
//# sourceMappingURL=vendor-79bf1253.js.map
