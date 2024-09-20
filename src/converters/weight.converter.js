class BaseWeightConverter {
  constructor(value) {
    this.value = Number(value);
  };

  toMilligram() {
    return this.toGram() / 1000;
  };

  toGram() {
    return this.toMilligram() * 1000;
  };

  toKilogram() {
    return this.toGram() / 1000;
  };

  toOunce() {
    return this.toKilogram() * 35.274;
  };

  toPound() {
    return this.toOunce() / 16;
  };
};

class MilligramConverter extends BaseWeightConverter{
  constructor(value) {
    super(value);
  };

  toMilligram () { return this.value };
}

class GramConverter extends BaseWeightConverter{
  constructor(value) {
    super(value);
  };

  toGram () { return this.value };
};

class KilogramConverter extends BaseWeightConverter{
  constructor(value) {
    super(value);
  };

  toKilogram () { return this.value };

  toGram() { this.toKilogram() * 1000 };
};

class OunceConverter extends BaseWeightConverter{
  constructor(value) {
    super(value);
  };

  toOunce () { return this.value };

  toGram() { return this.toOunce() * 28.35 };
};

class PoundConverter extends BaseWeightConverter{
  constructor(value) {
    super(value);
  };

  toPound () { return this.value };

  toGram () { return this.toPound() * 453.6 };
};

module.exports = {
  MilligramConverter,
  GramConverter,
  KilogramConverter,
  OunceConverter,
  PoundConverter
};