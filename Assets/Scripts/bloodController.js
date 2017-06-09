#pragma strict

function Start () {

}

function Update () {
 
   if (GameState.dragonCount<=15)
    transform.localScale=new Vector3(0.50*(1-GameState.dragonCount/15.0),10.0,1.0);
}