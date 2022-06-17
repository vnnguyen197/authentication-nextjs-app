import * as React from "react";
import style from "./style.module.scss";

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
 
  return (
    <div className={style.login}>
    <h1 className={style.login__title}>Register</h1>
      <div className={style.login__content}>
        <div className={style.login__user}>
          <label className={style["login__user--name"]} style={{marginRight:'10px'}}>First Name</label>
          <input name="firstname" type="text" />
        </div>
        <div className={style.login__pass}>
          <label className={style["login__user--name"]} style={{marginRight:'15px'}}>Last Name</label>
          <input name="lastname" type="text" />
        </div>
        <div className={style.login__user}>
          <label className={style["login__user--name"]} style={{marginRight:'10px'}}>Username</label>
          <input name="username" type="text" />
        </div>
        <div className={style.login__pass}>
          <label className={style["login__user--name"]} style={{marginRight:'15px'}}>Password</label>
          <input name="password" type="password" />
        </div>
      </div>
      <div className={style.login__button}>
        <div className={style["login__button--btn"]}>
          REGISTER
        </div>
      </div>
  </div>
  );
}
