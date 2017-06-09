#pragma strict

function Start () {

}

function Update () {

   GameState.myTime+=Time.deltaTime;
   
   if (GameState.myTime<=26.0)
     transform.localScale=new Vector3(1.4*GameState.myTime/26.0,5.0,1.0);

}