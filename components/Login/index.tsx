import Link from "next/link";
import * as React from "react";
import style from "./style.module.scss";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  return (
    <div className={style.login}>
      <h1 className={style.login__title}>LOGIN</h1>
      <div className={style.login__content}>
        <div className={style.login__user}>
          <label style={{ marginRight: "10px" }}>Username</label>
          <input name="username" type="text" />
        </div>
        <div className={style.login__pass}>
          <label style={{ marginRight: "15px" }}>Password</label>
          <input name="password" type="password" />
        </div>
      </div>
      <div className={style.login__button}>
        <div className={style["login__button--btn"]}>LOGIN</div>
        <div className={style["login__button--btn"]}>
          <Link href="/Register">REGISTER</Link>
        </div>
      </div>
    </div>
  );
}
