import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    total(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    totalWithDiscount(discount: number): number {
        if (discount < 0 || discount > 100) {
            throw new RangeError('discount must be between 0 and 100');
        }
        return Math.round(this.total() * (1 - discount / 100) * 100) / 100;
    }

    remove(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}