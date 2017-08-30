import React from 'react';

const Comment = (props) => {
	return (
		<div className="newCommentWrapper">
			<form>
				<textarea placeholder="Add a comment..."></textarea>
			</form>
		</div>
	)
}

export default Comment;