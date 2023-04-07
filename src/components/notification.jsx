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
                    <span className='container-resalt'>
                        { noti.resalt }
                    </span>
                    <span className='container-resalted'>
                        { noti.resalted }
                    </span>
                    {
                        noti.see === false ?
                            <i class="bi bi-circle-fill"></i>
                        :
                        null
                    }
                    <div className='container-date'>
                        { noti.date }  
                    </div>
                    { noti.text === null ? 
                        null
                        :
                        <p className='container-text'>
                            { noti.text }
                        </p>
                        }
                </div>
                { noti.picture !== null ?
                    <img className='container-picture' src={ noti.picture } alt='image' />
                    :
                    null
                }
            </div>
        </div>
    )
}


export default CompNotification