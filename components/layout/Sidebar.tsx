import { BsBellFill} from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { LuSquareSlash } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { BsTwitter } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { PiToolboxBold } from "react-icons/pi"; //求人のアイコン
import { AiOutlineThunderbolt } from "react-icons/ai"; //認証済み組織のアイコン
import { BiLogOut } from "react-icons/bi"; //ログアウトのアイコン
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () =>{
    //下の配列と，divを追加すれば今のTwitter(X)にすることが可能
    //このSidebarがアイコン管理
    const items = [
        {
            //home icon
            label: 'ホーム',
            href: '/home',
            icon: GoHome
        },
        {
            //虫眼鏡アイコン
            label: '話題を検索',
            href: '/sreach',
            icon: IoSearchSharp
        },
        {
            //bell icon
            label: '通知',
            href: '/notifications',
            icon: BsBellFill
        },
        {
            label: 'メッセージ',
            href: '/message',
            icon: CiMail
        },
        {
            label: 'Grok',
            href: '/grok',
            icon: LuSquareSlash
        },
        {
            label: 'リスト',
            href: '/list',
            icon: TbNotes
        },
        {
            label: 'ブックマーク',
            href: '/bookmark',
            icon: FaRegBookmark
        },
        {
            label: '求人',
            href: '/Jobs',
            icon: PiToolboxBold
        },
        {
            label: 'コミュニティ',
            href: '/community',
            icon: FaUserFriends
        },
        {
            label: 'プレミアム',
            href: '/premium',
            icon: BsTwitter
        },
        {
            label: '認証済み組織',
            href: '/Organization',
            icon: AiOutlineThunderbolt
        },
        {
            label: 'プロフィール',
            href: '/users/123', //ユーザーID設定 今はAPI設定していないので後で
            icon: IoPersonOutline
        },
        {
            label: 'もっと見る',
            href: '/seemore',
            icon: HiOutlineDotsCircleHorizontal
        },
        {
            label: 'ログアウト',
            href: '/logout',
            icon: BiLogOut
        }
    ];
    return (
        <div className="col-span-1 h-full pr-2 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y lg:w-[200px]"> {/*y-2じゃなくした*/}
                    <SidebarLogo />
                    {/*下のitemsの文章はイテレータを設置しようとしている*/}
                    {items.map((item) => (
                        <SidebarItem
                          key={item.href}
                          href={item.href}
                          label={item.label}
                          icon={item.icon}
                        />
                    ))}
                    {/*<SidebarItem onclick={()=> {}} icon={BiLogOut} label="Logout"/> {/*ログアウト表示*/}
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    );
}
export default Sidebar;