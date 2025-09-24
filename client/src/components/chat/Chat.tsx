import React, { useState, useRef, useEffect } from 'react'
import {
  ChatContainer,
  ChatInput,
  ImageContainer,
  ConversationContainer
} from '@/styles/components/chat'
import CloseBtn from "@/assets/svg/closebtn.svg"
import FilesIcon from "@/assets/svg/plus.svg"
import Microphone from "@/assets/svg/mic.svg"
import Send from "@/assets/svg/send.svg"
import AILogo from "@/assets/svg/ai-logo.svg"

interface ChatProps {
  setCloseChat: () => void
}

interface Message {
  type: "user" | "ai";
  text: string;
}

export const Chat: React.FC<ChatProps> = (
  { setCloseChat }
) => {
  const [messages, setMessages] = useState<Message[]>([
    { type: "ai", text: "Hi, I'm PromptCart, your personal AI shooping assistant. How can I help you today?" }
  ]);
  const [input, setInput] = React.useState("");
  const [isThinking, setIsThinking] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  // auto-scroll whenever messages change or thinking toggles
  useEffect(() => {
    const id = setTimeout(scrollToBottom, 20);
    return () => clearTimeout(id);
  }, [messages, isThinking]);


  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { type: "user", text: input };

    // Add user message at the bottom
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    setIsThinking(true);

    // Quick AI response template
    setTimeout(() => {
      const aiMessage: Message = { type: "ai", text: "Got it! Let me check that for you." };
      setMessages(prev => [...prev, aiMessage]);
      setIsThinking(false);
    }, 1000); // ai response time
  };


  return (
    <>
      <ChatContainer>
        <img
          src={CloseBtn}
          alt="close button"
          className='closeBtn cursor-pointer'
          onClick={() => setCloseChat()}
        />
        {/* main chat container */}
        <ConversationContainer ref={scrollRef}>
          <div className="scrollableContainer">
            {messages.map((msg, idx) =>
              msg.type === "user" ? (
                <div key={idx} className='userMessageBox'>
                  <p className='message'>{msg.text}</p>
                </div>
              ) : (
                <div key={idx} className='aiContainer'>
                  <div className='message'>
                    <ImageContainer>
                      <img src={AILogo} alt="ai logo" />
                    </ImageContainer>
                    <p>{msg.text}</p>
                  </div>
                </div>
              )
            )}

            {/* Typing indicator lives outside the messages list */}
            {isThinking && (
              <div className='aiContainer' role="status" aria-live="polite" aria-label="AI is typing">
                <div className='message'>
                  <ImageContainer>
                    <img src={AILogo} alt="ai logo" />
                  </ImageContainer>
                  <div className="typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ConversationContainer>


        {/* chat input */}
        <ChatInput>
          <ImageContainer className='file'>
            <img
              src={FilesIcon}
              alt="add files icon"
              className='file'
            />
          </ImageContainer>
          <input
            type="text"
            placeholder='Not finding what you are looking for? Ask me anything...'
            autoComplete='on'
            autoCorrect='on'
            data-testid="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <ImageContainer className='microphone'>
            <img
              src={Microphone}
              alt="microphone icon"
              className='microphone'
            />
          </ImageContainer>
          <ImageContainer onClick={handleSend}>
            <img
              src={Send}
              alt="send button"
              className='send'
            />
          </ImageContainer>
        </ChatInput>
      </ChatContainer>
    </>
  )
}

