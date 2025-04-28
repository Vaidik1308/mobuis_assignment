import NavbarSection from "@/components/common/header/NavbarSection";
import HeroSection from "@/components/pages/home/HeroSection";
import AuthButton from "@/components/reusable/buttons/AuthButton";
import SectionComp from "@/components/reusable/containers/SectionComp";
import Image from "next/image";
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
                Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.
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
          <div className="rounded-[35px] border-2 border-[#0066EB] bg-[#F8FAFF] p-8 flex flex-col h-[600px] gap-6 w-1/3">
          <div className="flex flex-col  px-2 justify-between h-[30%] ">
            <h3 className="text-[#0066EB] text-2xl font-bold mb-2">Plus</h3>
            <div className="text-[#0066EB] text-4xl font-bold mb-1">$100<span className="text-2xl font-normal">/week</span></div>
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
      </SectionComp>
    </div>
  );
}
