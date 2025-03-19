/**
 * Login Form
 */

import Input from "./Input";

export default function LoginForm({ className = "" }: { className?: string }) {
  return (
    <form
      className={`flex flex-col gap-8 px-8 py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-gray-700 ${className}`}
    >
      <Input label="Email" name="email" type="email" />
      <button className="button-1">Send Login Code</button>
    </form>
  );
}
