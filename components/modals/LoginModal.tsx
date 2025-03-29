import useLoginModal from "@/hooks/useLoginModal";
import { useState } from "react";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpenLoading, setIsOpenLoading] = useState(false);

    

    return (
        <div></div>
    );
}

export default LoginModal;