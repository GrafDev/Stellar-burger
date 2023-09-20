import React, {FC, useEffect, useState} from 'react'
import PageNotFoundPicture from '../../images/404_background-v2.png'
import styles from './not-found-page.module.css'
import PageNotFoundPictureLine from '../../images/404_line-v2.png'


const NotFoundPage:FC = () => {
    const [blink, setBlink] = useState<boolean>(false); // создаем состояние для мигания

    useEffect(() => {
        const interval:NodeJS.Timer = setInterval(() => { // создаем интервал
            const randomTime:number = Math.floor(Math.random() * 2000); // генерируем случайное время от 0 до 5000 мс
            setTimeout(() => { // устанавливаем таймаут
                setBlink(prev => !prev); // меняем состояние на противоположное
            }, randomTime); // передаем случайное время в таймаут
        }, 200); // передаем 1000 мс в интервал
        return () => clearInterval(interval); // очищаем интервал при размонтировании компонента
    }, []); // передаем пустой массив зависимостей


    return (
        <div>
            <img className={styles.finishImage} src={PageNotFoundPicture} alt={'NotFoundPage'}/>
            {blink && <img className={styles.blinkLineImage} src={PageNotFoundPictureLine} alt={'NotFoundPageLine'}/>}
        </div>
    )
}

export default React.memo(NotFoundPage);