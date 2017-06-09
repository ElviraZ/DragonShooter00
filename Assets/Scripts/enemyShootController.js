#pragma strict

var yellowProjectile:GameObject;
var playerTransform:Transform;
var sound:AudioClip;

private var shoot:boolean=false;
private var myTime:float=0.0;
private var angle:float=0.0f;

function Start () {

}

function Update () {

 if (transform.position.y-playerTransform.position.y<0)
   shoot=false;

 if (shoot && transform.position.y<2.8)
 {
   angle=Mathf.Rad2Deg * Mathf.Atan((transform.position.y-playerTransform.position.y)/(transform.position.x-playerTransform.position.x));

   //Debug.Log("XXX"+angle);
   
   if (angle<0)  
     angle=90-Mathf.Abs(angle);
   else
     angle=-90+Mathf.Abs(angle);
     
     
   transform.localEulerAngles=new Vector3(0,0,angle);
   
   Instantiate(yellowProjectile,transform.position,transform.rotation);   
   
   AudioSource.PlayClipAtPoint(sound,new Vector3(0,0,-10));         
   
   myTime=0;
   shoot=false;
 }

   myTime+=Time.deltaTime;
   
   if (myTime>2)
    shoot=true;
}