import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
// import lottie from 'lottie-web';
import Grid from "@mui/material/Grid";
import Typical from "react-typical";

import developerSkills from "./mobileAnim.json";
import { Box } from "@mui/system";
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
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Landing = () => {
  // const lottieRef = useRef(null);

  useEffect(() => {
    // Get a reference to the image element
    var image = document.querySelector(".my-image");
    var image2 = document.querySelector(".my-image2");

    // Add an event listener for the 'scroll' event
    window.addEventListener("scroll", function () {
      // Get the number of pixels the user has scrolled
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      scrollTop = scrollTop / 2;

      // Update the image's position
      image.style.left = scrollTop + "px";
      image2.style.right = scrollTop + "px";
    });

    return () => {};
  }, []);

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
        className="landing-responsive"
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
          md={2}
          lg={2}
          xl={2}
          style={{ padding: 0 }}
        />

        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
        >
          {/* <div style={{width:"clamp(100px, 80vw,  800px)"}} ref={developerSkills} /> */}
          <div
            className="d-flex justify-content-center"
            style={{ textAlign: "center", zIndex: 9 }}
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
                width: "auto",
                minWidth: 450,
                zIndex: 9,
              }}
              loop={false}
              animationData={developerSkills}
            />
          </div>
        </Grid>
        <Grid
        
          container
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
        >
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

          <Grid         item xs={12} sm={12} md={12} lg={12} xl={12}>

            <Typical
              className="textPresentation"
              steps={[
                "Welcome",
                1500,
                "Hi! my name is Michael Santana",
                2000,
                "I am a developer",
                3000,
              ]}
              loop={Infinity}
              wrapper="h2"
            />
          </Grid>
          <Grid        item xs={12} sm={12} md={12} lg={12} xl={12}>
            {" "}
            <p

              style={{
     
                fontSize: 20,
                textAlign: "left",
                 margin: 'clamp(10px, 80vw,  30px)',

            
              }}
            >
              Hola, soy un desarrollador de software con buenos conocimientos en
              javascript/nodejs, react, mongodb, c# wpf, uwp, kotlin, ktor y
              más. Me apasiona crear soluciones de software de alta calidad y
              estoy dispuesto a ayudar con aplicaciones personalizadas, sitios
              web y sistemas de integración. Mantengo mis habilidades
              actualizadas para ofrecer trabajo de buena calidad.
            </p>

          </Grid>
          <div
              style={{
                zIndex: -1,
                right: 0,
              }}
              className="circle-gradient my-image2"
            />
          
        </Grid>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          xl={2}
        />
      </Grid>
    </>
  );
};

export default Landing;
