import React, { useState } from 'react'
import data from '../data/data';
import CompNotification from './notification';

const NotificationList = () => {

    const [inicialState, setInicialState] = useState(data);

    let contador = 0
    
    const [cont, setCont] = useState(0);
    

    function cambioNotifi(notificacion) {
        const index = inicialState.indexOf(notificacion)
        let newState = [...inicialState]
        if(newState[index].see === false) {
            newState[index].see = !newState[index].see
            setInicialState(newState)
        } else if(newState[index].see === true) {
            setInicialState(newState)
        }
    }

    return (
        <div>
            <div className='second-container'>
                <h2>
                    Notifications
                </h2>
                <div>
                    { cont }
                </div>
                <h2>
                    Mark all as read
                </h2>
            </div>
            <div className='third-container'>
                { inicialState.map((noti, i) => (
                    <CompNotification
                        key={ i }
                        noti={ noti }
                        cambioNoti={ cambioNotifi }
                    />
                ))
            }
            </div>
        </div>
    )
}

export default NotificationList