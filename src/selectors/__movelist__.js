import React from 'react';
import Up from '../components/Buttons/UpButton';
import Front from '../components/Buttons/FrontButton';
import Down from '../components/Buttons/DownButton';
import Back from '../components/Buttons/BackButton';
import FrontPunch from '../components/Buttons/FrontPunch';
import BackPunch from '../components/Buttons/BackPunch';
import BackKick from '../components/Buttons/BackKick';
import FrontKick from '../components/Buttons/FrontKick';
import Amplify from '../components/Buttons/AmplifyButton';
import Block from '../components/Buttons/BlockButton';
import Stance from '../components/Buttons/StanceButton';
import Throw from '../components/Buttons/ThrowButton';

export const displayInputs = (input) => (
    <div className={'view view__special'}>
        <div>
            {
                [...input].map((item, i) => {
                    switch (item.toLowerCase()) {
                        case 'f':
                            return <Front key={i} />;

                        case 'd':
                            return <Down key={i} />;

                        case 'u':
                            return <Up key={i} />;

                        case 'b':
                            return <Back key={i} />;

                        case '1':
                            return <FrontPunch key={i} />;

                        case '2':
                            return <BackPunch key={i} />;

                        case '3':
                            return <FrontKick key={i} />;

                        case '4':
                            return <BackKick key={i} />;

                        case 'a':
                            return <Amplify key={i} />;

                        case 's':
                            return <Stance key={i} />;

                        case 'g':
                            return <Block key={i} />;

                        case 't':
                            return <Throw key={i} />;

                        case '+':
                            return <div key={item} ><code> + </code></div>;

                        case ',':
                            return <div key={item}><code> , </code></div>;

                        default:
                            return <div key={item}></div>
                    }
                })
            }
        </div>
    </div>   
);