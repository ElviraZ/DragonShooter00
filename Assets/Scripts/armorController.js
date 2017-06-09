#pragma strict

function Start () {

}

function Update () {

   if (GameState.myCount<=20)
     transform.localScale=new Vector3(0.72*(1-GameState.myCount/20.0),5.0,1.0);


}