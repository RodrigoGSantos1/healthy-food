import React from 'react';
import Illustration from '../../assets/Illustration.svg';
import '../Home/home.css'
import Recipes from '../Recipes'
import Page3 from '../page3'
import Blog from '../Blog'
import Inscrevase from '../Increvase'
import { Search } from 'react-feather';

export default function Home() {
  return (
    <div className="healthy-food">
        <div className="home">
            <div className="text-home">
                <h1>Ready for <br/> Trying a new <br/> recipe?</h1>
                <div className="input-box">
                    <input placeholder="Search Healthy recipes"/>
                    <button className="button-shearch"><Search/></button>
              </div>
            </div>
            <div className="illustration_home">
                <img src={Illustration} alt="ilustração home"/>
            </div>
        </div>
        <Recipes />
        <Page3 />
        <Blog/>
        <Inscrevase/>
    </div>
    
  );
}