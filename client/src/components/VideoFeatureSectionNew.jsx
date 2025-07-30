import React, { useRef, useState } from 'react';
import { VscMute, VscUnmute } from "react-icons/vsc";

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
                src="/assets/water-pol.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
              />
            </div>
            <img
              src="/assets/iphone-16-mockup.webp"
              alt="iPhone Frame"
              className="frame-img"
            />
            <button
              className="mute-button !bg-transparent"
              onClick={toggleMute}
            >
              {isMuted ? (
                <VscMute className="w-[20px] h-[20px]" />
              ) : (
                <VscUnmute className="w-[20px] h-[20px]" />
              )}
            </button>
          </div>
        </div>

        {/* Right: Text */}
        <div className="videosw-column text-columns">
          <h2 className="section-heading-videos">
            FSSAI CLASSIFIES PACKAGED DRINKING WATER & MINERAL WATER AS{" "}
            <span className="text-cols">HIGH-RISK FOOD ITEMS</span>
          </h2>
          <p className="videosw-description">
            Due to rising concerns over quality and consumer safety, FSSAI has placed packaged drinking and mineral water under the high-risk food category. Manufacturers will now be required to undergo mandatory annual audits by FSSAI-approved food safety agencies.
          </p>
          <p className="sndfgbdsjs">Source: NDTV Profit</p>

          <a
            href="https://www.ndtvprofit.com/business/packaged-drinking-water-mineral-water-in-high-risk-food-category-fssai"
            className="curved-button mt-1 w-[171px] h-[53px] cursor-pointer bg-cover text-white"
            target="_blank"
            style={{ backgroundImage: `url(/assets/images/r-button.png)` }}
          >
            Read full article
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoFeatureSectionNew;
