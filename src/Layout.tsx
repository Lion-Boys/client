import { Outlet } from "react-router-dom";
import OnboardingGate from "./screens/onboarding-gate";
import { useUiStore } from "./store";
import GlobalHeader from "./components/GlobalHeader";

/**
 * Layout
 * 온보딩 게이트 및 레이아웃 적용
 *
 * - 좌우 패딩 20px
 * - 모바일뷰 가로 길이 제한
 * - 상단 header 높이 54px + 패딩 32px = 86px (pt-21.5)
 */
export default function Layout() {
    const showGradientBackground = useUiStore((s) => s.showGradientBackground);

    return (
        <>
            <GlobalHeader />
            <div
                className={`w-full max-w-xl mx-auto px-5 pt-13.5 h-dvh ${
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
