#pragma strict

function Start () {

}

function Update () {

  // transform.Translate(-0.01,0,0);
}

function OnTriggerEnter(other:Collider)
{
    Debug.Log(other.gameObject.name + " on trigger enter blue cube. ");

}


function OnCollisionEnter(collision:Collision)
{

    Debug.Log(collision.gameObject.name + "on collison enter blue cube.  ");

}
