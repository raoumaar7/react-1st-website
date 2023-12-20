import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout these epic cards.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-9.jpg'
                text='Explore the hidden waterfall'
                label='Adventure'
                path='/services'
                />
                <CardItem 
                src='images/img-2.jpg'
                text='Travel through the island'
                label='Sea'
                path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-3.jpg'
                text='Set sail in atlantic ocean.'
                label='Sea'
                path='/services'
                />
                <CardItem 
                src='images/img-4.jpg'
                text='Play some football and get fit.'
                label='Sports'
                path='/services'
                />
                <CardItem 
                src='images/img-8.jpg'
                text='Be a part of camel tour in the Sahara Desert.'
                label='Adventure'
                path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
