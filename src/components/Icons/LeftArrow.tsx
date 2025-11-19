import type { SVGProps } from "react";

export function LeftArrow(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={6}
            height={10}
            viewBox="0 0 6 10"
            fill="none"
            {...props}
        >
            <path
                d="M0.351137 5.86286C-0.117046 5.40768 -0.117046 4.59232 0.351137 4.13713L4.3176 0.280811C4.9761 -0.359409 6 0.165725 6 1.14368L6 8.85633C6 9.83428 4.9761 10.3594 4.3176 9.71919L0.351137 5.86286Z"
                fill="#636A71"
            />
        </svg>
    );
}

export default LeftArrow;
