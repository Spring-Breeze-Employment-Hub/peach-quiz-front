import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Peach Quiz
            </span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 dark:text-gray-100"
              href="/info"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 dark:text-gray-100"
              href="#"
            >
              Quizzes
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 dark:text-gray-100"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 dark:text-gray-100"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-[#FFBE98]">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-1 md:gap-16">
                <div className="flex flex-col items-center space-y-4">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-gray-900 dark:text-gray-100">
                    Welcome to Peach Quiz
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    친구들을 초대해서 낱말 게임을 해봅시다!
                  </p>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/info"
                  >
                    방 만들기
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                    Share Your Room
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    공유받은 링크를 이곳에 입력 해보세요! <br /> 친구가 만든
                    방에 들어가서 퀴즈를 즐길 수 있습니다!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <input
                    className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-md text-gray-900 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Your room link"
                    type="text"
                  />
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Copy Link
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                    Start the Quiz
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Once everyone has joined, click the button below to start
                    the quiz.
                  </p>
                </div>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Start Quiz
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
