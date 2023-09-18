import React, {FC} from 'react'
import Modal from "../modal/modal";

import styles from './ingredient-details.module.css'
import IngredientInfo from "./ingredient-info/ingredient-info";

const IngredientDetails: FC = () => {
    return (
        <Modal title="Детали ингредиента">
            <div className={styles.container}>
                <IngredientInfo/>
            </div>
        </Modal>
    )
}

export default React.memo(IngredientDetails)
