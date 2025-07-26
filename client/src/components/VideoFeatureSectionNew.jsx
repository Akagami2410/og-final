import React, { useRef, useState } from 'react';
import { VscMute, VscUnmute } from "react-icons/vsc";

import demoVideo from "../assets/water-pol.mp4"; // replace with your video path
import iphoneFrame from "../assets/iphone-16-mockup.webp"; // replace with your iPhone frame image
import button from "../assets/images/r-button.png";

const VideoFeatureSectionNew = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="videosw-feature-sectionas">
      <div className="videosws-columns">
        {/* Left: iPhone frame with embedded video */}
        <div className="videosw-column video-wrappers">
          <div className="iphone-frame" style={{ position: "relative" }}>
            <div className="iphone-screen">
              <video
                className="frame-video rounded-[44px]"
                ref={videoRef}
                src={demoVideo}
                autoPlay
                muted={isMuted}
                loop
                playsInline
              />
            </div>
            <img src={iphoneFrame} alt="iPhone Frame" className="frame-img" />
            <button
              className="mute-button !bg-transparent"
              onClick={toggleMute}
            >
              {isMuted ? (
                <VscUnmute className="w-[20px] h-[20px]" />
              ) : (
                <VscMute className="w-[20px] h-[20px]" />
              )}
            </button>
          </div>
        </div>

        {/* Right: Text */}
        <div className="videosw-column text-columns">
          <h2 className="section-heading-videos">
            FSSAI adds Mineral water under{" "}
            <span className="text-cols">high risk food category</span>
          </h2>
          <p className="videosw-description">
            Going forward, packaged drinking water and mineral water
            manufacturers will have their businesses audited by a #FSSAI
            recognised food safety auditing agency every year.
          </p>
          <p className="sndfgbdsjs">Source: NDTV Profit</p>

          <a
            href="https://www.ndtvprofit.com/business/packaged-drinking-water-mineral-water-in-high-risk-food-category-fssai"
            className="curved-button mt-1 w-[171px] h-[53px] cursor-pointer bg-cover text-white"
            target="_blank"
            style={{ backgroundImage: `url(${button})` }}
          >
            Read full article
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoFeatureSectionNew;
