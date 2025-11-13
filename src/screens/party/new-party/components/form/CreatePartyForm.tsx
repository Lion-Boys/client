import { Form, Formik } from "formik";
import { partySchema } from "./partySchema";
import { PhoneNumberInput, TextInput } from "@/components/FormComponents";
import { QuestionCircle } from "@/components/Icons/QuestionCircle";
import Button from "@/components/Button";

export default function CreatePartyForm() {
    return (
        <Formik
            initialValues={{
                title: "",
                eventDate: "",
                placeName: "",
                cancellableUntil: "",
                hostName: "",
                hostPhone: "",
            }}
            validationSchema={partySchema}
            onSubmit={async (values, { resetForm }) => {
                try {
                    if (navigator.share) {
                        await navigator.share({
                            title: `${values.title || "새 모임"}`,
                            text: `${values.hostName}님이 새로운 모임에 초대합니다.\n장소: ${values.placeName}\n날짜: ${values.eventDate}`,
                            url: window.location.href,
                        });
                    } else {
                        await navigator.clipboard.writeText(window.location.href);
                        alert("링크가 복사되었습니다.");
                    }
                    resetForm();
                } catch (err) {
                    if ((err as Error).name !== "AbortError") {
                        console.error("공유 실패:", err);
                        alert("공유에 실패했습니다.");
                    }
                }
                resetForm();
            }}
        >
            {({ errors, touched, isValid, dirty, isSubmitting }) => (
                <Form className="w-full flex flex-col gap-4">
                    <TextInput
                        id="title"
                        name="title"
                        label="모임제목"
                        placeholder="모임 제목을 입력하세요"
                        error={touched.title && errors.title ? errors.title : ""}
                        required
                    />

                    <TextInput
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        label="날짜"
                        placeholder="모임 날짜를 입력하세요"
                        error={touched.eventDate && errors.eventDate ? errors.eventDate : ""}
                        required
                    />

                    <TextInput
                        id="placeName"
                        name="placeName"
                        label="장소"
                        placeholder="장소를 입력하세요"
                        error={touched.placeName && errors.placeName ? errors.placeName : ""}
                        required
                    />

                    <TextInput
                        id="cancellableUntil"
                        name="cancellableUntil"
                        type="datetime-local"
                        label="취소 가능 기한"
                        placeholder="취소 가능 기한을 입력하세요"
                        error={
                            touched.cancellableUntil && errors.cancellableUntil
                                ? errors.cancellableUntil
                                : ""
                        }
                        required
                    />

                    <TextInput
                        id="hostName"
                        name="hostName"
                        label="참여자 이름"
                        placeholder="실명으로 입력해주세요"
                        error={touched.hostName && errors.hostName ? errors.hostName : ""}
                        required
                    />

                    <PhoneNumberInput
                        id="hostPhone"
                        name="hostPhone"
                        label="전화번호"
                        placeholder="010-1234-5678"
                        error={touched.hostPhone && errors.hostPhone ? errors.hostPhone : ""}
                        required
                    />

                    <div className="w-full flex flex-col items-center gap-3 mt-11">
                        <div className="flex items-center gap-1">
                            <span className="font-text-base-16_regular text-grey-500">
                                서비스소개가 궁금하다면
                            </span>
                            <QuestionCircle width={16} height={16} className="text-grey-500" />
                        </div>
                        <Button
                            label="초대장 보내기"
                            type="submit"
                            disabled={!isValid || !dirty || isSubmitting}
                            variant="large"
                            bottompadding
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
}
