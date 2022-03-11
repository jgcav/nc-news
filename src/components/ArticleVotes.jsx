import React from 'react'
import { useState } from 'react'
import { amendVotes } from '../api'

export default function ArticleVotes({article_id, voteCount, commentCount}) {

    const [votes, setVotes] = useState(0)
    const [isError, setIsError] = useState(false)

    const handleVote = (userVote) => {
        setVotes((currentVotes) => {
            setIsError(false)
            return currentVotes + userVote
        })
        amendVotes(article_id, userVote).catch(() => {
            setVotes((currentVotes) => {
                setIsError(true)
                return currentVotes - userVote
            })
        })
    }

    return (
        <div>
            <p>Votes: <span className="voteCount">{voteCount + votes}</span> Comments: <span className="commentCount">{commentCount}</span></p>
            <br />
            {isError ? (<p className="errorMessage">Unable to submit vote. Please try again.</p>) : null}
            <br />
            <button className="voteButtons" disabled={votes > 0} onClick={() => handleVote(1)}>Upvote</button>
            <button className="voteButtons" disabled={votes < 0} onClick={() => handleVote(-1)}>Downvote</button>
        </div>
    )
}
