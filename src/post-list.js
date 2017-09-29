import React from 'react';
import {Link} from 'react-router-dom';
import Api from './api';
import Hero from './hero';

class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            author: ''
        };
    }

    componentDidMount() {
        let api = new Api();

        api.posts({
            id: this.props.match.params.id
        }).then(data => {
            this.setState({
                title: data.title.rendered,
                content: data.content.rendered,
                author: data._embedded.author[0].name
            });
        });
    }

    render() {
        let post = this.state;

        return (
            <div className="container animated fadeIn">
				<Link className="animated fadeIn" to={`/`}>👈 to 🏠 </Link>
                <h3>{post.title}</h3>
                <div dangerouslySetInnerHTML={{__html: post.content}} />
            </div>
        );
    }
}

class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        let api = new Api();

        api.posts().then(data => {
			console.log(data);
            this.setState({
                posts: data
            });


        });
    }

    render() {
        let posts = this.state.posts.map((post, index) =>
			<div key={index} className="card-box col-md-4 col-sm-6 animated fadeIn">
				<div className="card">
					<div className="header">
						<img className="img-test animated fadeIn" src={post._embedded["wp:featuredmedia"][0].source_url} />
						<div className="filter"></div>

						<div className="actions">
							<Link to={`/post/${post.id}`} className="btn btn-round btn-fill btn-info btn-modern">Read more...</Link>
						</div>
					</div>
					<div className="content">
						<span className="label label-info">{post._embedded["wp:term"][0][1].slug}</span>
						<h5 className="title"><Link to={`/post/${post.id}`}>{post.title.rendered}</Link></h5>
						{post.excerpt.rendered.toString().substring(3,120)}
						<Link to={`/post/${post.id}`}>...</Link>
					</div>
				</div>
			</div>);



        return (

            <div>
				<Hero />
					{posts}
			</div>
        );
    }
}

export {Post, PostList};
