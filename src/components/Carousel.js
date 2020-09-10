import React from 'react';
import Carousel from 'react-elastic-carousel';

export class Karousel extends React.Component {
    state = {
        items: [
            {id: 1, url: "img/carousel/school2.jpg"},
            {id: 2, url: "img/carousel/Dream.jpg"},
            {id: 3, url: "img/carousel/commentary.jpg"},
        ]
    };

    render() {
        const { items } = this.state;
        return(
            <Carousel>
                {items.map(item => <div key={item.id}><img src={item.url} alt=""/></div> )}
            </Carousel>
        );
    };
};