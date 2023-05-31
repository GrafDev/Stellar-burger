import React from 'react'
import PageNotFoundPicture from '../../images/404.png'
import styles from './not-found-page.module.css'
const NotFoundPage = () => {
	return(
		<div className={styles.cont}>
			<img className={styles.finishImage} src={PageNotFoundPicture} alt={'NotFoundPage'}/>
		</div>
	)
}

export default NotFoundPage;