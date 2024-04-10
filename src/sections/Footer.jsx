import Container from "../components/Container";
import platstoreImg from "../assets/playstore.png";
import appstoreImg from "../assets/appstore.png";
import { dataFooterLinks } from "../data/data-footerLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const options = ["English", "French", "Spanish"];
const socials = [faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube];

function Footer() {
  return (
    <footer className="pb-36 pt-32">
      <Container extraStyles="flex flex-col gap-28 lg:grid lg:grid-cols-[1fr_2fr] gap-x-24 lg:gap-x-12 lg:gap-y-16">
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl font-bold md:leading-normal">
            <span className="text-blue-950">Easy&nbsp;</span>
            <br className="hidden lg:block" />
            <span className="text-blue-600">ahead</span>
          </h4>
          <p className="w-5/6 font-light leading-relaxed text-blue-950">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <select className="mb-6 mt-8 w-5/6 rounded-md border border-gray-300 p-2 focus:border-gray-600">
            {options.map((option) => (
              <option>{option}</option>
            ))}
          </select>
          <div className="flex items-center justify-start gap-2">
            <img src={appstoreImg} alt="apple appstore" className="w-32" />
            <img src={platstoreImg} alt="google playstore" className="w-32" />
          </div>
          <div className="mt-4 flex items-center gap-6 text-2xl">
            {socials.map((el) => (
              <FontAwesomeIcon icon={el} className="cursor-pointer" />
            ))}
          </div>
        </div>
        <div className="grid-cols-auto-fit-220 grid gap-x-8 gap-y-12">
          {dataFooterLinks.map((link) => (
            <FooterLink key={link.id} link={link} />
          ))}
        </div>
        <div className="col-span-2 flex flex-col justify-between gap-4 text-xs font-light text-gray-600 min-[450px]:flex-row min-[450px]:items-center">
          <p>Copyright Calendly 2022</p>
          <p>Privacy / Terms and Conditions</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({ link }) {
  return (
    <div className="flex flex-col gap-6">
      <h5 className="text-xl font-bold text-blue-950">{link.heading}</h5>
      <ul className="flex flex-col gap-4">
        {link.list.map((link) => (
          <li className="cursor-pointer font-light text-blue-950">{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
