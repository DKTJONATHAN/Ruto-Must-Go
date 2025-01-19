import React from 'react'
import { Assests } from '../../assets/Assets'

export default function Main() {
  return (
    <div class="main-frame">
        <div class="frame2">
            <div class="frame2-section">
                <h1>Ruto Must Go</h1>
                <p>If Kenya must change, Ruto must go first</p>
                <a href="#">
                    <span>Latest Updates</span>
                    <span class="material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
        </div>

        <div class="frame3">
            <h1>Featured Stories</h1>
            <div class="frame3-section">
                <div class="card">
                    <div class="top"><img src={Assests.image1} alt=""/></div>
                    <div class="bottom">
                        <h5>Politics</h5>
                        <h3>The State of Democracy</h3>
                        <p>An in-depth analysis of Kenya'sdemocratic journey and currentchallenges</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div class="card">
                    <div class="top"><img src={Assests.image3} alt=""/></div>
                    <div class="bottom">
                        <h5>Economy</h5>
                        <h3>Economic Reforms</h3>
                        <p>Understanding the impact of recenteconomic policies on daily life.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div class="card">
                    <div class="top"><img src={Assests.image4} alt=""/></div>
                    <div class="bottom">
                        <h5>Gen z protest</h5>
                        <h3>Youth Movement</h3>
                        <p>How young Kenyans are driving social change across the nation.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
