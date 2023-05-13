(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("extensions-slots-core", ["react", "reactDOM"], factory);
	else if(typeof exports === 'object')
		exports["extensions-slots-core"] = factory(require("react"), require("react-dom"));
	else
		root["extensions-slots-core"] = factory(root["React"], root["ReactDOM"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__329__, __WEBPACK_EXTERNAL_MODULE__561__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 348:
/*!*******************************!*\
  !*** ./types/openedPanels.ts ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ 534:
/*!***************************!*\
  !*** ./types/panelAPI.ts ***!
  \***************************/
/***/ (function() {



/***/ }),

/***/ 815:
/*!*****************************!*\
  !*** ./types/slotsState.ts ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ 329:
/*!**************************************************************************************!*\
  !*** external {"amd":"react","commonjs":"react","commonjs2":"react","root":"React"} ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__329__;

/***/ }),

/***/ 561:
/*!****************************************************************************************************!*\
  !*** external {"amd":"reactDOM","commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"} ***!
  \****************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__561__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*******************************!*\
  !*** ./index.ts + 45 modules ***!
  \*******************************/
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EditorOpenedPanelsProvider": function() { return /* reexport */ EditorOpenedPanelsProvider; },
  "ExtensionDataProvider": function() { return /* reexport */ ExtensionDataProvider; },
  "HelpMenuItemsSlot": function() { return /* reexport */ HelpMenuItemsSlot; },
  "OpenedPanel": function() { return /* reexport */ openedPanels.OpenedPanel; },
  "PanelAPI": function() { return /* reexport */ panelAPI.PanelAPI; },
  "PanelType": function() { return /* reexport */ panelAPI.PanelType; },
  "PrimaryButtonsSlot": function() { return /* reexport */ PrimaryButtonsSlot; },
  "PrimaryPanelsSlot": function() { return /* reexport */ PrimaryPanelsSlot; },
  "SlotsState": function() { return /* reexport */ slotsState.SlotsState; },
  "SlotsStateProvider": function() { return /* reexport */ SlotsStateProvider; },
  "StageLayerSlot": function() { return /* reexport */ StageLayerSlot; },
  "StickyPanelSlot": function() { return /* reexport */ StickyPanelSlot; },
  "ToolsMenuItemSlot": function() { return /* reexport */ ToolsMenuItemSlot; },
  "TopBarSecondaryActionsSlot": function() { return /* reexport */ TopBarSecondaryActionsSlot; },
  "extensionsSlotsInitialState": function() { return /* reexport */ extensionsSlotsInitialState; },
  "extensionsSlotsReducer": function() { return /* reexport */ extensionsSlotsReducer; },
  "getSlots": function() { return /* reexport */ getSlots; },
  "registerSlotPortal": function() { return /* reexport */ registerSlotPortal; },
  "registerSlotPortalNode": function() { return /* reexport */ registerSlotPortalNode; },
  "unregisterSlotPortal": function() { return /* reexport */ unregisterSlotPortal; },
  "unregisterSlotPortalNode": function() { return /* reexport */ unregisterSlotPortalNode; },
  "updateSlotPortalProps": function() { return /* reexport */ updateSlotPortalProps; },
  "useBiLogger": function() { return /* reexport */ useBiLogger; },
  "useBoundedPanelAPI": function() { return /* reexport */ useBoundedPanelAPI; },
  "useDocumentServices": function() { return /* reexport */ useDocumentServices; },
  "useEditorExperiments": function() { return /* reexport */ useEditorExperiments; },
  "useEditorSDK": function() { return /* reexport */ useEditorSDK; },
  "useExperiments": function() { return /* reexport */ useExperiments; },
  "useExtensionId": function() { return /* reexport */ useExtensionId; },
  "useServiceTopology": function() { return /* reexport */ useServiceTopology; },
  "useTranslation": function() { return /* reexport */ useTranslation; }
});

