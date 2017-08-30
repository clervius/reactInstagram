import React, { Component } from 'react';
import Post from './Post';

const PostContainer = (props) => {
	return (
			<div className="bodyContainer">
				{props.posts.map((post, index) => (
					<Post info={post} key={"post" + index} />
					))}
			</div>
		)
}

export default PostContainer;