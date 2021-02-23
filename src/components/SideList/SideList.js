import React, {useEffect, useContext} from 'react'
import {Store} from '../../store/index'
import {fetchRelatedData} from '../../apis/index'
import SideListItem from '../SideListItem/SideListItem'
import Style from './SideList.module.scss'

function SideList() {
  const { globalState, setGlobalStateDispatch} = useContext(Store)
  const setRelatedData = async (id) => {
    await fetchRelatedData(id).then((res) => {
      console.log(res.data.items)
      setGlobalStateDispatch({type: 'SET_RELATED', payload: {related: res.data.items}})
      
    })
  }

  useEffect(() => {
    setRelatedData(globalState.selecte.id)
  },[globalState.selected])
  
    return(
      <div className={Style.sidenav}>
        {globalState.related ? globalState.related.map((video) => {
          return(
            <SideListItem
              id={video.id.videoId.id}
              key={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          )
        }
        ) : <span>no data</span>
        }
      </div>
    )
}

export default SideList
