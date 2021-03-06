import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { addTier, removeTier, editFilter } from '../actions/platform';


export class TierList extends React.Component {

    constructor(props) {
        super(props);
        const KAST = this.props.kharacters;
        const KEYS = Object.keys(KAST);
        
        this.state = {
            NOT: ['S+', 'S', 'A'],
            KAST,
            KEYS
        };
    };

    addHandler(index) {
        this.state.NOT.splice(index + 1, 0, '' );
        this.setState({ NOT: this.state.NOT });
        this.render();
    };

    editHandler({ target }, index) {
        this.props.editFilter({
            index,
            target
        });
        console.log(this.props.not, 'edit');
    };

    removeHandler(index) {
        this.state.NOT.splice(index, 1)
        this.setState({ NOT: this.state.NOT });
        this.render();
    };

    onButton(e) {
        const object = document.getElementById(e);
        object.style.visibility = 'hidden';
        // e.target.style.display = 'none';

        const input = document.getElementById('main-input');
        const button = document.getElementById('main-button');

        input.style.display = 'block';
        button.style.display = 'block';
    };

    onInputButton(e) {
        const input = document.getElementById('main-input');

        const mainSpan = document.getElementById('main-span');
        mainSpan.innerText = input.value;

        e.target.style.display = 'none';
        input.style.display = 'none';
        mainSpan.style.display = 'block';
    };

    render() {
        return (
            <div>
                <Header />
                <div className="content__write">
                    <div>
                        <h3 className={'header__title'}>INSTRUCTIONS</h3>
                        <p>Create your own tier list by dragging characters to the list below.</p>
                        <p>To add, edit or remove a tier, click on their respective buttons on the left of the tiers.</p>
                        <p>Refresh Page if you lose your characters or your tiers.</p>
                    </div> 
                </div>
                <div className="rift"></div>
                <div>
                    {
                        this.state.NOT.map((tier, i) => <div className={'tier'} key={i}>
                            <div> 
                                <input type="text" id="main-input" value='submit'/>

                                <button id="main-button" onClick={this.onInputButton}>submit</button>
                            </div>
                            <div className="span" id={i}>
                                {tier}
                                <div className={'tier__option'}>
                                    <button onClick={() => this.removeHandler(i)}><i className="material-icons">remove</i></button>
                                    <button onClick={() => this.onButton(i)}><i className="material-icons">mode_edit</i></button>
                                    <button onClick={() => this.addHandler(i)} value={'ADD_TIER'}><i className="material-icons">add</i></button>
                                </div>
                            </div>
                            <div className='tier-list'
                                id={`${tier}`}
                                key={tier}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={this.eventHandler}
                            >
                            </div>
                        </div>
                        )
                    }
                    <div className={'rift'} onDragOver={(e) => e.preventDefault()} ></div>
                    <div className='src-tier-list' onDragOver={(e) => e.preventDefault()}>
                        {
                            this.state.KEYS.map(link => {
                                const XTER = this.state.KAST[link];
                                return (
                                    <div key={XTER.id}
                                        onDragOver={this.onDragOver}
                                        className={'image'}
                                    >
                                        <img 
                                            src={XTER.img} alt={XTER.bioText} id={XTER.link}
                                            draggable={'true'}
                                            onDragOver={(e) => e.preventDefault()}
                                            onDragStart={this.onDragStart}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div>
                        {
                            addEventListener('drop', () => {
                                console.log('an element was dragged ooo');
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }; 
};

const mapStateToProps = (state) => ({...state.platform});

const mapDispatchToProps = (dispatch) => ({
    addTier: (state) => dispatch(addTier(state)),
    removeTier: (target) => dispatch(removeTier(target)),
    editFilter: (target) => dispatch(editFilter(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TierList);