import { SVGProps } from 'react';

const Telegram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4.506c-4.657 0-8.434 3.777-8.434 8.426 0 4.656 3.777 8.442 8.434 8.442 4.657 0 8.434-3.785 8.434-8.442 0-4.65-3.777-8.426-8.434-8.426Zm4.154 5.297c-.054.781-1.501 6.625-1.501 6.625s-.09.343-.405.351a.544.544 0 0 1-.414-.162c-.333-.278-1.088-.818-1.798-1.312a.807.807 0 0 1-.09.081c-.162.143-.405.35-.665.602a8.821 8.821 0 0 0-.315.297l-.008.009c-.052.05-.106.099-.163.144-.35.287-.386.044-.386-.081l.188-2.059v-.018l.009-.018c.01-.027.028-.037.028-.037s3.677-3.272 3.776-3.623c.008-.018-.018-.035-.063-.018-.243.081-4.478 2.76-4.946 3.058-.027.017-.108.008-.108.008l-2.058-.675s-.243-.098-.162-.322c.017-.045.044-.09.143-.153.459-.324 8.434-3.193 8.434-3.193s.226-.071.36-.027c.063.027.1.054.135.144a.932.932 0 0 1 .018.189c0 .045-.008.1-.008.189h-.001Z"
      fill="currentColor"
    />
  </svg>
);

export default Telegram;
