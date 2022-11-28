import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import withRoute from '../hocs/withRoute';
import authAPI from '../services/AuthAPI';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  const isLoggedIn = localStorage['token'];

  return (
    <div className={styles.container}>
      <Head>
        <title>Auth in NextJS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container__content}>
        <h1 className={styles.container__h1}> HOME PAGE </h1>
        <div className={styles.container__contentbtn}>
          <button className={styles.container__button}>
            <Link href='/detail'>DETAIL</Link>
          </button>
          <button className={styles.container__button}>
            <Link href='/default'>DEFAULT</Link>
          </button>
          {!isLoggedIn ? (
            <>
              <button className={styles.container__button} >
                <Link href='/login'>LOGIN</Link>
              </button>
              <button className={styles.container__button}>
                <Link href='/register'>REGISTER</Link>
              </button>
            </>
          ) : (
            <button className={styles.container__button} onClick={logout}>
              <Link href='/'>LOGOUT</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRoute(Home, { isProtected: false});
