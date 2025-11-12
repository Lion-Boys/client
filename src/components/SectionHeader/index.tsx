import type { SectionHeaderProps } from "./types";
import { sectionHeaderStyles } from "./styles";

export default function SectionHeader({ title, subtitle, style = "page" }: SectionHeaderProps) {
    return (
        <header className={sectionHeaderStyles[style].container}>
            <h1 className={sectionHeaderStyles[style].title}>{title}</h1>
            {subtitle && <p className={sectionHeaderStyles[style].subtitle}>{subtitle}</p>}
        </header>
    );
}
