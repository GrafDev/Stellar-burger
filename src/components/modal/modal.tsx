import {useCallback, useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import ModalOverlay from "./modal-overlay/modal-overlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {createPortal} from "react-dom";
import style from './modal.module.css'
import {useLocation, useNavigate} from "react-router-dom";
import useKeyPress from "../../hooks/useKeyPress";
import {FC, ReactNode} from "react";
import {TCallbackVoid} from "../../utils/types/types";


type TProps = {
    title?: string
    children: ReactNode
}


const Modal: FC<TProps> = (props: TProps) => {

    const element: any = useMemo(() => document.createElement('div'), []); // TODO: make sense of ANY
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()

    const modalRootElement: any = document.getElementById('react-modals'); // TODO: make sense of ANY

    useEffect(() => {
        modalRootElement.appendChild(element);
        return () => {
            modalRootElement.removeChild(element);
        };
    });


    const closeFunc:TCallbackVoid = useCallback((): void => {
        if (location.state?.background) navigate(location.state.background)
    }, [location.state, navigate, dispatch])


    useKeyPress('Escape', closeFunc)


    return createPortal(
        <ModalOverlay closeFunc={closeFunc}>
            <div className={style.modal}>
                <div className={style.closeCross} onClick={closeFunc}>
                    <CloseIcon type="primary"/>
                </div>
                {props.children}
            </div>
        </ModalOverlay>
        , element)

}

export default Modal;