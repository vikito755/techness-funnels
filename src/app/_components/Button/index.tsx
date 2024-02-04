import { IQuizData } from "@/types";
import { FC } from "react";

interface IButtonProps {
    answer: string;
    formData: IQuizData;
    setFormData: Function;
    valueKey: string;
};

const Button: FC<IButtonProps> = ({answer, formData, setFormData, valueKey}: IButtonProps)  => {
    return (
        <input 
            type="button"
            value={answer}
            onClick={
                (e) => {
                  setFormData({
                    ...formData,
                    [valueKey]: answer
                  })
                }
              }
            className="text-blue-700 hover:cursor-pointer text-lg hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500">
             
        </input>
    )
}

export default Button;