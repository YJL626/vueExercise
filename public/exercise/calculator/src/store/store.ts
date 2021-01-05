import { CalculatorButton, buttonType } from "@/type.ts";
const buttonList: CalculatorButton[] = [];
//计算器第一行
buttonList.push(new CalculatorButton(buttonType[2], "AC", "#AC3939"));
const firstLineButton = ["/", "X"].map(
  (item) => new CalculatorButton(buttonType[1], item, "#666")
);
buttonList.push(...firstLineButton);
//计算器第2行
const secondLineButton = ["7", "8", "9"].map(
  (item) => new CalculatorButton(buttonType[0], item, "#4D4D4D")
);
buttonList.push(...secondLineButton);
buttonList.push(new CalculatorButton(buttonType[1], "-", "#666"));
//计算器第3行
const thirdLineButton = ["4", "5", "6"].map(
  (item) => new CalculatorButton(buttonType[0], item, "#4D4D4D")
);
buttonList.push(...thirdLineButton);
buttonList.push(new CalculatorButton(buttonType[1], "+", "#666"));
//计算器第4行
const fourthButton = ["1", "2", "3"].map(
  (item) => new CalculatorButton(buttonType[0], item, "#4D4D4D")
);
buttonList.push(...fourthButton);
buttonList.push(new CalculatorButton(buttonType[3], "=", "#004466"));
//计算器第5行
const fifthButton = ["0", "."].map(
  (item) => new CalculatorButton(buttonType[0], item, "#4D4D4D")
);
buttonList.push(...fifthButton);

export { buttonList };
