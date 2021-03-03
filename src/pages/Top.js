import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import {Store} from '../store/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'

const Top = () => {
    //useContext・・・contextに格納されているデータにシンプルにアクセス可能にする
    const {globalState, setGlobalState} = useContext(Store)
    //useEffect・・・渡された関数をレンダリング後に実行する
    useEffect(() => {
        fetchPopularData().then((res) => {
            console.log('data', res.data)
            setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
    }, [])
    return (
        <Layout>
            <VideoGrid>
                {
                    globalState.popular && globalState.popular.map((popular) => {
                        return (
                            <VideoGridItem 
                                id={popular.id} 
                                key={popular.id} 
                                src={popular.snippet.thumbnails.medium.url}
                                title={popular.snippet.title}
                            >
                            </VideoGridItem>
                        )
                    })
                }
            </VideoGrid>
        </Layout>
    )
}

export default Top
