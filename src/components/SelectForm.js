import React from 'react';
import { connect } from 'react-redux';
import { selectController } from '../actions/platform';


export class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     ...this.props.platform
        // };
    };
    
    onChange = (e) => {
        e.persist();
        const platform = e.target.value;
        if (platform) {
            this.props.selectController({ platform });
        };
    };

    render() {  
        return(
            <form id="select-platform">
                <select 
                    name="platform" 
                    onChange={this.onChange}
                    className={'button'}
                >
                    <option value="default">Select Kontroller</option>
                    <option value="ps4">Sony PlayStation Series</option>
                    <option value="xb1">Microsoft Xbox Series</option>
                    <option value="universal">Universal PC Kontroller</option>
                </select>
            </form>
        );
    };
};

const mapStateToProps = (state) => ({
    ...state.platform
});

const mapDispatchToProps = (dispatch) => ({
    selectController: (state) => dispatch(selectController(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectForm);