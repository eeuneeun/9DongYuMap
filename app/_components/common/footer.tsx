import Image from "next/image";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="common footer">
      <a href="/" target="_blank" rel="noopener noreferrer">
        &copy; All Copyrignt are reserved →
      </a>
    </footer>
  );
}
