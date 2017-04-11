!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("preact-compat")):"function"==typeof define&&define.amd?define(["preact-compat"],t):"object"==typeof exports?exports.ReactTransitionGroup=t(require("preact-compat")):e.ReactTransitionGroup=t(e.preactCompat)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(5),u=r(s),p=n(0),l=r(p),c=n(11),f=(r(c),n(14)),d={component:l.default.PropTypes.any,childFactory:l.default.PropTypes.func,children:l.default.PropTypes.node},m={component:"span",childFactory:function(e){return e}},h=function(e){function t(n,r){o(this,t);var a=i(this,e.call(this,n,r));return a.performAppear=function(e){a.currentlyTransitioningKeys[e]=!0;var t=a.childRefs[e];t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e)):a._handleDoneAppearing(e)},a._handleDoneAppearing=function(e){var t=a.childRefs[e];t&&t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,f.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e)},a.performEnter=function(e){a.currentlyTransitioningKeys[e]=!0;var t=a.childRefs[e];t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e)):a._handleDoneEntering(e)},a._handleDoneEntering=function(e){var t=a.childRefs[e];t&&t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,f.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e)},a.performLeave=function(e){a.currentlyTransitioningKeys[e]=!0;var t=a.childRefs[e];t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e)):a._handleDoneLeaving(e)},a._handleDoneLeaving=function(e){var t=a.childRefs[e];t&&t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,f.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.performEnter(e):a.setState(function(t){var n=Object.assign({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,f.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t)},t.prototype.componentWillReceiveProps=function(e){var t=(0,f.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,f.mergeChildMappings)(n,t)});for(var r in t){var o=n&&n.hasOwnProperty(r);!t[r]||o||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(var i in n){var a=t&&t.hasOwnProperty(i);!n[i]||a||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},t.prototype.componentDidUpdate=function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)},t.prototype.render=function(){var e=this,t=[];for(var n in this.state.children)!function(n){var r=e.state.children[n];if(r){var o="string"!=typeof r.ref;t.push(l.default.cloneElement(e.props.childFactory(r),{key:n,ref:(0,u.default)(o?r.ref:null,function(t){e.childRefs[n]=t})}))}}(n);var r=Object.assign({},this.props);return delete r.transitionLeave,delete r.transitionName,delete r.transitionAppear,delete r.transitionEnter,delete r.childFactory,delete r.transitionLeaveTimeout,delete r.transitionEnterTimeout,delete r.transitionAppearTimeout,delete r.component,l.default.createElement(this.props.component,r,t)},t}(l.default.Component);h.displayName="TransitionGroup",h.propTypes=d,h.defaultProps=m,t.default=h,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"==typeof window||!window.document||!window.document.createElement),e.exports=t.default},function(e,t,n){"use strict";function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=r;var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.nameShape=i.default.PropTypes.oneOfType([i.default.PropTypes.string,i.default.PropTypes.shape({enter:i.default.PropTypes.string,leave:i.default.PropTypes.string,active:i.default.PropTypes.string}),i.default.PropTypes.shape({enter:i.default.PropTypes.string,enterActive:i.default.PropTypes.string,leave:i.default.PropTypes.string,leaveActive:i.default.PropTypes.string,appear:i.default.PropTypes.string,appearActive:i.default.PropTypes.string})])},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(0),u=r(s),p=n(1),l=r(p),c=n(12),f=r(c),d=n(3),m={transitionName:d.nameShape.isRequired,transitionAppear:u.default.PropTypes.bool,transitionEnter:u.default.PropTypes.bool,transitionLeave:u.default.PropTypes.bool,transitionAppearTimeout:(0,d.transitionTimeout)("Appear"),transitionEnterTimeout:(0,d.transitionTimeout)("Enter"),transitionLeaveTimeout:(0,d.transitionTimeout)("Leave")},h={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0},y=function(e){function t(){var n,r,a;o(this,t);for(var s=arguments.length,p=Array(s),l=0;l<s;l++)p[l]=arguments[l];return n=r=i(this,e.call.apply(e,[this].concat(p))),r._wrapChild=function(e){return u.default.createElement(f.default,{name:r.props.transitionName,appear:r.props.transitionAppear,enter:r.props.transitionEnter,leave:r.props.transitionLeave,appearTimeout:r.props.transitionAppearTimeout,enterTimeout:r.props.transitionEnterTimeout,leaveTimeout:r.props.transitionLeaveTimeout},e)},a=n,i(r,a)}return a(t,e),t.prototype.render=function(){return u.default.createElement(l.default,Object.assign({},this.props,{childFactory:this._wrapChild}))},t}(u.default.Component);y.displayName="CSSTransitionGroup",y.propTypes=m,y.defaultProps=h,t.default=y,e.exports=t.default},function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},function(e,t,n){"use strict";function r(e,t){e.classList?e.classList.add(t):(0,i.default)(e)||(e.className=e.className+" "+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(7),i=function(e){return e&&e.__esModule?e:{default:e}}(o);e.exports=t.default},function(e,t,n){"use strict";function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},function(e,t,n){"use strict";e.exports=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i="transform",a=void 0,s=void 0,u=void 0,p=void 0,l=void 0,c=void 0,f=void 0,d=void 0,m=void 0,h=void 0,y=void 0;if(o.default){var v=function(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),r=void 0,o=void 0,i="",a=0;a<n.length;a++){var s=n[a];if(s+"TransitionProperty"in e){i="-"+s.toLowerCase(),r=t[s]("TransitionEnd"),o=t[s]("AnimationEnd");break}}return!r&&"transitionProperty"in e&&(r="transitionend"),!o&&"animationName"in e&&(o="animationend"),e=null,{animationEnd:o,transitionEnd:r,prefix:i}}();a=v.prefix,t.transitionEnd=s=v.transitionEnd,t.animationEnd=u=v.animationEnd,t.transform=i=a+"-"+i,t.transitionProperty=p=a+"-transition-property",t.transitionDuration=l=a+"-transition-duration",t.transitionDelay=f=a+"-transition-delay",t.transitionTiming=c=a+"-transition-timing-function",t.animationName=d=a+"-animation-name",t.animationDuration=m=a+"-animation-duration",t.animationTiming=h=a+"-animation-delay",t.animationDelay=y=a+"-animation-timing-function"}t.transform=i,t.transitionProperty=p,t.transitionTiming=c,t.transitionDelay=f,t.transitionDuration=l,t.transitionEnd=s,t.animationName=d,t.animationDuration=m,t.animationTiming=h,t.animationDelay=y,t.animationEnd=u,t.default={transform:i,end:s,property:p,timing:c,delay:f,duration:l}},function(e,t,n){"use strict";function r(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-c)),r=setTimeout(e,n);return c=t,r}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=["","webkit","moz","o","ms"],s="clearTimeout",u=r,p=void 0,l=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i.default&&a.some(function(e){var t=l(e,"request");if(t in window)return s=l(e,"cancel"),u=function(e){return window[t](e)}});var c=(new Date).getTime();p=function(e){return u(e)},p.cancel=function(e){window[s]&&"function"==typeof window[s]&&window[s](e)},t.default=p,e.exports=t.default},function(e,t,n){"use strict";var r=function(){};e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return b.length?b.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){b.length&&b.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=n(6),l=r(p),c=n(8),f=r(c),d=n(10),m=r(d),h=n(9),y=n(0),v=r(y),T=n(0),g=n(3),b=[];h.transitionEnd&&b.push(h.transitionEnd),h.animationEnd&&b.push(h.animationEnd);var E={children:v.default.PropTypes.node,name:g.nameShape.isRequired,appear:v.default.PropTypes.bool,enter:v.default.PropTypes.bool,leave:v.default.PropTypes.bool,appearTimeout:v.default.PropTypes.number,enterTimeout:v.default.PropTypes.number,leaveTimeout:v.default.PropTypes.number},w=function(e){function t(){var n,r,a;o(this,t);for(var s=arguments.length,u=Array(s),p=0;p<s;p++)u[p]=arguments[p];return n=r=i(this,e.call.apply(e,[this].concat(u))),r.componentWillAppear=function(e){r.props.appear?r.transition("appear",e,r.props.appearTimeout):e()},r.componentWillEnter=function(e){r.props.enter?r.transition("enter",e,r.props.enterTimeout):e()},r.componentWillLeave=function(e){r.props.leave?r.transition("leave",e,r.props.leaveTimeout):e()},a=n,i(r,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var r=(0,T.findDOMNode)(this);if(!r)return void(t&&t());var o=this.props.name[e]||this.props.name+"-"+e,i=this.props.name[e+"Active"]||o+"-active",a=null,u=void 0;(0,l.default)(r,o),this.queueClassAndNode(i,r);var p=function(e){e&&e.target!==r||(clearTimeout(a),u&&u(),(0,f.default)(r,o),(0,f.default)(r,i),u&&u(),t&&t())};n?(a=setTimeout(p,n),this.transitionTimeouts.push(a)):h.transitionEnd&&(u=s(r,p))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,m.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,l.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=u({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,v.default.cloneElement(v.default.Children.only(this.props.children),e)},t}(v.default.Component);w.displayName="CSSTransitionGroupChild",w.propTypes=E,t.default=w,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(4),i=r(o),a=n(1),s=r(a);e.exports={TransitionGroup:s.default,CSSTransitionGroup:i.default}},function(e,t,n){"use strict";function r(e){if(!e)return e;var t={};return i.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function o(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i);var a=void 0,s={};for(var u in t){if(r.hasOwnProperty(u))for(a=0;a<r[u].length;a++){var p=r[u][a];s[r[u][a]]=n(p)}s[u]=n(u)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a]);return s}t.__esModule=!0,t.getChildMapping=r,t.mergeChildMappings=o;var i=n(0)}])});