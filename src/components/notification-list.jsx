import React, { useState } from 'react'
import data from '../data/data';
import CompNotification from './notification';

const NotificationList = () => {


    const [inicialState, setInicialState] = useState(data);
    const [cont, setCont] = useState(0);


    const lenght = inicialState.filter(element => element.see === false).length

    
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
        <div className='firts-container'>
            <div className='second-container'>
                <div className='cont-container'>
                    <h2>
                        Notifications
                    </h2>
                    <div className='contador-container'>
                        { lenght }
                    </div>
                </div>
                <p>
                    Mark all as read
                </p>
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