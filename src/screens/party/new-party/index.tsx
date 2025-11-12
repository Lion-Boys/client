import SectionHeader from "@/components/SectionHeader";
import CreatePartyForm from "./form/CreatePartyForm";

export default function NewParty() {
    return (
        <>
            <SectionHeader title={"모임 생성을 위한\n정보를 입력해주세요"} />

            <CreatePartyForm />
        </>
    );
}
