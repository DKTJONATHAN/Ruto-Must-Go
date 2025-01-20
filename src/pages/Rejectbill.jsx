import React, {useEffect, useState} from 'react'
import img1 from "../assets/images/reject1.jpg"
import img2 from "../assets/images/rex.jpg" 
import {NavLink } from "react-router-dom"
import { BiHomeAlt2 as Home } from "react-icons/bi";
const Rejectbill = () => {
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
        <h1>Reject Finance Bill 2024: A Tale of Resistance and Repression</h1>
    </header>
   {/* redirect home */}
   <NavLink to="/" className="fixed bottom-40 right-10 bg-sky-800 p-1 w-fit rounded-full text-white font-extrabold">
            <Home/>
        </NavLink>
    <main>
        <div class="container">
            <article>
                {/* <!-- Carousel --> */}
                <div class="carousel">
                    <img src={slides[curr]} alt="Protest Against Finance Bill" />
                </div>

                <p>
                    The 2024 Finance Bill in Kenya sparked unprecedented public outcry, leading to the #RejectFinanceBill2024 movement. This bill, which proposed heavy tax increases on essentials like bread, mobile money transfers, and even vehicles, was seen as an additional burden on citizens already grappling with a high cost of living. 
                </p>
                <p>
                    The protests against this bill were some of the largest and most organized in Kenya's recent history, driven predominantly by the youth, with social media platforms playing a pivotal role in mobilization. However, these demonstrations were met with a harsh response from the state. Reports emerged of numerous deaths during the protests, with dozens killed by live ammunition and brutal police tactics, turning what should have been peaceful demonstrations into scenes of mourning and anger.
                </p>
                <p>
                    President William Ruto's response to these protests further inflamed tensions. In a notable public address, he referred to the protesters as "criminals" and the protests as "treasonous," a statement that was met with widespread criticism for delegitimizing the legitimate grievances of the Kenyan people. This rhetoric not only escalated the conflict but also highlighted a disconnect between the government and its citizens.
                </p>
                <p>
                    The hashtag #RutoMustGo became one of the top trends, encapsulating the public's frustration and demand for leadership change. Other trending topics included #OccupyParliament, as protesters physically entered the legislative building to make their point, and #TotalShutdownKenya, indicating the resolve for a nationwide action against the bill.
                </p>
                <p>
                    The movement wasn't just about rejecting a bill; it was a broader call for governance reform, accountability, and an end to economic policies perceived as oppressive. Social media was flooded with images of the protests, stories of the fallen, and calls for justice, with platforms like X and TikTok becoming battlegrounds for information and misinformation.
                </p>
                <p>
                    The government's deployment of the military to support the police was another contentious move, cited as an overreach of power, leading to the trend #FufuaICC, where Kenyans called for the International Criminal Court to revisit past cases of political violence, drawing parallels to the current situation.
                </p>
                <p>
                    The protests also saw a significant show of solidarity across different communities, transcending ethnic and political divides, which was a rare occurrence in Kenyan politics. This unity was both praised and seen as a wake-up call for those in power about the changing dynamics of Kenyan society.
                </p>
                <p>
                    In conclusion, the resistance against the Finance Bill of 2024 was not just about tax policy but about a broader demand for dignity, respect, and a government that listens. The tragic loss of life, Ruto's dismissive stance, and the heavy-handed approach to dissent have left lasting scars on the nation's psyche, fueling debates on democracy, human rights, and the path Kenya should take towards a more equitable future.
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

export default Rejectbill
