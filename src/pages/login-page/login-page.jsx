import {useCallback} from 'react'
import {
	Button,
	EmailInput,
	PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {useDispatch, useSelector} from "react-redux";

const LoginPage= () => {
	const dispatch = useDispatch()
// const form=useSelector(getLoginForm);
	// const submitForm = useCallback(
	// 	e => {
	// 		e.preventDefault()
	//
	// 		dispatch(handleLogin(form))
	// 	},
	// 	[dispatch, form],
	// )

	const handleForm=(e)=>{
		console.log(e.target)
	}

	return (
		<main className="container auth">
			<h3 className="auth__title">Вход</h3>

			<form className="auth__form" >
				<EmailInput
					name="email"
					placeholder="E-mail"
					value={'email'}
					onChange={handleForm}
					autoFocus
				/>

				<PasswordInput
					onChange={handleForm}
					value={'password'}
					name={'password'}
				/>

				<Button
					htmlType="submit"
					type="primary"
					size="large"
					// disabled={!form.email || !form.password}
				>
					Войти
				</Button>
			</form>

			<div className="auth__links">
				{/*<AuthLink*/}
				{/*	title="Вы — новый пользователь?"*/}
				{/*	buttonName="Зарегистрироваться"*/}
				{/*	path={REGISTER_LINK}*/}
				{/*/>*/}
				{/*<AuthLink*/}
				{/*	title="Забыли пароль?"*/}
				{/*	buttonName="Восстановить пароль"*/}
				{/*	path={FORGOT_PASSWORD_LINK}*/}
				{/*/>*/}
			</div>
		</main>
	)
}

export default LoginPage;
