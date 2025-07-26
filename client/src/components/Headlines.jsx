import React from 'react'
import CardImage1 from '../assets/TOI.webp';
import CardImage2 from '../assets/Thehindu.webp';
import CardImage3 from '../assets/Hindustantime.webp';
import CardImage4 from '../assets/Hindutimes.webp';
import CardFooter from '../assets/card-footer.png';

const Headlines = () => {
    return (
        <div>
            <section className="headline-section" id="headline">
                <div className="section-heading">
                    Fake water’s flooding the <br /> streets. <span className="text-col">We said nah.</span>
                </div>
                <div className="grid card-grid">
                    <div className="Card">
                        <div className="card-img">
                            <img src={CardImage1} alt="TOI Banner" className="card-image" />
                        </div>
                        <div className="card-container">
                            <div className="card-subheading">
                                Source - Times of India
                            </div>
                            <div className="card-heading">
                                Packaged drinking water among 'Highest Risk Food Category'...
                            </div>
                            <div className="card-txt">
                                Updated - Dec 2, 2024, 19:51 IST
                            </div>
                            <div className="link">
                                <a className="bt-link" target="_blank" href="https://timesofindia.indiatimes.com/life-style/food-news/packaged-drinking-water-among-highest-risk-food-category-fssai/articleshow/115904082.cms">
                                    <div className='lnktxt'>
                                        Read full article
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M11.25 4.25L10.3562 5.12063L15.0938 9.875H2.5V11.125H15.0938L10.3562 15.8581L11.25 16.75L17.5 10.5L11.25 4.25Z" fill="#006FFF" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="card-footer">
                            <img src={CardFooter} alt="TOI Banner" className="card-images" />
                        </div>
                    </div>
                    <div className="Card">
                        <div className="card-img">
                            <img src={CardImage2} alt="TOI Banner" className="card-image" />
                        </div>
                        <div className="card-container">
                            <div className="card-subheading">
                                Source - The Hindu
                            </div>
                            <div className="card-heading">
                                Packaged drinking water bottles with fake ISI mark seized
                            </div>
                            <div className="card-txt">
                                Updated - June 26, 2025 06:39 pm IST - Thanjavur
                            </div>
                            <div className="link">
                                <a className="bt-link" target="_blank" href="https://www.thehindu.com/news/cities/Tiruchirapalli/packaged-drinking-water-bottles-with-fake-isi-mark-seized/article69739935.ece">
                                    <div className='lnktxt'>
                                        Read full article
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M11.25 4.25L10.3562 5.12063L15.0938 9.875H2.5V11.125H15.0938L10.3562 15.8581L11.25 16.75L17.5 10.5L11.25 4.25Z" fill="#006FFF" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="card-footer">
                            <img src={CardFooter} alt="TOI Banner" className="card-images" />
                        </div>
                    </div>
                    <div className="Card">
                        <div className="card-img">
                            <img src={CardImage3} alt="TOI Banner" className="card-image" />
                        </div>
                        <div className="card-container">
                            <div className="card-subheading">
                                Source - Hindustan Times
                            </div>
                            <div className="card-heading">
                                2 arrested for selling counterfeit Bisleri water in Delhi
                            </div>
                            <div className="card-txt">
                                Updated - Jun 23, 2025 05:38 AM IST
                            </div>
                            <div className="link">
                                <a className="bt-link" target="_blank" href="https://www.hindustantimes.com/cities/delhi-news/2-arrested-for-selling-counterfeit-bisleri-water-in-delhi-101750615378145.html">
                                    <div className='lnktxt'>
                                        Read full article
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M11.25 4.25L10.3562 5.12063L15.0938 9.875H2.5V11.125H15.0938L10.3562 15.8581L11.25 16.75L17.5 10.5L11.25 4.25Z" fill="#006FFF" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="card-footer">
                            <img src={CardFooter} alt="TOI Banner" className="card-images" />
                        </div>
                    </div>
                    <div className="Card">
                        <div className="card-img">
                            <img src={CardImage4} alt="TOI Banner" className="card-image" />
                        </div>
                        <div className="card-container">
                            <div className="card-subheading">
                                Source - Hindustan Times
                            </div>
                            <div className="card-heading">
                                Water purifying plant selling fake bottled water sealed in Gurugram
                            </div>
                            <div className="card-txt">
                                Updated - Mar 15, 2023 11:23 PM IST
                            </div>
                            <div className="link">
                                <a className="bt-link" target="_blank" href="https://www.hindustantimes.com/cities/gurugram-news/water-purifying-plant-selling-fake-bottled-water-sealed-in-gurugram-s-palam-vihar-101678902807569.html">
                                    <div className='lnktxt'>
                                        Read full article
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M11.25 4.25L10.3562 5.12063L15.0938 9.875H2.5V11.125H15.0938L10.3562 15.8581L11.25 16.75L17.5 10.5L11.25 4.25Z" fill="#006FFF" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="card-footer">
                            <img src={CardFooter} alt="TOI Banner" className="card-images" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Headlines
