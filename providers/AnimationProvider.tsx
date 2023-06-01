"use client";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface IProps {
  pageProps: AppProps;
  children: ReactNode;
}

const AnimationProvider = ({ children, pageProps }: IProps) => {
  return (
    <AnimatePresence initial={false} mode="popLayout">
      {}
    </AnimatePresence>
  );
};

export default AnimationProvider;
