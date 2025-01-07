import { IconProps } from "./icons";

export const CartAddIcon = ({ width = "24", height = "24" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill: "currentColor", transform: "msFilter" }}
    >
      <circle cx="10.5" cy="19.5" r="1.5"></circle>
      <circle cx="17.5" cy="19.5" r="1.5"></circle>
      <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
      <path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path>
    </svg>
  );
};
