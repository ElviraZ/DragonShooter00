#pragma strict

var mySkin:GUISkin;
var menuSound:AudioClip;

private var moreGamePosition:Rect=new Rect(596,485,197,28);
private var menuPosition:Rect=new Rect(596,445,197,28);

private var level1Position:Rect=new Rect(80,120,195,46);
private var level2Position:Rect=new Rect(325,120,195,46);

function Start () {

}

function Update () {

}


function OnGUI()
{
   GUI.skin=mySkin;
   
   if  ( GUI.Button(level1Position,"",GUI.skin.GetStyle("level1")))
   {
      AudioSource.PlayClipAtPoint(menuSound,new Vector3(0,0,-10));
      
      waitSeconds1();   
   }

   GUI.Button(level2Position,"",GUI.skin.GetStyle("level2"));

   if (GUI.Button(menuPosition,"",GUI.skin.GetStyle("menuButton")))
   {
      AudioSource.PlayClipAtPoint(menuSound,new Vector3(0,0,-10));
      
      waitSeconds2();   

   }

   GUI.Button(moreGamePosition,"",GUI.skin.GetStyle("moreFreeGameButton"));

}


function waitSeconds1()
{
   yield WaitForSeconds(menuSound.length);
   
   Application.LoadLevel(3);
   
}

function waitSeconds2()
{
   yield WaitForSeconds(menuSound.length);
   
   Application.LoadLevel(0);
   
}