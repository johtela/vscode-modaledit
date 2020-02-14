/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/accordion.ts":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/accordion.ts ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const $ = __webpack_require__(/*! ./myquery */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts");
function initAccordions(element) {
    let accordions = element.getElementsByClassName($.accordion);
    for (let i = 0; i < accordions.length; ++i) {
        let acc = accordions[i];
        let panel = acc.nextElementSibling;
        let initHeight = panel.scrollHeight + "px";
        panel.style.maxHeight = initHeight;
        acc.onclick = () => {
            acc.classList.toggle($.collapsed);
            panel.style.maxHeight = panel.style.maxHeight === "0px" ?
                initHeight : "0px";
        };
    }
}
exports.initAccordions = initAccordions;


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.expanded = "expanded";
exports.collapsed = "collapsed";
exports.accordion = "accordion";
exports.hamburger = "hamburger";
exports.navbar = "navbar";
exports.scrollingarea = "scrollingarea";
exports.closepopups = "closepopups";
exports.infobox = "info-box";
function firstElementWithStyle(className, parent = document) {
    let res = parent.getElementsByClassName(className)[0];
    if (!res)
        throw ReferenceError(`Cannot find element with class "${className}".`);
    return res;
}
exports.firstElementWithStyle = firstElementWithStyle;
function elementsWithStyle(className, parent = document) {
    return parent.getElementsByClassName(className);
}
exports.elementsWithStyle = elementsWithStyle;
function isHTMLCollection(elem) {
    return elem.length !== undefined;
}
exports.isHTMLCollection = isHTMLCollection;
function each(elem, action) {
    if (isHTMLCollection(elem))
        for (let i = 0; i < elem.length; ++i)
            action(elem[i]);
    else
        action(elem);
}
exports.each = each;
function create(tag, children = null) {
    let elem = document.createElement(tag);
    if (children) {
        if (typeof (children) === "string")
            elem.appendChild(document.createTextNode(children));
        else
            each(children, c => elem.appendChild(c));
    }
    return elem;
}
exports.create = create;
function attr(elem, attrName, attrValue) {
    each(elem, e => e.setAttribute(attrName, attrValue));
    return elem;
}
exports.attr = attr;


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/popups.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/popups.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const $ = __webpack_require__(/*! ./myquery */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts");
let closepopups = $.firstElementWithStyle($.closepopups);
function popupOnClick(element, toggle, hide) {
    element.addEventListener("click", toggle);
    closepopups.addEventListener("mouseup", hide);
    document.addEventListener("keydown", e => {
        if (e.key === "Escape")
            hide();
    });
}
exports.popupOnClick = popupOnClick;
function toggleClassOnClick(element, cls, target = element) {
    popupOnClick(element, () => $.each(target, e => e.classList.toggle(cls)), () => $.each(target, e => e.classList.remove(cls)));
}
exports.toggleClassOnClick = toggleClassOnClick;


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/contentarea/contentarea.less":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/contentarea/contentarea.less ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/contentarea/contentarea.ts":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/contentarea/contentarea.ts ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./contentarea.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/contentarea/contentarea.less");
__webpack_require__(/*! syntaxhighlight */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/syntax/coding-horror.less");


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/footer/footer.less":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/footer/footer.less ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/footer/footer.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/footer/footer.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./footer.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/footer/footer.less");


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/hamburger/hamburger.less":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/hamburger/hamburger.less ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/hamburger/hamburger.ts":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/hamburger/hamburger.ts ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./hamburger.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/hamburger/hamburger.less");
const $ = __webpack_require__(/*! ../../components/common/myquery */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts");
const popups_1 = __webpack_require__(/*! ../../components/common/popups */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/popups.ts");
$.each($.elementsWithStyle("hamburger"), hamb => popups_1.toggleClassOnClick(hamb, "open"));


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/landing.less":
/*!********************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/landing.less ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/landing.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/landing.ts ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./landing.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/landing.less");
const $ = __webpack_require__(/*! ./common/myquery */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts");
revealInfoBoxes();
createInfoMenu();
function revealInfoBoxes() {
    let arrows = $.elementsWithStyle("scroll-indicator");
    if (!arrows || arrows.length != 2)
        return;
    let arrowUp = arrows[0];
    let arrowDown = arrows[1];
    window.addEventListener("scroll", setBoxOpacities);
    window.addEventListener("resize", setBoxOpacities);
    setBoxOpacities();
    function setBoxOpacities() {
        arrowUp.style.opacity = "0";
        arrowDown.style.opacity = "0";
        for (let ib of $.elementsWithStyle('info-box')) {
            let hib = ib;
            let scrtop = window.pageYOffset;
            let scrbot = window.pageYOffset + window.innerHeight;
            let marginFactor = 6;
            let top = hib.offsetTop;
            let bot = top + hib.offsetHeight;
            let margin = window.innerHeight / marginFactor;
            if (scrtop == 0) {
                hib.style.opacity = "0";
                arrowDown.style.opacity = "1";
            }
            else if (top < scrbot - margin && bot > scrtop + margin)
                hib.style.opacity = "1";
            else {
                hib.style.opacity = "0";
                if (bot > scrtop && bot < scrtop + margin)
                    arrowUp.style.opacity = "1";
                if (top < scrbot && top > scrtop - margin)
                    arrowDown.style.opacity = "1";
            }
        }
    }
}
function createInfoMenu() {
    let infoArea = $.elementsWithStyle("info-area")[0];
    if (!infoArea)
        return;
    let headingOffsets = [];
    let headings = infoArea.querySelectorAll("h2");
    let menu = $.firstElementWithStyle("info-menu");
    let ul = document.createElement('ul');
    menu.appendChild(ul);
    for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        let link = $.attr($.create("a", heading.textContent), "href", "#" + heading.id);
        let li = $.create("li", link);
        ul.appendChild(li);
        headingOffsets[i] = { heading, li };
    }
    window.addEventListener("scroll", () => {
        let pos = window.pageYOffset;
        let found = false;
        let prev = null;
        for (let i = 0; i < headingOffsets.length; i++) {
            let ho = headingOffsets[i];
            ho.li.classList.remove("highlight");
            if (!found && ho.heading.offsetTop > (pos + ho.heading.offsetHeight)) {
                (prev || ho).li.classList.add("highlight");
                found = true;
            }
            prev = ho;
        }
        if (!found && prev)
            prev.li.classList.add("highlight");
    });
}


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/layout/layout.less":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/layout/layout.less ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/layout/layout.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/layout/layout.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./layout.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/layout/layout.less");
const $ = __webpack_require__(/*! ../../components/common/myquery */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts");
const popups_1 = __webpack_require__(/*! ../../components/common/popups */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/popups.ts");
// Hook hamburger icon to closing side pane.
let layout = $.elementsWithStyle("layout")[0];
if (layout) {
    let hamb = $.firstElementWithStyle("hamburger", layout);
    popups_1.toggleClassOnClick(hamb, "expanded", layout.getElementsByClassName("collapsible"));
    // Set the top offset of sticky pane.
    let stickypane = $.firstElementWithStyle("stickypane");
    let stickyStyle = getComputedStyle(stickypane);
    let initialStickyTop = parseInt(stickyStyle.top, 10);
    setStickyTop();
    window.addEventListener("resize", setStickyTop);
    function setStickyTop() {
        let offs = Math.min((window.innerHeight - stickypane.offsetHeight) / 2, initialStickyTop);
        stickypane.style.top = `${offs}px`;
    }
}


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/main.less":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/main.less ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/main.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/main.ts ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./main.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/main.less");
__webpack_require__(/*! ./hamburger/hamburger */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/hamburger/hamburger.ts");
__webpack_require__(/*! ./navbar/navbar */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/navbar/navbar.ts");
__webpack_require__(/*! ./layout/layout */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/layout/layout.ts");
__webpack_require__(/*! ./tocmenu/tocmenu */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tocmenu/tocmenu.ts");
__webpack_require__(/*! ./contentarea/contentarea */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/contentarea/contentarea.ts");
__webpack_require__(/*! ./pagemenu/pagemenu */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/pagemenu/pagemenu.ts");
__webpack_require__(/*! ./footer/footer */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/footer/footer.ts");
__webpack_require__(/*! ./tooltips/tooltips */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tooltips/tooltips.ts");
__webpack_require__(/*! ./landing */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/landing.ts");


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/navbar/navbar.less":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/navbar/navbar.less ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/navbar/navbar.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/navbar/navbar.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./navbar.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/navbar/navbar.less");
const $ = __webpack_require__(/*! ../common/myquery */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts");
const popups_1 = __webpack_require__(/*! ../../components/common/popups */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/popups.ts");
// Set up responsive menu.
let navbar = $.firstElementWithStyle($.navbar);
let hamb = $.firstElementWithStyle($.hamburger, navbar);
let hidden = false;
popups_1.toggleClassOnClick(hamb, $.expanded, navbar);
// Hide navbar when scrolling down.
let dockedTop = navbar.offsetTop === 0;
let prevScroll = window.pageYOffset;
window.addEventListener("scroll", () => {
    var currScroll = window.pageYOffset;
    setNavbarOffset(dockedTop, prevScroll > currScroll ? 0 : -(navbar.offsetHeight - (dockedTop ? 1 : 2)));
    prevScroll = currScroll;
});
navbar.addEventListener("mouseenter", () => {
    if (hidden)
        setNavbarOffset(dockedTop, 0);
});
function setNavbarOffset(dockedTop, offs) {
    hidden = offs !== 0;
    if (!navbar.classList.contains($.expanded)) {
        if (dockedTop)
            navbar.style.top = `${offs}px`;
        else
            navbar.style.bottom = `${offs}px`;
    }
}


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/pagemenu/pagemenu.less":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/pagemenu/pagemenu.less ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/pagemenu/pagemenu.ts":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/pagemenu/pagemenu.ts ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./pagemenu.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/pagemenu/pagemenu.less");
const $ = __webpack_require__(/*! ../../components/common/myquery */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts");
let pagemenu = $.elementsWithStyle("pagemenu")[0];
if (pagemenu) {
    let headingOffsets = [];
    let contentarea = $.firstElementWithStyle("contentarea");
    let pagetree = $.firstElementWithStyle("pagetree", pagemenu);
    let headings = contentarea.querySelectorAll("h1, h2, h3, h4, h5");
    buildTree(pagetree, null, 1, headings, 0);
    window.addEventListener("scroll", () => {
        let pos = window.pageYOffset;
        let found = false;
        let prev = null;
        for (let i = 0; i < headingOffsets.length; i++) {
            let ho = headingOffsets[i];
            ho.link.classList.remove("highlight");
            if (!found && ho.heading.offsetTop > (pos + ho.heading.offsetHeight)) {
                (prev || ho).link.classList.add("highlight");
                found = true;
            }
            prev = ho;
        }
        if (!found && prev)
            prev.link.classList.add("highlight");
    });
    function buildTree(parentList, prevItem, level, headings, index) {
        while (index < headings.length) {
            let heading = headings[index];
            let currLevel = parseInt(heading.tagName.substr(1, 1));
            if (currLevel < level)
                return index;
            if (currLevel > level) {
                if (prevItem) {
                    let subList = document.createElement("ul");
                    prevItem.appendChild(subList);
                    index = buildTree(subList, null, currLevel, headings, index);
                }
                else
                    index = buildTree(parentList, null, currLevel, headings, index);
            }
            else {
                let link = $.attr($.create("a", heading.textContent), "href", "#" + heading.id);
                let listItem = $.create("li", link);
                parentList.appendChild(listItem);
                headingOffsets[index] = { heading, link };
                index = buildTree(parentList, listItem, level, headings, index + 1);
            }
        }
        return index;
    }
}


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/syntax/coding-horror.less":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/syntax/coding-horror.less ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tocmenu/tocmenu.less":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tocmenu/tocmenu.less ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tocmenu/tocmenu.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tocmenu/tocmenu.ts ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./tocmenu.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tocmenu/tocmenu.less");
const $ = __webpack_require__(/*! ../../components/common/myquery */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/myquery.ts");
const accordion_1 = __webpack_require__(/*! ../../components/common/accordion */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/common/accordion.ts");
let tocmenu = $.elementsWithStyle("tocmenu")[0];
if (tocmenu) {
    if (!document.fonts || document.fonts.status == "loaded")
        accordion_1.initAccordions(tocmenu);
    else
        document.fonts.onloadingdone = () => accordion_1.initAccordions(tocmenu);
}


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tooltips/tooltips.less":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tooltips/tooltips.less ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tooltips/tooltips.ts":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tooltips/tooltips.ts ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tippy_js_1 = __webpack_require__(/*! tippy.js */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/tippy.js/esm/index.all.js");
__webpack_require__(/*! ./tooltips.less */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/lits-template/components/tooltips/tooltips.less");
// let body = document.getElementsByTagName('body')[0]
document.querySelectorAll('[data-toggle="tooltip"]').forEach(elem => {
    tippy_js_1.default(elem, {
        content: elem.getAttribute("data-title"),
        placement: 'top',
        maxWidth: window.innerWidth * 0.8,
        arrow: true,
        theme: 'custom',
        boundary: "window",
        delay: 500,
        allowHTML: false
    });
});


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/popper.js/dist/esm/popper.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/popper.js/dist/esm/popper.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/tippy.js/esm/index.all.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/tommi/AppData/Roaming/npm/node_modules/litscript/node_modules/tippy.js/esm/index.all.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/popper.js/dist/esm/popper.js");
/**!
* tippy.js v4.3.5
* (c) 2017-2019 atomiks
* MIT License
*/


var css = ".tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px);transform:perspective(700px) translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(60deg);transform:perspective(700px) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px);transform:perspective(700px) translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(-60deg);transform:perspective(700px) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px);transform:perspective(700px) translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(-60deg);transform:perspective(700px) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px);transform:perspective(700px) translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(60deg);transform:perspective(700px) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:initial}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] .tippy-roundarrow path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:\"\";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}";

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var version = "4.3.5";

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var isIE = /MSIE |Trident\//.test(ua);
var isUCBrowser = /UCBrowser\//.test(ua);
var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream;

var defaultProps = {
  a11y: true,
  allowHTML: true,
  animateFill: true,
  animation: 'shift-away',
  appendTo: function appendTo() {
    return document.body;
  },
  aria: 'describedby',
  arrow: false,
  arrowType: 'sharp',
  boundary: 'scrollParent',
  content: '',
  delay: 0,
  distance: 10,
  duration: [325, 275],
  flip: true,
  flipBehavior: 'flip',
  flipOnUpdate: false,
  followCursor: false,
  hideOnClick: true,
  ignoreAttributes: false,
  inertia: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  lazy: true,
  maxWidth: 350,
  multiple: false,
  offset: 0,
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  placement: 'top',
  popperOptions: {},
  role: 'tooltip',
  showOnInit: false,
  size: 'regular',
  sticky: false,
  target: '',
  theme: 'dark',
  touch: true,
  touchHold: false,
  trigger: 'mouseenter focus',
  triggerTarget: null,
  updateDuration: 0,
  wait: null,
  zIndex: 9999
  /**
   * If the set() method encounters one of these, the popperInstance must be
   * recreated
   */

};
var POPPER_INSTANCE_DEPENDENCIES = ['arrow', 'arrowType', 'boundary', 'distance', 'flip', 'flipBehavior', 'flipOnUpdate', 'offset', 'placement', 'popperOptions'];

var elementProto = isBrowser ? Element.prototype : {};
var matches = elementProto.matches || elementProto.matchesSelector || elementProto.webkitMatchesSelector || elementProto.mozMatchesSelector || elementProto.msMatchesSelector;
/**
 * Ponyfill for Array.from - converts iterable values to an array
 */

function arrayFrom(value) {
  return [].slice.call(value);
}
/**
 * Ponyfill for Element.prototype.closest
 */

function closest(element, selector) {
  return closestCallback(element, function (el) {
    return matches.call(el, selector);
  });
}
/**
 * Works like Element.prototype.closest, but uses a callback instead
 */

function closestCallback(element, callback) {
  while (element) {
    if (callback(element)) {
      return element;
    }

    element = element.parentElement;
  }

  return null;
}

// Passive event listener config
var PASSIVE = {
  passive: true // Popper `preventOverflow` padding

};
var PADDING = 4; // Popper attributes
// In Popper v2 these will be `data-*` instead of `x-*` to adhere to HTML5 spec

var PLACEMENT_ATTRIBUTE = 'x-placement';
var OUT_OF_BOUNDARIES_ATTRIBUTE = 'x-out-of-boundaries'; // Classes

var IOS_CLASS = "tippy-iOS";
var ACTIVE_CLASS = "tippy-active";
var POPPER_CLASS = "tippy-popper";
var TOOLTIP_CLASS = "tippy-tooltip";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var ROUND_ARROW_CLASS = "tippy-roundarrow"; // Selectors

var POPPER_SELECTOR = ".".concat(POPPER_CLASS);
var TOOLTIP_SELECTOR = ".".concat(TOOLTIP_CLASS);
var CONTENT_SELECTOR = ".".concat(CONTENT_CLASS);
var BACKDROP_SELECTOR = ".".concat(BACKDROP_CLASS);
var ARROW_SELECTOR = ".".concat(ARROW_CLASS);
var ROUND_ARROW_SELECTOR = ".".concat(ROUND_ARROW_CLASS);

var isUsingTouch = false;
function onDocumentTouch() {
  if (isUsingTouch) {
    return;
  }

  isUsingTouch = true;

  if (isIOS) {
    document.body.classList.add(IOS_CLASS);
  }

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
var lastMouseMoveTime = 0;
function onDocumentMouseMove() {
  var now = performance.now(); // Chrome 60+ is 1 mousemove per animation frame, use 20ms time difference

  if (now - lastMouseMoveTime < 20) {
    isUsingTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);

    if (!isIOS) {
      document.body.classList.remove(IOS_CLASS);
    }
  }

  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var _document = document,
      activeElement = _document.activeElement;

  if (activeElement && activeElement.blur && activeElement._tippy) {
    activeElement.blur();
  }
}
/**
 * Adds the needed global event listeners
 */

function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouch, PASSIVE);
  window.addEventListener('blur', onWindowBlur);
}

var keys = Object.keys(defaultProps);
/**
 * Returns an object of optional props from data-tippy-* attributes
 */

function getDataAttributeOptions(reference) {
  return keys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-".concat(key)) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
}
/**
 * Polyfills the virtual reference (plain object) with Element.prototype props
 * Mutating because DOM elements are mutated, adds `_tippy` property
 */

function polyfillElementPrototypeProperties(virtualReference) {
  var polyfills = {
    isVirtual: true,
    attributes: virtualReference.attributes || {},
    contains: function contains() {},
    setAttribute: function setAttribute(key, value) {
      virtualReference.attributes[key] = value;
    },
    getAttribute: function getAttribute(key) {
      return virtualReference.attributes[key];
    },
    removeAttribute: function removeAttribute(key) {
      delete virtualReference.attributes[key];
    },
    hasAttribute: function hasAttribute(key) {
      return key in virtualReference.attributes;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    classList: {
      classNames: {},
      add: function add(key) {
        virtualReference.classList.classNames[key] = true;
      },
      remove: function remove(key) {
        delete virtualReference.classList.classNames[key];
      },
      contains: function contains(key) {
        return key in virtualReference.classList.classNames;
      }
    }
  };

  for (var key in polyfills) {
    virtualReference[key] = polyfills[key];
  }
}

/**
 * Determines if a value is a "bare" virtual element (before mutations done
 * by `polyfillElementPrototypeProperties()`). JSDOM elements show up as
 * [object Object], we can check if the value is "element-like" if it has
 * `addEventListener`
 */

function isBareVirtualElement(value) {
  return {}.toString.call(value) === '[object Object]' && !value.addEventListener;
}
/**
 * Determines if the value is a reference element
 */

function isReferenceElement(value) {
  return !!value._tippy && !matches.call(value, POPPER_SELECTOR);
}
/**
 * Safe .hasOwnProperty check, for prototype-less objects
 */

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
/**
 * Returns an array of elements based on the value
 */

function getArrayOfElements(value) {
  if (isSingular(value)) {
    // TODO: VirtualReference is not compatible to type Element
    return [value];
  }

  if (value instanceof NodeList) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  try {
    return arrayFrom(document.querySelectorAll(value));
  } catch (e) {
    return [];
  }
}
/**
 * Returns a value at a given index depending on if it's an array or number
 */

function getValue(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? defaultValue : v;
  }

  return value;
}
/**
 * Debounce utility. To avoid bloating bundle size, we're only passing 1
 * argument here, a more generic function would pass all arguments. Only
 * `onMouseMove` uses this which takes the event object for now.
 */

function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
/**
 * Prevents errors from being thrown while accessing nested modifier objects
 * in `popperOptions`
 */

function getModifier(obj, key) {
  return obj && obj.modifiers && obj.modifiers[key];
}
/**
 * Determines if an array or string includes a value
 */

function includes(a, b) {
  return a.indexOf(b) > -1;
}
/**
 * Determines if the value is a real element
 */

function isRealElement(value) {
  return value instanceof Element;
}
/**
 * Determines if the value is singular-like
 */

function isSingular(value) {
  return !!(value && hasOwnProperty(value, 'isVirtual')) || isRealElement(value);
}
/**
 * Firefox extensions don't allow setting .innerHTML directly, this will trick it
 */

function innerHTML() {
  return 'innerHTML';
}
/**
 * Evaluates a function if one, or returns the value
 */

function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(null, args) : value;
}
/**
 * Sets a popperInstance `flip` modifier's enabled state
 */

function setFlipModifierEnabled(modifiers, value) {
  modifiers.filter(function (m) {
    return m.name === 'flip';
  })[0].enabled = value;
}
/**
 * Determines if an element can receive focus
 * Always returns true for virtual objects
 */

function canReceiveFocus(element) {
  return isRealElement(element) ? matches.call(element, 'a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]') && !element.hasAttribute('disabled') : true;
}
/**
 * Returns a new `div` element
 */

function div() {
  return document.createElement('div');
}
/**
 * Applies a transition duration to a list of elements
 */

function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = "".concat(value, "ms");
    }
  });
}
/**
 * Sets the visibility state to elements so they can begin to transition
 */

function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
/**
 * Evaluates the props object by merging data attributes and
 * disabling conflicting options where necessary
 */

function evaluateProps(reference, props) {
  var out = _extends({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeOptions(reference));

  if (out.arrow || isUCBrowser) {
    out.animateFill = false;
  }

  return out;
}
/**
 * Validates an object of options with the valid default props object
 */

function validateOptions(options, defaultProps) {
  Object.keys(options).forEach(function (option) {
    if (!hasOwnProperty(defaultProps, option)) {
      throw new Error("[tippy]: `".concat(option, "` is not a valid option"));
    }
  });
}

/**
 * Sets the innerHTML of an element
 */

function setInnerHTML(element, html) {
  element[innerHTML()] = isRealElement(html) ? html[innerHTML()] : html;
}
/**
 * Sets the content of a tooltip
 */

function setContent(contentEl, props) {
  if (isRealElement(props.content)) {
    setInnerHTML(contentEl, '');
    contentEl.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    var key = props.allowHTML ? 'innerHTML' : 'textContent';
    contentEl[key] = props.content;
  }
}
/**
 * Returns the child elements of a popper element
 */

function getChildren(popper) {
  return {
    tooltip: popper.querySelector(TOOLTIP_SELECTOR),
    backdrop: popper.querySelector(BACKDROP_SELECTOR),
    content: popper.querySelector(CONTENT_SELECTOR),
    arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(ROUND_ARROW_SELECTOR)
  };
}
/**
 * Adds `data-inertia` attribute
 */

function addInertia(tooltip) {
  tooltip.setAttribute('data-inertia', '');
}
/**
 * Removes `data-inertia` attribute
 */

function removeInertia(tooltip) {
  tooltip.removeAttribute('data-inertia');
}
/**
 * Creates an arrow element and returns it
 */

function createArrowElement(arrowType) {
  var arrow = div();

  if (arrowType === 'round') {
    arrow.className = ROUND_ARROW_CLASS;
    setInnerHTML(arrow, '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>');
  } else {
    arrow.className = ARROW_CLASS;
  }

  return arrow;
}
/**
 * Creates a backdrop element and returns it
 */

function createBackdropElement() {
  var backdrop = div();
  backdrop.className = BACKDROP_CLASS;
  backdrop.setAttribute('data-state', 'hidden');
  return backdrop;
}
/**
 * Adds interactive-related attributes
 */

function addInteractive(popper, tooltip) {
  popper.setAttribute('tabindex', '-1');
  tooltip.setAttribute('data-interactive', '');
}
/**
 * Removes interactive-related attributes
 */

function removeInteractive(popper, tooltip) {
  popper.removeAttribute('tabindex');
  tooltip.removeAttribute('data-interactive');
}
/**
 * Add/remove transitionend listener from tooltip
 */

function updateTransitionEndListener(tooltip, action, listener) {
  // UC Browser hasn't adopted the `transitionend` event despite supporting
  // unprefixed transitions...
  var eventName = isUCBrowser && document.body.style.webkitTransition !== undefined ? 'webkitTransitionEnd' : 'transitionend';
  tooltip[action + 'EventListener'](eventName, listener);
}
/**
 * Returns the popper's placement, ignoring shifting (top-start, etc)
 */

function getBasicPlacement(popper) {
  var fullPlacement = popper.getAttribute(PLACEMENT_ATTRIBUTE);
  return fullPlacement ? fullPlacement.split('-')[0] : '';
}
/**
 * Triggers reflow
 */

function reflow(popper) {
  void popper.offsetHeight;
}
/**
 * Adds/removes theme from tooltip's classList
 */

function updateTheme(tooltip, action, theme) {
  theme.split(' ').forEach(function (themeName) {
    tooltip.classList[action](themeName + '-theme');
  });
}
/**
 * Constructs the popper element and returns it
 */

function createPopperElement(id, props) {
  var popper = div();
  popper.className = POPPER_CLASS;
  popper.id = "tippy-".concat(id);
  popper.style.zIndex = '' + props.zIndex;
  popper.style.position = 'absolute';
  popper.style.top = '0';
  popper.style.left = '0';

  if (props.role) {
    popper.setAttribute('role', props.role);
  }

  var tooltip = div();
  tooltip.className = TOOLTIP_CLASS;
  tooltip.style.maxWidth = props.maxWidth + (typeof props.maxWidth === 'number' ? 'px' : '');
  tooltip.setAttribute('data-size', props.size);
  tooltip.setAttribute('data-animation', props.animation);
  tooltip.setAttribute('data-state', 'hidden');
  updateTheme(tooltip, 'add', props.theme);
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');

  if (props.interactive) {
    addInteractive(popper, tooltip);
  }

  if (props.arrow) {
    tooltip.appendChild(createArrowElement(props.arrowType));
  }

  if (props.animateFill) {
    tooltip.appendChild(createBackdropElement());
    tooltip.setAttribute('data-animatefill', '');
  }

  if (props.inertia) {
    addInertia(tooltip);
  }

  setContent(content, props);
  tooltip.appendChild(content);
  popper.appendChild(tooltip);
  return popper;
}
/**
 * Updates the popper element based on the new props
 */

function updatePopperElement(popper, prevProps, nextProps) {
  var _getChildren = getChildren(popper),
      tooltip = _getChildren.tooltip,
      content = _getChildren.content,
      backdrop = _getChildren.backdrop,
      arrow = _getChildren.arrow;

  popper.style.zIndex = '' + nextProps.zIndex;
  tooltip.setAttribute('data-size', nextProps.size);
  tooltip.setAttribute('data-animation', nextProps.animation);
  tooltip.style.maxWidth = nextProps.maxWidth + (typeof nextProps.maxWidth === 'number' ? 'px' : '');

  if (nextProps.role) {
    popper.setAttribute('role', nextProps.role);
  } else {
    popper.removeAttribute('role');
  }

  if (prevProps.content !== nextProps.content) {
    setContent(content, nextProps);
  } // animateFill


  if (!prevProps.animateFill && nextProps.animateFill) {
    tooltip.appendChild(createBackdropElement());
    tooltip.setAttribute('data-animatefill', '');
  } else if (prevProps.animateFill && !nextProps.animateFill) {
    tooltip.removeChild(backdrop);
    tooltip.removeAttribute('data-animatefill');
  } // arrow


  if (!prevProps.arrow && nextProps.arrow) {
    tooltip.appendChild(createArrowElement(nextProps.arrowType));
  } else if (prevProps.arrow && !nextProps.arrow) {
    tooltip.removeChild(arrow);
  } // arrowType


  if (prevProps.arrow && nextProps.arrow && prevProps.arrowType !== nextProps.arrowType) {
    tooltip.replaceChild(createArrowElement(nextProps.arrowType), arrow);
  } // interactive


  if (!prevProps.interactive && nextProps.interactive) {
    addInteractive(popper, tooltip);
  } else if (prevProps.interactive && !nextProps.interactive) {
    removeInteractive(popper, tooltip);
  } // inertia


  if (!prevProps.inertia && nextProps.inertia) {
    addInertia(tooltip);
  } else if (prevProps.inertia && !nextProps.inertia) {
    removeInertia(tooltip);
  } // theme


  if (prevProps.theme !== nextProps.theme) {
    updateTheme(tooltip, 'remove', prevProps.theme);
    updateTheme(tooltip, 'add', nextProps.theme);
  }
}
/**
 * Hides all visible poppers on the document
 */

function hideAll() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

  arrayFrom(document.querySelectorAll(POPPER_SELECTOR)).forEach(function (popper) {
    var instance = popper._tippy;

    if (instance) {
      var isExcluded = false;

      if (excludedReferenceOrInstance) {
        isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : popper === excludedReferenceOrInstance.popper;
      }

      if (!isExcluded) {
        instance.hide(duration);
      }
    }
  });
}
/**
 * Determines if the mouse cursor is outside of the popper's interactive border
 * region
 */

function isCursorOutsideInteractiveBorder(popperPlacement, popperRect, event, props) {
  if (!popperPlacement) {
    return true;
  }

  var x = event.clientX,
      y = event.clientY;
  var interactiveBorder = props.interactiveBorder,
      distance = props.distance;
  var exceedsTop = popperRect.top - y > (popperPlacement === 'top' ? interactiveBorder + distance : interactiveBorder);
  var exceedsBottom = y - popperRect.bottom > (popperPlacement === 'bottom' ? interactiveBorder + distance : interactiveBorder);
  var exceedsLeft = popperRect.left - x > (popperPlacement === 'left' ? interactiveBorder + distance : interactiveBorder);
  var exceedsRight = x - popperRect.right > (popperPlacement === 'right' ? interactiveBorder + distance : interactiveBorder);
  return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
}
/**
 * Returns the distance offset, taking into account the default offset due to
 * the transform: translate() rule (10px) in CSS
 */

function getOffsetDistanceInPx(distance) {
  return -(distance - 10) + 'px';
}

var idCounter = 1; // Workaround for IE11's lack of new MouseEvent constructor

var mouseMoveListeners = [];
/**
 * Creates and returns a Tippy object. We're using a closure pattern instead of
 * a class so that the exposed object API is clean without private members
 * prefixed with `_`.
 */

function createTippy(reference, collectionProps) {
  var props = evaluateProps(reference, collectionProps); // If the reference shouldn't have multiple tippys, return null early

  if (!props.multiple && reference._tippy) {
    return null;
  }
  /* ======================= 🔒 Private members 🔒 ======================= */


  var lastTriggerEventType;
  var lastMouseMoveEvent;
  var showTimeoutId;
  var hideTimeoutId;
  var scheduleHideAnimationFrameId;
  var isScheduledToShow = false;
  var isBeingDestroyed = false;
  var previousPlacement;
  var wasVisibleDuringPreviousUpdate = false;
  var hasMountCallbackRun = false;
  var currentMountCallback;
  var currentTransitionEndListener;
  var listeners = [];
  var currentComputedPadding;
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  /* ======================= 🔑 Public members 🔑 ======================= */

  var id = idCounter++;
  var popper = createPopperElement(id, props);
  var popperChildren = getChildren(popper);
  var popperInstance = null;
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: popper,
    popperChildren: popperChildren,
    popperInstance: popperInstance,
    props: props,
    state: state,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    set: set,
    setContent: setContent,
    show: show,
    hide: hide,
    enable: enable,
    disable: disable,
    destroy: destroy
    /* ==================== Initial instance mutations =================== */

  };
  reference._tippy = instance;
  popper._tippy = instance;
  addTriggersToReference();

  if (!props.lazy) {
    createPopperInstance();
  }

  if (props.showOnInit) {
    scheduleShow();
  } // Ensure the event listeners target can receive focus


  if (props.a11y && !props.target && !canReceiveFocus(getEventListenersTarget())) {
    getEventListenersTarget().setAttribute('tabindex', '0');
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function (event) {
    if (instance.props.interactive && instance.state.isVisible && lastTriggerEventType === 'mouseenter') {
      // We don't want props.onTrigger() to be called here, since the `event`
      // object is not related to the reference element
      scheduleShow(event, true);
    }
  });
  popper.addEventListener('mouseleave', function () {
    if (instance.props.interactive && lastTriggerEventType === 'mouseenter') {
      document.addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance;
  /* ======================= 🔒 Private methods 🔒 ======================= */

  /**
   * Removes the follow cursor listener
   */

  function removeFollowCursorListener() {
    document.removeEventListener('mousemove', positionVirtualReferenceNearCursor);
  }
  /**
   * Cleans up interactive mouse listeners
   */


  function cleanupInteractiveMouseListeners() {
    document.body.removeEventListener('mouseleave', scheduleHide);
    document.removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  /**
   * Returns correct target used for event listeners
   */


  function getEventListenersTarget() {
    return instance.props.triggerTarget || reference;
  }
  /**
   * Adds the document click event listener for the instance
   */


  function addDocumentClickListener() {
    document.addEventListener('click', onDocumentClick, true);
  }
  /**
   * Removes the document click event listener for the instance
   */


  function removeDocumentClickListener() {
    document.removeEventListener('click', onDocumentClick, true);
  }
  /**
   * Returns transitionable inner elements used in show/hide methods
   */


  function getTransitionableElements() {
    return [instance.popperChildren.tooltip, instance.popperChildren.backdrop, instance.popperChildren.content];
  }
  /**
   * Determines if the instance is in `followCursor` mode.
   * NOTE: in v5, touch devices will use `initial` behavior no matter the value.
   */


  function getIsInLooseFollowCursorMode() {
    var followCursor = instance.props.followCursor;
    return followCursor && lastTriggerEventType !== 'focus' || isUsingTouch && followCursor === 'initial';
  }
  /**
   * Updates the tooltip's position on each animation frame
   */


  function makeSticky() {
    setTransitionDuration([popper], isIE ? 0 : instance.props.updateDuration);
    var prevRefRect = reference.getBoundingClientRect();

    function updatePosition() {
      var currentRefRect = reference.getBoundingClientRect(); // Only schedule an update if the reference rect has changed

      if (prevRefRect.top !== currentRefRect.top || prevRefRect.right !== currentRefRect.right || prevRefRect.bottom !== currentRefRect.bottom || prevRefRect.left !== currentRefRect.left) {
        instance.popperInstance.scheduleUpdate();
      }

      prevRefRect = currentRefRect;

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }

    updatePosition();
  }
  /**
   * Invokes a callback once the tooltip has fully transitioned out
   */


  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }
  /**
   * Invokes a callback once the tooltip has fully transitioned in
   */


  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  /**
   * Invokes a callback once the tooltip's CSS transition ends
   */


  function onTransitionEnd(duration, callback) {
    var tooltip = instance.popperChildren.tooltip;
    /**
     * Listener added as the `transitionend` handler
     */

    function listener(event) {
      if (event.target === tooltip) {
        updateTransitionEndListener(tooltip, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(tooltip, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(tooltip, 'add', listener);
    currentTransitionEndListener = listener;
  }
  /**
   * Adds an event listener to the reference and stores it in `listeners`
   */


  function on(eventType, handler) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    getEventListenersTarget().addEventListener(eventType, handler, options);
    listeners.push({
      eventType: eventType,
      handler: handler,
      options: options
    });
  }
  /**
   * Adds event listeners to the reference based on the `trigger` prop
   */


  function addTriggersToReference() {
    if (instance.props.touchHold && !instance.props.target) {
      on('touchstart', onTrigger, PASSIVE);
      on('touchend', onMouseLeave, PASSIVE);
    }

    instance.props.trigger.trim().split(' ').forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      } // Non-delegates


      if (!instance.props.target) {
        on(eventType, onTrigger);

        switch (eventType) {
          case 'mouseenter':
            on('mouseleave', onMouseLeave);
            break;

          case 'focus':
            on(isIE ? 'focusout' : 'blur', onBlur);
            break;
        }
      } else {
        // Delegates
        switch (eventType) {
          case 'mouseenter':
            on('mouseover', onDelegateShow);
            on('mouseout', onDelegateHide);
            break;

          case 'focus':
            on('focusin', onDelegateShow);
            on('focusout', onDelegateHide);
            break;

          case 'click':
            on(eventType, onDelegateShow);
            break;
        }
      }
    });
  }
  /**
   * Removes event listeners from the reference
   */


  function removeTriggersFromReference() {
    listeners.forEach(function (_ref) {
      var eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      getEventListenersTarget().removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  /**
   * Positions the virtual reference near the cursor
   */


  function positionVirtualReferenceNearCursor(event) {
    var _lastMouseMoveEvent = lastMouseMoveEvent = event,
        x = _lastMouseMoveEvent.clientX,
        y = _lastMouseMoveEvent.clientY; // Gets set once popperInstance `onCreate` has been called


    if (!currentComputedPadding) {
      return;
    } // If the instance is interactive, avoid updating the position unless it's
    // over the reference element


    var isCursorOverReference = closestCallback(event.target, function (el) {
      return el === reference;
    });
    var rect = reference.getBoundingClientRect();
    var followCursor = instance.props.followCursor;
    var isHorizontal = followCursor === 'horizontal';
    var isVertical = followCursor === 'vertical'; // The virtual reference needs some size to prevent itself from overflowing

    var isVerticalPlacement = includes(['top', 'bottom'], getBasicPlacement(popper));
    var fullPlacement = popper.getAttribute(PLACEMENT_ATTRIBUTE);
    var isVariation = fullPlacement ? !!fullPlacement.split('-')[1] : false;
    var size = isVerticalPlacement ? popper.offsetWidth : popper.offsetHeight;
    var halfSize = size / 2;
    var verticalIncrease = isVerticalPlacement ? 0 : isVariation ? size : halfSize;
    var horizontalIncrease = isVerticalPlacement ? isVariation ? size : halfSize : 0;

    if (isCursorOverReference || !instance.props.interactive) {
      instance.popperInstance.reference = _extends({}, instance.popperInstance.reference, {
        // This will exist in next Popper.js feature release to fix #532
        // @ts-ignore
        referenceNode: reference,
        // These `client` values don't get used by Popper.js if they are 0
        clientWidth: 0,
        clientHeight: 0,
        getBoundingClientRect: function getBoundingClientRect() {
          return {
            width: isVerticalPlacement ? size : 0,
            height: isVerticalPlacement ? 0 : size,
            top: (isHorizontal ? rect.top : y) - verticalIncrease,
            bottom: (isHorizontal ? rect.bottom : y) + verticalIncrease,
            left: (isVertical ? rect.left : x) - horizontalIncrease,
            right: (isVertical ? rect.right : x) + horizontalIncrease
          };
        }
      });
      instance.popperInstance.update();
    }

    if (followCursor === 'initial' && instance.state.isVisible) {
      removeFollowCursorListener();
    }
  }
  /**
   * Creates the tippy instance for a delegate when it's been triggered
   */


  function createDelegateChildTippy(event) {
    if (event) {
      var targetEl = closest(event.target, instance.props.target);

      if (targetEl && !targetEl._tippy) {
        createTippy(targetEl, _extends({}, instance.props, {
          content: invokeWithArgsOrReturn(collectionProps.content, [targetEl]),
          appendTo: collectionProps.appendTo,
          target: '',
          showOnInit: true
        }));
      }
    }
  }
  /**
   * Event listener invoked upon trigger
   */


  function onTrigger(event) {
    if (!instance.state.isEnabled || isEventListenerStopped(event)) {
      return;
    }

    if (!instance.state.isVisible) {
      lastTriggerEventType = event.type;

      if (event instanceof MouseEvent) {
        lastMouseMoveEvent = event; // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved

        mouseMoveListeners.forEach(function (listener) {
          return listener(event);
        });
      }
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && instance.props.hideOnClick !== false && instance.state.isVisible) {
      scheduleHide();
    } else {
      scheduleShow(event);
    }
  }
  /**
   * Event listener used for interactive tooltips to detect when they should
   * hide
   */


  function onMouseMove(event) {
    var isCursorOverPopper = closest(event.target, POPPER_SELECTOR) === popper;
    var isCursorOverReference = closestCallback(event.target, function (el) {
      return el === reference;
    });

    if (isCursorOverPopper || isCursorOverReference) {
      return;
    }

    if (isCursorOutsideInteractiveBorder(getBasicPlacement(popper), popper.getBoundingClientRect(), event, instance.props)) {
      cleanupInteractiveMouseListeners();
      scheduleHide();
    }
  }
  /**
   * Event listener invoked upon mouseleave
   */


  function onMouseLeave(event) {
    if (isEventListenerStopped(event)) {
      return;
    }

    if (instance.props.interactive) {
      document.body.addEventListener('mouseleave', scheduleHide);
      document.addEventListener('mousemove', debouncedOnMouseMove);
      mouseMoveListeners.push(debouncedOnMouseMove);
      return;
    }

    scheduleHide();
  }
  /**
   * Event listener invoked upon blur
   */


  function onBlur(event) {
    if (event.target !== getEventListenersTarget()) {
      return;
    }

    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide();
  }
  /**
   * Event listener invoked when a child target is triggered
   */


  function onDelegateShow(event) {
    if (closest(event.target, instance.props.target)) {
      scheduleShow(event);
    }
  }
  /**
   * Event listener invoked when a child target should hide
   */


  function onDelegateHide(event) {
    if (closest(event.target, instance.props.target)) {
      scheduleHide();
    }
  }
  /**
   * Determines if an event listener should stop further execution due to the
   * `touchHold` option
   */


  function isEventListenerStopped(event) {
    var supportsTouch = 'ontouchstart' in window;
    var isTouchEvent = includes(event.type, 'touch');
    var touchHold = instance.props.touchHold;
    return supportsTouch && isUsingTouch && touchHold && !isTouchEvent || isUsingTouch && !touchHold && isTouchEvent;
  }
  /**
   * Runs the mount callback
   */


  function runMountCallback() {
    if (!hasMountCallbackRun && currentMountCallback) {
      hasMountCallbackRun = true;
      reflow(popper);
      currentMountCallback();
    }
  }
  /**
   * Creates the popper instance for the instance
   */


  function createPopperInstance() {
    var popperOptions = instance.props.popperOptions;
    var _instance$popperChild = instance.popperChildren,
        tooltip = _instance$popperChild.tooltip,
        arrow = _instance$popperChild.arrow;
    var preventOverflowModifier = getModifier(popperOptions, 'preventOverflow');

    function applyMutations(data) {
      if (instance.props.flip && !instance.props.flipOnUpdate) {
        if (data.flipped) {
          instance.popperInstance.options.placement = data.placement;
        }

        setFlipModifierEnabled(instance.popperInstance.modifiers, false);
      } // Apply all of the popper's attributes to the tootip node as well.
      // Allows users to avoid using the .tippy-popper selector for themes.


      tooltip.setAttribute(PLACEMENT_ATTRIBUTE, data.placement);

      if (data.attributes[OUT_OF_BOUNDARIES_ATTRIBUTE] !== false) {
        tooltip.setAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE, '');
      } else {
        tooltip.removeAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE);
      } // Prevents a transition when changing placements (while tippy is visible)
      // for scroll/resize updates


      if (previousPlacement && previousPlacement !== data.placement && wasVisibleDuringPreviousUpdate) {
        tooltip.style.transition = 'none';
        requestAnimationFrame(function () {
          tooltip.style.transition = '';
        });
      }

      previousPlacement = data.placement;
      wasVisibleDuringPreviousUpdate = instance.state.isVisible;
      var basicPlacement = getBasicPlacement(popper);
      var styles = tooltip.style; // Account for the `distance` offset

      styles.top = styles.bottom = styles.left = styles.right = '';
      styles[basicPlacement] = getOffsetDistanceInPx(instance.props.distance);
      var padding = preventOverflowModifier && preventOverflowModifier.padding !== undefined ? preventOverflowModifier.padding : PADDING;
      var isPaddingNumber = typeof padding === 'number';

      var computedPadding = _extends({
        top: isPaddingNumber ? padding : padding.top,
        bottom: isPaddingNumber ? padding : padding.bottom,
        left: isPaddingNumber ? padding : padding.left,
        right: isPaddingNumber ? padding : padding.right
      }, !isPaddingNumber && padding);

      computedPadding[basicPlacement] = isPaddingNumber ? padding + instance.props.distance : (padding[basicPlacement] || 0) + instance.props.distance;
      instance.popperInstance.modifiers.filter(function (m) {
        return m.name === 'preventOverflow';
      })[0].padding = computedPadding;
      currentComputedPadding = computedPadding;
    }

    var config = _extends({
      eventsEnabled: false,
      placement: instance.props.placement
    }, popperOptions, {
      modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
        preventOverflow: _extends({
          boundariesElement: instance.props.boundary,
          padding: PADDING
        }, preventOverflowModifier),
        arrow: _extends({
          element: arrow,
          enabled: !!arrow
        }, getModifier(popperOptions, 'arrow')),
        flip: _extends({
          enabled: instance.props.flip,
          // The tooltip is offset by 10px from the popper in CSS,
          // we need to account for its distance
          padding: instance.props.distance + PADDING,
          behavior: instance.props.flipBehavior
        }, getModifier(popperOptions, 'flip')),
        offset: _extends({
          offset: instance.props.offset
        }, getModifier(popperOptions, 'offset'))
      }),
      onCreate: function onCreate(data) {
        applyMutations(data);
        runMountCallback();

        if (popperOptions && popperOptions.onCreate) {
          popperOptions.onCreate(data);
        }
      },
      onUpdate: function onUpdate(data) {
        applyMutations(data);
        runMountCallback();

        if (popperOptions && popperOptions.onUpdate) {
          popperOptions.onUpdate(data);
        }
      }
    });

    instance.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](reference, popper, config);
  }
  /**
   * Mounts the tooltip to the DOM
   */


  function mount() {
    hasMountCallbackRun = false;
    var isInLooseFollowCursorMode = getIsInLooseFollowCursorMode();

    if (instance.popperInstance) {
      setFlipModifierEnabled(instance.popperInstance.modifiers, instance.props.flip);

      if (!isInLooseFollowCursorMode) {
        instance.popperInstance.reference = reference;
        instance.popperInstance.enableEventListeners();
      }

      instance.popperInstance.scheduleUpdate();
    } else {
      createPopperInstance();

      if (!isInLooseFollowCursorMode) {
        instance.popperInstance.enableEventListeners();
      }
    }

    var appendTo = instance.props.appendTo;
    var parentNode = appendTo === 'parent' ? reference.parentNode : invokeWithArgsOrReturn(appendTo, [reference]);

    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
      instance.props.onMount(instance);
      instance.state.isMounted = true;
    }
  }
  /**
   * Setup before show() is invoked (delays, etc.)
   */


  function scheduleShow(event, shouldAvoidCallingOnTrigger) {
    clearDelayTimeouts();

    if (instance.state.isVisible) {
      return;
    } // Is a delegate, create an instance for the child target


    if (instance.props.target) {
      return createDelegateChildTippy(event);
    }

    isScheduledToShow = true;

    if (event && !shouldAvoidCallingOnTrigger) {
      instance.props.onTrigger(instance, event);
    }

    if (instance.props.wait) {
      return instance.props.wait(instance, event);
    } // If the tooltip has a delay, we need to be listening to the mousemove as
    // soon as the trigger event is fired, so that it's in the correct position
    // upon mount.
    // Edge case: if the tooltip is still mounted, but then scheduleShow() is
    // called, it causes a jump.


    if (getIsInLooseFollowCursorMode() && !instance.state.isMounted) {
      if (!instance.popperInstance) {
        createPopperInstance();
      }

      document.addEventListener('mousemove', positionVirtualReferenceNearCursor);
    }

    addDocumentClickListener();
    var delay = getValue(instance.props.delay, 0, defaultProps.delay);

    if (delay) {
      showTimeoutId = setTimeout(function () {
        show();
      }, delay);
    } else {
      show();
    }
  }
  /**
   * Setup before hide() is invoked (delays, etc.)
   */


  function scheduleHide() {
    clearDelayTimeouts();

    if (!instance.state.isVisible) {
      removeFollowCursorListener();
      removeDocumentClickListener();
      return;
    }

    isScheduledToShow = false;
    var delay = getValue(instance.props.delay, 1, defaultProps.delay);

    if (delay) {
      hideTimeoutId = setTimeout(function () {
        if (instance.state.isVisible) {
          hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrameId = requestAnimationFrame(function () {
        hide();
      });
    }
  }
  /**
   * Listener to handle clicks on the document to determine if the
   * instance should hide
   */


  function onDocumentClick(event) {
    // Clicked on interactive popper
    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getEventListenersTarget().contains(event.target)) {
      if (isUsingTouch) {
        return;
      }

      if (instance.state.isVisible && includes(instance.props.trigger, 'click')) {
        return;
      }
    }

    if (instance.props.hideOnClick === true) {
      clearDelayTimeouts();
      hide();
    }
  }
  /* ======================= 🔑 Public methods 🔑 ======================= */

  /**
   * Enables the instance to allow it to show or hide
   */


  function enable() {
    instance.state.isEnabled = true;
  }
  /**
   * Disables the instance to disallow it to show or hide
   */


  function disable() {
    instance.state.isEnabled = false;
  }
  /**
   * Clears pending timeouts related to the `delay` prop if any
   */


  function clearDelayTimeouts() {
    clearTimeout(showTimeoutId);
    clearTimeout(hideTimeoutId);
    cancelAnimationFrame(scheduleHideAnimationFrameId);
  }
  /**
   * Sets new props for the instance and redraws the tooltip
   */


  function set(options) {
    // Backwards-compatible after TypeScript change
    options = options || {};
    validateOptions(options, defaultProps);
    removeTriggersFromReference();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, _extends({}, instance.props, {}, options, {
      ignoreAttributes: true
    }));
    nextProps.ignoreAttributes = hasOwnProperty(options, 'ignoreAttributes') ? options.ignoreAttributes || false : prevProps.ignoreAttributes;
    instance.props = nextProps;
    addTriggersToReference();
    cleanupInteractiveMouseListeners();
    debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    updatePopperElement(popper, prevProps, nextProps);
    instance.popperChildren = getChildren(popper);

    if (instance.popperInstance) {
      if (POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
        return hasOwnProperty(options, prop) && options[prop] !== prevProps[prop];
      })) {
        instance.popperInstance.destroy();
        createPopperInstance();

        if (instance.state.isVisible) {
          instance.popperInstance.enableEventListeners();
        }

        if (instance.props.followCursor && lastMouseMoveEvent) {
          positionVirtualReferenceNearCursor(lastMouseMoveEvent);
        }
      } else {
        instance.popperInstance.update();
      }
    }
  }
  /**
   * Shortcut for .set({ content: newContent })
   */


  function setContent(content) {
    set({
      content: content
    });
  }
  /**
   * Shows the tooltip
   */


  function show() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue(instance.props.duration, 0, defaultProps.duration[1]);

    if (instance.state.isDestroyed || !instance.state.isEnabled || isUsingTouch && !instance.props.touch) {
      return;
    } // Standardize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getEventListenersTarget().hasAttribute('disabled')) {
      return;
    }

    if (instance.props.onShow(instance) === false) {
      return;
    }

    addDocumentClickListener();
    popper.style.visibility = 'visible';
    instance.state.isVisible = true;

    if (instance.props.interactive) {
      getEventListenersTarget().classList.add(ACTIVE_CLASS);
    } // Prevent a transition if the popper is at the opposite placement


    var transitionableElements = getTransitionableElements();
    setTransitionDuration(transitionableElements.concat(popper), 0);

    currentMountCallback = function currentMountCallback() {
      if (!instance.state.isVisible) {
        return;
      }

      var isInLooseFollowCursorMode = getIsInLooseFollowCursorMode();

      if (isInLooseFollowCursorMode && lastMouseMoveEvent) {
        positionVirtualReferenceNearCursor(lastMouseMoveEvent);
      } else if (!isInLooseFollowCursorMode) {
        // Double update will apply correct mutations
        instance.popperInstance.update();
      }

      if (instance.popperChildren.backdrop) {
        instance.popperChildren.content.style.transitionDelay = Math.round(duration / 12) + 'ms';
      }

      if (instance.props.sticky) {
        makeSticky();
      }

      setTransitionDuration([popper], instance.props.updateDuration);
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, 'visible');
      onTransitionedIn(duration, function () {
        if (instance.props.aria) {
          getEventListenersTarget().setAttribute("aria-".concat(instance.props.aria), popper.id);
        }

        instance.props.onShown(instance);
        instance.state.isShown = true;
      });
    };

    mount();
  }
  /**
   * Hides the tooltip
   */


  function hide() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue(instance.props.duration, 1, defaultProps.duration[1]);

    if (instance.state.isDestroyed || !instance.state.isEnabled && !isBeingDestroyed) {
      return;
    }

    if (instance.props.onHide(instance) === false && !isBeingDestroyed) {
      return;
    }

    removeDocumentClickListener();
    popper.style.visibility = 'hidden';
    instance.state.isVisible = false;
    instance.state.isShown = false;
    wasVisibleDuringPreviousUpdate = false;

    if (instance.props.interactive) {
      getEventListenersTarget().classList.remove(ACTIVE_CLASS);
    }

    var transitionableElements = getTransitionableElements();
    setTransitionDuration(transitionableElements, duration);
    setVisibilityState(transitionableElements, 'hidden');
    onTransitionedOut(duration, function () {
      if (!isScheduledToShow) {
        removeFollowCursorListener();
      }

      if (instance.props.aria) {
        getEventListenersTarget().removeAttribute("aria-".concat(instance.props.aria));
      }

      instance.popperInstance.disableEventListeners();
      instance.popperInstance.options.placement = instance.props.placement;
      popper.parentNode.removeChild(popper);
      instance.props.onHidden(instance);
      instance.state.isMounted = false;
    });
  }
  /**
   * Destroys the tooltip
   */


  function destroy(destroyTargetInstances) {
    if (instance.state.isDestroyed) {
      return;
    }

    isBeingDestroyed = true; // If the popper is currently mounted to the DOM, we want to ensure it gets
    // hidden and unmounted instantly upon destruction

    if (instance.state.isMounted) {
      hide(0);
    }

    removeTriggersFromReference();
    delete reference._tippy;
    var target = instance.props.target;

    if (target && destroyTargetInstances && isRealElement(reference)) {
      arrayFrom(reference.querySelectorAll(target)).forEach(function (child) {
        if (child._tippy) {
          child._tippy.destroy();
        }
      });
    }

    if (instance.popperInstance) {
      instance.popperInstance.destroy();
    }

    isBeingDestroyed = false;
    instance.state.isDestroyed = true;
  }
}

/**
 * Groups an array of instances by taking control of their props during
 * certain lifecycles.
 */
function group(instances) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? instances[0].props.delay : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration;

  var isAnyTippyOpen = false;
  instances.forEach(function (instance) {
    if (instance._originalProps) {
      instance.set(instance._originalProps);
    } else {
      instance._originalProps = _extends({}, instance.props);
    }
  });

  function setIsAnyTippyOpen(value) {
    isAnyTippyOpen = value;
    updateInstances();
  }

  function onShow(instance) {
    instance._originalProps.onShow(instance);

    instances.forEach(function (instance) {
      instance.set({
        duration: duration
      });

      if (instance.state.isVisible) {
        instance.hide();
      }
    });
    setIsAnyTippyOpen(true);
  }

  function onHide(instance) {
    instance._originalProps.onHide(instance);

    setIsAnyTippyOpen(false);
  }

  function onShown(instance) {
    instance._originalProps.onShown(instance);

    instance.set({
      duration: instance._originalProps.duration
    });
  }

  function updateInstances() {
    instances.forEach(function (instance) {
      instance.set({
        onShow: onShow,
        onShown: onShown,
        onHide: onHide,
        delay: isAnyTippyOpen ? [0, Array.isArray(delay) ? delay[1] : delay] : delay,
        duration: isAnyTippyOpen ? duration : instance._originalProps.duration
      });
    });
  }

  updateInstances();
}

var globalEventListenersBound = false;
/**
 * Exported module
 */

function tippy(targets, options) {
  validateOptions(options || {}, defaultProps);

  if (!globalEventListenersBound) {
    bindGlobalEventListeners();
    globalEventListenersBound = true;
  }

  var props = _extends({}, defaultProps, {}, options); // If they are specifying a virtual positioning reference, we need to polyfill
  // some native DOM props


  if (isBareVirtualElement(targets)) {
    polyfillElementPrototypeProperties(targets);
  }

  var instances = getArrayOfElements(targets).reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, props);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isSingular(targets) ? instances[0] : instances;
}
/**
 * Static props
 */


tippy.version = version;
tippy.defaults = defaultProps;
/**
 * Static methods
 */

tippy.setDefaults = function (partialDefaults) {
  Object.keys(partialDefaults).forEach(function (key) {
    // @ts-ignore
    defaultProps[key] = partialDefaults[key];
  });
};

tippy.hideAll = hideAll;
tippy.group = group;
/**
 * Auto-init tooltips for elements with a `data-tippy="..."` attribute
 */

function autoInit() {
  arrayFrom(document.querySelectorAll('[data-tippy]')).forEach(function (el) {
    var content = el.getAttribute('data-tippy');

    if (content) {
      tippy(el, {
        content: content
      });
    }
  });
}

if (isBrowser) {
  setTimeout(autoInit);
}

/**
 * Injects a string of CSS styles to a style node in <head>
 */

function injectCSS(css) {
  if (isBrowser) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = css;
    style.setAttribute('data-tippy-stylesheet', '');
    var head = document.head;
    var firstStyleOrLinkTag = head.querySelector('style,link');

    if (firstStyleOrLinkTag) {
      head.insertBefore(style, firstStyleOrLinkTag);
    } else {
      head.appendChild(style);
    }
  }
}

injectCSS(css);

/* harmony default export */ __webpack_exports__["default"] = (tippy);
//# sourceMappingURL=index.all.js.map


/***/ }),

