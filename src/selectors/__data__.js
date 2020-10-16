import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/Router';
import { selectKharacter } from '../actions/platform';
import { PassPort } from '../components/KharacterDashBoard';
import { displayInputs } from '../selectors/__movelist__';
import { Header } from '../components/Header';
import { View } from './__view__';
import { NotFound } from '../components/NotFound';
import Kontroller from '../components/SelectForm';
import {Display} from '../selectors/__display__';
import { Video } from '../selectors/__video__';

export class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        const KAST = Object.keys(this.props.kharacters);
        
        const isValid = KAST.find(key => key == this.props.match.params.id);
        const KHARACTER = this.props.kharacters[this.props.KHARACTER];
        
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

    onPress = (e) => {
        const link = e.target.value;
        const KHARACTER = this.props.kharacters[e.target.value];
        if(KHARACTER) {
            history.push(`/${link}`);
            this.props.selectKharacter({ KHARACTER: link });
            return this.setState({
                KHARACTER
            });
        };
    };

    plusSlides = () => {
        let index = this.state.KAST.findIndex(key => {
            if (key === this.props.KHARACTER) {
                return key;
            }
        });

        if (index < this.state.KAST.length - 1 ) {
            const kharacter = this.state.KAST[index += 1];
            history.push(`/${kharacter}`);

            this.props.selectKharacter({ KHARACTER: kharacter });
            return this.setState({
                KHARACTER: this.props.kharacters[kharacter]
            });
        }
    }

    minusSlides = () => {
        let index = this.state.KAST.findIndex(key => {
            if (key === this.props.KHARACTER) {
                return key;
            };
        });

        if (index >= 1){
            const kharacter = this.state.KAST[index -= 1];
            history.push(`/${kharacter}`);
            this.props.selectKharacter({ KHARACTER: kharacter });
            return this.setState({
                KHARACTER: this.props.kharacters[kharacter]
            });
        };
    };   

        
 
    currentSlide(n){
        // this.showSlides(slideIndex = n);
    }  

    showSlides(n) {
        // const slides = document.getElementsByClassName("mySlides");
        // const dots = document.getElementsByClassName("dot");
        // let slideIndex = 1;
        // if (n > slides.length) { 
        //     slideIndex = 1 
        // }
        // if (n < 1) { 
        //     slideIndex = slides.length 
        // }
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        // }
        // for (let i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        // slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className += " active";
    }

   
    render() {
        history.push(`/${this.props.KHARACTER}`);
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
                        <a className="prev" onClick={this.minusSlides}>&#10094;</a>
                        <a className="next" onClick={this.plusSlides}>&#10095;</a>
                    </div>
                    <div className={'button-handle nameTag'}>
                        <button onClick={() => this.onCommand('BASIC_ATTACKS')}
                            className={'button button__one'}
                        >BASICS</button>
                        <button onClick={() => this.onCommand('KOMBO_ATTACKS')}
                            className={'button button__one'}
                        >KOMBOS</button>
                        <button onClick={() => this.onCommand('SPECIAL_MOVES')}
                            className={'button button__one'}
                        >SPECIALS</button>
                        <button onClick={() => this.onCommand('FINISHERS')}
                            className={'button button__one'}
                        >FINISHERS</button>
                    </div>
                    <div className="content-container">
                        <div className={'dataScroll lister'}>
                            {
                                KHARACTER ?
                                   KHARACTER[COMMAND].map((obj, i) => {
                                        return (
                                            <div className='list_container' key={i}>
                                                <div className='list_name'> 
                                                    {obj.INPUT_NAME ? obj.INPUT_NAME : 'N / A'}
                                                </div>
                                                <div className='list_input'>
                                                    <button className="lister__btn"
                                                        onClick={() => this.showData(obj)}
                                                    >{displayInputs(obj.INPUT_VALUE ? obj.INPUT_VALUE : 'N / A')}
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    ('')
                                }
                            </div>
                        <View  {...this.state} sensor={this.onSensor} />
                    </div>
                    <div className="rift"></div>
                    {/* <div class="slides-container">
                        {
                            KAST.map(key => <div class="mySlides fade"> 
                                <PassPort {...this.props.kharacters[key]} />
                            </div>
                            )
                        }
                        <a class="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
                        <a class="next" onClick={this.plusSlides(1)}>&#10095;</a>
                    </div>
                    <div class="dot-contain">
                        <span class="dot" onclick={this.currentSlide(1)}></span>
                        <span class="dot" onclick={this.currentSlide(2)}></span>
                        <span class="dot" onclick={this.currentSlide(3)}></span>
                    </div>*/}
                    <footer className={'footer'}>
                        <Kontroller />
                        <form id="select-kharacter">
                            <select
                                name="kharacter"
                                onChange={this.onPress}
                                className={'button'}
                            >
                                <option value="default">Kharacter Select</option>
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
                                <option value="mileena">Mileena</option>
                                <option value="nightwolf">Nightwolf</option>
                                <option value="noob">Noob</option>
                                <option value="raiden">Raiden</option>
                                <option value="rain">Rain</option>
                                <option value="rambo">Rambo</option>
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

const mapDispatchToProps = (dispatch) => ({
    selectKharacter: (state) => dispatch(selectKharacter(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);