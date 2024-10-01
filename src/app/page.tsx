import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center bg-content/base">
      <div className="flex flex-col gap-12 py-8 px-4 max-w-[700px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Suggested Posts</h2>
          <div className="flex flex-col bg-content/surface shadow rounded-2xl border border-content/border">
            <div className="flex flex-col p-4 rounded-t-2xl">
              <div className="flex gap-3">
                <div>
                  <Image
                    src="/Avatar.png"
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="rounded-3xl"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex flex-col gap-1 py-1">
                    <h3 className="text-base text-text/text-primary">
                      Emily Johnson
                    </h3>
                    <p className="text-xs text-text/text-secondary">@emilys</p>
                  </div>
                  <p className="text-sm text-text/text-secondary">
                    Post body lorem ipsum dolor sit amet consectetur. Sem
                    vestibulum massa lacus interdum enim fringilla.
                  </p>
                  <div className="flex gap-3 text-primary/default">
                    <span className="text-xs">#tag1</span>
                    <span className="text-xs">#tag2</span>
                    <span className="text-xs">#tag3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 p-4 border-t rounded-b-2xl">
              <span className="flex items-center gap-1 text-sm text-text/text-secondary">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-text/text-light"
                >
                  <path
                    d="M4.66659 14.6666H2.66659C2.31296 14.6666 1.97382 14.5262 1.72378 14.2761C1.47373 14.0261 1.33325 13.6869 1.33325 13.3333V8.66665C1.33325 8.31302 1.47373 7.97389 1.72378 7.72384C1.97382 7.47379 2.31296 7.33331 2.66659 7.33331H4.66659M9.33325 5.99998V3.33331C9.33325 2.80288 9.12254 2.29417 8.74747 1.9191C8.37239 1.54403 7.86369 1.33331 7.33325 1.33331L4.66659 7.33331V14.6666H12.1866C12.5081 14.6703 12.8202 14.5576 13.0652 14.3493C13.3102 14.1411 13.4717 13.8513 13.5199 13.5333L14.4399 7.53331C14.4689 7.34222 14.456 7.1471 14.4021 6.96148C14.3483 6.77586 14.2547 6.60418 14.1278 6.45832C14.001 6.31247 13.844 6.19593 13.6676 6.11679C13.4913 6.03765 13.2999 5.99779 13.1066 5.99998H9.33325Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                20
              </span>
              <span className="flex items-center gap-1 text-sm text-text/text-secondary">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-text/text-light"
                >
                  <path
                    d="M14.6666 1.33331L7.33325 8.66665M14.6666 1.33331L9.99992 14.6666L7.33325 8.66665M14.6666 1.33331L1.33325 5.99998L7.33325 8.66665"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                24
              </span>
              <span className="flex items-center gap-1 text-sm text-text/text-secondary">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-text/text-light"
                >
                  <path
                    d="M0.666748 6.00002C0.666748 6.00002 3.33341 0.666687 8.00008 0.666687C12.6667 0.666687 15.3334 6.00002 15.3334 6.00002C15.3334 6.00002 12.6667 11.3334 8.00008 11.3334C3.33341 11.3334 0.666748 6.00002 0.666748 6.00002Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.00008 8.00002C9.10465 8.00002 10.0001 7.10459 10.0001 6.00002C10.0001 4.89545 9.10465 4.00002 8.00008 4.00002C6.89551 4.00002 6.00008 4.89545 6.00008 6.00002C6.00008 7.10459 6.89551 8.00002 8.00008 8.00002Z"
                    stroke="#5C6970"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                1,230
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Who to follow</h2>
          <div className="flex gap-4 flex-wrap">
            <div className="flex flex-col bg-content/surface shadow rounded-2xl border border-content/border max-w-[326px]">
              <div className="flex flex-col p-4 rounded-t-2xl">
                <div className="flex gap-3">
                  <div>
                    <Image
                      src="/Avatar.png"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex flex-col gap-1 py-1">
                      <h3 className="text-base text-text/text-primary min-w-[154px]">
                        Emily Johnson
                      </h3>
                      <p className="text-xs text-text/text-secondary">
                        @emilys
                      </p>
                    </div>
                  </div>
                  <button className="py-2 px-3.5 border text-primary/default border-primary/default rounded-3xl">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-content/surface shadow rounded-2xl border border-content/border max-w-[326px]">
              <div className="flex flex-col p-4 rounded-t-2xl">
                <div className="flex gap-3">
                  <div>
                    <Image
                      src="/Avatar.png"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex flex-col gap-1 py-1">
                      <h3 className="text-base text-text/text-primary min-w-[154px]">
                        Emily Johnson
                      </h3>
                      <p className="text-xs text-text/text-secondary">
                        @emilys
                      </p>
                    </div>
                  </div>
                  <button className="py-2 px-3.5 border text-primary/default border-primary/default rounded-3xl">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-content/surface shadow rounded-2xl border border-content/border max-w-[326px]">
              <div className="flex flex-col p-4 rounded-t-2xl">
                <div className="flex gap-3">
                  <div>
                    <Image
                      src="/Avatar.png"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex flex-col gap-1 py-1">
                      <h3 className="text-base text-text/text-primary min-w-[154px]">
                        Emily Johnson
                      </h3>
                      <p className="text-xs text-text/text-secondary">
                        @emilys
                      </p>
                    </div>
                  </div>
                  <button className="py-2 px-3.5 border text-primary/default border-primary/default rounded-3xl">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-content/surface shadow rounded-2xl border border-content/border max-w-[326px]">
              <div className="flex flex-col p-4 rounded-t-2xl">
                <div className="flex gap-3">
                  <div>
                    <Image
                      src="/Avatar.png"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex flex-col gap-1 py-1">
                      <h3 className="text-base text-text/text-primary min-w-[154px]">
                        Emily Johnson
                      </h3>
                      <p className="text-xs text-text/text-secondary">
                        @emilys
                      </p>
                    </div>
                  </div>
                  <button className="py-2 px-3.5 border text-primary/default border-primary/default rounded-3xl">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Recent</h2>
          <div className="flex flex-col bg-content/surface shadow rounded-2xl border border-content/border">
            <div className="flex flex-col p-4 rounded-t-2xl">
              <div className="flex gap-3">
                <div>
                  <Image
                    src="/Avatar.png"
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="rounded-3xl"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex flex-col gap-1 py-1">
                    <h3 className="text-base text-text/text-primary">
                      Emily Johnson
                    </h3>
                    <p className="text-xs text-text/text-secondary">@emilys</p>
                  </div>
                  <p className="text-sm text-text/text-secondary">
                    Post body lorem ipsum dolor sit amet consectetur. Sem
                    vestibulum massa lacus interdum enim fringilla.
                  </p>
                  <div className="flex gap-3 text-primary/default">
                    <span className="text-xs">#tag1</span>
                    <span className="text-xs">#tag2</span>
                    <span className="text-xs">#tag3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 p-4 border-t rounded-b-2xl">
              <span className="flex items-center gap-1 text-sm text-text/text-secondary">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-text/text-light"
                >
                  <path
                    d="M4.66659 14.6666H2.66659C2.31296 14.6666 1.97382 14.5262 1.72378 14.2761C1.47373 14.0261 1.33325 13.6869 1.33325 13.3333V8.66665C1.33325 8.31302 1.47373 7.97389 1.72378 7.72384C1.97382 7.47379 2.31296 7.33331 2.66659 7.33331H4.66659M9.33325 5.99998V3.33331C9.33325 2.80288 9.12254 2.29417 8.74747 1.9191C8.37239 1.54403 7.86369 1.33331 7.33325 1.33331L4.66659 7.33331V14.6666H12.1866C12.5081 14.6703 12.8202 14.5576 13.0652 14.3493C13.3102 14.1411 13.4717 13.8513 13.5199 13.5333L14.4399 7.53331C14.4689 7.34222 14.456 7.1471 14.4021 6.96148C14.3483 6.77586 14.2547 6.60418 14.1278 6.45832C14.001 6.31247 13.844 6.19593 13.6676 6.11679C13.4913 6.03765 13.2999 5.99779 13.1066 5.99998H9.33325Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                20
              </span>
              <span className="flex items-center gap-1 text-sm text-text/text-secondary">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-text/text-light"
                >
                  <path
                    d="M14.6666 1.33331L7.33325 8.66665M14.6666 1.33331L9.99992 14.6666L7.33325 8.66665M14.6666 1.33331L1.33325 5.99998L7.33325 8.66665"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                24
              </span>
              <span className="flex items-center gap-1 text-sm text-text/text-secondary">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-text/text-light"
                >
                  <path
                    d="M0.666748 6.00002C0.666748 6.00002 3.33341 0.666687 8.00008 0.666687C12.6667 0.666687 15.3334 6.00002 15.3334 6.00002C15.3334 6.00002 12.6667 11.3334 8.00008 11.3334C3.33341 11.3334 0.666748 6.00002 0.666748 6.00002Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.00008 8.00002C9.10465 8.00002 10.0001 7.10459 10.0001 6.00002C10.0001 4.89545 9.10465 4.00002 8.00008 4.00002C6.89551 4.00002 6.00008 4.89545 6.00008 6.00002C6.00008 7.10459 6.89551 8.00002 8.00008 8.00002Z"
                    stroke="#5C6970"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                1,230
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
