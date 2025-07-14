import React, { useState } from 'react'
import { AuthPageContainer, FormContainer } from '../../styles/pages/AuthPageStyles'
import { Header } from '../../components/Text/Header'
import { Input } from '../../components/Common/Input'
import { AuthButton } from '../../components/Button/AuthButton'
import { Paragraph } from '../../components/Text/Paragraph'
import { useNavigate } from 'react-router-dom'
import { LogInProps } from "../../interface/UserProps"
import { useForm, Controller } from "react-hook-form"
import { useAuth } from '../../context/users/useAuth';
import { LogInApi } from '../../packages/api/users/LogInApi';
import { Loading } from '../../components/Common/Loading';
import { BodyOverlay } from '../../styles/components/Loading'


export const LogIn: React.FC = () => {
  const navigate = useNavigate();
  const [logInError, setLogInError] = useState<string | null>('');
  const [loading, setLoading] = useState(false);


  // using the react hook forms to define the login for users
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<LogInProps>();

  // using the auth context
  const { login } = useAuth();


  // handle navigation to login page
  const handleNavigation = (route: string | undefined) => {
    if (route === undefined) {
      route = 'login';
    }
    navigate(`/${route}`);
  };

  // handle form submission for login
  const onSubmit = async (data: LogInProps) => {
    setLogInError(null); // reset previous error
    setLoading(true);

    try {
      const response = await LogInApi(data);
      login({ user: response.user, token: response.token });

      // Wait 2 seconds before navigating
      setTimeout(() => {
        handleNavigation('home');
        setLoading(false); // Stop loading (optional since you're navigating)
      }, 2000);
    } catch (err: any) {
      setLogInError(err?.message || 'Login failed, try again');
      setLoading(false);
    }
  };

  return (
    <>
      <AuthPageContainer>
        <Header text="Login" className='text-center px-4 leading-10' />

        {/* form group here */}
        <FormContainer action='' method='post' onSubmit={handleSubmit(onSubmit)}>
          {/* inputs */}
          {/* email form */}
          <Controller
            control={control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Email"
                label="email"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm text-left">{errors.email.message}</p>
          )}
          {/* password input */}
          <Controller
            control={control}
            name="password"
            rules={{ required: "password is required" }}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="password"
                label="password"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Error Message */}
          {logInError && (
            <p className="text-red-600 text-sm text-center">{logInError}</p>
          )}

          {/* button submission */}
          <AuthButton
            text={isSubmitting ? 'Logging in...' : 'Continue'}
            type="submit"
          />

          {/* link to login */}
          <div className='flex flex-row items-center gap-2'>
            <Paragraph text="New User?" />
            <a onClick={() => { handleNavigation('register') }}
              className='font-normal text-blue-500 cursor-pointer'>
              Create an account</a>
          </div>

        </FormContainer>

      </AuthPageContainer>


      {loading && <Loading />}
      {loading && <BodyOverlay />}
    </>
  )
}


