import CompactButton from "@/components/CompactButton";
import Receipt from "@/components/Icons/Receipt";
import CameraIcon from "@/components/Icons/Camera";

type ReceiptActionsProps = {
    onScanReceipt: () => void;
    onUploadPhoto: () => void;
};

export default function ReceiptActions({ onScanReceipt, onUploadPhoto }: ReceiptActionsProps) {
    return (
        <div className="flex flex-wrap gap-3">
            <CompactButton
                style="light"
                label="영수증 스캔"
                icon={<Receipt width={18} height={18} />}
                onClick={onScanReceipt}
            />
            <CompactButton
                style="light"
                label="회식사진올리기"
                icon={<CameraIcon width={16} height={16} />}
                onClick={onUploadPhoto}
            />
        </div>
    );
}
