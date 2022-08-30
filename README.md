# I_AM_UI

## about
a ui library for p5.js

it is greatly sugested to use the much more versitile and efficient i-am-ui-new.js.

please note that the new version is vastly different from the old version.\
all acessibily such as tts or tactile response is not included.

library can be used with jsdelivr: 
```html
<script src="https://cdn.jsdelivr.net/gh/zturtledog/I_AM_UI/i-am-ui-new.js"></script>
```

#### [live example](https://editor.p5js.org/the.spiderminecart/full/PeLTnsMH5)

## a list of features:
### util
hitbox\
iiil\
gridlock

### ui
[button](https://github.com/zturtledog/I_AM_UI/wiki/ui#button)\
[vslider](https://github.com/zturtledog/I_AM_UI/wiki/ui#vslider)\
[slider](https://github.com/zturtledog/I_AM_UI/wiki/ui#slider)\
[slider2d](https://github.com/zturtledog/I_AM_UI/wiki/ui#slider2d)\
[onelinetext](https://github.com/zturtledog/I_AM_UI/wiki/ui#onelinetext)\
[checkbox](https://github.com/zturtledog/I_AM_UI/wiki/ui#checkbox)

### gui
hyperect\
centeredtext

## comming someday
colorpicker\
draggables    --a window lke structure that can be dragged(offset can be applied)

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
