// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	// const { authUser } = useAuthContext();
	// const { selectedConversation } = useConversation();
	// const fromMe = message.senderId === authUser._id;
	// const formattedTime = extractTime(message.createdAt);
	// const chatClassName = fromMe ? "chat-end" : "chat-start";
	// const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	// const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	// const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src='https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg' />
				</div>
			</div>
			{/* <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div> */}
		</div>
	);
};
export default Message;