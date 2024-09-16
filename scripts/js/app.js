(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "context": "You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math.",
        "question": "Find some examples of how math learning is incorporated at Washington University Nursery School.",
        "tag": "math"
    },
    {
        "context": "You are investigating pre-school options for your 4 year old. Both you and your spouse work, so you need to fully understand what scheduling constraints each option involves. One of your schools of interest is the Washington University Nursery School.",
        "question": "When does school start and end each day? What is the longest period of time that your child can be there?",
        "tag": "school_day"
    },
    {
        "context": "You are investigating pre-school options for your 3.5 year old. You’ve been told that one of the hallmarks of a good program is teachers who have been there for a long time. You want your child to attend in the mornings only.",
        "question": "Which teachers would your child have and how long have they been at the school?",
        "tag": "teacher_tenure"
    },
    {
        "context": "You are starting to look at summer camp options and have heard good things about Washington University Nursery School for young children.",
        "question": "What are the daily camp hours? Are there any extended day opportunities?",
        "tag": "summer_camp"
    },
    {
        "context": "You are investigating pre-school options for your spirited 3 year old and want to understand their approach to discipline.",
        "question": "How do teachers at Washington University approach discipline?",
        "tag": "discipline"
    },
    {
        "context": "Your daughter is in the Teddy Bear class at Washington University Nursery School. She came home this week singing a song in Spanish about shapes, but you are pretty sure that she has some of the words wrong.",
        "question": "What are the correct lyrics?",
        "tag": "spanish_song"
    },
    {
        "context": "It is mid-December and you are thinking about things to do over your daughter's upcoming school break. She is 3 years old and attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
        "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
        "tag": "books"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You want to accept the offer of admission.",
        "question": "Figure out what you need to do at this time to finalize your child’s place at the school.",
        "tag": "admission_2"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You need to pay one month of tuition as a deposit.",
        "question": "Find out how much one month of tuition is and whether or not it is possible to pay online.",
        "tag": "deposit"
    },
    {
        "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
        "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
        "tag": "help"
    },
    {
        "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
        "question": "How does the Washington University Nursery School handle communicating with parents?",
        "tag": "communication"
    },
    {
        "context": "It’s mid-December and your son, age 4, came home all excited about science class. They learned a new word, but he can’t actually remember the word they learned about.",
        "question": "What was the topic of his recent science class?",
        "tag": "science"
    },
    {
        "context": "You are selecting a pre-school, but want to be sure that your daughter will be ready for kindergarten when it’s time.",
        "question": "How does the nursery school assess children’s knowledge, support their growth, and share the results with parents?",
        "tag": "parent_teacher_conference"
    },
    {
        "context": "You have recently accepted a position for your child for the coming school year at the Washington University Nursery School. Up to this point, your child has been at home and you are somewhat worried about the transition.",
        "question": "How does the nursery school support kids’ transitions into school?",
        "tag": "orientation"
    }
]

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.Data = exports.urlData = void 0;
console.log('data loaded.');
var urlParams = new URL(window.location.href).searchParams;
exports.urlData = {
    raw: urlParams.toString(),
    assignmentID: urlParams.get('assignmentId'),
    hitID: urlParams.get('hitId'),
    workerID: urlParams.get('workerId'),
    submitTo: urlParams.get('turkSubmitTo'),
};
var Data = /** @class */ (function () {
    function Data(rawMturkURLData) {
        this.logs = {};
        this.data = {};
        this.errors = [];
        this.urlData = rawMturkURLData;
    }
    Data.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return Data;
}());
exports.Data = Data;
exports.data = new Data(exports.urlData);
Object.assign(window, { data: exports.data });

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryEvent = exports.ButtonEvent = exports.ClickEvent = exports.BaseTrackerEvent = exports.isTrackerEvent = exports.objectToTrackerEvent = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
console_wrapper_1.log("event loaded.", 2 /* BASIC */);
function objectToTrackerEvent(obj, action) {
    obj.action = action;
    obj.time = funcs_1.now();
}
exports.objectToTrackerEvent = objectToTrackerEvent;
function isTrackerEvent(obj) {
    return obj.action !== undefined && obj.time !== undefined;
}
exports.isTrackerEvent = isTrackerEvent;
var BaseTrackerEvent = /** @class */ (function () {
    function BaseTrackerEvent(action, eventInitDict) {
        this.custEv = new CustomEvent(action, eventInitDict);
        this.action = action;
        this.time = funcs_1.now();
    }
    Object.defineProperty(BaseTrackerEvent.prototype, "detail", {
        get: function () {
            return this.custEv.detail;
        },
        enumerable: false,
        configurable: true
    });
    return BaseTrackerEvent;
}());
exports.BaseTrackerEvent = BaseTrackerEvent;
// tslint:disable-next-line: max-classes-per-file
var ClickEvent = /** @class */ (function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(x, y, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.x = x;
        _this.detail.y = y;
        _this.detail.id = id;
        return _this;
    }
    return ClickEvent;
}(BaseTrackerEvent));
exports.ClickEvent = ClickEvent;
// tslint:disable-next-line: max-classes-per-file
var ButtonEvent = /** @class */ (function (_super) {
    __extends(ButtonEvent, _super);
    function ButtonEvent(key, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.key = key;
        _this.detail.id = id;
        return _this;
    }
    return ButtonEvent;
}(BaseTrackerEvent));
exports.ButtonEvent = ButtonEvent;
// tslint:disable-next-line: max-classes-per-file
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent(url, extra, eventInitDict) {
        var _this = _super.call(this, "history" /* HISTORY */, eventInitDict) || this;
        _this.detail.url = url;
        _this.detail.extra = extra;
        return _this;
    }
    return HistoryEvent;
}(BaseTrackerEvent));
exports.HistoryEvent = HistoryEvent;

},{"../utils/console_wrapper":16,"../utils/funcs":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventReceiver = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var event_1 = require("./event");
console_wrapper_1.log("receiver loaded.", 2 /* BASIC */);
var EventReceiver = /** @class */ (function () {
    function EventReceiver() {
        this.map = new Map();
        this.emitter = new EventTarget();
    }
    EventReceiver.prototype.register = function (eventType, callback) {
        this.emitter.addEventListener(eventType, function (event) {
            var trackEv = event
                .detail;
            if (event_1.isTrackerEvent(trackEv) && callback) {
                callback(trackEv);
            }
        });
        if (callback) {
            this.map.set(eventType, callback);
        }
    };
    EventReceiver.prototype.doEvent = function (event) {
        var callback = this.map.get("" + event.action);
        if (callback) {
            callback(event);
        }
    };
    return EventReceiver;
}());
exports.EventReceiver = EventReceiver;

},{"../utils/console_wrapper":16,"./event":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBanner = void 0;
var router_1 = require("../router/router");
var console_wrapper_1 = require("../utils/console_wrapper");
var history_1 = require("./../router/history");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log("banner loaded.", 2 /* BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () {
        TopBanner.showing ? TopBanner.hide() : TopBanner.show();
    };
    TopBanner.setup = function () {
        document_1.D.addEventListener(elements_1.Elements.ddArrow, "click", TopBanner.doDisplayChange);
    };
    TopBanner.showing = true;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
document_1.D.addEventListener("mturk-top-banner-back", "click", function (e) {
    if (history_1.History.canBackward()) {
        router_1.Router.loadWithPathPrefix(history_1.History.backward());
    }
    else {
        alert("There is no page history to go back for at this time!");
    }
});

},{"../router/router":14,"../utils/console_wrapper":16,"./../router/history":13,"./document":6,"./elements":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
console_wrapper_1.log("document loaded.", 2 /* BASIC */);
var D = /** @class */ (function () {
    function D() {
    }
    D.elem = function (elem) {
        if (typeof elem === "string") {
            return D.id(elem);
        }
        else {
            return elem;
        }
    };
    D.display = function (elem, show) {
        elem = D.elem(elem);
        if (show) {
            elem.classList.remove("none");
            elem.classList.add("display");
        }
        else {
            elem.classList.remove("display");
            elem.classList.add("none");
        }
    };
    D.id = function (id) {
        var element = D.doc.getElementById(id);
        if (element === null) {
            throw new Error("Element was not found, id: <" + id + ">.");
        }
        else {
            return element;
        }
    };
    D.claz = function (claz) {
        return D.doc.getElementsByClassName(claz);
    };
    D.tag = function (tag) {
        return D.doc.getElementsByTagName(tag);
    };
    D.image = function (id, url) {
        console_wrapper_1.error(function () { return D.id(id).setAttribute("src", url); });
    };
    D.addEventListener = function (elem, type, listener) {
        elem = this.elem(elem);
        var wrapperFunc = function (e) {
            try {
                listener(e);
            }
            catch (err) {
                console.error(err);
            }
        };
        elem.addEventListener(type, wrapperFunc);
        return wrapperFunc;
    };
    D.each = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            apply(children[i]);
        }
    };
    D.eachRecur = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            apply(child);
            D.eachRecur(child, apply);
        }
    };
    D.create = function (tagName, options) {
        return document.createElement(tagName, options);
    };
    D.doc = document;
    return D;
}());
exports.D = D;

},{"./../utils/console_wrapper":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elements = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
console_wrapper_1.log('element loaded.', 2 /* BASIC */);
/**
 * These are elements that are in every single project. Even if they are not used they should
 * be place in the project and display should be set to none. This simplifies configuration
 * and some common functions and allows less null checks to be performed overall. If the
 * element does not exist at run time an empty div with that id is created and its display
 * is set to none then appended to the body.
 */
/**
 * Attempts to get an element, if unsuccessful, creates div with id and appends to body.
 *
 * @param id - the id of the element to retrieve.
 */
function makeElemIfNotExist(id) {
    var elem;
    try {
        elem = document_1.D.id(id);
    }
    catch (err) {
        elem = document_1.D.create('div');
        elem.id = id;
        elem.style.display = 'none';
        document.body.append(elem);
    }
    return elem;
}
/**
 * Commonly accessed elements, allows for clearer dom manip on these elements.
 */
exports.Elements = {
    document: document_1.D.doc.documentElement,
    wrapper: makeElemIfNotExist('wrapper'),
    htmlLoc: makeElemIfNotExist('html-loc'),
    innerBody: makeElemIfNotExist('inner-body'),
    ddDown: makeElemIfNotExist('mturk-top-banner-drop-down-button'),
    ddUp: makeElemIfNotExist('mturk-top-banner-collapse-button'),
    ddContent: makeElemIfNotExist('mturk-top-banner-drop-down-content'),
    backButton: makeElemIfNotExist('mturk-top-banner-back'),
    ddArrow: makeElemIfNotExist('mturk-top-banner-arrow'),
    mtTopBannerText: makeElemIfNotExist('mturk-top-banner-text'),
    mtScenarioContext: makeElemIfNotExist('scenario_context'),
    mtScenarioQuestion: makeElemIfNotExist('scenario_question'),
    logFileInput: makeElemIfNotExist('mturk-top-banner-drop-down-content-log-file-input'),
    submitForm: makeElemIfNotExist('mturk-submit-form'),
    modal: makeElemIfNotExist('modal'),
};

},{"../utils/console_wrapper":16,"./document":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoc = exports.ModeEnum = exports.AppEnum = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var elements_1 = require("./../dom/elements");
console_wrapper_1.log('html loc loaded.', 2 /* BASIC */);
var AppEnum;
(function (AppEnum) {
    AppEnum["INFORMATION_FORAGING"] = "information-foraging";
    AppEnum["COGNITIVE_LOAD"] = "cognitive-load";
    AppEnum["GENDER_MAG"] = "gender-mag";
    AppEnum["ERROR"] = "error";
})(AppEnum = exports.AppEnum || (exports.AppEnum = {}));
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["REAL"] = "real";
    ModeEnum["SANDBOX"] = "sandbox";
    ModeEnum["TEST"] = "test";
    ModeEnum["ERROR"] = "error";
})(ModeEnum = exports.ModeEnum || (exports.ModeEnum = {}));
var HTMLLoc = /** @class */ (function () {
    function HTMLLoc() {
    }
    HTMLLoc.setup = function () {
        HTMLLoc.app = HTMLLoc.elem.dataset.app || AppEnum.ERROR;
        HTMLLoc.mode =
            HTMLLoc.elem.dataset.mode || ModeEnum.ERROR;
        HTMLLoc.scenario = HTMLLoc.elem.dataset.scenario || 'error';
    };
    HTMLLoc.elem = elements_1.Elements.htmlLoc;
    return HTMLLoc;
}());
exports.HTMLLoc = HTMLLoc;

},{"../utils/console_wrapper":16,"./../dom/elements":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('modal loaded.', 2 /* BASIC */);
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.display = function (src) {
        Modal.elem.setAttribute('style', "left: " + Math.round(window.pageXOffset) + "px; top: " + Math.round(window.pageYOffset) + "px;");
        Modal.elem.classList.replace('hide-modal', 'show-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = src;
        });
        document.body.classList.add('noscroll');
    };
    Modal.hide = function () {
        Modal.elem.classList.replace('show-modal', 'hide-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = '';
        });
        document.body.classList.remove('noscroll');
    };
    Modal.elem = elements_1.Elements.modal;
    return Modal;
}());
exports.Modal = Modal;
document_1.D.addEventListener(Modal.elem, 'click', function (e) {
    Modal.hide();
});
document_1.D.each(Modal.elem, function (node) {
    document_1.D.addEventListener(node, 'click', function (e) {
        e.preventDefault();
    });
});

},{"./../utils/console_wrapper":16,"./document":6,"./elements":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scroll = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("./../utils/funcs");
console_wrapper_1.log('scroll loaded.', 2 /* BASIC */);
/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
var Scroll = /** @class */ (function () {
    function Scroll(endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.dispatchEvent(new CustomEvent('scroll'));
            complete(args);
        };
    }
    Scroll.callback = function (endPos, duration, complete) {
        if (duration === void 0) { duration = 200; }
        if (complete === void 0) { complete = funcs_1.noop; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        var oldComplete = complete;
        complete = function () {
            Scroll.running = false;
            console_wrapper_1.error(oldComplete);
        };
        this.instance.update(endPos, duration, complete).attemptScroll();
    };
    Scroll.promise = function (endPos, duration) {
        var _this = this;
        if (duration === void 0) { duration = 200; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        return new Promise(function (resolve, reject) {
            try {
                var runResolver = function () {
                    Scroll.running = false;
                    resolve();
                };
                _this.instance
                    .update(endPos, duration, runResolver)
                    .attemptScroll();
            }
            catch (err) {
                Scroll.running = false;
                reject(err);
            }
        });
    };
    Object.defineProperty(Scroll, "isRunning", {
        get: function () {
            return Scroll.running;
        },
        enumerable: false,
        configurable: true
    });
    Scroll.prototype.update = function (endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = complete;
        return this;
    };
    Scroll.prototype.calcScrollAmount = function () {
        var curTime = funcs_1.now();
        var steps = Math.max(1, (this.duration - curTime) / Scroll.STEP_IN_MS);
        var curPos = window.pageYOffset;
        return Math.ceil((this.endPos - curPos) / steps);
    };
    Scroll.prototype.scroll = function () {
        window.scroll(0, this.calcScrollAmount());
        if (window.pageYOffset === this.endPos) {
            this.complete();
        }
        else {
            requestAnimationFrame(this.scroll);
        }
    };
    Scroll.prototype.attemptScroll = function () {
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, this.endPos);
        }
        this.scroll();
    };
    Scroll.STEP_IN_MS = 17;
    Scroll.running = false;
    Scroll.instance = new Scroll(0, 0, funcs_1.noop);
    return Scroll;
}());
exports.Scroll = Scroll;

},{"../utils/console_wrapper":16,"./../utils/funcs":17}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitForm = void 0;
var funcs_1 = require("../utils/funcs");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('submit form loaded.', 2 /* BASIC */);
var k = 'NcF2WRkUbf5tzj4bIvI981FqmS6pMlO83g2j7u5R';
var gate = 'https://2ykopq1oha.execute-api.us-east-1.amazonaws.com/PROD/logs';
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        SubmitForm.submitFunc = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, qp, queryString, urlParams;
            return __generator(this, function (_a) {
                event.preventDefault();
                allowed = allowSubmission.allow();
                if (allowed === null) {
                    qp = new URL(window.location.href).searchParams;
                    data_1.data.urlData.raw = window.location.href;
                    data_1.data.urlData.assignmentID = qp.get('assignmentId');
                    data_1.data.urlData.hitID = qp.get('hitId');
                    data_1.data.urlData.workerID = qp.get('workerId');
                    data_1.data.urlData.submitTo =
                        qp.get('turkSubmitTo') + '/mturk/externalSubmit';
                    if (data_1.data.urlData.assignmentID !== null) {
                        document_1.D.id('assignment-id').value =
                            data_1.data.urlData.assignmentID;
                    }
                    if (data_1.data.urlData.hitID !== null) {
                        document_1.D.id('hit-id').value =
                            data_1.data.urlData.hitID;
                    }
                    queryString = window.location.search;
                    urlParams = new URLSearchParams(queryString);
                    data_1.data.data.task = urlParams.get("tag");
                    data_1.data.data.response = document.getElementById("text-area").value;
                    console.log("\n\nPlease record this data for your user test: \n");
                    console.log("Note: this should be in your copy buffer if you want to just paste directly. \n");
                    console.log(JSON.stringify(data_1.data));
                    navigator.clipboard.writeText(JSON.stringify(data_1.data));
                    alert("User data successfully copied to clipboard. Please record into a text document.");
                    // (Elements.submitForm as HTMLFormElement).action = data.urlData
                    //     .submitTo as string;
                    // allowSubmission.preSubmit();
                    // const resp = await fetch(gate, {
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //         'x-api-key': k,
                    //     },
                    //     body: JSON.stringify({
                    //         sandbox: params.sandbox,
                    //         wustl_key: params.wustl_key,
                    //         project: params.project,
                    //         iteration: params.iteration,
                    //         tag: params.tag,
                    //         assignmentID: data.urlData.assignmentID,
                    //         hitID: data.urlData.hitID,
                    //         workerID: data.urlData.workerID,
                    //         log: data.serialize(),
                    //     }),
                    // }); // TODO: verify this actually works
                    // console.log(resp.status);
                    // console.log(await resp.json());
                    // if (resp.status !== 200) {
                    //     alert(
                    //         'You made a bad request with your submission. The server thinks that you made this error: ' +
                    //             (await resp.json()).error
                    //     );
                    //     return;
                    // }
                    // SubmitForm.elem.removeEventListener(
                    //     'submit',
                    //     SubmitForm.submitFunc
                    // );
                    // SubmitForm.elem.submit();
                }
                else {
                    alert(allowed);
                }
                return [2 /*return*/];
            });
        }); };
        SubmitForm.elem.addEventListener('submit', SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;

},{"../utils/funcs":17,"./../data-log/data":2,"./../utils/console_wrapper":16,"./document":6,"./elements":7}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerElements = void 0;
var banner_1 = require("./banner");
var html_loc_1 = require("./html_loc");
var TrackerElements = /** @class */ (function () {
    function TrackerElements() {
    }
    TrackerElements.setupTrackerElements = function () {
        // setup dom elements
        banner_1.TopBanner.setup();
        html_loc_1.HTMLLoc.setup();
    };
    return TrackerElements;
}());
exports.TrackerElements = TrackerElements;

},{"./banner":5,"./html_loc":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
var tracker_1 = require("./../tracker/tracker");
function newHistoryEntry(currURL, hasPrevURL, prevEntry, extra) {
    tracker_1.Tracker.getEventDispatchFunc('history')({ url: currURL, extra: extra });
    return {
        currURL: currURL,
        hasPrevURL: hasPrevURL,
        prevEntry: prevEntry,
        extra: extra,
        nextEntries: [],
    };
}
var History = /** @class */ (function () {
    function History() {
    }
    History.forward = function (url, extra) {
        var histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    };
    History.canBackward = function () {
        var _a, _b;
        return (History.currhistory.hasPrevURL &&
            !((_b = (_a = History.currhistory.prevEntry) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.wrapper));
    };
    History.backward = function () {
        if (!History.canBackward()) {
            throw new Error('Cannot go back any further.');
        }
        console.log(History.currhistory.prevEntry);
        var prevEntry = History.currhistory.prevEntry;
        var nextURL = prevEntry.currURL;
        var histEnt = newHistoryEntry(nextURL, prevEntry.hasPrevURL, prevEntry.prevEntry, { back: true });
        History.currhistory = histEnt;
        return nextURL;
    };
    History.setup = function (url, extra) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    };
    return History;
}());
exports.History = History;
window.h = History;

},{"./../tracker/tracker":15}],14:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var document_1 = require("../dom/document");
var elements_1 = require("../dom/elements");
var modal_1 = require("../dom/modal");
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
var html_loader_1 = require("../utils/html_loader");
var history_1 = require("./history");
console_wrapper_1.log('router loaded.', 2 /* BASIC */);
function testOn(elem, config) {
    return (elem.tagName === config.module &&
        (config.mode === 1 /* ON */ ||
            config.mode === 2 /* STANDARD_ALLOWANCES */));
}
function testAllowance(config) {
    return config.mode === 2 /* STANDARD_ALLOWANCES */;
}
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.configure = function (configs, pathPrefix) {
        configs.forEach(function (config) {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
        Router.pathPrefix = pathPrefix;
    };
    Router.setup = function (elem) {
        document_1.D.eachRecur(elem, function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(Router.configs.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var config = _c.value;
                    if (testOn(node, config)) {
                        config.setup(config, node);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Router.STANDARD_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
            var target = e.target;
            var url = target.href;
            history_1.History.forward(Router.getPathName(url));
            var ret = html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc);
            window.dispatchEvent(new CustomEvent('newPageLoad'));
            return ret;
        });
    };
    Router.ON_COMPLETE_SLL = function (post) {
        var _this = this;
        return function (e) {
            console_wrapper_1.error(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Router.STANDARD_LINK_LISTENER(e)];
                        case 1:
                            _a.sent();
                            post(e);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    };
    Router.IMAGE_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
        });
    };
    Router.FORM_OFF_LISTENER = function (e) {
        e.preventDefault();
        console.error('All forms except for the one in the top header are inactive.');
    };
    Router.defaultAllowancesOn = function () {
        Router.registerAllowance({ regex: Router.EMPTY, func: Router.EMPTY_RESPONDER }, { regex: Router.HASH_TAGS, func: Router.HASH_TAG_RESPONDER }, { regex: Router.AT_SYMBOL, func: Router.AT_SYMBOL_RESPONDER });
    };
    Router.defaultAllowancesOff = function () {
        Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS, Router.AT_SYMBOL);
    };
    Router.registerAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) {
            return Router.linkAllowances.set(regex.regex, regex.func);
        });
    };
    Router.unregisterAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) { return Router.linkAllowances.delete(regex); });
    };
    Router.clearAllowances = function () {
        Router.linkAllowances.clear();
    };
    Router.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        ret = _a.sent();
                        window.dispatchEvent(new CustomEvent('newPageLoad'));
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Router.loadWithPathPrefix = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = html_loader_1.HTMLLoader.loadURL(Router.pathPrefix + page, elements_1.Elements.htmlLoc);
                window.dispatchEvent(new CustomEvent('newPageLoad'));
                return [2 /*return*/, ret];
            });
        });
    };
    Router.upgradeConfig = function (config) {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    };
    Router.getPathName = function (url) {
        var ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    };
    Router.HASH_TAGS = new RegExp('#');
    Router.EMPTY = new RegExp('^$');
    Router.AT_SYMBOL = new RegExp('@');
    Router.HASH_TAG_RESPONDER = funcs_1.noop;
    Router.EMPTY_RESPONDER = function (event) { return event.preventDefault(); };
    Router.AT_SYMBOL_RESPONDER = function (event) {
        return event.preventDefault();
    };
    Router.pathPrefix = '';
    Router.SetupFunctions = {
        A: function (config, elem) {
            var aNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_1 = true;
                var href_1 = aNode.href;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = regex.test(href_1);
                    passesRegexTest_1 = passesRegexTest_1 && !test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_1) {
                    if (href_1.substr(href_1.length - 3) === 'pdf') {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            e.preventDefault();
                            modal_1.Modal.display(href_1);
                        });
                    }
                    else {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            return Router.STANDARD_LINK_LISTENER(e);
                        });
                    }
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.STANDARD_LINK_LISTENER(e);
                });
            }
        },
        IMG: function (config, elem) {
            var imgNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_2 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(imgNode.src);
                    passesRegexTest_2 = passesRegexTest_2 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_2) {
                    document_1.D.addEventListener(elem, 'click', function (e) {
                        return Router.IMAGE_LINK_LISTENER(e);
                    });
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.IMAGE_LINK_LISTENER(e);
                });
            }
        },
        FORM: function (config, elem) {
            var formNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_3 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(formNode.src);
                    passesRegexTest_3 = passesRegexTest_3 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_3) {
                    document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
                }
            }
            else {
                document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
            }
        },
    };
    Router.configs = new Map();
    Router.linkAllowances = new Map();
    Router.pathRegex = /\/([\w]+.html)/;
    return Router;
}());
exports.Router = Router;

},{"../dom/document":6,"../dom/elements":7,"../dom/modal":9,"../utils/console_wrapper":16,"../utils/funcs":17,"../utils/html_loader":18,"./history":13}],15:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
console_wrapper_1.log('tracker loaded.', 2 /* BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.context;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(' '),
                sub.lastIndexOf('.'),
                sub.lastIndexOf(','),
                sub.lastIndexOf('?'),
                sub.lastIndexOf('!'),
            ];
            var ind = Math.max.apply(Math, __spread(inds));
            sub = sub.substring(0, ind) + '...';
        }
        console.log(scen);
        console.log('loaded scen');
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        console_wrapper_1.setDebugLevel(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === 'object') {
                if (!event_1.isTrackerEvent(evData)) {
                    event_1.objectToTrackerEvent(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;

},{"../data-log/event":3,"../data-log/receiver":4,"../dom/elements":7,"../dom/tracker_elems":12,"../utils/console_wrapper":16,"./../data-log/data":2,"./../dom/submit_form":11}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.setDebugLevel = exports.errorHO = exports.error = void 0;
var data_1 = require("./../data-log/data");
log("console wrapper loaded.", 2 /* BASIC */);
function error(func) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, errorHO(func)()];
        });
    });
}
exports.error = error;
function errorHO(func) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, func(args)];
                }
                catch (error) {
                    data_1.data.errors.push(error);
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
}
exports.errorHO = errorHO;
var debugLevel = 2 /* BASIC */;
function setDebugLevel(level) {
    debugLevel = level;
}
exports.setDebugLevel = setDebugLevel;
function log(message, importance) {
    if (debugLevel >= importance) {
        console.log(message);
    }
}
exports.log = log;

},{"./../data-log/data":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = exports.noop = void 0;
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("funcs loaded.", 2 /* BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
exports.noop = noop;
function now() {
    return new Date().getTime();
}
exports.now = now;

},{"./console_wrapper":16}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoader = void 0;
var document_1 = require("../dom/document");
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
console_wrapper_1.log('html loader loaded.', 2 /* BASIC */);
var HTMLLoader = /** @class */ (function () {
    function HTMLLoader() {
    }
    HTMLLoader.finish = function () {
        HTMLLoader.finished = true;
        HTMLLoader.flattenTSLoadTags();
    };
    HTMLLoader.isFinished = function () {
        return HTMLLoader.finished;
    };
    HTMLLoader.cacheHTML = function (name, content) {
        if (HTMLLoader.finished) {
            throw new Error('Cannot cache new HTML entities after the application has been started.');
        }
        var tsl = document.createElement('ts-load');
        tsl.dataset.name = name;
        tsl.innerHTML = content;
        this.CACHE[name] = tsl;
    };
    HTMLLoader.registerPostLoadFunc = function (func) {
        console_wrapper_1.log('regsiter post load function', 3 /* DETAILED */);
        HTMLLoader.postLoadFunc = func;
    };
    HTMLLoader.load = function (html, elem) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin load', 3 /* DETAILED */);
                var context = document_1.D.elem(elem);
                var range = document.createRange();
                range.selectNodeContents(context);
                var frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, 'script');
                HTMLLoader.loadAllCachedElements(frag);
                context.innerHTML = '';
                context.appendChild(frag);
                console_wrapper_1.log('end load', 3 /* DETAILED */);
                HTMLLoader.postLoadFunc();
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.loadURL = function (url, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = HTMLLoader).load;
                        return [4 /*yield*/, HTMLLoader.getHTML(url)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), elem])];
                }
            });
        });
    };
    HTMLLoader.getHTML = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin request', 3 /* DETAILED */);
                var request_1 = new XMLHttpRequest();
                request_1.open('GET', url, true);
                request_1.send(null);
                request_1.onreadystatechange = function () {
                    if (request_1.readyState === 4) {
                        console_wrapper_1.log('resolve request', 3 /* DETAILED */);
                        resolve(request_1.responseText);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.removeTagsFromDocumentFragment = function (frag, tagName) {
        frag.querySelectorAll(tagName).forEach(function (tag) { return frag.removeChild(tag); });
    };
    HTMLLoader.flattenTSLoadTags = function () {
        console_wrapper_1.log('Flattening', 3 /* DETAILED */);
        var s = new Set();
        Object.keys(HTMLLoader.CACHE).forEach(function (name) {
            return (HTMLLoader.CACHE[name] = HTMLLoader.flattenTSLoadTag(HTMLLoader.getCachedContent(name), s, 0));
        });
    };
    HTMLLoader.multipleTabs = function (n) {
        var ret = '';
        for (var i = 0; i < n; i++) {
            ret += '\t';
        }
        return ret;
    };
    HTMLLoader.flattenTSLoadTag = function (elem, flattened, count) {
        var tabs = HTMLLoader.multipleTabs(count);
        if (count > 100) {
            alert('Check the console, an error has occurred.');
            throw new Error('It seems like you might have infinitely recursively nested tags.' +
                '\nHere are all of the tags that have been flattened so far: ' +
                flattened +
                '\nHere is the name of the current element: ' +
                elem.getAttribute('data-name'));
        }
        var name = elem.getAttribute('data-name');
        if (name === null) {
            return null;
        }
        var content = HTMLLoader.getCachedContent(name);
        if (content === null) {
            return null;
        }
        if (flattened.has(name)) {
            return content;
        }
        content.querySelectorAll('script').forEach(function (e) { return e.remove(); });
        content.querySelectorAll('ts-load').forEach(function (e) {
            var child = HTMLLoader.flattenTSLoadTag(e, flattened, count + 1);
            if (child !== null) {
                e.replaceWith(child);
            }
        });
        flattened.add(name);
        return content;
    };
    HTMLLoader.getCachedContent = function (name) {
        if (name === undefined || name === null) {
            return null;
        }
        var content = HTMLLoader.CACHE[name];
        if (content === undefined || content === null) {
            return null;
        }
        return content.cloneNode(true);
    };
    HTMLLoader.loadAllCachedElements = function (frag) {
        frag.querySelectorAll('ts-load').forEach(function (elem) {
            var name = elem.getAttribute('data-name');
            var content = HTMLLoader.getCachedContent(name);
            if (content != null) {
                elem.replaceWith(content);
            }
        });
    };
    HTMLLoader.CACHE = {};
    HTMLLoader.finished = false;
    HTMLLoader.postLoadFunc = funcs_1.noop;
    return HTMLLoader;
}());
exports.HTMLLoader = HTMLLoader;

},{"../dom/document":6,"./console_wrapper":16,"./funcs":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDGenerator = void 0;
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("id generator loaded", 2 /* BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () {
        IDGenerator.idCount = 0;
    };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: false,
        configurable: true
    });
    IDGenerator.applyID = function (elem) {
        elem.id = elem.id ? elem.id : IDGenerator.next;
    };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) {
        document_1.D.eachRecur(elem, this.applyID);
    };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () {
        IDGenerator.applyRecur(elements_1.Elements.htmlLoc);
    };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = "auto_gen_id_unq_";
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;

},{"../dom/elements":7,"./../dom/document":6,"./console_wrapper":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
var qParams = new URL(window.location.href).searchParams;
exports.params = {
    wustl_key: '',
    sandbox: false,
    project: '',
    iteration: 0,
    tag: '',
};
try {
    qParams.forEach(console.log);
    if (['wustl_key', 'sandbox', 'project', 'iteration', 'tag'].every(function (key) {
        console.log('key: ' + qParams.has(key));
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get('wustl_key');
        exports.params.sandbox = qParams.get('sandbox') === 'true';
        exports.params.project = qParams.get('project');
        exports.params.iteration = parseInt(qParams.get('iteration'), 10);
        exports.params.tag = qParams.get('tag');
    }
    else {
        console.log('missing query params');
        alert('This HIT is missing neccessary metadata, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
    }
}
catch (e) {
    console.log(e);
    alert(e);
    alert('This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
}

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilReady = exports.isReady = void 0;
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("ready loaded", 2 /* BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    console_wrapper_1.log("document is ready", 3 /* DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
exports.isReady = isReady;
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}
exports.waitUntilReady = waitUntilReady;

},{"./console_wrapper":16}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scenarios = void 0;
// tslint:disable-next-line: no-var-requires
exports.scenarios = require('./../../../../scenarios/scenarios.json');
window.scenarios = exports.scenarios;

},{"./../../../../scenarios/scenarios.json":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var document_1 = require("./../core/dom/document");
var Accordion = /** @class */ (function () {
    function Accordion(outer) {
        var _this = this;
        this.outer = outer;
        document_1.D.addEventListener(outer, "click", function () {
            /* Toggle between adding and removing the "active" class,
                      to highlight the button that controls the panel */
            _this.outer.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = _this.outer.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
    Accordion.setupAll = function () {
        Accordion.discardAll();
        var accordions = document_1.D.claz("accordion");
        for (var accIndex = 0; accIndex < accordions.length; ++accIndex) {
            var elem = accordions.item(accIndex);
            if (elem == null) {
                continue;
            }
            Accordion.accordions.push(new Accordion(elem));
        }
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.accordions = [];
    return Accordion;
}());
exports.Accordion = Accordion;

},{"./../core/dom/document":6}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomething = void 0;
function doSomething() {
    console.log("Put some code in here!");
}
exports.doSomething = doSomething;

},{}],25:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAll = exports.PutStudentPageLoadOperationsInsideThisStudentBody = void 0;
var html_loader_1 = require("../core/utils/html_loader");
var accordion_1 = require("./accordion");
var do_something_1 = require("./do-something");
var html_imports_1 = require("./html-imports");
var slideshow_1 = require("./slideshow");
var sticky_1 = require("./sticky");
// Put all function calls that need to be made on every page load inside the setupAll function body.
function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    do_something_1.doSomething();
    sticky_1.setupSticky();
}
exports.PutStudentPageLoadOperationsInsideThisStudentBody = PutStudentPageLoadOperationsInsideThisStudentBody;
function setupAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                case 1:
                    _a.sent();
                    console.log('reloading');
                    slideshow_1.Slideshow.setupAll();
                    accordion_1.Accordion.setupAll();
                    PutStudentPageLoadOperationsInsideThisStudentBody();
                    console.log('reloaded');
                    return [2 /*return*/];
            }
        });
    });
}
exports.setupAll = setupAll;
html_imports_1.itemsToCache.forEach(function (item) {
    html_loader_1.HTMLLoader.cacheHTML(item.name, item.content);
});
window.HTMLLoader = html_loader_1.HTMLLoader;
console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', function () { return setupAll(); });

},{"../core/utils/html_loader":18,"./accordion":23,"./do-something":24,"./html-imports":26,"./slideshow":29,"./sticky":30}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsToCache = void 0;
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: 'header',
        content: require('./html/header.html'),
    },
    {
        name: 'footer',
        content: require('./html/footer.html'),
    },
];

},{"./html/footer.html":27,"./html/header.html":28}],27:[function(require,module,exports){
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"footer-widgets\">\n      <aside class=\"widget site-contact\">\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\n        <p>6926 Forest Park Parkway</p>\n        <p>St. Louis, MO 63130</p>\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\n        <p>\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\n        </p>\n      </aside>\n\n      <div class=\"widget-wrapper\">\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\n          <div class=\"textwidget\">\n            <p>\n              Classes meet Mon. through Fri.<br>\n              Morning: 9-11:45 a.m.<br>\n              Afternoon: 12:30-3:15 p.m.<br>\n              Full day: 9 a.m.-3:15 p.m.\n            </p>\n          </div>\n        </aside>\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\n          <div class=\"textwidget\">\n            <p>\n              Experience the innovative approach and dynamic teaching\n              environment of the Washington University Nursery School.\n            </p>\n            <a href=\"files/apply.html\">Register Now</a>\n          </div>\n        </aside>\n      </div>\n    </div>\n    <div class=\"site-info\">\n      <p class=\"footer-copyright\">©2019 Washington University in St. Louis</p>\n    </div>\n  </div>\n</footer>";

},{}],28:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"321\" height=\"28\" viewBox=\"0 0 321 28\" class=\"washu-logo\"\n    aria-labelledby=\"title\">\n    <title id=\"title\">Washington University in St. Louis</title>\n    <path fill=\"#FFF\"\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\">\n    </path>\n    <path fill=\"#A51417\"\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\">\n    </path>\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\n      <path\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\">\n      </path>\n      <path\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\">\n      </path>\n      <path\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\">\n      </path>\n    </g>\n  </svg>\n</div>\n<header role=\"banner\">\n  <div class=\"container\">\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\n  </div>\n  <div id=\"main-menu-container\">\n    <div class=\"container\">\n      <div class=\"navbar\">\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"about\" href=\"files/about.html\">About\n            </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a>\n            <a id=\"staff\" href=\"files/staff.html\">Staff</a>\n            <a id=\"parent-handbook\" href=\"files/parent_handbook.html\">Parent Handbook</a>\n          </div>\n        </div>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"classrooms\" href=\"files/classrooms.html\">Classrooms\n            </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\">Curriculum Overview</a>\n            <a id=\"teddy-bears\" href=\"files/teddy_bears.html\">Teddy Bears</a>\n            <a id=\"panda-bears\" href=\"files/panda_bears.html\">Panda Bears</a>\n            <a id=\"bear-cubs\" href=\"files/bear_cubs.html\">Bear Cubs</a>\n            <a id=\"big-bears\" href=\"files/big_bears.html\">Big Bears</a>\n            <a id=\"sun-bears\" href=\"files/sun_bears.html\">Sun Bears</a>\n            <a id=\"bear-tracks\" href=\"files/bear_tracks.html\">Bear Tracks</a>\n            <a id=\"enrichment-program\" href=\"files/enrichment_programs.html\">Enrichment Program</a>\n          </div>\n        </div>\n        <a id=\"calendar\" href=\"files/calendar.html\">Calendar</a>\n        <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"get-involved\" href=\"files/get_involved.html\">Get Involved</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"nursery-school-merchandise\" href=\"files/nursery_school_merchandise.html\">Nursery School\n              Merchandise</a>\n            <a id=\"parent-association\" href=\"files/parent_association.html\">Parent Association</a>\n          </div>\n        </div>\n\n        <a id=\"apply\" href=\"files/apply.html\">Apply</a>\n        <a id=\"forms\" href=\"files/forms.html\">Forms</a>\n\n        <a id=\"parent-resources\" href=\"files/parent_resources.html\">Recommended Reading</a>\n      </div>\n    </div>\n  </div>\n</header>";

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slideshow = void 0;
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;

},{"./../core/dom/document":6}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSticky = void 0;
var header = document.getElementById("main-menu-container");
var sticky = header.offsetTop;
function setupSticky() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}
exports.setupSticky = setupSticky;

},{}],31:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var q_params_1 = require("../core/utils/q_params");
var data_1 = require("./../core/data-log/data");
var document_1 = require("./../core/dom/document");
var elements_1 = require("./../core/dom/elements");
var scroll_1 = require("./../core/dom/scroll");
var history_1 = require("./../core/router/history");
var router_1 = require("./../core/router/router");
var tracker_1 = require("./../core/tracker/tracker");
var html_loader_1 = require("./../core/utils/html_loader");
var id_generator_1 = require("./../core/utils/id_generator");
var ready_1 = require("./../core/utils/ready");
var scenarios_1 = require("./../core/utils/scenarios");
var setup = function () { return __awaiter(void 0, void 0, void 0, function () {
    var scenario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ready_1.waitUntilReady()];
            case 1:
                _a.sent();
                scenario = scenarios_1.scenarios.find(function (scen) { return scen.tag === q_params_1.params.tag; });
                if (!q_params_1.params.sandbox) {
                    if (scenario === null || scenario === undefined) {
                        alert('This HIT is broken and cannot be completed at this time.');
                    }
                    else {
                        tracker_1.Tracker.loadScenario(scenario);
                    }
                }
                tracker_1.Tracker.start({
                    keyPrefix: 'information-foraging',
                    bucketName: 'cse-256-log',
                    allowSubmission: {
                        allow: function () {
                            try {
                                var textArea = document_1.D.id('text-area');
                                console.log(textArea.value);
                                if (textArea.value === '') {
                                    return 'You must fill out the text box to turn this HIT in.';
                                }
                                else {
                                    return null;
                                }
                            }
                            catch (error) {
                                console.log(error);
                                return 'There was an error fill out the form and try again.';
                            }
                        },
                        preSubmit: function () {
                            data_1.data.data.response = document_1.D.id('text-area').value;
                            return;
                        },
                    },
                    debugLevel: 1 /* NONE */,
                    setup: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var sElem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // configure router
                                        router_1.Router.defaultAllowancesOn();
                                        router_1.Router.configure([
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "A" /* A */,
                                            },
                                            { mode: 0 /* OFF */, module: "FORM" /* FORM */ },
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "IMG" /* IMG */,
                                            },
                                        ], 'files/');
                                        history_1.History.setup(window.location.href, { wrapper: true });
                                        // configure html loader post operation
                                        html_loader_1.HTMLLoader.finish();
                                        html_loader_1.HTMLLoader.registerPostLoadFunc(function () {
                                            id_generator_1.IDGenerator.reset();
                                            id_generator_1.IDGenerator.attachIdsToAllElements();
                                            router_1.Router.setup(elements_1.Elements.htmlLoc);
                                            scroll_1.Scroll.promise(0);
                                        });
                                        // configure listeners on html loc
                                        document_1.D.addEventListener(elements_1.Elements.htmlLoc, "click" /* CLICK */, function (e) {
                                            var ev = e;
                                            var obj = {
                                                x: ev.clientX,
                                                y: ev.clientY,
                                                id: ev.target.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("click" /* CLICK */)(obj);
                                        });
                                        document_1.D.addEventListener(elements_1.Elements.document, 'keypress', function (e) {
                                            var ev = e;
                                            var obj = {
                                                key: ev.key,
                                                id: ev.srcElement.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("button" /* BUTTON */)(obj);
                                        });
                                        sElem = document.scrollingElement;
                                        document.addEventListener('scroll', function (e) {
                                            var dx = sElem.scrollLeft;
                                            var dy = sElem.scrollTop;
                                            var dtime = new Date().getTime();
                                            if (Math.abs(tracker_1.Tracker.lastPos.x - dx) > 10 ||
                                                (Math.abs(tracker_1.Tracker.lastPos.y - dy) > 10 &&
                                                    dtime - tracker_1.Tracker.lastPos.time > 100)) {
                                                tracker_1.Tracker.lastPos.x = dx;
                                                tracker_1.Tracker.lastPos.y = dy;
                                                tracker_1.Tracker.lastPos.time = dtime;
                                                var obj = { x: dx, y: dy };
                                                tracker_1.Tracker.getEventDispatchFunc("scroll" /* SCROLL */)(obj);
                                            }
                                        });
                                        // configure tracked events
                                        tracker_1.Tracker.registerEvent("history" /* HISTORY */);
                                        tracker_1.Tracker.registerEvent("button" /* BUTTON */);
                                        tracker_1.Tracker.registerEvent("click" /* CLICK */);
                                        tracker_1.Tracker.registerEvent("scroll" /* SCROLL */);
                                        // load first page
                                        return [4 /*yield*/, router_1.Router.load('files/index.html')];
                                    case 1:
                                        // load first page
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
setup();

},{"../core/utils/q_params":20,"./../core/data-log/data":2,"./../core/dom/document":6,"./../core/dom/elements":7,"./../core/dom/scroll":10,"./../core/router/history":13,"./../core/router/router":14,"./../core/tracker/tracker":15,"./../core/utils/html_loader":18,"./../core/utils/id_generator":19,"./../core/utils/ready":21,"./../core/utils/scenarios":22}]},{},[25,31])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vc3RpY2t5LnRzIiwic2NyaXB0cy90cy90cmFja2VyL3RyYWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2RUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQVM1QixJQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUVoRCxRQUFBLE9BQU8sR0FBaUI7SUFDakMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFH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O3FCQUN6QztpQkFDSixDQUFDLENBQUM7Ozs7S0FDTixDQUFDO0FBRUYsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz1bXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IGNvbnNpZGVyaW5nIHNlbmRpbmcgeW91ciBjaGlsZCB0byBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdeKAmXZlIGxlYXJuZWQgdGhhdCB0aGUgY3VycmljdWx1bSBpcyBwbGF5LWJhc2VkIGFuZCB5b3Ugd2FudCB0byBrbm93IGhvdyBsZWFybmluZyBpcyBpbmNvcnBvcmF0ZWQgaW50byBhIHBsYXktYmFzZWQgY29udGV4dC4gWW91IGhhdmUgc29tZSBpZGVhcyBhYm91dCBob3cgbGFuZ3VhZ2UgbGVhcm5pbmcgbWlnaHQgaGFwcGVuLCBidXQgYXJlIGxlc3Mgc3VyZSBhYm91dCBtYXRoLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiRmluZCBzb21lIGV4YW1wbGVzIG9mIGhvdyBtYXRoIGxlYXJuaW5nIGlzIGluY29ycG9yYXRlZCBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXCIsXG4gICAgICAgIFwidGFnXCI6IFwibWF0aFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgNCB5ZWFyIG9sZC4gQm90aCB5b3UgYW5kIHlvdXIgc3BvdXNlIHdvcmssIHNvIHlvdSBuZWVkIHRvIGZ1bGx5IHVuZGVyc3RhbmQgd2hhdCBzY2hlZHVsaW5nIGNvbnN0cmFpbnRzIGVhY2ggb3B0aW9uIGludm9sdmVzLiBPbmUgb2YgeW91ciBzY2hvb2xzIG9mIGludGVyZXN0IGlzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGVuIGRvZXMgc2Nob29sIHN0YXJ0IGFuZCBlbmQgZWFjaCBkYXk/IFdoYXQgaXMgdGhlIGxvbmdlc3QgcGVyaW9kIG9mIHRpbWUgdGhhdCB5b3VyIGNoaWxkIGNhbiBiZSB0aGVyZT9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJzY2hvb2xfZGF5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciAzLjUgeWVhciBvbGQuIFlvdeKAmXZlIGJlZW4gdG9sZCB0aGF0IG9uZSBvZiB0aGUgaGFsbG1hcmtzIG9mIGEgZ29vZCBwcm9ncmFtIGlzIHRlYWNoZXJzIHdobyBoYXZlIGJlZW4gdGhlcmUgZm9yIGEgbG9uZyB0aW1lLiBZb3Ugd2FudCB5b3VyIGNoaWxkIHRvIGF0dGVuZCBpbiB0aGUgbW9ybmluZ3Mgb25seS5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoaWNoIHRlYWNoZXJzIHdvdWxkIHlvdXIgY2hpbGQgaGF2ZSBhbmQgaG93IGxvbmcgaGF2ZSB0aGV5IGJlZW4gYXQgdGhlIHNjaG9vbD9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJ0ZWFjaGVyX3RlbnVyZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgc3RhcnRpbmcgdG8gbG9vayBhdCBzdW1tZXIgY2FtcCBvcHRpb25zIGFuZCBoYXZlIGhlYXJkIGdvb2QgdGhpbmdzIGFib3V0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBmb3IgeW91bmcgY2hpbGRyZW4uXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSB0aGUgZGFpbHkgY2FtcCBob3Vycz8gQXJlIHRoZXJlIGFueSBleHRlbmRlZCBkYXkgb3Bwb3J0dW5pdGllcz9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJzdW1tZXJfY2FtcFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgc3Bpcml0ZWQgMyB5ZWFyIG9sZCBhbmQgd2FudCB0byB1bmRlcnN0YW5kIHRoZWlyIGFwcHJvYWNoIHRvIGRpc2NpcGxpbmUuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG8gdGVhY2hlcnMgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IGFwcHJvYWNoIGRpc2NpcGxpbmU/XCIsXG4gICAgICAgIFwidGFnXCI6IFwiZGlzY2lwbGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdXIgZGF1Z2h0ZXIgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3MgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBTaGUgY2FtZSBob21lIHRoaXMgd2VlayBzaW5naW5nIGEgc29uZyBpbiBTcGFuaXNoIGFib3V0IHNoYXBlcywgYnV0IHlvdSBhcmUgcHJldHR5IHN1cmUgdGhhdCBzaGUgaGFzIHNvbWUgb2YgdGhlIHdvcmRzIHdyb25nLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgdGhlIGNvcnJlY3QgbHlyaWNzP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInNwYW5pc2hfc29uZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIkl0IGlzIG1pZC1EZWNlbWJlciBhbmQgeW91IGFyZSB0aGlua2luZyBhYm91dCB0aGluZ3MgdG8gZG8gb3ZlciB5b3VyIGRhdWdodGVyJ3MgdXBjb21pbmcgc2Nob29sIGJyZWFrLiBTaGUgaXMgMyB5ZWFycyBvbGQgYW5kIGF0dGVuZHMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBhbmQgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3Nyb29tLiBZb3UgYXJlIHBsYW5uaW5nIGEgdHJpcCB0byB0aGUgbGlicmFyeSBhbmQgd2FudCB0byBjaGVjayBvdXQgc29tZSBib29rcyB0aGF0IGNvbm5lY3Qgd2l0aCBzb21ldGhpbmcgc2hlIGlzIGRvaW5nIGluIHNjaG9vbC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHNvbWUgcG90ZW50aWFsIGJvb2sgdG9waWNzIHRoYXQgcmVsYXRlIHRvIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIG9uIGluIGhlciBjbGFzc3Jvb20gdGhpcyB3ZWVrP1wiLFxuICAgICAgICBcInRhZ1wiOiBcImJvb2tzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBhIHBhcmVudCB3aXRoIGEgY2hpbGQgd2hvIGhhcyBqdXN0IGJlZW4gYWNjZXB0ZWQgdG8gYXR0ZW5kIGFzIGEgZnVsbCB0aW1lIHN0dWRlbnQgYXQgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW91IHdhbnQgdG8gYWNjZXB0IHRoZSBvZmZlciBvZiBhZG1pc3Npb24uXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaWd1cmUgb3V0IHdoYXQgeW91IG5lZWQgdG8gZG8gYXQgdGhpcyB0aW1lIHRvIGZpbmFsaXplIHlvdXIgY2hpbGTigJlzIHBsYWNlIGF0IHRoZSBzY2hvb2wuXCIsXG4gICAgICAgIFwidGFnXCI6IFwiYWRtaXNzaW9uXzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IHdpdGggYSBjaGlsZCB3aG8gaGFzIGp1c3QgYmVlbiBhY2NlcHRlZCB0byBhdHRlbmQgYXMgYSBmdWxsIHRpbWUgc3R1ZGVudCBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3UgbmVlZCB0byBwYXkgb25lIG1vbnRoIG9mIHR1aXRpb24gYXMgYSBkZXBvc2l0LlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiRmluZCBvdXQgaG93IG11Y2ggb25lIG1vbnRoIG9mIHR1aXRpb24gaXMgYW5kIHdoZXRoZXIgb3Igbm90IGl0IGlzIHBvc3NpYmxlIHRvIHBheSBvbmxpbmUuXCIsXG4gICAgICAgIFwidGFnXCI6IFwiZGVwb3NpdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgbW92aW5nIHRvIFN0LiBMb3VpcyBmcm9tIEJlaWppbmcgYW5kIGxvb2tpbmcgZm9yIGEgUHJlLUsgcHJvZ3JhbSBmb3IgeW91ciBkYXVnaHRlciwgYWdlIDUuIFNoZSBpcyB2ZXJ5IGNsb3NlIHRvIGhlciBmcmllbmRzIGFuZCB5b3UgYXJlIHdvcnJpZWQgdGhhdCB0aGUgbW92ZSBtaWdodCBiZSBoYXJkIG9uIGhlci4gU2hlIG1heSBuZWVkIHNvbWUgZXh0cmEgc3VwcG9ydCBmcm9tIGhlciBuZXcgdGVhY2hlcnMgbGVhcm5pbmcgRW5nbGlzaCwgYWRhcHRpbmcgdG8gQW1lcmljYW4gY3VsdHVyZSwgYW5kIG1ha2luZyBuZXcgZnJpZW5kcy5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgc3RhZmYgYXBwcm9hY2ggcHJvdmlkaW5nIGV4dHJhIGhlbHAgdG8gc3R1ZGVudHMgd2hvIG5lZWQgaXQ/XCIsXG4gICAgICAgIFwidGFnXCI6IFwiaGVscFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgbG9va2luZyBhdCBOdXJzZXJ5IFNjaG9vbHMgZm9yIHlvdXIgc29vbiB0byBiZSAzIHllYXIgb2xkLiBIZSBoYXMgbmV2ZXIgYmVlbiBpbiBzY2hvb2wgb3IgZGF5Y2FyZSBiZWZvcmUgYW5kIHlvdSBhcmUgc29tZXdoYXQgd29ycmllZCBhYm91dCB0aGUgdHJhbnNpdGlvbi4gWW91J2QgbGlrZSB0byBlbnN1cmUgdGhhdCB5b3UnbGwgYmUgYWJsZSB0byBoYXZlIHN0cm9uZyBjb21tdW5pY2F0aW9uYXQgaGlzIG5ldyBzY2hvb2wuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGhhbmRsZSBjb21tdW5pY2F0aW5nIHdpdGggcGFyZW50cz9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJjb21tdW5pY2F0aW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiSXTigJlzIG1pZC1EZWNlbWJlciBhbmQgeW91ciBzb24sIGFnZSA0LCBjYW1lIGhvbWUgYWxsIGV4Y2l0ZWQgYWJvdXQgc2NpZW5jZSBjbGFzcy4gVGhleSBsZWFybmVkIGEgbmV3IHdvcmQsIGJ1dCBoZSBjYW7igJl0IGFjdHVhbGx5IHJlbWVtYmVyIHRoZSB3b3JkIHRoZXkgbGVhcm5lZCBhYm91dC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgd2FzIHRoZSB0b3BpYyBvZiBoaXMgcmVjZW50IHNjaWVuY2UgY2xhc3M/XCIsXG4gICAgICAgIFwidGFnXCI6IFwic2NpZW5jZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgc2VsZWN0aW5nIGEgcHJlLXNjaG9vbCwgYnV0IHdhbnQgdG8gYmUgc3VyZSB0aGF0IHlvdXIgZGF1Z2h0ZXIgd2lsbCBiZSByZWFkeSBmb3Iga2luZGVyZ2FydGVuIHdoZW4gaXTigJlzIHRpbWUuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgbnVyc2VyeSBzY2hvb2wgYXNzZXNzIGNoaWxkcmVu4oCZcyBrbm93bGVkZ2UsIHN1cHBvcnQgdGhlaXIgZ3Jvd3RoLCBhbmQgc2hhcmUgdGhlIHJlc3VsdHMgd2l0aCBwYXJlbnRzP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInBhcmVudF90ZWFjaGVyX2NvbmZlcmVuY2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgaGF2ZSByZWNlbnRseSBhY2NlcHRlZCBhIHBvc2l0aW9uIGZvciB5b3VyIGNoaWxkIGZvciB0aGUgY29taW5nIHNjaG9vbCB5ZWFyIGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFVwIHRvIHRoaXMgcG9pbnQsIHlvdXIgY2hpbGQgaGFzIGJlZW4gYXQgaG9tZSBhbmQgeW91IGFyZSBzb21ld2hhdCB3b3JyaWVkIGFib3V0IHRoZSB0cmFuc2l0aW9uLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIG51cnNlcnkgc2Nob29sIHN1cHBvcnQga2lkc+KAmSB0cmFuc2l0aW9ucyBpbnRvIHNjaG9vbD9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJvcmllbnRhdGlvblwiXG4gICAgfVxuXVxuIiwiaW1wb3J0IHsgVHJhY2tlckV2ZW50IH0gZnJvbSAnLi9ldmVudCc7XG5jb25zb2xlLmxvZygnZGF0YSBsb2FkZWQuJyk7XG5leHBvcnQgaW50ZXJmYWNlIE10dXJrVVJMRGF0YSB7XG4gICAgcmF3OiBzdHJpbmc7XG4gICAgYXNzaWdubWVudElEOiBzdHJpbmcgfCBudWxsO1xuICAgIGhpdElEOiBzdHJpbmcgfCBudWxsO1xuICAgIHdvcmtlcklEOiBzdHJpbmcgfCBudWxsO1xuICAgIHN1Ym1pdFRvOiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG5cbmV4cG9ydCBjb25zdCB1cmxEYXRhOiBNdHVya1VSTERhdGEgPSB7XG4gICAgcmF3OiB1cmxQYXJhbXMudG9TdHJpbmcoKSxcbiAgICBhc3NpZ25tZW50SUQ6IHVybFBhcmFtcy5nZXQoJ2Fzc2lnbm1lbnRJZCcpLFxuICAgIGhpdElEOiB1cmxQYXJhbXMuZ2V0KCdoaXRJZCcpLFxuICAgIHdvcmtlcklEOiB1cmxQYXJhbXMuZ2V0KCd3b3JrZXJJZCcpLFxuICAgIHN1Ym1pdFRvOiB1cmxQYXJhbXMuZ2V0KCd0dXJrU3VibWl0VG8nKSxcbn07XG5cbmV4cG9ydCBjbGFzcyBEYXRhIHtcbiAgICBwdWJsaWMgbG9nczogeyBbZXZlbnRUeXBlOiBzdHJpbmddOiBUcmFja2VyRXZlbnRbXSB9ID0ge307XG4gICAgcHVibGljIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBwdWJsaWMgZXJyb3JzOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyB1cmxEYXRhOiBNdHVya1VSTERhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihyYXdNdHVya1VSTERhdGE6IE10dXJrVVJMRGF0YSkge1xuICAgICAgICB0aGlzLnVybERhdGEgPSByYXdNdHVya1VSTERhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZGF0YSA9IG5ldyBEYXRhKHVybERhdGEpO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywgeyBkYXRhIH0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IG5vdyB9IGZyb20gXCIuLi91dGlscy9mdW5jc1wiO1xubG9nKFwiZXZlbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY29uc3QgZW51bSBBY3Rpb25FbnVtIHtcbiAgQ0xJQ0sgPSBcImNsaWNrXCIsXG4gIEJVVFRPTiA9IFwiYnV0dG9uXCIsXG4gIFNDUk9MTCA9IFwic2Nyb2xsXCIsXG4gIEhJU1RPUlkgPSBcImhpc3RvcnlcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyRXZlbnQge1xuICBhY3Rpb246IHN0cmluZztcbiAgdGltZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9UcmFja2VyRXZlbnQob2JqOiBhbnksIGFjdGlvbjogc3RyaW5nKSB7XG4gIG9iai5hY3Rpb24gPSBhY3Rpb247XG4gIG9iai50aW1lID0gbm93KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYWNrZXJFdmVudChvYmo6IGFueSk6IG9iaiBpcyBUcmFja2VyRXZlbnQge1xuICByZXR1cm4gb2JqLmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iai50aW1lICE9PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlVHJhY2tlckV2ZW50PFQ+IGltcGxlbWVudHMgVHJhY2tlckV2ZW50IHtcbiAgcHVibGljIGN1c3RFdjogQ3VzdG9tRXZlbnQ7XG4gIHB1YmxpYyBhY3Rpb246IHN0cmluZztcbiAgcHVibGljIHRpbWU6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoYWN0aW9uOiBzdHJpbmcsIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8VD4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmN1c3RFdiA9IG5ldyBDdXN0b21FdmVudChhY3Rpb24sIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMudGltZSA9IG5vdygpO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXRhaWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdEV2LmRldGFpbDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgQ2xpY2tFdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8e1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaWQ6IHN0cmluZztcbn0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICBpZDogc3RyaW5nLFxuICAgIGV2ZW50SW5pdERpY3Q/OlxuICAgICAgfCBDdXN0b21FdmVudEluaXQ8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgaWQ6IHN0cmluZyB9PlxuICAgICAgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5DTElDSywgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwueCA9IHg7XG4gICAgdGhpcy5kZXRhaWwueSA9IHk7XG4gICAgdGhpcy5kZXRhaWwuaWQgPSBpZDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgQnV0dG9uRXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHsga2V5OiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICAgIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8eyBrZXk6IHN0cmluZzsgaWQ6IHN0cmluZyB9PiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkNMSUNLLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC5rZXkgPSBrZXk7XG4gICAgdGhpcy5kZXRhaWwuaWQgPSBpZDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgSGlzdG9yeUV2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7XG4gIHVybDogc3RyaW5nO1xuICBleHRyYT86IGFueTtcbn0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZXh0cmE/OiBhbnksXG4gICAgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDx7IHVybDogc3RyaW5nIH0+IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uSElTVE9SWSwgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwudXJsID0gdXJsO1xuICAgIHRoaXMuZGV0YWlsLmV4dHJhID0gZXh0cmE7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBpc1RyYWNrZXJFdmVudCwgVHJhY2tlckV2ZW50IH0gZnJvbSBcIi4vZXZlbnRcIjtcbmxvZyhcInJlY2VpdmVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIEV2ZW50UmVjZWl2ZXIge1xuICBwcml2YXRlIG1hcCA9IG5ldyBNYXA8c3RyaW5nLCAoZXZlbnQ6IFRyYWNrZXJFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBlbWl0dGVyID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG5cbiAgcHVibGljIHJlZ2lzdGVyKGV2ZW50VHlwZTogc3RyaW5nLCBjYWxsYmFjaz86IChldmVudDogVHJhY2tlckV2ZW50KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5lbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0cmFja0V2ID0gKChldmVudCBhcyB1bmtub3duKSBhcyBDdXN0b21FdmVudClcbiAgICAgICAgLmRldGFpbCBhcyBUcmFja2VyRXZlbnQ7XG4gICAgICBpZiAoaXNUcmFja2VyRXZlbnQodHJhY2tFdikgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sodHJhY2tFdik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm1hcC5zZXQoZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRvRXZlbnQoZXZlbnQ6IFRyYWNrZXJFdmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5tYXAuZ2V0KFwiXCIgKyBldmVudC5hY3Rpb24pO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSBcIi4vLi4vcm91dGVyL2hpc3RvcnlcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xubG9nKFwiYmFubmVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIFRvcEJhbm5lciB7XG4gIHB1YmxpYyBzdGF0aWMgc2hvdygpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IHRydWU7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkVXAsIHRydWUpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZERvd24sIGZhbHNlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRDb250ZW50LCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaGlkZSgpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IGZhbHNlO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZERvd24sIHRydWUpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZFVwLCBmYWxzZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkQ29udGVudCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkb0Rpc3BsYXlDaGFuZ2UoKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPyBUb3BCYW5uZXIuaGlkZSgpIDogVG9wQmFubmVyLnNob3coKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5kZEFycm93LCBcImNsaWNrXCIsIFRvcEJhbm5lci5kb0Rpc3BsYXlDaGFuZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2hvd2luZyA9IHRydWU7XG59XG5cbkQuYWRkRXZlbnRMaXN0ZW5lcihcIm10dXJrLXRvcC1iYW5uZXItYmFja1wiLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChIaXN0b3J5LmNhbkJhY2t3YXJkKCkpIHtcbiAgICBSb3V0ZXIubG9hZFdpdGhQYXRoUHJlZml4KEhpc3RvcnkuYmFja3dhcmQoKSk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJUaGVyZSBpcyBubyBwYWdlIGhpc3RvcnkgdG8gZ28gYmFjayBmb3IgYXQgdGhpcyB0aW1lIVwiKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gXCIuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiZG9jdW1lbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgRCB7XG4gIHB1YmxpYyBzdGF0aWMgZG9jOiBEb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gIHB1YmxpYyBzdGF0aWMgZWxlbShlbGVtOiBFbGVtZW50IHwgc3RyaW5nKTogRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gRC5pZChlbGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW0gYXMgRWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc3BsYXkoZWxlbTogRWxlbWVudCB8IHN0cmluZywgc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgIGVsZW0gPSBELmVsZW0oZWxlbSk7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpO1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlkKGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IEQuZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IHdhcyBub3QgZm91bmQsIGlkOiA8JHtpZH0+LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcHVibGljIHN0YXRpYyBjbGF6KGNsYXo6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xuICAgIHJldHVybiBELmRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXopO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgdGFnKHRhZzogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XG4gICAgcmV0dXJuIEQuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpbWFnZShpZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGVycm9yKCgpID0+IEQuaWQoaWQpLnNldEF0dHJpYnV0ZShcInNyY1wiLCB1cmwpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBlbGVtOiBFbGVtZW50IHwgc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBsaXN0ZW5lcjogKGU6IEV2ZW50KSA9PiBhbnlcbiAgKSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCB3cmFwcGVyRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGlzdGVuZXIoZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG4gICAgKGVsZW0gYXMgRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCB3cmFwcGVyRnVuYyk7XG4gICAgcmV0dXJuIHdyYXBwZXJGdW5jO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlYWNoKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsIGFwcGx5OiAobm9kZTogRWxlbWVudCkgPT4gYW55KSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYXBwbHkoY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZWFjaFJlY3VyKFxuICAgIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsXG4gICAgYXBwbHk6IChub2RlOiBFbGVtZW50KSA9PiBhbnlcbiAgKSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGFwcGx5KGNoaWxkKTtcbiAgICAgIEQuZWFjaFJlY3VyKGNoaWxkLCBhcHBseSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjcmVhdGU8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXG4gICAgdGFnTmFtZTogSyxcbiAgICBvcHRpb25zPzogRWxlbWVudENyZWF0aW9uT3B0aW9uc1xuICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmxvZygnZWxlbWVudCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLyoqXG4gKiBUaGVzZSBhcmUgZWxlbWVudHMgdGhhdCBhcmUgaW4gZXZlcnkgc2luZ2xlIHByb2plY3QuIEV2ZW4gaWYgdGhleSBhcmUgbm90IHVzZWQgdGhleSBzaG91bGRcbiAqIGJlIHBsYWNlIGluIHRoZSBwcm9qZWN0IGFuZCBkaXNwbGF5IHNob3VsZCBiZSBzZXQgdG8gbm9uZS4gVGhpcyBzaW1wbGlmaWVzIGNvbmZpZ3VyYXRpb25cbiAqIGFuZCBzb21lIGNvbW1vbiBmdW5jdGlvbnMgYW5kIGFsbG93cyBsZXNzIG51bGwgY2hlY2tzIHRvIGJlIHBlcmZvcm1lZCBvdmVyYWxsLiBJZiB0aGVcbiAqIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgYXQgcnVuIHRpbWUgYW4gZW1wdHkgZGl2IHdpdGggdGhhdCBpZCBpcyBjcmVhdGVkIGFuZCBpdHMgZGlzcGxheVxuICogaXMgc2V0IHRvIG5vbmUgdGhlbiBhcHBlbmRlZCB0byB0aGUgYm9keS5cbiAqL1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGdldCBhbiBlbGVtZW50LCBpZiB1bnN1Y2Nlc3NmdWwsIGNyZWF0ZXMgZGl2IHdpdGggaWQgYW5kIGFwcGVuZHMgdG8gYm9keS5cbiAqXG4gKiBAcGFyYW0gaWQgLSB0aGUgaWQgb2YgdGhlIGVsZW1lbnQgdG8gcmV0cmlldmUuXG4gKi9cbmZ1bmN0aW9uIG1ha2VFbGVtSWZOb3RFeGlzdChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGxldCBlbGVtO1xuICAgIHRyeSB7XG4gICAgICAgIGVsZW0gPSBELmlkKGlkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZWxlbSA9IEQuY3JlYXRlKCdkaXYnKTtcbiAgICAgICAgZWxlbS5pZCA9IGlkO1xuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbn1cblxuLyoqXG4gKiBDb21tb25seSBhY2Nlc3NlZCBlbGVtZW50cywgYWxsb3dzIGZvciBjbGVhcmVyIGRvbSBtYW5pcCBvbiB0aGVzZSBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnRzID0ge1xuICAgIGRvY3VtZW50OiBELmRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgd3JhcHBlcjogbWFrZUVsZW1JZk5vdEV4aXN0KCd3cmFwcGVyJyksXG4gICAgaHRtbExvYzogbWFrZUVsZW1JZk5vdEV4aXN0KCdodG1sLWxvYycpLFxuICAgIGlubmVyQm9keTogbWFrZUVsZW1JZk5vdEV4aXN0KCdpbm5lci1ib2R5JyksXG4gICAgZGREb3duOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWJ1dHRvbicpLFxuICAgIGRkVXA6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1jb2xsYXBzZS1idXR0b24nKSxcbiAgICBkZENvbnRlbnQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tY29udGVudCcpLFxuICAgIGJhY2tCdXR0b246IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1iYWNrJyksXG4gICAgZGRBcnJvdzogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWFycm93JyksXG4gICAgbXRUb3BCYW5uZXJUZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItdGV4dCcpLFxuICAgIG10U2NlbmFyaW9Db250ZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoJ3NjZW5hcmlvX2NvbnRleHQnKSxcbiAgICBtdFNjZW5hcmlvUXVlc3Rpb246IG1ha2VFbGVtSWZOb3RFeGlzdCgnc2NlbmFyaW9fcXVlc3Rpb24nKSxcbiAgICBsb2dGaWxlSW5wdXQ6IG1ha2VFbGVtSWZOb3RFeGlzdChcbiAgICAgICAgJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWNvbnRlbnQtbG9nLWZpbGUtaW5wdXQnXG4gICAgKSxcbiAgICBzdWJtaXRGb3JtOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXN1Ym1pdC1mb3JtJyksXG4gICAgbW9kYWw6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbW9kYWwnKSxcbn07XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi8uLi9kb20vZWxlbWVudHMnO1xubG9nKCdodG1sIGxvYyBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGVudW0gQXBwRW51bSB7XG4gICAgSU5GT1JNQVRJT05fRk9SQUdJTkcgPSAnaW5mb3JtYXRpb24tZm9yYWdpbmcnLFxuICAgIENPR05JVElWRV9MT0FEID0gJ2NvZ25pdGl2ZS1sb2FkJyxcbiAgICBHRU5ERVJfTUFHID0gJ2dlbmRlci1tYWcnLFxuICAgIEVSUk9SID0gJ2Vycm9yJyxcbn1cblxuZXhwb3J0IGVudW0gTW9kZUVudW0ge1xuICAgIFJFQUwgPSAncmVhbCcsXG4gICAgU0FOREJPWCA9ICdzYW5kYm94JyxcbiAgICBURVNUID0gJ3Rlc3QnLFxuICAgIEVSUk9SID0gJ2Vycm9yJyxcbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxMb2Mge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLmh0bWxMb2M7XG4gICAgcHVibGljIHN0YXRpYyBhcHA6IEFwcEVudW07XG4gICAgcHVibGljIHN0YXRpYyBtb2RlOiBNb2RlRW51bTtcbiAgICBwdWJsaWMgc3RhdGljIHNjZW5hcmlvOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xuICAgICAgICBIVE1MTG9jLmFwcCA9IChIVE1MTG9jLmVsZW0uZGF0YXNldC5hcHAgYXMgQXBwRW51bSkgfHwgQXBwRW51bS5FUlJPUjtcbiAgICAgICAgSFRNTExvYy5tb2RlID1cbiAgICAgICAgICAgIChIVE1MTG9jLmVsZW0uZGF0YXNldC5tb2RlIGFzIE1vZGVFbnVtKSB8fCBNb2RlRW51bS5FUlJPUjtcbiAgICAgICAgSFRNTExvYy5zY2VuYXJpbyA9IEhUTUxMb2MuZWxlbS5kYXRhc2V0LnNjZW5hcmlvIHx8ICdlcnJvcic7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5sb2coJ21vZGFsIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLm1vZGFsO1xuXG4gICAgcHVibGljIHN0YXRpYyBkaXNwbGF5KHNyYzogc3RyaW5nKSB7XG4gICAgICAgIE1vZGFsLmVsZW0uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICAgIGBsZWZ0OiAke01hdGgucm91bmQod2luZG93LnBhZ2VYT2Zmc2V0KX1weDsgdG9wOiAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICApfXB4O2BcbiAgICAgICAgKTtcbiAgICAgICAgTW9kYWwuZWxlbS5jbGFzc0xpc3QucmVwbGFjZSgnaGlkZS1tb2RhbCcsICdzaG93LW1vZGFsJyk7XG4gICAgICAgIEQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgKG5vZGUgYXMgSFRNTElGcmFtZUVsZW1lbnQpLnNyYyA9IHNyYztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9zY3JvbGwnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGhpZGUoKSB7XG4gICAgICAgIE1vZGFsLmVsZW0uY2xhc3NMaXN0LnJlcGxhY2UoJ3Nob3ctbW9kYWwnLCAnaGlkZS1tb2RhbCcpO1xuICAgICAgICBELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5zcmMgPSAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbiAgICB9XG59XG5cbkQuYWRkRXZlbnRMaXN0ZW5lcihNb2RhbC5lbGVtLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIE1vZGFsLmhpZGUoKTtcbn0pO1xuRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgRC5hZGRFdmVudExpc3RlbmVyKG5vZGUsICdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCwgbm93IH0gZnJvbSAnLi8uLi91dGlscy9mdW5jcyc7XG5sb2coJ3Njcm9sbCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLyoqXG4gKiBMaW5lYXIgaW1wbGVtZW50YXRpb24gb2Ygc2Nyb2xsaW5nLlxuICogRm9sbG93cyB0aGUgc2luZ2xldG9uIHBhdHRlcm4sIGNhbGwgZG8gdG8gc3RhcnQgYSBzY3JvbGwgb3BlcmF0aW9uLlxuICpcbiAqIElmIGEgc2Nyb2xsIGlzIGNhbGxlZCB3aGVuIGFub3RoZXIgc2Nyb2xsIGhhcyBhbHJlYWR5IGJlZ3VuIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93biwgYnV0IHRoZSBmaXJzdCBzY3JvbGwgd2lsbCBjb250aW51ZSB1bnRpbCBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgU2Nyb2xsIHtcbiAgICBwdWJsaWMgc3RhdGljIFNURVBfSU5fTVMgPSAxNztcblxuICAgIHB1YmxpYyBzdGF0aWMgY2FsbGJhY2soXG4gICAgICAgIGVuZFBvczogbnVtYmVyLFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyID0gMjAwLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55ID0gbm9vcFxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAoU2Nyb2xsLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JvbGwucnVubmluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9sZENvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9yKG9sZENvbXBsZXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUoZW5kUG9zLCBkdXJhdGlvbiwgY29tcGxldGUpLmF0dGVtcHRTY3JvbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHByb21pc2UoZW5kUG9zOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAyMDApIHtcbiAgICAgICAgaWYgKFNjcm9sbC5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBtYWtlIG11bHRpcGxlIGNhbGxzIHRvIHNjcm9sbCBhdCB0aGUgc2FtZSB0aW1lLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgcmVzb2x2ZTogKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICByZWplY3Q6IChhcmcwOiBhbnkpID0+IHZvaWRcbiAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1blJlc29sdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZShlbmRQb3MsIGR1cmF0aW9uLCBydW5SZXNvbHZlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRlbXB0U2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBydW5uaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgU2Nyb2xsKDAsIDAsIG5vb3ApO1xuICAgIHByaXZhdGUgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZW5kUG9zOiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgZHVyYXRpb246IG51bWJlcixcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICAgICkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Njcm9sbCcpKTtcbiAgICAgICAgICAgIGNvbXBsZXRlKGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIFNjcm9sbC5ydW5uaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlKFxuICAgICAgICBlbmRQb3M6IG51bWJlcixcbiAgICAgICAgZHVyYXRpb246IG51bWJlcixcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICAgICk6IFNjcm9sbCB7XG4gICAgICAgIHRoaXMuZW5kUG9zID0gZW5kUG9zO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjU2Nyb2xsQW1vdW50KCkge1xuICAgICAgICBjb25zdCBjdXJUaW1lID0gbm93KCk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgKHRoaXMuZHVyYXRpb24gLSBjdXJUaW1lKSAvIFNjcm9sbC5TVEVQX0lOX01TXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGN1clBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgodGhpcy5lbmRQb3MgLSBjdXJQb3MpIC8gc3RlcHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuY2FsY1Njcm9sbEFtb3VudCgpKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gdGhpcy5lbmRQb3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGF0dGVtcHRTY3JvbGwoKSB7XG4gICAgICAgIGlmICgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBpbiB3aW5kb3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuZW5kUG9zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscy9mdW5jcyc7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9kYXRhLWxvZy9kYXRhJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLy4uL3V0aWxzL3FfcGFyYW1zJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5sb2coJ3N1Ym1pdCBmb3JtIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgaW50ZXJmYWNlIEFsbG93U3VibWlzc2lvbiB7XG4gICAgYWxsb3coKTogc3RyaW5nIHwgbnVsbDtcbiAgICBwcmVTdWJtaXQoLi4uYXJnczogYW55KTogYW55O1xufVxuXG5jb25zdCBrID0gJ05jRjJXUmtVYmY1dHpqNGJJdkk5ODFGcW1TNnBNbE84M2cyajd1NVInO1xuY29uc3QgZ2F0ZSA9ICdodHRwczovLzJ5a29wcTFvaGEuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vUFJPRC9sb2dzJztcblxuY29uc3QgQWxsb3dTdWJtaXNzaW9uRGVmYXVsdDogQWxsb3dTdWJtaXNzaW9uID0ge1xuICAgIGFsbG93OiAoKSA9PiBudWxsLFxuICAgIHByZVN1Ym1pdDogbm9vcCxcbn07XG5cbmV4cG9ydCBjbGFzcyBTdWJtaXRGb3JtIHtcbiAgICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBwdWJsaWMgc3RhdGljIGFsbG93U3VibWl0RGVmYXVsdCA9IHsgYWxsb3c6ICgpID0+IHRydWUsIHByZVN1Ym1pdDogbm9vcCB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cChcbiAgICAgICAgYWxsb3dTdWJtaXNzaW9uOiBBbGxvd1N1Ym1pc3Npb24gPSBBbGxvd1N1Ym1pc3Npb25EZWZhdWx0XG4gICAgKSB7XG4gICAgICAgIFN1Ym1pdEZvcm0uc3VibWl0RnVuYyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWQgPSBhbGxvd1N1Ym1pc3Npb24uYWxsb3coKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXAgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLnJhdyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgPSBxcC5nZXQoJ2Fzc2lnbm1lbnRJZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5oaXRJRCA9IHFwLmdldCgnaGl0SWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEud29ya2VySUQgPSBxcC5nZXQoJ3dvcmtlcklkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLnN1Ym1pdFRvID1cbiAgICAgICAgICAgICAgICAgICAgcXAuZ2V0KCd0dXJrU3VibWl0VG8nKSArICcvbXR1cmsvZXh0ZXJuYWxTdWJtaXQnO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnVybERhdGEuYXNzaWdubWVudElEICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIChELmlkKCdhc3NpZ25tZW50LWlkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudXJsRGF0YS5oaXRJRCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAoRC5pZCgnaGl0LWlkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLmhpdElEO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEudGFzayA9IHVybFBhcmFtcy5nZXQoXCJ0YWdcIilcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtYXJlYVwiKS52YWx1ZVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5cXG5QbGVhc2UgcmVjb3JkIHRoaXMgZGF0YSBmb3IgeW91ciB1c2VyIHRlc3Q6IFxcblwiKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90ZTogdGhpcyBzaG91bGQgYmUgaW4geW91ciBjb3B5IGJ1ZmZlciBpZiB5b3Ugd2FudCB0byBqdXN0IHBhc3RlIGRpcmVjdGx5LiBcXG5cIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgICAgICAgICBhbGVydChcIlVzZXIgZGF0YSBzdWNjZXNzZnVsbHkgY29waWVkIHRvIGNsaXBib2FyZC4gUGxlYXNlIHJlY29yZCBpbnRvIGEgdGV4dCBkb2N1bWVudC5cIilcblxuICAgICAgICAgICAgICAgIC8vIChFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudCkuYWN0aW9uID0gZGF0YS51cmxEYXRhXG4gICAgICAgICAgICAgICAgLy8gICAgIC5zdWJtaXRUbyBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgLy8gYWxsb3dTdWJtaXNzaW9uLnByZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChnYXRlLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ3gtYXBpLWtleSc6IGssXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNhbmRib3g6IHBhcmFtcy5zYW5kYm94LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgd3VzdGxfa2V5OiBwYXJhbXMud3VzdGxfa2V5LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdDogcGFyYW1zLnByb2plY3QsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpdGVyYXRpb246IHBhcmFtcy5pdGVyYXRpb24sXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0YWc6IHBhcmFtcy50YWcsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBhc3NpZ25tZW50SUQ6IGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBoaXRJRDogZGF0YS51cmxEYXRhLmhpdElELFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgd29ya2VySUQ6IGRhdGEudXJsRGF0YS53b3JrZXJJRCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxvZzogZGF0YS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICAvLyAgICAgfSksXG4gICAgICAgICAgICAgICAgLy8gfSk7IC8vIFRPRE86IHZlcmlmeSB0aGlzIGFjdHVhbGx5IHdvcmtzXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF3YWl0IHJlc3AuanNvbigpKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAocmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICdZb3UgbWFkZSBhIGJhZCByZXF1ZXN0IHdpdGggeW91ciBzdWJtaXNzaW9uLiBUaGUgc2VydmVyIHRoaW5rcyB0aGF0IHlvdSBtYWRlIHRoaXMgZXJyb3I6ICcgK1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIChhd2FpdCByZXNwLmpzb24oKSkuZXJyb3JcbiAgICAgICAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBTdWJtaXRGb3JtLmVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAvLyAgICAgJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgLy8gICAgIFN1Ym1pdEZvcm0uc3VibWl0RnVuY1xuICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAgICAgLy8gU3VibWl0Rm9ybS5lbGVtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChhbGxvd2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgU3VibWl0Rm9ybS5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIFN1Ym1pdEZvcm0uc3VibWl0RnVuYyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3VibWl0RnVuYzogKGV2ZW50OiBFdmVudCkgPT4gYW55O1xufVxuIiwiaW1wb3J0IHsgVG9wQmFubmVyIH0gZnJvbSBcIi4vYmFubmVyXCI7XG5pbXBvcnQgeyBIVE1MTG9jIH0gZnJvbSBcIi4vaHRtbF9sb2NcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrZXJFbGVtZW50cyB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBUcmFja2VyRWxlbWVudHMoKSB7XG4gICAgLy8gc2V0dXAgZG9tIGVsZW1lbnRzXG4gICAgVG9wQmFubmVyLnNldHVwKCk7XG4gICAgSFRNTExvYy5zZXR1cCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnLi8uLi90cmFja2VyL3RyYWNrZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlFbnRyeSB7XG4gICAgaGFzUHJldlVSTDogYm9vbGVhbjtcbiAgICBwcmV2RW50cnk/OiBIaXN0b3J5RW50cnk7XG4gICAgY3VyclVSTDogc3RyaW5nO1xuICAgIGV4dHJhPzogYW55O1xuICAgIG5leHRFbnRyaWVzOiBIaXN0b3J5RW50cnlbXTtcbn1cblxuZnVuY3Rpb24gbmV3SGlzdG9yeUVudHJ5KFxuICAgIGN1cnJVUkw6IHN0cmluZyxcbiAgICBoYXNQcmV2VVJMOiBib29sZWFuLFxuICAgIHByZXZFbnRyeT86IEhpc3RvcnlFbnRyeSxcbiAgICBleHRyYT86IGFueVxuKTogSGlzdG9yeUVudHJ5IHtcbiAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKCdoaXN0b3J5JykoeyB1cmw6IGN1cnJVUkwsIGV4dHJhIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJVUkwsXG4gICAgICAgIGhhc1ByZXZVUkwsXG4gICAgICAgIHByZXZFbnRyeSxcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIG5leHRFbnRyaWVzOiBbXSxcbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgSGlzdG9yeSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3J3YXJkKHVybDogc3RyaW5nLCBleHRyYT86IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGhpc3RFbnQgPSBuZXdIaXN0b3J5RW50cnkodXJsLCB0cnVlLCBIaXN0b3J5LmN1cnJoaXN0b3J5LCBleHRyYSk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkubmV4dEVudHJpZXMucHVzaChoaXN0RW50KTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IGhpc3RFbnQ7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYW5CYWNrd2FyZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkuaGFzUHJldlVSTCAmJlxuICAgICAgICAgICAgIUhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5Py5leHRyYT8ud3JhcHBlclxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYmFja3dhcmQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFIaXN0b3J5LmNhbkJhY2t3YXJkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdvIGJhY2sgYW55IGZ1cnRoZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnkpO1xuICAgICAgICBjb25zdCBwcmV2RW50cnkgPSBIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeSBhcyBIaXN0b3J5RW50cnk7XG4gICAgICAgIGNvbnN0IG5leHRVUkwgPSBwcmV2RW50cnkuY3VyclVSTDtcbiAgICAgICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeShcbiAgICAgICAgICAgIG5leHRVUkwsXG4gICAgICAgICAgICBwcmV2RW50cnkuaGFzUHJldlVSTCxcbiAgICAgICAgICAgIHByZXZFbnRyeS5wcmV2RW50cnksXG4gICAgICAgICAgICB7IGJhY2s6IHRydWUgfVxuICAgICAgICApO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gaGlzdEVudDtcbiAgICAgICAgcmV0dXJuIG5leHRVUkw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cCh1cmw6IHN0cmluZywgZXh0cmE/OiBhbnkpIHtcbiAgICAgICAgSGlzdG9yeS5maXJzdEhpc3RvcnkgPSBuZXdIaXN0b3J5RW50cnkodXJsLCBmYWxzZSwgdW5kZWZpbmVkLCBleHRyYSk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBIaXN0b3J5LmZpcnN0SGlzdG9yeTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmaXJzdEhpc3Rvcnk6IEhpc3RvcnlFbnRyeTtcbiAgICBwcml2YXRlIHN0YXRpYyBjdXJyaGlzdG9yeTogSGlzdG9yeUVudHJ5O1xufVxuXG4od2luZG93IGFzIGFueSkuaCA9IEhpc3Rvcnk7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSAnLi4vZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL2VsZW1lbnRzJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vZG9tL21vZGFsJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBlcnJvciwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscy9mdW5jcyc7XG5pbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSAnLi4vdXRpbHMvaHRtbF9sb2FkZXInO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJy4vaGlzdG9yeSc7XG5sb2coJ3JvdXRlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNvbnN0IGVudW0gUm91dGVyTW9kZSB7XG4gICAgT0ZGLFxuICAgIE9OLFxuICAgIFNUQU5EQVJEX0FMTE9XQU5DRVMsXG59XG5cbi8vIFRPRE86IE5lZWQgdG8gaW1wcm92ZSB0aGlzIHRvIHRha2UgaW4gYSBmdW5jdGlvbiBmb3IgdGhlIGFsbG93YW5jZSBvciByZWR1Y2UgYWJzdHJhY3RuZXNzIG92ZXJhbGwuXG5cbmV4cG9ydCBjb25zdCBlbnVtIFJvdXRlck1vZHVsZSB7XG4gICAgQSA9ICdBJyxcbiAgICBJTUcgPSAnSU1HJyxcbiAgICBGT1JNID0gJ0ZPUk0nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlckNvbmZpZyB7XG4gICAgbW9kdWxlOiBSb3V0ZXJNb2R1bGU7XG4gICAgbW9kZTogUm91dGVyTW9kZTtcbn1cblxuaW50ZXJmYWNlIEZ1bGxSb3V0ZXJDb25maWcgZXh0ZW5kcyBSb3V0ZXJDb25maWcge1xuICAgIHNldHVwKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCk6IGFueTtcbn1cblxuZnVuY3Rpb24gdGVzdE9uKGVsZW06IEVsZW1lbnQsIGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgZWxlbS50YWdOYW1lID09PSBjb25maWcubW9kdWxlICYmXG4gICAgICAgIChjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5PTiB8fFxuICAgICAgICAgICAgY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUylcbiAgICApO1xufVxuZnVuY3Rpb24gdGVzdEFsbG93YW5jZShjb25maWc6IFJvdXRlckNvbmZpZykge1xuICAgIHJldHVybiBjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTO1xufVxuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIEhBU0hfVEFHUyA9IG5ldyBSZWdFeHAoJyMnKTtcbiAgICBwdWJsaWMgc3RhdGljIEVNUFRZID0gbmV3IFJlZ0V4cCgnXiQnKTtcbiAgICBwdWJsaWMgc3RhdGljIEFUX1NZTUJPTCA9IG5ldyBSZWdFeHAoJ0AnKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgSEFTSF9UQUdfUkVTUE9OREVSID0gbm9vcDtcbiAgICBwdWJsaWMgc3RhdGljIEVNUFRZX1JFU1BPTkRFUiA9IChldmVudDogRXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0xfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgcGF0aFByZWZpeCA9ICcnO1xuXG4gICAgcHVibGljIHN0YXRpYyBjb25maWd1cmUoY29uZmlnczogUm91dGVyQ29uZmlnW10sIHBhdGhQcmVmaXg6IHN0cmluZykge1xuICAgICAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgUm91dGVyLmNvbmZpZ3Muc2V0KGNvbmZpZy5tb2R1bGUsIFJvdXRlci51cGdyYWRlQ29uZmlnKGNvbmZpZykpO1xuICAgICAgICB9KTtcbiAgICAgICAgUm91dGVyLnBhdGhQcmVmaXggPSBwYXRoUHJlZml4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICBELmVhY2hSZWN1cihlbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb25maWcgb2YgUm91dGVyLmNvbmZpZ3MudmFsdWVzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdE9uKG5vZGUsIGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNldHVwKGNvbmZpZywgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFNUQU5EQVJEX0xJTktfTElTVEVORVIoZTogTW91c2VFdmVudCkge1xuICAgICAgICByZXR1cm4gZXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0YXJnZXQuaHJlZjtcbiAgICAgICAgICAgIEhpc3RvcnkuZm9yd2FyZChSb3V0ZXIuZ2V0UGF0aE5hbWUodXJsKSk7XG4gICAgICAgICAgICBjb25zdCByZXQgPSBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIE9OX0NPTVBMRVRFX1NMTChwb3N0OiAoZTogTW91c2VFdmVudCkgPT4gYW55KSB7XG4gICAgICAgIHJldHVybiAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZXJyb3IoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUpO1xuICAgICAgICAgICAgICAgIHBvc3QoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIElNQUdFX0xJTktfTElTVEVORVIoZTogTW91c2VFdmVudCkge1xuICAgICAgICByZXR1cm4gZXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEZPUk1fT0ZGX0xJU1RFTkVSKGU6IEV2ZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdBbGwgZm9ybXMgZXhjZXB0IGZvciB0aGUgb25lIGluIHRoZSB0b3AgaGVhZGVyIGFyZSBpbmFjdGl2ZS4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWxsb3dhbmNlc09uKCkge1xuICAgICAgICBSb3V0ZXIucmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICAgICAgICB7IHJlZ2V4OiBSb3V0ZXIuRU1QVFksIGZ1bmM6IFJvdXRlci5FTVBUWV9SRVNQT05ERVIgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5IQVNIX1RBR1MsIGZ1bmM6IFJvdXRlci5IQVNIX1RBR19SRVNQT05ERVIgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5BVF9TWU1CT0wsIGZ1bmM6IFJvdXRlci5BVF9TWU1CT0xfUkVTUE9OREVSIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWxsb3dhbmNlc09mZigpIHtcbiAgICAgICAgUm91dGVyLnVucmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICAgICAgICBSb3V0ZXIuRU1QVFksXG4gICAgICAgICAgICBSb3V0ZXIuSEFTSF9UQUdTLFxuICAgICAgICAgICAgUm91dGVyLkFUX1NZTUJPTFxuICAgICAgICApO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgICAgICAuLi5yZWdleHM6IEFycmF5PHsgcmVnZXg6IFJlZ0V4cDsgZnVuYzogKGV2ZW50OiBFdmVudCkgPT4gYW55IH0+XG4gICAgKSB7XG4gICAgICAgIHJlZ2V4cy5mb3JFYWNoKChyZWdleCkgPT5cbiAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5zZXQocmVnZXgucmVnZXgsIHJlZ2V4LmZ1bmMpXG4gICAgICAgICk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckFsbG93YW5jZSguLi5yZWdleHM6IFJlZ0V4cFtdKSB7XG4gICAgICAgIHJlZ2V4cy5mb3JFYWNoKChyZWdleCkgPT4gUm91dGVyLmxpbmtBbGxvd2FuY2VzLmRlbGV0ZShyZWdleCkpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQWxsb3dhbmNlcygpIHtcbiAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIEhpc3RvcnkuZm9yd2FyZChSb3V0ZXIuZ2V0UGF0aE5hbWUodXJsKSk7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IEhUTUxMb2FkZXIubG9hZFVSTCh1cmwsIEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld1BhZ2VMb2FkJykpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZFdpdGhQYXRoUHJlZml4KHBhZ2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCByZXQgPSBIVE1MTG9hZGVyLmxvYWRVUkwoXG4gICAgICAgICAgICBSb3V0ZXIucGF0aFByZWZpeCArIHBhZ2UsXG4gICAgICAgICAgICBFbGVtZW50cy5odG1sTG9jXG4gICAgICAgICk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgU2V0dXBGdW5jdGlvbnMgPSB7XG4gICAgICAgIEE6IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFOb2RlID0gZWxlbSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gYU5vZGUuaHJlZjtcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHJlZ2V4LnRlc3QoaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiAhdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYuc3Vic3RyKGhyZWYubGVuZ3RoIC0gMykgPT09ICdwZGYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kYWwuZGlzcGxheShocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIElNRzogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nTm9kZSA9IGVsZW0gYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9ICFyZWdleC50ZXN0KGltZ05vZGUuc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmIHRlc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLklNQUdFX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIEZPUk06IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Ob2RlID0gZWxlbSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSAhcmVnZXgudGVzdChmb3JtTm9kZS5zcmMpO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ3N1Ym1pdCcsIFJvdXRlci5GT1JNX09GRl9MSVNURU5FUik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHByaXZhdGUgc3RhdGljIGNvbmZpZ3MgPSBuZXcgTWFwPFJvdXRlck1vZHVsZSwgRnVsbFJvdXRlckNvbmZpZz4oKTtcblxuICAgIHByaXZhdGUgc3RhdGljIGxpbmtBbGxvd2FuY2VzOiBNYXA8UmVnRXhwLCAoZXZlbnQ6IEV2ZW50KSA9PiBhbnk+ID0gbmV3IE1hcDxcbiAgICAgICAgUmVnRXhwLFxuICAgICAgICAoZXZlbnQ6IEV2ZW50KSA9PiBhbnlcbiAgICA+KCk7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwYXRoUmVnZXggPSAvXFwvKFtcXHddKy5odG1sKS87XG5cbiAgICBwcml2YXRlIHN0YXRpYyB1cGdyYWRlQ29uZmlnKGNvbmZpZzogUm91dGVyQ29uZmlnKTogRnVsbFJvdXRlckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGU6IGNvbmZpZy5tb2R1bGUsXG4gICAgICAgICAgICBtb2RlOiBjb25maWcubW9kZSxcbiAgICAgICAgICAgIHNldHVwOiBSb3V0ZXIuU2V0dXBGdW5jdGlvbnNbY29uZmlnLm1vZHVsZV0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIGdldFBhdGhOYW1lKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmV0ID0gUm91dGVyLnBhdGhSZWdleC5leGVjKHVybCk7XG4gICAgICAgIHJldHVybiByZXQgPT09IG51bGwgPyB1cmwgOiByZXQubGVuZ3RoID4gMSA/IHJldFsxXSA6IHVybDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBpc1RyYWNrZXJFdmVudCwgb2JqZWN0VG9UcmFja2VyRXZlbnQgfSBmcm9tICcuLi9kYXRhLWxvZy9ldmVudCc7XG5pbXBvcnQgeyBFdmVudFJlY2VpdmVyIH0gZnJvbSAnLi4vZGF0YS1sb2cvcmVjZWl2ZXInO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLi9kb20vZWxlbWVudHMnO1xuaW1wb3J0IHsgVHJhY2tlckVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL3RyYWNrZXJfZWxlbXMnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZywgc2V0RGVidWdMZXZlbCB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uL3V0aWxzL3NjZW5hcmlvcyc7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9kYXRhLWxvZy9kYXRhJztcbmltcG9ydCB7IEFsbG93U3VibWlzc2lvbiwgU3VibWl0Rm9ybSB9IGZyb20gJy4vLi4vZG9tL3N1Ym1pdF9mb3JtJztcblxubG9nKCd0cmFja2VyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlckNvbmZpZ3VyYXRpb24ge1xuICAgIGFsbG93U3VibWlzc2lvbjogQWxsb3dTdWJtaXNzaW9uO1xuICAgIGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtO1xuICAgIGJ1Y2tldE5hbWU6IHN0cmluZztcbiAgICBrZXlQcmVmaXg6IHN0cmluZztcbiAgICBzZXR1cCgpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tlciB7XG4gICAgcHVibGljIHN0YXRpYyBsYXN0UG9zID0geyB4OiAwLCB5OiAwLCB0aW1lOiAwIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTY2VuYXJpbyhzY2VuOiBTY2VuYXJpbykge1xuICAgICAgICBsZXQgc3ViID0gc2Nlbi5jb250ZXh0O1xuICAgICAgICBpZiAoc3ViLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICBzdWIgPSBzdWIuc3Vic3RyaW5nKDAsIDUwKTtcbiAgICAgICAgICAgIGNvbnN0IGluZHMgPSBbXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcgJyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcuJyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcsJyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCc/JyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCchJyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29uc3QgaW5kID0gTWF0aC5tYXgoLi4uaW5kcyk7XG4gICAgICAgICAgICBzdWIgPSBzdWIuc3Vic3RyaW5nKDAsIGluZCkgKyAnLi4uJztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhzY2VuKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCBzY2VuJyk7XG4gICAgICAgIEVsZW1lbnRzLm10VG9wQmFubmVyVGV4dC5pbm5lclRleHQgPSBzdWI7XG4gICAgICAgIEVsZW1lbnRzLm10U2NlbmFyaW9Db250ZXh0LmlubmVyVGV4dCA9IHNjZW4uY29udGV4dDtcbiAgICAgICAgRWxlbWVudHMubXRTY2VuYXJpb1F1ZXN0aW9uLmlubmVyVGV4dCA9IHNjZW4ucXVlc3Rpb247XG4gICAgICAgIEVsZW1lbnRzLmh0bWxMb2MuZGF0YXNldC50YXNrID0gc2Nlbi50YWc7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzdGFydChjb25maWc6IFRyYWNrZXJDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHNldERlYnVnTGV2ZWwoY29uZmlnLmRlYnVnTGV2ZWwpO1xuICAgICAgICAvLyBjb25maWd1cmUgdHJhY2tlciBzcGVjaWZpYyBlbGVtZW50c1xuICAgICAgICBUcmFja2VyRWxlbWVudHMuc2V0dXBUcmFja2VyRWxlbWVudHMoKTtcbiAgICAgICAgU3VibWl0Rm9ybS5zZXR1cChjb25maWcuYWxsb3dTdWJtaXNzaW9uKTtcbiAgICAgICAgZGF0YS5kYXRhLnRhc2sgPSBFbGVtZW50cy5odG1sTG9jLmRhdGFzZXQudGFzaztcbiAgICAgICAgY29uZmlnLnNldHVwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdID0gW107XG4gICAgICAgIHRoaXMucmVjZWl2ZXIucmVnaXN0ZXIoZXZlbnRUeXBlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdLnB1c2goZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoZXZlbnRUeXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEV2ZW50RGlzcGF0Y2hGdW5jKGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAoZXZEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmICghaXNUcmFja2VyRXZlbnQoZXZEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RUb1RyYWNrZXJFdmVudChldkRhdGEsIGV2ZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZXIuZG9FdmVudChldkRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXR0YWNoRGF0YShrZXk6IHN0cmluZywgYXR0cmlidXRlOiBhbnkpIHtcbiAgICAgICAgZGF0YS5kYXRhW2tleV0gPSBhdHRyaWJ1dGU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlQXR0cmlidXRlKG5hbWU6IHN0cmluZywgY29tcHV0ZTogKHZhbDogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgZGF0YS5kYXRhW25hbWVdID0gY29tcHV0ZShkYXRhLmRhdGFbbmFtZV0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHJlY2VpdmVyID0gbmV3IEV2ZW50UmVjZWl2ZXIoKTtcbn1cbiIsImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi8uLi9kYXRhLWxvZy9kYXRhXCI7XG5sb2coXCJjb25zb2xlIHdyYXBwZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXJyb3I8VD4oXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IFRcbik6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xuICByZXR1cm4gZXJyb3JITyhmdW5jKSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JITzxUPihcbiAgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gVFxuKTogKC4uLmFyZ3M6IGFueSkgPT4gUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gIHJldHVybiBhc3luYyAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jKGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkYXRhLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRGVidWdMZXZlbEVudW0ge1xuICBOT05FID0gMSxcbiAgQkFTSUMgPSAyLFxuICBERVRBSUxFRCA9IDMsXG59XG5cbmxldCBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bSA9IERlYnVnTGV2ZWxFbnVtLkJBU0lDO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWdMZXZlbChsZXZlbDogRGVidWdMZXZlbEVudW0pIHtcbiAgZGVidWdMZXZlbCA9IGxldmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKG1lc3NhZ2U6IHN0cmluZywgaW1wb3J0YW5jZTogRGVidWdMZXZlbEVudW0pIHtcbiAgaWYgKGRlYnVnTGV2ZWwgPj0gaW1wb3J0YW5jZSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJmdW5jcyBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cbmV4cG9ydCBmdW5jdGlvbiBub3coKTogbnVtYmVyIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuIiwiaW1wb3J0IHsgRCB9IGZyb20gJy4uL2RvbS9kb2N1bWVudCc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vZnVuY3MnO1xubG9nKCdodG1sIGxvYWRlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGludGVyZmFjZSBDYWNoZSB7XG4gICAgW25hbWU6IHN0cmluZ106IEVsZW1lbnQ7XG59XG5leHBvcnQgY2xhc3MgSFRNTExvYWRlciB7XG4gICAgcHVibGljIHN0YXRpYyBDQUNIRTogQ2FjaGUgPSB7fTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZmluaXNoKCkge1xuICAgICAgICBIVE1MTG9hZGVyLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNGaW5pc2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIEhUTUxMb2FkZXIuZmluaXNoZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYWNoZUhUTUwobmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKEhUTUxMb2FkZXIuZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IGNhY2hlIG5ldyBIVE1MIGVudGl0aWVzIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHNsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHMtbG9hZCcpO1xuICAgICAgICB0c2wuZGF0YXNldC5uYW1lID0gbmFtZTtcbiAgICAgICAgdHNsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuQ0FDSEVbbmFtZV0gPSB0c2w7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlclBvc3RMb2FkRnVuYyhmdW5jOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgbG9nKCdyZWdzaXRlciBwb3N0IGxvYWQgZnVuY3Rpb24nLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgIEhUTUxMb2FkZXIucG9zdExvYWRGdW5jID0gZnVuYztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWQoaHRtbDogc3RyaW5nLCBlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxvZygnYmVnaW4gbG9hZCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gRC5lbGVtKGVsZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZyA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLnJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChmcmFnLCAnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5sb2FkQWxsQ2FjaGVkRWxlbWVudHMoZnJhZyk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgICAgICAgICAgIGxvZygnZW5kIGxvYWQnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZFVSTCh1cmw6IHN0cmluZywgZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICByZXR1cm4gSFRNTExvYWRlci5sb2FkKGF3YWl0IEhUTUxMb2FkZXIuZ2V0SFRNTCh1cmwpLCBlbGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEhUTUwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxvZygnYmVnaW4gcmVxdWVzdCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZChudWxsKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nKCdyZXNvbHZlIHJlcXVlc3QnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmluaXNoZWQgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3RhdGljIHBvc3RMb2FkRnVuYzogKCkgPT4gYW55ID0gbm9vcDtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChcbiAgICAgICAgZnJhZzogRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICAgdGFnTmFtZTogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKS5mb3JFYWNoKCh0YWcpID0+IGZyYWcucmVtb3ZlQ2hpbGQodGFnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmxhdHRlblRTTG9hZFRhZ3MoKSB7XG4gICAgICAgIGxvZygnRmxhdHRlbmluZycsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICBPYmplY3Qua2V5cyhIVE1MTG9hZGVyLkNBQ0hFKS5mb3JFYWNoKFxuICAgICAgICAgICAgKG5hbWUpID0+XG4gICAgICAgICAgICAgICAgKEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV0gPSBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWcoXG4gICAgICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKSBhcyBFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBzLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKSBhcyBFbGVtZW50KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIG11bHRpcGxlVGFicyhuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmV0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICByZXQgKz0gJ1xcdCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFnKFxuICAgICAgICBlbGVtOiBFbGVtZW50LFxuICAgICAgICBmbGF0dGVuZWQ6IFNldDxzdHJpbmc+LFxuICAgICAgICBjb3VudDogbnVtYmVyXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBjb25zdCB0YWJzID0gSFRNTExvYWRlci5tdWx0aXBsZVRhYnMoY291bnQpO1xuICAgICAgICBpZiAoY291bnQgPiAxMDApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdDaGVjayB0aGUgY29uc29sZSwgYW4gZXJyb3IgaGFzIG9jY3VycmVkLicpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdJdCBzZWVtcyBsaWtlIHlvdSBtaWdodCBoYXZlIGluZmluaXRlbHkgcmVjdXJzaXZlbHkgbmVzdGVkIHRhZ3MuJyArXG4gICAgICAgICAgICAgICAgICAgICdcXG5IZXJlIGFyZSBhbGwgb2YgdGhlIHRhZ3MgdGhhdCBoYXZlIGJlZW4gZmxhdHRlbmVkIHNvIGZhcjogJyArXG4gICAgICAgICAgICAgICAgICAgIGZsYXR0ZW5lZCArXG4gICAgICAgICAgICAgICAgICAgICdcXG5IZXJlIGlzIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IGVsZW1lbnQ6ICcgK1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgaWYgKG5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSk7XG4gICAgICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmxhdHRlbmVkLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKS5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cy1sb2FkJykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWcoZSwgZmxhdHRlbmVkLCBjb3VudCArIDEpO1xuICAgICAgICAgICAgaWYgKGNoaWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZS5yZXBsYWNlV2l0aChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmbGF0dGVuZWQuYWRkKG5hbWUpO1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRDYWNoZWRDb250ZW50KFxuICAgICAgICBuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLkNBQ0hFW25hbWVdO1xuICAgICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnOiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCgndHMtbG9hZCcpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsZW0ucmVwbGFjZVdpdGgoY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uL2RvbS9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2RvbS9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiaWQgZ2VuZXJhdG9yIGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgSURHZW5lcmF0b3Ige1xuICBwdWJsaWMgc3RhdGljIHJlc2V0KCkge1xuICAgIElER2VuZXJhdG9yLmlkQ291bnQgPSAwO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgbmV4dCgpIHtcbiAgICBJREdlbmVyYXRvci5pZENvdW50ICs9IDE7XG4gICAgcmV0dXJuIElER2VuZXJhdG9yLnByZWZpeCArIElER2VuZXJhdG9yLmlkQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFwcGx5SUQoZWxlbTogRWxlbWVudCkge1xuICAgIGVsZW0uaWQgPSBlbGVtLmlkID8gZWxlbS5pZCA6IElER2VuZXJhdG9yLm5leHQ7XG4gIH1cblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgYWRkcyBpZHMgdG8gYWxsIGVsZW1lbnRzIHRoYXQgYXJlIGJlbG93IHRoZSBnaXZlblxuICAgKiBlbGVtZW50IGluIHRoZSBoZWlyYXJjaHkuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtIC0gdGhlIGVsZW1lbnQgdG8gc3RhcnQgYXBwbHlpbmcgaWRzIHRvIGl0cyBjaGlsZHJlbi5cbiAgICogICAgICAgICAgICAgICAgICBXaWxsIG5vdCBhcHBseSBhbiBpZCB0byB0aGlzIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwcGx5UmVjdXIoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgIEQuZWFjaFJlY3VyKGVsZW0sIHRoaXMuYXBwbHlJRCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgaWRzIHRvIGFsbCBodG1sIGVsZW1lbnRzIGluIHRoZSB0YXJnZXQgbG9jYXRpb24gaW4gdGhlIERPTSB0aGF0IGRvIG5vdCBoYXZlIGlkcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXR0YWNoSWRzVG9BbGxFbGVtZW50cygpIHtcbiAgICBJREdlbmVyYXRvci5hcHBseVJlY3VyKEVsZW1lbnRzLmh0bWxMb2MpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaWRDb3VudCA9IDA7XG4gIHByaXZhdGUgc3RhdGljIHByZWZpeCA9IFwiYXV0b19nZW5faWRfdW5xX1wiO1xufVxuIiwiY29uc3QgcVBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbmV4cG9ydCBjb25zdCBwYXJhbXMgPSB7XG4gICAgd3VzdGxfa2V5OiAnJyxcbiAgICBzYW5kYm94OiBmYWxzZSxcbiAgICBwcm9qZWN0OiAnJyxcbiAgICBpdGVyYXRpb246IDAsXG4gICAgdGFnOiAnJyxcbn07XG50cnkge1xuICAgIHFQYXJhbXMuZm9yRWFjaChjb25zb2xlLmxvZyk7XG4gICAgaWYgKFxuICAgICAgICBbJ3d1c3RsX2tleScsICdzYW5kYm94JywgJ3Byb2plY3QnLCAnaXRlcmF0aW9uJywgJ3RhZyddLmV2ZXJ5KChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXk6ICcgKyBxUGFyYW1zLmhhcyhrZXkpKTtcbiAgICAgICAgICAgIHJldHVybiBxUGFyYW1zLmhhcyhrZXkpO1xuICAgICAgICB9KVxuICAgICkge1xuICAgICAgICBwYXJhbXMud3VzdGxfa2V5ID0gcVBhcmFtcy5nZXQoJ3d1c3RsX2tleScpIGFzIHN0cmluZztcbiAgICAgICAgcGFyYW1zLnNhbmRib3ggPSBxUGFyYW1zLmdldCgnc2FuZGJveCcpID09PSAndHJ1ZSc7XG4gICAgICAgIHBhcmFtcy5wcm9qZWN0ID0gcVBhcmFtcy5nZXQoJ3Byb2plY3QnKSBhcyBzdHJpbmc7XG4gICAgICAgIHBhcmFtcy5pdGVyYXRpb24gPSBwYXJzZUludChxUGFyYW1zLmdldCgnaXRlcmF0aW9uJykgYXMgc3RyaW5nLCAxMCk7XG4gICAgICAgIHBhcmFtcy50YWcgPSBxUGFyYW1zLmdldCgndGFnJykgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtaXNzaW5nIHF1ZXJ5IHBhcmFtcycpO1xuICAgICAgICBhbGVydChcbiAgICAgICAgICAgICdUaGlzIEhJVCBpcyBtaXNzaW5nIG5lY2Nlc3NhcnkgbWV0YWRhdGEsIHNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZS4gUGxlYXNlIGNvbnRhY3QgdGhlIFJlcXVlc3RlciBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byBoYXBwZW4uJ1xuICAgICAgICApO1xuICAgIH1cbn0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBhbGVydChlKTtcbiAgICBhbGVydChcbiAgICAgICAgJ1RoaXMgSElUIGlzIGJyb2tlbiwgc29ycnkgZm9yIHRoZSBpbmNvbnZlbmllbmNlLiBQbGVhc2UgY29udGFjdCB0aGUgUmVxdWVzdGVyIGFzIHRoaXMgaXMgbm90IGludGVuZGVkIHRvIGhhcHBlbi4nXG4gICAgKTtcbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcblxubG9nKFwicmVhZHkgbG9hZGVkXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcblxubGV0IHJlYWR5ID0gZmFsc2U7XG5cbmxldCByZXNvbHZlRnVuYzogKHZhbDogYm9vbGVhbikgPT4gYW55O1xubGV0IHJlamVjdEZ1bmM7XG5jb25zdCByZWFkeVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbDogYm9vbGVhbikgPT4gYW55LCByZWplY3QpID0+IHtcbiAgcmVzb2x2ZUZ1bmMgPSByZXNvbHZlO1xuICByZWplY3RGdW5jID0gcmVqZWN0O1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbG9nKFwiZG9jdW1lbnQgaXMgcmVhZHlcIiwgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICByZWFkeSA9IHRydWU7XG4gIHJlc29sdmVGdW5jKHRydWUpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWR5KCkge1xuICByZXR1cm4gcmVhZHk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2FpdFVudGlsUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiByZWFkeSA/IFByb21pc2UucmVzb2x2ZSh0cnVlKSA6IHJlYWR5UHJvbWlzZTtcbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU2NlbmFyaW8ge1xuICAgIGNvbnRleHQ6IHN0cmluZztcbiAgICBxdWVzdGlvbjogc3RyaW5nO1xuICAgIHRhZzogc3RyaW5nO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXZhci1yZXF1aXJlc1xuZXhwb3J0IGNvbnN0IHNjZW5hcmlvczogU2NlbmFyaW9bXSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vLi4vc2NlbmFyaW9zL3NjZW5hcmlvcy5qc29uJyk7XG4od2luZG93IGFzIGFueSkuc2NlbmFyaW9zID0gc2NlbmFyaW9zO1xuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb24ge1xuICBwdWJsaWMgc3RhdGljIHNldHVwQWxsKCkge1xuICAgIEFjY29yZGlvbi5kaXNjYXJkQWxsKCk7XG4gICAgY29uc3QgYWNjb3JkaW9ucyA9IEQuY2xheihcImFjY29yZGlvblwiKTtcbiAgICBmb3IgKGxldCBhY2NJbmRleCA9IDA7IGFjY0luZGV4IDwgYWNjb3JkaW9ucy5sZW5ndGg7ICsrYWNjSW5kZXgpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBhY2NvcmRpb25zLml0ZW0oYWNjSW5kZXgpO1xuICAgICAgaWYgKGVsZW0gPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIEFjY29yZGlvbi5hY2NvcmRpb25zLnB1c2gobmV3IEFjY29yZGlvbihlbGVtKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNjYXJkQWxsKCkge1xuICAgIEFjY29yZGlvbi5hY2NvcmRpb25zID0gW107XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhY2NvcmRpb25zOiBBY2NvcmRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3V0ZXI6IEVsZW1lbnQpIHtcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIob3V0ZXIsIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyxcbiAgICAgICAgICAgICAgICB0byBoaWdobGlnaHQgdGhlIGJ1dHRvbiB0aGF0IGNvbnRyb2xzIHRoZSBwYW5lbCAqL1xuICAgICAgdGhpcy5vdXRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGFjdGl2ZSBwYW5lbCAqL1xuICAgICAgY29uc3QgcGFuZWwgPSB0aGlzLm91dGVyLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChwYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRvU29tZXRoaW5nKCkge1xuICBjb25zb2xlLmxvZyhcIlB1dCBzb21lIGNvZGUgaW4gaGVyZSFcIik7XG59XG4iLCJpbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSAnLi4vY29yZS91dGlscy9odG1sX2xvYWRlcic7XG5pbXBvcnQgeyBBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgeyBkb1NvbWV0aGluZyB9IGZyb20gJy4vZG8tc29tZXRoaW5nJztcbmltcG9ydCB7IEhUTUxDb250ZW50LCBpdGVtc1RvQ2FjaGUgfSBmcm9tICcuL2h0bWwtaW1wb3J0cyc7XG5pbXBvcnQgeyBTbGlkZXNob3cgfSBmcm9tICcuL3NsaWRlc2hvdyc7XG5pbXBvcnQgeyBzZXR1cFN0aWNreSB9IGZyb20gJy4vc3RpY2t5JztcblxuLy8gUHV0IGFsbCBmdW5jdGlvbiBjYWxscyB0aGF0IG5lZWQgdG8gYmUgbWFkZSBvbiBldmVyeSBwYWdlIGxvYWQgaW5zaWRlIHRoZSBzZXR1cEFsbCBmdW5jdGlvbiBib2R5LlxuZXhwb3J0IGZ1bmN0aW9uIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKSB7XG4gICAgLy8gVE9ETzogUHV0IGFsbCBvcGVyYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gaGFwcGVuIG9uIGV2ZXIgcGFnZSBsb2FkIGluIHRoaXMgZnVuY3Rpb24uXG4gICAgLy8gRm9yIGV4YW1wbGUgeW91IGNvdWxkIHdyaXRlOiBTdGlja3kuc2V0dXAoKVxuICAgIGRvU29tZXRoaW5nKCk7XG4gICAgc2V0dXBTdGlja3koKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwQWxsKCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyOiBhbnkpID0+IHNldFRpbWVvdXQociwgMTAwKSk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZGluZycpO1xuICAgIFNsaWRlc2hvdy5zZXR1cEFsbCgpO1xuICAgIEFjY29yZGlvbi5zZXR1cEFsbCgpO1xuICAgIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKTtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkZWQnKTtcbn1cblxuaXRlbXNUb0NhY2hlLmZvckVhY2goKGl0ZW06IEhUTUxDb250ZW50KSA9PiB7XG4gICAgSFRNTExvYWRlci5jYWNoZUhUTUwoaXRlbS5uYW1lLCBpdGVtLmNvbnRlbnQpO1xufSk7XG4od2luZG93IGFzIGFueSkuSFRNTExvYWRlciA9IEhUTUxMb2FkZXI7XG5cbmNvbnNvbGUubG9nKCdkeW5hbWljLWRvbSBsb2FkZWQnKTtcbi8vIERvIG5vdCB0b3VjaCB0aGlzIGxpbmUsIG5lZWRlZCB0byByZWluaXRpYWxpemUgY29kZSBpbiB0aGUgZHluYW1pYy1kb20udHMgc2V0dXBBbGwgZnVuY3Rpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCduZXdQYWdlTG9hZCcsICgpID0+IHNldHVwQWxsKCkpO1xuIiwiZGVjbGFyZSBmdW5jdGlvbiByZXF1aXJlKGlkOiBzdHJpbmcpOiBzdHJpbmc7XG5cbi8vIFRoaXMgZGVmaW5lcyB0aGUgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHBhc3NlZCB0byB0aGUgSFRNTExvYWRlciB0byBjYWNoZSB5b3VyIGh0bWwgY29udGVudC5cbmV4cG9ydCBpbnRlcmZhY2UgSFRNTENvbnRlbnQge1xuICAgIG5hbWU6IHN0cmluZzsgLy8gVGhlIG5hbWUgdGhhdCB5b3Ugd2lsbCB1c2UgdG8gcmVmZXJlbmNlIHRoZSBjb250ZW50IGluIHlvdXIgaHRtbCBwYWdlcy5cbiAgICBjb250ZW50OiBzdHJpbmc7IC8vIFRoZSBhY3R1YWwgaHRtbCBzdHJpbmcgdGhhdCB3aWxsIGJlIHB1bGxlZCBmcm9tIHRoZSBzb3VyY2UgZmlsZSB0aGF0IHlvdSBzcGVjaWZ5LlxufVxuXG4vLyBBbiBIVE1MQ29udGVudCBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGUgZm9sbG93aW5nOlxuLy8ge1xuLy8gICAgIG5hbWU6ICdmb290ZXInLFxuLy8gICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9mb290ZXIuaHRtbCcpLFxuLy8gfVxuXG4vLyBUaGVuIHlvdSBjYW4gcmVmZXJlbmNlIHRoYXQgY29udGVudCBpbiB5b3VyIGh0bWwgdXNpbmcgdGhlIGZvbGxvd2luZyB0YWcgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBuYW1lIGF0dHJpYnV0ZS5cbi8vIDx0cy1sb2FkIGRhdGEtbmFtZT1cImhlYWRlclwiPjwvdHMtbG9hZD5cblxuLy8gWW91IGNhbiBzcGVjaWZ5IGFzIG1hbnkgYXMgeW91IHdhbnQgaW5zaWRlIG9mIHRoZSBhcnJheSBhbmQgdGhleSB3aWxsIGFsbCBiZSBidW5kbGVkIHVwIHdpdGggeW91ciB3ZWJzaXRlLlxuLy8gTWFrZSBzdXJlIHRvIG1ha2UgYSBjb3JyZXNwb25kaW5nIGh0bWwgZmlsZSBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciBmb3IgZWFjaCBlbGVtZW50IHlvdSBzcGVjaWZ5LlxuXG5leHBvcnQgY29uc3QgaXRlbXNUb0NhY2hlID0gW1xuICAgIC8vIEZlZWwgZnJlZSB0byBjaGFuZ2UgdGhlIGNvbnRlbnQgaW5zaWRlIGFueSBvZiB0aGUgaHRtbCBmaWxlcyBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciB0byBzdWl0IHlvdXIgbmVlZHMuXG4gICAge1xuICAgICAgICBuYW1lOiAnaGVhZGVyJyxcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2hlYWRlci5odG1sJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdmb290ZXInLFxuICAgICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcbiAgICB9LFxuICAgIC8vIFB1dCBtb3JlIGl0ZW1zIGluIHRoZSBhcnJheSBiZWxvdyBoZXJlLlxuXTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9vdGVyIGlkPVxcXCJjb2xvcGhvblxcXCIgY2xhc3M9XFxcImZvb3RlclxcXCIgcm9sZT1cXFwiY29udGVudGluZm9cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldHNcXFwiPlxcbiAgICAgIDxhc2lkZSBjbGFzcz1cXFwid2lkZ2V0IHNpdGUtY29udGFjdFxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPk51cnNlcnkgU2Nob29sPC9oMj5cXG4gICAgICAgIDxwPjY5MjYgRm9yZXN0IFBhcmsgUGFya3dheTwvcD5cXG4gICAgICAgIDxwPlN0LiBMb3VpcywgTU8gNjMxMzA8L3A+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicGhvbmVcXFwiPjMxNC05MzUtNjY4OSA8c3Bhbj58PC9zcGFuPiBGYXg6IDMxNC05MzUtNzI0OTwvcD5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9tYWlsdG86bnVyc2VyeUB3dXN0bC5lZHVcXFwiPm51cnNlcnlAd3VzdGwuZWR1PC9hPlxcbiAgICAgICAgPC9wPlxcbiAgICAgIDwvYXNpZGU+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2lkZ2V0LXdyYXBwZXJcXFwiPlxcbiAgICAgICAgPGFzaWRlIGlkPVxcXCJ0ZXh0LTRcXFwiIGNsYXNzPVxcXCJ3aWRnZXQgd2lkZ2V0X3RleHQgd2lkZ2V0LWNvdW50LTJcXFwiPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPkhvdXJzIG9mIE9wZXJhdGlvbjwvaDI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHR3aWRnZXRcXFwiPlxcbiAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgQ2xhc3NlcyBtZWV0IE1vbi4gdGhyb3VnaCBGcmkuPGJyPlxcbiAgICAgICAgICAgICAgTW9ybmluZzogOS0xMTo0NSBhLm0uPGJyPlxcbiAgICAgICAgICAgICAgQWZ0ZXJub29uOiAxMjozMC0zOjE1IHAubS48YnI+XFxuICAgICAgICAgICAgICBGdWxsIGRheTogOSBhLm0uLTM6MTUgcC5tLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgICAgPGFzaWRlIGlkPVxcXCJ0ZXh0LTNcXFwiIGNsYXNzPVxcXCJ3aWRnZXQgd2lkZ2V0X3RleHQgd2lkZ2V0LWNvdW50LTJcXFwiPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPkFwcGx5IGZvciB0aGUgTnVyc2VyeSBTY2hvb2w8L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0d2lkZ2V0XFxcIj5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgIEV4cGVyaWVuY2UgdGhlIGlubm92YXRpdmUgYXBwcm9hY2ggYW5kIGR5bmFtaWMgdGVhY2hpbmdcXG4gICAgICAgICAgICAgIGVudmlyb25tZW50IG9mIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImZpbGVzL2FwcGx5Lmh0bWxcXFwiPlJlZ2lzdGVyIE5vdzwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1pbmZvXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwiZm9vdGVyLWNvcHlyaWdodFxcXCI+wqkyMDE5IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBpbiBTdC4gTG91aXM8L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9mb290ZXI+XCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwid3VzdGwtYnJhbmRpbmdcXFwiPlxcbiAgPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIzMjFcXFwiIGhlaWdodD1cXFwiMjhcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMjEgMjhcXFwiIGNsYXNzPVxcXCJ3YXNodS1sb2dvXFxcIlxcbiAgICBhcmlhLWxhYmVsbGVkYnk9XFxcInRpdGxlXFxcIj5cXG4gICAgPHRpdGxlIGlkPVxcXCJ0aXRsZVxcXCI+V2FzaGluZ3RvbiBVbml2ZXJzaXR5IGluIFN0LiBMb3VpczwvdGl0bGU+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNGRkZcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDEuNzZjLS4wOSAwLTQuNDEuMDQtMTAuNDYtMS4yMVYxOGMwIC4yNy4wMS40Ny4wMS40N3YuMDJjLjA0LjgxLjI4IDEuNDUuNzcgMiAuMzIuMzQuNzYuNyAxLjM4IDEuMDUuMTcuMS4zNS4xOC41NS4yOC4xNS4wNy4zMS4xNC40Ny4yLjE0LjA2LjU1LjI0LjY5LjI5bDYuNTkgMi41IDYuNTktMi41Yy4xNS0uMDUuNTYtLjI0LjY5LS4yOS4xNi0uMDcuMzItLjE0LjQ3LS4yLjE5LS4xLjM4LS4xOC41NS0uMjguNjItLjM1IDEuMDYtLjcgMS4zOC0xLjA1LjQ4LS41NS43My0xLjE5Ljc3LTJ2LS4wMnMwLS4xOS4wMS0uNDdWLjU1QzE0Ljg2IDEuOCAxMC41NSAxLjc2IDEwLjQ2IDEuNzZ6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjMDA3MzYwXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAyLjhjLS4wOSAwLTQuMDMuMDQtOS41Ni0xLjF2MTUuOTVjMCAuMjUuMDEuNDMuMDEuNDR2LjAyYy4wNC43NC4yNSAxLjMzLjcgMS44My4yOS4zMS43LjY0IDEuMjYuOTUuMTUuMDkuMzIuMTcuNS4yNi4xNC4wNy4yOC4xMy40NC4xOS4xMi4wNS41LjIyLjYzLjI3bDYuMDMgMi4yOSA2LjAzLTIuMjljLjEzLS4wNS41MS0uMjIuNjMtLjI3LjE1LS4wNi4zLS4xMy40NC0uMTkuMTgtLjA5LjM1LS4xNy41LS4yNi41Ni0uMzEuOTctLjY0IDEuMjYtLjk1LjQ0LS41LjY2LTEuMDkuNy0xLjgzdi0uMDJzMC0uMTguMDEtLjQ0VjEuN2MtNS41NSAxLjE0LTkuNSAxLjEtOS41OCAxLjF6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAzLjc1Yy0uMDggMC0zLjY4LjA0LTguNzQtMS4wMnY0LjA4YzUuMDUgMS4wNSA4LjY3IDEuMDIgOC43NCAxLjAyczMuNjguMDQgOC43NC0xLjAyVjIuNzNjLTUuMDYgMS4wNS04LjY2IDEuMDItOC43NCAxLjAyelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0E1MTQxN1xcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgNy44M2MtLjA4IDAtMy42OC4wNC04Ljc0LTEuMDJ2OS4wNWM1LjA1IDEuMDUgOC42NyAxLjAyIDguNzQgMS4wMnMzLjY4LjA0IDguNzQtMS4wMlY2LjgyYy01LjA2IDEuMDQtOC42NiAxLjAxLTguNzQgMS4wMXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTEuNzIgMTcuNzJjLjAzLjY5LjIzIDEuMjMuNjQgMS42OC4yNi4yOC42NC41OCAxLjE1Ljg3LjE1LjA4LjI5LjE1LjQ2LjIzLjEzLjA2LjI2LjEyLjQuMTcuMTEuMDUuNDYuMi41OC4yNEwxMC40NiAyM2w1LjUxLTIuMDljLjEyLS4wNC40Ni0uMi41OC0uMjQuMTQtLjA2LjI3LS4xMi40LS4xNy4xNi0uMDguMzItLjE1LjQ2LS4yMy41MS0uMjkuODgtLjU4IDEuMTUtLjg3LjQxLS40Ni42LTEgLjY0LTEuNjh2LS4wMnMwLS4xNi4wMS0uNHYtMS40NGMtNS4wNSAxLjA1LTguNjcgMS4wMi04Ljc0IDEuMDJzLTMuNjguMDQtOC43NC0xLjAydjEuNDVjLS4wMi4yNS0uMDEuNDEtLjAxLjQxelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNNC44IDMuNjlsLjQxIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNS0uNzYtMS4wNS43Ni4zOS0xLjI0LTEuMDQtLjc3IDEuMjktLjAxLjQxLTEuMjN6bTExLjMxIDBsLjQyIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNi0uNzYtMS4wNS43Ni4zOS0xLjI0LTEuMDQtLjc3IDEuMjktLjAxLjQxLTEuMjN6bS01LjY1LjQ4bC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDYuNzUuMzktMS4yNC0xLjA0LS43NyAxLjMtLjAxLjQxLTEuMjJ6TTEwLjQ2IDE3LjIxbC0uNDYuNDV2MS4yMmwuMjMuNjV2MS4wOWguNDV2LTEuMDlsLjIzLS42NXYtMS4yMmwtLjQ1LS40NXptLjIyIDQuNDF2LS42NWgtLjQ1di42NWwtLjIzLjQyLjQ2LjU2LjQ2LS41Ni0uMjQtLjQyem0uMzMtLjY1di41bC4yOS4zMS41MS0uNDF2LS40MWgtLjh6bS41NC0yLjA0bC0uNTQuNnYxLjA5aC40NHYtLjY1bC40My0uNDYuNTUuMzYuMzUtLjM2di0uNThoLTEuMjN6bS0xLjY0IDIuMDR2LjVsLS4yOS4zMS0uNTItLjQxdi0uNDFoLjgxem0tLjU1LTIuMDRsLjU0LjZ2MS4wOWgtLjQzdi0uNjVsLS40My0uNDYtLjU1LjM2LS4zNS0uMzZ2LS41OGgxLjIyelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMTQuNjIgOS4yN3Y1LjE5aC0zLjQ5bC0uMjUuMjEtLjQzLjM3LS40My0uMzctLjI1LS4yMUg2LjI5VjkuMjdsLS43NC41NHY1LjM4aDQuMTJsLjM3LjMxLjQzLjM4LjQzLS4zOC4zNy0uMzFoNC4xMlY5LjgxbC0uNzctLjU0elxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMTEuMDIgOC44M2wtLjE0LjExLS40My4zOC0uNDMtLjM4LS4xMi0uMTFINy4wM3Y0Ljg5aDIuODhsLjIuMTcuMzUuMzEuMzYtLjMxLjE5LS4xN2gyLjg4VjguODNoLTIuODd6TTE2LjExIDEwLjM1djMuMzFjLjk1LS4xNCAxLjk4LS4zMSAzLjA4LS41NFY5LjgxYTUwLjUgNTAuNSAwIDAgMS0zLjA4LjU0em0tMTEuMzEgMGMtLjk1LS4xNC0xLjk4LS4zMS0zLjA4LS41NHYzLjMxYzEuMS4yMyAyLjE0LjQxIDMuMDguNTR2LTMuMzF6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjMDA3MzYwXFxcIlxcbiAgICAgIGQ9XFxcIk0xNi4xMSAxNi43NmwtLjMxLjMydi44NmwuMTUuNDZ2Ljc3aC4zMXYtLjc3bC4xNi0uNDZ2LS44NmwtLjMxLS4zMnptLjE2IDMuMDl2LS40NWgtLjMxdi40NmwtLjE1LjMuMzEuNC4zMi0uNC0uMTctLjMxem0uMjMtLjQ1di4zNWwuMi4yMi4zNi0uMjh2LS4yOWgtLjU2em0uMzgtMS40M2wtLjM4LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzguMjUuMjQtLjI1di0uNDFoLS44NXptLTEuMTQgMS40M3YuMzVsLS4yMS4yMi0uMzUtLjI4di0uMjloLjU2em0tLjM5LTEuNDNsLjM5LjQzdi43N2gtLjMxdi0uNDZsLS4zLS4zMy0uMzkuMjUtLjI0LS4yNXYtLjQxaC44NXpNNC44IDE2Ljc2bC0uMzIuMzJ2Ljg2bC4xNi40NnYuNzdoLjMxdi0uNzdsLjE1LS40NnYtLjg2bC0uMy0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNi4zLjMyLjQuMzEtLjQtLjE2LS4zMXptLjIyLS40NXYuMzVsLjIxLjIyLjM1LS4yOHYtLjI5aC0uNTZ6bS4zOS0xLjQzbC0uMzkuNDN2Ljc3aC4zMXYtLjQ2bC4zLS4zMy4zOS4yNS4yNC0uMjV2LS40MWgtLjg1ek00LjQyIDE5LjR2LjM1bC0uMi4yMi0uMzYtLjI4di0uMjloLjU2em0tLjM4LTEuNDNsLjM4LjQzdi43N2gtLjMxdi0uNDZsLS4zLS4zMy0uMzguMjUtLjI0LS4yNXYtLjQxaC44NXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxnIGZpbGw9XFxcIiNGRkZcXFwiIGNsYXNzPVxcXCJ3YXNodS1sb2dvLXRleHRcXFwiPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMjMyLjQ3IDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc2IDEuNTcgMS4wNyAxLjU3em0xMy44MiAxMi4wM3YtNS4wOGMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtMS4wNCAxLjAxLTMuMDYgMS42Mi0uMTMuMDMtLjUuMDQtLjUxLjI3IDAgLjY1IDIuMDMtLjg0IDEuOTkgMS42OHY3LjY0YzAgMS40My0uNyAxLjU1LTEuMjEgMS42OC0uMDMgMC0uMDYtLjAxLS4xIDAtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjkgMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMxIDAgMS4xNS0uMTMgMi41My0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNlYxMy4xYy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjLS4wMyAyLjI3LS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYzEuMjcgMCAxLjgyLjEyIDIuMTYuMTIuMjYgMCAuNzMtLjIuNDUtLjQ0LS42OC0uNS0xLjk3LjMtMS45NS0yLjA0ek00OC45MSAyLjRjLjM3LS4wNS41NS0uMTkuNTUtLjE5IDAtLjI0LS4wNS0uMy0uMzktLjMtLjY1IDAtMS4wNS4xMS0xLjY5LjExLS43MSAwLTEuMjUtLjA4LTEuODUtLjA4LS4zNCAwLS4zMS4xMS0uMzEuMyAwIC4yMS42NS4wOCAxLjAyLjg5LjIxLjQ0LjEzIDEuMzYtLjA4IDEuOWwtNS4wMSAxMy43NC0yLjE0LTYuMS0uODMtMi4yM3MtLjEzLjA2LjQ2LTEuNzlsMS4xNy0zLjUyYy41Ny0xLjczIDEuMTQtMi42NCAxLjg4LTIuNjUuOTItLjAyLjkyLS41Ny4yMS0uNTdzLTEuMTMuMDYtMS43NS4wNmMtLjY1IDAtLjk5LS4wNi0xLjY5LS4wNi0uMjYgMC0uNTUuMDgtLjUyLjMuMDMuMjEuNDIuMTQuNzEuMy40Ny4yNC43OCAxLjI1LjQ1IDIuM2wtMS4zOCA0LjQyLTEuNTgtNC4xM2MtLjMxLS43OC0uNzMtMi41Mi4wMy0yLjY3LjczLS4xNS42My0uNTIuMTgtLjUyLS44NiAwLTEuMzIuMTEtMi4xNS4xMS0uOTEgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMTggMC0uNTIuMDMtLjQyLjM4LjA1LjIxLjQ5LjE0Ljc2LjMgMS4wNS42OCAxLjI1IDEuNTUgMS42MiAyLjUybDIuMyA2LjQ4Yy40MiAxLjE2LjQ1Ljc0LjExIDEuNzNsLTIgNS41LTQuOTUtMTQuMTFjLS4zOS0xLjA2LS42LTEuNzkuMjYtMi4yLjM3LS4xOS40Ny0uMjIuNTItLjMuMDUtLjA3LjEtLjMyLS40NS0uMy0uODkuMDMtMS40My4xMS0yLjMyLjExLS45NCAwLTEuNTktLjExLTIuNDUtLjExLS4yOSAwLS4zNC4xNC0uMzQuMzUgMCAuMzMuNzEuMTEgMS4zMS44MS4zNC4zOC45OSAxLjY2IDEuMTQgMi4xMkwzMi44IDIyLjNjLjExLjI1LjE0Ljc2LjQ4Ljc2LjI3IDAgLjMzLS41Ny40Mi0uNzlsMy4xMy04LjU5IDMuMDUgOC4xNmMuMTMuMzMuMzEgMS4yMi42MyAxLjIyLjI2IDAgLjM2LS40My40OS0uODNsNS45LTE2Ljg3Yy41LTEuMzYgMS4wNy0yLjc5IDIuMDEtMi45NnptNjUuNDYgNi43MWMtMy4yNiAwLTUuNzcgMy4yOC01Ljc3IDcuMTMgMCAxLjk2LjUyIDMuNTEgMS40MiA0LjYzLS4zMS4yMS0uOTIuNy0yLjE1LjctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMlYxMS4ybDMuMzgtLjAxYy4yMiAwIC42NS0xLjQ0LjY3LTEuNTIuMDQtLjE4LjEtLjMzLjEyLS40Ni4wNC0uMjgtLjE3LS4zLS4zNy0uMDEtLjE1LjE1LS4zMi41NS0uOTkuNTVoLTIuODFjMC0yLjQxLjAzLTMuNTEtLjM1LTMuNTEtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNDQgMS40NC0xLjc5IDIuMjMtMi42MyAyLjY4LS4zOC4wOS0uODEuMTItMS4yOS4wMS0uNzQtLjE2LTEuNi0xLjA2LTMuODMtMS4wNi0yLjM4IDAtNC40NiAxLjk1LTQuNDYgNC41NSAwIDEuNC42MiAyLjc2IDEuNzEgMy40OC0uMi4xMi0xLjUzIDEuMjQtMS4zNyAyLjU2IDAgMC0uMDMgMS4zNyAxLjA1IDEuODItLjMzLjE0LS42Ny4zNi0uOTYuNjMtLjctLjI2LTEuNzItLjA2LTEuNzItMS45MVYxNS4xYzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uNzMuOTktMi45MSAxLjU1LS4xMy4wMy0uNDMuMS0uNDQuMzQgMCAuNjUgMS43NS0uNzEgMS43NiAxLjY4djcuNjRjMCAxLjY1LTEuMzEgMS42NS0xLjU0IDEuNjctLjEgMC0uMTkgMC0uMzEuMDEtLjU1LS4wNS0xLjUxLS4zLTEuNTEtMS4zNFY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS43OC0uODYgMi4wMS0xLjQzIDIuMDMtLjY5LS4wOS0xLjIyLS4zNy0xLjIyLTEuNDF2LTUuMTRjMC0yLjY1LTEuMDEtNi4wNy00LjMzLTYuMDctMS40NyAwLTIuNzUuODEtMy43MyAxLjkyVjIuNDFjMC0uMzEtLjE1LS40OC0uMzEtLjQ5LS40LS4wMy0xLjA3IDEuMTktMi45NiAxLjYzLS4xMy4wMy0uNjIuMDctLjYyLjI1IDAgLjY1IDEuOTctLjMxIDEuOTkgMS42OVYyMC42YzAgMS41MS0xLjMgMS4zMS0xLjUzIDEuNzktLjA0LjIxLjA4LjMxLjI2LjMxLjQyIDAgMS41NS0uMTIgMi4zNS0uMTJzMi4xLjEyIDIuNjQuMTJjLjMxIDAgLjQ0LS4wNi40NC0uNDQtLjI3LS41Mi0yLjI4LjI4LTIuMjgtMi4zN3YtNi41YzAtMS41NyAxLjg3LTIuNzggMy4wMy0yLjc4LjkxIDAgMy4xNC43MSAzLjE0IDQuNTN2NS42NGMwIDEuMTEtMS4xOCAxLjIzLTEuMjcgMS41NyAwIC4yNC4xNS4zNC40Mi4zNC4yOCAwIDEuMTEtLjEyIDIuMTItLjEyLjU2IDAgMS4wNy4wMyAxLjUuMDYuMjMuMDUuNTcuMDUuOTkuMDUuMjggMCAxLS4xMSAxLjgyLS4xMXMxLjQ4LjA3IDEuOTkuMTFjLjEuMDEuMi4wMS4zLjAxLjA0IDAgLjA4LjAxLjEyLjAxaC4wMWMuMzIuMDEuNjEgMCAuNzQgMCAuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2YzAgMi0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MuOTMgMCAxLjUzLjA3IDEuOTEuMS0uMjkuNDItLjQ4LjktLjUxIDEuNC0uMTQgMi41MSAyLjkzIDMuNDEgNS41MSAzLjM3IDUuMTItLjA3IDYuNTctMy42MiA1LjUxLTUuNTEtMS4wOS0xLjk1LTMuNDQtMS44Ny01LjY4LTEuODYtNC4yLjAyLTMuNDEtMi41OS0xLjY5LTIuNDkuNC4wMi4yLjE0IDEuNTcuMTQgMi40MyAwIDQuNzYtMS42NiA0LjctNC4zOC0uMDEtLjIzLjA1LTEuMDMtLjUzLTIuMTQgMS4xNC4wMS42OSAwIDIuNDEgMGwtLjAxIDcuNjNjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS43NCAwIDMuMDEtMS4xNSAzLjI0LTEuNjggMS4wMyAxLjEgMi40NiAxLjY4IDQuMTIgMS42OCAzLjE5IDAgNS42LTIuOTMgNS42LTYuNzggMC01LjgtMy42NS02Ljk2LTUuNjEtNi45NnpNOTUuNjIgMjEuNzJjLjIxLS4wMS4yNy4wOCAyLjY0LjE3IDIuNDUuMDYgMy4zMy43NyAzLjQ5IDEuNC4yNiAxLjEyLS41MyAzLjUyLTQuMDUgMy4yOS0yLjIyLS4xNS0yLjg3LTEuMi0zLjAzLTEuNDQtLjg0LTEuMTYtLjE2LTMuMzUuOTUtMy40MnptMi4wMS00LjU3Yy0yLjA4IDAtMi43OC0yLTIuNzgtMy45MSAwLTEuOTYuNTktMy41OCAyLjY3LTMuNTggMi4xMSAwIDIuOTUgMi4xNiAyLjk1IDQuMDcuMDEgMS45My0uODcgMy40Mi0yLjg0IDMuNDJ6bTE2Ljk5IDQuODFjLTMuMDMgMC00LjIyLTMuNzYtNC4yMi02LjgyIDAtMi42NSAxLjA0LTUuMSAzLjU3LTUuMSAzLjA4IDAgNC4xOSAzLjI5IDQuMTkgNi41MS4wMSAzLjg3LTEuMzYgNS40MS0zLjU0IDUuNDF6XFxcIj5cXG4gICAgICA8L3BhdGg+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0xMzEuMTEgMjAuMTl2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA3IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAyIDEuNjh2Ny42NGMwIDItMS4zNSAxLjUyLTEuNjYgMi4wNC0uMTUuMjcuMjUuMzMuNTkuMzMuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ0LS40NC0uNjUtLjQ5LTEuOTQuMzEtMS45Mi0yLjAzek03Ny40MSA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42LjAyLjM1Ljc3IDEuNTcgMS4wNyAxLjU3em0tMTcuMyA2Ljk2Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA0IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ3IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42MS0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIC41MS0uMDEuOTgtLjAxIDEuMzgtLjA3LjM2LS4yLjctLjU0LjcyLTEuMjQuMDgtLjk0LTEuOS0uOTQtMi45NXYtNi40M2MtLjA2LTEuOTctMS41NC0zLjI1LTMuOC0zLjI1LTMuMDkgMC01LjMxIDMuODEtNC4yNSA1IC4yNS4yOCAxLjI2LS44IDEuMzItLjg2cy4wOC0uMTMuMDgtLjEzYy0uMDEtMS4zLjk3LTIuOTUgMi4zNy0zLjA5IDEuNi0uMTUgMi40IDEuMDQgMi40IDIuNjV2Mi4wOWMtNi4wNiAxLjIxLTYuOTMgMy4yMi02LjkzIDQuODcgMCAyLjIxIDEuNTUgMy4yIDMuMjMgMy4yIDEuNDUgMCAyLjg4LS42OSAzLjk2LTEuOC4zNCAxLjAzIDEuMDEgMS42NSAyLjAyIDEuNjIuMzUtLjAxLjQxLjA5IDEuNDYtLjM3LjM3LS4xLjM1LS4wOS43Ny0uMDEuNTYuMTkgMS4zMi41NyAyLjY2LjU3IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNyAwLTEuNS0uNDMtMi40MS0yLjM5LTMuNjN6bS04LjQzIDQuMzJjMCAxLjY1LTEuNjggMi41Mi0yLjYgMi41Mi0xLjM4IDAtMi4zMy0uODktMi4zMy0yLjY2IDAtMi43MyAzLjI4LTMuMjMgNC45NC0zLjY3LS4wMS0uMDEtLjAxIDMuODEtLjAxIDMuODF6bTIxOS45OS4xOWMtLjMxIDAtMS4wNyAxLjI5LTEuMDcgMS42MyAwIC4zNC43NyAxLjYgMS4wNyAxLjYuMzMgMCAxLjA3LTEuMjMgMS4wNy0xLjZzLS43My0xLjYzLTEuMDctMS42M3ptMzMuNzEgMS4xMlY5LjkyYzAtLjYxLS4zNC0uNzctLjQ0LS43Ny0uMzkgMC0uNjEuMS0uODguMTYtLjI3LjEtLjU4LjIzLTEuMjkuMjMtLjEzIDAtLjc5LS4xMi0uNzYuMjUuMDQuMzcgMS41Ny4xNSAxLjU4IDEuMjN2Ny44M2MtLjEyIDEuMzctMS4yNyAyLjg4LTIuNjYgMi44OC0uMzIgMC0yLjM5LS4yMi0yLjM3LTMuNjVWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS42MS4yMi0xLjMyLjE5LS4zOC0uMDItLjc5LS4wNy0uNzMuMjkuMDYuMzIgMS41OSAwIDEuNTkgMS4yM3Y3LjUxYzAgMi43NCAxLjYxIDQuMzIgMy41NiA0LjMyIDEuMyAwIDIuNDktLjI4IDMuMjQtMS44aC4wNXYxLjMyYzAgLjEzLjAzLjQ4LjIyLjQ4LjM3IDAgLjU2LS4zLjgzLS40LjI5LS4wNy4zNy0uMzMgMS4yOC0uNDIuMzktLjA0LjgyLS4yNC44Mi0uNS0uMTEtLjUzLTEuNC4wNi0xLjQtLjc4ek0yOTAuMDkgOS4xMWMtMy4yNiAwLTUuNzcgMy4yOC01Ljc3IDcuMTMgMCAxLjczLjQyIDMuMTUgMS4xMyA0LjIzLS43OS41Ny0yLjIzIDEuMS00Ljk2IDEuMS0yLjEzIDAtMS45My0uNzQtMS45My0yLjU1VjQuNTdjMC0yLjY2IDEuOTktMS44OSAyLjAzLTIuMzcuMDMtLjM0LS4yOC0uMjYtLjYxLS4yNi0uMzggMC0xLjA3LjE1LTIuNTIuMTUtMS4yNSAwLTIuMzQtLjEyLTIuODgtLjEyLS4zMyAwLS42My4xLS41Mi4zNS4yNS41NyAyLjE0LjA1IDIuMTQgMS42NXYxNS4xYzAgMS40NC4yMSAyLjM2LS40NSAyLjczLS44MS40OS0xLjc2LjUxLTEuNjguODMuMDUuMTkuNDUuMi42OC4yIDEuMDIgMCAyLjQyLS4xMyAzLjQ0LS4xNSAxLjk0LS4wNiAzLjg2LjEzIDUuNzkuMTMgMS4xMiAwIDEuNC0uMjIgMi4yMi0xLjMzLjAxLS4wMi4wMi0uMDMuMDQtLjA1IDEuMDEuOTQgMi4zNCAxLjQ0IDMuODcgMS40NCAzLjE5IDAgNS42LTIuOTMgNS42LTYuNzguMDEtNS44Mi0zLjY1LTYuOTgtNS42Mi02Ljk4em0uMjYgMTIuODVjLTMuMDMgMC00LjIyLTMuNzYtNC4yMi02LjgyIDAtMi42NSAxLjA0LTUuMSAzLjU3LTUuMSAzLjA4IDAgNC4xOSAzLjI5IDQuMTkgNi41MS4wMSAzLjg3LTEuMzYgNS40MS0zLjU0IDUuNDF6bS0zMi4wMy0xMC40OWMtLjc1LS4zNy0xLjg1LTEuMDQtMi4zOS0xLjM2LTIuMzctMS4zNy0zLjMtMi4yNi0zLjM3LTMuNTItLjEyLTIuMjEgMi4wNC0zLjUyIDMuNTgtMy4zNSAxLjk2IDAgMy41NyAxLjE5IDQuMjQgMy43My4wNy4yNy4zMS44OS41Ni44OS4yMiAwIC4yNi0uMi4yNC0uNDVsLS4zMy00LjAyYy0uMDItLjMzLS4xNC0uNDItLjI3LS40Mi0uMjIgMC0uMzYuMzMtLjU2LjMzLS4zMSAwLTEuMS0xLjExLTMuOC0xLjA5LS4xOC0uMDEtLjQzLjAyLS40My4wMi0yLjYzLS4wNS01LjEgMS43LTUuMDIgNS40LjA3IDMuMzcgMy44NSA1LjMgNS44OSA2LjU5IDEuNTEuOSAzLjA5IDIuMzQgMy4wNCAzLjk1LS4wOCAyLjQ3LTEuNjMgNC4wOC0zLjU4IDMuOTQtNC41OS0uMDgtMy45Ni02LjEzLTQuNzgtNi4xMy0uNTYgMC0uNDUgMS41Mi0uNDYgMi4zMiAwIDEuOTItLjA4IDMuNDkuMTQgMy43Ny4wNy4wOS4yOS4wNS43NC4wNS45IDAgMiAxLjA1IDQuNjUgMS4wNSAyLjk1LjA1IDUuMzgtMi42OSA1LjM4LTYuMjUtLjAxLTIuMTktLjYyLTMuNTgtMy40Ny01LjQ1em01MS42OS0zLjMxYy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3pNMzEyLjY0IDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzMgMCAuNzYtLjguMDctLjY5em01Ljk4LTYuODhjLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDUgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMTEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAxLS4xMyAwLS4yOC4wMS0uMjguMDEtMS44MS0uMDMtMy41IDEuMTEtMy40NCAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42MS0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41Mi0uMDEgMS4yNS0uMDYgMi4yOC4xIDIuNDYuMDUuMDYuMi4wMy41LjAzLjYyIDAgMS4zOC42OSAzLjE5LjY5IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNy0uMDEtMS40OC0uNDMtMi4zOS0yLjM5LTMuNnptLTQ4LjczIDUuNjZjLS4yNi4xMy0uODUuNzctMi4yOC43Ny0xLjA3IDAtMS42OC0uNjQtMS43NC0ydi04LjgybDMuMzgtLjAxYy4yMiAwIC42NS0xLjQ0LjY3LTEuNTIuMDQtLjE4LjEtLjMzLjEyLS40Ni4wNC0uMjgtLjE3LS4zLS4zNy0uMDEtLjE1LjE1LS4zMi41NS0uOTkuNTVoLTIuODFjMC0yLjQxLjAzLTMuMDQtLjM1LTMuMDQtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNTQgMS43OS0yLjUyIDIuNTgtMy4xNSAyLjk3LS4xNS4wOC0uMTUuMTEtLjE1LjE5LS4wMS4yMy43NS4xNCAyLjMxLjE3bC0uMDEgOC4wN2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjg3IDAgMy4yMS0xLjM0IDMuMjgtMS44LjAzLS4yNSAwLS4yOC0uMTUtLjI2em0tODEuMzItMS4wOWMtLjU3IDAtMS40MiAxLjYyLTMuNjYgMS42Mi0xLjU4IDAtNC4xNy0xLjUzLTQuMTctNi42Nmg2LjljLjYgMCAuODguMDMuODgtLjUyIDAtMS4yNS0xLjQtNC45NS00LjU5LTQuOTUtMy4yNCAwLTUuMDggMy4zMy01LjA4IDcuMzEgMCAyLjA1IDEuMzUgNi4zOCA1LjI0IDYuMzggMi4zMyAwIDQuNTktMi4yNCA0LjU5LTIuOTUtLjAxLS4xMS0uMDEtLjIzLS4xMS0uMjN6bS01LjA4LTkuODFjMS40MiAwIDIuODggMS41NiAyLjg4IDMuMyAwIC40Ni0uMTUuNjItLjUyLjYyaC01LjExYzAtMS43MSAxLjEzLTMuOTIgMi43NS0zLjkyem0tMzEuNy03LjMzYy4xLS4xNi0uMjUtLjI0LS4zNy0uMjQtLjQyIDAtMS4zNy4xMS0xLjguMTEtLjg5IDAtMS42NC0uMDktMi41My0uMDktLjA3IDAtLjQ2LjA1LS40Ni4xOC0uMDEuNjMgMi4xMy0uMTEgMi4xMyAyLjZ2MTAuNTdjMCAzLjEzLS45OSA2LjQxLTUuMjkgNi40MS0zLjA5IDAtNC43Ni0xLjk0LTQuNzYtNi4xN1Y0LjQxYzAtMS45MSAxLjQ5LTEuNDkgMS41Mi0xLjkyLjAzLS40MS0xLjMzLS4xNi0xLjQzLS4xNi0uNzEgMC0xLjIxLjA4LTEuOTUuMDgtLjYyIDAtMS4zNy0uMS0xLjk3LS4xLS4xMiAwLS41My0uMDItLjYxLjE1LS4yMy41NiAxLjkxLjI2IDEuOTEgMS44M3YxMC45MmMwIDQuMDggMS4xNCA4LjA4IDcuMTcgNy45NyA3LjE0LS4xMiA3LjAxLTYuNTQgNy4wMS03LjgzVjUuMTJjLjAxLTIuNDMgMS4yLTIuMiAxLjQzLTIuNTd6bTI4LjE5IDcuMjRjLjE3LS4yLjIyLS41My0uNTctLjQ2LS40NSAwLS43Ny4wOC0xLjIyLjA4LS41NyAwLS42OC0uMDItMS4yMi0uMDQtLjY4LS4wMi0uODYuMDUtLjgyLjI1LjEyLjYgMS41NS4wMSAxLjM2IDEuOC0uMTYgMS41LS42NSAyLjc5LTEuMTQgNC4wN2wtMS43MyA0LjYyLTIuNTQtNy43Yy0uMzEtLjk2LS40NS0xLjQ3LS40NS0xLjU3IDAtLjk2IDEuMTYtLjc1IDEuNDItMS4xNC4xNi0uMjYtLjE3LS40LS41NC0uNC0uMzEgMC0uNjcuMTEtMS42My4xMy0uNzkuMDItMS4zNi4wMi0xLjctLjA1LS44OS0uMTYtLjgyLjMzLS41MS40OHMuNDYuMDEuOTEgMS4zNmwzLjkxIDExLjA2Yy4wOC4yMi4xOC43Ny41Mi43Ny4zOSAwIC4zOS0uMzkuODgtMS42OSAwIDAgMy43NS0xMC40OCA0LTEwLjg2LjUxLS43NC44OS0uNSAxLjA3LS43MXptMTQuNDctLjVjLTEuMDcgMC0xLjggMS4yOC0yLjMzIDIuMTZoLS4wNVY5LjUzYzAtLjMtLjE1LS40OC0uMy0uNDgtLjQxIDAtLjcyLjgxLTIuODcgMS4zMy0uMTMuMDMtLjQ4LjEtLjQ4LjI4IDAgLjY0IDEuODItLjE5IDEuODIgMS45M3Y4LjA3YzAgMS4yNS0xLjI5IDEuMTItMS4yOSAxLjc3IDAgLjE4LjA4LjI3LjI4LjI3LjE3IDAgLjYzLS4xMiAyLjMyLS4xMiAxLjQxIDAgMi4wMi4xMiAyLjM3LjEyLjI4IDAgLjQxLS4wNi40MS0uMzQgMC0uOTgtMi4yNS40OC0yLjI1LTIuMzR2LTYuODhjMC0uNC42LTEuOCAxLjY0LTEuOC45MSAwIDEuMDIuNyAxLjUuNy4zIDAgLjkxLS45MS45MS0xLjM4LS4wMS0uNTgtMS4xNi0xLjM3LTEuNjgtMS4zN3ptMzIuNTUuMWMtLjI3IDAtLjk2LjA0LTEuNTkuMDQtLjc2IDAtMS4xMy0uMDktMS40NS0uMDktLjQ4IDAtLjk2IDAtLjg3LjMyLjEuMzYgMS43My4yMyAxLjczIDIuMDEgMCAuMjMgMCAuNTItLjMzIDEuNzFsLTIuMDggNi42My0yLjktOC4xNXMtLjE0LS4yNi0uMTQtLjc5YzAtMS4zMiAxLjU0LTEuMTcgMS42LTEuNDEuMDUtLjE5LS4yMS0uNC0uNjItLjRoLTMuNjNjLS4wMiAwLS4wMy4wMS0uMDUuMDFoLTIuODFjMC0yLjQxLjAzLTMuMDQtLjM1LTMuMDQtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNTQgMS43OS0yLjUyIDIuNTgtMy4xNSAyLjk3LS4xNS4wOC0uMTUuMTEtLjE1LjE5LS4wMS4yMi43Ni4xNCAyLjMxLjE3bC0uMDEgOC4wN2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjg3IDAgMy4yMS0xLjMzIDMuMjgtMS44IDAtLjI3LS4wNC0uMjktLjE4LS4yNy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMlYxMC43czIuNS0uMDEgMy4yMS0uMDFjLjA0LjA2LjA4LjEzLjEuMTlsMi45OSA4LjQ1Yy4yNC42OS4zOS45Mi42OCAyLjE0LjE5Ljc5LjEyIDEuNTEuMTIgMS41MS0uMjkgMS4yNy0xLjA3IDEuOTktMi4yNiA0LjM0LS4xMi4yMiAxLjcxLS4wMiAxLjgxLS4wNS4xNS0uMDUuMTMtLjA5LjMxLS40MmwxLjMyLTMuOTMgMy42OS0xMS4zNGMuNTQtMS45OCAxLjM5LTEuNjIgMS41My0xLjg5LjEyLS4xMyAwLS4zLS4zMy0uM3pcXFwiPlxcbiAgICAgIDwvcGF0aD5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTIyMi4yMiAyMi43NmwtLjA3LjE5VjIzbC4wNy0uMjR6bS0xNC43NC0xNC42Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3pNMjEwLjExIDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzMgMCAuNzYtLjguMDctLjY5ek0xNjYuNTIgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzcgMS41NyAxLjA3IDEuNTd6TTE2OS4xNyAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0aC0uMTdjLS41NC0uMS0xLjA2LS4zMi0xLjA1LTEuNzl2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA3IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAyIDEuNjh2Ny42NGMwIDItMS4zNSAxLjUyLTEuNjYgMi4wNC0uMTUuMjcuMjUuMzMuNTkuMzMuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjA0IDAgLjA5LS4wMS4xMy0uMDEuMTEgMCAuMjEuMDEuMzQuMDEuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjM0LjAyLjc1LS43OC4wOC0uNjd6bTMyLjcyLTYuODljLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDUgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMS0uNzQtMi41NS0uNzQtLjExIDAtLjUyLS4wMS0uNi0uMDItLjEzIDAtLjI4LjAyLS4yOC4wMi0xLjgxLS4wMy0zLjUgMS4xMS0zLjQ1IDMuNTMuMDUgMi4yMSAyLjY0IDMuNDYgNC4wNCA0LjMgMS4wNC41OSAyLjI2IDEuMTUgMi4yNCAyLjU3LS4wMiAxLjYyLTEuMjcgMi42OC0yLjYxIDIuNi0zLjE1LS4wNS0yLjcyLTQtMy4yOC00LS4zOSAwLS4zMSAxLS4zMSAxLjUyIDAgMS4yNS0uMDYgMi4yOC4xIDIuNDYuMDUuMDYuMi4wMy41LjAzLjYyIDAgMS4zOC42OSAzLjE5LjY5IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNyAwLTEuNDctLjQyLTIuMzgtMi4zOC0zLjZ6XFxcIj5cXG4gICAgICA8L3BhdGg+XFxuICAgIDwvZz5cXG4gIDwvc3ZnPlxcbjwvZGl2PlxcbjxoZWFkZXIgcm9sZT1cXFwiYmFubmVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJzaXRlLXRpdGxlXFxcIiBocmVmPVxcXCJmaWxlcy9pbmRleC5odG1sXFxcIj5OdXJzZXJ5IFNjaG9vbDwvYT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBpZD1cXFwibWFpbi1tZW51LWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImFib3V0XFxcIiBocmVmPVxcXCJmaWxlcy9hYm91dC5odG1sXFxcIj5BYm91dFxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJ0dWl0aW9uXFxcIiBocmVmPVxcXCJmaWxlcy90dWl0aW9uLmh0bWxcXFwiPlR1aXRpb248L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInN0YWZmXFxcIiBocmVmPVxcXCJmaWxlcy9zdGFmZi5odG1sXFxcIj5TdGFmZjwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwicGFyZW50LWhhbmRib29rXFxcIiBocmVmPVxcXCJmaWxlcy9wYXJlbnRfaGFuZGJvb2suaHRtbFxcXCI+UGFyZW50IEhhbmRib29rPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiY2xhc3Nyb29tc1xcXCIgaHJlZj1cXFwiZmlsZXMvY2xhc3Nyb29tcy5odG1sXFxcIj5DbGFzc3Jvb21zXFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImN1cnJpY3VsdW0tb3ZlcnZpZXdcXFwiIGhyZWY9XFxcImZpbGVzL2N1cnJpY3VsdW1fb3ZlcnZpZXcuaHRtbFxcXCI+Q3VycmljdWx1bSBPdmVydmlldzwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwidGVkZHktYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3RlZGR5X2JlYXJzLmh0bWxcXFwiPlRlZGR5IEJlYXJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYW5kYS1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvcGFuZGFfYmVhcnMuaHRtbFxcXCI+UGFuZGEgQmVhcnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImJlYXItY3Vic1xcXCIgaHJlZj1cXFwiZmlsZXMvYmVhcl9jdWJzLmh0bWxcXFwiPkJlYXIgQ3ViczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiYmlnLWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy9iaWdfYmVhcnMuaHRtbFxcXCI+QmlnIEJlYXJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzdW4tYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3N1bl9iZWFycy5odG1sXFxcIj5TdW4gQmVhcnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImJlYXItdHJhY2tzXFxcIiBocmVmPVxcXCJmaWxlcy9iZWFyX3RyYWNrcy5odG1sXFxcIj5CZWFyIFRyYWNrczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiZW5yaWNobWVudC1wcm9ncmFtXFxcIiBocmVmPVxcXCJmaWxlcy9lbnJpY2htZW50X3Byb2dyYW1zLmh0bWxcXFwiPkVucmljaG1lbnQgUHJvZ3JhbTwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxhIGlkPVxcXCJjYWxlbmRhclxcXCIgaHJlZj1cXFwiZmlsZXMvY2FsZW5kYXIuaHRtbFxcXCI+Q2FsZW5kYXI8L2E+XFxuICAgICAgICA8YSBpZD1cXFwic3VtbWVyLWNhbXBcXFwiIGhyZWY9XFxcImZpbGVzL3N1bW1lcl9jYW1wLmh0bWxcXFwiPlN1bW1lciBDYW1wPC9hPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiZ2V0LWludm9sdmVkXFxcIiBocmVmPVxcXCJmaWxlcy9nZXRfaW52b2x2ZWQuaHRtbFxcXCI+R2V0IEludm9sdmVkPC9hPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcIm51cnNlcnktc2Nob29sLW1lcmNoYW5kaXNlXFxcIiBocmVmPVxcXCJmaWxlcy9udXJzZXJ5X3NjaG9vbF9tZXJjaGFuZGlzZS5odG1sXFxcIj5OdXJzZXJ5IFNjaG9vbFxcbiAgICAgICAgICAgICAgTWVyY2hhbmRpc2U8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1hc3NvY2lhdGlvblxcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X2Fzc29jaWF0aW9uLmh0bWxcXFwiPlBhcmVudCBBc3NvY2lhdGlvbjwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxhIGlkPVxcXCJhcHBseVxcXCIgaHJlZj1cXFwiZmlsZXMvYXBwbHkuaHRtbFxcXCI+QXBwbHk8L2E+XFxuICAgICAgICA8YSBpZD1cXFwiZm9ybXNcXFwiIGhyZWY9XFxcImZpbGVzL2Zvcm1zLmh0bWxcXFwiPkZvcm1zPC9hPlxcblxcbiAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1yZXNvdXJjZXNcXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9yZXNvdXJjZXMuaHRtbFxcXCI+UmVjb21tZW5kZWQgUmVhZGluZzwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2hlYWRlcj5cIjtcbiIsImltcG9ydCB7IEQgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9kb2N1bWVudFwiO1xuXG5leHBvcnQgY2xhc3MgU2xpZGVzaG93IHtcbiAgcHVibGljIHN0YXRpYyBzZXR1cEFsbCgpIHtcbiAgICBTbGlkZXNob3cuZGlzY2FyZEFsbCgpO1xuICAgIGNvbnN0IHNsaWRlc2hvd3MgPSBELmNsYXooXCJzbGlkZXNob3dcIik7XG4gICAgZm9yIChsZXQgc3NJbmRleCA9IDA7IHNzSW5kZXggPCBzbGlkZXNob3dzLmxlbmd0aDsgKytzc0luZGV4KSB7XG4gICAgICBjb25zdCBlbGVtID0gc2xpZGVzaG93cy5pdGVtKHNzSW5kZXgpO1xuICAgICAgaWYgKGVsZW0gPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFNsaWRlc2hvdy5zbGlkZXNob3dzLnB1c2gobmV3IFNsaWRlc2hvdyhlbGVtKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNjYXJkQWxsKCkge1xuICAgIFNsaWRlc2hvdy5zbGlkZXNob3dzID0gW107XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzbGlkZXNob3dzOiBTbGlkZXNob3dbXSA9IFtdO1xuXG4gIHByaXZhdGUgc2xpZGVJbmRleCA9IDA7XG4gIHByaXZhdGUgc2xpZGVDb3VudCA9IDA7XG4gIHByaXZhdGUgc2xpZGVzOiBFbGVtZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBkb3RzOiBFbGVtZW50W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG91dGVyOiBFbGVtZW50KSB7XG4gICAgRC5lYWNoUmVjdXIodGhpcy5vdXRlciwgKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGNMaXN0ID0gZWxlbS5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY0xpc3QuY29udGFpbnMoXCJwcmV2LXNsaWRlc2hvdy1idXR0b25cIikpIHtcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5taW51c1NsaWRlKDEpKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJuZXh0LXNsaWRlc2hvdy1idXR0b25cIikpIHtcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5wbHVzU2xpZGUoMSkpO1xuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcInNsaWRlc2hvdy1lbnRyeVwiKSkge1xuICAgICAgICB0aGlzLnNsaWRlcy5wdXNoKGVsZW0pO1xuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcInNsaWRlc2hvdy1kb3RcIikpIHtcbiAgICAgICAgdGhpcy5kb3RzLnB1c2goZWxlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvdHNbaV0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93U2xpZGUoaSkpO1xuICAgIH1cbiAgICB0aGlzLnNsaWRlQ291bnQgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgdGhpcy5zaG93U2xpZGUodGhpcy5zbGlkZUluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBwbHVzU2xpZGUobjogbnVtYmVyKSB7XG4gICAgdGhpcy5zaG93U2xpZGUoKHRoaXMuc2xpZGVJbmRleCArPSBuKSk7XG4gIH1cbiAgcHVibGljIG1pbnVzU2xpZGUobjogbnVtYmVyKSB7XG4gICAgdGhpcy5zaG93U2xpZGUoKHRoaXMuc2xpZGVJbmRleCAtPSBuKSk7XG4gIH1cbiAgcHVibGljIHNob3dTbGlkZShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zbGlkZUluZGV4ID0gaW5kZXggJSB0aGlzLnNsaWRlQ291bnQ7XG4gICAgdGhpcy5zbGlkZUluZGV4ID0gTWF0aC5tYXgodGhpcy5zbGlkZUluZGV4LCAtMSAqIHRoaXMuc2xpZGVJbmRleCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlcy5sZW5ndGg7ICsraSkge1xuICAgICAgKHRoaXMuc2xpZGVzW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgKHRoaXMuc2xpZGVzW3RoaXMuc2xpZGVJbmRleF0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgdGhpcy5kb3RzW3RoaXMuc2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxufVxuIiwidmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1tZW51LWNvbnRhaW5lclwiKTtcbnZhciBzdGlja3kgPSBoZWFkZXIub2Zmc2V0VG9wO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTdGlja3koKSB7XG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XG4gIH1cbn0iLCJpbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9jb3JlL3V0aWxzL3FfcGFyYW1zJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLy4uL2NvcmUvZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBBY3Rpb25FbnVtIH0gZnJvbSAnLi8uLi9jb3JlL2RhdGEtbG9nL2V2ZW50JztcbmltcG9ydCB7IEQgfSBmcm9tICcuLy4uL2NvcmUvZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi8uLi9jb3JlL2RvbS9lbGVtZW50cyc7XG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tICcuLy4uL2NvcmUvZG9tL3Njcm9sbCc7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnLi8uLi9jb3JlL3JvdXRlci9oaXN0b3J5JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kZSwgUm91dGVyTW9kdWxlIH0gZnJvbSAnLi8uLi9jb3JlL3JvdXRlci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJy4vLi4vY29yZS90cmFja2VyL3RyYWNrZXInO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0gfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXInO1xuaW1wb3J0IHsgSURHZW5lcmF0b3IgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yJztcbmltcG9ydCB7IHdhaXRVbnRpbFJlYWR5IH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL3JlYWR5JztcbmltcG9ydCB7IHNjZW5hcmlvcywgU2NlbmFyaW8gfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvc2NlbmFyaW9zJztcblxuY29uc3Qgc2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgd2FpdFVudGlsUmVhZHkoKTtcbiAgICBjb25zdCBzY2VuYXJpbyA9IHNjZW5hcmlvcy5maW5kKChzY2VuKSA9PiBzY2VuLnRhZyA9PT0gcGFyYW1zLnRhZyk7XG4gICAgaWYgKCFwYXJhbXMuc2FuZGJveCkge1xuICAgICAgICBpZiAoc2NlbmFyaW8gPT09IG51bGwgfHwgc2NlbmFyaW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWxlcnQoJ1RoaXMgSElUIGlzIGJyb2tlbiBhbmQgY2Fubm90IGJlIGNvbXBsZXRlZCBhdCB0aGlzIHRpbWUuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUcmFja2VyLmxvYWRTY2VuYXJpbyhzY2VuYXJpbyBhcyBTY2VuYXJpbyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVHJhY2tlci5zdGFydCh7XG4gICAgICAgIGtleVByZWZpeDogJ2luZm9ybWF0aW9uLWZvcmFnaW5nJyxcbiAgICAgICAgYnVja2V0TmFtZTogJ2NzZS0yNTYtbG9nJyxcbiAgICAgICAgYWxsb3dTdWJtaXNzaW9uOiB7XG4gICAgICAgICAgICBhbGxvdygpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IEQuaWQoJ3RleHQtYXJlYScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRBcmVhLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRBcmVhLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdZb3UgbXVzdCBmaWxsIG91dCB0aGUgdGV4dCBib3ggdG8gdHVybiB0aGlzIEhJVCBpbi4nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnVGhlcmUgd2FzIGFuIGVycm9yIGZpbGwgb3V0IHRoZSBmb3JtIGFuZCB0cnkgYWdhaW4uJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5yZXNwb25zZSA9IChELmlkKFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1hcmVhJ1xuICAgICAgICAgICAgICAgICkgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bS5OT05FLFxuXG4gICAgICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIHJvdXRlclxuICAgICAgICAgICAgUm91dGVyLmRlZmF1bHRBbGxvd2FuY2VzT24oKTtcbiAgICAgICAgICAgIFJvdXRlci5jb25maWd1cmUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IFJvdXRlck1vZHVsZS5BLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IG1vZGU6IFJvdXRlck1vZGUuT0ZGLCBtb2R1bGU6IFJvdXRlck1vZHVsZS5GT1JNIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLklNRyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICdmaWxlcy8nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgSGlzdG9yeS5zZXR1cCh3aW5kb3cubG9jYXRpb24uaHJlZiwgeyB3cmFwcGVyOiB0cnVlIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGh0bWwgbG9hZGVyIHBvc3Qgb3BlcmF0aW9uXG4gICAgICAgICAgICBIVE1MTG9hZGVyLmZpbmlzaCgpO1xuICAgICAgICAgICAgSFRNTExvYWRlci5yZWdpc3RlclBvc3RMb2FkRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgSURHZW5lcmF0b3IucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBJREdlbmVyYXRvci5hdHRhY2hJZHNUb0FsbEVsZW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgUm91dGVyLnNldHVwKEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICAgICAgICAgIFNjcm9sbC5wcm9taXNlKDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgbGlzdGVuZXJzIG9uIGh0bWwgbG9jXG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuaHRtbExvYywgQWN0aW9uRW51bS5DTElDSywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldiA9IGUgYXMgTW91c2VFdmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgIGlkOiAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5DTElDSykob2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRvY3VtZW50LCAna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ID0gZSBhcyBLZXlib2FyZEV2ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBldi5rZXksXG4gICAgICAgICAgICAgICAgICAgIGlkOiAoZXYuc3JjRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uQlVUVE9OKShvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTUEVDSUFMIENBU0U6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBkb2VzIG5vdCBiZWhhdmUgdGhlIHNhbWUgd2F5IGFzIGRvY3VtZW50IHNvIHRoZSBiZWxvdyBmdW5jdGlvbiBtdXN0IGJlaGF2ZSBkaWZmZXJlbnRseSB0aGFuIHRoZSBsaXN0ZW5lcnMgYWJvdmUuXG4gICAgICAgICAgICBjb25zdCBzRWxlbSA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBzRWxlbS5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc0VsZW0uc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueCAtIGR4KSA+IDEwIHx8XG4gICAgICAgICAgICAgICAgICAgIChNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueSAtIGR5KSA+IDEwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkdGltZSAtIFRyYWNrZXIubGFzdFBvcy50aW1lID4gMTAwKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueCA9IGR4O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueSA9IGR5O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MudGltZSA9IGR0aW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7IHg6IGR4LCB5OiBkeSB9O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uU0NST0xMKShvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIHRyYWNrZWQgZXZlbnRzXG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5ISVNUT1JZKTtcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkJVVFRPTik7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5DTElDSyk7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5TQ1JPTEwpO1xuICAgICAgICAgICAgLy8gbG9hZCBmaXJzdCBwYWdlXG4gICAgICAgICAgICBhd2FpdCBSb3V0ZXIubG9hZCgnZmlsZXMvaW5kZXguaHRtbCcpO1xuICAgICAgICB9LFxuICAgIH0pO1xufTtcblxuc2V0dXAoKTtcbiJdfQ==
