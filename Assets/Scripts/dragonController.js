#pragma strict

var speed:float=0.6;
var explosion:GameObject;
var missionCompleted:GameObject;
var bloodController:GameObject;


private var right:int=0;

function Start () {

}

function Update () {

   if (!GameState.backgroundEnd)
     transform.Translate(Vector3.down*speed*Time.deltaTime);
   else if (transform.position.x<=-2.0)
     right=1;
   else if (transform.position.x>=2.0)
     right=2;     
  
   if (right==1)
   {
       if (!bloodController.active)
         bloodController.SetActive(true);
             
       transform.Translate(Vector3.right*speed*Time.deltaTime);
   } 
   else if (right==2)      
   {
       if (!bloodController.active)
         bloodController.SetActive(true);

          
       transform.Translate(Vector3.left*speed*Time.deltaTime);
   
   }  
}

function OnTriggerEnter(other:Collider)
{
  if (other.transform.tag=="projectile")
  {
    Destroy(other.gameObject);
  
  GameState.score+=500;
  GameState.dragonCount++;
  
  Debug.Log(  GameState.dragonCount.ToString());
  
  if (GameState.dragonCount>=15)
  {
     Instantiate(explosion,transform.position,transform.rotation);
     
     Instantiate(explosion,transform.position+new Vector3(0,0.8,0),transform.rotation);
     
     Instantiate(explosion,transform.position+new Vector3(0,1.2,0),transform.rotation);
     
     right=0;
     
     GameState.score+=10000;
     
     missionCompleted.SetActive(true);
     
     GameState.dragonCount=0;
     
     bloodController.SetActive(false);
     
     Application.LoadLevel(4);
     
     
  }
  
  }
}