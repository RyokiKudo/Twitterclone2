import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () =>{
    const router = useRouter();
    return (
        //Twitterアイコンの形設定 鳥のアイコンの設定
        <div
            onClick={() => router.push('/')} 
            className="
                rouned-full
                h-14
                w-14
                p-4
                flex
                items-center
                justify-center
                hover:bg-blue-300
                hover:bg-opacity-10
                cursor-pointer
                transition
        ">
            <BsTwitter size={28} color="#18B5F9" />
            {/*Twitterアイコンのサイズと色相設定*/}
        </div>
    );
}

export default SidebarLogo;