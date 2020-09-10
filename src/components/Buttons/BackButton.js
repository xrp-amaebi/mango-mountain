import React from 'react';
import { connect } from 'react-redux';


export const DPAD_LEFT = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>B</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"back"}
                src={`${'img/ps4/left.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"back"}
                src={`${'img/xb1/left.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"back"}
                src={`${'img/universal/left.png'}`}
                className={'universal'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(DPAD_LEFT);
