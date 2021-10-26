import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

interface SelectBoxOption {
  text: string;
  value: number;
}

@Component({
  selector: 'app-yoyaku-site3',
  templateUrl: './yoyaku-site3.component.html',
  styleUrls: ['./yoyaku-site3.component.scss']
})
export class YoyakuSite3Component implements OnInit, OnChanges {

  displaySelectBoxOptions: SelectBoxOption[] = []; // 表示用のセレクトボックスのオプション
  selectedVal!: number; // セレクトボックスで選択したオプションのvalue
  inputFilteringVal!: string; // フィルタリングの条件となる値
  //msg!: string;// 現在時刻の表示



  constructor() { }

//テキストボックス用に成用したリスト（配列）
  boardings:number[] = [];
  /*changes(): void {
    console.log(this.getOriginalSelectBoxOptions().values)
    //this.boardings[] = new Array(this.getOriginalSelectBoxOptions().values);
  }*/
  ngOnChanges(){
    console.log(' [yoyaku-site3] ngOnChanges');
  }



  ngOnInit(): void {
    this.initSelectBox();
  }
  initSelectBox(): void {
    this.displaySelectBoxOptions = this.getOriginalSelectBoxOptions();
    this.inputFilteringVal = '';
  }
  getOriginalSelectBoxOptions(): SelectBoxOption[] {
    return [
      {text: '0', value: 0},
      {text: '1', value: 1},
      {text: '2', value: 2},
      {text: '3', value: 3},
      {text: '4', value: 4},
    ];
  }
  filteringSelectBoxOptions(): void {
    this.displaySelectBoxOptions =
      this.getOriginalSelectBoxOptions()
        .filter(option => option.text.indexOf(this.inputFilteringVal) >= 0);
  }

  //現在時刻を取得し画面に表示するメソッド
  /*show(e: any){
    this.msg = new Date().toLocaleString();
    console.log(e);
  }*/


  /*ngOnChanges(changes: SimpleChanges){
    console.log(' [yoyaku-site3] ngOnChanges');
    for(let prop in changes){
      let change = changes[prop];
      console.log(`${prop} : ${change.previousValue} =>
      ${change.currentValue}`);
    }
  }*/
}
