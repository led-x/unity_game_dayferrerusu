#pragma strict

// import System.Collections.Generic; // need to import dictionary
// var coin:int = 10; //same as public var coin:int=10;
// private var magic:int = 20;
public var healthCount : int = 50;
public var batteryCount : int = 0;
public var gunCount : int = 0;
private var hit : RaycastHit;
private var moveSpeed : int = 20;


// var inventory = new Dictionary.<String, int>();
// inventory["axe"] = 1;
// inventory["knife"] = 0;

// function Start () {

// }

// function Update () {

// }

// Debug.Log("coins" + coin);
function Update () {
	//Store forward position of player, direction, raycast will follow
	var fwd = transform.TransformDirection(Vector3.forward);

	if(Physics.Raycast(transform.position, fwd, hit, 2) && hit.collider.gameObject.CompareTag("spaceDoor") && batteryCount == 5) {
		Debug.Log("spacedoor");
		GameObject.FindGameObjectWithTag("spaceDoor").transform.Translate(Vector3(0,8,0) * Time.deltaTime * moveSpeed);
		Application.LoadLevel('youWin');
	}

	//Draw ray works different, requres direction and length in one variable.
	var forward : Vector3 = transform.TransformDirection(Vector3.forward) * 5;
	Debug.DrawRay(transform.position, forward, Color.red);
}

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
		healthCount-=5;
	}

	if(other.tag == "Battery") {
		batteryCount+=1;
		Destroy(other.gameObject);
	}

	if(other.tag=="Battery" && batteryCount ==5) {
		Destroy(other.gameObject);
	}

		if(other.tag == "Weapon") {
		gunCount+=1;
		//GameObject.Find("mainPistol").SetActive(true);
		// print('weapon');
		Destroy(other.gameObject);
			if (gunCount==1) {
		var childScript = transform.Find("mainPistol").GetComponent(mainPistol);
		childScript.enable();

	}
	}

	// if(other.tag=="Weapon" && weapon==1) {
	// }
	/*
	if(other.tag == "Battery" && battery == 5) {
		GameObject.FindGameObjectWithTag("KeyTexture").GetComponent(UI.RawImage).texture = Resources.Load("key-icon", typeof(Texture)) as Texture;
	}*/
	
	//Debug.Log(batteryCount);
	//Debug.Log(healthCount);

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
