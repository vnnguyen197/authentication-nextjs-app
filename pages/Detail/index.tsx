import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import withRoute from '../../hocs/withRoute';
import authAPI from '../../services/AuthAPI';
import style from './style.module.scss'

export interface IDetailProps {}

function Detail (props: IDetailProps) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className={style.detail}>
      <Head>
        <title>Detail</title>
      </Head>
           <h1 className={style.detail__h1}>Detail Authentication</h1>
           <button className={style.detail__button} onClick={logout}>
            <Link href="/">LOGOUT</Link>
          </button>
    </div>
  );
}
export default withRoute(Detail);