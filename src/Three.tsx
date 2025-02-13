import { useEffect } from "react";
import * as THREE from "three";
import { AsciiEffect } from "three/examples/jsm/Addons.js";

const Three = () => {
  let lastTime = 0;
  const fps = 15;

  useEffect(() => {
    const canvasContainer = document.getElementById(
      "canvas-container"
    ) as HTMLDivElement;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // ASCIIエフェクト
    const effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: true });
    effect.setSize(window.innerWidth, window.innerHeight);
    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0";
    effect.domElement.style.left = "0";
    effect.domElement.style.zIndex = "0";
    effect.domElement.style.color = "red";

    canvasContainer.appendChild(effect.domElement);

    // Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };
    animate();

    // 操作
    function render() {
      const now = Date.now();
      if (now - lastTime >= 1000 / fps) {
        effect.render(scene, camera); // Render only with AsciiEffect
        cube.rotation.y += 0.1;
        cube.rotation.x += 0.1;
        cube.position.z = 1;
        lastTime = now;
      }
    }

    // ウィンドウリサイズ処理
    const windowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", windowResize);

    // 消す
    return () => {
      window.removeEventListener("resize", windowResize);
      canvasContainer.removeChild(effect.domElement); // Remove DOM element
    };
  }, []);

  return (
    <div
      id="canvas-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default Three;
