import React, {useState} from 'react'
import economy from "../assets/images/tq_httdwkskzj-oll-400w.png"
import genz from "../assets/images/tq_vumowcotjv-c1ed-400w.png"
import politics from "../assets/images/tq_blzp55lz-d-z3i-200h.png"
import statics from "../assets/images/kasongo.webp"
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMenu as Menu } from 'react-icons/md'
import { CiInstagram as Instagram } from 'react-icons/ci'
import { CiTwitter as Twitter } from 'react-icons/ci'
import { FaFacebook as Facebook } from 'react-icons/fa'
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md"
import { NavLink } from 'react-router-dom';
import { RxCross1 as Cross} from "react-icons/rx";
const Homepage = () => {
  const [display, setDisplay] = useState("hidden")
  return (
    <div>
    <div>
    <div className="main-frame">
        <div className="frame1">
            <div className="flex items-start justify-start">
                <span className="md:hidden material-symbols-outlined menu" id="menu"><Menu size={25} onClick={()=> {
                    setDisplay("block")
                }}/></span>
                <h2 className='font-bold text-lg'>Ruto Must Go</h2>
            </div>
            <div className="navbar-section2 hidden md:flex">
                <ul id="navbar-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/politics">Politics</NavLink></li>
                    <li><NavLink to="/corruption">Corruption</NavLink></li>
                    <li><NavLink to="/murders">Murders</NavLink></li>
                    <li><NavLink to="/abductions">Abductions</NavLink></li>
                </ul>
            </div>
{/* navbar in small screens */}
<div className={`bg-black z-10 p-3 text-center fixed h-screen w-screen top-0 right-0 ${display}`}>
            <div className='m-3 flex justify-end'>
                <Cross size={25} onClick={()=> {
                    setDisplay("hidden")
                }}/>
            </div>
                <ul id="navbar-list grid gap-4">
                    <li><NavLink className="hover:text-amber-700" to="/">Home</NavLink></li>
                    <li><NavLink className="hover:text-amber-700" to="/politics">Politics</NavLink></li>
                    <li><NavLink className="hover:text-amber-700" to="/corruption">Corruption</NavLink></li>
                    <li><NavLink className="hover:text-amber-700" to="/murders">Murders</NavLink></li>
                    <li><NavLink className="hover:text-amber-700" to="/abductions">Abductions</NavLink></li>
                </ul>
            </div>


            <div className="flex justify-end items-center font-bold gap-2">
                <span className="material-symbols-outlined"><CiSearch size={24}/></span>
                <span className="material-symbols-outlined"><MdAccountCircle size={23}/></span>
            </div>
        </div>

        {/* <!-- Frame2: Image with Glassmorphism --> */}
        <div className="frame2">
            <img src={statics} alt="Header Image" className="header-image"/> 
            
            <div className="frame2-content">
                <div className="glassmorphism">
                    <h1>Ruto Must Go</h1>
                    <p>If Kenya must change, Ruto must go first</p>
                    <a href="#">Latest Updates</a>
                </div>
            </div>
        </div>

        <div className="frame3">
            <h1>Featured Stories</h1>
            <div className="frame3-section">
                <div className="card">
                    <div className="top"><img src={politics} alt=""/></div>
                    <div className="bottom">
                        <h5>Politics</h5>
                        <h3>The State of Democracy</h3>
                        <p>An in-depth analysis of Kenya's democratic journey and current challenges</p>
                        <NavLink to="/politics">Read More</NavLink>
                    </div>
                </div>
                <div className="card">
                    <div className="top"><img src={genz} alt=""/></div>
                    <div className="bottom">
                        <h5>Economy</h5>
                        <h3>Economic Reforms</h3>
                        <p>Understanding the impact of recent economic policies on daily life.</p>
                        <NavLink to="/economy">Read More</NavLink>
                    </div>
                </div>
                <div className="card">
                    <div className="top"><img src={economy} alt=""/></div>
                    <div className="bottom">
                        <h5>Gen z protest</h5>
                        <h3>Youth Movement</h3>
                        <p>How young Kenyans are driving social change across the nation.</p>
                        <NavLink to="/genzprotest">Read More</NavLink>
                    </div>
                </div>
            </div>
        </div>

        <div className="frame4">
            <div className="frame4-top">
                <h1 className='font-bold capitalize text-lg'>popular topics</h1>
                <div className="frame4-top-section">
                    <div className="card1"> <NavLink to="/abductions">Abductions</NavLink></div>
                    <div className="card1"> <NavLink to="/economy">Economy</NavLink></div>
                    <div className="card1"> <NavLink to="/corruption">Corruption</NavLink></div>
                    <div className="card1"> <NavLink to="/fufuaicc">Fufua ICC</NavLink></div>
                    <div className="card1"> <NavLink to="/genzprotest">Gen Z Protests</NavLink></div>
                    <div className="card1"> <NavLink to="/rejectfinancebill2024">Reject Finance Bill 2024</NavLink></div>
                    <div className="card1"> <NavLink to="/education">Education</NavLink></div>
                    <div className="card1"> <NavLink to="/health">Health</NavLink></div>
                    <div className="card1"> <NavLink to="/adani">Adani</NavLink></div>
                </div>
             </div>
            </div>
            <footer className="frame4 frame4-bottom foot">
                <div className="col1 col p-3">
                    <h2>Ruto Must Go</h2>
                    <p>Your trusted source for news and analysis</p>
                    <p>&copy;<span id="getDate"></span>. All Rights Reserved.</p>
                </div>
                <div className="col2 col">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/advertise">Advertise</NavLink></li>
                    </ul>
                </div>
                <div className="col3 col">
                    <h2>Categories</h2>
                    <ul>
                        <li><NavLink to="/politics">Politics</NavLink></li>
                        <li><NavLink to="/economy">Economy</NavLink></li>
                        <li><NavLink to="/society">Society</NavLink></li>
                    </ul>
                </div>
                <div className="col4 col">
                    <h2>Follow Us</h2>
                    <ul>
                        <li><a href="https://www.facebook.com/jonathan.mwaniki.127" target='_blank'><span className="bi-facebook"> <Facebook size={25}/></span></a></li>
                        <li><a href="https://x.com/Maestropuns" target='_blank'><Twitter size={25}/></a></li>
                        <li><a href="https://www.instagram.com/jonaahrojo/" target='_blank'><Instagram size={25}/></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    </div>
    </div>
  )
}

export default Homepage
