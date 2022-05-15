import { ReactiveFormsModule } from '@angular/forms';
import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { SecondTestComponent } from './second-test.component';

describe('SecondTestComponent', () => {
  it('should create', async () => {
    await render(SecondTestComponent, {
      imports: [ReactiveFormsModule],
    });
    expect(screen.getByText('second-test works!'));
  });

  it('should gretting with input value', async () => {
    await render(SecondTestComponent, {
      imports: [ReactiveFormsModule],
    });
    const nameControl = screen.getByTestId('name-gretting');
    await userEvent.type(nameControl, 'Enrique');
    fireEvent.click(screen.getByText('Saluda'));
    expect(screen.getByTestId('gretting').textContent).toEqual('Hola, Enrique');
  });
});
