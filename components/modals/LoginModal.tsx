import useLoginModal from "@/hooks/useLoginModal";
import { use, useCallback, useState } from "react";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpenLoading, setIsOpenLoading] = useState(false);

    const onsubmit = useCallback(async() => {
        try {

        } catch (error) {
            console.log(error);
        }
    },[]);

    return (
        <div></div>
    );
}

export default LoginModal;