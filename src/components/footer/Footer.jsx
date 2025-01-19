import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear(); 
    setYear(currentYear);
  }, []);

  return (
    <div className="footer">
      <div className="frame4">
        <div className="frame4-top">
          <h1>Popular Topics</h1>
          <div className="frame4-top-section">
            <div className="card1">
              <a href="https://hakiafrica.or.ke/2025/01/09/unmasking-the-shadows-addressing-abductions-in-kenya-for-justice-and-change/">
                Abductions
              </a>
            </div>
            <div className="card1">
              <a href="#">Economy</a>
            </div>
            <div className="card1">
              <a href="#">Corruption</a>
            </div>
            <div className="card1">
              <a href="#">Fufua ICC</a>
            </div>
            <div className="card1">
              <a href="#">Gen Z Protests</a>
            </div>
            <div className="card1">
              <a href="#">Reject Finance Bill 2024</a>
            </div>
            <div className="card1">
              <a href="#">Education</a>
            </div>
            <div className="card1">
              <a href="#">Health</a>
            </div>
          </div>
        </div>
        <div className="frame4-bottom">
          <div className="col1 col">
            <h2>Ruto Must Go</h2>
            <p>Your trusted source for news and analysis</p>
            <p>&copy; <span>{year}</span>. All Rights Reserved.</p>
          </div>
          <div className="col2 col">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>
          <div className="col3 col">
            <h2>Categories</h2>
            <ul>
              <li>
                <a href="#">Politics</a>
              </li>
              <li>
                <a href="#">Economy</a>
              </li>
              <li>
                <a href="#">Society</a>
              </li>
            </ul>
          </div>
          <div className="col4 col">
            <h2>Follow Us</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/jonathan.mwaniki.127">
                  <span className="bi-facebook"></span>
                </a>
              </li>
              <li>
                <a href="https://x.com/Maestropuns">
                  <span className="bi-twitter"></span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jonaahrojo/">
                  <span className="bi-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
