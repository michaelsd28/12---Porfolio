import React from 'react'
import Lottie from 'react-lottie-player'
import Page404Anim from './pageNotFound.json'

function Page404() {
  return (
    <>
      <div style={{display:"flex",alignItems:"center",alignContent:'center',justifyContent:"center",margin:"10vw", height:"60vh"}}>
        <Lottie   play loop   animationData={Page404Anim}></Lottie>
      </div>
    </>
  )
}

export default Page404
