const themeSkeleton = (root) => {
  return {
    color: root.classList.contains("dark")
      ? "rgba(200, 200, 200, 0.05)"
      : "rgba(1, 1, 1, 0.11)",
    highlightColor: root.classList.contains("dark")
      ? "rgba(200, 200, 200, 0.05)"
      : "rgba(255, 255, 255, 0.1)",
  };
};

export default themeSkeleton;
