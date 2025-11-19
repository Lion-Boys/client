import Button from "@/components/Button";

type SettlementFooterProps = {
    totalFromParticipants: number;
    onStartSettlement: () => void;
};

export default function SettlementFooter({
    totalFromParticipants,
    onStartSettlement,
}: SettlementFooterProps) {
    return (
        <div className="mt-auto space-y-3">
            <div className="text-right font-text-sm-14_medium text-grey-500">
                <span>참여자 합산: {totalFromParticipants.toLocaleString("ko-KR")}원</span>
            </div>
            <p className="text-center font-text-base-16_regular text-grey-600">
                참여자 목록과 금액을 모두 확인하셨나요?
            </p>
            <Button label="정산 시작하기" variant="large" onClick={onStartSettlement} />
        </div>
    );
}
