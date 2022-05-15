import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('Test1', async () => {
    await render(AppComponent);

    expect(screen.getByRole('heading').textContent).toEqual(
      'Angular13 @Testing-Library Jest'
    );
  });
});
