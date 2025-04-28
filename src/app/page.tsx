import NavbarSection from "@/components/common/header/NavbarSection";
import HeroSection from "@/components/pages/home/HeroSection";
import AuthButton from "@/components/reusable/buttons/AuthButton";
import SectionComp from "@/components/reusable/containers/SectionComp";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full flex flex-col">

        <div 
        style={{
          backgroundImage: `url(${'/images/bg/header_bg.svg'})`,
          backgroundSize: 'cover',
          // backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
        }}
      >
        
        <NavbarSection/>

        <div className='w-full'>
          <HeroSection/>
        </div>
      </div>

        {/* how it works section */}
      <SectionComp rootClassName="flex flex-col gap-10 items-start" sectionHeadingClassName="md:text-[#0649E7] md:font-[500]" sectionHeading="How it work?">
        <div className="w-full flex justify-between items-start gap-16 mt-8">
          {[{
            num: 1,
            text: "Submit Intake Form"
          }, {
            num: 2,
            text: "We do the search and curation for list of jobs"
          }, {
            num: 3,
            text: "You approve, we do the tedious part (applying)"
          }, {
            num: 4,
            text: "You get the interviews"
          }].map((step) => (
            <div key={step.num} className="flex flex-col items-start w-1/4 gap-2">
              <div className="size-[75px] rounded-full border-2 border-[#022183] flex items-center justify-center text-[50px] font-normal text-black mb-2">
                {step.num}
              </div>
              <div className="w-4/5 h-0.5 bg-blue-700 mb-4" />
              <p className="text-[#0649E7] text-[24px] leading-6 text-left font-[500]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </SectionComp>

      {/* about us section */}
      <SectionComp rootClassName="flex flex-col gap-10 items-start md:w-full" sectionHeadingClassName="md:text-[#0649E7] md:font-[500]"  childrenClassName="flex w-full  flex-col gap-10">
        <div style={{
          backgroundImage: `url(${'/images/bg/about_us.svg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
        }}
        className="py-20"
>
          <div className=" w-[75%] mx-auto ">
            <h2 className="text-2xl font-bold text-white mb-16">About Us</h2>
            
            {/* Team Members Grid */}
            <div className="flex flex-col gap-16 w-[75%] mx-auto">
              {/* Ashwin's Profile */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-20 w-full">
                <div className="relative w-fit">
                  <Image
                    src="/images/bg/admin.svg"
                    alt="Ashwin"
                    width={250}
                    height={250}
                    className="rounded-full"
                  />
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-[-5%] right-[5%] flex items-center justify-center rounded-full p-2 shadow-lg backdrop-blur-[6px] stroke-2 size-[75px] border-1 border-white"
                  >
                    <Image src="/images/logo/linkedin_white.svg" alt="LinkedIn" width={30} height={30} />
                  </a>
                </div>
                <div className="text-white w-1/2">
                  <p className="text-[14px] mb-4">
                    <span className="text-white font-bold">Ashwin</span> is the founder of mobiusengine.ai
                    He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
                  </p>
                  <p className="text-[14px]">
                    Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-20 w-full">
                <div className="relative w-fit">
                  <Image
                    src="/images/bg/admin2.svg"
                    alt="Ashwin"
                    width={250}
                    height={250}
                    className="rounded-full"
                  />
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-[-5%] right-[5%] flex items-center justify-center rounded-full p-2 shadow-lg backdrop-blur-[6px] stroke-2 size-[75px] border-1 border-white"
                  >
                    <Image src="/images/logo/linkedin_white.svg" alt="LinkedIn" width={30} height={30} />
                  </a>
                </div>
                <div className="text-white w-1/2">
                  <p className="text-[14px] mb-4">
                    <span className="text-white font-bold">Nicole</span>  is an Executive coach at Mobius specializing in resume builds and career advisory. 
                  </p>
                  <p className="text-[14px]">
                  With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <div className="flex flex-col gap-2 items-start pl-32 text-white">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[14px] flex items-center gap-0.5">Learn more about our Board of Advisors​  <IoMdArrowForward size={20} className="-rotate-45" /> </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[14px] flex items-center gap-0.5">Follow us on our Linkedin page  <IoMdArrowForward size={20} className="-rotate-45" /> </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </SectionComp>
      {/* what our clients have to say */}
      <SectionComp rootClassName="flex flex-col gap-10 items-start" sectionHeadingClassName="md:text-[#0649E7] md:font-[500]" sectionHeading="What our clients have to say" childrenClassName="flex flex-col gap-10">
        <div className="w-full grid grid-cols-3 gap-12">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="w-full h-[450px] rounded-[35px]  flex flex-col overflow-hidden bg-[#0649E7]"
            >
              {/* Top (play icon area) */}
              <div className="flex-1 flex flex-col items-center justify-center relative bg-white border-2 border-[#0649E7] rounded-[35px]">
                <div className="size-[44px] rounded-full bg-[#0649E7] flex items-center justify-center">
                  <svg width="27" height="27" fill="white" viewBox="0 0 20 20">
                    <polygon points="7,5 15,10 7,15" />
                  </svg>
                </div>
              </div>
              {/* Bottom (text area) */}
              <div className="bg-[#0649E7] px-4 pt-4 pb-6 relative min-h-[40%] flex flex-col justify-between">
                <p className="text-white text-[16px] leading-5 w-[85%] px-2 text-justify">
                  Holly is a <span className="font-bold">senior executive</span> who got over <span className="font-bold">10 job interviews</span> and an offer she accepted
                </p>
                <div className="absolute bottom-4 right-4">
                  <div className="size-[52px] rounded-full bg-white flex items-center justify-center">
                    <Image src="/images/hero_section/arrow_bottom_left.svg" alt="quote" width={14} height={14} className="rotate-180" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-8 gap-16 mb-10">
          <AuthButton  buttonIcon={<MdArrowForward className="-rotate-45" size={20} />} buttonText="More customer testimonials" rootClassName="md:bg-white md:text-[#0649E7] border-2 border-[#0649E7] flex items-center gap-2 md:px-8 md:py-[14px]" />
          <AuthButton  buttonIcon={<MdArrowForward size={20} />} buttonText="Get Started" rootClassName="md:bg-[#0649E7] md:text-white flex items-center gap-2 md:px-8 md:py-[14px]" />
        </div>
      </SectionComp>


      {/* why choose us */}
      <div className="bg-[#F8FAFF] rounded-[35px] w-[80%] mx-auto">
      <SectionComp rootClassName="flex flex-col gap-10 items-start md:w-[95%] px-6" sectionHeadingClassName="md:text-[#022183] md:font-[500]" sectionHeading="Why Choose Us?" childrenClassName="flex flex-col gap-10">
        <div className="w-full flex  gap-28 justify-between">
          {/* Card 1 */}
          <div className="rounded-[35px] border-2 border-[#022183] bg-[F8FAFF] p-8 flex flex-col gap-6 h-[300px] justify-between">
            <div>
              {/* Handshake Icon */}
              <Image src="/images/home/hand.svg" alt="handshake" width={55} height={55} />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#022183] text-xl font-bold mb-2">Tried, Tested, Trusted</h4>
              <p className="text-[#022183] text-base font-normal leading-5 w-[100%]">
                {"Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back."}
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded-[35px] border-2 border-[#022183] bg-[F8FAFF] p-8 flex flex-col gap-6 h-[300px] justify-between">
            <div>
              {/* Person Icon */}
              <Image src="/images/home/person.svg" alt="person" width={55} height={55} />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#022183] text-xl font-bold mb-2">Real People, Real Help</h4>
              <p className="text-[#022183] text-base font-normal leading-5 w-[100%]">
                A hands-on team that actually cares — guiding you through every twist in your career path.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="rounded-[35px] border-2 border-[#022183] bg-[F8FAFF] p-8 flex flex-col gap-6 h-[300px] justify-between">
            <div>
              {/* Star Icon */}
              <Image src="/images/home/start.svg" alt="star" width={55} height={55} />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#022183] text-xl font-bold mb-2">Beat the Line</h4>
              <p className="text-[#022183] text-base font-normal leading-5 w-[100%]">
                We search, shortlist, and apply for you, so your name shows up first — every single day.
              </p>
            </div>
          </div>
        </div>
      </SectionComp>
      </div>


      {/* service plans */}
      <SectionComp rootClassName="flex flex-col gap-10 items-start md:w-[75%] md:px-6" sectionHeadingClassName="md:text-[#0649E7] font-[400] ">
        <div>
          <h5 className="font-[600] text-[#0649E7] text-[32px] my-10 mb-24">Job Application Service Plans</h5>
        </div>
        <div className="w-full flex justify-between gap-12">
          {/* April Promo */}
          <div className="rounded-[35px] border-2 border-[#0649E7] w-1/3  bg-white p-8 flex flex-col h-[600px] gap-6">
          <div className="flex flex-col justify-between h-[30%]">
            <h5 className="text-[#0649E7] text-[25px] font-[600] mb-2">April Promo</h5>
            <div className="text-[#0649E7] text-[50px] font-bold my-3">$35<span className="text-2xl font-[600]">/week</span></div>
            <hr className="my-4 border-[#E5E7EB]" />
          </div>
          <div className="flex flex-col justify-between h-[70%]">
            <ul className="flex flex-col gap-3 mb-8 px-2">
              <li className="flex items-start gap-2 text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                  Curated jobs from 1M+ listings, refreshed every 48 hours
                </p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)
                </p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                Need more? Add extra apps for just $1.5 each
                </p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                Your own dedicated application analyst
                </p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                Personalized with up to 10 filters & 5 job titles
                </p>
              </li>
            </ul>
            <AuthButton buttonText="Get Started" rootClassName="md:bg-[#0649E7] md:text-white flex items-center gap-2 md:px-8 md:py-[14px] justify-center w-fit"  buttonIcon={<MdArrowForward size={20} />}/>
            </div>
          </div>
          {/* Starter */}
          <div className="rounded-[35px] border-2 border-[#0066EB] bg-[#F8FAFF] p-8 flex flex-col h-[600px] relative w-1/3 gap-6">
          <div className="flex flex-col  px-2 justify-between h-[30%] ">
            <h5 className="text-[#0649E7] text-[25px] font-bold mb-2 flex items-center gap-2 w-full justify-between">
              Starter
              <span className=" bg-[#EBF1FF] ml-2 px-4 py-1 border border-[#0649E7] rounded-full text-[#0649E7] text-[14px] font-[500] ">Popular</span>
            </h5>
            <div className="text-[#0649E7] text-[50px] font-bold my-2">$50<span className="text-2xl font-normal">/week</span></div>
            <hr className="my-4 border-[#E5E7EB]" />
          </div>
            <div className="flex flex-col gap-3 px-2 justify-between h-[70%]">
              <ul className="flex flex-col gap-3 mb-8 px-2 pr-4">
                <li className="flex items-start gap-2 text-[#0649E7] text-base">
                  {/* <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> */}
                  <p className="text-base  text-[#0649E7] font-[600] leading-4.5 text-[16px] pl-7">
                  All the perks of the Promo Plan, plus:
                  </p>
                </li>
                <li className="flex items-start gap-2 text-[#0066EB] text-base">
                  <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                  Resume review & story-focused feedback
                  </p>
                </li>
                <li className="flex items-start gap-2 text-[#0066EB] text-base">
                  <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                  Dedicated search specialist
                  </p>
                </li>
                <li className="flex items-start gap-2 text-[#0066EB] text-base">
                  <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                  Up to 50 job apps/week
                  </p>
                </li>
                <li className="flex items-start gap-2 text-[#0066EB] text-base">
                  <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                  Extra apps at $1.5 each
                  </p>
                </li>
                <li className="flex items-start gap-2 text-[#0066EB] text-base">
                  <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                  Analyst support within 6 hours (SLA/PST hours)
                  </p>
                </li>
              </ul>
              <AuthButton buttonText="Get Started" rootClassName="md:bg-[#0649E7] md:text-white flex items-center gap-2 md:px-8 md:py-[14px] justify-center w-fit"  buttonIcon={<MdArrowForward size={20} />}/>
            </div>
          </div>
          {/* Plus */}
          <div className="rounded-[35px] border-2 border-[#0066EB] bg-white p-8 flex flex-col h-[600px] gap-6 w-1/3">
          <div className="flex flex-col  px-2 justify-between h-[30%] ">
            <h3 className="text-[#0066EB] text-2xl font-bold mb-2">Plus</h3>
            <div className="text-[#0066EB] text-[50px] font-bold mb-1">$100<span className="text-2xl font-normal">/week</span></div>
            <hr className="my-4 border-[#E5E7EB]" />
            </div>
            <div className="flex flex-col gap-3 px-2 justify-between h-[70%]">
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                {/* <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> */}
                <p className="text-base  text-[#0649E7] font-[600] leading-4.5 text-[16px] pl-7 ">
                Everything in Starter, with more muscle:
                </p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5 "><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                Up to 75 apps/week
                </p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                Apply to 15 job titles
                </p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base  text-[#0649E7] font-[500] leading-4.5 text-[16px]">
                Analyst + full application team on Pacific hours
                </p>
              </li>
            </ul>
            <AuthButton buttonText="Get Started" rootClassName="md:bg-[#0649E7] md:text-white flex items-center gap-2 md:px-8 md:py-[14px] justify-center w-fit"  buttonIcon={<MdArrowForward size={20} />}/>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#0649E7] rounded-[40px] flex flex-col md:flex-row items-center justify-between px-12 py-10 mt-12">
          {/* Left: Title and features */}
          <div className="flex-1 flex flex-col gap-3 text-white">
            <div className="flex flex-col gap-0 leading-6">
              <h5 className="text-[28px] font-[600] mb-1">Advance</h5>
              <p className="text-[14px] font-normal mb-4">Top-tier support for serious job hunters:</p>
            </div>
            <hr className="border-[#BCBCBC] my-2 w-[40%]" />
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex flex-wrap gap-x-12 gap-y-2">
                <span className="flex items-center gap-2 min-w-[260px]">
                  <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="11" fill="#4AD257"/><path d="M7 11.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Everything in Plus
                </span>
                <span className="flex items-center gap-2 min-w-[260px]">
                  <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="11" fill="#4AD257"/><path d="M7 11.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Custom Resumes & Cover Letters
                </span>
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-2">
                <span className="flex items-center gap-2 min-w-[260px]">
                  <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="11" fill="#4AD257"/><path d="M7 11.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  20 fully customized applications/week
                </span>
                <span className="flex items-center gap-2 min-w-[260px]">
                  <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="11" fill="#4AD257"/><path d="M7 11.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Help with complex job searches
                </span>
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-2">
                <span className="flex items-center gap-2 min-w-[260px]">
                  <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="11" fill="#4AD257"/><path d="M7 11.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Access to senior resume experts, Founder & Exec Coaches
                </span>
              </div>
            </div>
          </div>
          {/* Right: Price and button */}
          <div className="flex flex-col items-end justify-between h-[220px] min-w-[260px] mt-8 md:mt-0">
            <div className="text-white text-5xl font-bold">$150<span className="text-2xl font-[600]">/week</span></div>
            <AuthButton buttonText="Get Started" rootClassName="md:text-[#0649E7] md:bg-white flex items-center gap-2 md:px-8 md:py-[14px] justify-center w-fit"  buttonIcon={<MdArrowForward size={20} />}/>
          </div>
        </div>
      </SectionComp>


      <SectionComp rootClassName="flex flex-col gap-10 items-start md:w-[75%] md:px-6" sectionHeadingClassName="md:text-[#0649E7] font-[400] " childrenClassName="w-full" >
        <div className="flex flex-col gap-1 items-start">
          <h5 className="font-[600] text-[#0649E7] text-[32px] ">Resume Building & Coaching</h5>
          <p className="text-[#0649E7]  text-[16px]  flex flex-col leading-5">Let&apos;s talk about where you&apos;re headed — and how your resume can get you there. 
            <span className="font-[600] text-[#0649E7]">Schedule a call to get started.</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 w-[70%] mt-20 mx-auto justify-between">
        <div className="rounded-[35px] border-2 border-[#0066EB] bg-white p-8 flex flex-col h-[820px] gap-6 w-1/2">
          <div className="flex flex-col  px-2 justify-between h-[30%] ">
            <div className="flex flex-col ">
              <h5 className="text-[#0649E7] text-[25px] font-sans font-[600]">Resume Rebuild</h5>
              <p className="text-[#0649E7] leading-4.5 text-[15px] font-[500] font-['DM Sans']">Crafted for senior to VP-level professionals ready for their next big step.</p>
            </div>
            <div className="text-[#0649E7] text-[50px] font-['DM Sans'] font-bold my-4">$1000<span className="text-2xl font-[600] pl-2">one time</span></div>
            <hr className="my-4 border-[#BCBCBC] w-[80%] " />
            </div>
            <div className="flex flex-col gap-3 px-2 justify-between h-[70%]">
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">3× 30–min coaching</p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">Focused on storytelling, not just formatting</p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">Analyst + full application team on Pacific hours</p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">Tailored to your target industry, company, or role</p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">Direct work with our co-founder (ex–Google, JP Morgan)</p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">Executive coaching from UC Berkeley alum with 10+ yrs experience</p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">Resume Rebuild portfolio available upon request</p>
              </li>
            </ul>
            <AuthButton buttonText="Get Started" rootClassName="md:bg-[#0649E7] md:text-white flex items-center gap-2 md:px-8 md:py-[14px] justify-center w-fit"  buttonIcon={<MdArrowForward size={20} />}/>
            </div>
          </div>
          <div className="rounded-[35px] border-2 border-[#0066EB] bg-white p-8 flex flex-col h-[820px] gap-6 w-1/2">
          <div className="flex flex-col  px-2 justify-between h-[30%] ">
            <div className="flex flex-col ">
              <h5 className="text-[#0649E7] text-[25px] font-sans font-[600]">Interview Prep</h5>
              <p className="text-[#0649E7] leading-4.5 text-[15px] font-[500] font-['DM Sans']">Two sessions to sharpen your story, confidence, and clarity — fast.</p>
            </div>
            <div className="text-[#0649E7] text-[50px] font-['DM Sans'] font-bold my-4">$500<span className="text-2xl font-[600] pl-2">one time</span></div>
            <hr className="my-4 border-[#BCBCBC] w-[80%] " />
            </div>
            <div className="flex flex-col gap-3 px-1 justify-between h-[70%]">
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">2× 45–min live coaching with our co-founder</p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">Real-time, practical feedback</p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">Build clarity, empathy & executive presence</p>
              </li>
              <li className="flex items-start gap-2 text-[#0066EB] text-base">
                <span className="mt-0.5"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="#4AD257"/><path d="M6 10.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <p className="text-base text-[#0649E7] font-[500] leading-4.5 text-[16px]">For senior and leadership roles — technical & non-technical</p>
              </li>
            </ul>
            <AuthButton buttonText="Get Started" rootClassName="md:bg-[#0649E7] md:text-white flex items-center gap-2 md:px-8 md:py-[14px] justify-center w-fit"  buttonIcon={<MdArrowForward size={20} />}/>
            </div>
          </div>
        </div>
      </SectionComp>


      {/* contacy section */}
      <SectionComp rootClassName="flex flex-col gap-10 items-start md:w-[75%] md:px-6" sectionHeadingClassName="md:text-[#0649E7] font-[400] " childrenClassName="w-full" >
        <div className=" bg-[#0649E7] rounded-[35px] flex flex-row items-center justify-between px-16 py-28 mt-8 w-full">
          {/* Left: Still have doubts? */}
          <div className="flex-1 flex flex-col items-start">
            <span className="text-white text-3xl font-normal leading-tight">STILL HAVE<br/>DOUBTS?</span>
          </div>
          {/* Center: Contact us */}
          <div className="flex-1 flex justify-center">
            <span className="text-white text-6xl font-bold">Contact us</span>
          </div>
          {/* Right: Arrow button */}
          <div className="flex-1 flex justify-end">
            <button className="size-24 rounded-full bg-white flex items-center justify-center shadow-lg">
              <Image src="/images/hero_section/arrow_bottom_left.svg" className="-rotate-135" alt="arrow-right" width={30} height={30} />
            </button>
          </div>
        </div>
      </SectionComp>
    </div>
  );
}
