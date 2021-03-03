import React, {useContext} from 'react'
import {Store} from '../../store/index'
import VideoPlay from '../VideoPlay/VideoPlay'
import Style from './VideoDetail.module.scss'
import Linkify from 'react-linkify';

const VideoDetail = () => {
<<<<<<< HEAD
    const { globalState, setGlobalState} = useContext(Store)
=======
    const { globalState, setGlobalStateDispatch} = useContext(Store)
    //useLocationを使うと現在のパスやパラメータを取得できる
    const location = useLocation()
    const setSelectedVideo = async () => {
        const searchParams = new URLSearchParams(location.search)
        const id = searchParams.get('v')
        await fetchSelectedData(id).then((res) => {
            const item = res.data.items.shift()
            setGlobalState({type: 'SET_SELECTED', payload: {selected: item}})
        })
    }
    useEffect(() => {
        setSelectedVideo()
    }, [location])
>>>>>>> b6db049eb0ab8b1b2bc66c37901635006eaa6378
    return globalState.selected && globalState.selected.id ? (
        <div className={Style.wrap}>
            <VideoPlay id={globalState.selected.id}/>
            <p>{globalState.selected.snippet.title}</p>
            <hr />
            <Linkify><pre>{globalState.selected.snippet.description}</pre></Linkify>
        </div>
    ) : ( <span>no data</span>)
}

export default VideoDetail
