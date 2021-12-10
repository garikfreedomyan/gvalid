import { boolean, messages } from '../lib';

describe('Schema: BooleanSchema / method: end()', () => {
  test('default messages', () => {
    expect(boolean().end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: messages.boolean,
      },
    });

    expect(boolean().strict().end()).toEqual({
      type: {
        value: 'boolean',
        strict: true,
        message: messages.boolean,
      },
    });

    expect(boolean().required().end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: messages.boolean,
      },
      required: {
        value: true,
        message: messages.required,
      },
    });

    expect(boolean().notRequired().end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: messages.boolean,
      },
      required: {
        value: false,
        message: '',
      },
    });

    expect(boolean().required().notRequired().end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: messages.boolean,
      },
      required: {
        value: false,
        message: '',
      },
    });

    expect(boolean().notRequired().required().end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: messages.boolean,
      },
      required: {
        value: true,
        message: messages.required,
      },
    });

    expect(boolean().isTrue().end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: messages.boolean,
      },
      isTrue: {
        value: true,
        message: messages.true,
      },
    });

    expect(boolean().isFalse().end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: messages.boolean,
      },
      isFalse: {
        value: true,
        message: messages.false,
      },
    });

    expect(boolean().isTrue().isFalse().end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: messages.boolean,
      },
      isTrue: {
        value: false,
        message: messages.true,
      },
      isFalse: {
        value: true,
        message: messages.false,
      },
    });

    expect(boolean().isFalse().isTrue().end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: messages.boolean,
      },
      isFalse: {
        value: false,
        message: messages.false,
      },
      isTrue: {
        value: true,
        message: messages.true,
      },
    });
  });

  test('custom messages', () => {
    expect(boolean('custom type message').end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: 'custom type message',
      },
    });

    expect(boolean('custom type message').strict('custom strict message').end()).toEqual({
      type: {
        value: 'boolean',
        strict: true,
        message: 'custom strict message',
      },
    });

    expect(boolean('custom type message').required('custom requred message').end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: 'custom type message',
      },
      required: {
        value: true,
        message: 'custom requred message',
      },
    });

    expect(boolean('custom type message').notRequired('custom not requred message').end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: 'custom type message',
      },
      required: {
        value: false,
        message: 'custom not requred message',
      },
    });

    expect(
      boolean('custom type message').required('custom requred message').notRequired('custom not requred message').end()
    ).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: 'custom type message',
      },
      required: {
        value: false,
        message: 'custom not requred message',
      },
    });

    expect(
      boolean('custom type message').notRequired('custom not requred message').required('custom requred message').end()
    ).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: 'custom type message',
      },
      required: {
        value: true,
        message: 'custom requred message',
      },
    });

    expect(boolean('custom type message').isTrue('custom isTrue message').end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: 'custom type message',
      },
      isTrue: {
        value: true,
        message: 'custom isTrue message',
      },
    });

    expect(boolean('custom type message').isFalse('custom isFalse message').end()).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: 'custom type message',
      },
      isFalse: {
        value: true,
        message: 'custom isFalse message',
      },
    });

    expect(
      boolean('custom type message').isTrue('custom isTrue message').isFalse('custom isFalse message').end()
    ).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: 'custom type message',
      },
      isTrue: {
        value: false,
        message: 'custom isTrue message',
      },
      isFalse: {
        value: true,
        message: 'custom isFalse message',
      },
    });

    expect(
      boolean('custom type message').isFalse('custom isFalse message').isTrue('custom isTrue message').end()
    ).toEqual({
      type: {
        value: 'boolean',
        strict: false,
        message: 'custom type message',
      },
      isFalse: {
        value: false,
        message: 'custom isFalse message',
      },
      isTrue: {
        value: true,
        message: 'custom isTrue message',
      },
    });
  });
});

