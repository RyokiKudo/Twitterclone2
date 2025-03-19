import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from 'react-icons/bi'; //戻るアイコン

interface HeaderProps {
    label: string;
    showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({label, showBackArrow}) => { //今の原因ここじゃね？
    const router = useRouter();

    const hanleback = useCallback(() => {
        router.back();
    },[router]);

    return (
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row items-center gap-2">
                {
                    showBackArrow && (
                        <BiArrowBack
                            onClick={hanleback}
                            color="white"
                            size={20}
                            className="
                                cursor-pointer
                                hover:opacity-70
                                transition
                            "
                        />
                    )
                }
                <h1 className="text-white text-xl font-semibold">{label}</h1>
            </div>
        </div>
    );
}
export default Headers;