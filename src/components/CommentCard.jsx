import React from 'react'

export default function CommentCard(comment) {
    return (
            <div className="row">
        <div className="column">
            <br />
        <div className="commentCard">
            <dl>
            <dt>{comment.body}</dt>
            <br />
            <dt className="commentAuthor">{comment.author}</dt>
            </dl>
        </div>
        </div>
        </div>
    )
}
