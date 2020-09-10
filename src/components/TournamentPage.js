import React from 'react';
import { connect } from 'react-redux';


export const Tournament = (props) => {

    const brackets = {
        user1: {
            name: 'Phederal',
            points: 11,
            nationality: 'NGN'
        },
        user2: {
            name: 'King',
            points: 13,
            nationality: 'NGN'
        },
        user3: {
            name: 'Tiki',
            points: 18,
            nationality: 'NGN'
        },
        user4: {
            name: 'Crae',
            points: 19,
            nationality: 'NGN'
        },
        user5: {
            name: 'Phanstorm',
            points: 21,
            nationality: 'NGN'
        },
        user6: {
            name: 'SilentL',
            points: 24,
            nationality: 'NGN'
        }
    };

    const resolver = ({ user1, user2 }) => {
        return {
            B1: [user1['points'], user2['points']].reduce((a, b) => a > b ? a : b),
        };
    };

    resolver(brackets);

    return (
        <div>
            { "Tournament" }
        </div>
    );

};

const mapStateToProps = (state) => ({
    ...state.platform
});

export default connect(mapStateToProps)(Tournament);