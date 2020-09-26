import React from 'react';
import { connect } from 'react-redux';
import { Header }from './Header';
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
    
    _onDragStart(e) {
        const _clone = e.target.cloneNode();
        e.dataTransfer.setData('text', e.target.id);
    };
    
    eventHandler(event) {
        const _onDragOver = (e) => {
            e.preventDefault();
        };

        const _onDrop = (e) => {
            e.preventDefault();
            const _package = e.dataTransfer.getData('text');
            console.log(_package);
            
            const _container = document.getElementById('Z');
            console.log(_container);
        };

        const _globalDragOver = () => {

        };

        console.log(event.type)
        switch(event.type) {
            case 'drop':
            case 'dragend':
                _onDrop(event);
            break;

            case 'dragenter':
            case 'dragover':
                _onDragOver(event);
                // _globalDragOver(event);  
            break;

            case 'selectstart':
                event.preventDefault();
            break;
        }
    };

    addHandler(index) {
        this.state.NOT.splice(index + 1, 0, '' );
        this.setState({ NOT: this.state.NOT });
        this.render();
        console.log(this.state.NOT, "add");
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
        console.log(this.props.not, 'remove');
    };

    onButton(e) {
        e.target.style.display = 'none';

        const input = document.getElementById('main-input');
        const button = document.getElementById('main-button');

        input.style.display = 'block';
        button.style.display = 'block';

        console.log('finished');
        console.log(e.target);
    };

    onInputButton(e) {
        const input = document.getElementById('main-input');
        const content = input.value;

        const mainSpan = document.getElementById('main-span');
        mainSpan.innerText = content;

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
                <div>
                    {
                        this.state.NOT.map((tier, i) => <div className={'tier'} key={i}>
                            <div className="span" id={`main-span${i}}`}>
                                {tier}
                                <div className={'tier__option'}>
                                    <button onClick={() => this.removeHandler(i)}>-</button>
                                    <button onClick={this.onButton}>pen</button>
                                    <button onClick={() => this.addHandler(i)} value={'ADD_TIER'}>+</button>
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
                                        <img src={XTER.img} alt={XTER.bioText} id={XTER.link}
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
                    <div>
                        <input type="text" id="main-input" />

                        <button id="main-button" onClick={this.onInputButton}>submit</button>

                        <span id="main-span" onClick={this.onButton}>A</span>
                    </div>
                    <div>
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