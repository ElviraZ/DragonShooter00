#pragma strict

var mySkin:GUISkin;
var menuSound:AudioClip;

private var playPosition:Rect=new Rect(605,405,192,28);
private var moreGamePosition:Rect=new Rect(605,485,192,28);
private var menuPosition:Rect=new Rect(605,445,192,28);

function Start () {

}

function Update () {

}


function OnGUI()
{
   GUI.skin=mySkin;
   
   if  ( GUI.Button(playPosition,"",GUI.skin.GetStyle("playButton")))
   {
      AudioSource.PlayClipAtPoint(menuSound,new Vector3(0,0,-10));
      
      waitSeconds();   
   }

   if (GUI.Button(menuPosition,"",GUI.skin.GetStyle("menuButton")))
   {
      AudioSource.PlayClipAtPoint(menuSound,new Vector3(0,0,-10));
      
      waitSeconds2();   

   }

   GUI.Button(moreGamePosition,"",GUI.skin.GetStyle("moreFreeGameButton"));

}


function waitSeconds()
{
   yield WaitForSeconds(menuSound.length);
   
   Application.LoadLevel(2);
   
}

function waitSeconds2()
{
   yield WaitForSeconds(menuSound.length);
   
   Application.LoadLevel(0);
   
}