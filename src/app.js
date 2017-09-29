import Api from './api';
import React from 'react';
import ReactDOM from 'react-dom';
import  { HashRouter, Switch, Route } from 'react-router-dom';
import {PostList, Post} from './post-list';
import Nav from './nav';

import CategoryPost from './category-post';


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Nav />
                <Switch>
                    <Route exact path="/" component={PostList} />
                    <Route path="/post/:id" component={Post} />
                    <Route path="/category/:id" component={CategoryPost} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('app'))
