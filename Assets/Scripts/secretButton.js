#pragma strict

var mySkin:GUISkin;

private var secretPosition:Rect=new Rect(224,566,325,33);

function Start () {

}

function Update () {

}


function OnGUI()
{
  GUI.skin=mySkin;
  
  GUI.Button(secretPosition,"",GUI.skin.GetStyle("secret"));


}
