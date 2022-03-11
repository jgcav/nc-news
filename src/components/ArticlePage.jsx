import {React, useState, useEffect} from 'react'
import { fetchArticlesById, fetchArticleComments, addComment } from '../api'
import { useParams } from 'react-router-dom'
import CommentCard from './CommentCard'
import ArticleVotes from './ArticleVotes'

export default function ArticlePage() {

    const {article_id} = useParams()
    const [article, setArticle] = useState([])
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [displayForm, setDisplayForm] = useState(false)
    const [comment, setComment] = useState('')
    const [isError, setIsError] = useState(false)

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
        setDisplayForm(true)
    }

    const hideForm = () => {
        setDisplayForm(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {username: 'tickle122', body: comment}

        setComment('')

        setComments((currentComments) => {
            return [newComment, ...currentComments]
        })

        addComment(article_id, newComment).catch((err) => {
            setIsError(true)
            setComments((currentComments) => {
                return currentComments.slice(1)
            })
        })
    }

    const voteCount = article.votes
    const commentCount = article.comment_count


    return (
        <div>
        <div>
        {isLoading ? (<p>Loading...</p>) : (
            <div className="articleContent">
            <div className="article">
                <br />
            <h2>{article.title}</h2>
            <br />
            <p className="articleText">{article.body}</p>
            <br />
            <br />
            <ArticleVotes article_id={article_id} voteCount={voteCount} commentCount={commentCount}/>
            <br />
            </div>
            <ol className="comments">
                <br />
                <h3>Comments</h3>
                <br />
                {isError ? (<p className="errorMessage">Unable to submit comment. Please try again.</p>) : null}
                <br />
                {displayForm ? <form onSubmit={handleSubmit}>
                    <textarea required className="commentField" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <br />
                    <button type="submit" className="submitButton">Submit</button>
                    <button className="cancelButton" onClick={hideForm} >Cancel</button>
                    </form> : <button className="commentButton" onClick={showForm}>Add Comment</button>}
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} {...comment} comments={comments} article_id={article_id}/>
                })}
            </ol>
            </div>
        )}
    </div>
    </div>
)
}