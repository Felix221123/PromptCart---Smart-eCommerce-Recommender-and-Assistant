import React, { useState } from 'react'
import { AuthPageContainer, FormContainer } from '../../styles/pages/AuthPageStyles'
import { Header } from '../../components/Text/Header'
import { Input } from '../../components/Common/Input'
import { AuthButton } from '../../components/Button/AuthButton'
import { Paragraph } from '../../components/Text/Paragraph'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form"
import { Loading } from '../../components/Common/Loading';
import { BodyOverlay } from '../../styles/components/Loading'
import { RegisterApi } from '../../packages/api/users/RegisterApi'
import { RegisterProps } from '../../interface/UserProps'


export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState<string | null>('');
  const [loading, setLoading] = useState(false);

  // handle navigation to login page
  const handleNavigation = (route: string | undefined) => {
    if (route === undefined) {
      route = 'login';
    }
    navigate(`/${route}`);
  }

  // using the react hook forms to define the login for users
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<RegisterProps>();


  // handle form submission for login
  const onSubmit = async (data: RegisterProps) => {
    setRegisterError(null); // reset previous error
    setLoading(true);

    try {
      const response = await RegisterApi(data);

      if (response) {
        // Wait 2 seconds before navigating
        setTimeout(() => {
          handleNavigation('login');
          setLoading(false); 
        }, 2000);
      } else {
        // Throw the entire response object
        const errorData = await response.json();
        console.log(errorData);
        throw { status: response.status, ...errorData };
      }

    } catch (err: any) {
      setRegisterError(err?.message || 'Registration failed, try again');
      setLoading(false);
    }
  };


    // watch the password field
    const password = watch('password');






  return (
    <>
      <AuthPageContainer>

        <Header text="Register" className='text-center px-4 leading-10' />

        {/* form group here */}
        <FormContainer action='' method='post' onSubmit={handleSubmit(onSubmit)}>
          {/* inputs */}
          {/* first name */}
          <Controller
            control={control}
            name="firstName"
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="First Name"
                label="First Name"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm text-left">{errors.firstName.message}</p>
          )}

          {/* last name */}
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Last Name"
                label="Last Name"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm text-left">{errors.lastName.message}</p>
          )}

          {/* email */}
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

          {/* password */}
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
            <p className="text-red-500 text-sm text-left">{errors.password.message}</p>
          )}

          {/* confirm password */}
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match"
            }}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="password"
                label="confirm password"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm text-left">{errors.confirmPassword.message}</p>
          )}

          {/* Error Message */}
          {registerError && (
            <p className="text-red-600 text-sm text-center">{registerError}</p>
          )}

          {/* button submission */}
          <AuthButton
            text={isSubmitting ? 'Logging in...' : 'Continue'}
            type="submit"
          />

          {/* link to login */}
          <div className='flex flex-row items-center gap-2 mb-8'>
            <Paragraph text="Already a member?" />
            <a onClick={() => handleNavigation('login')} className='font-normal text-blue-500 cursor-pointer'>Login</a>
          </div>

        </FormContainer>
      </AuthPageContainer>


      {loading && <Loading />}
      {loading && <BodyOverlay />}
    </>
  )
}

