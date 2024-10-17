"use client";
import React from "react";

type Props = {};
function SignUpForm({}: Props) {
  return (
    <>
      <form className="signup-form">
        <div>
          <label htmlFor="id">ID</label>
          <input type="text" id="id" />
        </div>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" />
        <label htmlFor="id">ID</label>
        <input type="text" id="id" />
      </form>
    </>
  );
}

export default SignUpForm;
