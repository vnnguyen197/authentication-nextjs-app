import * as React from "react";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Head from "next/head";
import authAPI from "../../services/AuthAPI";
import withRoute from "../../hocs/withRoute";

function Login() {
  const router = useRouter();
  const onSubmit = async (dt: any) => {
    console.log(dt);
    const { data } = await authAPI.Login(dt);
    try {
      localStorage.setItem("token", data.token);
      router.push("/")
    } 
    catch (error: any) {
      alert(error.message);
    }
  };
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  // if (token) {
  //   localStorage.setItem("token", token);
  //   if (localStorage.getItem("url_old")) {
  //     setTimeout(() => router.push(localStorage.getItem("url_old")), 2000);
  //   }
  //   else setTimeout(() => router.push("/homepage"), 2000);
  // }
  // else {
  //   alert("abc");
  // }
  // call api login params is dt
  // if login success add token to localStorage -> Redirect to home with status is logined
  // if false toast a message error
  // }
  return (
    <div className={style.login}>
      <Head>
        <title>Login</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className={style.login__title}>LOGIN</h1>
        <div className={style.login__content}>
          <div className={style.login__user}>
            <label style={{ marginRight: "10px" }}>Username</label>
            <input type="text" {...register("username", { required: "Please enter your user name.",})}/>
          </div>
          <div className={style.login__pass}>
            <label style={{ marginRight: "15px" }}>Password</label>
            <input type="password" {...register("password", { required: "Please enter your password.", })}/>
          </div>
        </div>
        <div className={style.login__button}>
          <button className={style["login__button--btn"]} type="submit" onSubmit={handleSubmit(onSubmit)}>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRoute(Login, {isProtected:false});
