#pragma strict

public var healthSlider:UI.Slider;
public var batteryField:UI.Text; 
//health slider value increases when you run into a battery
var playerObject : GameObject;

function Start () {
	
playerObject = GameObject.FindGameObjectWithTag("Player");

}

function Update () {
	var playerScript = playerObject.GetComponent(player);

	var batteryValue : String = playerScript.batteryCount.ToString();
	batteryField.text = batteryValue;

	//If health is equal to 0, die, and load start screen
	if(healthSlider.value == 0) {
		//Debug.Log('Hello');
		Application.LoadLevel('startGame');
	}else {
		healthSlider.value += 1;
		//Debug.Log(healthSlider.value);
		var healthValue : int = playerScript.healthCount;
		healthSlider.value = healthValue;
	}
}