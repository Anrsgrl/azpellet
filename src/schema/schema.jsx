import * as yup from "yup";

export const getSchema = (t) => {
  return yup.object().shape({
    user_name: yup.string().required(t("NameReq")).min(4, t("NameCharacters")),
    user_email: yup.string().required(t("EmailReq")).email(t("InvalidEmail")),
    subject: yup
      .string()
      .required(t("SubjectReq"))
      .min(4, t("SubjectCharacters")),
    message: yup
      .string()
      .required(t("MessageReq"))
      .min(4, t("MessageCharacters")),
  });
};
