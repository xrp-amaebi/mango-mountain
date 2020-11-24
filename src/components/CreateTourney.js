import React from 'react';
import { Tournament } from './TournamentPage';


export const CreateTourney = (props) => (
<div className="create">
    <div>
            <a href="/"><i className="material-icons">arrow_back</i> </a>
        {/* <span className="rift"></span> */}
        <div>
            <h2>Create a Tournament</h2>
            <h5>You can begin building your community Profile by organising a competitive experience.</h5>
        </div>
        <div className="organize">
            <div>
                <img src="/web/indus.png" alt="" />
                <h2>Get Started</h2>
                <p>
                    Need help getting set? Best practices are found in our help guides.
                </p>
                <div className="rift"></div>
                <a>Get Started</a>
            </div>
            <div className="bracket image">
                <img src="img/bracket.png" alt="bracket"/>
            </div>
        </div>
    </div>
    <div>
        <div>
            <h2>Find Tournament</h2>
            <h5>Search in Your community for Events Near You To Register and Participate for Free.</h5> 
        </div>
        <div className="organize">
            <div>
                <img src="/web/ideas.png" alt="" />
                <h2>Search</h2>
                <p>
                    Looking for an Event? You can register for Free on published events to participate.
                </p>
                <div className="rift"></div>
                <a href="/tournaments">Find Event</a>
            </div>
            <div className="bracket image">
                <img src="img/bracket.png" alt="bracket"/>
            </div>
        </div>
    </div>
</div>)