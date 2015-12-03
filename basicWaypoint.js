#pragma strict

public var moveSpeed : float;

//Move Drone Forward
function Update () {
	transform.Translate(Vector3.forward * Time.deltaTime * moveSpeed);
}

//Rotate Drone 180Deg on waypoint collide
function OnTriggerEnter(hit : Collider) {
	if(hit.gameObject.tag == "waypoint") {
		transform.Rotate(0, 180, 0);
	}
}