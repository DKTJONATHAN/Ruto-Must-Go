import React, {useState, useEffect} from 'react'
import abduction2 from "../assets/images/abductions2.webp"
import abduction1 from "../assets/images/abdction1.jpg"
import { BiHomeAlt2 as Home } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
const Abductions = () => {
    const slides = [abduction1, abduction2]
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
        <h1>Abductions Under William Ruto's Presidency</h1>
    </header>

    <main>
        {/* redirect home */}
        <NavLink to="/" className="fixed bottom-40 right-10 bg-sky-800 p-1 w-fit rounded-full text-white font-extrabold">
            <Home/>
        </NavLink>

        <div className="container">
            <article>
                <div className="image-carousel">
                    <img src={slides[curr]} alt="Abduction Scene" className="carousel-image w-full"/>
                </div>
                
                <div className="article-meta">
                    <span>Author: Anonymous</span>
                    <span>Date: January 19, 2025</span>
                </div>

                <p>
                    Since William Ruto became the President of Kenya, there has been a marked increase in abductions, mostly targeting individuals who are critical of the government, activists, and those involved in political dissent. This issue has drawn considerable attention from human rights organizations, local citizens, and international observers, with numerous reports detailing the alarming trend.
                </p>
                <p>
                    The number of abductions has indeed spiked, with many victims vanishing without any trace or explanation. Families have been left in distress, seeking answers and justice, with many feeling neglected by the authorities. Notable victims include critics like Kibet Bull, Billy Mwangi, and others who have publicly opposed or criticized government policies or actions.
                </p>
                <p>
                    The Ruto administration has repeatedly denied any direct involvement in these abductions. Government officials have publicly stated their commitment to human rights and citizen safety, but skepticism remains high among the public and rights groups. Critics argue that the government's response lacks the urgency and transparency needed to address what has become a human rights crisis.
                </p>
                <p>
                    Human rights organizations, including Amnesty International and Human Rights Watch, have been vocal, demanding thorough investigations and accountability. They have highlighted numerous cases where individuals have been detained without legal basis, often in secret locations, and have called for protective measures for those at risk.
                </p>
                <p>
                    The fear of abduction has instilled a chilling effect on Kenyan society. There's a growing hesitance among citizens to express dissent or engage in political discussions publicly, which threatens the fabric of democracy by limiting free speech. This atmosphere of fear is believed to suppress public discourse and activism, crucial elements for a vibrant civil society.
                </p>
                <p>
                    The hashtag #RutoMustGo has gained traction, reflecting public frustration with the ongoing abductions. Many argue that only a change in leadership can restore trust in the government's commitment to human rights. Discussions often revolve around the need for systemic change to ensure that such violations do not continue unchecked.
                </p>
                <p>
                    Moreover, there has been significant coverage about the government's response to these allegations. Some reports indicate that the administration has occasionally admitted to police excesses but frames these as isolated incidents rather than systemic issues. Others highlight the government's apparent inaction or slow response in locating and ensuring the safety of those who have been abducted like Kibet Bull and Billy Mwangi.
                </p>
                <p>
                    The Kenyan National Commission on Human Rights has documented numerous cases, fueling ongoing debates about governance, rule of law, and the state of democracy under Ruto's leadership. There's also a call for more international pressure to address these human rights concerns, with stories of international leaders and organizations expressing concern over the situation in Kenya.
                </p>
                <p>
                    In conclusion, while the government insists on its commitment to human rights, the reality on the ground suggests a different narrative. The public's demand for accountability, transparency, and justice continues to grow, highlighting the urgent need for action to prevent further erosion of democratic values in Kenya.
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

export default Abductions
