import * as yup from 'yup';
import { UserDao } from './user.dao';

export const userSchema: yup.SchemaOf<UserDao> = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  age: yup.number().min(18).max(35).positive().integer().defined(),
  gender: yup.mixed().oneOf(['male', 'female', 'other']).defined(),
  email: yup.string().email().required(),
  address: yup.string().nullable().notRequired(),
  education: yup.object({
    university: yup.string().required(),
    avg_grade: yup.number().moreThan(0.0).max(4.0).defined(),
    year: yup.number().moreThan(0).defined(),
  }),
});
