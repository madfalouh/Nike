import React, { useEffect, useRef, useState } from "react";
import "./WelcomSection.css";
import hero6 from "../../assets/img/hero6.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { Points, PointsMaterial, SphereGeometry } from "three";

function WelcomSection() {
  const containerRect = useRef(null);
const [hoverInfo, setHoverInfo] = useState({ show: false, info: null, x: 0, y: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const container = document.querySelector(".welcome-image-section");
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target = scene.position;
    controls.enableZoom = true; // This allows zooming in and out

    camera.position.z = 0.5;
    camera.position.y += 0.8;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    const light = new THREE.PointLight(0xffffff, 0.28);
    light.position.set(0, 0, 0);
    scene.add(light);

    let sneakerModel = null; // This will store our sneaker model

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    container.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (
        sneakerModel &&
        intersects.length > 0 &&
        intersects[0].object.parent === sneakerModel
      ) {
        sneakerModel.rotation.y += 0.02; // Rotation effect on hover
      }
    });

    container.addEventListener("click", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (
        sneakerModel &&
        intersects.length > 0 &&
        intersects[0].object.parent === sneakerModel
      ) {
        sneakerModel.rotation.y += Math.PI / 2; // Spin the sneaker on click
      }
    });

    const onScroll = (e) => {
      // This example assumes you want to move the camera along the Z-axis
      // You can adjust camera.position.x or camera.position.y for different effects
 console.log(camera);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', onScroll);

    const clock = new THREE.Clock();
    /*
    const materialX = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const materialY = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const materialZ = new THREE.LineBasicMaterial({ color: 0x0000ff });

    const pointsX = [];
    pointsX.push(new THREE.Vector3(-100, 0, 0));
    pointsX.push(new THREE.Vector3(100, 0, 0));

    const geometryX = new THREE.BufferGeometry().setFromPoints(pointsX);
    const lineX = new THREE.Line(geometryX, materialX);
    scene.add(lineX);

    const pointsY = [];
    pointsY.push(new THREE.Vector3(0, -100, 0));
    pointsY.push(new THREE.Vector3(0, 100, 0));

    const geometryY = new THREE.BufferGeometry().setFromPoints(pointsY);
    const lineY = new THREE.Line(geometryY, materialY);
    scene.add(lineY);

    const pointsZ = [];
    pointsZ.push(new THREE.Vector3(0, 0, -100));
    pointsZ.push(new THREE.Vector3(0, 0, 100));

    const geometryZ = new THREE.BufferGeometry().setFromPoints(pointsZ);
    const lineZ = new THREE.Line(geometryZ, materialZ);
    scene.add(lineZ);
*/
let particleSystem; // Define it in the outer scope so it's accessible everywhere

    function createParticles() {
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 1000; // Number of particles

      const posArray = new Float32Array(particlesCount * 3); // Multiply by 3 because each position is composed of 3 values (x, y, z)

      for (let i = 0; i < particlesCount * 3; i++) {
        // posArray[i] = Math.random() - 0.5; // Random values from -0.5 to 0.5 for x, y, z
        // You can also use a distribution that makes more sense for your scene's size
        posArray[i] = (Math.random() - 0.5) * 5; // Spread the particles over a broader area
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        map: new THREE.TextureLoader().load(
          "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png"
        ),
        transparent: true,
        color: 0xffffff,
      });

       particleSystem = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );
      scene.add(particleSystem); // Add particles to the scene
    }

    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.render(scene, camera); // Render the scene again after resizing
    };

    // Event listener for window resize to adjust camera and renderer
    window.addEventListener("resize", onWindowResize);

    // Call the resize function initially to set up the correct sizing
    onWindowResize();


    function animate() {
      requestAnimationFrame(animate);
if(sneakerModel){
        sneakerModel.rotateX(0.0005);
sneakerModel.rotateY(0.0005);
sneakerModel.rotateZ(0.005);
}
  if (particleSystem) {
    particleSystem.rotation.y += 0.001; // Rotate the whole system slightly

    // For a gentle floating effect, consider adding a subtle vertical sine wave movement to the particles
    particleSystem.geometry.attributes.position.array.forEach(
      (value, index) => {
        if ((index + 1) % 3 === 0) {
          // Only affect the y (vertical) component
          const y = value;
          const newY = y + Math.sin(clock.getElapsedTime()) * 0.001;
          particleSystem.geometry.attributes.position.setY(index / 3, newY);
        }
      }
    );
    particleSystem.geometry.attributes.position.needsUpdate = true;
  }

 
      controls.update();
      renderer.render(scene, camera);
    }

/*
container.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  if (sneakerModel) {
    const intersects = raycaster.intersectObjects(sneakerModel.children, true);
    
    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      
      // Assuming each part of the shoe has a name assigned in your 3D model
      const popupContent = getPopupContentForPart(intersectedObject.name);
      
      // Update your state or logic to show the popup here
      setHoverInfo({
        show: true,
        info: popupContent,
        x: event.clientX,
        y: event.clientY
      });
    } else {
      setHoverInfo({ show: false, info: null, x: 0, y: 0 });
    }
  }
});

*/


    animate();

    const loader = new GLTFLoader();
    loader.load(
      "models/mode.glb",
      (gltf) => {
        scene.add(gltf.scene);
        sneakerModel = gltf.scene;

        // The rest of your transformations...
        sneakerModel.scale.set(12, 12, 12);
        sneakerModel.rotateY(-14);
        sneakerModel.rotateX(0.5);
        sneakerModel.position.x += 0.4;
        sneakerModel.position.y -= 1.7;
        sneakerModel.rotateZ(1);
        sneakerModel.receiveShadow = true;
        sneakerModel.add(directionalLight);
        createParticles();
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    // Render the scene initially
    renderer.render(scene, camera);
    let animationFrameId = requestAnimationFrame(animate);







 
    // Clean up the event listener on component unmount
    return () => {
      renderer.dispose();
    };
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

    {hoverInfo.show && (
      <div
        className="info-bubble"
        style={{ position: 'absolute', left: hoverInfo.x, top: hoverInfo.y }}
      >
        <h4>{hoverInfo.info.title}</h4>
        <p>{hoverInfo.info.description}</p>
      </div>
    )}

      <div
        className="welcome-image-section linear-gradient"
        ref={containerRect}
      ></div>
    </div>
  );
}

export default WelcomSection;
