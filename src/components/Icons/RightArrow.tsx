import type { SVGProps } from "react";

export default function RightArrow(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={6}
            height={10}
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M5.64886 5.86286C6.11705 5.40768 6.11705 4.59232 5.64886 4.13713L1.6824 0.280811C1.0239 -0.359409 4.2987e-07 0.165725 3.87122e-07 1.14368L4.99916e-08 8.85633C7.24398e-09 9.83428 1.0239 10.3594 1.6824 9.71919L5.64886 5.86286Z"
                fill="#636A71"
            />
        </svg>
    );
}
