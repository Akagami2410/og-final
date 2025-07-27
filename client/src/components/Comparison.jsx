const Comparison = () => {
  return (
    <div>
      <section className="comparison-section" id="comparison">
        <div className="section-heading">
          How og water is <span className="text-col">different</span> <br />
          from other brands?
        </div>

        <div className="two-flex-box max-lg:!px-4 overflow-auto hide-scroll">
          {/* OG Water */}
          <div className="flex max-lg:flex-col  border-[4px] border-[#DEFFBD] rounded-[24px] bg-[#FAFFF6] pt-[34px] px-4 lg:px-[58px] pb-0 max-lg:pb-12 min-w-[173px] w-[576px]">
            <div className="imaage-container flex justify-center">
              <img
                src="/assets/bottle.webp"
                alt="OG Water Bottle"
                className="bottle-img max-lg:hidden"
              />
              <img
                src="/assets/bottle-mob.webp"
                alt="OG Water Mobile Bottle"
                className="bottle-img lg:hidden"
              />
            </div>
            <div className="comparison-list max-lg:!m-0 max-lg:!mt-10">
              <ul className="compa-l max-lg:!mx-auto">
                {[
                  "Every bottle can be tracked and traced",
                  "Unlock discounts with every can",
                  "Secure seal with unique code",
                  "Modern, bold, and made to stand out",
                  "100% recyclable and conscious",
                ].map((text, index) => (
                  <li key={index}>
                    <div className="comparison-list max-lg:!m-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect width="24" height="24" rx="12" fill="#98E34D" />
                        <path
                          d="M7.01475 10.5032L9.92034 13.4088L16.5527 6.77645L18.195 8.41876L9.92034 16.6934L5.37244 12.1455L7.01475 10.5032Z"
                          fill="white"
                        />
                      </svg>
                      <div className="comparison-txt">{text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Brand */}
          <div className="flex flex-row-reverse max-lg:flex-col border-[4px] border-[#EFEFEF] rounded-[24px] bg-[#FAFAFA] pt-[34px] px-4 lg:px-[58px] pb-0 max-lg:pb-12 min-w-[173px] w-[576px]">
            <div className="imaage-container flex justify-center">
              <img
                src="/assets/regular-bottle.webp"
                alt="Regular Bottle"
                className="bottle-img max-lg:hidden"
              />
              <img
                src="/assets/regular-bottle-mob.webp"
                alt="Mobile Regular Bottle"
                className="bottle-img lg:hidden"
              />
            </div>
            <div className="comparison-listn max-lg:!m-0 max-lg:!mt-10">
              <ul className="compa-l max-lg:!mx-auto">
                {[
                  "No way to know where it’s from",
                  "Nothing beyond the sip",
                  "Prone to refills & fakes",
                  "Generic and forgettable",
                  "Often harmful and careless",
                ].map((text, index) => (
                  <li key={index}>
                    <div className="comparison-list max-lg:!m-0">
                      <svg
                        className=" min-w-[16px] lg:min-w-[24px]"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect width="24" height="24" rx="12" fill="#FD7777" />
                        <path
                          d="M17.8535 7.78906L13.6426 12L17.8535 16.2109L16.2109 17.8535L12 13.6426L7.78906 17.8535L6.14648 16.2109L10.3574 12L6.14648 7.78906L7.78906 6.14648L12 10.3574L16.2109 6.14648L17.8535 7.78906Z"
                          fill="white"
                        />
                      </svg>
                      <div className="comparison-txt text-[#818181]">
                        {text}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comparison;