// EXTERNAL MODULE: external {"amd":"react","commonjs":"react","commonjs2":"react","root":"React"}
var external_amd_react_commonjs_react_commonjs2_react_root_React_ = __webpack_require__(329);
var external_amd_react_commonjs_react_commonjs2_react_root_React_default = /*#__PURE__*/__webpack_require__.n(external_amd_react_commonjs_react_commonjs2_react_root_React_);
;// CONCATENATED MODULE: ./components/slots-state/SlotsAPIContext.tsx
const SlotsAPIContext=/*#__PURE__*/(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.createContext)({});SlotsAPIContext.displayName='SlotsAPIContext';
;// CONCATENATED MODULE: ./hooks/slots/useSlotsAPI.ts
const useSlotsAPI=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(SlotsAPIContext);
;// CONCATENATED MODULE: ./components/slots-state/SlotsContentContext.tsx
const SlotsContentContext=/*#__PURE__*/(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.createContext)({});SlotsContentContext.displayName='SlotsContentContext';
;// CONCATENATED MODULE: ./hooks/slots/useSlot.ts
const useSlot=slotId=>{const slots=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(SlotsContentContext);return slots[slotId];};
;// CONCATENATED MODULE: ./hooks/slots/useSlotPortals.ts
function useSlotPortals(slotId,filter,sort){const slot=useSlot(slotId);return (0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useMemo)(()=>{if(!slot||Object.keys(slot).length===0){return[];}const extensionsIds=Object.keys(slot);const filteredExtensionIds=filter(extensionsIds);const sortedExtensionsIds=sort(filteredExtensionIds);return sortedExtensionsIds.flatMap(extensionId=>slot[extensionId]);},[slot,filter,sort]);}
;// CONCATENATED MODULE: ./utils/typedMemo.ts
// React.memo hides generic props of a wrapped component
// more details here https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087
const typedMemo=external_amd_react_commonjs_react_commonjs2_react_root_React_.memo;
;// CONCATENATED MODULE: ./utils/uniqueId.ts
const getRandomBytes=()=>Math.random()*46656|0;const generateUID=()=>getRandomBytes().toString(36)+getRandomBytes().toString(36);
;// CONCATENATED MODULE: ./hooks/utils/useUniqueId.ts
const useUniqueId=()=>{const[id]=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useState)(generateUID);return id;};
;// CONCATENATED MODULE: ./components/SlotPlacement.tsx
const SlotPortalPlacement=typedMemo(props=>{const{portalId,ownProps={}}=props.slotPortal;const{registerSlotPortalNode,unregisterSlotPortalNode}=useSlotsAPI();const slotPlacementId=useUniqueId();const portalNodeId=props.slotId+"."+props.slotPortal.extensionId+"."+portalId+"."+slotPlacementId;const integrationProps=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useMemo)(()=>({'data-extensions-portal-node-id':portalNodeId}),[portalNodeId]);(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useLayoutEffect)(()=>{registerSlotPortalNode(portalId,slotPlacementId,portalNodeId);return()=>{unregisterSlotPortalNode(portalId,slotPlacementId);};},[registerSlotPortalNode,unregisterSlotPortalNode,portalId,portalNodeId,slotPlacementId]);return props.render(integrationProps,ownProps);});const SlotPortalPlacementList=typedMemo(props=>/*#__PURE__*/external_amd_react_commonjs_react_commonjs2_react_root_React_default().createElement((external_amd_react_commonjs_react_commonjs2_react_root_React_default()).Fragment,null,props.slotPortals.map(slotPortal=>/*#__PURE__*/external_amd_react_commonjs_react_commonjs2_react_root_React_default().createElement(SlotPortalPlacement,{slotId:props.slotId,slotPortal:slotPortal,key:slotPortal.portalId,render:props.render}))));const SlotPlacement=props=>{const{slotId,render,filter,sort}=props;const slotPortals=useSlotPortals(slotId,filter,sort);return (0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useMemo)(()=>{if(slotPortals.length===0){return null;}return/*#__PURE__*/external_amd_react_commonjs_react_commonjs2_react_root_React_default().createElement(SlotPortalPlacementList,{slotId:slotId,slotPortals:slotPortals,render:render});},[slotPortals,slotId,render]);};
// EXTERNAL MODULE: external {"amd":"reactDOM","commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"}
var external_amd_reactDOM_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_ = __webpack_require__(561);
var external_amd_reactDOM_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_amd_reactDOM_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_);
;// CONCATENATED MODULE: ./components/slots-state/SlotsPortalNodesContext.tsx
const SlotsPortalNodesContext=/*#__PURE__*/(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.createContext)({});SlotsPortalNodesContext.displayName='SlotsPortalNodesContext';
;// CONCATENATED MODULE: ./hooks/slots/usePortalNodes.ts
const usePortalNodes=slotPortalId=>{const portalNodes=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(SlotsPortalNodesContext);const slotPortalNodes=portalNodes[slotPortalId]||[];const portalDomNodeSelectors=slotPortalNodes.map(portalNode=>"[data-extensions-portal-node-id=\""+portalNode.portalNodeId+"\"]");return portalDomNodeSelectors.map(selector=>({node:document.querySelector(selector),nodeId:selector})).filter(portalNode=>portalNode.node!==null);};
;// CONCATENATED MODULE: ./components/extension/ExtensionDataContext.ts
const ExtensionDataContext=/*#__PURE__*/(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.createContext)({extensionId:''});
;// CONCATENATED MODULE: ./hooks/environment/useExtensionId.ts
const useExtensionId=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(ExtensionDataContext).extensionId;
;// CONCATENATED MODULE: ./hooks/utils/usePreviousValue.ts
const usePreviousValue=value=>{const prevValueRef=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useRef)();(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useEffect)(()=>{prevValueRef.current=value;});return prevValueRef.current;};
;// CONCATENATED MODULE: ./utils/isShallowEqual.ts
function isShallowEqual(newObject,prevObject){if(prevObject===newObject){return true;}if(prevObject===undefined||newObject===undefined){return false;}for(const prop in newObject){if(!newObject.hasOwnProperty(prop)){continue;}if(newObject[prop]!==prevObject[prop]){return false;}}if(Object.keys(prevObject).length!==Object.keys(newObject).length){return false;}return true;}
;// CONCATENATED MODULE: ./hooks/slots/useSlotPortalPropsUpdate.ts
const useSlotPortalPropsUpdate=(slotId,extensionId,portalId,portalProps)=>{const{updateSlotPortalProps}=useSlotsAPI();const prevProps=usePreviousValue(portalProps);(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useEffect)(()=>{const propsChanged=!isShallowEqual(portalProps,prevProps);if(!propsChanged){return;}updateSlotPortalProps(slotId,extensionId,portalId,portalProps);});};
;// CONCATENATED MODULE: ./components/SlotPortal.tsx
const SlotPortal=props=>{const{registerSlotPortal,unregisterSlotPortal}=useSlotsAPI();const extensionId=useExtensionId();const slotPortalId=useUniqueId();const{slotId,children,...slotOwnProps}=props;(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useEffect)(()=>{registerSlotPortal(slotId,extensionId,slotPortalId);return()=>{unregisterSlotPortal(slotId,extensionId,slotPortalId);};},[slotId,extensionId,slotPortalId,registerSlotPortal,unregisterSlotPortal]);useSlotPortalPropsUpdate(slotId,extensionId,slotPortalId,slotOwnProps);const portalNodes=usePortalNodes(slotPortalId);if(portalNodes.length===0||!children){return null;}return/*#__PURE__*/external_amd_react_commonjs_react_commonjs2_react_root_React_default().createElement((external_amd_react_commonjs_react_commonjs2_react_root_React_default()).Fragment,null,portalNodes.map(portalNode=>/*#__PURE__*/external_amd_reactDOM_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_default().createPortal(children,portalNode.node,portalNode.nodeId)));};
;// CONCATENATED MODULE: ./utils/slotsUtils.ts
const identity=data=>data;function createSlotPlacement(slotId){const Placement=props=>SlotPlacement({slotId,filter:props.filter||identity,sort:props.sort||identity,render:props.children});Placement.displayName=slotId+".Placement";return/*#__PURE__*/(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.memo)(Placement);}function createSlotPortal(slotId){const Portal=props=>SlotPortal({...props,slotId});Portal.displayName=slotId+".Portal";return/*#__PURE__*/(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.memo)(Portal);}function declareSlot(slotId){return{Placement:createSlotPlacement(slotId),Portal:createSlotPortal(slotId)};}
;// CONCATENATED MODULE: ./slot-declarations/basicSlotIDs.ts
let SlotID;(function(SlotID){SlotID["PrimaryButtons"]="PrimaryButtonsSlot";SlotID["PrimaryPanels"]="PrimaryPanelsSlot";SlotID["TopBarSecondaryActions"]="TopBarSecondaryActions";SlotID["HelpMenuItems"]="HelpMenuItemsSlot";SlotID["StickyPanel"]="StickyPanel";SlotID["StageLayer"]="StageLayer";SlotID["ToolsMenuItem"]="ToolsMenuItem";})(SlotID||(SlotID={}));
;// CONCATENATED MODULE: ./slot-declarations/basic-slots/PrimaryPanelsSlot.ts
const PrimaryPanelsSlot=declareSlot(SlotID.PrimaryPanels);
;// CONCATENATED MODULE: ./slot-declarations/basic-slots/PrimaryButtonsSlot.ts
const PrimaryButtonsSlot=declareSlot(SlotID.PrimaryButtons);
;// CONCATENATED MODULE: ./slot-declarations/basic-slots/TopBarSecondaryActionsSlot.ts
const TopBarSecondaryActionsSlot=declareSlot(SlotID.TopBarSecondaryActions);
;// CONCATENATED MODULE: ./slot-declarations/basic-slots/HelpMenuItemsSlot.ts
const HelpMenuItemsSlot=declareSlot(SlotID.HelpMenuItems);
;// CONCATENATED MODULE: ./slot-declarations/basic-slots/StickyPanelSlot.ts
const StickyPanelSlot=declareSlot(SlotID.StickyPanel);
;// CONCATENATED MODULE: ./slot-declarations/basic-slots/StageLayerSlot.ts
const StageLayerSlot=declareSlot(SlotID.StageLayer);
;// CONCATENATED MODULE: ./slot-declarations/basic-slots/ToolsMenuItemSlot.ts
const ToolsMenuItemSlot=declareSlot(SlotID.ToolsMenuItem);
;// CONCATENATED MODULE: ./slot-declarations/index.ts

