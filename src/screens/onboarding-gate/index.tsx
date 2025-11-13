import { useEffect } from "react";
import { useUiStore, useUserFlowStore } from "@/store";
import Button from "@/components/Button";

export default function OnboardingGate({ children }: React.PropsWithChildren) {
    const hasOnboarded = useUserFlowStore((s) => s.hasOnboarded);
    const completeOnboarding = useUserFlowStore((s) => s.completeOnboarding);

    const setShowGradientBackground = useUiStore((s) => s.setShowGradientBackground);

    useEffect(() => {
        if (!hasOnboarded) {
            setShowGradientBackground(true);
            return () => setShowGradientBackground(false);
        } else {
            setShowGradientBackground(false);
        }
    }, [hasOnboarded, setShowGradientBackground]);

    const handleStart = () => {
        completeOnboarding();
        setShowGradientBackground(false);
    };

    if (!hasOnboarded) {
        return (
            <div className="h-full flex flex-col items-center justify-end gap-28">
                <div className="grid place-items-center gap-4">
                    <h2 className="font-text-2xl-24_semibold text-white text-center">
                        모임 준비, 진행, 마무리의
                        <br />
                        모든 순간에 사용하세요
                    </h2>

                    <p className="font-text-base-16_regular text-grey-100 text-center">
                        회차 참석 인원 체크부터 사진 공유,
                        <br />
                        송금 확인까지 빈틈없이 관리하는
                        <br />
                        올인원 회식 정산 시스템
                    </p>
                </div>
                <Button onClick={handleStart} label="시작하기" variant="large" bottompadding />
            </div>
        );
    }

    return <>{children}</>;
}
