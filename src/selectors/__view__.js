import React, { Component } from 'react';


export const View = ({ 
    MOVE_TYPE,
    DAMAGE,
    BLOCK_DAMAGE,
    FBLOCK_DAMAGE,
    STARTUP,
    ACTIVE,
    RECOVERY,
    CANCEL_ADV,
    HIT_ADV,
    BLOCK_ADV,
    FBLOCK_ADV,
    VARIATION,
    PROPERTIES,
    DESCRIPTION,
    SENSOR
}) => (
    <div className={'frame-box order'} >
        <div>
            <div>
                <code>SENSOR</code>
                <span id="sensor" className="indicator">
                    <a href="/guides"><div></div></a>
                </span>
            </div>
            <div>
                <code>MOVE TYPE</code>
                <span>{MOVE_TYPE}</span>
            </div>
            <div>
                <code>DAMAGE</code>
                <span>{DAMAGE}</span>
            </div>
            <div>
                <code>BLOCK DAMAGE </code>
                <span>{BLOCK_DAMAGE}</span>
            </div>
            <div>
                <code> F/BLOCK DAMAGE</code>
                <span>{FBLOCK_DAMAGE}</span>
            </div>
            <div>
                <code>VARIATION</code>
                <span>{VARIATION}</span>
            </div>
            <div>
                <code>DESCRIPTION</code>
                <span>
                    {DESCRIPTION.map((text, i) => <li key={i} >{text}</li>)} 
                </span>
            </div>
            <div>
                <code>PROPERTIES</code>
                    <span>{PROPERTIES.map((text, i) => <li key={i} >{text}</li>)}</span>
            </div>
        </div>
        <div>
            <div>
                <code>STARTUP</code>
                <span>{STARTUP}</span>
            </div>
            <div>
                <code>BLOCK ADV</code>
                <span>{BLOCK_ADV}</span>
            </div>
            <div>
                <code>HIT ADV</code>
                <span>{HIT_ADV}</span>
            </div>
            <div>
                <code>RECOVERY</code>
                <span>{RECOVERY}</span>
            </div>
            <div>
                <code>ACTIVE</code>
                <span>{ACTIVE}</span>
            </div>
            <div>
                <code>CANCEL ADV</code>
                <span>{CANCEL_ADV}</span>
            </div>
            <div>
                <code>F/BLOCK ADV</code>
                <span>{FBLOCK_ADV}</span>
            </div>
        </div>
    </div>
);