import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./feed-page.module.css";
import {ALL_ORDERS_SOCKET_URL} from "../../utils/constants/outlink-constants";
import {useAppSelector} from "../../redux/store/store";
import {useWebsocket} from "../../hooks/use-web-socket";
import {getIngredientsIsLoadingSelector} from "../../redux/features/ingredients/selectors-ingredients";
import {Statistics} from "../../components/statistics/statistics";
import Spinner from "../../components/spinner/spinner";
import {OrderPreview} from "../../components/oder-preview/order-preview";

export const FeedPage = () => {
	const { isConnected, socketData } = useAppSelector(
		(store) => store.socketSlice
	);
	const appStatus:boolean = useAppSelector(getIngredientsIsLoadingSelector);

	const { connect, disconnect } = useWebsocket();

	const location = useLocation()

	useEffect(() => {
		connect(ALL_ORDERS_SOCKET_URL);
		connect(ALL_ORDERS_SOCKET_URL);
		return () => {
			disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isConnected && socketData && appStatus) {
		return (
			<div className={styles.wrapper}>
				<ul className={`${styles.globalOrders} scroll`}>
					{socketData.orders.map((o) => (
						<Link state={{from: location.pathname}} to={`/feed/${o._id}`} key={o.number}>
							<OrderPreview order={o} />
						</Link>
					))}
				</ul>

				<Statistics data={socketData} />
				<Outlet />
			</div>
		);
	}
	return <Spinner/>;
};