/***/ "../../../AppData/Roaming/npm/node_modules/litscript/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3RvbW1pL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2xpdHNjcmlwdC9ub2RlX21vZHVsZXMvbGl0cy10ZW1wbGF0ZS9jb21wb25lbnRzL2NvbW1vbi9hY2NvcmRpb24udHMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3RvbW1pL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2xpdHNjcmlwdC9ub2RlX21vZHVsZXMvbGl0cy10ZW1wbGF0ZS9jb21wb25lbnRzL2NvbW1vbi9teXF1ZXJ5LnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy9jb21tb24vcG9wdXBzLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy9jb250ZW50YXJlYS9jb250ZW50YXJlYS5sZXNzPzkyMzIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3RvbW1pL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2xpdHNjcmlwdC9ub2RlX21vZHVsZXMvbGl0cy10ZW1wbGF0ZS9jb21wb25lbnRzL2NvbnRlbnRhcmVhL2NvbnRlbnRhcmVhLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmxlc3M/YmY0NCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvdG9tbWkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvbGl0c2NyaXB0L25vZGVfbW9kdWxlcy9saXRzLXRlbXBsYXRlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvdG9tbWkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvbGl0c2NyaXB0L25vZGVfbW9kdWxlcy9saXRzLXRlbXBsYXRlL2NvbXBvbmVudHMvaGFtYnVyZ2VyL2hhbWJ1cmdlci5sZXNzPzZjYTUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3RvbW1pL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2xpdHNjcmlwdC9ub2RlX21vZHVsZXMvbGl0cy10ZW1wbGF0ZS9jb21wb25lbnRzL2hhbWJ1cmdlci9oYW1idXJnZXIudHMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3RvbW1pL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2xpdHNjcmlwdC9ub2RlX21vZHVsZXMvbGl0cy10ZW1wbGF0ZS9jb21wb25lbnRzL2xhbmRpbmcubGVzcz83OWY0Iiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy9sYW5kaW5nLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lmxlc3M/MzZlMiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvdG9tbWkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvbGl0c2NyaXB0L25vZGVfbW9kdWxlcy9saXRzLXRlbXBsYXRlL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC50cyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvdG9tbWkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvbGl0c2NyaXB0L25vZGVfbW9kdWxlcy9saXRzLXRlbXBsYXRlL2NvbXBvbmVudHMvbWFpbi5sZXNzIiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy9tYWluLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmxlc3M/YjU4NyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvdG9tbWkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvbGl0c2NyaXB0L25vZGVfbW9kdWxlcy9saXRzLXRlbXBsYXRlL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci50cyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvdG9tbWkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvbGl0c2NyaXB0L25vZGVfbW9kdWxlcy9saXRzLXRlbXBsYXRlL2NvbXBvbmVudHMvcGFnZW1lbnUvcGFnZW1lbnUubGVzcz84NTRjIiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy9wYWdlbWVudS9wYWdlbWVudS50cyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvdG9tbWkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvbGl0c2NyaXB0L25vZGVfbW9kdWxlcy9saXRzLXRlbXBsYXRlL2NvbXBvbmVudHMvc3ludGF4L2NvZGluZy1ob3Jyb3IubGVzcz8xNjM3Iiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy90b2NtZW51L3RvY21lbnUubGVzcz8xMWViIiwid2VicGFjazovLy9DOi9Vc2Vycy90b21taS9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy90b2NtZW51L3RvY21lbnUudHMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3RvbW1pL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2xpdHNjcmlwdC9ub2RlX21vZHVsZXMvbGl0cy10ZW1wbGF0ZS9jb21wb25lbnRzL3Rvb2x0aXBzL3Rvb2x0aXBzLmxlc3M/ODkzZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvdG9tbWkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvbGl0c2NyaXB0L25vZGVfbW9kdWxlcy9saXRzLXRlbXBsYXRlL2NvbXBvbmVudHMvdG9vbHRpcHMvdG9vbHRpcHMudHMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3RvbW1pL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2xpdHNjcmlwdC9ub2RlX21vZHVsZXMvcG9wcGVyLmpzL2Rpc3QvZXNtL3BvcHBlci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvdG9tbWkvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvbGl0c2NyaXB0L25vZGVfbW9kdWxlcy90aXBweS5qcy9lc20vaW5kZXguYWxsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVB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Q0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNy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QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLEdBQUcsNkJBQTZCOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEOztBQUU3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7O0FBR3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0Qiw4Q0FBOEM7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGtDQUFrQyxpREFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxvQkFBb0I7QUFDNUU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQ0FBMkM7QUFDM0M7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixrQkFBa0IsV0FBVztBQUN0RDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLG9FQUFLLEVBQUM7QUFDckI7Ozs7Ozs7Ozs7OztBQ3I1REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi8uLi8uLi9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9saXRzY3JpcHQvbm9kZV9tb2R1bGVzL2xpdHMtdGVtcGxhdGUvY29tcG9uZW50cy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgJCBmcm9tIFwiLi9teXF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFjY29yZGlvbnMgKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgYWNjb3JkaW9ucyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgkLmFjY29yZGlvbik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2NvcmRpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGFjYyA9IGFjY29yZGlvbnNbaV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHBhbmVsID0gYWNjLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBsZXQgaW5pdEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSAgaW5pdEhlaWdodDtcclxuICAgICAgICBhY2Mub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWNjLmNsYXNzTGlzdC50b2dnbGUoJC5jb2xsYXBzZWQpO1xyXG4gICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPT09IFwiMHB4XCIgPyBcclxuICAgICAgICAgICAgICAgIGluaXRIZWlnaHQgOiAgXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGV4cGFuZGVkID0gXCJleHBhbmRlZFwiXHJcbmV4cG9ydCBjb25zdCBjb2xsYXBzZWQgPSBcImNvbGxhcHNlZFwiXHJcbmV4cG9ydCBjb25zdCBhY2NvcmRpb24gPSBcImFjY29yZGlvblwiXHJcbmV4cG9ydCBjb25zdCBoYW1idXJnZXIgPSBcImhhbWJ1cmdlclwiXHJcbmV4cG9ydCBjb25zdCBuYXZiYXIgPSBcIm5hdmJhclwiXHJcbmV4cG9ydCBjb25zdCBzY3JvbGxpbmdhcmVhID0gXCJzY3JvbGxpbmdhcmVhXCJcclxuZXhwb3J0IGNvbnN0IGNsb3NlcG9wdXBzID0gXCJjbG9zZXBvcHVwc1wiXHJcbmV4cG9ydCBjb25zdCBpbmZvYm94ID0gXCJpbmZvLWJveFwiXHJcblxyXG5leHBvcnQgdHlwZSBFbGVtID0gSFRNTEVsZW1lbnQgfCBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RFbGVtZW50V2l0aFN0eWxlKGNsYXNzTmFtZTogc3RyaW5nLCBcclxuICAgIHBhcmVudDogRWxlbWVudCB8IERvY3VtZW50ID0gZG9jdW1lbnQpOiBIVE1MRWxlbWVudCB7XHJcbiAgICBsZXQgcmVzID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXSBhcyBIVE1MRWxlbWVudFxyXG4gICAgaWYgKCFyZXMpXHJcbiAgICAgICAgdGhyb3cgUmVmZXJlbmNlRXJyb3IoYENhbm5vdCBmaW5kIGVsZW1lbnQgd2l0aCBjbGFzcyBcIiR7Y2xhc3NOYW1lfVwiLmApXHJcbiAgICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c1dpdGhTdHlsZShjbGFzc05hbWU6IHN0cmluZywgXHJcbiAgICBwYXJlbnQ6IEVsZW1lbnQgfCBEb2N1bWVudCA9IGRvY3VtZW50KTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQ29sbGVjdGlvbihlbGVtOiBFbGVtKTpcclxuICAgIGVsZW0gaXMgSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gKDxIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+PmVsZW0pLmxlbmd0aCAhPT0gdW5kZWZpbmVkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlYWNoKGVsZW06IEVsZW0sIGFjdGlvbjogKGU6IEVsZW1lbnQpID0+IHZvaWQpIHtcclxuICAgIGlmIChpc0hUTUxDb2xsZWN0aW9uKGVsZW0pKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbS5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgYWN0aW9uKGVsZW1baV0pXHJcbiAgICBlbHNlXHJcbiAgICAgICAgYWN0aW9uKGVsZW0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGU8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4odGFnOiBLLCBcclxuICAgIGNoaWxkcmVuOiBFbGVtIHwgc3RyaW5nID0gbnVsbCk6IEhUTUxFbGVtZW50IHtcclxuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXHJcbiAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICBpZiAodHlwZW9mIChjaGlsZHJlbikgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGRyZW4pKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZWFjaChjaGlsZHJlbiwgYyA9PiBlbGVtLmFwcGVuZENoaWxkKGMpKVxyXG4gICAgICAgIH1cclxuICAgIHJldHVybiBlbGVtXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRyKGVsZW06IEVsZW0sIGF0dHJOYW1lOiBzdHJpbmcsIGF0dHJWYWx1ZTogc3RyaW5nKTogRWxlbSB7XHJcbiAgICBlYWNoKGVsZW0sIGUgPT4gZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSkpXHJcbiAgICByZXR1cm4gZWxlbVxyXG59IiwiaW1wb3J0ICogYXMgJCBmcm9tIFwiLi9teXF1ZXJ5XCJcclxuXHJcbmxldCBjbG9zZXBvcHVwcyA9ICQuZmlyc3RFbGVtZW50V2l0aFN0eWxlKCQuY2xvc2Vwb3B1cHMpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdXBPbkNsaWNrKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0b2dnbGU6ICgpID0+IHZvaWQsXHJcbiAgICBoaWRlOiAoKSA9PiB2b2lkKSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGUpXHJcbiAgICBjbG9zZXBvcHVwcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoaWRlKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKVxyXG4gICAgICAgICAgICBoaWRlKClcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzc09uQ2xpY2soZWxlbWVudDogSFRNTEVsZW1lbnQsIGNsczogc3RyaW5nLFxyXG4gICAgdGFyZ2V0OiAkLkVsZW0gPSBlbGVtZW50KSB7XHJcbiAgICBwb3B1cE9uQ2xpY2soZWxlbWVudCxcclxuICAgICAgICAoKSA9PiAkLmVhY2godGFyZ2V0LCBlID0+IGUuY2xhc3NMaXN0LnRvZ2dsZShjbHMpKSxcclxuICAgICAgICAoKSA9PiAkLmVhY2godGFyZ2V0LCBlID0+IGUuY2xhc3NMaXN0LnJlbW92ZShjbHMpKSlcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vY29udGVudGFyZWEubGVzc1wiXHJcbmltcG9ydCBcInN5bnRheGhpZ2hsaWdodFwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9mb290ZXIubGVzc1wiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9oYW1idXJnZXIubGVzc1wiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9teXF1ZXJ5XCI7XHJcbmltcG9ydCB7IHRvZ2dsZUNsYXNzT25DbGljayB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9wb3B1cHNcIjtcclxuXHJcbiQuZWFjaCgkLmVsZW1lbnRzV2l0aFN0eWxlKFwiaGFtYnVyZ2VyXCIpLCBoYW1iID0+XHJcbiAgICB0b2dnbGVDbGFzc09uQ2xpY2soaGFtYiBhcyBIVE1MRWxlbWVudCwgXCJvcGVuXCIpKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL2xhbmRpbmcubGVzc1wiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCIuL2NvbW1vbi9teXF1ZXJ5XCI7XHJcblxyXG5yZXZlYWxJbmZvQm94ZXMoKTtcclxuY3JlYXRlSW5mb01lbnUoKTtcclxuXHJcbmZ1bmN0aW9uIHJldmVhbEluZm9Cb3hlcygpIHtcclxuICAgIGxldCBhcnJvd3MgPSAkLmVsZW1lbnRzV2l0aFN0eWxlKFwic2Nyb2xsLWluZGljYXRvclwiKTtcclxuICAgIGlmICghYXJyb3dzIHx8IGFycm93cy5sZW5ndGggIT0gMilcclxuICAgICAgICByZXR1cm5cclxuICAgIGxldCBhcnJvd1VwID0gYXJyb3dzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbGV0IGFycm93RG93biA9IGFycm93c1sxXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNldEJveE9wYWNpdGllcyk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzZXRCb3hPcGFjaXRpZXMpO1xyXG4gICAgc2V0Qm94T3BhY2l0aWVzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Qm94T3BhY2l0aWVzKCkge1xyXG4gICAgICAgIGFycm93VXAuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIGFycm93RG93bi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaWIgb2YgJC5lbGVtZW50c1dpdGhTdHlsZSgnaW5mby1ib3gnKSkge1xyXG4gICAgICAgICAgICBsZXQgaGliID0gaWIgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGxldCBzY3J0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIGxldCBzY3Jib3QgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBtYXJnaW5GYWN0b3IgPSA2O1xyXG4gICAgICAgICAgICBsZXQgdG9wID0gaGliLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgbGV0IGJvdCA9IHRvcCArIGhpYi5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBtYXJnaW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyBtYXJnaW5GYWN0b3I7XHJcbiAgICAgICAgICAgIGlmIChzY3J0b3AgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaGliLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGFycm93RG93bi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9wIDwgc2NyYm90IC0gbWFyZ2luICYmIGJvdCA+IHNjcnRvcCArIG1hcmdpbilcclxuICAgICAgICAgICAgICAgIGhpYi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGliLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChib3QgPiBzY3J0b3AgJiYgYm90IDwgc2NydG9wICsgbWFyZ2luKVxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93VXAuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvcCA8IHNjcmJvdCAmJiB0b3AgPiBzY3J0b3AgLSBtYXJnaW4pXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dEb3duLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5mb01lbnUoKSB7XHJcbiAgICBsZXQgaW5mb0FyZWEgPSAkLmVsZW1lbnRzV2l0aFN0eWxlKFwiaW5mby1hcmVhXCIpWzBdO1xyXG4gICAgaWYgKCFpbmZvQXJlYSlcclxuICAgICAgICByZXR1cm5cclxuICAgIGxldCBoZWFkaW5nT2Zmc2V0czogeyBoZWFkaW5nOiBIVE1MSGVhZEVsZW1lbnQsIGxpOiBIVE1MRWxlbWVudCB9W10gPSBbXVxyXG4gICAgbGV0IGhlYWRpbmdzID0gaW5mb0FyZWEucXVlcnlTZWxlY3RvckFsbChcImgyXCIpO1xyXG4gICAgbGV0IG1lbnUgPSAkLmZpcnN0RWxlbWVudFdpdGhTdHlsZShcImluZm8tbWVudVwiKTtcclxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKHVsKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBoZWFkaW5nID0gaGVhZGluZ3NbaV07XHJcbiAgICAgICAgbGV0IGxpbmsgPSAkLmF0dHIoJC5jcmVhdGUoXCJhXCIsIGhlYWRpbmcudGV4dENvbnRlbnQpLCBcImhyZWZcIixcclxuICAgICAgICAgICAgXCIjXCIgKyBoZWFkaW5nLmlkKTtcclxuICAgICAgICBsZXQgbGkgPSAkLmNyZWF0ZShcImxpXCIsIGxpbmspO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxyXG4gICAgICAgIGhlYWRpbmdPZmZzZXRzW2ldID0geyBoZWFkaW5nLCBsaSB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXHJcbiAgICAgICAgbGV0IHByZXY6IHsgaGVhZGluZzogSFRNTEhlYWRFbGVtZW50LCBsaTogSFRNTEVsZW1lbnQgfSA9IG51bGxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRpbmdPZmZzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBobyA9IGhlYWRpbmdPZmZzZXRzW2ldXHJcbiAgICAgICAgICAgIGhvLmxpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRcIilcclxuICAgICAgICAgICAgaWYgKCFmb3VuZCAmJiBoby5oZWFkaW5nLm9mZnNldFRvcCA+IChwb3MgKyBoby5oZWFkaW5nLm9mZnNldEhlaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIChwcmV2IHx8IGhvKS5saS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpXHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2ID0gaG9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFmb3VuZCAmJiBwcmV2KVxyXG4gICAgICAgICAgICBwcmV2LmxpLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIilcclxuICAgIH0pXHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL2xheW91dC5sZXNzXCJcclxuaW1wb3J0ICogYXMgJCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vbXlxdWVyeVwiXHJcbmltcG9ydCB7IHRvZ2dsZUNsYXNzT25DbGljayB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9wb3B1cHNcIlxyXG5cclxuLy8gSG9vayBoYW1idXJnZXIgaWNvbiB0byBjbG9zaW5nIHNpZGUgcGFuZS5cclxubGV0IGxheW91dCA9ICQuZWxlbWVudHNXaXRoU3R5bGUoXCJsYXlvdXRcIilbMF1cclxuaWYgKGxheW91dCkge1xyXG4gICAgbGV0IGhhbWIgPSAkLmZpcnN0RWxlbWVudFdpdGhTdHlsZShcImhhbWJ1cmdlclwiLCBsYXlvdXQpXHJcbiAgICB0b2dnbGVDbGFzc09uQ2xpY2soaGFtYiwgXCJleHBhbmRlZFwiLCBcclxuICAgICAgICBsYXlvdXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbGxhcHNpYmxlXCIpKVxyXG4gICAgXHJcbiAgICAvLyBTZXQgdGhlIHRvcCBvZmZzZXQgb2Ygc3RpY2t5IHBhbmUuXHJcbiAgICBsZXQgc3RpY2t5cGFuZSA9ICQuZmlyc3RFbGVtZW50V2l0aFN0eWxlKFwic3RpY2t5cGFuZVwiKVxyXG4gICAgbGV0IHN0aWNreVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGlja3lwYW5lKVxyXG4gICAgbGV0IGluaXRpYWxTdGlja3lUb3AgPSBwYXJzZUludChzdGlja3lTdHlsZS50b3AsIDEwKVxyXG4gICAgc2V0U3RpY2t5VG9wKClcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNldFN0aWNreVRvcCkgICAgXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFN0aWNreVRvcCgpIHtcclxuICAgICAgICBsZXQgb2ZmcyA9IE1hdGgubWluKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBzdGlja3lwYW5lLm9mZnNldEhlaWdodCkgLyAyLCBcclxuICAgICAgICAgICAgaW5pdGlhbFN0aWNreVRvcClcclxuICAgICAgICBzdGlja3lwYW5lLnN0eWxlLnRvcCA9IGAke29mZnN9cHhgXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vbWFpbi5sZXNzXCI7XHJcbmltcG9ydCBcIi4vaGFtYnVyZ2VyL2hhbWJ1cmdlclwiO1xyXG5pbXBvcnQgXCIuL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IFwiLi9sYXlvdXQvbGF5b3V0XCI7XHJcbmltcG9ydCBcIi4vdG9jbWVudS90b2NtZW51XCI7XHJcbmltcG9ydCBcIi4vY29udGVudGFyZWEvY29udGVudGFyZWFcIjtcclxuaW1wb3J0IFwiLi9wYWdlbWVudS9wYWdlbWVudVwiO1xyXG5pbXBvcnQgXCIuL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IFwiLi90b29sdGlwcy90b29sdGlwc1wiO1xyXG5pbXBvcnQgXCIuL2xhbmRpbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL25hdmJhci5sZXNzXCI7XHJcbmltcG9ydCAqIGFzICQgZnJvbSBcIi4uL2NvbW1vbi9teXF1ZXJ5XCI7XHJcbmltcG9ydCB7IHRvZ2dsZUNsYXNzT25DbGljayB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9wb3B1cHNcIjtcclxuXHJcbi8vIFNldCB1cCByZXNwb25zaXZlIG1lbnUuXHJcbmxldCBuYXZiYXIgPSAkLmZpcnN0RWxlbWVudFdpdGhTdHlsZSgkLm5hdmJhcik7XHJcbmxldCBoYW1iID0gJC5maXJzdEVsZW1lbnRXaXRoU3R5bGUoJC5oYW1idXJnZXIsIG5hdmJhcik7XHJcbmxldCBoaWRkZW4gPSBmYWxzZTtcclxudG9nZ2xlQ2xhc3NPbkNsaWNrKGhhbWIsICQuZXhwYW5kZWQsIG5hdmJhcik7XHJcblxyXG4vLyBIaWRlIG5hdmJhciB3aGVuIHNjcm9sbGluZyBkb3duLlxyXG5sZXQgZG9ja2VkVG9wID0gbmF2YmFyLm9mZnNldFRvcCA9PT0gMDtcclxubGV0IHByZXZTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgIHZhciBjdXJyU2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgc2V0TmF2YmFyT2Zmc2V0KGRvY2tlZFRvcCwgXHJcbiAgICAgICAgcHJldlNjcm9sbCA+IGN1cnJTY3JvbGwgPyAwIDogLShuYXZiYXIub2Zmc2V0SGVpZ2h0IC0gKGRvY2tlZFRvcCA/IDEgOiAyKSkpOyBcclxuICAgIHByZXZTY3JvbGwgPSBjdXJyU2Nyb2xsO1xyXG59KTtcclxubmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgIGlmIChoaWRkZW4pXHJcbiAgICAgICAgc2V0TmF2YmFyT2Zmc2V0KGRvY2tlZFRvcCwgMCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2V0TmF2YmFyT2Zmc2V0KGRvY2tlZFRvcDogYm9vbGVhbiwgb2ZmczogbnVtYmVyKSB7XHJcbiAgICBoaWRkZW4gPSBvZmZzICE9PSAwO1xyXG4gICAgaWYgKCFuYXZiYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCQuZXhwYW5kZWQpKSB7XHJcbiAgICAgICAgaWYgKGRvY2tlZFRvcClcclxuICAgICAgICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9IGAke29mZnN9cHhgO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgbmF2YmFyLnN0eWxlLmJvdHRvbSA9IGAke29mZnN9cHhgO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3BhZ2VtZW51Lmxlc3NcIlxyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9teXF1ZXJ5XCJcclxuXHJcbmxldCBwYWdlbWVudSA9ICQuZWxlbWVudHNXaXRoU3R5bGUoXCJwYWdlbWVudVwiKVswXVxyXG5pZiAocGFnZW1lbnUpIHtcclxuICAgIGxldCBoZWFkaW5nT2Zmc2V0czogeyBoZWFkaW5nOiBIVE1MRWxlbWVudCwgbGluazogSFRNTEVsZW1lbnQgfVtdID0gW11cclxuICAgIGxldCBjb250ZW50YXJlYSA9ICQuZmlyc3RFbGVtZW50V2l0aFN0eWxlKFwiY29udGVudGFyZWFcIilcclxuICAgIGxldCBwYWdldHJlZSA9ICQuZmlyc3RFbGVtZW50V2l0aFN0eWxlKFwicGFnZXRyZWVcIiwgcGFnZW1lbnUpXHJcbiAgICBsZXQgaGVhZGluZ3MgPSBjb250ZW50YXJlYS5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBoMywgaDQsIGg1XCIpXHJcbiAgICBidWlsZFRyZWUocGFnZXRyZWUsIG51bGwsIDEsIGhlYWRpbmdzLCAwKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxyXG4gICAgICAgIGxldCBwcmV2OiB7IGhlYWRpbmc6IEhUTUxFbGVtZW50LCBsaW5rOiBIVE1MRWxlbWVudCB9ID0gbnVsbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZGluZ09mZnNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGhvID0gaGVhZGluZ09mZnNldHNbaV1cclxuICAgICAgICAgICAgaG8ubGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0XCIpXHJcbiAgICAgICAgICAgIGlmICghZm91bmQgJiYgaG8uaGVhZGluZy5vZmZzZXRUb3AgPiAocG9zICsgaG8uaGVhZGluZy5vZmZzZXRIZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAocHJldiB8fCBobykubGluay5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpXHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2ID0gaG9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFmb3VuZCAmJiBwcmV2KVxyXG4gICAgICAgICAgICBwcmV2LmxpbmsuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZFRyZWUocGFyZW50TGlzdDogSFRNTEVsZW1lbnQsIHByZXZJdGVtOiBIVE1MRWxlbWVudCwgXHJcbiAgICAgICAgbGV2ZWw6IG51bWJlciwgaGVhZGluZ3M6IE5vZGVMaXN0T2Y8RWxlbWVudD4sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB3aGlsZSAoaW5kZXggPCBoZWFkaW5ncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IGhlYWRpbmcgPSBoZWFkaW5nc1tpbmRleF0gYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgbGV0IGN1cnJMZXZlbCA9IHBhcnNlSW50KGhlYWRpbmcudGFnTmFtZS5zdWJzdHIoMSwgMSkpXHJcbiAgICAgICAgICAgIGlmIChjdXJyTGV2ZWwgPCBsZXZlbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleFxyXG4gICAgICAgICAgICBpZiAoY3VyckxldmVsID4gbGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkl0ZW0uYXBwZW5kQ2hpbGQoc3ViTGlzdClcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGJ1aWxkVHJlZShzdWJMaXN0LCBudWxsLCBjdXJyTGV2ZWwsIGhlYWRpbmdzLCBpbmRleClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGJ1aWxkVHJlZShwYXJlbnRMaXN0LCBudWxsLCBjdXJyTGV2ZWwsIGhlYWRpbmdzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluayA9ICQuYXR0cigkLmNyZWF0ZShcImFcIiwgaGVhZGluZy50ZXh0Q29udGVudCksIFwiaHJlZlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcIiNcIiArIGhlYWRpbmcuaWQpIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSAkLmNyZWF0ZShcImxpXCIsIGxpbmspXHJcbiAgICAgICAgICAgICAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKVxyXG4gICAgICAgICAgICAgICAgaGVhZGluZ09mZnNldHNbaW5kZXhdID0geyBoZWFkaW5nLCBsaW5rIH1cclxuICAgICAgICAgICAgICAgIGluZGV4ID0gYnVpbGRUcmVlKHBhcmVudExpc3QsIGxpc3RJdGVtLCBsZXZlbCwgaGVhZGluZ3MsIFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICsgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5kZXhcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vdG9jbWVudS5sZXNzXCJcclxuaW1wb3J0ICogYXMgJCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vbXlxdWVyeVwiXHJcbmltcG9ydCB7IGluaXRBY2NvcmRpb25zIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2FjY29yZGlvblwiXHJcblxyXG5sZXQgdG9jbWVudSA9ICQuZWxlbWVudHNXaXRoU3R5bGUoXCJ0b2NtZW51XCIpWzBdIGFzIEhUTUxFbGVtZW50XHJcbmlmICh0b2NtZW51KSB7XHJcbiAgICBpZiAoIWRvY3VtZW50LmZvbnRzIHx8IGRvY3VtZW50LmZvbnRzLnN0YXR1cyA9PSBcImxvYWRlZFwiKVxyXG4gICAgICAgIGluaXRBY2NvcmRpb25zKHRvY21lbnUpXHJcbiAgICBlbHNlXHJcbiAgICAgICAgZG9jdW1lbnQuZm9udHMub25sb2FkaW5nZG9uZSA9ICgpID0+IGluaXRBY2NvcmRpb25zKHRvY21lbnUpXHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnXHJcbmltcG9ydCAnLi90b29sdGlwcy5sZXNzJ1xyXG5cclxuLy8gbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgdGlwcHkoZWxlbSwge1xyXG4gICAgICAgIGNvbnRlbnQ6IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiKSxcclxuICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxyXG4gICAgICAgIG1heFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOCxcclxuICAgICAgICBhcnJvdzogdHJ1ZSxcclxuICAgICAgICB0aGVtZTogJ2N1c3RvbScsXHJcbiAgICAgICAgYm91bmRhcnk6IFwid2luZG93XCIsXHJcbiAgICAgICAgZGVsYXk6IDUwMCxcclxuICAgICAgICBhbGxvd0hUTUw6IGZhbHNlXHJcbiAgICB9KVxyXG59KSIsIi8qKiFcbiAqIEBmaWxlT3ZlcnZpZXcgS2lja2FzcyBsaWJyYXJ5IHRvIGNyZWF0ZSBhbmQgcGxhY2UgcG9wcGVycyBuZWFyIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50cy5cbiAqIEB2ZXJzaW9uIDEuMTYuMVxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiBGZWRlcmljbyBaaXZvbG8gYW5kIGNvbnRyaWJ1dG9yc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKi9cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuXG52YXIgdGltZW91dER1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbG9uZ2VyVGltZW91dEJyb3dzZXJzID0gWydFZGdlJywgJ1RyaWRlbnQnLCAnRmlyZWZveCddO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxvbmdlclRpbWVvdXRCcm93c2Vycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGxvbmdlclRpbWVvdXRCcm93c2Vyc1tpXSkgPj0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufSgpO1xuXG5mdW5jdGlvbiBtaWNyb3Rhc2tEZWJvdW5jZShmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5Qcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgZm4oKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFza0RlYm91bmNlKGZuKSB7XG4gIHZhciBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNjaGVkdWxlZCkge1xuICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0sIHRpbWVvdXREdXJhdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG52YXIgc3VwcG9ydHNNaWNyb1Rhc2tzID0gaXNCcm93c2VyICYmIHdpbmRvdy5Qcm9taXNlO1xuXG4vKipcbiogQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgYSBtZXRob2QsIHRoYXQncyBhc3luY2hyb25vdXNseSBkZWZlcnJlZFxuKiBidXQgY2FsbGVkIGluIHRoZSBtaW5pbXVtIHRpbWUgcG9zc2libGUuXG4qXG4qIEBtZXRob2RcbiogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuKiBAYXJndW1lbnQge0Z1bmN0aW9ufSBmblxuKiBAcmV0dXJucyB7RnVuY3Rpb259XG4qL1xudmFyIGRlYm91bmNlID0gc3VwcG9ydHNNaWNyb1Rhc2tzID8gbWljcm90YXNrRGVib3VuY2UgOiB0YXNrRGVib3VuY2U7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QW55fSBmdW5jdGlvblRvQ2hlY2sgLSB2YXJpYWJsZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0bzogaXMgYSBmdW5jdGlvbj9cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgdmFyIGdldFR5cGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICB2YXIgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICB2YXIgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcGFyZW50Tm9kZSBvciB0aGUgaG9zdCBvZiB0aGUgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50Lmhvc3Q7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gc2Nyb2xsIHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICBjYXNlICdIVE1MJzpcbiAgICBjYXNlICdCT0RZJzpcbiAgICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICBjYXNlICcjZG9jdW1lbnQnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keTtcbiAgfVxuXG4gIC8vIEZpcmVmb3ggd2FudCB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuXG4gIHZhciBfZ2V0U3R5bGVDb21wdXRlZFByb3AgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dZO1xuXG4gIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZWZlcmVuY2Ugbm9kZSBvZiB0aGUgcmVmZXJlbmNlIG9iamVjdCwgb3IgdGhlIHJlZmVyZW5jZSBvYmplY3QgaXRzZWxmLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpIHtcbiAgcmV0dXJuIHJlZmVyZW5jZSAmJiByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA/IHJlZmVyZW5jZS5yZWZlcmVuY2VOb2RlIDogcmVmZXJlbmNlO1xufVxuXG52YXIgaXNJRTExID0gaXNCcm93c2VyICYmICEhKHdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUpO1xudmFyIGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGlzSUVcbiAqL1xuZnVuY3Rpb24gaXNJRSh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxMSkge1xuICAgIHJldHVybiBpc0lFMTE7XG4gIH1cbiAgaWYgKHZlcnNpb24gPT09IDEwKSB7XG4gICAgcmV0dXJuIGlzSUUxMDtcbiAgfVxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBvZmZzZXQgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgbm9PZmZzZXRQYXJlbnQgPSBpc0lFKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBudWxsO1xuICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudCAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgIG9mZnNldFBhcmVudCA9IChlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFBhcmVudDtcbiAgfVxuXG4gIHZhciBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XG5cbiAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXG4gIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cbiAgaWYgKFsnVEgnLCAnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XG59XG5cbmZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnQ7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIHJvb3Qgbm9kZSAoZG9jdW1lbnQsIHNoYWRvd0RPTSByb290KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcm9vdCBub2RlXG4gKi9cbmZ1bmN0aW9uIGdldFJvb3Qobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldFJvb3Qobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBvZmZzZXQgcGFyZW50IGNvbW1vbiB0byB0aGUgdHdvIHByb3ZpZGVkIG5vZGVzXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQxXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gY29tbW9uIG9mZnNldCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudDEgfHwgIWVsZW1lbnQxLm5vZGVUeXBlIHx8ICFlbGVtZW50MiB8fCAhZWxlbWVudDIubm9kZVR5cGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gIHZhciBvcmRlciA9IGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICB2YXIgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIHZhciBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XG5cbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcbiAgdmFyIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG5cbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuXG4gIGlmIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiYgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIHx8IHN0YXJ0LmNvbnRhaW5zKGVuZCkpIHtcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBvbmUgb2YgdGhlIG5vZGVzIGlzIGluc2lkZSBzaGFkb3dET00sIGZpbmQgd2hpY2ggb25lXG4gIHZhciBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDFyb290Lmhvc3QsIGVsZW1lbnQyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHNpZGUgYHRvcGAgb3IgYGxlZnRgXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbW91bnQgb2Ygc2Nyb2xsZWQgcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50KSB7XG4gIHZhciBzaWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAndG9wJztcblxuICB2YXIgdXBwZXJTaWRlID0gc2lkZSA9PT0gJ3RvcCcgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgdmFyIGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBzY3JvbGxpbmdFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcbn1cblxuLypcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHBhcmFtIHtCb29sZWFufSBzdWJ0cmFjdCAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHN1YnRyYWN0IHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0LCBlbGVtZW50KSB7XG4gIHZhciBzdWJ0cmFjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIHZhciBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZXR1cm4gcmVjdDtcbn1cblxuLypcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXG4gKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXJzIC0gVGhlIGJvcmRlcnMgc2l6ZSBvZiB0aGUgZ2l2ZW4gYXhpc1xuICovXG5cbmZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICB2YXIgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcbiAgdmFyIHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZXNbJ2JvcmRlcicgKyBzaWRlQSArICdXaWR0aCddKSArIHBhcnNlRmxvYXQoc3R5bGVzWydib3JkZXInICsgc2lkZUIgKyAnV2lkdGgnXSk7XG59XG5cbmZ1bmN0aW9uIGdldFNpemUoYXhpcywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSkge1xuICByZXR1cm4gTWF0aC5tYXgoYm9keVsnb2Zmc2V0JyArIGF4aXNdLCBib2R5WydzY3JvbGwnICsgYXhpc10sIGh0bWxbJ2NsaWVudCcgKyBheGlzXSwgaHRtbFsnb2Zmc2V0JyArIGF4aXNdLCBodG1sWydzY3JvbGwnICsgYXhpc10sIGlzSUUoMTApID8gcGFyc2VJbnQoaHRtbFsnb2Zmc2V0JyArIGF4aXNdKSArIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbJ21hcmdpbicgKyAoYXhpcyA9PT0gJ0hlaWdodCcgPyAnVG9wJyA6ICdMZWZ0JyldKSArIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbJ21hcmdpbicgKyAoYXhpcyA9PT0gJ0hlaWdodCcgPyAnQm90dG9tJyA6ICdSaWdodCcpXSkgOiAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZXMoZG9jdW1lbnQpIHtcbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBpc0lFKDEwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpO1xuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBnZXRTaXplKCdIZWlnaHQnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgICB3aWR0aDogZ2V0U2l6ZSgnV2lkdGgnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKVxuICB9O1xufVxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbi8qKlxuICogR2l2ZW4gZWxlbWVudCBvZmZzZXRzLCBnZW5lcmF0ZSBhbiBvdXRwdXQgc2ltaWxhciB0byBnZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvZmZzZXRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDbGllbnRSZWN0IGxpa2Ugb3V0cHV0XG4gKi9cbmZ1bmN0aW9uIGdldENsaWVudFJlY3Qob2Zmc2V0cykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG9mZnNldHMsIHtcbiAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcbiAgICBib3R0b206IG9mZnNldHMudG9wICsgb2Zmc2V0cy5oZWlnaHRcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gY2xpZW50IHJlY3RcbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSB7fTtcblxuICAvLyBJRTEwIDEwIEZJWDogUGxlYXNlLCBkb24ndCBhc2ssIHRoZSBlbGVtZW50IGlzbid0XG4gIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXG4gIHRyeSB7XG4gICAgaWYgKGlzSUUoMTApKSB7XG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICAgICAgdmFyIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgIHJlY3QudG9wICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0O1xuICAgICAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgfTtcblxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gIHZhciBzaXplcyA9IGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJyA/IGdldFdpbmRvd1NpemVzKGVsZW1lbnQub3duZXJEb2N1bWVudCkgOiB7fTtcbiAgdmFyIHdpZHRoID0gc2l6ZXMud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCByZXN1bHQud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBzaXplcy5oZWlnaHQgfHwgZWxlbWVudC5jbGllbnRIZWlnaHQgfHwgcmVzdWx0LmhlaWdodDtcblxuICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldFdpZHRoIC0gd2lkdGg7XG4gIHZhciB2ZXJ0U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQ7XG5cbiAgLy8gaWYgYW4gaHlwb3RoZXRpY2FsIHNjcm9sbGJhciBpcyBkZXRlY3RlZCwgd2UgbXVzdCBiZSBzdXJlIGl0J3Mgbm90IGEgYGJvcmRlcmBcbiAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGlmIChob3JpelNjcm9sbGJhciB8fCB2ZXJ0U2Nyb2xsYmFyKSB7XG4gICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XG4gICAgdmVydFNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd5Jyk7XG5cbiAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XG4gICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICB9XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGNoaWxkcmVuLCBwYXJlbnQpIHtcbiAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIHZhciBpc0lFMTAgPSBpc0lFKDEwKTtcbiAgdmFyIGlzSFRNTCA9IHBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnO1xuICB2YXIgY2hpbGRyZW5SZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGNoaWxkcmVuKTtcbiAgdmFyIHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChjaGlsZHJlbik7XG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQpO1xuICB2YXIgYm9yZGVyVG9wV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJUb3BXaWR0aCk7XG4gIHZhciBib3JkZXJMZWZ0V2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpO1xuXG4gIC8vIEluIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgZml4ZWQsIHdlIG11c3QgaWdub3JlIG5lZ2F0aXZlIHNjcm9sbCBpbiBvZmZzZXQgY2FsY1xuICBpZiAoZml4ZWRQb3NpdGlvbiAmJiBpc0hUTUwpIHtcbiAgICBwYXJlbnRSZWN0LnRvcCA9IE1hdGgubWF4KHBhcmVudFJlY3QudG9wLCAwKTtcbiAgICBwYXJlbnRSZWN0LmxlZnQgPSBNYXRoLm1heChwYXJlbnRSZWN0LmxlZnQsIDApO1xuICB9XG4gIHZhciBvZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XG4gICAgdG9wOiBjaGlsZHJlblJlY3QudG9wIC0gcGFyZW50UmVjdC50b3AgLSBib3JkZXJUb3BXaWR0aCxcbiAgICBsZWZ0OiBjaGlsZHJlblJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCAtIGJvcmRlckxlZnRXaWR0aCxcbiAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxuICAgIGhlaWdodDogY2hpbGRyZW5SZWN0LmhlaWdodFxuICB9KTtcbiAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSAwO1xuICBvZmZzZXRzLm1hcmdpbkxlZnQgPSAwO1xuXG4gIC8vIFN1YnRyYWN0IG1hcmdpbnMgb2YgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgaXQncyBiZWluZyB1c2VkIGFzIHBhcmVudFxuICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcbiAgLy8gZGlmZmVyZW50bHkgd2hlbiBtYXJnaW5zIGFyZSBhcHBsaWVkIHRvIGl0LiBUaGUgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW5cbiAgLy8gdGhlIGJveCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBpbiB0aGUgb3RoZXIgY2FzZXMgbm90LlxuICBpZiAoIWlzSUUxMCAmJiBpc0hUTUwpIHtcbiAgICB2YXIgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wKTtcbiAgICB2YXIgbWFyZ2luTGVmdCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQpO1xuXG4gICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5ib3R0b20gLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG4gICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuXG4gICAgLy8gQXR0YWNoIG1hcmdpblRvcCBhbmQgbWFyZ2luTGVmdCBiZWNhdXNlIGluIHNvbWUgY2lyY3Vtc3RhbmNlcyB3ZSBtYXkgbmVlZCB0aGVtXG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcbiAgfVxuXG4gIGlmIChpc0lFMTAgJiYgIWZpeGVkUG9zaXRpb24gPyBwYXJlbnQuY29udGFpbnMoc2Nyb2xsUGFyZW50KSA6IHBhcmVudCA9PT0gc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgb2Zmc2V0cyA9IGluY2x1ZGVTY3JvbGwob2Zmc2V0cywgcGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUoZWxlbWVudCkge1xuICB2YXIgZXhjbHVkZVNjcm9sbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgdmFyIGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgcmVsYXRpdmVPZmZzZXQgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoZWxlbWVudCwgaHRtbCk7XG4gIHZhciB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICB2YXIgc2Nyb2xsVG9wID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCkgOiAwO1xuICB2YXIgc2Nyb2xsTGVmdCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwsICdsZWZ0JykgOiAwO1xuXG4gIHZhciBvZmZzZXQgPSB7XG4gICAgdG9wOiBzY3JvbGxUb3AgLSByZWxhdGl2ZU9mZnNldC50b3AgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3AsXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIHJlbGF0aXZlT2Zmc2V0LmxlZnQgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gY3VzdG9tQ29udGFpbmVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvIFwiaXNGaXhlZD9cIlxuICovXG5mdW5jdGlvbiBpc0ZpeGVkKGVsZW1lbnQpIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICBpZiAoIXBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzRml4ZWQocGFyZW50Tm9kZSk7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IHBhcmVudCBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIGEgdHJhbnNmb3JtZWQgcHJvcGVydHkgZGVmaW5lZFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gZmlyc3QgdHJhbnNmb3JtZWQgcGFyZW50IG9yIGRvY3VtZW50RWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LnBhcmVudEVsZW1lbnQgfHwgaXNJRSgpKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuICB2YXIgZWwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIHdoaWxlIChlbCAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWwsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnKSB7XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbi8qKlxuICogQ29tcHV0ZWQgdGhlIGJvdW5kYXJpZXMgbGltaXRzIGFuZCByZXR1cm4gdGhlbVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWRkaW5nXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudCAtIEVsZW1lbnQgdXNlZCB0byBkZWZpbmUgdGhlIGJvdW5kYXJpZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZml4ZWRQb3NpdGlvbiAtIElzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IENvb3JkaW5hdGVzIG9mIHRoZSBib3VuZGFyaWVzXG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcblxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuXG4gIHZhciBib3VuZGFyaWVzID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpKTtcblxuICAvLyBIYW5kbGUgdmlld3BvcnQgY2FzZVxuICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd2aWV3cG9ydCcpIHtcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGJhc2VkIG9uIERPTSBlbGVtZW50IHVzZWQgYXMgYm91bmRhcmllc1xuICAgIHZhciBib3VuZGFyaWVzTm9kZSA9IHZvaWQgMDtcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKHJlZmVyZW5jZSkpO1xuICAgICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGJvdW5kYXJpZXNFbGVtZW50O1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGJvdW5kYXJpZXNOb2RlLCBvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuXG4gICAgLy8gSW4gY2FzZSBvZiBIVE1MLCB3ZSBuZWVkIGEgZGlmZmVyZW50IGNvbXB1dGF0aW9uXG4gICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnSFRNTCcgJiYgIWlzRml4ZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgdmFyIF9nZXRXaW5kb3dTaXplcyA9IGdldFdpbmRvd1NpemVzKHBvcHBlci5vd25lckRvY3VtZW50KSxcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0V2luZG93U2l6ZXMuaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoID0gX2dldFdpbmRvd1NpemVzLndpZHRoO1xuXG4gICAgICBib3VuZGFyaWVzLnRvcCArPSBvZmZzZXRzLnRvcCAtIG9mZnNldHMubWFyZ2luVG9wO1xuICAgICAgYm91bmRhcmllcy5ib3R0b20gPSBoZWlnaHQgKyBvZmZzZXRzLnRvcDtcbiAgICAgIGJvdW5kYXJpZXMubGVmdCArPSBvZmZzZXRzLmxlZnQgLSBvZmZzZXRzLm1hcmdpbkxlZnQ7XG4gICAgICBib3VuZGFyaWVzLnJpZ2h0ID0gd2lkdGggKyBvZmZzZXRzLmxlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciBhbGwgdGhlIG90aGVyIERPTSBlbGVtZW50cywgdGhpcyBvbmUgaXMgZ29vZFxuICAgICAgYm91bmRhcmllcyA9IG9mZnNldHM7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHBhZGRpbmdzXG4gIHBhZGRpbmcgPSBwYWRkaW5nIHx8IDA7XG4gIHZhciBpc1BhZGRpbmdOdW1iZXIgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ251bWJlcic7XG4gIGJvdW5kYXJpZXMubGVmdCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5sZWZ0IHx8IDA7XG4gIGJvdW5kYXJpZXMudG9wICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnRvcCB8fCAwO1xuICBib3VuZGFyaWVzLnJpZ2h0IC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnJpZ2h0IHx8IDA7XG4gIGJvdW5kYXJpZXMuYm90dG9tIC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmJvdHRvbSB8fCAwO1xuXG4gIHJldHVybiBib3VuZGFyaWVzO1xufVxuXG5mdW5jdGlvbiBnZXRBcmVhKF9yZWYpIHtcbiAgdmFyIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gKiBhdmFpbGFibGUgc3BhY2UuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChwbGFjZW1lbnQsIHJlZlJlY3QsIHBvcHBlciwgcmVmZXJlbmNlLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICB2YXIgcGFkZGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogMDtcblxuICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XG5cbiAgdmFyIHJlY3RzID0ge1xuICAgIHRvcDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlZlJlY3QudG9wIC0gYm91bmRhcmllcy50b3BcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy5yaWdodCAtIHJlZlJlY3QucmlnaHQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH1cbiAgfTtcblxuICB2YXIgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCByZWN0c1trZXldLCB7XG4gICAgICBhcmVhOiBnZXRBcmVhKHJlY3RzW2tleV0pXG4gICAgfSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5hcmVhIC0gYS5hcmVhO1xuICB9KTtcblxuICB2YXIgZmlsdGVyZWRBcmVhcyA9IHNvcnRlZEFyZWFzLmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0O1xuICAgIHJldHVybiB3aWR0aCA+PSBwb3BwZXIuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHBvcHBlci5jbGllbnRIZWlnaHQ7XG4gIH0pO1xuXG4gIHZhciBjb21wdXRlZFBsYWNlbWVudCA9IGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5IDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICByZXR1cm4gY29tcHV0ZWRQbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xufVxuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtFbGVtZW50fSBmaXhlZFBvc2l0aW9uIC0gaXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZnVuY3Rpb24gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UpIHtcbiAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG5cbiAgdmFyIGNvbW1vbk9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpKTtcbiAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3AgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20gfHwgMCk7XG4gIHZhciB5ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0IHx8IDApO1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoICsgeSxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgeFxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50XG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICB2YXIgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSBDU1MgcG9zaXRpb24gdGhlIFBvcHBlciB3aWxsIGdldCBhcHBsaWVkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzIC0gdGhlIHJlZmVyZW5jZSBvZmZzZXRzICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZW1lbnQgLSBvbmUgb2YgdGhlIHZhbGlkIHBsYWNlbWVudCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZnVuY3Rpb24gZ2V0UG9wcGVyT2Zmc2V0cyhwb3BwZXIsIHJlZmVyZW5jZU9mZnNldHMsIHBsYWNlbWVudCkge1xuICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICAvLyBHZXQgcG9wcGVyIG5vZGUgc2l6ZXNcbiAgdmFyIHBvcHBlclJlY3QgPSBnZXRPdXRlclNpemVzKHBvcHBlcik7XG5cbiAgLy8gQWRkIHBvc2l0aW9uLCB3aWR0aCBhbmQgaGVpZ2h0IHRvIG91ciBvZmZzZXRzIG9iamVjdFxuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHtcbiAgICB3aWR0aDogcG9wcGVyUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHBvcHBlclJlY3QuaGVpZ2h0XG4gIH07XG5cbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSBwb3BwZXIgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICB2YXIgaXNIb3JpeiA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgdmFyIHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBtZWFzdXJlbWVudCA9IGlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIHZhciBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIHBvcHBlck9mZnNldHNbbWFpblNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1ttYWluU2lkZV0gKyByZWZlcmVuY2VPZmZzZXRzW21lYXN1cmVtZW50XSAvIDIgLSBwb3BwZXJSZWN0W21lYXN1cmVtZW50XSAvIDI7XG4gIGlmIChwbGFjZW1lbnQgPT09IHNlY29uZGFyeVNpZGUpIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHBvcHBlclJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdO1xuICB9IGVsc2Uge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcbiAgfVxuXG4gIHJldHVybiBwb3BwZXJPZmZzZXRzO1xufVxuXG4vKipcbiAqIE1pbWljcyB0aGUgYGZpbmRgIG1ldGhvZCBvZiBBcnJheVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5mdW5jdGlvbiBmaW5kKGFyciwgY2hlY2spIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kIGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICByZXR1cm4gYXJyLmZpbmQoY2hlY2spO1xuICB9XG5cbiAgLy8gdXNlIGBmaWx0ZXJgIHRvIG9idGFpbiB0aGUgc2FtZSBiZWhhdmlvciBvZiBgZmluZGBcbiAgcmV0dXJuIGFyci5maWx0ZXIoY2hlY2spWzBdO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIG1hdGNoaW5nIG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBwcm9wLCB2YWx1ZSkge1xuICAvLyB1c2UgbmF0aXZlIGZpbmRJbmRleCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLmZpbmRJbmRleChmdW5jdGlvbiAoY3VyKSB7XG4gICAgICByZXR1cm4gY3VyW3Byb3BdID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVzZSBgZmluZGAgKyBgaW5kZXhPZmAgaWYgYGZpbmRJbmRleGAgaXNuJ3Qgc3VwcG9ydGVkXG4gIHZhciBtYXRjaCA9IGZpbmQoYXJyLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9ialtwcm9wXSA9PT0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gYXJyLmluZGV4T2YobWF0Y2gpO1xufVxuXG4vKipcbiAqIExvb3AgdHJvdWdoIHRoZSBsaXN0IG9mIG1vZGlmaWVycyBhbmQgcnVuIHRoZW0gaW4gb3JkZXIsXG4gKiBlYWNoIG9mIHRoZW0gd2lsbCB0aGVuIGVkaXQgdGhlIGRhdGEgb2JqZWN0LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRzIC0gT3B0aW9uYWwgbW9kaWZpZXIgbmFtZSB1c2VkIGFzIHN0b3BwZXJcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fVxuICovXG5mdW5jdGlvbiBydW5Nb2RpZmllcnMobW9kaWZpZXJzLCBkYXRhLCBlbmRzKSB7XG4gIHZhciBtb2RpZmllcnNUb1J1biA9IGVuZHMgPT09IHVuZGVmaW5lZCA/IG1vZGlmaWVycyA6IG1vZGlmaWVycy5zbGljZSgwLCBmaW5kSW5kZXgobW9kaWZpZXJzLCAnbmFtZScsIGVuZHMpKTtcblxuICBtb2RpZmllcnNUb1J1bi5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmIChtb2RpZmllclsnZnVuY3Rpb24nXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgdmFyIGZuID0gbW9kaWZpZXJbJ2Z1bmN0aW9uJ10gfHwgbW9kaWZpZXIuZm47IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgaWYgKG1vZGlmaWVyLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvIG9mZnNldHMgdG8gbWFrZSB0aGVtIGEgY29tcGxldGUgY2xpZW50UmVjdCBvYmplY3RcbiAgICAgIC8vIHdlIGRvIHRoaXMgYmVmb3JlIGVhY2ggbW9kaWZpZXIgdG8gbWFrZSBzdXJlIHRoZSBwcmV2aW91cyBvbmUgZG9lc24ndFxuICAgICAgLy8gbWVzcyB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG4gICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucmVmZXJlbmNlKTtcblxuICAgICAgZGF0YSA9IGZuKGRhdGEsIG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIsIGNvbXB1dGluZyB0aGUgbmV3IG9mZnNldHMgYW5kIGFwcGx5aW5nXG4gKiB0aGUgbmV3IHN0eWxlLjxiciAvPlxuICogUHJlZmVyIGBzY2hlZHVsZVVwZGF0ZWAgb3ZlciBgdXBkYXRlYCBiZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgLy8gaWYgcG9wcGVyIGlzIGRlc3Ryb3llZCwgZG9uJ3QgcGVyZm9ybSBhbnkgZnVydGhlciB1cGRhdGVcbiAgaWYgKHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGF0YSA9IHtcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICBzdHlsZXM6IHt9LFxuICAgIGFycm93U3R5bGVzOiB7fSxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICBvZmZzZXRzOiB7fVxuICB9O1xuXG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0aGlzLnN0YXRlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgZGF0YS5wbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudCh0aGlzLm9wdGlvbnMucGxhY2VtZW50LCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmcpO1xuXG4gIC8vIHN0b3JlIHRoZSBjb21wdXRlZCBwbGFjZW1lbnQgaW5zaWRlIGBvcmlnaW5hbFBsYWNlbWVudGBcbiAgZGF0YS5vcmlnaW5hbFBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuXG4gIGRhdGEucG9zaXRpb25GaXhlZCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkO1xuXG4gIC8vIGNvbXB1dGUgdGhlIHBvcHBlciBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRQb3BwZXJPZmZzZXRzKHRoaXMucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XG5cbiAgLy8gcnVuIHRoZSBtb2RpZmllcnNcbiAgZGF0YSA9IHJ1bk1vZGlmaWVycyh0aGlzLm1vZGlmaWVycywgZGF0YSk7XG5cbiAgLy8gdGhlIGZpcnN0IGB1cGRhdGVgIHdpbGwgY2FsbCBgb25DcmVhdGVgIGNhbGxiYWNrXG4gIC8vIHRoZSBvdGhlciBvbmVzIHdpbGwgY2FsbCBgb25VcGRhdGVgIGNhbGxiYWNrXG4gIGlmICghdGhpcy5zdGF0ZS5pc0NyZWF0ZWQpIHtcbiAgICB0aGlzLnN0YXRlLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub3B0aW9ucy5vblVwZGF0ZShkYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQobW9kaWZpZXJzLCBtb2RpZmllck5hbWUpIHtcbiAgcmV0dXJuIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIGVuYWJsZWQgPSBfcmVmLmVuYWJsZWQ7XG4gICAgcmV0dXJuIGVuYWJsZWQgJiYgbmFtZSA9PT0gbW9kaWZpZXJOYW1lO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByZWZpeGVkIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHkgKGNhbWVsQ2FzZSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHByZWZpeGVkIHByb3BlcnR5IChjYW1lbENhc2Ugb3IgUGFzY2FsQ2FzZSwgZGVwZW5kaW5nIG9uIHRoZSB2ZW5kb3IgcHJlZml4KVxuICovXG5mdW5jdGlvbiBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUocHJvcGVydHkpIHtcbiAgdmFyIHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gIHZhciB1cHBlclByb3AgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgdmFyIHRvQ2hlY2sgPSBwcmVmaXggPyAnJyArIHByZWZpeCArIHVwcGVyUHJvcCA6IHByb3BlcnR5O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVt0b0NoZWNrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgcG9wcGVyLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuICB0aGlzLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAvLyB0b3VjaCBET00gb25seSBpZiBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgaXMgZW5hYmxlZFxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQodGhpcy5tb2RpZmllcnMsICdhcHBseVN0eWxlJykpIHtcbiAgICB0aGlzLnBvcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50Jyk7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS50b3AgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5ib3R0b20gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS53aWxsQ2hhbmdlID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGVbZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKV0gPSAnJztcbiAgfVxuXG4gIHRoaXMuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgLy8gcmVtb3ZlIHRoZSBwb3BwZXIgaWYgdXNlciBleHBsaWNpdGx5IGFza2VkIGZvciB0aGUgZGVsZXRpb24gb24gZGVzdHJveVxuICAvLyBkbyBub3QgdXNlIGByZW1vdmVgIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnQgaXRcbiAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICB0aGlzLnBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wcGVyKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHdpbmRvdyBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge1dpbmRvd31cbiAqL1xuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcbiAgdmFyIG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHdpbmRvdztcbn1cblxuZnVuY3Rpb24gYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbFBhcmVudCwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKSB7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQubm9kZU5hbWUgPT09ICdCT0RZJztcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IHNjcm9sbFBhcmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogc2Nyb2xsUGFyZW50O1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBpZiAoIWlzQm9keSkge1xuICAgIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhnZXRTY3JvbGxQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpLCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpO1xuICB9XG4gIHNjcm9sbFBhcmVudHMucHVzaCh0YXJnZXQpO1xufVxuXG4vKipcbiAqIFNldHVwIG5lZWRlZCBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIG9wdGlvbnMsIHN0YXRlLCB1cGRhdGVCb3VuZCkge1xuICAvLyBSZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gdXBkYXRlQm91bmQ7XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgLy8gU2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIHZhciBzY3JvbGxFbGVtZW50ID0gZ2V0U2Nyb2xsUGFyZW50KHJlZmVyZW5jZSk7XG4gIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxFbGVtZW50LCAnc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQsIHN0YXRlLnNjcm9sbFBhcmVudHMpO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gc2Nyb2xsRWxlbWVudDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIEl0IHdpbGwgYWRkIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCBzdGFydCByZWNhbGN1bGF0aW5nXG4gKiBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAoIXRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIHRoaXMuc3RhdGUgPSBzZXR1cEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMsIHRoaXMuc3RhdGUsIHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIHN0YXRlKSB7XG4gIC8vIFJlbW92ZSByZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcblxuICAvLyBSZW1vdmUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIHN0YXRlLnNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcbiAgfSk7XG5cbiAgLy8gUmVzZXQgc3RhdGVcbiAgc3RhdGUudXBkYXRlQm91bmQgPSBudWxsO1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0gW107XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBudWxsO1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIHJlbW92ZSByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgd29uJ3QgcmVjYWxjdWxhdGUgcG9wcGVyIHBvc2l0aW9uXG4gKiB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC4gSXQgYWxzbyB3b24ndCB0cmlnZ2VyIGBvblVwZGF0ZWAgY2FsbGJhY2sgYW55bW9yZSxcbiAqIHVubGVzcyB5b3UgY2FsbCBgdXBkYXRlYCBtZXRob2QgbWFudWFsbHkuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICAgIHRoaXMuc3RhdGUgPSByZW1vdmVFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5zdGF0ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUZWxscyBpZiBhIGdpdmVuIGlucHV0IGlzIGEgbnVtYmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0geyp9IGlucHV0IHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gbiAhPT0gJycgJiYgIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufVxuXG4vKipcbiAqIFNldCB0aGUgc3R5bGUgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgc3R5bGUgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgdmFyIHVuaXQgPSAnJztcbiAgICAvLyBhZGQgdW5pdCBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYyBhbmQgaXMgb25lIG9mIHRoZSBmb2xsb3dpbmdcbiAgICBpZiAoWyd3aWR0aCcsICdoZWlnaHQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uaW5kZXhPZihwcm9wKSAhPT0gLTEgJiYgaXNOdW1lcmljKHN0eWxlc1twcm9wXSkpIHtcbiAgICAgIHVuaXQgPSAncHgnO1xuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdICsgdW5pdDtcbiAgfSk7XG59XG5cbi8qKlxuICogU2V0IHRoZSBhdHRyaWJ1dGVzIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIGF0dHJpYnV0ZXMgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1twcm9wXTtcbiAgICBpZiAodmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyaWJ1dGVzW3Byb3BdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLnN0eWxlcyAtIExpc3Qgb2Ygc3R5bGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuYXR0cmlidXRlcyAtIExpc3Qgb2YgYXR0cmlidXRlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzYW1lIGRhdGEgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGUoZGF0YSkge1xuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5zdHlsZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyBpbiB0aGlzIHdheSB3ZSBjYW4gbWFrZSB0aGUgM3JkIHBhcnR5IG1vZGlmaWVycyBhZGQgY3VzdG9tIHN0eWxlcyB0byBpdFxuICAvLyBCZSBhd2FyZSwgbW9kaWZpZXJzIGNvdWxkIG92ZXJyaWRlIHRoZSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIHByZXZpb3VzXG4gIC8vIGxpbmVzIG9mIHRoaXMgbW9kaWZpZXIhXG4gIHNldFN0eWxlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5zdHlsZXMpO1xuXG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLmF0dHJpYnV0ZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyB0aGV5IHdpbGwgYmUgc2V0IGFzIEhUTUwgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICBzZXRBdHRyaWJ1dGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmF0dHJpYnV0ZXMpO1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBkZWZpbmVkIGFuZCBhcnJvd1N0eWxlcyBoYXMgc29tZSBwcm9wZXJ0aWVzXG4gIGlmIChkYXRhLmFycm93RWxlbWVudCAmJiBPYmplY3Qua2V5cyhkYXRhLmFycm93U3R5bGVzKS5sZW5ndGgpIHtcbiAgICBzZXRTdHlsZXMoZGF0YS5hcnJvd0VsZW1lbnQsIGRhdGEuYXJyb3dTdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogU2V0IHRoZSB4LXBsYWNlbWVudCBhdHRyaWJ1dGUgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZSBiZWNhdXNlIGl0IGNvdWxkIGJlIHVzZWRcbiAqIHRvIGFkZCBtYXJnaW5zIHRvIHRoZSBwb3BwZXIgbWFyZ2lucyBuZWVkcyB0byBiZSBjYWxjdWxhdGVkIHRvIGdldCB0aGVcbiAqIGNvcnJlY3QgcG9wcGVyIG9mZnNldHMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLm1vZGlmaWVyc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgZWxlbWVudCB1c2VkIGFzIHBvcHBlclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQb3BwZXIuanMgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlT25Mb2FkKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zLCBtb2RpZmllck9wdGlvbnMsIHN0YXRlKSB7XG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICB2YXIgcmVmZXJlbmNlT2Zmc2V0cyA9IGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICB2YXIgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQob3B0aW9ucy5wbGFjZW1lbnQsIHJlZmVyZW5jZU9mZnNldHMsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LCBvcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmcpO1xuXG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JywgcGxhY2VtZW50KTtcblxuICAvLyBBcHBseSBgcG9zaXRpb25gIHRvIHBvcHBlciBiZWZvcmUgYW55dGhpbmcgZWxzZSBiZWNhdXNlXG4gIC8vIHdpdGhvdXQgdGhlIHBvc2l0aW9uIGFwcGxpZWQgd2UgY2FuJ3QgZ3VhcmFudGVlIGNvcnJlY3QgY29tcHV0YXRpb25zXG4gIHNldFN0eWxlcyhwb3BwZXIsIHsgcG9zaXRpb246IG9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnIH0pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtCb29sZWFufSBzaG91bGRSb3VuZCAtIElmIHRoZSBvZmZzZXRzIHNob3VsZCBiZSByb3VuZGVkIGF0IGFsbFxuICogQHJldHVybnMge09iamVjdH0gVGhlIHBvcHBlcidzIHBvc2l0aW9uIG9mZnNldHMgcm91bmRlZFxuICpcbiAqIFRoZSB0YWxlIG9mIHBpeGVsLXBlcmZlY3QgcG9zaXRpb25pbmcuIEl0J3Mgc3RpbGwgbm90IDEwMCUgcGVyZmVjdCwgYnV0IGFzXG4gKiBnb29kIGFzIGl0IGNhbiBiZSB3aXRoaW4gcmVhc29uLlxuICogRGlzY3Vzc2lvbiBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9wdWxsLzcxNVxuICpcbiAqIExvdyBEUEkgc2NyZWVucyBjYXVzZSBhIHBvcHBlciB0byBiZSBibHVycnkgaWYgbm90IHVzaW5nIGZ1bGwgcGl4ZWxzIChTYWZhcmlcbiAqIGFzIHdlbGwgb24gSGlnaCBEUEkgc2NyZWVucykuXG4gKlxuICogRmlyZWZveCBwcmVmZXJzIG5vIHJvdW5kaW5nIGZvciBwb3NpdGlvbmluZyBhbmQgZG9lcyBub3QgaGF2ZSBibHVycmluZXNzIG9uXG4gKiBoaWdoIERQSSBzY3JlZW5zLlxuICpcbiAqIE9ubHkgaG9yaXpvbnRhbCBwbGFjZW1lbnQgYW5kIGxlZnQvcmlnaHQgdmFsdWVzIG5lZWQgdG8gYmUgY29uc2lkZXJlZC5cbiAqL1xuZnVuY3Rpb24gZ2V0Um91bmRlZE9mZnNldHMoZGF0YSwgc2hvdWxkUm91bmQpIHtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kLFxuICAgICAgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4gIHZhciBub1JvdW5kID0gZnVuY3Rpb24gbm9Sb3VuZCh2KSB7XG4gICAgcmV0dXJuIHY7XG4gIH07XG5cbiAgdmFyIHJlZmVyZW5jZVdpZHRoID0gcm91bmQocmVmZXJlbmNlLndpZHRoKTtcbiAgdmFyIHBvcHBlcldpZHRoID0gcm91bmQocG9wcGVyLndpZHRoKTtcblxuICB2YXIgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoZGF0YS5wbGFjZW1lbnQpICE9PSAtMTtcbiAgdmFyIGlzVmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuaW5kZXhPZignLScpICE9PSAtMTtcbiAgdmFyIHNhbWVXaWR0aFBhcml0eSA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gcG9wcGVyV2lkdGggJSAyO1xuICB2YXIgYm90aE9kZFdpZHRoID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSAxICYmIHBvcHBlcldpZHRoICUgMiA9PT0gMTtcblxuICB2YXIgaG9yaXpvbnRhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZCA/IG5vUm91bmQgOiBpc1ZlcnRpY2FsIHx8IGlzVmFyaWF0aW9uIHx8IHNhbWVXaWR0aFBhcml0eSA/IHJvdW5kIDogZmxvb3I7XG4gIHZhciB2ZXJ0aWNhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZCA/IG5vUm91bmQgOiByb3VuZDtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IGhvcml6b250YWxUb0ludGVnZXIoYm90aE9kZFdpZHRoICYmICFpc1ZhcmlhdGlvbiAmJiBzaG91bGRSb3VuZCA/IHBvcHBlci5sZWZ0IC0gMSA6IHBvcHBlci5sZWZ0KSxcbiAgICB0b3A6IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci50b3ApLFxuICAgIGJvdHRvbTogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLmJvdHRvbSksXG4gICAgcmlnaHQ6IGhvcml6b250YWxUb0ludGVnZXIocG9wcGVyLnJpZ2h0KVxuICB9O1xufVxuXG52YXIgaXNGaXJlZm94ID0gaXNCcm93c2VyICYmIC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZVN0eWxlKGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIHggPSBvcHRpb25zLngsXG4gICAgICB5ID0gb3B0aW9ucy55O1xuICB2YXIgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICAvLyBSZW1vdmUgdGhpcyBsZWdhY3kgc3VwcG9ydCBpbiBQb3BwZXIuanMgdjJcblxuICB2YXIgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlJztcbiAgfSkuZ3B1QWNjZWxlcmF0aW9uO1xuICBpZiAobGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6IGBncHVBY2NlbGVyYXRpb25gIG9wdGlvbiBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllciBhbmQgd2lsbCBub3QgYmUgc3VwcG9ydGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQb3BwZXIuanMhJyk7XG4gIH1cbiAgdmFyIGdwdUFjY2VsZXJhdGlvbiA9IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkID8gbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uIDogb3B0aW9ucy5ncHVBY2NlbGVyYXRpb247XG5cbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIHZhciBvZmZzZXRQYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG5cbiAgLy8gU3R5bGVzXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IHBvcHBlci5wb3NpdGlvblxuICB9O1xuXG4gIHZhciBvZmZzZXRzID0gZ2V0Um91bmRlZE9mZnNldHMoZGF0YSwgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPCAyIHx8ICFpc0ZpcmVmb3gpO1xuXG4gIHZhciBzaWRlQSA9IHggPT09ICdib3R0b20nID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgdmFyIHNpZGVCID0geSA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cbiAgLy8gaWYgZ3B1QWNjZWxlcmF0aW9uIGlzIHNldCB0byBgdHJ1ZWAgYW5kIHRyYW5zZm9ybSBpcyBzdXBwb3J0ZWQsXG4gIC8vICB3ZSB1c2UgYHRyYW5zbGF0ZTNkYCB0byBhcHBseSB0aGUgcG9zaXRpb24gdG8gdGhlIHBvcHBlciB3ZVxuICAvLyBhdXRvbWF0aWNhbGx5IHVzZSB0aGUgc3VwcG9ydGVkIHByZWZpeGVkIHZlcnNpb24gaWYgbmVlZGVkXG4gIHZhciBwcmVmaXhlZFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcblxuICAvLyBub3csIGxldCdzIG1ha2UgYSBzdGVwIGJhY2sgYW5kIGxvb2sgYXQgdGhpcyBjb2RlIGNsb3NlbHkgKHd0Zj8pXG4gIC8vIElmIHRoZSBjb250ZW50IG9mIHRoZSBwb3BwZXIgZ3Jvd3Mgb25jZSBpdCdzIGJlZW4gcG9zaXRpb25lZCwgaXRcbiAgLy8gbWF5IGhhcHBlbiB0aGF0IHRoZSBwb3BwZXIgZ2V0cyBtaXNwbGFjZWQgYmVjYXVzZSBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgLy8gb3ZlcmZsb3dpbmcgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRvIGF2b2lkIHRoaXMgcHJvYmxlbSwgd2UgcHJvdmlkZSB0d28gb3B0aW9ucyAoeCBhbmQgeSksIHdoaWNoIGFsbG93XG4gIC8vIHRoZSBjb25zdW1lciB0byBkZWZpbmUgdGhlIG9mZnNldCBvcmlnaW4uXG4gIC8vIElmIHdlIHBvc2l0aW9uIGEgcG9wcGVyIG9uIHRvcCBvZiBhIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSBjYW4gc2V0XG4gIC8vIGB4YCB0byBgdG9wYCB0byBtYWtlIHRoZSBwb3BwZXIgZ3JvdyB0b3dhcmRzIGl0cyB0b3AgaW5zdGVhZCBvZlxuICAvLyBpdHMgYm90dG9tLlxuICB2YXIgbGVmdCA9IHZvaWQgMCxcbiAgICAgIHRvcCA9IHZvaWQgMDtcbiAgaWYgKHNpZGVBID09PSAnYm90dG9tJykge1xuICAgIC8vIHdoZW4gb2Zmc2V0UGFyZW50IGlzIDxodG1sPiB0aGUgcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChleGNsdWRpbmcgdGhlIHNjcm9sbGJhcilcbiAgICAvLyBhbmQgbm90IHRoZSBib3R0b20gb2YgdGhlIGh0bWwgZWxlbWVudFxuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudFJlY3QuaGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRvcCA9IG9mZnNldHMudG9wO1xuICB9XG4gIGlmIChzaWRlQiA9PT0gJ3JpZ2h0Jykge1xuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudFJlY3Qud2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZWZ0ID0gb2Zmc2V0cy5sZWZ0O1xuICB9XG4gIGlmIChncHVBY2NlbGVyYXRpb24gJiYgcHJlZml4ZWRQcm9wZXJ0eSkge1xuICAgIHN0eWxlc1twcmVmaXhlZFByb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCwgMCknO1xuICAgIHN0eWxlc1tzaWRlQV0gPSAwO1xuICAgIHN0eWxlc1tzaWRlQl0gPSAwO1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3Rod2VyaXNlLCB3ZSB1c2UgdGhlIHN0YW5kYXJkIGB0b3BgLCBgbGVmdGAsIGBib3R0b21gIGFuZCBgcmlnaHRgIHByb3BlcnRpZXNcbiAgICB2YXIgaW52ZXJ0VG9wID0gc2lkZUEgPT09ICdib3R0b20nID8gLTEgOiAxO1xuICAgIHZhciBpbnZlcnRMZWZ0ID0gc2lkZUIgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gICAgc3R5bGVzW3NpZGVBXSA9IHRvcCAqIGludmVydFRvcDtcbiAgICBzdHlsZXNbc2lkZUJdID0gbGVmdCAqIGludmVydExlZnQ7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSBzaWRlQSArICcsICcgKyBzaWRlQjtcbiAgfVxuXG4gIC8vIEF0dHJpYnV0ZXNcbiAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgJ3gtcGxhY2VtZW50JzogZGF0YS5wbGFjZW1lbnRcbiAgfTtcblxuICAvLyBVcGRhdGUgYGRhdGFgIGF0dHJpYnV0ZXMsIHN0eWxlcyBhbmQgYXJyb3dTdHlsZXNcbiAgZGF0YS5hdHRyaWJ1dGVzID0gX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIGRhdGEuYXR0cmlidXRlcyk7XG4gIGRhdGEuc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgZGF0YS5zdHlsZXMpO1xuICBkYXRhLmFycm93U3R5bGVzID0gX2V4dGVuZHMoe30sIGRhdGEub2Zmc2V0cy5hcnJvdywgZGF0YS5hcnJvd1N0eWxlcyk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgZGVwZW5kcyBmcm9tIGFub3RoZXIgb25lLjxiciAvPlxuICogSXQgY2hlY2tzIGlmIHRoZSBuZWVkZWQgbW9kaWZpZXIgaXMgbGlzdGVkIGFuZCBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzIC0gbGlzdCBvZiBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0aW5nTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGluZyBtb2RpZmllclxuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RlZE5hbWUgLSBuYW1lIG9mIHJlcXVlc3RlZCBtb2RpZmllclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTW9kaWZpZXJSZXF1aXJlZChtb2RpZmllcnMsIHJlcXVlc3RpbmdOYW1lLCByZXF1ZXN0ZWROYW1lKSB7XG4gIHZhciByZXF1ZXN0aW5nID0gZmluZChtb2RpZmllcnMsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgcmV0dXJuIG5hbWUgPT09IHJlcXVlc3RpbmdOYW1lO1xuICB9KTtcblxuICB2YXIgaXNSZXF1aXJlZCA9ICEhcmVxdWVzdGluZyAmJiBtb2RpZmllcnMuc29tZShmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICByZXR1cm4gbW9kaWZpZXIubmFtZSA9PT0gcmVxdWVzdGVkTmFtZSAmJiBtb2RpZmllci5lbmFibGVkICYmIG1vZGlmaWVyLm9yZGVyIDwgcmVxdWVzdGluZy5vcmRlcjtcbiAgfSk7XG5cbiAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgdmFyIF9yZXF1ZXN0aW5nID0gJ2AnICsgcmVxdWVzdGluZ05hbWUgKyAnYCc7XG4gICAgdmFyIHJlcXVlc3RlZCA9ICdgJyArIHJlcXVlc3RlZE5hbWUgKyAnYCc7XG4gICAgY29uc29sZS53YXJuKHJlcXVlc3RlZCArICcgbW9kaWZpZXIgaXMgcmVxdWlyZWQgYnkgJyArIF9yZXF1ZXN0aW5nICsgJyBtb2RpZmllciBpbiBvcmRlciB0byB3b3JrLCBiZSBzdXJlIHRvIGluY2x1ZGUgaXQgYmVmb3JlICcgKyBfcmVxdWVzdGluZyArICchJyk7XG4gIH1cbiAgcmV0dXJuIGlzUmVxdWlyZWQ7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBhcnJvdyhkYXRhLCBvcHRpb25zKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzJGFycm93O1xuXG4gIC8vIGFycm93IGRlcGVuZHMgb24ga2VlcFRvZ2V0aGVyIGluIG9yZGVyIHRvIHdvcmtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdhcnJvdycsICdrZWVwVG9nZXRoZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGFycm93RWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB0aGUgYXJyb3dFbGVtZW50IGlzbid0IGEgcXVlcnkgc2VsZWN0b3Igd2UgbXVzdCBjaGVjayB0aGF0IHRoZVxuICAgIC8vIHByb3ZpZGVkIERPTSBub2RlIGlzIGNoaWxkIG9mIGl0cyBwb3BwZXIgbm9kZVxuICAgIGlmICghZGF0YS5pbnN0YW5jZS5wb3BwZXIuY29udGFpbnMoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgYXJyb3cuZWxlbWVudGAgbXVzdCBiZSBjaGlsZCBvZiBpdHMgcG9wcGVyIGVsZW1lbnQhJyk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgdmFyIHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcbiAgdmFyIHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICB2YXIgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuXG4gIC8vXG4gIC8vIGV4dGVuZHMga2VlcFRvZ2V0aGVyIGJlaGF2aW9yIG1ha2luZyBzdXJlIHRoZSBwb3BwZXIgYW5kIGl0c1xuICAvLyByZWZlcmVuY2UgaGF2ZSBlbm91Z2ggcGl4ZWxzIGluIGNvbmp1bmN0aW9uXG4gIC8vXG5cbiAgLy8gdG9wL2xlZnQgc2lkZVxuICBpZiAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgcG9wcGVyW3NpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtPSBwb3BwZXJbc2lkZV0gLSAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcbiAgfVxuICAvLyBib3R0b20vcmlnaHQgc2lkZVxuICBpZiAocmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSA+IHBvcHBlcltvcFNpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSArPSByZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplIC0gcG9wcGVyW29wU2lkZV07XG4gIH1cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG5cbiAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHBvcHBlclxuICB2YXIgY2VudGVyID0gcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW2xlbl0gLyAyIC0gYXJyb3dFbGVtZW50U2l6ZSAvIDI7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHBvcHBlciBvZmZzZXRzXG4gIC8vIHRha2UgcG9wcGVyIG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gIHZhciBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgcG9wcGVyTWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydtYXJnaW4nICsgc2lkZUNhcGl0YWxpemVkXSk7XG4gIHZhciBwb3BwZXJCb3JkZXJTaWRlID0gcGFyc2VGbG9hdChjc3NbJ2JvcmRlcicgKyBzaWRlQ2FwaXRhbGl6ZWQgKyAnV2lkdGgnXSk7XG4gIHZhciBzaWRlVmFsdWUgPSBjZW50ZXIgLSBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC0gcG9wcGVyTWFyZ2luU2lkZSAtIHBvcHBlckJvcmRlclNpZGU7XG5cbiAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgcG9wcGVyXG4gIHNpZGVWYWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHBvcHBlcltsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XG5cbiAgZGF0YS5hcnJvd0VsZW1lbnQgPSBhcnJvd0VsZW1lbnQ7XG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IChfZGF0YSRvZmZzZXRzJGFycm93ID0ge30sIGRlZmluZVByb3BlcnR5KF9kYXRhJG9mZnNldHMkYXJyb3csIHNpZGUsIE1hdGgucm91bmQoc2lkZVZhbHVlKSksIGRlZmluZVByb3BlcnR5KF9kYXRhJG9mZnNldHMkYXJyb3csIGFsdFNpZGUsICcnKSwgX2RhdGEkb2Zmc2V0cyRhcnJvdyk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgdmFyaWF0aW9uIG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudCB2YXJpYXRpb25cbiAqL1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKSB7XG4gIGlmICh2YXJpYXRpb24gPT09ICdlbmQnKSB7XG4gICAgcmV0dXJuICdzdGFydCc7XG4gIH0gZWxzZSBpZiAodmFyaWF0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuICdlbmQnO1xuICB9XG4gIHJldHVybiB2YXJpYXRpb247XG59XG5cbi8qKlxuICogTGlzdCBvZiBhY2NlcHRlZCBwbGFjZW1lbnRzIHRvIHVzZSBhcyB2YWx1ZXMgb2YgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbi48YnIgLz5cbiAqIFZhbGlkIHBsYWNlbWVudHMgYXJlOlxuICogLSBgYXV0b2BcbiAqIC0gYHRvcGBcbiAqIC0gYHJpZ2h0YFxuICogLSBgYm90dG9tYFxuICogLSBgbGVmdGBcbiAqXG4gKiBFYWNoIHBsYWNlbWVudCBjYW4gaGF2ZSBhIHZhcmlhdGlvbiBmcm9tIHRoaXMgbGlzdDpcbiAqIC0gYC1zdGFydGBcbiAqIC0gYC1lbmRgXG4gKlxuICogVmFyaWF0aW9ucyBhcmUgaW50ZXJwcmV0ZWQgZWFzaWx5IGlmIHlvdSB0aGluayBvZiB0aGVtIGFzIHRoZSBsZWZ0IHRvIHJpZ2h0XG4gKiB3cml0dGVuIGxhbmd1YWdlcy4gSG9yaXpvbnRhbGx5IChgdG9wYCBhbmQgYGJvdHRvbWApLCBgc3RhcnRgIGlzIGxlZnQgYW5kIGBlbmRgXG4gKiBpcyByaWdodC48YnIgLz5cbiAqIFZlcnRpY2FsbHkgKGBsZWZ0YCBhbmQgYHJpZ2h0YCksIGBzdGFydGAgaXMgdG9wIGFuZCBgZW5kYCBpcyBib3R0b20uXG4gKlxuICogU29tZSB2YWxpZCBleGFtcGxlcyBhcmU6XG4gKiAtIGB0b3AtZW5kYCAob24gdG9wIG9mIHJlZmVyZW5jZSwgcmlnaHQgYWxpZ25lZClcbiAqIC0gYHJpZ2h0LXN0YXJ0YCAob24gcmlnaHQgb2YgcmVmZXJlbmNlLCB0b3AgYWxpZ25lZClcbiAqIC0gYGJvdHRvbWAgKG9uIGJvdHRvbSwgY2VudGVyZWQpXG4gKiAtIGBhdXRvLWVuZGAgKG9uIHRoZSBzaWRlIHdpdGggbW9yZSBzcGFjZSBhdmFpbGFibGUsIGFsaWdubWVudCBkZXBlbmRzIGJ5IHBsYWNlbWVudClcbiAqXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAZW51bSB7U3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAbWV0aG9kIHBsYWNlbWVudHNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIHBsYWNlbWVudHMgPSBbJ2F1dG8tc3RhcnQnLCAnYXV0bycsICdhdXRvLWVuZCcsICd0b3Atc3RhcnQnLCAndG9wJywgJ3RvcC1lbmQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQnLCAncmlnaHQtZW5kJywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdsZWZ0LWVuZCcsICdsZWZ0JywgJ2xlZnQtc3RhcnQnXTtcblxuLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG52YXIgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5mdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50KSB7XG4gIHZhciBjb3VudGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICB2YXIgYXJyID0gdmFsaWRQbGFjZW1lbnRzLnNsaWNlKGluZGV4ICsgMSkuY29uY2F0KHZhbGlkUGxhY2VtZW50cy5zbGljZSgwLCBpbmRleCkpO1xuICByZXR1cm4gY291bnRlciA/IGFyci5yZXZlcnNlKCkgOiBhcnI7XG59XG5cbnZhciBCRUhBVklPUlMgPSB7XG4gIEZMSVA6ICdmbGlwJyxcbiAgQ0xPQ0tXSVNFOiAnY2xvY2t3aXNlJyxcbiAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQsIGRhdGEucG9zaXRpb25GaXhlZCk7XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzFdIHx8ICcnO1xuXG4gIHZhciBmbGlwT3JkZXIgPSBbXTtcblxuICBzd2l0Y2ggKG9wdGlvbnMuYmVoYXZpb3IpIHtcbiAgICBjYXNlIEJFSEFWSU9SUy5GTElQOlxuICAgICAgZmxpcE9yZGVyID0gW3BsYWNlbWVudCwgcGxhY2VtZW50T3Bwb3NpdGVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DT1VOVEVSQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZmxpcE9yZGVyID0gb3B0aW9ucy5iZWhhdmlvcjtcbiAgfVxuXG4gIGZsaXBPcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcbiAgICB2YXIgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIHZhciBvdmVybGFwc1JlZiA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IocmVmT2Zmc2V0cy5sZWZ0KSB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKHJlZk9mZnNldHMucmlnaHQpIHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IocmVmT2Zmc2V0cy50b3ApIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IocmVmT2Zmc2V0cy5ib3R0b20pO1xuXG4gICAgdmFyIG92ZXJmbG93c0xlZnQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IoYm91bmRhcmllcy5sZWZ0KTtcbiAgICB2YXIgb3ZlcmZsb3dzUmlnaHQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKGJvdW5kYXJpZXMucmlnaHQpO1xuICAgIHZhciBvdmVyZmxvd3NUb3AgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihib3VuZGFyaWVzLnRvcCk7XG4gICAgdmFyIG92ZXJmbG93c0JvdHRvbSA9IGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKGJvdW5kYXJpZXMuYm90dG9tKTtcblxuICAgIHZhciBvdmVyZmxvd3NCb3VuZGFyaWVzID0gcGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgcGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3AgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b207XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICAvLyBmbGlwcyB2YXJpYXRpb24gaWYgcmVmZXJlbmNlIGVsZW1lbnQgb3ZlcmZsb3dzIGJvdW5kYXJpZXNcbiAgICB2YXIgZmxpcHBlZFZhcmlhdGlvbkJ5UmVmID0gISFvcHRpb25zLmZsaXBWYXJpYXRpb25zICYmIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NMZWZ0IHx8IGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NSaWdodCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzVG9wIHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzQm90dG9tKTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiBwb3BwZXIgY29udGVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50ID0gISFvcHRpb25zLmZsaXBWYXJpYXRpb25zQnlDb250ZW50ICYmIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NSaWdodCB8fCBpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzQm90dG9tIHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzVG9wKTtcblxuICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uID0gZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIHx8IGZsaXBwZWRWYXJpYXRpb25CeUNvbnRlbnQ7XG5cbiAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcyB8fCBmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAvLyB0aGlzIGJvb2xlYW4gdG8gZGV0ZWN0IGFueSBmbGlwIGxvb3BcbiAgICAgIGRhdGEuZmxpcHBlZCA9IHRydWU7XG5cbiAgICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IGZsaXBPcmRlcltpbmRleCArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgICB2YXJpYXRpb24gPSBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBkYXRhLnBsYWNlbWVudCA9IHBsYWNlbWVudCArICh2YXJpYXRpb24gPyAnLScgKyB2YXJpYXRpb24gOiAnJyk7XG5cbiAgICAgIC8vIHRoaXMgb2JqZWN0IGNvbnRhaW5zIGBwb3NpdGlvbmAsIHdlIHdhbnQgdG8gcHJlc2VydmUgaXQgYWxvbmcgd2l0aFxuICAgICAgLy8gYW55IGFkZGl0aW9uYWwgcHJvcGVydHkgd2UgbWF5IGFkZCBpbiB0aGUgZnV0dXJlXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gX2V4dGVuZHMoe30sIGRhdGEub2Zmc2V0cy5wb3BwZXIsIGdldFBvcHBlck9mZnNldHMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KSk7XG5cbiAgICAgIGRhdGEgPSBydW5Nb2RpZmllcnMoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGRhdGEsICdmbGlwJyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBrZWVwVG9nZXRoZXIoZGF0YSkge1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gIHZhciBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgdmFyIHNpZGUgPSBpc1ZlcnRpY2FsID8gJ3JpZ2h0JyA6ICdib3R0b20nO1xuICB2YXIgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gIGlmIChwb3BwZXJbc2lkZV0gPCBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkgLSBwb3BwZXJbbWVhc3VyZW1lbnRdO1xuICB9XG4gIGlmIChwb3BwZXJbb3BTaWRlXSA+IGZsb29yKHJlZmVyZW5jZVtzaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgY29udGFpbmluZyB2YWx1ZSArIHVuaXQgaW50byBhIHB4IHZhbHVlIG51bWJlclxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHN0ciAtIFZhbHVlICsgdW5pdCBzdHJpbmdcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBtZWFzdXJlbWVudCAtIGBoZWlnaHRgIG9yIGB3aWR0aGBcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQHJldHVybnMge051bWJlcnxTdHJpbmd9XG4gKiBWYWx1ZSBpbiBwaXhlbHMsIG9yIG9yaWdpbmFsIHN0cmluZyBpZiBubyB2YWx1ZXMgd2VyZSBleHRyYWN0ZWRcbiAqL1xuZnVuY3Rpb24gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSB7XG4gIC8vIHNlcGFyYXRlIHZhbHVlIGZyb20gdW5pdFxuICB2YXIgc3BsaXQgPSBzdHIubWF0Y2goLygoPzpcXC18XFwrKT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuICB2YXIgdmFsdWUgPSArc3BsaXRbMV07XG4gIHZhciB1bml0ID0gc3BsaXRbMl07XG5cbiAgLy8gSWYgaXQncyBub3QgYSBudW1iZXIgaXQncyBhbiBvcGVyYXRvciwgSSBndWVzc1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGlmICh1bml0LmluZGV4T2YoJyUnKSA9PT0gMCkge1xuICAgIHZhciBlbGVtZW50ID0gdm9pZCAwO1xuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSAnJXAnOlxuICAgICAgICBlbGVtZW50ID0gcG9wcGVyT2Zmc2V0cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgIGNhc2UgJyVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSByZWZlcmVuY2VPZmZzZXRzO1xuICAgIH1cblxuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdChlbGVtZW50KTtcbiAgICByZXR1cm4gcmVjdFttZWFzdXJlbWVudF0gLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIGlmICh1bml0ID09PSAndmgnIHx8IHVuaXQgPT09ICd2dycpIHtcbiAgICAvLyBpZiBpcyBhIHZoIG9yIHZ3LCB3ZSBjYWxjdWxhdGUgdGhlIHNpemUgYmFzZWQgb24gdGhlIHZpZXdwb3J0XG4gICAgdmFyIHNpemUgPSB2b2lkIDA7XG4gICAgaWYgKHVuaXQgPT09ICd2aCcpIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgIH1cbiAgICByZXR1cm4gc2l6ZSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIGlzIGFuIGV4cGxpY2l0IHBpeGVsIHVuaXQsIHdlIGdldCByaWQgb2YgdGhlIHVuaXQgYW5kIGtlZXAgdGhlIHZhbHVlXG4gICAgLy8gaWYgaXMgYW4gaW1wbGljaXQgdW5pdCwgaXQncyBweCwgYW5kIHdlIHJldHVybiBqdXN0IHRoZSB2YWx1ZVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGFuIGBvZmZzZXRgIHN0cmluZyB0byBleHRyYXBvbGF0ZSBgeGAgYW5kIGB5YCBudW1lcmljIG9mZnNldHMuXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gb2Zmc2V0XG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBiYXNlUGxhY2VtZW50XG4gKiBAcmV0dXJucyB7QXJyYXl9IGEgdHdvIGNlbGxzIGFycmF5IHdpdGggeCBhbmQgeSBvZmZzZXRzIGluIG51bWJlcnNcbiAqL1xuZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzLCBiYXNlUGxhY2VtZW50KSB7XG4gIHZhciBvZmZzZXRzID0gWzAsIDBdO1xuXG4gIC8vIFVzZSBoZWlnaHQgaWYgcGxhY2VtZW50IGlzIGxlZnQgb3IgcmlnaHQgYW5kIGluZGV4IGlzIDAgb3RoZXJ3aXNlIHVzZSB3aWR0aFxuICAvLyBpbiB0aGlzIHdheSB0aGUgZmlyc3Qgb2Zmc2V0IHdpbGwgdXNlIGFuIGF4aXMgYW5kIHRoZSBzZWNvbmQgb25lXG4gIC8vIHdpbGwgdXNlIHRoZSBvdGhlciBvbmVcbiAgdmFyIHVzZUhlaWdodCA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIC8vIFNwbGl0IHRoZSBvZmZzZXQgc3RyaW5nIHRvIG9idGFpbiBhIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kc1xuICAvLyBUaGUgcmVnZXggYWRkcmVzc2VzIHZhbHVlcyB3aXRoIHRoZSBwbHVzIG9yIG1pbnVzIHNpZ24gaW4gZnJvbnQgKCsxMCwgLTIwLCBldGMpXG4gIHZhciBmcmFnbWVudHMgPSBvZmZzZXQuc3BsaXQoLyhcXCt8XFwtKS8pLm1hcChmdW5jdGlvbiAoZnJhZykge1xuICAgIHJldHVybiBmcmFnLnRyaW0oKTtcbiAgfSk7XG5cbiAgLy8gRGV0ZWN0IGlmIHRoZSBvZmZzZXQgc3RyaW5nIGNvbnRhaW5zIGEgcGFpciBvZiB2YWx1ZXMgb3IgYSBzaW5nbGUgb25lXG4gIC8vIHRoZXkgY291bGQgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hIG9yIHNwYWNlXG4gIHZhciBkaXZpZGVyID0gZnJhZ21lbnRzLmluZGV4T2YoZmluZChmcmFnbWVudHMsIGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgcmV0dXJuIGZyYWcuc2VhcmNoKC8sfFxccy8pICE9PSAtMTtcbiAgfSkpO1xuXG4gIGlmIChmcmFnbWVudHNbZGl2aWRlcl0gJiYgZnJhZ21lbnRzW2RpdmlkZXJdLmluZGV4T2YoJywnKSA9PT0gLTEpIHtcbiAgICBjb25zb2xlLndhcm4oJ09mZnNldHMgc2VwYXJhdGVkIGJ5IHdoaXRlIHNwYWNlKHMpIGFyZSBkZXByZWNhdGVkLCB1c2UgYSBjb21tYSAoLCkgaW5zdGVhZC4nKTtcbiAgfVxuXG4gIC8vIElmIGRpdmlkZXIgaXMgZm91bmQsIHdlIGRpdmlkZSB0aGUgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzIHRvIGRpdmlkZVxuICAvLyB0aGVtIGJ5IG9mc2V0IFggYW5kIFkuXG4gIHZhciBzcGxpdFJlZ2V4ID0gL1xccyosXFxzKnxcXHMrLztcbiAgdmFyIG9wcyA9IGRpdmlkZXIgIT09IC0xID8gW2ZyYWdtZW50cy5zbGljZSgwLCBkaXZpZGVyKS5jb25jYXQoW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVswXV0pLCBbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzFdXS5jb25jYXQoZnJhZ21lbnRzLnNsaWNlKGRpdmlkZXIgKyAxKSldIDogW2ZyYWdtZW50c107XG5cbiAgLy8gQ29udmVydCB0aGUgdmFsdWVzIHdpdGggdW5pdHMgdG8gYWJzb2x1dGUgcGl4ZWxzIHRvIGFsbG93IG91ciBjb21wdXRhdGlvbnNcbiAgb3BzID0gb3BzLm1hcChmdW5jdGlvbiAob3AsIGluZGV4KSB7XG4gICAgLy8gTW9zdCBvZiB0aGUgdW5pdHMgcmVseSBvbiB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBvcHBlclxuICAgIHZhciBtZWFzdXJlbWVudCA9IChpbmRleCA9PT0gMSA/ICF1c2VIZWlnaHQgOiB1c2VIZWlnaHQpID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgIHJldHVybiBvcFxuICAgIC8vIFRoaXMgYWdncmVnYXRlcyBhbnkgYCtgIG9yIGAtYCBzaWduIHRoYXQgYXJlbid0IGNvbnNpZGVyZWQgb3BlcmF0b3JzXG4gICAgLy8gZS5nLjogMTAgKyArNSA9PiBbMTAsICssICs1XVxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChhW2EubGVuZ3RoIC0gMV0gPT09ICcnICYmIFsnKycsICctJ10uaW5kZXhPZihiKSAhPT0gLTEpIHtcbiAgICAgICAgYVthLmxlbmd0aCAtIDFdID0gYjtcbiAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0gZWxzZSBpZiAobWVyZ2VXaXRoUHJldmlvdXMpIHtcbiAgICAgICAgYVthLmxlbmd0aCAtIDFdICs9IGI7XG4gICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEuY29uY2F0KGIpO1xuICAgICAgfVxuICAgIH0sIFtdKVxuICAgIC8vIEhlcmUgd2UgY29udmVydCB0aGUgc3RyaW5nIHZhbHVlcyBpbnRvIG51bWJlciB2YWx1ZXMgKGluIHB4KVxuICAgIC5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgcmV0dXJuIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIExvb3AgdHJvdWdoIHRoZSBvZmZzZXRzIGFycmF5cyBhbmQgZXhlY3V0ZSB0aGUgb3BlcmF0aW9uc1xuICBvcHMuZm9yRWFjaChmdW5jdGlvbiAob3AsIGluZGV4KSB7XG4gICAgb3AuZm9yRWFjaChmdW5jdGlvbiAoZnJhZywgaW5kZXgyKSB7XG4gICAgICBpZiAoaXNOdW1lcmljKGZyYWcpKSB7XG4gICAgICAgIG9mZnNldHNbaW5kZXhdICs9IGZyYWcgKiAob3BbaW5kZXgyIC0gMV0gPT09ICctJyA/IC0xIDogMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAYXJndW1lbnQge051bWJlcnxTdHJpbmd9IG9wdGlvbnMub2Zmc2V0PTBcbiAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBvZmZzZXQoZGF0YSwgX3JlZikge1xuICB2YXIgb2Zmc2V0ID0gX3JlZi5vZmZzZXQ7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudCxcbiAgICAgIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgdmFyIG9mZnNldHMgPSB2b2lkIDA7XG4gIGlmIChpc051bWVyaWMoK29mZnNldCkpIHtcbiAgICBvZmZzZXRzID0gWytvZmZzZXQsIDBdO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldHMgPSBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlciwgcmVmZXJlbmNlLCBiYXNlUGxhY2VtZW50KTtcbiAgfVxuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzFdO1xuICB9XG5cbiAgZGF0YS5wb3BwZXIgPSBwb3BwZXI7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YSwgb3B0aW9ucykge1xuICB2YXIgYm91bmRhcmllc0VsZW1lbnQgPSBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG5cbiAgLy8gSWYgb2Zmc2V0UGFyZW50IGlzIHRoZSByZWZlcmVuY2UgZWxlbWVudCwgd2UgcmVhbGx5IHdhbnQgdG9cbiAgLy8gZ28gb25lIHN0ZXAgdXAgYW5kIHVzZSB0aGUgbmV4dCBvZmZzZXRQYXJlbnQgYXMgcmVmZXJlbmNlIHRvXG4gIC8vIGF2b2lkIHRvIG1ha2UgdGhpcyBtb2RpZmllciBjb21wbGV0ZWx5IHVzZWxlc3MgYW5kIGxvb2sgbGlrZSBicm9rZW5cbiAgaWYgKGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlID09PSBib3VuZGFyaWVzRWxlbWVudCkge1xuICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGJvdW5kYXJpZXNFbGVtZW50KTtcbiAgfVxuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXNldHMgdGhlIHBvcHBlcidzIHBvc2l0aW9uIHNvIHRoYXQgdGhlIGRvY3VtZW50IHNpemUgY2FuIGJlIGNhbGN1bGF0ZWQgZXhjbHVkaW5nXG4gIC8vIHRoZSBzaXplIG9mIHRoZSBwb3BwZXIgZWxlbWVudCBpdHNlbGZcbiAgdmFyIHRyYW5zZm9ybVByb3AgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuICB2YXIgcG9wcGVyU3R5bGVzID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIuc3R5bGU7IC8vIGFzc2lnbm1lbnQgdG8gaGVscCBtaW5pZmljYXRpb25cbiAgdmFyIHRvcCA9IHBvcHBlclN0eWxlcy50b3AsXG4gICAgICBsZWZ0ID0gcG9wcGVyU3R5bGVzLmxlZnQsXG4gICAgICB0cmFuc2Zvcm0gPSBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF07XG5cbiAgcG9wcGVyU3R5bGVzLnRvcCA9ICcnO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9ICcnO1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50LCBkYXRhLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgcG9wcGVyU3R5bGVzLnRvcCA9IHRvcDtcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSBsZWZ0O1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICB2YXIgb3JkZXIgPSBvcHRpb25zLnByaW9yaXR5O1xuICB2YXIgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICB2YXIgY2hlY2sgPSB7XG4gICAgcHJpbWFyeTogZnVuY3Rpb24gcHJpbWFyeShwbGFjZW1lbnQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBvcHBlcltwbGFjZW1lbnRdO1xuICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heChwb3BwZXJbcGxhY2VtZW50XSwgYm91bmRhcmllc1twbGFjZW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgcGxhY2VtZW50LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IGZ1bmN0aW9uIHNlY29uZGFyeShwbGFjZW1lbnQpIHtcbiAgICAgIHZhciBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgdmFyIHZhbHVlID0gcG9wcGVyW21haW5TaWRlXTtcbiAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4ocG9wcGVyW21haW5TaWRlXSwgYm91bmRhcmllc1twbGFjZW1lbnRdIC0gKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IHBvcHBlci53aWR0aCA6IHBvcHBlci5oZWlnaHQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgbWFpblNpZGUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgdmFyIHNpZGUgPSBbJ2xlZnQnLCAndG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xuICAgIHBvcHBlciA9IF9leHRlbmRzKHt9LCBwb3BwZXIsIGNoZWNrW3NpZGVdKHBsYWNlbWVudCkpO1xuICB9KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gcG9wcGVyO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBzaGlmdChkYXRhKSB7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgLy8gaWYgc2hpZnQgc2hpZnR2YXJpYXRpb24gaXMgc3BlY2lmaWVkLCBydW4gdGhlIG1vZGlmaWVyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXI7XG5cbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuICAgIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgIHZhciBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICB2YXIgc2hpZnRPZmZzZXRzID0ge1xuICAgICAgc3RhcnQ6IGRlZmluZVByb3BlcnR5KHt9LCBzaWRlLCByZWZlcmVuY2Vbc2lkZV0pLFxuICAgICAgZW5kOiBkZWZpbmVQcm9wZXJ0eSh7fSwgc2lkZSwgcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW21lYXN1cmVtZW50XSAtIHBvcHBlclttZWFzdXJlbWVudF0pXG4gICAgfTtcblxuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBzaGlmdE9mZnNldHNbc2hpZnR2YXJpYXRpb25dKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gaGlkZShkYXRhKSB7XG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaGlkZScsICdwcmV2ZW50T3ZlcmZsb3cnKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIHJlZlJlY3QgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuICB2YXIgYm91bmQgPSBmaW5kKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICByZXR1cm4gbW9kaWZpZXIubmFtZSA9PT0gJ3ByZXZlbnRPdmVyZmxvdyc7XG4gIH0pLmJvdW5kYXJpZXM7XG5cbiAgaWYgKHJlZlJlY3QuYm90dG9tIDwgYm91bmQudG9wIHx8IHJlZlJlY3QubGVmdCA+IGJvdW5kLnJpZ2h0IHx8IHJlZlJlY3QudG9wID4gYm91bmQuYm90dG9tIHx8IHJlZlJlY3QucmlnaHQgPCBib3VuZC5sZWZ0KSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gdHJ1ZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSBmYWxzZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGlubmVyKGRhdGEpIHtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIGlzSG9yaXogPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICB2YXIgc3VidHJhY3RMZW5ndGggPSBbJ3RvcCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA9PT0gLTE7XG5cbiAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPSByZWZlcmVuY2VbYmFzZVBsYWNlbWVudF0gLSAoc3VidHJhY3RMZW5ndGggPyBwb3BwZXJbaXNIb3JpeiA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gOiAwKTtcblxuICBkYXRhLnBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KHBvcHBlcik7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogTW9kaWZpZXIgZnVuY3Rpb24sIGVhY2ggbW9kaWZpZXIgY2FuIGhhdmUgYSBmdW5jdGlvbiBvZiB0aGlzIHR5cGUgYXNzaWduZWRcbiAqIHRvIGl0cyBgZm5gIHByb3BlcnR5LjxiciAvPlxuICogVGhlc2UgZnVuY3Rpb25zIHdpbGwgYmUgY2FsbGVkIG9uIGVhY2ggdXBkYXRlLCB0aGlzIG1lYW5zIHRoYXQgeW91IG11c3RcbiAqIG1ha2Ugc3VyZSB0aGV5IGFyZSBwZXJmb3JtYW50IGVub3VnaCB0byBhdm9pZCBwZXJmb3JtYW5jZSBib3R0bGVuZWNrcy5cbiAqXG4gKiBAZnVuY3Rpb24gTW9kaWZpZXJGblxuICogQGFyZ3VtZW50IHtkYXRhT2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cblxuLyoqXG4gKiBNb2RpZmllcnMgYXJlIHBsdWdpbnMgdXNlZCB0byBhbHRlciB0aGUgYmVoYXZpb3Igb2YgeW91ciBwb3BwZXJzLjxiciAvPlxuICogUG9wcGVyLmpzIHVzZXMgYSBzZXQgb2YgOSBtb2RpZmllcnMgdG8gcHJvdmlkZSBhbGwgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdGllc1xuICogbmVlZGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIFVzdWFsbHkgeW91IGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGBvcmRlcmAsIGBmbmAgYW5kIGBvbkxvYWRgIHByb3BzLlxuICogQWxsIHRoZSBvdGhlciBwcm9wZXJ0aWVzIGFyZSBjb25maWd1cmF0aW9ucyB0aGF0IGNvdWxkIGJlIHR3ZWFrZWQuXG4gKiBAbmFtZXNwYWNlIG1vZGlmaWVyc1xuICovXG52YXIgbW9kaWZpZXJzID0ge1xuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBzaGlmdCB0aGUgcG9wcGVyIG9uIHRoZSBzdGFydCBvciBlbmQgb2YgaXRzIHJlZmVyZW5jZVxuICAgKiBlbGVtZW50LjxiciAvPlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIHZhcmlhdGlvbiBvZiB0aGUgYHBsYWNlbWVudGAgcHJvcGVydHkuPGJyIC8+XG4gICAqIEl0IGNhbiBiZSBvbmUgZWl0aGVyIGAtZW5kYCBvciBgLXN0YXJ0YC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHNoaWZ0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTEwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogc2hpZnRcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGBvZmZzZXRgIG1vZGlmaWVyIGNhbiBzaGlmdCB5b3VyIHBvcHBlciBvbiBib3RoIGl0cyBheGlzLlxuICAgKlxuICAgKiBJdCBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgdW5pdHM6XG4gICAqIC0gYHB4YCBvciB1bml0LWxlc3MsIGludGVycHJldGVkIGFzIHBpeGVsc1xuICAgKiAtIGAlYCBvciBgJXJgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAqIC0gYCVwYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiAtIGB2d2AsIENTUyB2aWV3cG9ydCB3aWR0aCB1bml0XG4gICAqIC0gYHZoYCwgQ1NTIHZpZXdwb3J0IGhlaWdodCB1bml0XG4gICAqXG4gICAqIEZvciBsZW5ndGggaXMgaW50ZW5kZWQgdGhlIG1haW4gYXhpcyByZWxhdGl2ZSB0byB0aGUgcGxhY2VtZW50IG9mIHRoZSBwb3BwZXIuPGJyIC8+XG4gICAqIFRoaXMgbWVhbnMgdGhhdCBpZiB0aGUgcGxhY2VtZW50IGlzIGB0b3BgIG9yIGBib3R0b21gLCB0aGUgbGVuZ3RoIHdpbGwgYmUgdGhlXG4gICAqIGB3aWR0aGAuIEluIGNhc2Ugb2YgYGxlZnRgIG9yIGByaWdodGAsIGl0IHdpbGwgYmUgdGhlIGBoZWlnaHRgLlxuICAgKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgYSBzaW5nbGUgdmFsdWUgKGFzIGBOdW1iZXJgIG9yIGBTdHJpbmdgKSwgb3IgYSBwYWlyIG9mIHZhbHVlc1xuICAgKiBhcyBgU3RyaW5nYCBkaXZpZGVkIGJ5IGEgY29tbWEgb3Igb25lIChvciBtb3JlKSB3aGl0ZSBzcGFjZXMuPGJyIC8+XG4gICAqIFRoZSBsYXR0ZXIgaXMgYSBkZXByZWNhdGVkIG1ldGhvZCBiZWNhdXNlIGl0IGxlYWRzIHRvIGNvbmZ1c2lvbiBhbmQgd2lsbCBiZVxuICAgKiByZW1vdmVkIGluIHYyLjxiciAvPlxuICAgKiBBZGRpdGlvbmFsbHksIGl0IGFjY2VwdHMgYWRkaXRpb25zIGFuZCBzdWJ0cmFjdGlvbnMgYmV0d2VlbiBkaWZmZXJlbnQgdW5pdHMuXG4gICAqIE5vdGUgdGhhdCBtdWx0aXBsaWNhdGlvbnMgYW5kIGRpdmlzaW9ucyBhcmVuJ3Qgc3VwcG9ydGVkLlxuICAgKlxuICAgKiBWYWxpZCBleGFtcGxlcyBhcmU6XG4gICAqIGBgYFxuICAgKiAxMFxuICAgKiAnMTAlJ1xuICAgKiAnMTAsIDEwJ1xuICAgKiAnMTAlLCAxMCdcbiAgICogJzEwICsgMTAlJ1xuICAgKiAnMTAgLSA1dmggKyAzJSdcbiAgICogJy0xMHB4ICsgNXZoLCA1cHggLSA2JSdcbiAgICogYGBgXG4gICAqID4gKipOQioqOiBJZiB5b3UgZGVzaXJlIHRvIGFwcGx5IG9mZnNldHMgdG8geW91ciBwb3BwZXJzIGluIGEgd2F5IHRoYXQgbWF5IG1ha2UgdGhlbSBvdmVybGFwXG4gICAqID4gd2l0aCB0aGVpciByZWZlcmVuY2UgZWxlbWVudCwgdW5mb3J0dW5hdGVseSwgeW91IHdpbGwgaGF2ZSB0byBkaXNhYmxlIHRoZSBgZmxpcGAgbW9kaWZpZXIuXG4gICAqID4gWW91IGNhbiByZWFkIG1vcmUgb24gdGhpcyBhdCB0aGlzIFtpc3N1ZV0oaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvaXNzdWVzLzM3MykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBvZmZzZXQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAyMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBvZmZzZXQsXG4gICAgLyoqIEBwcm9wIHtOdW1iZXJ8U3RyaW5nfSBvZmZzZXQ9MFxuICAgICAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIG9mZnNldDogMFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHByZXZlbnQgdGhlIHBvcHBlciBmcm9tIGJlaW5nIHBvc2l0aW9uZWQgb3V0c2lkZSB0aGUgYm91bmRhcnkuXG4gICAqXG4gICAqIEEgc2NlbmFyaW8gZXhpc3RzIHdoZXJlIHRoZSByZWZlcmVuY2UgaXRzZWxmIGlzIG5vdCB3aXRoaW4gdGhlIGJvdW5kYXJpZXMuPGJyIC8+XG4gICAqIFdlIGNhbiBzYXkgaXQgaGFzIFwiZXNjYXBlZCB0aGUgYm91bmRhcmllc1wiIOKAlCBvciBqdXN0IFwiZXNjYXBlZFwiLjxiciAvPlxuICAgKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBkZWNpZGUgd2hldGhlciB0aGUgcG9wcGVyIHNob3VsZCBlaXRoZXI6XG4gICAqXG4gICAqIC0gZGV0YWNoIGZyb20gdGhlIHJlZmVyZW5jZSBhbmQgcmVtYWluIFwidHJhcHBlZFwiIGluIHRoZSBib3VuZGFyaWVzLCBvclxuICAgKiAtIGlmIGl0IHNob3VsZCBpZ25vcmUgdGhlIGJvdW5kYXJ5IGFuZCBcImVzY2FwZSB3aXRoIGl0cyByZWZlcmVuY2VcIlxuICAgKlxuICAgKiBXaGVuIGBlc2NhcGVXaXRoUmVmZXJlbmNlYCBpcyBzZXQgdG9gdHJ1ZWAgYW5kIHJlZmVyZW5jZSBpcyBjb21wbGV0ZWx5XG4gICAqIG91dHNpZGUgaXRzIGJvdW5kYXJpZXMsIHRoZSBwb3BwZXIgd2lsbCBvdmVyZmxvdyAob3IgY29tcGxldGVseSBsZWF2ZSlcbiAgICogdGhlIGJvdW5kYXJpZXMgaW4gb3JkZXIgdG8gcmVtYWluIGF0dGFjaGVkIHRvIHRoZSBlZGdlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAzMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgLyoqXG4gICAgICogQHByb3Age0FycmF5fSBbcHJpb3JpdHk9WydsZWZ0JywncmlnaHQnLCd0b3AnLCdib3R0b20nXV1cbiAgICAgKiBQb3BwZXIgd2lsbCB0cnkgdG8gcHJldmVudCBvdmVyZmxvdyBmb2xsb3dpbmcgdGhlc2UgcHJpb3JpdGllcyBieSBkZWZhdWx0LFxuICAgICAqIHRoZW4sIGl0IGNvdWxkIG92ZXJmbG93IG9uIHRoZSBsZWZ0IGFuZCBvbiB0b3Agb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwcmlvcml0eTogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBBbW91bnQgb2YgcGl4ZWwgdXNlZCB0byBkZWZpbmUgYSBtaW5pbXVtIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvdW5kYXJpZXNcbiAgICAgKiBhbmQgdGhlIHBvcHBlci4gVGhpcyBtYWtlcyBzdXJlIHRoZSBwb3BwZXIgYWx3YXlzIGhhcyBhIGxpdHRsZSBwYWRkaW5nXG4gICAgICogYmV0d2VlbiB0aGUgZWRnZXMgb2YgaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3Njcm9sbFBhcmVudCdcbiAgICAgKiBCb3VuZGFyaWVzIHVzZWQgYnkgdGhlIG1vZGlmaWVyLiBDYW4gYmUgYHNjcm9sbFBhcmVudGAsIGB3aW5kb3dgLFxuICAgICAqIGB2aWV3cG9ydGAgb3IgYW55IERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAnc2Nyb2xsUGFyZW50J1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2Ugc3VyZSB0aGUgcmVmZXJlbmNlIGFuZCBpdHMgcG9wcGVyIHN0YXkgbmVhciBlYWNoIG90aGVyXG4gICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXNwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gZW5zdXJlIHRoYXQgaXQgcG9pbnRzIHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogSXQgY2FyZXMgb25seSBhYm91dCB0aGUgZmlyc3QgYXhpcy4gWW91IGNhbiBzdGlsbCBoYXZlIHBvcHBlcnMgd2l0aCBtYXJnaW5cbiAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBrZWVwVG9nZXRoZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NDAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA0MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBrZWVwVG9nZXRoZXJcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtb2RpZmllciBpcyB1c2VkIHRvIG1vdmUgdGhlIGBhcnJvd0VsZW1lbnRgIG9mIHRoZSBwb3BwZXIgdG8gbWFrZVxuICAgKiBzdXJlIGl0IGlzIHBvc2l0aW9uZWQgYmV0d2VlbiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgYW5kIGl0cyBwb3BwZXIgZWxlbWVudC5cbiAgICogSXQgd2lsbCByZWFkIHRoZSBvdXRlciBzaXplIG9mIHRoZSBgYXJyb3dFbGVtZW50YCBub2RlIHRvIGRldGVjdCBob3cgbWFueVxuICAgKiBwaXhlbHMgb2YgY29uanVuY3Rpb24gYXJlIG5lZWRlZC5cbiAgICpcbiAgICogSXQgaGFzIG5vIGVmZmVjdCBpZiBubyBgYXJyb3dFbGVtZW50YCBpcyBwcm92aWRlZC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFycm93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTUwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXJyb3csXG4gICAgLyoqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGVsZW1lbnQ9J1t4LWFycm93XScgLSBTZWxlY3RvciBvciBub2RlIHVzZWQgYXMgYXJyb3cgKi9cbiAgICBlbGVtZW50OiAnW3gtYXJyb3ddJ1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGZsaXAgdGhlIHBvcHBlcidzIHBsYWNlbWVudCB3aGVuIGl0IHN0YXJ0cyB0byBvdmVybGFwIGl0c1xuICAgKiByZWZlcmVuY2UgZWxlbWVudC5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKlxuICAgKiAqKk5PVEU6KiogdGhpcyBtb2RpZmllciB3aWxsIGludGVycnVwdCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUgYW5kIHdpbGxcbiAgICogcmVzdGFydCBpdCBpZiBpdCBkZXRlY3RzIHRoZSBuZWVkIHRvIGZsaXAgdGhlIHBsYWNlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGZsaXA6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA2MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBmbGlwLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8QXJyYXl9IGJlaGF2aW9yPSdmbGlwJ1xuICAgICAqIFRoZSBiZWhhdmlvciB1c2VkIHRvIGNoYW5nZSB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50LiBJdCBjYW4gYmUgb25lIG9mXG4gICAgICogYGZsaXBgLCBgY2xvY2t3aXNlYCwgYGNvdW50ZXJjbG9ja3dpc2VgIG9yIGFuIGFycmF5IHdpdGggYSBsaXN0IG9mIHZhbGlkXG4gICAgICogcGxhY2VtZW50cyAod2l0aCBvcHRpb25hbCB2YXJpYXRpb25zKVxuICAgICAqL1xuICAgIGJlaGF2aW9yOiAnZmxpcCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogVGhlIHBvcHBlciB3aWxsIGZsaXAgaWYgaXQgaGl0cyB0aGUgZWRnZXMgb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSd2aWV3cG9ydCdcbiAgICAgKiBUaGUgZWxlbWVudCB3aGljaCB3aWxsIGRlZmluZSB0aGUgYm91bmRhcmllcyBvZiB0aGUgcG9wcGVyIHBvc2l0aW9uLlxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBuZXZlciBiZSBwbGFjZWQgb3V0c2lkZSBvZiB0aGUgZGVmaW5lZCBib3VuZGFyaWVzXG4gICAgICogKGV4Y2VwdCBpZiBga2VlcFRvZ2V0aGVyYCBpcyBlbmFibGVkKVxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAndmlld3BvcnQnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9ucz1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudCBvdmVybGFwcyBpdHMgYm91bmRhcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW5hbCBwbGFjZW1lbnQgc2hvdWxkIGhhdmUgYSBzZXQgdmFyaWF0aW9uLlxuICAgICAqL1xuICAgIGZsaXBWYXJpYXRpb25zOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQ9ZmFsc2VcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgc3dpdGNoIHBsYWNlbWVudCB2YXJpYXRpb24gYmV0d2VlbiBgLXN0YXJ0YCBhbmQgYC1lbmRgIHdoZW5cbiAgICAgKiB0aGUgcG9wcGVyIGVsZW1lbnQgb3ZlcmxhcHMgaXRzIHJlZmVyZW5jZSBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQ6IGZhbHNlXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSB0aGUgcG9wcGVyIGZsb3cgdG93YXJkIHRoZSBpbm5lciBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHdoZW4gdGhpcyBtb2RpZmllciBpcyBkaXNhYmxlZCwgdGhlIHBvcHBlciB3aWxsIGJlIHBsYWNlZCBvdXRzaWRlXG4gICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGlubmVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTcwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD1mYWxzZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBpbm5lclxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGhpZGUgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXRzaWRlIG9mIHRoZVxuICAgKiBwb3BwZXIgYm91bmRhcmllcy4gSXQgd2lsbCBzZXQgYSBgeC1vdXQtb2YtYm91bmRhcmllc2AgYXR0cmlidXRlIHdoaWNoIGNhblxuICAgKiBiZSB1c2VkIHRvIGhpZGUgd2l0aCBhIENTUyBzZWxlY3RvciB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBpc1xuICAgKiBvdXQgb2YgYm91bmRhcmllcy5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaGlkZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDgwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGhpZGVcbiAgfSxcblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIHN0eWxlIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgZWxlbWVudCB0byBnZXRzXG4gICAqIHByb3Blcmx5IHBvc2l0aW9uZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIG1vZGlmaWVyIHdpbGwgbm90IHRvdWNoIHRoZSBET00sIGl0IGp1c3QgcHJlcGFyZXMgdGhlIHN0eWxlc1xuICAgKiBzbyB0aGF0IGBhcHBseVN0eWxlYCBtb2RpZmllciBjYW4gYXBwbHkgaXQuIFRoaXMgc2VwYXJhdGlvbiBpcyB1c2VmdWxcbiAgICogaW4gY2FzZSB5b3UgbmVlZCB0byByZXBsYWNlIGBhcHBseVN0eWxlYCB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1vZGlmaWVyIGhhcyBgODUwYCBhcyBgb3JkZXJgIHZhbHVlIHRvIG1haW50YWluIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICogd2l0aCBwcmV2aW91cyB2ZXJzaW9ucyBvZiBQb3BwZXIuanMuIEV4cGVjdCB0aGUgbW9kaWZpZXJzIG9yZGVyaW5nIG1ldGhvZFxuICAgKiB0byBjaGFuZ2UgaW4gZnV0dXJlIG1ham9yIHZlcnNpb25zIG9mIHRoZSBsaWJyYXJ5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgY29tcHV0ZVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTg1MCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODUwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogY29tcHV0ZVN0eWxlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nYm90dG9tJ11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFggYXhpcyAoYGJvdHRvbWAgb3IgYHRvcGApLiBBS0EgWCBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGBib3R0b21gXG4gICAgICovXG4gICAgeDogJ2JvdHRvbScsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2xlZnQnXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWSBheGlzIChgbGVmdGAgb3IgYHJpZ2h0YCkuIEFLQSBZIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYHJpZ2h0YFxuICAgICAqL1xuICAgIHk6ICdyaWdodCdcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAqIHdhbnQgdG8gZGVsZWdhdGUgYWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyB0byBpdC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogaGFzIGl0cyBwb3NpdGlvbiBzZXQgdG8gYGFic29sdXRlYCBiZWZvcmUgUG9wcGVyLmpzIGNhbiBkbyBpdHMgd29yayFcbiAgICpcbiAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3VyIG93biB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFwcGx5U3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9OTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA5MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcHBseVN0eWxlLFxuICAgIC8qKiBAcHJvcCB7RnVuY3Rpb259ICovXG4gICAgb25Mb2FkOiBhcHBseVN0eWxlT25Mb2FkLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xMC4wLCB0aGUgcHJvcGVydHkgbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXJcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZFxuICB9XG59O1xuXG4vKipcbiAqIFRoZSBgZGF0YU9iamVjdGAgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvcm1hdGlvbiB1c2VkIGJ5IFBvcHBlci5qcy5cbiAqIFRoaXMgb2JqZWN0IGlzIHBhc3NlZCB0byBtb2RpZmllcnMgYW5kIHRvIHRoZSBgb25DcmVhdGVgIGFuZCBgb25VcGRhdGVgIGNhbGxiYWNrcy5cbiAqIEBuYW1lIGRhdGFPYmplY3RcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmluc3RhbmNlIFRoZSBQb3BwZXIuanMgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLnBsYWNlbWVudCBQbGFjZW1lbnQgYXBwbGllZCB0byBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50IFBsYWNlbWVudCBvcmlnaW5hbGx5IGRlZmluZWQgb24gaW5pdFxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmZsaXBwZWQgVHJ1ZSBpZiBwb3BwZXIgaGFzIGJlZW4gZmxpcHBlZCBieSBmbGlwIG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuaGlkZSBUcnVlIGlmIHRoZSByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXQgb2YgYm91bmRhcmllcywgdXNlZnVsIHRvIGtub3cgd2hlbiB0byBoaWRlIHRoZSBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGRhdGEuYXJyb3dFbGVtZW50IE5vZGUgdXNlZCBhcyBhcnJvdyBieSBhcnJvdyBtb2RpZmllclxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuc3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYXJyb3dTdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgYXJyb3cuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5ib3VuZGFyaWVzIE9mZnNldHMgb2YgdGhlIHBvcHBlciBib3VuZGFyaWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzIFRoZSBtZWFzdXJlbWVudHMgb2YgcG9wcGVyLCByZWZlcmVuY2UgYW5kIGFycm93IGVsZW1lbnRzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnBvcHBlciBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucmVmZXJlbmNlIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5hcnJvd10gYHRvcGAgYW5kIGBsZWZ0YCBvZmZzZXRzLCBvbmx5IG9uZSBvZiB0aGVtIHdpbGwgYmUgZGlmZmVyZW50IGZyb20gMFxuICovXG5cbi8qKlxuICogRGVmYXVsdCBvcHRpb25zIHByb3ZpZGVkIHRvIFBvcHBlci5qcyBjb25zdHJ1Y3Rvci48YnIgLz5cbiAqIFRoZXNlIGNhbiBiZSBvdmVycmlkZGVuIHVzaW5nIHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgb2YgUG9wcGVyLmpzLjxiciAvPlxuICogVG8gb3ZlcnJpZGUgYW4gb3B0aW9uLCBzaW1wbHkgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZVxuICogc3RydWN0dXJlIG9mIHRoZSBgb3B0aW9uc2Agb2JqZWN0LCBhcyB0aGUgM3JkIGFyZ3VtZW50LiBGb3IgZXhhbXBsZTpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWYsIHBvcCwge1xuICogICBtb2RpZmllcnM6IHtcbiAqICAgICBwcmV2ZW50T3ZlcmZsb3c6IHsgZW5hYmxlZDogZmFsc2UgfVxuICogICB9XG4gKiB9KVxuICogYGBgXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG52YXIgRGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBQb3BwZXIncyBwbGFjZW1lbnQuXG4gICAqIEBwcm9wIHtQb3BwZXIucGxhY2VtZW50c30gcGxhY2VtZW50PSdib3R0b20nXG4gICAqL1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIHlvdSB3YW50IHBvcHBlciB0byBwb3NpdGlvbiBpdCBzZWxmIGluICdmaXhlZCcgbW9kZVxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcG9zaXRpb25GaXhlZD1mYWxzZVxuICAgKi9cbiAgcG9zaXRpb25GaXhlZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZXZlbnRzIChyZXNpemUsIHNjcm9sbCkgYXJlIGluaXRpYWxseSBlbmFibGVkLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gZXZlbnRzRW5hYmxlZD10cnVlXG4gICAqL1xuICBldmVudHNFbmFibGVkOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgcG9wcGVyIHdoZW5cbiAgICogeW91IGNhbGwgdGhlIGBkZXN0cm95YCBtZXRob2QuXG4gICAqIEBwcm9wIHtCb29sZWFufSByZW1vdmVPbkRlc3Ryb3k9ZmFsc2VcbiAgICovXG4gIHJlbW92ZU9uRGVzdHJveTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgY3JlYXRlZC48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25DcmVhdGV9XG4gICAqL1xuICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoKSB7fSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLiBUaGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICogb24gdGhlIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uIG9mIHRoZSBwb3BwZXIsIGJ1dCBvbmx5IG9uIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAqL1xuICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoKSB7fSxcblxuICAvKipcbiAgICogTGlzdCBvZiBtb2RpZmllcnMgdXNlZCB0byBtb2RpZnkgdGhlIG9mZnNldHMgYmVmb3JlIHRoZXkgYXJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci5cbiAgICogVGhleSBwcm92aWRlIG1vc3Qgb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBQb3BwZXIuanMuXG4gICAqIEBwcm9wIHttb2RpZmllcnN9XG4gICAqL1xuICBtb2RpZmllcnM6IG1vZGlmaWVyc1xufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgb25DcmVhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIG9uVXBkYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vLyBVdGlsc1xuLy8gTWV0aG9kc1xudmFyIFBvcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgUG9wcGVyLmpzIGluc3RhbmNlLlxuICAgKiBAY2xhc3MgUG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxyZWZlcmVuY2VPYmplY3R9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCAvIFhNTCBlbGVtZW50IHVzZWQgYXMgdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFlvdXIgY3VzdG9tIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIG9uZXMgZGVmaW5lZCBpbiBbRGVmYXVsdHNdKCNkZWZhdWx0cylcbiAgICogQHJldHVybiB7T2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBnZW5lcmF0ZWQgUG9wcGVyLmpzIGluc3RhbmNlXG4gICAqL1xuICBmdW5jdGlvbiBQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHBlcik7XG5cbiAgICB0aGlzLnNjaGVkdWxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGhpcy51cGRhdGUpO1xuICAgIH07XG5cbiAgICAvLyBtYWtlIHVwZGF0ZSgpIGRlYm91bmNlZCwgc28gdGhhdCBpdCBvbmx5IHJ1bnMgYXQgbW9zdCBvbmNlLXBlci10aWNrXG4gICAgdGhpcy51cGRhdGUgPSBkZWJvdW5jZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIHdpdGgge30gd2UgY3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvcHRpb25zIGluc2lkZSBpdFxuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgLy8gaW5pdCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgICBpc0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgc2Nyb2xsUGFyZW50czogW11cbiAgICB9O1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSBhbmQgcG9wcGVyIGVsZW1lbnRzIChhbGxvdyBqUXVlcnkgd3JhcHBlcnMpXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLmpxdWVyeSA/IHJlZmVyZW5jZVswXSA6IHJlZmVyZW5jZTtcbiAgICB0aGlzLnBvcHBlciA9IHBvcHBlciAmJiBwb3BwZXIuanF1ZXJ5ID8gcG9wcGVyWzBdIDogcG9wcGVyO1xuXG4gICAgLy8gRGVlcCBtZXJnZSBtb2RpZmllcnMgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVycywgb3B0aW9ucy5tb2RpZmllcnMpKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBfdGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA9IF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzW25hbWVdIHx8IHt9LCBvcHRpb25zLm1vZGlmaWVycyA/IG9wdGlvbnMubW9kaWZpZXJzW25hbWVdIDoge30pO1xuICAgIH0pO1xuXG4gICAgLy8gUmVmYWN0b3JpbmcgbW9kaWZpZXJzJyBsaXN0IChPYmplY3QgPT4gQXJyYXkpXG4gICAgdGhpcy5tb2RpZmllcnMgPSBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubW9kaWZpZXJzKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICAgIH0sIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdKTtcbiAgICB9KVxuICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XG4gICAgfSk7XG5cbiAgICAvLyBtb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIHdoZW4gUG9wcGVyLmpzIGdldCBpbml0ZWRcbiAgICAvLyBzdWNoIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgb2YgaXRzIG1vZGlmaWVyXG4gICAgLy8gdGhleSBjb3VsZCBhZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlaXIgb3B0aW9ucyBjb25maWd1cmF0aW9uXG4gICAgLy8gQkUgQVdBUkU6IGRvbid0IGFkZCBvcHRpb25zIHRvIGBvcHRpb25zLm1vZGlmaWVycy5uYW1lYCBidXQgdG8gYG1vZGlmaWVyT3B0aW9uc2AhXG4gICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXJPcHRpb25zKSB7XG4gICAgICBpZiAobW9kaWZpZXJPcHRpb25zLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihtb2RpZmllck9wdGlvbnMub25Mb2FkKSkge1xuICAgICAgICBtb2RpZmllck9wdGlvbnMub25Mb2FkKF90aGlzLnJlZmVyZW5jZSwgX3RoaXMucG9wcGVyLCBfdGhpcy5vcHRpb25zLCBtb2RpZmllck9wdGlvbnMsIF90aGlzLnN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpcmUgdGhlIGZpcnN0IHVwZGF0ZSB0byBwb3NpdGlvbiB0aGUgcG9wcGVyIGluIHRoZSByaWdodCBwbGFjZVxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB2YXIgZXZlbnRzRW5hYmxlZCA9IHRoaXMub3B0aW9ucy5ldmVudHNFbmFibGVkO1xuICAgIGlmIChldmVudHNFbmFibGVkKSB7XG4gICAgICAvLyBzZXR1cCBldmVudCBsaXN0ZW5lcnMsIHRoZXkgd2lsbCB0YWtlIGNhcmUgb2YgdXBkYXRlIHRoZSBwb3NpdGlvbiBpbiBzcGVjaWZpYyBzaXR1YXRpb25zXG4gICAgICB0aGlzLmVuYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkID0gZXZlbnRzRW5hYmxlZDtcbiAgfVxuXG4gIC8vIFdlIGNhbid0IHVzZSBjbGFzcyBwcm9wZXJ0aWVzIGJlY2F1c2UgdGhleSBkb24ndCBnZXQgbGlzdGVkIGluIHRoZVxuICAvLyBjbGFzcyBwcm90b3R5cGUgYW5kIGJyZWFrIHN0dWZmIGxpa2UgU2lub24gc3R1YnNcblxuXG4gIGNyZWF0ZUNsYXNzKFBvcHBlciwgW3tcbiAgICBrZXk6ICd1cGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUkJDEoKSB7XG4gICAgICByZXR1cm4gdXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3kkJDEoKSB7XG4gICAgICByZXR1cm4gZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuYWJsZUV2ZW50TGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMkJDEoKSB7XG4gICAgICByZXR1cm4gZW5hYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMkJDEoKSB7XG4gICAgICByZXR1cm4gZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGFuIHVwZGF0ZS4gSXQgd2lsbCBydW4gb24gdGhlIG5leHQgVUkgdXBkYXRlIGF2YWlsYWJsZS5cbiAgICAgKiBAbWV0aG9kIHNjaGVkdWxlVXBkYXRlXG4gICAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIHV0aWxpdGllcyB1c2VmdWwgd2hlbiB3cml0aW5nIGN1c3RvbSBtb2RpZmllcnMuXG4gICAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAgICogaW5jbHVkZSBgcG9wcGVyLXV0aWxzLmpzYCBiZWZvcmUgYHBvcHBlci5qc2AuXG4gICAgICpcbiAgICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAgICogYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MiEgVXNlIHRoZSBQb3BwZXJVdGlscyBtb2R1bGUgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICAgKiBEdWUgdG8gdGhlIGhpZ2ggaW5zdGFiaWxpdHkgb2YgdGhlIG1ldGhvZHMgY29udGFpbmVkIGluIFV0aWxzLCB3ZSBjYW4ndFxuICAgICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuOFxuICAgICAqIEBtZW1iZXIgVXRpbHNcbiAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICovXG5cbiAgfV0pO1xuICByZXR1cm4gUG9wcGVyO1xufSgpO1xuXG4vKipcbiAqIFRoZSBgcmVmZXJlbmNlT2JqZWN0YCBpcyBhbiBvYmplY3QgdGhhdCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgY29tcGF0aWJsZSB3aXRoIFBvcHBlci5qc1xuICogYW5kIGxldHMgeW91IHVzZSBpdCBhcyByZXBsYWNlbWVudCBvZiBhIHJlYWwgRE9NIG5vZGUuPGJyIC8+XG4gKiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBwb3NpdGlvbiBhIHBvcHBlciByZWxhdGl2ZWx5IHRvIGEgc2V0IG9mIGNvb3JkaW5hdGVzXG4gKiBpbiBjYXNlIHlvdSBkb24ndCBoYXZlIGEgRE9NIG5vZGUgdG8gdXNlIGFzIHJlZmVyZW5jZS5cbiAqXG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmZXJlbmNlT2JqZWN0LCBwb3BwZXJOb2RlKTtcbiAqIGBgYFxuICpcbiAqIE5COiBUaGlzIGZlYXR1cmUgaXNuJ3Qgc3VwcG9ydGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuICogQG5hbWUgcmVmZXJlbmNlT2JqZWN0XG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBkYXRhLmdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzZXQgb2YgY29vcmRpbmF0ZXMgY29tcGF0aWJsZSB3aXRoIHRoZSBuYXRpdmUgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgbWV0aG9kLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50V2lkdGhcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgd2lkdGggb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRIZWlnaHRcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICovXG5cblxuUG9wcGVyLlV0aWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKS5Qb3BwZXJVdGlscztcblBvcHBlci5wbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblBvcHBlci5EZWZhdWx0cyA9IERlZmF1bHRzO1xuXG5leHBvcnQgZGVmYXVsdCBQb3BwZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3BwZXIuanMubWFwXG4iLCIvKiohXG4qIHRpcHB5LmpzIHY0LjMuNVxuKiAoYykgMjAxNy0yMDE5IGF0b21pa3NcbiogTUlUIExpY2Vuc2VcbiovXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcyc7XG5cbnZhciBjc3MgPSBcIi50aXBweS1pT1N7Y3Vyc29yOnBvaW50ZXIhaW1wb3J0YW50Oy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0udGlwcHktcG9wcGVye3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTY1LC44NCwuNDQsMSk7bWF4LXdpZHRoOmNhbGMoMTAwJSAtIDhweCk7cG9pbnRlci1ldmVudHM6bm9uZTtvdXRsaW5lOjB9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSAudGlwcHktYmFja2Ryb3B7Ym9yZGVyLXJhZGl1czo0MCUgNDAlIDAgMH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIC50aXBweS1yb3VuZGFycm93e2JvdHRvbTotN3B4O2JvdHRvbTotNi41cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAwO3RyYW5zZm9ybS1vcmlnaW46NTAlIDA7bWFyZ2luOjAgM3B4fS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXRvcF0gLnRpcHB5LXJvdW5kYXJyb3cgc3Zne3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSAudGlwcHktYXJyb3d7Ym9yZGVyLXRvcDo4cHggc29saWQgIzMzMztib3JkZXItcmlnaHQ6OHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0OjhweCBzb2xpZCB0cmFuc3BhcmVudDtib3R0b206LTdweDttYXJnaW46MCAzcHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAwO3RyYW5zZm9ybS1vcmlnaW46NTAlIDB9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSAudGlwcHktYmFja2Ryb3B7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMjUlO3RyYW5zZm9ybS1vcmlnaW46MCAyNSV9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSAudGlwcHktYmFja2Ryb3BbZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwtNTUlKTt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsLTU1JSl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSAudGlwcHktYmFja2Ryb3BbZGF0YS1zdGF0ZT1oaWRkZW5dey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4yKSB0cmFuc2xhdGUoLTUwJSwtNDUlKTt0cmFuc2Zvcm06c2NhbGUoLjIpIHRyYW5zbGF0ZSgtNTAlLC00NSUpO29wYWNpdHk6MH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC10b3dhcmRdW2RhdGEtc3RhdGU9dmlzaWJsZV17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXRvcF0gW2RhdGEtYW5pbWF0aW9uPXNoaWZ0LXRvd2FyZF1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpib3R0b207dHJhbnNmb3JtLW9yaWdpbjpib3R0b219LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdW2RhdGEtc3RhdGU9dmlzaWJsZV17LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNzAwcHgpIHRyYW5zbGF0ZVkoLTEwcHgpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg3MDBweCkgdHJhbnNsYXRlWSgtMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNzAwcHgpIHJvdGF0ZVgoNjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg3MDBweCkgcm90YXRlWCg2MGRlZyl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249ZmFkZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249ZmFkZV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249c2hpZnQtYXdheV1bZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249c2hpZnQtYXdheV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV17LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249c2NhbGVdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoLjUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSguNSl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSAudGlwcHktYmFja2Ryb3B7Ym9yZGVyLXJhZGl1czowIDAgMzAlIDMwJX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIC50aXBweS1yb3VuZGFycm93e3RvcDotN3B4Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSAxMDAlO21hcmdpbjowIDNweH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIC50aXBweS1yb3VuZGFycm93IHN2Z3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjB9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSAudGlwcHktYXJyb3d7Ym9yZGVyLWJvdHRvbTo4cHggc29saWQgIzMzMztib3JkZXItcmlnaHQ6OHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0OjhweCBzb2xpZCB0cmFuc3BhcmVudDt0b3A6LTdweDttYXJnaW46MCAzcHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxMDAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDEwMCV9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSAudGlwcHktYmFja2Ryb3B7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgLTUwJTt0cmFuc2Zvcm0tb3JpZ2luOjAgLTUwJX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIC50aXBweS1iYWNrZHJvcFtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLC00NSUpO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwtNDUlKX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIC50aXBweS1iYWNrZHJvcFtkYXRhLXN0YXRlPWhpZGRlbl17LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjIpIHRyYW5zbGF0ZSgtNTAlKTt0cmFuc2Zvcm06c2NhbGUoLjIpIHRyYW5zbGF0ZSgtNTAlKTtvcGFjaXR5OjB9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSBbZGF0YS1hbmltYXRpb249c2hpZnQtdG93YXJkXVtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSBbZGF0YS1hbmltYXRpb249c2hpZnQtdG93YXJkXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3A7dHJhbnNmb3JtLW9yaWdpbjp0b3B9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdW2RhdGEtc3RhdGU9dmlzaWJsZV17LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNzAwcHgpIHRyYW5zbGF0ZVkoMTBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDcwMHB4KSB0cmFuc2xhdGVZKDEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWJvdHRvbV0gW2RhdGEtYW5pbWF0aW9uPXBlcnNwZWN0aXZlXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDcwMHB4KSByb3RhdGVYKC02MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDcwMHB4KSByb3RhdGVYKC02MGRlZyl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSBbZGF0YS1hbmltYXRpb249ZmFkZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWJvdHRvbV0gW2RhdGEtYW5pbWF0aW9uPWZhZGVdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC1hd2F5XVtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSBbZGF0YS1hbmltYXRpb249c2hpZnQtYXdheV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV17LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnRvcDt0cmFuc2Zvcm0tb3JpZ2luOnRvcH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWJvdHRvbV0gW2RhdGEtYW5pbWF0aW9uPXNjYWxlXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCkgc2NhbGUoLjUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpIHNjYWxlKC41KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSAudGlwcHktYmFja2Ryb3B7Ym9yZGVyLXJhZGl1czo1MCUgMCAwIDUwJX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSAudGlwcHktcm91bmRhcnJvd3tyaWdodDotMTJweDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MzMuMzMzMzMzMzMlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjMzLjMzMzMzMzMzJSA1MCU7bWFyZ2luOjNweCAwfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIC50aXBweS1yb3VuZGFycm93IHN2Z3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSAudGlwcHktYXJyb3d7Ym9yZGVyLWxlZnQ6OHB4IHNvbGlkICMzMzM7Ym9yZGVyLXRvcDo4cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbTo4cHggc29saWQgdHJhbnNwYXJlbnQ7cmlnaHQ6LTdweDttYXJnaW46M3B4IDA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNTAlO3RyYW5zZm9ybS1vcmlnaW46MCA1MCV9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gLnRpcHB5LWJhY2tkcm9wey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgMDt0cmFuc2Zvcm0tb3JpZ2luOjUwJSAwfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIC50aXBweS1iYWNrZHJvcFtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwtNTAlKX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSAudGlwcHktYmFja2Ryb3BbZGF0YS1zdGF0ZT1oaWRkZW5dey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4yKSB0cmFuc2xhdGUoLTc1JSwtNTAlKTt0cmFuc2Zvcm06c2NhbGUoLjIpIHRyYW5zbGF0ZSgtNzUlLC01MCUpO29wYWNpdHk6MH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSBbZGF0YS1hbmltYXRpb249c2hpZnQtdG93YXJkXVtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSBbZGF0YS1hbmltYXRpb249c2hpZnQtdG93YXJkXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0fS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIFtkYXRhLWFuaW1hdGlvbj1wZXJzcGVjdGl2ZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg3MDBweCkgdHJhbnNsYXRlWCgtMTBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDcwMHB4KSB0cmFuc2xhdGVYKC0xMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNzAwcHgpIHJvdGF0ZVkoLTYwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNzAwcHgpIHJvdGF0ZVkoLTYwZGVnKX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSBbZGF0YS1hbmltYXRpb249ZmFkZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gW2RhdGEtYW5pbWF0aW9uPWZhZGVdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC1hd2F5XVtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSBbZGF0YS1hbmltYXRpb249c2hpZnQtYXdheV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSBbZGF0YS1hbmltYXRpb249c2NhbGVdey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0fS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gW2RhdGEtYW5pbWF0aW9uPXNjYWxlXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpIHNjYWxlKC41KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCkgc2NhbGUoLjUpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSAudGlwcHktYmFja2Ryb3B7Ym9yZGVyLXJhZGl1czowIDUwJSA1MCUgMH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1yaWdodF0gLnRpcHB5LXJvdW5kYXJyb3d7bGVmdDotMTJweDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NjYuNjY2NjY2NjYlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjY2LjY2NjY2NjY2JSA1MCU7bWFyZ2luOjNweCAwfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSAudGlwcHktcm91bmRhcnJvdyBzdmd7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1yaWdodF0gLnRpcHB5LWFycm93e2JvcmRlci1yaWdodDo4cHggc29saWQgIzMzMztib3JkZXItdG9wOjhweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjhweCBzb2xpZCB0cmFuc3BhcmVudDtsZWZ0Oi03cHg7bWFyZ2luOjNweCAwOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgNTAlfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSAudGlwcHktYmFja2Ryb3B7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOi01MCUgMDt0cmFuc2Zvcm0tb3JpZ2luOi01MCUgMH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1yaWdodF0gLnRpcHB5LWJhY2tkcm9wW2RhdGEtc3RhdGU9dmlzaWJsZV17LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLC01MCUpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSAudGlwcHktYmFja2Ryb3BbZGF0YS1zdGF0ZT1oaWRkZW5dey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4yKSB0cmFuc2xhdGUoLTI1JSwtNTAlKTt0cmFuc2Zvcm06c2NhbGUoLjIpIHRyYW5zbGF0ZSgtMjUlLC01MCUpO29wYWNpdHk6MH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1yaWdodF0gW2RhdGEtYW5pbWF0aW9uPXNoaWZ0LXRvd2FyZF1bZGF0YS1zdGF0ZT12aXNpYmxlXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249c2hpZnQtdG93YXJkXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1wZXJzcGVjdGl2ZV17LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQ7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0fS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdW2RhdGEtc3RhdGU9dmlzaWJsZV17LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNzAwcHgpIHRyYW5zbGF0ZVgoMTBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDcwMHB4KSB0cmFuc2xhdGVYKDEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNzAwcHgpIHJvdGF0ZVkoNjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg3MDBweCkgcm90YXRlWSg2MGRlZyl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1mYWRlXVtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1mYWRlXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC1hd2F5XVtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC1hd2F5XVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249c2NhbGVdey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0O3RyYW5zZm9ybS1vcmlnaW46bGVmdH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1yaWdodF0gW2RhdGEtYW5pbWF0aW9uPXNjYWxlXVtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpIHNjYWxlKC41KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMHB4KSBzY2FsZSguNSl9LnRpcHB5LXRvb2x0aXB7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOi4yNXJlbTtmb250LXNpemU6Ljg3NXJlbTtwYWRkaW5nOi4zMTI1cmVtIC41NjI1cmVtO2xpbmUtaGVpZ2h0OjEuNDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzN9LnRpcHB5LXRvb2x0aXBbZGF0YS1zaXplPXNtYWxsXXtwYWRkaW5nOi4xODc1cmVtIC4zNzVyZW07Zm9udC1zaXplOi43NXJlbX0udGlwcHktdG9vbHRpcFtkYXRhLXNpemU9bGFyZ2Vde3BhZGRpbmc6LjM3NXJlbSAuNzVyZW07Zm9udC1zaXplOjFyZW19LnRpcHB5LXRvb2x0aXBbZGF0YS1hbmltYXRlZmlsbF17b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6aW5pdGlhbH0udGlwcHktdG9vbHRpcFtkYXRhLWludGVyYWN0aXZlXSwudGlwcHktdG9vbHRpcFtkYXRhLWludGVyYWN0aXZlXSAudGlwcHktcm91bmRhcnJvdyBwYXRoe3BvaW50ZXItZXZlbnRzOmF1dG99LnRpcHB5LXRvb2x0aXBbZGF0YS1pbmVydGlhXVtkYXRhLXN0YXRlPXZpc2libGVde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTQsMS41LC4zOCwxLjExKX0udGlwcHktdG9vbHRpcFtkYXRhLWluZXJ0aWFdW2RhdGEtc3RhdGU9aGlkZGVuXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlfS50aXBweS1hcnJvdywudGlwcHktcm91bmRhcnJvd3twb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowO2hlaWdodDowfS50aXBweS1yb3VuZGFycm93e3dpZHRoOjE4cHg7aGVpZ2h0OjdweDtmaWxsOiMzMzM7cG9pbnRlci1ldmVudHM6bm9uZX0udGlwcHktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1jb2xvcjojMzMzO2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOmNhbGMoMTEwJSArIDJyZW0pO2xlZnQ6NTAlO3RvcDo1MCU7ei1pbmRleDotMTt0cmFuc2l0aW9uOmFsbCBjdWJpYy1iZXppZXIoLjQ2LC4xLC41MiwuOTgpOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LnRpcHB5LWJhY2tkcm9wOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7ZmxvYXQ6bGVmdDtwYWRkaW5nLXRvcDoxMDAlfS50aXBweS1iYWNrZHJvcCsudGlwcHktY29udGVudHt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7d2lsbC1jaGFuZ2U6b3BhY2l0eX0udGlwcHktYmFja2Ryb3ArLnRpcHB5LWNvbnRlbnRbZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MH1cIjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxudmFyIHZlcnNpb24gPSBcIjQuMy41XCI7XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xudmFyIHVhID0gaXNCcm93c2VyID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6ICcnO1xudmFyIGlzSUUgPSAvTVNJRSB8VHJpZGVudFxcLy8udGVzdCh1YSk7XG52YXIgaXNVQ0Jyb3dzZXIgPSAvVUNCcm93c2VyXFwvLy50ZXN0KHVhKTtcbnZhciBpc0lPUyA9IGlzQnJvd3NlciAmJiAvaVBob25lfGlQYWR8aVBvZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pICYmICF3aW5kb3cuTVNTdHJlYW07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGExMXk6IHRydWUsXG4gIGFsbG93SFRNTDogdHJ1ZSxcbiAgYW5pbWF0ZUZpbGw6IHRydWUsXG4gIGFuaW1hdGlvbjogJ3NoaWZ0LWF3YXknLFxuICBhcHBlbmRUbzogZnVuY3Rpb24gYXBwZW5kVG8oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH0sXG4gIGFyaWE6ICdkZXNjcmliZWRieScsXG4gIGFycm93OiBmYWxzZSxcbiAgYXJyb3dUeXBlOiAnc2hhcnAnLFxuICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gIGNvbnRlbnQ6ICcnLFxuICBkZWxheTogMCxcbiAgZGlzdGFuY2U6IDEwLFxuICBkdXJhdGlvbjogWzMyNSwgMjc1XSxcbiAgZmxpcDogdHJ1ZSxcbiAgZmxpcEJlaGF2aW9yOiAnZmxpcCcsXG4gIGZsaXBPblVwZGF0ZTogZmFsc2UsXG4gIGZvbGxvd0N1cnNvcjogZmFsc2UsXG4gIGhpZGVPbkNsaWNrOiB0cnVlLFxuICBpZ25vcmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgaW5lcnRpYTogZmFsc2UsXG4gIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmVCb3JkZXI6IDIsXG4gIGludGVyYWN0aXZlRGVib3VuY2U6IDAsXG4gIGxhenk6IHRydWUsXG4gIG1heFdpZHRoOiAzNTAsXG4gIG11bHRpcGxlOiBmYWxzZSxcbiAgb2Zmc2V0OiAwLFxuICBvbkhpZGRlbjogZnVuY3Rpb24gb25IaWRkZW4oKSB7fSxcbiAgb25IaWRlOiBmdW5jdGlvbiBvbkhpZGUoKSB7fSxcbiAgb25Nb3VudDogZnVuY3Rpb24gb25Nb3VudCgpIHt9LFxuICBvblNob3c6IGZ1bmN0aW9uIG9uU2hvdygpIHt9LFxuICBvblNob3duOiBmdW5jdGlvbiBvblNob3duKCkge30sXG4gIG9uVHJpZ2dlcjogZnVuY3Rpb24gb25UcmlnZ2VyKCkge30sXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIHBvcHBlck9wdGlvbnM6IHt9LFxuICByb2xlOiAndG9vbHRpcCcsXG4gIHNob3dPbkluaXQ6IGZhbHNlLFxuICBzaXplOiAncmVndWxhcicsXG4gIHN0aWNreTogZmFsc2UsXG4gIHRhcmdldDogJycsXG4gIHRoZW1lOiAnZGFyaycsXG4gIHRvdWNoOiB0cnVlLFxuICB0b3VjaEhvbGQ6IGZhbHNlLFxuICB0cmlnZ2VyOiAnbW91c2VlbnRlciBmb2N1cycsXG4gIHRyaWdnZXJUYXJnZXQ6IG51bGwsXG4gIHVwZGF0ZUR1cmF0aW9uOiAwLFxuICB3YWl0OiBudWxsLFxuICB6SW5kZXg6IDk5OTlcbiAgLyoqXG4gICAqIElmIHRoZSBzZXQoKSBtZXRob2QgZW5jb3VudGVycyBvbmUgb2YgdGhlc2UsIHRoZSBwb3BwZXJJbnN0YW5jZSBtdXN0IGJlXG4gICAqIHJlY3JlYXRlZFxuICAgKi9cblxufTtcbnZhciBQT1BQRVJfSU5TVEFOQ0VfREVQRU5ERU5DSUVTID0gWydhcnJvdycsICdhcnJvd1R5cGUnLCAnYm91bmRhcnknLCAnZGlzdGFuY2UnLCAnZmxpcCcsICdmbGlwQmVoYXZpb3InLCAnZmxpcE9uVXBkYXRlJywgJ29mZnNldCcsICdwbGFjZW1lbnQnLCAncG9wcGVyT3B0aW9ucyddO1xuXG52YXIgZWxlbWVudFByb3RvID0gaXNCcm93c2VyID8gRWxlbWVudC5wcm90b3R5cGUgOiB7fTtcbnZhciBtYXRjaGVzID0gZWxlbWVudFByb3RvLm1hdGNoZXMgfHwgZWxlbWVudFByb3RvLm1hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50UHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1lbnRQcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudFByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yO1xuLyoqXG4gKiBQb255ZmlsbCBmb3IgQXJyYXkuZnJvbSAtIGNvbnZlcnRzIGl0ZXJhYmxlIHZhbHVlcyB0byBhbiBhcnJheVxuICovXG5cbmZ1bmN0aW9uIGFycmF5RnJvbSh2YWx1ZSkge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbCh2YWx1ZSk7XG59XG4vKipcbiAqIFBvbnlmaWxsIGZvciBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0XG4gKi9cblxuZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gY2xvc2VzdENhbGxiYWNrKGVsZW1lbnQsIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBtYXRjaGVzLmNhbGwoZWwsIHNlbGVjdG9yKTtcbiAgfSk7XG59XG4vKipcbiAqIFdvcmtzIGxpa2UgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCwgYnV0IHVzZXMgYSBjYWxsYmFjayBpbnN0ZWFkXG4gKi9cblxuZnVuY3Rpb24gY2xvc2VzdENhbGxiYWNrKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIHdoaWxlIChlbGVtZW50KSB7XG4gICAgaWYgKGNhbGxiYWNrKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIFBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgY29uZmlnXG52YXIgUEFTU0lWRSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZSAvLyBQb3BwZXIgYHByZXZlbnRPdmVyZmxvd2AgcGFkZGluZ1xuXG59O1xudmFyIFBBRERJTkcgPSA0OyAvLyBQb3BwZXIgYXR0cmlidXRlc1xuLy8gSW4gUG9wcGVyIHYyIHRoZXNlIHdpbGwgYmUgYGRhdGEtKmAgaW5zdGVhZCBvZiBgeC0qYCB0byBhZGhlcmUgdG8gSFRNTDUgc3BlY1xuXG52YXIgUExBQ0VNRU5UX0FUVFJJQlVURSA9ICd4LXBsYWNlbWVudCc7XG52YXIgT1VUX09GX0JPVU5EQVJJRVNfQVRUUklCVVRFID0gJ3gtb3V0LW9mLWJvdW5kYXJpZXMnOyAvLyBDbGFzc2VzXG5cbnZhciBJT1NfQ0xBU1MgPSBcInRpcHB5LWlPU1wiO1xudmFyIEFDVElWRV9DTEFTUyA9IFwidGlwcHktYWN0aXZlXCI7XG52YXIgUE9QUEVSX0NMQVNTID0gXCJ0aXBweS1wb3BwZXJcIjtcbnZhciBUT09MVElQX0NMQVNTID0gXCJ0aXBweS10b29sdGlwXCI7XG52YXIgQ09OVEVOVF9DTEFTUyA9IFwidGlwcHktY29udGVudFwiO1xudmFyIEJBQ0tEUk9QX0NMQVNTID0gXCJ0aXBweS1iYWNrZHJvcFwiO1xudmFyIEFSUk9XX0NMQVNTID0gXCJ0aXBweS1hcnJvd1wiO1xudmFyIFJPVU5EX0FSUk9XX0NMQVNTID0gXCJ0aXBweS1yb3VuZGFycm93XCI7IC8vIFNlbGVjdG9yc1xuXG52YXIgUE9QUEVSX1NFTEVDVE9SID0gXCIuXCIuY29uY2F0KFBPUFBFUl9DTEFTUyk7XG52YXIgVE9PTFRJUF9TRUxFQ1RPUiA9IFwiLlwiLmNvbmNhdChUT09MVElQX0NMQVNTKTtcbnZhciBDT05URU5UX1NFTEVDVE9SID0gXCIuXCIuY29uY2F0KENPTlRFTlRfQ0xBU1MpO1xudmFyIEJBQ0tEUk9QX1NFTEVDVE9SID0gXCIuXCIuY29uY2F0KEJBQ0tEUk9QX0NMQVNTKTtcbnZhciBBUlJPV19TRUxFQ1RPUiA9IFwiLlwiLmNvbmNhdChBUlJPV19DTEFTUyk7XG52YXIgUk9VTkRfQVJST1dfU0VMRUNUT1IgPSBcIi5cIi5jb25jYXQoUk9VTkRfQVJST1dfQ0xBU1MpO1xuXG52YXIgaXNVc2luZ1RvdWNoID0gZmFsc2U7XG5mdW5jdGlvbiBvbkRvY3VtZW50VG91Y2goKSB7XG4gIGlmIChpc1VzaW5nVG91Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpc1VzaW5nVG91Y2ggPSB0cnVlO1xuXG4gIGlmIChpc0lPUykge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChJT1NfQ0xBU1MpO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRG9jdW1lbnRNb3VzZU1vdmUpO1xuICB9XG59XG52YXIgbGFzdE1vdXNlTW92ZVRpbWUgPSAwO1xuZnVuY3Rpb24gb25Eb2N1bWVudE1vdXNlTW92ZSgpIHtcbiAgdmFyIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpOyAvLyBDaHJvbWUgNjArIGlzIDEgbW91c2Vtb3ZlIHBlciBhbmltYXRpb24gZnJhbWUsIHVzZSAyMG1zIHRpbWUgZGlmZmVyZW5jZVxuXG4gIGlmIChub3cgLSBsYXN0TW91c2VNb3ZlVGltZSA8IDIwKSB7XG4gICAgaXNVc2luZ1RvdWNoID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG5cbiAgICBpZiAoIWlzSU9TKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoSU9TX0NMQVNTKTtcbiAgICB9XG4gIH1cblxuICBsYXN0TW91c2VNb3ZlVGltZSA9IG5vdztcbn1cbmZ1bmN0aW9uIG9uV2luZG93Qmx1cigpIHtcbiAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LFxuICAgICAgYWN0aXZlRWxlbWVudCA9IF9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuYmx1ciAmJiBhY3RpdmVFbGVtZW50Ll90aXBweSkge1xuICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG59XG4vKipcbiAqIEFkZHMgdGhlIG5lZWRlZCBnbG9iYWwgZXZlbnQgbGlzdGVuZXJzXG4gKi9cblxuZnVuY3Rpb24gYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Eb2N1bWVudFRvdWNoLCBQQVNTSVZFKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbldpbmRvd0JsdXIpO1xufVxuXG52YXIga2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wcyk7XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IG9mIG9wdGlvbmFsIHByb3BzIGZyb20gZGF0YS10aXBweS0qIGF0dHJpYnV0ZXNcbiAqL1xuXG5mdW5jdGlvbiBnZXREYXRhQXR0cmlidXRlT3B0aW9ucyhyZWZlcmVuY2UpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIHZhciB2YWx1ZUFzU3RyaW5nID0gKHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpcHB5LVwiLmNvbmNhdChrZXkpKSB8fCAnJykudHJpbSgpO1xuXG4gICAgaWYgKCF2YWx1ZUFzU3RyaW5nKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgYWNjW2tleV0gPSB2YWx1ZUFzU3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBhY2Nba2V5XSA9IEpTT04ucGFyc2UodmFsdWVBc1N0cmluZyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFjY1trZXldID0gdmFsdWVBc1N0cmluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG4vKipcbiAqIFBvbHlmaWxscyB0aGUgdmlydHVhbCByZWZlcmVuY2UgKHBsYWluIG9iamVjdCkgd2l0aCBFbGVtZW50LnByb3RvdHlwZSBwcm9wc1xuICogTXV0YXRpbmcgYmVjYXVzZSBET00gZWxlbWVudHMgYXJlIG11dGF0ZWQsIGFkZHMgYF90aXBweWAgcHJvcGVydHlcbiAqL1xuXG5mdW5jdGlvbiBwb2x5ZmlsbEVsZW1lbnRQcm90b3R5cGVQcm9wZXJ0aWVzKHZpcnR1YWxSZWZlcmVuY2UpIHtcbiAgdmFyIHBvbHlmaWxscyA9IHtcbiAgICBpc1ZpcnR1YWw6IHRydWUsXG4gICAgYXR0cmlidXRlczogdmlydHVhbFJlZmVyZW5jZS5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgIGNvbnRhaW5zOiBmdW5jdGlvbiBjb250YWlucygpIHt9LFxuICAgIHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgIHZpcnR1YWxSZWZlcmVuY2UuYXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShrZXkpIHtcbiAgICAgIHJldHVybiB2aXJ0dWFsUmVmZXJlbmNlLmF0dHJpYnV0ZXNba2V5XTtcbiAgICB9LFxuICAgIHJlbW92ZUF0dHJpYnV0ZTogZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGtleSkge1xuICAgICAgZGVsZXRlIHZpcnR1YWxSZWZlcmVuY2UuYXR0cmlidXRlc1trZXldO1xuICAgIH0sXG4gICAgaGFzQXR0cmlidXRlOiBmdW5jdGlvbiBoYXNBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5IGluIHZpcnR1YWxSZWZlcmVuY2UuYXR0cmlidXRlcztcbiAgICB9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKCkge30sXG4gICAgY2xhc3NMaXN0OiB7XG4gICAgICBjbGFzc05hbWVzOiB7fSxcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKGtleSkge1xuICAgICAgICB2aXJ0dWFsUmVmZXJlbmNlLmNsYXNzTGlzdC5jbGFzc05hbWVzW2tleV0gPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xuICAgICAgICBkZWxldGUgdmlydHVhbFJlZmVyZW5jZS5jbGFzc0xpc3QuY2xhc3NOYW1lc1trZXldO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5zOiBmdW5jdGlvbiBjb250YWlucyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSBpbiB2aXJ0dWFsUmVmZXJlbmNlLmNsYXNzTGlzdC5jbGFzc05hbWVzO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcG9seWZpbGxzKSB7XG4gICAgdmlydHVhbFJlZmVyZW5jZVtrZXldID0gcG9seWZpbGxzW2tleV07XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYSBcImJhcmVcIiB2aXJ0dWFsIGVsZW1lbnQgKGJlZm9yZSBtdXRhdGlvbnMgZG9uZVxuICogYnkgYHBvbHlmaWxsRWxlbWVudFByb3RvdHlwZVByb3BlcnRpZXMoKWApLiBKU0RPTSBlbGVtZW50cyBzaG93IHVwIGFzXG4gKiBbb2JqZWN0IE9iamVjdF0sIHdlIGNhbiBjaGVjayBpZiB0aGUgdmFsdWUgaXMgXCJlbGVtZW50LWxpa2VcIiBpZiBpdCBoYXNcbiAqIGBhZGRFdmVudExpc3RlbmVyYFxuICovXG5cbmZ1bmN0aW9uIGlzQmFyZVZpcnR1YWxFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgIXZhbHVlLmFkZEV2ZW50TGlzdGVuZXI7XG59XG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIHZhbHVlIGlzIGEgcmVmZXJlbmNlIGVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBpc1JlZmVyZW5jZUVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUuX3RpcHB5ICYmICFtYXRjaGVzLmNhbGwodmFsdWUsIFBPUFBFUl9TRUxFQ1RPUik7XG59XG4vKipcbiAqIFNhZmUgLmhhc093blByb3BlcnR5IGNoZWNrLCBmb3IgcHJvdG90eXBlLWxlc3Mgb2JqZWN0c1xuICovXG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwga2V5KSB7XG4gIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBlbGVtZW50cyBiYXNlZCBvbiB0aGUgdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiBnZXRBcnJheU9mRWxlbWVudHModmFsdWUpIHtcbiAgaWYgKGlzU2luZ3VsYXIodmFsdWUpKSB7XG4gICAgLy8gVE9ETzogVmlydHVhbFJlZmVyZW5jZSBpcyBub3QgY29tcGF0aWJsZSB0byB0eXBlIEVsZW1lbnRcbiAgICByZXR1cm4gW3ZhbHVlXTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG4gICAgcmV0dXJuIGFycmF5RnJvbSh2YWx1ZSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBhcnJheUZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4vKipcbiAqIFJldHVybnMgYSB2YWx1ZSBhdCBhIGdpdmVuIGluZGV4IGRlcGVuZGluZyBvbiBpZiBpdCdzIGFuIGFycmF5IG9yIG51bWJlclxuICovXG5cbmZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlLCBpbmRleCwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhciB2ID0gdmFsdWVbaW5kZXhdO1xuICAgIHJldHVybiB2ID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiB2O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBEZWJvdW5jZSB1dGlsaXR5LiBUbyBhdm9pZCBibG9hdGluZyBidW5kbGUgc2l6ZSwgd2UncmUgb25seSBwYXNzaW5nIDFcbiAqIGFyZ3VtZW50IGhlcmUsIGEgbW9yZSBnZW5lcmljIGZ1bmN0aW9uIHdvdWxkIHBhc3MgYWxsIGFyZ3VtZW50cy4gT25seVxuICogYG9uTW91c2VNb3ZlYCB1c2VzIHRoaXMgd2hpY2ggdGFrZXMgdGhlIGV2ZW50IG9iamVjdCBmb3Igbm93LlxuICovXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCBtcykge1xuICAvLyBBdm9pZCB3cmFwcGluZyBpbiBgc2V0VGltZW91dGAgaWYgbXMgaXMgMCBhbnl3YXlcbiAgaWYgKG1zID09PSAwKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuKGFyZyk7XG4gICAgfSwgbXMpO1xuICB9O1xufVxuLyoqXG4gKiBQcmV2ZW50cyBlcnJvcnMgZnJvbSBiZWluZyB0aHJvd24gd2hpbGUgYWNjZXNzaW5nIG5lc3RlZCBtb2RpZmllciBvYmplY3RzXG4gKiBpbiBgcG9wcGVyT3B0aW9uc2BcbiAqL1xuXG5mdW5jdGlvbiBnZXRNb2RpZmllcihvYmosIGtleSkge1xuICByZXR1cm4gb2JqICYmIG9iai5tb2RpZmllcnMgJiYgb2JqLm1vZGlmaWVyc1trZXldO1xufVxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGFuIGFycmF5IG9yIHN0cmluZyBpbmNsdWRlcyBhIHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gaW5jbHVkZXMoYSwgYikge1xuICByZXR1cm4gYS5pbmRleE9mKGIpID4gLTE7XG59XG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIHZhbHVlIGlzIGEgcmVhbCBlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gaXNSZWFsRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSB2YWx1ZSBpcyBzaW5ndWxhci1saWtlXG4gKi9cblxuZnVuY3Rpb24gaXNTaW5ndWxhcih2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgaGFzT3duUHJvcGVydHkodmFsdWUsICdpc1ZpcnR1YWwnKSkgfHwgaXNSZWFsRWxlbWVudCh2YWx1ZSk7XG59XG4vKipcbiAqIEZpcmVmb3ggZXh0ZW5zaW9ucyBkb24ndCBhbGxvdyBzZXR0aW5nIC5pbm5lckhUTUwgZGlyZWN0bHksIHRoaXMgd2lsbCB0cmljayBpdFxuICovXG5cbmZ1bmN0aW9uIGlubmVySFRNTCgpIHtcbiAgcmV0dXJuICdpbm5lckhUTUwnO1xufVxuLyoqXG4gKiBFdmFsdWF0ZXMgYSBmdW5jdGlvbiBpZiBvbmUsIG9yIHJldHVybnMgdGhlIHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gaW52b2tlV2l0aEFyZ3NPclJldHVybih2YWx1ZSwgYXJncykge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkobnVsbCwgYXJncykgOiB2YWx1ZTtcbn1cbi8qKlxuICogU2V0cyBhIHBvcHBlckluc3RhbmNlIGBmbGlwYCBtb2RpZmllcidzIGVuYWJsZWQgc3RhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXRGbGlwTW9kaWZpZXJFbmFibGVkKG1vZGlmaWVycywgdmFsdWUpIHtcbiAgbW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBtLm5hbWUgPT09ICdmbGlwJztcbiAgfSlbMF0uZW5hYmxlZCA9IHZhbHVlO1xufVxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGFuIGVsZW1lbnQgY2FuIHJlY2VpdmUgZm9jdXNcbiAqIEFsd2F5cyByZXR1cm5zIHRydWUgZm9yIHZpcnR1YWwgb2JqZWN0c1xuICovXG5cbmZ1bmN0aW9uIGNhblJlY2VpdmVGb2N1cyhlbGVtZW50KSB7XG4gIHJldHVybiBpc1JlYWxFbGVtZW50KGVsZW1lbnQpID8gbWF0Y2hlcy5jYWxsKGVsZW1lbnQsICdhW2hyZWZdLGFyZWFbaHJlZl0sYnV0dG9uLGRldGFpbHMsaW5wdXQsdGV4dGFyZWEsc2VsZWN0LGlmcmFtZSxbdGFiaW5kZXhdJykgJiYgIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIDogdHJ1ZTtcbn1cbi8qKlxuICogUmV0dXJucyBhIG5ldyBgZGl2YCBlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZGl2KCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG59XG4vKipcbiAqIEFwcGxpZXMgYSB0cmFuc2l0aW9uIGR1cmF0aW9uIHRvIGEgbGlzdCBvZiBlbGVtZW50c1xuICovXG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25EdXJhdGlvbihlbHMsIHZhbHVlKSB7XG4gIGVscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gXCJcIi5jb25jYXQodmFsdWUsIFwibXNcIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogU2V0cyB0aGUgdmlzaWJpbGl0eSBzdGF0ZSB0byBlbGVtZW50cyBzbyB0aGV5IGNhbiBiZWdpbiB0byB0cmFuc2l0aW9uXG4gKi9cblxuZnVuY3Rpb24gc2V0VmlzaWJpbGl0eVN0YXRlKGVscywgc3RhdGUpIHtcbiAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBzdGF0ZSk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogRXZhbHVhdGVzIHRoZSBwcm9wcyBvYmplY3QgYnkgbWVyZ2luZyBkYXRhIGF0dHJpYnV0ZXMgYW5kXG4gKiBkaXNhYmxpbmcgY29uZmxpY3Rpbmcgb3B0aW9ucyB3aGVyZSBuZWNlc3NhcnlcbiAqL1xuXG5mdW5jdGlvbiBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwgcHJvcHMpIHtcbiAgdmFyIG91dCA9IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNvbnRlbnQ6IGludm9rZVdpdGhBcmdzT3JSZXR1cm4ocHJvcHMuY29udGVudCwgW3JlZmVyZW5jZV0pXG4gIH0sIHByb3BzLmlnbm9yZUF0dHJpYnV0ZXMgPyB7fSA6IGdldERhdGFBdHRyaWJ1dGVPcHRpb25zKHJlZmVyZW5jZSkpO1xuXG4gIGlmIChvdXQuYXJyb3cgfHwgaXNVQ0Jyb3dzZXIpIHtcbiAgICBvdXQuYW5pbWF0ZUZpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFZhbGlkYXRlcyBhbiBvYmplY3Qgb2Ygb3B0aW9ucyB3aXRoIHRoZSB2YWxpZCBkZWZhdWx0IHByb3BzIG9iamVjdFxuICovXG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3B0aW9ucyhvcHRpb25zLCBkZWZhdWx0UHJvcHMpIHtcbiAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShkZWZhdWx0UHJvcHMsIG9wdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlt0aXBweV06IGBcIi5jb25jYXQob3B0aW9uLCBcImAgaXMgbm90IGEgdmFsaWQgb3B0aW9uXCIpKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGlubmVySFRNTCBvZiBhbiBlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gc2V0SW5uZXJIVE1MKGVsZW1lbnQsIGh0bWwpIHtcbiAgZWxlbWVudFtpbm5lckhUTUwoKV0gPSBpc1JlYWxFbGVtZW50KGh0bWwpID8gaHRtbFtpbm5lckhUTUwoKV0gOiBodG1sO1xufVxuLyoqXG4gKiBTZXRzIHRoZSBjb250ZW50IG9mIGEgdG9vbHRpcFxuICovXG5cbmZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudEVsLCBwcm9wcykge1xuICBpZiAoaXNSZWFsRWxlbWVudChwcm9wcy5jb250ZW50KSkge1xuICAgIHNldElubmVySFRNTChjb250ZW50RWwsICcnKTtcbiAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQocHJvcHMuY29udGVudCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzLmNvbnRlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIga2V5ID0gcHJvcHMuYWxsb3dIVE1MID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnO1xuICAgIGNvbnRlbnRFbFtrZXldID0gcHJvcHMuY29udGVudDtcbiAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjaGlsZCBlbGVtZW50cyBvZiBhIHBvcHBlciBlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW4ocG9wcGVyKSB7XG4gIHJldHVybiB7XG4gICAgdG9vbHRpcDogcG9wcGVyLnF1ZXJ5U2VsZWN0b3IoVE9PTFRJUF9TRUxFQ1RPUiksXG4gICAgYmFja2Ryb3A6IHBvcHBlci5xdWVyeVNlbGVjdG9yKEJBQ0tEUk9QX1NFTEVDVE9SKSxcbiAgICBjb250ZW50OiBwb3BwZXIucXVlcnlTZWxlY3RvcihDT05URU5UX1NFTEVDVE9SKSxcbiAgICBhcnJvdzogcG9wcGVyLnF1ZXJ5U2VsZWN0b3IoQVJST1dfU0VMRUNUT1IpIHx8IHBvcHBlci5xdWVyeVNlbGVjdG9yKFJPVU5EX0FSUk9XX1NFTEVDVE9SKVxuICB9O1xufVxuLyoqXG4gKiBBZGRzIGBkYXRhLWluZXJ0aWFgIGF0dHJpYnV0ZVxuICovXG5cbmZ1bmN0aW9uIGFkZEluZXJ0aWEodG9vbHRpcCkge1xuICB0b29sdGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJywgJycpO1xufVxuLyoqXG4gKiBSZW1vdmVzIGBkYXRhLWluZXJ0aWFgIGF0dHJpYnV0ZVxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUluZXJ0aWEodG9vbHRpcCkge1xuICB0b29sdGlwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJyk7XG59XG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyb3cgZWxlbWVudCBhbmQgcmV0dXJucyBpdFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUFycm93RWxlbWVudChhcnJvd1R5cGUpIHtcbiAgdmFyIGFycm93ID0gZGl2KCk7XG5cbiAgaWYgKGFycm93VHlwZSA9PT0gJ3JvdW5kJykge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IFJPVU5EX0FSUk9XX0NMQVNTO1xuICAgIHNldElubmVySFRNTChhcnJvdywgJzxzdmcgdmlld0JveD1cIjAgMCAxOCA3XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMCA3czIuMDIxLS4wMTUgNS4yNTMtNC4yMThDNi41ODQgMS4wNTEgNy43OTcuMDA3IDkgMGMxLjIwMy0uMDA3IDIuNDE2IDEuMDM1IDMuNzYxIDIuNzgyQzE2LjAxMiA3LjAwNSAxOCA3IDE4IDdIMHpcIi8+PC9zdmc+Jyk7XG4gIH0gZWxzZSB7XG4gICAgYXJyb3cuY2xhc3NOYW1lID0gQVJST1dfQ0xBU1M7XG4gIH1cblxuICByZXR1cm4gYXJyb3c7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBiYWNrZHJvcCBlbGVtZW50IGFuZCByZXR1cm5zIGl0XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQmFja2Ryb3BFbGVtZW50KCkge1xuICB2YXIgYmFja2Ryb3AgPSBkaXYoKTtcbiAgYmFja2Ryb3AuY2xhc3NOYW1lID0gQkFDS0RST1BfQ0xBU1M7XG4gIGJhY2tkcm9wLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdoaWRkZW4nKTtcbiAgcmV0dXJuIGJhY2tkcm9wO1xufVxuLyoqXG4gKiBBZGRzIGludGVyYWN0aXZlLXJlbGF0ZWQgYXR0cmlidXRlc1xuICovXG5cbmZ1bmN0aW9uIGFkZEludGVyYWN0aXZlKHBvcHBlciwgdG9vbHRpcCkge1xuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICB0b29sdGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1pbnRlcmFjdGl2ZScsICcnKTtcbn1cbi8qKlxuICogUmVtb3ZlcyBpbnRlcmFjdGl2ZS1yZWxhdGVkIGF0dHJpYnV0ZXNcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVJbnRlcmFjdGl2ZShwb3BwZXIsIHRvb2x0aXApIHtcbiAgcG9wcGVyLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgdG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW50ZXJhY3RpdmUnKTtcbn1cbi8qKlxuICogQWRkL3JlbW92ZSB0cmFuc2l0aW9uZW5kIGxpc3RlbmVyIGZyb20gdG9vbHRpcFxuICovXG5cbmZ1bmN0aW9uIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcih0b29sdGlwLCBhY3Rpb24sIGxpc3RlbmVyKSB7XG4gIC8vIFVDIEJyb3dzZXIgaGFzbid0IGFkb3B0ZWQgdGhlIGB0cmFuc2l0aW9uZW5kYCBldmVudCBkZXNwaXRlIHN1cHBvcnRpbmdcbiAgLy8gdW5wcmVmaXhlZCB0cmFuc2l0aW9ucy4uLlxuICB2YXIgZXZlbnROYW1lID0gaXNVQ0Jyb3dzZXIgJiYgZG9jdW1lbnQuYm9keS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgPyAnd2Via2l0VHJhbnNpdGlvbkVuZCcgOiAndHJhbnNpdGlvbmVuZCc7XG4gIHRvb2x0aXBbYWN0aW9uICsgJ0V2ZW50TGlzdGVuZXInXShldmVudE5hbWUsIGxpc3RlbmVyKTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50LCBpZ25vcmluZyBzaGlmdGluZyAodG9wLXN0YXJ0LCBldGMpXG4gKi9cblxuZnVuY3Rpb24gZ2V0QmFzaWNQbGFjZW1lbnQocG9wcGVyKSB7XG4gIHZhciBmdWxsUGxhY2VtZW50ID0gcG9wcGVyLmdldEF0dHJpYnV0ZShQTEFDRU1FTlRfQVRUUklCVVRFKTtcbiAgcmV0dXJuIGZ1bGxQbGFjZW1lbnQgPyBmdWxsUGxhY2VtZW50LnNwbGl0KCctJylbMF0gOiAnJztcbn1cbi8qKlxuICogVHJpZ2dlcnMgcmVmbG93XG4gKi9cblxuZnVuY3Rpb24gcmVmbG93KHBvcHBlcikge1xuICB2b2lkIHBvcHBlci5vZmZzZXRIZWlnaHQ7XG59XG4vKipcbiAqIEFkZHMvcmVtb3ZlcyB0aGVtZSBmcm9tIHRvb2x0aXAncyBjbGFzc0xpc3RcbiAqL1xuXG5mdW5jdGlvbiB1cGRhdGVUaGVtZSh0b29sdGlwLCBhY3Rpb24sIHRoZW1lKSB7XG4gIHRoZW1lLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAodGhlbWVOYW1lKSB7XG4gICAgdG9vbHRpcC5jbGFzc0xpc3RbYWN0aW9uXSh0aGVtZU5hbWUgKyAnLXRoZW1lJyk7XG4gIH0pO1xufVxuLyoqXG4gKiBDb25zdHJ1Y3RzIHRoZSBwb3BwZXIgZWxlbWVudCBhbmQgcmV0dXJucyBpdFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVBvcHBlckVsZW1lbnQoaWQsIHByb3BzKSB7XG4gIHZhciBwb3BwZXIgPSBkaXYoKTtcbiAgcG9wcGVyLmNsYXNzTmFtZSA9IFBPUFBFUl9DTEFTUztcbiAgcG9wcGVyLmlkID0gXCJ0aXBweS1cIi5jb25jYXQoaWQpO1xuICBwb3BwZXIuc3R5bGUuekluZGV4ID0gJycgKyBwcm9wcy56SW5kZXg7XG4gIHBvcHBlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHBvcHBlci5zdHlsZS50b3AgPSAnMCc7XG4gIHBvcHBlci5zdHlsZS5sZWZ0ID0gJzAnO1xuXG4gIGlmIChwcm9wcy5yb2xlKSB7XG4gICAgcG9wcGVyLnNldEF0dHJpYnV0ZSgncm9sZScsIHByb3BzLnJvbGUpO1xuICB9XG5cbiAgdmFyIHRvb2x0aXAgPSBkaXYoKTtcbiAgdG9vbHRpcC5jbGFzc05hbWUgPSBUT09MVElQX0NMQVNTO1xuICB0b29sdGlwLnN0eWxlLm1heFdpZHRoID0gcHJvcHMubWF4V2lkdGggKyAodHlwZW9mIHByb3BzLm1heFdpZHRoID09PSAnbnVtYmVyJyA/ICdweCcgOiAnJyk7XG4gIHRvb2x0aXAuc2V0QXR0cmlidXRlKCdkYXRhLXNpemUnLCBwcm9wcy5zaXplKTtcbiAgdG9vbHRpcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJywgcHJvcHMuYW5pbWF0aW9uKTtcbiAgdG9vbHRpcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG4gIHVwZGF0ZVRoZW1lKHRvb2x0aXAsICdhZGQnLCBwcm9wcy50aGVtZSk7XG4gIHZhciBjb250ZW50ID0gZGl2KCk7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gQ09OVEVOVF9DTEFTUztcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG5cbiAgaWYgKHByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgYWRkSW50ZXJhY3RpdmUocG9wcGVyLCB0b29sdGlwKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5hcnJvdykge1xuICAgIHRvb2x0aXAuYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KHByb3BzLmFycm93VHlwZSkpO1xuICB9XG5cbiAgaWYgKHByb3BzLmFuaW1hdGVGaWxsKSB7XG4gICAgdG9vbHRpcC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZHJvcEVsZW1lbnQoKSk7XG4gICAgdG9vbHRpcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0ZWZpbGwnLCAnJyk7XG4gIH1cblxuICBpZiAocHJvcHMuaW5lcnRpYSkge1xuICAgIGFkZEluZXJ0aWEodG9vbHRpcCk7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQsIHByb3BzKTtcbiAgdG9vbHRpcC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgcG9wcGVyLmFwcGVuZENoaWxkKHRvb2x0aXApO1xuICByZXR1cm4gcG9wcGVyO1xufVxuLyoqXG4gKiBVcGRhdGVzIHRoZSBwb3BwZXIgZWxlbWVudCBiYXNlZCBvbiB0aGUgbmV3IHByb3BzXG4gKi9cblxuZnVuY3Rpb24gdXBkYXRlUG9wcGVyRWxlbWVudChwb3BwZXIsIHByZXZQcm9wcywgbmV4dFByb3BzKSB7XG4gIHZhciBfZ2V0Q2hpbGRyZW4gPSBnZXRDaGlsZHJlbihwb3BwZXIpLFxuICAgICAgdG9vbHRpcCA9IF9nZXRDaGlsZHJlbi50b29sdGlwLFxuICAgICAgY29udGVudCA9IF9nZXRDaGlsZHJlbi5jb250ZW50LFxuICAgICAgYmFja2Ryb3AgPSBfZ2V0Q2hpbGRyZW4uYmFja2Ryb3AsXG4gICAgICBhcnJvdyA9IF9nZXRDaGlsZHJlbi5hcnJvdztcblxuICBwb3BwZXIuc3R5bGUuekluZGV4ID0gJycgKyBuZXh0UHJvcHMuekluZGV4O1xuICB0b29sdGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1zaXplJywgbmV4dFByb3BzLnNpemUpO1xuICB0b29sdGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nLCBuZXh0UHJvcHMuYW5pbWF0aW9uKTtcbiAgdG9vbHRpcC5zdHlsZS5tYXhXaWR0aCA9IG5leHRQcm9wcy5tYXhXaWR0aCArICh0eXBlb2YgbmV4dFByb3BzLm1heFdpZHRoID09PSAnbnVtYmVyJyA/ICdweCcgOiAnJyk7XG5cbiAgaWYgKG5leHRQcm9wcy5yb2xlKSB7XG4gICAgcG9wcGVyLnNldEF0dHJpYnV0ZSgncm9sZScsIG5leHRQcm9wcy5yb2xlKTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXIucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gIH1cblxuICBpZiAocHJldlByb3BzLmNvbnRlbnQgIT09IG5leHRQcm9wcy5jb250ZW50KSB7XG4gICAgc2V0Q29udGVudChjb250ZW50LCBuZXh0UHJvcHMpO1xuICB9IC8vIGFuaW1hdGVGaWxsXG5cblxuICBpZiAoIXByZXZQcm9wcy5hbmltYXRlRmlsbCAmJiBuZXh0UHJvcHMuYW5pbWF0ZUZpbGwpIHtcbiAgICB0b29sdGlwLmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpKTtcbiAgICB0b29sdGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRlZmlsbCcsICcnKTtcbiAgfSBlbHNlIGlmIChwcmV2UHJvcHMuYW5pbWF0ZUZpbGwgJiYgIW5leHRQcm9wcy5hbmltYXRlRmlsbCkge1xuICAgIHRvb2x0aXAucmVtb3ZlQ2hpbGQoYmFja2Ryb3ApO1xuICAgIHRvb2x0aXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFuaW1hdGVmaWxsJyk7XG4gIH0gLy8gYXJyb3dcblxuXG4gIGlmICghcHJldlByb3BzLmFycm93ICYmIG5leHRQcm9wcy5hcnJvdykge1xuICAgIHRvb2x0aXAuYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvd1R5cGUpKTtcbiAgfSBlbHNlIGlmIChwcmV2UHJvcHMuYXJyb3cgJiYgIW5leHRQcm9wcy5hcnJvdykge1xuICAgIHRvb2x0aXAucmVtb3ZlQ2hpbGQoYXJyb3cpO1xuICB9IC8vIGFycm93VHlwZVxuXG5cbiAgaWYgKHByZXZQcm9wcy5hcnJvdyAmJiBuZXh0UHJvcHMuYXJyb3cgJiYgcHJldlByb3BzLmFycm93VHlwZSAhPT0gbmV4dFByb3BzLmFycm93VHlwZSkge1xuICAgIHRvb2x0aXAucmVwbGFjZUNoaWxkKGNyZWF0ZUFycm93RWxlbWVudChuZXh0UHJvcHMuYXJyb3dUeXBlKSwgYXJyb3cpO1xuICB9IC8vIGludGVyYWN0aXZlXG5cblxuICBpZiAoIXByZXZQcm9wcy5pbnRlcmFjdGl2ZSAmJiBuZXh0UHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICBhZGRJbnRlcmFjdGl2ZShwb3BwZXIsIHRvb2x0aXApO1xuICB9IGVsc2UgaWYgKHByZXZQcm9wcy5pbnRlcmFjdGl2ZSAmJiAhbmV4dFByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgcmVtb3ZlSW50ZXJhY3RpdmUocG9wcGVyLCB0b29sdGlwKTtcbiAgfSAvLyBpbmVydGlhXG5cblxuICBpZiAoIXByZXZQcm9wcy5pbmVydGlhICYmIG5leHRQcm9wcy5pbmVydGlhKSB7XG4gICAgYWRkSW5lcnRpYSh0b29sdGlwKTtcbiAgfSBlbHNlIGlmIChwcmV2UHJvcHMuaW5lcnRpYSAmJiAhbmV4dFByb3BzLmluZXJ0aWEpIHtcbiAgICByZW1vdmVJbmVydGlhKHRvb2x0aXApO1xuICB9IC8vIHRoZW1lXG5cblxuICBpZiAocHJldlByb3BzLnRoZW1lICE9PSBuZXh0UHJvcHMudGhlbWUpIHtcbiAgICB1cGRhdGVUaGVtZSh0b29sdGlwLCAncmVtb3ZlJywgcHJldlByb3BzLnRoZW1lKTtcbiAgICB1cGRhdGVUaGVtZSh0b29sdGlwLCAnYWRkJywgbmV4dFByb3BzLnRoZW1lKTtcbiAgfVxufVxuLyoqXG4gKiBIaWRlcyBhbGwgdmlzaWJsZSBwb3BwZXJzIG9uIHRoZSBkb2N1bWVudFxuICovXG5cbmZ1bmN0aW9uIGhpZGVBbGwoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSA9IF9yZWYuZXhjbHVkZSxcbiAgICAgIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbjtcblxuICBhcnJheUZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChQT1BQRVJfU0VMRUNUT1IpKS5mb3JFYWNoKGZ1bmN0aW9uIChwb3BwZXIpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBwb3BwZXIuX3RpcHB5O1xuXG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICB2YXIgaXNFeGNsdWRlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlKSB7XG4gICAgICAgIGlzRXhjbHVkZWQgPSBpc1JlZmVyZW5jZUVsZW1lbnQoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlKSA/IGluc3RhbmNlLnJlZmVyZW5jZSA9PT0gZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlIDogcG9wcGVyID09PSBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UucG9wcGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzRXhjbHVkZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZShkdXJhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgbW91c2UgY3Vyc29yIGlzIG91dHNpZGUgb2YgdGhlIHBvcHBlcidzIGludGVyYWN0aXZlIGJvcmRlclxuICogcmVnaW9uXG4gKi9cblxuZnVuY3Rpb24gaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIocG9wcGVyUGxhY2VtZW50LCBwb3BwZXJSZWN0LCBldmVudCwgcHJvcHMpIHtcbiAgaWYgKCFwb3BwZXJQbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciB4ID0gZXZlbnQuY2xpZW50WCxcbiAgICAgIHkgPSBldmVudC5jbGllbnRZO1xuICB2YXIgaW50ZXJhY3RpdmVCb3JkZXIgPSBwcm9wcy5pbnRlcmFjdGl2ZUJvcmRlcixcbiAgICAgIGRpc3RhbmNlID0gcHJvcHMuZGlzdGFuY2U7XG4gIHZhciBleGNlZWRzVG9wID0gcG9wcGVyUmVjdC50b3AgLSB5ID4gKHBvcHBlclBsYWNlbWVudCA9PT0gJ3RvcCcgPyBpbnRlcmFjdGl2ZUJvcmRlciArIGRpc3RhbmNlIDogaW50ZXJhY3RpdmVCb3JkZXIpO1xuICB2YXIgZXhjZWVkc0JvdHRvbSA9IHkgLSBwb3BwZXJSZWN0LmJvdHRvbSA+IChwb3BwZXJQbGFjZW1lbnQgPT09ICdib3R0b20nID8gaW50ZXJhY3RpdmVCb3JkZXIgKyBkaXN0YW5jZSA6IGludGVyYWN0aXZlQm9yZGVyKTtcbiAgdmFyIGV4Y2VlZHNMZWZ0ID0gcG9wcGVyUmVjdC5sZWZ0IC0geCA+IChwb3BwZXJQbGFjZW1lbnQgPT09ICdsZWZ0JyA/IGludGVyYWN0aXZlQm9yZGVyICsgZGlzdGFuY2UgOiBpbnRlcmFjdGl2ZUJvcmRlcik7XG4gIHZhciBleGNlZWRzUmlnaHQgPSB4IC0gcG9wcGVyUmVjdC5yaWdodCA+IChwb3BwZXJQbGFjZW1lbnQgPT09ICdyaWdodCcgPyBpbnRlcmFjdGl2ZUJvcmRlciArIGRpc3RhbmNlIDogaW50ZXJhY3RpdmVCb3JkZXIpO1xuICByZXR1cm4gZXhjZWVkc1RvcCB8fCBleGNlZWRzQm90dG9tIHx8IGV4Y2VlZHNMZWZ0IHx8IGV4Y2VlZHNSaWdodDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZGlzdGFuY2Ugb2Zmc2V0LCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBkZWZhdWx0IG9mZnNldCBkdWUgdG9cbiAqIHRoZSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgpIHJ1bGUgKDEwcHgpIGluIENTU1xuICovXG5cbmZ1bmN0aW9uIGdldE9mZnNldERpc3RhbmNlSW5QeChkaXN0YW5jZSkge1xuICByZXR1cm4gLShkaXN0YW5jZSAtIDEwKSArICdweCc7XG59XG5cbnZhciBpZENvdW50ZXIgPSAxOyAvLyBXb3JrYXJvdW5kIGZvciBJRTExJ3MgbGFjayBvZiBuZXcgTW91c2VFdmVudCBjb25zdHJ1Y3RvclxuXG52YXIgbW91c2VNb3ZlTGlzdGVuZXJzID0gW107XG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBUaXBweSBvYmplY3QuIFdlJ3JlIHVzaW5nIGEgY2xvc3VyZSBwYXR0ZXJuIGluc3RlYWQgb2ZcbiAqIGEgY2xhc3Mgc28gdGhhdCB0aGUgZXhwb3NlZCBvYmplY3QgQVBJIGlzIGNsZWFuIHdpdGhvdXQgcHJpdmF0ZSBtZW1iZXJzXG4gKiBwcmVmaXhlZCB3aXRoIGBfYC5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVUaXBweShyZWZlcmVuY2UsIGNvbGxlY3Rpb25Qcm9wcykge1xuICB2YXIgcHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwgY29sbGVjdGlvblByb3BzKTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBzaG91bGRuJ3QgaGF2ZSBtdWx0aXBsZSB0aXBweXMsIHJldHVybiBudWxsIGVhcmx5XG5cbiAgaWYgKCFwcm9wcy5tdWx0aXBsZSAmJiByZWZlcmVuY2UuX3RpcHB5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT0g8J+UkiBQcml2YXRlIG1lbWJlcnMg8J+UkiA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbiAgdmFyIGxhc3RUcmlnZ2VyRXZlbnRUeXBlO1xuICB2YXIgbGFzdE1vdXNlTW92ZUV2ZW50O1xuICB2YXIgc2hvd1RpbWVvdXRJZDtcbiAgdmFyIGhpZGVUaW1lb3V0SWQ7XG4gIHZhciBzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZUlkO1xuICB2YXIgaXNTY2hlZHVsZWRUb1Nob3cgPSBmYWxzZTtcbiAgdmFyIGlzQmVpbmdEZXN0cm95ZWQgPSBmYWxzZTtcbiAgdmFyIHByZXZpb3VzUGxhY2VtZW50O1xuICB2YXIgd2FzVmlzaWJsZUR1cmluZ1ByZXZpb3VzVXBkYXRlID0gZmFsc2U7XG4gIHZhciBoYXNNb3VudENhbGxiYWNrUnVuID0gZmFsc2U7XG4gIHZhciBjdXJyZW50TW91bnRDYWxsYmFjaztcbiAgdmFyIGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXI7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGN1cnJlbnRDb21wdXRlZFBhZGRpbmc7XG4gIHZhciBkZWJvdW5jZWRPbk1vdXNlTW92ZSA9IGRlYm91bmNlKG9uTW91c2VNb3ZlLCBwcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKTtcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT0g8J+UkSBQdWJsaWMgbWVtYmVycyDwn5SRID09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgdmFyIGlkID0gaWRDb3VudGVyKys7XG4gIHZhciBwb3BwZXIgPSBjcmVhdGVQb3BwZXJFbGVtZW50KGlkLCBwcm9wcyk7XG4gIHZhciBwb3BwZXJDaGlsZHJlbiA9IGdldENoaWxkcmVuKHBvcHBlcik7XG4gIHZhciBwb3BwZXJJbnN0YW5jZSA9IG51bGw7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICAvLyBJcyB0aGUgaW5zdGFuY2UgY3VycmVudGx5IGVuYWJsZWQ/XG4gICAgaXNFbmFibGVkOiB0cnVlLFxuICAgIC8vIElzIHRoZSB0aXBweSBjdXJyZW50bHkgc2hvd2luZyBhbmQgbm90IHRyYW5zaXRpb25pbmcgb3V0P1xuICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgLy8gSGFzIHRoZSBpbnN0YW5jZSBiZWVuIGRlc3Ryb3llZD9cbiAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgLy8gSXMgdGhlIHRpcHB5IGN1cnJlbnRseSBtb3VudGVkIHRvIHRoZSBET00/XG4gICAgaXNNb3VudGVkOiBmYWxzZSxcbiAgICAvLyBIYXMgdGhlIHRpcHB5IGZpbmlzaGVkIHRyYW5zaXRpb25pbmcgaW4/XG4gICAgaXNTaG93bjogZmFsc2VcbiAgfTtcbiAgdmFyIGluc3RhbmNlID0ge1xuICAgIC8vIHByb3BlcnRpZXNcbiAgICBpZDogaWQsXG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgcG9wcGVyOiBwb3BwZXIsXG4gICAgcG9wcGVyQ2hpbGRyZW46IHBvcHBlckNoaWxkcmVuLFxuICAgIHBvcHBlckluc3RhbmNlOiBwb3BwZXJJbnN0YW5jZSxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIC8vIG1ldGhvZHNcbiAgICBjbGVhckRlbGF5VGltZW91dHM6IGNsZWFyRGVsYXlUaW1lb3V0cyxcbiAgICBzZXQ6IHNldCxcbiAgICBzZXRDb250ZW50OiBzZXRDb250ZW50LFxuICAgIHNob3c6IHNob3csXG4gICAgaGlkZTogaGlkZSxcbiAgICBlbmFibGU6IGVuYWJsZSxcbiAgICBkaXNhYmxlOiBkaXNhYmxlLFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PSBJbml0aWFsIGluc3RhbmNlIG11dGF0aW9ucyA9PT09PT09PT09PT09PT09PT09ICovXG5cbiAgfTtcbiAgcmVmZXJlbmNlLl90aXBweSA9IGluc3RhbmNlO1xuICBwb3BwZXIuX3RpcHB5ID0gaW5zdGFuY2U7XG4gIGFkZFRyaWdnZXJzVG9SZWZlcmVuY2UoKTtcblxuICBpZiAoIXByb3BzLmxhenkpIHtcbiAgICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpO1xuICB9XG5cbiAgaWYgKHByb3BzLnNob3dPbkluaXQpIHtcbiAgICBzY2hlZHVsZVNob3coKTtcbiAgfSAvLyBFbnN1cmUgdGhlIGV2ZW50IGxpc3RlbmVycyB0YXJnZXQgY2FuIHJlY2VpdmUgZm9jdXNcblxuXG4gIGlmIChwcm9wcy5hMTF5ICYmICFwcm9wcy50YXJnZXQgJiYgIWNhblJlY2VpdmVGb2N1cyhnZXRFdmVudExpc3RlbmVyc1RhcmdldCgpKSkge1xuICAgIGdldEV2ZW50TGlzdGVuZXJzVGFyZ2V0KCkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gIH0gLy8gUHJldmVudCBhIHRpcHB5IHdpdGggYSBkZWxheSBmcm9tIGhpZGluZyBpZiB0aGUgY3Vyc29yIGxlZnQgdGhlbiByZXR1cm5lZFxuICAvLyBiZWZvcmUgaXQgc3RhcnRlZCBoaWRpbmdcblxuXG4gIHBvcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBsYXN0VHJpZ2dlckV2ZW50VHlwZSA9PT0gJ21vdXNlZW50ZXInKSB7XG4gICAgICAvLyBXZSBkb24ndCB3YW50IHByb3BzLm9uVHJpZ2dlcigpIHRvIGJlIGNhbGxlZCBoZXJlLCBzaW5jZSB0aGUgYGV2ZW50YFxuICAgICAgLy8gb2JqZWN0IGlzIG5vdCByZWxhdGVkIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgICAgc2NoZWR1bGVTaG93KGV2ZW50LCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgbGFzdFRyaWdnZXJFdmVudFR5cGUgPT09ICdtb3VzZWVudGVyJykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpbnN0YW5jZTtcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT0g8J+UkiBQcml2YXRlIG1ldGhvZHMg8J+UkiA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBmb2xsb3cgY3Vyc29yIGxpc3RlbmVyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUZvbGxvd0N1cnNvckxpc3RlbmVyKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHBvc2l0aW9uVmlydHVhbFJlZmVyZW5jZU5lYXJDdXJzb3IpO1xuICB9XG4gIC8qKlxuICAgKiBDbGVhbnMgdXAgaW50ZXJhY3RpdmUgbW91c2UgbGlzdGVuZXJzXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc2NoZWR1bGVIaWRlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgbW91c2VNb3ZlTGlzdGVuZXJzID0gbW91c2VNb3ZlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lciAhPT0gZGVib3VuY2VkT25Nb3VzZU1vdmU7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgY29ycmVjdCB0YXJnZXQgdXNlZCBmb3IgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0RXZlbnRMaXN0ZW5lcnNUYXJnZXQoKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBkb2N1bWVudCBjbGljayBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGluc3RhbmNlXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYWRkRG9jdW1lbnRDbGlja0xpc3RlbmVyKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Eb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZG9jdW1lbnQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBpbnN0YW5jZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50Q2xpY2tMaXN0ZW5lcigpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRG9jdW1lbnRDbGljaywgdHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdHJhbnNpdGlvbmFibGUgaW5uZXIgZWxlbWVudHMgdXNlZCBpbiBzaG93L2hpZGUgbWV0aG9kc1xuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFRyYW5zaXRpb25hYmxlRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFtpbnN0YW5jZS5wb3BwZXJDaGlsZHJlbi50b29sdGlwLCBpbnN0YW5jZS5wb3BwZXJDaGlsZHJlbi5iYWNrZHJvcCwgaW5zdGFuY2UucG9wcGVyQ2hpbGRyZW4uY29udGVudF07XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIGluc3RhbmNlIGlzIGluIGBmb2xsb3dDdXJzb3JgIG1vZGUuXG4gICAqIE5PVEU6IGluIHY1LCB0b3VjaCBkZXZpY2VzIHdpbGwgdXNlIGBpbml0aWFsYCBiZWhhdmlvciBubyBtYXR0ZXIgdGhlIHZhbHVlLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldElzSW5Mb29zZUZvbGxvd0N1cnNvck1vZGUoKSB7XG4gICAgdmFyIGZvbGxvd0N1cnNvciA9IGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvcjtcbiAgICByZXR1cm4gZm9sbG93Q3Vyc29yICYmIGxhc3RUcmlnZ2VyRXZlbnRUeXBlICE9PSAnZm9jdXMnIHx8IGlzVXNpbmdUb3VjaCAmJiBmb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJztcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdG9vbHRpcCdzIHBvc2l0aW9uIG9uIGVhY2ggYW5pbWF0aW9uIGZyYW1lXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbWFrZVN0aWNreSgpIHtcbiAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW3BvcHBlcl0sIGlzSUUgPyAwIDogaW5zdGFuY2UucHJvcHMudXBkYXRlRHVyYXRpb24pO1xuICAgIHZhciBwcmV2UmVmUmVjdCA9IHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRSZWZSZWN0ID0gcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyBPbmx5IHNjaGVkdWxlIGFuIHVwZGF0ZSBpZiB0aGUgcmVmZXJlbmNlIHJlY3QgaGFzIGNoYW5nZWRcblxuICAgICAgaWYgKHByZXZSZWZSZWN0LnRvcCAhPT0gY3VycmVudFJlZlJlY3QudG9wIHx8IHByZXZSZWZSZWN0LnJpZ2h0ICE9PSBjdXJyZW50UmVmUmVjdC5yaWdodCB8fCBwcmV2UmVmUmVjdC5ib3R0b20gIT09IGN1cnJlbnRSZWZSZWN0LmJvdHRvbSB8fCBwcmV2UmVmUmVjdC5sZWZ0ICE9PSBjdXJyZW50UmVmUmVjdC5sZWZ0KSB7XG4gICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHByZXZSZWZSZWN0ID0gY3VycmVudFJlZlJlY3Q7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQb3NpdGlvbigpO1xuICB9XG4gIC8qKlxuICAgKiBJbnZva2VzIGEgY2FsbGJhY2sgb25jZSB0aGUgdG9vbHRpcCBoYXMgZnVsbHkgdHJhbnNpdGlvbmVkIG91dFxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgcG9wcGVyLnBhcmVudE5vZGUgJiYgcG9wcGVyLnBhcmVudE5vZGUuY29udGFpbnMocG9wcGVyKSkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnZva2VzIGEgY2FsbGJhY2sgb25jZSB0aGUgdG9vbHRpcCBoYXMgZnVsbHkgdHJhbnNpdGlvbmVkIGluXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBvblRyYW5zaXRpb25FbmQoZHVyYXRpb24sIGNhbGxiYWNrKTtcbiAgfVxuICAvKipcbiAgICogSW52b2tlcyBhIGNhbGxiYWNrIG9uY2UgdGhlIHRvb2x0aXAncyBDU1MgdHJhbnNpdGlvbiBlbmRzXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgIHZhciB0b29sdGlwID0gaW5zdGFuY2UucG9wcGVyQ2hpbGRyZW4udG9vbHRpcDtcbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lciBhZGRlZCBhcyB0aGUgYHRyYW5zaXRpb25lbmRgIGhhbmRsZXJcbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIGxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0b29sdGlwKSB7XG4gICAgICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcih0b29sdGlwLCAncmVtb3ZlJywgbGlzdGVuZXIpO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0gLy8gTWFrZSBjYWxsYmFjayBzeW5jaHJvbm91cyBpZiBkdXJhdGlvbiBpcyAwXG4gICAgLy8gYHRyYW5zaXRpb25lbmRgIHdvbid0IGZpcmUgb3RoZXJ3aXNlXG5cblxuICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKHRvb2x0aXAsICdyZW1vdmUnLCBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyKTtcbiAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIodG9vbHRpcCwgJ2FkZCcsIGxpc3RlbmVyKTtcbiAgICBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyID0gbGlzdGVuZXI7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHJlZmVyZW5jZSBhbmQgc3RvcmVzIGl0IGluIGBsaXN0ZW5lcnNgXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb24oZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICAgIGdldEV2ZW50TGlzdGVuZXJzVGFyZ2V0KCkuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIGxpc3RlbmVycy5wdXNoKHtcbiAgICAgIGV2ZW50VHlwZTogZXZlbnRUeXBlLFxuICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHJlZmVyZW5jZSBiYXNlZCBvbiB0aGUgYHRyaWdnZXJgIHByb3BcbiAgICovXG5cblxuICBmdW5jdGlvbiBhZGRUcmlnZ2Vyc1RvUmVmZXJlbmNlKCkge1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy50b3VjaEhvbGQgJiYgIWluc3RhbmNlLnByb3BzLnRhcmdldCkge1xuICAgICAgb24oJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIsIFBBU1NJVkUpO1xuICAgICAgb24oJ3RvdWNoZW5kJywgb25Nb3VzZUxlYXZlLCBQQVNTSVZFKTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLnRyaW0oKS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50VHlwZSkge1xuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ21hbnVhbCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBOb24tZGVsZWdhdGVzXG5cblxuICAgICAgaWYgKCFpbnN0YW5jZS5wcm9wcy50YXJnZXQpIHtcbiAgICAgICAgb24oZXZlbnRUeXBlLCBvblRyaWdnZXIpO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgICAgICAgY2FzZSAnbW91c2VlbnRlcic6XG4gICAgICAgICAgICBvbignbW91c2VsZWF2ZScsIG9uTW91c2VMZWF2ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICAgIG9uKGlzSUUgPyAnZm9jdXNvdXQnIDogJ2JsdXInLCBvbkJsdXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlbGVnYXRlc1xuICAgICAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgICAgICAgIGNhc2UgJ21vdXNlZW50ZXInOlxuICAgICAgICAgICAgb24oJ21vdXNlb3ZlcicsIG9uRGVsZWdhdGVTaG93KTtcbiAgICAgICAgICAgIG9uKCdtb3VzZW91dCcsIG9uRGVsZWdhdGVIaWRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgICAgb24oJ2ZvY3VzaW4nLCBvbkRlbGVnYXRlU2hvdyk7XG4gICAgICAgICAgICBvbignZm9jdXNvdXQnLCBvbkRlbGVnYXRlSGlkZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAgIG9uKGV2ZW50VHlwZSwgb25EZWxlZ2F0ZVNob3cpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgcmVmZXJlbmNlXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVtb3ZlVHJpZ2dlcnNGcm9tUmVmZXJlbmNlKCkge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gX3JlZi5ldmVudFR5cGUsXG4gICAgICAgICAgaGFuZGxlciA9IF9yZWYuaGFuZGxlcixcbiAgICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICAgICAgZ2V0RXZlbnRMaXN0ZW5lcnNUYXJnZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0aGUgdmlydHVhbCByZWZlcmVuY2UgbmVhciB0aGUgY3Vyc29yXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcG9zaXRpb25WaXJ0dWFsUmVmZXJlbmNlTmVhckN1cnNvcihldmVudCkge1xuICAgIHZhciBfbGFzdE1vdXNlTW92ZUV2ZW50ID0gbGFzdE1vdXNlTW92ZUV2ZW50ID0gZXZlbnQsXG4gICAgICAgIHggPSBfbGFzdE1vdXNlTW92ZUV2ZW50LmNsaWVudFgsXG4gICAgICAgIHkgPSBfbGFzdE1vdXNlTW92ZUV2ZW50LmNsaWVudFk7IC8vIEdldHMgc2V0IG9uY2UgcG9wcGVySW5zdGFuY2UgYG9uQ3JlYXRlYCBoYXMgYmVlbiBjYWxsZWRcblxuXG4gICAgaWYgKCFjdXJyZW50Q29tcHV0ZWRQYWRkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiB0aGUgaW5zdGFuY2UgaXMgaW50ZXJhY3RpdmUsIGF2b2lkIHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB1bmxlc3MgaXQnc1xuICAgIC8vIG92ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG5cblxuICAgIHZhciBpc0N1cnNvck92ZXJSZWZlcmVuY2UgPSBjbG9zZXN0Q2FsbGJhY2soZXZlbnQudGFyZ2V0LCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBlbCA9PT0gcmVmZXJlbmNlO1xuICAgIH0pO1xuICAgIHZhciByZWN0ID0gcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBmb2xsb3dDdXJzb3IgPSBpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3I7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBpc1ZlcnRpY2FsID0gZm9sbG93Q3Vyc29yID09PSAndmVydGljYWwnOyAvLyBUaGUgdmlydHVhbCByZWZlcmVuY2UgbmVlZHMgc29tZSBzaXplIHRvIHByZXZlbnQgaXRzZWxmIGZyb20gb3ZlcmZsb3dpbmdcblxuICAgIHZhciBpc1ZlcnRpY2FsUGxhY2VtZW50ID0gaW5jbHVkZXMoWyd0b3AnLCAnYm90dG9tJ10sIGdldEJhc2ljUGxhY2VtZW50KHBvcHBlcikpO1xuICAgIHZhciBmdWxsUGxhY2VtZW50ID0gcG9wcGVyLmdldEF0dHJpYnV0ZShQTEFDRU1FTlRfQVRUUklCVVRFKTtcbiAgICB2YXIgaXNWYXJpYXRpb24gPSBmdWxsUGxhY2VtZW50ID8gISFmdWxsUGxhY2VtZW50LnNwbGl0KCctJylbMV0gOiBmYWxzZTtcbiAgICB2YXIgc2l6ZSA9IGlzVmVydGljYWxQbGFjZW1lbnQgPyBwb3BwZXIub2Zmc2V0V2lkdGggOiBwb3BwZXIub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciBoYWxmU2l6ZSA9IHNpemUgLyAyO1xuICAgIHZhciB2ZXJ0aWNhbEluY3JlYXNlID0gaXNWZXJ0aWNhbFBsYWNlbWVudCA/IDAgOiBpc1ZhcmlhdGlvbiA/IHNpemUgOiBoYWxmU2l6ZTtcbiAgICB2YXIgaG9yaXpvbnRhbEluY3JlYXNlID0gaXNWZXJ0aWNhbFBsYWNlbWVudCA/IGlzVmFyaWF0aW9uID8gc2l6ZSA6IGhhbGZTaXplIDogMDtcblxuICAgIGlmIChpc0N1cnNvck92ZXJSZWZlcmVuY2UgfHwgIWluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5yZWZlcmVuY2UgPSBfZXh0ZW5kcyh7fSwgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UucmVmZXJlbmNlLCB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBleGlzdCBpbiBuZXh0IFBvcHBlci5qcyBmZWF0dXJlIHJlbGVhc2UgdG8gZml4ICM1MzJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZWZlcmVuY2VOb2RlOiByZWZlcmVuY2UsXG4gICAgICAgIC8vIFRoZXNlIGBjbGllbnRgIHZhbHVlcyBkb24ndCBnZXQgdXNlZCBieSBQb3BwZXIuanMgaWYgdGhleSBhcmUgMFxuICAgICAgICBjbGllbnRXaWR0aDogMCxcbiAgICAgICAgY2xpZW50SGVpZ2h0OiAwLFxuICAgICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGlzVmVydGljYWxQbGFjZW1lbnQgPyBzaXplIDogMCxcbiAgICAgICAgICAgIGhlaWdodDogaXNWZXJ0aWNhbFBsYWNlbWVudCA/IDAgOiBzaXplLFxuICAgICAgICAgICAgdG9wOiAoaXNIb3Jpem9udGFsID8gcmVjdC50b3AgOiB5KSAtIHZlcnRpY2FsSW5jcmVhc2UsXG4gICAgICAgICAgICBib3R0b206IChpc0hvcml6b250YWwgPyByZWN0LmJvdHRvbSA6IHkpICsgdmVydGljYWxJbmNyZWFzZSxcbiAgICAgICAgICAgIGxlZnQ6IChpc1ZlcnRpY2FsID8gcmVjdC5sZWZ0IDogeCkgLSBob3Jpem9udGFsSW5jcmVhc2UsXG4gICAgICAgICAgICByaWdodDogKGlzVmVydGljYWwgPyByZWN0LnJpZ2h0IDogeCkgKyBob3Jpem9udGFsSW5jcmVhc2VcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChmb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJyAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIHJlbW92ZUZvbGxvd0N1cnNvckxpc3RlbmVyKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0aXBweSBpbnN0YW5jZSBmb3IgYSBkZWxlZ2F0ZSB3aGVuIGl0J3MgYmVlbiB0cmlnZ2VyZWRcbiAgICovXG5cblxuICBmdW5jdGlvbiBjcmVhdGVEZWxlZ2F0ZUNoaWxkVGlwcHkoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHZhciB0YXJnZXRFbCA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCBpbnN0YW5jZS5wcm9wcy50YXJnZXQpO1xuXG4gICAgICBpZiAodGFyZ2V0RWwgJiYgIXRhcmdldEVsLl90aXBweSkge1xuICAgICAgICBjcmVhdGVUaXBweSh0YXJnZXRFbCwgX2V4dGVuZHMoe30sIGluc3RhbmNlLnByb3BzLCB7XG4gICAgICAgICAgY29udGVudDogaW52b2tlV2l0aEFyZ3NPclJldHVybihjb2xsZWN0aW9uUHJvcHMuY29udGVudCwgW3RhcmdldEVsXSksXG4gICAgICAgICAgYXBwZW5kVG86IGNvbGxlY3Rpb25Qcm9wcy5hcHBlbmRUbyxcbiAgICAgICAgICB0YXJnZXQ6ICcnLFxuICAgICAgICAgIHNob3dPbkluaXQ6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRXZlbnQgbGlzdGVuZXIgaW52b2tlZCB1cG9uIHRyaWdnZXJcbiAgICovXG5cblxuICBmdW5jdGlvbiBvblRyaWdnZXIoZXZlbnQpIHtcbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCB8fCBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBsYXN0VHJpZ2dlckV2ZW50VHlwZSA9IGV2ZW50LnR5cGU7XG5cbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgbGFzdE1vdXNlTW92ZUV2ZW50ID0gZXZlbnQ7IC8vIElmIHNjcm9sbGluZywgYG1vdXNlZW50ZXJgIGV2ZW50cyBjYW4gYmUgZmlyZWQgaWYgdGhlIGN1cnNvciBsYW5kc1xuICAgICAgICAvLyBvdmVyIGEgbmV3IHRhcmdldCwgYnV0IGBtb3VzZW1vdmVgIGV2ZW50cyBkb24ndCBnZXQgZmlyZWQuIFRoaXNcbiAgICAgICAgLy8gY2F1c2VzIGludGVyYWN0aXZlIHRvb2x0aXBzIHRvIGdldCBzdHVjayBvcGVuIHVudGlsIHRoZSBjdXJzb3IgaXNcbiAgICAgICAgLy8gbW92ZWRcblxuICAgICAgICBtb3VzZU1vdmVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXIoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IC8vIFRvZ2dsZSBzaG93L2hpZGUgd2hlbiBjbGlja2luZyBjbGljay10cmlnZ2VyZWQgdG9vbHRpcHNcblxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgaW5zdGFuY2UucHJvcHMuaGlkZU9uQ2xpY2sgIT09IGZhbHNlICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgc2NoZWR1bGVIaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlU2hvdyhldmVudCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBFdmVudCBsaXN0ZW5lciB1c2VkIGZvciBpbnRlcmFjdGl2ZSB0b29sdGlwcyB0byBkZXRlY3Qgd2hlbiB0aGV5IHNob3VsZFxuICAgKiBoaWRlXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB2YXIgaXNDdXJzb3JPdmVyUG9wcGVyID0gY2xvc2VzdChldmVudC50YXJnZXQsIFBPUFBFUl9TRUxFQ1RPUikgPT09IHBvcHBlcjtcbiAgICB2YXIgaXNDdXJzb3JPdmVyUmVmZXJlbmNlID0gY2xvc2VzdENhbGxiYWNrKGV2ZW50LnRhcmdldCwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gZWwgPT09IHJlZmVyZW5jZTtcbiAgICB9KTtcblxuICAgIGlmIChpc0N1cnNvck92ZXJQb3BwZXIgfHwgaXNDdXJzb3JPdmVyUmVmZXJlbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKGdldEJhc2ljUGxhY2VtZW50KHBvcHBlciksIHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgZXZlbnQsIGluc3RhbmNlLnByb3BzKSkge1xuICAgICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIHNjaGVkdWxlSGlkZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRXZlbnQgbGlzdGVuZXIgaW52b2tlZCB1cG9uIG1vdXNlbGVhdmVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZXZlbnQpIHtcbiAgICBpZiAoaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHNjaGVkdWxlSGlkZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgICBtb3VzZU1vdmVMaXN0ZW5lcnMucHVzaChkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NoZWR1bGVIaWRlKCk7XG4gIH1cbiAgLyoqXG4gICAqIEV2ZW50IGxpc3RlbmVyIGludm9rZWQgdXBvbiBibHVyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb25CbHVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZ2V0RXZlbnRMaXN0ZW5lcnNUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBldmVudC5yZWxhdGVkVGFyZ2V0ICYmIHBvcHBlci5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVkdWxlSGlkZSgpO1xuICB9XG4gIC8qKlxuICAgKiBFdmVudCBsaXN0ZW5lciBpbnZva2VkIHdoZW4gYSBjaGlsZCB0YXJnZXQgaXMgdHJpZ2dlcmVkXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb25EZWxlZ2F0ZVNob3coZXZlbnQpIHtcbiAgICBpZiAoY2xvc2VzdChldmVudC50YXJnZXQsIGluc3RhbmNlLnByb3BzLnRhcmdldCkpIHtcbiAgICAgIHNjaGVkdWxlU2hvdyhldmVudCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBFdmVudCBsaXN0ZW5lciBpbnZva2VkIHdoZW4gYSBjaGlsZCB0YXJnZXQgc2hvdWxkIGhpZGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvbkRlbGVnYXRlSGlkZShldmVudCkge1xuICAgIGlmIChjbG9zZXN0KGV2ZW50LnRhcmdldCwgaW5zdGFuY2UucHJvcHMudGFyZ2V0KSkge1xuICAgICAgc2NoZWR1bGVIaWRlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIHNob3VsZCBzdG9wIGZ1cnRoZXIgZXhlY3V0aW9uIGR1ZSB0byB0aGVcbiAgICogYHRvdWNoSG9sZGAgb3B0aW9uXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkge1xuICAgIHZhciBzdXBwb3J0c1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuICAgIHZhciBpc1RvdWNoRXZlbnQgPSBpbmNsdWRlcyhldmVudC50eXBlLCAndG91Y2gnKTtcbiAgICB2YXIgdG91Y2hIb2xkID0gaW5zdGFuY2UucHJvcHMudG91Y2hIb2xkO1xuICAgIHJldHVybiBzdXBwb3J0c1RvdWNoICYmIGlzVXNpbmdUb3VjaCAmJiB0b3VjaEhvbGQgJiYgIWlzVG91Y2hFdmVudCB8fCBpc1VzaW5nVG91Y2ggJiYgIXRvdWNoSG9sZCAmJiBpc1RvdWNoRXZlbnQ7XG4gIH1cbiAgLyoqXG4gICAqIFJ1bnMgdGhlIG1vdW50IGNhbGxiYWNrXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcnVuTW91bnRDYWxsYmFjaygpIHtcbiAgICBpZiAoIWhhc01vdW50Q2FsbGJhY2tSdW4gJiYgY3VycmVudE1vdW50Q2FsbGJhY2spIHtcbiAgICAgIGhhc01vdW50Q2FsbGJhY2tSdW4gPSB0cnVlO1xuICAgICAgcmVmbG93KHBvcHBlcik7XG4gICAgICBjdXJyZW50TW91bnRDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgcG9wcGVyIGluc3RhbmNlIGZvciB0aGUgaW5zdGFuY2VcbiAgICovXG5cblxuICBmdW5jdGlvbiBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpIHtcbiAgICB2YXIgcG9wcGVyT3B0aW9ucyA9IGluc3RhbmNlLnByb3BzLnBvcHBlck9wdGlvbnM7XG4gICAgdmFyIF9pbnN0YW5jZSRwb3BwZXJDaGlsZCA9IGluc3RhbmNlLnBvcHBlckNoaWxkcmVuLFxuICAgICAgICB0b29sdGlwID0gX2luc3RhbmNlJHBvcHBlckNoaWxkLnRvb2x0aXAsXG4gICAgICAgIGFycm93ID0gX2luc3RhbmNlJHBvcHBlckNoaWxkLmFycm93O1xuICAgIHZhciBwcmV2ZW50T3ZlcmZsb3dNb2RpZmllciA9IGdldE1vZGlmaWVyKHBvcHBlck9wdGlvbnMsICdwcmV2ZW50T3ZlcmZsb3cnKTtcblxuICAgIGZ1bmN0aW9uIGFwcGx5TXV0YXRpb25zKGRhdGEpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mbGlwICYmICFpbnN0YW5jZS5wcm9wcy5mbGlwT25VcGRhdGUpIHtcbiAgICAgICAgaWYgKGRhdGEuZmxpcHBlZCkge1xuICAgICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLm9wdGlvbnMucGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRGbGlwTW9kaWZpZXJFbmFibGVkKGluc3RhbmNlLnBvcHBlckluc3RhbmNlLm1vZGlmaWVycywgZmFsc2UpO1xuICAgICAgfSAvLyBBcHBseSBhbGwgb2YgdGhlIHBvcHBlcidzIGF0dHJpYnV0ZXMgdG8gdGhlIHRvb3RpcCBub2RlIGFzIHdlbGwuXG4gICAgICAvLyBBbGxvd3MgdXNlcnMgdG8gYXZvaWQgdXNpbmcgdGhlIC50aXBweS1wb3BwZXIgc2VsZWN0b3IgZm9yIHRoZW1lcy5cblxuXG4gICAgICB0b29sdGlwLnNldEF0dHJpYnV0ZShQTEFDRU1FTlRfQVRUUklCVVRFLCBkYXRhLnBsYWNlbWVudCk7XG5cbiAgICAgIGlmIChkYXRhLmF0dHJpYnV0ZXNbT1VUX09GX0JPVU5EQVJJRVNfQVRUUklCVVRFXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdG9vbHRpcC5zZXRBdHRyaWJ1dGUoT1VUX09GX0JPVU5EQVJJRVNfQVRUUklCVVRFLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b29sdGlwLnJlbW92ZUF0dHJpYnV0ZShPVVRfT0ZfQk9VTkRBUklFU19BVFRSSUJVVEUpO1xuICAgICAgfSAvLyBQcmV2ZW50cyBhIHRyYW5zaXRpb24gd2hlbiBjaGFuZ2luZyBwbGFjZW1lbnRzICh3aGlsZSB0aXBweSBpcyB2aXNpYmxlKVxuICAgICAgLy8gZm9yIHNjcm9sbC9yZXNpemUgdXBkYXRlc1xuXG5cbiAgICAgIGlmIChwcmV2aW91c1BsYWNlbWVudCAmJiBwcmV2aW91c1BsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQgJiYgd2FzVmlzaWJsZUR1cmluZ1ByZXZpb3VzVXBkYXRlKSB7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0b29sdGlwLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gICAgICB3YXNWaXNpYmxlRHVyaW5nUHJldmlvdXNVcGRhdGUgPSBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgICB2YXIgYmFzaWNQbGFjZW1lbnQgPSBnZXRCYXNpY1BsYWNlbWVudChwb3BwZXIpO1xuICAgICAgdmFyIHN0eWxlcyA9IHRvb2x0aXAuc3R5bGU7IC8vIEFjY291bnQgZm9yIHRoZSBgZGlzdGFuY2VgIG9mZnNldFxuXG4gICAgICBzdHlsZXMudG9wID0gc3R5bGVzLmJvdHRvbSA9IHN0eWxlcy5sZWZ0ID0gc3R5bGVzLnJpZ2h0ID0gJyc7XG4gICAgICBzdHlsZXNbYmFzaWNQbGFjZW1lbnRdID0gZ2V0T2Zmc2V0RGlzdGFuY2VJblB4KGluc3RhbmNlLnByb3BzLmRpc3RhbmNlKTtcbiAgICAgIHZhciBwYWRkaW5nID0gcHJldmVudE92ZXJmbG93TW9kaWZpZXIgJiYgcHJldmVudE92ZXJmbG93TW9kaWZpZXIucGFkZGluZyAhPT0gdW5kZWZpbmVkID8gcHJldmVudE92ZXJmbG93TW9kaWZpZXIucGFkZGluZyA6IFBBRERJTkc7XG4gICAgICB2YXIgaXNQYWRkaW5nTnVtYmVyID0gdHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInO1xuXG4gICAgICB2YXIgY29tcHV0ZWRQYWRkaW5nID0gX2V4dGVuZHMoe1xuICAgICAgICB0b3A6IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnRvcCxcbiAgICAgICAgYm90dG9tOiBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5ib3R0b20sXG4gICAgICAgIGxlZnQ6IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmxlZnQsXG4gICAgICAgIHJpZ2h0OiBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5yaWdodFxuICAgICAgfSwgIWlzUGFkZGluZ051bWJlciAmJiBwYWRkaW5nKTtcblxuICAgICAgY29tcHV0ZWRQYWRkaW5nW2Jhc2ljUGxhY2VtZW50XSA9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgKyBpbnN0YW5jZS5wcm9wcy5kaXN0YW5jZSA6IChwYWRkaW5nW2Jhc2ljUGxhY2VtZW50XSB8fCAwKSArIGluc3RhbmNlLnByb3BzLmRpc3RhbmNlO1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UubW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gbS5uYW1lID09PSAncHJldmVudE92ZXJmbG93JztcbiAgICAgIH0pWzBdLnBhZGRpbmcgPSBjb21wdXRlZFBhZGRpbmc7XG4gICAgICBjdXJyZW50Q29tcHV0ZWRQYWRkaW5nID0gY29tcHV0ZWRQYWRkaW5nO1xuICAgIH1cblxuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7XG4gICAgICBldmVudHNFbmFibGVkOiBmYWxzZSxcbiAgICAgIHBsYWNlbWVudDogaW5zdGFuY2UucHJvcHMucGxhY2VtZW50XG4gICAgfSwgcG9wcGVyT3B0aW9ucywge1xuICAgICAgbW9kaWZpZXJzOiBfZXh0ZW5kcyh7fSwgcG9wcGVyT3B0aW9ucyA/IHBvcHBlck9wdGlvbnMubW9kaWZpZXJzIDoge30sIHtcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiBfZXh0ZW5kcyh7XG4gICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IGluc3RhbmNlLnByb3BzLmJvdW5kYXJ5LFxuICAgICAgICAgIHBhZGRpbmc6IFBBRERJTkdcbiAgICAgICAgfSwgcHJldmVudE92ZXJmbG93TW9kaWZpZXIpLFxuICAgICAgICBhcnJvdzogX2V4dGVuZHMoe1xuICAgICAgICAgIGVsZW1lbnQ6IGFycm93LFxuICAgICAgICAgIGVuYWJsZWQ6ICEhYXJyb3dcbiAgICAgICAgfSwgZ2V0TW9kaWZpZXIocG9wcGVyT3B0aW9ucywgJ2Fycm93JykpLFxuICAgICAgICBmbGlwOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgZW5hYmxlZDogaW5zdGFuY2UucHJvcHMuZmxpcCxcbiAgICAgICAgICAvLyBUaGUgdG9vbHRpcCBpcyBvZmZzZXQgYnkgMTBweCBmcm9tIHRoZSBwb3BwZXIgaW4gQ1NTLFxuICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgaXRzIGRpc3RhbmNlXG4gICAgICAgICAgcGFkZGluZzogaW5zdGFuY2UucHJvcHMuZGlzdGFuY2UgKyBQQURESU5HLFxuICAgICAgICAgIGJlaGF2aW9yOiBpbnN0YW5jZS5wcm9wcy5mbGlwQmVoYXZpb3JcbiAgICAgICAgfSwgZ2V0TW9kaWZpZXIocG9wcGVyT3B0aW9ucywgJ2ZsaXAnKSksXG4gICAgICAgIG9mZnNldDogX2V4dGVuZHMoe1xuICAgICAgICAgIG9mZnNldDogaW5zdGFuY2UucHJvcHMub2Zmc2V0XG4gICAgICAgIH0sIGdldE1vZGlmaWVyKHBvcHBlck9wdGlvbnMsICdvZmZzZXQnKSlcbiAgICAgIH0pLFxuICAgICAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKGRhdGEpIHtcbiAgICAgICAgYXBwbHlNdXRhdGlvbnMoZGF0YSk7XG4gICAgICAgIHJ1bk1vdW50Q2FsbGJhY2soKTtcblxuICAgICAgICBpZiAocG9wcGVyT3B0aW9ucyAmJiBwb3BwZXJPcHRpb25zLm9uQ3JlYXRlKSB7XG4gICAgICAgICAgcG9wcGVyT3B0aW9ucy5vbkNyZWF0ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGFwcGx5TXV0YXRpb25zKGRhdGEpO1xuICAgICAgICBydW5Nb3VudENhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKHBvcHBlck9wdGlvbnMgJiYgcG9wcGVyT3B0aW9ucy5vblVwZGF0ZSkge1xuICAgICAgICAgIHBvcHBlck9wdGlvbnMub25VcGRhdGUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID0gbmV3IFBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgY29uZmlnKTtcbiAgfVxuICAvKipcbiAgICogTW91bnRzIHRoZSB0b29sdGlwIHRvIHRoZSBET01cbiAgICovXG5cblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBoYXNNb3VudENhbGxiYWNrUnVuID0gZmFsc2U7XG4gICAgdmFyIGlzSW5Mb29zZUZvbGxvd0N1cnNvck1vZGUgPSBnZXRJc0luTG9vc2VGb2xsb3dDdXJzb3JNb2RlKCk7XG5cbiAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIHNldEZsaXBNb2RpZmllckVuYWJsZWQoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UubW9kaWZpZXJzLCBpbnN0YW5jZS5wcm9wcy5mbGlwKTtcblxuICAgICAgaWYgKCFpc0luTG9vc2VGb2xsb3dDdXJzb3JNb2RlKSB7XG4gICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2Uuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcblxuICAgICAgaWYgKCFpc0luTG9vc2VGb2xsb3dDdXJzb3JNb2RlKSB7XG4gICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLmVuYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFwcGVuZFRvID0gaW5zdGFuY2UucHJvcHMuYXBwZW5kVG87XG4gICAgdmFyIHBhcmVudE5vZGUgPSBhcHBlbmRUbyA9PT0gJ3BhcmVudCcgPyByZWZlcmVuY2UucGFyZW50Tm9kZSA6IGludm9rZVdpdGhBcmdzT3JSZXR1cm4oYXBwZW5kVG8sIFtyZWZlcmVuY2VdKTtcblxuICAgIGlmICghcGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpKSB7XG4gICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHBvcHBlcik7XG4gICAgICBpbnN0YW5jZS5wcm9wcy5vbk1vdW50KGluc3RhbmNlKTtcbiAgICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXR1cCBiZWZvcmUgc2hvdygpIGlzIGludm9rZWQgKGRlbGF5cywgZXRjLilcbiAgICovXG5cblxuICBmdW5jdGlvbiBzY2hlZHVsZVNob3coZXZlbnQsIHNob3VsZEF2b2lkQ2FsbGluZ09uVHJpZ2dlcikge1xuICAgIGNsZWFyRGVsYXlUaW1lb3V0cygpO1xuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSXMgYSBkZWxlZ2F0ZSwgY3JlYXRlIGFuIGluc3RhbmNlIGZvciB0aGUgY2hpbGQgdGFyZ2V0XG5cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy50YXJnZXQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWxlZ2F0ZUNoaWxkVGlwcHkoZXZlbnQpO1xuICAgIH1cblxuICAgIGlzU2NoZWR1bGVkVG9TaG93ID0gdHJ1ZTtcblxuICAgIGlmIChldmVudCAmJiAhc2hvdWxkQXZvaWRDYWxsaW5nT25UcmlnZ2VyKSB7XG4gICAgICBpbnN0YW5jZS5wcm9wcy5vblRyaWdnZXIoaW5zdGFuY2UsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMud2FpdCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnByb3BzLndhaXQoaW5zdGFuY2UsIGV2ZW50KTtcbiAgICB9IC8vIElmIHRoZSB0b29sdGlwIGhhcyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGJlIGxpc3RlbmluZyB0byB0aGUgbW91c2Vtb3ZlIGFzXG4gICAgLy8gc29vbiBhcyB0aGUgdHJpZ2dlciBldmVudCBpcyBmaXJlZCwgc28gdGhhdCBpdCdzIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uXG4gICAgLy8gdXBvbiBtb3VudC5cbiAgICAvLyBFZGdlIGNhc2U6IGlmIHRoZSB0b29sdGlwIGlzIHN0aWxsIG1vdW50ZWQsIGJ1dCB0aGVuIHNjaGVkdWxlU2hvdygpIGlzXG4gICAgLy8gY2FsbGVkLCBpdCBjYXVzZXMgYSBqdW1wLlxuXG5cbiAgICBpZiAoZ2V0SXNJbkxvb3NlRm9sbG93Q3Vyc29yTW9kZSgpICYmICFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgIGlmICghaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcG9zaXRpb25WaXJ0dWFsUmVmZXJlbmNlTmVhckN1cnNvcik7XG4gICAgfVxuXG4gICAgYWRkRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgdmFyIGRlbGF5ID0gZ2V0VmFsdWUoaW5zdGFuY2UucHJvcHMuZGVsYXksIDAsIGRlZmF1bHRQcm9wcy5kZWxheSk7XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHNob3dUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvdygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93KCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXR1cCBiZWZvcmUgaGlkZSgpIGlzIGludm9rZWQgKGRlbGF5cywgZXRjLilcbiAgICovXG5cblxuICBmdW5jdGlvbiBzY2hlZHVsZUhpZGUoKSB7XG4gICAgY2xlYXJEZWxheVRpbWVvdXRzKCk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgcmVtb3ZlRm9sbG93Q3Vyc29yTGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZURvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlzU2NoZWR1bGVkVG9TaG93ID0gZmFsc2U7XG4gICAgdmFyIGRlbGF5ID0gZ2V0VmFsdWUoaW5zdGFuY2UucHJvcHMuZGVsYXksIDEsIGRlZmF1bHRQcm9wcy5kZWxheSk7XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGhpZGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICAgIGhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGaXhlcyBhIGB0cmFuc2l0aW9uZW5kYCBwcm9ibGVtIHdoZW4gaXQgZmlyZXMgMSBmcmFtZSB0b29cbiAgICAgIC8vIGxhdGUgc29tZXRpbWVzLCB3ZSBkb24ndCB3YW50IGhpZGUoKSB0byBiZSBjYWxsZWQuXG4gICAgICBzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBMaXN0ZW5lciB0byBoYW5kbGUgY2xpY2tzIG9uIHRoZSBkb2N1bWVudCB0byBkZXRlcm1pbmUgaWYgdGhlXG4gICAqIGluc3RhbmNlIHNob3VsZCBoaWRlXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrKGV2ZW50KSB7XG4gICAgLy8gQ2xpY2tlZCBvbiBpbnRlcmFjdGl2ZSBwb3BwZXJcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgcG9wcGVyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENsaWNrZWQgb24gdGhlIGV2ZW50IGxpc3RlbmVycyB0YXJnZXRcblxuXG4gICAgaWYgKGdldEV2ZW50TGlzdGVuZXJzVGFyZ2V0KCkuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgaWYgKGlzVXNpbmdUb3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgaW5jbHVkZXMoaW5zdGFuY2UucHJvcHMudHJpZ2dlciwgJ2NsaWNrJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5oaWRlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuICB9XG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09IPCflJEgUHVibGljIG1ldGhvZHMg8J+UkSA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBpbnN0YW5jZSB0byBhbGxvdyBpdCB0byBzaG93IG9yIGhpZGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGluc3RhbmNlIHRvIGRpc2FsbG93IGl0IHRvIHNob3cgb3IgaGlkZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIENsZWFycyBwZW5kaW5nIHRpbWVvdXRzIHJlbGF0ZWQgdG8gdGhlIGBkZWxheWAgcHJvcCBpZiBhbnlcbiAgICovXG5cblxuICBmdW5jdGlvbiBjbGVhckRlbGF5VGltZW91dHMoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHNob3dUaW1lb3V0SWQpO1xuICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dElkKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZUlkKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBuZXcgcHJvcHMgZm9yIHRoZSBpbnN0YW5jZSBhbmQgcmVkcmF3cyB0aGUgdG9vbHRpcFxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdGlibGUgYWZ0ZXIgVHlwZVNjcmlwdCBjaGFuZ2VcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucywgZGVmYXVsdFByb3BzKTtcbiAgICByZW1vdmVUcmlnZ2Vyc0Zyb21SZWZlcmVuY2UoKTtcbiAgICB2YXIgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgdmFyIG5leHRQcm9wcyA9IGV2YWx1YXRlUHJvcHMocmVmZXJlbmNlLCBfZXh0ZW5kcyh7fSwgaW5zdGFuY2UucHJvcHMsIHt9LCBvcHRpb25zLCB7XG4gICAgICBpZ25vcmVBdHRyaWJ1dGVzOiB0cnVlXG4gICAgfSkpO1xuICAgIG5leHRQcm9wcy5pZ25vcmVBdHRyaWJ1dGVzID0gaGFzT3duUHJvcGVydHkob3B0aW9ucywgJ2lnbm9yZUF0dHJpYnV0ZXMnKSA/IG9wdGlvbnMuaWdub3JlQXR0cmlidXRlcyB8fCBmYWxzZSA6IHByZXZQcm9wcy5pZ25vcmVBdHRyaWJ1dGVzO1xuICAgIGluc3RhbmNlLnByb3BzID0gbmV4dFByb3BzO1xuICAgIGFkZFRyaWdnZXJzVG9SZWZlcmVuY2UoKTtcbiAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2Uob25Nb3VzZU1vdmUsIG5leHRQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKTtcbiAgICB1cGRhdGVQb3BwZXJFbGVtZW50KHBvcHBlciwgcHJldlByb3BzLCBuZXh0UHJvcHMpO1xuICAgIGluc3RhbmNlLnBvcHBlckNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4ocG9wcGVyKTtcblxuICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgaWYgKFBPUFBFUl9JTlNUQU5DRV9ERVBFTkRFTkNJRVMuc29tZShmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gaGFzT3duUHJvcGVydHkob3B0aW9ucywgcHJvcCkgJiYgb3B0aW9uc1twcm9wXSAhPT0gcHJldlByb3BzW3Byb3BdO1xuICAgICAgfSkpIHtcbiAgICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5lbmFibGVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvciAmJiBsYXN0TW91c2VNb3ZlRXZlbnQpIHtcbiAgICAgICAgICBwb3NpdGlvblZpcnR1YWxSZWZlcmVuY2VOZWFyQ3Vyc29yKGxhc3RNb3VzZU1vdmVFdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2hvcnRjdXQgZm9yIC5zZXQoeyBjb250ZW50OiBuZXdDb250ZW50IH0pXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgc2V0KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU2hvd3MgdGhlIHRvb2x0aXBcbiAgICovXG5cblxuICBmdW5jdGlvbiBzaG93KCkge1xuICAgIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0VmFsdWUoaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sIDAsIGRlZmF1bHRQcm9wcy5kdXJhdGlvblsxXSk7XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQgfHwgIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCB8fCBpc1VzaW5nVG91Y2ggJiYgIWluc3RhbmNlLnByb3BzLnRvdWNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBTdGFuZGFyZGl6ZSBgZGlzYWJsZWRgIGJlaGF2aW9yIGFjcm9zcyBicm93c2Vycy5cbiAgICAvLyBGaXJlZm94IGFsbG93cyBldmVudHMgb24gZGlzYWJsZWQgZWxlbWVudHMsIGJ1dCBDaHJvbWUgZG9lc24ndC5cbiAgICAvLyBVc2luZyBhIHdyYXBwZXIgZWxlbWVudCAoaS5lLiA8c3Bhbj4pIGlzIHJlY29tbWVuZGVkLlxuXG5cbiAgICBpZiAoZ2V0RXZlbnRMaXN0ZW5lcnNUYXJnZXQoKS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93KGluc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhZGREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICBwb3BwZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICBnZXRFdmVudExpc3RlbmVyc1RhcmdldCgpLmNsYXNzTGlzdC5hZGQoQUNUSVZFX0NMQVNTKTtcbiAgICB9IC8vIFByZXZlbnQgYSB0cmFuc2l0aW9uIGlmIHRoZSBwb3BwZXIgaXMgYXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudFxuXG5cbiAgICB2YXIgdHJhbnNpdGlvbmFibGVFbGVtZW50cyA9IGdldFRyYW5zaXRpb25hYmxlRWxlbWVudHMoKTtcbiAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24odHJhbnNpdGlvbmFibGVFbGVtZW50cy5jb25jYXQocG9wcGVyKSwgMCk7XG5cbiAgICBjdXJyZW50TW91bnRDYWxsYmFjayA9IGZ1bmN0aW9uIGN1cnJlbnRNb3VudENhbGxiYWNrKCkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNJbkxvb3NlRm9sbG93Q3Vyc29yTW9kZSA9IGdldElzSW5Mb29zZUZvbGxvd0N1cnNvck1vZGUoKTtcblxuICAgICAgaWYgKGlzSW5Mb29zZUZvbGxvd0N1cnNvck1vZGUgJiYgbGFzdE1vdXNlTW92ZUV2ZW50KSB7XG4gICAgICAgIHBvc2l0aW9uVmlydHVhbFJlZmVyZW5jZU5lYXJDdXJzb3IobGFzdE1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzSW5Mb29zZUZvbGxvd0N1cnNvck1vZGUpIHtcbiAgICAgICAgLy8gRG91YmxlIHVwZGF0ZSB3aWxsIGFwcGx5IGNvcnJlY3QgbXV0YXRpb25zXG4gICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2UucG9wcGVyQ2hpbGRyZW4uYmFja2Ryb3ApIHtcbiAgICAgICAgaW5zdGFuY2UucG9wcGVyQ2hpbGRyZW4uY29udGVudC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBNYXRoLnJvdW5kKGR1cmF0aW9uIC8gMTIpICsgJ21zJztcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnN0aWNreSkge1xuICAgICAgICBtYWtlU3RpY2t5KCk7XG4gICAgICB9XG5cbiAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbcG9wcGVyXSwgaW5zdGFuY2UucHJvcHMudXBkYXRlRHVyYXRpb24pO1xuICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRyYW5zaXRpb25hYmxlRWxlbWVudHMsIGR1cmF0aW9uKTtcbiAgICAgIHNldFZpc2liaWxpdHlTdGF0ZSh0cmFuc2l0aW9uYWJsZUVsZW1lbnRzLCAndmlzaWJsZScpO1xuICAgICAgb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuYXJpYSkge1xuICAgICAgICAgIGdldEV2ZW50TGlzdGVuZXJzVGFyZ2V0KCkuc2V0QXR0cmlidXRlKFwiYXJpYS1cIi5jb25jYXQoaW5zdGFuY2UucHJvcHMuYXJpYSksIHBvcHBlci5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5vblNob3duKGluc3RhbmNlKTtcbiAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNTaG93biA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgbW91bnQoKTtcbiAgfVxuICAvKipcbiAgICogSGlkZXMgdGhlIHRvb2x0aXBcbiAgICovXG5cblxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0VmFsdWUoaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sIDEsIGRlZmF1bHRQcm9wcy5kdXJhdGlvblsxXSk7XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQgfHwgIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCAmJiAhaXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkhpZGUoaW5zdGFuY2UpID09PSBmYWxzZSAmJiAhaXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlbW92ZURvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNTaG93biA9IGZhbHNlO1xuICAgIHdhc1Zpc2libGVEdXJpbmdQcmV2aW91c1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICBnZXRFdmVudExpc3RlbmVyc1RhcmdldCgpLmNsYXNzTGlzdC5yZW1vdmUoQUNUSVZFX0NMQVNTKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNpdGlvbmFibGVFbGVtZW50cyA9IGdldFRyYW5zaXRpb25hYmxlRWxlbWVudHMoKTtcbiAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24odHJhbnNpdGlvbmFibGVFbGVtZW50cywgZHVyYXRpb24pO1xuICAgIHNldFZpc2liaWxpdHlTdGF0ZSh0cmFuc2l0aW9uYWJsZUVsZW1lbnRzLCAnaGlkZGVuJyk7XG4gICAgb25UcmFuc2l0aW9uZWRPdXQoZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaXNTY2hlZHVsZWRUb1Nob3cpIHtcbiAgICAgICAgcmVtb3ZlRm9sbG93Q3Vyc29yTGlzdGVuZXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFyaWEpIHtcbiAgICAgICAgZ2V0RXZlbnRMaXN0ZW5lcnNUYXJnZXQoKS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLVwiLmNvbmNhdChpbnN0YW5jZS5wcm9wcy5hcmlhKSk7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2Uub3B0aW9ucy5wbGFjZW1lbnQgPSBpbnN0YW5jZS5wcm9wcy5wbGFjZW1lbnQ7XG4gICAgICBwb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3BwZXIpO1xuICAgICAgaW5zdGFuY2UucHJvcHMub25IaWRkZW4oaW5zdGFuY2UpO1xuICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSB0b29sdGlwXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZGVzdHJveShkZXN0cm95VGFyZ2V0SW5zdGFuY2VzKSB7XG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7IC8vIElmIHRoZSBwb3BwZXIgaXMgY3VycmVudGx5IG1vdW50ZWQgdG8gdGhlIERPTSwgd2Ugd2FudCB0byBlbnN1cmUgaXQgZ2V0c1xuICAgIC8vIGhpZGRlbiBhbmQgdW5tb3VudGVkIGluc3RhbnRseSB1cG9uIGRlc3RydWN0aW9uXG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICBoaWRlKDApO1xuICAgIH1cblxuICAgIHJlbW92ZVRyaWdnZXJzRnJvbVJlZmVyZW5jZSgpO1xuICAgIGRlbGV0ZSByZWZlcmVuY2UuX3RpcHB5O1xuICAgIHZhciB0YXJnZXQgPSBpbnN0YW5jZS5wcm9wcy50YXJnZXQ7XG5cbiAgICBpZiAodGFyZ2V0ICYmIGRlc3Ryb3lUYXJnZXRJbnN0YW5jZXMgJiYgaXNSZWFsRWxlbWVudChyZWZlcmVuY2UpKSB7XG4gICAgICBhcnJheUZyb20ocmVmZXJlbmNlLnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLl90aXBweSkge1xuICAgICAgICAgIGNoaWxkLl90aXBweS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGlzQmVpbmdEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBHcm91cHMgYW4gYXJyYXkgb2YgaW5zdGFuY2VzIGJ5IHRha2luZyBjb250cm9sIG9mIHRoZWlyIHByb3BzIGR1cmluZ1xuICogY2VydGFpbiBsaWZlY3ljbGVzLlxuICovXG5mdW5jdGlvbiBncm91cChpbnN0YW5jZXMpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgX3JlZiRkZWxheSA9IF9yZWYuZGVsYXksXG4gICAgICBkZWxheSA9IF9yZWYkZGVsYXkgPT09IHZvaWQgMCA/IGluc3RhbmNlc1swXS5wcm9wcy5kZWxheSA6IF9yZWYkZGVsYXksXG4gICAgICBfcmVmJGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbixcbiAgICAgIGR1cmF0aW9uID0gX3JlZiRkdXJhdGlvbiA9PT0gdm9pZCAwID8gMCA6IF9yZWYkZHVyYXRpb247XG5cbiAgdmFyIGlzQW55VGlwcHlPcGVuID0gZmFsc2U7XG4gIGluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS5fb3JpZ2luYWxQcm9wcykge1xuICAgICAgaW5zdGFuY2Uuc2V0KGluc3RhbmNlLl9vcmlnaW5hbFByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UuX29yaWdpbmFsUHJvcHMgPSBfZXh0ZW5kcyh7fSwgaW5zdGFuY2UucHJvcHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2V0SXNBbnlUaXBweU9wZW4odmFsdWUpIHtcbiAgICBpc0FueVRpcHB5T3BlbiA9IHZhbHVlO1xuICAgIHVwZGF0ZUluc3RhbmNlcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TaG93KGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuX29yaWdpbmFsUHJvcHMub25TaG93KGluc3RhbmNlKTtcblxuICAgIGluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2Uuc2V0KHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0SXNBbnlUaXBweU9wZW4odHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkhpZGUoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5fb3JpZ2luYWxQcm9wcy5vbkhpZGUoaW5zdGFuY2UpO1xuXG4gICAgc2V0SXNBbnlUaXBweU9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TaG93bihpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLl9vcmlnaW5hbFByb3BzLm9uU2hvd24oaW5zdGFuY2UpO1xuXG4gICAgaW5zdGFuY2Uuc2V0KHtcbiAgICAgIGR1cmF0aW9uOiBpbnN0YW5jZS5fb3JpZ2luYWxQcm9wcy5kdXJhdGlvblxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlSW5zdGFuY2VzKCkge1xuICAgIGluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2Uuc2V0KHtcbiAgICAgICAgb25TaG93OiBvblNob3csXG4gICAgICAgIG9uU2hvd246IG9uU2hvd24sXG4gICAgICAgIG9uSGlkZTogb25IaWRlLFxuICAgICAgICBkZWxheTogaXNBbnlUaXBweU9wZW4gPyBbMCwgQXJyYXkuaXNBcnJheShkZWxheSkgPyBkZWxheVsxXSA6IGRlbGF5XSA6IGRlbGF5LFxuICAgICAgICBkdXJhdGlvbjogaXNBbnlUaXBweU9wZW4gPyBkdXJhdGlvbiA6IGluc3RhbmNlLl9vcmlnaW5hbFByb3BzLmR1cmF0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUluc3RhbmNlcygpO1xufVxuXG52YXIgZ2xvYmFsRXZlbnRMaXN0ZW5lcnNCb3VuZCA9IGZhbHNlO1xuLyoqXG4gKiBFeHBvcnRlZCBtb2R1bGVcbiAqL1xuXG5mdW5jdGlvbiB0aXBweSh0YXJnZXRzLCBvcHRpb25zKSB7XG4gIHZhbGlkYXRlT3B0aW9ucyhvcHRpb25zIHx8IHt9LCBkZWZhdWx0UHJvcHMpO1xuXG4gIGlmICghZ2xvYmFsRXZlbnRMaXN0ZW5lcnNCb3VuZCkge1xuICAgIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpO1xuICAgIGdsb2JhbEV2ZW50TGlzdGVuZXJzQm91bmQgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcywge30sIG9wdGlvbnMpOyAvLyBJZiB0aGV5IGFyZSBzcGVjaWZ5aW5nIGEgdmlydHVhbCBwb3NpdGlvbmluZyByZWZlcmVuY2UsIHdlIG5lZWQgdG8gcG9seWZpbGxcbiAgLy8gc29tZSBuYXRpdmUgRE9NIHByb3BzXG5cblxuICBpZiAoaXNCYXJlVmlydHVhbEVsZW1lbnQodGFyZ2V0cykpIHtcbiAgICBwb2x5ZmlsbEVsZW1lbnRQcm90b3R5cGVQcm9wZXJ0aWVzKHRhcmdldHMpO1xuICB9XG5cbiAgdmFyIGluc3RhbmNlcyA9IGdldEFycmF5T2ZFbGVtZW50cyh0YXJnZXRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcmVmZXJlbmNlKSB7XG4gICAgdmFyIGluc3RhbmNlID0gcmVmZXJlbmNlICYmIGNyZWF0ZVRpcHB5KHJlZmVyZW5jZSwgcHJvcHMpO1xuXG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBhY2MucHVzaChpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICByZXR1cm4gaXNTaW5ndWxhcih0YXJnZXRzKSA/IGluc3RhbmNlc1swXSA6IGluc3RhbmNlcztcbn1cbi8qKlxuICogU3RhdGljIHByb3BzXG4gKi9cblxuXG50aXBweS52ZXJzaW9uID0gdmVyc2lvbjtcbnRpcHB5LmRlZmF1bHRzID0gZGVmYXVsdFByb3BzO1xuLyoqXG4gKiBTdGF0aWMgbWV0aG9kc1xuICovXG5cbnRpcHB5LnNldERlZmF1bHRzID0gZnVuY3Rpb24gKHBhcnRpYWxEZWZhdWx0cykge1xuICBPYmplY3Qua2V5cyhwYXJ0aWFsRGVmYXVsdHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBkZWZhdWx0UHJvcHNba2V5XSA9IHBhcnRpYWxEZWZhdWx0c1trZXldO1xuICB9KTtcbn07XG5cbnRpcHB5LmhpZGVBbGwgPSBoaWRlQWxsO1xudGlwcHkuZ3JvdXAgPSBncm91cDtcbi8qKlxuICogQXV0by1pbml0IHRvb2x0aXBzIGZvciBlbGVtZW50cyB3aXRoIGEgYGRhdGEtdGlwcHk9XCIuLi5cImAgYXR0cmlidXRlXG4gKi9cblxuZnVuY3Rpb24gYXV0b0luaXQoKSB7XG4gIGFycmF5RnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10aXBweV0nKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICB2YXIgY29udGVudCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10aXBweScpO1xuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIHRpcHB5KGVsLCB7XG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmIChpc0Jyb3dzZXIpIHtcbiAgc2V0VGltZW91dChhdXRvSW5pdCk7XG59XG5cbi8qKlxuICogSW5qZWN0cyBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIHRvIGEgc3R5bGUgbm9kZSBpbiA8aGVhZD5cbiAqL1xuXG5mdW5jdGlvbiBpbmplY3RDU1MoY3NzKSB7XG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gY3NzO1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS10aXBweS1zdHlsZXNoZWV0JywgJycpO1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZDtcbiAgICB2YXIgZmlyc3RTdHlsZU9yTGlua1RhZyA9IGhlYWQucXVlcnlTZWxlY3Rvcignc3R5bGUsbGluaycpO1xuXG4gICAgaWYgKGZpcnN0U3R5bGVPckxpbmtUYWcpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBmaXJzdFN0eWxlT3JMaW5rVGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9XG59XG5cbmluamVjdENTUyhjc3MpO1xuXG5leHBvcnQgZGVmYXVsdCB0aXBweTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmFsbC5qcy5tYXBcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=