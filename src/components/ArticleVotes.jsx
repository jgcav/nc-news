import React from 'react'
import { useState } from 'react'
import { amendVotes } from '../api'

export default function ArticleVotes({article_id, voteCount, commentCount}) {

    const [votes, setVotes] = useState(0)

    const handleVote = (userVote) => {
        setVotes((currentVotes) => {
            return currentVotes + userVote
        })
        amendVotes(article_id, userVote)
    }

    return (
        <div>
            <p>Votes: <span className="voteCount">{voteCount + votes}</span> Comments: <span className="commentCount">{commentCount}</span></p>
            <br />
            <button className="voteButtons" disabled={votes > 0} onClick={() => handleVote(1)}>Upvote</button>
            <button className="voteButtons" disabled={votes < 0} onClick={() => handleVote(-1)}>Downvote</button>
        </div>
    )
}
