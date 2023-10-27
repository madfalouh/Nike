import React, { useEffect, useRef } from "react";
import "./WelcomSection.css";
import hero6 from "../../assets/img/hero6.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function WelcomSection() {
  const containerRect = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    const containerRectThree = containerRect.current.getBoundingClientRect();
    const containerWidth = containerRectThree.width;
    const containerHeight = containerRectThree.height;

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(0x000000, 0); // set clear color to transparent
    const container = document.querySelector(".welcome-image-section");
    container.appendChild(renderer.domElement);
    const loader = new GLTFLoader();
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target = scene.position; // Set controls target to match the scene position
    camera.position.z = 0.5;
    camera.position.y += 0.8;
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const square = new THREE.Mesh(geometry, material);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);

    directionalLight.position.set(0, 1, 0);
    square.position.set(0, 1, 0);

const light = new THREE.PointLight(0xffffff, 0.28);
light.position.set(0,0, 0);
scene.add(light);


    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      light.position.x +=0.1
      renderer.render(scene, camera);
    }
    animate();

    loader.load(
      "models/mode.glb",
      (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(15, 15, 15);
        gltf.scene.rotateY(-14);
        gltf.scene.rotateX(0.5);
        gltf.scene.position.x += 0.4;
        gltf.scene.position.y -= 1.7;
        gltf.scene.rotateZ(1);
        gltf.scene.receiveShadow = true ; 
        gltf.scene.add(directionalLight);
        controls.t;
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div className="welcome-section">
      <div className="welcome-write-section">
        <h4>Trade in offer And prices</h4>
        <p>
          Write detailed and enticing descriptions of the shoes that you sell on
          your website. Include information such as the mater and{" "}
        </p>
       </div>
      <div
        className="welcome-image-section linear-gradient"
        ref={containerRect}
      ></div>
    </div>
  );
}

export default WelcomSection;
