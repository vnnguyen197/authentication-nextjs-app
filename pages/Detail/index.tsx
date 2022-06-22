import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import style from './style.module.scss'

export interface IDetailProps {
}

export default function Detail (props: IDetailProps) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className={style.detail}>
           <h1 className={style.detail__h1}>Detail Authentication</h1>
           <button className={style.detail__button} onClick={logout}>
            <Link href="/">LOGOUT</Link>
          </button>
    </div>
  );
}
