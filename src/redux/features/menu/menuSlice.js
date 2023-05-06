import {createSlice} from "@reduxjs/toolkit";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";


const initialState = {

	items: [
		{
			name: 'Констурктор',
			id: 'burger',
			active: true,

		},
		{
			name: 'Лента заказа',
			id: 'list',
			active: false,

		},
		{
			name: 'Личный кабинет',
			id: 'profile',
			active: false,

		},
	],
}

const menuSlice = createSlice({
		name: 'menu',
		initialState,
		reducers: {
			changeActiveMenu: (state, action) => {
					state.items.forEach(item=>
							item.active=action.payload===item.id

					)
			}
		}
	}
)
export const {changeActiveMenu} = menuSlice.actions
export default menuSlice.reducer