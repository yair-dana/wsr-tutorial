export const colorOptions = [
  { id: '0', value: 'Red' },
  { id: '1', value: 'Blue' },
  { id: '2', value: 'Green' },
  { id: '3', value: 'Yellow' },
  { id: '4', value: 'Pink' },
];

export const getColorById = (id: string | undefined) => {
  const colorObj = colorOptions.find((color) => color.id === id);
  if (colorObj) {
    return colorObj.value;
  }
  return '';
};

export const getIdByColor = (colorValue: string | undefined) => {
  const colorObj = colorOptions.find((color) => color.value === colorValue);
  if (colorObj) {
    return colorObj.id;
  }
  return '';
};
