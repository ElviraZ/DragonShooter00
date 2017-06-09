#pragma strict

var mySkin:GUISkin;
var menuSound:AudioClip;

private var moreGamePosition:Rect=new Rect(596,485,197,28);
private var OKPosition:Rect=new Rect(596,445,197,28);
private var menuPosition:Rect=new Rect(596,405,197,28);


function Start () {

}

function Update () {



}


function OnGUI()
{
   GUI.skin=mySkin;
   
   GUI.Button(moreGamePosition,"",GUI.skin.GetStyle("moreFreeGameButton"));
   
   if (GUI.Button(OKPosition,"",GUI.skin.GetStyle("OK")))
   {
     AudioSource.PlayClipAtPoint(menuSound,new Vector3(0,0,-10));
     waitSeconds1();   
   }


   if (GUI.Button(menuPosition,"",GUI.skin.GetStyle("menuButton")))
   {
     AudioSource.PlayClipAtPoint(menuSound,new Vector3(0,0,-10));
     waitSeconds2();   
   }


}

function waitSeconds1()
{
   yield WaitForSeconds(menuSound.length);
   GameState.enemyCount=0;   
   Application.LoadLevel(4);
}

function waitSeconds2()
{
   yield WaitForSeconds(menuSound.length);
   GameState.enemyCount=0;   
   Application.LoadLevel(0);
}
