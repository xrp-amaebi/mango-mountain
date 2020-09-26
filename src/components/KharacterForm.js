import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/Router';
import { selectKharacter } from '../actions/platform';


export class KharacterForm extends React.Component {
    constructor(props) {
        super(props);
    };

    onChange = (e) => {
        e.persist();
        const KHARACTER = e.target.value;
        history.push(`/${KHARACTER}`);
        if (KHARACTER) {
            this.props.selectKharacter({ KHARACTER });
            window.location.reload(true);
        };
        console.log('finished');
        console.log(this.props.KHARACTER);
    };

    render() {
        return (
            <div>
                <form id="select-kharacter">
                    <select
                        name="platform"
                        onChange={this.onChange}
                        className={'button'}
                    >
                        <option action='submit' value="default">Kharacter Select</option>
                        <option value="baraka">Baraka</option>
                        <option value="cassie">Cassie</option>
                        <option value="cetrion">Cetrion</option>
                        <option value="dvorah">Dvorah</option>
                        <option value="erron">Erron</option>
                        <option value="frost">Frost</option>
                        <option value="fujin">Fujin</option>
                        <option value="geras">Geras</option>
                        <option value="jacqui">Jacqui</option>
                        <option value="jade">Jade</option>
                        <option value="jax">Jax</option>
                        <option value="johnny">Johnny</option>
                        <option value="joker">Joker</option>
                        <option value="kabal">Kabal</option>
                        <option value="kano">Kano</option>
                        <option value="kitana">Kitana</option>
                        <option value="kollector">Kollector</option>
                        <option value="kotal">Kotal</option>
                        <option value="kunglao">Kunglao</option>
                        <option value="liukang">Liukang</option>
                        <option value="nightwolf">Nightwolf</option>
                        <option value="noob">Noob</option>
                        <option value="raiden">Raiden</option>
                        <option value="robocop">Robocop</option>
                        <option value="scorpion">Scorpion</option>
                        <option value="shang">ShangTsung</option>
                        <option value="shao">ShaoKahn</option>
                        <option value="sheeva">Sheeva</option>
                        <option value="sindel">Sindel</option>
                        <option value="skarlet">Skarletl</option>
                        <option value="sonya">Sonya</option>
                        <option value="spawn">Spawn</option>
                        <option value="subzero">Subzero</option>
                        <option value="terminator">Terminator</option>                      
                    </select>
                </form>
            </div>  
        );
    };
};

const mapStateToProps = (state) => ({
    ...state.platform
});

const mapDispatchToProps = (dispatch) => ({
    selectKharacter: (state) => dispatch(selectKharacter(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KharacterForm);