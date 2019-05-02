type FunctionType = (...arg: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;

export interface login {
  email: string;
  password: string;
}

export interface register extends login {
  name: string;
}