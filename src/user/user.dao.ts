type EducationDao = {
  university: string;
  avg_grade: number;
  year: number;
};

export type UserDao = {
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  address: string | undefined | null;
  gender: string;
  education: EducationDao;
};
