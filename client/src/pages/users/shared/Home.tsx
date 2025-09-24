import React, { useState } from 'react'
import { HeroSection } from '../../../components/Common/HeroSection'
import { ProductLayout } from '../../../components/Common/ProductLayout'
import { Bot } from '@/components/chat/Bot';
import { Chat } from '@/components/chat/Chat';
import { BodyOverlay } from '@/styles/components/Loading';

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openChat, setOpenChat] = useState<boolean>(false);

  // handle chat opening
  const handleOpenChat = () => {
    setOpenChat(true);
  }

  // handle chat closing
  const handleCloseChat = () => {
    setOpenChat(false);
  }

  console.log(openChat, ' is open chat');

  return (
    <>
      {/* hero section */}
      <HeroSection
        onSearch={setSearchQuery}
      />
      <ProductLayout
        searchQuery={searchQuery}
      />
      <Bot setOpenChat={handleOpenChat} />
      {/* chat opening */}
      {openChat && (
        <>
          <BodyOverlay onClick={handleCloseChat} />
          <Chat setCloseChat={handleCloseChat} />
        </>
      )}

    </>
  )
}


