import React from 'react'
import { fetchArticleComments, deleteComment } from '../api'

export default function CommentCard(comment) {


    const handleClick = () => {
        deleteComment(comment.comment_id).then(() => {fetchArticleComments(comment.article_id).then((comments) => {
            comment.setComments(comments)
        })})
    }

    return (
            <div className="row">
        <div className="column">
            <br />
        <div className="commentCard">
            <dl>
            <dt>{comment.body}</dt>
            <br />
            <dt className="commentAuthor">{comment.author}</dt>
            <br />
            <dt>Date: {comment.created_at.substr(0,10)}</dt>
            </dl>
            <br />
            <button className="deleteComment" onClick={handleClick}>Delete</button>
        </div>
        </div>
        </div>
    )
}
