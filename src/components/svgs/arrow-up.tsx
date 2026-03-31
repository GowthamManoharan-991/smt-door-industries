import * as React from "react";

export default function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 4l-8 8h5v8h6v-8h5z" />
    </svg>
  );
}