import Link from "next/link";
import MainContents from "./(page)/main/page";
const id = 1;

export default function Main() {
  return (
    <div className="main">
      <main>
        <MainContents />
      </main>
      <footer>All copyright are reserved by The Team Boeun</footer>
    </div>
  );
}
