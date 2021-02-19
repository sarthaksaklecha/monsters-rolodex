import React from 'react';
import './CardList.css'
import {Card} from '../Card/Card.component.jsx'

export const CardList = (props) => (
    <div className='card-list'>
        {props.monsters.map(monster=> <Card key={monster.id} monster ={monster}/>)}
    </div>
)