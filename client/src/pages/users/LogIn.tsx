import React from 'react'
import { AuthPageContainer, FormContainer } from '../../styles/pages/AuthPageStyles'
import { Header } from '../../components/Text/Header'
import { Input } from '../../components/Common/Input'
import { AuthButton } from '../../components/Button/AuthButton'
import { Paragraph } from '../../components/Text/Paragraph'
import { useNavigate } from 'react-router-dom'



export const LogIn: React.FC = () => {
  const navigate = useNavigate();

  // handle navigation to login page
  const handleNavigation = (route: string | undefined) => {
    if (route === undefined) {
      route = 'login';
    }
    navigate(`/${route}`);
  }





  return (
    <>
      <AuthPageContainer>
        <Header text="Login" className='text-center px-4 leading-10' />

        {/* form group here */}
        <FormContainer action='' method='post'>
          {/* inputs */}
          <Input type="text" placeholder="name@example.com" label="email" />
          <Input type="password" placeholder="password" label="password" />

          {/* button submission */}
          <AuthButton text='Continue' onClick={() => { console.log("login") }} />

          {/* link to login */}
          <div className='flex flex-row items-center gap-2'>
            <Paragraph text="New User?" />
            <a onClick={() => { handleNavigation('register') }} className='font-normal text-blue-500 cursor-pointer'>Create an account</a>
          </div>

        </FormContainer>

      </AuthPageContainer>
    </>
  )
}


