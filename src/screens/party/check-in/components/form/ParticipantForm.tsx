import { Form, Formik } from "formik";
import { participantSchema } from "./participantSchema";
import { PhoneNumberInput, TextInput } from "@/components/FormComponents";
import BottomButton from "@/components/BottomButton";

export default function ParticipantForm() {
    return (
        <Formik
            initialValues={{
                name: "",
                phone: "",
            }}
            validationSchema={participantSchema}
            onSubmit={(values, { resetForm }) => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
            }}
        >
            {({ errors, touched, isValid, dirty, isSubmitting }) => (
                <Form className="w-full flex flex-col gap-4">
                    <TextInput
                        id="name"
                        name="name"
                        label="이름"
                        placeholder="실명으로 입력해주세요"
                        error={touched.name && errors.name ? errors.name : ""}
                        required
                    />

                    <PhoneNumberInput
                        id="phone"
                        name="phone"
                        label="전화번호"
                        placeholder="010-1234-5678"
                        error={touched.phone && errors.phone ? errors.phone : ""}
                        required
                    />

                    <BottomButton
                        label="참가하기"
                        type="submit"
                        disabled={!isValid || !dirty || isSubmitting}
                        className="mt-11"
                    />
                </Form>
            )}
        </Formik>
    );
}
