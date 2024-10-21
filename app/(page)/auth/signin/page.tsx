import Link from "next/link";
import SignInForm from "../../../_components/auth/signInForm";

export default function SignIn() {
  return (
    <div className="signin">
      <main>
        <SignInForm />
        <Link href={"/auth/signup"}>회원 가입</Link>
      </main>
      <footer>All copyright are reserved by The Team Boeun</footer>
    </div>
  );
}
