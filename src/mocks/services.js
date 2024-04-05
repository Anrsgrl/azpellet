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
