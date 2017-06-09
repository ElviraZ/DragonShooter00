#pragma strict
var isUsed:boolean=false;
var timeLength:float=0;
var columnSize:int=1;
var rowSize:int=1;
var colFrameStart:int=0;
var rowFrameStart:int=0;
var totalFrames:int=0;
var framesPerSeconds:int=0;
var totalTime:float=1.0;

private var index:int=0;
private var myTime:float=0;
private var size:Vector2;
private var offset:Vector2;
private var myTimeLength:float=0;
private var isPlay=true;

function Start () {

}

function Update () {

   if (isUsed)
      isUsed= aniSprite(columnSize,rowSize,colFrameStart,rowFrameStart,totalFrames,framesPerSeconds,totalTime);

   myTimeLength+=Time.deltaTime;
   
   if (timeLength!=0 && myTimeLength > timeLength)
     Destroy(gameObject);
}

function aniSprite(columnSize:int,rowSize:int,colFrameStart:int,rowFrameStart:int,totalFrames:int,framesPerSeconds:int,totalTime:float)
{
   myTime+=Time.deltaTime;
   
   if (myTime>totalTime && totalTime!=0)
   {
      isPlay=false;
      myTime=0;   
       
      return isPlay;
   }

   index= myTime*(framesPerSeconds - 1);
   
   index=index % totalFrames;
   
   var v:int=index % rowSize;
   var u:int=index % columnSize;
   
   size=new Vector2(1.0/columnSize,1.0/rowSize);
   
   offset=new Vector2((u+colFrameStart)*size.x,1.0-size.y-(v+rowFrameStart)*size.y);

   GetComponent.<Renderer>().material.mainTextureScale=size;
   GetComponent.<Renderer>().material.mainTextureOffset=offset;

   return true;
}