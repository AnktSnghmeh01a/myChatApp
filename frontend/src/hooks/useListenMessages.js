import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";

import notificationSound from "../assets/sound/notification.mp3";

const useListenMessages = () => {

	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();
	
	useEffect(() => {
		socket?.on("newMessages", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			console.log("hello")
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;