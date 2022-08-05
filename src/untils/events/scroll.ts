export default abstract class OnScroll {
  private static _handlers: ((ev: Event) => void)[] = [];

  static boot(): void {
    addEventListener('scroll', async (ev: Event) => {
      for (const handler of this._handlers) await handler(ev);
    });
  }

  static on(handler: (ev: Event) => void) {
    this._handlers.push(handler);
  }
}
