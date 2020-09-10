import React from 'react';
import { connect } from 'react-redux';
import { PassPort } from './KharacterDashBoard';
import selectKharacter from '../selectors/kharacters';


export const KharacterList = ({ platform, selectKharacter, filters }) => {
    return (
        <div className={'kontainer'}>
            {
                selectKharacter.length === 0 || filters.text === '' ?
                    <p></p>
                :
                    selectKharacter.map(link => <PassPort key={platform.kharacters[link].id} {...platform.kharacters[link]} />)
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    ...state,
    selectKharacter: selectKharacter(Object.keys(state.platform.kharacters), state.filters)
});

export default connect(mapStateToProps)(KharacterList);