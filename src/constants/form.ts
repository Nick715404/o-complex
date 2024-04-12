import { FieldValues, RegisterOptions } from "react-hook-form";

export const validation: RegisterOptions<FieldValues, 'phone'> = {
  required: 'Поле обязательно к заполнению',
  minLength: {
    value: 11,
    message: "Укажите больше 11 символов"
  }
};