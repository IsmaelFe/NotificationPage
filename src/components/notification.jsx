import React from 'react'

const CompNotification = ({ noti, cambioNoti }) => {
    return (
        <div className={ noti.see === false ?
        'not-container'
        :
        'not-container-1'
        }
        onClick={ () => cambioNoti(noti) }
        >
            <div className='not-container-flex'>
                <div className='container-avatar'>
                    <img src={ noti.avatar } alt='avatar' />
                </div>
                <div className='container-name'>
                <span className='span-name'>
                    { noti.name }   
                </span>
                { noti.notification }
                {
                    noti.see === false ?
                        <i class="bi bi-circle-fill"></i>
                    :
                    null
                }
                <div className='container-date'>
                    { noti.date }  
                </div>
                { noti.tex !== false ?
                    <div className='container-text'>
                        {noti.text}
                    </div>
                    :
                    <span className='new-container'></span>
                    }
                </div>
            </div>
        </div>
    )
}


export default CompNotification