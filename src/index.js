import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Header = (
    <div>
        <div class="menu-header">
        <img src="../images/ironhack-logo.svg" alt="ironhack" />
        <img src="../images/menu-top.svg" alt="menu-top" />
        </div>
    </div>
)

ReactDOM.render(Header, document.getElementById('header'));

const Body = (
    <div class ="body-content">
        <h1>
           Say hello to 
           <br />ReactJS
        </h1>
        <p class="description">
            You will learn how to use <br />the most popular frontend library <br />and become a super Ninja developer.
        </p>
        <span class="button">Awesome!</span>
    </div>
)

ReactDOM.render(Body, document.getElementById('root'));

const BottomRow= (
    <div class ="bottom-row">
        <div class="bottom-row-element">
        <img src="../images/icon1.png" alt="icon1" />
        <h3>Declarative</h3>
        <p class="bottom-row-element-text">React makes it painless to create interatice UIs.</p>
        </div>
        <div class="bottom-row-element">
        <img src="../images/icon2.png" alt="icon1" />
        <h3>Components</h3>
        <p class="bottom-row-element-text">Build encapsulated components that manage their state.</p>
        </div>
        <div class="bottom-row-element">
        <img src="../images/icon3.png" alt="icon1" />
        <h3>Single-Way</h3>
        <p class="bottom-row-element-text">A set of immutable values is passed to the components.</p>
        </div>
        <div class="bottom-row-element">
        <img src="../images/icon4.png" alt="icon1" />
        <h3>JSX</h3>
        <p class="bottom-row-element-text">Statically-typed. Designed to run on modern browsers.</p>
        </div>
    </div>
)

ReactDOM.render(BottomRow, document.getElementById('bottom-picture-row'));