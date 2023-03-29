import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const allLinks = [
  {
    name: "Books",
    to: "books",
  },
  {
    name: "Articles",
    to: "articles",
  },
];

const SingleCategory = () => {
  const location = useLocation();
  const tempPathName = location.pathname.split("/");
  return (
    <div>
      <section>
        <div className="flex justify-between items-center">
          <ul className="flex gap-6 mb-8">
            {allLinks.map((link) => (
              <CustomLink to={link.to} key={link.name}>
                {link.name}
              </CustomLink>
            ))}
          </ul>
        </div>
        <Outlet />
      </section>
    </div>
  );
};

const CustomLink = ({ to, children }) => {
  const location = useLocation();
  const tempPathName = location.pathname.split("/");
  let isActive =
    tempPathName[tempPathName.length - 1] === to ||
    tempPathName[tempPathName.length - 1] === "";

  return (
    <Link
      to={to}
      className={` font-semibold text-[#8E98B0] text-lg ${
        isActive
          ? "!text-dreamLabColor1 border-b-4 border-dreamLabColor1"
          : null
      }`}
    >
      {children}
    </Link>
  );
};

export default SingleCategory;