describe('Schema: BooleanSchema / method: validate()', () => {
  test('default messages: not strict', () => {
    expect(boolean().validate(true)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().validate(false)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().validate(0)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().validate(1)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().validate(-1)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate(2)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate('')).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate('text')).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate(NaN)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate(Infinity)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate(-Infinity)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate({})).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate({ a: 1 })).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate([])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate([0])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate([1])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate([1, 2, 3])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate(Symbol('a'))).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().validate(undefined)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().validate(null)).toEqual({
      valid: true,
      error: '',
    });
  });

  test('default messages: strict', () => {
    expect(boolean().strict().validate(true)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().strict().validate(false)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().strict().validate(0)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate(1)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate(-1)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate(2)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate('')).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate('text')).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate(NaN)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate(Infinity)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate(-Infinity)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate({})).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate({ a: 1 })).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate([])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate([0])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate([1])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate([1, 2, 3])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate(Symbol('a'))).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().strict().validate(undefined)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().strict().validate(null)).toEqual({
      valid: true,
      error: '',
    });
  });

  test('default messages: required', () => {
    expect(boolean().required().validate(true)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().required().validate(false)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().required().validate(1)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().required().validate(0)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().required().validate('')).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate('text')).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate(NaN)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate(Infinity)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate(-Infinity)).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate({})).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate({ a: 1 })).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate([])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate([0])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate([1])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate([1, 2, 3])).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate(Symbol('a'))).toEqual({
      valid: false,
      error: messages.boolean,
    });

    expect(boolean().required().validate(undefined)).toEqual({
      valid: false,
      error: messages.required,
    });
    expect(boolean().required().validate(null)).toEqual({
      valid: false,
      error: messages.required,
    });
  });

  test('default messages: isTrue', () => {
    expect(boolean().isTrue().validate(true)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().isTrue().validate(1)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().isTrue().validate(false)).toEqual({
      valid: false,
      error: messages.true,
    });

    expect(boolean().isTrue().validate(0)).toEqual({
      valid: false,
      error: messages.true,
    });

    expect(boolean().isFalse().isTrue().validate(true)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().isFalse().isTrue().validate(false)).toEqual({
      valid: false,
      error: messages.true,
    });
  });

  test('default messages: isFalse', () => {
    expect(boolean().isFalse().validate(false)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().isFalse().validate(0)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().isFalse().validate(true)).toEqual({
      valid: false,
      error: messages.false,
    });

    expect(boolean().isFalse().validate(1)).toEqual({
      valid: false,
      error: messages.false,
    });

    expect(boolean().isTrue().isFalse().validate(false)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean().isTrue().isFalse().validate(true)).toEqual({
      valid: false,
      error: messages.false,
    });
  });

  test('custom messages: not strict', () => {
    expect(boolean('custom type message').validate(true)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').validate(false)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').validate(0)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').validate(1)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').validate(-1)).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate(2)).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate('')).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate('text')).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate(NaN)).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate(Infinity)).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate(-Infinity)).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate({})).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate({ a: 1 })).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate([])).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate([0])).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate([1])).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate([1, 2, 3])).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate(Symbol('a'))).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').validate(undefined)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').validate(null)).toEqual({
      valid: true,
      error: '',
    });
  });

  test('custom messages: strict', () => {
    expect(boolean('custom type message').strict('custom strict message').validate(true)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(false)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(0)).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(1)).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(-1)).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(2)).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate('')).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate('text')).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(NaN)).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(Infinity)).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(-Infinity)).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate({})).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate({ a: 1 })).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate([])).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate([0])).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate([1])).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate([1, 2, 3])).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(Symbol('a'))).toEqual({
      valid: false,
      error: 'custom strict message',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(undefined)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').strict('custom strict message').validate(null)).toEqual({
      valid: true,
      error: '',
    });
  });

  test('custom messages: required', () => {
    expect(boolean('custom type message').required('custom required  message').validate(true)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').required('custom required message').validate(false)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').required('custom required message').validate(1)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').required('custom required message').validate(0)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').required('custom required message').validate('')).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate('text')).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate(NaN)).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate(Infinity)).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate(-Infinity)).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate({})).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate({ a: 1 })).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate([])).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate([0])).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate([1])).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate([1, 2, 3])).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate(Symbol('a'))).toEqual({
      valid: false,
      error: 'custom type message',
    });

    expect(boolean('custom type message').required('custom required message').validate(undefined)).toEqual({
      valid: false,
      error: 'custom required message',
    });

    expect(boolean('custom type message').required('custom required message').validate(null)).toEqual({
      valid: false,
      error: 'custom required message',
    });
  });

  test('custom messages: isTrue', () => {
    expect(boolean('custom type message').isTrue('custom isTrue message').validate(true)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').isTrue('custom isTrue message').validate(1)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').isTrue('custom isTrue message').validate(false)).toEqual({
      valid: false,
      error: 'custom isTrue message',
    });

    expect(boolean('custom type message').isTrue('custom isTrue message').validate(0)).toEqual({
      valid: false,
      error: 'custom isTrue message',
    });

    expect(
      boolean('custom type message').isFalse('custom isFalse message').isTrue('custom isTrue message').validate(true)
    ).toEqual({
      valid: true,
      error: '',
    });

    expect(
      boolean('custom type message').isFalse('custom isFalse message').isTrue('custom isTrue message').validate(false)
    ).toEqual({
      valid: false,
      error: 'custom isTrue message',
    });
  });

  test('custom messages: isFalse', () => {
    expect(boolean('custom type message').isFalse('custom isFalse message').validate(false)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').isFalse('custom isFalse message').validate(0)).toEqual({
      valid: true,
      error: '',
    });

    expect(boolean('custom type message').isFalse('custom isFalse message').validate(true)).toEqual({
      valid: false,
      error: 'custom isFalse message',
    });

    expect(boolean('custom type message').isFalse('custom isFalse message').validate(1)).toEqual({
      valid: false,
      error: 'custom isFalse message',
    });

    expect(
      boolean('custom type message').isTrue('custom isTrue message').isFalse('custom isFalse message').validate(false)
    ).toEqual({
      valid: true,
      error: '',
    });

    expect(
      boolean('custom type message').isTrue('custom isTrue message').isFalse('custom isFalse message').validate(true)
    ).toEqual({
      valid: false,
      error: 'custom isFalse message',
    });
  });
});

describe('Schema: BooleanSchema / method: isValid()', () => {
  test('simple validation', () => {
    expect(boolean().isValid(true)).toEqual(true);

    expect(boolean().isValid('invalid data')).toEqual(false);
  });
});

describe('Schema: BooleanSchema / method: format()', () => {
  test('data formation', () => {
    expect(boolean().format(true)).toEqual(true);
    expect(boolean().format(false)).toEqual(false);
    expect(boolean().format(1)).toEqual(true);
    expect(boolean().format(0)).toEqual(false);
    expect(() => boolean().strict().format(0)).toThrowError(new TypeError(messages.boolean));
    expect(() => boolean().strict().format(1)).toThrowError(new TypeError(messages.boolean));
    expect(() => boolean().format(undefined)).toThrowError(new TypeError(messages.boolean));
    expect(() => boolean().format(null)).toThrowError(new TypeError(messages.boolean));
    expect(() => boolean().format('string')).toThrowError(new TypeError(messages.boolean));
    expect(() => boolean().format({})).toThrowError(new TypeError(messages.boolean));
  });
});
