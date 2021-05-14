# I_AM_UI
a ui engine for p5.js

to get started:

-go to p5.com and open the editor
-import I_AM_UI
-import a font and rename it UIfont.ttf it must be a true type font

-- your code should look like this:

    function setup() {
      cnv = createCanvas(400, 400);
      cnv.touchMoved(touch_Moved);
  
      I_AM_UI_Create_UI_engine(<ammount of ui objects you need>)
    }

    function mousePressed() {
      I_AM_UI_Update_MP_Engine()
    }

    function touchStarted() {
      I_AM_UI_Update_MP_Engine()
    }


    function touch_Moved() {
      I_AM_UI_Update_MD_Engine(); 
    }

    function mouseDragged() {
      I_AM_UI_Update_MD_Engine(); 
    }
    
    function draw()
    {
      background(220);
    }

- types of object

-- I_AM_UI_Button(x,y,width,height,text,text_size,text_offset_x,text_offset_y,m,index,corner_size);       its a button

-- I_AM_UI_hyperect(x,y,width,height,corner_size);                                                        rectangle with more verticies 

-- I_AM_UI_bool(x,y,width,height,index,text_if_true,text_if_false,corner_size);                           its a toggle

-- I_AM_UI_colorThing(x,y,index);                                                                         its a rgb color selector

-- I_AM_UI_display(x,y,width,height,text,text_size,text_offset_x,text_offset_y,corner_size);              text display

-- I_AM_UI_windowsBase(x,y,width,height,text,corner_size,line_offset);                                    hyperect with text and line

