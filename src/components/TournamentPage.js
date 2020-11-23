import React from 'react';
import { connect } from 'react-redux';


export const Tournaments = (props) => {
    const kini = ''
    return(
        <div className={'tournament_home'}>
        <div className="card-container">
            <div className='card'>
                <div className="card-image image">
                    <img src="/img/carousel/9.jpg" alt="evo__event__card"/>
                </div>
                <div className="card-body">
                        <div><h4><i className="material-icons">verified_user</i> | EVO CHAMPIONSHIP SERIES</h4></div>
                        <div><i className="material-icons">access_time</i> | 07/07/2025 - 11/07/2025</div>
                        <div><i className="material-icons">location_disabled</i> | ONLINE (Europe, North-America, Asia)</div>
                        <div><i className="material-icons">call</i> | +(555) - 231-460</div>
                        <div><i className="material-icons">email</i> | evo@supportmail.com</div>
                        <a href={`tournament/${kini}`}><i className="material-icons">remove_red_eye</i></a>
                </div>   
            </div>

            <div className='card'>
                <div className="card-image image">
                    <img src="/img/carousel/6.jpg" alt="dreamhack__event__card"/>
                </div>
                <div className="card-body">
                        <div><h4><i className="material-icons">verified_user</i> | DREAMHACK WINNERSCUP SERIES</h4></div>
                    <div><i className="material-icons">access_time</i> | 16/08/2025 - 20/08/2025</div>
                    <div>OFFLINE - 0xygen Arena, Grand Palace</div>
                    <div><i className="material-icons">location_on</i> | Massachusstets, USA</div>
                    <div><i className="material-icons">call</i> | +(555) - 555-315</div>
                    <div><i className="material-icons">email</i> | dreamhack@supportmail.com</div>
                    <a href={`tournament/${kini}`}><i className="material-icons">visibility</i></a>
                </div>
            </div>
        </div>
    </div>
    )
}