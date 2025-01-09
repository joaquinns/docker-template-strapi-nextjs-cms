import { IconProps } from "./icons";

export const AirtmIcon = ({ width = "24", height = "24" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.11456 14.602L8.89093 4.43875L11.5177 10.0214L4.11456 14.6024V14.602ZM19 18.4264L15.639 11.2846L18.9134 9.2584L17.2346 6.48324L14.2494 8.33062L10.9782 1.37826C10.778 0.952206 10.4724 0.598925 10.0948 0.356014C9.71444 0.112139 9.27788 -0.0112438 8.83197 0.000805311C8.38559 0.0123725 7.95465 0.158408 7.58594 0.422525C7.23361 0.675075 6.95287 1.02787 6.77179 1.44429L0.216452 15.3933L0.201011 15.4309C-0.235075 16.4903 0.0536215 17.6904 0.919244 18.4182C1.76896 19.1324 2.94059 19.1932 3.85347 18.5777L12.9079 12.9753L15.4729 18.4268H19V18.4264Z"
        fill="#050505"
      />
    </svg>
  );
};
