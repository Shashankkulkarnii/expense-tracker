import * as Yup from "yup";

export const addNewTransactionSchema = Yup.object().shape({
    description: Yup.string().required("Please enter the description"),
    amount: Yup.number().typeError("please enter a number").required("Please enter the amount")
});