import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");
  const { pathname } = request.nextUrl;

  // 로그인이 필요한 페이지 목록
  const protectedRoutes = [
    "/write", // 글쓰기 페이지
    "/settings", // 설정 페이지
    "/my-page", // 마이 페이지
  ];

  // 로그인이 필요한 페이지에 접근할 때만 체크
  if (
    !authCookie &&
    protectedRoutes.some((route) => pathname.startsWith(route))
  ) {
    const url = new URL("/login", request.url);
    url.searchParams.set("from", pathname); // 로그인 후 돌아올 페이지 저장
    return NextResponse.redirect(url);
  }

  // 로그인 상태에서 로그인/회원가입 페이지 접근 시 홈으로 리다이렉트
  if (authCookie && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
