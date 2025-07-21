import Link from "next/link";
import {Button} from "@/components/ui/button"
import x from "./style/style.module.css";
export default function Home() {
    return (
        <div>
            <ul>
                <li>
            <Button> <Link href={"./auth/signin/"}><h1>Dang Nhap</h1></Link>
</Button>                       </li>
                <li>
                    <a className={x["red"]} href="./auth/singup/">
                        <h1>Dang Ki:</h1>
                    </a>
                </li>
            </ul>
        </div>
    );
}
