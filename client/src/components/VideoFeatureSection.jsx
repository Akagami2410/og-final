import React, { useRef, useState } from 'react';
import demoVideo from '../assets/video-og.mp4'; // replace with your video path
import iphoneFrame from '../assets/iphone-16-mockup.webp'; // replace with your iPhone frame image

const VideoFeatureSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="videosw-feature-section" id="#next-section">
      <div className="videosw-columns">
        {/* Left: iPhone frame with embedded video */}
        <div className="videosw-column video-wrapper">
          <div className="iphone-frame">
            <div className="iphone-screen">
              <video
                className="frame-video"
                ref={videoRef}
                src={demoVideo}
                autoPlay
                muted={isMuted}
                loop
                playsInline
              />
            </div>

            <button className="mute-button" onClick={toggleMute}>
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <img src={iphoneFrame} alt="iPhone Frame" className="frame-img" />
          </div>
        </div>

        {/* Right: Text */}
        <div className="videosw-column text-column">
          <h2 className="section-heading-video">
            This is the <span className="text-col">world of OG</span>.
          </h2>
          <p className="videosw-description">
            Every bottle connects you to more <span className="boldk">exclusive offers, real-time updates,</span> and <span className="boldk">access to perks</span> you did not expect from water. Scan the code to unlock it all, from discounts to bottle verification. With OG wtr you are not just staying hydrated, you are staying ahead.
          </p>
          <p className="sndfgbdsj">It started with a simple thought</p>
          <p className="videosw-description">
            Despite being a daily essential, it lacked character, trust, and innovation. That’s where OG WTR began. We set out to create water that looks good, serves a purpose and speaks to today’s consumer without compromising on purity and quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoFeatureSection;
