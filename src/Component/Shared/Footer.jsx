import footerImage from "../../assets/image/Footer/footerImg.png";
const Footer = () => {
  return (
    <div>
      <div
        className="h-24"
        style={{
          background: `url('${footerImage}')`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <footer className="footer p-16 bg-red-500 text-white justify-between ">
        <aside>
          <h1 className="text-6xl font-bold">Let&apos;s Build.</h1>
        </aside>

        <nav>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <a>CONTACT</a>
          <a>+912246048985</a>
          <a>info@cecsengineer.com</a>
        </nav>
        <nav dir="lg:rtl">
          <a className="link link-hover">Linkedin</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Youtube</a>
        </nav>
      </footer>
      <footer className="footer items-center  bg-gray-800 text-neutral-content px-16 py-6">
        <aside className="items-center grid-flow-col">
          <p>© 2023 CECS Engineers Pvt. Ltd GSTIN 27AAKCC6904A1ZX</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>Privacy</a>
          <a>Sustainability</a>
          <a>Safety & Health</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
