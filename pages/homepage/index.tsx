import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import styles from "./style.module.scss";

export interface ILogoutProps {}

export default function HomePage(props: ILogoutProps) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={styles.homepage__content}>
        <h1 className={styles.homepage__h1}> HOME PAGE </h1>
        <div className={styles.homepage__contentbtn}>
          <button className={styles.homepage__button}>
            <Link href="/detail">DETAIL</Link>
          </button>
          <button className={styles.homepage__button}>
            <Link href="/default">DEFAULT</Link>
          </button>
          <button className={styles.homepage__button} onClick={logout} >
            <Link href="/">LOGOUT</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
