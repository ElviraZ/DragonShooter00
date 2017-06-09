#pragma strict
var projectile:GameObject;

var explosion:GameObject;
var bigExplosion:GameObject;
var missionFailed:GameObject;


function Start () {

}

function Update () {

   transform.position=Camera.main.ScreenToWorldPoint (  new Vector3(Input.mousePosition.x,Input.mousePosition.y,9)); 

   if (Input.GetMouseButtonDown(0)) 
     Instantiate(projectile,transform.position,transform.rotation);
   
   GameObject.Find("digit").GetComponent(digitDisplay).myStringScore=GameState.score.ToString();  
         
 //  Debug.Log(Input.mousePosition.x + "  " +Input.mousePosition.y);
}


function OnTriggerEnter(other:Collider)
{
  if (other.transform.tag=="enemy")
  {
   Destroy(other.gameObject);
   
   Instantiate(explosion,transform.position ,transform.rotation);
   
   GameState.myCount++;
   
   
   if (GameState.myCount>=20)
   {
   
     Instantiate(bigExplosion,transform.position,transform.rotation);
     
     missionFailed.SetActive(true);

     yield WaitForSeconds(1.0f);
     
     
     Application.LoadLevel(6);
     
     
               
   
   
   }
   
   
  } 

}