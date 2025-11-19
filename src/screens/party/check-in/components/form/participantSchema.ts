import * as Yup from "yup";

export const participantSchema = Yup.object({
    name: Yup.string().required("이름을 입력해주세요"),
    phone: Yup.string()
        .required("전화번호를 입력해주세요")
        .matches(/^01[016789]\d{7,8}$/, "유효한 전화번호를 입력해주세요"),
});
