import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from '../components/Home';
import { Universal } from '../components/Universal';
import DashBoard from '../selectors/__data__';
import { About } from '../components/About';
import { NotFound } from '../components/NotFound';
import TierList from '../components/TierList';
import TournamentPage from '../components/TournamentPage';


export const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/guides" component={Universal}/>
                <Route path="/tournament" component={TournamentPage}/>
                <Route path="/tierlist" component={TierList} />
                <Route path="/about" component={About}/>
                <Route path="/:id" component={DashBoard} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter> 
);
// export default Router;