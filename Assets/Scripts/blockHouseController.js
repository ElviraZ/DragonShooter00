#pragma strict
var explosion:GameObject;
var blockHouse2:Material;
function Start () {

}

function Update () {

   if (this.transform.position.y<-1.70)
     Destroy(this.gameObject);
}



function OnTriggerEnter(other:Collider)
{


   if (other.transform.tag== "projectile")
   {
      Destroy(other.gameObject);
      
      GameState.score+=80;
      GameState.enemyCount++;
      
      Instantiate(explosion,transform.position,transform.rotation);
     
      transform.GetComponent.<Renderer>().material=blockHouse2;
      
      transform.GetComponent.<Collider>().enabled=false;
   }


}