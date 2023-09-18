import styles from "./spinner.module.css"
import {FC} from "react";
const Spinner:FC=()=>{
	return(
		<div className={styles.bodyRing}>
			<div className={styles.ring}>
				WAIT
				<div className={styles.spanRing}>
				</div>
			</div>
		</div>

	)
}
export default Spinner;