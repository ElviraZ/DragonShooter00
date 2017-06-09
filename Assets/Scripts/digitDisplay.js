#pragma strict

var myStringScore:String;
var scale:float=1;
var myColor:Color;

private var x:float=0;
private var y:float=0;
 
var myNumber:Texture2D[]=new Texture2D[10];

private var index:int=0;
private var width:int=39;
private var height:int=48;


function Start () {

}

function Update () {

}

function OnGUI()
{
   GUI.color=myColor;
   var screenPos:Vector2=Camera.main.WorldToScreenPoint(transform.position);
   
   x=screenPos.x-70;
   y=Screen.height-screenPos.y-20;
   
   for (var i:int=0;i<myStringScore.Length;i++)
     GUI.DrawTexture(new Rect(x+i*scale*width,y,scale*width,scale*height),myNumber[parseInt(myStringScore[i])-48]);
  
}
