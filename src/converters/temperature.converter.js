class BaseTemperatureConverter {
  constructor(value) {
    this.value = Number(value);
  };

  toCelsius() {
    return (this.toFahrenheit() - 32) * 5/9;
  };

  toFahrenheit() {
    return (this.toCelsius() * 9/5) + 32;
  };

  toKelvin() {
    return  (this.toFahrenheit() - 32) * 5/9 + 273.15;
  };
};

class CelsiusConverter extends BaseTemperatureConverter{
  constructor(value) {
    super(value);
  };

  toCelsius() { return this.value };
};

class FahrenheitConverter extends BaseTemperatureConverter{
  constructor(value) {
    super(value);
  };

  toFahrenheit() { return this.value };
};

class KelvinConverter extends BaseTemperatureConverter{
  constructor(value) {
    super(value);
  };

  toKelvin() { return this.value };

  toCelsius() { return this.toKelvin() - 273.15 };
};

module.exports = {
  CelsiusConverter,
  FahrenheitConverter,
  KelvinConverter
};