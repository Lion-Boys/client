import { useEffect } from "react";
import { useUiStore } from "@/store";
import SectionHeader from "@/components/SectionHeader";
import CreatePartyForm from "./components/form/CreatePartyForm";

export default function NewParty() {
    const updateHeader = useUiStore((s) => s.updateHeader);

    useEffect(() => {
        updateHeader("모임 생성");
    }, [updateHeader]);

    return (
        <>
            <SectionHeader title={"모임 생성을 위한\n정보를 입력해주세요"} />

            <CreatePartyForm />
        </>
    );
}
