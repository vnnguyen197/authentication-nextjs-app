import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import style from './style.module.scss';

export interface IDefaultProps {
}

export default function Default (props: IDefaultProps) {

  return (
    <div className={style.default}>
      <Head>
        <title>Default</title>
      </Head>
        <h1 className={style.default__h1}>Not Authentication</h1>
        <button className={style.default__button} >
            <Link href="/detail">DETAIL</Link>
        </button>
    </div>
  );
}
