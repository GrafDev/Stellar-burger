import {useAppDispatch} from "../redux/store/store";
import {connectWs, disconnectWs} from "../redux/features/socket/socketsSlice";

export const useWebsocket = () => {
	const dispatch = useAppDispatch();
	const service = {
		connect: (url: string) => {
			dispatch(connectWs(url));
		},
		disconnect: () => {
			dispatch(disconnectWs());
		},
	};
	return service;
};
