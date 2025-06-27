import React from 'react'
import { AuthPageContainer, FormContainer } from '../../styles/pages/AuthPageStyles'
import { Header } from '../../components/Text/Header'
import { Input } from '../../components/Common/Input'
import { AuthButton } from '../../components/Button/AuthButton'
import { Paragraph } from '../../components/Text/Paragraph'
import { useNavigate } from 'react-router-dom'




export const Register: React.FC = () => {
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

        <Header text="Register" className='text-center px-4 leading-10' />

        {/* form group here */}
        <FormContainer action='' method='post'>
          {/* inputs */}
          <Input type='text'
              placeholder='First Name'
              label='First Name' />
          <Input type='text'
              placeholder='Last Name'
              label='First Name' />
          <Input type="text"
            placeholder="name@example.com"
            label="email" />
          <Input type="password"
            placeholder="password"
            label="password" />
          <Input type="password"
            placeholder="confirm password"
            label="confirm password" />

          {/* button submission */}
          <AuthButton text='Register' onClick={() => { console.log("register") }} />

          {/* link to login */}
          <div className='flex flex-row items-center gap-2 mb-8'>
            <Paragraph text="Already a member?" />
            <a onClick={() => handleNavigation('login')} className='font-normal text-blue-500 cursor-pointer'>Login</a>
          </div>

        </FormContainer>
      </AuthPageContainer>
    </>
  )
}

