import styles from "./spinner.module.css"
const Spinner=()=>{
	return(
		<div className={styles.loader}>
			<div className={styles.one}></div>
			<div className={styles.two}></div>
			<div className={styles.three}></div>
		</div>
	)
}
export default Spinner;