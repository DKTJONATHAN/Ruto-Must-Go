import React from 'react'
import adani1 from "../assets/images/adani1.jpg"
import adani2 from "../assets/images/abductions2.webp" 
import { useState, useEffect } from 'react'
import {NavLink} from "react-router-dom"
import { BiHomeAlt2 as Home } from "react-icons/bi";
const Economy = () => {
    const slides = [adani1, adani2]
    const [curr, setCurr] = useState(0)
    const prev = () => {
        setCurr((curr) => curr == 0 ? slides.length - 1 : curr -1)
    }
    const next= () => {
        setCurr((curr) => curr ==slides.length-1 ? 0 : curr + 1)
    }
    useEffect(() => {
        const scroll = false
        if(scroll){return console.log("no scroll")}
        const slideInterval = setInterval(next, 3000)
        return () => clearInterval(slideInterval)
    }, [])
      
  return (
    <div id="bill">
    <header>
        <h1>Ruto's Policies and the Economic Downfall of Kenya</h1>
    </header>
   {/* redirect home */}
   <NavLink to="/" className="fixed bottom-40 right-10 bg-sky-800 p-1 w-fit rounded-full text-white font-extrabold">
            <Home/>
        </NavLink>
    <main>
        <div class="container">
            <article>
                {/* <!-- Image Carousel with automatic switching of images every 2 seconds --> */}
                <div className="carousel-container">
                    <div className="carousel-images">
                        <img src={slides[curr]} alt="Image 1"/>
                        {/* <img src={adani2} alt="Image 2"/> */}
                    </div>
                </div>

                <p>
                    Since President William Ruto took office, Kenya has experienced an economic downturn, contrary to his campaign promises of uplifting the so-called "hustler nation." His fiscal policies have been criticized for exacerbating the cost of living, making daily survival increasingly difficult for the average Kenyan.
                </p>
                <p>
                    One of the most contentious policies has been the introduction of new taxes. In 2024, Ruto implemented a finance bill that doubled the Value Added Tax (VAT) on fuel, leading to an immediate spike in transport and commodity prices. This tax increment directly contradicts his campaign promise to ease the financial burden on the poor and middle class, who are now grappling with higher costs for basic necessities like food and transport.
                </p>
                <p>
                    The housing levy, another policy under Ruto's administration, mandates that all salaried employees contribute 1.5% of their income to a housing fund. While aimed at addressing housing shortages, it has instead reduced disposable income, significantly impacting the "hustlers" Ruto swore to support, effectively turning his promise into a financial strain for many Kenyans.
                </p>
                <p>
                    Economic growth has stagnated partly due to the government's borrowing spree. Kenya's debt has soared past 10 trillion shillings, with a large portion of the national budget now dedicated to servicing this debt rather than investing in growth or social services. This has led to reduced public spending, further squeezing the economy, with inflation rates climbing to levels not seen in years, directly affecting the cost of living.
                </p>
                <p>
                    The agricultural sector, a significant employer in Kenya, has been hit hard by Ruto's policies, including the mismanagement of subsidies and the fertilizer scandal where counterfeit products were distributed, crippling farmers' productivity. This has resulted in higher food prices, with the rural poor, whom Ruto claimed to champion, suffering the most.
                </p>
                <p>
                    Small businesses, the backbone of the "hustler economy," have faced a harsh environment with increased taxation and regulatory burdens, leading to closures and unemployment. The promised job creation has not materialized, with unemployment rates among the youth reaching critical levels, further deepening economic despair.
                </p>
                <p>
                    The currency has also depreciated under Ruto's watch, making imports more expensive and indirectly fueling inflation. For a country that relies heavily on imported goods, this has meant an unbearable rise in the cost of living for ordinary citizens, far from the economic prosperity Ruto pledged.
                </p>
                <p>
                    Suggestions for recovery include a drastic policy overhaul, focusing on reducing unnecessary taxes, promoting local production to curb import dependency, and genuinely supporting small businesses. There's a call for transparency in government spending, especially regarding debt management, to ensure funds are used for economic stimulation rather than merely servicing loans. 
                </p>
                <p>
                    In conclusion, the economic policies under Ruto's leadership have not only failed to lift the hustlers but have instead deepened poverty and economic inequality. The stark contrast between campaign rhetoric and the reality of governance has led to widespread disillusionment, with many Kenyans feeling betrayed by promises of economic empowerment that have not been realized.
                </p>
            </article>
        </div>
    </main>
    <footer>
        <p>© 2025 Ruto Must Go</p>
    </footer>

    </div>
  )
}

export default Economy
