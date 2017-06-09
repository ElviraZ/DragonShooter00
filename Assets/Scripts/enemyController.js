#pragma strict

var dieSoldier:GameObject;

function Start () {

}

function Update () {

   if (transform.position.y<-1.4) 
     Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider)
{
   if (other.transform.tag =="projectile")
   {
       Instantiate(dieSoldier,transform.position,transform.rotation);

       GameState.score+=100;
       GameState.enemyCount++;
       
       Destroy(this.gameObject);
     
   }


}
