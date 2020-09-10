import React from 'react';
import { connect } from 'react-redux';


export const FRONT_PUNCH = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>1</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"front-punch"}
                src={`${'img/ps4/square.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"front-punch"}
                src={`${'img/xb1/x.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"front-punch"}
                src={`${'img/universal/1.png'}`}
                className={'universal'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(FRONT_PUNCH);