import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from '../components/Home';
import { Universal } from '../components/Universal';
import DashBoard from '../selectors/__data__';
import { About } from '../components/About';
import { NotFound } from '../components/NotFound';
import { SignUp } from '../components/SignUp';
import { CreateTourney } from '../components/CreateTourney';
import { TournamentInfo } from '../components/TournamentInfo'
import TierList from '../components/TierList';
import { Tournaments } from '../components/TournamentPage';
import TournamentDashBoard from '../components/TournamentDashBoard';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();

export const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/guides" component={Universal}/>
                <Route path="/tournaments" component={Tournaments}/>
                <Route path="/tournaments/:id" component={TournamentDashBoard}/>
                <Route path="/create" component={CreateTourney}/>
                <Route path="/tierlist" component={TierList} />
                <Route path="/about" component={About}/>
                <Route path="/sign" component={SignUp}/>
                <Route path="/:id" component={DashBoard} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter> 
);
// export default Router;