import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

describe('Cart', () => {
  let cart: Cart;
  const a: Buyable = { id: 1, name: 'A', price: 100 };
  const b: Buyable = { id: 2, name: 'B', price: 50.5 };

  beforeEach(() => {
    cart = new Cart();
  });

  test('total() считает сумму без скидки', () => {
    cart.add(a);
    cart.add(b);
    expect(cart.total()).toBe(150.5);
  });

  test('totalWithDiscount(0) не меняет сумму', () => {
    cart.add(a);
    expect(cart.totalWithDiscount(0)).toBe(100);
  });

  test('totalWithDiscount(10) применяет скидку 10%', () => {
    cart.add(a);
    cart.add(b);
    // 150.5 - 10% = 135.45
    expect(cart.totalWithDiscount(10)).toBeCloseTo(135.45, 2);
  });

  test('totalWithDiscount() бросает ошибку при скидке < 0', () => {
    expect(() => cart.totalWithDiscount(-5)).toThrow(RangeError);
  });

  test('totalWithDiscount() бросает ошибку при скидке > 100', () => {
    expect(() => cart.totalWithDiscount(101)).toThrow(RangeError);
  });

  test('remove(id) удаляет все позиции с указанным id', () => {
    cart.add(a);
    cart.add({ id: 1, name: 'A duplicate', price: 5 });
    cart.add(b);
    cart.remove(1);
    expect(cart.items).toEqual([b]);
  });
});
