import React, { useEffect } from 'react';
import Lottie from 'lottie-web';

function Landing() {
  const animationOptions = {
    path: 'https://assets.lottiefiles.com/data.json',
    renderer: 'svg',
    loop: true,
    autoplay: false
  };

  useEffect(() => {
    const animationContainer = document.getElementById('animation-container');
    const animation = bodymovin.loadAnimation(animationOptions);

    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const containerPosition = animationContainer.getBoundingClientRect().top;

      if (scrollPosition > containerPosition) {
        animation.play();
      }
    });
  }, []);

  return (
    <div id="animation-container">
      <Lottie
        options={animationOptions}
        height={500}
        width={500}
      />
    </div>
  );
}

export default Landing;