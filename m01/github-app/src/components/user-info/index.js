'use strict'
import React, { PropTypes } from 'react'
import style from './user-info.css'

const UserInfo = ({userinfo}) => (
    <div className={style['user-info']}>
        <img src={userinfo.photo} />
        <h1 className={style.username}>
            <a href={`https://github.com/${userinfo.login}`}>
                {userinfo.username}
            </a>
        </h1>
        <ul className={style['repos-info']}>
            <li>Repositórios: {userinfo.repos}</li>
            <li>Seguidores: {userinfo.followers}</li>
            <li>Seguindo: {userinfo.following}</li>
        </ul>
    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
    })
}

export default UserInfo