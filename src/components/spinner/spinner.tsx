import styles from "./spinner.module.css"
import React, {FC} from "react";


type TProps = {
	children: React.ReactNode
}

const Spinner:FC<TProps> =({children}:TProps)=>{
	return(
		<div className={styles.bodyRing}>
			<div className={styles.ring}>
				{children}
				<div className={styles.spanRing}>
				</div>
			</div>
		</div>

	)
}
export default Spinner;