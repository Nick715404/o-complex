import { FieldValues, RegisterOptions } from "react-hook-form";

export const validation: RegisterOptions<FieldValues, 'phone'> = {
  required: 'Поле обязательно к заполнению',
};