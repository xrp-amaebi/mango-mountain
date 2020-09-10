import React from 'react';
import { connect } from 'react-redux';


export const BACK_KICK = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>4</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"back-kick"}
                src={`${'img/ps4/circle.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"back-kick"}
                src={`${'img/xb1/b.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"back-kick"}
                src={`${'img/universal/4.png'}`}
                className={'universal'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(BACK_KICK);