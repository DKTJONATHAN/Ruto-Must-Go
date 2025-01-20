import React, {useState, useEffect} from 'react'
import strike1 from "../assets/images/maandamano1.webp"
import strike2 from "../assets/images/maandamano2.jpg"
import {NavLink} from "react-router-dom"
import { BiHomeAlt2 as Home } from "react-icons/bi";
const GenzProtest = () => {
    const slides = [strike1, strike2]
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
        <h1>Gen Z Protests in Kenya: A New Dawn</h1>
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
                        <img src={slides[curr]} className="w-full"alt="Protest Image 1"/>
                    </div>
                </div>

                <p>
                    In June 2024, Kenyan Generation Z, often referred to as Gen Z, initiated a movement that would go down in history as one of the most impactful protests in Kenya. It all started over the contentious Finance Bill 2024, which proposed significant tax increases, seen by many as burdensome on the youth and working class. 
                </p>
                <p>
                    Harnessing the power of technology, Gen Z utilized platforms like TikTok and X to spread their message. On TikTok, short, engaging videos explained the implications of the bill in a language that resonated with the youth, using humor, music, and direct calls to action. X became a hub for real-time updates, coordination, and the sharing of protest logistics, with hashtags like #RejectFinanceBill2024 trending nationwide.
                </p>
                <p>
                    The movement was not just about posting; it was about organizing. Spaces on X (formerly Twitter) became virtual town halls where strategies were discussed, legal advice was shared, and plans for peaceful demonstrations were laid out. These digital gatherings allowed for a decentralized yet cohesive approach to activism, something unprecedented in Kenyan protest culture.
                </p>
                <p>
                    What made these protests stand out was the audacity and bravery of Gen Z. They did what had never been done in Kenya's history: they occupied Parliament. On June 25, 2024, after weeks of online mobilization, thousands of young Kenyans marched to the Parliament buildings in Nairobi, breaching security and entering the hallowed chambers where laws are made. This act of defiance was a direct challenge to those in power, symbolizing a new era of youth engagement in governance.
                </p>
                <p>
                    The Kenyan Gen Z has been hailed as the most courageous generation in recent history for their fearless approach to demanding change. Their actions led to immediate effects - the Finance Bill was withdrawn, and the government was forced to reconsider its approach to youth and economic policy. 
                </p>
                <p>
                    The protests were marked by creativity, resilience, and an unwavering commitment to non-violence, despite facing police brutality. They sang, danced, and used art and poetry to articulate their grievances, turning what could have been another dark chapter into a moment of national awakening and pride.
                </p>
                <p>
                    Gen Z's use of social media was not just for mobilization but also for documenting abuses, providing first-hand accounts of the protests, and ensuring international attention, which put additional pressure on the government to respond. This digital footprint has been crucial in holding authorities accountable, both locally and globally.
                </p>
                <p>
                    In conclusion, the Gen Z protests of 2024 have rewritten the narrative of Kenyan activism. By leveraging technology, showing unprecedented bravery, and occupying Parliament, they have set a new standard for civic engagement. Their actions have not only altered the course of policy-making but have also inspired a wave of activism across Africa, proving that the youth are not just the future but very much the present in shaping democracy and governance.
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

export default GenzProtest
