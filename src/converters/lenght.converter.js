class BaseLenghtConverter {
  constructor(value) {
    this.value = Number(value);
  }

  toMillimeter() { return this.toCentimeter() * 10 };

  toCentimeter() { return this.toMillimeter() / 10 };

  toMeter() { return this.toCentimeter() / 100 };

  toKilometer() { return this.toMeter() / 1000 };

  toInch() { return this.toCentimeter() / 2.54 };

  toFoot() { return this.toInch() / 12 };

  toYard() { return this.toFoot() / 3 };

  toMile() { return this.toYard() / 1760 };
};

class MillimeterConverter extends BaseLenghtConverter {
  constructor(value) {
    super(Number(value));
  };

  toMillimeter() { return this.value };
};

class CentimeterConverter extends BaseLenghtConverter {
  constructor(value) {
    super(value);
  };

  toCentimeter() { return this.value };
};

class MeterConverter extends BaseLenghtConverter {
  constructor(value) {
    super(value);
  }

  toMeter() { return this.value };

  toCentimeter() { return this.toMeter() * 100 };
};

class KilometerConverter extends BaseLenghtConverter {
  constructor(value) {
    super(value);
  }

  toKilometer() { return this.value };

  toMillimeter() { return this.toKilometer() * 1000000 };
};

class InchConverter extends BaseLenghtConverter {
  constructor(value) {
    super(value);
  }

  toMillimeter() { return this.value * 25.4 };

  toInch() { return this.value };
};

class FootConverter extends BaseLenghtConverter {
  constructor(value) {
    super(value);
  }

  toMillimeter() { return this.value * 304.8 };

  toFoot() { return this.value };
};

class YardConverter extends BaseLenghtConverter {
  constructor(value) {
    super(value);
  }

  toMillimeter() { return this.value * 914.4 };

  toYard() { return this.value };
};

class MileConverter extends BaseLenghtConverter {
  constructor(value) {
    super(value);
  }

  toMillimeter() { return this.value * 1609000 };
};

module.exports = {
  MillimeterConverter,
  CentimeterConverter,
  MeterConverter,
  KilometerConverter,
  InchConverter,
  FootConverter,
  YardConverter,
  MileConverter
};