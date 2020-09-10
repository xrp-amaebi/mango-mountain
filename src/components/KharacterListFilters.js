import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/filters';


export class KharacterFilter extends React.Component {
    onTextChange = e => this.props.setFilter(e.target.value);

    render() {
        return (
            <div className={'input-group'}>
                <input
                    type={'text'}
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                    placeholder={'Generate your fighter...'}
                    className={'input-group__item'}
                />
            </div>
        );
    };
};


const mapSateToProps = (state) => {
    return {
        filters: state.filters,
    }
};

const mapDispatchToProps = (dispatch) => ({
    setFilter: (target) => dispatch(setFilter(target))
});

export default connect(mapSateToProps, mapDispatchToProps)(KharacterFilter);