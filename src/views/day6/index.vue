<template>
    <div ref="domRef"></div>
</template>
<script setup lang="ts">
// 通过Clock跟踪时间处理
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const domRef = ref<HTMLElement>()
// 创建场景
const scene = new THREE.Scene()
// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// 设置相机位置
camera.position.set(0, 0, 10)
// 创建物体
const cubeGeometry = new THREE.BoxGeometry()
const cubeMaterial = new THREE.MeshBasicMaterial()
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cube)
// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
// 控制器
const controls = new OrbitControls(camera, renderer.domElement)
controls.update()
// 坐标辅助
const axesHelper = new THREE.AxesHelper(9)
scene.add(axesHelper)

// 时钟
const clock = new THREE.Clock()
function animate() {
    // const diffTime = clock.getDelta()
    // 开始运行的总时长
    let time = clock.getElapsedTime()
    // console.log('总时间', time)
    // console.log('间隔时间', diffTime)
    renderer.render(scene, camera)
    cube.position.x = time % 5
    // 缩放
    cube.scale.set(1, 2, 3)
    // 旋转
    // cube.rotation.set(1, 1, 1)
    cube.rotation.x += 0.01
    requestAnimationFrame(animate)
}
onMounted(() => {
    domRef.value?.appendChild(renderer.domElement)
    animate()
})
</script>
