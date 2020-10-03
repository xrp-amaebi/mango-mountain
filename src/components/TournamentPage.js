import React from 'react';
import { connect } from 'react-redux';


export const Tournament = (props) => {

    const brackets = {
        user1: {
            name: 'Phederal',
            points: 11,
            nationality: 'NGN'
        },
        user2: {
            name: 'King',
            points: 13,
            nationality: 'NGN'
        },
        user3: {
            name: 'Tiki',
            points: 18,
            nationality: 'NGN'
        },
        user4: {
            name: 'Crae',
            points: 19,
            nationality: 'NGN'
        },
        user5: {
            name: 'Phanstorm',
            points: 21,
            nationality: 'NGN'
        },
        user6: {
            name: 'SilentL',
            points: 24,
            nationality: 'NGN'
        }
    };

    const resolver = ({ user1, user2 }) => {
        return {
            B1: [user1['points'], user2['points']].reduce((a, b) => a > b ? a : b),
        };
    };

    resolver(brackets);

    return (
        <div>
            <svg width="765" height="216">
                <g className="parent">
                    <g></g>
                    <g>
                        <g transform="translate(0 0)" className="match-pending " data-identifier="1">
                            {/* <defs>
                                <clipPath id="match-clippath-1">
                                    <rect x="26" y="5" width="200" height="45" rx="3" ry="3"></rect>
                                </clipPath>
                            </defs> */}
                            {/* <text x="11" y="31" width="24" height="10" textAnchor="middle" className="match--identifier">1</text> */}
                            <rect x="24" y="3" width="204" height="49" rx="3" ry="3" className="match--wrapper-background "></rect>
                            <rect x="26" y="5" width="200" height="45" rx="3" ry="3" className="match--base-background"></rect>
                            <g clipPath="url(#match-clippath-1)">
                                <svg x="0" y="5" className="match--player">
                                    <title></title>
                                    <defs>
                                        <clipPath id="clipPath5838487">
                                            <rect x="50" y="0" width="143" height="22"></rect>
                                        </clipPath>
                                        <clipPath id="portraitClipPath5838487">
                                            <path></path>
                                        </clipPath>
                                    </defs>
                                    <path d="M 50 0 h 147 v 22 h -147 Z" className="match--player-background -empty"></path>
                                    <path d="M 26 0 h 24 v 22 h -24 Z" className="match--seed-background"></path>
                                    <text x="38" y="14" width="10" height="12" textAnchor="middle" className="match--seed">1</text>
                                </svg>
                                <svg x="0" y="28" className="match--player">
                                    <title></title>
                                    <defs>
                                        <clipPath id="clipPath8450026">
                                            <rect x="50" y="0" width="143" height="22"></rect>
                                        </clipPath>
                                        <clipPath id="portraitClipPath8450026">
                                            <path></path>
                                        </clipPath> 
                                    </defs>
                                    <path d="M 50 0 h 147 v 22 h -147 Z" className="match--player-background -empty"></path>
                                    <path d="M 26 0 h 24 v 22 h -24 Z" className="match--seed-background"></path>
                                    <text x="38" y="14" width="10" height="12" textAnchor="middle" className="match--seed">2</text>
                                    <line x1="26" y1="-0.5" x2="226" y2="-0.5" className="match--player-divider"></line>
                                </svg>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            {/* <svg width="765" height="216">
                <g class="parent"><g><g transform="translate(0 27)" class="bracket-line-container"><path d="M 228 1 L 236 1 L 236 54" class="bracket-line" data-line-length="68"></path></g><g transform="translate(0 81)" class="bracket-line-container"><path d="M 228 53 L 236 53 L 236 1 L 244 1" class="bracket-line" data-line-length="68"></path></g></g><g><g transform="translate(244 54)" class="match -pending " data-identifier="3"><defs><clipPath id="match-clippath-3"><rect x="26" y="5" width="200" height="45" rx="3" ry="3"></rect></clipPath></defs><text x="11" y="31" width="24" height="10" text-anchor="middle" class="match--identifier">3</text><rect x="24" y="3" width="204" height="49" rx="3" ry="3" class="match--wrapper-background "></rect><rect x="26" y="5" width="200" height="45" rx="3" ry="3" class="match--base-background"></rect><g clip-path="url(#match-clippath-3)"><svg x="0" y="5" class="match--player"><title></title><defs><clipPath id="clipPath3764461"><rect x="50" y="0" width="143" height="22"></rect></clipPath><clipPath id="portraitClipPath3764461"><path></path></clipPath></defs><path d="M 50 0 h 147 v 22 h -147 Z" class="match--player-background -empty"></path><path d="M 26 0 h 24 v 22 h -24 Z" class="match--seed-background"></path><text x="38" y="14" width="10" height="12" text-anchor="middle" class="match--seed"></text></svg><svg x="0" y="28" class="match--player"><title></title><defs><clipPath id="clipPath6082978"><rect x="50" y="0" width="143" height="22"></rect></clipPath><clipPath id="portraitClipPath6082978"><path></path></clipPath></defs><path d="M 50 0 h 147 v 22 h -147 Z" class="match--player-background -empty"></path><path d="M 26 0 h 24 v 22 h -24 Z" class="match--seed-background"></path><text x="38" y="14" width="10" height="12" text-anchor="middle" class="match--seed"></text><line x1="26" y1="-0.5" x2="226" y2="-0.5" class="match--player-divider"></line></svg></g></g><g transform="translate(0 108)" class="match -pending " data-identifier="2"><defs><clipPath id="match-clippath-2"><rect x="26" y="5" width="200" height="45" rx="3" ry="3"></rect></clipPath></defs><text x="11" y="31" width="24" height="10" text-anchor="middle" class="match--identifier">2</text><rect x="24" y="3" width="204" height="49" rx="3" ry="3" class="match--wrapper-background "></rect><rect x="26" y="5" width="200" height="45" rx="3" ry="3" class="match--base-background"></rect><g clip-path="url(#match-clippath-2)"><svg x="0" y="5" class="match--player"><title></title><defs><clipPath id="clipPath7005561"><rect x="50" y="0" width="143" height="22"></rect></clipPath><clipPath id="portraitClipPath7005561"><path></path></clipPath></defs><path d="M 50 0 h 147 v 22 h -147 Z" class="match--player-background -empty"></path><path d="M 26 0 h 24 v 22 h -24 Z" class="match--seed-background"></path><text x="38" y="14" width="10" height="12" text-anchor="middle" class="match--seed">2</text></svg><svg x="0" y="28" class="match--player"><title></title><defs><clipPath id="clipPath878441"><rect x="50" y="0" width="143" height="22"></rect></clipPath><clipPath id="portraitClipPath878441"><path></path></clipPath></defs><path d="M 50 0 h 147 v 22 h -147 Z" class="match--player-background -empty"></path><path d="M 26 0 h 24 v 22 h -24 Z" class="match--seed-background"></path><text x="38" y="14" width="10" height="12" text-anchor="middle" class="match--seed">3</text><line x1="26" y1="-0.5" x2="226" y2="-0.5" class="match--player-divider"></line></svg></g></g><g transform="translate(0 0)" class="match -pending " data-identifier="1"><defs><clipPath id="match-clippath-1"><rect x="26" y="5" width="200" height="45" rx="3" ry="3"></rect></clipPath></defs><text x="11" y="31" width="24" height="10" text-anchor="middle" class="match--identifier">1</text><rect x="24" y="3" width="204" height="49" rx="3" ry="3" class="match--wrapper-background "></rect><rect x="26" y="5" width="200" height="45" rx="3" ry="3" class="match--base-background"></rect><g clip-path="url(#match-clippath-1)"><svg x="0" y="5" class="match--player"><title></title><defs><clipPath id="clipPath3283294"><rect x="50" y="0" width="143" height="22"></rect></clipPath><clipPath id="portraitClipPath3283294"><path></path></clipPath></defs><path d="M 50 0 h 147 v 22 h -147 Z" class="match--player-background -empty"></path><path d="M 26 0 h 24 v 22 h -24 Z" class="match--seed-background"></path><text x="38" y="14" width="10" height="12" text-anchor="middle" class="match--seed">1</text></svg><svg x="0" y="28" class="match--player"><title></title><defs><clipPath id="clipPath5726105"><rect x="50" y="0" width="143" height="22"></rect></clipPath><clipPath id="portraitClipPath5726105"><path></path></clipPath></defs><path d="M 50 0 h 147 v 22 h -147 Z" class="match--player-background -empty"></path><path d="M 26 0 h 24 v 22 h -24 Z" class="match--seed-background"></path><text x="38" y="14" width="10" height="12" text-anchor="middle" class="match--seed">4</text><line x1="26" y1="-0.5" x2="226" y2="-0.5" class="match--player-divider"></line></svg></g></g></g></g>
            </svg> */}
        </div>
    );
};

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(Tournament);