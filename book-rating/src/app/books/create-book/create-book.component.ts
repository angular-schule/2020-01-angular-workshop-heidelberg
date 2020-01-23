import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.invalid && control.touched;
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // Hands On!
    // 1. erstelle den EventEmitter create
    // 2. versende ein Buch mit create
    // 3. subscribe auf das Event im Dashboard (HTML!)
    // 4. füge dem Books-Array das neue Buch hinzu!

    this.bookForm.reset();
  }

}
