import Logo from "@public/devin.png";
import LogoDarkMode from "@public/devin2.png";
import { useAppStore } from "@states/app";
import { cx } from "@utils/tools";
import Head from "next/head";
import Image from "next/image";

export const MainLayout: IComponent = ({ children }) => {
  // Manual switch darkMode with state
  const { darkMode } = useAppStore();

  return (
    <div
      className={cx(
        {
          dark: darkMode === "dark",
        },
        "w-full min-h-screen h-full font-serif"
      )}
    >
      <div className="dark:text-white w-full h-full bg-white dark:bg-default transition-all flex flex-col">
        <Head>
          <title>Laliga</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grow">{children}</div>
        <footer className="sticky flex pb-8  justify-center items-center">
          <a
            className="mx-40 pt-4 border-t border-[#eaeaea] flex-grow text-center cursor-pointer"
            target="_blank"
            href="https://www.wearedevin.com/"
            rel="noreferrer"
          >
            Powered by{" "}
            <span className="h-4 ml-2 bg-default p-2 rounded-lg dark:bg-primary">
              <Image
                src={darkMode === "dark" ? LogoDarkMode : Logo}
                alt="deVin Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
};