;// CONCATENATED MODULE: ./components/slots-state/SlotsStateProvider.tsx
const SlotsStateProvider=props=>/*#__PURE__*/external_amd_react_commonjs_react_commonjs2_react_root_React_default().createElement(SlotsContentContext.Provider,{value:props.slots.portals},/*#__PURE__*/external_amd_react_commonjs_react_commonjs2_react_root_React_default().createElement(SlotsPortalNodesContext.Provider,{value:props.slots.portalNodes},/*#__PURE__*/external_amd_react_commonjs_react_commonjs2_react_root_React_default().createElement(SlotsAPIContext.Provider,{value:props.slotsAPI},props.children)));
;// CONCATENATED MODULE: ./components/editor-integration/opened-panels/EditorOpenedPanelsContext.tsx
const EditorOpenedPanelsContext=/*#__PURE__*/(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.createContext)([]);
;// CONCATENATED MODULE: ./components/editor-integration/opened-panels/EditorOpenedPanelsProvider.tsx
const EditorOpenedPanelsProvider=props=>{return/*#__PURE__*/external_amd_react_commonjs_react_commonjs2_react_root_React_default().createElement(EditorOpenedPanelsContext.Provider,{value:props.openedPanels},props.children);};
;// CONCATENATED MODULE: ./components/extension/ExtensionDataProvider.tsx
const shallowCompareAllButChildren=(prevProps,nextProps)=>{const{children:prevChildren,...prevPropsWithNoChildren}=prevProps;const{children:nextChildren,...nextPropsWithNoChildren}=nextProps;return isShallowEqual(prevPropsWithNoChildren,nextPropsWithNoChildren);};const ExtensionDataProvider=/*#__PURE__*/(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.memo)(props=>{return/*#__PURE__*/external_amd_react_commonjs_react_commonjs2_react_root_React_default().createElement(ExtensionDataContext.Provider,{value:props},props.children);},shallowCompareAllButChildren);
;// CONCATENATED MODULE: ./hooks/environment/useEditorSDK.ts
const useEditorSDK=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(ExtensionDataContext).editorSDK;
;// CONCATENATED MODULE: ./hooks/environment/useDocumentServices.ts
const useDocumentServices=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(ExtensionDataContext).documentServices;
;// CONCATENATED MODULE: ./hooks/environment/useServiceTopology.ts
const useServiceTopology=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(ExtensionDataContext).serviceTopology;
;// CONCATENATED MODULE: ./hooks/environment/useTranslation.ts
const useTranslation=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(ExtensionDataContext).translate;
;// CONCATENATED MODULE: ./hooks/environment/useBiLogger.ts
const useBiLogger=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(ExtensionDataContext).biLogger;
;// CONCATENATED MODULE: ./hooks/panels/useOpenedPanels.ts
const useOpenedPanels=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(EditorOpenedPanelsContext);
;// CONCATENATED MODULE: ./hooks/panels/useEditorPanelAPI.ts
function buildPanelToken(extensionId,panelName){return extensionId+"_"+panelName;}const useEditorPanelAPI=panelType=>{const editorSDK=useEditorSDK();const extensionId=useExtensionId();const openedPanels=useOpenedPanels();const openPanel=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useCallback)(function(panelName,options){if(options===void 0){options={leavePanelsOpened:false};}return editorSDK.editor.openPanel(panelType,{token:buildPanelToken(extensionId,panelName)},options.leavePanelsOpened);},[editorSDK,extensionId,panelType]);const closePanel=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useCallback)(panelName=>{const token=buildPanelToken(extensionId,panelName);return editorSDK.editor.closePanel(token,undefined);},[editorSDK,extensionId]);const isPanelOpened=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useCallback)(panelName=>{const token=buildPanelToken(extensionId,panelName);return openedPanels.some(panel=>panel.token===token);},[openedPanels,extensionId]);return (0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useMemo)(()=>({openPanel,closePanel,isPanelOpened}),[openPanel,closePanel,isPanelOpened]);};
;// CONCATENATED MODULE: ./hooks/panels/useBoundedPanelAPI.ts
const useBoundedPanelAPI=panelType=>{const{openPanel,closePanel,isPanelOpened}=useEditorPanelAPI(panelType);const panelName=useUniqueId();const boundedOpenPanel=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useCallback)(options=>openPanel(panelName,options),[openPanel,panelName]);const boundedClosePanel=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useCallback)(()=>closePanel(panelName),[closePanel,panelName]);const boundedIsPanelOpened=(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useCallback)(()=>isPanelOpened(panelName),[isPanelOpened,panelName]);return (0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useMemo)(()=>({openPanel:boundedOpenPanel,closePanel:boundedClosePanel,isPanelOpened:boundedIsPanelOpened}),[boundedOpenPanel,boundedClosePanel,boundedIsPanelOpened]);};
;// CONCATENATED MODULE: ./hooks/environment/useEditorExperiments.ts
const useEditorExperiments=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(ExtensionDataContext).editorExperiments;
;// CONCATENATED MODULE: ./hooks/environment/useExperiments.ts
const useExperiments=()=>(0,external_amd_react_commonjs_react_commonjs2_react_root_React_.useContext)(ExtensionDataContext).experiments;
// EXTERNAL MODULE: ./types/slotsState.ts
var slotsState = __webpack_require__(815);
// EXTERNAL MODULE: ./types/openedPanels.ts
var openedPanels = __webpack_require__(348);
// EXTERNAL MODULE: ./types/panelAPI.ts
var panelAPI = __webpack_require__(534);
;// CONCATENATED MODULE: ./state-management/extensionsSlotsActionsTypes.ts
const REGISTER_SLOT_PORTAL='extensionsSlots.registerSlotPortal';const UNREGISTER_SLOT_PORTAL='extensionsSlots.unregisterSlotPortal';const UPDATE_SLOT_PORTAL_PROPS='extensionsSlots.updateSlotPortalProps';const REGISTER_SLOT_PORTAL_NODE='extensionsSlots.registerSlotPortalNode';const UNREGISTER_SLOT_PORTAL_NODE='extensionsSlots.unregisterSlotPortalNode';
;// CONCATENATED MODULE: ./state-management/extensionsSlotsReducer.ts
const extensionsSlotsInitialState={portals:{},portalNodes:{}};const extensionsSlotsReducer=function(state,action){if(state===void 0){state=extensionsSlotsInitialState;}switch(action.type){case REGISTER_SLOT_PORTAL:{var _state$portals$slotId,_state$portals$slotId2;const{slotId,extensionId,portalId}=action.payload;return{...state,portals:{...state.portals,[slotId]:{...state.portals[slotId],[extensionId]:[...((_state$portals$slotId=(_state$portals$slotId2=state.portals[slotId])==null?void 0:_state$portals$slotId2[extensionId])!=null?_state$portals$slotId:[]),{portalId,extensionId,ownProps:{}}]}}};}case UNREGISTER_SLOT_PORTAL:{const{slotId,extensionId,portalId}=action.payload;return{...state,portals:{...state.portals,[slotId]:{...state.portals[slotId],[extensionId]:state.portals[slotId][extensionId].filter(slotPortal=>slotPortal.portalId!==portalId)}}};}case UPDATE_SLOT_PORTAL_PROPS:{var _state$portals$slotId3,_state$portals$slotId4;const{slotId,extensionId,portalId,portalProps}=action.payload;return{...state,portals:{...state.portals,[slotId]:{...state.portals[slotId],[extensionId]:((_state$portals$slotId3=(_state$portals$slotId4=state.portals[slotId])==null?void 0:_state$portals$slotId4[extensionId])!=null?_state$portals$slotId3:[]).map(slotPortal=>{if(slotPortal.portalId===portalId){return{...slotPortal,ownProps:portalProps};}return slotPortal;})}}};}case REGISTER_SLOT_PORTAL_NODE:{var _state$portalNodes$po;const{portalId,portalNodeId,placementId}=action.payload;return{...state,portalNodes:{...state.portalNodes,[portalId]:[...((_state$portalNodes$po=state.portalNodes[portalId])!=null?_state$portalNodes$po:[]),{portalNodeId,placementId}]}};}case UNREGISTER_SLOT_PORTAL_NODE:{const{portalId,placementId}=action.payload;return{...state,portalNodes:{...state.portalNodes,[portalId]:state.portalNodes[portalId].filter(portalNode=>portalNode.placementId!==placementId)}};}default:{return state;}}};
;// CONCATENATED MODULE: ./state-management/extensionsSlotsActions.ts
const registerSlotPortal=(slotId,extensionId,portalId)=>({type:REGISTER_SLOT_PORTAL,payload:{slotId,extensionId,portalId}});const unregisterSlotPortal=(slotId,extensionId,portalId)=>({type:UNREGISTER_SLOT_PORTAL,payload:{slotId,extensionId,portalId}});const updateSlotPortalProps=(slotId,extensionId,portalId,portalProps)=>({type:UPDATE_SLOT_PORTAL_PROPS,payload:{slotId,extensionId,portalId,portalProps}});const registerSlotPortalNode=(portalId,placementId,portalNodeId)=>({type:REGISTER_SLOT_PORTAL_NODE,payload:{portalId,portalNodeId,placementId}});const unregisterSlotPortalNode=(portalId,placementId)=>({type:UNREGISTER_SLOT_PORTAL_NODE,payload:{portalId,placementId}});
;// CONCATENATED MODULE: ./state-management/extensionsSlotsSelectors.ts
const getSlots=state=>state.extensionsSlots;
;// CONCATENATED MODULE: ./index.ts

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=extensions-slots-core.umd.js.map