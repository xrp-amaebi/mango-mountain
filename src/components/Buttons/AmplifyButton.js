import React from 'react';
import { connect } from 'react-redux';


export const RIGHT_BUMPER = ({ platform }) => (
    platform === 'default' ?
        <div>
            <code>[AMP]</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"R1"}
                src={`${'img/ps4/r1.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"bumper-right"}
                src={`${'img/xb1/rb.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"amplify"}
                src={`${'img/universal/amp.png'}`}
                className={'universals'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(RIGHT_BUMPER);