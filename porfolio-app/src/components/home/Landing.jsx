import React, { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'
// import lottie from 'lottie-web';
import Grid from '@mui/material/Grid'
import Typical from 'react-typical'

import developerSkills from './developerSkills.json'
import { Box } from '@mui/system'
// import developerSkills from "../../../public/assets/animation/developerSkills.json"

/*   <img
style={{ width: 35, margin: '-10px 10px 0 0' }}
className="img-fluid"
src={`${process.env.PUBLIC_URL}/assets/home/nebulous.png`}
alt="logo"
/> */

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: developerSkills,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Landing = () => {
  // const lottieRef = useRef(null);

  useEffect(() => {
    // Get a reference to the image element
    var image = document.querySelector('.my-image')
    var image2 = document.querySelector('.my-image2')

    // Add an event listener for the 'scroll' event
    window.addEventListener('scroll', function () {
      // Get the number of pixels the user has scrolled
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop

      scrollTop = scrollTop / 2

      // Update the image's position
      image.style.left = scrollTop + 'px'
      image2.style.right = scrollTop + 'px'

      console.log('scroll:: ' + scrollTop)
    })

    return () => {}
  }, [])

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
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          {/* <div style={{width:"clamp(100px, 80vw,  800px)"}} ref={developerSkills} /> */}
          <div
            className="d-flex justify-content-center"
            style={{ textAlign: 'center', zIndex: 9 }}
          >
            {/* <img
              style={{
                opacity: 0.2,
                zIndex: -1,
                transform: 'rotate(180deg)',
                width: 'clamp(400px,50vw,800px)',
                position: 'absolute',
                margin: '-10px 10px 0 0',
              }}
              className="img-fluid my-image"
              src={`${process.env.PUBLIC_URL}/assets/home/nebulous.png`}
              alt="logo"
            /> */}

            <div
              style={{
                zIndex: -1,
                left: 0,
              }}
              className="circle-gradient my-image"
            />
            <Lottie
              style={{
                width: 'auto',
                zIndex: 9,
              }}
              animationData={developerSkills}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {/* <img
            style={{
              opacity: 0.2,
              zIndex: -1,
              transform: 'rotate(180deg)',
              width: 'clamp(400px,50vw,800px)',
              position: 'absolute',
            }}
            className="img-fluid my-image2"
            src={`${process.env.PUBLIC_URL}/assets/home/nebulous.png`}
            alt="logo"
          /> */}
          <div
            style={{
              zIndex: -1,
              right: 0,
            }}
            className="circle-gradient my-image2"
          />

          <div style={{ zIndex: 10 }}>
            <Typical
              className="textPresentation"
              steps={[
                'Welcome',
                1500,
                'Hi! my name is Michael Santana',
                2000,
                'I am a developer',
                3000,
              ]}
              loop={Infinity}
              wrapper="h1"
            />
          </div>
          <p
            style={{
              fontSize: 18,
              textAlign: 'left',
              margin: 'clamp(10px, 80vw,  30px)',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </Grid>
      </Grid>
    </>
  )
}

export default Landing
