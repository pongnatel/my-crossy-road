import * as THREE from "three";

export function DirectionalLight() {
  const dirLight = new THREE.DirectionalLight();
  dirLight.position.set(-100, -100, 200);
  dirLight.castShadow = true;
  dirLight.up.set(0, 0, 1);

  dirLight.shadow.mapSize.set(1024, 1024);

  dirLight.shadow.camera.up.set(0, 0, 1);
  dirLight.shadow.camera.near = 50;
  dirLight.shadow.camera.far = 400;
  dirLight.shadow.camera.left = -400;
  dirLight.shadow.camera.right = 400;
  dirLight.shadow.camera.top = 400;
  dirLight.shadow.camera.bottom = -400;

  return dirLight;
}
