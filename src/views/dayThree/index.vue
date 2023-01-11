<template>
    <div ref="domRef"></div>
</template>
<script setup lang="ts">
// 添加坐标辅助
import { ref, onMounted } from 'vue'
// 使用控制器查看3d物体
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const domRef = ref<HTMLElement>()
// 创建场景
const scene = new THREE.Scene()
// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// 设置相机位置
camera.position.set(0, 0, 10)
// 相机添加到场景中
scene.add(camera)
// 添加物体
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry()
// 材质
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// 将物体添加到场景中
scene.add(cube)
// 坐标辅助
const axesHelper = new THREE.AxesHelper(9)
scene.add(axesHelper)
// 渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染器大小
renderer.setSize(window.innerWidth, window.innerHeight)
// 创建控制器
const controls = new OrbitControls(camera, renderer.domElement)
controls.update()
onMounted(() => {
    domRef.value?.appendChild(renderer.domElement)
    animate()
})
function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
}
</script>
