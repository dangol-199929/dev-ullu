"use client";
import { FC } from "react";
import * as React from "react";
import Image from "next/image";
import { Logo } from "../../../ImageConfig";
import Link from "next/link";
import { Space } from "antd";

import DefaultButton from "./DefaultButton";
import { useRouter } from "next/navigation";
import DropDown from "./DropDown";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  return (
    <>
      <nav className="bg-slate-500 flex justify-between p-4">
        <div>
          <Link href={"/#"} className="logo text-3xl inline-block">
            <Image src={Logo} width={50} height={50} alt="logo" />
          </Link>
        </div>
        <Space className="site-button-ghost-wrapper" wrap>
          <DefaultButton> Ullu</DefaultButton>

          <DefaultButton test={() => router.push("/dashboard")}>
            Express
          </DefaultButton>
          <DefaultButton test={() => router.push("google.com")}>
            Food
          </DefaultButton>
          <DefaultButton>This has been changed</DefaultButton>
          <DropDown />
        </Space>
      </nav>
    </>
  );
};

<></>;

export default Header;
