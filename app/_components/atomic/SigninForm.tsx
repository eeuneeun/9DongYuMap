import { signIn } from "@/app/auth";

export function SignIn() {
  return (
    <form
      className="signin-form"
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
    >
      <label>
        <span>E-MAIL</span>
        <input name="email" type="email" />
      </label>
      <label>
        <span>PASSWORD</span>
        <input name="password" type="password" />
      </label>

      <div className="btn-group">
        <button className="signin-btn">SIGN IN</button>
        <button className="signup-btn">SIGN UP</button>
        <button className="find-btn">FIND ACCOUNT</button>
      </div>
    </form>
  );
}
