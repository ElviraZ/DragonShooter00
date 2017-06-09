#pragma strict
var speed:float=1.5;

function Start () {

}

function Update () {

   transform.Translate(Vector3.down*speed*Time.deltaTime);
   
   if (transform.position.y<=-1.1)
     Destroy(this.gameObject);

}