import { useRouter } from "next/router";
import * as React from "react";
import authAPI from "../../services/AuthAPI";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  const router = useRouter();
  const onSubmit = async (dt: any) => {
    console.log(dt);
    const { data: token } = await authAPI(dt);
    try {
      localStorage.setItem("token", token);
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };  

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  return (
    <div className={style.login} onSubmit={handleSubmit(onSubmit)}>
    <h1 className={style.login__title}>Register</h1>
      <div className={style.login__content}>
        <div className={style.login__user}>
          <label className={style["login__user--name"]} style={{marginRight:'10px'}}>First Name</label>
          <input type="text" {...register("firstname", { required: "Please enter your first name.",})}/>
        </div>
        <div className={style.login__pass}>
          <label className={style["login__user--name"]} style={{marginRight:'15px'}}>Last Name</label>
          <input type="text" {...register("lastname", { required: "Please enter your last name.",})}/>
        </div>
        <div className={style.login__user}>
          <label className={style["login__user--name"]} style={{marginRight:'10px'}}>Username</label>
          <input type="text" {...register("username", { required: "Please enter your user name.",})}/>
        </div>
        <div className={style.login__pass}>
          <label className={style["login__user--name"]} style={{marginRight:'15px'}}>Password</label>
          <input type="password" {...register("password", { required: "Please enter your pass word.",})}/>
        </div>
      </div>
      <div className={style.login__button}>
        <button className={style["login__button--btn"]} type="submit" onSubmit={handleSubmit(onSubmit)}>
          REGISTER
        </button>
      </div>
  </div>
  );
}
