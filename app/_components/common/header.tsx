import Image from "next/image";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="common header">
      <h1>
        <a href="#">구동여지도</a>
      </h1>
      <div className="user">
        <a href="/signin" className="signin">
          로그인
        </a>
        <a href="/signup" className="signup">
          회원가입
        </a>
      </div>
    </header>
  );
}
