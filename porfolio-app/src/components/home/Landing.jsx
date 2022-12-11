import React, { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'
// import lottie from 'lottie-web';
import Grid from '@mui/material/Grid'
import Typical from 'react-typical';

import developerSkills from './developerSkills.json'
// import developerSkills from "../../../public/assets/animation/developerSkills.json"

{
  /* <img
style={{ width: 35, margin: '-10px 10px 0 0' }}
className="img-fluid"
src={`${process.env.PUBLIC_URL}/assets/home/pageIcon.png`}
alt="logo"
/> */
}

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: developerSkills,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const Landing = () => {

  // const lottieRef = useRef(null);

  // useEffect(() => {

  //     var animDuration = 2000;
  //     const anim = lottie.loadAnimation({
  //         container: lottieRef.current,
  //         renderer: "svg",
  //         loop: false,
  //         autoplay: false,
  //         animationData:developerSkills

  //       });

  //   function animatebodymovin(duration) {
  //     const scrollPosition = window.scrollY;
  //     const maxFrames = anim.totalFrames;

  //     const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

  //     anim.goToAndStop(frame, true);
  //   }
  //   const onScroll = () => {
  //     console.log("Scrolling");
  //     animatebodymovin(animDuration);
  //   };

  //   document.addEventListener("scroll", onScroll);

  //   return () => {
  //     anim.destroy();
  //     document.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        className="d-flex align-items-center"
        justifyContent="center"
        alignItems="center"
style={{height:"102vh"}}
        spacing={{ xs: 10, md: 10 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid   container
  direction="row"
  justifyContent="center"
  alignItems="center"  style={{ fontFamily: 'sans-serif' }}  item xs={6}>
          {/* <div style={{width:"clamp(100px, 80vw,  800px)"}} ref={developerSkills} /> */}
          <div className='d-flex justify-content-center' style={{ width: "clamp(150px, 80vw,  800px)",textAlign:"center"}}>

            <Lottie style={{width: "clamp(150px, 80vw,  800px)"}}  animationData={developerSkills} />
          </div>
        </Grid>
        <Grid style={{zIndex:10}} item xs={6}>
     
          <Typical
   
      className="textPresentation"
      steps={['Welcome', 1500,'Hi! my name is Michael Santana', 2000,'I am a developer', 3000,]}
      loop={Infinity}
      wrapper="h1"
    />
    <p style={{fontSize:18,textAlign:"left",margin:"clamp(10px, 80vw,  30px)"}}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.


    </p>
        </Grid>
      </Grid>
      <br style={{margin:40}}/>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <ul className="d-flex flex-column ">
          {[...Array(100)].map((e, i) => (
            <span className="busterCards" key={i}>
              ☺ {i}
            </span>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Landing
