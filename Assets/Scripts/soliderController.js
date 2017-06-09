#pragma strict

function Start () {

}

function Update () {


   if (transform.position.y<-1.4) 
     Destroy(this.gameObject);
}