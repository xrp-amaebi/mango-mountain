import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassPort } from '../components/KharacterDashBoard';
import { displayInputs } from '../selectors/__movelist__';
import { Header } from '../components/Header';
import { View } from './__view__';
import { NotFound } from '../components/NotFound';
import Kontroller from '../components/SelectForm';


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
        const sensor = document.getElementById('sensor');
        let value = '';
        if( read == 0 ) {
            value = "ADVANTAGE"
        } else if (read < 0) {
            if( read < -7 ){
                value = "UNSAFE"
                if (read < -11) {
                    value = "PUNISH"
                }
            } else {
                value = "SAFE"
            }
        } else if (read > 0 ) {
            value = 'PLUS_FRAME'
        } else {
            value = 'PUNISH';
        };   
        
        switch (value) {
            case 'SAFE':
                this.setState({ SENSOR: 'BLUE'});
                return sensor.style.backgroundColor = 'blue';;
            case 'PUNISH':
                this.setState({ SENSOR: 'RED' });
                return sensor.style.backgroundColor = 'red';
            case 'UNSAFE':
                this.setState({ SENSOR: 'GRAY' });
                return sensor.style.backgroundColor = 'gray';
            case 'ADVANTAGE':
                this.setState({ SENSOR: 'PURPLE' });
                return sensor.style.backgroundColor = 'purple';
            case 'PLUS_FRAME':
                this.setState({ SENSOR: 'GOLD' });
                return sensor.style.backgroundColor = 'gold';
            default:
                this.setState({ SENSOR: 'WHITE' });
                return sensor.style.backgroundColor = 'white';;
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
                    <div className={'content-container'}>
                        <img src={`${KHARACTER.fullImg ? KHARACTER.fullImg : null}`} />
                    </div>
                    <div className={'content-container button-handle'} id={'nameTag'} >
                        {KHARACTER.bioText ? KHARACTER.bioText : 'N/A'}
                    </div>
                    <div className="content-container content-shift">
                        <div className={'frame-box  dataScroll view'}>
                            <span className={'button-handle'}>
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
                            {
                                KHARACTER ?
                                   KHARACTER[COMMAND].map((obj, i) => {
                                        return (
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
                                        )
                                    })
                                    :
                                    ('')
                            }
                        </div>
                        <View  {...this.state} sensor={this.onSensor} />
                    </div>
                    <div className={'rift'}></div>
                    <div className={'content-container kontainer'}>
                        {
                            KAST.map(key => <button className={'button--link'} onClick={() => this.onPress(key)}>
                                <PassPort {...this.props.kharacters[key]} />
                            </button>

                            )
                        }
                    </div>
                    <div className={'rift'}></div>
                    <footer className={'footer'}>
                        <code>...version 1.19 </code>
                        <Kontroller />
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