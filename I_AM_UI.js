/*

this version is depricated and should not be used, instead use i-am-ui-new.js located in the same repo.

*/

let bool_index = [];
let clicked = [];
let boolean_index = [];
let dragging = [];
let color_dragging = [];
let color_SH = [];
let colorPosY = [];
let colorPosX = [];
let colorX = [];
let colorY = [];
let colorZ = [];

let Cli_AMMO = 0;

function I_AM_UI_Create_UI_engine(ammount)
{
  for (let i = 0; i<ammount; i++)
  {
    clicked[i] = false;
    dragging[i] = false;
    boolean_index[i] = false;
    color_dragging[i] = false;
    color_SH = 0;
    colorPosX[i] = 0;
    colorPosY[i] = 0;
    colorX[i] = 10;
    colorY[i] = 10;
    colorZ[i] = 0;
  }
  
  Cli_AMMO = ammount;
}

function I_AM_UI_Update_MP_Engine()
{
  for (let i = 0; i<Cli_AMMO; i++)
  {
    dragging[i] = true;
    color_dragging[i] = true;
    clicked[i] = true;
    boolean_index[i] = true;
  }
  
  print("Event.MouseDown.Array.Clicked = ["+clicked+"]");
  print(" ");
}

function I_AM_UI_Update_MD_Engine()
{
  for (let i = 0; i<Cli_AMMO; i++)
  {
    color_dragging[i] = true;
    dragging[i] = true;
  }
}

function I_AM_UI_Button(x,y,w,h,t,s,ox,oy,m,i,c)
{
  if (clicked[i] == true && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h)
  {
    clicked[i] = false;
    print("Event.ButionDown: "+m);
    print(" ");
      
    return(true);
  }else{
    clicked[i] = false;
  }
  
  I_AM_UI_hyperect(x,y,w,h,c);
  textSize(s);
  fill(27);
  text(t,x+ox,y+h-oy);
  fill(250);
}

function I_AM_UI_hyperect(x,y,w,h,c)
{
  beginShape();
  vertex(x+c, y);
  vertex(x+w-c, y);
  vertex(x+w, y+c);
  vertex(x+w, y+h-c);
  vertex(x+w-c, y+h);
  vertex(x+c, y+h);
  vertex(x, y+h-c);
  vertex(x, y+c);
  endShape(CLOSE);
}

function I_AM_UI_AddBar(x,y,t,w)
{
  I_AM_UI_hyperect(x,y,w,20,5);
  if (I_AM_UI_Button(x,y,20,20,"+",25,2.5,2))
  {
    return(true);
  }
  textSize(12);
  fill(27);
  text(t,x+25,y+15);
  fill(250);
}

function I_AM_UI_windowsBase(x,y,w,h,t,c,b)
{
  I_AM_UI_hyperect(x,y,w,h,c);
  
  line(x,y+b,x+w,y+b);
  
  textSize(20);
  textFont(modulus);
  fill(27);
  text(t,x+12,y+b/2);
  fill(250);
}

function I_AM_UI_bool(x,y,w,h,i,t1,t2,c)
{
  if(boolean_index[i] == true && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h)
  {
    if(bool_index[i] == true)
    {
      bool_index[i] = false;
    }else
    {
      bool_index[i] = true;
    }
    boolean_index[i] = false;
    
    print("Event.Boolean.AtIndex["+i+"] was set to: "+ bool_index[i]);
  }else
  {
    boolean_index[i] = false;
  }
  
  I_AM_UI_hyperect(x,y,w,h,c);
  
  textSize(15);
  stroke(0);
  
  if (bool_index[i] == true)
  {
    text(t1,x+5,y+h-5);
  }else
  {
    text(t2,x+5,y+h-5);
  }
  
  return(bool_index[i]);
}

function I_AM_UI_colorThing(x,y,i)
{
  if (color_dragging[i] == true)
  {
    if (mouseX > x+10 && mouseX < x + 120 && mouseY > y+10 && mouseY < y + 120)
    {
      colorX[i] = map(mouseX-x,0,120,0,255);
      colorY[i] = map(mouseY-y,0,120,0,255);
    
      colorPosX[i] = mouseX;
      colorPosY[i] = mouseY;
    }
    if (mouseX > x+130 && mouseX < x + 150 && mouseY > y && mouseY < y + 113)
    {
      colorZ[i] = map(mouseY-y,0,113,0,255);
    }
    
      color_dragging[i] = false;
    
  }else
  {
    color_dragging[i] = false;
  }
  
  I_AM_UI_hyperect(x,y,160,130,5);
  I_AM_UI_hyperect(x+10,y+10,110,110,5);
  I_AM_UI_hyperect(x+130,y+10,20,110,5);
  I_AM_UI_hyperect(x+130,y+10,20,map(colorZ[i],0,255,0,110),5);
  
  fill(colorX[i],colorY[i],colorZ[i]);
  ellipse(colorPosX[i],colorPosY[i],10,10);
  fill(255);
  
  let col = color(colorX[i],colorY[i],colorZ[i]);
  
  return(col);
}

function I_AM_UI_display(x,y,w,h,t,s,ox,oy,c)
{
  I_AM_UI_hyperect(x,y,w,h,c);
  textSize(s);
  fill(27);
  text(t,x+ox,y+h-oy);
  fill(250);
}
