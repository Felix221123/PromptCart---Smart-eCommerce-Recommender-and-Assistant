import React from 'react'
import ChatBotImg from "@/assets/svg/chat-icon.svg"
import { motion } from "framer-motion"
import { Paragraph } from '../Text/Paragraph'
import { BotContainer } from '@/styles/components/chat'


interface BotProps {
  setOpenChat: () => void;
}


export const Bot: React.FC<BotProps> = (
  { setOpenChat }
) => {

  return (
    <>
      <BotContainer onClick={() => setOpenChat()}>
        <div className="messageBox">
          <Paragraph
            text="Not finding what you are looking for?"
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
      </BotContainer>
    </>
  )
}

