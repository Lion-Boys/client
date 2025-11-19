import { useEffect } from "react";
import { useUiStore } from "@/store";
import { Link } from "react-router-dom";
import Button from "@/components/Button";

export default function Home() {
    const updateHeader = useUiStore((s) => s.updateHeader);

    useEffect(() => {
        updateHeader("홈");
    }, [updateHeader]);

    return (
        <div className="h-full grid place-items-center">
            <Link to="/party/new">
                <Button label="모임 만들기" />
            </Link>
        </div>
    );
}
