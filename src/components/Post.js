import React, { Component } from 'react';
import Comment from './Comment';
import PostComments from './PostComments'
import moment from 'moment';
import './post.css';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: props.info,
			comments: props.info.comments
		}
	}
	componentDidMount() {}
	render() {
		return (
			<div className="singlePost">
				<div className="postHeader">
					<div className="avContainer">
						<span>
							<img src={this.state.post.thumbnailUrl} />
						</span>
					</div>
					<div className="usernameContainer">
						<div>
							<div className="userName">
								<a>{this.state.post.username}</a>
							</div>
						</div>
					</div>
				</div>

				<div className="postMedia">
					<img src={this.state.post.imageUrl} />
				</div>

				<div className="bottomSection">
					<div className="postActions">
						<a>
							<span className="spriteBg2"> </span>
						</a>
						<a>
							<span className="spriteBg2"> </span>
						</a>
					</div>

					<div className="postEngCount">
						<div className="contain">
							<span>
								{this.state.post.likes} likes
							</span>
						</div>
					</div>
					<PostComments comments={this.state.comments} />
					<div className="timeStamp">
						<a>
							<time>{moment(this.state.post.timestamp, 'x').fromNow()} </time>
						</a>
					</div>
					<Comment />
				</div>
				
				<div className="buttonSection">
					<button>
						<span className="spriteBg2">More Options</span>
					</button>
				</div>
			</div>
			)
	}
}

export default Post;