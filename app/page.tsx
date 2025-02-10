import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-4xl font-bold mb-6">홈페이지</h2>
        <p className="text-gray-600">
          환영합니다! 이곳은 블로그 홈페이지입니다.
        </p>
      </main>
    </div>
  );
}
