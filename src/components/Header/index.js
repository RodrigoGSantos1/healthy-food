import React, { useState, useEffect } from "react";
import './styles.css';

export default function Header2() {
    const [header, setHeader] = useState("header");
  
    const listenScrollEvent = event => {
      if (window.scrollY < 73) {
        return setHeader("header");
      } else if (window.scrollY > 70) {
        return setHeader("header2");
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
  
      return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);
  
    return (
      <header className={header}>
            <h1>healthy food</h1>
            <h2>healthy reciples</h2>
            <h2>blog</h2>
            <h2>join</h2>
            <button className="button-header">
                <p>register</p>
            </button>
      </header>
    );
  }
