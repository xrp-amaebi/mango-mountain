import React from "react";
import { Link } from 'react-router-dom';
import BackPunch from "./Buttons/BackPunch";
import { Header } from "./Header";


export const Universal = () => (
    <div>
        <Header />
        <h1>Universal Input Preset - UPI</h1>
        <p>
            This is a widely accepted preset adopted to alleviate controversy in understanding buttons referrring to controller input across conventional preset types (SONY, XBOX, PC, Nintendo).
        </p>
        <ul>
            <li>{'[U]'}, Up</li>
            <li>{'[F]'}, Forward</li>
            <li>{'[D]'}, Down</li>
            <li>{'[B]'}, Back</li>
        </ul>
        <ul>
            <li> {'[1]'}, {"Square"}, {"[X]"}, Front Punch </li>
            <li> {'[2]'}, {"Triangle"}, { "[Y]"}, Back Punch</li>
            <li> {'[3]'}, {"Cross"}, { "[A]"}, Front Kick</li>
            <li> {'[4]'}, {"Circle"}, { "[B]"}, Back Kick</li>

        </ul>
        <ul>
            <li>{'[N]'}, Neutral</li>
            <li>{'[N]'}, Normal</li>
            <li>{'[S]'}, String</li>
            <li>{'[S]'}, Special</li>
        </ul>
        <section>
            <h2>Frame Data</h2>
            <p>
                The principal tool every fighting Gamer needs to understand in their toolbox is frame data. 
                Generally Fighting game franchises follow different design conventions for player to player dynamism hence titles have their own meta/build but under the hood, the core mechanics of fighting games are preserved with each release of a balanced competitive franchise.
                Hence the frame data shows the limitations of playable characters in any FGC franchise.
            </p>
            <p>
                Some titles are less obvious than others, while others are easily accesible within the game, but the data is infact present under the hood with all fighting games.
                <Link to='/movelist'>{'START => MOVELIST'}</Link>
            </p>
        </section>

        <blockquote>
            A frame can be simply understood as cycle (length of frame) associated with an animation. The smallest unit being a 'just-frame' with an index of one.
        </blockquote>
        <p>
            Frame data in a figthing game sense is the property of any animation that gives information pertaining to the length of frames of a(n) attack/move.
            This makes frame data immensely advantageous to any fighting gamer because knowledge of the frame data of a move will assist in determination of the next best course of action in different match situations.
        </p>

        <section>
            <h2></h2>
            <p>
                Every move has its frame data that drives the animation, but the frames have relatively short cycles between their animation, Generally three main cycles make-up the frame-data of a move. 
            </p>
            <ul>
                <li><Link to='/active'>Active</Link></li>
                <li><Link to='/recovery'>Recovery</Link></li>
                <li><Link to='/startup'>Startup</Link></li>
            </ul>
            <p>
                These main cycles govern the risk associated with any move, this risk is understood as <Link to='/safe'>Safe</Link>, <Link to='/safe'>Mostly Safe => Unsafe</Link>.
            </p>
        </section>
    </div>

);