import React from 'react'
import ChatBotImg from "@/assets/svg/chat-icon.svg"
import { motion } from "framer-motion"
import { Paragraph } from '../Text/Paragraph'
import { ChatContainer } from '@/styles/components/chat'


export const Bot: React.FC = () => {

  return (
    <>
      <ChatContainer>
        <div className="messageBox">
          <Paragraph
            text="Not find what you are looking for?"
            className="message"
          />
          <motion.img
            src={ChatBotImg}
            alt="chat bot icon"
            animate={{
              y: [0, -10,10, 0], // up & down bobbing
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </ChatContainer>
    </>
  )
}

