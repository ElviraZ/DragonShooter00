#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider)
{
    Debug.Log(other.gameObject.name + " on trigger enter red cube. ");

}


function OnCollisionEnter(collision:Collision)
{

    Debug.Log(collision.gameObject.name + "on collison enter red cube.  ");

}
