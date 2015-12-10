#pragma strict



function Start () {
GetComponent(MeshRenderer).enabled = false;
// GameObject.Find("mainPistol").SetActive(false);

}


function Update () {

}

public function enable() {
GetComponent(MeshRenderer).enabled = true;
}