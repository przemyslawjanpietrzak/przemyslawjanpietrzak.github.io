interface Data {
  field: {
    name: string;
  }
}

export const fn = (arg: Data['field']) => {
  return arg.name;
}

export const fn1 = (name: Data['field']['name']) => {
  return name;
}