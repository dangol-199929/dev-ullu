import { FC } from "react";
import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
interface DropDownProps {}

const DropDown: FC<DropDownProps> = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Space wrap>
      <Dropdown
        menu={menuProps}
        className={`text-lg hover:!text-orange-500 font-bold text-slate-900 dark:text-slate-50 flex items-center`}
      >
        <Button className="border-none">
          Button
          <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
};

export default DropDown;
