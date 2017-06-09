#pragma strict

var playerTransform:Transform;

private var angle:float=0.0f;

function Start () {

}

function Update () {


  angle=Mathf.Rad2Deg*Mathf.Atan((playerTransform.position.x-transform.position.x)/(transform.position.y-playerTransform.position.y));

  transform.localEulerAngles=new Vector3(0,0,angle);
}