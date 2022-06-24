import { useRouter } from 'next/router';
import * as React from 'react';
import authAPI from '../../services/AuthAPI';
import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import withRoute from '../../hocs/withRoute';

export interface IRegisterProps {}

function Register(props: IRegisterProps) {
  const router = useRouter();
  const onSubmit = async (dt: any) => {
    console.log(dt);
    const { data: token } = await authAPI.Register(dt);
    try {
      localStorage.setItem('token', token);
      router.push('/');
    } catch (error: any) {
      alert(error.message);
    }
  };

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  return (
    <div className={style.register}>
      <Head>
        <title>Register</title>
      </Head>
      <h1 className={style.register__title}>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.register__content}>
          <div className={style.register__user}>
            <label
              className={style['register__user--name']}
              style={{ marginRight: '10px' }}>
              First Name
            </label>
            <input
              type='text'
              {...register('firstname', {
                required: 'Please enter your first name.',
              })}
            />
          </div>
          <div className={style.register__pass}>
            <label
              className={style['register__user--name']}
              style={{ marginRight: '15px' }}>
              Last Name
            </label>
            <input
              type='text'
              {...register('lastname', {
                required: 'Please enter your last name.',
              })}
            />
          </div>
          <div className={style.register__user}>
            <label
              className={style['register__user--name']}
              style={{ marginRight: '10px' }}>
              Username
            </label>
            <input
              type='text'
              {...register('username', {
                required: 'Please enter your user name.',
              })}
            />
          </div>
          <div className={style.register__pass}>
            <label
              className={style['register__user--name']}
              style={{ marginRight: '15px' }}>
              Password
            </label>
            <input
              type='password'
              {...register('password', {
                required: 'Please enter your password.',
              })}
            />
          </div>
        </div>
        <div className={style.register__button}>
          <button
            className={style['register__button--btn']}
            type='submit'
            onSubmit={handleSubmit(onSubmit)}>
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRoute(Register, { isProtected: false });
