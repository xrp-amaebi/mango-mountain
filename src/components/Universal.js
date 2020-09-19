import React from "react";
import { Header } from "./Header";
import Kontroller from '../components/SelectForm';
import { Link } from 'react-router-dom';
import Amplify from "./Buttons/AmplifyButton";
import BackPunch from "./Buttons/BackPunch";
import FrontPunch from "./Buttons/FrontPunch";
import Back from "./Buttons/BackButton";
import Forward from "./Buttons/FrontButton";
import Up from "./Buttons/UpButton";
import BackKick from "./Buttons/BackKick";
import Block from "./Buttons/BlockButton";
import Down from "./Buttons/DownButton";
import FrontKick from "./Buttons/FrontKick";
import Throw from "./Buttons/ThrowButton";


export const Universal = () => (
    <div>
        <div className="Header">
            <Header />
        </div>
        <div className="Menu">

        </div>
        <div className="Content">
            <div className={'universal'}>
                <div>
                    <h2>UNIVERSAL CONTROLLER PRESET</h2>
                    <p>
                        This is an accepted preset adopted to alleviate controversy in understanding what buttons refer to each controller input across the widespread conventional methods(SONY, XBOX, PC, Nintendo).<br />
                    </p>
                    <p>
                        To begin with please avoid the use of Analog Sticks for Mortal Kombat or any NRS game, always stick to the D-PAD and simply slide across or rythmically dial-in inputs.<br />
                    </p>
                    <p><i>Get Familiar with the Notations and Terminologies for Playing</i></p>
                    <table className={'table'}>
                        <tbody className={'table__body'}>
                            <tr className={'table__row'}>
                                <td >{'[U]'}</td>
                                <td><Up /></td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[F]'}</td>
                                <td><Up /></td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[D]'}</td>
                                <td><Down /></td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[B]'}</td>
                                <td><Back /></td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[1]'}</td>
                                <td><FrontPunch /></td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[2]'}</td>
                                <td><BackPunch /></td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[3]'}</td>
                                <td><FrontKick /></td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[4]'}</td>
                                <td><BackKick /></td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[AMPLIFY]'}</td>
                                <td><Amplify /></td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[BLOCK]'}</td>
                                <td><Block /></td>
                            </tr>
                        </tbody>
                        <caption>BUTTONS</caption>
                    </table>
                    <div className={'rift'}></div>
                    <table className={'table'}>
                        <caption>TERMS 'N NOTATIONS</caption>
                        <tbody className={'table__body'}>
                            <tr className={'table__row'}>
                                <td >{'[N]'}</td>
                                <td>{"NEUTRAL"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[S]'}</td>
                                <td>{"STRING"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[AA]'}</td>
                                <td>{"ANTI-AIR"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[NJP]'}</td>
                                <td>{"NEUTRAL JUMP PUNCH"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[NJK]'}</td>
                                <td>{"NEUTRAL JUMP KICK"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[>]'}</td>
                                <td>{"SPECIAL CANCEL"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[xx]'}</td>
                                <td>{"CANCEL"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[DC]'}</td>
                                <td>{"DASHCANCEL"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[KB]'}</td>
                                <td>{"KRUSHING BLOW"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[FB]'}</td>
                                <td>{"FATAL BLOW"}</td>
                            </tr>
                            <tr className={'table__row'}>
                                <td >{'[FLB]'}</td>
                                <td>{"FLAWLESS BLOCK"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <div>
                    <h2>ATTACKS AND HOW TO DEFEND THEM </h2>
                    <p>
                        In this game and most fighting games there are multiple types of attack, here I will be showing you their types and how to best defend against them.
                    </p>
                    <h3>HIGHS</h3>
                    <p>You simply duck in the neutral without holding the Block Button, highs are good for anti-airing jumping opponents mid-air</p>
                    <h3>LOW</h3>
                    <p>You must duck while holding the Block Button </p>
                    <h3>OVERHEADS</h3>
                    <p>You simply hold the Block Button while Standing to defend against this kind of attack, Overheads will crush any ducking opponent</p>
                    <h3>MIDS</h3>
                    <p>You cannot duck in the neutral against mids, you must hold block button, Mids are good for building Pressure and setting up throws</p>
                    <h3>THROWS</h3>
                    <p>Like Highs You may duck in the neutral against throws to make them Whiff or jump out of position with a Hop, you cannot hold block button. Front throws are tech-ed with the Back Punch/Kick Button and Back Throws can be tech-ed with Front Punch/Kick Button on read after a Throw.</p>
                    <h3>COMMAND THROWS</h3>
                    <p>
                        Command Throws could either hit as HIGHS or MIDS then You may DUCK in the neutral against high command-throws to make them Whiff or jump out of position, but You must jump out of MID COMMAND-THROWS you cannot hold block button at all or DUCK.<br />
                        Please Note COMMAND THROWS CANNOT BE TECH-ED
                    </p>
                    <h3>UNBLOCKABLES</h3>
                    <p>
                        As the name implies, you have to get out of dodge with attacks like this by either jumping away or performing a forward Dash or Backdash.
                    </p>
                </div>
                <div>
                    <h2>FRAME DATA</h2>
                    <p>
                        A frame can be simply understood as cycle (length of frame) associated with an animation. The smallest unit being a 'just-frame' with an index of one.
                    </p>
                    <p>
                        Frame data in a figthing game sense is the property of any animation that gives information pertaining to the length of frames of a(n) attack/move.
                        This makes knowledge of frame data immensely advantageous to any fighting gamer because it will assist in determination of the next best course of action in different match situations.
                    </p>
                    <section>
                        <p>
                            The principal tool every fighting Gamer needs to understand in their toolbox is frame data.<br />
                        Fighting game franchises follow different design conventions for player to player dynamism hence titles have their own meta/build but under the hood, however the core mechanics of fighting games are still preserved with each release of a balanced competitive franchise.<br />
                        Hence the frame data shows the limitations of playable characters in any FGC franchise.
                    </p>
                        <p>
                            Generally the main principle of frame data is the lesser the number on STARTUP the better the move, well the three main cycles of a move are namely the STARTUP, ACTIVE, RECOVERY.<br />
                        These main cycles govern the risk associated with any move, this risk is understood as SAFE, MOSTLY SAFE, UNSAFE.<br />
                        A frame chart is prepared below that color codes to enhance the perception of said risk.
                    </p>
                        <h3>STARTUP</h3>
                        <p>
                            This is how Fast a move comes out, it defines, startups of normals should be used as those of strings only indicate the startup of the last input of the kombo.
                    </p>
                        <h3>BLOCK ADVANTAGE</h3>
                        <p>
                            This only comes in play when an attack is blocked successfully, an opponent can lose their attacking momentum after a block depending on the magnitude of the block adv.<br />
                        In summary the more the value on block the better the advantage of the move and you keep your turn, the lesser you lose your turn.
                    </p>
                    </section>
                </div>
                <div>
                    <h2>MORE TERMS</h2>
                    <h3>PUNISH</h3>
                    <p>
                        This means that
                        </p>
                </div> */}
            </div>
        </div>
        <div className="footer">
            <Kontroller />
        </div>
    </div>
);