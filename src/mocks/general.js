import i18n from "i18next";
import {
  TbFileCertificate,
  TbRecycle,
  TbTree,
  TbTruckDelivery,
} from "react-icons/tb";

import log from "../assets/images/log.webp";
import wood from "../assets/images/wood.webp";
import woodChips from "../assets/images/woodChips.webp";
import woodPellet from "../assets/images/woodPellet.webp";
import { AiOutlineArrowRight } from "react-icons/ai";

const translate = (key) => i18n.t(key);

export const services = [
  {
    icon: <TbTree />,
    text: translate("Services5"),
  },
  {
    icon: <TbRecycle />,
    text: translate("Services1"),
  },
  {
    icon: <TbTruckDelivery />,
    text: translate("Services2"),
  },
  {
    icon: <TbFileCertificate />,
    text: translate("Services3"),
    link: translate("Services4"),
  },
];

export const aboutLine = [
  {
    title: translate("LineInfo1"),
    content: "6mm",
  },
  {
    title: translate("LineInfo2"),
    content: "200-300mm",
  },
  {
    title: translate("LineInfo3"),
    content: translate("LineInfo5"),
  },
  {
    title: translate("LineInfo4"),
    content: "0.63%",
  },
];

export const stages = [
  {
    text: translate("Stage3"),
    image: woodChips,
  },
  {
    text: <AiOutlineArrowRight />,
    y: "180deg",
  },
  {
    text: translate("Stage2"),
    image: wood,
  },
  {
    text: <AiOutlineArrowRight />,
    y: "90deg",
  },
  {
    h2: translate("StagesH"),
  },
  {
    text: <AiOutlineArrowRight />,
    y: "270deg",
  },
  {
    text: translate("Stage4"),
    image: woodPellet,
  },
  {
    id: "space",
  },
  {
    text: translate("Stage1"),
    image: log,
  },
];
