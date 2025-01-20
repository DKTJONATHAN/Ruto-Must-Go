import React, {useState, useEffect} from 'react'
import img1 from "../assets/images/2007.jpg"
import img2 from "../assets/images/20072.jpg" 
import {NavLink } from "react-router-dom"
import { BiHomeAlt2 as Home } from "react-icons/bi";
const Fufuaicc = () => {
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
    <div id='bill'>
    <header>
        <h1>The ICC Case Against Ruto and the Ocampo Six</h1>
    </header>
   {/* redirect home */}
   <NavLink to="/" className="fixed bottom-40 right-10 bg-sky-800 p-1 w-fit rounded-full text-white font-extrabold">
            <Home/>
        </NavLink>
    <main>
        <div className="container">
            <article>
                {/* <!-- Image Carousel with automatic switching of images every 2 seconds --> */}
                <div className="carousel-container">
                    <div className="carousel-images">
                        <img src={slides[curr]}className='w-full' alt="Image 1"/>
                    </div>
                </div>

                <p>
                    The International Criminal Court (ICC) case against William Ruto and his so-called Ocampo Six accomplices has been a landmark in Kenyan political history, stemming from the 2007-2008 post-election violence. The case accused Ruto, along with Uhuru Kenyatta, Francis Muthaura, Henry Kosgey, Joshua Arap Sang, and Mohammed Hussein Ali, of orchestrating crimes against humanity.
                </p>
                <p>
                    Ruto, then a key figure in the opposition party, was charged with murder, forcible transfer of population, and persecution. The violence that followed the disputed election left over 1,000 dead and displaced hundreds of thousands, with ethnic clashes marking one of Kenya's darkest periods. Yet, the ICC case against Ruto was dismissed in 2016 due to witness interference and insufficient evidence, a decision met with both relief and outrage.
                </p>
                <p>
                    Recent years have seen the hashtag #FufuaICC trending, with many Kenyans and online activists advocating for the ICC to revisit the case. The call for justice is fueled by ongoing reports of human rights abuses, abductions, and the government's perceived failure to hold accountable those involved in historical injustices. The demand for reopening the case is not just about revisiting past crimes but also about setting a precedent for current and future governance.
                </p>
                <p>
                    Social media accounts have highlighted various reasons for reopening the case, including:
                    - The need for closure for victims and their families, who have seen little justice for the atrocities of 2007-2008.
                    - Concerns over witness intimidation during the original trial, suggesting that a fair trial was never possible under the circumstances.
                    - New evidence or testimonies that might have come to light since the case's closure, which could alter the previous outcomes.
                </p>
                <p>
                    There's also a push for the ICC to investigate newer allegations of human rights abuses under Ruto's administration, suggesting that the patterns of violence and suppression might be linked to the same individuals who were once suspects. The argument is that without accountability, the cycle of impunity continues.
                </p>
                <p>
                    Critics of the movement to reopen the case argue that it's time to move forward, that justice has been served through national mechanisms, or that the ICC has shown biases in its prosecutions. However, supporters of #FufuaICC maintain that true reconciliation and prevention of future violence require addressing past crimes comprehensively.
                </p>
                <p>
                    The discourse around this case has also brought to light the broader issues of political accountability, the role of international justice, and the impact of ethnic politics in Kenya. While Ruto's political career has continued to flourish, the shadow of the ICC case lingers, with many believing that reopening it could signify a real commitment to justice and healing for Kenya.
                </p>
                <p>
                    In conclusion, the #FufuaICC movement reflects deep-seated desires for justice, accountability, and reconciliation in Kenyan society. It underscores the unfinished narrative of the 2007-2008 violence, questioning whether true peace can be achieved without addressing the root causes of such conflicts through the lens of international law.
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

export default Fufuaicc
