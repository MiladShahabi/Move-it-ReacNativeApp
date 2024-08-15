import { View, Text } from "react-native";
import React from "react";
import ArrowLeft from "./ArrowLeft";
import Home from "./Home";
import Mail from "./Mail";
import Lock from "./Lock";
import User from "./User";

import { theme } from "../../constants/theme";
import EyeIcon from "./EyeIcon";
import EyeOffIcon from "./EyeOffIcon";

const icons = {
  home: Home,
  arrowLeft: ArrowLeft,
  eyeOffIcon: EyeOffIcon,
  eyeIcon: EyeIcon,
  mail: Mail,
  lock: Lock,
  user: User,

};
const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={theme.colors.textLight}
      {...props}
    />
  );
};

export default Icon;
