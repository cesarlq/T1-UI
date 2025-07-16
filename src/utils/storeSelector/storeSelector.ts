export const getLetters = (label: string): string => {
    if (!label) label = 'Sin nombre';
    const labelArrayPerSpaces = label.split(' ');
    if (labelArrayPerSpaces.length >= 2 && labelArrayPerSpaces[0][0] && labelArrayPerSpaces[1][0]) {
      return `${labelArrayPerSpaces[0][0].toUpperCase()}${labelArrayPerSpaces[1][0].toUpperCase()}`;
    } else {
      return `${label[0].toUpperCase()}${label[1] ? label[1].toUpperCase() : ''}`;
    }
  };