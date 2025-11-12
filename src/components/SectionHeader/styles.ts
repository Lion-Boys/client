import type { SectionHeaderStyle } from "./types";

export const sectionHeaderStyles: Record<
    SectionHeaderStyle,
    { container: string; title: string; subtitle: string }
> = {
    page: {
        container: "w-full flex flex-col gap-2 pb-6 select-none",
        title: "font-text-2xl-24_bold text-grey-900_text select-none",
        subtitle: "font-text-base-16_regular text-grey-500 select-none",
    },
    sheet: {
        container: "w-full flex flex-col gap-3 select-none",
        title: "font-text-xl-20_bold text-grey-900_text select-none",
        subtitle: "font-text-base-16_regular text-grey-700 select-none",
    },
    centerAccent: {
        container: "w-full flex flex-col items-center gap-1 select-none",
        title: "font-text-2xl-24_semibold text-grey-900_text select-none",
        subtitle: "font-text-base-16_medium text-primary-blue select-none",
    },
};
