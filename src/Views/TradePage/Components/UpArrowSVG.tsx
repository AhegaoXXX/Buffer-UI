export const UpArrowSVG: React.FC<{
  className?: string;

  svgProps?: React.SVGProps<SVGSVGElement>;
}> = ({ className, svgProps }) => {
  return (
    <svg
      width="8"
      height="7"
      viewBox="0 0 8 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...svgProps}
    >
      <g clipPath="url(#clip0_869_194)">
        <path
          d="M4.29351 1.52422C4.26097 1.48562 4.22021 1.45456 4.17412 1.43325C4.12803 1.41193 4.07774 1.40088 4.02683 1.40088C3.97592 1.40088 3.92563 1.41193 3.87954 1.43325C3.83345 1.45456 3.79268 1.48562 3.76014 1.52422L0.760866 5.42874C0.723818 5.4769 0.701232 5.53435 0.695681 5.59454C0.690129 5.65474 0.701835 5.71526 0.729465 5.76922C0.785987 5.87977 0.901275 5.94919 1.02778 5.94919H7.02588C7.08763 5.94933 7.1482 5.93258 7.20087 5.90081C7.25353 5.86904 7.29622 5.82348 7.32419 5.76922C7.35182 5.71526 7.36353 5.65474 7.35798 5.59454C7.35242 5.53435 7.32984 5.4769 7.29279 5.42874L4.29351 1.52422Z"
          fill="#3FB68B"
        />
      </g>
      <defs>
        <clipPath id="clip0_869_194">
          <rect
            width="7.17745"
            height="5.30625"
            fill="white"
            transform="translate(0.316406 0.980469)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
