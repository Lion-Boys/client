import { useUiStore } from "@/store";

export default function GlobalHeader() {
    const showGradientBackground = useUiStore((s) => s.showGradientBackground);
    const title = useUiStore((s) => s.headerTitle);
    document.title = title;

    return (
        <div
            className={`fixed w-full h-13.5 grid place-items-center z-9999 ${
                showGradientBackground
                    ? "bg-transparent text-white"
                    : "bg-grey-50 text-grey-900_text"
            }`}
        >
            <p className="font-text-lg-18_semibold select-none">{title}</p>
        </div>
    );
}
