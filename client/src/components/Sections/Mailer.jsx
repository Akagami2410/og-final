import { useContext,useEffect } from "react";
import OverlayContext from "../../context/OverlayContext";

export default function Mailer() {
  const { overlayVisible, setOverlayVisible } = useContext(OverlayContext);
  const handleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  useEffect(() => {
    let timeoutId;
    if (overlayVisible) {
      document.body.style.overflow = "hidden";
    } else {
      // Delay removing overflow to match the transition duration
      timeoutId = setTimeout(() => {
        document.body.style.overflow = "";
      }, 300); // match your duration-300 (300ms)
    }

    return () => clearTimeout(timeoutId);
  }, [overlayVisible]);

  return (
    <section className="mailer bg-gradient-to-b from-[#FFFFFF] to-[#E4FBFF]">
      <div className="flex flex-col pr-0 md:flex-row pt-20 justify-center md:pl-10">
        <div className="left pr-[38px] pl-[38px] w-full flex flex-col justify-start items-center md:w-1/2 md:pr-0 md:pl-0 md:items-start">
          <div className="left-1 hidden md:contents">
            <h2 className="text-xl lg:text-2xl text-(--candypink) font-absolute">
              Your Brand, In Every Hand
            </h2>
            <h1 className="text-[40px] text-(--blue) font-absolute lg:text-6xl uppercase">
              OG WTR turns every bottle into a high-impact ad.
            </h1>
            <p className="font-satoshi text-[16px] lg:text-[18px]">
              Reach your audience where it matters—stores, offices, gyms,
              campuses, events.
            </p>
            <div className="flex flex-col gap-3 mt-5 md:mt-[20px]">
              <p className="text-[16px] lg:text-[18px] text-[#9C9C9C]">
                WHY IT WORKS?{" "}
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <span className="ok w-[24px] min-w-[24px] h-[24px] bg-[var(--green)] rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                    >
                      <path
                        d="M2.01475 4.0032L4.92034 6.90878L11.5527 0.27645L13.195 1.91876L4.92034 10.1934L0.372437 5.64551L2.01475 4.0032Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="item text-[16px] lg:text-[18px] font-satoshi-medium">
                    Reach millions in minutes
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="ok w-[24px] min-w-[24px] h-[24px] bg-[var(--green)] rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                    >
                      <path
                        d="M2.01475 4.0032L4.92034 6.90878L11.5527 0.27645L13.195 1.91876L4.92034 10.1934L0.372437 5.64551L2.01475 4.0032Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="item text-[16px] lg:text-[18px] font-satoshi-medium">
                    Target by channel: general trade, modern trade, corporate &
                    more
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="ok w-[24px] min-w-[24px] h-[24px] bg-[var(--green)] rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                    >
                      <path
                        d="M2.01475 4.0032L4.92034 6.90878L11.5527 0.27645L13.195 1.91876L4.92034 10.1934L0.372437 5.64551L2.01475 4.0032Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="item text-[16px] lg:text-[18px] font-satoshi-medium">
                    Trackable & measurable performance
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="ok w-[24px] min-w-[24px] h-[24px] bg-[var(--green)] rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                    >
                      <path
                        d="M2.01475 4.0032L4.92034 6.90878L11.5527 0.27645L13.195 1.91876L4.92034 10.1934L0.372437 5.64551L2.01475 4.0032Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="item text-[16px] lg:text-[18px] font-satoshi-medium">
                    Unskippable, memorable, and right in their hand
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="contents md:hidden">
            <p className="text-lg text-center font-bold text-(--candypink) font-absolute">
              Your Brand, In Every Hand
            </p>
            <h1 className="text-5xl text-center uppercase">
              <span className="text-[var(--blue)] font-absolute">
                OG WTR turns every bottle into a high-impact ad.
              </span>
            </h1>
            <p className="text-lg text-center font-satoshi-light mt-[20px] mb-[20px]">
              Reach your audience where it matters—stores, offices, gyms,
              campuses, events.
            </p>
            <ul className="grid grid-cols-1 w-full justify-items-left max-w-[400px] gap-y-6">
              <li className="flex items-center gap-3">
                <span className="ok w-[24px] min-w-[24px] h-[24px] bg-[var(--green)] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                  >
                    <path
                      d="M2.01475 4.0032L4.92034 6.90878L11.5527 0.27645L13.195 1.91876L4.92034 10.1934L0.372437 5.64551L2.01475 4.0032Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="item text-[16px] lg:text-[18px] font-satoshi-medium">
                  Reach millions in minutes
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="ok w-[24px] min-w-[24px] h-[24px] bg-[var(--green)] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                  >
                    <path
                      d="M2.01475 4.0032L4.92034 6.90878L11.5527 0.27645L13.195 1.91876L4.92034 10.1934L0.372437 5.64551L2.01475 4.0032Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="item text-[16px] lg:text-[18px] font-satoshi-medium">
                  Target by channel: general trade, modern trade, corporate &
                  more
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="ok w-[24px] min-w-[24px] h-[24px] bg-[var(--green)] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                  >
                    <path
                      d="M2.01475 4.0032L4.92034 6.90878L11.5527 0.27645L13.195 1.91876L4.92034 10.1934L0.372437 5.64551L2.01475 4.0032Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="item text-[16px] lg:text-[18px] font-satoshi-medium">
                  Trackable & measurable performance
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="ok w-[24px] min-w-[24px] h-[24px] bg-[var(--green)] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                  >
                    <path
                      d="M2.01475 4.0032L4.92034 6.90878L11.5527 0.27645L13.195 1.91876L4.92034 10.1934L0.372437 5.64551L2.01475 4.0032Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="item text-[16px] lg:text-[18px] font-satoshi-medium">
                  Unskippable, memorable, and right in their hand
                </span>
              </li>
            </ul>
          </div>
          <button
            className="mt-9 w-[228px] h-[60px] cursor-pointer bg-cover text-white"
            style={{ backgroundImage: `url(/assets/images/button.png)` }}
            onClick={handleOverlay}
          >
            Collaborate with OG!
          </button>
        </div>
        <div className="right w-full md:w-1/2 lg:max-w-[495px]">
          <img src="/assets/images/Bottle.png" />
        </div>
      </div>
    </section>
  );
}
