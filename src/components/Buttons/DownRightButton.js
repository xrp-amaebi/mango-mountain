import React from 'react';
import { connect } from 'react-redux';


export const DRIGHT_TRIGGER = ({ platform }) => (
    platform === 'default' ?
        <div>
            <code>DF</code>
        </div>
        :
        platform === 'ps4' ?
            <div>
                <img
                    alt={"block"}
                    src={`${'img/ps4/dr.png'}`}
                    className={'ps4'}
                />
            </div>
            :
            platform === 'xb1' ?
                <div>
                    <img
                        alt={"block"}
                        src={`${'img/xb1/dr.png'}`}
                        className={'xb1'}
                    />
                </div>
                :
                <div>
                    <img
                        alt={"block"}
                        src={`${'img/universal/down-right.png'}`}
                        className={'universals'}
                    />
                </div>
);

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(DRIGHT_TRIGGER);