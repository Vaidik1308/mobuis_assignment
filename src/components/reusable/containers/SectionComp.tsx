import React from 'react'

type Props = {
    children: React.ReactNode;
    rootClassName?: string;
    sectionHeading?: string;
    // sectionSubHeading?: string;
    sectionHeadingClassName?: string;
    childrenClassName?: string;
}

const SectionComp = ({children, rootClassName, sectionHeading, sectionHeadingClassName, childrenClassName}: Props) => {
  return (
    <div className={` flex justify-center items-center w-[75%] mx-auto my-12 ${rootClassName}`}>
        {sectionHeading && <h2 className={`text-black text-[32px] font-semibold ${sectionHeadingClassName}`}>
            {sectionHeading}
        </h2>}
        <div className={`${childrenClassName}`}>
            {children}
        </div>
    </div>
  )
}

export default SectionComp