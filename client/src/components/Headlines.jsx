import React from 'react'
import CardImage1 from '../assets/TOI.webp';
import CardImage2 from '../assets/Thehindu.webp';
import CardImage3 from '../assets/Hindustantime.webp';
import CardImage4 from '../assets/Hindutimes.webp';
import CardFooter from '../assets/card-footer.png';

const Headlines = () => {
  const cardsData = [
    {
      image: CardImage1,
      source: "Times of India",
      heading: "Packaged drinking water among 'Highest Risk Food Category'...",
      updated: "Updated - Dec 2, 2024, 19:51 IST",
      link: "https://timesofindia.indiatimes.com/life-style/food-news/packaged-drinking-water-among-highest-risk-food-category-fssai/articleshow/115904082.cms",
    },
    {
      image: CardImage2,
      source: "The Hindu",
      heading: "Packaged drinking water bottles with fake ISI mark seized",
      updated: "Updated - June 26, 2025 06:39 pm IST - Thanjavur",
      link: "https://www.thehindu.com/news/cities/Tiruchirapalli/packaged-drinking-water-bottles-with-fake-isi-mark-seized/article69739935.ece",
    },
    {
      image: CardImage3,
      source: "Hindustan Times",
      heading: "2 arrested for selling counterfeit Bisleri water in Delhi",
      updated: "Updated - Jun 23, 2025 05:38 AM IST",
      link: "https://www.hindustantimes.com/cities/delhi-news/2-arrested-for-selling-counterfeit-bisleri-water-in-delhi-101750615378145.html",
    },
    {
      image: CardImage4,
      source: "Hindustan Times",
      heading:
        "Water purifying plant selling fake bottled water sealed in Gurugram",
      updated: "Updated - Mar 15, 2023 11:23 PM IST",
      link: "https://www.hindustantimes.com/cities/gurugram-news/water-purifying-plant-selling-fake-bottled-water-sealed-in-gurugram-s-palam-vihar-101678902807569.html",
    },
  ];
  return (
    <div>
      <section className="headline-section" id="headline">
        <div className="section-heading">
          Fake water’s flooding the <br /> streets.{" "}
          <span className="text-col">We said nah.</span>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex gap-5 md:gap-10 overflow-x-auto snap-x snap-mandatory lg:gap-0 px-0 mx-auto hide-scroll">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="flex-none w-[calc((100%-(1*20px))/1.5)] md:w-[calc((100%-(2*40px))/3)] lg:w-[calc((100%-(0*20px))/4)] pl-4 md:pl-0"
              >
                <div className="flex flex-col">
                  <div className="card-img">
                    <img
                      src={card.image}
                      alt={`Source - ${card.source}`}
                      className="w-full"
                    />
                  </div>
                  <div className="card-container ">
                    <div className="card-subheading">
                      Source - {card.source}
                    </div>
                    <div className="card-heading">{card.heading}</div>
                    <div className="card-txt">{card.updated}</div>
                    <div className="link">
                      <a
                        className="bt-link"
                        target="_blank"
                        href={card.link}
                        rel="noopener noreferrer"
                      >
                        <div className="lnktxt">Read full article</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M11.25 4.25L10.3562 5.12063L15.0938 9.875H2.5V11.125H15.0938L10.3562 15.8581L11.25 16.75L17.5 10.5L11.25 4.25Z"
                            fill="#006FFF"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card-footer">
                    <img
                      src={CardFooter}
                      alt="Footer Image"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Headlines;
{
  /* <div
                className="flex overflow-x-auto snap-x snap-mandatory gap-0 px-0 mx-auto"
              >
                {cardsData.map((card, index) => (
                  <div key={index} className="">
                    <div className="Card border">
                      <div className="card-img">
                        <img
                          src={card.image}
                          alt={`Source - ${card.source}`}
                          className="card-image"
                        />
                      </div>
                      <div className="card-container max-md:max-h-[max-content]">
                        <div className="card-subheading">
                          Source - {card.source}
                        </div>
                        <div className="card-heading">{card.heading}</div>
                        <div className="card-txt">{card.updated}</div>
                        <div className="link">
                          <a
                            className="bt-link"
                            target="_blank"
                            href={card.link}
                            rel="noopener noreferrer"
                          >
                            <div className="lnktxt">Read full article</div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                            >
                              <path
                                d="M11.25 4.25L10.3562 5.12063L15.0938 9.875H2.5V11.125H15.0938L10.3562 15.8581L11.25 16.75L17.5 10.5L11.25 4.25Z"
                                fill="#006FFF"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="card-footer">
                        <img
                          src={CardFooter}
                          alt="Footer Image"
                          className="card-images"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div> */
}