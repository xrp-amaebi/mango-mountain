import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassPort } from '../components/KharacterDashBoard';
import { displayInputs } from '../selectors/__movelist__';
import { Header } from '../components/Header';
import { View } from './__view__';
import { NotFound } from '../components/NotFound';
import Kontroller from '../components/SelectForm';
import Form from '../components/KharacterForm';


export class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        const KAST = Object.keys(this.props.kharacters);
        const KHARACTER = this.props.kharacters[this.props.match.params.id];
        const isValid = KAST.find(key => key == this.props.match.params.id);
        this.state = {
            MOVE_TYPE: 'N/A',
            DAMAGE: 'N/A',
            BLOCK_DAMAGE: 'N/A',
            FBLOCK_DAMAGE: 'N/A',
            STARTUP: 'N/A',
            ACTIVE: 'N/A',
            RECOVERY: 'N/A',
            CANCEL_ADV: 'N/A',
            HIT_ADV: 'N/A',
            BLOCK_ADV: 'N/A',
            FBLOCK_ADV: 'N/A',
            VARIATION: 'ALL',
            PROPERTIES: ['N/A'],
            DESCRIPTION: ['N/A'],
            COMMAND: "BASIC_ATTACKS",
            SENSOR: '',
            KHARACTER,
            KAST,
            isValid
        };
    };

    onSensor(read) {
        
        let value = '';
        if( read >= 0) {
            value = "ADVANTAGE"
        } else if (read < 0) {
            if( read < -7 ){
                value = "UNSAFE"
                if (read < -11) {
                    value = "PUNISH";
                }
            } else {
                value = "SAFE";
            }
        } else {
            value = 'PLUS';
        };   
        
        let sensor = document.getElementById('sensor');
        switch (value) {
            case 'SAFE':
                this.setState({ SENSOR: 'BLUE'});
                sensor.style.setProperty('--theme-color', '#2196f3');
                break;
            case 'PUNISH':
                this.setState({ SENSOR: 'RED' });
                sensor.style.setProperty('--theme-color', '#f00');
                break;
            case 'UNSAFE':
                this.setState({ SENSOR: 'YELLOW' });
                sensor.style.setProperty('--theme-color', '#ff0');
                break;
            case 'ADVANTAGE':
                this.setState({ SENSOR: 'PURPLE' });
                sensor.style.setProperty('--theme-color', '#ff00ff');
                break;
            case 'PLUS':
                this.setState({ SENSOR: 'GREEN' });
                sensor.style.setProperty('--theme-color', '#0f0');
                break;
            default:
                this.setState({ SENSOR: 'WHITE' });
                sensor.style.setProperty('--theme-color', '#fff');
                break;
        };
    };

    showData({ MOVE_TYPE, DAMAGE, BLOCK_DAMAGE, STARTUP, FBLOCK_DAMAGE, ACTIVE, RECOVERY, CANCEL_ADV, HIT_ADV, BLOCK_ADV, FBLOCK_ADV, VARIATION, PROPERTIES, DESCRIPTION }) {
        const SENSOR = this.onSensor(BLOCK_ADV);
        return this.setState({
            MOVE_TYPE,
            DAMAGE,
            BLOCK_DAMAGE,
            FBLOCK_DAMAGE,
            STARTUP,
            ACTIVE,
            RECOVERY,
            CANCEL_ADV,
            HIT_ADV,
            BLOCK_ADV,
            FBLOCK_ADV,
            VARIATION,
            PROPERTIES,
            DESCRIPTION,
            SENSOR
        });
    };

    onCommand(COMMAND){
        return this.setState({
            COMMAND
        });     
    };

    onPress(key) {
        const KHARACTER = this.props.kharacters[key];
        return this.setState({
            KHARACTER
        });
    };

    render() {
        const { 
            isValid,
            KHARACTER,
            COMMAND,
            KAST
        } = this.state;
        
        if (isValid) {
            return (
                <div>
                    <Header />
                    <div className="rift"></div>
                    <div className={' button-handle nameTag'} id={'nameTag'}>
                        {KHARACTER.bioText ? KHARACTER.bioText : 'N/A'}
                    </div>
                    <div className={'image'}>
                        <img src={`${KHARACTER.fullImg ? KHARACTER.fullImg : null}`}  width='760'/>
                    </div>
                    <span className={'button-handle nameTag'}>
                        <button onClick={() => this.onCommand('BASIC_ATTACKS')}
                            className={'button button__one'}
                        >BASIC</button>
                        <button onClick={() => this.onCommand('SPECIAL_MOVES')}
                            className={'button button__one'}
                        >SPECIALS</button>
                        <button onClick={() => this.onCommand('KOMBO_ATTACKS')}
                            className={'button button__one'}
                        >KOMBO</button>
                        <button onClick={() => this.onCommand('FINISHERS')}
                            className={'button button__one'}
                        >FINISHERS</button>
                    </span>
                    <div className="rift"></div>
                    <div className="content-container">
                        <div className={'frame-box dataScroll'}>
                            {
                                KHARACTER ?
                                   KHARACTER[COMMAND].map((obj, i) => {
                                        return (
                                            <div>
                                                <table className={'table'} key={i}>
                                                    <tbody className={'table__body'}>
                                                        <tr className={'table__row'}>
                                                            <td >{obj.INPUT_NAME ? obj.INPUT_NAME : 'N / A'}</td>
                                                            <td>
                                                                <button
                                                                    onClick={() => this.showData(obj)}
                                                                >{displayInputs(obj.INPUT_VALUE ? obj.INPUT_VALUE : 'N / A')}
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>  
                                        )
                                    })
                                    :
                                    ('')
                            }
                        </div>
                        <View  {...this.state} sensor={this.onSensor} />
                    </div>
                    <footer className={'footer'}>
                        <Kontroller />
                        <Form />
                    </footer>
                </div>
            );
        } else {
            return (
                <NotFound /> 
            )
        }
        
    };
    
};                         

const mapStateToProps = (state) => ({ ...state.platform });

export default connect(mapStateToProps, undefined)(DashBoard);