(()=>{"use strict";var e={495:(e,r)=>{function i(e,r){r=r.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&]".concat(r,"=([^&#]*)")).exec(e);return i&&i[1]?decodeURIComponent(i[1]).replace(/\+/g," "):""}function t(e,r){return"true"===i(e,r)}r.Z=function(e){return{getParameterFromQuery:i,isParameterTrueInQuery:t,getParameterByName:i.bind(null,e.location.search),isParameterTrue:t.bind(null,e.location.search)}}}},r={};function i(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,i),n.exports}(()=>{const e=Sentry;var r=i(495);class t extends e.Transports.FetchTransport{sendEvent(e){return super.sendEvent(e)}}const o=(0,r.Z)(window),n=/\/(\d+\.\d+\.\d+)\/?$/;(()=>{const{editorModel:r,loggerModel:i,appStudioModel:s,editorBase:a}=window,d=function(e){const r=e.match(n);return r?r[1]:void 0}(a),l=Boolean(d)&&!o.isParameterTrue("suppressbi")&&!o.isParameterTrue("isqa")&&(u=o.getParameterByName("EditorSource"),!/^(https?:)?\/\/localhost|local.wix.com($|[/:])/.test(u));var u;const c=d?`santa-editor@${d}`:void 0;e.init({dsn:"https://6e1ccc2dc38e4a41bfc4579a083293eb@sentry-next.wixpress.com/2",environment:"production",release:c,transport:t,autoSessionTracking:!0,enabled:l,ignoreErrors:["ResizeObserver loop limit exceeded"]}),e.configureScope((e=>{var t,o;e.setTags(((e,r,i)=>{var t,o,n,s;return{publicUrl:e.publicUrl,numberOfPages:null===(t=e.siteHeader)||void 0===t||null===(o=t.pageIdList)||void 0===o||null===(n=o.pages)||void 0===n?void 0:n.length,revision:null===(s=e.siteHeader)||void 0===s?void 0:s.revision,geo:e.geo,metaSiteId:e.metaSiteId,isDesktopEditor:!0,isMobileEditor:!1,editorLoaded:!1,isPreview:!1,isAppStudio:void 0!==i,ds:r.origin}})(r,i,s)),e.setExtras((e=>{var r,i;return{previewUrl:e.previewUrl,runningExperiments:e.runningExperiments,isPublished:null===(r=e.siteHeader)||void 0===r?void 0:r.published,premiumFeatures:null===(i=e.metaSiteData)||void 0===i?void 0:i.premiumFeatures}})(r)),e.setUser({id:null===(t=r.permissionsInfo)||void 0===t?void 0:t.loggedInUserId,roles:null===(o=r.permissionsInfo)||void 0===o?void 0:o.loggedInUserRoles}),e.addEventProcessor(((e,i)=>{var t;return((e="")=>e.includes("play() failed because the user didn't interact with the document first")||e.includes("The play() request was interrupted by a call to pause()"))("string"==typeof(null==i?void 0:i.originalException)?i.originalException:null==i||null===(t=i.originalException)||void 0===t?void 0:t.message)?null:(e.extra={...e.extra,biHistoryUrl:`https://bo.wix.com/bi-ux/#/history?timezone=0&fields=date_created,src,evid,evid_desc,error_type,error_info,tags,extra,error_context,origin,uuid,msid,esi,dm_version,os_name,browser_family,browser_name,app_name,country_code&uuid=${r.permissionsInfo.ownerId}&start=${String(Date.now()-24e4)}&stop=${String(Date.now()+24e4)}&wql=msid%3D%22${r.metaSiteId}%22&order=asc&levels=1,2,3,4`},e.tags=e.tags||{},(e=>{var r,i,t,o;return((null===(r=e.exception)||void 0===r||null===(i=r.values)||void 0===i||null===(t=i[0])||void 0===t||null===(o=t.stacktrace)||void 0===o?void 0:o.frames)??[]).filter((e=>e&&"string"==typeof e.filename)).some((e=>e.filename.includes("wixCode")||e.filename.includes("wix-code")))})(e)&&(e.tags={...e.tags,"wix-code-error":!0},e.fingerprint=(e.fingerprint||[]).concat(["wix-code-error"])),e.tags.hasOwnProperty("whiteScreenOfDeath")&&(e.fingerprint=["{{ default }}","whiteScreenOfDeath"]),e)}))}))})(),window.__sentryIsAlreadInitializedTODORemove=!0})()})();