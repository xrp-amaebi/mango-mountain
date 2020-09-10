import React from 'react';
import { connect } from 'react-redux';


export const BACK_PUNCH = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>2</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"back-punch"}
                src={`${'img/ps4/triangle.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"back-punch"}
                src={`${'img/xb1/y.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <img
                alt={"back-punch"}
                src={`${'img/universal/2.png'}`}
                className={'universal'}
            />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(BACK_PUNCH);