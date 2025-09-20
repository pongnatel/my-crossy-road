import * as THREE from "three";
export function Wheel(x) {
  const wheel = new THREE.Mesh(
    new THREE.BoxGeometry(12, 33, 12),
    new THREE.MeshLambertMaterial({ color: "black", flatShading: true })
  );

  wheel.position.x = x;
  wheel.position.z = 6;

  return wheel;
}
