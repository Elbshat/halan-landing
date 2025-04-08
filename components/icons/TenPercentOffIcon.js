const TenPercentOffIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={90}
    height={62}
    fill="none"
    {...props}
  >
    <mask
      id="tenPercentOffIcon"
      width={90}
      height={62}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M0 0h89.333v61.333H0V0Z" />
    </mask>
    <g mask="url(#tenPercentOffIcon)">
      <mask
        id="b"
        width={98}
        height={67}
        x={-4}
        y={-3}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M-3.328 10.579 85.135-2.537l7.901 53.286L4.574 63.865l-7.901-53.287Z"
        />
      </mask>
      <g mask="url(#b)">
        <mask
          id="c"
          width={90}
          height={60}
          x={0}
          y={1}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path
            fill="#fff"
            d="M23.314 6.626 58.3 1.443a26.92 26.92 0 0 1 19.994 5.01 26.913 26.913 0 0 1 10.594 17.683 26.897 26.897 0 0 1-5.01 19.995A26.94 26.94 0 0 1 66.194 54.73L31.21 59.912a26.942 26.942 0 0 1-19.995-5.01A26.913 26.913 0 0 1 .622 37.219a26.885 26.885 0 0 1 5.01-19.994 26.92 26.92 0 0 1 17.682-10.6Z"
          />
        </mask>
        <g mask="url(#c)">
          <mask
            id="d"
            width={97}
            height={67}
            x={-4}
            y={-3}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance",
            }}
          >
            <path
              fill="#fff"
              d="M-3.328 10.579 84.927-2.505l7.901 53.287L4.573 63.865l-7.901-53.287Z"
            />
          </mask>
          <g mask="url(#d)">
            <mask
              id="e"
              width={97}
              height={67}
              x={-4}
              y={-3}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
            >
              <path
                fill="#fff"
                d="M-3.328 10.579 84.942-2.51l7.902 53.287L4.573 63.865-3.328 10.58Z"
              />
            </mask>
            <g mask="url(#e)">
              <path
                fill="#4067B0"
                d="M-9.203 1.699 1.52 74.069l97.208-14.412-10.724-72.37L-9.203 1.7Z"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default TenPercentOffIcon;
