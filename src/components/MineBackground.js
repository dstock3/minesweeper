import React from 'react'
import ReactDOM from 'react-dom'
import mineImg from '../assets/mine.png'
//import '../mine-design.css'

function determineWidth() {
    let base = Math.random() * (3 - 1) + 3;

    return `${base * 50}px`
}

function determinePosition() {
    let xAxis = Math.floor(Math.random(1) * 85);
    let yAxis = -10;
    return {horizontal: `${xAxis}%`, vertical:`${yAxis}%`} 
}

function createMine() {
    let minePosition = determinePosition()

    let newMine = {
        position: `absolute`,
        left: minePosition.horizontal,
        top: minePosition.vertical,
        width: determineWidth(),
        opacity: '52%',
    }
    return newMine
}

function MineBackground({mineSet}) {
    const mineOneSpecs = createMine();
    const mineTwoSpecs = createMine();
    const mineThreeSpecs = createMine();

    return ReactDOM.createPortal (
        <>
            <img className="mine-design" src={mineImg} alt="mine" style={mineOneSpecs}></img>

            <img className="mine-design" src={mineImg} alt="mine" style={mineTwoSpecs}></img>

            <img className="mine-design" src={mineImg} alt="mine" style={mineThreeSpecs}></img>
        </>, 
        document.getElementById(mineSet)
    )
}

export default MineBackground
