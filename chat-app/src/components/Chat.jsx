
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from 'framer-motion'


const Chat = () => {

    const messagesContainerRef = useRef(null)
    const [messages, setMessages] = useState([
        {
            text: "That sounds great. I'd be happy with that.",
            type: "received",
            file: "text"
        },
        {
            text: "Could you send over some pictures of your dog, please?",
            type: "received",
            file: "text"
        },

        {
            text: <div className="flex items-center justify-end gap-2" >
                <img src="/images/dog-image-1.jpg" alt="dog" className="rounded-xl w-20" />
                <img src="/images/dog-image-2.jpg" alt="dog" className="rounded-xl w-20" />
                <img src="/images/dog-image-3.jpg" alt="dog" className="rounded-xl w-20" />
            </div>,
            type: "sent",
            file: "image"
        },

        {
            text: "Here are a few pictures. She's a happy girl!",
            type: "sent",
            file: "text"
        },
        {
            text: "Can you make it?",
            type: "sent",
            file: "text"
        },
        {
            text: "She looks so happy! The time we discussed works. How long shall I take her out for?",
            type: "received",
            file: "text"
        }, 
        {
            text: "30 minute walk",
            type: "received",
            file: "price", 
            price: 29
        }, 
        {
            text: "1 hour walk",
            type: "received",
            file: "price", 
            price: 49
        }
    ])
    const [newMessage, setNewMessage] = useState("")
    const [user, setUser] = useState("samuel")

    const handleUser = (selectedUser) => {
        setUser(selectedUser)
    }

    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newMessage.trim()) {
            setMessages(
                [...messages,
                 { 
                    text: newMessage,
                     type: user === "samuel" ? "sent" : "received", 
                     file: "text"
                    
                 }])
            setNewMessage("")
        }
    }

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
        }

    }

    useEffect(() => {
        scrollToBottom()
        // Scroll to bottom when new message is added
    }, [messages])

    return (

        <div className="relative bg-white rounded-[2rem] p-3 shadow-2xl max-w-[350px] ">
            {/* Phone Header */}
            <div className=" bg-gradient-primary rounded-t-[1.5rem] p-4 pt-8">
                <div className='absolute top-3 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-white rounded-b-xl' ></div>
                <div className="flex items-center gap-2">
                    <img src="/images/icon-back.png" alt="back" className="w-4" />
                    <div className="w-10 bg-white rounded-full">
                        <img src={user ==='samuel' ? "/images/avatar.jpg" : "/images/ahmad-avatar.png" } alt="avatar" className='rounded-full w-full border' />
                    </div>
                    <div className="fle  text-white">
                        <h2 className='text-base' >{user === 'samuel' ? "Samuel Green" : "Ahmad Hahsemi"}</h2>
                        <p className="text-xs text-pale-violet">Available to Walk</p>
                    </div>
                    <div className="ml-auto relative group">
                        <img src="/images/icon-dots.png" alt="menu" className="w-4" />
                        <select onChange={(e) => handleUser(e.target.value)} className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg py-1 px-2 text-sm w-32 opacity-0 group-hover:opacity-100 transition-opacity">
                            <option value="samuel">Samuel Green</option>
                            <option value="ahmad">Ahmad Hashemi</option>
                        </select>

                    </div>
                </div>
            </div>

            {/* Chat Messages */}
            <div ref={messagesContainerRef} className="bg-light-grayish-violet p-4 space-y-4 ronded-b-[2rem] max-h-[400px] overflow-x-hidden  overflow-y-auto scrollbar-thin scrollbar-thumb-grayish-blue scrollbar-track-transparent hover:scrollbar-thumb-moderate-violet">
                <AnimatePresence>
                    {messages.map((message, index) => (
                        <motion.div key={index}
                            initial={{
                                opacity: 0,
                                x: message.type === "sent" ? 100 : -100,
                                scale: 0.8
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className={message.file === 'text' ? `${message.type === "received"
                                ? "bg-grayish-blue/30  rounded-e-2xl text-moderate-violet"
                                : "bg-white text-dark-violet rounded-s-2xl ml-auto"
                                } rounded-t-2xl  p-3 max-w-[80%]` : message.file === 'price' ? "flex items-center max-w-[80%] gap-2 bg-gradient-secondary rounded-t-2xl rounded-e-2xl text-sm  text-white p-5" : ""} >
                            {message.file === 'price' && 
                                <div className='w-5 aspect-square border rounded-full' ></div>
                            }
                            {message.text}
                            {message.file === 'price' ? <span className='text-xl ml-auto font-bold'>{message.price} $</span> : ""}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <form onSubmit={handleSubmit} className="relative rounded-b-[2rem] p-5 bg-light-grayish-violet">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder='Type a message...'
                    className='w-full p-3 bg-white rounded-full text-very-dark-violet focus:outline-none focus:ring-2 focus:ring-moderate-violet'
                />
                <button type="submit">
                    <img
                        src="/images/icon-send.png"
                        alt="send icon"
                        className="w-10 absolute top-1/2 right-7 -translate-y-1/2 bg-very-dark-violet rounded-full p-3"
                    />
                </button>
            </form>
        </div>
    )
}

export default Chat
