import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeTest = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "canvasContent"
    ) as HTMLCanvasElement;
    const canvasContainer = canvas.parentElement;

    if (!canvasContainer) {
      console.error("Canvas container not found");
      return;
    }

    const sizes = {
      width: canvasContainer.clientWidth,
      height: 900,
    };

    // ウィンドウリサイズ処理
    const windowResize = () => {
      sizes.width = canvasContainer.clientWidth;
      sizes.height = 900; // 高さを500pxに設定
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };
    window.addEventListener("resize", windowResize);

    // シーン
    const scene = new THREE.Scene();

    // カメラ
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height); //サイズの設定:　画面いっぱいに設定
    renderer.setPixelRatio(window.devicePixelRatio); //ピクセル比の設定

    //読み込み
    const geometry = new THREE.PlaneGeometry(2, 1);
    const material = new THREE.MeshStandardMaterial({
      color: "gray",
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI * 0.4;
    scene.add(plane);

    //ライト
    const Light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(Light);

    const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.7);
    scene.add(directionalLight);

    //コントローラー
    const controller = new OrbitControls(camera, renderer.domElement);

    //アニメーション
    const animation = () => {
      controller.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animation);
    };
    animation();

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <>
      <canvas className="w-full  " id="canvasContent"></canvas>
    </>
  );
};

export default ThreeTest;
