# fez-ui

## regarding the name change
i changed the name because it was too similar to [dear-imgui](https://github.com/ocornut/imgui)\
also "i-am-ui" wasn't very creative\
the names of the files will stay the same to keep compatibility

## about
a ui library for p5.js

it is greatly sugested to use the much more versitile and efficient i-am-ui-new.js.

please note that the new version is vastly different from the old version.\
all acessibily such as tts or tactile response is not included.

library can be used with jsdelivr: 
```html
<script src="https://cdn.jsdelivr.net/gh/zturtledog/fez-ui/i-am-ui-new.js"></script>
```

#### [live example](https://editor.p5js.org/the.spiderminecart/full/PeLTnsMH5)

## a list of features:
### util
hitbox\
iiil\
gridlock

### ui
[button](https://github.com/zturtledog/fez-ui/wiki/ui#button)\
[vslider](https://github.com/zturtledog/fez-ui/wiki/ui#vslider)\
[slider](https://github.com/zturtledog/fez-ui/wiki/ui#slider)\
[slider2d](https://github.com/zturtledog/fez-ui/wiki/ui#slider2d)\
[onelinetext](https://github.com/zturtledog/fez-ui/wiki/ui#onelinetext)\
[checkbox](https://github.com/zturtledog/fez-ui/wiki/ui#checkbox)

### gui
hyperect\
centeredtext

### kpi
kpi is an updated input system that makes it easier to handle key input\
keydown\
keytapd

## coming someday (maybe) 
*(feature creep be like)*\
colorpicker\
draggables        -- a window lke structure that can be dragged(offset can be applied)\
    |- dragable docks  --to manage the positions of windows
survansii support -- a type of string formating\
graphs            -- like with equations and things.\
theme systems     -- a way of managing color themes

## getting started

import i-am-ui-new.js into your project\
it is important to put `uiupd()` at the end of your draw function

like this:
```js
function draw() {
  background(220);

  //your code here!
  
  uiupd();
}
```

## example project

[![image](https://user-images.githubusercontent.com/71353802/186051464-0802a68e-1986-48d5-8b6c-cace418368bd.png)](https://editor.p5js.org/the.spiderminecart/full/PeLTnsMH5)

#### see wiki for the docs
note that it is a perpetual work in progress.\
also apologies for any spelling errors.
