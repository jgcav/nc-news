import {React, useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'
import { fetchAllArticles } from '../api'
import { useSearchParams } from 'react-router-dom'
import Topics from './Topics'
import OrderFilter from './Order'
import SortByFilter from './SortBy'

export default function Articles() {

    const [searchParams, setSearchParams] = useSearchParams()

    const topic = searchParams.get('topic')

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectOrder, setSelectOrder] = useState()
    const [selectSortBy, setSelectSortBy] = useState()

    let query = '?'
    let queryArr = []

    if (selectOrder) {
        queryArr.push(`order=${selectOrder}`)
    }

    if (selectSortBy) {
        queryArr.push(`sort_by=${selectSortBy}`)
    }

    query += queryArr.join('&')

    useEffect(() => {
        fetchAllArticles(query).then((res) => {
            setArticles(res)
            setIsLoading(false)
        })
    }, [query])



    if (isLoading) return <p>Loading...</p>
    
    return (
        <div className="container">
            <h3 className="subHeader">Articles</h3>
            <div className="filters">
                <SortByFilter setSelectSortBy={setSelectSortBy}/>
                <br />
                <OrderFilter setSelectOrder={setSelectOrder}/>
            </div>
                <div className="articles">
                    {articles.map((article) => {
                    return <ArticleCard key = {article.article_id} article={article}/>;
        })}
         </div>
        </div>
    )
}
