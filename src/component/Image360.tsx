import React, { useEffect, useState } from 'react'
import * as PANOLENS from '../../node_modules/panolens/build/panolens'
import image from '../assets/pano.jpg'
function Image360() {
  const [panorama, setPanorama] = useState()
  const [viewer, setViewer] = useState()
  useEffect(() => {
    const panorama = new PANOLENS.ImagePanorama(image)
    const viewer = new PANOLENS.Viewer({
      container: document.querySelector('#coucou'),
      output: 'test'
    })

    viewer.add(panorama)
    console.log(viewer)
    setPanorama(panorama)
    setViewer(viewer)
  }, [setPanorama, setViewer])

  return (
    <>
      <div>HELLO</div>
      <div
        id='coucou'
        style={{
          width: '1500px',
          height: '800px'
        }}
      ></div>
    </>
  )
}

export default Image360
