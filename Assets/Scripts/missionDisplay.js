#pragma strict

private var myTime:float=0;
private var x:float=0;
private var y:float=0;

var scale:float=1;
var myColor:Color;

var myString:Texture2D []=new Texture2D[9];    
 

function Start () {

}

function Update () {

   myTime+=Time.deltaTime;
   
   if (myTime>1.0)
    this.gameObject.SetActive(false);
}

function OnGUI()
{
   GUI.color=myColor;
   
   var screenPos:Vector2=Camera.main.WorldToScreenPoint( transform.position);
    
   x=screenPos.x;
   y=Screen.height-screenPos.y;
   
   var myWidth=0;
   
   for (var i:int=0;i<myString.Length;i++)
   {
      var j=0;
      if (i==0)
       j=1;
      else
       j=i;
        
      myWidth+=scale*myString[j-1].width;
      
      GUI.DrawTexture(new Rect(x+myWidth,y,scale*myString[i].width,scale*myString[i].height),myString[i]);
   
   }

}
