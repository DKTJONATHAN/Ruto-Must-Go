import React from 'react'

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="navbar-section1">
        <span class="material-symbols-outlined menu" id="menu">menu</span>
        <h2>Ruto Must Go</h2>
      </div>

      <div class="navbar-section2">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Politics</a></li>
          <li><a href="Corruption">Corruption</a></li>
          <li><a href="Murders">Murders</a></li>
          <li><a href="abductions">Abductions</a></li>
        </ul>
      </div>

      <div class="navbar-section3">
        <span class="material-symbols-outlined">search</span>
        <span class="material-symbols-outlined">account_circle</span>
      </div>
    </div>
  )
}
