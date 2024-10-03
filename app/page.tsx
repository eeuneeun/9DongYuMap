import Link from "next/link";
const id = 1;

export default function Main() {
  return (
    <div className="main">
      <header>돌아온 9동여지도!</header>
      <main>
        <button>+</button>
        <ul>
          <li>
            <Link href={`app/thread/${id}/page.js`}>
              <article>
                <div>오늘 순대차 어디 있는지 아시는 분?</div>
              </article>
            </Link>
          </li>
        </ul>
      </main>
      <footer>All copyright are reserved by The Team Boeun</footer>
    </div>
  );
}
