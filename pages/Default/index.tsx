import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import style from './style.module.scss';

export interface IDefaultProps {
}

export default function Default (props: IDefaultProps) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className={style.default}>
        <h1 className={style.default__h1}>Not Authentication</h1>
        <button className={style.default__button} onClick={logout}>
            <Link href="/">LOGOUT</Link>
        </button>
    </div>
  );
}
