export const APP_STATES = {
  BUILDING_SELECTION: 'BUILDING_SELECTION',
  HEIGHT_SETTING: 'HEIGHT_SETTING',
  MATERIAL_SELECTION: 'MATERIAL_SELECTION',
  SIZES_SETTING: 'SIZES_SETTING',
  WAITING_FOR_PRICE_CALCULATION: 'WAITING_FOR_PRICE_CALCULATION',
  PRICE_CALCULATION_SUCCESS: 'BACKEND_ANSWER_SUCCESS',
  PRICE_CALCULATION_FAIL: 'BACKEND_ANSWER_FAIL',
  CALCULATION_RESULT: 'CALCULATION_RESULT',
};

export const materials = {
  brick: {
    name: 'Кирпич',
    id: 1,
  },
  cinderBlock: {
    name: 'Шлакоблок',
    id: 2,
  },
  woodenBeam: {
    name: 'Брус',
    id: 3,
  },
  metal: {
    name: 'Металл',
    id: 4,
  },
  sandwichPanel: {
    name: 'Сендвич-панель',
    id: 5,
  },
};

export const buildings = {
  livingHouse: {
    name: 'Жилой дом',
    id: 1,
    materials: [materials.brick, materials.cinderBlock, materials.woodenBeam],
  },
  garage: {
    name: 'Гараж',
    id: 2,
    materials: [materials.cinderBlock, materials.metal, materials.sandwichPanel],
  },
};
