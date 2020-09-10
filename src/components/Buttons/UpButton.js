import React from 'react';
import { connect } from 'react-redux';


export const DPAD_UP = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>U</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"up"}
                src={`${'img/ps4/up.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"up"}
                src={`${'img/xb1/up.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"jump"}
                src={`${'img/universal/up.png'}`}
                className={'universal'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(DPAD_UP);