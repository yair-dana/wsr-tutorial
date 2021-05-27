export const colorOptions = [
  { id: '0', value: 'Red' },
  { id: '1', value: 'Blue' },
  { id: '2', value: 'Green' },
  { id: '3', value: 'Yellow' },
  { id: '4', value: 'Pink' },
];

export const getColorById = (id) => {
  return colorOptions.find((color) => color.id === id);
};

export const getIdByColor = (colorValue) => {
  return colorOptions.find((color) => color.value === colorValue);
};
