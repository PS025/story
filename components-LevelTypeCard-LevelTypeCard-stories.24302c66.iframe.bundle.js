"use strict";(self.webpackChunkwse_d2c_web=self.webpackChunkwse_d2c_web||[]).push([[804],{"./node_modules/@fluentui/react-icons-mdl2/lib/components/ChevronLeftIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@fluentui/react-icons-mdl2/lib/utils/createSvgIcon.js").Z)({svg:({classes})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2048 2048",className:classes.svg,focusable:"false"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M1443 2045L421 1024 1443 3l90 90-930 931 930 931-90 90z"})),displayName:"ChevronLeftIcon"})},"./app/components/LevelTypeCard/LevelTypeCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:()=>Standard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LevelTypeCard_stories});var Text=__webpack_require__("./app/components/Text/index.tsx"),Buttons=__webpack_require__("./app/components/Buttons/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),levelTypeCard=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./app/components/LevelTypeCard/levelTypeCard.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(levelTypeCard.Z,options);levelTypeCard.Z&&levelTypeCard.Z.locals&&levelTypeCard.Z.locals;var _Standard$parameters,_Standard$parameters2,_Standard$parameters3,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LevelTypeCard=function LevelTypeCard(_ref){var level=_ref.level,levelLabel=_ref.levelLabel,buttonLabel=_ref.buttonLabel,onSelect=_ref.onSelect;return(0,jsx_runtime.jsxs)("div",{className:"level-type-card rounded-lg p-6",children:[(0,jsx_runtime.jsx)("div",{className:"level-type-card__tag__wrapper",children:(0,jsx_runtime.jsxs)("div",{className:"level-type-card__tag ui-text-small",children:[levelLabel," ",(0,jsx_runtime.jsx)("strong",{children:level.tag})]})}),(0,jsx_runtime.jsxs)("div",{className:"mb-4 level-type-card__description",children:[(0,jsx_runtime.jsx)(Text.x,{variant:"3",className:"ui-text-small pb-3 level-type-card__description__prompt",children:level.question}),(0,jsx_runtime.jsx)(Text.x,{variant:"2",className:"content-medium level-type-card__description__text",children:level.answer})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Buttons.zx,{size:"large",className:"w-full",label:buttonLabel,onClick:function onClick(){return onSelect(level)}})})]},level.id)};LevelTypeCard.displayName="LevelTypeCard";try{LevelTypeCard.displayName="LevelTypeCard",LevelTypeCard.__docgenInfo={description:"",displayName:"LevelTypeCard",props:{level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"Level"}},levelLabel:{defaultValue:null,description:"",name:"levelLabel",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(item: Level) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/LevelTypeCard/index.tsx#LevelTypeCard"]={docgenInfo:LevelTypeCard.__docgenInfo,name:"LevelTypeCard",path:"app/components/LevelTypeCard/index.tsx#LevelTypeCard"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const LevelTypeCard_stories={title:"Onboarding/LevelTypeCard",component:LevelTypeCard};var Standard={args:{level:{name:"Advanced",id:"d2c-advanced",question:"What does this mean in practice?",answer:"You can understand a wide range of demanding, longer texts, and recognise implicit meaning. You can express yourself fluently and spontaneously without much obvious searching for expressions. You can use language flexibly and effectively for social, academic and professional purposes. You can produce clear, well-structured, detailed text on complex subjects, showing controlled use of organisational patterns, connectors and cohesive devices.",tag:"B1-B2"},levelLabel:"CEFR Level",buttonLabel:"I am advanced",onSelect:function onSelect(){}}};Standard.parameters=_objectSpread(_objectSpread({},Standard.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Standard$parameters=Standard.parameters)||void 0===_Standard$parameters?void 0:_Standard$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    level: {\n      name: 'Advanced',\n      id: 'd2c-advanced',\n      question: 'What does this mean in practice?',\n      answer: 'You can understand a wide range of demanding, longer texts, and recognise implicit meaning. You can express yourself fluently and spontaneously without much obvious searching for expressions. You can use language flexibly and effectively for social, academic and professional purposes. You can produce clear, well-structured, detailed text on complex subjects, showing controlled use of organisational patterns, connectors and cohesive devices.',\n      tag: 'B1-B2'\n    },\n    levelLabel: 'CEFR Level',\n    buttonLabel: 'I am advanced',\n    onSelect: () => void 0\n  }\n}"},null===(_Standard$parameters2=Standard.parameters)||void 0===_Standard$parameters2||null===(_Standard$parameters3=_Standard$parameters2.docs)||void 0===_Standard$parameters3?void 0:_Standard$parameters3.source)})});var __namedExportsOrder=["Standard"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./app/components/LevelTypeCard/levelTypeCard.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".level-type-card {\n  background-color: var(--color-secondary-a);\n  position: relative;\n}\n\n.level-type-card label {  \n  display: flex;\n  justify-content: space-between;\n}\n\n.level-type-card input {\n  width: 20px;\n  height: 20px;\n  color: var(--color-primary-a);\n  border-radius: 50%;\n  border-color: var(--color-gray-900);\n  background-color: var(--color-secondary-a);\n}\n\n.level-type-card input:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.level-type-card input:checked {\n  background-image: none;\n  box-shadow: inset 0px 0px 0px 3px white;\n}\n\n.level-type-card__tag__wrapper {\n  position: absolute;\n  right: 1rem;\n  top: -10px;\n  height: 21px;\n}\n\n.level-type-card__tag {\n  background-color: var(--color-brand-a);\n  text-transform: uppercase;\n  color: var(--color-white-1);\n  border-radius: 12px;\n  padding: 3px 8px 2px;\n}\n\n.level-type-card__description__prompt {\n  color: var( --color-brand-a);\n  overflow: hidden;\n}\n\n.level-type-card__description__text {\n  color: var( --color-black-3);\n  overflow: hidden;\n}\n","",{version:3,sources:["webpack://./app/components/LevelTypeCard/levelTypeCard.css"],names:[],mappings:"AAAA;EACE,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,kBAAkB;EAClB,mCAAmC;EACnC,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,yBAAyB;EACzB,2BAA2B;EAC3B,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB",sourcesContent:[".level-type-card {\n  background-color: var(--color-secondary-a);\n  position: relative;\n}\n\n.level-type-card label {  \n  display: flex;\n  justify-content: space-between;\n}\n\n.level-type-card input {\n  width: 20px;\n  height: 20px;\n  color: var(--color-primary-a);\n  border-radius: 50%;\n  border-color: var(--color-gray-900);\n  background-color: var(--color-secondary-a);\n}\n\n.level-type-card input:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.level-type-card input:checked {\n  background-image: none;\n  box-shadow: inset 0px 0px 0px 3px white;\n}\n\n.level-type-card__tag__wrapper {\n  position: absolute;\n  right: 1rem;\n  top: -10px;\n  height: 21px;\n}\n\n.level-type-card__tag {\n  background-color: var(--color-brand-a);\n  text-transform: uppercase;\n  color: var(--color-white-1);\n  border-radius: 12px;\n  padding: 3px 8px 2px;\n}\n\n.level-type-card__description__prompt {\n  color: var( --color-brand-a);\n  overflow: hidden;\n}\n\n.level-type-card__description__text {\n  color: var( --color-black-3);\n  overflow: hidden;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);