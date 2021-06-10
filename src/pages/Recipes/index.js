import React from 'react';
import './style.css'
import CardComida from '../../components/CardComida'
import Recive1 from '../../assets/comida_1.svg';
import Recive2 from '../../assets/comida_2.svg';
import Recive3 from '../../assets/comida_3.svg';
import Recive4 from '../../assets/comida_4.svg';

export default function Recipes() {
    return (
      <div className="recipes">
        <div className="text-recipes">
            <h1>Our Best Recipes</h1>
            <p>Far far away, behind the word mountains, far from the countries<br/>
               Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="reci1">
            <CardComida image={Recive1} altbox="img box comida" recipe="Broccoli Salad with Bacon"/>
            <CardComida image={Recive2} altbox="img box comida" recipe="Classic Beef Burgers"/>            
        </div>
        <div className="reci2">
            <CardComida image={Recive3} altbox="img box comida" recipe="Classic Potato Salad"/>
            <CardComida image={Recive4} altbox="img box comida" recipe="Cherry Cobbler on the Grill"/>
        </div>
      </div>
    );
  }