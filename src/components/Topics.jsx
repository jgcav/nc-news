import {React, useState, useEffect} from 'react'
import { fetchAllTopics } from '../api'
import TopicCard from './TopicCard'

export default function Topics() {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchAllTopics()
        .then((res) => {
            setIsLoading(false)
            setTopics(res)
        })
    }, [])

    return (
        <div>
            <h3 className="topics-header">Topics</h3>
            {isLoading ? (<p>Loading...</p>) : (
            <div className="topics">
                    {topics.map((topic) => {
                    return <TopicCard key = {topic.slug} topic={topic}/>;
        })}
         </div>
            )}
        </div>
    )
}
