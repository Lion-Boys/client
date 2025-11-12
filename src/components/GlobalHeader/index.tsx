import { useUiStore } from "@/store";

export default function GlobalHeader() {
    const showGradientBackground = useUiStore((s) => s.showGradientBackground);
    const title = useUiStore((s) => s.headerTitle);
    document.title = title;

    return (
        <div
            className={`fixed w-full h-13.5 grid place-items-center z-9999 ${
                showGradientBackground ? "bg-transparent" : "bg-white"
            }`}
        >
            <p className="font-text-lg-18_semibold text-grey-900_text select-none">{title}</p>
        </div>
    );
}
