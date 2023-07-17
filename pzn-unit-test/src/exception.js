export class MyException extends Error {}

export const callMe = (name) => {
  if (name === "Wiedy") {
    throw new MyException("Ups my exceptions happens");
  } else {
    return "OK";
  }
};
