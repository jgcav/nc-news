import {React, useState, useEffect} from 'react'
import { fetchArticlesById, fetchArticleComments } from '../api'
import { useParams } from 'react-router-dom'
import CommentCard from './CommentCard'

export default function ArticlePage() {

    const {article_id} = useParams()
    const [article, setArticle] = useState([])
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [displayForm, setDisplayForm] = useState(false)

    useEffect(() => {
        fetchArticlesById(article_id)
        .then((res) => {
            setArticle(res)
            setIsLoading(false)
        })
    }, [article_id])

    useEffect(() => {
        fetchArticleComments(article_id)
        .then((res) => {
            setComments(res)
            setIsLoading(false)
        })
    }, [article_id])

    const showForm = () => {
        setDisplayForm(!displayForm)
    }

    console.log(displayForm)

    return (
        <div>
        <div>
        {isLoading ? (<p>Loading...</p>) : (
            <div className="articleContent">
            <div className="article">
                <br />
            <h2>{article.title}</h2>
            <br />
            <p>{article.body}</p>
            <br />
            </div>
            <div className="comments">
                <br />
                <h3>Comments</h3>
                <br />
                {displayForm && <form>
                    <textarea required className="commentField"></textarea>
                    </form>}
                <button className="commentButton" onClick={showForm}>Add Comment</button>
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} {...comment} comments={comments} article_id={article_id}/>
                })}
            </div>
            </div>
        )}
    </div>
    </div>
)
}