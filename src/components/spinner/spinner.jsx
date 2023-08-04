import styles from "./spinner.module.css"
const Spinner=()=>{
	return(
		<div className={styles.bodyRing}>
			<div className={styles.ring}>
				Loading
				<div className={styles.spanRing}>
				</div>

			</div>
		</div>

	)
}
export default Spinner;