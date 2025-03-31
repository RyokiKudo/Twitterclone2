import useLoginModal from "@/hooks/useLoginModal";
import { use, useCallback, useState } from "react";
import Input from "components/Input";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading} 
            />
            <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading} 
            />
        </div>
    );

    return (
        <div></div>
    );
}

export default LoginModal;