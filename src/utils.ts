export const randomElement = <T extends unknown>(
  elements: ReadonlyArray<T>,
) => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};
