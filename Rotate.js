#pragma strict

public var rotate : float = 15.0;

function Update() {
	var rotateDelta : float = rotate*Time.deltaTime;
	//move the object 10 units per second vs 10 units per frame
	
	transform.Rotate(0, rotateDelta, 0);
}