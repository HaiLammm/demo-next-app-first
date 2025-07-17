import Link from "next/link";
import x from "./style/style.module.css";
export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link href={"./auth/signin/"}>Day la Trang dang nhap bang link</Link>
                </li>
                <li>
                    <a className={x["red"]} href="./auth/singup/">
                        Dang Ki:
                    </a>
                </li>
            </ul>
        </div>
    );
}
