import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/index'
import PathNow from '../components/PathNow'

const Home = () => (
  <>
    <h1> 首頁--列表頁面</h1>
    <PathNow />
    <div className="list-group">
      {/* 使用map要加key */}
      {data.map(value => {
        return (
          <Link
            key={value.id}
            to={'/student/' + value.id}
            className="list-group-item list-group-item-action"
          >
            {value.name}
          </Link>
        )
      })}
    </div>
  </>
)

export default Home
