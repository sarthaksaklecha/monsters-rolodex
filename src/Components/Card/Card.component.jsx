import React from 'react';
import './Card.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt='monster img here' src = {`https://robohash.org/${props.monster.id}?set=set2`}/>
        <h1> {props.monster.name} </h1>
        <p> {props.monster.email} </p>
    </div>
)