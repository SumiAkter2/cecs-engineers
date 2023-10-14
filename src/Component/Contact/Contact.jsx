const Contact = () => {
  return (
    <div>
      <div className=" py-12 border-b-2 border-red-500">
        <h1 className="uppercase text-3xl text-red-500 px-6"> Contact Us</h1>
      </div>

      <div className="my-20">
        <h1 dir="rtl" className=" text-3xl lg:ml-56">
          We appreciate your interest. Whether you&apos;re initiating a project,
          seeking assistance, or simply have a general inquiry, we&apos;re happy
          to assist.
          <br />
          <span className="text-red-500">
            Drop us a line and we will get back to you.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Contact;
