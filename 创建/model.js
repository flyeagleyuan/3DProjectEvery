/*
 * @Author: flyeageleyuan flyeageleyuan@163.com
 * @Date: 2025-02-04 23:30:44
 * @LastEditors: flyeageleyuan flyeageleyuan@163.com
 * @LastEditTime: 2025-02-08 01:25:04
 * @FilePath: \three.js\演示\创建\model.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */

import * as Three from 'three'

const geometry = new Three.BoxGeometry(100, 100, 100)
const material = new Three.MeshLambertMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.5
})
// const material = new Three.MeshBasicMaterial({
//   color: 0x00ff00
// })

const mesh = new Three.Mesh(geometry, material)

export default mesh