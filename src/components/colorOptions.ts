export const colorOptions = [
  { id: '0', value: 'Red' },
  { id: '1', value: 'Blue' },
  { id: '2', value: 'Green' },
  { id: '3', value: 'Yellow' },
  { id: '4', value: 'Pink' },
];

export const getColorById = (id?: string) => {
  let colorValue = '';
  const colorObj = colorOptions.find((color) => color.id === id);
  if (colorObj) {
    colorValue = colorObj.value;
  }
  return colorValue;
};

export const getIdByColor = (colorValue?: string) => {
  let colorID = '';
  const colorObj = colorOptions.find((color) => color.value === colorValue);
  if (colorObj) {
    colorID = colorObj.id;
  }
  return colorID;
};
