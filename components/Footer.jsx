import React from "react";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Discord48 from "@/assets/Discord48.png";
import DiscordSVG from "@/assets/DiscordSVG.svg";
const Footer = () => {
  const sitemap = [
    {
      title: "Company",
      links: [
        { title: "About", url: "/about" },
        { title: "Pricing", url: "/pricing" },
        { title: "Contact us", url: "/contactus" },
        { title: "Features", url: "/features" },
      ],
    },

    {
      title: "Product",
      links: [
        { title: "Figma design system", url: "/figmadesignsystem" },
        { title: "Ios kit", url: "/ioskit" },
        { title: "Android kit", url: "/androidkit" },
        { title: "Wireframe", url: "/wireframe" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Templates", url: "/templates" },
        { title: "Landing pages", url: "/landingpages" },
        { title: "Documentation", url: "/documentation" },
        { title: "Comp library", url: "/complibrary" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy policy", url: "/privacypolicy" },
        { title: "Terms & Conditions", url: "/termscondition" },
        { title: "Disclaimer", url: "/disclaimer" },
        { title: "Affiliate programme", url: "/affiliateprogramme" },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Help centre", url: "/helpcentre" },
        { title: "Raise ticket", url: "/raiseticket" },
        { title: "Report", url: "/report" },
        { title: "Refund", url: "/refund" },
      ],
    },
  ];

  const sitemapItem = ({ item }) => {
    return (
      <div className="flex flex-col items-start justify-start mx-8">
        <h3 className="text-slate-950 font-semibold text-md my-2">
          {item.title}
        </h3>
        <ul className="flex flex-col items-start justify-start">
          {item.links.map((link, index) => (
            <li key={index} className="text-slate-700 text-sm my-2 font-medium">
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center my-24">
      <Image src={Logo} alt="Logo" />
      <p className="font-medium text-sm text-slate-500 lg:max-w-md text-center mx-32 my-6 leading-6">
        Mode UI is a comprehensive design system that empowers designers and
        developers to create cohesive and visually stunning user interfaces
        across various platforms and devices
      </p>
      <div className="w-full md:max-w-screen-xl">
        <hr className="text-slate-400 w-full" />
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
          {sitemap.map((item, index) => (
            <div key={index} className="mx-4 my-4">
              {sitemapItem({ item })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-evenly w-52 mt-24">
        <GitHub className="text-slate-500" />
        <LinkedIn className="text-slate-500" />
        <Image
          className="text-slate-400"
          src={Discord48}
          alt="Discord"
          height={28}
          width={28}
        />
      </div>
      <p className="text-slate-500 mt-8 text-sm">
        © 2023 Mode UI Inc. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
