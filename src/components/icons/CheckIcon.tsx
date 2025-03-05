const CheckIcon = ({ classname }: { classname?: string }) => {
  return (
    <svg
      width="32"
      height="29"
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <path
        d="M30.5133 0.5H25.4525C25.2003 0.5 24.9639 0.622918 24.8191 0.829377L5.41211 28.5H12.3742L31.1467 1.71757C31.5061 1.20491 31.1393 0.5 30.5133 0.5Z"
        fill="#4DB429"
      />
      <path
        d="M1.1446 15.0469H6.42778C6.74347 15.0469 7.02749 15.2387 7.14539 15.5316L12.3652 28.4984H5.40314L0.426774 16.1088C0.222623 15.6005 0.596859 15.0469 1.1446 15.0469Z"
        fill="#939607"
        fillOpacity="0.6"
      />
    </svg>
  );
};

export default CheckIcon;
