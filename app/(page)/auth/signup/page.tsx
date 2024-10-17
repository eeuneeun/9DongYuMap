"use client";

import React from "react";
import SignUpForm from "../../../_components/auth/signUpForm";

type Props = {};

export default function SignUp(props: Props) {
  return (
    <div>
      <h3>회원가입</h3>
      <SignUpForm />
    </div>
  );
}
