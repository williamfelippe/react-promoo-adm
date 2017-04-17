import React from "react";
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

import EditEmail from './containers/users/edit-email';
import EditPassword from './containers/users/edit-password';

export default(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="entrar" component={Signin}/>
            <Route path="esqueci-a-senha" component={ForgotPassword}/>

            <Route path="/">
                <Route component={DashboardLayout}>
                    <IndexRoute component={Home}/>
                    <Route path="ofertas" component={Offers}/>
                    <Route path="oferta/:offerId" component={OfferDetail}/>
                    <Route path="criar-oferta" component={CreateOffer}/>
                    
                    <Route path="lojas" component={Stores}/>
                    <Route path="loja/:storeId" component={StoreDetail}/>
                    <Route path="criar-loja" component={CreateStore}/>

                    <Route path="usuarios" component={Users}/>
                    <Route path="usuario/:userId" component={UserDetail}/>

                    <Route path="editar-email" component={EditEmail}/>
                    <Route path="editar-senha" component={EditPassword}/>
                </Route>
            </Route>

            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
);