import React, {useState, useEffect} from 'react'
import adani1 from "../assets/images/adani1.jpg"
import adani2 from "../assets/images/adani2.avif"
import {NavLink} from "react-router-dom"
import { BiHomeAlt2 as Home } from "react-icons/bi";
const Adani = () => {
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
        <h1>Adani's Kenyan Venture: A Tale of Corruption and Leadership Failure</h1>
    </header>
   {/* redirect home */}
   <NavLink to="/" className="fixed bottom-40 right-10 bg-sky-800 p-1 w-fit rounded-full text-white font-extrabold">
            <Home/>
        </NavLink>
    <main>
        <div class="container">
            <article>
                <p>
                    The saga of Gautam Adani's business dealings in Kenya under President William Ruto's administration has become emblematic of governance failure and potential corruption. Adani, an Indian billionaire, was poised to take over key Kenyan infrastructure, including Jomo Kenyatta International Airport (JKIA) and power transmission lines under controversial deals.
                </p>
                
                {/* <!-- Image Carousel with automatic switching of images every 2 seconds --> */}
                <div className="carousel-container">
                    <div className="carousel-images">
                    <img src={slides[curr]} className="w-full"alt="Protest Image 1"/>
                    </div>
                </div>

                <p>
                    The JKIA deal was particularly contentious, envisioning Adani managing the airport for 30 years in a public-private partnership (PPP). This plan was met with fierce opposition, leading to a dramatic series of events. In September 2024, news broke that the deal was under scrutiny due to allegations of bribery and lack of transparency, culminating in massive public protests and the hashtag #SaveJKIA trending across social media platforms.
                </p>
                <p>
                    The whistleblower, Nelson Amenya, an MBA student living in France, played a pivotal role in exposing the secretive nature of these deals. His revelations about the lack of competitive bidding and possible high-level corruption put him in the limelight but also under threat, highlighting the personal risks of confronting powerful interests. Amenya's courage has been celebrated, but it also underscored the government's apparent willingness to engage with questionable practices for financial gain.
                </p>
                <p>
                    Court cases emerged swiftly, with several petitions filed to block the Adani deals. One notable case argued that the government was not following procurement laws and that the deals would not serve Kenyan public interest. The judiciary temporarily halted the process, but Ruto's administration continued to defend Adani, often citing economic benefits without addressing the corruption allegations head-on.
                </p>
                <p>
                    President Ruto's defense of Adani, despite the mounting evidence of impropriety, paints him as a leader more interested in personal or political gain than in safeguarding Kenyan interests. His administration's response to the scandal has been criticized for lacking transparency, with officials initially denying any wrongdoing and later attempting to downplay the severity of the issues once they became public.
                </p>
                <p>
                    The deals with Adani, particularly the JKIA drama, have led to widespread calls for Ruto to resign or be held accountable, with hashtags like #RutoMustGo gaining traction. The public's perception is that Ruto's leadership has prioritized foreign investment over national integrity, especially when those investments come from companies like Adani, which have been embroiled in global controversies.
                </p>
                <p>
                    Moreover, the handling of the Adani situation has raised questions about the due diligence processes within the Kenyan government and the lack of accountability for those at the highest levels of power. The narrative around these deals has not only been about potential corruption but also about the erosion of trust in Ruto's leadership to make decisions in the best interest of Kenya.
                </p>
                <p>
                    In conclusion, the Adani deals under William Ruto's watch have become a stark illustration of leadership gone awry. The involvement of a whistleblower like Nelson Amenya, the legal battles, public protests, and the government's defensive stance all paint a picture of a presidency that has failed to uphold the principles of transparency, accountability, and patriotism. This episode will likely be remembered as a significant blemish on Ruto's record, highlighting the need for a leadership that truly serves the Kenyan people.
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

export default Adani
