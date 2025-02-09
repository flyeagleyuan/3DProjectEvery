/*
 * @Author: flyeageleyuan flyeageleyuan@163.com
 * @Date: 2024-12-01 09:21:48
 * @LastEditors: flyeageleyuan flyeageleyuan@163.com
 * @LastEditTime: 2025-02-08 11:38:31
 * @FilePath: \three.js\演示\创建\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import * as Three from 'three'
import {OrbitControls} from 'three/addons'
import model from './model.js'


const scene = new Three.Scene()
scene.add(model)

const axesHelper = new Three.AxesHelper(100)
scene.add(axesHelper)

const pointLight = new Three.PointLight(0xffffff, 1.0)
pointLight.decay=0.0
pointLight.position.set(400,200, 100)   

scene.add(pointLight)

// const directLight = new Three.DirectionalLight(0xffffff, 1.0)
// pointLight.decay=0.0
// pointLight.position.set(400,200, 100)   

// scene.add(pointLight)

const sphereSize = 1;
const pointLightHelper = new Three.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );

// const gui = 

const width = 800
const height= 500

const camera = new Three.PerspectiveCamera(30,width/height,0.1,3000)


camera.position.set(200,200,200)

camera.lookAt(0, 0, 0)

const renderer = new Three.WebGLRenderer()

renderer.setSize(width, height)
renderer.render(scene, camera)
 
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', function(){
  renderer.render(scene, camera)
})

function render() { 
  model.rotateY(0.01)
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()

// console.log(mesh)
