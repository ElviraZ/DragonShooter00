#pragma strict

function Start () {

}

function Update () {

   transform.GetComponent(digitDisplay).myStringScore=GameState.score.ToString();
}