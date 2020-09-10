import React from 'react';
import { connect } from 'react-redux';


export const DPAD_DOWN = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>D</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"down"}
                src={`${'img/ps4/down.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"down"}
                src={`${'img/xb1/down.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"crouch"}
                src={`${'img/universal/down.png'}`}
                className={'universal'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(DPAD_DOWN);