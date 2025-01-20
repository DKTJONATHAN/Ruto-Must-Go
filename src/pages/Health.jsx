import React, {useEffect, useState} from 'react'
import img1 from "../assets/images/docs1.jpg"
import img2 from "../assets/images/docs2.jpg" 
import {NavLink} from "react-router-dom"
import { BiHomeAlt2 as Home } from "react-icons/bi";
const Health = () => {
     const slides = [img1, img2]
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
        <h1>Health Crisis Under Ruto: Strikes, SHA, and Public Dissent</h1>
    </header>
   {/* redirect home */}
   <NavLink to="/" className="fixed bottom-40 right-10 bg-sky-800 p-1 w-fit rounded-full text-white font-extrabold">
            <Home/>
        </NavLink>
    <main>
        <div class="container">
            <article>
                {/* <!-- Image Carousel with automatic switching of images every 2 seconds --> */}
                <div class="carousel-container">
                    <div class="carousel-images">
                        <img src={slides[curr]} className='w-full' alt="Healthcare Strike Image 1"/>
                    </div>
                </div>

                <p>
                    Under President William Ruto's administration, Kenya's health sector has experienced a series of crises, marked by doctor and nurse strikes, the troubled transition to the Social Health Insurance Fund (SHIF) and Social Health Authority (SHA), and public protests highlighting systemic failures.
                </p>
                <p>
                    Former Health Cabinet Secretary Susan Nakhumicha was at the helm during some of the most turbulent times. Her tenure was characterized by multiple doctors' strikes, with healthcare workers demanding better pay, improved working conditions, and the fulfillment of previous collective bargaining agreements. Nakhumicha's response was often seen as inadequate, with claims of her blaming political rivals for the strikes rather than addressing the core issues.
                </p>
                <p>
                    The transition from the National Hospital Insurance Fund (NHIF) to the SHA and SHIF has been fraught with issues. Patients have faced difficulties accessing care due to system hitches, with many paying premiums but still unable to receive services because hospitals are not adapting to the new system. The SHA has been criticized for its operational inefficiencies, leading to long waiting times, denials of service, and a general mistrust of the new health insurance model.
                </p>
                <p>
                    Protests have become a common sight, with patients and healthcare workers expressing their frustration over the health system's collapse. In January 2025, patients stormed a media briefing by the current Health CS, Deborah Barasa, demanding answers and solutions for the SHA's failures, which has led to the trend #SHAPain or #SHIFScam on social platforms.
                </p>
                <p>
                    Other notable health-related trends in Kenya include:
                    - #OccupyMoH, where doctors and medical interns camped outside the Ministry of Health offices, demanding the government honor agreements on intern placements and salaries.
                    - #RutoMustGo, often linked to health sector issues, reflecting broader dissatisfaction with government policy.
                    - Widespread reports of healthcare facilities struggling with basic supplies, leading to patient suffering or having to pay out of pocket for services that should be covered by insurance.
                </p>
                <p>
                    The strikes have not only led to the loss of life due to delayed or denied medical services but have also painted a grim picture of a health system in disarray. The government's approach has been criticized for being more reactive than proactive, with accusations of mismanagement and corruption further eroding public trust.
                </p>
                <p>
                    The hashtag #FixHealthKE has been trending, echoing the public's call for a comprehensive overhaul of the health sector. There's a growing sentiment that the health crisis under Ruto's leadership is not just about mismanagement but also about the government's failure to prioritize the well-being of its citizens.
                </p>
                <p>
                    In conclusion, the health sector under William Ruto has been marked by significant turmoil. From the ongoing doctor strikes, the chaotic implementation of new health insurance schemes, to public outcry and protests, the narrative is clear: Kenya's health system is in dire need of reform, leadership, and genuine commitment to the health of every Kenyan. The persistent issues have not only highlighted systemic problems but have also become a focal point for broader political discourse on governance and accountability.
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

export default Health
