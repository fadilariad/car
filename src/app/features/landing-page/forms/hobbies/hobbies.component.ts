import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  @Output() onChange: EventEmitter<number[]> = new EventEmitter<number[]>();
  hobbies: { name: string, id: number }[] = [
    { name: 'Off road', id: 1 },
    { name: 'Hunting', id: 2 },
    { name: 'Ski', id: 3 },
    { name: 'Drift', id: 4 },
    { name: 'Drag Racing', id: 5 }
  ];

  selectedHobbies: Set<number> = new Set<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onHobbyChecked(checked: boolean, id: number) {
    if (checked) {
      this.selectedHobbies.add(id);
    } else {
      this.selectedHobbies.delete(id);
    }
    this.onChange.emit([...this.selectedHobbies]);
  }
}
