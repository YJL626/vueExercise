import srcData from "./demoSrc";
import { Exercise } from "@/type";

export const exerciseList = Object.entries(srcData).map(
  ([title, src]) => new Exercise(title, src)
);
