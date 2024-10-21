"use client";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

export interface ISignUpFormProps {
  email: string;
  password: string;
  name: string;
}

// # 이메일 로그인 Caller 함수
async function callPOST(data: ISignUpFormProps, type: string) {
  // await signUp(type, {
  //   email: data.email,
  //   password: data.password,
  //   redirect: true,
  //   callbackUrl: "/",
  // });
  console.log("aaaa");
}

function SignUpForm({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpFormProps>();

  // # 이메일 로그인 React Hook Form 함수
  const onSubmit: SubmitHandler<ISignUpFormProps> = (data) => {
    console.log("data", data);
    callPOST(data, "credentials");
    // console.log("result", result)
  };

  return (
    <>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">ID</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input type="text" id="password" />
        </div>
        <div>
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" />
        </div>
        <Link
          href="/auth/signup"
          className="email"
          onClick={() => handleSubmit(onSubmit)}
        >
          가입
        </Link>
      </form>
    </>
  );
}

export default SignUpForm;
