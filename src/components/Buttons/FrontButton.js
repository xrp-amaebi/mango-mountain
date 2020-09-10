import React from 'react';
import { connect } from 'react-redux';


export const DPAD_RIGHT = ({ platform }) => (
    platform === 'default' ?
        <div>
            <code>F</code>
        </div>
    :
    platform  === 'ps4' ? 
        <div>
            <img
                alt={"Forward"}
                src={`${'img/ps4/right.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"Forward"}
                src={`${'img/xb1/right.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"Forward"}
                src={`${'img/universal/right.png'}`}
                className={'universal'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(DPAD_RIGHT);