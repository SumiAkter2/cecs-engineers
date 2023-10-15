import PageTransition from "../PageTransition";
const Contact = () => {
  return (
    <PageTransition>
      <div className=" py-12 border-b border-red-500 ">
        <h1 className="uppercase text-3xl text-red-500 px-6 font-extrabold leading-10">
          {" "}
          Contact Us
        </h1>
      </div>

      <div className="my-24">
        <h1 className=" text-3xl lg:ml-52 font-bold pr-10 text-end leading-10">
          We appreciate your interest. Whether you&apos;re initiating a
          project,seeking assistance, or simply have a general inquiry,
          we&apos;re happy to assist.
          <br />
          <span className="text-red-500">
            Drop us a line and we will get back to you.
          </span>
        </h1>
      </div>

      <div className="lg:flex justify-between items-start leading-7">
        <div className="lg:w-2/5 p-4 ">
          <h1 className="font-extrabold text-xl pb-6  ">PROJECT ENQUIRIES</h1>
          <p className="font-semibold text-2xl">+912246048985</p>
          <p className="font-semibold text-2xl my-2">info@cecsengineer.com</p>
          <h1 className="font-extrabold text-xl mt-12">ADDRESS</h1>
          <p className="w-4/5 font-semibold text-2xl my-6">
            Crystal Plaza, Hiranandani Complex, Office no. 9, First Floor, Plot
            no 18/27, Sector 7, Kharghar, Navi Mumbai, Maharashtra 410210, India
          </p>

          <button className="btn btn-outline outline-2 outline-red-500 text-red-500 mt-12 underline  lg:w-80 ">
            View On Maps
          </button>
        </div>
        <div className="lg:w-3/5 mb-14">
          <form className="p-4">
            <div className="flex gap-6 ">
              <input
                type="text"
                placeholder="First Name"
                className="outline-0 border-b border-red-500 w-full max-w-[370px] font-semibold text-[22px] text-[#101330] leading-7 py-2"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="outline-0 border-b border-red-500 w-full max-w-[370px] font-semibold text-[22px] text-[#101330] leading-7 py-2"
              />
            </div>
            <br />
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Email "
                className="outline-0 border-b border-red-500 w-full max-w-[370px] font-semibold text-[22px] text-[#101330] leading-7 py-2"
              />
              <input
                type="text"
                placeholder="Phone"
                className="outline-0 border-b border-red-500 w-full max-w-[370px] font-semibold text-[22px] text-[#101330] leading-7 py-2"
              />
            </div>
            <br />
            <label className="font-semibold text-[22px] text-[#101330] leading-7 ">
              Your Message
            </label>
            <br />
            <textarea
              className="border mt-4 border-red-500 outline-0 h-44 w-full max-w-3xl font-semibold text-[22px] text-[#101330] leading-7 py-2 rounded-lg p-2"
              defaultValue="cdskcbdksbcksdbckjsdbckjsdbcjsdncsdj,cnkjsdnckjsdnc cdljsd csdchlsdc sdchcsc cnsdcnsdkjcnsdcnsd,cns,dcn,sdcnsdjcb"
            ></textarea>
            <p className="font-semibold text-sm leading-4 my-2">
              Protected by reCAPTCHA. Google Privacy Policy and Terms of Service
              apply.
            </p>
            <input
              className="border mt-4 border-red-500 outline-0  w-full max-w-3xl font-bold text-[22px] text-red-500  py-4 rounded-lg cursor-pointer"
              type="Submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
