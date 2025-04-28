import React from 'react'

type Props = {
    rootClassName?: string;
    buttonText: string;
    buttonType?: 'primary' | 'secondary';
    buttonSize?: 'small' | 'medium' | 'large';
    buttonIcon?: React.ReactNode;
    buttonOnClick?: () => void;
}

const AuthButton = ({rootClassName, buttonText, buttonType, buttonSize, buttonIcon, buttonOnClick}: Props) => {
  return (
    <button onClick={buttonOnClick} className={`cursor-pointer bg-white hover:bg-[#022183] hover:text-white transition-all duration-300 text-[#022183] px-9 py-2.5 rounded-full font-[500] text-[19px] tracking-tight ${rootClassName}`}>
        {buttonText ? buttonText : "Get Started"}
        {buttonIcon && buttonIcon}
    </button>
  )
}

export default AuthButton