import { useEffect } from "react";
import { useUiStore } from "@/store";

export default function Home() {
    const updateHeader = useUiStore((s) => s.updateHeader);

    useEffect(() => {
        updateHeader("홈");
    }, [updateHeader]);

    return (
        <>
            <h1>Home</h1>
        </>
    );
}
