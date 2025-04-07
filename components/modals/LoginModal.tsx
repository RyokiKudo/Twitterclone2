import { use, useCallback, useState } from "react";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import Input from "../Input";
import Modal from "../Modal";


const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isLoading) {
            return;
        }

        loginModal.onClose(); //登録画面の✖ボタン を押したときの処理 close関数を渡して呼び出しているregisterModal.onClose();
        registerModal.onOpen(); //ログイン画面の✖ボタン を押したときの処理 close関数を渡して呼び出しているloginModal.onOpen();        
    },[isLoading, registerModal, loginModal]);

    const onsubmit = useCallback(async() => {
        try {
            setIsLoading(true);

            // Todo: Add login

            
        loginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    },[loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="メールアドレス"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading} 
            />
            <Input
                placeholder="パスワード"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading} 
            />
        </div>
    );

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Twitterを初めて使いますか？
                <span
                    onClick={onToggle} //ログイン画面の✖ボタン を押したときの処理 close関数を渡して呼び出している
                    className="
                        text-white
                        cursor-pointer
                        hover:underline
                    "
                > アカウントを作成する</span>
            </p>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="ログイン"
            actionLabel="ログイン"
            onClose={loginModal.onClose} //登録画面の✖ボタン を押したときの処理 close関数を渡して呼び出している
            onSubmit={onsubmit}
            body={bodyContent}
            footer={footerContent} //COPIKOTの説明による修正
            />
    );
}

export default LoginModal;