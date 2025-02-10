import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          로그인
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}
