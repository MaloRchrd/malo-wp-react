import React from 'react';
import Api from './api';
import {Link} from 'react-router-dom';
export default class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        let api = new Api();

        api.categories().then(data => {
            this.setState({
                data: data
            });


        });
    }

    render() {
        let items = this.state.data.map((item, index) => {
            return (<li key={index}>
                <Link to={`/category/${item.id}`}>{item.name}</Link></li>)
        });
        return (<nav className="navbar navbar-fixed-top navbar-black" role="navigation">
		  <div className="container">

		    <div className="navbar-header">
		      <button id="menu-toggle" type="button" className="navbar-toggle" data-target="#navigation-doc">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar bar1"></span>
		        <span className="icon-bar bar2"></span>
		        <span className="icon-bar bar3"></span>
		      </button>
		      <Link to={"/"}>
		           <div className="logo-container">
		                <div className="logo">
		                    <img src="assets/img/logo-mr.png" alt="Malo Richard" />
		                </div>
		            </div>
		      </Link>
		    </div>
		    <div className="collapse navbar-collapse" id="navigation-doc">
				<ul className="nav navbar-nav navbar-right">
					{items}
		    	</ul>

		    </div>
		  </div>
		</nav>
);

    }
}
