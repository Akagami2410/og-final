import { useContext } from "react";
import ZoomContext from "../../context/ZoomContext.jsx";

import image1 from '../../assets/images/image-1.png';
import image2 from '../../assets/images/image-2.png';
import image3 from '../../assets/images/image-3.png';
import image4 from '../../assets/images/image-4.png';
import image5 from '../../assets/images/image-5.png';
import image6 from '../../assets/images/image-6.png';
import image7 from '../../assets/images/image-7.png';
import image8 from '../../assets/images/image-8.png';
import image9 from '../../assets/images/image-9.png';

import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';

export default function ImageSlider() {
  const { zoomedImage,setZoomedImage } = useContext(ZoomContext);
  const wrapperRef1 = useRef(null);
  const wrapperRef2 = useRef(null);
  const wrapperRef3 = useRef(null);

  const tween1 = useRef(null);
  const tween2 = useRef(null);
  const tween3 = useRef(null);

   useEffect(() => {
    const setupTrack = (ref, tweenRef) => {
      const el = ref.current;
      if (!el) return;

      const totalWidth = el.scrollWidth / 2;

      tweenRef.current = gsap.to(el, {
        x: `-=${totalWidth}`,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
        }
      });
    };

    setupTrack(wrapperRef1, tween1);
    setupTrack(wrapperRef2, tween2);
    setupTrack(wrapperRef3, tween3);

    let isHovering = false;

    const pauseAll = () => {
      tween1.current?.pause();
      tween2.current?.pause();
      tween3.current?.pause();
    };

    const resumeAll = () => {
      // Only resume if not zooming and not hovering
      if (!zoomedImage && !isHovering) {
        tween1.current?.resume();
        tween2.current?.resume();
        tween3.current?.resume();
      }
    };

    const onEnter = () => {
      isHovering = true;
      pauseAll();
    };

    const onLeave = () => {
      isHovering = false;
      resumeAll();
    };

    const allImages = [
      ...(wrapperRef1.current?.querySelectorAll("img") || []),
      ...(wrapperRef2.current?.querySelectorAll("img") || []),
      ...(wrapperRef3.current?.querySelectorAll("img") || [])
    ];

    allImages.forEach((img) => {
      img.addEventListener("mouseenter", onEnter);
      img.addEventListener("mouseleave", onLeave);
    });

    // Initial pause if already zoomed
    if (zoomedImage) pauseAll();

    return () => {
      tween1.current?.kill();
      tween2.current?.kill();
      tween3.current?.kill();

      allImages.forEach((img) => {
        img.removeEventListener("mouseenter", onEnter);
        img.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [zoomedImage]);



  const renderSliderGroup1 = (setZoomedImage) => (
  <div className="slider-wrapper flex min-w-[700px] gap-[60px] lg:gap-0">
    <div className="slider-item w-[220px] lg:w-1/3">
      <img
        className="w-full h-auto max-w-[138px] cursor-pointer max-lg:object-cover"
        src={image1}
        alt="Slider Image 1"
        onClick={() => setZoomedImage(image1)}
      />
    </div>
    <div className="slider-item w-[260px] lg:w-1/3 flex items-end">
      <img
        className="w-full h-auto max-w-[245px] cursor-pointer max-lg:object-cover"
        src={image2}
        alt="Slider Image 2"
        onClick={() => setZoomedImage(image2)}
      />
    </div>
    <div className="slider-item w-[300px] lg:w-1/3 pb-6">
      <img
        className="w-full h-auto max-w-[306px] cursor-pointer max-lg:object-cover max-lg:max-w-[250px]"
        src={image3}
        alt="Slider Image 3"
        onClick={() => setZoomedImage(image3)}
      />
    </div>
  </div>
);


  const renderSliderGroup2 = (setZoomedImage) => (
  <div className="relative w-full min-w-[1px] h-[250px] mt-16 max-lg:hidden">
    <div className="slider-wrapper flex justify-center pt-20 relative w-full h-full">
      <div className="slider-item absolute -top-[50px] left-[30px] md:left-[70px] w-[200px] lg:w-auto">
        <img
          src={image4}
          alt="Slider Image 4"
          className="w-full max-w-[234px] cursor-pointer max-lg:object-cover"
          onClick={() => setZoomedImage(image4)}
        />
      </div>
      <div className="slider-item absolute top-0 right-[20px] md:right-0 w-[180px] lg:w-auto">
        <img
          src={image5}
          alt="Slider Image 5"
          className="w-full max-w-[200px] h-[134px] cursor-pointer max-lg:object-cover"
          onClick={() => setZoomedImage(image5)}
        />
      </div>
    </div>
  </div>
);


  const renderSliderGroup3 = (setZoomedImage) => (
  <div className="slider-wrapper flex pt-20 gap-[100px] md:gap-[60px] lg:gap-0  z-50">
    <div className="slider-item min-w-[120px] lg:w-1/4 flex items-end">
      <img
        src={image6}
        alt="Slider Image 6"
        className="w-full max-w-[227px] h-[180px] cursor-pointer max-lg:object-cover"
        onClick={() => setZoomedImage(image6)}
      />
    </div>
    <div className="slider-item min-w-[200px] lg:w-1/4">
      <img
        src={image7}
        alt="Slider Image 7"
        className="w-full max-w-[239px] h-[204px] cursor-pointer max-lg:object-cover"
        onClick={() => setZoomedImage(image7)}
      />
    </div>
    <div className="slider-item min-w-[250px] lg:w-1/4">
      <img
        src={image8}
        alt="Slider Image 8"
        className="w-full max-w-[344px] h-[237px] translate-x-[40px] -translate-y-[60px] cursor-pointer max-lg:object-cover max-lg:max-w-[250px] max-lg:-translate-y-[70px] z-50 relative"
        onClick={() => setZoomedImage(image8)}
      />
    </div>
    <div className="slider-item min-w-[180px] lg:w-1/4 flex justify-end">
      <img
        src={image9}
        alt="Slider Image 9"
        className="w-auto h-[204px] translate-y-[50px] cursor-pointer max-lg:object-cover"
        onClick={() => setZoomedImage(image9)}
      />
    </div>
  </div>
);


  return (
    <section className="image-slider pt-28 relative overflow-hidden w-full">
      <div className="slider-containers">

        {/* FIRST WRAPPER (Scrolling) */}
        <div className="slider-container overflow-hidden">
          <div ref={wrapperRef1} className="flex w-full ">
            {[...Array(2)].map((_, i) => (
              <div className='w-full min-w-[max-content] flex-none basis-full px-8' key={i}>{renderSliderGroup1(setZoomedImage)}</div>
            ))}
          </div>
        </div>

        {/* MIDDLE WRAPPER (Floating Images Left & Right) */}
        <div className="middle overflow-hidden max-lg:pt-10">
          <div ref={wrapperRef2} className="flex w-full relative ">
            {[...Array(2)].map((_, i) => (
              <div className='w-full flex-none basis-full px-8' key={i}>{renderSliderGroup2(setZoomedImage)}</div>
            ))}
          </div>

          {/* TEXT IN MIDDLE (STATIC) */}
          <div className="Text-content w-[max-content] mx-auto">
            <h1 className="text-[40px] xs:text-[50px] leading-10 lg:text-[100px] lg:leading-20 !important text-center leading- ">
              <span className="font-absolute text-[var(--blue)]">OG WATER</span>
              <span className="font-parslay font-normal text-[var(--candypink)]">stands</span><br />
              <span className="font-parslay relative font-normal text-[var(--candypink)] z-10">out</span>
              <span className="font-absolute text-[var(--blue)] ml-12">IN THE CHAOS</span><br />
              <span className="font-absolute text-[var(--blue)]">OF THE SHELF.</span>
            </h1>
          </div>
        </div>

        {/* THIRD WRAPPER (Scrolling) */}
        <div className="slide-container overflow-hidden -translate-y-[30px] max-lg:-translate-y-[20px] z-50">
          <div ref={wrapperRef3} className="flex w-full">
            {[...Array(2)].map((_, i) => (
              <div className='w-full min-w-[max-content] flex-none basis-full px-8' key={i}>{renderSliderGroup3(setZoomedImage)}</div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


