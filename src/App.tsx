import React, { useState } from 'react';
import Ball from "./componens/Ball/Ball";
import './App.css';

const generateRandomNumbers = (): number[] => {
    const numbers: number[] = [];
    while (numbers.length < 5) {
        const num = Math.floor(Math.random() * 28) + 5;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers.sort((a, b) => a - b);
};

const App: React.FC = () => {
    const defaultNumbers = [5, 11, 16, 23, 32];
    const [numbers, setNumbers] = useState<number[]>(defaultNumbers);

    const handleNewNumbers = () => {
        setNumbers(generateRandomNumbers());
    };

    return (
        <div className="App">
            <div className="numbers">
                {numbers.map((num) => (
                    <Ball key={num} number={num} />
                ))}
            </div>
            <button className='app-btn' onClick={handleNewNumbers}>New numbers</button>
        </div>
    );
};

export  default App;