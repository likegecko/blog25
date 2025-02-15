import { Suspense } from "react";

import LoginForm from "@/app/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          로그인
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
