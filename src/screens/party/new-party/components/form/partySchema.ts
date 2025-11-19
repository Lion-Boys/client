import * as Yup from "yup";

export const partySchema = Yup.object({
    title: Yup.string().required("모임 제목을 입력하세요"),
    eventDate: Yup.date()
        .required("모임 날짜를 선택하세요")
        .min(new Date(), "과거 날짜는 선택할 수 없습니다"),
    placeName: Yup.string().required("장소를 검색하세요"),
    cancellableUntil: Yup.date()
        .required("취소 가능 기한을 선택하세요")
        .max(Yup.ref("eventDate"), "취소 가능 기한은 모임 날짜 이전이어야 합니다"),
    hostName: Yup.string().required("이름을 입력해주세요"),
    hostPhone: Yup.string()
        .required("전화번호를 입력해주세요")
        .matches(/^01[016789]\d{7,8}$/, "유효한 전화번호를 입력해주세요"),
});
