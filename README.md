# preact-css-transition-group-issue #8

Issue page:
https://github.com/developit/preact-css-transition-group/issues/8


## Environment
* Android 6
* Chrome for Android v56
* preact-css-transition-group version: 1.1.1

## Context

This is similar seems to identical or similar to https://github.com/facebook/react/issues/1707.

However I've identified two issues:

The outcome is either (unpredictable):

1. After sequence of fast changes (add/delete operations) nodes under ReactCSSTransitionGroup are left stuck with transition classes *-leave *-enter-active.

2. After sequence of fast changes (add/delete operations) nodes under ReactCSSTransitionGroup both nodes (node that is "entering" and also node that is "leaving") are kept in DOM.

## Steps to Reproduce

1. visit https://goo.gl/rEsjm7 in Chrome for Android
2. tap quickly on 'Goto page x' to invoke transitions
3. after some time, you end up with blank screen (outcome 1) or unable to transition to another page (outcome 2), because of issues mentioned above

## Possible fix

Merge latest react-css-animation-group changes.