import * as yup from "yup";

export const schema = yup.object().shape({
  recipeName: yup.string().max(20).required(),
  
});