"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

type Props = {};

function Gnb({}: Props) {
  function login() {}

  return (
    <header>
      <h1>
        <Link href="/">돌아온 9동여지도!</Link>
      </h1>

      <ul>
        <li>
          <Link href="/auth/signin">로그인</Link>
        </li>
        {/* <li>
          <Link href="/settings">마이페이지</Link>
        </li>
        <li>
          <Link href="/signout">로그아웃</Link>
        </li> */}
      </ul>
    </header>
  );
}

export default Gnb;
