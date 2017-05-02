import React, {Component} from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

// Layouts
import MainLayout from './layouts/main-layout';
import DashboardLayout from './layouts/dashboard-layout';

// Pages
import NoMatch from './containers/no-match';
import Home from './containers/home/home';
import Signin from './containers/auth/signin';
import ForgotPassword from './containers/auth/forgot-password';

// SubPages
import Offers from './containers/offers/offers';
import OfferDetail from './containers/offers/offer-detail';
import CreateOffer from './containers/offers/create-offer';

import Stores from './containers/stores/stores';
import StoreDetail from './containers/stores/store-detail';
import CreateStore from './containers/stores/create-store';

import Users from './containers/users/users';
import UserDetail from './containers/users/user-detail';

import EditEmail from './containers/system/edit-email';
import EditPassword from './containers/system/edit-password';

import {isLoggedIn} from './utils/user-information-store';

export default class App extends Component {
    requireAuth(nextState, replace) {
        if (!isLoggedIn()) {
            replace('/entrar');
        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route component={MainLayout}>
                    <Route path="entrar" component={Signin}/>
                    <Route path="esqueci-a-senha" component={ForgotPassword}/>

                    <Route path="/">
                        <Route component={DashboardLayout}>
                            <IndexRoute component={Home} onEnter={this.requireAuth}/>
                            <Route path="ofertas" component={Offers} onEnter={this.requireAuth}/>
                            <Route
                                path="oferta/:offerId"
                                component={OfferDetail}
                                onEnter={this.requireAuth}/>
                            <Route path="criar-oferta" component={CreateOffer} onEnter={this.requireAuth}/>

                            <Route path="lojas" component={Stores} onEnter={this.requireAuth}/>
                            <Route path="loja/:storeId" component={StoreDetail} onEnter={this.requireAuth}/>
                            <Route path="criar-loja" component={CreateStore} onEnter={this.requireAuth}/>

                            <Route path="usuarios" component={Users} onEnter={this.requireAuth}/>
                            <Route
                                path="usuario/:userId"
                                component={UserDetail}
                                onEnter={this.requireAuth}/>

                            <Route path="editar-email" component={EditEmail} onEnter={this.requireAuth}/>
                            <Route path="editar-senha" component={EditPassword} onEnter={this.requireAuth}/>
                        </Route>
                    </Route>

                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        );
    }
}