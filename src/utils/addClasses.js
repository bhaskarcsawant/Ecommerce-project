export const addClasses = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
