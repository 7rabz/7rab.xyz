import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"[ 7rab.xyz ~ sillyhexa / bio ]"}
        description={"Adien's personal website, hosted on a few potatos and some kilobytes of ram."}
        canonical={`https://7rab.xyz${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://7rab.xyz${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "[ 7rab.xyz ~ sillyhexa / bio ]",
          description: "Adien's personal website, hosted on a few potatos and some kilobytes of ram.",
          images: [
            {
              url: "https://cdn.discordapp.com/avatars/1042440993028460594/8fb2a45a551b86f0489d8af28456e31c.webp?size=1024",
              alt: "silly hexa!",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
