export const randomElement = <T>(elements: ReadonlyArray<T>) => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};
