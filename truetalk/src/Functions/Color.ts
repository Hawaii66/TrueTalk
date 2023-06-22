export type TableColor = "white" | "red" | "green" | "yellow" | "purewhite";
export const GetTableColor = (type: TableColor) => {
  switch (type) {
    case "white":
      return "#F7F1E5";
    case "red":
      return "#FD8A8A";
    case "green":
      return "#B6E2A1";
    case "yellow":
      return "#FFD966";
    case "purewhite":
      return "#ffffff";
  }
};

export type Color =
  | "black"
  | "white"
  | "blue"
  | "red"
  | "redlight"
  | "reddark"
  | "whitegray"
  | "main";
export const GetColor = (type: Color) => {
  switch (type) {
    case "white":
      return "#F7F1E5";
    case "whitegray":
      return "#CCCAC6";
    case "black":
      return "#354259";
    case "blue":
      return "#576CBC";
    case "red":
      return "#E85959";
    case "main":
      return "#E85959";
    case "redlight":
      return "#DA6464";
    case "reddark":
      return "#D34747";
  }
};

export const BORDERWIDTH = 1;
