#pragma strict

function Start () {

}

function Update () {

  transform.GetComponent(digitDisplay).myStringScore=GameState.enemyCount.ToString();
}