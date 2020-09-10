import React from 'react';
import KharacterList from './KharacterList';
import KharacterFilter from './KharacterListFilters';

export const Welcome = () => {
    return (
        <div>  
            <KharacterFilter />
            <KharacterList />
        </div>

    )
};