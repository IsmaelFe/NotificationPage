import React from 'react'

const CompNotification = ({ noti, cambioNoti }) => {
    return (
        <div className='not-container'
        onClick={ () => cambioNoti(noti) }
        >
            <div>
                <img src={ noti.avatar } alt='avatar' />
            </div>
            <div>
            { noti.image }
            { noti.name }
            { noti.notification }
            </div>
            <div>{ noti.text }</div>
            <div>{ noti.date }</div>  
        </div>
    )
}


export default CompNotification