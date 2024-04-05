import { t } from "i18next";
import {
  TbFileCertificate,
  TbRecycle,
  TbTree,
  TbTruckDelivery,
} from "react-icons/tb";

export const services = [
  {
    icon: <TbTree />,
    text: t("Services5"),
  },
  {
    icon: <TbRecycle />,
    text: t("Services1"),
  },
  {
    icon: <TbTruckDelivery />,
    text: t("Services2"),
  },
  {
    icon: <TbFileCertificate />,
    text: t("Services3"),
    link: t("Services4"),
  },
];

export const aboutLine = [
  {
    title: t("LineInfo1"),
    content: "6mm",
  },
  {
    title: t("LineInfo2"),
    content: "200-300mm",
  },
  {
    title: t("LineInfo3"),
    content: t("LineInfo5"),
  },
  {
    title: t("LineInfo4"),
    content: "0.63%",
  },
];
