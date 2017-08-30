import React from 'react';

const PostComments = (props) => {
	return (
		<div className="commentsWrapper">
			<ul>
				{props.comments.map((comment, index) => (
					<li key={index + "comment"}>
						<a>{comment.username}</a>
						<span>{comment.text}</span>
					</li>
					))}
			</ul>

		</div>
		)
}

export default PostComments;