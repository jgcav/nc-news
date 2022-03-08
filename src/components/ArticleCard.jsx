import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleCard({article}) {
    return (
        <div className="row">
        <div className="column">
            <br />
        <div className="articleCard">
            <Link className="articleTitle" to={`/articles/${article.article_id}`}><h4>{article.title}</h4></Link>
            <dl>
            <dt>{article.topic}</dt>
            <dt>Written By: {article.author}</dt>
            <dt>Votes: <span className="voteCount">{article.votes}</span> Comments: <span className="commentCount">{article.comment_count}</span></dt>
            </dl>
        </div>
        </div>
        </div>
    )
}
