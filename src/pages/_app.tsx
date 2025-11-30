import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"[ hex's page / bio ]"}
        description={"mrrp | Read more about me, just click the link above!"}
        canonical={`https://7rab.xyz${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://7rab.xyz${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "[ hex's page / bio ]",
          description: "mrrp | Read more about me, just click the link above!",
          images: [
            {
              url: "https://cdn.7rab.xyz/image.png",
              alt: "hex!",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
