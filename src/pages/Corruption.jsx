import React, {useState, useEffect} from 'react'
import img1 from "../assets/images/maandamano1.webp"
import image2 from "../assets/images/tq_gkuesghzdx-71l1500h.png"
import {NavLink} from "react-router-dom"
import { BiHomeAlt2 as Home } from "react-icons/bi";
const Corruption = () => {
    const slides = [img1, image2]
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
    <div id='bill'>
      <header>
        <h1>Corruption Cases Linked to William Ruto Since 1992</h1>
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
                    <img src={slides[curr]} alt="Abduction Scene" className="carousel-image w-full"/>
                    </div>
                </div>

                <p>
                    William Ruto's involvement in corruption scandals dates back to his early political career. In the 1990s, as part of the youth wing of the then-dominant KANU party, he was linked to various allegations of financial misconduct. One of the earliest known cases was the Weston Hotel scandal, where Ruto was accused of involvement in the irregular acquisition of land in Nairobi, as reported by The Nation in 1997.
                </p>
                <p>
                    During his tenure as Minister of Agriculture in the early 2000s, Ruto faced allegations related to the maize scandal, where he was accused of facilitating the illegal sale of maize from the national strategic reserves, according to reports from The Standard in 2008.
                </p>
                <p>
                    As Deputy President and in his presidential term, several scandals have been associated with his name. One of the notable ones was the Arror and Kimwarer dams scandal, where billions of shillings were reportedly misappropriated. This was extensively covered by Daily Nation, highlighting the loss of public funds intended for dam construction that never materialized.
                </p>
                <p>
                    Another significant case was the KEMSA (Kenya Medical Supplies Authority) scandal in 2020, where during the COVID-19 response, millions were allegedly siphoned off in a deal for mosquito nets and PPE. This was documented by Citizen TV, with calls for investigations into the procurement process.
                </p>
                <p>
                    More recently, under his presidency, Ruto has been linked to controversies over the edible oil scandal where local manufacturers accused the government of favoring imported oils through dubious government-to-government deals, as reported by Business Daily Africa. There have also been allegations of corruption in the fertilizer distribution program, with fake fertilizers being distributed, stirring significant public outcry as highlighted by The Star.
                </p>
                <p>
                    The scandal involving the disappearance of condemned sugar from government warehouses in 2023 further added to the list of corruption allegations, with NTV Kenya reporting on how this led to potential health hazards and financial losses.
                </p>
                <p>
                    Throughout these years, Ruto has often denied direct involvement, claiming these are politically motivated attacks. However, the recurring nature of these allegations has led to widespread calls for transparency and accountability. Various Kenyan media outlets have continuously called for thorough investigations, especially with the public's growing frustration over governance and resource management.
                </p>
                <p>
                    In 2024, Ruto was ranked among the most corrupt leaders globally by the Organized Crime and Corruption Reporting Project (OCCRP), based on public nominations highlighting his administration's perceived corruption, as covered by multiple Kenyan news sources including The EastAfrican and Capital FM.
                </p>
                <p>
                    In conclusion, the narrative around William Ruto's political career is punctuated by numerous corruption allegations, reflecting a pattern that spans decades. While no single case has definitively proven his personal culpability, the consistent association with these scandals has fueled significant public skepticism and demand for a cleaner political environment in Kenya.
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

export default Corruption
