#pragma strict

var mySkin:GUISkin;
var menuSound:AudioClip;

private var newGamePosition:Rect=new Rect(597,405,197,28);
private var howToPlayPosition:Rect=new Rect(597,445,197,28);
private var moreGamePosition:Rect=new Rect(597,485,197,28);

function Start () {

}

function Update () {

}


function OnGUI()
{
   GUI.skin=mySkin;
   
   if  ( GUI.Button(newGamePosition,"",GUI.skin.GetStyle("newGameButton")))
   {
      AudioSource.PlayClipAtPoint(menuSound,new Vector3(0,0,-10));
      
      waitSeconds();   
   }

   if (GUI.Button(howToPlayPosition,"",GUI.skin.GetStyle("howToPlayButton")))
   {
      AudioSource.PlayClipAtPoint(menuSound,new Vector3(0,0,-10));
      
      waitSeconds();   

   }

   GUI.Button(moreGamePosition,"",GUI.skin.GetStyle("moreFreeGameButton"));

}


function waitSeconds()
{
   yield WaitForSeconds(menuSound.length);
   
   Application.LoadLevel(1);
   
}