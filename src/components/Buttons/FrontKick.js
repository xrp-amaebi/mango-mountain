import React from 'react';
import { connect } from 'react-redux';


export const FRONT_KICK = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>3</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"front-kick"}
                src={`${'img/ps4/cross.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"front-kick"}
                src={`${'img/xb1/a.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"front-kick"}
                src={`${'img/universal/3.png'}`}
                className={'universals'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(FRONT_KICK);