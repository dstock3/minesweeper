import React from 'react'
import Minesweeper from './Minesweeper'
import { useState } from 'react';

const Main = () => {
    const [mineInst, setMineInst] = useState(0)
    return (
        <div className="main">
            <h1>Minesweeper</h1>
            <Minesweeper mineInst={mineInst} setMineInst={setMineInst} key={new Date().getTime()}/>
        </div>
    )
}

export default Main