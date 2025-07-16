import Link from "next/link";
export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link href={"./auth/signin/"}>Day la Trang dang nhap bang link</Link>
                </li>
                <li>
                    <a href="./auth/singup/">Dang Ki:</a>
                </li>
            </ul>
        </div>
    );
}
