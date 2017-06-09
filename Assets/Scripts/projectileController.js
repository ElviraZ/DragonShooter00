#pragma strict

var speed:float=2.0;
var sound:AudioClip;

function Start () {
   AudioSource.PlayClipAtPoint(sound,new Vector3(0,1,-10));
}

function Update () {

   transform.Translate(Vector3.up*speed*Time.deltaTime);
   
   if (transform.position.y>=3.3)
     Destroy(this.gameObject );
 
}