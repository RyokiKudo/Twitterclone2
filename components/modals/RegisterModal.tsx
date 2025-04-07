import { useCallback, useState } from "react";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import Input from "../Input";
import Modal from "../Modal";


const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        console.log("isLoading", isLoading); //デバッグ用
        if(isLoading) {
            return;
        }

        registerModal.onClose(); //登録画面の✖ボタン を押したときの処理 close関数を渡して呼び出しているregisterModal.onClose();
        loginModal.onOpen(); //ログイン画面の✖ボタン を押したときの処理 close関数を渡して呼び出しているloginModal.onOpen();        
    },[isLoading, registerModal, loginModal]);

    const onsubmit = useCallback(async() => {
        try {
            setIsLoading(true);

            // Todo: Add REGISTAR AND LOGIN

            registerModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    },[registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="メールアドレス"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}             
            />
            <Input
                placeholder="名前"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}             
            />
            <Input
                placeholder="アカウント名"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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

    const footerContent = <div>テスト用フッター</div>/*(
        <div className="text-neutral-400 text-center mt-4">
            <p>すでにアカウントをお持ちですか？
                <span
                    className="
                        text-white
                        cursor-pointer
                        hover:underline
                    "
                >ログイン</span>
            </p>
        </div>
    )*/


    return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="アカウントを作成"
            actionLabel="次へ"
            onClose={registerModal.onClose} //登録画面の✖ボタン を押したときの処理 close関数を渡して呼び出している
            onSubmit={onsubmit}
            body={bodyContent}
            footer={footerContent} //登録画面の✖ボタン を押したときの処理 close関数を渡して呼び出している
        />
    );
}

export default RegisterModal;