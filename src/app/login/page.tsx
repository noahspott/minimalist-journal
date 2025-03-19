import { Section } from "@/components";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <main>
      <Section>
        <h1 className="heading-1 text-center">Login</h1>
      </Section>
      <Section>
        <LoginForm className="max-w-xl mx-auto" />
      </Section>
    </main>
  );
}
