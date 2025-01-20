import React from 'react'
import {NavLink} from "react-router-dom"
import { BiHomeAlt2 as Home } from "react-icons/bi";
const Politics = () => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".carousel img"); // Select all images in the carousel

    // Function to change the image every 2 seconds
    function changeImage() {
        // Hide all images
        images.forEach(img => img.style.display = "none");
        
        // Show the next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = "block";
    }

    // Set interval to change image every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);
  return (
    <div id='bill'>
    <header>
        <h1>The Dark Side of Politics Under William Ruto</h1>
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
                    <img src="images/tax-hike.jpg" alt="Tax Hike Protest" />
                    <img src="images/national-debt.jpg" alt="National Debt Crisis" />
                </div>

                <p>
                    Under President William Ruto's leadership, several policies have stirred controversy and public discontent. One of the most criticized is the implementation of new tax measures, with a finance bill in June 2024 doubling the tax on fuel to 16% and introducing a 1.5% housing levy, which has been seen as particularly harsh on the middle and lower-income strata, as reported by major outlets like The Standard and Daily Nation.
                </p>
                <p>
                    Another significant concern is the management of national debt. Kenya's debt has climbed to over 10 trillion shillings, with about 70% of GDP now spent on debt servicing, with critiques from The Nation Media Group pointing out the lack of a sustainable debt management strategy under Ruto's administration.
                </p>
                <p>
                    Corruption has also been a focal point of criticism. Incidents like the distribution of fake fertilizers by the agriculture ministry have been reported by Citizen TV, highlighting systemic failures in governance and oversight.
                </p>
                <p>
                    The approach to governance and human rights has been questioned, particularly after reports of police brutality during protests against tax hikes, leading to casualties, as documented by The Star. There have also been accusations of judicial interference, with the government sometimes ignoring court orders, as discussed in The EastAfrican.
                </p>
                <p>
                    Foreign policy under Ruto has faced scrutiny for numerous international trips perceived as expensive without yielding clear benefits for Kenya, with The Standard questioning their value and transparency.
                </p>
                <p>
                    The government's push for privatization has raised alarms about potential job losses and loss of state control over strategic sectors, according to Business Daily Africa, creating a divide between policy intent and public welfare.
                </p>
                <p>
                    These policies have fueled widespread protests and expressions of frustration over economic policies, governance, and perceived mismanagement. Media reports suggest that Ruto's administration has not lived up to campaign promises, leading to a significant erosion of public trust.
                </p>
                <p>
                    The hashtag #RutoMustGo has gained traction, encapsulating public sentiment against these policies. There's a call for systemic change to address these grievances, with many advocating for a leadership change to restore confidence in governance.
                </p>
                <p>
                    In conclusion, while the government asserts its commitment to economic growth and governance reform, the practical outcomes of these policies, as reflected in Kenyan media, paint a picture of increasing public discontent and demand for accountability, transparency, and a reassessment of the political direction under Ruto's presidency.
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

export default Politics
