import reset from "../reset.css";
import basicTheme from "../basicTheme.css";

let theme = basicTheme;

theme.c = {
  primary: theme["color-primary"]
};

theme.bg = {
  primary: theme["background-primary"]
};

export default theme;
