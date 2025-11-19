// 정산 화면 공유 타입 정의
export type RoundInfo = {
    id: string;
    title: string;
    eventDate: string;
};

export type ParticipantTemplate = {
    id: string;
    name: string;
};

export type Participant = ParticipantTemplate & {
    amount: number;
    isCustom?: boolean;
};
