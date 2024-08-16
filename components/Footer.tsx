import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-2">
        <div>
          <div className="font-bold pb-4 text-white">About Us</div>
          <div>
            Our music website brings together the latest tracks, timeless
            classics, and trending playlists. Join our community of music lovers
            and explore your favorite tunes.
          </div>
        </div>
        <div>
          <div className="font-bold pb-4 text-white">Quick Links</div>
          <div>
            <Link className="block" href={"/"}>
              Home
            </Link>
            <Link className="block" href={"/"}>
              About
            </Link>
            <Link className="block" href={"/"}>
              Couses
            </Link>
            <Link className="block" href={"/"}>
              Contact
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold pb-4 text-white">Follow Us</div>
          <div>
            <Link className="block" href={"/"}>
              Tweeter
            </Link>
            <Link className="block" href={"/"}>
              Linkedin
            </Link>
            <Link className="block" href={"/"}>
              Facebook
            </Link>
            <Link className="block" href={"/"}>
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold pb-4 text-white">Contact Us</div>
          <div>Surat, Gujarat - 394180</div>
          <div>Email: info@musicschool.com</div>
          <div>Phone: +91 X892379XX8</div>
        </div>
      </div>
      <p className="text-center text-xs pt-8 justify-center">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}
