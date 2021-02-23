import React from 'react'
import {Link} from 'react-router-dom'
import Style from './SideListItem.module.scss'

function SideListItem(id, src, title) {
  console.log("id",id.id)
  return (
    <Link className={Style.item} to={{pathname: '/watch', search: `?v=${id.id}`}}>
      <img src={id.src} alt={title}/>
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default SideListItem
