// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import image1 from '../../assets/images/image-1.png';
// import image2 from '../../assets/images/image-2.png';
// import image3 from '../../assets/images/image-3.png';

// export default function ImageSlider() {
//   const wrapperRef = useRef(null); 

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;

//     const totalWidth = wrapper.scrollWidth / 2;

//     const tween = gsap.to(wrapper, {
//       x: -totalWidth,
//       duration: 20,
//       ease: 'linear',
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
//       },
//     });

//     wrapper.addEventListener('mouseenter', () => gsap.to(wrapper, { timeScale: 0 }));
//     wrapper.addEventListener('mouseleave', () => gsap.to(wrapper, { timeScale: 1 }));

//     return () => tween.kill();
//   }, []);

//   const slides = [
//     {
//       img: image1,
//       wrapperClass: 'w-1/3 border border-red-400',
//       imgClass: 'w-full h-auto max-w-[138px]',
//     },
//     {
//       img: image2,
//       wrapperClass: 'w-1/3 border border-red-400 flex items-end',
//       imgClass: 'w-full h-auto max-w-[245px]',
//     },
//     {
//       img: image3,
//       wrapperClass: 'w-1/3 border border-red-400 pb-6',
//       imgClass: 'w-full h-auto max-w-[306px]',
//     },
//   ];

//   const allSlides = [...slides, ...slides];

//   return (
//     <section className="image-slider pt-28 overflow-hidden">
//     <div className='slider-containers'>

    
//       <div className="slider-container w-full overflow-hidden">
//         {/* ✅ THIS IS LINE 56 */}
//         <div ref={wrapperRef} className="slider-wrapper flex w-max">
//           {allSlides.map((slide, index) => (
//             <div key={index} className={`slider-item shrink-0 ${slide.wrapperClass}`}>
//               <img src={slide.img} alt={`Slider Image ${index + 1}`} className={slide.imgClass} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="slider-container w-full overflow-hidden">
//         {/* ✅ THIS IS LINE 56 */}
//         <div ref={wrapperRef} className="slider-wrapper flex w-max">
//           {allSlides.map((slide, index) => (
//             <div key={index} className={`slider-item shrink-0 ${slide.wrapperClass}`}>
//               <img src={slide.img} alt={`Slider Image ${index + 1}`} className={slide.imgClass} />
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }


import image1 from '../../assets/images/image-1.png';
import image2 from '../../assets/images/image-2.png';
import image3 from '../../assets/images/image-3.png';
import image4 from '../../assets/images/image-4.png';
import image5 from '../../assets/images/image-5.png';
import image6 from '../../assets/images/image-6.png';
import image7 from '../../assets/images/image-7.png';
import image8 from '../../assets/images/image-8.png';
import image9 from '../../assets/images/image-9.png';


export default function ImageSlider() {

  

  return (
    <section className="image-slider pt-28">
      <div className="slider-containers">
        <div className="slider-container">
          <div  className="slider-wrapper flex">
            <div className="slider-item w-1/3 border border-red-400">
              <img className="w-[100%] h-auto max-w-[138px]" src={image1} alt="Slider Image 1" />
            </div>
            <div className="slider-item w-1/3 border border-red-400 flex items-end">
              <img className="w-[100%] h-auto max-w-[245px]" src={image2} alt="Slider Image 2" />
            </div>
            <div className="slider-item w-1/3 border border-red-400 pb-6">
              <img className="w-[100%] h-auto max-w-[306px]" src={image3} alt="Slider Image 3" />
            </div>

        
          </div>
        </div>
        <div className='slide-container' >
            <div className='slider-wrapper flex relative justify-center pt-20'>

                <div className='slider-item absolute -top-[50px] left-[70px]'>
                    <img src={image4} alt='Slider Image 4' className='w-full max-w-[234px]' />
                </div>
                <div className='slider-item '>
                    <h1 className=' text-[100px] leading-20' >
                        <span className='font-anton text-[var(--blue)]' >OG WATER</span>
                        <span className='font-parslay font-normal text-[var(--candypink)]' >stands</span><br></br>
                        <span className='font-parslay relative font-normal text-[var(--candypink)] z-10' >out</span>
                        <span className='font-anton text-[var(--blue)] ml-12' >IN THE CHAOS</span><br></br>
                        <span className='font-anton text-[var(--blue)]' >OF THE SHELF</span>
                    </h1>
                </div>
                <div className='slider-item absolute top-0 right-0'>
                    <img src={image5} alt='Slider Image 5' className='w-full max-w-[200px] h-[134px]' />
                </div>


            </div>

        </div>
        <div className='slide-container' >
            <div className='slider-wrapper flex pt-20'>

                <div className='slider-item w-1/4 border border-red-400 flex items-end'>
                    <img src={image6} alt='Slider Image 6' className='w-full max-w-[227px] h-[180px]' />
                </div>
                <div className='slider-item w-1/4 border border-red-400'>
                    <img src={image7} alt='Slider Image 7' className='w-full max-w-[239px] h-[204px]' />
                   
                </div> 
                <div className='slider-item w-1/4 border border-red-400'>
                    <img src={image8} alt='Slider Image 8' className='w-full max-w-[344px] h-[237px] transform-[translate(90px,-120px)]' />
                </div>
                <div className='slider-item w-1/4 border border-red-400 flex justify-end'>
                    <img src={image9} alt='Slider Image 8' className='w-auto h-[204px] transform-[translateY(50px)]' />
                </div>


            </div>

        </div>
      </div>
    </section>
  );
}

