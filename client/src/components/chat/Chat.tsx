import React, { useState, useRef, useEffect } from 'react'
import {
  ChatContainer,
  ChatInput,
  ImageContainer,
  ConversationContainer,
  ChatFooter
} from '@/styles/components/chat'
import CloseBtn from "@/assets/svg/closebtn.svg"
import FilesIcon from "@/assets/svg/plus.svg"
import Microphone from "@/assets/svg/mic.svg"
import Send from "@/assets/svg/send.svg"
import AILogo from "@/assets/svg/ai-logo.svg"
import { UploadedAsset } from '@/interface/ChatProps'
import { CloudinaryImagePickerRef, CloudinaryImagePicker } from '@/hooks/CloudinaryImagePicker'
import AttachmentTray from '@/hooks/AttachmentTray'

interface ChatProps {
  setCloseChat: () => void
}

interface Message {
  type: "user" | "ai";
  text: string;
  images?: UploadedAsset[];
}

export const Chat: React.FC<ChatProps> = (
  { setCloseChat }
) => {
  // state for messages
  const [messages, setMessages] = useState<Message[]>([
    { type: "ai", text: "Hi, I'm PromptCart, your personal AI shooping assistant. How can I help you today?" }
  ]);
  const [input, setInput] = React.useState("");
  const [isThinking, setIsThinking] = useState(false);

  // states for file upload
  const [imageAssets, setImageAssets] = useState<UploadedAsset[]>([]);
  const pickerRef = useRef<CloudinaryImagePickerRef>(null);

  // When picker uploads finish, we merge & clamp to 4
  const onPickerChange = (arr: UploadedAsset[]) => {
    // arr is the picker's full list; just unique it & cap at 4
    const unique = arr.filter(
      (a, i) => arr.findIndex(z => z.url === a.url) === i
    ).slice(0, 4);
    setImageAssets(unique);
  };

  const removeAttachment = (index: number) =>
    setImageAssets(prev => prev.filter((_, i) => i !== index));

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

    const userMessage: Message = {
      type: "user",
      text: input.trim(),
      images: imageAssets.length ? [...imageAssets] : undefined,
    };
    // Add user message at the bottom
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setImageAssets([]);

    // reset the picker's own assets/fingerprints
    pickerRef.current?.clear?.();

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
                  {msg.images?.length ? (
                    <AttachmentTray assets={msg.images} readonly size={96} />
                  ) : null}
                  {msg.text && <p className='message'>{msg.text}</p>}
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

        {/* Mount the picker somewhere (UI-less) */}
        <CloudinaryImagePicker
          ref={pickerRef}
          ui="bare"
          max={4}
          autoUpload={true}
          onChange={onPickerChange}
        />

        <ChatFooter>
          {/* chat attachment tray */}
          <div className="attachments-floater">
            <AttachmentTray
              assets={imageAssets}
              max={4}
              onRemove={removeAttachment}
              onAddMore={() => pickerRef.current?.open()}
            />
          </div>

          {/* chat input */}
          <ChatInput>
            <ImageContainer
              className='file'
              role="button"
              tabIndex={0}
              aria-label="Attach images"
              onClick={() => pickerRef.current?.open()}
              onKeyDown={(e) => e.key === "Enter" && pickerRef.current?.open()}
            >
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
        </ChatFooter>

      </ChatContainer>
    </>
  )
}

