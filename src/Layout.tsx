import { Outlet } from "react-router-dom";
import OnboardingGate from "./features/OnboardingGate";
import { useUiStore } from "./store/useUIStateStore";

/**
 * Layout
 * 온보딩 게이트 및 레이아웃 적용
 *
 * - 좌우 패딩 20px
 * - 모바일뷰 가로 길이 제한
 * - 상단 header 높이 54px + 패딩 32px = 86px (pt-21.5)
 * - 하단 패딩 32px (pb-8)
 */
export default function Layout() {
    const showGradientBackground = useUiStore((s) => s.showGradientBackground);

    return (
        <>
            <div
                className={`w-full max-w-sm sm:max-w-md mx-auto px-5 pt-21.5 pb-8 h-dvh ${
                    showGradientBackground && "with-gradient-background"
                }`}
            >
                <main className="overflow-x-hidden h-full">
                    <OnboardingGate>
                        <Outlet />
                    </OnboardingGate>
                </main>
            </div>
        </>
    );
}
