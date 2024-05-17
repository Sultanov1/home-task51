import React from 'react';
import './Ball.css';

interface BallProps {
   number: number;
}

const Ball: React.FC<BallProps> = ({number}) => {
    return (
        <div className="container">
            <h3 className="random-number">{number}</h3>
        </div>
    );
};

export default Ball;