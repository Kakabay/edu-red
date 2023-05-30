export const comparePathname = (
  pathName: string,
  currentPath: string
): boolean => {
  if (pathName === "/") return currentPath === pathName;
  return currentPath.includes(pathName);
};
