import { useEffect } from "react";
import { useUiStore } from "@/store";
import { Link } from "react-router-dom";
import BottomButton from "@/components/BottomButton";

export default function Home() {
    const updateHeader = useUiStore((s) => s.updateHeader);

    useEffect(() => {
        updateHeader("홈");
    }, [updateHeader]);

    return (
        <div className="h-full grid place-items-center">
            <Link to="/party/new">
                <BottomButton label="모임 만들기" />
            </Link>
        </div>
    );
}
