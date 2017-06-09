#pragma strict

var speed:float=2.0;
var explosion:GameObject;


function Start () {

}

function Update () {

   if (transform.position.y<3.0)
     transform.Translate(Vector3.down*speed*Time.deltaTime);
   else 
     transform.Translate(Vector3.down*0.6*Time.deltaTime);
   
   if (transform.position.y<-1.30)
     Destroy(this.gameObject);
   

}


function OnTriggerEnter(other:Collider)
{
   if (other.transform.tag=="projectile")
   { 
      Destroy(other.gameObject);
   
      GameState.score+=150;
      GameState.enemyCount++;
      
   
      Instantiate(explosion,transform.position,transform.rotation);

      Destroy(this.gameObject);
   }
}