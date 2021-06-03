const strToArr = (str) => str.split(", ");

export function loadData(state, data) {
  const climatesTmp = { All: true };
  const localesTmp = { All: true };

  data.forEach((item) => {
    ["season", "climate", "locale"].forEach((key) => {
      item[key] = strToArr(item[key]);
    });

    item.climate.forEach((climate) => {
      climatesTmp[climate] = true;
    });
    item.locale.forEach((climate) => {
      localesTmp[climate] = true;
    });
  });

  return {
    ...state,
    isLoading: false,
    data: data,
    filteredData: data,
    climates: Object.keys(climatesTmp),
    locales: Object.keys(localesTmp),
  };
}
