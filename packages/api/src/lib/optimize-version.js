const optimizeVersion = (version) => {
  const optimized = Object.keys(version).reduce((acc, key) => {
    const value = version[key];
    if (value === null) return acc;
    if (key.startsWith('$')) return acc;
    return {
      ...acc,
      [key]: value,
    };
  }, {});
  return optimized;
};

export { optimizeVersion };
