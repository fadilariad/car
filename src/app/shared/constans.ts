export enum MotorType {
  ELECTRIC = '1',
  FUEL = '2'
}

export enum Gender {
  MALE = "male",
  FEMALE = "female"
}

export const localStorageKeysName = {
  choices: 'app_car_choices',
  visits: 'app_car_landing_visit'
}

export const MIN_CAR_SEATS = 2;
export const MAX_CAR_SEATS = 7;
export const MIN_YEARS_USER_OLD = 18;

export const BREAKPOINTS = {
  desktop: '(min-width: 1001px)',
  tablet: '(min-width: 768px) and (max-width: 1000px)',
  mobile: '(max-width: 767px)',
};

export type BreakpointName = 'mobile' | 'desktop' | 'tablet';
