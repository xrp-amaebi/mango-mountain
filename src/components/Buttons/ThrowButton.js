import React from 'react';
import { connect } from 'react-redux';
import { FRONT_PUNCH } from './FrontPunch';
import { FRONT_KICK } from './FrontKick';


export const LEFT_BUMPER = ({platform}) => (
    platform === 'default' ?
        <div>
            <code>[THROW]</code>
        </div>
    :
    platform === 'ps4' ?
        <div>
            <img
                alt={"throw"}
                src={`${'img/ps4/l1.png'}`}
                className={'ps4'}
            />
        </div>
    :
    platform === 'xb1' ?
        <div>
            <img
                alt={"throw"}
                src={`${'img/xb1/lb.png'}`}
                className={'xb1'}
            />
        </div>
    :
        <div>
            <FRONT_PUNCH />+<FRONT_KICK />
        </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(LEFT_BUMPER);