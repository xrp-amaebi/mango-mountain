import React from 'react';
import { connect } from 'react-redux';


export const LEFT_TRIGGER = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>[STANCE]</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"front-punch"}
                src={`${'img/ps4/l2.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"front-punch"}
                src={`${'img/xb1/lt.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"stance"}
                src={`${'img/universal/stance.png'}`}
                className={'universals'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(LEFT_TRIGGER);