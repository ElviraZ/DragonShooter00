#pragma strict

var speed:float=1;

function Start () {

}

function Update () {

    transform.Translate(Vector3.down*speed*Time.deltaTime);
    
    if (transform.position.y <=-7.0)
    {
       transform.position.y =-7.0;
       
       GameState.backgroundEnd=true;
    }
    

}