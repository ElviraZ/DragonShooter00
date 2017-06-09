#pragma strict

var projectile:Rigidbody;
var sound:AudioClip;

private var myTime:float=0;
private var shoot:boolean=false;


function Start () {

}

function Update () {


    myTime+=Time.deltaTime;
    
    if (myTime>2)
      shoot=true;

    if (shoot && GameState.backgroundEnd)
    {
      AudioSource.PlayClipAtPoint(sound, new Vector3(0,0,-10));
      
      var myProjectile:Rigidbody= Instantiate(projectile,transform.position, transform.rotation);
      
      myProjectile.velocity= transform.TransformDirection(new Vector3(0,-2,0));
      
      shoot=false;
      myTime=0;
      
      
    }
}