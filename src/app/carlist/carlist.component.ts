import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
})
export class CarlistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  posts = [
    { title: 'Игры подорожали', content: 'игры стали дороже в связи с санкциями', date: "01.01.2022"  },
    { title: 'РОССИЯ ВИГРАЛА ЧЕМПИОНАТ МИРА ПО ОЛИМПИЙСКИМ ИГРАМ', content: 'Самая долгая игра в мире за всю историю олимпийских игр', date: "01.01.2022"  },
    { title: 'Вышла игра "God of War: Ragnarok"', content: 'Новая, ожидаемая большей частью населения игра', date: "10.11.2022" },
  ];
}
