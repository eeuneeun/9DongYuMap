import Link from "next/link";
import React from "react";

type Props = {};

function Gnb({}: Props) {
  return (
    <header>
      <h1>
        <Link href="/">돌아온 9동여지도!</Link>
      </h1>

      <ul>
        <li>
          <Link href="/auth">로그인</Link>
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
