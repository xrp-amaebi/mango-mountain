import React from 'react';
import { connect } from 'react-redux';


export const RIGHT_TRIGGER = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>[BLOCK]</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"block"}
                src={`${'img/ps4/r2.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"block"}
                src={`${'img/xb1/rt.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <code>[BLOCK]</code>
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(RIGHT_TRIGGER);