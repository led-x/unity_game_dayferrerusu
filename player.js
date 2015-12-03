#pragma strict

// import System.Collections.Generic; // need to import dictionary
// var coin:int = 10; //same as public var coin:int=10;
// private var magic:int = 20;
public var healthCount : int = 50;
public var batteryCount : int = 0;


// var inventory = new Dictionary.<String, int>();
// inventory["axe"] = 1;
// inventory["knife"] = 0;

// function Start () {

// }

// function Update () {

// }

// Debug.Log("coins" + coin);


//GAIN AND LOOSE HEALTH
function OnTriggerEnter(other:Collider) {
	if(other.tag =="Health" && healthCount < 100) {
		healthCount++;
		Destroy(other.gameObject);
	}
	
	if(other.tag=="Health" && healthCount==100){
		Destroy(other.gameObject);
	}

	//Damage
	if(other.tag =="Drone" && healthCount < 100) {
		healthCount--;
	}

	if(other.tag == "Battery") {
		batteryCount++;
		Destroy(other.gameObject);
	}
	/*
	if(other.tag == "Battery" && battery == 5) {
		GameObject.FindGameObjectWithTag("KeyTexture").GetComponent(UI.RawImage).texture = Resources.Load("key-icon", typeof(Texture)) as Texture;
	}*/
	
	Debug.Log(batteryCount);
	Debug.Log(healthCount);

	// if(other.tag=="key") {
	// 	key+=1;
	// 	Destroy(other.gameObject);

	// }

	// if(other.tag=="key" && key== 2) {
	// 	//if we collect two keys we want the texture to swap out
	// 	//swap out textures
	// 	gameObject.FindGameObjectWithTag("KeyTexture").GetComponent(UI.RawImage).texture = Resources.Load('key-icon', typeof(Texture)) as Texture;
		
	// }

	// if(other.tag ==="axe") {
	// 	inventory["axe"] +=1;
	// 	Destroy(other.gameObject);

	// 	for(var invItem : String in inventory.Keys) { // Keys are names of things in the inventory "axe" etc.
	// 		print(invItem+ " " + inventory[invItem]);
	// 	}

	// }
 }
