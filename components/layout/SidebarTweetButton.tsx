import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

import useLoginModal from "@/hooks/useLoginModal"; //useLoginModalはカスタムフックで、ログインモーダルを表示するためのものです。

const SidebarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal(); //useLoginModalはカスタムフックで、ログインモーダルを表示するためのものです。

    const onClick = useCallback(() => {
        loginModal.onOpen(); //ログインモーダルを開く関数を呼び出します。
    },[loginModal]); //loginModalが変更されたときに再実行されるようにします。

    return(
        <div onClick={onClick}>
            <div
                className="
                    mt-6
                    lg:hidden
                    rounded-full
                    h-14
                    w-14
                    p-4
                    flex
                    items-center
                    justify-center
                    bg-sky-500
                    hover:bg-opacity-80
                    transition
                    curor-pointer
                "
            >
                <FaFeather size={24} color="white" /> {/*アイコンの名前　サイズ 色*/}
            </div>
            <div
                className="
                    mt-6
                    hidden
                    lg:block
                    px-4
                    py-2
                    rounded-full
                    bg-sky-500
                    hover:bg-opacity-90
                    cursor-pointer
                    transition
                "
            >
                <p className="
                    hidden
                    lg:block
                    text-center
                    font-semibold
                    text-white
                    text-[20px]
                ">
                    ツイートする
                </p>
            </div>
        </div>
    );
}

export default SidebarTweetButton;