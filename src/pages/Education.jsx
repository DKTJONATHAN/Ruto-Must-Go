import React, {useState, useEffect} from 'react'
import image1 from "../assets/images/cbc1.jpg"
import image2 from "../assets/images/cbc2.jpg"
import {NavLink} from "react-router-dom"
import { BiHomeAlt2 as Home } from "react-icons/bi";
const Education = () => {
    const slides = [image1, image2]
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
        <h1>Education Under Siege: The Ruto Era</h1>
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
                        <img src={slides[curr]} className="w-full"alt="Image 1"/>
                    </div>
                </div>

                <p>
                    Since President William Ruto took office, the education sector in Kenya has faced numerous challenges, making learning an increasingly daunting task for students. One of the most significant issues has been the removal of the higher education funding model, which has left many students unable to afford university education due to the lack of clear financial support systems.
                </p>
                <p>
                    The Competency-Based Curriculum (CBC) has been a headache for both educators and parents. Initially promised to be a game-changer, its rollout has been marred by inadequate training for teachers, a lack of resources, and confusion over its implementation. This has led to an overloaded curriculum, with stakeholders arguing that it prioritizes quantity over quality of education.
                </p>
                <p>
                    Examinations under Ruto's leadership have seen unprecedented levels of cheating allegations, particularly in the Kenya Certificate of Secondary Education (KCSE). Reports have surfaced of exam papers leaking before the test day, leading to a significant credibility crisis in the national examination system, with calls for reform and accountability.
                </p>
                <p>
                    The physical state of educational infrastructure has deteriorated, with many schools still lacking basic amenities like proper classrooms, sanitation facilities, and teaching materials. This neglect has been particularly stark in rural areas, where children sometimes learn under trees or in dilapidated structures.
                </p>
                <p>
                    The tragic fire at Hillside Endarasha Academy in Nyeri in September 2024, which claimed the lives of nearly 20 schoolchildren, highlighted the perilous conditions of some boarding schools. The incident brought to light the government's failure in ensuring safety standards in educational institutions, sparking national mourning and a demand for immediate action to improve school safety.
                </p>
                <p>
                    Other setbacks in the education sector include:
                    - The discontinuation of feeding programs in schools, impacting student concentration and attendance, particularly in low-income areas.
                    - Delays in capitation funds reaching schools, which has led to schools running on shoestring budgets, affecting everything from teacher salaries to the provision of learning materials.
                    - Strikes by university lecturers due to unpaid salaries and poor working conditions, further disrupting higher education.
                </p>
                <p>
                    The hashtag #FixEducationKE has been trending, reflecting public frustration and a call for urgent reforms. The combination of policy missteps, financial mismanagement, and neglect of basic educational needs has made education under Ruto's administration not just less accessible but also of questionable quality.
                </p>
                <p>
                    In conclusion, the education sector under William Ruto has been marked by significant challenges that go beyond mere policy failures; they reflect a broader disregard for the future of Kenya's youth. The Endarasha fire incident, the breakdown of funding mechanisms, the chaotic transition to CBC, and the erosion of examination integrity are all symptoms of a system in distress, urgently requiring visionary leadership and investment to restore hope and quality in education.
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

export default Education
