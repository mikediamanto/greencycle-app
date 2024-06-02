import { AfterViewInit, Component } from '@angular/core';
import { RewardsCardComponent } from './rewards-card/rewards-card.component';
import { RewardsCardItemComponent } from './rewards-card-item/rewards-card-item.component';
declare var Splide: any;
@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [RewardsCardComponent, RewardsCardItemComponent],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.scss'
})
export class RewardsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    //Image Sliders
    var splide = document.getElementsByClassName('splide');
    if (splide.length) {
      var singleSlider = document.querySelectorAll('.single-slider');
      if (singleSlider.length) {
        singleSlider.forEach(function (e) {
          var single = new Splide('#' + e.id, {
            type: 'loop',
            autoplay: true,
            interval: 4000,
            perPage: 1,
          }).mount();
          var sliderNext = document.querySelectorAll('.slider-next');
          var sliderPrev = document.querySelectorAll('.slider-prev');
          sliderNext.forEach(el => el.addEventListener('click', el => { single.go('>'); }));
          sliderPrev.forEach(el => el.addEventListener('click', el => { single.go('<'); }));
        });
      }

      var doubleSlider = document.querySelectorAll('.double-slider');
      if (doubleSlider.length) {
        doubleSlider.forEach(function (e) {
          var double = new Splide('#' + e.id, {
            type: 'loop',
            autoplay: true,
            interval: 4000,
            arrows: false,
            perPage: 2,
          }).mount();
        });
      }

      var trippleSlider = document.querySelectorAll('.tripple-slider');
      if (trippleSlider.length) {
        trippleSlider.forEach(function (e) {
          var tripple = new Splide('#' + e.id, {
            type: 'loop',
            autoplay: true,
            padding: {
              left: '0px',
              right: '80px',
            },
            interval: 4000,
            arrows: false,
            perPage: 2,
            perMove: 1,
          }).mount();
        });
      }
    }

    var topicSlider = document.querySelectorAll('.topic-slider');
    if (topicSlider.length) {
      var topic = new Splide('.topic-slider', {
        type: 'loop',
        autoplay: false,
        padding: {
          left: '15px',
          right: '40px',
        },
        arrows: false,
        perPage: 3,
        perMove: 1,
      }).mount();
    }
    var storySlider = document.querySelectorAll('.story-slider');
    if (storySlider.length) {
      var topic = new Splide('.story-slider', {
        type: 'loop',
        autoplay: false,
        padding: {
          left: '0px',
          right: '40px',
        },
        arrows: false,
        perPage: 4,
        perMove: 1,
      }).mount();
    }

  }
}
