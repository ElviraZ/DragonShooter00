#pragma strict

function Start () {

}

function Update () {

   if ( transform.position.x <=-3  ||  transform.position.x>=3  || transform.position.y <= -1)
     Destroy(this.gameObject);

}